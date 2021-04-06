import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import FqWebSocket from '@/common/webSocket'
let variablePool={}

variablePool.websocketMap={}//初始化Websocket 连接池
variablePool.handCloseConfigWsCount=0
export default {
    //关闭所有websocket连接
    stopWebsocket(context,key){
        try{
            if(key){
                // key=key.toLowerCase()
                let websocketMap=$vm.websocketMap||{}
                let _key=websocketMap[key]
                if(_key){
                    // _key=_key.toLowerCase()
                    fqCommon.log(`当前关闭的数据推送通道为key=${_key}`)
                    $vm.websocket&&$vm.websocket.send(_key)
                    delete websocketMap[key]
                    // fqCommon.log('当前关闭的数据推送通道为',key)
                }
            }else{
                fqCommon.log(`当前关闭的数据推送通道为所有`)
                let websocketMap=$vm.websocketMap
                if(websocketMap){
                    for(let i in websocketMap){
                        let key=websocketMap[i]
                        if(key){
                            // key=key.toLowerCase()
                            fqCommon.log('当前关闭的数据推送通道为',i,key)
                            $vm.websocket&&$vm.websocket.send(key)
                            delete websocketMap[key]
                        }
                    }
                    $vm.websocketMap={}
                }
            }
        }catch(err){
            fqCommon.error('当前关闭websocket通道失败',key,err)
        }
    },
    //开启对应通道
    startWebsocket(context,options){
        fqCommon.log('当前打开的数据推送通道为',options,$vm.websocket&&$vm.websocket.readyState)
        // 0 ：对应常量CONNECTING (numeric value 0)，
        // 正在建立连接连接，还没有完成。The connection has not yet been established.
        // 1 ：对应常量OPEN (numeric value 1)，
        // 连接成功建立，可以进行通信。The WebSocket connection is established and communication is possible.
        // 2 ：对应常量CLOSING (numeric value 2)
        // 连接正在进行关闭握手，即将关闭。The connection is going through the closing handshake.
        // 3 : 对应常量CLOSED (numeric value 3)
        // 连接已经关闭或者根本没有建立。The connection has been closed or could not be opened.
        if(!$vm.websocket||($vm.websocket.readyState==$vm.websocket.CONNECTING)){
            setTimeout(()=>{
                context.dispatch('startWebsocket',options)
            },500)
            return
        }
        try{
            if(options){
                let {key,value}=options
                if(key){
                    // key=key.toLowerCase()
                    // value=value.toLowerCase()
                    $vm.websocket&&$vm.websocket.send(key)
                    $vm.websocketMap&&($vm.websocketMap[key]=value)
                }
            }else{
                let websocketMap=$vm.websocketMap
                if(websocketMap){
                    for(let i in websocketMap){
                        let key=i
                        // key=key.toLowerCase()
                        fqCommon.log('当前打开的数据推送通道为',key)
                        $vm.websocket&&$vm.websocket.send(key)
                    }
                }
            }
        }catch(err){
            fqCommon.error('当前打开的websocket通道失败',options,err)
        }
    },
    //重连websocket
    reloadUserWebsocket(context,options){
        let orderKey=options.orderKey
        context.dispatch('startWebsocket',{
            key:`{"channel":"orders.*.${orderKey}","op":"sub"}`,
            value:`{"channel":"orders.*.${orderKey}","op":"unsub"}`
        })
        variablePool.handCloseConfigWsStatus=true//主动关闭连接
        $vm.websocket&&$vm.websocket.close()
        context.dispatch("initConfigWebsocket",{})
        setTimeout(()=>{
            fqCommon.log('开始打开已请求通道',variablePool.handCloseConfigWsCount)
            context.dispatch('startWebsocket')
        },5000)
    },
    //初始化配置相关websocket
    initConfigWebsocket(context,options){
        if(!$vm.websocketMap){
            $vm.websocketMap={}
        }
        if(variablePool.handCloseConfigWsCount>0){
            setTimeout(()=>{
                fqCommon.log('开始打开已请求通道',variablePool.handCloseConfigWsCount)
                context.dispatch('startWebsocket')
            },5000)
        }
        //"market.{symbol}.trade.detail"//最新成交
        //"market.{symbol}.depth.step0"//深度
        //"market.{symbol}.kline.{time}"//K线
        //"orders.{symbol}.{userId}"//订单
        //"market.ticker"//ticker数据
        let userInfo=context.getters.getUserInfo||{}
        $vm.websocket=new FqWebSocket(URL.wsTokenUrl,{
            onopen(evt,ws){
                // Web Socket 已连接上，使用 send() 方法发送数据
                $vm.websocketLinkStatus=true//websocket 连接成功
                fqCommon.info("数据发送中...",'Web Socket 已连接上，使用 send() 方法发送数据')
            },
            onclose(evt,ws){
                // 关闭 websocket
                fqCommon.warn("configWebsocket 连接已关闭...",evt,ws)
                $vm.websocketLinkStatus=false //websocket 连接失败 或关闭
                if(!variablePool.handCloseConfigWsStatus){
                    if(variablePool.handCloseConfigWsCount>=Constants.WEBSOCKETRETRYCOUNT){
                        fqCommon.warn("configWebsocket 连接重试次数为"+variablePool.handCloseConfigWsCount+",不再进行重试")
                        return
                    }
                    variablePool.handCloseConfigWsCount++
                    setTimeout(()=>{
                        context.dispatch('initConfigWebsocket',options)
                    },3000)
                    fqCommon.log("非主动关闭的连接，重新建立configWebsocket连接,次数为"+variablePool.handCloseConfigWsCount)
                }else{
                    variablePool.handCloseConfigWsCount=0
                    fqCommon.warn("主动关闭的连接，不需要重连configWebsocket...");
                    variablePool.handCloseConfigWsStatus=false
                }
            },
            onmessage(evt,ws){
                $vm.websocketLinkStatus=true//websocket 连接成功
                variablePool.handCloseConfigWsCount=0
                let result = evt.data
                if(result&&typeof(result)==='string'){
                    result=JSON.parse(result)
                }
                if(result&&typeof(result)==='object'){
                    let event=result.event
                    // fqCommon.log('当前接收的websocket 数据事件为',event)
                    switch (event) {
                        case Constants.WEBSOCKETEVENT.TICKER://ticker
                            //ticker数据处理
                            let fq_app_component=document.getElementById('app')
                            if(fq_app_component){
                                let _vue=fq_app_component.__vue__
                                if(_vue){
                                    _vue.loadWebsocketTickerData(result.data)
                                }
                            }
                            break
                        case Constants.WEBSOCKETEVENT.TRADE://最新交易
                            //交易中心最新成交数据
                            let fq_exchange_last_trade_component=document.querySelector('.fq-exchange-last-trade-component')
                            if(fq_exchange_last_trade_component){
                                let _vue=fq_exchange_last_trade_component.__vue__
                                if(_vue){
                                    _vue.loadWebsocketTradeData(result.data)
                                }
                            }
                            break
                        case Constants.WEBSOCKETEVENT.DEPTHS://深度数据
                            //交易中心深度数据
                            let fq_exchange_page_obj=document.querySelector('.fq-exchange-page')
                            if(fq_exchange_page_obj){
                                let __vue=fq_exchange_page_obj.__vue__
                                if(__vue){
                                    let fq_depth_com=__vue.$refs.fq_depth_com
                                    if(fq_depth_com){
                                        fq_depth_com.loadWebsocketDepthData(result.data)
                                    }
                                }
                            }
                            break
                        case Constants.WEBSOCKETEVENT.KLINEMESSAGE://k线数据
                            //首页K线数据
                            let fq_index_kline_component=document.querySelector('.fq-index-kline-component')
                            if(fq_index_kline_component){
                                let _vue=fq_index_kline_component.__vue__
                                if(_vue){
                                    _vue.loadWebsocketKlineData(result.data)
                                }
                            }
                            //交易中心K线数据
                            let fq_exchange_kline_component=document.querySelector('.fq-exchange-kline-component')
                            if(fq_exchange_kline_component){
                                let _vue=fq_exchange_kline_component.__vue__
                                if(_vue){
                                    _vue.loadWebsocketKlineData(result.data)
                                }
                            }
                            //交易中心K线数据
                            let fq_exchange_trade_kline_component=document.querySelector('.fq-exchange-trade-kline-component')
                            if(fq_exchange_trade_kline_component){
                                let _vue=fq_exchange_trade_kline_component.__vue__
                                if(_vue){
                                    _vue.loadWebsocketKlineData(result.data)
                                }
                            }
                            break
                        case Constants.WEBSOCKETEVENT.ORDERUNDOSUCCESS://订单撤销成功的推送
                            if($vm){
                                let undoOrderNotifyArr=window.undoOrderNotifyArr||[]
                                let notify=undoOrderNotifyArr.shift()
                                while(notify){
                                    notify.close()
                                    notify=undoOrderNotifyArr.shift()
                                }
                                $vm.$notify({
                                    title: $vm.$lang('撤销成功'),
                                    message: $vm.$lang('撤单成功'),
                                    type: 'success'
                                })
                            }
                            context.commit('filterAuthorizeList',result.data)

                            //撤单成功刷新交易组件
                            let $ref_exchange_com=document.querySelector('.fq-exchange-page')
                            if($ref_exchange_com){
                                let $trade_vm=$ref_exchange_com.__vue__.$refs.fq_trade_com
                                $trade_vm&&$trade_vm.refreshTrade()
                            }
                            break
                        case Constants.WEBSOCKETEVENT.ORDERUNDOFAILURE://订单撤销失败  订单正在撮合中不能撤消
                            // fqCommon.$lang(langObj,key,options)
                            result=result.data
                            if(typeof(result)==='string'){
                                result=JSON.parse(result)
                            }
                            if($vm){
                                $vm.$notify({
                                    title: $vm.$lang('订单正在撮合，不支持撤销'),
                                    message: $vm.$lang('订单正在撮合，不支持撤销'),
                                    type: 'warning'
                                })
                            }
                            break
                        case Constants.WEBSOCKETEVENT.ORDERPFL://下单成功
                            result=result.data
                            if(typeof(result)==='string'){
                                result=JSON.parse(result)
                            }
                            //当前委托订单
                            let authorizeList=context.state.authorizeList
                            if(authorizeList){
                                authorizeList.forEach(item=>{
                                    if(item.code==result.code){//如果推送的订单号一样
                                        if (Number(item.orderTypeName) === 0 && Number(item.directionName) === 0) { // 当前订单为市价且交易类型为买时
                                            item.actualAmount += result.actualNum
                                        } else {
                                            item.actualNum += result.actualNum
                                        }
                                    }
                                })
                                context.commit('setAuthorizeList',authorizeList)
                            }
                            //当前委托订单
                            let ordersAuthorizeList=context.state.ordersAuthorizeList
                            if(ordersAuthorizeList){
                                ordersAuthorizeList.forEach(item=>{
                                    if(item.code==result.code){//如果推送的订单号一样
                                        if (Number(item.orderTypeName) === 0 && Number(item.directionName) === 0) { // 当前订单为市价且交易类型为买时
                                            item.actualAmount += result.actualNum
                                        } else {
                                            item.actualNum += result.actualNum
                                        }
                                    }
                                })
                                context.commit('setOrdersAuthorizeList',ordersAuthorizeList)
                            }

                            //24小时订单
                            let historyAuthorizeList=context.state.historyAuthorizeList
                            if(historyAuthorizeList){
                                historyAuthorizeList.forEach(item=>{
                                    if(item.code==result.code){//如果推送的订单号一样
                                        item.actualNum += result.actualNum
                                    }
                                })
                                context.commit('setHistoryAuthorizeList',historyAuthorizeList)
                            }

                            //摄合完成订单处理
                            if (result.isFinish) { // 当撮合完成
                                context.commit('filterAuthorizeList',result)
                            }
                            //下单处理刷新交易组件
                            let $ref_exchange_com_obj=document.querySelector('.fq-exchange-page')
                            if($ref_exchange_com_obj){
                                let $trade_vm=$ref_exchange_com_obj.__vue__.$refs.fq_trade_com
                                $trade_vm&&$trade_vm.refreshTrade()
                            }
                            break
                        case Constants.WEBSOCKETEVENT.USERMESSAGE://用户信息推送
                            result=result.data
                            if(typeof(result)==='string'){
                                result=JSON.parse(result)
                            }
                            if($vm){
                                $vm.$notify({
                                    title: $vm.$lang('您有新的消息'),
                                    message: $vm.$lang('您有新的消息'),
                                    type: 'success'
                                })
                            }
                            context.commit('updateUserMsgList',result)
                            break
                        case Constants.WEBSOCKETEVENT.RECHARGESUCCESS://用户充值状态 @TODO                            
                            result=result.data
                            if(typeof(result)==='string'){
                                result=JSON.parse(result)
                            }
                            if($vm&&result){
                                $vm.$notify({
                                    title: $vm.$lang('您有新的消息'),
                                    dangerouslyUseHTMLString:true,
                                    message: $vm.$lang(result.content),
                                    type: 'success'
                                })
                            }
                            break
                        case Constants.WEBSOCKETEVENT.AGENCYCERSUC://账户类型推送  机构账户认证成功
                            result=result.data
                            if(typeof(result)==='string'){
                                result=JSON.parse(result)
                            }
                            let userInfo=context.getters.getUserInfo||{}
                            if(userInfo){
                                userInfo.userType=1
                            }
                            context.commit('setUserInfo',userInfo)
                            break
                        case Constants.WEBSOCKETEVENT.PING://心跳
                            let ts=result.ts
                            ws.send(`{"pong":${ts}}`)
                            break                    
                        default:
                            break;
                    }
                }
            },
            onerror(evt,ws){
                $vm.websocketLinkStatus=false //websocket 连接失败 或关闭
                fqCommon.error('[store][initConfigWebsocket]','websocket 连接失败',evt)
            },
        },{token:userInfo.token})
    },
}
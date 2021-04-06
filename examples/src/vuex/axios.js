import {Constants} from '@/common/env'
// import qs from 'qs'
import fqCommon from '@/common/common'
// import Nanobar from 'nanobar'
// let mprogress = new Mprogress({
//     template: 3
// })
// let nanobar_axios=new Nanobar({
//     id:'nanobar_axios',
// })
async function get(options,callback){
    return request('get',options,callback)
}
async function put(options,callback){
    return request('put',options,callback)
}
async function post(options,callback){
    return request('post',options,callback)
}
async function del(options,callback){
    return request('delete',options,callback)
}

async function request(type,options,callback){
    if(!options){
        options={}
    }
    let {url,params,headers,store,vm,needToken,
        // needAPIkey,
        // coinpayNeedToken,needAPPId,outApi,
        retry,noProgress,noholdFilter}=options
    // if(!noProgress){
    //     mprogress.start()
    // }
    if(!vm){
        vm=window.$vm
    }
    store=store||vm.$store
    if(localStorage.getItem('test_payGainStatus')!=1){
        let webConfig=store.getters.getWebConfig||{}
        if(!noholdFilter&&webConfig&&webConfig.payGainStatus==1){//系统维护中
            vm.jumpPage('uphold')
            // next({
            //     name: 'uphold',
            // })
            // if(!noProgress){
            //     mprogress.end()
            //     // nanobar_axios.go(100)
            // }
            return {}
        }
    }
    if(!params){
        params={}
    }
    if(!headers){
        headers={}
    }
    if(options.headers){
        for(let i in options.headers){
            if(options.headers.hasOwnProperty(i)){
                headers[i]=options.headers[i];
            }
        }
    }
    if(!headers['Content-Type']){
        headers['Content-Type']='application/x-www-form-urlencoded'
    }
    if(retry){
        headers['retry']=1
    }
    if(store){
        let userInfo=store.getters.getUserInfo
        let token=userInfo?userInfo.token:''
        if(!!needToken){
            if(token){
                headers[Constants.AUTHORIZATION]=token
            }
        }
    }
    if(params.$lang){
        params.$lang=params.$lang.replace(/-/gi,'_')
        params.$lang=params.$lang.toUpperCase()=="ZH_CN"?params.$lang:"EN" //by cici
    }
    fqCommon.warn("当前请求地址：",url,'当前请求参数',params)
    let data=null
    if(type=='get'){
        data=await getFunc(url,params,headers,callback)
    }else if(type=='post'){
        data=await postFunc(url,params,headers,callback)
    }else if(type=='delete'){
        data=await delFunc(url,params,headers,callback)
    }else if(type=='put'){
        data=await putFunc(url,params,headers,callback)
    }else{
        data=await postFunc(url,params,headers,callback)
    }

    // if(data){
    //     let result=data.data
    //     if(result&&result.code=='02_01_0_001_01_009'){//需要登录授权
    //         store.commit('setUserInfo')
    //         vm&&vm.jumpLogin()
    //         return data
    //     }
    // }
    //判断返回值处理
    return data
}
/**
 * post 请求
 * @param {*} params
 * @param {*} callback
 */
async function postFunc(url,params,headers,callback){
    return await axios.post(url,Qs.stringify(params),{
        headers:headers,
        timeout:Constants.AXIOTIMEOUT,
    })    
}
/**
 * put 请求
 * @param {*} params
 * @param {*} callback
 */
async function putFunc(url,params,headers,callback){
    return await axios.put(url,Qs.stringify(params),{
        headers:headers,
        timeout:Constants.AXIOTIMEOUT,
    })    
}
/**
 * delete 请求
 * @param {*} params
 * @param {*} callback
 */
async function delFunc(url,params,headers,callback){
    return await axios.patch(url,Qs.stringify(params),{
        headers:headers,
        timeout:Constants.AXIOTIMEOUT,
    })    
}

/**
* get 请求
* @param {*} params
* @param {*} callback
*/

async function getFunc(url,params,headers,callback){
    return await axios.get(url,{
        params:params,
        headers:headers,
        timeout:Constants.AXIOTIMEOUT,
    })
}

export {
    get,
    post,
    put,
    del,
}
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
import RouterURL from './conf/routers.conf'
import URL from './conf/url.conf'
import apiConfig from './conf'
import regions from './conf/regions.json'

//常量定义
const PLATEFORM='YOUI'
const Constants={
    PLATEFORM:PLATEFORM,
    APICONFIG:apiConfig,
    VERSION:'1.0.0',
    RAGIONS:regions.map(item=>{//国家
        return {
            name:item[0],
            key:item[2],
            code:item[1],
        }
    }),
    // AUTHORIZATION:'authorization-pie',//平台授权标识
    REQUEST_TIMEOUT:15*1000,//超时时间设置为15秒
    LANGMAP:{
        // code代码   name 名称   icon 图标  help 帮助中心代码
        'EN':{code:'en',name:'English',icon:process.env.VUE_APP_JS_SERVER+'/static/images/common/country/en.png',help:'en-us',coinpay:'EN'},
        'KOREAN': {code:'korean',name:'한국어',icon:process.env.VUE_APP_JS_SERVER+'/static/images/common/country/korean.png',help:'korean',coinpay:'korean'},
        'JAPANESE': {code:'japanese',name:'日本語',icon:process.env.VUE_APP_JS_SERVER+'/static/images/common/country/japanese.png',help:'japanese',coinpay:'japanese'},
        'ZH-CN': {code:'zh',name:'简体中文',icon:process.env.VUE_APP_JS_SERVER+'/static/images/common/country/zh-cn.png',help:'zh-cn',coinpay:'zh-cn'}
    },
    AXIOTIMEOUT:apiConfig.axioTimeout,//请求超时时间
    COUNTDOWNTIME:{//倒计时时间  单位s
        LOGIN:100,//登录验证码发送倒计时时间
        REG:100,//注册验证码发送倒计时时间
        GOOGLECODEAUTH:100,//谷歌验证码发送倒计时时间
        COUNTDOWNTIME:120,//默认倒计时时间
    },
    LOCALSTORAGEKEY:{//存储key
        USERKEY:{
            USERINFO:PLATEFORM+'_USER_INFO',//用户信息key
        }
    }
}

const routerMode=apiConfig.routerMode

const imageServer = apiConfig.imageServer;
const routerAuth=true
export {
    routerMode,//路由模式定义
    RouterURL,//路由相关定义
    Constants,//全局配置参数定义
    imageServer,
    routerAuth,
    URL// 请求地址定义
}

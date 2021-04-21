// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import App from "./App";
import "@/registerServiceWorker";
import router from "@/router";
import fqCommon from "@/common/common";
import store from "@/vuex/store";
// import vueAnalytics from 'vue-analytics'
// import Mprogress from "mprogress/build/js/mprogress";
// import "mprogress/build/css/mprogress.css";
import { RouterURL } from "@/common/env";
import YOUI from "./../../src/index";
import "./../../assets/less/themes/default/index.less";
import "highlight.js/styles/arduino-light.css";
import vueHighlightjs from "@/vue/vue-highlightjs";
import qrcodeConsole from "qrcode-terminal";
const yoCode = () =>
  import(/* webpackChunkName: "yo-component-code" */ "@com/common/yo-code");
const yoAnchor = () =>
  import(/* webpackChunkName: "yo-component-anchor" */ "@com/common/yo-anchor");
const yoExample = () =>
  import(
    /* webpackChunkName: "yo-component-example" */ "@com/common/yo-example"
  );
const yoDesc = () =>
  import(/* webpackChunkName: "yo-component-desc" */ "@com/common/yo-desc");

import Plugins from "@/vue/plugins";
import Filters from "@/vue/filters";
import Directives from "@/vue/directives";

const defaultImage = "/static/images/default.png";
// if (process.env.NODE_ENV === 'production') {
//     Vue.use(vueAnalytics, {
//         id: Constants.APICONFIG.google.ga,
//         router
//     })
// }

// let mprogress = new Mprogress({
//   template: 3
// });
Vue.use(vueHighlightjs);
Vue.use(YOUI);
Vue.use(Plugins);
Vue.use(Filters);
Vue.use(Directives);

//全局组件定义
Vue.component("yoDesc", yoDesc);
Vue.component("yoCode", yoCode);
Vue.component("yoAnchor", yoAnchor);
Vue.component("yoExample", yoExample);

//只支持以VUE_APP_开头的变量
Vue.prototype.IMAGE_SERVER = process.env.VUE_APP_IMAGE_SERVER;
Vue.prototype.CSS_SERVER = process.env.VUE_APP_CSS_SERVER;
Vue.prototype.JS_SERVER = process.env.VUE_APP_JS_SERVER;

// //全局路由跳转 query 方式
// Vue.prototype.jumpLogin = function (){
//     // let redirecturl=encodeURIComponent(window.location.href)
//     let redirecturl=encodeURIComponent(this.$route.fullPath)
//     this.qJumpPage('login',{redirecturl:redirecturl})
// }

// //全局返回
// Vue.prototype.historyBack = function (back){
//     let that=this
//     if(!back){
//         back=-1
//     }
//     that.$router.go(back)
// }

// Vue.prototype.loadingShow=function(type,style){
//     if(typeof(type)==='boolean'){
//         if(type){
//             type='block'
//         }else{
//             type='none'
//         }
//     }
//     if(!type){
//         type='none'
//     }
//     let loading=document.getElementById("loading")
//     if(type=='block'){
//         if(style){
//             loading.style.cssText='background:none'
//         }
//     }else{
//         loading.style.cssText=''
//     }
//     if(loading){
//         loading.style.display=type
//         // document.body.removeChild(loading)
//     }
// }

// //添加路由
// Vue.prototype.addRouter=function(route){
//     let that=this
//     if(!that.RouterMap){
//         let RouterMap={}
//         let routes=router.options.routes||[]
//         routes.forEach(item=>{
//             RouterMap[item.name]=true
//         })
//         that.RouterMap=RouterMap
//     }else{
//         if(that.RouterMap[route.name]){
//             that.jumpPage(route.name)
//         }else{
//             that.$router.addRoutes([route])
//             that.jumpPage(route.name)
//         }
//     }
// }

// //全局window.location跳转
// Vue.prototype.openPage = function (url,flag,options={}){
//     if(!url){
//         return
//     }
//     if(flag){
//         window.open(url,options.name||'_blank',options.specs||'',options.replace||false)
//     }else{
//         window.location.href=url
//     }
// }
// //全局跳转
// Vue.prototype.jumpPage = function (url,params,query,redirect){
//     this.qJumpPage(url,query,params,redirect)
// }
// //获取语言
// function $lang(langObj,key,options){
//     // fqCommon.error(store)
//     if(!langObj){
//         langObj=store.getters.getLangObj
//     }
//     return fqCommon.$lang(langObj,key,options)
// }
// //全局方法 获取语言
// Vue.prototype.$lang = function (key,options){
//     let langObj=this.$store.getters.getLangObj;
//     return $lang(langObj,key,options)
// }

console.log(
  "%c" + fqCommon.lang(null, "欢迎使用YOUI！"),
  "background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:25px"
);

router.beforeEach((to, from, next) => {
  // mprogress && mprogress.start();
  let $store = router.app.$store || store;
  let langObj = $store ? $store.getters.getLangObj : null;
  let docTitle = to.meta.title;
  // if (docTitle) {
  //     document.title =$lang(langObj,'YOUI')//+$lang(langObj,docTitle)
  // }
  if (!RouterURL[to.name]) {
    //如果路由配置不存在则跳到404页
    next({
      name: "*"
    });
    return;
  }
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    let userInfo = $store.getters.getUserInfo;
    if (userInfo && userInfo.userId) {
      // 通过vuex state获取当前的token是否存在
      // nprogress.done()
      next();
    } else {
      // nprogress.done()
      next({
        name: "login",
        query: { redirecturl: encodeURIComponent(to.fullPath) } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    // nprogress.done()
    next();
  }
});

router.afterEach((to, from) => {
  // mprogress && mprogress.end();
  let loading = document.getElementById("loading");
  if (loading) {
    loading.style.display = "none";
  }
});

Vue.config.productionTip = false;

window.$vm = new Vue({
  router,
  store,
  render: h => h(App)
});
window.$vm.$mount("#app");

qrcodeConsole.generate("https://github.com/yo-ui", function(qrcode) {
  console.log(qrcode);
  console.log(` %c  一个基于Vue2.x的高质量UI组件库`, "color: #2470ff");
});

/**
 * 路由组件处理
 */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { routerMode } from "@/common/env";
import Routers from "./routers";

// Vue.use(VueRouter)

export default new VueRouter({
  mode: routerMode,
  base: process.env.VUE_APP_API_HOST === "gitee" ? "youi" : "",
  routes: [...Routers]
});

import Vue from "vue";
import { Button, Select } from "youi";
import App from "./App.vue";
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为  Vue.use(Button)
      Vue.use(Select) */
new Vue({
  el: "#app",
  render: h => h(App)
});

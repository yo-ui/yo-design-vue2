import Vue from 'vue';
import YOUI from 'yo-design-vue';
import 'yo-design-vue/lib/default/index.css';
import App from './App.vue';
Vue.use(YOUI);
new Vue({ el: '#app', render: h => h(App) });
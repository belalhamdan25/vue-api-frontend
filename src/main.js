import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast);


Vue.config.productionTip = false;

import VueSpinners from "vue-spinners";
Vue.use(VueSpinners);

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'blue',
  failedColor: 'red',
  thickness: '3px',
  location: 'top',
  autoRevert: true,
  inverse: false,
})
Vue.component('pagination', require('laravel-vue-pagination'));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

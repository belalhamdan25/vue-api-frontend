import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import VueSpinners from "vue-spinners";
Vue.use(VueSpinners);

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: '#00B3EC',
  failedColor: 'red',
  thickness: '3px',
  location: 'top',
  autoRevert: true,
  inverse: false,
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

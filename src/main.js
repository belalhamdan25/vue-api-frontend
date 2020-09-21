import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import VueSpinners from "vue-spinners";
import VueProgressBar from 'vue-progressbar'

Vue.use(VueSpinners);

Vue.use(VueProgressBar, {
  color: 'blue',
  failedColor: 'red',
  height: '2px'
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

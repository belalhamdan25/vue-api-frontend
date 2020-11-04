"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _vueToastNotification = _interopRequireDefault(require("vue-toast-notification"));

require("vue-toast-notification/dist/theme-default.css");

var _vueSpinners = _interopRequireDefault(require("vue-spinners"));

var _vueProgressbar = _interopRequireDefault(require("vue-progressbar"));

var _vueSocialSharing = _interopRequireDefault(require("vue-social-sharing"));

var _vueSliderComponent = _interopRequireDefault(require("vue-slider-component"));

require("vue-slider-component/theme/default.css");

var _vuesax = _interopRequireDefault(require("vuesax"));

require("vuesax/dist/vuesax.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueToastNotification["default"]);

_vue["default"].config.productionTip = false;

_vue["default"].use(_vueSpinners["default"]);

_vue["default"].use(_vueProgressbar["default"], {
  color: '#41B883',
  failedColor: 'red',
  thickness: '3px',
  location: 'top',
  autoRevert: true,
  inverse: false
});

_vue["default"].component('pagination', require('laravel-vue-pagination'));

_vue["default"].use(require('vue-moment'));

_vue["default"].use(_vueSocialSharing["default"]);

_vue["default"].component('VueSlider', _vueSliderComponent["default"]);

//Vuesax styles
_vue["default"].use(_vuesax["default"], {// options here
});

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");
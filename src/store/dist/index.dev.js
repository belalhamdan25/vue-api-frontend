"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuexPersist = _interopRequireDefault(require("vuex-persist"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    loggedIn: false,
    user: null,
    token: null
  },
  plugins: [new _vuexPersist["default"]().plugin],
  mutations: {
    SET_user: function SET_user(state, payload) {
      state.user = payload;
    },
    SET_token: function SET_token(state, payload) {
      state.token = payload;
    },
    SET_loggedIn: function SET_loggedIn(state, payload) {
      state.loggedIn = payload;
    }
  },
  actions: {
    performLoginAction: function performLoginAction(_ref, payload) {
      var commit = _ref.commit;
      return new Promise(function (resolve, reject) {
        _axios["default"].post("http://localhost/vue-api-backend/public/api/auth/login", {
          email: payload.email,
          password: payload.password
        }).then(function (res) {
          commit("SET_token", res.data.access_token);
          commit("SET_user", res.data.user);
          commit("SET_loggedIn", true);
          resolve(res);
        })["catch"](function (err) {
          reject(err);
        });
      });
    },
    performRegisterAction: function performRegisterAction(_ref2, payload) {
      var commit = _ref2.commit;
      return new Promise(function (resolve, reject) {
        _axios["default"].post("http://localhost/vue-api-backend/public/api/auth/register", {
          first_name: payload.first_name,
          last_name: payload.last_name,
          phone_number: payload.phone_number,
          email: payload.email,
          password: payload.password,
          role_name: payload.role_name
        }).then(function (res) {
          commit("SET_token", res.data.access_token);
          commit("SET_user", res.data.user);
          commit("SET_loggedIn", true);
          resolve(res);
        })["catch"](function (err) {
          reject(err);
        });
      });
    },
    performLogoutAction: function performLogoutAction(_ref3) {
      var commit = _ref3.commit,
          state = _ref3.state;
      return new Promise(function (resolve, reject) {
        _axios["default"].post("http://localhost/vue-api-backend/public/api/auth/logout", {
          token: state.token
        }).then(function (res) {
          commit("SET_token", null);
          commit("SET_user", null);
          commit("SET_loggedIn", false);
          resolve(res);
        })["catch"](function (err) {
          reject(err);
        });
      });
    },
    updateUserInfoAction: function updateUserInfoAction(_ref4, payload) {
      var commit = _ref4.commit,
          state = _ref4.state;
      return new Promise(function (resolve, reject) {
        _axios["default"].patch("http://localhost/vue-api-backend/public/api/auth/update", {
          first_name: payload.first_name,
          last_name: payload.last_name,
          phone_number: payload.phone_number,
          email: payload.email,
          token: state.token
        }).then(function (res) {
          commit("SET_user", res.data.user);
          resolve(res);
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  },
  modules: {},
  getters: {
    get_loggedIn: function get_loggedIn(state) {
      return state.loggedIn;
    },
    get_user: function get_user(state) {
      return state.user;
    }
  }
});

exports["default"] = _default;
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
    token: null,
  },
  mutations: {
    SET_user(state, payload) {
      state.user = payload;
    },
    SET_token(state, payload) {
      state.token = payload;
    },
    SET_loggedIn(state, payload) {
      state.loggedIn = payload;
    },
  },
  actions: {
    performLoginAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost/vue-api-backend/public/api/auth/login", {
            email: payload.email,
            password: payload.password,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performRegisterAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost/vue-api-backend/public/api/auth/register", {
            first_name: payload.first_name,
            last_name: payload.last_name,
            phone_number: payload.phone_number,
            email: payload.email,
            password: payload.password,
            user_type: payload.user_type,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performLogoutAction({ commit,state }) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost/vue-api-backend/public/api/auth/logout",{
            token:state.token
          })

          .then((res) => {
            commit("SET_token", null);
            commit("SET_user", null);
            commit("SET_loggedIn", false);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateUserInfoAction({commit,state},payload){
      return new Promise((resolve, reject) => {
        axios
          .patch("http://localhost/vue-api-backend/public/api/auth/update", {
            first_name: payload.first_name,
            last_name: payload.last_name,
            phone_number: payload.phone_number,
            email: payload.email,
            token:state.token
          })
          .then((res) => {
            commit("SET_user", res.data.user);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  },
  modules: {},
  getters: {
    get_loggedIn(state) {
      return state.loggedIn;
    },
    get_user(state) {
      return state.user;
    },
  },
});

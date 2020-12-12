import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);
import axios from "axios";

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
    token: null,
    skillPressed:null,
  },
  plugins: [new VuexPersistence().plugin],
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
    SET_skillPressed(state,payload) {
      state.skillPressed =payload;
    },
  },
  actions: {
    performLoginAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://vue-api-backend.herokuapp.com/api/auth/login", {
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
          .post("https://vue-api-backend.herokuapp.com/api/auth/register", {
            first_name: payload.first_name,
            last_name: payload.last_name,
            phone_number: payload.phone_number,
            email: payload.email,
            password: payload.password,
            role_name: payload.role_name,
            category_id: payload.category_id,
            location: payload.location,
            rate: payload.rate,
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
          .post("https://vue-api-backend.herokuapp.com/api/auth/logout",{
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
          .post("https://vue-api-backend.herokuapp.com/api/auth/update", {
            first_name: payload.first_name,
            last_name: payload.last_name,
            phone_number: payload.phone_number,
            email: payload.email,
            location: payload.location,
            gender: payload.gender,
            user_img: payload.user_img,
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
    get_token(state) {
      return state.token;
    },
    get_skillPressed(state) {
      return state.skillPressed;
    },
  },
});

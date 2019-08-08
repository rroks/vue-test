import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  user_info: {},
  is_login: false
};

export default new Vuex.Store({
  state: state,
  mutations: {},
  actions: {}
});

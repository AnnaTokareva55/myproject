import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import article from "./modules/article";
import comments from "./modules/comments";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    article,
    comments
  }
});

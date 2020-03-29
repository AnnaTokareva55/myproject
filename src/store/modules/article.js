import axios from "axios";

const articleStore = {
  namespaced: true,
  state: {
    article: {}
  },
  getters: {
    article: ({ article }) => article
  },
  mutations: {
    LOAD_ARTICLE(state, data) {
      state.article = data;
    }
  },
  actions: {
    getArticle: async ({ commit }, id) => {
      await axios
        .get("/api/articles.json")
        .then(response => response.data)
        .then(articlesObj => articlesObj[id])
        .then(article => commit("LOAD_ARTICLE", article));
    }
  }
};

export default articleStore;

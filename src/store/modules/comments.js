import axios from "axios";

const commentsStore = {
  namespaced: true,
  state: {
    comments: {}
  },
  getters: {
    comments: ({ comments }) => Object.values(comments)
  },
  mutations: {
    LOAD_COMMENTS(state, data) {
      state.comments = data;
    }
  },
  actions: {
    getComments: async ({ commit }, idArticle) => {
      await axios
        .get("/api/comments.json")
        .then(response => response.data)
        .then(allCommentsObj => allCommentsObj[idArticle])
        .then(comments => {
          //f (!user || user.password !== password) {
          //  throw new Error("Email или пароль заданы неверно.");
          //}
          commit("LOAD_COMMENTS", comments);
        });
    }
  }
};

export default commentsStore;

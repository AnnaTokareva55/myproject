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
    },
    ADD_COMMENT(state, data) {
      state.comments = { ...state.comments, [data.id]: data };
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
    },
    /**
     * При наличии сервера отправить к нему post-запрос с объектом нового комментария.
     * После получения ответа от сервера об успешном добавлении комментария в БД
     * добавить его объект в хранилище состояний vuex.
     * При получении ответа с данными об ошибке на сервере вернуть ошибку.
     */
    addComment: async ({ commit }, comment) => {
      await commit("ADD_COMMENT", comment);
      //let { data } = await axios.post("/api/comments.json", { comment });
      //if (data.result === 1) {
      //  commit("ADD_COMMENT", comment);
      //} else throw new Error("При добавлении комментария произошла ошибка.");
    }
  }
};

export default commentsStore;

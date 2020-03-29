import axios from "axios";

const usersStore = {
  namespaced: true,
  state: {
    user: {},
    isLogin: false
  },
  getters: {
    user: ({ user }) => user,
    isLogin: ({ isLogin }) => isLogin
  },
  mutations: {
    LOAD_USER(state, data) {
      state.user = data;
      state.isLogin = true;
    },
    EXIT_USER(state) {
      state.isLogin = false;
      state.user = {};
    }
  },
  actions: {
    /**
     * Проверка переданных параметров (email и пароль) осуществляется прямо в action,
     * поскольку отсутствует сервер, где она могла бы происходить.
     * При наличии сервера, осуществлять проверку там и загружать объект соответствующего user'а.
     */
    getUser: async ({ commit }, [email, password]) => {
      await axios
        .get("/api/users.json")
        .then(response => response.data)
        .then(usersObj => usersObj[email])
        .then(user => {
          if (!user || user.password !== password) {
            throw new Error("Email или пароль заданы неверно.");
          } else commit("LOAD_USER", user);
        });
    },
    exit({ commit }) {
      commit("EXIT_USER");
    }
  }
};

export default usersStore;

import axios from "axios";

const userStore = {
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
    ENTER_USER(state, data) {
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
          } else commit("ENTER_USER", user);
        });
    },
    exit({ commit }) {
      commit("EXIT_USER");
    },
    /**
     * При наличии сервера отправить к нему post-запрос с объектом нового пользователя.
     * После получения ответа от сервера об успешном прохождении проверки отправленных данных
     * и добавлении нового пользоватлея в БД выполнить вход под созданным пользователем.
     * При получении ответа с данными об ошибке на сервере вернуть ошибку.
     */
    addUser: async ({ commit }, user) => {
      await commit("ENTER_USER", user);
      //let { data } = await axios.post("/api/users.json", { user });
      //if (data.result === 1) {
      //  commit("ENTER_USER", user);
      //} else throw new Error("Ошибка регистрации.");
    }
  }
};

export default userStore;

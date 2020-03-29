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
    getUser({ commit }, [email, password]) {
      axios
        .get("/api/users.json")
        .then(response => response.data)
        .then(usersObj => usersObj[email])
        .then(user => {
          if (!user || user.password !== password) {
            console.log("err");
          } else commit("LOAD_USER", user);
        });
    },
    exit({ commit }) {
      commit("EXIT_USER");
    }
  }
};

export default usersStore;

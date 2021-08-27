export default {
  state: {
    localLogIn: false,
  },

  getters: {
    localLogIn(state) {
      return state.localLogIn;
    },
  },

  mutations: {
    setLocalLogIn(state, value) {
      state.localLogIn = value;
    },
  },

  actions: {
    setLocalLogIn({ commit }, value) {
      //совпадение пароля
      commit("setLocalLogIn", value);
    },
  },
};

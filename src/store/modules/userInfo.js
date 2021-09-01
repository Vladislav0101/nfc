import firebase from "firebase/app";

export default {
  state: {
    userInfo: null,
  },

  getters: {
    userInfo(state) {
      return state.userInfo;
    },
  },

  mutations: {
    setUserInfo(state, value) {
      state.userInfo = value;
    },
  },

  actions: {
    getUserInfo({ commit, getters }) {
      const database = firebase.database();

      return new Promise((res) => {
        database.ref("users/" + getters.accountId + "/userInfo").on("value", (snapshot) => {
          if (snapshot.val()) {
            commit("setUserInfo", snapshot.val());
            res(true);
          } else {
            commit("setUserInfo", false);
          }
        });
      });
    },

    sendUserInfo({ commit, getters }, obj) {
      firebase
        .database()
        .ref(`users/${getters.accountId}/userInfo`)
        .update(obj).then(() => {
          commit('setUserInfo', obj)
        })
    },
  },
};

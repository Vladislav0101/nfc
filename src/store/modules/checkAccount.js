import firebase from "firebase/app";

export default {
  state: {
    accountId: null,
    isInit: null,
    password: null,
  },

  getters: {
    accountId(state) {
      return state.accountId;
    },
    isInit(state) {
      return state.isInit;
    },
    password(state) {
      return state.password;
    },
  },

  mutations: {
    setAccountId(state, value) {
      state.accountId = value;
    },
    setIsInit(state, value) {
      state.isInit = value;
    },
    setPassword(state, value) {
      state.password = value;
    },
  },

  actions: {
    checkAccount({ commit }, id) {
      const database = firebase.database();
      let data;

      return new Promise((res, rej) => {
        database.ref("users/" + id).on("value", (snapshot) => {
          data = snapshot.val();

          if (data) {
            commit("setAccountId", id);
            commit("setIsInit", data.isInit);
            commit("setPassword", data.password);
            res(true);
          } else {
            commit("setAccountId", null);
            rej(false);
          }
        });
      });
    },

    initAccount({ commit, getters }, value) {
      firebase
        .database()
        .ref(`users/${getters.accountId}`)
        .update({
          isInit: value,
        });
      commit("setIsInit", value);
    },

    checkPassword({dispatch, getters }, password) {
      const database = firebase.database();
      let data;

      return new Promise((res, rej) => {
        database
          .ref("users/" + getters.accountId + "/password")
          .on("value", (snapshot) => {
            data = snapshot.val();

            if (data === password) {
              if (!getters.isInit) {
                dispatch("initAccount", true);
              }

              res(true);
            } else {
              rej(false);
            }
          });
      });
    },
  },
};

import firebase from "firebase/app";
// import store from "..";

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
      console.log('setUserInfo', value);
    },
  },

  actions: {
    getUserInfo({ commit, getters }) {
      const database = firebase.database();

      return new Promise((res, rej) => {
        database.ref("users/" + getters.accountId + "/userInfo").on("value", (snapshot) => {
          console.log('getUserInfo', snapshot.val())
          if (snapshot.val()) {
            commit("setUserInfo", snapshot.val());
            res(true);
          } else {
            commit("setUserInfo", false);
            rej(false);
          }
        });
      });
    },

    sendUserInfo({ commit, getters }, obj) {
      console.log(obj)
      console.log(commit, getters)
      firebase
        .database()
        .ref(`users/${getters.accountId}/userInfo`)
        .update(obj).then(()=>{
          commit('setUserInfo', obj)
        })
    },
  },
};

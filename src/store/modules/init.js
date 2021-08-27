import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import "firebase/storage";

// import generatePassword from "../../utils/generatePassword"; 

export default {
  state: {
    isInitApp: false
  },
  getters: {
    isInitApp(state) {
      return state.isInitApp;
    }
  },
  mutations: {
    setIsInitApp(state, value) {
      state.isInitApp = value;
    }
  },
  actions: {
    async initializeApp({ commit }) {
      const firebaseConfig = {
        apiKey: process.env.VUE_APP_API_KEY,
        authDomain: process.env.VUE_APP_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_DATABASE_URL,
        projectId: process.env.VUE_APP_PROJECT_ID,
        storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
        appId: process.env.VUE_APP_APPID
      };
      firebase.initializeApp(firebaseConfig);
      
      commit("setIsInitApp", true);

      // for(let i = 1; i <=10; i++ ){
      //   firebase.database()
      //     .ref(`users/${i}`)
      //     .update({
      //       password: generatePassword(),
      //       isInit: false
      //     });
      // }
    },
  }
};

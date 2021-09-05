import Vue from "vue";
import Vuex from "vuex";

import init from "./modules/init";
import checkAccount from "./modules/checkAccount";
import localLogIn from "./modules/localLogIn";
import userInfo from "./modules/userInfo";
import addAvatar from "./modules/addAvatar";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    init,
    checkAccount,
    localLogIn,
    userInfo,
    addAvatar
  }
});

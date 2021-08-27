import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main.vue";
import User from "../pages/User.vue";

import store from "../store/index";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      name: "main",
      path: "/",
      component: Main,
    },
    {
      name: "user",
      path: "/:id",
      component: User,
      beforeEnter: (to, from, next) => {
        store
          .dispatch("checkAccount", to.params.id)
          .then(() => {
            next();
          })
          .catch(() => {
            next("/");
          });
      },
    },
  ],
});

export default router;

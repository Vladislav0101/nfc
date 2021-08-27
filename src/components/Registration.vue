<template>
  <div class="password-box">
    <div class="password-popup">
      <h2>Log in to our platform</h2>
      <input type="password" v-model="password" />
      <button @click="callCheckPasswordAction">Sign in</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      password: null,
    };
  },

  methods: {
    ...mapActions(["setLocalLogIn", "checkPassword"]),

    callCheckPasswordAction() {
      this.checkPassword(this.password)
        .then(() => {
          this.setLocalLogIn(true);
        })
        .catch(() => {
          // Повторный ввод пароля
        });
    },
  },
};
</script>

<style scoped>
.password-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
h2 {
  margin: 1rem 0 2.5rem 0;
  color: rgb(15, 15, 15);
  font-weight: 100;
}
.password-popup {
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 5px;
  width: 17rem;
  height: 12rem;
  background-color: rgb(247, 230, 0);
}
input {
  width: 12rem;
  height: 2rem;
  padding-left: 1rem;
  border: none;
  border-radius: 3px;
  transition: all 0.15s linear;
  box-shadow: 0 0 14px 0px #fcfcfc;
}
input:hover {
  cursor: pointer;
  box-shadow: 0 0 0 #fcfcfc;
}
input:focus {
  box-shadow: 0 0 0 #fcfcfc;
  /* background-color: black; */
}
button {
  margin: 1rem 0;
  width: 6rem;
  padding: 0.3rem;
  border: 1px solid rgb(15, 15, 15);
  background-color: rgb(247, 230, 0);
  border-radius: 3px;
  font-weight: 600;
  transition: all 0.15s linear;
}
button:hover {
  cursor: pointer;
  background-color: #fcfcfc;
  border-color: #fcfcfc;
}
</style>

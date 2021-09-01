<template>
  <div class="password-box">
    <div class="password-popup">
      <h2>Подтверждение пароля</h2>
      <input
        type="password"
        v-model="password"
        placeholder="Пароль"
        :class="{ 'incorrect-password': incorrectPassword }"
      />
      <button @click="callCheckPasswordAction">Вход</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      password: null,
      incorrectPassword: false,
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
          this.password = "";
          this.incorrectPassword = true;

          let timerId = setTimeout(() => {
            this.incorrectPassword = false;
            clearTimeout(timerId);
          }, 1000);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.password-box {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h2 {
  margin-bottom: 2.5rem;
  color: rgb(15, 15, 15);
  font-weight: 100;
  line-height: 25px;
}
.password-popup {
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 5px;
  width: 17rem;
  padding: 20px;
  background-color: rgb(247, 230, 0);
}
input {
  width: 12rem;
  height: 2rem;
  padding-left: 1rem;
  border: none;
  border-radius: 3px;
  transition: box-shadow 0.15s linear, all 0.1s linear;
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
.incorrect-password {
  background-color: rgb(255, 65, 65);
  box-shadow: 0 0 14px 0px rgb(255, 65, 65);
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

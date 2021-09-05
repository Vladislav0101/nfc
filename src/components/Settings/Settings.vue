<template>
  <form>
    <div class="imageBlock">
      <label>
        <input type="file" ref="avatarInput" @input="avatarInput" />
        <img
          :src="avatar ? avatar : require('@/assets/pictures/add-user.svg')"
          alt="avatar"
          class="avatarImage"
        />
      </label>
    </div>

    <div class="name">
      <label for="firstName">
        <span>Имя</span>
        <input
          type="text"
          autocomplete="off"
          v-model.trim="userInfoLocal.firstName"
          id="firstName"
        />
      </label>
      <label for="secondName">
        <span>Фамилия</span>
        <input
          type="text"
          autocomplete="off"
          v-model.trim="userInfoLocal.secondName"
          id="secondName"
        />
      </label>
    </div>

    <div class="social">
      <span
        class="social-add"
        @click.prevent="showSocial = !showSocial"
        v-if="!inputSocialLink"
      >
        <div v-if="!showSocial" class="plus">+</div>
        <div v-else class="minus">&ndash;</div>
      </span>

      <div :class="{ 'social-list': true, 'social-list-active': showSocial }">
        <img
          v-for="(social, idx) of socialsData"
          :key="social.socialName + idx"
          :src="returnImg(social.img)"
          :alt="social.socialName"
          :class="{ [social.socialName]: 1, 'social-el': 1 }"
          @click="addSocial(social.socialName)"
        />
      </div>
    </div>

    <div>
      <div
        v-for="(social, idx) of userInfoLocal.socials"
        :key="social.social + idx"
        class="added-social"
      >
        <img
          :src="returnImg(`socialsImage/${social.social}.svg`)"
          alt=""
          width="40px"
        />
        <input
          type="text"
          autocomplete="off"
          placeholder="Добавьте ссылку"
          v-model.trim="social.link"
        />
        <img
          src="@/assets/pictures/remove.svg"
          alt=""
          width="23px"
          @mouseenter="shakeBasket"
          @click="removeElFromSocials(idx)"
          class="basket"
        />
      </div>
    </div>

    <!-- <div>
      <label>
        <p>Изменить пароль</p>
        <input type="password" v-model="changePasswordMain" />
        <input type="password" v-model="changePasswordCheck" />
      </label>
    </div> -->
    <button @click.prevent="submitInfo">Сохранить</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { alpha } from "vuelidate/lib/validators";

import socialsData from "@/static/socialsData.json";

export default {
  validations: {
    userInfoLocal: {
      firstName: { alpha },
      secondName: { alpha },
    },
  },
  data() {
    return {
      userInfoLocal: {
        firstName: "",
        secondName: null,
        socials: [],
      },
      showSocial: false,
      inputSocialLink: false,
      currentSocialImg: null,
      socialsData: null,
      password: {
        changePasswordMain: "",
        changePasswordCheck: "",
      },
    };
  },

  mounted() {
    this.socialsData = socialsData;
    this.userInfoLocal = this.userInfo;
  },

  watch: {
    userInfo() {
      this.userInfoLocal = this.userInfo;
    },
  },

  computed: {
    ...mapGetters(["userInfo", "avatar"]),
  },

  methods: {
    ...mapActions(["sendUserInfo", "setAvatar"]),

    avatarInput() {
      // this.avatar = this.$refs.avatarInput.files[0];
      this.setAvatar(this.$refs.avatarInput.files[0]);
    },

    submitInfo() {
      this.sendUserInfo(this.userInfoLocal);
    },

    returnImg(src) {
      return src;
    },

    addSocial(social) {
      this.showSocial = false;

      this.userInfoLocal.socials.push({
        social,
      });
    },

    shakeBasket(el) {
      el.target.classList.add("shake-basket");
      setTimeout(() => {
        el.target.classList.remove("shake-basket");
      }, 400);
    },

    removeElFromSocials(idx) {
      this.userInfoLocal.socials.splice(idx, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    box-shadow: 0 0 5px 0px #f7e600, inset 0 0 5px 0px #f7e600;
    opacity: 0.4;
  }
  100% {
    box-shadow: 0 0 15px 0px #f7e600, inset 0 0 20px 0px #f7e600;
    opacity: 0.9;
  }
}
@keyframes focusedButton {
  0% {
    background-color: #fcfcfc;
    border: 1px solid #fcfcfc;
  }
  100% {
    background-color: #f7e600;
    border: 1px solid #f7e600;
  }
}
@keyframes shakeBasket {
  0% {
    transform: rotate();
  }
  33% {
    transform: rotate(15deg);
  }
  66% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate();
  }
}

input {
  width: 30vw;
  max-width: 250px;
  height: 2rem;
  border-radius: 5px;
  background-color: #0f0f0f;
  border: 1px solid #f7e600;
  color: #f7e600;
}
input {
  font-size: 1rem;
  padding-inline: 5px;
  transition: all 0.1s linear;
  font-weight: 600;
}
input:hover,
input:focus {
  cursor: pointer;
  background-color: #fcfcfc;
  border: 1px solid #fcfcfc;
  color: #0f0f0f;
}
input:focus {
  animation: focusedButton 2s linear infinite alternate;
}
button {
  margin: 1rem auto;
  padding-inline: 5px;
  height: 2rem;
  background-color: #fcfcfc;
  border: none;
  border-radius: 5px;
  font-weight: 900;
  transition: all 0.1s linear;
}
button:hover {
  cursor: pointer;
  background-color: #0f0f0f;
  color: #f7e600;
}

.imageBlock {
  position: relative;
  @media (max-width: 480px) {
    margin: 1rem auto;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 100%;
    margin: 2rem auto;
    
    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }
  .avatarImage {
    width: 150px;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
  input {
    position: absolute;
    width: 0;
    opacity: 0;
  }
}
.settings-box {
  display: flex;
  transition: all 0.2s linear;
  position: fixed;
  inset: 0;
  transform: translateX(100vw);
}
form {
  max-width: 45rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* transform: translateX(110vw); */
  transition: all 0.3s linear;
}
.name {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 3rem;

  @media (max-width: 480px) {
    gap: 1rem;

    input {
      width: 40vw;
    }
  }
}
label {
  display: flex;
  flex-direction: column;
  color: #fcfcfc;
  width: max-content;
}
label span {
  margin-bottom: 0.5rem;
  font-weight: 900;
}

.social {
  position: relative;
  width: max-content;
  margin: 2rem auto;
  z-index: 9;
}
.social-add {
  width: 6rem;
  height: 6rem;
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 100%;
  transition: box-shadow 1s linear, border 0.1s linear, transform 0.1s linear;
  animation: pulse 1s linear infinite alternate;

  .plus {
    color: #f7e600;
  }

  .minus {
    color: #0f0f0f;
  }

  .plus,
  .minus {
    font-size: 6rem;
    font-weight: 100;
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: relative;
    bottom: 4px;
  }
}
.social-add:hover {
  animation: none;
  transform: scale(0.95);
}
.social-list {
  display: grid;
  grid-template-columns: repeat(20, 5%);
  grid-template-rows: repeat(20, 5%);
  width: 24rem;
  height: 24rem;
  position: absolute;
  top: -9rem;
  left: -9rem;
  border-radius: 100%;
  background-color: #f7e600;
  z-index: -1;
  transition: all 0.4s linear;
  transform: scale(0) rotate(0deg);
  box-shadow: 0 0 20px 25px #f7e600;

  @media (max-width: 480px) {
    width: 18rem;
    height: 18rem;
    top: -6.5rem;
    left: -6.5rem;
  }
}
.social-list-active {
  /* transform: rotate(720deg); */
  transform: scale(1) rotate(360deg);
}
.social-el {
  width: 5rem;
  transition: all 0.1s linear;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 4rem;
  }
}
.social-el:hover {
  transform: scale(1.1);
}
.instagram {
  grid-area: 3/5;
}
.facebook {
  grid-area: 1/10;
}
.pinterest {
  grid-area: 4/15;
}
.vk {
  grid-area: 9/17;
}
.telegram {
  grid-area: 12/1;
}
.youtube {
  grid-area: 16/5;
}
.tik-tok {
  grid-area: 14/16;
}
.twitter {
  grid-area: 17/11;
}
.http {
  grid-area: 7/1;
}

.added-social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem 0;

  input {
    max-width: 300px;
    width: 40vw;
    @media (max-width: 480px) {
      width: 60vw;
    }
  }
}
.basket {
  cursor: pointer;
}
.shake-basket {
  animation: shakeBasket 0.4s linear;
}
</style>

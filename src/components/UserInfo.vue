<template>
  <section>
    <div class="avatar-box">
      <img
        :src="avatar ? avatar : require('@/assets/pictures/user.svg')"
        alt="avatar"
      />
    </div>
    <div class="mainInfo">
      <span>{{ userInfo.firstName }} </span>
      <span>{{ userInfo.secondName }}</span>
    </div>
    <div class="socials">
      <a
        :href="social.link"
        v-for="(social, idx) of userInfo.socials"
        :key="social.social + idx"
      >
        <img
          :src="returnImg(`socialsImage/${social.social}.svg`)"
          alt="social"
          class="social-img"
        />
      </a>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["userInfo"],

  computed: {
    ...mapGetters(["avatar"]),
  },

  methods: {
    ...mapActions(["getAvatar"]),

    returnImg(src) {
      return src;
    },
  },

  mounted() {
    this.getAvatar();
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #fcfcfc;
}

section {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;

  .mainInfo {
    text-align: center;
    font-weight: 800;
    font-size: 2rem;
  }
}

.avatar-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 100%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  img {
    width: 150px;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
}
.social-img {
  width: 175px;
  transition: all 0.1s linear;
}
.social-img:hover {
  transform: scale(1.05);
}
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .social-img {
    width: 80px;
    transition: all 0.1s linear;
  }
}
</style>

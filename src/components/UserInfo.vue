<template>
  <section>
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
export default {
  props: ["userInfo"],

  methods: {
    returnImg(src) {
      return src;
    },
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
  padding-top: 6rem;

  .mainInfo {
    text-align: center;
    font-weight: 800;
    font-size: 2rem;
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

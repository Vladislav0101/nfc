<template>
  <div id="app" @mousedown="clickEvent">
    <div :class="{ click: click }" :style="{ top: top, left: left }"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      click: false,
      top: "",
      left: "",
    };
  },

  methods: {
    clickEvent(e) {
      this.top = e.clientY - 20 + "px";
      this.left = e.clientX - 20 + "px";
      this.click = true;

      let timerId = setTimeout(() => {
        this.top = "";
        this.left = "";
        this.click = false;
        clearTimeout(timerId);
      }, 500);
    },
  },
};
</script>

<style scoped>
#app {
  min-height: 100vh;
}
@keyframes click {
  0% {
    transform: scale(0);
    background-color: rgba(255, 255, 255, 0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    background-color: rgba(255, 255, 255, 0.349);
    opacity: 0;
  }
}
.click {
  pointer-events: none;
  width: 40px;
  height: 40px;
  position: fixed;
  z-index: 999999;
  transition: all 0.5s linear;
  animation: click 0.5s;
  border-radius: 100%;
}
.click-active {
  animation: click 0.5s;
}
</style>
<template>
  <section>
    <ButtonToOpenSettings @bearsClick="isSettings = !isSettings" />
    <div :class="{ 'visible-settings': isSettings, 'settings-box': true }">
      <h2>Settings</h2>
      <Registration v-if="!localLogIn" />
      <Settings v-else />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import ButtonToOpenSettings from "@/components/Settings/ButtonToOpenSettings.vue";
import Settings from "@/components/Settings/Settings.vue";
import Registration from "@/components/Registration.vue";

export default {
  data(){
    return{
      isSettings:false
    }
  },

  computed: {
    ...mapGetters(["localLogIn"]),
  },

  components: {
    ButtonToOpenSettings,
    Registration,
    Settings,
  },
};
</script>

<style scoped>
.settings-box {
  display: flex;
  transition: all 0.2s linear;
  position: fixed;
  inset: 0;
  transform: translateX(100vw);
}
.visible-settings {
  background-color: #0f0f0f;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(0);
  position: fixed;
  inset: 0;
}
.visible-settings h2 {
  color: #fcfcfc;
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 4rem;
}
</style>

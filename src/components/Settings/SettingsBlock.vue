<template>
  <section>
    <ButtonToOpenSettings @bearsClick="changeIsSettings" />
    <div :class="{ 'visible-settings': isSettings, 'settings-box': true }">
      <h2>Settings</h2>
      <!-- <Registration v-if="!localLogIn" />
      <Settings v-else /> -->
      <Settings />
      <Registration v-if="false" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import ButtonToOpenSettings from "@/components/Settings/ButtonToOpenSettings.vue";
import Settings from "@/components/Settings/Settings.vue";
import Registration from "@/components/Registration.vue";

export default {
  data() {
    return {
      isSettings: false,
    };
  },

  computed: {
    ...mapGetters(["localLogIn"]),
  },

  methods: {
    changeIsSettings() {
      this.isSettings = !this.isSettings;
      if (this.isSettings) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },

  components: {
    ButtonToOpenSettings,
    Registration,
    Settings,
  },
};
</script>

<style lang="scss" scoped>
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
  transform: translateX(0);
  position: fixed;
  inset: 0;
  overflow: auto;
}
.visible-settings h2 {
  color: #fcfcfc;
  font-weight: 900;
  font-size: 3rem;
  margin-top: 1rem;
}

.visible-settings::-webkit-scrollbar {
  width: 4px;
}
.visible-settings::-webkit-scrollbar-track {
  background: #0f0f0f;
}
.visible-settings::-webkit-scrollbar-thumb {
  background-color: #f7e600;
  border-radius: 20px;
}
</style>

<template>
  <section class="wrapper">
    <SettingsBlock v-if="isInit" />

    <UserInfo v-if="isInit && userInfo" :userInfo="userInfo" />

    <SorryButNoUserInfo v-if="isInit && !userInfo" />

    <Registration v-if="!isInit" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Registration from "@/components/Registration.vue";
import SorryButNoUserInfo from "@/components/SorryButNoUserInfo.vue";
import SettingsBlock from "@/components/Settings/SettingsBlock.vue";
import UserInfo from "@/components/UserInfo.vue";

export default {
  methods: {
    ...mapActions(["getUserInfo"]),
  },
  computed: {
    ...mapGetters(["userInfo", "isInit"]),
  },
  mounted() {
    this.getUserInfo();
  },
  components: { SorryButNoUserInfo, SettingsBlock, UserInfo, Registration },
};
</script>

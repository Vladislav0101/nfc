<template>
  <section class="wrapper">
    <SettingsBlock />

    <UserInfo v-if="userInfo" :userInfo='userInfo'/>
    
    <SorryButNoUserInfo v-else/>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import SorryButNoUserInfo from "@/components/SorryButNoUserInfo.vue";
import SettingsBlock from "@/components/Settings/SettingsBlock.vue";
import UserInfo from "@/components/UserInfo.vue";

export default {
  methods: {
    ...mapActions(["getUserInfo"]),
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  mounted() {
    this.getUserInfo(this.$route.params.id);
  },

  components: { SorryButNoUserInfo, SettingsBlock, UserInfo },
};
</script>

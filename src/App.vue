<template>
  <div class="relative min-h-screen">
    <Navbar class="relative" style="z-index:1000"/>
    <div class="block content relative">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import userStore from '@/stores/auth';
import { onMounted } from 'vue'

export default {
  name: "App",
  components: {
    Navbar
  },
  setup() {
    onMounted(() => userStore.getUser());
    return {userStore};
  },
}
</script>

<style scoped>
  .content {
    min-height: calc(100vh - 86px);
  }
</style>

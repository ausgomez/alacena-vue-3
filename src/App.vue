<template>
  <div class="relative">
    <Navbar class="relative" style="z-index:1000"/>
    <div class="container mx-auto min-h-screen relative">
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

<style></style>

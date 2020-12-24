<template>
  <div>
    <Navbar />
    <div class="container mx-auto min-h-screen">
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
    onMounted(() => userStore.getUser);
    return {userStore};
  },
}
</script>

<style></style>

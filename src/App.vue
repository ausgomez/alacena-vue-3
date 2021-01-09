<template>
  <div class="flex flex-col">
    <Logo class="place-self-center my-4" />
    <div class="container">
      <router-view />
    </div>
  </div>
  <Navbar class="fixed bottom-0 w-full" style="z-index:1000" />
</template>

<script>
import Navbar from "@/components/Navbar"
import userStore from "@/stores/auth"
import { onMounted } from "vue"
import Logo from "@/components/Logo"

export default {
  name: "App",
  components: {
    Navbar,
    Logo,
  },
  setup() {
    onMounted(() => userStore.getUser())
    return { userStore }
  },
}
</script>

<style scoped>
.content {
  min-height: calc(100vh - 86px);
}
</style>

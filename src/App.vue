<template>
  <div>
    <div class="flex flex-col relative">
      <Logo class="place-self-center my-4" />
      <div class="container">
        <router-view />
      </div>
    </div>
    <div class="absolute w-full bg-green-400">
      <Navbar style="z-index:1000" />
    </div>
  </div>
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

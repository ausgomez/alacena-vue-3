<template>
  <div>
    <div class="flex flex-col relative">
      <Logo class="place-self-center my-4" />
      <div class="container">
        <router-view />
        <Footer />
      </div>
    </div>
    <div class="absolute w-full bg-green-400">
      <Navbar style="z-index:1000" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { onMounted } from "vue"
import Logo from "@/components/Logo"

export default {
  name: "App",
  components: {
    Navbar,
    Logo,
    Footer,
  },
  setup() {
    onMounted(() => {
      let likedRecipes = localStorage.getItem("likedRecipes")

      if (likedRecipes == undefined || likedRecipes == "") {
        localStorage.setItem("likedRecipes", JSON.stringify([]))
      }
    })
    return {}
  },
}
</script>

<style scoped>
.content {
  min-height: calc(100vh - 86px);
}
</style>

<template>
  <Navbar />
  <div class="container mx-auto min-h-screen">
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>

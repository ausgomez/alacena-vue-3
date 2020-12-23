<template>
  <Providers>
    <Navbar />
    <div class="container mx-auto min-h-screen">
      <router-view />
    </div>
  </Providers>
</template>

<script>
import Navbar from "@/components/Navbar"

import Providers from "@/state/Providers"

export default {
  name: "App",
  components: {
    Navbar,
    Providers,
  },
}
</script>

<style></style>

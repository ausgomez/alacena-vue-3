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
// import { inject, reactive } from "vue"
import Providers from "@/state/Providers"
// import { SupabaseService } from "@/services/supabase"

export default {
  name: "App",
  components: {
    Navbar,
    Providers,
  },
  setup() {
    alert("App reloaded")
    // const state = inject("state")

    // onMounted(() => {
    //   // fetch current user and set it to state
    //   // state.user = SupabaseService.getSession().user
    //   const user = SupabaseService.getSession().user
    //   console.log(user)
    // })
  },
}
</script>

<style></style>

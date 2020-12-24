<template>
  <slot />
</template>

<script>
import { reactive, provide, watch, onMounted } from "vue"
import { SupabaseService } from "../services/supabase"

export default {
  setup() {
    console.log("State triggered!!")

    const state = reactive({
      user: null,
    })

    onMounted(async () => {
      console.log("mounted")
      state.user = reactive(SupabaseService.getCurrentUser())
    })

    provide("state", state)

    watch(state, (user) => console.log(`User changed ${user}`))
  },
}
</script>

<template>
  <slot />
</template>

<script>
import { reactive, provide, watch, onBeforeMount } from "vue"
import { SupabaseService } from "../services/supabase"

export default {
  setup() {
    console.log("State triggered")

    const state = reactive({
      user: null,
    })

    onBeforeMount(() => {
      console.log("Mounted")
      state.user = SupabaseService.getCurrentUser()
      console.log(state.user)
    })

    provide("state", state)

    watch(state, (user) => alert(`User changed ${user}`))
  },
}
</script>

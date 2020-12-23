<template>
  <h1>Hello</h1>
  <p>{{ state.user }}</p>
</template>

<script>
import { inject } from "vue"

export default {
  setup() {
    const state = inject("state")

    // const click = () => {
    //   state.user = { email: "whatever@gmail.com" }
    // }

    return { state }
  },
}
</script>

<style></style>

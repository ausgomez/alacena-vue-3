<template>
  <nav class="rounded-3xl shadow text-white fixed bottom-0" style="width: 411px;">
    <ul class="flex justify-around items-center h-14">
      <li :class="`${index === 0 ? 'active' : ''} p-2 rounded-full font-normal`" @click="index = 0">
        <router-link to="/"> <i class="fas fa-home"></i> Home </router-link>
      </li>
      <li :class="`${index === 1 ? 'active' : ''} p-2 rounded-full font-normal`" @click="index = 1">
        <router-link to="/builder"><i class="fas fa-cookie-bite"></i> Build </router-link>
      </li>
      <li :class="`${index === 2 ? 'active' : ''} p-2 rounded-full font-normal`" @click="index = 2">
        <router-link to="/saved"><i class="far fa-heart"></i> Saved </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const index = ref(0)

    return { index }
  },
}
</script>

<style>
nav {
  background-color: #373737;
}

li.active {
  background-color: #242424;
}
</style>

<template>
  <nav class="rounded-t-3xl shadow text-white">
    <ul class="flex justify-around items-center h-14">
      <li class="active p-2 rounded-full font-normal">
        <router-link to="/"> <i class="fas fa-home"></i> Home </router-link>
      </li>
      <li>
        <router-link to="/builder"><i class="fas fa-cookie-bite"></i> Build </router-link>
      </li>
      <li>
        <router-link to="/profile"><i class="far fa-user"></i> Profile </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style>
nav {
  background-color: #373737;
}

li.active {
  background-color: #242424;
}
</style>

<template>
  <div class="h-72 w-60 flex items-center justify-center m-3">
    <div
      class="w-full flex justify-center items-center bg-black rounded-3xl shadow-lg h-full bg-local overflow-hidden"
      :style="`background-image: url(${recipe.image}); background-size: cover;`"
    >
      <div
        class="text-center text-white text-md font-semibold md:font-bold w-full bg-gray-900 bg-opacity-50 h-full flex flex-col items-center justify-center"
      >
        <p v-if="recipe.vegan" class="text-green-500"><i class="fas fa-leaf"></i></p>
        <p class="w-2/3">
          {{ recipe.title }}
        </p>
        <ul class="flex space-x-3">
          <li class="text-white"><i class="fas fa-clock"></i> {{ recipe.readyInMinutes }}</li>
          <li class="text-white"><i class="fas fa-users"></i> x{{ recipe.servings }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
}
</script>

<style></style>

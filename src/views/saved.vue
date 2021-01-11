<template>
  <div class="flex flex-col space-y-10">
    <ul v-if="recipes.length > 0" class="text-white flex overflow-x-auto">
      <li v-for="(recipe, i) in recipes" :key="i">
        <Recipe :recipe="recipe" />
      </li>
    </ul>

    <div v-else class="m-5 text-white h-80 flex flex-col items-center justify-center font-bold text-2xl space-y-6">
      <p>
        No recipes saved
        <i class="fas fa-sad-tear"></i>
      </p>
    </div>

    <div class="flex flex-col w-1/2 items-center w-full">
      <router-link to="/" class="p-4 bg-yellow-500 text-white rounded">
        Explore Recipes
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
import Recipe from "@/components/Recipe"

export default {
  components: { Recipe },
  setup() {
    const recipes = ref([])

    onMounted(async () => {
      try {
        recipes.value = JSON.parse(localStorage.getItem("likedRecipes"))
      } catch (error) {
        console.error("Error parsing Recipes from local storage")
      }
    })

    return { recipes }
  },
}
</script>

<style></style>

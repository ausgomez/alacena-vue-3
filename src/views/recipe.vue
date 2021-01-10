<template>
  <div class="h-80 w-full flex items-center justify-center">
    <div
      class="w-full flex justify-center items-center bg-black shadow-lg h-full bg-local overflow-hidden"
      :style="`background-image: url(${recipe.image}); background-size: cover;`"
    >
      <div
        class="text-center text-white text-md font-semibold md:font-bold w-full bg-gray-900 bg-opacity-50 h-full flex flex-col items-center justify-center"
      >
        <p v-if="recipe.vegan" class="text-green-500"><i class="fas fa-leaf"></i></p>
        <p class="text-3xl">
          {{ recipe.title }}
        </p>
      </div>
    </div>
  </div>

  <ul class="flex space-x-3">
    <li class="text-white"><i class="fas fa-clock"></i> {{ recipe.readyInMinutes }}</li>
    <li class="text-white"><i class="fas fa-users"></i> x{{ recipe.servings }}</li>
  </ul>
</template>

<script>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

export default {
  setup() {
    const route = useRoute()

    const recipeId = route.params.id

    const recipe = ref({})

    onMounted(async () => {
      axios
        .get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
          params: {
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
          },
        })
        .then((res) => {
          recipe.value = res.data
          console.log(recipe.value)
        })
        .catch((err) => console.error(err))
    })

    return { recipe }
  },
}
</script>

<style></style>

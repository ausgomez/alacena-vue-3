<template>
  <div v-if="!loading">
    <div class="h-80 w-full flex items-center justify-center">
      <div
        class="w-full flex justify-center items-center bg-black shadow-lg h-full bg-local overflow-hidden"
        :style="`background-image: url(${recipe.image}); background-size: cover;`"
      >
        <div
          class="relative text-center text-white text-md font-semibold md:font-bold w-full bg-gray-900 bg-opacity-50 h-full flex flex-col items-center justify-center"
        >
          <p class="absolute top-0 right-0 text-4xl mt-4 mr-4 text-red-500" @click="likeRecipe">
            <i :class="`fa${liked ? 's' : 'r'} fa-heart`"></i>
          </p>
          <p v-if="recipe.vegan" class="text-green-500"><i class="fas fa-leaf"></i> Vegan</p>
          <p class="text-3xl">
            {{ recipe.title }}
          </p>

          <ul class="flex space-x-3">
            <li class="text-white"><i class="fas fa-thumbs-up"></i> {{ recipe.aggregateLikes }}</li>
            <li class="text-white"><i class="fas fa-clock"></i> {{ recipe.readyInMinutes }}</li>
            <li class="text-white"><i class="fas fa-users"></i> x{{ recipe.servings }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mx-3 text-gray-200 space-y-5 mt-5 mb-32">
      <h1 class="text-xl font-bold uppercase">Ingredients</h1>
      <ul class="font-semibold space-y-2">
        <li
          v-for="(ing, i) in recipe.ingredients"
          :key="i"
          @click="ing.done = !ing.done"
          :class="
            `text-lg border-solid border-b-2 pb-2 border-light-blue-500 relative ${
              ing.done ? 'line-through text-gray-600' : ''
            }`
          "
        >
          {{ ing.amount }}
          {{ ing.unit }}
          {{ ing.name.toUpperCase() }}
        </li>
      </ul>

      <h1 class="text-xl font-bold uppercase">Steps</h1>
      <ul class="text-md font-semibold capitalize space-y-4">
        <li
          v-for="(step, i) in recipe.steps"
          :key="i"
          :class="`${step.done ? 'line-through text-gray-600' : ''}`"
          @click="step.done = !step.done"
        >
          {{ i + 1 }}) {{ step.step + "." }}
        </li>
      </ul>
    </div>
  </div>

  <div v-else class="flex items-center justify-center w-full h-40">
    <p class="animate-spin text-white text-6xl"><i class="fas fa-spinner"></i></p>
  </div>
</template>

<script>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

export default {
  setup() {
    const route = useRoute()

    const loading = ref(true)

    const recipeId = route.params.id

    const recipe = ref({})

    const liked = ref(false)

    const likedRecipes = ref([])

    onMounted(async () => {
      try {
        likedRecipes.value = JSON.parse(localStorage.getItem("likedRecipes"))
      } catch (error) {
        likedRecipes.value = []
      }

      axios
        .get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
          params: {
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
          },
        })
        .then((res) => {
          recipe.value = res.data

          recipe.value.ingredients = recipe.value.extendedIngredients.map((x) => ({ ...x, done: false }))

          recipe.value.steps = []

          recipe.value.analyzedInstructions[0]?.steps.forEach((s) => {
            s = s.step
              .split(".")
              .filter((s) => s.length >= 3)
              .map((x) => ({ step: x, done: false }))
            recipe.value.steps.push(...s)
          })

          liked.value = !!likedRecipes.value.find((l) => l.id == recipeId)

          console.log(recipe.value)

          loading.value = false
        })
        .catch((err) => console.error(err))
    })

    const likeRecipe = () => {
      console.log(likedRecipes.value, likedRecipes.value.length)

      if (likedRecipes.value.find((rec) => rec.id == recipeId.toString()) === undefined) {
        // IF RECIPE IS NOT SAVED
        console.log("recipe not found")
        likedRecipes.value.push(recipe.value)
        localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes.value))
        liked.value = true
      } else {
        // RECIPE ID is on the local storage saved
        console.log("removing like")
        liked.value = false
        likedRecipes.value = likedRecipes.value.filter((rec) => rec.id != recipeId)
        localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes.value))
      }
    }

    return { recipe, loading, liked, likeRecipe }
  },
}
</script>

<style></style>

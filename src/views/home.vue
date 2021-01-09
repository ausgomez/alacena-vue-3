<template>
  <div class="flex flex-col">
    <input
      type="text"
      class="m-3 px-4 rounded-lg h-8 text-gray-500 placeholder-gray-500"
      placeholder="&#x1F50D; Search for recipes"
    />
    <ul class="text-white overflow-x-auto flex">
      <li v-for="(recipe, i) in recipes" :key="i">
        <Recipe :recipe="recipe" />
      </li>
    </ul>
  </div>
</template>

<script>
import { inject, onBeforeMount, ref } from "vue"
import axios from "axios"
import Recipe from "@/components/Recipe"

export default {
  components: {
    Recipe,
  },
  setup() {
    const state = inject("state")

    const recipes = ref([])

    // const click = () => {
    //   state.user = { email: "whatever@gmail.com" }
    // }

    onBeforeMount(async () => {
      await axios
        .get("https://api.spoonacular.com/recipes/random", {
          params: {
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
            number: 10,
          },
        })
        .then((res) => {
          recipes.value = res.data.recipes
          console.log(res.data.recipes)
        })
    })

    return { state, recipes }
  },
}
</script>

<style>
input {
  background-color: #2e2e2e;
}
</style>

<template>
  <div class="flex flex-col mx-6 space-y-7 text-xl">
    <p class="text-white font-medium">What do you want to cook today?</p>
    <input
      type="text"
      class="p-6 rounded-lg h-8 text-gray-200 placeholder-gray-500"
      placeholder="&#x1F50D; Search for recipes"
    />

    <ul class="flex justify-around text-yellow-500" style="">
      <li class="flex flex-col items-center" @click="getNewest">
        <p>Newest</p>
        <p v-if="index === 0" class="text-xs animate-bounce"><i class="fas fa-circle fa-xs"></i></p>
      </li>
      <li class="flex flex-col items-center" @click="getBest">
        <p>Best</p>
        <p v-if="index === 1" class="text-xs animate-bounce"><i class="fas fa-circle fa-xs"></i></p>
      </li>
      <li class="flex flex-col items-center" @click="exploreMore">
        <p>Explore</p>
        <p v-if="index === 2" class="text-xs animate-bounce"><i class="fas fa-circle fa-xs"></i></p>
      </li>
    </ul>

    <ul v-if="!loading" class="text-white overflow-x-auto flex">
      <li v-for="(recipe, i) in recipes" :key="i">
        <Recipe :recipe="recipe" />
      </li>
    </ul>
    <div v-else class="flex items-center justify-center w-full h-40">
      <p class="animate-spin text-white text-6xl"><i class="fas fa-spinner"></i></p>
    </div>
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
    const index = ref(-1)
    const loading = ref(false)

    // const click = () => {
    //   state.user = { email: "whatever@gmail.com" }
    // }

    const getNewest = async () => {
      if (index.value === 0) return
      loading.value = true
      index.value = 0
      await axios
        .get("https://api.spoonacular.com/recipes/random", {
          params: {
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
            number: 10,
          },
        })
        .then((res) => {
          recipes.value = res.data.recipes
          loading.value = false
          console.log(res.data.recipes)
        })
    }

    const getBest = async () => {
      if (index.value === 1) return
      loading.value = true
      index.value = 1
      await axios
        .get("https://api.spoonacular.com/recipes/random", {
          params: {
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
            sort: "popularity",
            number: 10,
          },
        })
        .then((res) => {
          recipes.value = res.data.recipes
          loading.value = false
          console.log(res.data.recipes)
        })
    }

    const exploreMore = async () => {
      if (index.value === 2) return
      loading.value = true
      index.value = 2
      await axios
        .get("https://api.spoonacular.com/recipes/random", {
          params: {
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
            number: 10,
          },
        })
        .then((res) => {
          recipes.value = res.data.recipes
          loading.value = false
          console.log(res.data.recipes)
        })
    }

    onBeforeMount(async () => {
      getNewest()
      index.value = 0
    })

    return { state, recipes, index, getNewest, getBest, exploreMore, loading }
  },
}
</script>

<style>
input {
  background-color: #2e2e2e;
}
</style>

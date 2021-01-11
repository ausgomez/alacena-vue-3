<template>
  <div class="flex flex-col m-3 space-y-3">
    <div class="p-4 rounded-lg  space-y-4" style="background-color: #373737; min-height: 13rem;">
      <h1 class="text-2xl font-bold text-white text-center">Search for Ingredients</h1>
      <input
        type="text"
        class="p-6 rounded-lg h-8 text-gray-200 placeholder-gray-500 w-full"
        placeholder="&#x1F50D; Search for ingredients"
        v-model="ingredientQuery"
        @keyup.enter="searchUp"
      />
      <ul class="flex overflow-x-auto space-x-2 text-center text-white uppercase">
        <li v-for="(item, i) in ingredients" :key="i" @click="addToBasket(item)">
          <!--  -->
          <div class="h-24 w-24 flex">
            <!--  -->
            <div
              class="w-full flex justify-center items-center bg-black rounded-3xl shadow-lg h-full bg-local overflow-hidden"
              :style="
                `background-image: url(https://spoonacular.com/cdn/ingredients_100x100/${item.image}); background-size: cover;`
              "
            >
              <!--  -->
            </div>
            <!--  -->
          </div>
          <p>{{ item.name }}</p>
          <!--  -->
        </li>
      </ul>
    </div>

    <!--  -->
    <div class="p-4 rounded-lg space-y-4 text-white text-center" style="background-color: #373737; min-height: 13rem;">
      <h1 class="text-2xl font-bold">Your Basket</h1>
      <div v-if="basket.length > 0">
        <ul class="flex overflow-x-auto space-x-2 text-center text-white uppercase">
          <li
            v-for="(item, i) in basket"
            :key="i"
            @click="removeFromBasket(item)"
            class="flex flex-col items-center justify-center align-center"
          >
            <!--  -->
            <div class="h-24 w-24 flex">
              <!--  -->
              <div
                class="w-full flex justify-center items-center bg-black rounded-3xl shadow-lg h-full bg-local overflow-hidden"
                :style="
                  `background-image: url(https://spoonacular.com/cdn/ingredients_100x100/${item.image}); background-size: cover;`
                "
              >
                <!--  -->
              </div>
              <!--  -->
            </div>
            <p class="text-center">{{ item.name }}</p>
            <!--  -->
          </li>
        </ul>
        <button @click="findRecipes" class="p-4 bg-yellow-500 text-white rounded mt-6">
          Explore Recipes
        </button>
      </div>

      <div v-else class="h-20 flex items-center justify-center">
        <p class="w-3/4 text-center">Your Basket is Empty, pick items from the top.</p>
      </div>
    </div>

    <div
      v-if="recipes.length > 0"
      class="p-4 rounded-lg  space-y-4 text-white text-center"
      style="background-color: #373737; min-height: 13rem;"
    >
      <h1 class="text-2xl font-bold">Recipes found</h1>
      <ul v-if="!loading" class="text-white overflow-x-auto flex">
        <li v-for="(recipe, i) in recipes" :key="i">
          <Recipe :recipe="recipe" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { ref } from "vue"
import Recipe from "@/components/Recipe"

export default {
  name: "Builder",
  components: {
    Recipe,
  },
  setup() {
    const ingredients = ref([])
    const basket = ref([])
    const recipes = ref([])

    const ingredientQuery = ref("")

    const addToBasket = (item) => {
      ingredients.value = ingredients.value.filter((i) => i !== item)
      basket.value.push(item)
    }

    const removeFromBasket = (item) => {
      basket.value = basket.value.filter((i) => i !== item)
    }

    const searchUp = async () => {
      await axios
        .get("https://api.spoonacular.com/food/ingredients/autocomplete", {
          params: {
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
            query: ingredientQuery.value,
          },
        })
        .then((res) => (ingredients.value = res.data))
    }

    const findRecipes = async () => {
      await axios
        .get("https://api.spoonacular.com/recipes/findByIngredients", {
          params: {
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
            ingredients: basket.value.map((val) => val.name).join(","),
          },
        })
        .then((res) => (recipes.value = res.data))
    }

    return { ingredientQuery, ingredients, basket, recipes, addToBasket, removeFromBasket, searchUp, findRecipes }
  },
}
</script>

<style></style>

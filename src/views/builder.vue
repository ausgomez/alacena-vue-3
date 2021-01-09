<template>
  <div class="flex container mx-auto mt-5 space-x-4" style="min-height: 400px;">
    <div class="w-1/3 shadow-lg p-4 rounded-xl bg-white">
      <h1>Search Items</h1>
      <input
        class="w-full h-12 text-2xl px-4 rounded-xl bg-gray-100 text-gray-500 shadow"
        type="text"
        placeholder="Input"
        v-model="ingredientQuery"
        @keyup.enter="searchUp"
      />
      <div class="mt-4">
        <ul>
          <li v-for="(item, i) in ingredients" :key="i" @click="addToBasket(item)">
            <div class="h-24 bg-blue-300 mt-3 rounded-xl shadow hover:shadow-md">Ingredient {{ item }} {{ i }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-1/3 shadow-lg rounded-xl bg-white p-4">
      <h1>Basket Items</h1>
      <button class="h-12 w-full rounded-xl bg-green-300 shadow" @click="findRecipes">Find Recipes</button>
      <ul class="flex flex-wrap mt-5">
        <li v-for="(item, i) in basket" :key="i" @click="removeFromBasket(item)" class="m-5">
          <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`" />
          <!-- <div class="h-24 bg-blue-300 mt-3 rounded-xl shadow hover:shadow-md">{{ item.image }}</div> -->
        </li>
      </ul>
    </div>
    <div class="w-1/3 shadow-lg rounded-xl bg-white p-4">
      <h1>Recipe Items</h1>
      <ul class="flex flex-wrap">
        <li v-for="(item, i) in recipes" :key="i" @click="removeFromBasket(item)" class="m-2">
          <img :src="item.image" class="rounded-full w-32 h-32" alt="" />
          <!-- <div class="h-12 bg-blue-300 mt-3 rounded-xl shadow hover:shadow-md">Ingredient {{ item.title }} {{ i }}</div> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { ref } from "vue"

export default {
  name: "Builder",
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

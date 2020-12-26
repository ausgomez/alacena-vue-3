<template>
  <div class="flex container mx-auto mt-5 space-x-4" style="min-height: 400px;">
    <div class="w-1/3 shadow-lg p-4 rounded-xl bg-white">
      <h1>Search Items</h1>
      <input
        class="w-full h-12 text-2xl px-4 rounded-xl bg-gray-100 text-gray-500 shadow"
        type="text"
        placeholder="Input"
      />
      <div class="mt-4">
        <ul>
          <li v-for="(item, i) in ingredients" :key="i" @click="addToBasket(item)">
            <div class="h-24 bg-blue-300 mt-3 rounded-xl shadow hover:shadow-md">Ingredient {{ item }} {{ i }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-1/3 shadow-lg rounded-xl bg-white">
      <ul>
        <li v-for="(item, i) in basket" :key="i" @click="removeFromBasket(item)">
          <div class="h-24 bg-blue-300 mt-3 rounded-xl shadow hover:shadow-md">Ingredient {{ item }} {{ i }}</div>
        </li>
      </ul>
    </div>
    <div class="w-1/3 shadow-lg rounded-xl bg-white">
      <h1>Search Items</h1>
    </div>
  </div>
</template>

<script>
// import axios from "axios"
import { ref } from "vue"

export default {
  name: "Builder",
  setup() {
    const ingredients = ref([1, 2, 3])
    const basket = ref([])

    const addToBasket = (item) => {
      ingredients.value = ingredients.value.filter((i) => i !== item)
      basket.value.push(item)
    }

    const removeFromBasket = (item) => {
      basket.value = basket.value.filter((i) => i !== item)
    }

    return { ingredients, basket, addToBasket, removeFromBasket }
  },
}
</script>

<style></style>

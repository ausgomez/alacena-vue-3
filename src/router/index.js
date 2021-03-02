import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Builder from '@/views/builder';
import Recipe from '@/views/recipe';
import Saved from '@/views/saved'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/saved",
    name: "Saved",
    component: Saved
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe
  },
  {
    path: "/builder",
    name: "Builder",
    component: Builder
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Login from "@/views/login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

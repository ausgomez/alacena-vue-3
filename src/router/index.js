import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Login from "@/views/login.vue";
import userStore from '@/stores/auth';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if(userStore.getters.isLoggedIn) next('/')
      else next();
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(!userStore.getters.isLoggedIn && requiresAuth) next('login')
  else next();
});

export default router;

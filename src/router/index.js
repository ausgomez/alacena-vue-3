import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";
import userStore from '@/stores/auth';
import Builder from '@/views/builder';
import Recipe from '@/views/recipe';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/builder",
    name: "Builder",
    component: Builder,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if (userStore.getters.isLoggedIn) next('/')
      else next();
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next) {
      if (userStore.getters.isLoggedIn) next('/')
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
  if (!userStore.getters.isLoggedIn && requiresAuth) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next();
  }
});

export default router;

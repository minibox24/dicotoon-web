import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import View from "../views/View.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/channels/:id",
    component: Menu,
  },
  {
    path: "/channels/:id/:tag",
    component: View,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

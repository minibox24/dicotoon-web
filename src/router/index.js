import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/channels/:id",
    name: "Menu",
    component: Menu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

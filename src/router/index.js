import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/Reservation",
    name: "Reservation",
    component: () => import("../views/Reservation"),
  },

  {
    path: "/CartDetails",
    name: "CartDetails",
    component: () => import("../components/CartDetails"),
  },
  {
    path: "/Menu",
    name: "Menu",
    component: () => import("../views/Menu"),
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import("../views/Cart"),
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

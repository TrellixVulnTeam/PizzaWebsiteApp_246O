import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/Reservation",
    name: "Reservation",
    component: () => import("../views/Reservation.vue"),
  },

  {
    path: "/CartDetails",
    name: "CartDetails",
    component: () => import("../components/CartDetails.vue"),
  },
  {
    path: "/Menu",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/jobs/NotFound.vue'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import CartDetails from '../components/CartDetails.vue'
import Reservation from '../views/Reservation.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Reservation',
    name: 'Reservation',
    component: Reservation
  },

  {
    path: '/CartDetails',
    name: 'CartDetails',
    component: CartDetails
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },


  // catch 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/jobs/NotFound.vue'
import Home from '../views/Home.vue'
import Promotions from '../views/jobs/Promotions.vue'
import Contact from '../views/Contact.vue'
import Menu from '../views/Menu.vue'
import CartDetails from '../components/CartDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
   
  },

    {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },

  {
    path: '/Promotions',
    name: 'Promotions',
    component: Promotions
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

import { createRouter, createWebHistory } from 'vue-router'
import Categories from '../components/Categories.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Categories
    },
  
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Categories from '../components/Categories.vue';
import Favorite from '../components/Favorite.vue';
import Community from '../components/Community.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Categories
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    },
    {
      path:'/community',
      name:'community',
      component: Community
    }
  ]
})

export default router

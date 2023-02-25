import { createRouter, createWebHistory } from 'vue-router'
import Launch from '@/views/Launch.vue';
import Launches from '@/views/Launches.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Launches
    },
    {
      path: '/launch/:id',
      name: 'launch',
      component: Launch
    }
  ]
})

export default router;

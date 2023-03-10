import { createRouter, createWebHistory } from 'vue-router'
import ListPage from '@/views/ListPage.vue';
import DetailPage from '@/views/DetailPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListPage
    },
    {
      path: '/info/:id',
      name: 'Info',
      component: DetailPage
    }
  ]
})

export default router

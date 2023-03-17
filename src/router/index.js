import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Concerts from '../pages/Concerts.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/concerts',
      component: Concerts,
    }
  ],
})

export default router;
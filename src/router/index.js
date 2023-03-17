import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Concerts from '../pages/Concerts.vue';
import NotFound from '../pages/NotFound.vue';

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
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    }
  ],
})

export default router;
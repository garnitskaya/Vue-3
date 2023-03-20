import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Concerts from '../pages/Concerts.vue';
import Releases from '../pages/Releases.vue';
import News from '../pages/News.vue';
import NewSingle from '../pages/NewSingle.vue';
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
      path: '/releases',
      component: Releases,
    },
    {
      path: '/news',
      component: News,
    },
    {
      path: '/news/:id',
      component: NewSingle,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    }
  ],
})

export default router;
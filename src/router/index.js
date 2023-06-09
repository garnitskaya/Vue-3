import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Concerts from '../pages/Concerts.vue'
import Releases from '../pages/Releases.vue'
import News from '../pages/News.vue'
import NewSingle from '../pages/NewSingle.vue'
import About from '../pages/About.vue'
import StoreMain from '../pages/StoreMain.vue'
import StoreSingle from '../pages/StoreSingle/StoreSingle.vue'
import Cart from '../pages/Cart.vue'
import NotFound from '../pages/NotFound.vue'

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
      path: '/about',
      component: About,
    },
    {
      path: '/store',
      component: StoreMain,
      meta: {
        layout: 'store-layout',
      },
    },
    {
      path: '/store/:id',
      name: 'store',
      props: true,
      component: StoreSingle,
      meta: {
        layout: 'store-layout',
      },
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        layout: 'store-layout',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

export default router

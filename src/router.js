import { createRouter, createWebHistory } from 'vue-router'

import CoachesPage from './pages/CoachesPage.vue'
import RequestPage from './pages/RequestPage.vue'

 const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesPage },
    { path: '/coaches/:id', component: null,
      children: [{ path: '/contact', component: null }]
    },
    { path: '/register', component: null },
    { path: '/request', component: RequestPage },
    { path: '/:notFound(.*)', component: null }
  ]
})

export default router
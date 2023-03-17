import { createRouter, createWebHistory } from 'vue-router'

import CoachList from './pages/coaches/CoachList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachContact from './pages/requests/CoachContact.vue';
import RequestPage from './pages/requests/RequestPage.vue';
import NotFound from './pages/NotFound.vue';

 const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    { path: '/coaches/:id', component: CoachDetails, props: true,
      children: [{ path: 'contact', component: CoachContact }]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/request', component: RequestPage },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

export default router
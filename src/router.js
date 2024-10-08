import { createRouter, createWebHistory } from 'vue-router'

import CoachList from './pages/coaches/CoachList.vue';
const CoachDetails = () => import('./pages/coaches/CoachDetails.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const CoachContact = () => import('./pages/requests/CoachContact.vue');
const RequestPage = () => import('./pages/requests/RequestPage.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');
import NotFound from './pages/NotFound.vue';
import store from './store/index.js'

 const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    { path: '/coaches/:id', component: CoachDetails, props: true,
      children: [{ path: 'contact', component: CoachContact }]
    },
    { path: '/register', component: CoachRegistration, meta: { requiresAuth: true }},
    { path: '/request', component: RequestPage, meta: { requiresAuth: true }},
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true }},
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth && store.getters.isAuthenticated) next('/auth');
  else if (to.meta.requiresUnauth && !store.getters.isAuthenticated) next('/coaches');
  else next();
});

export default router
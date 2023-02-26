import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/teams'},
    { name: 'teams',
      path: '/teams', 
      components: { default: TeamsList, footer: TeamsFooter},
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, // /teams/t1
      ]
    },
    // { path: '/teams', component: TeamsList, alias: '/'},
    { 
      path: '/users', 
      components: { 
        default: UsersList, 
        footer: UsersFooter 
      },
      beforeEnter(to, from, next) {
        console.log('Users beforeEnter');
        console.log(to);
        console.log(from);
        next()
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
    // { path: '/:notFound(.*)', redirect: '/teams'}
  ],
  // this option changes the active class for a router-link
  // linkActiveClass: 'active'
  scrollBehavior(to, from, savedPosition) {
    // console.log(to);
    // console.log('____________________________');
    // console.log(from);
    // console.log('____________________________');
    // console.log(savedPosition);
    // console.log('******************************');
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0}
  }
});

router.beforeEach((to, from, next) =>{
  console.log('Global beforeEach');
  console.log(to);
  console.log('____________________________');
  console.log(from);
  console.log('_____________________________');
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2'} });
  // }
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');

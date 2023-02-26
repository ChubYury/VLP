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
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },
    { path: '/:notFound(.*)', component: NotFound }
    // { path: '/:notFound(.*)', redirect: '/teams'}
  ]
  // this option changes the active class for a router-link
  // linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');

import { createApp } from 'vue';

import App from './App.vue'
import UserContact from './components/UserContact.vue'
import newUser from './components/newUser.vue'

const app = createApp(App);

app.component('user-contact', UserContact);
app.component('new-user', newUser)

app.mount('#app');

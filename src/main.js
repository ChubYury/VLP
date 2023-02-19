import { createApp } from 'vue';

import App from './App.vue'
import UserContact from './components/UserContact.vue'

const app = createApp(App);

app.component('user-contact', UserContact);

app.mount('#app');

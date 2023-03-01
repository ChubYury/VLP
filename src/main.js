import { createApp } from 'vue';

import App from './App.vue';
import store from './store'



const app = createApp(App);
// app.component('the-counter', TheCounter )
app.use(store)
app.mount('#app');

import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';
import TheCounter from './components/TheCounter.vue'

const store = createStore({
  state() {
    return {
      counter: 0
    };
  }
})

const app = createApp(App);
app.component('the-counter', TheCounter )
app.use(store)
app.mount('#app');

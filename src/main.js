import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseBtn from './components/UI/BaseBtn.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-btn', BaseBtn);
app.component('base-dialog', BaseDialog)

app.mount('#app');

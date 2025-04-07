import './assets/main.css'

import { createApp } from 'vue'
import App from '/src/plan.vue'




import PrimeVue from 'primevue/config';
createApp(App).mount('#app')


const app = createApp(App);
app.use(PrimeVue);

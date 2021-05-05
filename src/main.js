import { createApp } from 'vue';
import App from './App.vue';

//* Libs
import Vuesax from 'vuesax';

//* Local
import router from './router';
import store from './store';

//* CSS
import 'vuesax/dist/vuesax.css';

createApp(App).use(Vuesax).use(store).use(router).mount('#app');

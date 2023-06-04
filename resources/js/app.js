import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from './axios';
import '../css/app.css';

const app = createApp(App);

app.use(router);

app.use(axios, {
    baseURL: '/',
});

app.mount('#app');
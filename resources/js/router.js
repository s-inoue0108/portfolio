import { createRouter, createWebHistory } from "vue-router";
const BASE_URL = '/';

import home from './components/home.vue';
import about from './components/about.vue';
import works from './components/works.vue';
import contact from './components/contact.vue';
import NotFound from './components/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/about',
        name: 'about',
        component: about,
    },
    {
        path: '/works',
        name: 'works',
        component: works,
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact,
    },
    {
        path: '/pageerror',
        name: '404_NotFound',
        component: NotFound,
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/pageerror',
    },
];

const router = createRouter({
    history: createWebHistory(BASE_URL),  // set BASE_URL
    routes
});
  
export default router;
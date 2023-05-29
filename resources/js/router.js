import { createRouter, createWebHistory } from "vue-router";
const BASE_URL = '/';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Works from './pages/Works.vue';
import Contact from './pages/Contact.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { transition: 'slide-left' },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/works',
        name: 'Works',
        component: Works,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
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
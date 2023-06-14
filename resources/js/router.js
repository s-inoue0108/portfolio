import { createRouter, createWebHistory } from "vue-router";
const BASE_URL = '/';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Works from './pages/Works.vue';
import Contact from './pages/Contact.vue';
import ContactNotice from './pages/ContactNotice.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
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
        path: '/contact/notice',
        name: 'ContactNotice',
        component: ContactNotice,
    },
    {
        path: '/404',
        name: '404_NotFound',
        component: NotFound,
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHistory(BASE_URL),  // set BASE_URL
    routes,
    scrollBehavior(to) {
        if (to.hash) {
          return { el: to.hash, behavior: 'smooth', };
        } else {
          return { top: 0, behavior: 'smooth', };
        }
    }
});
  
export default router;
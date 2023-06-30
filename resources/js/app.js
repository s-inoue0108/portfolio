/* CreateApp */
import { createApp } from 'vue';
import App from './App.vue';

/* Bootstrap */
import './bootstrap';

/* Vue Router */
import router from './router';

/* Axios */
import axios from './axios';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import solid icons */
import { faArrowUpRightFromSquare, faBars, faCalendarDays, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCircleCheck, faCircleExclamation, faCode, faDatabase, faEnvelope, faGlobe, faHeadphones, faHouse, faImage, faLaptopCode, faList, faPenNib, faQ, faRotate, faSchool, faSpinner, faStar, faToolbox, faTriangleExclamation, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

/* import brands icons */
import { faGithub, faHtml5, faJs, faLaravel } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faChevronUp, faChevronDown, faUser, faSchool, faCode, faHtml5, faJs, faLaravel, faDatabase, faToolbox, faList, faPenNib, faQ, faGlobe, faSpinner, faCircleCheck, faTriangleExclamation, faEnvelope, faCircleExclamation, faXmark, faHouse, faLaptopCode, faRotate, faBars, faGithub, faStar, faArrowUpRightFromSquare, faChevronLeft, faChevronRight, faImage, faCalendarDays, faHeadphones)


/* mount */
const app = createApp(App);

app.use(router);

app.use(axios, {
    baseURL: '/',
});

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
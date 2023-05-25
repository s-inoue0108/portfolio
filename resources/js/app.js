import './bootstrap';

import { createApp, ref } from 'vue/dist/vue.esm-bundler';

createApp({
    setup() {

        const hello = ref('Hello, Laravel10 & Vue3 !');

        return {
            hello,
        }

    },
}).mount('#app');
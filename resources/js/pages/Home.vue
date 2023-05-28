<template>
    <div class="relative w-screen h-screen load">
        <Header />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
                <img src="/storage/icons/S.I.jpg" class="w-3/4 sm:w-1/2 h-auto"/>
                <h1 class="text-4xl md:text-6xl lg:text-8xl 
                text-center text-navy-blue font-bold 
                tracking-wider leading-10">PORTFOLIO SITE</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import { useRoute } from 'vue-router';

    const url = useRoute();
    console.log(url.path);
</script>


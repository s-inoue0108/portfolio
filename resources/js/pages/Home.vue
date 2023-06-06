<template>
    <div class="relative w-screen h-screen">
        <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
            <Header active="home" />
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
                <img src="/storage/icons/S.I.jpg" class="w-3/4 sm:w-1/2 h-auto"/>
                <div class="bg-yellow-300 rounded">
                    <div class="flex flex-col gap-4 lg:gap-8">
                        <div class="border-2 lg:border-4 border-navy-blue rounded"></div>
                        <h1 class="text-4xl md:text-6xl lg:text-8xl text-center text-navy-blue font-bold tracking-wider px-4">PORTFOLIO SITE</h1>
                        <div class="border-2 lg:border-4 border-navy-blue rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <AboutThisSite />
    </div>
    <Footer :path="path" />
</template>

<script setup>

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import AboutThisSite from '../components/AboutThisSite.vue';

import { ref } from 'vue';
import { useRoute } from 'vue-router';

const path = ref(useRoute().path).value;

</script>


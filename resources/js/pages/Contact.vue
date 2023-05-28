<template>
    <Header />
    <h1 class="text-navy-blue text-4xl lg:text-6xl text-center font-bold py-8 tracking-wider">CONTACT</h1>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import { useRoute } from 'vue-router';

    const url = useRoute();
    console.log(url.path);
</script>


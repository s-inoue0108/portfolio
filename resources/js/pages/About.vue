<template>
    <Header about="active" />
    <h1 class="text-navy-blue text-4xl lg:text-6xl text-center font-bold py-8 tracking-wider">ABOUT</h1>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import { useRoute } from 'vue-router';

    const url = useRoute();
    const param = url.path;
</script>


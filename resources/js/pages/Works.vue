<template>
    <div>
        <Header works="active" />
        <div class="w-screen">
            <div class="flex justify-center items-center gap-4 py-16">
                <div class="border-navy-blue bg-navy-blue w-4 lg:w-6 h-10 lg:h-14"></div>
                <h1 class="text-navy-blue text-4xl lg:text-6xl text-center font-bold tracking-wider">WORKS</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import { useRoute } from 'vue-router';

    const url = useRoute();
    const param = url.path;
</script>


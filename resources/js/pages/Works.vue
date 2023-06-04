<template>
    <div>
        <Header active="works" />
        <div class="w-screen">

            <PageTitle titleLeft="W" titleRight="RKS" />

        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import PageTitle from '../components/PageTitle.vue';
    import { useRoute } from 'vue-router';

    const url = useRoute();
    const param = url.path;
</script>


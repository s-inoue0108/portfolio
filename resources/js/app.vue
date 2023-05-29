<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>

<script setup>
    import { Transition, onMounted } from'vue';

    onMounted(() => {
        
    })
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1.0s;
        opacity: 0;
    }

    .fade-enter-to, .fade-leave-to {
        opacity: 1;
    }
</style>
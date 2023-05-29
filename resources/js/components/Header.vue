<template>
    <header class="header p-4 bg-navy-blue">
        <div class="flex justify-center gap-2 lg:gap-4 py-4 text-white lg:text-lg font-semibold">
            <router-link to="/" :class="current['home'] === 'active' ? 'text-yellow-400' : 'text-white'">HOME</router-link>
            <p>|</p>
            <router-link to="/about" :class="current['about'] === 'active' ? 'text-yellow-400' : 'text-white'">ABOUT</router-link>
            <p>|</p>
            <router-link to="/works" :class="current['works'] === 'active' ? 'text-yellow-400' : 'text-white'">WORKS</router-link>
            <p>|</p>
            <router-link to="/contact" :class="current['contact'] === 'active' ? 'text-yellow-400' : 'text-white'">CONTACT</router-link>
        </div>
    </header>
</template>

<script setup>
    const current = defineProps([
        'home',
        'about',
        'works',
        'contact',
    ]);
</script>
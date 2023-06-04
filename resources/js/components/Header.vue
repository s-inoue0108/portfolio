<template>
    <header class="header p-4 bg-navy-blue">
        <div class="flex justify-center gap-2 lg:gap-4 py-4 text-white lg:text-lg font-semibold">
            <router-link to="/" :class="[active === 'home' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : 'text-white']">HOME</router-link>
            <p>|</p>
            <router-link to="/about" :class="[active === 'about' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : 'text-white']">ABOUT</router-link>
            <p>|</p>
            <router-link to="/works" :class="[active === 'works' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : 'text-white']">WORKS</router-link>
            <p>|</p>
            <router-link to="/contact" :class="[active === 'contact' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : 'text-white']">CONTACT</router-link>
        </div>
    </header>
</template>

<script setup>
    const props = defineProps({
        active: {
            type: String,
            required: true,
        },
    });
</script>
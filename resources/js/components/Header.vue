<template>
    <header class="header p-2 lg:p-4 bg-navy-blue bg-opacity-90">
        <div class="flex justify-center gap-2 lg:gap-4 py-4 text-white lg:text-lg font-semibold">
            <router-link to="/" :class="[path === '/' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                <i class="fa-solid fa-home mr-2 hidden lg:inline-block"></i>HOME
            </router-link>
            <p>|</p>
            <router-link to="/about" :class="[path === '/about' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                <i class="fa-solid fa-user mr-2 hidden lg:inline-block"></i>ABOUT
            </router-link>
            <p>|</p>
            <router-link to="/works" :class="[path === '/works' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                <i class="fa-solid fa-code mr-2 hidden lg:inline-block"></i>WORKS
            </router-link>
            <p>|</p>
            <router-link to="/contact" :class="[path === '/contact' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                <i class="fa-solid fa-envelope mr-2 hidden lg:inline-block"></i>CONTACT
            </router-link>
        </div>
    </header>
</template>

<script setup>

const props = defineProps({
    path: {
        type: String,
        default: '/',
    }
});
</script>
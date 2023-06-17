<template>
    <header class="header p-2 lg:p-4 bg-navy-blue bg-opacity-90 w-screen">
        <div class="flex justify-center gap-2 lg:gap-4 py-4 text-white lg:text-lg font-semibold">

            <!--HOME-->
            <router-link to="/"
                :class="[currentPath === '/' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                <i class="fa-solid fa-home mr-2 hidden md:inline-block"></i>HOME
            </router-link>
            <p>|</p>

            <!--ABOUT-->
            <router-link to="/about"
                :class="[currentPath === '/about' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                <i class="fa-solid fa-user mr-2 hidden md:inline-block"></i>ABOUT
            </router-link>
            <p>|</p>

            <!--WORKS-->
            <router-link to="/works"
                :class="[currentPath === '/works' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                <i class="fa-solid fa-laptop-code mr-2 hidden md:inline-block"></i>WORKS
            </router-link>
            <p>|</p>

            <!--CONTACT-->
            <router-link to="/contact"
                :class="[currentPath === '/contact' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                <i class="fa-solid fa-envelope mr-2 hidden md:inline-block"></i>CONTACT
            </router-link>
        </div>
    </header>
</template>

<script setup>
/* currentPathをprop */
const props = defineProps({
    currentPath: {
        type: String,
        default: '/',
    },
    sidebarActive: {
        default: false,
    },
});

/* サイドバーをemitして開閉 */
const emit = defineEmits(['toggleSidebar']);
const emitSidebar = () => {
    emit('toggleSidebar');
}
</script>
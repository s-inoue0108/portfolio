<template>
    <router-link :to="link.path"
        :class="[currentPath === link.path ? ['text-yellow-400', 'md:border-b-2', 'md:border-yellow-400'] : ['text-white', 'md:link-hover']]">
        <div class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', link.icon]" />
            <p v-text="link.name" class="hidden md:block"></p>
        </div>
    </router-link>
</template>



<script setup>
/* props */
const props = defineProps({
    link: {
        type: Object,
    },
    currentPath: {
        type: String,
    }
});
</script>
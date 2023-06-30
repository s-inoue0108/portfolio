<template>
    <div class="flex justify-center items-center">
        <div v-for="star in stars" :key="star.id">
            <font-awesome-icon :icon="['fas', 'star']" :class="star.color" />
        </div>
    </div>
</template>



<script setup>
/* props */
const props = defineProps({
    stars: {
        type: Array,
    }
});
</script>
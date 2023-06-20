<template>
    <div class="flex justify-center bg-navy-blue py-5 lg:py-7">
        <div class="flex items-center gap-2 lg:gap-4 text-center text-4xl lg:text-6xl text-white font-bold">
            <div v-html="iconTag"></div>
            <p class="tracking-wider ml-2" v-text="subTitle"></p>
        </div>
    </div>
</template>

<script setup>
/* props */
const props = defineProps({
    subTitle: {
        type: String,
    },
    iconTag: {
        type: String,
    },
})
</script>
<template>
    <div class="py-12 lg:py-16">
        <div class="flex flex-col">
            <div class="border-4 border-navy-blue"></div>
                <div class="flex justify-center bg-yellow-300 py-5 lg:py-7">
                    <div class="flex items-center gap-2 lg:gap-4 text-center text-4xl lg:text-6xl text-navy-blue font-bold">
                        <div v-html="iconTag"></div>
                        <p class="tracking-wider ml-2" v-text="subTitle"></p>
                    </div>
                </div>
            <div class="border-4 border-navy-blue"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    subTitle: {
        type: String,
    },
    iconTag: {
        type: String,
    },
})
</script>
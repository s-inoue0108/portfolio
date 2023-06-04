<template>
    <div class="relative py-36 lg:py-56">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HoneyComb />
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 class="text-navy-blue text-6xl lg:text-8xl text-center font-bold tracking-wider">
                <div class="flex items-center">
                    <p v-text="titleLeft"></p>
                    <!--Hex-R * 1.6 = lg:Hex-R-->
                    <div class="hex w-[3.5rem] lg:w-[5.6rem] bg-navy-blue relative mt-2">
                        <!--Hex-R * 0.7 = circle-R-->
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[2.45rem] h-[2.45rem] lg:w-[3.92rem] lg:h-[3.92rem] rounded-full border-2 border-white"></div>
                    </div>
                    <p v-text="titleRight"></p>
                </div>
            </h1>
        </div>
    </div>
</template>

<script setup>
    import HoneyComb from '../components/HoneyComb.vue';

    const props = defineProps({
        titleLeft: {
            type: String,
        },

        titleRight: {
            type: String,
        },
    });
</script>
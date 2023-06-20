<template>
    <div class="relative bg-yellow-400 w-screen h-screen">

        <!--ハニカム-->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HoneyComb />
        </div>

        <!--タイトル-->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 class="text-navy-blue text-6xl lg:text-8xl text-center font-bold tracking-wider">
                <div class="flex items-center">
                    <p v-text="titleLeft"></p>
                    <!--Hex-R * 1.6 = lg:Hex-R-->
                    <div class="hex w-[3.5rem] lg:w-[5.6rem] bg-navy-blue relative mt-2">
                        <!--Hex-R * 0.7 = circle-R-->
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[2.45rem] h-[2.45rem] lg:w-[3.92rem] lg:h-[3.92rem] rounded-full border-2 border-white">
                        </div>
                    </div>
                    <p v-text="titleRight"></p>
                </div>
            </h1>
        </div>

        <!--ページ内リンク-->
        <div v-if="innerPageLinkActive">
            <div class="absolute top-3/4 left-1/2 -translate-x-1/2">
                <div class="flex justify-center gap-4 lg:gap-8">
                    <div v-for="link in links" :key="link.id">
                        <router-link :to="currentPath + link.hash">
                            <button class="btn btn-primary lg:btn-lg text-xs w-[7rem] lg:w-[14rem] p-0">
                                <div class="flex items-center text-white gap-1">
                                    <i class="fa-solid fa-chevron-down"></i>
                                    <p v-text="link.hashTitle"></p>
                                </div>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HoneyComb from '../components/HoneyComb.vue';
import { ref } from 'vue';

/* props */
const props = defineProps({
    titleLeft: {
        type: String,
    },

    titleRight: {
        type: String,
    },
    currentPath: {
        type: String,
    },
    links: {
        type: Array,
    },
});

/* ページ内リンクを表示 */
const innerPageLinkActive = ref(false);

const innerPageLinkFade = () => {
    if (props.currentPath !== '/contact') {
        innerPageLinkActive.value = true;
    }
}

innerPageLinkFade();

</script>
<template>
    <!--アニメーション-->
    <transition name="fade">
        <div v-if="animateActive" class="relative" :style="[animateActive ? 'will-change: opacity' : '']">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/storage/icons/S.I.svg" />
            </div>
        </div>
    </transition>

    <!--HOME-->
    <div class="relative h-screen">

        <transition name="fade">
            <div v-if="contentActive" :style="[contentActive ? 'will-change: opacity' : '']">

                <div class="fixed top-0 left-0">
                    <img :src=imgPath class="w-screen h-screen object-cover" />
                </div>

                <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div class="bg-yellow-400 bg-opacity-90 border-navy-blue border-t-[0.5rem] border-b-[0.5rem]">
                        <div class="flex flex-col gap-4 lg:gap-8 px-4 py-6">
                            <h1
                                class="text-2xl md:text-4xl lg:text-6xl text-center text-navy-blue font-light tracking-wider">
                                Shota Inoue</h1>
                            <div
                                class="flex flex-col text-4xl md:text-6xl lg:text-8xl text-center text-navy-blue font-bold tracking-wider">
                                <h1>PORTFOLIO</h1>
                                <h1>SITE</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

/* 現在のパスをapp.vueへemit */
const currentPath = useRoute().path;

const emit = defineEmits(['receivePath']);
const emitPath = () => {
    emit('receivePath', currentPath);
}

emitPath();

/* 背景画像 */
const imgList = [
    "/storage/images/TokyoNightScape.jpeg",
    "/storage/images/RaimbowBridge.jpeg",
    "/storage/images/KiyomizuTemple.jpeg",
    "/storage/images/OsakaNightScape.jpeg",
];

const imgIndex = (maxIndex) => {
    maxIndex = Math.floor(imgList.length);
    return Math.floor(Math.random() * maxIndex);
}

const imgPath = imgList[imgIndex()];

/* アニメーション，背景画像，パスのemit */
const animateActive = ref(false);
const contentActive = ref(false);

onMounted(() => {
    animateActive.value = true;

    setTimeout(() => {
        animateActive.value = false;
        contentActive.value = true;
    }, 1000);
});
</script>



<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s ease;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
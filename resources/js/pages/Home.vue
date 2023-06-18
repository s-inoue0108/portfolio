<template>
    <!--ロゴアニメーション-->
    <transition name="fade-out">
        <div v-if="animateActive">
            <div class="fixed top-0 left-0 bg-yellow-400 w-screen h-screen z-0"></div>
        </div>
    </transition>

    <transition name="fade">
        <div v-if="animateActive" class="relative" :style="[animateActive ? 'will-change: opacity' : '']">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/storage/icons/S.I.png" />
            </div>
        </div>
    </transition>

    <!--HOME-->
    <div class="relative h-screen">
        <transition name="fade">
            <div v-if="contentActive" :style="[contentActive ? 'will-change: opacity' : '']">

                <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div class="bg-yellow-400 bg-opacity-80 border-navy-blue border-t-[0.5rem] border-b-[0.5rem]">
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
    transition: opacity 1.0s ease;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.fade-out-leave-to {
    opacity: 0;
}

.fade-out-leave-active {
    transition: opacity 1.0s ease;
}

.fade-out-leave-from {
    opacity: 1;
}
</style>
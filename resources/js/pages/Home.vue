<template>

    <!--ロゴアニメーション-->
    <transition name="fade">
        <div v-if="animateActive" class="relative">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/storage/icons/S.I.jpg" />
            </div>
        </div>
    </transition>
    
    <!--Home-->
    <div class="relative h-screen">
        <transition name="fade">
            <div v-if="homeActive">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
                        <img src="/storage/icons/S.I.jpg" class="w-3/4 sm:w-1/2 h-auto" />
                        <div class="bg-yellow-300 rounded">
                            <div class="flex flex-col gap-4 lg:gap-8">
                                <div class="border-2 lg:border-4 border-navy-blue rounded"></div>
                                <h1 class="text-2xl md:text-4xl lg:text-6xl text-center text-navy-blue font-light tracking-wider px-4">Shota Inoue</h1>
                                <h1 class="text-4xl md:text-6xl lg:text-8xl text-center text-navy-blue font-bold tracking-wider px-4">PORTFOLIO SITE</h1>
                                <div class="border-2 lg:border-4 border-navy-blue rounded"></div>
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
const currentPath = ref(useRoute().path).value;

const emit = defineEmits(['receivePath']);
const emitPath = () => {
    emit('receivePath', currentPath);
}

/* マウント時にアニメーションとパスをemit */
const animateActive = ref(false);
const homeActive = ref(false);

onMounted(() => {
    animateActive.value = true;

    setTimeout(() => {
        animateActive.value = false;
        homeActive.value = true;
    }, 1000);

    emitPath();
});
</script>



<style scoped>
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
</style>
<template>

    <!--ロゴアニメーション-->
    <transition name="fade">
        <div v-if="animateActive" class="relative">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/storage/icons/S.I.jpg" />
            </div>
        </div>
    </transition>

    <!--サイドバー-->
    <Sidebar :path="path" :sidebarActive="sidebarActive" @closeSidebar="closeSidebar" />
    
    <!--Home-->
    <div class="relative h-screen" :class="{ 'opacity-70': sidebarActive, '-z-50': sidebarActive }">

        <!--ヘッダー-->
        <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
            <Header :path="path" />
        </div>

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

        <!--フッター-->
        <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-50">
            <Footer :path="path" @openSidebar="openSidebar" />
        </div>

    </div>
            
</template>



<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Sidebar from '../components/Sidebar.vue';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

/* 現在のパス */
const path = ref(useRoute().path).value;

/* マウント時にアニメーション */
const animateActive = ref(false);
const homeActive = ref(false);

onMounted(() => {
    animateActive.value = true;

    setTimeout(() => {
        animateActive.value = false;
        homeActive.value = true;
    }, 1000);
});

/* emitされたサイドバー開閉の処理 */
const sidebarActive = ref(false);

const openSidebar = () => {
    sidebarActive.value = true;
}

const closeSidebar = () => {
    sidebarActive.value = false;
}
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
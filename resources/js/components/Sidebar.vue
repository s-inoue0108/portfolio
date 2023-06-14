<template>
    <!--サイドバー-->
    <transition name="slide">
        <div v-if="sidebarActive" class="relative">
            <div class="fixed top-0 right-0 z-50">
                <div class="bg-navy-blue h-screen px-4 lg:px-8 py-8">
                    <div class="flex flex-row-reverse justify-between">
                        <button class="btn btn-sm lg:btn-md btn-circle btn-neutral btn-outline" @click="emitSidebar">
                            <i class="fa-solid fa-xmark fa-2x"></i>
                        </button>
                    </div>
                    <h1 class="text-3xl lg:text-5xl text-center font-bold pt-4">CONTENTS</h1>
                    <div class="flex justify-center pt-8 lg:pt-12">
                        <div class="flex flex-col">

                            <div class="flex flex-col gap-2">
                                <router-link to="/" class="text-xl lg:text-3xl font-semibold link-hover" :class="[path === '/' ? ['text-yellow-400'] : []]">
                                    <i class="fa-solid fa-house mr-2"></i>HOME
                                </router-link>
                                <div class="flex pl-2 lg:pl-3">
                                    <div class="border-2 h-8"></div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2" :class="[path === '/about' ? ['text-yellow-400'] : []]">
                                <router-link to="/about" class="text-xl lg:text-3xl font-semibold link-hover">
                                    <i class="fa-solid fa-user mr-2"></i>ABOUT
                                </router-link>
                                <div class="flex pl-2 lg:pl-3">
                                    <div class="border-2" :class="[path === '/about' ? ['border-yellow-400'] : []]"></div>
                                    <div class="flex flex-col gap-2 pl-4 py-8">
                                        <router-link to="/about#Profile" class="text-base lg:text-xl font-light link-hover">
                                            <i class="fa-solid fa-user mr-1"></i>プロフィール
                                        </router-link>
                                        <router-link to="/about#AcademicBackground" class="text-base lg:text-xl font-light link-hover">
                                            <i class="fa-solid fa-school mr-1"></i>学歴
                                        </router-link>
                                        <router-link to="/about#CodingSkill" class="text-base lg:text-xl font-light link-hover">
                                            <i class="fa-solid fa-laptop-code mr-1"></i>スキル
                                        </router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2" :class="[path === '/works' ? ['text-yellow-400'] : []]">
                                <router-link to="/works" class="text-xl lg:text-3xl font-semibold link-hover">
                                    <i class="fa-solid fa-code mr-2"></i>WORKS
                                </router-link>
                                <div class="flex pl-2 lg:pl-3">
                                    <div class="border-2" :class="[path === '/works' ? ['border-yellow-400'] : []]"></div>
                                    <div class="flex flex-col gap-2 pl-4 py-8">
                                        <router-link to="/works#BlogSite" class="text-base lg:text-xl font-light link-hover">
                                            <i class="fa-solid fa-pen-nib mr-1"></i>ブログサイト
                                        </router-link>
                                        <router-link to="/works#QuizApp" class="text-base lg:text-xl font-light link-hover">
                                            <i class="fa-solid fa-q mr-1"></i>クイズアプリ
                                        </router-link>
                                        <router-link to="/works#Portfolio" class="text-base lg:text-xl font-light link-hover">
                                            <i class="fa-solid fa-globe mr-1"></i>ポートフォリオ
                                        </router-link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <router-link to="/contact" class="text-xl lg:text-3xl font-semibold" :class="[path === '/contact' ? ['text-yellow-400'] : ['link-hover']]">
                                    <i class="fa-solid fa-envelope mr-2"></i>CONTACT
                                </router-link>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </transition>
</template>



<script setup>
/* path, sidebarActiveをprops */
const props = defineProps({
    path: {
        type: String,
        default: '/',
    },
    sidebarActive: {
        default: false,
    },
});

/* サイドバーをemitして閉じる */
const emit = defineEmits(['closeSidebar']);
const emitSidebar = () => {
    emit('closeSidebar');
}
</script>



<style scoped>
.slide-enter-from {
    transform: translateX(100%);
}

.slide-enter-to {
    transition: transform .3s linear;
    transform: translateX(0%);
}

.slide-leave-to {
    transition: transform .3s linear;
    transform: translateX(100%);
}

.slide-leave-from {
    transform: translateX(0%);
}
</style>
<template>
    <!--サイドバー-->
    <transition name="slide">
        <div v-if="sidebarActive" class="relative">
            <div class="bg-navy-blue h-screen px-4 lg:px-8 py-8">
                <div class="flex flex-row-reverse justify-between">
                    <button class="btn btn-sm lg:btn-md btn-circle btn-neutral btn-outline" @click="emitSidebar">
                        <i class="fa-solid fa-xmark fa-2x"></i>
                    </button>
                </div>
                <h1 class="text-3xl lg:text-5xl text-center font-bold pt-4">CONTENTS</h1>
                <div class="flex justify-center pt-8 lg:pt-12">
                    <div class="flex flex-col">

                        <div class="flex flex-col">
                            <router-link to="/" class="text-xl lg:text-3xl font-semibold link-hover"
                                :class="[currentPath === '/' ? ['text-yellow-400'] : []]">
                                <div class="flex items-center gap-2">
                                    <div class="relative text-navy-blue w-10 lg:w-14 h-[2.21rem] lg:h-[3.03rem] hex"
                                        :class="[currentPath === '/' ? ['bg-yellow-400'] : ['bg-gray-300']]">
                                        <i
                                            class="fa-solid fa-house absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                    </div>
                                    <p>HOME</p>
                                </div>
                            </router-link>
                            <div class="flex pl-[19px] lg:pl-[27px]">
                                <div class="border-2 h-8"></div>
                            </div>
                        </div>

                        <div class="flex flex-col" :class="[currentPath === '/about' ? ['text-yellow-400'] : []]">
                            <router-link to="/about" class="text-xl lg:text-3xl font-semibold link-hover">
                                <div class="flex items-center gap-2">
                                    <div class="relative text-navy-blue w-10 lg:w-14 h-[2.21rem] lg:h-[3.03rem] hex"
                                        :class="[currentPath === '/about' ? ['bg-yellow-400'] : ['bg-gray-300']]">
                                        <i
                                            class="fa-solid fa-user absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                    </div>
                                    <p>ABOUT</p>
                                </div>
                            </router-link>
                            <div class="flex pl-[19px] lg:pl-[27px]">
                                <div class="border-2" :class="[currentPath === '/about' ? ['border-yellow-400'] : []]">
                                </div>
                                <div class="flex flex-col gap-2 pl-4 py-8">
                                    <router-link to="/about#Profile" class="text-base lg:text-xl font-light link-hover">
                                        <i class="fa-solid fa-user mr-1"></i>プロフィール
                                    </router-link>
                                    <router-link to="/about#AcademicBackground"
                                        class="text-base lg:text-xl font-light link-hover">
                                        <i class="fa-solid fa-school mr-1"></i>学歴
                                    </router-link>
                                    <router-link to="/about#CodingSkill" class="text-base lg:text-xl font-light link-hover">
                                        <i class="fa-solid fa-code mr-1"></i>スキル
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col" :class="[currentPath === '/works' ? ['text-yellow-400'] : []]">
                            <router-link to="/works" class="text-xl lg:text-3xl font-semibold link-hover">
                                <div class="flex items-center gap-2">
                                    <div class="relative text-navy-blue w-10 lg:w-14 h-[2.21rem] lg:h-[3.03rem] hex"
                                        :class="[currentPath === '/works' ? ['bg-yellow-400'] : ['bg-gray-300']]">
                                        <i
                                            class="fa-solid fa-laptop-code absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                    </div>
                                    <p>WORKS</p>
                                </div>
                            </router-link>
                            <div class="flex pl-[19px] lg:pl-[27px]">
                                <div class="border-2" :class="[currentPath === '/works' ? ['border-yellow-400'] : []]">
                                </div>
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
                            <router-link to="/contact" class="text-xl lg:text-3xl font-semibold"
                                :class="[currentPath === '/contact' ? ['text-yellow-400'] : ['link-hover']]">
                                <div class="flex items-center gap-2">
                                    <div class="relative text-navy-blue w-10 lg:w-14 h-[2.21rem] lg:h-[3.03rem] hex"
                                        :class="[currentPath === '/contact' ? ['bg-yellow-400'] : ['bg-gray-300']]">
                                        <i
                                            class="fa-solid fa-envelope absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                    </div>
                                    <p>CONTACT</p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>



<script setup>
/* currentPath, sidebarActiveをprops */
const props = defineProps({
    currentPath: {
        type: String,
        default: '/',
    },
    sidebarActive: {
        default: false,
    },
});

/* サイドバー開閉イベントをemit */
const emit = defineEmits(['toggleSidebar']);
const emitSidebar = () => {
    emit('toggleSidebar');
}
</script>



<style scoped>
.slide-enter-from {
    transform: translateX(-100%);
}

.slide-enter-to {
    transition: transform .3s ease-in-out;
    transform: translateX(0%);
}

.slide-leave-to {
    transition: transform .3s ease-in-out;
    transform: translateX(-100%);
}

.slide-leave-from {
    transform: translateX(0%);
}
</style>
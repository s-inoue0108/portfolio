<template>
    <!--サイドバー-->
    <transition name="slide">
        <div v-if="sidebarActive" class="relative">
            <div class="bg-navy-blue h-screen px-4 py-8">

                <!--CLOSEボタン-->
                <div class="flex lg:flex-col-reverse items-center justify-between">
                    <h1 class="text-2xl lg:text-4xl lg:pt-12 font-semibold">CONTENTS</h1>
                    <div class="lg:absolute lg:top-4 lg:right-4">
                        <button class="btn btn-sm lg:btn-md btn-circle btn-neutral btn-outline" @click="emitSidebar">
                            <font-awesome-icon :icon="['fas', 'xmark']" class="text-lg lg:text-2xl" />
                        </button>
                    </div>
                </div>
                <div class="flex justify-center pt-8 lg:pt-10">
                    <div class="flex flex-col">

                        <div class="flex flex-col">
                            <router-link to="/" class="text-xl lg:text-2xl font-semibold link-hover"
                                :class="[currentPath === '/' ? ['text-yellow-400'] : []]">
                                <div class="flex items-center gap-2">
                                    <div class="relative text-navy-blue w-10 lg:w-12 h-[2.21rem] lg:h-[2.60rem] hex"
                                        :class="[currentPath === '/' ? ['bg-yellow-400'] : ['bg-gray-300']]">
                                        <font-awesome-icon :icon="['fas', 'house']"
                                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    </div>
                                    <p>HOME</p>
                                </div>
                            </router-link>
                            <div class="flex pl-[19px] lg:pl-[23px]">
                                <div class="border-2 h-8"></div>
                            </div>
                        </div>

                        <div class="flex flex-col" :class="[currentPath === '/about' ? ['text-yellow-400'] : []]">
                            <router-link to="/about" class="text-xl lg:text-2xl font-semibold link-hover">
                                <div class="flex items-center gap-2">
                                    <div class="relative text-navy-blue w-10 lg:w-12 h-[2.21rem] lg:h-[2.60rem] hex"
                                        :class="[currentPath === '/about' ? ['bg-yellow-400'] : ['bg-gray-300']]">
                                        <font-awesome-icon :icon="['fas', 'user']"
                                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    </div>
                                    <p>ABOUT</p>
                                </div>
                            </router-link>
                            <div class="flex pl-[19px] lg:pl-[23px]">
                                <div class="border-2" :class="[currentPath === '/about' ? ['border-yellow-400'] : []]">
                                </div>
                                <div class="flex flex-col gap-2 pl-4 py-8">
                                    <router-link to="/about#Profile" class="text-base lg:text-lg font-light link-hover">
                                        <font-awesome-icon :icon="['fas', 'user']" class="mr-1" />プロフィール
                                    </router-link>
                                    <router-link to="/about#AcademicBackground"
                                        class="text-base lg:text-lg font-light link-hover">
                                        <font-awesome-icon :icon="['fas', 'school']" class="mr-1" />学歴
                                    </router-link>
                                    <router-link to="/about#CodingSkill" class="text-base lg:text-lg font-light link-hover">
                                        <font-awesome-icon :icon="['fas', 'code']" class="mr-1" />スキル
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col" :class="[currentPath === '/works' ? ['text-yellow-400'] : []]">
                            <router-link to="/works" class="text-xl lg:text-2xl font-semibold link-hover">
                                <div class="flex items-center gap-2">
                                    <div class="relative text-navy-blue w-10 lg:w-12 h-[2.21rem] lg:h-[2.60rem] hex"
                                        :class="[currentPath === '/works' ? ['bg-yellow-400'] : ['bg-gray-300']]">
                                        <font-awesome-icon :icon="['fas', 'laptop-code']"
                                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    </div>
                                    <p>WORKS</p>
                                </div>
                            </router-link>
                            <div class="flex pl-[19px] lg:pl-[23px]">
                                <div class="border-2" :class="[currentPath === '/works' ? ['border-yellow-400'] : []]">
                                </div>
                                <div class="flex flex-col gap-2 pl-4 py-8">
                                    <router-link to="/works#BlogSite" class="text-base lg:text-lg font-light link-hover">
                                        <font-awesome-icon :icon="['fas', 'pen-nib']" class="mr-1" />ブログサイト
                                    </router-link>
                                    <router-link to="/works#QuizApp" class="text-base lg:text-lg font-light link-hover">
                                        <font-awesome-icon :icon="['fas', 'q']" class="mr-1" />クイズアプリ
                                    </router-link>
                                    <router-link to="/works#Portfolio" class="text-base lg:text-lg font-light link-hover">
                                        <font-awesome-icon :icon="['fas', 'globe']" class="mr-1" />ポートフォリオ
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <router-link to="/contact" class="text-xl lg:text-2xl font-semibold"
                                :class="[currentPath === '/contact' ? ['text-yellow-400'] : ['link-hover']]">
                                <div class="flex items-center gap-2">
                                    <div class="relative text-navy-blue w-10 lg:w-12 h-[2.21rem] lg:h-[2.60rem] hex"
                                        :class="[currentPath === '/contact' ? ['bg-yellow-400'] : ['bg-gray-300']]">
                                        <font-awesome-icon :icon="['fas', 'envelope']"
                                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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
/* props */
const props = defineProps({
    currentPath: {
        type: String,
    },
    sidebarActive: {
        type: Boolean,
    },
});

/* emit */
const emit = defineEmits(['toggleSidebar']);

/* サイドバーをemitして開閉 */
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
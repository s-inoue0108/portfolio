<template>
    <header class="header bg-navy-blue py-2 md:py-4" :class="[currentPath === '/' ? ['bg-opacity-80'] : []]">
        <div class="flex justify-around items-center w-full">

            <!--背景を変更-->
            <div class="relative">
                <div class="flex flex-col gap-1 w-16 md:w-24">
                    <p class="text-xs md:text-lg text-yellow-400 text-center" v-text="img.name"
                        :class="{ 'fade-out-in': imgChanging }"></p>
                    <button class="btn btn-xs md:btn-sm btn-outline" @click="emitChangeImg" @mouseenter="openImgWindow"
                        @mouseleave="closeImgWindow">
                        <p><font-awesome-icon :icon="['fas', 'image']" class="mr-1" :class="{ 'rotate': imgChanging }" />変更
                        </p>
                    </button>
                </div>
                <transition name="sliding-fade">
                    <div v-show="changeImgWindowActive" class="hidden lg:block">
                        <div class="balloon absolute top-[170%] left-1/2 -translate-x-1/2 w-52">
                            <p>サイトの背景画像をランダムに変更します</p>
                        </div>
                    </div>
                </transition>
            </div>


            <!--ヘッダーメニュー（PC）-->
            <div class="hidden md:block">
                <div class="flex justify-center gap-4 text-white text-lg font-semibold">
                    <HeaderLink :link="home" :currentPath="currentPath" />
                    <p>|</p>
                    <HeaderLink :link="about" :currentPath="currentPath" />
                    <p>|</p>
                    <HeaderLink :link="works" :currentPath="currentPath" />
                    <p>|</p>
                    <HeaderLink :link="contact" :currentPath="currentPath" />
                </div>
            </div>

            <!--ヘッダーメニュー（モバイル）-->
            <div class="md:hidden">
                <div class="flex justify-center gap-8 text-white text-lg font-semibold">
                    <HeaderLink :link="home" :currentPath="currentPath" />
                    <HeaderLink :link="about" :currentPath="currentPath" />
                    <HeaderLink :link="works" :currentPath="currentPath" />
                    <HeaderLink :link="contact" :currentPath="currentPath" />
                </div>
            </div>

            <!--サイドバー開閉ボタン-->
            <button class="btn btn-sm lg:btn-md btn-outline btn-neutral w-10 md:w-24" @click="emitSidebar">
                <div class="flex items-center gap-2">
                    <font-awesome-icon :icon="['fas', iconTag]" />
                    <p class="hidden md:block">MENU</p>
                </div>
            </button>
        </div>
    </header>
</template>

<script setup>
import HeaderLink from './HeaderLink.vue';
import { ref, watch } from 'vue';

/* props */
const props = defineProps({
    currentPath: {
        type: String,
    },
    sidebarActive: {
        type: Boolean,
    },
    img: {
        type: Object,
    },
    imgChanging: {
        type: Boolean,
    }
});

/* emit */
const emit = defineEmits(['toggleSidebar', 'changeImg']);

/* サイドバーをemitして開閉 */
const emitSidebar = () => {
    emit('toggleSidebar');
}

/* 背景画像をemitして変更 */
const emitChangeImg = () => {
    emit('changeImg');
}

/* ヘッダーリンク */
const home = {
    path: '/',
    name: 'HOME',
    icon: 'house',
};

const about = {
    path: '/about',
    name: 'ABOUT',
    icon: 'user',
};

const works = {
    path: '/works',
    name: 'WORKS',
    icon: 'laptop-code',
};

const contact = {
    path: '/contact',
    name: 'CONTACT',
    icon: 'envelope',
};

/* メニューボタンアイコンの変更 */
const iconTag = ref('bars');

watch(() => props.sidebarActive, (newVal) => {
    if (newVal === true) {
        iconTag.value = 'xmark';
    } else {
        iconTag.value = 'bars';
    }
});

/* マウスオーバーでボタンの説明を出す */
const changeImgWindowActive = ref(false);

const openImgWindow = () => {
    changeImgWindowActive.value = true;
}

const closeImgWindow = () => {
    changeImgWindowActive.value = false;
}
</script>



<style scoped>
.rotate {
    animation: 1s linear rotation;
}

@keyframes rotation {
    0% {
        transform: rotateY(0);
    }

    100% {
        transform: rotateY(360deg);
    }
}

.fade-out-in {
    animation: 1.0s ease-in-out fade-out-in;
}

@keyframes fade-out-in {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.sliding-fade-enter-from,
.sliding-fade-leave-to {
    opacity: 0;
}

.sliding-fade-enter-active,
.sliding-fade-leave-active {
    transition: opacity .3s ease-in-out;
}

.sliding-fade-enter-to,
.sliding-fade-leave-from {
    opacity: 1;
}
</style>
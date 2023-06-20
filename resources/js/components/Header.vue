<template>
    <header class="header bg-navy-blue py-2 md:py-4" :class="[currentPath === '/' ? ['bg-opacity-80'] : []]">
        <div class="flex justify-around items-center w-full">

            <!--背景を変更-->
            <div class="flex flex-col gap-1 w-16 md:w-24">
                <p class="text-xs md:text-lg text-yellow-400 text-center" v-text="img.name"
                    :class="{ 'fade-out-in': imgChanging }"></p>
                <button class="btn btn-xs md:btn-sm btn-outline" @click="emitChangeImg">
                    <p><i class="fa-solid fa-rotate mr-1" :class="{ 'rotate': imgChanging }"></i>変更</p>
                </button>
            </div>


            <!--ヘッダーメニュー（PC）-->
            <div class="hidden md:block">
                <div class="flex justify-center gap-4 text-white text-lg font-semibold">
                    <!--HOME-->
                    <router-link to="/"
                        :class="[currentPath === '/' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-home"></i>
                            <p>HOME</p>
                        </div>
                    </router-link>
                    <p>|</p>

                    <!--ABOUT-->
                    <router-link to="/about"
                        :class="[currentPath === '/about' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-user"></i>
                            <p>ABOUT</p>
                        </div>
                    </router-link>
                    <p>|</p>

                    <!--WORKS-->
                    <router-link to="/works"
                        :class="[currentPath === '/works' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-laptop-code"></i>
                            <p>WORKS</p>
                        </div>
                    </router-link>
                    <p>|</p>

                    <!--CONTACT-->
                    <router-link to="/contact"
                        :class="[currentPath === '/contact' ? ['text-yellow-400', 'border-b-2', 'border-yellow-400'] : ['text-white', 'link-hover']]">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-envelope"></i>
                            <p>CONTACT</p>
                        </div>
                    </router-link>
                </div>
            </div>

            <!--ヘッダーメニュー（モバイル）-->
            <div class="md:hidden">
                <div class="flex justify-center gap-8 text-white text-lg font-semibold">
                    <!--HOME-->
                    <router-link to="/" :class="[currentPath === '/' ? ['text-yellow-400'] : ['text-white', 'link-hover']]">
                        <i class="fa-solid fa-home"></i>
                    </router-link>

                    <!--ABOUT-->
                    <router-link to="/about"
                        :class="[currentPath === '/about' ? ['text-yellow-400'] : ['text-white', 'link-hover']]">
                        <i class="fa-solid fa-user"></i>
                    </router-link>

                    <!--WORKS-->
                    <router-link to="/works"
                        :class="[currentPath === '/works' ? ['text-yellow-400'] : ['text-white', 'link-hover']]">
                        <i class="fa-solid fa-laptop-code"></i>
                    </router-link>

                    <!--CONTACT-->
                    <router-link to="/contact"
                        :class="[currentPath === '/contact' ? ['text-yellow-400'] : ['text-white', 'link-hover']]">
                        <i class="fa-solid fa-envelope"></i>
                    </router-link>
                </div>
            </div>

            <!--サイドバー開閉ボタン-->
            <button class="btn btn-sm lg:btn-md btn-outline btn-neutral w-10 md:w-24" @click="emitSidebar">
                <div class="flex items-center gap-2">
                    <i class="fa-solid" :class="[sidebarActive === true ? 'fa-xmark' : 'fa-bars']"></i>
                    <p class="hidden md:block">MENU</p>
                </div>
            </button>
        </div>
    </header>
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
</script>



<style scoped>
.rotate {
    animation: 1s linear rotation;
}

@keyframes rotation {
    0% {
        transform: rotate(0);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(360deg);
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
</style>
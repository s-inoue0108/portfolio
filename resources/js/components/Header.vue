<template>
    <header class="header bg-navy-blue bg-opacity-90 py-2 md:py-4">
        <div class="flex justify-around items-center w-full">
            
            <!--アイコン-->
            <img src="/storage/icons/S.I-2.png" class="w-8 lg:w-16 h-8 lg:h-16"/>

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
                    <router-link to="/"
                        :class="[currentPath === '/' ? ['text-yellow-400'] : ['text-white', 'link-hover']]">
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
/* currentPathをprop */
const props = defineProps({
    currentPath: {
        type: String,
        default: '/',
    },
    sidebarActive: {
        default: false,
    },
});

/* サイドバーをemitして開閉 */
const emit = defineEmits(['toggleSidebar']);
const emitSidebar = () => {
    emit('toggleSidebar');
}
</script>
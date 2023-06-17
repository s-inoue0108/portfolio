<template>
    <footer class="footer footer-center bg-navy-blue text-white py-4" :class="[currentPath === '/' ? ['bg-opacity-90'] : []]">
        <div class="flex justify-around items-center w-screen">

            <!--GitHub-->
            <a href="https://github.com/s-inoue0108" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-sm lg:btn-md btn-neutral btn-outline normal-case">
                    <div class="flex items-center gap-2">
                        <p class="hidden md:block">GitHub</p>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </button>
            </a>

            <!--Copyright-->
            <p class="lg:text-lg tracking-wide">&copy; <span v-text="year" class="pr-2"></span>Shota Inoue</p>

            <!--サイドバー開閉ボタン-->
            <button class="btn btn-sm lg:btn-md btn-outline btn-neutral" @click="emitSidebar">
                <div class="flex items-center gap-2">
                    <i class="fa-solid" :class="[ sidebarActive === true ? 'fa-xmark' : 'fa-bars' ]"></i>
                    <p class="hidden md:block">MENU</p>
                </div>
            </button>
        </div> 
    </footer>
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

/* Year */
const date = new Date(); 
const year = date.getFullYear();

</script>
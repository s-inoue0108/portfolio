<template>
    <footer class="footer footer-center bg-navy-blue text-white py-4">
        <div class="flex justify-around items-center w-full">

            <!--サイドバー開閉ボタン-->
            <button class="btn btn-sm lg:btn-md btn-outline btn-neutral" @click="emitSidebar">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-bars"></i>
                    <p class="hidden md:block">Menu</p>
                </div>
            </button>

            <!--ページトップリンク-->
            <!--<router-link :to="path">
                <button class="btn btn-sm lg:btn-md btn-outline btn-neutral">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-chevron-up"></i>
                         <p class="hidden md:block">Page Top</p>
                    </div>
                </button>
            </router-link>-->

            <!--Copyright-->
            <p class="lg:text-lg tracking-wide">&copy; <span v-text="year" class="pr-2"></span>Shota Inoue</p>

            <!--GitHub-->
            <a href="https://github.com/s-inoue0108" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-sm lg:btn-md btn-neutral btn-outline normal-case">
                    <div class="flex items-center gap-2">
                        <p class="hidden md:block">GitHub</p>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </button>
            </a>
        </div> 
    </footer>
</template>

<script setup>

/* pathをprop */
const props = defineProps({
    path: {
        type: String,
        default: '/',
    }
});

/* サイドバーをemitして開く */
const emit = defineEmits(['openSidebar']);
const emitSidebar = () => {
    emit('openSidebar');
}

/* Year */
const date = new Date(); 
const year = date.getFullYear();

</script>
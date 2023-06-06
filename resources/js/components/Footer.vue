<template>
    <footer class="footer footer-center bg-navy-blue text-white py-4">
        <div class="flex justify-around items-center w-full">
            <router-link :to="path">
                <button class="btn btn-sm lg:btn-md btn-square btn-outline btn-neutral">
                    <i class="fa-solid fa-chevron-up"></i>
                </button>
            </router-link>
            <p class="lg:text-lg tracking-wide">&copy; <span v-text="year" class="pr-4"></span>Shota Inoue</p>
            <div class="flex gap-4 lg:gap-8">
                <a href="https://github.com/s-inoue0108">
                    <i class="fa-brands fa-github fa-2x"></i>
                </a>
                <a href="https://ja.stackoverflow.com/users/58624/s-inoue0108">
                    <i class="fa-brands fa-stack-overflow fa-2x"></i>
                </a>
            </div>
        </div> 
    </footer>
</template>

<script setup>

const props = defineProps({
    path: {
        type: String,
        default: '/',
    }
});

const date = new Date(); 
const year = date.getFullYear();

</script>
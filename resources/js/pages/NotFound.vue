<template>
    <div class="relative w-screen h-screen bg-yellow-400">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="flex flex-col items-center gap-12">

                <div class="flex flex-col gap-4 lg:hidden">
                    <h1 class="text-5xl text-center text-navy-blue font-bold tracking-wider">404</h1>
                    <div class="border-2 border-navy-blue rounded"></div>
                    <h1 class="text-3xl text-center text-navy-blue font-bold tracking-wider">NOT FOUND</h1>
                </div>

                <div class="hidden lg:block">
                    <div class="flex justify-center gap-8">
                        <h1 class="text-6xl text-center text-navy-blue font-bold tracking-wider">404</h1>
                        <div class="border-2 border-navy-blue rounded"></div>
                        <h1 class="text-6xl text-center text-navy-blue font-bold tracking-wider">NOT FOUND</h1>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row">
                    <p class="text-center text-navy-blue text-lg lg:text-2xl whitespace-nowrap">
                        <span v-text="count"></span>
                        秒後にHOMEへリダイレクトします．
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/* router */
const router = useRouter();

/* 3秒後にHomeへリダイレクト*/
const count = ref(3);
setInterval(() => {
    count.value--
}, 1000);

setTimeout(() => {
    router.push({ name: 'Home' });
}, 3000);
</script>


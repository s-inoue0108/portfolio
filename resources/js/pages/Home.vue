<template>
    <div class="relative w-screen h-screen">
        <Header home="active" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
                <img src="/storage/icons/S.I.jpg" class="w-3/4 sm:w-1/2 h-auto"/>
                <div class="bg-yellow-300">
                    <div class="flex flex-col gap-4 lg:gap-8">
                        <div class="border-2 lg:border-4 border-navy-blue rounded"></div>
                        <h1 class="text-4xl md:text-6xl lg:text-8xl text-center text-navy-blue font-bold tracking-wider px-4">PORTFOLIO SITE</h1>
                        <div class="border-2 lg:border-4 border-navy-blue rounded"></div>
                    </div>
                </div>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
</script>


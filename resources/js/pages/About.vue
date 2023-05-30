<template>
    <div>
        <Header active="about" />
        <div class="w-screen">
            <div class="py-16">
                <div class="flex justify-center items-center gap-4 bg-yellow-300 py-2">
                    <div class="border-navy-blue bg-navy-blue w-4 lg:w-6 h-10 lg:h-14"></div>
                    <h1 class="text-navy-blue text-4xl lg:text-6xl text-center font-bold tracking-wider">ABOUT</h1>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="flex items-center justify-center gap-4">
                    <img src="/storage/icons/S.I.jpg" class="w-1/4 h-auto"/>
                    <div class="flex flex-col gap-2">
                        <h2 class="text-center text-4xl text-navy-blue font-bold tracking-wider">井上 翔太</h2>
                        <label class="text-center text-xl tracking-wider text-light-navy-blue font-semibold">Inoue Shota</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
</script>


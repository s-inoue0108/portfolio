<template>
    <div class="relative w-screen h-screen">
    <Header />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="flex flex-col items-center gap-12">
                <h1 class="text-3xl lg:text-5xl text-center text-navy-blue font-bold tracking-wide">NOT FOUND</h1>
                <p class="text-center text-navy-blue whitespace-nowrap">
                    お探しのページは存在しません．
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
</script>


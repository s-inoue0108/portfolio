<template>
    <div class="bg-navy-blue bg-opacity-30 px-6 lg:px-12 py-12 lg:py-24">

        <!--PC表示-->
        <div class="hidden lg:block">
            <div
                class="flex flex-row justify-around items-center gap-8 bg-yellow-400 border-[8px] border-navy-blue rounded-3xl p-8">

                <div class="flex flex-col items-center gap-16 w-1/2">
                    <!--ウインドウ画像（カルーセル）-->
                    <div class="mockup-size">
                        <div class="mockup-window bg-navy-blue border-4 border-navy-blue">
                            <Carousel :autoplay="5000" :wrap-around="true">
                                <Slide v-for="image in data.images" :key="image.id">
                                    <img :src="image.pcImage" class="object-cover h-full" />
                                </Slide>
                            </Carousel>
                        </div>
                    </div>
                    <div class="flex items-center gap-8 text-5xl text-center font-semibold">
                        <!--URL, GitHub-->
                        <a :href="data.url" target="_blank" rel="noopener noreferrer">
                            <button class="btn btn-lg btn-primary text-white normal-case" v-text="data.url"></button>
                        </a>
                        <a :href="data?.gitUrl" target="_blank" rel="noopener noreferrer">
                            <button class="btn btn-lg btn-primary text-white">
                                <p class="normal-case">GitHub</p>
                                <font-awesome-icon :icon="['fab', 'github']" class="ml-3 text-3xl" />
                            </button>
                        </a>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-16 w-1/2 text-navy-blue">
                    <div class="flex flex-col gap-12">
                        <div class="text-3xl lg:text-5xl text-center font-semibold">
                            <font-awesome-icon :icon="['fas', 'circle-check']" />
                            使用技術
                        </div>
                        <div class="flex flex-wrap justify-around items-center gap-8">
                            <div v-for="lang in data.langs" :key="lang.id" class="w-[30%] flex justify-center">
                                <img :src="lang.path" :class="lang.modify" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-12">
                        <div class="text-3xl lg:text-5xl text-center font-semibold">
                            <font-awesome-icon :icon="['fas', 'circle-check']" />
                            アピールポイント
                        </div>
                        <p class="text-lg lg:text-xl" v-text="data.appealPoint"></p>
                    </div>
                </div>

            </div>
        </div>

        <!--モバイル表示-->
        <div class="lg:hidden">
            <div class="flex flex-col items-center gap-8 bg-yellow-400 border-4 border-navy-blue rounded-3xl p-4">

                <!--モバイル画像（カルーセル）-->
                <div class="lg:hidden p-4 mockup-size">
                    <div class="mockup-phone border-navy-blue">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="bg-navy-blue bg-opacity-50 artboard artboard-demo phone-1">
                                <Carousel :autoplay="5000" :wrap-around="true">
                                    <Slide v-for="image in data.images" :key="image.id">
                                        <img :src="image.mobileImage" class="object-cover h-full" />
                                    </Slide>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-4 text-lg text-center font-semibold">
                    <a :href="data.url" target="_blank" rel="noopener noreferrer">
                        <button class="btn btn-primary text-white normal-case" v-text="data.url"></button>
                    </a>
                    <a :href="data?.gitUrl" target="_blank" rel="noopener noreferrer">
                        <button class="btn btn-primary text-white">
                            <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
                        </button>
                    </a>
                </div>

                <div class="border border-navy-blue rounded w-full"></div>

                <div class="flex flex-col gap-4 text-navy-blue">
                    <div class="text-2xl text-center font-semibold">
                        <font-awesome-icon :icon="['fas', 'circle-check']" />
                        使用技術
                    </div>
                    <div class="flex flex-wrap justify-around items-center gap-8">
                        <div v-for="lang in data.langs" :key="lang.id" class="w-[35%] flex justify-center">
                            <img :src="lang.path" :class="lang.modify" />
                        </div>
                    </div>
                </div>

                <div class="border border-navy-blue rounded w-full"></div>

                <div class="flex flex-col gap-4 text-navy-blue">
                    <div class="text-2xl text-center font-semibold">
                        <font-awesome-icon :icon="['fas', 'circle-check']" />
                        アピールポイント
                    </div>
                    <Collapse :detailText="data.appealPoint" />
                </div>

            </div>
        </div>

    </div>
</template>



<script setup>
import Collapse from '../Collapse.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

/* props */
const props = defineProps({
    data: {
        type: Object,
    }
});
</script>



<style scoped>
.mockup-size {
    zoom: 60%;
}

@media screen and (min-width: 768px) {
    .mockup-size {
        zoom: 80%;
    }
}

@media screen and (min-width: 1024px) {
    .mockup-size {
        zoom: 100%;
    }
}
</style>
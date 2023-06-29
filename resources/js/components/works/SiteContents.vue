<template>
    <div class="bg-navy-blue bg-opacity-30 px-6 lg:px-12 py-24">
        <div
            class="flex flex-col justify-center items-center gap-8 bg-yellow-400 border-4 md:border-[8px] border-navy-blue rounded-3xl p-8">

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

            <!--ウインドウ画像（カルーセル）-->
            <div class="hidden lg:block p-4 mockup-size w-1/2">
                <div class="mockup-window bg-navy-blue border-4 border-navy-blue">
                    <Carousel :autoplay="5000" :wrap-around="true">
                        <Slide v-for="image in data.images" :key="image.id">
                            <img :src="image.pcImage" class="object-cover h-full" />
                        </Slide>
                    </Carousel>
                </div>
            </div>

            <!--基本情報（PC）-->
            <div class="hidden md:block w-1/2">
                <div class="text-navy-blue text-xl lg:text-3xl">

                    <div class="flex flex-col items-center gap-16 lg:gap-24">
                        <div class="flex flex-col gap-8">
                            <div class="text-3xl lg:text-5xl text-center font-semibold">サイトURL</div>
                            <div>
                                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="mr-2" />
                                <a :href="data.url" class="link link-hover" target="_blank" rel="noopener noreferrer"
                                    v-text="data.url"></a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-8">
                            <div class="text-3xl lg:text-5xl text-center font-semibold">使用技術</div>
                            <div class="flex flex-wrap justify-around items-center gap-8">
                                <div v-for="lang in data.langs" :key="lang.id" class="w-[30%] flex justify-center">
                                    <img :src="lang.path" :class="lang.modify" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-8">
                            <div class="text-3xl lg:text-5xl text-center font-semibold">アピールポイント</div>
                            <p class="text-lg lg:text-xl" v-text="data.appealPoint"></p>
                        </div>
                    </div>
                </div>
            </div>

            <!--基本情報（モバイル）-->
            <div class="md:hidden">
                <div class="flex flex-col items-center gap-8 text-navy-blue text-lg">

                    <div class="border border-navy-blue rounded w-full"></div>

                    <div class="flex flex-col gap-4">
                        <div class="text-2xl text-center font-semibold">サイトURL</div>
                        <div>
                            <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="mr-2" />
                            <a :href="data.url" class="link link-hover" target="_blank" rel="noopener noreferrer"
                                v-text="data.url"></a>
                        </div>
                    </div>

                    <div class="border border-navy-blue rounded w-full"></div>

                    <div class="flex flex-col gap-4">
                        <div class="text-2xl text-center font-semibold">使用技術</div>
                        <div class="flex flex-wrap justify-around items-center gap-8">
                            <div v-for="lang in data.langs" :key="lang.id" class="w-[35%] flex justify-center">
                                <img :src="lang.path" :class="lang.modify" />
                            </div>
                        </div>
                    </div>

                    <div class="border border-navy-blue rounded w-full"></div>

                    <div class="flex flex-col gap-4">
                        <div class="text-2xl text-center font-semibold">アピールポイント</div>
                        <p class="text-base" v-text="data.appealPoint"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

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
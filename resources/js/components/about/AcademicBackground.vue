<template>
    <!--学歴（PC表示）-->
    <div class="hidden lg:block py-24 bg-navy-blue bg-opacity-30">
        <div class="flex justify-center">

            <div class="flex flex-col gap-6 px-16">

                <!--wrap-1-->
                <div class="flex items-center gap-16">
                    <div class="hex w-[240px] bg-navy-blue relative">
                        <div
                            class="hex w-[192px] bg-yellow-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div class="flex flex-col text-navy-blue text-2xl text-center font-semibold">
                                    <p class="text-3xl mb-4">中学校</p>
                                    <p>2015</p>
                                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                    <p>2018</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col gap-3 w-3/4 bg-yellow-400 border-[8px] border-navy-blue rounded-2xl px-8 py-6">
                        <label class="text-navy-blue text-xl">国立</label>
                        <p class="text-navy-blue text-3xl text-center">東京大学教育学部附属中等教育学校 前期課程</p>

                        <label class="text-navy-blue flex flex-row-reverse">
                            <div class="flex items-center gap-1 p-1 font-semibold border border-navy-blue rounded">
                                <button @click="toggleCollapse1" v-text="collapseBtnMes1"></button>
                                <font-awesome-icon :icon="['fes', chevron1]" />
                            </div>
                        </label>
                        <div class="flex justify-center"
                            :class="[collapseActive1 === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
                            <p class="text-navy-blue text-lg" v-text="secondarySchoolText"></p>
                        </div>
                    </div>
                </div>

                <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-center text-yellow-400 text-8xl" />

                <!--wrap-2-->
                <div class="flex items-center gap-16">
                    <div class="hex w-[240px] bg-navy-blue relative">
                        <div
                            class="hex w-[192px] bg-yellow-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div class="flex flex-col text-navy-blue text-2xl text-center font-semibold">
                                    <p class="text-3xl mb-4">高校</p>
                                    <p>2018</p>
                                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                    <p>2021</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col gap-3 w-3/4 bg-yellow-400 border-[8px] border-navy-blue rounded-2xl px-8 py-6">
                        <label class="text-navy-blue text-xl">国立</label>
                        <p class="text-navy-blue text-3xl text-center">東京大学教育学部附属中等教育学校 後期課程</p>

                        <label class="text-navy-blue flex flex-row-reverse">
                            <div class="flex items-center gap-1 p-1 font-semibold border border-navy-blue rounded">
                                <button @click="toggleCollapse2" v-text="collapseBtnMes2"></button>
                                <font-awesome-icon :icon="['fes', chevron2]" />
                            </div>
                        </label>
                        <div class="flex justify-center"
                            :class="[collapseActive2 === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
                            <p class="text-navy-blue text-lg" v-text="highSchoolText"></p>
                        </div>
                    </div>
                </div>

                <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-center text-yellow-400 text-8xl" />

                <!--wrap-3-->
                <div class="flex items-center gap-16">
                    <div class="hex w-[240px] bg-navy-blue relative">
                        <div
                            class="hex w-[192px] bg-yellow-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div class="flex flex-col text-navy-blue text-2xl text-center font-semibold">
                                    <p class="text-3xl mb-4">大学</p>
                                    <p>2021</p>
                                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                    <p>現在</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col gap-3 w-3/4 bg-yellow-400 border-[8px] border-navy-blue rounded-2xl px-8 py-6">
                        <label class="text-navy-blue text-xl">私立</label>
                        <p class="text-navy-blue text-3xl text-center">北里大学 理学部 化学科</p>

                        <label class="text-navy-blue flex flex-row-reverse">
                            <div class="flex items-center gap-1 p-1 font-semibold border border-navy-blue rounded">
                                <button @click="toggleCollapse3" v-text="collapseBtnMes3"></button>
                                <font-awesome-icon :icon="['fes', chevron3]" />
                            </div>
                        </label>
                        <div class="flex justify-center"
                            :class="[collapseActive3 === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
                            <p class="text-navy-blue text-lg" v-text="universityText"></p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <!--学歴（モバイル表示）-->
    <div class="flex justify-center px-6 py-24 lg:hidden bg-navy-blue bg-opacity-30">
        <div class="flex flex-col gap-6">

            <!--wrap-1-->
            <div class="flex flex-col gap-3 bg-yellow-400 border-4 border-navy-blue rounded-2xl px-2 pt-4">
                <div class="flex justify-between items-center">
                    <label class="text-navy-blue">国立</label>
                    <label class="text-navy-blue text-right">2015-2018</label>
                </div>
                <p class="text-navy-blue text-xl">東京大学教育学部附属中等教育学校 前期課程</p>
                <label class="text-navy-blue text-sm flex flex-row-reverse">
                    <div class="flex items-center gap-1 p-1 font-semibold border border-navy-blue rounded">
                        <button @click="toggleCollapse1" v-text="collapseBtnMes1"></button>
                        <font-awesome-icon :icon="['fes', chevron1]" />
                    </div>
                </label>
                <div class="flex justify-center"
                    :class="[collapseActive1 === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
                    <p class="text-navy-blue p-2" v-text="secondarySchoolText"></p>
                </div>
            </div>

            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-center text-yellow-400 text-5xl" />

            <!--wrap-2-->
            <div class="flex flex-col gap-3 bg-yellow-400 border-4 border-navy-blue rounded-2xl px-2 pt-4">
                <div class="flex justify-between items-center">
                    <label class="text-navy-blue">国立</label>
                    <label class="text-navy-blue text-right">2018-2021</label>
                </div>
                <p class="text-navy-blue text-xl">東京大学教育学部附属中等教育学校 後期課程</p>
                <label class="text-navy-blue text-sm flex flex-row-reverse">
                    <div class="flex items-center gap-1 p-1 font-semibold border border-navy-blue rounded">
                        <button @click="toggleCollapse2" v-text="collapseBtnMes2"></button>
                        <font-awesome-icon :icon="['fes', chevron2]" />
                    </div>
                </label>
                <div class="flex justify-center"
                    :class="[collapseActive2 === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
                    <p class="text-navy-blue p-2" v-text="highSchoolText"></p>
                </div>
            </div>

            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-center text-yellow-400 text-5xl" />

            <!--wrap-3-->
            <div class="flex flex-col gap-3 bg-yellow-400 border-4 border-navy-blue rounded-2xl px-2 pt-4">
                <div class="flex justify-between items-center">
                    <label class="text-navy-blue">私立</label>
                    <label class="text-navy-blue text-right">2021-現在</label>
                </div>
                <p class="text-navy-blue text-xl">北里大学 理学部 化学科</p>
                <label class="text-navy-blue text-sm flex flex-row-reverse">
                    <div class="flex items-center gap-1 p-1 font-semibold border border-navy-blue rounded">
                        <button @click="toggleCollapse3" v-text="collapseBtnMes3"></button>
                        <font-awesome-icon :icon="['fes', chevron3]" />
                    </div>
                </label>
                <div class="flex justify-center"
                    :class="[collapseActive3 === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
                    <p class="text-navy-blue p-2" v-text="universityText"></p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

/* collapse */
const collapseActive1 = ref(false);
const collapseActive2 = ref(false);
const collapseActive3 = ref(false);

const collapseBtnMes1 = ref('詳細を見る');
const collapseBtnMes2 = ref('詳細を見る');
const collapseBtnMes3 = ref('詳細を見る');

const chevron1 = ref('chevron-down');
const chevron2 = ref('chevron-down');
const chevron3 = ref('chevron-down');

/* collapseをopen/close */
const toggleCollapse1 = () => {
    if (collapseBtnMes1.value === '詳細を見る') {
        collapseBtnMes1.value = '閉じる';
        chevron1.value = 'chevron-up';
    } else {
        collapseBtnMes1.value = '詳細を見る';
        chevron1.value = 'chevron-down';
    }
    collapseActive1.value = !collapseActive1.value
}

const toggleCollapse2 = () => {
    if (collapseBtnMes2.value === '詳細を見る') {
        collapseBtnMes2.value = '閉じる';
        chevron2.value = 'chevron-up';
    } else {
        collapseBtnMes2.value = '詳細を見る';
        chevron2.value = 'chevron-down';
    }
    collapseActive2.value = !collapseActive2.value
}

const toggleCollapse3 = () => {
    if (collapseBtnMes3.value === '詳細を見る') {
        collapseBtnMes3.value = '閉じる';
        chevron3.value = 'chevron-up';
    } else {
        collapseBtnMes3.value = '詳細を見る';
        chevron3.value = 'chevron-down';
    }
    collapseActive3.value = !collapseActive3.value
}


/* 紹介文 */

const secondarySchoolText = '中学受験をして入学しました．天文部に所属し，星座の観察などを行っていました．';
const highSchoolText = '有機化学が好きで，化学の勉強などをしていました．';
const universityText = '大学の講義がきっかけでプログラミングに興味をもち，Pythonで計算やグラフの作成などを行っていました．Webプログラミングの勉強は3年生で始めました．';

</script>



<style scoped>
.collapse-open {
    animation: .6s ease-in-out collapse-open;
}

@keyframes collapse-open {
    0% {
        max-height: 0;
        opacity: 0;
    }

    100% {
        max-height: 999px;
        opacity: 1;
    }
}

.collapse-close {
    animation: .6s ease-in-out collapse-close;
}

@keyframes collapse-close {
    0% {
        max-height: 999px;
        opacity: 1;
    }

    100% {
        max-height: 0;
        opacity: 0;
    }
}

.opening {
    animation: .6s ease-in-out rotate-pi;
}

@keyframes rotate-pi {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(180deg);
    }
}
</style>
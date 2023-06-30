<template>
    <div class="px-6 lg:px-16 py-12 lg:py-24 bg-navy-blue bg-opacity-30">
        <div class="flex justify-center">
            <div class="flex flex-col gap-6">
                <AcademicBackgroundContents :data="secondarySchoolData" />
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-center text-yellow-400 text-5xl lg:text-8xl" />
                <AcademicBackgroundContents :data="highSchoolData" />
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-center text-yellow-400 text-5xl lg:text-8xl" />
                <AcademicBackgroundContents :data="universityData" />
            </div>
        </div>
    </div>
</template>

<script setup>
import AcademicBackgroundContents from './AcademicBackgroundContents.vue';

/* 中学校 */
const secondarySchoolData = {
    schoolClass: '中学校',
    schoolOrg: '国立',
    schoolName: '東京大学教育学部附属中等教育学校 前期課程',
    enterYear: '2015',
    graduateYear: '2018',
    detailText: secondarySchoolText,
};

/* 高校 */
const highSchoolData = {
    schoolClass: '高校',
    schoolOrg: '国立',
    schoolName: '東京大学教育学部附属中等教育学校 後期課程',
    enterYear: '2018',
    graduateYear: '2021',
    detailText: highSchoolText,
};

/* 大学 */
const universityData = {
    schoolClass: '大学',
    schoolOrg: '私立',
    schoolName: '北里大学 理学部 化学科',
    enterYear: '2021',
    graduateYear: '現在',
    detailText: universityText,
};

/* 紹介文 */
const secondarySchoolText = '中学受験をして入学しました．天文部に所属し，星座の観察などを行っていました．';
const highSchoolText = '有機化学が好きで，化学の勉強などをしていました．';
const universityText = '大学の講義がきっかけでプログラミングに興味をもち，Pythonで計算やグラフの作成などを行っていました．Webプログラミングの勉強は3年生で始めました．';

</script>
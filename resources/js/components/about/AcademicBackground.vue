<template>
    <div class="px-2 lg:px-16 py-12 lg:py-24 bg-navy-blue bg-opacity-30">
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
    schoolName: '<a href="https://www.hs.p.u-tokyo.ac.jp" class="external-link" target="_blank" rel="noopener noreferrer">東京大学教育学部附属中等教育学校</a> 前期課程',
    enterYear: '2015',
    graduateYear: '2018',
};

/* 高校 */
const highSchoolData = {
    schoolClass: '高校',
    schoolOrg: '国立',
    schoolName: '<a href="https://www.hs.p.u-tokyo.ac.jp" class="external-link" target="_blank" rel="noopener noreferrer">東京大学教育学部附属中等教育学校</a> 後期課程',
    enterYear: '2018',
    graduateYear: '2021',
};

/* 大学 */
const universityData = {
    schoolClass: '大学',
    schoolOrg: '私立',
    schoolName: '<a href="https://www.kitasato-u.ac.jp/jp/index.html" class="external-link" target="_blank" rel="noopener noreferrer">北里大学</a> 理学部 化学科',
    enterYear: '2021',
    graduateYear: '現在',
};
</script>
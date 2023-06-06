<template>
    <div>
        <div class="w-screen">
            <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
                <Header active="about" />
            </div>
            <div class="flex flex-col items-center gap-8">
                <PageTitle titleLeft="AB" titleRight="UT" />
                <router-link to="/about#AcademicBackground">
                    <button class="btn btn-square btn-primary btn-outline">
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </router-link>
            </div>

            <!--名前-->
            <div class="flex justify-center py-16">
                <div class="flex items-center justify-center gap-4">
                    <img src="/storage/icons/S.I.jpg" class="w-1/4 h-auto"/>
                    <div class="flex flex-col gap-2">
                        <h2 class="text-center text-4xl text-navy-blue font-bold tracking-wider">井上 翔太</h2>
                        <label class="text-center text-xl tracking-wider text-light-navy-blue font-semibold">Inoue Shota</label>
                    </div>
                </div>
            </div>

            <!--学歴-->
            <SubTitle subTitle="学歴" iconTag='<i class="fa-solid fa-school"></i>' id="AcademicBackground"/>

            <AcademicBackground />

            <!--スキル-->
            <SubTitle subTitle="スキル" iconTag='<i class="fa-solid fa-laptop-code"></i>' />

        </div>
        <Footer :path="path" />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import PageTitle from '../components/PageTitle.vue';
import SubTitle from '../components/SubTitle.vue';
import AcademicBackground from '../components/AcademicBackground.vue';

import { ref } from 'vue';
import { useRoute } from 'vue-router';

const path = ref(useRoute().path).value;
</script>


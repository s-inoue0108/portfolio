<template>
    <div>
        <div>

            <!--ヘッダー-->
            <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
                <Header :path="path" />
            </div>

            <!--サイドバー-->
            <Sidebar :path="path" :sidebarActive="sidebarActive" @closeSidebar="closeSidebar" />

            <!--ページタイトル-->
            <PageTitle titleLeft="AB" titleRight="UT" />

            <!--インナーリンク-->
            <div class="flex justify-center gap-4 lg:gap-8 px-6 py-12">
                <router-link to="/about#Profile">
                    <button class="btn btn-primary btn-outline lg:btn-lg bg-yellow-300 text-xs w-[6rem] lg:w-[12rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>プロフィール
                     </button>
                </router-link>
                <router-link to="/about#AcademicBackground">
                    <button class="btn btn-primary btn-outline lg:btn-lg bg-yellow-300 text-xs w-[6rem] lg:w-[12rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>学歴
                    </button>
                </router-link>
                <router-link to="/about#CodingSkill">
                    <button class="btn btn-primary btn-outline lg:btn-lg bg-yellow-300 text-xs w-[6rem] lg:w-[12rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>スキル
                    </button>
                </router-link>
            </div>

            <!--プロフィール-->
            <div id="Profile">
                <SubTitle subTitle="プロフィール" iconTag='<i class="fa-solid fa-user"></i>' />

                <div class="flex justify-center py-16">
                    <div class="flex items-center justify-center gap-4">
                        <img src="/storage/icons/S.I.jpg" class="w-1/4 h-auto"/>
                        <div class="flex flex-col gap-2">
                            <h2 class="text-center text-4xl text-navy-blue font-bold tracking-wider">井上 翔太</h2>
                            <label class="text-center text-xl tracking-wider text-light-navy-blue font-semibold">Inoue Shota</label>
                        </div>
                    </div>
                </div>
            </div>


            <!--学歴-->
            <div id="AcademicBackground">
                <SubTitle subTitle="学歴" iconTag='<i class="fa-solid fa-school"></i>' />
                <AcademicBackground />
            </div>

            <!--スキル-->
            <div id="CodingSkill">
                <SubTitle subTitle="スキル" iconTag='<i class="fa-solid fa-laptop-code"></i>'/>
                <CodingSkill />
            </div>

        </div>
        <!--フッター-->
        <Footer :path="path" @openSidebar="openSidebar" />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Sidebar from '../components/Sidebar.vue';
import PageTitle from '../components/PageTitle.vue';
import SubTitle from '../components/SubTitle.vue';
import AcademicBackground from '../components/AcademicBackground.vue';
import CodingSkill from '../components/CodingSkill.vue';

import { ref } from 'vue';
import { useRoute } from 'vue-router';

/* 現在のパス */
const path = ref(useRoute().path).value;

/* emitされたサイドバー開閉の処理 */
const sidebarActive = ref(false);

const openSidebar = () => {
    sidebarActive.value = true;
}

const closeSidebar = () => {
    sidebarActive.value = false;
}
</script>





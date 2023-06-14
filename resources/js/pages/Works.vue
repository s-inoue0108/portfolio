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
            <PageTitle titleLeft="W" titleRight="RKS" />

            <!--インナーリンク-->
            <div class="flex justify-center gap-4 lg:gap-8 px-6 py-12">
                <router-link to="/works#BlogSite">
                    <button class="btn btn-primary btn-outline lg:btn-lg bg-yellow-300 text-xs w-[7rem] lg:w-[14rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>ブログサイト
                     </button>
                </router-link>
                <router-link to="/works#QuizApp">
                    <button class="btn btn-primary btn-outline lg:btn-lg bg-yellow-300 text-xs w-[7rem] lg:w-[14rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>クイズアプリ
                    </button>
                </router-link>
                <router-link to="/works#Portfolio">
                    <button class="btn btn-primary btn-outline lg:btn-lg bg-yellow-300 text-xs w-[7rem] lg:w-[14rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>ポートフォリオ
                    </button>
                </router-link>
            </div>

            <!--ブログサイト-->
            <div id="BlogSite">
                <SubTitle subTitle="ブログサイト" iconTag='<i class="fa-solid fa-pen-nib"></i>' />
            </div>

            <!--クイズアプリ-->
            <div id="QuizApp">
                <SubTitle subTitle="クイズアプリ" iconTag='<i class="fa-solid fa-q"></i>' />
            </div>

            <!--ポートフォリオ-->
            <div id="Portfolio">
                <SubTitle subTitle="ポートフォリオ" iconTag='<i class="fa-solid fa-globe"></i>' />
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




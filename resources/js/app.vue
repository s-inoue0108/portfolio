<template>
    <div class="w-screen bg-navy-blue">

        <!--サイドバー-->
        <div class="fixed top-0 left-0 z-50">
            <Sidebar :currentPath="currentPath" :sidebarActive="sidebarActive" @toggleSidebar="toggleSidebar" />
        </div>

        <!--ヘッダー-->
        <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-40">
            <Header :currentPath="currentPath" :sidebarActive="sidebarActive" @toggleSidebar="toggleSidebar" :img="img" :imgChanging="imgChanging"
                @changeImg="changeImg" />
        </div>

        <!--背景-->
        <div class="fixed top-0 left-0" :class="{ 'fade-out-in': imgChanging }">
            <img :src=img.path class="w-screen h-screen object-cover" />
        </div>

        <!--ぺージコンポーネントを差し込み-->
        <router-view @receivePath="receivePath" />

        <!--フッター-->
        <div class="z-30"
            :class="[currentPath === '/' ? ['fixed', 'bottom-0', 'left-1/2', '-translate-x-1/2', 'w-full'] : ['relative']]">
            <Footer :currentPath="currentPath" :sidebarActive="sidebarActive" @toggleSidebar="toggleSidebar" />
        </div>

    </div>
</template>



<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
import { ref } from 'vue';

/* Header/Footerからemitされたサイドバー開閉の処理 */
const sidebarActive = ref(false);

const toggleSidebar = () => {
    sidebarActive.value = !sidebarActive.value;
}

/* 各ページからemitされた現在のパスを取得し，propするリアクティブデータを定義 */
const currentPath = ref('');

const receivePath = (receivedPath) => {
    currentPath.value = receivedPath;
}

/* 背景画像リスト */
const imgList = [
    { name: "東京都心", path: "/storage/images/TokyoNightScape.jpeg" },
    { name: "お台場", path: "/storage/images/RaimbowBridge.jpeg" },
    { name: "清水寺", path: "/storage/images/KiyomizuTemple.jpeg" },
    { name: "大阪市街", path: "/storage/images/OsakaNightScape.jpeg" },
];

/* 背景画像を選定 */
const selectImg = () => {
    return imgList[Math.floor(Math.random() * imgList.length)]
}
const img = ref(selectImg());

/* 背景画像の変更 */
const imgChanging = ref(false);

const changeImg = () => {
    imgChanging.value = true;

    setTimeout(() => {
        img.value = selectImg();
    }, 500);

    setTimeout(() => {
        imgChanging.value = false;
    }, 1000);
}
</script>



<style scoped>
.fade-out-in {
    animation: 1.0s ease-in-out fade-out-in;
}

@keyframes fade-out-in {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
<template>
    <div>

        <!--WORKS-->
        <div>
            <!--ページトップリンク-->
            <transition name="fade">
                <div v-if="pageTopLinkActive">
                    <div
                        class="fixed bottom-10 md:bottom-20 right-0 bg-gray-400 bg-opacity-50 rounded-l-lg md:rounded-l-xl p-2 z-40">
                        <router-link :to="currentPath">
                            <button class="btn lg:btn-lg btn-circle btn-primary text-white">
                                <font-awesome-icon :icon="['fas', 'chevron-up']" />
                            </button>
                        </router-link>
                    </div>
                </div>
            </transition>

            <!--ページタイトル-->
            <PageTitle titleLeft="W" titleRight="RKS" :currentPath="currentPath" :links="links" />

            <!--ブログサイト-->
            <div id="BlogSite" class="relative z-30">
                <SubTitle subTitle="ブログサイト" iconTag='pen-nib' />
                <SiteContents :data="brogSiteData" />
            </div>

            <!--クイズアプリ-->
            <div id="QuizApp" class="relative z-30">
                <SubTitle subTitle="クイズアプリ" iconTag='q' />
                <SiteContents :data="quizAppData" />
            </div>

            <!--ポートフォリオ-->
            <div id="Portfolio" class="relative z-30">
                <SubTitle subTitle="ポートフォリオ" iconTag='globe' />
                <SiteContents :data="portfolioData" />
            </div>

        </div>
    </div>
</template>

<script setup>
import PageTitle from '../components/PageTitle.vue';
import SubTitle from '../components/SubTitle.vue';
import SiteContents from '../components/works/SiteContents.vue';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

/* emit */
const emit = defineEmits(['receivePath']);

/* 現在のパスをapp.vueへemit */
const currentPath = useRoute().path;

const emitPath = () => {
    emit('receivePath', currentPath);
}

emitPath();

/* ページトップリンクの表示 */
const pageTopLinkActive = ref(false);

onMounted(() => {
    window.addEventListener('scroll', pageTopLinkFade);
});

const pageTopLinkFade = () => {
    const scrollNow = window.scrollY;
    const scrollMax = document.documentElement.scrollHeight;
    const clientMax = document.documentElement.clientHeight;
    const breakPoint = clientMax / 4;

    if (scrollNow > breakPoint && (scrollMax - clientMax - scrollNow) > breakPoint) {
        pageTopLinkActive.value = true;
    } else {
        pageTopLinkActive.value = false;
    }
}

/* ページ内リンク用の配列をprop */
const links = [
    { id: 1, hash: '#BlogSite', hashTitle: 'ブログサイト' },
    { id: 2, hash: '#QuizApp', hashTitle: 'クイズアプリ' },
    { id: 3, hash: '#Portfolio', hashTitle: 'ポートフォリオ' },
];

/* ブログサイト */

const brogSiteUrl = 'https://si-library.net';

const brogSiteLangs = [
    { id: 1, path: '/storage/images/HTML5.svg.png', modify: 'h-20 md:h-32 lg:h-44' },
    { id: 2, path: '/storage/images/CSS3.svg.png', modify: 'h-20 md:h-32 lg:h-44' },
    { id: 3, path: '/storage/images/JQuery-Logo.svg.png' },
];

const brogSiteImages = [
    { id: 1, pcImage: '/storage/images/library-1.png', mobileImage: '/storage/images/library-mb1.png' },
    { id: 2, pcImage: '/storage/images/library-2.png', mobileImage: '/storage/images/library-mb2.png' },
    { id: 3, pcImage: '/storage/images/library-3.png', mobileImage: '/storage/images/library-mb3.png' },
];

const brogSiteAppealPoint = '';

const brogSiteData = {
    url: brogSiteUrl,
    langs: brogSiteLangs,
    images: brogSiteImages,
    appealPoint: brogSiteAppealPoint,
};

/* クイズアプリ */

const quizAppUrl = 'https://imaze-app.com';

const quizAppLangs = [
    { id: 1, path: '/storage/images/HTML5.svg.png' },
    { id: 2, path: '/storage/images/tailwind-css-1.svg' },
    { id: 3, path: '/storage/images/JQuery-Logo.svg.png' },
    { id: 4, path: '/storage/images/Laravel2.svg.png' },
    { id: 5, path: '/storage/images/PhpMyAdmin_logo.png' },
];

const quizAppImages = [
    { id: 1, pcImage: '/storage/images/imaze-1.png', mobileImage: '/storage/images/KiyomizuTemple.jpeg' },
    { id: 2, pcImage: '/storage/images/imaze-2.png', mobileImage: '/storage/images/KiyomizuTemple.jpeg' },
    { id: 3, pcImage: '/storage/images/imaze-3.png', mobileImage: '/storage/images/KiyomizuTemple.jpeg' },
];

const quizAppAppealPoint = '';

const quizAppData = {
    url: quizAppUrl,
    langs: quizAppLangs,
    images: quizAppImages,
    appealPoint: quizAppAppealPoint,
};

/* ポートフォリオ */

const portfolioUrl = 'https://si-portfolio.site';

const portfolioLangs = [
    { id: 1, path: '/storage/images/HTML5.svg.png' },
    { id: 2, path: '/storage/images/tailwind-css-1.svg' },
    { id: 3, path: '/storage/images/Vue.svg.png' },
    { id: 4, path: '/storage/images/Laravel2.svg.png' },
    { id: 5, path: '/storage/images/PhpMyAdmin_logo.png' },
];

const portfolioImages = [
    { id: 1, pcImage: '/storage/images/TokyoNightScape.jpeg', mobileImage: '/storage/images/KiyomizuTemple.jpeg' },
    { id: 2, pcImage: '/storage/images/OsakaNightScape.jpeg', mobileImage: '/storage/images/KiyomizuTemple.jpeg' },
    { id: 3, pcImage: '/storage/images/KiyomizuTemple.jpeg', mobileImage: '/storage/images/KiyomizuTemple.jpeg' },
];

const portfolioAppealPoint = '';

const portfolioData = {
    url: portfolioUrl,
    langs: portfolioLangs,
    images: portfolioImages,
    appealPoint: portfolioAppealPoint,
};

</script>



<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s ease-in-out;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>




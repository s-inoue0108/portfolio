<template>
    <div>

        <!--WORKS-->
        <div>
            <!--ページトップリンク-->
            <transition name="fade">
                <div v-if="pageTopLinkActive">
                    <div class="fixed bottom-10 md:bottom-20 right-0 bg-gray-400 bg-opacity-30 p-2 md:pl-4 md:pr-8 md:py-4 z-40">
                        <router-link :to="currentPath">
                            <button class="btn btn-sm md:btn-md lg:btn-lg btn-circle btn-primary">
                                <i class="fa-solid fa-chevron-up"></i>
                            </button>
                        </router-link>
                    </div>
                </div>
            </transition>

            <!--ページタイトル-->
            <PageTitle titleLeft="W" titleRight="RKS" :currentPath="currentPath" :links="links" />

            <!--ブログサイト-->
            <div id="BlogSite">
                <SubTitle subTitle="ブログサイト" iconTag='<i class="fa-solid fa-pen-nib"></i>' />
                <BlogSite />
            </div>

            <!--クイズアプリ-->
            <div id="QuizApp">
                <SubTitle subTitle="クイズアプリ" iconTag='<i class="fa-solid fa-q"></i>' />
                <QuizApp />
            </div>

            <!--ポートフォリオ-->
            <div id="Portfolio">
                <SubTitle subTitle="ポートフォリオ" iconTag='<i class="fa-solid fa-globe"></i>' />
                <Portfolio />
            </div>

        </div>
    </div>
</template>

<script setup>
import PageTitle from '../components/PageTitle.vue';
import SubTitle from '../components/SubTitle.vue';
import BlogSite from '../components/works/BlogSite.vue';
import QuizApp from '../components/works/QuizApp.vue';
import Portfolio from '../components/works/Portfolio.vue';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

/* 現在のパスをapp.vueへemit */
const currentPath = useRoute().path;

const emit = defineEmits(['receivePath']);
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




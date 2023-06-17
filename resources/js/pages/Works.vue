<template>
    <div>

        <!--WORKS-->
        <div>
            <!--ページトップリンク-->
            <transition name="fade">
                <div v-if="pageTopLinkActive">
                    <div class="hidden lg:block fixed bottom-20 right-0 bg-gray-400 bg-opacity-30 pl-4 pr-8 py-4 z-40">
                        <router-link :to="currentPath">
                            <button class="btn lg:btn-lg btn-circle btn-primary">
                                <i class="fa-solid fa-chevron-up"></i>
                            </button>
                        </router-link>
                    </div>
                    <div class="lg:hidden fixed bottom-8 right-4 opacity-50">
                        <router-link :to="currentPath">
                            <button class="btn lg:btn-lg btn-circle btn-primary">
                                <i class="fa-solid fa-chevron-up"></i>
                            </button>
                        </router-link>
                    </div>
                </div>
            </transition>

            <!--ページタイトル-->
            <PageTitle titleLeft="W" titleRight="RKS" />

            <!--インナーリンク-->
            <div class="flex justify-center gap-4 lg:gap-8 px-6 py-12">
                <router-link to="/works#BlogSite">
                    <button class="btn btn-primary btn-outline lg:btn-lg text-xs w-[7rem] lg:w-[14rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>ブログサイト
                    </button>
                </router-link>
                <router-link to="/works#QuizApp">
                    <button class="btn btn-primary btn-outline lg:btn-lg text-xs w-[7rem] lg:w-[14rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>クイズアプリ
                    </button>
                </router-link>
                <router-link to="/works#Portfolio">
                    <button class="btn btn-primary btn-outline lg:btn-lg text-xs w-[7rem] lg:w-[14rem] p-0">
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
    </div>
</template>

<script setup>
import PageTitle from '../components/PageTitle.vue';
import SubTitle from '../components/SubTitle.vue';

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
    const scrollNow = ref(window.scrollY);
    const scrollMax = document.documentElement.scrollHeight;
    const clientMax = document.documentElement.clientHeight;
    
    if(scrollNow.value > 200 && (scrollMax-clientMax-scrollNow.value) > 200) {
        pageTopLinkActive.value = true;
    } else {
        pageTopLinkActive.value = false;
    }
}
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




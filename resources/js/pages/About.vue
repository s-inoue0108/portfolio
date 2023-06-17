<template>
    <div id="aboutHeight">
        <!--ABOUT-->
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
            <PageTitle titleLeft="AB" titleRight="UT" />

            <!--インナーリンク-->
            <div class="flex justify-center gap-4 lg:gap-8 px-6 py-12">
                <router-link to="/about#Profile">
                    <button class="btn btn-primary btn-outline lg:btn-lg text-xs w-[6rem] lg:w-[12rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>プロフィール
                    </button>
                </router-link>
                <router-link to="/about#AcademicBackground">
                    <button class="btn btn-primary btn-outline lg:btn-lg text-xs w-[6rem] lg:w-[12rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>学歴
                    </button>
                </router-link>
                <router-link to="/about#CodingSkill">
                    <button class="btn btn-primary btn-outline lg:btn-lg text-xs w-[6rem] lg:w-[12rem] p-0">
                        <i class="fa-solid fa-chevron-down mr-1"></i>スキル
                    </button>
                </router-link>
            </div>

            <!--プロフィール-->
            <div id="Profile">
                <SubTitle subTitle="プロフィール" iconTag='<i class="fa-solid fa-user"></i>' />

                <div class="flex justify-center py-16">
                    <div class="flex items-center justify-center gap-4">
                        <img src="/storage/icons/S.I.svg" class="w-1/4 h-auto" />
                        <div class="flex flex-col gap-2">
                            <h2 class="text-center text-4xl text-navy-blue font-bold tracking-wider">井上 翔太</h2>
                            <label class="text-center text-xl tracking-wider text-light-navy-blue font-semibold">Inoue
                                Shota</label>
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
                <SubTitle subTitle="スキル" iconTag='<i class="fa-solid fa-code"></i>' />
                <CodingSkill />
            </div>

        </div>
    </div>
</template>

<script setup>
import PageTitle from '../components/PageTitle.vue';
import SubTitle from '../components/SubTitle.vue';
import AcademicBackground from '../components/about/AcademicBackground.vue';
import CodingSkill from '../components/about/CodingSkill.vue';

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





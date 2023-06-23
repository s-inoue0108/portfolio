<template>
    <div id="aboutHeight">
        <!--ABOUT-->
        <div>
            <!--ページトップリンク-->
            <transition name="fade">
                <div v-if="pageTopLinkActive">
                    <div class="fixed bottom-10 md:bottom-20 right-0 bg-gray-400 bg-opacity-50 rounded-l-lg md:rounded-l-xl p-2 md:pl-4 md:pr-8 md:py-4 z-40">
                        <router-link :to="currentPath">
                            <button class="btn btn-sm md:btn-md lg:btn-lg btn-circle btn-primary text-white">
                                <font-awesome-icon :icon="['fas', 'chevron-up']" />
                            </button>
                        </router-link>
                    </div>
                </div>
            </transition>

            <!--ページタイトル-->
            <PageTitle titleLeft="AB" titleRight="UT" :currentPath="currentPath" :links="links" />

            <!--プロフィール-->
            <div id="Profile" class="relative z-30">
                <SubTitle subTitle="プロフィール" iconTag='user' />
                <Profile />
            </div>

            <!--学歴-->
            <div id="AcademicBackground" class="relative z-30">
                <SubTitle subTitle="学歴" iconTag='school' />
                <AcademicBackground />
            </div>

            <!--スキル-->
            <div id="CodingSkill" class="relative z-30">
                <SubTitle subTitle="スキル" iconTag='code' />
                <CodingSkill />
            </div>

        </div>
    </div>
</template>

<script setup>
import PageTitle from '../components/PageTitle.vue';
import SubTitle from '../components/SubTitle.vue';
import Profile from '../components/about/Profile.vue';
import AcademicBackground from '../components/about/AcademicBackground.vue';
import CodingSkill from '../components/about/CodingSkill.vue';

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
    { id: 1, hash: '#Profile', hashTitle: 'プロフィール' },
    { id: 2, hash: '#AcademicBackground', hashTitle: '学歴' },
    { id: 3, hash: '#CodingSkill', hashTitle: 'スキル' },
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





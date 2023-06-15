<template>
    <div>
        <div>

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
const currentPath = ref(useRoute().path).value;

const emit = defineEmits(['receivePath']);
const emitPath = () => {
    emit('receivePath', currentPath);
}

/* マウント時にパスをemit */
onMounted(() => {
    emitPath();
});

</script>




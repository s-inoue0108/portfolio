<template>
    <!--PC-->
    <div class="hidden lg:block">
        <div class="flex items-center gap-16">
            <div class="hex w-[240px] bg-navy-blue relative">
                <div class="hex w-[192px] bg-yellow-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div class="flex flex-col text-navy-blue text-2xl text-center font-semibold">
                            <p class="text-3xl mb-4" v-text="data.schoolClass"></p>
                            <p v-text="data.enterYear"></p>
                            <font-awesome-icon :icon="['fas', 'chevron-down']" />
                            <p v-text="data.graduateYear"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3 w-3/4 bg-yellow-400 border-[8px] border-navy-blue rounded-2xl px-8 py-6">
                <label class="text-navy-blue text-xl" v-text="data.schoolOrg"></label>
                <p class="text-navy-blue text-3xl text-center" v-text="data.schoolName"></p>

                <label class="text-navy-blue flex flex-row-reverse">
                    <div class="flex items-center gap-1 py-4 font-semibold link link-hover">
                        <button @click="toggleCollapse" v-text="collapseBtnMes"></button>
                        <font-awesome-icon :icon="['fes', chevron]" />
                    </div>
                </label>
                <div class="flex justify-center"
                    :class="[collapseActive === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
                    <p class="text-navy-blue text-lg" v-text="data.detailText"></p>
                </div>
            </div>
        </div>
    </div>

    <!--モバイル-->
    <div class="lg:hidden">
        <div class="flex flex-col gap-3 bg-yellow-400 border-4 border-navy-blue rounded-2xl px-2 pt-4">
            <div class="flex justify-between items-center">
                <label class="text-navy-blue">{{ data.schoolClass }}（{{ data.schoolOrg }}）</label>
                <label class="text-navy-blue text-right">{{ data.enterYear }}-{{ data.graduateYear }}</label>
            </div>
            <p class="text-navy-blue text-xl" v-text="data.schoolName"></p>
            <label class="text-navy-blue text-sm flex flex-row-reverse">
                <div class="flex items-center gap-1 py-2 font-semibold">
                    <button @click="toggleCollapse" v-text="collapseBtnMes"></button>
                    <font-awesome-icon :icon="['fes', chevron]" />
                </div>
            </label>
            <div class="flex justify-center"
                :class="[collapseActive === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
                <p class="text-navy-blue p-2" v-text="data.detailText"></p>
            </div>
        </div>
    </div>
</template>



<script setup>
import { ref } from 'vue';

/* props */
const props = defineProps({
    data: {
        type: Object,
    }
});

/* collapse */
const collapseActive = ref(false);
const collapseBtnMes = ref('詳細を見る');
const chevron = ref('chevron-down');

/* collapseをopen/close */
const toggleCollapse = () => {
    if (collapseBtnMes.value === '詳細を見る') {
        collapseBtnMes.value = '閉じる';
        chevron.value = 'chevron-up';
    } else {
        collapseBtnMes.value = '詳細を見る';
        chevron.value = 'chevron-down';
    }
    collapseActive.value = !collapseActive.value
}
</script>



<style scoped>
.collapse-open {
    animation: .6s ease-in-out collapse-open;
}

@keyframes collapse-open {
    0% {
        max-height: 0;
        opacity: 0;
    }

    100% {
        max-height: 999px;
        opacity: 1;
    }
}

.collapse-close {
    animation: .6s ease-in-out collapse-close;
}

@keyframes collapse-close {
    0% {
        max-height: 999px;
        opacity: 1;
    }

    100% {
        max-height: 0;
        opacity: 0;
    }
}

.opening {
    animation: .6s ease-in-out rotate-pi;
}

@keyframes rotate-pi {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(180deg);
    }
}
</style>
<template>
    <label class="text-navy-blue text-sm flex flex-row-reverse">
        <div class="flex items-center gap-1 py-2 font-semibold">
            <button @click="toggleCollapse" v-text="collapseBtnMes"></button>
            <font-awesome-icon :icon="['fes', chevron]" />
        </div>
    </label>
    <div class="flex justify-center"
        :class="[collapseActive === true ? ['collapse-open'] : ['collapse-close', 'overflow-y-hidden', 'max-h-0']]">
        <p class="text-navy-blue p-2" v-text="detailText"></p>
    </div>
</template>



<script setup>
import { ref } from 'vue';

/* props */
const props = defineProps({
    detailText: {
        type: String,
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
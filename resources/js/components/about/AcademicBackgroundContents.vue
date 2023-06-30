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
                <Collapse :detailText="data.detailText" />
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
            <Collapse :detailText="data.detailText" />
        </div>
    </div>
</template>



<script setup>
import Collapse from '../Collapse.vue';

/* props */
const props = defineProps({
    data: {
        type: Object,
    }
});
</script>
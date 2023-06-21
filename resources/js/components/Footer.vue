<template>
    <footer class="footer footer-center bg-navy-blue py-4"
        :class="[currentPath === '/' ? ['bg-opacity-80'] : []]">
        <div class="flex justify-around items-center w-full">

            <!--GitHub-->
            <a href="https://github.com/s-inoue0108" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-sm lg:btn-md btn-neutral btn-outline normal-case">
                    <div class="flex items-center gap-2">
                        <p class="hidden md:block">GitHub</p>
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </div>
                </button>
            </a>

            <!--Copyright-->
            <p class="text-white lg:text-lg tracking-wide">&copy; <span v-text="year" class="pr-2"></span>Shota Inoue</p>

            <!--サイドバー開閉ボタン-->
            <button class="btn btn-sm lg:btn-md btn-outline btn-neutral w-10 md:w-24" @click="emitSidebar">
                <div class="flex items-center gap-2">
                    <font-awesome-icon :icon="['fas', iconTag]" />
                    <p class="hidden md:block">MENU</p>
                </div>
            </button>
        </div>
    </footer>
</template>

<script setup>
import { ref, watch } from 'vue';

/* props */
const props = defineProps({
    currentPath: {
        type: String,
    },
    sidebarActive: {
        type: Boolean,
    },
});

/* emit */
const emit = defineEmits(['toggleSidebar']);

/* サイドバーをemitして開閉 */
const emitSidebar = () => {
    emit('toggleSidebar');
}

/* ボタンアイコンの変更 */
const iconTag = ref('bars');

watch(() => props.sidebarActive, (newVal) => {
    if(newVal === true) {
        iconTag.value = 'xmark';
    } else {
        iconTag.value = 'bars';
    }
});

/* Year */
const date = new Date();
const year = date.getFullYear();

</script>
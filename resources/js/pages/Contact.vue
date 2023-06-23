<template>
    <!--CONTACT-->
    <div>
        <!--メール送信時のLOADING-->
        <div v-if="loadingActive" class="relative">
            <div class="fixed w-screen h-screen bg-neutral bg-opacity-80 z-[100]">
                <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div class="flex flex-col gap-8 text-4xl lg:text-6xl text-center text-navy-blue font-bold">
                        <font-awesome-icon :icon="['fas', 'spinner']" class="text-9xl spinner" />
                        <p class="whitespace-nowrap">Please Wait...</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="relative z-30">
            <!--ぺージタイトル-->
            <PageTitle titleLeft="C" titleRight="NTACT" :currentPath="currentPath" />

            <div class="flex justify-center px-6 py-24 bg-navy-blue bg-opacity-30">

                <!--form (axiosを用いない場合)-->
                <!--<form method="POST" action="/contact/send"-->
                <div class="flex flex-col gap-8 md:gap-12">

                    <!--CSRF Token (axiosを用いない場合)-->
                    <!--<input type="hidden" name="_token" :value="csrf">-->

                    <!--NAME-->
                    <div class="form-controll w-screen px-6 lg:px-24">
                        <div class="text-white text-lg md:text-xl pb-2 font-semibold">
                            <font-awesome-icon :icon="['fas', 'circle-check']" class="mr-1" />お名前
                        </div>
                        <input type="text" v-model="name" placeholder="入力してください（必須）"
                            class="input input-bordered bg-navy-blue text-lg lg:text-xl w-full h-16" />
                    </div>

                    <!--EMAIL-->
                    <div class="form-controll w-screen px-6 lg:px-24">
                        <div class="text-white text-lg md:text-xl pb-2 font-semibold">
                            <font-awesome-icon :icon="['fas', 'circle-check']" class="mr-1" />メールアドレス
                        </div>
                        <input type="text" v-model="email" placeholder="入力してください（必須）"
                            class="input input-bordered bg-navy-blue text-lg lg:text-xl w-full h-16" />
                    </div>

                    <!--TITLE-->
                    <div class="form-controll w-screen px-6 lg:px-24">
                        <div class="text-white text-lg md:text-xl pb-2 font-semibold">
                            <font-awesome-icon :icon="['fas', 'circle-check']" class="mr-1" />件名
                        </div>
                        <input type="text" v-model="title" placeholder="入力してください（必須）"
                            class="input input-bordered bg-navy-blue text-lg lg:text-xl w-full h-16" />
                    </div>

                    <!--CONTENT-->
                    <div class="form-controll w-screen px-6 lg:px-24">
                        <div class="text-white text-lg md:text-xl pb-2 font-semibold">
                            <font-awesome-icon :icon="['fas', 'circle-check']" class="mr-1" />お問い合わせ内容
                        </div>
                        <textarea rows="10" v-model="content" placeholder="入力してください（必須）"
                            class="textarea textarea-bordered bg-navy-blue w-full">
                            </textarea>
                    </div>

                    <div class="flex justify-center px-6 lg:px-24 pt-12 lg:pt-24">
                        <label class="btn btn-primary w-full max-w-sm lg:max-w-md lg:h-16 text-white lg:text-xl font-semibold" for="confirm">送信</label>
                    </div>
                    
                </div>
                <!--endform (axiosを用いない場合)-->
                <!--</form>-->
            </div>
        </div>

        <!--Confirm Modal (+ Validation Error Message)-->
        <input type="checkbox" id="confirm" class="modal-toggle" />
        <div class="modal z-50">
            <div class="modal-box bg-navy-blue border-2 border-white">
                <div class="flex justify-center">
                    <div class="flex flex-col">
                        <div class="flex justify-center items-center gap-2 text-white text-center text-2xl font-semibold">
                            <font-awesome-icon :icon="['fas', iconTag]" />
                            <p v-text="modalTitle"></p>
                        </div>
                        <p class="py-4 text-lg text-white" v-text="modalContent"></p>
                    </div>
                </div>
                <div class="modal-action">
                    <label for="confirm" class="btn btn-neutral text-navy-blue" v-text="submitBtnContent" @click="modalInitialize"></label>
                    <button class="btn btn-neutral text-navy-blue" v-if="submitBtnActive" @click="createNewContact">送信</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import PageTitle from '../components/PageTitle.vue';
import { computed, inject, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

/* router */
const router = useRouter();

/* emit */
const emit = defineEmits(['receivePath']);

/* 現在のパスをapp.vueへemit */
const currentPath = useRoute().path;

const emitPath = () => {
    emit('receivePath', currentPath);
}

emitPath();

/* ローディング制御 */
const isHidden = ref(true);
const loadingActive = ref(false);

/*
// CSRF Token (axiosを用いない場合)
const csrf = computed(() => {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
});
*/

// axios POST
const name = ref('');
const email = ref('');
const title = ref('');
const content = ref('');

const axios = inject('axios');

const createNewContact = () => {
    loadingActive.value = true;

    axios.post('/contact/send', {
        name: name.value,
        email: email.value,
        title: title.value,
        content: content.value,
    })
        .then(res => {
            router.push({ name: 'ContactNotice' });
        })
        .catch(err => {
            loadingActive.value = false;
            isHidden.value = false;
            submitBtnActive.value = false;

            iconTag.value = 'triangle-exclamation';
            modalTitle.value = err.response.status + ' ERROR';
            modalContent.value = '送信に失敗しました．お手数ですが，内容をお確かめのうえ再度送信をお願いします．';
            submitBtnContent.value = '閉じる';
        });
}

/* モーダルにバリデーションエラーを表示 */
const initialIconTag = 'circle-check';
const initialTitle = 'CONFIRM';
const initialContent = 'フォームを送信しますか？';
const submitBtnInitialMes = 'キャンセル';
const iconTag = ref(initialIconTag)
const modalTitle = ref(initialTitle);
const modalContent = ref(initialContent);
const submitBtnContent = ref(submitBtnInitialMes);
const submitBtnActive = ref(true);

const modalInitialize = () => {
    setTimeout(() => {
        iconTag.value = initialIconTag;
        modalTitle.value = initialTitle;
        modalContent.value = initialContent;
        submitBtnContent.value = submitBtnInitialMes;
        submitBtnActive.value = true;
    }, 300)
}
</script>



<style scoped>
.spinner {
    animation: 2s linear infinite rotation;
}

@keyframes rotation {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>


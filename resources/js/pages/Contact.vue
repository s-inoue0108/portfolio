<template>
    <div>
        <!--Submit Loading-->
        <transition name="loading">
            <div v-if="loadingActive" class="relative">
                <div class="fixed w-screen h-screen bg-neutral bg-opacity-80 z-[60]">
                    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div class="flex flex-col gap-8 text-4xl lg:text-6xl text-center text-navy-blue font-bold">
                            <div class="spinner"><i class="fa-solid fa-3x fa-spinner"></i></div>
                            <p class="whitespace-nowrap">Please Wait...</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        

        <div>
            <!--ヘッダー-->
            <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
                <Header :path="path" />
            </div>

            <!--サイドバー-->
            <Sidebar :path="path" :sidebarActive="sidebarActive" @closeSidebar="closeSidebar" />

            <!--ぺージタイトル-->
            <PageTitle titleLeft="C" titleRight="NTACT" />

            <!--Validation Error-->
            <div class="flex justify-center px-6 pt-12" :class="{ 'hidden':isHidden }" id="SubmitError">
                <div class="bg-yellow-300 border-2 border-red-500 rounded-2xl p-4">
                    <p v-text="valMes" class="text-red-500 font-semibold"></p>
                </div>
            </div>

            <div class="flex justify-center p-6">

                <!--<form method="POST" action="/contact/send"-->

                    <div class="flex flex-col gap-4">

                        <!--CSRF Token (except axios)-->
                        <!--<input type="hidden" name="_token" :value="csrf">-->

                        <!--NAME-->
                        <div class="form-controll w-screen px-6 lg:px-24">
                            <div class="label label-text text-navy-blue font-semibold">
                                お名前
                            </div>
                            <input type="text" v-model="name" placeholder="入力してください（必須）" class="input input-bordered bg-navy-blue w-full" />
                        </div>
                        <!--EMAIL-->
                        <div class="form-controll w-screen px-6 lg:px-24">
                            <div class="label label-text text-navy-blue font-semibold">
                                メールアドレス
                            </div>
                            <input type="text" v-model="email" placeholder="入力してください（必須）" class="input input-bordered bg-navy-blue w-full" />
                        </div>
                        <!--CONTENT-->
                        <div class="form-controll w-screen px-6 lg:px-24">
                            <div class="label label-text text-navy-blue font-semibold">
                                お問い合わせ内容
                            </div>
                            <textarea rows="10" v-model="content" placeholder="入力してください（必須）" class="textarea textarea-bordered bg-navy-blue w-full">
                            </textarea>
                        </div>

                        <div class="flex justify-center px-6 lg:px-24 py-12 lg:py-24">
                            <button class="btn btn-primary w-full max-w-xs text-white font-semibold" @click="createNewContact">送信</button>
                        </div>

                    </div>

                <!--</form>-->

            </div>

        </div>

        <!--フッター-->
        <Footer :path="path" @openSidebar="openSidebar" />
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import Sidebar from '../components/Sidebar.vue';
    import PageTitle from '../components/PageTitle.vue';
    import { computed, inject, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    
    const router = useRouter();

    /* 現在のパス */
    const path = ref(useRoute().path).value;

    /* emitされたサイドバー開閉の処理 */
    const sidebarActive = ref(false);

    const openSidebar = () => {
        sidebarActive.value = true;
    }

    const closeSidebar = () => {
        sidebarActive.value = false;
    }

    /* ローディング制御 */
    const isHidden = ref(true);
    const loadingActive = ref(false);

    /*
    // CSRF Token (except axios)
    const csrf = computed(() => {
        return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    });
    */

    // axios POST
    const name = ref('');
    const email = ref('');
    const content = ref('');
    const valMes = ref('');

    const axios = inject('axios');

    const createNewContact = () => {
        loadingActive.value = true;

        axios.post('/contact/send', {
            name: name.value,
            email: email.value,
            content: content.value,
        })
        .then(res => {
            router.push({ name: 'ContactNotice' });
        })
        .catch(err => {
            loadingActive.value = false;
            isHidden.value = false;
            valMes.value = '内容の送信に失敗しました．お手数ですが，内容をお確かめのうえ再度送信をお願いします．';
            router.push({ path: 'contact#SubmitError' });
        });
    }
</script>

<style scoped>
.spinner {
    animation: 2s linear infinite rotation;
}

@keyframes rotation {
    0%{ transform: rotate(0); }
    50%{ transform: rotate(180deg); }
    100%{ transform: rotate(360deg); }
}

.loading-enter-from, .loading-leave-to {
    opacity: 0;
}

.loading-enter-active, .loading-leave-active {
    transition: opacity .5s ease;
}

.loading-enter-to, .loading-leave-from {
    opacity: 1;
}
</style>


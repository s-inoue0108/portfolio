<template>
    <div>
        <!--Submit Loading-->
        <div v-if="loadingActive.value" class="relative">
            <div class="fixed w-screen h-screen bg-navy-blue z-50">
                うんち！！！
            </div>
        </div>

        <div class="w-screen">
            <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
                <Header active="contact" />
            </div>

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
                            <input type="text" v-model="name" placeholder="入力してください" class="input input-bordered bg-navy-blue w-full" />
                        </div>
                        <!--EMAIL-->
                        <div class="form-controll w-screen px-6 lg:px-24">
                            <div class="label label-text text-navy-blue font-semibold">
                                メールアドレス
                            </div>
                            <input type="text" v-model="email" placeholder="入力してください" class="input input-bordered bg-navy-blue w-full" />
                        </div>
                        <!--CONTENT-->
                        <div class="form-controll w-screen px-6 lg:px-24">
                            <div class="label label-text text-navy-blue font-semibold">
                                お問い合わせ内容
                            </div>
                            <textarea rows="10" v-model="content" placeholder="入力してください" class="textarea textarea-bordered bg-navy-blue w-full">
                            </textarea>
                        </div>

                        <div class="flex justify-center mt-12 lg:mt-24">
                            <button class="btn btn-primary w-full max-w-xs text-white font-semibold" @click="createNewContact">送信</button>
                        </div>

                    </div>

                <!--</form>-->

            </div>

        </div>
        <Footer :path="path" />
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import PageTitle from '../components/PageTitle.vue';
    import { computed, inject, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    
    const router = useRouter();
    const path = ref(useRoute().path).value;
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


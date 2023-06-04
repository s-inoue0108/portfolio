<template>
    <div>
        <Header active="contact" />
        <div class="w-screen">

            <PageTitle titleLeft="C" titleRight="NTACT" />

            <div class="flex justify-center p-6">

                <!--<form>--> <!--method="POST" action="/contact/send"-->

                    <div class="flex flex-col gap-2">

                        <!--CSRF Token (except axios)-->
                        <!--<input type="hidden" name="_token" :value="csrf">-->

                        <!--Validation Error-->
                        <div class="flex justify-center text-center text-red-500 font-semibold">
                            <p v-text="valMes"></p>
                        </div>

                        <!--NAME-->
                        <div class="form-controll w-full max-w-xs">
                            <div class="label label-text text-navy-blue">
                                お名前
                            </div>
                            <input type="text" v-model="name" placeholder="入力してください" class="input input-bordered bg-navy-blue" />
                        </div>
                        <!--EMAIL-->
                        <div class="form-controll w-full max-w-xs">
                            <div class="label label-text text-navy-blue">
                                メールアドレス
                            </div>
                            <input type="text" v-model="email" placeholder="入力してください" class="input input-bordered bg-navy-blue" />
                        </div>
                        <!--CONTENT-->
                        <div class="form-controll w-full max-w-xs">
                            <div class="label label-text text-navy-blue">
                                お問い合わせ内容
                            </div>
                            <textarea rows="10" v-model="content" placeholder="入力してください" class="textarea textarea-bordered bg-navy-blue w-full max-w-xs">
                            </textarea>
                        </div>

                        <button class="btn bg-navy-blue w-full max-w-xs mt-6" @click="createNewContact">送信</button>

                    </div>

                <!--</form>-->

            </div>

        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import PageTitle from '../components/PageTitle.vue';
    import { computed, inject, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

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
        axios.post('/contact/send', {
            name: name.value,
            email: email.value,
            content: content.value,
        })
        .then(res => {
            console.log(res);
            router.push({ name: 'ContactNotice' });
        })
        .catch(err => {
            console.log(err);
            valMes.value = '送信に失敗しました．お手数ですが，内容をお確かめのうえ再度送信をお願いします．';
        });

    }
</script>


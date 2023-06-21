<template>
    <div class="relative z-30 bg-navy-blue bg-opacity-50">

        <!--メール送信完了通知-->
        <div class="px-4 lg:px-12 pt-24 lg:pt-36">
            <div class="bg-yellow-400 rounded-2xl">
                <h1 class="text-center text-navy-blue text-xl lg:text-5xl font-bold p-4">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1" />
                    お問い合わせを受け付けました
                </h1>
            </div>
        </div>
        <div class="flex justify-center p-6">
            <div class="flex flex-col gap-4 lg:gap-8 text-white lg:text-xl">
                <p>ご入力いただいたメールアドレス宛に，確認メールを送付いたしました．</p>
                <p>メールの到着には数分かかる場合がございます．メールが届かない場合は，迷惑メールフォルダ等をご確認ください．</p>
                <p>お寄せいただいた内容につきましては，確認のうえ，</p>
                <div class="py-4">
                    <div class="bg-yellow-400 rounded-2xl">
                        <div class="flex flex-col gap-2 text-center text-navy-blue p-4">
                            <p class="text-xl lg:text-3xl font-bold">imaze.adm0108(at)gmail.com</p>
                            <div class="text-xs lg:text-base">
                                <font-awesome-icon :icon="['fas', 'circle-exclamation']" class="mr-1" />
                                <label>迷惑メール防止のため，@を(at)と表示しています</label>
                            </div>
                        </div>
                    </div>
                </div>
                <p>より，別途返信させていただきます．よろしくお願いいたします．</p>
                <p class="text-right text-lg lg:text-2xl fon-semibold py-4">Shota Inoue</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

/* emit */
const emit = defineEmits(['receivePath']);

/* 現在のパスをapp.vueへemit */
const currentPath = ref(useRoute().path).value;

const emitPath = () => {
    emit('receivePath', currentPath);
}

emitPath();
</script>
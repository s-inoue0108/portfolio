<template>
    <div>
        <!--ヘッダー-->
        <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
            <Header :path="path" />
        </div>

        <!--サイドバー-->
        <Sidebar :path="path" :sidebarActive="sidebarActive" @closeSidebar="closeSidebar" />

        <!--メール送信完了通知-->
        <div class="px-4 lg:px-12 pt-24 lg:pt-36">
            <div class="bg-yellow-300 rounded-2xl">
                <h1 class="text-center text-navy-blue text-xl lg:text-5xl font-bold p-4">
                    <i class="fa-solid fa-envelope mr-1"></i>
                    お問い合わせを受け付けました
                </h1>
            </div>
        </div>
        <div class="flex justify-center p-6">
            <div class="flex flex-col gap-4 lg:gap-8 text-navy-blue lg:text-xl">
                <p>ご入力いただいたメールアドレス宛に，確認メールを送付いたしました．</p>
                <p>もし，メールが届いていない場合は，迷惑メールフォルダ等に振り分けられた可能性がございます．確認をお願いいたします．</p>
                <p>お寄せいただいた内容につきましては，確認のうえ，</p>
                <div class="py-4">
                    <div class="bg-yellow-300 rounded-2xl">
                        <div class="flex flex-col gap-2 text-center p-4">
                            <p class="text-xl lg:text-3xl font-bold">imaze.adm0108(at)gmail.com</p>
                            <div class="text-xs lg:text-base">
                                <i class="fa-solid fa-circle-exclamation mr-1"></i>
                                <label>迷惑メール防止のため，@を(at)と表示しています</label>
                            </div>
                        </div>
                    </div>
                </div>
                <p>より，別途返信させていただきます．よろしくお願いいたします．</p>
                <p class="text-right text-lg lg:text-2xl fon-semibold py-4">Shota Inoue</p>
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
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

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
</script>
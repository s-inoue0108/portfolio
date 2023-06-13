<template>
    <div>
        <div>
            <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
                <Header active="works" />
            </div>

            <PageTitle titleLeft="W" titleRight="RKS" />

        </div>
        <Footer :path="path" />
    </div>
</template>

<script setup>

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import PageTitle from '../components/PageTitle.vue';

import { ref } from 'vue';
import { useRoute } from 'vue-router';

const path = ref(useRoute().path).value;

</script>


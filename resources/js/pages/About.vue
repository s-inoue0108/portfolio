<template>
    <div>
        <Header active="about" />
        <div class="w-screen">

            <PageTitle titleLeft="AB" titleRight="UT" />

            <!--名前-->
            <div class="flex justify-center py-16">
                <div class="flex items-center justify-center gap-4">
                    <img src="/storage/icons/S.I.jpg" class="w-1/4 h-auto"/>
                    <div class="flex flex-col gap-2">
                        <h2 class="text-center text-4xl text-navy-blue font-bold tracking-wider">井上 翔太</h2>
                        <label class="text-center text-xl tracking-wider text-light-navy-blue font-semibold">Inoue Shota</label>
                    </div>
                </div>
            </div>

            <!--学歴-->
            <div class="py-12 lg:py-16">
                <div class="flex flex-col">
                    <div class="border-2 border-navy-blue"></div>
                    <div class="flex justify-center bg-yellow-300 py-1">
                        <div class="py-4 flex items-center gap-2 text-center text-3xl lg:text-5xl text-navy-blue font-bold">
                            <i class="fa-solid fa-school mr-1"></i>
                            <p class="tracking-wider">学歴</p>
                        </div>
                    </div>
                    <div class="border-2 border-navy-blue"></div>
                </div>
            </div>

            <AcademicBackground />

            <!--スキル-->
            <div class="py-12 lg:py-16">
                <div class="flex flex-col">
                    <div class="border-2 border-navy-blue"></div>
                    <div class="flex justify-center bg-yellow-300 py-1">
                        <div class="py-4 flex items-center gap-2 text-center text-3xl lg:text-5xl text-navy-blue font-bold">
                            <i class="fa-solid fa-laptop-code mr-1"></i>
                            <p class="tracking-wider">スキル</p>
                        </div>
                    </div>
                    <div class="border-2 border-navy-blue"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import PageTitle from '../components/PageTitle.vue';
    import AcademicBackground from '../components/AcademicBackground.vue';
</script>


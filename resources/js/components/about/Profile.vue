<template>
    <div class="flex justify-center py-12 lg:py-24 bg-navy-blue bg-opacity-30">
        <div class="bg-yellow-400 border-[8px] border-navy-blue rounded-2xl p-4 md:p-6">
            <div class="flex flex-col lg:flex-row justify-center items-center gap-16">

                <!--名前など-->
                <div class="flex flex-col gap-8">
                    <div class="flex flex-col gap-4">
                        <p class="text-navy-blue text-center text-4xl lg:text-6xl font-bold">井上 翔太</p>
                        <p class="text-navy-blue text-center text-xl lg:text-3xl font-semibold">Inoue Shota</p>
                    </div>
                    <table class="text-navy-blue text-sm md:text-base">
                        <tr>
                            <th>生年月日</th>
                            <td>2003/01/08</td>
                        </tr>
                        <tr>
                            <th>特技</th>
                            <td>暗算（段位保持）</td>
                        </tr>
                        <tr>
                            <th>趣味</th>
                            <td>都会の夜景を見に行くこと</td>
                        </tr>
                    </table>
                </div>

                <!--自己紹介文-->
                <div class="flex justify-center text-navy-blue w-[16rem] md:w-[32rem]">
                    <div class="flex flex-col gap-8">

                        <div class="flex flex-col gap-4">
                            <p class="text-xl md:text-3xl font-semibold">About Me</p>
                            <p class="w-[16rem] md:w-[32rem]">
                                北里大学 理学部 化学科3年の井上 翔太と申します．大学で化学を学ぶ傍ら，Webプログラミングに興味をもち独学で勉強を進めてきました．
                            </p>
                        </div>

                        <div class="flex flex-col gap-4">
                            <p class="text-xl md:text-3xl font-semibold">Vision</p>
                            <p class="w-[16rem] md:w-[32rem]">
                                これまでのWEB制作を通して，ITには大きな可能性があると感じました．
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
tr {
    padding: 0.7rem 0;
    text-align: left;
}

td {
    padding: 0 1.2rem;
    text-align: left;
}
</style>
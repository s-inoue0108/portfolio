<template>
    <div class="flex justify-center px-2 lg:px-12 py-12 lg:py-24 bg-navy-blue bg-opacity-30">
        <div class="bg-yellow-400 border-4 lg:border-[8px] border-navy-blue rounded-2xl p-4 md:p-6">
            <div class="flex flex-col lg:flex-row justify-center items-center gap-16">

                <!--名前など-->
                <div class="flex flex-col gap-8">
                    <div class="flex flex-col gap-2">
                        <p class="text-navy-blue text-center text-4xl lg:text-6xl font-bold">井上 翔太</p>
                        <p class="text-navy-blue text-center text-xl lg:text-3xl font-semibold">Inoue Shota</p>
                    </div>
                    <table class="text-navy-blue text-sm md:text-base">
                        <tr class="py-3">
                            <th class="text-center"><font-awesome-icon :icon="['fas', 'calendar-days']" /></th>
                            <th class="text-left pl-2">生年月日</th>
                            <td class="text-left pl-6">2003/01/08</td>
                        </tr>
                        <tr class="py-3">
                            <th class="text-center"><font-awesome-icon :icon="['fas', 'star']" /></th>
                            <th class="text-left pl-2">特技</th>
                            <td class="text-left pl-6">暗算（段位保持）</td>
                        </tr>
                        <tr class="py-3">
                            <th class="text-center"><font-awesome-icon :icon="['fas', 'headphones']" /></th>
                            <th class="text-left pl-2">趣味</th>
                            <td class="text-left pl-6">音楽鑑賞，都会の夜景巡り</td>
                        </tr>
                    </table>
                </div>

                <!--自己紹介文-->
                <div class="flex justify-center text-navy-blue w-[16rem] md:w-[32rem]">
                    <div class="flex flex-col gap-8">

                        <div class="flex flex-col gap-2">
                            <p class="text-xl md:text-3xl font-semibold"><font-awesome-icon :icon="['fas', 'circle-check']" class="mr-2" />About Me</p>
                            <Collapse :detailText="aboutMeText" />
                        </div>

                        <div class="flex flex-col gap-2">
                            <p class="text-xl md:text-3xl font-semibold"><font-awesome-icon :icon="['fas', 'circle-check']" class="mr-2" />Vision</p>
                            <Collapse :detailText="visionText" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import Collapse from '../Collapse.vue';

const aboutMeText = '<a href="https://www.kitasato-u.ac.jp/jp/index.html" class="external-link" target="_blank" rel="noopener noreferrer">北里大学</a> 理学部 化学科3年の井上 翔太と申します．大学で化学を学び，1年次には成績優秀者として<a href="https://www.kitasato-u.ac.jp/ppa/albums/abm.php?d=2179&f=abm00013159.pdf&n=letterzine_no272.pdf#page=33" class="external-link" target="_blank" rel="noopener noreferrer">表彰および奨学金</a>を頂きました．<br>Pythonで計算やグラフの作成などを行ううちにプログラミングに興味をもち，3年次にWebプログラミングの学習を始めました．現在も独学で学習を続けています．';
const visionText = 'Webプログラミングの学習を通して，Web技術は多様なニーズに対して柔軟なソリューションを提供できる点が魅力的であると感じました．このような性質は，コーディングにおける選択肢の多さ，自由度の高さに起因すると考えています．私は，常に多角的で柔軟な思考をもって，最適なソリューションを提供できるエンジニアを目指したいです．';
</script>
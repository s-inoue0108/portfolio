<template>
    <div class="px-6 lg:px-16 py-12 lg:py-24 bg-navy-blue bg-opacity-30">

        <!--PC-->
        <div class="hidden lg:block">
            <div class="grid grid-rows-3 grid-cols-2 gap-16">

                <div v-for="skill in skills" :key="skill.id">
                    <div class="bg-yellow-400 border-[8px] border-navy-blue rounded-2xl p-4 h-full">
                        <div class="flex justify-center items-center gap-12">
                            <font-awesome-icon :icon="[skill.iconType, skill.icon]" class="text-navy-blue text-9xl" />
                            <div class="flex flex-col gap-4 text-navy-blue">
                                <p class="text-center text-3xl font-semibold" v-text="skill.title"></p>
                                <div class="border border-navy-blue rounded"></div>
                                <div class="flex justify-center">
                                    <table>
                                        <tr>
                                            <td class="py-1">名称</td>
                                            <td class="pl-8 py-1">スキルレベル</td>
                                        </tr>
                                        <tr v-for="row in skill.table" :key="row.id">
                                            <th v-text="row.head" class="py-1"></th>
                                            <td class="pl-8 py-1">
                                                <LevelBar :stars="row.level" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="border border-navy-blue rounded"></div>
                                <p v-text="skill.text"></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!--モバイル-->
        <div class="lg:hidden">
            <div class="flex flex-col gap-12">

                <div v-for="skill in skills" :key="skill.id">
                    <div class="bg-yellow-400 border-4 border-navy-blue rounded-2xl p-4 h-full">
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <div class="flex justify-center items-center gap-4">
                                <font-awesome-icon :icon="[skill.iconType, skill.icon]" class="text-navy-blue text-5xl" />
                                <p class="text-center text-3xl font-semibold" v-text="skill.title"></p>
                            </div>
                            <div class="border border-navy-blue rounded"></div>
                            <div class="flex justify-center">
                                <table>
                                    <tr>
                                        <td class="py-1">名称</td>
                                        <td class="pl-6 py-1">スキルレベル</td>
                                    </tr>
                                    <tr v-for="row in skill.table" :key="row.id">
                                        <th v-text="row.head" class="py-1"></th>
                                        <td class="pl-6 py-1">
                                            <LevelBar :stars="row.level" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="border border-navy-blue rounded"></div>
                            <Collapse :detailText="skill.text" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>



<script setup>
import Collapse from '../Collapse.vue';
import LevelBar from '../LevelBar.vue';

/* スキルレベル */
const lev2 = [
    { id: 1, color: 'text-navy-blue' },
    { id: 2, color: 'text-navy-blue' },
    { id: 3, color: 'text-white' },
    { id: 4, color: 'text-white' },
    { id: 5, color: 'text-white' },
];

const lev3 = [
    { id: 1, color: 'text-navy-blue' },
    { id: 2, color: 'text-navy-blue' },
    { id: 3, color: 'text-navy-blue' },
    { id: 4, color: 'text-white' },
    { id: 5, color: 'text-white' },
];

const lev4 = [
    { id: 1, color: 'text-navy-blue' },
    { id: 2, color: 'text-navy-blue' },
    { id: 3, color: 'text-navy-blue' },
    { id: 4, color: 'text-navy-blue' },
    { id: 5, color: 'text-white' },
];

/* スキルテーブル */
const htmlTable = [
    { id: 1, head: 'HTML5', level: lev4 },
    { id: 2, head: 'CSS3', level: lev4 },
    { id: 3, head: 'Tailwind CSS', level: lev4 },
];

const frontendTable = [
    { id: 1, head: 'jQuery', level: lev3 },
    { id: 2, head: 'Vue.js', level: lev3 },
];

const backendTable = [
    { id: 1, head: 'PHP (Laravel)', level: lev3 },
];

const dbTable = [
    { id: 1, head: 'MySQL', level: lev2 },
    { id: 2, head: 'Apache', level: lev2 },
];

const toolsTable = [
    { id: 1, head: 'Git/GitHub', level: lev2 },
    { id: 2, head: 'VSCode', level: lev3 },
];

const othersTable = [
    { id: 1, head: 'LaTeX', level: lev4 },
];

/* 詳細説明 */
const htmlText = 'レスポンシブデザインなど，基本的な内容は扱えます．CSSは主にTailwind CSSを利用していました．';
const frontendText = 'フロントエンドは主にjQueryを使っていました．直近では，Vue.jsを学習しています．';
const backendText = 'バックエンドはLaravelを使っていました．Breezeパッケージを用いたBasic認証の実装などを行いました．';
const dbText = 'ローカル環境ではXAMPPを使用しています．MySQLはphpMyAdminを介して扱っていました．';
const toolsText = 'WindowsOSでコーディングを行っています．Gitやターミナルコマンドの扱いは勉強中です．';
const othersText = '数学や物理学の課題などは，数式マークアップ言語であるLaTeXを使って作っていました．';

/* スキル */
const skills = [
    { id: 1, title: 'HTML & CSS', iconType: 'fab', icon: 'html5', table: htmlTable, text: htmlText },
    { id: 2, title: 'フロントエンド', iconType: 'fab', icon: 'js', table: frontendTable, text: frontendText },
    { id: 3, title: 'バックエンド', iconType: 'fab', icon: 'laravel', table: backendTable, text: backendText },
    { id: 4, title: 'DB & サーバー', iconType: 'fas', icon: 'database', table: dbTable, text: dbText },
    { id: 5, title: 'ツール', iconType: 'fas', icon: 'toolbox', table: toolsTable, text: toolsText },
    { id: 6, title: 'その他', iconType: 'fas', icon: 'list', table: othersTable, text: othersText },
];
</script>
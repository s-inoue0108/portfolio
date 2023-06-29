<template>
    <div class="bg-navy-blue bg-opacity-30">
        <!--スキル（PC表示）-->
        <div class="hidden lg:block px-16 py-24">
            <div class="grid grid-rows-3 grid-cols-2 gap-16">

                <div class="bg-yellow-400 border-[8px] border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <font-awesome-icon :icon="['fab', 'html5']" class="text-navy-blue text-9xl" />
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <p class="text-center text-3xl font-semibold">HTML & CSS</p>
                            <div class="border border-navy-blue rounded"></div>
                            <table class="mx-auto">
                                <tr>
                                    <th>HTML5</th>
                                    <td>1年</td>
                                </tr>
                                <tr>
                                    <th>CSS3</th>
                                    <td>1年</td>
                                </tr>
                                <tr>
                                    <th>Tailwind CSS</th>
                                    <td>6ヶ月</td>
                                </tr>
                            </table>
                            <div class="border border-navy-blue rounded"></div>
                            <p>レスポンシブデザインなど，基本的な内容は扱えます．CSSは主にTailwind CSSを利用していました．</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-400 border-[8px] border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <font-awesome-icon :icon="['fab', 'js']" class="text-navy-blue text-9xl" />
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <p class="text-center text-3xl font-semibold">フロントエンド</p>
                            <div class="border border-navy-blue rounded"></div>
                            <table class="mx-auto">
                                <tr>
                                    <th>JavaScript</th>
                                    <td>1年</td>
                                </tr>
                                <tr>
                                    <th>jQuery</th>
                                    <td>1年</td>
                                </tr>
                                <tr>
                                    <th>Vue.js</th>
                                    <td>3ヶ月</td>
                                </tr>
                            </table>
                            <div class="border border-navy-blue rounded"></div>
                            <p>フロントエンドはjQueryを使っていました．直近では，Vue.jsを学習しています．</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-400 border-[8px] border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <font-awesome-icon :icon="['fab', 'laravel']" class="text-navy-blue text-9xl" />
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <p class="text-center text-3xl font-semibold">バックエンド</p>
                            <div class="border border-navy-blue rounded"></div>
                            <table class="mx-auto">
                                <tr>
                                    <th>PHP (Laravel)</th>
                                    <td>6ヶ月</td>
                                </tr>
                            </table>
                            <div class="border border-navy-blue rounded"></div>
                            <p>バックエンドはLaravelを使っていました．Breezeパッケージを用いたBasic認証の実装などを行いました．</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-400 border-[8px] border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <font-awesome-icon :icon="['fas', 'database']" class="text-navy-blue text-9xl" />
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <p class="text-center text-3xl font-semibold">DB & サーバー</p>
                            <div class="border border-navy-blue rounded"></div>
                            <table class="mx-auto">
                                <tr>
                                    <th>MySQL (phpMyAdmin)</th>
                                    <td>6ヶ月</td>
                                </tr>
                                <tr>
                                    <th>Apache HTTP Server</th>
                                    <td>6ヶ月</td>
                                </tr>
                            </table>
                            <div class="border border-navy-blue rounded"></div>
                            <p>ローカル環境ではXAMPPを使用してコーディングを行っています．</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-400 border-[8px] border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <font-awesome-icon :icon="['fas', 'toolbox']" class="text-navy-blue text-9xl" />
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <p class="text-center text-3xl font-semibold">ツール</p>
                            <div class="border border-navy-blue rounded"></div>
                            <table class="mx-auto">
                                <tr>
                                    <th>Git/GitHub</th>
                                    <td>6ヶ月</td>
                                </tr>
                                <tr>
                                    <th>VSCode</th>
                                    <td>1年</td>
                                </tr>
                            </table>
                            <div class="border border-navy-blue rounded"></div>
                            <p>WindowsOSでコーディングを行っています．Gitやターミナルコマンドの扱いは勉強中です．</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-400 border-[8px] border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <font-awesome-icon :icon="['fas', 'list']" class="text-navy-blue text-9xl" />
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <p class="text-center text-3xl font-semibold">その他</p>
                            <div class="border border-navy-blue rounded"></div>
                            <table class="mx-auto">
                                <tr>
                                    <th>LaTeX/MathJax</th>
                                    <td>2年</td>
                                </tr>
                            </table>
                            <div class="border border-navy-blue rounded"></div>
                            <p>数学や物理学の課題などは，数式マークアップ言語であるLaTeXを使って作っていました．</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--スキル（モバイル表示）-->
        <div class="lg:hidden">
            <div class="flex flex-col gap-12 px-6 py-24">

                <div class="bg-yellow-400 border-4 border-navy-blue rounded-2xl p-4">
                    <div class="flex flex-col gap-4 text-navy-blue">
                        <div class="flex justify-center items-center gap-4">
                            <font-awesome-icon :icon="['fab', 'html5']" class="text-navy-blue text-5xl" />
                            <p class="text-center text-3xl font-semibold">HTML & CSS</p>
                        </div>
                        <div class="border border-navy-blue rounded"></div>
                        <table class="mx-auto">
                            <tr>
                                <th>HTML5</th>
                                <td>1年</td>
                            </tr>
                            <tr>
                                <th>CSS3</th>
                                <td>1年</td>
                            </tr>
                            <tr>
                                <th>Tailwind CSS</th>
                                <td>6ヶ月</td>
                            </tr>
                        </table>
                        <div class="border border-navy-blue rounded"></div>
                        <p>レスポンシブデザインなど，基本的な内容は扱えます．CSSは主にTailwind CSSを利用していました．</p>
                    </div>
                </div>

                <div class="bg-yellow-400 border-4 border-navy-blue rounded-2xl p-4">
                    <div class="flex flex-col gap-4 text-navy-blue">
                        <div class="flex justify-center items-center gap-4">
                            <font-awesome-icon :icon="['fab', 'js']" class="text-navy-blue text-5xl" />
                            <p class="text-center text-3xl font-semibold">フロントエンド</p>
                        </div>
                        <div class="border border-navy-blue rounded"></div>
                        <table class="mx-auto">
                            <tr>
                                <th>JavaScript</th>
                                <td>1年</td>
                            </tr>
                            <tr>
                                <th>jQuery</th>
                                <td>1年</td>
                            </tr>
                            <tr>
                                <th>Vue.js</th>
                                <td>3ヶ月</td>
                            </tr>
                        </table>
                        <div class="border border-navy-blue rounded"></div>
                        <p>フロントエンドはjQueryを使っていました．直近では，Vue.jsを学習しています．</p>
                    </div>
                </div>

                <div class="bg-yellow-400 border-4 border-navy-blue rounded-2xl p-4">
                    <div class="flex flex-col gap-4 text-navy-blue">
                        <div class="flex justify-center items-center gap-4">
                            <font-awesome-icon :icon="['fab', 'laravel']" class="text-navy-blue text-5xl" />
                            <p class="text-center text-3xl font-semibold">バックエンド</p>
                        </div>
                        <div class="border border-navy-blue rounded"></div>
                        <table class="mx-auto">
                            <tr>
                                <th>PHP (Laravel)</th>
                                <td>6ヶ月</td>
                            </tr>
                        </table>
                        <div class="border border-navy-blue rounded"></div>
                        <p>バックエンドはLaravelを使っていました．Breezeパッケージを用いたBasic認証の実装などを行いました．</p>
                    </div>
                </div>

                <div class="bg-yellow-400 border-4 border-navy-blue rounded-2xl p-4">
                    <div class="flex flex-col gap-4 text-navy-blue">
                        <div class="flex justify-center items-center gap-4">
                            <font-awesome-icon :icon="['fas', 'database']" class="text-navy-blue text-5xl" />
                            <p class="text-center text-3xl font-semibold">DB & サーバー</p>
                        </div>
                        <div class="border border-navy-blue rounded"></div>
                        <table class="mx-auto">
                            <tr>
                                <th>MySQL (phpMyAdmin)</th>
                                <td>6ヶ月</td>
                            </tr>
                            <tr>
                                <th>Apache HTTP Server</th>
                                <td>6ヶ月</td>
                            </tr>
                        </table>
                        <div class="border border-navy-blue rounded"></div>
                        <p>ローカル環境ではXAMPPを使用してコーディングを行っています．</p>
                    </div>
                </div>

                <div class="bg-yellow-400 border-4 border-navy-blue rounded-2xl p-4">
                    <div class="flex flex-col gap-4 text-navy-blue">
                        <div class="flex justify-center items-center gap-4">
                            <font-awesome-icon :icon="['fas', 'toolbox']" class="text-navy-blue text-5xl" />
                            <p class="text-center text-3xl font-semibold">ツール</p>
                        </div>
                        <div class="border border-navy-blue rounded"></div>
                        <table class="mx-auto">
                            <tr>
                                <th>Git/GitHub</th>
                                <td>6ヶ月</td>
                            </tr>
                            <tr>
                                <th>VSCode</th>
                                <td>1年</td>
                            </tr>
                        </table>
                        <div class="border border-navy-blue rounded"></div>
                        <p>WindowsOSでコーディングを行っています．Gitやターミナルコマンドの扱いは勉強中です．</p>
                    </div>
                </div>

                <div class="bg-yellow-400 border-4 border-navy-blue rounded-2xl p-4">
                    <div class="flex flex-col gap-4 text-navy-blue">
                        <div class="flex justify-center items-center gap-4">
                            <font-awesome-icon :icon="['fas', 'list']" class="text-navy-blue text-5xl" />
                            <p class="text-center text-3xl font-semibold">その他</p>
                        </div>
                        <div class="border border-navy-blue rounded"></div>
                        <table class="mx-auto">
                            <tr>
                                <th>LaTeX/MathJax</th>
                                <td>2年</td>
                            </tr>
                        </table>
                        <div class="border border-navy-blue rounded"></div>
                        <p>数学や物理学の課題などは，数式マークアップ言語であるLaTeXを使って作っていました．</p>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<style scoped>
td {
    padding: 0 1rem;
}
</style>
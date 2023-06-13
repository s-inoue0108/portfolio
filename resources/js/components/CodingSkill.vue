<template>
    <div>
        <!--スキル（PC表示）-->
        <div class="hidden lg:block">
            <div class="grid grid-rows-3 grid-cols-2 gap-16 px-16 py-12">

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <i class="fa-brands fa-html5 fa-10x text-navy-blue"></i>
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

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <i class="fa-brands fa-js fa-9x text-navy-blue"></i>
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

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <i class="fa-brands fa-laravel fa-8x text-navy-blue"></i>
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

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <i class="fa-solid fa-database fa-8x text-navy-blue"></i>
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <p class="text-center text-3xl font-semibold">DB & サーバー</p>
                            <div class="border border-navy-blue rounded"></div>
                            <table class="mx-auto">
                                <tr>
                                    <th>MySQL (XAMPP)</th>
                                    <td>6ヶ月</td>
                                </tr>
                                <tr>
                                    <th>Apache (XAMPP)</th>
                                    <td>6ヶ月</td>
                                </tr>
                            </table>
                            <div class="border border-navy-blue rounded"></div>
                            <p>ローカル環境ではXAMPPを使用してコーディングを行っています．</p>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <i class="fa-solid fa-toolbox fa-8x text-navy-blue"></i>
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

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                    <div class="flex justify-center items-center gap-12">
                        <i class="fa-solid fa-list fa-8x text-navy-blue"></i>
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
            <div class="flex flex-col gap-12 px-6 py-12">
                
                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <div class="flex justify-center items-center gap-4">
                                <i class="fa-brands fa-html5 fa-3x text-navy-blue"></i>
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

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                        
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <div class="flex justify-center items-center gap-4">
                                <i class="fa-brands fa-js fa-3x text-navy-blue"></i>
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

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <div class="flex justify-center items-center gap-4">
                                <i class="fa-brands fa-laravel fa-3x text-navy-blue"></i>
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

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <div class="flex justify-center items-center gap-4">
                                <i class="fa-solid fa-database fa-3x text-navy-blue"></i>
                                <p class="text-center text-3xl font-semibold">DB & サーバー</p>
                            </div>
                            <div class="border border-navy-blue rounded"></div>
                            <table class="mx-auto">
                                <tr>
                                    <th>MySQL (XAMPP)</th>
                                    <td>6ヶ月</td>
                                </tr>
                                <tr>
                                    <th>Apache (XAMPP)</th>
                                    <td>6ヶ月</td>
                                </tr>
                            </table>
                            <div class="border border-navy-blue rounded"></div>
                            <p>ローカル環境ではXAMPPを使用してコーディングを行っています．</p>
                        </div>
                </div>

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <div class="flex justify-center items-center gap-4">
                                <i class="fa-solid fa-toolbox fa-3x text-navy-blue"></i>
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

                <div class="bg-yellow-300 border-2 border-navy-blue rounded-2xl p-4">
                        <div class="flex flex-col gap-4 text-navy-blue">
                            <div class="flex justify-center items-center gap-4">
                                <i class="fa-solid fa-list fa-3x text-navy-blue"></i>
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
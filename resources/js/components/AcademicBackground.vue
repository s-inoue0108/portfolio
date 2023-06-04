<template>
    <!--学歴（PC表示）-->
    <div class="hidden lg:block py-12">
        <div class="flex justify-center">

            <div class="flex flex-col gap-6">

                <!--wrap-1-->
                <div class="flex items-center gap-16">
                    <div class="hex w-[240px] bg-navy-blue relative">
                        <div class="hex w-[192px] bg-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div class="flex flex-col text-navy-blue text-2xl text-center font-semibold">
                                    <p class="text-3xl mb-4">中学校</p>
                                    <p>2015</p>
                                    <div><i class="fa-solid fa-chevron-down"></i></div>
                                    <p>2018</p>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div class="flex flex-col gap-3 w-3/4 bg-yellow-300 rounded-2xl px-4 pt-6">
                        <label class="text-navy-blue text-xl">国立</label>
                        <div tabindex="0" class="collapse collapse-arrow">
                            <p class="collapse-title text-navy-blue text-3xl text-center">東京大学教育学部附属中等教育学校 前期課程</p>
                            <div class="collapse-content text-black">
                                <div class="flex flex-col gap-4">
                                    <p>中学受験をして入学しました．天文部に所属し，星座の観察などを行っていました．</p>
                                    <p class="text-xs text-center">欄外をタップで閉じる</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center text-navy-blue text-8xl"><i class="fa-solid fa-chevron-down"></i></div>

                <!--wrap-2-->
                <div class="flex items-center gap-16">
                    <div class="hex w-[240px] bg-navy-blue relative">
                        <div class="hex w-[192px] bg-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div class="flex flex-col text-navy-blue text-2xl text-center font-semibold">
                                    <p class="text-3xl mb-4">高校</p>
                                    <p>2018</p>
                                    <div><i class="fa-solid fa-chevron-down"></i></div>
                                    <p>2021</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 w-3/4 bg-yellow-300 rounded-2xl px-4 pt-6">
                        <label class="text-navy-blue text-xl">国立</label>
                        <div tabindex="0" class="collapse collapse-arrow">
                            <p class="collapse-title text-navy-blue text-3xl text-center">東京大学教育学部附属中等教育学校 後期課程</p>
                            <div class="collapse-content text-black">
                                <div class="flex flex-col gap-4">
                                    <p>化学の勉強をしていました．</p>
                                    <p class="text-xs text-center">欄外をタップで閉じる</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center text-navy-blue text-8xl"><i class="fa-solid fa-chevron-down"></i></div>

                <!--wrap-3-->
                <div class="flex items-center gap-16">
                    <div class="hex w-[240px] bg-navy-blue relative">
                        <div class="hex w-[192px] bg-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div class="flex flex-col text-navy-blue text-2xl text-center font-semibold">
                                    <p class="text-3xl mb-4">大学</p>
                                    <p>2021</p>
                                    <div><i class="fa-solid fa-chevron-down"></i></div>
                                    <p>2025</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 w-3/4 bg-yellow-300 rounded-2xl px-4 pt-6">
                        <label class="text-navy-blue text-xl">私立</label>
                        <div tabindex="0" class="collapse collapse-arrow">
                            <p class="collapse-title text-navy-blue text-3xl text-center">北里大学 理学部 化学科</p>
                            <div class="collapse-content text-black">
                                <div class="flex flex-col gap-4">
                                    <p>大学3年次にWebプログラミングの勉強を始めました．研究室では，物理化学の研究をする予定です．</p>
                                    <p class="text-xs text-center">欄外をタップで閉じる</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        
            </div>

        </div>
    </div>

    <!--学歴（モバイル表示）-->
    <div class="flex justify-center px-4 py-12 lg:hidden">
        <div class="flex flex-col gap-6">
                
            <!--wrap-1-->
            <div class="flex flex-col gap-3 bg-yellow-300 rounded-2xl px-2 py-4">
                <div class="flex justify-between items-center">
                    <label class="text-navy-blue">国立</label>
                    <label class="text-navy-blue text-right">2015-2018</label>
                </div>
                <p class="text-navy-blue text-xl">東京大学教育学部附属中等教育学校 前期課程</p>
                <div tabindex="0" class="collapse collapse-arrow">
                    <div class="collapse-title text-right text-light-navy-blue">詳細を見る</div>
                    <div class="collapse-content text-black">
                        <p>中学受験をして入学しました．天文部に所属し，星座の観察などを行っていました．</p>
                    </div>
                </div>
            </div>

            <div class="text-center text-navy-blue text-5xl"><i class="fa-solid fa-chevron-down"></i></div>

            <!--wrap-2-->
            <div class="flex flex-col gap-3 bg-yellow-300 rounded-2xl px-2 py-4">
                <div class="flex justify-between items-center">
                    <label class="text-navy-blue">国立</label>
                    <label class="text-navy-blue text-right">2018-2021</label>
                </div>
                <p class="text-navy-blue text-xl">東京大学教育学部附属中等教育学校 後期課程</p>
            </div>

            <div class="text-center text-navy-blue text-5xl"><i class="fa-solid fa-chevron-down"></i></div>

            <!--wrap-3-->
            <div class="flex flex-col gap-3 bg-yellow-300 rounded-2xl px-2 py-4">
                <div class="flex justify-between items-center">
                    <label class="text-navy-blue">私立</label>
                    <label class="text-navy-blue text-right">2021-2025</label>
                </div>
                <p class="text-navy-blue text-xl">北里大学 理学部 化学科</p>
            </div>

        </div>
    </div>
</template>
<template>
    <div id="content">
        <router-view />
    </div>
</template>

<style scoped>
/* スクロールバーを非表示 */

#content {
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */  
    -ms-overflow-style: none; /* Internet Explorer */
}

#content::-webkit-scrollbar {  
  display: none; /* Google Chrome, Safari, Microsoft Edge */
}
</style>
<script setup>
import InfiniteSlideBar from 'vue3-infinite-slide-bar';

let logos = ['avanti.svg', 'primepay.png', 'swivl.svg', 'attune.svg', 'truesafe.webp', 'sparx.png', 'tcc.png', 'eight.svg', 'encore.png', 'insight.png', 'wil.webp'];
</script>
<template>
    <infinite-slide-bar :barStyle="{ padding: '5px 0' }" duration="60s" class=" logos white-fade">
        <div v-for="logo in logos" :key="logo" class="inline-block mr-8 mb-4 rounded-3xl logo-parent">
            <img :src="'/logos/' + logo" alt="Logo" class="logo">
        </div>
    </infinite-slide-bar>
</template>

<style>
.logo {
    max-height: 70px;
    max-width: 120px;
    height: auto;
    width: auto;
}

.vifnslb-bar {
    display: flex;
    align-items: center;
}

.logos {
    position: relative;
}

.logos:before,
.logos:after {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100px;
    content: "";
    z-index: 2;
}

.logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(255, 255, 255, 100));
}

.logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255, 100));
}

.white-fade:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(255, 255, 255, 50)) !important;
}

.white-fade:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255, 50)) !important;
}
</style>
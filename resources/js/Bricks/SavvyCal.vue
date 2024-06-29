<script setup>
import { onBeforeMount, ref } from 'vue';
onBeforeMount(() => {
    loadSavvyCalScript();
});
function loadSavvyCalScript() {
    const script = document.createElement('script');
    script.src = 'https://embed.savvycal.com/v1/embed.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => initializeSavvyCal();
}
function initializeSavvyCal() {
    window.SavvyCal = window.SavvyCal || function () {
        (window.SavvyCal.q = window.SavvyCal.q || []).push(arguments);
    };
    SavvyCal('init');
    SavvyCal('inline', { link: 'bryan-outwork-staffing/inquiry', selector: '#booking-page', hideAvatar: true, hideBanner: true });
}
</script>
<template>
    <div id="booking-page" class="">
    </div>
</template>
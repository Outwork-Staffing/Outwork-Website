<script setup>
import { onBeforeMount, ref } from 'vue';
const bookingPage = ref(null);
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
    SavvyCal('inline', { link: 'bryan-outwork-staffing/inquiry', selector: '#booking-page' });
}
</script>
<template>
    <Main>
        <Row class="pt-12 ">
            <Heading size="span" tag="h6">
                Last Step
            </Heading>
            <Heading size="xl" tag="h2">
                Form Submitted - now let's schedule a call.
            </Heading>
            <p class="body-paragraph max-w-4xl">The next step in the process is to chat with our team about your needs.
                We will review the information you submitted and prepare everything you may need on our first call.
                <br><br> We will review timeline, pricing, your needs, and global payment compliance. </p>

            <div id="booking-page" class="my-12 min-h-screen">
            </div>


        </Row>
    </Main>
</template>

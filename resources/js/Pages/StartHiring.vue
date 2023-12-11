<template>
    <Main>
        <Row class="pt-12 ">
            <Heading size="span" tag="h6">
                contact us
            </Heading>
            <Heading size="2xl" tag="h2">
                Ready to get started hiring?
            </Heading>
            <p class="body-paragraph max-w-4xl">Say goodbye to the stress of hiring global talent. Use the form below to
                schedule a
                call with our team and learn how we can help you hire the best talent. Our email is also below if you would
                prefer that.</p>
            <Button type="text" link="mailto:operations@outworkstaffing.com">Email operations@outworkstaffing.com</Button>
            <div id="booking-page" class="my-12 min-h-screen">
                <!-- this is where we will inject the interface -->
            </div>
        </Row>
    </Main>
</template>
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

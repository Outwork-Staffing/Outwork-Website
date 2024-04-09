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
            <iframe class="min-h-[500px]"
                data-tally-src="https://tally.so/embed/w72xp2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy" width="100%" height="1" frameborder="0" marginheight="0" marginwidth="0"
                title="Get Started Hiring"></iframe>


        </Row>
    </Main>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const loadTallyEmbed = () => {
        const embedScriptUrl = "https://tally.so/widgets/embed.js";
        let script = document.querySelector(`script[src="${embedScriptUrl}"]`);

        if (!script) {
            script = document.createElement('script');
            script.src = embedScriptUrl;
            document.body.appendChild(script);
        }

        script.onload = () => {
            if (typeof Tally !== 'undefined') {
                Tally.loadEmbeds();
            }
        };
    };

    loadTallyEmbed();
});
</script>

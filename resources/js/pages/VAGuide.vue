<script setup>
import Main from '../layouts/Main.vue';
import Row from '../components/Row.vue';
import Heading from '../components/Heading.vue';
import CTA from '../blocks/CTA.vue';
import VAGuideContent from '../../md/VAGuideContent.md';
</script>

<template>
    <Main>
        <Row background="white" header="true">
            <div class="mx-auto">
                <Heading size="2xl" class="text-center text-heading">The Ultimate Guide to Virtual Assistants</Heading>
                <Heading size="span" class="max-w-2xl mx-auto text-center">Expertise,
                    efficiency, and
                    cost-effective recruiting solutions as you grow your staff overseas.

                </Heading>

                <article class="my-12 max-w-5xl max-h-[96] mx-auto prose xl:prose-lg">
                    <VAGuideContent />
                </article>
            </div>
        </Row>
        <CTA />

    </Main>
</template>


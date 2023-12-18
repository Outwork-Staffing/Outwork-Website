<script setup>
import Main from '../Layouts/Main.vue';
import Row from '../Components/Row.vue';
import Heading from '../Components/Heading.vue';
import Button from '../Components/Button.vue';
import CTA from '../Blocks/CTA.vue';
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
                <img class="w-full rounded-xl max-w-3xl mt-6 mb-12 mx-auto"
                    src="https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto" />
                <article class="my-12 max-w-5xl max-h-[96] mx-auto prose lg:prose-xl">
                    <VAGuideContent />
                </article>
            </div>
        </Row>
        <CTA />

    </Main>
</template>


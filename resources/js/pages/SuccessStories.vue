<script setup>
import TestimonialLogoCloud from "../blocks/TestimonialLogoCloud.vue";
const props = defineProps({
    stories: Array,
    logos: Array
});
</script>

<template>
    <Main>
        <Row background="white" header="false">
            <div class="max-w-4xl mx-auto text-center">
                <Heading size="xl" class="text-center text-heading">Global Recruitment Success Stories</Heading>
                <p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6">Discover how companies are leveraging
                    global talent in major ways</p>

            </div>
            <TestimonialLogoCloud :logos="logos" />
        </Row>
        <Row>
            //quote
            quote
        </Row>

        <Row background="light">
            <div class="mb-12">
                <Heading size="xl" class="text-center mb-6 text-heading">Latest Success Stories</Heading>
            </div>

            <StoryCards :stories="stories" class="my-6" />
        </Row>
        <CTA />

    </Main>
</template>

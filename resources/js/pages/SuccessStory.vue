<script setup>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const props = defineProps({
    story: Array,
    salary: Array,
});
let story = props.story[0];
</script>

<template>
    <Main>
        <Row background="dark" header="false" class="py-12">
            <Fifty imageLocation="right" :imageUrl="story.image">
                <template #left>
                    <div class="grid gap-4">
                        <div>
                            <span class="bg-white rounded-xl p-2 text-primary font-bold">Success Story</span>
                        </div>
                        <Heading size="lg" class="text-4xl text-white leading-snug mb-0"
                            style="margin-bottom: 0px !important;"> {{ story.title }}</Heading>
                        <p class="text-xl text-white">{{ story.desc }}</p>
                    </div>
                </template>
            </Fifty>
        </Row>
        <Row v-if="story.intro != null">
            <div class="prose text-lg leading-9 max-w-3xl mx-auto">
                <RichTextRenderer :document="story.intro" />

            </div>
        </Row>
        <SavingsRow :hiredSalary="salary.hiredSalary" :usSalary="salary.usSalary" :title="story.jobTitle" />
        <Row v-if="story.content != null">
            <div class="prose text-lg leading-9 max-w-3xl mx-auto">
                <RichTextRenderer :document="story.content" />
            </div>
        </Row>
        <CTA />
    </Main>
</template>

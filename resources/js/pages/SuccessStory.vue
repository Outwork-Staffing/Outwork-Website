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
        <Row background="light" header="false" class="py-12">
            <Fifty imageLocation="right" :imageUrl="story.image">
                <template #left>
                    <div class="grid gap-4">
                        <div>
                            <span class="bg-white rounded-xl p-2 text-primary font-bold">Success Story</span>
                        </div>
                        <Heading size="lg" class="text-4xl text-heading leading-snug mb-0"
                            style="margin-bottom: 0px !important;"> {{ story.title }}</Heading>
                        <p class="text-xl text-body">{{ story.desc }}</p>
                    </div>
                </template>
            </Fifty>
        </Row>
        <Row>
            <div class="prose max-w-4xl mx-auto">
                introduction
            </div>
        </Row>
        <SavingsRow :hiredSalary="salary.hiredSalary" :usSalary="salary.usSalary" :title="story.jobTitle" />
        <Row>
            <div class="prose max-w-4xl mx-auto">
                <RichTextRenderer :document="story.content" />
            </div>
        </Row>
        <CTA />
    </Main>
</template>

<script setup>
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
        <SavingsRow :hiredSalary="salary.hiredSalary" :usSalary="salary.usSalary" />
        <CTA />
    </Main>
</template>

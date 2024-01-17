<script setup>
const props = defineProps({
    story: Array
});
let story = props.story[0];
</script>

<template>
    <Main>
        <Row background="white" header="false">
            <div class="max-w-4xl mx-auto text-center">
                <Heading size="2xl" class="text-center text-heading"> {{ story.title }}</Heading>

            </div>

        </Row>
    </Main>
</template>

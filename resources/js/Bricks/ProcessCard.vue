<script setup>
const props = defineProps({
    title: String,
    number: String,
})
</script>
<template>
    <div>
        <div class="flex gap-1">
            <p class="text-primary uppercase text-3xl font-bold">0{{ number }}.</p>
            <h6 class="font-bold text-heading text-3xl">{{ title }}</h6>

        </div>
        <hr class="my-4">
        <div class="text-gray-700">
            <slot />
        </div>

    </div>
</template>
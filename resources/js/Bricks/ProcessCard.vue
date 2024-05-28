<script setup>
const props = defineProps({
    title: String,
    number: String,
})
</script>
<template>
    <div class="rounded-xl ">
        <div class="flex gap-1 mb-4">
            <p class="text-primary uppercase text-3xl font-bold">0{{ number }}.</p>
            <h6 class="font-bold text-heading text-3xl">{{ title }}</h6>

        </div>
        <hr class="my-4 text-primary border-primary border-2 w-[40%]">
        <div class="text-gray-700">
            <slot />
        </div>

    </div>
</template>
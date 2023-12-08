<script setup>
const props = defineProps({
    headline: String
});

</script>

<template>
    <div v-bind="$attrs" class="card bg-white border-2">

        <div class="rounded-lg bg-secondary p-2 min-h-4 min-w-4 ">
            <slot name="icon"></slot>
        </div>
        <span class="text-heading font-bold text-2xl">
            {{ headline }}
        </span>
        <p class="body-paragraph">
            <slot name="body">



            </slot>
        </p>
    </div>
</template>

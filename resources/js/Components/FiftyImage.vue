<template>
    <div class="relative lg:py-0">
        <div class="relative mx-auto sm:max-w-3xl lg:max-w-none">
            <div class="relative rounded-2xl shadow-xl overflow-hidden">
                <img class="w-full object-cover max-h-[24rem]" loading="lazy" :src="imageUrl">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imageUrl: String
});
</script>
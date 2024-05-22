<template>
    <div class="relative lg:py-0">
        <div class="relative mx-auto sm:max-w-3xl lg:max-w-none">
            <div class="relative rounded-2xl shadow-xl overflow-hidden">
                <img class="w-full object-cover max-h-[24rem]" :loading="lazyLoad ? 'lazy' : 'auto'" :src="imageUrl"
                    :alt="altText">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imageUrl: String,
    altText: String,
    lazyLoad: {
        type: Boolean,
        default: true
    },

});
</script>
<script setup>
const props = defineProps({
    image: String,
    checkmark: {
        type: Boolean,
        default: true
    },
    title: String,
    desc: String
})
</script>
<template>
    <div class="rounded-xl  shadow-xl  relative image-card min-h-96 w-full bg-center bg-no-repeat !bg-cover overflow-hidden"
        :style="`--image-url: url(${image})`">
        <div class="bottom-overlay"></div>
        <div class="top-overlay "></div>

        <div class="absolute inset-0 flex flex-col justify-between px-8 py-6 z-10">
            <span class="text-dark text-center mx-auto font-semibold text-4xl"> {{ title }}</span>
            <span class="text-white text-center mx-auto "> {{ desc }}</span>

        </div>
    </div>
</template>

<style scoped>
.top-overlay {
    @apply bg-gradient-to-b from-secondary to-transparent blur-md;
    position: absolute;
    z-index: 1;
    bottom: auto;
    width: 100%;
    height: 50%;
}

.bottom-overlay {
    position: absolute;
    z-index: 1;
    @apply bg-gradient-to-t from-dark to-transparent;
    width: 100%;
    height: 50%;
    position: absolute;
    top: auto;
    bottom: 0%;
    left: 0%;
    right: 0%;

}

.image-card {
    background: var(--image-url) center center no-repeat;
    z-index: 99;
}
</style>
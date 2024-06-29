<script setup>
import { computed } from 'vue'
const props = defineProps({
    dark: {
        type: Boolean,
        default: true
    }
});

const light_logo = '/mixed_color_full.png';
const dark_logo = '/logo.png';

const logo = computed(() => {
    return props.dark ? dark_logo : light_logo;
})
</script>
<template>
    <img :src="logo" />
</template>

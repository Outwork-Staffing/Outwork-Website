<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    menu: Array,
    dark: {
        type: Boolean,
        default: false
    }
});

const isScrolled = ref(false);

const handleScroll = () => {
    if (window.scrollY > 0) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>

    <div
        :class="['sticky top-0 z-50 flex items-center justify-between py-8 lg:py-5 px-6 lg:px-8', dark ? 'bg-secondary' : 'bg-dark']">
        <div class="flex lg:flex-1">
            <Logo class="h-12" :dark="dark" />
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <span v-for=" item  in  menu "
                :class="['font-semibold text-lg opacity-50 hover:opacity-100 transition cursor-pointer hover:text-primary', dark ? 'text-heading' : 'text-white']">
                {{ item.name }}

            </span>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button type="primary">Book a free consultation</Button>
        </div>
    </div>
</template>

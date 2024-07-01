<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    active_item: String,
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

const scrollToID = (id) => {

    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });



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
        :class="['sticky top-0 z-[500] flex items-center justify-between py-8 lg:py-5 px-6 lg:px-8', dark ? 'bg-secondary' : 'bg-dark']">
        <div class="flex lg:flex-1">
            <a href="/">
                <Logo class="h-12 cursor-pointer" :dark="dark" @click="scrollToID('overview')" />
            </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <span v-for=" item  in  menu " @click="scrollToID(item.id)"
                :class="['font-semibold text-lg opacity-50 hover:opacity-100 transition cursor-pointer hover:text-primary', dark ? 'text-heading' : 'text-white', active_item === item.name ? '!opacity-100' : '']">
                {{ item.name }}

            </span>
        </div>
        <div class=" lg:flex lg:flex-1 lg:justify-end">
            <Button class="!text-sm lg:text-lg" type="primary" @click="scrollToID('cta')">Book a free
                consultation</Button>
        </div>
    </div>
</template>

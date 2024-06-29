<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'A'
    }
});

const variants = [
    {
        id: 'A',
        header: 'Ready to get your time and focus back? Hire a virtual assistant!',
        body: "Are you feeling like your days are just a constant juggle between tasks? Maybe it feels like you’re always playing catch-up, never quite getting ahead. It’s like you're stuck in a loop of endless to- dos, and what you really need is a breather, a chance to focus on what really matters in your business.<br><br>That\’s exactly what we're here for. Book a free 20 minute meeting with our team to chat about hiring a virtual assistant and bringing focus back to your life. ",
        buttonText: 'Book a free call to learn more',
        buttonLink: '/start-hiring'
    },
    {
        id: 'B',
        header: 'Ditch the chaos - hire a virtual assistant.',
        body: "Don’t let the overwhelm of the never-ending to-do list hold you back. We’ll help you hire remote team members—for less—freeing you up to focus on growth.",
        buttonText: 'Start Interviewing',
        buttonLink: '/start-hiring'
    },
];

const currentVariant = computed(() => {
    return variants.find(variant => variant.id === props.variant);
});
</script>
<template>
    <div class="p-6 grid gap-3 rounded bg-secondary border border-primary">
        <h6 class="font-bold text-2xl mb-0">{{ currentVariant.header }}</h6>
        <div v-html="currentVariant.body"></div>
        <div class="mt-4">
            <Button :link="currentVariant.buttonLink">{{ currentVariant.buttonText }}</Button>
        </div>
    </div>
</template>
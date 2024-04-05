<template>
    <div :class="bgClass">
        <div
            :class="{ 'w-full  max-w-7xl mx-auto py-12 lg:py-24 px-6 lg:px-8': !header, 'w-full  max-w-7xl mx-auto pt-36 pb-12 sm:pt-36 px-6 lg:px-8': header }">
            <slot />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

const isShowing = ref(false);


export default {
    props: {
        background: {
            type: String,
            default: 'default',
            validator: function (value) {
                return ['default', 'green', 'light', 'dark', 'gradient'].includes(value);
            },
        },
        header: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        bgClass: function () {
            switch (this.background) {
                case 'green':
                    return 'bg-primary';
                case 'light':
                    return 'bg-secondary'
                case 'dark':
                    return 'bg-dark'
                case 'gradient':
                    return 'gradient'
                default:
                    return 'bg-white';
            }
        }
    },
}
</script>

<style scoped>
.gradient {
    @apply bg-gradient-to-t from-secondary to-white;
}
</style>
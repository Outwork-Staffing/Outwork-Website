<template>
    <div :class="bgClass">
        <TransitionRoot appear :show="isShowing" enter="transition-opacity duration-75" enter-from="opacity-0"
            enter-to="opacity-100" leave="transition-opacity duration-150" leave-from="opacity-100" leave-to="opacity-0">
            <div class=" w-full  max-w-7xl mx-auto py-24 sm:py-32 px-6 lg:px-8">
                <slot />
            </div>
        </TransitionRoot>
    </div>
</template>

<script>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const isShowing = ref(false);


export default {
    props: {
        background: {
            type: String,
            default: 'default',
            validator: function (value) {
                return ['default', 'option1', 'option2'].includes(value);
            },
        },
    },
    computed: {
        bgClass: function () {
            switch (this.background) {
                case 'dark':
                    return 'bg-secondary';
                case 'light':
                    return 'bg-primary'
                default:
                    return 'bg-white';
            }
        }
    },
}
</script>

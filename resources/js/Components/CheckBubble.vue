<template>
    <div class="">
        <div class="bg-secondary my-4 rounded-2xl py-2 px-4 flex" v-for="(item, index) in items" :key="index">
            <CheckCircleIcon class="text-primary h-8 mr-4" />
            <span class="text-headings font-bold text-xl">{{ item }}</span>
        </div>
    </div>
</template>
<script>

import { CheckCircleIcon } from '@heroicons/vue/24/solid';


export default {
    props: {
        items: {
            type: Array,
            default: ['123', '123', 'Drink']
        }
    },
    components: {
        CheckCircleIcon
    }
}
</script>

s
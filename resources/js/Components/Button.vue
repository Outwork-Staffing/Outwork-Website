
<template>
    <div v-if="InertiaLink">
        <a :href="InertiaLink" :target="newTab ? '_blank' : ''" :class="`btn btn-${type}`">
            <slot></slot>
            <ChevronRightIcon class="text-link-arrow" v-if="type === 'text'" />

        </a>
    </div>

    <template v-else>
        <a :href="link" :target="newTab ? '_blank' : ''" :class="`btn btn-${type}`">
            <slot></slot>
            <ChevronRightIcon class="text-link-arrow" v-if="type === 'text'" />
        </a>
    </template>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import { ChevronRightIcon } from '@heroicons/vue/24/outline';
export default {
    props: {
        type: {
            type: String,
            default: 'primary',
            validator: function (value) {
                return ['primary', 'secondary', 'text', 'white'].indexOf(value) !== -1;
            },
        },
        link: {
            type: String,
            default: null,
        },
        newTab: {
            type: Boolean,
            default: false,
        },
        InertiaLink: {
            type: String,
            default: false,
        },
    },
    components: {
        Link,
        ChevronRightIcon,
    }
};
</script>

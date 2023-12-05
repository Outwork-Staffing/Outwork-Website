<template>
    <component :is="tag" v-bind="$attrs" :class="[sizeClass] + ' mb-6'">
        <slot />
    </component>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            default: 'm',
            validator: function (value) {
                return ['s', 'm', 'lg', 'xl'].includes(value);
            },
        },
        tag: {
            type: String,
            default: 'h1',
            validator: function (value) {
                return ['h1', 'h2', 'h3'].includes(value);
            },
        },
    },
    computed: {
        sizeClass: function () {
            switch (this.size) {
                case 's':
                    return 'text-md';
                case 'm':
                    return 'text-xl'
                case 'lg':
                    return 'text-2xl';
                case 'xl':
                    return 'text-5xl font-bold';
                case '2xl':
                    return 'text-6xl font-bold'
                default:
                    return 'text-xl';
            }
        }
    },

};
</script>

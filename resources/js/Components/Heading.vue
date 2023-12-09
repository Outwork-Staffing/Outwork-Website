<template>
    <component :is="tag" v-bind="$attrs" :class="[sizeClass] + ' mb-6'" v-motion :initial="{ opacity: 0, y: 100 }"
        v-if="tag === 'h1'" :enter="{ opacity: 1, y: 0, scale: 1 }" :variants="{ custom: { scale: 2 } }" :delay="200">
        <slot />
    </component>

    <component :is="tag" v-bind="$attrs" :class="[sizeClass] + ' mb-6'" v-motion v-else>
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
                return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
            },
        },
    },
    computed: {
        sizeClass: function () {
            switch (this.size) {
                case 'span':
                    return 'text-lg font-bold uppercase text-primary';
                case 'm':
                    return 'text-xl text-heading font-bold'
                case 'lg':
                    return 'text-2xl text-heading font-bold';
                case 'xl':
                    return 'text-3xl md:text-5xl text-heading font-bold';
                case '2xl':
                    return 'text-4xl text-heading md:text-6xl font-bold'
                default:
                    return 'text-xl';
            }
        }
    },

};
</script>

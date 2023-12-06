
<template>
    <button :class="`btn btn-${type}`" :href="link" :target="newTab ? '_blank' : '_self'">
        <slot></slot>
    </button>
</template>

<script>
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
            default: '#',
        },
        newTab: {
            type: Boolean,
            default: false,
        },
        newInertiaLink: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<template>
    <div class="mx-auto max-w-7xl ">
        <div class="grid grid-cols-1 gap-x-16 gap-y-6 lg:gap-y-12 lg:grid-cols-2 lg:items-center">
            <div :class="['block relative sm:py-16 md:py-0',
                imageMobile === 'false' && imageLocation === 'left' ? 'hidden lg:block' : 'block']">
                <div v-if="imageLocation === 'left' && imageUrl" :class="['block relative lg:py-0']">
                    <FiftyImage :imageUrl="imageUrl" style="width: 100%; height: auto;" :lazyLoad="lazyLoad"
                        :altText="altText" />
                </div>
                <template v-else>
                    <slot name="left">

                    </slot>
                </template>

            </div>
            <div :class="['block relative sm:py-16 md:py-0',
                imageMobile === 'false' && imageLocation === 'right' ? 'hidden lg:block' : 'block']">
                <div v-if="imageLocation === 'right' && imageUrl" :class="['block relative lg:py-0']">
                    <FiftyImage :imageUrl="imageUrl" style="width: 100%; height: auto;" :lazyLoad="lazyLoad"
                        :altText="altText" />
                </div>
                <template v-else>
                    <slot name="right"></slot>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import FiftyImage from '../Components/FiftyImage.vue';
export default {
    props: {
        imageUrl: String,
        imageLocation: {
            type: String,
            default: 'left',
            validator: function (value) {
                return ['right', 'left'].includes(value);
            },
        },
        imageMobile: {
            type: Boolean,
            default: true
        },
        mobileImageStack: {
            type: String,
            validator: function (value) {
                return ['top', 'bottom'].includes(value);
            },
        },
        lazyLoad: {
            type: Boolean,
            default: true
        },
        altText: {
            type: String,
            default: null
        }
    },
    components: {
        FiftyImage
    }
}

</script>
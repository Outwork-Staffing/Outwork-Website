<template>
    <div class="positions pt-8" :class="{ 'white-fade': fadeToWhite }">
        <div class="positions-slide">
            <div v-for="position in roles" :key="position.name"
                class="relative inline-block h-[175px] w-[175px] mr-6 mb-4 rounded-3xl overflow-hidden">
                <div class="h-full w-full bg-cover bg-center rounded"
                    :style="{ backgroundImage: `url(${position.img})` }">
                    <div class="absolute inset-0 bg-dark opacity-80 z-10 "></div>
                    <p class="position-title font-bold text-xl mb-2">
                        {{ position.title }}
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        roles: Array,
        fadeToWhite: {
            type: Boolean,
            default: false
        }

    },

    mounted() {
        console.log('info mounted');
        var copy = document.querySelector(".positions-slide").cloneNode(true);
        document.querySelector(".positions").appendChild(copy);
    },
};
</script>

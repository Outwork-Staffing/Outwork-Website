<script setup>
let logos = ['avanti.svg', 'primepay.png', 'swivl.svg', 'attune.svg', 'truesafe.webp', 'sparx.png', 'tcc.png', 'eight.svg', 'encore.png', 'insight.png', 'wil.webp'];
</script>
<template>
    <div class="logos pt-8" :class="{ 'white-fade': fadeToWhite }">
        <div class="logos-slide">
            <div v-for="logo in logos" :key="logo" class="inline-block mr-8 mb-4 rounded-3xl">
                <img :src="'/logos/' + logo" alt="Logo" class="block">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        logos: Array,
        fadeToWhite: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        var copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector(".logos").appendChild(copy);
    }
};
</script>

<style scoped>
.logos {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
}

.logos-slide {
    display: inline-block;
    animation: slide 6s infinite linear;
}

@keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}

.logos:hover .logos-slide {
    animation-play-state: paused;
}

@media (max-width: 768px) {
    .logos-slide {
        animation: slide 30s infinite linear;
    }
}

.logos:before,
.logos:after {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100px;
    content: "";
    z-index: 2;
}

.logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(255, 255, 255, 100));
}

.logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255, 100));
}

@media (max-width: 768px) {

    .logos:before,
    .logos:after {
        width: 33px;
    }
}

.white-fade:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(255, 255, 255, 50)) !important;
}

.white-fade:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255, 50)) !important;
}
</style>

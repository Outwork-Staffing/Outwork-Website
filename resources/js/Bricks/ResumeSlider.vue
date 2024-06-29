<template>
    <Carousel>
        <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'



const slides = ref([...Array(10).keys()].map(n => n + 1));
</script>

<style>
.carousel__item {
    @apply bg-red-500 rounded-xl border;
    aspect-ratio: 16/9 !important;
    width: 100%;

}



.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.carousel__prev,
.carousel__next {

    box-sizing: content-box;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 0;
    cursor: pointer;
    margin: 0 10px;
    top: 50%;
    transform: translateY(-50%);
}

.carousel__next--disabled,
.carousel__prev--disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.carousel__prev {
    left: -50;
}

.carousel__next {
    right: 0;
}



@media (hover: hover) {

    .carousel__prev:hover,
    .carousel__next:hover {
        color: var(--vc-nav-color-hover);
    }
}
</style>
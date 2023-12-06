<script setup>
import Heading from "../Components/Heading.vue";
</script>
<template>
    <Heading size="2xl" tag="h2" class="text-center">
        Ready to get started hiring?
    </Heading>
    <p class="body-paragraph max-w-4xl text-center mx-auto">Say goodbye to the stress of hiring global
        talent. Use the form below to
        schedule a
        call with our team and learn how we can help you hire the best talent. Our email is also below if you would
        prefer that.</p>
    <div class="positions">
        <div class="positions-slide">
            <div v-for="position in roles" :key="position.name" class="relative inline-block h-[150px] w-[150px] mr-6 mb-4">
                <div class="h-full w-full bg-cover bg-center" :style="{ backgroundImage: `url(${position.img})` }">
                    <div class="absolute inset-0 bg-dark opacity-80"></div>
                    <p
                        class="absolute w-full bottom-0 left-0 right-0 text-white text-center p-2 font-bold text-xl overflow-hidden break-words">
                        {{ position.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template >
<script>
const positions = [
    {
        'name': 'Software Beta',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Engineer',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Alpha',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Male',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Beta',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Engineer',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Alpha',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Male',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Beta',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Engineer',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Alpha',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Male',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Beta',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Engineer',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Alpha',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    }, {
        'name': 'Software Male',
        'img': 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp'
    },
];
export default {
    props: {
        roles: Array
    },
    data() {
        return {
            positions: positions
        };
    },
    mounted() {
        console.log('info mounted');
        var copy = document.querySelector(".positions-slide").cloneNode(true);
        document.querySelector(".positions").appendChild(copy);
    },
};
</script>
<style scoped>
@keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}

.positions {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
}

.positions:before,
.positions:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
}

.positions:before {
    left: 0;
}

.positions:after {
    right: 0;
}

.positions:hover .positions-slide {
    animation-play-state: paused;
}

.positions-slide {
    display: inline-block;
    animation: 35s slide infinite linear;
}

.positions:before {
    left: 0;
    background: linear-gradient(to left, rgba(238, 248, 242, 0), rgb(238, 248, 242, 100));
}

.positions:after {
    right: 0;
    background: linear-gradient(to right, rgba(238, 248, 242, 0), rgb(238, 248, 242, 100));
}
</style>
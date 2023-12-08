<script setup>
import Heading from "../Components/Heading.vue";
</script>
<template>
    <Heading size="2xl" tag="h2" class="text-center">
        Recruit skilled people for any task.
    </Heading>
    <p class="body-paragraph max-w-xl text-center mx-auto ">Save time and money by growing your team outside of the
        United
        States and find skilled professionals for any project or business.</p>
    <div class="positions pt-8">
        <div class="positions-slide">
            <div v-for="position in roles" :key="position.name"
                class="relative inline-block h-[175px] w-[175px] mr-6 mb-4 rounded-3xl overflow-hidden">
                <div class="h-full w-full bg-cover bg-center rounded" :style="{ backgroundImage: `url(${position.img})` }">
                    <div class="absolute inset-0 bg-dark opacity-80 z-10 "></div>
                    <p class="position-title font-bold text-xl mb-2">
                        {{ position.title }}
                    </p>

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
    height: 100%;
    width: 100px;
    content: "";
    z-index: 2;
}

@media (max-width: 768px) {

    .positions:before,
    .positions:after {
        width: 33px;
    }
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
    animation: 60s slide infinite linear;
}

.positions:before {
    left: 0;
    background: linear-gradient(to left, rgba(238, 248, 242, 0), rgb(238, 248, 242, 100));
}

.positions:after {
    right: 0;
    background: linear-gradient(to right, rgba(238, 248, 242, 0), rgb(238, 248, 242, 100));
}

.position-title {
    position: absolute;
    bottom: 0;
    /* Aligns text to the bottom */
    width: 100%;
    /* Ensures text is within the container */
    text-align: center;
    color: white;
    padding: 8px;
    /* Adjust padding as needed */
    z-index: 20;
    word-wrap: break-word;
    /* Wraps long text */
    text-overflow: ellipsis;
    /* Adds ellipsis for overflowed text */
    white-space: normal;
    /* Allows text wrapping */

}
</style>
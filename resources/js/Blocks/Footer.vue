<template>
    <Row background="dark">
        <nav class="-mb-6 columns-1 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            <div v-for="item in navigation.main" :key="item.name" class="pb-6">
                <a :href="item.href"
                    class="text-md font-semibold leading-6 text-white hover:underline hover:decoration-solid decoration-primary transition-custom decoration-2">{{
                        item.name }}</a>
            </div>
        </nav>
        <p class="text-md font-semibold leading-6 text-white text-left lg:text-center mt-10">&copy; {{ new
            Date().getFullYear() }}
            Outwork Staffing. <br>All rights

            reserved.
        </p>
    </Row>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import Row from '../Components/Row.vue';

const navigation = {
    main: [
        { name: 'Why Outsource?', href: '/why-outsource' },
        {
            name: 'Services', href: '/services'
        },
        { name: 'About Us', href: '/about' },

    ],

}
</script>

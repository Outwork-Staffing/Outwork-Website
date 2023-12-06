<script setup>
import Row from '../Components/Row.vue';
import Fifty from './Fifty.vue';
import Heading from '../Components/Heading.vue';
import Button from '../Components/Button.vue';
</script>
<template>
    <Row background="green">
        <Fifty imageLocation="right"
            imageUrl="https://ik.imagekit.io/outwork/default-image.jpg?updatedAt=1701878672671&tr=w-1080%2Ch-566%2Cfo-auto">
            <template #left>
                <Heading tag="h3" size="xl" class="text-white">Book a call to learn more or get started.</Heading>
                <p class="mb-6 text-lg text-white">We are eager to work with you. Book a call with our team and discover
                    how our
                    global staffing can help you drive growth. <br><br>Let's talk about your staffing needs today.</p>
                <Button type="white">Get Started Hiring</Button>
            </template>
        </Fifty>
    </Row>
</template>
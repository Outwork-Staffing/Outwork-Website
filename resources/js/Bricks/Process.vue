<script setup>
import Heading from '../Component/Heading.vue';
const steps = {
    '1': {
        'title': 'Kickoff',
        'body': 'Once you book a call, we will meet and get all relevant information from you. <br><br>We will finalize a job description and cover all of the details regarding your business.'
    },
    '2': {
        'title': 'Search',
        'body': 'Our team will take the job description and start to source candidates from our database and job boards. <br><br>We will interview candidates and test them for the relevant requirements.'
    }, '3': {
        'title': 'Presentation',
        'body': 'Once we have found a few candidates that we think you will like, we will introduce them to you and setup interviews. You can provide feedback to us on them or you can decide to move forward with one of them.'
    }, '4': {
        'title': 'Placement',
        'body': 'And just like that you have a new team member! Woo hoo! Your new team member will be ready to start right away and you get to work.'
    },
};
</script>
<template>
    <Heading size="span" tag="h6" class="text-center">
        OUR PATH FOR GROWING YOUR TEAM
    </Heading>
    <Heading size="xl" tag="h2" class="text-center mb-12">
        What you can expect from us
    </Heading>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div v-for="(step, index) in Object.values(steps)" :key="index" class="card block bg-white">
            <div class="grid">
                <span class="text-md uppercase font-bold text-primary mb-2">Step {{ index + 1 }}</span>
                <div class="text-3xl text-heading font-bold" v-html="step.title"></div>
            </div>
            <div class="body-paragraph" v-html="step.body"></div>
        </div>
    </div>
</template>
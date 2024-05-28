<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import Fifty from '../../Bricks/Fifty.vue';
import SampleResumes from '../../Bricks/SampleResumes.vue';
import FounderLetter from '../../Components/FounderLetter.vue';
import ProcessCard from '../../Bricks/ProcessCard.vue';

const props = defineProps({
    resumes: Object,
    testimonials: Object,
    success_stories: Object,


})

const menu = [
    {
        name: 'Overview',
        id: 'overview',
    },
    {
        name: 'Process',
        id: 'process',

    },
    {
        name: 'Case Studies',
        id: 'case-studies',
    },
    {
        name: 'FAQs',
        id: 'FAQs',
    },
];

const active_item = ref('overview');
const useIntersection = (rowName) => {
    const target = ref(null);
    const targetIsVisible = ref(false);

    const { stop } = useIntersectionObserver(
        target,
        ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                active_item.value = rowName;
                targetIsVisible.value = true;
            } else {
                targetIsVisible.value = false;
            }
        },
        {
            rootMargin: '0px 0px 0px 0px', // Adjust the top margin to trigger when the element is in the top 50% of the screen
            threshold: .5// Trigger as soon as any part of the element is visible
        }
    );

    return { target, targetIsVisible };
};
const overview = useIntersection('Overview');
const process = useIntersection('Process');
const caseStudies = useIntersection('Case Studies');
const faqs = useIntersection('FAQs');
const cta = useIntersection('CTA');

const scrollToID = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
};

function computeSubTitle($type, $industry) {
    if ($type && $industry) {
        return $type + ' Hire';
    } else {
        if ($type) {
            return $type;
        } else {
            return $industry;
        }
    }
}

</script>
<template>
    <Landing>
        <FixedMenu :menu="menu" :dark="false" class="z-[200]" :active_item="active_item" />
        <Row background="dark" :ref="overview.target" id="overview">
            <Fifty>
                <template #left>
                    <div class="grid gap-8">
                        <Heading tag="h1" size="xl" class="text-white !leading-tight !mb-0">This is super high-quality
                            hero
                            text.
                        </Heading>
                        <p class="text-secondary text-lg leading-9">Sub text - also extremely important.</p>
                        <div>
                            <Button @click="scrollToID('cta')">Book a free call</Button>
                        </div>

                    </div>
                </template>
                <template #right>
                    Righties
                </template>
            </Fifty>
        </Row>
        <Row>
            Customer ID Row
        </Row>
        <Row class="relative" background="dark">
            <Heading size="xl" class="text-white text-center pb-12">Outcome Driven International Recruiting</Heading>
            <div class="grid gap-8 grid-cols-1 lg:grid-cols-3">
                <ImageCard
                    image="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="We will write a job description."
                    desc="Office Handset Call Center Apprentice Young Executive Young Professional Apprentership United Kingdom " />
                <ImageCard
                    image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Run 200+ Interviews For You"
                    desc="Office Handset Call Center Apprentice Young Executive Young Professional Apprentership United Kingdom " />
                <ImageCard
                    image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Quality Account Managmenet"
                    desc="Office Handset Call Center Apprentice Young Executive Young Professional Apprentership United Kingdom " />
            </div>
            <div class="overhang bg-gray-50"></div>
        </Row>
        <Row background="gray" class="" :ref="process.target" id="process">
            <Heading size="xl" class="text-heading pb-12">The Outwork Staffing Process</Heading>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ProcessCard title="Free Discovery Call" number="1" class="bg-white rounded border p-4">Once you book a
                    call, we will meet and get all relevant information from you.

                    We will finalize a job description and cover all of the details regarding your business.
                </ProcessCard>
                <ProcessCard title="Unqiue Talent Search" number="2" class="bg-white rounded border p-4">Share your
                    Our team will take the job description and start to source candidates from our database and job
                    boards.

                    We will interview candidates and test them for the relevant requirements.
                </ProcessCard>
                <ProcessCard title="Candidate Presentation" number="3" class="bg-white rounded border p-4">
                    Once we have found a few candidates that we think you will like, we will introduce them to you and
                    setup interviews. You can provide feedback to us on them or you can decide to move forward with one
                    of them.
                </ProcessCard>
                <ProcessCard title="Kickoff & Placement" number="4" class="bg-white rounded border p-4">
                    And just like that you have a new team member! Woo hoo! Your new team member will be ready to start
                    right away and you get to work.
                </ProcessCard>


            </div>
        </Row>
        <Row class="relative overflow-hidden" :ref="caseStudies.target" id="case-studies">
            <div class="pb-12">
                <Heading size="span" tag="h6" class="">
                    Testimonials
                </Heading>
                <Heading size="xl" class="">Don't just take our word for it.</Heading>
                <p class="text-sm text-gray-500">Relationships are the core driver of Outwork Staffing.</p>
            </div>

            <div class="grid grid-cols-1  lg:grid-cols-2 gap-8">


                <div class="bg-white rounded-t  flex flex-col justify-between " v-for="item in testimonials">
                    <blockquote class=" text-gray-900 p-6 border-l border-t border-r flex-grow rounded-t">
                        <p>"{{ item.quote }}"</p>
                    </blockquote>
                    <div class="flex gap-2 p-4 rounded-b border bg-gray-50 ">
                        <img :src="item.img" alt="" class="h-12 w-12 rounded-full bg-gray-50" v-if="item.img">
                        <div class="grid gap-0 grid-cols-1">
                            <p class="text-lg font-bold">{{ item.name }}</p>
                            <p class="text-sm text-primary font-semibold">{{ item.title }}</p>
                        </div>
                    </div>

                </div>
            </div>

            <SampleResumes :resumes="resumes" class="mt-36" />
        </Row>

        <Row background="light">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="story in success_stories" :key="story.title" class="transition hover:scale-[1.025]">
                    <a :href="'/success-stories/' + story.slug" target="_blank" class="h-full">
                        <article class="bg-white rounded border border-gray-200">
                            <div class="blog-post">
                                <div class="image-part bg-cover bg-center rounded hidden md:block"
                                    :style="{ backgroundImage: 'url(' + story.img + ')' }">
                                </div>
                                <div class="p-4 grid gap-1">
                                    <h2 class="text-md font-bold">{{ story.title }}</h2>
                                    <span class="text-sm leading-6 rounded-xl text-primary font-bold"> {{
            computeSubTitle(story.type,
                story.industry) }}</span>
                                </div>
                            </div>
                        </article>
                    </a>
                </div>
            </div>
        </Row>
        <Row>
            Gurantee
        </Row>
        <Row :ref="cta.target" id="cta" class="scroll-mt-[10vh]">
            <Heading size="2xl" tag="h1">Book a free call with us</Heading>
            <SavvyCal class="" />
        </Row>
        <Row background="gray">
            <FounderLetter />
        </Row>
        <Row background="white" :ref="faqs.target" id="FAQs">
            <Heading size="xl" class="text-center">Frequently Asked Questions</Heading>

            <FAQ />
        </Row>

    </Landing>
</template>
<style>
body {
    @apply bg-dark;
}
</style>

<style scoped>
.overhang {
    height: 17rem;
    z-index: 0;
    position: absolute;
    top: auto;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.image-part {
    height: 200px;
    /* Top half */
}
</style>

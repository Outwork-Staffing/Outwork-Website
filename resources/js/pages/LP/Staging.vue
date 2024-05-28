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

const roles = [
    {
        title: 'Virtual Assistant',
        salary: '$1200'
    },
    {
        title: 'Customer Support Agent',
        salary: '$1500'


    },
    {
        title: 'Sales Representative',
        salary: '$1500'

    },
    {
        title: 'Marketing Assistant',
        salary: '$1700'

    },
    {
        title: 'Operations Coordinator',
        salary: '$1500'

    },
    {
        title: 'Graphic/Video Designer',
        salary: '$1700'

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
        return $type + ' Placement';
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
                        <Heading tag="h1" size="xl" class="text-white !leading-tight !mb-0 text-balance">It's how
                            companies find
                            elite talent overseas.
                        </Heading>
                        <p class="text-secondary text-lg leading-9 text-balance">Outwork Staffing helps you find and
                            hire quality
                            international talent. Save 80% on salaries and revolutionize your workforce.</p>
                        <div>
                            <Button @click="scrollToID('cta')">Book a free consultation</Button>
                        </div>

                    </div>
                </template>
                <template #right>
                    Righties
                </template>
            </Fifty>
        </Row>
        <Row>
            <Fifty class="mb-24">
                <template #right class="">
                    <div>

                        <Heading size="span" class="text-center !leading-tight !capitalize">Popular Roles
                        </Heading>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="rounded border p-4 grid gap-1 bg-gray-50" v-for="role in roles">
                                <span class="font-bold text-lg text-heading"> {{ role.title }}</span>
                                <span class="text-sm"> Starting at {{ role.salary }}/month</span>
                            </div>
                        </div>

                    </div>
                </template>
                <template #left class="">
                    <Heading size="xl" class="text-left text-balance !leading-tight">Finally, you too can hire quality
                        <span class="brand-underline"> talent overseas.</span>
                    </Heading>
                    <p class="mb-6">You are overwhelmed and know you need to expand your team to support your growing
                        business, but
                        you don’t think you have the budget to hire full-time employees.</p>
                    <p>With our recruiting solutions, you can hire highly skilled and experienced talent overseas for a
                        fraction of the cost, freeing up your time and resources.</p>
                </template>
            </Fifty>
            <div class="bg-white ">
                <div class="max-w-7xl mx-auto text-center bg-white">
                    <p class="text-sm text-gray-500 mb-8">Trusted by solo founders, thousand person enterprises, and
                        everyone in
                        between.
                    </p>
                    <TestimonialLogoCloud :logos="logos" class="white-fade" />
                </div>

            </div>
        </Row>
        <Row class="relative" background="dark">
            <Heading size="xl" class="text-white text-center pb-12">Outcome Driven International Recruiting</Heading>
            <div class="grid gap-8 grid-cols-1 lg:grid-cols-3">
                <ImageCard
                    image="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Our Proprietary Managed Process"
                    desc="Our elite team of recruiters will write a job description, run interviews, and introduce you to the top three candidates." />
                <ImageCard
                    image="https://images.unsplash.com/photo-1554768804-50c1e2b50a6e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Pay $0 in Recurring Costs"
                    desc="You shouldn't pay recurring costs. What if you work with someone for 10 years? Don't pay us anything after the placement." />
                <ImageCard
                    image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Hire the Top 1% of Remote Talent"
                    desc="Exclusively meet the best of the best with Outwork Staffing. Our recruiters are some of the best in the world." />
            </div>
            <div class="overhang bg-gray-50"></div>
        </Row>
        <Row background="gray" class="" :ref="process.target" id="process">
            <Heading size="span" tag="h6" class="">
                What to expect
            </Heading>

            <Heading size="xl" class="text-heading pb-12">The Outwork Staffing Process</Heading>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
                <ProcessCard title="Free Discovery Call" number="1" class="">Book an obligation-free discovery call and
                    chat
                    with our team about the role you are looking to fill. Our team will take notes, ask questions, and
                    write a
                    job description to match the needs of your company.
                </ProcessCard>
                <ProcessCard title="Unique Talent Search" number="2" class="">We will begin a unique search for talent
                    based on
                    the job description. Outwork Staffing doesn't operate out of a pool of candidates - our recruiters
                    run a
                    dedicated search for each open role.
                </ProcessCard>
                <ProcessCard title="Candidate Presentation" number="3" class="">
                    You will get to meet the top three candidates from our talent search. You will get to see their
                    resume, meet
                    them in an interview, and get to ask questions. Recruiters will sit with you through this process.
                </ProcessCard>
                <ProcessCard title="Kickoff & Placement" number="4" class="">
                    Based on the Candidate Presentation, you can hire the best candidate for your role. You will only
                    pay a one-time hiring fee — and that is it! Our placement guarantee covers them for 6 months. We
                    will find
                    you someone else within 6 months for free if you aren't satisfied.
                </ProcessCard>


            </div>
        </Row>
        <Row class="relative overflow-hidden" :ref="caseStudies.target" id="case-studies">
            <div class="pb-12 text-center">
                <Heading size="span" tag="h6" class=" text-center !mb-2">
                    Testimonials
                </Heading>
                <Heading size="xl" class=" text-center !mt-0">Don't just take our word for it.</Heading>
            </div>

            <div class="grid grid-cols-1  lg:grid-cols-2 gap-8">


                <div class="bg-white rounded-t  flex flex-col justify-between " v-for="item in testimonials">
                    <div class="p-6 border-l border-t border-r flex-grow rounded-t flex flex-col gap-4">
                        <div class="flex gap-4">
                            <img :src="item.img" alt="" class="h-12 w-12 rounded-full bg-gray-50" v-if="item.img">
                            <div class="grid gap-0 grid-cols-1">
                                <p class="text-lg font-bold">{{ item.name }}</p>
                                <p class="text-sm text-primary font-semibold">{{ item.title }}</p>
                            </div>
                        </div>

                        <blockquote class=" text-gray-900 text-md">
                            <p><span class="text-primary font-bold text-lg">"</span>{{ item.quote }}<span
                                    class="text-primary font-bold text-lg">"</span></p>
                        </blockquote>
                    </div>
                    <div class="p-6 flex gap-2 p-4 rounded-b border bg-gray-50 ">
                        {{ item.action_line }} </div>

                </div>
            </div>

        </Row>

        <Row background="light">
            <Heading size="xl" class="text-center pb-6">Recent Case Studies</Heading>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <a v-for="story in success_stories" :key="story.title"
                    class="transition hover:scale-[1.025] bg-white rounded-xl grid grid-cols-3 border  hover:border-primary overflow-hidden"
                    :href="'/success-stories/' + story.slug" target="_blank">
                    <div class="image-part bg-cover bg-center  hidden md:block h-full w-half"
                        :style="{ backgroundImage: 'url(' + story.img + ')' }">
                    </div>
                    <div class="col-span-3 md:col-span-2 p-6 grid">
                        <div>
                            <span class="text-sm leading-6 rounded-xl text-primary font-bold"> {{
            computeSubTitle(story.type,
                story.industry) }}</span>
                            <h2 class="text-md font-bold">{{ story.title }}</h2>
                        </div>

                        <h2 class="text-sm  text-gray-500">{{ story.desc }}</h2>


                    </div>
                </a>
            </div>
        </Row>

        <Row :ref="cta.target" id="cta" class="scroll-mt-[10vh]">
            <div class="mb-12 w-full">
                <Heading size="span" tag="h6" class=" text-left !mb-2">
                    Learn more
                </Heading>
                <Heading size="xl" tag="h1" class="text-text-left">Book a free consultation call with our team!
                </Heading>
                <p class="max-w-3xl  text-left">Say goodbye to the stress of hiring global talent.
                    Use the
                    form below
                    to schedule a call with our
                    recruitment team
                    and learn how we can help you hire the best talent.

                </p>

            </div>

            <SavvyCal class="w-full" />
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

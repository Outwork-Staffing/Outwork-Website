<script setup>
import Fifty from '../../Bricks/Fifty.vue';
import SampleResumes from '../../Bricks/SampleResumes.vue';
import FounderLetter from '../../Components/FounderLetter.vue';

const menu = [
    {
        name: 'Overview',
        id: 'overview'
    },
    {
        name: 'Process',
        id: 'process'
    },
    {
        name: 'Case Studies',
        id: 'case-studies'
    },
    {
        name: 'FAQs',
        id: 'FAQs'
    },
];
</script>
<template>
    <Landing>
        <FixedMenu :menu="menu" :dark="false" class="z-[200]" />
        <Row background="dark">
            <Fifty>
                <template #left>
                    <div class="grid gap-8">
                        <Heading tag="h1" size="xl" class="text-white !leading-tight !mb-0">This is super high-quality
                            hero
                            text.
                        </Heading>
                        <p class="text-secondary text-lg leading-9">Sub text - also extremely important.</p>
                        <div>
                            <Button>Book a free call</Button>
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
                    image="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Run 200+ Interviews For You"
                    desc="Office Handset Call Center Apprentice Young Executive Young Professional Apprentership United Kingdom " />
                <ImageCard
                    image="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Quality Account Managmenet"
                    desc="Office Handset Call Center Apprentice Young Executive Young Professional Apprentership United Kingdom " />
            </div>
            <div class="overhang bg-gray-50"></div>
        </Row>
        <Row background="gray" class="">
            <Heading size="xl" class="text-heading pb-12">The Outwork Staffing Process</Heading>
            <div class="grid grid-cols-2 gap-8">
                <div class="bg-white rounded border p-4">asdf</div>
                <div class="bg-white rounded border p-4">asdf</div>
                <div class="bg-white rounded border p-4">asdf</div>
                <div class="bg-white rounded border p-4">asdf</div>

            </div>
        </Row>
        <Row class="relative overflow-hidden">
            <Heading size="xl" class="pb-12">Don't just take our word for it.</Heading>
            <div class="grid grid-cols-2 gap-8">
                <div class="bg-white rounded border p-4">Sample Testimonial</div>
                <div class="bg-white rounded border p-4">Sample Testimonial</div>
                <div class="bg-white rounded border p-4">Sample Testimonial</div>
                <div class="bg-white rounded border p-4">Sample Testimonial</div>
            </div>
            <Heading size="lg" class="pt-24 pb-12 text-center">Curious about the quality? View Sample Resumes</Heading>

            <SampleResumes />
        </Row>

        <Row background="dark">
            More Testimonials
        </Row>
        <Row>
            Gurantee
        </Row>
        <Row>
            Call to Action
        </Row>
        <Row background="gray">
            <FounderLetter />
        </Row>
        <Row>
            Footer
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
</style>
<script setup>
import BentoCard from '../Components/BentoCard.vue';
import { CurrencyDollarIcon, CheckBadgeIcon, DocumentCheckIcon, HeartIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div class="grid-cols-1 md:grid-cols-5 bento-grid w-full max-w-full">


        <BentoCard headline="Find Skilled Global Talent" class="col-span-3">
            <template #icon>
                <CheckBadgeIcon class="h-8 w-8 text-primary" />
            </template>
            <template #body>
                Our team has a global network of top-tier candidates, so you can find the skilled talent you need to take
                your
                business to the next level. We use a combination of interviews, skills assessments, and background checks to
                verify each candidate's credentials and capabilities.
                <br><br>
                By partnering with us, you can trust that we'll provide you with a pool of carefully vetted and highly
                skilled
                candidates to choose from.
            </template>
        </BentoCard>
        <BentoCard headline="Streamlined Process" class="col-span-2">
            <template #icon>
                <DocumentCheckIcon class="h-8 w-8 text-primary" />
            </template>
            <template #body>
                With our fast and efficient hiring process, you can trust that we'll help you save time and resources while
                finding the top talent you need to drive your business forward.
            </template>
        </BentoCard>
        <BentoCard headline="Pay Once" class="col-span-2">
            <template #icon>
                <CurrencyDollarIcon class="h-8 w-8 text-primary" />
            </template>
            <template #body>
                Only pay a fixed recruitment fee and never pay again. This person joins your team and you don’t have
                to pay
                us monthly like most firms.
            </template>
        </BentoCard>
        <BentoCard headline="Add New Hires To Your Team Directly" class="col-span-3">
            <template #icon>
                <HeartIcon class="h-8 w-8 text-primary" />
            </template>
            <template #body>
                Our team doesn’t step in to manage this employee on your behalf, but instead they are joining your team. We
                believe this is the most effective way to help your new hire thrive in their role and deeply understand the
                work and culture.
            </template>
        </BentoCard>
    </div>
</template>

<style scoped>
.bento-grid {
    display: grid;
    flex: 0 0 auto;
    gap: 20px;
    grid-auto-rows: min-content;
    grid-template-rows: repeat(2, min-content);
    height: min-content;
    justify-content: center;
}



.card {
    gap: 15px;
    padding: 25px;
}
</style>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/solid';
const faqs = [
    {
        question: "How much can I save?",
        answer:
            "The amount of money can vary depending on the role, but typically companies save 70-90% on salaries. Outsourcing is an effective way to grow your team while being financially responsible.",
    },
    {
        question: "What timezones do you recruit for?",
        answer:
            "Our team typically places candidates from the Philippines. Candidates that we place typically are comfortable with a typical US 9-5 or can work any other time zone you prefer. It really is your choice.",
    },
    {
        question: "How much do you charge?",
        answer:
            "We charge a $500 deposit to get started recruiting and then when we place a candidate we will bill our recruitment fee. It depends on the frequency you are hiring, but it is typically 35% of the annual salary. Your $500 deposit goes towards that 35%.",
    },
    {
        question: "Do you have a placement guarantee?",
        answer:
            "If you aren’t satisfied with the candidate that you hire or they quit in the first 90 days, we will find you someone else free of charge. We want to make sure that you find somebody who can work well with you and your time - that is our top priority.",
    },
    // More questions...
];

</script>
<template>
    <dl class="mt-10 space-y-6 max-w-2xl mx-auto">
        <Disclosure as="div" v-for="faq in faqs" :key="faq.question"
            :class="`p-6 rounded-xl hover:scale-105 hover:bg-white transition-all group ${open ? 'bg-white' : 'bg-white'}`"
            v-slot="{ open }">

            <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                <span class="text-headings font-bold text-xl">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="h-6 w-6 group-hover:scale-125 group-hover:rotate-12 transition-all"
                        aria-hidden="true" />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
            </DisclosureButton>
            <DisclosurePanel as="dd" class="mt-2 pr-12 bg-white" v-show="open">
                <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </DisclosurePanel>
        </Disclosure>

    </dl>
</template>
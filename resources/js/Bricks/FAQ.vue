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
            "We charge a $500 deposit to get started recruiting and then when we place a candidate we will bill our recruitment fee. It depends on the frequency you are hiring, but it is typically 30% of the annual salary. Your $500 deposit goes towards that 30%.",
    },
    {
        question: "Do you have a placement guarantee?",
        answer:
            "If you aren’t satisfied with the candidate that you hire or they quit in the first 6 months, we will find you someone else free of charge. We want to make sure that you find somebody who can work well with you and your time - that is our top priority.",
    },
];

</script>
<template>
    <dl class="mt-12 space-y-6 max-w-6xl mx-auto">
        <Disclosure as="div" v-for="faq in faqs" :key="faq.question" v-slot="{ open }"
            class="bg-white border rounded-xl p-6 hover:scale-[101%] hover:border-primary transition">
            <div class="transition-all">
                <DisclosureButton class="w-full items-start justify-between text-left text-gray-900">
                    <div class="w-full flex justify-between">
                        <span class="text-headings font-bold text-xl">{{ faq.question }}</span>
                        <span class="ml-6 flex h-7 items-center">
                            <PlusSmallIcon v-if="!open" class="h-6 w-6 group-hover:scale-125 transition-all"
                                aria-hidden="true" />
                            <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                        </span>
                    </div>

                    <DisclosurePanel as="dd" class="mt-6 w-full bg-white" v-show="open">
                        <p class="text-base leading-7 text-gray-600 w-full" v-html="faq.answer"></p>
                    </DisclosurePanel>
                </DisclosureButton>
            </div>
        </Disclosure>
    </dl>
    <div class="flex items-center w-full justify-center">
        <Button class="text-center my-12" type="text" link="mailto:operations@outworkstaffing.com">Have specific
            questions? Email us: operations@outworkstaffing.com</Button>
    </div>
</template>

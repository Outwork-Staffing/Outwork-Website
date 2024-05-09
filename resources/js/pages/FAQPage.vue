<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/solid';
const faqs = [
    {
        question: "How much can I save?",
        answer: "The amount of money can vary depending on the role, but typically companies save 70-90% on salaries. Outsourcing is an effective way to grow your team while being financially responsible.",
    },
    {
        question: "What timezones do you recruit for?",
        answer:
            "Our team typically places candidates from the Philippines. Candidates that we place typically are comfortable with a typical US 9-5 or can work any other time zone you prefer. It really is your choice.",
    },
    {
        question: "How much do you charge?",
        answer: "We charge a $500 deposit to get started recruiting and then when we place a candidate we will bill our recruitment fee. It depends on the frequency you are hiring, but it is typically 30% of the annual salary. Your $500 deposit goes towards that 30%. If you hire someone for $1,200/month, our total recruitment fee including the contract will be $4,320.",
    },
    {
        question: "How are you different from Support Shepherd?",
        answer: "Outwork offers premium experience compared to similar companies where we work with and coach companies who have never hired overseas before. You start the process working with a US staff member to isolate your needs and figure out the best role.<br><br> Oh and…. Outwork charges 30% instead of 35% (Shepherd’s price). Save money and have a better experience. Win. Win.",
    },
    {
        question: "Do you have a placement guarantee?",
        answer:
            "If you aren’t satisfied with the candidate that you hire or they quit in the first 90 days, we will find you someone else free of charge. We want to make sure that you find somebody who can work well with you and your time - that is our top priority.",
    },
    {
        question: "Do hires join my company?",
        answer:
            "Global contractors will join your team directly. Outwork will properly equip you to pay them compliantly and minimize your risk/exposure. Outwork Staffing does not offer staff augmentation.",
    },
    {
        question: "How do I pay my overseas contractors?",
        answer: "Outwork Staffing is partnered with Deel.com to help our clients pay their contractors compliantly. At the end of the recruitment process, Outwork will connect you with a team member at Deel and they will help you through your first few payroll cycles.",
    },
    // More questions...
];
</script>
<template>
    <Main>
        <Row class="pt-12 ">
            <Heading size="span" tag="h6" class="text-center">
                FAQs
            </Heading>
            <Heading size="xl" tag="h2" class="text-center">
                Answers to our most frequently asked questions
            </Heading>

            <dl class="mt-12 space-y-6 max-w-6xl mx-auto">
                <Disclosure as="div" v-for="faq in faqs" :key="faq.question" v-slot="{ open }"
                            class="bg-secondary border rounded-xl p-6 hover:scale-[101%] hover:border-primary transition">
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

                            <DisclosurePanel as="dd" class="mt-6 w-full bg-secondary" v-show="open">
                                <p class="text-base leading-7 text-gray-600 w-full" v-html="faq.answer"></p>
                            </DisclosurePanel>
                        </DisclosureButton>
                    </div>
                </Disclosure>
            </dl>
            <div class="flex items-center w-full justify-center">
            <Button class="text-center my-12" type="text" link="mailto:operations@outworkstaffing.com">Have specific questions? Email us: operations@outworkstaffing.com</Button>
            </div>
        </Row>
        <CTA/>
    </Main>
</template>

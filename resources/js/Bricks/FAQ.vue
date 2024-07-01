<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/solid';
import { faqs } from '../const/faq.js'


</script>

<template>
    <dl class="mt-12 space-y-6 max-w-6xl mx-auto">
        <Disclosure as="div" v-for="faq in faqs" :key="faq.question" v-slot="{ open, toggle }"
            class="bg-white border rounded-xl p-6 hover:scale-[101%] hover:border-primary transition cursor-pointer relative"
            @click="toggle">
            <DisclosureButton as="div" class="absolute inset-0"></DisclosureButton>
            <div class="transition-all">
                <div class="w-full items-start justify-between text-left text-gray-900">
                    <div class="w-full flex justify-between">
                        <span class="text-headings font-bold text-xl">{{ faq.question }}</span>
                        <span class="ml-6 flex h-7 items-center">
                            <PlusSmallIcon v-if="!open" class="h-6 w-6 group-hover:scale-125 transition-all"
                                aria-hidden="true" />
                            <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                        </span>
                    </div>
                </div>
                <DisclosurePanel as="dd" class="mt-6 w-full bg-white" v-show="open">
                    <p class="text-base leading-7 text-gray-600 w-full" v-html="faq.answer"></p>
                </DisclosurePanel>
            </div>
        </Disclosure>
    </dl>
    <div class="flex items-center w-full justify-center">
        <Button class="text-center my-12" type="text" link="mailto:operations@outworkstaffing.com">Have specific
            questions? Email us: operations@outworkstaffing.com</Button>
    </div>
</template>

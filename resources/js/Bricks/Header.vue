<template>

    <header class="w-full bg-white fixed z-[120]">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 w-full" aria-label="Global">
            <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Outwork Staffing</span>
                <img class="h-8 md:h-12 w-auto"
                    src="https://images.ctfassets.net/g7bwetg052e6/5qzjrlo1XTICWYpB1LXbQ5/4f90461cf694cb017b30e15be5a8f287/logo.svg"
                    alt="" />
            </a>
            <div class="flex lg:hidden">
                <CustomButton InertiaLink="/start-hiring" link="/start-hiring"
                    class="text-md font-semibold leading-6 mr-6">Start Hiring
                </CustomButton>

                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="toggleMobileMenu()">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" v-if="mobileMenuOpen == false" />
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" v-else />

                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12 items-center">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="text-md font-semibold leading-6 text-heading hover:underline hover:decoration-solid decoration-primary transition-custom decoration-2">
                    {{
                        item.name
                    }}</a>

                <CustomButton link="/start-hiring" class="text-md font-semibold leading-6">Start Hiring</CustomButton>

            </div>
        </nav>
        <!-- Start of mobile menu -->
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-[99]" />
            <DialogPanel class="fixed inset-y-0 right-0 z-[99] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm "
                :key="$page.url">
                <div class=" flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Outwork Staffing</span>
                        <img class="h-8 w-auto"
                            src="https://images.ctfassets.net/g7bwetg052e6/5qzjrlo1XTICWYpB1LXbQ5/4f90461cf694cb017b30e15be5a8f287/logo.svg"
                            alt="" />
                    </a>

                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="toggleMobileMenu">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                {{
                        item.name
                    }}</a>
                        </div>
                        <div class="py-6">
                            <CustomButton link="/start-hiring" class="text-md font-semibold leading-6">Start
                                Hiring
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import CustomButton from '../Components/Button.vue';
import { Link } from '@inertiajs/vue3'

const navigation = [
    { name: 'Why Outsource?', href: '/why-outsource' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/success-stories' },

    { name: 'FAQs', href: '/frequently-asked-questions' },

]

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

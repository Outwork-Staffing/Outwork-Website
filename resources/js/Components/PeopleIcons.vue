<script setup>
import { ref } from 'vue';
import Popper from 'vue3-popper';

const people = [
    {
        name: 'Jane Cooper',
        photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Jane Cooper',
        photo: 'https://images.unsplash.com/photo-1525875975471-999f65706a10?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Jane Cooper',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
];

const currentPerson = ref(null);

const showTooltip = (person) => {
    currentPerson.value = person;
};

const hideTooltip = () => {
    currentPerson.value = null;
};
</script>

<template>
    <div class="photos inline-flex items-center gap-2">
        <div v-for="person in people" :key="person.name" class="relative">
            <div class="h-12 w-12 rounded-full !bg-center !bg-cover -rotate-0 border-2 shadow border-white"
                :style="{ backgroundImage: `url(${person.photo})` }" @mouseenter="showTooltip(person)"
                @mouseleave="hideTooltip">
            </div>
            <Popper v-if="currentPerson === person" :reference-element="$el" placement="top">
                <div class="bg-white text-black p-2 rounded shadow">{{ person.name }}</div>
            </Popper>
        </div>
    </div>
</template>

<style>
:root {
    --popper-theme-background-color: #333333;
    --popper-theme-background-color-hover: #333333;
    --popper-theme-text-color: #ffffff;
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 32px;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
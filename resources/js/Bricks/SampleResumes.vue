<script setup>
import Resume from '../Components/Resume.vue';

</script>
<template>
    <div class=" bottom-0 left-0 right-0">
        <div class="max-w-7xl grid grid-cols-3 gap-20 mx-auto relative">
            <div class="relative resume_shell">
                <span class="job_title">Operations Coordinator</span>
                <Resume class="resume -rotate-1" name="Testing Name" subtitle="Experienced Marketing Professional"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

            </div>
            <div class="relative resume_shell">
                <span class="job_title">Marketing Specialist</span>
                <Resume class="resume rotate-2" name="Testing Name" subtitle="Experienced Marketing Professional"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

            </div>
            <div class="relative resume_shell">
                <span class="job_title">Customer Support</span>
                <Resume class="resume rotate-1" name="Testing Name" subtitle="Experienced Marketing Professional"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            </div>
        </div>
    </div>
</template>

<style scoped>
.resume_shell {
    @apply transition hover:scale-105 hover:-translate-y-8 text-center;
}

.job_title {
    @apply mb-2 text-center text-primary font-semibold;
    line-height: 50px;
}

.resume {
    @apply bg-gray-50 border shadow w-full absolute w-full h-80 p-6 hover:shadow-primary hover:shadow-xl transition duration-300 cursor-pointer;
}
</style>
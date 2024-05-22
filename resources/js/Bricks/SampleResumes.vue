<script setup>
</script>
<template>
    <div class=" bottom-0 left-0 right-0">
        <div class="max-w-7xl grid grid-cols-3 gap-20 mx-auto relative">
            <div class="relative resume_shell">
                <span class="job_title">Operations Coordinator</span>
                <div class="resume -rotate-1">asdf</div>
            </div>
            <div class="relative resume_shell">
                <span class="job_title">Marketing Specialist</span>
                <div class="resume rotate-2">asdf</div>
            </div>
            <div class="relative resume_shell">
                <span class="job_title">Customer Support</span>
                <div class="resume rotate-1">asdf</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.resume_shell {
    @apply transition hover:scale-105 hover:-translate-y-3 text-center;
}

.job_title {
    @apply mb-2 text-center text-primary font-semibold;
    line-height: 50px;
}

.resume {
    @apply border shadow w-full absolute w-full h-80 p-6;
}
</style>
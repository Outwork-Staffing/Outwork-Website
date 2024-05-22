<script setup>
const props = defineProps({
    name: String,
    subtitle: String,
    desc: String,
})
</script>
<template>
    <div class="text-left flex flex-col overflow-hidden">
        <div class="flex gap-4">
            <img class="rounded-full h-10"
                src="https://pbs.twimg.com/profile_images/1391946980960743425/xi3nDA3k_400x400.jpg" />
            <div class="grid">
                <span class="text-md mb-0 font-semibold">
                    {{ name }}
                </span>
                <span class="text-sm">
                    {{ subtitle }}
                </span>
            </div>
        </div>

        <hr class="my-2 px-5">
        <span class="text-sm">
            {{ desc }}
        </span>
    </div>
</template>
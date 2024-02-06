<script setup>
const props = defineProps({
    stories: Array
});

function computeSubTitle($type, $industry) {
    if ($type && $industry) {
        return $type + ' Hire';
    } else {
        if ($type) {
            return $type;
        } else {
            return $industry;
        }
    }
}
</script>
<template>
    123 123
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="story in stories" :key="story.title" class="transition hover:scale-[1.025]">
            <a :href="'/success-stories/' + story.slug" class="h-full">
                <article class="bg-white rounded border border-gray-200">
                    <div class="blog-post">
                        <div class="image-part bg-cover bg-center rounded hidden md:block"
                            :style="{ backgroundImage: 'url(' + story.img + ')' }">
                        </div>
                        <div class="p-4 grid gap-1">
                            <h2 class="text-md font-bold">{{ story.title }}</h2>
                            <span class="text-sm leading-6 rounded-xl text-primary font-bold"> {{
                                computeSubTitle(story.type,
                                    story.industry) }}</span>
                        </div>
                    </div>
                </article>
            </a>
        </div>
    </div>
</template>


<style scoped>
.image-part {
    height: 200px;
    /* Top half */
}
</style>
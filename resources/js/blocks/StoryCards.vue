<script setup>
const props = defineProps({
    stories: Array
});

function computeSubTitle($type, $industry) {
    //if both are true, return both and add a | 
    if ($type && $industry) {
        return $type + ' for a  ' + $industry;
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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="story in stories" :key="story.title" class="transition hover:scale-[1.025]">
            <a :href="'/success-stories/' + story.slug">
                <article class="bg-white rounded border border-gray-200">
                    <div class="blog-post">
                        <div class="image-part bg-cover bg-center rounded hidden md:block"
                            :style="{ backgroundImage: 'url(' + story.img + ')' }">
                        </div>
                        <div class="p-4 grid gap-1">
                            <h2 class="text-md font-bold">{{ story.title }}</h2>
                            <span class="text-sm leading-6 rounded-xl text-gray-700 "> {{ story.date
                            }}</span>
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
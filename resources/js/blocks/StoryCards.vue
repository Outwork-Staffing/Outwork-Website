<script setup>
const props = defineProps({
    stories: Array
});

function computeSubTitle($type, $industry) {
    //if both are true, return both and add a | 
    if ($type && $industry) {
        return $type + ' | ' + $industry;
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
    <div class="grid grid-cols-3 gap-8">
        <div v-for="story in stories" :key="story.title">
            <a :href="'/success-stories/' + story.slug">
                <article class="bg-white rounded border border-gray-200">
                    <div class="blog-post">
                        <div class="image-part bg-cover bg-center rounded"
                            :style="{ backgroundImage: 'url(' + story.img + ')' }">
                        </div>
                        <div class="p-4">
                            <h2 class="text-xl font-bold">{{ story.title }}</h2>
                            <span class="text-sm bg-gray-100 rounded-xl p-2 my-12">{{ computeSubTitle(story.type,
                                story.industry)
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
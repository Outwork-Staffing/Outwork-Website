<script setup>
const props = defineProps({
    stories: Array,
    logos: Array
});
</script>

<template>
    <Main>
        <Row>
            <div class="max-w-4xl mx-auto text-center mt-12">
                <Heading size="xl" class="text-center text-heading">Global Recruitment Success Stories</Heading>
                <p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6">Discover how companies are
                    leveraging
                    global talent in major ways</p>
            </div>
            <TestimonialLogoCloud :logos="logos" class="white-fade" />
        </Row>


        <Row>
            <Fifty imageLocation="left" :imageMobile="false"
                imageUrl="https://images.unsplash.com/photo-1545112969-bdd91ef544c7?q=80&w=4471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Men sitting around computer">
                <template #right>
                    <p class="text-xl text-left text-body mb-6 leading-8">"Outsourcing has been a
                        game-changer for web SaaS, significantly boosting our profit margins and project speed
                        remarkably.
                        The
                        exceptional talent
                        and efficiency provided by Outwork Staffing have enabled us to deliver superior quality websites
                        at
                        an
                        unprecedented pace, truly exceeding our clients' expectations."
                    </p>
                    <div class="relative flex items-center gap-x-4 mx-auto mb-6">
                        <img src="https://ik.imagekit.io/jcj/paul_k47Jf9F7Iu.jpeg?updatedAt=1705593651175" alt=""
                            class="h-10 w-10 rounded-full bg-gray-50">
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-heading text-xl">
                                <span class="absolute inset-0"></span>
                                Paul Cox
                            </p>
                            <p class="text-gray-600">Founder, The Church Co</p>
                        </div>
                    </div>
                    <Button link="https://outworkstaffing.com/success-stories/website-builder">Open Full Case
                        Study</Button>
                </template>
            </Fifty>
        </Row>

        <Row background="light">
            <div class="mb-12">
                <Heading size="xl" class="text-center mb-6 text-heading">Latest Success Stories</Heading>
            </div>

            <StoryCards :stories="stories" class="my-6" />
        </Row>
        <CTA />

    </Main>
</template>
<style>
.white-fade:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(255, 255, 255, 50)) !important;
}

.white-fade:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255, 50)) !important;
}
</style>

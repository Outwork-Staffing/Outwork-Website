<script setup>
const props = defineProps({
    roles: Array
});
</script>
<template>
        <Row background="gradient" header="true">
            <div class="max-w-4xl mx-auto">
                <Heading size="span" tag="h6" class="text-center">
                    Save Time & Money
                </Heading>
                <Heading size="2xl" class="text-center text-heading">Hire high-quality employees at a fraction of the cost
                </Heading>
                <p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6">We are a recruitment agency designed
                    to help US countries find talented individuals globally to help grow their business.



                </p>
            </div>
            <div class="mt-16">
                <BentoGrid />
            </div>


        </Row>
        <Row>
            <div class="text-center pb-8">
                <Heading size="2xl" tag="h2" class="text-center">

                    Recruit skilled people for any task.
                </Heading>
                <p class="body-paragraph max-w-xl text-center mx-auto ">Save time and money by growing your team outside of
                    the
                    United
                    States and find skilled professionals for any project or business.</p>
                <Button link="/start-hiring" class="text-center mx-auto">Start Hiring</Button>

            </div>

            <PositionCarousel fadeToWhite="true" :roles="roles" />
        </Row>
        <Row>

            <Fifty imageLocation="left"
                imageUrl="https://images.ctfassets.net/g7bwetg052e6/1QHGRS519pdeSnWGIX9tA4/081a6d1d816016d0357a8720bfab1be4/people.jpeg"
                altText="Team putting hands in">
                <template #right>
                    <Heading size="span" tag="h6">
                        our mission
                    </Heading>
                    <Heading tag="h2" size="xl">
                        Built specifically for your needs.
                    </Heading>
                    <p class="body-paragraph">
                        Our mission is to provide cost-effective and high-quality solutions to our clients' business
                        staffing needs by leveraging the expertise of our global team of professionals.
                    </p>
                    <CheckBubble :items="['Fixed Hiring Fee', '$0 retainer']" />
                </template>

            </Fifty>
        </Row>
        <Row background="light">
            <Heading size="xl" tag="h2" class="text-center">
                Frequently Asked Questions</Heading>
            <FAQ />
        </Row>
        <CTA />
</template>

<script setup>
import Main from '../Layouts/Main.vue';
import Row from '../Components/Row.vue';
import Heading from '../Components/Heading.vue';
import CheckBubble from '../Components/CheckBubble.vue';
import Fifty from '../Blocks/Fifty.vue';
import Button from '../Components/Button.vue';
import CTA from '../Blocks/CTA.vue';
import FAQ from '../Blocks/FAQ.vue';
import PositionCarousel from '../Blocks/PositionCarousel.vue';
import BentoGrid from '../Blocks/BentoGrid.vue';
const props = defineProps({
    roles: Array
});
</script>  
<template>
    <Main>
        <Row background="gradient" header="true">
            <div class="max-w-4xl mx-auto text-center">
                <Heading size="2xl" class="text-center text-heading">Why Outsource?
                </Heading>
                <p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6">Quickly assemble teams from around
                    the
                    globe meeting your needs and save thousands in monthly payroll. </p>
                <Button class="w-full sm:w-auto">Start Hiring</Button>

            </div>
            <div class="mt-16">
                <BentoGrid />
            </div>

        </Row>

        <Row background="light">
            <Fifty imageLocation="left" imageMobile="false"
                imageUrl="https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto">
                <template #right>
                    <Heading size="span" tag="h6">
                        DON'T COMPROMISE ON YOUR TEAM
                    </Heading>
                    <Heading size="xl" tag="h2">
                        Save 70-80% on salaries. </Heading>
                    <p class="body-paragraph">Your team needs quality staff. No way around it. Hire globally and let your
                        dollar go further. There is a reason 92% of the top companies use outsourcing.
                    </p>
                    <Button type="text" link="/services">Learn More</Button>

                </template>
            </Fifty>
        </Row>
        <Row>
            <Fifty>
                <template #left>
                    <Heading tag="h2" size="xl">
                        Quality team members ready to work hard.
                    </Heading>
                    <p class="body-paragraph">
                        In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality
                        english and a deep culture fit for between $8,500 and $15,000 a year.
                    </p>
                </template>
                <template #right>
                    <CheckBubble
                        :items="['Extremely high quality english', 'Deeply integrated into your systems', 'Relevant experience & culture fit']" />
                </template>
            </Fifty>
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
        <Row background="light">
            <Heading size="xl" tag="h2" class="text-center">
                Frequently Asked Questions</Heading>
            <FAQ />
        </Row>
        <CTA />
    </Main>
</template>
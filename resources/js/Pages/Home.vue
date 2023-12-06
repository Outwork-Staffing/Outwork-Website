<script setup>
import Hero from "../Blocks/Hero.vue";
import Main from "../Layouts/Main.vue";
import Row from "../Components/Row.vue";
import Fifty from "../Blocks/Fifty.vue";
import Heading from "../Components/Heading.vue";
import CheckBubble from "../Components/CheckBubble.vue";
import Process from "../Blocks/Process.vue";
import CTA from "../Blocks/CTA.vue";
</script>

<template>
    <Main>
        <Hero />
        <Row name="relate" background="light">
            <Fifty imageMobile="false" imageUrl="https://ik.imagekit.io/outwork/handsinface.webp?updatedAt=1701878781199">
                <template #right>
                    <Heading size="span" tag="h6">
                        Get the help you Know you need
                    </Heading>
                    <Heading size="xl" tag="h2">
                        You are overwhelmed with all the work…
                    </Heading>
                    <p class="body-paragraph">Growing a business is hard - especially when you have to do it all. Hiring
                        remote workers can solve
                        this problem for you.

                    </p>
                    <p class="body-paragraph">You can hire amazing full-time talented individuals at the fraction of the
                        cost of US employees.</p>
                </template>

            </Fifty>
        </Row>
        <Row name="quality" background="light">
            <Fifty imageLocation="right" imageMobile="false"
                imageUrl="https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto">
                <template #left>
                    <Heading size="span" tag="h6">
                        building a team doesn't have to cost tons
                    </Heading>
                    <Heading size="xl" tag="h2">
                        Find quality full-time help for $900-$1500.
                    </Heading>
                    <p class="body-paragraph">Most companies think they need to spend between $4,000-$6,000 a month on a
                        quality full time team. That isn't true. We help businesses build an awesome team of global workers
                        to help them save time, money, and ultimately grow their business.
                    </p>
                </template>

            </Fifty>
        </Row>
        <Row name="process">
            <Process />
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
        <CTA />
    </Main>
</template>

  

<script setup>
const props = defineProps({
    roles: Array
});
</script>

<template>
    <Main>
        <Hero />
        <Row name="relate" background="light">
            <Fifty imageMobile="true" imageUrl="https://ik.imagekit.io/outwork/handsinface.webp?updatedAt=1701878781199"
                :lazyLoad="false" altText="Man upset with his job">
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
                imageUrl="https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto"
                altText="Team working">
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
        <Row background="light">
            <Heading size="2xl" tag="h2" class="text-center">
                Recruit skilled people for any task.
            </Heading>
            <p class="body-paragraph max-w-xl text-center mx-auto ">Save time and money by growing your team outside of the
                United
                States and find skilled professionals for any project or business.</p>
            <PositionCarousel :roles="roles" />
        </Row>
        <Row background="light">
            <div class="grid grid-cols-1 lg:gap-x-16 gap-y-6 md:gap-y-12 lg:grid-cols-2 lg:items-center">
                <div :class="['block relative sm:py-16 lg:py-0']">
                    <div class="block flex justify-center">
                        <img class="h-64"
                            src="https://images.ctfassets.net/g7bwetg052e6/3jfEQv5IouKC9WpjXtrrLA/5ac466efc1475348c1917e98a455adad/shield.webp"
                            alt="Shield showing Outwork Gurantee">
                    </div>

                </div>
                <div :class="['block relative sm:py-16 lg:py-0']">
                    <Heading size="xl" tag="h3">
                        Our Recruitment Guarantee
                    </Heading>
                    <p class="body-paragraph">Finding the right staff for your business can be a challenging task, but we
                        are here to help. Our company offers a 90-day recruitment guarantee. If the first candidate we place
                        with you doesn't work out, we will replace them free of charge within the first 90 days of their
                        employment.
                        <br><br>
                        Trust us to find the right fit for your company.
                    </p>
                </div>
            </div>


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

  

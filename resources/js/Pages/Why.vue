<template>
    <Main>
        <Row background="white" header="true">
            <div class="max-w-4xl mx-auto text-center">
                <Heading size="2xl" class="text-center text-heading">Why Outsource?
                </Heading>
                <p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6">Quickly assemble teams from around
                    the
                    globe meeting your needs and save thousands in monthly payroll. </p>
                <Button class="w-full sm:w-auto" link="/start-hiring">Start Hiring</Button>

            </div>
        </Row>

        <Row background="light">
            <Fifty imageLocation="left" imageMobile="false"
                imageUrl="https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto"
                altText="Team working">
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

        <Row background="light">
            <Heading size="xl" tag="h2" class="text-center">
                Frequently Asked Questions</Heading>
            <FAQ />
        </Row>
        <CTA />
    </Main>
</template>
<template>
    <Row background="green">
        <Fifty imageLocation="right" :imageMobile="false"
            imageUrl="https://images.ctfassets.net/g7bwetg052e6/6v2WViHfnBWtbwGECJURXK/1c4efc3223a95c67b075f9b40b3a67c8/CTA.jpeg"
            altText="Men sitting around computer">
            <template #left>
                <Heading tag="h3" size="xl" class="text-white">Book a call to learn more or get started.</Heading>
                <p class="mb-6 text-lg text-white">We are eager to work with you. Book a call with our team and discover
                    how our
                    global staffing can help you drive growth. <br><br>Let's talk about your staffing needs today.</p>
                <Button link="/start-hiring" type="white">Get Started Hiring</Button>
            </template>
        </Fifty>
    </Row>
</template>

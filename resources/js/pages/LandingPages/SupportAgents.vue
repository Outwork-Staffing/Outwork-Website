<script setup>
import {onBeforeMount, ref} from 'vue';

const bookingPage = ref(null);
onBeforeMount(() => {
    loadSavvyCalScript();
});

function loadSavvyCalScript() {
    const script = document.createElement('script');
    script.src = 'https://embed.savvycal.com/v1/embed.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => initializeSavvyCal();
}

function initializeSavvyCal() {
    window.SavvyCal = window.SavvyCal || function () {
        (window.SavvyCal.q = window.SavvyCal.q || []).push(arguments);
    };
    SavvyCal('init');
    SavvyCal('inline', {link: 'bryan-outwork-staffing/inquiry', selector: '#booking-page'});
}
</script>

<template>
    <Main>
        <Row background="gradient" header="true">
            <div class="max-w-4xl mx-auto flex items-center flex-col">
                <Heading size="span" tag="h6" class="text-center">
                    Global Customer Support Staff
                </Heading>
                <Heading size="xl" class="text-center text-heading">Hire International Customer Support Agents at a
                    fraction of the cost
                </Heading>
                <p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6">We are a recruitment agency
                    designed
                    to help US companies find talented individuals globally to help grow their business.
                </p>
                <Button href="#call" class="text-center">Book an free consultation call</Button>
            </div>
            <div class="mt-16">
                <BentoGrid/>
            </div>


        </Row>

        <Row>

            <Fifty imageLocation="left"
                   imageUrl="https://images.unsplash.com/photo-1590649880765-91b1956b8276?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                   altText="Team putting hands in">
                <template #right>
                    <Heading size="span" tag="h6">
                        How We Help
                    </Heading>
                    <Heading tag="h2" size="xl">
                        Hire vetted customer support agents.
                    </Heading>
                    <p class="body-paragraph">
                        Outwork finds and recruits customer support agents from Asia and Latin America for your
                        business. Your team is presented the top candidates for your review and approval.
                    </p>
                    <CheckBubble
                        :items="['One-time hiring fee', 'Industry Leading Price']"/>
                </template>

            </Fifty>
        </Row>
        <SavingsRow :hiredSalary="1000" :usSalary="5000" title="Customer Success Agents" :anonymous="true"/>

        <Row>
            <Fifty imageLocation="right"
                   imageUrl="https://images.unsplash.com/photo-1616587657189-5127befe3a98?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                   altText="Team putting hands in">
                <template #left>
                    <Heading size="span" tag="h6">
                        Our Process
                    </Heading>
                    <Heading tag="h2" size="xl">
                        Dedicated and Managed Staff Searches
                    </Heading>
                    <p class="body-paragraph">
                        You're a business leader who needs skilled customer support agents but can't afford the time and
                        cost of a lengthy hiring process. Finding reliable and cost-effective talent is challenging and
                        time-consuming.

                        <br><br>Outwork Staffing offers a streamlined hiring process, providing you with a pool of
                        vetted,
                        top-tier candidates from Asia and Latin America. Save time and resources while securing the
                        talent you need to drive your business forward.


                    </p>
                </template>

            </Fifty>
        </Row>
        <Row id="call">
            <Heading size="xl" class="text-center text-heading">Book a free consultation call to learn more!
            </Heading>
            <p class="text-lg max-w-5xl mx-auto text-center mx-12 text-body mb-6"> Outwork is committed and focused on
                serving companies and helping them save money. Book a free call with us to learn more about how this can
                help your business save time and money - <span class="font-bold underline decoration-primary">absolutely zero commitment</span>.
            </p>
            <div id="booking-page" class="my-12 min-h-[40vh]">
                <!-- this is where we will inject the interface -->
            </div>
        </Row>
        <Row background="light">
            <Heading size="xl" tag="h2" class="text-center">
                Frequently Asked Questions
            </Heading>
            <FAQ/>
        </Row>
    </Main>
</template>

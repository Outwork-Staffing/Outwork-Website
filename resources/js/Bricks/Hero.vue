<script setup>
import Heading from '../Components/Heading.vue';
import Row from '../Components/Row.vue';
import Button from '../Components/Button.vue';
</script>
<template>
    <Row background="white" header="true">
        <div class="max-w-4xl mx-auto text-center">
            <Heading size="2xl" class="text-center text-heading">Hire Elite Talent at a Fraction of the Cost of US
                Counterparts</Heading>
            <p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6">We are a recruiting firm built to help
                US
                companies hire
                quality
                talent in
                the
                Philippines & LatAm
                for between
                $900-$1500
                a month.</p>
            <div class="flex flex-col sm:flex-row gap-4 items-center justify-center sm:items-start">
                <Button class="w-full sm:w-auto" link="/start-hiring">Book an Inquiry Call</Button>
            </div>
        </div>
    </Row>
</template>

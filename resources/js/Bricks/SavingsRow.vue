<script setup>
import SalaryChart from "../Components/SalaryChart.vue";

const props = defineProps({
    hiredSalary: Number,
    usSalary: Number,
    title: String,
    anonymous: {
        type: Boolean,
        default: false
    },
});

let annualSavings = (props.usSalary - props.hiredSalary) * 12;
let monthlySavings = props.usSalary - props.hiredSalary;
let savingsPercentage = Math.round((annualSavings / props.usSalary) * 100);

let recruiterFee = props.hiredSalary * 0.30 * 12;

let formattedAnnualSavings = '$' + annualSavings.toLocaleString();


</script>
<template>
    <Row background="light" v-if="hiredSalary != null">
        <Heading size="lg" class="text-4xl max-w-5xl mx-auto text-headings leading-snug mb-0 text-center"
            v-if="anonymous === false">Outwork
            saved
            this
            company {{
        formattedAnnualSavings
    }} on salary annually!
        </Heading>
        <Heading size="lg" class="text-4xl max-w-5xl mx-auto text-headings leading-snug mb-0 text-center" v-else>On
            average, Outwork saves companies {{
            formattedAnnualSavings
        }} on salary annually when they hire {{ title }}.
        </Heading>
        <Fifty>
            <template #left>
                <p class="text-xl text-body mb-4">According to salary data in the United States, the average salary for
                    a {{
        props.title
    }} is ${{ props.usSalary.toLocaleString() }}/month, or ${{
        (props.usSalary *
            12).toLocaleString()
    }}/year, and is rising every year. </p>
                <p class="text-xl text-body mb-4" v-if="anonymous === false">Outwork helped this company hire a <span
                        class="font-bold underline decoration-primary">{{
        props.title
    }} overseas for ${{
            props.hiredSalary.toLocaleString()
        }}/month.</span> That is a salary expense reduction of {{
            savingsPercentage
        }}%.</p>
                <p v-else class="text-xl text-body mb-4">
                    On average, Outwork helps companies hire a <span class="font-bold underline decoration-primary">{{
            props.title
        }} overseas for ${{
            props.hiredSalary.toLocaleString()
        }}/month.</span> That is a salary expense reduction of {{
            savingsPercentage
        }}%.
                </p>
                <p class="text-xl text-body" v-if="anonymous === false">Outwork charged the client 30% of the annual
                    salary to recruit them a{{
        props.jobTitle
    }} - which came out to a ${{ (props.hiredSalary * .30 * 12).toLocaleString() }}
                    recruitment fee. Factoring in that fee, <span class="font-bold underline decoration-primary">this
                        company is on track to save ${{
        (props.usSalary * 12 -
            props.hiredSalary * 12 - (props.hiredSalary * .30 * 12)).toLocaleString()
                        }} just this
                        year.</span>
                </p>
                <p class="text-xl text-body" v-else>Outwork charges clients 30% of the annual
                    salary to recruit them a{{
                    props.jobTitle
                    }} - which came out to a ${{ (props.hiredSalary * .30 * 12).toLocaleString() }}
                    recruitment fee. Factoring in that fee, <span
                        class="font-bold underline decoration-primary">companies are on track to save ${{
                        (props.usSalary * 12 -
                        props.hiredSalary * 12 - (props.hiredSalary * .30 * 12)).toLocaleString()
                        }} just this
                        year.</span>
                </p>

            </template>
            <template #right>
                <SalaryChart :us_salary="props.usSalary" :placed_salary="props.hiredSalary" />
            </template>
        </Fifty>

    </Row>
</template>

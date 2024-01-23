<script setup>
const props = defineProps({
    hiredSalary: Number,
    usSalary: Number,
});

let annualSavings = (props.usSalary - props.hiredSalary) * 12;
let monthlySavings = props.usSalary - props.hiredSalary;
let savingsPercentage = Math.round((annualSavings / props.usSalary) * 100);

let recruiterFee = props.hiredSalary * 0.35 * 12;

let formattedAnnualSavings = '$' + annualSavings.toLocaleString();
</script>
<template>
    <Row>
        <Heading size="lg" class="text-4xl max-w-5xl mx-auto text-heading leading-snug mb-0 text-center">Outwork helped save
            this
            company {{
                formattedAnnualSavings }} on salaries!
        </Heading>
        <Fifty>
            <template #left>
                Hired for ${{ props.hiredSalary }} vs. US Salary of ${{ props.usSalary }} in
                {{ savingsPercentage }}% Savings
                yearly savings of ${{ annualSavings }} or ${{ monthlySavings }} per month
            </template>
            <template #right>
                sadf
            </template>
        </Fifty>

    </Row>
</template>
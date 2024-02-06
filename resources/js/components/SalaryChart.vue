<script setup>
import { computed } from 'vue';

let props = defineProps({
    placed_salary: Number,
    us_salary: Number,
});
let percentSaved = Math.round((props.us_salary - props.placed_salary) / props.us_salary * 100);
let pretty_us_salary = (props.us_salary * 12).toLocaleString();

let barHeight = computed(() => `${100 - percentSaved}%`);
console.log(barHeight);

</script>
<template>
    <div class="w-full bg-white rounded border border-slate-300 aspect-auto	">
        <div class="bg-grid absolute top-0 left-0 w-full h-full"></div>

        <div class="price-chart mt-8">
            <div class="y-axis pl-4">
                <span>${{ pretty_us_salary }}</span>
                <span>${{ (props.us_salary * 6).toLocaleString() }}</span>
                <span>$0</span>
            </div>
            <div class="us-bar">
                <div>
                    <span class="bar-text">${{ props.us_salary.toLocaleString() }}/month</span>
                </div>
            </div>

            <div class="overseas-bar">
                <span class="savings-text text-lg">
                    {{ percentSaved }}% in total savings
                </span>
                <div :style="{ height: barHeight }">
                    <span class="bar-text">${{ props.placed_salary.toLocaleString() }}/month</span>

                </div>

            </div>
            <div class="bottom "></div>
            <div class="bottom title">Annual US Salary</div>
            <div class="bottom title">Annual Overseas Salary</div>

        </div>

    </div>
</template>

<style>
.bottom {
    @apply bg-gray-50 w-full rounded-b text-heading font-bold text-xl z-[99];
}

.price-chart {
    @apply text-slate-400 text-sm;
    grid-template-rows: minmax(300px, 300px) auto;
    grid-template-columns: minmax(70px, 70px) 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: stretch;
    line-height: 1.5em;
    display: grid;

}

.y-axis,
.overseas-bar,
.us-bar {
    border-bottom: 1px #e2e8f0 solid;
}

.y-axis {
    text-align: right;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding-bottom: 1em;
    display: flex;
    grid-area: span 1 / span 1 / span 1 / span 1;
}

.us-bar {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding-left: 20%;
    padding-right: 20%;
    display: flex;
    z-index: 99;
}

.us-bar div {
    width: 100%;
    height: 100%;
    background-color: #1E3C3A;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.overseas-bar {
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
    padding-left: 20%;
    padding-right: 20%;
    display: flex;
    z-index: 99;
}

.savings-text {

    @apply text-center font-bold text-primary mb-6;
}

.overseas-bar div {
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #50B780;
}

.title {
    @apply font-bold text-heading leading-6 py-2;
    text-align: center;
}

.bg-grid {
    position: absolute;
    left: 0;
    bottom: 0;
    background-size: 50px 50px;
    background-image: linear-gradient(90deg, rgb(203 213 225) 1px, transparent 0), linear-gradient(180deg, rgb(203 213 225)1px, transparent 0);
    z-index: 5;
    opacity: .18;
}


.us-bar div,
.overseas-bar div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bar-text {
    @apply text-white;
    position: absolute;
    /* Position it over the bar */
    width: 100%;
    /* Take full width of the bar */
    text-align: center;
    /* Center the text horizontally */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
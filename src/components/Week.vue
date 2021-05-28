<template>
    <div class="day-items__wrapper">
        <Day 
            v-for="day in weekDays" 
            :day="day"
            :key="day" 
        />
    </div>
</template>

<script>
    import moment from "moment";
    import Day from './Day';

    export default {
        data() {
            return {
                formatString: 'ddd, Do',
                weekDays: [],
            };
        },
        components: {
            Day
        },
        mounted() {
            const startWeekDay = moment().startOf("week");
            this.weekDays.push(startWeekDay.format(this.formatString));
            for (let i = 0; i < 6; i++) {
                const nextDay = startWeekDay.add("1", "days").format(this.formatString);
                this.weekDays.push(nextDay);
            }
        },
    };
</script>

<style lang="scss">
    .day-items {

        &__wrapper {
            display: flex;
            justify-content: space-around;
            flex-flow: row wrap;
            align-items: flex-start;
        }
    }
</style>
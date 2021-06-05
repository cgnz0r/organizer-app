<template>
    <div class="day-items__wrapper">
        <WeekDay 
            v-for="day in weekDays" 
            :day="day"
            :key="day" 
        />
    </div>
</template>

<script>
    import moment from "moment";
    import WeekDay from './WeekDay';

    export default {
        data() {
            return {
                formatString: 'ddd, Do',
                weekDays: [],
            };
        },
        components: {
            WeekDay
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
            flex-flow: column wrap;
            align-items: center;
        }
    }
</style>
<template>
    <div class="day-items__wrapper">
        <SimpleCarousel :items-per-view="3">
            <WeekDay 
                v-for="day in weekDays" 
                :day="day"
                :key="day" 
            />
        </SimpleCarousel>
    </div>
</template>

<script>
    import moment from "moment";
    import WeekDay from './WeekDay';
    import SimpleCarousel from "vue2-simple-carousel";

    export default {
        data() {
            return {
                formatString: 'ddd, Do',
                weekDays: [],
            };
        },
        components: {
            WeekDay,
            SimpleCarousel
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
    @import '../assets/styles/main.scss';

    .carousel {
        &__button {
            border: none;
            background: $primary;
            border-radius: 50%;
            width: 40px;
            height: 40px;

            &:hover {
                background: $hovered-dark;
            }

            &--next {
                right: 8px !important;

                & > span {
                    color: $light;
                }
            }

            &--prev {
                left: 8px !important;

                & > span {
                    color: $light;
                }
            }
        }
    }
</style>
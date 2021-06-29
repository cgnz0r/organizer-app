<template>
    <div class="day">
        <div>
            <h3 class="text-afterline">Day tasks</h3>

            <div v-if="isTasksEmpty" class="day__tasks-content">
                <div class="no-content">
                    <p class="no-content__text">
                        Hey, you have no tasks for this day
                    </p>
                    <button class="button mt32" @click="setModalOpenedStatus">Сreate task</button>
                </div>
            </div>

            <div v-else class="day__tasks-content">
                
            </div>

        </div>
        <div>
            <h3 class="text-afterline">Weather forecast</h3>
            <div v-if="isTooLate" class="day__forecast-content">
                <div class="no-content">
                    <img class="no-content__img" src="https://i.pinimg.com/originals/72/a8/91/72a8910613b3df0b066ad2fabf1284a2.png" alt="oops">
                    <h4 class="no-content__title">Oops</h4>
                    <p class="no-content__text">
                        There is no weather forecast for that day due to inaccuracy.
                    </p>
                    <p class="no-content__text-explain">
                        (3 or more days before that day's forecast)
                    </p>
                </div>
            </div>
            <div v-else class="day__forecast-content">
                
            </div>
        </div>

        <CreateTaskModal v-if="isModalOpened" :date=date />

    </div>
</template>

<script>
    import CreateTaskModal from './CreateTaskModal'
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        props: {
            date: String
        },
        data() {
            return {
                
            }
        },
        components: {
            CreateTaskModal
        },
        mounted() {
            this.initDate();
        },
        methods: {
            ...mapMutations({
                setModalOpenedStatus: 'SET_MODAL_OPENED_STATUS'
            }),
            initDate() {
                // parse this.date
                // get it from localStorage
                // set to current
            }
        },
        computed: {
            ...mapGetters({
                isModalOpened: "getModalStatus"
            }),
            isTooLate() {
                return true;
                // task if this day later than today by 3
            },
            isTasksEmpty() {
                return true;
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';

    .day {
        margin: 0 32px;

        &__tasks-content, &__forecast-content {
            margin: 32px;
        }

        & h3 {
            font-size: 28px;
        }
    }
</style>
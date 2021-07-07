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
                <div v-for="task in testData" :key="task.id" class="day__task-card">
                    <div class="day__task-header">
                        <h4>{{ task.title }}</h4>
                        <input type="checkbox" :checked="task.isCompleted">
                    </div>
                    <p class="day__task-description">{{ task.description }}</p>
                    <p class="day__task-time">{{ task.time }}</p>
                </div>
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
                testData: [{
                    id: "365346",
                    title: "Test Task",
                    description: "Desc",
                    time: `11:15 a.m.`,
                    isCompleted: false
                },{
                    id: "3adhd346",
                    title: "sdsgTest Task",
                    description: "Dsgheresc",
                    time: `2:15 a.m.`,
                    isCompleted: true
                }]
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
                return this.testData.length === 0;
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

        &__task-card {
            width: 320px;
            border: 1px solid $primary;
            margin: 8px;

            & > * {
                padding: 16px;
            }
        }

        &__task-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $light;
            background-color: $primary;
        }

        &__task-description {
            border-bottom: 1px solid $grayscale4;
        }

        &__task-time {
            color: $grayscale4;
        }
    }
</style>
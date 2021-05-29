<template class="day-item">
    <div class="day-item__wrapper">

        <!-- todo weather -->
        <div class="day-item__title">{{ day }}</div>
        <div class="day-item__tasks">
            <ul class="day-item__ul-task">
                <li class="day-item__li-task" v-for="task in tasks" :key="task.id">
                    <div class="day-item__input-group">
                        <div class="day-item__task-element">
                            <input :id="task.id" type="checkbox" :checked="task.isCompleted">
                        </div>
                        <div class="day-item__task-element">
                            <label :for="task.id" class="day-item__task-name">{{ task.name }}</label>
                            <p class="day-item__task-desc">{{ task.desc }}</p>
                        </div>
                    </div>
                    <div class="day-item__task-element">
                        <p class="day-item__task-time">{{ task.time }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            day: String
        },
        data() {
            return {
                // todo move to vuex
                tasks: [{
                    id: 1,
                    name: 'task 1', 
                    desc: 'descdescdesc descdesc desc desc',
                    time: '10 am',
                    isCompleted: false
                }, { 
                    id: 2,
                    name: 'task 2', 
                    desc: 'desc',
                    time: '12 am',
                    isCompleted: true
                }, { 
                    id: 3,
                    name: 'task 3',
                    desc: 'desc',
                    time: '5 pm',
                    isCompleted: false
                }]
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';

    .day-item {
        &__wrapper {
            display: flex;
            flex-flow: column nowrap;
            margin-top: 10px; 
            padding: 10px 5px;
            width: 200px;
            box-shadow: 0 0 5px 1px $secondary;

            &:first-child {
                border: 1px solid $primary;
                box-shadow: 0px 7px 7px -4px $primary;

                & .day-item__title {
                    color: $primary;
                }
            }
        }

        &__title {
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid $secondary;
        }

        &__ul-task {
            padding: 0;
            margin: 0;
        }

        &__li-task {
            list-style-type: none;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }

        &__input-group {
            display: flex;
        }

        &__task-element {
            padding: 5px;
        }

        &__task-name {
            
        }

        &__task-desc, &__task-time {
            color: $secondary;
            font-size: 14px;
        }

        &__task-desc {
            
        }

        &__task-time {
            padding-top: 3px;
            white-space: nowrap;
        }
    }
</style>
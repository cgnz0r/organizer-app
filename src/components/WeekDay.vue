<template class="weekday-item">
    <div class="weekday-item__wrapper">
        <div class="weekday-item__title-group">
            <div class="weekday-item__title">{{ day }}</div>
            <div v-if="today == day" class="weekday-item__today">today</div>
            <div class="weekday-item__weather">{{ weather }}&#176;С</div>
        </div>
        <div class="weekday-item__tasks">
            <ul class="weekday-item__ul-task">
                <li class="weekday-item__li-task" v-for="task in tasks" :key="task.id">
                    <div class="weekday-item__input-group">
                        <div class="weekday-item__task">
                            <input :id="task.id" type="checkbox" :checked="task.isCompleted">
                        </div>
                        <div class="weekday-item__task">
                            <label :for="task.id" class="weekday-item__task-title">{{ task.title }}</label>
                            <p class="weekday-item__task-desc">{{ task.desc }}</p>
                        </div>
                    </div>
                    <div class="weekday-item__task">
                        <p class="weekday-item__task-time">{{ task.time }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="weekday-item__add-btn-wrapper">
            <button class="weekday-item__add-btn" @click='openModal'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 768 768">
                    <title>add task</title>
                    <path d="M160 416h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32v-192h192c17.664 0 32-14.336 32-32s-14.336-32-32-32h-192v-192c0-17.664-14.336-32-32-32s-32 14.336-32 32v192h-192c-17.664 0-32 14.336-32 32s14.336 32 32 32z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import { mapMutations } from 'vuex';

    export default {
        props: {
            day: String
        },
        data() {
            return {
                // task update fields on mount
                taskTime: moment().format("hh:mm a"),
                tasks: [{
                    id: 1,
                    title: 'task 1', 
                    desc: 'descdescdesc descdesc desc desc',
                    time: '10 am',
                    isCompleted: false
                }, { 
                    id: 2,
                    title: 'task 2', 
                    desc: 'desc',
                    time: '12 am',
                    isCompleted: true
                }, { 
                    id: 3,
                    title: 'task 3',
                    desc: 'desc',
                    time: '5 pm',
                    isCompleted: false
                }]
            }
        },
        computed: { },
        methods: {
            ...mapMutations('tasks', 
                ['SET_ITEM']
            ),
            ...mapMutations({
                setModalOpenedStatus: 'SET_MODAL_OPENED_STATUS'
            }),
            updateFieldsTime() {
                const currTime = moment();
                
                // task am pm update
            },
            openModal() {
                this.setModalOpenedStatus();
            }
        },
        
    }
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';

    .weekday-item {
        &__wrapper {
            display: flex;
            flex-flow: column nowrap;
            border-radius: 8px;
            margin-bottom: 32px; 
            padding: 0 20px;
            width: 300px;
            box-shadow: 0 2px 5px 1px $grayscale4;

            &:last-child {
                margin-bottom: 0;
            }

            & > *:not(:last-child) {
                border-bottom: 1px solid $grayscale4;
            }

            & > * {
                padding: 16px 0;
            }

            // task active day check
            &:first-child {
                border: 1px solid $active;
            }
        }

        &__title-group {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;

            & > * {
                flex: 0 0 33%;
            }
        }

        &__title {
            font-weight: 600;
            font-size: 16px;
            text-align: left;
            padding: 10px 0;
        }

        &__today {
            text-align: center;
            color: $active;
        }

        &__weather {
            text-align: right;
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

        &__task {
            padding: 5px;
        }

        &__task-title {
            
        }

        &__task-desc, &__task-time {
            color: $grayscale4;
            font-size: 14px;
        }

        &__task-desc {
            
        }

        &__task-time {
            padding-top: 3px;
            white-space: nowrap;
        }

        &__add-btn {
            cursor: pointer;
            border: none;
            background: $primary;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            fill: $light;

            &-wrapper {
                display: flex;
                justify-content: center;
            }

            &:hover {
                background: $hovered-dark;
            }
        }
    }
</style>
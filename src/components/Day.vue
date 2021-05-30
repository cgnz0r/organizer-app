<template class="day-item">
    <div class="day-item__wrapper">
        <div class="day-item__title-group">
            <div class="day-item__title">{{ day }}</div>
            <div v-if="today == day" class="day-item__today">today</div>
            <div class="day-item__weather">{{ weather }}&#176;С</div>
        </div>
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
        <div class="day-item__add-btn-wrapper">
            <button class="day-item__add-btn" @click='openAddModal'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 768 768">
                    <title>add todo</title>
                    <path d="M160 416h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32v-192h192c17.664 0 32-14.336 32-32s-14.336-32-32-32h-192v-192c0-17.664-14.336-32-32-32s-32 14.336-32 32v192h-192c-17.664 0-32 14.336-32 32s14.336 32 32 32z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        props: {
            day: String
        },
        data() {
            return {
                weather: 15,
                today: "Sun, 30th",
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
        },
        methods: {
            ...mapMutations('todos', ['setItem']),
            openAddModal() {
                console.log("openAddModal") // Modal.vue
            }
        },
        
    }
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';

    .day-item {
        &__wrapper {
            display: flex;
            flex-flow: column nowrap;
            margin-top: 30px; 
            padding: 0 20px;
            width: 300px;
            box-shadow: 0 2px 5px 1px $secondary;

            & > *:not(:last-child) {
                border-bottom: 1px solid $secondary;
            }

            & > * {
                padding: 16px 0;
            }

            // todo active day check
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

        &__add-btn {
            border: none;
            background: white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            box-shadow: 0px 2px 5px 1px $secondary;

            &-wrapper {
                display: flex;
                justify-content: center;
            }

            &:hover {
                box-shadow: 0px 2px 5px 1px $active;
                fill: $active;
            }
        }
    }
</style>
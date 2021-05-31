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
                        <div class="day-item__task">
                            <input :id="task.id" type="checkbox" :checked="task.isCompleted">
                        </div>
                        <div class="day-item__task">
                            <label :for="task.id" class="day-item__task-title">{{ task.title }}</label>
                            <p class="day-item__task-desc">{{ task.desc }}</p>
                        </div>
                    </div>
                    <div class="day-item__task">
                        <p class="day-item__task-time">{{ task.time }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="day-item__add-btn-wrapper">
            <button class="day-item__add-btn" @click='toggleModal'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 768 768">
                    <title>add todo</title>
                    <path d="M160 416h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32v-192h192c17.664 0 32-14.336 32-32s-14.336-32-32-32h-192v-192c0-17.664-14.336-32-32-32s-32 14.336-32 32v192h-192c-17.664 0-32 14.336-32 32s14.336 32 32 32z"></path>
                </svg>
            </button>
        </div>
        <Modal 
            v-if="isModalOpened"
        > 
            <template v-slot:title>
                <h3>Todo add form</h3>
            </template>
            <template v-slot:main>
                <div class="modal__input-group">
                    <label for="title" class="modal__label">Title</label>
                    <input id="title" type="text">
                </div>
                <div class="modal__input-group">
                    <label for="desc"></label>
                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Enter description..."></textarea>
                </div>

                <span>choose time</span> <span><strong>todo</strong></span>
            </template>
            <template v-slot:accept-button>
                <button @click="addTodo" class="add-btn">Create</button>
            </template>
        </Modal>
    </div>
</template>

<script>
//@close="isModalOpened = false"
    import { mapMutations, mapState } from 'vuex'
    import Modal from './Modal'

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
        components: {
            Modal
        },
        computed: {
            ...mapState(['isModalOpened'])
        },
        methods: {
            ...mapMutations('todos', ['SET_ITEM']),
            ...mapMutations({
                toggleModal: 'TOGGLE_MODAL'
            }),
            addTodo() {
                console.log("add todo handle");
                this.toggleModal();
            },
            
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
            box-shadow: 0 2px 5px 1px $grayscale4;

            & > *:not(:last-child) {
                border-bottom: 1px solid $grayscale4;
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
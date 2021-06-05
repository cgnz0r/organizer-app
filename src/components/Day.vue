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
            <button class="day-item__add-btn" @click='openModal'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 768 768">
                    <title>add todo</title>
                    <path d="M160 416h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32v-192h192c17.664 0 32-14.336 32-32s-14.336-32-32-32h-192v-192c0-17.664-14.336-32-32-32s-32 14.336-32 32v192h-192c-17.664 0-32 14.336-32 32s14.336 32 32 32z"></path>
                </svg>
            </button>
        </div>
        <Modal 
            v-if="isModalOpened"
            @onClose="closeModal"
            @onAccept="createTodo"
            :acceptTitle="acceptTitle"
        >
            <template v-slot:title>
                <span class="modal__title">Todo add form</span>
            </template>
            <template v-slot:main>
                <div class="modal__input-group">
                    <label for="title" class="modal__label">Title</label>
                    <input 
                        id="title" 
                        type="text" 
                        class="modal__input modal__input_text" 
                        placeholder="Enter your title" 
                        autocomplete="off"
                        v-model.lazy="todoTitle"
                    />
                </div>
                <div class="modal__input-group">
                    <label for="desc" class="modal__label">Description</label>
                    <textarea 
                        id="desc" 
                        name="desc" 
                        class="modal__input modal__input_textarea" 
                        rows="5" 
                        placeholder="Enter your description..." 
                        v-model.lazy="todoDesc"
                    />
                </div>

                <div class="modal__input-group">
                    <fieldset class="modal__input-fieldset">
                        <legend>Time</legend>

                        <div class="modal__input-group">
                            <label for="form-hours" class="modal__label">hrs</label>
                            <input id="form-hours" class="modal__input modal__input_text" type="text" v-model.lazy="formHours">
                        </div>
                        <div class="modal__input-group">
                            <label for="form-minutes" class="modal__label">mins</label>
                            <input id="form-minutes" class="modal__input modal__input_text" type="text" v-model.lazy="formMinutes">
                        </div>
                        <div class="modal__input-group">
                            <label for="form-ampm" class="modal__label">am / pm</label>
                            <select name="form-ampm" id="form-ampm" class="modal__input modal__input_select">
                                <option class="modal__option" value="am">a.m.</option>
                                <option class="modal__option" value="pm">p.m.</option>
                            </select>
                        </div>
                    </fieldset>
                </div>
            </template>
            <template v-slot:accept-button>
                <button 
                    @click="createTodo" 
                    class="modal__accept-button" 
                    type="button"
                >
                    Create
                </button>
            </template>
        </Modal>
    </div>
</template>

<script>
    import moment from 'moment';
    import { mapMutations } from 'vuex'
    import Modal from './Modal'
    export default {
        props: {
            day: String
        },
        data() {
            return {
                isModalOpened: false,
                acceptTitle: "Create",
                todoTitle: "",
                todoDesc: "",
                formHours: "",
                formMinutes: "",
                ampm: "",
                // todo update fields on mount
                todoTime: moment().format("hh:mm a"),

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
        computed: { },
        methods: {
            ...mapMutations('todos', 
                ['SET_ITEM']
            ),
            ...mapMutations({
                setModalOpenedStatus: 'SET_MODAL_OPENED_STATUS', 
                setModalClosedStatus: 'SET_MODAL_CLOSED_STATUS'
            }),
            updateFieldsTime() {
                const currTime = moment();
                this.formHours = currTime.format("hh");
                this.formMinutes = currTime.format("mm");
                // todo am pm update
            },
            closeModal() {
                this.isModalOpened = false;
                this.setModalClosedStatus();
            },
            openModal() {
                this.updateFieldsTime();
                this.isModalOpened = true;
                this.setModalOpenedStatus();
            },
            createTodo() {
                console.log("add todo handle :: todoTitle", this.todoTime);
                this.closeModal();
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
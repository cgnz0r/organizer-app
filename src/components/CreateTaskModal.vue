<template>
    <div class="modal__overlay">
        <form v-on:submit.prevent class="modal__wrapper">
            
            <!-- top section -->
            <div class="modal__top-section">
                <span class="modal__title">Task creation</span>
                <button type="button" @click="setModalClosedStatus" class="modal__close-button">
                    <span>x</span>
                </button>
            </div>

            <!-- middle section -->
            <div class="modal__middle-section">

                <!-- title -->
                <div class="modal__input-group">
                    <label for="title" class="modal__label">Title</label>
                    <input 
                        id="title" 
                        type="text" 
                        class="modal__input modal__input_text" 
                        placeholder="Enter your title" 
                        autocomplete="off"
                        v-model.lazy="title"
                    />
                </div>

                <!-- description -->
                <div class="modal__input-group">
                    <label for="desc" class="modal__label">Description</label>
                    <textarea 
                        id="desc" 
                        name="desc" 
                        class="modal__input modal__input_textarea" 
                        rows="5" 
                        placeholder="Enter your description..." 
                        v-model.lazy="description"
                    />
                </div>

                <!-- time --> 
                <div class="modal__input-group">
                    <fieldset class="modal__input-fieldset">
                        <legend>Time</legend>

                        <!-- hours -->
                        <div class="modal__input-group">
                            <label for="form-hours" class="modal__label">hrs</label>
                            <input 
                                id="form-hours" 
                                class="modal__input modal__input_number" 
                                autocomplete="off"
                                type="number"
                                min="0"
                                max="60"
                                step="1"
                                v-model.lazy="hours"
                            />
                        </div>

                        <!-- minutes -->
                        <div class="modal__input-group">
                            <label for="form-minutes" class="modal__label">mins</label>
                            <input 
                                id="form-minutes" 
                                class="modal__input modal__input_number" 
                                autocomplete="off"
                                type="number"
                                min="0"
                                max="60"
                                step="1"
                                v-model.lazy="minutes"
                            />
                        </div>

                        <!-- am pm -->
                        <div class="modal__input-group">
                            <label for="form-interval" class="modal__label">am / pm</label>
                            <select 
                                id="form-interval" 
                                name="form-interval" 
                                class="modal__input modal__input_select"
                                v-model="interval"
                            >
                                <option class="modal__option" value="am">a.m.</option>
                                <option class="modal__option" value="pm">p.m.</option>
                            </select>
                        </div>
                    </fieldset>
                </div>
            </div>

            <!-- bottom section -->
            <div class="modal__bottom-section">
                <button type="button" @click="setModalClosedStatus" class="modal__close-button modal__close-button_border_none">
                    Cancel
                </button>
                <button type="button" @click="createTask" class="modal__accept-button">
                    Create
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import moment from 'moment';
    import { mapMutations, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                title: "",
                description: "",
                hours: "",
                minutes: "",
                interval: ""
            }
        },
        props: {
            date: String
        },
        mounted() {
            const now = moment();
            // todo set time
            console.log("CreateTaskModal :: mounted", now);
        },
        computed: {
            ...mapGetters({
                isModalOpened: "getModalStatus"
            })
        },
        methods: {
            ...mapMutations({
                setModalClosedStatus: 'SET_MODAL_CLOSED_STATUS'
            }),
            createTask() {
                // todo create task
                console.log("CreateTaskModal :: createTask");
                this.setModalClosedStatus();
            }
        }        
    }
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';

    .modal {
        $g: &;

        &__overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,.4);
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(2px);
        }

        &__wrapper {
            background: $light;
            border: none;
            border-radius: 8px;
            width: 550px;
            padding: 24px;
            box-shadow: 0px 2px 8px 2px $grayscale4;
            color: $primary;

            & > *:not(:last-child) {
                margin-bottom: 32px;
            }
        }

        &__top-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__top-section, &__middle-section {
            border-bottom: 1px solid $grayscale2;
            padding-bottom: 24px;
        }

        &__bottom-section {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }

        &__title {
            font-size: 24px;
            font-weight: 400;
            user-select: none;
        }

        &__input-group {
            margin: 16px 0;
            display: flex;
            flex-flow: column nowrap;
        }

        &__label {
            margin: 4px 0;
            cursor: pointer;
            user-select: none;
        }

        &__input {
            padding: 16px;
            border: 1px solid $grayscale2;
            background: $light;
            cursor: text;
            border-radius: 2px;

            &_textarea {
                resize: none;
            }

            &_select {
                cursor: pointer;
            }
        }

        &__input-fieldset {
            display: flex;

            & #{$g}__input-group {
                width: 88px;
                margin: 0 20px 0 0;
            }

            & #{$g}__input-group:last-child {
                width: 88px;
                margin: 0;
            }

            & #{$g}__input_number {
                padding: 8px 16px;
                text-align: center;
            }

            & #{$g}__input_select {
                padding: 8px 16px;
            }
        }

        &__option {
            padding: 8px;
        }

        &__accept-button, &__close-button {
            background: $primary;
            color: $light;
            border: none;
            cursor: pointer;
            border-radius: 2px;

            &:hover {
                background: $hovered-dark;
            }
        }

        &__accept-button {
            width: 96px;
            height: 36px;
        }

        &__close-button {
            width: 32px;
            height: 32px;
        }

        &__close-button_border_none {
            width: 96px;
            height: 36px;
            background: $light;
            color: $primary;
            margin: 0 16px;

            &:hover {
                background: $hovered-light;
            }
        }
    }
</style>
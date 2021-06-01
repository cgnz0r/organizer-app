<template>
    <div class="modal__overlay">
        <div class="modal__wrapper">
            <div class="modal__top-section">
                <slot name="title" class="modal__title"></slot>
                <button class="modal__close-button" @click="closeModal">
                    <span>x</span>
                </button>
            </div>
            <div class="modal__middle-section">
                <slot name="main"></slot>
            </div>
            <div class="modal__bottom-section">
                <button 
                    @click="closeModal"
                    class="modal__close-button modal__close-button_border_none"
                >
                    Cancel
                </button>
                <slot name="accept-button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            acceptTitle: String
        },
        methods: {
            closeModal() {
                this.$emit("onClose");
            }
        }        
    }
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';

    .modal {
        &__overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,.13);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__wrapper {
            background: $light;
            border: none;
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
            height: 50px;
            border-bottom: 1px solid $primary;
        }

        &__middle-section {
            padding-bottom: 20px;
            border-bottom: 1px solid $primary;
        }

        &__bottom-section {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }

        &__input-group {
            margin: 16px 0;
            display: flex;
            flex-flow: column nowrap;
        }

        &__label {
            margin: 4px 0;
            cursor: pointer;
        }

        &__textarea, &__input-time, &__input-text {
            padding: 16px;
            border: 1px solid $grayscale2;
            background: $light;
            // box-shadow: 0px 4px 8px -4px $grayscale4;
            cursor: text;
        }

        &__textarea {
            resize: none;
        }

        &__input-time {

        }

        &__input-text {

        }

        &__accept-button, &__close-button {
            background: $primary;
            color: $light;
            border: none;
            cursor: pointer;

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
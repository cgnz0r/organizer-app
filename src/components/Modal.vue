<template>
    <div class="modal__overlay">
        <div class="modal__wrapper">
            <div class="modal__top-section">
                <slot name="title"></slot>
                <button 
                    @click="closeModal"
                    class="modal__close-button" 
                    type="button"
                >
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
                    type="button"
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
                width: 52px;
                margin: 0 20px 0 0;
                text-align: center;
            }

            & #{$g}__input-group:last-child {
                width: 88px;
                margin: 0;
            }

            & #{$g}__input_text {
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
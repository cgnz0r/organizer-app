<template>
    <div class="modal__overlay">
        <div class="modal__wrapper">
            <div class="modal__top-section">
                <slot name="title"></slot>
                <button class="btn" @click="closeModal">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 768 768">
                        <title>close</title>
                        <path d="M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"></path>
                    </svg>
                </button>
            </div>
            <div class="modal__middle-section">
                <slot name="main"></slot>
            </div>
            <div class="modal__bottom-section">
                <slot name="accept-button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                toggleModal: 'TOGGLE_MODAL'
            }),
            closeModal() {
                this.toggleModal();
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
            position: fixed;
            background: $light;
            border: 1px solid black;
            padding: 24px;
            border-radius: 4px;

            & > *:not(:last-child) {
                margin-bottom: 32px;
            }
        }

        &__top-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            border-bottom: 1px solid gray;
        }

        &__middle-section {
            padding-bottom: 20px;
            border-bottom: 1px solid gray;
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
    }

    .btn {
        border: none;
        background: $light;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        fill: $primary;
        display: flex;
        justify-content: center;
        align-items: center;

        &-wrapper {
            display: flex;
            justify-content: center;
        }

        &:hover {
            background: $hovered-light;
        }
    }
</style>
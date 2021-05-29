<template>
    <div>
        <header class="header">
            <div class="header__left-side">
                <Weather />
            </div>
            <div class="header__right-side">
                <Time />
            </div>
        </header>
        <main>
            <Week />
        </main>
    </div>
</template>

<script>
    import Time from './components/Time';
    import Weather from './components/Weather';
    import Week from './components/Week';

    export default {
        name: 'App',
        components: {
            Time,
            Weather,
            Week
        },
        data() {
            return { }
        }
    };
</script>

<style lang="scss">
    @import './assets/styles/main.scss';

    .header {
        height: 60px;
        background: $primary;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        font-size: 14px;
        box-shadow: 0 1px 5px 1px gray;

        &__left-side {
            padding-left: 20px;
        }
        
        &__right-side {
            padding-right: 20px;
        }
    }
</style>
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
        height: 50px;
        background: $primary;
        display: flex;
        justify-content: space-between;
        font-weight: 600;

        & > * {
            padding: 10px 20px;
        }

        &__left-side {
            
        }
        
        &__right-side {

        }
    }
</style>
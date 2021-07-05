<template>
  <div class="wrapper" :class="{ 'hidden-y-scroll': isModalOpened }">
        <header class="header">
            <div class="header__left">
                <div class="logo">
                    Organizer
                </div>
            </div>
            <div class="header__center">
                <Weather />
            </div>
            <div class="header__right">
                <Time />
            </div>
        </header>
        <main class="main">
            <!-- <Week /> -->
            <Day />
        </main>
        <footer class="footer">
            info in the footer
        </footer>
    </div>
</template>

<script>
    import Time from './components/Time';
    import Weather from './components/Weather';
    import Day from './components/Day';
    // import Week from './components/Week';
    import { mapMutations, mapGetters, mapState } from 'vuex';

    export default {
        name: 'App',
        components: {
            Time,
            Weather,
            // Week
            Day
        },
        data() {
            return { }
        },
        methods: {
            ...mapMutations('tasks', {
                initData: 'INIT_DATA', 
                stashData: 'STASH_DATA'
            }),
        },
        mounted() {
            this.initData();
        },
        computed: {
            ...mapGetters('tasks', ['getData']),
            ...mapState(['isModalOpened'])
        },
        watch: {
            getData(data) {
                console.log("App :: get Data", data);
            }
        },
        beforeDestroy() {
            this.stashData();
        }
    };
</script>

<style lang="scss">
   @import './assets/styles/main.scss';

    .wrapper {
        position: relative;
        height: 100vh;
        overflow: auto;
        display: flex;
        flex-flow: column nowrap;
    }

    .hidden-y-scroll {
        overflow-y: hidden;
    }

    .header {
        height: 60px;
        background: $primary;
        color: $light;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
        box-shadow: 0 1px 5px 1px gray;

        & > * {
            flex: 0 0 33%;

            & > * {
                margin: 0 24px;
            }
        }

        &__center {
            text-align: center;
        }
        
        &__right {
            text-align: right;
        }
    }

    .main {
        margin: 32px 0;
        flex: 0 1 100%;
    }

    .footer {
        height: 50px;
        background: $primary;
        color: $light;
        text-align: center;
    }
</style>
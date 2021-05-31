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
    import { mapMutations, mapGetters } from 'vuex';

    export default {
        name: 'App',
        components: {
            Time,
            Weather,
            Week
        },
        data() {
            return { }
        },
        methods: {
            ...mapMutations('todos', [
                'INIT_DATA'
            ]),
        },
        mounted() {
            this.INIT_DATA();
        },
        computed: {
            ...mapGetters('todos', ['getData'])
        },
        watch: {
            getData(data) {
                console.log("App :: get Data", data);
                // localStorage.setItem('org_todos', JSON.stringify(data));
            }
        }
    };
</script>

<style lang="scss">
    @import './assets/styles/main.scss';

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

        &__left-side {
            padding-left: 20px;
        }
        
        &__right-side {
            padding-right: 20px;
        }
    }
</style>
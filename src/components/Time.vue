<template>
    <span>{{ timeNow }}</span>
</template>

<script>
    import moment from 'moment';

    export default {
        data() {
            return {
                timeNow: "",
            };
        },
        mounted() {
            this.time();
        },
        methods: {
            time() {
                this.timeNow = moment().format("MMM Do YYYY, hh:mm:ss a");
                setTimeout(this.time, 1000);
            },
        }
    };
</script>
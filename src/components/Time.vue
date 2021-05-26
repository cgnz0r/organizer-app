<template>
    <span>{{ timeNow }}</span>
</template>

<script>
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
                this.timeNow = new Date().toUTCString();
                setInterval(this.time, 1000);
            },
        }
    };
</script>
<template>
    <span>{{ city }} {{ temp }}&#176;С</span>
</template>

<script>
    export default {
        data() {
            return {
                weatherData: {},
            }
        },
        async created() {
            try {
                const data = (await this.$api.forecast.getCurrentWeather()).data;
                this.weatherData = data.data[0];
                localStorage.setItem('city', this.weatherData.city_name);
            } catch (error) {
                console.log(error.response.data);
            }
        },
        computed: {
            city() {
                return this.weatherData.city_name || "";
            },
            temp() {
                return this.weatherData.temp || "";
            }
        }
    }
</script>
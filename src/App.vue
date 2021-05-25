<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span>{{ city }} {{ temp }}&#176;С {{ }}</span>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
        <pre style="font-size: 12px;">{{ weatherData }}</pre>
    </v-main>
  </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {
        
        },
        data() {
            return {
                weatherData: {}
            }
        },
        computed: {
            city() {
                return this.weatherData.city_name || "";
            },
            temp() {
                return this.weatherData.temp || "";
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
        }
    };
</script>

<style lang="scss"></style>
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <Weather />
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
          <Time />
      </div>
    </v-app-bar>

    <v-main>
        <Week />
    </v-main>
  </v-app>
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
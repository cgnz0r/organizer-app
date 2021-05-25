import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import ApiPlugin from './plugins/api'

Vue.use(ApiPlugin);

Vue.config.productionTip = false

import './assets/styles/main.scss';

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

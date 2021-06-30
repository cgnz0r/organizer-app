import Vue from 'vue';
import App from './App.vue';

import ApiPlugin from './plugins/api';
import store from './store';

Vue.use(ApiPlugin);

Vue.config.productionTip = false;

Vue.prototype.$dateFormat = "DD.MM.YYYY";

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

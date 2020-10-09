import Vue from 'vue'
import App from './App.vue'

import { Select } from 'ant-design-vue';

Vue.use(Select);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

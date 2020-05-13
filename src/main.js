import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// create instance of Vue for eventBus
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ELementUI from 'element-ui'

Vue.use(ELementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

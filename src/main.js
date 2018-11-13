import Vue from 'vue'
import App from './App.vue'
import ELementUI from 'element-ui'
import '../css/common.css'
import Axios from 'axios'

Vue.use(ELementUI)
Vue.prototype.$http= Axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//Leaflet全局配置
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.wmts'

//Vue.use(L)
Vue.prototype.L = L

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

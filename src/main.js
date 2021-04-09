import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

import '@/assets/scss/global.scss'

import VueAxios from './plugins/axios'
Vue.use(VueAxios)

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2)

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

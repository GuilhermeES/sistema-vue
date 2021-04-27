import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'

import { axios } from '@/plugins/axios'

const axiosPlugin = store => {
   store.$axios = axios 
}

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [axiosPlugin],
  modules:{users}
})


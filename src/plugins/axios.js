import ax from 'axios'

ax.defaults.baseURL = 'http://localhost:3000/users'


export const axios = ax

export default {
    install (Vue) {
        Vue.prototype.$axios = ax
    }
}



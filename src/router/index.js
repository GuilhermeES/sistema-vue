import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    redirect: { name: 'usuarios' },
    component: () => import('../views/dashboard/Dashboard.vue'),
    children:[
      {
        path: '/usuarios', name: 'usuarios', component: () => import('../views/dashboard/users/Usuarios.vue'),
      },
      {
        path: '/usuarios/novo', name: 'usuarios.novo', component: () => import('../views/dashboard/users/Novo.vue'),
      },
      {
        path: '/usuario/:id', name: 'usuario.editar', component: () => import('../views/dashboard/users/Editar.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes
})

export default router

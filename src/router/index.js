import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import '../assets/style/animate.css'
import '../assets/style/master.scss'

import Login from '@/components/core/login.comp'
import Register from '@/components/core/register.comp'
import Home from '@/components/core/home.comp'

import Dashboard from '@/components/core/dash.comp'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {path: '/', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '/home', name: 'home', component: Home, children: [
      {path: 'dashboard', name: 'dashboard', component: Dashboard}
    ]},
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import HelloWorld from '@/components/HelloWorld'
import IndexDashboard from '@/components/dashboard/index.vue'
import Login from '@/components/auth/login.vue'
import Registerasi from '@/components/auth/registerasi.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registerasi',
      name: 'Registerasi',
      component: Registerasi
    },
    {
      path: '/indexDashboard',
      name: 'indexDashboard',
      component: IndexDashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('indexDashboard')
  else next()

})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import Login from '@/components/auth/login.vue'
import HelloWorld from '@/components/HelloWorld'
import Registerasi from '@/components/auth/registerasi.vue'
import Dashboard from '@/components/dashboard/dashboard.vue'
import Pengaturan from '@/components/pengaturan/pengaturan.vue'

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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pengaturan',
      name: 'Pengaturan',
      component: Pengaturan,
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
  else if (!requiresAuth && currentUser) next('dashboard')
  else next()

})

export default router

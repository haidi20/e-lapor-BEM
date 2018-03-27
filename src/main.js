// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import index from './index'
import router from './router'
import firebase from 'firebase'
// import VueFire from 'vuefire'

Vue.config.productionTip = false

let app ;
let config = {
    apiKey: "AIzaSyCi1Ff7cjOMD1mEyU_q6R4TVDJmZ-xHtKY",
    authDomain: "lapor-28791.firebaseapp.com",
    databaseURL: "https://lapor-28791.firebaseio.com",
    projectId: "lapor-28791",
    storageBucket: "lapor-28791.appspot.com",
    messagingSenderId: "480303218320"
  };

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { index },
      template: '<index/>'
    })
  }
})

/* eslint-disable no-new */

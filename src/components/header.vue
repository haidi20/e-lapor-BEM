<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#" style="font-size:30px">Lapor-BEM</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav" v-if="user != 'admin@bem.com'">
          <li>
            <router-link v-bind:to="'dashboard'">
              <a href="#" style="color:white">Home</a>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="'history'">
              <a href="#" style="color:white">
                History Lapor
              </a>
            </router-link>
          </li>
          <!-- <li>
            <router-link v-bind:to="'pengaturan'">
              <a href="#" style="color:white">
                  Pengaturan
              </a>
            </router-link>
          </li> -->
          <li> <a href="#" v-on:click="logout">Logout</a></li>
        </ul>
        <ul class="nav navbar-nav" v-else>
          <li> <a href="#" v-on:click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      user: firebase.auth().currentUser.email
    }
  },
  mounted(){
    // console.log(firebase.auth().currentUser.email)
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-3 col-xs-offset-4 text-center" style="margin-top:30px">
        <div class="logo">
          logo
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 text-center auth">
        <h1>Login</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <div class="form-group">
          <input type="text" v-model="email" class="form-control text-center"  name="email" placeholder="Insert Your Email">
          <br>
          <input type="password" v-model="password" class="form-control text-center"  name="password" placeholder="Password">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <button
          type="button"
          class="btn btn-success btn-large btn-block"
          name="kirim"
          v-on:click="kirim"
          style="font-size:20px"
        >
            Login Untuk Melapor
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-2 text-right" style="margin-top:10px">
        Belum punya ID ?
        <router-link v-bind:to="'Registerasi'">
          <a href="#" class="btn btn-md btn-info">Daftar Baru</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    kirim: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
           this.$router.replace('indexDashboard')
           // console.log(user)
         },
         (err) => {
           alert('Oops. ' + err.message)
         }
      )
    }
  }
}
</script>

<style lang="css">
  .auth {
    margin-top: 90px;
  }
  .logo{
    width: 50px;
    height: 50px;
    align:center;
    margin-left:15px;
    padding-top:10px;
    background-color: white ;
    border: 2px solid black;
  }
</style>

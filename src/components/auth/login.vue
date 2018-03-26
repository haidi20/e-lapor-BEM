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
          <input type="text" v-model="email" class="form-control text-center"  name="email" placeholder="Email">
          <br>
          <input type="password" v-model="password" class="form-control text-center"  name="password" placeholder="Password">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <button
          v-if="notif.length"
          type="button"
          class="btn btn-success btn-large btn-block"
          name="kirim"
          v-on:click="kirim"
          style="font-size:20px"
          data-toggle="modal"
          data-target="#pesan"
        >
            Login Untuk Melapor
        </button>
        <button
          v-else
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
    <div class="modal" id="pesan" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Pemberitahuan</h4>
          </div>
          <div class="modal-body">
            <!-- <p v-if="notif.length">{{notif}}</p>
            <p v-else>selamat, email {{email}} telah berhasil di buat.</p> -->
            {{notif}}
          </div>
          <div class="modal-footer">
            <!-- <router-link v-bind:to="'login'"> -->
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                v-on:click="modal"
              >
                  Oke
              </button>

            <!-- </router-link> -->
          </div>
        </div>
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
      password: '',
      notif: ''
    }
  },
  mounted(){
    this.kirim()
  },
  methods: {
    modal: function(){
      this.notif = ''
    },
    kirim: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
            this.$router.replace('Dashboard')
         },
         (err) => {
           // this.notif = err
           // console.log(err)
           if (err.code == 'auth/user-not-found') {
             this.notif = "maaf, Email tidak di temukan"
           }
           if (err.code == 'auth/invalid-email') {
             this.notif = "maaf, Email tersebut tidak valid"
           }
           if (err.code == 'auth/wrong-password') {
             this.notif = 'maaf, Password Anda salah. silahkan di coba kembali'
           }
           if (err.code == '') {
             this.notif = ""
           }
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

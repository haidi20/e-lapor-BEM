<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-3 col-xs-offset-1" align="center" style="margin-top:30px">
        <img src="../../assets/polnes.png" alt="polnes" class="logo-polnes">
      </div>
      <div class="col-xs-3 " align="center" style="margin-top:30px;">
          <img src="../../assets/bem.jpg" alt="BEM" class="logo">
      </div>
      <div class="col-xs-3 " align="center" style="margin-top:30px;">
          <img src="../../assets/kabinet.png" alt="BEM" class="logo">
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-12 text-center auth">
        <h1 style="color:black">Aplikasi Lapor</h1>
      </div>
    </div> -->
    <div class="row">
      <div class="col-xs-12 text-center auth">
        <h1>Register</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <div class="form-group">
          <input type="text" v-model="email" class="form-control text-center"  name="email" placeholder="Email">
          <br>
          <input type="password" v-model="password" class="form-control text-center"  name="password" placeholder="Password">
          <br>
          <input type="password" v-model="re_password" class="form-control text-center" name="re_password" placeholder="re-Password">
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
          data-toggle="modal" data-target="#pesan"
        >
            Registerasi Aplikasi Laporan
        </button>
      </div>
    </div>
    <div class="row" style="margin-top:10px">
      <div class="col-xs-12 text-right">
        Sudah punya akun ?
        <router-link v-bind:to="'login'">
          <a href="#" class="btn btn-md btn-info">Login</a>
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
              <button type="button" class="btn btn-primary" data-dismiss="modal">Oke</button>
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
  name: 'registerasi',
  data(){
    return {
      email: '',
      password: '',
      re_password: '',
      note: '',
      notif: ''
    }
  },
  methods: {
    kirim: function(){
      //kondisi password
      this.rePassword()

      if (this.note == true) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
             this.notif = "selamat, Email "+this.email+" telah berhasil dibuat"
           },
           (err) => {
             // this.notif = err
             if (err.code == 'auth/invalid-email') {
               this.notif = "form email kosong atau tidak valid"
             }
             if (err.code == 'auth/weak-password') {
               this.notif = "form password harus 6 karakter atau lebih"
             }
             if (err.code == 'auth/email-already-in-use') {
               this.notif = "Email sudah ada"
             }
           }
        )
      }
    },
    rePassword(){
      if (this.password != this.re_password) {
        // alert('maaf, passwordnya tidak sama');
        this.notif = "Maaf, password anda tidak sama...!"
        this.note = false ;
      }else{
        this.note = true ;
      }
    }
  }
}
</script>

<style lang="css">
  .auth {
    margin-top: 90px;
  }
</style>

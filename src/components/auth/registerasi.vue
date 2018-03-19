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
        <h1>Register</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <div class="form-group">
          <input type="text" v-model="email" class="form-control text-center"  name="email" placeholder="Insert Your Email">
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
        >
            Registerasi Aplikasi Lapor
        </button>
      </div>
    </div>
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>One fine body…</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
    }
  },
  methods: {
    kirim: function(){
      //kondisi password
      this.rePassword()

      if (this.note == true) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
             // this.$router.go('/login')
             console.log('Login Berhasil')
           },
           (err) => {
             alert('Oops. ' + err.message)
           }
        )
      }
    },
    rePassword(){
      if (this.password != this.re_password) {
        alert('maaf, passwordnya tidak sama');
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

<template lang="html">
  <div class="">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>Pengaturan Akun</h1>
        </div>
      </div>
      <div style="margin-top:30px">
        <div class="alert alert-dismissible alert-warning" v-if="note == true">
          <button type="button" class="close" data-dismiss="alert" v-on:click="perubahan">&times;</button>
          <p>{{this.message}}</p>
        </div>
        <div class="row" >
          <div class="col-xs-12">
            <div class="form-group">
              <label for="pass_new" class="tulisan-label">Password Baru</label>
              <input type="password" class="form-control" v-model="passBaru" id="pass_new" placeholder="">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label for="re_pass_old" class="tulisan-label">Ulang Password Baru</label>
              <input type="password" class="form-control" v-model="passReBaru" id="re_pass_old" placeholder="">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <a href="#"
              class="btn btn-block btn-md btn-success"
              style="font-size:25px"
              v-on:click="cekPass"
            >
                Kirim
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Header from '../header.vue'
export default {
  name: 'Pengaturan',
  components: {Header},
  data(){
    return{
      passBaru : '',
      passReBaru: '',
      note: false,
      message: ''
    }
  },
  methods: {
    cekPass: function(){
      let user = firebase.auth().currentUser ;
      if (this.passBaru != this.passReBaru ) {
        this.note = true;
        this.message = 'Maaf, Password yang anda masukkan tidak sama';
      }
      else if(this.passBaru == '' && this.passReBaru == ''){
        this.note = true;
        this.message = 'Maaf, Form password masih kosong. mohon di isi untuk perubahan password';
      }
      else{
        user.updatePassword(this.passBaru).then(function(data){
          this.note = true;
          this.message = 'Password anda telah berhasil di ganti.';
          alert('password berhasil ganti');
        })
        .catch(function(err){
          alert('error :'+err);
          console.log(err);
        });
      }
      // this.passBaru = '';
      // this.passReBaru = '';
    },
    perubahan: function(){
      this.note = false;
    }
  }
}
</script>

<style lang="css" scoped>
  .tulisan-label{
    font-size:18px
  }
</style>

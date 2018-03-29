<template lang="html">
  <div class="">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title label-ukuran" >Kirim Gambar</h3>
            </div>
            <div class="panel-body text-left">
              <input
                type="file"
                title="gambar"
                id="gambar"
                name="gambar"
                v-on:change="dapatGambar"
                accept="gambar/*"
                v-model="tempat_gambar"
              >
              <br>
              <img
                v-if="gambar.length"
                :src="gambar" alt="gambar"
                width="300px" height="250px"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
           <label for="textArea" class="col-xs-12 text-left label-ukuran" >Isi Laporan :</label>
             <textarea class="form-control" rows="8" id="textArea" v-model="lapor"></textarea>
         </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 ">
          <a href="#"
            class="btn btn-md btn-block btn-success"
            @click="kirim" style="font-size:20px"
            data-target="#pesan"
            data-toggle="modal"
          >
            Kirim
          </a>
        </div>
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
            Laporan Telah Terkirim
          </div>
          <div class="modal-footer">
            <!-- <router-link v-bind:to="'login'"> -->
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
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
import Header from '../header.vue';
import firebase from 'firebase';

export default {
  name: 'Dashboard',
  components : {
    Header
  },
  data(){
    return{
      gambar: '',
      laporan: '',
      tempat_gambar: ''
    }
  },
  mounted(){
    if (firebase.auth().currentUser.email == 'admin@bem.com') {
      this.$router.replace('Admin')
    }
    console.log(firebase.auth().currentUser.email) ;
  },
  methods: {
    kirim: function(){
      let nama_gambar = this.acak();
      let user_id = firebase.auth().currentUser.uid ;
      let lapor = this.lapor ;

      let storageUrl = 'gambar/';
      let storageUrlData = 'post';

      let storageRef = firebase.storage().ref(storageUrl + nama_gambar);
      let databaseRef = firebase.database().ref(storageUrlData);


      let uploadTask = storageRef.putString(this.gambar, 'data_url',{contentType:`image/jpg`}) ;
      uploadTask.then(
        (user) => {
          // console.log(user.metadata.downloadURLs[0])
          let uploadData = databaseRef.push({
            user_id: user_id,
            gambar: user.metadata.downloadURLs[0],
            lapor: lapor
          }) ;
        },
        (err) => {
          console.log(err)
        }
      );

      this.lapor = '' ;
      this.gambar = '' ;
      this.tempat_gambar = '' ;
    },
    dapatGambar: function(e){
      let gbr = e.target.files[0];

      // file di masukkan fungsi membaca file
      this.baca(gbr);
    },
    baca: function(gbr){
      let reader = new FileReader();
      reader.readAsDataURL(gbr);
      reader.onload = e => {
        this.gambar = e.target.result ;
      }
      reader.onerror = e => {
        console.log('failed file road: '+e) ;
      }
    },
    acak: function(){
      let campur = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      let panjang = 9;
      let random_all = '';
      for (let i=0; i<panjang; i++) {
          let hasil = Math.floor(Math.random() * campur.length);
          random_all += campur.substring(hasil,hasil+1);
      }
      return random_all ;
    }
  }
}
</script>

<style>
  .label-ukuran{
    font-size: 22px ;
  }
  .judul{
    color: black;
  }
</style>

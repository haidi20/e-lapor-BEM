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
             <textarea class="form-control" rows="8" id="textArea"></textarea>
         </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 ">
          <a href="#" class="btn btn-md btn-block btn-success" @click="kirim" style="font-size:20px">Kirim</a>
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
      gambar: ''
    }
  },
  methods: {
    kirim: function(){
      // let storageUrl = 'gambar/';
      // let storageRef = firebase.storage().ref(storageUrl + gbr.name);
      // let uploadTask = storageRef.putString(e.target.result, 'data_url',{contentType:`image/jpg`})
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

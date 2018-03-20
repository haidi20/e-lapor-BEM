<template lang="html">
  <div class="">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title">Kirim Gambar</h3>
            </div>
            <div class="panel-body text-left">
              <input
                type="file"
                title="gambar"
                id="gambar"
                name="gambar"
                v-on:change="dapatGambar"
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
           <label for="textArea" class="col-xs-12 text-left">Isi Laporan</label>
             <textarea class="form-control" rows="8" id="textArea"></textarea>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../header.vue';

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
    dapatGambar: function(e){
      let gbr = e.target.files[0];
      this.baca(gbr);
    },
    baca: function(gbr){
      let reader = new FileReader();
      reader.readAsDataURL(gbr);
      reader.onload = e => {
        this.gambar = e.target.result ;
      }
    }
  }
}
</script>

<style>

</style>

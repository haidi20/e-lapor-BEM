<template lang="html">
  <div class="">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group ">
            <label for="gambar">Masukkan Gambar</label>
            <input
              type="file"
              id="gambar"
              name="gambar"
              v-on:change="dapatGambar"
            >
            <br>
            <img
              v-if="gambar.length"
              :src="gambar" alt="gambar"
              width="250px" height="250px"
              style="margin-left:20px"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../header.vue';
export default {
  name: 'indexDashboard',
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

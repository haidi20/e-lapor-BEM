<template lang="html">
  <div class="">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>Pengaturan Akun</h1>
        </div>
      </div>
      <div class="row" style="margin-top:100px">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="pass_old" class="label-form tulisan-label">Password Lama</label>
            <input type="text" class="form-control" id="pass_old" placeholder="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="pass_new" class="tulisan-label">Password Baru</label>
            <input type="text" class="form-control" id="pass_new" placeholder="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="re_pass_old" class="tulisan-label">Ulang Password Baru</label>
            <input type="text" class="form-control" id="re_pass_old" placeholder="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <a href="#" class="btn btn-block btn-md btn-success" style="font-size:25px">Kirim</a>
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
}
</script>

<style lang="css" scoped>
  .tulisan-label{
    font-size:18px
  }
</style>

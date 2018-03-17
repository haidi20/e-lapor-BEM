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
      <div class="col-xs-10 col-xs-offset-1 auth">
        <div class="form-group">
          <input type="text" v-model="username" class="form-control text-center"  name="username" placeholder="Username">
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
        <a href="#" class="btn btn-md btn-warning">Daftar Baru</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    kirim: function(){
      console.log(this.username);
    }
  }
}
</script>

<style lang="css">
  .auth {
    margin-top: 200px;
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

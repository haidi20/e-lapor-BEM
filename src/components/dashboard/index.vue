<template lang="html">
  <div class="">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="tulisan">
            selamat datang di Aplikasi Lapor
            <router-link v-bind:to="'Login'">Login</router-link>
            <!-- <a href="Login" class="btn btn-success btn-large">Login</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../header.vue';
export default {
  components : {
    Header
  }
}
</script>

<style>

</style>

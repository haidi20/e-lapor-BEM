<template lang="html">
  <div class="">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12" >
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title">History Lapor</h3>
            </div>
            <div class="panel-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th width="10px" >no</th>
                    <th>Foto</th>
                    <th>Penjelasan</th>
                  </tr>
                </thead>
              </table>
            </div>
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
  name: 'History',
  components:{
    Header
  },
  data(){
    return{
      posts: ''
    }
  },
  mounted(){
    this.fetchPost
  },
  methods: {
    fetchPost: function(){
      this.posts = firebase.database().ref('post') ;
    }
  }
}
</script>

<style lang="css" scoped>
  .history{
    color: #FF0000;
    font-size: 30px;
  }
  th {
    text-align:center
  }
</style>

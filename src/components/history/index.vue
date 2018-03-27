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
                    <th>Foto</th>
                    <th>Penjelasan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="post in posts">
                    <td>
                      <img
                        v-bind:src="post.gambar"
                        alt="gambar"
                        height="40px"
                        width="40px"
                      />
                    </td>
                    <td>{{post.lapor}}</td>
                  </tr>
                </tbody>
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
      posts: '',
    }
  },
  mounted(){
    this.fetchPost();
  },
  methods: {
    fetchPost: function(){
      let user_id = firebase.auth().currentUser.uid ;

      let posts = firebase.database().ref('post').once('value');
      posts.then(
        (data) => {
          this.posts = data.val()
        }
      )
    },
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

webpackJsonp([1],{"52oZ":function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".label-ukuran{font-size:22px}.judul{color:#000}",""])},"7FNX":function(t,a,s){t.exports=s.p+"static/img/polnes.07655b3.png"},"7TZo":function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".tulisan-label[data-v-12b7ec25]{font-size:18px}",""])},"7lOc":function(t,a,s){t.exports=s.p+"static/img/bem.a4624ba.jpg"},Byyr:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".auth{margin-top:90px}.logo{height:60px}.logo,.logo-polnes{width:60px;align:center;margin-left:10px}.logo-polnes{height:70px}",""])},Dh9Q:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".auth{margin-top:90px}",""])},DwBl:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".history[data-v-43c500fe]{color:red;font-size:30px}th[data-v-43c500fe]{text-align:center}",""])},ImJN:function(t,a,s){t.exports=s.p+"static/img/kabinet.102be23.png"},JwS8:function(t,a,s){var e=s("TTzt");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("70206f97",e,!0,{})},L7FG:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"h1[data-v-694cd902],h2[data-v-694cd902]{font-weight:400}ul[data-v-694cd902]{list-style-type:none;padding:0}li[data-v-694cd902]{display:inline-block;margin:0 10px}a[data-v-694cd902]{color:#42b983}",""])},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var r=s("VU/8")({name:"index"},i,!1,function(t){s("jaG+")},null,null).exports,n=s("/ocq"),o=s("Sazm"),l=s.n(o),c={name:"Login",data:function(){return{email:"",password:"",notif:""}},mounted:function(){},methods:{modal:function(){this.notif=""},kirim:function(){var t=this;l.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(a){t.$router.replace("Dashboard")},function(a){"auth/user-not-found"==a.code&&(t.notif="maaf, Email tidak di temukan"),"auth/invalid-email"==a.code&&(t.notif="maaf, Email tersebut tidak valid"),"auth/wrong-password"==a.code&&(t.notif="maaf, Password Anda salah. silahkan di coba kembali"),""==a.code&&(t.notif="")})}}},d={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10 col-xs-offset-1"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control text-center",attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control text-center",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[t.notif.length?s("button",{staticClass:"btn btn-success btn-large btn-block",staticStyle:{"font-size":"20px"},attrs:{type:"button",name:"kirim","data-toggle":"modal","data-target":"#pesan"},on:{click:t.kirim}},[t._v("\n          Login Untuk Melapor\n      ")]):s("button",{staticClass:"btn btn-success btn-large btn-block",staticStyle:{"font-size":"20px"},attrs:{type:"button",name:"kirim"},on:{click:t.kirim}},[t._v("\n          Login Untuk Melapor\n      ")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10 col-xs-offset-2 text-right",staticStyle:{"margin-top":"10px"}},[t._v("\n      Belum punya ID ?\n      "),s("router-link",{attrs:{to:"Registerasi"}},[s("a",{staticClass:"btn btn-md btn-info",attrs:{href:"#"}},[t._v("Daftar Baru")])])],1)]),t._v(" "),s("div",{staticClass:"modal",attrs:{id:"pesan",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[t._v("\n          "+t._s(t.notif)+"\n        ")]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.modal}},[t._v("\n                Oke\n            ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-3 col-xs-offset-1",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[a("img",{staticClass:"logo-polnes",attrs:{src:s("7FNX"),alt:"polnes"}})]),this._v(" "),a("div",{staticClass:"col-xs-3 ",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[a("img",{staticClass:"logo",attrs:{src:s("7lOc"),alt:"BEM"}})]),this._v(" "),a("div",{staticClass:"col-xs-3 ",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[a("img",{staticClass:"logo",attrs:{src:s("ImJN"),alt:"BEM"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 text-center auth"},[a("h1",[this._v("Login")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),a("h4",{staticClass:"modal-title"},[this._v("Pemberitahuan")])])}]};var u=s("VU/8")(c,d,!1,function(t){s("SWsm")},null,null).exports,v={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(t){s("Y5CF")},"data-v-694cd902",null).exports;var p={data:function(){return{user:l.a.auth().currentUser.email}},mounted:function(){},methods:{logout:function(){var t=this;l.a.auth().signOut().then(function(){t.$router.replace("login")})}}},m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-default"},[s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},["admin@bem.com"!=t.user?s("ul",{staticClass:"nav navbar-nav"},[s("li",[s("router-link",{attrs:{to:"dashboard"}},[s("a",{staticStyle:{color:"white"},attrs:{href:"#"}},[t._v("Home")])])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"history"}},[s("a",{staticStyle:{color:"white"},attrs:{href:"#"}},[t._v("\n              History Lapor\n            ")])])],1),t._v(" "),s("li",[s("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])])]):s("ul",{staticClass:"nav navbar-nav"},[s("li",[s("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}},[a("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"})]),this._v(" "),a("a",{staticClass:"navbar-brand",staticStyle:{"font-size":"30px"},attrs:{href:"#"}},[this._v("Lapor-BEM")])])}]};var h=s("VU/8")(p,m,!1,function(t){s("pYXh")},null,null).exports,f={name:"History",components:{Header:h},data:function(){return{posts:"",user_id:""}},mounted:function(){this.fetchPost()},methods:{fetchPost:function(){var t=this;this.user_id=l.a.auth().currentUser.uid,l.a.database().ref("post").once("value").then(function(a){t.posts=a.val()})}}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{},[s("Header"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"panel panel-info"},[t._m(0),t._v(" "),s("div",{staticClass:"panel-body"},[s("table",{staticClass:"table table-bordered"},[t._m(1),t._v(" "),s("tbody",t._l(t.posts,function(a){return a.user_id===t.user_id?s("tr",[s("td",[s("img",{attrs:{src:a.gambar,height:"40px",width:"40px"}})]),t._v(" "),s("td",[t._v(t._s(a.lapor))])]):t._e()}))])])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[this._v("History Lapor")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Foto")]),this._v(" "),a("th",[this._v("Penjelasan")])])])}]};var g=s("VU/8")(f,_,!1,function(t){s("jjMj")},"data-v-43c500fe",null).exports,b={name:"Dashboard",components:{Header:h},data:function(){return{gambar:"",laporan:"",tempat_gambar:""}},mounted:function(){"admin@bem.com"==l.a.auth().currentUser.email&&this.$router.replace("Admin"),console.log(l.a.auth().currentUser.email)},methods:{kirim:function(){var t=this.acak(),a=l.a.auth().currentUser.uid,s=this.lapor,e=l.a.storage().ref("gambar/"+t),i=l.a.database().ref("post");e.putString(this.gambar,"data_url",{contentType:"image/jpg"}).then(function(t){i.push({user_id:a,gambar:t.metadata.downloadURLs[0],lapor:s})},function(t){console.log(t)}),this.lapor="",this.gambar="",this.tempat_gambar=""},dapatGambar:function(t){var a=t.target.files[0];this.baca(a)},baca:function(t){var a=this,s=new FileReader;s.readAsDataURL(t),s.onload=function(t){a.gambar=t.target.result},s.onerror=function(t){console.log("failed file road: "+t)}},acak:function(){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",a="",s=0;s<9;s++){var e=Math.floor(Math.random()*t.length);a+=t.substring(e,e+1)}return a}}},C={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{},[s("Header"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"panel panel-info"},[t._m(0),t._v(" "),s("div",{staticClass:"panel-body text-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempat_gambar,expression:"tempat_gambar"}],attrs:{type:"file",title:"gambar",id:"gambar",name:"gambar",accept:"gambar/*"},domProps:{value:t.tempat_gambar},on:{change:t.dapatGambar,input:function(a){a.target.composing||(t.tempat_gambar=a.target.value)}}}),t._v(" "),s("br"),t._v(" "),t.gambar.length?s("img",{attrs:{src:t.gambar,alt:"gambar",width:"300px",height:"250px"}}):t._e()])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-xs-12 text-left label-ukuran",attrs:{for:"textArea"}},[t._v("Isi Laporan :")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.lapor,expression:"lapor"}],staticClass:"form-control",attrs:{rows:"8",id:"textArea"},domProps:{value:t.lapor},on:{input:function(a){a.target.composing||(t.lapor=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 "},[s("a",{staticClass:"btn btn-md btn-block btn-success",staticStyle:{"font-size":"20px"},attrs:{href:"#","data-target":"#pesan","data-toggle":"modal"},on:{click:t.kirim}},[t._v("\n          Kirim\n        ")])])])]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title label-ukuran"},[this._v("Kirim Gambar")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal",attrs:{id:"pesan",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),a("h4",{staticClass:"modal-title"},[this._v("Pemberitahuan")])]),this._v(" "),a("div",{staticClass:"modal-body"},[this._v("\n          Laporan Telah Terkirim\n        ")]),this._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("\n                Oke\n            ")])])])])])}]};var x=s("VU/8")(b,C,!1,function(t){s("QpWj")},null,null).exports,w={name:"registerasi",data:function(){return{email:"",password:"",re_password:"",note:"",notif:""}},methods:{kirim:function(){var t=this;this.rePassword(),1==this.note&&l.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(a){t.notif="selamat, Email "+t.email+" telah berhasil dibuat"},function(a){"auth/invalid-email"==a.code&&(t.notif="form email kosong atau tidak valid"),"auth/weak-password"==a.code&&(t.notif="form password harus 6 karakter atau lebih"),"auth/email-already-in-use"==a.code&&(t.notif="Email sudah ada")})},rePassword:function(){this.password!=this.re_password?(this.notif="Maaf, password anda tidak sama...!",this.note=!1):this.note=!0}}},y={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10 col-xs-offset-1"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control text-center",attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control text-center",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.re_password,expression:"re_password"}],staticClass:"form-control text-center",attrs:{type:"password",name:"re_password",placeholder:"re-Password"},domProps:{value:t.re_password},on:{input:function(a){a.target.composing||(t.re_password=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("button",{staticClass:"btn btn-success btn-large btn-block",staticStyle:{"font-size":"20px"},attrs:{type:"button",name:"kirim","data-toggle":"modal","data-target":"#pesan"},on:{click:t.kirim}},[t._v("\n          Registerasi Aplikasi Laporan\n      ")])])]),t._v(" "),s("div",{staticClass:"row",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"col-xs-12 text-right"},[t._v("\n      Sudah punya akun ?\n      "),s("router-link",{attrs:{to:"login"}},[s("a",{staticClass:"btn btn-md btn-info",attrs:{href:"#"}},[t._v("Login")])])],1)]),t._v(" "),s("div",{staticClass:"modal",attrs:{id:"pesan",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[t._v("\n          "+t._s(t.notif)+"\n        ")]),t._v(" "),t._m(3)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-3 col-xs-offset-1",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[a("img",{staticClass:"logo-polnes",attrs:{src:s("7FNX"),alt:"polnes"}})]),this._v(" "),a("div",{staticClass:"col-xs-3 ",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[a("img",{staticClass:"logo",attrs:{src:s("7lOc"),alt:"BEM"}})]),this._v(" "),a("div",{staticClass:"col-xs-3 ",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[a("img",{staticClass:"logo",attrs:{src:s("ImJN"),alt:"BEM"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 text-center auth"},[a("h1",[this._v("Register")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),a("h4",{staticClass:"modal-title"},[this._v("Pemberitahuan")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Oke")])])}]};var k=s("VU/8")(w,y,!1,function(t){s("qeIS")},null,null).exports,j={name:"Pengaturan",components:{Header:h},data:function(){return{passBaru:"",passReBaru:"",note:!1,message:""}},methods:{cekPass:function(){var t=l.a.auth().currentUser;this.passBaru!=this.passReBaru?(this.note=!0,this.message="Maaf, Password yang anda masukkan tidak sama"):""==this.passBaru&&""==this.passReBaru?(this.note=!0,this.message="Maaf, Form password masih kosong. mohon di isi untuk perubahan password"):t.updatePassword(this.passBaru).then(function(t){this.note=!0,this.message="Password anda telah berhasil di ganti.",alert("password berhasil ganti")}).catch(function(t){alert("error :"+t),console.log(t)})},perubahan:function(){this.note=!1}}},E={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{},[s("Header"),t._v(" "),s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticStyle:{"margin-top":"30px"}},[1==t.note?s("div",{staticClass:"alert alert-dismissible alert-warning"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:t.perubahan}},[t._v("×")]),t._v(" "),s("p",[t._v(t._s(this.message))])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"tulisan-label",attrs:{for:"pass_new"}},[t._v("Password Baru")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passBaru,expression:"passBaru"}],staticClass:"form-control",attrs:{type:"password",id:"pass_new",placeholder:""},domProps:{value:t.passBaru},on:{input:function(a){a.target.composing||(t.passBaru=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"tulisan-label",attrs:{for:"re_pass_old"}},[t._v("Ulang Password Baru")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passReBaru,expression:"passReBaru"}],staticClass:"form-control",attrs:{type:"password",id:"re_pass_old",placeholder:""},domProps:{value:t.passReBaru},on:{input:function(a){a.target.composing||(t.passReBaru=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("a",{staticClass:"btn btn-block btn-md btn-success",staticStyle:{"font-size":"25px"},attrs:{href:"#"},on:{click:t.cekPass}},[t._v("\n              Kirim\n          ")])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h1",[this._v("Pengaturan Akun")])])])}]};var P=s("VU/8")(j,E,!1,function(t){s("X789")},"data-v-12b7ec25",null).exports,F={name:"History",components:{Header:h},data:function(){return{posts:"",user_id:""}},mounted:function(){this.fetchPost()},methods:{fetchPost:function(){var t=this;this.user_id=l.a.auth().currentUser.uid,l.a.database().ref("post").once("value").then(function(a){t.posts=a.val()})}}},B={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{},[s("Header"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"panel panel-info"},[t._m(0),t._v(" "),s("div",{staticClass:"panel-body"},[s("table",{staticClass:"table table-bordered"},[t._m(1),t._v(" "),s("tbody",t._l(t.posts,function(a){return s("tr",[s("td",[s("img",{attrs:{src:a.gambar,height:"40px",width:"40px"}})]),t._v(" "),s("td",[t._v(t._s(a.lapor))])])}))])])])])]),t._v(" "),t._m(2)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[this._v("History Lapor")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Foto")]),this._v(" "),a("th",[this._v("Penjelasan")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"})])}]};var S=s("VU/8")(F,B,!1,function(t){s("JwS8")},"data-v-7e63bf4a",null).exports;e.a.use(n.a);var $=new n.a({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:u},{path:"/registerasi",name:"Registerasi",component:k},{path:"/dashboard",name:"Dashboard",component:x,meta:{requiresAuth:!0}},{path:"/pengaturan",name:"Pengaturan",component:P,meta:{requiresAuth:!0}},{path:"/history",name:"History",component:g,meta:{requiresAuth:!0}},{path:"/admin",name:"Admin",component:S,meta:{requiresAuth:!0}}]});$.beforeEach(function(t,a,s){var e=l.a.auth().currentUser,i=t.matched.some(function(t){return t.meta.requiresAuth});i&&!e?s("login"):!i&&e?s("dashboard"):s()});var R=$;e.a.config.productionTip=!1;var U=void 0;l.a.initializeApp({apiKey:"AIzaSyCi1Ff7cjOMD1mEyU_q6R4TVDJmZ-xHtKY",authDomain:"lapor-28791.firebaseapp.com",databaseURL:"https://lapor-28791.firebaseio.com",projectId:"lapor-28791",storageBucket:"lapor-28791.appspot.com",messagingSenderId:"480303218320"}),l.a.auth().onAuthStateChanged(function(t){U||(U=new e.a({el:"#app",router:R,components:{index:r},template:"<index/>"}))})},QpWj:function(t,a,s){var e=s("52oZ");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("3e86475b",e,!0,{})},SWsm:function(t,a,s){var e=s("Byyr");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("6a95b624",e,!0,{})},TTzt:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".print[data-v-7e63bf4a]{color:#fff;font-size:30px}th[data-v-7e63bf4a]{text-align:center}",""])},X789:function(t,a,s){var e=s("7TZo");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("4965354c",e,!0,{})},Y5CF:function(t,a,s){var e=s("L7FG");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("f81aa1dc",e,!0,{})},"jaG+":function(t,a,s){var e=s("z/dI");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("71777d10",e,!0,{})},jjMj:function(t,a,s){var e=s("DwBl");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("06219628",e,!0,{})},mnZ6:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},pYXh:function(t,a,s){var e=s("mnZ6");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("5307b110",e,!0,{})},qeIS:function(t,a,s){var e=s("Dh9Q");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("76d24304",e,!0,{})},"z/dI":function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])}},["NHnr"]);
//# sourceMappingURL=app.b39e1b99b1c60b081310.js.map
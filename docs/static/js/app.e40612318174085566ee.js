webpackJsonp([1],{"1Tx0":function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".label-ukuran{font-size:22px}.judul{color:#000}",""])},"6wEH":function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".auth{margin-top:90px}.logo{width:50px;height:50px;align:center;margin-left:15px;padding-top:10px;background-color:#fff;border:2px solid #000}",""])},D75E:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},DQcb:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},FsQ3:function(t,a,s){var e=s("D75E");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("14589353",e,!0,{})},L7FG:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"h1[data-v-694cd902],h2[data-v-694cd902]{font-weight:400}ul[data-v-694cd902]{list-style-type:none;padding:0}li[data-v-694cd902]{display:inline-block;margin:0 10px}a[data-v-694cd902]{color:#42b983}",""])},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var n=s("VU/8")({name:"index"},i,!1,function(t){s("UqAy")},null,null).exports,r=s("/ocq"),o=s("Sazm"),l=s.n(o),c={name:"Login",data:function(){return{email:"",password:"",notif:""}},methods:{modal:function(){this.notif=""},kirim:function(){var t=this;l.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(a){t.$router.replace("Dashboard")},function(a){"auth/user-not-found"==a.code&&(t.notif="maaf, Email tidak di temukan"),"auth/invalid-email"==a.code&&(t.notif="maaf, Email tersebut tidak valid"),"auth/wrong-password"==a.code&&(t.notif="maaf, Password Anda salah. silahkan di coba kembali"),""==a.code&&(t.notif="")})}}},d={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10 col-xs-offset-1"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control text-center",attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control text-center",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[t.notif.length?s("button",{staticClass:"btn btn-success btn-large btn-block",staticStyle:{"font-size":"20px"},attrs:{type:"button",name:"kirim","data-toggle":"modal","data-target":"#pesan"},on:{click:t.kirim}},[t._v("\n          Login Untuk Melapor A\n      ")]):s("button",{staticClass:"btn btn-success btn-large btn-block",staticStyle:{"font-size":"20px"},attrs:{type:"button",name:"kirim"},on:{click:t.kirim}},[t._v("\n          Login Untuk Melapor B\n      ")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10 col-xs-offset-2 text-right",staticStyle:{"margin-top":"10px"}},[t._v("\n      Belum punya ID ?\n      "),s("router-link",{attrs:{to:"Registerasi"}},[s("a",{staticClass:"btn btn-md btn-info",attrs:{href:"#"}},[t._v("Daftar Baru")])])],1)]),t._v(" "),s("div",{staticClass:"modal",attrs:{id:"pesan",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[t._v("\n          "+t._s(t.notif)+"\n        ")]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.modal}},[t._v("\n                Oke\n            ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-3 col-xs-offset-4 text-center",staticStyle:{"margin-top":"30px"}},[a("div",{staticClass:"logo"},[this._v("\n        logo\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 text-center auth"},[a("h1",[this._v("Login")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),a("h4",{staticClass:"modal-title"},[this._v("Pemberitahuan")])])}]};var u=s("VU/8")(c,d,!1,function(t){s("syRz")},null,null).exports,v={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(t){s("Y5CF")},"data-v-694cd902",null).exports;var m={name:"registerasi",data:function(){return{email:"",password:"",re_password:"",note:"",notif:""}},methods:{kirim:function(){var t=this;this.rePassword(),1==this.note&&l.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(a){t.notif="selamat, Email "+t.email+" telah berhasil dibuat"},function(a){"auth/invalid-email"==a.code&&(t.notif="form email kosong atau tidak valid"),"auth/weak-password"==a.code&&(t.notif="form password harus 6 karakter atau lebih"),"auth/email-already-in-use"==a.code&&(t.notif="Email sudah ada")})},rePassword:function(){this.password!=this.re_password?(this.notif="Maaf, password anda tidak sama...!",this.note=!1):this.note=!0}}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10 col-xs-offset-1"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control text-center",attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control text-center",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.re_password,expression:"re_password"}],staticClass:"form-control text-center",attrs:{type:"password",name:"re_password",placeholder:"re-Password"},domProps:{value:t.re_password},on:{input:function(a){a.target.composing||(t.re_password=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("button",{staticClass:"btn btn-success btn-large btn-block",staticStyle:{"font-size":"20px"},attrs:{type:"button",name:"kirim","data-toggle":"modal","data-target":"#pesan"},on:{click:t.kirim}},[t._v("\n          Registerasi Aplikasi Lapor\n      ")])])]),t._v(" "),s("div",{staticClass:"row",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"col-xs-12 text-right"},[t._v("\n      Sudah punya akun ?\n      "),s("router-link",{attrs:{to:"login"}},[s("a",{staticClass:"btn btn-md btn-info",attrs:{href:"#"}},[t._v("Login")])])],1)]),t._v(" "),s("div",{staticClass:"modal",attrs:{id:"pesan",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[t._v("\n          "+t._s(t.notif)+"\n        ")]),t._v(" "),t._m(3)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-3 col-xs-offset-4 text-center",staticStyle:{"margin-top":"30px"}},[a("div",{staticClass:"logo"},[this._v("\n        logo\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 text-center auth"},[a("h1",[this._v("Register")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),a("h4",{staticClass:"modal-title"},[this._v("Pemberitahuan")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Oke")])])}]};var h=s("VU/8")(m,p,!1,function(t){s("rV15")},null,null).exports,f={mounted:function(){console.log(l.a.auth().currentUser.email)},methods:{logout:function(){var t=this;l.a.auth().signOut().then(function(){t.$router.replace("login")})}}},_={render:function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"navbar navbar-default"},[a("div",{staticClass:"container-fluid"},[this._m(0),this._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("router-link",{attrs:{to:"pengaturan"}},[a("a",{staticStyle:{color:"white"},attrs:{href:"#"}},[this._v("\n                Pengaturan\n            ")])])],1),this._v(" "),a("li",[a("a",{attrs:{href:"#"},on:{click:this.logout}},[this._v("Logout")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}},[a("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"})]),this._v(" "),a("a",{staticClass:"navbar-brand",staticStyle:{"font-size":"30px"},attrs:{href:"#"}},[this._v("Lapor-BEM")])])}]};var g={name:"Dashboard",components:{Header:s("VU/8")(f,_,!1,function(t){s("FsQ3")},null,null).exports},data:function(){return{gambar:{file:"",name:""}}},methods:{kirim:function(){l.a.storage().ref("gambar/"+this.gambar.name).putString(this.gambar.file,"data_url",{contentType:"image/jpg"})},dapatGambar:function(t){var a=t.target.files[0];this.baca(a)},baca:function(t){var a=this,s=new FileReader;s.readAsDataURL(t),this.gambar.name=t.name,s.onload=function(t){a.gambar.file=t.target.result},s.onerror=function(t){console.log("failed file road: "+t)}}}},b={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{},[s("Header"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"panel panel-info"},[t._m(0),t._v(" "),s("div",{staticClass:"panel-body text-left"},[s("input",{attrs:{type:"file",title:"gambar",id:"gambar",name:"gambar",accept:"gambar/*"},on:{change:t.dapatGambar}}),t._v(" "),s("br"),t._v(" "),t.gambar.length?s("img",{attrs:{src:t.gambar,alt:"gambar",width:"300px",height:"250px"}}):t._e()])])])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 "},[s("a",{staticClass:"btn btn-md btn-block btn-success",staticStyle:{"font-size":"20px"},attrs:{href:"#"},on:{click:t.kirim}},[t._v("Kirim")])])])]),t._v(" "),s("h1",[t._v("DASHBOARD")]),t._v(" "),s("h1",[t._v("ksjdflksjf")])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title label-ukuran"},[this._v("Kirim Gambar")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-xs-12 text-left label-ukuran",attrs:{for:"textArea"}},[this._v("Isi Laporan :")]),this._v(" "),a("textarea",{staticClass:"form-control",attrs:{rows:"8",id:"textArea"}})])])])}]};var x=s("VU/8")(g,b,!1,function(t){s("rmjS")},null,null).exports,C={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("Pengaturan")])},staticRenderFns:[]};var w=s("VU/8")({name:"Pengaturan"},C,!1,function(t){s("iNS/")},null,null).exports;e.a.use(r.a);var k=new r.a({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:u},{path:"/registerasi",name:"Registerasi",component:h},{path:"/dashboard",name:"Dashboard",component:x,meta:{requiresAuth:!0}},{path:"/pengaturan",name:"Pengaturan",component:w,meta:{requiresAuth:!0}}]});k.beforeEach(function(t,a,s){var e=l.a.auth().currentUser,i=t.matched.some(function(t){return t.meta.requiresAuth});i&&!e?s("login"):!i&&e?s("dashboard"):s()});var y=k;e.a.config.productionTip=!1;var E=void 0;l.a.initializeApp({apiKey:"AIzaSyCi1Ff7cjOMD1mEyU_q6R4TVDJmZ-xHtKY",authDomain:"lapor-28791.firebaseapp.com",databaseURL:"https://lapor-28791.firebaseio.com",projectId:"lapor-28791",storageBucket:"lapor-28791.appspot.com",messagingSenderId:"480303218320"}),l.a.auth().onAuthStateChanged(function(t){E||(E=new e.a({el:"#app",router:y,components:{index:n},template:"<index/>"}))})},UqAy:function(t,a,s){var e=s("iMXO");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("4d5c0484",e,!0,{})},Y5CF:function(t,a,s){var e=s("L7FG");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("f81aa1dc",e,!0,{})},iMXO:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},"iNS/":function(t,a,s){var e=s("DQcb");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("70bd3b4a",e,!0,{})},kBtv:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".auth{margin-top:90px}.logo{width:50px;height:50px;align:center;margin-left:15px;padding-top:10px;background-color:#fff;border:2px solid #000}",""])},rV15:function(t,a,s){var e=s("6wEH");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("d6b46910",e,!0,{})},rmjS:function(t,a,s){var e=s("1Tx0");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("dde903b4",e,!0,{})},syRz:function(t,a,s){var e=s("kBtv");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("0386c3a3",e,!0,{})}},["NHnr"]);
//# sourceMappingURL=app.e40612318174085566ee.js.map
(function(t){function e(e){for(var s,i,c=e[0],r=e[1],u=e[2],f=0,m=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},o={app:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ee1":function(t,e,n){},"102c":function(t,e,n){t.exports=n.p+"img/remove.3b677702.svg"},"2a43":function(t,e,n){"use strict";n("0ee1")},"34f8":function(t){t.exports=JSON.parse('[{"socialName":"instagram","img":"socialsImage/instagram.svg"},{"socialName":"facebook","img":"socialsImage/facebook.svg"},{"socialName":"pinterest","img":"socialsImage/pinterest.svg"},{"socialName":"vk","img":"socialsImage/vk.svg"},{"socialName":"youtube","img":"socialsImage/youtube.svg"},{"socialName":"tik-tok","img":"socialsImage/tik-tok.svg"},{"socialName":"telegram","img":"socialsImage/telegram.svg"},{"socialName":"twitter","img":"socialsImage/twitter.svg"},{"socialName":"http","img":"socialsImage/http.svg"}]')},"372a":function(t,e,n){},"3c35":function(t,e,n){t.exports=n.p+"img/gear.47eab155.png"},"3e51":function(t,e,n){t.exports=n.p+"img/minus.d9a7efe1.svg"},"44d0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{mousedown:t.clickEvent}},[n("div",{class:{click:t.click},style:{top:t.top,left:t.left}}),n("router-view")],1)},a=[],i={data:function(){return{click:!1,top:"",left:""}},methods:{clickEvent:function(t){var e=this;this.top=t.clientY-20+"px",this.left=t.clientX-20+"px",this.click=!0;var n=setTimeout((function(){e.top="",e.left="",e.click=!1,clearTimeout(n)}),500)}}},c=i,r=(n("2a43"),n("2877")),u=Object(r["a"])(c,o,a,!1,null,"0e82c164",null),l=u.exports,f=n("1dce"),m=n.n(f),p=n("2f62"),d=n("1da1"),g=(n("96cf"),n("260b")),I=(n("ea7b"),n("66ce"),n("741f"),n("588e"),{state:{isInitApp:!1},getters:{isInitApp:function(t){return t.isInitApp}},mutations:{setIsInitApp:function(t,e){t.isInitApp=e}},actions:{initializeApp:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,s={apiKey:"AIzaSyA0Drenvv254KEwOqJ-d_7-Eo7AUBm-mhI",authDomain:"nfc-belarus.firebaseapp.com",databaseURL:"https://nfc-belarus-default-rtdb.firebaseio.com",projectId:"nfc-belarus",storageBucket:"nfc-belarus.appspot.com",messagingSenderId:"111282253904",appId:Object({NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyA0Drenvv254KEwOqJ-d_7-Eo7AUBm-mhI",VUE_APP_APP_ID:"1:1:111282253904:web:b293e0a9cd59793b836155",VUE_APP_AUTH_DOMAIN:"nfc-belarus.firebaseapp.com",VUE_APP_DATABASE_URL:"https://nfc-belarus-default-rtdb.firebaseio.com",VUE_APP_MEASUREMENT_ID:"G-F63KHF5J16",VUE_APP_MESSAGING_SENDER_ID:"111282253904",VUE_APP_PROJECT_ID:"nfc-belarus",VUE_APP_STORAGE_BUCKET:"nfc-belarus.appspot.com",BASE_URL:"/"}).VUE_APP_APPID},g["a"].initializeApp(s),n("setIsInitApp",!0);case 4:case"end":return e.stop()}}),e)})))()}}}),v=(n("d3b7"),{state:{accountId:null,isInit:null,password:null},getters:{accountId:function(t){return t.accountId},isInit:function(t){return t.isInit},password:function(t){return t.password}},mutations:{setAccountId:function(t,e){t.accountId=e},setIsInit:function(t,e){t.isInit=e},setPassword:function(t,e){t.password=e}},actions:{checkAccount:function(t,e){var n,s=t.commit,o=g["a"].database();return new Promise((function(t,a){o.ref("users/"+e).on("value",(function(o){n=o.val(),n?(s("setAccountId",e),s("setIsInit",n.isInit),s("setPassword",n.password),t(!0)):(s("setAccountId",null),a(!1))}))}))},initAccount:function(t,e){var n=t.commit,s=t.getters;g["a"].database().ref("users/".concat(s.accountId)).update({isInit:e}),n("setIsInit",e)},checkPassword:function(t,e){var n=t.dispatch,s=t.getters;return new Promise((function(t,o){g["a"].database().ref("users/"+s.accountId+"/password").on("value",(function(a){var i=a.val();i===e?(s.isInit||n("initAccount",!0),t(!0)):o(!1)}))}))}}}),b={state:{localLogIn:!1},getters:{localLogIn:function(t){return t.localLogIn}},mutations:{setLocalLogIn:function(t,e){t.localLogIn=e}},actions:{setLocalLogIn:function(t,e){var n=t.commit;n("setLocalLogIn",e)}}},h={state:{userInfo:null},getters:{userInfo:function(t){return t.userInfo}},mutations:{setUserInfo:function(t,e){t.userInfo=e}},actions:{getUserInfo:function(t){var e=t.commit,n=t.getters,s=g["a"].database();return new Promise((function(t){s.ref("users/"+n.accountId+"/userInfo").on("value",(function(n){n.val()?(e("setUserInfo",n.val()),t(!0)):e("setUserInfo",!1)}))}))},sendUserInfo:function(t,e){var n=t.commit,s=t.getters;g["a"].database().ref("users/".concat(s.accountId,"/userInfo")).update(e).then((function(){n("setUserInfo",e)}))}}};s["a"].use(p["a"]);var _=new p["a"].Store({modules:{init:I,checkAccount:v,localLogIn:b,userInfo:h}}),w=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Hello from Main ")])},P=[],A={},O=Object(r["a"])(A,k,P,!1,null,null,null),N=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrapper"},[t.isInit?n("SettingsBlock"):t._e(),t.isInit&&t.userInfo?n("UserInfo",{attrs:{userInfo:t.userInfo}}):t._e(),t.isInit&&!t.userInfo?n("SorryButNoUserInfo"):t._e(),t.isInit?t._e():n("Registration")],1)},E=[],L=n("5530"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"password-box"},[n("div",{staticClass:"password-popup"},[n("h2",[t._v("Подтверждение пароля")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{"incorrect-password":t.incorrectPassword},attrs:{type:"password",placeholder:"Пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{on:{click:t.callCheckPasswordAction}},[t._v("Вход")])])])},x=[],y={data:function(){return{password:null,incorrectPassword:!1}},methods:Object(L["a"])(Object(L["a"])({},Object(p["b"])(["setLocalLogIn","checkPassword"])),{},{callCheckPasswordAction:function(){var t=this;this.checkPassword(this.password).then((function(){t.setLocalLogIn(!0)})).catch((function(){t.password="",t.incorrectPassword=!0;var e=setTimeout((function(){t.incorrectPassword=!1,clearTimeout(e)}),1e3)}))}})},U=y,C=(n("8e5e"),Object(r["a"])(U,j,x,!1,null,"097b2ac8",null)),D=C.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Извините, но этот пользователь не оставил информации о себе")])},T=[],B={},R=Object(r["a"])(B,$,T,!1,null,null,null),V=R.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ButtonToOpenSettings",{on:{bearsClick:function(e){t.isSettings=!t.isSettings}}}),n("div",{class:{"visible-settings":t.isSettings,"settings-box":!0}},[n("h2",[t._v("Settings")]),t.localLogIn?n("Settings"):n("Registration")],1)],1)},J=[],K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gears-button",on:{click:function(e){return t.$emit("bearsClick")}}},[s("img",{staticClass:"gear1",attrs:{src:n("3c35"),alt:"gear"}}),s("img",{staticClass:"gear2",attrs:{src:n("3c35"),alt:"gear"}}),s("img",{staticClass:"gear3",attrs:{src:n("3c35"),alt:"gear"}})])},z=[],F=(n("ccf9"),{}),G=Object(r["a"])(F,K,z,!1,null,"5f4d75a4",null),H=G.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("div",{staticClass:"name"},[s("label",{attrs:{for:"firstName"}},[s("span",[t._v("Имя")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userInfoLocal.firstName,expression:"userInfoLocal.firstName",modifiers:{trim:!0}}],attrs:{type:"text",autocomplete:"off",id:"firstName"},domProps:{value:t.userInfoLocal.firstName},on:{input:function(e){e.target.composing||t.$set(t.userInfoLocal,"firstName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("label",{attrs:{for:"secondName"}},[s("span",[t._v("Фамилия")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userInfoLocal.secondName,expression:"userInfoLocal.secondName",modifiers:{trim:!0}}],attrs:{type:"text",autocomplete:"off",id:"secondName"},domProps:{value:t.userInfoLocal.secondName},on:{input:function(e){e.target.composing||t.$set(t.userInfoLocal,"secondName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),s("div",{staticClass:"social"},[t.inputSocialLink?t._e():s("span",{staticClass:"social-add",on:{click:function(e){e.preventDefault(),t.showSocial=!t.showSocial}}},[t.showSocial?s("img",{attrs:{src:n("3e51"),alt:"remove"}}):s("img",{attrs:{src:n("aeb7"),alt:"add"}})]),s("div",{class:{"social-list":!0,"social-list-active":t.showSocial}},t._l(t.socialsData,(function(e,n){var o;return s("img",{key:e.socialName+n,class:(o={},o[e.socialName]=1,o["social-el"]=1,o),attrs:{src:t.returnImg(e.img),alt:e.socialName},on:{click:function(n){return t.addSocial(e.socialName)}}})})),0)]),s("div",t._l(t.userInfoLocal.socials,(function(e,o){return s("div",{key:e.social+o,staticClass:"added-social"},[s("img",{attrs:{src:t.returnImg("socialsImage/"+e.social+".svg"),alt:"",width:"40px"}}),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.link,expression:"social.link",modifiers:{trim:!0}}],attrs:{type:"text",autocomplete:"off",placeholder:"Добавьте ссылку"},domProps:{value:e.link},on:{input:function(n){n.target.composing||t.$set(e,"link",n.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("img",{staticClass:"basket",attrs:{src:n("102c"),alt:"",width:"23px"},on:{mouseenter:t.shakeBasket,click:function(e){return t.removeElFromSocials(o)}}})])})),0),s("button",{on:{click:function(e){return e.preventDefault(),t.submitInfo.apply(null,arguments)}}},[t._v("Сохранить")])])},Y=[],X=(n("a434"),n("b5ae")),Q=n("34f8"),W={validations:{userInfoLocal:{firstName:{alpha:X["alpha"]},secondName:{alpha:X["alpha"]}}},data:function(){return{userInfoLocal:{firstName:"",secondName:null,socials:[]},showSocial:!1,inputSocialLink:!1,currentSocialImg:null,socialsData:null}},mounted:function(){this.socialsData=Q},watch:{userInfo:function(){this.userInfoLocal=this.userInfo}},computed:Object(L["a"])({},Object(p["c"])(["userInfo"])),methods:Object(L["a"])(Object(L["a"])({},Object(p["b"])(["sendUserInfo"])),{},{submitInfo:function(){this.sendUserInfo(this.userInfoLocal)},returnImg:function(t){return t},addSocial:function(t){this.showSocial=!1,this.userInfoLocal.socials.push({social:t})},shakeBasket:function(t){t.target.classList.add("shake-basket"),setTimeout((function(){t.target.classList.remove("shake-basket")}),400)},removeElFromSocials:function(t){this.userInfoLocal.socials.splice(t,1)}})},Z=W,tt=(n("8643"),Object(r["a"])(Z,q,Y,!1,null,"75f9b732",null)),et=tt.exports,nt={data:function(){return{isSettings:!1}},computed:Object(L["a"])({},Object(p["c"])(["localLogIn"])),components:{ButtonToOpenSettings:H,Registration:D,Settings:et}},st=nt,ot=(n("e7ff"),Object(r["a"])(st,M,J,!1,null,"142b9162",null)),at=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"mainInfo"},[n("span",[t._v(t._s(t.userInfo.firstName)+" ")]),n("span",[t._v(t._s(t.userInfo.secondName))])]),n("div",{staticClass:"socials"},t._l(t.userInfo.socials,(function(e,s){return n("a",{key:e.social+s,attrs:{href:e.link}},[n("img",{staticClass:"social-img",attrs:{src:t.returnImg("socialsImage/"+e.social+".svg"),alt:"social"}})])})),0)])},ct=[],rt={props:["userInfo"],methods:{returnImg:function(t){return t}}},ut=rt,lt=(n("b194"),Object(r["a"])(ut,it,ct,!1,null,"1061d28a",null)),ft=lt.exports,mt={methods:Object(L["a"])({},Object(p["b"])(["getUserInfo"])),computed:Object(L["a"])({},Object(p["c"])(["userInfo","isInit"])),mounted:function(){this.getUserInfo()},components:{SorryButNoUserInfo:V,SettingsBlock:at,UserInfo:ft,Registration:D}},pt=mt,dt=Object(r["a"])(pt,S,E,!1,null,null,null),gt=dt.exports;s["a"].use(w["a"]);var It=new w["a"]({mode:"history",routes:[{name:"main",path:"/",component:N},{name:"user",path:"/:id",component:gt,beforeEnter:function(t,e,n){_.dispatch("checkAccount",t.params.id).then((function(){n()})).catch((function(){n("/")}))}}]}),vt=It;n("927c");s["a"].config.productionTip=!1,s["a"].use(m.a),_.dispatch("initializeApp").then((function(){new s["a"]({store:_,router:vt,render:function(t){return t(l)}}).$mount("#app")}))},"5d93":function(t,e,n){},8643:function(t,e,n){"use strict";n("d20d")},"8e5e":function(t,e,n){"use strict";n("44d0")},"927c":function(t,e,n){},aeb7:function(t,e,n){t.exports=n.p+"img/plus.e220b97e.svg"},b194:function(t,e,n){"use strict";n("372a")},b708:function(t,e,n){},ccf9:function(t,e,n){"use strict";n("b708")},d20d:function(t,e,n){},e7ff:function(t,e,n){"use strict";n("5d93")}});
//# sourceMappingURL=app.dbe0b62a.js.map
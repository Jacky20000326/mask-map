(function(t){function e(e){for(var c,i,a=e[0],s=e[1],u=e[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(c=!1)}c&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},r={app:0},o=[];function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/mask-map/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"204c":function(t,e,n){},"20c8":function(t,e,n){"use strict";n("9538")},"374a":function(t,e,n){"use strict";n("dabc")},"3f17":function(t,e,n){"use strict";n("7972")},"566e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"app"};function o(t,e,n,o,i,a){var s=Object(c["m"])("lightbox"),u=Object(c["m"])("topside"),l=Object(c["m"])("leftside"),d=Object(c["m"])("rightside");return Object(c["h"])(),Object(c["d"])("div",r,[Object(c["f"])(s),Object(c["f"])(u),Object(c["f"])("main",null,[Object(c["f"])(l,{class:"left",onTriggerMarkerPopup:a.openPopup,ref:"menu"},null,8,["onTriggerMarkerPopup"]),Object(c["f"])(d,{class:"right",ref:"map"},null,512)])])}var i=n("5530"),a=(n("d81d"),n("5502")),s=Object(c["u"])("data-v-650c8685");Object(c["j"])("data-v-650c8685");var u={class:"topside"},l=Object(c["f"])("h3",null,[Object(c["f"])("b",null,"Mask Map")],-1);Object(c["i"])();var d=s((function(t,e,n,r,o,i){return Object(c["h"])(),Object(c["d"])("div",u,[l])})),f={};n("20c8");f.render=d,f.__scopeId="data-v-650c8685";var b=f,j=Object(c["u"])("data-v-a25f5b48");Object(c["j"])("data-v-a25f5b48");var O={class:"left"};Object(c["i"])();var h=j((function(t,e,n,r,o,i){var a=Object(c["m"])("data-filter"),s=Object(c["m"])("list-info");return Object(c["h"])(),Object(c["d"])("div",O,[Object(c["f"])(a),Object(c["f"])(s)])})),p=(n("b0c0"),Object(c["u"])("data-v-33d42b22"));Object(c["j"])("data-v-33d42b22");var m={class:"leftside"},v=Object(c["f"])("div",{class:"now"},[Object(c["f"])("div",{class:"day"},[Object(c["f"])("b",null,"星期六")]),Object(c["f"])("div",{class:"date"},[Object(c["f"])("div",{class:"right"},[Object(c["f"])("b",null,"2021-7-3")])])],-1),g={class:"filter"},y={class:"city"},w={class:"control"},k={class:"select"},x={class:"region "},D={class:"control"},_={class:"select"};Object(c["i"])();var $=p((function(t,e,n,r,o,i){return Object(c["h"])(),Object(c["d"])("div",m,[v,Object(c["f"])("div",g,[Object(c["f"])("div",y,[Object(c["f"])("div",w,[Object(c["f"])("div",k,[Object(c["s"])(Object(c["f"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.currCity=t})},[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(t.cityList,(function(t){return Object(c["h"])(),Object(c["d"])("option",{key:t.id},Object(c["n"])(t.name),1)})),128))],512),[[c["o"],i.currCity]])])])]),Object(c["f"])("div",x,[Object(c["f"])("div",D,[Object(c["f"])("div",_,[Object(c["s"])(Object(c["f"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return i.currDistrict=t})},[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(t.DistrictList,(function(t){return Object(c["h"])(),Object(c["d"])("option",{key:t.id},Object(c["n"])(t.name),1)})),128))],512),[[c["o"],i.currDistrict]])])])])]),Object(c["s"])(Object(c["f"])("input",{class:"input",type:"text",placeholder:"請輸入藥局","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.keywords=t})},null,512),[[c["p"],i.keywords]])])})),L={computed:Object(i["a"])(Object(i["a"])({},Object(a["c"])(["cityList","DistrictList"])),{},{currCity:{get:function(){return this.$store.state.currCity},set:function(t){this.$store.commit("setCurrCity",t),console.log(t)}},currDistrict:{get:function(){return this.$store.state.currDistrict},set:function(t){this.$store.commit("setCurrDistrict",t),console.log(t)}},keywords:{get:function(){return this.$store.state.keyword},set:function(t){this.$store.commit("setkeyword",t)}}})};n("3f17");L.render=$,L.__scopeId="data-v-33d42b22";var P=L,S=Object(c["u"])("data-v-fdd21b46");Object(c["j"])("data-v-fdd21b46");var C={class:"list-info"},I=Object(c["e"])(),M=Object(c["f"])("br",null,null,-1),B={class:"adult"},T={class:"quantity"},z={class:"child"},A={class:"quantity"},q=Object(c["f"])("hr",null,null,-1);Object(c["i"])();var R=S((function(t,e,n,r,o,i){var a=Object(c["m"])("mask-info");return Object(c["h"])(),Object(c["d"])("div",C,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(t.filterStore,(function(t){return Object(c["h"])(),Object(c["d"])("div",{class:"lists",key:t.id},[Object(c["f"])("h2",null,[Object(c["f"])("b",null,Object(c["n"])(t.name),1)]),I,M,Object(c["e"])(" "+Object(c["n"])(t.phone)+" ",1),Object(c["f"])("i",{class:"far fa-eye",onClick:function(e){return i.openmodel(t.id)}},null,8,["onClick"]),Object(c["f"])("p",null,Object(c["n"])(t.address),1),Object(c["f"])(a,null,{default:S((function(){return[Object(c["f"])("div",B,[Object(c["f"])("div",T," 成人："+Object(c["n"])(t.mask_adult),1)]),Object(c["f"])("div",z,[Object(c["f"])("div",A," 兒童："+Object(c["n"])(t.mask_child),1)])]})),_:2},1024),q])})),128))])})),U=(n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("e11e")),V=n.n(U),E={data:function(){return{}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(a["c"])(["filterStore"])),Object(a["d"])(["keyword"])),{},{showmodel:{get:function(){return this.$store.state.showmodel},set:function(t){this.$store.commit("setshowmodel",t)}},infoBoxid:{get:function(){return this.$store.state.infoBoxid},set:function(t){this.$store.commit("setinfoBoxid",t)}}}),methods:{lightlightKeyword:function(t){return t.replace(new RegExp(this.keyword,"g"),'<span class="hightlight">'.concat(this.keyword,"</span>"))},openmodel:function(t){this.showmodel=!0,this.infoBoxid=t,console.log(this.$store.state.store)}}};n("fbd4");E.render=R,E.__scopeId="data-v-fdd21b46";var J=E,F={components:{dataFilter:P,listInfo:J}};n("374a");F.render=h,F.__scopeId="data-v-a25f5b48";var K=F,N={id:"map"};function X(t,e,n,r,o,i){return Object(c["h"])(),Object(c["d"])("div",N)}n("159b"),n("7db0");var Y={name:"map",data:function(){return{map:{},markers:[]}},mounted:function(){this.map=V.a.map("map",{center:[25.03,121.55],zoom:14}),V.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'<a target="_blank  href="https://www.openstreetmap.org">OpenStreetMapcontributors</a> ',maxZoom:18}).addTo(this.map)},computed:{currDistrictInfo:function(){return this.$store.getters.currDistrictInfo},filteredStores:function(){return this.$store.getters.filterStore}},watch:{currDistrictInfo:function(t){this.map.panTo(new V.a.LatLng(t.latitude,t.longitude))},filteredStores:function(t){var e=this;this.clearMakers(),t.forEach((function(t){return e.addMarker(t)}))}},methods:{addMarker:function(t){var e={iconurl:"https://leafletjs.com/examples/custom-icons/leaf-green.png",shadowurl:"https://leafletjs.com/examples/custom-icons/leaf-shadow.png",iconSize:[38,95],shadowSize:[50,64],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-3,-76]},n=V.a.marker([t.longitude,t.latitude],e).addTo(this.map).bindPopup('<h2 class="popup-name">'.concat(t.name,"</h2>"));n.markerId=t.id,n.markerIng=t.longitude,n.markerlat=t.latitude,this.markers.push(n)},clearMakers:function(){var t=this;this.map.eachLayer((function(e){e instanceof V.a.Marker&&t.map.removeLayer(e)})),this.markers.length=0},triggerPopup:function(t){var e=this.markers.find((function(e){return e.markerId===t}));this.map.flyTo(new V.a.LatLng(e.longitude,e.latitude),22),e.openPopup()}}};n("caec");Y.render=X;var Z=Y,G=Object(c["u"])("data-v-30c91aab");Object(c["j"])("data-v-30c91aab");var H={class:"model-mask"},Q={class:"model-content"};Object(c["i"])();var W=G((function(t,e,n,r,o,i){var a=Object(c["m"])("info");return Object(c["h"])(),Object(c["d"])(c["b"],{name:"model"},{default:G((function(){return[Object(c["s"])(Object(c["f"])("div",H,[Object(c["f"])("div",{class:"model-wrapper",onClick:e[1]||(e[1]=Object(c["t"])((function(){return i.close&&i.close.apply(i,arguments)}),["self"]))},[Object(c["f"])("div",Q,[Object(c["f"])(a)])])],512),[[c["q"],i.showmodel]])]})),_:1})})),tt=Object(c["u"])("data-v-5ba80af8");Object(c["j"])("data-v-5ba80af8");var et={class:"model-body"},nt={class:"store-name"},ct=Object(c["f"])("hr",null,null,-1),rt=Object(c["f"])("thead",null,[Object(c["f"])("th"),Object(c["f"])("th",null,"一"),Object(c["f"])("th",null,"二"),Object(c["f"])("th",null,"三"),Object(c["f"])("th",null,"四"),Object(c["f"])("th",null,"五"),Object(c["f"])("th",null,"六"),Object(c["f"])("th",null,"日")],-1),ot=Object(c["f"])("th",null,"早上",-1),it=Object(c["f"])("th",null,"中午",-1),at=Object(c["f"])("th",null,"晚上",-1),st={class:"title"},ut={class:"title"};Object(c["i"])();var lt=tt((function(t,e,n,r,o,i){var a,s,u;return Object(c["h"])(),Object(c["d"])("div",et,[Object(c["f"])("b",null,[Object(c["f"])("h1",nt,Object(c["n"])(null===(a=i.currstore)||void 0===a?void 0:a.name),1)]),ct,Object(c["f"])("table",null,[rt,Object(c["f"])("tbody",null,[Object(c["f"])("tr",null,[ot,(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(i.servicePeriod[0],(function(t,e){return Object(c["h"])(),Object(c["d"])("td",{key:e},Object(c["n"])(t),1)})),128))]),Object(c["f"])("tr",null,[it,(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(i.servicePeriod[1],(function(t,e){return Object(c["h"])(),Object(c["d"])("td",{key:e},Object(c["n"])(t),1)})),128))]),Object(c["f"])("tr",null,[at,(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(i.servicePeriod[2],(function(t,e){return Object(c["h"])(),Object(c["d"])("td",{key:e},Object(c["n"])(t),1)})),128))])])]),Object(c["f"])("h2",st,"地址："+Object(c["n"])(null===(s=i.currstore)||void 0===s?void 0:s.address),1),Object(c["f"])("h2",ut,"電話："+Object(c["n"])(null===(u=i.currstore)||void 0===u?void 0:u.phone),1)])})),dt=(n("4de4"),n("1276"),n("fb6a"),{computed:{infoBoxid:{get:function(){return this.$store.state.infoBoxid},set:function(t){this.$store.commit("setinfoBoxid",t)}},currstore:function(){var t=this;return this.$store.state.store.filter((function(e){return e.id===t.infoBoxid}))[0]},servicePeriod:function(){var t,e=(null===this||void 0===this||null===(t=this.currstore)||void 0===t?void 0:t["service_periods"])||"";return e=e.replace(/N/g,"O").replace(/Y/g,"X"),e?[e.slice(0,7).split(""),e.slice(7,14).split(""),e.slice(14,21).split("")]:e}}});n("da3e");dt.render=lt,dt.__scopeId="data-v-5ba80af8";var ft=dt,bt={name:"lightbox",components:{info:ft},computed:{showmodel:{get:function(){return this.$store.state.showmodel},set:function(t){this.$store.commit("setshowmodel",t)}}},methods:{close:function(){this.showmodel=!1}}};n("b8e8");bt.render=W,bt.__scopeId="data-v-30c91aab";var jt=bt,Ot={name:"App",components:{topside:b,leftside:K,rightside:Z,lightbox:jt},methods:Object(i["a"])(Object(i["a"])({},Object(a["b"])(["getLocalData","getStoreData"])),{},{openPopup:function(t){this.$refs.map.triggerPopup(t)}}),mounted:function(){this.getLocalData(),this.getStoreData(),console.log(this.$store.state.local),console.log(this.$store.state.store)}};n("794d");Ot.render=o;var ht=Ot,pt=n("1da1"),mt=(n("96cf"),n("caad"),n("2532"),n("d3b7"),Object(a["a"])({state:{currCity:"臺北市",currDistrict:"士林區",local:[],store:[],keyword:"",showmodel:!1,infoBoxid:null},getters:{cityList:function(t){return t.local.map((function(t){return t}))},DistrictList:function(t){var e;return(null===(e=t.local.find((function(e){return e.name===t.currCity})))||void 0===e?void 0:e.districts)||[]},filterStore:function(t){var e=t.store;return t.keyword?e.filter((function(e){return e.name.includes(t.keyword)})):e.filter((function(e){return e.county===t.currCity&&e.town===t.currDistrict}))},currDistrictInfo:function(t,e){return e.DistrictList.find((function(e){return e.name===t.currDistrict||{}}))}},mutations:{setCurrCity:function(t,e){t.currCity=e},setCurrDistrict:function(t,e){t.currDistrict=e},setLocal:function(t,e){t.local=e},setStore:function(t,e){t.store=e},setkeyword:function(t,e){t.keyword=e},setshowmodel:function(t,e){t.showmodel=e},setinfoBoxid:function(t,e){t.infoBoxid=e}},actions:{getLocalData:function(t){var e=t.commit;axios.get("https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json").then((function(t){var n=t.data;e("setLocal",n)}))},getStoreData:function(t){return Object(pt["a"])(regeneratorRuntime.mark((function e(){var n,c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(t){return t.json()}));case 3:c=e.sent,r=c.features.map((function(t){return Object(i["a"])(Object(i["a"])({},t.properties),{},{latitude:t.geometry.coordinates[0],longitude:t.geometry.coordinates[1]})})),n("setStore",r);case 6:case"end":return e.stop()}}),e)})))()}},modules:{}}));Object(c["c"])(ht).use(mt).mount("#app")},6737:function(t,e,n){},"69e7":function(t,e,n){},"794d":function(t,e,n){"use strict";n("9d0e")},7972:function(t,e,n){},9538:function(t,e,n){},"9d0e":function(t,e,n){},b8e8:function(t,e,n){"use strict";n("6737")},caec:function(t,e,n){"use strict";n("204c")},da3e:function(t,e,n){"use strict";n("566e")},dabc:function(t,e,n){},fbd4:function(t,e,n){"use strict";n("69e7")}});
//# sourceMappingURL=app.d60b7e98.js.map
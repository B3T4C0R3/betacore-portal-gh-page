(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca4bab1c"],{"283a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("material-card",{attrs:{title:t.title},scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-spacer"),n("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.yes}},[t._v("\n        Yes\n      ")]),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        No\n      ")])]},proxy:!0}])},[t._v("\n    "+t._s(t.text)+"\n    ")])],1)},r=[],o={data:function(){return{dialog:!1,loading:!1,title:null,text:null}},methods:{open:function(t,e,n){this.title=t,this.text=e,this.dialog=!0},yes:function(){var t=this;this.loading=!0,this.$emit("yes",(function(){t.loading=!1,t.dialog=!1}))}}},s=o,a=n("2877"),c=n("6544"),l=n.n(c),u=n("8336"),d=n("169a"),m=n("2fa4"),p=Object(a["a"])(s,i,r,!1,null,null,null);e["a"]=p.exports;l()(p,{VBtn:u["a"],VDialog:d["a"],VSpacer:m["a"]})},"2f21":function(t,e,n){"use strict";var i=n("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},3530:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("material-card",{staticClass:"v-card-profile",attrs:{loading:t.loadingCompanies,color:"primary"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"pa-3"},[n("h4",{staticClass:"title font-weight-light"},[t._v("\n              Companies\n            ")])]),n("v-spacer"),n("v-btn",{staticClass:"mr-3",attrs:{color:"secondary"},on:{click:t.onCompanySelect}},[n("v-icon",{staticClass:"pr-3"},[t._v("\n              mdi-plus\n            ")]),t._v("Add Company\n          ")],1)]},proxy:!0}])},[t.loadingCompanies?n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}}):n("profile-list",{attrs:{items:t.companies},on:{select:t.selectCompany}})],1)],1),n("v-col",{attrs:{cols:"12",md:"8"}},[t.selectedCompany?n("material-card",{staticClass:"v-card-profile",attrs:{color:"primary"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"pa-3"},[n("h4",{staticClass:"title font-weight-light"},[t._v("\n              "+t._s(t.selectedCompany.name)+"\n            ")])]),n("v-spacer"),n("v-menu",{attrs:{bottom:"",left:"","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.attrs,r=e.on;return[n("v-btn",t._g(t._b({staticClass:"toolbar-items",attrs:{icon:"",to:t.user?null:"/login?redirect="+t.$route.path}},"v-btn",i,!1),r),[n("v-icon",{attrs:{color:"secondary"}},[t._v("\n                  mdi-dots-vertical\n                ")])],1)]}}],null,!1,316168284)},[n("v-card",[n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(){return t.onCompanySelect(t.selectedCompany)}}},[n("v-list-item-title",[t._v("\n                    Edit Company\n                  ")])],1),n("v-list-item",{on:{click:function(){return t.onMollieSelect(t.selectedCompany)}}},[n("v-list-item-title",[t._v("\n                    Edit Mollie\n                  ")])],1),n("v-list-item",{on:{click:t.onUserSelect}},[n("v-list-item-title",[t._v("\n                    Add User\n                  ")])],1),n("v-list-item",{on:{click:t.onSiteSelect}},[n("v-list-item-title",[t._v("\n                    Add Site\n                  ")])],1)],1)],1)],1)]},proxy:!0}],null,!1,1348576621)},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("h6",{staticClass:"overline"},[t._v("\n              Users\n            ")]),t.loadingUsers?n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}}):n("profile-list",{attrs:{items:t.users},on:{edit:t.onUserSelect,delete:t.onUserDelete}})],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("h6",{staticClass:"overline"},[t._v("\n              Sites\n            ")]),n("profile-list",{attrs:{items:t.getSites()},on:{edit:t.onSiteSelect,delete:t.onSiteDelete}})],1)],1)],1):t._e()],1)],1),n("form-dialog",{ref:"dialog",attrs:{title:t.currentTitle,schema:t.currentSchema,item:t.currentItem},on:{submit:t.currentSubmit}}),n("yes-no-dialog",{ref:"yesno",on:{yes:t.currentDelete}})],1)},r=[],o=(n("8e6e"),n("456d"),n("6c7b"),n("28a5"),n("55dd"),n("ac6a"),n("a745")),s=n.n(o),a=n("db2a");function c(t){if(s()(t))return Object(a["a"])(t)}var l=n("774e"),u=n.n(l),d=n("c8bb"),m=n.n(d),p=n("67bb"),f=n.n(p);function h(t){if("undefined"!==typeof f.a&&m()(Object(t)))return u()(t)}var y=n("e630");function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t){return c(t)||h(t)||Object(y["a"])(t)||v()}n("7f7f");var g=n("bd86"),S=n("cfc7"),C=n("283a"),I=n("c5f5"),_=n("c1df"),w=n.n(_);function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={components:{FormDialog:S["a"],YesNoDialog:C["a"],ProfileList:I["a"]},data:function(){return{loadingCompanies:!1,loadingUsers:!1,currentTitle:"",currentSchema:{},currentSubmit:function(){},currentDelete:function(){},currentItem:{},companySchema:{name:{type:"text",label:"Name"}},userSchema:{name:{type:"text",label:"Name"},email:{type:"email",label:"Email"},password:{type:"password",appendIcon:"mdi-eye",label:"Password"},role:{type:"select",label:"Role",items:["Customer","Editor","Admin"]}},siteSchema:{name:{type:"text",label:"Name"},domain:{type:"text",label:"Domain"},repoName:{type:"text",label:"Repository Name"}},mollieSchema:{liveKey:{type:"text",label:"Live Key"},testKey:{type:"text",label:"Test Key"},partnerId:{type:"text",label:"Partner Id"},profileId:{type:"text",label:"Profile Id"},shippingCost:{type:"text",label:"Shipping Cost"},shippingCostFree:{type:"text",label:"Shipping Cost Free"},notification:{type:"text",label:"Notification"}},companies:[],users:[],selectedCompany:null,user:U({},this.$store.state.user)}},computed:{company:function(){return this.$store.state.company},sites:function(){return this.$store.state.sites}},created:function(){this.selectedCompany=this.company,this.getCompanies(),this.getUsers()},methods:{moment:w.a,selectCompany:function(t){this.selectedCompany=t,this.getUsers()},onCompanySelect:function(t){this.currentSchema=this.companySchema,this.currentSubmit=this.updateCompany,t&&t.companyId?(this.currentItem=t,this.currentTitle="Update Company",this.currentMethod="put"):(this.currentItem={},this.currentTitle="Add Company",this.currentMethod="post"),this.$refs.dialog.open()},onMollieSelect:function(t){var e=this;this.currentSchema=this.mollieSchema,this.currentSubmit=this.updateMollie,this.currentMethod="put",this.currentItem={companyId:t.companyId},this.currentTitle="Update MollieSettings",this.$refs.dialog.open(),this.api.get("company/mollie/"+t.companyId).then((function(t){t.data&&(e.currentItem=t.data)}),(function(t){e.error=t}))},onSiteDelete:function(t){var e=this;this.currentDelete=function(n){return e.deleteSite(t,n)},this.$refs.yesno.open("Delete ".concat(t.name),"Are you sure you want to delete ".concat(t.name," from ").concat(this.selectedCompany.name,"?"))},onSiteSelect:function(t){this.currentSchema=this.siteSchema,this.currentSubmit=this.updateSite,t&&t.siteId?(this.currentItem=t,this.currentTitle="Update Site",this.currentMethod="put"):(this.currentItem={},this.currentTitle="Add Site",this.currentMethod="post"),this.$refs.dialog.open()},onUserDelete:function(t){var e=this;this.currentDelete=function(n){return e.deleteUser(t,n)},this.$refs.yesno.open("Remove ".concat(t.name),"Are you sure you want to remove ".concat(t.name," from ").concat(this.selectedCompany.name,"?"))},onUserSelect:function(t){this.currentSchema=this.userSchema,this.currentSubmit=this.updateUser,t&&t.userId?(this.currentItem=t,this.currentTitle="Update User",this.currentMethod="put"):(this.currentItem={password:this.randPassword(5,3,2,1)},this.currentTitle="Add User",this.currentMethod="post"),this.$refs.dialog.open()},updateUser:function(t){var e=this,n=t.item;n.companyId||(n.companyId=this.selectedCompany.companyId),n.siteId||(n.siteId=this.portalSiteId),this.api[this.currentMethod]("user",n).then((function(n){e.getUsers(),e.user.userId===n.data.userId&&(e.$store.commit("setUser",n.data),localStorage.setItem("claim",JSON.stringify(n.data))),t.done()}),(function(n){e.error=n,t.done()}))},updateCompany:function(t){var e=this,n=t.item;this.api[this.currentMethod]("company",n).then((function(n){e.getCompanies(),e.company.companyId===n.data.companyId&&e.$store.commit("setCompany",n.data),t.done()}),(function(n){e.error=n,t.done()}))},updateMollie:function(t){var e=this,n=t.item;this.api[this.currentMethod]("company/mollie",n).then((function(e){t.done()}),(function(n){e.error=n,t.done()}))},updateSite:function(t){var e=this,n=t.item;n.companyId||(n.companyId=this.selectedCompany.companyId),this.api[this.currentMethod]("sites",n).then((function(n){var i=[];"put"===e.currentMethod?i=e.sites.map((function(t){return t.siteId===n.data.siteId?n.data:t})):"post"===e.currentMethod&&(i=[n.data].concat(b(e.sites))),e.$store.commit("setSites",i),t.done()}),(function(n){e.error=n,t.done()}))},getSites:function(){var t=this,e=this.sites.filter((function(e){return e.companyId===t.selectedCompany.companyId}));return e.forEach((function(e){e.sub1=e.domain,e.sub2=t.moment(e.created).format("DD-MM-YY")})),e},getUsers:function(){var t=this;this.selectedCompany&&!this.loadingUsers&&(this.loadingUsers=!0,this.api.get("user/list/"+this.portalSiteId+"/"+this.selectedCompany.companyId).then((function(e){var n=e.data;n.forEach((function(e){e.sub1=e.email,e.sub2=t.moment(e.created).format("DD-MM-YY")})),t.users=n,t.loadingUsers=!1}),(function(e){t.loadingUsers=!1,t.error=e})))},getCompanies:function(){var t=this;this.loadingCompanies||(this.loadingCompanies=!0,this.api.get("company/list").then((function(e){var n=e.data;n.forEach((function(e){e.sub1=t.moment(e.created).format("DD-MM-YY")})),t.companies=n,t.loadingCompanies=!1}),(function(e){t.loadingCompanies=!1,t.error=e})))},deleteUser:function(t,e){var n=this;this.api.delete("user/"+t.userId).then((function(t){n.getUsers(),e()}),(function(t){e(),n.error=t}))},deleteSite:function(t,e){var n=this;this.api.delete("sites/"+t.siteId).then((function(i){var r=n.sites.filter((function(e){return e.siteId!==t.siteId}));n.$store.commit("setSites",r),e()}),(function(t){e(),n.error=t}))},randPassword:function(t,e,n,i){var r=["abcdefghijklmnopqrstuvwxyz","0123456789","ABCDEFGHIJKLMNOPQRSTUVWXYZ","@#!?"];return[t,e,n,i].map((function(t,e){return Array(t).fill(r[e]).map((function(t){return t[Math.floor(Math.random()*t.length)]})).join("")})).concat().join("").split("").sort((function(){return.5-Math.random()})).join("")}}},j=O,x=n("2877"),P=n("6544"),$=n.n(P),D=n("8336"),V=n("b0af"),k=n("62ad"),A=n("a523"),E=n("132d"),T=n("8860"),L=n("da13"),N=n("5d23"),Y=n("e449"),B=n("490a"),F=n("0fd9"),K=n("2fa4"),R=Object(x["a"])(j,i,r,!1,null,null,null);e["default"]=R.exports;$()(R,{VBtn:D["a"],VCard:V["a"],VCol:k["a"],VContainer:A["a"],VIcon:E["a"],VList:T["a"],VListItem:L["a"],VListItemTitle:N["c"],VMenu:Y["a"],VProgressCircular:B["a"],VRow:F["a"],VSpacer:K["a"]})},"36bd":function(t,e,n){"use strict";var i=n("4bf8"),r=n("77f1"),o=n("9def");t.exports=function(t){var e=i(this),n=o(e.length),s=arguments.length,a=r(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,l=void 0===c?n:r(c,n);while(l>a)e[a++]=t;return e}},"55dd":function(t,e,n){"use strict";var i=n("5ca1"),r=n("d8e8"),o=n("4bf8"),s=n("79e5"),a=[].sort,c=[1,2,3];i(i.P+i.F*(s((function(){c.sort(void 0)}))||!s((function(){c.sort(null)}))||!n("2f21")(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),r(t))}})},"6c7b":function(t,e,n){var i=n("5ca1");i(i.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var i=n("2b0e");function r(t){return i["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:o}=i;if(o){i.attrs={};const t=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var o=n("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:s}=n;return s&&(n.attrs={},r=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(o["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},c5f5:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[t._l(t.items,(function(e,i){return[n("v-list-item",t._g({key:i},t.$listeners.select?{click:function(){return t.$emit("select",e)}}:{}),[n("avatar",{attrs:{image:e.image,name:e.image?"":e.name,list:""}}),n("v-list-item-content",[n("v-list-item-title",[t._v("\n          "+t._s(e.name)+"\n        ")]),e.sub1||e.sub2?n("v-list-item-subtitle",[t._v("\n          "+t._s(e.sub1)),n("br"),t._v(t._s(e.sub2)+"\n        ")]):t._e()],1),t.$listeners.edit?n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.$emit("edit",e)}}},[n("v-icon",[t._v("mdi-pencil")])],1)],1):t._e(),t.$listeners.delete?n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.$emit("delete",e)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1):t._e()],1)]}))],2)},r=[],o={props:{items:{type:Array,default:function(){return[]}}}},s=o,a=n("2877"),c=n("6544"),l=n.n(c),u=n("8336"),d=n("132d"),m=n("8860"),p=n("da13"),f=n("1800"),h=n("5d23"),y=Object(a["a"])(s,i,r,!1,null,null,null);e["a"]=y.exports;l()(y,{VBtn:u["a"],VIcon:d["a"],VList:m["a"],VListItem:p["a"],VListItemAction:f["a"],VListItemContent:h["a"],VListItemSubtitle:h["b"],VListItemTitle:h["c"]})}}]);
//# sourceMappingURL=chunk-ca4bab1c.878c7d5f.js.map
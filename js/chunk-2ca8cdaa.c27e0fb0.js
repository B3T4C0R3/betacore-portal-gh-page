(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ca8cdaa"],{"0894":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("material-card",{attrs:{loading:e.loadingSchemas,title:"Forms",color:"primary"}},[n("profile-list",{attrs:{items:e.schemas},on:{select:e.getForms}})],1)],1),e.selectedSchema?n("v-col",{attrs:{md:"8",cols:"12"}},[n("material-card",{attrs:{loading:e.loadingForms,title:e.selectedSchema.name,color:"primary"},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-spacer"),e.selectedSchema&&e.answers&&e.answers.length>0?n("vue-json-to-csv",{attrs:{"json-data":e.answers,"csv-title":e.selectedSchema.name}},[n("v-btn",{attrs:{color:"primary"}},[e._v("\n              Download\n            ")])],1):e._e()]},proxy:!0}],null,!1,2624560132)},[n("v-data-table",{key:e.updateTableKey,attrs:{title:"entries",loading:e.loadingForms,headers:e.headers,items:e.answers,"items-per-page":10},scopedSlots:e._u([{key:"item.created",fn:function(t){return[e._v("\n            "+e._s(e.moment(t.item.created).format("DD-MM-YY"))+"\n          ")]}}],null,!1,3321920143)})],1)],1):e._e()],1)],1)},s=[],r=(n("8e6e"),n("456d"),n("bd86")),i=(n("7f7f"),n("ac6a"),n("c1df")),o=n.n(i),c=n("c5f5"),l=n("055a"),m=n.n(l);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={components:{VueJsonToCsv:m.a,ProfileList:c["a"]},data:function(){return{schemas:[],selectedSchema:null,updateTableKey:0,headers:[],answers:[],loadingSchemas:!1,loadingForms:!1,currentDelete:function(){}}},computed:{site:function(){return this.$store.state.site}},mounted:function(){this.getSchemas()},methods:{moment:o.a,getForms:function(e){var t=this;this.selectedSchema=e;var n=[{text:"Date",value:"Date"}];e.fields.forEach((function(e){n.push({text:t.capitalize(e.name),value:e.name,align:"right"})})),this.headers=n,this.loadingForms=!0,this.api.get("form/"+e.schemaId).then((function(e){var a=e.data,s=[];a.forEach((function(e){s.push(d({Date:e.created},e.answers))})),console.log(s,n),t.answers=s,t.loadingForms=!1,t.updateTableKey++}),(function(e){t.loadingForms=!1,t.error=e}))},getSchemas:function(){var e=this;this.loadingSchemas=!0,this.api.get("form/schemas/"+this.site).then((function(t){var n=t.data;n.forEach((function(t){t.sub1=e.moment(t.created).format("DD-MM-YY")})),e.schemas=n,e.loadingSchemas=!1}),(function(t){e.loadingSchemas=!1,e.error=t}))}}},h=f,p=n("2877"),v=n("6544"),g=n.n(v),b=n("8336"),y=n("62ad"),_=n("a523"),w=n("8fea"),O=n("0fd9"),S=n("2fa4"),j=Object(p["a"])(h,a,s,!1,null,null,null);t["default"]=j.exports;g()(j,{VBtn:b["a"],VCol:y["a"],VContainer:_["a"],VDataTable:w["a"],VRow:O["a"],VSpacer:S["a"]})},c5f5:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",[e._l(e.items,(function(t,a){return[n("v-list-item",e._g({key:a},e.$listeners.select?{click:function(){return e.$emit("select",t)}}:{}),[n("avatar",{attrs:{image:t.image,name:t.image?"":t.name,list:""}}),n("v-list-item-content",[n("v-list-item-title",[e._v("\n          "+e._s(t.name)+"\n        ")]),t.sub1||t.sub2?n("v-list-item-subtitle",[e._v("\n          "+e._s(t.sub1)),n("br"),e._v(e._s(t.sub2)+"\n        ")]):e._e()],1),e.$listeners.edit?n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),e.$emit("edit",t)}}},[n("v-icon",[e._v("mdi-pencil")])],1)],1):e._e(),e.$listeners.delete?n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),e.$emit("delete",t)}}},[n("v-icon",[e._v("mdi-delete")])],1)],1):e._e()],1)]}))],2)},s=[],r={props:{items:{type:Array,default:function(){return[]}}}},i=r,o=n("2877"),c=n("6544"),l=n.n(c),m=n("8336"),u=n("132d"),d=n("8860"),f=n("da13"),h=n("1800"),p=n("5d23"),v=Object(o["a"])(i,a,s,!1,null,null,null);t["a"]=v.exports;l()(v,{VBtn:m["a"],VIcon:u["a"],VList:d["a"],VListItem:f["a"],VListItemAction:h["a"],VListItemContent:p["a"],VListItemSubtitle:p["b"],VListItemTitle:p["c"]})}}]);
//# sourceMappingURL=chunk-2ca8cdaa.c27e0fb0.js.map
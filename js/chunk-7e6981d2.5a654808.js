(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6981d2"],{"13b3":function(t,e,s){},1681:function(t,e,s){},"1bfb":function(t,e,s){},"509f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{md:"8",cols:"12"}},[s("material-card",{key:t.updateKey,attrs:{loading:t.loading,color:"primary"},scopedSlots:t._u([{key:"header",fn:function(){return[s("v-tabs",{attrs:{grow:"","slider-color":"secondary","background-color":"primary"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.languages,(function(e,i){return s("v-tab",{key:i,attrs:{"active-class":"secondary--text"},on:{click:function(){return t.setTranslations(i)}}},[t._v("\n              "+t._s(e.name)+"\n            ")])})),1),t.isBetaCore(t.user)?s("v-menu",{attrs:{bottom:"",left:"","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.attrs,n=e.on;return[s("v-btn",t._g(t._b({staticClass:"toolbar-items",attrs:{icon:""}},"v-btn",i,!1),n),[s("v-icon",{attrs:{color:"secondary"}},[t._v("\n                  mdi-dots-vertical\n                ")])],1)]}}],null,!1,2661299935)},[s("v-card",[s("v-list",{attrs:{dense:""}},[s("v-list-item",{on:{click:function(){return t.onAddSelect(t.tab)}}},[s("v-list-item-title",[t._v("\n                    Add Language\n                  ")])],1),t.languages[t.tab]?s("v-list-item",{on:{click:function(){return t.onEditSelect(t.tab)}}},[s("v-list-item-title",[t._v("\n                    Edit Language\n                  ")])],1):t._e(),t.languages[t.tab]?s("v-list-item",{on:{click:function(){return t.onAddKey(t.tab)}}},[s("v-list-item-title",[t._v("\n                    Add Translation\n                  ")])],1):t._e()],1)],1)],1):t._e()]},proxy:!0},{key:"actions",fn:function(){return[s("v-btn",{attrs:{loading:t.saving,color:"primary"},on:{click:t.saveLanguages}},[t._v("\n            Save\n          ")]),s("build")]},proxy:!0}])},[s("v-alert",{directives:[{name:"show",rawName:"v-show",value:0===t.languages.length&&!t.loading,expression:"languages.length === 0 && !loading"}],attrs:{type:"warning"}},[t._v("\n          No languages found for the current site\n        ")]),t.languages[t.tab]?s("editable-table",{attrs:{deletable:t.isBetaCore(t.user),headers:t.headers,items:t.translations},on:{save:t.saveTranslation}}):t._e()],1)],1)],1),s("form-dialog",{ref:"dialog",attrs:{title:t.currentTitle,schema:t.currentSchema,item:t.currentItem},on:{submit:t.currentMethod}})],1)},n=[],a=s("bd86"),r=(s("28a5"),s("5d58")),o=s.n(r),l=s("67bb"),h=s.n(l);function c(t){return c="function"===typeof h.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof h.a&&t.constructor===h.a&&t!==h.a.prototype?"symbol":typeof t},c(t)}s("456d"),s("ac6a");var u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-data-table",{staticClass:"grow",attrs:{headers:t.deletable?t.headers.concat([{value:"actions",align:"right",sortable:!1}]):t.headers,search:t.search,items:t.items},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item",fn:function(e){return[s("tr",[t._l(t.headers,(function(i,n){return s("td",{key:i.key+"-"+n},[e.item[i.value]&&i.editable?s("v-edit-dialog",{attrs:{large:"","return-value":e.item[i.value]},on:{"update:returnValue":function(s){return t.$set(e.item,i.value,s)},"update:return-value":function(s){return t.$set(e.item,i.value,s)},save:function(e){return t.$emit("save",t.items)}},scopedSlots:t._u([e.item[i.value].length<=126?{key:"input",fn:function(){return[s("v-text-field",{attrs:{label:"Edit","single-line":""},model:{value:e.item[i.value],callback:function(s){t.$set(e.item,i.value,s)},expression:"props.item[header.value]"}})]},proxy:!0}:{key:"input",fn:function(){return[s("v-textarea",{attrs:{label:"Edit","single-line":""},model:{value:e.item[i.value],callback:function(s){t.$set(e.item,i.value,s)},expression:"props.item[header.value]"}})]},proxy:!0}],null,!0)},[t._v("\n          "+t._s(e.item[i.value])+" "),s("v-icon",{staticClass:"mb-1 ml-1",attrs:{small:""}},[t._v("\n            mdi-pencil\n          ")])],1):[t._v("\n          "+t._s(e.item[i.value])+"\n        ")]],2)})),t.deletable?s("td",[s("v-icon",{attrs:{small:""},on:{click:function(s){return t.deleteItem(e.index)}}},[t._v("\n          mdi-delete\n        ")])],1):t._e()],2)]}}])})},d=[],v={props:{deletable:{type:Boolean},items:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{search:""}},methods:{deleteItem:function(t){this.items.splice(t,1),this.$emit("save",this.items)}}},p=v,f=s("2877"),g=s("6544"),m=s.n(g),b=s("8fea"),w=(s("c79c"),s("e4d3")),y=s("7560"),x=s("80d2"),$=s("afdd"),k=s("326d"),C=s("58df"),O=Object(C["a"])(w["a"],y["a"]).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data(){return{isActive:!1}},watch:{isActive(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel(){this.isActive=!1,this.$emit("cancel")},focus(){const t=this.$refs.content.querySelector("input");t&&t.focus()},genButton(t,e){return this.$createElement($["a"],{props:{text:!0,color:"primary",light:!0},on:{click:t}},e)},genActions(){return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton(()=>{this.save(this.returnValue),this.$emit("save")},this.saveText)])},genContent(){return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:t=>{t.keyCode===x["y"].esc&&this.cancel(),t.keyCode===x["y"].enter&&(this.save(this.returnValue),this.$emit("save"))}},ref:"content"},[this.$slots.input])}},render(t){return t(k["a"],{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:t=>this.isActive=t},scopedSlots:{activator:({on:e})=>t("div",{staticClass:"v-small-dialog__activator",on:e},[t("span",{staticClass:"v-small-dialog__activator__content"},this.$slots.default)])}},[this.genContent(),this.large?this.genActions():null])}}),S=s("132d"),_=s("8654");s("1681");const I=Object(C["a"])(_["a"]);var T=I.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,..._["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=_["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){_["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),A=Object(f["a"])(p,u,d,!1,null,null,null),B=A.exports;m()(A,{VDataTable:b["a"],VEditDialog:O,VIcon:S["a"],VTextField:_["a"],VTextarea:T});var V=s("cfc7"),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-btn",{attrs:{color:"primary",loading:t.loading,text:""},on:{click:t.build}},[t._v("\n  Build Site\n")])},E=[],N={data:function(){return{loading:!1}},computed:{site:function(){return this.$store.state.site}},methods:{build:function(){var t=this;this.loading=!0,this.api.get("sites/action/"+this.site).then((function(e){console.log(e.data),t.loading=!1}),(function(e){t.error=e,t.loading=!1}))}}},R=N,M=s("8336"),z=Object(f["a"])(R,j,E,!1,null,null,null),L=z.exports;m()(z,{VBtn:M["a"]});var P={components:{EditableTable:B,FormDialog:V["a"],Build:L},data:function(){return{tab:0,error:null,loading:!1,saving:!1,currentTitle:"",currentItem:{},currentMethod:function(){},currentSchema:{},translations:[],translationSchema:{key:{type:"text",label:"Key"},value:{type:"text",label:"Value"}},languageSchema:{code:{type:"text",label:"Code"},iso:{type:"text",label:"ISO"},name:{type:"text",label:"Name"},dir:{type:"select",label:"Direction",items:["ltr","rtl"]},stringified_translations:{type:"text",label:"Translations (Leave empty for no change)"}},headers:[{text:"Key",align:"left",value:"key"},{text:"Value",align:"left",value:"value",editable:!0}],languages:[],updateKey:0}},computed:{user:function(){return this.$store.state.user},site:function(){return this.$store.state.site}},mounted:function(){this.isBetaCore(this.user)&&(this.headers[0].editable=!0),this.getLanguages()},methods:{setTranslations:function(t){console.log(this.languages);var e=[];this.languages[t].translations&&(e=this.fillTranslations(this.languages[t].translations,e)),this.translations=e,this.updateKey++},fillTranslations:function(t,e){var s=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object.keys(t).forEach((function(n){var a=t[n];s.isObject(a)?s.fillTranslations(a,e,i+n+"."):e.push({key:i+n,value:a})})),e},isObject:function(t){return t&&"object"===c(t)&&!Array.isArray(t)},onEditSelect:function(){this.currentTitle="Edit Translation",this.currentSchema=this.languageSchema,this.currentMethod=this.updateLanguage,this.currentItem=this.languages[this.tab],this.$refs.dialog.open()},onAddSelect:function(){var t=this;this.currentTitle="Add Translation",this.currentSchema=this.languageSchema,this.currentMethod=function(e){return t.updateLanguage(e,!0)},this.$refs.dialog.open()},onAddKey:function(){this.currentTitle="Add Translation",this.currentSchema=this.translationSchema,this.currentMethod=this.addKey,this.$refs.dialog.open()},updateLanguage:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=t.item;if(s.stringified_translations)try{var i=s.stringified_translations;s.translations=JSON.parse(i)}catch(n){console.log(n)}delete s.stringified_translations,e?(this.languages.push(s),this.tab++):this.languages[this.tab]=s,this.setTranslations(this.tab),t.done()},addKey:function(t){var e=this.getItems(this.languages[this.tab].translations);e.push(t.item),this.saveTranslation(e),t.done(),this.updateKey++},saveTranslation:function(t){var e=this,s=[];t.forEach((function(t){var i=e.createObject(t.key,t.value);s.push(i)}));var i={};this.mergeDeep.apply(this,[i].concat(s)),this.languages[this.tab].translations=i,this.updateKey++},createObject:function(t,e){var s={},i=t.split(".");if(1===i.length)s[i[0]]=e;else if(i.length>1){var n=i.slice(1,i.length).join(".");s[i[0]]=this.createObject(n,e)}return s},mergeDeep:function(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),i=1;i<e;i++)s[i-1]=arguments[i];if(!s.length)return t;var n=s.shift();if(this.isObject(t)&&this.isObject(n))for(var r in n)this.isObject(n[r])?(t[r]||Object.assign(t,Object(a["a"])({},r,{})),this.mergeDeep(t[r],n[r])):Object.assign(t,Object(a["a"])({},r,n[r]));return this.mergeDeep.apply(this,[t].concat(s))},saveLanguages:function(){var t=this;this.saving=!0,this.api.post("language/"+this.site,this.languages).then((function(e){t.languages=e.data,t.updateKey++,t.saving=!1}),(function(e){t.error=e,t.saving=!1}))},getLanguages:function(){var t=this;this.loading=!0,this.api.get("language/"+this.site).then((function(e){t.languages=e.data,t.languages.length>0?t.setTranslations(t.tab):t.updateKey++,t.loading=!1}),(function(e){t.error=e,t.loading=!1}))}}},D=P,W=s("0798"),H=s("b0af"),K=s("62ad"),G=s("a523"),F=s("8860"),X=s("da13"),q=s("5d23"),U=s("e449"),J=s("0fd9"),Q=s("4e82"),Y=s("1c87");const Z=Object(C["a"])(Y["a"],Object(Q["a"])("tabsBar"),y["a"]);var tt=Z.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...Y["a"].options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},s.on={...s.on,keydown:t=>{t.keyCode===x["y"].enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),et=(s("1bfb"),s("608c"),s("9d26")),st=s("0789"),it=s("604c"),nt=s("e4cd"),at=s("dc22"),rt=s("c3f0");const ot=Object(C["a"])(it["a"],nt["a"]).extend({name:"base-slide-group",directives:{Resize:at["b"],Touch:rt["b"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...it["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this["has"+s];return this.showArrows||i?this.$createElement(et["a"],{props:{disabled:!i}},this[e+"Icon"]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(st["c"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,s,i){const n=s?-1:1,a=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(a,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,s,i){const n=t.clientWidth,a=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);const r=e.wrapper+i,o=n+a,l=.4*n;return a<=i?i=Math.max(a-l,0):r<=o&&(i=Math.min(i-(r-o-l),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset(t,e,s){const{offsetLeft:i,clientWidth:n}=t;if(s){const t=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});ot.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var lt=s("d10f"),ht=Object(C["a"])(ot,lt["a"],y["a"]).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...ot.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=ot.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,n=e.path;let a=!1,r=!1;for(const o of s)if(o.to===i?a=!0:o.to===n&&(r=!0),a&&r)break;!a&&r&&(this.internalValue=void 0)}},render(t){const e=ot.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),ct=(s("13b3"),it["a"].extend({name:"v-window",directives:{Touch:rt["b"]},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...it["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,s=e?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){var i;const n={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,s()}},a={"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},r=null!=(i=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:n,attrs:a}))?i:[this.$createElement($["a"],{props:{icon:!0},attrs:a,on:n},[this.$createElement(et["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__"+t},r)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const s=this.items.length,i=s-1;return s<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}})),ut=ct.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...ct.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||it["a"].options.methods.getValue.call(this,t,e)}}}),dt=s("a9ad"),vt=Object(C["a"])(dt["a"]).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),pt=s("a452");const ft=Object(C["a"])(dt["a"],pt["a"],y["a"]);var gt=ft.extend().extend({name:"v-tabs",directives:{Resize:at["b"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(x["g"])(this.slider.height),left:this.isReversed?void 0:Object(x["g"])(this.slider.left),right:this.isReversed?Object(x["g"])(this.slider.right):void 0,top:this.vertical?Object(x["g"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(x["g"])(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:Object(x["g"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(ht,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(ut,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(vt,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],n=this.$slots.default||[],a=n.length;for(let r=0;r<a;r++){const a=n[r];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":e=a;break;case"v-tabs-items":t=a;break;case"v-tab-item":s.push(a);break;default:i.push(a)}else i.push(a)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,n)])}}),mt=Object(f["a"])(D,i,n,!1,null,null,null);e["default"]=mt.exports;m()(mt,{VAlert:W["a"],VBtn:M["a"],VCard:H["a"],VCol:K["a"],VContainer:G["a"],VIcon:S["a"],VList:F["a"],VListItem:X["a"],VListItemTitle:q["c"],VMenu:U["a"],VRow:J["a"],VTab:tt,VTabs:gt})},"5d58":function(t,e,s){t.exports=s("d8d6")},"608c":function(t,e,s){},c79c:function(t,e,s){},d8d6:function(t,e,s){s("1654"),s("6c1c"),t.exports=s("ccb9").f("iterator")}}]);
//# sourceMappingURL=chunk-7e6981d2.5a654808.js.map
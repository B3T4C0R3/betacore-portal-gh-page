(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b97d6fbe"],{"13b3":function(t,e,s){},1681:function(t,e,s){},"1bfb":function(t,e,s){},"386d":function(t,e,s){"use strict";var i=s("cb7c"),n=s("83a1"),a=s("5f1b");s("214f")("search",1,(function(t,e,s,r){return[function(s){var i=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,i):new RegExp(s)[e](String(i))},function(t){var e=r(s,t,this);if(e.done)return e.value;var o=i(t),l=String(this),h=o.lastIndex;n(h,0)||(o.lastIndex=0);var c=a(o,l);return n(o.lastIndex,h)||(o.lastIndex=h),null===c?-1:c.index}]}))},"509f":function(t,e,s){"use strict";s.r(e);var i=s("0798"),n=s("8336"),a=s("b0af"),r=s("62ad"),o=s("a523"),l=s("132d"),h=s("8860"),c=s("da13"),u=s("5d23"),d=s("e449"),f=s("0fd9"),v=s("4e82"),g=s("1c87"),p=s("7560"),m=s("80d2"),b=s("58df");const w=Object(b["a"])(g["a"],Object(v["a"])("tabsBar"),p["a"]);var y=w.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...g["a"].options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:this.disabled?-1:0},s.on={...s.on,keydown:t=>{t.keyCode===m["z"].enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),x=(s("1bfb"),s("608c"),s("9d26")),$=s("0789"),k=s("604c"),S=s("e4cd"),O=s("dc22"),C=s("c3f0");function _(t){const e=.501,s=Math.abs(t);return Math.sign(t)*(s/((1/e-2)*(1-s)+1))}function I(t,e,s,i){const n=t.clientWidth,a=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);const r=e.wrapper+i,o=n+a,l=.4*n;return a<=i?i=Math.max(a-l,0):r<=o&&(i=Math.min(i-(r-o-l),e.content-e.wrapper)),s?-i:i}function T(t,e,s){const{offsetLeft:i,clientWidth:n}=t;if(s){const t=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}}const A=Object(b["a"])(k["a"],S["a"]).extend({name:"base-slide-group",directives:{Resize:O["b"],Touch:C["b"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch(){return"undefined"!==typeof window},__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...k["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$vuetify.rtl&&(t=-t);let e=t<=0?_(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+_(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform=`translateX(${e}px)`}},mounted(){if("undefined"!==typeof ResizeObserver){const t=new ResizeObserver(()=>{this.onResize()});t.observe(this.$el),t.observe(this.$refs.content),this.$on("hook:destroyed",()=>{t.disconnect()})}else{let t=0;this.$on("hook:beforeUpdate",()=>{var e;t=((null===(e=this.$refs.content)||void 0===e?void 0:e.children)||[]).length}),this.$on("hook:updated",()=>{var e;t!==((null===(e=this.$refs.content)||void 0===e?void 0:e.children)||[]).length&&this.setWidths()})}},methods:{onScroll(){this.$refs.wrapper.scrollLeft=0},onFocusin(t){if(this.isOverflowing)for(const e of Object(m["g"])(t))for(const t of this.items)if(t.$el===e)return void(this.scrollOffset=I(t.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))},genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this["has"+s];return this.showArrows||i?this.$createElement(x["a"],{props:{disabled:!i}},this[e+"Icon"]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement($["c"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset(t,e,s,i){const n=s?-1:1,a=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(a,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){const e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(!this.canTouch)return;const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=T(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=I(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{if(this._isDestroyed)return;const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});A.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var B=s("d10f"),j=Object(b["a"])(A,B["a"],p["a"]).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...A.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=A.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,n=e.path;let a=!1,r=!1;for(const o of s)if(o.to===n?r=!0:o.to===i&&(a=!0),a&&r)break;!a&&r&&(this.internalValue=void 0)}},render(t){const e=A.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),z=(s("13b3"),s("afdd")),R=k["a"].extend({name:"v-window",directives:{Touch:C["b"]},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...k["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,s=e?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){var i,n,a;const r={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,s()}},o={"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},l=null!==(a=null===(n=(i=this.$scopedSlots)[t])||void 0===n?void 0:n.call(i,{on:r,attrs:o}))&&void 0!==a?a:[this.$createElement(z["a"],{props:{icon:!0},attrs:o,on:r},[this.$createElement(x["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__"+t},l)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const s=this.items.length,i=s-1;return s<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),N=R.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...R.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||k["a"].options.methods.getValue.call(this,t,e)}}}),D=s("a9ad"),E=Object(b["a"])(D["a"]).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),P=s("a452");const M=Object(b["a"])(D["a"],P["a"],p["a"]);var V=M.extend().extend({name:"v-tabs",directives:{Resize:O["b"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(m["h"])(this.slider.height),left:this.isReversed?void 0:Object(m["h"])(this.slider.left),right:this.isReversed?Object(m["h"])(this.slider.right):void 0,top:this.vertical?Object(m["h"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(m["h"])(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){if("undefined"!==typeof ResizeObserver){const t=new ResizeObserver(()=>{this.onResize()});t.observe(this.$el),this.$on("hook:destroyed",()=>{t.disconnect()})}this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:Object(m["h"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(j,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(N,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(E,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],n=this.$slots.default||[],a=n.length;for(let r=0;r<a;r++){const a=n[r];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":e=a;break;case"v-tabs-items":t=a;break;case"v-tab-item":s.push(a);break;default:i.push(a)}else i.push(a)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,n)])}}),H=(s("7f7f"),function(){var t=this,e=t._self._c;return e(o["a"],{attrs:{fluid:""}},[e(f["a"],{attrs:{justify:"center"}},[e(r["a"],{attrs:{md:"8",cols:"12"}},[e("material-card",{key:t.updateKey,attrs:{loading:t.loading,color:"primary"},scopedSlots:t._u([{key:"header",fn:function(){return[e(V,{attrs:{grow:"","slider-color":"secondary","background-color":"primary"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.languages,(function(s,i){return e(y,{key:i,attrs:{"active-class":"secondary--text"},on:{click:function(){return t.setTranslations(i)}}},[t._v("\n              "+t._s(s.name)+"\n            ")])})),1),t.isBetaCore(t.user)?e(d["a"],{attrs:{bottom:"",left:"","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(s){var i=s.attrs,a=s.on;return[e(n["a"],t._g(t._b({staticClass:"toolbar-items",attrs:{icon:""}},"v-btn",i,!1),a),[e(l["a"],{attrs:{color:"secondary"}},[t._v("\n                  mdi-dots-vertical\n                ")])],1)]}}],null,!1,2661299935)},[e(a["a"],[e(h["a"],{attrs:{dense:""}},[e(c["a"],{on:{click:function(){return t.onAddSelect(t.tab)}}},[e(u["c"],[t._v("\n                    Add Language\n                  ")])],1),t.languages[t.tab]?e(c["a"],{on:{click:function(){return t.onEditSelect(t.tab)}}},[e(u["c"],[t._v("\n                    Edit Language\n                  ")])],1):t._e(),t.languages[t.tab]?e(c["a"],{on:{click:function(){return t.onAddKey(t.tab)}}},[e(u["c"],[t._v("\n                    Add Translation\n                  ")])],1):t._e()],1)],1)],1):t._e()]},proxy:!0},{key:"actions",fn:function(){return[e(n["a"],{attrs:{loading:t.saving,color:"primary"},on:{click:t.saveLanguages}},[t._v("\n            Save Changes\n          ")]),e("build")]},proxy:!0}])},[e(i["a"],{directives:[{name:"show",rawName:"v-show",value:0===t.languages.length&&!t.loading,expression:"languages.length === 0 && !loading"}],attrs:{type:"warning"}},[t._v("\n          No languages found for the current site\n        ")]),t.languages[t.tab]?e("editable-table",{attrs:{deletable:t.isBetaCore(t.user),headers:t.headers,items:t.translations},on:{save:t.saveTranslation}}):t._e()],1)],1)],1),e("form-dialog",{ref:"dialog",attrs:{title:t.currentTitle,schema:t.currentSchema,item:t.currentItem},on:{submit:t.currentMethod}})],1)}),L=[],W=s("bd86"),F=(s("28a5"),s("67bb")),K=s.n(F),G=s("5d58"),X=s.n(G);function q(t){return q="function"==typeof K.a&&"symbol"==typeof X.a?function(t){return typeof t}:function(t){return t&&"function"==typeof K.a&&t.constructor===K.a&&t!==K.a.prototype?"symbol":typeof t},q(t)}s("456d"),s("ac6a");var U=s("8fea"),Y=(s("c79c"),s("e4d3")),J=s("326d"),Q=Object(b["a"])(Y["a"],p["a"]).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data(){return{isActive:!1}},watch:{isActive(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel(){this.isActive=!1,this.$emit("cancel")},focus(){const t=this.$refs.content.querySelector("input");t&&t.focus()},genButton(t,e){return this.$createElement(z["a"],{props:{text:!0,color:"primary",light:!0},on:{click:t}},e)},genActions(){return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton(()=>{this.save(this.returnValue),this.$emit("save")},this.saveText)])},genContent(){return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:t=>{t.keyCode===m["z"].esc&&this.cancel(),t.keyCode===m["z"].enter&&(this.save(this.returnValue),this.$emit("save"))}},ref:"content"},[this.$slots.input])}},render(t){return t(J["a"],{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:t=>this.isActive=t},scopedSlots:{activator:({on:e})=>t("div",{staticClass:"v-small-dialog__activator",on:e},[t("span",{staticClass:"v-small-dialog__activator__content"},this.$slots.default)])}},[this.genContent(),this.large?this.genActions():null])}}),Z=s("8654");s("1681");const tt=Object(b["a"])(Z["a"]);var et=tt.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...Z["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=Z["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){Z["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),st=(s("386d"),s("75fc")),it=function(){var t=this,e=t._self._c;return e(U["a"],{staticClass:"grow",attrs:{headers:t.deletable?[].concat(Object(st["a"])(t.headers),[{value:"actions",align:"right",sortable:!1}]):t.headers,search:t.search,items:t.items},scopedSlots:t._u([{key:"top",fn:function(){return[e(Z["a"],{staticClass:"mx-4",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item",fn:function(s){return[e("tr",[t._l(t.headers,(function(i,n){return e("td",{key:i.key+"-"+n},[s.item[i.value]&&i.editable?e(Q,{attrs:{large:"","return-value":s.item[i.value]},on:{"update:returnValue":function(e){return t.$set(s.item,i.value,e)},"update:return-value":function(e){return t.$set(s.item,i.value,e)},save:function(e){return t.$emit("save",t.items)}},scopedSlots:t._u([s.item[i.value].length<=126?{key:"input",fn:function(){return[e(Z["a"],{attrs:{label:"Edit","single-line":""},model:{value:s.item[i.value],callback:function(e){t.$set(s.item,i.value,e)},expression:"props.item[header.value]"}})]},proxy:!0}:{key:"input",fn:function(){return[e(et,{attrs:{label:"Edit","single-line":""},model:{value:s.item[i.value],callback:function(e){t.$set(s.item,i.value,e)},expression:"props.item[header.value]"}})]},proxy:!0}],null,!0)},[t._v("\n          "+t._s(s.item[i.value])+" "),e(l["a"],{staticClass:"mb-1 ml-1",attrs:{small:""}},[t._v("\n            mdi-pencil\n          ")])],1):[t._v("\n          "+t._s(s.item[i.value])+"\n        ")]],2)})),t.deletable?e("td",[e(l["a"],{attrs:{small:""},on:{click:function(e){return t.deleteItem(s.index)}}},[t._v("\n          mdi-delete\n        ")])],1):t._e()],2)]}}])})},nt=[],at={props:{deletable:{type:Boolean},items:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{search:""}},methods:{deleteItem:function(t){this.items.splice(t,1),this.$emit("save",this.items)}}},rt=at,ot=s("2877"),lt=Object(ot["a"])(rt,it,nt,!1,null,null,null),ht=lt.exports,ct=s("cfc7"),ut=s("aaf7"),dt={components:{EditableTable:ht,FormDialog:ct["a"],Build:ut["a"]},data:function(){return{tab:0,error:null,loading:!1,saving:!1,currentTitle:"",currentItem:{},currentMethod:function(){},currentSchema:{},translations:[],translationSchema:{key:{type:"text",label:"Key"},value:{type:"text",label:"Value"}},languageSchema:{code:{type:"text",label:"Code"},iso:{type:"text",label:"ISO"},name:{type:"text",label:"Name"},dir:{type:"select",label:"Direction",items:["ltr","rtl"]},stringified_translations:{type:"text",label:"Translations (Leave empty for no change)"}},headers:[{text:"Key",align:"left",value:"key"},{text:"Value",align:"left",value:"value",editable:!0}],languages:[],updateKey:0}},computed:{user:function(){return this.$store.state.user},site:function(){return this.$store.state.site}},mounted:function(){this.isBetaCore(this.user)&&(this.headers[0].editable=!0),this.getLanguages()},methods:{setTranslations:function(t){var e=[];this.languages[t]&&this.languages[t].translations&&(e=this.fillTranslations(this.languages[t].translations,e)),this.translations=e,this.updateKey++},fillTranslations:function(t,e){var s=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object.keys(t).forEach((function(n){var a=t[n];s.isObject(a)?s.fillTranslations(a,e,i+n+"."):e.push({key:i+n,value:a})})),e},isObject:function(t){return t&&"object"===q(t)&&!Array.isArray(t)},onEditSelect:function(){this.currentTitle="Edit Translation",this.currentSchema=this.languageSchema,this.currentMethod=this.updateLanguage,this.currentItem=this.languages[this.tab],this.$refs.dialog.open()},onAddSelect:function(){var t=this;this.currentTitle="Add Translation",this.currentSchema=this.languageSchema,this.currentMethod=function(e){return t.updateLanguage(e,!0)},this.$refs.dialog.open()},onAddKey:function(){this.currentTitle="Add Translation",this.currentSchema=this.translationSchema,this.currentMethod=this.addKey,this.$refs.dialog.open()},updateLanguage:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=t.item;if(s.stringified_translations)try{var i=s.stringified_translations;s.translations=JSON.parse(i)}catch(n){console.log(n)}delete s.stringified_translations,e?(this.languages.push(s),this.tab++):this.languages[this.tab]=s,this.setTranslations(this.tab),t.done()},addKey:function(t){var e=[];e=this.fillTranslations(this.languages[this.tab].translations,e),e.push(t.item),this.saveTranslation(e),t.done(),this.updateKey++},saveTranslation:function(t){var e=this,s=[];t.forEach((function(t){var i=e.createObject(t.key,t.value);s.push(i)}));var i={};this.mergeDeep.apply(this,[i].concat(s)),this.languages[this.tab].translations=i,this.updateKey++},createObject:function(t,e){var s={},i=t.split(".");if(1===i.length)s[i[0]]=e;else if(i.length>1){var n=i.slice(1,i.length).join(".");s[i[0]]=this.createObject(n,e)}return s},mergeDeep:function(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),i=1;i<e;i++)s[i-1]=arguments[i];if(!s.length)return t;var n=s.shift();if(this.isObject(t)&&this.isObject(n))for(var a in n)this.isObject(n[a])?(t[a]||Object.assign(t,Object(W["a"])({},a,{})),this.mergeDeep(t[a],n[a])):Object.assign(t,Object(W["a"])({},a,n[a]));return this.mergeDeep.apply(this,[t].concat(s))},saveLanguages:function(){var t=this;this.saving=!0,this.api.post("language/"+this.site,this.languages).then((function(e){t.languages=e.data,t.updateKey++,t.saving=!1}),(function(e){t.error=e,t.saving=!1}))},getLanguages:function(){var t=this;this.loading=!0,this.api.get("language/"+this.site).then((function(e){t.languages=e.data,t.languages.length>0?t.setTranslations(t.tab):t.updateKey++,t.loading=!1}),(function(e){t.error=e,t.loading=!1}))}}},ft=dt,vt=Object(ot["a"])(ft,H,L,!1,null,null,null);e["default"]=vt.exports},"608c":function(t,e,s){},"75fc":function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var i=s("a745"),n=s.n(i),a=s("db2a");function r(t){if(n()(t))return Object(a["a"])(t)}var o=s("67bb"),l=s.n(o),h=s("5d58"),c=s.n(h),u=s("774e"),d=s.n(u);function f(t){if("undefined"!==typeof l.a&&null!=t[c.a]||null!=t["@@iterator"])return d()(t)}var v=s("e630");function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t){return r(t)||f(t)||Object(v["a"])(t)||g()}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},aaf7:function(t,e,s){"use strict";var i=s("8336"),n=s("99d9"),a=s("169a"),r=s("490a"),o=s("2fa4"),l=function(){var t=this,e=t._self._c;return e("span",[e(i["a"],{staticClass:"mx-2",attrs:{color:"primary"},on:{click:t.openPreview}},[t._v("\n    Preview Changes\n  ")]),e(i["a"],{attrs:{color:"primary",text:""},on:{click:t.buildDialog}},[t._v("\n    Build\n  ")]),e(a["a"],{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("material-card",{attrs:{title:"Build site"},scopedSlots:t._u([{key:"actions",fn:function(){return[e(o["a"]),e(i["a"],{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")])]},proxy:!0}])},[e(n["b"],[t._v("\n        "+t._s(t.message)+"\n      ")]),t.tryAgain?e(i["a"],{attrs:{color:"primary",text:""},on:{click:t.buildDialog}},[t._v("\n        Try Again\n      ")]):t._e(),t.loading?e(r["a"],{attrs:{indeterminate:""}}):t._e()],1)],1),e("yes-no-dialog",{ref:"yesno",on:{yes:t.build}})],1)},h=[],c=(s("7f7f"),s("7514"),s("c1df")),u=s.n(c),d=s("283a"),f={components:{YesNoDialog:d["a"]},data:function(){return{loading:!1,message:"",building:!1,tryAgain:!1,dialog:!1,interval:null}},computed:{site:function(){return this.$store.state.site},sites:function(){return this.$store.state.sites}},methods:{moment:u.a,openPreview:function(){var t=this,e=this.sites.find((function(e){return e.siteId===t.site}));window.open("https://"+e.domain+"?preview=true","_blank")},getLiveDate:function(t,e){var s=this;fetch("https://"+t.domain+"/updates.txt").then((function(t){return t.text().then((function(t){var i=s.getDateFromUpdateFile(t);if(i){var n=s.moment(i);e(n)}}))}),(function(t){s.error=t}))},checkIfBuildFinished:function(t,e){var s=this,i=6e4;this.interval&&clearInterval(this.interval),this.interval=setTimeout((function(){s.message="Checking if new version is live, please wait...",s.getLiveDate(t,(function(i){console.log(i,e),i.isAfter(e)?(s.message="New version of ".concat(t.name," is now live!"),s.loading=!1):(s.message="New version not live yet, checking again in 1 minute. Please wait...",s.checkIfBuildFinished(t,e))}))}),i)},buildDialog:function(){var t=this;if(this.loading)this.dialog=!0;else{var e=this.sites.find((function(e){return e.siteId===t.site}));this.$refs.yesno.open("Do you want to update ".concat(e.name,"?"),"Are you sure you want to update ".concat(e.name,"?"))}},getDateFromUpdateFile:function(t){var e=t.lastIndexOf("("),s=t.lastIndexOf(")"),i=t.substring(e+1,s);return i},build:function(t){var e=this;t(),this.tryAgain=!1,this.loading=!0,this.dialog=!0;var s=this.sites.find((function(t){return t.siteId===e.site}));this.message="Preparing build for a new version of ".concat(s.name),this.api.get("sites/update/"+this.site).then((function(t){var i=e.getDateFromUpdateFile(t.data);if(i){var n=e.moment(i);e.message="Getting live version, please wait...",e.getLiveDate(s,(function(t){console.log(n,t),t.isSame(n)?(e.message="".concat(s.name," is ready to build, triggering build action..."),e.api.get("sites/action/"+e.site).then((function(i){console.log(i.data),e.message="A new version of ".concat(s.name," is being build! Please wait..."),e.checkIfBuildFinished(s,t)}),(function(t){e.error=t,e.message="Couldn't trigger build action, please wait and try again or contact BetaCore.",e.tryAgain=!0,e.loading=!1}))):(e.loading=!1,e.tryAgain=!0,e.message="Another version of ".concat(s.name," is already being build, please wait and try again in a few minutes or contact BetaCore."))}))}else e.message="Couldn't get latest version of ".concat(s.name,", please contact BetaCore."),e.loading=!1}),(function(t){e.error=t,e.message="Couldn't get latest version of ".concat(s.name,", please contact BetaCore."),e.loading=!1}))}}},v=f,g=s("2877"),p=Object(g["a"])(v,l,h,!1,null,null,null);e["a"]=p.exports},c79c:function(t,e,s){}}]);
//# sourceMappingURL=chunk-b97d6fbe.97d67d76.js.map
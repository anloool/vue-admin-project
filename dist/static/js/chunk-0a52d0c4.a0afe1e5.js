(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a52d0c4"],{"290c":function(t,e,a){},"749e":function(t,e,a){"use strict";var n=a("290c"),r=a.n(n);r.a},8714:function(t,e,a){},"8cbf":function(t,e,a){"use strict";var n=a("9ad1"),r=a.n(n);r.a},"9ad1":function(t,e,a){},bee2:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}a.d(e,"a",(function(){return r}))},cbd2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashbord"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("progress-box",{attrs:{txt:"Total Visitors",percentage:65}})],1),a("el-col",{attrs:{span:6}},[a("progress-box",{attrs:{txt:"Messages",percentage:67}})],1),a("el-col",{attrs:{span:6}},[a("progress-box",{attrs:{txt:"Total Order Placeed",percentage:80}})],1),a("el-col",{attrs:{span:6}},[a("progress-box",{attrs:{txt:"Total Profit",percentage:89}})],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("counter-box",{attrs:{endVal:t.vistors,txt:"Total Visitors",icon:"el-icon-user"}})],1),a("el-col",{attrs:{span:6}},[a("counter-box",{attrs:{endVal:t.message,txt:"Messages",icon:"el-icon-chat-line-square"}})],1),a("el-col",{attrs:{span:6}},[a("counter-box",{attrs:{endVal:t.order,txt:"Total Order Placeed",icon:"el-icon-goods"}})],1),a("el-col",{attrs:{span:6}},[a("counter-box",{attrs:{endVal:t.profit,txt:"Total Profit",icon:"el-icon-trophy"}})],1)],1)],1)},r=[],i=a("d4ec"),s=a("bee2"),o=a("99de"),l=a("7e84"),u=a("262e"),c=a("9ab4"),d=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progressbox"},[a("p",[t._v(t._s(t.txt))]),a("el-progress",{attrs:{type:"circle",percentage:t.percentage}})],1)},f=[],h=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["c"]);c["a"]([Object(d["b"])()],h.prototype,"txt",void 0),c["a"]([Object(d["b"])()],h.prototype,"percentage",void 0),h=c["a"]([Object(d["a"])({name:"progressbox"})],h);var m=h,b=m,V=(a("e890"),a("2877")),v=Object(V["a"])(b,p,f,!1,null,"87fa376e",null),x=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"counterbox"},[a("div",{staticClass:"stats"},[a("count-to",{staticClass:"color-count",attrs:{startVal:t.startVal,endVal:t.endVal,duration:t.duration}}),a("p",[t._v(t._s(t.txt))])],1),a("div",{staticClass:"icon-rounded"},[a("i",{class:t.icon})])])},g=[],w=a("ec1b"),F=a.n(w),O=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.startVal=0,t.duration=2e3,t}return Object(u["a"])(e,t),e}(d["c"]);c["a"]([Object(d["b"])()],O.prototype,"endVal",void 0),c["a"]([Object(d["b"])()],O.prototype,"txt",void 0),c["a"]([Object(d["b"])()],O.prototype,"icon",void 0),O=c["a"]([Object(d["a"])({name:"counterbox",components:{countTo:F.a}})],O);var j=O,A=j,_=(a("749e"),Object(V["a"])(A,y,g,!1,null,"76816e60",null)),q=_.exports,T=a("fd03"),D=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.vistors=0,t.message=0,t.order=0,t.profit=0,t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"getAllData",value:function(){var t=this;this.$http.all([Object(T["e"])()]).then(this.$http.spread((function(e){t.vistors=e.data.vistors,t.message=e.data.message,t.order=e.data.order,t.profit=e.data.profit})))}},{key:"created",value:function(){this.getAllData()}}]),e}(d["c"]);D=c["a"]([Object(d["a"])({name:"dashbord",components:{progressBox:x,counterBox:q}})],D);var S=D,N=S,k=(a("8cbf"),Object(V["a"])(N,n,r,!1,null,"9fecb7fe",null));e["default"]=k.exports},e890:function(t,e,a){"use strict";var n=a("8714"),r=a.n(n);r.a},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",r=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;r.test(a);)a=a.replace(r,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=r.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",r.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,r="webkit moz ms o".split(" "),i=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=i=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=i=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<r.length&&(!i||!s);l++)o=r[l],e.requestAnimationFrame=i=i||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];i&&s||(e.requestAnimationFrame=i=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),r=window.setTimeout((function(){t(e+a)}),a);return n=e+a,r},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=i,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,n){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var l=Object.create(o.computed||null);Object.keys(n).forEach((function(t){var e=n[t];l[t]=function(){return e}})),o.computed=l}return{esModule:r,exports:i,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))}}]);
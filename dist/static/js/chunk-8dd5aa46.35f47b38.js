(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dd5aa46"],{"55e5":function(e,t,n){},8287:function(e,t,n){"use strict";var o=n("55e5"),r=n.n(o);r.a},9647:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"summernote-form"},[n("el-card",{staticClass:"form-card"},[n("div",{staticClass:"header"},[e._v("富文本编辑器")]),n("div",{staticClass:"editor"},[n("quill-editor",{ref:"editor",attrs:{options:e.editorOption},on:{blur:function(t){return e.onEditorBlur(t)},focus:function(t){return e.onEditorFocus(t)},ready:function(t){return e.onEditorReady(t)},change:function(t){return e.onEditorChange(t)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),n("div",{staticClass:"code"},[n("code",[e._v(e._s(e.content))])]),n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)])],1)},r=[],i=n("d4ec"),c=n("bee2"),a=n("99de"),l=n("7e84"),u=n("262e"),s=n("9ab4"),d=n("60a3"),f=[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["image","video"]],b=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(a["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.content="<p>hello world</p>",e.editorOption={modules:{toolbar:{container:f}},placeholder:"请输入文本..."},e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){console.log(this.$refs["editor"]),this.$refs["editor"].quill.container.style.height="".concat(400,"px")}},{key:"onEditorBlur",value:function(e){console.log("editor blur!",e)}},{key:"onEditorFocus",value:function(e){console.log("editor focus!",e)}},{key:"onEditorReady",value:function(e){console.log("editor ready!",e)}},{key:"onEditorChange",value:function(e){console.log("editor change!",e)}},{key:"save",value:function(){console.log(this.content)}}]),t}(d["c"]);b=s["a"]([Object(d["a"])({name:"summernote-form"})],b);var v=b,p=v,h=(n("8287"),n("2877")),g=Object(h["a"])(p,o,r,!1,null,"e97ab37a",null);t["default"]=g.exports},bee2:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return r}))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11d0f244"],{"1a7c":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base-table"},[a("el-card",{staticClass:"table-card"},[a("div",{staticClass:"header"},[e._v("基础表格")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),a("el-card",{staticClass:"table-card"},[a("div",{staticClass:"header"},[e._v("固定列及表头")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData2,height:"300",border:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"id",label:"订单号",width:"200"}}),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"200"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"200"}}),a("el-table-column",{attrs:{prop:"province",label:"省份",width:"200"}}),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"200"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"200"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"}},[e._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)],1),a("el-card",{staticClass:"table-card"},[a("div",{staticClass:"header"},[e._v("带分页表格")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"num",label:"序号",width:"120"}}),a("el-table-column",{attrs:{prop:"id",label:"ID#"}}),a("el-table-column",{attrs:{prop:"name",label:"产品名称"}}),a("el-table-column",{attrs:{prop:"price",label:"价格"}}),a("el-table-column",{attrs:{prop:"quantity",label:"数量"}}),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("tagClass")(t.row.status)}},[e._v(e._s(e._f("statusText")(t.row.status)))])]}}])})],1),a("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:"sizes, prev, pager, next"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},r=[],n=a("d4ec"),s=a("bee2"),i=a("99de"),c=a("7e84"),d=a("262e"),o=a("9ab4"),u=a("60a3"),b=a("fd03"),p=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.currentPage=1,e.pageSize=5,e.total=0,e.pageSizes=[5,10,15,20],e.tableData=[],e.tableData1=[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],e.tableData2=[{id:"310000201601103528",date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{id:"310000201601103528",date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{id:"310000201601103528",date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{id:"310000201601103528",date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333},{id:"310000201601103528",date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{id:"310000201601103528",date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}],e}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"created",value:function(){this.getTableDataByPage(this.currentPage,this.pageSize)}},{key:"handleSizeChange",value:function(e){this.pageSize=e,this.getTableDataByPage(this.currentPage,this.pageSize)}},{key:"handleCurrentChange",value:function(e){this.currentPage=e,this.getTableDataByPage(this.currentPage,this.pageSize)}},{key:"getTableDataByPage",value:function(e,t){var a=this;Object(b["b"])({currentPage:e,pageSize:t}).then((function(e){var t=e.data;a.total=t.total,a.tableData=t.tableList})).catch((function(e){a.$message.error(e)}))}}]),t}(u["c"]);p=o["a"]([Object(u["a"])({name:"base-table",filters:{tagClass:function(e){if(void 0!==e)return 0===e?"warning":1===e?"":"info"},statusText:function(e){if(void 0!==e)return 0===e?"待激活":1===e?"已完成":"已取消"}}})],p);var h=p,g=h,f=(a("7580"),a("2877")),m=Object(f["a"])(g,l,r,!1,null,"10cabae8",null);t["default"]=m.exports},"71ca":function(e,t,a){},7580:function(e,t,a){"use strict";var l=a("71ca"),r=a.n(l);r.a},bee2:function(e,t,a){"use strict";function l(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function r(e,t,a){return t&&l(e.prototype,t),a&&l(e,a),e}a.d(t,"a",(function(){return r}))}}]);
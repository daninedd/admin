(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3ac9"],{"02d5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增安装包")])],1):e._e(),e.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"标识",prop:"user_agent","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"版本号",prop:"ver",width:"75"}}),a("el-table-column",{attrs:{label:"协议地址",prop:"url","min-width":"90","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"访问次数",prop:"count",width:"80"}}),a("el-table-column",{attrs:{label:"创建日期",prop:"create_time",align:"center",width:"160",sortable:"custom"}}),a("el-table-column",{attrs:{label:"最后更新",prop:"update_time",align:"center",width:"160",sortable:"custom"}}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑")]):e._e(),e.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDelete(t.$index)}}},[e._v("删除")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入应用安装包名称",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"标识",prop:"user_agent"}},[a("el-input",{attrs:{placeholder:"请输入系统标识",clearable:!0},model:{value:e.form.user_agent,callback:function(t){e.$set(e.form,"user_agent",t)},expression:"form.user_agent"}})],1),a("el-form-item",{attrs:{label:"版本号",prop:"ver"}},[a("el-input",{attrs:{placeholder:"请输入应用安装包版本号",clearable:!0},model:{value:e.form.ver,callback:function(t){e.$set(e.form,"ver",t)},expression:"form.ver"}})],1),a("el-form-item",{attrs:{label:"协议地址",prop:"url"}},[a("el-input",{attrs:{placeholder:"请输入应用安装包协议地址",type:"textarea",rows:3},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1)],1)},l=[],i=(a("a4d3"),a("4de4"),a("c975"),a("a434"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),o=a("c069");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑安装包",create:"新增安装包"},form:{name:void 0,user_agent:void 0,ver:void 0,url:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:32,message:"长度不能大于 32 个字符",trigger:"blur"}],user_agent:[{required:!0,message:"标识不能为空",trigger:"blur"},{max:64,message:"长度不能大于 64 个字符",trigger:"blur"}],ver:[{required:!0,message:"版本号不能为空",trigger:"blur"},{max:16,message:"长度不能大于 16 个字符",trigger:"blur"}],url:[{required:!0,message:"协议地址不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$has("/system/aided/app_install/add"),this.auth.set=this.$has("/system/aided/app_install/set"),this.auth.del=this.$has("/system/aided/app_install/del")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.app_install_id)})):t.push(this.currentTableData[e].app_install_id),t},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,a=e.prop,r=e.order,l={order_type:void 0,order_field:void 0};t&&r&&(l.order_type="ascending"===r?"asc":"desc",l.order_field=a),this.$emit("sort",l)},handleCreate:function(){var e=this;this.form={name:void 0,user_agent:void 0,ver:void 0,url:void 0},this.$nextTick((function(){e.$refs.form.clearValidate()})),this.dialogStatus="create",this.dialogLoading=!1,this.dialogFormVisible=!0},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(o["a"])(s({},e.form)).then((function(t){e.currentTableData.unshift(s({},t.data,{count:0})),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(o["b"])(a).then((function(){for(var e=t.currentTableData.length-1;e>=0;e--)-1!==a.indexOf(t.currentTableData[e].app_install_id)&&t.currentTableData.splice(e,1);t.currentTableData.length<=0&&t.$emit("refresh",!0),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleUpdate:function(e){var t=this;this.currentIndex=e,this.form=s({},this.currentTableData[e]),this.$nextTick((function(){t.$refs.form.clearValidate()})),this.dialogStatus="update",this.dialogLoading=!1,this.dialogFormVisible=!0},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(o["d"])(s({},e.form)).then((function(t){e.$set(e.currentTableData,e.currentIndex,s({},e.currentTableData[e.currentIndex],{},t.data)),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,l,!1,null,null,null);t["default"]=m.exports}}]);
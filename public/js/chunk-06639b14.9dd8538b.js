(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06639b14"],{2692:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"},nativeOn:{submit:function(t){t.preventDefault()}}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:function(e){return t.handleCreate("create")}}},[t._v("新增顶层分类")])],1):t._e(),a("el-form-item",[a("el-button-group",[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",disabled:t.loading},on:{click:function(e){return t.checkedNodes(!0)}}},[t._v("展开")]),a("el-button",{attrs:{icon:"el-icon-remove-outline",disabled:t.loading},on:{click:function(e){return t.checkedNodes(!1)}}},[t._v("收起")])],1)],1),a("el-form-item",{attrs:{label:"过滤"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{disabled:t.loading,placeholder:"输入关键词进行过滤","prefix-icon":"el-icon-search",clearable:!0},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}})],1),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{span:10}},[t.hackReset?a("el-tree",{ref:"tree",staticClass:"tree-scroll",attrs:{"node-key":"article_cat_id",data:t.treeData,props:t.treeProps,"filter-node-method":t.filterNode,"highlight-current":!0,"default-expand-all":t.isExpandAll,"default-expanded-keys":t.expanded,"allow-drag":t.allowDrag,draggable:!0},on:{"node-click":t.handleNodeClick,"node-drop":t.handleDrop},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.node,i=e.data;return a("span",{staticClass:"custom-tree-node action"},[a("span",{staticClass:"brother-showing"},[t.auth.move?a("i",{staticClass:"el-icon-sort move-tree cs-mr-5"}):t._e(),i.children?a("i",{class:"el-icon-"+(r.expanded?"folder-opened":"folder")}):a("i",{staticClass:"el-icon-document"}),t._v(" "+t._s(r.label)+" ")]),a("span",{staticClass:"active"},[t.auth.add?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return e.stopPropagation(),t.handleAppend(i.article_cat_id)}}},[t._v(" 新增 ")]):t._e(),t.auth.del?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return e.stopPropagation(),t.remove(i.article_cat_id)}}},[t._v(" 删除 ")]):t._e()],1)])}}],null,!1,4180199536)}):t._e()],1),a("el-col",{attrs:{span:14}},[t.auth.add||t.auth.set?a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.textMap[t.formStatus]))]),"create"===t.formStatus&&t.auth.add?a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",loading:t.formLoading},on:{click:t.create}},[t._v("确定")]):"update"===t.formStatus&&t.auth.set?a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",loading:t.formLoading},on:{click:t.update}},[t._v("修改")]):t._e()],1),a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"上级分类",prop:"parent_id"}},[a("el-cascader",{staticStyle:{width:"100%"},attrs:{placeholder:"不选择表示顶层分类 试试搜索：首页",options:t.treeData,props:t.cascaderProps,filterable:"",clearable:""},model:{value:t.form.parent_id,callback:function(e){t.$set(t.form,"parent_id",e)},expression:"form.parent_id"}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称",prop:"cat_name"}},[a("el-input",{attrs:{placeholder:"请输入文章分类名称",clearable:!0},model:{value:t.form.cat_name,callback:function(e){t.$set(t.form,"cat_name",e)},expression:"form.cat_name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型",prop:"cat_type"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:-128,max:127,"controls-position":"right"},model:{value:t.form.cat_type,callback:function(e){t.$set(t.form,"cat_type",e)},expression:"form.cat_type"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"导航",prop:"is_navi"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.is_navi,callback:function(e){t.$set(t.form,"is_navi",e)},expression:"form.is_navi"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:0,max:255,"controls-position":"right"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1)],1)],1),a("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[a("el-input",{attrs:{placeholder:"可输入文章分类关键词",clearable:!0},model:{value:t.form.keywords,callback:function(e){t.$set(t.form,"keywords",e)},expression:"form.keywords"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"可输入文章分类描述",type:"textarea",rows:3},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1):t._e()],1)],1)],1)},i=[],n=(a("a4d3"),a("99af"),a("4de4"),a("c975"),a("4e82"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("25f0"),a("159b"),a("ade3")),o=a("57ab");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={props:{treeData:{default:function(){return[]}},loading:{default:!1}},data:function(){return{filterText:"",hackReset:!0,isExpandAll:!1,expanded:[],treeProps:{label:"cat_name",children:"children"},cascaderProps:{value:"article_cat_id",label:"cat_name",children:"children",checkStrictly:!0,emitPath:!1},formStatus:"create",formLoading:!1,textMap:{create:"新增分类",update:"编辑分类"},auth:{add:!1,del:!1,set:!1,move:!1},form:{parent_id:void 0,cat_name:void 0,cat_type:0,keywords:void 0,description:void 0,sort:50,is_navi:"1"},rules:{cat_name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],cat_type:[{type:"number",message:"必须为数字值",trigger:"blur"}],keywords:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},watch:{filterText:function(t){this.$refs.tree.filter(t)}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$has("/system/article/cat/add"),this.auth.set=this.$has("/system/article/cat/set"),this.auth.del=this.$has("/system/article/cat/del"),this.auth.move=this.$has("/system/article/cat/move")},filterNode:function(t,e){return!t||-1!==e.cat_name.indexOf(t)},checkedNodes:function(t){var e=this;this.filterText="",this.expanded=[],this.hackReset=!1,this.$nextTick((function(){e.isExpandAll=t,e.hackReset=!0}))},resetForm:function(){this.form={parent_id:0,cat_name:"",cat_type:0,keywords:"",description:"",sort:50,is_navi:"1"}},resetElements:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"create";this.$nextTick((function(){t.$refs.form.clearValidate()})),this.formStatus=e,this.formLoading=!1},handleCreate:function(t){this.resetForm(),this.resetElements(t),this.$refs.tree.getCurrentKey()&&this.$refs.tree.setCurrentKey(null)},handleAppend:function(t){this.handleCreate("create"),this.$refs.tree.setCurrentKey(t),this.form.parent_id=t},handleNodeClick:function(t){(this.auth.add||this.auth.set)&&(this.resetForm(),this.resetElements("update"),this.form=l({},t,{is_navi:t.is_navi.toString()}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.formLoading=!0,Object(o["a"])(l({},t.form)).then((function(e){t.isExpandAll||(t.expanded=[e.data.parent_id||e.data.article_cat_id]),t.$emit("refresh"),t.$message.success("操作成功")})).catch((function(){t.formLoading=!1})))}))},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.formLoading=!0,Object(o["e"])(l({},t.form)).then((function(e){t.isExpandAll||(t.expanded=[e.data.parent_id||e.data.article_cat_id]),t.$emit("refresh"),t.$message.success("操作成功")})).catch((function(){t.formLoading=!1})))}))},remove:function(t){var e=this,a="确定要执行该操作吗?",r=this.$refs.tree.getNode(t);(r.data.children_total>0||r.data.aricle_total>0)&&(a="该分类下有 ".concat(r.data.children_total," 个子分类，").concat(r.data.aricle_total," 篇关联文章，是否删除?")),this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(o["b"])([t]).then((function(){e.$refs.tree.remove(r),e.handleCreate("create"),e.$message.success("操作成功")}))})).catch((function(){}))},handleDrop:function(t,e,a,r){var i=this,n={article_cat_id:t.data.article_cat_id,parent_id:t.data.parent_id},s=[];"inner"===a?n.parent_id=e.key:(n.parent_id=e.data.parent_id,e.parent.childNodes.forEach((function(t,e){s.push(t.key),t.data.sort=e+1}))),Object(o["e"])(l({},n)).then((function(e){t.data.parent_id=e.data.parent_id})).catch((function(){i.$emit("refresh")})),s.length>0&&Object(o["d"])(s).catch((function(){i.$emit("refresh")}))},allowDrag:function(){return this.auth.move}}},d=c,u=(a("a6ca"),a("2877")),p=Object(u["a"])(d,r,i,!1,null,"30ca64c2",null);e["default"]=p.exports},7169:function(t,e,a){},a6ca:function(t,e,a){"use strict";var r=a("7169"),i=a.n(r);i.a}}]);
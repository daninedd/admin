(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf31c77"],{"71f2":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i}));var a=e("b775");function o(t){return Object(a["a"])({url:"/v1/notice_tpl",method:"post",params:{method:"get.notice.tpl.list"},data:{code:t}})}function c(t){return Object(a["a"])({url:"/v1/notice_tpl",method:"post",params:{method:"set.notice.tpl.item"},data:t})}function i(t,n){return Object(a["a"])({url:"/v1/notice_tpl",method:"post",params:{method:"set.notice.tpl.status"},data:{notice_tpl_id:t,status:n}})}},c814:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("cs-container",{attrs:{"is-back-to-top":!0}},[e("page-main",{attrs:{"table-data":t.table,loading:t.loading,"tpl-code":t.tplCode},on:{"update:tplCode":function(n){t.tplCode=n},"update:tpl-code":function(n){t.tplCode=n}}})],1)},o=[],c=(e("d3b7"),e("71f2")),i={name:"setting-notice-template",components:{PageMain:function(){return e.e("chunk-2b07b60a").then(e.bind(null,"68fd"))}},data:function(){return{table:[],loading:!0,tplCode:"sms"}},watch:{tplCode:{handler:function(t){var n=this;this.loading=!0,Object(c["a"])(t).then((function(t){n.table=t.data||[]})).finally((function(){n.loading=!1}))},immediate:!0}}},l=i,u=e("2877"),d=Object(u["a"])(l,a,o,!1,null,null,null);n["default"]=d.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-684ceccf"],{"0872":function(t,e,n){"use strict";var a=n("4f99"),o=n.n(a);o.a},"2af7":function(t,e,n){"use strict";function a(t,e,n,a){return new(n||(n=Promise))((function(o,r){function i(t){try{s(a.next(t))}catch(t){r(t)}}function l(t){try{s(a.throw(t))}catch(t){r(t)}}function s(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(i,l)}s((a=a.apply(t,e||[])).next())}))}function o(t,e){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}}n.d(e,"a",(function(){return m}));var r=["text/plain","text/html"],i=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),l=!0,s=function(){function t(){this.m={}}return t.prototype.setData=function(t,e){l&&-1===r.indexOf(t)&&i("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[t]=e},t.prototype.getData=function(t){return this.m[t]},t.prototype.forEach=function(t){for(var e in this.m)t(this.m[e],e)},t}(),c=function(t){},u=!0,d=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),f="text/plain";function p(t){return a(this,void 0,void 0,(function(){var e;return o(this,(function(n){if(u&&!t.getData(f)&&d("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),x()){if(function(t){var e=t.getData(f);if(void 0!==e)return window.clipboardData.setData("Text",e);throw new Error("No `text/plain` value was specified.")}(t))return[2];throw new Error("Copying failed, possibly because the user rejected it.")}if(y(t))return c("regular execCopy worked"),[2];if(navigator.userAgent.indexOf("Edge")>-1)return c('UA "Edge" => assuming success'),[2];if(b(document.body,t))return c("copyUsingTempSelection worked"),[2];if(function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=b(e,t);return document.body.removeChild(e),n}(t))return c("copyUsingTempElem worked"),[2];if(void 0!==(e=t.getData(f))&&function(t){c("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(c("Using shadow DOM."),n=e.attachShadow({mode:"open"}));var a=document.createElement("span");a.innerText=t,n.appendChild(a),document.body.appendChild(e),h(a);var o=document.execCommand("copy");return g(),document.body.removeChild(e),o}(e))return c("copyTextUsingDOM worked"),[2];throw new Error("Copy command failed.")}))}))}function m(t){return a(this,void 0,void 0,(function(){return o(this,(function(e){return navigator.clipboard&&navigator.clipboard.writeText?(c("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(t)]):[2,p(w(t))]}))}))}var v=function(){this.success=!1};function y(t){var e=new v,n=function(t,e,n){c("listener called"),t.success=!0,e.forEach((function(e,a){var o=n.clipboardData;o.setData(a,e),a===f&&o.getData(a)!==e&&(c("setting text/plain failed"),t.success=!1)})),n.preventDefault()}.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function b(t,e){h(t);var n=y(e);return g(),n}function h(t){var e=document.getSelection();if(e){var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}function g(){var t=document.getSelection();t&&t.removeAllRanges()}function w(t){var e=new s;return e.setData(f,t),e}function x(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}},"4f99":function(t,e,n){},c9d8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"form-box cs-m",attrs:{"label-width":"150px","label-position":"left"}},[n("el-form-item",{staticClass:"action",attrs:{label:t.version.name}},[n("span",[t._v(t._s(t.version.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.version.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.admin.name}},[n("span",[t._v(t._s(t.admin.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.admin.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.delivery.name}},[n("span",[t._v(t._s(t.delivery.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.delivery.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.qrcode.name}},[n("span",[t._v(t._s(t.qrcode.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.qrcode.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.alipay.notify.name}},[n("span",[t._v(t._s(t.alipay.notify.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.alipay.notify.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.alipay.return.name}},[n("span",[t._v(t._s(t.alipay.return.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.alipay.return.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.weixin.notify.name}},[n("span",[t._v(t._s(t.weixin.notify.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.weixin.notify.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.weixin.return.name}},[n("span",[t._v(t._s(t.weixin.return.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.weixin.return.value)}}},[t._v("复制")])],1),n("el-form-item",{attrs:{size:"small"}},[n("el-button",{on:{click:function(e){return t.getInfoData("操作成功")}}},[t._v("刷新")])],1)],1)],1)},o=[],r=(n("d3b7"),n("159b"),n("2400")),i=n("2af7"),l={name:"setting-setting-info",data:function(){return{version:{name:"框架内核版本号",value:""},admin:{name:"后台管理版本号",value:"1.4.0"},delivery:{name:"快递鸟推送回调URL",value:""},qrcode:{name:"二维码调用URL",value:""},alipay:{notify:{name:"支付宝异步URL",value:""},return:{name:"支付宝同步URL",value:""}},weixin:{notify:{name:"微信异步URL",value:""},return:{name:"微信同步URL",value:""}},loading:!1}},mounted:function(){this.getInfoData()},methods:{getInfoData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=[{version:"v1",controller:"index",method:"get.system.version"},{version:"v1",controller:"delivery_dist",method:"get.delivery.dist.callback"},{version:"v1",controller:"qrcode",method:"get.qrcode.callurl"},{version:"v1",controller:"payment",method:"get.payment.notify",to_payment:2},{version:"v1",controller:"payment",method:"get.payment.return",to_payment:2},{version:"v1",controller:"payment",method:"get.payment.notify",to_payment:3},{version:"v1",controller:"payment",method:"get.payment.return",to_payment:3}];this.loading=!0,Object(r["a"])(n).then((function(n){n.data.forEach((function(e){if(200===e.status)switch(e.method){case"get.system.version":t.version.value=e.data.version;break;case"get.delivery.dist.callback":t.delivery.value=e.data.callback_url;break;case"get.qrcode.callurl":t.qrcode.value=e.data.call_url;break;case"get.payment.notify":2===e.data.to_payment&&(t.alipay.notify.value=e.data.notify_url),3===e.data.to_payment&&(t.weixin.notify.value=e.data.notify_url);break;case"get.payment.return":2===e.data.to_payment&&(t.alipay.return.value=e.data.return_url),3===e.data.to_payment&&(t.weixin.return.value=e.data.return_url);break}})),e&&t.$message.success(e)})).finally((function(){t.loading=!1}))},copyData:function(t){var e=this;i["a"](t).then((function(){e.$message.success("已复制到剪贴板")})).catch((function(t){e.$message.error(t)}))}}},s=l,c=(n("0872"),n("2877")),u=Object(c["a"])(s,a,o,!1,null,"6d5f80d7",null);e["default"]=u.exports}}]);
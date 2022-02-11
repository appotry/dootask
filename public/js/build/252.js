"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[252],{30445:(t,e,i)=>{i.d(e,{Z:()=>u});var s=i(20629);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const l={name:"ImgUpload",props:{value:{},num:{},width:{},height:{},type:{},http:{type:Boolean,default:!1},otherParams:{type:Object,default:function(){return{}}},uploadIng:{type:Number,default:0}},data:function(){return{actionUrl:$A.apiUrl("system/imgupload"),params:{width:this.width,height:this.height},multiple:this.num>1,visible:!1,browseVisible:!1,isLoading:!1,browseList:[],browseListNext:[],imgVisible:"",defaultList:this.initItems(this.value),uploadList:[],maxNum:Math.min(Math.max($A.runNum(this.num),1),99),httpValue:"",httpType:"",maxSize:2048}},mounted:function(){var t=this;this.uploadList=this.$refs.upload.fileList,this.$emit("input",this.uploadList);var e=$A(this.$refs.browselistbox);e.scroll((function(){var i=e[0].scrollHeight;if(e[0].scrollTop+e.height()>=i&&t.browseListNext.length>0){var s=t.browseListNext;t.browseListNext=[],t.browsePictureFor(s)}}))},watch:{value:function(t){"string"!=typeof t?t!==this.$refs.upload.fileList&&(this.$refs.upload.fileList=this.initItems(t),this.uploadList=this.$refs.upload.fileList):this.$emit("input",this.initItems(t))},browseVisible:function(){this.httpType="",this.httpValue=""}},computed:r(r({},(0,s.rn)(["userToken"])),{},{uploadHeaders:function(){return{fd:$A.getStorageString("userWsFd"),token:this.userToken}},uploadParams:function(){return Object.keys(this.otherParams).length>0?Object.assign(this.params,this.otherParams):this.params}}),methods:{handleCallback:function(t){"callback"===this.type&&(!0===t?(this.$emit("on-callback",this.uploadList),this.$refs.upload.fileList=[],this.uploadList=this.$refs.upload.fileList):"object"===a(t)&&this.$emit("on-callback",[t])),this.browseVisible=!1},initItems:function(t){"string"==typeof t&&(t=[{url:t}]);var e=[];return $A.each(t,(function(t,i){"string"==typeof i&&(i={url:i}),i.url&&(i.active=!0,i.status="finished",void 0===i.path&&(i.path=i.url),void 0===i.thumb&&(i.thumb=i.url),e.push(i))})),e},handleView:function(t){this.visible=!0,this.imgVisible=t.url},handleRemove:function(t){var e=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(e.indexOf(t),1),this.$emit("input",this.$refs.upload.fileList)},handleProgress:function(t,e){void 0===e._uploadIng&&(e._uploadIng=!0,this.$emit("update:uploadIng",this.uploadIng+1))},handleSuccess:function(t,e){this.$emit("update:uploadIng",this.uploadIng-1),1===t.ret?(e.url=t.data.url,e.path=t.data.path,e.thumb=t.data.thumb,this.handleCallback(e)):($A.noticeWarning({title:this.$L("上传失败"),desc:this.$L("文件 "+e.name+" 上传失败 "+t.msg)}),this.$refs.upload.fileList.pop()),this.$emit("input",this.$refs.upload.fileList)},handleError:function(){this.$emit("update:uploadIng",this.uploadIng-1)},handleFormatError:function(t){$A.noticeWarning({title:this.$L("文件格式不正确"),desc:this.$L("文件 "+t.name+" 格式不正确，请上传 jpg、jpeg、gif、png 格式的图片。")})},handleMaxSize:function(t){$A.noticeWarning({title:this.$L("超出文件大小限制"),desc:this.$L("文件 "+t.name+" 太大，不能超过："+$A.bytesToSize(1024*this.maxSize))})},handleBeforeUpload:function(){var t=this.uploadList.length<this.maxNum;return t||1!=this.uploadList.length||(this.handleRemove(this.uploadList[0]),t=this.uploadList.length<this.maxNum),t||$A.noticeWarning(this.$L("最多只能上传 "+this.maxNum+" 张图片。")),this.params={width:this.width,height:this.height},t},handleClick:function(){this.handleBeforeUpload()&&this.$refs.upload.handleClick()},handleManual:function(t){this.handleBeforeUpload()&&this.$refs.upload.upload(t)},browsePicture:function(t){var e=this;this.browseVisible=!0,this.browseList=[],this.browseListNext=[],this.isLoading=!0,this.$store.dispatch("call",{url:"system/imgview",data:{path:t||""}}).then((function(t){var i=t.data;e.isLoading=!1;for(var s=i.dirs,a=0;a<s.length;a++)e.browseList.push(s[a]);e.browsePictureFor(i.files)})).catch((function(t){var i=t.msg;e.isLoading=!1,e.browseVisible=!1,$A.noticeWarning(i)}))},browsePictureFor:function(t){for(var e=0;e<t.length;e++){for(var i=0;i<this.uploadList.length;i++)if(this.uploadList[i].url===t[e].url||this.uploadList[i].url===t[e].path){t[e].active=!0;break}e<100?this.browseList.push(t[e]):this.browseListNext.push(t[e])}},browseItem:function(t){if("dir"===t.type)this.browsePicture(t.path);else if("file"===t.type){if(t.active){var e=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(e.indexOf(t),1),t.active=!1}else{if(1===this.maxNum){for(var i=0;i<this.browseList.length;i++)this.browseList[i].active=!1;this.$refs.upload.fileList=[],this.uploadList=this.$refs.upload.fileList}if(!(this.uploadList.length<this.maxNum))return void $A.noticeWarning(this.$L("最多只能选择 "+this.maxNum+" 张图片。"));t.active=!0,t.status="finished",this.$refs.upload.fileList.push(t),this.uploadList=this.$refs.upload.fileList}this.$emit("input",this.$refs.upload.fileList)}},__thumb:function(t){return $A.strExists(t,"?",!1)?t+"&__thumb=true":t+"?__thumb=true"},httpEnter:function(){this.$emit("input",this.initItems(this.httpValue)),this.browseVisible=!1}}};const u=(0,i(51900).Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"common-img-update"},[t._l(t.uploadList,(function(e){return"callback"!==t.type?i("div",{staticClass:"imgcomp-upload-list"},["finished"===e.status?[i("div",{staticClass:"imgcomp-upload-img",style:{"background-image":"url("+t.__thumb(e.thumb)+")"}}),t._v(" "),i("div",{staticClass:"imgcomp-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){return t.handleView(e)}}}),t._v(" "),i("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(i){return t.handleRemove(e)}}})],1)]:[e.showProgress?i("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()]],2):t._e()})),t._v(" "),i("div",{staticClass:"add-box",class:{"callback-add-box":"callback"===t.type}},[i("div",{staticClass:"add-box-icon"},[i("Icon",{attrs:{type:"md-add",size:"32"}})],1),t._v(" "),i("div",{staticClass:"add-box-upload"},[i("div",{staticClass:"add-box-item",on:{click:t.browsePicture}},[i("span",[t._v(t._s(t.$L("浏览"))),"callback"===t.type?i("em",[t._v(t._s(t.$L("图片")))]):t._e()])]),t._v(" "),i("div",{staticClass:"add-box-item"},[i("Upload",{ref:"upload",attrs:{name:"image",accept:"image/*",action:t.actionUrl,headers:t.uploadHeaders,data:t.uploadParams,"show-upload-list":!1,"max-size":t.maxSize,format:["jpg","jpeg","gif","png"],"default-file-list":t.defaultList,"on-progress":t.handleProgress,"on-success":t.handleSuccess,"on-error":t.handleError,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:t.multiple}},[i("span",[t._v(t._s(t.$L("上传"))),"callback"===t.type?i("em",[t._v(t._s(t.$L("图片")))]):t._e()])])],1)])]),t._v(" "),i("Modal",{staticClass:"img-upload-modal",attrs:{title:t.$L("浏览图片空间的图片"),width:"710"},model:{value:t.browseVisible,callback:function(e){t.browseVisible=e},expression:"browseVisible"}},[t.isLoading?i("div",{staticClass:"browse-load"},[t._v(t._s(t.$L("加载中...")))]):t._e(),t._v(" "),i("div",{ref:"browselistbox",staticClass:"browse-list",class:"input"===t.httpType?"browse-list-disabled":""},t._l(t.browseList,(function(e){return i("div",{staticClass:"browse-item",on:{click:function(i){return t.browseItem(e)}}},[e.active?i("Icon",{staticClass:"browse-icon",attrs:{type:"ios-checkmark-circle"}}):t._e(),t._v(" "),i("div",{staticClass:"browse-img",style:{"background-image":"url("+e.thumb+")"}}),t._v(" "),i("div",{staticClass:"browse-title"},[t._v(t._s(e.title))])],1)})),0),t._v(" "),i("div",{staticClass:"img-upload-foot",attrs:{slot:"footer"},slot:"footer"},["callback"!==t.type&&t.http&&""===t.httpType?i("div",{staticClass:"img-upload-foot-input",on:{click:function(e){t.httpType="input"}}},[i("Icon",{attrs:{type:"ios-image",size:"22"}}),t._v(" "),i("div",{staticClass:"img-upload-foot-httptitle"},[t._v(t._s(t.$L("自定义图片地址")))])],1):t._e(),t._v(" "),"callback"!==t.type&&t.http&&"input"===t.httpType?i("div",{staticClass:"img-upload-foot-input"},[i("Input",{attrs:{placeholder:t.$L("以 http:// 或 https:// 开头"),search:"","enter-button":t.$L("确定")},on:{"on-search":t.httpEnter},model:{value:t.httpValue,callback:function(e){t.httpValue=e},expression:"httpValue"}},[i("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"prepend"},on:{click:function(e){t.httpType=""}},slot:"prepend"},[t._v(t._s(t.$L("自定义地址"))+": ")])])],1):t._e(),t._v(" "),""===t.httpType?i("Button",{on:{click:function(e){t.browseVisible=!1}}},[t._v(t._s(t.$L("关闭")))]):t._e(),t._v(" "),""===t.httpType?i("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCallback(!0)}}},[t._v(t._s(t.$L("完成")))]):t._e()],1)]),t._v(" "),i("Modal",{staticClass:"img-upload-modal",attrs:{title:t.$L("查看图片"),draggable:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("div",{staticStyle:{"max-height":"480px",overflow:"auto"}},[i("a",{attrs:{href:t.imgVisible,target:"_blank"}},[t.visible?i("img",{staticStyle:{"max-width":"100%","max-height":"900px",display:"block",margin:"0 auto"},attrs:{src:t.imgVisible}}):t._e()])])])],2)}),[],!1,null,null,null).exports},32252:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(30445),a=i(20629);function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const n={components:{ImgUpload:s.Z},data:function(){return{loadIng:0,formData:{userimg:"",nickname:"",profession:""},ruleData:{}}},mounted:function(){this.initData()},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,a.rn)(["userInfo"])),watch:{userInfo:function(){this.initData()}},methods:{initLanguage:function(){this.ruleData={nickname:[{required:!0,message:this.$L("请输入昵称！"),trigger:"change"},{type:"string",min:2,message:this.$L("昵称长度至少2位！"),trigger:"change"}]}},initData:function(){$A.strExists(this.userInfo.userimg,"/avatar/default_")||this.$set(this.formData,"userimg",this.userInfo.userimg),this.$set(this.formData,"nickname",this.userInfo.nickname),this.$set(this.formData,"profession",this.userInfo.profession),this.formData_bak=$A.cloneJSON(this.formData)},submitForm:function(){var t=this;this.$refs.formData.validate((function(e){if(e){var i=$A.cloneJSON(t.formData);0==$A.count(i.userimg)&&(i.userimg=""),t.loadIng++,t.$store.dispatch("call",{url:"users/editdata",data:i}).then((function(){$A.messageSuccess("修改成功"),t.loadIng--,t.$store.dispatch("getUserInfo").catch((function(){}))})).catch((function(e){var i=e.msg;$A.modalError(i),t.loadIng--}))}}))},resetForm:function(){this.formData=$A.cloneJSON(this.formData_bak)}}};const l=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting-item submit"},[i("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleData,"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[i("FormItem",{attrs:{label:t.$L("头像"),prop:"userimg"}},[i("ImgUpload",{attrs:{num:1},model:{value:t.formData.userimg,callback:function(e){t.$set(t.formData,"userimg",e)},expression:"formData.userimg"}}),t._v(" "),i("span",{staticClass:"form-tip"},[t._v(t._s(t.$L("建议尺寸：200x200")))])],1),t._v(" "),i("FormItem",{attrs:{label:t.$L("邮箱")}},[i("Input",{attrs:{disabled:""},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}})],1),t._v(" "),i("FormItem",{attrs:{label:t.$L("昵称"),prop:"nickname"}},[i("Input",{attrs:{maxlength:20},model:{value:t.formData.nickname,callback:function(e){t.$set(t.formData,"nickname",e)},expression:"formData.nickname"}})],1),t._v(" "),i("FormItem",{attrs:{label:t.$L("职位/职称"),prop:"profession"}},[i("Input",{attrs:{maxlength:20},model:{value:t.formData.profession,callback:function(e){t.$set(t.formData,"profession",e)},expression:"formData.profession"}})],1)],1),t._v(" "),i("div",{staticClass:"setting-footer"},[i("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),i("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports}}]);
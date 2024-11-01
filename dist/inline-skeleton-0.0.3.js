/*! For license information please see inline-skeleton-0.0.3.js.LICENSE.txt */
"use strict";(self.webpackChunkwp_ajaxify_comments=self.webpackChunkwp_ajaxify_comments||[]).push([[904],{6714:(e,n,a)=>{a.d(n,{Z:()=>f});var t=a(9196),o=a.n(t),l=a(5697),r=a.n(l),i=a(5736),c=a(5609),s=a(7884),m=a(2560),u=a(8719),d=function(e){var n=e.alignment,a=e.label,t=e.alignLeftLabel,l=e.alignCenterLabel,r=e.alignRightLabel,i=e.leftOn,d=e.centerOn,f=e.rightOn;return o().createElement("div",{className:"ajaxify-alignment-component-base"},o().createElement(c.BaseControl,{id:"ajaxify-alignment-component-base",label:a},o().createElement(c.ButtonGroup,null,o().createElement(o().Fragment,null,i&&o().createElement(c.Button,{isPressed:"left"===n,isSecondary:!0,icon:o().createElement(s.Z,null),label:t,onClick:function(){e.onClick("left")}}),d&&o().createElement(c.Button,{isPressed:"center"===n,isSecondary:!0,icon:o().createElement(m.Z,null),label:l,onClick:function(){e.onClick("center")}}),f&&o().createElement(c.Button,{isPressed:"right"===n,isSecondary:!0,icon:o().createElement(u.Z,null),label:r,onClick:function(){e.onClick("right")}})))))};d.defaultProps={alignment:"left",label:(0,i.__)("Change Alignment","wp-ajaxify-comments"),alignLeftLabel:(0,i._x)("Align Left","Align items left","wp-ajaxify-comments"),alignCenterLabel:(0,i._x)("Align Center","Align items center/middle","wp-ajaxify-comments"),alignRightLabel:(0,i._x)("Align Right","Align items right","wp-ajaxify-comments"),leftOn:!0,centerOn:!0,rightOn:!0},d.propTypes={alignment:r().string,label:r().string,alignLeftLabel:r().string,alignCenterLabel:r().string,alignRightLabel:r().string,leftOn:r().bool,centerOn:r().bool,rightOn:r().bool};const f=d},2289:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(9196),o=a.n(t),l=a(4184),r=a.n(l),i=a(1685),c=a.n(i),s=a(1306),m=a.n(s),u=a(5736),d=a(5697),f=a.n(d),p=a(5609);function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,o,l,r,i=[],c=!0,s=!1;try{if(l=(a=a.call(e)).next,0===n){if(Object(a)!==a)return;c=!1}else for(;!(c=(t=l.call(a)).done)&&(i.push(t.value),i.length!==n);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=a.return&&(r=a.return(),Object(r)!==r))return}finally{if(s)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return y(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}var h=function(e){var n=g((0,t.useState)(e.slug),2),a=n[0],l=(n[1],g((0,t.useState)(!1),2)),i=l[0],s=l[1],d=g((0,t.useState)(e.value),2),f=d[0],y=d[1],h=g((0,t.useState)(e.opacity),2),k=h[0],b=h[1],v=e.defaultColor,x=e.defaultColors,E=e.value,_=e.onChange,j=e.onOpacityChange,C=e.label,w=e.alpha,L=void 0!==w&&w,S=e.slug,N=e.hideLabelFromVision,I=void 0!==N&&N;(0,t.useEffect)((function(){y(E)}),[E]);var O,z,A=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(0===e.indexOf("var("))return e;if(0===e.indexOf("rgba")){var a=m()(e).hex;return c()(a,n)}return 0===e.indexOf("rgb")?c()(m()(e).hex,n):L?c()(e,n):e},F=o().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 488.47 488.47"},o().createElement("path",{d:"M244.235 0S61.058 174.454 61.058 314.016c0 96.347 82.011 174.454 183.177 174.454s183.177-78.107 183.177-174.454C427.412 174.454 244.235 0 244.235 0zm0 91.588c46.976 52.953 97.174 123.655 114.946 183.177H129.292c17.771-59.522 67.968-130.223 114.943-183.177z"})),B=function(){i&&s(!1)};return o().createElement(p.BaseControl,{className:"ajaxify-block-component-color-picker-wrapper"},!!C&&!I&&o().createElement("h3",{className:"ajaxify-block-color-component-label"},o().createElement("span",null,C)),o().createElement("div",{className:"ajaxify-block-component-color-picker"},o().createElement("div",{className:"ajaxify-block-color-picker-area ajaxify-block-component-color-picker-palette"},!i&&o().createElement(o().Fragment,null,o().createElement("div",{className:r()("components-color-palette__item-wrapper components-circular-option-picker__option-wrapper ajaxify-block-color-picker-area ajaxify-block-component-color-picker-palette",E?"":"components-color-palette__custom-color")},o().createElement(p.Tooltip,{text:(0,u.__)("Choose Color","ajaxify-block")},o().createElement("button",{type:"button","aria-expanded":i,className:"components-button components-circular-option-picker__option is-pressed",onClick:function(){s(!0)},"aria-label":(0,u.__)("Custom color picker","ajaxify-block"),style:{background:A(f,k)}},o().createElement("span",{className:"components-color-palette__custom-color-gradient"}))))),i&&o().createElement("div",{className:r()("components-color-palette__item-wrapper components-circular-option-picker__option-wrapper ajaxify-block-color-picker-area ajaxify-block-component-color-picker-palette",E?"":"components-color-palette__custom-color")},o().createElement(p.Tooltip,{text:(0,u.__)("Choose Color","ajaxify-block")},o().createElement("button",{type:"button","aria-expanded":i,className:"components-button components-circular-option-picker__option is-pressed",onClick:B,"aria-label":(0,u.__)("Custom color picker","ajaxify-block"),style:{background:A(f,k)}},o().createElement("span",{className:"components-color-palette__custom-color-gradient"})))),i&&o().createElement(p.Popover,{className:"ajaxify-block-component-color-picker",onClose:B,noArrow:!1,placement:"left-end",offset:20},o().createElement(p.BaseControl,{key:a},o().createElement(p.ColorPicker,{key:a,color:A(f,k),onChangeComplete:function(e){var n=A(e.hex,k);y(n),_(S,n,e.hex)},disableAlpha:!0,defaultValue:v})),L&&o().createElement("div",{className:"ajaxify-block-component-color-opacity"},o().createElement(p.Tooltip,{text:(0,u.__)("Opacity","ajaxify-block")},F),o().createElement(p.RangeControl,{value:k,onChange:function(e){var n=A(f,e);b(e),y(n),_(S,n,f),j(e)},min:0,max:1,step:.01,initialPosition:1})),o().createElement(p.BaseControl,{className:"ajaxify-block-component-color-picker-palette"},o().createElement(p.ColorPalette,{colors:(O=[],z=[],x.forEach((function(e,n){O.includes(e.color)||(O.push(e.color),z.push(e))})),z),value:f,onChange:function(e){var n=A(e);_(S,n,e),y(n)},disableCustomColors:!0,clearable:!1})),o().createElement("div",{className:"components-color-clear-color"},o().createElement(p.Button,{onClick:function(){_(S,v,v),y(v)}},(0,u.__)("Clear Color","ajaxify-block")))))))};h.propTypes={label:f().string,onChange:f().func.isRequired,onOpacityChange:f().func,value:f().string,defaultColor:f().string,alpha:f().bool,hideLabelFromVision:f().bool,defaultColors:f().array.isRequired},h.defaultProps={label:(0,u.__)("Color","ajaxify-block"),value:"",defaultColor:"transparent",alpha:!1,hideLabelFromVision:!1,onOpacityChange:function(){}};const k=h},1962:(e,n,a)=>{a.r(n),a.d(n,{default:()=>y});var t=a(9196),o=a.n(t),l=a(5609),r=a(3510);const i=(0,a(2919).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var c=a(5736),s=a(7536),m=a(8252),u=(a(4184),a(6714),a(2289)),d=a(7202);function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}var p=wpacAdminLazyLoad.palette,g=function(e){var n,a,l=e.rows,r=e.showHeading,i=e.heading,c=e.getValues,s=(n=(0,t.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,o,l,r,i=[],c=!0,s=!1;try{if(l=(a=a.call(e)).next,0===n){if(Object(a)!==a)return;c=!1}else for(;!(c=(t=l.call(a)).done)&&(i.push(t.value),i.length!==n);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=a.return&&(r=a.return(),Object(r)!==r))return}finally{if(s)throw o}}return i}}(n,a)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,n):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=(s[0],s[1],c()),u=m.lazyLoadInlineSkeletonBackgroundColor,d=m.lazyLoadInlineSkeletonHighlightColor,p=m.lazyLoadInlineSkeletonHeadingColor,g=m.lazyLoadInlineSkeletonHeadingFontSize,y=m.lazyLoadInlineSkeletonHeadingLineHeight,h="\n\t\t.ajaxify-loading-skeleton-wrapper {\n\t\t\t--ajaxify-skeleton-loader-background-color: ".concat(u,";\n\t\t\t--ajaxify-skeleton-loader-highlight-color: ").concat(d,";\n\t\t\t--ajaxify-skeleton-loader-heading-color: ").concat(p,";\n\t\t\t--ajaxify-skeleton-loader-heading-font-size: ").concat(g,"px;\n\t\t\t--ajaxify-skeleton-loader-heading-line-height: ").concat(y,";\n\t\t\t--ajaxify-skeleton-gradient: linear-gradient(90deg, var(--ajaxify-skeleton-loader-background-color) 25%, var(--ajaxify-skeleton-loader-highlight-color) 50%, var(--ajaxify-skeleton-loader-background-color) 75%);\n\t\t}\n\t");return o().createElement(o().Fragment,null,o().createElement("style",null,h),o().createElement("div",{className:"ajaxify-loading-skeleton-wrapper"},r&&o().createElement("h2",{className:"ajaxify-skeleton-heading"},i),function(){for(var e,n=[],a=0;a<l;a++)n.push((e=a,o().createElement("div",{className:"ajaxify-loading-skeleton",key:e},o().createElement("div",{className:"ajaxify-skeleton-comment-header"},o().createElement("div",{className:"ajaxify-skeleton-avatar"}),o().createElement("div",{className:"ajaxify-skeleton-comment-meta"})),o().createElement("div",{className:"ajaxify-skeleton-comment-body"}))));return n}()))};const y=function(e){var n=e.control,a=e.errors,t=(e.setValue,e.getValues),f=e.clearErrors;return o().createElement(o().Fragment,null,o().createElement(o().Fragment,null,o().createElement("tr",{className:"ajaxify-admin__loading-spinner-row"},o().createElement("th",{scope:"row"},(0,c.__)("Loading Spinner","wp-ajaxify-comments")),o().createElement("td",null,o().createElement("div",{className:"ajaxify-admin__control-row"},o().createElement(s.Qr,{name:"lazyLoadInlineSkeletonLoadingLabelEnabled",control:n,render:function(e){var n=e.field,a=n.onChange,t=n.value;return o().createElement(o().Fragment,null,o().createElement(l.ToggleControl,{label:(0,c.__)("Show Loading Skeleton Heading","wp-ajaxify-comments"),help:(0,c.__)("Show a heading above the loading skeleton.","wp-ajaxify-comments"),checked:t,onChange:a}))}})),t("lazyLoadInlineSkeletonLoadingLabelEnabled")&&o().createElement(o().Fragment,null,o().createElement("div",{className:"ajaxify-admin__control-row"},o().createElement(s.Qr,{name:"lazyLoadInlineSkeletonLoadingLabel",control:n,rules:{required:!0},render:function(e){var n=e.field,t=n.onChange,i=n.value;return o().createElement(o().Fragment,null,o().createElement(l.TextControl,{label:(0,c.__)("Loading Skeleton Heading","wp-ajaxify-comments"),help:(0,c.__)("The heading above the loading skeleton.","wp-ajaxify-comments"),value:i,onChange:function(e){f("lazyLoadInlineSkeletonLoadingLabel"),t(e)}}),a.lazyLoadInlineSkeletonLoadingLabel&&o().createElement(d.Z,{message:(0,c.__)("This field is required.","wp-ajaxify-comments"),status:"error",politeness:"assertive",inline:!1,icon:function(){return o().createElement(r.Z,null)}}))}}))),o().createElement("div",{className:"ajaxify-admin__control-row"},o().createElement(s.Qr,{name:"lazyLoadInlineSkeletonItemsShow",control:n,render:function(e){var n=e.field,a=n.onChange,t=n.value;return o().createElement(o().Fragment,null,o().createElement(l.RangeControl,{label:(0,c.__)("Number of Skeletons to Show","wp-ajaxify-comments"),value:t,onChange:a,min:1,max:10,step:1,help:(0,c.__)("Set how many loading instances that should show.","wp-ajaxify-comments"),color:"var(--ajaxify-admin--color-main)",trackColor:"var(--ajaxify-admin--color-main)",resetFallbackValue:1}))}})),o().createElement("div",{className:"ajaxify-admin__control-row"},o().createElement(s.Qr,{name:"lazyLoadInlineSkeletonBackgroundColor",control:n,render:function(e){var n=e.field,a=n.onChange,t=n.value;return o().createElement(o().Fragment,null,o().createElement(u.Z,{value:t,key:"skeleton-background-color",onChange:function(e,n){a(n)},label:(0,c.__)("Skeleton Background Color","wp-ajaxify-comments"),defaultColors:p,defaultColor:"#EEEEEE",slug:"skeleton-background-color"}))}})),o().createElement("div",{className:"ajaxify-admin__control-row"},o().createElement(s.Qr,{name:"lazyLoadInlineSkeletonHighlightColor",control:n,render:function(e){var n=e.field,a=n.onChange,t=n.value;return o().createElement(o().Fragment,null,o().createElement(u.Z,{value:t,key:"skeleton-highlight-color",onChange:function(e,n){a(n)},label:(0,c.__)("Skeleton Highlight Color","wp-ajaxify-comments"),defaultColors:p,defaultColor:"#dedede",slug:"skeleton-highlight-color"}))}})),o().createElement("div",{className:"ajaxify-admin__control-row"},o().createElement(l.Button,{label:(0,c.__)("Preview Loading Skeleton","wp-ajaxify-comments"),className:"ajaxify-button ajaxify__btn-secondary has-text has-icon",icon:o().createElement(i,null),"data-src":"#ajaxify-skeleton-preview","data-fancybox":!0,onClick:function(e){e.preventDefault(),m.KR.show([{src:"#ajaxify-skeleton-preview",type:"clone",autoStart:!0}])}},(0,c.__)("Preview","wp-ajaxify-comments"))),o().createElement("div",{id:"ajaxify-skeleton-preview",style:{display:"none",width:"80%",margin:"0 auto"}},o().createElement(g,{rows:t("lazyLoadInlineSkeletonItemsShow"),showHeading:t("lazyLoadInlineSkeletonLoadingLabelEnabled"),heading:t("lazyLoadInlineSkeletonLoadingLabel"),getValues:t}))))))}}}]);
"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:h,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,i.U)(),[N,O]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==N&&(P(t),O(a),null!=h&&T(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:C},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},8087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={title:"\u4e3b\u52a8\u5931\u6548\u54cd\u5e94\u7f13\u5b58",sidebar_position:20},i=void 0,c={unversionedId:"response-data-management/invalidate-response-cache",id:"response-data-management/invalidate-response-cache",title:"\u4e3b\u52a8\u5931\u6548\u54cd\u5e94\u7f13\u5b58",description:"\u6709\u8fd9\u6837\u4e00\u4e2a\u573a\u666f\uff0c\u5f53\u7528\u6237\u70b9\u5f00todo\u5217\u8868\u4e2d\u7684\u67d0\u4e00\u9879\uff0c\u8fdb\u5165todo\u8be6\u60c5\u9875\u5e76\u5bf9\u5b83\u6267\u884c\u4e86\u7f16\u8f91\uff0c\u6b64\u65f6\u6211\u4eec\u5e0c\u671b\u4e0a\u4e00\u9875\u4e2d\u7684todo\u5217\u8868\u6570\u636e\u4e5f\u66f4\u65b0\u4e3a\u7f16\u8f91\u540e\u7684\u5185\u5bb9\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u662f\u901a\u8fc7\u4e8b\u4ef6\u6765\u89e6\u53d1\u4e0a\u4e00\u9875\u7684\u5185\u5bb9\u66f4\u65b0\uff0c\u8fd9\u6837\u589e\u52a0\u4e86\u7ef4\u62a4\u6210\u672c\u3002\u800calova\u63d0\u4f9b\u4e863\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5f88\u4f18\u96c5\u5730\u8fbe\u5230\u8fd9\u4e2a\u76ee\u7684\uff1a",source:"@site/docs/05-response-data-management/02-invalidate-response-cache.md",sourceDirName:"05-response-data-management",slug:"/response-data-management/invalidate-response-cache",permalink:"/response-data-management/invalidate-response-cache",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/05-response-data-management/02-invalidate-response-cache.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u4e3b\u52a8\u5931\u6548\u54cd\u5e94\u7f13\u5b58",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",permalink:"/response-data-management/transform-response-data"},next:{title:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u6570\u636e",permalink:"/response-data-management/update-response-data-across-modules"}},u={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6709\u8fd9\u6837\u4e00\u4e2a\u573a\u666f\uff0c\u5f53\u7528\u6237\u70b9\u5f00todo\u5217\u8868\u4e2d\u7684\u67d0\u4e00\u9879\uff0c\u8fdb\u5165todo\u8be6\u60c5\u9875\u5e76\u5bf9\u5b83\u6267\u884c\u4e86\u7f16\u8f91\uff0c\u6b64\u65f6\u6211\u4eec\u5e0c\u671b\u4e0a\u4e00\u9875\u4e2d\u7684todo\u5217\u8868\u6570\u636e\u4e5f\u66f4\u65b0\u4e3a\u7f16\u8f91\u540e\u7684\u5185\u5bb9\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u662f\u901a\u8fc7\u4e8b\u4ef6\u6765\u89e6\u53d1\u4e0a\u4e00\u9875\u7684\u5185\u5bb9\u66f4\u65b0\uff0c\u8fd9\u6837\u589e\u52a0\u4e86\u7ef4\u62a4\u6210\u672c\u3002\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"\u63d0\u4f9b\u4e863\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5f88\u4f18\u96c5\u5730\u8fbe\u5230\u8fd9\u4e2a\u76ee\u7684\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"useFetcher"),"\u7acb\u5373\u91cd\u65b0\u8bf7\u6c42\u6700\u65b0\u7684\u6570\u636e\uff0c\u5b83\u5728\u4e0a\u9762\u7684\u7ae0\u8282\u4e2d\u5df2\u7ecf\u8bb2\u8fc7\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u624b\u52a8\u66f4\u65b0\u7f13\u5b58\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5c06\u5728\u4e0b\u4e00\u4e2a\u5c0f\u8282\u8be6\u7ec6\u8bb2\u89e3\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u8ba9\u8fd9\u4e2a\u54cd\u5e94\u7f13\u5b58\u5931\u6548\uff0c\u5f53\u518d\u6b21\u8bf7\u6c42\u65f6\u5c06\u4f1a\u56e0\u7f13\u5b58\u5931\u6548\u800c\u91cd\u65b0\u8bf7\u6c42\u6570\u636e\u3002\u8fd9\u4e5f\u662f\u672c\u5c0f\u8282\u6240\u8981\u8bb2\u7684\u5185\u5bb9\u3002")),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c1d\u8bd5\u4ee5\u7f13\u5b58\u5931\u6548\u7684\u65b9\u5f0f\u5b9e\u73b0\u672c\u9700\u6c42\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <button @click=\"send\">\u53d1\u9001\u8bf7\u6c42</button>\n</template>\n\n<script setup>\nimport { invalidateCache } from 'alova';\n\nconst getTodoList = currentPage => {\n  return alovaInstance.Get('/tood/list', {\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst {\n  // ...\n  send,\n  onSuccess\n} = useRequest(createTodoPoster, { immediate: false });\n\n// highlight-start\n// \u63d0\u4ea4\u6210\u529f\u540e\uff0c\u56fa\u5b9a\u4f7f\u7b2c\u4e00\u9875\u7684todo\u6570\u636e\u7f13\u5b58\u5931\u6548\nonSuccess(() => {\n  invalidateCache(getTodoList(1));\n});\n// highlight-end\n<\/script>\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { invalidateCache } from 'alova';\n\nconst getTodoList = currentPage => {\n  return alovaInstance.Get('/tood/list', {\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst App = () => {\n  const {\n    // ...\n    send,\n    onSuccess\n  } = useRequest(createTodoPoster, { immediate: false });\n\n  // highlight-start\n  // \u63d0\u4ea4\u6210\u529f\u540e\uff0c\u56fa\u5b9a\u4f7f\u7b2c\u4e00\u9875\u7684todo\u6570\u636e\u7f13\u5b58\u5931\u6548\n  onSuccess(() => {\n    invalidateCache(getTodoList(1));\n  });\n  // highlight-end\n\n  return <button onClick={send}>\u53d1\u9001\u8bf7\u6c42</button>\n}\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nimport { invalidateCache } from 'alova';\n\nconst getTodoList = currentPage => {\n  return alovaInstance.Get('/tood/list', {\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst {\n  // ...\n  send,\n  onSuccess\n} = useRequest(createTodoPoster, { immediate: false });\n\n// highlight-start\n// \u63d0\u4ea4\u6210\u529f\u540e\uff0c\u56fa\u5b9a\u4f7f\u7b2c\u4e00\u9875\u7684todo\u6570\u636e\u7f13\u5b58\u5931\u6548\nonSuccess(() => {\n  invalidateCache(getTodoList(1));\n});\n// highlight-end\n<\/script>\n\n<button on:click={send}>\u53d1\u9001\u8bf7\u6c42</button>\n")))),(0,r.kt)("p",null,"\u5b83\u7684\u529f\u80fd\u8fd8\u8fdc\u4e0d\u6b62\u4e8e\u6b64\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u5339\u914d\u5668\u6765\u5b9e\u73b0\u4efb\u610f\u591a\u4e2a\uff0c\u751a\u81f3\u5168\u90e8\u7f13\u5b58\u7684\u5931\u6548\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const getTodoList = currentPage => {\n  return alovaInstance.Get('/tood/list', {\n    // \u6ce8\u610f\uff1a\u8bbe\u7f6e\u4e86name\u5c5e\u6027\uff0c\u7528\u4e8e\u5728\u65e0\u6cd5\u76f4\u63a5\u6307\u5b9aMethod\u5b9e\u4f8b\u65f6\uff0c\u8fc7\u6ee4\u51fa\u9700\u8981\u7684Method\u5b9e\u4f8b\n    name: 'todoList',\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst {\n  // ...\n  send,\n  onSuccess\n} = useRequest(createTodoPoster, { immediate: false });\n// \u63d0\u4ea4\u6210\u529f\u540e\uff0c\u56fa\u5b9a\u4f7f\u7b2c\u4e00\u9875\u7684todo\u6570\u636e\u7f13\u5b58\u5931\u6548\nonSuccess(() => {\n\n  // highlight-start\n  // \u5931\u6548\u540d\u79f0\u4e3atodoList\u7684\u6240\u6709\u54cd\u5e94\u7f13\u5b58\n  invalidateCache({\n    name: 'todoList',\n    filter: (method, index, ary) => {\n      // \u540d\u4e3atodoList\u7684\u524d5\u4e2aMethod\u5b9e\u4f8b\u7684\u54cd\u5e94\u7f13\u5b58\u5c06\u4f1a\u5931\u6548\n      return index < 5;\n    },\n  });\n  // highlight-end\n\n  // highlight-start\n  // \u4e0d\u4f20\u4efb\u4f55\u53c2\u6570\u65f6\uff0c\u5931\u6548\u6240\u6709\u54cd\u5e94\u7f13\u5b58\n  invalidateCache();\n  // highlight-end\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u66f4\u591a",(0,r.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u5339\u914d\u5668\u7684\u4f7f\u7528\u65b9\u6cd5\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"../next-step/method-instance-matcher"},"Method\u5b9e\u4f8b\u5339\u914d\u5668"))))}m.isMDXComponent=!0}}]);
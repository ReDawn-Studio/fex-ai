!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"FEX-AI","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.c8c1c9d1.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.28909155.async.js",65],["498.a5ac5f02.async.js",498],["536.e5a159b2.async.js",536],["nm__dumi-theme-antd-style__dist__layouts__DocLayout__index.eec80432.chunk.css",860],["nm__dumi-theme-antd-style__dist__layouts__DocLayout__index.b927b249.async.js",860],["dumi__tmp-production__dumi__theme__ContextWrapper.077faf59.async.js",923],["docs__index.md.d1393453.async.js",935],["docs__guide.md.ff545607.async.js",937],["nm__dumi-theme-antd-style__dist__layouts__DemoLayout__index.25c5ba59.async.js",946]],"r":{"/*":[2,3,4,5,6,7,8],"/":[9,4,5,6,7,8],"/guide":[10,4,5,6,7,8],"/~demos/:id":[0,1,5,11,8]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();
"use strict";(self.webpackChunkFEX_AI=self.webpackChunkFEX_AI||[]).push([[9],{95993:function(M,u,e){e.r(u);var o=e(85956),n=e(67294),D=e(52289),L=e(34661),_=function(){var p=(0,o.useParams)(),a=p.id,t=(0,o.useDemo)(a),O=(0,D.m)({id:a,component:t.component,renderOpts:t.renderOpts}),P=O.canvasRef,m=t||{},v=m.component,d=m.renderOpts,r=(0,o.useLiveDemo)(a),s=r.node,l=r.setSource,i=r.error,E=r.loading,R=s||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:P}):v&&(0,n.createElement)(v));return(0,n.useEffect)(function(){var c=function(f){f.data.type==="dumi.liveDemo.setSource"&&l(f.data.value)};return window.addEventListener("message",c),function(){return window.removeEventListener("message",c)}},[l]),(0,n.useEffect)(function(){!E&&(i||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:i}})},[i,s,E]),R};u.default=_}}]);
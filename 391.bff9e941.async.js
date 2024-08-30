"use strict";(self.webpackChunkFEX_AI=self.webpackChunkFEX_AI||[]).push([[391],{87603:function(ve,z,l){l.d(z,{Z:function(){return N}});var F=l(87462),P=l(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},k=i,w=l(42135),H=function(L,Z){return P.createElement(w.Z,(0,F.Z)({},L,{ref:Z,icon:k}))},E=P.forwardRef(H),N=E},94391:function(ve,z,l){l.d(z,{Z:function(){return He}});var F=l(4942),P=l(87603),i=l(67294),k=l(93967),w=l.n(k),H=l(98423),E=l(98787),N=l(69760),X=l(96159),L=l(36728),Z=l(53124),Q=l(11568),he=l(10274),fe=l(14747),Ce=l(83262),R=l(83559);const ye=e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:r,calc:a}=e,s=a(o).sub(n).equal(),m=a(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},(0,fe.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,Q.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:m,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},A=e=>{const{lineWidth:t,fontSizeIcon:n,calc:o}=e,r=e.fontSizeSM;return(0,Ce.IX)(e,{tagFontSize:r,tagLineHeight:(0,Q.bf)(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(n).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},D=e=>({defaultBg:new he.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var U=(0,R.I$)("Tag",e=>{const t=A(e);return ye(t)},D),be=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},xe=i.forwardRef((e,t)=>{const{prefixCls:n,style:o,className:r,checked:a,onChange:s,onClick:m}=e,c=be(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:g,tag:f}=i.useContext(Z.E_),C=x=>{s==null||s(!a),m==null||m(x)},v=g("tag",n),[b,u,p]=U(v),S=w()(v,`${v}-checkable`,{[`${v}-checkable-checked`]:a},f==null?void 0:f.className,r,u,p);return b(i.createElement("span",Object.assign({},c,{ref:t,style:Object.assign(Object.assign({},o),f==null?void 0:f.style),className:S,onClick:C})))}),Oe=l(98719);const je=e=>(0,Oe.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:r,lightColor:a,darkColor:s}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:a,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var Se=(0,R.bk)(["Tag","preset"],e=>{const t=A(e);return je(t)},D);function $e(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const B=(e,t,n)=>{const o=$e(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var Te=(0,R.bk)(["Tag","status"],e=>{const t=A(e);return[B(t,"success","Success"),B(t,"processing","Info"),B(t,"error","Error"),B(t,"warning","Warning")]},D),we=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const K=i.forwardRef((e,t)=>{const{prefixCls:n,className:o,rootClassName:r,style:a,children:s,icon:m,color:c,onClose:g,bordered:f=!0,visible:C}=e,v=we(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:b,direction:u,tag:p}=i.useContext(Z.E_),[S,x]=i.useState(!0),O=(0,H.Z)(v,["closeIcon","closable"]);i.useEffect(()=>{C!==void 0&&x(C)},[C]);const M=(0,E.o2)(c),$=(0,E.yT)(c),W=M||$,Le=Object.assign(Object.assign({backgroundColor:c&&!W?c:void 0},p==null?void 0:p.style),a),y=b("tag",n),[Re,Ae,De]=U(y),Me=w()(y,p==null?void 0:p.className,{[`${y}-${c}`]:W,[`${y}-has-color`]:c&&!W,[`${y}-hidden`]:!S,[`${y}-rtl`]:u==="rtl",[`${y}-borderless`]:!f},o,r,Ae,De),ge=T=>{T.stopPropagation(),g==null||g(T),!T.defaultPrevented&&x(!1)},[,We]=(0,N.Z)((0,N.w)(e),(0,N.w)(p),{closable:!1,closeIconRender:T=>{const Qe=i.createElement("span",{className:`${y}-close-icon`,onClick:ge},T);return(0,X.wm)(T,Qe,j=>({onClick:me=>{var V;(V=j==null?void 0:j.onClick)===null||V===void 0||V.call(j,me),ge(me)},className:w()(j==null?void 0:j.className,`${y}-close-icon`)}))}}),Ve=typeof v.onClick=="function"||s&&s.type==="a",ue=m||null,Xe=ue?i.createElement(i.Fragment,null,ue,s&&i.createElement("span",null,s)):s,pe=i.createElement("span",Object.assign({},O,{ref:t,className:Me,style:Le}),Xe,We,M&&i.createElement(Se,{key:"preset",prefixCls:y}),$&&i.createElement(Te,{key:"status",prefixCls:y}));return Re(Ve?i.createElement(L.Z,{component:"Tag"},pe):pe)});K.CheckableTag=xe;var Ne=K,G=l(85956),J=l(1322),Ie=l(17542),h=l(30168),Y=l(8001),I=l(52062),q,_,ee,ne,te,oe,re,le,ae,se,Pe=(0,Y.kc)(function(e,t){var n=e.token,o=e.prefixCls,r=e.responsive,a=e.css,s=e.stylish,m=e.isDarkMode,c=e.cx,g=t.rowNum,f=t.hasLink,C="".concat(o,"-features"),v="".concat(C,"-cover"),b="".concat(C,"-description"),u="".concat(C,"-title"),p="".concat(C,"-img"),S=20,x=function($){return a(q||(q=(0,h.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),$,$,$*(22/24))},O=a(_||(_=(0,h.Z)([`
      transition: all `," ",`;
    `])),n.motionDurationSlow,n.motionEaseInOutCirc);return{cell:a(ee||(ee=(0,h.Z)([`
        overflow: hidden;
      `]))),container:a(ne||(ne=(0,h.Z)([`
        `,`;

        z-index: 1;
        padding: 24px;
        border-radius: 24px;

        background: linear-gradient(
          135deg,
          `,`,
          `,`
        );

        position: relative;

        &:hover {
          scale: 1.03;

          background: linear-gradient(
            135deg,
            `,`,
            `,`
          );

          box-shadow: inset 0 0 0 1px `,", ",`;

          .`,` {
            height: `,`px;
            width: 100%;
            padding: 0;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),O,n.colorFillContent,n.colorFillQuaternary,(0,I.$n)(.5,n.colorFillContent),(0,I.$n)(.5,n.colorFillQuaternary),n.colorBorder,n.boxShadowSecondary,v,S*g,p,x(100),b,u,f?14:20),title:c(u,O,a(te||(te=(0,h.Z)([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),n.lineHeightHeading3,n.colorText)),desc:c(b,O,a(oe||(oe=(0,h.Z)([`
          color: `,`;

          pointer-events: none;
          quotient {
            color: `,`;
            display: block;
            margin: 12px 0;
            padding-left: 12px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              left: 0;
              display: block;
              border-radius: 2px;
              width: 4px;
              height: 100%;
              background: `,`;
            }
          }
        `])),n.colorTextSecondary,n.colorTextDescription,m?n.colorPrimary:n.colorPrimaryBgHover)),imgContainer:c(v,O,a(re||(re=(0,h.Z)([`
          background: `,`;
          border-radius: 8px;
          opacity: 0.8;

          `,`;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(135deg, `,", ",`);
          }

          &[image-style='light'] {
            background: `,`;
          }

          &[image-style='soon'] {
            opacity: 0.5;
            background: linear-gradient(
              135deg,
              `,`,
              `,` 50%,
              `,`
            );
          }
        `])),n.colorFillContent,x(24),n.gradientColor1,n.gradientColor2,n.colorBgContainer,(0,I.m4)(n.gradientColor2,.3),(0,I.m4)(n.gradientColor2,.3),(0,I.m4)(n.gradientColor1,.3))),img:c(p,O,a(le||(le=(0,h.Z)([`
          `,`;
          color: `,`;
        `])),x(20),n.colorWhite)),link:a(ae||(ae=(0,h.Z)([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),O,s.resetLinkColor,n.colorTextDescription,n.colorPrimaryHover),blur:a(se||(se=(0,h.Z)([`
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        `,`;
        scale: 2;
        opacity: `,`;
        `,` {
          display: none;
        }
      `])),s.heroBlurBall,m?.05:.08,r.mobile)}}),d=l(85893),Ee=function(t){var n=t.image,o=t.className,r=t.title,a=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return n.startsWith("http")||a.test(n)?(0,d.jsx)("img",{className:o,src:n,alt:r}):(0,d.jsx)(J.Z,{className:o,children:n})},Ze=function(t){var n=t.imageType,o=t.row,r=t.column,a=t.hero,s=t.description,m=t.image,c=t.title,g=t.link,f=t.imageStyle,C=t.openExternal,v=o||7,b=Pe({rowNum:v,hasLink:!!g}),u=b.styles,p=b.theme;return(0,d.jsxs)("div",{className:u.container,style:{gridRow:"span ".concat(v),gridColumn:"span ".concat(r||1),cursor:g?"pointer":"default"},onClick:function(){g&&(C?window.open(g):G.history.push(g))},children:[(0,d.jsxs)("div",{className:u.cell,children:[m&&(0,d.jsx)(J.Z,{"image-style":n,className:u.imgContainer,style:f,children:(0,d.jsx)(Ee,{className:u.img,image:m,title:c})}),c&&(0,d.jsxs)(Ie.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:u.title,children:[c,n==="soon"?(0,d.jsx)(Ne,{color:p.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),s&&(0,d.jsx)("p",{dangerouslySetInnerHTML:{__html:s},className:u.desc}),g&&(0,d.jsx)("div",{className:u.link,children:(0,d.jsxs)(G.Link,{to:g,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,d.jsx)(P.Z,{})]})})]}),a&&(0,d.jsx)("div",{className:u.blur})]})},Be=Ze,ie,ce,ze=(0,Y.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.responsive,r=e.css,a=e.cx,s="".concat(n,"-features");return{container:a(s,r(ie||(ie=(0,h.Z)([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),t.contentMaxWidth,o({mobile:r(ce||(ce=(0,h.Z)([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}});function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?de(Object(n),!0).forEach(function(o){(0,F.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var ke=function(t){var n=t.items,o=t.style,r=ze(),a=r.styles;return n!=null&&n.length?(0,d.jsx)("div",{className:a.container,style:o,children:n.map(function(s){return(0,d.jsx)(Be,Fe({},s),s.title)})}):null},He=ke}}]);

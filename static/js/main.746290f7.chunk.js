(this.webpackJsonppixels=this.webpackJsonppixels||[]).push([[0],{190:function(e,t,c){},192:function(e,t,c){},195:function(e,t,c){},196:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){},199:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(44),i=c.n(s),o=c(6),a=c(77),r=(c(190),c(3)),j=function(e){var t=e.selectedColor,c=Object(n.useState)("#fff"),s=Object(o.a)(c,2),i=s[0],a=s[1],j=Object(n.useState)(i),b=Object(o.a)(j,2),u=b[0],l=b[1],d=Object(n.useState)(!0),f=Object(o.a)(d,2),O=f[0],h=f[1];return Object(r.jsx)("div",{className:"pixel",style:{backgroundColor:i},onClick:function(){a(t),h(!1)},onMouseEnter:function(){l(i),a(t)},onMouseLeave:function(){O&&a(u),h(!0)}})},b=(c(192),function(e){for(var t=e.width,c=e.selectedColor,n=[],s=0;s<t;s++)n.push(Object(r.jsx)(j,{selectedColor:c},s));return Object(r.jsx)("div",{className:"row",children:n})}),u=c(76),l=(c(195),function(e){for(var t=e.width,c=e.height,s=e.selectedColor,i=Object(n.useRef)(),o=[],a=0;a<c;a++)o.push(Object(r.jsx)(b,{width:t,selectedColor:s},a));return Object(r.jsxs)("div",{id:"drawingPanel",children:[Object(r.jsx)("div",{id:"pixels",ref:i,children:o}),Object(r.jsx)("button",{className:"button",onClick:function(){return Object(u.exportComponentAsPNG)(i)},children:"Export as PNG"})]})}),d=(c(196),["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#795548","#607d8b","#ffffff"]),f=function(){var e=Object(n.useState)(16),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(16),j=Object(o.a)(i,2),b=j[0],u=j[1],f=Object(n.useState)(!1),O=Object(o.a)(f,2),h=O[0],x=O[1],p=Object(n.useState)(!0),v=Object(o.a)(p,2),m=v[0],C=v[1],g=Object(n.useState)("start drawing"),w=Object(o.a)(g,2),N=w[0],S=w[1],k=Object(n.useState)("#f44336"),E=Object(o.a)(k,2),P=E[0],y=E[1];return Object(r.jsxs)("div",{id:"editor",children:[Object(r.jsx)("h1",{children:"Pixel Editor"}),m&&Object(r.jsx)("h2",{children:"Enter Panel Dimensions"}),m&&Object(r.jsxs)("div",{id:"options",children:[Object(r.jsxs)("div",{className:"option",children:[Object(r.jsx)("input",{type:"number",className:"panelInput",value:c,onChange:function(e){s(e.target.value)}}),Object(r.jsx)("span",{children:"Width"})]}),Object(r.jsxs)("div",{className:"option",children:[Object(r.jsx)("input",{type:"number",className:"panelInput",value:b,onChange:function(e){u(e.target.value)}}),Object(r.jsx)("span",{children:"Height"})]})]}),Object(r.jsx)("button",{className:"button",onClick:function(){x(!h),C(!m),S("start drawing"===N?"reset":"start drawing")},children:N}),h&&Object(r.jsx)(a.a,{color:P,onChangeComplete:function(e){y(e.hex)},colors:d}),h&&Object(r.jsx)(l,{width:c,height:b,selectedColor:P})]})},O=(c(197),function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(f,{})})});c(198);i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.746290f7.chunk.js.map
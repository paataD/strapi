"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[3677],{15415:function(M,o,t){t.r(o),t.d(o,{default:function(){return D}});var e=t(32735),l=t(19565),r=t(74758),i=t(67879),c=t(15062),m=t(78125),s=t(94638),u=t(96709),f=t(27649),y=t(82055),T=t(17e3),C=t(56755),x=t(33827),v=t(94547),d=t(19786),g=t(49372),L=t(35658),A=t(20108);const I=async()=>{const{get:n}=(0,l.tg)(),{data:a}=await n("/admin/plugins");return a};var O=n=>{const a=(0,l.lm)();return(0,A.useQuery)("list-enabled-plugins",()=>I(),{onSuccess(){n&&n()},onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Z=()=>{const{formatMessage:n}=(0,i.Z)(),{notifyStatus:a}=(0,s.G)();(0,l.go)();const P=n({id:"global.plugins",defaultMessage:"Plugins"}),B=()=>{a(n({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:P}))},{status:h,data:p}=O(B);return h!=="success"&&h!=="error"?e.createElement(u.A,null,e.createElement(f.o,{"aria-busy":!0},e.createElement(l.dO,null))):e.createElement(u.A,null,e.createElement(f.o,null,e.createElement(y.T,{title:P,subtitle:n({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(T.D,null,e.createElement(C.i,{colCount:2,rowCount:p?.plugins?.length??0+1},e.createElement(x.h,null,e.createElement(v.Tr,null,e.createElement(d.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(d.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.description",defaultMessage:"description"}))))),e.createElement(L.p,null,p.plugins.map(({name:E,displayName:N,description:j})=>e.createElement(v.Tr,{key:E},e.createElement(d.Td,null,e.createElement(g.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},n({id:`global.plugins.${E}`,defaultMessage:N}))),e.createElement(d.Td,null,e.createElement(g.Z,{textColor:"neutral800"},n({id:`global.plugins.${E}.description`,defaultMessage:j}))))))))))},D=()=>{const{formatMessage:n}=(0,i.Z)(),a=(0,c.v9)(m._);return e.createElement(l.O4,{permissions:a.marketplace.main},e.createElement(r.q,{title:n({id:"global.plugins",defaultMessage:"Plugins"})}),e.createElement(Z,null))}},96709:function(M,o,t){t.d(o,{A:function(){return m}});var e=t(74512),l=t(8471),r=t(72850);const i=(0,l.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,c=(0,l.ZP)(r.x)`
  overflow-x: hidden;
`,m=({sideNav:s,children:u})=>(0,e.jsxs)(i,{hasSideNav:!!s,children:[s,(0,e.jsx)(c,{paddingBottom:10,children:u})]})}}]);

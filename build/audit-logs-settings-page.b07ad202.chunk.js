"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[2812],{19150:function(U,f,t){t.d(f,{R:function(){return E}});var e=t(19565),n=t(33348),L=t(20108);function E(v={},T={}){const{id:c="",...C}=v,h=(0,n.stringify)(C,{encode:!1}),{get:S}=(0,e.kY)(),{data:g,isError:b,isLoading:A,refetch:O}=(0,L.useQuery)(["users",c,C],async()=>{const{data:{data:I}}=await S(`/admin/users/${c}${h?`?${h}`:""}`);return I},T);let M=[];return c&&g?M=[g]:Array.isArray(g?.results)&&(M=g.results),{users:M,pagination:g?.pagination??null,isLoading:A,isError:b,refetch:O}}},83196:function(U,f,t){var e=t(32735),n=t(72850),L=t(41415),E=t(19565),v=t(5644),T=t(60216),c=t.n(T),C=t(67879);const h=({displayedFilters:S})=>{const[g,b]=(0,e.useState)(!1),{formatMessage:A}=(0,C.Z)(),O=(0,e.useRef)(),M=()=>{b(I=>!I)};return e.createElement(e.Fragment,null,e.createElement(n.x,{paddingTop:1,paddingBottom:1},e.createElement(L.z,{variant:"tertiary",ref:O,startIcon:e.createElement(v.Z,null),onClick:M,size:"S"},A({id:"app.utils.filters",defaultMessage:"Filters"})),g&&e.createElement(E.J5,{displayedFilters:S,isVisible:g,onToggle:M,source:O})),e.createElement(E.W$,{filtersSchema:S}))};h.propTypes={displayedFilters:c().arrayOf(c().shape({name:c().string.isRequired,metadatas:c().shape({label:c().string}),fieldSchema:c().shape({type:c().string})})).isRequired},f.Z=h},71765:function(U,f,t){t.r(f),t.d(f,{default:function(){return Me}});var e=t(32735),n=t(19565),L=t(15062),E=t(78125),v=t(96709),T=t(17e3),c=t(72850),C=t(27649),h=t(82055),S=t(99223),g=t(67879),b=t(83196),A=t(20108),O=t(53038),M=t(19150),w=({canReadAuditLogs:a,canReadUsers:d})=>{const{get:u}=(0,n.kY)(),{search:r}=(0,O.TH)(),m=(0,n.lm)(),l={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:R=>m({type:"warning",message:R.message})},{users:i,isError:s,isLoading:p}=(0,M.R)({},{...l,enabled:d,staleTime:2*(1e3*60)}),{data:y,isLoading:P,isError:N}=(0,A.useQuery)(["auditLogs",r],async({queryKey:R})=>{const Z=R[1],{data:D}=await u(`/admin/audit-logs${Z}`);return D},{...l,enabled:a});return{auditLogs:y,users:i,isLoading:p||P,hasError:N||s}},k=t(85025),q=t(55225),_=t(31600),ee=t(26858),te=t(51654),ae=t(60216),o=t.n(ae),se=t(96315),H=()=>{const{formatDate:a}=(0,g.Z)();return u=>{const r=(0,se.Z)(u),m=a(r,{dateStyle:"long"}),l=a(r,{timeStyle:"medium",hourCycle:"h24"});return`${m}, ${l}`}},B=t(87933),ne=t(23866),F=t(49372),oe=t(15335),ie=t(64710);const z={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},$=a=>z[a]||a,Q=({actionLabel:a,actionName:d})=>e.createElement(B.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(F.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(F.Z,{textColor:"neutral600"},d));Q.propTypes={actionLabel:o().string.isRequired,actionName:o().string.isRequired};var x=Q;const W=({status:a,data:d,formattedDate:u})=>{const{formatMessage:r}=(0,g.Z)();if(a==="loading")return e.createElement(B.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(ne.a,null,"Loading content..."));const{action:m,user:l,payload:i}=d;return e.createElement(e.Fragment,null,e.createElement(c.x,{marginBottom:3},e.createElement(F.Z,{variant:"delta",id:"title"},r({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(oe.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(x,{actionLabel:r({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:r({id:`Settings.permissions.auditLogs.${m}`,defaultMessage:$(m)},{model:i?.model})}),e.createElement(x,{actionLabel:r({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:u}),e.createElement(x,{actionLabel:r({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:l?.displayName||"-"}),e.createElement(x,{actionLabel:r({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:l?.id.toString()||"-"})),e.createElement(ie.V,{value:JSON.stringify(i,null,2),disabled:!0,label:r({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};W.defaultProps={data:{}},W.propTypes={status:o().oneOf(["idle","loading","error","success"]).isRequired,data:o().shape({action:o().string,date:o().string,payload:o().object,user:o().object}),formattedDate:o().string.isRequired};var re=W;const Y=({handleClose:a,logId:d})=>{const{get:u}=(0,n.kY)(),r=(0,n.lm)(),m=async y=>{const{data:P}=await u(`/admin/audit-logs/${y}`);if(!P)throw new Error("Audit log not found");return P},{data:l,status:i}=(0,A.useQuery)(["audit-log",d],()=>m(d),{onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),s=H(),p=l?s(l.date):"";return e.createElement(k.P,{onClose:a,labelledBy:"title"},e.createElement(q.x,null,e.createElement(ee.O,{label:p,id:"title"},e.createElement(te.$,{isCurrent:!0},p))),e.createElement(_.f,null,e.createElement(re,{status:i,data:l,formattedDate:p})))};Y.propTypes={handleClose:o().func.isRequired,logId:o().string.isRequired};var le=Y;const j=({pagination:a})=>e.createElement(c.x,{paddingTop:4},e.createElement(B.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.v4,null),e.createElement(n.tU,{pagination:a})));j.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},j.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};var de=j,me=t(35658),ue=t(94547),J=t(19786),ce=t(50563),ge=t(54894);const V=({headers:a,rows:d,onOpenModal:u})=>{const{formatMessage:r}=(0,g.Z)(),m=H(),l=({type:i,value:s,model:p})=>i==="date"?m(s):i==="action"?r({id:`Settings.permissions.auditLogs.${s}`,defaultMessage:$(s)},{model:p}):s||"-";return e.createElement(me.p,null,d.map(i=>e.createElement(ue.Tr,{key:i.id,...(0,n.X7)({fn:()=>u(i.id)})},a.map(({key:s,name:p,cellFormatter:y})=>e.createElement(J.Td,{key:s},e.createElement(F.Z,{textColor:"neutral800"},l({type:s,value:y?y(i[p]):i[p],model:i.payload?.model})))),e.createElement(J.Td,{...n.UW},e.createElement(B.k,{justifyContent:"end"},e.createElement(ce.h,{onClick:()=>u(i.id),"aria-label":r({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${i.action} action`}),noBorder:!0,icon:e.createElement(ge.Z,null)}))))))};V.defaultProps={rows:[]},V.propTypes={headers:o().array.isRequired,rows:o().array,onOpenModal:o().func.isRequired};var pe=V,fe=t(21428),Ee=t(90333);const K=({value:a,options:d,onChange:u})=>{const{formatMessage:r}=(0,g.Z)(),m=r({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(fe.hQ,{"aria-label":m,value:a,onChange:u},d.map(({label:l,customValue:i})=>e.createElement(Ee.O,{key:i,value:i},l)))};K.defaultProps={value:null},K.propTypes={value:o().string,options:o().arrayOf(o().shape({label:o().string.isRequired,customValue:o().string.isRequired}).isRequired).isRequired,onChange:o().func.isRequired};var G=K;const X=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}];var ye=({formatMessage:a,users:d,canReadUsers:u})=>{const r=Object.keys(z).map(l=>({label:a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:$(l)},{model:void 0}),customValue:l})),m=[{name:"action",metadatas:{customOperators:X,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:r,customInput:G},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(u&&d){const l=s=>s.username?s.username:s.firstname&&s.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:s.firstname,lastname:s.lastname}):s.email,i=d.map(s=>({label:l(s),customValue:s.id.toString()}));return[...m,{name:"user",metadatas:{customOperators:X,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:i,customInput:G},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return m},Le=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],ve=()=>{const{formatMessage:a}=(0,g.Z)(),d=(0,L.v9)(E._),u=e.useMemo(()=>({...d.settings.auditLogs,readUsers:d.settings.users.read}),[d.settings.auditLogs,d.settings.users.read]),{allowedActions:{canRead:r,canReadUsers:m}}=(0,n.ss)(u),[{query:l},i]=(0,n.Kx)(),{auditLogs:s,users:p,isLoading:y,hasError:P}=w({canReadAuditLogs:r,canReadUsers:m});(0,n.go)();const N=ye({formatMessage:a,users:p,canReadUsers:m}),R=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),Z=Le.map(D=>({...D,metadatas:{...D.metadatas,label:a(D.metadatas.label)}}));return P?e.createElement(v.A,null,e.createElement(T.D,null,e.createElement(c.x,{paddingTop:8},e.createElement(n.Hn,null)))):e.createElement(C.o,{"aria-busy":y},e.createElement(n.SL,{name:R}),e.createElement(h.T,{title:R,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(S.Z,{startActions:e.createElement(b.Z,{displayedFilters:N})}),e.createElement(T.D,{canRead:r},e.createElement(n.tM,{contentType:"Audit logs",headers:Z,rows:s?.results||[],withBulkActions:!0,isLoading:y},e.createElement(pe,{headers:Z,rows:s?.results||[],onOpenModal:D=>i({id:D})})),e.createElement(de,{pagination:s?.pagination})),l?.id&&e.createElement(le,{handleClose:()=>i({id:null},"remove"),logId:l.id}))},Me=()=>{const a=(0,L.v9)(E._);return e.createElement(n.O4,{permissions:a.settings.auditLogs.main},e.createElement(ve,null))}},90333:function(U,f,t){t.d(f,{O:function(){return n}});var e=t(21428);const n=e.Wx},99223:function(U,f,t){t.d(f,{Z:function(){return L}});var e=t(74512),n=t(87933);const L=({startActions:E,endActions:v})=>!E&&!v?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:E}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:v})]})}}]);

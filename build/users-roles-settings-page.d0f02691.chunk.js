"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[8853],{64974:function(Re,F,a){a.r(F),a.d(F,{default:function(){return Lt}});var e=a(32735),l=a(19565),b=a(53038),T=a(39079),y=a(90201),j=a(27649),$=a(82055),G=a(41415),Z=a(17e3),f=a(87933),C=a(72850),E=a(49372),x=a(15335),A=a(5803),k=a(10369),J=a(33475),q=a(66456),_=a(76394),S=a(67879),Ce=a(60216),v=a.n(Ce);const ee=(0,e.createContext)({}),te=({children:t,value:n})=>e.createElement(ee.Provider,{value:n},t),Y=()=>(0,e.useContext)(ee);te.propTypes={children:v().node.isRequired,value:v().object.isRequired};var B=a(82069),Te=a(83828),Ae=a(61762),Pe=a(89966),De=a(23940),Le=a.n(De);function be(t){switch(t){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return Le()(t.replace("api::","").replace("plugin::",""))}}var Se=be,Me=(t,n)=>{const s=Object.keys(n).sort().map(r=>({name:r,isOpen:!1}));return{...t,collapses:s}},Ze=a(98978),se=a.n(Ze),ne=a(8284),ae=a(3685),Oe=a(45112),xe=a(33795),W=a.n(xe),V=a(8471);const re=(0,V.iv)`
  background: ${t=>t.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;var Ue=(0,V.ZP)(C.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${t=>t.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${t=>t.isActive&&re}
  &:hover {
    ${re}
  }
`;const Ie=V.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,oe=({subCategory:t})=>{const{formatMessage:n}=(0,S.Z)(),{onChange:s,onChangeSelectAll:r,onSelectedAction:c,selectedAction:o,modifiedData:u}=Y(),m=(0,e.useMemo)(()=>W()(u,t.name,{}),[u,t]),g=(0,e.useMemo)(()=>Object.values(m).every(i=>i.enabled===!0),[m]),d=(0,e.useMemo)(()=>Object.values(m).some(i=>i.enabled===!0)&&!g,[m,g]),h=(0,e.useCallback)(({target:{name:i}})=>{r({target:{name:i,value:!g}})},[g,r]),p=(0,e.useCallback)(i=>o===i,[o]);return e.createElement(C.x,null,e.createElement(f.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(C.x,{paddingRight:4},e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},t.label)),e.createElement(Ie,null),e.createElement(C.x,{paddingLeft:4},e.createElement(ne.X,{name:t.name,value:g,onValueChange:i=>h({target:{name:t.name,value:i}}),indeterminate:d},n({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(f.k,{paddingTop:6,paddingBottom:6},e.createElement(x.r,{gap:2,style:{flex:1}},t.actions.map(i=>{const P=`${i.name}.enabled`;return e.createElement(A.P,{col:6,key:i.name},e.createElement(Ue,{isActive:p(i.name),padding:2,hasRadius:!0},e.createElement(ne.X,{value:W()(u,P,!1),name:P,onValueChange:M=>s({target:{name:P,value:M}})},i.label),e.createElement("button",{type:"button",onClick:()=>c(i.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(ae.T,{as:"span"},n({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:i.name})),e.createElement(Oe.Z,null))))}))))};oe.propTypes={subCategory:v().object.isRequired};var ke=oe;const le=({name:t,permissions:n})=>{const s=(0,e.useMemo)(()=>se()(Object.values(n.controllers).reduce((r,c,o)=>{const u=`${t}.controllers.${Object.keys(n.controllers)[o]}`,m=se()(Object.keys(c).reduce((g,d)=>[...g,{...c[d],label:d,name:`${u}.${d}`}],[]),"label");return[...r,{actions:m,label:Object.keys(n.controllers)[o],name:u}]},[]),"label"),[t,n]);return e.createElement(C.x,{padding:6},s.map(r=>e.createElement(ke,{key:r.name,subCategory:r})))};le.propTypes={name:v().string.isRequired,permissions:v().object.isRequired};var Be=le,z=a(97889);const Ne={collapses:[]},$e=(t,n)=>(0,z.ZP)(t,s=>{switch(n.type){case"TOGGLE_COLLAPSE":{s.collapses=t.collapses.map((r,c)=>c===n.index?{...r,isOpen:!r.isOpen}:{...r,isOpen:!1});break}default:return s}});var Ge=()=>{const{modifiedData:t}=Y(),{formatMessage:n}=(0,S.Z)(),[{collapses:s},r]=(0,e.useReducer)($e,Ne,o=>Me(o,t)),c=o=>r({type:"TOGGLE_COLLAPSE",index:o});return e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:1},s.map((o,u)=>e.createElement(Te.U,{expanded:o.isOpen,onToggle:()=>c(u),key:o.name,variant:u%2===0?"secondary":void 0},e.createElement(Ae.B,{title:Se(o.name),description:n({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:o.name}),variant:u%2?"primary":"secondary"}),e.createElement(Pe.v,null,e.createElement(C.x,null,e.createElement(Be,{permissions:t[o.name],name:o.name}))))))},Fe=a(86834),je=a.n(Fe),We=a(86205),Ve=a.n(We),He=a(37213),we=a.n(He),Ye=a(15738),ze=a.n(Ye),Qe=t=>{switch(t){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}};const Xe=(0,V.ZP)(C.x)`
  margin: -1px;
  border-radius: ${({theme:t})=>t.spaces[1]} 0 0 ${({theme:t})=>t.spaces[1]};
`;function Q({route:t}){const{formatMessage:n}=(0,S.Z)(),{method:s,handler:r,path:c}=t,o=c?ze()(c.split("/")):[],[u="",m=""]=r?r.split("."):[],g=Qe(t.method);return e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(E.Z,{variant:"delta",as:"h3"},n({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,u),e.createElement(E.Z,{variant:"delta",textColor:"primary600"},".",m)),e.createElement(f.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(Xe,{background:g.background,borderColor:g.border,padding:2},e.createElement(E.Z,{fontWeight:"bold",textColor:g.text},s)),e.createElement(C.x,{paddingLeft:2,paddingRight:2},we()(o,d=>e.createElement(E.Z,{key:d,textColor:d.includes(":")?"neutral600":"neutral900"},"/",d)))))}Q.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},Q.propTypes={route:v().shape({handler:v().string,method:v().string,path:v().string})};var Ke=Q,Je=()=>{const{formatMessage:t}=(0,S.Z)(),{selectedAction:n,routes:s}=Y(),r=Ve()(n.split("."),"controllers"),c=W()(s,r[0]),o=r.slice(1).join("."),u=je()(c)?[]:c.filter(m=>m.handler.endsWith(o));return e.createElement(A.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},n?e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},u.map((m,g)=>e.createElement(Ke,{key:g,route:m}))):e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(E.Z,{variant:"delta",as:"h3"},t({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(E.Z,{as:"p",textColor:"neutral600"},t({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},qe=(t,n,s)=>({...t,initialData:n,modifiedData:n,routes:s}),_e=a(3040),ie=a.n(_e),et=a(88708),tt=a.n(et);const st={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]};var nt=(t,n)=>(0,z.ZP)(t,s=>{switch(n.type){case"ON_CHANGE":{const r=n.keys.length,c=n.keys[r-1]==="enabled";if(n.value&&c){const o=tt()(n.keys,r-1).join(".");s.selectedAction=o}ie()(s,["modifiedData",...n.keys],n.value);break}case"ON_CHANGE_SELECT_ALL":{const r=["modifiedData",...n.keys],c=W()(t,r,{}),o=Object.keys(c).reduce((u,m)=>(u[m]={...c[m],enabled:n.value},u),{});ie()(s,r,o);break}case"ON_RESET":{s.modifiedData=t.initialData;break}case"ON_SUBMIT_SUCCEEDED":{s.initialData=t.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:r}=n;s.selectedAction=r===t.selectedAction?"":r;break}default:return s}});const ce=(0,e.forwardRef)(({permissions:t,routes:n},s)=>{const{formatMessage:r}=(0,S.Z)(),[c,o]=(0,e.useReducer)(nt,st,h=>qe(h,t,n));(0,e.useImperativeHandle)(s,()=>({getPermissions(){return{permissions:c.modifiedData}},resetForm(){o({type:"ON_RESET"})},setFormAfterSubmit(){o({type:"ON_SUBMIT_SUCCEEDED"})}}));const d={...c,onChange:({target:{name:h,value:p}})=>o({type:"ON_CHANGE",keys:h.split("."),value:p==="empty__string_value"?"":p}),onChangeSelectAll:({target:{name:h,value:p}})=>o({type:"ON_CHANGE_SELECT_ALL",keys:h.split("."),value:p}),onSelectedAction:h=>o({type:"SELECT_ACTION",actionToSelect:h})};return e.createElement(te,{value:d},e.createElement(x.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(A.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(E.Z,{variant:"delta",as:"h2"},r({id:(0,B.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(E.Z,{as:"p",textColor:"neutral600"},r({id:(0,B.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(Ge,null))),e.createElement(Je,null)))});ce.propTypes={permissions:v().object.isRequired,routes:v().object.isRequired};var de=(0,e.memo)(ce),U=a(59677);const wt={isLoading:!0,modifiedData:{}},Yt=(t,n)=>produce(t,s=>{switch(n.type){case"GET_DATA":{s.isLoading=!0,s.modifiedData={};break}case"GET_DATA_SUCCEEDED":{s.isLoading=!1,s.modifiedData=n.data;break}case"GET_DATA_ERROR":{s.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{s.modifiedData=n.data;break}default:return s}});var zt=null;const Qt=(t,n)=>{const{isLoading:s,allowedActions:r}=useRBAC(n),[{isLoading:c,modifiedData:o},u]=useReducer(reducer,initialState),m=useNotification(),g=useRef(!0),{get:d}=useFetchClient();useEffect(()=>(s||(async()=>{try{u({type:"GET_DATA"});const{data:i}=await d(getRequestURL(t));u({type:"GET_DATA_SUCCEEDED",data:i})}catch(i){g.current&&(u({type:"GET_DATA_ERROR"}),console.error(i),m({type:"warning",message:{id:"notification.error"}}))}})(),()=>{g.current=!1}),[s,t,d,m]);const h=useCallback(p=>{u({type:"ON_SUBMIT_SUCCEEDED",data:p})},[]);return{allowedActions:r,dispatchSubmitSucceeded:h,isLoading:c,isLoadingForPermissions:s,modifiedData:o}};var Xt=null;const Kt={roles:[],isLoading:!0},Jt=(t,n)=>produce(t,s=>{switch(n.type){case"GET_DATA":{s.isLoading=!0,s.roles=[];break}case"GET_DATA_SUCCEEDED":{s.roles=n.data,s.isLoading=!1;break}case"GET_DATA_ERROR":{s.isLoading=!1;break}default:return s}});var qt=null;const _t=(t=!0)=>{const[{roles:n,isLoading:s},r]=useReducer(reducer,initialState,()=>init(initialState,t)),c=useNotification(),o=useRef(!0),u=useFetchClient(),m=useCallback(async()=>{try{r({type:"GET_DATA"});const{data:{roles:g}}=await u.get(`/${pluginId}/roles`);r({type:"GET_DATA_SUCCEEDED",data:g})}catch(g){const d=get(g,["response","payload","message"],"An error occured");o.current&&(r({type:"GET_DATA_ERROR"}),d!=="Forbidden"&&c({type:"warning",message:d}))}},[u,c]);return useEffect(()=>(t&&m(),()=>{o.current=!1}),[t,m]),{roles:n,isLoading:s,getData:m}};var es=null,H=a(20108);const ue=()=>{const t=(0,l.lm)(),{get:n}=(0,l.kY)(),{formatAPIError:s}=(0,l.So)(U.OB),[{data:r,isLoading:c,error:o,refetch:u},{data:m,isLoading:g,error:d,refetch:h}]=(0,H.useQueries)([{queryKey:[y.Z,"permissions"],async queryFn(){return(await n(`/${y.Z}/permissions`)).data.permissions}},{queryKey:[y.Z,"routes"],async queryFn(){return(await n(`/${y.Z}/routes`)).data.routes}}]),p=async()=>{await Promise.all([u(),h()])};(0,e.useEffect)(()=>{o&&t({type:"warning",message:s(o)})},[t,o,s]),(0,e.useEffect)(()=>{d&&t({type:"warning",message:s(d)})},[t,d,s]);const i=c||g;return{permissions:r?(0,U.YX)(r):{},routes:m??{},getData:p,isLoading:i}},at={role:{},isLoading:!0};var rt=(t,n)=>(0,z.ZP)(t,s=>{switch(n.type){case"GET_DATA_SUCCEEDED":{s.role=n.role,s.isLoading=!1;break}case"GET_DATA_ERROR":{s.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{s.role.name=n.name,s.role.description=n.description;break}default:return s}}),ot=t=>{const[n,s]=(0,e.useReducer)(rt,at),r=(0,l.lm)(),c=(0,e.useRef)(null),{get:o}=(0,l.kY)();(0,e.useEffect)(()=>(c.current=!0,t?u(t):s({type:"GET_DATA_SUCCEEDED",role:{}}),()=>c.current=!1),[t]);const u=async g=>{try{const{data:{role:d}}=await o(`/${y.Z}/roles/${g}`);c.current&&s({type:"GET_DATA_SUCCEEDED",role:d})}catch(d){console.error(d),s({type:"GET_DATA_ERROR"}),r({type:"warning",message:{id:"notification.error"}})}},m=(0,e.useCallback)(g=>{s({type:"ON_SUBMIT_SUCCEEDED",...g})},[]);return{...n,onSubmitSucceeded:m}},X=a(24346);const me=X.Ry().shape({name:X.Z_().required(l.I0.required),description:X.Z_().required(l.I0.required)});var lt=()=>{const{formatMessage:t}=(0,S.Z)(),[n,s]=(0,e.useState)(!1),r=(0,l.lm)(),{goBack:c}=(0,b.k6)(),{lockApp:o,unlockApp:u}=(0,l.o1)(),{isLoading:m,permissions:g,routes:d}=ue(),{trackUsage:h}=(0,l.rS)(),p=(0,e.useRef)(),{post:i}=(0,l.kY)(),P=async M=>{o(),s(!0);try{const R=p.current.getPermissions();await i(`/${y.Z}/roles`,{...M,...R,users:[]}),h("didCreateRole"),r({type:"success",message:{id:(0,B.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),c()}catch(R){console.error(R),r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}s(!1),u()};return e.createElement(j.o,null,e.createElement(l.SL,{name:"Roles"}),e.createElement(_.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:P,validationSchema:me},({handleSubmit:M,values:R,handleChange:D,errors:L})=>e.createElement(l.l0,{noValidate:!0,onSubmit:M},e.createElement($.T,{primaryAction:!m&&e.createElement(G.z,{type:"submit",loading:n,startIcon:e.createElement(q.Z,null)},t({id:"global.save",defaultMessage:"Save"})),title:t({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:t({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(Z.D,null,e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(C.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.Z,{variant:"delta",as:"h2"},t({id:(0,B.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(x.r,{gap:4},e.createElement(A.P,{col:6},e.createElement(k.o,{name:"name",value:R.name||"",onChange:D,label:t({id:"global.name",defaultMessage:"Name"}),error:L.name?t({id:L.name,defaultMessage:"Invalid value"}):null})),e.createElement(A.P,{col:6},e.createElement(J.g,{id:"description",value:R.description||"",onChange:D,label:t({id:"global.description",defaultMessage:"Description"}),error:L.description?t({id:L.description,defaultMessage:"Invalid value"}):null}))))),!m&&e.createElement(de,{ref:p,permissions:g,routes:d}))))))},it=()=>e.createElement(l.O4,{permissions:T._.createRole},e.createElement(lt,null)),ct=a(29439),dt=()=>{const{formatMessage:t}=(0,S.Z)(),[n,s]=(0,e.useState)(!1),r=(0,l.lm)(),{lockApp:c,unlockApp:o}=(0,l.o1)(),{params:{id:u}}=(0,b.$B)(`/settings/${y.Z}/roles/:id`),{isLoading:m,routes:g}=ue(),{role:d,onSubmitSucceeded:h,isLoading:p}=ot(u),i=(0,e.useRef)(),{put:P}=(0,l.kY)(),M=async R=>{c(),s(!0);try{const D=i.current.getPermissions();await P(`/${y.Z}/roles/${u}`,{...R,...D,users:[]}),h({name:R.name,description:R.description}),r({type:"success",message:{id:(0,B.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(D){console.error(D),r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}s(!1),o()};return p?e.createElement(l.dO,null):e.createElement(j.o,null,e.createElement(l.SL,{name:"Roles"}),e.createElement(_.J9,{enableReinitialize:!0,initialValues:{name:d.name,description:d.description},onSubmit:M,validationSchema:me},({handleSubmit:R,values:D,handleChange:L,errors:N})=>e.createElement(l.l0,{noValidate:!0,onSubmit:R},e.createElement($.T,{primaryAction:!m&&e.createElement(G.z,{disabled:d.code==="strapi-super-admin",type:"submit",loading:n,startIcon:e.createElement(q.Z,null)},t({id:"global.save",defaultMessage:"Save"})),title:d.name,subtitle:d.description,navigationAction:e.createElement(l.rU,{startIcon:e.createElement(ct.Z,null),to:"/settings/users-permissions/roles"},t({id:"global.back",defaultMessage:"Back"}))}),e.createElement(Z.D,null,e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(C.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.Z,{variant:"delta",as:"h2"},t({id:(0,B.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(x.r,{gap:4},e.createElement(A.P,{col:6},e.createElement(k.o,{name:"name",value:D.name||"",onChange:L,label:t({id:"global.name",defaultMessage:"Name"}),error:N.name?t({id:N.name,defaultMessage:"Invalid value"}):null})),e.createElement(A.P,{col:6},e.createElement(J.g,{id:"description",value:D.description||"",onChange:L,label:t({id:"global.description",defaultMessage:"Description"}),error:N.description?t({id:N.description,defaultMessage:"Invalid value"}):null}))))),!m&&e.createElement(de,{ref:i,permissions:d.permissions,routes:g}))))))},ut=()=>e.createElement(l.O4,{permissions:T._.updateRole},e.createElement(dt,null)),mt=a(94638),gt=a(96709),pt=a(99223),Et=a(56755),ht=a(33827),ge=a(94547),O=a(19786),ft=a(19406),vt=a(35658),pe=a(50563),yt=a(68625),Rt=a(4038);const K=({sortedRoles:t,canDelete:n,permissions:s,setRoleToDelete:r,onDelete:c})=>{const{formatMessage:o}=(0,S.Z)(),{push:u}=(0,b.k6)(),[m,g]=c,d=i=>n&&!["public","authenticated"].includes(i.type),h=i=>{r(i),g(!m)},p=i=>{u(`/settings/${y.Z}/roles/${i}`)};return e.createElement(vt.p,null,t?.map(i=>e.createElement(ge.Tr,{key:i.name,...(0,l.X7)({fn:()=>p(i.id)})},e.createElement(O.Td,{width:"20%"},e.createElement(E.Z,null,i.name)),e.createElement(O.Td,{width:"50%"},e.createElement(E.Z,null,i.description)),e.createElement(O.Td,{width:"30%"},e.createElement(E.Z,null,`${i.nb_users} ${o({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),e.createElement(O.Td,null,e.createElement(f.k,{justifyContent:"end",...l.UW},e.createElement(l.jW,{permissions:s.updateRole},e.createElement(pe.h,{onClick:()=>p(i.id),noBorder:!0,icon:e.createElement(yt.Z,null),label:o({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${i.name}`})})),d(i)&&e.createElement(l.jW,{permissions:s.deleteRole},e.createElement(pe.h,{onClick:()=>h(i.id),noBorder:!0,icon:e.createElement(Rt.Z,null),label:o({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${i.name}`})})))))))};var Ct=K;K.defaultProps={canDelete:!1},K.propTypes={onDelete:v().array.isRequired,permissions:v().object.isRequired,setRoleToDelete:v().func.isRequired,sortedRoles:v().array.isRequired,canDelete:v().bool};const Tt=async(t,n)=>{try{const{get:s}=(0,l.tg)(),{data:r}=await s((0,U.Gc)("roles"));return n("The roles have loaded successfully"),r}catch(s){throw t({type:"warning",message:{id:"notification.error"}}),new Error(s)}},At=async(t,n)=>{try{const{del:s}=(0,l.tg)();await s(`${(0,U.Gc)("roles")}/${t}`)}catch{n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}};var Pt=()=>{const{trackUsage:t}=(0,l.rS)(),{formatMessage:n,locale:s}=(0,S.Z)(),{push:r}=(0,b.k6)(),c=(0,l.lm)(),{notifyStatus:o}=(0,mt.G)(),[{query:u}]=(0,l.Kx)(),m=u?._q||"",[g,d]=(0,e.useState)(!1),[h,p]=(0,e.useState)(!1),[i,P]=(0,e.useState)();(0,l.go)();const M=(0,H.useQueryClient)(),R=(0,e.useMemo)(()=>({create:T._.createRole,read:T._.readRoles,update:T._.updateRole,delete:T._.deleteRole}),[]),{isLoading:D,allowedActions:{canRead:L,canDelete:N}}=(0,l.ss)(R),{isLoading:bt,data:{roles:Ee},isFetching:St}=(0,H.useQuery)("get-roles",()=>Tt(c,o),{initialData:{},enabled:L}),{includes:he}=(0,l.L0)(s,{sensitivity:"base"}),fe=(0,l.Xe)(s,{sensitivity:"base"}),ve=bt||St,Mt=()=>{t("willCreateRole"),r(`/settings/${y.Z}/roles/new`)},Zt=()=>{d(!g)},Ot={roles:{id:(0,U.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,U.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},xt=n({id:"global.roles",defaultMessage:"Roles"}),Ut=(0,H.useMutation)(I=>At(I,c),{async onSuccess(){await M.invalidateQueries("get-roles")}}),It=async()=>{p(!0),await Ut.mutateAsync(i),d(!g),p(!1)},w=(Ee||[]).filter(I=>he(I.name,m)||he(I.description,m)).sort((I,ye)=>fe.compare(I.name,ye.name)||fe.compare(I.description,ye.description)),kt=m&&!w.length?"search":"roles",Bt=4,Nt=(Ee?.length||0)+1;return e.createElement(gt.A,null,e.createElement(l.SL,{name:xt}),e.createElement(j.o,{"aria-busy":ve},e.createElement($.T,{title:n({id:"global.roles",defaultMessage:"Roles"}),subtitle:n({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(l.jW,{permissions:T._.createRole},e.createElement(G.z,{onClick:Mt,startIcon:e.createElement(ft.Z,null),size:"S"},n({id:(0,U.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(pt.Z,{startActions:e.createElement(l.m,{label:n({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(Z.D,null,!L&&e.createElement(l.ZF,null),(ve||D)&&e.createElement(l.dO,null),L&&w&&w?.length?e.createElement(Et.i,{colCount:Bt,rowCount:Nt},e.createElement(ht.h,null,e.createElement(ge.Tr,null,e.createElement(O.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(O.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.description",defaultMessage:"Description"}))),e.createElement(O.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.users",defaultMessage:"Users"}))),e.createElement(O.Th,null,e.createElement(ae.T,null,n({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(Ct,{sortedRoles:w,canDelete:N,permissions:T._,setRoleToDelete:P,onDelete:[g,d]})):e.createElement(l.x7,{content:Ot[kt]})),e.createElement(l.QH,{isConfirmButtonLoading:h,onConfirm:It,onToggleDialog:Zt,isOpen:g})))},Dt=()=>e.createElement(l.O4,{permissions:T._.accessRoles},e.createElement(Pt,null)),Lt=()=>e.createElement(l.O4,{permissions:T._.accessRoles},e.createElement(b.rs,null,e.createElement(b.AW,{path:`/settings/${y.Z}/roles/new`,component:it,exact:!0}),e.createElement(b.AW,{path:`/settings/${y.Z}/roles/:id`,component:ut,exact:!0}),e.createElement(b.AW,{path:`/settings/${y.Z}/roles`,component:Dt,exact:!0}),e.createElement(b.AW,{path:"",component:l.Hn})))},59677:function(Re,F,a){a.d(F,{YX:function(){return T},Gc:function(){return $},OB:function(){return G.Z}});var e=a(86834),l=a.n(e),T=Z=>Object.keys(Z).reduce((f,C)=>{const E=Z[C].controllers,x=Object.keys(E).reduce((A,k)=>(l()(E[k])||(A[k]=E[k]),A),{});return l()(x)||(f[C]={controllers:x}),f},{}),y=a(90201),$=Z=>`/${y.Z}/${Z}`,G=a(82069)}}]);

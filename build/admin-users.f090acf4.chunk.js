"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5199],{19150:function(C,n,e){e.d(n,{R:function(){return l}});var t=e(19565),a=e(33348),r=e(20108);function l(o={},i={}){const{id:s="",...c}=o,d=(0,a.stringify)(c,{encode:!1}),{get:g}=(0,t.kY)(),{data:m,isError:v,isLoading:h,refetch:P}=(0,r.useQuery)(["users",s,c],async()=>{const{data:{data:D}}=await g(`/admin/users/${s}${d?`?${d}`:""}`);return D},i);let p=[];return s&&m?p=[m]:Array.isArray(m?.results)&&(p=m.results),{users:p,pagination:m?.pagination??null,isLoading:h,isError:v,refetch:P}}},83119:function(C,n){const e=()=>null;n.Z=e},83196:function(C,n,e){var t=e(32735),a=e(72850),r=e(41415),l=e(19565),o=e(5644),i=e(60216),s=e.n(i),c=e(67879);const d=({displayedFilters:g})=>{const[m,v]=(0,t.useState)(!1),{formatMessage:h}=(0,c.Z)(),P=(0,t.useRef)(),p=()=>{v(D=>!D)};return t.createElement(t.Fragment,null,t.createElement(a.x,{paddingTop:1,paddingBottom:1},t.createElement(r.z,{variant:"tertiary",ref:P,startIcon:t.createElement(o.Z,null),onClick:p,size:"S"},h({id:"app.utils.filters",defaultMessage:"Filters"})),m&&t.createElement(l.J5,{displayedFilters:g,isVisible:m,onToggle:p,source:P})),t.createElement(l.W$,{filtersSchema:g}))};d.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired},n.Z=d},9814:function(C,n,e){var t=e(32735),a=e(41415),r=e(7961),l=e(60216),o=e.n(l),i=e(67879);const s=({onClick:c})=>{const{formatMessage:d}=(0,i.Z)();return t.createElement(a.z,{onClick:c,startIcon:t.createElement(r.Z,null),size:"S"},d({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};s.propTypes={onClick:o().func.isRequired},n.Z=s},58795:function(C,n,e){e.r(n),e.d(n,{default:function(){return Fe}});var t=e(32735),a=e(19565),r=e(15062),l=e(78125),o=e(27649),i=e(82055),s=e(99223),c=e(17e3),d=e(33348),g=e.n(d),m=e(67879),v=e(20108),h=e(53038),P=e(19150),p=e(83196),D=e(35658),B=e(94547),F=e(19786),V=e(82884),b=e(49372),$=e(87933),K=e(50563),Z=e(72850),se=e(68625),ne=e(4038),re=e(60216),E=e.n(re),y=e(8997);const le=({canDelete:M,headers:S,entriesToDelete:T,onClickDelete:z,onSelectRow:X,withMainAction:H,withBulkActions:I,rows:_})=>{const{push:j,location:{pathname:L}}=(0,h.k6)(),{formatMessage:A}=(0,m.Z)();return t.createElement(D.p,null,_.map(u=>{const x=T.findIndex(W=>W===u.id)!==-1;return t.createElement(B.Tr,{key:u.id,...(0,a.X7)({fn:()=>j(`${L}/${u.id}`),condition:I})},H&&t.createElement(F.Td,{...a.UW},t.createElement(V.C,{"aria-label":A({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,y.Pp)(u.firstname,u.lastname)}),checked:x,onChange:()=>{X({name:u.id,value:!x})}})),S.map(({key:W,cellFormatter:Y,name:N,...Q})=>t.createElement(F.Td,{key:W},typeof Y=="function"?Y(u,{key:W,name:N,formatMessage:A,...Q}):t.createElement(b.Z,{textColor:"neutral800"},u[N]||"-"))),I&&t.createElement(F.Td,null,t.createElement($.k,{justifyContent:"end"},t.createElement(K.h,{onClick:()=>j(`${L}/${u.id}`),label:A({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,y.Pp)(u.firstname,u.lastname)}),noBorder:!0,icon:t.createElement(se.Z,null)}),M&&t.createElement(Z.x,{paddingLeft:1,...a.UW},t.createElement(K.h,{onClick:()=>z(u.id),label:A({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,y.Pp)(u.firstname,u.lastname)}),noBorder:!0,icon:t.createElement(ne.Z,null)})))))}))};le.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},le.propTypes={canDelete:E().bool,entriesToDelete:E().array,headers:E().array.isRequired,onClickDelete:E().func,onSelectRow:E().func,rows:E().array,withBulkActions:E().bool,withMainAction:E().bool};var fe=le,ee=e(20011),oe=e(41415),ve=e(85025),Pe=e(55225),De=e(31600),me=e(15335),ie=e(5803),Oe=e(11406),he=e(26858),ye=e(51654),Ce=e(76394),ue=e(18782),Te=e(4397),G=e(24346);const Ee={firstname:"",lastname:"",email:"",roles:[]},Le=[],Ae=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ie=G.Ry().shape({firstname:G.Z_().trim().required(a.I0.required),lastname:G.Z_(),email:G.Z_().email(a.I0.email).required(a.I0.required),roles:G.IX().min(1,a.I0.required).required(a.I0.required)}),Re={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Ue=(()=>window&&window.strapi&&window.strapi.isEE?e(28890).Z:e(16325).Z)(),ge=M=>{let{onSuccess:S,onToggle:T}=M;const[z,X]=(0,t.useState)("create"),[H,I]=(0,t.useState)(!1),[_,j]=(0,t.useState)(null),{formatMessage:L}=(0,m.Z)(),A=(0,a.lm)(),{lockApp:u,unlockApp:x}=(0,a.o1)(),{post:W}=(0,a.kY)(),Y=(0,ue.c)(Le,async()=>(await e.e(3269).then(e.bind(e,93269))).ROLE_LAYOUT,{combine(O,R){return[...O,R]},defaultValue:[]}),N=(0,ue.c)(Ee,async()=>(await e.e(3269).then(e.bind(e,93269))).FORM_INITIAL_VALUES,{combine(O,R){return{...O,...R}},defaultValue:Ee}),Q=(0,v.useMutation)(O=>W("/admin/users",O),{async onSuccess(O){let{data:R}=O;j(R.data.registrationToken),await S(),ae(),I(!1)},onError(O){throw I(!1),A({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),O},onSettled(){x()}}),k=L({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),te=async(O,R)=>{let{setErrors:q}=R;u(),I(!0);try{await Q.mutateAsync(O)}catch(J){x(),J?.response?.data?.error.message==="Email already taken"&&q({email:J.response.data.error.message})}},ae=()=>{Me?X(Me):T()},{buttonSubmitLabel:w,isDisabled:f,next:Me}=Re[z],be=z==="create"?t.createElement(oe.z,{type:"submit",loading:H},L(w)):t.createElement(oe.z,{type:"button",loading:H,onClick:T},L(w));return t.createElement(ve.P,{onClose:T,labelledBy:"title"},t.createElement(Pe.x,null,t.createElement(he.O,{label:k},t.createElement(ye.$,{isCurrent:!0},k))),t.createElement(Ce.J9,{enableReinitialize:!0,initialValues:N,onSubmit:te,validationSchema:Ie,validateOnChange:!1},O=>{let{errors:R,handleChange:q,values:J}=O;return t.createElement(a.l0,null,t.createElement(De.f,null,t.createElement($.k,{direction:"column",alignItems:"stretch",gap:6},z!=="create"&&t.createElement(Ue,{registrationToken:_}),t.createElement(Z.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},L({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(Z.x,{paddingTop:4},t.createElement($.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(me.r,{gap:5},Ae.map(de=>de.map(U=>t.createElement(ie.P,(0,ee.Z)({key:U.name},U.size),t.createElement(a.jm,(0,ee.Z)({},U,{disabled:f,error:R[U.name],onChange:q,value:J[U.name]}))))))))),t.createElement(Z.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},L({id:"global.roles",defaultMessage:"User's role"})),t.createElement(Z.x,{paddingTop:4},t.createElement(me.r,{gap:5},t.createElement(ie.P,{col:6,xs:12},t.createElement(Te.Z,{disabled:f,error:R.roles,onChange:q,value:J.roles})),Y.map(de=>de.map(U=>t.createElement(ie.P,(0,ee.Z)({key:U.name},U.size),t.createElement(a.jm,(0,ee.Z)({},U,{disabled:f,onChange:q,value:J[U.name]})))))))))),t.createElement(Oe.m,{startActions:t.createElement(oe.z,{variant:"tertiary",onClick:T,type:"button"},L({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:be}))}))};ge.propTypes={onToggle:E().func.isRequired,onSuccess:E().func.isRequired};var Be=ge;const ce=({pagination:M})=>t.createElement(Z.x,{paddingTop:4},t.createElement($.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:M})));ce.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ce.propTypes={pagination:E().shape({page:E().number,pageCount:E().number,pageSize:E().number,total:E().number})};var Se=ce,_e=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],We=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:M},{formatMessage:S}){return t.createElement(b.Z,{textColor:"neutral800"},M.map(T=>S({id:`Settings.permissions.users.${T.code}`,defaultMessage:T.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:M},{formatMessage:S}){return t.createElement($.k,null,t.createElement(a.qb,{isActive:M,variant:M?"success":"danger"}),t.createElement(b.Z,{textColor:"neutral800"},S({id:M?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:M?"Active":"Inactive"})))}}];const Ke=(()=>window&&window.strapi&&window.strapi.isEE?e(21306).Z:e(83119).Z)(),Ze=(()=>window&&window.strapi&&window.strapi.isEE?e(99724).Z:e(9814).Z)(),pe=["ee","license-limit-info"];var xe=()=>{const{post:M}=(0,a.kY)(),{formatAPIError:S}=(0,a.So)(),[T,z]=(0,t.useState)(!1),X=(0,r.v9)(l._),{allowedActions:{canCreate:H,canDelete:I,canRead:_}}=(0,a.ss)(X.settings.users),j=(0,v.useQueryClient)(),L=(0,a.lm)(),{formatMessage:A}=(0,m.Z)(),{search:u}=(0,h.TH)();(0,a.go)(),Ke();const{users:x,pagination:W,isError:Y,isLoading:N,refetch:Q}=(0,P.R)(g().parse(u,{ignoreQueryPrefix:!0}),{enabled:_}),k=We.map(f=>({...f,metadatas:{...f.metadatas,label:A(f.metadatas.label)}})),te=A({id:"global.users",defaultMessage:"Users"}),ae=()=>{z(f=>!f)},w=(0,v.useMutation)(async f=>{await M("/admin/users/batch-delete",{ids:f})},{async onSuccess(){await Q(),await j.refetchQueries(pe)},onError(f){L({type:"warning",message:{id:"notification.error",message:S(f),defaultMessage:"An error occured"}})}});return t.createElement(o.o,{"aria-busy":N},t.createElement(a.SL,{name:"Users"}),t.createElement(i.T,{primaryAction:H&&t.createElement(Ze,{onClick:ae}),title:te,subtitle:A({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),_&&t.createElement(s.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:A({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:te})}),t.createElement(p.Z,{displayedFilters:_e}))}),t.createElement(c.D,{canRead:_},!_&&t.createElement(a.ZF,null),Y&&t.createElement("div",null,"TODO: An error occurred"),_&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:N,onConfirmDeleteAll:w.mutateAsync,onConfirmDelete:f=>w.mutateAsync([f]),headers:k,rows:x,withBulkActions:!0,withMainAction:I},t.createElement(fe,{canDelete:I,headers:k,rows:x,withBulkActions:!0,withMainAction:I})),W&&t.createElement(Se,{pagination:W}))),T&&t.createElement(Be,{onSuccess:async()=>{await Q(),await j.refetchQueries(pe)},onToggle:ae}))},Fe=()=>{const M=(0,r.v9)(l._);return t.createElement(a.O4,{permissions:M.settings.users.main},t.createElement(xe,null))}},76779:function(C,n,e){var t=e(32735),a=e(50563),r=e(19565),l=e(47765),o=e(60216),i=e.n(o),s=e(67879);const c=({children:d,target:g})=>{const m=(0,r.lm)(),{formatMessage:v}=(0,s.Z)(),{copy:h}=(0,r.VP)(),P=v({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),p=async()=>{await h(g)&&m({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(r.Y_,{endAction:t.createElement(a.h,{label:P,noBorder:!0,icon:t.createElement(l.Z,null),onClick:p}),title:g,titleEllipsis:!0,subtitle:d,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};c.propTypes={children:i().oneOfType([i().element,i().string]).isRequired,target:i().string.isRequired},n.Z=c},16325:function(C,n,e){var t=e(32735),a=e(60216),r=e.n(a),l=e(67879),o=e(78246),i=e(76779);const s=({registrationToken:c})=>{const{formatMessage:d}=(0,l.Z)(),g=`${window.location.origin}${o.Z}auth/register?registrationToken=${c}`;return t.createElement(i.Z,{target:g},d({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:r().string},n.Z=s},4397:function(C,n,e){var t=e(32735),a=e(68465),r=e(84967),l=e(19565),o=e(27169),i=e(60216),s=e.n(i),c=e(67879),d=e(20108),g=e(8471);const m=(0,g.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,v=g.ZP.div`
  animation: ${m} 2s infinite linear;
`,h=()=>t.createElement(v,null,t.createElement(o.Z,null)),P=async()=>{const{get:D}=(0,l.tg)(),{data:B}=await D("/admin/roles");return B.data},p=({disabled:D,error:B,onChange:F,value:V})=>{const{status:b,data:$}=(0,d.useQuery)(["roles"],P,{staleTime:5e4}),{formatMessage:K}=(0,c.Z)(),Z=B?K({id:B,defaultMessage:B}):"",se=K({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),ne=K({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),re=K({id:"app.components.Select.placeholder",defaultMessage:"Select"}),E=b==="loading"?t.createElement(h,null):void 0;return t.createElement(a.P,{id:"roles",disabled:D,error:Z,hint:ne,label:se,name:"roles",onChange:y=>{F({target:{name:"roles",value:y}})},placeholder:re,multi:!0,startIcon:E,value:V.map(y=>y.toString()),withTags:!0,required:!0},($||[]).map(y=>t.createElement(r.W,{key:y.id,value:y.id.toString()},K({id:`global.${y.code}`,defaultMessage:y.name}))))};p.defaultProps={disabled:!1,error:void 0},p.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired},n.Z=p},99724:function(C,n,e){var t=e(32735),a=e(87933),r=e(63919),l=e(99140),o=e(41415),i=e(69932),s=e(7961),c=e(36866),d=e.n(c),g=e(60216),m=e.n(g),v=e(67879),h=e(58414);const P=({onClick:p})=>{const{formatMessage:D}=(0,v.Z)(),{license:B}=(0,h.q5)(),{permittedSeats:F,shouldStopCreate:V}=B?.data??{};return t.createElement(a.k,{gap:2},!d()(F)&&V&&t.createElement(r.u,{description:D({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},t.createElement(l.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:i.Z})),t.createElement(o.z,{"data-testid":"create-user-button",onClick:p,startIcon:t.createElement(s.Z,null),size:"S",disabled:V},D({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};P.propTypes={onClick:m().func.isRequired},n.Z=P},28890:function(C,n,e){var t=e(32735),a=e(60216),r=e.n(a),l=e(67879),o=e(78246),i=e(76779);const s=({registrationToken:c})=>{const{formatMessage:d}=(0,l.Z)();return c?t.createElement(i.Z,{target:`${window.location.origin}${o.Z}auth/register?registrationToken=${c}`},d({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(i.Z,{target:`${window.location.origin}${o.Z}auth/login`},d({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:r().string},n.Z=s},99223:function(C,n,e){e.d(n,{Z:function(){return r}});var t=e(74512),a=e(87933);const r=({startActions:l,endActions:o})=>!l&&!o?null:(0,t.jsxs)(a.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(a.k,{gap:2,wrap:"wrap",children:l}),(0,t.jsx)(a.k,{gap:2,shrink:0,wrap:"wrap",children:o})]})},7961:function(C,n,e){e.d(n,{Z:function(){return r}});var t=e(74512);const a=l=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),r=a}}]);

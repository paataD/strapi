(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[994],{42814:function(dt,Ie){"use strict";Ie.Z=()=>null},82865:function(dt,Ie,d){"use strict";d.r(Ie),d.d(Ie,{App:function(){return zs},default:function(){return bm}});var e=d(32735),Ce=d(74758),te=d(53038),h=d(24989),Re=d(27649),fe=d(82055),Fe=d(96709),Q=d(67879),rt=d(98978),Oe=d.n(rt),ke=d(83983),Ee=d(47510),Le=d(55433),Se=(0,e.createContext)(),Ke=d(47533),he=d(60216),n=d.n(he),Ae=(0,e.createContext)(),zt=d(73386),de=d(56327),y=d(95952),J=d(15062),$e=d(46339),Ye=d(4460);const Tt=()=>({type:Ye.c}),Dt=(t,r)=>({type:Ye.O,layout:t,query:r});var mt=d(70031),ot=d(89793),ve=d.n(ot),Ze=d(17e3),De=d(15335),ue=d(5803),w=d(87933),A=d(72850),qe=d(68625),Ue=d(2669),Xe=d(66694),kt=()=>(0,e.useContext)(Xe.ux),Vt=t=>{const{getAdminInjectedComponents:r}=kt(),[o,s,a]=t.split(".");return r(o,s,a)};const Wr=({area:t,...r})=>Vt(t).map(s=>e.createElement(s.Component,{key:s.name,...r}));Wr.propTypes={area:n().string.isRequired};var Ut=Wr,Vs=d(33795),O=d.n(Vs),pt=d(3685);function Us(t,r){return o=>{const s=r(o.name);return e.createElement(t,{...o,...s})}}var Hs=Us;function Qs(t){const{addComponentToDynamicZone:r,createActionAllowedFields:o,isCreatingEntry:s,formErrors:a,modifiedData:l,moveComponentField:i,removeComponentFromDynamicZone:c,readActionAllowedFields:p,updateActionAllowedFields:u}=(0,h.Wq)(),m=(0,e.useMemo)(()=>O()(l,[t],[]).map(E=>({componentUid:E.__component,id:E.id??E.__temp_key__})),[l,t]),f=(0,e.useMemo)(()=>(s?o:u).includes(t),[t,s,o,u]),g=(0,e.useMemo)(()=>(s?[]:p).includes(t),[t,s,p]);return{addComponentToDynamicZone:r,formErrors:a,isCreatingEntry:s,isFieldAllowed:f,isFieldReadable:g,moveComponentField:i,removeComponentFromDynamicZone:c,dynamicDisplayedComponents:m}}var Gs=Qs,N=d(8471),Ot=d(51968),ye=d(50563),un=d(83828),mn=d(61762),pn=d(89966),He=d(4038),Je=d(47081),Ks=d(61868),Ys=d.n(Ks);function Xs(t,r){return o=>{const s=r(o);return e.createElement(t,{...o,...s})}}var Js=Xs,_s=d(88708),Pt=d.n(_s);function ea({isFromDynamicZone:t,name:r}){const{addNonRepeatableComponentToField:o,createActionAllowedFields:s,isCreatingEntry:a,modifiedData:l,removeComponentFromField:i,readActionAllowedFields:c,updateActionAllowedFields:p,formErrors:u}=(0,h.Wq)(),{contentType:m}=(0,de.PL)(),f=(0,e.useMemo)(()=>{const T=O()(m,["attributes"],{});return Object.keys(T).filter(k=>O()(T,[k,"type"],"")==="dynamiczone")},[m]),g=(0,e.useMemo)(()=>a?s:p,[a,s,p]),E=O()(l,r,null),b=(0,e.useMemo)(()=>(0,y.Ts)(r),[r]),v=(0,e.useMemo)(()=>t&&a||g.filter(k=>k===b[0]).length>0?!0:g.map(k=>k.split(".")).filter(k=>k.length<b.length?!1:Pt()(k,b.length).join(".")===b.join(".")).length>0,[t,a,g,b]),M=(0,e.useMemo)(()=>t||f.includes(b[0])?!0:(a?[]:c).map(k=>k.split(".")).filter(k=>k.length<b.length?!1:Pt()(k,b.length).join(".")===b.join(".")).length>0,[t,f,b,a,c]),D=(0,e.useMemo)(()=>a||v?!1:M,[v,M,a]);return{addNonRepeatableComponentToField:o,formErrors:u,hasChildrenAllowedFields:v,hasChildrenReadableFields:M,isCreatingEntry:a,isReadOnly:D,removeComponentFromField:i,componentValue:E}}var ta=ea,G=d(49372);const na=(0,N.ZP)(A.x)`
  svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,gn=({intlLabel:t,id:r,labelAction:o,name:s,numberOfEntries:a,showNumberOfEntries:l,required:i})=>{const{formatMessage:c}=(0,Q.Z)(),p=t?.id?c(t):s;return e.createElement(A.x,{paddingBottom:1},e.createElement(w.k,null,e.createElement(G.Z,{textColor:"neutral800",htmlFor:r||s,variant:"pi",fontWeight:"bold",as:"label"},p,l&&e.createElement(e.Fragment,null,"\xA0(",a,")"),i&&e.createElement(G.Z,{textColor:"danger600"},"*")),o&&e.createElement(na,{paddingLeft:1},o)))};gn.defaultProps={id:void 0,labelAction:void 0,numberOfEntries:0,required:!1,showNumberOfEntries:!1},gn.propTypes={id:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,numberOfEntries:n().number,required:n().bool,showNumberOfEntries:n().bool};var ra=gn,zr=d(86308);const oa=N.ZP.span`
  > svg {
    width: ${(0,h.Q1)(24)};
    height: ${(0,h.Q1)(24)};
    > circle {
      fill: ${({theme:t})=>t.colors.primary200};
    }
    > path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,fn=({error:t,isReadOnly:r,onClick:o})=>{const{formatMessage:s}=(0,Q.Z)();return e.createElement(e.Fragment,null,e.createElement(A.x,{as:"button",background:"neutral100",borderColor:t?"danger600":"neutral200",disabled:r,hasRadius:!0,onClick:o,paddingTop:9,paddingBottom:9,type:"button"},e.createElement(w.k,{direction:"column",gap:2},e.createElement(w.k,{justifyContent:"center",style:{cursor:r?"not-allowed":"inherit"}},e.createElement(oa,null,e.createElement(zr.Z,null))),e.createElement(w.k,{justifyContent:"center"},e.createElement(G.Z,{textColor:"primary600",variant:"pi",fontWeight:"bold"},s({id:(0,y.OB)("components.empty-repeatable"),defaultMessage:"No entry yet. Click on the button below to add one."}))))),t?.id&&e.createElement(G.Z,{textColor:"danger600",variant:"pi"},s(t,{...t.values})))};fn.defaultProps={error:void 0,isReadOnly:!1},fn.propTypes={error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),isReadOnly:n().bool,onClick:n().func.isRequired};var Vr=fn,sa=d(9086),aa=d.n(sa),ia=d(87702),hn=d.n(ia),Om=d(27217),la=d(88591),ca=d.n(la),yn=d(59845),da=d(20871),ua=d.n(da),ma=d(48375),Ur=d.n(ma),pa=d(31089),ga=d.n(pa),fa=d(16043),ha=d.n(fa),ya=d(5109),ba=d.n(ya),Ea=d(47955),va=d.n(Ea),Ca=d(95706),Ra=d.n(Ca),Ma=d(6658),Ta=d.n(Ma),Da=d(36407),Ia=d.n(Da);(async()=>{await d.e(7347).then(d.bind(d,74194))})();const gt=new(ca())({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(t,r){if(r&&r!=="auto"&&(0,yn.getLanguage)(r))return'<pre class="hljs language-'+gt.utils.escapeHtml(r.toLowerCase())+'"><code>'+(0,yn.highlight)(r,t,!0).value+"</code></pre>";if(r==="auto"){const o=(0,yn.highlightAuto)(t);return'<pre class="hljs language-'+gt.utils.escapeHtml(o.language)+'"><code>'+o.value+"</code></pre>"}return'<pre class="hljs"><code>'+gt.utils.escapeHtml(t)+"</code></pre>"}}).use(ua()).use(Ur(),"warning").use(Ur(),"tip").use(ga()).use(ha()).use(ba()).use(va()).use(Ra()).use(Ta()).use(Ia());gt.renderer.rules.footnote_ref=(t,r,o,s,a)=>'<sup class="footnote-ref"><span>'+a.rules.footnote_caption(t,r,o,s,a)+"</span></sup>",gt.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">\u21A9\uFE0E</span>';var ka=gt,xa=d(13993),Hr=d.n(xa);const Oa={...Hr().defaults,allowedTags:!1,allowedAttributes:{"*":["href","align","alt","center","width","height","type","controls","target"],img:["src","alt"],source:["src","type"]}};var Pa=t=>Hr()(t,Oa),wa=N.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
  font-size: ${14/16}rem;
  background-color: ${({theme:t})=>t.colors.neutral0};
  color: ${({theme:t})=>t.colors.neutral800};
  line-height: ${({theme:t})=>t.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:t})=>t.spaces[2]};
    margin-block-end: ${({theme:t})=>t.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:t})=>t.spaces[2]};
  }

  h1 {
    font-size: ${36/16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30/16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24/16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20/16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:t})=>t.spaces[8]};
    margin-bottom: ${({theme:t})=>t.spaces[7]};
    font-size: ${14/16}rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:t})=>t.colors.neutral150};
    font-style: italic;
    padding: ${({theme:t})=>t.spaces[2]} ${({theme:t})=>t.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:t})=>t.colors.neutral150};

      th {
        padding: ${({theme:t})=>t.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:t})=>t.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:t})=>t.spaces[4]};
      border: 1px solid ${({theme:t})=>t.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14/16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:t})=>t.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:t})=>t.spaces[4]};
    margin-block-end: ${({theme:t})=>t.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:t})=>t.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:t})=>t.spaces[4]};
    margin-block-end: ${({theme:t})=>t.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:t})=>t.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;const bn=({data:t})=>{const r=(0,e.useMemo)(()=>Pa(ka.render(t.replaceAll("\\n",`
`)||"")),[t]);return e.createElement(wa,null,e.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))};bn.defaultProps={data:""},bn.propTypes={data:n().string};var Qr=(0,e.memo)(bn);const Fa=N.ZP.div`
  cursor: ${({disabled:t})=>t?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:t})=>t.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14/16}rem;
    height: ${({isExpandMode:t})=>t?"100%":"290px"};
    color: ${({theme:t})=>t.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:t})=>`${t.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:t})=>`${t.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:t})=>`${t.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:t})=>t.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:t})=>t.colors.neutral800} !important;
  }
`;var En=d(69783);const Pe=(0,N.ZP)(ye.h)`
  padding: ${({theme:t})=>t.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,La=(0,N.ZP)(Pe)`
  svg {
    width: ${8/16}rem;
    height: ${8/16}rem;
  }
`,Gr=(0,N.ZP)(ye.o)`
  margin-left: ${({theme:t})=>t.spaces[4]};
`,Kr=(0,N.ZP)(ye.h)`
  margin: ${({theme:t})=>`0 ${t.spaces[2]}`};
  padding: ${({theme:t})=>t.spaces[2]};

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,Sa=(0,N.ZP)(ye.o)`
  margin-right: ${({theme:t})=>`${t.spaces[2]}`};
`,Aa=N.ZP.div`
  position: relative;
  height: calc(100% - 48px);
`,$a=(0,N.ZP)(En.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:t})=>`${t.spaces[2]}`};
    path {
      fill: ${({theme:t})=>t.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`;var Ht=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,Za=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,Ba=/[*+-]\s/;function qa(t){if(t.getOption("disableInput"))return hn().Pass;for(var r=t.listSelections(),o=[],s=0;s<r.length;s++){var a=r[s].head,l=t.getStateAfter(a.line),i=l.list!==!1,c=l.quote!==0,p=t.getLine(a.line),u=Ht.exec(p),m=/^\s*$/.test(p.slice(0,a.ch));if(!r[s].empty()||!i&&!c||!u||m){t.execCommand("newlineAndIndent");return}if(Za.test(p)){var f=c&&/>\s*$/.test(p),g=!/>\s*$/.test(p);(f||g)&&t.replaceRange("",{line:a.line,ch:0},{line:a.line,ch:a.ch+1}),o[s]=`
`}else{var E=u[1],b=u[5],v=!(Ba.test(u[2])||u[2].indexOf(">")>=0),M=v?parseInt(u[3],10)+1+u[4]:u[2].replace("x"," ");o[s]=`
`+E+M+b,v&&Na(t,a)}}t.replaceSelections(o)}function Na(t,r){var o=r.line,s=0,a=0,l=Ht.exec(t.getLine(o)),i=l[1];do{s+=1;var c=o+s,p=t.getLine(c),u=Ht.exec(p);if(u){var m=u[1],f=parseInt(l[3],10)+s-a,g=parseInt(u[3],10),E=g;if(i===m&&!isNaN(g))f===g&&(E=g+1),f>g&&(E=f+1),t.replaceRange(p.replace(Ht,m+E+u[4]+u[5]),{line:c,ch:0},{line:c,ch:p.length});else{if(i.length>m.length||i.length<m.length&&s===1)return;a+=1}}}while(u)}var ja=qa;const vn=({disabled:t,editorRef:r,error:o,isPreviewMode:s,isExpandMode:a,name:l,onChange:i,placeholder:c,textareaRef:p,value:u})=>{const m=(0,e.useRef)(i);return(0,e.useEffect)(()=>{r.current=hn().fromTextArea(p.current,{lineWrapping:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:!1,"Shift-Tab":!1},readOnly:!1,smartIndent:!1,placeholder:c,spellcheck:!0,inputStyle:"contenteditable"}),hn().commands.newlineAndIndentContinueMarkdownList=ja,r.current.on("change",f=>{m.current({target:{name:l,value:f.getValue(),type:"wysiwyg"}})})},[r,p,l,c]),(0,e.useEffect)(()=>{u&&!r.current.hasFocus()&&r.current.setValue(u)},[r,u]),(0,e.useEffect)(()=>{s||t?r.current.setOption("readOnly","nocursor"):r.current.setOption("readOnly",!1)},[t,s,r]),(0,e.useEffect)(()=>{o?r.current.setOption("screenReaderLabel",o):r.current.setOption("screenReaderLabel","Editor")},[r,o]),e.createElement(Aa,null,e.createElement(Fa,{isExpandMode:a,disabled:t||s},e.createElement("textarea",{ref:p})),s&&e.createElement(Qr,{data:u}))};vn.defaultProps={disabled:!1,error:void 0,isPreviewMode:!1,isExpandMode:!1,placeholder:"",value:""},vn.propTypes={disabled:n().bool,editorRef:n().shape({current:n().any}).isRequired,error:n().string,isPreviewMode:n().bool,isExpandMode:n().bool,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().string,textareaRef:n().shape({current:n().any}).isRequired,value:n().string};var Wa=vn,Ne=d(68465),be=d(84967),me=d(41415),za=d(54015),Yr=d(67563),Xr=d(73906),Jr=d(49844),_r=d(99283),eo=d(49825),Va=d(83139),Ua=d(35635),Ha=d(20063),Qa=d(80601),Ga=d(11417),Ka=d(43231),Ya=d(65663);const Cn=({disabled:t,editorRef:r,isExpandMode:o,isPreviewMode:s,onActionClick:a,onToggleMediaLib:l,onTogglePreviewMode:i})=>{const[c,p]=(0,e.useState)(!1),{formatMessage:u}=(0,Q.Z)(),m=u({id:"components.Wysiwyg.selectOptions.title",defaultMessage:"Add a title"}),f=(0,e.useRef)(),g=()=>{p(E=>!E)};return t||s?e.createElement(w.k,{padding:2,background:"neutral100",justifyContent:"space-between"},e.createElement(to,null,e.createElement(Ne.P,{disabled:!0,placeholder:m,size:"S",label:m},e.createElement(be.W,{value:"h1"},"h1"),e.createElement(be.W,{value:"h2"},"h2"),e.createElement(be.W,{value:"h3"},"h3"),e.createElement(be.W,{value:"h4"},"h4"),e.createElement(be.W,{value:"h5"},"h5"),e.createElement(be.W,{value:"h6"},"h6")),e.createElement(Gr,null,e.createElement(Pe,{disabled:!0,id:"Bold",label:"Bold",name:"Bold",icon:e.createElement(Xr.Z,null)}),e.createElement(Pe,{disabled:!0,id:"Italic",label:"Italic",name:"Italic",icon:e.createElement(Jr.Z,null)}),e.createElement(Pe,{disabled:!0,id:"Underline",label:"Underline",name:"Underline",icon:e.createElement(_r.Z,null)})),e.createElement(Kr,{disabled:!0,id:"more",label:"More",icon:e.createElement(eo.Z,null)})),!o&&e.createElement(me.z,{onClick:i,variant:"tertiary",id:"preview"},u({id:"components.Wysiwyg.ToggleMode.markdown-mode",defaultMessage:"Markdown mode"}))):e.createElement(w.k,{padding:2,background:"neutral100",justifyContent:"space-between"},e.createElement(to,null,e.createElement(Ne.P,{placeholder:m,label:m,size:"S",onChange:E=>a(E,r)},e.createElement(be.W,{value:"h1"},"h1"),e.createElement(be.W,{value:"h2"},"h2"),e.createElement(be.W,{value:"h3"},"h3"),e.createElement(be.W,{value:"h4"},"h4"),e.createElement(be.W,{value:"h5"},"h5"),e.createElement(be.W,{value:"h6"},"h6")),e.createElement(Gr,null,e.createElement(Pe,{onClick:()=>a("Bold",r),id:"Bold",label:"Bold",name:"Bold",icon:e.createElement(Xr.Z,null)}),e.createElement(Pe,{onClick:()=>a("Italic",r),id:"Italic",label:"Italic",name:"Italic",icon:e.createElement(Jr.Z,null)}),e.createElement(Pe,{onClick:()=>a("Underline",r),id:"Underline",label:"Underline",name:"Underline",icon:e.createElement(_r.Z,null)})),e.createElement(Kr,{ref:f,onClick:g,id:"more",label:"More",icon:e.createElement(eo.Z,null)}),c&&e.createElement(za.J2,{centered:!0,source:f,spacing:4,id:"popover"},e.createElement(Yr.i,{onEscape:g,restoreFocus:!1},e.createElement(w.k,null,e.createElement(Sa,null,e.createElement(Pe,{onClick:()=>a("Strikethrough",r,g),id:"Strikethrough",label:"Strikethrough",name:"Strikethrough",icon:e.createElement(Va.Z,null)}),e.createElement(Pe,{onClick:()=>a("BulletList",r,g),id:"BulletList",label:"BulletList",name:"BulletList",icon:e.createElement(Ua.Z,null)}),e.createElement(Pe,{onClick:()=>a("NumberList",r,g),id:"NumberList",label:"NumberList",name:"NumberList",icon:e.createElement(Ha.Z,null)})),e.createElement(ye.o,null,e.createElement(Pe,{onClick:()=>a("Code",r,g),id:"Code",label:"Code",name:"Code",icon:e.createElement(Qa.Z,null)}),e.createElement(Pe,{onClick:()=>{g(),l()},id:"Image",label:"Image",name:"Image",icon:e.createElement(Ga.Z,null)}),e.createElement(La,{onClick:()=>a("Link",r,g),id:"Link",label:"Link",name:"Link",icon:e.createElement(Ka.Z,null)}),e.createElement(Pe,{onClick:()=>a("Quote",r,g),id:"Quote",label:"Quote",name:"Quote",icon:e.createElement(Ya.Z,null)})))))),i&&e.createElement(me.z,{onClick:i,variant:"tertiary",id:"preview"},u({id:"components.Wysiwyg.ToggleMode.preview-mode",defaultMessage:"Preview mode"})))};Cn.defaultProps={isPreviewMode:!1,onActionClick(){},onToggleMediaLib(){},onTogglePreviewMode:void 0},Cn.propTypes={disabled:n().bool.isRequired,editorRef:n().shape({current:n().any}).isRequired,isExpandMode:n().bool.isRequired,isPreviewMode:n().bool,onActionClick:n().func,onToggleMediaLib:n().func,onTogglePreviewMode:n().func};var Xa=Cn;const to=(0,N.ZP)(w.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;var Ja=d(18070);const Rn=({onToggleExpand:t})=>{const{formatMessage:r}=(0,Q.Z)();return e.createElement(A.x,{padding:2,background:"neutral100",hasRadius:!0},e.createElement(w.k,{justifyContent:"flex-end",alignItems:"flex-end"},e.createElement($a,{id:"expand",onClick:t},e.createElement(G.Z,null,r({id:"components.WysiwygBottomControls.fullscreen",defaultMessage:"Expand"})),e.createElement(Ja.Z,null))))};Rn.defaultProps={onToggleExpand(){}},Rn.propTypes={onToggleExpand:n().func};var _a=Rn;const Mn=({id:t,error:r,name:o,hint:s})=>s.length===0||r?null:e.createElement(G.Z,{as:"p",variant:"pi",id:`${t||o}-hint`,textColor:"neutral600"},s);Mn.defaultProps={id:void 0,error:void 0,hint:""},Mn.propTypes={hint:n().oneOfType([n().string,n().array]),error:n().string,id:n().string,name:n().string.isRequired};var ei=Mn;const no=(t,r)=>{let o;switch(t){case"Strikethrough":o=`~~${r}~~`;break;case"Bold":o=`**${r}**`;break;case"Italic":o=`_${r}_`;break;case"Underline":o=`<u>${r}</u>`;break;case"Code":o=`\`\`\`
${r}
\`\`\``;break;case"Link":o=`[${r}](link)`;break;case"Quote":o=`>${r}`;break;default:o=r}return o},ro=t=>{let r,o={start:t.length,end:0};switch(t){case"Strikethrough":r=`~~${t}~~`,o.end=2;break;case"Bold":r=`**${t}**`,o.end=2;break;case"Italic":r=`_${t}_`,o.end=1;break;case"alt":r=`[${t}]()`,o.end=3;break;case"Underline":r=`<u>${t}</u>`,o.end=4;break;case"Code":r=`\`\`\`
${t}
\`\`\``,o.end=3;break;case"Link":r=`[${t}](link)`,o.end=7;break;case"Quote":r=`>${t}`,o.end=0;break;default:r=""}return{editedText:r,selection:o}},oo=t=>{let r;switch(t){case"BulletList":r="- ";break;case"NumberList":r="1. ";break;case"h1":r="# ";break;case"h2":r="## ";break;case"h3":r="### ";break;case"h4":r="#### ";break;case"h5":r="##### ";break;case"h6":r="###### ";break;default:return""}return r},so=(t,r)=>{const o=t.current.getSelection();let s;if(o){const a=no(r,o);t.current.replaceSelection(a),t.current.focus()}else{s=ro(r),t.current.replaceSelection(s.editedText),t.current.focus();const{line:a,ch:l}=t.current.getCursor(),i=l-s.selection.end,c=l-s.selection.end-s.selection.start;t.current.setSelection({line:a,ch:c},{line:a,ch:i})}},ti=(t,r)=>{const o=t.current.getDoc(),s=r==="BulletList"?"- ":"1. ";if(o.somethingSelected()){const a=o.listSelections();let l=null;t.current.operation(function(){a.forEach(function(i){const c=[i.head.line,i.anchor.line].sort();l==null&&(l=o.getLine(c[0]).startsWith(s));for(let p=c[0];p<=c[1];p++)if(l)o.getLine(p).startsWith(s)&&o.replaceRange("",{line:p,ch:0},{line:p,ch:s.length});else{const u=r==="BulletList"?"- ":`${p+1}. `;o.replaceRange(u,{line:p,ch:0})}})})}else{let{line:a}=o.getCursor();const l=oo(r),i=t.current.getLine(a),c=l+i;t.current.setSelection({line:a,ch:0},{line:a,ch:i.length}),t.current.replaceSelection(c)}t.current.focus()},ni=(t,r)=>{let{line:o}=t.current.getCursor();const s=oo(r),a=t.current.getLine(o),l=a.replace(/#{1,6}\s/g,"").trim(),i=s+l;t.current.setSelection({line:o,ch:0},{line:o,ch:a.length}),t.current.replaceSelection(i),setTimeout(()=>{const c=t.current.getLine(o).length;t.current.focus(),t.current.setCursor({line:o,ch:c})},0)},ri=(t,r)=>{let{line:o,ch:s}=t.current.getCursor();r.forEach((a,l)=>{let i=t.current.getLine(o).length;t.current.setCursor({line:o,ch:i}),(l>0||l===0&&s!==0)&&(i=t.current.getLine(o).length,t.current.setCursor({line:o,ch:i}),o++,t.current.replaceSelection(`
`)),a.mime.includes("image")?t.current.replaceSelection(`![${a.alt}](${a.url})`):t.current.replaceSelection(`[${a.alt}](${a.url})`)}),setTimeout(()=>t.current.focus(),0)},oi=(t,r,o,s,a)=>{const l=no(r,a),i=t.current.getRange({line:o+1,ch:0},{line:1/0,ch:1/0});if(t.current.replaceRange("",{line:o+1,ch:0},{line:1/0,ch:1/0}),t.current.replaceSelection(""),t.current.setCursor({line:o,ch:s}),t.current.replaceSelection(`
`),t.current.replaceSelection(l),r==="Code"){let{line:c}=t.current.getCursor();t.current.setCursor({line:c-1,ch:a.length})}t.current.replaceRange(i,{line:o+4,ch:0},{line:1/0,ch:1/0}),t.current.focus()},si=(t,r,o,s)=>{const a=ro(r),l=t.current.getRange({line:o+1,ch:0},{line:1/0,ch:1/0});if(t.current.replaceRange("",{line:o+1,ch:0},{line:1/0,ch:1/0}),t.current.setCursor({line:o,ch:s}),t.current.replaceSelection(`
`),t.current.replaceSelection(a.editedText),r==="Code")o+=2,t.current.setSelection({line:o,ch:0},{line:o,ch:4});else{o+=1;let{ch:i}=t.current.getCursor(),c=i-a.selection.end,p=i-a.selection.end-a.selection.start;t.current.setSelection({line:o,ch:p},{line:o,ch:c})}t.current.replaceRange(l,{line:o+2,ch:0},{line:1/0,ch:1/0}),t.current.focus()},ai=(t,r)=>{const o=t.current.getSelection();let{line:s}=t.current.getCursor(),a=t.current.getLine(s).length;o?oi(t,r,s,a,o):si(t,r,s,a)};var ii=d(71933),li=d(74464);const ci=(t,r)=>`${t}${Math.floor(r*255).toString(16).padStart(2,0)}`,di=(0,N.ZP)(w.k)`
  background: ${({theme:t})=>ci(t.colors.neutral800,.2)};
`,ui=(0,N.ZP)(A.x)`
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
`,mi=(0,N.ZP)(En.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:t})=>`${t.spaces[2]}`};

    path {
      fill: ${({theme:t})=>t.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`,Tn=({children:t,isExpandMode:r,error:o,previewContent:s,onCollapse:a})=>{const{formatMessage:l}=(0,Q.Z)();return(0,h.F5)(r),r?e.createElement(ii.h,{role:"dialog","aria-modal":!1},e.createElement(Yr.i,{onEscape:a},e.createElement(di,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:a},e.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"70%",height:"70%",onClick:i=>i.stopPropagation()},e.createElement(w.k,{height:"100%",alignItems:"flex-start"},e.createElement(ui,{flex:"1",height:"100%"},t),e.createElement(w.k,{alignItems:"start",direction:"column",flex:1,height:"100%",width:"100%"},e.createElement(w.k,{height:(0,h.Q1)(48),background:"neutral100",justifyContent:"flex-end",shrink:0,width:"100%"},e.createElement(mi,{onClick:a},e.createElement(G.Z,null,l({id:"components.Wysiwyg.collapse",defaultMessage:"Collapse"})),e.createElement(li.Z,null))),e.createElement(A.x,{position:"relative",height:"100%",width:"100%"},e.createElement(Qr,{data:s})))))))):e.createElement(A.x,{borderColor:o?"danger600":"neutral200",borderStyle:"solid",borderWidth:"1px",hasRadius:!0},t)};Tn.defaultProps={error:void 0,previewContent:""},Tn.propTypes={children:n().node.isRequired,error:n().string,isExpandMode:n().bool.isRequired,previewContent:n().string,onCollapse:n().func.isRequired};const pi=(0,N.ZP)(A.x)`
  svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,gi=(0,N.ZP)(G.Z)`
  line-height: 0;
`,Dn=({hint:t,disabled:r,error:o,intlLabel:s,labelAction:a,name:l,onChange:i,placeholder:c,value:p,required:u})=>{const{formatMessage:m}=(0,Q.Z)(),f=(0,e.useRef)(null),g=(0,e.useRef)(null),[E,b]=(0,e.useState)(!1),[v,M]=(0,e.useState)(!1),[D,T]=(0,e.useState)(!1),{components:P}=(0,h.yX)(),k=P["media-library"],C=()=>M(F=>!F),R=()=>b(F=>!F),Z=()=>{b(!1),T(F=>!F)},j=(F,X,W)=>{switch(F){case"Link":case"Strikethrough":{so(X,F),W();break}case"Code":case"Quote":{ai(X,F),W();break}case"Bold":case"Italic":case"Underline":{so(X,F);break}case"BulletList":case"NumberList":{ti(X,F),W();break}case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":{ni(X,F);break}default:}},$=F=>{const X=F.map(W=>({alt:W.alternativeText||W.name,url:(0,h.CR)(W.url),mime:W.mime}));ri(g,X),M(!1)},q=c?m({id:c.id,defaultMessage:c.defaultMessage},{...c.values}):"",H=s.id?m({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):l;return e.createElement(e.Fragment,null,e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(w.k,{gap:1},e.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},H,u&&e.createElement(gi,{textColor:"danger600"},"*")),a&&e.createElement(pi,{paddingLeft:1},a)),e.createElement(Tn,{isExpandMode:D,error:o,previewContent:p,onCollapse:Z},e.createElement(Xa,{isExpandMode:D,editorRef:g,isPreviewMode:E,onActionClick:j,onToggleMediaLib:C,onTogglePreviewMode:D?void 0:R,disabled:r}),e.createElement(Wa,{disabled:r,isExpandMode:D,editorRef:g,error:o,isPreviewMode:E,name:l,onChange:i,placeholder:q,textareaRef:f,value:p}),!D&&e.createElement(_a,{onToggleExpand:Z})),e.createElement(ei,{hint:t,name:l,error:o})),o&&e.createElement(A.x,{paddingTop:1},e.createElement(G.Z,{variant:"pi",textColor:"danger600","data-strapi-field-error":!0},o)),v&&e.createElement(k,{onClose:C,onSelectAssets:$}))};Dn.defaultProps={disabled:!1,error:"",labelAction:void 0,placeholder:null,required:!1,value:"",hint:""},Dn.propTypes={hint:n().oneOfType([n().string,n().array]),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,value:n().string};var fi=Dn,In=d(10369),hi=d(38705),wt=d(69932),yi=d(27169),ao=d(44647),io=d(75536),bi=/^[A-Za-z0-9-_.~]*$/,Ei=d(63642);const vi=(0,N.ZP)(Ei.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:t})=>t.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,lo=(0,N.ZP)(w.k)`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;

    path {
      fill: ${({theme:t,available:r})=>r?t.colors.success600:t.colors.danger600};
    }
  }
`,Ci=N.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Ri=(0,N.ZP)(w.k)`
  animation: ${Ci} 2s infinite linear;
`,kn=({attribute:t,contentTypeUID:r,hint:o,disabled:s,error:a,intlLabel:l,labelAction:i,name:c,onChange:p,value:u,placeholder:m,required:f})=>{const{modifiedData:g,initialData:E,layout:b}=(0,h.Wq)(),[v,M]=(0,e.useState)(!1),[D,T]=(0,e.useState)(null),P=(0,io.Z)(u,300),k=(0,e.useRef)(),C=(0,h.lm)(),{formatAPIError:R}=(0,h.So)(),Z=E[c],{formatMessage:j}=(0,Q.Z)(),$=b?.options?.timestamps??0,q=!E[$],H=(0,io.Z)(g[t.targetField],300),[F,X]=(0,e.useState)(!1),[W,Y]=(0,e.useState)(null),{post:B}=(0,h.kY)(),V=l.id?j({id:l.id,defaultMessage:l.defaultMessage},{...l.values}):c,x=m?j({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"";k.current=async(S=!1)=>{M(!0);try{const{data:{data:oe}}=await B((0,y.IF)("uid/generate"),{contentTypeUID:r,field:c,data:g});p({target:{name:c,value:oe,type:"text"}},S),M(!1)}catch(oe){M(!1),C({type:"warning",message:R(oe)})}};const L=async()=>{if(u){M(!0);try{const{data:S}=await B((0,y.IF)("uid/check-availability"),{contentTypeUID:r,field:c,value:u?u.trim():""});M(!1),T(S)}catch(S){M(!1),C({type:"warning",message:R(S)})}}};(0,e.useEffect)(()=>{!u&&t.required&&k.current(!0)},[t.required,k,u]),(0,e.useEffect)(()=>{P?.trim().match(bi)&&P!==Z&&L(),P||T(null)},[Z,P]),(0,e.useEffect)(()=>{let S;return D?.isAvailable&&(S=setTimeout(()=>{T(null)},4e3)),()=>{S&&clearTimeout(S)}},[D]),(0,e.useEffect)(()=>{!F&&q&&H&&g[t.targetField]&&!u&&k.current(!0)},[H,F,q]);const z=()=>{Y(j({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}))},K=()=>{Y(null)},I=S=>{S.target.value&&q&&X(!0),p(S)};return e.createElement(In.o,{disabled:s,error:a,endAction:e.createElement(w.k,{position:"relative",gap:1},D&&!W&&e.createElement(lo,{alignItems:"center",gap:1,justifyContent:"flex-end",available:!!D?.isAvailable,"data-not-here-outer":!0,position:"absolute",pointerEvents:"none",right:6,width:"100px"},D?.isAvailable?e.createElement(hi.Z,null):e.createElement(wt.Z,null),e.createElement(G.Z,{textColor:D.isAvailable?"success600":"danger600",variant:"pi"},j(D.isAvailable?{id:"content-manager.components.uid.available",defaultMessage:"Available"}:{id:"content-manager.components.uid.unavailable",defaultMessage:"Unavailable"}))),!s&&e.createElement(e.Fragment,null,W&&e.createElement(lo,{alignItems:"center",justifyContent:"flex-end",gap:1},e.createElement(G.Z,{textColor:"primary600",variant:"pi"},W)),e.createElement(vi,{onClick:()=>k.current(),label:j({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}),onMouseEnter:z,onMouseLeave:K},v?e.createElement(Ri,{"data-testid":"loading-wrapper"},e.createElement(yi.Z,null)):e.createElement(ao.Z,null)))),hint:o,label:V,labelAction:i,name:c,onChange:I,placeholder:x,value:u||"",required:f})};kn.propTypes={attribute:n().shape({targetField:n().string,required:n().bool}).isRequired,contentTypeUID:n().string.isRequired,disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,value:n().string,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,hint:n().oneOfType([n().string,n().array])},kn.defaultProps={disabled:!1,error:void 0,labelAction:void 0,placeholder:void 0,value:"",required:!1,hint:""};var Mi=kn,Ti=d(88423),xn=d.n(Ti),Di=d(41044),Ii=d(50428),ki=d(87107),xi=d(28847),co=d(7563),Oi=d(67014),Pi=d(47851),uo=d(99140),Qt=d(63919),On=d(41234),Gt=d(35331);const Pn=({children:t,loadMore:r,search:o,totalNumberOfRelations:s,size:a,...l})=>e.createElement(e.Fragment,null,e.createElement(w.k,{paddingBottom:s>0?3:0,gap:2,justifyContent:"space-between",alignItems:"end",wrap:"wrap"},e.createElement(w.k,{direction:"column",alignItems:"stretch",basis:a<=6?"100%":"70%",gap:1,...l},o),r),t);Pn.defaultProps={search:void 0,loadMore:void 0,totalNumberOfRelations:0},Pn.propTypes={children:n().node.isRequired,search:n().node,loadMore:n().node,size:n().number.isRequired,totalNumberOfRelations:n().number};var mo=d(90553);const Kt=50,ft=4,po=(0,N.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,go=(0,N.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`,wn=({ariaDescribedBy:t,children:r,displayValue:o,canDrag:s,disabled:a,endAction:l,iconButtonAriaLabel:i,style:c,id:p,index:u,name:m,onCancel:f,onDropItem:g,onGrabItem:E,status:b,updatePositionOfRelation:v,...M})=>{const[{handlerId:D,isDragging:T,handleKeyDown:P},k,C,R,Z]=(0,mo.Y)(s&&!a,{type:`${y._Q.RELATION}_${m}`,index:u,item:{displayedValue:o,status:b,id:p},onGrabItem:E,onDropItem:g,onCancel:f,onMoveItem:v,dropSensitivity:"immediate"}),j=(0,y.FE)(k,R);return(0,e.useEffect)(()=>{Z((0,Ot.rX)())},[Z]),e.createElement(A.x,{style:c,as:"li",ref:C,"aria-describedby":t,cursor:s?"all-scroll":"default"},T?e.createElement(wi,null):e.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:s?2:4,paddingRight:4,hasRadius:!0,borderSize:1,borderColor:"neutral200",background:a?"neutral150":"neutral0",justifyContent:"space-between",ref:s?j:void 0,"data-handler-id":D,...M},e.createElement(po,{gap:1},s?e.createElement(ye.h,{forwardedAs:"div",role:"button",tabIndex:0,"aria-label":i,noBorder:!0,onKeyDown:P,disabled:a},e.createElement(Je.Z,null)):null,e.createElement(go,{justifyContent:"space-between"},r)),l&&e.createElement(A.x,{paddingLeft:4},l)))},wi=()=>e.createElement(A.x,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${ft}px)`});wn.defaultProps={ariaDescribedBy:"",canDrag:!1,displayValue:"",disabled:!1,endAction:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,style:void 0,status:void 0,updatePositionOfRelation:void 0},wn.propTypes={ariaDescribedBy:n().string,canDrag:n().bool,children:n().node.isRequired,displayValue:n().string,disabled:n().bool,endAction:n().node,iconButtonAriaLabel:n().string.isRequired,id:n().number.isRequired,index:n().number.isRequired,name:n().string.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,status:n().string,style:n().shape({height:n().number,left:n().number,position:n().string,right:n().number,width:n().string}),updatePositionOfRelation:n().func};const Fi=(0,N.ZP)(A.x)`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({overflowDirection:t})=>t==="top-bottom"||t==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({overflowDirection:t})=>t==="top-bottom"||t==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,Fn=({children:t,overflow:r,...o})=>e.createElement(Fi,{overflowDirection:r,...o},t);Fn.defaultProps={overflow:""},Fn.propTypes={children:n().node.isRequired,overflow:n().oneOf(["top-bottom","bottom","top",""])};var Li=d(67582);const Si=N.ZP.div`
  flex-shrink: 0;
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  margin-right: ${({theme:t})=>t.spaces[2]};
  background-color: ${({theme:t,isDraft:r})=>t.colors[r?"secondary600":"success600"]};
  border-radius: 50%;
`,fo=t=>{const{formatMessage:r}=(0,Q.Z)(),o=Li.c.Option,{publicationState:s,mainField:a,id:l}=t.data;if(s){const i=s==="draft",c={id:(0,y.OB)("components.Select.draft-info-title"),defaultMessage:"State: Draft"},p={id:(0,y.OB)("components.Select.publish-info-title"),defaultMessage:"State: Published"},u=r(i?c:p);return e.createElement(o,{...t},e.createElement(w.k,null,e.createElement(Si,{title:u,isDraft:i}),e.createElement(G.Z,{ellipsis:!0},a??l)))}return e.createElement(o,{...t},a??l)};fo.propTypes={isFocused:n().bool.isRequired,data:n().shape({id:n().number.isRequired,isDraft:n().bool,mainField:n().string,publicationState:n().oneOfType([n().string,n().bool])}).isRequired};const ho=(0,N.ZP)(Ii.r)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,yo=N.ZP.button`
  svg path {
    fill: ${({theme:t,disabled:r})=>r?t.colors.neutral600:t.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:t,disabled:r})=>!r&&t.colors.neutral600};
  }
`,Ln=({canReorder:t,description:r,disabled:o,error:s,iconButtonAriaLabel:a,id:l,name:i,numberOfRelationsToDisplay:c,label:p,labelAction:u,labelLoadMore:m,labelDisconnectRelation:f,listAriaDescription:g,liveText:E,loadingMessage:b,onCancel:v,onDropItem:M,onGrabItem:D,noRelationsMessage:T,onRelationConnect:P,onRelationLoadMore:k,onRelationDisconnect:C,onRelationReorder:R,onSearchNextPage:Z,onSearch:j,placeholder:$,publicationStateTranslations:q,required:H,relations:F,searchResults:X,size:W})=>{const[Y,B]=(0,e.useState)(null),[V,x]=(0,e.useState)(""),L=(0,e.useRef)(),z=(0,e.useRef)(),{data:K}=X,I=F.data,S=I.length??0,oe=(0,e.useMemo)(()=>S>c?Math.min(S,c)*(Kt+ft)+Kt/2:Math.min(S,c)*(Kt+ft),[S,c]),_=!!m&&F.hasNextPage,ae=(0,e.useMemo)(()=>K.flat().filter(Boolean).map(re=>({...re,value:re.id,label:re.mainField})),[K]);(0,e.useEffect)(()=>{if(S<=c)return x("");const re=we=>{const qr=we.target.parentNode.scrollHeight,Nr=we.target.scrollHeight-we.target.scrollTop;return we.target.scrollTop===0?x("bottom"):x(Nr===qr?"top":"top-bottom")},ge=z?.current;return!F.isLoading&&I.length>0&&ge&&z.current.addEventListener("scroll",re),()=>{ge&&ge.removeEventListener("scroll",re)}},[F,I,c,S]);const[U,ie]=(0,e.useState)(!1),Te=(0,e.useRef)(),ze=(0,e.useRef)([]);(0,e.useEffect)(()=>(ae.length>0&&ze.current.length===0&&ie(re=>(re&&(Te.current=setTimeout(()=>{ie(!0)},10)),!1)),()=>{ze.current=ae||[]}),[ae]),(0,e.useEffect)(()=>()=>{Te.current&&clearTimeout(Te.current)},[]);const Nt=()=>{ie(!1)},jt=()=>{ie(!0),j()},Wt=(re,ge)=>{R&&re>=0&&re<I.length&&R(ge,re)},Ge=(0,de.zH)(I.length),Ve=(0,e.useRef)(),tt=()=>{Ve.current="loadMore",k()};(0,e.useEffect)(()=>{Ve.current==="onChange"&&I.length!==Ge?L.current.scrollToItem(I.length,"end"):Ve.current==="loadMore"&&I.length!==Ge&&L.current.scrollToItem(0,"start"),Ve.current=void 0},[Ge,I]);const nt=`${i}-item-instructions`;return e.createElement(ki.g,{error:s,name:i,hint:r,id:l,required:H},e.createElement(Pn,{totalNumberOfRelations:S,size:W,search:e.createElement(e.Fragment,null,e.createElement(xi.Q,{action:u},p),e.createElement(h.JV,{menuPosition:"absolute",menuPlacement:"auto",components:{Option:fo},options:ae,isDisabled:o,isLoading:X.isLoading,error:s,inputId:l,isSearchable:!0,isClear:!0,loadingMessage:()=>b,onChange:re=>{B(null),P(re),Ve.current="onChange"},onInputChange:re=>{B(re),j(re)},onMenuClose:Nt,onMenuOpen:jt,menuIsOpen:U,noOptionsMessage:()=>T,onMenuScrollToBottom:()=>{X.hasNextPage&&Z()},placeholder:$,name:i,value:Y})),loadMore:_&&e.createElement(co.A,{disabled:F.isLoading||F.isFetchingNextPage,onClick:tt,loading:F.isLoading||F.isFetchingNextPage,startIcon:e.createElement(ao.Z,null)},m)},I.length>0&&e.createElement(Fn,{overflow:V},e.createElement(pt.T,{id:nt},g),e.createElement(pt.T,{"aria-live":"assertive"},E),e.createElement(Di.t7,{height:oe,ref:L,outerRef:z,itemCount:S,itemSize:Kt+ft,itemData:{name:i,ariaDescribedBy:nt,canDrag:t,disabled:o,handleCancel:v,handleDropItem:M,handleGrabItem:D,iconButtonAriaLabel:a,labelDisconnectRelation:f,onRelationDisconnect:C,publicationStateTranslations:q,relations:I,updatePositionOfRelation:Wt},itemKey:re=>`${I[re].mainField}_${I[re].id}`,innerElementType:"ol"},Sn)),(r||s)&&e.createElement(A.x,{paddingTop:2},e.createElement(Oi.J,null),e.createElement(Pi.c,null))))},Ai=n().shape({data:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),hasNextPage:n().bool,isFetchingNextPage:n().bool.isRequired,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired}),$i=n().shape({data:n().arrayOf(n().shape({id:n().number.isRequired,href:n().string,mainField:n().oneOfType([n().string,n().number]),publicationState:n().oneOfType([n().string,n().bool])})),hasNextPage:n().bool,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired});Ln.defaultProps={canReorder:!1,description:void 0,disabled:!1,error:void 0,labelAction:null,labelLoadMore:null,liveText:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,required:!1,relations:{data:[]},searchResults:{data:[]}},Ln.propTypes={error:n().string,canReorder:n().bool,description:n().string,disabled:n().bool,iconButtonAriaLabel:n().string.isRequired,id:n().string.isRequired,label:n().string.isRequired,labelAction:n().element,labelLoadMore:n().string,labelDisconnectRelation:n().string.isRequired,listAriaDescription:n().string.isRequired,liveText:n().string,loadingMessage:n().string.isRequired,name:n().string.isRequired,noRelationsMessage:n().string.isRequired,numberOfRelationsToDisplay:n().number.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,onRelationConnect:n().func.isRequired,onRelationDisconnect:n().func.isRequired,onRelationLoadMore:n().func.isRequired,onRelationReorder:n().func.isRequired,onSearch:n().func.isRequired,onSearchNextPage:n().func.isRequired,placeholder:n().string.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,required:n().bool,searchResults:$i,size:n().number.isRequired,relations:Ai};const Sn=({data:t,index:r,style:o})=>{const{ariaDescribedBy:s,canDrag:a,disabled:l,handleCancel:i,handleDropItem:c,handleGrabItem:p,iconButtonAriaLabel:u,name:m,labelDisconnectRelation:f,onRelationDisconnect:g,publicationStateTranslations:E,relations:b,updatePositionOfRelation:v}=t,{publicationState:M,href:D,mainField:T,id:P}=b[r],k=M==="draft"?"secondary":"success";return e.createElement(wn,{ariaDescribedBy:s,canDrag:a,disabled:l,displayValue:String(T??P),iconButtonAriaLabel:u,id:P,index:r,name:m,endAction:e.createElement(yo,{"data-testid":`remove-relation-${P}`,disabled:l,type:"button",onClick:()=>g(b[r]),"aria-label":f},e.createElement(uo.J,{width:"12px",as:Gt.Z})),onCancel:i,onDropItem:c,onGrabItem:p,status:M||void 0,style:{...o,bottom:o.bottom??0+ft,height:o.height??0-ft},updatePositionOfRelation:v},e.createElement(A.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},e.createElement(Qt.u,{description:T??`${P}`},D?e.createElement(ho,{to:D},T??P):e.createElement(G.Z,{textColor:l?"neutral600":"primary600",ellipsis:!0},T??P))),M&&e.createElement(On.q,{variant:k,showBullet:!1,size:"S"},e.createElement(G.Z,{fontWeight:"bold",textColor:`${k}700`},E[M])))};Sn.defaultProps={data:{}},Sn.propTypes={data:n().shape({ariaDescribedBy:n().string.isRequired,canDrag:n().bool.isRequired,disabled:n().bool.isRequired,handleCancel:n().func,handleDropItem:n().func,handleGrabItem:n().func,iconButtonAriaLabel:n().string.isRequired,labelDisconnectRelation:n().string.isRequired,name:n().string.isRequired,onRelationDisconnect:n().func.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,relations:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),updatePositionOfRelation:n().func.isRequired}),index:n().number.isRequired,style:n().object.isRequired};var Zi=Ln,st=d(20108);function Bi(t,r){return o=>{const s=r(o);return e.createElement(t,{...o,...s})}}var qi=Bi;function Ni({componentUid:t,isUserAllowedToEditField:r,isUserAllowedToReadField:o,name:s,queryInfos:a}){const{isCreatingEntry:l,createActionAllowedFields:i,readActionAllowedFields:c,updateActionAllowedFields:p,slug:u,modifiedData:m}=(0,h.Wq)(),f=(0,e.useMemo)(()=>r===!0?!0:(l?i:p).includes(s),[l,i,s,r,p]),g=(0,e.useMemo)(()=>o?!0:(l?[]:c).includes(s),[l,o,s,c]),E=s.split(".");let b;t&&(b=O()(m,E.slice(0,-1))?.id);const v=(0,e.useMemo)(()=>l?null:t?b?(0,y.IF)(`relations/${t}/${b}/${E.at(-1)}`):null:(0,y.IF)(`relations/${u}/${m.id}/${s.split(".").at(-1)}`),[l,t,u,m.id,s,b,E]),M=(0,e.useMemo)(()=>t?(0,y.IF)(`relations/${t}/${s.split(".").at(-1)}`):(0,y.IF)(`relations/${u}/${s.split(".").at(-1)}`),[t,u,s]);return{componentId:b,isComponentRelation:Boolean(t),queryInfos:{...a,endpoints:{search:M,relation:v}},isCreatingEntry:l,isFieldAllowed:f,isFieldReadable:g}}var ji=Ni;function Wi(t,r){return`${(0,y.IF)(`collectionType/${t}/${r??""}`)}`}const at={DRAFT:"draft",PUBLISHED:"published"},An=5,zi=10,$n=(t,{shouldAddLink:r,mainFieldName:o,targetModel:s})=>{const a={...t};return r&&(a.href=Wi(s,a.id)),a.publicationState=!1,a?.publishedAt!==void 0&&(a.publicationState=a.publishedAt?at.PUBLISHED:at.DRAFT),a.mainField=a[o],a},Vi=(t,{shouldAddLink:r=!1,mainFieldName:o,targetModel:s}={})=>[...t].map(a=>$n(a,{shouldAddLink:r,mainFieldName:o,targetModel:s})),Ui=(t,{mainFieldName:r})=>{const{data:o}=t,{pages:s=[]}=o??{};return{...t,data:s.map(a=>a?.results.map(l=>$n(l,{mainFieldName:r}))).filter(Boolean).flat()}},Hi=(t=[],r=[])=>{const o=t.reduce((a,l)=>r.find(i=>i.id===l.id)?a:[...a,l.id],[]),s=r.reduce((a,l)=>t.find(i=>i.id===l.id)?a:[...a,l.id],[]);return[o,s]},Qi=(t,{relation:r,search:o})=>{const[s,a]=(0,e.useState)({}),[l,i]=(0,e.useState)(0),{get:c}=(0,h.kY)(),p=async({pageParam:C=1})=>{try{const{data:R}=await c(r?.endpoint,{params:{...r.pageParams??{},page:C}});return i(C),R}catch{return null}},u=async({pageParam:C=1})=>{try{const{data:R}=await c(o.endpoint,{params:{...o.pageParams??{},...s,page:C}});return R}catch{return null}},{onLoad:m,normalizeArguments:f={}}=r,g=(0,st.useInfiniteQuery)(["relation",...t],p,{cacheTime:0,enabled:r.enabled,getNextPageParam(C){const R=!C?.pagination;if(!(!C||R||C?.pagination.page>=C?.pagination.pageCount))return C.pagination.page+1},select:C=>({...C,pages:C.pages.map(R=>{if(!R)return R;const{data:Z,results:j,pagination:$}=R,q=!!Z;let H=[];return q?H=[Z]:j&&(H=[...j].reverse()),{pagination:$,results:H}})})}),{pageGoal:E}=r,{status:b,data:v,fetchNextPage:M,hasNextPage:D}=g;(0,e.useEffect)(()=>{E>l&&D&&b==="success"&&M({pageParam:l+1})},[E,l,M,D,b]);const T=(0,h.W6)(m);(0,e.useEffect)(()=>{if(b==="success"&&v&&v.pages?.at(-1)?.results&&T){const C=Vi(v.pages.at(-1).results,f);T(C)}},[b,T,v]);const P=(0,st.useInfiniteQuery)(["relation",...t,"search",JSON.stringify(s)],u,{enabled:Object.keys(s).length>0,getNextPageParam(C){if(!(!C?.pagination||C.pagination.page>=C.pagination.pageCount))return C.pagination.page+1}});return{relations:g,search:P,searchFor:(C,R={})=>{a({...R,_q:C})}}},bo=(t,r)=>o=>{const s=o.split(".");return s.reduce((a,l,i)=>{const c=O()(t,a),p=O()(r,[...s.slice(0,i),l,"__temp_key__"]);if(Array.isArray(c)&&typeof p=="number"){const u=c.findIndex(m=>m.__temp_key__===p);return a.push(u.toString()),a}return a.push(l),a},[])},Zn=({error:t,componentId:r,isComponentRelation:o,editable:s,description:a,intlLabel:l,isCreatingEntry:i,isFieldAllowed:c,isFieldReadable:p,labelAction:u,mainField:m,name:f,queryInfos:{endpoints:g,defaultParams:E,shouldDisplayRelationLink:b},placeholder:v,required:M,relationType:D,size:T,targetModel:P})=>{const[k,C]=(0,e.useState)(""),{formatMessage:R}=(0,Q.Z)(),{slug:Z,initialData:j,modifiedData:$,relationConnect:q,relationDisconnect:H,relationLoad:F,relationReorder:X}=(0,h.Wq)(),W=f.split("."),Y=bo(j,$)(f),B=O()($,f,[]),V=Math.ceil(O()(j,f,[]).length/An),{relations:x,search:L,searchFor:z}=Qi([Z,Y.join("."),$.id,E],{relation:{enabled:!!g.relation,endpoint:g.relation,pageGoal:V,pageParams:{...E,pageSize:An},onLoad(re){F({target:{initialDataPath:["initialData",...Y],modifiedDataPath:["modifiedData",...W],value:re}})},normalizeArguments:{mainFieldName:m.name,shouldAddLink:b,targetModel:P}},search:{endpoint:g.search,pageParams:{...E,entityId:i?void 0:o?r:j.id,pageSize:zi}}}),K=(0,e.useMemo)(()=>D.toLowerCase().includes("morph"),[D]),I=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(D),S=(0,e.useMemo)(()=>K?!0:i?!s:!c&&p||!s,[K,i,s,c,p]),oe=re=>{const ge=$n(re,{mainFieldName:m.name,shouldAddLink:b,targetModel:P});q({name:f,value:ge,toOneRelation:I})},_=re=>{H({name:f,id:re.id})},ae=()=>{x.fetchNextPage()},U=(re="")=>{const[ge,we]=Hi(B,O()(j,f));z(re,{idsToInclude:we,idsToOmit:ge})},ie=()=>{L.fetchNextPage()},Te=re=>`${re+1} of ${B.length}`,ze=(re,ge)=>{const we=B[re];C(R({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:we.mainField??we.id,position:Te(ge)})),X({name:f,newIndex:ge,oldIndex:re})},Nt=re=>{const ge=B[re];C(R({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:ge.mainField??ge.id,position:Te(re)}))},jt=re=>{const ge=B[re];C(R({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:ge.mainField??ge.id,position:Te(re)}))},Wt=re=>{const ge=B[re];C(R({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:ge.mainField??ge.id}))};if(!c&&i||!i&&!c&&!p)return e.createElement(h.X0,{name:f,intlLabel:l,labelAction:u});const Ge=B.length,Ve=(O()(j,Y)??[]).length,tt=x.data?.pages[0]?.pagination?.total??0,nt=!x.data&&Ge===Ve?Ge:Ge-Ve+tt;return e.createElement(Zi,{error:t,canReorder:!I,description:a,disabled:S,iconButtonAriaLabel:R({id:(0,y.OB)("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),id:f,label:`${R({id:l.id,defaultMessage:l.defaultMessage})} ${nt>0?`(${nt})`:""}`,labelAction:u,labelLoadMore:i?null:R({id:(0,y.OB)("relation.loadMore"),defaultMessage:"Load More"}),labelDisconnectRelation:R({id:(0,y.OB)("relation.disconnect"),defaultMessage:"Remove"}),listAriaDescription:R({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"}),listHeight:320,liveText:k,loadingMessage:R({id:(0,y.OB)("relation.isLoading"),defaultMessage:"Relations are loading"}),name:f,noRelationsMessage:R({id:(0,y.OB)("relation.notAvailable"),defaultMessage:"No relations available"}),numberOfRelationsToDisplay:An,onDropItem:jt,onGrabItem:Nt,onCancel:Wt,onRelationConnect:oe,onRelationDisconnect:_,onRelationLoadMore:ae,onRelationReorder:ze,onSearch:re=>U(re),onSearchNextPage:()=>ie(),placeholder:R(v||{id:(0,y.OB)("relation.add"),defaultMessage:"Add relation"}),publicationStateTranslations:{[at.DRAFT]:R({id:(0,y.OB)("relation.publicationState.draft"),defaultMessage:"Draft"}),[at.PUBLISHED]:R({id:(0,y.OB)("relation.publicationState.published"),defaultMessage:"Published"})},relations:xn()({...x,data:B},"data","hasNextPage","isFetchingNextPage","isLoading","isSuccess"),required:M,searchResults:Ui(L,{mainFieldName:m.name}),size:T})};Zn.defaultProps={componentId:void 0,editable:!0,error:void 0,description:"",labelAction:null,isComponentRelation:!1,isFieldAllowed:!0,placeholder:null,required:!1},Zn.propTypes={componentId:n().number,editable:n().bool,error:n().string,description:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,isCreatingEntry:n().bool.isRequired,isComponentRelation:n().bool,isFieldAllowed:n().bool,isFieldReadable:n().bool.isRequired,mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired}).isRequired,name:n().string.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,relationType:n().string.isRequired,size:n().number.isRequired,targetModel:n().string.isRequired,queryInfos:n().shape({defaultParams:n().shape({locale:n().string}),endpoints:n().shape({relation:n().string,search:n().string.isRequired}).isRequired,shouldDisplayRelationLink:n().bool.isRequired}).isRequired};const Gi=(0,e.memo)(Zn);var Ki=qi(Gi,ji);function Yi(t,r){return o=>{const s=r(o.keys);return e.createElement(t,{...o,...s})}}var Xi=Yi,Ji=(t,r=!1)=>[{metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},disabled:r,hidden:r},key:"__enum_option_null",value:""},...t.map(o=>({metadatas:{intlLabel:{id:o,defaultMessage:o},hidden:!1,disabled:!1},key:o,value:o}))],_i=d(59578),el=d.n(_i),tl=(t="")=>{switch(el()(t)){case"boolean":return"bool";case"biginteger":return"text";case"decimal":case"float":case"integer":return"number";case"date":case"datetime":case"time":return t;case"email":return"email";case"enumeration":return"select";case"password":return"password";case"string":return"text";case"text":return"textarea";case"media":case"file":case"files":return"media";case"json":return"json";case"wysiwyg":case"WYSIWYG":case"richtext":return"wysiwyg";case"uid":return"uid";default:return t||"text"}},nl=t=>{let r;return t==="float"||t==="decimal"?r=.01:r=1,r};function rl(t){const{createActionAllowedFields:r,formErrors:o,isCreatingEntry:s,modifiedData:a,onChange:l,readActionAllowedFields:i,shouldNotRunValidations:c,updateActionAllowedFields:p}=(0,h.Wq)(),u=(0,e.useMemo)(()=>s?r:p,[s,r,p]),m=(0,e.useMemo)(()=>s?[]:i,[s,i]),f=O()(a,t,null);return{allowedFields:u,formErrors:o,isCreatingEntry:s,onChange:l,readableFields:m,shouldNotRunValidations:c,value:f}}var ol=rl,Eo=["type","model","via","collection","default","plugin","enum","regex","pluginOptions"];function Bn({allowedFields:t,componentUid:r,fieldSchema:o,formErrors:s,isCreatingEntry:a,keys:l,labelAction:i,metadatas:c,onChange:p,readableFields:u,shouldNotRunValidations:m,queryInfos:f,value:g,size:E,customFieldInputs:b}){const{fields:v}=(0,h.yX)(),{formatMessage:M}=(0,Q.Z)(),{contentType:D}=(0,de.PL)(),T=(0,e.useMemo)(()=>!O()(c,"editable",!0),[c]),{type:P,customField:k}=o,C=O()(s,[l],null),R=(0,e.useMemo)(()=>(0,y.Ts)(l),[l]),Z=(0,e.useMemo)(()=>{const oe=aa()(o,m?[...Eo,"required","minLength"]:Eo),_=o.regex||null;if(_){const ae=new RegExp(_);ae&&(oe.regex=ae)}return oe},[o,m]),j=(0,e.useMemo)(()=>O()(Z,["required"],!1),[Z]),$=(0,e.useMemo)(()=>{const oe=O()(D,["attributes"],{});return O()(oe,[R[0],"type"],null)==="dynamiczone"},[D,R]),q=(0,e.useMemo)(()=>tl(P),[P]),H=(0,e.useMemo)(()=>P==="media"&&!g?[]:g,[P,g]),F=(0,e.useMemo)(()=>nl(P),[P]),X=(0,e.useMemo)(()=>{const oe=R.join(".");if(t.includes(oe))return!0;if($)return t.includes(R[0]);if(R.length>1){const ae=Pt()(R,R.length-1).join(".");return t.includes(ae)}return!1},[t,R,$]),W=(0,e.useMemo)(()=>{const oe=R.join(".");if(u.includes(oe))return!0;if($)return u.includes(R[0]);if(R.length>1){const ae=Pt()(R,R.length-1).join(".");return u.includes(ae)}return!1},[u,R,$]),Y=(0,e.useMemo)(()=>W||X,[X,W]),B=(0,e.useMemo)(()=>a?T:W&&!X?!0:T,[T,a,X,W]),V=(0,e.useMemo)(()=>Ji(o.enum||[],j),[o,j]),{label:x,description:L,placeholder:z,visible:K}=c,I=(0,e.useMemo)(()=>{if(!c.step||q!=="datetime"&&q!=="time")return F;if(!H)return c.step;let oe;return q==="datetime"?oe=parseInt(H.substr(14,2),10):q==="time"&&(oe=parseInt(H.slice(-2),10)),oe%c.step===0?c.step:F},[q,H,c.step,F]);if(K===!1)return null;if(!Y)return e.createElement(h.X0,{description:L?{id:L,defaultMessage:L}:null,intlLabel:{id:x,defaultMessage:x},labelAction:i,error:C&&M(C),name:l,required:j});if(P==="relation")return e.createElement(Ki,{...c,...o,componentUid:r,description:c.description?M({id:c.description,defaultMessage:c.description}):void 0,intlLabel:{id:c.label,defaultMessage:c.label},labelAction:i,isUserAllowedToEditField:X,isUserAllowedToReadField:W,name:l,placeholder:c.placeholder?{id:c.placeholder,defaultMessage:c.placeholder}:null,queryInfos:f,size:E,value:g,error:C&&M(C)});const S={uid:Mi,media:v.media,wysiwyg:fi,...v,...b};return e.createElement(h.jm,{attribute:o,autoComplete:"new-password",intlLabel:{id:x,defaultMessage:x},isNullable:q==="bool"&&[null,void 0].includes(o.default),description:L?{id:L,defaultMessage:L}:null,disabled:B,error:C,labelAction:i,contentTypeUID:D.uid,customInputs:S,multiple:o.multiple||!1,name:l,onChange:p,options:V,placeholder:z?{id:z,defaultMessage:z}:null,required:o.required||!1,step:I,type:k||q,value:H,withDefaultValue:!1})}Bn.defaultProps={componentUid:void 0,formErrors:{},labelAction:void 0,size:void 0,value:null,queryInfos:{},customFieldInputs:{}},Bn.propTypes={allowedFields:n().array.isRequired,componentUid:n().string,fieldSchema:n().object.isRequired,formErrors:n().object,keys:n().string.isRequired,isCreatingEntry:n().bool.isRequired,labelAction:n().element,metadatas:n().object.isRequired,onChange:n().func.isRequired,readableFields:n().array.isRequired,size:n().number,shouldNotRunValidations:n().bool.isRequired,value:n().any,queryInfos:n().shape({containsKey:n().string,defaultParams:n().object,endPoint:n().string}),customFieldInputs:n().object};const sl=(0,e.memo)(Bn,ve());var qn=Xi(sl,ol);const Ft=new Map;var Nn=(t=[])=>{const[r,o]=(0,e.useState)(Object.fromEntries(Ft)),s=t.filter(p=>!Ft.get(p)),[a,l]=(0,e.useState)(()=>!!s.length),i=(0,h.mZ)();(0,e.useEffect)(()=>{const p=m=>{o(m),l(!1)},u=async(m,f)=>{const g=await Promise.all(f);m.forEach((E,b)=>{Ft.set(E,g[b].default)}),p(Object.fromEntries(Ft))};if(s.length>0){l(!0);const m=s.reduce((f,g)=>{const E=i.get(g);return E&&f.push(E.components.Input()),f},[]);m.length>0&&u(s,m)}},[s,i]);const c=(0,e.useCallback)(()=>{Ft.clear(),o({})},[]);return{isLazyLoading:a,lazyComponentStore:r,cleanup:c}};const jn=({componentUid:t,isFromDynamicZone:r,isNested:o,name:s})=>{const{getComponentLayout:a}=(0,de.PL)(),i=(0,e.useMemo)(()=>a(t),[t,a]).layouts.edit,{lazyComponentStore:c}=Nn();return e.createElement(A.x,{background:r?"":"neutral100",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,hasRadius:o,borderColor:o?"neutral200":""},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},i.map((p,u)=>e.createElement(De.r,{gap:4,key:u},p.map(({name:m,size:f,metadatas:g,fieldSchema:E,queryInfos:b})=>{const v=E.type==="component",M=`${s}.${m}`;if(v){const D=E.component;return e.createElement(ue.P,{col:f,s:12,xs:12,key:m},e.createElement(Yt,{componentUid:D,intlLabel:{id:g.label,defaultMessage:g.label},isNested:!0,isRepeatable:E.repeatable,max:E.max,min:E.min,name:M,required:E.required||!1}))}return e.createElement(ue.P,{col:f,key:m,s:12,xs:12},e.createElement(qn,{componentUid:t,keys:M,fieldSchema:E,metadatas:g,queryInfos:b,size:f,customFieldInputs:c}))})))))};jn.defaultProps={isFromDynamicZone:!1,isNested:!1},jn.propTypes={componentUid:n().string.isRequired,isFromDynamicZone:n().bool,isNested:n().bool,name:n().string.isRequired};var al=jn,Lt=d(19406),il=d(41119),vo=d.n(il);const ll=N.ZP.span`
  display: block;
  background-color: ${({theme:t})=>t.colors.primary100};
  outline: 1px dashed ${({theme:t})=>t.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:t})=>t.spaces[6]};
`;var cl=()=>e.createElement(ll,{padding:6,background:"primary100"});const dl=(0,N.ZP)(ye.h)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:t,expanded:r})=>r?t.colors.primary600:t.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }
  }
`,ul=(0,N.ZP)(w.k)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({theme:t,expanded:r})=>r?t.colors.primary600:void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,Wn=({componentFieldName:t,componentUid:r,fields:o,index:s,isOpen:a,isReadOnly:l,mainField:i,moveComponentField:c,onClickToggle:p,toggleCollapses:u,onGrabItem:m,onDropItem:f,onCancel:g})=>{const{modifiedData:E,removeRepeatableField:b,triggerFormValidation:v}=(0,h.Wq)(),M=vo()(O()(E,[...t.split("."),i],"")),D=(0,e.useRef)(null),{formatMessage:T}=(0,Q.Z)(),P=t.split(".").slice(0,-1).join("."),[{handlerId:k,isDragging:C,handleKeyDown:R},Z,j,$,q]=(0,mo.Y)(!l,{type:`${y._Q.COMPONENT}_${P}`,index:s,item:{displayedValue:M},onMoveItem:c,onStart(){u()},onEnd(){v()},onGrabItem:m,onDropItem:f,onCancel:g});(0,e.useEffect)(()=>{q((0,Ot.rX)(),{captureDraggingState:!1})},[q,s]);const H=(0,y.FE)(D,$),F=(0,y.FE)(Z,j),{lazyComponentStore:X}=Nn();return e.createElement(A.x,{ref:F},C?e.createElement(cl,null):e.createElement(un.U,{expanded:a,onToggle:p,id:t,size:"S"},e.createElement(mn.B,{action:l?null:e.createElement(ul,{gap:0,expanded:a},e.createElement(dl,{expanded:a,noBorder:!0,onClick:()=>{b(t),u()},label:T({id:(0,y.OB)("containers.Edit.delete"),defaultMessage:"Delete"}),icon:e.createElement(He.Z,null)}),e.createElement(ye.h,{className:"drag-handle",ref:H,forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:W=>W.stopPropagation(),"data-handler-id":k,label:T({id:(0,y.OB)("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:R},e.createElement(Je.Z,null))),title:M,togglePosition:"left"}),e.createElement(pn.v,null,e.createElement(w.k,{direction:"column",alignItems:"stretch",background:"neutral100",padding:6,gap:6},o.map((W,Y)=>e.createElement(De.r,{gap:4,key:Y},W.map(({name:B,fieldSchema:V,metadatas:x,queryInfos:L,size:z})=>{const K=V.type==="component",I=`${t}.${B}`;if(K){const S=V.component;return e.createElement(ue.P,{col:z,s:12,xs:12,key:B},e.createElement(Yt,{componentUid:S,intlLabel:{id:x.label,defaultMessage:x.label},isRepeatable:V.repeatable,isNested:!0,name:I,max:V.max,min:V.min,required:V.required}))}return e.createElement(ue.P,{key:I,col:z,s:12,xs:12},e.createElement(qn,{componentUid:r,fieldSchema:V,keys:I,metadatas:x,queryInfos:L,size:z,customFieldInputs:X}))})))))))};Wn.defaultProps={componentUid:void 0,fields:[],isReadOnly:!1,isOpen:!1,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0,toggleCollapses(){}},Wn.propTypes={componentFieldName:n().string.isRequired,componentUid:n().string,fields:n().array,index:n().number.isRequired,isOpen:n().bool,isReadOnly:n().bool,mainField:n().string.isRequired,moveComponentField:n().func.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onClickToggle:n().func.isRequired,toggleCollapses:n().func};var ml=(0,e.memo)(Wn),Co=d(861);const pl=(0,N.ZP)(A.x)`
  overflow: hidden;
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-left: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
`,gl=(0,N.ZP)(A.x)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({theme:t})=>t.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({theme:t})=>t.colors.primary600};
  }
`,zn=({children:t,error:r})=>{const{formatMessage:o}=(0,Q.Z)();return e.createElement(Co.k,{attributeName:"data-strapi-accordion-toggle"},t,r&&e.createElement(A.x,{paddingTop:1},e.createElement(G.Z,{variant:"pi",textColor:"danger600"},o({id:r.id,defaultMessage:r.defaultMessage},{...r.values}))))};zn.defaultProps={error:void 0},zn.propTypes={children:n().node.isRequired,error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object})};function fl(t,r={}){return Object.keys(r).filter(o=>o.startsWith(t)).map(o=>o.split(".").slice(0,t.split(".").length+1).join("."))}const hl=(0,N.ZP)(co.A)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,Vn=({componentUid:t,componentValue:r,componentValueLength:o,isReadOnly:s,max:a,min:l,name:i})=>{const{addRepeatableComponentToField:c,formErrors:p,moveComponentField:u}=(0,h.Wq)(),m=(0,h.lm)(),{formatMessage:f}=(0,Q.Z)(),[g,E]=(0,e.useState)(""),[b,v]=(0,e.useState)(""),{getComponentLayout:M,components:D}=(0,de.PL)(),T=(0,e.useMemo)(()=>M(t),[t,M]),P=(0,e.useMemo)(()=>(0,y.Uo)(r||[])+1,[r]),k=fl(i,p),C=l-o,R=O()(p,i,{id:""}).id.includes("min"),Z=()=>{E("")},j=()=>{s||(o<a?(c(i,T,D,R),E(P)):o>=a&&m({type:"info",message:{id:(0,y.OB)("components.notification.info.maximum-requirement")}}))},$=(x,L)=>{v(f({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${i}.${L}`,position:F(x)})),u({name:i,newIndex:x,currentIndex:L})},q=O()(T,["settings","mainField"],"id"),H=x=>()=>{E(g===x?"":x)},F=x=>`${x+1} of ${o}`,X=x=>{v(f({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${i}.${x}`}))},W=x=>{v(f({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${i}.${x}`,position:F(x)}))},Y=x=>{v(f({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${i}.${x}`,position:F(x)}))};let B=p[i];if(R?B={id:(0,y.OB)("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",values:{number:C}}:k.some(x=>x.split(".").length>1)&&!R&&(B={id:(0,y.OB)("components.RepeatableComponent.error-message"),defaultMessage:"The component(s) contain error(s)"}),o===0)return e.createElement(Vr,{error:B,isReadOnly:s,onClick:j});const V=`${i}-item-instructions`;return e.createElement(A.x,{hasRadius:!0},e.createElement(pt.T,{id:V},f({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),e.createElement(pt.T,{"aria-live":"assertive"},b),e.createElement(zn,{error:B,ariaDescribedBy:V},e.createElement(gl,{"aria-describedby":V},r.map(({__temp_key__:x},L)=>e.createElement(ml,{componentFieldName:`${i}.${L}`,componentUid:t,fields:T.layouts.edit,key:x,index:L,isOpen:g===x,isReadOnly:s,mainField:q,moveComponentField:$,onClickToggle:H(x),toggleCollapses:Z,onCancel:X,onDropItem:Y,onGrabItem:W}))),e.createElement(pl,null,e.createElement(w.k,{justifyContent:"center",height:"48px",background:"neutral0"},e.createElement(hl,{disabled:s,onClick:j,startIcon:e.createElement(Lt.Z,null)},f({id:(0,y.OB)("containers.EditView.add.new-entry"),defaultMessage:"Add an entry"}))))))};Vn.defaultProps={componentValue:null,componentValueLength:0,isReadOnly:!1,max:1/0,min:0},Vn.propTypes={componentUid:n().string.isRequired,componentValue:n().oneOfType([n().array,n().object]),componentValueLength:n().number,isReadOnly:n().bool,max:n().number,min:n().number,name:n().string.isRequired};var yl=(0,e.memo)(Vn);const Un=({addNonRepeatableComponentToField:t,componentUid:r,intlLabel:o,isCreatingEntry:s,isFromDynamicZone:a,isRepeatable:l,isNested:i,labelAction:c,max:p,min:u,name:m,hasChildrenAllowedFields:f,hasChildrenReadableFields:g,isReadOnly:E,componentValue:b,removeComponentFromField:v,required:M})=>{const{formatMessage:D}=(0,Q.Z)(),T=Ys()(b),P=b!==null||a,k=!l&&P&&!a&&f,{getComponentLayout:C,components:R}=(0,de.PL)(),Z=(0,e.useMemo)(()=>C(r),[r,C]);if(!f&&s)return e.createElement(h.X0,{labelAction:c,intlLabel:o,name:m});if(!f&&!s&&!g)return e.createElement(h.X0,{labelAction:c,intlLabel:o,name:m});const j=()=>{t(m,Z,R)};return e.createElement(A.x,null,e.createElement(w.k,{justifyContent:"space-between"},o&&e.createElement(ra,{intlLabel:o,labelAction:c,name:m,numberOfEntries:T,showNumberOfEntries:l,required:M}),k&&e.createElement(ye.h,{label:D({id:(0,y.OB)("components.reset-entry"),defaultMessage:"Reset Entry"}),icon:e.createElement(He.Z,null),noBorder:!0,onClick:()=>{v(m,r)}})),e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},!l&&!P&&e.createElement(Vr,{isReadOnly:E,onClick:j}),!l&&P&&e.createElement(al,{componentUid:r,isFromDynamicZone:a,isNested:i,name:m}),l&&e.createElement(yl,{componentValue:b,componentValueLength:T,componentUid:r,isReadOnly:E,max:p,min:u,name:m})))};Un.defaultProps={componentValue:null,hasChildrenAllowedFields:!1,hasChildrenReadableFields:!1,intlLabel:void 0,isFromDynamicZone:!1,isReadOnly:!1,isRepeatable:!1,isNested:!1,labelAction:void 0,max:1/0,min:-1/0,required:!1},Un.propTypes={addNonRepeatableComponentToField:n().func.isRequired,componentUid:n().string.isRequired,componentValue:n().oneOfType([n().object,n().array]),hasChildrenAllowedFields:n().bool,hasChildrenReadableFields:n().bool,isCreatingEntry:n().bool.isRequired,isFromDynamicZone:n().bool,isReadOnly:n().bool,isRepeatable:n().bool,isNested:n().bool,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),labelAction:n().element,max:n().number,min:n().number,name:n().string.isRequired,removeComponentFromField:n().func.isRequired,required:n().bool};const bl=(0,e.memo)(Un,ve());var Yt=Js(bl,ta);const El=(0,N.ZP)(w.k)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`,vl=(0,N.ZP)(ye.h)`
  background-color: transparent;

  svg path {
    fill: ${({theme:t,expanded:r})=>r?t.colors.primary600:t.colors.neutral600};
  }
`,Cl=(0,N.ZP)(A.x)`
  > div:first-child {
    box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  }
`,Rl=(0,N.ZP)(A.x)`
  border-radius: 0 0 ${({theme:t})=>t.spaces[1]} ${({theme:t})=>t.spaces[1]};
`,Ml=(0,N.ZP)(A.x)`
  width: ${({theme:t})=>t.spaces[2]};
  height: ${({theme:t})=>t.spaces[4]};
`,Tl=N.ZP.span`
  display: block;
  background-color: ${({theme:t})=>t.colors.primary100};
  outline: 1px dashed ${({theme:t})=>t.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:t})=>t.spaces[6]};
`,Dl=(0,N.ZP)(A.x)`
  list-style: none;
  padding: 0;
  margin: 0;
`,Hn=({componentUid:t,formErrors:r,index:o,isFieldAllowed:s,name:a,onRemoveComponentClick:l,onMoveComponent:i,onGrabItem:c,onDropItem:p,onCancel:u})=>{const[m,f]=(0,e.useState)(!0),{formatMessage:g}=(0,Q.Z)(),{getComponentLayout:E}=(0,de.PL)(),{modifiedData:b}=(0,h.Wq)(),{icon:v,friendlyName:M,mainValue:D}=(0,e.useMemo)(()=>{const W=E(t),{info:{icon:Y,displayName:B}}=W,V=O()(W,["settings","mainField"],"id"),x=O()(b,[a,o,V])??"",L=V==="id"?"":String(x).trim(),z=L.length>0?` - ${L}`:L;return{friendlyName:B,icon:Y,mainValue:z}},[t,E,b,a,o]),T=Object.keys(r).filter(W=>{const Y=W.split(".");return`${Y[0]}.${Y[1]}`==`${a}.${o}`});let P;T.length>0&&(P=g({id:(0,y.OB)("components.DynamicZone.error-message"),defaultMessage:"The component contains error(s)"}));const k=()=>{f(W=>!W)},[{handlerId:C,isDragging:R,handleKeyDown:Z},j,$,q,H]=(0,de.Y9)(s,{type:`${y._Q.DYNAMIC_ZONE}_${a}`,index:o,item:{displayedValue:`${M}${D}`,icon:v},onMoveItem:i,onGrabItem:c,onDropItem:p,onCancel:u});(0,e.useEffect)(()=>{H((0,Ot.rX)(),{captureDraggingState:!1})},[H,o]);const F=(0,y.FE)(j,$),X=s?e.createElement(El,{gap:0,expanded:m},e.createElement(vl,{noBorder:!0,label:g({id:(0,y.OB)("components.DynamicZone.delete-label"),defaultMessage:"Delete {name}"},{name:M}),onClick:l},e.createElement(He.Z,null)),e.createElement(ye.h,{forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:W=>W.stopPropagation(),"data-handler-id":C,ref:q,label:g({id:(0,y.OB)("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:Z},e.createElement(Je.Z,null))):null;return e.createElement(Dl,{as:"li"},e.createElement(w.k,{justifyContent:"center"},e.createElement(Ml,{background:"neutral200"})),e.createElement(Cl,{ref:F,hasRadius:!0},R?e.createElement(Tl,{padding:6,background:"primary100"}):e.createElement(un.U,{expanded:m,onToggle:k,size:"S",error:P},e.createElement(mn.B,{action:X,title:`${M}${D}`,togglePosition:"left"}),e.createElement(pn.v,null,e.createElement(Rl,{background:"neutral0"},e.createElement(Yt,{componentUid:t,icon:v,name:`${a}.${o}`,isFromDynamicZone:!0}))))))};Hn.defaultProps={formErrors:{},index:0,isFieldAllowed:!0,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0},Hn.propTypes={componentUid:n().string.isRequired,formErrors:n().object,index:n().number,isFieldAllowed:n().bool,name:n().string.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onMoveComponent:n().func.isRequired,onRemoveComponentClick:n().func.isRequired};var Il=Hn;const Qn=(0,N.ZP)(zr.Z)`
  transform: ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0deg)"};
  > circle {
    fill: ${({theme:t,$hasError:r})=>r?t.colors.danger200:t.colors.neutral150};
  }
  > path {
    fill: ${({theme:t,$hasError:r})=>r?t.colors.danger600:t.colors.neutral600};
  }
`,kl=(0,N.ZP)(En.Y)`
  border-radius: 26px;
  border-color: ${({theme:t})=>t.colors.neutral150};
  background: ${({theme:t})=>t.colors.neutral0};
  padding-top: ${({theme:t})=>t.spaces[3]};
  padding-right: ${({theme:t})=>t.spaces[4]};
  padding-bottom: ${({theme:t})=>t.spaces[3]};
  padding-left: ${({theme:t})=>t.spaces[4]};

  box-shadow: ${({theme:t})=>t.shadows.filterShadow};

  svg {
    height: ${({theme:t})=>t.spaces[6]};
    width: ${({theme:t})=>t.spaces[6]};
    > path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
  &:hover {
    color: ${({theme:t})=>t.colors.primary600} !important;
    ${G.Z} {
      color: ${({theme:t})=>t.colors.primary600} !important;
    }

    ${Qn} {
      > circle {
        fill: ${({theme:t})=>t.colors.primary600};
      }
      > path {
        fill: ${({theme:t})=>t.colors.neutral100};
      }
    }
  }
  &:active {
    ${G.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }
    ${Qn} {
      > circle {
        fill: ${({theme:t})=>t.colors.primary600};
      }
      > path {
        fill: ${({theme:t})=>t.colors.neutral100};
      }
    }
  }
`,xl=(0,N.ZP)(A.x)`
  height: 100%;
`,Gn=({hasError:t,hasMaxError:r,hasMinError:o,isDisabled:s,isOpen:a,label:l,missingComponentNumber:i,name:c,onClick:p})=>{const{formatMessage:u}=(0,Q.Z)(),m=u({id:(0,y.OB)("components.DynamicZone.add-component"),defaultMessage:"Add a component to {componentName}"},{componentName:l||c}),f=u({id:"app.utils.close-label",defaultMessage:"Close"});let g=a?f:m;return r&&!a&&(g=u({id:"components.Input.error.validation.max",defaultMessage:"The value is too high."})),o&&!a&&(g=u({id:(0,y.OB)("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"},{number:i})),e.createElement(w.k,{justifyContent:"center"},e.createElement(A.x,{style:{cursor:s?"not-allowed":"pointer"}},e.createElement(kl,{type:"button",onClick:p,disabled:s,hasError:t},e.createElement(w.k,null,e.createElement(xl,{"aria-hidden":!0,paddingRight:2},e.createElement(Qn,{$isOpen:a,$hasError:t&&!a})),e.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:t&&!a?"danger600":"neutral500"},g)))))};Gn.defaultProps={hasError:!1,hasMaxError:!1,hasMinError:!1,isDisabled:!1,isOpen:!1,label:"",missingComponentNumber:0},Gn.propTypes={label:n().string,hasError:n().bool,hasMaxError:n().bool,hasMinError:n().bool,isDisabled:n().bool,isOpen:n().bool,missingComponentNumber:n().number,name:n().string.isRequired,onClick:n().func.isRequired};var Ol=Gn;const Pl=(0,N.ZP)(A.x)`
  border-radius: ${(0,h.Q1)(26)};
`,Kn=({label:t,labelAction:r,name:o,numberOfComponents:s,required:a,intlDescription:l})=>{const{formatMessage:i}=(0,Q.Z)(),c=i({id:t||o,defaultMessage:t||o});return e.createElement(w.k,{justifyContent:"center"},e.createElement(A.x,null,e.createElement(Pl,{paddingTop:3,paddingBottom:3,paddingRight:4,paddingLeft:4,background:"neutral0",shadow:"filterShadow",color:"neutral500"},e.createElement(w.k,{direction:"column",justifyContent:"center"},e.createElement(w.k,{maxWidth:(0,h.Q1)(356)},e.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold",ellipsis:!0},c,"\xA0"),e.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold"},"(",s,")"),a&&e.createElement(G.Z,{textColor:"danger600"},"*"),r&&e.createElement(A.x,{paddingLeft:1},r)),l&&e.createElement(A.x,{paddingTop:1,maxWidth:(0,h.Q1)(356)},e.createElement(G.Z,{variant:"pi",textColor:"neutral600",ellipsis:!0},i(l)))))))};Kn.defaultProps={intlDescription:void 0,label:"",labelAction:void 0,numberOfComponents:0,required:!1},Kn.propTypes={intlDescription:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired}),label:n().string,labelAction:n().element,name:n().string.isRequired,numberOfComponents:n().number,required:n().bool};var wl=Kn,Fl=d(81346),Ro=d.n(Fl);const Xt=5,Jt=8,Ll=(0,N.ZP)(w.k)`
  border-radius: ${({showBackground:t})=>t?"50%":0};
  color: ${({theme:t})=>t.colors.neutral600};
  height: ${({theme:t,size:r})=>t.spaces[r==="S"?Xt:Jt]};
  width: ${({theme:t,size:r})=>t.spaces[r==="S"?Xt:Jt]};

  svg {
    height: ${({theme:t,size:r})=>t.spaces[r==="S"?Xt-2:Jt-3]};
    width: ${({theme:t,size:r})=>t.spaces[r==="S"?Xt-2:Jt-3]};
  }
`;function _t({showBackground:t=!0,size:r="M"}){return e.createElement(Ll,{alignItems:"center",background:t?"neutral200":null,justifyContent:"center",size:r,showBackground:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}_t.defaultProps={showBackground:!0,size:"M"},_t.propTypes={showBackground:n().bool,size:n().string};const Sl=(0,N.ZP)(A.x)`
  flex-shrink: 0;
  height: ${(0,h.Q1)(84)};
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${G.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function Yn({children:t,onClick:r}){return e.createElement(Sl,{as:"button",type:"button",onClick:r,hasRadius:!0},e.createElement(w.k,{direction:"column",gap:1,alignItems:"center",justifyContent:"center"},e.createElement(_t,null),e.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral600"},t)))}Yn.defaultProps={onClick(){}},Yn.propTypes={children:n().node.isRequired,onClick:n().func};const Al=N.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140/16}rem);
  grid-gap: ${({theme:t})=>t.spaces[1]};
`,Xn=({category:t,components:r,variant:o,isOpen:s,onAddComponent:a,onToggle:l})=>{const{formatMessage:i}=(0,Q.Z)(),c=()=>{l(t)};return e.createElement(un.U,{expanded:s,onToggle:c,size:"S"},e.createElement(mn.B,{variant:o,title:i({id:t,defaultMessage:t}),togglePosition:"left"}),e.createElement(pn.v,null,e.createElement(A.x,{paddingTop:4,paddingBottom:4,paddingLeft:3,paddingRight:3},e.createElement(Al,null,r.map(({componentUid:p,info:{displayName:u}})=>e.createElement(Yn,{key:p,onClick:a(p)},i({id:u,defaultMessage:u})))))))};Xn.defaultProps={components:[],isOpen:!1,variant:"primary"},Xn.propTypes={category:n().string.isRequired,components:n().array,isOpen:n().bool,onAddComponent:n().func.isRequired,onToggle:n().func.isRequired,variant:n().oneOf(["primary","secondary"])};var $l=Xn;const Jn=({components:t,isOpen:r,onClickAddComponent:o})=>{const{formatMessage:s}=(0,Q.Z)(),{getComponentLayout:a}=(0,de.PL)(),[l,i]=(0,e.useState)(""),c=(0,e.useMemo)(()=>{const m=t.map(g=>{const{category:E,info:b}=a(g);return{componentUid:g,category:E,info:b}}),f=Ro()(m,"category");return Object.keys(f).reduce((g,E)=>(g.push({category:E,components:f[E]}),g),[])},[t,a]);(0,e.useEffect)(()=>{r&&c.length>0&&i(c[0].category)},[r,c]);const p=m=>()=>{o(m),i("")},u=m=>{i(f=>f===m?"":m)};return r?e.createElement(A.x,{paddingBottom:6},e.createElement(A.x,{paddingTop:6,paddingBottom:6,paddingLeft:5,paddingRight:5,background:"neutral0",shadow:"tableShadow",borderColor:"neutral150",hasRadius:!0},e.createElement(w.k,{justifyContent:"center"},e.createElement(G.Z,{fontWeight:"bold",textColor:"neutral600"},s({id:(0,y.OB)("components.DynamicZone.ComponentPicker-label"),defaultMessage:"Pick one component"}))),e.createElement(A.x,{paddingTop:2},e.createElement(Co.k,{attributeName:"data-strapi-accordion-toggle"},c.map(({category:m,components:f},g)=>e.createElement($l,{key:m,category:m,components:f,onAddComponent:p,isOpen:m===l,onToggle:u,variant:g%2===1?"primary":"secondary"})))))):null};Jn.defaultProps={components:[],isOpen:!1},Jn.propTypes={components:n().array,isOpen:n().bool,onClickAddComponent:n().func.isRequired};var Zl=Jn;const _n=({name:t,addComponentToDynamicZone:r,formErrors:o,isCreatingEntry:s,isFieldAllowed:a,isFieldReadable:l,labelAction:i,moveComponentField:c,removeComponentFromDynamicZone:p,dynamicDisplayedComponents:u,fieldSchema:m,metadatas:f})=>{const[g,E]=(0,e.useState)(!1),[b,v]=(0,e.useState)(""),{formatMessage:M}=(0,Q.Z)(),D=(0,h.lm)(),{getComponentLayout:T,components:P}=(0,de.PL)(),k=u.length,C=f.description?{id:f.description,defaultMessage:f.description}:null,{max:R=1/0,min:Z=-1/0}=m,j=(0,e.useMemo)(()=>Object.keys(o).filter(I=>I===t).map(I=>o[I]),[o,t]),$=Z-k,q=j.length>0,H=j.length>0&&O()(j,[0,"id"],"").includes("min"),F=q&&O()(j,[0,"id"],"")==="components.Input.error.validation.max",X=I=>{E(!1);const S=T(I);r(t,S,P,q)},W=()=>{k<R?E(I=>!I):D({type:"info",message:{id:(0,y.OB)("components.notification.info.maximum-requirement")}})},Y=(I,S)=>{v(M({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${t}.${S}`,position:B(I)})),c({name:t,newIndex:I,currentIndex:S})},B=I=>`${I+1} of ${u.length}`,V=I=>{v(M({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${t}.${I}`}))},x=I=>{v(M({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${t}.${I}`,position:B(I)}))},L=I=>{v(M({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${t}.${I}`,position:B(I)}))},z=(I,S)=>()=>{p(I,S)};if(!a&&(s||!l&&!s))return e.createElement(h.X0,{description:C,intlLabel:{id:f.label,defaultMessage:f.label},labelAction:i,name:t});const K=`${t}-item-instructions`;return e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},k>0&&e.createElement(A.x,null,e.createElement(wl,{intlDescription:C,label:f.label,labelAction:i,name:t,numberOfComponents:k,required:m.required||!1}),e.createElement(pt.T,{id:K},M({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),e.createElement(pt.T,{"aria-live":"assertive"},b),e.createElement("ol",{"aria-describedby":K},u.map(({componentUid:I,id:S},oe)=>e.createElement(Il,{componentUid:I,formErrors:o,key:`${I}-${S}`,index:oe,isFieldAllowed:a,name:t,onMoveComponent:Y,onRemoveComponentClick:z(t,oe),onCancel:V,onDropItem:L,onGrabItem:x})))),e.createElement(Ol,{hasError:q,hasMaxError:F,hasMinError:H,isDisabled:!a,label:f.label,missingComponentNumber:$,isOpen:g,name:t,onClick:W}),e.createElement(Zl,{isOpen:g,components:m.components??[],onClickAddComponent:X}))};_n.defaultProps={dynamicDisplayedComponents:[],fieldSchema:{max:1/0,min:-1/0},labelAction:null},_n.propTypes={addComponentToDynamicZone:n().func.isRequired,dynamicDisplayedComponents:n().arrayOf(n().shape({componentUid:n().string.isRequired,id:n().number.isRequired})),fieldSchema:n().shape({components:n().array.isRequired,max:n().number,min:n().number,required:n().bool}),formErrors:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isFieldAllowed:n().bool.isRequired,isFieldReadable:n().bool.isRequired,labelAction:n().element,metadatas:n().shape({description:n().string,label:n().string}).isRequired,moveComponentField:n().func.isRequired,name:n().string.isRequired,removeComponentFromDynamicZone:n().func.isRequired};const Bl=(0,e.memo)(_n,ve());var ql=Hs(Bl,Gs),je=d(84306),_e=d(41578);const en=()=>({type:_e.ZA}),er=t=>({type:_e.Id,data:t}),tr=(t,r=!1)=>({type:_e.TP,rawQuery:t,isSingleType:r}),Mo=()=>({type:_e.c2}),To=(t,r)=>({type:_e.w7,componentsDataStructure:t,contentTypeDataStructure:r}),ce=t=>({type:_e.d0,status:t}),et=t=>({type:_e.t9,data:t}),Nl=()=>({type:_e.tE});var nr=t=>t["content-manager_editViewCrudReducer"];const rr=({allLayoutData:t,children:r,slug:o,id:s,origin:a})=>{const l=(0,st.useQueryClient)(),i=(0,h.lm)(),{setCurrentStep:c}=(0,h.c1)(),{trackUsage:p}=(0,h.rS)(),{push:u,replace:m}=(0,te.k6)(),[{rawQuery:f}]=(0,h.Kx)(),g=(0,J.I0)(),{componentsDataStructure:E,contentTypeDataStructure:b,data:v,isLoading:M,status:D}=(0,J.v9)(nr),T=(0,de.Ky)(o),{formatAPIError:P}=(0,h.So)(y.OB),k=(0,e.useRef)(!0),C=(0,e.useRef)(p),R=(0,e.useRef)(t),Z=(0,h.kY)(),{put:j,post:$,del:q}=Z,H=s===null,F=(0,e.useMemo)(()=>H&&!a?null:(0,y.IF)(`collection-types/${o}/${a||s}`),[o,s,H,a]),X=(0,e.useCallback)(I=>a?(0,h.w6)(I,R.current.contentType,R.current.components):I,[a]),W=(0,e.useCallback)(I=>{const S=(0,y.kc)(I,R.current.contentType,R.current.components);return(0,h.dU)(S,R.current.contentType,R.current.components)},[]);(0,e.useEffect)(()=>{const I=Object.keys(t.components).reduce((_,ae)=>{const U=(0,y.Di)(O()(t,["components",ae,"attributes"],{}),t.components);return _[ae]=(0,h.dU)(U,t.components[ae],t.components),_},{}),S=(0,y.Di)(t.contentType.attributes,t.components),oe=(0,h.dU)(S,t.contentType,t.components);g(To(I,oe))},[t,g]),(0,e.useEffect)(()=>()=>{g(Mo())},[g]),(0,e.useEffect)(()=>{const S=je.default.CancelToken.source(),oe=async ae=>{g(en());try{const{data:U}=await Z.get(F,{cancelToken:ae.token});g(er(W(X(U))))}catch(U){if(je.default.isCancel(U))return;const ie=O()(U,"response.status",null);if(ie===404){u(T);return}ie===403&&(i({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),u(T))}},_=async()=>{await g(en()),await g(tr(f))};return k.current?(F?oe(S):_(),()=>{S.cancel("Operation canceled by the user.")}):()=>{}},[Z,X,W,u,F,g,f,T,i]);const Y=(0,e.useCallback)(I=>{i({type:"warning",message:P(I)})},[i,P]),B=(0,e.useCallback)(async I=>{try{C.current("willDeleteEntry",I);const{data:S}=await q((0,y.IF)(`collection-types/${o}/${s}`));return i({type:"success",message:{id:(0,y.OB)("success.record.delete")}}),C.current("didDeleteEntry",I),m(T),Promise.resolve(S)}catch(S){return C.current("didNotDeleteEntry",{error:S,...I}),Promise.reject(S)}},[s,o,i,q,T,m]),V=(0,e.useCallback)(async(I,S)=>{const oe=`${(0,y.IF)(`collection-types/${o}`)}${f}`;try{g(ce("submit-pending"));const{data:_}=await $(oe,I);return C.current("didCreateEntry",S),i({type:"success",message:{id:(0,y.OB)("success.record.save")}}),c("contentManager.success"),l.invalidateQueries(["relation"]),g(et(W(_))),g(ce("resolved")),m(`/content-manager/collectionType/${o}/${_.id}${f}`),Promise.resolve(_)}catch(_){return Y(_),C.current("didNotCreateEntry",{error:_,trackerProperty:S}),g(ce("resolved")),Promise.reject(_)}},[W,Y,m,o,g,f,i,c,l,$]),x=(0,e.useCallback)(async()=>{try{C.current("willCheckDraftRelations");const I=(0,y.IF)(`collection-types/${o}/${s}/actions/numberOfDraftRelations`);g(ce("draft-relation-check-pending"));const S=await Z.get(I);return C.current("didCheckDraftRelations"),g(ce("resolved")),S.data.data}catch(I){return Y(I),g(ce("resolved")),Promise.reject(I)}},[Y,s,o,g,Z]),L=(0,e.useCallback)(async()=>{try{C.current("willPublishEntry");const I=(0,y.IF)(`collection-types/${o}/${s}/actions/publish`);g(ce("publish-pending"));const{data:S}=await $(I);return C.current("didPublishEntry"),g(et(W(S))),g(ce("resolved")),i({type:"success",message:{id:(0,y.OB)("success.record.publish")}}),Promise.resolve(S)}catch(I){return Y(I),g(ce("resolved")),Promise.reject(I)}},[W,Y,s,o,g,i,$]),z=(0,e.useCallback)(async(I,S)=>{const oe=(0,y.IF)(`collection-types/${o}/${s}`);try{C.current("willEditEntry",S),g(ce("submit-pending"));const{data:_}=await j(oe,I);return C.current("didEditEntry",{trackerProperty:S}),i({type:"success",message:{id:(0,y.OB)("success.record.save")}}),l.invalidateQueries(["relation"]),g(et(W(_))),g(ce("resolved")),Promise.resolve(_)}catch(_){return C.current("didNotEditEntry",{error:_,trackerProperty:S}),Y(_),g(ce("resolved")),Promise.reject(_)}},[W,Y,o,s,g,i,l,j]),K=(0,e.useCallback)(async()=>{const I=(0,y.IF)(`collection-types/${o}/${s}/actions/unpublish`);g(ce("unpublish-pending"));try{C.current("willUnpublishEntry");const{data:S}=await $(I);return C.current("didUnpublishEntry"),i({type:"success",message:{id:(0,y.OB)("success.record.unpublish")}}),g(et(W(S))),g(ce("resolved")),Promise.resolve(S)}catch(S){return g(ce("resolved")),Y(S),Promise.reject(S)}},[W,Y,s,o,g,i,$]);return r({componentsDataStructure:E,contentTypeDataStructure:b,data:v,isCreatingEntry:H,isLoadingForData:M,onDelete:B,onPost:V,onPublish:L,onDraftRelationCheck:x,onPut:z,onUnpublish:K,status:D,redirectionLink:T})};rr.defaultProps={id:null,origin:null},rr.propTypes={allLayoutData:n().exact({components:n().object.isRequired,contentType:n().shape({apiID:n().string.isRequired,attributes:n().object.isRequired,info:n().object.isRequired,isDisplayed:n().bool.isRequired,kind:n().string.isRequired,layouts:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,pluginOptions:n().object,settings:n().object.isRequired,uid:n().string.isRequired}).isRequired}).isRequired,children:n().func.isRequired,id:n().string,origin:n().string,slug:n().string.isRequired};var jl=(0,e.memo)(rr,ve()),Wl=d(86834),Me=d.n(Wl),zl=d(99381),Qe=d.n(zl),Vl=d(3040),se=d.n(Vl),Do=d(12788),or=d(97889),Ul=d(56236),Hl=d.n(Ul),Ql=d(10268),Io=d.n(Ql),sr=d(99526),ko=(t,r,o,s)=>{const a=t.slice();return a.splice(r,1),a.splice(o,0,s),a},Gl=d(77236),Kl=d.n(Gl),Yl=d(85973),Xl=d.n(Yl);const Jl=({browserState:t,serverState:r},o,s)=>{const a=r,l=t,i=(u,m)=>O()(u,["attributes",m,"type"],""),c=(u,m)=>O()(u,["attributes",...m],""),p=(u,m,f,g)=>Object.keys(u).reduce((E,b)=>{const v=g?`${g}.${b}`:b,M=i(f,b),D=O()(u,b),T=O()(m,b),P=c(f,[b,"component"]),k=c(f,[b,"repeatable"]);let C;switch(M){case"json":C=JSON.parse(D);break;case"time":{C=D,D&&D.split(":").length<3&&(C=`${D}:00`);break}case"media":c(f,[b,"multiple"])===!0?C=D?D.filter(R=>!(R instanceof File)):null:C=O()(D,0)instanceof File?null:O()(D,"id",null);break;case"component":k?C=D&&D.map((R,Z)=>p(R,(T??[])[Z],s[P],`${v}.${Z}`)):C=D&&p(D,T,s[P],v);break;case"relation":{const R=bo(a,l)(v).join(".");let Z=O()(a,R,[]);const j=D.reduce((q,H,F,X)=>{const W=Z.find(B=>B.id===H.id),Y=X[F+1];if(!W||W.__temp_key__!==H.__temp_key__){const B=Y?{before:Y.id}:{end:!0};return[...q,{id:H.id,position:B}]}return q},[]);C={disconnect:Z.reduce((q,H)=>D.find(F=>F.id===H.id)?q:[...q,{id:H.id}],[]),connect:j.reverse()};break}case"dynamiczone":C=D.map((R,Z)=>p(R,(T??[])[Z],s[R.__component],`${v}.${Z}`));break;default:C=_l(D,"id")}return E[b]=C,E},{});return p(t,r,o,"")},_l=(t,r)=>Kl()(t)?t.map(o=>o[r]?o[r]:o):Xl()(t)?t[r]:t;var ec=Jl,tc=d(51355),nc=d.n(tc),rc=d(95919),oc=d.n(rc),sc=d(78746),ht=d.n(sc),pe=d(24346);function St(t){return["integer","biginteger","decimal","float","number"].includes(t)}pe.kM(pe.nK,"defined",function(){return this.test("defined",h.I0.required,t=>t!==void 0)}),pe.kM(pe.IX,"notEmptyMin",function(t){return this.test("notEmptyMin",h.I0.min,r=>Me()(r)?!0:r.length>=t)}),pe.kM(pe.Z_,"isInferior",function(t,r){return this.test("isInferior",t,function(o){return!o||Number.isNaN(ht()(o))?!0:ht()(r)>=ht()(o)})}),pe.kM(pe.Z_,"isSuperior",function(t,r){return this.test("isSuperior",t,function(o){return!o||Number.isNaN(ht()(o))?!0:ht()(o)>=ht()(r)})});const ac=t=>O()(t,["attributes"],{}),ar=(t,{components:r},o={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const s=ac(t);return pe.Ry().shape(Object.keys(s).reduce((a,l)=>{const i=s[l];if(i.type!=="relation"&&i.type!=="component"&&i.type!=="dynamiczone"){const c=ic(i.type,i,o);a[l]=c}if(i.type==="relation"&&(a[l]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(i.relationType)?pe.Ry().nullable():pe.IX().nullable()),i.type==="component"){const c=ar(r[i.component],{components:r},{...o,isFromComponent:!0});if(i.repeatable===!0){const{min:u,max:m,required:f}=i;let g=pe.Vo(E=>{let b=pe.IX().of(c);return u?f?b=b.min(u,h.I0.min):f!==!0&&Me()(E)?b=b.nullable():b=b.min(u,h.I0.min):f&&!o.isDraft&&(b=b.min(1,h.I0.required)),m&&(b=b.max(m,h.I0.max)),b});return a[l]=g,a}const p=pe.Vo(u=>u!==void 0?i.required===!0&&!o.isDraft?c.defined():c.nullable():i.required===!0?pe.Ry().defined():pe.Ry().nullable());return a[l]=p,a}if(i.type==="dynamiczone"){let c=pe.IX().of(pe.Vo(({__component:m})=>ar(r[m],{components:r},{...o,isFromComponent:!0})));const{max:p,min:u}=i;u?i.required?c=c.test("min",h.I0.min,m=>o.isCreatingEntry?m&&m.length>=u:m===void 0?!0:m!==null&&m.length>=u).test("required",h.I0.required,m=>o.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null):c=c.notEmptyMin(u):i.required&&!o.isDraft&&(c=c.test("required",h.I0.required,m=>o.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null)),p&&(c=c.max(p,h.I0.max)),a[l]=c}return a},{}))},ic=(t,r,o)=>{let s=pe.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(t)&&(s=pe.Z_()),t==="json"&&(s=pe.nK(h.I0.json).test("isJSON",h.I0.json,a=>{if(!a||!a.length)return!0;try{return JSON.parse(a),!0}catch{return!1}}).nullable().test("required",h.I0.required,a=>!(r.required&&(!a||!a.length)))),t==="email"&&(s=s.email(h.I0.email)),["number","integer","float","decimal"].includes(t)&&(s=pe.Rx().transform(a=>oc()(a)?void 0:a).typeError()),t==="biginteger"&&(s=pe.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(t)&&(s=pe.hT()),Object.keys(r).forEach(a=>{const l=r[a];if(l||!nc()(l)&&Number.isInteger(Math.floor(l))||l===0)switch(a){case"required":{o.isDraft||(t==="password"&&o.isCreatingEntry&&(s=s.required(h.I0.required)),t!=="password"&&(o.isCreatingEntry?s=s.required(h.I0.required):s=s.test("required",h.I0.required,i=>i===void 0&&!o.isFromComponent?!0:St(t)?i===0?!0:!!i:t==="boolean"?i!=null:t==="date"||t==="datetime"?typeof i=="string"?!Me()(i):!Me()(i?.toString()):!Me()(i))));break}case"max":{t==="biginteger"?s=s.isInferior(h.I0.max,l):s=s.max(l,h.I0.max);break}case"maxLength":s=s.max(l,h.I0.maxLength);break;case"min":{t==="biginteger"?s=s.isSuperior(h.I0.min,l):s=s.min(l,h.I0.min);break}case"minLength":{o.isDraft||(s=s.min(l,h.I0.minLength));break}case"regex":s=s.matches(new RegExp(l),{message:h.I0.regex,excludeEmptyString:!r.required});break;case"lowercase":["text","textarea","email","string"].includes(t)&&(s=s.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(t)&&(s=s.strict().uppercase());break;case"positive":St(t)&&(s=s.positive());break;case"negative":St(t)&&(s=s.negative());break;default:s=s.nullable()}}),s};var xo=ar;const tn=(t,r=()=>!1,o=void 0)=>{const s=(a,l,{ignoreFalseyValues:i=!1,path:c=[],parent:p=l}={})=>Object.entries(l).reduce((u,[m,f])=>{if(i&&(u==null||u[m]===void 0||u[m]===null))return u;if(r(f,{path:[...c,m],parent:p})&&(u[m]=typeof o=="function"?o(u[m],{path:[...c,m],parent:u}):o),f.type==="component"){const g=t[f.component].attributes;!f.repeatable&&u[m]&&typeof u[m]=="object"?u[m]=s(u[m],g,{ignoreFalseyValues:i,path:[...c,m],parent:l[m]}):f.repeatable&&Array.isArray(u[m])&&(u[m]=u[m].map((E,b)=>s(E,g,{ignoreFalseyValues:i,path:[...c,m,b],parent:l[m]})))}else f.type==="dynamiczone"&&Array.isArray(u[m])&&(u[m]=u[m].map((g,E)=>{const b=t[g.__component].attributes;return s(g,b,{ignoreFalseyValues:i,path:[...c,m,E],parent:l[m]})}));return u},{...a});return s},lc={componentsDataStructure:{},contentTypeDataStructure:{},formErrors:{},initialData:{},modifiedData:null,shouldCheckErrors:!1,modifiedDZName:null,publishConfirmation:{show:!1,draftCount:0}};var cc=(t,r)=>(0,or.ZP)(t,o=>{switch(r.type){case"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD":{const{componentLayoutData:s,allComponents:a}=r,l={...t.componentsDataStructure[s.uid]},c=tn(a,p=>p.type==="relation",[])(l,s.attributes);se()(o,["modifiedData",...r.keys],c);break}case"ADD_COMPONENT_TO_DYNAMIC_ZONE":case"ADD_REPEATABLE_COMPONENT_TO_FIELD":{const{keys:s,allComponents:a,componentLayoutData:l,shouldCheckErrors:i}=r;i&&(o.shouldCheckErrors=!t.shouldCheckErrors),r.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"&&(o.modifiedDZName=s[0]);const c=O()(t,["modifiedData",...s],[]),p=r.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"?{...t.componentsDataStructure[l.uid],__component:l.uid,__temp_key__:(0,y.Uo)(c)+1}:{...t.componentsDataStructure[l.uid],__temp_key__:(0,y.Uo)(c)+1},m=tn(a,g=>g.type==="relation",[])(p,l.attributes),f=Array.isArray(c)?[...c,m]:[m];se()(o,["modifiedData",...s],f);break}case"LOAD_RELATION":{const{initialDataPath:s,modifiedDataPath:a,value:l}=r,i=O()(t,s),c=O()(t,a),p=i?l.filter(f=>!i.some(g=>g.id===f.id)):l,u=(0,sr.zJ)(null,c[0]?.__temp_key__,p.length),m=p.map((f,g)=>({...f,__temp_key__:u[g]}));se()(o,s,Io()([...m,...i],"id")),se()(o,a,Io()([...m,...c],"id"));break}case"CONNECT_RELATION":{const s=["modifiedData",...r.keys],{value:a,toOneRelation:l}=r;if(l)se()(o,s,[a]);else{const i=O()(t,s),[c]=(0,sr.zJ)(i.at(-1)?.__temp_key__,null,1),p=[...i,{...a,__temp_key__:c}];se()(o,s,p)}break}case"DISCONNECT_RELATION":{const s=["modifiedData",...r.keys],{id:a}=r,i=O()(t,[...s]).filter(c=>c.id!==a);se()(o,s,i);break}case"MOVE_COMPONENT_FIELD":case"REORDER_RELATION":{const{oldIndex:s,newIndex:a,keys:l}=r,i=["modifiedData",...l],c=O()(t,[...i]),p=c[s],u=[...c];if(r.type==="REORDER_RELATION"){const m=s>a?c[a-1]?.__temp_key__:c[a]?.__temp_key__,f=s>a?c[a]?.__temp_key__:c[a+1]?.__temp_key__,[g]=(0,sr.zJ)(m,f,1);u.splice(s,1),u.splice(a,0,{...p,__temp_key__:g})}else u.splice(s,1),u.splice(a,0,p);se()(o,i,u);break}case"INIT_FORM":{const{initialValues:s,components:a={},attributes:l={},setModifiedDataOnly:i}=r,c=Qe()(s),u=tn(a,g=>g.type==="relation",(g,{path:E})=>t.modifiedData?.id===c.id&&O()(t.modifiedData,E)?O()(t.modifiedData,E):[])(c,l),f=tn(a,g=>g.type==="dynamiczone"||g.type==="component"&&!g.repeatable,g=>Array.isArray(g)?g.map((E,b)=>({...E,__temp_key__:b})):{...g,__temp_key__:0})(u,l,{ignoreFalseyValues:!0});i||(o.initialData=f),o.modifiedData=f,o.formErrors={},o.modifiedDZName=null,o.shouldCheckErrors=!1;break}case"MOVE_COMPONENT_UP":case"MOVE_COMPONENT_DOWN":{const{currentIndex:s,dynamicZoneName:a,shouldCheckErrors:l}=r;l&&(o.shouldCheckErrors=!t.shouldCheckErrors);const i=t.modifiedData[a],c=r.type==="MOVE_COMPONENT_UP"?s-1:s+1,p=t.modifiedData[a][s],u=ko(i,s,c,p);se()(o,["modifiedData",r.dynamicZoneName],u);break}case"MOVE_FIELD":{const s=O()(t,["modifiedData",...r.keys],[]).slice(),a=O()(t,["modifiedData",...r.keys,r.dragIndex]),l=ko(s,r.dragIndex,r.overIndex,a);se()(o,["modifiedData",...r.keys],l);break}case"ON_CHANGE":{const[s]=r.keys;if(r.shouldSetInitialValue&&se()(o,["initialData",...r.keys],r.value),r.keys.length===2&&O()(t,["modifiedData",s])===null){se()(o,["modifiedData",s],{[r.keys[1]]:r.value});break}se()(o,["modifiedData",...r.keys],r.value);break}case"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE":{r.shouldCheckErrors&&(o.shouldCheckErrors=!t.shouldCheckErrors),o.modifiedData[r.dynamicZoneName].splice(r.index,1);break}case"REMOVE_COMPONENT_FROM_FIELD":{const s=["modifiedData",...r.keys];se()(o,s,null);break}case"REMOVE_PASSWORD_FIELD":{Hl()(o,["modifiedData",...r.keys]);break}case"REMOVE_REPEATABLE_FIELD":{const s=r.keys.length-1,a=["modifiedData",...Pt()(r.keys,s)];Object.keys(t.formErrors).length>0&&(o.shouldCheckErrors=!t.shouldCheckErrors);const i=O()(t,a).slice();i.splice(parseInt(r.keys[s],10),1),se()(o,a,i);break}case"SET_DEFAULT_DATA_STRUCTURES":{o.componentsDataStructure=r.componentsDataStructure,o.contentTypeDataStructure=r.contentTypeDataStructure;break}case"SET_FORM_ERRORS":{o.modifiedDZName=null,o.formErrors=r.errors;break}case"TRIGGER_FORM_VALIDATION":{Object.keys(t.formErrors).length>0&&(o.shouldCheckErrors=!t.shouldCheckErrors);break}case"SET_PUBLISH_CONFIRMATION":{o.publishConfirmation={...r.publishConfirmation};break}case"RESET_PUBLISH_CONFIRMATION":{o.publishConfirmation={...t.publishConfirmation,show:!1};break}default:return o}});const ir=({allLayoutData:t,allowedActions:{canRead:r,canUpdate:o},children:s,componentsDataStructure:a,contentTypeDataStructure:l,createActionAllowedFields:i,from:c,initialValues:p,isCreatingEntry:u,isLoadingForData:m,isSingleType:f,onPost:g,onPublish:E,onDraftRelationCheck:b,onPut:v,onUnpublish:M,readActionAllowedFields:D,redirectToPreviousPage:T,slug:P,status:k,updateActionAllowedFields:C})=>{const[R,Z]=e.useState(!1),[j,$]=(0,e.useReducer)(cc,lc),{formErrors:q,initialData:H,modifiedData:F,modifiedDZName:X,shouldCheckErrors:W,publishConfirmation:Y}=j,{setModifiedDataOnly:B}=(0,J.v9)(nr),V=(0,J.I0)(),x=(0,h.lm)(),{lockApp:L,unlockApp:z}=(0,h.o1)(),K=O()(t,["contentType"],{}),I=(0,e.useMemo)(()=>O()(K,["options","draftAndPublish"],!1),[K]),S=(0,e.useMemo)(()=>I&&!H.publishedAt,[I,H.publishedAt]),{trackUsage:oe}=(0,h.rS)(),{formatMessage:_}=(0,Q.Z)(),ae=(0,e.useRef)(oe),U=(0,e.useMemo)(()=>m||u?!1:r===!1&&o===!1,[m,u,r,o]);(0,e.useEffect)(()=>{k==="resolved"?z():L()},[L,z,k]),(0,e.useEffect)(()=>{m||nt()},[W]),(0,e.useEffect)(()=>{const ne=Object.keys(q);if(ne.length>0){const ee=ne[0],le=document.getElementById(ee);le&&le.focus()}},[q]),(0,e.useEffect)(()=>{U&&x({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}})},[U,x]),(0,e.useEffect)(()=>{$({type:"SET_DEFAULT_DATA_STRUCTURES",componentsDataStructure:a,contentTypeDataStructure:l})},[a,l]);const{components:ie}=t,Te=(0,de.zH)(p);(0,e.useEffect)(()=>{p&&K?.attributes&&!ve()(Te,p)&&($({type:"INIT_FORM",initialValues:p,components:ie,attributes:K.attributes,setModifiedDataOnly:B}),B&&V(Nl()))},[p,K,ie,B,V,Te]);const ze=(0,e.useCallback)(ne=>(ee,le,Be,ct=!1)=>{ae.current("didAddComponentToDynamicZone"),$({type:ne,keys:ee.split("."),componentLayoutData:le,allComponents:Be,shouldCheckErrors:ct})},[]),Nt=ze("ADD_COMPONENT_TO_DYNAMIC_ZONE"),jt=(0,e.useCallback)((ne,ee,le)=>{$({type:"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",keys:ne.split("."),componentLayoutData:ee,allComponents:le})},[]),Wt=(0,e.useCallback)(({name:ne,value:ee,toOneRelation:le})=>{$({type:"CONNECT_RELATION",keys:ne.split("."),value:ee,toOneRelation:le})},[]),Ge=(0,e.useCallback)(({target:{initialDataPath:ne,modifiedDataPath:ee,value:le}})=>{$({type:"LOAD_RELATION",modifiedDataPath:ee,initialDataPath:ne,value:le})},[]),Ve=ze("ADD_REPEATABLE_COMPONENT_TO_FIELD"),tt=(0,e.useMemo)(()=>{const ne={isCreatingEntry:u,isDraft:S,isFromComponent:!1};return xo(K,{components:t.components||{}},ne)},[t.components,K,u,S]),nt=(0,e.useCallback)(async(ne={})=>{let ee={};const le=Qe()(F);Me()(le)||se()(le,ne.path,ne.value);try{await tt.validate(le,{abortEarly:!1})}catch(Be){ee=(0,h.CJ)(Be),X&&(ee=Object.keys(ee).reduce((ct,jr)=>(jr.split(".")[0]!==X&&(ct[jr]=ee[jr]),ct),{}))}$({type:"SET_FORM_ERRORS",errors:ee})},[X,F,tt]),re=(0,e.useCallback)(({target:{name:ne,value:ee,type:le}},Be=!1)=>{let ct=ee;if(["text","textarea","string","email","uid","select","select-one","number"].includes(le)&&!ee&&ee!==0&&(ct=null),le==="password"&&!ee){$({type:"REMOVE_PASSWORD_FIELD",keys:ne.split(".")});return}$({type:"ON_CHANGE",keys:ne.split("."),value:ct,shouldSetInitialValue:Be})},[]),ge=(0,e.useCallback)((ne,ee)=>ec({browserState:ne,serverState:ee},K,t.components),[t.components,K]),we=(0,e.useMemo)(()=>I?S?{status:"draft"}:{}:{},[I,S]),qr=(0,e.useCallback)(async ne=>(ne.preventDefault(),$({type:"RESET_PUBLISH_CONFIRMATION"})),[]),Nr=(0,e.useCallback)(async ne=>{ne.preventDefault();let ee={};try{await tt.validate(F,{abortEarly:!1})}catch(le){ee=(0,h.CJ)(le)}try{if(Me()(ee)){const le=ge(F,H);(0,Do.flushSync)(()=>{Z(!0)}),u?await g(le,we):await v(le,we),Z(!1)}}catch(le){Z(!1),ee={...ee,...(0,h.nn)(le,{getTrad:y.OB})}}$({type:"SET_FORM_ERRORS",errors:ee})},[ge,u,F,H,g,v,we,tt]),Em=(0,e.useCallback)(async()=>{const ne=xo(K,{components:O()(t,"components",{})},{isCreatingEntry:u,isDraft:!1,isFromComponent:!1}),ee=await b();if(!Y.show&&ee>0){$({type:"SET_PUBLISH_CONFIRMATION",publishConfirmation:{show:!0,draftCount:ee}});return}$({type:"RESET_PUBLISH_CONFIRMATION"});let le={};try{await ne.validate(F,{abortEarly:!1})}catch(Be){le=(0,h.CJ)(Be)}try{Me()(le)&&((0,Do.flushSync)(()=>{Z(!0)}),await E(),Z(!1))}catch(Be){Z(!1),le={...le,...(0,h.nn)(Be,{getTrad:y.OB})}}$({type:"SET_FORM_ERRORS",errors:le})},[t,K,u,F,Y.show,E,b]),Mt=(0,e.useCallback)(ne=>{const ee=Object.keys(q).some(Be=>Be.split(".")[0]===ne);return!Me()(q)&&ee},[q]),vm=(0,e.useCallback)((ne,ee)=>{ae.current("changeComponentsOrder"),$({type:"MOVE_COMPONENT_DOWN",dynamicZoneName:ne,currentIndex:ee,shouldCheckErrors:Mt(ne)})},[Mt]),Cm=(0,e.useCallback)((ne,ee)=>{ae.current("changeComponentsOrder"),$({type:"MOVE_COMPONENT_UP",dynamicZoneName:ne,currentIndex:ee,shouldCheckErrors:Mt(ne)})},[Mt]),Rm=(0,e.useCallback)(({name:ne,newIndex:ee,currentIndex:le})=>{$({type:"MOVE_COMPONENT_FIELD",keys:ne.split("."),newIndex:ee,oldIndex:le})},[]),Mm=(0,e.useCallback)(({name:ne,id:ee})=>{$({type:"DISCONNECT_RELATION",keys:ne.split("."),id:ee})},[]),Tm=(0,e.useCallback)(({name:ne,oldIndex:ee,newIndex:le})=>{$({type:"REORDER_RELATION",keys:ne.split("."),oldIndex:ee,newIndex:le})},[]),Dm=(0,e.useCallback)((ne,ee)=>{ae.current("removeComponentFromDynamicZone"),$({type:"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",dynamicZoneName:ne,index:ee,shouldCheckErrors:Mt(ne)})},[Mt]),Im=(0,e.useCallback)((ne,ee)=>{$({type:"REMOVE_COMPONENT_FROM_FIELD",keys:ne.split("."),componentUid:ee})},[]),km=(0,e.useCallback)((ne,ee)=>{$({type:"REMOVE_REPEATABLE_FIELD",keys:ne.split("."),componentUid:ee})},[]),xm=(0,e.useCallback)(()=>{$({type:"TRIGGER_FORM_VALIDATION"})},[]);return U?e.createElement(te.l_,{to:c}):F?e.createElement(h.W1.Provider,{value:{addComponentToDynamicZone:Nt,addNonRepeatableComponentToField:jt,addRepeatableComponentToField:Ve,allLayoutData:t,checkFormErrors:nt,createActionAllowedFields:i,formErrors:q,hasDraftAndPublish:I,initialData:H,isCreatingEntry:u,isSingleType:f,shouldNotRunValidations:S,status:k,layout:K,modifiedData:F,moveComponentField:Rm,moveComponentDown:vm,moveComponentUp:Cm,onChange:re,onPublish:Em,onUnpublish:M,readActionAllowedFields:D,redirectToPreviousPage:T,removeComponentFromDynamicZone:Dm,removeComponentFromField:Im,removeRepeatableField:km,relationConnect:Wt,relationDisconnect:Mm,relationLoad:Ge,relationReorder:Tm,slug:P,triggerFormValidation:xm,updateActionAllowedFields:C,onPublishPromptDismissal:qr,publishConfirmation:Y}},m||!u&&!H.id?e.createElement(Re.o,{"aria-busy":"true"},e.createElement(h.dO,null)):e.createElement(e.Fragment,null,R?null:e.createElement(te.NL,{when:!ve()(F,H),message:_({id:"global.prompt.unsaved"})}),e.createElement("form",{noValidate:!0,onSubmit:Nr},s))):null};ir.defaultProps={from:"/",initialValues:null,redirectToPreviousPage(){}},ir.propTypes={allLayoutData:n().object.isRequired,allowedActions:n().object.isRequired,children:n().node.isRequired,componentsDataStructure:n().object.isRequired,contentTypeDataStructure:n().object.isRequired,createActionAllowedFields:n().array.isRequired,from:n().string,initialValues:n().object,isCreatingEntry:n().bool.isRequired,isLoadingForData:n().bool.isRequired,isSingleType:n().bool.isRequired,onPost:n().func.isRequired,onPublish:n().func.isRequired,onDraftRelationCheck:n().func.isRequired,onPut:n().func.isRequired,onUnpublish:n().func.isRequired,readActionAllowedFields:n().array.isRequired,redirectToPreviousPage:n().func,slug:n().string.isRequired,status:n().string.isRequired,updateActionAllowedFields:n().array.isRequired};var dc=ir,it=t=>(0,y.IF)(`single-types/${t}`),nn=d(33348),uc=t=>Object.values(t||{}).reduce((r,o)=>Object.assign(r,o),{}),Oo=(t={})=>{const{plugins:r,_q:o,...s}={...t,...uc(t.plugins)};return o&&se()(s,"_q",encodeURIComponent(o)),`${(0,nn.stringify)(s,{encode:!1,addQueryPrefix:!0})}`};const Po=({allLayoutData:t,children:r,slug:o})=>{const s=(0,st.useQueryClient)(),{trackUsage:a}=(0,h.rS)(),{push:l}=(0,te.k6)(),{setCurrentStep:i}=(0,h.c1)(),c=(0,e.useRef)(a),[p,u]=(0,e.useState)(!0),[{query:m,rawQuery:f}]=(0,h.Kx)(),g=Oo(m),E=(0,h.lm)(),b=(0,J.I0)(),{formatAPIError:v}=(0,h.So)(y.OB),M=(0,h.kY)(),{post:D,put:T,del:P}=M,{componentsDataStructure:k,contentTypeDataStructure:C,data:R,isLoading:Z,status:j}=(0,J.v9)(nr),$=(0,e.useCallback)(V=>{const x=(0,y.kc)(V,t.contentType,t.components);return(0,h.dU)(x,t.contentType,t.components)},[t]);(0,e.useEffect)(()=>()=>{b(Mo())},[b]),(0,e.useEffect)(()=>{const V=Object.keys(t.components).reduce((z,K)=>{const I=(0,y.Di)(O()(t,["components",K,"attributes"],{}),t.components);return z[K]=(0,h.dU)(I,t.components[K],t.components),z},{}),x=(0,y.Di)(t.contentType.attributes,t.components),L=(0,h.dU)(x,t.contentType,t.components);b(To(V,L))},[t,b]),(0,e.useEffect)(()=>{const x=je.default.CancelToken.source();return(async z=>{b(en()),u(!0);try{const{data:K}=await M.get(it(`${o}${g}`),{cancelToken:z.token});b(er($(K))),u(!1)}catch(K){if(je.default.isCancel(K))return;const I=O()(K,"response.status",null);I===404&&b(tr(f,!0)),I===403&&(E({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),l("/"))}})(x),()=>x.cancel("Operation canceled by the user.")},[M,$,l,o,b,g,f,E]);const q=(0,e.useCallback)(V=>{E({type:"warning",message:v(V)})},[E,v]),H=(0,e.useCallback)(async V=>{try{c.current("willDeleteEntry",V);const{data:x}=await P(it(`${o}${g}`));return E({type:"success",message:{id:(0,y.OB)("success.record.delete")}}),c.current("didDeleteEntry",V),u(!0),b(tr(f,!0)),Promise.resolve(x)}catch(x){return c.current("didNotDeleteEntry",{error:x,...V}),q(x),Promise.reject(x)}},[P,o,q,E,g,b,f]),F=(0,e.useCallback)(async(V,x)=>{const L=it(`${o}${f}`);try{b(ce("submit-pending"));const{data:z}=await T(L,V);return c.current("didCreateEntry",x),E({type:"success",message:{id:(0,y.OB)("success.record.save")}}),i("contentManager.success"),s.invalidateQueries(["relation"]),b(et($(z))),u(!1),b(ce("resolved")),Promise.resolve(z)}catch(z){return c.current("didNotCreateEntry",{error:z,trackerProperty:x}),q(z),b(ce("resolved")),Promise.reject(z)}},[T,$,q,o,b,f,E,i,s]),X=(0,e.useCallback)(async()=>{try{c.current("willCheckDraftRelations");const V=it(`${o}/actions/numberOfDraftRelations`);b(ce("draft-relation-check-pending"));const x=await M.get(V);return c.current("didCheckDraftRelations"),b(ce("resolved")),x.data.data}catch(V){return q(V),b(ce("resolved")),Promise.reject(V)}},[M,q,o,b]),W=(0,e.useCallback)(async()=>{try{c.current("willPublishEntry");const V=it(`${o}/actions/publish${g}`);b(ce("publish-pending"));const{data:x}=await D(V);return c.current("didPublishEntry"),E({type:"success",message:{id:(0,y.OB)("success.record.publish")}}),b(et($(x))),b(ce("resolved")),Promise.resolve(x)}catch(V){return q(V),b(ce("resolved")),Promise.reject(V)}},[D,$,q,o,g,b,E]),Y=(0,e.useCallback)(async(V,x)=>{const L=it(`${o}${f}`);try{c.current("willEditEntry",x),b(ce("submit-pending"));const{data:z}=await T(L,V);return E({type:"success",message:{id:(0,y.OB)("success.record.save")}}),c.current("didEditEntry",{trackerProperty:x}),s.invalidateQueries(["relation"]),b(et($(z))),b(ce("resolved")),Promise.resolve(z)}catch(z){return q(z),c.current("didNotEditEntry",{error:z,trackerProperty:x}),b(ce("resolved")),Promise.reject(z)}},[T,$,q,o,b,f,E,s]),B=(0,e.useCallback)(async()=>{const V=it(`${o}/actions/unpublish${g}`);b(ce("unpublish-pending"));try{c.current("willUnpublishEntry");const{data:x}=await D(V);c.current("didUnpublishEntry"),E({type:"success",message:{id:(0,y.OB)("success.record.unpublish")}}),b(et($(x))),b(ce("resolved"))}catch(x){b(ce("resolved")),q(x)}},[D,$,E,q,o,b,g]);return r({componentsDataStructure:k,contentTypeDataStructure:C,data:R,isCreatingEntry:p,isLoadingForData:Z,onDelete:H,onPost:F,onDraftRelationCheck:X,onPublish:W,onPut:Y,onUnpublish:B,redirectionLink:"/",status:j})};Po.propTypes={allLayoutData:n().shape({components:n().object.isRequired,contentType:n().object.isRequired}).isRequired,children:n().func.isRequired,slug:n().string.isRequired};var mc=(0,e.memo)(Po),pc=d(56243);function gc(t,r){return o=>{const s=r();return e.createElement(t,{...o,...s})}}var fc=gc;function hc(){const{initialData:t,hasDraftAndPublish:r}=(0,h.Wq)(),o=t.publishedAt!==void 0&&t.publishedAt!==null;return{hasDraftAndPublish:r,isPublished:o}}var yc=hc;const bc=(0,N.ZP)(pc.Z)`
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  * {
    fill: ${({theme:t,$bulletColor:r})=>t.colors[r]};
  }
`,wo=({hasDraftAndPublish:t,isPublished:r})=>{const{formatMessage:o}=(0,Q.Z)();if(!t)return null;const s={draft:{textColor:"secondary700",bulletColor:"secondary600",box:{background:"secondary100",borderColor:"secondary200"}},published:{textColor:"success700",bulletColor:"success600",box:{background:"success100",borderColor:"success200"}}},a=r?s.published:s.draft;return e.createElement(A.x,{hasRadius:!0,as:"aside",paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,...a.box},e.createElement(A.x,{as:w.k},e.createElement(bc,{$bulletColor:a.bulletColor}),e.createElement(A.x,{paddingLeft:3},e.createElement(G.Z,{textColor:a.textColor},o({id:(0,y.OB)("containers.Edit.information.editing"),defaultMessage:"Editing"}),"\xA0"),e.createElement(G.Z,{fontWeight:"bold",textColor:a.textColor},r&&o({id:(0,y.OB)("containers.Edit.information.publishedVersion"),defaultMessage:"published version"}),!r&&o({id:(0,y.OB)("containers.Edit.information.draftVersion"),defaultMessage:"draft version"})))))};wo.propTypes={hasDraftAndPublish:n().bool.isRequired,isPublished:n().bool.isRequired};var Ec=fc(wo,yc),yt=d(66456),rn=d(29439),on=d(22342),sn=d(96166),an=d(88693);function vc(t,r){return o=>{const s=r();return e.createElement(t,{...o,...s})}}var Cc=vc;function Rc(){const{initialData:t,isCreatingEntry:r,isSingleType:o,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:p,publishConfirmation:u,onPublishPromptDismissal:m}=(0,h.Wq)();return{initialData:t,isCreatingEntry:r,isSingleType:o,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:p,publishConfirmation:u,onPublishPromptDismissal:m}}var Mc=Rc;const Fo=(0,N.ZP)(w.k)`
  text-align: center;
`,Lo=({allowedActions:{canUpdate:t,canCreate:r,canPublish:o},initialData:s,isCreatingEntry:a,isSingleType:l,hasDraftAndPublish:i,layout:c,modifiedData:p,onPublish:u,onUnpublish:m,status:f,publishConfirmation:{show:g,draftCount:E},onPublishPromptDismissal:b})=>{const{goBack:v}=(0,te.k6)(),[M,D]=(0,e.useState)(!1),{formatMessage:T}=(0,Q.Z)(),P=O()(c,["settings","mainField"],"id"),k=O()(c,["info","displayName"],"NOT FOUND"),C=!ve()(s,p)||a&&!Me()(p);let Z=T({id:(0,y.OB)("containers.Edit.pluginHeader.title.new"),defaultMessage:"Create an entry"});!a&&!l&&(Z=s[P]||k),l&&(Z=k);let j=null;if(a&&r&&(j=e.createElement(w.k,{gap:2},i&&e.createElement(me.z,{disabled:!0,startIcon:e.createElement(yt.Z,null),variant:"secondary"},T({id:"app.utils.publish",defaultMessage:"Publish"})),e.createElement(me.z,{disabled:!C,loading:f==="submit-pending",type:"submit"},T({id:(0,y.OB)("containers.Edit.submit"),defaultMessage:"Save"})))),!a&&t){const F=i&&o,X=!Me()(s.publishedAt),W=X?f==="unpublish-pending":f==="publish-pending",Y=X?{id:"app.utils.unpublish",defaultMessage:"Unpublish"}:{id:"app.utils.publish",defaultMessage:"Publish"},B=X?()=>D(!0):()=>u();j=e.createElement(w.k,null,F&&e.createElement(me.z,{disabled:C,loading:W,onClick:B,startIcon:e.createElement(yt.Z,null),variant:"secondary"},T(Y)),e.createElement(A.x,{paddingLeft:F?2:0},e.createElement(me.z,{disabled:!C,loading:f==="submit-pending",type:"submit"},T({id:(0,y.OB)("containers.Edit.submit"),defaultMessage:"Save"}))))}const $=()=>D(F=>!F),q=()=>{$(),m()},H=`${T({id:(0,y.OB)("api.id"),defaultMessage:"API ID "})} : ${c.apiID}`;return e.createElement(e.Fragment,null,e.createElement(fe.T,{title:Z.toString(),primaryAction:j,subtitle:H,navigationAction:e.createElement(h.rU,{startIcon:e.createElement(rn.Z,null),onClick:F=>{F.preventDefault(),v()},to:"/"},T({id:"global.back",defaultMessage:"Back"}))}),e.createElement(on.V,{onClose:$,title:"Confirmation",labelledBy:"confirmation",describedBy:"confirm-description",isOpen:M},e.createElement(sn.a,{icon:e.createElement(wt.Z,null)},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},e.createElement(G.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.unpublish"),defaultMessage:"Unpublish this content will automatically change it to a draft."},{br:()=>e.createElement("br",null)}))),e.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},e.createElement(G.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.unpublish-question"),defaultMessage:"Are you sure you want to unpublish it?"}))))),e.createElement(an.c,{startAction:e.createElement(me.z,{onClick:$,variant:"tertiary"},T({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{variant:"danger-light",onClick:q},T({id:"components.popUpWarning.button.confirm",defaultMessage:"Confirm"}))})),e.createElement(on.V,{onClose:b,title:T({id:(0,y.OB)("popUpWarning.warning.has-draft-relations.title"),defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:g},e.createElement(sn.a,{icon:e.createElement(wt.Z,null)},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Fo,{justifyContent:"center"},e.createElement(G.Z,{id:"confirm-description"},E,T({id:(0,y.OB)("popUpwarning.warning.has-draft-relations.message"),defaultMessage:"<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."},{b:F=>e.createElement(G.Z,{fontWeight:"bold"},F),count:E}))),e.createElement(Fo,{justifyContent:"center"},e.createElement(G.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.publish-question"),defaultMessage:"Do you still want to publish?"}))))),e.createElement(an.c,{startAction:e.createElement(me.z,{onClick:b,variant:"tertiary"},T({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{variant:"success",onClick:u},T({id:(0,y.OB)("popUpwarning.warning.has-draft-relations.button-confirm"),defaultMessage:"Publish"}))})))};Lo.propTypes={allowedActions:n().shape({canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canPublish:n().bool.isRequired}).isRequired,initialData:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isSingleType:n().bool.isRequired,status:n().string.isRequired,layout:n().object.isRequired,hasDraftAndPublish:n().bool.isRequired,modifiedData:n().object.isRequired,onPublish:n().func.isRequired,onUnpublish:n().func.isRequired,publishConfirmation:n().shape({show:n().bool.isRequired,draftCount:n().number.isRequired}).isRequired,onPublishPromptDismissal:n().func.isRequired};const Tc=(0,e.memo)(Lo,ve());var Dc=Cc(Tc,Mc),Ic=t=>{if(!t.layouts)return[];const r=t.layouts.edit,o=t.attributes,s=i=>O()(o,[i,"type"],"");let a=0;const l=[];return r.forEach(i=>{const c=i.some(({name:p})=>s(p)==="dynamiczone");l[a]||(l[a]=[]),c?(a=a===0&&Me()(l[0])?0:a+1,l[a]||(l[a]=[]),l[a].push(i),a+=1):l[a].push(i)}),l.filter(i=>i.length>0)},kc=d(91815),xc=d.n(kc),Oc=d(3704),So=d.n(Oc),Pc=(t,r)=>{const o=s=>{const a=(0,h.ZT)(t,[{action:`plugin::content-manager.explorer.${s}`,subject:r}]);return xc()(So()(a,"properties.fields"))};return{createActionAllowedFields:o("create"),readActionAllowedFields:o("read"),updateActionAllowedFields:o("update")}},wc=t=>{if(!t)return[];const o=[...t.contentType.layouts.edit,...Object.values(t.components).flatMap(a=>a.layouts.edit)].flat().filter(a=>a.fieldSchema.customField).map(a=>a.fieldSchema.customField);return[...new Set(o)]};function Fc(t,r){return o=>{const s=r();return e.createElement(t,{...o,...s})}}var Lc=Fc;function Sc(){const{hasDraftAndPublish:t,modifiedData:r}=(0,h.Wq)();let o={};return t&&(o=Me()(r.publishedAt)?{status:"draft"}:{status:"published"}),{hasDraftAndPublish:t,trackerProperty:o}}var Ac=Sc;const Ao=({onDelete:t,trackerProperty:r})=>{const[o,s]=(0,e.useState)(!1),[a,l]=(0,e.useState)(!1),{formatMessage:i}=(0,Q.Z)(),{formatAPIError:c}=(0,h.So)(y.OB),p=(0,h.lm)(),u=()=>s(f=>!f),m=async()=>{try{l(!0),await t(r),l(!1),u()}catch(f){l(!1),u(),p({type:"warning",message:c(f)})}};return e.createElement(e.Fragment,null,e.createElement(me.z,{onClick:u,size:"S",startIcon:e.createElement(He.Z,null),variant:"danger-light"},i({id:(0,y.OB)("containers.Edit.delete-entry"),defaultMessage:"Delete this entry"})),e.createElement(h.QH,{isConfirmButtonLoading:a,isOpen:o,onConfirm:m,onToggleDialog:u}))};Ao.propTypes={onDelete:n().func.isRequired,trackerProperty:n().object.isRequired};const $c=(0,e.memo)(Ao,ve());var Zc=Lc($c,Ac);const lr=({columns:t,customFieldInputs:r})=>e.createElement(De.r,{gap:4},t.map(({fieldSchema:o,labelAction:s,metadatas:a,name:l,size:i,queryInfos:c})=>{if(o.type==="component"){const{component:u,max:m,min:f,repeatable:g=!1,required:E=!1}=o;return e.createElement(ue.P,{col:i,s:12,xs:12,key:u},e.createElement(Yt,{componentUid:u,labelAction:s,isRepeatable:g,intlLabel:{id:a.label,defaultMessage:a.label},max:m,min:f,name:l,required:E}))}return e.createElement(ue.P,{col:i,key:l,s:12,xs:12},e.createElement(qn,{size:i,fieldSchema:o,keys:l,labelAction:s,metadatas:a,queryInfos:c,customFieldInputs:r}))}));lr.defaultProps={customFieldInputs:{}},lr.propTypes={columns:n().array.isRequired,customFieldInputs:n().object};var Bc=lr,cr=d(98178);const dr=t=>t["content-manager_editViewLayoutManager"].currentLayout,qc=(0,cr.P1)(dr,t=>Ic(t?.contentType??{})),Nc=(0,cr.P1)(dr,t=>wc(t)),jc=(()=>window&&window.strapi&&window.strapi.isEE?d(28243).Z:d(73710).Z)(),$o=ke.Z.contentManager,Wc=[{action:"plugin::content-type-builder.read",subject:null}],ur=t=>{let{allowedActions:r,isSingleType:o,goBack:s,slug:a,id:l,origin:i,userPermissions:c}=t;const{trackUsage:p}=(0,h.rS)(),{formatMessage:u}=(0,Q.Z)(),{layout:m,formattedContentTypeLayout:f,customFieldUids:g}=(0,J.v9)(R=>({layout:dr(R),formattedContentTypeLayout:qc(R),customFieldUids:Nc(R)})),{isLazyLoading:E,lazyComponentStore:b}=Nn(g),{createActionAllowedFields:v,readActionAllowedFields:M,updateActionAllowedFields:D}=Pc(c,a),T=o?$o.singleTypesConfigurations:$o.collectionTypesConfigurations,P=`/content-manager/${o?"singleType":"collectionType"}/${a}/configurations/edit`,k=o?mc:jl,C=R=>R.every(Z=>Z.every(j=>j.fieldSchema.type==="dynamiczone"));return E?e.createElement(h.dO,null):e.createElement(k,{allLayoutData:m,slug:a,id:l,origin:i},R=>{let{componentsDataStructure:Z,contentTypeDataStructure:j,data:$,isCreatingEntry:q,isLoadingForData:H,onDelete:F,onPost:X,onPublish:W,onDraftRelationCheck:Y,onPut:B,onUnpublish:V,redirectionLink:x,status:L}=R;return e.createElement(dc,{allowedActions:r,allLayoutData:m,createActionAllowedFields:v,componentsDataStructure:Z,contentTypeDataStructure:j,from:x,initialValues:$,isCreatingEntry:q,isLoadingForData:H,isSingleType:o,onPost:X,onPublish:W,onDraftRelationCheck:Y,onPut:B,onUnpublish:V,readActionAllowedFields:M,redirectToPreviousPage:s,slug:a,status:L,updateActionAllowedFields:D},e.createElement(Re.o,{"aria-busy":L!=="resolved"},e.createElement(Dc,{allowedActions:r}),e.createElement(Ze.D,null,e.createElement(De.r,{gap:4},e.createElement(ue.P,{col:9,s:12},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},f.map((z,K)=>{if(C(z)){const{0:{0:{name:I,fieldSchema:S,metadatas:oe,labelAction:_}}}=z;return e.createElement(A.x,{key:K},e.createElement(De.r,{gap:4},e.createElement(ue.P,{col:12,s:12,xs:12},e.createElement(ql,{name:I,fieldSchema:S,labelAction:_,metadatas:oe}))))}return e.createElement(A.x,{key:K,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150"},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},z.map((I,S)=>e.createElement(Bc,{columns:I,customFieldInputs:b,key:S}))))}))),e.createElement(ue.P,{col:3,s:12},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Ec,null),e.createElement(A.x,{as:"aside","aria-labelledby":"additional-information",background:"neutral0",borderColor:"neutral150",hasRadius:!0,paddingBottom:4,paddingLeft:4,paddingRight:4,paddingTop:6,shadow:"tableShadow"},e.createElement(jc,null),e.createElement(Ut,{area:"contentManager.editView.informations"})),e.createElement(A.x,{as:"aside","aria-labelledby":"links"},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Ut,{area:"contentManager.editView.right-links",slug:a}),a!=="strapi::administrator"&&e.createElement(h.jW,{permissions:Wc},e.createElement(h.Qj,{onClick:()=>{p("willEditEditLayout")},size:"S",startIcon:e.createElement(qe.Z,null),style:{width:"100%"},to:`/plugins/content-type-builder/content-types/${a}`,variant:"secondary"},u({id:(0,y.OB)("link-to-ctb"),defaultMessage:"Edit the model"}))),e.createElement(h.jW,{permissions:T},e.createElement(h.Qj,{size:"S",startIcon:e.createElement(Ue.Z,null),style:{width:"100%"},to:P,variant:"secondary"},u({id:"app.links.configure-view",defaultMessage:"Configure the view"}))),r.canDelete&&!q&&e.createElement(Zc,{onDelete:F})))))))))})};ur.defaultProps={id:null,isSingleType:!1,origin:null,userPermissions:[]},ur.propTypes={allowedActions:n().shape({canRead:n().bool.isRequired,canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canDelete:n().bool.isRequired}).isRequired,id:n().string,isSingleType:n().bool,goBack:n().func.isRequired,origin:n().string,slug:n().string.isRequired,userPermissions:n().array};var zc=(0,e.memo)(ur);const mr=t=>{const r=(0,e.useMemo)(()=>(0,y.TA)(t.slug),[t.slug]),{isLoading:o,allowedActions:s}=(0,h.ss)(r,t.userPermissions);return o?e.createElement(h.dO,null):e.createElement(zc,{...t,allowedActions:s})};mr.defaultProps={permissions:[]},mr.propTypes={permissions:n().array,slug:n().string.isRequired,userPermissions:n().array.isRequired};var Vc=(0,e.memo)(mr,ve());const Zo=({layout:t,...r})=>{const o=(0,J.v9)(mt.Z),s=(0,J.I0)(),[{query:a}]=(0,h.Kx)(),{runHookWaterfall:l}=(0,h.j1)(),i=(0,de.r5)(a,r.slug,"editView");return(0,e.useEffect)(()=>{const c=l($e.Eo,{layout:t,query:a});return s(Dt(c.layout,a)),()=>{s(Tt())}},[t,s,a,l]),!o||!i?e.createElement(h.dO,null):e.createElement(Vc,{...r,userPermissions:i})};Zo.propTypes={layout:n().shape({components:n().object.isRequired,contentType:n().shape({uid:n().string.isRequired,settings:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().object.isRequired}).isRequired}).isRequired};var ln=Zo,Uc=d(23940),At=d.n(Uc),Bo=d(9026);const pr=t=>t.reduce((r,o)=>r+o.size,0),Hc=t=>t.reduce((r,o,s)=>{const a={rowId:s,rowContent:o};return r.concat(a)},[]),bt=t=>t.reduce((r,o)=>{let s=[];const a=o.rowContent.reduce((c,p)=>{const u=pr(c);return p.name==="_TEMP_"||(u+p.size<=12?c.push(p):s.push(p)),c},[]),l=r.length===0?0:Math.max.apply(Math,r.map(c=>c.rowId))+1,i=pr(a);if(i<12&&a.push({name:"_TEMP_",size:12-i}),r.push({rowId:l,rowContent:a}),s.length>0){const c=pr(s);c<12&&s.push({name:"_TEMP_",size:12-c}),r.push({rowId:l+1,rowContent:s}),s=[]}return r},[]).filter(r=>r.rowContent.length>0).filter(r=>r.rowContent.length===1?r.rowContent[0].name!=="_TEMP_":!0),Qc=t=>t.reduce((r,o)=>{const s=o.rowContent.filter(a=>a.name!=="_TEMP_");return r.concat([s])},[]),Gc=(t,r=[])=>r.reduce((o,{rowContent:s})=>{const a=s.find(l=>l.name===t)?.size??null;return a&&(o=a),o},null),Kc=(t,r,o=[])=>o.map(s=>(s.rowContent=s.rowContent.map(a=>a.name===t?{...a,size:r}:a),s)),qo=6,gr={fieldForm:{},componentLayouts:{},metaToEdit:"",initialData:{},metaForm:{},modifiedData:{}};var Yc=(t=gr,r)=>(0,or.ZP)(t,o=>{const s=["modifiedData","layouts","edit"];switch(r.type){case"MOVE_ROW":{const a=O()(t,s,[]),{fromIndex:l,toIndex:i}=r;se()(o,s,(0,y.W3)(a,l,i));break}case"ON_ADD_FIELD":{const a=Qe()(t),l=O()(a,["modifiedData","attributes",r.name],{}),i=r.fieldSizes[l?.customField]?.default??r.fieldSizes[l?.type]?.default??qo,c=O()(a,s,[]).length,p=[...s,c-1,"rowContent"],u=O()(a,p,[]);let m=O()(a,s,[]);Array.isArray(u)?se()(m,[c>0?c-1:0,"rowContent"],[...u,{name:r.name,size:i}]):se()(m,[c>0?c-1:0,"rowContent"],[{name:r.name,size:i}]);const f=bt(m);se()(o,s,f);break}case"ON_CHANGE":{se()(o,["modifiedData",...r.keys],r.value);break}case"ON_CHANGE_META":{se()(o,["metaForm","metadata",...r.keys],r.value);break}case"ON_CHANGE_SIZE":{se()(o,["metaForm","size"],r.value);break}case"ON_RESET":{o.modifiedData=t.initialData;break}case"REMOVE_FIELD":{const a=O()(t,[...s,r.rowIndex,"rowContent"],[]);let l=Qe()(t);if(a.length===1||a.length===2&&O()(a,[1,"name"],"")==="_TEMP_"){const c=O()(t,s,[]);se()(l,s,c.filter((p,u)=>r.rowIndex!==u))}else se()(l,[...s,r.rowIndex,"rowContent"],a.filter((c,p)=>p!==r.fieldIndex));const i=bt(O()(l,s,[]));se()(o,s,i);break}case"REORDER_DIFF_ROW":{const a=O()(t,[...s,r.dragRowIndex,"rowContent"],[]),l=O()(t,[...s,r.hoverRowIndex,"rowContent"],[]),i=O()(t,[...s,r.dragRowIndex,"rowContent",r.dragIndex],{}),c=[...l,i];let p=Qe()(t);se()(p,[...s,r.dragRowIndex,"rowContent"],a.filter((m,f)=>r.dragIndex!==f)),se()(p,[...s,r.hoverRowIndex,"rowContent"],(0,y.W3)(c,c.length-1,r.hoverIndex));const u=bt(O()(p,s,[]));se()(o,s,u);break}case"REORDER_ROW":{const a=Qe()(t),l=O()(a,[...s,r.dragRowIndex,"rowContent"],[]);se()(a,[...s,r.dragRowIndex,"rowContent"],(0,y.W3)(l,r.dragIndex,r.hoverIndex));const i=bt(O()(a,s,[]));se()(o,s,i);break}case"SET_FIELD_TO_EDIT":{o.metaToEdit=r.name,o.metaForm={metadata:O()(t,["modifiedData","metadatas",r.name,"edit"],{}),size:Gc(r.name,t.modifiedData?.layouts?.edit)??qo};break}case"SUBMIT_META_FORM":{se()(o,["modifiedData","metadatas",t.metaToEdit,"edit"],t.metaForm.metadata);const a=Qe()(O()(t,s,[])),l=Kc(t.metaToEdit,t.metaForm.size,a);l.length>0&&se()(o,s,bt(l));break}case"SUBMIT_SUCCEEDED":{o.initialData=t.modifiedData;break}case"UNSET_FIELD_TO_EDIT":{o.metaToEdit="",o.metaForm={};break}default:return o}}),Xc=(t,r,o)=>{let s=Qe()(r);return se()(s,["layouts","edit"],bt(Hc(r.layouts.edit))),{...t,initialData:s,modifiedData:s,componentLayouts:o}},We=d(34853);const No=e.createContext();function fr({attributes:t,buttonData:r,children:o,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:p,relationsLayout:u,removeField:m,selectedItemName:f,setEditFieldToSelect:g,...E}){return e.createElement(No.Provider,{value:{attributes:t,buttonData:r,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:p,relationsLayout:u,removeField:m,selectedItemName:f,setEditFieldToSelect:g,...E}},o)}fr.defaultProps={attributes:{},buttonData:[],goTo(){},layout:[],metadatas:{},moveItem(){},moveRow(){},onAddData(){},relationsLayout:[],removeField(){},selectedItemName:null,setEditFieldToSelect(){}},fr.propTypes={attributes:n().object,buttonData:n().array,children:n().node.isRequired,goTo:n().func,layout:n().array,metadatas:n().object,moveItem:n().func,moveRow:n().func,onAddData:n().func,relationsLayout:n().array,removeField:n().func,selectedItemName:n().string,setEditFieldToSelect:n().func};function lt(){return e.useContext(No)}var cn=d(74506),jo=d(45112);const Wo=({componentUid:t})=>{const{componentLayouts:r}=lt(),{formatMessage:o}=(0,Q.Z)(),s=O()(r,[t],{}),a=O()(s,["layouts","edit"],[]);return e.createElement(A.x,{padding:3},a.map((l,i)=>e.createElement(De.r,{gap:4,key:i},l.map(c=>e.createElement(ue.P,{key:c.name,col:c.size},e.createElement(A.x,{paddingTop:2},e.createElement(w.k,{alignItems:"center",background:"neutral0",paddingLeft:3,paddingRight:3,height:`${32/16}rem`,hasRadius:!0,borderColor:"neutral200"},e.createElement(G.Z,{textColor:"neutral800"},c.name))))))),e.createElement(A.x,{paddingTop:2},e.createElement(h.rU,{startIcon:e.createElement(jo.Z,null),to:`/content-manager/components/${t}/configurations/edit`},o({id:(0,Ee.Z)("components.FieldItem.linkToComponentLayout"),defaultMessage:"Set the component's layout"}))))};Wo.propTypes={componentUid:n().string.isRequired};var Jc=Wo,Et=d(14911);const _c=(0,N.ZP)(w.k)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({theme:t})=>`
      background-color: ${t.colors.primary100};
      border-color: ${t.colors.primary200};

      ${G.Z} {
          color: ${t.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,zo=({components:t})=>{const{componentLayouts:r}=lt();return e.createElement(w.k,{gap:2,overflow:"scroll hidden",padding:3},t.map(o=>e.createElement(_c,{hasRadius:!0,background:"neutral0",justifyContent:"center",alignItems:"center",height:`${84/16}rem`,minWidth:`${140/16}rem`,key:o,padding:2,direction:"column",borderColor:"neutral200",as:Et.rU,to:`/content-manager/components/${o}/configurations/edit`},e.createElement(_t,null),e.createElement(A.x,{paddingTop:1},e.createElement(G.Z,{fontSize:1,textColor:"neutral600",fontWeight:"bold"},r?.[o]?.info?.displayName??"")))))};zo.propTypes={components:n().arrayOf(n().string).isRequired};var ed=zo;const Vo=(0,N.ZP)(ye.h)`
  background-color: transparent;
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,hr=({attribute:t,onEditField:r,onDeleteField:o,children:s})=>{const{formatMessage:a}=(0,Q.Z)();return e.createElement(A.x,{overflow:"hidden",width:"100%"},e.createElement(w.k,{paddingLeft:3,alignItems:"center",justifyContent:"space-between"},e.createElement(G.Z,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0},s),e.createElement(w.k,null,e.createElement(Vo,{label:a({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:s}),onClick:r,icon:e.createElement(qe.Z,null),noBorder:!0}),e.createElement(Vo,{label:a({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:s}),"data-testid":"delete-field",onClick:o,icon:e.createElement(He.Z,null),noBorder:!0}))),t?.type==="component"&&e.createElement(Jc,{componentUid:t.component}),t?.type==="dynamiczone"&&e.createElement(ed,{components:t.components}))};hr.defaultProps={attribute:void 0},hr.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),onEditField:n().func.isRequired,onDeleteField:n().func.isRequired,children:n().string.isRequired};var td=hr;const nd=(0,N.ZP)(w.k)`
  position: relative;
  ${({isFirst:t,isLast:r,hasHorizontalPadding:o})=>t?`
        padding-right: 4px;
      `:r?`
        padding-left: 4px;
      `:o?`
        padding: 0 4px;
      `:""}
  ${({showRightCarret:t,showLeftCarret:r,theme:o})=>t?`
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${o.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:r?`
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${o.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:""};
`,rd=(0,N.ZP)(Je.Z)`
  height: ${12/16}rem;
  width: ${12/16}rem;
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,od=(0,N.ZP)(w.k)`
  display: ${({dragStart:t})=>t?"none":"flex"};
  opacity: ${({isDragging:t,isFullSize:r,isHidden:o})=>t&&!r?.2:t&&r||o?0:1};
`,sd=(0,N.ZP)(w.k)`
  cursor: all-scroll;
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
`,yr=({attribute:t,children:r,index:o,lastIndex:s,moveItem:a,moveRow:l,name:i,onDeleteField:c,onEditField:p,rowIndex:u,size:m})=>{const[f,g]=(0,e.useState)(!1),E=i==="_TEMP_",{setIsDraggingSibling:b}=lt(),v=m===12,M=(0,e.useRef)(null),D=(0,e.useRef)(null),[{clientOffset:T,isOver:P},k]=(0,cn.useDrop)({accept:y._Q.EDIT_FIELD,hover(B,V){if(!D.current||B.size!==12)return;const x=V.getItem().index,L=o,z=V.getItem().rowIndex,K=u;if(x===L&&z===K)return;const I=D.current.getBoundingClientRect(),S=(I.bottom-I.top)/2,_=V.getClientOffset().y-I.top;z<K&&_<S||z>K&&_>S||(l(z,K),B.rowIndex=K,B.itemIndex=L)},drop(B,V){if(!D.current)return;const x=V.getItem().index,L=o,z=V.getItem().rowIndex,K=u;if(B.size===12||x===L&&z===K)return;const I=D.current.getBoundingClientRect();if(Math.abs(V.getClientOffset().x-I.left)>I.width/1.8){a(x,L+1,z,K),B.itemIndex=L+1,B.rowIndex=K;return}a(x,L,z,K),B.itemIndex=L,B.rowIndex=K},collect:B=>({canDrop:B.canDrop(),clientOffset:B.getClientOffset(),isOver:B.isOver(),isOverCurrent:B.isOver({shallow:!0}),itemType:B.getItemType()})}),[{isDragging:C,getItem:R},Z,j]=(0,cn.useDrag)({type:y._Q.EDIT_FIELD,item(){return b(!0),{index:o,labelField:r,rowIndex:u,name:i,size:m}},canDrag(){return i!=="_TEMP_"},collect:B=>({isDragging:B.isDragging(),getItem:B.getItem()}),end(){b(!1)}});(0,e.useEffect)(()=>{j((0,Ot.rX)(),{captureDraggingState:!0})},[j]);const $={dragRef:Z(M),dropRef:k(D)};let q=!1,H=!1;if(D.current&&T){const B=D.current.getBoundingClientRect();q=P&&R.size!==12&&Math.abs(T.x-B.left)<B.width/2,H=P&&R.size!==12&&Math.abs(T.x-B.left)>B.width/2,i==="_TEMP_"&&(q=P&&R.size!==12,H=!1)}const F=()=>t&&v?`${74/16}rem`:`${32/16}rem`,X=o===0&&!v,W=o===s&&!v,Y=o!==0&&!v;return e.createElement(ue.P,{col:m},e.createElement(nd,{ref:$.dropRef,showLeftCarret:q,showRightCarret:H,isFirst:X,isLast:W,hasHorizontalPadding:Y,onDrag:()=>{v&&!f&&g(!0)},onDragEnd:()=>{v&&g(!1)}},f&&v&&e.createElement(A.x,{width:"100%",height:"2px",background:"primary600"}),e.createElement(od,{width:v&&f?0:"100%",borderColor:"neutral150",hasRadius:!0,background:"neutral100",minHeight:F(),alignItems:"stretch",isDragging:C,dragStart:f,isFullSize:v,isHidden:E},e.createElement(sd,{as:"span",type:"button",ref:$.dragRef,onClick:B=>B.stopPropagation(),alignItems:"center",paddingLeft:3,paddingRight:3,tabIndex:-1},e.createElement(rd,null)),!E&&e.createElement(td,{attribute:t,onEditField:p,onDeleteField:c},r))))};yr.defaultProps={attribute:void 0},yr.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),children:n().string.isRequired,index:n().number.isRequired,moveItem:n().func.isRequired,moveRow:n().func.isRequired,name:n().string.isRequired,onDeleteField:n().func.isRequired,onEditField:n().func.isRequired,rowIndex:n().number.isRequired,lastIndex:n().number.isRequired,size:n().number.isRequired};var ad=yr;const Uo=({rowItem:t,onRemoveField:r,rowId:o,rowIndex:s,index:a,lastIndex:l})=>{const{setEditFieldToSelect:i,attributes:c,modifiedData:p,moveRow:u,moveItem:m}=lt(),f=O()(c,[t.name],{}),g=O()(p,["metadatas",t.name,"edit","label"],"");return e.createElement(ad,{onEditField:()=>i(t.name),onDeleteField:()=>r(o,a),attribute:f,index:a,lastIndex:l,rowIndex:s,name:t.name,size:t.size,moveRow:u,moveItem:m},g||t.name)};Uo.propTypes={index:n().number.isRequired,lastIndex:n().number.isRequired,onRemoveField:n().func.isRequired,rowId:n().number.isRequired,rowIndex:n().number.isRequired,rowItem:n().object.isRequired};var id=Uo;const Ho=({row:t,onRemoveField:r,rowIndex:o})=>e.createElement(De.r,null,t.rowContent.map((s,a)=>e.createElement(id,{key:s.name,rowItem:s,index:a,rowId:t.rowId,onRemoveField:r,rowIndex:o,lastIndex:t.rowContent.length-1})));Ho.propTypes={onRemoveField:n().func.isRequired,row:n().object.isRequired,rowIndex:n().number.isRequired};var ld=Ho;const cd=[{action:"plugin::content-type-builder.read",subject:null}];var dd=()=>{const{trackUsage:t}=(0,h.rS)(),{formatMessage:r}=(0,Q.Z)(),{slug:o,modifiedData:s,isContentTypeView:a}=lt(),l=a?"content-types":"components",i=`/plugins/content-type-builder/${l==="content-types"?l:"component-categories"}`,c=O()(s,"category",""),p=l==="content-types"?o:`${c}/${o}`,u=()=>{t("willEditEditLayout")};return o==="strapi::administrator"?null:e.createElement(h.jW,{permissions:cd},e.createElement(h.Qj,{to:`${i}/${p}`,onClick:u,size:"S",startIcon:e.createElement(qe.Z,null),variant:"secondary"},r({id:(0,Ee.Z)(`edit-settings-view.link-to-ctb.${l}`),defaultMessage:"Edit the content type"})))};const Qo=({editLayout:t,fields:r,onRemoveField:o,onAddField:s})=>{const{formatMessage:a}=(0,Q.Z)();return e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(w.k,{justifyContent:"space-between"},e.createElement("div",null,e.createElement(A.x,null,e.createElement(G.Z,{fontWeight:"bold"},a({id:(0,y.OB)("containers.ListPage.displayedFields"),defaultMessage:"Displayed fields"}))),e.createElement(A.x,null,e.createElement(G.Z,{variant:"pi",textColor:"neutral600"},a({id:"containers.SettingPage.editSettings.description",defaultMessage:"Drag & drop the fields to build the layout"})))),e.createElement(dd,null)),e.createElement(A.x,{padding:4,hasRadius:!0,borderStyle:"dashed",borderWidth:"1px",borderColor:"neutral300"},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.map((l,i)=>e.createElement(ld,{key:l.rowId,row:l,rowIndex:i,onRemoveField:o})),e.createElement(We.O,{id:"label",label:a({id:(0,y.OB)("containers.SettingPage.add.field"),defaultMessage:"Insert another field"}),as:me.z,"data-testid":"add-field",fullWidth:!0,startIcon:e.createElement(Lt.Z,null),endIcon:null,variant:"secondary",disabled:r.length===0},r.map(l=>e.createElement(We.s,{key:l,onClick:()=>s(l)},l))))))};Qo.propTypes={editLayout:n().array.isRequired,fields:n().array.isRequired,onAddField:n().func.isRequired,onRemoveField:n().func.isRequired};var ud=Qo,Go=d(85025),Ko=d(55225),Yo=d(31600),Xo=d(11406),$t=d(32031),md=d(73779),dn=d(88675),pd=d(22348),Jo=d(7184),br=d(43475),gd=d(82512),Er=d(83218),fd=d(872),hd=d(17757),yd=d(1176),bd=d(15431);const _o={biginteger:e.createElement($t.Z,null),boolean:e.createElement(md.Z,null),date:e.createElement(dn.Z,null),datetime:e.createElement(dn.Z,null),decimal:e.createElement($t.Z,null),email:e.createElement(pd.Z,null),enum:e.createElement(Jo.Z,null),enumeration:e.createElement(Jo.Z,null),file:e.createElement(br.Z,null),files:e.createElement(br.Z,null),float:e.createElement($t.Z,null),integer:e.createElement($t.Z,null),media:e.createElement(br.Z,null),number:e.createElement($t.Z,null),relation:e.createElement(gd.Z,null),string:e.createElement(Er.Z,null),text:e.createElement(Er.Z,null),richtext:e.createElement(Er.Z,null),time:e.createElement(dn.Z,null),timestamp:e.createElement(dn.Z,null),json:e.createElement(fd.Z,null),uid:e.createElement(hd.Z,null),component:e.createElement(yd.Z,null),dynamiczone:e.createElement(bd.Z,null)},vr=({type:t,customFieldUid:r})=>{const o=(0,h.mZ)();let s=_o[t];if(r){const l=o.get(r).icon;l&&(s=e.createElement(A.x,{marginRight:3,width:7,height:6},e.createElement(l,null)))}return _o[t]?s:null};vr.defaultProps={customFieldUid:null},vr.propTypes={type:n().string.isRequired,customFieldUid:n().string};var es=vr,Ed=t=>t.reduce((r,o)=>{const s=o?.attributes??{},a=Object.keys(s).filter(l=>!["boolean","component","dynamiczone","json","media","password","relation","text","richtext"].includes(s?.[l]?.type??""));return r[o.uid]=a,r},{}),ts=t=>{let r;switch(t){case"description":case"label":case"placeholder":r="text";break;case"mainField":r="select";break;case"editable":r="bool";break;default:r=""}const o=t==="mainField"?(0,y.OB)("containers.SettingPage.editSettings.entry.title"):(0,y.OB)(`form.Input.${t}`);return{type:r,label:{id:o}}},vt=d(42882),Zt=d(9139);const Cr=({type:t,options:r,onChange:o,value:s,name:a,...l})=>{const{formatMessage:i}=(0,Q.Z)();switch(t){case"text":return e.createElement(In.o,{onChange:o,value:s,name:a,...l});case"bool":return e.createElement(Zt.s,{onChange:c=>{o({target:{name:a,value:c.target.checked}})},checked:s,name:a,onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),...l});case"select":return e.createElement(Ne.P,{value:s,name:a,onChange:c=>o({target:{name:a,value:c}}),...l},r.map(c=>e.createElement(be.W,{key:c,value:c},c)));default:return null}};Cr.defaultProps={options:void 0},Cr.propTypes={type:n().string.isRequired,options:n().arrayOf(n().string),onChange:n().func.isRequired,value:n().oneOfType([n().string,n().bool]).isRequired,name:n().string.isRequired};var vd=Cr;const Cd=[[4,"33%"],[6,"50%"],[8,"66%"],[12,"100%"]],Rd=[1,5,10,15,30,60],Md=["datetime","time"],ns=({onMetaChange:t,onSizeChange:r})=>{const{formatMessage:o}=(0,Q.Z)(),{modifiedData:s,selectedField:a,attributes:l,fieldForm:i}=lt(),c=(0,e.useMemo)(vt.Vo,[]),{schemas:p}=(0,J.v9)(k=>c(k),J.wU),u=(0,J.v9)(vt.Jg),m=(0,e.useMemo)(()=>{if(!a)return[];const k=O()(s,["metadatas",a,"edit"],{});return Object.keys(k).filter(C=>C!=="visible")},[a,s]),f=(0,e.useMemo)(()=>Ed(p),[p]),g=(0,e.useCallback)(k=>{if(k!=="relation"&&k!=="component")return[];const C=k==="component"?"component":"targetModel",R=O()(s,["attributes",a,C],"");return O()(f,[R],[])},[a,f,s]),E=m.map(k=>{const C=O()(l,[a,"type"]);return["component","dynamiczone"].includes(C)&&!["label","description"].includes(k)||C==="component"&&k!=="label"||["media","json","boolean"].includes(C)&&k==="placeholder"||k==="step"?null:e.createElement(ue.P,{col:6,key:k},e.createElement(vd,{type:ts(k).type,hint:k==="mainField"?o({id:(0,Ee.Z)("containers.SettingPage.editSettings.relation-field.description")}):"",label:o({id:O()(ts(k),"label.id","app.utils.defaultMessage")}),name:k,onChange:t,value:O()(i,["metadata",k],""),options:g(C)}))}),{type:b,customField:v}=l[a],{isResizable:M}=u[v]??u[b],D=e.createElement(ue.P,{col:6,key:"size"},e.createElement(Ne.P,{value:i?.size,name:"size",onChange:k=>{r({name:a,value:k})},label:o({id:(0,Ee.Z)("containers.SettingPage.editSettings.size.label"),defaultMessage:"Size"})},Cd.map(([k,C])=>e.createElement(be.W,{key:k,value:k},C)))),T=Md.includes(l[a].type),P=e.createElement(ue.P,{col:6,key:"step"},e.createElement(Ne.P,{value:O()(i,["metadata","step"],1),name:"step",onChange:k=>t({target:{name:"step",value:k}}),label:o({id:(0,Ee.Z)("containers.SettingPage.editSettings.step.label"),defaultMessage:"Time interval (minutes)"})},Rd.map(k=>e.createElement(be.W,{key:k,value:k},k))));return e.createElement(e.Fragment,null,E,M&&D,T&&P)};ns.propTypes={onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired};var Td=ns;const Dd=(0,N.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Rr=({onToggle:t,onMetaChange:r,onSizeChange:o,onSubmit:s,type:a,customFieldUid:l})=>{const{selectedField:i}=lt(),{formatMessage:c}=(0,Q.Z)(),p=()=>a==="timestamp"?"date":["decimal","float","integer","biginter"].includes(a)?"number":a;return e.createElement(Go.P,{onClose:t,labelledBy:"title"},e.createElement("form",{onSubmit:s},e.createElement(Ko.x,null,e.createElement(Dd,null,e.createElement(es,{type:p(),customFieldUid:l}),e.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:At()(i)})))),e.createElement(Yo.f,null,e.createElement(De.r,{gap:4},e.createElement(Td,{onMetaChange:r,onSizeChange:o}))),e.createElement(Xo.m,{startActions:e.createElement(me.z,{onClick:t,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(me.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};Rr.defaultProps={customFieldUid:null},Rr.propTypes={customFieldUid:n().string,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired,type:n().string.isRequired};var Id=Rr,kd=(t,r,o)=>{const{put:s}=(0,h.tg)();return s((0,y.IF)(o?`content-types/${r}/configuration`:`components/${r}/configuration`),t)};const Mr=({mainLayout:t,components:r,isContentTypeView:o,slug:s,updateLayout:a})=>{const[l,i]=(0,e.useReducer)(Yc,gr,()=>Xc(gr,t,r)),[c,p]=(0,e.useState)(!1),{trackUsage:u}=(0,h.rS)(),m=(0,h.lm)(),{goBack:f}=(0,te.k6)(),[g,E]=(0,e.useState)(!1),[b,v]=(0,e.useState)(!1),{componentLayouts:M,initialData:D,modifiedData:T,metaToEdit:P,metaForm:k}=l,{formatMessage:C}=(0,Q.Z)(),R=O()(t,["info","displayName"],""),Z=O()(T,["attributes"],{}),j=(0,J.v9)(vt.Jg),$=Object.keys(Z).filter(U=>{const ie=O()(Z,[U,"type"],"");return!["dynamiczone","json","text","relation","component","boolean","media","password","richtext","timestamp"].includes(ie)&&!!ie}),q=O()(T,["layouts","edit"],[]),H=So()(q,"rowContent"),F=Object.keys(T.attributes).filter(U=>O()(T,["metadatas",U,"edit","visible"],!1)===!0).filter(U=>H.findIndex(ie=>ie.name===U)===-1).sort(),X=({target:{name:U,value:ie}})=>{i({type:"ON_CHANGE",keys:U.split("."),value:ie})},W=()=>{E(U=>!U)},Y=()=>{v(U=>!U)},B=({target:{name:U,value:ie}})=>{i({type:"ON_CHANGE_META",keys:U.split("."),value:ie})},V=({name:U,value:ie})=>{i({type:"ON_CHANGE_SIZE",name:U,value:ie})},x=U=>{U.preventDefault(),i({type:"SUBMIT_META_FORM"}),W()},L=U=>{U.preventDefault(),Y()},z=(0,st.useMutation)(U=>kd(U,s,o),{onSuccess({data:U}){a&&a(U.data),i({type:"SUBMIT_SUCCEEDED"}),Y(),u("didEditEditSettings")},onError(){m({type:"warning",message:{id:"notification.error"}})}}),{isLoading:K}=z,I=()=>{const U=xn()(Qe()(T),["layouts","metadatas","settings"]);se()(U,"layouts.edit",Qc(U.layouts.edit)),z.mutate(U)},S=(U,ie)=>{i({type:"MOVE_RELATION",fromIndex:U,toIndex:ie})},oe=(U,ie)=>{i({type:"MOVE_FIELD",fromIndex:U,toIndex:ie})},_=(U,ie,Te,ze)=>{i(Te===ze?{type:"REORDER_ROW",dragRowIndex:Te,dragIndex:U,hoverIndex:ie}:{type:"REORDER_DIFF_ROW",dragIndex:U,hoverIndex:ie,dragRowIndex:Te,hoverRowIndex:ze})},ae=(U,ie)=>{i({type:"MOVE_ROW",fromIndex:U,toIndex:ie})};return e.createElement(fr,{isContentTypeView:o,attributes:Z,modifiedData:T,slug:s,componentLayouts:M,selectedField:P,fieldForm:k,onMoveRelation:S,onMoveField:oe,moveRow:ae,moveItem:_,setEditFieldToSelect:U=>{i({type:"SET_FIELD_TO_EDIT",name:U}),W()},isDraggingSibling:c,setIsDraggingSibling:p},e.createElement(Re.o,null,e.createElement("form",{onSubmit:L},e.createElement(fe.T,{title:C({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:`Configure the view - ${At()(R)}`},{name:At()(R)}),subtitle:C({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),defaultMessage:"Customize how the edit view will look like."}),navigationAction:e.createElement(h.rU,{startIcon:e.createElement(rn.Z,null),onClick:U=>{U.preventDefault(),f()},to:"/"},C({id:"global.back",defaultMessage:"Back"})),primaryAction:e.createElement(me.z,{disabled:ve()(D,T),startIcon:e.createElement(yt.Z,null),type:"submit"},C({id:"global.save",defaultMessage:"Save"}))}),e.createElement(Ze.D,null,e.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(G.Z,{variant:"delta",as:"h2"},C({id:(0,y.OB)("containers.SettingPage.settings"),defaultMessage:"Settings"})),e.createElement(De.r,null,e.createElement(ue.P,{col:6,s:12},e.createElement(Ne.P,{label:C({id:(0,y.OB)("containers.SettingPage.editSettings.entry.title"),defaultMessage:"Entry title"}),hint:C({id:(0,y.OB)("containers.SettingPage.editSettings.entry.title.description"),defaultMessage:"Set the display field of your entry"}),onChange:U=>{X({target:{name:"settings.mainField",value:U===""?null:U}})},value:T.settings.mainField},$.map(U=>e.createElement(be.W,{key:U,value:U},U))))),e.createElement(A.x,{paddingTop:2,paddingBottom:2},e.createElement(Bo.i,null)),e.createElement(G.Z,{variant:"delta",as:"h3"},C({id:(0,y.OB)("containers.SettingPage.view"),defaultMessage:"View"})),e.createElement(ud,{attributes:Z,editLayout:q,fields:F,onAddField:U=>{i({type:"ON_ADD_FIELD",name:U,fieldSizes:j})},onRemoveField:(U,ie)=>{i({type:"REMOVE_FIELD",rowIndex:U,fieldIndex:ie})}})))),e.createElement(h.QH,{bodyText:{id:(0,y.OB)("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(yt.Z,null),isConfirmButtonLoading:K,isOpen:b,onToggleDialog:Y,onConfirm:I,variantRightButton:"success-light"})),g&&e.createElement(Id,{onSubmit:x,onToggle:W,onMetaChange:B,onSizeChange:V,type:O()(Z,[P,"type"],""),customFieldUid:O()(Z,[P,"customField"],"")})))};Mr.defaultProps={isContentTypeView:!1,updateLayout:null},Mr.propTypes={components:n().object.isRequired,isContentTypeView:n().bool,mainLayout:n().shape({attributes:n().object.isRequired,info:n().object.isRequired,layouts:n().shape({list:n().array.isRequired,edit:n().array.isRequired}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired}).isRequired,slug:n().string.isRequired,updateLayout:n().func};var Tr=Mr,Ct=d(37617);const xd=()=>({type:Ct.ZA}),Od=(t,r)=>({type:Ct.Id,pagination:t,data:r}),Pd=()=>({type:Ct.MP});function wd(){return{type:Ct.c2}}const Fd=({components:t,contentType:r})=>{const{layouts:o}=r;return{contentType:r,components:t,displayedHeaders:o.list,type:Ct.Zz}},Dr=t=>({type:Ct.Rp,target:t});var rs=d(6680),Ir=d(94638),os=d(99223),Ld=d(70664);const Sd=()=>t=>t["content-manager_listView"]||Ld.E,Ad=()=>(0,cr.P1)(Sd(),t=>t),ss=t=>{const{displayedHeaders:r}=t["content-manager_listView"];return r};var $d=Ad,Zd=d(35658),Bd=d(94547),kr=d(19786),qd=d(82884),Nd=d(47765),jd=d(8997),Wd=d(69033);const zd=(0,N.ZP)(w.k)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`,as=({children:t,...r})=>e.createElement(zd,{justifyContent:"center",alignItems:"center",as:"span",...r},e.createElement(G.Z,{variant:"sigma",textColor:"neutral600"},t));as.propTypes={children:n().string.isRequired};var is=as;const xr=({url:t,mime:r,alternativeText:o,name:s,ext:a,formats:l})=>{const i=(0,h.CR)(t);if(r.includes("image")){const u=l?.thumbnail?.url||null,m=(0,h.CR)(u)||i;return e.createElement(Wd.q,{src:m,alt:o||s,preview:!0})}const c=(0,h.mD)(a),p=s.length>100?`${s.substring(0,100)}...`:s;return e.createElement(Qt.u,{description:p},e.createElement(is,null,c))};xr.defaultProps={alternativeText:null,formats:null},xr.propTypes={alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired};var ls=xr,Vd=d(25898);const cs=({value:t})=>e.createElement(Vd.H,null,t.map((r,o)=>{const s=`${r.id}${o}`;if(o===3){const a=`+${t.length-3}`;return e.createElement(is,{key:s,preview:!1},a)}return o>3?null:e.createElement(ls,{key:s,...r})}));cs.propTypes={value:n().arrayOf(n().shape({alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired})).isRequired};var Ud=cs,ds=d(6518),Hd=d(23866),Qd=d(96315);const us=({type:t,value:r})=>{const{formatDate:o,formatTime:s,formatNumber:a}=(0,Q.Z)();let l=r;if(t==="date"&&(l=o((0,Qd.Z)(r),{dateStyle:"full"})),t==="datetime"&&(l=o(r,{dateStyle:"full",timeStyle:"short"})),t==="time"){const[i,c,p]=r.split(":"),u=new Date;u.setHours(i),u.setMinutes(c),u.setSeconds(p),l=s(u,{numeric:"auto",style:"short"})}return["float","decimal"].includes(t)&&(l=a(r,{maximumFractionDigits:20})),["integer","biginteger"].includes(t)&&(l=a(r,{maximumFractionDigits:0})),vo()(l)};us.propTypes={type:n().string.isRequired,value:n().any.isRequired};var Rt=us;const Gd=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,Kd=async(t,r,o)=>{const{data:{results:s,pagination:a}}=await o(t);return r(),{results:s,pagination:a}},ms=({fieldSchema:t,metadatas:r,name:o,entityId:s,value:a,contentType:l})=>{const{formatMessage:i}=(0,Q.Z)(),{notifyStatus:c}=(0,Ir.G)(),p=(0,e.useMemo)(()=>(0,y.IF)(`relations/${l.uid}/${s}/${o.split(".")[0]}`),[s,o,l]),[u,m]=(0,e.useState)(!1),{get:f}=(0,h.kY)(),g=e.createElement(w.k,{gap:1,wrap:"nowrap"},e.createElement(ds.C,null,a.count),i({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:a.count})),E=()=>{const M=i({id:(0,y.OB)("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"});c(M)},{data:b,status:v}=(0,st.useQuery)([t.targetModel,s],()=>Kd(p,E,f),{enabled:u,staleTime:0,select:M=>({...M,results:[...M.results].reverse()})});return e.createElement(A.x,{...h.UW},e.createElement(We.O,{label:g,size:"S",onOpen:()=>m(!0),onClose:()=>m(!1)},v!=="success"&&e.createElement(We.s,{"aria-disabled":!0},e.createElement(Hd.a,{small:!0},i({id:(0,y.OB)("DynamicTable.relation-loading"),defaultMessage:"Relations are loading"}))),v==="success"&&e.createElement(e.Fragment,null,b?.results.map(M=>e.createElement(We.s,{key:M.id,"aria-disabled":!0},e.createElement(Gd,{ellipsis:!0},e.createElement(Rt,{type:r.mainField.schema.type,value:M[r.mainField.name]||M.id})))),b?.pagination.total>10&&e.createElement(We.s,{"aria-disabled":!0,"aria-label":i({id:(0,y.OB)("DynamicTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"})},e.createElement(G.Z,null,"\u2026")))))};ms.propTypes={contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({relation:n().string,targetModel:n().string,type:n().string.isRequired}).isRequired,metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,name:n().string.isRequired,entityId:n().oneOfType([n().string,n().number]).isRequired,value:n().object.isRequired};var Yd=ms;const Xd=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,ps=({metadatas:t,value:r})=>e.createElement(Xd,{textColor:"neutral800",ellipsis:!0},e.createElement(Rt,{type:t.mainField.schema.type,value:r[t.mainField.name]??r.id}));ps.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,value:n().object.isRequired};var Jd=ps;const _d=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,gs=({value:t,metadatas:r})=>{const{formatMessage:o}=(0,Q.Z)(),{mainField:{type:s,name:a}}=r,l=e.createElement(e.Fragment,null,e.createElement(ds.C,null,t.length)," ",o({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:t.length}));return e.createElement(A.x,{...h.UW},e.createElement(We.O,{label:l,size:"S"},t.map(i=>e.createElement(We.s,{key:i.id,"aria-disabled":!0},e.createElement(_d,{ellipsis:!0},e.createElement(Rt,{type:s,value:i[a]||i.id}))))))};gs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().array.isRequired};var eu=gs;const tu=(0,N.ZP)(G.Z)`
  max-width: 250px;
`,fs=({value:t,metadatas:r})=>{const{mainField:o}=r,s=t[o.name];return e.createElement(Qt.u,{label:s},e.createElement(tu,{textColor:"neutral800",ellipsis:!0},e.createElement(Rt,{type:o.type,value:s})))};fs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().object.isRequired};var nu=fs,ru=d(80022),hs=d.n(ru);function ys(t){return["oneToOne","manyToOne","oneToOneMorph"].includes(t)}function ou(t,r,o,s){if(t==="component"){const{mainField:{name:a,type:l}}=o;if(s?.repeatable)return r.length>0;const i=r?.[a];return a==="id"&&![void 0,null].includes(i)?!0:St(l)&&l!=="biginteger"&&a!=="id"?hs()(i):!Me()(i)}return t==="relation"?ys(s.relation)?!Me()(r):r?.count>0:St(t)&&t!=="biginteger"?hs()(r):t==="boolean"?r!==null:!Me()(r)}const bs=(0,N.ZP)(G.Z)`
  max-width: 300px;
`,Or=({content:t,fieldSchema:r,metadatas:o,name:s,rowId:a,contentType:l})=>{const{type:i}=r;if(!ou(i,t,o,r))return e.createElement(G.Z,{textColor:"neutral800"},"-");switch(i){case"media":return r.multiple?e.createElement(Ud,{value:t}):e.createElement(ls,{...t});case"relation":return ys(r.relation)?e.createElement(Jd,{metadatas:o,value:t}):e.createElement(Yd,{fieldSchema:r,metadatas:o,value:t,name:s,entityId:a,contentType:l});case"component":return r.repeatable===!0?e.createElement(eu,{value:t,metadatas:o}):e.createElement(nu,{value:t,metadatas:o});case"string":return e.createElement(Qt.u,{description:t},e.createElement(bs,{ellipsis:!0,textColor:"neutral800"},e.createElement(Rt,{type:i,value:t})));default:return e.createElement(bs,{ellipsis:!0,textColor:"neutral800"},e.createElement(Rt,{type:i,value:t}))}};Or.defaultProps={content:void 0},Or.propTypes={content:n().any,contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({component:n().string,multiple:n().bool,type:n().string.isRequired,repeatable:n().bool,relation:n().string}).isRequired,metadatas:n().object.isRequired,name:n().string.isRequired,rowId:n().oneOfType([n().string,n().number]).isRequired};var su=Or;const Pr=({canCreate:t,canDelete:r,contentType:o,headers:s,entriesToDelete:a,onClickDelete:l,onSelectRow:i,withMainAction:c,withBulkActions:p,rows:u})=>{const{push:m,location:{pathname:f}}=(0,te.k6)(),{formatMessage:g}=(0,Q.Z)(),{trackUsage:E}=(0,h.rS)(),b=(0,de.fi)();return e.createElement(Zd.p,null,u.map((v,M)=>{const D=a.findIndex(P=>P===v.id)!==-1,T=g({id:"content-manager.components.DynamicTable.row-line",defaultMessage:"item line {number}"},{number:M});return e.createElement(Bd.Tr,{key:v.id,...(0,h.X7)({fn(){E("willEditEntryFromList"),m({pathname:`${f}/${v.id}`,state:{from:f},search:b})},condition:p})},c&&e.createElement(kr.Td,{...h.UW},e.createElement(qd.C,{"aria-label":g({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,jd.Pp)(v.firstname,v.lastname)}),checked:D,onChange:()=>{i({name:v.id,value:!D})}})),s.map(({key:P,cellFormatter:k,name:C,...R})=>e.createElement(kr.Td,{key:P},typeof k=="function"?k(v,{key:P,name:C,...R}):e.createElement(su,{content:v[C.split(".")[0]],name:C,contentType:o,...R,rowId:v.id}))),p&&e.createElement(kr.Td,null,e.createElement(w.k,{justifyContent:"end",...h.UW},e.createElement(ye.h,{forwardedAs:Et.rU,onClick:()=>{E("willEditEntryFromButton")},to:{pathname:`${f}/${v.id}`,state:{from:f},search:b},label:g({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:T}),noBorder:!0,icon:e.createElement(qe.Z,null)}),t&&e.createElement(A.x,{paddingLeft:1},e.createElement(ye.h,{forwardedAs:Et.rU,to:{pathname:`${f}/create/clone/${v.id}`,state:{from:f},search:b},label:g({id:"app.component.table.duplicate",defaultMessage:"Duplicate {target}"},{target:T}),noBorder:!0,icon:e.createElement(Nd.Z,null)})),r&&e.createElement(A.x,{paddingLeft:1},e.createElement(ye.h,{onClick:()=>{E("willDeleteEntryFromList"),l(v.id)},label:g({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:T}),noBorder:!0,icon:e.createElement(He.Z,null)})))))}))};Pr.defaultProps={canCreate:!1,canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},Pr.propTypes={canCreate:n().bool,canDelete:n().bool,contentType:n().shape({uid:n().string.isRequired}).isRequired,entriesToDelete:n().array,headers:n().array.isRequired,onClickDelete:n().func,onSelectRow:n().func,rows:n().array,withBulkActions:n().bool,withMainAction:n().bool};var au=Pr;const Es=({area:t,...r})=>{const o=Vt(t);return o?e.createElement("ul",null,o.map(s=>s.Component(r)?e.createElement(A.x,{key:s.name,padding:3,style:{textAlign:"center"}},e.createElement(s.Component,{...r})):null)):null};Es.propTypes={area:n().string.isRequired};var vs=Es;const Cs=({isConfirmButtonLoading:t,isOpen:r,onToggleDialog:o,onConfirm:s})=>{const{formatMessage:a}=(0,Q.Z)();return e.createElement(on.V,{onClose:o,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:r},e.createElement(sn.a,{icon:e.createElement(wt.Z,null)},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(w.k,{justifyContent:"center"},e.createElement(G.Z,{id:"confirm-description"},a({id:(0,y.OB)("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these entries?"}))),e.createElement(w.k,null,e.createElement(vs,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),e.createElement(an.c,{startAction:e.createElement(me.z,{onClick:o,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{onClick:s,variant:"danger-light",startIcon:e.createElement(He.Z,null),id:"confirm-delete",loading:t},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Cs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};var iu=Cs;const Rs=({isConfirmButtonLoading:t,isOpen:r,onToggleDialog:o,onConfirm:s})=>{const{formatMessage:a}=(0,Q.Z)();return e.createElement(on.V,{onClose:o,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:r},e.createElement(sn.a,{icon:e.createElement(wt.Z,null)},e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(w.k,{justifyContent:"center"},e.createElement(G.Z,{id:"confirm-description"},a({id:"components.popUpWarning.message",defaultMessage:"Are you sure you want to delete this?"}))),e.createElement(w.k,null,e.createElement(vs,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),e.createElement(an.c,{startAction:e.createElement(me.z,{onClick:o,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{onClick:s,variant:"danger-light",startIcon:e.createElement(He.Z,null),id:"confirm-delete",loading:t},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Rs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};var lu=Rs;function Ms({isPublished:t}){const{formatMessage:r}=(0,Q.Z)(),o=t?"success":"secondary";return e.createElement(On.q,{showBullet:!1,variant:o,size:"S",width:"min-content"},e.createElement(G.Z,{fontWeight:"bold",textColor:`${o}700`},r({id:(0,y.OB)(`containers.List.${t?"published":"draft"}`),defaultMessage:t?"Published":"Draft"})))}Ms.propTypes={isPublished:n().bool.isRequired};const cu=(()=>window&&window.strapi&&window.strapi.isEE?d(57047).Z:d(42814).Z)(),wr=t=>{let{canCreate:r,canDelete:o,contentTypeName:s,action:a,isBulkable:l,isLoading:i,onConfirmDelete:c,onConfirmDeleteAll:p,layout:u,rows:m}=t;const{runHookWaterfall:f}=(0,h.j1)(),g=u.contentType.options?.draftAndPublish??!1,{formatMessage:E}=(0,Q.Z)(),b=(0,J.v9)(ss),v=(0,e.useMemo)(()=>{const D=f($e.No,{displayedHeaders:b,layout:u}).displayedHeaders.map(P=>{const{fieldSchema:k,metadatas:C,name:R}=P;return{...P,metadatas:{...C,label:E({id:(0,y.OB)(`containers.ListPage.table-headers.${R}`),defaultMessage:C.label})},name:k.type==="relation"?`${R}.${C.mainField.name}`:R}});g&&D.push({key:"__published_at_temp_key__",name:"publishedAt",fieldSchema:{type:"custom"},metadatas:{label:E({id:(0,y.OB)("containers.ListPage.table-headers.publishedAt"),defaultMessage:"publishedAt"}),searchable:!1,sortable:!0},cellFormatter(P){let{publishedAt:k}=P;return e.createElement(Ms,{isPublished:!!k})}});const T=cu(u);return T&&D.push(T),D},[f,b,u,g,E]);return e.createElement(h.tM,{components:{ConfirmDialogDelete:lu,ConfirmDialogDeleteAll:iu},contentType:s,action:a,isLoading:i,headers:v,onConfirmDelete:c,onConfirmDeleteAll:p,onOpenDeleteAllModalTrackedEvent:"willBulkDeleteEntries",rows:m,withBulkActions:!0,withMainAction:o&&l},e.createElement(au,{canCreate:r,canDelete:o,contentType:u.contentType,headers:v,rows:m,withBulkActions:!0,withMainAction:o&&l}))};wr.defaultProps={action:void 0},wr.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,contentTypeName:n().string.isRequired,action:n().node,isBulkable:n().bool.isRequired,isLoading:n().bool.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,onConfirmDelete:n().func.isRequired,onConfirmDeleteAll:n().func.isRequired,rows:n().array.isRequired};var du=wr;const uu=["json","component","media","richtext","dynamiczone","password"],mu=["createdAt","updatedAt"];var pu=(t,r)=>{const{allPermissions:o}=(0,h.vn)(),s=(0,h.ZT)(o,[{action:"plugin::content-manager.explorer.read",subject:r}]),a=O()(s,["0","properties","fields"],[]);return Object.keys(O()(t,["attributes"]),{}).filter(c=>{const p=O()(t,["attributes",c],{});return!(!p.type||uu.includes(p.type)||!a.includes(c)&&c!=="id"&&!mu.includes(c))}).sort()},gu=d(5644);const Ts=({displayedFilters:t})=>{const[r,o]=(0,e.useState)(!1),{formatMessage:s}=(0,Q.Z)(),a=(0,e.useRef)(),{trackUsage:l}=(0,h.rS)(),i=()=>{r||l("willFilterEntries"),o(c=>!c)};return e.createElement(e.Fragment,null,e.createElement(A.x,{paddingTop:1,paddingBottom:1},e.createElement(me.z,{variant:"tertiary",ref:a,startIcon:e.createElement(gu.Z,null),onClick:i,size:"S"},s({id:"app.utils.filters",defaultMessage:"Filters"})),r&&e.createElement(h.J5,{displayedFilters:t,isVisible:r,onToggle:i,source:a})),e.createElement(h.W$,{filtersSchema:t}))};Ts.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};var fu=Ts;const Ds=({contentType:t,slug:r,metadatas:o})=>{const{formatMessage:s}=(0,Q.Z)(),l=pu(t,r).map(i=>{const c=t.attributes[i],{type:p,enum:u}=c,m={name:"didFilterEntries",properties:{useRelation:p==="relation"}},{mainField:f,label:g}=o[i].list;return{name:i,metadatas:{label:s({id:g,defaultMessage:g})},fieldSchema:{type:p,options:u,mainField:f},trackedEvent:m}});return e.createElement(fu,{displayedFilters:l})};Ds.propTypes={contentType:n().object.isRequired,metadatas:n().object.isRequired,slug:n().string.isRequired};var hu=Ds,yu=t=>Object.keys(t).reduce((o,s)=>{const a=t[s];return(0,y.ko)(a)&&o.push(s),o},[]).sort();const Is=({layout:t})=>{const r=(0,J.I0)(),o=(0,J.v9)(ss),{trackUsage:s}=(0,h.rS)(),{formatMessage:a}=(0,Q.Z)(),l=yu(t.contentType.attributes).map(p=>{const u=t.contentType.metadatas[p].list;return{name:p,intlLabel:{id:u.label,defaultMessage:u.label}}}),i=o.map(({name:p})=>p),c=p=>{if(s("didChangeDisplayedFields"),p.length<i.length){const u=i.filter(m=>p.indexOf(m)===-1);r(Dr({name:u[0],value:!0}))}else{const u=p.filter(m=>i.indexOf(m)===-1);r(Dr({name:u[0],value:!1}))}};return e.createElement(A.x,{paddingTop:1,paddingBottom:1},e.createElement(Ne.P,{"aria-label":"change displayed fields",value:i,onChange:c,customizeContent:p=>a({id:(0,Ee.Z)("select.currently.selected"),defaultMessage:"{count} currently selected"},{count:p.length}),multi:!0,size:"S"},l.map(p=>e.createElement(be.W,{key:p.name,value:p.name},a({id:p.intlLabel.id||p.name,defaultMessage:p.intlLabel.defaultMessage||p.name})))))};Is.propTypes={layout:n().shape({contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired};var bu=(0,e.memo)(Is);const Fr=({pagination:t})=>e.createElement(A.x,{paddingTop:4},e.createElement(w.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(h.v4,{trackedEvent:"willChangeNumberOfEntriesPerPage"}),e.createElement(h.tU,{pagination:t})));Fr.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Fr.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};var Eu=Fr;const vu=ke.Z.contentManager,Cu=(0,N.ZP)(A.x)`
  svg {
    path {
      fill: ${({theme:t})=>t.colors.neutral900};
    }
  }
`;function ks({canCreate:t,canDelete:r,canRead:o,data:s,getData:a,getDataSucceeded:l,isLoading:i,layout:c,pagination:p,slug:u}){const{total:m}=p,{contentType:f}=c,{metadatas:g,settings:{bulkable:E,filterable:b,searchable:v}}=f,M=(0,h.lm)(),{trackUsage:D}=(0,h.rS)(),{refetchPermissions:T}=(0,h.vn)(),P=(0,e.useRef)(D),k=(0,e.useRef)(T),{notifyStatus:C}=(0,Ir.G)(),{formatAPIError:R}=(0,h.So)(y.OB);(0,h.go)();const[{query:Z}]=(0,h.Kx)(),j=Oo(Z),$=(0,nn.stringify)({plugins:Z.plugins},{encode:!1}),{pathname:q}=(0,te.TH)(),{push:H}=(0,te.k6)(),{formatMessage:F}=(0,Q.Z)(),X=f.options?.draftAndPublish??!1,W=(0,h.kY)(),{post:Y,del:B}=W,V=(0,e.useRef)(""),x=(0,e.useCallback)(async(_,ae)=>{a();try{const U=ae?{cancelToken:ae.token}:null,{data:{results:ie,pagination:Te}}=await W.get(_,U);C(F({id:(0,y.OB)("utils.data-loaded"),defaultMessage:"{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"},{number:Te.count})),l(Te,ie)}catch(U){if(je.default.isCancel(U))return;if((U?.response?.status??null)===403){await k.current(),M({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),H("/");return}M({type:"warning",message:{id:(0,y.OB)("error.model.fetch")}})}},[F,a,l,C,H,M,W]),L=(0,e.useCallback)(async _=>{try{await Y((0,y.IF)(`collection-types/${u}/actions/bulkDelete`),{ids:_});const ae=(0,y.IF)(`collection-types/${u}${j}`);x(ae),P.current("didBulkDeleteEntries")}catch(ae){M({type:"warning",message:R(ae)})}},[x,j,u,M,R,Y]),z=(0,e.useCallback)(async _=>{try{await B((0,y.IF)(`collection-types/${u}/${_}`));const ae=(0,y.IF)(`collection-types/${u}${j}`);x(ae),M({type:"success",message:{id:(0,y.OB)("success.record.delete")}})}catch(ae){M({type:"warning",message:R(ae)})}},[u,j,x,M,R,B]);(0,e.useEffect)(()=>{const ae=je.default.CancelToken.source(),U=o,ie=(0,y.IF)(`collection-types/${u}${j}`);return U&&ie.includes(V.current)&&x(ie,ae),()=>{V.current=u,ae.cancel("Operation canceled by the user.")}},[o,a,u,j,l,x]);const K=F({id:(0,y.OB)("header.name"),defaultMessage:"Content"}),I=F({id:f.info.displayName,defaultMessage:f.info.displayName||K}),S=o?F({id:(0,y.OB)("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:m}):null,oe=_=>t?e.createElement(me.z,{..._,forwardedAs:Et.rU,onClick:()=>{const ae=X?{status:"draft"}:{};P.current("willCreateEntry",ae)},to:{pathname:`${q}/create`,search:Z.plugins?$:""},startIcon:e.createElement(Lt.Z,null),style:{textDecoration:"none"}},F({id:(0,y.OB)("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})):null;return e.createElement(Re.o,{"aria-busy":i},e.createElement(fe.T,{primaryAction:oe(),subtitle:S,title:I,navigationAction:e.createElement(h.rU,{startIcon:e.createElement(rn.Z,null),to:"/content-manager/"},F({id:"global.back",defaultMessage:"Back"}))}),!o&&e.createElement(os.Z,{endActions:e.createElement(Ut,{area:"contentManager.listView.actions"})}),o&&e.createElement(os.Z,{endActions:e.createElement(e.Fragment,null,e.createElement(Ut,{area:"contentManager.listView.actions"}),e.createElement(bu,{layout:c}),e.createElement(h.jW,{permissions:vu.collectionTypesConfigurations},e.createElement(Cu,{paddingTop:1,paddingBottom:1},e.createElement(ye.h,{onClick:()=>{D("willEditListLayout")},forwardedAs:Et.rU,to:{pathname:`${u}/configurations/list`,search:$},icon:e.createElement(jo.Z,null),label:F({id:"app.links.configure-view",defaultMessage:"Configure the view"})})))),startActions:e.createElement(e.Fragment,null,v&&e.createElement(h.m,{label:F({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:I}),placeholder:F({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),b&&e.createElement(hu,{contentType:f,slug:u,metadatas:g}))}),e.createElement(Ze.D,null,o?e.createElement(e.Fragment,null,e.createElement(du,{canCreate:t,canDelete:r,contentTypeName:I,onConfirmDeleteAll:L,onConfirmDelete:z,isBulkable:E,isLoading:i,layout:c,rows:s,action:oe({variant:"secondary"})}),e.createElement(Eu,{pagination:{pageCount:p?.pageCount||1}})):e.createElement(h.ZF,null)))}ks.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,canRead:n().bool.isRequired,data:n().array.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,info:n().shape({displayName:n().string.isRequired}).isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,isLoading:n().bool.isRequired,getData:n().func.isRequired,getDataSucceeded:n().func.isRequired,pagination:n().shape({total:n().number.isRequired,pageCount:n().number}).isRequired,slug:n().string.isRequired};const Ru=$d();function Mu(t){return(0,rs.bindActionCreators)({getData:xd,getDataSucceeded:Od,onChangeListHeaders:Dr,onResetListHeaders:Pd},t)}const Tu=(0,J.$j)(Ru,Mu);var Du=(0,rs.compose)(Tu)((0,e.memo)(ks,ve()));const Lr=t=>{const r=(0,e.useMemo)(()=>(0,y.TA)(t.slug),[t.slug]),{isLoading:o,allowedActions:s}=(0,h.ss)(r,t.permissions);return o?e.createElement(h.dO,null):e.createElement(Du,{...t,...s})};Lr.defaultProps={permissions:[]},Lr.propTypes={permissions:n().array,slug:n().string.isRequired};var Iu=(0,e.memo)(Lr,(t,r)=>{const o=(0,h.e5)(t,r);return Object.keys(o).filter(a=>a!=="state").length>0});const xs=({layout:t,...r})=>{const o=(0,J.I0)(),{replace:s}=(0,te.k6)(),[{query:a,rawQuery:l}]=(0,h.Kx)(),i=(0,de.r5)(a,r.slug,"listView"),c=(0,de.Ky)(r.slug);return(0,e.useEffect)(()=>{l||s(c)},[l,s,c]),(0,e.useEffect)(()=>{o(Fd(t))},[o,t]),(0,e.useEffect)(()=>()=>{o(wd())},[o]),i?e.createElement(Iu,{...r,layout:t,permissions:i}):null};xs.propTypes={layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired,pluginOptions:n().object}).isRequired}).isRequired,slug:n().string.isRequired};var ku=xs;const Sr=({modifiedData:t,onChange:r,sortOptions:o})=>{const{formatMessage:s}=(0,Q.Z)(),{settings:a,metadatas:l}=t;return e.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(G.Z,{variant:"delta",as:"h2"},s({id:(0,y.OB)("containers.SettingPage.settings"),defaultMessage:"Settings"})),e.createElement(w.k,{justifyContent:"space-between",gap:4},e.createElement(A.x,{width:"100%"},e.createElement(Zt.s,{label:s({id:(0,y.OB)("form.Input.search"),defaultMessage:"Enable search"}),onChange:i=>{r({target:{name:"settings.searchable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.searchable",checked:a.searchable})),e.createElement(A.x,{width:"100%"},e.createElement(Zt.s,{label:s({id:(0,y.OB)("form.Input.filters"),defaultMessage:"Enable filters"}),onChange:i=>{r({target:{name:"settings.filterable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.filterable",checked:a.filterable})),e.createElement(A.x,{width:"100%"},e.createElement(Zt.s,{label:s({id:(0,y.OB)("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"}),onChange:i=>{r({target:{name:"settings.bulkable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.bulkable",checked:a.bulkable}))),e.createElement(De.r,{gap:4},e.createElement(ue.P,{s:12,col:6},e.createElement(Ne.P,{label:s({id:(0,y.OB)("form.Input.pageEntries"),defaultMessage:"Entries per page"}),hint:s({id:(0,y.OB)("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."}),onChange:i=>r({target:{name:"settings.pageSize",value:i}}),name:"settings.pageSize",value:t.settings.pageSize||""},[10,20,50,100].map(i=>e.createElement(be.W,{key:i,value:i},i)))),e.createElement(ue.P,{s:12,col:3},e.createElement(Ne.P,{label:s({id:(0,y.OB)("form.Input.defaultSort"),defaultMessage:"Default sort attribute"}),onChange:i=>r({target:{name:"settings.defaultSortBy",value:i}}),name:"settings.defaultSortBy",value:t.settings.defaultSortBy||""},o.map(i=>e.createElement(be.W,{key:i,value:i},l[i].list.label||i)))),e.createElement(ue.P,{s:12,col:3},e.createElement(Ne.P,{label:s({id:(0,y.OB)("form.Input.sort.order"),defaultMessage:"Default sort order"}),onChange:i=>r({target:{name:"settings.defaultSortOrder",value:i}}),name:"settings.defaultSortOrder",value:t.settings.defaultSortOrder||""},["ASC","DESC"].map(i=>e.createElement(be.W,{key:i,value:i},i))))))};Sr.defaultProps={modifiedData:{},sortOptions:[]},Sr.propTypes={modifiedData:n().object,onChange:n().func.isRequired,sortOptions:n().array};var xu=Sr;const Ar=(0,N.ZP)(w.k)`
  height: ${({theme:t})=>t.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,Ou=(0,N.ZP)(Ar)`
  border-right: 1px solid
    ${({theme:t,isSibling:r})=>r?t.colors.neutral150:t.colors.primary200};

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Pu=(0,N.ZP)(w.k)`
  border: 1px solid
    ${({theme:t,isSibling:r})=>r?t.colors.neutral150:t.colors.primary200};

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:t,isSibling:r})=>r?void 0:t.colors.primary600};
    }
  }
`,wu=(0,N.ZP)(G.Z)`
  max-width: ${72/16}rem;
`;function Bt({labelField:t,transparent:r,isSibling:o}){return e.createElement(Pu,{background:o?"neutral100":"primary100",display:"inline-flex",gap:3,hasRadius:!0,justifyContent:"space-between",transparent:r,isSibling:o,"max-height":(0,h.Q1)(32),maxWidth:"min-content",opacity:r?0:1},e.createElement(w.k,{gap:3},e.createElement(Ou,{alignItems:"center",cursor:"all-scroll",padding:3},e.createElement(Je.Z,null)),e.createElement(wu,{textColor:o?void 0:"primary600",fontWeight:"bold",ellipsis:!0},t)),e.createElement(w.k,null,e.createElement(Ar,{alignItems:"center"},e.createElement(qe.Z,null)),e.createElement(Ar,{alignItems:"center"},e.createElement(Gt.Z,null))))}Bt.defaultProps={isSibling:!1,transparent:!1},Bt.propTypes={isSibling:n().bool,labelField:n().string.isRequired,transparent:n().bool};const $r=N.ZP.button`
  display: flex;
  align-items: center;
  height: ${({theme:t})=>t.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,Os=(0,N.ZP)($r)`
  padding: 0 ${({theme:t})=>t.spaces[3]};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Fu=(0,N.ZP)(w.k)`
  max-height: ${32/16}rem;
  cursor: pointer;

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({theme:t})=>t.colors.primary100};
    border-color: ${({theme:t})=>t.colors.primary200};

    svg {
      path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }

    ${G.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    ${Os} {
      border-right: 1px solid ${({theme:t})=>t.colors.primary200};
    }
  }
`,Lu=(0,N.ZP)(A.x)`
  &:last-child {
    padding-right: ${({theme:t})=>t.spaces[3]};
  }
`,Ps=({index:t,isDraggingSibling:r,labelField:o,onClickEditField:s,onMoveField:a,onRemoveField:l,name:i,setIsDraggingSibling:c})=>{const{formatMessage:p}=(0,Q.Z)(),u=(0,e.useRef)(null),m=(0,e.useRef)(null),[,f]=(0,e.useState)(!1),g=(0,e.useRef)(),E=()=>{g.current&&g.current.click()},[,b]=(0,cn.useDrop)({accept:y._Q.FIELD,hover(P,k){if(!m.current)return;const C=P.index,R=t;if(C===R)return;const Z=m.current.getBoundingClientRect(),j=(Z.right-Z.left)/2,q=k.getClientOffset().x-Z.left;C>R&&q>j||C<R&&q<j||(a(C,R),P.index=R)}}),[{isDragging:v},M,D]=(0,cn.useDrag)({type:y._Q.FIELD,item(){return{index:t,labelField:o,name:i}},collect:P=>({isDragging:P.isDragging()}),end(){c(!1)}});(0,e.useEffect)(()=>{D((0,Ot.rX)(),{captureDraggingState:!1})},[D]),(0,e.useEffect)(()=>{v&&c(!0)},[v,c]),(0,e.useEffect)(()=>{r||f(P=>!P)},[r]);const T={dragRef:M(u),dropRef:b(m)};return e.createElement(Lu,{ref:T?T.dropRef:null},v&&e.createElement(Bt,{transparent:!0,labelField:o}),!v&&r&&e.createElement(Bt,{isSibling:!0,labelField:o}),!v&&!r&&e.createElement(Fu,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:E,isDragging:v},e.createElement(w.k,{gap:3},e.createElement(Os,{as:"span","aria-label":p({id:(0,y.OB)("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:o}),onClick:P=>P.stopPropagation(),ref:T.dragRef,type:"button"},e.createElement(Je.Z,null)),e.createElement(G.Z,{fontWeight:"bold"},o)),e.createElement(w.k,{paddingLeft:3},e.createElement($r,{ref:g,onClick:P=>{P.stopPropagation(),s(i)},"aria-label":p({id:(0,y.OB)("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:o}),type:"button"},e.createElement(qe.Z,null)),e.createElement($r,{onClick:l,"data-testid":`delete-${i}`,"aria-label":p({id:(0,y.OB)("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:o}),type:"button"},e.createElement(Gt.Z,null)))))};Ps.propTypes={index:n().number.isRequired,isDraggingSibling:n().bool.isRequired,labelField:n().string.isRequired,name:n().string.isRequired,onClickEditField:n().func.isRequired,onMoveField:n().func.isRequired,onRemoveField:n().func.isRequired,setIsDraggingSibling:n().func.isRequired};var Su=Ps;const ws=(0,N.ZP)(A.x)`
  flex: ${({size:t})=>t};
`,Au=(0,N.ZP)(ws)`
  overflow-x: scroll;
  overflow-y: hidden;
`,$u=(0,N.ZP)(ws)`
  max-width: ${32/16}rem;
`,Fs=({displayedFields:t,listRemainingFields:r,metadatas:o,onAddField:s,onClickEditField:a,onMoveField:l,onRemoveField:i})=>{const{formatMessage:c}=(0,Q.Z)(),[p,u]=(0,e.useState)(!1),[m,f]=(0,e.useState)(null),g=(0,e.useRef)();function E(...v){f("add"),s(...v)}function b(...v){f("remove"),i(...v)}return(0,e.useEffect)(()=>{m==="add"&&g?.current&&(g.current.scrollLeft=g.current.scrollWidth)},[t,m]),e.createElement(e.Fragment,null,e.createElement(A.x,{paddingBottom:4},e.createElement(G.Z,{variant:"delta",as:"h2"},c({id:(0,y.OB)("containers.SettingPage.view"),defaultMessage:"View"}))),e.createElement(w.k,{paddingTop:4,paddingLeft:4,paddingRight:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0},e.createElement(Au,{size:"1",paddingBottom:4,ref:g},e.createElement(w.k,{gap:3},t.map((v,M)=>e.createElement(Su,{key:v,index:M,isDraggingSibling:p,onMoveField:l,onClickEditField:a,onRemoveField:D=>b(D,M),name:v,labelField:o[v].list.label||v,setIsDraggingSibling:u})))),e.createElement($u,{size:"auto",paddingBottom:4},e.createElement(We.O,{label:c({id:(0,y.OB)("components.FieldSelect.label"),defaultMessage:"Add a field"}),as:ye.h,icon:e.createElement(Lt.Z,null),disabled:r.length<=0,"data-testid":"add-field"},r.map(v=>e.createElement(We.s,{key:v,onClick:()=>E(v)},o[v].list.label||v))))))};Fs.propTypes={displayedFields:he.PropTypes.array.isRequired,listRemainingFields:he.PropTypes.array.isRequired,metadatas:he.PropTypes.objectOf(he.PropTypes.shape({list:he.PropTypes.shape({label:he.PropTypes.string})})).isRequired,onAddField:he.PropTypes.func.isRequired,onClickEditField:he.PropTypes.func.isRequired,onMoveField:he.PropTypes.func.isRequired,onRemoveField:he.PropTypes.func.isRequired};var Zu=Fs;const Bu=(0,N.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Ls=({attributes:t,fieldForm:r,fieldToEdit:o,onCloseModal:s,onChangeEditLabel:a,onSubmit:l,type:i})=>{const{formatMessage:c}=(0,Q.Z)(),p=t[o].relationType;let u=!["media","relation"].includes(i);return["oneWay","oneToOne","manyToOne"].includes(p)&&(u=!0),e.createElement(Go.P,{onClose:s,labelledBy:"title"},e.createElement("form",{onSubmit:l},e.createElement(Ko.x,null,e.createElement(Bu,null,e.createElement(es,{type:i}),e.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:At()(o)})))),e.createElement(Yo.f,null,e.createElement(De.r,{gap:4},e.createElement(ue.P,{s:12,col:6},e.createElement(In.o,{id:"label-input",label:c({id:(0,y.OB)("form.Input.label"),defaultMessage:"Label"}),name:"label",onChange:m=>a(m),value:r.label,hint:c({id:(0,y.OB)("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"})})),u&&e.createElement(ue.P,{s:12,col:6},e.createElement(Zt.s,{"data-testid":"Enable sort on this field",checked:r.sortable,label:c({id:(0,y.OB)("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",onChange:m=>a({target:{name:"sortable",value:m.target.checked}}),onLabel:c({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:c({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"})})))),e.createElement(Xo.m,{startActions:e.createElement(me.z,{onClick:s,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(me.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};Ls.propTypes={attributes:n().objectOf(n().shape({relationType:n().string})).isRequired,fieldForm:n().shape({label:n().string,sortable:n().bool}).isRequired,fieldToEdit:n().string.isRequired,onChangeEditLabel:n().func.isRequired,onCloseModal:n().func.isRequired,onSubmit:n().func.isRequired,type:n().string.isRequired};var qu=Ls,Nu=(t,r)=>({...t,initialData:r,modifiedData:r});const Zr={fieldForm:{},fieldToEdit:"",initialData:{},modifiedData:{}};var ju=(t=Zr,r)=>(0,or.ZP)(t,o=>{const s=["modifiedData","layouts","list"];switch(r.type){case"ADD_FIELD":{const a=O()(t,s,[]);se()(o,s,[...a,r.item]);break}case"MOVE_FIELD":{const a=O()(t,s,[]),{originalIndex:l,atIndex:i}=r;se()(o,s,(0,y.W3)(a,l,i));break}case"ON_CHANGE":{se()(o,["modifiedData",...r.keys.split(".")],r.value);break}case"ON_CHANGE_FIELD_METAS":{se()(o,["fieldForm",r.name],r.value);break}case"REMOVE_FIELD":{const a=O()(t,s,[]);se()(o,s,a.filter((l,i)=>r.index!==i));break}case"SET_FIELD_TO_EDIT":{const{fieldToEdit:a}=r;o.fieldToEdit=a,o.fieldForm.label=O()(o,["modifiedData","metadatas",a,"list","label"],""),o.fieldForm.sortable=O()(o,["modifiedData","metadatas",a,"list","sortable"],"");break}case"UNSET_FIELD_TO_EDIT":{o.fieldForm={},o.fieldToEdit="";break}case"SUBMIT_FIELD_FORM":{const a=["modifiedData","metadatas",t.fieldToEdit,"list"];se()(o,[...a,"label"],t.fieldForm.label),se()(o,[...a,"sortable"],t.fieldForm.sortable);break}default:return o}});const Wu=["media","richtext","dynamiczone","relation","component","json"],Ss=({layout:t,slug:r})=>{const{put:o}=(0,h.kY)(),{formatMessage:s}=(0,Q.Z)(),{trackUsage:a}=(0,h.rS)(),l=(0,de.fi)(),i=(0,h.lm)(),{refetchData:c}=(0,e.useContext)(Se),[p,u]=(0,e.useState)(!1),m=()=>u(L=>!L),[f,g]=(0,e.useReducer)(ju,Zr,()=>Nu(Zr,t)),{fieldToEdit:E,fieldForm:b,initialData:v,modifiedData:M}=f,D=!Me()(b),{attributes:T}=t,P=M.layouts.list,k=()=>{const{settings:{pageSize:L,defaultSortBy:z,defaultSortOrder:K},kind:I,uid:S}=v,oe=`${z}:${K}`,_=`${(0,nn.stringify)({page:1,pageSize:L,sort:oe},{encode:!1})}${l?`&${l}`:""}`;return`/content-manager/${I}/${S}?${_}`},C=({target:{name:L,value:z}})=>{g({type:"ON_CHANGE",keys:L,value:L==="settings.pageSize"?parseInt(z,10):z})},R=async()=>{const L=xn()(M,["layouts","settings","metadatas"]);X.mutate(L)},Z=L=>{g({type:"ADD_FIELD",item:L})},j=(L,z)=>{L.stopPropagation(),P.length===1?i({type:"info",message:{id:(0,y.OB)("notification.info.minimumFields")}}):g({type:"REMOVE_FIELD",index:z})},$=L=>{L.preventDefault(),m(),a("willSaveContentTypeLayout")},q=L=>{g({type:"SET_FIELD_TO_EDIT",fieldToEdit:L})},H=()=>{g({type:"UNSET_FIELD_TO_EDIT"})},F=L=>{L.preventDefault(),g({type:"SUBMIT_FIELD_FORM"}),H()},X=(0,st.useMutation)(L=>o(`/content-manager/content-types/${r}/configuration`,L),{onSuccess(){a("didEditListSettings"),c()},onError(){i({type:"warning",message:{id:"notification.error"}})}}),{isLoading:W}=X,Y=({target:{name:L,value:z}})=>{g({type:"ON_CHANGE_FIELD_METAS",name:L,value:z})},B=Object.entries(T).filter(([L,z])=>(0,y.ko)(z)&&!P.includes(L)).map(([L])=>L).sort(),V=Object.entries(T).filter(([,L])=>!Wu.includes(L.type)).map(([L])=>L),x=(L,z)=>{g({type:"MOVE_FIELD",originalIndex:L,atIndex:z})};return e.createElement(Fe.A,null,e.createElement(Re.o,{"aria-busy":W},e.createElement("form",{onSubmit:$},e.createElement(fe.T,{navigationAction:e.createElement(h.rU,{startIcon:e.createElement(rn.Z,null),to:k,id:"go-back"},s({id:"global.back",defaultMessage:"Back"})),primaryAction:e.createElement(me.z,{size:"S",startIcon:e.createElement(yt.Z,null),disabled:ve()(M,v),type:"submit"},s({id:"global.save",defaultMessage:"Save"})),subtitle:s({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:s({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:At()(M.info.displayName)})}),e.createElement(Ze.D,null,e.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(xu,{modifiedData:M,onChange:C,sortOptions:V}),e.createElement(A.x,{paddingTop:6,paddingBottom:6},e.createElement(Bo.i,null)),e.createElement(Zu,{listRemainingFields:B,displayedFields:P,onAddField:Z,onClickEditField:q,onMoveField:x,onRemoveField:j,metadatas:M.metadatas}))),e.createElement(h.QH,{bodyText:{id:(0,y.OB)("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(yt.Z,null),isConfirmButtonLoading:W,isOpen:p,onToggleDialog:m,onConfirm:R,variantRightButton:"success-light"})),D&&e.createElement(qu,{attributes:T,fieldForm:b,fieldToEdit:E,onChangeEditLabel:Y,onCloseModal:H,onSubmit:F,type:O()(T,[E,"type"],"text")})))};Ss.propTypes={layout:n().shape({uid:n().string.isRequired,settings:n().shape({bulkable:n().bool,defaultSortBy:n().string,defaultSortOrder:n().string,filterable:n().bool,pageSize:n().number,searchable:n().bool}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().objectOf(n().shape({type:n().string})).isRequired}).isRequired,slug:n().string.isRequired};var zu=(0,e.memo)(Ss),Vu=()=>e.createElement(A.x,{padding:8},e.createElement(h.Hn,null));const As=ke.Z.contentManager,$s=({match:{params:{slug:t},url:r}})=>{const{isLoading:o,layout:s,updateLayout:a}=(0,de.zE)(t),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,e.useMemo)(()=>{let m={},f={};return s.contentType&&(m=(0,y.du)(s.contentType)),s.components&&(f=Object.keys(s.components).reduce((g,E)=>(g[E]=(0,y.du)(s.components[E]),g),{})),{rawContentTypeLayout:m,rawComponentsLayouts:f}},[s]);if((s?.contentType?.uid??null)!==t||o)return e.createElement(h.dO,null);const p=({location:{state:m},history:{goBack:f},match:{params:{id:g,origin:E}}},b)=>e.createElement(b,{slug:t,layout:s,state:m,goBack:f,id:g,origin:E}),u=[{path:"create/clone/:origin",comp:ln},{path:"create",comp:ln},{path:":id",comp:ln},{path:"",comp:ku}].map(({path:m,comp:f})=>e.createElement(te.AW,{key:m,path:`${r}/${m}`,render:g=>p(g,f)}));return e.createElement(Ke.ErrorBoundary,{FallbackComponent:Vu},e.createElement(Ae.Provider,{value:s},e.createElement(te.rs,null,e.createElement(te.AW,{path:`${r}/configurations/list`},e.createElement(h.O4,{permissions:As.collectionTypesConfigurations},e.createElement(zu,{layout:l,slug:t,updateLayout:a}))),e.createElement(te.AW,{path:`${r}/configurations/edit`},e.createElement(h.O4,{permissions:As.collectionTypesConfigurations},e.createElement(Tr,{components:i,isContentTypeView:!0,mainLayout:l,slug:t,updateLayout:a}))),u)))};$s.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};var Uu=(0,e.memo)($s),Zs=d(57678);const Hu=ke.Z.contentManager,Qu=()=>{const[{isLoading:t,data:r},o]=(0,e.useReducer)(Zs.Z,Zs.q),s=(0,e.useMemo)(vt.Vo,[]),{schemas:a}=(0,J.v9)(c=>s(c),J.wU),{uid:l}=(0,te.UO)(),{get:i}=(0,h.kY)();return(0,e.useEffect)(()=>{const p=je.default.CancelToken.source();return(async m=>{try{o(en());const{data:{data:f}}=await i(`/content-manager/components/${l}/configuration`,{cancelToken:m.token});o(er((0,y.w8)(f,a,"component")))}catch(f){if(je.default.isCancel(f))return;console.error(f)}})(p),()=>{p.cancel("Operation canceled by the user.")}},[l,a,i]),t?e.createElement(h.dO,null):e.createElement(h.O4,{permissions:Hu.componentsConfigurations},e.createElement(Tr,{components:r.components,mainLayout:r.component,slug:l}))};var Gu=(0,e.memo)(Qu),Ku=d(9695),Yu=d(54725),Xu=()=>{const{formatMessage:t}=(0,Q.Z)();return(0,h.go)(),e.createElement(Re.o,null,e.createElement(fe.T,{title:t({id:(0,y.OB)("header.name"),defaultMessage:"Content"})}),e.createElement(Ze.D,null,e.createElement(Ku.x,{action:e.createElement(h.Qj,{variant:"secondary",startIcon:e.createElement(Lt.Z,null),to:"/plugins/content-type-builder/content-types/create-content-type"},t({id:"app.components.HomePage.create",defaultMessage:"Create your first Content-type"})),content:t({id:"content-manager.pages.NoContentType.text",defaultMessage:"You don't have any content yet, we recommend you to create your first Content-Type."}),hasRadius:!0,icon:e.createElement(Yu.Z,{width:"10rem"}),shadow:"tableShadow"})))},Ju=()=>{const{formatMessage:t}=(0,Q.Z)();return(0,h.go)(),e.createElement(Re.o,null,e.createElement(fe.T,{title:t({id:(0,y.OB)("header.name"),defaultMessage:"Content"})}),e.createElement(Ze.D,null,e.createElement(h.ZF,null)))};const _u=ke.Z.contentManager,Bs=({match:{params:{slug:t},url:r}})=>{const{isLoading:o,layout:s,updateLayout:a}=(0,de.zE)(t),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,e.useMemo)(()=>{let c={},p={};return s.contentType&&(p=(0,y.du)(s.contentType)),s.components&&(c=Object.keys(s.components).reduce((u,m)=>(u[m]=(0,y.du)(s.components[m]),u),{})),{rawContentTypeLayout:p,rawComponentsLayouts:c}},[s]);return o?e.createElement(h.dO,null):e.createElement(Ae.Provider,{value:s},e.createElement(te.rs,null,e.createElement(te.AW,{path:`${r}/configurations/edit`},e.createElement(h.O4,{permissions:_u.singleTypesConfigurations},e.createElement(Tr,{components:i,isContentTypeView:!0,mainLayout:l,slug:t,updateLayout:a}))),e.createElement(te.AW,{path:r,render:({location:{state:c},history:{goBack:p}})=>e.createElement(ln,{layout:s,slug:t,isSingleType:!0,state:c,goBack:p})})))};Bs.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};var em=(0,e.memo)(Bs),tm=d(90700),nm=d(78090),rm=d(77013),om=d(79318),sm=d(66618),am=()=>{const[t,r]=(0,e.useState)(""),{formatMessage:o,locale:s}=(0,Q.Z)(),a=(0,e.useMemo)(vt.KQ,[]),{collectionTypeLinks:l,singleTypeLinks:i}=(0,J.v9)(a,J.wU),{startsWith:c}=(0,h.L0)(s,{sensitivity:"base"}),p=(0,h.Xe)(s,{sensitivity:"base"}),u=(0,e.useMemo)(()=>[{id:"collectionTypes",title:{id:(0,Ee.Z)("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"},searchable:!0,links:l},{id:"singleTypes",title:{id:(0,Ee.Z)("components.LeftMenu.single-types"),defaultMessage:"Single Types"},searchable:!0,links:i}].map(E=>({...E,links:E.links.filter(b=>c(b.title,t)).sort((b,v)=>p.compare(b.title,v.title)).map(b=>({...b,title:o({id:b.title,defaultMessage:b.title})}))})),[l,t,i,c,o,p]),m=()=>{r("")},f=({target:{value:E}})=>{r(E)},g=o({id:(0,Ee.Z)("header.name"),defaultMessage:"Content"});return e.createElement(tm.m,{ariaLabel:g},e.createElement(nm.p,{label:g,searchable:!0,value:t,onChange:f,onClear:m,searchLabel:o({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),e.createElement(rm.Z,null,u.map(E=>{const b=o({id:E.title.id,defaultMessage:E.title.defaultMessage},E.title.values);return e.createElement(om.D,{key:E.id,label:b,badgeLabel:E.links.length.toString()},E.links.map(v=>{const M=v.search?`?${v.search}`:"";return e.createElement(sm.E,{as:Et.OL,key:v.uid,to:`${v.to}${M}`},v.title)}))})))},Br=d(92886);const im=()=>({type:Br.fn}),lm=()=>({type:Br.sZ}),cm=({authorizedCollectionTypeLinks:t,authorizedSingleTypeLinks:r,contentTypeSchemas:o,components:s,fieldSizes:a})=>({type:Br.IX,data:{authorizedCollectionTypeLinks:t,authorizedSingleTypeLinks:r,components:s,contentTypeSchemas:o,fieldSizes:a}}),qs=(t,r,o=[])=>t.filter(s=>s.isDisplayed).map(s=>{const a=[{action:"plugin::content-manager.explorer.create",subject:s.uid},{action:"plugin::content-manager.explorer.read",subject:s.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:s.uid}],i=r==="collectionTypes"?a:l,c=o.find(({uid:u})=>u===s.uid);let p=null;if(c){const u={page:1,pageSize:c.settings.pageSize,sort:`${c.settings.defaultSortBy}:${c.settings.defaultSortOrder}`};p=(0,nn.stringify)(u,{encode:!1})}return{permissions:i,search:p,kind:s.kind,title:s.info.displayName,to:`/content-manager/${s.kind}/${s.uid}`,uid:s.uid,name:s.uid,isDisplayed:s.isDisplayed}});var dm=(t,r)=>{const o=Object.entries(Ro()(t,"kind")).map(([l,i])=>({name:l,links:i})),[s,a]=Oe()(o,"name");return{collectionTypeSectionLinks:qs(s?.links||[],"collectionTypes",r),singleTypeSectionLinks:qs(a?.links??[],"singleTypes")}},Ns=(t,r)=>r.map(({permissions:o})=>(0,h.qX)(t,o)),um=async({models:t,userPermissions:r,toggleNotification:o})=>{const{get:s}=(0,h.tg)();try{const{data:{data:a}}=await s((0,y.IF)("content-types-settings")),{collectionTypeSectionLinks:l,singleTypeSectionLinks:i}=dm(t,a),c=await Promise.all(Ns(r,l)),p=l.filter((f,g)=>c[g]),u=await Promise.all(Ns(r,i)),m=i.filter((f,g)=>u[g]);return{authorizedCollectionTypeLinks:p,authorizedSingleTypeLinks:m}}catch(a){return console.error(a),o({type:"warning",message:{id:"notification.error"}}),{authorizedCollectionTypeLinks:[],authorizedSingleTypeLinks:[]}}},mm=()=>{const t=(0,J.I0)(),r=(0,h.lm)(),o=(0,J.v9)((0,vt.Yg)()),s=(0,e.useRef)(),{allPermissions:a}=(0,h.vn)(),{runHookWaterfall:l}=(0,h.j1)(),c=je.default.CancelToken.source(),{notifyStatus:p}=(0,Ir.G)(),{formatMessage:u}=(0,Q.Z)(),{get:m}=(0,h.kY)(),f=async()=>{t(im());try{const{data:{data:{components:g,contentTypes:E,fieldSizes:b}}}=await m("/content-manager/init",{cancelToken:c.token});p(u({id:(0,y.OB)("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}));const v=await um({models:E,userPermissions:a,toggleNotification:r}),{ctLinks:M}=l($e.LK,{ctLinks:v.authorizedCollectionTypeLinks,models:E}),{stLinks:D}=l($e.dV,{stLinks:v.authorizedSingleTypeLinks,models:E}),T=cm({authorizedCollectionTypeLinks:M,authorizedSingleTypeLinks:D,contentTypeSchemas:E,components:g,fieldSizes:b});t(T)}catch(g){if(je.default.isCancel(g))return;console.error(g),r({type:"warning",message:{id:"notification.error"}})}};return s.current=f,(0,e.useEffect)(()=>(s.current(),()=>{c.cancel("Operation canceled by the user."),t(lm())}),[t,r]),{...o,refetchData:s.current}},qt=d(25708),pm=d(16899);const gm=(0,N.ZP)(w.k)`
  border-radius: 50%;

  svg {
    height: ${6/16}rem;
    width: ${11/16}rem;
    > path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
`,fm=N.ZP.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`;function js({displayedValue:t}){return e.createElement(w.k,{background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:3,padding:3,width:(0,h.Q1)(300)},e.createElement(fm,{type:"button"},e.createElement(w.k,{gap:6},e.createElement(gm,{alignItems:"center",justifyContent:"center",background:"neutral200",height:(0,h.Q1)(32),width:(0,h.Q1)(32)},e.createElement(pm.Z,null)),e.createElement(w.k,{maxWidth:(0,h.Q1)(150)},e.createElement(G.Z,{textColor:"neutral700",ellipsis:!0},t)))),e.createElement(w.k,{gap:2},e.createElement(ye.h,{noBorder:!0},e.createElement(He.Z,null)),e.createElement(ye.h,{noBorder:!0},e.createElement(Je.Z,null))))}js.propTypes={displayedValue:n().string.isRequired};const Ws=({status:t,displayedValue:r,width:o})=>{const{formatMessage:s}=(0,Q.Z)(),a={[at.DRAFT]:s({id:(0,y.OB)("relation.publicationState.draft"),defaultMessage:"Draft"}),[at.PUBLISHED]:s({id:(0,y.OB)("relation.publicationState.published"),defaultMessage:"Published"})},l=t===at.DRAFT?"secondary":"success";return e.createElement(A.x,{style:{width:o}},e.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderSize:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between"},e.createElement(po,{gap:1},e.createElement(ye.h,{noBorder:!0},e.createElement(Je.Z,null)),e.createElement(go,{maxWidth:"100%",justifyContent:"space-between"},e.createElement(A.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},e.createElement(ho,null,e.createElement(G.Z,{textColor:"primary600",ellipsis:!0},r))),t&&e.createElement(On.q,{variant:l,showBullet:!1,size:"S"},e.createElement(G.Z,{fontWeight:"bold",textColor:`${l}700`},a[t])))),e.createElement(A.x,{paddingLeft:4},e.createElement(yo,{type:"button"},e.createElement(uo.J,{width:"12px",as:Gt.Z})))))};Ws.propTypes={status:n().string.isRequired,displayedValue:n().string.isRequired,width:n().number.isRequired};const hm=ke.Z.contentManager;function ym({type:t,item:r}){if([qt.Z.EDIT_FIELD,qt.Z.FIELD].includes(t))return e.createElement(Bt,{labelField:r.labelField});const[o]=t.split("_");switch(o){case qt.Z.COMPONENT:case qt.Z.DYNAMIC_ZONE:return e.createElement(js,{displayedValue:r.displayedValue});case qt.Z.RELATION:return e.createElement(Ws,{displayedValue:r.displayedValue,status:r.status,width:r.width});default:return null}}const zs=()=>{const t=(0,te.$B)("/content-manager/:kind/:uid"),{status:r,collectionTypeLinks:o,singleTypeLinks:s,models:a,refetchData:l}=mm(),i=Oe()([...o,...s],g=>g.title.toLowerCase()),{pathname:c}=(0,te.TH)(),{formatMessage:p}=(0,Q.Z)(),{startSection:u}=(0,h.c1)(),m=(0,e.useRef)(u);if((0,e.useEffect)(()=>{m.current&&m.current("contentManager")},[]),r==="loading")return e.createElement(Re.o,{"aria-busy":"true"},e.createElement(fe.T,{title:p({id:(0,Ee.Z)("header.name"),defaultMessage:"Content"})}),e.createElement(h.dO,null));const f=a.filter(({isDisplayed:g})=>g);return i.length===0&&f.length>0&&c!=="/content-manager/403"?e.createElement(te.l_,{to:"/content-manager/403"}):f.length===0&&c!=="/content-manager/no-content-types"?e.createElement(te.l_,{to:"/content-manager/no-content-types"}):!t&&i.length>0?e.createElement(te.l_,{to:`${i[0].to}${i[0].search?`?${i[0].search}`:""}`}):e.createElement(Fe.A,{sideNav:e.createElement(am,null)},e.createElement(Le.r,{renderItem:ym}),e.createElement(Se.Provider,{value:{refetchData:l}},e.createElement(te.rs,null,e.createElement(te.AW,{path:"/content-manager/components/:uid/configurations/edit"},e.createElement(h.O4,{permissions:hm.componentsConfigurations},e.createElement(Gu,null))),e.createElement(te.AW,{path:"/content-manager/collectionType/:slug",component:Uu}),e.createElement(te.AW,{path:"/content-manager/singleType/:slug",component:em}),e.createElement(te.AW,{path:"/content-manager/403"},e.createElement(Ju,null)),e.createElement(te.AW,{path:"/content-manager/no-content-types"},e.createElement(Xu,null)),e.createElement(te.AW,{path:"",component:h.Hn}))))};function bm(){const{formatMessage:t}=(0,Q.Z)();return e.createElement(e.Fragment,null,e.createElement(Ce.q,{title:t({id:(0,Ee.Z)("plugin.name"),defaultMessage:"Content Manager"})}),e.createElement(zs,null))}},92914:function(dt,Ie,d){"use strict";d.d(Ie,{Z:function(){return y}});var e=d(32735),Ce=d(60216),te=d.n(Ce),h=d(67879),Re=d(24989),fe=d(87933),Fe=d(49372),Q=d(72850),rt=d(9026),Oe=d(95952);const ke=60*1e3,Ee=ke*60,Le=Ee*24,xe=Le*30,Se=Le*365;var he=J=>J<ke?{unit:"second",value:-Math.round(J/1e3)}:J<Ee?{unit:"minute",value:-Math.round(J/ke)}:J<Le?{unit:"hour",value:-Math.round(J/Ee)}:J<xe?{unit:"day",value:-Math.round(J/Le)}:J<Se?{unit:"month",value:-Math.round(J/xe)}:{unit:"year",value:-Math.round(J/Se)},n=d(8997);const ut=()=>{const{formatMessage:J}=(0,h.Z)();return e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Fe.Z,{variant:"sigma",textColor:"neutral600",id:"additional-information"},J({id:(0,Oe.OB)("containers.Edit.information"),defaultMessage:"Information"})),e.createElement(Q.x,null,e.createElement(rt.i,null)))},Ae=({label:J,value:$e})=>e.createElement(fe.k,{justifyContent:"space-between"},e.createElement(Fe.Z,{as:"dt",fontWeight:"bold",textColor:"neutral800",variant:"pi"},J),e.createElement(Fe.Z,{as:"dd",variant:"pi",textColor:"neutral600"},$e));Ae.propTypes={label:te().string.isRequired,value:te().string.isRequired};const zt=()=>{const{formatMessage:J,formatRelativeTime:$e}=(0,h.Z)(),{initialData:Ye,isCreatingEntry:Tt}=(0,Re.Wq)(),Dt=(0,e.useRef)(Date.now()),mt=(Ze,De)=>{const{firstname:ue,lastname:w,username:A}=Ye[De]??{},qe=ue??"",Ue=w??"",Xe=A??(0,n.Pp)(qe,Ue),kt=(Ye[Ze]?new Date(Ye[Ze]).getTime():Date.now())-Dt.current,{unit:xt,value:Vt}=he(-kt);return{at:$e(Vt,xt,{numeric:"auto"}),by:Tt?"-":Xe}},ot=mt("updatedAt","updatedBy"),ve=mt("createdAt","createdBy");return e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},e.createElement(Ae,{label:J({id:(0,Oe.OB)("containers.Edit.information.created"),defaultMessage:"Created"}),value:ve.at}),e.createElement(Ae,{label:J({id:(0,Oe.OB)("containers.Edit.information.by"),defaultMessage:"By"}),value:ve.by})),e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},e.createElement(Ae,{label:J({id:(0,Oe.OB)("containers.Edit.information.lastUpdate"),defaultMessage:"Last update"}),value:ot.at}),e.createElement(Ae,{label:J({id:(0,Oe.OB)("containers.Edit.information.by"),defaultMessage:"By"}),value:ot.by})))},de=({children:J})=>e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:4},J);de.propTypes={children:te().oneOfType([te().arrayOf(te().node),te().node]).isRequired};var y={Root:de,Title:ut,Body:zt}},73710:function(dt,Ie,d){"use strict";d.d(Ie,{Z:function(){return h}});var e=d(32735),Ce=d(92914);function te(){return e.createElement(Ce.Z.Root,null,e.createElement(Ce.Z.Title,null),e.createElement(Ce.Z.Body,null))}var h=te},75536:function(dt,Ie,d){"use strict";var e=d(32735);const Ce=(te,h)=>{const[Re,fe]=(0,e.useState)(te);return(0,e.useEffect)(()=>{const Fe=setTimeout(()=>{fe(te)},h);return()=>{clearTimeout(Fe)}},[te,h]),Re};Ie.Z=Ce},57047:function(dt,Ie,d){"use strict";d.d(Ie,{Z:function(){return xe}});var e=d(32735),Ce=d(67879),te=d(49372),h=d(60216),Re=d.n(h),fe=d(87933),Fe=d(72850),Q=d(24989),rt=d(54504);function Oe({color:Se,name:Ke}){const{themeColorName:he}=(0,rt.k)(Se);return e.createElement(fe.k,{alignItems:"center",gap:2,maxWidth:(0,Q.Q1)(300)},e.createElement(Fe.x,{height:2,background:Se,borderColor:he==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),e.createElement(te.Z,{fontWeight:"regular",textColor:"neutral700",ellipsis:!0},Ke))}Oe.propTypes={color:Re().string.isRequired,name:Re().string.isRequired};var ke=Oe,Ee=d(47510),Le=d(61937),xe=Se=>{const{formatMessage:Ke}=(0,Ce.Z)();return(window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)&&Se.contentType.options?.reviewWorkflows)??!1?{key:"__strapi_reviewWorkflows_stage_temp_key__",name:"strapi_reviewWorkflows_stage",fieldSchema:{type:"relation"},metadatas:{label:Ke({id:(0,Ee.Z)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}),searchable:!1,sortable:!0,mainField:{name:"name",schema:{type:"string"}}},cellFormatter({strapi_reviewWorkflows_stage:n}){if(!n)return e.createElement(te.Z,{textColor:"neutral800"},"-");const{color:ut,name:Ae}=n;return e.createElement(ke,{color:ut??Le.FT,name:Ae})}}:null}},28243:function(dt,Ie,d){"use strict";d.d(Ie,{Z:function(){return Ke}});var e=d(32735),Ce=d(24989),te=d(87107),h=d(87933),Re=d(28847),fe=d(23866),Fe=d(47851),Q=d(67879),rt=d(20108),Oe=d(67350),ke=d(28315),Ee=d(8445),Le=d(92914);const xe="strapi_reviewWorkflows_stage";function Se(){const{initialData:he,isCreatingEntry:n,layout:{uid:ut},isSingleType:Ae,onChange:zt}=(0,Ce.Wq)(),{put:de}=(0,Ce.kY)(),y=he?.[xe]??null,J=Object.prototype.hasOwnProperty.call(he,xe),{formatMessage:$e}=(0,Q.Z)(),{formatAPIError:Ye}=(0,Ce.So)(),Tt=(0,Ce.lm)(),{workflows:{data:Dt,isLoading:mt}={}}=(0,Oe.n)(),ot=Dt?.[0]??null,{error:ve,isLoading:Ze,mutateAsync:De}=(0,rt.useMutation)(async({entityId:Ue,stageId:Xe,uid:It})=>{const kt=Ae?"single-types":"collection-types",{data:{data:xt}}=await de(`/admin/content-manager/${kt}/${It}/${Ue}/stage`,{data:{id:Xe}});return zt({target:{name:xe,value:xt[xe]}},!0),xt},{onSuccess(){Tt({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Success: Review stage updated"}})}}),ue=y===null&&!mt&&!n&&$e({id:"content-manager.reviewWorkflows.stage.select.placeholder",defaultMessage:"Select a stage"}),A=ve&&Ye(ve)||ue||null,qe=async({value:Ue})=>{try{await De({entityId:he.id,stageId:Ue,uid:ut})}catch{}};return e.createElement(Le.Z.Root,null,e.createElement(Le.Z.Title,null),J&&!n&&e.createElement(te.g,{error:A,name:xe,id:xe},e.createElement(h.k,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(Re.Q,null,$e({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"})),e.createElement(Ce.JV,{components:{LoadingIndicator:()=>e.createElement(fe.a,{small:!0}),Option:ke.K,SingleValue:Ee.R},error:A,inputId:xe,isLoading:Ze,isSearchable:!1,isClearable:!1,name:xe,onChange:qe,options:ot?ot.stages.map(({id:Ue,color:Xe,name:It})=>({value:Ue,label:It,color:Xe})):[],value:{value:y?.id,label:y?.name,color:y?.color}}),e.createElement(Fe.c,null))),e.createElement(Le.Z.Body,null))}var Ke=Se},57544:function(){},59599:function(){},42310:function(){},33842:function(){},85695:function(){}}]);

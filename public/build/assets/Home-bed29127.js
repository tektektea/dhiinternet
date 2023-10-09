import{j as E,B as U,l,Z as he,ak as _e,al as Y,H as ge,I as W,K as me,q as Z,L as J,s as P,a3 as $,P as xe,k as x,z as Q,Q as z,am as fe,an as ve,m as X,g as T,a1 as be,o as D,c as ye,d as i,w as o,u as pe,ac as we,ae as qe,e,h as R,ao as H,b as ke,ap as Ie,aq as j,ar as M,as as K,p as Se,i as je}from"./app-072ff1a6.js";import{a as Te,b as V,Q as F,B as Le}from"./BackendLayout-1271c184.js";import{Q as k}from"./QImg-7128c728.js";import{Q as Ce}from"./QPage-877a69f4.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";import"./QLayout-59b10a61.js";const Qe=E({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(t,{slots:f,emit:w}){let d=!1,_,c,r=null,g=null,m,S;function q(){_&&_(),_=null,d=!1,r!==null&&(clearTimeout(r),r=null),g!==null&&(clearTimeout(g),g=null),c!==void 0&&c.removeEventListener("transitionend",m),m=null}function u(a,h,b){h!==void 0&&(a.style.height=`${h}px`),a.style.transition=`height ${t.duration}ms cubic-bezier(.25, .8, .50, 1)`,d=!0,_=b}function v(a,h){a.style.overflowY=null,a.style.height=null,a.style.transition=null,q(),h!==S&&w(h)}function C(a,h){let b=0;c=a,d===!0?(q(),b=a.offsetHeight===a.scrollHeight?0:void 0):(S="hide",a.style.overflowY="hidden"),u(a,b,h),r=setTimeout(()=>{r=null,a.style.height=`${a.scrollHeight}px`,m=y=>{g=null,(Object(y)!==y||y.target===a)&&v(a,"show")},a.addEventListener("transitionend",m),g=setTimeout(m,t.duration*1.1)},100)}function B(a,h){let b;c=a,d===!0?q():(S="show",a.style.overflowY="hidden",b=a.scrollHeight),u(a,b,h),r=setTimeout(()=>{r=null,a.style.height=0,m=y=>{g=null,(Object(y)!==y||y.target===a)&&v(a,"hide")},a.addEventListener("transitionend",m),g=setTimeout(m,t.duration*1.1)},100)}return U(()=>{d===!0&&q()}),()=>l(he,{css:!1,appear:t.appear,onEnter:C,onLeave:B},f.default)}}),I=_e({}),He=Object.keys(Y),G=E({name:"QExpansionItem",props:{...Y,...ge,...W,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...me,"click","afterShow","afterHide"],setup(t,{slots:f,emit:w}){const{proxy:{$q:d}}=Z(),_=J(t,d),c=P(t.modelValue!==null?t.modelValue:t.defaultOpened),r=P(null),g=$(),{show:m,hide:S,toggle:q}=xe({showing:c});let u,v;const C=x(()=>`q-expansion-item q-item-type q-expansion-item--${c.value===!0?"expanded":"collapsed"} q-expansion-item--${t.popup===!0?"popup":"standard"}`),B=x(()=>t.contentInsetLevel===void 0?null:{["padding"+(d.lang.rtl===!0?"Right":"Left")]:t.contentInsetLevel*56+"px"}),a=x(()=>t.disable!==!0&&(t.href!==void 0||t.to!==void 0&&t.to!==null&&t.to!=="")),h=x(()=>{const n={};return He.forEach(p=>{n[p]=t[p]}),n}),b=x(()=>a.value===!0||t.expandIconToggle!==!0),y=x(()=>t.expandedIcon!==void 0&&c.value===!0?t.expandedIcon:t.expandIcon||d.iconSet.expansionItem[t.denseToggle===!0?"denseIcon":"icon"]),ee=x(()=>t.disable!==!0&&(a.value===!0||t.expandIconToggle===!0)),te=x(()=>({expanded:c.value===!0,detailsId:t.targetUid,toggle:q,show:m,hide:S})),N=x(()=>{const n=t.toggleAriaLabel!==void 0?t.toggleAriaLabel:d.lang.label[c.value===!0?"collapse":"expand"](t.label);return{role:"button","aria-expanded":c.value===!0?"true":"false","aria-controls":g,"aria-label":n}});Q(()=>t.group,n=>{v!==void 0&&v(),n!==void 0&&A()});function se(n){a.value!==!0&&q(n),w("click",n)}function ne(n){n.keyCode===13&&O(n,!0)}function O(n,p){p!==!0&&r.value!==null&&r.value.focus(),q(n),be(n)}function ae(){w("afterShow")}function ie(){w("afterHide")}function A(){u===void 0&&(u=$()),c.value===!0&&(I[t.group]=u);const n=Q(c,L=>{L===!0?I[t.group]=u:I[t.group]===u&&delete I[t.group]}),p=Q(()=>I[t.group],(L,ue)=>{ue===u&&L!==void 0&&L!==u&&S()});v=()=>{n(),p(),I[t.group]===u&&delete I[t.group],v=void 0}}function le(){const n={class:[`q-focusable relative-position cursor-pointer${t.denseToggle===!0&&t.switchToggleSide===!0?" items-end":""}`,t.expandIconClass],side:t.switchToggleSide!==!0,avatar:t.switchToggleSide},p=[l(T,{class:"q-expansion-item__toggle-icon"+(t.expandedIcon===void 0&&c.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:y.value})];return ee.value===!0&&(Object.assign(n,{tabindex:0,...N.value,onClick:O,onKeyup:ne}),p.unshift(l("div",{ref:r,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),l(F,n,()=>p)}function oe(){let n;return f.header!==void 0?n=[].concat(f.header(te.value)):(n=[l(F,()=>[l(V,{lines:t.labelLines},()=>t.label||""),t.caption?l(V,{lines:t.captionLines,caption:!0},()=>t.caption):null])],t.icon&&n[t.switchToggleSide===!0?"push":"unshift"](l(F,{side:t.switchToggleSide===!0,avatar:t.switchToggleSide!==!0},()=>l(T,{name:t.icon})))),t.disable!==!0&&t.hideExpandIcon!==!0&&n[t.switchToggleSide===!0?"unshift":"push"](le()),n}function ce(){const n={ref:"item",style:t.headerStyle,class:t.headerClass,dark:_.value,disable:t.disable,dense:t.dense,insetLevel:t.headerInsetLevel};return b.value===!0&&(n.clickable=!0,n.onClick=se,Object.assign(n,a.value===!0?h.value:N.value)),l(Te,n,oe)}function de(){return fe(l("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:B.value,id:g},X(f.default)),[[ve,c.value]])}function re(){const n=[ce(),l(Qe,{duration:t.duration,onShow:ae,onHide:ie},de)];return t.expandSeparator===!0&&n.push(l(z,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:_.value}),l(z,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:_.value})),n}return t.group!==void 0&&A(),U(()=>{v!==void 0&&v()}),()=>l("div",{class:C.value},[l("div",{class:"q-expansion-item__container relative-position"},re())])}}),Fe=E({name:"QList",props:{...W,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:f}){const w=Z(),d=J(t,w.proxy.$q),_=x(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(d.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>l(t.tag,{class:_.value},X(f.default))}});const s=t=>(Se("data-v-daf83cf6"),t=t(),je(),t),Ve=s(()=>e("title",null,"Home",-1)),Ee=s(()=>e("meta",{name:"description",content:"Internet rintlak leh chaktha duh tan a chenfakawm"},null,-1)),Ne={style:{"min-width":"540px"},class:"row"},Oe={class:"col-xs-12 col-sm-6"},Ae={class:"text-italic text-md column justify-center full-height"},Pe=s(()=>e("h1",{class:"hero-title text-accent"}," DHIINTERNET ",-1)),$e=s(()=>e("p",{class:"text-italic text-lg text-grey-7"},"Internet chak leh tha, rinthlak bawk si office leh mahni chenna a hmang duh tan",-1)),ze={class:"flex q-gutter-sm q-mt-xl"},De={class:"flex items-center q-gutter-sm cursor-pointer q-ml-lg"},Re={class:"col-xs-12 col-sm-6"},Me=s(()=>e("br",null,null,-1)),Ke=s(()=>e("br",null,null,-1)),Ge=s(()=>e("br",null,null,-1)),Ue=s(()=>e("div",{class:"full-width text-center text-page-header q-my-lg text-grey-9"}," Features ",-1)),Ye={class:"flex justify-between items-center"},We={class:"feature-card column q-gutter-sm justify-center items-center"},Ze=s(()=>e("div",null,[e("p",{class:"feature-title"},"More than 2k"),e("p",{class:"text-caption q-ma-none text-grey-7"},"Satisfied Customer")],-1)),Je={class:"feature-card column q-gutter-sm justify-center items-center"},Xe=s(()=>e("div",null,[e("p",{class:"feature-title"},"Champhai"),e("p",{class:"text-caption q-ma-none text-grey-7"},"Covered Region")],-1)),et={class:"feature-card column q-gutter-sm justify-center items-center"},tt=s(()=>e("div",null,[e("p",{class:"feature-title"},"24x7 Support"),e("p",{class:"text-caption q-ma-none text-grey-7"}," We provide a service related help to cover 24x7 ")],-1)),st=s(()=>e("br",null,null,-1)),nt=s(()=>e("br",null,null,-1)),at=s(()=>e("br",null,null,-1)),it=s(()=>e("div",{class:"full-width text-center text-page-header q-my-lg text-grey-9"}," Testmonials ",-1)),lt={class:"flex justify-between items-center"},ot={class:"column q-gutter-md justify-center items-center testimonial-card"},ct=s(()=>e("p",{class:"text-lg text-bold"},"Lalrinawma",-1)),dt=s(()=>e("p",{class:"text-caption text-grey-7"},"CEO Airtel",-1)),rt=s(()=>e("blockquote",{class:"text-quote"},' "Interet Tha leh rintlak hnathawk nan a duhthusam ngei mai ka hmu ve ta e," ',-1)),ut={class:"column q-gutter-md justify-center items-center testimonial-card"},ht=s(()=>e("p",{class:"text-lg text-bold"},"Sangkima",-1)),_t=s(()=>e("p",{class:"text-caption text-grey-7"},"Sales Manager HDFC",-1)),gt=s(()=>e("blockquote",{class:"text-quote"},' "A tha in a van rinthlak em" ',-1)),mt={class:"column q-gutter-md justify-center items-center testimonial-card"},xt=s(()=>e("p",{class:"text-lg text-bold"},"Juliati",-1)),ft=s(()=>e("p",{class:"text-caption text-grey-7"},"Manager ICICI",-1)),vt=s(()=>e("blockquote",{class:"text-quote"},' "DHIInternet ka dawr chinah chang dang ka kan thei ta lo," ',-1)),bt=s(()=>e("br",null,null,-1)),yt=s(()=>e("br",null,null,-1)),pt=s(()=>e("br",null,null,-1)),wt=s(()=>e("div",{class:"full-width text-center text-page-header q-my-lg text-grey-9"}," Our Plans ",-1)),qt={class:"row q-col-gutter-md"},kt={class:"col-xs-12 col-sm-4"},It={class:"plan-card bg-red-3 text-white column justify-between"},St={class:"flex q-gutter-sm"},jt=s(()=>e("div",{class:"text-weight-medium text-lg"},"Plan one",-1)),Tt=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature one"),e("div",{class:"text-md"},"Value2")],-1)),Lt=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature two"),e("div",{class:"text-md"},"Value2")],-1)),Ct=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature tjree"),e("div",{class:"text-md"},"Value2")],-1)),Bt=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md text-grey-7"},"Feature one"),e("div",{class:"text-md text-dark"},"Value2")],-1)),Qt={class:"col-xs-12 col-sm-4"},Ht={class:"plan-card bg-secondary"},Ft={class:"flex q-gutter-sm"},Vt=s(()=>e("div",{class:"text-weight-medium text-lg"},"Plan one",-1)),Et=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature one"),e("div",{class:"text-md"},"Value2")],-1)),Nt=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature two"),e("div",{class:"text-md"},"Value2")],-1)),Ot=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature tjree"),e("div",{class:"text-md"},"Value2")],-1)),At=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md text-grey-7"},"Feature one"),e("div",{class:"text-md text-dark"},"Value2")],-1)),Pt={class:"col-xs-12 col-sm-4"},$t={class:"plan-card bg-green-6 text-white"},zt={class:"flex q-gutter-sm"},Dt=s(()=>e("div",{class:"text-weight-medium text-lg"},"Plan one",-1)),Rt=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature one"),e("div",{class:"text-md"},"Value2")],-1)),Mt=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature two"),e("div",{class:"text-md"},"Value2")],-1)),Kt=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md"},"Feature tjree"),e("div",{class:"text-md"},"Value2")],-1)),Gt=s(()=>e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-md text-grey-7"},"Feature one"),e("div",{class:"text-md text-dark"},"Value2")],-1)),Ut=s(()=>e("br",null,null,-1)),Yt=s(()=>e("br",null,null,-1)),Wt=s(()=>e("br",null,null,-1)),Zt=s(()=>e("div",{class:"full-width text-center text-page-header q-my-lg text-grey-9"}," Frequently Asked Question ",-1)),Jt=s(()=>e("br",null,null,-1)),Xt=s(()=>e("br",null,null,-1)),es=s(()=>e("br",null,null,-1)),ts=Object.assign({layout:Le},{__name:"Home",setup(t){return(f,w)=>(D(),ye(we,null,[i(pe(qe),null,{default:o(()=>[Ve,Ee]),_:1}),i(Ce,{class:"container"},{default:o(()=>[e("div",Ne,[e("div",Oe,[e("div",Ae,[Pe,$e,e("div",ze,[i(R,{class:"book-btn",label:"Book Now",rounded:"",color:"primary","no-caps":""}),e("div",De,[i(T,{name:"play_circle"}),i(V,null,{default:o(()=>[H("Watch Our Story")]),_:1})])])])]),e("div",Re,[f.$q.screen.gt.sm?(D(),ke(k,{key:0,class:"q-my-xl",src:"assets/images/hero.svg"})):Ie("",!0)])]),Me,Ke,Ge,Ue,e("div",Ye,[e("div",We,[i(j,{size:"120px"},{default:o(()=>[i(k,{width:"150px",src:"assets/images/happy_customer.svg"})]),_:1}),Ze]),e("div",Je,[i(j,{size:"120px"},{default:o(()=>[i(k,{width:"150px",src:"assets/images/map.svg"})]),_:1}),Xe]),e("div",et,[i(j,{size:"120px"},{default:o(()=>[i(k,{width:"150px",src:"assets/images/customer_support.svg"})]),_:1}),tt])]),st,nt,at,it,e("div",lt,[e("div",ot,[i(j,{rounded:""},{default:o(()=>[i(k,{width:"150",ratio:1,src:"assets/images/people-1.png"})]),_:1}),ct,dt,rt]),e("div",ut,[i(j,{rounded:""},{default:o(()=>[i(k,{width:"150",ratio:1,src:"assets/images/people-3.png"})]),_:1}),ht,_t,gt]),e("div",mt,[i(j,{rounded:""},{default:o(()=>[i(k,{width:"150",ratio:1,src:"assets/images/people-2.png"})]),_:1}),xt,ft,vt])]),bt,yt,pt,wt,e("div",qt,[e("div",kt,[e("div",It,[e("div",null,[e("div",St,[i(T,{name:"military_tech",size:"42px",color:"blue-4"}),jt]),Tt,Lt,Ct,Bt]),e("div",null,[i(R,{class:"",rounded:"",color:"primary",outline:"",label:"Book Now","no-caps":""})])])]),e("div",Qt,[e("div",Ht,[e("div",Ft,[i(T,{name:"military_tech",size:"42px",color:"blue-4"}),Vt]),Et,Nt,Ot,At])]),e("div",Pt,[e("div",$t,[e("div",zt,[i(T,{name:"military_tech",size:"42px",color:"blue-4"}),Dt]),Rt,Mt,Kt,Gt])])]),Ut,Yt,Wt,Zt,i(Fe,{style:{"border-radius":"20px"},class:"bg-white shadow-1 rounded-borders"},{default:o(()=>[i(G,{class:"overflow-hidden text-lg",icon:"info",label:"Enge in that bikna"},{default:o(()=>[i(M,null,{default:o(()=>[i(K,null,{default:o(()=>[H(" Hre bik nang ")]),_:1})]),_:1})]),_:1}),i(G,{class:"overflow-hidden text-lg",icon:"info",label:"Engtia booking tih tur nge"},{default:o(()=>[i(M,null,{default:o(()=>[i(K,null,{default:o(()=>[H(" Hre bik nang ")]),_:1})]),_:1})]),_:1})]),_:1}),Jt,Xt,es]),_:1})],64))}}),cs=Be(ts,[["__scopeId","data-v-daf83cf6"]]);export{cs as default};

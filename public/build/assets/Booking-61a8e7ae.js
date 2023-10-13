import{Q as Rt}from"./QImg-a14f922d.js";import{s as We,ad as Xe,ae as gt,af as ht,ag as bt,a0 as Ht,ah as Tt,z as Ye,a1 as Pt,ai as Dt,B as m,aj as Nt,N as w,f as He,ak as $t,al as jt,U as oe,q as Qt,A as E,I as ye,am as Kt,Z as Ut,an as Wt,ao as Xt,J as yt,a3 as G,ap as Yt,aq as Jt,ar as dt,as as Ie,at as Zt,au as Gt,X as Ke,av as el,V as be,aw as tl,W as ll,ax as ul,a8 as nl,T as ol,o as al,b as il,w as ft,e as ae,d as Z,j as Re,u as W,h as rl,p as sl,k as cl,g as dl}from"./app-59a6bb85.js";import{b as fl,c as vl,a as ml}from"./use-quasar-e6f9093e.js";import{n as vt,h as Sl,B as gl}from"./BackendLayout-191bf443.js";import{Q as hl}from"./QForm-a2d26867.js";import{Q as bl}from"./QPage-f78d9e75.js";import{_ as yl}from"./_plugin-vue_export-helper-c27b6911.js";const wl=We({name:"QField",inheritAttrs:!1,props:Xe,emits:gt,setup(){return ht(bt())}}),Vl={xs:8,sm:10,md:14,lg:20,xl:24},pl=We({name:"QChip",props:{...Ht,...Tt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:i,emit:r}){const{proxy:{$q:h}}=Ye(),x=Pt(e,h),l=Dt(e,Vl),M=m(()=>e.selected===!0||e.icon!==void 0),V=m(()=>e.selected===!0?e.iconSelected||h.iconSet.chip.selected:e.icon),b=m(()=>e.iconRemove||h.iconSet.chip.remove),I=m(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=m(()=>{const y=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(y?` text-${y} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(I.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(x.value===!0?" q-chip--dark q-dark":"")}),C=m(()=>{const y=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},j={...y,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||h.lang.label.remove};return{chip:y,remove:j}});function A(y){y.keyCode===13&&g(y)}function g(y){e.disable||(r("update:selected",!e.selected),r("click",y))}function H(y){(y.keyCode===void 0||y.keyCode===13)&&(oe(y),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function O(){const y=[];I.value===!0&&y.push(w("div",{class:"q-focus-helper"})),M.value===!0&&y.push(w(He,{class:"q-chip__icon q-chip__icon--left",name:V.value}));const j=e.label!==void 0?[w("div",{class:"ellipsis"},[e.label])]:void 0;return y.push(w("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},$t(i.default,j))),e.iconRight&&y.push(w(He,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&y.push(w(He,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:b.value,...C.value.remove,onClick:H,onKeyup:H})),y}return()=>{if(e.modelValue===!1)return;const y={class:c.value,style:l.value};return I.value===!0&&Object.assign(y,C.value.chip,{onClick:g,onKeyup:A}),Nt("div",y,O(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[jt,e.ripple]])}}});let Te=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const i=document.createElement("div");Object.assign(i.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(i),e.scrollLeft=-1e3,Te=e.scrollLeft>=0,e.remove()}const Q=1e3,Cl=["start","center","end","start-force","center-force","end-force"],wt=Array.prototype.filter,xl=window.getComputedStyle(document.body).overflowAnchor===void 0?Qt:function(e,i){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];wt.call(r,x=>x.dataset&&x.dataset.qVsAnchor!==void 0).forEach(x=>{delete x.dataset.qVsAnchor});const h=r[i];h&&h.dataset&&(h.dataset.qVsAnchor="")}))};function we(e,i){return e+i}function Ue(e,i,r,h,x,l,M,V){const b=e===window?document.scrollingElement||document.documentElement:e,I=x===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-M-V,scrollMaxSize:0,offsetStart:-M,offsetEnd:-V};if(x===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=b.scrollLeft,c.scrollViewSize+=b.clientWidth),c.scrollMaxSize=b.scrollWidth,l===!0&&(c.scrollStart=(Te===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=b.scrollTop,c.scrollViewSize+=b.clientHeight),c.scrollMaxSize=b.scrollHeight),r!==null)for(let C=r.previousElementSibling;C!==null;C=C.previousElementSibling)C.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=C[I]);if(h!==null)for(let C=h.nextElementSibling;C!==null;C=C.nextElementSibling)C.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=C[I]);if(i!==e){const C=b.getBoundingClientRect(),A=i.getBoundingClientRect();x===!0?(c.offsetStart+=A.left-C.left,c.offsetEnd-=A.width):(c.offsetStart+=A.top-C.top,c.offsetEnd-=A.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function mt(e,i,r,h){i==="end"&&(i=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(h===!0&&(i=(Te===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-i),window.scrollTo(i,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,i):r===!0?(h===!0&&(i=(Te===!0?e.scrollWidth-e.offsetWidth:0)-i),e.scrollLeft=i):e.scrollTop=i}function ze(e,i,r,h){if(r>=h)return 0;const x=i.length,l=Math.floor(r/Q),M=Math.floor((h-1)/Q)+1;let V=e.slice(l,M).reduce(we,0);return r%Q!==0&&(V-=i.slice(l*Q,r).reduce(we,0)),h%Q!==0&&h!==x&&(V-=i.slice(h,M*Q).reduce(we,0)),V}const kl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},ql={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...kl};function _l({virtualScrollLength:e,getVirtualScrollTarget:i,getVirtualScrollEl:r,virtualScrollItemSizeComputed:h}){const x=Ye(),{props:l,emit:M,proxy:V}=x,{$q:b}=V;let I,c,C,A=[],g;const H=E(0),O=E(0),y=E({}),j=E(null),P=E(null),X=E(null),F=E({from:0,to:0}),B=m(()=>l.tableColspan!==void 0?l.tableColspan:100);h===void 0&&(h=m(()=>l.virtualScrollItemSize));const Y=m(()=>h.value+";"+l.virtualScrollHorizontal),Ve=m(()=>Y.value+";"+l.virtualScrollSliceRatioBefore+";"+l.virtualScrollSliceRatioAfter);ye(Ve,()=>{J()}),ye(Y,ie);function ie(){te(c,!0)}function pe(o){te(o===void 0?c:o)}function ee(o,s){const f=i();if(f==null||f.nodeType===8)return;const _=Ue(f,r(),j.value,P.value,l.virtualScrollHorizontal,b.lang.rtl,l.virtualScrollStickySizeStart,l.virtualScrollStickySizeEnd);C!==_.scrollViewSize&&J(_.scrollViewSize),re(f,_,Math.min(e.value-1,Math.max(0,parseInt(o,10)||0)),0,Cl.indexOf(s)>-1?s:c>-1&&o>c?"end":"start")}function K(){const o=i();if(o==null||o.nodeType===8)return;const s=Ue(o,r(),j.value,P.value,l.virtualScrollHorizontal,b.lang.rtl,l.virtualScrollStickySizeStart,l.virtualScrollStickySizeEnd),f=e.value-1,_=s.scrollMaxSize-s.offsetStart-s.offsetEnd-O.value;if(I===s.scrollStart)return;if(s.scrollMaxSize<=0){re(o,s,0,0);return}C!==s.scrollViewSize&&J(s.scrollViewSize),Ce(F.value.from);const L=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(g[f],s.scrollViewSize/2));if(L>0&&Math.ceil(s.scrollStart)>=L){re(o,s,f,s.scrollMaxSize-s.offsetEnd-A.reduce(we,0));return}let p=0,v=s.scrollStart-s.offsetStart,R=v;if(v<=_&&v+s.scrollViewSize>=H.value)v-=H.value,p=F.value.from,R=v;else for(let S=0;v>=A[S]&&p<f;S++)v-=A[S],p+=Q;for(;v>0&&p<f;)v-=g[p],v>-s.scrollViewSize?(p++,R=v):R=g[p]+v;re(o,s,p,R)}function re(o,s,f,_,L){const p=typeof L=="string"&&L.indexOf("-force")>-1,v=p===!0?L.replace("-force",""):L,R=v!==void 0?v:"start";let S=Math.max(0,f-y.value[R]),D=S+y.value.total;D>e.value&&(D=e.value,S=Math.max(0,D-y.value.total)),I=s.scrollStart;const ce=S!==F.value.from||D!==F.value.to;if(ce===!1&&v===void 0){ke(f);return}const{activeElement:qe}=document,U=X.value;ce===!0&&U!==null&&U!==qe&&U.contains(qe)===!0&&(U.addEventListener("focusout",xe),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",xe)})),xl(U,f-S);const Me=v!==void 0?g.slice(S,f).reduce(we,0):0;if(ce===!0){const le=D>=F.value.from&&S<=F.value.to?F.value.to:D;F.value={from:S,to:le},H.value=ze(A,g,0,S),O.value=ze(A,g,D,e.value),requestAnimationFrame(()=>{F.value.to!==D&&I===s.scrollStart&&(F.value={from:F.value.from,to:D},O.value=ze(A,g,D,e.value))})}requestAnimationFrame(()=>{if(I!==s.scrollStart)return;ce===!0&&Ce(S);const le=g.slice(S,f).reduce(we,0),de=le+s.offsetStart+H.value,Oe=de+g[f];let _e=de+_;if(v!==void 0){const Pe=le-Me,N=s.scrollStart+Pe;_e=p!==!0&&N<de&&Oe<N+s.scrollViewSize?N:v==="end"?Oe-s.scrollViewSize:de-(v==="start"?0:Math.round((s.scrollViewSize-g[f])/2))}I=_e,mt(o,_e,l.virtualScrollHorizontal,b.lang.rtl),ke(f)})}function Ce(o){const s=X.value;if(s){const f=wt.call(s.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),_=f.length,L=l.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let p=o,v,R;for(let S=0;S<_;){for(v=L(f[S]),S++;S<_&&f[S].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=L(f[S]),S++;R=v-g[p],R!==0&&(g[p]+=R,A[Math.floor(p/Q)]+=R),p++}}}function xe(){X.value!==null&&X.value!==void 0&&X.value.focus()}function te(o,s){const f=1*h.value;(s===!0||Array.isArray(g)===!1)&&(g=[]);const _=g.length;g.length=e.value;for(let p=e.value-1;p>=_;p--)g[p]=f;const L=Math.floor((e.value-1)/Q);A=[];for(let p=0;p<=L;p++){let v=0;const R=Math.min((p+1)*Q,e.value);for(let S=p*Q;S<R;S++)v+=g[S];A.push(v)}c=-1,I=void 0,H.value=ze(A,g,0,F.value.from),O.value=ze(A,g,F.value.to,e.value),o>=0?(Ce(F.value.from),G(()=>{ee(o)})):se()}function J(o){if(o===void 0&&typeof window<"u"){const v=i();v!=null&&v.nodeType!==8&&(o=Ue(v,r(),j.value,P.value,l.virtualScrollHorizontal,b.lang.rtl,l.virtualScrollStickySizeStart,l.virtualScrollStickySizeEnd).scrollViewSize)}C=o;const s=parseFloat(l.virtualScrollSliceRatioBefore)||0,f=parseFloat(l.virtualScrollSliceRatioAfter)||0,_=1+s+f,L=o===void 0||o<=0?1:Math.ceil(o/h.value),p=Math.max(1,L,Math.ceil((l.virtualScrollSliceSize>0?l.virtualScrollSliceSize:10)/_));y.value={total:Math.ceil(p*_),start:Math.ceil(p*s),center:Math.ceil(p*(.5+s)),end:Math.ceil(p*(1+s)),view:L}}function Be(o,s){const f=l.virtualScrollHorizontal===!0?"width":"height",_={["--q-virtual-scroll-item-"+f]:h.value+"px"};return[o==="tbody"?w(o,{class:"q-virtual-scroll__padding",key:"before",ref:j},[w("tr",[w("td",{style:{[f]:`${H.value}px`,..._},colspan:B.value})])]):w(o,{class:"q-virtual-scroll__padding",key:"before",ref:j,style:{[f]:`${H.value}px`,..._}}),w(o,{class:"q-virtual-scroll__content",key:"content",ref:X,tabindex:-1},s.flat()),o==="tbody"?w(o,{class:"q-virtual-scroll__padding",key:"after",ref:P},[w("tr",[w("td",{style:{[f]:`${O.value}px`,..._},colspan:B.value})])]):w(o,{class:"q-virtual-scroll__padding",key:"after",ref:P,style:{[f]:`${O.value}px`,..._}})]}function ke(o){c!==o&&(l.onVirtualScroll!==void 0&&M("virtualScroll",{index:o,from:F.value.from,to:F.value.to-1,direction:o<c?"decrease":"increase",ref:V}),c=o)}J();const se=Kt(K,b.platform.is.ios===!0?120:35);Ut(()=>{J()});let a=!1;return Wt(()=>{a=!0}),Xt(()=>{if(a!==!0)return;const o=i();I!==void 0&&o!==void 0&&o!==null&&o.nodeType!==8?mt(o,I,l.virtualScrollHorizontal,b.lang.rtl):ee(c)}),yt(()=>{se.cancel()}),Object.assign(V,{scrollTo:ee,reset:ie,refresh:pe}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:y,setVirtualScrollSize:J,onVirtualScrollEvt:se,localResetVirtualScroll:te,padVirtualScroll:Be,scrollTo:ee,reset:ie,refresh:pe}}const St=e=>["add","add-unique","toggle"].includes(e),Al=".*+?^${}()|[]\\",Il=Object.keys(Xe),zl=We({name:"QSelect",inheritAttrs:!1,props:{...ql,...Yt,...Xe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:St},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...gt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:i,emit:r}){const{proxy:h}=Ye(),{$q:x}=h,l=E(!1),M=E(!1),V=E(-1),b=E(""),I=E(!1),c=E(!1);let C=null,A,g,H,O=null,y,j,P,X;const F=E(null),B=E(null),Y=E(null),Ve=E(null),ie=E(null),pe=Jt(e),ee=el(at),K=m(()=>Array.isArray(e.options)?e.options.length:0),re=m(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ce,virtualScrollSliceSizeComputed:xe,localResetVirtualScroll:te,padVirtualScroll:J,onVirtualScrollEvt:Be,scrollTo:ke,setVirtualScrollSize:se}=_l({virtualScrollLength:K,getVirtualScrollTarget:xt,getVirtualScrollEl:nt,virtualScrollItemSizeComputed:re}),a=bt(),o=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&A!==void 0?A:[],d=n.map(q=>Ct(q,u));return e.modelValue===null&&t===!0?d.filter(q=>q!==null):d}return n}),s=m(()=>{const t={};return Il.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),f=m(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),_=m(()=>dt(o.value)),L=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),p=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=m(()=>K.value===0),R=m(()=>o.value.map(t=>$.value(t)).join(", ")),S=m(()=>e.displayValue!==void 0?e.displayValue:R.value),D=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ce=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(D.value))),qe=m(()=>a.focused.value===!0?e.tabindex:-1),U=m(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":l.value===!0?"true":"false","aria-controls":`${a.targetUid.value}_lb`};return V.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${V.value}`),t}),Me=m(()=>({id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),le=m(()=>o.value.map((t,n)=>({index:n,opt:t,html:D.value(t),selected:!0,removeAtIndex:pt,toggleOption:ue,tabindex:qe.value}))),de=m(()=>{if(K.value===0)return[];const{from:t,to:n}=Ce.value;return e.options.slice(t,n).map((u,d)=>{const q=fe.value(u)===!0,k=t+d,z={clickable:!0,active:!1,activeClass:Pe.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${a.targetUid.value}_${k}`,onClick:()=>{ue(u)}};return q!==!0&&($e(u)===!0&&(z.active=!0),V.value===k&&(z.focused=!0),z["aria-selected"]=z.active===!0?"true":"false",x.platform.is.desktop===!0&&(z.onMousemove=()=>{l.value===!0&&ve(k)})),{index:k,opt:u,html:D.value(u),label:$.value(u),selected:z.active,focused:z.focused,toggleOption:ue,setOptionIndex:ve,itemProps:z}})}),Oe=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:x.iconSet.arrow.dropdown),_e=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Pe=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=m(()=>Ne(e.optionValue,"value")),$=m(()=>Ne(e.optionLabel,"label")),fe=m(()=>Ne(e.optionDisable,"disable")),Fe=m(()=>o.value.map(t=>N.value(t))),Vt=m(()=>{const t={onInput:at,onChange:ee,onKeydown:ut,onKeyup:tt,onKeypress:lt,onFocus:Ge,onClick(n){g===!0&&be(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ee,t});ye(o,t=>{A=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(M.value!==!0&&l.value!==!0||_.value!==!0)&&(H!==!0&&he(),(M.value===!0||l.value===!0)&&me(""))},{immediate:!0}),ye(()=>e.fillInput,he),ye(l,je),ye(K,Lt);function Je(t){return e.emitValue===!0?N.value(t):t}function De(t){if(t>-1&&t<o.value.length)if(e.multiple===!0){const n=e.modelValue.slice();r("remove",{index:t,value:n.splice(t,1)[0]}),r("update:modelValue",n)}else r("update:modelValue",null)}function pt(t){De(t),a.focus()}function Ze(t,n){const u=Je(t);if(e.multiple!==!0){e.fillInput===!0&&Ae($.value(t),!0,!0),r("update:modelValue",u);return}if(o.value.length===0){r("add",{index:0,value:u}),r("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&$e(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();r("add",{index:d.length,value:u}),d.push(u),r("update:modelValue",d)}function ue(t,n){if(a.editable.value!==!0||t===void 0||fe.value(t)===!0)return;const u=N.value(t);if(e.multiple!==!0){n!==!0&&(Ae(e.fillInput===!0?$.value(t):"",!0,!0),ne()),B.value!==null&&B.value.focus(),(o.value.length===0||Ie(N.value(o.value[0]),u)!==!0)&&r("update:modelValue",e.emitValue===!0?u:t);return}if((g!==!0||I.value===!0)&&a.focus(),Ge(),o.value.length===0){const k=e.emitValue===!0?u:t;r("add",{index:0,value:k}),r("update:modelValue",e.multiple===!0?[k]:k);return}const d=e.modelValue.slice(),q=Fe.value.findIndex(k=>Ie(k,u));if(q>-1)r("remove",{index:q,value:d.splice(q,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const k=e.emitValue===!0?u:t;r("add",{index:d.length,value:k}),d.push(k)}r("update:modelValue",d)}function ve(t){if(x.platform.is.desktop!==!0)return;const n=t>-1&&t<K.value?t:-1;V.value!==n&&(V.value=n)}function Ee(t=1,n){if(l.value===!0){let u=V.value;do u=vt(u+t,-1,K.value-1);while(u!==-1&&u!==V.value&&fe.value(e.options[u])===!0);V.value!==u&&(ve(u),ke(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Le(u>=0?$.value(e.options[u]):y))}}function Ct(t,n){const u=d=>Ie(N.value(d),t);return e.options.find(u)||n.find(u)||t}function Ne(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:d=>d!==null&&typeof d=="object"&&u in d?d[u]:d}function $e(t){const n=N.value(t);return Fe.value.find(u=>Ie(u,n))!==void 0}function Ge(t){e.useInput===!0&&B.value!==null&&(t===void 0||B.value===t.target&&t.target.value===R.value)&&B.value.select()}function et(t){tl(t,27)===!0&&l.value===!0&&(be(t),ne(),he()),r("keyup",t)}function tt(t){const{value:n}=t.target;if(t.keyCode!==void 0){et(t);return}if(t.target.value="",C!==null&&(clearTimeout(C),C=null),he(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),d=k=>{const z=e.options.find(T=>k.value(T).toLocaleLowerCase()===u);return z===void 0?!1:(o.value.indexOf(z)===-1?ue(z):ne(),!0)},q=k=>{d(N)!==!0&&(d($)===!0||k===!0||me(n,!0,()=>q(!0)))};q()}else a.clearValue(t)}function lt(t){r("keypress",t)}function ut(t){if(r("keydown",t),ll(t)===!0)return;const n=b.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(V.value>-1||n===!0);if(t.keyCode===27){Ke(t);return}if(t.keyCode===9&&u===!1){Se();return}if(t.target===void 0||t.target.id!==a.targetUid.value||a.editable.value!==!0)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&l.value===!1){oe(t),ge();return}if(t.keyCode===8&&e.hideSelected!==!0&&b.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?De(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof b.value!="string"||b.value.length===0)&&(oe(t),V.value=-1,Ee(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&xe.value!==void 0&&(oe(t),V.value=Math.max(-1,Math.min(K.value,V.value+(t.keyCode===33?-1:1)*xe.value.view)),Ee(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(oe(t),Ee(t.keyCode===38?-1:1,e.multiple));const d=K.value;if((P===void 0||X<Date.now())&&(P=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length!==0)){l.value!==!0&&ge(t);const q=t.key.toLocaleLowerCase(),k=P.length===1&&P[0]===q;X=Date.now()+1500,k===!1&&(oe(t),P+=q);const z=new RegExp("^"+P.split("").map(Qe=>Al.indexOf(Qe)>-1?"\\"+Qe:Qe).join(".*"),"i");let T=V.value;if(k===!0||T<0||z.test($.value(e.options[T]))!==!0)do T=vt(T+1,-1,d-1);while(T!==V.value&&(fe.value(e.options[T])===!0||z.test($.value(e.options[T]))!==!0));V.value!==T&&G(()=>{ve(T),ke(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&Le($.value(e.options[T]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&oe(t),V.value>-1&&V.value<d){ue(e.options[V.value]);return}if(n===!0){const q=(k,z)=>{if(z){if(St(z)!==!0)return}else z=e.newValueMode;if(Ae("",e.multiple!==!0,!0),k==null)return;(z==="toggle"?ue:Ze)(k,z==="add-unique"),e.multiple!==!0&&(B.value!==null&&B.value.focus(),ne())};if(e.onNewValue!==void 0?r("newValue",b.value,q):q(b.value),e.multiple!==!0)return}l.value===!0?Se():a.innerLoading.value!==!0&&ge()}}function nt(){return g===!0?ie.value:Y.value!==null&&Y.value.contentEl!==null?Y.value.contentEl:void 0}function xt(){return nt()}function kt(){return e.hideSelected===!0?[]:i["selected-item"]!==void 0?le.value.map(t=>i["selected-item"](t)).slice():i.selected!==void 0?[].concat(i.selected()):e.useChips===!0?le.value.map((t,n)=>w(pl,{key:"option-"+n,removable:a.editable.value===!0&&fe.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:qe.value,onRemove(){t.removeAtIndex(n)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[w("span",{[ce.value===!0?"innerHTML":"textContent"]:S.value})]}function ot(){if(v.value===!0)return i["no-option"]!==void 0?i["no-option"]({inputValue:b.value}):void 0;const t=i.option!==void 0?i.option:u=>w(ml,{key:u.index,...u.itemProps},()=>w(fl,()=>w(vl,()=>w("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=J("div",de.value.map(t));return i["before-options"]!==void 0&&(n=i["before-options"]().concat(n)),nl(i["after-options"],n)}function qt(t,n){const u=n===!0?{...U.value,...a.splitAttrs.attributes.value}:void 0,d={ref:n===!0?B:void 0,key:"i_t",class:L.value,style:e.inputStyle,value:b.value!==void 0?b.value:"",type:"search",...u,id:n===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Vt.value};return t!==!0&&g===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),w("input",d)}function at(t){C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Le(t.target.value||""),H=!0,y=b.value,a.focused.value!==!0&&(g!==!0||I.value===!0)&&a.focus(),e.onFilter!==void 0&&(C=setTimeout(()=>{C=null,me(b.value)},e.inputDebounce)))}function Le(t){b.value!==t&&(b.value=t,r("inputValue",t))}function Ae(t,n,u){H=u!==!0,e.useInput===!0&&(Le(t),(n===!0||u!==!0)&&(y=t),n!==!0&&me(t))}function me(t,n,u){if(e.onFilter===void 0||n!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?r("filterAbort"):(a.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&H!==!0&&t===$.value(o.value[0])&&(t="");const d=setTimeout(()=>{l.value===!0&&(l.value=!1)},10);O!==null&&clearTimeout(O),O=d,r("filter",t,(q,k)=>{(n===!0||a.focused.value===!0)&&O===d&&(clearTimeout(O),typeof q=="function"&&q(),c.value=!1,G(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(n===!0?l.value===!0&&ne():l.value===!0?je(!0):l.value=!0),typeof k=="function"&&G(()=>{k(h)}),typeof u=="function"&&G(()=>{u(h)})}))},()=>{a.focused.value===!0&&O===d&&(clearTimeout(O),a.innerLoading.value=!1,c.value=!1),l.value===!0&&(l.value=!1)})}function _t(){return w(Sl,{ref:Y,class:p.value,style:e.popupContentStyle,modelValue:l.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:_e.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Me.value,onScrollPassive:Be,onBeforeShow:rt,onBeforeHide:At,onShow:It},ot)}function At(t){st(t),Se()}function It(){se()}function zt(t){be(t),B.value!==null&&B.value.focus(),I.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Bt(t){be(t),G(()=>{I.value=!1})}function Mt(){const t=[w(wl,{class:`col-auto ${a.fieldClass.value}`,...s.value,for:a.targetUid.value,dark:f.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:b.value.length!==0,...a.splitAttrs.listeners.value,onFocus:zt,onBlur:Bt},{...i,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return l.value===!0&&t.push(w("div",{ref:ie,class:p.value+" scroll",style:e.popupContentStyle,...Me.value,onClick:Ke,onScrollPassive:Be},ot())),w(ul,{ref:Ve,modelValue:M.value,position:e.useInput===!0?"top":void 0,transitionShow:j,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:rt,onBeforeHide:Ot,onHide:Ft,onShow:Et},()=>w("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(I.value===!0?" q-select__dialog--focused":"")},t))}function Ot(t){st(t),Ve.value!==null&&Ve.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function Ft(t){ne(),a.focused.value===!1&&r("blur",t),he()}function Et(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&B.value!==null&&B.value!==t&&B.value.focus(),se()}function Se(){M.value!==!0&&(V.value=-1,l.value===!0&&(l.value=!1),a.focused.value===!1&&(O!==null&&(clearTimeout(O),O=null),a.innerLoading.value===!0&&(r("filterAbort"),a.innerLoading.value=!1,c.value=!1)))}function ge(t){a.editable.value===!0&&(g===!0?(a.onControlFocusin(t),M.value=!0,G(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?me(b.value):(v.value!==!0||i["no-option"]!==void 0)&&(l.value=!0))}function ne(){M.value=!1,Se()}function he(){e.useInput===!0&&Ae(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&$.value(o.value[0])||"",!0,!0)}function je(t){let n=-1;if(t===!0){if(o.value.length!==0){const u=N.value(o.value[0]);n=e.options.findIndex(d=>Ie(N.value(d),u))}te(n)}ve(n)}function Lt(t,n){l.value===!0&&a.innerLoading.value===!1&&(te(-1,!0),G(()=>{l.value===!0&&a.innerLoading.value===!1&&(t>n?te():je(!0))}))}function it(){M.value===!1&&Y.value!==null&&Y.value.updatePosition()}function rt(t){t!==void 0&&be(t),r("popupShow",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function st(t){t!==void 0&&be(t),r("popupHide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function ct(){g=x.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?i["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),j=x.platform.is.ios===!0&&g===!0&&e.useInput===!0?"fade":e.transitionShow}return Zt(ct),Gt(it),ct(),yt(()=>{C!==null&&clearTimeout(C)}),Object.assign(h,{showPopup:ge,hidePopup:ne,removeAtIndex:De,add:Ze,toggleOption:ue,getOptionIndex:()=>V.value,setOptionIndex:ve,moveOptionSelection:Ee,filter:me,updateMenuPosition:it,updateInputValue:Ae,isOptionSelected:$e,getEmittingOptionValue:Je,isOptionDisabled:(...t)=>fe.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(a,{innerValue:o,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:F,targetRef:B,hasValue:_,showPopup:ge,floatingLabel:m(()=>e.hideSelected!==!0&&_.value===!0||typeof b.value=="number"||b.value.length!==0||dt(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(M.value===!0||v.value!==!0||i["no-option"]!==void 0))return g===!0?Mt():_t();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{he(),Se()})},onClick(t){if(Ke(t),g!==!0&&l.value===!0){Se(),B.value!==null&&B.value.focus();return}ge(t)}},getControl:t=>{const n=kt(),u=t===!0||M.value!==!0||g!==!0;if(e.useInput===!0)n.push(qt(t,u));else if(a.editable.value===!0){const q=u===!0?U.value:void 0;n.push(w("input",{ref:u===!0?B:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?a.targetUid.value:void 0,value:S.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:ut,onKeyup:et,onKeypress:lt})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:tt}))}if(pe.value!==void 0&&e.disable!==!0&&Fe.value.length!==0){const q=Fe.value.map(k=>w("option",{value:k,selected:!0}));n.push(w("select",{class:"hidden",name:pe.value,multiple:e.multiple},q))}const d=e.useInput===!0||u!==!0?void 0:a.splitAttrs.attributes.value;return w("div",{class:"q-field__native row items-center",...d,...a.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[w(He,{class:"q-select__dropdown-icon"+(l.value===!0?" rotate-180":""),name:Oe.value})]:null}),ht(a)}});const Bl=e=>(sl("data-v-2beb1c5e"),e=e(),cl(),e),Ml={class:"row"},Ol={class:"col-xs-12 col-sm-6"},Fl={class:"left bg-accent"},El={class:"col-xs-12 col-sm-6"},Ll=Bl(()=>ae("div",{class:"text-xl text-secondary text-weight-bolder q-mb-lg"},[ae("span",{class:"text-primary"},"Lets"),dl(" Start Booking")],-1)),Rl={class:"flex q-gutter-sm q-mt-md"},Hl=Object.assign({layout:gl},{__name:"Booking",props:["plans"],setup(e){const i=ol({name:"",address:"",plan:null,mobile:"",email:"",note:""}),r=h=>{};return(h,x)=>(al(),il(bl,null,{default:ft(()=>[ae("div",Ml,[ae("div",Ol,[ae("div",Fl,[Z(Rt)])]),ae("div",El,[Z(hl,{onSubmit:r,class:"column q-gutter-sm right"},{default:ft(()=>[Ll,Z(Re,{modelValue:W(i).name,"onUpdate:modelValue":x[0]||(x[0]=l=>W(i).name=l),outlined:"","bg-color":"grey-4",label:"Your Name","no-error-icon":"",rules:[l=>!!l||"Name is required"]},null,8,["modelValue","rules"]),Z(zl,{modelValue:W(i).plan,"onUpdate:modelValue":x[1]||(x[1]=l=>W(i).plan=l),options:e.plans,outlined:"","bg-color":"grey-4",label:"Select Your Plan","no-error-icon":"",rules:[l=>!!l||"Plan is required"]},null,8,["modelValue","options","rules"]),Z(Re,{modelValue:W(i).mobile,"onUpdate:modelValue":x[2]||(x[2]=l=>W(i).mobile=l),outlined:"","bg-color":"grey-4",label:"Mobile","no-error-icon":"",rules:[l=>!!l||"Mobile is required"]},null,8,["modelValue","rules"]),Z(Re,{modelValue:W(i).email,"onUpdate:modelValue":x[3]||(x[3]=l=>W(i).email=l),outlined:"","bg-color":"grey-4",label:"Email","no-error-icon":"",rules:[l=>!!l||"Email is required"]},null,8,["modelValue","rules"]),Z(Re,{modelValue:W(i).note,"onUpdate:modelValue":x[4]||(x[4]=l=>W(i).note=l),type:"textarea",outlined:"","bg-color":"grey-4",label:"Anything you like to tell us","no-error-icon":""},null,8,["modelValue"]),ae("div",Rl,[Z(rl,{type:"submit",class:"sized-btn",color:"primary",label:"Submit","no-caps":""})])]),_:1})])])]),_:1}))}}),Kl=yl(Hl,[["__scopeId","data-v-2beb1c5e"]]);export{Kl as default};

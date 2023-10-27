import{B as w,H as c,W as g,Y as H,a5 as Y,ah as Z,G as L,a6 as G,ai as X,z as p,ad as J,Z as ee,aO as te,aL as N,aM as P,aS as D,aI as M,aT as ne,N as Q,a3 as T,R as B,A,V as ie,aU as O,aV as le,aW as ae,aX as V,a8 as I,aY as E,r as C,aZ as oe,aj as re,a_ as se}from"./app-5090eb15.js";const ve=w({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:h}){const n=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>g("div",{class:n.value},H(h.default))}}),me=w({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:h}){const n=c(()=>parseInt(e.lines,10)),t=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),o=c(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>g("div",{style:o.value,class:t.value},H(h.default))}}),he=w({name:"QItem",props:{...Y,...Z,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:h,emit:n}){const{proxy:{$q:t}}=L(),o=G(e,t),{hasLink:r,linkAttrs:d,linkClass:b,linkTag:a,navigateOnClick:l}=X(),f=p(null),m=p(null),y=c(()=>e.clickable===!0||r.value===!0||e.tag==="label"),u=c(()=>e.disable!==!0&&y.value===!0),S=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?b.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),R=c(()=>e.insetLevel===void 0?null:{["padding"+(t.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function $(s){u.value===!0&&(m.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===f.value?m.value.focus():document.activeElement===m.value&&f.value.focus()),l(s))}function k(s){if(u.value===!0&&J(s,13)===!0){ee(s),s.qKeyEvent=!0;const i=new MouseEvent("click",s);i.qKeyEvent=!0,f.value.dispatchEvent(i)}n("keyup",s)}function x(){const s=te(h.default,[]);return u.value===!0&&s.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:m})),s}return()=>{const s={ref:f,class:S.value,style:R.value,role:"listitem",onClick:$,onKeyup:k};return u.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,d.value)):y.value===!0&&(s["aria-disabled"]="true"),g(a.value,s,x())}}}),ge=w({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:n}}=L(),t=N(D,P);if(t===P)return console.error("QPageContainer needs to be child of QLayout"),P;M(ne,!0);const o=c(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>g("div",{class:"q-page-container",style:o.value},H(h.default))}}),{passive:j}=O,ue=["both","horizontal","vertical"],ce=w({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ue.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:h}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,r;Q(()=>e.scrollTarget,()=>{a(),b()});function d(){t!==null&&t();const m=Math.max(0,le(o)),y=ae(o),u={top:m-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const S=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";n.position={top:m,left:y},n.directionChanged=n.direction!==S,n.delta=u,n.directionChanged===!0&&(n.direction=S,n.inflectionPoint=n.position),h("scroll",{...n})}function b(){o=ie(r,e.scrollTarget),o.addEventListener("scroll",l,j),l(!0)}function a(){o!==void 0&&(o.removeEventListener("scroll",l,j),o=void 0)}function l(m){if(m===!0||e.debounce===0||e.debounce==="0")d();else if(t===null){const[y,u]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];t=()=>{u(y),t=null}}}const{proxy:f}=L();return Q(()=>f.$q.lang.rtl,d),T(()=>{r=f.$el.parentNode,b()}),B(()=>{t!==null&&t(),a()}),Object.assign(f,{trigger:l,getPosition:()=>n}),A}});function de(){const e=p(!V.value);return e.value===!1&&T(()=>{e.value=!0}),e}const U=typeof ResizeObserver<"u",F=U===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},K=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:h}){let n=null,t,o={width:-1,height:-1};function r(a){a===!0||e.debounce===0||e.debounce==="0"?d():n===null&&(n=setTimeout(d,e.debounce))}function d(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:a,offsetHeight:l}=t;(a!==o.width||l!==o.height)&&(o={width:a,height:l},h("resize",o))}}const{proxy:b}=L();if(U===!0){let a;const l=f=>{t=b.$el.parentNode,t?(a=new ResizeObserver(r),a.observe(t),d()):f!==!0&&I(()=>{l(!0)})};return T(()=>{l()}),B(()=>{n!==null&&clearTimeout(n),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),A}else{let f=function(){n!==null&&(clearTimeout(n),n=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",r,O.passive),l=void 0)},m=function(){f(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",r,O.passive),d())};const a=de();let l;return T(()=>{I(()=>{t=b.$el,t&&m()})}),B(f),b.trigger=r,()=>{if(a.value===!0)return g("object",{style:F.style,tabindex:-1,type:"text/html",data:F.url,"aria-hidden":"true",onLoad:m})}}}}),be=w({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:n}){const{proxy:{$q:t}}=L(),o=p(null),r=p(t.screen.height),d=p(e.container===!0?0:t.screen.width),b=p({position:0,direction:"down",inflectionPoint:0}),a=p(0),l=p(V.value===!0?0:E()),f=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=c(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=c(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),u=c(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function S(i){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};b.value=v,e.onScroll!==void 0&&n("scroll",v)}}function R(i){const{height:v,width:q}=i;let z=!1;r.value!==v&&(z=!0,r.value=v,e.onScrollHeight!==void 0&&n("scrollHeight",v),k()),d.value!==q&&(z=!0,d.value=q),z===!0&&e.onResize!==void 0&&n("resize",i)}function $({height:i}){a.value!==i&&(a.value=i,k())}function k(){if(e.container===!0){const i=r.value>a.value?E():0;l.value!==i&&(l.value=i)}}let x=null;const s={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:o,height:r,containerHeight:a,scrollbarWidth:l,totalWidth:c(()=>d.value+l.value),rows:c(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:b,animate(){x!==null?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{x=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,v,q){s[i][v]=q}};if(M(D,s),E()>0){let q=function(){i=null,v.classList.remove("hide-scrollbar")},z=function(){if(i===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(q,300)},_=function(W){i!==null&&W==="remove"&&(clearTimeout(i),q()),window[`${W}EventListener`]("resize",z)},i=null;const v=document.body;Q(()=>e.container!==!0?"add":"remove",_),e.container!==!0&&_("add"),oe(()=>{_("remove")})}return()=>{const i=re(h.default,[g(ce,{onScroll:S}),g(K,{onResize:R})]),v=g("div",{class:f.value,style:m.value,ref:e.container===!0?void 0:o,tabindex:-1},i);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:o},[g(K,{onResize:$}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:u.value},[v])])]):v}}});function ye(){return N(se)}export{be as Q,he as a,ve as b,me as c,ge as d,K as e,ye as u};

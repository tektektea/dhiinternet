import{a as H,b as w,c as I}from"./use-quasar-e6f9093e.js";import{s as S,aB as B,aC as f,aD as T,B as m,aE as C,N as i,f as L,S as x,a0 as M,z as E,a1 as $,ay as D,o as a,c as r,d as n,w as o,u as F,F as u,ac as N,e,g as _,h as k,Q as j,l as h,a5 as z,b as O,p as P,k as U}from"./app-59a6bb85.js";import{Q as V}from"./QImg-a14f922d.js";import{Q as A}from"./QExpansionItem-0bf08a83.js";import{B as R,i as Y}from"./BackendLayout-191bf443.js";import{Q as K}from"./QPage-f78d9e75.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";const Q=S({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:t=>["left","right"].includes(t)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(t,{slots:c}){const d=B(T,f);if(d===f)return console.error("QTimelineEntry needs to be child of QTimeline"),f;const s=m(()=>`q-timeline__entry q-timeline__entry--${t.side}`+(t.icon!==void 0||t.avatar!==void 0?" q-timeline__entry--icon":"")),v=m(()=>`q-timeline__dot text-${t.color||d.color}`),y=m(()=>d.layout==="comfortable"&&d.side==="left");return()=>{const g=C(c.default,[]);if(t.body!==void 0&&g.unshift(t.body),t.heading===!0){const q=[i("div"),i("div"),i(t.tag,{class:"q-timeline__heading-title"},g)];return i("div",{class:"q-timeline__heading"},y.value===!0?q.reverse():q)}let b;t.icon!==void 0?b=[i(L,{class:"row items-center justify-center",name:t.icon})]:t.avatar!==void 0&&(b=[i("img",{class:"q-timeline__dot-img",src:t.avatar})]);const p=[i("div",{class:"q-timeline__subtitle"},[i("span",{},x(c.subtitle,[t.subtitle]))]),i("div",{class:v.value},b),i("div",{class:"q-timeline__content"},[i("h6",{class:"q-timeline__title"},x(c.title,[t.title]))].concat(g))];return i("li",{class:s.value},y.value===!0?p.reverse():p)}}}),G=S({name:"QTimeline",props:{...M,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:t=>["left","right"].includes(t)},layout:{type:String,default:"dense",validator:t=>["dense","comfortable","loose"].includes(t)}},setup(t,{slots:c}){const d=E(),s=$(t,d.proxy.$q);D(T,t);const v=m(()=>`q-timeline q-timeline--${t.layout} q-timeline--${t.layout}--${t.side}`+(s.value===!0?" q-timeline--dark":""));return()=>i("ul",{class:v.value},x(c.default))}});const l=t=>(P("data-v-4e2884d7"),t=t(),U(),t),J=l(()=>e("title",null,"Home",-1)),W=l(()=>e("meta",{name:"description",content:"Mizoram chhunga Internet rintlak leh chak tha duh tan biak theih reng kan ni"},null,-1)),X={class:"row"},ee={class:"col-xs-12 col-sm-6"},te={class:"flex justify-end"},le=l(()=>e("br",null,null,-1)),se=l(()=>e("br",null,null,-1)),ne=l(()=>e("br",null,null,-1)),ie=l(()=>e("br",null,null,-1)),oe=l(()=>e("br",null,null,-1)),ae=l(()=>e("h5",{class:"hero-title text-white"},[e("span",{class:"text-primary text-weight-bolder"},"Connecting"),_(" You to Tomorrow, Today!")],-1)),re=l(()=>e("div",{class:"text-accent text-lg"},"Internet Chak tha leh rintlak i hmang duh em?",-1)),ce=l(()=>e("div",{class:"text-md text-weight-bolder text-weight-medium text-white"},"Call Us : +919862614297",-1)),de=l(()=>e("br",null,null,-1)),ue={class:"flex q-gutter-sm"},_e=l(()=>e("div",{class:"col-xs-6"},[e("div",{class:"relative-position"},[e("video",{width:"600",loop:"",autoplay:""},[e("source",{src:"https://github.githubassets.com/images/modules/site/home/globe-500.h264.mp4",type:"video/mp4"}),e("p",null,[_(" Your browser doesn't support HTML video. Here is a "),e("a",{href:"https://github.githubassets.com/images/modules/site/home/globe-500.h264.mp4"},"link to the video"),_(" instead. ")])])])],-1)),he=l(()=>e("br",null,null,-1)),me=l(()=>e("br",null,null,-1)),ve={class:"container"},ge={class:"bg-secondary rounded-borders q-pa-md"},be=l(()=>e("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)),fe=l(()=>e("br",null,null,-1)),xe=l(()=>e("br",null,null,-1)),ye=["innerHTML"],pe=l(()=>e("br",null,null,-1)),qe=l(()=>e("br",null,null,-1)),we=l(()=>e("div",{class:"full-width text-center text-page-header q-my-lg text-white text-bold"}," Our Plans ",-1)),ke=l(()=>e("br",null,null,-1)),Qe={class:"row q-col-gutter-md"},Se=["innerHTML"],Te=l(()=>e("div",{class:"full-width text-center text-page-header q-my-lg text-white text-bold"}," Testimonial ",-1)),Le={class:"row q-col-gutter-md"},He={class:"col-xs-6 col-sm-3"},Ie={class:"column items-center"},Be=["innerHTML"],Ce=l(()=>e("br",null,null,-1)),Me=l(()=>e("br",null,null,-1)),Ee=l(()=>e("br",null,null,-1)),$e=l(()=>e("br",null,null,-1)),De=l(()=>e("div",{class:"full-width text-center text-page-header q-my-lg text-white text-bold"}," Frequently Asked Question ",-1)),Fe=["innerHTML"],Ne=l(()=>e("br",null,null,-1)),je=l(()=>e("br",null,null,-1)),ze=Object.assign({layout:R},{__name:"Home",props:["sections","plans","questions","testimonial"],setup(t){return(c,d)=>(a(),r(u,null,[n(F(N),null,{default:o(()=>[J,W]),_:1}),n(K,{class:"bg-dark"},{default:o(()=>[e("div",X,[e("div",ee,[e("div",te,[e("div",null,[le,se,ne,ie,oe,n(H,{class:"watch-btn"},{default:o(()=>[n(w,null,{default:o(()=>[n(I,null,{default:o(()=>[_("Click here to watch our stories")]),_:1})]),_:1}),n(w,{side:""},{default:o(()=>[n(L,{name:"chevron_right"})]),_:1})]),_:1}),ae,re,ce,de,e("div",ue,[n(k,{href:c.route("page.booking"),style:{width:"230px"},class:"text-white",size:"xl",color:"primary",label:"Book Now","no-caps":""},null,8,["href"]),n(j,{dark:"",vertical:""}),n(k,{class:"text-white",size:"xl",icon:"chat",outline:"",color:"secondary",label:"Let's Chat","no-caps":""})])])])]),_e]),he,me,e("div",ve,[e("div",ge,[n(G,{dark:"",color:"white"},{default:o(()=>[n(Q,{class:"text-bold",heading:""},{default:o(()=>[_(" Our Stories ")]),_:1}),n(Q,{title:"Rising Day",subtitle:"February 22, 2020"},{default:o(()=>[be]),_:1})]),_:1})]),fe,xe,(a(!0),r(u,null,h(t.sections,s=>(a(),r("section",{key:s.id},[e("div",{innerHTML:s==null?void 0:s.content},null,8,ye)]))),128)),pe,qe,we,ke,e("section",Qe,[(a(!0),r(u,null,h(t.plans,s=>(a(),r("div",{key:s.id,class:"col-xs-12 col-sm-3"},[e("div",{innerHTML:s==null?void 0:s.card},null,8,Se)]))),128))]),Te,e("div",Le,[(a(!0),r(u,null,h(t.testimonial,s=>(a(),r("div",He,[e("div",Ie,[n(z,null,{default:o(()=>[n(V,{src:s.url},null,8,["src"])]),_:2},1024),e("div",{innerHTML:s.content},null,8,Be)])]))),256))]),Ce,Me,Ee,$e,De,n(Y,{style:{"border-radius":"20px"},class:"shadow-up-8 rounded-borders"},{default:o(()=>[(a(!0),r(u,null,h(t.questions,s=>(a(),O(A,{class:"overflow-hidden text-weight-medium text-md text-accent",icon:"o_help",label:s.question},{default:o(()=>[e("div",{class:"q-pa-md",innerHTML:s.answer},null,8,Fe)]),_:2},1032,["label"]))),256))]),_:1}),Ne,je])]),_:1})],64))}}),Ke=Z(ze,[["__scopeId","data-v-4e2884d7"]]);export{Ke as default};

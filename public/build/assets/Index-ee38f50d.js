import{Q as m,a as b}from"./QBreadcrumbs-f271b5f7.js";import{o as r,b as _,w as a,d as e,e as s,i as d,c as g,l as v,F as h,y as k,p as y,k as Q,O as I}from"./app-f817602d.js";import{Q as B}from"./QImg-7423ca89.js";import{u as w,a as C,b as c}from"./use-quasar-4a0c4390.js";import{Q as $}from"./QPage-7a8f7320.js";import{B as x}from"./BackendLayout-c4b42bf7.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const u=l=>(y("data-v-91c0eb70"),l=l(),Q(),l),S=u(()=>s("br",null,null,-1)),T={class:"flex justify-between items-center q-pa-md bg-white"},L=u(()=>s("div",null,[s("div",{class:"text-lg text-bold"},"Testimonial")],-1)),N=u(()=>s("br",null,null,-1)),O={class:"column q-pa-md bg-white"},F=["innerHTML"],j={class:"q-mt-sm flex q-gutter-sm"},z=Object.assign({layout:x},{__name:"Index",props:["list"],setup(l){const i=w(),p=t=>{i.dialog({title:"Confirmation",message:"Are you sure to delete?",ok:"Yes",cancel:"No"}).onOk(()=>{I.delete(route("testimony.destroy",t.id),{onStart:n=>i.loading.show(),onFinish:n=>i.loading.hide()})})};return(t,n)=>(r(),_($,{class:"container",padding:""},{default:a(()=>[e(b,null,{default:a(()=>[e(m,{onClick:n[0]||(n[0]=o=>t.$inertia.get(t.route("dashboard"))),label:"Dashboard"}),e(m,{label:"Testimonials"})]),_:1}),S,s("div",T,[L,e(d,{onClick:n[1]||(n[1]=o=>t.$inertia.get(t.route("testimony.create"))),label:"New Testimony",color:"primary"})]),N,s("div",O,[(r(!0),g(h,null,v(l.list,o=>(r(),_(C,{key:o.id},{default:a(()=>[e(c,{avatar:""},{default:a(()=>[e(k,null,{default:a(()=>[e(B,{src:o.url},null,8,["src"])]),_:2},1024)]),_:2},1024),e(c,null,{default:a(()=>[s("div",{innerHTML:o.content},null,8,F)]),_:2},1024),e(c,{side:""},{default:a(()=>[s("div",j,[e(d,{size:"sm",onClick:f=>t.$inertia.get(t.route("testimony.edit",o.id)),icon:"edit",color:"accent",outline:""},null,8,["onClick"]),e(d,{size:"sm",onClick:f=>p(o),icon:"delete",color:"negative",outline:""},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))])]),_:1}))}}),Y=q(z,[["__scopeId","data-v-91c0eb70"]]);export{Y as default};
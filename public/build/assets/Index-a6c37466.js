import{Q as c,a as h}from"./QBreadcrumbs-f99b6208.js";import{o as l,b as u,w as m,d as a,e,h as d,c as p,n as v,F as f,t as k,Q as y,i as x,p as w,k as S,O as B}from"./app-d2839832.js";import{Q as C}from"./QPage-772cfa0e.js";import{B as Q}from"./BackendLayout-00ef3c1c.js";import{u as q}from"./use-quasar-6c77a85f.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const r=o=>(w("data-v-dbb34524"),o=o(),S(),o),$=r(()=>e("br",null,null,-1)),L={class:"flex justify-between items-center q-pa-md bg-white"},N=r(()=>e("div",null,[e("div",{class:"text-lg text-bold"},"List of Sections"),e("div",{class:"text-caption text-grey-7"},"(Section is a component which is to be rendered in a landing Page)")],-1)),D=r(()=>e("br",null,null,-1)),O={class:"column q-pa-md bg-white"},j={class:"column q-mt-sm section-card"},E={class:"text-lg text-weight-medium text-grey-7"},F=["innerHTML"],V={class:"flex justify-end q-gutter-md q-mt-sm"},z=Object.assign({layout:Q},{__name:"Index",props:["list"],setup(o){const i=q(),_=t=>{i.dialog({title:"Confirmation",message:"Are you sure to delete?",ok:"Yes",cancel:"No"}).onOk(()=>{B.delete(route("section.destroy",t.id),{onStart:n=>i.loading.show(),onFinish:n=>i.loading.hide()})})};return(t,n)=>(l(),u(C,{class:"container",padding:""},{default:m(()=>[a(h,null,{default:m(()=>[a(c,{onClick:n[0]||(n[0]=s=>t.$inertia.get(t.route("dashboard"))),label:"Dashboard"}),a(c,{label:"Sections"})]),_:1}),$,e("div",L,[N,a(d,{onClick:n[1]||(n[1]=s=>t.$inertia.get(t.route("section.create"))),color:"primary",label:"New Section"})]),D,e("div",O,[(l(!0),p(f,null,v(o.list,(s,b)=>(l(),p("div",null,[e("div",j,[e("div",E,k(s==null?void 0:s.name),1),e("section",null,[e("div",{innerHTML:s.content},null,8,F)])]),e("div",V,[a(d,{class:"sized-btn",onClick:g=>t.$inertia.get(t.route("section.edit",s.id)),outline:"",color:"secondary",label:"Edit"},null,8,["onClick"]),a(d,{class:"sized-btn",onClick:g=>_(s),color:"negative",outline:"",label:"Delete"},null,8,["onClick"])]),b!==o.list.length-1?(l(),u(y,{key:0,class:"q-mt-sm"})):x("",!0)]))),256))])]),_:1}))}}),G=I(z,[["__scopeId","data-v-dbb34524"]]);export{G as default};

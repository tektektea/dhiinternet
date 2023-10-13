import{Q as a,a as y}from"./QBreadcrumbs-10948a52.js";import{T as Q,o as z,b as h,w as d,d as o,j as q,u as s,e as l,h as f}from"./app-59a6bb85.js";import{Q as w}from"./QEditor-82385a8f.js";import{Q as S}from"./QForm-a2d26867.js";import{Q as v}from"./QPage-f78d9e75.js";import{B}from"./BackendLayout-191bf443.js";import{u as V}from"./use-quasar-e6f9093e.js";import"./_plugin-vue_export-helper-c27b6911.js";const $=l("br",null,null,-1),k=l("div",{class:"flex justify-between items-center bg-white q-pa-md"},[l("div",{class:"text-lg text-dark text-weight-medium"},"New Testimony")],-1),C=l("br",null,null,-1),L={class:"flex q-gutter-sm"},R=Object.assign({layout:B},{__name:"Create",setup(j){const u=V(),r=Q({url:"",content:""}),g=t=>{r.post(route("testimony.store"),{onStart:e=>u.loading.show(),onFinish:e=>u.loading.hide()})};return(t,e)=>(z(),h(v,{class:"container",padding:""},{default:d(()=>[o(y,{gutter:"md"},{default:d(()=>[o(a,{label:"Dashboard"}),o(a,{onClick:e[0]||(e[0]=n=>t.$inertia.get(t.route("testimony.index"))),label:"Testimony"}),o(a,{onClick:e[1]||(e[1]=n=>t.$inertia.get(t.route("testimony.create"))),label:"New Testimony"})]),_:1}),$,k,C,o(S,{onSubmit:g,class:"column bg-white q-pa-md"},{default:d(()=>{var n,m,b,p,c;return[o(q,{modelValue:s(r).url,"onUpdate:modelValue":e[2]||(e[2]=i=>s(r).url=i),outlined:"",label:"URL",error:!!((m=(n=s(r))==null?void 0:n.errors)!=null&&m.url),"error-message":(c=(p=(b=s(r))==null?void 0:b.errors)==null?void 0:p.url)==null?void 0:c.toString(),rules:[i=>!!i||"URL is required"]},null,8,["modelValue","error","error-message","rules"]),o(w,{modelValue:s(r).content,"onUpdate:modelValue":e[3]||(e[3]=i=>s(r).content=i),toolbar:[[{label:t.$q.lang.editor.align,icon:t.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","underline"],[{label:t.$q.lang.editor.fontSize,icon:t.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]}],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],"min-height":"5rem"},null,8,["modelValue","toolbar"]),l("div",L,[o(f,{type:"submit",color:"primary",class:"sized-btn",label:"Save"}),o(f,{type:"reset",color:"negative",outline:"",class:"sized-btn",label:"Cancel"})])]}),_:1})]),_:1}))}});export{R as default};
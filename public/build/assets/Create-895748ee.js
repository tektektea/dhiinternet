import{Q as l,a as y}from"./QBreadcrumbs-85e6b3fe.js";import{T as v,o as B,b as $,w as d,d as o,j as V,u as t,e as a,i as q}from"./app-82c08b15.js";import{Q as k}from"./QEditor-2c145041.js";import{Q as N}from"./QForm-60818f53.js";import{Q as h}from"./QPage-957b5119.js";import{B as C}from"./BackendLayout-ea942c1a.js";import{u as j}from"./use-quasar-d7314713.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=a("div",{class:"flex justify-between items-center"},[a("div",{class:"text-lg text-dark text-weight-medium"},"New Section")],-1),L=a("br",null,null,-1),O={class:"flex q-gutter-sm"},H=Object.assign({layout:C},{__name:"Create",setup(U){const u=j(),r=v({name:"",order:1,content:""}),w=s=>{r.post(route("section.store"),{onStart:e=>u.loading.show(),onFinish:e=>u.loading.hide()})};return(s,e)=>(B(),$(h,{class:"container bg-white",padding:""},{default:d(()=>[o(y,{gutter:"md"},{default:d(()=>[o(l,{label:"Dashboard"}),o(l,{onClick:e[0]||(e[0]=i=>s.$inertia.get(s.route("section.index"))),label:"Sections"}),o(l,{onClick:e[1]||(e[1]=i=>s.$inertia.get(s.route("section.create"))),label:"New Section"})]),_:1}),x,L,o(N,{onSubmit:w,class:"column q-gutter-sm"},{default:d(()=>{var i,m,b,c,p,g,f,S,Q,z;return[o(V,{modelValue:t(r).name,"onUpdate:modelValue":e[2]||(e[2]=n=>t(r).name=n),outlined:"",label:"Name",error:!!((m=(i=t(r))==null?void 0:i.errors)!=null&&m.name),"error-message":(p=(c=(b=t(r))==null?void 0:b.errors)==null?void 0:c.name)==null?void 0:p.toString(),rules:[n=>!!n||"Name is required"]},null,8,["modelValue","error","error-message","rules"]),o(V,{modelValue:t(r).order,"onUpdate:modelValue":e[3]||(e[3]=n=>t(r).order=n),type:"number",outlined:"",label:"Order",error:!!((f=(g=t(r))==null?void 0:g.errors)!=null&&f.order),"error-message":(z=(Q=(S=t(r))==null?void 0:S.errors)==null?void 0:Q.order)==null?void 0:z.toString(),rules:[n=>!!n||"Order is required"]},null,8,["modelValue","error","error-message","rules"]),o(k,{modelValue:t(r).content,"onUpdate:modelValue":e[4]||(e[4]=n=>t(r).content=n),toolbar:[[{label:s.$q.lang.editor.align,icon:s.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","underline"],[{label:s.$q.lang.editor.fontSize,icon:s.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]}],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],"min-height":"5rem"},null,8,["modelValue","toolbar"]),a("div",O,[o(q,{type:"submit",color:"primary",class:"sized-btn",label:"Save"}),o(q,{type:"reset",color:"negative",outline:"",class:"sized-btn",label:"Cancel"})])]}),_:1})]),_:1}))}});export{H as default};
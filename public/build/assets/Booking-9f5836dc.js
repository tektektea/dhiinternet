import{T as c,o as g,b,w as d,e as t,d as a,j as n,u as s,i as _,p as V,k as y,h as f}from"./app-f817602d.js";import{Q as x}from"./QSelect-3d40283a.js";import{Q as k}from"./QForm-b0eb26b8.js";import{Q as v}from"./QPage-7a8f7320.js";import{B}from"./BackendLayout-c4b42bf7.js";import{u as S}from"./use-quasar-4a0c4390.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import"./QChip-e3acc05b.js";const u=r=>(V("data-v-360b0908"),r=r(),y(),r),Q={class:"row"},w=u(()=>t("div",{class:"col-xs-12 col-sm-7"},[t("div",{class:"left bg-dark"},[t("img",{src:"assets/Icon/logo.svg"})])],-1)),I={class:"col-xs-12 col-sm-5 bg-grey-2"},U=u(()=>t("div",{class:"text-xl text-secondary text-weight-bolder q-mb-lg"},[t("span",{class:"text-primary"},"Lets"),f(" Start Booking")],-1)),N={class:"flex q-gutter-sm q-mt-md"},h=Object.assign({layout:B},{__name:"Booking",props:["plans"],setup(r){const i=S(),l=c({name:"",address:"",plan:null,mobile:"",email:"",note:""}),m=p=>{l.transform(o=>({plan_id:o.plan.value,...o})).post(route("booking.booking"),{preserveState:!1,onStart:o=>i.loading.show(),onFinish:o=>i.loading.hide()})};return(p,o)=>(g(),b(v,null,{default:d(()=>[t("div",Q,[w,t("div",I,[a(k,{onSubmit:m,class:"column q-gutter-sm right text-bold"},{default:d(()=>[U,a(n,{modelValue:s(l).name,"onUpdate:modelValue":o[0]||(o[0]=e=>s(l).name=e),outlined:"","bg-color":"grey-4",label:"Your Name","no-error-icon":"",rules:[e=>!!e||"Name is required"]},null,8,["modelValue","rules"]),a(x,{modelValue:s(l).plan,"onUpdate:modelValue":o[1]||(o[1]=e=>s(l).plan=e),options:r.plans,outlined:"","bg-color":"grey-4",label:"Select  Plan","no-error-icon":"",rules:[e=>!!e||"Plan is required"]},null,8,["modelValue","options","rules"]),a(n,{modelValue:s(l).mobile,"onUpdate:modelValue":o[2]||(o[2]=e=>s(l).mobile=e),outlined:"","bg-color":"grey-4",label:"Mobile",mask:"##########","no-error-icon":"",rules:[e=>!!e||"Mobile is required"]},null,8,["modelValue","rules"]),a(n,{modelValue:s(l).email,"onUpdate:modelValue":o[3]||(o[3]=e=>s(l).email=e),outlined:"","bg-color":"grey-4",label:"Email","no-error-icon":"",rules:[e=>!!e||"Email is required"]},null,8,["modelValue","rules"]),a(n,{modelValue:s(l).address,"onUpdate:modelValue":o[4]||(o[4]=e=>s(l).address=e),type:"textarea",outlined:"","bg-color":"grey-4",label:"Address","no-error-icon":""},null,8,["modelValue"]),a(n,{modelValue:s(l).note,"onUpdate:modelValue":o[5]||(o[5]=e=>s(l).note=e),type:"textarea",outlined:"","bg-color":"grey-4",label:"Anything you like to tell us","no-error-icon":""},null,8,["modelValue"]),t("div",N,[a(_,{size:"lg",type:"submit",class:"sized-btn",color:"primary",label:"Submit","no-caps":""})])]),_:1})])])]),_:1}))}}),T=q(h,[["__scopeId","data-v-360b0908"]]);export{T as default};

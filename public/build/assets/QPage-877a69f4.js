import{j as g,q as h,aw as r,ax as t,k as s,l as p,m as d,ay as y,aK as f}from"./app-072ff1a6.js";const C=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:i}){const{proxy:{$q:o}}=h(),e=r(y,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(r(f,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=s(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),u=s(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:u.value,style:c.value},d(i.default))}});export{C as Q};

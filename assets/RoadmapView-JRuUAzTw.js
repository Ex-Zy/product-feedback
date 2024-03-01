import{d as h,o as s,c as o,a as C,m as a,w as _,v as f,y as S,_ as T,F as g,e as $,n as V,W as z,h as p,X as L,s as D,k as E,Y as G,B as M,b as I,O as N,u as W,f as x,i as w,z as O,Z as B,$ as F}from"./index-W9H5CG0v.js";import{u as H}from"./suggestions-I0QUPwMh.js";import{S as P}from"./SuggestionsListItem--VwsNuX0.js";import{U,u as Q}from"./feedback-2AKgsBuE.js";import{_ as X}from"./IconArrowLeft.vue_vue_type_script_setup_true_lang-3SuANZb2.js";const Y={class:"suggestions-header"},Z={class:"content"},j={class:"content__title h1"},q=h({__name:"TheHeader",props:{title:{}},setup(c){const t=c;function i(){S.push("/create")}function l(){S.back()}return(k,u)=>(s(),o("header",Y,[C("div",Z,[a(U,{class:"content__btn",type:"light",text:"Go Back",onClick:l},{default:_(()=>[a(X,{color:"#fff"})]),_:1}),C("h1",j,f(t.title),1)]),a(U,{text:"+ Add Feedback",class:"suggestions-header__btn",onClick:i})]))}}),J=T(q,[["__scopeId","data-v-e8936a18"]]),K={class:"tabs-header"},ee=["onClick"],se=h({__name:"TabsHeader",props:{columns:{},active:{}},emits:["click"],setup(c,{emit:t}){const i=c,l=t;function k(u){l("click",u)}return(u,n)=>(s(),o("nav",K,[(s(!0),o(g,null,$(i.columns,r=>(s(),o("a",{key:r.id,href:"#",class:V(["tabs-header__link",{"is-active":r.id===i.active}]),onClick:z(d=>k(r.id),["prevent"])},f(r.name)+" ("+f(r.items.length)+")",11,ee))),128))]))}}),te=T(se,[["__scopeId","data-v-e32eb848"]]),ne={class:"kanban-column__header"},ae={class:"kanban-column__title h3"},oe={class:"kanban-column__description b1"},ie=h({__name:"ColumnHeader",props:{column:{}},setup(c){const t=c;return(i,l)=>(s(),o("header",ne,[a(p(L)),C("div",ae,f(t.column.name)+" ("+f(t.column.items.length)+") ",1),C("div",oe,f(t.column.description),1)]))}}),ce=T(ie,[["__scopeId","data-v-27a622e7"]]),re={class:"kanban-board"},le=h({__name:"TheRoadmap",setup(c){const{suggestions:t}=D(H()),{loadSuggestionsToStore:i}=H(),{upvoteFeedback:l}=Q();E(i);const{width:k}=G(),u=M(()=>k.value>768?"x":"y"),n=I({name:"Roadmap",columns:[{id:"planned",name:"Planned",description:"Ideas prioritized for research",color:"#F49F85",group:"items",items:[]},{id:"in-progress",name:"In-progress",description:"Currently being developed",color:"#AD1FEA",group:"items",items:[]},{id:"live",name:"Live",description:"Released features",color:"#62BCFA",group:"items",items:[]}]});N(r);function r(){function b(e){return t.value.filter(y=>y.status===e)}function m(){return n.columns=n.columns.map(e=>({...e,items:b(e.id)}))}n.columns=m()}const d=I({enable:W("(max-width: 767px)"),activeTab:n.columns[1].id});function R(b){return d.enable?b.id===d.activeTab:!0}return(b,m)=>(s(),o("div",re,[a(J,{title:n.name},null,8,["title"]),d.enable?(s(),x(te,{key:0,columns:n.columns,active:d.activeTab,onClick:m[0]||(m[0]=e=>d.activeTab=e)},null,8,["columns","active"])):w("",!0),a(p(B),{list:n.columns,"onUpdate:list":m[1]||(m[1]=e=>n.columns=e),axis:u.value,"lock-axis":u.value,class:"column-container","use-drag-handle":"",useWindowAsScrollContainer:""},{default:_(()=>[a(O,{name:"list"},{default:_(()=>[(s(!0),o(g,null,$(n.columns,(e,y)=>(s(),o(g,{key:e.id},[R(e)?(s(),x(p(F),{key:0,index:y,class:"kanban-column"},{default:_(()=>[a(ce,{column:e},null,8,["column"]),a(p(B),{list:e.items,"onUpdate:list":v=>e.items=v,axis:"y",group:e.group,class:"kanban-list","helper-class":"kanban-helper"},{default:_(()=>[(s(!0),o(g,null,$(e.items,(v,A)=>(s(),x(p(F),{key:v.id,index:A,class:"kanban-list-item"},{default:_(()=>[a(P,{class:"kanban-list-item-inner",type:"roadmap",suggestion:v,color:e.color,onUpvote:p(l)},null,8,["suggestion","color","onUpvote"])]),_:2},1032,["index"]))),128))]),_:2},1032,["list","onUpdate:list","group"])]),_:2},1032,["index"])):w("",!0)],64))),128))]),_:1})]),_:1},8,["list","axis","lock-axis"])]))}}),ue=T(le,[["__scopeId","data-v-7488f043"]]),he=h({__name:"RoadmapView",setup(c){return(t,i)=>(s(),x(ue))}});export{he as default};

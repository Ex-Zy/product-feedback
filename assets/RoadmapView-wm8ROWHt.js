import{d as g,o as t,c as u,a as r,m as s,w as i,v as m,y as v,_ as w,s as R,k as $,W as A,B as L,b as D,C as H,F as x,e as S,f as h,h as n,X as V,Y as C,Z as y}from"./index-GpOB9sbF.js";import{u as B}from"./suggestions-4I8riebR.js";import{S as W}from"./SuggestionsListItem-p_6yv136.js";import{U as F,u as z}from"./feedback-LBT0EjWw.js";import{_ as E}from"./IconArrowLeft.vue_vue_type_script_setup_true_lang-iWZRzdFo.js";const G={class:"suggestions-header"},N={class:"content"},M={class:"content__title h1"},P=g({__name:"TheHeader",props:{title:{}},setup(f){function o(){v.push("/create")}function c(){v.back()}return(_,k)=>(t(),u("header",G,[r("div",N,[s(F,{class:"content__btn",type:"light",text:"Go Back",onClick:c},{default:i(()=>[s(E,{color:"#fff"})]),_:1}),r("h1",M,m(_.title),1)]),s(F,{text:"+ Add Feedback",class:"suggestions-header__btn",onClick:o})]))}}),X=w(P,[["__scopeId","data-v-b20784b2"]]),Y={class:"kanban-board"},Z={class:"kanban-column__header"},j={class:"kanban-column__title h3"},q={class:"kanban-column__description b1"},J=g({__name:"TheRoadmap",setup(f){const{suggestions:o}=R(B()),{loadSuggestionsToStore:c}=B(),{upvoteFeedback:_}=z();$(c);const{width:k}=A(),b=L(()=>k.value>768?"x":"y"),a=D({name:"Roadmap",columns:[{id:"planned",name:"Planned",description:"Ideas prioritized for research",color:"#F49F85",group:"items",items:[]},{id:"in-progress",name:"In-progress",description:"Currently being developed",color:"#AD1FEA",group:"items",items:[]},{id:"live",name:"Live",description:"Released features",color:"#62BCFA",group:"items",items:[]}]});function I(){a.columns=a.columns.map(p=>{const l=o.value.filter(e=>e.status===p.id);return{...p,items:l}})}return H(()=>o.value,I,{immediate:!0}),(p,l)=>(t(),u("div",Y,[s(X,{title:a.name},null,8,["title"]),s(n(C),{list:a.columns,"onUpdate:list":l[0]||(l[0]=e=>a.columns=e),axis:b.value,"lock-axis":b.value,class:"column-container","use-drag-handle":"",useWindowAsScrollContainer:""},{default:i(()=>[(t(!0),u(x,null,S(a.columns,(e,T)=>(t(),h(n(y),{key:e.id,index:T,class:"kanban-column"},{default:i(()=>[r("header",Z,[s(n(V)),r("div",j,m(e.name)+" ("+m(e.items.length)+") ",1),r("div",q,m(e.description),1)]),s(n(C),{list:e.items,"onUpdate:list":d=>e.items=d,axis:"y",group:e.group,class:"kanban-list","helper-class":"kanban-helper"},{default:i(()=>[(t(!0),u(x,null,S(e.items,(d,U)=>(t(),h(n(y),{key:d.id,index:U,class:"kanban-list-item"},{default:i(()=>[s(W,{class:"kanban-list-item-inner",type:"roadmap",suggestion:d,color:e.color,onUpvote:n(_)},null,8,["suggestion","color","onUpvote"])]),_:2},1032,["index"]))),128))]),_:2},1032,["list","onUpdate:list","group"])]),_:2},1032,["index"]))),128))]),_:1},8,["list","axis","lock-axis"])]))}}),K=w(J,[["__scopeId","data-v-0f3a3d12"]]),ae=g({__name:"RoadmapView",setup(f){return(o,c)=>(t(),h(K))}});export{ae as default};

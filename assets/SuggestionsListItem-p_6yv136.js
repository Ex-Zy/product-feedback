import{d as C,B as a,o as _,c as p,a as s,v as l,n as w,_ as g,V as B,D as S,m as v,$ as D,K as A,u as M,M as z,l as N,q as f,h as i,i as R,w as E,p as L,j}from"./index-GpOB9sbF.js";import{e as q}from"./feedback-LBT0EjWw.js";const F={class:"ui-category__text"},H=C({__name:"UiCategory",props:{name:{default:"default"},isActive:{type:Boolean,default:!1},isClickable:{type:Boolean,default:!1}},emits:["click"],setup(o,{emit:n}){const t=o,u=n,e=()=>{u("click")},d=a(()=>({"is-active":t.isActive,"is-clicable":t.isClickable}));return(c,r)=>(_(),p("div",{class:w(["ui-category",d.value]),onClick:e},[s("div",F,l(c.name),1)],2))}}),K=g(H,[["__scopeId","data-v-f9946171"]]),Q={},T={width:"10",height:"7",xmlns:"http://www.w3.org/2000/svg"},Y=s("path",{d:"M1 6l4-4 4 4","stroke-width":"2",fill:"none","fill-rule":"evenodd"},null,-1),G=[Y];function J(o,n){return _(),p("svg",T,G)}const O=g(Q,[["render",J]]),P="data:image/svg+xml,%3csvg%20width='18'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.62%2016H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036%2011.887%200%209.89%200%207.794%200%203.928%203.52%200%209.03%200%2014.87%200%2018%203.615%2018%207.455c0%203.866-3.164%207.478-8.97%207.478-1.017%200-2.078-.137-3.025-.388A4.705%204.705%200%20012.62%2016z'%20fill='%23CDD2EE'%20fill-rule='nonzero'/%3e%3c/svg%3e",W={class:"ui-upvote__content"},X={class:"ui-upvote__arrow"},Z={class:"ui-upvote__amount"},ee=C({__name:"UIUpVote",props:{align:{default:"vertical"},modelValue:{},isUpvoted:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:n}){const t=o,u=n,e=a(()=>t.isUpvoted?"You upvoted for this suggestion":""),d=a(()=>({[`is-${t.align}`]:!0,"is-upvoted":t.isUpvoted}));function c(r){u("update:modelValue",r)}return(r,m)=>{const h=B("tooltip");return S((_(),p("div",{class:w(["ui-upvote",d.value]),onClick:m[0]||(m[0]=U=>c(t.modelValue+1))},[s("div",W,[s("div",X,[v(O)]),s("div",Z,l(t.modelValue),1)])],2)),[[h,e.value]])}}}),te=g(ee,[["__scopeId","data-v-4e9e4623"]]),$=o=>(L("data-v-f4292a85"),o=o(),j(),o),se=["data-id"],oe={key:0,class:"suggestions-item__status b1"},ae=$(()=>s("span",null,null,-1)),ie={class:"suggestions-item__vote"},ne={class:"suggestions-item__content"},ce={"data-test":"description",class:"suggestions-item__description b1"},le={"data-test":"amount",class:"suggestions-item__comment-amount"},ue=$(()=>s("img",{src:P,alt:"Comment icon"},null,-1)),de=C({__name:"SuggestionsListItem",props:{suggestion:{},type:{default:"suggestion"},color:{}},emits:["upvote"],setup(o,{emit:n}){D(k=>({a1b1ed68:k.color}));const t=o,u=n,{suggestion:e}=A(t),d=M("(max-width: 767px)"),c=a(()=>t.type==="roadmap"),r=a(()=>d.value||c.value?"horizontal":"vertical"),m=a(()=>e.value.comments?q(e.value.comments):0);function h(){e.value.isUpvoted||u("upvote",e.value,!0)}const U=z(),V=a(()=>U.name==="feedback"),y=a(()=>`/feedback/${e.value.id}`),x=a(()=>`/edit/${e.value.id}`),I=a(()=>({[`is-${t.type}`]:!0}));return(k,re)=>{const b=N("router-link");return _(),p("li",{class:w(["suggestions-item",I.value]),"data-id":i(e).id},[c.value?(_(),p("div",oe,[ae,f(l(i(e).status),1)])):R("",!0),s("div",ie,[v(te,{align:r.value,"is-upvoted":i(e).isUpvoted,"model-value":i(e).upvotes,"onUpdate:modelValue":h},null,8,["align","is-upvoted","model-value"])]),s("div",ne,[v(b,{"data-test":"title",class:"suggestions-item__title h3",to:V.value?x.value:y.value},{default:E(()=>[f(l(i(e).title),1)]),_:1},8,["to"]),s("p",ce,l(i(e).description),1),v(K,{name:i(e).category},null,8,["name"])]),s("div",le,[ue,f(" "+l(m.value),1)])],10,se)}}}),me=g(de,[["__scopeId","data-v-f4292a85"]]);export{O as I,me as S,K as U};

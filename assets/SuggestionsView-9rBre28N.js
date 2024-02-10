import{o,c as d,a,r as Q,d as b,b as T,t as $,n as Z,e as te,F,f as O,g as x,p as R,h as B,i as ve,s as N,u as z,j as se,k as m,w as E,l as q,m as P,q as be,v as U,M as ye,L as $e,x as we,y as Se,z as G,A as C,B as Ce,C as xe,T as ke,D as Ae,E as Ie,G as Me}from"./index-0x1rqGtf.js";const p=(e,s)=>{const n=e.__vccOpts||e;for(const[t,c]of s)n[t]=c;return n},Ee={},Te={class:"app-layout"},Ve={class:"app-layout__col-1"},Fe={class:"app-layout__col-2"};function Oe(e,s){return o(),d("section",Te,[a("div",Ve,[Q(e.$slots,"sidebar",{},void 0,!0)]),a("div",Fe,[Q(e.$slots,"main",{},void 0,!0)])])}const Ne=p(Ee,[["render",Oe],["__scopeId","data-v-0fa7ed5d"]]),ze={class:"ui-category__text"},Ue=b({__name:"UiCategory",props:{label:{default:"default"},isActive:{type:Boolean,default:!1},isClickable:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:s}){const n=e,t=s,c=()=>{t("click")},r=T(()=>({"is-active":n.isActive,"is-clicable":n.isClickable}));return(_,l)=>(o(),d("div",{class:Z(["ui-category",r.value]),onClick:c},[a("div",ze,$(_.label),1)],2))}}),ne=p(Ue,[["__scopeId","data-v-985bfe86"]]),Re={class:"widget-categories"},Be=b({__name:"WidgetCategories",emits:["filter"],setup(e,{emit:s}){const n=s,t=te([{id:1,name:"all",label:"All",isActive:!0},{id:2,name:"ui",label:"UI",isActive:!1},{id:3,name:"ux",label:"UX",isActive:!1},{id:4,name:"enhancement",label:"Enhancement",isActive:!1},{id:5,name:"bug",label:"Bug",isActive:!1},{id:6,name:"feature",label:"Feature",isActive:!1}]);function c(r){t.forEach(_=>{_.isActive=r.id===_.id}),n("filter",r.name)}return(r,_)=>(o(),d("div",Re,[(o(!0),d(F,null,O(t,l=>(o(),x(ne,{key:l.id,label:l.label,"is-active":l.isActive,"is-clickable":"",onClick:f=>c(l)},null,8,["label","is-active","onClick"]))),128))]))}}),Le=p(Be,[["__scopeId","data-v-c7139b70"]]),De={},He=e=>(R("data-v-91c75dd9"),e=e(),B(),e),We={class:"widget-top"},Pe=He(()=>a("div",{class:"widget-top__content"},[a("h2",{class:"h2 widget-top__title"},"Frontend Mentor"),a("h2",{class:"widget-top__subtitle"},"Feedback Board")],-1)),Ze=[Pe];function qe(e,s){return o(),d("div",We,Ze)}const Ge=p(De,[["render",qe],["__scopeId","data-v-91c75dd9"]]),je={suggestion:"",planned:"#F49F85","in-progress":"#AD1FEA",live:"#62BCFA"},Xe=ve("statuses",()=>{const{suggestions:e}=N(z());return{statuses:T(()=>[...new Set(e.value.map(t=>t.status))].map(t=>{const c=e.value.filter(r=>r.status===t).length;return{status:t,amount:c,label:t.charAt(0).toUpperCase()+t.slice(1),color:je[t]}}))}}),Ye=e=>(R("data-v-d02d7c85"),e=e(),B(),e),Qe={class:"widget-roadmap"},Je={class:"widget-roadmap__top"},Ke=Ye(()=>a("h3",{class:"widget-roadmap__title h3"},"Roadmap",-1)),et={class:"feedback-statuses"},tt={class:"feedback-statuses__label b1"},st={class:"feedback-statuses__amount b1"},nt=b({__name:"WidgetRoadmap",setup(e){const{statuses:s}=N(Xe()),n=T(()=>s.value.filter(({status:t})=>t!=="suggestion"));return(t,c)=>{const r=se("RouterLink");return o(),d("div",Qe,[a("div",Je,[Ke,m(r,{class:"widget-roadmap__link link",to:"/"},{default:E(()=>[q("View")]),_:1})]),a("ul",et,[(o(!0),d(F,null,O(n.value,_=>(o(),d("li",{class:"feedback-statuses__item",key:_.status},[a("span",{class:"feedback-statuses__icon",style:P({background:_.color})},null,4),a("div",tt,$(_.label),1),a("div",st,$(_.amount),1)]))),128))])])}}}),at=p(nt,[["__scopeId","data-v-d02d7c85"]]),ot={class:"sidebar"},it=b({__name:"TheSidebar",setup(e){const{setFilter:s}=z();function n(t){s(t)}return(t,c)=>(o(),d("aside",ot,[m(Ge),m(Le,{onFilter:n}),m(at)]))}}),ct=p(it,[["__scopeId","data-v-d8aedafb"]]),rt={},lt={width:"23",height:"24",xmlns:"http://www.w3.org/2000/svg"},dt=a("path",{d:"M11.5 2.274c2.237 0 4.339.854 5.923 2.408a8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z",fill:"#FFF","fill-rule":"nonzero"},null,-1),ut=[dt];function _t(e,s){return o(),d("svg",lt,ut)}const ht=p(rt,[["render",_t]]),ft={class:"ui-button__txt"},mt=b({__name:"UIButton",props:{type:{default:"primary"},text:{default:"Default"}},setup(e){const s=e,n=T(()=>({[`is-${s.type}`]:!0}));return(t,c)=>(o(),d("button",{type:"button",class:Z(["ui-button",n.value])},[a("span",ft,$(s.text),1)],2))}}),ae=p(mt,[["__scopeId","data-v-1920bfc2"]]),pt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='13'%20height='11'%3e%3cpath%20fill='none'%20stroke='%23AD1FEA'%20stroke-width='2'%20d='M1%205.233L4.522%209%2012%201'/%3e%3c/svg%3e",gt={},vt={width:"10",height:"7",xmlns:"http://www.w3.org/2000/svg"},bt=a("path",{d:"M1 1l4 4 4-4","stroke-width":"2",fill:"none","fill-rule":"evenodd"},null,-1),yt=[bt];function $t(e,s){return o(),d("svg",vt,yt)}const wt=p(gt,[["render",$t]]),St={},Ct={width:"10",height:"7",xmlns:"http://www.w3.org/2000/svg"},xt=a("path",{d:"M1 6l4-4 4 4","stroke-width":"2",fill:"none","fill-rule":"evenodd"},null,-1),kt=[xt];function At(e,s){return o(),d("svg",Ct,kt)}const oe=p(St,[["render",At]]),It={type:"button",class:"trigger-button"},Mt={class:"dropdown-list"},Et=["onClick"],Tt={key:0,class:"dropdown-list__icon",src:pt,alt:"Check icon"},Vt=b({__name:"SortBy",props:{modelValue:{default:""},modelModifiers:{}},emits:["update:modelValue"],setup(e){const s=be(e,"modelValue"),n=U([ye,$e,we,Se]),t=U(!1);return(c,r)=>{const _=se("dropdown-menu");return o(),x(_,{isOpen:t.value,onOpened:r[0]||(r[0]=l=>t.value=!0),onClosed:r[1]||(r[1]=l=>t.value=!1)},{trigger:E(()=>[a("button",It,[q(" Sort by : "),a("span",null,$(s.value),1),t.value?(o(),x(oe,{key:0,class:"trigger-button__arrow"})):(o(),x(wt,{key:1,class:"trigger-button__arrow"}))])]),body:E(()=>[a("ul",Mt,[(o(!0),d(F,null,O(n.value,l=>(o(),d("li",{class:"dropdown-list__item",key:l},[a("a",{href:"#",class:"dropdown-list__text",onClick:f=>s.value=l},$(l),9,Et),l===s.value?(o(),d("img",Tt)):G("",!0)]))),128))])]),_:1},8,["isOpen"])}}}),Ft=p(Vt,[["__scopeId","data-v-adaa656d"]]),Ot={class:"suggestions-header"},Nt={class:"suggestions-header__count h3"},zt=b({__name:"SuggestionsHeader",setup(e){const{filteredSuggestionsCount:s,sortBy:n}=N(z());return(t,c)=>(o(),d("header",Ot,[m(ht),a("div",Nt,$(C(s))+" Suggestions",1),m(Ft,{modelValue:C(n),"onUpdate:modelValue":c[0]||(c[0]=r=>Ce(n)?n.value=r:null)},null,8,["modelValue"]),m(ae,{text:"+ Add Feedback",class:"suggestions-header__btn"})]))}}),Ut=p(zt,[["__scopeId","data-v-b918b0d2"]]),Rt="data:image/svg+xml,%3csvg%20width='18'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.62%2016H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036%2011.887%200%209.89%200%207.794%200%203.928%203.52%200%209.03%200%2014.87%200%2018%203.615%2018%207.455c0%203.866-3.164%207.478-8.97%207.478-1.017%200-2.078-.137-3.025-.388A4.705%204.705%200%20012.62%2016z'%20fill='%23CDD2EE'%20fill-rule='nonzero'/%3e%3c/svg%3e",Bt={class:"ui-upvote__content"},Lt={class:"ui-upvote__arrow"},Dt={class:"ui-upvote__amount"},Ht=b({__name:"UIUpVote",props:{align:{default:"vertical"},modelValue:{},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const n=e,t=s,c=T(()=>({[`is-${n.align}`]:!0,"is-disabled":n.isDisabled}));function r(_){t("update:modelValue",_)}return(_,l)=>(o(),d("div",{class:Z(["ui-upvote",c.value]),onClick:l[0]||(l[0]=f=>r(n.modelValue+1))},[a("div",Bt,[a("div",Lt,[m(oe)]),a("div",Dt,$(n.modelValue),1)])],2))}}),Wt=p(Ht,[["__scopeId","data-v-c9c439c8"]]),Pt=e=>(R("data-v-e0012883"),e=e(),B(),e),Zt={class:"suggestions-list__vote"},qt={class:"suggestions-list__content"},Gt={class:"suggestions-list__title h3"},jt={class:"suggestions-list__description b1"},Xt={class:"suggestions-list__comment-amount"},Yt=Pt(()=>a("img",{src:Rt,alt:"Comment icon"},null,-1)),Qt=b({__name:"SuggestionsList",emits:["upvote"],setup(e,{emit:s}){const n=s,{filteredSuggestions:t}=N(z());function c(f){return f[0].toUpperCase()+f.slice(1)}const r=te([]);function _(f){r.includes(f.id)||(r.push(f.id),f.upvotes++,n("upvote"))}function l(f){return r.includes(f)}return(f,k)=>(o(),x(ke,{class:"suggestions-list",name:"list",tag:"ul"},{default:E(()=>[(o(!0),d(F,null,O(C(t),v=>(o(),d("li",{class:"suggestions-list__item",key:v.id},[a("div",Zt,[m(Wt,{"is-disabled":l(v.id),"model-value":v.upvotes,"onUpdate:modelValue":L=>_(v)},null,8,["is-disabled","model-value","onUpdate:modelValue"])]),a("div",qt,[a("h3",Gt,$(v.title),1),a("p",jt,$(v.description),1),m(ne,{label:c(v.category)},null,8,["label"])]),a("div",Xt,[Yt,q(" "+$(v.comments?C(xe)(v.comments):0),1)])]))),128))]),_:1}))}}),Jt=p(Qt,[["__scopeId","data-v-e0012883"]]),Kt="/product-feedback/assets/illustration-empty-6fFbLZNp.svg",j=e=>(R("data-v-2903f69b"),e=e(),B(),e),es={class:"suggestions-empty"},ts={class:"suggestions-empty__content"},ss=j(()=>a("img",{src:Kt,alt:"No feedback image"},null,-1)),ns=j(()=>a("h1",{class:"suggestions-empty__title h1"},"There is no feedback yet.",-1)),as=j(()=>a("p",{class:"suggestions-empty__description b1"}," Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app. ",-1)),os=b({__name:"SuggestionsEmpty",setup(e){return(s,n)=>(o(),d("section",es,[a("div",ts,[ss,ns,as,m(ae,{text:"+ Add Feedback"})])]))}}),is=p(os,[["__scopeId","data-v-2903f69b"]]),J=200,cs=800,rs=.1,ls=.3,K=.5,ds=.5,us=12,_s=800,hs=1600,fs=150,ms=3500,ps=["#FFC700","#FF0000","#2E3191","#41BBC7"];var X={props:{particleCount:{type:Number,default:fs},particleSize:{type:Number,default:us},duration:{type:Number,default:ms},colors:{type:Array,default:ps},force:{type:Number,default:ds},stageHeight:{type:Number,default:_s},stageWidth:{type:Number,default:hs},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(e){const s=U(!0),n=(i,u)=>{re(i,{degree:u})},t=T(()=>r(e.particleCount,e.colors));Ae(()=>{e.particleCount>300&&console.log("[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device 😉")});const c=T(()=>ce(e.particleCount,e.duration,e.colors,e.particleSize,e.force,e.stageHeight,e.stageWidth));Ie(async()=>{await _(e.duration),e.shouldDestroyAfterDone&&(s.value=!1)});const r=(i,u)=>{const h=360/i;return Array.from({length:i},(w,y)=>({color:u[y%u.length],degree:y*h}))},_=i=>new Promise(u=>setTimeout(u,i));function l(i){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((i+Number.EPSILON)*10**u)/10**u}function f(i,u){if(i===u)return!0;if(i==null||u==null||i.length!==u.length)return!1;for(let h=0;h<i.length;h++)if(i[h]!==u[h])return!1;return!0}const k=(i,u,h,w,y)=>(i-u)*(y-w)/(h-u)+w,v=(i,u)=>{const h=i+u;return h>360?h-360:h},L=()=>Math.random()>.5,Y=[0,0,1],D=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],Y],ie=i=>!f(D[i],Y)&&L(),A=i=>typeof i>"u",I=i=>{console.error(i)};function ce(i,u,h,w,y,M,V){const S=Number.isSafeInteger;return!A(i)&&S(i)&&i<0?(I("particleCount must be a positive integer"),!1):!A(u)&&S(u)&&u<0?(I("duration must be a positive integer"),!1):!A(h)&&!Array.isArray(h)?(I("colors must be an array of strings"),!1):!A(w)&&S(w)&&w<0?(I("particleSize must be a positive integer"),!1):!A(y)&&S(y)&&(y<0||y>1)?(I("force must be a positive integer and should be within 0 and 1"),!1):!A(M)&&typeof M=="number"&&S(M)&&M<0?(I("floorHeight must be a positive integer"),!1):!A(V)&&typeof V=="number"&&S(V)&&V<0?(I("floorWidth must be a positive integer"),!1):!0}function re(i,u){let{degree:h}=u;const w=k(Math.abs(v(h,90)-180),0,180,-e.stageWidth/2,e.stageWidth/2),y=Math.random()*(cs-J)+J,M=Math.round(Math.random()*(D.length-1)),V=e.duration-Math.round(Math.random()*1e3),S=Math.random()<rs,H=ie(M),W=S?l(Math.random()*ls,2):0,le=W*-1,de=W,ue=l(Math.abs(k(Math.abs(v(h,90)-180),0,180,-1,1)),4),_e=l(Math.random()*K,4),he=l(Math.random()*e.force*(L()?1:-1),4),fe=K,me=l(Math.max(k(Math.abs(h-180),0,180,e.force,-e.force),0),4),g=(pe,ge)=>i==null?void 0:i.style.setProperty(pe,ge+"");g("--x-landing-point",`${w}px`),g("--duration-chaos",`${V}ms`),g("--x1",`${W}`),g("--x2",`${le}`),g("--x3",`${de}`),g("--x4",`${ue}`),g("--y1",`${_e}`),g("--y2",`${he}`),g("--y3",`${fe}`),g("--y4",`${me}`),g("--width",`${H?e.particleSize:Math.round(Math.random()*4)+e.particleSize/2}px`),g("--height",(H?e.particleSize:Math.round(Math.random()*2)+e.particleSize)+"px"),g("--rotation",`${D[M].join()}`),g("--rotation-duration",`${y}ms`),g("--border-radius",`${H?"50%":"0"}`)}return{isVisible:s,isValid:c,stageHeight:e.stageHeight,particles:t,setItemRef:n}}};function gs(e,s,n,t,c,r){return t.isVisible&&t.isValid?(o(),d("div",{key:0,class:"confetti-container",style:P(`--floor-height: ${t.stageHeight}px;`)},[(o(!0),d(F,null,O(t.particles,_=>{let{color:l,degree:f}=_;return o(),d("div",{key:f,class:"particle",ref:k=>t.setItemRef(k,f)},[a("div",{style:P(`--bgcolor: ${l};`)},null,4)],512)}),128))],4)):G("",!0)}function vs(e,s){s===void 0&&(s={});var n=s.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",n==="top"&&t.firstChild?t.insertBefore(c,t.firstChild):t.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var bs=`
@keyframes y-axis-4ff796ae {
to {
    transform: translate3d(0, var(--floor-height), 0);
}
}
@keyframes x-axis-4ff796ae {
to {
    transform: translate3d(var(--x-landing-point), 0, 0);
}
}
@keyframes rotation-4ff796ae {
to {
    transform: rotate3d(var(--rotation), 360deg);
}
}
.confetti-container[data-v-4ff796ae] {
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
  transform: translate3d(var(--x, 0), var(--y, 0), 0);
  z-index: 1200;
}
.confetti-container > .particle[data-v-4ff796ae] {
  animation: x-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--x1), var(--x2), var(--x3), var(--x4));
}
.confetti-container > .particle div[data-v-4ff796ae] {
  position: absolute;
  top: 0;
  left: 0;
  animation: y-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--y1), var(--y2), var(--y3), var(--y4));
  width: var(--width);
  height: var(--height);
}
.confetti-container > .particle div[data-v-4ff796ae]:before {
  display: block;
  height: 100%;
  width: 100%;
  content: "";
  background-color: var(--bgcolor);
  animation: rotation-4ff796ae var(--rotation-duration) infinite linear;
  border-radius: var(--border-radius);
}
`;vs(bs);X.render=gs;X.__scopeId="data-v-4ff796ae";var ys=(()=>{const e=X;return e.install=s=>{s.component("ConfettiExplosion",e)},e})();const $s={key:0,class:"confetti"},ee=3e3,ws=b({__name:"TheSuggestions",setup(e){const{filteredSuggestions:s}=N(z()),n=U(!1),{innerWidth:t,innerHeight:c}=window;async function r(){n.value=!0,setTimeout(()=>{n.value=!1},ee)}return(_,l)=>(o(),d(F,null,[n.value?(o(),d("div",$s,[m(C(ys),{force:.1,particleCount:50,particleSize:10,duration:ee,stageWidth:C(t),stageHeight:C(c)},null,8,["stageWidth","stageHeight"])])):G("",!0),m(Ne,null,{sidebar:E(()=>[m(ct)]),main:E(()=>[a("main",null,[m(Ut),m(Me,{name:"fade",mode:"out-in"},{default:E(()=>[C(s).length?(o(),x(Jt,{key:1,onUpvote:r})):(o(),x(is,{key:0}))]),_:1})])]),_:1})],64))}}),Ss=p(ws,[["__scopeId","data-v-92e057f4"]]),xs=b({__name:"SuggestionsView",setup(e){return(s,n)=>(o(),x(Ss))}});export{xs as default};
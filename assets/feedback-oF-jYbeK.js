import{d as D,R as I,m as y,o as h,c as w,h as L,r as B,i as V,a as q,z as J,n as z,_ as X,k as T,l as i,s as g,W as G,N as H,X as W,A as m}from"./index-F0L5UXS0.js";const S="https://my-json-server.typicode.com/Ex-Zy/fb-fake-api",Z=`${S}/currentUser`,d=`${S}/productRequests`,ie="Most Upvotes",fe="Least Upvotes",de="Most Comments",pe="Least Comments",me=[{id:2,name:"ui",label:"UI"},{id:3,name:"ux",label:"UX"},{id:4,name:"enhancement",label:"Enhancement"},{id:5,name:"bug",label:"Bug"},{id:6,name:"feature",label:"Feature"}];function K(e){return e.reduce((n,t)=>{var c;const s=(((c=t.replies)==null?void 0:c.length)??0)+1;return n+s},0)}function k(e){return e!=null&&typeof e=="object"}function Q(e,n){const t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(const c of t){const r=e[c],u=n[c],l=k(r)&&k(u);if(l&&!Q(r,u)||!l&&r!==u)return!1}return!0}const Y={key:0,class:"ui-button__icon"},ee={class:"ui-button__txt"},te=D({__name:"UIButton",props:{type:{default:"primary"},text:{default:"Default"}},emits:["click"],setup(e,{emit:n}){const t=e,s=n,c=I(),r=()=>s("click"),u=y(()=>({[`is-${t.type}`]:!0}));return(l,p)=>(h(),w("button",{type:"button",class:z(["ui-button",u.value]),onClick:r},[L(c).default?(h(),w("span",Y,[B(l.$slots,"default",{},void 0,!0)])):V("",!0),q("span",ee,J(t.text),1)],2))}}),ve=X(te,[["__scopeId","data-v-9f608bcd"]]),C=T("user",()=>{const e=i(!1),n=i(null),t=i({image:"",name:"",username:""});async function s(){e.value=!0;try{return await(await fetch(Z)).json()}catch(r){n.value="Failed to load currentUser",console.log(r)}finally{e.value=!1}}async function c(){const r=await s();r&&(t.value=r)}return{loader:e,error:n,currentUser:t,fetchCurrentUser:s,loadCurrentUserToStore:c}});async function ne(e,n){const t=`${d}/${e}`,s={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},c=await fetch(t,s);if(!c.ok)throw new Error(`${c.status} - ${c.statusText}`);return await c.json()}async function se(e){const n=await fetch(`${d}/${e}`,{method:"DELETE"});if(!n.ok)throw new Error(`${n.status} - ${n.statusText}`);return await n.json()}async function v(e){const n=`${d}/${e.id}`,t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},s=await fetch(n,t);if(!s.ok)throw new Error(`${s.status} - ${s.statusText}`);return await s.json()}function ae(e){return Object.assign({id:Date.now(),upvotes:0,isUpvoted:!1,status:"suggestion"},e)}async function oe(e){const n=ae(e),t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},s=await fetch(d,t);if(!s.ok)throw new Error(`${s.status} - ${s.statusText}`);return await s.json()}function re(e,n){var r;const{feedback:t}=g(_()),{currentUser:s}=C();if(!((r=t.value)!=null&&r.comments))return[];const{comments:c=[]}=t.value;return c.map(u=>{if(u.id===e){const l={id:Date.now(),content:n,user:{...s},replyingTo:(u==null?void 0:u.user.username)??""};u.replies=u.replies?[...u.replies,l]:[l]}return u})}function ce(e){var r;const{feedback:n}=g(_()),{currentUser:t}=C();if(!((r=n.value)!=null&&r.comments))return[];const{comments:s}=n.value,c={id:Date.now(),content:e,user:{...t}};return s?[...s,c]:[c]}function ue(e,n){const t=G(e);return t.value.isUpvoted=n,t.value.upvotes++,{...t.value}}const _=T("feedback",()=>{const e=i(!0),n=i(null),t=i(null),s=y(()=>{var a;return((a=t.value)==null?void 0:a.comments)??null}),c=y(()=>s.value?K(s.value):0),r=i([]);function u(a){return r.value.includes(a)}function l(){r.value.length=0}function p(a){r.value.push(a)}function U(a){u(a)?l():(l(),p(a))}async function b(a){e.value=!0;try{return await(await fetch(`${d}/${a}`)).json()}catch(o){n.value="Failed to load feedback",console.log(o)}finally{e.value=!1}}async function E(){const a=Number(H().params.id),o=await b(a);o&&(t.value=o)}async function $(a,o){try{if(!o)return;const{id:f,upvotes:N}=ue(a,o),M=await ne(f,{isUpvoted:o,upvotes:N}),{showConfetti:P}=W();return await P(),M}catch(f){n.value="Something went wrong",console.log(f)}}function F(){e.value=!0,n.value=null,t.value=null,l()}async function O(a,o){const f=re(a,o);if(t.value)return t.value.comments=f,l(),await v(t.value)}async function R(a){e.value=!0;try{const o=ce(a);return t.value?(t.value.comments=o,await v(t.value)):void 0}catch(o){n.value="Something went wrong",console.log(o)}finally{e.value=!1}}async function j(a){e.value=!0;try{return t.value=a,setTimeout(()=>m.back(),100),await v(a)}catch(o){n.value="Something went wrong",console.log(o)}finally{e.value=!1}}async function x(a){e.value=!0;try{const o=await se(a.id);return o?(setTimeout(()=>m.push("/"),100),o):void 0}catch{n.value="Something went wrong"}finally{e.value=!1}}async function A(a){e.value=!0;try{const o=await oe(a);return o?(setTimeout(()=>m.push("/"),100),o):void 0}catch{n.value="Something went wrong"}finally{e.value=!1}}return{loader:e,error:n,feedback:t,comments:s,commentsAmount:c,visibleReplies:r,isVisibleReply:u,showReply:p,hideReplies:l,toggleReply:U,fetchFeedback:b,loadFeedbackToStore:E,upvoteFeedback:$,$reset:F,submitReply:O,submitComment:R,editFeedback:j,deleteFeedback:x,createNewFeedback:A}});export{d as A,me as C,fe as L,ie as M,ve as U,de as a,pe as b,K as c,C as d,Q as e,_ as u};

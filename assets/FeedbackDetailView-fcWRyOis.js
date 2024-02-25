import{a as x,d as U,u as k,b as X,S as L}from"./SuggestionsListItemSkeleton-KmvM8fRA.js";import{l as h,m,D as K,B as S,d as C,o as B,c as o,a,E as J,G as W,h as i,H as y,I as N,t as g,_ as r,z as j,J as z,K as Z,s as M,i as u,x as _,f as V,F as H,e as F,n as $,p as b,j as O,L as AA,M as eA,v as tA,N as sA}from"./index-C-CQUbxn.js";const q=()=>{const A=h(""),s=m(()=>{const c=250-A.value.length;return c>0?c:0});K(A,e);function e(n){A.value=n.trimStart().substring(0,250)}function E(){A.value=""}return{commentMsg:A,quantity:s,updateTextAreaValue:e,clearTextArea:E}},BA=()=>{const t=h(),A=h();S(()=>{e(),s()});function s(){t.value.focus()}function e(){A.value.scrollIntoView({behavior:"smooth"})}return{textAreaRef:t,hiddenDivRef:A,focusEl:s,scrollToTop:e}},aA={class:"post-reply"},EA=C({__name:"AddReply",emits:["submit"],setup(t,{emit:A}){const s=A,{commentMsg:e,clearTextArea:E}=q(),{textAreaRef:n,hiddenDivRef:c,focusEl:l}=BA();function R(){const I=e.value.trim();if(!I.length){l();return}s("submit",I),setTimeout(E,300)}return(I,d)=>(B(),o("div",aA,[a("div",{ref_key:"hiddenDivRef",ref:c,class:"hidden-el"},null,512),J(a("textarea",{ref_key:"textAreaRef",ref:n,class:"post-reply__area",placeholder:"Type your reply here","onUpdate:modelValue":d[0]||(d[0]=w=>y(e)?e.value=w:null),onKeyup:N(R,["enter"])},null,544),[[W,i(e)]]),g(x,{text:"Post Reply",onClick:R,class:"post-reply__btn"})]))}}),oA=r(EA,[["__scopeId","data-v-aaef79f7"]]),cA="data:image/jpeg;base64,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",nA="data:image/jpeg;base64,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",iA="data:image/jpeg;base64,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",gA="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAFAAUAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQEGAgMHAP/aAAgBAQAAAADm2OAiYduwmC8dfOA/TYLVmTCurDha/XF0T5IwqgAmtvcCvF2im0tUM8s5cNTrRyerMDyS5rxnQAKNLDZsyVO9u5DntKCwWE2FhQRzd9bMNubpHzcWJ//EABkBAAMBAQEAAAAAAAAAAAAAAAADBQQBAv/aAAgBAhAAAABh0DP7dwhOpO85JlfWvHMtt//EABkBAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/aAAgBAxAAAABYpcCzR6IA/UDmo4rVIk479aEv/8QAMBAAAgEDAwICCgEFAAAAAAAAAQIDAAQRBRIhMUEQUQYTFCIjMkJhcbGRIDNicoH/2gAIAQEAAT8AxRHhdXkFsm6RwPt3qb0ggV09WpZfqNW/pCAG9dGevG2rTU7a6LBCQR2Pes/0NROASavpmuLuZ85G4gfgeILKQVJBqy1uQMEnAI4G7pikdWUMpBBHB8M0a1KeNIGjYndICBXs6hR5VJAKZMeOj3Zmg2HqnH/KB8DWoQyzXEapG74X6R0pPR13tmlUn3RkirtBDKyMrZH2plVgSKkTafDRXcXe0HgqcigazWa0o7NQM0rEwhf7YGNx/NTS3Kp8IDMmMr3wKv8ASJibmdp48MchGXBFSSRhWR0w3mKmJwR4aGmZZX8gBQNZrdVvf6darCbhuCRuptTsLq7LWxMbRDdG28MrkH5SvUZqe0gv4WkAUNjkVrmnLDI5A708BZ0XbmmS1WNGhjRlZsEdW5HSrO2W2gVAOerVms0KnSV7lkwGwe9W1rOjCT2Qt/q2DVheTxxLkMOAMN81arbLcKWJ5xmpYYBv9Y5UBeo/XFWlikR3n8qMfuuScVcW8lu+yQYbGcVmgau0Z7tFjYBmTmrATQRgSSKR286N/wDGLbjgV6+WYMo4Lj+BVxEq3aoRwo3Gi1WxX2mDd03rmtZuEnv5nQ8dqMir1YCnuoEHLgnyHNXbJO8bKCrA/NQ066+Hi5Yg9qttL9XHk5OBWnrHh2bk961q/lTUGMTDyNR6z03xfwaTULaT69p+/Fbw3IINB3dj7x3dqh3SqefeByKhQsqH/MfuoYgVRvKlYvbuNo/NPKIEnYHqKvC0tyzeZorR8qDyJ8rEV//EAB4RAAICAgMBAQAAAAAAAAAAAAECABEDIQQQEiBh/9oACAECAQE/AOqHxlzKh2Yr6uA2OiZyTkdyfOrnG5F0rQZarXec+QRQhRgwYanHW0DEmVrrk5ChELNksTEPONB+T1P/xAAhEQACAgICAgMBAAAAAAAAAAABAgARAwQQEiExE0Fhcf/aAAgBAwEBPwCIvYzosbH9jnWwMyWBGXzXDimlTUXFjRRdmpsa4Fsh/s+IknyBHNk8a1MFMVlKke5uZCrlBUs9gJ0mniDq137ihUAmenyM37Ogn//Z",QA="data:image/jpeg;base64,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",rA="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAFAAUAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAECAwYEBwj/2gAIAQEAAAAA98kqMAV2CZO/H82HOHUe0pnfNYL1AZ4b9LOoyCed6nMZn3fsUJDwNtYzXFWqm+a5oX61NTOQXlD6cwzUWXgw1RDTpu2+bC6CaooNtNJoqPL/AP/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAF/9oACAECEAAAAOIxUYgjBlZawqOqY1j/AP/EABkBAAMBAQEAAAAAAAAAAAAAAAEEBQMAAv/aAAgBAxAAAADf0yoC/RlJmhSmzjtXj4jmMO//xAAyEAACAQMCBAQEBAcAAAAAAAABAgMABBEFEgYQITETQVFhBxQgIjNCUnEVMoGRkrHS/9oACAEBAAE/AOdzc29rA89xMkUSDLO5wAKvvijwtbOFhee66ZJhToP8sVovHXDesPHFBd+HO/aGYbGrHLFY56jf2+nWVxeXDhY4kLMa1HU9f48v/CAWOzjbogzsT/pqi+FzEqXu+nsK1H4czxK5hu8nuAwr4c8UaompTcOayxMqputHY5JA7ryx9HGWn2+ocMarBOWCi3aTI7gx/cK4DsYoNJtsKAWJZqEThQQAQfTrV9HhCGxXF++y4i0nUIG2vA6NkegagQwDDsRkf15jlxLk8PauF7m0lC+5K1baazaRaLHD4jGBBtdiqL9ueuO5JrR5ZLW0miAGxVyBjAz5gU9rJPdmb5eOUkHf1KN7AEVxxpx/h9v4aO7icIgPV8P2WtOkWSwtSHDYiUMR+oDB5jlq0Xi6fMu3P8px+xqwSBbciVfw+gX9umKR1f5kCJj9nTaOmasxbvgSp19exFXUSSXsYAzt3OPPBTtWjxFLPJGN7s4HseY5dCMGruCOLUjEV2x3CZXHky1pt2qW8kU9nOZYnKMwkwGwejAdMA0nhz3Us3hvHFCv5n3FmrQLaO5+ZuJYww3BEz/c0AAAB2H0ChWvITYiRPxY5AYz71Y3MN3EHVip/MPQ1ql6Gk+Utxlm/Eb0FaFEI9OjUfqb/f0ClUt2BoQyYPlWtWcpks5dx2LvDL5bmxg02lxOzNl1Oe6nGaSwitw5RfPue5rh4X3jahvYm2UoIwfJ+pbHM0loijtQhHkKAqSGOVCjqCp7in0cZzHMV9iM0+h78B5+nstQ2kVvEsca4UU0a+lNC/pRBFY6UOn04rFEVPECM1//xAAjEQEAAgEDAgcAAAAAAAAAAAABAAIRAxAhMUEEEhMiMlJh/9oACAECAQE/AIHdeIuh9mJjdeMfsfImII0ru5HMaYBySp32BZbSuabZI6nt6StLenVxxjYpU6BEzHw2ivxgABiX0K26cM//xAAjEQEAAQQBAgcAAAAAAAAAAAABAgADBBEQEiETFCIxMlFh/9oACAEDAQE/AKhCU5aCvJ3tfGpCKPODF3KQUFw71mQS7J084V8ieGj77Gut9W4oVl5JKLbPvnHN3oFEZLpe1ZEdXpn7yKa00ZV8NddKrt4//9k=",lA="data:image/jpeg;base64,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",RA="data:image/jpeg;base64,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",IA="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAFAAUAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMHAAIEAQj/2gAIAQEAAAAA+hczxOkbszz3M+bqWNWX9J++JWAK6lLiHk1zrug6qyUDhzm5ju4uti3ae4SW3ZJLWCg9tBUNIS30qFaZHZzHc3bifTOhg9YJ2GrkoPu4tqYutdlUDD7Ncj/XVVcmv//EABkBAAMBAQEAAAAAAAAAAAAAAAEDBAACBf/aAAgBAhAAAAAEjHiOmgokZ6C9K13RRQv/xAAZAQADAQEBAAAAAAAAAAAAAAABBAUCAAP/2gAIAQMQAAAAJ3gczTQR5ykvH16UVFgHFT//xAAzEAACAQMDAgMGBQQDAAAAAAABAgMABBEFEiEGMSJBURMUMmFicQcWQkOSEBUgUiORof/aAAgBAQABPwCsCsCjtAJPYVqHX/RmnzNDPrVv7Qd1jzKR/AGtN676P1J1jtdati57I5MZP88VxWBWB/j+IOva/wBQvJbaa5j0xGKgK21rgjgsfp9BUulX9qVEtswLdhWmdL6lerva2Kjy3cV031Lr3RV1b2uqs82lSMAcneYPqSkdXVXRgVYAgjsQf6nqO88kjr8x3vnHHXU/VeoQ9P6kyKisYSgYdxv8OaMo2QqvwhFAH2FLIAQXRSd2ATVpKzYPpXWjpJpqRty3JrpLqe+/LOkgrGxSAR5P0HbU3VeoIMrDEa/ON+f2Yq9kf9jRUgnk1qtu9xp9xERkMF/8YGtW6ku7W6aKK2UIp2ruPJrTdautQt5NkBMkfiIBqPrl7bwSWHY8ndXvFr1Fol1KsDJLHEzLn1ArphZv7JbYJxufH8qzIvctStuFDKnmu4HlWsQyS2fgODHKj/cKeRV/pFpO7SY8RbOa6dsorVwkYLBic1ddN6ZNdGUpnOCRmrO0s7eOZYkC71IIHzGCTWmIYN7EbIVjWJIxyuUJyw+9e8Qg+IZr3i3YeBMGsSyHAfFLaMhJeUuT2+VXCf8AEQTwRirqRLaK6MjYERINW+p373Rktg5jA4BfbWj6zbyS28M8sizkYxJzuP3q5GZVhjJzLhcjyzRtCUKcHA7mp4X5XgVZ2JSJsuHyc8+VQOMZoygSAVdz7l4Jrqa6jN9fWiuCdqOw9CRXvkUIQppyuSOdxyaS4hltreQWAgcSryK0m+EuoxCR8Kh3ZPmzcKK9uqyVehQ5xUMnsyDu4oNt7AUpGSa17rDSdO3xoRcXA/Qh4B+o093JcX9zLK3jnJJPoc5qV7lX5zxWntqkilE3AEg7j8vStYnbTdFRN2J5Zkcn9XgOc1ovU1lqqKhZUuQAGjPdjjutOwcjcBRVPSr/APEa5YlbK0RB5PJ4jWodRazqAC3F7IV/1Xwr/wBLTnsKbG/INWUMssEUskHpyV7irWWKOInaMrWpRXWq3cm0Hanc+QFOzoyuhKug7j5VpfXGq2siJcsJ4gOd3xAfI1p/UekahtENyquf238LURxRHNH4qw3siwBK5wTXQ2s2t+i2F5EPaRpwpGVdR6Cp9N0GPcy2Uea6pvorWykEESxgnaoAA5PnRQvbtJkfEAfWpT4z9sUjnHzr/8QAIxEAAgEDAwQDAAAAAAAAAAAAAAECAxESBBBBEyEiMVFhgf/aAAgBAgEBPwDITHKK5Lly0fgmm1aJjNtrkoO6aZgtq100ypkpXNNCUpZcIQpoksolWHj7RpnjS/TqIsl6W0tJOo+z7HSVJRj9DjFn/8QAIxEAAgIBBAEFAQAAAAAAAAAAAQIAAxEEEBIhYRMiMUFCcf/aAAgBAwEBPwDHiBSfiClz+TGQqcETE7lBCnk09SsIp+jNWOwRMnbTFSCplXApiay1EQpj3MNuJlbcWlNxzx7mtBNo/k4HE72TVqi9qc4jWGxi3mBjP//Z",mA="data:image/jpeg;base64,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",CA="data:image/jpeg;base64,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",dA="data:image/jpeg;base64,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",uA="data:image/jpeg;base64,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",jA={class:"user"},kA={class:"user__avatar"},HA=["src"],wA={class:"user__content"},pA={class:"user__name"},xA={class:"user__username"},MA=C({__name:"UserProfile",props:{user:{}},setup(t){const A=t,s=m(()=>e(A.user.image));function e(E){return new URL(Object.assign({"../../../assets/user-images/image-anne.jpg":cA,"../../../assets/user-images/image-elijah.jpg":nA,"../../../assets/user-images/image-george.jpg":iA,"../../../assets/user-images/image-jackson.jpg":gA,"../../../assets/user-images/image-james.jpg":QA,"../../../assets/user-images/image-javier.jpg":rA,"../../../assets/user-images/image-judah.jpg":lA,"../../../assets/user-images/image-roxanne.jpg":RA,"../../../assets/user-images/image-ryan.jpg":IA,"../../../assets/user-images/image-suzanne.jpg":mA,"../../../assets/user-images/image-thomas.jpg":CA,"../../../assets/user-images/image-victoria.jpg":dA,"../../../assets/user-images/image-zena.jpg":uA})[`../../../assets/user-images/${E}`],import.meta.url).href}return(E,n)=>(B(),o("div",jA,[a("div",kA,[a("img",{src:s.value,alt:"avatar picture"},null,8,HA)]),a("div",wA,[a("div",pA,j(A.user.name),1),a("div",xA,j(A.user.username),1)])]))}}),VA=r(MA,[["__scopeId","data-v-e719860b"]]),T=t=>{const A=z();K(t,s);async function s(E,n){E!==n&&await e()}async function e(){await Z();const E=A.value.at(-1).$el;E==null||E.scrollIntoView({behavior:"smooth"})}return{commentRef:A}},YA={class:"comment"},hA={class:"comment__header"},FA={class:"comment__body"},DA={class:"comment__content b2"},GA={key:0,class:"replying-to"},fA={key:0,class:"comment-replies"},UA=C({__name:"CommentsItem",props:{type:{},comment:{},reply:{}},setup(t){const A=t,s=m(()=>A.type==="comment"),e=m(()=>A.type==="reply"),E=m(()=>A.reply?A.reply.user:A.comment.user),n=m(()=>A.reply?A.reply.content:A.comment.content),c=m(()=>{const Q=A.comment.replies;return e.value||!Q?0:Q.length}),{commentRef:l}=T(c),{currentUser:R}=M(U()),{openReplyId:I}=M(k()),d=m(()=>R.value.username!==E.value.username),w=m(()=>I.value===(A.reply?A.reply.id:A.comment.id)),{toggleReply:D,submitReply:p}=k();function v(Q){p(A.comment.id,Q)}return(Q,G)=>(B(),o("div",{class:$(["comment-outer",{"is-replies-open":!!(s.value&&c.value)}])},[a("div",YA,[a("div",hA,[g(VA,{user:E.value},null,8,["user"]),d.value?(B(),o("span",{key:0,class:"reply-btn",onClick:G[0]||(G[0]=Y=>{var f;return i(D)(Q.comment.id,(f=A.reply)==null?void 0:f.id)})},"Reply")):u("",!0)]),a("div",FA,[a("div",DA,[Q.reply?(B(),o("span",GA," @"+j(Q.reply.replyingTo),1)):u("",!0),_(" "+j(n.value),1)]),w.value?(B(),V(oA,{key:0,onSubmit:v})):u("",!0)])]),s.value&&Q.comment.replies?(B(),o("div",fA,[(B(!0),o(H,null,F(Q.comment.replies,Y=>(B(),V(P,{key:Y.id,ref_for:!0,ref_key:"commentRef",ref:l,type:"reply",comment:Q.comment,reply:Y},null,8,["comment","reply"]))),128))])):u("",!0)],2))}}),P=r(UA,[["__scopeId","data-v-a3e734e8"]]),KA={class:"comments-list"},SA={class:"comments-list__title h3"},JA={class:"comments-list__content"},WA=C({__name:"CommentsThread",setup(t){const{comments:A,commentsAmount:s}=M(k()),{commentRef:e}=T(s);return(E,n)=>(B(),o("div",KA,[a("div",SA,j(i(s))+" Comments",1),a("div",JA,[(B(!0),o(H,null,F(i(A),c=>(B(),V(P,{ref_for:!0,ref_key:"commentRef",ref:e,key:c.id,comment:c,type:"comment"},null,8,["comment"]))),128))])]))}}),yA=r(WA,[["__scopeId","data-v-07622f3c"]]),NA=t=>(b("data-v-b584a6db"),t=t(),O(),t),bA={class:"add-comment"},OA=NA(()=>a("h2",{class:"add-comment__title h3"},"Add Comment",-1)),qA={class:"add-comment__footer"},TA={class:"add-comment__characters b2"},PA=C({__name:"AddComment",emits:["submit"],setup(t,{emit:A}){const s=A,{commentMsg:e,quantity:E,clearTextArea:n}=q();function c(){const l=e.value.trim();l.length&&(s("submit",l),setTimeout(n,300))}return(l,R)=>(B(),o("div",bA,[OA,J(a("textarea",{class:"add-comment__area",placeholder:"Type your comment here","onUpdate:modelValue":R[0]||(R[0]=I=>y(e)?e.value=I:null),onKeyup:N(c,["enter"])},null,544),[[W,i(e)]]),a("div",qA,[a("span",TA,j(`${i(E)} Characters left`),1),g(x,{text:"Post Reply",onClick:c})])]))}}),vA=r(PA,[["__scopeId","data-v-b584a6db"]]),XA={},LA={width:"7",height:"10",xmlns:"http://www.w3.org/2000/svg"},zA=a("path",{d:"M6 9L2 5l4-4",stroke:"#4661E6","stroke-width":"2",fill:"none","fill-rule":"evenodd"},null,-1),ZA=[zA];function _A(t,A){return B(),o("svg",LA,ZA)}const $A=r(XA,[["render",_A]]),Ae={},ee={class:"comment-outer"},te=AA('<div class="comment" data-v-6b995af6><div class="comment__header" data-v-6b995af6><div class="user" data-v-6b995af6></div><span class="reply-btn" data-v-6b995af6></span></div><div class="comment__body" data-v-6b995af6><div class="comment__content b2" data-v-6b995af6></div></div></div>',1),se=[te];function Be(t,A){return B(),o("div",ee,se)}const ae=r(Ae,[["render",Be],["__scopeId","data-v-6b995af6"]]),Ee=t=>(b("data-v-fdea4c89"),t=t(),O(),t),oe={class:"comments-skeleton"},ce=Ee(()=>a("div",{class:"comments-skeleton__title h3"},null,-1)),ne={class:"comments-skeleton__content"},ie=C({__name:"CommentsThreadSkeleton",setup(t){return(A,s)=>(B(),o("div",oe,[ce,a("div",ne,[(B(),o(H,null,F(3,e=>g(ae,{key:e})),64))])]))}}),ge=r(ie,[["__scopeId","data-v-fdea4c89"]]),Qe={class:"feedback-detail"},re={class:"feedback-detail__header"},le=C({__name:"FeedbackDetail",setup(t){const{loadCurrentUserToStore:A}=U(),{feedback:s,comments:e,loader:E,error:n}=M(k()),{upvoteFeedback:c,loadFeedbackToStore:l,$reset:R,submitComment:I}=k();S(()=>{A(),l()}),eA(()=>{R()});function d(){sA.push("/")}return(w,D)=>{var p;return B(),o("div",Qe,[a("div",re,[g(x,{type:"light",text:"Go Back",onClick:d},{default:tA(()=>[g($A)]),_:1}),g(x,{type:"secondary",text:"Edit Feedback"})]),i(E)||i(n)?(B(),o(H,{key:0},[g(X),g(ge)],64)):i(s)?(B(),o(H,{key:1},[g(L,{suggestion:i(s),onUpvote:i(c)},null,8,["suggestion","onUpvote"]),(p=i(e))!=null&&p.length?(B(),V(yA,{key:0})):u("",!0)],64)):u("",!0),g(vA,{onSubmit:i(I)},null,8,["onSubmit"])])}}}),Re=r(le,[["__scopeId","data-v-3bb9eb2c"]]),Ie={class:"fd-view"},me=C({__name:"FeedbackDetailView",setup(t){return(A,s)=>(B(),o("div",Ie,[g(Re)]))}}),ue=r(me,[["__scopeId","data-v-d671c58c"]]);export{ue as default};

(this.webpackJsonpmemories=this.webpackJsonpmemories||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(18),s=a(23),o=a(67),l=a(21),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",f=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e.filter((function(e){return e._id!==t.payload}));case b:case d:return e.map((function(e){return e.id===t.payload._id?t.payload:e}));case j:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);default:return e}}}),m=a(22),h=a(157),x=a(158),O=a(152),g=a(161),v=a(156),y=a(14),C=a.n(y),w=a(24),k=a(35),N=a.n(k),I="https://dannnysmemories.herokuapp.com/posts",E=function(e,t){return N.a.patch("".concat(I,"/").concat(e),t)},S=function(e){return N.a.delete("".concat(I,"/").concat(e))},D=function(e){return N.a.patch("".concat(I,"/").concat(e,"/likePost"))},z=function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,N.a.post(I,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e,t){return function(){var a=Object(w.a)(C.a.mark((function a(n){var r,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},_=a.p+"static/media/memories.9cfa8a46.png",A=a(155),W=a(149),B=a(151),F=a(160),L=a(153),M=a(154),R=a(73),H=a.n(R),J=a(74),P=a.n(J),K=a(72),U=a.n(K),V=a(71),q=a.n(V),G=a(146),Q=Object(G.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),X=a(5),Y=function(e){var t=e.post,a=e.setCurrentId,n=Q(),r=Object(i.b)();return Object(X.jsxs)(W.a,{className:n.card,children:[Object(X.jsx)(B.a,{className:n.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),Object(X.jsxs)("div",{className:n.overlay,children:[Object(X.jsx)(O.a,{variant:"h6",children:t.creator}),Object(X.jsx)(O.a,{variant:"body2",children:q()(t.createdAt).fromNow()})]}),Object(X.jsx)("div",{className:n.overlay2,children:Object(X.jsx)(F.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(X.jsx)(U.a,{fontSize:"default"})})}),Object(X.jsx)("div",{className:n.details,children:Object(X.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(X.jsx)(O.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(X.jsx)(L.a,{children:Object(X.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(X.jsxs)(M.a,{className:n.cardActions,children:[Object(X.jsxs)(F.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(e);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(X.jsx)(H.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(X.jsxs)(F.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(w.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(X.jsx)(P.a,{fontSize:"small"}),"Delete"]})]})]})},Z=Object(G.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),$=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=Z();return console.log(a),a.length?Object(X.jsx)(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(X.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(X.jsx)(Y,{post:e,setCurrentId:t})},a._id)}))}):Object(X.jsx)(A.a,{})},ee=a(19),te=a(77),ae=a(159),ne=a(75),re=a.n(ne),ce=Object(G.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ie=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(m.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),u=ce(),d=Object(i.b)();Object(n.useEffect)((function(){l&&o(l)}),[l]);var p=function(){a(0),o({creator:"",title:"",message:"",tags:"",selectedFile:""})},j=function(){var e=Object(w.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),d(t?T(t,s):z(s)),p();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsx)(te.a,{className:u.paper,children:Object(X.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(u.root," ").concat(u.form),onSubmit:j,children:[Object(X.jsxs)(O.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(X.jsx)(ae.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object(ee.a)(Object(ee.a)({},s),{},{creator:e.target.value}))}}),Object(X.jsx)(ae.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object(ee.a)(Object(ee.a)({},s),{},{title:e.target.value}))}}),Object(X.jsx)(ae.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:s.message,onChange:function(e){return o(Object(ee.a)(Object(ee.a)({},s),{},{message:e.target.value}))}}),Object(X.jsx)(ae.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object(ee.a)(Object(ee.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(X.jsx)("div",{className:u.fileInput,children:Object(X.jsx)(re.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(ee.a)(Object(ee.a)({},s),{},{selectedFile:t}))}})}),Object(X.jsx)(F.a,{className:u.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(X.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0,children:"Clear"})]})})},se=a(12),oe=Object(G.a)((function(e){return Object(se.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),le=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],r=t[1],c=oe(),s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(w.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(I);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,s]),Object(X.jsxs)(h.a,{maxidth:"lg",children:[Object(X.jsxs)(x.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(X.jsx)(O.a,{className:c.heading,variant:"h2",align:"center",children:"Memories"}),Object(X.jsx)("img",{className:c.image,src:_,alt:"memories",height:"60"})]}),Object(X.jsx)(g.a,{in:!0,children:Object(X.jsx)(h.a,{children:Object(X.jsx)(v.a,{children:Object(X.jsxs)(v.a,{className:c.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(X.jsx)(v.a,{item:!0,xs:12,sm:7,children:Object(X.jsx)($,{setCurrentId:r})}),Object(X.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(X.jsx)(ie,{currentId:a,setCurrentId:r})})]})})})})]})},ue=(a(116),Object(s.e)(f,Object(s.d)(Object(s.a)(o.a))));c.a.render(Object(X.jsx)(i.a,{store:ue,children:Object(X.jsx)(le,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.3dfedf99.chunk.js.map
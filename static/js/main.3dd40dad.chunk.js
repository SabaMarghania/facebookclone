(this.webpackJsonpfacebookclone=this.webpackJsonpfacebookclone||[]).push([[0],{76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},80:function(e,t,s){},86:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){},93:function(e,t,s){},94:function(e,t,s){},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){"use strict";s.r(t);var c=s(3),a=s.n(c),n=s(25),i=s.n(n),o=(s(76),s(9)),r=(s(77),s(78),s(55)),l=s.n(r),j=s(56),d=s.n(j),m=s(34),b=s.n(m),u=s(35),h=s.n(u),p=s(36),O=s.n(p),x=s(57),f=s.n(x),g=s(115),v=s(58),N=s.n(v),_=s(59),A=s.n(_),y=s(60),k=s.n(y),w=s(61),C=s.n(w),R=s(2),S=Object(c.createContext)(),I=function(e){var t=e.reducer,s=e.initialState,a=e.children;return Object(R.jsx)(S.Provider,{value:Object(c.useReducer)(t,s),children:a})},M=function(){return Object(c.useContext)(S)},L=(s(80),s(45)),G=s.n(L);function D(e){var t=e.open,s=e.children,c=e.onClose;return t?Object(R.jsx)(R.Fragment,{children:Object(R.jsx)("div",{className:"Modal__cont",children:Object(R.jsxs)("div",{className:"Modal",children:[Object(R.jsx)("button",{onClick:c,children:Object(R.jsx)(G.a,{style:{color:"#095fcf"}})}),s]})})}):null}var P=s(37),Z=s.n(P);s(86);var Q=function(e){var t=e.username,s=e.messages,a=e.profile,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){n.current.scrollIntoView({behavior:"smooth"})}),[s]),Object(R.jsx)("div",{className:"ChatMessage",children:Object(R.jsxs)("div",{className:"Chatmessage__profile",children:[Object(R.jsx)(g.a,{style:{width:30,height:30},src:a}),Object(R.jsxs)("div",{className:"Chatmessage__info",children:[Object(R.jsx)("h4",{className:"Chatmessage__text",children:t}),Object(R.jsx)("p",{children:s}),Object(R.jsx)("div",{ref:n})]})]})})},B=s(19),E=(B.a.initializeApp({apiKey:"AIzaSyDIaUkuLyT34k1RhGJ1NMW60xzWiLhg-SY",authDomain:"facebook-clone-5691b.firebaseapp.com",projectId:"facebook-clone-5691b",storageBucket:"facebook-clone-5691b.appspot.com",messagingSenderId:"918304272155",appId:"1:918304272155:web:816428fb432b29dc77edbe",measurementId:"G-C1699CT4LP"}),B.a.firestore()),V=B.a.auth(),Y=new B.a.auth.GoogleAuthProvider,T=E;var z=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),i=Object(o.a)(n,2),r=i[0],j=i[1],m=Object(c.useState)(""),u=Object(o.a)(m,2),p=u[0],x=u[1],v=M(),_=Object(o.a)(v,2),y=_[0].user;return _[1],Object(c.useEffect)((function(){T.collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(R.jsxs)("div",{className:"header",children:[Object(R.jsxs)("div",{className:"header__left",children:[Object(R.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(R.jsxs)("div",{className:"header__input",children:[Object(R.jsx)(l.a,{style:{color:"gray",paddingLeft:10}}),Object(R.jsx)("input",{type:"text",placeholder:"\u10eb\u10d4\u10d1\u10dc\u10d0 Facebook-\u10d6\u10d4"})]})]}),Object(R.jsxs)("div",{className:"header__mid",children:[Object(R.jsx)("div",{className:"header__opt-active",children:Object(R.jsx)(d.a,{fontSize:"large"})}),Object(R.jsx)("div",{className:"header__opt",children:Object(R.jsx)(b.a,{fontSize:"large"})}),Object(R.jsx)("div",{className:"header__opt",children:Object(R.jsx)(h.a,{fontSize:"large"})}),Object(R.jsx)("div",{className:"header__opt",children:Object(R.jsx)(O.a,{fontSize:"large"})}),Object(R.jsx)("div",{className:"header__opt",children:Object(R.jsx)(f.a,{fontSize:"large"})})]}),Object(R.jsxs)("div",{className:"header__right",children:[Object(R.jsxs)("div",{className:"header__profile",children:[Object(R.jsx)(g.a,{src:y.photoURL,style:{width:30,height:30}}),Object(R.jsx)("p",{children:y.displayName})]}),Object(R.jsx)("div",{className:"header__icon",children:Object(R.jsx)(N.a,{})}),Object(R.jsx)("div",{className:"header__icon",onClick:function(){return a(!0)},children:Object(R.jsx)(A.a,{})}),Object(R.jsx)("div",{className:"header__icon",children:Object(R.jsx)(k.a,{})}),Object(R.jsx)("div",{className:"header__icon",children:Object(R.jsx)(C.a,{})})]}),Object(R.jsx)(D,{open:s,onClose:function(){return a(!1)},children:Object(R.jsxs)("div",{className:"Chat",children:[Object(R.jsxs)("div",{className:"Chat__Top",children:[Object(R.jsx)(g.a,{style:{width:30,height:30},src:y.photoURL}),Object(R.jsx)("p",{children:y.displayName})]}),Object(R.jsx)("div",{className:"Chat__messages",children:r.map((function(e){return Object(R.jsx)(Q,{profile:e.data.profile,messages:e.data.message,timestamp:e.data.timestamp,username:e.data.username},e.id)}))}),Object(R.jsxs)("div",{className:"header__form",children:[Object(R.jsx)("input",{value:p,onChange:function(e){return x(e.target.value)},type:"text",placeholder:"Aa"}),p.length>0&&Object(R.jsx)(Z.a,{onClick:function(e){e.preventDefault(),T.collection("messages").add({timestamp:B.a.firestore.FieldValue.serverTimestamp(),message:p,profile:y.photoURL,username:y.displayName}),x("")},style:{color:"#095fcf",marginRight:20}})]})]})})]})};s(90),s(91);var U=function(e){var t=e.src,s=e.Icon,c=e.title;return Object(R.jsxs)("div",{className:"sidebarRow",children:[t&&Object(R.jsx)(g.a,{src:t}),s&&Object(R.jsx)(s,{className:"sidebarRow__icon"}),Object(R.jsx)("h2",{className:"sidebarRow__title",children:c})]})},X=s(62),F=s.n(X),H=s(63),W=s.n(H),K=s(64),q=s.n(K),J=s(65),$=s.n(J);var ee=function(){var e=M(),t=Object(o.a)(e,2),s=t[0].user;return t[1],Object(R.jsxs)("div",{className:"sidebar",children:[Object(R.jsx)(U,{src:s.photoURL,title:s.displayName}),Object(R.jsx)(U,{Icon:F.a,title:"COVID-19 - \u10e1\u10d0\u10d8\u10dc\u10e4\u10dd\u10e0\u10db\u10d0\u10ea\u10d8\u10dd \u10ea\u10d4\u10dc\u10e2\u10e0\u10d8"}),Object(R.jsx)(U,{Icon:b.a,title:"\u10db\u10d4\u10d2\u10dd\u10d1\u10e0\u10d4\u10d1\u10d8"}),Object(R.jsx)(U,{Icon:O.a,title:"\u10ef\u10d2\u10e3\u10e4\u10d4\u10d1\u10d8"}),Object(R.jsx)(U,{Icon:h.a,title:"\u10d5\u10d8\u10d3\u10d4\u10dd\u10d4\u10d1\u10d8"}),Object(R.jsx)(U,{Icon:W.a,title:"\u10d2\u10d5\u10d4\u10e0\u10d3\u10d4\u10d1\u10d8"}),Object(R.jsx)(U,{Icon:q.a,title:"\u10d5\u10d8\u10d3\u10d4\u10dd \u10d7\u10d0\u10db\u10d0\u10e8\u10d4\u10d1\u10d8"}),Object(R.jsx)(U,{Icon:$.a,title:"\u10db\u10d4\u10d2\u10dd\u10d1\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d8\u10d0"})]})},te=(s(92),s(93),s(67)),se=s.n(te),ce=s(66),ae=s.n(ce);var ne=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],l=i[1],j=M(),d=Object(o.a)(j,2),m=d[0].user;return d[1],Object(R.jsxs)("div",{className:"posts",children:[Object(R.jsxs)("div",{className:"posts__top",children:[Object(R.jsx)(g.a,{src:m.photoURL}),Object(R.jsxs)("form",{children:[Object(R.jsx)("input",{value:s,className:"posts__input",type:"text",placeholder:"Whats on your mind,".concat(m.displayName),onChange:function(e){return a(e.target.value)}}),Object(R.jsx)("input",{value:r,onChange:function(e){return l(e.target.value)},className:"posts__url",type:"text",placeholder:"Image URL "})]}),s.length>0&&Object(R.jsx)("button",{onClick:function(e){e.preventDefault(),T.collection("posts").add({message:s,timestamp:B.a.firestore.FieldValue.serverTimestamp(),profile:m.photoURL,name:m.displayName,image:r}),a(""),l("")},type:"submit",className:"data-btn",children:"Hidden btn"})]}),Object(R.jsxs)("div",{className:"posts__bottom",children:[Object(R.jsxs)("div",{className:"btn posts__right-btn",children:[Object(R.jsx)(ae.a,{style:{color:"red"}})," \u10de\u10d8\u10e0\u10d3\u10d0\u10de\u10d8\u10e0\u10d8 \u10d4\u10d7\u10d4\u10e0\u10d8"]}),Object(R.jsxs)("div",{className:"btn posts__left-btn",children:[Object(R.jsx)(se.a,{style:{color:"green"}})," \u10e4\u10dd\u10e2\u10dd/\u10d5\u10d8\u10d3\u10d4\u10dd"]})]})]})},ie=(s(94),s(41)),oe=s.n(ie),re=s(68),le=s.n(re),je=s(69),de=s.n(je);s(95);var me=function(e){var t=e.username,s=e.comment,c=e.profile;return Object(R.jsx)("div",{className:"MakeComment",children:Object(R.jsxs)("div",{className:"MakeComment__profile",children:[Object(R.jsx)(g.a,{style:{width:30,height:30},src:c}),Object(R.jsxs)("div",{className:"MakeComment__info",children:[Object(R.jsx)("h4",{className:"MakeComment__text",children:t}),Object(R.jsx)("p",{children:s})]})]})})};var be=function(e){var t=e.profile,s=e.image,a=e.name,n=e.timestamp,i=e.message,r=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(c.useReducer)((function(e){return!e}),e)}(!1),l=Object(o.a)(r,2),j=l[0],d=l[1],m=Object(c.useState)(!1),b=Object(o.a)(m,2),u=b[0],h=b[1],p=Object(c.useState)(0),O=Object(o.a)(p,2),x=O[0],f=O[1],v=j?"#197ed1":"gray",N=Object(c.useState)([]),_=Object(o.a)(N,2),A=_[0],y=_[1],k=Object(c.useState)(""),w=Object(o.a)(k,2),C=w[0],S=w[1],I=M(),L=Object(o.a)(I,2),G=L[0].user;return L[1],Object(c.useEffect)((function(){T.collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){y(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(R.jsxs)("div",{className:"MakePost",children:[Object(R.jsxs)("div",{className:"MakePost__top",children:[Object(R.jsx)(g.a,{src:t,className:"MakePost__avatar"}),Object(R.jsxs)("div",{className:"MakePost__topInfo",children:[Object(R.jsx)("h3",{children:a}),Object(R.jsx)("p",{children:new Date(null===n||void 0===n?void 0:n.toDate()).toTimeString()})]})]}),Object(R.jsx)("div",{className:"MakePost__bottom",children:Object(R.jsx)("p",{children:i})}),Object(R.jsx)("div",{className:"MakePost__image",children:Object(R.jsx)("img",{src:s,alt:""})}),x>0&&Object(R.jsxs)("div",{className:"MakePost__like-count",children:[Object(R.jsx)("div",{className:"MakePost__like-bg",children:Object(R.jsx)(oe.a,{style:{fontSize:14,color:"#fff"}})}),Object(R.jsxs)("p",{children:[x," Likes"]})]}),Object(R.jsxs)("div",{className:"MakePost__options",children:[Object(R.jsxs)("div",{onClick:function(){d(!0),f(j?0:x+1)},className:"MakePost__option",children:[Object(R.jsx)(oe.a,{style:{color:"".concat(v)}}),Object(R.jsx)("p",{style:{color:"".concat(v)},children:"Like"})]}),Object(R.jsxs)("div",{onClick:function(){return h(!0)},className:"MakePost__option",children:[Object(R.jsx)(le.a,{}),Object(R.jsx)("p",{children:"Comment"})]}),Object(R.jsxs)("div",{className:"MakePost__option",children:[Object(R.jsx)(de.a,{}),Object(R.jsx)("p",{children:"Share"})]})]}),Object(R.jsxs)("div",{children:[u&&Object(R.jsx)("div",{className:"MakePost__comments",children:A.map((function(e){return Object(R.jsx)(me,{profile:e.data.profile,comment:e.data.comment,timestamp:e.data.timestamp,username:e.data.username},e.id)}))}),u&&Object(R.jsxs)("div",{className:"MakePost__form",children:[Object(R.jsx)(g.a,{src:G.photoURL,className:"MakePost__avatar"}),Object(R.jsx)("input",{value:C,onChange:function(e){return S(e.target.value)},type:"text",placeholder:"\u10d3\u10d0\u10ec\u10d4\u10e0\u10d4\u10d7 \u10d9\u10dd\u10db\u10d4\u10dc\u10e2\u10d0\u10e0\u10d8..."}),C.length>0&&Object(R.jsx)(Z.a,{onClick:function(e){e.preventDefault(),T.collection("comments").add({timestamp:B.a.firestore.FieldValue.serverTimestamp(),comment:C,profile:G.photoURL,username:G.displayName}),S("")},style:{color:"#095fcf",marginRight:20}})]})]})]})};s(96);var ue=function(e){var t=e.src,s=e.name,c=e.profile;return Object(R.jsx)("div",{className:"StoriesRow",children:Object(R.jsxs)("div",{className:"StoriesRow__cont",children:[c&&Object(R.jsx)(g.a,{className:"StoriesRow__avatar",src:c}),t&&Object(R.jsx)("img",{className:"StoriesRow__img",src:t,alt:""}),Object(R.jsx)("p",{className:"StoriesRow__name",children:s})]})})};s(97);var he=function(){return Object(R.jsx)("div",{className:"StoriesRowCol",children:Object(R.jsxs)("div",{className:"StoriesRowCol__cont",children:[Object(R.jsx)(ue,{profile:"http://papers.co/wallpaper/papers.co-bj15-ilya-girl-face-anime-art-34-iphone6-plus-wallpaper.jpg",src:"https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg",name:"\u10dc\u10d0\u10dc\u10d8"}),Object(R.jsx)(ue,{profile:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MiB.svg/1200px-MiB.svg.png",src:"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/1997/B0011E7JBW_meninblack_UXSY1._V143581233_SX1080_.jpg",name:"Gio B"}),Object(R.jsx)(ue,{profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8y2Y7Gsnbg87nxp6L7AndkSDutwm_nKqgqA&usqp=CAU",src:"https://i.pinimg.com/236x/6f/18/e7/6f18e71e2a856190b082fae8a2b34590.jpg",name:"\u10d6\u10e3\u10e0\u10d0"}),Object(R.jsx)(ue,{profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezE0ZJcrtgkZF2_6QkBVD0WqzLuF8dybArkaNk0IhKV88iPThFbmBT26GaZ8lgfQjNW0&usqp=CAU",src:"https://i.pinimg.com/originals/87/07/90/87079055b55e4dab8117f6d580ec92d5.jpg",name:"\u10db\u10d0\u10e0\u10d8 \u10db\u10d0\u10e0\u10d8"}),Object(R.jsx)(ue,{profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiKV2kkpFzIzWA3XYqfNuEejnKNymEVuwa7VY2FQVO8agVT-hULHaU0L7thhvK3DxYDw&usqp=CAU",src:"https://www.mensjournal.com/wp-content/uploads/mf/back_muscle_main.jpg?w=900&h=506&crop=1&quality=86&strip=all&iswp=1",name:"Shredded"})]})})};var pe=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){T.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(R.jsxs)("div",{className:"stories",children:[Object(R.jsx)("div",{className:"stories__cont",children:Object(R.jsx)(he,{})}),Object(R.jsx)(ne,{}),s.map((function(e){return Object(R.jsx)(be,{profile:e.data.profile,message:e.data.message,timestamp:e.data.timestamp,name:e.data.name,image:e.data.image},e.id)}))]})},Oe=s(114),xe=(s(98),s(42)),fe="SET_USER",ge=function(e,t){switch(console.log(t),t.type){case fe:return Object(xe.a)(Object(xe.a)({},e),{},{user:t.user});default:return e}};var ve=function(){var e=M(),t=Object(o.a)(e,2),s=(t[0],t[1]);return Object(R.jsxs)("div",{className:"login",children:[Object(R.jsxs)("div",{className:"login__logo",children:[Object(R.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png",alt:""}),Object(R.jsx)("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""})]}),Object(R.jsx)(Oe.a,{type:"submit",onClick:function(){V.signInWithPopup(Y).then((function(e){s({type:fe,user:e.user}),console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign In"})]})};var Ne=function(){var e=M(),t=Object(o.a)(e,2),s=t[0].user;return t[1],Object(R.jsx)(R.Fragment,{children:s?Object(R.jsxs)("div",{className:"app",children:[Object(R.jsx)(z,{}),Object(R.jsxs)("div",{className:"app__body",children:[Object(R.jsx)(ee,{}),Object(R.jsx)(pe,{})]})]}):Object(R.jsx)(ve,{})})},_e=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,116)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(I,{initialState:{user:null},reducer:ge,children:Object(R.jsx)(Ne,{})})}),document.getElementById("root")),_e()}},[[99,1,2]]]);
//# sourceMappingURL=main.3dd40dad.chunk.js.map
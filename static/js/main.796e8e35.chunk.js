(this.webpackJsonpfacebookclone=this.webpackJsonpfacebookclone||[]).push([[0],{77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){},87:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(25),i=c.n(a),o=(c(77),c(13)),j=(c(78),c(79),c(53)),r=c.n(j),l=c(54),d=c.n(l),b=c(34),h=c.n(b),_=c(35),p=c.n(_),u=c(36),m=c.n(u),O=c(55),f=c.n(O),x=c(118),v=c(56),g=c.n(v),A=c(57),N=c.n(A),w=c(58),y=c.n(w),k=c(59),Z=c.n(k),C=c(3),I=Object(s.createContext)(),R=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(C.jsx)(I.Provider,{value:Object(s.useReducer)(t,c),children:n})},D=function(){return Object(s.useContext)(I)},G=(c(81),c(43)),S=c.n(G);function M(e){var t=e.open,c=e.children,s=e.onClose;return t?Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"Modal__cont",children:Object(C.jsxs)("div",{className:"Modal",children:[Object(C.jsx)("button",{onClick:s,children:Object(C.jsx)(S.a,{style:{color:"#095fcf"}})}),c]})})}):null}var Q=c(60),E=c.n(Q);c(87);var B=function(e){e.timestamp;var t=e.username,c=e.messages,s=e.profile,n=D();return Object(o.a)(n,1)[0].user,Object(C.jsx)("div",{className:"ChatMessage",children:Object(C.jsxs)("div",{className:"Chatmessage__profile",children:[Object(C.jsx)(x.a,{style:{width:30,height:30},src:s}),Object(C.jsx)("p",{children:t}),Object(C.jsx)("p",{children:c})]})})},P=c(22),L=(P.a.initializeApp({apiKey:"AIzaSyDIaUkuLyT34k1RhGJ1NMW60xzWiLhg-SY",authDomain:"facebook-clone-5691b.firebaseapp.com",projectId:"facebook-clone-5691b",storageBucket:"facebook-clone-5691b.appspot.com",messagingSenderId:"918304272155",appId:"1:918304272155:web:816428fb432b29dc77edbe",measurementId:"G-C1699CT4LP"}),P.a.firestore()),T=P.a.auth(),X=new P.a.auth.GoogleAuthProvider,F=L;var H=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(o.a)(a,2),j=i[0],l=i[1],b=Object(s.useState)(""),_=Object(o.a)(b,2),u=_[0],O=_[1],v=D(),A=Object(o.a)(v,2),w=A[0].user;return A[1],Object(s.useEffect)((function(){F.collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(C.jsxs)("div",{className:"header",children:[Object(C.jsxs)("div",{className:"header__left",children:[Object(C.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(C.jsxs)("div",{className:"header__input",children:[Object(C.jsx)(r.a,{style:{color:"gray",paddingLeft:10}}),Object(C.jsx)("input",{type:"text",placeholder:"\u10eb\u10d4\u10d1\u10dc\u10d0 Facebook-\u10d6\u10d4"})]})]}),Object(C.jsxs)("div",{className:"header__mid",children:[Object(C.jsx)("div",{className:"header__opt-active",children:Object(C.jsx)(d.a,{fontSize:"large"})}),Object(C.jsx)("div",{className:"header__opt",children:Object(C.jsx)(h.a,{fontSize:"large"})}),Object(C.jsx)("div",{className:"header__opt",children:Object(C.jsx)(p.a,{fontSize:"large"})}),Object(C.jsx)("div",{className:"header__opt",children:Object(C.jsx)(m.a,{fontSize:"large"})}),Object(C.jsx)("div",{className:"header__opt",children:Object(C.jsx)(f.a,{fontSize:"large"})})]}),Object(C.jsxs)("div",{className:"header__right",children:[Object(C.jsxs)("div",{className:"header__profile",children:[Object(C.jsx)(x.a,{src:w.photoURL,style:{width:30,height:30}}),Object(C.jsx)("p",{children:w.displayName})]}),Object(C.jsx)("div",{className:"header__icon",children:Object(C.jsx)(g.a,{})}),Object(C.jsx)("div",{className:"header__icon",onClick:function(){return n(!0)},children:Object(C.jsx)(N.a,{})}),Object(C.jsx)("div",{className:"header__icon",children:Object(C.jsx)(y.a,{})}),Object(C.jsx)("div",{className:"header__icon",children:Object(C.jsx)(Z.a,{})})]}),Object(C.jsx)(M,{open:c,onClose:function(){return n(!1)},children:Object(C.jsxs)("div",{className:"Chat",children:[Object(C.jsxs)("div",{className:"Chat__Top",children:[Object(C.jsx)(x.a,{style:{width:30,height:30},src:w.photoURL}),Object(C.jsx)("p",{children:w.displayName})]}),Object(C.jsx)("div",{className:"Chat__messages",children:j.map((function(e){return Object(C.jsx)(B,{profile:e.data.profile,messages:e.data.message,timestamp:e.data.timestamp,username:e.data.username},e.data.id)}))}),Object(C.jsxs)("form",{className:"Chat__form",children:[Object(C.jsx)("input",{value:u,onChange:function(e){return O(e.target.value)},type:"text",placeholder:"Aa"}),Object(C.jsx)(E.a,{onClick:function(e){e.preventDefault(),F.collection("messages").add({timestamp:P.a.firestore.FieldValue.serverTimestamp(),message:u,profile:w.photoURL,username:w.displayName}),O("")},style:{color:"#095fcf",marginRight:20}})]})]})})]})};c(91),c(92);var Y=function(e){var t=e.src,c=e.Icon,s=e.title;return Object(C.jsxs)("div",{className:"sidebarRow",children:[t&&Object(C.jsx)(x.a,{src:t}),c&&Object(C.jsx)(c,{className:"sidebarRow__icon"}),Object(C.jsx)("h2",{className:"sidebarRow__title",children:s})]})},z=c(61),V=c.n(z),U=c(62),q=c.n(U),J=c(63),K=c.n(J),W=c(64),$=c.n(W);var ee=function(){var e=D(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(C.jsxs)("div",{className:"sidebar",children:[Object(C.jsx)(Y,{src:c.photoURL,title:c.displayName}),Object(C.jsx)(Y,{Icon:V.a,title:"COVID-19 - \u10e1\u10d0\u10d8\u10dc\u10e4\u10dd\u10e0\u10db\u10d0\u10ea\u10d8\u10dd \u10ea\u10d4\u10dc\u10e2\u10e0\u10d8"}),Object(C.jsx)(Y,{Icon:h.a,title:"\u10db\u10d4\u10d2\u10dd\u10d1\u10e0\u10d4\u10d1\u10d8"}),Object(C.jsx)(Y,{Icon:m.a,title:"\u10ef\u10d2\u10e3\u10e4\u10d4\u10d1\u10d8"}),Object(C.jsx)(Y,{Icon:p.a,title:"\u10d5\u10d8\u10d3\u10d4\u10dd\u10d4\u10d1\u10d8"}),Object(C.jsx)(Y,{Icon:q.a,title:"\u10d2\u10d5\u10d4\u10e0\u10d3\u10d4\u10d1\u10d8"}),Object(C.jsx)(Y,{Icon:K.a,title:"\u10d5\u10d8\u10d3\u10d4\u10dd \u10d7\u10d0\u10db\u10d0\u10e8\u10d4\u10d1\u10d8"}),Object(C.jsx)(Y,{Icon:$.a,title:"\u10db\u10d4\u10d2\u10dd\u10d1\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d8\u10d0"})]})},te=(c(93),c(94),c(66)),ce=c.n(te),se=c(65),ne=c.n(se);var ae=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(o.a)(a,2),j=i[0],r=i[1],l=D(),d=Object(o.a)(l,2),b=d[0].user;return d[1],Object(C.jsxs)("div",{className:"posts",children:[Object(C.jsxs)("div",{className:"posts__top",children:[Object(C.jsx)(x.a,{src:b.photoURL}),Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{value:c,className:"posts__input",type:"text",placeholder:"Whats on your mind,".concat(b.displayName),onChange:function(e){return n(e.target.value)}}),Object(C.jsx)("input",{value:j,onChange:function(e){return r(e.target.value)},className:"posts__url",type:"text",placeholder:"Image URL "})]}),c.length>0&&Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),F.collection("posts").add({message:c,timestamp:P.a.firestore.FieldValue.serverTimestamp(),profile:b.photoURL,name:b.displayName,image:j}),n(""),r("")},type:"submit",className:"data-btn",children:"Hidden btn"})]}),Object(C.jsxs)("div",{className:"posts__bottom",children:[Object(C.jsxs)("div",{className:"btn posts__right-btn",children:[Object(C.jsx)(ne.a,{style:{color:"red"}})," \u10de\u10d8\u10e0\u10d3\u10d0\u10de\u10d8\u10e0\u10d8 \u10d4\u10d7\u10d4\u10e0\u10d8"]}),Object(C.jsxs)("div",{className:"btn posts__left-btn",children:[Object(C.jsx)(ce.a,{style:{color:"green"}})," \u10e4\u10dd\u10e2\u10dd/\u10d5\u10d8\u10d3\u10d4\u10dd"]})]})]})},ie=(c(95),c(67)),oe=c.n(ie),je=c(68),re=c.n(je),le=c(70),de=c.n(le),be=c(69),he=c.n(be),_e=c(116);var pe=function(e){var t=e.profile,c=e.image,s=e.name,n=e.timestamp,a=e.message;return Object(C.jsxs)("div",{className:"MakePost",children:[Object(C.jsxs)("div",{className:"MakePost__top",children:[Object(C.jsx)(x.a,{src:t,className:"MakePost__avatar"}),Object(C.jsxs)("div",{className:"MakePost__topInfo",children:[Object(C.jsx)("h3",{children:s}),Object(C.jsx)("p",{children:new Date(null===n||void 0===n?void 0:n.toDate()).toUTCString()})]})]}),Object(C.jsx)("div",{className:"MakePost__bottom",children:Object(C.jsx)("p",{children:a})}),Object(C.jsx)("div",{className:"MakePost__image",children:Object(C.jsx)("img",{src:c,alt:""})}),Object(C.jsxs)("div",{className:"MakePost__options",children:[Object(C.jsxs)("div",{className:"MakePost__option",children:[Object(C.jsx)(oe.a,{}),Object(C.jsx)("p",{children:"Like"})]}),Object(C.jsxs)("div",{className:"MakePost__option",children:[Object(C.jsx)(re.a,{}),Object(C.jsx)("p",{children:"Comment"})]}),Object(C.jsxs)("div",{className:"MakePost__option",children:[Object(C.jsx)(he.a,{}),Object(C.jsx)("p",{children:"Share"})]}),Object(C.jsxs)("div",{className:"MakePost__option",children:[Object(C.jsx)(de.a,{}),Object(C.jsx)(_e.a,{})]})]})]})};c(96);var ue=function(e){var t=e.src,c=e.name,s=e.profile;return Object(C.jsx)("div",{className:"StoriesRow",children:Object(C.jsxs)("div",{className:"StoriesRow__cont",children:[s&&Object(C.jsx)(x.a,{className:"StoriesRow__avatar",src:s}),t&&Object(C.jsx)("img",{className:"StoriesRow__img",src:t,alt:""}),Object(C.jsx)("p",{className:"StoriesRow__name",children:c})]})})};c(97);var me=function(){return Object(C.jsx)("div",{className:"StoriesRowCol",children:Object(C.jsxs)("div",{className:"StoriesRowCol__cont",children:[Object(C.jsx)(ue,{profile:"https://scontent.fkut1-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/16386973_655335301341630_1546275228633511865_n.jpg?_nc_cat=104&ccb=3&_nc_sid=7206a8&_nc_eui2=AeGr3IzGBpkzIbVKGg127H-qvE3MD4c1mUO8TcwPhzWZQ1TugEZE8fjHbF7chh66W06Bp61p7SHgQS9zXMi4c1ur&_nc_ohc=P48MYOTvikMAX__SOAQ&_nc_ht=scontent.fkut1-1.fna&tp=27&oh=ce78c9ad33e0191b3e5cfe7d33cf395b&oe=6061B515",src:"https://scontent.fkut1-1.fna.fbcdn.net/v/l/t1.0-0/s280x280/155335944_1687705644771252_6683301852921047751_o.jpg?_nc_cat=109&ccb=3&_nc_sid=365331&_nc_eui2=AeF8OzCju0arUAZuTEYrkomwC6qAAPQB_tELqoAA9AH-0fV2DiADgweqonZIAJqnlX_9xZDHdnoMuTO87uevNRXH&_nc_ohc=-h6MqBk3q8gAX-eD2EP&_nc_ht=scontent.fkut1-1.fna&tp=7&oh=92e31ccc2dc346c819182864fd7c7da2&oe=605FFA60",name:"\u10dc\u10d0\u10dc\u10d8"}),Object(C.jsx)(ue,{profile:"https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/150681791_193180572560157_769109451690534022_n.jpg?_nc_cat=107&ccb=3&_nc_sid=7206a8&_nc_eui2=AeGNqTqFI4WQUgPIEQ9G5QJDRQaFDDt_4etFBoUMO3_h61ex9g1VuNZ3iuj-c2OKeIxgd9iLDj2sNwGTZ8rRCaHn&_nc_ohc=oypiDZBh41UAX_FMuGg&_nc_ht=scontent.ftbs5-1.fna&tp=27&oh=565c7612176eff18e8ca1069d3229548&oe=6060FAA0",src:"https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-0/s280x280/155437758_200868645124683_6734126836673045505_o.jpg?_nc_cat=104&ccb=3&_nc_sid=365331&_nc_eui2=AeEBuauEIRHZyoVWxp7CzBT2k-qmBSy_teOT6qYFLL-14zmfhh74Zqn9JBKP9zjTWnvdvHzlZ6S_JkZS8BEbTzaY&_nc_ohc=_gZlDyJ6oDIAX9sIkvf&_nc_ht=scontent.ftbs5-1.fna&tp=7&oh=130d124946556829efaeb4fe8eecc289&oe=60617E5B",name:"Gio B"}),Object(C.jsx)(ue,{profile:"https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/144276914_266141978201662_3486616313933204346_n.jpg?_nc_cat=100&ccb=3&_nc_sid=7206a8&_nc_eui2=AeHJpoBFn7ofBgGeh7PncOEKgs0ymjtE7piCzTKaO0TumDcKEcqMGRthbmZFmM5BW8d8CiG1h0Us6ymuk8wzm0rx&_nc_ohc=ztpvoeFbXRIAX9-_VRG&_nc_ht=scontent.ftbs5-1.fna&tp=27&oh=d498e78217f228e27ddc2a6f05868067&oe=605FF71D",src:"https://scontent.ftbs5-1.fna.fbcdn.net/v/t15.5256-10/s280x280/143350536_282412689907924_2080934000778215915_n.jpg?_nc_cat=100&ccb=3&_nc_sid=1055be&_nc_eui2=AeG6Q4_u4soaUgGJYw1d47oR71vN7-jKnjTvW83v6MqeNGnCVud4mZfY93sS9p_SiKtLfWBakw5vSqRUsCvM78z_&_nc_ohc=MC5hg4FreQAAX-SMJDu&_nc_ht=scontent.ftbs5-1.fna&tp=7&oh=25777a67a4cf08acd0ec15ee4ac8befc&oe=606087F2",name:"\u10d6\u10e3\u10e0\u10d0"}),Object(C.jsx)(ue,{profile:"https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.0.40.40a/p40x40/152795077_793528704849361_2468431236263985860_o.jpg?_nc_cat=1&ccb=3&_nc_sid=1eb0c7&_nc_eui2=AeEcxTSM45NdvybGU_tk8Mc7Qj2OHZ12VQNCPY4dnXZVA88tUZQagT_7NDjZMbqvyAh6ojbX0hPH32JjG5ZT2CJI&_nc_ohc=wjmc6Njxw-QAX9OZiia&_nc_ht=scontent.ftbs5-1.fna&tp=27&oh=b05fd93ca723ecd3271677b4a5377329&oe=606040E1",src:"https://scontent.ftbs5-2.fna.fbcdn.net/v/t15.5256-10/p160x160/143498324_1315546742152820_6552041643625765005_n.jpg?_nc_cat=105&ccb=3&_nc_sid=1055be&_nc_eui2=AeEtW6qqDcLgIsE837WHn9vA6HnCRjYJ4YjoecJGNgnhiOF8BbRgcaDbLSbYr37xO-89235OhzVhlF8jJQK-BUKP&_nc_ohc=dDLEV5s2qqwAX8Q_qxo&_nc_ht=scontent.ftbs5-2.fna&tp=6&oh=22b1d8b5462979549f4fe7bc3d863911&oe=60609F14",name:"\u10db\u10d0\u10e0\u10d8 \u10db\u10d0\u10e0\u10d8"}),Object(C.jsx)(ue,{profile:"https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/10995634_10152874720561762_3518711382066377738_n.jpg?_nc_cat=1&ccb=3&_nc_sid=1eb0c7&_nc_eui2=AeEJu1wlpaGIK_xa1BmRn1covVA7XY5ba929UDtdjltr3c914wKhrF6_ckGVdM0UTwDpXX6P42UZ8gStHkCUCMOZ&_nc_ohc=N1y4g-z_9S0AX-Z2IOn&_nc_ht=scontent.ftbs5-1.fna&tp=27&oh=8fa304095b160e339a2a509e0bd4ce69&oe=605F6803",src:"https://scontent.ftbs5-1.fna.fbcdn.net/v/t15.5256-10/s280x280/152820330_10158084492321762_1214784758609234910_n.jpg?_nc_cat=1&ccb=3&_nc_sid=1055be&_nc_eui2=AeEZthPMyzV8dwoqITTh4wEloV09_Y_R94ihXT39j9H3iBsJYPscoZd9iQGiig0DY57pkAXvvWspO1vZ4efeNmiK&_nc_ohc=wGehSiqv8wAAX-1nl7O&_nc_ht=scontent.ftbs5-1.fna&tp=7&oh=ee8f8096b374c56c7553eb78028f2bb3&oe=60624AF0",name:"Shredded"})]})})};var Oe=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){F.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(C.jsxs)("div",{className:"stories",children:[Object(C.jsx)("div",{className:"stories__cont",children:Object(C.jsx)(me,{})}),Object(C.jsx)(ae,{}),c.map((function(e){return Object(C.jsx)(pe,{profile:e.data.profile,message:e.data.message,timestamp:e.data.timestamp,name:e.data.name,image:e.data.image},e.data.id)}))]})},fe=c(117),xe=(c(98),c(40)),ve="SET_USER",ge=function(e,t){switch(console.log(t),t.type){case ve:return Object(xe.a)(Object(xe.a)({},e),{},{user:t.user});default:return e}};var Ae=function(){var e=D(),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(C.jsxs)("div",{className:"login",children:[Object(C.jsxs)("div",{className:"login__logo",children:[Object(C.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png",alt:""}),Object(C.jsx)("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""})]}),Object(C.jsx)(fe.a,{type:"submit",onClick:function(){T.signInWithPopup(X).then((function(e){c({type:ve,user:e.user}),console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign In"})]})};var Ne=function(){var e=D(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(C.jsx)(C.Fragment,{children:c?Object(C.jsxs)("div",{className:"app",children:[Object(C.jsx)(H,{}),Object(C.jsxs)("div",{className:"app__body",children:[Object(C.jsx)(ee,{}),Object(C.jsx)(Oe,{})]})]}):Object(C.jsx)(Ae,{})})},we=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(R,{initialState:{user:null},reducer:ge,children:Object(C.jsx)(Ne,{})})}),document.getElementById("root")),we()}},[[99,1,2]]]);
//# sourceMappingURL=main.796e8e35.chunk.js.map
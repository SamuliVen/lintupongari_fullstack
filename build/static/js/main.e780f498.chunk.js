(this.webpackJsonplintubongari=this.webpackJsonplintubongari||[]).push([[0],{54:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(28),i=n.n(a),c=n(10),r=n.n(c),s=n(12),j=n(8),u=n(1),o=n(14),l=n(2),b=n(9),d=n.n(b),h="/api/lintudb/havainto",O=null,x={getAll:function(){return d.a.get("/api/lintudb/").then((function(t){return t.data}))},getHavainto:function(){return d.a.get(h).then((function(t){return t.data}))},getLintu:function(){return d.a.get("/api/lintudb/lintu").then((function(t){return t.data}))},getUser:function(){return d.a.get("/api/lintudb/user").then((function(t){return t.data}))},createHavainto:function(){var t=Object(s.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:O}},t.next=3,d.a.post(h,e,n);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updateHavainto:function(t,e){return d.a.put("".concat(h,"/").concat(t),e).then((function(t){return t.data}))},removeHavainto:function(t){return d.a.delete("".concat(h,"/").concat(t)).then((function(t){return t.data}))},setToken:function(t){O="bearer ".concat(t)}},v=n(0),p=function(t){var e=t.havaintoList,n=t.deleteHavainto;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:" Havainnot "}),Object(v.jsx)("ul",{children:e.map((function(t){return Object(v.jsx)("div",{className:"havainto",children:Object(v.jsxs)("li",{children:[Object(v.jsxs)("h3",{children:["Laji: ",t.laji]}),Object(v.jsxs)("p",{children:[" M\xe4\xe4r\xe4: ",t.maara]}),Object(v.jsxs)("p",{children:[" Paikkakunta: ",t.kunta," ",Object(v.jsx)("br",{}),"Paikka: ",t.paikka,Object(v.jsx)("br",{}),"Lis\xe4tiedot: ",t.lisatiedot]}),Object(v.jsx)("p",{children:"Havainnoija: "}),Object(v.jsx)("button",{className:"btn",children:"Muokkaa havaintoa"}),Object(v.jsx)("button",{className:"btn",onClick:function(){return n(t)},children:"Poista havainto"}),Object(v.jsx)("button",{className:"btn",children:"Tulosta havainto"})]})})}))})]})},f={login:function(){var t=Object(s.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.post("/api/login",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(){return Object(v.jsxs)("div",{className:"Login-laatikko",children:[Object(v.jsx)("h2",{children:"Rekister\xf6idy"}),Object(v.jsxs)("form",{children:[Object(v.jsxs)("label",{children:[Object(v.jsx)("p",{children:"Username"}),Object(v.jsx)("input",{type:"text"})]}),Object(v.jsxs)("label",{children:[Object(v.jsx)("p",{children:"Password"}),Object(v.jsx)("input",{type:"password"})]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"submit",children:"Submit"})})]})]})},m=function(t){var e=t.lintuList;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:" Lintutaulu "}),e.map((function(t,e){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"lintu",children:[Object(v.jsxs)("h3",{children:["Laji: ",t.laji]}),Object(v.jsxs)("p",{children:["Tieteellinen nimi: ",t.tieteellinenNimi]}),Object(v.jsx)("img",{src:t.kuvaWikipediastaAPI,className:"img",style:{width:300},alt:t.laji}),Object(v.jsxs)("p",{children:["Lahko:",t.lahko," ",Object(v.jsx)("br",{}),"Heimo: ",t.heimo," ",Object(v.jsx)("br",{}),"Suku: ",t.suku]}),Object(v.jsxs)("p",{children:["Elinvoimaisuus: ",t.elinvoimaisuus]})]})},e)}))]})},k=(n(54),function(){var t=Object(u.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],i=Object(u.useState)([]),c=Object(j.a)(i,2),b=c[0],d=c[1],h=Object(u.useState)(),O=Object(j.a)(h,2),k=O[0],w=O[1],S=Object(u.useState)(),L=Object(j.a)(S,2),y=L[0],N=L[1],H=Object(u.useState)(),C=Object(j.a)(H,2),P=C[0],T=C[1],E=Object(u.useState)(),U=Object(j.a)(E,2),I=U[0],J=U[1],A=Object(u.useState)(),M=Object(j.a)(A,2),D=M[0],R=M[1],z=Object(u.useState)(),B=Object(j.a)(z,2),K=B[0],W=B[1],q=Object(u.useState)(""),F=Object(j.a)(q,2),G=F[0],Q=F[1],V=Object(u.useState)(""),X=Object(j.a)(V,2),Y=X[0],Z=X[1],$=Object(u.useState)(null),_=Object(j.a)($,2),tt=_[0],et=_[1];Object(u.useEffect)((function(){x.getHavainto().then((function(t){a(t)}))}),[]),Object(u.useEffect)((function(){x.getLintu().then((function(t){d(t)}))}),[]),Object(u.useEffect)((function(){var t=window.localStorage.getItem("loggedNoteappUser");if(t){var e=JSON.parse(t);et(e),x.setToken(e.token)}}),[]);var nt=function(t){t.preventDefault();var e={laji:k,maara:y,kunta:P,paikka:I,lisatiedot:D};x.createHavainto(e).then((function(t){a(n.concat(t)),w(""),N(""),T(""),J(""),R(""),W("")}))},at=function(t){w(t.target.value)},it=function(t){N(t.target.value)},ct=function(t){T(t.target.value)},rt=function(t){J(t.target.value)},st=function(t){W(t.target.value)},jt=function(t){R(t.target.value)},ut=function(){var t=Object(s.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,f.login({username:G,password:Y});case 4:n=t.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(n)),x.setToken(n.token),et(n),Q(""),Z(""),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsx)(o.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Lintupongari"}),Object(v.jsxs)("ul",{className:"Links",children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/register",children:"Register"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/havainnot",children:"Havainnot"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/linnut",children:"Linnut"})})]}),Object(v.jsxs)("div",{className:"content",children:[null===tt?Object(v.jsxs)("form",{onSubmit:ut,children:[Object(v.jsxs)("div",{children:["username",Object(v.jsx)("input",{type:"text",value:G,name:"Username",onChange:function(t){var e=t.target;return Q(e.value)}})]}),Object(v.jsxs)("div",{children:["password",Object(v.jsx)("input",{type:"password",value:Y,name:"Password",onChange:function(t){var e=t.target;return Z(e.value)}})]}),Object(v.jsx)("button",{type:"submit",children:"login"})]}):Object(v.jsxs)("div",{children:[Object(v.jsxs)("p",{children:[tt.name," logged in"]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"Lis\xe4\xe4 uusi havainto:"}),Object(v.jsxs)("form",{onSubmit:nt,className:"lintuform",children:[Object(v.jsxs)("div",{children:["Laji: ",Object(v.jsx)("input",{value:k,onChange:at})]}),Object(v.jsxs)("div",{children:["M\xe4\xe4r\xe4: ",Object(v.jsx)("input",{value:y,onChange:it})]}),Object(v.jsxs)("div",{children:["P\xe4iv\xe4m\xe4\xe4r\xe4: ",Object(v.jsx)("input",{value:K,onChange:st})]}),Object(v.jsxs)("div",{children:["Kunta: ",Object(v.jsx)("input",{value:P,onChange:ct})]}),Object(v.jsxs)("div",{children:["Paikka: ",Object(v.jsx)("input",{value:I,onChange:rt})]}),Object(v.jsxs)("div",{children:["Lis\xe4tiedot: ",Object(v.jsx)("input",{value:D,onChange:jt})]}),Object(v.jsx)("div",{children:"Havainnoija:"}),Object(v.jsx)("button",{type:"submit",children:"Tallenna"}),Object(v.jsx)("button",{type:"reset",children:"Tyhjenn\xe4"})]})]})]}),Object(v.jsx)(l.a,{path:"/register",children:Object(v.jsx)(g,{})}),Object(v.jsx)(l.a,{path:"/havainnot",children:Object(v.jsx)(p,{havaintoList:n,deleteHavainto:function(t){window.confirm("Poista "+t.laji+"?")&&x.removeHavainto(t.id).then((function(e){a(n.filter((function(e){return e.id!==t.id})))}))}})}),Object(v.jsx)(l.a,{path:"/linnut",children:Object(v.jsx)(m,{lintuList:b})})]})]})})}),Object(v.jsx)("div",{})]})});i.a.render(Object(v.jsx)(k,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.e780f498.chunk.js.map
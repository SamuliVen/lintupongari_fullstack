(this.webpackJsonplintubongari=this.webpackJsonplintubongari||[]).push([[0],{54:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(28),i=n.n(a),c=n(5),s=n.n(c),r=n(11),u=n(3),l=n(1),o=n.n(l),j=n(14),d=n(2),b=n(9),h=n.n(b),O="/api/lintudb/havainto",v="/api/lintudb/lintu",p="/api/lintudb/user",x=null,f=function(){var t=Object(r.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/api/wiki?haku="+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g={getAll:function(){return h.a.get("/api/lintudb/").then((function(t){return t.data}))},getHavainto:function(){return h.a.get(O).then((function(t){return t.data}))},getLintu:function(){return h.a.get(v).then((function(t){return t.data}))},getUser:function(){return h.a.get(p).then((function(t){return t.data}))},createUser:function(){var t=Object(r.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post(p,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createHavainto:function(){var t=Object(r.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:x}},t.next=3,h.a.post(O,e,n);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createLintu:function(){var t=Object(r.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post(v,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updateHavainto:function(t,e){return h.a.put("".concat(O,"/").concat(t),e).then((function(t){return t.data}))},removeHavainto:function(t){return h.a.delete("".concat(O,"/").concat(t)).then((function(t){return t.data}))},setToken:function(t){x="bearer ".concat(t)},getWikiHaku:f},m=n(0),k=o.a.forwardRef((function(t,e){var n=Object(l.useState)(!1),a=Object(u.a)(n,2),i=a[0],c=a[1],s={display:i?"none":""},r={display:i?"":"none"},o=function(){c(!i)};return Object(l.useImperativeHandle)(e,(function(){return{toggleVisibility:o}})),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{style:r,children:[t.children,Object(m.jsx)("button",{className:"btn",onClick:o,children:"Peruuta"})]}),Object(m.jsx)("div",{style:s,children:Object(m.jsx)("button",{className:"btn",onClick:o,children:t.buttonLabel})})]})})),w=function(t){var e=t.user,n=t.changeHavainto,a=t.havaintoList,i=t.deleteHavainto,c=t.printHavainto,s=t.changedmaara,r=t.handleUpdateMaaraChange,u=t.changedkunta,l=t.handleUpdateKuntaChange,o=t.changedpaikka,j=t.handleUpdatePaikkaChange,d=t.changedlisatiedot,b=t.handleUpdateTiedotChange;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"lintuOtsikko",children:" Havainnot "}),Object(m.jsx)("div",{className:"havainnot",children:a.map((function(t){return Object(m.jsx)("li",{style:{listStyleType:"none"},children:Object(m.jsxs)("div",{id:t.id,className:"havainto",children:[Object(m.jsxs)("h3",{children:["Laji: ",t.laji]}),Object(m.jsxs)("p",{children:[" M\xe4\xe4r\xe4: ",t.maara]}),Object(m.jsxs)("p",{children:[" ","Paikkakunta: ",t.kunta," ",Object(m.jsx)("br",{}),"Paikka: ",t.paikka,Object(m.jsx)("br",{}),"Lis\xe4tiedot: ",t.lisatiedot]}),Object(m.jsxs)("p",{children:["Havainnoija: ",t.user.username]}),Object(m.jsxs)("div",{children:[" ",null!==e?Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{buttonLabel:"Muokkaa havaintoa",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"P\xe4ivit\xe4 havainto"}),Object(m.jsxs)("form",{className:"changeForm",children:[Object(m.jsx)("table",{children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"M\xe4\xe4r\xe4:"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{value:s,onChange:r})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Kunta:"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{value:u,onChange:l})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Paikka:"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{value:o,onChange:j})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Lis\xe4tiedot:"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{value:d,onChange:b})})]})]})}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",className:"btn",onClick:function(){return n(t.id)},children:"Tallenna"}),Object(m.jsx)("button",{type:"reset",className:"btn",children:"Tyhjenn\xe4"})]})]})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn",onClick:function(){return i(t)},children:"Poista havainto"}),Object(m.jsx)("input",{type:"button",className:"btn",onClick:function(){return c(t.id)},value:"Tulosta havainto"})," "]}):Object(m.jsx)("div",{})]})]})},t.id)}))})]})},y={login:function(){var t=Object(r.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/api/login",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(t){var e=t.lintuList,n=function(t){return Object(m.jsxs)("div",{className:"lintu",children:[Object(m.jsxs)("h3",{children:["Laji: ",t.laji]}),Object(m.jsxs)("p",{children:["Tieteellinen nimi: ",t.tieteellinenNimi]}),Object(m.jsx)("img",{src:t.kuvaWikipediastaAPI,className:"img",alt:t.laji}),Object(m.jsxs)("p",{children:["Lahko: ",t.lahko," ",Object(m.jsx)("br",{}),"Heimo: ",t.heimo," ",Object(m.jsx)("br",{}),"Suku: ",t.suku]}),Object(m.jsxs)("p",{children:["Elinvoimaisuus: ",t.elinvoimaisuus]})]})};return Object(m.jsx)("div",{className:"lintutaulu",children:e.map((function(t,e){return Object(m.jsx)("div",{children:n(t)},e)}))})},N=(n(54),function(){var t=Object(l.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(l.useState)([]),c=Object(u.a)(i,2),o=c[0],b=c[1],h=Object(l.useState)([]),O=Object(u.a)(h,2),v=O[0],p=O[1],x=Object(l.useState)(""),f=Object(u.a)(x,2),N=f[0],S=f[1],C=Object(l.useState)(""),H=Object(u.a)(C,2),U=H[0],T=H[1],P=Object(l.useState)(""),I=Object(u.a)(P,2),M=I[0],E=I[1],K=Object(l.useState)(""),z=Object(u.a)(K,2),R=z[0],A=z[1],D=Object(l.useState)(""),J=Object(u.a)(D,2),W=J[0],B=J[1],F=Object(l.useState)(""),V=Object(u.a)(F,2),_=V[0],q=V[1],G=Object(l.useState)(""),Q=Object(u.a)(G,2),X=Q[0],Y=Q[1],Z=Object(l.useState)(""),$=Object(u.a)(Z,2),tt=$[0],et=$[1],nt=Object(l.useState)(""),at=Object(u.a)(nt,2),it=at[0],ct=at[1],st=Object(l.useState)(null),rt=Object(u.a)(st,2),ut=rt[0],lt=rt[1],ot=Object(l.useState)(""),jt=Object(u.a)(ot,2),dt=jt[0],bt=jt[1],ht=Object(l.useState)(""),Ot=Object(u.a)(ht,2),vt=Ot[0],pt=Ot[1],xt=Object(l.useState)(""),ft=Object(u.a)(xt,2),gt=ft[0],mt=ft[1],kt=Object(l.useState)(""),wt=Object(u.a)(kt,2),yt=wt[0],Lt=wt[1],Nt=Object(l.useState)({}),St=Object(u.a)(Nt,2),Ct=St[0],Ht=St[1];Object(l.useEffect)((function(){g.getHavainto().then((function(t){a(t)}))}),[]),Object(l.useEffect)((function(){g.getLintu().then((function(t){b(t)}))}),[]),Object(l.useEffect)((function(){g.getUser().then((function(t){p(t)}))}),[]),Object(l.useEffect)((function(){var t=window.localStorage.getItem("loggedLintupongariUser");if(t){var e=JSON.parse(t);lt(e),g.setToken(e.token)}}),[]),Object(l.useEffect)((function(){N?g.getWikiHaku(N).then((function(t){Ht(t)})).catch((function(t){alert(t),console.log(t)})):console.log("No data yet")}),[N]);var Ut=function(t){t.preventDefault();var e={laji:N,maara:U,kunta:M,paikka:R,lisatiedot:W,user:ut.username};if(o.some((function(t){return t.laji.toLowerCase()===N.toLowerCase()})))window.alert(N+" on jo lintutaulussa.");else{var i,c,s,r=null===Ct||void 0===Ct||null===(i=Ct[0])||void 0===i||null===(c=i.cirrusdoc)||void 0===c||null===(s=c[0].source)||void 0===s?void 0:s.auxiliary_text[0];if(void 0!==r){var u=r.split("Lahko: ");if(void 0!==u){var l=u[1].split(" ");if(l[0].includes("linnut")){var j=r.split("Heimo: ")[1].split(" "),d=r.split("Suku: ")[1].split(" "),h=r.split("Uhanalaisuusluokitus ");if(r.includes("Uhanalaisuusluokitus")){var O,v,p,x=h[1].split(" "),f=r.split("Kaksiosainen nimi ")[1].split(" "),m={laji:null===Ct||void 0===Ct||null===(O=Ct[0])||void 0===O?void 0:O.title,tieteellinenNimi:"".concat(f[0]," ").concat(f[1]),kuvaWikipediastaAPI:null===Ct||void 0===Ct||null===(v=Ct[0])||void 0===v||null===(p=v.original)||void 0===p?void 0:p.source,lahko:"".concat(l[0]," ").concat(l[1]),heimo:"".concat(j[0]," ").concat(j[1]),suku:"".concat(d[0]," ").concat(d[1]),elinvoimaisuus:x[0]};g.createLintu(m).then((function(t){b(o.concat(t)),Ht(""),console.log(o)}))}else window.alert(N+"-lajista ei saatu t\xe4ydellist\xe4 lintukorttia luotua. Luodaan silti havainto.")}else window.alert("Laji ei vaikuttaisi olevan lintu.")}else window.alert(N+"-lajista ei saatu t\xe4ydellist\xe4 lintukorttia luotua. Luodaan silti havainto.")}else window.alert(N+"-virheellinen laji.")}g.createHavainto(e).then((function(t){a(n.concat(t)),S(""),T(""),E(""),A(""),B("")}))},Tt=function(t){S(t.target.value)},Pt=function(t){T(t.target.value)},It=function(t){E(t.target.value)},Mt=function(t){A(t.target.value)},Et=function(t){B(t.target.value)},Kt=function(t){et(t.target.value)},zt=function(t){ct(t.target.value)},Rt=function(){var t=Object(r.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,y.login({username:_,password:X});case 4:n=t.sent,window.localStorage.setItem("loggedLintupongariUser",JSON.stringify(n)),g.setToken(n.token),lt(n),q(""),Y(""),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),At=function(){var t=Object(r.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),window.localStorage.removeItem("loggedLintupongariUser"),lt(null);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Dt=function(t){t.preventDefault();var e={username:tt,password:it};g.createUser(e).then((function(t){p(v.concat(t))})),window.alert("Tervetuloa "+tt),et(""),ct("")};return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("ul",{className:"links",children:[Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/havainnot",children:"Havainnot"})}),Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/linnut",children:"Linnut"})}),Object(m.jsx)("h1",{children:"Lintupongari"})]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"toggleBox",children:[null===ut?Object(m.jsxs)("div",{className:"loginLaatikko",children:[Object(m.jsx)("h2",{children:"Kirjaudu sis\xe4\xe4n"}),Object(m.jsxs)("form",{onSubmit:Rt,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"K\xe4ytt\xe4j\xe4tunnus: "}),Object(m.jsx)("input",{type:"text",size:"15",value:_,name:"Username",onChange:function(t){var e=t.target;return q(e.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Salasana: "}),Object(m.jsx)("input",{type:"password",size:"15",value:X,name:"Password",onChange:function(t){var e=t.target;return Y(e.value)}})]}),Object(m.jsx)("p",{children:Object(m.jsx)("button",{className:"btn",type:"submit",children:"Kirjaudu"})})]})]}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{className:"newSighting",children:["Logged in as: ",Object(m.jsx)("br",{})," ",ut.username,Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn",onClick:At,children:"Log out"})," "]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"newSighting",children:[Object(m.jsx)("h4",{children:"Lis\xe4\xe4 uusi havainto:"}),Object(m.jsxs)("form",{onSubmit:Ut,className:"lintuform",children:[Object(m.jsxs)("div",{children:["Laji: ",Object(m.jsx)("input",{value:N,onChange:Tt})]}),Object(m.jsxs)("div",{children:["M\xe4\xe4r\xe4: ",Object(m.jsx)("input",{value:U,onChange:Pt})]}),Object(m.jsxs)("div",{children:["Kunta: ",Object(m.jsx)("input",{value:M,onChange:It})]}),Object(m.jsxs)("div",{children:["Paikka: ",Object(m.jsx)("input",{value:R,onChange:Mt})]}),Object(m.jsxs)("div",{children:["Lis\xe4tiedot: ",Object(m.jsx)("input",{value:W,onChange:Et})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn",type:"submit",children:"Tallenna"}),Object(m.jsx)("button",{className:"btn",type:"reset",children:"Tyhjenn\xe4"})]})]})]}),Object(m.jsx)("div",{children:null===ut?Object(m.jsx)(k,{buttonLabel:"Rekister\xf6idy",children:Object(m.jsxs)("div",{className:"loginLaatikko",children:[Object(m.jsx)("h2",{children:"Rekister\xf6i k\xe4ytt\xe4j\xe4tunnus"}),Object(m.jsxs)("form",{onSubmit:Dt,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"M\xe4\xe4rit\xe4 k\xe4ytt\xe4j\xe4tunnus:"}),Object(m.jsx)("input",{type:"text",size:"15",value:tt,onChange:Kt})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"M\xe4\xe4rit\xe4 salasana:"}),Object(m.jsx)("input",{type:"password",size:"15",value:it,onChange:zt})]}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:Object(m.jsx)("button",{className:"btn",type:"submit",children:"Rekister\xf6idy"})})})]})]})}):Object(m.jsx)("div",{})})]}),Object(m.jsx)(d.a,{path:"/havainnot",children:Object(m.jsx)(w,{user:ut,changeHavainto:function(t){var e=n.find((function(e){return e.id===t}));console.log(e.laji);var i={laji:e.laji,maara:dt,kunta:vt,paikka:gt,lisatiedot:yt};console.log("".concat(dt,", ").concat(vt,", ").concat(gt,", ").concat(yt)),g.updateHavainto(t,i).then((function(e){a(n.map((function(n){return n.id!==t?n:e}))),bt(""),pt(""),mt(""),Lt("")}))},havaintoList:n,deleteHavainto:function(t){window.confirm("Poista "+t.laji+"?")&&g.removeHavainto(t.id).then((function(e){a(n.filter((function(e){return e.id!==t.id})))}))},printHavainto:function(t){var e=window.open("","PRINT","height=400,width=600");return e.document.write("<html><head><title>"+document.title+"</title>"),e.document.write("</head><body >"),e.document.write("<h1>"+document.title+"</h1>"),e.document.write(document.getElementById(t).innerHTML),e.document.write("</body></html>"),e.document.close(),e.focus(),e.print(),!0},changedmaara:dt,handleUpdateMaaraChange:function(t){bt(t.target.value)},changedkunta:vt,handleUpdateKuntaChange:function(t){pt(t.target.value)},changedpaikka:gt,handleUpdatePaikkaChange:function(t){mt(t.target.value)},changedlisatiedot:yt,handleUpdateTiedotChange:function(t){Lt(t.target.value)}})}),Object(m.jsxs)(d.a,{path:"/linnut",children:[Object(m.jsx)("h2",{className:"lintuOtsikko",children:" Lintutaulu "}),Object(m.jsx)(L,{lintuList:o})]})]})]})})})})});i.a.render(Object(m.jsx)(N,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.42779d47.chunk.js.map
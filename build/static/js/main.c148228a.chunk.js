(this.webpackJsonplintubongari=this.webpackJsonplintubongari||[]).push([[0],{54:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(28),i=n.n(a),c=n(5),r=n.n(c),s=n(11),u=n(3),o=n(1),l=n.n(o),j=n(14),d=n(2),b=n(9),h=n.n(b),O="/api/lintudb/havainto",v="/api/lintudb/lintu",p="/api/lintudb/user",x=null,f=function(){var t=Object(s.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/api/wiki?haku="+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g={getAll:function(){return h.a.get("/api/lintudb/").then((function(t){return t.data}))},getHavainto:function(){return h.a.get(O).then((function(t){return t.data}))},getLintu:function(){return h.a.get(v).then((function(t){return t.data}))},getUser:function(){return h.a.get(p).then((function(t){return t.data}))},createUser:function(){var t=Object(s.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post(p,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createHavainto:function(){var t=Object(s.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:x}},t.next=3,h.a.post(O,e,n);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createLintu:function(){var t=Object(s.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post(v,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updateHavainto:function(t,e){return h.a.put("".concat(O,"/").concat(t),e).then((function(t){return t.data}))},removeHavainto:function(t){return h.a.delete("".concat(O,"/").concat(t)).then((function(t){return t.data}))},setToken:function(t){x="bearer ".concat(t)},getWikiHaku:f},m=n(0),k=l.a.forwardRef((function(t,e){var n=Object(o.useState)(!1),a=Object(u.a)(n,2),i=a[0],c=a[1],r={display:i?"none":""},s={display:i?"":"none"},l=function(){c(!i)};return Object(o.useImperativeHandle)(e,(function(){return{toggleVisibility:l}})),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{style:s,children:[t.children,Object(m.jsx)("button",{className:"btn",onClick:l,children:"Peruuta"})]}),Object(m.jsx)("div",{style:r,children:Object(m.jsx)("button",{className:"btn",onClick:l,children:t.buttonLabel})})]})})),w=function(t){var e=t.changeHavainto,n=t.havaintoList,a=t.deleteHavainto,i=t.printHavainto,c=t.changedmaara,r=t.handleUpdateMaaraChange,s=t.changedkunta,u=t.handleUpdateKuntaChange,o=t.changedpaikka,l=t.handleUpdatePaikkaChange,j=t.changedlisatiedot,d=t.handleUpdateTiedotChange;return Object(m.jsxs)("div",{className:"havainnot",children:[Object(m.jsx)("h2",{children:" Havainnot "}),Object(m.jsx)("ul",{children:n.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{id:t.id,className:"havainto",children:[Object(m.jsxs)("h3",{children:["Laji: ",t.laji]}),Object(m.jsxs)("p",{children:[" M\xe4\xe4r\xe4: ",t.maara]}),Object(m.jsxs)("p",{children:[" ","Paikkakunta: ",t.kunta," ",Object(m.jsx)("br",{}),"Paikka: ",t.paikka,Object(m.jsx)("br",{}),"Lis\xe4tiedot: ",t.lisatiedot]}),Object(m.jsxs)("p",{children:["Havainnoija: ",t.user.username]}),Object(m.jsx)(k,{buttonLabel:"Muokkaa havaintoa",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"P\xe4ivit\xe4 havainto"}),Object(m.jsxs)("form",{className:"changeForm",children:[Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:["M\xe4\xe4r\xe4:",Object(m.jsx)("td",{children:Object(m.jsx)("input",{value:c,onChange:r})})]}),Object(m.jsxs)("tr",{children:["Kunta:",Object(m.jsx)("td",{children:Object(m.jsx)("input",{value:s,onChange:u})})]}),Object(m.jsxs)("tr",{children:["Paikka:",Object(m.jsx)("td",{children:Object(m.jsx)("input",{value:o,onChange:l})})]}),Object(m.jsxs)("tr",{children:["Lis\xe4tiedot:",Object(m.jsx)("td",{children:Object(m.jsx)("input",{value:j,onChange:d})})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",className:"btn",onClick:function(){return e(t.id)},children:"Tallenna"}),Object(m.jsx)("button",{type:"reset",className:"btn",children:"Tyhjenn\xe4"})]})]})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn",onClick:function(){return a(t)},children:"Poista havainto"}),Object(m.jsx)("input",{type:"button",className:"btn",onClick:function(){return i(t.id)},value:"Tulosta havainto"})]})},t.id)}))})]})},y={login:function(){var t=Object(s.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/api/login",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(t){var e=t.lintuList;return Object(m.jsxs)("div",{className:"lintutaulu",children:[Object(m.jsx)("h2",{children:" Lintutaulu "}),e.map((function(t,e){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"lintu",children:[Object(m.jsxs)("h3",{children:["Laji: ",t.laji]}),Object(m.jsxs)("p",{children:["Tieteellinen nimi: ",t.tieteellinenNimi]}),Object(m.jsx)("img",{src:t.kuvaWikipediastaAPI,className:"img",alt:t.laji}),Object(m.jsxs)("p",{children:["Lahko: ",t.lahko," ",Object(m.jsx)("br",{}),"Heimo: ",t.heimo," ",Object(m.jsx)("br",{}),"Suku: ",t.suku]}),Object(m.jsxs)("p",{children:["Elinvoimaisuus: ",t.elinvoimaisuus]})]})},e)}))]})},S=(n(54),function(){var t=Object(o.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(o.useState)([]),c=Object(u.a)(i,2),l=c[0],b=c[1],h=Object(o.useState)([]),O=Object(u.a)(h,2),v=O[0],p=O[1],x=Object(o.useState)(""),f=Object(u.a)(x,2),S=f[0],N=f[1],C=Object(o.useState)(""),H=Object(u.a)(C,2),U=H[0],T=H[1],P=Object(o.useState)(""),I=Object(u.a)(P,2),M=I[0],E=I[1],K=Object(o.useState)(""),R=Object(u.a)(K,2),_=R[0],A=R[1],D=Object(o.useState)(""),J=Object(u.a)(D,2),W=J[0],B=J[1],z=Object(o.useState)(""),F=Object(u.a)(z,2),V=F[0],q=F[1],G=Object(o.useState)(""),Q=Object(u.a)(G,2),X=Q[0],Y=Q[1],Z=Object(o.useState)(""),$=Object(u.a)(Z,2),tt=$[0],et=$[1],nt=Object(o.useState)(""),at=Object(u.a)(nt,2),it=at[0],ct=at[1],rt=Object(o.useState)(null),st=Object(u.a)(rt,2),ut=st[0],ot=st[1],lt=Object(o.useState)(""),jt=Object(u.a)(lt,2),dt=jt[0],bt=jt[1],ht=Object(o.useState)(""),Ot=Object(u.a)(ht,2),vt=Ot[0],pt=Ot[1],xt=Object(o.useState)(""),ft=Object(u.a)(xt,2),gt=ft[0],mt=ft[1],kt=Object(o.useState)(""),wt=Object(u.a)(kt,2),yt=wt[0],Lt=wt[1],St=Object(o.useState)({}),Nt=Object(u.a)(St,2),Ct=Nt[0],Ht=Nt[1];Object(o.useEffect)((function(){g.getHavainto().then((function(t){a(t)}))}),[]),Object(o.useEffect)((function(){g.getLintu().then((function(t){b(t)}))}),[]),Object(o.useEffect)((function(){g.getUser().then((function(t){p(t)}))}),[]),Object(o.useEffect)((function(){var t=window.localStorage.getItem("loggedLintupongariUser");if(t){var e=JSON.parse(t);ot(e),g.setToken(e.token)}}),[]),Object(o.useEffect)((function(){S?g.getWikiHaku(S).then((function(t){Ht(t)})).catch((function(t){console.log(t)})):console.log("No data yet")}),[S]);var Ut=function(t){t.preventDefault();var e={laji:S,maara:U,kunta:M,paikka:_,lisatiedot:W,user:ut.username};if(l.some((function(t){return t.laji.toLowerCase()===S.toLowerCase()})))window.alert(S+" on jo lintutaulussa.");else{var i,c,r,s,u,o,j,d,h,O,v,p,x,f,m,k,w,y,L=(null===Ct||void 0===Ct||null===(i=Ct[0])||void 0===i||null===(c=i.cirrusdoc)||void 0===c||null===(r=c[0].source)||void 0===r?void 0:r.auxiliary_text[0].split("Lahko: "))[1].split(" "),C=(null===Ct||void 0===Ct||null===(s=Ct[0])||void 0===s||null===(u=s.cirrusdoc)||void 0===u||null===(o=u[0].source)||void 0===o?void 0:o.auxiliary_text[0].split("Heimo: "))[1].split(" "),H=(null===Ct||void 0===Ct||null===(j=Ct[0])||void 0===j||null===(d=j.cirrusdoc)||void 0===d||null===(h=d[0].source)||void 0===h?void 0:h.auxiliary_text[0].split("Suku: "))[1].split(" "),P=(null===Ct||void 0===Ct||null===(O=Ct[0])||void 0===O||null===(v=O.cirrusdoc)||void 0===v||null===(p=v[0].source)||void 0===p?void 0:p.auxiliary_text[0].split("Uhanalaisuusluokitus "))[1].split(" "),I=(null===Ct||void 0===Ct||null===(x=Ct[0])||void 0===x||null===(f=x.cirrusdoc)||void 0===f||null===(m=f[0].source)||void 0===m?void 0:m.auxiliary_text[0].split("Kaksiosainen nimi "))[1].split(" "),K={laji:null===Ct||void 0===Ct||null===(k=Ct[0])||void 0===k?void 0:k.title,tieteellinenNimi:"".concat(I[0]," ").concat(I[1]),kuvaWikipediastaAPI:null===Ct||void 0===Ct||null===(w=Ct[0])||void 0===w||null===(y=w.original)||void 0===y?void 0:y.source,lahko:"".concat(L[0]," ").concat(L[1]),heimo:"".concat(C[0]," ").concat(C[1]),suku:"".concat(H[0]," ").concat(H[1]),elinvoimaisuus:P[0]};g.createLintu(K).then((function(t){b(l.concat(t)),Ht(""),console.log(l)}))}g.createHavainto(e).then((function(t){a(n.concat(t)),N(""),T(""),E(""),A(""),B("")}))},Tt=function(t){N(t.target.value)},Pt=function(t){T(t.target.value)},It=function(t){E(t.target.value)},Mt=function(t){A(t.target.value)},Et=function(t){B(t.target.value)},Kt=function(t){et(t.target.value)},Rt=function(t){ct(t.target.value)},_t=function(){var t=Object(s.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,y.login({username:V,password:X});case 4:n=t.sent,window.localStorage.setItem("loggedLintupongariUser",JSON.stringify(n)),g.setToken(n.token),ot(n),q(""),Y(""),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),At=function(){var t=Object(s.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),window.localStorage.removeItem("loggedLintupongariUser"),ot(null);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Dt=function(t){t.preventDefault();var e={username:tt,password:it};g.createUser(e).then((function(t){p(v.concat(t))})),window.alert("Tervetuloa "+tt),et(""),ct("")};return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("ul",{className:"Links",children:[Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/havainnot",children:"Havainnot"})}),Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/linnut",children:"Linnut"})}),Object(m.jsx)("h1",{children:"Lintupongari"})]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"ToggleBox",children:[null===ut?Object(m.jsxs)("div",{className:"Login-laatikko",children:[Object(m.jsx)("h2",{children:"Kirjaudu sis\xe4\xe4n"}),Object(m.jsxs)("form",{onSubmit:_t,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"K\xe4ytt\xe4j\xe4tunnus: "}),Object(m.jsx)("input",{type:"text",value:V,name:"Username",onChange:function(t){var e=t.target;return q(e.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Salasana: "}),Object(m.jsx)("input",{type:"password",value:X,name:"Password",onChange:function(t){var e=t.target;return Y(e.value)}})]}),Object(m.jsx)("p",{children:Object(m.jsx)("button",{className:"btn",type:"submit",children:"Kirjaudu"})})]})]}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{className:"newSighting",children:["Logged in as: ",Object(m.jsx)("br",{})," ",ut.username,Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn",onClick:At,children:"Log out"})," "]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"newSighting",children:[Object(m.jsx)("h4",{children:"Lis\xe4\xe4 uusi havainto:"}),Object(m.jsxs)("form",{onSubmit:Ut,className:"lintuform",children:[Object(m.jsxs)("div",{children:["Laji: ",Object(m.jsx)("input",{value:S,onChange:Tt})]}),Object(m.jsxs)("div",{children:["M\xe4\xe4r\xe4: ",Object(m.jsx)("input",{value:U,onChange:Pt})]}),Object(m.jsxs)("div",{children:["Kunta: ",Object(m.jsx)("input",{value:M,onChange:It})]}),Object(m.jsxs)("div",{children:["Paikka: ",Object(m.jsx)("input",{value:_,onChange:Mt})]}),Object(m.jsxs)("div",{children:["Lis\xe4tiedot:"," ",Object(m.jsx)("input",{value:W,onChange:Et})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn",type:"submit",children:"Tallenna"}),Object(m.jsx)("button",{className:"btn",type:"reset",children:"Tyhjenn\xe4"})]})]})]}),Object(m.jsx)("div",{children:null===ut?Object(m.jsx)(k,{buttonLabel:"Rekister\xf6idy",children:Object(m.jsxs)("div",{className:"Login-laatikko",children:[Object(m.jsx)("h2",{children:"Rekister\xf6i k\xe4ytt\xe4j\xe4tunnus"}),Object(m.jsxs)("form",{onSubmit:Dt,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"M\xe4\xe4rit\xe4 k\xe4ytt\xe4j\xe4tunnus:"}),Object(m.jsx)("input",{type:"text",value:tt,onChange:Kt})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"M\xe4\xe4rit\xe4 salasana:"}),Object(m.jsx)("input",{type:"password",value:it,onChange:Rt})]}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:Object(m.jsx)("button",{className:"btn",type:"submit",children:"Rekister\xf6idy"})})})]})]})}):Object(m.jsx)("div",{})})]}),Object(m.jsx)(d.a,{path:"/havainnot",children:Object(m.jsx)(w,{changeHavainto:function(t){var e=n.find((function(e){return e.id===t}));console.log(e.laji);var i={laji:e.laji,maara:dt,kunta:vt,paikka:gt,lisatiedot:yt};g.updateHavainto(t,i).then((function(e){a(n.map((function(n){return n.id!==t?n:e}))),bt(""),pt(""),mt(""),Lt("")}))},havaintoList:n,deleteHavainto:function(t){window.confirm("Poista "+t.laji+"?")&&g.removeHavainto(t.id).then((function(e){a(n.filter((function(e){return e.id!==t.id})))}))},printHavainto:function(t){var e=window.open("","PRINT","height=400,width=600");return e.document.write("<html><head><title>"+document.title+"</title>"),e.document.write("</head><body >"),e.document.write("<h1>"+document.title+"</h1>"),e.document.write(document.getElementById(t).innerHTML),e.document.write("</body></html>"),e.document.close(),e.focus(),e.print(),!0},changedmaara:dt,handleUpdateMaaraChange:function(t){bt(t.target.value)},changedkunta:vt,handleUpdateKuntaChange:function(t){pt(t.target.value)},changedpaikka:gt,handleUpdatePaikkaChange:function(t){mt(t.target.value)},changedlisatiedot:yt,handleUpdateTiedotChange:function(t){Lt(t.target.value)}})}),Object(m.jsx)(d.a,{path:"/linnut",children:Object(m.jsx)(L,{lintuList:l})})]})]})})})})});i.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.c148228a.chunk.js.map
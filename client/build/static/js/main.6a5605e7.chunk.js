(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{55:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o=t(1),s=t.n(o),d=t(22),l=t.n(d),h=t(8),j=t.n(h),b=t(23),x=t(6),g=t(3),p=t(4),m=t.p+"static/media/sunda.b2524ffb.jpg",u="767px",f="1080px",O="1940px",v={mobileS:"(max-width :".concat("414px",")"),mobileL:"(max-width :".concat(u,")"),tablet:"(max-width :".concat(f,")"),desktop:"(min-width :".concat(O,")")},w=t(2),y=p.a.img(i||(i=Object(g.a)(["\nwidth:100%;\nheight:100%;\nobject-fit:cover;\nfilter:blur(5px);\n@media ","{\n  height:100%;\n}\n@media ","{\n  height:100%;\n}\n"])),v.tablet,v.tablet),k=function(){return Object(w.jsx)(o.Fragment,{children:Object(w.jsx)(y,{src:m})})},z=(t(37),t(11)),L=t(0),F=p.a.div(c||(c=Object(g.a)(["\ncolor:#dcdcdc;\nmargin-top:4vh;\nmargin-bottom:5vh;\ndisplay:flex;\njustify-content:start;\nalign-items:center;\nwidth:100px;\nheight:40px;\nfont-weight:300;\n\n&:hover{\n    cursor:pointer;\n}\n.line{\nwidth:2px;\nheight:25px;\nbackground-color:#fff;\nmargin-right:10px\n}\nh3{\n   font-weight:300; \n}\n}\n"]))),C=function(n){var e=n.lang;return Object(w.jsxs)(F,{children:[Object(w.jsx)("div",{className:"line"}),Object(w.jsx)("h3",{children:e?"Arabic":"English"})]})},S=p.a.h1(a||(a=Object(g.a)(["\ntext-align:center;\nfont-size:30px;\ncolor:#000;\nz-index:1000;\n@media ","{\n  font-size:25px;\n  margin-left:-20px\n}\n"])),v.tablet),A=p.a.div(r||(r=Object(g.a)(["\nbackground:rgba(255,255,255,1);\nwidth:100%;\nheight:60px; \ndisplay:flex;\njustify-content:center;\nalign-items:center;\nz-index:100;\n"])));var N,P,E,I,_,B=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(A,{children:Object(w.jsx)(S,{children:"Endengerd Animals"})})})},J=p.a.div(N||(N=Object(g.a)(["\nbackground-color:transparent;\nwidth:100%;\nheight:90vh;\ndisplay:flex;\nalign-items:center;\nposition:absolute;\ntop:50%;\ntransform: translateY(-50%);\noverflow:hidden;\n.content{\n        padding:2vh 4vh;\n        color:#fff;\n        p{\n\nfont-size:15px;\n        }\nh1{\n    font-size:1.6rem;\n}\n    }\n.scoend{\n    width:100%;\nheight:100%;\n\nimg {\nobject-fit:cover;\nwidth:100%;\nheight:100%;\n\n}\n}\n.one{\nbackground:rgba(0,0,0,.4);\nwidth:46%;\nheight:100%;\n\n}\n@media ","{\n    flex-direction:column;\n    height:120vh;\n \n    .content{\n        padding-top:4vh;\n    }\n    .scoend{\n        order:1;\n        z-index:10;\n    }\n    .one{\n        order:2;\n  display:flex;\n    width:100%; \n    }\n\n   }\n\n   @media ","{\n    height:160vh;\n    .content{\n        margin-top:5vh;\n        margin-bottom:8vh;\n        p{\n\nfont-size:14px;\n        }\nh1{\n    font-size:1.5rem;\n}\n    }\n    .one{\n  margin-top:-1vh;\n}\n   }\n"])),v.tablet,v.mobileL),T=p.a.div(P||(P=Object(g.a)(["\n.img{\n    width:100%;\n    object-fit:cover;\n}\n@media ","{\n   width:60%;\n}\n\n"])),v.tablet),D=function(n){var e=n.data,t=n.isLoading,i=n.current,c=Object(o.useState)(!0),a=Object(x.a)(c,2),r=a[0],s=a[1];console.log(e.map((function(n){return n._id}))),console.log(e),console.log(i);var d=function(){console.log(r),s(!r),console.log(r)};return Object(w.jsx)(o.Fragment,{children:t?Object(w.jsx)("h3",{children:"loading..."}):e.map((function(n,e){return i===e&&Object(w.jsx)("div",{children:Object(w.jsxs)(J,{children:[Object(w.jsx)("div",{className:"one",children:Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("div",{onClick:d,children:Object(w.jsx)(C,{lang:r})}),r?Object(w.jsxs)(o.Fragment,{children:[Object(w.jsx)("h1",{children:n.name.en}),Object(w.jsx)("p",{children:n.content.en}),Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"Population : "}),n.population]})]}):Object(w.jsx)(o.Fragment,{children:Object(w.jsxs)("div",{style:{textAlign:"right"},children:[Object(w.jsx)("h1",{children:n.name.ar}),Object(w.jsx)("p",{children:n.content.ar}),Object(w.jsxs)("p",{children:[" \u0627\u0644\u0639\u062f\u062f \u0627\u0644\u0645\u062a\u0628\u0642\u064a : ",n.population]})]})}),Object(w.jsx)(T,{children:Object(w.jsx)("img",{className:"img",src:n.mapImage})})]})}),Object(w.jsxs)("div",{className:"scoend",children:[Object(w.jsx)(B,{}),Object(w.jsx)("img",{src:n.image,alt:"title"},n._id)]})]})},n._id)}))})},M=p.a.div(E||(E=Object(g.a)(["\nbackground:rgba(0,0,0,.4);\nheight:50px;\nposition:absolute;\nleft:50%;\nbottom:8vh;\nborder-radius:20px;\ncolor:#fff;\nz-index:1000;\n@media ","{\n  left:45%\n}\n@media ","{\n  left:38%\n}\n"])),v.tablet,v.mobileL),R=p.a.div(I||(I=Object(g.a)(["\ndisplay:flex;\njustify-content:space-between;\nalign-items:center;\npadding:10px 5px;\nfont-size:30px;\n\n\n"]))),X=function(n){var e=n.data,t=n.isLoading,i=Object(o.useState)(0),c=Object(x.a)(i,2),a=c[0],r=c[1],s=e.length;console.log(a);return Object(w.jsxs)(o.Fragment,{children:[Object(w.jsx)(M,{children:Object(w.jsxs)(R,{children:[Object(w.jsx)(L.b.Provider,{value:{style:{transform:"scaleX(-1)",marginRight:"25px",cursor:"pointer"}},children:Object(w.jsx)(z.a,{onClick:function(){r(0===a?s-1:a-1)}})}),Object(w.jsx)(L.b.Provider,{value:{style:{cursor:"pointer"}},children:Object(w.jsx)(z.a,{onClick:function(){console.log("test"),r(a===s-1?0:a+1)}})})]})}),Object(w.jsx)(D,{current:a,data:e,isLoading:t})]})},Y=t(27),q=t.n(Y),G=p.a.div(_||(_=Object(g.a)(["\nheight:99vh;\nposition:relative;\n","\n@media ","{\n  min-height:130vh;\n  overflow-x:hidden;\n}\n@media ","{\n  min-height:170vh;\n  overflow-x:hidden;\n}\n"])),"",v.tablet,v.mobileL),H=function(){var n=Object(o.useState)([]),e=Object(x.a)(n,2),t=e[0],i=e[1],c=Object(o.useState)(),a=Object(x.a)(c,2),r=a[0],s=a[1],d=function(){var n=Object(b.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.get("/api/animals",{headers:{"Access-Control-Allow-Origin":"*",mode:"cors"}});case 2:e=n.sent,i(e.data),s(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){d()}),[]),Object(w.jsxs)(G,{children:[Object(w.jsx)(k,{}),Object(w.jsx)(X,{data:t,isLoading:r})]})};var K=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(H,{})})},Q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};l.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(K,{})}),document.getElementById("root")),Q()}},[[55,1,2]]]);
//# sourceMappingURL=main.6a5605e7.chunk.js.map
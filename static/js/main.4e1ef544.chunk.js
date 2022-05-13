(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{60:function(e,n,t){e.exports=t(73)},73:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(21),l=t.n(r),c=t(9),i=t(29),u=t(31),s=t(4),d=t(8),m=t(15),p="https://api.coinpaprika.com/v1";function f(){return fetch("".concat(p,"/coins")).then((function(e){return e.json()}))}var b,h,g,x,E,v,y,j,k,O,C,w,L,q,z,I,S=t(22),Q=d.c.div(b||(b=Object(c.a)(["\n  padding: 0 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),D=d.c.header(h||(h=Object(c.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),B=d.c.ul(g||(g=Object(c.a)([""]))),M=d.c.li(x||(x=Object(c.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid;\n  border-radius: 15px;\n  margin-bottom: 10px;\n  font-size: 24px;\n\n  a {\n    transition: color 150ms ease-in;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    &:hover {\n      color: ","\n    }\n  }\n"])),(function(e){return e.theme.cardBgColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor})),R=d.c.div(E||(E=Object(c.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(e){return e.theme.accentColor})),T=d.c.span(v||(v=Object(c.a)(["\n  font-size: 32px;\n  color: ",";\n"])),(function(e){return e.theme.accentColor})),F=d.c.img(y||(y=Object(c.a)(["\n  width: 32px;\n  height: 32px;\n"]))),N=function(){var e=Object(m.useQuery)("allCoins",f),n=e.isLoading,t=e.data;return o.a.createElement(Q,null,o.a.createElement(S.a,null,o.a.createElement("title",null,"Coin Tracker")),o.a.createElement(D,null,o.a.createElement(R,null,"Coin Tracker")),n?o.a.createElement(T,null,"Loading..."):o.a.createElement(B,null,null===t||void 0===t?void 0:t.slice(0,29).map((function(e){return o.a.createElement(M,{key:e.id},o.a.createElement(u.b,{to:{pathname:"/".concat(e.id)},state:{name:e.name,rank:e.rank}},o.a.createElement(F,{src:"https://coinicons-api.vercel.app/api/icon/".concat(e.symbol.toLocaleLowerCase()),alt:"Coin's icon"})," ",e.name," \u2192"))}))))},_=t(50),J=t.n(_),K=t(17),P=Object(K.b)({key:"isDark",default:!0}),H=d.c.div(j||(j=Object(c.a)(["\n  margin-top: 40px;\n\n  .apexcharts-tooltip {\n    background: whitesmoke;\n    color: #000;\n  }\n"]))),U=function(e){var n=e.coinId,t=Object(K.c)(P),a=Object(m.useQuery)(["ohlcv",n],(function(){return function(e){var n=Math.floor(Date.now()/1e3),t=n-1209600;return fetch("".concat(p,"/coins/").concat(e,"/ohlcv/historical?start=").concat(t,"&end=").concat(n)).then((function(e){return e.json()}))}(n)})),r=a.isLoading,l=a.data;return o.a.createElement(H,null,r?"Loading Chart...":o.a.createElement(J.a,{type:"candlestick",height:500,options:{chart:{type:"candlestick",height:500,foreColor:t?"#fff":"#000"},title:{text:n,align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},tooltip:{enabled:!0}},series:[{data:null===l||void 0===l?void 0:l.map((function(e){return{x:new Date(e.time_open),y:[e.open,e.high,e.low,e.close].map((function(e){return e.toFixed(2)}))}}))}]}))},Y=d.c.h1(k||(k=Object(c.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(e){return e.theme.accentColor})),$=d.c.span(O||(O=Object(c.a)(["\n  text-align: center;\n  display: block;\n"]))),A=d.c.div(C||(C=Object(c.a)(["\n  padding: 0 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),G=d.c.header(w||(w=Object(c.a)(["\n  position: relative;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),V=d.c.div(L||(L=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 16px 32px;\n  border-radius: 10px;\n"]))),W=d.c.div(q||(q=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),X=d.c.p(z||(z=Object(c.a)(["\n  margin: 20px 0;\n  line-height: 1.4rem;\n"]))),Z=d.c.button(I||(I=Object(c.a)(["\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 80px;\n  height: 40px;\n  padding: 8px 14px;\n  font-size: 20px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  border-color: #fff;\n  cursor: pointer;\n  color: #fff\n"])));var ee,ne,te=function(e){Object(i.a)(e);var n=Object(s.h)().coinId,t=Object(s.e)().state,a=(Object(s.f)("/:coinId/price"),Object(s.f)("/:coinId/chart"),Object(m.useQuery)(["info",n],(function(){return function(e){return fetch("".concat(p,"/coins/").concat(e)).then((function(e){return e.json()}))}(n)}))),r=a.isLoading,l=a.data,c=Object(m.useQuery)(["tickers",n],(function(){return function(e){return fetch("".concat(p,"/tickers/").concat(e)).then((function(e){return e.json()}))}(n)})),u=c.isLoading,d=c.data,f=r||u,b=Object(s.g)();return console.log(l,d),o.a.createElement(A,null,o.a.createElement(S.a,null,o.a.createElement("title",null,(null===t||void 0===t?void 0:t.name)?t.name:f?"Loading...":null===l||void 0===l?void 0:l.name)),o.a.createElement(G,null,o.a.createElement(Z,{onClick:function(){return b("/")}},"\u2190"),o.a.createElement(Y,null,(null===t||void 0===t?void 0:t.name)?t.name:f?"Loading...":null===l||void 0===l?void 0:l.name)),f?o.a.createElement($,null,"Loading..."):o.a.createElement(o.a.Fragment,null,o.a.createElement(V,null,o.a.createElement(W,null,o.a.createElement("span",null,"Rank:"),o.a.createElement("span",null,null===l||void 0===l?void 0:l.rank)),o.a.createElement(W,null,o.a.createElement("span",null,"Symbol:"),o.a.createElement("span",null,"$",null===l||void 0===l?void 0:l.symbol)),o.a.createElement(W,null,o.a.createElement("span",null,"Price:"),o.a.createElement("span",null,null===d||void 0===d?void 0:d.quotes.USD.price))),o.a.createElement(X,null,null===l||void 0===l?void 0:l.description),o.a.createElement(V,null,o.a.createElement(W,null,o.a.createElement("span",null,"Total Supply:"),o.a.createElement("span",null,null===d||void 0===d?void 0:d.total_supply)),o.a.createElement(W,null,o.a.createElement("span",null,"Max Supply:"),o.a.createElement("span",null,null===d||void 0===d?void 0:d.max_supply))),o.a.createElement(U,{coinId:n})))},ae=function(e){return Object(i.a)(e),o.a.createElement(u.a,{basename:"/react-masterclass-challenge"},o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",element:o.a.createElement(N,null)}),o.a.createElement(s.a,{path:"/:coinId",element:o.a.createElement(te,null)})))},oe={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},re={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},le=t(51),ce=Object(d.b)(ee||(ee=Object(c.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&family=Noto+Sans:wght@700&display=swap');\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n    font-family: 'Noto Sans KR', sans-serif;\n    background-color: ",";\n    color: ",";\n\n    ol, ul {\n      list-style: none;\n    }\n\n    blockquote, q {\n      quotes: none;\n    }\n\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n      content: '';\n      content: none;\n    }\n\n    * {\n      box-sizing: border-box;\n    }\n\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n\n    a {\n      text-decoration: none;\n      color: inherit;\n    }\n  }\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor})),ie=d.c.button(ne||(ne=Object(c.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 20px;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  border: 1px solid;\n  padding: 10px 14px;\n"])),(function(e){return e.theme.cardBgColor}),(function(e){return e.theme.textColor}));var ue=function(){var e=Object(K.c)(P),n=Object(K.d)(P);return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{theme:e?oe:re},o.a.createElement(ce,null),o.a.createElement(ie,{onClick:function(){return n((function(e){return!e}))}},e?"Dark":"Light"),o.a.createElement(ae,null),o.a.createElement(le.ReactQueryDevtools,{initialIsOpen:!1})))},se=new m.QueryClient;l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(K.a,null,o.a.createElement(m.QueryClientProvider,{client:se},o.a.createElement(S.b,null,o.a.createElement(ue,null))))),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.4e1ef544.chunk.js.map
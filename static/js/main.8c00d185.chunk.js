(this["webpackJsonpcurrency-converter-test-task"]=this["webpackJsonpcurrency-converter-test-task"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports={page:"app_page__2eoNV",inner:"app_inner__19H4b",nav:"app_nav__1sMMz",link:"app_link__3MCMi",isActive:"app_isActive__3wJLs"}},,function(e,t,a){e.exports={container:"icons_container__1ivLJ",box:"icons_box__jBA5X",inverted:"icons_inverted__2bavI"}},function(e,t,a){e.exports={form:"form-login_form__1bX-u",inner:"form-login_inner__3k1bk",footer:"form-login_footer__3XLph",header:"form-login_header__3ezxj",title:"form-login_title__3eEra",row:"form-login_row__2v_Rj",submitError:"form-login_submitError__3LNXC"}},function(e,t,a){e.exports={form:"form-converter_form__3pUoM",fields:"form-converter_fields__18tsd",inner:"form-converter_inner__1_SRK",field:"form-converter_field__2EBra",submitBtn:"form-converter_submitBtn__1nfTB",footer:"form-converter_footer__3RXTN"}},,,,,function(e,t,a){e.exports={header:"header_header__HZ6Fg",logo:"header_logo__3iSgw",logoLink:"header_logoLink__3Lfi4",isActive:"header_isActive__3N1BU",logoutBtn:"header_logoutBtn__3unf-"}},function(e,t,a){e.exports={pagination:"pagination_pagination__1b6wU",input:"pagination_input__2tRyC",prevBtn:"pagination_prevBtn__1k_Fn",nextBtn:"pagination_nextBtn__JrVzT",total:"pagination_total__frGOh"}},,function(e,t,a){e.exports={header:"page-converter_header__3MIrw",title:"page-converter_title__3s5LH",inner:"page-converter_inner__fJpnI"}},,,function(e,t,a){e.exports={input:"text-field_input__3NtHY",label:"text-field_label__rnPXu",hasError:"text-field_hasError__3fBX-"}},function(e,t,a){e.exports={table:"table_table__2bx3B",thead:"table_thead__5atyI",tbody:"table_tbody__29Xg8"}},,,,,function(e,t,a){e.exports={field:"field_field__2KvsH",error:"field_error__21m3P"}},function(e,t,a){e.exports={button:"button_button__2pFT2",fullWidth:"button_fullWidth__1ve0a"}},function(e,t,a){e.exports={page:"page_page__2kubH",inner:"page_inner__1e6Nu"}},,,function(e,t,a){e.exports={star:"rates_star__2znLm",filledStar:"rates_filledStar__1Ko1Z"}},function(e,t,a){e.exports={inner:"page-history_inner__Uk5-m",footer:"page-history_footer__1N9hz"}},,,,,function(e,t,a){e.exports={select:"select_select__2ohZ4"}},function(e,t,a){e.exports=a(62)},,,,,,,,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),c=(a(51),a(54),a(12)),i=a(4),s=a(18),u={HOME:"/",LOGIN:"/login",HISTORY:"/history",CONVERTER:"/converter"},m=a(22),f=a.n(m),p=function(e){var t=e.isAuthorized,a=e.onLogout;return r.a.createElement("header",{"data-testid":"header",className:f.a.header},r.a.createElement("h6",{className:f.a.logo},r.a.createElement(s.b,{className:f.a.logoLink,activeClassName:f.a.isActive,to:u.HOME,exact:!0},"TEST SPA app")),t&&r.a.createElement("button",{className:f.a.logoutBtn,type:"button",onClick:a},"\u0412\u044b\u0445\u043e\u0434"))};p.defaultProps={isAuthorized:!1};var d=p,v=a(27),h=a(9),b=a(11),g=a(26),E=a(34),_=a.n(E),O=function(e){var t=function(t){var a=t.meta,n=t.input,l=Object(g.a)(t,["meta","input"]),o=Boolean(a.touched&&a.error);return r.a.createElement("div",{className:_.a.field},r.a.createElement(e,Object.assign({},n,l,{hasError:o})),o&&r.a.createElement("p",{role:"alert",className:_.a.error},a.error))};return t.displayName="Field(".concat(e.displayName,")"),t},y=a(28),N=a.n(y),j=function(e){var t=e.id,a=e.className,n=e.name,l=e.type,o=e.value,c=e.onChange,i=e.placeholder,s=e.label,u=e.hasError;return r.a.createElement("div",{"data-testid":"text-field",className:a},r.a.createElement("label",{className:N.a.label,htmlFor:t},s),r.a.createElement("input",{id:t,className:Object(b.a)(N.a.input,Object(h.a)({},N.a.hasError,u)),name:n,type:l,value:o,onChange:c,placeholder:i,"aria-invalid":u}))};j.defaultProps={type:"text",hasError:!1};var w=O(j),x=a(35),k=a.n(x),S=function(e){var t=e.children,a=e.type,n=e.fullWidth,l=e.disabled,o=e.className;return r.a.createElement("button",{className:Object(b.a)(k.a.button,o,Object(h.a)({},k.a.fullWidth,n)),disabled:l,type:a},t)};S.defaultProps={type:"button",fullWidth:!1,disabled:!1,className:""};var A=S;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P=r.a.createElement("path",{d:"m1 4.5h17m0 0-3.8636-3.5m3.8636 3.5-3.8636 3.5",stroke:"#fff",strokeLinecap:"round"}),B=function(e){var t=e.svgRef,a=e.title,n=C(e,["svgRef","title"]);return r.a.createElement("svg",R({fill:"none",height:9,viewBox:"0 0 19 9",width:19,ref:t},n),a?r.a.createElement("title",null,a):null,P)},z=r.a.forwardRef((function(e,t){return r.a.createElement(B,R({svgRef:t},e))}));a.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I=r.a.createElement("path",{d:"m1 5.94118h24m0 0-5.4545-4.94118m5.4545 4.94118-5.4545 4.94122",stroke:"#1a237e",strokeLinecap:"round"}),M=function(e){var t=e.svgRef,a=e.title,n=T(e,["svgRef","title"]);return r.a.createElement("svg",L({fill:"none",height:12,viewBox:"0 0 26 12",width:26,ref:t},n),a?r.a.createElement("title",null,a):null,I)},H=r.a.forwardRef((function(e,t){return r.a.createElement(M,L({svgRef:t},e))}));a.p;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var q=r.a.createElement("path",{d:"m25 5.94118h-24.000001m0 0 5.454541-4.94118m-5.454541 4.94118 5.454541 4.94122",stroke:"#1a237e",strokeLinecap:"round"}),W=function(e){var t=e.svgRef,a=e.title,n=D(e,["svgRef","title"]);return r.a.createElement("svg",F({fill:"none",height:12,viewBox:"0 0 26 12",width:26,ref:t},n),a?r.a.createElement("title",null,a):null,q)},X=r.a.forwardRef((function(e,t){return r.a.createElement(W,F({svgRef:t},e))}));a.p;a.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var G=r.a.createElement("path",{d:"m15.5245 1.08156c.1496-.460658.8014-.460652.951 0l2.8657 8.81966c.2008.61808.7768 1.03648 1.4266 1.03648h9.2735c.4844 0 .6858.6198.2939.9045l-7.5024 5.4509c-.5258.3819-.7457 1.059-.5449 1.677l2.8656 8.8197c.1497.4606-.3775.8437-.7694.559l-7.5024-5.4509c-.5258-.3819-1.2376-.3819-1.7634 0l-7.50243 5.4509c-.39186.2847-.91909-.0984-.76942-.559l2.86568-8.8197c.20081-.618-.01917-1.2951-.54491-1.677l-7.50245-5.4509c-.39185-.2847-.19046-.9045.2939-.9045h9.27353c.6498 0 1.2258-.4184 1.4266-1.03648z",stroke:"#1a237e"}),V=function(e){var t=e.svgRef,a=e.title,n=J(e,["svgRef","title"]);return r.a.createElement("svg",Z({fill:"none",height:29,viewBox:"0 0 32 29",width:32,ref:t},n),a?r.a.createElement("title",null,a):null,G)},Y=r.a.forwardRef((function(e,t){return r.a.createElement(V,Z({svgRef:t},e))})),Q=(a.p,a(15),"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),U="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0435\u043c\u0430\u0439\u043b",K={MIN_LENGTH:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 7",FORMAT:"\u0422\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b, \u0446\u0438\u0444\u0440\u044b \u0438\u043b\u0438 _"},$=/^(?!^\.)([a-zA-Z0-9_\-\.\+]{0,63}[a-zA-Z0-9_\-\+])@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]{1,254}\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,ee=/^[a-zA-Z_0-9]*$/,te=function(e){return e?void 0:Q},ae=function(e){return $.test(e)?void 0:U},ne=function(e){var t=void 0;return e.length<7?t=K.MIN_LENGTH:ee.test(e)||(t=K.FORMAT),t},re=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e,a,n){return t.reduce((function(t,r){return t||r(e,a,n)}),void 0)}},le=a(16),oe=a.n(le),ce=function(e){var t=e.onSubmit;return r.a.createElement(v.b,{onSubmit:t},(function(e){var t=e.handleSubmit,a=e.submitError,n=e.submitting;return r.a.createElement("form",{"aria-label":"Login form",className:oe.a.form,onSubmit:t},r.a.createElement("header",{className:oe.a.header},r.a.createElement("h1",{className:oe.a.title},"\u0412\u0445\u043e\u0434 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442")),r.a.createElement("div",{className:oe.a.inner},r.a.createElement(v.a,{id:"f-email",className:oe.a.row,name:"login",type:"email",label:"\u041b\u043e\u0433\u0438\u043d",placeholder:"user@mail.ru",component:w,validate:re(te,ae)}),r.a.createElement(v.a,{id:"f-password",className:oe.a.row,name:"password",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",placeholder:"*********",component:w,validate:re(te,ne)})),r.a.createElement("footer",{className:oe.a.footer},r.a.createElement(A,{type:"submit",disabled:n,fullWidth:!0},"\u0412\u0445\u043e\u0434 ",r.a.createElement(z,null)),a&&r.a.createElement("p",{role:"alert",className:oe.a.submitError},a)))}))},ie=a(36),se=a.n(ie),ue=a(3),me=a(6),fe=a.n(me),pe=a(37),de="https://35.195.25.70/api.php",ve={Accept:"application/json"};function he(e){return be.apply(this,arguments)}function be(){return(be=Object(pe.a)(fe.a.mark((function e(t){var a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if("ok"!==(a=e.sent).result){e.next=7;break}return e.abrupt("return",a);case 7:throw new Error(a.error);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=Object(pe.a)(fe.a.mark((function e(t){var a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(de,{method:"POST",headers:ve,body:JSON.stringify(t)});case 2:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",he(a));case 7:throw new Error(a.statusText);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=function(e){return ge.apply(this,arguments)},_e=a(19);var Oe=ue.c.model({isAuthorized:!1}).actions((function(e){return{afterCreate:function(){e.isAuthorized=Boolean(localStorage.getItem("isAuthorized"))},login:Object(ue.a)(fe.a.mark((function t(a){var n,r;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=a.login,r=a.password,t.next=4,Object(ue.b)(e).request({action:"login",login:n,password:r});case 4:localStorage.setItem("isAuthorized","true"),e.isAuthorized=!0,t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Object(h.a)({},_e.a,t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),logout:function(){e.isAuthorized=!1,localStorage.removeItem("isAuthorized")}}})),ye=a(38),Ne=a(14),je=ue.c.model({asset:ue.c.string,startDate:ue.c.string,quote:ue.c.string,isActive:!1}).actions((function(e){return{toggleFavorite:function(){e.isActive=!e.isActive}}})),we=ue.c.model({items:ue.c.array(je),loaded:!1}).views((function(e){return{get getSorted(){return e.items.slice().sort((function(e){return e.isActive?-1:1}))},get getRatesTable(){var t={};return e.items.forEach((function(e){var a=e.asset.split("/"),n=Object(Ne.a)(a,2),r=n[0],l=n[1];t[r]=Object(ye.a)(Object(ye.a)({},t[r]),{},Object(h.a)({},l,e.quote))})),t}}})).actions((function(e){return{fetchAll:Object(ue.a)(fe.a.mark((function t(){var a;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ue.b)(e).request({action:"quote"});case 3:a=t.sent,e.items=a.assets,e.loaded=!0,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))}})),xe=ue.c.model({asset:ue.c.string,startDate:ue.c.string,startQuote:ue.c.string,finishDate:ue.c.string,finishQuote:ue.c.string,profit:ue.c.string}),ke=ue.c.model({items:ue.c.array(xe)}).views((function(e){return{get all(){return e.items.slice()}}})).actions((function(e){return{fetchAll:Object(ue.a)(fe.a.mark((function t(){var a;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ue.b)(e).request({action:"history"});case 3:a=t.sent,e.items=a.deals,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))}})),Se=ue.c.model("RootStore",{auth:Oe,rates:we,history:ke}),Ae=Object(n.createContext)({}),Re=Ae.Provider,Ce=function(){return Object(n.useContext)(Ae)},Pe=function(){return Se.create({auth:Oe.create(),rates:we.create(),history:ke.create()},{request:Ee})},Be=function(){var e=Ce().auth;return e.isAuthorized?r.a.createElement(i.a,{to:u.HOME}):r.a.createElement("div",{"data-testid":"page-login",className:se.a.page},r.a.createElement("div",{className:se.a.inner},r.a.createElement(ce,{onSubmit:e.login})))},ze=a(44),Le=a(29),Te=a.n(Le),Ie=function(e){var t=e.children;return r.a.createElement("thead",{className:Te.a.thead},t)},Me=function(e){var t=e.children;return r.a.createElement("tbody",{className:Te.a.tbody},t)},He=function(e){var t=e.children;return r.a.createElement("table",{className:Te.a.table},t)},Fe=a(39),De=a.n(Fe),qe=function(e){var t=e.items;return r.a.createElement("div",{"data-testid":"currency-rates"},r.a.createElement(He,null,r.a.createElement(Ie,null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"\u0412\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u0430"),r.a.createElement("th",null,"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0430"),r.a.createElement("th",null,"\u0414\u0430\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f"))),r.a.createElement(Me,null,r.a.createElement(ze.a,{typeName:null},t.map((function(e){return r.a.createElement("tr",{key:e.asset},r.a.createElement("td",null,r.a.createElement(Y,{role:"button",className:Object(b.a)(De.a.star,Object(h.a)({},De.a.filledStar,e.isActive)),onClick:function(){return e.toggleFavorite()}})),r.a.createElement("td",null,e.asset),r.a.createElement("td",null,e.quote),r.a.createElement("td",null,e.startDate))}))))))};qe.defaultProps={items:[]};var We=Object(c.a)(qe),Xe=Object(c.a)((function(){var e=Ce().rates;return Object(n.useEffect)((function(){e.fetchAll()}),[]),r.a.createElement("div",{"data-testid":"page-rates"},r.a.createElement(We,{items:e.getSorted}))}));function Ze(e){var t=new Date(e),a=String(t.getFullYear()).slice(-2),n=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()).padStart(2,"0");return"".concat(n,":").concat(r," ").concat(l,".").concat(o,".").concat(a)}var Je=function(e){var t=e.items;return r.a.createElement("div",{"data-testid":"history"},r.a.createElement(He,null,r.a.createElement(Ie,null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u0410\u043a\u0442\u0438\u0432"),r.a.createElement("th",null,"\u041d\u0430\u0447\u0430\u043b\u043e"),r.a.createElement("th",null,"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0430"),r.a.createElement("th",null,"\u041a\u043e\u043d\u0435\u0446"),r.a.createElement("th",null,"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0430"),r.a.createElement("th",null,"\u041f\u0440\u0438\u0431\u044b\u043b\u044c"))),r.a.createElement(Me,null,t.map((function(e,t){return r.a.createElement("tr",{key:"".concat(e.asset).concat(t)},r.a.createElement("td",null,e.asset),r.a.createElement("td",null,Ze(e.startDate)),r.a.createElement("td",null,e.startQuote),r.a.createElement("td",null,Ze(e.finishDate)),r.a.createElement("td",null,e.finishQuote),r.a.createElement("td",null,e.profit))})))))};Je.defaultProps={items:[]};var Ge=Je,Ve=a(23),Ye=a.n(Ve),Qe=function(e){var t=e.page,a=e.onChange,n=e.total,l=1===t,o=t===n;return r.a.createElement("nav",{"aria-label":"Pagination",className:Ye.a.pagination},r.a.createElement("button",{"aria-label":"Prev button",className:Ye.a.prevBtn,type:"button",onClick:function(){return a(t-1)},disabled:l},r.a.createElement(X,null)),r.a.createElement("div",null,r.a.createElement("input",{className:Ye.a.input,type:"number",min:"1",max:n,step:"1",onChange:function(e){return a(e.target.value)},value:t}),r.a.createElement("span",{"aria-label":"Total pages",className:Ye.a.total}," / ",n)),r.a.createElement("button",{"aria-label":"Next button",className:Ye.a.nextBtn,type:"button",onClick:function(){return a(t+1)},disabled:o},r.a.createElement(H,null)))};var Ue=function(e){var t=Object(n.useState)(1),a=Object(Ne.a)(t,2),r=a[0],l=a[1],o=10*(r-1),c=Math.ceil(e.length/10),i=e.slice(o,o+10);return{page:r,total:c,onPageChange:function(e){e>=1&&e<=c&&l(e)},items:i}},Ke=a(40),$e=a.n(Ke),et=Object(c.a)((function(){var e=Ce().history,t=Ue(e.all),a=t.page,l=t.total,o=t.onPageChange,c=t.items;return Object(n.useEffect)((function(){e.fetchAll()}),[]),r.a.createElement("div",{"data-testid":"page-history"},r.a.createElement("div",{className:$e.a.inner},r.a.createElement(Ge,{items:c})),r.a.createElement("footer",{className:$e.a.footer},r.a.createElement(Qe,{page:a,total:l,onChange:o})))})),tt=a(45),at=a.n(tt),nt=function(e){var t=e.name,a=e.options,n=e.value,l=e.onChange,o=e.className,c=Object(g.a)(e,["name","options","value","onChange","className"]);return r.a.createElement("select",Object.assign({name:t,className:Object(b.a)(at.a.select,o),onChange:l,value:n},c),a.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))};nt.defaultProps={options:[]};O(nt);var rt=a(17),lt=a.n(rt),ot=Object.keys,ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ot(e)[0]},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ot(e).map((function(e){return{label:e,value:e}}))},st=function(e){var t=e.rates,a=Object(n.useState)(null),l=Object(Ne.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)(),s=Object(Ne.a)(i,2),u=s[0],m=s[1],f=Object(n.useState)(),p=Object(Ne.a)(f,2),d=p[0],v=p[1],h=Object(n.useState)(1),b=Object(Ne.a)(h,2),g=b[0],E=b[1];function _(){c(null)}return Object(n.useEffect)((function(){var e=ct(t);m(e),v(ct(t[e]))}),[t]),r.a.createElement("div",null,r.a.createElement("form",{"aria-label":"Converter form",className:lt.a.form,onSubmit:function(e){try{c(g*t[u][d])}catch(a){_()}finally{e.preventDefault()}}},r.a.createElement("div",{className:lt.a.inner},r.a.createElement("div",{className:lt.a.fields},r.a.createElement(j,{id:"f-amount",className:lt.a.field,name:"amount",type:"number",label:"\u0421\u0443\u043c\u043c\u0430",onChange:function(e){E(e.target.value),_()},value:g}),r.a.createElement(nt,{className:lt.a.field,name:"from","aria-label":"Select from",onChange:function(e){var a=e.target.value;m(a),v(ct(t[a])),_()},options:it(t),value:u}),r.a.createElement(nt,{className:lt.a.field,name:"to","aria-label":"Select to",onChange:function(e){v(e.target.value),_()},options:it(t[u]),value:d})),r.a.createElement(A,{className:lt.a.submitBtn,type:"submit"},"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"))),null!==o&&r.a.createElement("footer",{className:lt.a.footer},r.a.createElement("div",{"aria-label":"Result"},r.a.createElement("h6",null,"\u0418\u0442\u043e\u0433\u043e"),r.a.createElement("p",null,o))))};st.defaultProps={rates:{}};var ut=st,mt=a(25),ft=a.n(mt),pt=Object(c.a)((function(){var e=Ce().rates;return Object(n.useEffect)((function(){e.fetchAll()}),[]),r.a.createElement("div",{"data-testid":"page-converter",className:ft.a.page},r.a.createElement("header",{className:ft.a.header},r.a.createElement("h1",{className:ft.a.title},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0432\u0430\u043b\u044e\u0442")),r.a.createElement("div",{className:ft.a.inner},r.a.createElement(ut,{rates:e.getRatesTable})))})),dt=a(13),vt=a.n(dt);function ht(){return Ce().auth.isAuthorized?r.a.createElement("div",{className:vt.a.page},r.a.createElement("header",null,r.a.createElement("nav",{className:vt.a.nav},r.a.createElement(s.b,{className:vt.a.link,activeClassName:vt.a.isActive,to:u.HOME,exact:!0},"\u041a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442"),r.a.createElement(s.b,{className:vt.a.link,activeClassName:vt.a.isActive,to:u.CONVERTER},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u043e\u0440"),r.a.createElement(s.b,{className:vt.a.link,activeClassName:vt.a.isActive,to:u.HISTORY},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"))),r.a.createElement("div",{className:vt.a.inner},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:u.HOME,component:Xe,exact:!0}),r.a.createElement(i.b,{path:u.HISTORY,component:et}),r.a.createElement(i.b,{path:u.CONVERTER,component:pt})))):r.a.createElement(i.a,{to:u.LOGIN})}var bt=Object(c.a)((function(){var e=Ce().auth,t=e.logout,a=e.isAuthorized;return r.a.createElement(s.a,{basename:"/currency-converter-test-task"},r.a.createElement(d,{onLogout:t,isAuthorized:a}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:u.LOGIN,component:Be}),r.a.createElement(i.b,{path:u.HOME,component:ht})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var gt=Pe();o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,{value:gt},r.a.createElement(bt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.8c00d185.chunk.js.map
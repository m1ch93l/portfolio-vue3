(function(){"use strict";var e={9877:function(e,t,n){var r=n(9242),o=n(3396),a=n(7718),i=n(588),u=n(9156),c=n(3140),l=n(7033),s=n(5030);const f=(0,o.Uk)("Just learning something new every day");function d(e,t,n,d,m,p){const v=(0,o.up)("PortraitViewDivider"),h=(0,o.up)("SidebarFooter"),b=(0,o.up)("TopNavbar"),g=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l.V,{app:"",modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(v),(0,o.Wm)(h)])),_:1},8,["modelValue"]),(0,o.Wm)(i.L,{app:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u.g,{onClick:t[1]||(t[1]=(0,r.iM)((t=>e.drawer=!e.drawer),["stop"]))}),(0,o.Wm)(s.q,null,{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(b)])),_:1}),(0,o.Wm)(c.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g)])),_:1})])),_:1})}var m=n(7139),p=n(702);const v={class:"d-flex justify-space-between"};function h(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.routes,(t=>((0,o.wg)(),(0,o.j4)(p.T,{key:t.name,to:{name:t.name},variant:e.$route.name===t.name?"outlined":"flat"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(t.text),1)])),_:2},1032,["to","variant"])))),128))])}var b={name:"TopNavbar",data(){return{routes:[{text:"Home",name:"home"},{text:"Project",name:"project"}]}}},g=n(89);const w=(0,g.Z)(b,[["render",h]]);var y=w,_=n(652),j=n(3369),k=n(6824);const P=(0,o._)("h1",{class:"text-center"},"Michael B. Bañaria",-1),x=(0,o._)("p",{class:"text-center"},"A Programmer and Future Innovator",-1);function O(e,t){return(0,o.wg)(),(0,o.j4)(j.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k.o,{justify:"center pt-5"},{default:(0,o.w5)((()=>[(0,o.Wm)(_.V,{icon:"mdi-vuetify",image:"https://avatars.githubusercontent.com/u/91449532?v=4",size:"150"})])),_:1}),(0,o.Wm)(k.o,{justify:"center pt-5"},{default:(0,o.w5)((()=>[P,x])),_:1})])),_:1})}const T={},W=(0,g.Z)(T,[["render",O]]);var C=W,E=n(4075),H=n(1666);const L={class:"my-5 py-5"},S=(0,o._)("div",{class:"pt-0"}," Connect with me ",-1),A=(0,o._)("strong",null,"Portfolio",-1);function N(e,t,n,r,a,i){return(0,o.wg)(),(0,o.j4)(H.c,{class:"bg-indigo-lighten-1 text-center d-flex flex-column"},{default:(0,o.w5)((()=>[(0,o._)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.icons,(e=>((0,o.wg)(),(0,o.j4)(p.T,{key:e,class:"mx-4 my-3 border-lg",icon:e,size:"x-large",variant:"text",href:i.getLink(e)},null,8,["icon","href"])))),128))]),S,(0,o.Wm)(E.J),(0,o._)("div",null,[(0,o.Uk)((0,m.zw)((new Date).getFullYear())+" — ",1),A])])),_:1})}var V={data:()=>({icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-github"]}),methods:{getLink(e){switch(e){case"mdi-facebook":return"https://web.facebook.com/michael.banaria25";case"mdi-twitter":return"https://twitter.com/michaelbbanaria";case"mdi-linkedin":return"https://www.linkedin.com/in/m1ch93l/";case"mdi-github":return"https://github.com/m1ch93l";default:return""}}}};const D=(0,g.Z)(V,[["render",N]]);var F=D,M={name:"App",components:{TopNavbar:y,PortraitViewDivider:C,SidebarFooter:F},data:()=>({drawer:!0})};const U=(0,g.Z)(M,[["render",d]]);var Z=U,K=n(2483);function B(e,t,n,r,a,i){const u=(0,o.up)("Home");return(0,o.wg)(),(0,o.j4)(j.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})}const I=(0,o._)("div",{class:"v-card text"},[(0,o._)("p",{class:"font-weight-bold mb-4 text-h3"},[(0,o.Uk)(" Passionate Full-Stack Developer with Expertise in Vue.js, PHP Laravel, and React.js"),(0,o._)("br")]),(0,o._)("p",{class:"mb-4 text-h5"},[(0,o.Uk)(" Hello, I'm Michael, a dynamic and results-driven Full-Stack Developer with a strong foundation in Vue.js, PHP Laravel, and React.js. With a keen eye for detail and a commitment to creating seamless user experiences, I bring innovation and efficiency to every project."),(0,o._)("br"),(0,o._)("b",null,"Technical Proficiency:"),(0,o._)("br")]),(0,o._)("p",{class:"mb-4 text-h5"}," PHP Laravel: With a solid grasp of PHP Laravel, I excel in developing robust and scalable back-end solutions. My proficiency in Laravel ensures the creation of secure and efficient server-side applications, delivering seamless performance and optimal functionality. ")],-1);function q(e,t,n,r,a,i){return(0,o.wg)(),(0,o.j4)(j.K,null,{default:(0,o.w5)((()=>[I])),_:1})}var z={name:"HomeView"};const R=(0,g.Z)(z,[["render",q]]);var Y=R,J=(0,o.aZ)({name:"HomeView",components:{Home:Y}});const $=(0,g.Z)(J,[["render",B]]);var G=$;const Q=[{path:"/",name:"home",component:G},{path:"/project",name:"project",component:()=>n.e(952).then(n.bind(n,9201))}],X=(0,K.p7)({history:(0,K.PO)("/"),routes:Q});var ee=X,te=n(65),ne=(0,te.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),re=(n(9773),n(3669)),oe=(0,re.Rd)();async function ae(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}ae(),(0,r.ri)(Z).use(ee).use(ne).use(oe).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{461:"686fa9bb",952:"be17c39c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".1a7b7da8.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio-vue3:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={952:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var s=c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkportfolio_vue3"]=self["webpackChunkportfolio_vue3"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9877)}));r=n.O(r)})();
//# sourceMappingURL=app.c46cb229.js.map
(()=>{"use strict";var e={96:(e,n,t)=>{t.d(n,{c:()=>a});var o=t(500),r=t.n(o),s=t(312),i=t.n(s)()(r());i.push([e.id,".news {\n    z-index: 1;\n    margin-bottom: 120px;\n}\n\n.news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #3e028b;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #3e028b;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #ffffff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n\n@media (hover:hover) {\n    .news__item:hover .news__meta-details {\n        left: 0%;\n    }\n\n    .news__item:hover .news__meta-photo {\n        transform: scale(1.3) rotate(3deg);\n    }\n\n    .news__item .news__description .news__read-more a:hover:after {\n        margin-left: 5px;\n        opacity: 1;\n    }\n}",""]);const a=i},376:(e,n,t)=>{t.d(n,{c:()=>a});var o=t(500),r=t.n(o),s=t(312),i=t.n(s)()(r());i.push([e.id,".sources {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n\n    width: 90%;\n    height: 300px;\n\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    margin: 0.5em;\n    padding: 1em 2em;\n\n    background: none;\n    border: 2px solid #6f22c7;\n    border-radius: 10px;\n\n    font: inherit;\n    line-height: 1;\n    color: #f5f5f5;\n    cursor: pointer;\n\n    transition: 0.25s;\n}\n\n.source__item:focus {\n    border-color: #ccc33f;\n    color: #f0ec0d;\n    box-shadow: 0 0.5em 0.5em -0.4em #becc3f;\n\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n\n@media screen and (max-width:400px){\n    .source__item {\n        width: 100%;\n        text-align: center;\n    }\n}\n\n@media (hover:hover) {\n    .source__item:hover {\n        border-color: #f1e208;\n        color: #eeeb43;\n        box-shadow: 0 0.5em 0.5em -0.4em #f7e81e;\n\n        transform: translateY(-0.25em);\n    }\n\n    ::-webkit-scrollbar-thumb:hover {\n      background-color:  #f1ce03;\n    }\n}\n\n::-webkit-scrollbar {\n    width: 8px;\n    background-color: #8d00c5;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #a0a300;\n    border-radius: 6px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: #9103e4;\n  }",""]);const a=i},688:(e,n,t)=>{t.d(n,{c:()=>a});var o=t(500),r=t.n(o),s=t(312),i=t.n(s)()(r());i.push([e.id,"body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nfooter {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    padding: 10px 0;\n}\n\nfooter .footer__content {\n    margin: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n}\n\nfooter .copyright a {\n    color: #444;\n}\n\nfooter .copyright:before {\n    content: '©';\n}\n\n.content__logo-git,\n.content__logo-rss {\n    transition: all .3s ease;\n}\n\n@media (hover:hover) {\n    footer .copyright a:hover {\n        color: #555;\n    }\n\n    .content__logo-git:hover,\n    .content__logo-rss:hover {\n        transform: translateY(-10px);\n        transition: all .3s ease;\n    }\n}",""]);const a=i},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},500:e=>{e.exports=function(e){return e[1]}},308:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var o=t(596),r=t.n(o),s=t(520),i=t.n(s),a=t(176),c=t.n(a),l=t(120),d=t.n(l),u=t(808),f=t.n(u),p=t(936),m=t.n(p),_=t(96),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),r()(_.c,h);const w=_.c&&_.c.locals?_.c.locals:void 0},70:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var o=t(596),r=t.n(o),s=t(520),i=t.n(s),a=t(176),c=t.n(a),l=t(120),d=t.n(l),u=t(808),f=t.n(u),p=t(936),m=t.n(p),_=t(376),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),r()(_.c,h);const w=_.c&&_.c.locals?_.c.locals:void 0},504:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var o=t(596),r=t.n(o),s=t(520),i=t.n(s),a=t(176),c=t.n(a),l=t(120),d=t.n(l),u=t(808),f=t.n(u),p=t(936),m=t.n(p),_=t(688),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),r()(_.c,h);const w=_.c&&_.c.locals?_.c.locals:void 0},596:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var f=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=r(p,o);o.byIndex=a,n.splice(a,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=t(s[i]);n[a].references--}for(var c=o(e,r),l=0;l<s.length;l++){var d=t(s[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=c}}},176:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},444:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(132)),s=t(180);n.default=class{constructor(){this.controller=new r.default,this.view=new s.AppView}start(){document.querySelector(".sources").addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},508:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(716));class s extends r.default{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"e62e5d8e47f54797a40b69e16a34c21e"})}}n.default=s},132:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(508));class s extends r.default{getSources(e){super.getResp({endpoint:"sources"},e)}getNews(e,n){let t=e.target;const o=e.currentTarget;for(;t!==o&&t instanceof HTMLElement&&o instanceof HTMLElement;){if(t.classList.contains("source__item")){const e=t.getAttribute("data-source-id");return void(o.getAttribute("data-source")!==e&&null!==e&&(o.setAttribute("data-source",e),super.getResp({endpoint:"everything",options:{sources:e}},n)))}t=t.parentNode}}}n.default=s},716:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=class{constructor(e,n){this.baseLink=e,this.options=n}getResp({endpoint:e,options:n={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",e,t,n)}errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,n){const t=Object.assign(Object.assign({},this.options),e);let o=`${this.baseLink}${n}?`;return Object.keys(t).forEach((e=>{o+=`${e}=${t[e]}&`})),o.slice(0,-1)}load(e,n,t,o={}){fetch(this.makeUrl(o,n),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error(e)))}}},180:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.AppView=void 0;const r=o(t(984)),s=o(t(392));class i{constructor(){this.news=new r.default,this.sources=new s.default}drawNews(e){const n=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(n)}drawSources(e){const n=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(n)}}n.AppView=i,n.default=i},984:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(308),n.default=class{draw(e){const n=e.length>=10?e.filter(((e,n)=>n<10)):e,t=document.createDocumentFragment(),[o,r]=[document.querySelector("#newsItemTemp"),document.querySelector(".news")];o instanceof HTMLTemplateElement&&n.forEach(((e,n)=>{const r=o.content.cloneNode(!0);n%2&&r.querySelector(".news__item").classList.add("alt"),r.querySelector(".news__meta-photo").style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`,r.querySelector(".news__meta-author").textContent=e.author||e.source.name,r.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),r.querySelector(".news__description-title").textContent=e.title,r.querySelector(".news__description-source").textContent=e.source.name,r.querySelector(".news__description-content").textContent=e.description,r.querySelector(".news__read-more a").setAttribute("href",e.url),t.append(r)})),null!==r&&(r.innerHTML="",r.appendChild(t))}}},392:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(70),n.default=class{draw(e){const n=document.createDocumentFragment(),[t,o]=[document.querySelector("#sourceItemTemp"),document.querySelector(".sources")];t instanceof HTMLTemplateElement&&e.forEach((e=>{const o=t.content.cloneNode(!0);o.querySelector(".source__item-name").textContent=e.name,o.querySelector(".source__item").setAttribute("data-source-id",e.id),n.append(o)})),null!==o&&o.append(n)}}},740:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(444));t(504),(new r.default).start()}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={id:o,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0,t(740)})();
!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("5k7tO",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}})),o.register("1UHsN",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}})),o.register("ffZzF",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return e.get?e.get.call(t):e.value}})),o.register("jdVyQ",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}})),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return n.default(t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var i={};function a(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){a(i,n,o,u,c,"next",t)}function c(t){a(i,n,o,u,c,"throw",t)}u(void 0)}))}};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t,e){f.default(t,e),e.add(t)};var l,f=(l=o("5k7tO"))&&l.__esModule?l:{default:l};var d={};function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t,e,r){e&&p(t.prototype,e);r&&p(t,r);return t};var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){v.default(t,e,r[e])}))}return t};var v=function(t){return t&&t.__esModule?t:{default:t}}(o("hKHmD"));var y={},g=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?h:d,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function y(){}function g(){}function m(){}var _={};c(_,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(k([])));w&&w!==r&&n.call(w,i)&&(_=w);var x=m.prototype=y.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=m,c(x,"constructor",m),c(m,"constructor",g),g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(P.prototype),c(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),c(x,u,"Generator"),c(x,i,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(y);try{regeneratorRuntime=g}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=g:Function("r","regeneratorRuntime = r")(g)}var m=new WeakSet,_=function(){"use strict";function e(){t(u)(this,e),t(s)(this,m),this.API_KEY="eb27e8cbb5d4491c458165c6bd3dc0ba",this.POPULAR_URL="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(this.API_KEY),this.SEARCH_URL="https://api.themoviedb.org/3/search/movie?api_key=".concat(this.API_KEY),this.BASE_IMG_URL="https://image.tmdb.org/t/p/w500",this._query=""}return t(d)(e,[{key:"fetchMostPopularFilms",value:function(){var e=this;return t(i)(t(y).mark((function r(){var n,o;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(e.POPULAR_URL));case 2:return n=r.sent,r.next=5,n.json();case 5:return o=r.sent,r.abrupt("return",t(c)(e,m,b).call(e,o));case 7:case"end":return r.stop()}}),r)})))()}},{key:"searchFilmByTitle",value:function(){var e=this;return t(i)(t(y).mark((function r(){var n,o;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(e.SEARCH_URL,"&query=").concat(e._query));case 2:return n=r.sent,r.next=5,n.json();case 5:return o=r.sent,r.abrupt("return",t(c)(e,m,b).call(e,o));case 7:case"end":return r.stop()}}),r)})))()}},{key:"query",get:function(){return this._query},set:function(t){this._query=t}}]),e}();function b(e){var r=this;return e.results.map((function(e){return t(h)({},e,{posterURI:"".concat(r.BASE_IMG_URL).concat(e.poster_path)})}))}var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(t,e){var r=x.default(t,e,"get");return O.default(t,r)};var x=P(o("1UHsN")),O=P(o("ffZzF"));function P(t){return t&&t.__esModule?t:{default:t}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(t,e,r){M.default(t,e),e.set(t,r)};var M=function(t){return t&&t.__esModule?t:{default:t}}(o("5k7tO"));var E={};Object.defineProperty(E,"__esModule",{value:!0}),E.default=function(t,e,r){var n=L.default(t,e,"set");return k.default(t,n,r),r};var L=S(o("1UHsN")),k=S(o("jdVyQ"));function S(t){return t&&t.__esModule?t:{default:t}}var A=new WeakMap,T=new WeakMap,I=function(){"use strict";function e(r){t(u)(this,e),t(j)(this,A,{writable:!0,value:void 0}),t(j)(this,T,{writable:!0,value:void 0}),this.root=r,t(E)(this,A,[]),t(E)(this,T,{})}return t(d)(e,[{key:"createPostersMarkup",value:function(){var e=this,r=t(w)(this,A).map((function(r){return t(w)(e,T).call(e,r.posterURI,r.original_title,r.genre_ids,r.release_date)})).join("");this.root.innerHTML=r}},{key:"data",get:function(){return t(w)(this,A)},set:function(e){t(E)(this,A,e)}},{key:"template",get:function(){return t(w)(this,T)},set:function(e){t(E)(this,T,e)}}]),e}(),R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=function(t){return N.default(t)||U.default(t)||q.default(t)||F.default()};var N=C(o("kMC0W")),U=C(o("7AJDX")),F=C(o("8CtQK")),q=C(o("auk6i"));function C(t){return t&&t.__esModule?t:{default:t}}function G(e,r,n,o){return'<div class="splide__slide card-container">\n      <img src="'.concat(e,'" alt="').concat(r,'" class="film-image" />\n      <p class="film-title">').concat(r,'</p>\n      <p class="film-genre">').concat(t(R)(n),'<span> | </span><span class="film-year">').concat(o,"</span></p>\n    </div>")}var D=document.querySelector(".splide__list"),H=document.querySelector('[name="searchForm"]'),K=new _,W=new I(D);function Y(){new Splide(".splide",{type:"loop",drag:"free",focus:"center",pagination:!1,perPage:3,autoScroll:{speed:1}}).mount(window.splide.Extensions)}K.fetchMostPopularFilms().then((function(t){W.data=t,W.template=G,W.createPostersMarkup(),Y()})),H.addEventListener("submit",(function(t){t.preventDefault(),K.query=t.target.elements.searchInput.value,K.searchFilmByTitle().then((function(t){W.data=t,W.createPostersMarkup(),Y()}))}))}();
//# sourceMappingURL=index.b322a4fb.js.map
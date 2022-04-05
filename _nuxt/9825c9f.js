(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5,6,10],{384:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"limit":"You\'ve exceeded the request count for the Github API, please retry {0)"},"de":{"limit":"Sie haben die Anzahl der Anfragen für die Github-API überschritten, bitte versuchen Sie es erneut {0}"}}'),delete t.options._Ctor}},388:function(t,e,r){"use strict";var n=r(384),o=r.n(n);e.default=o.a},389:function(t,e,r){"use strict";r.r(e);var n={props:{error:{type:Object,default:function(){}}}},o=r(21),l=r(388),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$props.error?r("div",{staticClass:"bg-linked-600 text-white p-12 mt-12"},[r("h1",{staticClass:"text-6xl font-black mb-4 block"},[t._v("Oops.")]),t._v(" "),r("i18n",{staticClass:"mb-8 text-2xl",attrs:{path:"limit",tag:"p"}},[t._v("\n    "+t._s(t.$props.error.resettingIn)+"\n  ")])],1):t._e()}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports},392:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return f}));var n=r(7),o=(r(49),r(393),r(5),r(385)),l="latest",c=function(t){var e=Number(t.headers.get("x-ratelimit-used"));if(!t.ok&&60===e){var r=o.DateTime.fromSeconds(Number(t.headers.get("x-ratelimit-reset"))).toRelative({locale:"en-US"});return{error:!0,resettingIn:r,message:"You've exceeded the request count for the Github API, please retry ".concat(r,".")}}return{error:!1}},d=function(t){return t===l?l:"tags/v".concat(t)},f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,f,m,h=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.length>0&&void 0!==h[0]?h[0]:l,r=null,n="https://github.com/lostdesign/linked/releases/".concat(d(e)),o="https://api.github.com/repos/lostdesign/linked/releases/".concat(d(e)),t.prev=4,t.next=7,fetch(o);case 7:if(f=t.sent,!(m=c(f)).error){t.next=12;break}throw r=m,new Error(m.message);case 12:return t.next=14,f.json();case 14:return t.t0=t.sent,t.t1=r,t.t2=n,t.abrupt("return",{release:t.t0,error:t.t1,fallbackUrl:t.t2});case 20:return t.prev=20,t.t3=t.catch(4),t.abrupt("return",{release:null,error:r,fallbackUrl:n});case 23:case"end":return t.stop()}}),t,null,[[4,20]])})));return function(){return t.apply(this,arguments)}}()},393:function(t,e,r){"use strict";var n=r(22),o=r(2),l=r(4),c=r(95),d=r(36),f=r(28),m=r(169),h=r(63),_=r(129),x=r(244),v=r(6),k=r(82).f,y=r(57).f,C=r(30).f,w=r(394),I=r(245).trim,N="Number",j=o.Number,E=j.prototype,O=o.TypeError,$=l("".slice),M=l("".charCodeAt),A=function(t){var e=x(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,r,n,o,l,c,d,code,f=x(t,"number");if(_(f))throw O("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=I(f),43===(e=M(f,0))||45===e){if(88===(r=M(f,2))||120===r)return NaN}else if(48===e){switch(M(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=$(f,2)).length,d=0;d<c;d++)if((code=M(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(c(N,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var D,T=function(t){var e=arguments.length<1?0:j(A(t)),r=this;return h(E,r)&&v((function(){w(r)}))?m(Object(e),r,T):e},G=n?k(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;G.length>F;F++)f(j,D=G[F])&&!f(T,D)&&C(T,D,y(j,D));T.prototype=E,E.constructor=T,d(o,N,T)}},395:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Want latest news and updates?","description":"Join over a hundred other users in our discord community talking about linked. Let us know what you think about the project and share your ideas with everyone.","say_hello":"Say hello on discord!"},"de":{"title":"Möchtest Du die neuesten Nachrichten und Updates?","description":"Schließe dich über hundert anderen Nutzern in unserer Discord-Community an, die über linked sprechen. Lass uns wissen, was Du über das Projekt denkst und teile Deine Ideen mit allen.","say_hello":"Sag Hallo auf Discord!"}}'),delete t.options._Ctor}},396:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"maintainer":{"title":"Maintainer","subline":"The head behind the project."},"lovely_contributors":"Contributors","thanks":"Thanks to the awesome people that have contributed to linked."},"de":{"maintainer":{"title":"Maintainer","subline":"Der Kopf hinter dem Projekt."},"lovely_contributors":"Mitwirkende","thanks":"Vielen Dank an alle, die zu linked beigetragen haben."}}'),delete t.options._Ctor}},407:function(t,e,r){"use strict";var n=r(395),o=r.n(n);e.default=o.a},408:function(t,e,r){"use strict";var n=r(396),o=r.n(n);e.default=o.a},423:function(t,e,r){"use strict";r.r(e);var n=r(172),o={components:{IconDiscord:r.n(n).a},methods:{trackClick:function(t){this.$fathom.trackGoal(t,0)}}},l=r(21),c=r(407),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-6 py-6 bg-linked-700 rounded-lg md:p-12 lg:flex xl:items-center mb-12 justify-between items-center space-x-0 lg:space-x-6"},[r("div",{staticClass:"xl:w-0 xl:flex-1"},[r("h2",{staticClass:"text-2xl font-extrabold tracking-tight text-white sm:text-3xl"},[t._v("\n      "+t._s(t.$t("title"))+"\n    ")]),t._v(" "),r("p",{staticClass:"mt-3 w-full lg:max-w-2xl text-lg leading-6 text-linked-100"},[t._v("\n      "+t._s(t.$t("description"))+"\n    ")])]),t._v(" "),r("div",[r("a",{staticClass:"text-lg w-full flex items-center justify-center px-5 py-3 border border-transparent shadow font-medium rounded-md text-white bg-linked-500 hover:bg-linked-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-linked-700 focus:ring-white mt-6 lg:mt-0 sm:flex-shrink-0",attrs:{href:"https://discord.gg/uNjJzZvccr"},nativeOn:{click:function(e){return t.trackClick("M6KCBDQG",0)}}},[r("icon-discord",{staticClass:"w-6 h-6 mr-4"}),t._v("\n      "+t._s(t.$t("say_hello"))+"\n    ")],1)])])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},424:function(t,e,r){"use strict";r.r(e);r(17),r(5);var n={props:{contributors:{type:Array,default:null},error:{type:Object,default:null}},computed:{getMaintainer:function(){return this.$props.contributors.filter((function(t){return"lostdesign"===t.login}))}}},o=r(21),l=r(408),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.contributors?r("div",{staticClass:"space-y-4 sm:space-y-8 mt-12"},[r("div",{staticClass:"space-y-4 sm:space-y-8"},[r("div",{staticClass:"space-y-5 sm:space-y-4 lg:max-w-5xl"},[r("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v(t._s(t.$t("maintainer.title")))]),t._v(" "),r("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(t.$t("maintainer.subline")))])]),t._v(" "),r("a",{ref:"norel noopener",staticClass:"inline-flex flex-col m-0 mb-6 sm:mb-0 sm:m-4 md:m-6 lg:m-8 space-y-4",attrs:{target:"_blank",href:t.getMaintainer[0].html_url}},[r("img",{staticClass:"mx-auto h-24 w-24 md:h-20 md:w-20 rounded-full lg:w-24 lg:h-24",attrs:{src:t.getMaintainer[0].avatar_url,alt:t.getMaintainer[0].login+" profile image"}}),t._v(" "),r("div",{staticClass:"space-y-4"},[r("div",{staticClass:"text-center font-medium lg:text-sm"},[r("h3",{staticClass:"text-base font-bold"},[t._v(t._s(t.getMaintainer[0].login))]),t._v(" "),r("p",{staticClass:"text-xs text-linked"},[t._v(t._s(t.getMaintainer[0].contributions)+" commits")])])])])]),t._v(" "),r("div",{staticClass:"space-y-5 sm:space-y-4 lg:max-w-5xl"},[r("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v(t._s(t.$t("lovely_contributors")))]),t._v(" "),r("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(t.$t("thanks")))])]),t._v(" "),r("ul",{staticClass:"flex flex-wrap",attrs:{role:"list"}},[t._l(t.$props.contributors,(function(e,n){return["lostdesign"!==e.login?r("a",{ref:"norel noopener",refInFor:!0,staticClass:"basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-1/12 flex flex-col justify-center grow shrink-0 self-center items-center m-0 mb-6 sm:mb-0 sm:m-4 md:m-6 lg:m-8 space-y-4",attrs:{target:"_blank",href:e.html_url}},[r("li",[r("img",{staticClass:"mx-auto h-24 w-24 md:h-20 md:w-20 rounded-full lg:w-24 lg:h-24",attrs:{src:e.avatar_url,alt:e.login+" profile image"}}),t._v(" "),r("div",{staticClass:"space-y-4"},[r("div",{staticClass:"text-center font-medium lg:text-sm"},[r("h3",{staticClass:"text-base font-bold"},[t._v(t._s(e.login))]),t._v(" "),r("p",{staticClass:"text-xs text-linked"},[t._v(t._s(e.contributions)+" commits")])])])])]):t._e()]}))],2)]):t._e(),t._v(" "),t.error?r("github-error",{attrs:{error:t.error}}):t._e()],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;installComponents(component,{GithubError:r(389).default})},465:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(49),r(5),r(392)),l={asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=null,t.prev=1,t.next=4,fetch("https://api.github.com/repos/lostdesign/linked/contributors");case 4:if(r=t.sent,!(n=Object(o.a)(r)).error){t.next=9;break}throw e=n,new Error(n.message);case 9:return t.next=11,r.json();case 11:return t.t0=t.sent,t.abrupt("return",{contributors:t.t0,error:null});case 15:return t.prev=15,t.t1=t.catch(1),t.abrupt("return",{contributors:null,error:e});case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))()}},c=r(21),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("content-wrapper",{staticClass:"pt-16"},[r("community-discord"),t._v(" "),r("community-contributors",{attrs:{contributors:t.contributors,error:t.error}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommunityDiscord:r(423).default,CommunityContributors:r(424).default,ContentWrapper:r(243).default})}}]);
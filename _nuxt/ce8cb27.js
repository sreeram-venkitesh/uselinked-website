(window.webpackJsonp=window.webpackJsonp||[]).push([[19,6,13,15],{377:function(t,e,r){"use strict";r.r(e);var n=r(24),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0}}},l=r(24),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"-ml-1.5 mb-4 p-1 text-4xl sm:text-5xl lg:text-6xl font-bold"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d}));var n=r(4),l=(r(45),r(241),r(6),r(382)),o="latest",c=function(t){var e=Number(t.headers.get("x-ratelimit-used"));if(!t.ok&&60===e){var r=l.DateTime.fromSeconds(Number(t.headers.get("x-ratelimit-reset"))).toRelative({locale:undefined.$i18n.locale});return{error:!0,reset:r,message:"You've exceeded the request count for the Github API, please retry ".concat(r,".")}}return{error:!1}},m=function(t){return t===o?o:"tags/v".concat(t)},d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,l,d,f,v=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.length>0&&void 0!==v[0]?v[0]:o,r=null,n="https://github.com/lostdesign/linked/releases/".concat(m(e)),l="https://api.github.com/repos/lostdesign/linked/releases/".concat(m(e)),t.prev=4,t.next=7,fetch(l);case 7:if(d=t.sent,!(f=c(d)).error){t.next=12;break}throw r=f,new Error(f.message);case 12:return t.next=14,d.json();case 14:return t.t0=t.sent,t.t1=r,t.t2=n,t.abrupt("return",{release:t.t0,error:t.t1,fallbackUrl:t.t2});case 20:return t.prev=20,t.t3=t.catch(4),t.abrupt("return",{release:null,error:r,fallbackUrl:n});case 23:case"end":return t.stop()}}),t,null,[[4,20]])})));return function(){return t.apply(this,arguments)}}()},390:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"About","lovely_contributors":"The lovely contributors","thanks":"Thanks to the awesome people that have contributed to linked."},"de":{"title":"Über","lovely_contributors":"Mitwirkende","thanks":"Vielen Dank an alle, die zu linked beigetragen haben."}}'),delete t.options._Ctor}},404:function(t,e,r){"use strict";var n=r(390),l=r.n(n);e.default=l.a},447:function(t,e,r){"use strict";r.r(e);var n=r(4),l=(r(45),r(6),r(385)),o=(r(399),{asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=null,t.prev=1,t.next=4,fetch("https://api.github.com/repos/lostdesign/linked/contributors");case 4:if(r=t.sent,!(n=Object(l.a)(r)).error){t.next=9;break}throw e=n,new Error(n.message);case 9:return t.next=11,r.json();case 11:return t.t0=t.sent,t.abrupt("return",{contributors:t.t0,error:null});case 15:return t.prev=15,t.t1=t.catch(1),t.abrupt("return",{contributors:null,error:e});case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))()}}),c=r(24),m=r(404),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("content-wrapper",{staticClass:"pt-16"},[r("page-heading",{attrs:{title:t.$t("title")}}),t._v(" "),r("p",{staticClass:"mt-4 text-lg text-gray-500"},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, ratione, tempore. Accusantium adipisci aut beatae cumque deserunt esse et iusto laborum omnis voluptates. Animi aperiam at consequatur consequuntur cumque enim eos error et eum, eveniet exercitationem harum id illo laborum minus nihil non praesentium provident quasi quibusdam, quos rem rerum saepe sed ullam voluptate voluptatibus voluptatum. Ab accusamus ad adipisci aliquid beatae consequuntur dignissimos distinctio, doloribus exercitationem itaque libero magnam, nulla numquam optio quia quisquam, suscipit veritatis voluptates? Accusantium asperiores at culpa, ea eligendi ex exercitationem illum ipsa magni minus modi nemo nobis non nulla omnis, praesentium totam veniam voluptas!\n  ")]),t._v(" "),r("div",{staticClass:"space-y-4 sm:space-y-8 mt-12"},[r("div",{staticClass:"space-y-5 sm:space-y-4 lg:max-w-5xl"},[r("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v(t._s(t.$t("lovely_contributors")))]),t._v(" "),r("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(t.$t("thanks")))])]),t._v(" "),r("ul",{staticClass:"flex flex-wrap",attrs:{role:"list"}},[t._l(t.contributors,(function(e,n){return["lostdesign"!==e.login?r("a",{ref:"norel noopener",refInFor:!0,staticClass:"basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-1/12 flex flex-col justify-center grow shrink-0 self-center items-center m-0 mb-6 sm:mb-0 sm:m-4 md:m-6 lg:m-8 space-y-4",attrs:{href:e.html_url}},[r("li",[r("img",{staticClass:"mx-auto h-24 w-24 md:h-20 md:w-20 rounded-full lg:w-24 lg:h-24",attrs:{src:e.avatar_url,alt:e.login+" profile image"}}),t._v(" "),r("div",{staticClass:"space-y-4"},[r("div",{staticClass:"text-center font-medium lg:text-sm"},[r("h3",{staticClass:"text-base font-bold"},[t._v(t._s(e.login))]),t._v(" "),r("p",{staticClass:"text-xs text-linked"},[t._v(t._s(e.contributions)+" commits")])])])])]):t._e()]}))],2)])],1)}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;installComponents(component,{PageHeading:r(378).default,ContentWrapper:r(377).default})}}]);
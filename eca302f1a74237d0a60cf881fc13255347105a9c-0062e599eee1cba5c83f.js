(self.webpackChunkthefamouscat_artist=self.webpackChunkthefamouscat_artist||[]).push([[787],{9662:function(t,n,e){var r=e(7854),o=e(614),i=e(6330),a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},9670:function(t,n,e){var r=e(7854),o=e(111),i=r.String,a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),a=function(t){return function(n,e,a){var c,u=r(n),f=i(u),s=o(a,f);if(t&&e!=e){for(;f>s;)if((c=u[s++])!=c)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,n,e){var r=e(2597),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,n,e){for(var c=o(n),u=a.f,f=i.f,s=0;s<c.length;s++){var l=c[s];r(t,l)||e&&r(e,l)||u(t,l,f(n,l))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),a=e(8113),c=i.process,u=i.Deno,f=c&&c.versions||u&&u.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),a=e(1320),c=e(3505),u=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,v,m=t.target,g=t.global,b=t.stat;if(e=g?r:b?r[m]||c(m,{}):(r[m]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(g?s:m+(b?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,e){var r=e(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,e){var r=e(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,e){var r=e(9781),o=e(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,f=c&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:f}},1702:function(t,n,e){var r=e(4374),o=Function.prototype,i=o.bind,a=o.call,c=r&&i.bind(a,a);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7854),o=e(1702),i=e(7293),a=e(4326),c=r.Object,u=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?u(t,""):c(t)}:c},2788:function(t,n,e){var r=e(1702),o=e(614),i=e(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,n,e){var r,o,i,a=e(8536),c=e(7854),u=e(1702),f=e(111),s=e(8880),l=e(2597),p=e(5465),v=e(6200),m=e(3501),g="Object already initialized",b=c.TypeError,h=c.WeakMap;if(a||p.state){var y=p.state||(p.state=new h),d=u(y.get),x=u(y.has),w=u(y.set);r=function(t,n){if(x(y,t))throw new b(g);return n.facade=t,w(y,t,n),n},o=function(t){return d(y,t)||{}},i=function(t){return x(y,t)}}else{var S=v("state");m[S]=!0,r=function(t,n){if(l(t,S))throw new b(g);return n.facade=t,s(t,S,n),n},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw b("Incompatible receiver, "+t+" required");return e}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,a=function(t,n){var e=u[c(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},f=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(7854),o=e(5005),i=e(614),a=e(7976),c=e(3307),u=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&a(n.prototype,u(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),a=r.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3070:function(t,n,e){var r=e(7854),o=e(9781),i=e(4664),a=e(3353),c=e(9670),u=e(4948),f=r.TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p="enumerable",v="configurable",m="writable";n.f=o?a?function(t,n,e){if(c(t),n=u(n),c(e),"function"==typeof t&&"prototype"===n&&"value"in e&&m in e&&!e.writable){var r=l(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:v in e?e.configurable:r.configurable,enumerable:p in e?e.enumerable:r.enumerable,writable:!1})}return s(t,n,e)}:s:function(t,n,e){if(c(t),n=u(n),c(e),i)try{return s(t,n,e)}catch(r){}if("get"in e||"set"in e)throw f("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(6916),i=e(5296),a=e(9114),c=e(5656),u=e(4948),f=e(2597),s=e(4664),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=c(t),n=u(n),s)try{return l(t,n)}catch(e){}if(f(t,n))return a(!o(i.f,t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),a=e(1318).indexOf,c=e(3501),u=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,s=[];for(e in r)!o(c,e)&&o(r,e)&&u(s,e);for(;n.length>f;)o(r,e=n[f++])&&(~a(s,e)||u(s,e));return s}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},2140:function(t,n,e){var r=e(7854),o=e(6916),i=e(614),a=e(111),c=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!a(r=o(e,t)))return r;if(i(e=t.valueOf)&&!a(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!a(r=o(e,t)))return r;throw c("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(1702),i=e(8006),a=e(5181),c=e(9670),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(c(t)),e=a.f;return e?u(n,e(t)):n}},1320:function(t,n,e){var r=e(7854),o=e(614),i=e(2597),a=e(8880),c=e(3505),u=e(2788),f=e(9909),s=e(6530).CONFIGURABLE,l=f.get,p=f.enforce,v=String(String).split("String");(t.exports=function(t,n,e,u){var f,l=!!u&&!!u.unsafe,m=!!u&&!!u.enumerable,g=!!u&&!!u.noTargetGet,b=u&&void 0!==u.name?u.name:n;o(e)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||s&&e.name!==b)&&a(e,"name",b),(f=p(e)).source||(f.source=v.join("string"==typeof b?b:""))),t!==r?(l?!g&&t[n]&&(m=!0):delete t[n],m?t[n]=e:a(t,n,e)):m?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||u(this)}))},4488:function(t,n,e){var r=e(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?e:n)(r)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(7854),o=e(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,e){var r=e(7854),o=e(6916),i=e(111),a=e(2190),c=e(8173),u=e(2140),f=e(5112),s=r.TypeError,l=f("toPrimitive");t.exports=function(t,n){if(!i(t)||a(t))return t;var e,r=c(t,l);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||a(e))return e;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),u(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},6330:function(t,n,e){var r=e(7854).String;t.exports=function(t){try{return r(t)}catch(n){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,e){var r=e(9781),o=e(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),a=e(9711),c=e(133),u=e(3307),f=o("wks"),s=r.Symbol,l=s&&s.for,p=u?s:s&&s.withoutSetter||a;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=u&&l?l(n):p(n)}return f[t]}},5837:function(t,n,e){e(2109)({global:!0},{globalThis:e(7854)})},5743:function(t,n,e){e(5837)},7630:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var r=e(7294),o=e(3587).default.section.withConfig({displayName:"BannerModuleStyles",componentId:"sc-1qv6pl8-0"})(["height:100vh;position:relative;padding:30px var(--borderSpacing);.artwork-size{font-style:italic;}.artwork-classification{font-weight:bold;margin-bottom:12px;}.container{height:100%;display:flex;align-items:flex-end;justify-content:flex-start;}.gradient,.banner__image{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;}.gradient{background:radial-gradient(at bottom left,rgba(0,0,0,0.5),rgba(0,0,0,0));}.banner__content{margin-top:100px;position:relative;z-index:2;min-height:33vh;width:100%;color:var(--primaryFontColorNegative);h1,h2{text-shadow:var(--textShadow);}h1{border-bottom:2px solid rgba(255,255,255,0.15);display:inline-block;}h2{font-size:var(--h4);font-weight:400;}h3{font-size:var(--h6);font-weight:100;}h1,.price{margin-top:0;font-size:var(--bannerTitle);}}.banner__btns{display:flex;gap:var(--gap);a,img{margin-top:0.5rem;}}"]),i=e(396),a=e(3360),c=e(3761),u=e(1597),f=e(9529),s=function(t){var n=t.children,e=t.title,s=t.subTitle,l=t.learnMoreTitle,p=t.learnMoreTarget,v=t.bgImage;var m="";return(0,f.le)(s)||(m="string"==typeof s?r.createElement("h2",null,s):s),r.createElement(r.Fragment,null,r.createElement(o,null,v?r.createElement(i.G,{className:"banner__image",imgClassName:"banner__image--content",alt:e+" - Banner",image:v}):r.createElement(i.G,{className:"banner__image",imgClassName:"banner__image--content",alt:(0,f.wD)().name+" - Banner",image:(0,f.wD)().metadata.image.bgImage}),r.createElement("div",{className:"container"},r.createElement("div",{className:"banner__content"},r.createElement(a.ZP,{container:!0,spacing:8},r.createElement(a.ZP,{item:!0,xl:6,lg:6,md:6,sm:12,xs:12},e&&r.createElement("h1",null,e,r.createElement("span",{style:{color:"var(--primary)"}},".")),m,p&&r.createElement("div",{className:"banner__btns"},r.createElement(c.Z,{onClick:function(t){return n=p,void(0,u.c4)(n);var n},text:l||"Learn More"}))),r.createElement(a.ZP,{item:!0,xl:6,lg:6,md:6,sm:12,xs:12},n&&n)))),r.createElement("div",{className:"gradient"})),r.createElement("span",{id:"topContent"}))}}}]);
//# sourceMappingURL=eca302f1a74237d0a60cf881fc13255347105a9c-0062e599eee1cba5c83f.js.map
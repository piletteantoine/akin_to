window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return r(b.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&y[o]!==n)return"pfx"==t?o:!0}return!1}function l(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+j.join(r+" ")+r).split(" "),l(o,t,n))}var u="2.6.2",f={},d=!0,p=t.documentElement,m="modernizr",h=t.createElement(m),y=h.style,v,g={}.toString,b=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",C=E.split(" "),j=E.toLowerCase().split(" "),w={},S={},x={},N=[],F=N.slice,k,M=function(e,n,r,o){var i,a,c,l,s=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:m+(r+1),s.appendChild(c);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),s.id=m,(u?s:f).innerHTML+=i,f.appendChild(s),u||(f.style.background="",f.style.overflow="hidden",l=p.style.overflow,p.style.overflow="hidden",p.appendChild(f)),a=n(s,e),u?s.parentNode.removeChild(s):(f.parentNode.removeChild(f),p.style.overflow=l),!!a},O={}.hasOwnProperty,T;T=i(O,"undefined")||i(O.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=F.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(F.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(F.call(arguments)))};return r}),w.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in p.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e};for(var L in w)T(w,L)&&(k=L.toLowerCase(),f[k]=w[L](),N.push((f[k]?"":"no-")+k));return f.addTest=function(e,t){if("object"==typeof e)for(var r in e)T(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof d&&d&&(p.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),h=v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=h[e[p]];return t||(t={},m++,e[p]=m,h[m]=t),t}function i(e,n,r){if(n||(n=t),y)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!u.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),y)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),l=c.length;l>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t);var r=o(e);return v.shivCSS&&!d&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),y||c(e,r),e}var s=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d,p="_html5shiv",m=0,h={},y;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,y=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,y=!0}}();var v={elements:s.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:s.shivCSS!==!1,supportsUnknownElements:y,shivMethods:s.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:a};e.html5=v,l(t)}(this,t),f._version=u,f._prefixes=b,f._domPrefixes=j,f._cssomPrefixes=C,f.testProp=function(e){return c([e])},f.testAllProps=s,f.testStyles=M,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(d?" js "+N.join(" "):""),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();y=1,e?e.t?d(function(){("c"==e.t?F.injectCss:F.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function l(e,n,r,o,i,l,s){function u(t){if(!m&&a(f.readyState)&&(E.r=m=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&d(function(){b.removeChild(f)},50);for(var r in S[n])S[n].hasOwnProperty(r)&&S[n][r].onload()}}var s=s||F.errorTimeout,f=t.createElement(e),m=0,v=0,E={t:r,s:n,e:i,a:l,x:s};1===S[n]&&(v=1,S[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,v)},h.splice(o,0,E),"img"!=e&&(v||2===S[n]?(b.insertBefore(f,g?null:p),d(u,s)):S[n].push(f))}function s(e,t,n,r,i){return y=0,t=t||"j",o(e)?l("c"==t?C:E,e,t,this.i++,n,r,i):(h.splice(this.i++,0,e),1==h.length&&c()),this}function u(){var e=F;return e.loader={load:s,i:0},e}var f=t.documentElement,d=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],y=0,v="MozAppearance"in f.style,g=v&&!!t.createRange().compareNode,b=g?f:p.parentNode,f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,E=v?"object":f?"script":"img",C=f?"script":E,j=Array.isArray||function(e){return"[object Array]"==m.call(e)},w=[],S={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},N,F;F=function(e){function t(e){var e=e.split("!"),t=w.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,i,a;for(i=0;r>i;i++)a=e[i].split("="),(o=x[a.shift()])&&(n=o(n,a));for(i=0;t>i;i++)n=w[i](n);return n}function a(e,o,i,a,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,i,a,c):(S[l.url]?l.noexec=!0:S[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&i.load(function(){u(),o&&o(l.origUrl,c,a),s&&s(l.origUrl,c,a),S[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(s=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}),a(e,s,t,0,c);else if(Object(e)===e)for(p in d=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--d&&(r(s)?s=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}:s[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(u[p])),a(e[p],s,t,p,c))}else!n&&f()}var c=!!e.test,l=e.load||e.both,s=e.callback||i,u=s,f=e.complete||i,d,p;n(c?e.yep:e.nope,!!l),l&&n(l)}var l,s,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(j(e))for(l=0;l<e.length;l++)s=e[l],o(s)?a(s,0,f,0):j(s)?F(s):Object(s)===s&&c(s,f);else Object(e)===e&&c(e,f)},F.addPrefix=function(e,t){x[e]=t},F.addFilter=function(e){w.push(e)},F.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",N=function(){t.removeEventListener("DOMContentLoaded",N,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u=t.createElement("script"),f,m,o=o||F.errorTimeout;u.src=e;for(m in r)u.setAttribute(m,r[m]);n=s?c:n||i,u.onreadystatechange=u.onload=function(){!f&&a(u.readyState)&&(f=1,n(),u.onload=u.onreadystatechange=null)},d(function(){f||(f=1,n(1))},o),l?u.onload():p.parentNode.insertBefore(u,p)},e.yepnope.injectCss=function(e,n,r,o,a,l){var o=t.createElement("link"),s,n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(p.parentNode.insertBefore(o,p),d(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
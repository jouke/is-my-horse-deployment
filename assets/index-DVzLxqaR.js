const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pwa-action-sheet.entry-DOLyExL3.js","assets/index-BxPSzMVi.js","assets/pwa-camera-modal.entry-BWKjso7Q.js","assets/pwa-toast.entry-BA5aEHga.js","assets/pwa-camera-modal-instance.entry-B8r9Qb8v.js","assets/pwa-camera.entry-DXh_f5Au.js","assets/index-Cjc9EUV3.js","assets/web-DXNlKEUN.js"])))=>i.map(i=>d[i]);
import{r as hb,g as k,h as D2,R as Ht,l as L2,i as z2,u as Cc,j as Yt,N as j2,s as B2,k as H2,m as U2,n as Ev,_ as $t,o as I2,p as P2,q as V2,S as fb,M as F2,t as ba,v as Cv,w as zi,x as pb,Q as q2,y as Av,z as G2,A as Tv,B as Mv,F as Y2,G as Nv,I as $v,J as X2,K as de,L as Ha,O as Zl,P as si,T as m,U as Jn,V as Kl,X as W2,Y as Th,Z as mb,$ as gb,a0 as Mh,a1 as Ov,e as xt,a2 as Q2,a3 as Z2,a4 as K2,a5 as J2,a6 as ex,a7 as R,a8 as vb,a9 as bb,aa as za,ab as yb,ac as fi,ad as tx,ae as ax,af as Nh,ag as Cs,ah as rf,ai as ix,aj as Ac,ak as Tc,al as nx,am as _b,an as xb,ao as lx,ap as rx,aq as sx,ar as ox,as as wb,at as Sb,au as cx,av as ux,aw as dx,ax as la,ay as hx,az as fx,aA as px,aB as mx,aC as sf,aD as Eb,aE as of,aF as gx,aG as vx,aH as bx,aI as yx,aJ as _x,aK as xx,aL as wx,aM as Sx,aN as Ex,aO as Cx,aP as Ax,aQ as Tx,aR as $h,aS as Nt,aT as gc}from"./index-BxPSzMVi.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function l(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=l(o);fetch(o.href,u)}})();var Zd={exports:{}},qt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function Mx(){if(kv)return qt;kv=1;var t=hb();function i(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,p,b){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:g,containerInfo:p,implementation:b}}var h=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,qt.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return u(g,p,null,b)},qt.flushSync=function(g){var p=h.T,b=r.p;try{if(h.T=null,r.p=2,g)return g()}finally{h.T=p,r.p=b,r.d.f()}},qt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},qt.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},qt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,_=f(b,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:w,fetchPriority:y}):b==="script"&&r.d.X(g,{crossOrigin:_,integrity:w,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},qt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=f(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},qt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,_=f(b,p.crossOrigin);r.d.L(g,b,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},qt.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=f(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},qt.requestFormReset=function(g){r.d.r(g)},qt.unstable_batchedUpdates=function(g,p){return g(p)},qt.useFormState=function(g,p,b){return h.H.useFormState(g,p,b)},qt.useFormStatus=function(){return h.H.useHostTransitionStatus()},qt.version="19.0.0",qt}var Rv;function Cb(){if(Rv)return Zd.exports;Rv=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Zd.exports=Mx(),Zd.exports}Cb();/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oh(){return Oh=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r])}return t},Oh.apply(this,arguments)}function Nx(t,i){if(t==null)return{};var l={},r=Object.keys(t),o,u;for(u=0;u<r.length;u++)o=r[u],!(i.indexOf(o)>=0)&&(l[o]=t[o]);return l}function $x(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ox(t,i){return t.button===0&&(!i||i==="_self")&&!$x(t)}function kh(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((i,l)=>{let r=t[l];return i.concat(Array.isArray(r)?r.map(o=>[l,o]):[[l,r]])},[]))}function kx(t,i){let l=kh(t);return i&&i.forEach((r,o)=>{l.has(o)||i.getAll(o).forEach(u=>{l.append(o,u)})}),l}const Rx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dx="6";try{window.__reactRouterVersion=Dx}catch{}const Lx="startTransition",Dv=Ht[Lx];function zx(t){let{basename:i,children:l,future:r,window:o}=t,u=k.useRef();u.current==null&&(u.current=D2({window:o,v5Compat:!0}));let h=u.current,[f,g]=k.useState({action:h.action,location:h.location}),{v7_startTransition:p}=r||{},b=k.useCallback(_=>{p&&Dv?Dv(()=>g(_)):g(_)},[g,p]);return k.useLayoutEffect(()=>h.listen(b),[h,b]),k.useEffect(()=>L2(r),[r]),k.createElement(z2,{basename:i,children:l,location:f.location,navigationType:f.action,navigator:h,future:r})}const jx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hx=k.forwardRef(function(i,l){let{onClick:r,relative:o,reloadDocument:u,replace:h,state:f,target:g,to:p,preventScrollReset:b,viewTransition:_}=i,w=Nx(i,Rx),{basename:y}=k.useContext(j2),S,T=!1;if(typeof p=="string"&&Bx.test(p)&&(S=p,jx))try{let U=new URL(window.location.href),j=p.startsWith("//")?new URL(U.protocol+p):new URL(p),$=B2(j.pathname,y);j.origin===U.origin&&$!=null?p=$+j.search+j.hash:T=!0}catch{}let M=H2(p,{relative:o}),A=Ux(p,{replace:h,state:f,target:g,preventScrollReset:b,relative:o,viewTransition:_});function D(U){r&&r(U),U.defaultPrevented||A(U)}return k.createElement("a",Oh({},w,{href:S||M,onClick:T||u?r:D,ref:l,target:g}))});var Lv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Lv||(Lv={}));var zv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(zv||(zv={}));function Ux(t,i){let{target:l,replace:r,state:o,preventScrollReset:u,relative:h,viewTransition:f}=i===void 0?{}:i,g=Yt(),p=Cc(),b=U2(t,{relative:h});return k.useCallback(_=>{if(Ox(_,l)){_.preventDefault();let w=r!==void 0?r:Ev(p)===Ev(b);g(t,{replace:w,state:o,preventScrollReset:u,relative:h,viewTransition:f})}},[p,g,b,r,o,l,t,u,h,f])}function Ix(t){let i=k.useRef(kh(t)),l=k.useRef(!1),r=Cc(),o=k.useMemo(()=>kx(r.search,l.current?null:i.current),[r.search]),u=Yt(),h=k.useCallback((f,g)=>{const p=kh(typeof f=="function"?f(o):f);l.current=!0,u("?"+p,g)},[u,o]);return[o,h]}var Kd={exports:{}},ns={},Jd={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function Px(){return jv||(jv=1,(function(t){function i(I,Z){var ee=I.length;I.push(Z);e:for(;0<ee;){var ce=ee-1>>>1,ye=I[ce];if(0<o(ye,Z))I[ce]=Z,I[ee]=ye,ee=ce;else break e}}function l(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var Z=I[0],ee=I.pop();if(ee!==Z){I[0]=ee;e:for(var ce=0,ye=I.length,ct=ye>>>1;ce<ct;){var Ae=2*(ce+1)-1,Et=I[Ae],K=Ae+1,ze=I[K];if(0>o(Et,ee))K<ye&&0>o(ze,Et)?(I[ce]=ze,I[K]=ee,ce=K):(I[ce]=Et,I[Ae]=ee,ce=Ae);else if(K<ye&&0>o(ze,ee))I[ce]=ze,I[K]=ee,ce=K;else break e}}return Z}function o(I,Z){var ee=I.sortIndex-Z.sortIndex;return ee!==0?ee:I.id-Z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();t.unstable_now=function(){return h.now()-f}}var g=[],p=[],b=1,_=null,w=3,y=!1,S=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var Z=l(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=I)r(p),Z.sortIndex=Z.expirationTime,i(g,Z);else break;Z=l(p)}}function j(I){if(T=!1,U(I),!S)if(l(g)!==null)S=!0,le();else{var Z=l(p);Z!==null&&te(j,Z.startTime-I)}}var $=!1,W=-1,X=5,oe=-1;function z(){return!(t.unstable_now()-oe<X)}function q(){if($){var I=t.unstable_now();oe=I;var Z=!0;try{e:{S=!1,T&&(T=!1,A(W),W=-1),y=!0;var ee=w;try{t:{for(U(I),_=l(g);_!==null&&!(_.expirationTime>I&&z());){var ce=_.callback;if(typeof ce=="function"){_.callback=null,w=_.priorityLevel;var ye=ce(_.expirationTime<=I);if(I=t.unstable_now(),typeof ye=="function"){_.callback=ye,U(I),Z=!0;break t}_===l(g)&&r(g),U(I)}else r(g);_=l(g)}if(_!==null)Z=!0;else{var ct=l(p);ct!==null&&te(j,ct.startTime-I),Z=!1}}break e}finally{_=null,w=ee,y=!1}Z=void 0}}finally{Z?J():$=!1}}}var J;if(typeof D=="function")J=function(){D(q)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Q=ae.port2;ae.port1.onmessage=q,J=function(){Q.postMessage(null)}}else J=function(){M(q,0)};function le(){$||($=!0,J())}function te(I,Z){W=M(function(){I(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){S||y||(S=!0,le())},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return l(g)},t.unstable_next=function(I){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var ee=w;w=Z;try{return I()}finally{w=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ee=w;w=I;try{return Z()}finally{w=ee}},t.unstable_scheduleCallback=function(I,Z,ee){var ce=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ce+ee:ce):ee=ce,I){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=ee+ye,I={id:b++,callback:Z,priorityLevel:I,startTime:ee,expirationTime:ye,sortIndex:-1},ee>ce?(I.sortIndex=ee,i(p,I),l(g)===null&&I===l(p)&&(T?(A(W),W=-1):T=!0,te(j,ee-ce))):(I.sortIndex=ye,i(g,I),S||y||(S=!0,le())),I},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(I){var Z=w;return function(){var ee=w;w=Z;try{return I.apply(this,arguments)}finally{w=ee}}}})(eh)),eh}var Bv;function Vx(){return Bv||(Bv=1,Jd.exports=Px()),Jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function Fx(){if(Hv)return ns;Hv=1;var t=Vx(),i=hb(),l=Cb();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),y=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),j=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case f:return"Portal";case b:return"Profiler";case p:return"StrictMode";case T:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case w:return(e._context.displayName||"Context")+".Consumer";case S:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return a=e.displayName||null,a!==null?a:oe(e.type)||"Memo";case D:a=e._payload,e=e._init;try{return oe(e(a))}catch{}}return null}var z=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=Object.assign,J,ae;function Q(e){if(J===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);J=a&&a[1]||"",ae=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+J+e+ae}var le=!1;function te(e,a){if(!e||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(V){var P=V}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(V){P=V}e.call(Y.prototype)}}else{try{throw Error()}catch(V){P=V}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(V){if(V&&P&&typeof V.stack=="string")return[V.stack,P.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),v=d[0],x=d[1];if(v&&x){var E=v.split(`
`),O=x.split(`
`);for(c=s=0;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;for(;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;if(s===E.length||c===O.length)for(s=E.length-1,c=O.length-1;1<=s&&0<=c&&E[s]!==O[c];)c--;for(;1<=s&&0<=c;s--,c--)if(E[s]!==O[c]){if(s!==1||c!==1)do if(s--,c--,0>c||E[s]!==O[c]){var F=`
`+E[s].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=s&&0<=c);break}}}finally{le=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Q(n):""}function I(e){switch(e.tag){case 26:case 27:case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function Z(e){try{var a="";do a+=I(e),e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ee(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function ce(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function ye(e){if(ee(e)!==e)throw Error(r(188))}function ct(e){var a=e.alternate;if(!a){if(a=ee(e),a===null)throw Error(r(188));return a!==e?null:e}for(var n=e,s=a;;){var c=n.return;if(c===null)break;var d=c.alternate;if(d===null){if(s=c.return,s!==null){n=s;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===n)return ye(c),e;if(d===s)return ye(c),a;d=d.sibling}throw Error(r(188))}if(n.return!==s.return)n=c,s=d;else{for(var v=!1,x=c.child;x;){if(x===n){v=!0,n=c,s=d;break}if(x===s){v=!0,s=c,n=d;break}x=x.sibling}if(!v){for(x=d.child;x;){if(x===n){v=!0,n=d,s=c;break}if(x===s){v=!0,s=d,n=c;break}x=x.sibling}if(!v)throw Error(r(189))}}if(n.alternate!==s)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:a}function Ae(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=Ae(e),a!==null)return a;e=e.sibling}return null}var Et=Array.isArray,K=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ze={pending:!1,data:null,method:null,action:null},Dt=[],re=-1;function Be(e){return{current:e}}function $e(e){0>re||(e.current=Dt[re],Dt[re]=null,re--)}function he(e,a){re++,Dt[re]=e.current,e.current=a}var Wt=Be(null),vi=Be(null),Ge=Be(null),Ls=Be(null);function zs(e,a){switch(he(Ge,a),he(vi,e),he(Wt,null),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?Jg(a):0;break;default:if(e=e===8?a.parentNode:a,a=e.tagName,e=e.namespaceURI)e=Jg(e),a=ev(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}$e(Wt),he(Wt,a)}function ol(){$e(Wt),$e(vi),$e(Ge)}function Pc(e){e.memoizedState!==null&&he(Ls,e);var a=Wt.current,n=ev(a,e.type);a!==n&&(he(vi,e),he(Wt,n))}function js(e){vi.current===e&&($e(Wt),$e(vi)),Ls.current===e&&($e(Ls),Jr._currentValue=ze)}var Vc=Object.prototype.hasOwnProperty,Fc=t.unstable_scheduleCallback,qc=t.unstable_cancelCallback,hy=t.unstable_shouldYield,fy=t.unstable_requestPaint,Ja=t.unstable_now,py=t.unstable_getCurrentPriorityLevel,Pf=t.unstable_ImmediatePriority,Vf=t.unstable_UserBlockingPriority,Bs=t.unstable_NormalPriority,my=t.unstable_LowPriority,Ff=t.unstable_IdlePriority,gy=t.log,vy=t.unstable_setDisableYieldValue,or=null,ca=null;function by(e){if(ca&&typeof ca.onCommitFiberRoot=="function")try{ca.onCommitFiberRoot(or,e,void 0,(e.current.flags&128)===128)}catch{}}function Pi(e){if(typeof gy=="function"&&vy(e),ca&&typeof ca.setStrictMode=="function")try{ca.setStrictMode(or,e)}catch{}}var ua=Math.clz32?Math.clz32:xy,yy=Math.log,_y=Math.LN2;function xy(e){return e>>>=0,e===0?32:31-(yy(e)/_y|0)|0}var Hs=128,Us=4194304;function Cn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Is(e,a){var n=e.pendingLanes;if(n===0)return 0;var s=0,c=e.suspendedLanes,d=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var x=n&134217727;return x!==0?(n=x&~c,n!==0?s=Cn(n):(d&=x,d!==0?s=Cn(d):e||(v=x&~v,v!==0&&(s=Cn(v))))):(x=n&~c,x!==0?s=Cn(x):d!==0?s=Cn(d):e||(v=n&~v,v!==0&&(s=Cn(v)))),s===0?0:a!==0&&a!==s&&(a&c)===0&&(c=s&-s,v=a&-a,c>=v||c===32&&(v&4194176)!==0)?a:s}function cr(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function wy(e,a){switch(e){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(){var e=Hs;return Hs<<=1,(Hs&4194176)===0&&(Hs=128),e}function Gf(){var e=Us;return Us<<=1,(Us&62914560)===0&&(Us=4194304),e}function Gc(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function ur(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Sy(e,a,n,s,c,d){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,E=e.expirationTimes,O=e.hiddenUpdates;for(n=v&~n;0<n;){var F=31-ua(n),Y=1<<F;x[F]=0,E[F]=-1;var P=O[F];if(P!==null)for(O[F]=null,F=0;F<P.length;F++){var V=P[F];V!==null&&(V.lane&=-536870913)}n&=~Y}s!==0&&Yf(e,s,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~a))}function Yf(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var s=31-ua(a);e.entangledLanes|=a,e.entanglements[s]=e.entanglements[s]|1073741824|n&4194218}function Xf(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var s=31-ua(n),c=1<<s;c&a|e[s]&a&&(e[s]|=a),n&=~c}}function Wf(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qf(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:bv(e.type))}function Ey(e,a){var n=K.p;try{return K.p=e,a()}finally{K.p=n}}var Vi=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Vi,aa="__reactProps$"+Vi,cl="__reactContainer$"+Vi,Yc="__reactEvents$"+Vi,Cy="__reactListeners$"+Vi,Ay="__reactHandles$"+Vi,Zf="__reactResources$"+Vi,dr="__reactMarker$"+Vi;function Xc(e){delete e[Vt],delete e[aa],delete e[Yc],delete e[Cy],delete e[Ay]}function An(e){var a=e[Vt];if(a)return a;for(var n=e.parentNode;n;){if(a=n[cl]||n[Vt]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=iv(e);e!==null;){if(n=e[Vt])return n;e=iv(e)}return a}e=n,n=e.parentNode}return null}function ul(e){if(e=e[Vt]||e[cl]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function hr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function dl(e){var a=e[Zf];return a||(a=e[Zf]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ct(e){e[dr]=!0}var Kf=new Set,Jf={};function Tn(e,a){hl(e,a),hl(e+"Capture",a)}function hl(e,a){for(Jf[e]=a,e=0;e<a.length;e++)Kf.add(a[e])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ty=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ep={},tp={};function My(e){return Vc.call(tp,e)?!0:Vc.call(ep,e)?!1:Ty.test(e)?tp[e]=!0:(ep[e]=!0,!1)}function Ps(e,a,n){if(My(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function Vs(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function yi(e,a,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+s)}}function Sa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ap(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ny(e){var a=ap(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),s=""+e[a];if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var c=n.get,d=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return c.call(this)},set:function(v){s=""+v,d.call(this,v)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Fs(e){e._valueTracker||(e._valueTracker=Ny(e))}function ip(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),s="";return e&&(s=ap(e)?e.checked?"true":"false":e.value),e=s,e!==n?(a.setValue(e),!0):!1}function qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $y=/[\n"\\]/g;function Ea(e){return e.replace($y,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Wc(e,a,n,s,c,d,v,x){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),a!=null?v==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Sa(a)):e.value!==""+Sa(a)&&(e.value=""+Sa(a)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),a!=null?Qc(e,v,Sa(a)):n!=null?Qc(e,v,Sa(n)):s!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Sa(x):e.removeAttribute("name")}function np(e,a,n,s,c,d,v,x){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),a!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||a!=null))return;n=n!=null?""+Sa(n):"",a=a!=null?""+Sa(a):n,x||a===e.value||(e.value=a),e.defaultValue=a}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=x?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Qc(e,a,n){a==="number"&&qs(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function fl(e,a,n,s){if(e=e.options,a){a={};for(var c=0;c<n.length;c++)a["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=a.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Sa(n),a=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}a!==null||e[c].disabled||(a=e[c])}a!==null&&(a.selected=!0)}}function lp(e,a,n){if(a!=null&&(a=""+Sa(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+Sa(n):""}function rp(e,a,n,s){if(a==null){if(s!=null){if(n!=null)throw Error(r(92));if(Et(s)){if(1<s.length)throw Error(r(93));s=s[0]}n=s}n==null&&(n=""),a=n}n=Sa(a),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s)}function pl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Oy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sp(e,a,n){var s=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":s?e.setProperty(a,n):typeof n!="number"||n===0||Oy.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function op(e,a,n){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in a)s=a[c],a.hasOwnProperty(c)&&n[c]!==s&&sp(e,c,s)}else for(var d in a)a.hasOwnProperty(d)&&sp(e,d,a[d])}function Zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ky=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gs(e){return Ry.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Kc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,gl=null;function cp(e){var a=ul(e);if(a&&(e=a.stateNode)){var n=e[aa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Wc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ea(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var s=n[a];if(s!==e&&s.form===e.form){var c=s[aa]||null;if(!c)throw Error(r(90));Wc(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(a=0;a<n.length;a++)s=n[a],s.form===e.form&&ip(s)}break e;case"textarea":lp(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&fl(e,!!n.multiple,a,!1)}}}var eu=!1;function up(e,a,n){if(eu)return e(a,n);eu=!0;try{var s=e(a);return s}finally{if(eu=!1,(ml!==null||gl!==null)&&($o(),ml&&(a=ml,e=gl,gl=ml=null,cp(a),e)))for(a=0;a<e.length;a++)cp(e[a])}}function fr(e,a){var n=e.stateNode;if(n===null)return null;var s=n[aa]||null;if(s===null)return null;n=s[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,a,typeof n));return n}var tu=!1;if(bi)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{tu=!1}var Fi=null,au=null,Ys=null;function dp(){if(Ys)return Ys;var e,a=au,n=a.length,s,c="value"in Fi?Fi.value:Fi.textContent,d=c.length;for(e=0;e<n&&a[e]===c[e];e++);var v=n-e;for(s=1;s<=v&&a[n-s]===c[d-s];s++);return Ys=c.slice(e,1<s?1-s:void 0)}function Xs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Ws(){return!0}function hp(){return!1}function ia(e){function a(n,s,c,d,v){this._reactName=n,this._targetInst=c,this.type=s,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(d):d[x]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ws:hp,this.isPropagationStopped=hp,this}return q(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),a}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=ia(Mn),mr=q({},Mn,{view:0,detail:0}),Dy=ia(mr),iu,nu,gr,Zs=q({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(iu=e.screenX-gr.screenX,nu=e.screenY-gr.screenY):nu=iu=0,gr=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),fp=ia(Zs),Ly=q({},Zs,{dataTransfer:0}),zy=ia(Ly),jy=q({},mr,{relatedTarget:0}),lu=ia(jy),By=q({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=ia(By),Uy=q({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iy=ia(Uy),Py=q({},Mn,{data:0}),pp=ia(Py),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=qy[e])?!!a[e]:!1}function ru(){return Gy}var Yy=q({},mr,{key:function(e){if(e.key){var a=Vy[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?Xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xy=ia(Yy),Wy=q({},Zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=ia(Wy),Qy=q({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Zy=ia(Qy),Ky=q({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jy=ia(Ky),e_=q({},Zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t_=ia(e_),a_=q({},Mn,{newState:0,oldState:0}),i_=ia(a_),n_=[9,13,27,32],su=bi&&"CompositionEvent"in window,vr=null;bi&&"documentMode"in document&&(vr=document.documentMode);var l_=bi&&"TextEvent"in window&&!vr,gp=bi&&(!su||vr&&8<vr&&11>=vr),vp=" ",bp=!1;function yp(e,a){switch(e){case"keyup":return n_.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vl=!1;function r_(e,a){switch(e){case"compositionend":return _p(a);case"keypress":return a.which!==32?null:(bp=!0,vp);case"textInput":return e=a.data,e===vp&&bp?null:e;default:return null}}function s_(e,a){if(vl)return e==="compositionend"||!su&&yp(e,a)?(e=dp(),Ys=au=Fi=null,vl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return gp&&a.locale!=="ko"?null:a.data;default:return null}}var o_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!o_[e.type]:a==="textarea"}function wp(e,a,n,s){ml?gl?gl.push(s):gl=[s]:ml=s,a=Lo(a,"onChange"),0<a.length&&(n=new Qs("onChange","change",null,n,s),e.push({event:n,listeners:a}))}var br=null,yr=null;function c_(e){Xg(e,0)}function Ks(e){var a=hr(e);if(ip(a))return e}function Sp(e,a){if(e==="change")return a}var Ep=!1;if(bi){var ou;if(bi){var cu="oninput"in document;if(!cu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),cu=typeof Cp.oninput=="function"}ou=cu}else ou=!1;Ep=ou&&(!document.documentMode||9<document.documentMode)}function Ap(){br&&(br.detachEvent("onpropertychange",Tp),yr=br=null)}function Tp(e){if(e.propertyName==="value"&&Ks(yr)){var a=[];wp(a,yr,e,Jc(e)),up(c_,a)}}function u_(e,a,n){e==="focusin"?(Ap(),br=a,yr=n,br.attachEvent("onpropertychange",Tp)):e==="focusout"&&Ap()}function d_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ks(yr)}function h_(e,a){if(e==="click")return Ks(a)}function f_(e,a){if(e==="input"||e==="change")return Ks(a)}function p_(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var da=typeof Object.is=="function"?Object.is:p_;function _r(e,a){if(da(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),s=Object.keys(a);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var c=n[s];if(!Vc.call(a,c)||!da(e[c],a[c]))return!1}return!0}function Mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,a){var n=Mp(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=a&&s>=a)return{node:n,offset:a-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mp(n)}}function $p(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?$p(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=qs(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=qs(e.document)}return a}function uu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function m_(e,a){var n=Op(a);a=e.focusedElem;var s=e.selectionRange;if(n!==a&&a&&a.ownerDocument&&$p(a.ownerDocument.documentElement,a)){if(s!==null&&uu(a)){if(e=s.start,n=s.end,n===void 0&&(n=e),"selectionStart"in a)a.selectionStart=e,a.selectionEnd=Math.min(n,a.value.length);else if(n=(e=a.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var c=a.textContent.length,d=Math.min(s.start,c);s=s.end===void 0?d:Math.min(s.end,c),!n.extend&&d>s&&(c=s,s=d,d=c),c=Np(a,d);var v=Np(a,s);c&&v&&(n.rangeCount!==1||n.anchorNode!==c.node||n.anchorOffset!==c.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),n.removeAllRanges(),d>s?(n.addRange(e),n.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),n.addRange(e)))}}for(e=[],n=a;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<e.length;a++)n=e[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g_=bi&&"documentMode"in document&&11>=document.documentMode,bl=null,du=null,xr=null,hu=!1;function kp(e,a,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||bl==null||bl!==qs(s)||(s=bl,"selectionStart"in s&&uu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),xr&&_r(xr,s)||(xr=s,s=Lo(du,"onSelect"),0<s.length&&(a=new Qs("onSelect","select",null,a,n),e.push({event:a,listeners:s}),a.target=bl)))}function Nn(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var yl={animationend:Nn("Animation","AnimationEnd"),animationiteration:Nn("Animation","AnimationIteration"),animationstart:Nn("Animation","AnimationStart"),transitionrun:Nn("Transition","TransitionRun"),transitionstart:Nn("Transition","TransitionStart"),transitioncancel:Nn("Transition","TransitionCancel"),transitionend:Nn("Transition","TransitionEnd")},fu={},Rp={};bi&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete yl.animationend.animation,delete yl.animationiteration.animation,delete yl.animationstart.animation),"TransitionEvent"in window||delete yl.transitionend.transition);function $n(e){if(fu[e])return fu[e];if(!yl[e])return e;var a=yl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in Rp)return fu[e]=a[n];return e}var Dp=$n("animationend"),Lp=$n("animationiteration"),zp=$n("animationstart"),v_=$n("transitionrun"),b_=$n("transitionstart"),y_=$n("transitioncancel"),jp=$n("transitionend"),Bp=new Map,Hp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Va(e,a){Bp.set(e,a),Tn(a,[e])}var Ca=[],_l=0,pu=0;function Js(){for(var e=_l,a=pu=_l=0;a<e;){var n=Ca[a];Ca[a++]=null;var s=Ca[a];Ca[a++]=null;var c=Ca[a];Ca[a++]=null;var d=Ca[a];if(Ca[a++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}d!==0&&Up(n,c,d)}}function eo(e,a,n,s){Ca[_l++]=e,Ca[_l++]=a,Ca[_l++]=n,Ca[_l++]=s,pu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function mu(e,a,n,s){return eo(e,a,n,s),to(e)}function qi(e,a){return eo(e,null,null,a),to(e)}function Up(e,a,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var c=!1,d=e.return;d!==null;)d.childLanes|=n,s=d.alternate,s!==null&&(s.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;c&&a!==null&&e.tag===3&&(d=e.stateNode,c=31-ua(n),d=d.hiddenUpdates,e=d[c],e===null?d[c]=[a]:e.push(a),a.lane=n|536870912)}function to(e){if(50<Gr)throw Gr=0,xd=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var xl={},Ip=new WeakMap;function Aa(e,a){if(typeof e=="object"&&e!==null){var n=Ip.get(e);return n!==void 0?n:(a={value:e,source:a,stack:Z(a)},Ip.set(e,a),a)}return{value:e,source:a,stack:Z(a)}}var wl=[],Sl=0,ao=null,io=0,Ta=[],Ma=0,On=null,_i=1,xi="";function kn(e,a){wl[Sl++]=io,wl[Sl++]=ao,ao=e,io=a}function Pp(e,a,n){Ta[Ma++]=_i,Ta[Ma++]=xi,Ta[Ma++]=On,On=e;var s=_i;e=xi;var c=32-ua(s)-1;s&=~(1<<c),n+=1;var d=32-ua(a)+c;if(30<d){var v=c-c%5;d=(s&(1<<v)-1).toString(32),s>>=v,c-=v,_i=1<<32-ua(a)+c|n<<c|s,xi=d+e}else _i=1<<d|n<<c|s,xi=e}function gu(e){e.return!==null&&(kn(e,1),Pp(e,1,0))}function vu(e){for(;e===ao;)ao=wl[--Sl],wl[Sl]=null,io=wl[--Sl],wl[Sl]=null;for(;e===On;)On=Ta[--Ma],Ta[Ma]=null,xi=Ta[--Ma],Ta[Ma]=null,_i=Ta[--Ma],Ta[Ma]=null}var Qt=null,Lt=null,Re=!1,Fa=null,ei=!1,bu=Error(r(519));function Rn(e){var a=Error(r(418,""));throw Er(Aa(a,e)),bu}function Vp(e){var a=e.stateNode,n=e.type,s=e.memoizedProps;switch(a[Vt]=e,a[aa]=s,n){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(n=0;n<Xr.length;n++)Te(Xr[n],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Te("invalid",a),np(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Fs(a);break;case"select":Te("invalid",a);break;case"textarea":Te("invalid",a),rp(a,s.value,s.defaultValue,s.children),Fs(a)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||s.suppressHydrationWarning===!0||Kg(a.textContent,n)?(s.popover!=null&&(Te("beforetoggle",a),Te("toggle",a)),s.onScroll!=null&&Te("scroll",a),s.onScrollEnd!=null&&Te("scrollend",a),s.onClick!=null&&(a.onclick=zo),a=!0):a=!1,a||Rn(e)}function Fp(e){for(Qt=e.return;Qt;)switch(Qt.tag){case 3:case 27:ei=!0;return;case 5:case 13:ei=!1;return;default:Qt=Qt.return}}function wr(e){if(e!==Qt)return!1;if(!Re)return Fp(e),Re=!0,!1;var a=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Bd(e.type,e.memoizedProps)),n=!n),n&&(a=!0),a&&Lt&&Rn(e),Fp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(a===0){Lt=Ga(e.nextSibling);break e}a--}else n!=="$"&&n!=="$!"&&n!=="$?"||a++;e=e.nextSibling}Lt=null}}else Lt=Qt?Ga(e.stateNode.nextSibling):null;return!0}function Sr(){Lt=Qt=null,Re=!1}function Er(e){Fa===null?Fa=[e]:Fa.push(e)}var Cr=Error(r(460)),qp=Error(r(474)),yu={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function no(){}function Yp(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(no,no),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,e===Cr?Error(r(483)):e;default:if(typeof a.status=="string")a.then(no,no);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(s){if(a.status==="pending"){var c=a;c.status="fulfilled",c.value=s}},function(s){if(a.status==="pending"){var c=a;c.status="rejected",c.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,e===Cr?Error(r(483)):e}throw Ar=a,Cr}}var Ar=null;function Xp(){if(Ar===null)throw Error(r(459));var e=Ar;return Ar=null,e}var El=null,Tr=0;function lo(e){var a=Tr;return Tr+=1,El===null&&(El=[]),Yp(El,e,a)}function Mr(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function ro(e,a){throw a.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Wp(e){var a=e._init;return a(e._payload)}function Qp(e){function a(L,N){if(e){var H=L.deletions;H===null?(L.deletions=[N],L.flags|=16):H.push(N)}}function n(L,N){if(!e)return null;for(;N!==null;)a(L,N),N=N.sibling;return null}function s(L){for(var N=new Map;L!==null;)L.key!==null?N.set(L.key,L):N.set(L.index,L),L=L.sibling;return N}function c(L,N){return L=nn(L,N),L.index=0,L.sibling=null,L}function d(L,N,H){return L.index=H,e?(H=L.alternate,H!==null?(H=H.index,H<N?(L.flags|=33554434,N):H):(L.flags|=33554434,N)):(L.flags|=1048576,N)}function v(L){return e&&L.alternate===null&&(L.flags|=33554434),L}function x(L,N,H,G){return N===null||N.tag!==6?(N=fd(H,L.mode,G),N.return=L,N):(N=c(N,H),N.return=L,N)}function E(L,N,H,G){var se=H.type;return se===g?F(L,N,H.props.children,G,H.key):N!==null&&(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===D&&Wp(se)===N.type)?(N=c(N,H.props),Mr(N,H),N.return=L,N):(N=Co(H.type,H.key,H.props,null,L.mode,G),Mr(N,H),N.return=L,N)}function O(L,N,H,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==H.containerInfo||N.stateNode.implementation!==H.implementation?(N=pd(H,L.mode,G),N.return=L,N):(N=c(N,H.children||[]),N.return=L,N)}function F(L,N,H,G,se){return N===null||N.tag!==7?(N=Vn(H,L.mode,G,se),N.return=L,N):(N=c(N,H),N.return=L,N)}function Y(L,N,H){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=fd(""+N,L.mode,H),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case h:return H=Co(N.type,N.key,N.props,null,L.mode,H),Mr(H,N),H.return=L,H;case f:return N=pd(N,L.mode,H),N.return=L,N;case D:var G=N._init;return N=G(N._payload),Y(L,N,H)}if(Et(N)||W(N))return N=Vn(N,L.mode,H,null),N.return=L,N;if(typeof N.then=="function")return Y(L,lo(N),H);if(N.$$typeof===y)return Y(L,wo(L,N),H);ro(L,N)}return null}function P(L,N,H,G){var se=N!==null?N.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return se!==null?null:x(L,N,""+H,G);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case h:return H.key===se?E(L,N,H,G):null;case f:return H.key===se?O(L,N,H,G):null;case D:return se=H._init,H=se(H._payload),P(L,N,H,G)}if(Et(H)||W(H))return se!==null?null:F(L,N,H,G,null);if(typeof H.then=="function")return P(L,N,lo(H),G);if(H.$$typeof===y)return P(L,N,wo(L,H),G);ro(L,H)}return null}function V(L,N,H,G,se){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return L=L.get(H)||null,x(N,L,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return L=L.get(G.key===null?H:G.key)||null,E(N,L,G,se);case f:return L=L.get(G.key===null?H:G.key)||null,O(N,L,G,se);case D:var we=G._init;return G=we(G._payload),V(L,N,H,G,se)}if(Et(G)||W(G))return L=L.get(H)||null,F(N,L,G,se,null);if(typeof G.then=="function")return V(L,N,H,lo(G),se);if(G.$$typeof===y)return V(L,N,H,wo(N,G),se);ro(N,G)}return null}function ue(L,N,H,G){for(var se=null,we=null,fe=N,pe=N=0,Mt=null;fe!==null&&pe<H.length;pe++){fe.index>pe?(Mt=fe,fe=null):Mt=fe.sibling;var De=P(L,fe,H[pe],G);if(De===null){fe===null&&(fe=Mt);break}e&&fe&&De.alternate===null&&a(L,fe),N=d(De,N,pe),we===null?se=De:we.sibling=De,we=De,fe=Mt}if(pe===H.length)return n(L,fe),Re&&kn(L,pe),se;if(fe===null){for(;pe<H.length;pe++)fe=Y(L,H[pe],G),fe!==null&&(N=d(fe,N,pe),we===null?se=fe:we.sibling=fe,we=fe);return Re&&kn(L,pe),se}for(fe=s(fe);pe<H.length;pe++)Mt=V(fe,L,pe,H[pe],G),Mt!==null&&(e&&Mt.alternate!==null&&fe.delete(Mt.key===null?pe:Mt.key),N=d(Mt,N,pe),we===null?se=Mt:we.sibling=Mt,we=Mt);return e&&fe.forEach(function(dn){return a(L,dn)}),Re&&kn(L,pe),se}function me(L,N,H,G){if(H==null)throw Error(r(151));for(var se=null,we=null,fe=N,pe=N=0,Mt=null,De=H.next();fe!==null&&!De.done;pe++,De=H.next()){fe.index>pe?(Mt=fe,fe=null):Mt=fe.sibling;var dn=P(L,fe,De.value,G);if(dn===null){fe===null&&(fe=Mt);break}e&&fe&&dn.alternate===null&&a(L,fe),N=d(dn,N,pe),we===null?se=dn:we.sibling=dn,we=dn,fe=Mt}if(De.done)return n(L,fe),Re&&kn(L,pe),se;if(fe===null){for(;!De.done;pe++,De=H.next())De=Y(L,De.value,G),De!==null&&(N=d(De,N,pe),we===null?se=De:we.sibling=De,we=De);return Re&&kn(L,pe),se}for(fe=s(fe);!De.done;pe++,De=H.next())De=V(fe,L,pe,De.value,G),De!==null&&(e&&De.alternate!==null&&fe.delete(De.key===null?pe:De.key),N=d(De,N,pe),we===null?se=De:we.sibling=De,we=De);return e&&fe.forEach(function(R2){return a(L,R2)}),Re&&kn(L,pe),se}function nt(L,N,H,G){if(typeof H=="object"&&H!==null&&H.type===g&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case h:e:{for(var se=H.key;N!==null;){if(N.key===se){if(se=H.type,se===g){if(N.tag===7){n(L,N.sibling),G=c(N,H.props.children),G.return=L,L=G;break e}}else if(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===D&&Wp(se)===N.type){n(L,N.sibling),G=c(N,H.props),Mr(G,H),G.return=L,L=G;break e}n(L,N);break}else a(L,N);N=N.sibling}H.type===g?(G=Vn(H.props.children,L.mode,G,H.key),G.return=L,L=G):(G=Co(H.type,H.key,H.props,null,L.mode,G),Mr(G,H),G.return=L,L=G)}return v(L);case f:e:{for(se=H.key;N!==null;){if(N.key===se)if(N.tag===4&&N.stateNode.containerInfo===H.containerInfo&&N.stateNode.implementation===H.implementation){n(L,N.sibling),G=c(N,H.children||[]),G.return=L,L=G;break e}else{n(L,N);break}else a(L,N);N=N.sibling}G=pd(H,L.mode,G),G.return=L,L=G}return v(L);case D:return se=H._init,H=se(H._payload),nt(L,N,H,G)}if(Et(H))return ue(L,N,H,G);if(W(H)){if(se=W(H),typeof se!="function")throw Error(r(150));return H=se.call(H),me(L,N,H,G)}if(typeof H.then=="function")return nt(L,N,lo(H),G);if(H.$$typeof===y)return nt(L,N,wo(L,H),G);ro(L,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,N!==null&&N.tag===6?(n(L,N.sibling),G=c(N,H),G.return=L,L=G):(n(L,N),G=fd(H,L.mode,G),G.return=L,L=G),v(L)):n(L,N)}return function(L,N,H,G){try{Tr=0;var se=nt(L,N,H,G);return El=null,se}catch(fe){if(fe===Cr)throw fe;var we=ka(29,fe,null,L.mode);return we.lanes=G,we.return=L,we}finally{}}}var Dn=Qp(!0),Zp=Qp(!1),Cl=Be(null),so=Be(0);function Kp(e,a){e=ki,he(so,e),he(Cl,a),ki=e|a.baseLanes}function _u(){he(so,ki),he(Cl,Cl.current)}function xu(){ki=so.current,$e(Cl),$e(so)}var Na=Be(null),ti=null;function Gi(e){var a=e.alternate;he(yt,yt.current&1),he(Na,e),ti===null&&(a===null||Cl.current!==null||a.memoizedState!==null)&&(ti=e)}function Jp(e){if(e.tag===22){if(he(yt,yt.current),he(Na,e),ti===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(ti=e)}}else Yi()}function Yi(){he(yt,yt.current),he(Na,Na.current)}function wi(e){$e(Na),ti===e&&(ti=null),$e(yt)}var yt=Be(0);function oo(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var __=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},x_=t.unstable_scheduleCallback,w_=t.unstable_NormalPriority,_t={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new __,data:new Map,refCount:0}}function Nr(e){e.refCount--,e.refCount===0&&x_(w_,function(){e.controller.abort()})}var $r=null,Su=0,Al=0,Tl=null;function S_(e,a){if($r===null){var n=$r=[];Su=0,Al=Nd(),Tl={status:"pending",value:void 0,then:function(s){n.push(s)}}}return Su++,a.then(em,em),a}function em(){if(--Su===0&&$r!==null){Tl!==null&&(Tl.status="fulfilled");var e=$r;$r=null,Al=0,Tl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function E_(e,a){var n=[],s={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){s.status="fulfilled",s.value=a;for(var c=0;c<n.length;c++)(0,n[c])(a)},function(c){for(s.status="rejected",s.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),s}var tm=z.S;z.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&S_(e,a),tm!==null&&tm(e,a)};var Ln=Be(null);function Eu(){var e=Ln.current;return e!==null?e:Xe.pooledCache}function co(e,a){a===null?he(Ln,Ln.current):he(Ln,a.pool)}function am(){var e=Eu();return e===null?null:{parent:_t._currentValue,pool:e}}var Xi=0,_e=null,Pe=null,pt=null,uo=!1,Ml=!1,zn=!1,ho=0,Or=0,Nl=null,C_=0;function ut(){throw Error(r(321))}function Cu(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!da(e[n],a[n]))return!1;return!0}function Au(e,a,n,s,c,d){return Xi=d,_e=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=e===null||e.memoizedState===null?jn:Wi,zn=!1,d=n(s,c),zn=!1,Ml&&(d=nm(a,n,s,c)),im(e),d}function im(e){z.H=ai;var a=Pe!==null&&Pe.next!==null;if(Xi=0,pt=Pe=_e=null,uo=!1,Or=0,Nl=null,a)throw Error(r(300));e===null||At||(e=e.dependencies,e!==null&&xo(e)&&(At=!0))}function nm(e,a,n,s){_e=e;var c=0;do{if(Ml&&(Nl=null),Or=0,Ml=!1,25<=c)throw Error(r(301));if(c+=1,pt=Pe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Bn,d=a(n,s)}while(Ml);return d}function A_(){var e=z.H,a=e.useState()[0];return a=typeof a.then=="function"?kr(a):a,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(_e.flags|=1024),a}function Tu(){var e=ho!==0;return ho=0,e}function Mu(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function Nu(e){if(uo){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}uo=!1}Xi=0,pt=Pe=_e=null,Ml=!1,Or=ho=0,Nl=null}function na(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?_e.memoizedState=pt=e:pt=pt.next=e,pt}function mt(){if(Pe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var a=pt===null?_e.memoizedState:pt.next;if(a!==null)pt=a,Pe=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},pt===null?_e.memoizedState=pt=e:pt=pt.next=e}return pt}var fo;fo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function kr(e){var a=Or;return Or+=1,Nl===null&&(Nl=[]),e=Yp(Nl,e,a),a=_e,(pt===null?a.memoizedState:pt.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?jn:Wi),e}function po(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return kr(e);if(e.$$typeof===y)return Ft(e)}throw Error(r(438,String(e)))}function $u(e){var a=null,n=_e.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(c){return c.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=fo(),_e.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),s=0;s<e;s++)n[s]=j;return a.index++,n}function Si(e,a){return typeof a=="function"?a(e):a}function mo(e){var a=mt();return Ou(a,Pe,e)}function Ou(e,a,n){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=e.baseQueue,d=s.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}a.baseQueue=c=d,s.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{a=c.next;var x=v=null,E=null,O=a,F=!1;do{var Y=O.lane&-536870913;if(Y!==O.lane?(Oe&Y)===Y:(Xi&Y)===Y){var P=O.revertLane;if(P===0)E!==null&&(E=E.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Y===Al&&(F=!0);else if((Xi&P)===P){O=O.next,P===Al&&(F=!0);continue}else Y={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(x=E=Y,v=d):E=E.next=Y,_e.lanes|=P,ln|=P;Y=O.action,zn&&n(d,Y),d=O.hasEagerState?O.eagerState:n(d,Y)}else P={lane:Y,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(x=E=P,v=d):E=E.next=P,_e.lanes|=Y,ln|=Y;O=O.next}while(O!==null&&O!==a);if(E===null?v=d:E.next=x,!da(d,e.memoizedState)&&(At=!0,F&&(n=Tl,n!==null)))throw n;e.memoizedState=d,e.baseState=v,e.baseQueue=E,s.lastRenderedState=d}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ku(e){var a=mt(),n=a.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var s=n.dispatch,c=n.pending,d=a.memoizedState;if(c!==null){n.pending=null;var v=c=c.next;do d=e(d,v.action),v=v.next;while(v!==c);da(d,a.memoizedState)||(At=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),n.lastRenderedState=d}return[d,s]}function lm(e,a,n){var s=_e,c=mt(),d=Re;if(d){if(n===void 0)throw Error(r(407));n=n()}else n=a();var v=!da((Pe||c).memoizedState,n);if(v&&(c.memoizedState=n,At=!0),c=c.queue,Lu(om.bind(null,s,c,e),[e]),c.getSnapshot!==a||v||pt!==null&&pt.memoizedState.tag&1){if(s.flags|=2048,$l(9,sm.bind(null,s,c,n,a),{destroy:void 0},null),Xe===null)throw Error(r(349));d||(Xi&60)!==0||rm(s,a,n)}return n}function rm(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=_e.updateQueue,a===null?(a=fo(),_e.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function sm(e,a,n,s){a.value=n,a.getSnapshot=s,cm(a)&&um(e)}function om(e,a,n){return n(function(){cm(a)&&um(e)})}function cm(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!da(e,n)}catch{return!0}}function um(e){var a=qi(e,2);a!==null&&Zt(a,e,2)}function Ru(e){var a=na();if(typeof e=="function"){var n=e;if(e=n(),zn){Pi(!0);try{n()}finally{Pi(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},a}function dm(e,a,n,s){return e.baseState=n,Ou(e,Pe,typeof s=="function"?s:Si)}function T_(e,a,n,s,c){if(bo(e))throw Error(r(485));if(e=a.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};z.T!==null?n(!0):d.isTransition=!1,s(d),n=a.pending,n===null?(d.next=a.pending=d,hm(a,d)):(d.next=n.next,a.pending=n.next=d)}}function hm(e,a){var n=a.action,s=a.payload,c=e.state;if(a.isTransition){var d=z.T,v={};z.T=v;try{var x=n(c,s),E=z.S;E!==null&&E(v,x),fm(e,a,x)}catch(O){Du(e,a,O)}finally{z.T=d}}else try{d=n(c,s),fm(e,a,d)}catch(O){Du(e,a,O)}}function fm(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){pm(e,a,s)},function(s){return Du(e,a,s)}):pm(e,a,n)}function pm(e,a,n){a.status="fulfilled",a.value=n,mm(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,hm(e,n)))}function Du(e,a,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=n,mm(a),a=a.next;while(a!==s)}e.action=null}function mm(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function gm(e,a){return a}function vm(e,a){if(Re){var n=Xe.formState;if(n!==null){e:{var s=_e;if(Re){if(Lt){t:{for(var c=Lt,d=ei;c.nodeType!==8;){if(!d){c=null;break t}if(c=Ga(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Lt=Ga(c.nextSibling),s=c.data==="F!";break e}}Rn(s)}s=!1}s&&(a=n[0])}}return n=na(),n.memoizedState=n.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:a},n.queue=s,n=Lm.bind(null,_e,s),s.dispatch=n,s=Ru(!1),d=Uu.bind(null,_e,!1,s.queue),s=na(),c={state:a,dispatch:null,action:e,pending:null},s.queue=c,n=T_.bind(null,_e,c,d,n),c.dispatch=n,s.memoizedState=e,[a,n,!1]}function bm(e){var a=mt();return ym(a,Pe,e)}function ym(e,a,n){a=Ou(e,a,gm)[0],e=mo(Si)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?kr(a):a;var s=mt(),c=s.queue,d=c.dispatch;return n!==s.memoizedState&&(_e.flags|=2048,$l(9,M_.bind(null,c,n),{destroy:void 0},null)),[a,d,e]}function M_(e,a){e.action=a}function _m(e){var a=mt(),n=Pe;if(n!==null)return ym(a,n,e);mt(),a=a.memoizedState,n=mt();var s=n.queue.dispatch;return n.memoizedState=e,[a,s,!1]}function $l(e,a,n,s){return e={tag:e,create:a,inst:n,deps:s,next:null},a=_e.updateQueue,a===null&&(a=fo(),_e.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,a.lastEffect=e),e}function xm(){return mt().memoizedState}function go(e,a,n,s){var c=na();_e.flags|=e,c.memoizedState=$l(1|a,n,{destroy:void 0},s===void 0?null:s)}function vo(e,a,n,s){var c=mt();s=s===void 0?null:s;var d=c.memoizedState.inst;Pe!==null&&s!==null&&Cu(s,Pe.memoizedState.deps)?c.memoizedState=$l(a,n,d,s):(_e.flags|=e,c.memoizedState=$l(1|a,n,d,s))}function wm(e,a){go(8390656,8,e,a)}function Lu(e,a){vo(2048,8,e,a)}function Sm(e,a){return vo(4,2,e,a)}function Em(e,a){return vo(4,4,e,a)}function Cm(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Am(e,a,n){n=n!=null?n.concat([e]):null,vo(4,4,Cm.bind(null,a,e),n)}function zu(){}function Tm(e,a){var n=mt();a=a===void 0?null:a;var s=n.memoizedState;return a!==null&&Cu(a,s[1])?s[0]:(n.memoizedState=[e,a],e)}function Mm(e,a){var n=mt();a=a===void 0?null:a;var s=n.memoizedState;if(a!==null&&Cu(a,s[1]))return s[0];if(s=e(),zn){Pi(!0);try{e()}finally{Pi(!1)}}return n.memoizedState=[s,a],s}function ju(e,a,n){return n===void 0||(Xi&1073741824)!==0?e.memoizedState=a:(e.memoizedState=n,e=$g(),_e.lanes|=e,ln|=e,n)}function Nm(e,a,n,s){return da(n,a)?n:Cl.current!==null?(e=ju(e,n,s),da(e,a)||(At=!0),e):(Xi&42)===0?(At=!0,e.memoizedState=n):(e=$g(),_e.lanes|=e,ln|=e,a)}function $m(e,a,n,s,c){var d=K.p;K.p=d!==0&&8>d?d:8;var v=z.T,x={};z.T=x,Uu(e,!1,a,n);try{var E=c(),O=z.S;if(O!==null&&O(x,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=E_(E,s);Rr(e,a,F,ma(e))}else Rr(e,a,s,ma(e))}catch(Y){Rr(e,a,{then:function(){},status:"rejected",reason:Y},ma())}finally{K.p=d,z.T=v}}function N_(){}function Bu(e,a,n,s){if(e.tag!==5)throw Error(r(476));var c=Om(e).queue;$m(e,c,a,ze,n===null?N_:function(){return km(e),n(s)})}function Om(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:ze,baseState:ze,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:ze},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function km(e){var a=Om(e).next.queue;Rr(e,a,{},ma())}function Hu(){return Ft(Jr)}function Rm(){return mt().memoizedState}function Dm(){return mt().memoizedState}function $_(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ma();e=Ki(n);var s=Ji(a,e,n);s!==null&&(Zt(s,a,n),zr(s,a,n)),a={cache:wu()},e.payload=a;return}a=a.return}}function O_(e,a,n){var s=ma();n={lane:s,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},bo(e)?zm(a,n):(n=mu(e,a,n,s),n!==null&&(Zt(n,e,s),jm(n,a,s)))}function Lm(e,a,n){var s=ma();Rr(e,a,n,s)}function Rr(e,a,n,s){var c={lane:s,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(bo(e))zm(a,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var v=a.lastRenderedState,x=d(v,n);if(c.hasEagerState=!0,c.eagerState=x,da(x,v))return eo(e,a,c,0),Xe===null&&Js(),!1}catch{}finally{}if(n=mu(e,a,c,s),n!==null)return Zt(n,e,s),jm(n,a,s),!0}return!1}function Uu(e,a,n,s){if(s={lane:2,revertLane:Nd(),action:s,hasEagerState:!1,eagerState:null,next:null},bo(e)){if(a)throw Error(r(479))}else a=mu(e,n,s,2),a!==null&&Zt(a,e,2)}function bo(e){var a=e.alternate;return e===_e||a!==null&&a===_e}function zm(e,a){Ml=uo=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function jm(e,a,n){if((n&4194176)!==0){var s=a.lanes;s&=e.pendingLanes,n|=s,a.lanes=n,Xf(e,n)}}var ai={readContext:Ft,use:po,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut};ai.useCacheRefresh=ut,ai.useMemoCache=ut,ai.useHostTransitionStatus=ut,ai.useFormState=ut,ai.useActionState=ut,ai.useOptimistic=ut;var jn={readContext:Ft,use:po,useCallback:function(e,a){return na().memoizedState=[e,a===void 0?null:a],e},useContext:Ft,useEffect:wm,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,go(4194308,4,Cm.bind(null,a,e),n)},useLayoutEffect:function(e,a){return go(4194308,4,e,a)},useInsertionEffect:function(e,a){go(4,2,e,a)},useMemo:function(e,a){var n=na();a=a===void 0?null:a;var s=e();if(zn){Pi(!0);try{e()}finally{Pi(!1)}}return n.memoizedState=[s,a],s},useReducer:function(e,a,n){var s=na();if(n!==void 0){var c=n(a);if(zn){Pi(!0);try{n(a)}finally{Pi(!1)}}}else c=a;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=O_.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var a=na();return e={current:e},a.memoizedState=e},useState:function(e){e=Ru(e);var a=e.queue,n=Lm.bind(null,_e,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:zu,useDeferredValue:function(e,a){var n=na();return ju(n,e,a)},useTransition:function(){var e=Ru(!1);return e=$m.bind(null,_e,e.queue,!0,!1),na().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var s=_e,c=na();if(Re){if(n===void 0)throw Error(r(407));n=n()}else{if(n=a(),Xe===null)throw Error(r(349));(Oe&60)!==0||rm(s,a,n)}c.memoizedState=n;var d={value:n,getSnapshot:a};return c.queue=d,wm(om.bind(null,s,d,e),[e]),s.flags|=2048,$l(9,sm.bind(null,s,d,n,a),{destroy:void 0},null),n},useId:function(){var e=na(),a=Xe.identifierPrefix;if(Re){var n=xi,s=_i;n=(s&~(1<<32-ua(s)-1)).toString(32)+n,a=":"+a+"R"+n,n=ho++,0<n&&(a+="H"+n.toString(32)),a+=":"}else n=C_++,a=":"+a+"r"+n.toString(32)+":";return e.memoizedState=a},useCacheRefresh:function(){return na().memoizedState=$_.bind(null,_e)}};jn.useMemoCache=$u,jn.useHostTransitionStatus=Hu,jn.useFormState=vm,jn.useActionState=vm,jn.useOptimistic=function(e){var a=na();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=Uu.bind(null,_e,!0,n),n.dispatch=a,[e,a]};var Wi={readContext:Ft,use:po,useCallback:Tm,useContext:Ft,useEffect:Lu,useImperativeHandle:Am,useInsertionEffect:Sm,useLayoutEffect:Em,useMemo:Mm,useReducer:mo,useRef:xm,useState:function(){return mo(Si)},useDebugValue:zu,useDeferredValue:function(e,a){var n=mt();return Nm(n,Pe.memoizedState,e,a)},useTransition:function(){var e=mo(Si)[0],a=mt().memoizedState;return[typeof e=="boolean"?e:kr(e),a]},useSyncExternalStore:lm,useId:Rm};Wi.useCacheRefresh=Dm,Wi.useMemoCache=$u,Wi.useHostTransitionStatus=Hu,Wi.useFormState=bm,Wi.useActionState=bm,Wi.useOptimistic=function(e,a){var n=mt();return dm(n,Pe,e,a)};var Bn={readContext:Ft,use:po,useCallback:Tm,useContext:Ft,useEffect:Lu,useImperativeHandle:Am,useInsertionEffect:Sm,useLayoutEffect:Em,useMemo:Mm,useReducer:ku,useRef:xm,useState:function(){return ku(Si)},useDebugValue:zu,useDeferredValue:function(e,a){var n=mt();return Pe===null?ju(n,e,a):Nm(n,Pe.memoizedState,e,a)},useTransition:function(){var e=ku(Si)[0],a=mt().memoizedState;return[typeof e=="boolean"?e:kr(e),a]},useSyncExternalStore:lm,useId:Rm};Bn.useCacheRefresh=Dm,Bn.useMemoCache=$u,Bn.useHostTransitionStatus=Hu,Bn.useFormState=_m,Bn.useActionState=_m,Bn.useOptimistic=function(e,a){var n=mt();return Pe!==null?dm(n,Pe,e,a):(n.baseState=e,[e,n.queue.dispatch])};function Iu(e,a,n,s){a=e.memoizedState,n=n(s,a),n=n==null?a:q({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pu={isMounted:function(e){return(e=e._reactInternals)?ee(e)===e:!1},enqueueSetState:function(e,a,n){e=e._reactInternals;var s=ma(),c=Ki(s);c.payload=a,n!=null&&(c.callback=n),a=Ji(e,c,s),a!==null&&(Zt(a,e,s),zr(a,e,s))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var s=ma(),c=Ki(s);c.tag=1,c.payload=a,n!=null&&(c.callback=n),a=Ji(e,c,s),a!==null&&(Zt(a,e,s),zr(a,e,s))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ma(),s=Ki(n);s.tag=2,a!=null&&(s.callback=a),a=Ji(e,s,n),a!==null&&(Zt(a,e,n),zr(a,e,n))}};function Bm(e,a,n,s,c,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,v):a.prototype&&a.prototype.isPureReactComponent?!_r(n,s)||!_r(c,d):!0}function Hm(e,a,n,s){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,s),a.state!==e&&Pu.enqueueReplaceState(a,a.state,null)}function Hn(e,a){var n=a;if("ref"in a){n={};for(var s in a)s!=="ref"&&(n[s]=a[s])}if(e=e.defaultProps){n===a&&(n=q({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}var yo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Um(e){yo(e)}function Im(e){console.error(e)}function Pm(e){yo(e)}function _o(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function Vm(e,a,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(e,a,n){return n=Ki(n),n.tag=3,n.payload={element:null},n.callback=function(){_o(e,a)},n}function Fm(e){return e=Ki(e),e.tag=3,e}function qm(e,a,n,s){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;e.payload=function(){return c(d)},e.callback=function(){Vm(a,n,s)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Vm(a,n,s),typeof c!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function k_(e,a,n,s,c){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=n.alternate,a!==null&&Lr(a,n,c,!0),n=Na.current,n!==null){switch(n.tag){case 13:return ti===null?Ed():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=c,s===yu?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([s]):a.add(s),Ad(e,s,c)),!1;case 22:return n.flags|=65536,s===yu?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([s]):n.add(s)),Ad(e,s,c)),!1}throw Error(r(435,n.tag))}return Ad(e,s,c),Ed(),!1}if(Re)return a=Na.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=c,s!==bu&&(e=Error(r(422),{cause:s}),Er(Aa(e,n)))):(s!==bu&&(a=Error(r(423),{cause:s}),Er(Aa(a,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Aa(s,n),c=Vu(e.stateNode,s,c),nd(e,c),it!==4&&(it=2)),!1;var d=Error(r(520),{cause:s});if(d=Aa(d,n),Fr===null?Fr=[d]:Fr.push(d),it!==4&&(it=2),a===null)return!0;s=Aa(s,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=Vu(n.stateNode,s,e),nd(n,e),!1;case 1:if(a=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(rn===null||!rn.has(d))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Fm(c),qm(c,e,n,s),nd(n,c),!1}n=n.return}while(n!==null);return!1}var Gm=Error(r(461)),At=!1;function zt(e,a,n,s){a.child=e===null?Zp(a,null,n,s):Dn(a,e.child,n,s)}function Ym(e,a,n,s,c){n=n.render;var d=a.ref;if("ref"in s){var v={};for(var x in s)x!=="ref"&&(v[x]=s[x])}else v=s;return In(a),s=Au(e,a,n,v,d,c),x=Tu(),e!==null&&!At?(Mu(e,a,c),Ei(e,a,c)):(Re&&x&&gu(a),a.flags|=1,zt(e,a,s,c),a.child)}function Xm(e,a,n,s,c){if(e===null){var d=n.type;return typeof d=="function"&&!hd(d)&&d.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=d,Wm(e,a,d,s,c)):(e=Co(n.type,null,s,a,a.mode,c),e.ref=a.ref,e.return=a,a.child=e)}if(d=e.child,!Ku(e,c)){var v=d.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(v,s)&&e.ref===a.ref)return Ei(e,a,c)}return a.flags|=1,e=nn(d,s),e.ref=a.ref,e.return=a,a.child=e}function Wm(e,a,n,s,c){if(e!==null){var d=e.memoizedProps;if(_r(d,s)&&e.ref===a.ref)if(At=!1,a.pendingProps=s=d,Ku(e,c))(e.flags&131072)!==0&&(At=!0);else return a.lanes=e.lanes,Ei(e,a,c)}return Fu(e,a,n,s,c)}function Qm(e,a,n){var s=a.pendingProps,c=s.children,d=(a.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(Dr(e,a),s.mode==="hidden"||d){if((a.flags&128)!==0){if(s=v!==null?v.baseLanes|n:n,e!==null){for(c=a.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;a.childLanes=d&~s}else a.childLanes=0,a.child=null;return Zm(e,a,s,n)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&co(a,v!==null?v.cachePool:null),v!==null?Kp(a,v):_u(),Jp(a);else return a.lanes=a.childLanes=536870912,Zm(e,a,v!==null?v.baseLanes|n:n,n)}else v!==null?(co(a,v.cachePool),Kp(a,v),Yi(),a.memoizedState=null):(e!==null&&co(a,null),_u(),Yi());return zt(e,a,c,n),a.child}function Zm(e,a,n,s){var c=Eu();return c=c===null?null:{parent:_t._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},e!==null&&co(a,null),_u(),Jp(a),e!==null&&Lr(e,a,s,!0),null}function Dr(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(a.flags|=2097664)}}function Fu(e,a,n,s,c){return In(a),n=Au(e,a,n,s,void 0,c),s=Tu(),e!==null&&!At?(Mu(e,a,c),Ei(e,a,c)):(Re&&s&&gu(a),a.flags|=1,zt(e,a,n,c),a.child)}function Km(e,a,n,s,c,d){return In(a),a.updateQueue=null,n=nm(a,s,n,c),im(e),s=Tu(),e!==null&&!At?(Mu(e,a,d),Ei(e,a,d)):(Re&&s&&gu(a),a.flags|=1,zt(e,a,n,d),a.child)}function Jm(e,a,n,s,c){if(In(a),a.stateNode===null){var d=xl,v=n.contextType;typeof v=="object"&&v!==null&&(d=Ft(v)),d=new n(s,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Pu,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=s,d.state=a.memoizedState,d.refs={},ad(a),v=n.contextType,d.context=typeof v=="object"&&v!==null?Ft(v):xl,d.state=a.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(Iu(a,n,v,s),d.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Pu.enqueueReplaceState(d,d.state,null),Br(a,s,d,c),jr(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(e===null){d=a.stateNode;var x=a.memoizedProps,E=Hn(n,x);d.props=E;var O=d.context,F=n.contextType;v=xl,typeof F=="object"&&F!==null&&(v=Ft(F));var Y=n.getDerivedStateFromProps;F=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",x=a.pendingProps!==x,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x||O!==v)&&Hm(a,d,s,v),Zi=!1;var P=a.memoizedState;d.state=P,Br(a,s,d,c),jr(),O=a.memoizedState,x||P!==O||Zi?(typeof Y=="function"&&(Iu(a,n,Y,s),O=a.memoizedState),(E=Zi||Bm(a,n,E,s,P,O,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=O),d.props=s,d.state=O,d.context=v,s=E):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{d=a.stateNode,id(e,a),v=a.memoizedProps,F=Hn(n,v),d.props=F,Y=a.pendingProps,P=d.context,O=n.contextType,E=xl,typeof O=="object"&&O!==null&&(E=Ft(O)),x=n.getDerivedStateFromProps,(O=typeof x=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||P!==E)&&Hm(a,d,s,E),Zi=!1,P=a.memoizedState,d.state=P,Br(a,s,d,c),jr();var V=a.memoizedState;v!==Y||P!==V||Zi||e!==null&&e.dependencies!==null&&xo(e.dependencies)?(typeof x=="function"&&(Iu(a,n,x,s),V=a.memoizedState),(F=Zi||Bm(a,n,F,s,P,V,E)||e!==null&&e.dependencies!==null&&xo(e.dependencies))?(O||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,V,E),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,V,E)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=V),d.props=s,d.state=V,d.context=E,s=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),s=!1)}return d=s,Dr(e,a),s=(a.flags&128)!==0,d||s?(d=a.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,e!==null&&s?(a.child=Dn(a,e.child,null,c),a.child=Dn(a,null,n,c)):zt(e,a,n,c),a.memoizedState=d.state,e=a.child):e=Ei(e,a,c),e}function eg(e,a,n,s){return Sr(),a.flags|=256,zt(e,a,n,s),a.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Gu(e){return{baseLanes:e,cachePool:am()}}function Yu(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=Ra),e}function tg(e,a,n){var s=a.pendingProps,c=!1,d=(a.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),v&&(c=!0,a.flags&=-129),v=(a.flags&32)!==0,a.flags&=-33,e===null){if(Re){if(c?Gi(a):Yi(),Re){var x=Lt,E;if(E=x){e:{for(E=x,x=ei;E.nodeType!==8;){if(!x){x=null;break e}if(E=Ga(E.nextSibling),E===null){x=null;break e}}x=E}x!==null?(a.memoizedState={dehydrated:x,treeContext:On!==null?{id:_i,overflow:xi}:null,retryLane:536870912},E=ka(18,null,null,0),E.stateNode=x,E.return=a,a.child=E,Qt=a,Lt=null,E=!0):E=!1}E||Rn(a)}if(x=a.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return x.data==="$!"?a.lanes=16:a.lanes=536870912,null;wi(a)}return x=s.children,s=s.fallback,c?(Yi(),c=a.mode,x=Wu({mode:"hidden",children:x},c),s=Vn(s,c,n,null),x.return=a,s.return=a,x.sibling=s,a.child=x,c=a.child,c.memoizedState=Gu(n),c.childLanes=Yu(e,v,n),a.memoizedState=qu,s):(Gi(a),Xu(a,x))}if(E=e.memoizedState,E!==null&&(x=E.dehydrated,x!==null)){if(d)a.flags&256?(Gi(a),a.flags&=-257,a=Qu(e,a,n)):a.memoizedState!==null?(Yi(),a.child=e.child,a.flags|=128,a=null):(Yi(),c=s.fallback,x=a.mode,s=Wu({mode:"visible",children:s.children},x),c=Vn(c,x,n,null),c.flags|=2,s.return=a,c.return=a,s.sibling=c,a.child=s,Dn(a,e.child,null,n),s=a.child,s.memoizedState=Gu(n),s.childLanes=Yu(e,v,n),a.memoizedState=qu,a=c);else if(Gi(a),x.data==="$!"){if(v=x.nextSibling&&x.nextSibling.dataset,v)var O=v.dgst;v=O,s=Error(r(419)),s.stack="",s.digest=v,Er({value:s,source:null,stack:null}),a=Qu(e,a,n)}else if(At||Lr(e,a,n,!1),v=(n&e.childLanes)!==0,At||v){if(v=Xe,v!==null){if(s=n&-n,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(v.suspendedLanes|n))!==0?0:s,s!==0&&s!==E.retryLane)throw E.retryLane=s,qi(e,s),Zt(v,e,s),Gm}x.data==="$?"||Ed(),a=Qu(e,a,n)}else x.data==="$?"?(a.flags|=128,a.child=e.child,a=Y_.bind(null,e),x._reactRetry=a,a=null):(e=E.treeContext,Lt=Ga(x.nextSibling),Qt=a,Re=!0,Fa=null,ei=!1,e!==null&&(Ta[Ma++]=_i,Ta[Ma++]=xi,Ta[Ma++]=On,_i=e.id,xi=e.overflow,On=a),a=Xu(a,s.children),a.flags|=4096);return a}return c?(Yi(),c=s.fallback,x=a.mode,E=e.child,O=E.sibling,s=nn(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&31457280,O!==null?c=nn(O,c):(c=Vn(c,x,n,null),c.flags|=2),c.return=a,s.return=a,s.sibling=c,a.child=s,s=c,c=a.child,x=e.child.memoizedState,x===null?x=Gu(n):(E=x.cachePool,E!==null?(O=_t._currentValue,E=E.parent!==O?{parent:O,pool:O}:E):E=am(),x={baseLanes:x.baseLanes|n,cachePool:E}),c.memoizedState=x,c.childLanes=Yu(e,v,n),a.memoizedState=qu,s):(Gi(a),n=e.child,e=n.sibling,n=nn(n,{mode:"visible",children:s.children}),n.return=a,n.sibling=null,e!==null&&(v=a.deletions,v===null?(a.deletions=[e],a.flags|=16):v.push(e)),a.child=n,a.memoizedState=null,n)}function Xu(e,a){return a=Wu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Wu(e,a){return Tg(e,a,0,null)}function Qu(e,a,n){return Dn(a,e.child,null,n),e=Xu(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function ag(e,a,n){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a),ed(e.return,a,n)}function Zu(e,a,n,s,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:c}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=n,d.tailMode=c)}function ig(e,a,n){var s=a.pendingProps,c=s.revealOrder,d=s.tail;if(zt(e,a,s.children,n),s=yt.current,(s&2)!==0)s=s&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,n,a);else if(e.tag===19)ag(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(he(yt,s),c){case"forwards":for(n=a.child,c=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=a.child,a.child=null):(c=n.sibling,n.sibling=null),Zu(a,!1,c,n,d);break;case"backwards":for(n=null,c=a.child,a.child=null;c!==null;){if(e=c.alternate,e!==null&&oo(e)===null){a.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}Zu(a,!0,n,null,d);break;case"together":Zu(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ei(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),ln|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Lr(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,n=nn(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function Ku(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&xo(e)))}function R_(e,a,n){switch(a.tag){case 3:zs(a,a.stateNode.containerInfo),Qi(a,_t,e.memoizedState.cache),Sr();break;case 27:case 5:Pc(a);break;case 4:zs(a,a.stateNode.containerInfo);break;case 10:Qi(a,a.type,a.memoizedProps.value);break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(Gi(a),a.flags|=128,null):(n&a.child.childLanes)!==0?tg(e,a,n):(Gi(a),e=Ei(e,a,n),e!==null?e.sibling:null);Gi(a);break;case 19:var c=(e.flags&128)!==0;if(s=(n&a.childLanes)!==0,s||(Lr(e,a,n,!1),s=(n&a.childLanes)!==0),c){if(s)return ig(e,a,n);a.flags|=128}if(c=a.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),he(yt,yt.current),s)break;return null;case 22:case 23:return a.lanes=0,Qm(e,a,n);case 24:Qi(a,_t,e.memoizedState.cache)}return Ei(e,a,n)}function ng(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)At=!0;else{if(!Ku(e,n)&&(a.flags&128)===0)return At=!1,R_(e,a,n);At=(e.flags&131072)!==0}else At=!1,Re&&(a.flags&1048576)!==0&&Pp(a,io,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var s=a.elementType,c=s._init;if(s=c(s._payload),a.type=s,typeof s=="function")hd(s)?(e=Hn(s,e),a.tag=1,a=Jm(null,a,s,e,n)):(a.tag=0,a=Fu(null,a,s,e,n));else{if(s!=null){if(c=s.$$typeof,c===S){a.tag=11,a=Ym(null,a,s,e,n);break e}else if(c===A){a.tag=14,a=Xm(null,a,s,e,n);break e}}throw a=oe(s)||s,Error(r(306,a,""))}}return a;case 0:return Fu(e,a,a.type,a.pendingProps,n);case 1:return s=a.type,c=Hn(s,a.pendingProps),Jm(e,a,s,c,n);case 3:e:{if(zs(a,a.stateNode.containerInfo),e===null)throw Error(r(387));var d=a.pendingProps;c=a.memoizedState,s=c.element,id(e,a),Br(a,d,null,n);var v=a.memoizedState;if(d=v.cache,Qi(a,_t,d),d!==c.cache&&td(a,[_t],n,!0),jr(),d=v.element,c.isDehydrated)if(c={element:d,isDehydrated:!1,cache:v.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=eg(e,a,d,n);break e}else if(d!==s){s=Aa(Error(r(424)),a),Er(s),a=eg(e,a,d,n);break e}else for(Lt=Ga(a.stateNode.containerInfo.firstChild),Qt=a,Re=!0,Fa=null,ei=!0,n=Zp(a,null,d,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),d===s){a=Ei(e,a,n);break e}zt(e,a,d,n)}a=a.child}return a;case 26:return Dr(e,a),e===null?(n=sv(a.type,null,a.pendingProps,null))?a.memoizedState=n:Re||(n=a.type,e=a.pendingProps,s=jo(Ge.current).createElement(n),s[Vt]=a,s[aa]=e,jt(s,n,e),Ct(s),a.stateNode=s):a.memoizedState=sv(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Pc(a),e===null&&Re&&(s=a.stateNode=nv(a.type,a.pendingProps,Ge.current),Qt=a,ei=!0,Lt=Ga(s.firstChild)),s=a.pendingProps.children,e!==null||Re?zt(e,a,s,n):a.child=Dn(a,null,s,n),Dr(e,a),a.child;case 5:return e===null&&Re&&((c=s=Lt)&&(s=c2(s,a.type,a.pendingProps,ei),s!==null?(a.stateNode=s,Qt=a,Lt=Ga(s.firstChild),ei=!1,c=!0):c=!1),c||Rn(a)),Pc(a),c=a.type,d=a.pendingProps,v=e!==null?e.memoizedProps:null,s=d.children,Bd(c,d)?s=null:v!==null&&Bd(c,v)&&(a.flags|=32),a.memoizedState!==null&&(c=Au(e,a,A_,null,null,n),Jr._currentValue=c),Dr(e,a),zt(e,a,s,n),a.child;case 6:return e===null&&Re&&((e=n=Lt)&&(n=u2(n,a.pendingProps,ei),n!==null?(a.stateNode=n,Qt=a,Lt=null,e=!0):e=!1),e||Rn(a)),null;case 13:return tg(e,a,n);case 4:return zs(a,a.stateNode.containerInfo),s=a.pendingProps,e===null?a.child=Dn(a,null,s,n):zt(e,a,s,n),a.child;case 11:return Ym(e,a,a.type,a.pendingProps,n);case 7:return zt(e,a,a.pendingProps,n),a.child;case 8:return zt(e,a,a.pendingProps.children,n),a.child;case 12:return zt(e,a,a.pendingProps.children,n),a.child;case 10:return s=a.pendingProps,Qi(a,a.type,s.value),zt(e,a,s.children,n),a.child;case 9:return c=a.type._context,s=a.pendingProps.children,In(a),c=Ft(c),s=s(c),a.flags|=1,zt(e,a,s,n),a.child;case 14:return Xm(e,a,a.type,a.pendingProps,n);case 15:return Wm(e,a,a.type,a.pendingProps,n);case 19:return ig(e,a,n);case 22:return Qm(e,a,n);case 24:return In(a),s=Ft(_t),e===null?(c=Eu(),c===null&&(c=Xe,d=wu(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=n),c=d),a.memoizedState={parent:s,cache:c},ad(a),Qi(a,_t,c)):((e.lanes&n)!==0&&(id(e,a),Br(a,null,null,n),jr()),c=e.memoizedState,d=a.memoizedState,c.parent!==s?(c={parent:s,cache:s},a.memoizedState=c,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=c),Qi(a,_t,s)):(s=d.cache,Qi(a,_t,s),s!==c.cache&&td(a,[_t],n,!0))),zt(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}var Ju=Be(null),Un=null,Ci=null;function Qi(e,a,n){he(Ju,a._currentValue),a._currentValue=n}function Ai(e){e._currentValue=Ju.current,$e(Ju)}function ed(e,a,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),e===n)break;e=e.return}}function td(e,a,n,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;e:for(;d!==null;){var x=d;d=c;for(var E=0;E<a.length;E++)if(x.context===a[E]){d.lanes|=n,x=d.alternate,x!==null&&(x.lanes|=n),ed(d.return,n,e),s||(v=null);break e}d=x.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=n,d=v.alternate,d!==null&&(d.lanes|=n),ed(v,n,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Lr(e,a,n,s){e=null;for(var c=a,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var x=c.type;da(c.pendingProps.value,v.value)||(e!==null?e.push(x):e=[x])}}else if(c===Ls.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Jr):e=[Jr])}c=c.return}e!==null&&td(a,e,n,s),a.flags|=262144}function xo(e){for(e=e.firstContext;e!==null;){if(!da(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function In(e){Un=e,Ci=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ft(e){return lg(Un,e)}function wo(e,a){return Un===null&&In(e),lg(e,a)}function lg(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Ci===null){if(e===null)throw Error(r(308));Ci=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ci=Ci.next=a;return n}var Zi=!1;function ad(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function id(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ki(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(e,a,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(et&2)!==0){var c=s.pending;return c===null?a.next=a:(a.next=c.next,c.next=a),s.pending=a,a=to(e),Up(e,null,n),a}return eo(e,s,a,n),to(e)}function zr(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194176)!==0)){var s=a.lanes;s&=e.pendingLanes,n|=s,a.lanes=n,Xf(e,n)}}function nd(e,a){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var c=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,n=n.next}while(n!==null);d===null?c=d=a:d=d.next=a}else c=d=a;n={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var ld=!1;function jr(){if(ld){var e=Tl;if(e!==null)throw e}}function Br(e,a,n,s){ld=!1;var c=e.updateQueue;Zi=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var E=x,O=E.next;E.next=null,v===null?d=O:v.next=O,v=E;var F=e.alternate;F!==null&&(F=F.updateQueue,x=F.lastBaseUpdate,x!==v&&(x===null?F.firstBaseUpdate=O:x.next=O,F.lastBaseUpdate=E))}if(d!==null){var Y=c.baseState;v=0,F=O=E=null,x=d;do{var P=x.lane&-536870913,V=P!==x.lane;if(V?(Oe&P)===P:(s&P)===P){P!==0&&P===Al&&(ld=!0),F!==null&&(F=F.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ue=e,me=x;P=a;var nt=n;switch(me.tag){case 1:if(ue=me.payload,typeof ue=="function"){Y=ue.call(nt,Y,P);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=me.payload,P=typeof ue=="function"?ue.call(nt,Y,P):ue,P==null)break e;Y=q({},Y,P);break e;case 2:Zi=!0}}P=x.callback,P!==null&&(e.flags|=64,V&&(e.flags|=8192),V=c.callbacks,V===null?c.callbacks=[P]:V.push(P))}else V={lane:P,tag:x.tag,payload:x.payload,callback:x.callback,next:null},F===null?(O=F=V,E=Y):F=F.next=V,v|=P;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;V=x,x=V.next,V.next=null,c.lastBaseUpdate=V,c.shared.pending=null}}while(!0);F===null&&(E=Y),c.baseState=E,c.firstBaseUpdate=O,c.lastBaseUpdate=F,d===null&&(c.shared.lanes=0),ln|=v,e.lanes=v,e.memoizedState=Y}}function rg(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function sg(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)rg(n[e],a)}function Hr(e,a){try{var n=a.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var c=s.next;n=c;do{if((n.tag&e)===e){s=void 0;var d=n.create,v=n.inst;s=d(),v.destroy=s}n=n.next}while(n!==c)}}catch(x){Ye(a,a.return,x)}}function en(e,a,n){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var d=c.next;s=d;do{if((s.tag&e)===e){var v=s.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,c=a;var E=n;try{x()}catch(O){Ye(c,E,O)}}}s=s.next}while(s!==d)}}catch(O){Ye(a,a.return,O)}}function og(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{sg(a,n)}catch(s){Ye(e,e.return,s)}}}function cg(e,a,n){n.props=Hn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){Ye(e,a,s)}}function Pn(e,a){try{var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof n=="function"?e.refCleanup=n(c):n.current=c}}catch(d){Ye(e,a,d)}}function ha(e,a){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(c){Ye(e,a,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Ye(e,a,c)}else n.current=null}function ug(e){var a=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(c){Ye(e,e.return,c)}}function dg(e,a,n){try{var s=e.stateNode;n2(s,e.type,n,a),s[aa]=a}catch(c){Ye(e,e.return,c)}}function hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,a,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?n.nodeType===8?n.parentNode.insertBefore(e,a):n.insertBefore(e,a):(n.nodeType===8?(a=n.parentNode,a.insertBefore(e,n)):(a=n,a.appendChild(e)),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=zo));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(sd(e,a,n),e=e.sibling;e!==null;)sd(e,a,n),e=e.sibling}function So(e,a,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(So(e,a,n),e=e.sibling;e!==null;)So(e,a,n),e=e.sibling}var Ti=!1,at=!1,od=!1,fg=typeof WeakSet=="function"?WeakSet:Set,Tt=null,pg=!1;function D_(e,a){if(e=e.containerInfo,zd=Vo,e=Op(e),uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var c=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var v=0,x=-1,E=-1,O=0,F=0,Y=e,P=null;t:for(;;){for(var V;Y!==n||c!==0&&Y.nodeType!==3||(x=v+c),Y!==d||s!==0&&Y.nodeType!==3||(E=v+s),Y.nodeType===3&&(v+=Y.nodeValue.length),(V=Y.firstChild)!==null;)P=Y,Y=V;for(;;){if(Y===e)break t;if(P===n&&++O===c&&(x=v),P===d&&++F===s&&(E=v),(V=Y.nextSibling)!==null)break;Y=P,P=Y.parentNode}Y=V}n=x===-1||E===-1?null:{start:x,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:e,selectionRange:n},Vo=!1,Tt=a;Tt!==null;)if(a=Tt,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Tt=e;else for(;Tt!==null;){switch(a=Tt,d=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=a,c=d.memoizedProps,d=d.memoizedState,s=n.stateNode;try{var ue=Hn(n.type,c,n.elementType===n.type);e=s.getSnapshotBeforeUpdate(ue,d),s.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ye(n,n.return,me)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)Id(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Id(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Tt=e;break}Tt=a.return}return ue=pg,pg=!1,ue}function mg(e,a,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n),s&4&&Hr(5,n);break;case 1:if(Ni(e,n),s&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(x){Ye(n,n.return,x)}else{var c=Hn(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(c,a,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ye(n,n.return,x)}}s&64&&og(n),s&512&&Pn(n,n.return);break;case 3:if(Ni(e,n),s&64&&(s=n.updateQueue,s!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{sg(s,e)}catch(x){Ye(n,n.return,x)}}break;case 26:Ni(e,n),s&512&&Pn(n,n.return);break;case 27:case 5:Ni(e,n),a===null&&s&4&&ug(n),s&512&&Pn(n,n.return);break;case 12:Ni(e,n);break;case 13:Ni(e,n),s&4&&bg(e,n);break;case 22:if(c=n.memoizedState!==null||Ti,!c){a=a!==null&&a.memoizedState!==null||at;var d=Ti,v=at;Ti=c,(at=a)&&!v?tn(e,n,(n.subtreeFlags&8772)!==0):Ni(e,n),Ti=d,at=v}s&512&&(n.memoizedProps.mode==="manual"?Pn(n,n.return):ha(n,n.return));break;default:Ni(e,n)}}function gg(e){var a=e.alternate;a!==null&&(e.alternate=null,gg(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Xc(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gt=null,fa=!1;function Mi(e,a,n){for(n=n.child;n!==null;)vg(e,a,n),n=n.sibling}function vg(e,a,n){if(ca&&typeof ca.onCommitFiberUnmount=="function")try{ca.onCommitFiberUnmount(or,n)}catch{}switch(n.tag){case 26:at||ha(n,a),Mi(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:at||ha(n,a);var s=gt,c=fa;for(gt=n.stateNode,Mi(e,a,n),n=n.stateNode,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Xc(n),gt=s,fa=c;break;case 5:at||ha(n,a);case 6:c=gt;var d=fa;if(gt=null,Mi(e,a,n),gt=c,fa=d,gt!==null)if(fa)try{e=gt,s=n.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(v){Ye(n,a,v)}else try{gt.removeChild(n.stateNode)}catch(v){Ye(n,a,v)}break;case 18:gt!==null&&(fa?(a=gt,n=n.stateNode,a.nodeType===8?Ud(a.parentNode,n):a.nodeType===1&&Ud(a,n),is(a)):Ud(gt,n.stateNode));break;case 4:s=gt,c=fa,gt=n.stateNode.containerInfo,fa=!0,Mi(e,a,n),gt=s,fa=c;break;case 0:case 11:case 14:case 15:at||en(2,n,a),at||en(4,n,a),Mi(e,a,n);break;case 1:at||(ha(n,a),s=n.stateNode,typeof s.componentWillUnmount=="function"&&cg(n,a,s)),Mi(e,a,n);break;case 21:Mi(e,a,n);break;case 22:at||ha(n,a),at=(s=at)||n.memoizedState!==null,Mi(e,a,n),at=s;break;default:Mi(e,a,n)}}function bg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{is(e)}catch(n){Ye(a,a.return,n)}}function L_(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new fg),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new fg),a;default:throw Error(r(435,e.tag))}}function cd(e,a){var n=L_(e);a.forEach(function(s){var c=X_.bind(null,e,s);n.has(s)||(n.add(s),s.then(c,c))})}function $a(e,a){var n=a.deletions;if(n!==null)for(var s=0;s<n.length;s++){var c=n[s],d=e,v=a,x=v;e:for(;x!==null;){switch(x.tag){case 27:case 5:gt=x.stateNode,fa=!1;break e;case 3:gt=x.stateNode.containerInfo,fa=!0;break e;case 4:gt=x.stateNode.containerInfo,fa=!0;break e}x=x.return}if(gt===null)throw Error(r(160));vg(d,v,c),gt=null,fa=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)yg(a,e),a=a.sibling}var qa=null;function yg(e,a){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$a(a,e),Oa(e),s&4&&(en(3,e,e.return),Hr(3,e),en(5,e,e.return));break;case 1:$a(a,e),Oa(e),s&512&&(at||n===null||ha(n,n.return)),s&64&&Ti&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var c=qa;if($a(a,e),Oa(e),s&512&&(at||n===null||ha(n,n.return)),s&4){var d=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":d=c.getElementsByTagName("title")[0],(!d||d[dr]||d[Vt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(s),c.head.insertBefore(d,c.querySelector("head > title"))),jt(d,s,n),d[Vt]=e,Ct(d),s=d;break e;case"link":var v=uv("link","href",c).get(s+(n.href||""));if(v){for(var x=0;x<v.length;x++)if(d=v[x],d.getAttribute("href")===(n.href==null?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(x,1);break t}}d=c.createElement(s),jt(d,s,n),c.head.appendChild(d);break;case"meta":if(v=uv("meta","content",c).get(s+(n.content||""))){for(x=0;x<v.length;x++)if(d=v[x],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(x,1);break t}}d=c.createElement(s),jt(d,s,n),c.head.appendChild(d);break;default:throw Error(r(468,s))}d[Vt]=e,Ct(d),s=d}e.stateNode=s}else dv(c,e.type,e.stateNode);else e.stateNode=cv(c,s,e.memoizedProps);else d!==s?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,s===null?dv(c,e.type,e.stateNode):cv(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&dg(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){c=e.stateNode,d=e.memoizedProps;try{for(var E=c.firstChild;E;){var O=E.nextSibling,F=E.nodeName;E[dr]||F==="HEAD"||F==="BODY"||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||c.removeChild(E),E=O}for(var Y=e.type,P=c.attributes;P.length;)c.removeAttributeNode(P[0]);jt(c,Y,d),c[Vt]=e,c[aa]=d}catch(ue){Ye(e,e.return,ue)}}case 5:if($a(a,e),Oa(e),s&512&&(at||n===null||ha(n,n.return)),e.flags&32){c=e.stateNode;try{pl(c,"")}catch(ue){Ye(e,e.return,ue)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,dg(e,c,n!==null?n.memoizedProps:c)),s&1024&&(od=!0);break;case 6:if($a(a,e),Oa(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(ue){Ye(e,e.return,ue)}}break;case 3:if(Uo=null,c=qa,qa=Bo(a.containerInfo),$a(a,e),qa=c,Oa(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{is(a.containerInfo)}catch(ue){Ye(e,e.return,ue)}od&&(od=!1,_g(e));break;case 4:s=qa,qa=Bo(e.stateNode.containerInfo),$a(a,e),Oa(e),qa=s;break;case 12:$a(a,e),Oa(e);break;case 13:$a(a,e),Oa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bd=Ja()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,cd(e,s)));break;case 22:if(s&512&&(at||n===null||ha(n,n.return)),E=e.memoizedState!==null,O=n!==null&&n.memoizedState!==null,F=Ti,Y=at,Ti=F||E,at=Y||O,$a(a,e),at=Y,Ti=F,Oa(e),a=e.stateNode,a._current=e,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,s&8192&&(a._visibility=E?a._visibility&-2:a._visibility|1,E&&(a=Ti||at,n===null||O||a||Ol(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,a=e;;){if(a.tag===5||a.tag===26||a.tag===27){if(n===null){O=n=a;try{if(c=O.stateNode,E)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=O.stateNode,x=O.memoizedProps.style;var V=x!=null&&x.hasOwnProperty("display")?x.display:null;v.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(ue){Ye(O,O.return,ue)}}}else if(a.tag===6){if(n===null){O=a;try{O.stateNode.nodeValue=E?"":O.memoizedProps}catch(ue){Ye(O,O.return,ue)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,cd(e,n))));break;case 19:$a(a,e),Oa(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,cd(e,s)));break;case 21:break;default:$a(a,e),Oa(e)}}function Oa(e){var a=e.flags;if(a&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(hg(n)){var s=n;break e}n=n.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,d=rd(e);So(e,d,c);break;case 5:var v=s.stateNode;s.flags&32&&(pl(v,""),s.flags&=-33);var x=rd(e);So(e,x,v);break;case 3:case 4:var E=s.stateNode.containerInfo,O=rd(e);sd(e,O,E);break;default:throw Error(r(161))}}}catch(F){Ye(e,e.return,F)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function _g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;_g(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ni(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)mg(e,a.alternate,a),a=a.sibling}function Ol(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:en(4,a,a.return),Ol(a);break;case 1:ha(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&cg(a,a.return,n),Ol(a);break;case 26:case 27:case 5:ha(a,a.return),Ol(a);break;case 22:ha(a,a.return),a.memoizedState===null&&Ol(a);break;default:Ol(a)}e=e.sibling}}function tn(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,c=e,d=a,v=d.flags;switch(d.tag){case 0:case 11:case 15:tn(c,d,n),Hr(4,d);break;case 1:if(tn(c,d,n),s=d,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(O){Ye(s,s.return,O)}if(s=d,c=s.updateQueue,c!==null){var x=s.stateNode;try{var E=c.shared.hiddenCallbacks;if(E!==null)for(c.shared.hiddenCallbacks=null,c=0;c<E.length;c++)rg(E[c],x)}catch(O){Ye(s,s.return,O)}}n&&v&64&&og(d),Pn(d,d.return);break;case 26:case 27:case 5:tn(c,d,n),n&&s===null&&v&4&&ug(d),Pn(d,d.return);break;case 12:tn(c,d,n);break;case 13:tn(c,d,n),n&&v&4&&bg(c,d);break;case 22:d.memoizedState===null&&tn(c,d,n),Pn(d,d.return);break;default:tn(c,d,n)}a=a.sibling}}function ud(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Nr(n))}function dd(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Nr(e))}function an(e,a,n,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)xg(e,a,n,s),a=a.sibling}function xg(e,a,n,s){var c=a.flags;switch(a.tag){case 0:case 11:case 15:an(e,a,n,s),c&2048&&Hr(9,a);break;case 3:an(e,a,n,s),c&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Nr(e)));break;case 12:if(c&2048){an(e,a,n,s),e=a.stateNode;try{var d=a.memoizedProps,v=d.id,x=d.onPostCommit;typeof x=="function"&&x(v,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ye(a,a.return,E)}}else an(e,a,n,s);break;case 23:break;case 22:d=a.stateNode,a.memoizedState!==null?d._visibility&4?an(e,a,n,s):Ur(e,a):d._visibility&4?an(e,a,n,s):(d._visibility|=4,kl(e,a,n,s,(a.subtreeFlags&10256)!==0)),c&2048&&ud(a.alternate,a);break;case 24:an(e,a,n,s),c&2048&&dd(a.alternate,a);break;default:an(e,a,n,s)}}function kl(e,a,n,s,c){for(c=c&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var d=e,v=a,x=n,E=s,O=v.flags;switch(v.tag){case 0:case 11:case 15:kl(d,v,x,E,c),Hr(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&4?kl(d,v,x,E,c):Ur(d,v):(F._visibility|=4,kl(d,v,x,E,c)),c&&O&2048&&ud(v.alternate,v);break;case 24:kl(d,v,x,E,c),c&&O&2048&&dd(v.alternate,v);break;default:kl(d,v,x,E,c)}a=a.sibling}}function Ur(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,s=a,c=s.flags;switch(s.tag){case 22:Ur(n,s),c&2048&&ud(s.alternate,s);break;case 24:Ur(n,s),c&2048&&dd(s.alternate,s);break;default:Ur(n,s)}a=a.sibling}}var Ir=8192;function Rl(e){if(e.subtreeFlags&Ir)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 26:Rl(e),e.flags&Ir&&e.memoizedState!==null&&S2(qa,e.memoizedState,e.memoizedProps);break;case 5:Rl(e);break;case 3:case 4:var a=qa;qa=Bo(e.stateNode.containerInfo),Rl(e),qa=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ir,Ir=16777216,Rl(e),Ir=a):Rl(e));break;default:Rl(e)}}function Sg(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Pr(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var s=a[n];Tt=s,Cg(s,e)}Sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 0:case 11:case 15:Pr(e),e.flags&2048&&en(9,e,e.return);break;case 3:Pr(e);break;case 12:Pr(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&4&&(e.return===null||e.return.tag!==13)?(a._visibility&=-5,Eo(e)):Pr(e);break;default:Pr(e)}}function Eo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var s=a[n];Tt=s,Cg(s,e)}Sg(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:en(8,a,a.return),Eo(a);break;case 22:n=a.stateNode,n._visibility&4&&(n._visibility&=-5,Eo(a));break;default:Eo(a)}e=e.sibling}}function Cg(e,a){for(;Tt!==null;){var n=Tt;switch(n.tag){case 0:case 11:case 15:en(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Nr(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,Tt=s;else e:for(n=e;Tt!==null;){s=Tt;var c=s.sibling,d=s.return;if(gg(s),s===n){Tt=null;break e}if(c!==null){c.return=d,Tt=c;break e}Tt=d}}}function z_(e,a,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ka(e,a,n,s){return new z_(e,a,n,s)}function hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nn(e,a){var n=e.alternate;return n===null?(n=ka(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ag(e,a){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Co(e,a,n,s,c,d){var v=0;if(s=e,typeof e=="function")hd(e)&&(v=1);else if(typeof e=="string")v=x2(e,n,Wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return Vn(n.children,c,d,a);case p:v=8,c|=24;break;case b:return e=ka(12,n,a,c|2),e.elementType=b,e.lanes=d,e;case T:return e=ka(13,n,a,c),e.elementType=T,e.lanes=d,e;case M:return e=ka(19,n,a,c),e.elementType=M,e.lanes=d,e;case U:return Tg(n,c,d,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case y:v=10;break e;case w:v=9;break e;case S:v=11;break e;case A:v=14;break e;case D:v=16,s=null;break e}v=29,n=Error(r(130,e===null?"null":typeof e,"")),s=null}return a=ka(v,n,a,c),a.elementType=e,a.type=s,a.lanes=d,a}function Vn(e,a,n,s){return e=ka(7,e,s,a),e.lanes=n,e}function Tg(e,a,n,s){e=ka(22,e,s,a),e.elementType=U,e.lanes=n;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=c._current;if(d===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var v=qi(d,2);v!==null&&(c._pendingVisibility|=2,Zt(v,d,2))}},attach:function(){var d=c._current;if(d===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var v=qi(d,2);v!==null&&(c._pendingVisibility&=-3,Zt(v,d,2))}}};return e.stateNode=c,e}function fd(e,a,n){return e=ka(6,e,null,a),e.lanes=n,e}function pd(e,a,n){return a=ka(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function $i(e){e.flags|=4}function Mg(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hv(a)){if(a=Na.current,a!==null&&((Oe&4194176)===Oe?ti!==null:(Oe&62914560)!==Oe&&(Oe&536870912)===0||a!==ti))throw Ar=yu,qp;e.flags|=8192}}function Ao(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Gf():536870912,e.lanes|=a,Ll|=a)}function Vr(e,a){if(!Re)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Je(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(a)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=n,a}function j_(e,a,n){var s=a.pendingProps;switch(vu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(a),null;case 1:return Je(a),null;case 3:return n=a.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Ai(_t),ol(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(wr(a)?$i(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Fa!==null&&(wd(Fa),Fa=null))),Je(a),null;case 26:return n=a.memoizedState,e===null?($i(a),n!==null?(Je(a),Mg(a,n)):(Je(a),a.flags&=-16777217)):n?n!==e.memoizedState?($i(a),Je(a),Mg(a,n)):(Je(a),a.flags&=-16777217):(e.memoizedProps!==s&&$i(a),Je(a),a.flags&=-16777217),null;case 27:js(a),n=Ge.current;var c=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==s&&$i(a);else{if(!s){if(a.stateNode===null)throw Error(r(166));return Je(a),null}e=Wt.current,wr(a)?Vp(a):(e=nv(c,s,n),a.stateNode=e,$i(a))}return Je(a),null;case 5:if(js(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==s&&$i(a);else{if(!s){if(a.stateNode===null)throw Error(r(166));return Je(a),null}if(e=Wt.current,wr(a))Vp(a);else{switch(c=jo(Ge.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(n,{is:s.is}):c.createElement(n)}}e[Vt]=a,e[aa]=s;e:for(c=a.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break e;for(;c.sibling===null;){if(c.return===null||c.return===a)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}a.stateNode=e;e:switch(jt(e,n,s),n){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&$i(a)}}return Je(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==s&&$i(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(r(166));if(e=Ge.current,wr(a)){if(e=a.stateNode,n=a.memoizedProps,s=null,c=Qt,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Vt]=a,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||Kg(e.nodeValue,n)),e||Rn(a)}else e=jo(e).createTextNode(s),e[Vt]=a,a.stateNode=e}return Je(a),null;case 13:if(s=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=wr(a),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=a.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Vt]=a}else Sr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Je(a),c=!1}else Fa!==null&&(wd(Fa),Fa=null),c=!0;if(!c)return a.flags&256?(wi(a),a):(wi(a),null)}if(wi(a),(a.flags&128)!==0)return a.lanes=n,a;if(n=s!==null,e=e!==null&&e.memoizedState!==null,n){s=a.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==c&&(s.flags|=2048)}return n!==e&&n&&(a.child.flags|=8192),Ao(a,a.updateQueue),Je(a),null;case 4:return ol(),e===null&&Rd(a.stateNode.containerInfo),Je(a),null;case 10:return Ai(a.type),Je(a),null;case 19:if($e(yt),c=a.memoizedState,c===null)return Je(a),null;if(s=(a.flags&128)!==0,d=c.rendering,d===null)if(s)Vr(c,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=oo(e),d!==null){for(a.flags|=128,Vr(c,!1),e=d.updateQueue,a.updateQueue=e,Ao(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Ag(n,e),n=n.sibling;return he(yt,yt.current&1|2),a.child}e=e.sibling}c.tail!==null&&Ja()>To&&(a.flags|=128,s=!0,Vr(c,!1),a.lanes=4194304)}else{if(!s)if(e=oo(d),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,Ao(a,e),Vr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Re)return Je(a),null}else 2*Ja()-c.renderingStartTime>To&&n!==536870912&&(a.flags|=128,s=!0,Vr(c,!1),a.lanes=4194304);c.isBackwards?(d.sibling=a.child,a.child=d):(e=c.last,e!==null?e.sibling=d:a.child=d,c.last=d)}return c.tail!==null?(a=c.tail,c.rendering=a,c.tail=a.sibling,c.renderingStartTime=Ja(),a.sibling=null,e=yt.current,he(yt,s?e&1|2:e&1),a):(Je(a),null);case 22:case 23:return wi(a),xu(),s=a.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(n&536870912)!==0&&(a.flags&128)===0&&(Je(a),a.subtreeFlags&6&&(a.flags|=8192)):Je(a),n=a.updateQueue,n!==null&&Ao(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==n&&(a.flags|=2048),e!==null&&$e(Ln),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Ai(_t),Je(a),null;case 25:return null}throw Error(r(156,a.tag))}function B_(e,a){switch(vu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ai(_t),ol(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return js(a),null;case 13:if(wi(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Sr()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return $e(yt),null;case 4:return ol(),null;case 10:return Ai(a.type),null;case 22:case 23:return wi(a),xu(),e!==null&&$e(Ln),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ai(_t),null;case 25:return null;default:return null}}function Ng(e,a){switch(vu(a),a.tag){case 3:Ai(_t),ol();break;case 26:case 27:case 5:js(a);break;case 4:ol();break;case 13:wi(a);break;case 19:$e(yt);break;case 10:Ai(a.type);break;case 22:case 23:wi(a),xu(),e!==null&&$e(Ln);break;case 24:Ai(_t)}}var H_={getCacheForType:function(e){var a=Ft(_t),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n}},U_=typeof WeakMap=="function"?WeakMap:Map,et=0,Xe=null,Se=null,Oe=0,We=0,pa=null,Oi=!1,Dl=!1,md=!1,ki=0,it=0,ln=0,Fn=0,gd=0,Ra=0,Ll=0,Fr=null,ii=null,vd=!1,bd=0,To=1/0,Mo=null,rn=null,No=!1,qn=null,qr=0,yd=0,_d=null,Gr=0,xd=null;function ma(){if((et&2)!==0&&Oe!==0)return Oe&-Oe;if(z.T!==null){var e=Al;return e!==0?e:Nd()}return Qf()}function $g(){Ra===0&&(Ra=(Oe&536870912)===0||Re?qf():536870912);var e=Na.current;return e!==null&&(e.flags|=32),Ra}function Zt(e,a,n){(e===Xe&&We===2||e.cancelPendingCommit!==null)&&(zl(e,0),Ri(e,Oe,Ra,!1)),ur(e,n),((et&2)===0||e!==Xe)&&(e===Xe&&((et&2)===0&&(Fn|=n),it===4&&Ri(e,Oe,Ra,!1)),ni(e))}function Og(e,a,n){if((et&6)!==0)throw Error(r(327));var s=!n&&(a&60)===0&&(a&e.expiredLanes)===0||cr(e,a),c=s?V_(e,a):Cd(e,a,!0),d=s;do{if(c===0){Dl&&!s&&Ri(e,a,0,!1);break}else if(c===6)Ri(e,a,0,!Oi);else{if(n=e.current.alternate,d&&!I_(n)){c=Cd(e,a,!1),d=!1;continue}if(c===2){if(d=a,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){a=v;e:{var x=e;c=Fr;var E=x.current.memoizedState.isDehydrated;if(E&&(zl(x,v).flags|=256),v=Cd(x,v,!1),v!==2){if(md&&!E){x.errorRecoveryDisabledLanes|=d,Fn|=d,c=4;break e}d=ii,ii=c,d!==null&&wd(d)}c=v}if(d=!1,c!==2)continue}}if(c===1){zl(e,0),Ri(e,a,0,!0);break}e:{switch(s=e,c){case 0:case 1:throw Error(r(345));case 4:if((a&4194176)===a){Ri(s,a,Ra,!Oi);break e}break;case 2:ii=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=n,s.finishedLanes=a,(a&62914560)===a&&(d=bd+300-Ja(),10<d)){if(Ri(s,a,Ra,!Oi),Is(s,0)!==0)break e;s.timeoutHandle=tv(kg.bind(null,s,n,ii,Mo,vd,a,Ra,Fn,Ll,Oi,2,-0,0),d);break e}kg(s,n,ii,Mo,vd,a,Ra,Fn,Ll,Oi,0,-0,0)}}break}while(!0);ni(e)}function wd(e){ii===null?ii=e:ii.push.apply(ii,e)}function kg(e,a,n,s,c,d,v,x,E,O,F,Y,P){var V=a.subtreeFlags;if((V&8192||(V&16785408)===16785408)&&(Kr={stylesheets:null,count:0,unsuspend:w2},wg(a),a=E2(),a!==null)){e.cancelPendingCommit=a(Hg.bind(null,e,n,s,c,v,x,E,1,Y,P)),Ri(e,d,v,!O);return}Hg(e,n,s,c,v,x,E,F,Y,P)}function I_(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var c=n[s],d=c.getSnapshot;c=c.value;try{if(!da(d(),c))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ri(e,a,n,s){a&=~gd,a&=~Fn,e.suspendedLanes|=a,e.pingedLanes&=~a,s&&(e.warmLanes|=a),s=e.expirationTimes;for(var c=a;0<c;){var d=31-ua(c),v=1<<d;s[d]=-1,c&=~v}n!==0&&Yf(e,n,a)}function $o(){return(et&6)===0?(Yr(0),!1):!0}function Sd(){if(Se!==null){if(We===0)var e=Se.return;else e=Se,Ci=Un=null,Nu(e),El=null,Tr=0,e=Se;for(;e!==null;)Ng(e.alternate,e),e=e.return;Se=null}}function zl(e,a){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,r2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd(),Xe=e,Se=n=nn(e.current,null),Oe=a,We=0,pa=null,Oi=!1,Dl=cr(e,a),md=!1,Ll=Ra=gd=Fn=ln=it=0,ii=Fr=null,vd=!1,(a&8)!==0&&(a|=a&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=a;0<s;){var c=31-ua(s),d=1<<c;a|=e[c],s&=~d}return ki=a,Js(),n}function Rg(e,a){_e=null,z.H=ai,a===Cr?(a=Xp(),We=3):a===qp?(a=Xp(),We=4):We=a===Gm?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,pa=a,Se===null&&(it=1,_o(e,Aa(a,e.current)))}function Dg(){var e=z.H;return z.H=ai,e===null?ai:e}function Lg(){var e=z.A;return z.A=H_,e}function Ed(){it=4,Oi||(Oe&4194176)!==Oe&&Na.current!==null||(Dl=!0),(ln&134217727)===0&&(Fn&134217727)===0||Xe===null||Ri(Xe,Oe,Ra,!1)}function Cd(e,a,n){var s=et;et|=2;var c=Dg(),d=Lg();(Xe!==e||Oe!==a)&&(Mo=null,zl(e,a)),a=!1;var v=it;e:do try{if(We!==0&&Se!==null){var x=Se,E=pa;switch(We){case 8:Sd(),v=6;break e;case 3:case 2:case 6:Na.current===null&&(a=!0);var O=We;if(We=0,pa=null,jl(e,x,E,O),n&&Dl){v=0;break e}break;default:O=We,We=0,pa=null,jl(e,x,E,O)}}P_(),v=it;break}catch(F){Rg(e,F)}while(!0);return a&&e.shellSuspendCounter++,Ci=Un=null,et=s,z.H=c,z.A=d,Se===null&&(Xe=null,Oe=0,Js()),v}function P_(){for(;Se!==null;)zg(Se)}function V_(e,a){var n=et;et|=2;var s=Dg(),c=Lg();Xe!==e||Oe!==a?(Mo=null,To=Ja()+500,zl(e,a)):Dl=cr(e,a);e:do try{if(We!==0&&Se!==null){a=Se;var d=pa;t:switch(We){case 1:We=0,pa=null,jl(e,a,d,1);break;case 2:if(Gp(d)){We=0,pa=null,jg(a);break}a=function(){We===2&&Xe===e&&(We=7),ni(e)},d.then(a,a);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:Gp(d)?(We=0,pa=null,jg(a)):(We=0,pa=null,jl(e,a,d,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var x=Se;if(!v||hv(v)){We=0,pa=null;var E=x.sibling;if(E!==null)Se=E;else{var O=x.return;O!==null?(Se=O,Oo(O)):Se=null}break t}}We=0,pa=null,jl(e,a,d,5);break;case 6:We=0,pa=null,jl(e,a,d,6);break;case 8:Sd(),it=6;break e;default:throw Error(r(462))}}F_();break}catch(F){Rg(e,F)}while(!0);return Ci=Un=null,z.H=s,z.A=c,et=n,Se!==null?0:(Xe=null,Oe=0,Js(),it)}function F_(){for(;Se!==null&&!hy();)zg(Se)}function zg(e){var a=ng(e.alternate,e,ki);e.memoizedProps=e.pendingProps,a===null?Oo(e):Se=a}function jg(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Km(n,a,a.pendingProps,a.type,void 0,Oe);break;case 11:a=Km(n,a,a.pendingProps,a.type.render,a.ref,Oe);break;case 5:Nu(a);default:Ng(n,a),a=Se=Ag(a,ki),a=ng(n,a,ki)}e.memoizedProps=e.pendingProps,a===null?Oo(e):Se=a}function jl(e,a,n,s){Ci=Un=null,Nu(a),El=null,Tr=0;var c=a.return;try{if(k_(e,c,a,n,Oe)){it=1,_o(e,Aa(n,e.current)),Se=null;return}}catch(d){if(c!==null)throw Se=c,d;it=1,_o(e,Aa(n,e.current)),Se=null;return}a.flags&32768?(Re||s===1?e=!0:Dl||(Oe&536870912)!==0?e=!1:(Oi=e=!0,(s===2||s===3||s===6)&&(s=Na.current,s!==null&&s.tag===13&&(s.flags|=16384))),Bg(a,e)):Oo(a)}function Oo(e){var a=e;do{if((a.flags&32768)!==0){Bg(a,Oi);return}e=a.return;var n=j_(a.alternate,a,ki);if(n!==null){Se=n;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=e}while(a!==null);it===0&&(it=5)}function Bg(e,a){do{var n=B_(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);it=6,Se=null}function Hg(e,a,n,s,c,d,v,x,E,O){var F=z.T,Y=K.p;try{K.p=2,z.T=null,q_(e,a,n,s,Y,c,d,v,x,E,O)}finally{z.T=F,K.p=Y}}function q_(e,a,n,s,c,d,v,x){do Bl();while(qn!==null);if((et&6)!==0)throw Error(r(327));var E=e.finishedWork;if(s=e.finishedLanes,E===null)return null;if(e.finishedWork=null,e.finishedLanes=0,E===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var O=E.lanes|E.childLanes;if(O|=pu,Sy(e,s,O,d,v,x),e===Xe&&(Se=Xe=null,Oe=0),(E.subtreeFlags&10256)===0&&(E.flags&10256)===0||No||(No=!0,yd=O,_d=n,W_(Bs,function(){return Bl(),null})),n=(E.flags&15990)!==0,(E.subtreeFlags&15990)!==0||n?(n=z.T,z.T=null,d=K.p,K.p=2,v=et,et|=4,D_(e,E),yg(E,e),m_(jd,e.containerInfo),Vo=!!zd,jd=zd=null,e.current=E,mg(e,E.alternate,E),fy(),et=v,K.p=d,z.T=n):e.current=E,No?(No=!1,qn=e,qr=s):Ug(e,O),O=e.pendingLanes,O===0&&(rn=null),by(E.stateNode),ni(e),a!==null)for(c=e.onRecoverableError,E=0;E<a.length;E++)O=a[E],c(O.value,{componentStack:O.stack});return(qr&3)!==0&&Bl(),O=e.pendingLanes,(s&4194218)!==0&&(O&42)!==0?e===xd?Gr++:(Gr=0,xd=e):Gr=0,Yr(0),null}function Ug(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Nr(a)))}function Bl(){if(qn!==null){var e=qn,a=yd;yd=0;var n=Wf(qr),s=z.T,c=K.p;try{if(K.p=32>n?32:n,z.T=null,qn===null)var d=!1;else{n=_d,_d=null;var v=qn,x=qr;if(qn=null,qr=0,(et&6)!==0)throw Error(r(331));var E=et;if(et|=4,Eg(v.current),xg(v,v.current,x,n),et=E,Yr(0,!1),ca&&typeof ca.onPostCommitFiberRoot=="function")try{ca.onPostCommitFiberRoot(or,v)}catch{}d=!0}return d}finally{K.p=c,z.T=s,Ug(e,a)}}return!1}function Ig(e,a,n){a=Aa(n,a),a=Vu(e.stateNode,a,2),e=Ji(e,a,2),e!==null&&(ur(e,2),ni(e))}function Ye(e,a,n){if(e.tag===3)Ig(e,e,n);else for(;a!==null;){if(a.tag===3){Ig(a,e,n);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(rn===null||!rn.has(s))){e=Aa(n,e),n=Fm(2),s=Ji(a,n,2),s!==null&&(qm(n,s,a,e),ur(s,2),ni(s));break}}a=a.return}}function Ad(e,a,n){var s=e.pingCache;if(s===null){s=e.pingCache=new U_;var c=new Set;s.set(a,c)}else c=s.get(a),c===void 0&&(c=new Set,s.set(a,c));c.has(n)||(md=!0,c.add(n),e=G_.bind(null,e,a,n),a.then(e,e))}function G_(e,a,n){var s=e.pingCache;s!==null&&s.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xe===e&&(Oe&n)===n&&(it===4||it===3&&(Oe&62914560)===Oe&&300>Ja()-bd?(et&2)===0&&zl(e,0):gd|=n,Ll===Oe&&(Ll=0)),ni(e)}function Pg(e,a){a===0&&(a=Gf()),e=qi(e,a),e!==null&&(ur(e,a),ni(e))}function Y_(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Pg(e,n)}function X_(e,a){var n=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(a),Pg(e,n)}function W_(e,a){return Fc(e,a)}var ko=null,Hl=null,Td=!1,Ro=!1,Md=!1,Gn=0;function ni(e){e!==Hl&&e.next===null&&(Hl===null?ko=Hl=e:Hl=Hl.next=e),Ro=!0,Td||(Td=!0,Z_(Q_))}function Yr(e,a){if(!Md&&Ro){Md=!0;do for(var n=!1,s=ko;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var d=0;else{var v=s.suspendedLanes,x=s.pingedLanes;d=(1<<31-ua(42|e)+1)-1,d&=c&~(v&~x),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(n=!0,qg(s,d))}else d=Oe,d=Is(s,s===Xe?d:0),(d&3)===0||cr(s,d)||(n=!0,qg(s,d));s=s.next}while(n);Md=!1}}function Q_(){Ro=Td=!1;var e=0;Gn!==0&&(l2()&&(e=Gn),Gn=0);for(var a=Ja(),n=null,s=ko;s!==null;){var c=s.next,d=Vg(s,a);d===0?(s.next=null,n===null?ko=c:n.next=c,c===null&&(Hl=n)):(n=s,(e!==0||(d&3)!==0)&&(Ro=!0)),s=c}Yr(e)}function Vg(e,a){for(var n=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-ua(d),x=1<<v,E=c[v];E===-1?((x&n)===0||(x&s)!==0)&&(c[v]=wy(x,a)):E<=a&&(e.expiredLanes|=x),d&=~x}if(a=Xe,n=Oe,n=Is(e,e===a?n:0),s=e.callbackNode,n===0||e===a&&We===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&qc(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||cr(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(s!==null&&qc(s),Wf(n)){case 2:case 8:n=Vf;break;case 32:n=Bs;break;case 268435456:n=Ff;break;default:n=Bs}return s=Fg.bind(null,e),n=Fc(n,s),e.callbackPriority=a,e.callbackNode=n,a}return s!==null&&s!==null&&qc(s),e.callbackPriority=2,e.callbackNode=null,2}function Fg(e,a){var n=e.callbackNode;if(Bl()&&e.callbackNode!==n)return null;var s=Oe;return s=Is(e,e===Xe?s:0),s===0?null:(Og(e,s,a),Vg(e,Ja()),e.callbackNode!=null&&e.callbackNode===n?Fg.bind(null,e):null)}function qg(e,a){if(Bl())return null;Og(e,a,!0)}function Z_(e){s2(function(){(et&6)!==0?Fc(Pf,e):e()})}function Nd(){return Gn===0&&(Gn=qf()),Gn}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gs(""+e)}function Yg(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function K_(e,a,n,s,c){if(a==="submit"&&n&&n.stateNode===c){var d=Gg((c[aa]||null).action),v=s.submitter;v&&(a=(a=v[aa]||null)?Gg(a.formAction):v.getAttribute("formAction"),a!==null&&(d=a,v=null));var x=new Qs("action","action",null,s,c);e.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Gn!==0){var E=v?Yg(c,v):new FormData(c);Bu(n,{pending:!0,data:E,method:c.method,action:d},null,E)}}else typeof d=="function"&&(x.preventDefault(),E=v?Yg(c,v):new FormData(c),Bu(n,{pending:!0,data:E,method:c.method,action:d},d,E))},currentTarget:c}]})}}for(var $d=0;$d<Hp.length;$d++){var Od=Hp[$d],J_=Od.toLowerCase(),e2=Od[0].toUpperCase()+Od.slice(1);Va(J_,"on"+e2)}Va(Dp,"onAnimationEnd"),Va(Lp,"onAnimationIteration"),Va(zp,"onAnimationStart"),Va("dblclick","onDoubleClick"),Va("focusin","onFocus"),Va("focusout","onBlur"),Va(v_,"onTransitionRun"),Va(b_,"onTransitionStart"),Va(y_,"onTransitionCancel"),Va(jp,"onTransitionEnd"),hl("onMouseEnter",["mouseout","mouseover"]),hl("onMouseLeave",["mouseout","mouseover"]),hl("onPointerEnter",["pointerout","pointerover"]),hl("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xr));function Xg(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],c=s.event;s=s.listeners;e:{var d=void 0;if(a)for(var v=s.length-1;0<=v;v--){var x=s[v],E=x.instance,O=x.currentTarget;if(x=x.listener,E!==d&&c.isPropagationStopped())break e;d=x,c.currentTarget=O;try{d(c)}catch(F){yo(F)}c.currentTarget=null,d=E}else for(v=0;v<s.length;v++){if(x=s[v],E=x.instance,O=x.currentTarget,x=x.listener,E!==d&&c.isPropagationStopped())break e;d=x,c.currentTarget=O;try{d(c)}catch(F){yo(F)}c.currentTarget=null,d=E}}}}function Te(e,a){var n=a[Yc];n===void 0&&(n=a[Yc]=new Set);var s=e+"__bubble";n.has(s)||(Wg(a,e,2,!1),n.add(s))}function kd(e,a,n){var s=0;a&&(s|=4),Wg(n,e,s,a)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Rd(e){if(!e[Do]){e[Do]=!0,Kf.forEach(function(n){n!=="selectionchange"&&(t2.has(n)||kd(n,!1,e),kd(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Do]||(a[Do]=!0,kd("selectionchange",!1,a))}}function Wg(e,a,n,s){switch(bv(a)){case 2:var c=T2;break;case 8:c=M2;break;default:c=Gd}n=c.bind(null,a,n,e),c=void 0,!tu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(a,n,{capture:!0,passive:c}):e.addEventListener(a,n,!0):c!==void 0?e.addEventListener(a,n,{passive:c}):e.addEventListener(a,n,!1)}function Dd(e,a,n,s,c){var d=s;if((a&1)===0&&(a&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var x=s.stateNode.containerInfo;if(x===c||x.nodeType===8&&x.parentNode===c)break;if(v===4)for(v=s.return;v!==null;){var E=v.tag;if((E===3||E===4)&&(E=v.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;v=v.return}for(;x!==null;){if(v=An(x),v===null)return;if(E=v.tag,E===5||E===6||E===26||E===27){s=d=v;continue e}x=x.parentNode}}s=s.return}up(function(){var O=d,F=Jc(n),Y=[];e:{var P=Bp.get(e);if(P!==void 0){var V=Qs,ue=e;switch(e){case"keypress":if(Xs(n)===0)break e;case"keydown":case"keyup":V=Xy;break;case"focusin":ue="focus",V=lu;break;case"focusout":ue="blur",V=lu;break;case"beforeblur":case"afterblur":V=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Zy;break;case Dp:case Lp:case zp:V=Hy;break;case jp:V=Jy;break;case"scroll":case"scrollend":V=Dy;break;case"wheel":V=t_;break;case"copy":case"cut":case"paste":V=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=mp;break;case"toggle":case"beforetoggle":V=i_}var me=(a&4)!==0,nt=!me&&(e==="scroll"||e==="scrollend"),L=me?P!==null?P+"Capture":null:P;me=[];for(var N=O,H;N!==null;){var G=N;if(H=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||H===null||L===null||(G=fr(N,L),G!=null&&me.push(Wr(N,G,H))),nt)break;N=N.return}0<me.length&&(P=new V(P,ue,null,n,F),Y.push({event:P,listeners:me}))}}if((a&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",P&&n!==Kc&&(ue=n.relatedTarget||n.fromElement)&&(An(ue)||ue[cl]))break e;if((V||P)&&(P=F.window===F?F:(P=F.ownerDocument)?P.defaultView||P.parentWindow:window,V?(ue=n.relatedTarget||n.toElement,V=O,ue=ue?An(ue):null,ue!==null&&(nt=ee(ue),me=ue.tag,ue!==nt||me!==5&&me!==27&&me!==6)&&(ue=null)):(V=null,ue=O),V!==ue)){if(me=fp,G="onMouseLeave",L="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(me=mp,G="onPointerLeave",L="onPointerEnter",N="pointer"),nt=V==null?P:hr(V),H=ue==null?P:hr(ue),P=new me(G,N+"leave",V,n,F),P.target=nt,P.relatedTarget=H,G=null,An(F)===O&&(me=new me(L,N+"enter",ue,n,F),me.target=H,me.relatedTarget=nt,G=me),nt=G,V&&ue)t:{for(me=V,L=ue,N=0,H=me;H;H=Ul(H))N++;for(H=0,G=L;G;G=Ul(G))H++;for(;0<N-H;)me=Ul(me),N--;for(;0<H-N;)L=Ul(L),H--;for(;N--;){if(me===L||L!==null&&me===L.alternate)break t;me=Ul(me),L=Ul(L)}me=null}else me=null;V!==null&&Qg(Y,P,V,me,!1),ue!==null&&nt!==null&&Qg(Y,nt,ue,me,!0)}}e:{if(P=O?hr(O):window,V=P.nodeName&&P.nodeName.toLowerCase(),V==="select"||V==="input"&&P.type==="file")var se=Sp;else if(xp(P))if(Ep)se=f_;else{se=d_;var we=u_}else V=P.nodeName,!V||V.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?O&&Zc(O.elementType)&&(se=Sp):se=h_;if(se&&(se=se(e,O))){wp(Y,se,n,F);break e}we&&we(e,P,O),e==="focusout"&&O&&P.type==="number"&&O.memoizedProps.value!=null&&Qc(P,"number",P.value)}switch(we=O?hr(O):window,e){case"focusin":(xp(we)||we.contentEditable==="true")&&(bl=we,du=O,xr=null);break;case"focusout":xr=du=bl=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,kp(Y,n,F);break;case"selectionchange":if(g_)break;case"keydown":case"keyup":kp(Y,n,F)}var fe;if(su)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else vl?yp(e,n)&&(pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(pe="onCompositionStart");pe&&(gp&&n.locale!=="ko"&&(vl||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&vl&&(fe=dp()):(Fi=F,au="value"in Fi?Fi.value:Fi.textContent,vl=!0)),we=Lo(O,pe),0<we.length&&(pe=new pp(pe,e,null,n,F),Y.push({event:pe,listeners:we}),fe?pe.data=fe:(fe=_p(n),fe!==null&&(pe.data=fe)))),(fe=l_?r_(e,n):s_(e,n))&&(pe=Lo(O,"onBeforeInput"),0<pe.length&&(we=new pp("onBeforeInput","beforeinput",null,n,F),Y.push({event:we,listeners:pe}),we.data=fe)),K_(Y,e,O,n,F)}Xg(Y,a)})}function Wr(e,a,n){return{instance:e,listener:a,currentTarget:n}}function Lo(e,a){for(var n=a+"Capture",s=[];e!==null;){var c=e,d=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=fr(e,n),c!=null&&s.unshift(Wr(e,c,d)),c=fr(e,a),c!=null&&s.push(Wr(e,c,d))),e=e.return}return s}function Ul(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qg(e,a,n,s,c){for(var d=a._reactName,v=[];n!==null&&n!==s;){var x=n,E=x.alternate,O=x.stateNode;if(x=x.tag,E!==null&&E===s)break;x!==5&&x!==26&&x!==27||O===null||(E=O,c?(O=fr(n,d),O!=null&&v.unshift(Wr(n,O,E))):c||(O=fr(n,d),O!=null&&v.push(Wr(n,O,E)))),n=n.return}v.length!==0&&e.push({event:a,listeners:v})}var a2=/\r\n?/g,i2=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(a2,`
`).replace(i2,"")}function Kg(e,a){return a=Zg(a),Zg(e)===a}function zo(){}function Ve(e,a,n,s,c,d){switch(n){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||pl(e,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&pl(e,""+s);break;case"className":Vs(e,"class",s);break;case"tabIndex":Vs(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Vs(e,n,s);break;case"style":op(e,s,d);break;case"data":if(a!=="object"){Vs(e,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=Gs(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(a!=="input"&&Ve(e,a,"name",c.name,c,null),Ve(e,a,"formEncType",c.formEncType,c,null),Ve(e,a,"formMethod",c.formMethod,c,null),Ve(e,a,"formTarget",c.formTarget,c,null)):(Ve(e,a,"encType",c.encType,c,null),Ve(e,a,"method",c.method,c,null),Ve(e,a,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=Gs(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=zo);break;case"onScroll":s!=null&&Te("scroll",e);break;case"onScrollEnd":s!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(n=s.__html,n!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=Gs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Ps(e,"popover",s);break;case"xlinkActuate":yi(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":yi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":yi(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":yi(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":yi(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":yi(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":yi(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":yi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":yi(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ps(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ky.get(n)||n,Ps(e,n,s))}}function Ld(e,a,n,s,c,d){switch(n){case"style":op(e,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(n=s.__html,n!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof s=="string"?pl(e,s):(typeof s=="number"||typeof s=="bigint")&&pl(e,""+s);break;case"onScroll":s!=null&&Te("scroll",e);break;case"onScrollEnd":s!=null&&Te("scrollend",e);break;case"onClick":s!=null&&(e.onclick=zo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),a=n.slice(2,c?n.length-7:void 0),d=e[aa]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(a,d,c),typeof s=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,s,c);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):Ps(e,n,s)}}}function jt(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var s=!1,c=!1,d;for(d in n)if(n.hasOwnProperty(d)){var v=n[d];if(v!=null)switch(d){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ve(e,a,d,v,n,null)}}c&&Ve(e,a,"srcSet",n.srcSet,n,null),s&&Ve(e,a,"src",n.src,n,null);return;case"input":Te("invalid",e);var x=d=v=c=null,E=null,O=null;for(s in n)if(n.hasOwnProperty(s)){var F=n[s];if(F!=null)switch(s){case"name":c=F;break;case"type":v=F;break;case"checked":E=F;break;case"defaultChecked":O=F;break;case"value":d=F;break;case"defaultValue":x=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,a));break;default:Ve(e,a,s,F,n,null)}}np(e,d,x,E,O,v,c,!1),Fs(e);return;case"select":Te("invalid",e),s=v=d=null;for(c in n)if(n.hasOwnProperty(c)&&(x=n[c],x!=null))switch(c){case"value":d=x;break;case"defaultValue":v=x;break;case"multiple":s=x;default:Ve(e,a,c,x,n,null)}a=d,n=v,e.multiple=!!s,a!=null?fl(e,!!s,a,!1):n!=null&&fl(e,!!s,n,!0);return;case"textarea":Te("invalid",e),d=c=s=null;for(v in n)if(n.hasOwnProperty(v)&&(x=n[v],x!=null))switch(v){case"value":s=x;break;case"defaultValue":c=x;break;case"children":d=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(91));break;default:Ve(e,a,v,x,n,null)}rp(e,s,c,d),Fs(e);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(s=n[E],s!=null))switch(E){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ve(e,a,E,s,n,null)}return;case"dialog":Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(s=0;s<Xr.length;s++)Te(Xr[s],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(s=n[O],s!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ve(e,a,O,s,n,null)}return;default:if(Zc(a)){for(F in n)n.hasOwnProperty(F)&&(s=n[F],s!==void 0&&Ld(e,a,F,s,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(s=n[x],s!=null&&Ve(e,a,x,s,n,null))}function n2(e,a,n,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,x=null,E=null,O=null,F=null;for(V in n){var Y=n[V];if(n.hasOwnProperty(V)&&Y!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":E=Y;default:s.hasOwnProperty(V)||Ve(e,a,V,null,s,Y)}}for(var P in s){var V=s[P];if(Y=n[P],s.hasOwnProperty(P)&&(V!=null||Y!=null))switch(P){case"type":d=V;break;case"name":c=V;break;case"checked":O=V;break;case"defaultChecked":F=V;break;case"value":v=V;break;case"defaultValue":x=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(r(137,a));break;default:V!==Y&&Ve(e,a,P,V,s,Y)}}Wc(e,v,x,E,O,F,d,c);return;case"select":V=v=x=P=null;for(d in n)if(E=n[d],n.hasOwnProperty(d)&&E!=null)switch(d){case"value":break;case"multiple":V=E;default:s.hasOwnProperty(d)||Ve(e,a,d,null,s,E)}for(c in s)if(d=s[c],E=n[c],s.hasOwnProperty(c)&&(d!=null||E!=null))switch(c){case"value":P=d;break;case"defaultValue":x=d;break;case"multiple":v=d;default:d!==E&&Ve(e,a,c,d,s,E)}a=x,n=v,s=V,P!=null?fl(e,!!n,P,!1):!!s!=!!n&&(a!=null?fl(e,!!n,a,!0):fl(e,!!n,n?[]:"",!1));return;case"textarea":V=P=null;for(x in n)if(c=n[x],n.hasOwnProperty(x)&&c!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Ve(e,a,x,null,s,c)}for(v in s)if(c=s[v],d=n[v],s.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":P=c;break;case"defaultValue":V=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Ve(e,a,v,c,s,d)}lp(e,P,V);return;case"option":for(var ue in n)if(P=n[ue],n.hasOwnProperty(ue)&&P!=null&&!s.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ve(e,a,ue,null,s,P)}for(E in s)if(P=s[E],V=n[E],s.hasOwnProperty(E)&&P!==V&&(P!=null||V!=null))switch(E){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Ve(e,a,E,P,s,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in n)P=n[me],n.hasOwnProperty(me)&&P!=null&&!s.hasOwnProperty(me)&&Ve(e,a,me,null,s,P);for(O in s)if(P=s[O],V=n[O],s.hasOwnProperty(O)&&P!==V&&(P!=null||V!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(r(137,a));break;default:Ve(e,a,O,P,s,V)}return;default:if(Zc(a)){for(var nt in n)P=n[nt],n.hasOwnProperty(nt)&&P!==void 0&&!s.hasOwnProperty(nt)&&Ld(e,a,nt,void 0,s,P);for(F in s)P=s[F],V=n[F],!s.hasOwnProperty(F)||P===V||P===void 0&&V===void 0||Ld(e,a,F,P,s,V);return}}for(var L in n)P=n[L],n.hasOwnProperty(L)&&P!=null&&!s.hasOwnProperty(L)&&Ve(e,a,L,null,s,P);for(Y in s)P=s[Y],V=n[Y],!s.hasOwnProperty(Y)||P===V||P==null&&V==null||Ve(e,a,Y,P,s,V)}var zd=null,jd=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function Jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ev(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Bd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Hd=null;function l2(){var e=window.event;return e&&e.type==="popstate"?e===Hd?!1:(Hd=e,!0):(Hd=null,!1)}var tv=typeof setTimeout=="function"?setTimeout:void 0,r2=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,s2=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(e){return av.resolve(null).then(e).catch(o2)}:tv;function o2(e){setTimeout(function(){throw e})}function Ud(e,a){var n=a,s=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(s===0){e.removeChild(c),is(a);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=c}while(n);is(a)}function Id(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Id(n),Xc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function c2(e,a,n,s){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[dr])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ga(e.nextSibling),e===null)break}return null}function u2(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ga(e.nextSibling),e===null))return null;return e}function Ga(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}function iv(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(a===0)return e;a--}else n==="/$"&&a++}e=e.previousSibling}return null}function nv(e,a,n){switch(a=jo(n),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var Da=new Map,lv=new Set;function Bo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Di=K.d;K.d={f:d2,r:h2,D:f2,C:p2,L:m2,m:g2,X:b2,S:v2,M:y2};function d2(){var e=Di.f(),a=$o();return e||a}function h2(e){var a=ul(e);a!==null&&a.tag===5&&a.type==="form"?km(a):Di.r(e)}var Il=typeof document>"u"?null:document;function rv(e,a,n){var s=Il;if(s&&typeof a=="string"&&a){var c=Ea(a);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),lv.has(c)||(lv.add(c),e={rel:e,crossOrigin:n,href:a},s.querySelector(c)===null&&(a=s.createElement("link"),jt(a,"link",e),Ct(a),s.head.appendChild(a)))}}function f2(e){Di.D(e),rv("dns-prefetch",e,null)}function p2(e,a){Di.C(e,a),rv("preconnect",e,a)}function m2(e,a,n){Di.L(e,a,n);var s=Il;if(s&&e&&a){var c='link[rel="preload"][as="'+Ea(a)+'"]';a==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Ea(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Ea(n.imageSizes)+'"]')):c+='[href="'+Ea(e)+'"]';var d=c;switch(a){case"style":d=Pl(e);break;case"script":d=Vl(e)}Da.has(d)||(e=q({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Da.set(d,e),s.querySelector(c)!==null||a==="style"&&s.querySelector(Qr(d))||a==="script"&&s.querySelector(Zr(d))||(a=s.createElement("link"),jt(a,"link",e),Ct(a),s.head.appendChild(a)))}}function g2(e,a){Di.m(e,a);var n=Il;if(n&&e){var s=a&&typeof a.as=="string"?a.as:"script",c='link[rel="modulepreload"][as="'+Ea(s)+'"][href="'+Ea(e)+'"]',d=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Vl(e)}if(!Da.has(d)&&(e=q({rel:"modulepreload",href:e},a),Da.set(d,e),n.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zr(d)))return}s=n.createElement("link"),jt(s,"link",e),Ct(s),n.head.appendChild(s)}}}function v2(e,a,n){Di.S(e,a,n);var s=Il;if(s&&e){var c=dl(s).hoistableStyles,d=Pl(e);a=a||"default";var v=c.get(d);if(!v){var x={loading:0,preload:null};if(v=s.querySelector(Qr(d)))x.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Da.get(d))&&Pd(e,n);var E=v=s.createElement("link");Ct(E),jt(E,"link",e),E._p=new Promise(function(O,F){E.onload=O,E.onerror=F}),E.addEventListener("load",function(){x.loading|=1}),E.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Ho(v,a,s)}v={type:"stylesheet",instance:v,count:1,state:x},c.set(d,v)}}}function b2(e,a){Di.X(e,a);var n=Il;if(n&&e){var s=dl(n).hoistableScripts,c=Vl(e),d=s.get(c);d||(d=n.querySelector(Zr(c)),d||(e=q({src:e,async:!0},a),(a=Da.get(c))&&Vd(e,a),d=n.createElement("script"),Ct(d),jt(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function y2(e,a){Di.M(e,a);var n=Il;if(n&&e){var s=dl(n).hoistableScripts,c=Vl(e),d=s.get(c);d||(d=n.querySelector(Zr(c)),d||(e=q({src:e,async:!0,type:"module"},a),(a=Da.get(c))&&Vd(e,a),d=n.createElement("script"),Ct(d),jt(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function sv(e,a,n,s){var c=(c=Ge.current)?Bo(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=Pl(n.href),n=dl(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Pl(n.href);var d=dl(c).hoistableStyles,v=d.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=c.querySelector(Qr(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Da.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Da.set(e,n),d||_2(c,e,n,v.state))),a&&s===null)throw Error(r(528,""));return v}if(a&&s!==null)throw Error(r(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Vl(n),n=dl(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Pl(e){return'href="'+Ea(e)+'"'}function Qr(e){return'link[rel="stylesheet"]['+e+"]"}function ov(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function _2(e,a,n,s){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=e.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),jt(a,"link",n),Ct(a),e.head.appendChild(a))}function Vl(e){return'[src="'+Ea(e)+'"]'}function Zr(e){return"script[async]"+e}function cv(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var s=e.querySelector('style[data-href~="'+Ea(n.href)+'"]');if(s)return a.instance=s,Ct(s),s;var c=q({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ct(s),jt(s,"style",c),Ho(s,n.precedence,e),a.instance=s;case"stylesheet":c=Pl(n.href);var d=e.querySelector(Qr(c));if(d)return a.state.loading|=4,a.instance=d,Ct(d),d;s=ov(n),(c=Da.get(c))&&Pd(s,c),d=(e.ownerDocument||e).createElement("link"),Ct(d);var v=d;return v._p=new Promise(function(x,E){v.onload=x,v.onerror=E}),jt(d,"link",s),a.state.loading|=4,Ho(d,n.precedence,e),a.instance=d;case"script":return d=Vl(n.src),(c=e.querySelector(Zr(d)))?(a.instance=c,Ct(c),c):(s=n,(c=Da.get(d))&&(s=q({},n),Vd(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ct(c),jt(c,"link",s),e.head.appendChild(c),a.instance=c);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,Ho(s,n.precedence,e));return a.instance}function Ho(e,a,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,d=c,v=0;v<s.length;v++){var x=s[v];if(x.dataset.precedence===a)d=x;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function Pd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Vd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Uo=null;function uv(e,a,n){if(Uo===null){var s=new Map,c=Uo=new Map;c.set(n,s)}else c=Uo,s=c.get(n),s||(s=new Map,c.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var d=n[c];if(!(d[dr]||d[Vt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(a)||"";v=e+v;var x=s.get(v);x?x.push(d):s.set(v,[d])}}return s}function dv(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function x2(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function hv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Kr=null;function w2(){}function S2(e,a,n){if(Kr===null)throw Error(r(475));var s=Kr;if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Pl(n.href),d=e.querySelector(Qr(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Io.bind(s),e.then(s,s)),a.state.loading|=4,a.instance=d,Ct(d);return}d=e.ownerDocument||e,n=ov(n),(c=Da.get(c))&&Pd(n,c),d=d.createElement("link"),Ct(d);var v=d;v._p=new Promise(function(x,E){v.onload=x,v.onerror=E}),jt(d,"link",n),a.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(s.count++,a=Io.bind(s),e.addEventListener("load",a),e.addEventListener("error",a))}}function E2(){if(Kr===null)throw Error(r(475));var e=Kr;return e.stylesheets&&e.count===0&&Fd(e,e.stylesheets),0<e.count?function(a){var n=setTimeout(function(){if(e.stylesheets&&Fd(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Io(){if(this.count--,this.count===0){if(this.stylesheets)Fd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Po=null;function Fd(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Po=new Map,a.forEach(C2,e),Po=null,Io.call(e))}function C2(e,a){if(!(a.state.loading&4)){var n=Po.get(e);if(n)var s=n.get(null);else{n=new Map,Po.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),s=v)}s&&n.set(null,s)}c=a.instance,v=c.getAttribute("data-precedence"),d=n.get(v)||s,d===s&&n.set(null,c),n.set(v,c),this.count++,s=Io.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),a.state.loading|=4}}var Jr={$$typeof:y,Provider:null,Consumer:null,_currentValue:ze,_currentValue2:ze,_threadCount:0};function A2(e,a,n,s,c,d,v,x){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.hiddenUpdates=Gc(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function fv(e,a,n,s,c,d,v,x,E,O,F,Y){return e=new A2(e,a,n,v,x,E,O,Y),a=1,d===!0&&(a|=24),d=ka(3,null,null,a),e.current=d,d.stateNode=e,a=wu(),a.refCount++,e.pooledCache=a,a.refCount++,d.memoizedState={element:s,isDehydrated:n,cache:a},ad(d),e}function pv(e){return e?(e=xl,e):xl}function mv(e,a,n,s,c,d){c=pv(c),s.context===null?s.context=c:s.pendingContext=c,s=Ki(a),s.payload={element:n},d=d===void 0?null:d,d!==null&&(s.callback=d),n=Ji(e,s,a),n!==null&&(Zt(n,e,a),zr(n,e,a))}function gv(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function qd(e,a){gv(e,a),(e=e.alternate)&&gv(e,a)}function vv(e){if(e.tag===13){var a=qi(e,67108864);a!==null&&Zt(a,e,67108864),qd(e,67108864)}}var Vo=!0;function T2(e,a,n,s){var c=z.T;z.T=null;var d=K.p;try{K.p=2,Gd(e,a,n,s)}finally{K.p=d,z.T=c}}function M2(e,a,n,s){var c=z.T;z.T=null;var d=K.p;try{K.p=8,Gd(e,a,n,s)}finally{K.p=d,z.T=c}}function Gd(e,a,n,s){if(Vo){var c=Yd(s);if(c===null)Dd(e,a,s,Fo,n),yv(e,s);else if($2(c,e,a,n,s))s.stopPropagation();else if(yv(e,s),a&4&&-1<N2.indexOf(e)){for(;c!==null;){var d=ul(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Cn(d.pendingLanes);if(v!==0){var x=d;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var E=1<<31-ua(v);x.entanglements[1]|=E,v&=~E}ni(d),(et&6)===0&&(To=Ja()+500,Yr(0))}}break;case 13:x=qi(d,2),x!==null&&Zt(x,d,2),$o(),qd(d,2)}if(d=Yd(s),d===null&&Dd(e,a,s,Fo,n),d===c)break;c=d}c!==null&&s.stopPropagation()}else Dd(e,a,s,null,n)}}function Yd(e){return e=Jc(e),Xd(e)}var Fo=null;function Xd(e){if(Fo=null,e=An(e),e!==null){var a=ee(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=ce(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Fo=e,null}function bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(py()){case Pf:return 2;case Vf:return 8;case Bs:case my:return 32;case Ff:return 268435456;default:return 32}default:return 32}}var Wd=!1,sn=null,on=null,cn=null,es=new Map,ts=new Map,un=[],N2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yv(e,a){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":es.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(a.pointerId)}}function as(e,a,n,s,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:a,domEventName:n,eventSystemFlags:s,nativeEvent:d,targetContainers:[c]},a!==null&&(a=ul(a),a!==null&&vv(a)),e):(e.eventSystemFlags|=s,a=e.targetContainers,c!==null&&a.indexOf(c)===-1&&a.push(c),e)}function $2(e,a,n,s,c){switch(a){case"focusin":return sn=as(sn,e,a,n,s,c),!0;case"dragenter":return on=as(on,e,a,n,s,c),!0;case"mouseover":return cn=as(cn,e,a,n,s,c),!0;case"pointerover":var d=c.pointerId;return es.set(d,as(es.get(d)||null,e,a,n,s,c)),!0;case"gotpointercapture":return d=c.pointerId,ts.set(d,as(ts.get(d)||null,e,a,n,s,c)),!0}return!1}function _v(e){var a=An(e.target);if(a!==null){var n=ee(a);if(n!==null){if(a=n.tag,a===13){if(a=ce(n),a!==null){e.blockedOn=a,Ey(e.priority,function(){if(n.tag===13){var s=ma(),c=qi(n,s);c!==null&&Zt(c,n,s),qd(n,s)}});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Yd(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Kc=s,n.target.dispatchEvent(s),Kc=null}else return a=ul(n),a!==null&&vv(a),e.blockedOn=n,!1;a.shift()}return!0}function xv(e,a,n){qo(e)&&n.delete(a)}function O2(){Wd=!1,sn!==null&&qo(sn)&&(sn=null),on!==null&&qo(on)&&(on=null),cn!==null&&qo(cn)&&(cn=null),es.forEach(xv),ts.forEach(xv)}function Go(e,a){e.blockedOn===a&&(e.blockedOn=null,Wd||(Wd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,O2)))}var Yo=null;function wv(e){Yo!==e&&(Yo=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Yo===e&&(Yo=null);for(var a=0;a<e.length;a+=3){var n=e[a],s=e[a+1],c=e[a+2];if(typeof s!="function"){if(Xd(s||n)===null)continue;break}var d=ul(n);d!==null&&(e.splice(a,3),a-=3,Bu(d,{pending:!0,data:c,method:n.method,action:s},s,c))}}))}function is(e){function a(E){return Go(E,e)}sn!==null&&Go(sn,e),on!==null&&Go(on,e),cn!==null&&Go(cn,e),es.forEach(a),ts.forEach(a);for(var n=0;n<un.length;n++){var s=un[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<un.length&&(n=un[0],n.blockedOn===null);)_v(n),n.blockedOn===null&&un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var c=n[s],d=n[s+1],v=c[aa]||null;if(typeof d=="function")v||wv(n);else if(v){var x=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[aa]||null)x=v.formAction;else if(Xd(c)!==null)continue}else x=v.action;typeof x=="function"?n[s+1]=x:(n.splice(s,3),s-=3),wv(n)}}}function Qd(e){this._internalRoot=e}Xo.prototype.render=Qd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var n=a.current,s=ma();mv(n,s,e,a,null,null)},Xo.prototype.unmount=Qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;e.tag===0&&Bl(),mv(e.current,2,null,e,null,null),$o(),a[cl]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var a=Qf();e={blockedOn:null,target:e,priority:a};for(var n=0;n<un.length&&a!==0&&a<un[n].priority;n++);un.splice(n,0,e),n===0&&_v(e)}};var Sv=i.version;if(Sv!=="19.0.0")throw Error(r(527,Sv,"19.0.0"));K.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ct(a),e=e!==null?Ae(e):null,e=e===null?null:e.stateNode,e};var k2={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:z,findFiberByHostInstance:An,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{or=Wo.inject(k2),ca=Wo}catch{}}return ns.createRoot=function(e,a){if(!o(e))throw Error(r(299));var n=!1,s="",c=Um,d=Im,v=Pm,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks)),a=fv(e,1,!1,null,null,n,s,c,d,v,x,null),e[cl]=a.current,Rd(e.nodeType===8?e.parentNode:e),new Qd(a)},ns.hydrateRoot=function(e,a,n){if(!o(e))throw Error(r(299));var s=!1,c="",d=Um,v=Im,x=Pm,E=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),a=fv(e,1,!0,a,n??null,s,c,d,v,x,E,O),a.context=pv(null),n=a.current,s=ma(),c=Ki(s),c.callback=null,Ji(n,c,s),a.current.lanes=s,ur(a,s),ni(a),e[cl]=a.current,Rd(e),new Xo(a)},ns.version="19.0.0",ns}var Uv;function qx(){if(Uv)return Kd.exports;Uv=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Kd.exports=Fx(),Kd.exports}var Gx=qx(),Rh="";function Dh(t){Rh=t}function Yx(t=""){if(!Rh){const i=[...document.getElementsByTagName("script")],l=i.find(r=>r.hasAttribute("data-shoelace"));if(l)Dh(l.getAttribute("data-shoelace"));else{const r=i.find(u=>/shoelace(\.min)?\.js($|\?)/.test(u.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(u.src));let o="";r&&(o=r.getAttribute("src")),Dh(o.split("/").slice(0,-1).join("/"))}}return Rh.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ab=Object.defineProperty,Xx=Object.defineProperties,Wx=Object.getOwnPropertyDescriptor,Qx=Object.getOwnPropertyDescriptors,Iv=Object.getOwnPropertySymbols,Zx=Object.prototype.hasOwnProperty,Kx=Object.prototype.propertyIsEnumerable,th=(t,i)=>(i=Symbol[t])?i:Symbol.for("Symbol."+t),cf=t=>{throw TypeError(t)},Pv=(t,i,l)=>i in t?Ab(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l,Ui=(t,i)=>{for(var l in i||(i={}))Zx.call(i,l)&&Pv(t,l,i[l]);if(Iv)for(var l of Iv(i))Kx.call(i,l)&&Pv(t,l,i[l]);return t},As=(t,i)=>Xx(t,Qx(i)),C=(t,i,l,r)=>{for(var o=r>1?void 0:r?Wx(i,l):i,u=t.length-1,h;u>=0;u--)(h=t[u])&&(o=(r?h(i,l,o):h(o))||o);return r&&o&&Ab(i,l,o),o},Tb=(t,i,l)=>i.has(t)||cf("Cannot "+l),Jx=(t,i,l)=>(Tb(t,i,"read from private field"),i.get(t)),ew=(t,i,l)=>i.has(t)?cf("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,l),tw=(t,i,l,r)=>(Tb(t,i,"write to private field"),i.set(t,l),l),aw=function(t,i){this[0]=t,this[1]=i},iw=t=>{var i=t[th("asyncIterator")],l=!1,r,o={};return i==null?(i=t[th("iterator")](),r=u=>o[u]=h=>i[u](h)):(i=i.call(t),r=u=>o[u]=h=>{if(l){if(l=!1,u==="throw")throw h;return h}return l=!0,{done:!1,value:new aw(new Promise(f=>{var g=i[u](h);g instanceof Object||cf("Object expected"),f(g)}),1)}}),o[th("iterator")]=()=>o,r("next"),"throw"in i?r("throw"):o.throw=u=>{throw u},"return"in i&&r("return"),o},nw=(function(){var t=function(i,l){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(r[u]=o[u])},t(i,l)};return function(i,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");t(i,l);function r(){this.constructor=i}i.prototype=l===null?Object.create(l):(r.prototype=l.prototype,new r)}})(),Mb=function(t,i,l,r){function o(u){return u instanceof l?u:new l((function(h){h(u)}))}return new(l||(l=Promise))((function(u,h){function f(b){try{p(r.next(b))}catch(_){h(_)}}function g(b){try{p(r.throw(b))}catch(_){h(_)}}function p(b){b.done?u(b.value):o(b.value).then(f,g)}p((r=r.apply(t,i||[])).next())}))},Nb=function(t,i){var l={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},r,o,u,h;return h={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function f(p){return function(b){return g([p,b])}}function g(p){if(r)throw new TypeError("Generator is already executing.");for(;h&&(h=0,p[0]&&(l=0)),l;)try{if(r=1,o&&(u=p[0]&2?o.return:p[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,p[1])).done)return u;switch(o=0,u&&(p=[p[0]&2,u.value]),p[0]){case 0:case 1:u=p;break;case 4:return l.label++,{value:p[1],done:!1};case 5:l.label++,o=p[1],p=[0];continue;case 7:p=l.ops.pop(),l.trys.pop();continue;default:if(u=l.trys,!(u=u.length>0&&u[u.length-1])&&(p[0]===6||p[0]===2)){l=0;continue}if(p[0]===3&&(!u||p[1]>u[0]&&p[1]<u[3])){l.label=p[1];break}if(p[0]===6&&l.label<u[1]){l.label=u[1],u=p;break}if(u&&l.label<u[2]){l.label=u[2],l.ops.push(p);break}u[2]&&l.ops.pop(),l.trys.pop();continue}p=i.call(t,l)}catch(b){p=[6,b],o=0}finally{r=u=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},Vv=function(t,i,l){if(l||arguments.length===2)for(var r=0,o=i.length,u;r<o;r++)(u||!(r in i))&&(u||(u=Array.prototype.slice.call(i,0,r)),u[r]=i[r]);return t.concat(u||Array.prototype.slice.call(i))},lw="ionicpwaelements",sc,$b,va=!1,Lh=!1,Bi=function(t,i){return function(){}},rw=function(t,i){return function(){}},sw="{visibility:hidden}.hydrated{visibility:inherit}",Fv={},ow="http://www.w3.org/2000/svg",cw="http://www.w3.org/1999/xhtml",uw=function(t){return t!=null},uf=function(t){return t=typeof t,t==="object"||t==="function"};function Ob(t){var i,l,r;return(r=(l=(i=t.head)===null||i===void 0?void 0:i.querySelector('meta[name="csp-nonce"]'))===null||l===void 0?void 0:l.getAttribute("content"))!==null&&r!==void 0?r:void 0}var dw=function(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=null,u=!1,h=!1,f=[],g=function(_){for(var w=0;w<_.length;w++)o=_[w],Array.isArray(o)?g(o):o!=null&&typeof o!="boolean"&&((u=typeof t!="function"&&!uf(o))&&(o=String(o)),u&&h?f[f.length-1].$text$+=o:f.push(u?zh(null,o):o),h=u)};if(g(l),i){var p=i.className||i.class;p&&(i.class=typeof p!="object"?p:Object.keys(p).filter((function(_){return p[_]})).join(" "))}var b=zh(t,null);return b.$attrs$=i,f.length>0&&(b.$children$=f),b},zh=function(t,i){var l={$flags$:0,$tag$:t,$text$:i,$elm$:null,$children$:null};return l.$attrs$=null,l},hw={},fw=function(t){return t&&t.$tag$===hw},pw=function(t,i){return t!=null&&!uf(t)?i&4?t==="false"?!1:t===""||!!t:i&2?parseFloat(t):i&1?String(t):t:t},mw=function(t){return Sn(t).$hostElement$},J9=function(t,i,l){var r=mw(t);return{emit:function(o){return kb(r,i,{bubbles:!0,composed:!0,cancelable:!0,detail:o})}}},kb=function(t,i,l){var r=Ot.ce(i,l);return t.dispatchEvent(r),r},qv=new WeakMap,gw=function(t,i,l){var r=vc.get(t);Hw&&l?(r=r||new CSSStyleSheet,typeof r=="string"?r=i:r.replaceSync(i)):r=i,vc.set(t,r)},vw=function(t,i,l,r){var o,u=Rb(i),h=vc.get(u);if(t=t.nodeType===11?t:Xa,h)if(typeof h=="string"){t=t.head||t;var f=qv.get(t),g=void 0;if(f||qv.set(t,f=new Set),!f.has(u)){{g=Xa.createElement("style"),g.innerHTML=h;var p=(o=Ot.$nonce$)!==null&&o!==void 0?o:Ob(Xa);p!=null&&g.setAttribute("nonce",p),t.insertBefore(g,t.querySelector("link"))}f&&f.add(u)}}else t.adoptedStyleSheets.includes(h)||(t.adoptedStyleSheets=Vv(Vv([],t.adoptedStyleSheets,!0),[h],!1));return u},bw=function(t){var i=t.$cmpMeta$,l=t.$hostElement$,r=i.$flags$,o=Bi("attachStyles",i.$tagName$),u=vw(l.shadowRoot?l.shadowRoot:l.getRootNode(),i);r&10&&(l["s-sc"]=u,l.classList.add(u+"-h")),o()},Rb=function(t,i){return"sc-"+t.$tagName$},Gv=function(t,i,l,r,o,u){if(l!==r){var h=Xv(t,i),f=i.toLowerCase();if(i==="class"){var g=t.classList,p=Yv(l),b=Yv(r);g.remove.apply(g,p.filter((function(S){return S&&!b.includes(S)}))),g.add.apply(g,b.filter((function(S){return S&&!p.includes(S)})))}else if(i==="style"){for(var _ in l)(!r||r[_]==null)&&(_.includes("-")?t.style.removeProperty(_):t.style[_]="");for(var _ in r)(!l||r[_]!==l[_])&&(_.includes("-")?t.style.setProperty(_,r[_]):t.style[_]=r[_])}else if(i==="ref")r&&r(t);else if(!h&&i[0]==="o"&&i[1]==="n")i[2]==="-"?i=i.slice(3):Xv(Nc,f)?i=f.slice(2):i=f[2]+i.slice(3),l&&Ot.rel(t,i,l,!1),r&&Ot.ael(t,i,r,!1);else{var w=uf(r);if((h||w&&r!==null)&&!o)try{if(t.tagName.includes("-"))t[i]=r;else{var y=r??"";i==="list"?h=!1:(l==null||t[i]!=y)&&(t[i]=y)}}catch{}r==null||r===!1?(r!==!1||t.getAttribute(i)==="")&&t.removeAttribute(i):(!h||u&4||o)&&!w&&(r=r===!0?"":r,t.setAttribute(i,r))}}},yw=/\s/,Yv=function(t){return t?t.split(yw):[]},Db=function(t,i,l,r){var o=i.$elm$.nodeType===11&&i.$elm$.host?i.$elm$.host:i.$elm$,u=t&&t.$attrs$||Fv,h=i.$attrs$||Fv;for(r in u)r in h||Gv(o,r,u[r],void 0,l,i.$flags$);for(r in h)Gv(o,r,u[r],h[r],l,i.$flags$)},df=function(t,i,l,r){var o=i.$children$[l],u=0,h,f;if(o.$text$!==null)h=o.$elm$=Xa.createTextNode(o.$text$);else{if(va||(va=o.$tag$==="svg"),h=o.$elm$=Xa.createElementNS(va?ow:cw,o.$tag$),va&&o.$tag$==="foreignObject"&&(va=!1),Db(null,o,va),uw(sc)&&h["s-si"]!==sc&&h.classList.add(h["s-si"]=sc),o.$children$)for(u=0;u<o.$children$.length;++u)f=df(t,o,u),f&&h.appendChild(f);o.$tag$==="svg"?va=!1:h.tagName==="foreignObject"&&(va=!0)}return h},Lb=function(t,i,l,r,o,u){var h=t,f;for(h.shadowRoot&&h.tagName===$b&&(h=h.shadowRoot);o<=u;++o)r[o]&&(f=df(null,l,o),f&&(r[o].$elm$=f,h.insertBefore(f,i)))},zb=function(t,i,l){for(var r=i;r<=l;++r){var o=t[r];if(o){var u=o.$elm$;jb(o),u&&u.remove()}}},_w=function(t,i,l,r){for(var o=0,u=0,h=i.length-1,f=i[0],g=i[h],p=r.length-1,b=r[0],_=r[p],w;o<=h&&u<=p;)f==null?f=i[++o]:g==null?g=i[--h]:b==null?b=r[++u]:_==null?_=r[--p]:Qo(f,b)?(gs(f,b),f=i[++o],b=r[++u]):Qo(g,_)?(gs(g,_),g=i[--h],_=r[--p]):Qo(f,_)?(gs(f,_),t.insertBefore(f.$elm$,g.$elm$.nextSibling),f=i[++o],_=r[--p]):Qo(g,b)?(gs(g,b),t.insertBefore(g.$elm$,f.$elm$),g=i[--h],b=r[++u]):(w=df(i&&i[u],l,u),b=r[++u],w&&f.$elm$.parentNode.insertBefore(w,f.$elm$));o>h?Lb(t,r[p+1]==null?null:r[p+1].$elm$,l,r,u,p):u>p&&zb(i,o,h)},Qo=function(t,i){return t.$tag$===i.$tag$},gs=function(t,i){var l=i.$elm$=t.$elm$,r=t.$children$,o=i.$children$,u=i.$tag$,h=i.$text$;h===null?(va=u==="svg"?!0:u==="foreignObject"?!1:va,Db(t,i,va),r!==null&&o!==null?_w(l,r,i,o):o!==null?(t.$text$!==null&&(l.textContent=""),Lb(l,null,i,o,0,o.length-1)):r!==null&&zb(r,0,r.length-1),va&&u==="svg"&&(va=!1)):t.$text$!==h&&(l.data=h)},jb=function(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(jb)},xw=function(t,i){var l=t.$hostElement$,r=t.$vnode$||zh(null,null),o=fw(i)?i:dw(null,null,i);$b=l.tagName,o.$tag$=null,o.$flags$|=4,t.$vnode$=o,o.$elm$=r.$elm$=l.shadowRoot||l,sc=l["s-sc"],gs(r,o)},Bb=function(t,i){i&&!t.$onRenderResolve$&&i["s-p"]&&i["s-p"].push(new Promise((function(l){return t.$onRenderResolve$=l})))},Mc=function(t,i){if(t.$flags$|=16,t.$flags$&4){t.$flags$|=512;return}Bb(t,t.$ancestorComponent$);var l=function(){return ww(t,i)};return Iw(l)},ww=function(t,i){var l=Bi("scheduleUpdate",t.$cmpMeta$.$tagName$),r=t.$lazyInstance$,o;return i&&(t.$flags$|=256,t.$queuedListeners$&&(t.$queuedListeners$.map((function(u){var h=u[0],f=u[1];return hf(r,h,f)})),t.$queuedListeners$=void 0)),l(),Sw(o,(function(){return Cw(t,r,i)}))},Sw=function(t,i){return Ew(t)?t.then(i):i()},Ew=function(t){return t instanceof Promise||t&&t.then&&typeof t.then=="function"},Cw=function(t,i,l){return Mb(void 0,void 0,void 0,(function(){var r,o,u,h,f,g,p;return Nb(this,(function(b){return o=t.$hostElement$,u=Bi("update",t.$cmpMeta$.$tagName$),h=o["s-rc"],l&&bw(t),f=Bi("render",t.$cmpMeta$.$tagName$),Aw(t,i),h&&(h.map((function(_){return _()})),o["s-rc"]=void 0),f(),u(),g=(r=o["s-p"])!==null&&r!==void 0?r:[],p=function(){return Tw(t)},g.length===0?p():(Promise.all(g).then(p),t.$flags$|=4,g.length=0),[2]}))}))},Aw=function(t,i,l){try{i=i.render(),t.$flags$&=-17,t.$flags$|=2,xw(t,i)}catch(r){Ya(r,t.$hostElement$)}return null},Tw=function(t){t.$cmpMeta$.$tagName$;var i=t.$hostElement$,l=Bi(),r=t.$lazyInstance$,o=t.$ancestorComponent$;t.$flags$&64?l():(t.$flags$|=64,Ub(i),hf(r,"componentDidLoad"),l(),t.$onReadyResolve$(i),o||Hb()),t.$onInstanceResolve$(i),t.$onRenderResolve$&&(t.$onRenderResolve$(),t.$onRenderResolve$=void 0),t.$flags$&512&&pf((function(){return Mc(t,!1)})),t.$flags$&=-517},eT=function(t){{var i=Sn(t),l=i.$hostElement$.isConnected;return l&&(i.$flags$&18)===2&&Mc(i,!1),l}},Hb=function(t){Ub(Xa.documentElement),pf((function(){return kb(Nc,"appload",{detail:{namespace:lw}})}))},hf=function(t,i,l){if(t&&t[i])try{return t[i](l)}catch(r){Ya(r)}},Ub=function(t){return t.classList.add("hydrated")},Mw=function(t,i){return Sn(t).$instanceValues$.get(i)},Nw=function(t,i,l,r){var o=Sn(t),u=o.$instanceValues$.get(i),h=o.$flags$,f=o.$lazyInstance$;l=pw(l,r.$members$[i][0]);var g=Number.isNaN(u)&&Number.isNaN(l),p=l!==u&&!g;(!(h&8)||u===void 0)&&p&&(o.$instanceValues$.set(i,l),f&&(h&18)===2&&Mc(o,!1))},Ib=function(t,i,l){if(i.$members$){var r=Object.entries(i.$members$),o=t.prototype;if(r.map((function(h){var f=h[0],g=h[1][0];g&31||l&2&&g&32?Object.defineProperty(o,f,{get:function(){return Mw(this,f)},set:function(p){Nw(this,f,p,i)},configurable:!0,enumerable:!0}):l&1&&g&64&&Object.defineProperty(o,f,{value:function(){for(var p=[],b=0;b<arguments.length;b++)p[b]=arguments[b];var _=Sn(this);return _.$onInstancePromise$.then((function(){var w;return(w=_.$lazyInstance$)[f].apply(w,p)}))}})})),l&1){var u=new Map;o.attributeChangedCallback=function(h,f,g){var p=this;Ot.jmp((function(){var b=u.get(h);if(p.hasOwnProperty(b))g=p[b],delete p[b];else if(o.hasOwnProperty(b)&&typeof p[b]=="number"&&p[b]==g)return;p[b]=g===null&&typeof p[b]=="boolean"?!1:g}))},t.observedAttributes=r.filter((function(h){h[0];var f=h[1];return f[0]&15})).map((function(h){var f=h[0],g=h[1],p=g[1]||f;return u.set(p,f),p}))}}return t},$w=function(t,i,l,r,o){return Mb(void 0,void 0,void 0,(function(){var u,h,f,g,p,b,_;return Nb(this,(function(w){switch(w.label){case 0:return(i.$flags$&32)!==0?[3,3]:(i.$flags$|=32,o=Bw(l),o.then?(u=rw(),[4,o]):[3,2]);case 1:o=w.sent(),u(),w.label=2;case 2:o.isProxied||(Ib(o,l,2),o.isProxied=!0),h=Bi("createInstance",l.$tagName$),i.$flags$|=8;try{new o(i)}catch(y){Ya(y)}i.$flags$&=-9,h(),o.style&&(f=o.style,g=Rb(l),vc.has(g)||(p=Bi("registerStyles",l.$tagName$),gw(g,f,!!(l.$flags$&1)),p())),w.label=3;case 3:return b=i.$ancestorComponent$,_=function(){return Mc(i,!0)},b&&b["s-rc"]?b["s-rc"].push(_):_(),[2]}}))}))},Ow=function(t){if((Ot.$flags$&1)===0){var i=Sn(t),l=i.$cmpMeta$,r=Bi("connectedCallback",l.$tagName$);if(i.$flags$&1)Pb(t,i,l.$listeners$);else{i.$flags$|=1;for(var o=t;o=o.parentNode||o.host;)if(o["s-p"]){Bb(i,i.$ancestorComponent$=o);break}l.$members$&&Object.entries(l.$members$).map((function(u){var h=u[0],f=u[1][0];if(f&31&&t.hasOwnProperty(h)){var g=t[h];delete t[h],t[h]=g}})),$w(t,i,l)}r()}},kw=function(t){if((Ot.$flags$&1)===0){var i=Sn(t),l=i.$lazyInstance$;i.$rmListeners$&&(i.$rmListeners$.map((function(r){return r()})),i.$rmListeners$=void 0),hf(l,"disconnectedCallback")}},Rw=function(t,i){i===void 0&&(i={});var l,r=Bi(),o=[],u=i.exclude||[],h=Nc.customElements,f=Xa.head,g=f.querySelector("meta[charset]"),p=Xa.createElement("style"),b=[],_,w=!0;Object.assign(Ot,i),Ot.$resourcesUrl$=new URL(i.resourcesUrl||"./",Xa.baseURI).href,t.map((function(S){S[1].map((function(T){var M={$flags$:T[0],$tagName$:T[1],$members$:T[2],$listeners$:T[3]};M.$members$=T[2],M.$listeners$=T[3];var A=M.$tagName$,D=(function(U){nw(j,U);function j($){var W=U.call(this,$)||this;return $=W,jw($,M),M.$flags$&1&&$.attachShadow({mode:"open"}),W}return j.prototype.connectedCallback=function(){var $=this;_&&(clearTimeout(_),_=null),w?b.push(this):Ot.jmp((function(){return Ow($)}))},j.prototype.disconnectedCallback=function(){var $=this;Ot.jmp((function(){return kw($)}))},j.prototype.componentOnReady=function(){return Sn(this).$onReadyPromise$},j})(HTMLElement);M.$lazyBundleId$=S[0],!u.includes(A)&&!h.get(A)&&(o.push(A),h.define(A,Ib(D,M,1)))}))}));{p.innerHTML=o+sw,p.setAttribute("data-styles","");var y=(l=Ot.$nonce$)!==null&&l!==void 0?l:Ob(Xa);y!=null&&p.setAttribute("nonce",y),f.insertBefore(p,g?g.nextSibling:f.firstChild)}w=!1,b.length?b.map((function(S){return S.connectedCallback()})):Ot.jmp((function(){return _=setTimeout(Hb,30)})),r()},Pb=function(t,i,l,r){l&&l.map((function(o){var u=o[0],h=o[1],f=o[2],g=Lw(t,u),p=Dw(i,f),b=zw(u);Ot.ael(g,h,p,b),(i.$rmListeners$=i.$rmListeners$||[]).push((function(){return Ot.rel(g,h,p,b)}))}))},Dw=function(t,i){return function(l){try{t.$flags$&256?t.$lazyInstance$[i](l):(t.$queuedListeners$=t.$queuedListeners$||[]).push([i,l])}catch(r){Ya(r)}}},Lw=function(t,i){return i&16?Xa.body:t},zw=function(t){return(t&2)!==0},ff=new WeakMap,Sn=function(t){return ff.get(t)},tT=function(t,i){return ff.set(i.$lazyInstance$=t,i)},jw=function(t,i){var l={$flags$:0,$hostElement$:t,$cmpMeta$:i,$instanceValues$:new Map};return l.$onInstancePromise$=new Promise((function(r){return l.$onInstanceResolve$=r})),l.$onReadyPromise$=new Promise((function(r){return l.$onReadyResolve$=r})),t["s-p"]=[],t["s-rc"]=[],Pb(t,l,i.$listeners$),ff.set(t,l)},Xv=function(t,i){return i in t},Ya=function(t,i){return(0,console.error)(t,i)},ah=new Map,Bw=function(t,i,l){var r=t.$tagName$.replace(/-/g,"_"),o=t.$lazyBundleId$,u=ah.get(o);if(u)return u[r];{var h=function(f){return ah.set(o,f),f[r]};switch(o){case"pwa-action-sheet":return $t(()=>import("./pwa-action-sheet.entry-DOLyExL3.js"),__vite__mapDeps([0,1])).then(h,Ya);case"pwa-camera-modal":return $t(()=>import("./pwa-camera-modal.entry-BWKjso7Q.js"),__vite__mapDeps([2,1])).then(h,Ya);case"pwa-toast":return $t(()=>import("./pwa-toast.entry-BA5aEHga.js"),__vite__mapDeps([3,1])).then(h,Ya);case"pwa-camera-modal-instance":return $t(()=>import("./pwa-camera-modal-instance.entry-B8r9Qb8v.js"),__vite__mapDeps([4,1])).then(h,Ya);case"pwa-camera":return $t(()=>import("./pwa-camera.entry-DXh_f5Au.js"),__vite__mapDeps([5,1])).then(h,Ya)}}return $t(()=>import("./".concat(o,".entry.js").concat("")),[]).then((function(f){return ah.set(o,f),f[r]}),Ya)},vc=new Map,Nc=typeof window<"u"?window:{},Xa=Nc.document||{head:{}},Ot={$flags$:0,$resourcesUrl$:"",jmp:function(t){return t()},raf:function(t){return requestAnimationFrame(t)},ael:function(t,i,l,r){return t.addEventListener(i,l,r)},rel:function(t,i,l,r){return t.removeEventListener(i,l,r)},ce:function(t,i){return new CustomEvent(t,i)}},Vb=function(t){return Promise.resolve(t)},Hw=(function(){try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),Wv=[],Fb=[],Uw=function(t,i){return function(l){t.push(l),Lh||(Lh=!0,Ot.$flags$&4?pf(jh):Ot.raf(jh))}},Qv=function(t){for(var i=0;i<t.length;i++)try{t[i](performance.now())}catch(l){Ya(l)}t.length=0},jh=function(){Qv(Wv),Qv(Fb),(Lh=Wv.length>0)&&Ot.raf(jh)},pf=function(t){return Vb().then(t)},Iw=Uw(Fb),Pw=function(){return Vb()},Vw=function(t,i){return typeof window>"u"?Promise.resolve():Pw().then((function(){return Rw([["pwa-camera-modal",[[1,"pwa-camera-modal",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],present:[64],dismiss:[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{header:[1],cancelable:[4],options:[16],open:[32]}]]],["pwa-toast",[[1,"pwa-toast",{message:[1],duration:[2],closing:[32]}]]],["pwa-camera",[[1,"pwa-camera",{facingMode:[1,"facing-mode"],handlePhoto:[16],hidePicker:[4,"hide-picker"],handleNoDeviceError:[16],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"],photo:[32],photoSrc:[32],showShutterOverlay:[32],flashIndex:[32],hasCamera:[32],rotation:[32],deviceError:[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"]},[[16,"keyup","handleBackdropKeyUp"]]]]]],i)}))};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();const Fw=(t,i,l)=>{const r=t[i];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+i+(i.split("/").length!==l?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oc=globalThis,mf=oc.ShadowRoot&&(oc.ShadyCSS===void 0||oc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gf=Symbol(),Zv=new WeakMap;let qb=class{constructor(i,l,r){if(this._$cssResult$=!0,r!==gf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=l}get styleSheet(){let i=this.o;const l=this.t;if(mf&&i===void 0){const r=l!==void 0&&l.length===1;r&&(i=Zv.get(l)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),r&&Zv.set(l,i))}return i}toString(){return this.cssText}};const qw=t=>new qb(typeof t=="string"?t:t+"",void 0,gf),ht=(t,...i)=>{const l=t.length===1?t[0]:i.reduce(((r,o,u)=>r+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[u+1]),t[0]);return new qb(l,t,gf)},Gw=(t,i)=>{if(mf)t.adoptedStyleSheets=i.map((l=>l instanceof CSSStyleSheet?l:l.styleSheet));else for(const l of i){const r=document.createElement("style"),o=oc.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=l.cssText,t.appendChild(r)}},Kv=mf?t=>t:t=>t instanceof CSSStyleSheet?(i=>{let l="";for(const r of i.cssRules)l+=r.cssText;return qw(l)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yw,defineProperty:Xw,getOwnPropertyDescriptor:Ww,getOwnPropertyNames:Qw,getOwnPropertySymbols:Zw,getPrototypeOf:Kw}=Object,$c=globalThis,Jv=$c.trustedTypes,Jw=Jv?Jv.emptyScript:"",eS=$c.reactiveElementPolyfillSupport,bs=(t,i)=>t,Jl={toAttribute(t,i){switch(i){case Boolean:t=t?Jw:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,i){let l=t;switch(i){case Boolean:l=t!==null;break;case Number:l=t===null?null:Number(t);break;case Object:case Array:try{l=JSON.parse(t)}catch{l=null}}return l}},vf=(t,i)=>!Yw(t,i),e0={attribute:!0,type:String,converter:Jl,reflect:!1,useDefault:!1,hasChanged:vf};Symbol.metadata??=Symbol("metadata"),$c.litPropertyMetadata??=new WeakMap;let Yl=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,l=e0){if(l.state&&(l.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((l=Object.create(l)).wrapped=!0),this.elementProperties.set(i,l),!l.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(i,r,l);o!==void 0&&Xw(this.prototype,i,o)}}static getPropertyDescriptor(i,l,r){const{get:o,set:u}=Ww(this.prototype,i)??{get(){return this[l]},set(h){this[l]=h}};return{get:o,set(h){const f=o?.call(this);u?.call(this,h),this.requestUpdate(i,f,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??e0}static _$Ei(){if(this.hasOwnProperty(bs("elementProperties")))return;const i=Kw(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(bs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bs("properties"))){const l=this.properties,r=[...Qw(l),...Zw(l)];for(const o of r)this.createProperty(o,l[o])}const i=this[Symbol.metadata];if(i!==null){const l=litPropertyMetadata.get(i);if(l!==void 0)for(const[r,o]of l)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[l,r]of this.elementProperties){const o=this._$Eu(l,r);o!==void 0&&this._$Eh.set(o,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const l=[];if(Array.isArray(i)){const r=new Set(i.flat(1/0).reverse());for(const o of r)l.unshift(Kv(o))}else i!==void 0&&l.push(Kv(i));return l}static _$Eu(i,l){const r=l.attribute;return r===!1?void 0:typeof r=="string"?r:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((i=>i(this)))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){const i=new Map,l=this.constructor.elementProperties;for(const r of l.keys())this.hasOwnProperty(r)&&(i.set(r,this[r]),delete this[r]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gw(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((i=>i.hostConnected?.()))}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach((i=>i.hostDisconnected?.()))}attributeChangedCallback(i,l,r){this._$AK(i,r)}_$ET(i,l){const r=this.constructor.elementProperties.get(i),o=this.constructor._$Eu(i,r);if(o!==void 0&&r.reflect===!0){const u=(r.converter?.toAttribute!==void 0?r.converter:Jl).toAttribute(l,r.type);this._$Em=i,u==null?this.removeAttribute(o):this.setAttribute(o,u),this._$Em=null}}_$AK(i,l){const r=this.constructor,o=r._$Eh.get(i);if(o!==void 0&&this._$Em!==o){const u=r.getPropertyOptions(o),h=typeof u.converter=="function"?{fromAttribute:u.converter}:u.converter?.fromAttribute!==void 0?u.converter:Jl;this._$Em=o;const f=h.fromAttribute(l,u.type);this[o]=f??this._$Ej?.get(o)??f,this._$Em=null}}requestUpdate(i,l,r){if(i!==void 0){const o=this.constructor,u=this[i];if(r??=o.getPropertyOptions(i),!((r.hasChanged??vf)(u,l)||r.useDefault&&r.reflect&&u===this._$Ej?.get(i)&&!this.hasAttribute(o._$Eu(i,r))))return;this.C(i,l,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,l,{useDefault:r,reflect:o,wrapped:u},h){r&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,h??l??this[i]),u!==!0||h!==void 0)||(this._$AL.has(i)||(this.hasUpdated||r||(l=void 0),this._$AL.set(i,l)),o===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,u]of this._$Ep)this[o]=u;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,u]of r){const{wrapped:h}=u,f=this[o];h!==!0||this._$AL.has(o)||f===void 0||this.C(o,void 0,u,f)}}let i=!1;const l=this._$AL;try{i=this.shouldUpdate(l),i?(this.willUpdate(l),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(l)):this._$EM()}catch(r){throw i=!1,this._$EM(),r}i&&this._$AE(l)}willUpdate(i){}_$AE(i){this._$EO?.forEach((l=>l.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach((l=>this._$ET(l,this[l]))),this._$EM()}updated(i){}firstUpdated(i){}};Yl.elementStyles=[],Yl.shadowRootOptions={mode:"open"},Yl[bs("elementProperties")]=new Map,Yl[bs("finalized")]=new Map,eS?.({ReactiveElement:Yl}),($c.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bf=globalThis,bc=bf.trustedTypes,t0=bc?bc.createPolicy("lit-html",{createHTML:t=>t}):void 0,Gb="$lit$",gn=`lit$${Math.random().toFixed(9).slice(2)}$`,Yb="?"+gn,tS=`<${Yb}>`,el=document,ws=()=>el.createComment(""),Ss=t=>t===null||typeof t!="object"&&typeof t!="function",yf=Array.isArray,aS=t=>yf(t)||typeof t?.[Symbol.iterator]=="function",ih=`[ 	
\f\r]`,ls=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a0=/-->/g,i0=/>/g,Yn=RegExp(`>|${ih}(?:([^\\s"'>=/]+)(${ih}*=${ih}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),n0=/'/g,l0=/"/g,Xb=/^(?:script|style|textarea|title)$/i,iS=t=>(i,...l)=>({_$litType$:t,strings:i,values:l}),xe=iS(1),ja=Symbol.for("lit-noChange"),rt=Symbol.for("lit-nothing"),r0=new WeakMap,Qn=el.createTreeWalker(el,129);function Wb(t,i){if(!yf(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return t0!==void 0?t0.createHTML(i):i}const nS=(t,i)=>{const l=t.length-1,r=[];let o,u=i===2?"<svg>":i===3?"<math>":"",h=ls;for(let f=0;f<l;f++){const g=t[f];let p,b,_=-1,w=0;for(;w<g.length&&(h.lastIndex=w,b=h.exec(g),b!==null);)w=h.lastIndex,h===ls?b[1]==="!--"?h=a0:b[1]!==void 0?h=i0:b[2]!==void 0?(Xb.test(b[2])&&(o=RegExp("</"+b[2],"g")),h=Yn):b[3]!==void 0&&(h=Yn):h===Yn?b[0]===">"?(h=o??ls,_=-1):b[1]===void 0?_=-2:(_=h.lastIndex-b[2].length,p=b[1],h=b[3]===void 0?Yn:b[3]==='"'?l0:n0):h===l0||h===n0?h=Yn:h===a0||h===i0?h=ls:(h=Yn,o=void 0);const y=h===Yn&&t[f+1].startsWith("/>")?" ":"";u+=h===ls?g+tS:_>=0?(r.push(p),g.slice(0,_)+Gb+g.slice(_)+gn+y):g+gn+(_===-2?f:y)}return[Wb(t,u+(t[l]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),r]};let Bh=class Qb{constructor({strings:i,_$litType$:l},r){let o;this.parts=[];let u=0,h=0;const f=i.length-1,g=this.parts,[p,b]=nS(i,l);if(this.el=Qb.createElement(p,r),Qn.currentNode=this.el.content,l===2||l===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(o=Qn.nextNode())!==null&&g.length<f;){if(o.nodeType===1){if(o.hasAttributes())for(const _ of o.getAttributeNames())if(_.endsWith(Gb)){const w=b[h++],y=o.getAttribute(_).split(gn),S=/([.?@])?(.*)/.exec(w);g.push({type:1,index:u,name:S[2],strings:y,ctor:S[1]==="."?rS:S[1]==="?"?sS:S[1]==="@"?oS:Oc}),o.removeAttribute(_)}else _.startsWith(gn)&&(g.push({type:6,index:u}),o.removeAttribute(_));if(Xb.test(o.tagName)){const _=o.textContent.split(gn),w=_.length-1;if(w>0){o.textContent=bc?bc.emptyScript:"";for(let y=0;y<w;y++)o.append(_[y],ws()),Qn.nextNode(),g.push({type:2,index:++u});o.append(_[w],ws())}}}else if(o.nodeType===8)if(o.data===Yb)g.push({type:2,index:u});else{let _=-1;for(;(_=o.data.indexOf(gn,_+1))!==-1;)g.push({type:7,index:u}),_+=gn.length-1}u++}}static createElement(i,l){const r=el.createElement("template");return r.innerHTML=i,r}};function er(t,i,l=t,r){if(i===ja)return i;let o=r!==void 0?l._$Co?.[r]:l._$Cl;const u=Ss(i)?void 0:i._$litDirective$;return o?.constructor!==u&&(o?._$AO?.(!1),u===void 0?o=void 0:(o=new u(t),o._$AT(t,l,r)),r!==void 0?(l._$Co??=[])[r]=o:l._$Cl=o),o!==void 0&&(i=er(t,o._$AS(t,i.values),o,r)),i}let lS=class{constructor(i,l){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:l},parts:r}=this._$AD,o=(i?.creationScope??el).importNode(l,!0);Qn.currentNode=o;let u=Qn.nextNode(),h=0,f=0,g=r[0];for(;g!==void 0;){if(h===g.index){let p;g.type===2?p=new _f(u,u.nextSibling,this,i):g.type===1?p=new g.ctor(u,g.name,g.strings,this,i):g.type===6&&(p=new cS(u,this,i)),this._$AV.push(p),g=r[++f]}h!==g?.index&&(u=Qn.nextNode(),h++)}return Qn.currentNode=el,o}p(i){let l=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(i,r,l),l+=r.strings.length-2):r._$AI(i[l])),l++}},_f=class Zb{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,l,r,o){this.type=2,this._$AH=rt,this._$AN=void 0,this._$AA=i,this._$AB=l,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&i?.nodeType===11&&(i=l.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,l=this){i=er(this,i,l),Ss(i)?i===rt||i==null||i===""?(this._$AH!==rt&&this._$AR(),this._$AH=rt):i!==this._$AH&&i!==ja&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):aS(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==rt&&Ss(this._$AH)?this._$AA.nextSibling.data=i:this.T(el.createTextNode(i)),this._$AH=i}$(i){const{values:l,_$litType$:r}=i,o=typeof r=="number"?this._$AC(i):(r.el===void 0&&(r.el=Bh.createElement(Wb(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(l);else{const u=new lS(o,this),h=u.u(this.options);u.p(l),this.T(h),this._$AH=u}}_$AC(i){let l=r0.get(i.strings);return l===void 0&&r0.set(i.strings,l=new Bh(i)),l}k(i){yf(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let r,o=0;for(const u of i)o===l.length?l.push(r=new Zb(this.O(ws()),this.O(ws()),this,this.options)):r=l[o],r._$AI(u),o++;o<l.length&&(this._$AR(r&&r._$AB.nextSibling,o),l.length=o)}_$AR(i=this._$AA.nextSibling,l){for(this._$AP?.(!1,!0,l);i!==this._$AB;){const r=i.nextSibling;i.remove(),i=r}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},Oc=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,l,r,o,u){this.type=1,this._$AH=rt,this._$AN=void 0,this.element=i,this.name=l,this._$AM=o,this.options=u,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=rt}_$AI(i,l=this,r,o){const u=this.strings;let h=!1;if(u===void 0)i=er(this,i,l,0),h=!Ss(i)||i!==this._$AH&&i!==ja,h&&(this._$AH=i);else{const f=i;let g,p;for(i=u[0],g=0;g<u.length-1;g++)p=er(this,f[r+g],l,g),p===ja&&(p=this._$AH[g]),h||=!Ss(p)||p!==this._$AH[g],p===rt?i=rt:i!==rt&&(i+=(p??"")+u[g+1]),this._$AH[g]=p}h&&!o&&this.j(i)}j(i){i===rt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},rS=class extends Oc{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===rt?void 0:i}},sS=class extends Oc{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==rt)}},oS=class extends Oc{constructor(i,l,r,o,u){super(i,l,r,o,u),this.type=5}_$AI(i,l=this){if((i=er(this,i,l,0)??rt)===ja)return;const r=this._$AH,o=i===rt&&r!==rt||i.capture!==r.capture||i.once!==r.once||i.passive!==r.passive,u=i!==rt&&(r===rt||o);o&&this.element.removeEventListener(this.name,this,r),u&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},cS=class{constructor(i,l,r){this.element=i,this.type=6,this._$AN=void 0,this._$AM=l,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(i){er(this,i)}};const uS=bf.litHtmlPolyfillSupport;uS?.(Bh,_f),(bf.litHtmlVersions??=[]).push("3.3.1");const dS=(t,i,l)=>{const r=l?.renderBefore??i;let o=r._$litPart$;if(o===void 0){const u=l?.renderBefore??null;r._$litPart$=o=new _f(i.insertBefore(ws(),u),u,void 0,l??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xf=globalThis;let ys=class extends Yl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){const l=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=dS(l,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ja}};ys._$litElement$=!0,ys.finalized=!0,xf.litElementHydrateSupport?.({LitElement:ys});const hS=xf.litElementPolyfillSupport;hS?.({LitElement:ys});(xf.litElementVersions??=[]).push("4.2.1");var fS=ht`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Hh=new Set,Xl=new Map;let Wn,wf="ltr",Sf="en";const Kb=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Kb){const t=new MutationObserver(e1);wf=document.documentElement.dir||"ltr",Sf=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Jb(...t){t.map(i=>{const l=i.$code.toLowerCase();Xl.has(l)?Xl.set(l,Object.assign(Object.assign({},Xl.get(l)),i)):Xl.set(l,i),Wn||(Wn=i)}),e1()}function e1(){Kb&&(wf=document.documentElement.dir||"ltr",Sf=document.documentElement.lang||navigator.language),[...Hh.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let pS=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Hh.add(this.host)}hostDisconnected(){Hh.delete(this.host)}dir(){return`${this.host.dir||wf}`.toLowerCase()}lang(){return`${this.host.lang||Sf}`.toLowerCase()}getTranslationData(i){var l,r;const o=new Intl.Locale(i.replace(/_/g,"-")),u=o?.language.toLowerCase(),h=(r=(l=o?.region)===null||l===void 0?void 0:l.toLowerCase())!==null&&r!==void 0?r:"",f=Xl.get(`${u}-${h}`),g=Xl.get(u);return{locale:o,language:u,region:h,primary:f,secondary:g}}exists(i,l){var r;const{primary:o,secondary:u}=this.getTranslationData((r=l.lang)!==null&&r!==void 0?r:this.lang());return l=Object.assign({includeFallback:!1},l),!!(o&&o[i]||u&&u[i]||l.includeFallback&&Wn&&Wn[i])}term(i,...l){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let u;if(r&&r[i])u=r[i];else if(o&&o[i])u=o[i];else if(Wn&&Wn[i])u=Wn[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof u=="function"?u(...l):u}date(i,l){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),l).format(i)}number(i,l){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),l).format(i)}relativeTime(i,l,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(i,l)}};var t1={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,i)=>`Go to slide ${t} of ${i}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Jb(t1);var mS=t1,xa=class extends pS{};Jb(mS);var wt=ht`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gS={attribute:!0,type:String,converter:Jl,reflect:!1,hasChanged:vf},vS=(t=gS,i,l)=>{const{kind:r,metadata:o}=l;let u=globalThis.litPropertyMetadata.get(o);if(u===void 0&&globalThis.litPropertyMetadata.set(o,u=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),u.set(l.name,t),r==="accessor"){const{name:h}=l;return{set(f){const g=i.get.call(this);i.set.call(this,f),this.requestUpdate(h,g,t)},init(f){return f!==void 0&&this.C(h,void 0,t,f),f}}}if(r==="setter"){const{name:h}=l;return function(f){const g=this[h];i.call(this,f),this.requestUpdate(h,g,t)}}throw Error("Unsupported decorator location: "+r)};function B(t){return(i,l)=>typeof l=="object"?vS(t,i,l):((r,o,u)=>{const h=o.hasOwnProperty(u);return o.constructor.createProperty(u,r),h?Object.getOwnPropertyDescriptor(o,u):void 0})(t,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return B({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function a1(t){return(i,l)=>{const r=typeof i=="function"?i:i[l];Object.assign(r,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bS=(t,i,l)=>(l.configurable=!0,l.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(t,i,l),l);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ie(t,i){return(l,r,o)=>{const u=h=>h.renderRoot?.querySelector(t)??null;return bS(l,r,{get(){return u(this)}})}}var cc,tt=class extends ys{constructor(){super(),ew(this,cc,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,i])=>{this.constructor.define(t,i)})}emit(t,i){const l=new CustomEvent(t,Ui({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(l),l}static define(t,i=this,l={}){const r=customElements.get(t);if(!r){try{customElements.define(t,i,l)}catch{customElements.define(t,class extends i{},l)}return}let o=" (unknown version)",u=o;"version"in i&&i.version&&(o=" v"+i.version),"version"in r&&r.version&&(u=" v"+r.version),!(o&&u&&o===u)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${u} has already been registered.`)}attributeChangedCallback(t,i,l){Jx(this,cc)||(this.constructor.elementProperties.forEach((r,o)=>{r.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),tw(this,cc,!0)),super.attributeChangedCallback(t,i,l)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((i,l)=>{t.has(l)&&this[l]==null&&(this[l]=i)})}};cc=new WeakMap;tt.version="2.20.1";tt.dependencies={};C([B()],tt.prototype,"dir",2);C([B()],tt.prototype,"lang",2);var kc=class extends tt{constructor(){super(...arguments),this.localize=new xa(this)}render(){return xe`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};kc.styles=[wt,fS];var rs=new WeakMap,ss=new WeakMap,os=new WeakMap,nh=new WeakSet,Zo=new WeakMap,Ts=class{constructor(t,i){this.handleFormData=l=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),u=this.options.value(this.host),h=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!h&&typeof o=="string"&&o.length>0&&typeof u<"u"&&(Array.isArray(u)?u.forEach(f=>{l.formData.append(o,f.toString())}):l.formData.append(o,u.toString()))},this.handleFormSubmit=l=>{var r;const o=this.options.disabled(this.host),u=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=rs.get(this.form))==null||r.forEach(h=>{this.setUserInteracted(h,!0)})),this.form&&!this.form.noValidate&&!o&&!u(this.host)&&(l.preventDefault(),l.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Zo.set(this.host,[])},this.handleInteraction=l=>{const r=Zo.get(this.host);r.includes(l.type)||r.push(l.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const l=this.form.querySelectorAll("*");for(const r of l)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const l=this.form.querySelectorAll("*");for(const r of l)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Ui({form:l=>{const r=l.form;if(r){const u=l.getRootNode().querySelector(`#${r}`);if(u)return u}return l.closest("form")},name:l=>l.name,value:l=>l.value,defaultValue:l=>l.defaultValue,disabled:l=>{var r;return(r=l.disabled)!=null?r:!1},reportValidity:l=>typeof l.reportValidity=="function"?l.reportValidity():!0,checkValidity:l=>typeof l.checkValidity=="function"?l.checkValidity():!0,setValue:(l,r)=>l.value=r,assumeInteractionOn:["sl-input"]},i)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Zo.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Zo.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,rs.has(this.form)?rs.get(this.form).add(this.host):rs.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ss.has(this.form)||(ss.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),os.has(this.form)||(os.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=rs.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ss.has(this.form)&&(this.form.reportValidity=ss.get(this.form),ss.delete(this.form)),os.has(this.form)&&(this.form.checkValidity=os.get(this.form),os.delete(this.form)),this.form=void 0))}setUserInteracted(t,i){i?nh.add(t):nh.delete(t),t.requestUpdate()}doAction(t,i){if(this.form){const l=document.createElement("button");l.type=t,l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.clipPath="inset(50%)",l.style.overflow="hidden",l.style.whiteSpace="nowrap",i&&(l.name=i.name,l.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{i.hasAttribute(r)&&l.setAttribute(r,i.getAttribute(r))})),this.form.append(l),l.click(),l.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const i=this.host,l=!!nh.has(i),r=!!i.required;i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!t),i.toggleAttribute("data-valid",t),i.toggleAttribute("data-user-invalid",!t&&l),i.toggleAttribute("data-user-valid",t&&l)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const i=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||i.preventDefault(),this.host.dispatchEvent(i)||t?.preventDefault()}},Ef=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(As(Ui({},Ef),{valid:!1,valueMissing:!0}));Object.freeze(As(Ui({},Ef),{valid:!1,customError:!0}));var yS=ht`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,il=class{constructor(t,...i){this.slotNames=[],this.handleSlotChange=l=>{const r=l.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=i}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const i=t;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},_S={name:"default",resolver:t=>Yx(`assets/icons/${t}.svg`)},xS=_S,s0={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},wS={name:"system",resolver:t=>t in s0?`data:image/svg+xml,${encodeURIComponent(s0[t])}`:""},SS=wS,ES=[xS,SS],Uh=[];function CS(t){Uh.push(t)}function AS(t){Uh=Uh.filter(i=>i!==t)}function o0(t){return ES.find(i=>i.name===t)}var TS=ht`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function qe(t,i){const l=Ui({waitUntilFirstUpdate:!1},i);return(r,o)=>{const{update:u}=r,h=Array.isArray(t)?t:[t];r.update=function(f){h.forEach(g=>{const p=g;if(f.has(p)){const b=f.get(p),_=this[p];b!==_&&(!l.waitUntilFirstUpdate||this.hasUpdated)&&this[o](b,_)}}),u.call(this,f)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const MS=(t,i)=>t?._$litType$!==void 0,NS=t=>t.strings===void 0,$S={},OS=(t,i=$S)=>t._$AH=i;var cs=Symbol(),Ko=Symbol(),lh,rh=new Map,Ut=class extends tt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,i){var l;let r;if(i?.spriteSheet)return this.svg=xe`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?cs:Ko}catch{return Ko}try{const o=document.createElement("div");o.innerHTML=await r.text();const u=o.firstElementChild;if(((l=u?.tagName)==null?void 0:l.toLowerCase())!=="svg")return cs;lh||(lh=new DOMParser);const f=lh.parseFromString(u.outerHTML,"text/html").body.querySelector("svg");return f?(f.part.add("svg"),document.adoptNode(f)):cs}catch{return cs}}connectedCallback(){super.connectedCallback(),CS(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),AS(this)}getIconSource(){const t=o0(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:i,fromLibrary:l}=this.getIconSource(),r=l?o0(this.library):void 0;if(!i){this.svg=null;return}let o=rh.get(i);if(o||(o=this.resolveIcon(i,r),rh.set(i,o)),!this.initialRender)return;const u=await o;if(u===Ko&&rh.delete(i),i===this.getIconSource().url){if(MS(u)){if(this.svg=u,r){await this.updateComplete;const h=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&h&&r.mutator(h)}return}switch(u){case Ko:case cs:this.svg=null,this.emit("sl-error");break;default:this.svg=u.cloneNode(!0),(t=r?.mutator)==null||t.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Ut.styles=[wt,TS];C([ft()],Ut.prototype,"svg",2);C([B({reflect:!0})],Ut.prototype,"name",2);C([B()],Ut.prototype,"src",2);C([B()],Ut.prototype,"label",2);C([B({reflect:!0})],Ut.prototype,"library",2);C([qe("label")],Ut.prototype,"handleLabelChange",1);C([qe(["name","src","library"])],Ut.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Cf=t=>(...i)=>({_$litDirective$:t,values:i});let Af=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,l,r){this._$Ct=i,this._$AM=l,this._$Ci=r}_$AS(i,l){return this.update(i,l)}update(i,l){return this.render(...l)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=Cf(class extends Af{constructor(t){if(super(t),t.type!==mn.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in i)i[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(i)}const l=t.element.classList;for(const r of this.st)r in i||(l.remove(r),this.st.delete(r));for(const r in i){const o=!!i[r];o===this.st.has(r)||this.nt?.has(r)||(o?(l.add(r),this.st.add(r)):(l.remove(r),this.st.delete(r)))}return ja}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i1=Symbol.for(""),kS=t=>{if(t?.r===i1)return t?._$litStatic$},yc=(t,...i)=>({_$litStatic$:i.reduce(((l,r,o)=>l+(u=>{if(u._$litStatic$!==void 0)return u._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${u}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[o+1]),t[0]),r:i1}),c0=new Map,RS=t=>(i,...l)=>{const r=l.length;let o,u;const h=[],f=[];let g,p=0,b=!1;for(;p<r;){for(g=i[p];p<r&&(u=l[p],(o=kS(u))!==void 0);)g+=o+i[++p],b=!0;p!==r&&f.push(u),h.push(g),p++}if(p===r&&h.push(i[r]),b){const _=h.join("$$lit$$");(i=c0.get(_))===void 0&&(h.raw=h,c0.set(_,i=h)),l=f}return t(i,...l)},uc=RS(xe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=t=>t??rt;var Ue=class extends tt{constructor(){super(...arguments),this.formControlController=new Ts(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new il(this,"[default]","prefix","suffix"),this.localize=new xa(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ef}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),i=t?yc`a`:yc`button`;return uc`
      <${i}
        part="base"
        class=${ot({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${ve(t?void 0:this.disabled)}
        type=${ve(t?void 0:this.type)}
        title=${this.title}
        name=${ve(t?void 0:this.name)}
        value=${ve(t?void 0:this.value)}
        href=${ve(t&&!this.disabled?this.href:void 0)}
        target=${ve(t?this.target:void 0)}
        download=${ve(t?this.download:void 0)}
        rel=${ve(t?this.rel:void 0)}
        role=${ve(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?uc` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?uc`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${i}>
    `}};Ue.styles=[wt,yS];Ue.dependencies={"sl-icon":Ut,"sl-spinner":kc};C([Ie(".button")],Ue.prototype,"button",2);C([ft()],Ue.prototype,"hasFocus",2);C([ft()],Ue.prototype,"invalid",2);C([B()],Ue.prototype,"title",2);C([B({reflect:!0})],Ue.prototype,"variant",2);C([B({reflect:!0})],Ue.prototype,"size",2);C([B({type:Boolean,reflect:!0})],Ue.prototype,"caret",2);C([B({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);C([B({type:Boolean,reflect:!0})],Ue.prototype,"loading",2);C([B({type:Boolean,reflect:!0})],Ue.prototype,"outline",2);C([B({type:Boolean,reflect:!0})],Ue.prototype,"pill",2);C([B({type:Boolean,reflect:!0})],Ue.prototype,"circle",2);C([B()],Ue.prototype,"type",2);C([B()],Ue.prototype,"name",2);C([B()],Ue.prototype,"value",2);C([B()],Ue.prototype,"href",2);C([B()],Ue.prototype,"target",2);C([B()],Ue.prototype,"rel",2);C([B()],Ue.prototype,"download",2);C([B()],Ue.prototype,"form",2);C([B({attribute:"formaction"})],Ue.prototype,"formAction",2);C([B({attribute:"formenctype"})],Ue.prototype,"formEnctype",2);C([B({attribute:"formmethod"})],Ue.prototype,"formMethod",2);C([B({attribute:"formnovalidate",type:Boolean})],Ue.prototype,"formNoValidate",2);C([B({attribute:"formtarget"})],Ue.prototype,"formTarget",2);C([qe("disabled",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleDisabledChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const DS=new Set(["children","localName","ref","style","className"]),u0=new WeakMap,d0=(t,i,l,r,o)=>{const u=o?.[i];u===void 0?(t[i]=l,l==null&&i in HTMLElement.prototype&&t.removeAttribute(i)):l!==r&&((h,f,g)=>{let p=u0.get(h);p===void 0&&u0.set(h,p=new Map);let b=p.get(f);g!==void 0?b===void 0?(p.set(f,b={handleEvent:g}),h.addEventListener(f,b)):b.handleEvent=g:b!==void 0&&(p.delete(f),h.removeEventListener(f,b))})(t,u,l)},Xt=({react:t,tagName:i,elementClass:l,events:r,displayName:o})=>{const u=new Set(Object.keys(r??{})),h=t.forwardRef(((f,g)=>{const p=t.useRef(new Map),b=t.useRef(null),_={},w={};for(const[y,S]of Object.entries(f))DS.has(y)?_[y==="className"?"class":y]=S:u.has(y)||y in l.prototype?w[y]=S:_[y]=S;return t.useLayoutEffect((()=>{if(b.current===null)return;const y=new Map;for(const S in w)d0(b.current,S,f[S],p.current.get(S),r),p.current.delete(S),y.set(S,f[S]);for(const[S,T]of p.current)d0(b.current,S,void 0,T,r);p.current=y})),t.useLayoutEffect((()=>{b.current?.removeAttribute("defer-hydration")}),[]),_.suppressHydrationWarning=!0,t.createElement(i,{..._,ref:t.useCallback((y=>{b.current=y,typeof g=="function"?g(y):g!==null&&(g.current=y)}),[g])})}));return h.displayName=o??l.name,h};var LS="sl-button";Ue.define("sl-button");var zS=Xt({tagName:LS,elementClass:Ue,react:Ht,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Le=zS;function h0(t){return{onFetch:(i,l)=>{const r=i.options,o=i.fetchOptions?.meta?.fetchMore?.direction,u=i.state.data?.pages||[],h=i.state.data?.pageParams||[];let f={pages:[],pageParams:[]},g=0;const p=async()=>{let b=!1;const _=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(i.signal.aborted?b=!0:i.signal.addEventListener("abort",()=>{b=!0}),i.signal)})},w=I2(i.options,i.fetchOptions),y=async(S,T,M)=>{if(b)return Promise.reject();if(T==null&&S.pages.length)return Promise.resolve(S);const D=(()=>{const W={client:i.client,queryKey:i.queryKey,pageParam:T,direction:M?"backward":"forward",meta:i.options.meta};return _(W),W})(),U=await w(D),{maxPages:j}=i.options,$=M?P2:V2;return{pages:$(S.pages,U,j),pageParams:$(S.pageParams,T,j)}};if(o&&u.length){const S=o==="backward",T=S?jS:f0,M={pages:u,pageParams:h},A=T(r,M);f=await y(M,A,S)}else{const S=t??u.length;do{const T=g===0?h[0]??r.initialPageParam:f0(r,f);if(g>0&&T==null)break;f=await y(f,T),g++}while(g<S)}return f};i.options.persister?i.fetchFn=()=>i.options.persister?.(p,{client:i.client,queryKey:i.queryKey,meta:i.options.meta,signal:i.signal},l):i.fetchFn=p}}}function f0(t,{pages:i,pageParams:l}){const r=i.length-1;return i.length>0?t.getNextPageParam(i[r],i,l[r],l):void 0}function jS(t,{pages:i,pageParams:l}){return i.length>0?t.getPreviousPageParam?.(i[0],i,l[0],l):void 0}var BS=class extends fb{constructor(t={}){super(),this.config=t,this.#e=new Set,this.#t=new Map,this.#a=0}#e;#t;#a;build(t,i,l){const r=new F2({client:t,mutationCache:this,mutationId:++this.#a,options:t.defaultMutationOptions(i),state:l});return this.add(r),r}add(t){this.#e.add(t);const i=Jo(t);if(typeof i=="string"){const l=this.#t.get(i);l?l.push(t):this.#t.set(i,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#e.delete(t)){const i=Jo(t);if(typeof i=="string"){const l=this.#t.get(i);if(l)if(l.length>1){const r=l.indexOf(t);r!==-1&&l.splice(r,1)}else l[0]===t&&this.#t.delete(i)}}this.notify({type:"removed",mutation:t})}canRun(t){const i=Jo(t);if(typeof i=="string"){const r=this.#t.get(i)?.find(o=>o.state.status==="pending");return!r||r===t}else return!0}runNext(t){const i=Jo(t);return typeof i=="string"?this.#t.get(i)?.find(r=>r!==t&&r.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){ba.batch(()=>{this.#e.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(t){const i={exact:!0,...t};return this.getAll().find(l=>Cv(i,l))}findAll(t={}){return this.getAll().filter(i=>Cv(t,i))}notify(t){ba.batch(()=>{this.listeners.forEach(i=>{i(t)})})}resumePausedMutations(){const t=this.getAll().filter(i=>i.state.isPaused);return ba.batch(()=>Promise.all(t.map(i=>i.continue().catch(zi))))}};function Jo(t){return t.options.scope?.id}var HS=class extends fb{constructor(t={}){super(),this.config=t,this.#e=new Map}#e;build(t,i,l){const r=i.queryKey,o=i.queryHash??pb(r,i);let u=this.get(o);return u||(u=new q2({client:t,queryKey:r,queryHash:o,options:t.defaultQueryOptions(i),state:l,defaultOptions:t.getQueryDefaults(r)}),this.add(u)),u}add(t){this.#e.has(t.queryHash)||(this.#e.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const i=this.#e.get(t.queryHash);i&&(t.destroy(),i===t&&this.#e.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ba.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#e.get(t)}getAll(){return[...this.#e.values()]}find(t){const i={exact:!0,...t};return this.getAll().find(l=>Av(i,l))}findAll(t={}){const i=this.getAll();return Object.keys(t).length>0?i.filter(l=>Av(t,l)):i}notify(t){ba.batch(()=>{this.listeners.forEach(i=>{i(t)})})}onFocus(){ba.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ba.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},US=class{#e;#t;#a;#n;#l;#i;#r;#s;constructor(t={}){this.#e=t.queryCache||new HS,this.#t=t.mutationCache||new BS,this.#a=t.defaultOptions||{},this.#n=new Map,this.#l=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#r=G2.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=Tv.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#r?.(),this.#r=void 0,this.#s?.(),this.#s=void 0)}isFetching(t){return this.#e.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#t.findAll({...t,status:"pending"}).length}getQueryData(t){const i=this.defaultQueryOptions({queryKey:t});return this.#e.get(i.queryHash)?.state.data}ensureQueryData(t){const i=this.defaultQueryOptions(t),l=this.#e.build(this,i),r=l.state.data;return r===void 0?this.fetchQuery(t):(t.revalidateIfStale&&l.isStaleByTime(Mv(i.staleTime,l))&&this.prefetchQuery(i),Promise.resolve(r))}getQueriesData(t){return this.#e.findAll(t).map(({queryKey:i,state:l})=>{const r=l.data;return[i,r]})}setQueryData(t,i,l){const r=this.defaultQueryOptions({queryKey:t}),u=this.#e.get(r.queryHash)?.state.data,h=Y2(i,u);if(h!==void 0)return this.#e.build(this,r).setData(h,{...l,manual:!0})}setQueriesData(t,i,l){return ba.batch(()=>this.#e.findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,i,l)]))}getQueryState(t){const i=this.defaultQueryOptions({queryKey:t});return this.#e.get(i.queryHash)?.state}removeQueries(t){const i=this.#e;ba.batch(()=>{i.findAll(t).forEach(l=>{i.remove(l)})})}resetQueries(t,i){const l=this.#e;return ba.batch(()=>(l.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...t},i)))}cancelQueries(t,i={}){const l={revert:!0,...i},r=ba.batch(()=>this.#e.findAll(t).map(o=>o.cancel(l)));return Promise.all(r).then(zi).catch(zi)}invalidateQueries(t,i={}){return ba.batch(()=>(this.#e.findAll(t).forEach(l=>{l.invalidate()}),t?.refetchType==="none"?Promise.resolve():this.refetchQueries({...t,type:t?.refetchType??t?.type??"active"},i)))}refetchQueries(t,i={}){const l={...i,cancelRefetch:i.cancelRefetch??!0},r=ba.batch(()=>this.#e.findAll(t).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let u=o.fetch(void 0,l);return l.throwOnError||(u=u.catch(zi)),o.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(r).then(zi)}fetchQuery(t){const i=this.defaultQueryOptions(t);i.retry===void 0&&(i.retry=!1);const l=this.#e.build(this,i);return l.isStaleByTime(Mv(i.staleTime,l))?l.fetch(i):Promise.resolve(l.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(zi).catch(zi)}fetchInfiniteQuery(t){return t.behavior=h0(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(zi).catch(zi)}ensureInfiniteQueryData(t){return t.behavior=h0(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Tv.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(t){this.#a=t}setQueryDefaults(t,i){this.#n.set(Nv(t),{queryKey:t,defaultOptions:i})}getQueryDefaults(t){const i=[...this.#n.values()],l={};return i.forEach(r=>{$v(t,r.queryKey)&&Object.assign(l,r.defaultOptions)}),l}setMutationDefaults(t,i){this.#l.set(Nv(t),{mutationKey:t,defaultOptions:i})}getMutationDefaults(t){const i=[...this.#l.values()],l={};return i.forEach(r=>{$v(t,r.mutationKey)&&Object.assign(l,r.defaultOptions)}),l}defaultQueryOptions(t){if(t._defaulted)return t;const i={...this.#a.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return i.queryHash||(i.queryHash=pb(i.queryKey,i)),i.refetchOnReconnect===void 0&&(i.refetchOnReconnect=i.networkMode!=="always"),i.throwOnError===void 0&&(i.throwOnError=!!i.suspense),!i.networkMode&&i.persister&&(i.networkMode="offlineFirst"),i.queryFn===X2&&(i.enabled=!1),i}defaultMutationOptions(t){return t?._defaulted?t:{...this.#a.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}};function li(t,i){var l=i&&i.cache?i.cache:YS,r=i&&i.serializer?i.serializer:qS,o=i&&i.strategy?i.strategy:VS;return o(t,{cache:l,serializer:r})}function IS(t){return t==null||typeof t=="number"||typeof t=="boolean"}function PS(t,i,l,r){var o=IS(r)?r:l(r),u=i.get(o);return typeof u>"u"&&(u=t.call(this,r),i.set(o,u)),u}function n1(t,i,l){var r=Array.prototype.slice.call(arguments,3),o=l(r),u=i.get(o);return typeof u>"u"&&(u=t.apply(this,r),i.set(o,u)),u}function l1(t,i,l,r,o){return l.bind(i,t,r,o)}function VS(t,i){var l=t.length===1?PS:n1;return l1(t,this,l,i.cache.create(),i.serializer)}function FS(t,i){return l1(t,this,n1,i.cache.create(),i.serializer)}var qS=function(){return JSON.stringify(arguments)},GS=(function(){function t(){this.cache=Object.create(null)}return t.prototype.get=function(i){return this.cache[i]},t.prototype.set=function(i,l){this.cache[i]=l},t})(),YS={create:function(){return new GS}},ri={variadic:FS},Me;(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Me||(Me={}));var Ze;(function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"})(Ze||(Ze={}));var tr;(function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"})(tr||(tr={}));function p0(t){return t.type===Ze.literal}function XS(t){return t.type===Ze.argument}function r1(t){return t.type===Ze.number}function s1(t){return t.type===Ze.date}function o1(t){return t.type===Ze.time}function c1(t){return t.type===Ze.select}function u1(t){return t.type===Ze.plural}function WS(t){return t.type===Ze.pound}function d1(t){return t.type===Ze.tag}function h1(t){return!!(t&&typeof t=="object"&&t.type===tr.number)}function Ih(t){return!!(t&&typeof t=="object"&&t.type===tr.dateTime)}var f1=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,QS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function ZS(t){var i={};return t.replace(QS,function(l){var r=l.length;switch(l[0]){case"G":i.era=r===4?"long":r===5?"narrow":"short";break;case"y":i.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][r-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][r-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][r-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][r-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][r-1];break;case"s":i.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var KS=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function JS(t){if(t.length===0)throw new Error("Number skeleton cannot be empty");for(var i=t.split(KS).filter(function(w){return w.length>0}),l=[],r=0,o=i;r<o.length;r++){var u=o[r],h=u.split("/");if(h.length===0)throw new Error("Invalid number skeleton");for(var f=h[0],g=h.slice(1),p=0,b=g;p<b.length;p++){var _=b[p];if(_.length===0)throw new Error("Invalid number skeleton")}l.push({stem:f,options:g})}return l}function e3(t){return t.replace(/^(.*?)-/,"")}var m0=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,p1=/^(@+)?(\+|#+)?[rs]?$/g,t3=/(\*)(0+)|(#+)(0+)|(0+)/g,m1=/^(0+)$/;function g0(t){var i={};return t[t.length-1]==="r"?i.roundingPriority="morePrecision":t[t.length-1]==="s"&&(i.roundingPriority="lessPrecision"),t.replace(p1,function(l,r,o){return typeof o!="string"?(i.minimumSignificantDigits=r.length,i.maximumSignificantDigits=r.length):o==="+"?i.minimumSignificantDigits=r.length:r[0]==="#"?i.maximumSignificantDigits=r.length:(i.minimumSignificantDigits=r.length,i.maximumSignificantDigits=r.length+(typeof o=="string"?o.length:0)),""}),i}function g1(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function a3(t){var i;if(t[0]==="E"&&t[1]==="E"?(i={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(i={notation:"scientific"},t=t.slice(1)),i){var l=t.slice(0,2);if(l==="+!"?(i.signDisplay="always",t=t.slice(2)):l==="+?"&&(i.signDisplay="exceptZero",t=t.slice(2)),!m1.test(t))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=t.length}return i}function v0(t){var i={},l=g1(t);return l||i}function i3(t){for(var i={},l=0,r=t;l<r.length;l++){var o=r[l];switch(o.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=o.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=e3(o.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=de(de(de({},i),{notation:"scientific"}),o.options.reduce(function(g,p){return de(de({},g),v0(p))},{}));continue;case"engineering":i=de(de(de({},i),{notation:"engineering"}),o.options.reduce(function(g,p){return de(de({},g),v0(p))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(o.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace(t3,function(g,p,b,_,w,y){if(p)i.minimumIntegerDigits=b.length;else{if(_&&w)throw new Error("We currently do not support maximum integer digits");if(y)throw new Error("We currently do not support exact integer digits")}return""});continue}if(m1.test(o.stem)){i.minimumIntegerDigits=o.stem.length;continue}if(m0.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(m0,function(g,p,b,_,w,y){return b==="*"?i.minimumFractionDigits=p.length:_&&_[0]==="#"?i.maximumFractionDigits=_.length:w&&y?(i.minimumFractionDigits=w.length,i.maximumFractionDigits=w.length+y.length):(i.minimumFractionDigits=p.length,i.maximumFractionDigits=p.length),""});var u=o.options[0];u==="w"?i=de(de({},i),{trailingZeroDisplay:"stripIfInteger"}):u&&(i=de(de({},i),g0(u)));continue}if(p1.test(o.stem)){i=de(de({},i),g0(o.stem));continue}var h=g1(o.stem);h&&(i=de(de({},i),h));var f=a3(o.stem);f&&(i=de(de({},i),f))}return i}var ec={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function n3(t,i){for(var l="",r=0;r<t.length;r++){var o=t.charAt(r);if(o==="j"){for(var u=0;r+1<t.length&&t.charAt(r+1)===o;)u++,r++;var h=1+(u&1),f=u<2?1:3+(u>>1),g="a",p=l3(i);for((p=="H"||p=="k")&&(f=0);f-- >0;)l+=g;for(;h-- >0;)l=p+l}else o==="J"?l+="H":l+=o}return l}function l3(t){var i=t.hourCycle;if(i===void 0&&t.hourCycles&&t.hourCycles.length&&(i=t.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var l=t.language,r;l!=="root"&&(r=t.maximize().region);var o=ec[r||""]||ec[l||""]||ec["".concat(l,"-001")]||ec["001"];return o[0]}var sh,r3=new RegExp("^".concat(f1.source,"*")),s3=new RegExp("".concat(f1.source,"*$"));function ke(t,i){return{start:t,end:i}}var o3=!!String.prototype.startsWith&&"_a".startsWith("a",1),c3=!!String.fromCodePoint,u3=!!Object.fromEntries,d3=!!String.prototype.codePointAt,h3=!!String.prototype.trimStart,f3=!!String.prototype.trimEnd,p3=!!Number.isSafeInteger,m3=p3?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},Ph=!0;try{var g3=b1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ph=((sh=g3.exec("a"))===null||sh===void 0?void 0:sh[0])==="a"}catch{Ph=!1}var b0=o3?function(i,l,r){return i.startsWith(l,r)}:function(i,l,r){return i.slice(r,r+l.length)===l},Vh=c3?String.fromCodePoint:function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];for(var r="",o=i.length,u=0,h;o>u;){if(h=i[u++],h>1114111)throw RangeError(h+" is not a valid code point");r+=h<65536?String.fromCharCode(h):String.fromCharCode(((h-=65536)>>10)+55296,h%1024+56320)}return r},y0=u3?Object.fromEntries:function(i){for(var l={},r=0,o=i;r<o.length;r++){var u=o[r],h=u[0],f=u[1];l[h]=f}return l},v1=d3?function(i,l){return i.codePointAt(l)}:function(i,l){var r=i.length;if(!(l<0||l>=r)){var o=i.charCodeAt(l),u;return o<55296||o>56319||l+1===r||(u=i.charCodeAt(l+1))<56320||u>57343?o:(o-55296<<10)+(u-56320)+65536}},v3=h3?function(i){return i.trimStart()}:function(i){return i.replace(r3,"")},b3=f3?function(i){return i.trimEnd()}:function(i){return i.replace(s3,"")};function b1(t,i){return new RegExp(t,i)}var Fh;if(Ph){var _0=b1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Fh=function(i,l){var r;_0.lastIndex=l;var o=_0.exec(i);return(r=o[1])!==null&&r!==void 0?r:""}}else Fh=function(i,l){for(var r=[];;){var o=v1(i,l);if(o===void 0||y1(o)||w3(o))break;r.push(o),l+=o>=65536?2:1}return Vh.apply(void 0,r)};var y3=(function(){function t(i,l){l===void 0&&(l={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!l.ignoreTag,this.locale=l.locale,this.requiresOtherClause=!!l.requiresOtherClause,this.shouldParseSkeletons=!!l.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(i,l,r){for(var o=[];!this.isEOF();){var u=this.char();if(u===123){var h=this.parseArgument(i,r);if(h.err)return h;o.push(h.val)}else{if(u===125&&i>0)break;if(u===35&&(l==="plural"||l==="selectordinal")){var f=this.clonePosition();this.bump(),o.push({type:Ze.pound,location:ke(f,this.clonePosition())})}else if(u===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(Me.UNMATCHED_CLOSING_TAG,ke(this.clonePosition(),this.clonePosition()))}else if(u===60&&!this.ignoreTag&&qh(this.peek()||0)){var h=this.parseTag(i,l);if(h.err)return h;o.push(h.val)}else{var h=this.parseLiteral(i,l);if(h.err)return h;o.push(h.val)}}}return{val:o,err:null}},t.prototype.parseTag=function(i,l){var r=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ze.literal,value:"<".concat(o,"/>"),location:ke(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var u=this.parseMessage(i+1,l,!0);if(u.err)return u;var h=u.val,f=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!qh(this.char()))return this.error(Me.INVALID_TAG,ke(f,this.clonePosition()));var g=this.clonePosition(),p=this.parseTagName();return o!==p?this.error(Me.UNMATCHED_CLOSING_TAG,ke(g,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ze.tag,value:o,children:h,location:ke(r,this.clonePosition())},err:null}:this.error(Me.INVALID_TAG,ke(f,this.clonePosition())))}else return this.error(Me.UNCLOSED_TAG,ke(r,this.clonePosition()))}else return this.error(Me.INVALID_TAG,ke(r,this.clonePosition()))},t.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&x3(this.char());)this.bump();return this.message.slice(i,this.offset())},t.prototype.parseLiteral=function(i,l){for(var r=this.clonePosition(),o="";;){var u=this.tryParseQuote(l);if(u){o+=u;continue}var h=this.tryParseUnquoted(i,l);if(h){o+=h;continue}var f=this.tryParseLeftAngleBracket();if(f){o+=f;continue}break}var g=ke(r,this.clonePosition());return{val:{type:Ze.literal,value:o,location:g},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!_3(this.peek()||0))?(this.bump(),"<"):null},t.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var l=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)l.push(39),this.bump();else{this.bump();break}else l.push(r);this.bump()}return Vh.apply(void 0,l)},t.prototype.tryParseUnquoted=function(i,l){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(l==="plural"||l==="selectordinal")||r===125&&i>0?null:(this.bump(),Vh(r))},t.prototype.parseArgument=function(i,l){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,ke(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Me.EMPTY_ARGUMENT,ke(r,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error(Me.MALFORMED_ARGUMENT,ke(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,ke(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ze.argument,value:o,location:ke(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,ke(r,this.clonePosition())):this.parseArgumentOptions(i,l,o,r);default:return this.error(Me.MALFORMED_ARGUMENT,ke(r,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),l=this.offset(),r=Fh(this.message,l),o=l+r.length;this.bumpTo(o);var u=this.clonePosition(),h=ke(i,u);return{value:r,location:h}},t.prototype.parseArgumentOptions=function(i,l,r,o){var u,h=this.clonePosition(),f=this.parseIdentifierIfPossible().value,g=this.clonePosition();switch(f){case"":return this.error(Me.EXPECT_ARGUMENT_TYPE,ke(h,g));case"number":case"date":case"time":{this.bumpSpace();var p=null;if(this.bumpIf(",")){this.bumpSpace();var b=this.clonePosition(),_=this.parseSimpleArgStyleIfPossible();if(_.err)return _;var w=b3(_.val);if(w.length===0)return this.error(Me.EXPECT_ARGUMENT_STYLE,ke(this.clonePosition(),this.clonePosition()));var y=ke(b,this.clonePosition());p={style:w,styleLocation:y}}var S=this.tryParseArgumentClose(o);if(S.err)return S;var T=ke(o,this.clonePosition());if(p&&b0(p?.style,"::",0)){var M=v3(p.style.slice(2));if(f==="number"){var _=this.parseNumberSkeletonFromString(M,p.styleLocation);return _.err?_:{val:{type:Ze.number,value:r,location:T,style:_.val},err:null}}else{if(M.length===0)return this.error(Me.EXPECT_DATE_TIME_SKELETON,T);var A=M;this.locale&&(A=n3(M,this.locale));var w={type:tr.dateTime,pattern:A,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?ZS(A):{}},D=f==="date"?Ze.date:Ze.time;return{val:{type:D,value:r,location:T,style:w},err:null}}}return{val:{type:f==="number"?Ze.number:f==="date"?Ze.date:Ze.time,value:r,location:T,style:(u=p?.style)!==null&&u!==void 0?u:null},err:null}}case"plural":case"selectordinal":case"select":{var U=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Me.EXPECT_SELECT_ARGUMENT_OPTIONS,ke(U,de({},U)));this.bumpSpace();var j=this.parseIdentifierIfPossible(),$=0;if(f!=="select"&&j.value==="offset"){if(!this.bumpIf(":"))return this.error(Me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ke(this.clonePosition(),this.clonePosition()));this.bumpSpace();var _=this.tryParseDecimalInteger(Me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Me.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(_.err)return _;this.bumpSpace(),j=this.parseIdentifierIfPossible(),$=_.val}var W=this.tryParsePluralOrSelectOptions(i,f,l,j);if(W.err)return W;var S=this.tryParseArgumentClose(o);if(S.err)return S;var X=ke(o,this.clonePosition());return f==="select"?{val:{type:Ze.select,value:r,options:y0(W.val),location:X},err:null}:{val:{type:Ze.plural,value:r,options:y0(W.val),offset:$,pluralType:f==="plural"?"cardinal":"ordinal",location:X},err:null}}default:return this.error(Me.INVALID_ARGUMENT_TYPE,ke(h,g))}},t.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,ke(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,l=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Me.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ke(o,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(l.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(l.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(i,l){var r=[];try{r=JS(i)}catch{return this.error(Me.INVALID_NUMBER_SKELETON,l)}return{val:{type:tr.number,tokens:r,location:l,parsedOptions:this.shouldParseSkeletons?i3(r):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(i,l,r,o){for(var u,h=!1,f=[],g=new Set,p=o.value,b=o.location;;){if(p.length===0){var _=this.clonePosition();if(l!=="select"&&this.bumpIf("=")){var w=this.tryParseDecimalInteger(Me.EXPECT_PLURAL_ARGUMENT_SELECTOR,Me.INVALID_PLURAL_ARGUMENT_SELECTOR);if(w.err)return w;b=ke(_,this.clonePosition()),p=this.message.slice(_.offset,this.offset())}else break}if(g.has(p))return this.error(l==="select"?Me.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Me.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,b);p==="other"&&(h=!0),this.bumpSpace();var y=this.clonePosition();if(!this.bumpIf("{"))return this.error(l==="select"?Me.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Me.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ke(this.clonePosition(),this.clonePosition()));var S=this.parseMessage(i+1,l,r);if(S.err)return S;var T=this.tryParseArgumentClose(y);if(T.err)return T;f.push([p,{value:S.val,location:ke(y,this.clonePosition())}]),g.add(p),this.bumpSpace(),u=this.parseIdentifierIfPossible(),p=u.value,b=u.location}return f.length===0?this.error(l==="select"?Me.EXPECT_SELECT_ARGUMENT_SELECTOR:Me.EXPECT_PLURAL_ARGUMENT_SELECTOR,ke(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!h?this.error(Me.MISSING_OTHER_CLAUSE,ke(this.clonePosition(),this.clonePosition())):{val:f,err:null}},t.prototype.tryParseDecimalInteger=function(i,l){var r=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var u=!1,h=0;!this.isEOF();){var f=this.char();if(f>=48&&f<=57)u=!0,h=h*10+(f-48),this.bump();else break}var g=ke(o,this.clonePosition());return u?(h*=r,m3(h)?{val:h,err:null}:this.error(l,g)):this.error(i,g)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var l=v1(this.message,i);if(l===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return l},t.prototype.error=function(i,l){return{val:null,err:{kind:i,message:this.message,location:l}}},t.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},t.prototype.bumpIf=function(i){if(b0(this.message,i,this.offset())){for(var l=0;l<i.length;l++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(i){var l=this.offset(),r=this.message.indexOf(i,l);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var l=this.offset();if(l===i)break;if(l>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&y1(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),l=this.offset(),r=this.message.charCodeAt(l+(i>=65536?2:1));return r??null},t})();function qh(t){return t>=97&&t<=122||t>=65&&t<=90}function _3(t){return qh(t)||t===47}function x3(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function y1(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function w3(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function Gh(t){t.forEach(function(i){if(delete i.location,c1(i)||u1(i))for(var l in i.options)delete i.options[l].location,Gh(i.options[l].value);else r1(i)&&h1(i.style)||(s1(i)||o1(i))&&Ih(i.style)?delete i.style.location:d1(i)&&Gh(i.children)})}function S3(t,i){i===void 0&&(i={}),i=de({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var l=new y3(t,i).parse();if(l.err){var r=SyntaxError(Me[l.err.kind]);throw r.location=l.err.location,r.originalMessage=l.err.message,r}return i?.captureLocation||Gh(l.val),l.val}var ui;(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(ui||(ui={}));var En=(function(t){Ha(i,t);function i(l,r,o){var u=t.call(this,l)||this;return u.code=r,u.originalMessage=o,u}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i})(Error),x0=(function(t){Ha(i,t);function i(l,r,o,u){return t.call(this,'Invalid values for "'.concat(l,'": "').concat(r,'". Options are "').concat(Object.keys(o).join('", "'),'"'),ui.INVALID_VALUE,u)||this}return i})(En),E3=(function(t){Ha(i,t);function i(l,r,o){return t.call(this,'Value for "'.concat(l,'" must be of type ').concat(r),ui.INVALID_VALUE,o)||this}return i})(En),C3=(function(t){Ha(i,t);function i(l,r){return t.call(this,'The intl string context variable "'.concat(l,'" was not provided to the string "').concat(r,'"'),ui.MISSING_VALUE,r)||this}return i})(En),ea;(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(ea||(ea={}));function A3(t){return t.length<2?t:t.reduce(function(i,l){var r=i[i.length-1];return!r||r.type!==ea.literal||l.type!==ea.literal?i.push(l):r.value+=l.value,i},[])}function _1(t){return typeof t=="function"}function dc(t,i,l,r,o,u,h){if(t.length===1&&p0(t[0]))return[{type:ea.literal,value:t[0].value}];for(var f=[],g=0,p=t;g<p.length;g++){var b=p[g];if(p0(b)){f.push({type:ea.literal,value:b.value});continue}if(WS(b)){typeof u=="number"&&f.push({type:ea.literal,value:l.getNumberFormat(i).format(u)});continue}var _=b.value;if(!(o&&_ in o))throw new C3(_,h);var w=o[_];if(XS(b)){(!w||typeof w=="string"||typeof w=="number")&&(w=typeof w=="string"||typeof w=="number"?String(w):""),f.push({type:typeof w=="string"?ea.literal:ea.object,value:w});continue}if(s1(b)){var y=typeof b.style=="string"?r.date[b.style]:Ih(b.style)?b.style.parsedOptions:void 0;f.push({type:ea.literal,value:l.getDateTimeFormat(i,y).format(w)});continue}if(o1(b)){var y=typeof b.style=="string"?r.time[b.style]:Ih(b.style)?b.style.parsedOptions:r.time.medium;f.push({type:ea.literal,value:l.getDateTimeFormat(i,y).format(w)});continue}if(r1(b)){var y=typeof b.style=="string"?r.number[b.style]:h1(b.style)?b.style.parsedOptions:void 0;y&&y.scale&&(w=w*(y.scale||1)),f.push({type:ea.literal,value:l.getNumberFormat(i,y).format(w)});continue}if(d1(b)){var S=b.children,T=b.value,M=o[T];if(!_1(M))throw new E3(T,"function",h);var A=dc(S,i,l,r,o,u),D=M(A.map(function($){return $.value}));Array.isArray(D)||(D=[D]),f.push.apply(f,D.map(function($){return{type:typeof $=="string"?ea.literal:ea.object,value:$}}))}if(c1(b)){var U=b.options[w]||b.options.other;if(!U)throw new x0(b.value,w,Object.keys(b.options),h);f.push.apply(f,dc(U.value,i,l,r,o));continue}if(u1(b)){var U=b.options["=".concat(w)];if(!U){if(!Intl.PluralRules)throw new En(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ui.MISSING_INTL_API,h);var j=l.getPluralRules(i,{type:b.pluralType}).select(w-(b.offset||0));U=b.options[j]||b.options.other}if(!U)throw new x0(b.value,w,Object.keys(b.options),h);f.push.apply(f,dc(U.value,i,l,r,o,w-(b.offset||0)));continue}}return A3(f)}function T3(t,i){return i?de(de(de({},t||{}),i||{}),Object.keys(t).reduce(function(l,r){return l[r]=de(de({},t[r]),i[r]||{}),l},{})):t}function M3(t,i){return i?Object.keys(t).reduce(function(l,r){return l[r]=T3(t[r],i[r]),l},de({},t)):t}function oh(t){return{create:function(){return{get:function(i){return t[i]},set:function(i,l){t[i]=l}}}}}function N3(t){return t===void 0&&(t={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:li(function(){for(var i,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((i=Intl.NumberFormat).bind.apply(i,si([void 0],l,!1)))},{cache:oh(t.number),strategy:ri.variadic}),getDateTimeFormat:li(function(){for(var i,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((i=Intl.DateTimeFormat).bind.apply(i,si([void 0],l,!1)))},{cache:oh(t.dateTime),strategy:ri.variadic}),getPluralRules:li(function(){for(var i,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((i=Intl.PluralRules).bind.apply(i,si([void 0],l,!1)))},{cache:oh(t.pluralRules),strategy:ri.variadic})}}var x1=(function(){function t(i,l,r,o){l===void 0&&(l=t.defaultLocale);var u=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(g){var p=u.formatToParts(g);if(p.length===1)return p[0].value;var b=p.reduce(function(_,w){return!_.length||w.type!==ea.literal||typeof _[_.length-1]!="string"?_.push(w.value):_[_.length-1]+=w.value,_},[]);return b.length<=1?b[0]||"":b},this.formatToParts=function(g){return dc(u.ast,u.locales,u.formatters,u.formats,g,void 0,u.message)},this.resolvedOptions=function(){var g;return{locale:((g=u.resolvedLocale)===null||g===void 0?void 0:g.toString())||Intl.NumberFormat.supportedLocalesOf(u.locales)[0]}},this.getAst=function(){return u.ast},this.locales=l,this.resolvedLocale=t.resolveLocale(l),typeof i=="string"){if(this.message=i,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var h=o||{};h.formatters;var f=Zl(h,["formatters"]);this.ast=t.__parse(i,de(de({},f),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=M3(t.formats,r),this.formatters=o&&o.formatters||N3(this.formatterCache)}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var l=Intl.NumberFormat.supportedLocalesOf(i);return l.length>0?new Intl.Locale(l[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},t.__parse=S3,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t})(),tl;(function(t){t.FORMAT_ERROR="FORMAT_ERROR",t.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",t.INVALID_CONFIG="INVALID_CONFIG",t.MISSING_DATA="MISSING_DATA",t.MISSING_TRANSLATION="MISSING_TRANSLATION"})(tl||(tl={}));var Ms=(function(t){Ha(i,t);function i(l,r,o){var u=this,h=o?o instanceof Error?o:new Error(String(o)):void 0;return u=t.call(this,"[@formatjs/intl Error ".concat(l,"] ").concat(r,`
`).concat(h?`
`.concat(h.message,`
`).concat(h.stack):""))||this,u.code=l,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(u,i),u}return i})(Error),$3=(function(t){Ha(i,t);function i(l,r){return t.call(this,tl.UNSUPPORTED_FORMATTER,l,r)||this}return i})(Ms),O3=(function(t){Ha(i,t);function i(l,r){return t.call(this,tl.INVALID_CONFIG,l,r)||this}return i})(Ms),w0=(function(t){Ha(i,t);function i(l,r){return t.call(this,tl.MISSING_DATA,l,r)||this}return i})(Ms),Ua=(function(t){Ha(i,t);function i(l,r,o){var u=t.call(this,tl.FORMAT_ERROR,"".concat(l,`
Locale: `).concat(r,`
`),o)||this;return u.locale=r,u}return i})(Ms),ch=(function(t){Ha(i,t);function i(l,r,o,u){var h=t.call(this,"".concat(l,`
MessageID: `).concat(o?.id,`
Default Message: `).concat(o?.defaultMessage,`
Description: `).concat(o?.description,`
`),r,u)||this;return h.descriptor=o,h.locale=r,h}return i})(Ua),k3=(function(t){Ha(i,t);function i(l,r){var o=t.call(this,tl.MISSING_TRANSLATION,'Missing message: "'.concat(l.id,'" for locale "').concat(r,'", using ').concat(l.defaultMessage?"default message (".concat(typeof l.defaultMessage=="string"?l.defaultMessage:l.defaultMessage.map(function(u){var h;return(h=u.value)!==null&&h!==void 0?h:JSON.stringify(u)}).join(),")"):"id"," as fallback."))||this;return o.descriptor=l,o}return i})(Ms);function R3(t,i,l){if(l===void 0&&(l=Error),!t)throw new l(i)}function ir(t,i,l){return l===void 0&&(l={}),i.reduce(function(r,o){return o in t?r[o]=t[o]:o in l&&(r[o]=l[o]),r},{})}var D3=function(t){},L3=function(t){},w1={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:D3,onWarn:L3};function S1(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Xn(t){return{create:function(){return{get:function(i){return t[i]},set:function(i,l){t[i]=l}}}}}function z3(t){t===void 0&&(t=S1());var i=Intl.RelativeTimeFormat,l=Intl.ListFormat,r=Intl.DisplayNames,o=li(function(){for(var f,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((f=Intl.DateTimeFormat).bind.apply(f,si([void 0],g,!1)))},{cache:Xn(t.dateTime),strategy:ri.variadic}),u=li(function(){for(var f,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((f=Intl.NumberFormat).bind.apply(f,si([void 0],g,!1)))},{cache:Xn(t.number),strategy:ri.variadic}),h=li(function(){for(var f,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((f=Intl.PluralRules).bind.apply(f,si([void 0],g,!1)))},{cache:Xn(t.pluralRules),strategy:ri.variadic});return{getDateTimeFormat:o,getNumberFormat:u,getMessageFormat:li(function(f,g,p,b){return new x1(f,g,p,de({formatters:{getNumberFormat:u,getDateTimeFormat:o,getPluralRules:h}},b||{}))},{cache:Xn(t.message),strategy:ri.variadic}),getRelativeTimeFormat:li(function(){for(var f=[],g=0;g<arguments.length;g++)f[g]=arguments[g];return new(i.bind.apply(i,si([void 0],f,!1)))},{cache:Xn(t.relativeTime),strategy:ri.variadic}),getPluralRules:h,getListFormat:li(function(){for(var f=[],g=0;g<arguments.length;g++)f[g]=arguments[g];return new(l.bind.apply(l,si([void 0],f,!1)))},{cache:Xn(t.list),strategy:ri.variadic}),getDisplayNames:li(function(){for(var f=[],g=0;g<arguments.length;g++)f[g]=arguments[g];return new(r.bind.apply(r,si([void 0],f,!1)))},{cache:Xn(t.displayNames),strategy:ri.variadic})}}function Tf(t,i,l,r){var o=t&&t[i],u;if(o&&(u=o[l]),u)return u;r(new $3("No ".concat(i," format named: ").concat(l)))}function tc(t,i){return Object.keys(t).reduce(function(l,r){return l[r]=de({timeZone:i},t[r]),l},{})}function S0(t,i){var l=Object.keys(de(de({},t),i));return l.reduce(function(r,o){return r[o]=de(de({},t[o]||{}),i[o]||{}),r},{})}function E0(t,i){if(!i)return t;var l=x1.formats;return de(de(de({},l),t),{date:S0(tc(l.date,i),tc(t.date||{},i)),time:S0(tc(l.time,i),tc(t.time||{},i))})}var Yh=function(t,i,l,r,o){var u=t.locale,h=t.formats,f=t.messages,g=t.defaultLocale,p=t.defaultFormats,b=t.fallbackOnEmptyString,_=t.onError,w=t.timeZone,y=t.defaultRichTextElements;l===void 0&&(l={id:""});var S=l.id,T=l.defaultMessage;R3(!!S,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var M=String(S),A=f&&Object.prototype.hasOwnProperty.call(f,M)&&f[M];if(Array.isArray(A)&&A.length===1&&A[0].type===Ze.literal)return A[0].value;if(!r&&A&&typeof A=="string"&&!y)return A.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=de(de({},y),r||{}),h=E0(h,w),p=E0(p,w),!A){if(b===!1&&A==="")return A;if((!T||u&&u.toLowerCase()!==g.toLowerCase())&&_(new k3(l,u)),T)try{var D=i.getMessageFormat(T,g,p,o);return D.format(r)}catch(U){return _(new ch('Error formatting default message for: "'.concat(M,'", rendering default message verbatim'),u,l,U)),typeof T=="string"?T:M}return M}try{var D=i.getMessageFormat(A,u,h,de({formatters:i},o||{}));return D.format(r)}catch(U){_(new ch('Error formatting message: "'.concat(M,'", using ').concat(T?"default message":"id"," as fallback."),u,l,U))}if(T)try{var D=i.getMessageFormat(T,g,p,o);return D.format(r)}catch(U){_(new ch('Error formatting the default message for: "'.concat(M,'", rendering message verbatim'),u,l,U))}return typeof A=="string"?A:typeof T=="string"?T:M},j3=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ns(t,i,l,r){var o=t.locale,u=t.formats,h=t.onError,f=t.timeZone;r===void 0&&(r={});var g=r.format,p=de(de({},f&&{timeZone:f}),g&&Tf(u,i,g,h)),b=ir(r,j3,p);return i==="time"&&!b.hour&&!b.minute&&!b.second&&!b.timeStyle&&!b.dateStyle&&(b=de(de({},b),{hour:"numeric",minute:"numeric"})),l(o,b)}function B3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],h=u===void 0?{}:u,f=typeof o=="string"?new Date(o||0):o;try{return Ns(t,"date",i,h).format(f)}catch(g){t.onError(new Ua("Error formatting date.",t.locale,g))}return String(f)}function H3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],h=u===void 0?{}:u,f=typeof o=="string"?new Date(o||0):o;try{return Ns(t,"time",i,h).format(f)}catch(g){t.onError(new Ua("Error formatting time.",t.locale,g))}return String(f)}function U3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],h=l[2],f=h===void 0?{}:h,g=typeof o=="string"?new Date(o||0):o,p=typeof u=="string"?new Date(u||0):u;try{return Ns(t,"dateTimeRange",i,f).formatRange(g,p)}catch(b){t.onError(new Ua("Error formatting date time range.",t.locale,b))}return String(g)}function I3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],h=u===void 0?{}:u,f=typeof o=="string"?new Date(o||0):o;try{return Ns(t,"date",i,h).formatToParts(f)}catch(g){t.onError(new Ua("Error formatting date.",t.locale,g))}return[]}function P3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],h=u===void 0?{}:u,f=typeof o=="string"?new Date(o||0):o;try{return Ns(t,"time",i,h).formatToParts(f)}catch(g){t.onError(new Ua("Error formatting time.",t.locale,g))}return[]}var V3=["style","type","fallback","languageDisplay"];function F3(t,i,l,r){var o=t.locale,u=t.onError,h=Intl.DisplayNames;h||u(new En(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ui.MISSING_INTL_API));var f=ir(r,V3);try{return i(o,f).of(l)}catch(g){u(new Ua("Error formatting display name.",o,g))}}var q3=["type","style"],C0=Date.now();function G3(t){return"".concat(C0,"_").concat(t,"_").concat(C0)}function Y3(t,i,l,r){r===void 0&&(r={});var o=E1(t,i,l,r).reduce(function(u,h){var f=h.value;return typeof f!="string"?u.push(f):typeof u[u.length-1]=="string"?u[u.length-1]+=f:u.push(f),u},[]);return o.length===1?o[0]:o.length===0?"":o}function E1(t,i,l,r){var o=t.locale,u=t.onError;r===void 0&&(r={});var h=Intl.ListFormat;h||u(new En(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ui.MISSING_INTL_API));var f=ir(r,q3);try{var g={},p=Array.from(l).map(function(b,_){if(typeof b=="object"&&b!==null){var w=G3(_);return g[w]=b,w}return String(b)});return i(o,f).formatToParts(p).map(function(b){return b.type==="literal"?b:de(de({},b),{value:g[b.value]||b.value})})}catch(b){u(new Ua("Error formatting list.",o,b))}return l}var X3=["type"];function W3(t,i,l,r){var o=t.locale,u=t.onError;r===void 0&&(r={}),Intl.PluralRules||u(new En(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ui.MISSING_INTL_API));var h=ir(r,X3);try{return i(o,h).select(l)}catch(f){u(new Ua("Error formatting plural.",o,f))}return"other"}var Q3=["numeric","style"];function Z3(t,i,l){var r=t.locale,o=t.formats,u=t.onError;l===void 0&&(l={});var h=l.format,f=!!h&&Tf(o,"relative",h,u)||{},g=ir(l,Q3,f);return i(r,g)}function K3(t,i,l,r,o){o===void 0&&(o={}),r||(r="second");var u=Intl.RelativeTimeFormat;u||t.onError(new En(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ui.MISSING_INTL_API));try{return Z3(t,i,o).format(l,r)}catch(h){t.onError(new Ua("Error formatting relative time.",t.locale,h))}return String(l)}var J3=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function C1(t,i,l){var r=t.locale,o=t.formats,u=t.onError;l===void 0&&(l={});var h=l.format,f=h&&Tf(o,"number",h,u)||{},g=ir(l,J3,f);return i(r,g)}function e4(t,i,l,r){r===void 0&&(r={});try{return C1(t,i,r).format(l)}catch(o){t.onError(new Ua("Error formatting number.",t.locale,o))}return String(l)}function t4(t,i,l,r){r===void 0&&(r={});try{return C1(t,i,r).formatToParts(l)}catch(o){t.onError(new Ua("Error formatting number.",t.locale,o))}return[]}function a4(t){var i=t?t[Object.keys(t)[0]]:void 0;return typeof i=="string"}function i4(t){t.onWarn&&t.defaultRichTextElements&&a4(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function n4(t,i){var l=z3(i),r=de(de({},w1),t),o=r.locale,u=r.defaultLocale,h=r.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&h?h(new w0('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&h&&h(new w0('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(h&&h(new O3('"locale" was not configured, using "'.concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),i4(r),de(de({},r),{formatters:l,formatNumber:e4.bind(null,r,l.getNumberFormat),formatNumberToParts:t4.bind(null,r,l.getNumberFormat),formatRelativeTime:K3.bind(null,r,l.getRelativeTimeFormat),formatDate:B3.bind(null,r,l.getDateTimeFormat),formatDateToParts:I3.bind(null,r,l.getDateTimeFormat),formatTime:H3.bind(null,r,l.getDateTimeFormat),formatDateTimeRange:U3.bind(null,r,l.getDateTimeFormat),formatTimeToParts:P3.bind(null,r,l.getDateTimeFormat),formatPlural:W3.bind(null,r,l.getPluralRules),formatMessage:Yh.bind(null,r,l),$t:Yh.bind(null,r,l),formatList:Y3.bind(null,r,l.getListFormat),formatListToParts:E1.bind(null,r,l.getListFormat),formatDisplayName:F3.bind(null,r,l.getDisplayNames)})}function l4(t,i,l){if(l===void 0&&(l=Error),!t)throw new l(i)}function A1(t){l4(t,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var T1=de(de({},w1),{textComponent:k.Fragment}),r4=function(t,i){return k.isValidElement(t)?k.cloneElement(t,{key:i}):t},M1=function(t){var i;return(i=k.Children.map(t,r4))!==null&&i!==void 0?i:[]};function s4(t){return function(i){return t(M1(i))}}function Xh(t,i){if(t===i)return!0;if(!t||!i)return!1;var l=Object.keys(t),r=Object.keys(i),o=l.length;if(r.length!==o)return!1;for(var u=0;u<o;u++){var h=l[u];if(t[h]!==i[h]||!Object.prototype.hasOwnProperty.call(i,h))return!1}return!0}var uh={exports:{}},He={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function o4(){if(A0)return He;A0=1;var t=typeof Symbol=="function"&&Symbol.for,i=t?Symbol.for("react.element"):60103,l=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,h=t?Symbol.for("react.provider"):60109,f=t?Symbol.for("react.context"):60110,g=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,b=t?Symbol.for("react.forward_ref"):60112,_=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,S=t?Symbol.for("react.lazy"):60116,T=t?Symbol.for("react.block"):60121,M=t?Symbol.for("react.fundamental"):60117,A=t?Symbol.for("react.responder"):60118,D=t?Symbol.for("react.scope"):60119;function U($){if(typeof $=="object"&&$!==null){var W=$.$$typeof;switch(W){case i:switch($=$.type,$){case g:case p:case r:case u:case o:case _:return $;default:switch($=$&&$.$$typeof,$){case f:case b:case S:case y:case h:return $;default:return W}}case l:return W}}}function j($){return U($)===p}return He.AsyncMode=g,He.ConcurrentMode=p,He.ContextConsumer=f,He.ContextProvider=h,He.Element=i,He.ForwardRef=b,He.Fragment=r,He.Lazy=S,He.Memo=y,He.Portal=l,He.Profiler=u,He.StrictMode=o,He.Suspense=_,He.isAsyncMode=function($){return j($)||U($)===g},He.isConcurrentMode=j,He.isContextConsumer=function($){return U($)===f},He.isContextProvider=function($){return U($)===h},He.isElement=function($){return typeof $=="object"&&$!==null&&$.$$typeof===i},He.isForwardRef=function($){return U($)===b},He.isFragment=function($){return U($)===r},He.isLazy=function($){return U($)===S},He.isMemo=function($){return U($)===y},He.isPortal=function($){return U($)===l},He.isProfiler=function($){return U($)===u},He.isStrictMode=function($){return U($)===o},He.isSuspense=function($){return U($)===_},He.isValidElementType=function($){return typeof $=="string"||typeof $=="function"||$===r||$===p||$===u||$===o||$===_||$===w||typeof $=="object"&&$!==null&&($.$$typeof===S||$.$$typeof===y||$.$$typeof===h||$.$$typeof===f||$.$$typeof===b||$.$$typeof===M||$.$$typeof===A||$.$$typeof===D||$.$$typeof===T)},He.typeOf=U,He}var T0;function c4(){return T0||(T0=1,uh.exports=o4()),uh.exports}var dh,M0;function u4(){if(M0)return dh;M0=1;var t=c4(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[t.ForwardRef]=r,u[t.Memo]=o;function h(S){return t.isMemo(S)?o:u[S.$$typeof]||i}var f=Object.defineProperty,g=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,w=Object.prototype;function y(S,T,M){if(typeof T!="string"){if(w){var A=_(T);A&&A!==w&&y(S,A,M)}var D=g(T);p&&(D=D.concat(p(T)));for(var U=h(S),j=h(T),$=0;$<D.length;++$){var W=D[$];if(!l[W]&&!(M&&M[W])&&!(j&&j[W])&&!(U&&U[W])){var X=b(T,W);try{f(S,W,X)}catch{}}}}return S}return dh=y,dh}u4();var Mf=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=k.createContext(null)):k.createContext(null);Mf.Consumer;var d4=Mf.Provider,h4=d4,f4=Mf;function Ne(){var t=k.useContext(f4);return A1(t),t}var Wh;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(Wh||(Wh={}));var Qh;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(Qh||(Qh={}));function N1(t){var i=function(l){var r=Ne(),o=l.value,u=l.children,h=Zl(l,["value","children"]),f=typeof o=="string"?new Date(o||0):o,g=t==="formatDate"?r.formatDateToParts(f,h):r.formatTimeToParts(f,h);return u(g)};return i.displayName=Qh[t],i}function $s(t){var i=function(l){var r=Ne(),o=l.value,u=l.children,h=Zl(l,["value","children"]),f=r[t](o,h);if(typeof u=="function")return u(f);var g=r.textComponent||k.Fragment;return k.createElement(g,null,f)};return i.displayName=Wh[t],i}function $1(t){return t&&Object.keys(t).reduce(function(i,l){var r=t[l];return i[l]=_1(r)?s4(r):r,i},{})}var N0=function(t,i,l,r){for(var o=[],u=4;u<arguments.length;u++)o[u-4]=arguments[u];var h=$1(r),f=Yh.apply(void 0,si([t,i,l,h],o,!1));return Array.isArray(f)?M1(f):f},$0=function(t,i){var l=t.defaultRichTextElements,r=Zl(t,["defaultRichTextElements"]),o=$1(l),u=n4(de(de(de({},T1),r),{defaultRichTextElements:o}),i),h={locale:u.locale,timeZone:u.timeZone,fallbackOnEmptyString:u.fallbackOnEmptyString,formats:u.formats,defaultLocale:u.defaultLocale,defaultFormats:u.defaultFormats,messages:u.messages,onError:u.onError,defaultRichTextElements:o};return de(de({},u),{formatMessage:N0.bind(null,h,u.formatters),$t:N0.bind(null,h,u.formatters)})};function p4(t,i){var l=t.values,r=Zl(t,["values"]),o=i.values,u=Zl(i,["values"]);return Xh(o,l)&&Xh(r,u)}function O1(t){var i=Ne(),l=i.formatMessage,r=i.textComponent,o=r===void 0?k.Fragment:r,u=t.id,h=t.description,f=t.defaultMessage,g=t.values,p=t.children,b=t.tagName,_=b===void 0?o:b,w=t.ignoreTag,y={id:u,description:h,defaultMessage:f},S=l(y,g,{ignoreTag:w});return typeof p=="function"?p(Array.isArray(S)?S:[S]):_?k.createElement(_,null,S):k.createElement(k.Fragment,null,S)}O1.displayName="FormattedMessage";var ie=k.memo(O1,p4);ie.displayName="MemoizedFormattedMessage";function hh(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var k1=(function(t){Ha(i,t);function i(){var l=t!==null&&t.apply(this,arguments)||this;return l.cache=S1(),l.state={cache:l.cache,intl:$0(hh(l.props),l.cache),prevConfig:hh(l.props)},l}return i.getDerivedStateFromProps=function(l,r){var o=r.prevConfig,u=r.cache,h=hh(l);return Xh(o,h)?null:{intl:$0(h,u),prevConfig:h}},i.prototype.render=function(){return A1(this.state.intl),k.createElement(h4,{value:this.state.intl},this.props.children)},i.displayName="IntlProvider",i.defaultProps=T1,i})(k.PureComponent);$s("formatDate");$s("formatTime");$s("formatNumber");$s("formatList");$s("formatDisplayName");N1("formatDate");N1("formatTime");var m4=ht`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,St=class extends tt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,i=t?yc`a`:yc`button`;return uc`
      <${i}
        part="base"
        class=${ot({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${ve(t?void 0:this.disabled)}
        type=${ve(t?void 0:"button")}
        href=${ve(t?this.href:void 0)}
        target=${ve(t?this.target:void 0)}
        download=${ve(t?this.download:void 0)}
        rel=${ve(t&&this.target?"noreferrer noopener":void 0)}
        role=${ve(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${ve(this.name)}
          library=${ve(this.library)}
          src=${ve(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${i}>
    `}};St.styles=[wt,m4];St.dependencies={"sl-icon":Ut};C([Ie(".icon-button")],St.prototype,"button",2);C([ft()],St.prototype,"hasFocus",2);C([B()],St.prototype,"name",2);C([B()],St.prototype,"library",2);C([B()],St.prototype,"src",2);C([B()],St.prototype,"href",2);C([B()],St.prototype,"target",2);C([B()],St.prototype,"download",2);C([B()],St.prototype,"label",2);C([B({type:Boolean,reflect:!0})],St.prototype,"disabled",2);var g4="sl-icon-button";St.define("sl-icon-button");var v4=Xt({tagName:g4,elementClass:St,react:Ht,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),kt=v4;const b4="_header_c0rsb_1",y4="_logo_c0rsb_30",fh={header:b4,logo:y4};function pi({headerActions:t,showBackButton:i=!1,onBack:l}){const r=Ne(),o=Yt(),u=()=>{l?l():o(-1)};return m.jsxs("header",{className:fh.header,children:[i?m.jsx(kt,{name:"chevron-left",label:r.formatMessage({id:"navigation.back"}),onClick:u}):m.jsx("div",{"data-testid":"header-logo",className:fh.logo}),m.jsx("div",{className:fh.actions,children:t})]})}function Nf(t,i,l){const r=Jn(t,l?.in);return isNaN(i)?Kl(t,NaN):(i&&r.setDate(r.getDate()+i),r)}function _4(t,i,l){const r=Jn(t,l?.in);if(isNaN(i))return Kl(t,NaN);const o=r.getDate(),u=Kl(t,r.getTime());u.setMonth(r.getMonth()+i+1,0);const h=u.getDate();return o>=h?u:(r.setFullYear(u.getFullYear(),u.getMonth(),o),r)}function $f(t,i,l){return Nf(t,i*7,l)}function x4(t,i,l){return _4(t,i*12,l)}function w4(t){return Kl(t,Date.now())}function R1(t,i,l){const[r,o]=W2(l?.in,t,i);return+Th(r)==+Th(o)}function hc(t,i){return+Jn(t)<+Jn(i)}function S4(t){return+Jn(t)>Date.now()}function E4(t,i){return R1(Kl(t,t),w4(t))}function Of(t,i){const l=()=>Kl(i?.in,NaN),o=M4(t);let u;if(o.date){const p=N4(o.date,2);u=$4(p.restDateString,p.year)}if(!u||isNaN(+u))return l();const h=+u;let f=0,g;if(o.time&&(f=O4(o.time),isNaN(f)))return l();if(o.timezone){if(g=k4(o.timezone),isNaN(g))return l()}else{const p=new Date(h+f),b=Jn(0,i?.in);return b.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),b.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),b}return Jn(h+f+g,i?.in)}const ac={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},C4=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,A4=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,T4=/^([+-])(\d{2})(?::?(\d{2}))?$/;function M4(t){const i={},l=t.split(ac.dateTimeDelimiter);let r;if(l.length>2)return i;if(/:/.test(l[0])?r=l[0]:(i.date=l[0],r=l[1],ac.timeZoneDelimiter.test(i.date)&&(i.date=t.split(ac.timeZoneDelimiter)[0],r=t.substr(i.date.length,t.length))),r){const o=ac.timezone.exec(r);o?(i.time=r.replace(o[1],""),i.timezone=o[1]):i.time=r}return i}function N4(t,i){const l=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+i)+"})|(\\d{2}|[+-]\\d{"+(2+i)+"})$)"),r=t.match(l);if(!r)return{year:NaN,restDateString:""};const o=r[1]?parseInt(r[1]):null,u=r[2]?parseInt(r[2]):null;return{year:u===null?o:u*100,restDateString:t.slice((r[1]||r[2]).length)}}function $4(t,i){if(i===null)return new Date(NaN);const l=t.match(C4);if(!l)return new Date(NaN);const r=!!l[4],o=us(l[1]),u=us(l[2])-1,h=us(l[3]),f=us(l[4]),g=us(l[5])-1;if(r)return j4(i,f,g)?R4(i,f,g):new Date(NaN);{const p=new Date(0);return!L4(i,u,h)||!z4(i,o)?new Date(NaN):(p.setUTCFullYear(i,u,Math.max(o,h)),p)}}function us(t){return t?parseInt(t):1}function O4(t){const i=t.match(A4);if(!i)return NaN;const l=ph(i[1]),r=ph(i[2]),o=ph(i[3]);return B4(l,r,o)?l*mb+r*gb+o*1e3:NaN}function ph(t){return t&&parseFloat(t.replace(",","."))||0}function k4(t){if(t==="Z")return 0;const i=t.match(T4);if(!i)return 0;const l=i[1]==="+"?-1:1,r=parseInt(i[2]),o=i[3]&&parseInt(i[3])||0;return H4(r,o)?l*(r*mb+o*gb):NaN}function R4(t,i,l){const r=new Date(0);r.setUTCFullYear(t,0,4);const o=r.getUTCDay()||7,u=(i-1)*7+l+1-o;return r.setUTCDate(r.getUTCDate()+u),r}const D4=[31,null,31,30,31,30,31,31,30,31,30,31];function D1(t){return t%400===0||t%4===0&&t%100!==0}function L4(t,i,l){return i>=0&&i<=11&&l>=1&&l<=(D4[i]||(D1(t)?29:28))}function z4(t,i){return i>=1&&i<=(D1(t)?366:365)}function j4(t,i,l){return i>=1&&i<=53&&l>=0&&l<=6}function B4(t,i,l){return t===24?i===0&&l===0:l>=0&&l<60&&i>=0&&i<60&&t>=0&&t<25}function H4(t,i){return i>=0&&i<=59}function U4(t,i,l){return $f(t,-1,l)}function O0(t,i,l){return x4(t,-13,l)}const I4=Ov.default||Ov;async function P4(t,i,l){const{value:r}=await Mh.canShare();if(!r){console.warn("Sharing is not available on this device.");return}const o=document.getElementById(t);if(!o){console.error(`Element with ID "${t}" not found.`);return}const u=o.querySelector(".hide-for-sharing");u&&(u.style.visibility="hidden");const h=document.createElement("div");h.style.position="absolute",h.style.left="-9999px",h.style.top="0",h.style.overflow="visible",h.style.height="auto",h.style.width="auto",h.style.maxHeight="none",h.style.maxWidth="none";const f=o.cloneNode(!0);f.style.width="auto",f.style.height="auto",f.style.maxHeight="none",f.style.overflow="visible";const g=f.querySelector(".weekGroup");g&&(g.style.overflow="visible",g.style.height="auto",g.style.width="auto",g.style.maxHeight="none",g.style.maxWidth="none"),h.appendChild(f),document.body.appendChild(h);try{const b=(await I4(h,{useCORS:!0,scale:2})).toDataURL("image/png");if(xt.isNativePlatform()){const _=await Q2.writeFile({path:`share-${Date.now()}.png`,data:b,directory:Z2.Cache});await Mh.share({title:i,text:l,files:[_.uri]})}else{const _=await(await fetch(b)).blob(),w=new File([_],"roster.png",{type:"image/png"}),y={title:i,text:l,files:[w]};if(navigator.canShare&&navigator.canShare(y))await navigator.share(y);else{const S=document.createElement("a");S.href=b,S.download=`roster-${Date.now()}.png`,document.body.appendChild(S),S.click(),document.body.removeChild(S)}}}catch(p){console.error("Could not share image:",p)}finally{u&&(u.style.visibility="visible"),document.body.removeChild(h)}}async function V4(t,i,l,r){const o=xt.isNativePlatform()?"https://ismyhorse.com":window.location.origin;await Mh.share({title:i,text:l,url:`${o}${t}`,dialogTitle:r})}const F4=async()=>{if(xt.isNativePlatform())try{return(await K2.getPhoto({quality:90,allowEditing:!1,resultType:ex.DataUrl,source:J2.Prompt})).dataUrl??null}catch{return null}return new Promise(t=>{const i=document.createElement("input");i.type="file",i.accept="image/*",i.style.display="none";const l=()=>{document.body.contains(i)&&document.body.removeChild(i)};i.onchange=()=>{const r=i.files?.[0];if(r){const o=new FileReader;o.onload=u=>{t(u.target?.result),l()},o.onerror=()=>{t(null),l()},o.readAsDataURL(r)}else t(null),l()},i.oncancel=()=>{t(null),l()},document.body.appendChild(i),i.click()})};var q4=ht`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*kf(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*iw(kf(t.shadowRoot.activeElement))))}function G4(){return[...kf()].pop()}var k0=new WeakMap;function L1(t){let i=k0.get(t);return i||(i=window.getComputedStyle(t,null),k0.set(t,i)),i}function Y4(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const i=L1(t);return i.visibility!=="hidden"&&i.display!=="none"}function X4(t){const i=L1(t),{overflowY:l,overflowX:r}=i;return l==="scroll"||r==="scroll"?!0:l!=="auto"||r!=="auto"?!1:t.scrollHeight>t.clientHeight&&l==="auto"||t.scrollWidth>t.clientWidth&&r==="auto"}function W4(t){const i=t.tagName.toLowerCase(),l=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(l)||l<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(i==="input"&&t.getAttribute("type")==="radio"){const u=t.getRootNode(),h=`input[type='radio'][name="${t.getAttribute("name")}"]`,f=u.querySelector(`${h}:checked`);return f?f===t:u.querySelector(h)===t}return Y4(t)?(i==="audio"||i==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(i)?!0:X4(t):!1}function Q4(t,i){var l;return((l=t.getRootNode({composed:!0}))==null?void 0:l.host)!==i}function R0(t){const i=new WeakMap,l=[];function r(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||i.has(o))return;i.set(o,!0),!l.includes(o)&&W4(o)&&l.push(o),o instanceof HTMLSlotElement&&Q4(o,t)&&o.assignedElements({flatten:!0}).forEach(u=>{r(u)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&r(o.shadowRoot)}for(const u of o.children)r(u)}return r(t),l.sort((o,u)=>{const h=Number(o.getAttribute("tabindex"))||0;return(Number(u.getAttribute("tabindex"))||0)-h})}var ds=[],z1=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{var l;if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=G4();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=R0(this.element);let u=o.findIndex(f=>f===r);this.previousFocus=this.currentFocus;const h=this.tabDirection==="forward"?1:-1;for(;;){u+h>=o.length?u=0:u+h<0?u=o.length-1:u+=h,this.previousFocus=this.currentFocus;const f=o[u];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||f&&this.possiblyHasTabbableChildren(f))return;i.preventDefault(),this.currentFocus=f,(l=this.currentFocus)==null||l.focus({preventScroll:!1});const g=[...kf()];if(g.includes(this.currentFocus)||!g.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){ds.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ds=ds.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ds[ds.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=R0(this.element);if(!this.element.matches(":focus-within")){const i=t[0],l=t[t.length-1],r=this.tabDirection==="forward"?i:l;typeof r?.focus=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function Z4(t,i){return{top:Math.round(t.getBoundingClientRect().top-i.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-i.getBoundingClientRect().left)}}var Zh=new Set;function K4(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function J4(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function _s(t){if(Zh.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const i=K4()+J4();let l=getComputedStyle(document.documentElement).scrollbarGutter;(!l||l==="auto")&&(l="stable"),i<2&&(l=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",l),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${i}px`)}}function xs(t){Zh.delete(t),Zh.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Kh(t,i,l="vertical",r="smooth"){const o=Z4(t,i),u=o.top+i.scrollTop,h=o.left+i.scrollLeft,f=i.scrollLeft,g=i.scrollLeft+i.offsetWidth,p=i.scrollTop,b=i.scrollTop+i.offsetHeight;(l==="horizontal"||l==="both")&&(h<f?i.scrollTo({left:h,behavior:r}):h+t.clientWidth>g&&i.scrollTo({left:h-i.offsetWidth+t.clientWidth,behavior:r})),(l==="vertical"||l==="both")&&(u<p?i.scrollTo({top:u,behavior:r}):u+t.clientHeight>b&&i.scrollTo({top:u-i.offsetHeight+t.clientHeight,behavior:r}))}var j1=t=>{var i;const{activeElement:l}=document;l&&t.contains(l)&&((i=document.activeElement)==null||i.blur())},B1=new Map,e5=new WeakMap;function t5(t){return t??{keyframes:[],options:{duration:0}}}function D0(t,i){return i.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function bt(t,i){B1.set(t,t5(i))}function ra(t,i,l){const r=e5.get(t);if(r?.[i])return D0(r[i],l.dir);const o=B1.get(i);return o?D0(o,l.dir):{keyframes:[],options:{duration:0}}}function yn(t,i){return new Promise(l=>{function r(o){o.target===t&&(t.removeEventListener(i,r),l())}t.addEventListener(i,r)})}function sa(t,i,l){return new Promise(r=>{if(l?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(i,As(Ui({},l),{duration:a5()?0:l.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function a5(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ba(t){return Promise.all(t.getAnimations().map(i=>new Promise(l=>{i.cancel(),requestAnimationFrame(l)})))}function L0(t,i){return t.map(l=>As(Ui({},l),{height:l.height==="auto"?`${i}px`:l.height}))}function z0(t){return t.charAt(0).toUpperCase()+t.slice(1)}var oa=class extends tt{constructor(){super(...arguments),this.hasSlotController=new il(this,"footer"),this.localize=new xa(this),this.modal=new z1(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),_s(this)))}disconnectedCallback(){super.disconnectedCallback(),xs(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const l=ra(this,"drawer.denyClose",{dir:this.localize.dir()});sa(this.panel,l.keyframes,l.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),_s(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ba(this.drawer),Ba(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const i=ra(this,`drawer.show${z0(this.placement)}`,{dir:this.localize.dir()}),l=ra(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([sa(this.panel,i.keyframes,i.options),sa(this.overlay,l.keyframes,l.options)]),this.emit("sl-after-show")}else{j1(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),xs(this)),await Promise.all([Ba(this.drawer),Ba(this.overlay)]);const t=ra(this,`drawer.hide${z0(this.placement)}`,{dir:this.localize.dir()}),i=ra(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([sa(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),sa(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const l=this.originalTrigger;typeof l?.focus=="function"&&setTimeout(()=>l.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),_s(this)),this.open&&this.contained&&(this.modal.deactivate(),xs(this))}async show(){if(!this.open)return this.open=!0,yn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,yn(this,"sl-after-hide")}render(){return xe`
      <div
        part="base"
        class=${ot({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ve(this.noHeader?this.label:void 0)}
          aria-labelledby=${ve(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":xe`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};oa.styles=[wt,q4];oa.dependencies={"sl-icon-button":St};C([Ie(".drawer")],oa.prototype,"drawer",2);C([Ie(".drawer__panel")],oa.prototype,"panel",2);C([Ie(".drawer__overlay")],oa.prototype,"overlay",2);C([B({type:Boolean,reflect:!0})],oa.prototype,"open",2);C([B({reflect:!0})],oa.prototype,"label",2);C([B({reflect:!0})],oa.prototype,"placement",2);C([B({type:Boolean,reflect:!0})],oa.prototype,"contained",2);C([B({attribute:"no-header",type:Boolean,reflect:!0})],oa.prototype,"noHeader",2);C([qe("open",{waitUntilFirstUpdate:!0})],oa.prototype,"handleOpenChange",1);C([qe("contained",{waitUntilFirstUpdate:!0})],oa.prototype,"handleNoModalChange",1);bt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});bt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});bt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});bt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});bt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});bt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});bt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});bt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});bt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});bt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});bt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var i5="sl-drawer";oa.define("sl-drawer");var n5=Xt({tagName:i5,elementClass:oa,react:Ht,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"}),mi=n5,l5=ht`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,nl=class extends tt{constructor(){super(...arguments),this.localize=new xa(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return xe`
      <span
        part="base"
        class=${ot({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?xe`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};nl.styles=[wt,l5];nl.dependencies={"sl-icon-button":St};C([B({reflect:!0})],nl.prototype,"variant",2);C([B({reflect:!0})],nl.prototype,"size",2);C([B({type:Boolean,reflect:!0})],nl.prototype,"pill",2);C([B({type:Boolean})],nl.prototype,"removable",2);var r5=ht`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,Rc=ht`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,s5=ht`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const _n=Math.min,ya=Math.max,_c=Math.round,ic=Math.floor,oi=t=>({x:t,y:t}),o5={left:"right",right:"left",bottom:"top",top:"bottom"},c5={start:"end",end:"start"};function Jh(t,i,l){return ya(t,_n(i,l))}function nr(t,i){return typeof t=="function"?t(i):t}function xn(t){return t.split("-")[0]}function lr(t){return t.split("-")[1]}function H1(t){return t==="x"?"y":"x"}function Rf(t){return t==="y"?"height":"width"}const u5=new Set(["top","bottom"]);function ji(t){return u5.has(xn(t))?"y":"x"}function Df(t){return H1(ji(t))}function d5(t,i,l){l===void 0&&(l=!1);const r=lr(t),o=Df(t),u=Rf(o);let h=o==="x"?r===(l?"end":"start")?"right":"left":r==="start"?"bottom":"top";return i.reference[u]>i.floating[u]&&(h=xc(h)),[h,xc(h)]}function h5(t){const i=xc(t);return[ef(t),i,ef(i)]}function ef(t){return t.replace(/start|end/g,i=>c5[i])}const j0=["left","right"],B0=["right","left"],f5=["top","bottom"],p5=["bottom","top"];function m5(t,i,l){switch(t){case"top":case"bottom":return l?i?B0:j0:i?j0:B0;case"left":case"right":return i?f5:p5;default:return[]}}function g5(t,i,l,r){const o=lr(t);let u=m5(xn(t),l==="start",r);return o&&(u=u.map(h=>h+"-"+o),i&&(u=u.concat(u.map(ef)))),u}function xc(t){return t.replace(/left|right|bottom|top/g,i=>o5[i])}function v5(t){return{top:0,right:0,bottom:0,left:0,...t}}function U1(t){return typeof t!="number"?v5(t):{top:t,right:t,bottom:t,left:t}}function wc(t){const{x:i,y:l,width:r,height:o}=t;return{width:r,height:o,top:l,left:i,right:i+r,bottom:l+o,x:i,y:l}}function H0(t,i,l){let{reference:r,floating:o}=t;const u=ji(i),h=Df(i),f=Rf(h),g=xn(i),p=u==="y",b=r.x+r.width/2-o.width/2,_=r.y+r.height/2-o.height/2,w=r[f]/2-o[f]/2;let y;switch(g){case"top":y={x:b,y:r.y-o.height};break;case"bottom":y={x:b,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:_};break;case"left":y={x:r.x-o.width,y:_};break;default:y={x:r.x,y:r.y}}switch(lr(i)){case"start":y[h]-=w*(l&&p?-1:1);break;case"end":y[h]+=w*(l&&p?-1:1);break}return y}const b5=async(t,i,l)=>{const{placement:r="bottom",strategy:o="absolute",middleware:u=[],platform:h}=l,f=u.filter(Boolean),g=await(h.isRTL==null?void 0:h.isRTL(i));let p=await h.getElementRects({reference:t,floating:i,strategy:o}),{x:b,y:_}=H0(p,r,g),w=r,y={},S=0;for(let T=0;T<f.length;T++){const{name:M,fn:A}=f[T],{x:D,y:U,data:j,reset:$}=await A({x:b,y:_,initialPlacement:r,placement:w,strategy:o,middlewareData:y,rects:p,platform:h,elements:{reference:t,floating:i}});b=D??b,_=U??_,y={...y,[M]:{...y[M],...j}},$&&S<=50&&(S++,typeof $=="object"&&($.placement&&(w=$.placement),$.rects&&(p=$.rects===!0?await h.getElementRects({reference:t,floating:i,strategy:o}):$.rects),{x:b,y:_}=H0(p,w,g)),T=-1)}return{x:b,y:_,placement:w,strategy:o,middlewareData:y}};async function Lf(t,i){var l;i===void 0&&(i={});const{x:r,y:o,platform:u,rects:h,elements:f,strategy:g}=t,{boundary:p="clippingAncestors",rootBoundary:b="viewport",elementContext:_="floating",altBoundary:w=!1,padding:y=0}=nr(i,t),S=U1(y),M=f[w?_==="floating"?"reference":"floating":_],A=wc(await u.getClippingRect({element:(l=await(u.isElement==null?void 0:u.isElement(M)))==null||l?M:M.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(f.floating)),boundary:p,rootBoundary:b,strategy:g})),D=_==="floating"?{x:r,y:o,width:h.floating.width,height:h.floating.height}:h.reference,U=await(u.getOffsetParent==null?void 0:u.getOffsetParent(f.floating)),j=await(u.isElement==null?void 0:u.isElement(U))?await(u.getScale==null?void 0:u.getScale(U))||{x:1,y:1}:{x:1,y:1},$=wc(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:D,offsetParent:U,strategy:g}):D);return{top:(A.top-$.top+S.top)/j.y,bottom:($.bottom-A.bottom+S.bottom)/j.y,left:(A.left-$.left+S.left)/j.x,right:($.right-A.right+S.right)/j.x}}const y5=t=>({name:"arrow",options:t,async fn(i){const{x:l,y:r,placement:o,rects:u,platform:h,elements:f,middlewareData:g}=i,{element:p,padding:b=0}=nr(t,i)||{};if(p==null)return{};const _=U1(b),w={x:l,y:r},y=Df(o),S=Rf(y),T=await h.getDimensions(p),M=y==="y",A=M?"top":"left",D=M?"bottom":"right",U=M?"clientHeight":"clientWidth",j=u.reference[S]+u.reference[y]-w[y]-u.floating[S],$=w[y]-u.reference[y],W=await(h.getOffsetParent==null?void 0:h.getOffsetParent(p));let X=W?W[U]:0;(!X||!await(h.isElement==null?void 0:h.isElement(W)))&&(X=f.floating[U]||u.floating[S]);const oe=j/2-$/2,z=X/2-T[S]/2-1,q=_n(_[A],z),J=_n(_[D],z),ae=q,Q=X-T[S]-J,le=X/2-T[S]/2+oe,te=Jh(ae,le,Q),I=!g.arrow&&lr(o)!=null&&le!==te&&u.reference[S]/2-(le<ae?q:J)-T[S]/2<0,Z=I?le<ae?le-ae:le-Q:0;return{[y]:w[y]+Z,data:{[y]:te,centerOffset:le-te-Z,...I&&{alignmentOffset:Z}},reset:I}}}),_5=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(i){var l,r;const{placement:o,middlewareData:u,rects:h,initialPlacement:f,platform:g,elements:p}=i,{mainAxis:b=!0,crossAxis:_=!0,fallbackPlacements:w,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:T=!0,...M}=nr(t,i);if((l=u.arrow)!=null&&l.alignmentOffset)return{};const A=xn(o),D=ji(f),U=xn(f)===f,j=await(g.isRTL==null?void 0:g.isRTL(p.floating)),$=w||(U||!T?[xc(f)]:h5(f)),W=S!=="none";!w&&W&&$.push(...g5(f,T,S,j));const X=[f,...$],oe=await Lf(i,M),z=[];let q=((r=u.flip)==null?void 0:r.overflows)||[];if(b&&z.push(oe[A]),_){const le=d5(o,h,j);z.push(oe[le[0]],oe[le[1]])}if(q=[...q,{placement:o,overflows:z}],!z.every(le=>le<=0)){var J,ae;const le=(((J=u.flip)==null?void 0:J.index)||0)+1,te=X[le];if(te&&(!(_==="alignment"?D!==ji(te):!1)||q.every(ee=>ji(ee.placement)===D?ee.overflows[0]>0:!0)))return{data:{index:le,overflows:q},reset:{placement:te}};let I=(ae=q.filter(Z=>Z.overflows[0]<=0).sort((Z,ee)=>Z.overflows[1]-ee.overflows[1])[0])==null?void 0:ae.placement;if(!I)switch(y){case"bestFit":{var Q;const Z=(Q=q.filter(ee=>{if(W){const ce=ji(ee.placement);return ce===D||ce==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(ce=>ce>0).reduce((ce,ye)=>ce+ye,0)]).sort((ee,ce)=>ee[1]-ce[1])[0])==null?void 0:Q[0];Z&&(I=Z);break}case"initialPlacement":I=f;break}if(o!==I)return{reset:{placement:I}}}return{}}}},x5=new Set(["left","top"]);async function w5(t,i){const{placement:l,platform:r,elements:o}=t,u=await(r.isRTL==null?void 0:r.isRTL(o.floating)),h=xn(l),f=lr(l),g=ji(l)==="y",p=x5.has(h)?-1:1,b=u&&g?-1:1,_=nr(i,t);let{mainAxis:w,crossAxis:y,alignmentAxis:S}=typeof _=="number"?{mainAxis:_,crossAxis:0,alignmentAxis:null}:{mainAxis:_.mainAxis||0,crossAxis:_.crossAxis||0,alignmentAxis:_.alignmentAxis};return f&&typeof S=="number"&&(y=f==="end"?S*-1:S),g?{x:y*b,y:w*p}:{x:w*p,y:y*b}}const S5=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(i){var l,r;const{x:o,y:u,placement:h,middlewareData:f}=i,g=await w5(i,t);return h===((l=f.offset)==null?void 0:l.placement)&&(r=f.arrow)!=null&&r.alignmentOffset?{}:{x:o+g.x,y:u+g.y,data:{...g,placement:h}}}}},E5=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(i){const{x:l,y:r,placement:o}=i,{mainAxis:u=!0,crossAxis:h=!1,limiter:f={fn:M=>{let{x:A,y:D}=M;return{x:A,y:D}}},...g}=nr(t,i),p={x:l,y:r},b=await Lf(i,g),_=ji(xn(o)),w=H1(_);let y=p[w],S=p[_];if(u){const M=w==="y"?"top":"left",A=w==="y"?"bottom":"right",D=y+b[M],U=y-b[A];y=Jh(D,y,U)}if(h){const M=_==="y"?"top":"left",A=_==="y"?"bottom":"right",D=S+b[M],U=S-b[A];S=Jh(D,S,U)}const T=f.fn({...i,[w]:y,[_]:S});return{...T,data:{x:T.x-l,y:T.y-r,enabled:{[w]:u,[_]:h}}}}}},C5=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(i){var l,r;const{placement:o,rects:u,platform:h,elements:f}=i,{apply:g=()=>{},...p}=nr(t,i),b=await Lf(i,p),_=xn(o),w=lr(o),y=ji(o)==="y",{width:S,height:T}=u.floating;let M,A;_==="top"||_==="bottom"?(M=_,A=w===(await(h.isRTL==null?void 0:h.isRTL(f.floating))?"start":"end")?"left":"right"):(A=_,M=w==="end"?"top":"bottom");const D=T-b.top-b.bottom,U=S-b.left-b.right,j=_n(T-b[M],D),$=_n(S-b[A],U),W=!i.middlewareData.shift;let X=j,oe=$;if((l=i.middlewareData.shift)!=null&&l.enabled.x&&(oe=U),(r=i.middlewareData.shift)!=null&&r.enabled.y&&(X=D),W&&!w){const q=ya(b.left,0),J=ya(b.right,0),ae=ya(b.top,0),Q=ya(b.bottom,0);y?oe=S-2*(q!==0||J!==0?q+J:ya(b.left,b.right)):X=T-2*(ae!==0||Q!==0?ae+Q:ya(b.top,b.bottom))}await g({...i,availableWidth:oe,availableHeight:X});const z=await h.getDimensions(f.floating);return S!==z.width||T!==z.height?{reset:{rects:!0}}:{}}}};function Dc(){return typeof window<"u"}function rr(t){return I1(t)?(t.nodeName||"").toLowerCase():"#document"}function _a(t){var i;return(t==null||(i=t.ownerDocument)==null?void 0:i.defaultView)||window}function gi(t){var i;return(i=(I1(t)?t.ownerDocument:t.document)||window.document)==null?void 0:i.documentElement}function I1(t){return Dc()?t instanceof Node||t instanceof _a(t).Node:!1}function Wa(t){return Dc()?t instanceof Element||t instanceof _a(t).Element:!1}function di(t){return Dc()?t instanceof HTMLElement||t instanceof _a(t).HTMLElement:!1}function U0(t){return!Dc()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof _a(t).ShadowRoot}const A5=new Set(["inline","contents"]);function Os(t){const{overflow:i,overflowX:l,overflowY:r,display:o}=Qa(t);return/auto|scroll|overlay|hidden|clip/.test(i+r+l)&&!A5.has(o)}const T5=new Set(["table","td","th"]);function M5(t){return T5.has(rr(t))}const N5=[":popover-open",":modal"];function Lc(t){return N5.some(i=>{try{return t.matches(i)}catch{return!1}})}const $5=["transform","translate","scale","rotate","perspective"],O5=["transform","translate","scale","rotate","perspective","filter"],k5=["paint","layout","strict","content"];function zc(t){const i=zf(),l=Wa(t)?Qa(t):t;return $5.some(r=>l[r]?l[r]!=="none":!1)||(l.containerType?l.containerType!=="normal":!1)||!i&&(l.backdropFilter?l.backdropFilter!=="none":!1)||!i&&(l.filter?l.filter!=="none":!1)||O5.some(r=>(l.willChange||"").includes(r))||k5.some(r=>(l.contain||"").includes(r))}function R5(t){let i=wn(t);for(;di(i)&&!ar(i);){if(zc(i))return i;if(Lc(i))return null;i=wn(i)}return null}function zf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const D5=new Set(["html","body","#document"]);function ar(t){return D5.has(rr(t))}function Qa(t){return _a(t).getComputedStyle(t)}function jc(t){return Wa(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wn(t){if(rr(t)==="html")return t;const i=t.assignedSlot||t.parentNode||U0(t)&&t.host||gi(t);return U0(i)?i.host:i}function P1(t){const i=wn(t);return ar(i)?t.ownerDocument?t.ownerDocument.body:t.body:di(i)&&Os(i)?i:P1(i)}function Es(t,i,l){var r;i===void 0&&(i=[]),l===void 0&&(l=!0);const o=P1(t),u=o===((r=t.ownerDocument)==null?void 0:r.body),h=_a(o);if(u){const f=tf(h);return i.concat(h,h.visualViewport||[],Os(o)?o:[],f&&l?Es(f):[])}return i.concat(o,Es(o,[],l))}function tf(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function V1(t){const i=Qa(t);let l=parseFloat(i.width)||0,r=parseFloat(i.height)||0;const o=di(t),u=o?t.offsetWidth:l,h=o?t.offsetHeight:r,f=_c(l)!==u||_c(r)!==h;return f&&(l=u,r=h),{width:l,height:r,$:f}}function jf(t){return Wa(t)?t:t.contextElement}function Ql(t){const i=jf(t);if(!di(i))return oi(1);const l=i.getBoundingClientRect(),{width:r,height:o,$:u}=V1(i);let h=(u?_c(l.width):l.width)/r,f=(u?_c(l.height):l.height)/o;return(!h||!Number.isFinite(h))&&(h=1),(!f||!Number.isFinite(f))&&(f=1),{x:h,y:f}}const L5=oi(0);function F1(t){const i=_a(t);return!zf()||!i.visualViewport?L5:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function z5(t,i,l){return i===void 0&&(i=!1),!l||i&&l!==_a(t)?!1:i}function al(t,i,l,r){i===void 0&&(i=!1),l===void 0&&(l=!1);const o=t.getBoundingClientRect(),u=jf(t);let h=oi(1);i&&(r?Wa(r)&&(h=Ql(r)):h=Ql(t));const f=z5(u,l,r)?F1(u):oi(0);let g=(o.left+f.x)/h.x,p=(o.top+f.y)/h.y,b=o.width/h.x,_=o.height/h.y;if(u){const w=_a(u),y=r&&Wa(r)?_a(r):r;let S=w,T=tf(S);for(;T&&r&&y!==S;){const M=Ql(T),A=T.getBoundingClientRect(),D=Qa(T),U=A.left+(T.clientLeft+parseFloat(D.paddingLeft))*M.x,j=A.top+(T.clientTop+parseFloat(D.paddingTop))*M.y;g*=M.x,p*=M.y,b*=M.x,_*=M.y,g+=U,p+=j,S=_a(T),T=tf(S)}}return wc({width:b,height:_,x:g,y:p})}function Bc(t,i){const l=jc(t).scrollLeft;return i?i.left+l:al(gi(t)).left+l}function q1(t,i){const l=t.getBoundingClientRect(),r=l.left+i.scrollLeft-Bc(t,l),o=l.top+i.scrollTop;return{x:r,y:o}}function j5(t){let{elements:i,rect:l,offsetParent:r,strategy:o}=t;const u=o==="fixed",h=gi(r),f=i?Lc(i.floating):!1;if(r===h||f&&u)return l;let g={scrollLeft:0,scrollTop:0},p=oi(1);const b=oi(0),_=di(r);if((_||!_&&!u)&&((rr(r)!=="body"||Os(h))&&(g=jc(r)),di(r))){const y=al(r);p=Ql(r),b.x=y.x+r.clientLeft,b.y=y.y+r.clientTop}const w=h&&!_&&!u?q1(h,g):oi(0);return{width:l.width*p.x,height:l.height*p.y,x:l.x*p.x-g.scrollLeft*p.x+b.x+w.x,y:l.y*p.y-g.scrollTop*p.y+b.y+w.y}}function B5(t){return Array.from(t.getClientRects())}function H5(t){const i=gi(t),l=jc(t),r=t.ownerDocument.body,o=ya(i.scrollWidth,i.clientWidth,r.scrollWidth,r.clientWidth),u=ya(i.scrollHeight,i.clientHeight,r.scrollHeight,r.clientHeight);let h=-l.scrollLeft+Bc(t);const f=-l.scrollTop;return Qa(r).direction==="rtl"&&(h+=ya(i.clientWidth,r.clientWidth)-o),{width:o,height:u,x:h,y:f}}const I0=25;function U5(t,i){const l=_a(t),r=gi(t),o=l.visualViewport;let u=r.clientWidth,h=r.clientHeight,f=0,g=0;if(o){u=o.width,h=o.height;const b=zf();(!b||b&&i==="fixed")&&(f=o.offsetLeft,g=o.offsetTop)}const p=Bc(r);if(p<=0){const b=r.ownerDocument,_=b.body,w=getComputedStyle(_),y=b.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,S=Math.abs(r.clientWidth-_.clientWidth-y);S<=I0&&(u-=S)}else p<=I0&&(u+=p);return{width:u,height:h,x:f,y:g}}const I5=new Set(["absolute","fixed"]);function P5(t,i){const l=al(t,!0,i==="fixed"),r=l.top+t.clientTop,o=l.left+t.clientLeft,u=di(t)?Ql(t):oi(1),h=t.clientWidth*u.x,f=t.clientHeight*u.y,g=o*u.x,p=r*u.y;return{width:h,height:f,x:g,y:p}}function P0(t,i,l){let r;if(i==="viewport")r=U5(t,l);else if(i==="document")r=H5(gi(t));else if(Wa(i))r=P5(i,l);else{const o=F1(t);r={x:i.x-o.x,y:i.y-o.y,width:i.width,height:i.height}}return wc(r)}function G1(t,i){const l=wn(t);return l===i||!Wa(l)||ar(l)?!1:Qa(l).position==="fixed"||G1(l,i)}function V5(t,i){const l=i.get(t);if(l)return l;let r=Es(t,[],!1).filter(f=>Wa(f)&&rr(f)!=="body"),o=null;const u=Qa(t).position==="fixed";let h=u?wn(t):t;for(;Wa(h)&&!ar(h);){const f=Qa(h),g=zc(h);!g&&f.position==="fixed"&&(o=null),(u?!g&&!o:!g&&f.position==="static"&&!!o&&I5.has(o.position)||Os(h)&&!g&&G1(t,h))?r=r.filter(b=>b!==h):o=f,h=wn(h)}return i.set(t,r),r}function F5(t){let{element:i,boundary:l,rootBoundary:r,strategy:o}=t;const h=[...l==="clippingAncestors"?Lc(i)?[]:V5(i,this._c):[].concat(l),r],f=h[0],g=h.reduce((p,b)=>{const _=P0(i,b,o);return p.top=ya(_.top,p.top),p.right=_n(_.right,p.right),p.bottom=_n(_.bottom,p.bottom),p.left=ya(_.left,p.left),p},P0(i,f,o));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function q5(t){const{width:i,height:l}=V1(t);return{width:i,height:l}}function G5(t,i,l){const r=di(i),o=gi(i),u=l==="fixed",h=al(t,!0,u,i);let f={scrollLeft:0,scrollTop:0};const g=oi(0);function p(){g.x=Bc(o)}if(r||!r&&!u)if((rr(i)!=="body"||Os(o))&&(f=jc(i)),r){const y=al(i,!0,u,i);g.x=y.x+i.clientLeft,g.y=y.y+i.clientTop}else o&&p();u&&!r&&o&&p();const b=o&&!r&&!u?q1(o,f):oi(0),_=h.left+f.scrollLeft-g.x-b.x,w=h.top+f.scrollTop-g.y-b.y;return{x:_,y:w,width:h.width,height:h.height}}function mh(t){return Qa(t).position==="static"}function V0(t,i){if(!di(t)||Qa(t).position==="fixed")return null;if(i)return i(t);let l=t.offsetParent;return gi(t)===l&&(l=l.ownerDocument.body),l}function Y1(t,i){const l=_a(t);if(Lc(t))return l;if(!di(t)){let o=wn(t);for(;o&&!ar(o);){if(Wa(o)&&!mh(o))return o;o=wn(o)}return l}let r=V0(t,i);for(;r&&M5(r)&&mh(r);)r=V0(r,i);return r&&ar(r)&&mh(r)&&!zc(r)?l:r||R5(t)||l}const Y5=async function(t){const i=this.getOffsetParent||Y1,l=this.getDimensions,r=await l(t.floating);return{reference:G5(t.reference,await i(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function X5(t){return Qa(t).direction==="rtl"}const fc={convertOffsetParentRelativeRectToViewportRelativeRect:j5,getDocumentElement:gi,getClippingRect:F5,getOffsetParent:Y1,getElementRects:Y5,getClientRects:B5,getDimensions:q5,getScale:Ql,isElement:Wa,isRTL:X5};function X1(t,i){return t.x===i.x&&t.y===i.y&&t.width===i.width&&t.height===i.height}function W5(t,i){let l=null,r;const o=gi(t);function u(){var f;clearTimeout(r),(f=l)==null||f.disconnect(),l=null}function h(f,g){f===void 0&&(f=!1),g===void 0&&(g=1),u();const p=t.getBoundingClientRect(),{left:b,top:_,width:w,height:y}=p;if(f||i(),!w||!y)return;const S=ic(_),T=ic(o.clientWidth-(b+w)),M=ic(o.clientHeight-(_+y)),A=ic(b),U={rootMargin:-S+"px "+-T+"px "+-M+"px "+-A+"px",threshold:ya(0,_n(1,g))||1};let j=!0;function $(W){const X=W[0].intersectionRatio;if(X!==g){if(!j)return h();X?h(!1,X):r=setTimeout(()=>{h(!1,1e-7)},1e3)}X===1&&!X1(p,t.getBoundingClientRect())&&h(),j=!1}try{l=new IntersectionObserver($,{...U,root:o.ownerDocument})}catch{l=new IntersectionObserver($,U)}l.observe(t)}return h(!0),u}function Q5(t,i,l,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:u=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:g=!1}=r,p=jf(t),b=o||u?[...p?Es(p):[],...Es(i)]:[];b.forEach(A=>{o&&A.addEventListener("scroll",l,{passive:!0}),u&&A.addEventListener("resize",l)});const _=p&&f?W5(p,l):null;let w=-1,y=null;h&&(y=new ResizeObserver(A=>{let[D]=A;D&&D.target===p&&y&&(y.unobserve(i),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var U;(U=y)==null||U.observe(i)})),l()}),p&&!g&&y.observe(p),y.observe(i));let S,T=g?al(t):null;g&&M();function M(){const A=al(t);T&&!X1(T,A)&&l(),T=A,S=requestAnimationFrame(M)}return l(),()=>{var A;b.forEach(D=>{o&&D.removeEventListener("scroll",l),u&&D.removeEventListener("resize",l)}),_?.(),(A=y)==null||A.disconnect(),y=null,g&&cancelAnimationFrame(S)}}const Z5=S5,K5=E5,J5=_5,F0=C5,e6=y5,t6=(t,i,l)=>{const r=new Map,o={platform:fc,...l},u={...o.platform,_c:r};return b5(t,i,{...o,platform:u})};function a6(t){return i6(t)}function gh(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function i6(t){for(let i=t;i;i=gh(i))if(i instanceof Element&&getComputedStyle(i).display==="none")return null;for(let i=gh(t);i;i=gh(i)){if(!(i instanceof Element))continue;const l=getComputedStyle(i);if(l.display!=="contents"&&(l.position!=="static"||zc(l)||i.tagName==="BODY"))return i}return null}function n6(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var Qe=class extends tt{constructor(){super(...arguments),this.localize=new xa(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),l=this.placement.includes("top")||this.placement.includes("bottom");let r=0,o=0,u=0,h=0,f=0,g=0,p=0,b=0;l?t.top<i.top?(r=t.left,o=t.bottom,u=t.right,h=t.bottom,f=i.left,g=i.top,p=i.right,b=i.top):(r=i.left,o=i.bottom,u=i.right,h=i.bottom,f=t.left,g=t.top,p=t.right,b=t.top):t.left<i.left?(r=t.right,o=t.top,u=i.left,h=i.top,f=t.right,g=t.bottom,p=i.left,b=i.bottom):(r=i.right,o=i.top,u=t.left,h=t.top,f=i.right,g=i.bottom,p=t.left,b=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${u}px`),this.style.setProperty("--hover-bridge-top-right-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${f}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${b}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||n6(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Q5(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Z5({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(F0({apply:({rects:l})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${l.reference.width}px`:"",this.popup.style.height=o?`${l.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(J5({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(K5({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(F0({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:l,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${l}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(e6({element:this.arrowEl,padding:this.arrowPadding}));const i=this.strategy==="absolute"?l=>fc.getOffsetParent(l,a6):fc.getOffsetParent;t6(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:As(Ui({},fc),{getOffsetParent:i})}).then(({x:l,y:r,middlewareData:o,placement:u})=>{const h=this.localize.dir()==="rtl",f={top:"bottom",right:"left",bottom:"top",left:"right"}[u.split("-")[0]];if(this.setAttribute("data-current-placement",u),Object.assign(this.popup.style,{left:`${l}px`,top:`${r}px`}),this.arrow){const g=o.arrow.x,p=o.arrow.y;let b="",_="",w="",y="";if(this.arrowPlacement==="start"){const S=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",_=h?S:"",y=h?"":S}else if(this.arrowPlacement==="end"){const S=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";_=h?"":S,y=h?S:"",w=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(y=typeof g=="number"?"calc(50% - var(--arrow-size-diagonal))":"",b=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(y=typeof g=="number"?`${g}px`:"",b=typeof p=="number"?`${p}px`:"");Object.assign(this.arrowEl.style,{top:b,right:_,bottom:w,left:y,[f]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return xe`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ot({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ot({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?xe`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Qe.styles=[wt,s5];C([Ie(".popup")],Qe.prototype,"popup",2);C([Ie(".popup__arrow")],Qe.prototype,"arrowEl",2);C([B()],Qe.prototype,"anchor",2);C([B({type:Boolean,reflect:!0})],Qe.prototype,"active",2);C([B({reflect:!0})],Qe.prototype,"placement",2);C([B({reflect:!0})],Qe.prototype,"strategy",2);C([B({type:Number})],Qe.prototype,"distance",2);C([B({type:Number})],Qe.prototype,"skidding",2);C([B({type:Boolean})],Qe.prototype,"arrow",2);C([B({attribute:"arrow-placement"})],Qe.prototype,"arrowPlacement",2);C([B({attribute:"arrow-padding",type:Number})],Qe.prototype,"arrowPadding",2);C([B({type:Boolean})],Qe.prototype,"flip",2);C([B({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(i=>i.trim()).filter(i=>i!==""),toAttribute:t=>t.join(" ")}})],Qe.prototype,"flipFallbackPlacements",2);C([B({attribute:"flip-fallback-strategy"})],Qe.prototype,"flipFallbackStrategy",2);C([B({type:Object})],Qe.prototype,"flipBoundary",2);C([B({attribute:"flip-padding",type:Number})],Qe.prototype,"flipPadding",2);C([B({type:Boolean})],Qe.prototype,"shift",2);C([B({type:Object})],Qe.prototype,"shiftBoundary",2);C([B({attribute:"shift-padding",type:Number})],Qe.prototype,"shiftPadding",2);C([B({attribute:"auto-size"})],Qe.prototype,"autoSize",2);C([B()],Qe.prototype,"sync",2);C([B({type:Object})],Qe.prototype,"autoSizeBoundary",2);C([B({attribute:"auto-size-padding",type:Number})],Qe.prototype,"autoSizePadding",2);C([B({attribute:"hover-bridge",type:Boolean})],Qe.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let af=class extends Af{constructor(i){if(super(i),this.it=rt,i.type!==mn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===rt||i==null)return this._t=void 0,this.it=i;if(i===ja)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const l=[i];return l.raw=l,this._t={_$litType$:this.constructor.resultType,strings:l,values:[]}}};af.directiveName="unsafeHTML",af.resultType=1;const l6=Cf(af);var Ce=class extends tt{constructor(){super(...arguments),this.formControlController=new Ts(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new il(this,"help-text","label"),this.localize=new xa(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>xe`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${i=>this.handleTagRemove(i,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const i=t.composedPath();this&&!i.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const i=t.target,l=i.closest(".select__clear")!==null,r=i.closest("sl-icon-button")!==null;if(!(l||r)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),u=o.indexOf(this.currentOption);let h=Math.max(0,u);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(h=u+1,h>o.length-1&&(h=0)):t.key==="ArrowUp"?(h=u-1,h<0&&(h=o.length-1)):t.key==="Home"?h=0:t.key==="End"&&(h=o.length-1),this.setCurrentOption(o[h])}if(t.key&&t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const u of o)if(u.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(u);break}}}},this.handleDocumentMouseDown=t=>{const i=t.composedPath();this&&!i.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const l=t.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||l||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const l=t.target.closest("sl-option"),r=this.value;l&&!l.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(l):this.setSelectedOptions(l),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),i=this.valueHasChanged?this.value:this.defaultValue,l=Array.isArray(i)?i:[i],r=[];t.forEach(o=>r.push(o.value)),this.setSelectedOptions(t.filter(o=>l.includes(o.value)))}handleTagRemove(t,i){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(l=>{l.current=!1,l.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const i=this.getAllOptions(),l=Array.isArray(t)?t:[t];i.forEach(r=>r.selected=!1),l.length&&l.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(t,i){i===!0||i===!1?t.selected=i:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,i,l;const r=this.getAllOptions();this.selectedOptions=r.filter(u=>u.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(u=>u.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const u=this.selectedOptions[0];this.value=(t=u?.value)!=null?t:"",this.displayLabel=(l=(i=u?.getTextLabel)==null?void 0:i.call(u))!=null?l:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,i)=>{if(i<this.maxOptionsVisible||this.maxOptionsVisible<=0){const l=this.getTag(t,i);return xe`<div @sl-remove=${r=>this.handleTagRemove(r,t)}>
          ${typeof l=="string"?l6(l):l}
        </div>`}else if(i===this.maxOptionsVisible)return xe`<sl-tag size=${this.size}>+${this.selectedOptions.length-i}</sl-tag>`;return xe``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,i,l){if(super.attributeChangedCallback(t,i,l),t==="value"){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}}handleValueChange(){if(!this.valueHasChanged){const l=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=l}const t=this.getAllOptions(),i=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(l=>i.includes(l.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ba(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:i}=ra(this,"select.show",{dir:this.localize.dir()});await sa(this.popup.popup,t,i),this.currentOption&&Kh(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ba(this);const{keyframes:t,options:i}=ra(this,"select.hide",{dir:this.localize.dir()});await sa(this.popup.popup,t,i),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,yn(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,yn(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!i,o=this.clearable&&!this.disabled&&this.value.length>0,u=this.placeholder&&this.value&&this.value.length<=0;return xe`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${l?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${ot({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":u,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?xe`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?xe`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ce.styles=[wt,Rc,r5];Ce.dependencies={"sl-icon":Ut,"sl-popup":Qe,"sl-tag":nl};C([Ie(".select")],Ce.prototype,"popup",2);C([Ie(".select__combobox")],Ce.prototype,"combobox",2);C([Ie(".select__display-input")],Ce.prototype,"displayInput",2);C([Ie(".select__value-input")],Ce.prototype,"valueInput",2);C([Ie(".select__listbox")],Ce.prototype,"listbox",2);C([ft()],Ce.prototype,"hasFocus",2);C([ft()],Ce.prototype,"displayLabel",2);C([ft()],Ce.prototype,"currentOption",2);C([ft()],Ce.prototype,"selectedOptions",2);C([ft()],Ce.prototype,"valueHasChanged",2);C([B()],Ce.prototype,"name",2);C([ft()],Ce.prototype,"value",1);C([B({attribute:"value"})],Ce.prototype,"defaultValue",2);C([B({reflect:!0})],Ce.prototype,"size",2);C([B()],Ce.prototype,"placeholder",2);C([B({type:Boolean,reflect:!0})],Ce.prototype,"multiple",2);C([B({attribute:"max-options-visible",type:Number})],Ce.prototype,"maxOptionsVisible",2);C([B({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);C([B({type:Boolean})],Ce.prototype,"clearable",2);C([B({type:Boolean,reflect:!0})],Ce.prototype,"open",2);C([B({type:Boolean})],Ce.prototype,"hoist",2);C([B({type:Boolean,reflect:!0})],Ce.prototype,"filled",2);C([B({type:Boolean,reflect:!0})],Ce.prototype,"pill",2);C([B()],Ce.prototype,"label",2);C([B({reflect:!0})],Ce.prototype,"placement",2);C([B({attribute:"help-text"})],Ce.prototype,"helpText",2);C([B({reflect:!0})],Ce.prototype,"form",2);C([B({type:Boolean,reflect:!0})],Ce.prototype,"required",2);C([B()],Ce.prototype,"getTag",2);C([qe("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);C([qe(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Ce.prototype,"handleValueChange",1);C([qe("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);bt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});bt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var r6="sl-select";Ce.define("sl-select");var s6=Xt({tagName:r6,elementClass:Ce,react:Ht,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),ta=s6,o6=ht`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,wa=class extends tt{constructor(){super(...arguments),this.localize=new xa(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let i="";return[...t].forEach(l=>{l.nodeType===Node.ELEMENT_NODE&&(l.hasAttribute("slot")||(i+=l.textContent)),l.nodeType===Node.TEXT_NODE&&(i+=l.textContent)}),i.trim()}render(){return xe`
      <div
        part="base"
        class=${ot({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};wa.styles=[wt,o6];wa.dependencies={"sl-icon":Ut};C([Ie(".option__label")],wa.prototype,"defaultSlot",2);C([ft()],wa.prototype,"current",2);C([ft()],wa.prototype,"selected",2);C([ft()],wa.prototype,"hasHover",2);C([B({reflect:!0})],wa.prototype,"value",2);C([B({type:Boolean,reflect:!0})],wa.prototype,"disabled",2);C([qe("disabled")],wa.prototype,"handleDisabledChange",1);C([qe("selected")],wa.prototype,"handleSelectedChange",1);C([qe("value")],wa.prototype,"handleValueChange",1);var c6="sl-option";wa.define("sl-option");var u6=Xt({tagName:c6,elementClass:wa,react:Ht,events:{},displayName:"SlOption"}),je=u6,d6=ht`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Za=class extends tt{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=xe`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let i=xe``;return this.initials?i=xe`<div part="initials" class="avatar__initials">${this.initials}</div>`:i=xe`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,xe`
      <div
        part="base"
        class=${ot({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:i}
      </div>
    `}};Za.styles=[wt,d6];Za.dependencies={"sl-icon":Ut};C([ft()],Za.prototype,"hasError",2);C([B()],Za.prototype,"image",2);C([B()],Za.prototype,"label",2);C([B()],Za.prototype,"initials",2);C([B()],Za.prototype,"loading",2);C([B({reflect:!0})],Za.prototype,"shape",2);C([qe("image")],Za.prototype,"handleImageChange",1);var h6="sl-avatar";Za.define("sl-avatar");var f6=Xt({tagName:h6,elementClass:Za,react:Ht,events:{onSlError:"sl-error"},displayName:"SlAvatar"}),p6=f6;const m6="_avatar_744bf_1",g6={avatar:m6};function vt({image:t,name:i="",shape:l="circle",className:r,style:o}){const u=k.useMemo(()=>{if(!i)return"";const h=i.trim().split(/\s+/);return h.length===0?"":h.length===1?h[0].charAt(0).toUpperCase():(h[0].charAt(0)+h[h.length-1].charAt(0)).toUpperCase()},[i]);return m.jsx(p6,{image:t??void 0,label:i,initials:u,shape:l,className:`${g6.avatar} ${r||""}`,style:o})}var v6=Object.defineProperty,b6=Object.defineProperties,y6=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,W1=Object.prototype.hasOwnProperty,Q1=Object.prototype.propertyIsEnumerable,q0=(t,i,l)=>i in t?v6(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l,hn=(t,i)=>{for(var l in i||(i={}))W1.call(i,l)&&q0(t,l,i[l]);if(Sc)for(var l of Sc(i))Q1.call(i,l)&&q0(t,l,i[l]);return t},vh=(t,i)=>b6(t,y6(i)),_6=(t,i)=>{var l={};for(var r in t)W1.call(t,r)&&i.indexOf(r)<0&&(l[r]=t[r]);if(t!=null&&Sc)for(var r of Sc(t))i.indexOf(r)<0&&Q1.call(t,r)&&(l[r]=t[r]);return l},x6=(t,i,l)=>new Promise((r,o)=>{var u=g=>{try{f(l.next(g))}catch(p){o(p)}},h=g=>{try{f(l.throw(g))}catch(p){o(p)}},f=g=>g.done?r(g.value):Promise.resolve(g.value).then(u,h);f((l=l.apply(t,i)).next())}),w6=t=>{const i=/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;return!!t.match(i)},Z1=(t,i)=>new Promise((l,r)=>{const o=new Image;o.onload=()=>l(o),o.onerror=r,!w6(t)&&i&&(o.crossOrigin=i),o.src=t}),S6=t=>new Promise((i,l)=>{const r=new FileReader;r.onload=o=>{var u;try{if(!((u=o?.target)!=null&&u.result))throw new Error("No image data");const h=Z1(o.target.result);i(h)}catch(h){l(h)}},r.readAsDataURL(t)}),E6=()=>{let t=!1;try{const i=Object.defineProperty({},"passive",{get:function(){t=!0}}),l=()=>{};window.addEventListener("test",l,i),window.removeEventListener("test",l,i)}catch{t=!1}return t},G0=typeof window<"u"&&typeof navigator<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),C6=typeof File<"u",Y0=(t,i,l,r,o,u)=>{if(u===0)t.rect(i,l,r,o);else{const h=r-u,f=o-u;t.translate(i,l),t.arc(u,u,u,Math.PI,Math.PI*1.5),t.lineTo(h,0),t.arc(h,u,u,Math.PI*1.5,Math.PI*2),t.lineTo(r,f),t.arc(h,f,u,Math.PI*2,Math.PI*.5),t.lineTo(u,o),t.arc(u,f,u,Math.PI*.5,Math.PI),t.closePath(),t.translate(-i,-l)}},A6=(t,i,l,r,o,u)=>{t.fillStyle=u;const h=r/3,f=o/3;t.fillRect(i,l,1,o),t.fillRect(h+i,l,1,o),t.fillRect(h*2+i,l,1,o),t.fillRect(h*3+i,l,1,o),t.fillRect(h*4+i,l,1,o),t.fillRect(i,l,r,1),t.fillRect(i,f+l,r,1),t.fillRect(i,f*2+l,r,1),t.fillRect(i,f*3+l,r,1),t.fillRect(i,f*4+l,r,1)},bh={x:.5,y:.5},K1=class extends R.Component{constructor(){super(...arguments),this.canvas=R.createRef(),this.pixelRatio=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,this.state={drag:!1,my:void 0,mx:void 0,image:bh},this.handleImageReady=i=>{var l,r;const o=vh(hn({},this.getInitialSize(i.width,i.height)),{resource:i,x:.5,y:.5});this.setState({drag:!1,image:o},this.props.onImageReady),(r=(l=this.props).onLoadSuccess)==null||r.call(l,o)},this.clearImage=()=>{const i=this.getCanvas();this.getContext().clearRect(0,0,i.width,i.height),this.setState({image:bh})},this.handleMouseDown=i=>{i.preventDefault(),this.setState({drag:!0,mx:void 0,my:void 0})},this.handleTouchStart=i=>{this.setState({drag:!0,mx:void 0,my:void 0})},this.handleMouseUp=()=>{var i,l;this.state.drag&&(this.setState({drag:!1}),(l=(i=this.props).onMouseUp)==null||l.call(i))},this.handleMouseMove=i=>{var l,r,o,u;if(!this.state.drag)return;i.preventDefault();const h="targetTouches"in i?i.targetTouches[0].pageX:i.clientX,f="targetTouches"in i?i.targetTouches[0].pageY:i.clientY;this.setState({mx:h,my:f});let g=this.props.rotate;if(g%=360,g=g<0?g+360:g,this.state.mx&&this.state.my&&this.state.image.width&&this.state.image.height){const p=this.state.mx-h,b=this.state.my-f,_=this.state.image.width*this.props.scale,w=this.state.image.height*this.props.scale;let{x:y,y:S}=this.getCroppingRect();y*=_,S*=w;const T=X=>X*(Math.PI/180),M=Math.cos(T(g)),A=Math.sin(T(g)),D=y+p*M+b*A,U=S+-p*A+b*M,j=1/this.props.scale*this.getXScale(),$=1/this.props.scale*this.getYScale(),W={x:D/_+j/2,y:U/w+$/2};(r=(l=this.props).onPositionChange)==null||r.call(l,W),this.setState({image:hn(hn({},this.state.image),W)})}(u=(o=this.props).onMouseMove)==null||u.call(o,i)}}componentDidMount(){this.props.disableHiDPIScaling&&(this.pixelRatio=1);const i=this.getContext();this.props.image&&this.loadImage(this.props.image),this.paint(i);const l=E6()?{passive:!1}:!1;document.addEventListener("mousemove",this.handleMouseMove,l),document.addEventListener("mouseup",this.handleMouseUp,l),G0&&(document.addEventListener("touchmove",this.handleMouseMove,l),document.addEventListener("touchend",this.handleMouseUp,l))}componentDidUpdate(i,l){var r,o;this.props.image&&(this.props.image!==i.image||this.props.width!==i.width||this.props.height!==i.height||this.props.backgroundColor!==i.backgroundColor)?this.loadImage(this.props.image):!this.props.image&&l.image!==bh&&this.clearImage();const u=this.getContext();u.clearRect(0,0,this.getCanvas().width,this.getCanvas().height),this.paint(u),this.paintImage(u,this.state.image,this.props.border),(i.image!==this.props.image||i.width!==this.props.width||i.height!==this.props.height||i.position!==this.props.position||i.scale!==this.props.scale||i.rotate!==this.props.rotate||l.my!==this.state.my||l.mx!==this.state.mx||l.image.x!==this.state.image.x||l.image.y!==this.state.image.y)&&((o=(r=this.props).onImageChange)==null||o.call(r))}getCanvas(){if(!this.canvas.current)throw new Error("No canvas found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return this.canvas.current}getContext(){const i=this.getCanvas().getContext("2d");if(!i)throw new Error("No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return i}componentWillUnmount(){document.removeEventListener("mousemove",this.handleMouseMove,!1),document.removeEventListener("mouseup",this.handleMouseUp,!1),G0&&(document.removeEventListener("touchmove",this.handleMouseMove,!1),document.removeEventListener("touchend",this.handleMouseUp,!1))}isVertical(){return!this.props.disableCanvasRotation&&this.props.rotate%180!==0}getBorders(i=this.props.border){return Array.isArray(i)?i:[i,i]}getDimensions(){const{width:i,height:l,rotate:r,border:o}=this.props,u={width:0,height:0},[h,f]=this.getBorders(o);return this.isVertical()?(u.width=l,u.height=i):(u.width=i,u.height=l),u.width+=h*2,u.height+=f*2,{canvas:u,rotate:r,width:i,height:l,border:o}}getImage(){const i=this.getCroppingRect(),l=this.state.image;if(!l.resource)throw new Error("No image resource available, please report this to: https://github.com/mosch/react-avatar-editor/issues");i.x*=l.resource.width,i.y*=l.resource.height,i.width*=l.resource.width,i.height*=l.resource.height;const r=document.createElement("canvas");this.isVertical()?(r.width=i.height,r.height=i.width):(r.width=i.width,r.height=i.height);const o=r.getContext("2d");if(!o)throw new Error("No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return o.translate(r.width/2,r.height/2),o.rotate(this.props.rotate*Math.PI/180),o.translate(-(r.width/2),-(r.height/2)),this.isVertical()&&o.translate((r.width-r.height)/2,(r.height-r.width)/2),this.props.backgroundColor&&(o.fillStyle=this.props.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(l.resource,-i.x,-i.y),r}getImageScaledToCanvas(){const{width:i,height:l}=this.getDimensions(),r=document.createElement("canvas");return this.isVertical()?(r.width=l,r.height=i):(r.width=i,r.height=l),this.paintImage(r.getContext("2d"),this.state.image,0,1),r}getXScale(){if(!this.state.image.width||!this.state.image.height)throw new Error("Image dimension is unknown.");const i=this.props.width/this.props.height,l=this.state.image.width/this.state.image.height;return Math.min(1,i/l)}getYScale(){if(!this.state.image.width||!this.state.image.height)throw new Error("Image dimension is unknown.");const i=this.props.height/this.props.width,l=this.state.image.height/this.state.image.width;return Math.min(1,i/l)}getCroppingRect(){const i=this.props.position||{x:this.state.image.x,y:this.state.image.y},l=1/this.props.scale*this.getXScale(),r=1/this.props.scale*this.getYScale(),o={x:i.x-l/2,y:i.y-r/2,width:l,height:r};let u=0,h=1-o.width,f=0,g=1-o.height;return(this.props.disableBoundaryChecks||l>1||r>1)&&(u=-o.width,h=1,f=-o.height,g=1),vh(hn({},o),{x:Math.max(u,Math.min(o.x,h)),y:Math.max(f,Math.min(o.y,g))})}loadImage(i){return x6(this,null,function*(){var l,r,o,u;if(C6&&i instanceof File)try{const h=yield S6(i);this.handleImageReady(h)}catch{(r=(l=this.props).onLoadFailure)==null||r.call(l)}else if(typeof i=="string")try{const h=yield Z1(i,this.props.crossOrigin);this.handleImageReady(h)}catch{(u=(o=this.props).onLoadFailure)==null||u.call(o)}})}getInitialSize(i,l){let r,o;const u=this.getDimensions(),h=u.height/u.width,f=l/i;return h>f?(r=u.height,o=Math.round(i*(r/l))):(o=u.width,r=Math.round(l*(o/i))),{height:r,width:o}}paintImage(i,l,r,o=this.pixelRatio){if(!l.resource)return;const u=this.calculatePosition(l,r);i.save(),i.translate(i.canvas.width/2,i.canvas.height/2),i.rotate(this.props.rotate*Math.PI/180),i.translate(-(i.canvas.width/2),-(i.canvas.height/2)),this.isVertical()&&i.translate((i.canvas.width-i.canvas.height)/2,(i.canvas.height-i.canvas.width)/2),i.scale(o,o),i.globalCompositeOperation="destination-over",i.drawImage(l.resource,u.x,u.y,u.width,u.height),this.props.backgroundColor&&(i.fillStyle=this.props.backgroundColor,i.fillRect(0,0,i.canvas.width,i.canvas.height)),i.restore()}calculatePosition(i=this.state.image,l){const[r,o]=this.getBorders(l);if(!i.width||!i.height)throw new Error("Image dimension is unknown.");const u=this.getCroppingRect(),h=i.width*this.props.scale,f=i.height*this.props.scale;let g=-u.x*h,p=-u.y*f;return this.isVertical()?(g+=o,p+=r):(g+=r,p+=o),{x:g,y:p,height:f,width:h}}paint(i){i.save(),i.scale(this.pixelRatio,this.pixelRatio),i.translate(0,0),i.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";let l=this.props.borderRadius;const r=this.getDimensions(),[o,u]=this.getBorders(r.border),h=r.canvas.height,f=r.canvas.width;l=Math.max(l,0),l=Math.min(l,f/2-o,h/2-u),i.beginPath(),Y0(i,o,u,f-o*2,h-u*2,l),i.rect(f,0,-f,h),i.fill("evenodd"),this.props.borderColor&&(i.strokeStyle="rgba("+this.props.borderColor.slice(0,4).join(",")+")",i.lineWidth=1,i.beginPath(),Y0(i,o+.5,u+.5,f-o*2-1,h-u*2-1,l),i.stroke()),this.props.showGrid&&A6(i,o,u,f-o*2,h-u*2,this.props.gridColor),i.restore()}render(){const i=this.props,{scale:l,rotate:r,image:o,border:u,borderRadius:h,width:f,height:g,position:p,color:b,backgroundColor:_,style:w,crossOrigin:y,onLoadFailure:S,onLoadSuccess:T,onImageReady:M,onImageChange:A,onMouseUp:D,onMouseMove:U,onPositionChange:j,disableBoundaryChecks:$,disableHiDPIScaling:W,disableCanvasRotation:X,showGrid:oe,gridColor:z,borderColor:q}=i,J=_6(i,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation","showGrid","gridColor","borderColor"]),ae=this.getDimensions(),Q={width:ae.canvas.width,height:ae.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},le={width:ae.canvas.width*this.pixelRatio,height:ae.canvas.height*this.pixelRatio,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,style:hn(hn({},Q),w)};return R.createElement("canvas",vh(hn(hn({},le),J),{ref:this.canvas}))}};K1.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],showGrid:!1,gridColor:"#666",disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0};var T6=K1,M6=ht`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Ka=class extends tt{constructor(){super(...arguments),this.hasSlotController=new il(this,"footer"),this.localize=new xa(this),this.modal=new z1(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),_s(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),xs(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const l=ra(this,"dialog.denyClose",{dir:this.localize.dir()});sa(this.panel,l.keyframes,l.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),_s(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ba(this.dialog),Ba(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const i=ra(this,"dialog.show",{dir:this.localize.dir()}),l=ra(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([sa(this.panel,i.keyframes,i.options),sa(this.overlay,l.keyframes,l.options)]),this.emit("sl-after-show")}else{j1(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ba(this.dialog),Ba(this.overlay)]);const t=ra(this,"dialog.hide",{dir:this.localize.dir()}),i=ra(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([sa(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),sa(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,xs(this);const l=this.originalTrigger;typeof l?.focus=="function"&&setTimeout(()=>l.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,yn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,yn(this,"sl-after-hide")}render(){return xe`
      <div
        part="base"
        class=${ot({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ve(this.noHeader?this.label:void 0)}
          aria-labelledby=${ve(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":xe`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ka.styles=[wt,M6];Ka.dependencies={"sl-icon-button":St};C([Ie(".dialog")],Ka.prototype,"dialog",2);C([Ie(".dialog__panel")],Ka.prototype,"panel",2);C([Ie(".dialog__overlay")],Ka.prototype,"overlay",2);C([B({type:Boolean,reflect:!0})],Ka.prototype,"open",2);C([B({reflect:!0})],Ka.prototype,"label",2);C([B({attribute:"no-header",type:Boolean,reflect:!0})],Ka.prototype,"noHeader",2);C([qe("open",{waitUntilFirstUpdate:!0})],Ka.prototype,"handleOpenChange",1);bt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});bt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});bt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});bt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});bt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var N6="sl-dialog";Ka.define("sl-dialog");var $6=Xt({tagName:N6,elementClass:Ka,react:Ht,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),ks=$6,O6=ht`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Bf=(t="value")=>(i,l)=>{const r=i.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(u,h,f){var g;const p=r.getPropertyOptions(t),b=typeof p.attribute=="string"?p.attribute:t;if(u===b){const _=p.converter||Jl,y=(typeof _=="function"?_:(g=_?.fromAttribute)!=null?g:Jl.fromAttribute)(f,p.type);this[t]!==y&&(this[l]=y)}o.call(this,u,h,f)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hf=Cf(class extends Af{constructor(t){if(super(t),t.type!==mn.PROPERTY&&t.type!==mn.ATTRIBUTE&&t.type!==mn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!NS(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[i]){if(i===ja||i===rt)return i;const l=t.element,r=t.name;if(t.type===mn.PROPERTY){if(i===l[r])return ja}else if(t.type===mn.BOOLEAN_ATTRIBUTE){if(!!i===l.hasAttribute(r))return ja}else if(t.type===mn.ATTRIBUTE&&l.getAttribute(r)===i+"")return ja;return OS(t),i}});var Ke=class extends tt{constructor(){super(...arguments),this.formControlController=new Ts(this),this.hasSlotController=new il(this,"help-text","label"),this.localize=new xa(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const i=this.input.offsetWidth,l=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",u=i*t;if(o){const h=`${i-u}px + ${t} * ${r}`;this.output.style.translate=`calc((${h} - ${l/2}px - ${r} / 2))`}else{const h=`${u}px - ${t} * ${r}`;this.output.style.translate=`calc(${h} - ${l/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!i;return xe`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--medium":!0,"form-control--has-label":l,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${l?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ot({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${ve(this.name)}
              ?disabled=${this.disabled}
              min=${ve(this.min)}
              max=${ve(this.max)}
              step=${ve(this.step)}
              .value=${Hf(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?xe`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ke.styles=[wt,Rc,O6];C([Ie(".range__control")],Ke.prototype,"input",2);C([Ie(".range__tooltip")],Ke.prototype,"output",2);C([ft()],Ke.prototype,"hasFocus",2);C([ft()],Ke.prototype,"hasTooltip",2);C([B()],Ke.prototype,"title",2);C([B()],Ke.prototype,"name",2);C([B({type:Number})],Ke.prototype,"value",2);C([B()],Ke.prototype,"label",2);C([B({attribute:"help-text"})],Ke.prototype,"helpText",2);C([B({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);C([B({type:Number})],Ke.prototype,"min",2);C([B({type:Number})],Ke.prototype,"max",2);C([B({type:Number})],Ke.prototype,"step",2);C([B()],Ke.prototype,"tooltip",2);C([B({attribute:!1})],Ke.prototype,"tooltipFormatter",2);C([B({reflect:!0})],Ke.prototype,"form",2);C([Bf()],Ke.prototype,"defaultValue",2);C([a1({passive:!0})],Ke.prototype,"handleThumbDragStart",1);C([qe("value",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleValueChange",1);C([qe("disabled",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleDisabledChange",1);C([qe("hasTooltip",{waitUntilFirstUpdate:!0})],Ke.prototype,"syncRange",1);var k6="sl-range";Ke.define("sl-range");var R6=Xt({tagName:k6,elementClass:Ke,react:Ht,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"}),D6=R6;function L6({image:t,open:i,onSave:l,onCancel:r}){const o=Ne(),u=k.useRef(null),[h,f]=k.useState(1),g=()=>{u.current&&u.current.getImageScaledToCanvas().toBlob(b=>{b&&l(b)})};return m.jsxs(ks,{label:o.formatMessage({id:"avatar.editor.title",defaultMessage:"Edit Profile Picture"}),open:i,onSlRequestClose:p=>{(p.detail.source==="overlay"||p.detail.source==="close-button")&&r()},children:[m.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[m.jsx(T6,{ref:u,image:t,width:250,height:250,border:25,borderRadius:125,color:[0,0,0,.6],scale:h,rotate:0}),m.jsx(D6,{min:1,max:3,step:.01,value:h,onSlInput:p=>{const b=p.target;f(b.value)},label:o.formatMessage({id:"avatar.editor.zoom",defaultMessage:"Zoom"}),style:{width:"100%",maxWidth:"300px"}})]}),m.jsxs("div",{slot:"footer",children:[m.jsx(Le,{onClick:r,children:m.jsx(ie,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(Le,{variant:"primary",onClick:g,children:m.jsx(ie,{id:"common.save",defaultMessage:"Save"})})]})]})}var z6="sl-icon";Ut.define("sl-icon");var j6=Xt({tagName:z6,elementClass:Ut,react:Ht,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),st=j6;const B6="_pickerContainer_1qpfx_1",H6="_avatar_1qpfx_6",U6="_cameraButton_1qpfx_12",yh={pickerContainer:B6,avatar:H6,cameraButton:U6};function I6({currentImage:t,name:i,onSave:l,loading:r=!1,className:o,style:u}){const[h,f]=k.useState(!1),[g,p]=k.useState(null),b=async()=>{const y=await F4();y&&(p(y),f(!0))},_=y=>{f(!1),l(y),p(null)},w=()=>{f(!1),p(null)};return m.jsxs("div",{className:`${yh.pickerContainer} ${o||""}`,style:u,children:[m.jsx(vt,{image:t,name:i,shape:"circle",className:yh.avatar}),m.jsx(Le,{circle:!0,size:"small",onClick:b,loading:r,className:yh.cameraButton,children:m.jsx(st,{name:"camera"})}),g&&m.jsx(L6,{image:g,open:h,onSave:_,onCancel:w})]})}const P6="_drawer_16mna_2",V6="_container_16mna_13",F6="_selectSection_16mna_18",q6="_listSection_16mna_22",G6="_listHeader_16mna_26",Y6="_memberItem_16mna_35",X6="_memberSelect_16mna_51",W6="_optionContent_16mna_57",Q6="_optionAvatar_16mna_63",Z6="_memberName_16mna_67",K6="_emptyState_16mna_72",J6="_footerActions_16mna_78",La={drawer:P6,container:V6,selectSection:F6,listSection:q6,listHeader:G6,memberItem:Y6,memberSelect:X6,optionContent:W6,optionAvatar:Q6,memberName:Z6,emptyState:K6,footerActions:J6};function eE({roster:t,slot:i,allMembers:l,onClose:r,onSave:o}){const u=Ne(),[h,f]=k.useState(i.assigned_member_ids||[]),g=l.filter(A=>h.includes(A.id)),p=l.filter(A=>!h.includes(A.id)&&A.is_rosterable),b=A=>{f(h.filter(D=>D!==A))},_=A=>{f([...h,A])},w=A=>{const D=A.target.value;D&&(_(D),A.target.value="")},y=()=>{o(i.id,h)},S=A=>{A.stopPropagation()},T=A=>{A.stopPropagation(),r()};let M="Edit Roster Slot";if(t&&i.slot_index!==null&&i.slot_index!==void 0){const A=t.slot_definitions[i.slot_index];A&&(M=u.formatMessage({id:"roster.edit.drawerLabel"},{slotName:A.name}))}return m.jsxs(mi,{label:M,placement:"bottom",open:!0,onSlAfterHide:T,onSlRequestClose:S,className:La.drawer,children:[m.jsxs("div",{className:La.container,children:[m.jsx("div",{className:La.selectSection,children:m.jsx(ta,{placeholder:u.formatMessage({id:"roster.edit.selectMemberPlaceholder"}),value:"",onSlChange:w,onSlAfterHide:A=>{A.stopPropagation()},hoist:!0,placement:"top",className:La.memberSelect,children:p.map(A=>m.jsx(je,{value:A.id,children:m.jsxs("div",{className:La.optionContent,children:[m.jsx(vt,{name:A.name,image:A.avatar_url,className:La.optionAvatar}),m.jsx("span",{children:A.name})]})},A.id))})}),m.jsxs("div",{className:La.listSection,children:[m.jsx("h3",{className:La.listHeader,children:m.jsx(ie,{id:"roster.edit.assignedHeader"})}),g.length>0?g.map(A=>m.jsxs("div",{className:La.memberItem,children:[m.jsx(vt,{name:A.name,image:A.avatar_url}),m.jsx("span",{className:La.memberName,children:A.name}),m.jsx(kt,{name:"x-circle-fill",label:u.formatMessage({id:"common.remove"}),onClick:()=>b(A.id)})]},A.id)):m.jsx("p",{className:La.emptyState,children:m.jsx(ie,{id:"roster.edit.emptyState"})})]})]}),m.jsxs("div",{slot:"footer",className:La.footerActions,children:[m.jsx(Le,{onClick:T,children:m.jsx(ie,{id:"common.cancel"})}),m.jsx(Le,{variant:"primary",onClick:y,children:m.jsx(ie,{id:"common.save"})})]})]})}const tE="_featureContainer_157fu_2",aE="_weekGroup_157fu_11",iE="_rosterGrid_157fu_22",nE="_weekHeader_157fu_32",lE="_dateCell_157fu_47",rE="_headerSlot_157fu_68",sE="_rosterSlot_157fu_77",oE="_rosterSlotReadOnly_157fu_89",cE="_emptySlot_157fu_100",uE="_green_157fu_101",dE="_orange_157fu_102",hE="_red_157fu_103",fE="_urgent_157fu_128",pE="_headerNavigation_157fu_165",mE="_headerTitle_157fu_173",gE="_navButton_157fu_189",vE="_dialogFooter_157fu_193",lt={featureContainer:tE,weekGroup:aE,rosterGrid:iE,weekHeader:nE,dateCell:lE,headerSlot:rE,rosterSlot:sE,rosterSlotReadOnly:oE,emptySlot:cE,green:uE,orange:dE,red:hE,urgent:fE,headerNavigation:pE,headerTitle:mE,navButton:gE,dialogFooter:vE};function bE({roster:t,rosterSlots:i,members:l,onSlotClick:r,startDate:o}){const u=Ne(),f=`week-${k.useMemo(()=>{const y=vb(o),S=bb(o);return`${y}${String(S).padStart(2,"0")}`},[o])}`,g=k.useMemo(()=>Array.from({length:7}).map((y,S)=>Nf(o,S)),[o]),p=k.useMemo(()=>{const y=new Map,S=za(g[0],"yyyy-MM-dd"),T=za(g[6],"yyyy-MM-dd");return i.forEach(M=>{if(!M.date||M.slot_index===null)return;const A=za(Of(M.date),"yyyy-MM-dd");A<S||A>T||(y.has(A)||y.set(A,new Map),y.get(A)?.set(M.slot_index,M))}),y},[i,g]),b=(y,S)=>{const T=r?lt.rosterSlot:lt.rosterSlotReadOnly,M=y?.assigned_member_ids?.length??0;return M===0?`${T} ${lt.emptySlot}`:S.min_occupancy===0?`${T} ${lt.green}`:M>=S.min_occupancy?`${T} ${lt.green}`:M===S.min_occupancy-1?`${T} ${lt.orange}`:M<=S.min_occupancy-2?`${T} ${lt.red}`:T},_=y=>{y&&r&&r(y.id)},w=(y,S)=>{if(!y||!y.assigned_member_ids||y.assigned_member_ids.length===0){const M=$f(new Date,1),A=(S4(S)||E4(S))&&hc(S,M);return m.jsx("span",{className:`${lt.emptySlot} ${A?lt.urgent:""}`,children:m.jsx(ie,{id:"roster.emptySlot"})})}const T=y.assigned_member_ids.map(M=>l.find(A=>A.id===M)?.name).filter(M=>!!M);return u.formatList(T,{type:"unit"})};return t?m.jsxs("div",{id:f,className:lt.weekGroup,style:{"--roster-slot-count":t.slot_definitions.length},children:[m.jsxs("div",{className:`${lt.rosterGrid} ${lt.weekHeader}`,children:[m.jsx("div",{className:lt.dateCell}),t.slot_definitions.map(y=>m.jsx("div",{className:lt.headerSlot,children:y.name},y.name))]}),g.map(y=>{const S=za(y,"yyyy-MM-dd"),T=p.get(S);return m.jsxs("div",{className:lt.rosterGrid,children:[m.jsxs("div",{className:lt.dateCell,children:[m.jsx("strong",{children:u.formatDate(y,{weekday:"short"})}),m.jsx("span",{children:u.formatDate(y,{month:"short",day:"numeric"})})]}),t.slot_definitions.map((M,A)=>{const D=T?.get(A);return m.jsx("div",{className:b(D,M),onClick:r?()=>_(D):void 0,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:U=>r&&U.key==="Enter"&&_(D),children:w(D,y)},A)})]},S)})]}):null}const X0=(t,i)=>{const l=typeof t=="string"?Of(t):t;return`${za(l,"yyyy-MM-dd")}-${i}`};function yE({rosterId:t,currentWeekStart:i,onWeekChange:l}){const r=Ne(),o=yb(),{data:u}=fi({enabled:!!o}),{data:h,isLoading:f}=tx({enabled:!!o}),{mutate:g}=ax(),{members:p,rosterSlots:b,roster:_,capabilities:w}=h||{},[y,S]=k.useState(null),[T,M]=k.useState(null),A=()=>{l(U4(i))},D=()=>{l($f(i,1))},U=k.useMemo(()=>{if(!_?.slot_definitions)return[];const z=new Map;(b||[]).forEach(J=>{J.date&&typeof J.slot_index=="number"&&z.set(X0(J.date,J.slot_index),J)});const q=[];for(let J=0;J<7;J++){const ae=Nf(i,J);_.slot_definitions.forEach((Q,le)=>{const te=X0(ae,le),I=z.get(te);I?q.push(I):q.push({id:te,roster_id:_.id,date:ae.toISOString(),slot_index:le,assigned_member_ids:[],created_at:new Date().toISOString()})})}return q},[b,_,i]),j=(z,q)=>{const J=U.find(ae=>ae.id===z);J&&g({slot:J,newMemberIds:q}),S(null)},$=z=>{const q=U.find(Q=>Q.id===z);if(!q||!q.date)return;const J=new Date,ae=Nh(J,{weekStartsOn:1});if(!hc(i,ae)){if(w?.can_admin_roster){S(z);return}if(w?.can_edit_roster){const Q=Of(q.date),le=Th(J);if(hc(Q,le)||R1(Q,le))return;M(q)}}},W=()=>{if(!T||!u)return;const z=T.assigned_member_ids||[],q=u.id,J=z.includes(q);let ae;J?ae=z.filter(Q=>Q!==q):ae=[...z,q],g({slot:T,newMemberIds:ae}),M(null)},X=k.useMemo(()=>{const q=Nh(new Date,{weekStartsOn:1});return hc(i,q)},[i]),oe=U.find(z=>z.id===y);return f?m.jsx("div",{children:"Loading..."}):m.jsxs("div",{className:lt.featureContainer,children:[m.jsxs("div",{className:lt.headerNavigation,children:[m.jsx(kt,{name:"chevron-left",label:r.formatMessage({id:"roster.previousWeek"}),onClick:A,className:lt.navButton}),m.jsxs("div",{className:lt.headerTitle,children:[m.jsx("h2",{children:_?.name}),m.jsx("p",{children:m.jsx(ie,{id:"roster.weekOf",values:{date:r.formatDate(i,{month:"long",day:"numeric"})}})})]}),m.jsx(kt,{name:"chevron-right",label:r.formatMessage({id:"roster.nextWeek"}),onClick:D,className:lt.navButton})]}),m.jsx(bE,{roster:_,rosterSlots:U,members:p||[],onSlotClick:!X&&(w?.can_edit_roster||w?.can_admin_roster)?$:void 0,startDate:i}),oe&&m.jsx(eE,{slot:oe,roster:_,allMembers:p||[],onClose:()=>S(null),onSave:j}),m.jsxs(ks,{label:r.formatMessage({id:"roster.selfAssignment.title"}),open:!!T,onSlAfterHide:z=>{z.stopPropagation(),M(null)},children:[T&&u&&m.jsx("p",{children:T.assigned_member_ids?.includes(u.id)?r.formatMessage({id:"roster.confirmRemoveSelf"}):r.formatMessage({id:"roster.confirmAddSelf"})}),m.jsxs("div",{slot:"footer",className:lt.dialogFooter,children:[m.jsx(Le,{slot:"footer",onClick:()=>M(null),children:m.jsx(ie,{id:"common.no"})}),m.jsx(Le,{slot:"footer",variant:"primary",onClick:W,children:m.jsx(ie,{id:"common.yes"})})]})]})]})}const _E="_pageWrapper_1fy59_1",xE="_pageContent_1fy59_10",wE="_drawer_1fy59_20",SE="_profileAction_1fy59_32",EE="_profileAvatar_1fy59_38",hs={pageWrapper:_E,pageContent:xE,drawer:wE,profileAction:SE,profileAvatar:EE};function CE(){const t=Ne(),i=Yt(),{data:l}=fi({enabled:!0}),{roster_id:r}=Cs(),o=()=>{i(-1)},[u,h]=k.useState(()=>Nh(new Date,{weekStartsOn:1})),f=()=>{const p=vb(u),b=bb(u),w=`week-${`${p}${String(b).padStart(2,"0")}`}`,y=t.formatMessage({id:"share.rosterTitle"}),S=t.formatMessage({id:"share.rosterText"});P4(w,y,S)},g=xt.getPlatform()==="ios"?"box-arrow-up":"share";return m.jsx(mi,{label:t.formatMessage({id:"shell.tab.roster"}),placement:"end",open:!0,onSlAfterHide:o,className:hs.drawer,children:m.jsxs("div",{className:hs.pageWrapper,children:[m.jsx(pi,{showBackButton:!0,headerActions:m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--sl-spacing-small)"},children:[m.jsx(kt,{name:g,label:t.formatMessage({id:"roster.shareWeekLabel"}),onClick:f}),m.jsx("div",{onClick:()=>i("/profile/me"),className:hs.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:l?.social_profiles?.avatar_url,name:l?.firstname??"",className:hs.profileAvatar})})]})}),m.jsx("div",{className:hs.pageContent,children:m.jsx(yE,{rosterId:r,currentWeekStart:u,onWeekChange:h})})]})})}const AE="_pageWrapper_1ndxt_1",TE="_profileAction_1ndxt_31",ME="_profileAvatar_1ndxt_37",NE="_headerActions_1ndxt_41",nc={pageWrapper:AE,profileAction:TE,profileAvatar:ME,headerActions:NE};var $E="sl-spinner";kc.define("sl-spinner");var OE=Xt({tagName:$E,elementClass:kc,react:Ht,events:{},displayName:"SlSpinner"}),J1=OE,kE=ht`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Ia=class extends tt{constructor(){super(...arguments),this.localize=new xa(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const i of t)i.type==="attributes"&&i.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Ba(this.body);const{keyframes:i,options:l}=ra(this,"details.show",{dir:this.localize.dir()});await sa(this.body,L0(i,this.body.scrollHeight),l),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Ba(this.body);const{keyframes:i,options:l}=ra(this,"details.hide",{dir:this.localize.dir()});await sa(this.body,L0(i,this.body.scrollHeight),l),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,yn(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,yn(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return xe`
      <details
        part="base"
        class=${ot({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Ia.styles=[wt,kE];Ia.dependencies={"sl-icon":Ut};C([Ie(".details")],Ia.prototype,"details",2);C([Ie(".details__header")],Ia.prototype,"header",2);C([Ie(".details__body")],Ia.prototype,"body",2);C([Ie(".details__expand-icon-slot")],Ia.prototype,"expandIconSlot",2);C([B({type:Boolean,reflect:!0})],Ia.prototype,"open",2);C([B()],Ia.prototype,"summary",2);C([B({type:Boolean,reflect:!0})],Ia.prototype,"disabled",2);C([qe("open",{waitUntilFirstUpdate:!0})],Ia.prototype,"handleOpenChange",1);bt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});bt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var RE="sl-details";Ia.define("sl-details");var DE=Xt({tagName:RE,elementClass:Ia,react:Ht,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"}),LE=DE;const zE="_profilePage_kstar_1",jE="_cover_kstar_7",BE="_header_kstar_19",HE="_avatar_kstar_35",UE="_stableInfo_kstar_43",IE="_name_kstar_53",PE="_followerCount_kstar_59",VE="_followButton_kstar_65",FE="_metaInfo_kstar_70",qE="_detailsPanel_kstar_79",GE="_actionButtons_kstar_89",YE="_actionIcon_kstar_97",XE="_actionIconPlus_kstar_101",Gt={profilePage:zE,cover:jE,header:BE,avatar:HE,stableInfo:UE,name:IE,followerCount:PE,followButton:VE,metaInfo:FE,detailsPanel:qE,actionButtons:GE,actionIcon:YE,actionIconPlus:XE},WE="_infoGrid_1andj_1",QE="_infoCell_1andj_7",ZE="_cellLabel_1andj_15",KE="_cellValue_1andj_23",pc={infoGrid:WE,infoCell:QE,cellLabel:ZE,cellValue:KE};function Uf({label:t,value:i}){return i?m.jsxs("div",{className:pc.infoCell,children:[m.jsx("strong",{className:pc.cellLabel,children:t}),m.jsx("div",{className:pc.cellValue,children:i})]}):null}function JE({user:t}){const i=Ne(),l=k.useMemo(()=>{const r={M:"gender.male",F:"gender.female",X:"gender.other"},o=[{id:"users.firstNameLabel",value:t.firstname},{id:"users.lastNameLabel",value:t.lastname},{id:"users.cityLabel",value:t.city},{id:"users.countryLabel",value:rf(t.country,i.locale)},{id:"users.genderLabel",value:t.gender&&r[t.gender]?i.formatMessage({id:r[t.gender]}):t.gender},{id:"users.dateOfBirthLabel",value:t.date_of_birth?i.formatDate(t.date_of_birth,{year:"numeric",month:"long",day:"numeric"}):null}];return t.email&&o.push({id:"auth.emailLabel",value:t.email}),o},[t,i.locale]);return m.jsx("div",{className:pc.infoGrid,children:l.map(r=>m.jsx(Uf,{label:i.formatMessage({id:r.id}),value:r.value},r.id))})}const eC="_infoGrid_tlonv_1",tC={infoGrid:eC};function Hc(t,i="en"){const l=typeof t=="string"?new Date(t):t,r=new Date;let o=r.getFullYear()-l.getFullYear(),u=r.getMonth()-l.getMonth();r.getDate()<l.getDate()&&u--,u<0&&(o--,u+=12);const f={en:{year:"year",years:"years",month:"month",months:"months"},nl:{year:"jaar",years:"jaar",month:"maand",months:"maanden"}}[i],g=o===1?f.year:f.years,p=u===1?f.month:f.months;return`${o} ${g} (${u} ${p})`}function aC({horse:t}){const i=Ne(),l=k.useMemo(()=>[{id:"horses.officialNameLabel",value:t.official_name},{id:"horses.ageLabel",value:t.date_of_birth?Hc(t.date_of_birth,i.locale.startsWith("nl")?"nl":"en"):null},{id:"horses.genderLabel",value:t.gender?i.formatMessage({id:`gender.${t.gender.toLowerCase()}`,defaultMessage:t.gender}):null},{id:"horses.colorLabel",value:t.color},{id:"horses.breedStudbookLabel",value:t.breed_studbook},{id:"horses.countryOfBirthLabel",value:rf(t.country_of_birth,i.locale)},{id:"horses.chipNumberLabel",value:t.chip_number},{id:"horses.uelnLabel",value:t.ueln},{id:"horses.passportNumberLabel",value:t.passport_number}].filter(r=>r.value),[t,i]);return m.jsx("div",{className:tC.infoGrid,children:l.map(r=>m.jsx(Uf,{label:i.formatMessage({id:r.id}),value:r.value},r.id))})}const iC="_infoGrid_tlonv_1",nC={infoGrid:iC};function lC({organization:t}){const i=Ne(),l=k.useMemo(()=>[{id:"auth.emailLabel",value:t.email},{id:"organization.cityLabel",value:t.city},{id:"users.countryLabel",value:rf(t.country,i.locale)},{id:"organization.cocLabel",value:t.chamber_of_commerce_registration}].filter(r=>r.value),[t,i.locale]);return m.jsx("div",{className:nC.infoGrid,children:l.map(r=>m.jsx(Uf,{label:i.formatMessage({id:r.id}),value:r.value},r.id))})}var rC=ht`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,be=class extends tt{constructor(){super(...arguments),this.formControlController=new Ts(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new il(this,"help-text","label"),this.localize=new xa(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!i&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,i,l="none"){this.input.setSelectionRange(t,i,l)}setRangeText(t,i,l,r="preserve"){const o=i??this.input.selectionStart,u=l??this.input.selectionEnd;this.input.setRangeText(t,o,u,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!i,u=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return xe`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${l?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ot({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${ve(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ve(this.placeholder)}
              minlength=${ve(this.minlength)}
              maxlength=${ve(this.maxlength)}
              min=${ve(this.min)}
              max=${ve(this.max)}
              step=${ve(this.step)}
              .value=${Hf(this.value)}
              autocapitalize=${ve(this.autocapitalize)}
              autocomplete=${ve(this.autocomplete)}
              autocorrect=${ve(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ve(this.pattern)}
              enterkeyhint=${ve(this.enterkeyhint)}
              inputmode=${ve(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${u?xe`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?xe`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?xe`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:xe`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};be.styles=[wt,Rc,rC];be.dependencies={"sl-icon":Ut};C([Ie(".input__control")],be.prototype,"input",2);C([ft()],be.prototype,"hasFocus",2);C([B()],be.prototype,"title",2);C([B({reflect:!0})],be.prototype,"type",2);C([B()],be.prototype,"name",2);C([B()],be.prototype,"value",2);C([Bf()],be.prototype,"defaultValue",2);C([B({reflect:!0})],be.prototype,"size",2);C([B({type:Boolean,reflect:!0})],be.prototype,"filled",2);C([B({type:Boolean,reflect:!0})],be.prototype,"pill",2);C([B()],be.prototype,"label",2);C([B({attribute:"help-text"})],be.prototype,"helpText",2);C([B({type:Boolean})],be.prototype,"clearable",2);C([B({type:Boolean,reflect:!0})],be.prototype,"disabled",2);C([B()],be.prototype,"placeholder",2);C([B({type:Boolean,reflect:!0})],be.prototype,"readonly",2);C([B({attribute:"password-toggle",type:Boolean})],be.prototype,"passwordToggle",2);C([B({attribute:"password-visible",type:Boolean})],be.prototype,"passwordVisible",2);C([B({attribute:"no-spin-buttons",type:Boolean})],be.prototype,"noSpinButtons",2);C([B({reflect:!0})],be.prototype,"form",2);C([B({type:Boolean,reflect:!0})],be.prototype,"required",2);C([B()],be.prototype,"pattern",2);C([B({type:Number})],be.prototype,"minlength",2);C([B({type:Number})],be.prototype,"maxlength",2);C([B()],be.prototype,"min",2);C([B()],be.prototype,"max",2);C([B()],be.prototype,"step",2);C([B()],be.prototype,"autocapitalize",2);C([B()],be.prototype,"autocorrect",2);C([B()],be.prototype,"autocomplete",2);C([B({type:Boolean})],be.prototype,"autofocus",2);C([B()],be.prototype,"enterkeyhint",2);C([B({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],be.prototype,"spellcheck",2);C([B()],be.prototype,"inputmode",2);C([qe("disabled",{waitUntilFirstUpdate:!0})],be.prototype,"handleDisabledChange",1);C([qe("step",{waitUntilFirstUpdate:!0})],be.prototype,"handleStepChange",1);C([qe("value",{waitUntilFirstUpdate:!0})],be.prototype,"handleValueChange",1);var sC="sl-input";be.define("sl-input");var oC=Xt({tagName:sC,elementClass:be,react:Ht,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),Ee=oC,cC=ht`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Rs=class extends tt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Rs.styles=[wt,cC];C([B({type:Boolean,reflect:!0})],Rs.prototype,"vertical",2);C([qe("vertical")],Rs.prototype,"handleVerticalChange",1);var uC="sl-divider";Rs.define("sl-divider");var dC=Xt({tagName:uC,elementClass:Rs,react:Ht,events:{},displayName:"SlDivider"}),Uc=dC;const hC="_editUserDrawer_dn68d_1",fC="_formContent_dn68d_33",pC="_countrySelect_dn68d_45",_h={editUserDrawer:hC,formContent:fC,countrySelect:pC};function mC({isOpen:t,onClose:i,user:l,socialProfile:r}){const o=Ne(),u=ix(),h=Ac(),[f,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(""),[T,M]=k.useState(null),[A,D]=k.useState(""),[U,j]=k.useState(""),[$,W]=k.useState(""),[X,oe]=k.useState(""),[z,q]=k.useState({}),J=[{value:"M",labelId:"gender.male"},{value:"F",labelId:"gender.female"},{value:"X",labelId:"gender.other"}];k.useEffect(()=>{t&&l&&(g(r?.display_name||""),b(l.firstname||""),w(l.lastname||""),S(l.email||""),M(l.date_of_birth?new Date(l.date_of_birth):null),D(l.city||""),j(l.country||""),W(l.gender||""),oe(l.locale||"en"),q({}))},[t,l,r]);const ae=()=>{i()},Q=()=>{const I={},Z=o.formatMessage({id:"validation.required"});if(r&&!f.trim()&&(I.displayName=Z),p.trim()||(I.firstname=Z),_.trim()||(I.lastname=Z),y&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)&&(I.email=o.formatMessage({id:"validation.emailInvalid"})),T){const ee=O0(new Date);T>ee&&(I.dateOfBirth=o.formatMessage({id:"validation.ageMinimum"}))}return q(I),Object.keys(I).length===0},le=async()=>{if(Q())try{r&&f!==r.display_name&&await h.mutateAsync({socialProfileId:r.id,displayName:f}),await u.mutateAsync({userId:l.id,updates:{firstname:p,lastname:_,email:y||void 0,date_of_birth:T?za(T,"yyyy-MM-dd"):void 0,gender:$||void 0,city:A||void 0,country:U||void 0,locale:X}}),i()}catch(I){console.error("Failed to update user:",I)}},te=I=>{const Z=I.locale.substring(0,2),ee=Tc.slice().sort((ce,ye)=>{const ct=ce.name[Z]??ce.name.en,Ae=ye.name[Z]??ye.name.en;return ct.localeCompare(Ae,Z)});if(Z==="nl"){const ce=ee.find(Ae=>Ae.code==="NL"),ye=ee.find(Ae=>Ae.code==="BE"),ct=ee.filter(Ae=>Ae.code!=="NL"&&Ae.code!=="BE");return m.jsxs(R.Fragment,{children:[[ce,ye].map(Ae=>m.jsx(je,{value:Ae.code,children:Ae.name[Z]??Ae.name.en},Ae.code)),m.jsx(Uc,{}),ct.map(Ae=>m.jsx(je,{value:Ae.code,children:Ae.name[Z]??Ae.name.en},Ae.code))]})}return ee.map(ce=>m.jsx(je,{value:ce.code,children:ce.name[Z]??ce.name.en},ce.code))};return m.jsxs(mi,{label:o.formatMessage({id:"user.edit.title"}),placement:"end",open:t,onSlAfterHide:ae,className:_h.editUserDrawer,children:[m.jsxs("div",{className:_h.formContent,children:[r&&m.jsx(Ee,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:f,onSlInput:I=>g(I.target.value),helpText:z.displayName,required:!0}),m.jsxs(ta,{"data-testid":"language-select",label:o.formatMessage({id:"users.languageLabel"}),value:X,onSlChange:I=>oe(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},children:[m.jsx(je,{value:"en",children:o.formatMessage({id:"common.language.english"})}),m.jsx(je,{value:"nl",children:o.formatMessage({id:"common.language.dutch"})})]}),m.jsx(Ee,{"data-testid":"firstname-input",label:o.formatMessage({id:"users.firstNameLabel"}),value:p,onSlInput:I=>b(I.target.value),required:!0,helpText:z.firstname}),m.jsx(Ee,{"data-testid":"lastname-input",label:o.formatMessage({id:"users.lastNameLabel"}),value:_,onSlInput:I=>w(I.target.value),required:!0,helpText:z.lastname}),m.jsx(Ee,{"data-testid":"email-input",label:o.formatMessage({id:"auth.emailLabel"}),value:y,onSlInput:I=>S(I.target.value),helpText:z.email}),m.jsx(Ee,{"data-testid":"dob-input",label:o.formatMessage({id:"users.dateOfBirthLabel"}),type:"date",max:za(O0(new Date),"yyyy-MM-dd"),value:T?za(T,"yyyy-MM-dd"):"",onSlChange:I=>M(I.target.valueAsDate),helpText:z.dateOfBirth}),m.jsx(ta,{"data-testid":"gender-select",label:o.formatMessage({id:"users.genderLabel"}),value:$,onSlChange:I=>W(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},children:J.map(I=>m.jsx(je,{value:I.value,children:o.formatMessage({id:I.labelId})},I.value))}),m.jsx(Ee,{"data-testid":"city-input",label:o.formatMessage({id:"users.cityLabel"}),value:A,onSlInput:I=>D(I.target.value)}),m.jsx(ta,{"data-testid":"country-select",className:_h.countrySelect,label:o.formatMessage({id:"users.countryLabel"}),value:U,onSlChange:I=>j(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},hoist:!0,children:te(o)})]}),m.jsx(Le,{slot:"footer",variant:"primary",onClick:le,loading:u.isPending||h.isPending,children:m.jsx(ie,{id:"common.save",defaultMessage:"Save"})}),m.jsx(Le,{slot:"footer",variant:"neutral",onClick:ae,children:m.jsx(ie,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const gC="_editHorseDrawer_h0uut_1",vC="_formContent_h0uut_33",bC="_inputWithIcon_h0uut_46",yC="_countrySelect_h0uut_58",_C="_readOnlyInput_h0uut_62",xC="_dobRow_h0uut_68",wC="_dobInput_h0uut_75",SC="_ageDisplay_h0uut_79",Li={editHorseDrawer:gC,formContent:vC,inputWithIcon:bC,countrySelect:yC,readOnlyInput:_C,dobRow:xC,dobInput:wC,ageDisplay:SC};function ey({isOpen:t,onClose:i,horse:l,socialProfile:r}){const o=Ne(),u=nx(),{data:h}=_b({socialId:l.social_profile_id,enabled:t&&!!l.social_profile_id}),f=h??r,g=Ac(),{data:p}=xb({profileId:f?.id,enabled:!!f?.id&&t}),b=p?.can_admin_social_profile??!1,[_,w]=k.useState(""),[y,S]=k.useState(""),[T,M]=k.useState(""),[A,D]=k.useState(""),[U,j]=k.useState(""),[$,W]=k.useState(null),[X,oe]=k.useState(""),[z,q]=k.useState(""),[J,ae]=k.useState(""),[Q,le]=k.useState(""),[te,I]=k.useState(""),[Z,ee]=k.useState(""),[ce,ye]=k.useState({});k.useEffect(()=>{t&&l&&(w(f?.display_name||""),S(l.name||""),M(l.official_name||""),D(l.chip_number||""),j(l.ueln||""),W(l.date_of_birth?new Date(l.date_of_birth):null),oe(l.gender||""),q(l.color||""),ae(l.breed_studbook||""),le(l.country_of_birth||""),I(l.markings||""),ee(l.chip_location||""),ye({}))},[t,l,f]);const ct=()=>{i()},Ae=()=>{const re={};return f&&!_.trim()&&(re.displayName=o.formatMessage({id:"validation.required"})),y.trim()||(re.name=o.formatMessage({id:"validation.required"})),!A.trim()&&!U.trim()&&(re.chipOrUeln=o.formatMessage({id:"validation.chipOrUelnRequired"})),U.trim()&&U.trim().length!==15&&(re.ueln=o.formatMessage({id:"validation.uelnInvalid"})),ye(re),Object.keys(re).length===0},Et=async()=>{if(Ae())try{f&&f.id&&_!==f.display_name&&await g.mutateAsync({socialProfileId:f.id,displayName:_}),await u.mutateAsync({horseId:l.id,updates:{name:y,official_name:T||void 0,chip_number:A||void 0,ueln:U||void 0,date_of_birth:$?za($,"yyyy-MM-dd"):void 0,gender:X||void 0,color:z||void 0,breed_studbook:J||void 0,country_of_birth:Q||void 0,markings:te||void 0,chip_location:Z||void 0}}),i()}catch(re){console.error("Failed to update horse:",re)}},K=async re=>{const{scanBarcode:Be}=await $t(async()=>{const{scanBarcode:he}=await import("./index-Cjc9EUV3.js");return{scanBarcode:he}},__vite__mapDeps([6,1])),$e=await Be();$e&&(re==="chipNumber"?D($e):re==="ueln"&&j($e))},ze=async re=>{if(xt.isNativePlatform()){re.preventDefault();const{pickDate:Be}=await $t(async()=>{const{pickDate:he}=await import("./index-Cjc9EUV3.js");return{pickDate:he}},__vite__mapDeps([6,1])),$e=await Be({mode:"date",value:$?$.toISOString():void 0,max:new Date().toISOString()});$e&&W(new Date($e))}},Dt=re=>{const Be=re.locale.substring(0,2),$e=Tc.slice().sort((he,Wt)=>{const vi=he.name[Be]??he.name.en,Ge=Wt.name[Be]??Wt.name.en;return vi.localeCompare(Ge,Be)});if(Be==="nl"){const he=$e.find(Ge=>Ge.code==="NL"),Wt=$e.find(Ge=>Ge.code==="BE"),vi=$e.filter(Ge=>Ge.code!=="NL"&&Ge.code!=="BE");return m.jsxs(R.Fragment,{children:[[he,Wt].map(Ge=>m.jsx(je,{value:Ge.code,children:Ge.name[Be]??Ge.name.en},Ge.code)),m.jsx(Uc,{}),vi.map(Ge=>m.jsx(je,{value:Ge.code,children:Ge.name[Be]??Ge.name.en},Ge.code))]})}return $e.map(he=>m.jsx(je,{value:he.code,children:he.name[Be]??he.name.en},he.code))};return m.jsxs(mi,{label:o.formatMessage({id:"horse.edit.title"}),placement:"end",open:t,onSlAfterHide:i,className:Li.editHorseDrawer,children:[m.jsxs("div",{className:Li.formContent,children:[f&&m.jsx(Ee,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:_,onSlInput:re=>w(re.target.value),helpText:ce.displayName,required:!0,readonly:!b,className:b?void 0:Li.readOnlyInput}),m.jsx(Ee,{"data-testid":"horse-official-name-input",label:o.formatMessage({id:"horses.officialNameLabel"}),value:T,required:!0,onSlInput:re=>{const Be=re.target.value;(!y||y===T)&&S(Be),M(Be)}}),m.jsx(Ee,{"data-testid":"horse-name-input",label:o.formatMessage({id:"horses.nameLabel"}),value:y,onSlInput:re=>S(re.target.value),required:!0,helpText:ce.name}),m.jsxs("div",{className:Li.inputWithIcon,children:[m.jsx(Ee,{"data-testid":"horse-chip-number-input",label:o.formatMessage({id:"horses.chipNumberLabel"}),value:A,onSlInput:re=>D(re.target.value),helpText:ce.chipOrUeln}),m.jsx(kt,{"data-testid":"chip-scan-button",name:"qr-code",label:o.formatMessage({id:"horses.scanBarcode"}),onClick:()=>K("chipNumber")})]}),m.jsx(Ee,{label:o.formatMessage({id:"horses.chipLocationLabel"}),value:Z,onSlInput:re=>ee(re.target.value)}),m.jsxs("div",{className:Li.inputWithIcon,children:[m.jsx(Ee,{"data-testid":"horse-ueln-input",label:o.formatMessage({id:"horses.uelnLabel"}),value:U,onSlInput:re=>j(re.target.value),helpText:ce.ueln||ce.chipOrUeln}),m.jsx(kt,{"data-testid":"ueln-scan-button",name:"qr-code",label:o.formatMessage({id:"horses.scanBarcode"}),onClick:()=>K("ueln")})]}),m.jsxs("div",{className:Li.dobRow,children:[m.jsx(Ee,{className:Li.dobInput,label:o.formatMessage({id:"horses.dateOfBirthLabel"}),type:xt.isNativePlatform()?"text":"date",max:new Date().toISOString().split("T")[0],value:$?xt.isNativePlatform()?o.formatDate($):za($,"yyyy-MM-dd"):"",readonly:xt.isNativePlatform(),onClick:ze,onSlChange:re=>W(re.target.valueAsDate),children:xt.isNativePlatform()&&m.jsx(st,{name:"calendar",slot:"suffix"})}),$&&m.jsx("span",{className:Li.ageDisplay,children:Hc($,o.locale.startsWith("nl")?"nl":"en")})]}),m.jsxs(ta,{label:o.formatMessage({id:"horses.genderLabel"}),value:X,onSlChange:re=>oe(re.target.value),onSlAfterHide:re=>{re.stopPropagation()},children:[m.jsx(je,{value:"Stallion",children:o.formatMessage({id:"gender.stallion"})}),m.jsx(je,{value:"Mare",children:o.formatMessage({id:"gender.mare"})}),m.jsx(je,{value:"Gelding",children:o.formatMessage({id:"gender.gelding"})})]}),m.jsx(ta,{label:o.formatMessage({id:"horses.countryOfBirthLabel"}),className:Li.countrySelect,value:Q,onSlChange:re=>le(re.target.value),onSlAfterHide:re=>{re.stopPropagation()},hoist:!0,children:Dt(o)}),m.jsx(Ee,{label:o.formatMessage({id:"horses.colorLabel"}),value:z,onSlInput:re=>q(re.target.value)}),m.jsx(Ee,{label:o.formatMessage({id:"horses.breedStudbookLabel"}),value:J,onSlInput:re=>ae(re.target.value)}),m.jsx(Ee,{label:o.formatMessage({id:"horses.markingsLabel"}),value:te,onSlInput:re=>I(re.target.value)})]}),m.jsx(Le,{slot:"footer",variant:"primary",onClick:Et,disabled:u.isPending||g.isPending,loading:u.isPending||g.isPending,children:m.jsx(ie,{id:"common.save",defaultMessage:"Save"})}),m.jsx(Le,{slot:"footer",variant:"neutral",onClick:ct,children:m.jsx(ie,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const EC="_editOrganizationDrawer_2n73i_1",CC="_formContent_2n73i_33",AC="_countrySelect_2n73i_45",xh={editOrganizationDrawer:EC,formContent:CC,countrySelect:AC};function TC({isOpen:t,onClose:i,organization:l,socialProfile:r}){const o=Ne(),u=lx(),h=Ac(),[f,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(""),[T,M]=k.useState(""),[A,D]=k.useState(""),[U,j]=k.useState({});k.useEffect(()=>{t&&l&&(g(r?.display_name||""),b(l.name||""),w(l.email||""),S(l.chamber_of_commerce_registration||""),M(l.city||""),D(l.country||""),j({}))},[t,l,r]);const $=()=>{i()},W=()=>{const z={},q=o.formatMessage({id:"validation.required"});return r&&!f.trim()&&(z.displayName=q),p.trim()||(z.name=q),_&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_)&&(z.email=o.formatMessage({id:"validation.emailInvalid"})),j(z),Object.keys(z).length===0},X=async()=>{if(W())try{r&&f!==r.display_name&&await h.mutateAsync({socialProfileId:r.id,displayName:f}),await u.mutateAsync({organizationId:l.id,updates:{name:p,email:_||void 0,chamber_of_commerce_registration:y||void 0,city:T||void 0,country:A||void 0}}),i()}catch(z){console.error("Failed to update organization:",z)}},oe=z=>{const q=z.locale.substring(0,2),J=Tc.slice().sort((ae,Q)=>{const le=ae.name[q]??ae.name.en,te=Q.name[q]??Q.name.en;return le.localeCompare(te,q)});if(q==="nl"){const ae=J.find(te=>te.code==="NL"),Q=J.find(te=>te.code==="BE"),le=J.filter(te=>te.code!=="NL"&&te.code!=="BE");return m.jsxs(R.Fragment,{children:[[ae,Q].map(te=>m.jsx(je,{value:te.code,children:te.name[q]??te.name.en},te.code)),m.jsx(Uc,{}),le.map(te=>m.jsx(je,{value:te.code,children:te.name[q]??te.name.en},te.code))]})}return J.map(ae=>m.jsx(je,{value:ae.code,children:ae.name[q]??ae.name.en},ae.code))};return m.jsxs(mi,{label:o.formatMessage({id:"organization.edit.title"}),placement:"end",open:t,onSlAfterHide:$,className:xh.editOrganizationDrawer,children:[m.jsxs("div",{className:xh.formContent,children:[r&&m.jsx(Ee,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:f,onSlInput:z=>g(z.target.value),helpText:U.displayName,required:!0}),m.jsx(Ee,{"data-testid":"name-input",label:o.formatMessage({id:"organization.nameLabel"}),value:p,onSlInput:z=>b(z.target.value),required:!0,helpText:U.name}),m.jsx(Ee,{"data-testid":"email-input",label:o.formatMessage({id:"auth.emailLabel"}),value:_,onSlInput:z=>w(z.target.value),helpText:U.email}),m.jsx(Ee,{"data-testid":"coc-input",label:o.formatMessage({id:"organization.cocLabel"}),value:y,onSlInput:z=>S(z.target.value)}),m.jsx(Ee,{"data-testid":"city-input",label:o.formatMessage({id:"organization.cityLabel"}),value:T,onSlInput:z=>M(z.target.value)}),m.jsx(ta,{"data-testid":"country-select",className:xh.countrySelect,label:o.formatMessage({id:"users.countryLabel"}),value:A,onSlChange:z=>D(z.target.value),onSlAfterHide:z=>{z.stopPropagation()},hoist:!0,children:oe(o)})]}),m.jsx(Le,{slot:"footer",variant:"primary",onClick:X,loading:u.isPending||h.isPending,children:m.jsx(ie,{id:"common.save",defaultMessage:"Save"})}),m.jsx(Le,{slot:"footer",variant:"neutral",onClick:$,children:m.jsx(ie,{id:"common.cancel",defaultMessage:"Cancel"})})]})}function MC({socialProfileType:t,userMemberships:i,horseDetails:l,orgDetails:r}){const o=[];return t==="user"&&i?i.forEach(u=>o.push(m.jsx("p",{className:Gt.stableRole,children:m.jsx(ie,{id:`profile.stable.${u.role}`,values:{organizationName:u.organizations?.name,nickName:u.nickname}})},u.id))):t==="horse"&&l?.official_name?o.push(m.jsx("p",{children:l.official_name},"official-name")):t==="organization"&&r?.city&&o.push(m.jsx("p",{children:m.jsx(ie,{id:"profile.organization.location",values:{city:r.city}})},"org-location")),m.jsx("div",{className:Gt.stableInfo,children:o})}function NC({profileId:t}){const i=Yt(),[l,r]=k.useState(!1),[o,u]=k.useState(!1),h=Ac(),f=rx(),g=sx(),{data:p,isLoading:b}=fi({enabled:!0}),_=t==="me"||t===p?.social_profile_id,w=_?p?.social_profile_id:t,{data:y,isLoading:S}=_b({socialId:w,enabled:!!w}),{data:T}=xb({profileId:y?.id,enabled:!!y?.id}),{data:M,isLoading:A}=ox({userId:y?.entity_id,enabled:y?.type==="user"}),{data:D,isLoading:U}=wb({horseId:y?.entity_id,enabled:y?.type==="horse"}),{data:j,isLoading:$}=Sb({organizationId:y?.entity_id,enabled:y?.type==="organization"}),{data:W}=cx({userId:M?.id,enabled:y?.type==="user"&&!!M}),{data:X,isLoading:oe}=ux({followerId:p?.social_profile_id,targetId:y?.id,enabled:!!p?.social_profile_id&&!!y?.id&&!_}),{data:z}=dx({targetId:y?.id,enabled:!!y?.id}),q=T?.can_edit_profile??!1,J=T?.can_post_social??!1,ae=T?.can_admin_team??!1,Q=T?.can_admin_social_profile??!1,le=y?.type==="horse"||y?.type==="organization",te=y?.type==="horse"?D?.owner_id===p?.id:q,I=!_&&le&&!te,Z=()=>{r(!0)},ee=()=>{!p?.social_profile_id||!y?.id||(X?g.mutate({followerId:p.social_profile_id,targetId:y.id}):f.mutate({followerId:p.social_profile_id,targetId:y.id}))},ce=async Ae=>{if(y){u(!0);try{const Et=`${y.id}/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`,{error:K}=await la.storage.from("avatars").upload(Et,Ae,{cacheControl:"3600",upsert:!1});if(K)throw K;const{data:{publicUrl:ze}}=la.storage.from("avatars").getPublicUrl(Et);h.mutate({socialProfileId:y.id,avatarUrl:ze})}catch(Et){console.error("Avatar upload failed:",Et)}finally{u(!1)}}},ye=Ne();if(b||S||A||U||$)return m.jsx(J1,{});if(!y)return m.jsx("div",{children:ye.formatMessage({id:"profile.notFound"})});const ct=y?.display_name||ye.formatMessage({id:"profile.NoDisplayName"});return m.jsxs("div",{className:Gt.profilePage,children:[m.jsx("div",{className:Gt.cover}),m.jsxs("div",{className:Gt.header,children:[Q?m.jsx(I6,{currentImage:y.avatar_url,name:ct,onSave:ce,loading:o,className:Gt.avatar}):m.jsx(vt,{image:y.avatar_url,name:ct,className:Gt.avatar}),m.jsxs("h2",{className:Gt.name,"data-testid":"profile-name",children:[ct,I&&p&&m.jsx(Le,{className:Gt.followButton,variant:X?"default":"primary",size:"small",onClick:ee,loading:f.isPending||g.isPending||oe,"data-testid":"follow-button",children:m.jsx(ie,{id:X?"profile.unfollow":"profile.follow"})})]}),m.jsx(MC,{socialProfileType:y.type,userMemberships:W,horseDetails:D,orgDetails:j}),m.jsx("div",{className:Gt.metaInfo,children:le&&m.jsx("span",{className:Gt.followerCount,children:m.jsx(ie,{id:"profile.followers",values:{count:z||0}})})})]}),q&&m.jsxs(LE,{summary:ye.formatMessage({id:"profile.info",defaultMessage:"Info"}),open:!1,className:Gt.detailsPanel,"data-testid":"profile-details-panel",children:[m.jsx(st,{slot:"expand-icon",name:"chevron-up"}),y.type==="user"&&M&&m.jsx(JE,{user:M}),y.type==="horse"&&D&&m.jsx(aC,{horse:D}),y.type==="organization"&&j&&m.jsx(lC,{organization:j})]}),m.jsxs("div",{className:Gt.actionButtons,children:[q&&m.jsxs(Le,{variant:"primary",size:"small",onClick:Z,"data-testid":"edit-info-button",children:[m.jsx(st,{slot:"prefix",name:"pencil",className:Gt.actionIcon}),m.jsx(ie,{id:"profile.edit.info"})]}),J&&m.jsxs(Le,{variant:"primary",size:"small","data-testid":"post-update-button",children:[m.jsx(st,{slot:"prefix",name:"plus",className:Gt.actionIconPlus}),m.jsx(ie,{id:"profile.postUpdate"})]}),ae&&y.type==="horse"&&m.jsxs(Le,{variant:"primary",size:"small",onClick:()=>i(`/horse/${y.entity_id}/team`),children:[m.jsx(st,{slot:"prefix",name:"people",className:Gt.actionIcon}),m.jsx(ie,{id:"manageTeam.buttonLabel",defaultMessage:"My hoomans"})]})]}),y.type==="user"&&M&&m.jsx(mC,{isOpen:l,onClose:()=>r(!1),user:M,socialProfile:y}),y.type==="horse"&&D&&m.jsx(ey,{isOpen:l,onClose:()=>r(!1),horse:D,socialProfile:y}),y.type==="organization"&&j&&m.jsx(TC,{isOpen:l,onClose:()=>r(!1),organization:j,socialProfile:y})]})}function W0(){const{social_id:t}=Cs(),i=t||"me",l=i==="me",r=hx(),o=Ne(),u=Yt(),{data:h}=fi({enabled:!0}),f=m.jsx("div",{className:nc.headerActions,children:l?m.jsx(kt,{name:"box-arrow-right",label:o.formatMessage({id:"profile.logout"}),onClick:r,"data-testid":"logout-button"}):m.jsx("div",{onClick:()=>u("/profile/me"),className:nc.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:h?.social_profiles?.avatar_url,name:h?.firstname??"",className:nc.profileAvatar})})});return m.jsxs("div",{className:nc.pageWrapper,children:[m.jsx(pi,{showBackButton:!0,headerActions:f}),m.jsx(NC,{profileId:i})]})}var Q0,Fe="colors",Kt="sizes",ne="space",$C={gap:ne,gridGap:ne,columnGap:ne,gridColumnGap:ne,rowGap:ne,gridRowGap:ne,inset:ne,insetBlock:ne,insetBlockEnd:ne,insetBlockStart:ne,insetInline:ne,insetInlineEnd:ne,insetInlineStart:ne,margin:ne,marginTop:ne,marginRight:ne,marginBottom:ne,marginLeft:ne,marginBlock:ne,marginBlockEnd:ne,marginBlockStart:ne,marginInline:ne,marginInlineEnd:ne,marginInlineStart:ne,padding:ne,paddingTop:ne,paddingRight:ne,paddingBottom:ne,paddingLeft:ne,paddingBlock:ne,paddingBlockEnd:ne,paddingBlockStart:ne,paddingInline:ne,paddingInlineEnd:ne,paddingInlineStart:ne,top:ne,right:ne,bottom:ne,left:ne,scrollMargin:ne,scrollMarginTop:ne,scrollMarginRight:ne,scrollMarginBottom:ne,scrollMarginLeft:ne,scrollMarginX:ne,scrollMarginY:ne,scrollMarginBlock:ne,scrollMarginBlockEnd:ne,scrollMarginBlockStart:ne,scrollMarginInline:ne,scrollMarginInlineEnd:ne,scrollMarginInlineStart:ne,scrollPadding:ne,scrollPaddingTop:ne,scrollPaddingRight:ne,scrollPaddingBottom:ne,scrollPaddingLeft:ne,scrollPaddingX:ne,scrollPaddingY:ne,scrollPaddingBlock:ne,scrollPaddingBlockEnd:ne,scrollPaddingBlockStart:ne,scrollPaddingInline:ne,scrollPaddingInlineEnd:ne,scrollPaddingInlineStart:ne,fontSize:"fontSizes",background:Fe,backgroundColor:Fe,backgroundImage:Fe,borderImage:Fe,border:Fe,borderBlock:Fe,borderBlockEnd:Fe,borderBlockStart:Fe,borderBottom:Fe,borderBottomColor:Fe,borderColor:Fe,borderInline:Fe,borderInlineEnd:Fe,borderInlineStart:Fe,borderLeft:Fe,borderLeftColor:Fe,borderRight:Fe,borderRightColor:Fe,borderTop:Fe,borderTopColor:Fe,caretColor:Fe,color:Fe,columnRuleColor:Fe,fill:Fe,outline:Fe,outlineColor:Fe,stroke:Fe,textDecorationColor:Fe,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Kt,minBlockSize:Kt,maxBlockSize:Kt,inlineSize:Kt,minInlineSize:Kt,maxInlineSize:Kt,width:Kt,minWidth:Kt,maxWidth:Kt,height:Kt,minHeight:Kt,maxHeight:Kt,flexBasis:Kt,gridTemplateColumns:Kt,gridTemplateRows:Kt,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},OC=(t,i)=>typeof i=="function"?{"()":Function.prototype.toString.call(i)}:i,Ds=()=>{const t=Object.create(null);return(i,l,...r)=>{const o=(u=>JSON.stringify(u,OC))(i);return o in t?t[o]:t[o]=l(i,...r)}},mc=Symbol.for("sxs.internal"),If=(t,i)=>Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)),Z0=t=>{for(const i in t)return!0;return!1},{hasOwnProperty:kC}=Object.prototype,nf=t=>t.includes("-")?t:t.replace(/[A-Z]/g,(i=>"-"+i.toLowerCase())),RC=/\s+(?![^()]*\))/,Fl=t=>i=>t(...typeof i=="string"?String(i).split(RC):[i]),K0={appearance:t=>({WebkitAppearance:t,appearance:t}),backfaceVisibility:t=>({WebkitBackfaceVisibility:t,backfaceVisibility:t}),backdropFilter:t=>({WebkitBackdropFilter:t,backdropFilter:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),boxDecorationBreak:t=>({WebkitBoxDecorationBreak:t,boxDecorationBreak:t}),clipPath:t=>({WebkitClipPath:t,clipPath:t}),content:t=>({content:t.includes('"')||t.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(t)?t:`"${t}"`}),hyphens:t=>({WebkitHyphens:t,hyphens:t}),maskImage:t=>({WebkitMaskImage:t,maskImage:t}),maskSize:t=>({WebkitMaskSize:t,maskSize:t}),tabSize:t=>({MozTabSize:t,tabSize:t}),textSizeAdjust:t=>({WebkitTextSizeAdjust:t,textSizeAdjust:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),marginBlock:Fl(((t,i)=>({marginBlockStart:t,marginBlockEnd:i||t}))),marginInline:Fl(((t,i)=>({marginInlineStart:t,marginInlineEnd:i||t}))),maxSize:Fl(((t,i)=>({maxBlockSize:t,maxInlineSize:i||t}))),minSize:Fl(((t,i)=>({minBlockSize:t,minInlineSize:i||t}))),paddingBlock:Fl(((t,i)=>({paddingBlockStart:t,paddingBlockEnd:i||t}))),paddingInline:Fl(((t,i)=>({paddingInlineStart:t,paddingInlineEnd:i||t})))},wh=/([\d.]+)([^]*)/,DC=(t,i)=>t.length?t.reduce(((l,r)=>(l.push(...i.map((o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o))),l)),[]):i,LC=(t,i)=>t in zC&&typeof i=="string"?i.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((l,r,o,u)=>r+(o==="stretch"?`-moz-available${u};${nf(t)}:${r}-webkit-fill-available`:`-moz-fit-content${u};${nf(t)}:${r}fit-content`)+u)):String(i),zC={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Hi=t=>t?t+"-":"",ty=(t,i,l)=>t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((r,o,u,h,f)=>h=="$"==!!u?r:(o||h=="--"?"calc(":"")+"var(--"+(h==="$"?Hi(i)+(f.includes("$")?"":Hi(l))+f.replace(/\$/g,"-"):f)+")"+(o||h=="--"?"*"+(o||"")+(u||"1")+")":""))),jC=/\s*,\s*(?![^()]*\))/,BC=Object.prototype.toString,Wl=(t,i,l,r,o)=>{let u,h,f;const g=(p,b,_)=>{let w,y;const S=T=>{for(w in T){const D=w.charCodeAt(0)===64,U=D&&Array.isArray(T[w])?T[w]:[T[w]];for(y of U){const j=/[A-Z]/.test(A=w)?A:A.replace(/-[^]/g,(W=>W[1].toUpperCase())),$=typeof y=="object"&&y&&y.toString===BC&&(!r.utils[j]||!b.length);if(j in r.utils&&!$){const W=r.utils[j];if(W!==h){h=W,S(W(y)),h=null;continue}}else if(j in K0){const W=K0[j];if(W!==f){f=W,S(W(y)),f=null;continue}}if(D&&(M=w.slice(1)in r.media?"@media "+r.media[w.slice(1)]:w,w=M.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((W,X,oe,z,q,J)=>{const ae=wh.test(X),Q=.0625*(ae?-1:1),[le,te]=ae?[z,X]:[X,z];return"("+(oe[0]==="="?"":oe[0]===">"===ae?"max-":"min-")+le+":"+(oe[0]!=="="&&oe.length===1?te.replace(wh,((I,Z,ee)=>Number(Z)+Q*(oe===">"?1:-1)+ee)):te)+(q?") and ("+(q[0]===">"?"min-":"max-")+le+":"+(q.length===1?J.replace(wh,((I,Z,ee)=>Number(Z)+Q*(q===">"?-1:1)+ee)):J):"")+")"}))),$){const W=D?_.concat(w):[..._],X=D?[...b]:DC(b,w.split(jC));u!==void 0&&o(J0(...u)),u=void 0,g(y,X,W)}else u===void 0&&(u=[[],b,_]),w=D||w.charCodeAt(0)!==36?w:`--${Hi(r.prefix)}${w.slice(1).replace(/\$/g,"-")}`,y=$?y:typeof y=="number"?y&&j in HC?String(y)+"px":String(y):ty(LC(j,y??""),r.prefix,r.themeMap[j]),u[0].push(`${D?`${w} `:`${nf(w)}:`}${y}`)}}var M,A};S(p),u!==void 0&&o(J0(...u)),u=void 0};g(t,i,l)},J0=(t,i,l)=>`${l.map((r=>`${r}{`)).join("")}${i.length?`${i.join(",")}{`:""}${t.join(";")}${i.length?"}":""}${Array(l.length?l.length+1:0).join("}")}`,HC={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},eb=t=>String.fromCharCode(t+(t>25?39:97)),Kn=t=>(i=>{let l,r="";for(l=Math.abs(i);l>52;l=l/52|0)r=eb(l%52)+r;return eb(l%52)+r})(((i,l)=>{let r=l.length;for(;r;)i=33*i^l.charCodeAt(--r);return i})(5381,JSON.stringify(t))>>>0),vs=["themed","global","styled","onevar","resonevar","allvar","inline"],UC=t=>{if(t.href&&!t.href.startsWith(location.origin))return!1;try{return!!t.cssRules}catch{return!1}},IC=t=>{let i;const l=()=>{const{cssRules:o}=i.sheet;return[].map.call(o,((u,h)=>{const{cssText:f}=u;let g="";if(f.startsWith("--sxs"))return"";if(o[h-1]&&(g=o[h-1].cssText).startsWith("--sxs")){if(!u.cssRules.length)return"";for(const p in i.rules)if(i.rules[p].group===u)return`--sxs{--sxs:${[...i.rules[p].cache].join(" ")}}${f}`;return u.cssRules.length?`${g}${f}`:""}return f})).join("")},r=()=>{if(i){const{rules:f,sheet:g}=i;if(!g.deleteRule){for(;Object(Object(g.cssRules)[0]).type===3;)g.cssRules.splice(0,1);g.cssRules=[]}for(const p in f)delete f[p]}const o=Object(t).styleSheets||[];for(const f of o)if(UC(f)){for(let g=0,p=f.cssRules;p[g];++g){const b=Object(p[g]);if(b.type!==1)continue;const _=Object(p[g+1]);if(_.type!==4)continue;++g;const{cssText:w}=b;if(!w.startsWith("--sxs"))continue;const y=w.slice(14,-3).trim().split(/\s+/),S=vs[y[0]];S&&(i||(i={sheet:f,reset:r,rules:{},toString:l}),i.rules[S]={group:_,index:g,cache:new Set(y)})}if(i)break}if(!i){const f=(g,p)=>({type:p,cssRules:[],insertRule(b,_){this.cssRules.splice(_,0,f(b,{import:3,undefined:1}[(b.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return g==="@media{}"?`@media{${[].map.call(this.cssRules,(b=>b.cssText)).join("")}}`:g}});i={sheet:t?(t.head||t).appendChild(document.createElement("style")).sheet:f("","text/css"),rules:{},reset:r,toString:l}}const{sheet:u,rules:h}=i;for(let f=vs.length-1;f>=0;--f){const g=vs[f];if(!h[g]){const p=vs[f+1],b=h[p]?h[p].index:u.cssRules.length;u.insertRule("@media{}",b),u.insertRule(`--sxs{--sxs:${f}}`,b),h[g]={group:u.cssRules[b+1],index:b,cache:new Set([f])}}PC(h[g])}};return r(),i},PC=t=>{const i=t.group;let l=i.cssRules.length;t.apply=r=>{try{i.insertRule(r,l),++l}catch{}}},fs=Symbol(),VC=Ds(),FC=(t,i)=>VC(t,(()=>(...l)=>{let r={type:null,composers:new Set};for(const o of l)if(o!=null)if(o[mc]){r.type==null&&(r.type=o[mc].type);for(const u of o[mc].composers)r.composers.add(u)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(qC(o,t));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),GC(t,r,i)})),qC=({variants:t,compoundVariants:i,defaultVariants:l,...r},o)=>{const u=`${Hi(o.prefix)}c-${Kn(r)}`,h=[],f=[],g=Object.create(null),p=[];for(const w in l)g[w]=String(l[w]);if(typeof t=="object"&&t)for(const w in t){b=g,_=w,kC.call(b,_)||(g[w]="undefined");const y=t[w];for(const S in y){const T={[w]:String(S)};String(S)==="undefined"&&p.push(w);const M=y[S],A=[T,M,!Z0(M)];h.push(A)}}var b,_;if(typeof i=="object"&&i)for(const w of i){let{css:y,...S}=w;y=typeof y=="object"&&y||{};for(const M in S)S[M]=String(S[M]);const T=[S,y,!Z0(y)];f.push(T)}return[u,r,h,f,g,p]},GC=(t,i,l)=>{const[r,o,u,h]=YC(i.composers),f=typeof i.type=="function"||i.type.$$typeof?(_=>{function w(){for(let y=0;y<w[fs].length;y++){const[S,T]=w[fs][y];_.rules[S].apply(T)}return w[fs]=[],null}return w[fs]=[],w.rules={},vs.forEach((y=>w.rules[y]={apply:S=>w[fs].push([y,S])})),w})(l):null,g=(f||l).rules,p=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,b=_=>{_=typeof _=="object"&&_||XC;const{css:w,...y}=_,S={};for(const A in u)if(delete y[A],A in _){let D=_[A];typeof D=="object"&&D?S[A]={"@initial":u[A],...D}:(D=String(D),S[A]=D!=="undefined"||h.has(A)?D:u[A])}else S[A]=u[A];const T=new Set([...o]);for(const[A,D,U,j]of i.composers){l.rules.styled.cache.has(A)||(l.rules.styled.cache.add(A),Wl(D,[`.${A}`],[],t,(X=>{g.styled.apply(X)})));const $=tb(U,S,t.media),W=tb(j,S,t.media,!0);for(const X of $)if(X!==void 0)for(const[oe,z,q]of X){const J=`${A}-${Kn(z)}-${oe}`;T.add(J);const ae=(q?l.rules.resonevar:l.rules.onevar).cache,Q=q?g.resonevar:g.onevar;ae.has(J)||(ae.add(J),Wl(z,[`.${J}`],[],t,(le=>{Q.apply(le)})))}for(const X of W)if(X!==void 0)for(const[oe,z]of X){const q=`${A}-${Kn(z)}-${oe}`;T.add(q),l.rules.allvar.cache.has(q)||(l.rules.allvar.cache.add(q),Wl(z,[`.${q}`],[],t,(J=>{g.allvar.apply(J)})))}}if(typeof w=="object"&&w){const A=`${r}-i${Kn(w)}-css`;T.add(A),l.rules.inline.cache.has(A)||(l.rules.inline.cache.add(A),Wl(w,[`.${A}`],[],t,(D=>{g.inline.apply(D)})))}for(const A of String(_.className||"").trim().split(/\s+/))A&&T.add(A);const M=y.className=[...T].join(" ");return{type:i.type,className:M,selector:p,props:y,toString:()=>M,deferredInjector:f}};return If(b,{className:r,selector:p,[mc]:i,toString:()=>(l.rules.styled.cache.has(r)||b(),r)})},YC=t=>{let i="";const l=[],r={},o=[];for(const[u,,,,h,f]of t){i===""&&(i=u),l.push(u),o.push(...f);for(const g in h){const p=h[g];(r[g]===void 0||p!=="undefined"||f.includes(p))&&(r[g]=p)}}return[i,l,r,new Set(o)]},tb=(t,i,l,r)=>{const o=[];e:for(let[u,h,f]of t){if(f)continue;let g,p=0,b=!1;for(g in u){const _=u[g];let w=i[g];if(w!==_){if(typeof w!="object"||!w)continue e;{let y,S,T=0;for(const M in w){if(_===String(w[M])){if(M!=="@initial"){const A=M.slice(1);(S=S||[]).push(A in l?l[A]:M.replace(/^@media ?/,"")),b=!0}p+=T,y=!0}++T}if(S&&S.length&&(h={["@media "+S.join(", ")]:h}),!y)continue e}}}(o[p]=o[p]||[]).push([r?"cv":`${g}-${u[g]}`,h,b])}return o},XC={},WC=Ds(),QC=(t,i)=>WC(t,(()=>(...l)=>{const r=()=>{for(let o of l){o=typeof o=="object"&&o||{};let u=Kn(o);if(!i.rules.global.cache.has(u)){if(i.rules.global.cache.add(u),"@import"in o){let h=[].indexOf.call(i.sheet.cssRules,i.rules.themed.group)-1;for(let f of[].concat(o["@import"]))f=f.includes('"')||f.includes("'")?f:`"${f}"`,i.sheet.insertRule(`@import ${f};`,h++);delete o["@import"]}Wl(o,[],[],t,(h=>{i.rules.global.apply(h)}))}}return""};return If(r,{toString:r})})),ZC=Ds(),KC=(t,i)=>ZC(t,(()=>l=>{const r=`${Hi(t.prefix)}k-${Kn(l)}`,o=()=>{if(!i.rules.global.cache.has(r)){i.rules.global.cache.add(r);const u=[];Wl(l,[],[],t,(f=>u.push(f)));const h=`@keyframes ${r}{${u.join("")}}`;i.rules.global.apply(h)}return r};return If(o,{get name(){return o()},toString:o})})),JC=class{constructor(i,l,r,o){this.token=i==null?"":String(i),this.value=l==null?"":String(l),this.scale=r==null?"":String(r),this.prefix=o==null?"":String(o)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Hi(this.prefix)+Hi(this.scale)+this.token}toString(){return this.computedValue}},e7=Ds(),t7=(t,i)=>e7(t,(()=>(l,r)=>{r=typeof l=="object"&&l||Object(r);const o=`.${l=(l=typeof l=="string"?l:"")||`${Hi(t.prefix)}t-${Kn(r)}`}`,u={},h=[];for(const g in r){u[g]={};for(const p in r[g]){const b=`--${Hi(t.prefix)}${g}-${p}`,_=ty(String(r[g][p]),t.prefix,g);u[g][p]=new JC(p,_,g,t.prefix),h.push(`${b}:${_}`)}}const f=()=>{if(h.length&&!i.rules.themed.cache.has(l)){i.rules.themed.cache.add(l);const g=`${r===t.theme?":root,":""}.${l}{${h.join(";")}}`;i.rules.themed.apply(g)}return l};return{...u,get className(){return f()},selector:o,toString:f}})),a7=Ds(),ay=t=>{let i=!1;const l=a7(t,(r=>{i=!0;const o="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",u=typeof r.media=="object"&&r.media||{},h=typeof r.root=="object"?r.root||null:globalThis.document||null,f=typeof r.theme=="object"&&r.theme||{},g={prefix:o,media:u,theme:f,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...$C},utils:typeof r.utils=="object"&&r.utils||{}},p=IC(h),b={css:FC(g,p),globalCss:QC(g,p),keyframes:KC(g,p),createTheme:t7(g,p),reset(){p.reset(),b.theme.toString()},theme:{},sheet:p,config:g,prefix:o,getCssText:p.toString,toString:p.toString};return String(b.theme=b.createTheme(f)),b}));return i||l.reset(),l},iy=()=>Q0||(Q0=ay()),i7=(...t)=>iy().createTheme(...t),Ii=(...t)=>iy().css(...t),ny={default:{colors:{brand:"hsl(153 60.0% 53.0%)",brandAccent:"hsl(154 54.8% 45.1%)",brandButtonText:"white",defaultButtonBackground:"white",defaultButtonBackgroundHover:"#eaeaea",defaultButtonBorder:"lightgray",defaultButtonText:"gray",dividerBackground:"#eaeaea",inputBackground:"transparent",inputBorder:"lightgray",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"black",inputLabelText:"gray",inputPlaceholder:"darkgray",messageText:"#2b805a",messageBackground:"#e7fcf1",messageBorder:"#d0f3e1",messageTextDanger:"#ff6369",messageBackgroundDanger:"#fff8f8",messageBorderDanger:"#822025",anchorTextColor:"gray",anchorTextHoverColor:"darkgray"},space:{spaceSmall:"4px",spaceMedium:"8px",spaceLarge:"16px",labelBottomMargin:"8px",anchorBottomMargin:"4px",emailInputSpacing:"4px",socialAuthSpacing:"4px",buttonPadding:"10px 15px",inputPadding:"10px 15px"},fontSizes:{baseBodySize:"13px",baseInputSize:"14px",baseLabelSize:"14px",baseButtonSize:"14px"},fonts:{bodyFontFamily:"ui-sans-serif, sans-serif",buttonFontFamily:"ui-sans-serif, sans-serif",inputFontFamily:"ui-sans-serif, sans-serif",labelFontFamily:"ui-sans-serif, sans-serif"},borderWidths:{buttonBorderWidth:"1px",inputBorderWidth:"1px"},radii:{borderRadiusButton:"4px",buttonBorderRadius:"4px",inputBorderRadius:"4px"}},dark:{colors:{brandButtonText:"white",defaultButtonBackground:"#2e2e2e",defaultButtonBackgroundHover:"#3e3e3e",defaultButtonBorder:"#3e3e3e",defaultButtonText:"white",dividerBackground:"#2e2e2e",inputBackground:"#1e1e1e",inputBorder:"#3e3e3e",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"white",inputPlaceholder:"darkgray",messageText:"#85e0b7",messageBackground:"#072719",messageBorder:"#2b805a",messageBackgroundDanger:"#1f1315"}}},dt={SIGN_IN:"sign_in",SIGN_UP:"sign_up",FORGOTTEN_PASSWORD:"forgotten_password",MAGIC_LINK:"magic_link",UPDATE_PASSWORD:"update_password",VERIFY_OTP:"verify_otp"},n7="supabase-auth-ui",l7={ROOT:"root",SIGN_IN:dt.SIGN_IN,SIGN_UP:dt.SIGN_UP,FORGOTTEN_PASSWORD:dt.FORGOTTEN_PASSWORD,MAGIC_LINK:dt.MAGIC_LINK,UPDATE_PASSWORD:dt.UPDATE_PASSWORD,anchor:"ui-anchor",button:"ui-button",container:"ui-container",divider:"ui-divider",input:"ui-input",label:"ui-label",loader:"ui-loader",message:"ui-message"};function ll(t,i,l){var r,o;const u=[],h=l7[t];return u.push(l?.prependedClassName?l?.prependedClassName+"_"+h:n7+"_"+h),(r=l?.className)!=null&&r[t]&&u.push((o=l?.className)==null?void 0:o[t]),(l?.extend===void 0||l?.extend===!0)&&u.push(i),u}function lf(t,i){let l;if(t&&i&&typeof t=="object"&&typeof i=="object"){if(Array.isArray(i))for(l=0;l<i.length;l++)t[l]=lf(t[l],i[l]);else for(l in i)t[l]=lf(t[l],i[l]);return t}return i}function Sh(t,...i){let l=i.length;for(let r=0;r<l;r++)t=lf(t,i[r]);return t}function r7(t,i){return t.replace(/{{(\w+)}}/g,(l,r)=>i.hasOwnProperty(r)?i[r]:l)}var s7={sign_up:{email_label:"Email address",password_label:"Create a Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign up",loading_button_label:"Signing up ...",social_provider_text:"Sign in with {{provider}}",link_text:"Don't have an account? Sign up",confirmation_text:"Check your email for the confirmation link"},sign_in:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign in",loading_button_label:"Signing in ...",social_provider_text:"Sign in with {{provider}}",link_text:"Already have an account? Sign in"},magic_link:{email_input_label:"Email address",email_input_placeholder:"Your email address",button_label:"Send Magic Link",loading_button_label:"Sending Magic Link ...",link_text:"Send a magic link email",confirmation_text:"Check your email for the magic link"},forgotten_password:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",button_label:"Send reset password instructions",loading_button_label:"Sending reset instructions ...",link_text:"Forgot your password?",confirmation_text:"Check your email for the password reset link"},update_password:{password_label:"New password",password_input_placeholder:"Your new password",button_label:"Update password",loading_button_label:"Updating password ...",confirmation_text:"Your password has been updated"},verify_otp:{email_input_label:"Email address",email_input_placeholder:"Your email address",phone_input_label:"Phone number",phone_input_placeholder:"Your phone number",token_input_label:"Token",token_input_placeholder:"Your Otp token",button_label:"Verify token",loading_button_label:"Signing in ..."}};const o7=Ii({fontFamily:"$bodyFontFamily",fontSize:"$baseBodySize",marginBottom:"$anchorBottomMargin",color:"$anchorTextColor",display:"block",textAlign:"center",textDecoration:"underline","&:hover":{color:"$anchorTextHoverColor"}}),Zn=({children:t,appearance:i,...l})=>{var r;const o=ll("anchor",o7(),i);return R.createElement("a",{...l,style:(r=i?.style)==null?void 0:r.anchor,className:o.join(" ")},t)},c7=Ii({fontFamily:"$buttonFontFamily",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",borderRadius:"$borderRadiusButton",fontSize:"$baseButtonSize",padding:"$buttonPadding",cursor:"pointer",borderWidth:"$buttonBorderWidth",borderStyle:"solid",width:"100%",transitionProperty:"background-color",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms","&:disabled":{opacity:.7,cursor:"unset"},variants:{color:{default:{backgroundColor:"$defaultButtonBackground",color:"$defaultButtonText",borderColor:"$defaultButtonBorder","&:hover:not(:disabled)":{backgroundColor:"$defaultButtonBackgroundHover"}},primary:{backgroundColor:"$brand",color:"$brandButtonText",borderColor:"$brandAccent","&:hover:not(:disabled)":{backgroundColor:"$brandAccent"}}}}}),sr=({children:t,color:i="default",appearance:l,icon:r,loading:o=!1,...u})=>{var h;const f=ll("button",c7({color:i}),l);return R.createElement("button",{...u,style:(h=l?.style)==null?void 0:h.button,className:f.join(" "),disabled:o},r,t)},u7=Ii({display:"flex",gap:"4px",variants:{direction:{horizontal:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(48px, 1fr))"},vertical:{flexDirection:"column",margin:"8px 0"}},gap:{small:{gap:"4px"},medium:{gap:"8px"},large:{gap:"16px"}}}}),ci=({children:t,appearance:i,...l})=>{var r;const o=ll("container",u7({direction:l.direction,gap:l.gap}),i);return R.createElement("div",{...l,style:(r=i?.style)==null?void 0:r.container,className:o.join(" ")},t)},d7=Ii({background:"$dividerBackground",display:"block",margin:"16px 0",height:"1px",width:"100%"}),h7=({children:t,appearance:i,...l})=>{var r;const o=ll("divider",d7(),i);return R.createElement("div",{...l,style:(r=i?.style)==null?void 0:r.divider,className:o.join(" ")})},f7=Ii({fontFamily:"$inputFontFamily",background:"$inputBackground",borderRadius:"$inputBorderRadius",padding:"$inputPadding",cursor:"text",borderWidth:"$inputBorderWidth",borderColor:"$inputBorder",borderStyle:"solid",fontSize:"$baseInputSize",width:"100%",color:"$inputText",boxSizing:"border-box","&:hover":{borderColor:"$inputBorderHover",outline:"none"},"&:focus":{borderColor:"$inputBorderFocus",outline:"none"},"&::placeholder":{color:"$inputPlaceholder",letterSpacing:"initial"},transitionProperty:"background-color, border",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms",variants:{type:{default:{letterSpacing:"0px"},password:{letterSpacing:"0px"}}}}),vn=({children:t,appearance:i,...l})=>{var r;const o=ll("input",f7({type:l.type==="password"?"password":"default"}),i);return R.createElement("input",{...l,style:(r=i?.style)==null?void 0:r.input,className:o.join(" ")},t)},p7=Ii({fontFamily:"$labelFontFamily",fontSize:"$baseLabelSize",marginBottom:"$labelBottomMargin",color:"$inputLabelText",display:"block"}),bn=({children:t,appearance:i,...l})=>{var r;const o=ll("label",p7(),i);return R.createElement("label",{...l,style:(r=i?.style)==null?void 0:r.label,className:o.join(" ")},t)},m7=Ii({fontFamily:"$bodyFontFamily",fontSize:"$baseInputSize",marginBottom:"$labelBottomMargin",display:"block",textAlign:"center",borderRadius:"0.375rem",padding:"1.5rem 1rem",lineHeight:"1rem",color:"$messageText",backgroundColor:"$messageBackground",border:"1px solid $messageBorder",variants:{color:{danger:{color:"$messageTextDanger",backgroundColor:"$messageBackgroundDanger",border:"1px solid $messageBorderDanger"}}}}),hi=({children:t,appearance:i,...l})=>{var r;const o=ll("message",m7({color:l.color}),i);return R.createElement("span",{...l,style:(r=i?.style)==null?void 0:r.message,className:o.join(" ")},t)};function ly({setAuthView:t=()=>{},supabaseClient:i,redirectTo:l,i18n:r,appearance:o,showLinks:u=!1}){var h;const[f,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(!1),T=async A=>{var D,U;if(A.preventDefault(),b(""),w(""),S(!0),f.length===0){b((D=r?.magic_link)==null?void 0:D.empty_email_address),S(!1);return}const{error:j}=await i.auth.signInWithOtp({email:f,options:{emailRedirectTo:l}});j?b(j.message):w((U=r?.magic_link)==null?void 0:U.confirmation_text),S(!1)},M=r?.magic_link;return R.createElement("form",{id:"auth-magic-link",onSubmit:T},R.createElement(ci,{gap:"large",direction:"vertical",appearance:o},R.createElement("div",null,R.createElement(bn,{htmlFor:"email",appearance:o},M?.email_input_label),R.createElement(vn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:M?.email_input_placeholder,onChange:A=>{b&&b(""),g(A.target.value)},appearance:o})),R.createElement(sr,{color:"primary",type:"submit",loading:y,appearance:o},y?M?.loading_button_label:M?.button_label),u&&R.createElement(Zn,{href:"#auth-sign-in",onClick:A=>{A.preventDefault(),t(dt.SIGN_IN)},appearance:o},(h=r?.sign_in)==null?void 0:h.link_text),_&&R.createElement(hi,{appearance:o},_),p&&R.createElement(hi,{color:"danger",appearance:o},p)))}const It=Ii({width:"21px",height:"21px"}),g7=({provider:t})=>t=="google"?v7():t=="facebook"?b7():t=="twitter"?y7():t=="apple"?_7():t=="github"?x7():t=="gitlab"?w7():t=="bitbucket"?S7():t=="discord"?E7():t=="azure"?C7():t=="keycloak"?A7():t=="linkedin"?T7():t=="notion"?M7():t=="slack"?N7():t=="spotify"?$7():t=="twitch"?O7():t=="workos"?k7():t=="kakao"?R7():null,v7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),R.createElement("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),R.createElement("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),R.createElement("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})),b7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"}),R.createElement("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})),y7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#03A9F4",d:"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"})),_7=()=>R.createElement("svg",{className:It(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"21px",height:"21px"}," ",R.createElement("path",{d:"M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z"})),x7=()=>R.createElement("svg",{className:It(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"21px",height:"21px"}," ",R.createElement("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})),w7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#e53935",d:"M24 43L16 20 32 20z"}),R.createElement("path",{fill:"#ff7043",d:"M24 43L42 20 32 20z"}),R.createElement("path",{fill:"#e53935",d:"M37 5L42 20 32 20z"}),R.createElement("path",{fill:"#ffa726",d:"M24 43L42 20 45 28z"}),R.createElement("path",{fill:"#ff7043",d:"M24 43L6 20 16 20z"}),R.createElement("path",{fill:"#e53935",d:"M11 5L6 20 16 20z"}),R.createElement("path",{fill:"#ffa726",d:"M24 43L6 20 3 28z"})),S7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 62.42 62.42"},R.createElement("defs",null,R.createElement("linearGradient",{id:"New_Gradient_Swatch_1",x1:"64.01",y1:"30.27",x2:"32.99",y2:"54.48",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0.18",stopColor:"#0052cc"}),R.createElement("stop",{offset:"1",stopColor:"#2684ff"}))),R.createElement("title",null,"Bitbucket-blue"),R.createElement("g",{id:"Layer_2","data-name":"Layer 2"},R.createElement("g",{id:"Blue",transform:"translate(0 -3.13)"},R.createElement("path",{d:"M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z",fill:"#2684ff"}),R.createElement("path",{d:"M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z",fill:"url(#New_Gradient_Swatch_1)"})))),E7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#536dfe",d:"M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"})),C7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6a",x1:"-1254.397",x2:"-1261.911",y1:"877.268",y2:"899.466",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopColor:"#114a8b"}),R.createElement("stop",{offset:"1",stopColor:"#0669bc"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6a)",d:"M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"}),R.createElement("path",{fill:"#0078d4",d:"M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"}),R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6b",x1:"-1252.05",x2:"-1253.788",y1:"887.612",y2:"888.2",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopOpacity:".3"}),R.createElement("stop",{offset:".071",stopOpacity:".2"}),R.createElement("stop",{offset:".321",stopOpacity:".1"}),R.createElement("stop",{offset:".623",stopOpacity:".05"}),R.createElement("stop",{offset:"1",stopOpacity:"0"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6b)",d:"M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"}),R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6c",x1:"-1252.952",x2:"-1244.704",y1:"876.6",y2:"898.575",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopColor:"#3ccbf4"}),R.createElement("stop",{offset:"1",stopColor:"#2892df"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6c)",d:"M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"})),A7=()=>R.createElement("svg",{className:It(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",fill:"#008AAA"})),T7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#0288D1",d:"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"}),R.createElement("path",{fill:"#FFF",d:"M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"})),M7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px",fillRule:"evenodd",clipRule:"evenodd"},R.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",clipRule:"evenodd"}),R.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",clipRule:"evenodd"}),R.createElement("path",{fill:"#424242",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",clipRule:"evenodd"})),N7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#33d375",d:"M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"}),R.createElement("path",{fill:"#33d375",d:"M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"}),R.createElement("path",{fill:"#40c4ff",d:"M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"}),R.createElement("path",{fill:"#40c4ff",d:"M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"}),R.createElement("path",{fill:"#e91e63",d:"M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"}),R.createElement("path",{fill:"#e91e63",d:"M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"}),R.createElement("path",{fill:"#ffc107",d:"M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"}),R.createElement("path",{fill:"#ffc107",d:"M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"})),$7=()=>R.createElement("svg",{className:It(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",fill:"#1ED760"})),O7=()=>R.createElement("svg",{className:It(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"white"}),R.createElement("path",{d:"M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"#9146FF"}),R.createElement("path",{d:"M368 120H336V216H368V120Z",fill:"#9146FF"}),R.createElement("path",{d:"M280 120H248V216H280V120Z",fill:"#9146FF"})),k7=()=>R.createElement("svg",{className:It(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",fill:"#6363F1"}),R.createElement("path",{d:"M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",fill:"#6363F1"})),R7=()=>R.createElement("svg",{className:It(),xmlns:"http://www.w3.org/2000/svg",width:"2500",height:"2500",viewBox:"0 0 256 256"},R.createElement("path",{fill:"#FFE812",d:"M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"}),R.createElement("path",{d:"M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"}),R.createElement("path",{fill:"#FFE812",d:"M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"}));function D7({supabaseClient:t,socialLayout:i="vertical",providers:l=["github","google","azure"],providerScopes:r,queryParams:o,redirectTo:u,onlyThirdPartyProviders:h=!0,view:f="sign_in",i18n:g,appearance:p}){const[b,_]=k.useState(!1),[w,y]=k.useState(""),S=i==="vertical",T=f==="magic_link"?"sign_in":f,M=async D=>{_(!0);const{error:U}=await t.auth.signInWithOAuth({provider:D,options:{redirectTo:u,scopes:r?.[D],queryParams:o}});U&&y(U.message),_(!1)};function A(D){const U=D.toLowerCase();return D.charAt(0).toUpperCase()+U.slice(1)}return R.createElement(R.Fragment,null,l&&l.length>0&&R.createElement(R.Fragment,null,R.createElement(ci,{gap:"large",direction:"vertical",appearance:p},R.createElement(ci,{direction:S?"vertical":"horizontal",gap:S?"small":"medium",appearance:p},l.map(D=>{var U;return R.createElement(sr,{key:D,color:"default",loading:b,onClick:()=>M(D),appearance:p},R.createElement(g7,{provider:D}),S&&r7((U=g?.[T])==null?void 0:U.social_provider_text,{provider:A(D)}))}))),!h&&R.createElement(h7,{appearance:p})))}function ab({authView:t="sign_in",defaultEmail:i="",defaultPassword:l="",setAuthView:r=()=>{},setDefaultEmail:o=S=>{},setDefaultPassword:u=S=>{},supabaseClient:h,showLinks:f=!1,redirectTo:g,additionalData:p,magicLink:b,i18n:_,appearance:w,children:y}){var S,T,M,A;const D=k.useRef(!0),[U,j]=k.useState(i),[$,W]=k.useState(l),[X,oe]=k.useState(""),[z,q]=k.useState(!1),[J,ae]=k.useState("");k.useEffect(()=>(D.current=!0,j(i),W(l),()=>{D.current=!1}),[t]);const Q=async I=>{var Z;switch(I.preventDefault(),oe(""),q(!0),t){case"sign_in":const{error:ee}=await h.auth.signInWithPassword({email:U,password:$});ee&&oe(ee.message);break;case"sign_up":let ce={emailRedirectTo:g};p&&(ce.data=p);const{data:{user:ye,session:ct},error:Ae}=await h.auth.signUp({email:U,password:$,options:ce});Ae?oe(Ae.message):ye&&!ct&&ae((Z=_?.sign_up)==null?void 0:Z.confirmation_text);break}D.current&&q(!1)},le=I=>{o(U),u($),r(I)},te=_?.[t];return R.createElement("form",{id:t==="sign_in"?"auth-sign-in":"auth-sign-up",onSubmit:Q,autoComplete:"on",style:{width:"100%"}},R.createElement(ci,{direction:"vertical",gap:"large",appearance:w},R.createElement(ci,{direction:"vertical",gap:"large",appearance:w},R.createElement("div",null,R.createElement(bn,{htmlFor:"email",appearance:w},te?.email_label),R.createElement(vn,{id:"email",type:"email",name:"email",placeholder:te?.email_input_placeholder,defaultValue:U,onChange:I=>j(I.target.value),autoComplete:"email",appearance:w})),R.createElement("div",null,R.createElement(bn,{htmlFor:"password",appearance:w},te?.password_label),R.createElement(vn,{id:"password",type:"password",name:"password",placeholder:te?.password_input_placeholder,defaultValue:$,onChange:I=>W(I.target.value),autoComplete:t==="sign_in"?"current-password":"new-password",appearance:w})),y),R.createElement(sr,{type:"submit",color:"primary",loading:z,appearance:w},z?te?.loading_button_label:te?.button_label),f&&R.createElement(ci,{direction:"vertical",gap:"small",appearance:w},t===dt.SIGN_IN&&b&&R.createElement(Zn,{href:"#auth-magic-link",onClick:I=>{I.preventDefault(),r(dt.MAGIC_LINK)},appearance:w},(S=_?.magic_link)==null?void 0:S.link_text),t===dt.SIGN_IN&&R.createElement(Zn,{href:"#auth-forgot-password",onClick:I=>{I.preventDefault(),r(dt.FORGOTTEN_PASSWORD)},appearance:w},(T=_?.forgotten_password)==null?void 0:T.link_text),t===dt.SIGN_IN?R.createElement(Zn,{href:"#auth-sign-up",onClick:I=>{I.preventDefault(),le(dt.SIGN_UP)},appearance:w},(M=_?.sign_up)==null?void 0:M.link_text):R.createElement(Zn,{href:"#auth-sign-in",onClick:I=>{I.preventDefault(),le(dt.SIGN_IN)},appearance:w},(A=_?.sign_in)==null?void 0:A.link_text))),J&&R.createElement(hi,{appearance:w},J),X&&R.createElement(hi,{color:"danger",appearance:w},X))}function ry({setAuthView:t=()=>{},supabaseClient:i,redirectTo:l,i18n:r,appearance:o,showLinks:u=!1}){var h;const[f,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(!1),T=async A=>{var D;A.preventDefault(),b(""),w(""),S(!0);const{error:U}=await i.auth.resetPasswordForEmail(f,{redirectTo:l});U?b(U.message):w((D=r?.forgotten_password)==null?void 0:D.confirmation_text),S(!1)},M=r?.forgotten_password;return R.createElement("form",{id:"auth-forgot-password",onSubmit:T},R.createElement(ci,{direction:"vertical",gap:"large",appearance:o},R.createElement(ci,{gap:"large",direction:"vertical",appearance:o},R.createElement("div",null,R.createElement(bn,{htmlFor:"email",appearance:o},M?.email_label),R.createElement(vn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:M?.email_input_placeholder,onChange:A=>g(A.target.value),appearance:o})),R.createElement(sr,{type:"submit",color:"primary",loading:y,appearance:o},y?M?.loading_button_label:M?.button_label),u&&R.createElement(Zn,{href:"#auth-sign-in",onClick:A=>{A.preventDefault(),t(dt.SIGN_IN)},appearance:o},(h=r?.sign_in)==null?void 0:h.link_text),_&&R.createElement(hi,{appearance:o},_),p&&R.createElement(hi,{color:"danger",appearance:o},p))))}function sy({supabaseClient:t,i18n:i,appearance:l}){const[r,o]=k.useState(""),[u,h]=k.useState(""),[f,g]=k.useState(""),[p,b]=k.useState(!1),_=async y=>{var S;y.preventDefault(),h(""),g(""),b(!0);const{error:T}=await t.auth.updateUser({password:r});T?h(T.message):g((S=i?.update_password)==null?void 0:S.confirmation_text),b(!1)},w=i?.update_password;return R.createElement("form",{id:"auth-update-password",onSubmit:_},R.createElement(ci,{gap:"large",direction:"vertical",appearance:l},R.createElement("div",null,R.createElement(bn,{htmlFor:"password",appearance:l},w?.password_label),R.createElement(vn,{id:"password",name:"password",placeholder:w?.password_input_placeholder,type:"password",autoFocus:!0,onChange:y=>o(y.target.value),appearance:l})),R.createElement(sr,{type:"submit",color:"primary",loading:p,appearance:l},p?w?.loading_button_label:w?.button_label),f&&R.createElement(hi,{appearance:l},f),u&&R.createElement(hi,{color:"danger",appearance:l},u)))}function L7({setAuthView:t=()=>{},supabaseClient:i,otpType:l="email",i18n:r,appearance:o,showLinks:u=!1}){var h;const[f,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(""),[T,M]=k.useState(""),[A,D]=k.useState(!1),U=async $=>{$.preventDefault(),S(""),M(""),D(!0);let W={email:f,token:_,type:l};["sms","phone_change"].includes(l)&&(W={phone:p,token:_,type:l});const{error:X}=await i.auth.verifyOtp(W);X&&S(X.message),D(!1)},j=r?.verify_otp;return R.createElement("form",{id:"auth-magic-link",onSubmit:U},R.createElement(ci,{gap:"large",direction:"vertical",appearance:o},["sms","phone_change"].includes(l)?R.createElement("div",null,R.createElement(bn,{htmlFor:"phone",appearance:o},j?.phone_input_label),R.createElement(vn,{id:"phone",name:"phone",type:"text",autoFocus:!0,placeholder:j?.phone_input_placeholder,onChange:$=>b($.target.value),appearance:o})):R.createElement("div",null,R.createElement(bn,{htmlFor:"email",appearance:o},j?.email_input_label),R.createElement(vn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:j?.email_input_placeholder,onChange:$=>g($.target.value),appearance:o})),R.createElement("div",null,R.createElement(bn,{htmlFor:"token",appearance:o},j?.token_input_label),R.createElement(vn,{id:"token",name:"token",type:"text",placeholder:j?.token_input_placeholder,onChange:$=>w($.target.value),appearance:o})),R.createElement(sr,{color:"primary",type:"submit",loading:A,appearance:o},A?j?.loading_button_label:j?.button_label),u&&R.createElement(Zn,{href:"#auth-sign-in",onClick:$=>{$.preventDefault(),t(dt.SIGN_IN)},appearance:o},(h=r?.sign_in)==null?void 0:h.link_text),T&&R.createElement(hi,{appearance:o},T),y&&R.createElement(hi,{color:"danger",appearance:o},y)))}const oy=k.createContext({user:null,session:null}),z7=t=>{const{supabaseClient:i}=t,[l,r]=k.useState(null),[o,u]=k.useState(l?.user??null);k.useEffect(()=>{(async()=>{var g;const{data:p}=await i.auth.getSession();r(p.session),u(((g=p.session)==null?void 0:g.user)??null)})();const{data:f}=i.auth.onAuthStateChange(async(g,p)=>{r(p),u(p?.user??null)});return()=>{f?.subscription.unsubscribe()}},[]);const h={session:l,user:o};return R.createElement(oy.Provider,{value:h,...t})},j7=()=>{const t=k.useContext(oy);if(t===void 0)throw new Error("useUser must be used within a UserContextProvider.");return t};function rl({supabaseClient:t,socialLayout:i="vertical",providers:l,providerScopes:r,queryParams:o,view:u="sign_in",redirectTo:h,onlyThirdPartyProviders:f=!1,magicLink:g=!1,showLinks:p=!0,appearance:b,theme:_="default",localization:w={variables:{}},otpType:y="email",additionalData:S,children:T}){const M=Sh(s7,w.variables??{}),[A,D]=k.useState(u),[U,j]=k.useState(""),[$,W]=k.useState(""),X=A==="sign_in"||A==="sign_up"||A==="magic_link";k.useEffect(()=>{var q,J;ay({theme:Sh(((q=b?.theme)==null?void 0:q.default)??{},((J=b?.variables)==null?void 0:J.default)??{})})},[b]);const oe=({children:q})=>{var J;return R.createElement("div",{className:_!=="default"?i7(Sh(b?.theme[_],((J=b?.variables)==null?void 0:J[_])??{})):""},X&&R.createElement(D7,{appearance:b,supabaseClient:t,providers:l,providerScopes:r,queryParams:o,socialLayout:i,redirectTo:h,onlyThirdPartyProviders:f,i18n:M,view:A}),!f&&q)};k.useEffect(()=>{const{data:q}=t.auth.onAuthStateChange(J=>{J==="PASSWORD_RECOVERY"?D("update_password"):J==="USER_UPDATED"&&D("sign_in")});return D(u),()=>q.subscription.unsubscribe()},[u]);const z={supabaseClient:t,setAuthView:D,defaultEmail:U,defaultPassword:$,setDefaultEmail:j,setDefaultPassword:W,redirectTo:h,magicLink:g,showLinks:p,i18n:M,appearance:b};switch(A){case dt.SIGN_IN:return R.createElement(oe,null,R.createElement(ab,{...z,authView:"sign_in"}));case dt.SIGN_UP:return R.createElement(oe,null,R.createElement(ab,{appearance:b,supabaseClient:t,authView:"sign_up",setAuthView:D,defaultEmail:U,defaultPassword:$,setDefaultEmail:j,setDefaultPassword:W,redirectTo:h,magicLink:g,showLinks:p,i18n:M,additionalData:S,children:T}));case dt.FORGOTTEN_PASSWORD:return R.createElement(oe,null,R.createElement(ry,{appearance:b,supabaseClient:t,setAuthView:D,redirectTo:h,showLinks:p,i18n:M}));case dt.MAGIC_LINK:return R.createElement(oe,null,R.createElement(ly,{appearance:b,supabaseClient:t,setAuthView:D,redirectTo:h,showLinks:p,i18n:M}));case dt.UPDATE_PASSWORD:return R.createElement(sy,{appearance:b,supabaseClient:t,i18n:M});case dt.VERIFY_OTP:return R.createElement(L7,{appearance:b,supabaseClient:t,otpType:y,i18n:M});default:return null}}rl.ForgottenPassword=ry;rl.UpdatePassword=sy;rl.MagicLink=ly;rl.UserContextProvider=z7;rl.useUser=j7;Ii({borderRadius:"12px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:"360px",padding:"28px 32px"});const B7=fx("SocialLogin",{web:()=>$t(()=>import("./web-DXNlKEUN.js"),__vite__mapDeps([7,1])).then(t=>new t.SocialLoginWeb)}),H7=async()=>{if(xt.isNativePlatform())try{const i=(await B7.login({provider:"apple",options:{}})).result;if(i?.idToken){const{data:l,error:r}=await la.auth.signInWithIdToken({provider:"apple",token:i.idToken});if(r)throw r;return l}else throw new Error("Native Apple Sign-In did not return an ID token.")}catch(t){throw console.error("Native Apple Sign-In failed:",t),t}else return la.auth.signInWithOAuth({provider:"apple"})},U7="_container_1rhlz_1",ib={container:U7,"apple-button":"_apple-button_1rhlz_9"};function I7(){const t=Ne(),[i,l]=k.useState(!1);k.useEffect(()=>{(async()=>{if(xt.isNativePlatform()){const h=await xt.getPlatform();l(h==="ios")}else l(!0)})()},[]),k.useEffect(()=>{if(window.location.hash&&window.location.hash.includes("access_token=")){const u=new URLSearchParams(window.location.hash.substring(1)),h=u.get("access_token"),f=u.get("refresh_token");h&&f&&la.auth.setSession({access_token:h,refresh_token:f})}},[]);const r=async()=>{try{await H7()}catch(u){console.error("Apple login failed",u)}},o={sign_in:{email_label:t.formatMessage({id:"auth.emailLabel"}),password_label:t.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:t.formatMessage({id:"auth.passwordPlaceholder"}),button_label:t.formatMessage({id:"auth.signInButton"}),social_provider_text:t.formatMessage({id:"auth.signInWithProvider"}),link_text:t.formatMessage({id:"auth.forgotPassword"})},forgotten_password:{email_label:t.formatMessage({id:"auth.emailLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),button_label:t.formatMessage({id:"auth.sendResetInstructions"}),link_text:t.formatMessage({id:"auth.rememberedPassword"})}};return m.jsxs("div",{className:ib.container,children:[i&&m.jsxs(Le,{variant:"default",size:"large",onClick:r,className:ib["apple-button"],children:[m.jsx(st,{slot:"prefix",name:"apple"}),t.formatMessage({id:"auth.signInWithProviderCustom"},{provider:"Apple"})]}),m.jsx(rl,{supabaseClient:la,appearance:{theme:ny,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname,view:"sign_in",localization:{variables:o},showLinks:!1})]})}const P7="_pageWrapper_vj5zy_1",V7="_pageContent_vj5zy_12",F7="_legalLinks_vj5zy_22",Eh={pageWrapper:P7,pageContent:V7,legalLinks:F7};function nb(){return m.jsx("div",{className:Eh.pageWrapper,children:m.jsxs("div",{className:Eh.pageContent,children:[m.jsx(pi,{}),m.jsx(I7,{}),m.jsxs("div",{className:Eh.legalLinks,children:[m.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),m.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const q7="_container_1r3fc_1",ps={container:q7};function G7(){const t=Ne(),[i]=Ix(),l=Yt(),[r,o]=k.useState(!1),[u,h]=k.useState(null),f={sign_up:{email_label:t.formatMessage({id:"auth.emailLabel"}),password_label:t.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:t.formatMessage({id:"auth.passwordPlaceholder"}),button_label:t.formatMessage({id:"auth.signUpButton"}),social_provider_text:t.formatMessage({id:"auth.signUpWithProvider"}),link_text:t.formatMessage({id:"auth.alreadyHaveAccount"})}},g=i.get("token"),p=k.useRef(g),b=k.useRef(!1);k.useEffect(()=>{const T=async A=>{if(b.current)return;b.current=!0,o(!0),h(null);const D=p.current;if(!D){console.error("Invite token is missing after sign-in."),o(!1),b.current=!1;return}try{const{error:U}=await la.functions.invoke("complete-invite",{body:{token:D,newAuthId:A.user.id}});if(U)throw U;l("/invite-success")}catch(U){console.error("Failed to complete the invite process:",U),h(U instanceof Error?U.message:"An unexpected error occurred"),o(!1),b.current=!1}},{data:{subscription:M}}=la.auth.onAuthStateChange((A,D)=>{(A==="SIGNED_IN"||A==="INITIAL_SESSION")&&D&&T(D)});if(la.auth.getSession().then(({data:{session:A}})=>{A&&T(A)}),window.location.hash&&window.location.hash.includes("access_token=")){const A=new URLSearchParams(window.location.hash.substring(1)),D=A.get("access_token"),U=A.get("refresh_token");D&&U&&la.auth.setSession({access_token:D,refresh_token:U})}return()=>M.unsubscribe()},[l]);const{data:_,isLoading:w,isError:y,error:S}=px({token:g});return g?w||r?m.jsx("div",{className:ps.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.checkingToken"})})}):y?m.jsx("div",{className:ps.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.errorCheckingToken"},{message:S?.message})})}):u?m.jsx("div",{className:ps.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.error"},{message:u})})}):m.jsx("div",{className:ps.container,children:_?.status==="valid"?m.jsx(rl,{supabaseClient:la,appearance:{theme:ny,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google","apple"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname+window.location.search,view:"sign_up",localization:{variables:f},showLinks:!1}):_?.status==="used"?m.jsx("div",{children:m.jsx("p",{children:t.formatMessage({id:"invite.tokenUsed"})})}):m.jsx("div",{children:m.jsx("p",{children:t.formatMessage({id:"invite.invalidToken"})})})}):m.jsx("div",{className:ps.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.noToken"})})})}const Y7="_pageWrapper_1smi3_1",X7="_pageContent_1smi3_12",W7="_legalLinks_1smi3_21",Ch={pageWrapper:Y7,pageContent:X7,legalLinks:W7};function cy(){return m.jsx("div",{className:Ch.pageWrapper,children:m.jsxs("div",{className:Ch.pageContent,children:[m.jsx(pi,{}),m.jsx(G7,{}),m.jsxs("div",{className:Ch.legalLinks,children:[m.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),m.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const Q7="_pageWrapper_1smi3_1",Z7="_pageContent_1smi3_12",lb={pageWrapper:Q7,pageContent:Z7};function uy(){return m.jsxs("div",{className:lb.pageWrapper,children:[m.jsx(pi,{}),m.jsxs("div",{className:lb.pageContent,children:[m.jsx("h1",{children:m.jsx(ie,{id:"invite.success.title"})}),m.jsx("p",{children:m.jsx(ie,{id:"invite.success.message"})}),m.jsx("p",{children:m.jsx(ie,{id:"invite.success.instructions"})}),m.jsx(Le,{variant:"primary",href:"/",children:m.jsx(ie,{id:"common.continue"})})]})]})}var K7=ht`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,J7=0,Pa=class extends tt{constructor(){super(...arguments),this.localize=new xa(this),this.attrId=++J7,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,xe`
      <div
        part="base"
        class=${ot({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?xe`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Pa.styles=[wt,K7];Pa.dependencies={"sl-icon-button":St};C([Ie(".tab")],Pa.prototype,"tab",2);C([B({reflect:!0})],Pa.prototype,"panel",2);C([B({type:Boolean,reflect:!0})],Pa.prototype,"active",2);C([B({type:Boolean,reflect:!0})],Pa.prototype,"closable",2);C([B({type:Boolean,reflect:!0})],Pa.prototype,"disabled",2);C([B({type:Number,reflect:!0})],Pa.prototype,"tabIndex",2);C([qe("active")],Pa.prototype,"handleActiveChange",1);C([qe("disabled")],Pa.prototype,"handleDisabledChange",1);var e8="sl-tab";Pa.define("sl-tab");var t8=Xt({tagName:e8,elementClass:Pa,react:Ht,events:{onSlClose:"sl-close"},displayName:"SlTab"}),rb=t8,a8=ht`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,i8=ht`
  :host {
    display: contents;
  }
`,Ic=class extends tt{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const i=t.assignedElements({flatten:!0});this.observedElements.forEach(l=>this.resizeObserver.unobserve(l)),this.observedElements=[],i.forEach(l=>{this.resizeObserver.observe(l),this.observedElements.push(l)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return xe` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ic.styles=[wt,i8];C([B({type:Boolean,reflect:!0})],Ic.prototype,"disabled",2);C([qe("disabled",{waitUntilFirstUpdate:!0})],Ic.prototype,"handleDisabledChange",1);var Rt=class extends tt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new xa(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(i=>{const l=i.filter(({target:r})=>{if(r===this)return!0;if(r.closest("sl-tab-group")!==this)return!1;const o=r.tagName.toLowerCase();return o==="sl-tab"||o==="sl-tab-panel"});if(l.length!==0){if(l.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),l.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(l.some(r=>r.attributeName==="active")){const o=l.filter(u=>u.attributeName==="active"&&u.target.tagName.toLowerCase()==="sl-tab").map(u=>u.target).find(u=>u.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((l,r)=>{var o;l[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),r.unobserve(l[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,i;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((i=this.resizeObserver)==null||i.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const l=t.target.closest("sl-tab");l?.closest("sl-tab-group")===this&&l!==null&&this.setActiveTab(l,{scrollBehavior:"smooth"})}handleKeyDown(t){const l=t.target.closest("sl-tab");if(l?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&l!==null&&(this.setActiveTab(l,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(f=>f.matches(":focus")),u=this.localize.dir()==="rtl";let h=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")h=this.focusableTabs[0];else if(t.key==="End")h=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(u?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const f=this.tabs.findIndex(g=>g===o);h=this.findNextFocusableTab(f,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(u?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const f=this.tabs.findIndex(g=>g===o);h=this.findNextFocusableTab(f,"forward")}if(!h)return;h.tabIndex=0,h.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(h,{scrollBehavior:"smooth"}):this.tabs.forEach(f=>{f.tabIndex=f===h?0:-1}),["top","bottom"].includes(this.placement)&&Kh(h,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,i){if(i=Ui({emitEvents:!0,scrollBehavior:"auto"},i),t!==this.activeTab&&!t.disabled){const l=this.activeTab;this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var o;return r.active=r.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Kh(this.activeTab,this.nav,"horizontal",i.scrollBehavior),i.emitEvents&&(l&&this.emit("sl-tab-hide",{detail:{name:l.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const i=this.panels.find(l=>l.name===t.panel);i&&(t.setAttribute("aria-controls",i.getAttribute("id")),i.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const i=t.clientWidth,l=t.clientHeight,r=this.localize.dir()==="rtl",o=this.getAllTabs(),h=o.slice(0,o.indexOf(t)).reduce((f,g)=>({left:f.left+g.clientWidth,top:f.top+g.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${i}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*h.left}px`:`${h.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${l}px`,this.indicator.style.translate=`0 ${h.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,i){let l=null;const r=i==="forward"?1:-1;let o=t+r;for(;t<this.tabs.length;){if(l=this.tabs[o]||null,l===null){i==="forward"?l=this.focusableTabs[0]:l=this.focusableTabs[this.focusableTabs.length-1];break}if(!l.disabled)break;o+=r}return l}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const i=this.tabs.find(l=>l.panel===t);i&&this.setActiveTab(i,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return xe`
      <div
        part="base"
        class=${ot({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?xe`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${ot({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?xe`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${ot({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Rt.styles=[wt,a8];Rt.dependencies={"sl-icon-button":St,"sl-resize-observer":Ic};C([Ie(".tab-group")],Rt.prototype,"tabGroup",2);C([Ie(".tab-group__body")],Rt.prototype,"body",2);C([Ie(".tab-group__nav")],Rt.prototype,"nav",2);C([Ie(".tab-group__indicator")],Rt.prototype,"indicator",2);C([ft()],Rt.prototype,"hasScrollControls",2);C([ft()],Rt.prototype,"shouldHideScrollStartButton",2);C([ft()],Rt.prototype,"shouldHideScrollEndButton",2);C([B()],Rt.prototype,"placement",2);C([B()],Rt.prototype,"activation",2);C([B({attribute:"no-scroll-controls",type:Boolean})],Rt.prototype,"noScrollControls",2);C([B({attribute:"fixed-scroll-controls",type:Boolean})],Rt.prototype,"fixedScrollControls",2);C([a1({passive:!0})],Rt.prototype,"updateScrollButtons",1);C([qe("noScrollControls",{waitUntilFirstUpdate:!0})],Rt.prototype,"updateScrollControls",1);C([qe("placement",{waitUntilFirstUpdate:!0})],Rt.prototype,"syncIndicator",1);var n8="sl-tab-group";Rt.define("sl-tab-group");var l8=Xt({tagName:n8,elementClass:Rt,react:Ht,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),r8=l8,s8=(t,i)=>{let l=0;return function(...r){window.clearTimeout(l),l=window.setTimeout(()=>{t.call(this,...r)},i)}},sb=(t,i,l)=>{const r=t[i];t[i]=function(...o){r.call(this,...o),l.call(this,r,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const i=new Set,l=new WeakMap,r=u=>{for(const h of u.changedTouches)i.add(h.identifier)},o=u=>{for(const h of u.changedTouches)i.delete(h.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),sb(EventTarget.prototype,"addEventListener",function(u,h){if(h!=="scrollend")return;const f=s8(()=>{i.size?f():this.dispatchEvent(new Event("scrollend"))},100);u.call(this,"scroll",f,{passive:!0}),l.set(this,f)}),sb(EventTarget.prototype,"removeEventListener",function(u,h){if(h!=="scrollend")return;const f=l.get(this);f&&u.call(this,"scroll",f,{passive:!0})})}})();const o8="_shell_fdhcs_1",c8="_content_fdhcs_12",u8="_footer_fdhcs_17",d8="_tabContent_fdhcs_47",ms={shell:o8,content:c8,footer:u8,tabContent:d8};function h8({children:t}){const i=Yt(),l=Cc(),r=k.useRef(null);k.useEffect(()=>{r.current&&r.current.show(l.pathname)},[l.pathname]);const o=u=>{i(u.detail.name)};return m.jsxs("div",{className:ms.shell,children:[m.jsx("main",{className:ms.content,children:t}),m.jsx("footer",{className:ms.footer,children:m.jsxs(r8,{ref:r,placement:"bottom",onSlTabShow:o,children:[m.jsx(rb,{slot:"nav",panel:"/stable",active:l.pathname==="/stable",onClick:()=>l.pathname!=="/stable"&&i("/stable"),role:"tab",children:m.jsx("div",{className:ms.tabContent,children:m.jsx(st,{src:"/assets/stables.svg"})})}),m.jsx(rb,{slot:"nav",panel:"/horse",active:l.pathname==="/horse",onClick:()=>l.pathname!=="/horse"&&i("/horse"),role:"tab",children:m.jsx("div",{className:ms.tabContent,children:m.jsx(st,{src:"/assets/horses.svg"})})})]})})]})}const Ec={"auth.login.title":"Login","auth.signup.title":"Sign up","roster.header.date":"Date","roster.emptySlot":"Tap to assign","roster.edit.drawerLabel":"Edit Roster for {slotName}","roster.edit.assignedHeader":"Assigned:","roster.edit.unassignedHeader":"Available to Add","roster.edit.selectMemberPlaceholder":"Select stable buddy","roster.edit.emptyState":"Nobody assigned.","roster.shareWeekLabel":"Share week","shell.tab.roster":"Roster","shell.tab.profile":"Profile","shell.tab.users":"Friends","profile.header.title":"Profile","profile.logout":"Logout","profile.info":"Info","share.rosterTitle":"Stable Roster","share.rosterText":"Check out this week's roster!","common.save":"Save","common.cancel":"Cancel","common.remove":"Remove","roster.loadPrevious":"Load previous weeks","roster.loadNext":"Load next weeks","roster.weekOf":"Week of {date}","roster.previousWeek":"Previous week","roster.nextWeek":"Next week","roster.selfAssignment.title":"Update Shift","roster.confirmAddSelf":"Do you want to add yourself to this shift?","roster.confirmRemoveSelf":"Do you want to REMOVE yourself from this shift?","auth.emailLabel":"Email address","auth.passwordLabel":"Password","auth.emailPlaceholder":"Your email address","auth.passwordPlaceholder":"Your password","auth.signInButton":"Sign in","auth.signInWithProvider":"Sign in with '{{provider}}'","auth.signInWithProviderCustom":"Sign in with {provider}","auth.signUpButton":"Sign up","auth.signUpWithProvider":"Sign up with '{{provider}}'","auth.alreadyHaveAccount":"Already have an account? Sign in","auth.forgotPassword":"Forgot your password?","auth.sendResetInstructions":"Send reset instructions","auth.rememberedPassword":"Remember your password? Sign in","manageUsers.you":"You","manageUsers.inviteUser":"Invite user","manageUsers.loading":"Loading users...","manageUsers.error":"Error loading users: {message}","manageUsers.removeUser":"Remove user","manageUsers.removeConfirmation":"Are you sure you want to remove {username} from this organization?","manageHorses.yours":"Yours","manageUsers.editUser":"Edit Stable buddy","manageHorses.editHorse":"Edit horse","manageHorses.assignOwner":"Assign Owner","manageHorses.selectOwner":"Select Owner","manageHorses.loading":"Loading horses...","manageHorses.error":"Error loading horses: {message}","manageHorses.removeHorse":"Remove horse","manageHorses.removeConfirmation":"Are you sure you want to remove {horseName} It will completely erase everything about this horse from the system!?","manageHorses.addHorse":"Add Horse","manageHorses.noHorsesFound":"No horses found that are boarded at this location","manageUsers.addUser":"Add Stable Buddy","users.firstNameLabel":"First Name","users.lastNameLabel":"Last Name","horses.nameLabel":"Name","users.fullNameLabel":"Full Name","horses.officialNameLabel":"Official Name","horses.ownerLabel":"Owner","horses.chipNumberLabel":"Transponder (chip) Number","horses.uelnLabel":"Life Number (UELN)","users.languageLabel":"Language","users.nicknameLabel":"Nickname","users.roleLabel":"Role","users.isRosterableLabel":"Can be assigned to roster","organization.role.owner":"Stable owner","organization.role.admin":"Stable admin","organization.role.member":"Stable buddy","common.language.dutch":"Dutch","common.language.english":"English","horses.noMembersFound":"No stable buddies found in this stable","common.close":"Close","invite.checkingToken":"Checking invite token...","invite.noToken":"No invite token found in the URL.","invite.invalidToken":"The invite token is invalid or has expired.","invite.tokenUsed":"This invite token has already been used.","invite.errorCheckingToken":"An error occurred while checking the invite token: {message}","invite.goToLogin":"Go to Login","invite.share.title":"Invite to Is My Horse","invite.share.text":"You've been invited to join our stable on Is My Horse. Sign up here:","invite.share.error":"Could not create invite link. Please try again.","invite.success.title":"Signup Successful!","invite.success.message":"Your account has been successfully created! From now on you can log in with the account you just created.","invite.success.instructions":"Click the button below to go to the start page of the app","invite.success.login":"Log in","dashboard.roster.title":"Rosters","dashboard.roster.description":"Rosters for e.g. stable duty","shell.tab.dashboard":"Dashboard","dashboard.members.title":"Stable buddies","dashboard.members.description":"People who are connected to the stable","dashboard.horses.title":"Horses","dashboard.horses.description":"Horses boarded here","dashboard.horses.count":"({count})","dashboard.facilities.title":"Facilities","dashboard.facilities.description":"to reserve things like an arena","navigation.back":"Back","dashboard.myHorses.title":"My Horses","dashboard.myHorses.description":"My own horses","dashboard.relatedHorses.title":"From Stable Buddies","dashboard.relatedHorses.description":"Horses of others at the stable","dashboard.following.title":"Following","dashboard.following.description":"Other horses I follow","invite.noProfile.title":"Account Not Fully Activated","invite.noProfile.message":"This is an invite-only beta. Your account must be linked to an invitation to proceed. If you have an invite link, please use it to sign up.","common.continue":"Continue","Initial ownership set by stable admin.":"This horse has been created by the stable owner and assigned to you.","dashboard.myHorses.acceptOwnershipQuestion":"Is {horseName} indeed your horse?","common.yes":"Yes","common.no":"No","ownershipTransfer.status.pending":"pending","ownershipTransfer.status.accepted":"accepted","ownershipTransfer.status.rejected":"rejected","ownershipTransfer.status.cancelled":"cancelled","validation.required":"This field is required.","validation.uelnInvalid":"UELN must be exactly 15 characters long.","validation.chipOrUelnRequired":"Please provide either a Chip Number or a UELN.","horses.scanBarcode":"Scan Barcode","validation.emailInvalid":"Please enter a valid email address.","validation.ageMinimum":"User must be at least 13 years old.","gender.other":"Other / Prefer not to say","gender.male":"Male","gender.female":"Female","users.genderLabel":"Gender","horses.dateOfBirthLabel":"Date of Birth","horses.ageLabel":"Age","horses.genderLabel":"Gender","gender.stallion":"Stallion","gender.mare":"Mare","gender.gelding":"Gelding","horses.countryOfBirthLabel":"Country of Birth","horses.passportNumberLabel":"Passport Number","horses.colorLabel":"Color","horses.breedStudbookLabel":"Breed/Studbook","horses.markingsLabel":"Markings","horses.chipLocationLabel":"Transponder Location","users.dateOfBirthLabel":"Date of Birth","users.cityLabel":"City","users.countryLabel":"Country","profile.notFound":"Profile not found.","profile.NoDisplayName":"No profile name","organization.cocLabel":"Chamber of Commerce","common.notSet":"not set","profile.privacyNotification":"Only you and the stable admin of {organizationName} ({adminName}) can see this information.","profile.stable.member":"Stable buddy at {organizationName} (as {nickName})","profile.stable.admin":"Admin at {organizationName} (as {nickName})","profile.stable.owner":"Owner of {organizationName} (as {nickName})","profile.organization.location":"Stable in {city}","profile.privacyNotification.organization":"Only visible to you.","profile.privacyNotification.user":"Only you and the admins of the stables you are a member of can see this information.","profile.edit.title":"Edit Profile Name","profile.edit.nameLabel":"Profile Name","profile.edit.info":"Edit Profile","profile.postUpdate":"Post","profile.follow":"Follow","profile.unfollow":"Unfollow","profile.followers":"{count} followers","user.edit.title":"Edit Profile","user.edit.success":"Profile updated successfully.","horse.edit.title":"Edit Horse Info","horse.edit.success":"Horse updated successfully.","organization.edit.title":"Edit Organization","organization.nameLabel":"Name","organization.cityLabel":"City","avatar.editor.title":"Edit Profile Picture","avatar.editor.zoom":"Zoom","manageTeam.title":"Manage my Hoomans","manageTeam.stableOwner":"Stable Owner","manageTeam.team":"My hoomans","manageTeam.organizationTeam":"Hoomans from {organizationName}","manageTeam.followers":"Followers","manageTeam.noTeam":"No hoomans added yet.","manageTeam.noFollowers":"No followers found.","manageTeam.demoteTitle":"Remove from my hoomans?","manageTeam.demoteWarning":"Are you sure you want to remove this user from my hoomans? They will lose access to restricted posts.","roles.owner":"Owner","roles.co_owner":"Co-owner","roles.rider":"Rider/Leaser","roles.groom":"Groom","roles.instructor":"Instructor","roles.medical":"Vet/Medical","roles.farrier":"Farrier","roles.stable_owner":"Stable Owner","roles.stable_groom":"Stable Groom","roles.follower":"Follower","roles.follower_only":"Follower","manageTeam.buttonLabel":"My hoomans"},f8=Object.freeze(Object.defineProperty({__proto__:null,default:Ec},Symbol.toStringTag,{value:"Module"})),p8="_panel_1nlou_1",m8="_panelContent_1nlou_17",g8="_icon_1nlou_23",v8="_content_1nlou_31",b8="_textContent_1nlou_40",y8="_quickAction_1nlou_56",_8="_chevron_1nlou_65",x8="_lime_1nlou_73",w8="_sky_1nlou_76",S8="_rose_1nlou_79",E8="_brown_1nlou_82",fn={panel:p8,panelContent:m8,icon:g8,content:v8,textContent:b8,quickAction:y8,chevron:_8,lime:x8,sky:w8,rose:S8,brown:E8};function sl({icon:t,title:i,description:l,link:r,variant:o="lime",quickAction:u}){const h=r?"a":"div",f=g=>{g.stopPropagation()};return m.jsxs(h,{href:r,className:`${fn.panel} ${fn[o]}`,onClick:g=>!r&&g.preventDefault(),children:[m.jsxs("div",{className:fn.panelContent,children:[m.jsx("div",{className:fn.icon,children:t}),m.jsx("div",{className:fn.content,children:m.jsxs("div",{className:fn.textContent,children:[m.jsx("strong",{children:i}),l&&m.jsx("span",{children:l})]})}),r&&m.jsx("div",{className:fn.chevron,children:m.jsx(st,{name:"chevron-right"})})]}),u&&m.jsx("div",{className:fn.quickAction,onClick:f,children:u})]})}const C8="_rosterLinks_1um2j_1",A8="_rosterLink_1um2j_1",ob={rosterLinks:C8,rosterLink:A8};function T8({organization_id:t}){const i=Ne(),{data:l}=mx({organizationId:t});return m.jsx(sl,{variant:"sky",icon:m.jsx(st,{name:"calendar"}),title:i.formatMessage({id:"dashboard.roster.title"}),description:i.formatMessage({id:"dashboard.roster.description"}),quickAction:l&&m.jsx("div",{className:ob.rosterLinks,children:l.map(r=>m.jsxs(Hx,{to:`/stable/${t}/roster/${r.id}`,className:ob.rosterLink,children:[m.jsx(st,{name:"calendar-date"}),m.jsx("span",{children:r.name})]},r.id))})})}const M8="_quickAction_kr3qy_1",N8="_avatarStack_kr3qy_7",cb={quickAction:M8,avatarStack:N8};function $8({organization_id:t}){const i=Ne(),{data:l}=sf({organizationId:t,enabled:!!t}),r=l?m.jsxs("div",{className:cb.quickAction,children:[m.jsx("div",{className:cb.avatarStack,children:l.slice(0,8).map(o=>{const u=[o.user_profiles?.firstname,o.user_profiles?.lastname].filter(Boolean).join(" ")||o.nickname||"";return m.jsx(vt,{image:o.user_profiles?.social_profiles?.avatar_url,name:u},o.id)})}),m.jsxs("span",{children:["(",l.length,")"]})]}):null;return m.jsx(sl,{variant:"rose",icon:m.jsx(st,{name:"people"}),title:i.formatMessage({id:"dashboard.members.title"}),description:i.formatMessage({id:"dashboard.members.description"}),link:`/stable/${t}/members`,quickAction:r})}const O8="_quickAction_1euwo_1",k8="_avatarStack_1euwo_7",ub={quickAction:O8,avatarStack:k8},{useOrganizationHorses:R8}=await $t(async()=>{const{useOrganizationHorses:t}=await import("./index-BxPSzMVi.js").then(i=>i.aU);return{useOrganizationHorses:t}},[]);function D8({organization_id:t}){const i=Ne(),{data:l}=R8({organizationId:t,enabled:!!t}),r=l?m.jsxs("div",{className:ub.quickAction,children:[m.jsx("div",{className:ub.avatarStack,children:l.slice(0,8).map(o=>m.jsx(vt,{image:o.social_profiles?.avatar_url,name:o.name},o.id))}),m.jsxs("span",{children:["(",l.length,")"]})]}):null;return m.jsx(sl,{variant:"brown",icon:m.jsx(st,{src:"assets/stables.svg"}),title:i.formatMessage({id:"dashboard.horses.title"}),link:`/stable/${t}/horses`,description:i.formatMessage({id:"dashboard.horses.description"}),quickAction:r})}function L8(){const t=Ne();return m.jsx(sl,{variant:"lime",icon:m.jsx(st,{name:"bookmark-plus"}),title:t.formatMessage({id:"dashboard.facilities.title"}),description:t.formatMessage({id:"dashboard.facilities.description"})})}const z8="_pageWrapper_1ek55_1",j8="_pageContent_1ek55_10",B8="_profileAction_1ek55_19",H8="_profileAvatar_1ek55_25",lc={pageWrapper:z8,pageContent:j8,profileAction:B8,profileAvatar:H8};function U8(){const t=Yt(),{data:i,isLoading:l}=Eb({enabled:!0}),{data:r}=fi({enabled:!0});return m.jsxs("div",{className:lc.pageWrapper,children:[m.jsx(pi,{headerActions:m.jsx("div",{onClick:()=>t("/profile/me"),className:lc.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:r?.social_profiles?.avatar_url,name:r?.firstname??"",className:lc.profileAvatar})})}),m.jsxs("div",{className:lc.pageContent,children:[l&&m.jsx("div",{children:"Loading..."}),i&&m.jsxs(m.Fragment,{children:[m.jsx(T8,{organization_id:i.id}),m.jsx($8,{organization_id:i.id}),m.jsx(D8,{organization_id:i.id}),m.jsx(L8,{})]})]})]})}const I8="_horseList_1go9e_1",P8="_horseEntry_1go9e_8",V8="_horseItem_1go9e_18",F8="_horseInfo_1go9e_24",q8="_horseName_1go9e_30",G8="_officialName_1go9e_34",Y8="_buttonGroup_1go9e_40",X8="_pendingActions_1go9e_46",W8="_divider_1go9e_52",Q8="_notes_1go9e_58",Z8="_question_1go9e_64",K8="_acceptButton_1go9e_68",J8="_rejectButton_1go9e_73",ga={horseList:I8,horseEntry:P8,horseItem:V8,horseInfo:F8,horseName:q8,officialName:G8,buttonGroup:Y8,pendingActions:X8,divider:W8,notes:Q8,question:Z8,acceptButton:K8,rejectButton:J8},{useCurrentUserProfile:eA,useUserHorses:tA,usePendingHorseOwnershipTransfers:aA,useUpdateHorseOwnershipTransfer:iA}=await $t(async()=>{const{useCurrentUserProfile:t,useUserHorses:i,usePendingHorseOwnershipTransfers:l,useUpdateHorseOwnershipTransfer:r}=await import("./index-BxPSzMVi.js").then(o=>o.aU);return{useCurrentUserProfile:t,useUserHorses:i,usePendingHorseOwnershipTransfers:l,useUpdateHorseOwnershipTransfer:r}},[]);function nA(){const t=Ne(),i=Yt(),{data:l}=eA({enabled:!0}),r=iA(),{data:o}=tA({userId:l?.id,enabled:!!l?.id}),{data:u}=aA({userId:l?.id,enabled:!!l?.id}),h=new Set(u?.map(y=>y.horse_id)),f=o?.filter(y=>!h.has(y.id))||[],g=y=>u?.find(S=>S.horse_id===y),p=(y,S)=>{l?.id&&r.mutate({transferId:y,status:S})},b=y=>r.isPending&&r.variables?.transferId===y,_=[...f,...u?.map(y=>y.horses).filter(Boolean)||[]],w=_.length>0?m.jsx("div",{className:ga.horseList,children:_.map(y=>{if(!y)return null;const S=g(y.id),T=!!S,M=S?.notes;return m.jsxs("div",{className:ga.horseEntry,children:[m.jsxs("div",{className:ga.horseItem,onClick:()=>i(`/profile/${y.social_profile_id}`),role:"button",tabIndex:0,onKeyDown:A=>{(A.key==="Enter"||A.key===" ")&&i(`/profile/${y.social_profile_id}`)},children:[m.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:m.jsx(vt,{image:y.social_profiles?.avatar_url,name:y.name})}),m.jsxs("div",{className:ga.horseInfo,children:[m.jsx("span",{className:ga.horseName,children:y.name}),y.official_name&&m.jsx("span",{className:ga.officialName,children:y.official_name})]}),m.jsx(st,{name:"chevron-right"})]}),T&&m.jsxs(m.Fragment,{children:[m.jsx("hr",{className:ga.divider}),m.jsxs("div",{className:ga.pendingActions,children:[M&&m.jsx("p",{className:ga.notes,children:m.jsx(ie,{id:M,defaultMessage:M})}),m.jsx("p",{className:ga.question,children:m.jsx(ie,{id:"dashboard.myHorses.acceptOwnershipQuestion",values:{horseName:y.name}})}),m.jsxs("div",{className:ga.buttonGroup,children:[m.jsxs(Le,{size:"small",className:ga.acceptButton,onClick:()=>p(S.id,"accepted"),loading:b(S.id),disabled:b(S.id),children:[m.jsx(st,{slot:"prefix",name:"check-lg"}),m.jsx(ie,{id:"common.yes",defaultMessage:"Yes"})]}),m.jsxs(Le,{size:"small",className:ga.rejectButton,onClick:()=>p(S.id,"rejected"),loading:b(S.id),disabled:b(S.id),children:[m.jsx(st,{slot:"prefix",name:"x-lg"}),m.jsx(ie,{id:"common.no",defaultMessage:"No"})]})]})]})]})]},y.id)})}):null;return m.jsx(sl,{variant:"brown",icon:m.jsx(st,{src:"assets/horses.svg"}),title:t.formatMessage({id:"dashboard.myHorses.title"}),description:t.formatMessage({id:"dashboard.myHorses.description"}),quickAction:w})}function lA(){const t=Ne();return m.jsx(sl,{variant:"rose",icon:m.jsx(st,{name:"people"}),title:t.formatMessage({id:"dashboard.relatedHorses.title"}),description:t.formatMessage({id:"dashboard.relatedHorses.description"})})}function rA(){const t=Ne();return m.jsx(sl,{variant:"lime",icon:m.jsx(st,{name:"eye"}),title:t.formatMessage({id:"dashboard.following.title"}),description:t.formatMessage({id:"dashboard.following.description"})})}const sA="_pageWrapper_1sr2a_1",oA="_pageContent_1sr2a_10",cA="_profileAction_1sr2a_19",uA="_profileAvatar_1sr2a_25",rc={pageWrapper:sA,pageContent:oA,profileAction:cA,profileAvatar:uA};function dA(){const t=Yt(),{data:i}=fi({enabled:!0});return m.jsxs("div",{className:rc.pageWrapper,children:[m.jsx(pi,{headerActions:m.jsx("div",{onClick:()=>t("/profile/me"),className:rc.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:i?.social_profiles?.avatar_url,name:i?.firstname??"",className:rc.profileAvatar})})}),m.jsxs("div",{className:rc.pageContent,children:[m.jsx(nA,{}),m.jsx(lA,{}),m.jsx(rA,{})]})]})}var hA=ht`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Pt=class extends tt{constructor(){super(...arguments),this.formControlController=new Ts(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,i)=>t.checked=i}),this.hasSlotController=new il(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),i=this.helpText?!0:!!t;return xe`
      <div
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":i})}
      >
        <label
          part="base"
          class=${ot({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ve(this.value)}
            .checked=${Hf(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${i?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Pt.styles=[wt,Rc,hA];C([Ie('input[type="checkbox"]')],Pt.prototype,"input",2);C([ft()],Pt.prototype,"hasFocus",2);C([B()],Pt.prototype,"title",2);C([B()],Pt.prototype,"name",2);C([B()],Pt.prototype,"value",2);C([B({reflect:!0})],Pt.prototype,"size",2);C([B({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);C([B({type:Boolean,reflect:!0})],Pt.prototype,"checked",2);C([Bf("checked")],Pt.prototype,"defaultChecked",2);C([B({reflect:!0})],Pt.prototype,"form",2);C([B({type:Boolean,reflect:!0})],Pt.prototype,"required",2);C([B({attribute:"help-text"})],Pt.prototype,"helpText",2);C([qe("checked",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleCheckedChange",1);C([qe("disabled",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleDisabledChange",1);var fA="sl-switch";Pt.define("sl-switch");var pA=Xt({tagName:fA,elementClass:Pt,react:Ht,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"}),dy=pA;const mA="_container_1vojo_1",gA="_userListItem_1vojo_14",vA="_clickable_1vojo_25",bA="_userInfo_1vojo_34",yA="_nameContainer_1vojo_40",_A="_nickname_1vojo_45",xA="_fullName_1vojo_49",wA="_youIndicator_1vojo_55",SA="_iconGroup_1vojo_62",EA="_removeButton_1vojo_68",CA="_editForm_1vojo_72",AA="_switchRow_1vojo_79",TA="_switchLabel_1vojo_85",Jt={container:mA,"user-list":"_user-list_1vojo_5",userListItem:gA,clickable:vA,userInfo:bA,nameContainer:yA,nickname:_A,fullName:xA,youIndicator:wA,iconGroup:SA,removeButton:EA,editForm:CA,switchRow:AA,switchLabel:TA};function MA({organizationId:t}){const{data:i}=fi({enabled:!0}),{formatMessage:l}=Ne(),{data:r}=of({organizationId:t,enabled:!!t}),o=Yt(),[u,h]=k.useState(!1),[f,g]=k.useState(null),[p,b]=k.useState(""),[_,w]=k.useState("member"),[y,S]=k.useState(!1),T=gx(),M=vx(),{data:A,isLoading:D,isError:U,error:j}=sf({organizationId:t,enabled:!!t}),$=k.useMemo(()=>(A??[]).slice().sort((Q,le)=>(Q.nickname??"").localeCompare(le.nickname??"")),[A]),W=k.useCallback(async Q=>{const le=l({id:"manageUsers.removeConfirmation",defaultMessage:"Are you sure you want to remove {username} from this organization?"},{username:Q.user_profiles?.firstname||Q.nickname||"this user"});window.confirm(le)&&await T.mutateAsync({organizationId:t??"",userProfileId:Q.user_profile_id})},[l,t,T]),X=Q=>{g(Q),b(Q.nickname??""),w(Q.role),S(Q.is_rosterable??!1),h(!0)},oe=()=>{h(!1),g(null)},z=async()=>{if(f)try{await M.mutateAsync({organizationId:t??"",userProfileId:f.user_profile_id,nickname:p,role:_,is_rosterable:y}),oe()}catch(Q){console.error("Failed to update user:",Q)}},q=[{value:"admin",labelId:"organization.role.admin"},{value:"member",labelId:"organization.role.member"}],J=l({id:"manageUsers.inviteUser",defaultMessage:"Invite user"}),ae=({user:Q})=>{const{formatMessage:le}=Ne(),{mutate:te,isPending:I}=bx({mutationFn:()=>yx(Q.user_profile_id),onSuccess:async Z=>{const ee=le({id:"invite.share.title",defaultMessage:"Invite to Is My Horse"}),ce=le({id:"invite.share.text",defaultMessage:"You've been invited to join our stable on Is My Horse. Sign up here:"});await V4(`/invite?token=${Z}`,ee,ce,J)},onError:Z=>{console.error("Failed to generate invite link:",Z);let ce=Z?.context?.error?.message;ce||(Z instanceof Error||typeof Z=="object"&&Z!==null&&"message"in Z)&&(ce=Z.message),alert(le({id:"invite.share.error",defaultMessage:"Could not create invite link. Please try again."})+`

Details: ${ce}`)}});return I?m.jsx(J1,{style:{fontSize:"1rem"}}):m.jsx(kt,{label:J,name:"envelope",onClick:()=>te()})};return m.jsxs("div",{className:Jt.container,children:[m.jsx("ul",{className:Jt["user-list"],children:$.map(Q=>m.jsxs("li",{className:`${Jt.userListItem} ${Q.user_profiles?.social_profile_id?Jt.clickable:""}`,onClick:()=>{Q.user_profiles?.social_profile_id&&o(`/profile/${Q.user_profiles?.social_profile_id}`)},children:[m.jsxs("div",{className:Jt.userInfo,children:[m.jsx(vt,{image:Q.user_profiles?.social_profiles?.avatar_url,name:Q.nickname??"",className:Jt.avatar}),m.jsxs("div",{className:Jt.nameContainer,children:[m.jsxs("span",{className:Jt.nickname,children:[Q.nickname,Q.user_profiles?.auth_user_id===i?.auth_user_id&&m.jsxs("span",{className:Jt.youIndicator,children:[" ","(",m.jsx(ie,{id:"manageUsers.you",defaultMessage:"You"}),")"]})]}),m.jsxs("span",{className:Jt.fullName,children:[Q.user_profiles?.firstname," ",Q.user_profiles?.lastname]})]})]}),m.jsxs("div",{className:Jt.iconGroup,onClick:le=>le.stopPropagation(),children:[(r==="admin"||r==="owner")&&m.jsx(kt,{label:l({id:"manageUsers.editUser"}),name:"pencil",onClick:()=>X(Q)}),(r==="admin"||r==="owner")&&Q.user_profiles?.auth_user_id!==i?.auth_user_id&&m.jsxs(m.Fragment,{children:[!Q.user_profiles?.auth_user_id&&m.jsx(ae,{user:Q}),m.jsx(kt,{className:Jt.removeButton,label:l({id:"manageUsers.removeUser",defaultMessage:"Remove user"}),name:"trash",onClick:()=>W(Q)})]})]})]},Q.id))}),D&&m.jsx("p",{children:m.jsx(ie,{id:"manageUsers.loading",defaultMessage:"Loading users..."})}),U&&m.jsx("p",{children:m.jsx(ie,{id:"manageUsers.error",defaultMessage:"Error loading users: {message}",values:{message:j?.message}})}),m.jsxs(ks,{label:l({id:"manageUsers.editUser"}),open:u,onSlAfterHide:oe,children:[m.jsxs("div",{className:Jt.editForm,children:[m.jsx(Ee,{label:l({id:"users.fullNameLabel"}),value:`${f?.user_profiles?.firstname??""} ${f?.user_profiles?.lastname??""}`,disabled:!0}),m.jsx(Ee,{label:l({id:"users.nicknameLabel"}),value:p,onSlInput:Q=>b(Q.target.value)}),f?.role==="owner"?m.jsx(Ee,{label:l({id:"users.roleLabel"}),value:l({id:"organization.role.owner"}),disabled:!0}):m.jsx(ta,{label:l({id:"users.roleLabel"}),value:_,onSlAfterHide:Q=>{Q.stopPropagation()},onSlChange:Q=>w(Q.target.value),children:q.map(Q=>m.jsx(je,{value:Q.value,children:l({id:Q.labelId})},Q.value))}),m.jsxs("div",{className:Jt.switchRow,children:[m.jsx("span",{className:Jt.switchLabel,children:l({id:"users.isRosterableLabel"})}),m.jsx(dy,{checked:y,onSlChange:Q=>S(Q.target.checked)})]})]}),m.jsx(Le,{slot:"footer",variant:"primary",onClick:z,loading:M.isPending,children:m.jsx(ie,{id:"common.save"})}),m.jsx(Le,{slot:"footer",onClick:oe,children:m.jsx(ie,{id:"common.cancel"})})]})]})}const NA="_addUserDrawer_4mi60_1",$A="_formContent_4mi60_33",db={addUserDrawer:NA,formContent:$A},{useAddUserToStable:OA,useUserOrganization:kA}=await $t(async()=>{const{useAddUserToStable:t,useUserOrganization:i}=await import("./index-BxPSzMVi.js").then(l=>l.aU);return{useAddUserToStable:t,useUserOrganization:i}},[]);function RA({isOpen:t,onClose:i,onSaveSuccess:l}){const r=Ne(),{data:o}=kA({enabled:t}),u=OA(),[h,f]=k.useState(""),[g,p]=k.useState(""),[b,_]=k.useState(""),[w,y]=k.useState("member"),[S,T]=k.useState(!1),[M,A]=k.useState({}),D=[{value:"admin",labelId:"organization.role.admin"},{value:"member",labelId:"organization.role.member"}];k.useEffect(()=>{t||U()},[t]);const U=()=>{f(""),p(""),_(""),y("member"),T(!1),A({})},j=()=>{U(),i()},$=()=>{const X={},oe=r.formatMessage({id:"validation.required"});return h.trim()||(X.firstname=oe),g.trim()||(X.lastname=oe),w||(X.role=oe),A(X),Object.keys(X).length===0},W=async()=>{if(!(!$()||!o?.id))try{await u.mutateAsync({organization_id:o.id,firstname:h,lastname:g,nickname:b||h,role:w,is_rosterable:S,locale:r.locale}),l?.(),i()}catch(X){console.error("Failed to add user:",X)}};return m.jsxs(mi,{label:r.formatMessage({id:"manageUsers.addUser"}),placement:"end",open:t,onSlAfterHide:j,className:db.addUserDrawer,children:[m.jsxs("div",{className:db.formContent,children:[m.jsx(Ee,{"data-testid":"firstname-input",label:r.formatMessage({id:"users.firstNameLabel"}),value:h,onSlInput:X=>f(X.target.value),required:!0,helpText:M.firstname}),m.jsx(Ee,{"data-testid":"lastname-input",label:r.formatMessage({id:"users.lastNameLabel"}),value:g,onSlInput:X=>p(X.target.value),required:!0,helpText:M.lastname}),m.jsx(Ee,{"data-testid":"nickname-input",label:r.formatMessage({id:"users.nicknameLabel"}),value:b,onSlInput:X=>_(X.target.value)}),m.jsx(ta,{"data-testid":"role-select",label:r.formatMessage({id:"users.roleLabel"}),value:w,onSlChange:X=>y(X.target.value),onSlAfterHide:X=>{X.stopPropagation()},required:!0,helpText:M.role,children:D.map(X=>m.jsx(je,{value:X.value,children:r.formatMessage({id:X.labelId})},X.value))}),m.jsx(dy,{"data-testid":"rosterable-switch",checked:S,onSlChange:X=>T(X.target.checked),children:r.formatMessage({id:"users.isRosterableLabel"})})]}),m.jsx(Le,{slot:"footer",variant:"primary",onClick:W,loading:u.isPending,children:m.jsx(ie,{id:"common.save",defaultMessage:"Save"})}),m.jsx(Le,{slot:"footer",variant:"neutral",onClick:j,children:m.jsx(ie,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const DA="_pageWrapper_1ufe2_1",LA="_pageContent_1ufe2_11",zA="_drawer_1ufe2_20",jA="_profileAction_1ufe2_33",BA="_profileAvatar_1ufe2_39",HA="_headerActions_1ufe2_43",ql={pageWrapper:DA,pageContent:LA,drawer:zA,profileAction:jA,profileAvatar:BA,headerActions:HA};function UA(){const t=Ne(),{organization_id:i}=Cs(),{data:l}=of({organizationId:i,enabled:!0}),{data:r}=fi({enabled:!0}),o=Yt(),u=k.useRef(null),[h,f]=k.useState(!1),g=()=>{f(!0)};return m.jsx(mi,{label:t.formatMessage({id:"shell.tab.users"}),placement:"end",open:!0,ref:u,className:ql.drawer,children:m.jsxs("div",{className:ql.pageWrapper,children:[m.jsx(RA,{isOpen:h,onClose:()=>{u.current?.modal.deactivateExternal(),f(!1)},onSaveSuccess:()=>console.log("User added successfully!")}),m.jsx(pi,{showBackButton:!0,headerActions:l==="admin"||l==="owner"?m.jsxs("div",{className:ql.headerActions,children:[m.jsx(kt,{"data-testid":"add-user-button",label:t.formatMessage({id:"manageUsers.addUser"}),onClick:()=>{u.current?.modal.activateExternal(),g()},name:"plus"}),m.jsx("div",{onClick:()=>o("/profile/me"),className:ql.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:r?.social_profiles?.avatar_url,name:r?.firstname??"",className:ql.profileAvatar})})]}):null}),m.jsx("div",{className:ql.pageContent,children:m.jsx(MA,{organizationId:i})})]})})}const IA="_container_1cmcv_1",PA="_clickable_1cmcv_25",VA="_horseInfo_1cmcv_34",FA="_nameContainer_1cmcv_40",qA="_horseName_1cmcv_45",GA="_age_1cmcv_49",YA="_divider_1cmcv_55",XA="_ownerInfo_1cmcv_61",WA="_ownerLabel_1cmcv_68",QA="_status_1cmcv_72",ZA="_ownerSelect_1cmcv_85",Bt={container:IA,"horse-list":"_horse-list_1cmcv_5","horse-list-item":"_horse-list-item_1cmcv_14",clickable:PA,horseInfo:VA,nameContainer:FA,horseName:qA,age:GA,divider:YA,ownerInfo:XA,ownerLabel:WA,status:QA,"icon-group":"_icon-group_1cmcv_77",ownerSelect:ZA},{useOrganizationHorses:KA,useCurrentUserProfile:JA,useDeleteHorse:e9,useOrganizationMembers:t9,useOrganizationHorseTransfers:a9,useCurrentUserOrganizationRole:i9,useInitiateOwnershipTransfer:n9}=await $t(async()=>{const{useOrganizationHorses:t,useCurrentUserProfile:i,useDeleteHorse:l,useOrganizationMembers:r,useOrganizationHorseTransfers:o,useCurrentUserOrganizationRole:u,useInitiateOwnershipTransfer:h}=await import("./index-BxPSzMVi.js").then(f=>f.aU);return{useOrganizationHorses:t,useCurrentUserProfile:i,useDeleteHorse:l,useOrganizationMembers:r,useOrganizationHorseTransfers:o,useCurrentUserOrganizationRole:u,useInitiateOwnershipTransfer:h}},[]);function l9({organizationId:t}){const{formatMessage:i,locale:l}=Ne(),r=Yt(),{data:o}=JA({enabled:!0}),u=e9(),h=n9(),{data:f}=i9({organizationId:t,enabled:!!t}),[g,p]=k.useState(null),[b,_]=k.useState(null),[w,y]=k.useState(""),{data:S}=t9({organizationId:t,enabled:!!t}),{data:T}=a9({organizationId:t,enabled:!!t}),{data:M,isLoading:A,isError:D,error:U}=KA({organizationId:t,enabled:!!t}),j=k.useMemo(()=>(M??[]).slice().sort((z,q)=>z.name.localeCompare(q.name)),[M]),$=k.useMemo(()=>S?new Map(S.map(z=>[z.user_profile_id,z])):new Map,[S]),W=k.useMemo(()=>T?new Map(T.map(z=>[z.horse_id,z])):new Map,[T]),X=k.useCallback(async z=>{const q=i({id:"manageHorses.removeConfirmation",defaultMessage:"Are you sure you want to remove {horseName}?"},{horseName:z.name});window.confirm(q)&&await u.mutateAsync({horseId:z.id,organizationId:t??""})},[i,t,u]),oe=k.useCallback(async()=>{if(!(!b||!w||!t))try{await h.mutateAsync({horseId:b.id,toOwnerId:w,organizationId:t,notes:"Initial ownership set by stable admin.",forceOwnership:!0}),_(null),y("")}catch(z){console.error("Failed to initiate transfer",z)}},[b,w,t,h]);return m.jsxs("div",{className:Bt.container,children:[m.jsx("ul",{className:Bt["horse-list"],children:j.map(z=>{const q=z.owner_id?$.get(z.owner_id):void 0,J=W.get(z.id),ae=z.owner_id===o?.id;return m.jsxs("li",{className:`${Bt["horse-list-item"]} ${z.social_profile_id?Bt.clickable:""}`,onClick:()=>{z.social_profile_id&&r(`/profile/${z.social_profile_id}`)},children:[m.jsxs("div",{className:Bt.horseInfo,children:[m.jsx(vt,{image:z.social_profiles?.avatar_url,name:z.name,className:Bt.avatar}),m.jsxs("div",{className:Bt.nameContainer,children:[m.jsx("span",{className:Bt.horseName,children:z.name}),z.date_of_birth&&m.jsx("span",{className:Bt.age,children:Hc(z.date_of_birth,l.startsWith("nl")?"nl":"en")})]})]}),m.jsx("hr",{className:Bt.divider}),m.jsxs("div",{className:Bt.ownerInfo,children:[m.jsxs("span",{className:Bt.ownerLabel,children:[m.jsx(ie,{id:"horses.ownerLabel",defaultMessage:"Owner"}),":"]}),ae?m.jsx("span",{className:Bt.ownerName,children:m.jsx(ie,{id:"manageHorses.yours",defaultMessage:"Yours"})}):m.jsxs("span",{className:Bt.ownerName,children:[q?.user_profiles?.firstname," ",q?.user_profiles?.lastname]}),J?.status&&m.jsxs("span",{className:Bt.status,children:["(",m.jsx(ie,{id:`ownershipTransfer.status.${J.status}`,defaultMessage:J.status}),")"]})]}),m.jsx("span",{className:Bt["icon-group"],onClick:Q=>Q.stopPropagation(),children:(f==="admin"||f==="owner")&&m.jsxs(m.Fragment,{children:[!z.owner_id&&m.jsx(kt,{label:i({id:"manageHorses.assignOwner",defaultMessage:"Assign Owner"}),name:"person-plus",onClick:()=>_(z)}),m.jsx(kt,{label:i({id:"manageHorses.editHorse",defaultMessage:"Edit horse"}),name:"pencil",onClick:()=>p(z)}),m.jsx(kt,{label:i({id:"manageHorses.removeHorse",defaultMessage:"Remove horse"}),name:"trash",style:{color:"red"},onClick:()=>X(z)})]})})]},z.id)})}),A&&m.jsx("p",{children:m.jsx(ie,{id:"manageHorses.loading",defaultMessage:"Loading horses..."})}),D&&m.jsx("p",{children:m.jsx(ie,{id:"manageHorses.error",defaultMessage:"Error loading horses: {message}",values:{message:U?.message}})}),!A&&!D&&j.length===0&&m.jsx("p",{children:m.jsx(ie,{id:"manageHorses.noHorsesFound",defaultMessage:"No horses found that are boarded at this location"})}),g&&m.jsx(ey,{isOpen:!!g,onClose:()=>p(null),horse:g,socialProfile:g.social_profiles??void 0}),m.jsxs(ks,{label:i({id:"manageHorses.assignOwner",defaultMessage:"Assign Owner"}),open:!!b,onSlAfterHide:()=>{_(null),y("")},children:[m.jsx(ta,{label:i({id:"manageHorses.selectOwner",defaultMessage:"Select Owner"}),value:w,onSlChange:z=>y(z.target.value),hoist:!0,placement:"top",onSlAfterHide:z=>z.stopPropagation(),className:Bt.ownerSelect,children:S?.map(z=>m.jsxs(je,{value:z.user_profile_id,children:[z.user_profiles?.firstname," ",z.user_profiles?.lastname]},z.user_profile_id))}),m.jsxs("div",{slot:"footer",children:[m.jsx(Le,{variant:"neutral",onClick:()=>_(null),children:m.jsx(ie,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(Le,{variant:"primary",onClick:oe,disabled:!w||h.isPending,loading:h.isPending,children:m.jsx(ie,{id:"common.save",defaultMessage:"Save"})})]})]})]})}const r9="_addUserDrawer_anohp_1",s9="_formContent_anohp_32",o9="_inputWithIcon_anohp_45",c9="_countrySelect_anohp_57",u9="_dobRow_anohp_61",d9="_dobInput_anohp_68",h9="_ageDisplay_anohp_72",pn={addUserDrawer:r9,formContent:s9,inputWithIcon:o9,countrySelect:c9,dobRow:u9,dobInput:d9,ageDisplay:h9};function f9({isOpen:t,onClose:i,onSaveSuccess:l}){const r=Ne(),{data:o}=Eb({enabled:t}),{data:u}=sf({organizationId:o?.id,enabled:!!o?.id&&t}),h=_x(),[f,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(""),[T,M]=k.useState(void 0),[A,D]=k.useState(null),[U,j]=k.useState(""),[$,W]=k.useState(""),[X,oe]=k.useState(""),[z,q]=k.useState(""),[J,ae]=k.useState(""),[Q,le]=k.useState(""),[te,I]=k.useState({});k.useEffect(()=>{t||Z()},[t]);const Z=()=>{g(""),b(""),w(""),S(""),M(void 0),D(null),j(""),W(""),oe(""),q(""),ae(""),le(""),I({})},ee=()=>{Z(),i()},ce=()=>{const K={};return f.trim()||(K.name=r.formatMessage({id:"validation.required"})),T||(K.ownerId=r.formatMessage({id:"validation.required"})),!_.trim()&&!y.trim()&&(K.chipOrUeln=r.formatMessage({id:"validation.chipOrUelnRequired"})),y.trim()&&y.trim().length!==15&&(K.ueln=r.formatMessage({id:"validation.uelnInvalid"})),I(K),Object.keys(K).length===0},ye=async()=>{if(!(!ce()||!o?.id||!T))try{await h.mutateAsync({name:f,boarded_at_org_id:o.id,owner_id:T,official_name:p||void 0,chip_number:_||void 0,ueln:y||void 0,date_of_birth:A?za(A,"yyyy-MM-dd"):void 0,gender:U||void 0,color:$||void 0,breed_studbook:X||void 0,country_of_birth:z||void 0,markings:J||void 0,chip_location:Q||void 0}),l?.(),i()}catch(K){console.error("Failed to add horse:",K)}},ct=async K=>{const{scanBarcode:ze}=await $t(async()=>{const{scanBarcode:re}=await import("./index-Cjc9EUV3.js");return{scanBarcode:re}},__vite__mapDeps([6,1])),Dt=await ze();Dt&&(K==="chipNumber"?w(Dt):K==="ueln"&&S(Dt))},Ae=async K=>{if(xt.isNativePlatform()){K.preventDefault();const{pickDate:ze}=await $t(async()=>{const{pickDate:re}=await import("./index-Cjc9EUV3.js");return{pickDate:re}},__vite__mapDeps([6,1])),Dt=await ze({mode:"date",value:A?A.toISOString():void 0,max:new Date().toISOString()});Dt&&D(new Date(Dt))}},Et=K=>{const ze=K.locale.substring(0,2),Dt=Tc.slice().sort((re,Be)=>{const $e=re.name[ze]??re.name.en,he=Be.name[ze]??Be.name.en;return $e.localeCompare(he,ze)});if(ze==="nl"){const re=Dt.find(he=>he.code==="NL"),Be=Dt.find(he=>he.code==="BE"),$e=Dt.filter(he=>he.code!=="NL"&&he.code!=="BE");return m.jsxs(R.Fragment,{children:[[re,Be].map(he=>m.jsx(je,{value:he.code,children:he.name[ze]??he.name.en},he.code)),m.jsx(Uc,{}),$e.map(he=>m.jsx(je,{value:he.code,children:he.name[ze]??he.name.en},he.code))]})}return Dt.map(re=>m.jsx(je,{value:re.code,children:re.name[ze]??re.name.en},re.code))};return m.jsxs(mi,{label:r.formatMessage({id:"manageHorses.addHorse"}),placement:"end",open:t,onSlAfterHide:i,className:pn.addUserDrawer,children:[m.jsxs("div",{className:pn.formContent,children:[m.jsx(Ee,{"data-testid":"horse-official-name-input",label:r.formatMessage({id:"horses.officialNameLabel"}),value:p,required:!0,onSlInput:K=>{const ze=K.target.value;(!f||f===p)&&g(ze),b(ze)}}),m.jsx(Ee,{"data-testid":"horse-name-input",label:r.formatMessage({id:"horses.nameLabel"}),value:f,onSlInput:K=>g(K.target.value),required:!0,helpText:te.name}),m.jsx(ta,{"data-testid":"horse-owner-select",label:r.formatMessage({id:"horses.ownerLabel"}),value:T??"",onSlChange:K=>{M(K.target.value)},onSlAfterHide:K=>{K.stopPropagation()},helpText:te.ownerId,children:u&&u.length>0?u.map(K=>m.jsxs(je,{value:K.user_profile_id,children:[K.user_profiles?.firstname," ",K.user_profiles?.lastname]},K.user_profile_id)):m.jsx(je,{value:"",disabled:!0,children:m.jsx(ie,{id:"horses.noMembersFound",defaultMessage:"No members found in this stable"})})}),m.jsxs("div",{className:pn.inputWithIcon,children:[m.jsx(Ee,{"data-testid":"horse-chip-number-input",label:r.formatMessage({id:"horses.chipNumberLabel"}),value:_,onSlInput:K=>w(K.target.value),helpText:te.chipOrUeln}),m.jsx(kt,{"data-testid":"chip-scan-button",name:"qr-code",label:r.formatMessage({id:"horses.scanBarcode"}),onClick:()=>ct("chipNumber")})]}),m.jsx(Ee,{label:r.formatMessage({id:"horses.chipLocationLabel"}),value:Q,onSlInput:K=>le(K.target.value)}),m.jsxs("div",{className:pn.inputWithIcon,children:[m.jsx(Ee,{"data-testid":"horse-ueln-input",label:r.formatMessage({id:"horses.uelnLabel"}),value:y,onSlInput:K=>S(K.target.value),helpText:te.ueln||te.chipOrUeln}),m.jsx(kt,{"data-testid":"ueln-scan-button",name:"qr-code",label:r.formatMessage({id:"horses.scanBarcode"}),onClick:()=>ct("ueln")})]}),m.jsxs("div",{className:pn.dobRow,children:[m.jsx(Ee,{className:pn.dobInput,label:r.formatMessage({id:"horses.dateOfBirthLabel"}),type:xt.isNativePlatform()?"text":"date",max:new Date().toISOString().split("T")[0],value:A?xt.isNativePlatform()?r.formatDate(A):za(A,"yyyy-MM-dd"):"",readonly:xt.isNativePlatform(),onClick:Ae,onSlChange:K=>D(K.target.valueAsDate),children:xt.isNativePlatform()&&m.jsx(st,{name:"calendar",slot:"suffix"})}),A&&m.jsx("span",{className:pn.ageDisplay,children:Hc(A,r.locale.startsWith("nl")?"nl":"en")})]}),m.jsxs(ta,{label:r.formatMessage({id:"horses.genderLabel"}),value:U,onSlChange:K=>j(K.target.value),onSlAfterHide:K=>{K.stopPropagation()},children:[m.jsx(je,{value:"Stallion",children:r.formatMessage({id:"gender.stallion"})}),m.jsx(je,{value:"Mare",children:r.formatMessage({id:"gender.mare"})}),m.jsx(je,{value:"Gelding",children:r.formatMessage({id:"gender.gelding"})})]}),m.jsx(ta,{label:r.formatMessage({id:"horses.countryOfBirthLabel"}),className:pn.countrySelect,value:z,onSlChange:K=>q(K.target.value),onSlAfterHide:K=>{K.stopPropagation()},hoist:!0,children:Et(r)}),m.jsx(Ee,{label:r.formatMessage({id:"horses.colorLabel"}),value:$,onSlInput:K=>W(K.target.value)}),m.jsx(Ee,{label:r.formatMessage({id:"horses.breedStudbookLabel"}),value:X,onSlInput:K=>oe(K.target.value)}),m.jsx(Ee,{label:r.formatMessage({id:"horses.markingsLabel"}),value:J,onSlInput:K=>ae(K.target.value)})]}),m.jsx(Le,{slot:"footer",variant:"primary",onClick:ye,disabled:h.isPending,loading:h.isPending,children:m.jsx(ie,{id:"common.save",defaultMessage:"Save"})}),m.jsx(Le,{slot:"footer",variant:"neutral",onClick:ee,children:m.jsx(ie,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const p9="_pageWrapper_pqnt6_1",m9="_pageContent_pqnt6_10",g9="_drawer_pqnt6_19",v9="_profileAction_pqnt6_32",b9="_profileAvatar_pqnt6_38",y9="_headerActions_pqnt6_42",Gl={pageWrapper:p9,pageContent:m9,drawer:g9,profileAction:v9,profileAvatar:b9,headerActions:y9};function _9(){const t=Ne(),i=xx(),l=Yt(),{organization_id:r}=Cs(),{data:o}=of({organizationId:r,enabled:!!r}),{data:u}=fi({enabled:!0}),h=k.useRef(null),[f,g]=k.useState(!1),p=()=>{g(!0)};return m.jsx(mi,{label:t.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),placement:"end",open:!0,ref:h,className:Gl.drawer,children:m.jsxs("div",{className:Gl.pageWrapper,children:[m.jsx(f9,{isOpen:f,onClose:()=>{h.current?.modal.deactivateExternal(),g(!1)},onSaveSuccess:()=>{i.invalidateQueries({queryKey:["horses",r]})}}),m.jsx(pi,{showBackButton:!0,headerActions:o==="admin"||o==="owner"?m.jsxs("div",{className:Gl.headerActions,children:[m.jsx(kt,{"data-testid":"add-horse-button",label:t.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),onClick:()=>{h.current?.modal.activateExternal(),p()},name:"plus"}),m.jsx("div",{onClick:()=>l("/profile/me"),className:Gl.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:u?.social_profiles?.avatar_url,name:u?.firstname??"",className:Gl.profileAvatar})})]}):null}),m.jsx("div",{className:Gl.pageContent,children:m.jsx(l9,{organizationId:r})})]})})}const x9="_container_6at2x_1",w9="_section_6at2x_8",S9="_sectionTitle_6at2x_14",E9="_list_6at2x_23",C9="_memberItem_6at2x_32",A9="_memberInfo_6at2x_43",T9="_memberName_6at2x_51",M9="_avatar_6at2x_58",N9="_roleSelect_6at2x_63",$9="_immutableRole_6at2x_68",O9="_emptyState_6at2x_75",k9="_subSectionTitle_6at2x_82",R9="_pill_6at2x_92",D9="_pillOwner_6at2x_102",L9="_pillGroom_6at2x_106",z9="_pillAvatar_6at2x_110",j9="_pillName_6at2x_115",B9="_grid_6at2x_125",H9="_clickable_6at2x_131",ge={container:x9,section:w9,sectionTitle:S9,list:E9,memberItem:C9,memberInfo:A9,memberName:T9,avatar:M9,roleSelect:N9,immutableRole:$9,emptyState:O9,subSectionTitle:k9,pill:R9,pillOwner:D9,pillGroom:L9,pillAvatar:z9,pillName:j9,grid:B9,clickable:H9};function U9({horseId:t}){const{formatMessage:i}=Ne(),l=Yt(),[r,o]=k.useState(null),{data:u}=wb({horseId:t,enabled:!!t}),{data:h}=wx({horseId:t,enabled:!!t}),{data:f}=Sx({horseId:t,enabled:!!t}),{data:g}=Ex({organizationId:u?.boarded_at_org_id??void 0,enabled:!!u?.boarded_at_org_id}),p=g?.user_profiles,{data:b}=Sb({organizationId:u?.boarded_at_org_id??void 0,enabled:!!u?.boarded_at_org_id}),_=Cx(),w=k.useMemo(()=>(h??[]).find(j=>j.role==="owner"),[h]),y=k.useMemo(()=>(h??[]).filter(j=>j.role==="stable_groom"),[h]),S=k.useMemo(()=>(h??[]).filter(j=>j.role!=="owner"&&j.role!=="stable_groom"),[h]),T=k.useMemo(()=>new Set((h??[]).filter(j=>j.role!=="stable_groom").map(j=>j.user_profile_id)),[h]),M=k.useMemo(()=>(f??[]).filter(j=>j.user_profiles?.id&&!T.has(j.user_profiles.id)),[f,T]),A=k.useMemo(()=>[{value:"co_owner",label:i({id:"roles.co_owner",defaultMessage:"Co-owner"})},{value:"rider",label:i({id:"roles.rider",defaultMessage:"Rider/Leaser"})},{value:"groom",label:i({id:"roles.groom",defaultMessage:"Groom"})},{value:"instructor",label:i({id:"roles.instructor",defaultMessage:"Instructor"})},{value:"medical",label:i({id:"roles.medical",defaultMessage:"Vet/Medical"})},{value:"farrier",label:i({id:"roles.farrier",defaultMessage:"Farrier"})}],[i]),D=(j,$)=>{$==="follower"?o({userId:j,role:$}):_.mutate({horseId:t,userId:j,role:$})},U=()=>{r&&t&&_.mutate({horseId:t,userId:r.userId,role:"follower"}),o(null)};return m.jsxs("div",{className:ge.container,children:[m.jsxs("section",{className:ge.section,children:[m.jsx("h3",{className:ge.sectionTitle,children:m.jsx(ie,{id:"manageTeam.team",defaultMessage:"My hoomans"})}),m.jsxs("ul",{className:ge.list,children:[w&&m.jsxs("li",{className:ge.memberItem,children:[m.jsxs("div",{className:`${ge.memberInfo} ${ge.clickable}`,onClick:()=>{w.user_profiles?.social_profile_id&&l(`/profile/${w.user_profiles.social_profile_id}`)},children:[m.jsx(vt,{image:w.user_profiles?.social_profiles?.avatar_url,name:w.user_profiles?.firstname??"",className:ge.avatar}),m.jsxs("span",{className:ge.memberName,children:[w.user_profiles?.firstname," ",w.user_profiles?.lastname]})]}),m.jsx("span",{className:ge.immutableRole,children:m.jsx(ie,{id:"roles.owner",defaultMessage:"Owner"})})]},`owner-${w.user_profile_id}`),S.map(j=>m.jsxs("li",{className:ge.memberItem,children:[m.jsxs("div",{className:`${ge.memberInfo} ${ge.clickable}`,onClick:()=>{j.user_profiles?.social_profile_id&&l(`/profile/${j.user_profiles.social_profile_id}`)},children:[m.jsx(vt,{image:j.user_profiles?.social_profiles?.avatar_url,name:j.user_profiles?.firstname??"",className:ge.avatar}),m.jsxs("span",{className:ge.memberName,children:[j.user_profiles?.firstname," ",j.user_profiles?.lastname]})]}),m.jsxs(ta,{className:ge.roleSelect,value:j.role,hoist:!0,onSlChange:$=>D(j.user_profile_id,$.target.value),children:[A.map($=>m.jsx(je,{value:$.value,children:$.label},$.value)),m.jsx(je,{value:"follower",children:m.jsx(ie,{id:"roles.follower",defaultMessage:"Follower (Remove from team)"})})]})]},j.user_profile_id)),S.length===0&&!w&&m.jsx("p",{className:ge.emptyState,children:m.jsx(ie,{id:"manageTeam.noTeam",defaultMessage:"No team members yet."})})]})]}),(p||y.length>0)&&m.jsxs("section",{className:ge.section,children:[m.jsx("h3",{className:ge.sectionTitle,children:m.jsx(ie,{id:"manageTeam.organizationTeam",defaultMessage:"Hoomans {organizationName}",values:{organizationName:b?.name??"Stable"}})}),p&&m.jsxs("div",{children:[m.jsx("h4",{className:ge.subSectionTitle,children:m.jsx(ie,{id:"manageTeam.stableOwner",defaultMessage:"Stable Owner"})}),m.jsxs("div",{className:`${ge.pill} ${ge.pillOwner} ${ge.clickable}`,onClick:()=>{p?.social_profile_id&&l(`/profile/${p.social_profile_id}`)},children:[m.jsx(vt,{image:p.social_profiles?.avatar_url,name:p.firstname??"",className:ge.pillAvatar}),m.jsxs("span",{className:ge.pillName,children:[p.firstname," ",p.lastname]})]})]}),y.length>0&&m.jsxs("div",{children:[m.jsxs("h4",{className:ge.subSectionTitle,children:[m.jsx(ie,{id:"roles.stable_groom",defaultMessage:"Stable Groom"}),"s"]}),m.jsx("div",{className:ge.grid,children:y.map(j=>m.jsxs("div",{className:`${ge.pill} ${ge.pillGroom} ${ge.clickable}`,onClick:()=>{j.user_profiles?.social_profile_id&&l(`/profile/${j.user_profiles.social_profile_id}`)},children:[m.jsx(vt,{image:j.user_profiles?.social_profiles?.avatar_url,name:j.user_profiles?.firstname??"",className:ge.pillAvatar}),m.jsxs("span",{className:ge.pillName,children:[j.user_profiles?.firstname," ",j.user_profiles?.lastname?.charAt(0),"."]})]},j.user_profile_id))})]})]}),m.jsxs("section",{className:ge.section,children:[m.jsx("h3",{className:ge.sectionTitle,children:m.jsx(ie,{id:"manageTeam.followers",defaultMessage:"Followers"})}),m.jsxs("ul",{className:ge.list,children:[M.map(j=>m.jsxs("li",{className:ge.memberItem,children:[m.jsxs("div",{className:`${ge.memberInfo} ${ge.clickable}`,onClick:()=>{j.user_profiles?.social_profile_id&&l(`/profile/${j.user_profiles.social_profile_id}`)},children:[m.jsx(vt,{image:j.user_profiles?.social_profiles?.avatar_url,name:j.user_profiles?.firstname??"",className:ge.avatar}),m.jsxs("span",{className:ge.memberName,children:[j.user_profiles?.firstname," ",j.user_profiles?.lastname]})]}),m.jsxs(ta,{className:ge.roleSelect,value:"follower",hoist:!0,onSlChange:$=>D(j.user_profiles?.id??"",$.target.value),children:[m.jsx(je,{value:"follower",children:m.jsx(ie,{id:"roles.follower_only",defaultMessage:"Follower"})}),A.map($=>m.jsx(je,{value:$.value,children:$.label},$.value))]})]},j.follower_profile_id)),M.length===0&&m.jsx("p",{className:ge.emptyState,children:m.jsx(ie,{id:"manageTeam.noFollowers",defaultMessage:"No followers found."})})]})]}),m.jsxs(ks,{label:i({id:"manageTeam.demoteTitle",defaultMessage:"Remove from Team?"}),open:!!r,onSlAfterHide:()=>o(null),children:[m.jsx("p",{children:m.jsx(ie,{id:"manageTeam.demoteWarning",defaultMessage:"Are you sure you want to remove this user from the team? They will lose access to restricted posts."})}),m.jsxs("div",{slot:"footer",children:[m.jsx(Le,{variant:"neutral",onClick:()=>o(null),children:m.jsx(ie,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(Le,{variant:"danger",onClick:U,children:m.jsx(ie,{id:"common.remove",defaultMessage:"Remove"})})]})]})]})}const I9="_pageWrapper_1kjk1_1",P9="_pageContent_1kjk1_10",V9="_drawer_1kjk1_19",Ah={pageWrapper:I9,pageContent:P9,drawer:V9};function F9(){const t=Ne(),{horseId:i}=Cs(),l=k.useRef(null);return m.jsx(mi,{label:t.formatMessage({id:"manageTeam.title",defaultMessage:"Manage Team"}),placement:"end",open:!0,ref:l,className:Ah.drawer,children:m.jsxs("div",{className:Ah.pageWrapper,children:[m.jsx(pi,{showBackButton:!0}),m.jsx("div",{className:Ah.pageContent,children:m.jsx(U9,{horseId:i})})]})})}const q9=new US;function G9({children:t}){return yb()?t:m.jsx(gc,{to:"/login",replace:!0})}function Y9(){return m.jsx(h8,{children:m.jsxs($h,{children:[m.jsx(Nt,{path:"/stable",element:m.jsx(U8,{})}),m.jsx(Nt,{path:"/stable/:organization_id/roster/:roster_id",element:m.jsx(CE,{})}),m.jsx(Nt,{path:"/stable/:organization_id/members",element:m.jsx(UA,{})}),m.jsx(Nt,{path:"/stable/:organization_id/horses",element:m.jsx(_9,{})}),m.jsx(Nt,{path:"/horse",element:m.jsx(dA,{})}),m.jsx(Nt,{path:"/horse/:horseId/team",element:m.jsx(F9,{})}),m.jsx(Nt,{path:"/profile/me",element:m.jsx(W0,{})}),m.jsx(Nt,{path:"/profile/:social_id",element:m.jsx(W0,{})}),m.jsx(Nt,{path:"/invite",element:m.jsx(cy,{})}),m.jsx(Nt,{path:"/invite-success",element:m.jsx(uy,{})}),m.jsx(Nt,{path:"/",element:m.jsx(gc,{to:"/stable",replace:!0})})]})})}function X9({handleContinue:t}){const[i]=k.useState("en"),[l,r]=k.useState(Ec);return k.useEffect(()=>{$t(()=>import("./nl-Ba8DVcHL.js"),[]).then(o=>{r(o.default)}).catch(()=>{})},[]),m.jsx(k1,{locale:i,messages:l,wrapRichTextChunksInFragment:!0,children:m.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[m.jsx("h1",{children:m.jsx(ie,{id:"invite.noProfile.title"})}),m.jsxs("p",{children:[m.jsx(ie,{id:"invite.noProfile.message"})," "]}),m.jsx(Le,{variant:"primary",onClick:t,children:m.jsx(ie,{id:"common.continue"})})]})})}function W9(){const[t,i]=k.useState(null),[l,r]=k.useState(!0),[o,u]=k.useState("en"),[h,f]=k.useState(Ec),g=Cc();k.useEffect(()=>{la.auth.getSession().then(({data:{session:S}})=>{i(S),r(!1)});const{data:{subscription:y}}=la.auth.onAuthStateChange((S,T)=>{i(T),r(!1)});return()=>y.unsubscribe()},[]);const{data:p,isLoading:b,isSuccess:_}=fi({enabled:!!t});if(k.useEffect(()=>{const S=p?.locale||"nl";S!==o&&Fw(Object.assign({"../translations/en.json":()=>$t(()=>Promise.resolve().then(()=>f8),void 0),"../translations/nl.json":()=>$t(()=>import("./nl-Ba8DVcHL.js"),[])}),`../translations/${S}.json`,3).then(T=>{u(S),f(T.default)}).catch(()=>{u("en"),f(Ec)})},[p,o]),l||t&&b)return null;const w=g.pathname.startsWith("/invite");return t&&_&&!p&&!w?m.jsx(X9,{handleContinue:()=>void la.auth.signOut()}):!l&&!t&&g.pathname==="/"&&!xt.isNativePlatform()?(window.location.replace("/home.html"),null):m.jsx(Tx.Provider,{value:t,children:m.jsx(k1,{locale:o,messages:h,wrapRichTextChunksInFragment:!0,children:t?m.jsxs($h,{children:[m.jsx(Nt,{path:"/login",element:m.jsx(gc,{to:"/stable",replace:!0})}),m.jsx(Nt,{path:"/*",element:m.jsx(G9,{children:m.jsx(Y9,{})})})]}):m.jsxs($h,{children:[m.jsx(Nt,{path:"/login",element:m.jsx(nb,{})}),m.jsx(Nt,{path:"/invite",element:m.jsx(cy,{})}),m.jsx(Nt,{path:"/invite-success",element:m.jsx(uy,{})}),xt.isNativePlatform()&&m.jsx(Nt,{path:"/",element:m.jsx(gc,{to:"/login",replace:!0})}),m.jsx(Nt,{path:"*",element:m.jsx(nb,{})})]})})})}function Q9(){return m.jsx(Ax,{client:q9,children:m.jsx(W9,{})})}Dh("/");Vw();const Z9=Gx.createRoot(document.getElementById("root"));Z9.render(m.jsx(k.StrictMode,{children:m.jsx(zx,{children:m.jsx(Q9,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{console.log("SW registered: ",t)}).catch(t=>{console.log("SW registration failed: ",t)})});export{hw as H,V4 as a,J9 as c,eT as f,mw as g,dw as h,F4 as p,tT as r,P4 as s};

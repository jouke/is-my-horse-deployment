const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pwa-action-sheet.entry-BNGpwme9.js","assets/index-DX412MtT.js","assets/pwa-camera-modal.entry-BCVupdo7.js","assets/pwa-toast.entry-BvVGuABe.js","assets/pwa-camera-modal-instance.entry-CdYva98w.js","assets/pwa-camera.entry-C4M80ND6.js","assets/index-D7RX2YAu.js","assets/web-C10UDV0D.js"])))=>i.map(i=>d[i]);
import{r as lb,f as k,g as A_,R as qt,l as M_,h as N_,u as xc,i as Vt,N as $_,s as O_,j as k_,k as R_,m as bv,_ as Pt,n as z_,o as D_,p as L_,S as rb,M as j_,q as ma,t as yv,v as ki,w as sb,Q as B_,x as _v,y as H_,z as xv,A as wv,B as U_,D as Sv,F as Ev,G as I_,I as ue,J as La,K as Yl,L as ni,O as m,P as Xl,T as dc,U as P_,V as Cf,X as ob,Y as cb,Z as Tf,$ as Cv,a0 as zi,a1 as q_,a2 as V_,a3 as F_,a4 as G_,a5 as Y_,a6 as R,a7 as ub,a8 as db,a9 as za,aa as fb,ab as di,ac as X_,ad as Q_,ae as Af,af as Ss,ag as W_,ah as wc,ai as Sc,aj as Z_,ak as hb,al as pb,am as K_,an as J_,ao as ex,ap as tx,aq as mb,ar as gb,as as ax,at as ix,au as nx,av as la,aw as lx,ax as rx,ay as sx,az as ox,aA as ih,aB as vb,aC as nh,aD as cx,aE as ux,aF as dx,aG as fx,aH as hx,aI as px,aJ as mx,aK as gx,aL as vx,aM as bx,aN as yx,aO as _x,aP as Mf,aQ as At,aR as fc}from"./index-DX412MtT.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function l(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=l(o);fetch(o.href,u)}})();var Yd={exports:{}},It={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function xx(){if(Tv)return It;Tv=1;var t=lb();function i(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,p,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:g,containerInfo:p,implementation:b}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,It.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return u(g,p,null,b)},It.flushSync=function(g){var p=f.T,b=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=p,r.p=b,r.d.f()}},It.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},It.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},It.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,y=h(b,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:w,fetchPriority:_}):b==="script"&&r.d.X(g,{crossOrigin:y,integrity:w,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},It.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=h(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},It.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,y=h(b,p.crossOrigin);r.d.L(g,b,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},It.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=h(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},It.requestFormReset=function(g){r.d.r(g)},It.unstable_batchedUpdates=function(g,p){return g(p)},It.useFormState=function(g,p,b){return f.H.useFormState(g,p,b)},It.useFormStatus=function(){return f.H.useHostTransitionStatus()},It.version="19.0.0",It}var Av;function bb(){if(Av)return Yd.exports;Av=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Yd.exports=xx(),Yd.exports}bb();/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nf(){return Nf=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r])}return t},Nf.apply(this,arguments)}function wx(t,i){if(t==null)return{};var l={},r=Object.keys(t),o,u;for(u=0;u<r.length;u++)o=r[u],!(i.indexOf(o)>=0)&&(l[o]=t[o]);return l}function Sx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ex(t,i){return t.button===0&&(!i||i==="_self")&&!Sx(t)}function $f(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((i,l)=>{let r=t[l];return i.concat(Array.isArray(r)?r.map(o=>[l,o]):[[l,r]])},[]))}function Cx(t,i){let l=$f(t);return i&&i.forEach((r,o)=>{l.has(o)||i.getAll(o).forEach(u=>{l.append(o,u)})}),l}const Tx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ax="6";try{window.__reactRouterVersion=Ax}catch{}const Mx="startTransition",Mv=qt[Mx];function Nx(t){let{basename:i,children:l,future:r,window:o}=t,u=k.useRef();u.current==null&&(u.current=A_({window:o,v5Compat:!0}));let f=u.current,[h,g]=k.useState({action:f.action,location:f.location}),{v7_startTransition:p}=r||{},b=k.useCallback(y=>{p&&Mv?Mv(()=>g(y)):g(y)},[g,p]);return k.useLayoutEffect(()=>f.listen(b),[f,b]),k.useEffect(()=>M_(r),[r]),k.createElement(N_,{basename:i,children:l,location:h.location,navigationType:h.action,navigator:f,future:r})}const $x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ox=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kx=k.forwardRef(function(i,l){let{onClick:r,relative:o,reloadDocument:u,replace:f,state:h,target:g,to:p,preventScrollReset:b,viewTransition:y}=i,w=wx(i,Tx),{basename:_}=k.useContext($_),S,A=!1;if(typeof p=="string"&&Ox.test(p)&&(S=p,$x))try{let H=new URL(window.location.href),L=p.startsWith("//")?new URL(H.protocol+p):new URL(p),O=O_(L.pathname,_);L.origin===H.origin&&O!=null?p=O+L.search+L.hash:A=!0}catch{}let M=k_(p,{relative:o}),T=Rx(p,{replace:f,state:h,target:g,preventScrollReset:b,relative:o,viewTransition:y});function D(H){r&&r(H),H.defaultPrevented||T(H)}return k.createElement("a",Nf({},w,{href:S||M,onClick:A||u?r:D,ref:l,target:g}))});var Nv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Nv||(Nv={}));var $v;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($v||($v={}));function Rx(t,i){let{target:l,replace:r,state:o,preventScrollReset:u,relative:f,viewTransition:h}=i===void 0?{}:i,g=Vt(),p=xc(),b=R_(t,{relative:f});return k.useCallback(y=>{if(Ex(y,l)){y.preventDefault();let w=r!==void 0?r:bv(p)===bv(b);g(t,{replace:w,state:o,preventScrollReset:u,relative:f,viewTransition:h})}},[p,g,b,r,o,l,t,u,f,h])}function zx(t){let i=k.useRef($f(t)),l=k.useRef(!1),r=xc(),o=k.useMemo(()=>Cx(r.search,l.current?null:i.current),[r.search]),u=Vt(),f=k.useCallback((h,g)=>{const p=$f(typeof h=="function"?h(o):h);l.current=!0,u("?"+p,g)},[u,o]);return[o,f]}var Xd={exports:{}},ts={},Qd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function Dx(){return Ov||(Ov=1,(function(t){function i(U,K){var J=U.length;U.push(K);e:for(;0<J;){var oe=J-1>>>1,xe=U[oe];if(0<o(xe,K))U[oe]=K,U[J]=xe,J=oe;else break e}}function l(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var K=U[0],J=U.pop();if(J!==K){U[0]=J;e:for(var oe=0,xe=U.length,st=xe>>>1;oe<st;){var Ae=2*(oe+1)-1,ne=U[Ae],pe=Ae+1,Xe=U[pe];if(0>o(ne,J))pe<xe&&0>o(Xe,ne)?(U[oe]=Xe,U[pe]=J,oe=pe):(U[oe]=ne,U[Ae]=J,oe=Ae);else if(pe<xe&&0>o(Xe,J))U[oe]=Xe,U[pe]=J,oe=pe;else break e}}return K}function o(U,K){var J=U.sortIndex-K.sortIndex;return J!==0?J:U.id-K.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();t.unstable_now=function(){return f.now()-h}}var g=[],p=[],b=1,y=null,w=3,_=!1,S=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function H(U){for(var K=l(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=U)r(p),K.sortIndex=K.expirationTime,i(g,K);else break;K=l(p)}}function L(U){if(A=!1,H(U),!S)if(l(g)!==null)S=!0,re();else{var K=l(p);K!==null&&te(L,K.startTime-U)}}var O=!1,W=-1,Q=5,X=-1;function P(){return!(t.unstable_now()-X<Q)}function F(){if(O){var U=t.unstable_now();X=U;var K=!0;try{e:{S=!1,A&&(A=!1,T(W),W=-1),_=!0;var J=w;try{t:{for(H(U),y=l(g);y!==null&&!(y.expirationTime>U&&P());){var oe=y.callback;if(typeof oe=="function"){y.callback=null,w=y.priorityLevel;var xe=oe(y.expirationTime<=U);if(U=t.unstable_now(),typeof xe=="function"){y.callback=xe,H(U),K=!0;break t}y===l(g)&&r(g),H(U)}else r(g);y=l(g)}if(y!==null)K=!0;else{var st=l(p);st!==null&&te(L,st.startTime-U),K=!1}}break e}finally{y=null,w=J,_=!1}K=void 0}}finally{K?ee():O=!1}}}var ee;if(typeof D=="function")ee=function(){D(F)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Z=ie.port2;ie.port1.onmessage=F,ee=function(){Z.postMessage(null)}}else ee=function(){M(F,0)};function re(){O||(O=!0,ee())}function te(U,K){W=M(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,re())},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return l(g)},t.unstable_next=function(U){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var J=w;w=K;try{return U()}finally{w=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=w;w=U;try{return K()}finally{w=J}},t.unstable_scheduleCallback=function(U,K,J){var oe=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?oe+J:oe):J=oe,U){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,U={id:b++,callback:K,priorityLevel:U,startTime:J,expirationTime:xe,sortIndex:-1},J>oe?(U.sortIndex=J,i(p,U),l(g)===null&&U===l(p)&&(A?(T(W),W=-1):A=!0,te(L,J-oe))):(U.sortIndex=xe,i(g,U),S||_||(S=!0,re())),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var K=w;return function(){var J=w;w=K;try{return U.apply(this,arguments)}finally{w=J}}}})(Wd)),Wd}var kv;function Lx(){return kv||(kv=1,Qd.exports=Dx()),Qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function jx(){if(Rv)return ts;Rv=1;var t=Lx(),i=lb(),l=bb();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),_=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),L=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function X(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case h:return"Portal";case b:return"Profiler";case p:return"StrictMode";case A:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:return(e.displayName||"Context")+".Provider";case w:return(e._context.displayName||"Context")+".Consumer";case S:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case T:return a=e.displayName||null,a!==null?a:X(e.type)||"Memo";case D:a=e._payload,e=e._init;try{return X(e(a))}catch{}}return null}var P=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Object.assign,ee,ie;function Z(e){if(ee===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);ee=a&&a[1]||"",ie=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+ie}var re=!1;function te(e,a){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(q){var I=q}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(q){I=q}e.call(Y.prototype)}}else{try{throw Error()}catch(q){I=q}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(q){if(q&&I&&typeof q.stack=="string")return[q.stack,I.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),v=d[0],x=d[1];if(v&&x){var E=v.split(`
`),$=x.split(`
`);for(c=s=0;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===E.length||c===$.length)for(s=E.length-1,c=$.length-1;1<=s&&0<=c&&E[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(E[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||E[s]!==$[c]){var V=`
`+E[s].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=s&&0<=c);break}}}finally{re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Z(n):""}function U(e){switch(e.tag){case 26:case 27:case 5:return Z(e.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function K(e){try{var a="";do a+=U(e),e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function J(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function oe(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function xe(e){if(J(e)!==e)throw Error(r(188))}function st(e){var a=e.alternate;if(!a){if(a=J(e),a===null)throw Error(r(188));return a!==e?null:e}for(var n=e,s=a;;){var c=n.return;if(c===null)break;var d=c.alternate;if(d===null){if(s=c.return,s!==null){n=s;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===n)return xe(c),e;if(d===s)return xe(c),a;d=d.sibling}throw Error(r(188))}if(n.return!==s.return)n=c,s=d;else{for(var v=!1,x=c.child;x;){if(x===n){v=!0,n=c,s=d;break}if(x===s){v=!0,s=c,n=d;break}x=x.sibling}if(!v){for(x=d.child;x;){if(x===n){v=!0,n=d,s=c;break}if(x===s){v=!0,s=d,n=c;break}x=x.sibling}if(!v)throw Error(r(189))}}if(n.alternate!==s)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:a}function Ae(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=Ae(e),a!==null)return a;e=e.sibling}return null}var ne=Array.isArray,pe=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xe={pending:!1,data:null,method:null,action:null},de=[],ot=-1;function Je(e){return{current:e}}function me(e){0>ot||(e.current=de[ot],de[ot]=null,ot--)}function He(e,a){ot++,de[ot]=e.current,e.current=a}var ea=Je(null),Ze=Je(null),Bi=Je(null),ks=Je(null);function Rs(e,a){switch(He(Bi,a),He(Ze,e),He(ea,null),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?Yg(a):0;break;default:if(e=e===8?a.parentNode:a,a=e.tagName,e=e.namespaceURI)e=Yg(e),a=Xg(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}me(ea),He(ea,a)}function il(){me(ea),me(Ze),me(Bi)}function Bc(e){e.memoizedState!==null&&He(ks,e);var a=ea.current,n=Xg(a,e.type);a!==n&&(He(Ze,e),He(ea,n))}function zs(e){Ze.current===e&&(me(ea),me(Ze)),ks.current===e&&(me(ks),Wr._currentValue=Xe)}var Hc=Object.prototype.hasOwnProperty,Uc=t.unstable_scheduleCallback,Ic=t.unstable_cancelCallback,ly=t.unstable_shouldYield,ry=t.unstable_requestPaint,Wa=t.unstable_now,sy=t.unstable_getCurrentPriorityLevel,Lh=t.unstable_ImmediatePriority,jh=t.unstable_UserBlockingPriority,Ds=t.unstable_NormalPriority,oy=t.unstable_LowPriority,Bh=t.unstable_IdlePriority,cy=t.log,uy=t.unstable_setDisableYieldValue,lr=null,sa=null;function dy(e){if(sa&&typeof sa.onCommitFiberRoot=="function")try{sa.onCommitFiberRoot(lr,e,void 0,(e.current.flags&128)===128)}catch{}}function Hi(e){if(typeof cy=="function"&&uy(e),sa&&typeof sa.setStrictMode=="function")try{sa.setStrictMode(lr,e)}catch{}}var oa=Math.clz32?Math.clz32:py,fy=Math.log,hy=Math.LN2;function py(e){return e>>>=0,e===0?32:31-(fy(e)/hy|0)|0}var Ls=128,js=4194304;function xn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bs(e,a){var n=e.pendingLanes;if(n===0)return 0;var s=0,c=e.suspendedLanes,d=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var x=n&134217727;return x!==0?(n=x&~c,n!==0?s=xn(n):(d&=x,d!==0?s=xn(d):e||(v=x&~v,v!==0&&(s=xn(v))))):(x=n&~c,x!==0?s=xn(x):d!==0?s=xn(d):e||(v=n&~v,v!==0&&(s=xn(v)))),s===0?0:a!==0&&a!==s&&(a&c)===0&&(c=s&-s,v=a&-a,c>=v||c===32&&(v&4194176)!==0)?a:s}function rr(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function my(e,a){switch(e){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hh(){var e=Ls;return Ls<<=1,(Ls&4194176)===0&&(Ls=128),e}function Uh(){var e=js;return js<<=1,(js&62914560)===0&&(js=4194304),e}function Pc(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function sr(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gy(e,a,n,s,c,d){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,E=e.expirationTimes,$=e.hiddenUpdates;for(n=v&~n;0<n;){var V=31-oa(n),Y=1<<V;x[V]=0,E[V]=-1;var I=$[V];if(I!==null)for($[V]=null,V=0;V<I.length;V++){var q=I[V];q!==null&&(q.lane&=-536870913)}n&=~Y}s!==0&&Ih(e,s,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~a))}function Ih(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var s=31-oa(a);e.entangledLanes|=a,e.entanglements[s]=e.entanglements[s]|1073741824|n&4194218}function Ph(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var s=31-oa(n),c=1<<s;c&a|e[s]&a&&(e[s]|=a),n&=~c}}function qh(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vh(){var e=pe.p;return e!==0?e:(e=window.event,e===void 0?32:fv(e.type))}function vy(e,a){var n=pe.p;try{return pe.p=e,a()}finally{pe.p=n}}var Ui=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Ui,ta="__reactProps$"+Ui,nl="__reactContainer$"+Ui,qc="__reactEvents$"+Ui,by="__reactListeners$"+Ui,yy="__reactHandles$"+Ui,Fh="__reactResources$"+Ui,or="__reactMarker$"+Ui;function Vc(e){delete e[Ht],delete e[ta],delete e[qc],delete e[by],delete e[yy]}function wn(e){var a=e[Ht];if(a)return a;for(var n=e.parentNode;n;){if(a=n[nl]||n[Ht]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=Zg(e);e!==null;){if(n=e[Ht])return n;e=Zg(e)}return a}e=n,n=e.parentNode}return null}function ll(e){if(e=e[Ht]||e[nl]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function cr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function rl(e){var a=e[Fh];return a||(a=e[Fh]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function St(e){e[or]=!0}var Gh=new Set,Yh={};function Sn(e,a){sl(e,a),sl(e+"Capture",a)}function sl(e,a){for(Yh[e]=a,e=0;e<a.length;e++)Gh.add(a[e])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xh={},Qh={};function xy(e){return Hc.call(Qh,e)?!0:Hc.call(Xh,e)?!1:_y.test(e)?Qh[e]=!0:(Xh[e]=!0,!1)}function Hs(e,a,n){if(xy(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function Us(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function gi(e,a,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+s)}}function ya(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wh(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function wy(e){var a=Wh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),s=""+e[a];if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var c=n.get,d=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return c.call(this)},set:function(v){s=""+v,d.call(this,v)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Is(e){e._valueTracker||(e._valueTracker=wy(e))}function Zh(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),s="";return e&&(s=Wh(e)?e.checked?"true":"false":e.value),e=s,e!==n?(a.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sy=/[\n"\\]/g;function _a(e){return e.replace(Sy,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Fc(e,a,n,s,c,d,v,x){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),a!=null?v==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ya(a)):e.value!==""+ya(a)&&(e.value=""+ya(a)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),a!=null?Gc(e,v,ya(a)):n!=null?Gc(e,v,ya(n)):s!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+ya(x):e.removeAttribute("name")}function Kh(e,a,n,s,c,d,v,x){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),a!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||a!=null))return;n=n!=null?""+ya(n):"",a=a!=null?""+ya(a):n,x||a===e.value||(e.value=a),e.defaultValue=a}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=x?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Gc(e,a,n){a==="number"&&Ps(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ol(e,a,n,s){if(e=e.options,a){a={};for(var c=0;c<n.length;c++)a["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=a.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&s&&(e[n].defaultSelected=!0)}else{for(n=""+ya(n),a=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}a!==null||e[c].disabled||(a=e[c])}a!==null&&(a.selected=!0)}}function Jh(e,a,n){if(a!=null&&(a=""+ya(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+ya(n):""}function ep(e,a,n,s){if(a==null){if(s!=null){if(n!=null)throw Error(r(92));if(ne(s)){if(1<s.length)throw Error(r(93));s=s[0]}n=s}n==null&&(n=""),a=n}n=ya(a),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s)}function cl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Ey=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tp(e,a,n){var s=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":s?e.setProperty(a,n):typeof n!="number"||n===0||Ey.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function ap(e,a,n){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in a)s=a[c],a.hasOwnProperty(c)&&n[c]!==s&&tp(e,c,s)}else for(var d in a)a.hasOwnProperty(d)&&tp(e,d,a[d])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qs(e){return Ty.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Xc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,dl=null;function ip(e){var a=ll(e);if(a&&(e=a.stateNode)){var n=e[ta]||null;e:switch(e=a.stateNode,a.type){case"input":if(Fc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_a(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var s=n[a];if(s!==e&&s.form===e.form){var c=s[ta]||null;if(!c)throw Error(r(90));Fc(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(a=0;a<n.length;a++)s=n[a],s.form===e.form&&Zh(s)}break e;case"textarea":Jh(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&ol(e,!!n.multiple,a,!1)}}}var Wc=!1;function np(e,a,n){if(Wc)return e(a,n);Wc=!0;try{var s=e(a);return s}finally{if(Wc=!1,(ul!==null||dl!==null)&&(Ao(),ul&&(a=ul,e=dl,dl=ul=null,ip(a),e)))for(a=0;a<e.length;a++)ip(e[a])}}function ur(e,a){var n=e.stateNode;if(n===null)return null;var s=n[ta]||null;if(s===null)return null;n=s[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,a,typeof n));return n}var Zc=!1;if(mi)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Zc=!1}var Ii=null,Kc=null,Vs=null;function lp(){if(Vs)return Vs;var e,a=Kc,n=a.length,s,c="value"in Ii?Ii.value:Ii.textContent,d=c.length;for(e=0;e<n&&a[e]===c[e];e++);var v=n-e;for(s=1;s<=v&&a[n-s]===c[d-s];s++);return Vs=c.slice(e,1<s?1-s:void 0)}function Fs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Gs(){return!0}function rp(){return!1}function aa(e){function a(n,s,c,d,v){this._reactName=n,this._targetInst=c,this.type=s,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(d):d[x]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Gs:rp,this.isPropagationStopped=rp,this}return F(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),a}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=aa(En),fr=F({},En,{view:0,detail:0}),Ay=aa(fr),Jc,eu,hr,Xs=F({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Jc=e.screenX-hr.screenX,eu=e.screenY-hr.screenY):eu=Jc=0,hr=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),sp=aa(Xs),My=F({},Xs,{dataTransfer:0}),Ny=aa(My),$y=F({},fr,{relatedTarget:0}),tu=aa($y),Oy=F({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),ky=aa(Oy),Ry=F({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zy=aa(Ry),Dy=F({},En,{data:0}),op=aa(Dy),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hy(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=By[e])?!!a[e]:!1}function au(){return Hy}var Uy=F({},fr,{key:function(e){if(e.key){var a=Ly[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iy=aa(Uy),Py=F({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=aa(Py),qy=F({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Vy=aa(qy),Fy=F({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=aa(Fy),Yy=F({},Xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=aa(Yy),Qy=F({},En,{newState:0,oldState:0}),Wy=aa(Qy),Zy=[9,13,27,32],iu=mi&&"CompositionEvent"in window,pr=null;mi&&"documentMode"in document&&(pr=document.documentMode);var Ky=mi&&"TextEvent"in window&&!pr,up=mi&&(!iu||pr&&8<pr&&11>=pr),dp=" ",fp=!1;function hp(e,a){switch(e){case"keyup":return Zy.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function Jy(e,a){switch(e){case"compositionend":return pp(a);case"keypress":return a.which!==32?null:(fp=!0,dp);case"textInput":return e=a.data,e===dp&&fp?null:e;default:return null}}function e2(e,a){if(fl)return e==="compositionend"||!iu&&hp(e,a)?(e=lp(),Vs=Kc=Ii=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return up&&a.locale!=="ko"?null:a.data;default:return null}}var t2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!t2[e.type]:a==="textarea"}function gp(e,a,n,s){ul?dl?dl.push(s):dl=[s]:ul=s,a=ko(a,"onChange"),0<a.length&&(n=new Ys("onChange","change",null,n,s),e.push({event:n,listeners:a}))}var mr=null,gr=null;function a2(e){Pg(e,0)}function Qs(e){var a=cr(e);if(Zh(a))return e}function vp(e,a){if(e==="change")return a}var bp=!1;if(mi){var nu;if(mi){var lu="oninput"in document;if(!lu){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),lu=typeof yp.oninput=="function"}nu=lu}else nu=!1;bp=nu&&(!document.documentMode||9<document.documentMode)}function _p(){mr&&(mr.detachEvent("onpropertychange",xp),gr=mr=null)}function xp(e){if(e.propertyName==="value"&&Qs(gr)){var a=[];gp(a,gr,e,Qc(e)),np(a2,a)}}function i2(e,a,n){e==="focusin"?(_p(),mr=a,gr=n,mr.attachEvent("onpropertychange",xp)):e==="focusout"&&_p()}function n2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qs(gr)}function l2(e,a){if(e==="click")return Qs(a)}function r2(e,a){if(e==="input"||e==="change")return Qs(a)}function s2(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ca=typeof Object.is=="function"?Object.is:s2;function vr(e,a){if(ca(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),s=Object.keys(a);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var c=n[s];if(!Hc.call(a,c)||!ca(e[c],a[c]))return!1}return!0}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,a){var n=wp(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=a&&s>=a)return{node:n,offset:a-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wp(n)}}function Ep(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ep(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ps(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=Ps(e.document)}return a}function ru(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function o2(e,a){var n=Cp(a);a=e.focusedElem;var s=e.selectionRange;if(n!==a&&a&&a.ownerDocument&&Ep(a.ownerDocument.documentElement,a)){if(s!==null&&ru(a)){if(e=s.start,n=s.end,n===void 0&&(n=e),"selectionStart"in a)a.selectionStart=e,a.selectionEnd=Math.min(n,a.value.length);else if(n=(e=a.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var c=a.textContent.length,d=Math.min(s.start,c);s=s.end===void 0?d:Math.min(s.end,c),!n.extend&&d>s&&(c=s,s=d,d=c),c=Sp(a,d);var v=Sp(a,s);c&&v&&(n.rangeCount!==1||n.anchorNode!==c.node||n.anchorOffset!==c.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),n.removeAllRanges(),d>s?(n.addRange(e),n.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),n.addRange(e)))}}for(e=[],n=a;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<e.length;a++)n=e[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var c2=mi&&"documentMode"in document&&11>=document.documentMode,hl=null,su=null,br=null,ou=!1;function Tp(e,a,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||hl==null||hl!==Ps(s)||(s=hl,"selectionStart"in s&&ru(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),br&&vr(br,s)||(br=s,s=ko(su,"onSelect"),0<s.length&&(a=new Ys("onSelect","select",null,a,n),e.push({event:a,listeners:s}),a.target=hl)))}function Cn(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var pl={animationend:Cn("Animation","AnimationEnd"),animationiteration:Cn("Animation","AnimationIteration"),animationstart:Cn("Animation","AnimationStart"),transitionrun:Cn("Transition","TransitionRun"),transitionstart:Cn("Transition","TransitionStart"),transitioncancel:Cn("Transition","TransitionCancel"),transitionend:Cn("Transition","TransitionEnd")},cu={},Ap={};mi&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function Tn(e){if(cu[e])return cu[e];if(!pl[e])return e;var a=pl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in Ap)return cu[e]=a[n];return e}var Mp=Tn("animationend"),Np=Tn("animationiteration"),$p=Tn("animationstart"),u2=Tn("transitionrun"),d2=Tn("transitionstart"),f2=Tn("transitioncancel"),Op=Tn("transitionend"),kp=new Map,Rp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ua(e,a){kp.set(e,a),Sn(a,[e])}var xa=[],ml=0,uu=0;function Ws(){for(var e=ml,a=uu=ml=0;a<e;){var n=xa[a];xa[a++]=null;var s=xa[a];xa[a++]=null;var c=xa[a];xa[a++]=null;var d=xa[a];if(xa[a++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}d!==0&&zp(n,c,d)}}function Zs(e,a,n,s){xa[ml++]=e,xa[ml++]=a,xa[ml++]=n,xa[ml++]=s,uu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function du(e,a,n,s){return Zs(e,a,n,s),Ks(e)}function Pi(e,a){return Zs(e,null,null,a),Ks(e)}function zp(e,a,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var c=!1,d=e.return;d!==null;)d.childLanes|=n,s=d.alternate,s!==null&&(s.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;c&&a!==null&&e.tag===3&&(d=e.stateNode,c=31-oa(n),d=d.hiddenUpdates,e=d[c],e===null?d[c]=[a]:e.push(a),a.lane=n|536870912)}function Ks(e){if(50<qr)throw qr=0,vd=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var gl={},Dp=new WeakMap;function wa(e,a){if(typeof e=="object"&&e!==null){var n=Dp.get(e);return n!==void 0?n:(a={value:e,source:a,stack:K(a)},Dp.set(e,a),a)}return{value:e,source:a,stack:K(a)}}var vl=[],bl=0,Js=null,eo=0,Sa=[],Ea=0,An=null,vi=1,bi="";function Mn(e,a){vl[bl++]=eo,vl[bl++]=Js,Js=e,eo=a}function Lp(e,a,n){Sa[Ea++]=vi,Sa[Ea++]=bi,Sa[Ea++]=An,An=e;var s=vi;e=bi;var c=32-oa(s)-1;s&=~(1<<c),n+=1;var d=32-oa(a)+c;if(30<d){var v=c-c%5;d=(s&(1<<v)-1).toString(32),s>>=v,c-=v,vi=1<<32-oa(a)+c|n<<c|s,bi=d+e}else vi=1<<d|n<<c|s,bi=e}function fu(e){e.return!==null&&(Mn(e,1),Lp(e,1,0))}function hu(e){for(;e===Js;)Js=vl[--bl],vl[bl]=null,eo=vl[--bl],vl[bl]=null;for(;e===An;)An=Sa[--Ea],Sa[Ea]=null,bi=Sa[--Ea],Sa[Ea]=null,vi=Sa[--Ea],Sa[Ea]=null}var Gt=null,Rt=null,Re=!1,Ia=null,Za=!1,pu=Error(r(519));function Nn(e){var a=Error(r(418,""));throw xr(wa(a,e)),pu}function jp(e){var a=e.stateNode,n=e.type,s=e.memoizedProps;switch(a[Ht]=e,a[ta]=s,n){case"dialog":Me("cancel",a),Me("close",a);break;case"iframe":case"object":case"embed":Me("load",a);break;case"video":case"audio":for(n=0;n<Fr.length;n++)Me(Fr[n],a);break;case"source":Me("error",a);break;case"img":case"image":case"link":Me("error",a),Me("load",a);break;case"details":Me("toggle",a);break;case"input":Me("invalid",a),Kh(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Is(a);break;case"select":Me("invalid",a);break;case"textarea":Me("invalid",a),ep(a,s.value,s.defaultValue,s.children),Is(a)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||s.suppressHydrationWarning===!0||Gg(a.textContent,n)?(s.popover!=null&&(Me("beforetoggle",a),Me("toggle",a)),s.onScroll!=null&&Me("scroll",a),s.onScrollEnd!=null&&Me("scrollend",a),s.onClick!=null&&(a.onclick=Ro),a=!0):a=!1,a||Nn(e)}function Bp(e){for(Gt=e.return;Gt;)switch(Gt.tag){case 3:case 27:Za=!0;return;case 5:case 13:Za=!1;return;default:Gt=Gt.return}}function yr(e){if(e!==Gt)return!1;if(!Re)return Bp(e),Re=!0,!1;var a=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zd(e.type,e.memoizedProps)),n=!n),n&&(a=!0),a&&Rt&&Nn(e),Bp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(a===0){Rt=qa(e.nextSibling);break e}a--}else n!=="$"&&n!=="$!"&&n!=="$?"||a++;e=e.nextSibling}Rt=null}}else Rt=Gt?qa(e.stateNode.nextSibling):null;return!0}function _r(){Rt=Gt=null,Re=!1}function xr(e){Ia===null?Ia=[e]:Ia.push(e)}var wr=Error(r(460)),Hp=Error(r(474)),mu={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function to(){}function Ip(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(to,to),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,e===wr?Error(r(483)):e;default:if(typeof a.status=="string")a.then(to,to);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(s){if(a.status==="pending"){var c=a;c.status="fulfilled",c.value=s}},function(s){if(a.status==="pending"){var c=a;c.status="rejected",c.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,e===wr?Error(r(483)):e}throw Sr=a,wr}}var Sr=null;function Pp(){if(Sr===null)throw Error(r(459));var e=Sr;return Sr=null,e}var yl=null,Er=0;function ao(e){var a=Er;return Er+=1,yl===null&&(yl=[]),Ip(yl,e,a)}function Cr(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function io(e,a){throw a.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function qp(e){var a=e._init;return a(e._payload)}function Vp(e){function a(z,N){if(e){var j=z.deletions;j===null?(z.deletions=[N],z.flags|=16):j.push(N)}}function n(z,N){if(!e)return null;for(;N!==null;)a(z,N),N=N.sibling;return null}function s(z){for(var N=new Map;z!==null;)z.key!==null?N.set(z.key,z):N.set(z.index,z),z=z.sibling;return N}function c(z,N){return z=en(z,N),z.index=0,z.sibling=null,z}function d(z,N,j){return z.index=j,e?(j=z.alternate,j!==null?(j=j.index,j<N?(z.flags|=33554434,N):j):(z.flags|=33554434,N)):(z.flags|=1048576,N)}function v(z){return e&&z.alternate===null&&(z.flags|=33554434),z}function x(z,N,j,G){return N===null||N.tag!==6?(N=cd(j,z.mode,G),N.return=z,N):(N=c(N,j),N.return=z,N)}function E(z,N,j,G){var se=j.type;return se===g?V(z,N,j.props.children,G,j.key):N!==null&&(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===D&&qp(se)===N.type)?(N=c(N,j.props),Cr(N,j),N.return=z,N):(N=wo(j.type,j.key,j.props,null,z.mode,G),Cr(N,j),N.return=z,N)}function $(z,N,j,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=ud(j,z.mode,G),N.return=z,N):(N=c(N,j.children||[]),N.return=z,N)}function V(z,N,j,G,se){return N===null||N.tag!==7?(N=Hn(j,z.mode,G,se),N.return=z,N):(N=c(N,j),N.return=z,N)}function Y(z,N,j){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=cd(""+N,z.mode,j),N.return=z,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case f:return j=wo(N.type,N.key,N.props,null,z.mode,j),Cr(j,N),j.return=z,j;case h:return N=ud(N,z.mode,j),N.return=z,N;case D:var G=N._init;return N=G(N._payload),Y(z,N,j)}if(ne(N)||W(N))return N=Hn(N,z.mode,j,null),N.return=z,N;if(typeof N.then=="function")return Y(z,ao(N),j);if(N.$$typeof===_)return Y(z,yo(z,N),j);io(z,N)}return null}function I(z,N,j,G){var se=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return se!==null?null:x(z,N,""+j,G);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case f:return j.key===se?E(z,N,j,G):null;case h:return j.key===se?$(z,N,j,G):null;case D:return se=j._init,j=se(j._payload),I(z,N,j,G)}if(ne(j)||W(j))return se!==null?null:V(z,N,j,G,null);if(typeof j.then=="function")return I(z,N,ao(j),G);if(j.$$typeof===_)return I(z,N,yo(z,j),G);io(z,j)}return null}function q(z,N,j,G,se){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(j)||null,x(N,z,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return z=z.get(G.key===null?j:G.key)||null,E(N,z,G,se);case h:return z=z.get(G.key===null?j:G.key)||null,$(N,z,G,se);case D:var we=G._init;return G=we(G._payload),q(z,N,j,G,se)}if(ne(G)||W(G))return z=z.get(j)||null,V(N,z,G,se,null);if(typeof G.then=="function")return q(z,N,j,ao(G),se);if(G.$$typeof===_)return q(z,N,j,yo(N,G),se);io(N,G)}return null}function ce(z,N,j,G){for(var se=null,we=null,fe=N,he=N=0,Tt=null;fe!==null&&he<j.length;he++){fe.index>he?(Tt=fe,fe=null):Tt=fe.sibling;var ze=I(z,fe,j[he],G);if(ze===null){fe===null&&(fe=Tt);break}e&&fe&&ze.alternate===null&&a(z,fe),N=d(ze,N,he),we===null?se=ze:we.sibling=ze,we=ze,fe=Tt}if(he===j.length)return n(z,fe),Re&&Mn(z,he),se;if(fe===null){for(;he<j.length;he++)fe=Y(z,j[he],G),fe!==null&&(N=d(fe,N,he),we===null?se=fe:we.sibling=fe,we=fe);return Re&&Mn(z,he),se}for(fe=s(fe);he<j.length;he++)Tt=q(fe,z,he,j[he],G),Tt!==null&&(e&&Tt.alternate!==null&&fe.delete(Tt.key===null?he:Tt.key),N=d(Tt,N,he),we===null?se=Tt:we.sibling=Tt,we=Tt);return e&&fe.forEach(function(on){return a(z,on)}),Re&&Mn(z,he),se}function ge(z,N,j,G){if(j==null)throw Error(r(151));for(var se=null,we=null,fe=N,he=N=0,Tt=null,ze=j.next();fe!==null&&!ze.done;he++,ze=j.next()){fe.index>he?(Tt=fe,fe=null):Tt=fe.sibling;var on=I(z,fe,ze.value,G);if(on===null){fe===null&&(fe=Tt);break}e&&fe&&on.alternate===null&&a(z,fe),N=d(on,N,he),we===null?se=on:we.sibling=on,we=on,fe=Tt}if(ze.done)return n(z,fe),Re&&Mn(z,he),se;if(fe===null){for(;!ze.done;he++,ze=j.next())ze=Y(z,ze.value,G),ze!==null&&(N=d(ze,N,he),we===null?se=ze:we.sibling=ze,we=ze);return Re&&Mn(z,he),se}for(fe=s(fe);!ze.done;he++,ze=j.next())ze=q(fe,z,he,ze.value,G),ze!==null&&(e&&ze.alternate!==null&&fe.delete(ze.key===null?he:ze.key),N=d(ze,N,he),we===null?se=ze:we.sibling=ze,we=ze);return e&&fe.forEach(function(T_){return a(z,T_)}),Re&&Mn(z,he),se}function nt(z,N,j,G){if(typeof j=="object"&&j!==null&&j.type===g&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case f:e:{for(var se=j.key;N!==null;){if(N.key===se){if(se=j.type,se===g){if(N.tag===7){n(z,N.sibling),G=c(N,j.props.children),G.return=z,z=G;break e}}else if(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===D&&qp(se)===N.type){n(z,N.sibling),G=c(N,j.props),Cr(G,j),G.return=z,z=G;break e}n(z,N);break}else a(z,N);N=N.sibling}j.type===g?(G=Hn(j.props.children,z.mode,G,j.key),G.return=z,z=G):(G=wo(j.type,j.key,j.props,null,z.mode,G),Cr(G,j),G.return=z,z=G)}return v(z);case h:e:{for(se=j.key;N!==null;){if(N.key===se)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){n(z,N.sibling),G=c(N,j.children||[]),G.return=z,z=G;break e}else{n(z,N);break}else a(z,N);N=N.sibling}G=ud(j,z.mode,G),G.return=z,z=G}return v(z);case D:return se=j._init,j=se(j._payload),nt(z,N,j,G)}if(ne(j))return ce(z,N,j,G);if(W(j)){if(se=W(j),typeof se!="function")throw Error(r(150));return j=se.call(j),ge(z,N,j,G)}if(typeof j.then=="function")return nt(z,N,ao(j),G);if(j.$$typeof===_)return nt(z,N,yo(z,j),G);io(z,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,N!==null&&N.tag===6?(n(z,N.sibling),G=c(N,j),G.return=z,z=G):(n(z,N),G=cd(j,z.mode,G),G.return=z,z=G),v(z)):n(z,N)}return function(z,N,j,G){try{Er=0;var se=nt(z,N,j,G);return yl=null,se}catch(fe){if(fe===wr)throw fe;var we=Ma(29,fe,null,z.mode);return we.lanes=G,we.return=z,we}finally{}}}var $n=Vp(!0),Fp=Vp(!1),_l=Je(null),no=Je(0);function Gp(e,a){e=Ni,He(no,e),He(_l,a),Ni=e|a.baseLanes}function gu(){He(no,Ni),He(_l,_l.current)}function vu(){Ni=no.current,me(_l),me(no)}var Ca=Je(null),Ka=null;function qi(e){var a=e.alternate;He(_t,_t.current&1),He(Ca,e),Ka===null&&(a===null||_l.current!==null||a.memoizedState!==null)&&(Ka=e)}function Yp(e){if(e.tag===22){if(He(_t,_t.current),He(Ca,e),Ka===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(Ka=e)}}else Vi()}function Vi(){He(_t,_t.current),He(Ca,Ca.current)}function yi(e){me(Ca),Ka===e&&(Ka=null),me(_t)}var _t=Je(0);function lo(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var h2=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},p2=t.unstable_scheduleCallback,m2=t.unstable_NormalPriority,xt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new h2,data:new Map,refCount:0}}function Tr(e){e.refCount--,e.refCount===0&&p2(m2,function(){e.controller.abort()})}var Ar=null,yu=0,xl=0,wl=null;function g2(e,a){if(Ar===null){var n=Ar=[];yu=0,xl=Cd(),wl={status:"pending",value:void 0,then:function(s){n.push(s)}}}return yu++,a.then(Xp,Xp),a}function Xp(){if(--yu===0&&Ar!==null){wl!==null&&(wl.status="fulfilled");var e=Ar;Ar=null,xl=0,wl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function v2(e,a){var n=[],s={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){s.status="fulfilled",s.value=a;for(var c=0;c<n.length;c++)(0,n[c])(a)},function(c){for(s.status="rejected",s.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),s}var Qp=P.S;P.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&g2(e,a),Qp!==null&&Qp(e,a)};var On=Je(null);function _u(){var e=On.current;return e!==null?e:Fe.pooledCache}function ro(e,a){a===null?He(On,On.current):He(On,a.pool)}function Wp(){var e=_u();return e===null?null:{parent:xt._currentValue,pool:e}}var Fi=0,_e=null,Ue=null,pt=null,so=!1,Sl=!1,kn=!1,oo=0,Mr=0,El=null,b2=0;function ct(){throw Error(r(321))}function xu(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!ca(e[n],a[n]))return!1;return!0}function wu(e,a,n,s,c,d){return Fi=d,_e=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,P.H=e===null||e.memoizedState===null?Rn:Gi,kn=!1,d=n(s,c),kn=!1,Sl&&(d=Kp(a,n,s,c)),Zp(e),d}function Zp(e){P.H=Ja;var a=Ue!==null&&Ue.next!==null;if(Fi=0,pt=Ue=_e=null,so=!1,Mr=0,El=null,a)throw Error(r(300));e===null||Et||(e=e.dependencies,e!==null&&bo(e)&&(Et=!0))}function Kp(e,a,n,s){_e=e;var c=0;do{if(Sl&&(El=null),Mr=0,Sl=!1,25<=c)throw Error(r(301));if(c+=1,pt=Ue=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=zn,d=a(n,s)}while(Sl);return d}function y2(){var e=P.H,a=e.useState()[0];return a=typeof a.then=="function"?Nr(a):a,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(_e.flags|=1024),a}function Su(){var e=oo!==0;return oo=0,e}function Eu(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function Cu(e){if(so){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}so=!1}Fi=0,pt=Ue=_e=null,Sl=!1,Mr=oo=0,El=null}function ia(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?_e.memoizedState=pt=e:pt=pt.next=e,pt}function mt(){if(Ue===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var a=pt===null?_e.memoizedState:pt.next;if(a!==null)pt=a,Ue=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},pt===null?_e.memoizedState=pt=e:pt=pt.next=e}return pt}var co;co=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Nr(e){var a=Mr;return Mr+=1,El===null&&(El=[]),e=Ip(El,e,a),a=_e,(pt===null?a.memoizedState:pt.next)===null&&(a=a.alternate,P.H=a===null||a.memoizedState===null?Rn:Gi),e}function uo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Nr(e);if(e.$$typeof===_)return Ut(e)}throw Error(r(438,String(e)))}function Tu(e){var a=null,n=_e.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(c){return c.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=co(),_e.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),s=0;s<e;s++)n[s]=L;return a.index++,n}function _i(e,a){return typeof a=="function"?a(e):a}function fo(e){var a=mt();return Au(a,Ue,e)}function Au(e,a,n){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=e.baseQueue,d=s.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}a.baseQueue=c=d,s.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{a=c.next;var x=v=null,E=null,$=a,V=!1;do{var Y=$.lane&-536870913;if(Y!==$.lane?($e&Y)===Y:(Fi&Y)===Y){var I=$.revertLane;if(I===0)E!==null&&(E=E.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Y===xl&&(V=!0);else if((Fi&I)===I){$=$.next,I===xl&&(V=!0);continue}else Y={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},E===null?(x=E=Y,v=d):E=E.next=Y,_e.lanes|=I,tn|=I;Y=$.action,kn&&n(d,Y),d=$.hasEagerState?$.eagerState:n(d,Y)}else I={lane:Y,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},E===null?(x=E=I,v=d):E=E.next=I,_e.lanes|=Y,tn|=Y;$=$.next}while($!==null&&$!==a);if(E===null?v=d:E.next=x,!ca(d,e.memoizedState)&&(Et=!0,V&&(n=wl,n!==null)))throw n;e.memoizedState=d,e.baseState=v,e.baseQueue=E,s.lastRenderedState=d}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Mu(e){var a=mt(),n=a.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var s=n.dispatch,c=n.pending,d=a.memoizedState;if(c!==null){n.pending=null;var v=c=c.next;do d=e(d,v.action),v=v.next;while(v!==c);ca(d,a.memoizedState)||(Et=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),n.lastRenderedState=d}return[d,s]}function Jp(e,a,n){var s=_e,c=mt(),d=Re;if(d){if(n===void 0)throw Error(r(407));n=n()}else n=a();var v=!ca((Ue||c).memoizedState,n);if(v&&(c.memoizedState=n,Et=!0),c=c.queue,Ou(am.bind(null,s,c,e),[e]),c.getSnapshot!==a||v||pt!==null&&pt.memoizedState.tag&1){if(s.flags|=2048,Cl(9,tm.bind(null,s,c,n,a),{destroy:void 0},null),Fe===null)throw Error(r(349));d||(Fi&60)!==0||em(s,a,n)}return n}function em(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=_e.updateQueue,a===null?(a=co(),_e.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function tm(e,a,n,s){a.value=n,a.getSnapshot=s,im(a)&&nm(e)}function am(e,a,n){return n(function(){im(a)&&nm(e)})}function im(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!ca(e,n)}catch{return!0}}function nm(e){var a=Pi(e,2);a!==null&&Yt(a,e,2)}function Nu(e){var a=ia();if(typeof e=="function"){var n=e;if(e=n(),kn){Hi(!0);try{n()}finally{Hi(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},a}function lm(e,a,n,s){return e.baseState=n,Au(e,Ue,typeof s=="function"?s:_i)}function _2(e,a,n,s,c){if(mo(e))throw Error(r(485));if(e=a.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};P.T!==null?n(!0):d.isTransition=!1,s(d),n=a.pending,n===null?(d.next=a.pending=d,rm(a,d)):(d.next=n.next,a.pending=n.next=d)}}function rm(e,a){var n=a.action,s=a.payload,c=e.state;if(a.isTransition){var d=P.T,v={};P.T=v;try{var x=n(c,s),E=P.S;E!==null&&E(v,x),sm(e,a,x)}catch($){$u(e,a,$)}finally{P.T=d}}else try{d=n(c,s),sm(e,a,d)}catch($){$u(e,a,$)}}function sm(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){om(e,a,s)},function(s){return $u(e,a,s)}):om(e,a,n)}function om(e,a,n){a.status="fulfilled",a.value=n,cm(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,rm(e,n)))}function $u(e,a,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=n,cm(a),a=a.next;while(a!==s)}e.action=null}function cm(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function um(e,a){return a}function dm(e,a){if(Re){var n=Fe.formState;if(n!==null){e:{var s=_e;if(Re){if(Rt){t:{for(var c=Rt,d=Za;c.nodeType!==8;){if(!d){c=null;break t}if(c=qa(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Rt=qa(c.nextSibling),s=c.data==="F!";break e}}Nn(s)}s=!1}s&&(a=n[0])}}return n=ia(),n.memoizedState=n.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:a},n.queue=s,n=Nm.bind(null,_e,s),s.dispatch=n,s=Nu(!1),d=Lu.bind(null,_e,!1,s.queue),s=ia(),c={state:a,dispatch:null,action:e,pending:null},s.queue=c,n=_2.bind(null,_e,c,d,n),c.dispatch=n,s.memoizedState=e,[a,n,!1]}function fm(e){var a=mt();return hm(a,Ue,e)}function hm(e,a,n){a=Au(e,a,um)[0],e=fo(_i)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Nr(a):a;var s=mt(),c=s.queue,d=c.dispatch;return n!==s.memoizedState&&(_e.flags|=2048,Cl(9,x2.bind(null,c,n),{destroy:void 0},null)),[a,d,e]}function x2(e,a){e.action=a}function pm(e){var a=mt(),n=Ue;if(n!==null)return hm(a,n,e);mt(),a=a.memoizedState,n=mt();var s=n.queue.dispatch;return n.memoizedState=e,[a,s,!1]}function Cl(e,a,n,s){return e={tag:e,create:a,inst:n,deps:s,next:null},a=_e.updateQueue,a===null&&(a=co(),_e.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,a.lastEffect=e),e}function mm(){return mt().memoizedState}function ho(e,a,n,s){var c=ia();_e.flags|=e,c.memoizedState=Cl(1|a,n,{destroy:void 0},s===void 0?null:s)}function po(e,a,n,s){var c=mt();s=s===void 0?null:s;var d=c.memoizedState.inst;Ue!==null&&s!==null&&xu(s,Ue.memoizedState.deps)?c.memoizedState=Cl(a,n,d,s):(_e.flags|=e,c.memoizedState=Cl(1|a,n,d,s))}function gm(e,a){ho(8390656,8,e,a)}function Ou(e,a){po(2048,8,e,a)}function vm(e,a){return po(4,2,e,a)}function bm(e,a){return po(4,4,e,a)}function ym(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function _m(e,a,n){n=n!=null?n.concat([e]):null,po(4,4,ym.bind(null,a,e),n)}function ku(){}function xm(e,a){var n=mt();a=a===void 0?null:a;var s=n.memoizedState;return a!==null&&xu(a,s[1])?s[0]:(n.memoizedState=[e,a],e)}function wm(e,a){var n=mt();a=a===void 0?null:a;var s=n.memoizedState;if(a!==null&&xu(a,s[1]))return s[0];if(s=e(),kn){Hi(!0);try{e()}finally{Hi(!1)}}return n.memoizedState=[s,a],s}function Ru(e,a,n){return n===void 0||(Fi&1073741824)!==0?e.memoizedState=a:(e.memoizedState=n,e=Eg(),_e.lanes|=e,tn|=e,n)}function Sm(e,a,n,s){return ca(n,a)?n:_l.current!==null?(e=Ru(e,n,s),ca(e,a)||(Et=!0),e):(Fi&42)===0?(Et=!0,e.memoizedState=n):(e=Eg(),_e.lanes|=e,tn|=e,a)}function Em(e,a,n,s,c){var d=pe.p;pe.p=d!==0&&8>d?d:8;var v=P.T,x={};P.T=x,Lu(e,!1,a,n);try{var E=c(),$=P.S;if($!==null&&$(x,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var V=v2(E,s);$r(e,a,V,ha(e))}else $r(e,a,s,ha(e))}catch(Y){$r(e,a,{then:function(){},status:"rejected",reason:Y},ha())}finally{pe.p=d,P.T=v}}function w2(){}function zu(e,a,n,s){if(e.tag!==5)throw Error(r(476));var c=Cm(e).queue;Em(e,c,a,Xe,n===null?w2:function(){return Tm(e),n(s)})}function Cm(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Xe,baseState:Xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:Xe},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Tm(e){var a=Cm(e).next.queue;$r(e,a,{},ha())}function Du(){return Ut(Wr)}function Am(){return mt().memoizedState}function Mm(){return mt().memoizedState}function S2(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ha();e=Qi(n);var s=Wi(a,e,n);s!==null&&(Yt(s,a,n),Rr(s,a,n)),a={cache:bu()},e.payload=a;return}a=a.return}}function E2(e,a,n){var s=ha();n={lane:s,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},mo(e)?$m(a,n):(n=du(e,a,n,s),n!==null&&(Yt(n,e,s),Om(n,a,s)))}function Nm(e,a,n){var s=ha();$r(e,a,n,s)}function $r(e,a,n,s){var c={lane:s,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(mo(e))$m(a,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var v=a.lastRenderedState,x=d(v,n);if(c.hasEagerState=!0,c.eagerState=x,ca(x,v))return Zs(e,a,c,0),Fe===null&&Ws(),!1}catch{}finally{}if(n=du(e,a,c,s),n!==null)return Yt(n,e,s),Om(n,a,s),!0}return!1}function Lu(e,a,n,s){if(s={lane:2,revertLane:Cd(),action:s,hasEagerState:!1,eagerState:null,next:null},mo(e)){if(a)throw Error(r(479))}else a=du(e,n,s,2),a!==null&&Yt(a,e,2)}function mo(e){var a=e.alternate;return e===_e||a!==null&&a===_e}function $m(e,a){Sl=so=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Om(e,a,n){if((n&4194176)!==0){var s=a.lanes;s&=e.pendingLanes,n|=s,a.lanes=n,Ph(e,n)}}var Ja={readContext:Ut,use:uo,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct};Ja.useCacheRefresh=ct,Ja.useMemoCache=ct,Ja.useHostTransitionStatus=ct,Ja.useFormState=ct,Ja.useActionState=ct,Ja.useOptimistic=ct;var Rn={readContext:Ut,use:uo,useCallback:function(e,a){return ia().memoizedState=[e,a===void 0?null:a],e},useContext:Ut,useEffect:gm,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,ho(4194308,4,ym.bind(null,a,e),n)},useLayoutEffect:function(e,a){return ho(4194308,4,e,a)},useInsertionEffect:function(e,a){ho(4,2,e,a)},useMemo:function(e,a){var n=ia();a=a===void 0?null:a;var s=e();if(kn){Hi(!0);try{e()}finally{Hi(!1)}}return n.memoizedState=[s,a],s},useReducer:function(e,a,n){var s=ia();if(n!==void 0){var c=n(a);if(kn){Hi(!0);try{n(a)}finally{Hi(!1)}}}else c=a;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=E2.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var a=ia();return e={current:e},a.memoizedState=e},useState:function(e){e=Nu(e);var a=e.queue,n=Nm.bind(null,_e,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:ku,useDeferredValue:function(e,a){var n=ia();return Ru(n,e,a)},useTransition:function(){var e=Nu(!1);return e=Em.bind(null,_e,e.queue,!0,!1),ia().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var s=_e,c=ia();if(Re){if(n===void 0)throw Error(r(407));n=n()}else{if(n=a(),Fe===null)throw Error(r(349));($e&60)!==0||em(s,a,n)}c.memoizedState=n;var d={value:n,getSnapshot:a};return c.queue=d,gm(am.bind(null,s,d,e),[e]),s.flags|=2048,Cl(9,tm.bind(null,s,d,n,a),{destroy:void 0},null),n},useId:function(){var e=ia(),a=Fe.identifierPrefix;if(Re){var n=bi,s=vi;n=(s&~(1<<32-oa(s)-1)).toString(32)+n,a=":"+a+"R"+n,n=oo++,0<n&&(a+="H"+n.toString(32)),a+=":"}else n=b2++,a=":"+a+"r"+n.toString(32)+":";return e.memoizedState=a},useCacheRefresh:function(){return ia().memoizedState=S2.bind(null,_e)}};Rn.useMemoCache=Tu,Rn.useHostTransitionStatus=Du,Rn.useFormState=dm,Rn.useActionState=dm,Rn.useOptimistic=function(e){var a=ia();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=Lu.bind(null,_e,!0,n),n.dispatch=a,[e,a]};var Gi={readContext:Ut,use:uo,useCallback:xm,useContext:Ut,useEffect:Ou,useImperativeHandle:_m,useInsertionEffect:vm,useLayoutEffect:bm,useMemo:wm,useReducer:fo,useRef:mm,useState:function(){return fo(_i)},useDebugValue:ku,useDeferredValue:function(e,a){var n=mt();return Sm(n,Ue.memoizedState,e,a)},useTransition:function(){var e=fo(_i)[0],a=mt().memoizedState;return[typeof e=="boolean"?e:Nr(e),a]},useSyncExternalStore:Jp,useId:Am};Gi.useCacheRefresh=Mm,Gi.useMemoCache=Tu,Gi.useHostTransitionStatus=Du,Gi.useFormState=fm,Gi.useActionState=fm,Gi.useOptimistic=function(e,a){var n=mt();return lm(n,Ue,e,a)};var zn={readContext:Ut,use:uo,useCallback:xm,useContext:Ut,useEffect:Ou,useImperativeHandle:_m,useInsertionEffect:vm,useLayoutEffect:bm,useMemo:wm,useReducer:Mu,useRef:mm,useState:function(){return Mu(_i)},useDebugValue:ku,useDeferredValue:function(e,a){var n=mt();return Ue===null?Ru(n,e,a):Sm(n,Ue.memoizedState,e,a)},useTransition:function(){var e=Mu(_i)[0],a=mt().memoizedState;return[typeof e=="boolean"?e:Nr(e),a]},useSyncExternalStore:Jp,useId:Am};zn.useCacheRefresh=Mm,zn.useMemoCache=Tu,zn.useHostTransitionStatus=Du,zn.useFormState=pm,zn.useActionState=pm,zn.useOptimistic=function(e,a){var n=mt();return Ue!==null?lm(n,Ue,e,a):(n.baseState=e,[e,n.queue.dispatch])};function ju(e,a,n,s){a=e.memoizedState,n=n(s,a),n=n==null?a:F({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bu={isMounted:function(e){return(e=e._reactInternals)?J(e)===e:!1},enqueueSetState:function(e,a,n){e=e._reactInternals;var s=ha(),c=Qi(s);c.payload=a,n!=null&&(c.callback=n),a=Wi(e,c,s),a!==null&&(Yt(a,e,s),Rr(a,e,s))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var s=ha(),c=Qi(s);c.tag=1,c.payload=a,n!=null&&(c.callback=n),a=Wi(e,c,s),a!==null&&(Yt(a,e,s),Rr(a,e,s))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ha(),s=Qi(n);s.tag=2,a!=null&&(s.callback=a),a=Wi(e,s,n),a!==null&&(Yt(a,e,n),Rr(a,e,n))}};function km(e,a,n,s,c,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,v):a.prototype&&a.prototype.isPureReactComponent?!vr(n,s)||!vr(c,d):!0}function Rm(e,a,n,s){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,s),a.state!==e&&Bu.enqueueReplaceState(a,a.state,null)}function Dn(e,a){var n=a;if("ref"in a){n={};for(var s in a)s!=="ref"&&(n[s]=a[s])}if(e=e.defaultProps){n===a&&(n=F({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}var go=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function zm(e){go(e)}function Dm(e){console.error(e)}function Lm(e){go(e)}function vo(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function jm(e,a,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(e,a,n){return n=Qi(n),n.tag=3,n.payload={element:null},n.callback=function(){vo(e,a)},n}function Bm(e){return e=Qi(e),e.tag=3,e}function Hm(e,a,n,s){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;e.payload=function(){return c(d)},e.callback=function(){jm(a,n,s)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){jm(a,n,s),typeof c!="function"&&(an===null?an=new Set([this]):an.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function C2(e,a,n,s,c){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=n.alternate,a!==null&&kr(a,n,c,!0),n=Ca.current,n!==null){switch(n.tag){case 13:return Ka===null?_d():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=c,s===mu?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([s]):a.add(s),wd(e,s,c)),!1;case 22:return n.flags|=65536,s===mu?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([s]):n.add(s)),wd(e,s,c)),!1}throw Error(r(435,n.tag))}return wd(e,s,c),_d(),!1}if(Re)return a=Ca.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=c,s!==pu&&(e=Error(r(422),{cause:s}),xr(wa(e,n)))):(s!==pu&&(a=Error(r(423),{cause:s}),xr(wa(a,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=wa(s,n),c=Hu(e.stateNode,s,c),ed(e,c),it!==4&&(it=2)),!1;var d=Error(r(520),{cause:s});if(d=wa(d,n),Ir===null?Ir=[d]:Ir.push(d),it!==4&&(it=2),a===null)return!0;s=wa(s,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=Hu(n.stateNode,s,e),ed(n,e),!1;case 1:if(a=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(an===null||!an.has(d))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Bm(c),Hm(c,e,n,s),ed(n,c),!1}n=n.return}while(n!==null);return!1}var Um=Error(r(461)),Et=!1;function zt(e,a,n,s){a.child=e===null?Fp(a,null,n,s):$n(a,e.child,n,s)}function Im(e,a,n,s,c){n=n.render;var d=a.ref;if("ref"in s){var v={};for(var x in s)x!=="ref"&&(v[x]=s[x])}else v=s;return jn(a),s=wu(e,a,n,v,d,c),x=Su(),e!==null&&!Et?(Eu(e,a,c),xi(e,a,c)):(Re&&x&&fu(a),a.flags|=1,zt(e,a,s,c),a.child)}function Pm(e,a,n,s,c){if(e===null){var d=n.type;return typeof d=="function"&&!od(d)&&d.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=d,qm(e,a,d,s,c)):(e=wo(n.type,null,s,a,a.mode,c),e.ref=a.ref,e.return=a,a.child=e)}if(d=e.child,!Xu(e,c)){var v=d.memoizedProps;if(n=n.compare,n=n!==null?n:vr,n(v,s)&&e.ref===a.ref)return xi(e,a,c)}return a.flags|=1,e=en(d,s),e.ref=a.ref,e.return=a,a.child=e}function qm(e,a,n,s,c){if(e!==null){var d=e.memoizedProps;if(vr(d,s)&&e.ref===a.ref)if(Et=!1,a.pendingProps=s=d,Xu(e,c))(e.flags&131072)!==0&&(Et=!0);else return a.lanes=e.lanes,xi(e,a,c)}return Uu(e,a,n,s,c)}function Vm(e,a,n){var s=a.pendingProps,c=s.children,d=(a.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(Or(e,a),s.mode==="hidden"||d){if((a.flags&128)!==0){if(s=v!==null?v.baseLanes|n:n,e!==null){for(c=a.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;a.childLanes=d&~s}else a.childLanes=0,a.child=null;return Fm(e,a,s,n)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&ro(a,v!==null?v.cachePool:null),v!==null?Gp(a,v):gu(),Yp(a);else return a.lanes=a.childLanes=536870912,Fm(e,a,v!==null?v.baseLanes|n:n,n)}else v!==null?(ro(a,v.cachePool),Gp(a,v),Vi(),a.memoizedState=null):(e!==null&&ro(a,null),gu(),Vi());return zt(e,a,c,n),a.child}function Fm(e,a,n,s){var c=_u();return c=c===null?null:{parent:xt._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},e!==null&&ro(a,null),gu(),Yp(a),e!==null&&kr(e,a,s,!0),null}function Or(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(a.flags|=2097664)}}function Uu(e,a,n,s,c){return jn(a),n=wu(e,a,n,s,void 0,c),s=Su(),e!==null&&!Et?(Eu(e,a,c),xi(e,a,c)):(Re&&s&&fu(a),a.flags|=1,zt(e,a,n,c),a.child)}function Gm(e,a,n,s,c,d){return jn(a),a.updateQueue=null,n=Kp(a,s,n,c),Zp(e),s=Su(),e!==null&&!Et?(Eu(e,a,d),xi(e,a,d)):(Re&&s&&fu(a),a.flags|=1,zt(e,a,n,d),a.child)}function Ym(e,a,n,s,c){if(jn(a),a.stateNode===null){var d=gl,v=n.contextType;typeof v=="object"&&v!==null&&(d=Ut(v)),d=new n(s,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Bu,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=s,d.state=a.memoizedState,d.refs={},Ku(a),v=n.contextType,d.context=typeof v=="object"&&v!==null?Ut(v):gl,d.state=a.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(ju(a,n,v,s),d.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Bu.enqueueReplaceState(d,d.state,null),Dr(a,s,d,c),zr(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(e===null){d=a.stateNode;var x=a.memoizedProps,E=Dn(n,x);d.props=E;var $=d.context,V=n.contextType;v=gl,typeof V=="object"&&V!==null&&(v=Ut(V));var Y=n.getDerivedStateFromProps;V=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",x=a.pendingProps!==x,V||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x||$!==v)&&Rm(a,d,s,v),Xi=!1;var I=a.memoizedState;d.state=I,Dr(a,s,d,c),zr(),$=a.memoizedState,x||I!==$||Xi?(typeof Y=="function"&&(ju(a,n,Y,s),$=a.memoizedState),(E=Xi||km(a,n,E,s,I,$,v))?(V||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=$),d.props=s,d.state=$,d.context=v,s=E):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{d=a.stateNode,Ju(e,a),v=a.memoizedProps,V=Dn(n,v),d.props=V,Y=a.pendingProps,I=d.context,$=n.contextType,E=gl,typeof $=="object"&&$!==null&&(E=Ut($)),x=n.getDerivedStateFromProps,($=typeof x=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||I!==E)&&Rm(a,d,s,E),Xi=!1,I=a.memoizedState,d.state=I,Dr(a,s,d,c),zr();var q=a.memoizedState;v!==Y||I!==q||Xi||e!==null&&e.dependencies!==null&&bo(e.dependencies)?(typeof x=="function"&&(ju(a,n,x,s),q=a.memoizedState),(V=Xi||km(a,n,V,s,I,q,E)||e!==null&&e.dependencies!==null&&bo(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,q,E),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,q,E)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=q),d.props=s,d.state=q,d.context=E,s=V):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(a.flags|=1024),s=!1)}return d=s,Or(e,a),s=(a.flags&128)!==0,d||s?(d=a.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,e!==null&&s?(a.child=$n(a,e.child,null,c),a.child=$n(a,null,n,c)):zt(e,a,n,c),a.memoizedState=d.state,e=a.child):e=xi(e,a,c),e}function Xm(e,a,n,s){return _r(),a.flags|=256,zt(e,a,n,s),a.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Pu(e){return{baseLanes:e,cachePool:Wp()}}function qu(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=Na),e}function Qm(e,a,n){var s=a.pendingProps,c=!1,d=(a.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(_t.current&2)!==0),v&&(c=!0,a.flags&=-129),v=(a.flags&32)!==0,a.flags&=-33,e===null){if(Re){if(c?qi(a):Vi(),Re){var x=Rt,E;if(E=x){e:{for(E=x,x=Za;E.nodeType!==8;){if(!x){x=null;break e}if(E=qa(E.nextSibling),E===null){x=null;break e}}x=E}x!==null?(a.memoizedState={dehydrated:x,treeContext:An!==null?{id:vi,overflow:bi}:null,retryLane:536870912},E=Ma(18,null,null,0),E.stateNode=x,E.return=a,a.child=E,Gt=a,Rt=null,E=!0):E=!1}E||Nn(a)}if(x=a.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return x.data==="$!"?a.lanes=16:a.lanes=536870912,null;yi(a)}return x=s.children,s=s.fallback,c?(Vi(),c=a.mode,x=Fu({mode:"hidden",children:x},c),s=Hn(s,c,n,null),x.return=a,s.return=a,x.sibling=s,a.child=x,c=a.child,c.memoizedState=Pu(n),c.childLanes=qu(e,v,n),a.memoizedState=Iu,s):(qi(a),Vu(a,x))}if(E=e.memoizedState,E!==null&&(x=E.dehydrated,x!==null)){if(d)a.flags&256?(qi(a),a.flags&=-257,a=Gu(e,a,n)):a.memoizedState!==null?(Vi(),a.child=e.child,a.flags|=128,a=null):(Vi(),c=s.fallback,x=a.mode,s=Fu({mode:"visible",children:s.children},x),c=Hn(c,x,n,null),c.flags|=2,s.return=a,c.return=a,s.sibling=c,a.child=s,$n(a,e.child,null,n),s=a.child,s.memoizedState=Pu(n),s.childLanes=qu(e,v,n),a.memoizedState=Iu,a=c);else if(qi(a),x.data==="$!"){if(v=x.nextSibling&&x.nextSibling.dataset,v)var $=v.dgst;v=$,s=Error(r(419)),s.stack="",s.digest=v,xr({value:s,source:null,stack:null}),a=Gu(e,a,n)}else if(Et||kr(e,a,n,!1),v=(n&e.childLanes)!==0,Et||v){if(v=Fe,v!==null){if(s=n&-n,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(v.suspendedLanes|n))!==0?0:s,s!==0&&s!==E.retryLane)throw E.retryLane=s,Pi(e,s),Yt(v,e,s),Um}x.data==="$?"||_d(),a=Gu(e,a,n)}else x.data==="$?"?(a.flags|=128,a.child=e.child,a=U2.bind(null,e),x._reactRetry=a,a=null):(e=E.treeContext,Rt=qa(x.nextSibling),Gt=a,Re=!0,Ia=null,Za=!1,e!==null&&(Sa[Ea++]=vi,Sa[Ea++]=bi,Sa[Ea++]=An,vi=e.id,bi=e.overflow,An=a),a=Vu(a,s.children),a.flags|=4096);return a}return c?(Vi(),c=s.fallback,x=a.mode,E=e.child,$=E.sibling,s=en(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&31457280,$!==null?c=en($,c):(c=Hn(c,x,n,null),c.flags|=2),c.return=a,s.return=a,s.sibling=c,a.child=s,s=c,c=a.child,x=e.child.memoizedState,x===null?x=Pu(n):(E=x.cachePool,E!==null?($=xt._currentValue,E=E.parent!==$?{parent:$,pool:$}:E):E=Wp(),x={baseLanes:x.baseLanes|n,cachePool:E}),c.memoizedState=x,c.childLanes=qu(e,v,n),a.memoizedState=Iu,s):(qi(a),n=e.child,e=n.sibling,n=en(n,{mode:"visible",children:s.children}),n.return=a,n.sibling=null,e!==null&&(v=a.deletions,v===null?(a.deletions=[e],a.flags|=16):v.push(e)),a.child=n,a.memoizedState=null,n)}function Vu(e,a){return a=Fu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Fu(e,a){return xg(e,a,0,null)}function Gu(e,a,n){return $n(a,e.child,null,n),e=Vu(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Wm(e,a,n){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a),Wu(e.return,a,n)}function Yu(e,a,n,s,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:c}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=n,d.tailMode=c)}function Zm(e,a,n){var s=a.pendingProps,c=s.revealOrder,d=s.tail;if(zt(e,a,s.children,n),s=_t.current,(s&2)!==0)s=s&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,n,a);else if(e.tag===19)Wm(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(He(_t,s),c){case"forwards":for(n=a.child,c=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=a.child,a.child=null):(c=n.sibling,n.sibling=null),Yu(a,!1,c,n,d);break;case"backwards":for(n=null,c=a.child,a.child=null;c!==null;){if(e=c.alternate,e!==null&&lo(e)===null){a.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}Yu(a,!0,n,null,d);break;case"together":Yu(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function xi(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),tn|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(kr(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,n=en(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function Xu(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&bo(e)))}function T2(e,a,n){switch(a.tag){case 3:Rs(a,a.stateNode.containerInfo),Yi(a,xt,e.memoizedState.cache),_r();break;case 27:case 5:Bc(a);break;case 4:Rs(a,a.stateNode.containerInfo);break;case 10:Yi(a,a.type,a.memoizedProps.value);break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(qi(a),a.flags|=128,null):(n&a.child.childLanes)!==0?Qm(e,a,n):(qi(a),e=xi(e,a,n),e!==null?e.sibling:null);qi(a);break;case 19:var c=(e.flags&128)!==0;if(s=(n&a.childLanes)!==0,s||(kr(e,a,n,!1),s=(n&a.childLanes)!==0),c){if(s)return Zm(e,a,n);a.flags|=128}if(c=a.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),He(_t,_t.current),s)break;return null;case 22:case 23:return a.lanes=0,Vm(e,a,n);case 24:Yi(a,xt,e.memoizedState.cache)}return xi(e,a,n)}function Km(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)Et=!0;else{if(!Xu(e,n)&&(a.flags&128)===0)return Et=!1,T2(e,a,n);Et=(e.flags&131072)!==0}else Et=!1,Re&&(a.flags&1048576)!==0&&Lp(a,eo,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var s=a.elementType,c=s._init;if(s=c(s._payload),a.type=s,typeof s=="function")od(s)?(e=Dn(s,e),a.tag=1,a=Ym(null,a,s,e,n)):(a.tag=0,a=Uu(null,a,s,e,n));else{if(s!=null){if(c=s.$$typeof,c===S){a.tag=11,a=Im(null,a,s,e,n);break e}else if(c===T){a.tag=14,a=Pm(null,a,s,e,n);break e}}throw a=X(s)||s,Error(r(306,a,""))}}return a;case 0:return Uu(e,a,a.type,a.pendingProps,n);case 1:return s=a.type,c=Dn(s,a.pendingProps),Ym(e,a,s,c,n);case 3:e:{if(Rs(a,a.stateNode.containerInfo),e===null)throw Error(r(387));var d=a.pendingProps;c=a.memoizedState,s=c.element,Ju(e,a),Dr(a,d,null,n);var v=a.memoizedState;if(d=v.cache,Yi(a,xt,d),d!==c.cache&&Zu(a,[xt],n,!0),zr(),d=v.element,c.isDehydrated)if(c={element:d,isDehydrated:!1,cache:v.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=Xm(e,a,d,n);break e}else if(d!==s){s=wa(Error(r(424)),a),xr(s),a=Xm(e,a,d,n);break e}else for(Rt=qa(a.stateNode.containerInfo.firstChild),Gt=a,Re=!0,Ia=null,Za=!0,n=Fp(a,null,d,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),d===s){a=xi(e,a,n);break e}zt(e,a,d,n)}a=a.child}return a;case 26:return Or(e,a),e===null?(n=tv(a.type,null,a.pendingProps,null))?a.memoizedState=n:Re||(n=a.type,e=a.pendingProps,s=zo(Bi.current).createElement(n),s[Ht]=a,s[ta]=e,Dt(s,n,e),St(s),a.stateNode=s):a.memoizedState=tv(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Bc(a),e===null&&Re&&(s=a.stateNode=Kg(a.type,a.pendingProps,Bi.current),Gt=a,Za=!0,Rt=qa(s.firstChild)),s=a.pendingProps.children,e!==null||Re?zt(e,a,s,n):a.child=$n(a,null,s,n),Or(e,a),a.child;case 5:return e===null&&Re&&((c=s=Rt)&&(s=a_(s,a.type,a.pendingProps,Za),s!==null?(a.stateNode=s,Gt=a,Rt=qa(s.firstChild),Za=!1,c=!0):c=!1),c||Nn(a)),Bc(a),c=a.type,d=a.pendingProps,v=e!==null?e.memoizedProps:null,s=d.children,zd(c,d)?s=null:v!==null&&zd(c,v)&&(a.flags|=32),a.memoizedState!==null&&(c=wu(e,a,y2,null,null,n),Wr._currentValue=c),Or(e,a),zt(e,a,s,n),a.child;case 6:return e===null&&Re&&((e=n=Rt)&&(n=i_(n,a.pendingProps,Za),n!==null?(a.stateNode=n,Gt=a,Rt=null,e=!0):e=!1),e||Nn(a)),null;case 13:return Qm(e,a,n);case 4:return Rs(a,a.stateNode.containerInfo),s=a.pendingProps,e===null?a.child=$n(a,null,s,n):zt(e,a,s,n),a.child;case 11:return Im(e,a,a.type,a.pendingProps,n);case 7:return zt(e,a,a.pendingProps,n),a.child;case 8:return zt(e,a,a.pendingProps.children,n),a.child;case 12:return zt(e,a,a.pendingProps.children,n),a.child;case 10:return s=a.pendingProps,Yi(a,a.type,s.value),zt(e,a,s.children,n),a.child;case 9:return c=a.type._context,s=a.pendingProps.children,jn(a),c=Ut(c),s=s(c),a.flags|=1,zt(e,a,s,n),a.child;case 14:return Pm(e,a,a.type,a.pendingProps,n);case 15:return qm(e,a,a.type,a.pendingProps,n);case 19:return Zm(e,a,n);case 22:return Vm(e,a,n);case 24:return jn(a),s=Ut(xt),e===null?(c=_u(),c===null&&(c=Fe,d=bu(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=n),c=d),a.memoizedState={parent:s,cache:c},Ku(a),Yi(a,xt,c)):((e.lanes&n)!==0&&(Ju(e,a),Dr(a,null,null,n),zr()),c=e.memoizedState,d=a.memoizedState,c.parent!==s?(c={parent:s,cache:s},a.memoizedState=c,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=c),Yi(a,xt,s)):(s=d.cache,Yi(a,xt,s),s!==c.cache&&Zu(a,[xt],n,!0))),zt(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}var Qu=Je(null),Ln=null,wi=null;function Yi(e,a,n){He(Qu,a._currentValue),a._currentValue=n}function Si(e){e._currentValue=Qu.current,me(Qu)}function Wu(e,a,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),e===n)break;e=e.return}}function Zu(e,a,n,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;e:for(;d!==null;){var x=d;d=c;for(var E=0;E<a.length;E++)if(x.context===a[E]){d.lanes|=n,x=d.alternate,x!==null&&(x.lanes|=n),Wu(d.return,n,e),s||(v=null);break e}d=x.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=n,d=v.alternate,d!==null&&(d.lanes|=n),Wu(v,n,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function kr(e,a,n,s){e=null;for(var c=a,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var x=c.type;ca(c.pendingProps.value,v.value)||(e!==null?e.push(x):e=[x])}}else if(c===ks.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Wr):e=[Wr])}c=c.return}e!==null&&Zu(a,e,n,s),a.flags|=262144}function bo(e){for(e=e.firstContext;e!==null;){if(!ca(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jn(e){Ln=e,wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ut(e){return Jm(Ln,e)}function yo(e,a){return Ln===null&&jn(e),Jm(e,a)}function Jm(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},wi===null){if(e===null)throw Error(r(308));wi=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else wi=wi.next=a;return n}var Xi=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(e,a,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(tt&2)!==0){var c=s.pending;return c===null?a.next=a:(a.next=c.next,c.next=a),s.pending=a,a=Ks(e),zp(e,null,n),a}return Zs(e,s,a,n),Ks(e)}function Rr(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194176)!==0)){var s=a.lanes;s&=e.pendingLanes,n|=s,a.lanes=n,Ph(e,n)}}function ed(e,a){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var c=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,n=n.next}while(n!==null);d===null?c=d=a:d=d.next=a}else c=d=a;n={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var td=!1;function zr(){if(td){var e=wl;if(e!==null)throw e}}function Dr(e,a,n,s){td=!1;var c=e.updateQueue;Xi=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var E=x,$=E.next;E.next=null,v===null?d=$:v.next=$,v=E;var V=e.alternate;V!==null&&(V=V.updateQueue,x=V.lastBaseUpdate,x!==v&&(x===null?V.firstBaseUpdate=$:x.next=$,V.lastBaseUpdate=E))}if(d!==null){var Y=c.baseState;v=0,V=$=E=null,x=d;do{var I=x.lane&-536870913,q=I!==x.lane;if(q?($e&I)===I:(s&I)===I){I!==0&&I===xl&&(td=!0),V!==null&&(V=V.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ce=e,ge=x;I=a;var nt=n;switch(ge.tag){case 1:if(ce=ge.payload,typeof ce=="function"){Y=ce.call(nt,Y,I);break e}Y=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ge.payload,I=typeof ce=="function"?ce.call(nt,Y,I):ce,I==null)break e;Y=F({},Y,I);break e;case 2:Xi=!0}}I=x.callback,I!==null&&(e.flags|=64,q&&(e.flags|=8192),q=c.callbacks,q===null?c.callbacks=[I]:q.push(I))}else q={lane:I,tag:x.tag,payload:x.payload,callback:x.callback,next:null},V===null?($=V=q,E=Y):V=V.next=q,v|=I;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;q=x,x=q.next,q.next=null,c.lastBaseUpdate=q,c.shared.pending=null}}while(!0);V===null&&(E=Y),c.baseState=E,c.firstBaseUpdate=$,c.lastBaseUpdate=V,d===null&&(c.shared.lanes=0),tn|=v,e.lanes=v,e.memoizedState=Y}}function eg(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function tg(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eg(n[e],a)}function Lr(e,a){try{var n=a.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var c=s.next;n=c;do{if((n.tag&e)===e){s=void 0;var d=n.create,v=n.inst;s=d(),v.destroy=s}n=n.next}while(n!==c)}}catch(x){qe(a,a.return,x)}}function Zi(e,a,n){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var d=c.next;s=d;do{if((s.tag&e)===e){var v=s.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,c=a;var E=n;try{x()}catch($){qe(c,E,$)}}}s=s.next}while(s!==d)}}catch($){qe(a,a.return,$)}}function ag(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{tg(a,n)}catch(s){qe(e,e.return,s)}}}function ig(e,a,n){n.props=Dn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){qe(e,a,s)}}function Bn(e,a){try{var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof n=="function"?e.refCleanup=n(c):n.current=c}}catch(d){qe(e,a,d)}}function ua(e,a){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(c){qe(e,a,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){qe(e,a,c)}else n.current=null}function ng(e){var a=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(c){qe(e,e.return,c)}}function lg(e,a,n){try{var s=e.stateNode;Z2(s,e.type,n,a),s[ta]=a}catch(c){qe(e,e.return,c)}}function rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,a,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?n.nodeType===8?n.parentNode.insertBefore(e,a):n.insertBefore(e,a):(n.nodeType===8?(a=n.parentNode,a.insertBefore(e,n)):(a=n,a.appendChild(e)),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Ro));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(id(e,a,n),e=e.sibling;e!==null;)id(e,a,n),e=e.sibling}function _o(e,a,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(_o(e,a,n),e=e.sibling;e!==null;)_o(e,a,n),e=e.sibling}var Ei=!1,at=!1,nd=!1,sg=typeof WeakSet=="function"?WeakSet:Set,Ct=null,og=!1;function A2(e,a){if(e=e.containerInfo,kd=Uo,e=Cp(e),ru(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var c=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var v=0,x=-1,E=-1,$=0,V=0,Y=e,I=null;t:for(;;){for(var q;Y!==n||c!==0&&Y.nodeType!==3||(x=v+c),Y!==d||s!==0&&Y.nodeType!==3||(E=v+s),Y.nodeType===3&&(v+=Y.nodeValue.length),(q=Y.firstChild)!==null;)I=Y,Y=q;for(;;){if(Y===e)break t;if(I===n&&++$===c&&(x=v),I===d&&++V===s&&(E=v),(q=Y.nextSibling)!==null)break;Y=I,I=Y.parentNode}Y=q}n=x===-1||E===-1?null:{start:x,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:e,selectionRange:n},Uo=!1,Ct=a;Ct!==null;)if(a=Ct,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ct=e;else for(;Ct!==null;){switch(a=Ct,d=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=a,c=d.memoizedProps,d=d.memoizedState,s=n.stateNode;try{var ce=Dn(n.type,c,n.elementType===n.type);e=s.getSnapshotBeforeUpdate(ce,d),s.__reactInternalSnapshotBeforeUpdate=e}catch(ge){qe(n,n.return,ge)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)jd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Ct=e;break}Ct=a.return}return ce=og,og=!1,ce}function cg(e,a,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n),s&4&&Lr(5,n);break;case 1:if(Ti(e,n),s&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(x){qe(n,n.return,x)}else{var c=Dn(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(c,a,e.__reactInternalSnapshotBeforeUpdate)}catch(x){qe(n,n.return,x)}}s&64&&ag(n),s&512&&Bn(n,n.return);break;case 3:if(Ti(e,n),s&64&&(s=n.updateQueue,s!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{tg(s,e)}catch(x){qe(n,n.return,x)}}break;case 26:Ti(e,n),s&512&&Bn(n,n.return);break;case 27:case 5:Ti(e,n),a===null&&s&4&&ng(n),s&512&&Bn(n,n.return);break;case 12:Ti(e,n);break;case 13:Ti(e,n),s&4&&fg(e,n);break;case 22:if(c=n.memoizedState!==null||Ei,!c){a=a!==null&&a.memoizedState!==null||at;var d=Ei,v=at;Ei=c,(at=a)&&!v?Ki(e,n,(n.subtreeFlags&8772)!==0):Ti(e,n),Ei=d,at=v}s&512&&(n.memoizedProps.mode==="manual"?Bn(n,n.return):ua(n,n.return));break;default:Ti(e,n)}}function ug(e){var a=e.alternate;a!==null&&(e.alternate=null,ug(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Vc(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gt=null,da=!1;function Ci(e,a,n){for(n=n.child;n!==null;)dg(e,a,n),n=n.sibling}function dg(e,a,n){if(sa&&typeof sa.onCommitFiberUnmount=="function")try{sa.onCommitFiberUnmount(lr,n)}catch{}switch(n.tag){case 26:at||ua(n,a),Ci(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:at||ua(n,a);var s=gt,c=da;for(gt=n.stateNode,Ci(e,a,n),n=n.stateNode,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Vc(n),gt=s,da=c;break;case 5:at||ua(n,a);case 6:c=gt;var d=da;if(gt=null,Ci(e,a,n),gt=c,da=d,gt!==null)if(da)try{e=gt,s=n.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(v){qe(n,a,v)}else try{gt.removeChild(n.stateNode)}catch(v){qe(n,a,v)}break;case 18:gt!==null&&(da?(a=gt,n=n.stateNode,a.nodeType===8?Ld(a.parentNode,n):a.nodeType===1&&Ld(a,n),es(a)):Ld(gt,n.stateNode));break;case 4:s=gt,c=da,gt=n.stateNode.containerInfo,da=!0,Ci(e,a,n),gt=s,da=c;break;case 0:case 11:case 14:case 15:at||Zi(2,n,a),at||Zi(4,n,a),Ci(e,a,n);break;case 1:at||(ua(n,a),s=n.stateNode,typeof s.componentWillUnmount=="function"&&ig(n,a,s)),Ci(e,a,n);break;case 21:Ci(e,a,n);break;case 22:at||ua(n,a),at=(s=at)||n.memoizedState!==null,Ci(e,a,n),at=s;break;default:Ci(e,a,n)}}function fg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{es(e)}catch(n){qe(a,a.return,n)}}function M2(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new sg),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new sg),a;default:throw Error(r(435,e.tag))}}function ld(e,a){var n=M2(e);a.forEach(function(s){var c=I2.bind(null,e,s);n.has(s)||(n.add(s),s.then(c,c))})}function Ta(e,a){var n=a.deletions;if(n!==null)for(var s=0;s<n.length;s++){var c=n[s],d=e,v=a,x=v;e:for(;x!==null;){switch(x.tag){case 27:case 5:gt=x.stateNode,da=!1;break e;case 3:gt=x.stateNode.containerInfo,da=!0;break e;case 4:gt=x.stateNode.containerInfo,da=!0;break e}x=x.return}if(gt===null)throw Error(r(160));dg(d,v,c),gt=null,da=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)hg(a,e),a=a.sibling}var Pa=null;function hg(e,a){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ta(a,e),Aa(e),s&4&&(Zi(3,e,e.return),Lr(3,e),Zi(5,e,e.return));break;case 1:Ta(a,e),Aa(e),s&512&&(at||n===null||ua(n,n.return)),s&64&&Ei&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var c=Pa;if(Ta(a,e),Aa(e),s&512&&(at||n===null||ua(n,n.return)),s&4){var d=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":d=c.getElementsByTagName("title")[0],(!d||d[or]||d[Ht]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(s),c.head.insertBefore(d,c.querySelector("head > title"))),Dt(d,s,n),d[Ht]=e,St(d),s=d;break e;case"link":var v=nv("link","href",c).get(s+(n.href||""));if(v){for(var x=0;x<v.length;x++)if(d=v[x],d.getAttribute("href")===(n.href==null?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(x,1);break t}}d=c.createElement(s),Dt(d,s,n),c.head.appendChild(d);break;case"meta":if(v=nv("meta","content",c).get(s+(n.content||""))){for(x=0;x<v.length;x++)if(d=v[x],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(x,1);break t}}d=c.createElement(s),Dt(d,s,n),c.head.appendChild(d);break;default:throw Error(r(468,s))}d[Ht]=e,St(d),s=d}e.stateNode=s}else lv(c,e.type,e.stateNode);else e.stateNode=iv(c,s,e.memoizedProps);else d!==s?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,s===null?lv(c,e.type,e.stateNode):iv(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&lg(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){c=e.stateNode,d=e.memoizedProps;try{for(var E=c.firstChild;E;){var $=E.nextSibling,V=E.nodeName;E[or]||V==="HEAD"||V==="BODY"||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&E.rel.toLowerCase()==="stylesheet"||c.removeChild(E),E=$}for(var Y=e.type,I=c.attributes;I.length;)c.removeAttributeNode(I[0]);Dt(c,Y,d),c[Ht]=e,c[ta]=d}catch(ce){qe(e,e.return,ce)}}case 5:if(Ta(a,e),Aa(e),s&512&&(at||n===null||ua(n,n.return)),e.flags&32){c=e.stateNode;try{cl(c,"")}catch(ce){qe(e,e.return,ce)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,lg(e,c,n!==null?n.memoizedProps:c)),s&1024&&(nd=!0);break;case 6:if(Ta(a,e),Aa(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(ce){qe(e,e.return,ce)}}break;case 3:if(jo=null,c=Pa,Pa=Do(a.containerInfo),Ta(a,e),Pa=c,Aa(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{es(a.containerInfo)}catch(ce){qe(e,e.return,ce)}nd&&(nd=!1,pg(e));break;case 4:s=Pa,Pa=Do(e.stateNode.containerInfo),Ta(a,e),Aa(e),Pa=s;break;case 12:Ta(a,e),Aa(e);break;case 13:Ta(a,e),Aa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(pd=Wa()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ld(e,s)));break;case 22:if(s&512&&(at||n===null||ua(n,n.return)),E=e.memoizedState!==null,$=n!==null&&n.memoizedState!==null,V=Ei,Y=at,Ei=V||E,at=Y||$,Ta(a,e),at=Y,Ei=V,Aa(e),a=e.stateNode,a._current=e,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,s&8192&&(a._visibility=E?a._visibility&-2:a._visibility|1,E&&(a=Ei||at,n===null||$||a||Tl(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,a=e;;){if(a.tag===5||a.tag===26||a.tag===27){if(n===null){$=n=a;try{if(c=$.stateNode,E)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=$.stateNode,x=$.memoizedProps.style;var q=x!=null&&x.hasOwnProperty("display")?x.display:null;v.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ce){qe($,$.return,ce)}}}else if(a.tag===6){if(n===null){$=a;try{$.stateNode.nodeValue=E?"":$.memoizedProps}catch(ce){qe($,$.return,ce)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,ld(e,n))));break;case 19:Ta(a,e),Aa(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ld(e,s)));break;case 21:break;default:Ta(a,e),Aa(e)}}function Aa(e){var a=e.flags;if(a&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(rg(n)){var s=n;break e}n=n.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,d=ad(e);_o(e,d,c);break;case 5:var v=s.stateNode;s.flags&32&&(cl(v,""),s.flags&=-33);var x=ad(e);_o(e,x,v);break;case 3:case 4:var E=s.stateNode.containerInfo,$=ad(e);id(e,$,E);break;default:throw Error(r(161))}}}catch(V){qe(e,e.return,V)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;pg(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ti(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)cg(e,a.alternate,a),a=a.sibling}function Tl(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Zi(4,a,a.return),Tl(a);break;case 1:ua(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&ig(a,a.return,n),Tl(a);break;case 26:case 27:case 5:ua(a,a.return),Tl(a);break;case 22:ua(a,a.return),a.memoizedState===null&&Tl(a);break;default:Tl(a)}e=e.sibling}}function Ki(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,c=e,d=a,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ki(c,d,n),Lr(4,d);break;case 1:if(Ki(c,d,n),s=d,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){qe(s,s.return,$)}if(s=d,c=s.updateQueue,c!==null){var x=s.stateNode;try{var E=c.shared.hiddenCallbacks;if(E!==null)for(c.shared.hiddenCallbacks=null,c=0;c<E.length;c++)eg(E[c],x)}catch($){qe(s,s.return,$)}}n&&v&64&&ag(d),Bn(d,d.return);break;case 26:case 27:case 5:Ki(c,d,n),n&&s===null&&v&4&&ng(d),Bn(d,d.return);break;case 12:Ki(c,d,n);break;case 13:Ki(c,d,n),n&&v&4&&fg(c,d);break;case 22:d.memoizedState===null&&Ki(c,d,n),Bn(d,d.return);break;default:Ki(c,d,n)}a=a.sibling}}function rd(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Tr(n))}function sd(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Tr(e))}function Ji(e,a,n,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)mg(e,a,n,s),a=a.sibling}function mg(e,a,n,s){var c=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a,n,s),c&2048&&Lr(9,a);break;case 3:Ji(e,a,n,s),c&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Tr(e)));break;case 12:if(c&2048){Ji(e,a,n,s),e=a.stateNode;try{var d=a.memoizedProps,v=d.id,x=d.onPostCommit;typeof x=="function"&&x(v,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){qe(a,a.return,E)}}else Ji(e,a,n,s);break;case 23:break;case 22:d=a.stateNode,a.memoizedState!==null?d._visibility&4?Ji(e,a,n,s):jr(e,a):d._visibility&4?Ji(e,a,n,s):(d._visibility|=4,Al(e,a,n,s,(a.subtreeFlags&10256)!==0)),c&2048&&rd(a.alternate,a);break;case 24:Ji(e,a,n,s),c&2048&&sd(a.alternate,a);break;default:Ji(e,a,n,s)}}function Al(e,a,n,s,c){for(c=c&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var d=e,v=a,x=n,E=s,$=v.flags;switch(v.tag){case 0:case 11:case 15:Al(d,v,x,E,c),Lr(8,v);break;case 23:break;case 22:var V=v.stateNode;v.memoizedState!==null?V._visibility&4?Al(d,v,x,E,c):jr(d,v):(V._visibility|=4,Al(d,v,x,E,c)),c&&$&2048&&rd(v.alternate,v);break;case 24:Al(d,v,x,E,c),c&&$&2048&&sd(v.alternate,v);break;default:Al(d,v,x,E,c)}a=a.sibling}}function jr(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,s=a,c=s.flags;switch(s.tag){case 22:jr(n,s),c&2048&&rd(s.alternate,s);break;case 24:jr(n,s),c&2048&&sd(s.alternate,s);break;default:jr(n,s)}a=a.sibling}}var Br=8192;function Ml(e){if(e.subtreeFlags&Br)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 26:Ml(e),e.flags&Br&&e.memoizedState!==null&&g_(Pa,e.memoizedState,e.memoizedProps);break;case 5:Ml(e);break;case 3:case 4:var a=Pa;Pa=Do(e.stateNode.containerInfo),Ml(e),Pa=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Br,Br=16777216,Ml(e),Br=a):Ml(e));break;default:Ml(e)}}function vg(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Hr(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var s=a[n];Ct=s,yg(s,e)}vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:Hr(e),e.flags&2048&&Zi(9,e,e.return);break;case 3:Hr(e);break;case 12:Hr(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&4&&(e.return===null||e.return.tag!==13)?(a._visibility&=-5,xo(e)):Hr(e);break;default:Hr(e)}}function xo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var s=a[n];Ct=s,yg(s,e)}vg(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Zi(8,a,a.return),xo(a);break;case 22:n=a.stateNode,n._visibility&4&&(n._visibility&=-5,xo(a));break;default:xo(a)}e=e.sibling}}function yg(e,a){for(;Ct!==null;){var n=Ct;switch(n.tag){case 0:case 11:case 15:Zi(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Tr(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,Ct=s;else e:for(n=e;Ct!==null;){s=Ct;var c=s.sibling,d=s.return;if(ug(s),s===n){Ct=null;break e}if(c!==null){c.return=d,Ct=c;break e}Ct=d}}}function N2(e,a,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ma(e,a,n,s){return new N2(e,a,n,s)}function od(e){return e=e.prototype,!(!e||!e.isReactComponent)}function en(e,a){var n=e.alternate;return n===null?(n=Ma(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _g(e,a){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function wo(e,a,n,s,c,d){var v=0;if(s=e,typeof e=="function")od(e)&&(v=1);else if(typeof e=="string")v=p_(e,n,ea.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return Hn(n.children,c,d,a);case p:v=8,c|=24;break;case b:return e=Ma(12,n,a,c|2),e.elementType=b,e.lanes=d,e;case A:return e=Ma(13,n,a,c),e.elementType=A,e.lanes=d,e;case M:return e=Ma(19,n,a,c),e.elementType=M,e.lanes=d,e;case H:return xg(n,c,d,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case _:v=10;break e;case w:v=9;break e;case S:v=11;break e;case T:v=14;break e;case D:v=16,s=null;break e}v=29,n=Error(r(130,e===null?"null":typeof e,"")),s=null}return a=Ma(v,n,a,c),a.elementType=e,a.type=s,a.lanes=d,a}function Hn(e,a,n,s){return e=Ma(7,e,s,a),e.lanes=n,e}function xg(e,a,n,s){e=Ma(22,e,s,a),e.elementType=H,e.lanes=n;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=c._current;if(d===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var v=Pi(d,2);v!==null&&(c._pendingVisibility|=2,Yt(v,d,2))}},attach:function(){var d=c._current;if(d===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var v=Pi(d,2);v!==null&&(c._pendingVisibility&=-3,Yt(v,d,2))}}};return e.stateNode=c,e}function cd(e,a,n){return e=Ma(6,e,null,a),e.lanes=n,e}function ud(e,a,n){return a=Ma(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function Ai(e){e.flags|=4}function wg(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rv(a)){if(a=Ca.current,a!==null&&(($e&4194176)===$e?Ka!==null:($e&62914560)!==$e&&($e&536870912)===0||a!==Ka))throw Sr=mu,Hp;e.flags|=8192}}function So(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Uh():536870912,e.lanes|=a,$l|=a)}function Ur(e,a){if(!Re)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function et(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(a)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=n,a}function $2(e,a,n){var s=a.pendingProps;switch(hu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(a),null;case 1:return et(a),null;case 3:return n=a.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Si(xt),il(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(yr(a)?Ai(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ia!==null&&(bd(Ia),Ia=null))),et(a),null;case 26:return n=a.memoizedState,e===null?(Ai(a),n!==null?(et(a),wg(a,n)):(et(a),a.flags&=-16777217)):n?n!==e.memoizedState?(Ai(a),et(a),wg(a,n)):(et(a),a.flags&=-16777217):(e.memoizedProps!==s&&Ai(a),et(a),a.flags&=-16777217),null;case 27:zs(a),n=Bi.current;var c=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==s&&Ai(a);else{if(!s){if(a.stateNode===null)throw Error(r(166));return et(a),null}e=ea.current,yr(a)?jp(a):(e=Kg(c,s,n),a.stateNode=e,Ai(a))}return et(a),null;case 5:if(zs(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==s&&Ai(a);else{if(!s){if(a.stateNode===null)throw Error(r(166));return et(a),null}if(e=ea.current,yr(a))jp(a);else{switch(c=zo(Bi.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(n,{is:s.is}):c.createElement(n)}}e[Ht]=a,e[ta]=s;e:for(c=a.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break e;for(;c.sibling===null;){if(c.return===null||c.return===a)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}a.stateNode=e;e:switch(Dt(e,n,s),n){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ai(a)}}return et(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==s&&Ai(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(r(166));if(e=Bi.current,yr(a)){if(e=a.stateNode,n=a.memoizedProps,s=null,c=Gt,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Ht]=a,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||Gg(e.nodeValue,n)),e||Nn(a)}else e=zo(e).createTextNode(s),e[Ht]=a,a.stateNode=e}return et(a),null;case 13:if(s=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=yr(a),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=a.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ht]=a}else _r(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;et(a),c=!1}else Ia!==null&&(bd(Ia),Ia=null),c=!0;if(!c)return a.flags&256?(yi(a),a):(yi(a),null)}if(yi(a),(a.flags&128)!==0)return a.lanes=n,a;if(n=s!==null,e=e!==null&&e.memoizedState!==null,n){s=a.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==c&&(s.flags|=2048)}return n!==e&&n&&(a.child.flags|=8192),So(a,a.updateQueue),et(a),null;case 4:return il(),e===null&&Nd(a.stateNode.containerInfo),et(a),null;case 10:return Si(a.type),et(a),null;case 19:if(me(_t),c=a.memoizedState,c===null)return et(a),null;if(s=(a.flags&128)!==0,d=c.rendering,d===null)if(s)Ur(c,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=lo(e),d!==null){for(a.flags|=128,Ur(c,!1),e=d.updateQueue,a.updateQueue=e,So(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)_g(n,e),n=n.sibling;return He(_t,_t.current&1|2),a.child}e=e.sibling}c.tail!==null&&Wa()>Eo&&(a.flags|=128,s=!0,Ur(c,!1),a.lanes=4194304)}else{if(!s)if(e=lo(d),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,So(a,e),Ur(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Re)return et(a),null}else 2*Wa()-c.renderingStartTime>Eo&&n!==536870912&&(a.flags|=128,s=!0,Ur(c,!1),a.lanes=4194304);c.isBackwards?(d.sibling=a.child,a.child=d):(e=c.last,e!==null?e.sibling=d:a.child=d,c.last=d)}return c.tail!==null?(a=c.tail,c.rendering=a,c.tail=a.sibling,c.renderingStartTime=Wa(),a.sibling=null,e=_t.current,He(_t,s?e&1|2:e&1),a):(et(a),null);case 22:case 23:return yi(a),vu(),s=a.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(n&536870912)!==0&&(a.flags&128)===0&&(et(a),a.subtreeFlags&6&&(a.flags|=8192)):et(a),n=a.updateQueue,n!==null&&So(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==n&&(a.flags|=2048),e!==null&&me(On),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Si(xt),et(a),null;case 25:return null}throw Error(r(156,a.tag))}function O2(e,a){switch(hu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Si(xt),il(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return zs(a),null;case 13:if(yi(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));_r()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return me(_t),null;case 4:return il(),null;case 10:return Si(a.type),null;case 22:case 23:return yi(a),vu(),e!==null&&me(On),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Si(xt),null;case 25:return null;default:return null}}function Sg(e,a){switch(hu(a),a.tag){case 3:Si(xt),il();break;case 26:case 27:case 5:zs(a);break;case 4:il();break;case 13:yi(a);break;case 19:me(_t);break;case 10:Si(a.type);break;case 22:case 23:yi(a),vu(),e!==null&&me(On);break;case 24:Si(xt)}}var k2={getCacheForType:function(e){var a=Ut(xt),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n}},R2=typeof WeakMap=="function"?WeakMap:Map,tt=0,Fe=null,Ee=null,$e=0,Ge=0,fa=null,Mi=!1,Nl=!1,dd=!1,Ni=0,it=0,tn=0,Un=0,fd=0,Na=0,$l=0,Ir=null,ei=null,hd=!1,pd=0,Eo=1/0,Co=null,an=null,To=!1,In=null,Pr=0,md=0,gd=null,qr=0,vd=null;function ha(){if((tt&2)!==0&&$e!==0)return $e&-$e;if(P.T!==null){var e=xl;return e!==0?e:Cd()}return Vh()}function Eg(){Na===0&&(Na=($e&536870912)===0||Re?Hh():536870912);var e=Ca.current;return e!==null&&(e.flags|=32),Na}function Yt(e,a,n){(e===Fe&&Ge===2||e.cancelPendingCommit!==null)&&(Ol(e,0),$i(e,$e,Na,!1)),sr(e,n),((tt&2)===0||e!==Fe)&&(e===Fe&&((tt&2)===0&&(Un|=n),it===4&&$i(e,$e,Na,!1)),ti(e))}function Cg(e,a,n){if((tt&6)!==0)throw Error(r(327));var s=!n&&(a&60)===0&&(a&e.expiredLanes)===0||rr(e,a),c=s?L2(e,a):xd(e,a,!0),d=s;do{if(c===0){Nl&&!s&&$i(e,a,0,!1);break}else if(c===6)$i(e,a,0,!Mi);else{if(n=e.current.alternate,d&&!z2(n)){c=xd(e,a,!1),d=!1;continue}if(c===2){if(d=a,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){a=v;e:{var x=e;c=Ir;var E=x.current.memoizedState.isDehydrated;if(E&&(Ol(x,v).flags|=256),v=xd(x,v,!1),v!==2){if(dd&&!E){x.errorRecoveryDisabledLanes|=d,Un|=d,c=4;break e}d=ei,ei=c,d!==null&&bd(d)}c=v}if(d=!1,c!==2)continue}}if(c===1){Ol(e,0),$i(e,a,0,!0);break}e:{switch(s=e,c){case 0:case 1:throw Error(r(345));case 4:if((a&4194176)===a){$i(s,a,Na,!Mi);break e}break;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=n,s.finishedLanes=a,(a&62914560)===a&&(d=pd+300-Wa(),10<d)){if($i(s,a,Na,!Mi),Bs(s,0)!==0)break e;s.timeoutHandle=Qg(Tg.bind(null,s,n,ei,Co,hd,a,Na,Un,$l,Mi,2,-0,0),d);break e}Tg(s,n,ei,Co,hd,a,Na,Un,$l,Mi,0,-0,0)}}break}while(!0);ti(e)}function bd(e){ei===null?ei=e:ei.push.apply(ei,e)}function Tg(e,a,n,s,c,d,v,x,E,$,V,Y,I){var q=a.subtreeFlags;if((q&8192||(q&16785408)===16785408)&&(Qr={stylesheets:null,count:0,unsuspend:m_},gg(a),a=v_(),a!==null)){e.cancelPendingCommit=a(Rg.bind(null,e,n,s,c,v,x,E,1,Y,I)),$i(e,d,v,!$);return}Rg(e,n,s,c,v,x,E,V,Y,I)}function z2(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var c=n[s],d=c.getSnapshot;c=c.value;try{if(!ca(d(),c))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function $i(e,a,n,s){a&=~fd,a&=~Un,e.suspendedLanes|=a,e.pingedLanes&=~a,s&&(e.warmLanes|=a),s=e.expirationTimes;for(var c=a;0<c;){var d=31-oa(c),v=1<<d;s[d]=-1,c&=~v}n!==0&&Ih(e,n,a)}function Ao(){return(tt&6)===0?(Vr(0),!1):!0}function yd(){if(Ee!==null){if(Ge===0)var e=Ee.return;else e=Ee,wi=Ln=null,Cu(e),yl=null,Er=0,e=Ee;for(;e!==null;)Sg(e.alternate,e),e=e.return;Ee=null}}function Ol(e,a){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,J2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),yd(),Fe=e,Ee=n=en(e.current,null),$e=a,Ge=0,fa=null,Mi=!1,Nl=rr(e,a),dd=!1,$l=Na=fd=Un=tn=it=0,ei=Ir=null,hd=!1,(a&8)!==0&&(a|=a&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=a;0<s;){var c=31-oa(s),d=1<<c;a|=e[c],s&=~d}return Ni=a,Ws(),n}function Ag(e,a){_e=null,P.H=Ja,a===wr?(a=Pp(),Ge=3):a===Hp?(a=Pp(),Ge=4):Ge=a===Um?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,fa=a,Ee===null&&(it=1,vo(e,wa(a,e.current)))}function Mg(){var e=P.H;return P.H=Ja,e===null?Ja:e}function Ng(){var e=P.A;return P.A=k2,e}function _d(){it=4,Mi||($e&4194176)!==$e&&Ca.current!==null||(Nl=!0),(tn&134217727)===0&&(Un&134217727)===0||Fe===null||$i(Fe,$e,Na,!1)}function xd(e,a,n){var s=tt;tt|=2;var c=Mg(),d=Ng();(Fe!==e||$e!==a)&&(Co=null,Ol(e,a)),a=!1;var v=it;e:do try{if(Ge!==0&&Ee!==null){var x=Ee,E=fa;switch(Ge){case 8:yd(),v=6;break e;case 3:case 2:case 6:Ca.current===null&&(a=!0);var $=Ge;if(Ge=0,fa=null,kl(e,x,E,$),n&&Nl){v=0;break e}break;default:$=Ge,Ge=0,fa=null,kl(e,x,E,$)}}D2(),v=it;break}catch(V){Ag(e,V)}while(!0);return a&&e.shellSuspendCounter++,wi=Ln=null,tt=s,P.H=c,P.A=d,Ee===null&&(Fe=null,$e=0,Ws()),v}function D2(){for(;Ee!==null;)$g(Ee)}function L2(e,a){var n=tt;tt|=2;var s=Mg(),c=Ng();Fe!==e||$e!==a?(Co=null,Eo=Wa()+500,Ol(e,a)):Nl=rr(e,a);e:do try{if(Ge!==0&&Ee!==null){a=Ee;var d=fa;t:switch(Ge){case 1:Ge=0,fa=null,kl(e,a,d,1);break;case 2:if(Up(d)){Ge=0,fa=null,Og(a);break}a=function(){Ge===2&&Fe===e&&(Ge=7),ti(e)},d.then(a,a);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Up(d)?(Ge=0,fa=null,Og(a)):(Ge=0,fa=null,kl(e,a,d,7));break;case 5:var v=null;switch(Ee.tag){case 26:v=Ee.memoizedState;case 5:case 27:var x=Ee;if(!v||rv(v)){Ge=0,fa=null;var E=x.sibling;if(E!==null)Ee=E;else{var $=x.return;$!==null?(Ee=$,Mo($)):Ee=null}break t}}Ge=0,fa=null,kl(e,a,d,5);break;case 6:Ge=0,fa=null,kl(e,a,d,6);break;case 8:yd(),it=6;break e;default:throw Error(r(462))}}j2();break}catch(V){Ag(e,V)}while(!0);return wi=Ln=null,P.H=s,P.A=c,tt=n,Ee!==null?0:(Fe=null,$e=0,Ws(),it)}function j2(){for(;Ee!==null&&!ly();)$g(Ee)}function $g(e){var a=Km(e.alternate,e,Ni);e.memoizedProps=e.pendingProps,a===null?Mo(e):Ee=a}function Og(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Gm(n,a,a.pendingProps,a.type,void 0,$e);break;case 11:a=Gm(n,a,a.pendingProps,a.type.render,a.ref,$e);break;case 5:Cu(a);default:Sg(n,a),a=Ee=_g(a,Ni),a=Km(n,a,Ni)}e.memoizedProps=e.pendingProps,a===null?Mo(e):Ee=a}function kl(e,a,n,s){wi=Ln=null,Cu(a),yl=null,Er=0;var c=a.return;try{if(C2(e,c,a,n,$e)){it=1,vo(e,wa(n,e.current)),Ee=null;return}}catch(d){if(c!==null)throw Ee=c,d;it=1,vo(e,wa(n,e.current)),Ee=null;return}a.flags&32768?(Re||s===1?e=!0:Nl||($e&536870912)!==0?e=!1:(Mi=e=!0,(s===2||s===3||s===6)&&(s=Ca.current,s!==null&&s.tag===13&&(s.flags|=16384))),kg(a,e)):Mo(a)}function Mo(e){var a=e;do{if((a.flags&32768)!==0){kg(a,Mi);return}e=a.return;var n=$2(a.alternate,a,Ni);if(n!==null){Ee=n;return}if(a=a.sibling,a!==null){Ee=a;return}Ee=a=e}while(a!==null);it===0&&(it=5)}function kg(e,a){do{var n=O2(e.alternate,e);if(n!==null){n.flags&=32767,Ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=n}while(e!==null);it=6,Ee=null}function Rg(e,a,n,s,c,d,v,x,E,$){var V=P.T,Y=pe.p;try{pe.p=2,P.T=null,B2(e,a,n,s,Y,c,d,v,x,E,$)}finally{P.T=V,pe.p=Y}}function B2(e,a,n,s,c,d,v,x){do Rl();while(In!==null);if((tt&6)!==0)throw Error(r(327));var E=e.finishedWork;if(s=e.finishedLanes,E===null)return null;if(e.finishedWork=null,e.finishedLanes=0,E===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var $=E.lanes|E.childLanes;if($|=uu,gy(e,s,$,d,v,x),e===Fe&&(Ee=Fe=null,$e=0),(E.subtreeFlags&10256)===0&&(E.flags&10256)===0||To||(To=!0,md=$,gd=n,P2(Ds,function(){return Rl(),null})),n=(E.flags&15990)!==0,(E.subtreeFlags&15990)!==0||n?(n=P.T,P.T=null,d=pe.p,pe.p=2,v=tt,tt|=4,A2(e,E),hg(E,e),o2(Rd,e.containerInfo),Uo=!!kd,Rd=kd=null,e.current=E,cg(e,E.alternate,E),ry(),tt=v,pe.p=d,P.T=n):e.current=E,To?(To=!1,In=e,Pr=s):zg(e,$),$=e.pendingLanes,$===0&&(an=null),dy(E.stateNode),ti(e),a!==null)for(c=e.onRecoverableError,E=0;E<a.length;E++)$=a[E],c($.value,{componentStack:$.stack});return(Pr&3)!==0&&Rl(),$=e.pendingLanes,(s&4194218)!==0&&($&42)!==0?e===vd?qr++:(qr=0,vd=e):qr=0,Vr(0),null}function zg(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Tr(a)))}function Rl(){if(In!==null){var e=In,a=md;md=0;var n=qh(Pr),s=P.T,c=pe.p;try{if(pe.p=32>n?32:n,P.T=null,In===null)var d=!1;else{n=gd,gd=null;var v=In,x=Pr;if(In=null,Pr=0,(tt&6)!==0)throw Error(r(331));var E=tt;if(tt|=4,bg(v.current),mg(v,v.current,x,n),tt=E,Vr(0,!1),sa&&typeof sa.onPostCommitFiberRoot=="function")try{sa.onPostCommitFiberRoot(lr,v)}catch{}d=!0}return d}finally{pe.p=c,P.T=s,zg(e,a)}}return!1}function Dg(e,a,n){a=wa(n,a),a=Hu(e.stateNode,a,2),e=Wi(e,a,2),e!==null&&(sr(e,2),ti(e))}function qe(e,a,n){if(e.tag===3)Dg(e,e,n);else for(;a!==null;){if(a.tag===3){Dg(a,e,n);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(an===null||!an.has(s))){e=wa(n,e),n=Bm(2),s=Wi(a,n,2),s!==null&&(Hm(n,s,a,e),sr(s,2),ti(s));break}}a=a.return}}function wd(e,a,n){var s=e.pingCache;if(s===null){s=e.pingCache=new R2;var c=new Set;s.set(a,c)}else c=s.get(a),c===void 0&&(c=new Set,s.set(a,c));c.has(n)||(dd=!0,c.add(n),e=H2.bind(null,e,a,n),a.then(e,e))}function H2(e,a,n){var s=e.pingCache;s!==null&&s.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fe===e&&($e&n)===n&&(it===4||it===3&&($e&62914560)===$e&&300>Wa()-pd?(tt&2)===0&&Ol(e,0):fd|=n,$l===$e&&($l=0)),ti(e)}function Lg(e,a){a===0&&(a=Uh()),e=Pi(e,a),e!==null&&(sr(e,a),ti(e))}function U2(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Lg(e,n)}function I2(e,a){var n=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(a),Lg(e,n)}function P2(e,a){return Uc(e,a)}var No=null,zl=null,Sd=!1,$o=!1,Ed=!1,Pn=0;function ti(e){e!==zl&&e.next===null&&(zl===null?No=zl=e:zl=zl.next=e),$o=!0,Sd||(Sd=!0,V2(q2))}function Vr(e,a){if(!Ed&&$o){Ed=!0;do for(var n=!1,s=No;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var d=0;else{var v=s.suspendedLanes,x=s.pingedLanes;d=(1<<31-oa(42|e)+1)-1,d&=c&~(v&~x),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(n=!0,Hg(s,d))}else d=$e,d=Bs(s,s===Fe?d:0),(d&3)===0||rr(s,d)||(n=!0,Hg(s,d));s=s.next}while(n);Ed=!1}}function q2(){$o=Sd=!1;var e=0;Pn!==0&&(K2()&&(e=Pn),Pn=0);for(var a=Wa(),n=null,s=No;s!==null;){var c=s.next,d=jg(s,a);d===0?(s.next=null,n===null?No=c:n.next=c,c===null&&(zl=n)):(n=s,(e!==0||(d&3)!==0)&&($o=!0)),s=c}Vr(e)}function jg(e,a){for(var n=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-oa(d),x=1<<v,E=c[v];E===-1?((x&n)===0||(x&s)!==0)&&(c[v]=my(x,a)):E<=a&&(e.expiredLanes|=x),d&=~x}if(a=Fe,n=$e,n=Bs(e,e===a?n:0),s=e.callbackNode,n===0||e===a&&Ge===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ic(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rr(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(s!==null&&Ic(s),qh(n)){case 2:case 8:n=jh;break;case 32:n=Ds;break;case 268435456:n=Bh;break;default:n=Ds}return s=Bg.bind(null,e),n=Uc(n,s),e.callbackPriority=a,e.callbackNode=n,a}return s!==null&&s!==null&&Ic(s),e.callbackPriority=2,e.callbackNode=null,2}function Bg(e,a){var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var s=$e;return s=Bs(e,e===Fe?s:0),s===0?null:(Cg(e,s,a),jg(e,Wa()),e.callbackNode!=null&&e.callbackNode===n?Bg.bind(null,e):null)}function Hg(e,a){if(Rl())return null;Cg(e,a,!0)}function V2(e){e_(function(){(tt&6)!==0?Uc(Lh,e):e()})}function Cd(){return Pn===0&&(Pn=Hh()),Pn}function Ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qs(""+e)}function Ig(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function F2(e,a,n,s,c){if(a==="submit"&&n&&n.stateNode===c){var d=Ug((c[ta]||null).action),v=s.submitter;v&&(a=(a=v[ta]||null)?Ug(a.formAction):v.getAttribute("formAction"),a!==null&&(d=a,v=null));var x=new Ys("action","action",null,s,c);e.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Pn!==0){var E=v?Ig(c,v):new FormData(c);zu(n,{pending:!0,data:E,method:c.method,action:d},null,E)}}else typeof d=="function"&&(x.preventDefault(),E=v?Ig(c,v):new FormData(c),zu(n,{pending:!0,data:E,method:c.method,action:d},d,E))},currentTarget:c}]})}}for(var Td=0;Td<Rp.length;Td++){var Ad=Rp[Td],G2=Ad.toLowerCase(),Y2=Ad[0].toUpperCase()+Ad.slice(1);Ua(G2,"on"+Y2)}Ua(Mp,"onAnimationEnd"),Ua(Np,"onAnimationIteration"),Ua($p,"onAnimationStart"),Ua("dblclick","onDoubleClick"),Ua("focusin","onFocus"),Ua("focusout","onBlur"),Ua(u2,"onTransitionRun"),Ua(d2,"onTransitionStart"),Ua(f2,"onTransitionCancel"),Ua(Op,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fr));function Pg(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],c=s.event;s=s.listeners;e:{var d=void 0;if(a)for(var v=s.length-1;0<=v;v--){var x=s[v],E=x.instance,$=x.currentTarget;if(x=x.listener,E!==d&&c.isPropagationStopped())break e;d=x,c.currentTarget=$;try{d(c)}catch(V){go(V)}c.currentTarget=null,d=E}else for(v=0;v<s.length;v++){if(x=s[v],E=x.instance,$=x.currentTarget,x=x.listener,E!==d&&c.isPropagationStopped())break e;d=x,c.currentTarget=$;try{d(c)}catch(V){go(V)}c.currentTarget=null,d=E}}}}function Me(e,a){var n=a[qc];n===void 0&&(n=a[qc]=new Set);var s=e+"__bubble";n.has(s)||(qg(a,e,2,!1),n.add(s))}function Md(e,a,n){var s=0;a&&(s|=4),qg(n,e,s,a)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Nd(e){if(!e[Oo]){e[Oo]=!0,Gh.forEach(function(n){n!=="selectionchange"&&(X2.has(n)||Md(n,!1,e),Md(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Oo]||(a[Oo]=!0,Md("selectionchange",!1,a))}}function qg(e,a,n,s){switch(fv(a)){case 2:var c=__;break;case 8:c=x_;break;default:c=Pd}n=c.bind(null,a,n,e),c=void 0,!Zc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(a,n,{capture:!0,passive:c}):e.addEventListener(a,n,!0):c!==void 0?e.addEventListener(a,n,{passive:c}):e.addEventListener(a,n,!1)}function $d(e,a,n,s,c){var d=s;if((a&1)===0&&(a&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var x=s.stateNode.containerInfo;if(x===c||x.nodeType===8&&x.parentNode===c)break;if(v===4)for(v=s.return;v!==null;){var E=v.tag;if((E===3||E===4)&&(E=v.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;v=v.return}for(;x!==null;){if(v=wn(x),v===null)return;if(E=v.tag,E===5||E===6||E===26||E===27){s=d=v;continue e}x=x.parentNode}}s=s.return}np(function(){var $=d,V=Qc(n),Y=[];e:{var I=kp.get(e);if(I!==void 0){var q=Ys,ce=e;switch(e){case"keypress":if(Fs(n)===0)break e;case"keydown":case"keyup":q=Iy;break;case"focusin":ce="focus",q=tu;break;case"focusout":ce="blur",q=tu;break;case"beforeblur":case"afterblur":q=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Vy;break;case Mp:case Np:case $p:q=ky;break;case Op:q=Gy;break;case"scroll":case"scrollend":q=Ay;break;case"wheel":q=Xy;break;case"copy":case"cut":case"paste":q=zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=cp;break;case"toggle":case"beforetoggle":q=Wy}var ge=(a&4)!==0,nt=!ge&&(e==="scroll"||e==="scrollend"),z=ge?I!==null?I+"Capture":null:I;ge=[];for(var N=$,j;N!==null;){var G=N;if(j=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||j===null||z===null||(G=ur(N,z),G!=null&&ge.push(Gr(N,G,j))),nt)break;N=N.return}0<ge.length&&(I=new q(I,ce,null,n,V),Y.push({event:I,listeners:ge}))}}if((a&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",I&&n!==Xc&&(ce=n.relatedTarget||n.fromElement)&&(wn(ce)||ce[nl]))break e;if((q||I)&&(I=V.window===V?V:(I=V.ownerDocument)?I.defaultView||I.parentWindow:window,q?(ce=n.relatedTarget||n.toElement,q=$,ce=ce?wn(ce):null,ce!==null&&(nt=J(ce),ge=ce.tag,ce!==nt||ge!==5&&ge!==27&&ge!==6)&&(ce=null)):(q=null,ce=$),q!==ce)){if(ge=sp,G="onMouseLeave",z="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ge=cp,G="onPointerLeave",z="onPointerEnter",N="pointer"),nt=q==null?I:cr(q),j=ce==null?I:cr(ce),I=new ge(G,N+"leave",q,n,V),I.target=nt,I.relatedTarget=j,G=null,wn(V)===$&&(ge=new ge(z,N+"enter",ce,n,V),ge.target=j,ge.relatedTarget=nt,G=ge),nt=G,q&&ce)t:{for(ge=q,z=ce,N=0,j=ge;j;j=Dl(j))N++;for(j=0,G=z;G;G=Dl(G))j++;for(;0<N-j;)ge=Dl(ge),N--;for(;0<j-N;)z=Dl(z),j--;for(;N--;){if(ge===z||z!==null&&ge===z.alternate)break t;ge=Dl(ge),z=Dl(z)}ge=null}else ge=null;q!==null&&Vg(Y,I,q,ge,!1),ce!==null&&nt!==null&&Vg(Y,nt,ce,ge,!0)}}e:{if(I=$?cr($):window,q=I.nodeName&&I.nodeName.toLowerCase(),q==="select"||q==="input"&&I.type==="file")var se=vp;else if(mp(I))if(bp)se=r2;else{se=n2;var we=i2}else q=I.nodeName,!q||q.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?$&&Yc($.elementType)&&(se=vp):se=l2;if(se&&(se=se(e,$))){gp(Y,se,n,V);break e}we&&we(e,I,$),e==="focusout"&&$&&I.type==="number"&&$.memoizedProps.value!=null&&Gc(I,"number",I.value)}switch(we=$?cr($):window,e){case"focusin":(mp(we)||we.contentEditable==="true")&&(hl=we,su=$,br=null);break;case"focusout":br=su=hl=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Tp(Y,n,V);break;case"selectionchange":if(c2)break;case"keydown":case"keyup":Tp(Y,n,V)}var fe;if(iu)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else fl?hp(e,n)&&(he="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(he="onCompositionStart");he&&(up&&n.locale!=="ko"&&(fl||he!=="onCompositionStart"?he==="onCompositionEnd"&&fl&&(fe=lp()):(Ii=V,Kc="value"in Ii?Ii.value:Ii.textContent,fl=!0)),we=ko($,he),0<we.length&&(he=new op(he,e,null,n,V),Y.push({event:he,listeners:we}),fe?he.data=fe:(fe=pp(n),fe!==null&&(he.data=fe)))),(fe=Ky?Jy(e,n):e2(e,n))&&(he=ko($,"onBeforeInput"),0<he.length&&(we=new op("onBeforeInput","beforeinput",null,n,V),Y.push({event:we,listeners:he}),we.data=fe)),F2(Y,e,$,n,V)}Pg(Y,a)})}function Gr(e,a,n){return{instance:e,listener:a,currentTarget:n}}function ko(e,a){for(var n=a+"Capture",s=[];e!==null;){var c=e,d=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=ur(e,n),c!=null&&s.unshift(Gr(e,c,d)),c=ur(e,a),c!=null&&s.push(Gr(e,c,d))),e=e.return}return s}function Dl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vg(e,a,n,s,c){for(var d=a._reactName,v=[];n!==null&&n!==s;){var x=n,E=x.alternate,$=x.stateNode;if(x=x.tag,E!==null&&E===s)break;x!==5&&x!==26&&x!==27||$===null||(E=$,c?($=ur(n,d),$!=null&&v.unshift(Gr(n,$,E))):c||($=ur(n,d),$!=null&&v.push(Gr(n,$,E)))),n=n.return}v.length!==0&&e.push({event:a,listeners:v})}var Q2=/\r\n?/g,W2=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(Q2,`
`).replace(W2,"")}function Gg(e,a){return a=Fg(a),Fg(e)===a}function Ro(){}function Ie(e,a,n,s,c,d){switch(n){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||cl(e,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&cl(e,""+s);break;case"className":Us(e,"class",s);break;case"tabIndex":Us(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Us(e,n,s);break;case"style":ap(e,s,d);break;case"data":if(a!=="object"){Us(e,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=qs(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(a!=="input"&&Ie(e,a,"name",c.name,c,null),Ie(e,a,"formEncType",c.formEncType,c,null),Ie(e,a,"formMethod",c.formMethod,c,null),Ie(e,a,"formTarget",c.formTarget,c,null)):(Ie(e,a,"encType",c.encType,c,null),Ie(e,a,"method",c.method,c,null),Ie(e,a,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=qs(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=Ro);break;case"onScroll":s!=null&&Me("scroll",e);break;case"onScrollEnd":s!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(n=s.__html,n!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=qs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Hs(e,"popover",s);break;case"xlinkActuate":gi(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gi(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gi(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gi(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gi(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gi(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gi(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Hs(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Cy.get(n)||n,Hs(e,n,s))}}function Od(e,a,n,s,c,d){switch(n){case"style":ap(e,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(n=s.__html,n!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof s=="string"?cl(e,s):(typeof s=="number"||typeof s=="bigint")&&cl(e,""+s);break;case"onScroll":s!=null&&Me("scroll",e);break;case"onScrollEnd":s!=null&&Me("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ro);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yh.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),a=n.slice(2,c?n.length-7:void 0),d=e[ta]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(a,d,c),typeof s=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,s,c);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):Hs(e,n,s)}}}function Dt(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var s=!1,c=!1,d;for(d in n)if(n.hasOwnProperty(d)){var v=n[d];if(v!=null)switch(d){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ie(e,a,d,v,n,null)}}c&&Ie(e,a,"srcSet",n.srcSet,n,null),s&&Ie(e,a,"src",n.src,n,null);return;case"input":Me("invalid",e);var x=d=v=c=null,E=null,$=null;for(s in n)if(n.hasOwnProperty(s)){var V=n[s];if(V!=null)switch(s){case"name":c=V;break;case"type":v=V;break;case"checked":E=V;break;case"defaultChecked":$=V;break;case"value":d=V;break;case"defaultValue":x=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(r(137,a));break;default:Ie(e,a,s,V,n,null)}}Kh(e,d,x,E,$,v,c,!1),Is(e);return;case"select":Me("invalid",e),s=v=d=null;for(c in n)if(n.hasOwnProperty(c)&&(x=n[c],x!=null))switch(c){case"value":d=x;break;case"defaultValue":v=x;break;case"multiple":s=x;default:Ie(e,a,c,x,n,null)}a=d,n=v,e.multiple=!!s,a!=null?ol(e,!!s,a,!1):n!=null&&ol(e,!!s,n,!0);return;case"textarea":Me("invalid",e),d=c=s=null;for(v in n)if(n.hasOwnProperty(v)&&(x=n[v],x!=null))switch(v){case"value":s=x;break;case"defaultValue":c=x;break;case"children":d=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(91));break;default:Ie(e,a,v,x,n,null)}ep(e,s,c,d),Is(e);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(s=n[E],s!=null))switch(E){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(e,a,E,s,n,null)}return;case"dialog":Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(s=0;s<Fr.length;s++)Me(Fr[s],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in n)if(n.hasOwnProperty($)&&(s=n[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ie(e,a,$,s,n,null)}return;default:if(Yc(a)){for(V in n)n.hasOwnProperty(V)&&(s=n[V],s!==void 0&&Od(e,a,V,s,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(s=n[x],s!=null&&Ie(e,a,x,s,n,null))}function Z2(e,a,n,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,x=null,E=null,$=null,V=null;for(q in n){var Y=n[q];if(n.hasOwnProperty(q)&&Y!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":E=Y;default:s.hasOwnProperty(q)||Ie(e,a,q,null,s,Y)}}for(var I in s){var q=s[I];if(Y=n[I],s.hasOwnProperty(I)&&(q!=null||Y!=null))switch(I){case"type":d=q;break;case"name":c=q;break;case"checked":$=q;break;case"defaultChecked":V=q;break;case"value":v=q;break;case"defaultValue":x=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:q!==Y&&Ie(e,a,I,q,s,Y)}}Fc(e,v,x,E,$,V,d,c);return;case"select":q=v=x=I=null;for(d in n)if(E=n[d],n.hasOwnProperty(d)&&E!=null)switch(d){case"value":break;case"multiple":q=E;default:s.hasOwnProperty(d)||Ie(e,a,d,null,s,E)}for(c in s)if(d=s[c],E=n[c],s.hasOwnProperty(c)&&(d!=null||E!=null))switch(c){case"value":I=d;break;case"defaultValue":x=d;break;case"multiple":v=d;default:d!==E&&Ie(e,a,c,d,s,E)}a=x,n=v,s=q,I!=null?ol(e,!!n,I,!1):!!s!=!!n&&(a!=null?ol(e,!!n,a,!0):ol(e,!!n,n?[]:"",!1));return;case"textarea":q=I=null;for(x in n)if(c=n[x],n.hasOwnProperty(x)&&c!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Ie(e,a,x,null,s,c)}for(v in s)if(c=s[v],d=n[v],s.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":I=c;break;case"defaultValue":q=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Ie(e,a,v,c,s,d)}Jh(e,I,q);return;case"option":for(var ce in n)if(I=n[ce],n.hasOwnProperty(ce)&&I!=null&&!s.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Ie(e,a,ce,null,s,I)}for(E in s)if(I=s[E],q=n[E],s.hasOwnProperty(E)&&I!==q&&(I!=null||q!=null))switch(E){case"selected":e.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Ie(e,a,E,I,s,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in n)I=n[ge],n.hasOwnProperty(ge)&&I!=null&&!s.hasOwnProperty(ge)&&Ie(e,a,ge,null,s,I);for($ in s)if(I=s[$],q=n[$],s.hasOwnProperty($)&&I!==q&&(I!=null||q!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,a));break;default:Ie(e,a,$,I,s,q)}return;default:if(Yc(a)){for(var nt in n)I=n[nt],n.hasOwnProperty(nt)&&I!==void 0&&!s.hasOwnProperty(nt)&&Od(e,a,nt,void 0,s,I);for(V in s)I=s[V],q=n[V],!s.hasOwnProperty(V)||I===q||I===void 0&&q===void 0||Od(e,a,V,I,s,q);return}}for(var z in n)I=n[z],n.hasOwnProperty(z)&&I!=null&&!s.hasOwnProperty(z)&&Ie(e,a,z,null,s,I);for(Y in s)I=s[Y],q=n[Y],!s.hasOwnProperty(Y)||I===q||I==null&&q==null||Ie(e,a,Y,I,s,q)}var kd=null,Rd=null;function zo(e){return e.nodeType===9?e:e.ownerDocument}function Yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function zd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Dd=null;function K2(){var e=window.event;return e&&e.type==="popstate"?e===Dd?!1:(Dd=e,!0):(Dd=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,J2=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,e_=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(e){return Wg.resolve(null).then(e).catch(t_)}:Qg;function t_(e){setTimeout(function(){throw e})}function Ld(e,a){var n=a,s=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(s===0){e.removeChild(c),es(a);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=c}while(n);es(a)}function jd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":jd(n),Vc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function a_(e,a,n,s){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[or])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=qa(e.nextSibling),e===null)break}return null}function i_(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=qa(e.nextSibling),e===null))return null;return e}function qa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}function Zg(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(a===0)return e;a--}else n==="/$"&&a++}e=e.previousSibling}return null}function Kg(e,a,n){switch(a=zo(n),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var $a=new Map,Jg=new Set;function Do(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Oi=pe.d;pe.d={f:n_,r:l_,D:r_,C:s_,L:o_,m:c_,X:d_,S:u_,M:f_};function n_(){var e=Oi.f(),a=Ao();return e||a}function l_(e){var a=ll(e);a!==null&&a.tag===5&&a.type==="form"?Tm(a):Oi.r(e)}var Ll=typeof document>"u"?null:document;function ev(e,a,n){var s=Ll;if(s&&typeof a=="string"&&a){var c=_a(a);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),Jg.has(c)||(Jg.add(c),e={rel:e,crossOrigin:n,href:a},s.querySelector(c)===null&&(a=s.createElement("link"),Dt(a,"link",e),St(a),s.head.appendChild(a)))}}function r_(e){Oi.D(e),ev("dns-prefetch",e,null)}function s_(e,a){Oi.C(e,a),ev("preconnect",e,a)}function o_(e,a,n){Oi.L(e,a,n);var s=Ll;if(s&&e&&a){var c='link[rel="preload"][as="'+_a(a)+'"]';a==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+_a(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+_a(n.imageSizes)+'"]')):c+='[href="'+_a(e)+'"]';var d=c;switch(a){case"style":d=jl(e);break;case"script":d=Bl(e)}$a.has(d)||(e=F({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),$a.set(d,e),s.querySelector(c)!==null||a==="style"&&s.querySelector(Yr(d))||a==="script"&&s.querySelector(Xr(d))||(a=s.createElement("link"),Dt(a,"link",e),St(a),s.head.appendChild(a)))}}function c_(e,a){Oi.m(e,a);var n=Ll;if(n&&e){var s=a&&typeof a.as=="string"?a.as:"script",c='link[rel="modulepreload"][as="'+_a(s)+'"][href="'+_a(e)+'"]',d=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Bl(e)}if(!$a.has(d)&&(e=F({rel:"modulepreload",href:e},a),$a.set(d,e),n.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xr(d)))return}s=n.createElement("link"),Dt(s,"link",e),St(s),n.head.appendChild(s)}}}function u_(e,a,n){Oi.S(e,a,n);var s=Ll;if(s&&e){var c=rl(s).hoistableStyles,d=jl(e);a=a||"default";var v=c.get(d);if(!v){var x={loading:0,preload:null};if(v=s.querySelector(Yr(d)))x.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":a},n),(n=$a.get(d))&&Bd(e,n);var E=v=s.createElement("link");St(E),Dt(E,"link",e),E._p=new Promise(function($,V){E.onload=$,E.onerror=V}),E.addEventListener("load",function(){x.loading|=1}),E.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Lo(v,a,s)}v={type:"stylesheet",instance:v,count:1,state:x},c.set(d,v)}}}function d_(e,a){Oi.X(e,a);var n=Ll;if(n&&e){var s=rl(n).hoistableScripts,c=Bl(e),d=s.get(c);d||(d=n.querySelector(Xr(c)),d||(e=F({src:e,async:!0},a),(a=$a.get(c))&&Hd(e,a),d=n.createElement("script"),St(d),Dt(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function f_(e,a){Oi.M(e,a);var n=Ll;if(n&&e){var s=rl(n).hoistableScripts,c=Bl(e),d=s.get(c);d||(d=n.querySelector(Xr(c)),d||(e=F({src:e,async:!0,type:"module"},a),(a=$a.get(c))&&Hd(e,a),d=n.createElement("script"),St(d),Dt(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function tv(e,a,n,s){var c=(c=Bi.current)?Do(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=jl(n.href),n=rl(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=jl(n.href);var d=rl(c).hoistableStyles,v=d.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=c.querySelector(Yr(e)))&&!d._p&&(v.instance=d,v.state.loading=5),$a.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$a.set(e,n),d||h_(c,e,n,v.state))),a&&s===null)throw Error(r(528,""));return v}if(a&&s!==null)throw Error(r(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Bl(n),n=rl(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function jl(e){return'href="'+_a(e)+'"'}function Yr(e){return'link[rel="stylesheet"]['+e+"]"}function av(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function h_(e,a,n,s){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=e.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),Dt(a,"link",n),St(a),e.head.appendChild(a))}function Bl(e){return'[src="'+_a(e)+'"]'}function Xr(e){return"script[async]"+e}function iv(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var s=e.querySelector('style[data-href~="'+_a(n.href)+'"]');if(s)return a.instance=s,St(s),s;var c=F({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),St(s),Dt(s,"style",c),Lo(s,n.precedence,e),a.instance=s;case"stylesheet":c=jl(n.href);var d=e.querySelector(Yr(c));if(d)return a.state.loading|=4,a.instance=d,St(d),d;s=av(n),(c=$a.get(c))&&Bd(s,c),d=(e.ownerDocument||e).createElement("link"),St(d);var v=d;return v._p=new Promise(function(x,E){v.onload=x,v.onerror=E}),Dt(d,"link",s),a.state.loading|=4,Lo(d,n.precedence,e),a.instance=d;case"script":return d=Bl(n.src),(c=e.querySelector(Xr(d)))?(a.instance=c,St(c),c):(s=n,(c=$a.get(d))&&(s=F({},n),Hd(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),St(c),Dt(c,"link",s),e.head.appendChild(c),a.instance=c);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,Lo(s,n.precedence,e));return a.instance}function Lo(e,a,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,d=c,v=0;v<s.length;v++){var x=s[v];if(x.dataset.precedence===a)d=x;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function Bd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Hd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var jo=null;function nv(e,a,n){if(jo===null){var s=new Map,c=jo=new Map;c.set(n,s)}else c=jo,s=c.get(n),s||(s=new Map,c.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var d=n[c];if(!(d[or]||d[Ht]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(a)||"";v=e+v;var x=s.get(v);x?x.push(d):s.set(v,[d])}}return s}function lv(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function p_(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function rv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Qr=null;function m_(){}function g_(e,a,n){if(Qr===null)throw Error(r(475));var s=Qr;if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=jl(n.href),d=e.querySelector(Yr(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Bo.bind(s),e.then(s,s)),a.state.loading|=4,a.instance=d,St(d);return}d=e.ownerDocument||e,n=av(n),(c=$a.get(c))&&Bd(n,c),d=d.createElement("link"),St(d);var v=d;v._p=new Promise(function(x,E){v.onload=x,v.onerror=E}),Dt(d,"link",n),a.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(s.count++,a=Bo.bind(s),e.addEventListener("load",a),e.addEventListener("error",a))}}function v_(){if(Qr===null)throw Error(r(475));var e=Qr;return e.stylesheets&&e.count===0&&Ud(e,e.stylesheets),0<e.count?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ud(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Bo(){if(this.count--,this.count===0){if(this.stylesheets)Ud(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ho=null;function Ud(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ho=new Map,a.forEach(b_,e),Ho=null,Bo.call(e))}function b_(e,a){if(!(a.state.loading&4)){var n=Ho.get(e);if(n)var s=n.get(null);else{n=new Map,Ho.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),s=v)}s&&n.set(null,s)}c=a.instance,v=c.getAttribute("data-precedence"),d=n.get(v)||s,d===s&&n.set(null,c),n.set(v,c),this.count++,s=Bo.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),a.state.loading|=4}}var Wr={$$typeof:_,Provider:null,Consumer:null,_currentValue:Xe,_currentValue2:Xe,_threadCount:0};function y_(e,a,n,s,c,d,v,x){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.hiddenUpdates=Pc(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function sv(e,a,n,s,c,d,v,x,E,$,V,Y){return e=new y_(e,a,n,v,x,E,$,Y),a=1,d===!0&&(a|=24),d=Ma(3,null,null,a),e.current=d,d.stateNode=e,a=bu(),a.refCount++,e.pooledCache=a,a.refCount++,d.memoizedState={element:s,isDehydrated:n,cache:a},Ku(d),e}function ov(e){return e?(e=gl,e):gl}function cv(e,a,n,s,c,d){c=ov(c),s.context===null?s.context=c:s.pendingContext=c,s=Qi(a),s.payload={element:n},d=d===void 0?null:d,d!==null&&(s.callback=d),n=Wi(e,s,a),n!==null&&(Yt(n,e,a),Rr(n,e,a))}function uv(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function Id(e,a){uv(e,a),(e=e.alternate)&&uv(e,a)}function dv(e){if(e.tag===13){var a=Pi(e,67108864);a!==null&&Yt(a,e,67108864),Id(e,67108864)}}var Uo=!0;function __(e,a,n,s){var c=P.T;P.T=null;var d=pe.p;try{pe.p=2,Pd(e,a,n,s)}finally{pe.p=d,P.T=c}}function x_(e,a,n,s){var c=P.T;P.T=null;var d=pe.p;try{pe.p=8,Pd(e,a,n,s)}finally{pe.p=d,P.T=c}}function Pd(e,a,n,s){if(Uo){var c=qd(s);if(c===null)$d(e,a,s,Io,n),hv(e,s);else if(S_(c,e,a,n,s))s.stopPropagation();else if(hv(e,s),a&4&&-1<w_.indexOf(e)){for(;c!==null;){var d=ll(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=xn(d.pendingLanes);if(v!==0){var x=d;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var E=1<<31-oa(v);x.entanglements[1]|=E,v&=~E}ti(d),(tt&6)===0&&(Eo=Wa()+500,Vr(0))}}break;case 13:x=Pi(d,2),x!==null&&Yt(x,d,2),Ao(),Id(d,2)}if(d=qd(s),d===null&&$d(e,a,s,Io,n),d===c)break;c=d}c!==null&&s.stopPropagation()}else $d(e,a,s,null,n)}}function qd(e){return e=Qc(e),Vd(e)}var Io=null;function Vd(e){if(Io=null,e=wn(e),e!==null){var a=J(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=oe(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Io=e,null}function fv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sy()){case Lh:return 2;case jh:return 8;case Ds:case oy:return 32;case Bh:return 268435456;default:return 32}default:return 32}}var Fd=!1,nn=null,ln=null,rn=null,Zr=new Map,Kr=new Map,sn=[],w_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hv(e,a){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Zr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(a.pointerId)}}function Jr(e,a,n,s,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:a,domEventName:n,eventSystemFlags:s,nativeEvent:d,targetContainers:[c]},a!==null&&(a=ll(a),a!==null&&dv(a)),e):(e.eventSystemFlags|=s,a=e.targetContainers,c!==null&&a.indexOf(c)===-1&&a.push(c),e)}function S_(e,a,n,s,c){switch(a){case"focusin":return nn=Jr(nn,e,a,n,s,c),!0;case"dragenter":return ln=Jr(ln,e,a,n,s,c),!0;case"mouseover":return rn=Jr(rn,e,a,n,s,c),!0;case"pointerover":var d=c.pointerId;return Zr.set(d,Jr(Zr.get(d)||null,e,a,n,s,c)),!0;case"gotpointercapture":return d=c.pointerId,Kr.set(d,Jr(Kr.get(d)||null,e,a,n,s,c)),!0}return!1}function pv(e){var a=wn(e.target);if(a!==null){var n=J(a);if(n!==null){if(a=n.tag,a===13){if(a=oe(n),a!==null){e.blockedOn=a,vy(e.priority,function(){if(n.tag===13){var s=ha(),c=Pi(n,s);c!==null&&Yt(c,n,s),Id(n,s)}});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=qd(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Xc=s,n.target.dispatchEvent(s),Xc=null}else return a=ll(n),a!==null&&dv(a),e.blockedOn=n,!1;a.shift()}return!0}function mv(e,a,n){Po(e)&&n.delete(a)}function E_(){Fd=!1,nn!==null&&Po(nn)&&(nn=null),ln!==null&&Po(ln)&&(ln=null),rn!==null&&Po(rn)&&(rn=null),Zr.forEach(mv),Kr.forEach(mv)}function qo(e,a){e.blockedOn===a&&(e.blockedOn=null,Fd||(Fd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,E_)))}var Vo=null;function gv(e){Vo!==e&&(Vo=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Vo===e&&(Vo=null);for(var a=0;a<e.length;a+=3){var n=e[a],s=e[a+1],c=e[a+2];if(typeof s!="function"){if(Vd(s||n)===null)continue;break}var d=ll(n);d!==null&&(e.splice(a,3),a-=3,zu(d,{pending:!0,data:c,method:n.method,action:s},s,c))}}))}function es(e){function a(E){return qo(E,e)}nn!==null&&qo(nn,e),ln!==null&&qo(ln,e),rn!==null&&qo(rn,e),Zr.forEach(a),Kr.forEach(a);for(var n=0;n<sn.length;n++){var s=sn[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)pv(n),n.blockedOn===null&&sn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var c=n[s],d=n[s+1],v=c[ta]||null;if(typeof d=="function")v||gv(n);else if(v){var x=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[ta]||null)x=v.formAction;else if(Vd(c)!==null)continue}else x=v.action;typeof x=="function"?n[s+1]=x:(n.splice(s,3),s-=3),gv(n)}}}function Gd(e){this._internalRoot=e}Fo.prototype.render=Gd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var n=a.current,s=ha();cv(n,s,e,a,null,null)},Fo.prototype.unmount=Gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;e.tag===0&&Rl(),cv(e.current,2,null,e,null,null),Ao(),a[nl]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var a=Vh();e={blockedOn:null,target:e,priority:a};for(var n=0;n<sn.length&&a!==0&&a<sn[n].priority;n++);sn.splice(n,0,e),n===0&&pv(e)}};var vv=i.version;if(vv!=="19.0.0")throw Error(r(527,vv,"19.0.0"));pe.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=st(a),e=e!==null?Ae(e):null,e=e===null?null:e.stateNode,e};var C_={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:P,findFiberByHostInstance:wn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{lr=Go.inject(C_),sa=Go}catch{}}return ts.createRoot=function(e,a){if(!o(e))throw Error(r(299));var n=!1,s="",c=zm,d=Dm,v=Lm,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks)),a=sv(e,1,!1,null,null,n,s,c,d,v,x,null),e[nl]=a.current,Nd(e.nodeType===8?e.parentNode:e),new Gd(a)},ts.hydrateRoot=function(e,a,n){if(!o(e))throw Error(r(299));var s=!1,c="",d=zm,v=Dm,x=Lm,E=null,$=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks),n.formState!==void 0&&($=n.formState)),a=sv(e,1,!0,a,n??null,s,c,d,v,x,E,$),a.context=ov(null),n=a.current,s=ha(),c=Qi(s),c.callback=null,Wi(n,c,s),a.current.lanes=s,sr(a,s),ti(a),e[nl]=a.current,Nd(e),new Fo(a)},ts.version="19.0.0",ts}var zv;function Bx(){if(zv)return Xd.exports;zv=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Xd.exports=jx(),Xd.exports}var Hx=Bx(),Of="";function kf(t){Of=t}function Ux(t=""){if(!Of){const i=[...document.getElementsByTagName("script")],l=i.find(r=>r.hasAttribute("data-shoelace"));if(l)kf(l.getAttribute("data-shoelace"));else{const r=i.find(u=>/shoelace(\.min)?\.js($|\?)/.test(u.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(u.src));let o="";r&&(o=r.getAttribute("src")),kf(o.split("/").slice(0,-1).join("/"))}}return Of.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var yb=Object.defineProperty,Ix=Object.defineProperties,Px=Object.getOwnPropertyDescriptor,qx=Object.getOwnPropertyDescriptors,Dv=Object.getOwnPropertySymbols,Vx=Object.prototype.hasOwnProperty,Fx=Object.prototype.propertyIsEnumerable,Zd=(t,i)=>(i=Symbol[t])?i:Symbol.for("Symbol."+t),lh=t=>{throw TypeError(t)},Lv=(t,i,l)=>i in t?yb(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l,bn=(t,i)=>{for(var l in i||(i={}))Vx.call(i,l)&&Lv(t,l,i[l]);if(Dv)for(var l of Dv(i))Fx.call(i,l)&&Lv(t,l,i[l]);return t},Ec=(t,i)=>Ix(t,qx(i)),C=(t,i,l,r)=>{for(var o=r>1?void 0:r?Px(i,l):i,u=t.length-1,f;u>=0;u--)(f=t[u])&&(o=(r?f(i,l,o):f(o))||o);return r&&o&&yb(i,l,o),o},_b=(t,i,l)=>i.has(t)||lh("Cannot "+l),Gx=(t,i,l)=>(_b(t,i,"read from private field"),i.get(t)),Yx=(t,i,l)=>i.has(t)?lh("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,l),Xx=(t,i,l,r)=>(_b(t,i,"write to private field"),i.set(t,l),l),Qx=function(t,i){this[0]=t,this[1]=i},Wx=t=>{var i=t[Zd("asyncIterator")],l=!1,r,o={};return i==null?(i=t[Zd("iterator")](),r=u=>o[u]=f=>i[u](f)):(i=i.call(t),r=u=>o[u]=f=>{if(l){if(l=!1,u==="throw")throw f;return f}return l=!0,{done:!1,value:new Qx(new Promise(h=>{var g=i[u](f);g instanceof Object||lh("Object expected"),h(g)}),1)}}),o[Zd("iterator")]=()=>o,r("next"),"throw"in i?r("throw"):o.throw=u=>{throw u},"return"in i&&r("return"),o},Zx=(function(){var t=function(i,l){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(r[u]=o[u])},t(i,l)};return function(i,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");t(i,l);function r(){this.constructor=i}i.prototype=l===null?Object.create(l):(r.prototype=l.prototype,new r)}})(),xb=function(t,i,l,r){function o(u){return u instanceof l?u:new l((function(f){f(u)}))}return new(l||(l=Promise))((function(u,f){function h(b){try{p(r.next(b))}catch(y){f(y)}}function g(b){try{p(r.throw(b))}catch(y){f(y)}}function p(b){b.done?u(b.value):o(b.value).then(h,g)}p((r=r.apply(t,i||[])).next())}))},wb=function(t,i){var l={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},r,o,u,f;return f={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function h(p){return function(b){return g([p,b])}}function g(p){if(r)throw new TypeError("Generator is already executing.");for(;f&&(f=0,p[0]&&(l=0)),l;)try{if(r=1,o&&(u=p[0]&2?o.return:p[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,p[1])).done)return u;switch(o=0,u&&(p=[p[0]&2,u.value]),p[0]){case 0:case 1:u=p;break;case 4:return l.label++,{value:p[1],done:!1};case 5:l.label++,o=p[1],p=[0];continue;case 7:p=l.ops.pop(),l.trys.pop();continue;default:if(u=l.trys,!(u=u.length>0&&u[u.length-1])&&(p[0]===6||p[0]===2)){l=0;continue}if(p[0]===3&&(!u||p[1]>u[0]&&p[1]<u[3])){l.label=p[1];break}if(p[0]===6&&l.label<u[1]){l.label=u[1],u=p;break}if(u&&l.label<u[2]){l.label=u[2],l.ops.push(p);break}u[2]&&l.ops.pop(),l.trys.pop();continue}p=i.call(t,l)}catch(b){p=[6,b],o=0}finally{r=u=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},jv=function(t,i,l){if(l||arguments.length===2)for(var r=0,o=i.length,u;r<o;r++)(u||!(r in i))&&(u||(u=Array.prototype.slice.call(i,0,r)),u[r]=i[r]);return t.concat(u||Array.prototype.slice.call(i))},Kx="ionicpwaelements",nc,Sb,pa=!1,Rf=!1,Di=function(t,i){return function(){}},Jx=function(t,i){return function(){}},ew="{visibility:hidden}.hydrated{visibility:inherit}",Bv={},tw="http://www.w3.org/2000/svg",aw="http://www.w3.org/1999/xhtml",iw=function(t){return t!=null},rh=function(t){return t=typeof t,t==="object"||t==="function"};function Eb(t){var i,l,r;return(r=(l=(i=t.head)===null||i===void 0?void 0:i.querySelector('meta[name="csp-nonce"]'))===null||l===void 0?void 0:l.getAttribute("content"))!==null&&r!==void 0?r:void 0}var nw=function(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=null,u=!1,f=!1,h=[],g=function(y){for(var w=0;w<y.length;w++)o=y[w],Array.isArray(o)?g(o):o!=null&&typeof o!="boolean"&&((u=typeof t!="function"&&!rh(o))&&(o=String(o)),u&&f?h[h.length-1].$text$+=o:h.push(u?zf(null,o):o),f=u)};if(g(l),i){var p=i.className||i.class;p&&(i.class=typeof p!="object"?p:Object.keys(p).filter((function(y){return p[y]})).join(" "))}var b=zf(t,null);return b.$attrs$=i,h.length>0&&(b.$children$=h),b},zf=function(t,i){var l={$flags$:0,$tag$:t,$text$:i,$elm$:null,$children$:null};return l.$attrs$=null,l},lw={},rw=function(t){return t&&t.$tag$===lw},sw=function(t,i){return t!=null&&!rh(t)?i&4?t==="false"?!1:t===""||!!t:i&2?parseFloat(t):i&1?String(t):t:t},ow=function(t){return yn(t).$hostElement$},wA=function(t,i,l){var r=ow(t);return{emit:function(o){return Cb(r,i,{bubbles:!0,composed:!0,cancelable:!0,detail:o})}}},Cb=function(t,i,l){var r=Mt.ce(i,l);return t.dispatchEvent(r),r},Hv=new WeakMap,cw=function(t,i,l){var r=hc.get(t);kw&&l?(r=r||new CSSStyleSheet,typeof r=="string"?r=i:r.replaceSync(i)):r=i,hc.set(t,r)},uw=function(t,i,l,r){var o,u=Tb(i),f=hc.get(u);if(t=t.nodeType===11?t:Fa,f)if(typeof f=="string"){t=t.head||t;var h=Hv.get(t),g=void 0;if(h||Hv.set(t,h=new Set),!h.has(u)){{g=Fa.createElement("style"),g.innerHTML=f;var p=(o=Mt.$nonce$)!==null&&o!==void 0?o:Eb(Fa);p!=null&&g.setAttribute("nonce",p),t.insertBefore(g,t.querySelector("link"))}h&&h.add(u)}}else t.adoptedStyleSheets.includes(f)||(t.adoptedStyleSheets=jv(jv([],t.adoptedStyleSheets,!0),[f],!1));return u},dw=function(t){var i=t.$cmpMeta$,l=t.$hostElement$,r=i.$flags$,o=Di("attachStyles",i.$tagName$),u=uw(l.shadowRoot?l.shadowRoot:l.getRootNode(),i);r&10&&(l["s-sc"]=u,l.classList.add(u+"-h")),o()},Tb=function(t,i){return"sc-"+t.$tagName$},Uv=function(t,i,l,r,o,u){if(l!==r){var f=Pv(t,i),h=i.toLowerCase();if(i==="class"){var g=t.classList,p=Iv(l),b=Iv(r);g.remove.apply(g,p.filter((function(S){return S&&!b.includes(S)}))),g.add.apply(g,b.filter((function(S){return S&&!p.includes(S)})))}else if(i==="style"){for(var y in l)(!r||r[y]==null)&&(y.includes("-")?t.style.removeProperty(y):t.style[y]="");for(var y in r)(!l||r[y]!==l[y])&&(y.includes("-")?t.style.setProperty(y,r[y]):t.style[y]=r[y])}else if(i==="ref")r&&r(t);else if(!f&&i[0]==="o"&&i[1]==="n")i[2]==="-"?i=i.slice(3):Pv(Tc,h)?i=h.slice(2):i=h[2]+i.slice(3),l&&Mt.rel(t,i,l,!1),r&&Mt.ael(t,i,r,!1);else{var w=rh(r);if((f||w&&r!==null)&&!o)try{if(t.tagName.includes("-"))t[i]=r;else{var _=r??"";i==="list"?f=!1:(l==null||t[i]!=_)&&(t[i]=_)}}catch{}r==null||r===!1?(r!==!1||t.getAttribute(i)==="")&&t.removeAttribute(i):(!f||u&4||o)&&!w&&(r=r===!0?"":r,t.setAttribute(i,r))}}},fw=/\s/,Iv=function(t){return t?t.split(fw):[]},Ab=function(t,i,l,r){var o=i.$elm$.nodeType===11&&i.$elm$.host?i.$elm$.host:i.$elm$,u=t&&t.$attrs$||Bv,f=i.$attrs$||Bv;for(r in u)r in f||Uv(o,r,u[r],void 0,l,i.$flags$);for(r in f)Uv(o,r,u[r],f[r],l,i.$flags$)},sh=function(t,i,l,r){var o=i.$children$[l],u=0,f,h;if(o.$text$!==null)f=o.$elm$=Fa.createTextNode(o.$text$);else{if(pa||(pa=o.$tag$==="svg"),f=o.$elm$=Fa.createElementNS(pa?tw:aw,o.$tag$),pa&&o.$tag$==="foreignObject"&&(pa=!1),Ab(null,o,pa),iw(nc)&&f["s-si"]!==nc&&f.classList.add(f["s-si"]=nc),o.$children$)for(u=0;u<o.$children$.length;++u)h=sh(t,o,u),h&&f.appendChild(h);o.$tag$==="svg"?pa=!1:f.tagName==="foreignObject"&&(pa=!0)}return f},Mb=function(t,i,l,r,o,u){var f=t,h;for(f.shadowRoot&&f.tagName===Sb&&(f=f.shadowRoot);o<=u;++o)r[o]&&(h=sh(null,l,o),h&&(r[o].$elm$=h,f.insertBefore(h,i)))},Nb=function(t,i,l){for(var r=i;r<=l;++r){var o=t[r];if(o){var u=o.$elm$;$b(o),u&&u.remove()}}},hw=function(t,i,l,r){for(var o=0,u=0,f=i.length-1,h=i[0],g=i[f],p=r.length-1,b=r[0],y=r[p],w;o<=f&&u<=p;)h==null?h=i[++o]:g==null?g=i[--f]:b==null?b=r[++u]:y==null?y=r[--p]:Yo(h,b)?(ps(h,b),h=i[++o],b=r[++u]):Yo(g,y)?(ps(g,y),g=i[--f],y=r[--p]):Yo(h,y)?(ps(h,y),t.insertBefore(h.$elm$,g.$elm$.nextSibling),h=i[++o],y=r[--p]):Yo(g,b)?(ps(g,b),t.insertBefore(g.$elm$,h.$elm$),g=i[--f],b=r[++u]):(w=sh(i&&i[u],l,u),b=r[++u],w&&h.$elm$.parentNode.insertBefore(w,h.$elm$));o>f?Mb(t,r[p+1]==null?null:r[p+1].$elm$,l,r,u,p):u>p&&Nb(i,o,f)},Yo=function(t,i){return t.$tag$===i.$tag$},ps=function(t,i){var l=i.$elm$=t.$elm$,r=t.$children$,o=i.$children$,u=i.$tag$,f=i.$text$;f===null?(pa=u==="svg"?!0:u==="foreignObject"?!1:pa,Ab(t,i,pa),r!==null&&o!==null?hw(l,r,i,o):o!==null?(t.$text$!==null&&(l.textContent=""),Mb(l,null,i,o,0,o.length-1)):r!==null&&Nb(r,0,r.length-1),pa&&u==="svg"&&(pa=!1)):t.$text$!==f&&(l.data=f)},$b=function(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map($b)},pw=function(t,i){var l=t.$hostElement$,r=t.$vnode$||zf(null,null),o=rw(i)?i:nw(null,null,i);Sb=l.tagName,o.$tag$=null,o.$flags$|=4,t.$vnode$=o,o.$elm$=r.$elm$=l.shadowRoot||l,nc=l["s-sc"],ps(r,o)},Ob=function(t,i){i&&!t.$onRenderResolve$&&i["s-p"]&&i["s-p"].push(new Promise((function(l){return t.$onRenderResolve$=l})))},Cc=function(t,i){if(t.$flags$|=16,t.$flags$&4){t.$flags$|=512;return}Ob(t,t.$ancestorComponent$);var l=function(){return mw(t,i)};return zw(l)},mw=function(t,i){var l=Di("scheduleUpdate",t.$cmpMeta$.$tagName$),r=t.$lazyInstance$,o;return i&&(t.$flags$|=256,t.$queuedListeners$&&(t.$queuedListeners$.map((function(u){var f=u[0],h=u[1];return oh(r,f,h)})),t.$queuedListeners$=void 0)),l(),gw(o,(function(){return bw(t,r,i)}))},gw=function(t,i){return vw(t)?t.then(i):i()},vw=function(t){return t instanceof Promise||t&&t.then&&typeof t.then=="function"},bw=function(t,i,l){return xb(void 0,void 0,void 0,(function(){var r,o,u,f,h,g,p;return wb(this,(function(b){return o=t.$hostElement$,u=Di("update",t.$cmpMeta$.$tagName$),f=o["s-rc"],l&&dw(t),h=Di("render",t.$cmpMeta$.$tagName$),yw(t,i),f&&(f.map((function(y){return y()})),o["s-rc"]=void 0),h(),u(),g=(r=o["s-p"])!==null&&r!==void 0?r:[],p=function(){return _w(t)},g.length===0?p():(Promise.all(g).then(p),t.$flags$|=4,g.length=0),[2]}))}))},yw=function(t,i,l){try{i=i.render(),t.$flags$&=-17,t.$flags$|=2,pw(t,i)}catch(r){Va(r,t.$hostElement$)}return null},_w=function(t){t.$cmpMeta$.$tagName$;var i=t.$hostElement$,l=Di(),r=t.$lazyInstance$,o=t.$ancestorComponent$;t.$flags$&64?l():(t.$flags$|=64,Rb(i),oh(r,"componentDidLoad"),l(),t.$onReadyResolve$(i),o||kb()),t.$onInstanceResolve$(i),t.$onRenderResolve$&&(t.$onRenderResolve$(),t.$onRenderResolve$=void 0),t.$flags$&512&&uh((function(){return Cc(t,!1)})),t.$flags$&=-517},SA=function(t){{var i=yn(t),l=i.$hostElement$.isConnected;return l&&(i.$flags$&18)===2&&Cc(i,!1),l}},kb=function(t){Rb(Fa.documentElement),uh((function(){return Cb(Tc,"appload",{detail:{namespace:Kx}})}))},oh=function(t,i,l){if(t&&t[i])try{return t[i](l)}catch(r){Va(r)}},Rb=function(t){return t.classList.add("hydrated")},xw=function(t,i){return yn(t).$instanceValues$.get(i)},ww=function(t,i,l,r){var o=yn(t),u=o.$instanceValues$.get(i),f=o.$flags$,h=o.$lazyInstance$;l=sw(l,r.$members$[i][0]);var g=Number.isNaN(u)&&Number.isNaN(l),p=l!==u&&!g;(!(f&8)||u===void 0)&&p&&(o.$instanceValues$.set(i,l),h&&(f&18)===2&&Cc(o,!1))},zb=function(t,i,l){if(i.$members$){var r=Object.entries(i.$members$),o=t.prototype;if(r.map((function(f){var h=f[0],g=f[1][0];g&31||l&2&&g&32?Object.defineProperty(o,h,{get:function(){return xw(this,h)},set:function(p){ww(this,h,p,i)},configurable:!0,enumerable:!0}):l&1&&g&64&&Object.defineProperty(o,h,{value:function(){for(var p=[],b=0;b<arguments.length;b++)p[b]=arguments[b];var y=yn(this);return y.$onInstancePromise$.then((function(){var w;return(w=y.$lazyInstance$)[h].apply(w,p)}))}})})),l&1){var u=new Map;o.attributeChangedCallback=function(f,h,g){var p=this;Mt.jmp((function(){var b=u.get(f);if(p.hasOwnProperty(b))g=p[b],delete p[b];else if(o.hasOwnProperty(b)&&typeof p[b]=="number"&&p[b]==g)return;p[b]=g===null&&typeof p[b]=="boolean"?!1:g}))},t.observedAttributes=r.filter((function(f){f[0];var h=f[1];return h[0]&15})).map((function(f){var h=f[0],g=f[1],p=g[1]||h;return u.set(p,h),p}))}}return t},Sw=function(t,i,l,r,o){return xb(void 0,void 0,void 0,(function(){var u,f,h,g,p,b,y;return wb(this,(function(w){switch(w.label){case 0:return(i.$flags$&32)!==0?[3,3]:(i.$flags$|=32,o=Ow(l),o.then?(u=Jx(),[4,o]):[3,2]);case 1:o=w.sent(),u(),w.label=2;case 2:o.isProxied||(zb(o,l,2),o.isProxied=!0),f=Di("createInstance",l.$tagName$),i.$flags$|=8;try{new o(i)}catch(_){Va(_)}i.$flags$&=-9,f(),o.style&&(h=o.style,g=Tb(l),hc.has(g)||(p=Di("registerStyles",l.$tagName$),cw(g,h,!!(l.$flags$&1)),p())),w.label=3;case 3:return b=i.$ancestorComponent$,y=function(){return Cc(i,!0)},b&&b["s-rc"]?b["s-rc"].push(y):y(),[2]}}))}))},Ew=function(t){if((Mt.$flags$&1)===0){var i=yn(t),l=i.$cmpMeta$,r=Di("connectedCallback",l.$tagName$);if(i.$flags$&1)Db(t,i,l.$listeners$);else{i.$flags$|=1;for(var o=t;o=o.parentNode||o.host;)if(o["s-p"]){Ob(i,i.$ancestorComponent$=o);break}l.$members$&&Object.entries(l.$members$).map((function(u){var f=u[0],h=u[1][0];if(h&31&&t.hasOwnProperty(f)){var g=t[f];delete t[f],t[f]=g}})),Sw(t,i,l)}r()}},Cw=function(t){if((Mt.$flags$&1)===0){var i=yn(t),l=i.$lazyInstance$;i.$rmListeners$&&(i.$rmListeners$.map((function(r){return r()})),i.$rmListeners$=void 0),oh(l,"disconnectedCallback")}},Tw=function(t,i){i===void 0&&(i={});var l,r=Di(),o=[],u=i.exclude||[],f=Tc.customElements,h=Fa.head,g=h.querySelector("meta[charset]"),p=Fa.createElement("style"),b=[],y,w=!0;Object.assign(Mt,i),Mt.$resourcesUrl$=new URL(i.resourcesUrl||"./",Fa.baseURI).href,t.map((function(S){S[1].map((function(A){var M={$flags$:A[0],$tagName$:A[1],$members$:A[2],$listeners$:A[3]};M.$members$=A[2],M.$listeners$=A[3];var T=M.$tagName$,D=(function(H){Zx(L,H);function L(O){var W=H.call(this,O)||this;return O=W,$w(O,M),M.$flags$&1&&O.attachShadow({mode:"open"}),W}return L.prototype.connectedCallback=function(){var O=this;y&&(clearTimeout(y),y=null),w?b.push(this):Mt.jmp((function(){return Ew(O)}))},L.prototype.disconnectedCallback=function(){var O=this;Mt.jmp((function(){return Cw(O)}))},L.prototype.componentOnReady=function(){return yn(this).$onReadyPromise$},L})(HTMLElement);M.$lazyBundleId$=S[0],!u.includes(T)&&!f.get(T)&&(o.push(T),f.define(T,zb(D,M,1)))}))}));{p.innerHTML=o+ew,p.setAttribute("data-styles","");var _=(l=Mt.$nonce$)!==null&&l!==void 0?l:Eb(Fa);_!=null&&p.setAttribute("nonce",_),h.insertBefore(p,g?g.nextSibling:h.firstChild)}w=!1,b.length?b.map((function(S){return S.connectedCallback()})):Mt.jmp((function(){return y=setTimeout(kb,30)})),r()},Db=function(t,i,l,r){l&&l.map((function(o){var u=o[0],f=o[1],h=o[2],g=Mw(t,u),p=Aw(i,h),b=Nw(u);Mt.ael(g,f,p,b),(i.$rmListeners$=i.$rmListeners$||[]).push((function(){return Mt.rel(g,f,p,b)}))}))},Aw=function(t,i){return function(l){try{t.$flags$&256?t.$lazyInstance$[i](l):(t.$queuedListeners$=t.$queuedListeners$||[]).push([i,l])}catch(r){Va(r)}}},Mw=function(t,i){return i&16?Fa.body:t},Nw=function(t){return(t&2)!==0},ch=new WeakMap,yn=function(t){return ch.get(t)},EA=function(t,i){return ch.set(i.$lazyInstance$=t,i)},$w=function(t,i){var l={$flags$:0,$hostElement$:t,$cmpMeta$:i,$instanceValues$:new Map};return l.$onInstancePromise$=new Promise((function(r){return l.$onInstanceResolve$=r})),l.$onReadyPromise$=new Promise((function(r){return l.$onReadyResolve$=r})),t["s-p"]=[],t["s-rc"]=[],Db(t,l,i.$listeners$),ch.set(t,l)},Pv=function(t,i){return i in t},Va=function(t,i){return(0,console.error)(t,i)},Kd=new Map,Ow=function(t,i,l){var r=t.$tagName$.replace(/-/g,"_"),o=t.$lazyBundleId$,u=Kd.get(o);if(u)return u[r];{var f=function(h){return Kd.set(o,h),h[r]};switch(o){case"pwa-action-sheet":return Pt(()=>import("./pwa-action-sheet.entry-BNGpwme9.js"),__vite__mapDeps([0,1])).then(f,Va);case"pwa-camera-modal":return Pt(()=>import("./pwa-camera-modal.entry-BCVupdo7.js"),__vite__mapDeps([2,1])).then(f,Va);case"pwa-toast":return Pt(()=>import("./pwa-toast.entry-BvVGuABe.js"),__vite__mapDeps([3,1])).then(f,Va);case"pwa-camera-modal-instance":return Pt(()=>import("./pwa-camera-modal-instance.entry-CdYva98w.js"),__vite__mapDeps([4,1])).then(f,Va);case"pwa-camera":return Pt(()=>import("./pwa-camera.entry-C4M80ND6.js"),__vite__mapDeps([5,1])).then(f,Va)}}return Pt(()=>import("./".concat(o,".entry.js").concat("")),[]).then((function(h){return Kd.set(o,h),h[r]}),Va)},hc=new Map,Tc=typeof window<"u"?window:{},Fa=Tc.document||{head:{}},Mt={$flags$:0,$resourcesUrl$:"",jmp:function(t){return t()},raf:function(t){return requestAnimationFrame(t)},ael:function(t,i,l,r){return t.addEventListener(i,l,r)},rel:function(t,i,l,r){return t.removeEventListener(i,l,r)},ce:function(t,i){return new CustomEvent(t,i)}},Lb=function(t){return Promise.resolve(t)},kw=(function(){try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),qv=[],jb=[],Rw=function(t,i){return function(l){t.push(l),Rf||(Rf=!0,Mt.$flags$&4?uh(Df):Mt.raf(Df))}},Vv=function(t){for(var i=0;i<t.length;i++)try{t[i](performance.now())}catch(l){Va(l)}t.length=0},Df=function(){Vv(qv),Vv(jb),(Rf=qv.length>0)&&Mt.raf(Df)},uh=function(t){return Lb().then(t)},zw=Rw(jb),Dw=function(){return Lb()},Lw=function(t,i){return typeof window>"u"?Promise.resolve():Dw().then((function(){return Tw([["pwa-camera-modal",[[1,"pwa-camera-modal",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],present:[64],dismiss:[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{header:[1],cancelable:[4],options:[16],open:[32]}]]],["pwa-toast",[[1,"pwa-toast",{message:[1],duration:[2],closing:[32]}]]],["pwa-camera",[[1,"pwa-camera",{facingMode:[1,"facing-mode"],handlePhoto:[16],hidePicker:[4,"hide-picker"],handleNoDeviceError:[16],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"],photo:[32],photoSrc:[32],showShutterOverlay:[32],flashIndex:[32],hasCamera:[32],rotation:[32],deviceError:[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"]},[[16,"keyup","handleBackdropKeyUp"]]]]]],i)}))};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();const jw=(t,i,l)=>{const r=t[i];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+i+(i.split("/").length!==l?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lc=globalThis,dh=lc.ShadowRoot&&(lc.ShadyCSS===void 0||lc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fh=Symbol(),Fv=new WeakMap;let Bb=class{constructor(i,l,r){if(this._$cssResult$=!0,r!==fh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=l}get styleSheet(){let i=this.o;const l=this.t;if(dh&&i===void 0){const r=l!==void 0&&l.length===1;r&&(i=Fv.get(l)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),r&&Fv.set(l,i))}return i}toString(){return this.cssText}};const Bw=t=>new Bb(typeof t=="string"?t:t+"",void 0,fh),yt=(t,...i)=>{const l=t.length===1?t[0]:i.reduce(((r,o,u)=>r+(f=>{if(f._$cssResult$===!0)return f.cssText;if(typeof f=="number")return f;throw Error("Value passed to 'css' function must be a 'css' function result: "+f+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[u+1]),t[0]);return new Bb(l,t,fh)},Hw=(t,i)=>{if(dh)t.adoptedStyleSheets=i.map((l=>l instanceof CSSStyleSheet?l:l.styleSheet));else for(const l of i){const r=document.createElement("style"),o=lc.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=l.cssText,t.appendChild(r)}},Gv=dh?t=>t:t=>t instanceof CSSStyleSheet?(i=>{let l="";for(const r of i.cssRules)l+=r.cssText;return Bw(l)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Uw,defineProperty:Iw,getOwnPropertyDescriptor:Pw,getOwnPropertyNames:qw,getOwnPropertySymbols:Vw,getPrototypeOf:Fw}=Object,Ac=globalThis,Yv=Ac.trustedTypes,Gw=Yv?Yv.emptyScript:"",Yw=Ac.reactiveElementPolyfillSupport,gs=(t,i)=>t,Ql={toAttribute(t,i){switch(i){case Boolean:t=t?Gw:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,i){let l=t;switch(i){case Boolean:l=t!==null;break;case Number:l=t===null?null:Number(t);break;case Object:case Array:try{l=JSON.parse(t)}catch{l=null}}return l}},hh=(t,i)=>!Uw(t,i),Xv={attribute:!0,type:String,converter:Ql,reflect:!1,useDefault:!1,hasChanged:hh};Symbol.metadata??=Symbol("metadata"),Ac.litPropertyMetadata??=new WeakMap;let ql=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,l=Xv){if(l.state&&(l.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((l=Object.create(l)).wrapped=!0),this.elementProperties.set(i,l),!l.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(i,r,l);o!==void 0&&Iw(this.prototype,i,o)}}static getPropertyDescriptor(i,l,r){const{get:o,set:u}=Pw(this.prototype,i)??{get(){return this[l]},set(f){this[l]=f}};return{get:o,set(f){const h=o?.call(this);u?.call(this,f),this.requestUpdate(i,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Xv}static _$Ei(){if(this.hasOwnProperty(gs("elementProperties")))return;const i=Fw(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(gs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gs("properties"))){const l=this.properties,r=[...qw(l),...Vw(l)];for(const o of r)this.createProperty(o,l[o])}const i=this[Symbol.metadata];if(i!==null){const l=litPropertyMetadata.get(i);if(l!==void 0)for(const[r,o]of l)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[l,r]of this.elementProperties){const o=this._$Eu(l,r);o!==void 0&&this._$Eh.set(o,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const l=[];if(Array.isArray(i)){const r=new Set(i.flat(1/0).reverse());for(const o of r)l.unshift(Gv(o))}else i!==void 0&&l.push(Gv(i));return l}static _$Eu(i,l){const r=l.attribute;return r===!1?void 0:typeof r=="string"?r:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((i=>i(this)))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){const i=new Map,l=this.constructor.elementProperties;for(const r of l.keys())this.hasOwnProperty(r)&&(i.set(r,this[r]),delete this[r]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hw(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((i=>i.hostConnected?.()))}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach((i=>i.hostDisconnected?.()))}attributeChangedCallback(i,l,r){this._$AK(i,r)}_$ET(i,l){const r=this.constructor.elementProperties.get(i),o=this.constructor._$Eu(i,r);if(o!==void 0&&r.reflect===!0){const u=(r.converter?.toAttribute!==void 0?r.converter:Ql).toAttribute(l,r.type);this._$Em=i,u==null?this.removeAttribute(o):this.setAttribute(o,u),this._$Em=null}}_$AK(i,l){const r=this.constructor,o=r._$Eh.get(i);if(o!==void 0&&this._$Em!==o){const u=r.getPropertyOptions(o),f=typeof u.converter=="function"?{fromAttribute:u.converter}:u.converter?.fromAttribute!==void 0?u.converter:Ql;this._$Em=o;const h=f.fromAttribute(l,u.type);this[o]=h??this._$Ej?.get(o)??h,this._$Em=null}}requestUpdate(i,l,r){if(i!==void 0){const o=this.constructor,u=this[i];if(r??=o.getPropertyOptions(i),!((r.hasChanged??hh)(u,l)||r.useDefault&&r.reflect&&u===this._$Ej?.get(i)&&!this.hasAttribute(o._$Eu(i,r))))return;this.C(i,l,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,l,{useDefault:r,reflect:o,wrapped:u},f){r&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,f??l??this[i]),u!==!0||f!==void 0)||(this._$AL.has(i)||(this.hasUpdated||r||(l=void 0),this._$AL.set(i,l)),o===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,u]of this._$Ep)this[o]=u;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,u]of r){const{wrapped:f}=u,h=this[o];f!==!0||this._$AL.has(o)||h===void 0||this.C(o,void 0,u,h)}}let i=!1;const l=this._$AL;try{i=this.shouldUpdate(l),i?(this.willUpdate(l),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(l)):this._$EM()}catch(r){throw i=!1,this._$EM(),r}i&&this._$AE(l)}willUpdate(i){}_$AE(i){this._$EO?.forEach((l=>l.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach((l=>this._$ET(l,this[l]))),this._$EM()}updated(i){}firstUpdated(i){}};ql.elementStyles=[],ql.shadowRootOptions={mode:"open"},ql[gs("elementProperties")]=new Map,ql[gs("finalized")]=new Map,Yw?.({ReactiveElement:ql}),(Ac.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ph=globalThis,pc=ph.trustedTypes,Qv=pc?pc.createPolicy("lit-html",{createHTML:t=>t}):void 0,Hb="$lit$",fn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ub="?"+fn,Xw=`<${Ub}>`,Qn=document,_s=()=>Qn.createComment(""),xs=t=>t===null||typeof t!="object"&&typeof t!="function",mh=Array.isArray,Qw=t=>mh(t)||typeof t?.[Symbol.iterator]=="function",Jd=`[ 	
\f\r]`,as=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wv=/-->/g,Zv=/>/g,qn=RegExp(`>|${Jd}(?:([^\\s"'>=/]+)(${Jd}*=${Jd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kv=/'/g,Jv=/"/g,Ib=/^(?:script|style|textarea|title)$/i,Ww=t=>(i,...l)=>({_$litType$:t,strings:i,values:l}),Se=Ww(1),Da=Symbol.for("lit-noChange"),lt=Symbol.for("lit-nothing"),e0=new WeakMap,Gn=Qn.createTreeWalker(Qn,129);function Pb(t,i){if(!mh(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qv!==void 0?Qv.createHTML(i):i}const Zw=(t,i)=>{const l=t.length-1,r=[];let o,u=i===2?"<svg>":i===3?"<math>":"",f=as;for(let h=0;h<l;h++){const g=t[h];let p,b,y=-1,w=0;for(;w<g.length&&(f.lastIndex=w,b=f.exec(g),b!==null);)w=f.lastIndex,f===as?b[1]==="!--"?f=Wv:b[1]!==void 0?f=Zv:b[2]!==void 0?(Ib.test(b[2])&&(o=RegExp("</"+b[2],"g")),f=qn):b[3]!==void 0&&(f=qn):f===qn?b[0]===">"?(f=o??as,y=-1):b[1]===void 0?y=-2:(y=f.lastIndex-b[2].length,p=b[1],f=b[3]===void 0?qn:b[3]==='"'?Jv:Kv):f===Jv||f===Kv?f=qn:f===Wv||f===Zv?f=as:(f=qn,o=void 0);const _=f===qn&&t[h+1].startsWith("/>")?" ":"";u+=f===as?g+Xw:y>=0?(r.push(p),g.slice(0,y)+Hb+g.slice(y)+fn+_):g+fn+(y===-2?h:_)}return[Pb(t,u+(t[l]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),r]};let Lf=class qb{constructor({strings:i,_$litType$:l},r){let o;this.parts=[];let u=0,f=0;const h=i.length-1,g=this.parts,[p,b]=Zw(i,l);if(this.el=qb.createElement(p,r),Gn.currentNode=this.el.content,l===2||l===3){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(o=Gn.nextNode())!==null&&g.length<h;){if(o.nodeType===1){if(o.hasAttributes())for(const y of o.getAttributeNames())if(y.endsWith(Hb)){const w=b[f++],_=o.getAttribute(y).split(fn),S=/([.?@])?(.*)/.exec(w);g.push({type:1,index:u,name:S[2],strings:_,ctor:S[1]==="."?Jw:S[1]==="?"?eS:S[1]==="@"?tS:Mc}),o.removeAttribute(y)}else y.startsWith(fn)&&(g.push({type:6,index:u}),o.removeAttribute(y));if(Ib.test(o.tagName)){const y=o.textContent.split(fn),w=y.length-1;if(w>0){o.textContent=pc?pc.emptyScript:"";for(let _=0;_<w;_++)o.append(y[_],_s()),Gn.nextNode(),g.push({type:2,index:++u});o.append(y[w],_s())}}}else if(o.nodeType===8)if(o.data===Ub)g.push({type:2,index:u});else{let y=-1;for(;(y=o.data.indexOf(fn,y+1))!==-1;)g.push({type:7,index:u}),y+=fn.length-1}u++}}static createElement(i,l){const r=Qn.createElement("template");return r.innerHTML=i,r}};function Wl(t,i,l=t,r){if(i===Da)return i;let o=r!==void 0?l._$Co?.[r]:l._$Cl;const u=xs(i)?void 0:i._$litDirective$;return o?.constructor!==u&&(o?._$AO?.(!1),u===void 0?o=void 0:(o=new u(t),o._$AT(t,l,r)),r!==void 0?(l._$Co??=[])[r]=o:l._$Cl=o),o!==void 0&&(i=Wl(t,o._$AS(t,i.values),o,r)),i}let Kw=class{constructor(i,l){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:l},parts:r}=this._$AD,o=(i?.creationScope??Qn).importNode(l,!0);Gn.currentNode=o;let u=Gn.nextNode(),f=0,h=0,g=r[0];for(;g!==void 0;){if(f===g.index){let p;g.type===2?p=new gh(u,u.nextSibling,this,i):g.type===1?p=new g.ctor(u,g.name,g.strings,this,i):g.type===6&&(p=new aS(u,this,i)),this._$AV.push(p),g=r[++h]}f!==g?.index&&(u=Gn.nextNode(),f++)}return Gn.currentNode=Qn,o}p(i){let l=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(i,r,l),l+=r.strings.length-2):r._$AI(i[l])),l++}},gh=class Vb{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,l,r,o){this.type=2,this._$AH=lt,this._$AN=void 0,this._$AA=i,this._$AB=l,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&i?.nodeType===11&&(i=l.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,l=this){i=Wl(this,i,l),xs(i)?i===lt||i==null||i===""?(this._$AH!==lt&&this._$AR(),this._$AH=lt):i!==this._$AH&&i!==Da&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Qw(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==lt&&xs(this._$AH)?this._$AA.nextSibling.data=i:this.T(Qn.createTextNode(i)),this._$AH=i}$(i){const{values:l,_$litType$:r}=i,o=typeof r=="number"?this._$AC(i):(r.el===void 0&&(r.el=Lf.createElement(Pb(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(l);else{const u=new Kw(o,this),f=u.u(this.options);u.p(l),this.T(f),this._$AH=u}}_$AC(i){let l=e0.get(i.strings);return l===void 0&&e0.set(i.strings,l=new Lf(i)),l}k(i){mh(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let r,o=0;for(const u of i)o===l.length?l.push(r=new Vb(this.O(_s()),this.O(_s()),this,this.options)):r=l[o],r._$AI(u),o++;o<l.length&&(this._$AR(r&&r._$AB.nextSibling,o),l.length=o)}_$AR(i=this._$AA.nextSibling,l){for(this._$AP?.(!1,!0,l);i!==this._$AB;){const r=i.nextSibling;i.remove(),i=r}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},Mc=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,l,r,o,u){this.type=1,this._$AH=lt,this._$AN=void 0,this.element=i,this.name=l,this._$AM=o,this.options=u,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=lt}_$AI(i,l=this,r,o){const u=this.strings;let f=!1;if(u===void 0)i=Wl(this,i,l,0),f=!xs(i)||i!==this._$AH&&i!==Da,f&&(this._$AH=i);else{const h=i;let g,p;for(i=u[0],g=0;g<u.length-1;g++)p=Wl(this,h[r+g],l,g),p===Da&&(p=this._$AH[g]),f||=!xs(p)||p!==this._$AH[g],p===lt?i=lt:i!==lt&&(i+=(p??"")+u[g+1]),this._$AH[g]=p}f&&!o&&this.j(i)}j(i){i===lt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},Jw=class extends Mc{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===lt?void 0:i}},eS=class extends Mc{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==lt)}},tS=class extends Mc{constructor(i,l,r,o,u){super(i,l,r,o,u),this.type=5}_$AI(i,l=this){if((i=Wl(this,i,l,0)??lt)===Da)return;const r=this._$AH,o=i===lt&&r!==lt||i.capture!==r.capture||i.once!==r.once||i.passive!==r.passive,u=i!==lt&&(r===lt||o);o&&this.element.removeEventListener(this.name,this,r),u&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},aS=class{constructor(i,l,r){this.element=i,this.type=6,this._$AN=void 0,this._$AM=l,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(i){Wl(this,i)}};const iS=ph.litHtmlPolyfillSupport;iS?.(Lf,gh),(ph.litHtmlVersions??=[]).push("3.3.1");const nS=(t,i,l)=>{const r=l?.renderBefore??i;let o=r._$litPart$;if(o===void 0){const u=l?.renderBefore??null;r._$litPart$=o=new gh(i.insertBefore(_s(),u),u,void 0,l??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vh=globalThis;let vs=class extends ql{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){const l=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=nS(l,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Da}};vs._$litElement$=!0,vs.finalized=!0,vh.litElementHydrateSupport?.({LitElement:vs});const lS=vh.litElementPolyfillSupport;lS?.({LitElement:vs});(vh.litElementVersions??=[]).push("4.2.1");var rS=yt`
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
`;const jf=new Set,Vl=new Map;let Fn,bh="ltr",yh="en";const Fb=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Fb){const t=new MutationObserver(Yb);bh=document.documentElement.dir||"ltr",yh=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Gb(...t){t.map(i=>{const l=i.$code.toLowerCase();Vl.has(l)?Vl.set(l,Object.assign(Object.assign({},Vl.get(l)),i)):Vl.set(l,i),Fn||(Fn=i)}),Yb()}function Yb(){Fb&&(bh=document.documentElement.dir||"ltr",yh=document.documentElement.lang||navigator.language),[...jf.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let sS=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){jf.add(this.host)}hostDisconnected(){jf.delete(this.host)}dir(){return`${this.host.dir||bh}`.toLowerCase()}lang(){return`${this.host.lang||yh}`.toLowerCase()}getTranslationData(i){var l,r;const o=new Intl.Locale(i.replace(/_/g,"-")),u=o?.language.toLowerCase(),f=(r=(l=o?.region)===null||l===void 0?void 0:l.toLowerCase())!==null&&r!==void 0?r:"",h=Vl.get(`${u}-${f}`),g=Vl.get(u);return{locale:o,language:u,region:f,primary:h,secondary:g}}exists(i,l){var r;const{primary:o,secondary:u}=this.getTranslationData((r=l.lang)!==null&&r!==void 0?r:this.lang());return l=Object.assign({includeFallback:!1},l),!!(o&&o[i]||u&&u[i]||l.includeFallback&&Fn&&Fn[i])}term(i,...l){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let u;if(r&&r[i])u=r[i];else if(o&&o[i])u=o[i];else if(Fn&&Fn[i])u=Fn[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof u=="function"?u(...l):u}date(i,l){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),l).format(i)}number(i,l){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),l).format(i)}relativeTime(i,l,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(i,l)}};var Xb={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,i)=>`Go to slide ${t} of ${i}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Gb(Xb);var oS=Xb,ja=class extends sS{};Gb(oS);var $t=yt`
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
 */const cS={attribute:!0,type:String,converter:Ql,reflect:!1,hasChanged:hh},uS=(t=cS,i,l)=>{const{kind:r,metadata:o}=l;let u=globalThis.litPropertyMetadata.get(o);if(u===void 0&&globalThis.litPropertyMetadata.set(o,u=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),u.set(l.name,t),r==="accessor"){const{name:f}=l;return{set(h){const g=i.get.call(this);i.set.call(this,h),this.requestUpdate(f,g,t)},init(h){return h!==void 0&&this.C(f,void 0,t,h),h}}}if(r==="setter"){const{name:f}=l;return function(h){const g=this[f];i.call(this,h),this.requestUpdate(f,g,t)}}throw Error("Unsupported decorator location: "+r)};function B(t){return(i,l)=>typeof l=="object"?uS(t,i,l):((r,o,u)=>{const f=o.hasOwnProperty(u);return o.constructor.createProperty(u,r),f?Object.getOwnPropertyDescriptor(o,u):void 0})(t,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return B({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qb(t){return(i,l)=>{const r=typeof i=="function"?i:i[l];Object.assign(r,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dS=(t,i,l)=>(l.configurable=!0,l.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(t,i,l),l);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(t,i){return(l,r,o)=>{const u=f=>f.renderRoot?.querySelector(t)??null;return dS(l,r,{get(){return u(this)}})}}var rc,rt=class extends vs{constructor(){super(),Yx(this,rc,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,i])=>{this.constructor.define(t,i)})}emit(t,i){const l=new CustomEvent(t,bn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(l),l}static define(t,i=this,l={}){const r=customElements.get(t);if(!r){try{customElements.define(t,i,l)}catch{customElements.define(t,class extends i{},l)}return}let o=" (unknown version)",u=o;"version"in i&&i.version&&(o=" v"+i.version),"version"in r&&r.version&&(u=" v"+r.version),!(o&&u&&o===u)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${u} has already been registered.`)}attributeChangedCallback(t,i,l){Gx(this,rc)||(this.constructor.elementProperties.forEach((r,o)=>{r.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),Xx(this,rc,!0)),super.attributeChangedCallback(t,i,l)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((i,l)=>{t.has(l)&&this[l]==null&&(this[l]=i)})}};rc=new WeakMap;rt.version="2.20.1";rt.dependencies={};C([B()],rt.prototype,"dir",2);C([B()],rt.prototype,"lang",2);var Nc=class extends rt{constructor(){super(...arguments),this.localize=new ja(this)}render(){return Se`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Nc.styles=[$t,rS];var is=new WeakMap,ns=new WeakMap,ls=new WeakMap,ef=new WeakSet,Xo=new WeakMap,Es=class{constructor(t,i){this.handleFormData=l=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),u=this.options.value(this.host),f=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!f&&typeof o=="string"&&o.length>0&&typeof u<"u"&&(Array.isArray(u)?u.forEach(h=>{l.formData.append(o,h.toString())}):l.formData.append(o,u.toString()))},this.handleFormSubmit=l=>{var r;const o=this.options.disabled(this.host),u=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=is.get(this.form))==null||r.forEach(f=>{this.setUserInteracted(f,!0)})),this.form&&!this.form.noValidate&&!o&&!u(this.host)&&(l.preventDefault(),l.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Xo.set(this.host,[])},this.handleInteraction=l=>{const r=Xo.get(this.host);r.includes(l.type)||r.push(l.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const l=this.form.querySelectorAll("*");for(const r of l)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const l=this.form.querySelectorAll("*");for(const r of l)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=bn({form:l=>{const r=l.form;if(r){const u=l.getRootNode().querySelector(`#${r}`);if(u)return u}return l.closest("form")},name:l=>l.name,value:l=>l.value,defaultValue:l=>l.defaultValue,disabled:l=>{var r;return(r=l.disabled)!=null?r:!1},reportValidity:l=>typeof l.reportValidity=="function"?l.reportValidity():!0,checkValidity:l=>typeof l.checkValidity=="function"?l.checkValidity():!0,setValue:(l,r)=>l.value=r,assumeInteractionOn:["sl-input"]},i)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Xo.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Xo.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,is.has(this.form)?is.get(this.form).add(this.host):is.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ns.has(this.form)||(ns.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ls.has(this.form)||(ls.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=is.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ns.has(this.form)&&(this.form.reportValidity=ns.get(this.form),ns.delete(this.form)),ls.has(this.form)&&(this.form.checkValidity=ls.get(this.form),ls.delete(this.form)),this.form=void 0))}setUserInteracted(t,i){i?ef.add(t):ef.delete(t),t.requestUpdate()}doAction(t,i){if(this.form){const l=document.createElement("button");l.type=t,l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.clipPath="inset(50%)",l.style.overflow="hidden",l.style.whiteSpace="nowrap",i&&(l.name=i.name,l.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{i.hasAttribute(r)&&l.setAttribute(r,i.getAttribute(r))})),this.form.append(l),l.click(),l.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const i=this.host,l=!!ef.has(i),r=!!i.required;i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!t),i.toggleAttribute("data-valid",t),i.toggleAttribute("data-user-invalid",!t&&l),i.toggleAttribute("data-user-valid",t&&l)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const i=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||i.preventDefault(),this.host.dispatchEvent(i)||t?.preventDefault()}},_h=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ec(bn({},_h),{valid:!1,valueMissing:!0}));Object.freeze(Ec(bn({},_h),{valid:!1,customError:!0}));var fS=yt`
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
`,Kn=class{constructor(t,...i){this.slotNames=[],this.handleSlotChange=l=>{const r=l.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=i}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const i=t;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},hS={name:"default",resolver:t=>Ux(`assets/icons/${t}.svg`)},pS=hS,t0={caret:`
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
  `},mS={name:"system",resolver:t=>t in t0?`data:image/svg+xml,${encodeURIComponent(t0[t])}`:""},gS=mS,vS=[pS,gS],Bf=[];function bS(t){Bf.push(t)}function yS(t){Bf=Bf.filter(i=>i!==t)}function a0(t){return vS.find(i=>i.name===t)}var _S=yt`
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
`;function Ve(t,i){const l=bn({waitUntilFirstUpdate:!1},i);return(r,o)=>{const{update:u}=r,f=Array.isArray(t)?t:[t];r.update=function(h){f.forEach(g=>{const p=g;if(h.has(p)){const b=h.get(p),y=this[p];b!==y&&(!l.waitUntilFirstUpdate||this.hasUpdated)&&this[o](b,y)}}),u.call(this,h)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xS=(t,i)=>t?._$litType$!==void 0,wS=t=>t.strings===void 0,SS={},ES=(t,i=SS)=>t._$AH=i;var rs=Symbol(),Qo=Symbol(),tf,af=new Map,Ft=class extends rt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,i){var l;let r;if(i?.spriteSheet)return this.svg=Se`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?rs:Qo}catch{return Qo}try{const o=document.createElement("div");o.innerHTML=await r.text();const u=o.firstElementChild;if(((l=u?.tagName)==null?void 0:l.toLowerCase())!=="svg")return rs;tf||(tf=new DOMParser);const h=tf.parseFromString(u.outerHTML,"text/html").body.querySelector("svg");return h?(h.part.add("svg"),document.adoptNode(h)):rs}catch{return rs}}connectedCallback(){super.connectedCallback(),bS(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),yS(this)}getIconSource(){const t=a0(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:i,fromLibrary:l}=this.getIconSource(),r=l?a0(this.library):void 0;if(!i){this.svg=null;return}let o=af.get(i);if(o||(o=this.resolveIcon(i,r),af.set(i,o)),!this.initialRender)return;const u=await o;if(u===Qo&&af.delete(i),i===this.getIconSource().url){if(xS(u)){if(this.svg=u,r){await this.updateComplete;const f=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&f&&r.mutator(f)}return}switch(u){case Qo:case rs:this.svg=null,this.emit("sl-error");break;default:this.svg=u.cloneNode(!0),(t=r?.mutator)==null||t.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Ft.styles=[$t,_S];C([ht()],Ft.prototype,"svg",2);C([B({reflect:!0})],Ft.prototype,"name",2);C([B()],Ft.prototype,"src",2);C([B()],Ft.prototype,"label",2);C([B({reflect:!0})],Ft.prototype,"library",2);C([Ve("label")],Ft.prototype,"handleLabelChange",1);C([Ve(["name","src","library"])],Ft.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},xh=t=>(...i)=>({_$litDirective$:t,values:i});let wh=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,l,r){this._$Ct=i,this._$AM=l,this._$Ci=r}_$AS(i,l){return this.update(i,l)}update(i,l){return this.render(...l)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=xh(class extends wh{constructor(t){if(super(t),t.type!==dn.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in i)i[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(i)}const l=t.element.classList;for(const r of this.st)r in i||(l.remove(r),this.st.delete(r));for(const r in i){const o=!!i[r];o===this.st.has(r)||this.nt?.has(r)||(o?(l.add(r),this.st.add(r)):(l.remove(r),this.st.delete(r)))}return Da}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wb=Symbol.for(""),CS=t=>{if(t?.r===Wb)return t?._$litStatic$},mc=(t,...i)=>({_$litStatic$:i.reduce(((l,r,o)=>l+(u=>{if(u._$litStatic$!==void 0)return u._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${u}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[o+1]),t[0]),r:Wb}),i0=new Map,TS=t=>(i,...l)=>{const r=l.length;let o,u;const f=[],h=[];let g,p=0,b=!1;for(;p<r;){for(g=i[p];p<r&&(u=l[p],(o=CS(u))!==void 0);)g+=o+i[++p],b=!0;p!==r&&h.push(u),f.push(g),p++}if(p===r&&f.push(i[r]),b){const y=f.join("$$lit$$");(i=i0.get(y))===void 0&&(f.raw=f,i0.set(y,i=f)),l=h}return t(i,...l)},sc=TS(Se);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=t=>t??lt;var Be=class extends rt{constructor(){super(...arguments),this.formControlController=new Es(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Kn(this,"[default]","prefix","suffix"),this.localize=new ja(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:_h}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),i=t?mc`a`:mc`button`;return sc`
      <${i}
        part="base"
        class=${ft({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${be(t?void 0:this.disabled)}
        type=${be(t?void 0:this.type)}
        title=${this.title}
        name=${be(t?void 0:this.name)}
        value=${be(t?void 0:this.value)}
        href=${be(t&&!this.disabled?this.href:void 0)}
        target=${be(t?this.target:void 0)}
        download=${be(t?this.download:void 0)}
        rel=${be(t?this.rel:void 0)}
        role=${be(t?void 0:"button")}
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
        ${this.caret?sc` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?sc`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${i}>
    `}};Be.styles=[$t,fS];Be.dependencies={"sl-icon":Ft,"sl-spinner":Nc};C([We(".button")],Be.prototype,"button",2);C([ht()],Be.prototype,"hasFocus",2);C([ht()],Be.prototype,"invalid",2);C([B()],Be.prototype,"title",2);C([B({reflect:!0})],Be.prototype,"variant",2);C([B({reflect:!0})],Be.prototype,"size",2);C([B({type:Boolean,reflect:!0})],Be.prototype,"caret",2);C([B({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);C([B({type:Boolean,reflect:!0})],Be.prototype,"loading",2);C([B({type:Boolean,reflect:!0})],Be.prototype,"outline",2);C([B({type:Boolean,reflect:!0})],Be.prototype,"pill",2);C([B({type:Boolean,reflect:!0})],Be.prototype,"circle",2);C([B()],Be.prototype,"type",2);C([B()],Be.prototype,"name",2);C([B()],Be.prototype,"value",2);C([B()],Be.prototype,"href",2);C([B()],Be.prototype,"target",2);C([B()],Be.prototype,"rel",2);C([B()],Be.prototype,"download",2);C([B()],Be.prototype,"form",2);C([B({attribute:"formaction"})],Be.prototype,"formAction",2);C([B({attribute:"formenctype"})],Be.prototype,"formEnctype",2);C([B({attribute:"formmethod"})],Be.prototype,"formMethod",2);C([B({attribute:"formnovalidate",type:Boolean})],Be.prototype,"formNoValidate",2);C([B({attribute:"formtarget"})],Be.prototype,"formTarget",2);C([Ve("disabled",{waitUntilFirstUpdate:!0})],Be.prototype,"handleDisabledChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const AS=new Set(["children","localName","ref","style","className"]),n0=new WeakMap,l0=(t,i,l,r,o)=>{const u=o?.[i];u===void 0?(t[i]=l,l==null&&i in HTMLElement.prototype&&t.removeAttribute(i)):l!==r&&((f,h,g)=>{let p=n0.get(f);p===void 0&&n0.set(f,p=new Map);let b=p.get(h);g!==void 0?b===void 0?(p.set(h,b={handleEvent:g}),f.addEventListener(h,b)):b.handleEvent=g:b!==void 0&&(p.delete(h),f.removeEventListener(h,b))})(t,u,l)},Jt=({react:t,tagName:i,elementClass:l,events:r,displayName:o})=>{const u=new Set(Object.keys(r??{})),f=t.forwardRef(((h,g)=>{const p=t.useRef(new Map),b=t.useRef(null),y={},w={};for(const[_,S]of Object.entries(h))AS.has(_)?y[_==="className"?"class":_]=S:u.has(_)||_ in l.prototype?w[_]=S:y[_]=S;return t.useLayoutEffect((()=>{if(b.current===null)return;const _=new Map;for(const S in w)l0(b.current,S,h[S],p.current.get(S),r),p.current.delete(S),_.set(S,h[S]);for(const[S,A]of p.current)l0(b.current,S,void 0,A,r);p.current=_})),t.useLayoutEffect((()=>{b.current?.removeAttribute("defer-hydration")}),[]),y.suppressHydrationWarning=!0,t.createElement(i,{...y,ref:t.useCallback((_=>{b.current=_,typeof g=="function"?g(_):g!==null&&(g.current=_)}),[g])})}));return f.displayName=o??l.name,f};var MS="sl-button";Be.define("sl-button");var NS=Jt({tagName:MS,elementClass:Be,react:qt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),ke=NS;function r0(t){return{onFetch:(i,l)=>{const r=i.options,o=i.fetchOptions?.meta?.fetchMore?.direction,u=i.state.data?.pages||[],f=i.state.data?.pageParams||[];let h={pages:[],pageParams:[]},g=0;const p=async()=>{let b=!1;const y=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(i.signal.aborted?b=!0:i.signal.addEventListener("abort",()=>{b=!0}),i.signal)})},w=z_(i.options,i.fetchOptions),_=async(S,A,M)=>{if(b)return Promise.reject();if(A==null&&S.pages.length)return Promise.resolve(S);const D=(()=>{const W={client:i.client,queryKey:i.queryKey,pageParam:A,direction:M?"backward":"forward",meta:i.options.meta};return y(W),W})(),H=await w(D),{maxPages:L}=i.options,O=M?D_:L_;return{pages:O(S.pages,H,L),pageParams:O(S.pageParams,A,L)}};if(o&&u.length){const S=o==="backward",A=S?$S:s0,M={pages:u,pageParams:f},T=A(r,M);h=await _(M,T,S)}else{const S=t??u.length;do{const A=g===0?f[0]??r.initialPageParam:s0(r,h);if(g>0&&A==null)break;h=await _(h,A),g++}while(g<S)}return h};i.options.persister?i.fetchFn=()=>i.options.persister?.(p,{client:i.client,queryKey:i.queryKey,meta:i.options.meta,signal:i.signal},l):i.fetchFn=p}}}function s0(t,{pages:i,pageParams:l}){const r=i.length-1;return i.length>0?t.getNextPageParam(i[r],i,l[r],l):void 0}function $S(t,{pages:i,pageParams:l}){return i.length>0?t.getPreviousPageParam?.(i[0],i,l[0],l):void 0}var OS=class extends rb{constructor(t={}){super(),this.config=t,this.#e=new Set,this.#t=new Map,this.#a=0}#e;#t;#a;build(t,i,l){const r=new j_({client:t,mutationCache:this,mutationId:++this.#a,options:t.defaultMutationOptions(i),state:l});return this.add(r),r}add(t){this.#e.add(t);const i=Wo(t);if(typeof i=="string"){const l=this.#t.get(i);l?l.push(t):this.#t.set(i,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#e.delete(t)){const i=Wo(t);if(typeof i=="string"){const l=this.#t.get(i);if(l)if(l.length>1){const r=l.indexOf(t);r!==-1&&l.splice(r,1)}else l[0]===t&&this.#t.delete(i)}}this.notify({type:"removed",mutation:t})}canRun(t){const i=Wo(t);if(typeof i=="string"){const r=this.#t.get(i)?.find(o=>o.state.status==="pending");return!r||r===t}else return!0}runNext(t){const i=Wo(t);return typeof i=="string"?this.#t.get(i)?.find(r=>r!==t&&r.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){ma.batch(()=>{this.#e.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(t){const i={exact:!0,...t};return this.getAll().find(l=>yv(i,l))}findAll(t={}){return this.getAll().filter(i=>yv(t,i))}notify(t){ma.batch(()=>{this.listeners.forEach(i=>{i(t)})})}resumePausedMutations(){const t=this.getAll().filter(i=>i.state.isPaused);return ma.batch(()=>Promise.all(t.map(i=>i.continue().catch(ki))))}};function Wo(t){return t.options.scope?.id}var kS=class extends rb{constructor(t={}){super(),this.config=t,this.#e=new Map}#e;build(t,i,l){const r=i.queryKey,o=i.queryHash??sb(r,i);let u=this.get(o);return u||(u=new B_({client:t,queryKey:r,queryHash:o,options:t.defaultQueryOptions(i),state:l,defaultOptions:t.getQueryDefaults(r)}),this.add(u)),u}add(t){this.#e.has(t.queryHash)||(this.#e.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const i=this.#e.get(t.queryHash);i&&(t.destroy(),i===t&&this.#e.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ma.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#e.get(t)}getAll(){return[...this.#e.values()]}find(t){const i={exact:!0,...t};return this.getAll().find(l=>_v(i,l))}findAll(t={}){const i=this.getAll();return Object.keys(t).length>0?i.filter(l=>_v(t,l)):i}notify(t){ma.batch(()=>{this.listeners.forEach(i=>{i(t)})})}onFocus(){ma.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ma.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},RS=class{#e;#t;#a;#n;#l;#i;#r;#s;constructor(t={}){this.#e=t.queryCache||new kS,this.#t=t.mutationCache||new OS,this.#a=t.defaultOptions||{},this.#n=new Map,this.#l=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#r=H_.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=xv.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#r?.(),this.#r=void 0,this.#s?.(),this.#s=void 0)}isFetching(t){return this.#e.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#t.findAll({...t,status:"pending"}).length}getQueryData(t){const i=this.defaultQueryOptions({queryKey:t});return this.#e.get(i.queryHash)?.state.data}ensureQueryData(t){const i=this.defaultQueryOptions(t),l=this.#e.build(this,i),r=l.state.data;return r===void 0?this.fetchQuery(t):(t.revalidateIfStale&&l.isStaleByTime(wv(i.staleTime,l))&&this.prefetchQuery(i),Promise.resolve(r))}getQueriesData(t){return this.#e.findAll(t).map(({queryKey:i,state:l})=>{const r=l.data;return[i,r]})}setQueryData(t,i,l){const r=this.defaultQueryOptions({queryKey:t}),u=this.#e.get(r.queryHash)?.state.data,f=U_(i,u);if(f!==void 0)return this.#e.build(this,r).setData(f,{...l,manual:!0})}setQueriesData(t,i,l){return ma.batch(()=>this.#e.findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,i,l)]))}getQueryState(t){const i=this.defaultQueryOptions({queryKey:t});return this.#e.get(i.queryHash)?.state}removeQueries(t){const i=this.#e;ma.batch(()=>{i.findAll(t).forEach(l=>{i.remove(l)})})}resetQueries(t,i){const l=this.#e;return ma.batch(()=>(l.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...t},i)))}cancelQueries(t,i={}){const l={revert:!0,...i},r=ma.batch(()=>this.#e.findAll(t).map(o=>o.cancel(l)));return Promise.all(r).then(ki).catch(ki)}invalidateQueries(t,i={}){return ma.batch(()=>(this.#e.findAll(t).forEach(l=>{l.invalidate()}),t?.refetchType==="none"?Promise.resolve():this.refetchQueries({...t,type:t?.refetchType??t?.type??"active"},i)))}refetchQueries(t,i={}){const l={...i,cancelRefetch:i.cancelRefetch??!0},r=ma.batch(()=>this.#e.findAll(t).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let u=o.fetch(void 0,l);return l.throwOnError||(u=u.catch(ki)),o.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(r).then(ki)}fetchQuery(t){const i=this.defaultQueryOptions(t);i.retry===void 0&&(i.retry=!1);const l=this.#e.build(this,i);return l.isStaleByTime(wv(i.staleTime,l))?l.fetch(i):Promise.resolve(l.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ki).catch(ki)}fetchInfiniteQuery(t){return t.behavior=r0(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ki).catch(ki)}ensureInfiniteQueryData(t){return t.behavior=r0(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return xv.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(t){this.#a=t}setQueryDefaults(t,i){this.#n.set(Sv(t),{queryKey:t,defaultOptions:i})}getQueryDefaults(t){const i=[...this.#n.values()],l={};return i.forEach(r=>{Ev(t,r.queryKey)&&Object.assign(l,r.defaultOptions)}),l}setMutationDefaults(t,i){this.#l.set(Sv(t),{mutationKey:t,defaultOptions:i})}getMutationDefaults(t){const i=[...this.#l.values()],l={};return i.forEach(r=>{Ev(t,r.mutationKey)&&Object.assign(l,r.defaultOptions)}),l}defaultQueryOptions(t){if(t._defaulted)return t;const i={...this.#a.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return i.queryHash||(i.queryHash=sb(i.queryKey,i)),i.refetchOnReconnect===void 0&&(i.refetchOnReconnect=i.networkMode!=="always"),i.throwOnError===void 0&&(i.throwOnError=!!i.suspense),!i.networkMode&&i.persister&&(i.networkMode="offlineFirst"),i.queryFn===I_&&(i.enabled=!1),i}defaultMutationOptions(t){return t?._defaulted?t:{...this.#a.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}};function ai(t,i){var l=i&&i.cache?i.cache:US,r=i&&i.serializer?i.serializer:BS,o=i&&i.strategy?i.strategy:LS;return o(t,{cache:l,serializer:r})}function zS(t){return t==null||typeof t=="number"||typeof t=="boolean"}function DS(t,i,l,r){var o=zS(r)?r:l(r),u=i.get(o);return typeof u>"u"&&(u=t.call(this,r),i.set(o,u)),u}function Zb(t,i,l){var r=Array.prototype.slice.call(arguments,3),o=l(r),u=i.get(o);return typeof u>"u"&&(u=t.apply(this,r),i.set(o,u)),u}function Kb(t,i,l,r,o){return l.bind(i,t,r,o)}function LS(t,i){var l=t.length===1?DS:Zb;return Kb(t,this,l,i.cache.create(),i.serializer)}function jS(t,i){return Kb(t,this,Zb,i.cache.create(),i.serializer)}var BS=function(){return JSON.stringify(arguments)},HS=(function(){function t(){this.cache=Object.create(null)}return t.prototype.get=function(i){return this.cache[i]},t.prototype.set=function(i,l){this.cache[i]=l},t})(),US={create:function(){return new HS}},ii={variadic:jS},Ne;(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ne||(Ne={}));var Qe;(function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"})(Qe||(Qe={}));var Zl;(function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"})(Zl||(Zl={}));function o0(t){return t.type===Qe.literal}function IS(t){return t.type===Qe.argument}function Jb(t){return t.type===Qe.number}function e1(t){return t.type===Qe.date}function t1(t){return t.type===Qe.time}function a1(t){return t.type===Qe.select}function i1(t){return t.type===Qe.plural}function PS(t){return t.type===Qe.pound}function n1(t){return t.type===Qe.tag}function l1(t){return!!(t&&typeof t=="object"&&t.type===Zl.number)}function Hf(t){return!!(t&&typeof t=="object"&&t.type===Zl.dateTime)}var r1=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,qS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function VS(t){var i={};return t.replace(qS,function(l){var r=l.length;switch(l[0]){case"G":i.era=r===4?"long":r===5?"narrow":"short";break;case"y":i.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][r-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][r-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][r-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][r-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][r-1];break;case"s":i.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var FS=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function GS(t){if(t.length===0)throw new Error("Number skeleton cannot be empty");for(var i=t.split(FS).filter(function(w){return w.length>0}),l=[],r=0,o=i;r<o.length;r++){var u=o[r],f=u.split("/");if(f.length===0)throw new Error("Invalid number skeleton");for(var h=f[0],g=f.slice(1),p=0,b=g;p<b.length;p++){var y=b[p];if(y.length===0)throw new Error("Invalid number skeleton")}l.push({stem:h,options:g})}return l}function YS(t){return t.replace(/^(.*?)-/,"")}var c0=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,s1=/^(@+)?(\+|#+)?[rs]?$/g,XS=/(\*)(0+)|(#+)(0+)|(0+)/g,o1=/^(0+)$/;function u0(t){var i={};return t[t.length-1]==="r"?i.roundingPriority="morePrecision":t[t.length-1]==="s"&&(i.roundingPriority="lessPrecision"),t.replace(s1,function(l,r,o){return typeof o!="string"?(i.minimumSignificantDigits=r.length,i.maximumSignificantDigits=r.length):o==="+"?i.minimumSignificantDigits=r.length:r[0]==="#"?i.maximumSignificantDigits=r.length:(i.minimumSignificantDigits=r.length,i.maximumSignificantDigits=r.length+(typeof o=="string"?o.length:0)),""}),i}function c1(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function QS(t){var i;if(t[0]==="E"&&t[1]==="E"?(i={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(i={notation:"scientific"},t=t.slice(1)),i){var l=t.slice(0,2);if(l==="+!"?(i.signDisplay="always",t=t.slice(2)):l==="+?"&&(i.signDisplay="exceptZero",t=t.slice(2)),!o1.test(t))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=t.length}return i}function d0(t){var i={},l=c1(t);return l||i}function WS(t){for(var i={},l=0,r=t;l<r.length;l++){var o=r[l];switch(o.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=o.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=YS(o.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ue(ue(ue({},i),{notation:"scientific"}),o.options.reduce(function(g,p){return ue(ue({},g),d0(p))},{}));continue;case"engineering":i=ue(ue(ue({},i),{notation:"engineering"}),o.options.reduce(function(g,p){return ue(ue({},g),d0(p))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(o.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace(XS,function(g,p,b,y,w,_){if(p)i.minimumIntegerDigits=b.length;else{if(y&&w)throw new Error("We currently do not support maximum integer digits");if(_)throw new Error("We currently do not support exact integer digits")}return""});continue}if(o1.test(o.stem)){i.minimumIntegerDigits=o.stem.length;continue}if(c0.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(c0,function(g,p,b,y,w,_){return b==="*"?i.minimumFractionDigits=p.length:y&&y[0]==="#"?i.maximumFractionDigits=y.length:w&&_?(i.minimumFractionDigits=w.length,i.maximumFractionDigits=w.length+_.length):(i.minimumFractionDigits=p.length,i.maximumFractionDigits=p.length),""});var u=o.options[0];u==="w"?i=ue(ue({},i),{trailingZeroDisplay:"stripIfInteger"}):u&&(i=ue(ue({},i),u0(u)));continue}if(s1.test(o.stem)){i=ue(ue({},i),u0(o.stem));continue}var f=c1(o.stem);f&&(i=ue(ue({},i),f));var h=QS(o.stem);h&&(i=ue(ue({},i),h))}return i}var Zo={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function ZS(t,i){for(var l="",r=0;r<t.length;r++){var o=t.charAt(r);if(o==="j"){for(var u=0;r+1<t.length&&t.charAt(r+1)===o;)u++,r++;var f=1+(u&1),h=u<2?1:3+(u>>1),g="a",p=KS(i);for((p=="H"||p=="k")&&(h=0);h-- >0;)l+=g;for(;f-- >0;)l=p+l}else o==="J"?l+="H":l+=o}return l}function KS(t){var i=t.hourCycle;if(i===void 0&&t.hourCycles&&t.hourCycles.length&&(i=t.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var l=t.language,r;l!=="root"&&(r=t.maximize().region);var o=Zo[r||""]||Zo[l||""]||Zo["".concat(l,"-001")]||Zo["001"];return o[0]}var nf,JS=new RegExp("^".concat(r1.source,"*")),e3=new RegExp("".concat(r1.source,"*$"));function Oe(t,i){return{start:t,end:i}}var t3=!!String.prototype.startsWith&&"_a".startsWith("a",1),a3=!!String.fromCodePoint,i3=!!Object.fromEntries,n3=!!String.prototype.codePointAt,l3=!!String.prototype.trimStart,r3=!!String.prototype.trimEnd,s3=!!Number.isSafeInteger,o3=s3?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},Uf=!0;try{var c3=d1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Uf=((nf=c3.exec("a"))===null||nf===void 0?void 0:nf[0])==="a"}catch{Uf=!1}var f0=t3?function(i,l,r){return i.startsWith(l,r)}:function(i,l,r){return i.slice(r,r+l.length)===l},If=a3?String.fromCodePoint:function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];for(var r="",o=i.length,u=0,f;o>u;){if(f=i[u++],f>1114111)throw RangeError(f+" is not a valid code point");r+=f<65536?String.fromCharCode(f):String.fromCharCode(((f-=65536)>>10)+55296,f%1024+56320)}return r},h0=i3?Object.fromEntries:function(i){for(var l={},r=0,o=i;r<o.length;r++){var u=o[r],f=u[0],h=u[1];l[f]=h}return l},u1=n3?function(i,l){return i.codePointAt(l)}:function(i,l){var r=i.length;if(!(l<0||l>=r)){var o=i.charCodeAt(l),u;return o<55296||o>56319||l+1===r||(u=i.charCodeAt(l+1))<56320||u>57343?o:(o-55296<<10)+(u-56320)+65536}},u3=l3?function(i){return i.trimStart()}:function(i){return i.replace(JS,"")},d3=r3?function(i){return i.trimEnd()}:function(i){return i.replace(e3,"")};function d1(t,i){return new RegExp(t,i)}var Pf;if(Uf){var p0=d1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Pf=function(i,l){var r;p0.lastIndex=l;var o=p0.exec(i);return(r=o[1])!==null&&r!==void 0?r:""}}else Pf=function(i,l){for(var r=[];;){var o=u1(i,l);if(o===void 0||f1(o)||m3(o))break;r.push(o),l+=o>=65536?2:1}return If.apply(void 0,r)};var f3=(function(){function t(i,l){l===void 0&&(l={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!l.ignoreTag,this.locale=l.locale,this.requiresOtherClause=!!l.requiresOtherClause,this.shouldParseSkeletons=!!l.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(i,l,r){for(var o=[];!this.isEOF();){var u=this.char();if(u===123){var f=this.parseArgument(i,r);if(f.err)return f;o.push(f.val)}else{if(u===125&&i>0)break;if(u===35&&(l==="plural"||l==="selectordinal")){var h=this.clonePosition();this.bump(),o.push({type:Qe.pound,location:Oe(h,this.clonePosition())})}else if(u===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(Ne.UNMATCHED_CLOSING_TAG,Oe(this.clonePosition(),this.clonePosition()))}else if(u===60&&!this.ignoreTag&&qf(this.peek()||0)){var f=this.parseTag(i,l);if(f.err)return f;o.push(f.val)}else{var f=this.parseLiteral(i,l);if(f.err)return f;o.push(f.val)}}}return{val:o,err:null}},t.prototype.parseTag=function(i,l){var r=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Qe.literal,value:"<".concat(o,"/>"),location:Oe(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var u=this.parseMessage(i+1,l,!0);if(u.err)return u;var f=u.val,h=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!qf(this.char()))return this.error(Ne.INVALID_TAG,Oe(h,this.clonePosition()));var g=this.clonePosition(),p=this.parseTagName();return o!==p?this.error(Ne.UNMATCHED_CLOSING_TAG,Oe(g,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Qe.tag,value:o,children:f,location:Oe(r,this.clonePosition())},err:null}:this.error(Ne.INVALID_TAG,Oe(h,this.clonePosition())))}else return this.error(Ne.UNCLOSED_TAG,Oe(r,this.clonePosition()))}else return this.error(Ne.INVALID_TAG,Oe(r,this.clonePosition()))},t.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&p3(this.char());)this.bump();return this.message.slice(i,this.offset())},t.prototype.parseLiteral=function(i,l){for(var r=this.clonePosition(),o="";;){var u=this.tryParseQuote(l);if(u){o+=u;continue}var f=this.tryParseUnquoted(i,l);if(f){o+=f;continue}var h=this.tryParseLeftAngleBracket();if(h){o+=h;continue}break}var g=Oe(r,this.clonePosition());return{val:{type:Qe.literal,value:o,location:g},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!h3(this.peek()||0))?(this.bump(),"<"):null},t.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var l=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)l.push(39),this.bump();else{this.bump();break}else l.push(r);this.bump()}return If.apply(void 0,l)},t.prototype.tryParseUnquoted=function(i,l){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(l==="plural"||l==="selectordinal")||r===125&&i>0?null:(this.bump(),If(r))},t.prototype.parseArgument=function(i,l){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ne.EMPTY_ARGUMENT,Oe(r,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error(Ne.MALFORMED_ARGUMENT,Oe(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Qe.argument,value:o,location:Oe(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(r,this.clonePosition())):this.parseArgumentOptions(i,l,o,r);default:return this.error(Ne.MALFORMED_ARGUMENT,Oe(r,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),l=this.offset(),r=Pf(this.message,l),o=l+r.length;this.bumpTo(o);var u=this.clonePosition(),f=Oe(i,u);return{value:r,location:f}},t.prototype.parseArgumentOptions=function(i,l,r,o){var u,f=this.clonePosition(),h=this.parseIdentifierIfPossible().value,g=this.clonePosition();switch(h){case"":return this.error(Ne.EXPECT_ARGUMENT_TYPE,Oe(f,g));case"number":case"date":case"time":{this.bumpSpace();var p=null;if(this.bumpIf(",")){this.bumpSpace();var b=this.clonePosition(),y=this.parseSimpleArgStyleIfPossible();if(y.err)return y;var w=d3(y.val);if(w.length===0)return this.error(Ne.EXPECT_ARGUMENT_STYLE,Oe(this.clonePosition(),this.clonePosition()));var _=Oe(b,this.clonePosition());p={style:w,styleLocation:_}}var S=this.tryParseArgumentClose(o);if(S.err)return S;var A=Oe(o,this.clonePosition());if(p&&f0(p?.style,"::",0)){var M=u3(p.style.slice(2));if(h==="number"){var y=this.parseNumberSkeletonFromString(M,p.styleLocation);return y.err?y:{val:{type:Qe.number,value:r,location:A,style:y.val},err:null}}else{if(M.length===0)return this.error(Ne.EXPECT_DATE_TIME_SKELETON,A);var T=M;this.locale&&(T=ZS(M,this.locale));var w={type:Zl.dateTime,pattern:T,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?VS(T):{}},D=h==="date"?Qe.date:Qe.time;return{val:{type:D,value:r,location:A,style:w},err:null}}}return{val:{type:h==="number"?Qe.number:h==="date"?Qe.date:Qe.time,value:r,location:A,style:(u=p?.style)!==null&&u!==void 0?u:null},err:null}}case"plural":case"selectordinal":case"select":{var H=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ne.EXPECT_SELECT_ARGUMENT_OPTIONS,Oe(H,ue({},H)));this.bumpSpace();var L=this.parseIdentifierIfPossible(),O=0;if(h!=="select"&&L.value==="offset"){if(!this.bumpIf(":"))return this.error(Ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Oe(this.clonePosition(),this.clonePosition()));this.bumpSpace();var y=this.tryParseDecimalInteger(Ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ne.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(y.err)return y;this.bumpSpace(),L=this.parseIdentifierIfPossible(),O=y.val}var W=this.tryParsePluralOrSelectOptions(i,h,l,L);if(W.err)return W;var S=this.tryParseArgumentClose(o);if(S.err)return S;var Q=Oe(o,this.clonePosition());return h==="select"?{val:{type:Qe.select,value:r,options:h0(W.val),location:Q},err:null}:{val:{type:Qe.plural,value:r,options:h0(W.val),offset:O,pluralType:h==="plural"?"cardinal":"ordinal",location:Q},err:null}}default:return this.error(Ne.INVALID_ARGUMENT_TYPE,Oe(f,g))}},t.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,l=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ne.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Oe(o,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(l.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(l.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(i,l){var r=[];try{r=GS(i)}catch{return this.error(Ne.INVALID_NUMBER_SKELETON,l)}return{val:{type:Zl.number,tokens:r,location:l,parsedOptions:this.shouldParseSkeletons?WS(r):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(i,l,r,o){for(var u,f=!1,h=[],g=new Set,p=o.value,b=o.location;;){if(p.length===0){var y=this.clonePosition();if(l!=="select"&&this.bumpIf("=")){var w=this.tryParseDecimalInteger(Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ne.INVALID_PLURAL_ARGUMENT_SELECTOR);if(w.err)return w;b=Oe(y,this.clonePosition()),p=this.message.slice(y.offset,this.offset())}else break}if(g.has(p))return this.error(l==="select"?Ne.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ne.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,b);p==="other"&&(f=!0),this.bumpSpace();var _=this.clonePosition();if(!this.bumpIf("{"))return this.error(l==="select"?Ne.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Oe(this.clonePosition(),this.clonePosition()));var S=this.parseMessage(i+1,l,r);if(S.err)return S;var A=this.tryParseArgumentClose(_);if(A.err)return A;h.push([p,{value:S.val,location:Oe(_,this.clonePosition())}]),g.add(p),this.bumpSpace(),u=this.parseIdentifierIfPossible(),p=u.value,b=u.location}return h.length===0?this.error(l==="select"?Ne.EXPECT_SELECT_ARGUMENT_SELECTOR:Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR,Oe(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!f?this.error(Ne.MISSING_OTHER_CLAUSE,Oe(this.clonePosition(),this.clonePosition())):{val:h,err:null}},t.prototype.tryParseDecimalInteger=function(i,l){var r=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var u=!1,f=0;!this.isEOF();){var h=this.char();if(h>=48&&h<=57)u=!0,f=f*10+(h-48),this.bump();else break}var g=Oe(o,this.clonePosition());return u?(f*=r,o3(f)?{val:f,err:null}:this.error(l,g)):this.error(i,g)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var l=u1(this.message,i);if(l===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return l},t.prototype.error=function(i,l){return{val:null,err:{kind:i,message:this.message,location:l}}},t.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},t.prototype.bumpIf=function(i){if(f0(this.message,i,this.offset())){for(var l=0;l<i.length;l++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(i){var l=this.offset(),r=this.message.indexOf(i,l);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var l=this.offset();if(l===i)break;if(l>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&f1(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),l=this.offset(),r=this.message.charCodeAt(l+(i>=65536?2:1));return r??null},t})();function qf(t){return t>=97&&t<=122||t>=65&&t<=90}function h3(t){return qf(t)||t===47}function p3(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function f1(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function m3(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function Vf(t){t.forEach(function(i){if(delete i.location,a1(i)||i1(i))for(var l in i.options)delete i.options[l].location,Vf(i.options[l].value);else Jb(i)&&l1(i.style)||(e1(i)||t1(i))&&Hf(i.style)?delete i.style.location:n1(i)&&Vf(i.children)})}function g3(t,i){i===void 0&&(i={}),i=ue({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var l=new f3(t,i).parse();if(l.err){var r=SyntaxError(Ne[l.err.kind]);throw r.location=l.err.location,r.originalMessage=l.err.message,r}return i?.captureLocation||Vf(l.val),l.val}var oi;(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(oi||(oi={}));var _n=(function(t){La(i,t);function i(l,r,o){var u=t.call(this,l)||this;return u.code=r,u.originalMessage=o,u}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i})(Error),m0=(function(t){La(i,t);function i(l,r,o,u){return t.call(this,'Invalid values for "'.concat(l,'": "').concat(r,'". Options are "').concat(Object.keys(o).join('", "'),'"'),oi.INVALID_VALUE,u)||this}return i})(_n),v3=(function(t){La(i,t);function i(l,r,o){return t.call(this,'Value for "'.concat(l,'" must be of type ').concat(r),oi.INVALID_VALUE,o)||this}return i})(_n),b3=(function(t){La(i,t);function i(l,r){return t.call(this,'The intl string context variable "'.concat(l,'" was not provided to the string "').concat(r,'"'),oi.MISSING_VALUE,r)||this}return i})(_n),Zt;(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(Zt||(Zt={}));function y3(t){return t.length<2?t:t.reduce(function(i,l){var r=i[i.length-1];return!r||r.type!==Zt.literal||l.type!==Zt.literal?i.push(l):r.value+=l.value,i},[])}function h1(t){return typeof t=="function"}function oc(t,i,l,r,o,u,f){if(t.length===1&&o0(t[0]))return[{type:Zt.literal,value:t[0].value}];for(var h=[],g=0,p=t;g<p.length;g++){var b=p[g];if(o0(b)){h.push({type:Zt.literal,value:b.value});continue}if(PS(b)){typeof u=="number"&&h.push({type:Zt.literal,value:l.getNumberFormat(i).format(u)});continue}var y=b.value;if(!(o&&y in o))throw new b3(y,f);var w=o[y];if(IS(b)){(!w||typeof w=="string"||typeof w=="number")&&(w=typeof w=="string"||typeof w=="number"?String(w):""),h.push({type:typeof w=="string"?Zt.literal:Zt.object,value:w});continue}if(e1(b)){var _=typeof b.style=="string"?r.date[b.style]:Hf(b.style)?b.style.parsedOptions:void 0;h.push({type:Zt.literal,value:l.getDateTimeFormat(i,_).format(w)});continue}if(t1(b)){var _=typeof b.style=="string"?r.time[b.style]:Hf(b.style)?b.style.parsedOptions:r.time.medium;h.push({type:Zt.literal,value:l.getDateTimeFormat(i,_).format(w)});continue}if(Jb(b)){var _=typeof b.style=="string"?r.number[b.style]:l1(b.style)?b.style.parsedOptions:void 0;_&&_.scale&&(w=w*(_.scale||1)),h.push({type:Zt.literal,value:l.getNumberFormat(i,_).format(w)});continue}if(n1(b)){var S=b.children,A=b.value,M=o[A];if(!h1(M))throw new v3(A,"function",f);var T=oc(S,i,l,r,o,u),D=M(T.map(function(O){return O.value}));Array.isArray(D)||(D=[D]),h.push.apply(h,D.map(function(O){return{type:typeof O=="string"?Zt.literal:Zt.object,value:O}}))}if(a1(b)){var H=b.options[w]||b.options.other;if(!H)throw new m0(b.value,w,Object.keys(b.options),f);h.push.apply(h,oc(H.value,i,l,r,o));continue}if(i1(b)){var H=b.options["=".concat(w)];if(!H){if(!Intl.PluralRules)throw new _n(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,oi.MISSING_INTL_API,f);var L=l.getPluralRules(i,{type:b.pluralType}).select(w-(b.offset||0));H=b.options[L]||b.options.other}if(!H)throw new m0(b.value,w,Object.keys(b.options),f);h.push.apply(h,oc(H.value,i,l,r,o,w-(b.offset||0)));continue}}return y3(h)}function _3(t,i){return i?ue(ue(ue({},t||{}),i||{}),Object.keys(t).reduce(function(l,r){return l[r]=ue(ue({},t[r]),i[r]||{}),l},{})):t}function x3(t,i){return i?Object.keys(t).reduce(function(l,r){return l[r]=_3(t[r],i[r]),l},ue({},t)):t}function lf(t){return{create:function(){return{get:function(i){return t[i]},set:function(i,l){t[i]=l}}}}}function w3(t){return t===void 0&&(t={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ai(function(){for(var i,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((i=Intl.NumberFormat).bind.apply(i,ni([void 0],l,!1)))},{cache:lf(t.number),strategy:ii.variadic}),getDateTimeFormat:ai(function(){for(var i,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((i=Intl.DateTimeFormat).bind.apply(i,ni([void 0],l,!1)))},{cache:lf(t.dateTime),strategy:ii.variadic}),getPluralRules:ai(function(){for(var i,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((i=Intl.PluralRules).bind.apply(i,ni([void 0],l,!1)))},{cache:lf(t.pluralRules),strategy:ii.variadic})}}var p1=(function(){function t(i,l,r,o){l===void 0&&(l=t.defaultLocale);var u=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(g){var p=u.formatToParts(g);if(p.length===1)return p[0].value;var b=p.reduce(function(y,w){return!y.length||w.type!==Zt.literal||typeof y[y.length-1]!="string"?y.push(w.value):y[y.length-1]+=w.value,y},[]);return b.length<=1?b[0]||"":b},this.formatToParts=function(g){return oc(u.ast,u.locales,u.formatters,u.formats,g,void 0,u.message)},this.resolvedOptions=function(){var g;return{locale:((g=u.resolvedLocale)===null||g===void 0?void 0:g.toString())||Intl.NumberFormat.supportedLocalesOf(u.locales)[0]}},this.getAst=function(){return u.ast},this.locales=l,this.resolvedLocale=t.resolveLocale(l),typeof i=="string"){if(this.message=i,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var f=o||{};f.formatters;var h=Yl(f,["formatters"]);this.ast=t.__parse(i,ue(ue({},h),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=x3(t.formats,r),this.formatters=o&&o.formatters||w3(this.formatterCache)}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var l=Intl.NumberFormat.supportedLocalesOf(i);return l.length>0?new Intl.Locale(l[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},t.__parse=g3,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t})(),Wn;(function(t){t.FORMAT_ERROR="FORMAT_ERROR",t.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",t.INVALID_CONFIG="INVALID_CONFIG",t.MISSING_DATA="MISSING_DATA",t.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Wn||(Wn={}));var Cs=(function(t){La(i,t);function i(l,r,o){var u=this,f=o?o instanceof Error?o:new Error(String(o)):void 0;return u=t.call(this,"[@formatjs/intl Error ".concat(l,"] ").concat(r,`
`).concat(f?`
`.concat(f.message,`
`).concat(f.stack):""))||this,u.code=l,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(u,i),u}return i})(Error),S3=(function(t){La(i,t);function i(l,r){return t.call(this,Wn.UNSUPPORTED_FORMATTER,l,r)||this}return i})(Cs),E3=(function(t){La(i,t);function i(l,r){return t.call(this,Wn.INVALID_CONFIG,l,r)||this}return i})(Cs),g0=(function(t){La(i,t);function i(l,r){return t.call(this,Wn.MISSING_DATA,l,r)||this}return i})(Cs),Ba=(function(t){La(i,t);function i(l,r,o){var u=t.call(this,Wn.FORMAT_ERROR,"".concat(l,`
Locale: `).concat(r,`
`),o)||this;return u.locale=r,u}return i})(Cs),rf=(function(t){La(i,t);function i(l,r,o,u){var f=t.call(this,"".concat(l,`
MessageID: `).concat(o?.id,`
Default Message: `).concat(o?.defaultMessage,`
Description: `).concat(o?.description,`
`),r,u)||this;return f.descriptor=o,f.locale=r,f}return i})(Ba),C3=(function(t){La(i,t);function i(l,r){var o=t.call(this,Wn.MISSING_TRANSLATION,'Missing message: "'.concat(l.id,'" for locale "').concat(r,'", using ').concat(l.defaultMessage?"default message (".concat(typeof l.defaultMessage=="string"?l.defaultMessage:l.defaultMessage.map(function(u){var f;return(f=u.value)!==null&&f!==void 0?f:JSON.stringify(u)}).join(),")"):"id"," as fallback."))||this;return o.descriptor=l,o}return i})(Cs);function T3(t,i,l){if(l===void 0&&(l=Error),!t)throw new l(i)}function er(t,i,l){return l===void 0&&(l={}),i.reduce(function(r,o){return o in t?r[o]=t[o]:o in l&&(r[o]=l[o]),r},{})}var A3=function(t){},M3=function(t){},m1={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:A3,onWarn:M3};function g1(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Vn(t){return{create:function(){return{get:function(i){return t[i]},set:function(i,l){t[i]=l}}}}}function N3(t){t===void 0&&(t=g1());var i=Intl.RelativeTimeFormat,l=Intl.ListFormat,r=Intl.DisplayNames,o=ai(function(){for(var h,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((h=Intl.DateTimeFormat).bind.apply(h,ni([void 0],g,!1)))},{cache:Vn(t.dateTime),strategy:ii.variadic}),u=ai(function(){for(var h,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((h=Intl.NumberFormat).bind.apply(h,ni([void 0],g,!1)))},{cache:Vn(t.number),strategy:ii.variadic}),f=ai(function(){for(var h,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((h=Intl.PluralRules).bind.apply(h,ni([void 0],g,!1)))},{cache:Vn(t.pluralRules),strategy:ii.variadic});return{getDateTimeFormat:o,getNumberFormat:u,getMessageFormat:ai(function(h,g,p,b){return new p1(h,g,p,ue({formatters:{getNumberFormat:u,getDateTimeFormat:o,getPluralRules:f}},b||{}))},{cache:Vn(t.message),strategy:ii.variadic}),getRelativeTimeFormat:ai(function(){for(var h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new(i.bind.apply(i,ni([void 0],h,!1)))},{cache:Vn(t.relativeTime),strategy:ii.variadic}),getPluralRules:f,getListFormat:ai(function(){for(var h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new(l.bind.apply(l,ni([void 0],h,!1)))},{cache:Vn(t.list),strategy:ii.variadic}),getDisplayNames:ai(function(){for(var h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new(r.bind.apply(r,ni([void 0],h,!1)))},{cache:Vn(t.displayNames),strategy:ii.variadic})}}function Sh(t,i,l,r){var o=t&&t[i],u;if(o&&(u=o[l]),u)return u;r(new S3("No ".concat(i," format named: ").concat(l)))}function Ko(t,i){return Object.keys(t).reduce(function(l,r){return l[r]=ue({timeZone:i},t[r]),l},{})}function v0(t,i){var l=Object.keys(ue(ue({},t),i));return l.reduce(function(r,o){return r[o]=ue(ue({},t[o]||{}),i[o]||{}),r},{})}function b0(t,i){if(!i)return t;var l=p1.formats;return ue(ue(ue({},l),t),{date:v0(Ko(l.date,i),Ko(t.date||{},i)),time:v0(Ko(l.time,i),Ko(t.time||{},i))})}var Ff=function(t,i,l,r,o){var u=t.locale,f=t.formats,h=t.messages,g=t.defaultLocale,p=t.defaultFormats,b=t.fallbackOnEmptyString,y=t.onError,w=t.timeZone,_=t.defaultRichTextElements;l===void 0&&(l={id:""});var S=l.id,A=l.defaultMessage;T3(!!S,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var M=String(S),T=h&&Object.prototype.hasOwnProperty.call(h,M)&&h[M];if(Array.isArray(T)&&T.length===1&&T[0].type===Qe.literal)return T[0].value;if(!r&&T&&typeof T=="string"&&!_)return T.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=ue(ue({},_),r||{}),f=b0(f,w),p=b0(p,w),!T){if(b===!1&&T==="")return T;if((!A||u&&u.toLowerCase()!==g.toLowerCase())&&y(new C3(l,u)),A)try{var D=i.getMessageFormat(A,g,p,o);return D.format(r)}catch(H){return y(new rf('Error formatting default message for: "'.concat(M,'", rendering default message verbatim'),u,l,H)),typeof A=="string"?A:M}return M}try{var D=i.getMessageFormat(T,u,f,ue({formatters:i},o||{}));return D.format(r)}catch(H){y(new rf('Error formatting message: "'.concat(M,'", using ').concat(A?"default message":"id"," as fallback."),u,l,H))}if(A)try{var D=i.getMessageFormat(A,g,p,o);return D.format(r)}catch(H){y(new rf('Error formatting the default message for: "'.concat(M,'", rendering message verbatim'),u,l,H))}return typeof T=="string"?T:typeof A=="string"?A:M},$3=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ts(t,i,l,r){var o=t.locale,u=t.formats,f=t.onError,h=t.timeZone;r===void 0&&(r={});var g=r.format,p=ue(ue({},h&&{timeZone:h}),g&&Sh(u,i,g,f)),b=er(r,$3,p);return i==="time"&&!b.hour&&!b.minute&&!b.second&&!b.timeStyle&&!b.dateStyle&&(b=ue(ue({},b),{hour:"numeric",minute:"numeric"})),l(o,b)}function O3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=u===void 0?{}:u,h=typeof o=="string"?new Date(o||0):o;try{return Ts(t,"date",i,f).format(h)}catch(g){t.onError(new Ba("Error formatting date.",t.locale,g))}return String(h)}function k3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=u===void 0?{}:u,h=typeof o=="string"?new Date(o||0):o;try{return Ts(t,"time",i,f).format(h)}catch(g){t.onError(new Ba("Error formatting time.",t.locale,g))}return String(h)}function R3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=l[2],h=f===void 0?{}:f,g=typeof o=="string"?new Date(o||0):o,p=typeof u=="string"?new Date(u||0):u;try{return Ts(t,"dateTimeRange",i,h).formatRange(g,p)}catch(b){t.onError(new Ba("Error formatting date time range.",t.locale,b))}return String(g)}function z3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=u===void 0?{}:u,h=typeof o=="string"?new Date(o||0):o;try{return Ts(t,"date",i,f).formatToParts(h)}catch(g){t.onError(new Ba("Error formatting date.",t.locale,g))}return[]}function D3(t,i){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=u===void 0?{}:u,h=typeof o=="string"?new Date(o||0):o;try{return Ts(t,"time",i,f).formatToParts(h)}catch(g){t.onError(new Ba("Error formatting time.",t.locale,g))}return[]}var L3=["style","type","fallback","languageDisplay"];function j3(t,i,l,r){var o=t.locale,u=t.onError,f=Intl.DisplayNames;f||u(new _n(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,oi.MISSING_INTL_API));var h=er(r,L3);try{return i(o,h).of(l)}catch(g){u(new Ba("Error formatting display name.",o,g))}}var B3=["type","style"],y0=Date.now();function H3(t){return"".concat(y0,"_").concat(t,"_").concat(y0)}function U3(t,i,l,r){r===void 0&&(r={});var o=v1(t,i,l,r).reduce(function(u,f){var h=f.value;return typeof h!="string"?u.push(h):typeof u[u.length-1]=="string"?u[u.length-1]+=h:u.push(h),u},[]);return o.length===1?o[0]:o.length===0?"":o}function v1(t,i,l,r){var o=t.locale,u=t.onError;r===void 0&&(r={});var f=Intl.ListFormat;f||u(new _n(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,oi.MISSING_INTL_API));var h=er(r,B3);try{var g={},p=Array.from(l).map(function(b,y){if(typeof b=="object"&&b!==null){var w=H3(y);return g[w]=b,w}return String(b)});return i(o,h).formatToParts(p).map(function(b){return b.type==="literal"?b:ue(ue({},b),{value:g[b.value]||b.value})})}catch(b){u(new Ba("Error formatting list.",o,b))}return l}var I3=["type"];function P3(t,i,l,r){var o=t.locale,u=t.onError;r===void 0&&(r={}),Intl.PluralRules||u(new _n(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,oi.MISSING_INTL_API));var f=er(r,I3);try{return i(o,f).select(l)}catch(h){u(new Ba("Error formatting plural.",o,h))}return"other"}var q3=["numeric","style"];function V3(t,i,l){var r=t.locale,o=t.formats,u=t.onError;l===void 0&&(l={});var f=l.format,h=!!f&&Sh(o,"relative",f,u)||{},g=er(l,q3,h);return i(r,g)}function F3(t,i,l,r,o){o===void 0&&(o={}),r||(r="second");var u=Intl.RelativeTimeFormat;u||t.onError(new _n(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,oi.MISSING_INTL_API));try{return V3(t,i,o).format(l,r)}catch(f){t.onError(new Ba("Error formatting relative time.",t.locale,f))}return String(l)}var G3=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function b1(t,i,l){var r=t.locale,o=t.formats,u=t.onError;l===void 0&&(l={});var f=l.format,h=f&&Sh(o,"number",f,u)||{},g=er(l,G3,h);return i(r,g)}function Y3(t,i,l,r){r===void 0&&(r={});try{return b1(t,i,r).format(l)}catch(o){t.onError(new Ba("Error formatting number.",t.locale,o))}return String(l)}function X3(t,i,l,r){r===void 0&&(r={});try{return b1(t,i,r).formatToParts(l)}catch(o){t.onError(new Ba("Error formatting number.",t.locale,o))}return[]}function Q3(t){var i=t?t[Object.keys(t)[0]]:void 0;return typeof i=="string"}function W3(t){t.onWarn&&t.defaultRichTextElements&&Q3(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Z3(t,i){var l=N3(i),r=ue(ue({},m1),t),o=r.locale,u=r.defaultLocale,f=r.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&f?f(new g0('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&f&&f(new g0('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(f&&f(new E3('"locale" was not configured, using "'.concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),W3(r),ue(ue({},r),{formatters:l,formatNumber:Y3.bind(null,r,l.getNumberFormat),formatNumberToParts:X3.bind(null,r,l.getNumberFormat),formatRelativeTime:F3.bind(null,r,l.getRelativeTimeFormat),formatDate:O3.bind(null,r,l.getDateTimeFormat),formatDateToParts:z3.bind(null,r,l.getDateTimeFormat),formatTime:k3.bind(null,r,l.getDateTimeFormat),formatDateTimeRange:R3.bind(null,r,l.getDateTimeFormat),formatTimeToParts:D3.bind(null,r,l.getDateTimeFormat),formatPlural:P3.bind(null,r,l.getPluralRules),formatMessage:Ff.bind(null,r,l),$t:Ff.bind(null,r,l),formatList:U3.bind(null,r,l.getListFormat),formatListToParts:v1.bind(null,r,l.getListFormat),formatDisplayName:j3.bind(null,r,l.getDisplayNames)})}function K3(t,i,l){if(l===void 0&&(l=Error),!t)throw new l(i)}function y1(t){K3(t,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var _1=ue(ue({},m1),{textComponent:k.Fragment}),J3=function(t,i){return k.isValidElement(t)?k.cloneElement(t,{key:i}):t},x1=function(t){var i;return(i=k.Children.map(t,J3))!==null&&i!==void 0?i:[]};function e4(t){return function(i){return t(x1(i))}}function Gf(t,i){if(t===i)return!0;if(!t||!i)return!1;var l=Object.keys(t),r=Object.keys(i),o=l.length;if(r.length!==o)return!1;for(var u=0;u<o;u++){var f=l[u];if(t[f]!==i[f]||!Object.prototype.hasOwnProperty.call(i,f))return!1}return!0}var sf={exports:{}},je={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function t4(){if(_0)return je;_0=1;var t=typeof Symbol=="function"&&Symbol.for,i=t?Symbol.for("react.element"):60103,l=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,h=t?Symbol.for("react.context"):60110,g=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,b=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,_=t?Symbol.for("react.memo"):60115,S=t?Symbol.for("react.lazy"):60116,A=t?Symbol.for("react.block"):60121,M=t?Symbol.for("react.fundamental"):60117,T=t?Symbol.for("react.responder"):60118,D=t?Symbol.for("react.scope"):60119;function H(O){if(typeof O=="object"&&O!==null){var W=O.$$typeof;switch(W){case i:switch(O=O.type,O){case g:case p:case r:case u:case o:case y:return O;default:switch(O=O&&O.$$typeof,O){case h:case b:case S:case _:case f:return O;default:return W}}case l:return W}}}function L(O){return H(O)===p}return je.AsyncMode=g,je.ConcurrentMode=p,je.ContextConsumer=h,je.ContextProvider=f,je.Element=i,je.ForwardRef=b,je.Fragment=r,je.Lazy=S,je.Memo=_,je.Portal=l,je.Profiler=u,je.StrictMode=o,je.Suspense=y,je.isAsyncMode=function(O){return L(O)||H(O)===g},je.isConcurrentMode=L,je.isContextConsumer=function(O){return H(O)===h},je.isContextProvider=function(O){return H(O)===f},je.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===i},je.isForwardRef=function(O){return H(O)===b},je.isFragment=function(O){return H(O)===r},je.isLazy=function(O){return H(O)===S},je.isMemo=function(O){return H(O)===_},je.isPortal=function(O){return H(O)===l},je.isProfiler=function(O){return H(O)===u},je.isStrictMode=function(O){return H(O)===o},je.isSuspense=function(O){return H(O)===y},je.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===r||O===p||O===u||O===o||O===y||O===w||typeof O=="object"&&O!==null&&(O.$$typeof===S||O.$$typeof===_||O.$$typeof===f||O.$$typeof===h||O.$$typeof===b||O.$$typeof===M||O.$$typeof===T||O.$$typeof===D||O.$$typeof===A)},je.typeOf=H,je}var x0;function a4(){return x0||(x0=1,sf.exports=t4()),sf.exports}var of,w0;function i4(){if(w0)return of;w0=1;var t=a4(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[t.ForwardRef]=r,u[t.Memo]=o;function f(S){return t.isMemo(S)?o:u[S.$$typeof]||i}var h=Object.defineProperty,g=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,w=Object.prototype;function _(S,A,M){if(typeof A!="string"){if(w){var T=y(A);T&&T!==w&&_(S,T,M)}var D=g(A);p&&(D=D.concat(p(A)));for(var H=f(S),L=f(A),O=0;O<D.length;++O){var W=D[O];if(!l[W]&&!(M&&M[W])&&!(L&&L[W])&&!(H&&H[W])){var Q=b(A,W);try{h(S,W,Q)}catch{}}}}return S}return of=_,of}i4();var Eh=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=k.createContext(null)):k.createContext(null);Eh.Consumer;var n4=Eh.Provider,l4=n4,r4=Eh;function De(){var t=k.useContext(r4);return y1(t),t}var Yf;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(Yf||(Yf={}));var Xf;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(Xf||(Xf={}));function w1(t){var i=function(l){var r=De(),o=l.value,u=l.children,f=Yl(l,["value","children"]),h=typeof o=="string"?new Date(o||0):o,g=t==="formatDate"?r.formatDateToParts(h,f):r.formatTimeToParts(h,f);return u(g)};return i.displayName=Xf[t],i}function As(t){var i=function(l){var r=De(),o=l.value,u=l.children,f=Yl(l,["value","children"]),h=r[t](o,f);if(typeof u=="function")return u(h);var g=r.textComponent||k.Fragment;return k.createElement(g,null,h)};return i.displayName=Yf[t],i}function S1(t){return t&&Object.keys(t).reduce(function(i,l){var r=t[l];return i[l]=h1(r)?e4(r):r,i},{})}var S0=function(t,i,l,r){for(var o=[],u=4;u<arguments.length;u++)o[u-4]=arguments[u];var f=S1(r),h=Ff.apply(void 0,ni([t,i,l,f],o,!1));return Array.isArray(h)?x1(h):h},E0=function(t,i){var l=t.defaultRichTextElements,r=Yl(t,["defaultRichTextElements"]),o=S1(l),u=Z3(ue(ue(ue({},_1),r),{defaultRichTextElements:o}),i),f={locale:u.locale,timeZone:u.timeZone,fallbackOnEmptyString:u.fallbackOnEmptyString,formats:u.formats,defaultLocale:u.defaultLocale,defaultFormats:u.defaultFormats,messages:u.messages,onError:u.onError,defaultRichTextElements:o};return ue(ue({},u),{formatMessage:S0.bind(null,f,u.formatters),$t:S0.bind(null,f,u.formatters)})};function s4(t,i){var l=t.values,r=Yl(t,["values"]),o=i.values,u=Yl(i,["values"]);return Gf(o,l)&&Gf(r,u)}function E1(t){var i=De(),l=i.formatMessage,r=i.textComponent,o=r===void 0?k.Fragment:r,u=t.id,f=t.description,h=t.defaultMessage,g=t.values,p=t.children,b=t.tagName,y=b===void 0?o:b,w=t.ignoreTag,_={id:u,description:f,defaultMessage:h},S=l(_,g,{ignoreTag:w});return typeof p=="function"?p(Array.isArray(S)?S:[S]):y?k.createElement(y,null,S):k.createElement(k.Fragment,null,S)}E1.displayName="FormattedMessage";var ae=k.memo(E1,s4);ae.displayName="MemoizedFormattedMessage";function cf(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var C1=(function(t){La(i,t);function i(){var l=t!==null&&t.apply(this,arguments)||this;return l.cache=g1(),l.state={cache:l.cache,intl:E0(cf(l.props),l.cache),prevConfig:cf(l.props)},l}return i.getDerivedStateFromProps=function(l,r){var o=r.prevConfig,u=r.cache,f=cf(l);return Gf(o,f)?null:{intl:E0(f,u),prevConfig:f}},i.prototype.render=function(){return y1(this.state.intl),k.createElement(l4,{value:this.state.intl},this.props.children)},i.displayName="IntlProvider",i.defaultProps=_1,i})(k.PureComponent);As("formatDate");As("formatTime");As("formatNumber");As("formatList");As("formatDisplayName");w1("formatDate");w1("formatTime");var o4=yt`
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
`,wt=class extends rt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,i=t?mc`a`:mc`button`;return sc`
      <${i}
        part="base"
        class=${ft({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${be(t?void 0:this.disabled)}
        type=${be(t?void 0:"button")}
        href=${be(t?this.href:void 0)}
        target=${be(t?this.target:void 0)}
        download=${be(t?this.download:void 0)}
        rel=${be(t&&this.target?"noreferrer noopener":void 0)}
        role=${be(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${be(this.name)}
          library=${be(this.library)}
          src=${be(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${i}>
    `}};wt.styles=[$t,o4];wt.dependencies={"sl-icon":Ft};C([We(".icon-button")],wt.prototype,"button",2);C([ht()],wt.prototype,"hasFocus",2);C([B()],wt.prototype,"name",2);C([B()],wt.prototype,"library",2);C([B()],wt.prototype,"src",2);C([B()],wt.prototype,"href",2);C([B()],wt.prototype,"target",2);C([B()],wt.prototype,"download",2);C([B()],wt.prototype,"label",2);C([B({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);var c4="sl-icon-button";wt.define("sl-icon-button");var u4=Jt({tagName:c4,elementClass:wt,react:qt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),Nt=u4;const d4="_header_c0rsb_1",f4="_logo_c0rsb_30",uf={header:d4,logo:f4};function fi({headerActions:t,showBackButton:i=!1,onBack:l}){const r=De(),o=Vt(),u=()=>{l?l():o(-1)};return m.jsxs("header",{className:uf.header,children:[i?m.jsx(Nt,{name:"chevron-left",label:r.formatMessage({id:"navigation.back"}),onClick:u}):m.jsx("div",{"data-testid":"header-logo",className:uf.logo}),m.jsx("div",{className:uf.actions,children:t})]})}function Ch(t,i,l){const r=Xl(t,l?.in);return isNaN(i)?dc(t,NaN):(i&&r.setDate(r.getDate()+i),r)}function h4(t,i,l){const r=Xl(t,l?.in);if(isNaN(i))return dc(t,NaN);const o=r.getDate(),u=dc(t,r.getTime());u.setMonth(r.getMonth()+i+1,0);const f=u.getDate();return o>=f?u:(r.setFullYear(u.getFullYear(),u.getMonth(),o),r)}function T1(t,i,l){return Ch(t,i*7,l)}function p4(t,i,l){return h4(t,i*12,l)}function m4(t,i,l){const[r,o]=P_(l?.in,t,i);return+Cf(r)==+Cf(o)}function df(t,i){return+Xl(t)<+Xl(i)}function Th(t,i){const l=()=>dc(i?.in,NaN),o=y4(t);let u;if(o.date){const p=_4(o.date,2);u=x4(p.restDateString,p.year)}if(!u||isNaN(+u))return l();const f=+u;let h=0,g;if(o.time&&(h=w4(o.time),isNaN(h)))return l();if(o.timezone){if(g=S4(o.timezone),isNaN(g))return l()}else{const p=new Date(f+h),b=Xl(0,i?.in);return b.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),b.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),b}return Xl(f+h+g,i?.in)}const Jo={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},g4=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,v4=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,b4=/^([+-])(\d{2})(?::?(\d{2}))?$/;function y4(t){const i={},l=t.split(Jo.dateTimeDelimiter);let r;if(l.length>2)return i;if(/:/.test(l[0])?r=l[0]:(i.date=l[0],r=l[1],Jo.timeZoneDelimiter.test(i.date)&&(i.date=t.split(Jo.timeZoneDelimiter)[0],r=t.substr(i.date.length,t.length))),r){const o=Jo.timezone.exec(r);o?(i.time=r.replace(o[1],""),i.timezone=o[1]):i.time=r}return i}function _4(t,i){const l=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+i)+"})|(\\d{2}|[+-]\\d{"+(2+i)+"})$)"),r=t.match(l);if(!r)return{year:NaN,restDateString:""};const o=r[1]?parseInt(r[1]):null,u=r[2]?parseInt(r[2]):null;return{year:u===null?o:u*100,restDateString:t.slice((r[1]||r[2]).length)}}function x4(t,i){if(i===null)return new Date(NaN);const l=t.match(g4);if(!l)return new Date(NaN);const r=!!l[4],o=ss(l[1]),u=ss(l[2])-1,f=ss(l[3]),h=ss(l[4]),g=ss(l[5])-1;if(r)return M4(i,h,g)?E4(i,h,g):new Date(NaN);{const p=new Date(0);return!T4(i,u,f)||!A4(i,o)?new Date(NaN):(p.setUTCFullYear(i,u,Math.max(o,f)),p)}}function ss(t){return t?parseInt(t):1}function w4(t){const i=t.match(v4);if(!i)return NaN;const l=ff(i[1]),r=ff(i[2]),o=ff(i[3]);return N4(l,r,o)?l*ob+r*cb+o*1e3:NaN}function ff(t){return t&&parseFloat(t.replace(",","."))||0}function S4(t){if(t==="Z")return 0;const i=t.match(b4);if(!i)return 0;const l=i[1]==="+"?-1:1,r=parseInt(i[2]),o=i[3]&&parseInt(i[3])||0;return $4(r,o)?l*(r*ob+o*cb):NaN}function E4(t,i,l){const r=new Date(0);r.setUTCFullYear(t,0,4);const o=r.getUTCDay()||7,u=(i-1)*7+l+1-o;return r.setUTCDate(r.getUTCDate()+u),r}const C4=[31,null,31,30,31,30,31,31,30,31,30,31];function A1(t){return t%400===0||t%4===0&&t%100!==0}function T4(t,i,l){return i>=0&&i<=11&&l>=1&&l<=(C4[i]||(A1(t)?29:28))}function A4(t,i){return i>=1&&i<=(A1(t)?366:365)}function M4(t,i,l){return i>=1&&i<=53&&l>=0&&l<=6}function N4(t,i,l){return t===24?i===0&&l===0:l>=0&&l<60&&i>=0&&i<60&&t>=0&&t<25}function $4(t,i){return i>=0&&i<=59}function O4(t,i,l){return T1(t,-1,l)}function C0(t,i,l){return p4(t,-13,l)}const k4=Cv.default||Cv;async function R4(t,i,l){const{value:r}=await Tf.canShare();if(!r){console.warn("Sharing is not available on this device.");return}const o=document.getElementById(t);if(!o){console.error(`Element with ID "${t}" not found.`);return}const u=o.querySelector(".hide-for-sharing");u&&(u.style.visibility="hidden");const f=document.createElement("div");f.style.position="absolute",f.style.left="-9999px",f.style.top="0",f.style.overflow="visible",f.style.height="auto",f.style.width="auto",f.style.maxHeight="none",f.style.maxWidth="none";const h=o.cloneNode(!0);h.style.width="auto",h.style.height="auto",h.style.maxHeight="none",h.style.overflow="visible";const g=h.querySelector(".weekGroup");g&&(g.style.overflow="visible",g.style.height="auto",g.style.width="auto",g.style.maxHeight="none",g.style.maxWidth="none"),f.appendChild(h),document.body.appendChild(f);try{const b=(await k4(f,{useCORS:!0,scale:2})).toDataURL("image/png");if(zi.isNativePlatform()){const y=await q_.writeFile({path:`share-${Date.now()}.png`,data:b,directory:V_.Cache});await Tf.share({title:i,text:l,files:[y.uri]})}else{const y=await(await fetch(b)).blob(),w=new File([y],"roster.png",{type:"image/png"}),_={title:i,text:l,files:[w]};if(navigator.canShare&&navigator.canShare(_))await navigator.share(_);else{const S=document.createElement("a");S.href=b,S.download=`roster-${Date.now()}.png`,document.body.appendChild(S),S.click(),document.body.removeChild(S)}}}catch(p){console.error("Could not share image:",p)}finally{u&&(u.style.visibility="visible"),document.body.removeChild(f)}}async function z4(t,i,l,r){const o=zi.isNativePlatform()?"https://ismyhorse.com":window.location.origin;await Tf.share({title:i,text:l,url:`${o}${t}`,dialogTitle:r})}const D4=async()=>{if(zi.isNativePlatform())try{return(await F_.getPhoto({quality:90,allowEditing:!1,resultType:Y_.DataUrl,source:G_.Prompt})).dataUrl??null}catch{return null}return new Promise(t=>{const i=document.createElement("input");i.type="file",i.accept="image/*",i.style.display="none";const l=()=>{document.body.contains(i)&&document.body.removeChild(i)};i.onchange=()=>{const r=i.files?.[0];if(r){const o=new FileReader;o.onload=u=>{t(u.target?.result),l()},o.onerror=()=>{t(null),l()},o.readAsDataURL(r)}else t(null),l()},i.oncancel=()=>{t(null),l()},document.body.appendChild(i),i.click()})};var L4=yt`
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
`;function*Ah(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Wx(Ah(t.shadowRoot.activeElement))))}function j4(){return[...Ah()].pop()}var T0=new WeakMap;function M1(t){let i=T0.get(t);return i||(i=window.getComputedStyle(t,null),T0.set(t,i)),i}function B4(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const i=M1(t);return i.visibility!=="hidden"&&i.display!=="none"}function H4(t){const i=M1(t),{overflowY:l,overflowX:r}=i;return l==="scroll"||r==="scroll"?!0:l!=="auto"||r!=="auto"?!1:t.scrollHeight>t.clientHeight&&l==="auto"||t.scrollWidth>t.clientWidth&&r==="auto"}function U4(t){const i=t.tagName.toLowerCase(),l=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(l)||l<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(i==="input"&&t.getAttribute("type")==="radio"){const u=t.getRootNode(),f=`input[type='radio'][name="${t.getAttribute("name")}"]`,h=u.querySelector(`${f}:checked`);return h?h===t:u.querySelector(f)===t}return B4(t)?(i==="audio"||i==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(i)?!0:H4(t):!1}function I4(t,i){var l;return((l=t.getRootNode({composed:!0}))==null?void 0:l.host)!==i}function A0(t){const i=new WeakMap,l=[];function r(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||i.has(o))return;i.set(o,!0),!l.includes(o)&&U4(o)&&l.push(o),o instanceof HTMLSlotElement&&I4(o,t)&&o.assignedElements({flatten:!0}).forEach(u=>{r(u)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&r(o.shadowRoot)}for(const u of o.children)r(u)}return r(t),l.sort((o,u)=>{const f=Number(o.getAttribute("tabindex"))||0;return(Number(u.getAttribute("tabindex"))||0)-f})}var os=[],N1=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{var l;if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=j4();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=A0(this.element);let u=o.findIndex(h=>h===r);this.previousFocus=this.currentFocus;const f=this.tabDirection==="forward"?1:-1;for(;;){u+f>=o.length?u=0:u+f<0?u=o.length-1:u+=f,this.previousFocus=this.currentFocus;const h=o[u];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||h&&this.possiblyHasTabbableChildren(h))return;i.preventDefault(),this.currentFocus=h,(l=this.currentFocus)==null||l.focus({preventScroll:!1});const g=[...Ah()];if(g.includes(this.currentFocus)||!g.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){os.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){os=os.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return os[os.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=A0(this.element);if(!this.element.matches(":focus-within")){const i=t[0],l=t[t.length-1],r=this.tabDirection==="forward"?i:l;typeof r?.focus=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function P4(t,i){return{top:Math.round(t.getBoundingClientRect().top-i.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-i.getBoundingClientRect().left)}}var Qf=new Set;function q4(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function V4(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function bs(t){if(Qf.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const i=q4()+V4();let l=getComputedStyle(document.documentElement).scrollbarGutter;(!l||l==="auto")&&(l="stable"),i<2&&(l=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",l),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${i}px`)}}function ys(t){Qf.delete(t),Qf.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Wf(t,i,l="vertical",r="smooth"){const o=P4(t,i),u=o.top+i.scrollTop,f=o.left+i.scrollLeft,h=i.scrollLeft,g=i.scrollLeft+i.offsetWidth,p=i.scrollTop,b=i.scrollTop+i.offsetHeight;(l==="horizontal"||l==="both")&&(f<h?i.scrollTo({left:f,behavior:r}):f+t.clientWidth>g&&i.scrollTo({left:f-i.offsetWidth+t.clientWidth,behavior:r})),(l==="vertical"||l==="both")&&(u<p?i.scrollTo({top:u,behavior:r}):u+t.clientHeight>b&&i.scrollTo({top:u-i.offsetHeight+t.clientHeight,behavior:r}))}var $1=t=>{var i;const{activeElement:l}=document;l&&t.contains(l)&&((i=document.activeElement)==null||i.blur())},O1=new Map,F4=new WeakMap;function G4(t){return t??{keyframes:[],options:{duration:0}}}function M0(t,i){return i.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ot(t,i){O1.set(t,G4(i))}function ka(t,i,l){const r=F4.get(t);if(r?.[i])return M0(r[i],l.dir);const o=O1.get(i);return o?M0(o,l.dir):{keyframes:[],options:{duration:0}}}function Kl(t,i){return new Promise(l=>{function r(o){o.target===t&&(t.removeEventListener(i,r),l())}t.addEventListener(i,r)})}function Ra(t,i,l){return new Promise(r=>{if(l?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(i,Ec(bn({},l),{duration:Y4()?0:l.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function Y4(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function li(t){return Promise.all(t.getAnimations().map(i=>new Promise(l=>{i.cancel(),requestAnimationFrame(l)})))}function N0(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ra=class extends rt{constructor(){super(...arguments),this.hasSlotController=new Kn(this,"footer"),this.localize=new ja(this),this.modal=new N1(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),bs(this)))}disconnectedCallback(){super.disconnectedCallback(),ys(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const l=ka(this,"drawer.denyClose",{dir:this.localize.dir()});Ra(this.panel,l.keyframes,l.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),bs(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([li(this.drawer),li(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const i=ka(this,`drawer.show${N0(this.placement)}`,{dir:this.localize.dir()}),l=ka(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ra(this.panel,i.keyframes,i.options),Ra(this.overlay,l.keyframes,l.options)]),this.emit("sl-after-show")}else{$1(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ys(this)),await Promise.all([li(this.drawer),li(this.overlay)]);const t=ka(this,`drawer.hide${N0(this.placement)}`,{dir:this.localize.dir()}),i=ka(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ra(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),Ra(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const l=this.originalTrigger;typeof l?.focus=="function"&&setTimeout(()=>l.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),bs(this)),this.open&&this.contained&&(this.modal.deactivate(),ys(this))}async show(){if(!this.open)return this.open=!0,Kl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Kl(this,"sl-after-hide")}render(){return Se`
      <div
        part="base"
        class=${ft({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${be(this.noHeader?this.label:void 0)}
          aria-labelledby=${be(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":Se`
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
    `}};ra.styles=[$t,L4];ra.dependencies={"sl-icon-button":wt};C([We(".drawer")],ra.prototype,"drawer",2);C([We(".drawer__panel")],ra.prototype,"panel",2);C([We(".drawer__overlay")],ra.prototype,"overlay",2);C([B({type:Boolean,reflect:!0})],ra.prototype,"open",2);C([B({reflect:!0})],ra.prototype,"label",2);C([B({reflect:!0})],ra.prototype,"placement",2);C([B({type:Boolean,reflect:!0})],ra.prototype,"contained",2);C([B({attribute:"no-header",type:Boolean,reflect:!0})],ra.prototype,"noHeader",2);C([Ve("open",{waitUntilFirstUpdate:!0})],ra.prototype,"handleOpenChange",1);C([Ve("contained",{waitUntilFirstUpdate:!0})],ra.prototype,"handleNoModalChange",1);Ot("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ot("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Ot("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ot("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Ot("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ot("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Ot("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ot("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Ot("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Ot("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ot("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var X4="sl-drawer";ra.define("sl-drawer");var Q4=Jt({tagName:X4,elementClass:ra,react:qt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"}),hi=Q4,W4=yt`
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
`,Jn=class extends rt{constructor(){super(...arguments),this.localize=new ja(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return Se`
      <span
        part="base"
        class=${ft({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?Se`
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
    `}};Jn.styles=[$t,W4];Jn.dependencies={"sl-icon-button":wt};C([B({reflect:!0})],Jn.prototype,"variant",2);C([B({reflect:!0})],Jn.prototype,"size",2);C([B({type:Boolean,reflect:!0})],Jn.prototype,"pill",2);C([B({type:Boolean})],Jn.prototype,"removable",2);var Z4=yt`
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
`,$c=yt`
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
`,K4=yt`
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
`;const mn=Math.min,ga=Math.max,gc=Math.round,ec=Math.floor,ri=t=>({x:t,y:t}),J4={left:"right",right:"left",bottom:"top",top:"bottom"},e5={start:"end",end:"start"};function Zf(t,i,l){return ga(t,mn(i,l))}function tr(t,i){return typeof t=="function"?t(i):t}function gn(t){return t.split("-")[0]}function ar(t){return t.split("-")[1]}function k1(t){return t==="x"?"y":"x"}function Mh(t){return t==="y"?"height":"width"}const t5=new Set(["top","bottom"]);function Ri(t){return t5.has(gn(t))?"y":"x"}function Nh(t){return k1(Ri(t))}function a5(t,i,l){l===void 0&&(l=!1);const r=ar(t),o=Nh(t),u=Mh(o);let f=o==="x"?r===(l?"end":"start")?"right":"left":r==="start"?"bottom":"top";return i.reference[u]>i.floating[u]&&(f=vc(f)),[f,vc(f)]}function i5(t){const i=vc(t);return[Kf(t),i,Kf(i)]}function Kf(t){return t.replace(/start|end/g,i=>e5[i])}const $0=["left","right"],O0=["right","left"],n5=["top","bottom"],l5=["bottom","top"];function r5(t,i,l){switch(t){case"top":case"bottom":return l?i?O0:$0:i?$0:O0;case"left":case"right":return i?n5:l5;default:return[]}}function s5(t,i,l,r){const o=ar(t);let u=r5(gn(t),l==="start",r);return o&&(u=u.map(f=>f+"-"+o),i&&(u=u.concat(u.map(Kf)))),u}function vc(t){return t.replace(/left|right|bottom|top/g,i=>J4[i])}function o5(t){return{top:0,right:0,bottom:0,left:0,...t}}function R1(t){return typeof t!="number"?o5(t):{top:t,right:t,bottom:t,left:t}}function bc(t){const{x:i,y:l,width:r,height:o}=t;return{width:r,height:o,top:l,left:i,right:i+r,bottom:l+o,x:i,y:l}}function k0(t,i,l){let{reference:r,floating:o}=t;const u=Ri(i),f=Nh(i),h=Mh(f),g=gn(i),p=u==="y",b=r.x+r.width/2-o.width/2,y=r.y+r.height/2-o.height/2,w=r[h]/2-o[h]/2;let _;switch(g){case"top":_={x:b,y:r.y-o.height};break;case"bottom":_={x:b,y:r.y+r.height};break;case"right":_={x:r.x+r.width,y};break;case"left":_={x:r.x-o.width,y};break;default:_={x:r.x,y:r.y}}switch(ar(i)){case"start":_[f]-=w*(l&&p?-1:1);break;case"end":_[f]+=w*(l&&p?-1:1);break}return _}const c5=async(t,i,l)=>{const{placement:r="bottom",strategy:o="absolute",middleware:u=[],platform:f}=l,h=u.filter(Boolean),g=await(f.isRTL==null?void 0:f.isRTL(i));let p=await f.getElementRects({reference:t,floating:i,strategy:o}),{x:b,y}=k0(p,r,g),w=r,_={},S=0;for(let A=0;A<h.length;A++){const{name:M,fn:T}=h[A],{x:D,y:H,data:L,reset:O}=await T({x:b,y,initialPlacement:r,placement:w,strategy:o,middlewareData:_,rects:p,platform:f,elements:{reference:t,floating:i}});b=D??b,y=H??y,_={..._,[M]:{..._[M],...L}},O&&S<=50&&(S++,typeof O=="object"&&(O.placement&&(w=O.placement),O.rects&&(p=O.rects===!0?await f.getElementRects({reference:t,floating:i,strategy:o}):O.rects),{x:b,y}=k0(p,w,g)),A=-1)}return{x:b,y,placement:w,strategy:o,middlewareData:_}};async function $h(t,i){var l;i===void 0&&(i={});const{x:r,y:o,platform:u,rects:f,elements:h,strategy:g}=t,{boundary:p="clippingAncestors",rootBoundary:b="viewport",elementContext:y="floating",altBoundary:w=!1,padding:_=0}=tr(i,t),S=R1(_),M=h[w?y==="floating"?"reference":"floating":y],T=bc(await u.getClippingRect({element:(l=await(u.isElement==null?void 0:u.isElement(M)))==null||l?M:M.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(h.floating)),boundary:p,rootBoundary:b,strategy:g})),D=y==="floating"?{x:r,y:o,width:f.floating.width,height:f.floating.height}:f.reference,H=await(u.getOffsetParent==null?void 0:u.getOffsetParent(h.floating)),L=await(u.isElement==null?void 0:u.isElement(H))?await(u.getScale==null?void 0:u.getScale(H))||{x:1,y:1}:{x:1,y:1},O=bc(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:D,offsetParent:H,strategy:g}):D);return{top:(T.top-O.top+S.top)/L.y,bottom:(O.bottom-T.bottom+S.bottom)/L.y,left:(T.left-O.left+S.left)/L.x,right:(O.right-T.right+S.right)/L.x}}const u5=t=>({name:"arrow",options:t,async fn(i){const{x:l,y:r,placement:o,rects:u,platform:f,elements:h,middlewareData:g}=i,{element:p,padding:b=0}=tr(t,i)||{};if(p==null)return{};const y=R1(b),w={x:l,y:r},_=Nh(o),S=Mh(_),A=await f.getDimensions(p),M=_==="y",T=M?"top":"left",D=M?"bottom":"right",H=M?"clientHeight":"clientWidth",L=u.reference[S]+u.reference[_]-w[_]-u.floating[S],O=w[_]-u.reference[_],W=await(f.getOffsetParent==null?void 0:f.getOffsetParent(p));let Q=W?W[H]:0;(!Q||!await(f.isElement==null?void 0:f.isElement(W)))&&(Q=h.floating[H]||u.floating[S]);const X=L/2-O/2,P=Q/2-A[S]/2-1,F=mn(y[T],P),ee=mn(y[D],P),ie=F,Z=Q-A[S]-ee,re=Q/2-A[S]/2+X,te=Zf(ie,re,Z),U=!g.arrow&&ar(o)!=null&&re!==te&&u.reference[S]/2-(re<ie?F:ee)-A[S]/2<0,K=U?re<ie?re-ie:re-Z:0;return{[_]:w[_]+K,data:{[_]:te,centerOffset:re-te-K,...U&&{alignmentOffset:K}},reset:U}}}),d5=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(i){var l,r;const{placement:o,middlewareData:u,rects:f,initialPlacement:h,platform:g,elements:p}=i,{mainAxis:b=!0,crossAxis:y=!0,fallbackPlacements:w,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:A=!0,...M}=tr(t,i);if((l=u.arrow)!=null&&l.alignmentOffset)return{};const T=gn(o),D=Ri(h),H=gn(h)===h,L=await(g.isRTL==null?void 0:g.isRTL(p.floating)),O=w||(H||!A?[vc(h)]:i5(h)),W=S!=="none";!w&&W&&O.push(...s5(h,A,S,L));const Q=[h,...O],X=await $h(i,M),P=[];let F=((r=u.flip)==null?void 0:r.overflows)||[];if(b&&P.push(X[T]),y){const re=a5(o,f,L);P.push(X[re[0]],X[re[1]])}if(F=[...F,{placement:o,overflows:P}],!P.every(re=>re<=0)){var ee,ie;const re=(((ee=u.flip)==null?void 0:ee.index)||0)+1,te=Q[re];if(te&&(!(y==="alignment"?D!==Ri(te):!1)||F.every(J=>Ri(J.placement)===D?J.overflows[0]>0:!0)))return{data:{index:re,overflows:F},reset:{placement:te}};let U=(ie=F.filter(K=>K.overflows[0]<=0).sort((K,J)=>K.overflows[1]-J.overflows[1])[0])==null?void 0:ie.placement;if(!U)switch(_){case"bestFit":{var Z;const K=(Z=F.filter(J=>{if(W){const oe=Ri(J.placement);return oe===D||oe==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(oe=>oe>0).reduce((oe,xe)=>oe+xe,0)]).sort((J,oe)=>J[1]-oe[1])[0])==null?void 0:Z[0];K&&(U=K);break}case"initialPlacement":U=h;break}if(o!==U)return{reset:{placement:U}}}return{}}}},f5=new Set(["left","top"]);async function h5(t,i){const{placement:l,platform:r,elements:o}=t,u=await(r.isRTL==null?void 0:r.isRTL(o.floating)),f=gn(l),h=ar(l),g=Ri(l)==="y",p=f5.has(f)?-1:1,b=u&&g?-1:1,y=tr(i,t);let{mainAxis:w,crossAxis:_,alignmentAxis:S}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return h&&typeof S=="number"&&(_=h==="end"?S*-1:S),g?{x:_*b,y:w*p}:{x:w*p,y:_*b}}const p5=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(i){var l,r;const{x:o,y:u,placement:f,middlewareData:h}=i,g=await h5(i,t);return f===((l=h.offset)==null?void 0:l.placement)&&(r=h.arrow)!=null&&r.alignmentOffset?{}:{x:o+g.x,y:u+g.y,data:{...g,placement:f}}}}},m5=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(i){const{x:l,y:r,placement:o}=i,{mainAxis:u=!0,crossAxis:f=!1,limiter:h={fn:M=>{let{x:T,y:D}=M;return{x:T,y:D}}},...g}=tr(t,i),p={x:l,y:r},b=await $h(i,g),y=Ri(gn(o)),w=k1(y);let _=p[w],S=p[y];if(u){const M=w==="y"?"top":"left",T=w==="y"?"bottom":"right",D=_+b[M],H=_-b[T];_=Zf(D,_,H)}if(f){const M=y==="y"?"top":"left",T=y==="y"?"bottom":"right",D=S+b[M],H=S-b[T];S=Zf(D,S,H)}const A=h.fn({...i,[w]:_,[y]:S});return{...A,data:{x:A.x-l,y:A.y-r,enabled:{[w]:u,[y]:f}}}}}},g5=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(i){var l,r;const{placement:o,rects:u,platform:f,elements:h}=i,{apply:g=()=>{},...p}=tr(t,i),b=await $h(i,p),y=gn(o),w=ar(o),_=Ri(o)==="y",{width:S,height:A}=u.floating;let M,T;y==="top"||y==="bottom"?(M=y,T=w===(await(f.isRTL==null?void 0:f.isRTL(h.floating))?"start":"end")?"left":"right"):(T=y,M=w==="end"?"top":"bottom");const D=A-b.top-b.bottom,H=S-b.left-b.right,L=mn(A-b[M],D),O=mn(S-b[T],H),W=!i.middlewareData.shift;let Q=L,X=O;if((l=i.middlewareData.shift)!=null&&l.enabled.x&&(X=H),(r=i.middlewareData.shift)!=null&&r.enabled.y&&(Q=D),W&&!w){const F=ga(b.left,0),ee=ga(b.right,0),ie=ga(b.top,0),Z=ga(b.bottom,0);_?X=S-2*(F!==0||ee!==0?F+ee:ga(b.left,b.right)):Q=A-2*(ie!==0||Z!==0?ie+Z:ga(b.top,b.bottom))}await g({...i,availableWidth:X,availableHeight:Q});const P=await f.getDimensions(h.floating);return S!==P.width||A!==P.height?{reset:{rects:!0}}:{}}}};function Oc(){return typeof window<"u"}function ir(t){return z1(t)?(t.nodeName||"").toLowerCase():"#document"}function va(t){var i;return(t==null||(i=t.ownerDocument)==null?void 0:i.defaultView)||window}function pi(t){var i;return(i=(z1(t)?t.ownerDocument:t.document)||window.document)==null?void 0:i.documentElement}function z1(t){return Oc()?t instanceof Node||t instanceof va(t).Node:!1}function Ga(t){return Oc()?t instanceof Element||t instanceof va(t).Element:!1}function ci(t){return Oc()?t instanceof HTMLElement||t instanceof va(t).HTMLElement:!1}function R0(t){return!Oc()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof va(t).ShadowRoot}const v5=new Set(["inline","contents"]);function Ms(t){const{overflow:i,overflowX:l,overflowY:r,display:o}=Ya(t);return/auto|scroll|overlay|hidden|clip/.test(i+r+l)&&!v5.has(o)}const b5=new Set(["table","td","th"]);function y5(t){return b5.has(ir(t))}const _5=[":popover-open",":modal"];function kc(t){return _5.some(i=>{try{return t.matches(i)}catch{return!1}})}const x5=["transform","translate","scale","rotate","perspective"],w5=["transform","translate","scale","rotate","perspective","filter"],S5=["paint","layout","strict","content"];function Rc(t){const i=Oh(),l=Ga(t)?Ya(t):t;return x5.some(r=>l[r]?l[r]!=="none":!1)||(l.containerType?l.containerType!=="normal":!1)||!i&&(l.backdropFilter?l.backdropFilter!=="none":!1)||!i&&(l.filter?l.filter!=="none":!1)||w5.some(r=>(l.willChange||"").includes(r))||S5.some(r=>(l.contain||"").includes(r))}function E5(t){let i=vn(t);for(;ci(i)&&!Jl(i);){if(Rc(i))return i;if(kc(i))return null;i=vn(i)}return null}function Oh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const C5=new Set(["html","body","#document"]);function Jl(t){return C5.has(ir(t))}function Ya(t){return va(t).getComputedStyle(t)}function zc(t){return Ga(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function vn(t){if(ir(t)==="html")return t;const i=t.assignedSlot||t.parentNode||R0(t)&&t.host||pi(t);return R0(i)?i.host:i}function D1(t){const i=vn(t);return Jl(i)?t.ownerDocument?t.ownerDocument.body:t.body:ci(i)&&Ms(i)?i:D1(i)}function ws(t,i,l){var r;i===void 0&&(i=[]),l===void 0&&(l=!0);const o=D1(t),u=o===((r=t.ownerDocument)==null?void 0:r.body),f=va(o);if(u){const h=Jf(f);return i.concat(f,f.visualViewport||[],Ms(o)?o:[],h&&l?ws(h):[])}return i.concat(o,ws(o,[],l))}function Jf(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function L1(t){const i=Ya(t);let l=parseFloat(i.width)||0,r=parseFloat(i.height)||0;const o=ci(t),u=o?t.offsetWidth:l,f=o?t.offsetHeight:r,h=gc(l)!==u||gc(r)!==f;return h&&(l=u,r=f),{width:l,height:r,$:h}}function kh(t){return Ga(t)?t:t.contextElement}function Gl(t){const i=kh(t);if(!ci(i))return ri(1);const l=i.getBoundingClientRect(),{width:r,height:o,$:u}=L1(i);let f=(u?gc(l.width):l.width)/r,h=(u?gc(l.height):l.height)/o;return(!f||!Number.isFinite(f))&&(f=1),(!h||!Number.isFinite(h))&&(h=1),{x:f,y:h}}const T5=ri(0);function j1(t){const i=va(t);return!Oh()||!i.visualViewport?T5:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function A5(t,i,l){return i===void 0&&(i=!1),!l||i&&l!==va(t)?!1:i}function Zn(t,i,l,r){i===void 0&&(i=!1),l===void 0&&(l=!1);const o=t.getBoundingClientRect(),u=kh(t);let f=ri(1);i&&(r?Ga(r)&&(f=Gl(r)):f=Gl(t));const h=A5(u,l,r)?j1(u):ri(0);let g=(o.left+h.x)/f.x,p=(o.top+h.y)/f.y,b=o.width/f.x,y=o.height/f.y;if(u){const w=va(u),_=r&&Ga(r)?va(r):r;let S=w,A=Jf(S);for(;A&&r&&_!==S;){const M=Gl(A),T=A.getBoundingClientRect(),D=Ya(A),H=T.left+(A.clientLeft+parseFloat(D.paddingLeft))*M.x,L=T.top+(A.clientTop+parseFloat(D.paddingTop))*M.y;g*=M.x,p*=M.y,b*=M.x,y*=M.y,g+=H,p+=L,S=va(A),A=Jf(S)}}return bc({width:b,height:y,x:g,y:p})}function Dc(t,i){const l=zc(t).scrollLeft;return i?i.left+l:Zn(pi(t)).left+l}function B1(t,i){const l=t.getBoundingClientRect(),r=l.left+i.scrollLeft-Dc(t,l),o=l.top+i.scrollTop;return{x:r,y:o}}function M5(t){let{elements:i,rect:l,offsetParent:r,strategy:o}=t;const u=o==="fixed",f=pi(r),h=i?kc(i.floating):!1;if(r===f||h&&u)return l;let g={scrollLeft:0,scrollTop:0},p=ri(1);const b=ri(0),y=ci(r);if((y||!y&&!u)&&((ir(r)!=="body"||Ms(f))&&(g=zc(r)),ci(r))){const _=Zn(r);p=Gl(r),b.x=_.x+r.clientLeft,b.y=_.y+r.clientTop}const w=f&&!y&&!u?B1(f,g):ri(0);return{width:l.width*p.x,height:l.height*p.y,x:l.x*p.x-g.scrollLeft*p.x+b.x+w.x,y:l.y*p.y-g.scrollTop*p.y+b.y+w.y}}function N5(t){return Array.from(t.getClientRects())}function $5(t){const i=pi(t),l=zc(t),r=t.ownerDocument.body,o=ga(i.scrollWidth,i.clientWidth,r.scrollWidth,r.clientWidth),u=ga(i.scrollHeight,i.clientHeight,r.scrollHeight,r.clientHeight);let f=-l.scrollLeft+Dc(t);const h=-l.scrollTop;return Ya(r).direction==="rtl"&&(f+=ga(i.clientWidth,r.clientWidth)-o),{width:o,height:u,x:f,y:h}}const z0=25;function O5(t,i){const l=va(t),r=pi(t),o=l.visualViewport;let u=r.clientWidth,f=r.clientHeight,h=0,g=0;if(o){u=o.width,f=o.height;const b=Oh();(!b||b&&i==="fixed")&&(h=o.offsetLeft,g=o.offsetTop)}const p=Dc(r);if(p<=0){const b=r.ownerDocument,y=b.body,w=getComputedStyle(y),_=b.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,S=Math.abs(r.clientWidth-y.clientWidth-_);S<=z0&&(u-=S)}else p<=z0&&(u+=p);return{width:u,height:f,x:h,y:g}}const k5=new Set(["absolute","fixed"]);function R5(t,i){const l=Zn(t,!0,i==="fixed"),r=l.top+t.clientTop,o=l.left+t.clientLeft,u=ci(t)?Gl(t):ri(1),f=t.clientWidth*u.x,h=t.clientHeight*u.y,g=o*u.x,p=r*u.y;return{width:f,height:h,x:g,y:p}}function D0(t,i,l){let r;if(i==="viewport")r=O5(t,l);else if(i==="document")r=$5(pi(t));else if(Ga(i))r=R5(i,l);else{const o=j1(t);r={x:i.x-o.x,y:i.y-o.y,width:i.width,height:i.height}}return bc(r)}function H1(t,i){const l=vn(t);return l===i||!Ga(l)||Jl(l)?!1:Ya(l).position==="fixed"||H1(l,i)}function z5(t,i){const l=i.get(t);if(l)return l;let r=ws(t,[],!1).filter(h=>Ga(h)&&ir(h)!=="body"),o=null;const u=Ya(t).position==="fixed";let f=u?vn(t):t;for(;Ga(f)&&!Jl(f);){const h=Ya(f),g=Rc(f);!g&&h.position==="fixed"&&(o=null),(u?!g&&!o:!g&&h.position==="static"&&!!o&&k5.has(o.position)||Ms(f)&&!g&&H1(t,f))?r=r.filter(b=>b!==f):o=h,f=vn(f)}return i.set(t,r),r}function D5(t){let{element:i,boundary:l,rootBoundary:r,strategy:o}=t;const f=[...l==="clippingAncestors"?kc(i)?[]:z5(i,this._c):[].concat(l),r],h=f[0],g=f.reduce((p,b)=>{const y=D0(i,b,o);return p.top=ga(y.top,p.top),p.right=mn(y.right,p.right),p.bottom=mn(y.bottom,p.bottom),p.left=ga(y.left,p.left),p},D0(i,h,o));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function L5(t){const{width:i,height:l}=L1(t);return{width:i,height:l}}function j5(t,i,l){const r=ci(i),o=pi(i),u=l==="fixed",f=Zn(t,!0,u,i);let h={scrollLeft:0,scrollTop:0};const g=ri(0);function p(){g.x=Dc(o)}if(r||!r&&!u)if((ir(i)!=="body"||Ms(o))&&(h=zc(i)),r){const _=Zn(i,!0,u,i);g.x=_.x+i.clientLeft,g.y=_.y+i.clientTop}else o&&p();u&&!r&&o&&p();const b=o&&!r&&!u?B1(o,h):ri(0),y=f.left+h.scrollLeft-g.x-b.x,w=f.top+h.scrollTop-g.y-b.y;return{x:y,y:w,width:f.width,height:f.height}}function hf(t){return Ya(t).position==="static"}function L0(t,i){if(!ci(t)||Ya(t).position==="fixed")return null;if(i)return i(t);let l=t.offsetParent;return pi(t)===l&&(l=l.ownerDocument.body),l}function U1(t,i){const l=va(t);if(kc(t))return l;if(!ci(t)){let o=vn(t);for(;o&&!Jl(o);){if(Ga(o)&&!hf(o))return o;o=vn(o)}return l}let r=L0(t,i);for(;r&&y5(r)&&hf(r);)r=L0(r,i);return r&&Jl(r)&&hf(r)&&!Rc(r)?l:r||E5(t)||l}const B5=async function(t){const i=this.getOffsetParent||U1,l=this.getDimensions,r=await l(t.floating);return{reference:j5(t.reference,await i(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function H5(t){return Ya(t).direction==="rtl"}const cc={convertOffsetParentRelativeRectToViewportRelativeRect:M5,getDocumentElement:pi,getClippingRect:D5,getOffsetParent:U1,getElementRects:B5,getClientRects:N5,getDimensions:L5,getScale:Gl,isElement:Ga,isRTL:H5};function I1(t,i){return t.x===i.x&&t.y===i.y&&t.width===i.width&&t.height===i.height}function U5(t,i){let l=null,r;const o=pi(t);function u(){var h;clearTimeout(r),(h=l)==null||h.disconnect(),l=null}function f(h,g){h===void 0&&(h=!1),g===void 0&&(g=1),u();const p=t.getBoundingClientRect(),{left:b,top:y,width:w,height:_}=p;if(h||i(),!w||!_)return;const S=ec(y),A=ec(o.clientWidth-(b+w)),M=ec(o.clientHeight-(y+_)),T=ec(b),H={rootMargin:-S+"px "+-A+"px "+-M+"px "+-T+"px",threshold:ga(0,mn(1,g))||1};let L=!0;function O(W){const Q=W[0].intersectionRatio;if(Q!==g){if(!L)return f();Q?f(!1,Q):r=setTimeout(()=>{f(!1,1e-7)},1e3)}Q===1&&!I1(p,t.getBoundingClientRect())&&f(),L=!1}try{l=new IntersectionObserver(O,{...H,root:o.ownerDocument})}catch{l=new IntersectionObserver(O,H)}l.observe(t)}return f(!0),u}function I5(t,i,l,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:u=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:g=!1}=r,p=kh(t),b=o||u?[...p?ws(p):[],...ws(i)]:[];b.forEach(T=>{o&&T.addEventListener("scroll",l,{passive:!0}),u&&T.addEventListener("resize",l)});const y=p&&h?U5(p,l):null;let w=-1,_=null;f&&(_=new ResizeObserver(T=>{let[D]=T;D&&D.target===p&&_&&(_.unobserve(i),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var H;(H=_)==null||H.observe(i)})),l()}),p&&!g&&_.observe(p),_.observe(i));let S,A=g?Zn(t):null;g&&M();function M(){const T=Zn(t);A&&!I1(A,T)&&l(),A=T,S=requestAnimationFrame(M)}return l(),()=>{var T;b.forEach(D=>{o&&D.removeEventListener("scroll",l),u&&D.removeEventListener("resize",l)}),y?.(),(T=_)==null||T.disconnect(),_=null,g&&cancelAnimationFrame(S)}}const P5=p5,q5=m5,V5=d5,j0=g5,F5=u5,G5=(t,i,l)=>{const r=new Map,o={platform:cc,...l},u={...o.platform,_c:r};return c5(t,i,{...o,platform:u})};function Y5(t){return X5(t)}function pf(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function X5(t){for(let i=t;i;i=pf(i))if(i instanceof Element&&getComputedStyle(i).display==="none")return null;for(let i=pf(t);i;i=pf(i)){if(!(i instanceof Element))continue;const l=getComputedStyle(i);if(l.display!=="contents"&&(l.position!=="static"||Rc(l)||i.tagName==="BODY"))return i}return null}function Q5(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var Ye=class extends rt{constructor(){super(...arguments),this.localize=new ja(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),l=this.placement.includes("top")||this.placement.includes("bottom");let r=0,o=0,u=0,f=0,h=0,g=0,p=0,b=0;l?t.top<i.top?(r=t.left,o=t.bottom,u=t.right,f=t.bottom,h=i.left,g=i.top,p=i.right,b=i.top):(r=i.left,o=i.bottom,u=i.right,f=i.bottom,h=t.left,g=t.top,p=t.right,b=t.top):t.left<i.left?(r=t.right,o=t.top,u=i.left,f=i.top,h=t.right,g=t.bottom,p=i.left,b=i.bottom):(r=i.right,o=i.top,u=t.left,f=t.top,h=i.right,g=i.bottom,p=t.left,b=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${u}px`),this.style.setProperty("--hover-bridge-top-right-y",`${f}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${b}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Q5(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=I5(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[P5({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(j0({apply:({rects:l})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${l.reference.width}px`:"",this.popup.style.height=o?`${l.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(V5({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(q5({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(j0({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:l,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${l}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(F5({element:this.arrowEl,padding:this.arrowPadding}));const i=this.strategy==="absolute"?l=>cc.getOffsetParent(l,Y5):cc.getOffsetParent;G5(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Ec(bn({},cc),{getOffsetParent:i})}).then(({x:l,y:r,middlewareData:o,placement:u})=>{const f=this.localize.dir()==="rtl",h={top:"bottom",right:"left",bottom:"top",left:"right"}[u.split("-")[0]];if(this.setAttribute("data-current-placement",u),Object.assign(this.popup.style,{left:`${l}px`,top:`${r}px`}),this.arrow){const g=o.arrow.x,p=o.arrow.y;let b="",y="",w="",_="";if(this.arrowPlacement==="start"){const S=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",y=f?S:"",_=f?"":S}else if(this.arrowPlacement==="end"){const S=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";y=f?"":S,_=f?S:"",w=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(_=typeof g=="number"?"calc(50% - var(--arrow-size-diagonal))":"",b=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(_=typeof g=="number"?`${g}px`:"",b=typeof p=="number"?`${p}px`:"");Object.assign(this.arrowEl.style,{top:b,right:y,bottom:w,left:_,[h]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return Se`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ft({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ft({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Se`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Ye.styles=[$t,K4];C([We(".popup")],Ye.prototype,"popup",2);C([We(".popup__arrow")],Ye.prototype,"arrowEl",2);C([B()],Ye.prototype,"anchor",2);C([B({type:Boolean,reflect:!0})],Ye.prototype,"active",2);C([B({reflect:!0})],Ye.prototype,"placement",2);C([B({reflect:!0})],Ye.prototype,"strategy",2);C([B({type:Number})],Ye.prototype,"distance",2);C([B({type:Number})],Ye.prototype,"skidding",2);C([B({type:Boolean})],Ye.prototype,"arrow",2);C([B({attribute:"arrow-placement"})],Ye.prototype,"arrowPlacement",2);C([B({attribute:"arrow-padding",type:Number})],Ye.prototype,"arrowPadding",2);C([B({type:Boolean})],Ye.prototype,"flip",2);C([B({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(i=>i.trim()).filter(i=>i!==""),toAttribute:t=>t.join(" ")}})],Ye.prototype,"flipFallbackPlacements",2);C([B({attribute:"flip-fallback-strategy"})],Ye.prototype,"flipFallbackStrategy",2);C([B({type:Object})],Ye.prototype,"flipBoundary",2);C([B({attribute:"flip-padding",type:Number})],Ye.prototype,"flipPadding",2);C([B({type:Boolean})],Ye.prototype,"shift",2);C([B({type:Object})],Ye.prototype,"shiftBoundary",2);C([B({attribute:"shift-padding",type:Number})],Ye.prototype,"shiftPadding",2);C([B({attribute:"auto-size"})],Ye.prototype,"autoSize",2);C([B()],Ye.prototype,"sync",2);C([B({type:Object})],Ye.prototype,"autoSizeBoundary",2);C([B({attribute:"auto-size-padding",type:Number})],Ye.prototype,"autoSizePadding",2);C([B({attribute:"hover-bridge",type:Boolean})],Ye.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eh=class extends wh{constructor(i){if(super(i),this.it=lt,i.type!==dn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===lt||i==null)return this._t=void 0,this.it=i;if(i===Da)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const l=[i];return l.raw=l,this._t={_$litType$:this.constructor.resultType,strings:l,values:[]}}};eh.directiveName="unsafeHTML",eh.resultType=1;const W5=xh(eh);var Te=class extends rt{constructor(){super(...arguments),this.formControlController=new Es(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Kn(this,"help-text","label"),this.localize=new ja(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>Se`
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
    `,this.handleDocumentFocusIn=t=>{const i=t.composedPath();this&&!i.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const i=t.target,l=i.closest(".select__clear")!==null,r=i.closest("sl-icon-button")!==null;if(!(l||r)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),u=o.indexOf(this.currentOption);let f=Math.max(0,u);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(f=u+1,f>o.length-1&&(f=0)):t.key==="ArrowUp"?(f=u-1,f<0&&(f=o.length-1)):t.key==="Home"?f=0:t.key==="End"&&(f=o.length-1),this.setCurrentOption(o[f])}if(t.key&&t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const u of o)if(u.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(u);break}}}},this.handleDocumentMouseDown=t=>{const i=t.composedPath();this&&!i.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const l=t.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||l||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const l=t.target.closest("sl-option"),r=this.value;l&&!l.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(l):this.setSelectedOptions(l),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),i=this.valueHasChanged?this.value:this.defaultValue,l=Array.isArray(i)?i:[i],r=[];t.forEach(o=>r.push(o.value)),this.setSelectedOptions(t.filter(o=>l.includes(o.value)))}handleTagRemove(t,i){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(l=>{l.current=!1,l.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const i=this.getAllOptions(),l=Array.isArray(t)?t:[t];i.forEach(r=>r.selected=!1),l.length&&l.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(t,i){i===!0||i===!1?t.selected=i:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,i,l;const r=this.getAllOptions();this.selectedOptions=r.filter(u=>u.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(u=>u.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const u=this.selectedOptions[0];this.value=(t=u?.value)!=null?t:"",this.displayLabel=(l=(i=u?.getTextLabel)==null?void 0:i.call(u))!=null?l:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,i)=>{if(i<this.maxOptionsVisible||this.maxOptionsVisible<=0){const l=this.getTag(t,i);return Se`<div @sl-remove=${r=>this.handleTagRemove(r,t)}>
          ${typeof l=="string"?W5(l):l}
        </div>`}else if(i===this.maxOptionsVisible)return Se`<sl-tag size=${this.size}>+${this.selectedOptions.length-i}</sl-tag>`;return Se``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,i,l){if(super.attributeChangedCallback(t,i,l),t==="value"){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}}handleValueChange(){if(!this.valueHasChanged){const l=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=l}const t=this.getAllOptions(),i=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(l=>i.includes(l.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await li(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:i}=ka(this,"select.show",{dir:this.localize.dir()});await Ra(this.popup.popup,t,i),this.currentOption&&Wf(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await li(this);const{keyframes:t,options:i}=ka(this,"select.hide",{dir:this.localize.dir()});await Ra(this.popup.popup,t,i),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Kl(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Kl(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!i,o=this.clearable&&!this.disabled&&this.value.length>0,u=this.placeholder&&this.value&&this.value.length<=0;return Se`
      <div
        part="form-control"
        class=${ft({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":r})}
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
            class=${ft({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":u,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?Se`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?Se`
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
    `}};Te.styles=[$t,$c,Z4];Te.dependencies={"sl-icon":Ft,"sl-popup":Ye,"sl-tag":Jn};C([We(".select")],Te.prototype,"popup",2);C([We(".select__combobox")],Te.prototype,"combobox",2);C([We(".select__display-input")],Te.prototype,"displayInput",2);C([We(".select__value-input")],Te.prototype,"valueInput",2);C([We(".select__listbox")],Te.prototype,"listbox",2);C([ht()],Te.prototype,"hasFocus",2);C([ht()],Te.prototype,"displayLabel",2);C([ht()],Te.prototype,"currentOption",2);C([ht()],Te.prototype,"selectedOptions",2);C([ht()],Te.prototype,"valueHasChanged",2);C([B()],Te.prototype,"name",2);C([ht()],Te.prototype,"value",1);C([B({attribute:"value"})],Te.prototype,"defaultValue",2);C([B({reflect:!0})],Te.prototype,"size",2);C([B()],Te.prototype,"placeholder",2);C([B({type:Boolean,reflect:!0})],Te.prototype,"multiple",2);C([B({attribute:"max-options-visible",type:Number})],Te.prototype,"maxOptionsVisible",2);C([B({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);C([B({type:Boolean})],Te.prototype,"clearable",2);C([B({type:Boolean,reflect:!0})],Te.prototype,"open",2);C([B({type:Boolean})],Te.prototype,"hoist",2);C([B({type:Boolean,reflect:!0})],Te.prototype,"filled",2);C([B({type:Boolean,reflect:!0})],Te.prototype,"pill",2);C([B()],Te.prototype,"label",2);C([B({reflect:!0})],Te.prototype,"placement",2);C([B({attribute:"help-text"})],Te.prototype,"helpText",2);C([B({reflect:!0})],Te.prototype,"form",2);C([B({type:Boolean,reflect:!0})],Te.prototype,"required",2);C([B()],Te.prototype,"getTag",2);C([Ve("disabled",{waitUntilFirstUpdate:!0})],Te.prototype,"handleDisabledChange",1);C([Ve(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Te.prototype,"handleValueChange",1);C([Ve("open",{waitUntilFirstUpdate:!0})],Te.prototype,"handleOpenChange",1);Ot("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ot("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Z5="sl-select";Te.define("sl-select");var K5=Jt({tagName:Z5,elementClass:Te,react:qt,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),Kt=K5,J5=yt`
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
`,ba=class extends rt{constructor(){super(...arguments),this.localize=new ja(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let i="";return[...t].forEach(l=>{l.nodeType===Node.ELEMENT_NODE&&(l.hasAttribute("slot")||(i+=l.textContent)),l.nodeType===Node.TEXT_NODE&&(i+=l.textContent)}),i.trim()}render(){return Se`
      <div
        part="base"
        class=${ft({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ba.styles=[$t,J5];ba.dependencies={"sl-icon":Ft};C([We(".option__label")],ba.prototype,"defaultSlot",2);C([ht()],ba.prototype,"current",2);C([ht()],ba.prototype,"selected",2);C([ht()],ba.prototype,"hasHover",2);C([B({reflect:!0})],ba.prototype,"value",2);C([B({type:Boolean,reflect:!0})],ba.prototype,"disabled",2);C([Ve("disabled")],ba.prototype,"handleDisabledChange",1);C([Ve("selected")],ba.prototype,"handleSelectedChange",1);C([Ve("value")],ba.prototype,"handleValueChange",1);var e6="sl-option";ba.define("sl-option");var t6=Jt({tagName:e6,elementClass:ba,react:qt,events:{},displayName:"SlOption"}),Le=t6,a6=yt`
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
`,Xa=class extends rt{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=Se`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let i=Se``;return this.initials?i=Se`<div part="initials" class="avatar__initials">${this.initials}</div>`:i=Se`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,Se`
      <div
        part="base"
        class=${ft({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:i}
      </div>
    `}};Xa.styles=[$t,a6];Xa.dependencies={"sl-icon":Ft};C([ht()],Xa.prototype,"hasError",2);C([B()],Xa.prototype,"image",2);C([B()],Xa.prototype,"label",2);C([B()],Xa.prototype,"initials",2);C([B()],Xa.prototype,"loading",2);C([B({reflect:!0})],Xa.prototype,"shape",2);C([Ve("image")],Xa.prototype,"handleImageChange",1);var i6="sl-avatar";Xa.define("sl-avatar");var n6=Jt({tagName:i6,elementClass:Xa,react:qt,events:{onSlError:"sl-error"},displayName:"SlAvatar"}),l6=n6;const r6="_avatar_744bf_1",s6={avatar:r6};function vt({image:t,name:i="",shape:l="circle",className:r,style:o}){const u=k.useMemo(()=>{if(!i)return"";const f=i.trim().split(/\s+/);return f.length===0?"":f.length===1?f[0].charAt(0).toUpperCase():(f[0].charAt(0)+f[f.length-1].charAt(0)).toUpperCase()},[i]);return m.jsx(l6,{image:t??void 0,label:i,initials:u,shape:l,className:`${s6.avatar} ${r||""}`,style:o})}var o6=Object.defineProperty,c6=Object.defineProperties,u6=Object.getOwnPropertyDescriptors,yc=Object.getOwnPropertySymbols,P1=Object.prototype.hasOwnProperty,q1=Object.prototype.propertyIsEnumerable,B0=(t,i,l)=>i in t?o6(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l,cn=(t,i)=>{for(var l in i||(i={}))P1.call(i,l)&&B0(t,l,i[l]);if(yc)for(var l of yc(i))q1.call(i,l)&&B0(t,l,i[l]);return t},mf=(t,i)=>c6(t,u6(i)),d6=(t,i)=>{var l={};for(var r in t)P1.call(t,r)&&i.indexOf(r)<0&&(l[r]=t[r]);if(t!=null&&yc)for(var r of yc(t))i.indexOf(r)<0&&q1.call(t,r)&&(l[r]=t[r]);return l},f6=(t,i,l)=>new Promise((r,o)=>{var u=g=>{try{h(l.next(g))}catch(p){o(p)}},f=g=>{try{h(l.throw(g))}catch(p){o(p)}},h=g=>g.done?r(g.value):Promise.resolve(g.value).then(u,f);h((l=l.apply(t,i)).next())}),h6=t=>{const i=/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;return!!t.match(i)},V1=(t,i)=>new Promise((l,r)=>{const o=new Image;o.onload=()=>l(o),o.onerror=r,!h6(t)&&i&&(o.crossOrigin=i),o.src=t}),p6=t=>new Promise((i,l)=>{const r=new FileReader;r.onload=o=>{var u;try{if(!((u=o?.target)!=null&&u.result))throw new Error("No image data");const f=V1(o.target.result);i(f)}catch(f){l(f)}},r.readAsDataURL(t)}),m6=()=>{let t=!1;try{const i=Object.defineProperty({},"passive",{get:function(){t=!0}}),l=()=>{};window.addEventListener("test",l,i),window.removeEventListener("test",l,i)}catch{t=!1}return t},H0=typeof window<"u"&&typeof navigator<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),g6=typeof File<"u",U0=(t,i,l,r,o,u)=>{if(u===0)t.rect(i,l,r,o);else{const f=r-u,h=o-u;t.translate(i,l),t.arc(u,u,u,Math.PI,Math.PI*1.5),t.lineTo(f,0),t.arc(f,u,u,Math.PI*1.5,Math.PI*2),t.lineTo(r,h),t.arc(f,h,u,Math.PI*2,Math.PI*.5),t.lineTo(u,o),t.arc(u,h,u,Math.PI*.5,Math.PI),t.closePath(),t.translate(-i,-l)}},v6=(t,i,l,r,o,u)=>{t.fillStyle=u;const f=r/3,h=o/3;t.fillRect(i,l,1,o),t.fillRect(f+i,l,1,o),t.fillRect(f*2+i,l,1,o),t.fillRect(f*3+i,l,1,o),t.fillRect(f*4+i,l,1,o),t.fillRect(i,l,r,1),t.fillRect(i,h+l,r,1),t.fillRect(i,h*2+l,r,1),t.fillRect(i,h*3+l,r,1),t.fillRect(i,h*4+l,r,1)},gf={x:.5,y:.5},F1=class extends R.Component{constructor(){super(...arguments),this.canvas=R.createRef(),this.pixelRatio=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,this.state={drag:!1,my:void 0,mx:void 0,image:gf},this.handleImageReady=i=>{var l,r;const o=mf(cn({},this.getInitialSize(i.width,i.height)),{resource:i,x:.5,y:.5});this.setState({drag:!1,image:o},this.props.onImageReady),(r=(l=this.props).onLoadSuccess)==null||r.call(l,o)},this.clearImage=()=>{const i=this.getCanvas();this.getContext().clearRect(0,0,i.width,i.height),this.setState({image:gf})},this.handleMouseDown=i=>{i.preventDefault(),this.setState({drag:!0,mx:void 0,my:void 0})},this.handleTouchStart=i=>{this.setState({drag:!0,mx:void 0,my:void 0})},this.handleMouseUp=()=>{var i,l;this.state.drag&&(this.setState({drag:!1}),(l=(i=this.props).onMouseUp)==null||l.call(i))},this.handleMouseMove=i=>{var l,r,o,u;if(!this.state.drag)return;i.preventDefault();const f="targetTouches"in i?i.targetTouches[0].pageX:i.clientX,h="targetTouches"in i?i.targetTouches[0].pageY:i.clientY;this.setState({mx:f,my:h});let g=this.props.rotate;if(g%=360,g=g<0?g+360:g,this.state.mx&&this.state.my&&this.state.image.width&&this.state.image.height){const p=this.state.mx-f,b=this.state.my-h,y=this.state.image.width*this.props.scale,w=this.state.image.height*this.props.scale;let{x:_,y:S}=this.getCroppingRect();_*=y,S*=w;const A=Q=>Q*(Math.PI/180),M=Math.cos(A(g)),T=Math.sin(A(g)),D=_+p*M+b*T,H=S+-p*T+b*M,L=1/this.props.scale*this.getXScale(),O=1/this.props.scale*this.getYScale(),W={x:D/y+L/2,y:H/w+O/2};(r=(l=this.props).onPositionChange)==null||r.call(l,W),this.setState({image:cn(cn({},this.state.image),W)})}(u=(o=this.props).onMouseMove)==null||u.call(o,i)}}componentDidMount(){this.props.disableHiDPIScaling&&(this.pixelRatio=1);const i=this.getContext();this.props.image&&this.loadImage(this.props.image),this.paint(i);const l=m6()?{passive:!1}:!1;document.addEventListener("mousemove",this.handleMouseMove,l),document.addEventListener("mouseup",this.handleMouseUp,l),H0&&(document.addEventListener("touchmove",this.handleMouseMove,l),document.addEventListener("touchend",this.handleMouseUp,l))}componentDidUpdate(i,l){var r,o;this.props.image&&(this.props.image!==i.image||this.props.width!==i.width||this.props.height!==i.height||this.props.backgroundColor!==i.backgroundColor)?this.loadImage(this.props.image):!this.props.image&&l.image!==gf&&this.clearImage();const u=this.getContext();u.clearRect(0,0,this.getCanvas().width,this.getCanvas().height),this.paint(u),this.paintImage(u,this.state.image,this.props.border),(i.image!==this.props.image||i.width!==this.props.width||i.height!==this.props.height||i.position!==this.props.position||i.scale!==this.props.scale||i.rotate!==this.props.rotate||l.my!==this.state.my||l.mx!==this.state.mx||l.image.x!==this.state.image.x||l.image.y!==this.state.image.y)&&((o=(r=this.props).onImageChange)==null||o.call(r))}getCanvas(){if(!this.canvas.current)throw new Error("No canvas found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return this.canvas.current}getContext(){const i=this.getCanvas().getContext("2d");if(!i)throw new Error("No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return i}componentWillUnmount(){document.removeEventListener("mousemove",this.handleMouseMove,!1),document.removeEventListener("mouseup",this.handleMouseUp,!1),H0&&(document.removeEventListener("touchmove",this.handleMouseMove,!1),document.removeEventListener("touchend",this.handleMouseUp,!1))}isVertical(){return!this.props.disableCanvasRotation&&this.props.rotate%180!==0}getBorders(i=this.props.border){return Array.isArray(i)?i:[i,i]}getDimensions(){const{width:i,height:l,rotate:r,border:o}=this.props,u={width:0,height:0},[f,h]=this.getBorders(o);return this.isVertical()?(u.width=l,u.height=i):(u.width=i,u.height=l),u.width+=f*2,u.height+=h*2,{canvas:u,rotate:r,width:i,height:l,border:o}}getImage(){const i=this.getCroppingRect(),l=this.state.image;if(!l.resource)throw new Error("No image resource available, please report this to: https://github.com/mosch/react-avatar-editor/issues");i.x*=l.resource.width,i.y*=l.resource.height,i.width*=l.resource.width,i.height*=l.resource.height;const r=document.createElement("canvas");this.isVertical()?(r.width=i.height,r.height=i.width):(r.width=i.width,r.height=i.height);const o=r.getContext("2d");if(!o)throw new Error("No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return o.translate(r.width/2,r.height/2),o.rotate(this.props.rotate*Math.PI/180),o.translate(-(r.width/2),-(r.height/2)),this.isVertical()&&o.translate((r.width-r.height)/2,(r.height-r.width)/2),this.props.backgroundColor&&(o.fillStyle=this.props.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(l.resource,-i.x,-i.y),r}getImageScaledToCanvas(){const{width:i,height:l}=this.getDimensions(),r=document.createElement("canvas");return this.isVertical()?(r.width=l,r.height=i):(r.width=i,r.height=l),this.paintImage(r.getContext("2d"),this.state.image,0,1),r}getXScale(){if(!this.state.image.width||!this.state.image.height)throw new Error("Image dimension is unknown.");const i=this.props.width/this.props.height,l=this.state.image.width/this.state.image.height;return Math.min(1,i/l)}getYScale(){if(!this.state.image.width||!this.state.image.height)throw new Error("Image dimension is unknown.");const i=this.props.height/this.props.width,l=this.state.image.height/this.state.image.width;return Math.min(1,i/l)}getCroppingRect(){const i=this.props.position||{x:this.state.image.x,y:this.state.image.y},l=1/this.props.scale*this.getXScale(),r=1/this.props.scale*this.getYScale(),o={x:i.x-l/2,y:i.y-r/2,width:l,height:r};let u=0,f=1-o.width,h=0,g=1-o.height;return(this.props.disableBoundaryChecks||l>1||r>1)&&(u=-o.width,f=1,h=-o.height,g=1),mf(cn({},o),{x:Math.max(u,Math.min(o.x,f)),y:Math.max(h,Math.min(o.y,g))})}loadImage(i){return f6(this,null,function*(){var l,r,o,u;if(g6&&i instanceof File)try{const f=yield p6(i);this.handleImageReady(f)}catch{(r=(l=this.props).onLoadFailure)==null||r.call(l)}else if(typeof i=="string")try{const f=yield V1(i,this.props.crossOrigin);this.handleImageReady(f)}catch{(u=(o=this.props).onLoadFailure)==null||u.call(o)}})}getInitialSize(i,l){let r,o;const u=this.getDimensions(),f=u.height/u.width,h=l/i;return f>h?(r=u.height,o=Math.round(i*(r/l))):(o=u.width,r=Math.round(l*(o/i))),{height:r,width:o}}paintImage(i,l,r,o=this.pixelRatio){if(!l.resource)return;const u=this.calculatePosition(l,r);i.save(),i.translate(i.canvas.width/2,i.canvas.height/2),i.rotate(this.props.rotate*Math.PI/180),i.translate(-(i.canvas.width/2),-(i.canvas.height/2)),this.isVertical()&&i.translate((i.canvas.width-i.canvas.height)/2,(i.canvas.height-i.canvas.width)/2),i.scale(o,o),i.globalCompositeOperation="destination-over",i.drawImage(l.resource,u.x,u.y,u.width,u.height),this.props.backgroundColor&&(i.fillStyle=this.props.backgroundColor,i.fillRect(0,0,i.canvas.width,i.canvas.height)),i.restore()}calculatePosition(i=this.state.image,l){const[r,o]=this.getBorders(l);if(!i.width||!i.height)throw new Error("Image dimension is unknown.");const u=this.getCroppingRect(),f=i.width*this.props.scale,h=i.height*this.props.scale;let g=-u.x*f,p=-u.y*h;return this.isVertical()?(g+=o,p+=r):(g+=r,p+=o),{x:g,y:p,height:h,width:f}}paint(i){i.save(),i.scale(this.pixelRatio,this.pixelRatio),i.translate(0,0),i.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";let l=this.props.borderRadius;const r=this.getDimensions(),[o,u]=this.getBorders(r.border),f=r.canvas.height,h=r.canvas.width;l=Math.max(l,0),l=Math.min(l,h/2-o,f/2-u),i.beginPath(),U0(i,o,u,h-o*2,f-u*2,l),i.rect(h,0,-h,f),i.fill("evenodd"),this.props.borderColor&&(i.strokeStyle="rgba("+this.props.borderColor.slice(0,4).join(",")+")",i.lineWidth=1,i.beginPath(),U0(i,o+.5,u+.5,h-o*2-1,f-u*2-1,l),i.stroke()),this.props.showGrid&&v6(i,o,u,h-o*2,f-u*2,this.props.gridColor),i.restore()}render(){const i=this.props,{scale:l,rotate:r,image:o,border:u,borderRadius:f,width:h,height:g,position:p,color:b,backgroundColor:y,style:w,crossOrigin:_,onLoadFailure:S,onLoadSuccess:A,onImageReady:M,onImageChange:T,onMouseUp:D,onMouseMove:H,onPositionChange:L,disableBoundaryChecks:O,disableHiDPIScaling:W,disableCanvasRotation:Q,showGrid:X,gridColor:P,borderColor:F}=i,ee=d6(i,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation","showGrid","gridColor","borderColor"]),ie=this.getDimensions(),Z={width:ie.canvas.width,height:ie.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},re={width:ie.canvas.width*this.pixelRatio,height:ie.canvas.height*this.pixelRatio,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,style:cn(cn({},Z),w)};return R.createElement("canvas",mf(cn(cn({},re),ee),{ref:this.canvas}))}};F1.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],showGrid:!1,gridColor:"#666",disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0};var b6=F1,y6=yt`
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
`,Qa=class extends rt{constructor(){super(...arguments),this.hasSlotController=new Kn(this,"footer"),this.localize=new ja(this),this.modal=new N1(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),bs(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ys(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const l=ka(this,"dialog.denyClose",{dir:this.localize.dir()});Ra(this.panel,l.keyframes,l.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),bs(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([li(this.dialog),li(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const i=ka(this,"dialog.show",{dir:this.localize.dir()}),l=ka(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ra(this.panel,i.keyframes,i.options),Ra(this.overlay,l.keyframes,l.options)]),this.emit("sl-after-show")}else{$1(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([li(this.dialog),li(this.overlay)]);const t=ka(this,"dialog.hide",{dir:this.localize.dir()}),i=ka(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ra(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),Ra(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ys(this);const l=this.originalTrigger;typeof l?.focus=="function"&&setTimeout(()=>l.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Kl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Kl(this,"sl-after-hide")}render(){return Se`
      <div
        part="base"
        class=${ft({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${be(this.noHeader?this.label:void 0)}
          aria-labelledby=${be(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":Se`
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
    `}};Qa.styles=[$t,y6];Qa.dependencies={"sl-icon-button":wt};C([We(".dialog")],Qa.prototype,"dialog",2);C([We(".dialog__panel")],Qa.prototype,"panel",2);C([We(".dialog__overlay")],Qa.prototype,"overlay",2);C([B({type:Boolean,reflect:!0})],Qa.prototype,"open",2);C([B({reflect:!0})],Qa.prototype,"label",2);C([B({attribute:"no-header",type:Boolean,reflect:!0})],Qa.prototype,"noHeader",2);C([Ve("open",{waitUntilFirstUpdate:!0})],Qa.prototype,"handleOpenChange",1);Ot("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ot("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ot("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Ot("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ot("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var _6="sl-dialog";Qa.define("sl-dialog");var x6=Jt({tagName:_6,elementClass:Qa,react:qt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),Ns=x6,w6=yt`
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
`,Rh=(t="value")=>(i,l)=>{const r=i.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(u,f,h){var g;const p=r.getPropertyOptions(t),b=typeof p.attribute=="string"?p.attribute:t;if(u===b){const y=p.converter||Ql,_=(typeof y=="function"?y:(g=y?.fromAttribute)!=null?g:Ql.fromAttribute)(h,p.type);this[t]!==_&&(this[l]=_)}o.call(this,u,f,h)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zh=xh(class extends wh{constructor(t){if(super(t),t.type!==dn.PROPERTY&&t.type!==dn.ATTRIBUTE&&t.type!==dn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!wS(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[i]){if(i===Da||i===lt)return i;const l=t.element,r=t.name;if(t.type===dn.PROPERTY){if(i===l[r])return Da}else if(t.type===dn.BOOLEAN_ATTRIBUTE){if(!!i===l.hasAttribute(r))return Da}else if(t.type===dn.ATTRIBUTE&&l.getAttribute(r)===i+"")return Da;return ES(t),i}});var Ke=class extends rt{constructor(){super(...arguments),this.formControlController=new Es(this),this.hasSlotController=new Kn(this,"help-text","label"),this.localize=new ja(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const i=this.input.offsetWidth,l=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",u=i*t;if(o){const f=`${i-u}px + ${t} * ${r}`;this.output.style.translate=`calc((${f} - ${l/2}px - ${r} / 2))`}else{const f=`${u}px - ${t} * ${r}`;this.output.style.translate=`calc(${f} - ${l/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!i;return Se`
      <div
        part="form-control"
        class=${ft({"form-control":!0,"form-control--medium":!0,"form-control--has-label":l,"form-control--has-help-text":r})}
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
            class=${ft({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${be(this.name)}
              ?disabled=${this.disabled}
              min=${be(this.min)}
              max=${be(this.max)}
              step=${be(this.step)}
              .value=${zh(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?Se`
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
    `}};Ke.styles=[$t,$c,w6];C([We(".range__control")],Ke.prototype,"input",2);C([We(".range__tooltip")],Ke.prototype,"output",2);C([ht()],Ke.prototype,"hasFocus",2);C([ht()],Ke.prototype,"hasTooltip",2);C([B()],Ke.prototype,"title",2);C([B()],Ke.prototype,"name",2);C([B({type:Number})],Ke.prototype,"value",2);C([B()],Ke.prototype,"label",2);C([B({attribute:"help-text"})],Ke.prototype,"helpText",2);C([B({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);C([B({type:Number})],Ke.prototype,"min",2);C([B({type:Number})],Ke.prototype,"max",2);C([B({type:Number})],Ke.prototype,"step",2);C([B()],Ke.prototype,"tooltip",2);C([B({attribute:!1})],Ke.prototype,"tooltipFormatter",2);C([B({reflect:!0})],Ke.prototype,"form",2);C([Rh()],Ke.prototype,"defaultValue",2);C([Qb({passive:!0})],Ke.prototype,"handleThumbDragStart",1);C([Ve("value",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleValueChange",1);C([Ve("disabled",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleDisabledChange",1);C([Ve("hasTooltip",{waitUntilFirstUpdate:!0})],Ke.prototype,"syncRange",1);var S6="sl-range";Ke.define("sl-range");var E6=Jt({tagName:S6,elementClass:Ke,react:qt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"}),C6=E6;function T6({image:t,open:i,onSave:l,onCancel:r}){const o=De(),u=k.useRef(null),[f,h]=k.useState(1),g=()=>{u.current&&u.current.getImageScaledToCanvas().toBlob(b=>{b&&l(b)})};return m.jsxs(Ns,{label:o.formatMessage({id:"avatar.editor.title",defaultMessage:"Edit Profile Picture"}),open:i,onSlRequestClose:p=>{(p.detail.source==="overlay"||p.detail.source==="close-button")&&r()},children:[m.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[m.jsx(b6,{ref:u,image:t,width:250,height:250,border:25,borderRadius:125,color:[0,0,0,.6],scale:f,rotate:0}),m.jsx(C6,{min:1,max:3,step:.01,value:f,onSlInput:p=>{const b=p.target;h(b.value)},label:o.formatMessage({id:"avatar.editor.zoom",defaultMessage:"Zoom"}),style:{width:"100%",maxWidth:"300px"}})]}),m.jsxs("div",{slot:"footer",children:[m.jsx(ke,{onClick:r,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(ke,{variant:"primary",onClick:g,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})})]})]})}var A6="sl-icon";Ft.define("sl-icon");var M6=Jt({tagName:A6,elementClass:Ft,react:qt,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),bt=M6;const N6="_pickerContainer_1qpfx_1",$6="_avatar_1qpfx_6",O6="_cameraButton_1qpfx_12",vf={pickerContainer:N6,avatar:$6,cameraButton:O6};function k6({currentImage:t,name:i,onSave:l,loading:r=!1,className:o,style:u}){const[f,h]=k.useState(!1),[g,p]=k.useState(null),b=async()=>{const _=await D4();_&&(p(_),h(!0))},y=_=>{h(!1),l(_),p(null)},w=()=>{h(!1),p(null)};return m.jsxs("div",{className:`${vf.pickerContainer} ${o||""}`,style:u,children:[m.jsx(vt,{image:t,name:i,shape:"circle",className:vf.avatar}),m.jsx(ke,{circle:!0,size:"small",onClick:b,loading:r,className:vf.cameraButton,children:m.jsx(bt,{name:"camera"})}),g&&m.jsx(T6,{image:g,open:f,onSave:y,onCancel:w})]})}const R6="_drawer_16mna_2",z6="_container_16mna_13",D6="_selectSection_16mna_18",L6="_listSection_16mna_22",j6="_listHeader_16mna_26",B6="_memberItem_16mna_35",H6="_memberSelect_16mna_51",U6="_optionContent_16mna_57",I6="_optionAvatar_16mna_63",P6="_memberName_16mna_67",q6="_emptyState_16mna_72",V6="_footerActions_16mna_78",Oa={drawer:R6,container:z6,selectSection:D6,listSection:L6,listHeader:j6,memberItem:B6,memberSelect:H6,optionContent:U6,optionAvatar:I6,memberName:P6,emptyState:q6,footerActions:V6};function F6({roster:t,slot:i,allMembers:l,onClose:r,onSave:o}){const u=De(),[f,h]=k.useState(i.assigned_member_ids||[]),g=l.filter(T=>f.includes(T.id)),p=l.filter(T=>!f.includes(T.id)&&T.is_rosterable),b=T=>{h(f.filter(D=>D!==T))},y=T=>{h([...f,T])},w=T=>{const D=T.target.value;D&&(y(D),T.target.value="")},_=()=>{o(i.id,f)},S=T=>{T.stopPropagation()},A=T=>{T.stopPropagation(),r()};let M="Edit Roster Slot";if(t&&i.slot_index!==null&&i.slot_index!==void 0){const T=t.slot_definitions[i.slot_index];T&&(M=u.formatMessage({id:"roster.edit.drawerLabel"},{slotName:T.name}))}return m.jsxs(hi,{label:M,placement:"bottom",open:!0,onSlAfterHide:A,onSlRequestClose:S,className:Oa.drawer,children:[m.jsxs("div",{className:Oa.container,children:[m.jsx("div",{className:Oa.selectSection,children:m.jsx(Kt,{placeholder:u.formatMessage({id:"roster.edit.selectMemberPlaceholder"}),value:"",onSlChange:w,onSlAfterHide:T=>{T.stopPropagation()},hoist:!0,placement:"top",className:Oa.memberSelect,children:p.map(T=>m.jsx(Le,{value:T.id,children:m.jsxs("div",{className:Oa.optionContent,children:[m.jsx(vt,{name:T.name,image:T.avatar_url,className:Oa.optionAvatar}),m.jsx("span",{children:T.name})]})},T.id))})}),m.jsxs("div",{className:Oa.listSection,children:[m.jsx("h3",{className:Oa.listHeader,children:m.jsx(ae,{id:"roster.edit.assignedHeader"})}),g.length>0?g.map(T=>m.jsxs("div",{className:Oa.memberItem,children:[m.jsx(vt,{name:T.name,image:T.avatar_url}),m.jsx("span",{className:Oa.memberName,children:T.name}),m.jsx(Nt,{name:"x-circle-fill",label:u.formatMessage({id:"common.remove"}),onClick:()=>b(T.id)})]},T.id)):m.jsx("p",{className:Oa.emptyState,children:m.jsx(ae,{id:"roster.edit.emptyState"})})]})]}),m.jsxs("div",{slot:"footer",className:Oa.footerActions,children:[m.jsx(ke,{onClick:A,children:m.jsx(ae,{id:"common.cancel"})}),m.jsx(ke,{variant:"primary",onClick:_,children:m.jsx(ae,{id:"common.save"})})]})]})}const G6="_featureContainer_c1gqo_2",Y6="_weekGroup_c1gqo_11",X6="_rosterGrid_c1gqo_22",Q6="_weekHeader_c1gqo_32",W6="_dateCell_c1gqo_47",Z6="_headerSlot_c1gqo_68",K6="_rosterSlot_c1gqo_77",J6="_rosterSlotReadOnly_c1gqo_89",eE="_emptySlot_c1gqo_100",tE="_green_c1gqo_101",aE="_orange_c1gqo_102",iE="_red_c1gqo_103",nE="_headerNavigation_c1gqo_159",lE="_headerTitle_c1gqo_167",rE="_navButton_c1gqo_183",sE="_dialogFooter_c1gqo_187",ut={featureContainer:G6,weekGroup:Y6,rosterGrid:X6,weekHeader:Q6,dateCell:W6,headerSlot:Z6,rosterSlot:K6,rosterSlotReadOnly:J6,emptySlot:eE,green:tE,orange:aE,red:iE,headerNavigation:nE,headerTitle:lE,navButton:rE,dialogFooter:sE};function oE({roster:t,rosterSlots:i,members:l,onSlotClick:r,startDate:o}){const u=De(),h=`week-${k.useMemo(()=>{const _=ub(o),S=db(o);return`${_}${String(S).padStart(2,"0")}`},[o])}`,g=k.useMemo(()=>Array.from({length:7}).map((_,S)=>Ch(o,S)),[o]),p=k.useMemo(()=>{const _=new Map,S=za(g[0],"yyyy-MM-dd"),A=za(g[6],"yyyy-MM-dd");return i.forEach(M=>{if(!M.date||M.slot_index===null)return;const T=za(Th(M.date),"yyyy-MM-dd");T<S||T>A||(_.has(T)||_.set(T,new Map),_.get(T)?.set(M.slot_index,M))}),_},[i,g]),b=(_,S)=>{const A=r?ut.rosterSlot:ut.rosterSlotReadOnly,M=_?.assigned_member_ids?.length??0;return M===0?`${A} ${ut.emptySlot}`:S.min_occupancy===0?`${A} ${ut.green}`:M>=S.min_occupancy?`${A} ${ut.green}`:M===S.min_occupancy-1?`${A} ${ut.orange}`:M<=S.min_occupancy-2?`${A} ${ut.red}`:A},y=_=>{_&&r&&r(_.id)},w=_=>{if(!_||!_.assigned_member_ids||_.assigned_member_ids.length===0)return m.jsx("span",{className:ut.emptySlot,children:m.jsx(ae,{id:"roster.emptySlot"})});const S=_.assigned_member_ids.map(A=>l.find(M=>M.id===A)?.name).filter(A=>!!A);return u.formatList(S,{type:"unit"})};return t?m.jsxs("div",{id:h,className:ut.weekGroup,style:{"--roster-slot-count":t.slot_definitions.length},children:[m.jsxs("div",{className:`${ut.rosterGrid} ${ut.weekHeader}`,children:[m.jsx("div",{className:ut.dateCell}),t.slot_definitions.map(_=>m.jsx("div",{className:ut.headerSlot,children:_.name},_.name))]}),g.map(_=>{const S=za(_,"yyyy-MM-dd"),A=p.get(S);return m.jsxs("div",{className:ut.rosterGrid,children:[m.jsxs("div",{className:ut.dateCell,children:[m.jsx("strong",{children:u.formatDate(_,{weekday:"short"})}),m.jsx("span",{children:u.formatDate(_,{month:"short",day:"numeric"})})]}),t.slot_definitions.map((M,T)=>{const D=A?.get(T);return m.jsx("div",{className:b(D,M),onClick:r?()=>y(D):void 0,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:H=>r&&H.key==="Enter"&&y(D),children:w(D)},T)})]},S)})]}):null}const I0=(t,i)=>{const l=typeof t=="string"?Th(t):t;return`${za(l,"yyyy-MM-dd")}-${i}`};function cE({rosterId:t,currentWeekStart:i,onWeekChange:l}){const r=De(),o=fb(),{data:u}=di({enabled:!!o}),{data:f,isLoading:h}=X_({enabled:!!o}),{mutate:g}=Q_(),{members:p,rosterSlots:b,roster:y,capabilities:w}=f||{},[_,S]=k.useState(null),[A,M]=k.useState(null),T=()=>{l(O4(i))},D=()=>{l(T1(i,1))},H=k.useMemo(()=>{if(!y?.slot_definitions)return[];const P=new Map;(b||[]).forEach(ee=>{ee.date&&typeof ee.slot_index=="number"&&P.set(I0(ee.date,ee.slot_index),ee)});const F=[];for(let ee=0;ee<7;ee++){const ie=Ch(i,ee);y.slot_definitions.forEach((Z,re)=>{const te=I0(ie,re),U=P.get(te);U?F.push(U):F.push({id:te,roster_id:y.id,date:ie.toISOString(),slot_index:re,assigned_member_ids:[],created_at:new Date().toISOString()})})}return F},[b,y,i]),L=(P,F)=>{const ee=H.find(ie=>ie.id===P);ee&&g({slot:ee,newMemberIds:F}),S(null)},O=P=>{const F=H.find(Z=>Z.id===P);if(!F||!F.date)return;const ee=new Date,ie=Af(ee,{weekStartsOn:1});if(!df(i,ie)){if(w?.can_admin_roster){S(P);return}if(w?.can_edit_roster){const Z=Th(F.date),re=Cf(ee);if(df(Z,re)||m4(Z,re))return;M(F)}}},W=()=>{if(!A||!u)return;const P=A.assigned_member_ids||[],F=u.id,ee=P.includes(F);let ie;ee?ie=P.filter(Z=>Z!==F):ie=[...P,F],g({slot:A,newMemberIds:ie}),M(null)},Q=k.useMemo(()=>{const F=Af(new Date,{weekStartsOn:1});return df(i,F)},[i]),X=H.find(P=>P.id===_);return h?m.jsx("div",{children:"Loading..."}):m.jsxs("div",{className:ut.featureContainer,children:[m.jsxs("div",{className:ut.headerNavigation,children:[m.jsx(Nt,{name:"chevron-left",label:r.formatMessage({id:"roster.previousWeek"}),onClick:T,className:ut.navButton}),m.jsxs("div",{className:ut.headerTitle,children:[m.jsx("h2",{children:y?.name}),m.jsx("p",{children:m.jsx(ae,{id:"roster.weekOf",values:{date:r.formatDate(i,{month:"long",day:"numeric"})}})})]}),m.jsx(Nt,{name:"chevron-right",label:r.formatMessage({id:"roster.nextWeek"}),onClick:D,className:ut.navButton})]}),m.jsx(oE,{roster:y,rosterSlots:H,members:p||[],onSlotClick:!Q&&(w?.can_edit_roster||w?.can_admin_roster)?O:void 0,startDate:i}),X&&m.jsx(F6,{slot:X,roster:y,allMembers:p||[],onClose:()=>S(null),onSave:L}),m.jsxs(Ns,{label:r.formatMessage({id:"roster.selfAssignment.title"}),open:!!A,onSlAfterHide:P=>{P.stopPropagation(),M(null)},children:[A&&u&&m.jsx("p",{children:A.assigned_member_ids?.includes(u.id)?r.formatMessage({id:"roster.confirmRemoveSelf"}):r.formatMessage({id:"roster.confirmAddSelf"})}),m.jsxs("div",{slot:"footer",className:ut.dialogFooter,children:[m.jsx(ke,{slot:"footer",onClick:()=>M(null),children:m.jsx(ae,{id:"common.no"})}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:W,children:m.jsx(ae,{id:"common.yes"})})]})]})]})}const uE="_pageWrapper_1fy59_1",dE="_pageContent_1fy59_10",fE="_drawer_1fy59_20",hE="_profileAction_1fy59_32",pE="_profileAvatar_1fy59_38",cs={pageWrapper:uE,pageContent:dE,drawer:fE,profileAction:hE,profileAvatar:pE};function mE(){const t=De(),i=Vt(),{data:l}=di({enabled:!0}),{roster_id:r}=Ss(),o=()=>{i(-1)},[u,f]=k.useState(()=>Af(new Date,{weekStartsOn:1})),h=()=>{const p=ub(u),b=db(u),w=`week-${`${p}${String(b).padStart(2,"0")}`}`,_=t.formatMessage({id:"share.rosterTitle"}),S=t.formatMessage({id:"share.rosterText"});R4(w,_,S)},g=zi.getPlatform()==="ios"?"box-arrow-up":"share";return m.jsx(hi,{label:t.formatMessage({id:"shell.tab.roster"}),placement:"end",open:!0,onSlAfterHide:o,className:cs.drawer,children:m.jsxs("div",{className:cs.pageWrapper,children:[m.jsx(fi,{showBackButton:!0,headerActions:m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--sl-spacing-small)"},children:[m.jsx(Nt,{name:g,label:t.formatMessage({id:"roster.shareWeekLabel"}),onClick:h}),m.jsx("div",{onClick:()=>i("/profile/me"),className:cs.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:l?.social_profiles?.avatar_url,name:l?.firstname??"",className:cs.profileAvatar})})]})}),m.jsx("div",{className:cs.pageContent,children:m.jsx(cE,{rosterId:r,currentWeekStart:u,onWeekChange:f})})]})})}const gE="_pageWrapper_1ndxt_1",vE="_profileAction_1ndxt_31",bE="_profileAvatar_1ndxt_37",yE="_headerActions_1ndxt_41",tc={pageWrapper:gE,profileAction:vE,profileAvatar:bE,headerActions:yE};var _E="sl-spinner";Nc.define("sl-spinner");var xE=Jt({tagName:_E,elementClass:Nc,react:qt,events:{},displayName:"SlSpinner"}),G1=xE;const wE="_profilePage_1a2jo_1",SE="_cover_1a2jo_7",EE="_header_1a2jo_19",CE="_avatar_1a2jo_35",TE="_stableInfo_1a2jo_43",AE="_name_1a2jo_53",ME="_followerCount_1a2jo_59",NE="_followButton_1a2jo_65",$E="_metaInfo_1a2jo_70",OE="_actionButtons_1a2jo_79",kE="_actionIcon_1a2jo_86",RE="_actionIconPlus_1a2jo_90",Wt={profilePage:wE,cover:SE,header:EE,avatar:CE,stableInfo:TE,name:AE,followerCount:ME,followButton:NE,metaInfo:$E,actionButtons:OE,actionIcon:kE,actionIconPlus:RE};var zE=yt`
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
`,ye=class extends rt{constructor(){super(...arguments),this.formControlController=new Es(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Kn(this,"help-text","label"),this.localize=new ja(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!i&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,i,l="none"){this.input.setSelectionRange(t,i,l)}setRangeText(t,i,l,r="preserve"){const o=i??this.input.selectionStart,u=l??this.input.selectionEnd;this.input.setRangeText(t,o,u,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!i,u=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return Se`
      <div
        part="form-control"
        class=${ft({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":r})}
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
            class=${ft({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${be(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${be(this.placeholder)}
              minlength=${be(this.minlength)}
              maxlength=${be(this.maxlength)}
              min=${be(this.min)}
              max=${be(this.max)}
              step=${be(this.step)}
              .value=${zh(this.value)}
              autocapitalize=${be(this.autocapitalize)}
              autocomplete=${be(this.autocomplete)}
              autocorrect=${be(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${be(this.pattern)}
              enterkeyhint=${be(this.enterkeyhint)}
              inputmode=${be(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${u?Se`
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
            ${this.passwordToggle&&!this.disabled?Se`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?Se`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:Se`
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
    `}};ye.styles=[$t,$c,zE];ye.dependencies={"sl-icon":Ft};C([We(".input__control")],ye.prototype,"input",2);C([ht()],ye.prototype,"hasFocus",2);C([B()],ye.prototype,"title",2);C([B({reflect:!0})],ye.prototype,"type",2);C([B()],ye.prototype,"name",2);C([B()],ye.prototype,"value",2);C([Rh()],ye.prototype,"defaultValue",2);C([B({reflect:!0})],ye.prototype,"size",2);C([B({type:Boolean,reflect:!0})],ye.prototype,"filled",2);C([B({type:Boolean,reflect:!0})],ye.prototype,"pill",2);C([B()],ye.prototype,"label",2);C([B({attribute:"help-text"})],ye.prototype,"helpText",2);C([B({type:Boolean})],ye.prototype,"clearable",2);C([B({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);C([B()],ye.prototype,"placeholder",2);C([B({type:Boolean,reflect:!0})],ye.prototype,"readonly",2);C([B({attribute:"password-toggle",type:Boolean})],ye.prototype,"passwordToggle",2);C([B({attribute:"password-visible",type:Boolean})],ye.prototype,"passwordVisible",2);C([B({attribute:"no-spin-buttons",type:Boolean})],ye.prototype,"noSpinButtons",2);C([B({reflect:!0})],ye.prototype,"form",2);C([B({type:Boolean,reflect:!0})],ye.prototype,"required",2);C([B()],ye.prototype,"pattern",2);C([B({type:Number})],ye.prototype,"minlength",2);C([B({type:Number})],ye.prototype,"maxlength",2);C([B()],ye.prototype,"min",2);C([B()],ye.prototype,"max",2);C([B()],ye.prototype,"step",2);C([B()],ye.prototype,"autocapitalize",2);C([B()],ye.prototype,"autocorrect",2);C([B()],ye.prototype,"autocomplete",2);C([B({type:Boolean})],ye.prototype,"autofocus",2);C([B()],ye.prototype,"enterkeyhint",2);C([B({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],ye.prototype,"spellcheck",2);C([B()],ye.prototype,"inputmode",2);C([Ve("disabled",{waitUntilFirstUpdate:!0})],ye.prototype,"handleDisabledChange",1);C([Ve("step",{waitUntilFirstUpdate:!0})],ye.prototype,"handleStepChange",1);C([Ve("value",{waitUntilFirstUpdate:!0})],ye.prototype,"handleValueChange",1);var DE="sl-input";ye.define("sl-input");var LE=Jt({tagName:DE,elementClass:ye,react:qt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),Ce=LE,jE=yt`
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
`,$s=class extends rt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};$s.styles=[$t,jE];C([B({type:Boolean,reflect:!0})],$s.prototype,"vertical",2);C([Ve("vertical")],$s.prototype,"handleVerticalChange",1);var BE="sl-divider";$s.define("sl-divider");var HE=Jt({tagName:BE,elementClass:$s,react:qt,events:{},displayName:"SlDivider"}),Lc=HE;const UE="_editUserDrawer_dn68d_1",IE="_formContent_dn68d_33",PE="_countrySelect_dn68d_45",bf={editUserDrawer:UE,formContent:IE,countrySelect:PE};function qE({isOpen:t,onClose:i,user:l,socialProfile:r}){const o=De(),u=W_(),f=wc(),[h,g]=k.useState(""),[p,b]=k.useState(""),[y,w]=k.useState(""),[_,S]=k.useState(""),[A,M]=k.useState(null),[T,D]=k.useState(""),[H,L]=k.useState(""),[O,W]=k.useState(""),[Q,X]=k.useState(""),[P,F]=k.useState({}),ee=[{value:"M",labelId:"gender.male"},{value:"F",labelId:"gender.female"},{value:"X",labelId:"gender.other"}];k.useEffect(()=>{t&&l&&(g(r?.display_name||""),b(l.firstname||""),w(l.lastname||""),S(l.email||""),M(l.date_of_birth?new Date(l.date_of_birth):null),D(l.city||""),L(l.country||""),W(l.gender||""),X(l.locale||"en"),F({}))},[t,l,r]);const ie=()=>{i()},Z=()=>{const U={},K=o.formatMessage({id:"validation.required"});if(r&&!h.trim()&&(U.displayName=K),p.trim()||(U.firstname=K),y.trim()||(U.lastname=K),_&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_)&&(U.email=o.formatMessage({id:"validation.emailInvalid"})),A){const J=C0(new Date);A>J&&(U.dateOfBirth=o.formatMessage({id:"validation.ageMinimum"}))}return F(U),Object.keys(U).length===0},re=async()=>{if(Z())try{r&&h!==r.display_name&&await f.mutateAsync({socialProfileId:r.id,displayName:h}),await u.mutateAsync({userId:l.id,updates:{firstname:p,lastname:y,email:_||void 0,date_of_birth:A?za(A,"yyyy-MM-dd"):void 0,gender:O||void 0,city:T||void 0,country:H||void 0,locale:Q}}),i()}catch(U){console.error("Failed to update user:",U)}},te=U=>{const K=U.locale.substring(0,2),J=Sc.slice().sort((oe,xe)=>{const st=oe.name[K]??oe.name.en,Ae=xe.name[K]??xe.name.en;return st.localeCompare(Ae,K)});if(K==="nl"){const oe=J.find(Ae=>Ae.code==="NL"),xe=J.find(Ae=>Ae.code==="BE"),st=J.filter(Ae=>Ae.code!=="NL"&&Ae.code!=="BE");return m.jsxs(R.Fragment,{children:[[oe,xe].map(Ae=>m.jsx(Le,{value:Ae.code,children:Ae.name[K]??Ae.name.en},Ae.code)),m.jsx(Lc,{}),st.map(Ae=>m.jsx(Le,{value:Ae.code,children:Ae.name[K]??Ae.name.en},Ae.code))]})}return J.map(oe=>m.jsx(Le,{value:oe.code,children:oe.name[K]??oe.name.en},oe.code))};return m.jsxs(hi,{label:o.formatMessage({id:"user.edit.title"}),placement:"end",open:t,onSlAfterHide:ie,className:bf.editUserDrawer,children:[m.jsxs("div",{className:bf.formContent,children:[r&&m.jsx(Ce,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:h,onSlInput:U=>g(U.target.value),helpText:P.displayName,required:!0}),m.jsxs(Kt,{"data-testid":"language-select",label:o.formatMessage({id:"users.languageLabel"}),value:Q,onSlChange:U=>X(U.target.value),onSlAfterHide:U=>{U.stopPropagation()},children:[m.jsx(Le,{value:"en",children:o.formatMessage({id:"common.language.english"})}),m.jsx(Le,{value:"nl",children:o.formatMessage({id:"common.language.dutch"})})]}),m.jsx(Ce,{"data-testid":"firstname-input",label:o.formatMessage({id:"users.firstNameLabel"}),value:p,onSlInput:U=>b(U.target.value),required:!0,helpText:P.firstname}),m.jsx(Ce,{"data-testid":"lastname-input",label:o.formatMessage({id:"users.lastNameLabel"}),value:y,onSlInput:U=>w(U.target.value),required:!0,helpText:P.lastname}),m.jsx(Ce,{"data-testid":"email-input",label:o.formatMessage({id:"auth.emailLabel"}),value:_,onSlInput:U=>S(U.target.value),helpText:P.email}),m.jsx(Ce,{"data-testid":"dob-input",label:o.formatMessage({id:"users.dateOfBirthLabel"}),type:"date",max:za(C0(new Date),"yyyy-MM-dd"),value:A?za(A,"yyyy-MM-dd"):"",onSlChange:U=>M(U.target.valueAsDate),helpText:P.dateOfBirth}),m.jsx(Kt,{"data-testid":"gender-select",label:o.formatMessage({id:"users.genderLabel"}),value:O,onSlChange:U=>W(U.target.value),onSlAfterHide:U=>{U.stopPropagation()},children:ee.map(U=>m.jsx(Le,{value:U.value,children:o.formatMessage({id:U.labelId})},U.value))}),m.jsx(Ce,{"data-testid":"city-input",label:o.formatMessage({id:"users.cityLabel"}),value:T,onSlInput:U=>D(U.target.value)}),m.jsx(Kt,{"data-testid":"country-select",className:bf.countrySelect,label:o.formatMessage({id:"users.countryLabel"}),value:H,onSlChange:U=>L(U.target.value),onSlAfterHide:U=>{U.stopPropagation()},hoist:!0,children:te(o)})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:re,loading:u.isPending||f.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:ie,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const VE="_editHorseDrawer_1ip94_1",FE="_formContent_1ip94_33",GE="_inputWithIcon_1ip94_46",YE="_countrySelect_1ip94_58",XE="_readOnlyInput_1ip94_62",Hl={editHorseDrawer:VE,formContent:FE,inputWithIcon:GE,countrySelect:YE,readOnlyInput:XE};function Y1({isOpen:t,onClose:i,horse:l,socialProfile:r}){const o=De(),u=Z_(),{data:f}=hb({socialId:l.social_profile_id,enabled:t&&!!l.social_profile_id}),h=f??r,g=wc(),{data:p}=pb({profileId:h?.id,enabled:!!h?.id&&t}),b=p?.can_admin_social_profile??!1,[y,w]=k.useState(""),[_,S]=k.useState(""),[A,M]=k.useState(""),[T,D]=k.useState(""),[H,L]=k.useState(""),[O,W]=k.useState(null),[Q,X]=k.useState(""),[P,F]=k.useState(""),[ee,ie]=k.useState(""),[Z,re]=k.useState(""),[te,U]=k.useState(""),[K,J]=k.useState(""),[oe,xe]=k.useState({});k.useEffect(()=>{t&&l&&(w(h?.display_name||""),S(l.name||""),M(l.official_name||""),D(l.chip_number||""),L(l.ueln||""),W(l.date_of_birth?new Date(l.date_of_birth):null),X(l.gender||""),F(l.color||""),ie(l.breed_studbook||""),re(l.country_of_birth||""),U(l.markings||""),J(l.chip_location||""),xe({}))},[t,l,h]);const st=()=>{i()},Ae=()=>{const de={};return h&&!y.trim()&&(de.displayName=o.formatMessage({id:"validation.required"})),_.trim()||(de.name=o.formatMessage({id:"validation.required"})),!T.trim()&&!H.trim()&&(de.chipOrUeln=o.formatMessage({id:"validation.chipOrUelnRequired"})),H.trim()&&H.trim().length!==15&&(de.ueln=o.formatMessage({id:"validation.uelnInvalid"})),xe(de),Object.keys(de).length===0},ne=async()=>{if(Ae())try{h&&h.id&&y!==h.display_name&&await g.mutateAsync({socialProfileId:h.id,displayName:y}),await u.mutateAsync({horseId:l.id,updates:{name:_,official_name:A||void 0,chip_number:T||void 0,ueln:H||void 0,date_of_birth:O?za(O,"yyyy-MM-dd"):void 0,gender:Q||void 0,color:P||void 0,breed_studbook:ee||void 0,country_of_birth:Z||void 0,markings:te||void 0,chip_location:K||void 0}}),i()}catch(de){console.error("Failed to update horse:",de)}},pe=async de=>{const{scanBarcode:ot}=await Pt(async()=>{const{scanBarcode:me}=await import("./index-D7RX2YAu.js");return{scanBarcode:me}},__vite__mapDeps([6,1])),Je=await ot();Je&&(de==="chipNumber"?D(Je):de==="ueln"&&L(Je))},Xe=de=>{const ot=de.locale.substring(0,2),Je=Sc.slice().sort((me,He)=>{const ea=me.name[ot]??me.name.en,Ze=He.name[ot]??He.name.en;return ea.localeCompare(Ze,ot)});if(ot==="nl"){const me=Je.find(Ze=>Ze.code==="NL"),He=Je.find(Ze=>Ze.code==="BE"),ea=Je.filter(Ze=>Ze.code!=="NL"&&Ze.code!=="BE");return m.jsxs(R.Fragment,{children:[[me,He].map(Ze=>m.jsx(Le,{value:Ze.code,children:Ze.name[ot]??Ze.name.en},Ze.code)),m.jsx(Lc,{}),ea.map(Ze=>m.jsx(Le,{value:Ze.code,children:Ze.name[ot]??Ze.name.en},Ze.code))]})}return Je.map(me=>m.jsx(Le,{value:me.code,children:me.name[ot]??me.name.en},me.code))};return m.jsxs(hi,{label:o.formatMessage({id:"horse.edit.title"}),placement:"end",open:t,onSlAfterHide:i,className:Hl.editHorseDrawer,children:[m.jsxs("div",{className:Hl.formContent,children:[h&&m.jsx(Ce,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:y,onSlInput:de=>w(de.target.value),helpText:oe.displayName,required:!0,readonly:!b,className:b?void 0:Hl.readOnlyInput}),m.jsx(Ce,{"data-testid":"horse-name-input",label:o.formatMessage({id:"horses.nameLabel"}),value:_,onSlInput:de=>S(de.target.value),required:!0,helpText:oe.name}),m.jsx(Ce,{"data-testid":"horse-official-name-input",label:o.formatMessage({id:"horses.officialNameLabel"}),value:A,required:!0,onSlInput:de=>M(de.target.value)}),m.jsxs("div",{className:Hl.inputWithIcon,children:[m.jsx(Ce,{"data-testid":"horse-chip-number-input",label:o.formatMessage({id:"horses.chipNumberLabel"}),value:T,onSlInput:de=>D(de.target.value),helpText:oe.chipOrUeln}),m.jsx(Nt,{"data-testid":"chip-scan-button",name:"qr-code",label:o.formatMessage({id:"horses.scanBarcode"}),onClick:()=>pe("chipNumber")})]}),m.jsx(Ce,{label:o.formatMessage({id:"horses.chipLocationLabel"}),value:K,onSlInput:de=>J(de.target.value)}),m.jsxs("div",{className:Hl.inputWithIcon,children:[m.jsx(Ce,{"data-testid":"horse-ueln-input",label:o.formatMessage({id:"horses.uelnLabel"}),value:H,onSlInput:de=>L(de.target.value),helpText:oe.ueln||oe.chipOrUeln}),m.jsx(Nt,{"data-testid":"ueln-scan-button",name:"qr-code",label:o.formatMessage({id:"horses.scanBarcode"}),onClick:()=>pe("ueln")})]}),m.jsx(Ce,{label:o.formatMessage({id:"horses.dateOfBirthLabel"}),type:"date",max:new Date().toISOString().split("T")[0],value:O?za(O,"yyyy-MM-dd"):"",onSlChange:de=>W(de.target.valueAsDate)}),m.jsxs(Kt,{label:o.formatMessage({id:"horses.genderLabel"}),value:Q,onSlChange:de=>X(de.target.value),onSlAfterHide:de=>{de.stopPropagation()},children:[m.jsx(Le,{value:"Stallion",children:o.formatMessage({id:"gender.stallion"})}),m.jsx(Le,{value:"Mare",children:o.formatMessage({id:"gender.mare"})}),m.jsx(Le,{value:"Gelding",children:o.formatMessage({id:"gender.gelding"})})]}),m.jsx(Kt,{label:o.formatMessage({id:"horses.countryOfBirthLabel"}),className:Hl.countrySelect,value:Z,onSlChange:de=>re(de.target.value),onSlAfterHide:de=>{de.stopPropagation()},hoist:!0,children:Xe(o)}),m.jsx(Ce,{label:o.formatMessage({id:"horses.colorLabel"}),value:P,onSlInput:de=>F(de.target.value)}),m.jsx(Ce,{label:o.formatMessage({id:"horses.breedStudbookLabel"}),value:ee,onSlInput:de=>ie(de.target.value)}),m.jsx(Ce,{label:o.formatMessage({id:"horses.markingsLabel"}),value:te,onSlInput:de=>U(de.target.value)})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:ne,disabled:u.isPending||g.isPending,loading:u.isPending||g.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:st,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const QE="_editOrganizationDrawer_2n73i_1",WE="_formContent_2n73i_33",ZE="_countrySelect_2n73i_45",yf={editOrganizationDrawer:QE,formContent:WE,countrySelect:ZE};function KE({isOpen:t,onClose:i,organization:l,socialProfile:r}){const o=De(),u=K_(),f=wc(),[h,g]=k.useState(""),[p,b]=k.useState(""),[y,w]=k.useState(""),[_,S]=k.useState(""),[A,M]=k.useState(""),[T,D]=k.useState(""),[H,L]=k.useState({});k.useEffect(()=>{t&&l&&(g(r?.display_name||""),b(l.name||""),w(l.email||""),S(l.chamber_of_commerce_registration||""),M(l.city||""),D(l.country||""),L({}))},[t,l,r]);const O=()=>{i()},W=()=>{const P={},F=o.formatMessage({id:"validation.required"});return r&&!h.trim()&&(P.displayName=F),p.trim()||(P.name=F),y&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)&&(P.email=o.formatMessage({id:"validation.emailInvalid"})),L(P),Object.keys(P).length===0},Q=async()=>{if(W())try{r&&h!==r.display_name&&await f.mutateAsync({socialProfileId:r.id,displayName:h}),await u.mutateAsync({organizationId:l.id,updates:{name:p,email:y||void 0,chamber_of_commerce_registration:_||void 0,city:A||void 0,country:T||void 0}}),i()}catch(P){console.error("Failed to update organization:",P)}},X=P=>{const F=P.locale.substring(0,2),ee=Sc.slice().sort((ie,Z)=>{const re=ie.name[F]??ie.name.en,te=Z.name[F]??Z.name.en;return re.localeCompare(te,F)});if(F==="nl"){const ie=ee.find(te=>te.code==="NL"),Z=ee.find(te=>te.code==="BE"),re=ee.filter(te=>te.code!=="NL"&&te.code!=="BE");return m.jsxs(R.Fragment,{children:[[ie,Z].map(te=>m.jsx(Le,{value:te.code,children:te.name[F]??te.name.en},te.code)),m.jsx(Lc,{}),re.map(te=>m.jsx(Le,{value:te.code,children:te.name[F]??te.name.en},te.code))]})}return ee.map(ie=>m.jsx(Le,{value:ie.code,children:ie.name[F]??ie.name.en},ie.code))};return m.jsxs(hi,{label:o.formatMessage({id:"organization.edit.title"}),placement:"end",open:t,onSlAfterHide:O,className:yf.editOrganizationDrawer,children:[m.jsxs("div",{className:yf.formContent,children:[r&&m.jsx(Ce,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:h,onSlInput:P=>g(P.target.value),helpText:H.displayName,required:!0}),m.jsx(Ce,{"data-testid":"name-input",label:o.formatMessage({id:"organization.nameLabel"}),value:p,onSlInput:P=>b(P.target.value),required:!0,helpText:H.name}),m.jsx(Ce,{"data-testid":"email-input",label:o.formatMessage({id:"auth.emailLabel"}),value:y,onSlInput:P=>w(P.target.value),helpText:H.email}),m.jsx(Ce,{"data-testid":"coc-input",label:o.formatMessage({id:"organization.cocLabel"}),value:_,onSlInput:P=>S(P.target.value)}),m.jsx(Ce,{"data-testid":"city-input",label:o.formatMessage({id:"organization.cityLabel"}),value:A,onSlInput:P=>M(P.target.value)}),m.jsx(Kt,{"data-testid":"country-select",className:yf.countrySelect,label:o.formatMessage({id:"users.countryLabel"}),value:T,onSlChange:P=>D(P.target.value),onSlAfterHide:P=>{P.stopPropagation()},hoist:!0,children:X(o)})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:Q,loading:u.isPending||f.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:O,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}function JE({socialProfileType:t,userMemberships:i,horseDetails:l,orgDetails:r}){const o=[];return t==="user"&&i?i.forEach(u=>o.push(m.jsx("p",{className:Wt.stableRole,children:m.jsx(ae,{id:`profile.stable.${u.role}`,values:{organizationName:u.organizations?.name,nickName:u.nickname}})},u.id))):t==="horse"&&l?.official_name?o.push(m.jsx("p",{children:l.official_name},"official-name")):t==="organization"&&r?.city&&o.push(m.jsx("p",{children:m.jsx(ae,{id:"profile.organization.location",values:{city:r.city}})},"org-location")),m.jsx("div",{className:Wt.stableInfo,children:o})}function eC({profileId:t}){const i=Vt(),[l,r]=k.useState(!1),[o,u]=k.useState(!1),f=wc(),h=J_(),g=ex(),{data:p,isLoading:b}=di({enabled:!0}),y=t==="me"||t===p?.social_profile_id,w=y?p?.social_profile_id:t,{data:_,isLoading:S}=hb({socialId:w,enabled:!!w}),{data:A}=pb({profileId:_?.id,enabled:!!_?.id}),{data:M,isLoading:T}=tx({userId:_?.entity_id,enabled:_?.type==="user"}),{data:D,isLoading:H}=mb({horseId:_?.entity_id,enabled:_?.type==="horse"}),{data:L,isLoading:O}=gb({organizationId:_?.entity_id,enabled:_?.type==="organization"}),{data:W}=ax({userId:M?.id,enabled:_?.type==="user"&&!!M}),{data:Q,isLoading:X}=ix({followerId:p?.social_profile_id,targetId:_?.id,enabled:!!p?.social_profile_id&&!!_?.id&&!y}),{data:P}=nx({targetId:_?.id,enabled:!!_?.id}),F=A?.can_edit_profile??!1,ee=A?.can_post_social??!1,ie=A?.can_admin_team??!1,Z=A?.can_admin_social_profile??!1,re=_?.type==="horse"||_?.type==="organization",te=_?.type==="horse"?D?.owner_id===p?.id:F,U=!y&&re&&!te,K=()=>{r(!0)},J=()=>{!p?.social_profile_id||!_?.id||(Q?g.mutate({followerId:p.social_profile_id,targetId:_.id}):h.mutate({followerId:p.social_profile_id,targetId:_.id}))},oe=async Ae=>{if(_){u(!0);try{const ne=`${_.id}/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`,{error:pe}=await la.storage.from("avatars").upload(ne,Ae,{cacheControl:"3600",upsert:!1});if(pe)throw pe;const{data:{publicUrl:Xe}}=la.storage.from("avatars").getPublicUrl(ne);f.mutate({socialProfileId:_.id,avatarUrl:Xe})}catch(ne){console.error("Avatar upload failed:",ne)}finally{u(!1)}}},xe=De();if(b||S||T||H||O)return m.jsx(G1,{});if(!_)return m.jsx("div",{children:xe.formatMessage({id:"profile.notFound"})});const st=_?.display_name||xe.formatMessage({id:"profile.NoDisplayName"});return m.jsxs("div",{className:Wt.profilePage,children:[m.jsx("div",{className:Wt.cover}),m.jsxs("div",{className:Wt.header,children:[Z?m.jsx(k6,{currentImage:_.avatar_url,name:st,onSave:oe,loading:o,className:Wt.avatar}):m.jsx(vt,{image:_.avatar_url,name:st,className:Wt.avatar}),m.jsxs("h2",{className:Wt.name,"data-testid":"profile-name",children:[st,U&&p&&m.jsx(ke,{className:Wt.followButton,variant:Q?"default":"primary",size:"small",onClick:J,loading:h.isPending||g.isPending||X,"data-testid":"follow-button",children:m.jsx(ae,{id:Q?"profile.unfollow":"profile.follow"})})]}),m.jsx(JE,{socialProfileType:_.type,userMemberships:W,horseDetails:D,orgDetails:L}),m.jsxs("div",{className:Wt.metaInfo,children:[re&&m.jsx("span",{className:Wt.followerCount,children:m.jsx(ae,{id:"profile.followers",values:{count:P||0}})}),m.jsxs("div",{className:Wt.actionButtons,children:[F&&m.jsxs(ke,{variant:"primary",size:"small",onClick:K,"data-testid":"edit-info-button",children:[m.jsx(bt,{slot:"prefix",name:"pencil",className:Wt.actionIcon}),m.jsx(ae,{id:"profile.edit.info"})]}),ee&&m.jsxs(ke,{variant:"primary",size:"small","data-testid":"post-update-button",children:[m.jsx(bt,{slot:"prefix",name:"plus",className:Wt.actionIconPlus}),m.jsx(ae,{id:"profile.postUpdate"})]}),ie&&_.type==="horse"&&m.jsxs(ke,{variant:"primary",size:"small",onClick:()=>i(`/horse/${_.entity_id}/team`),children:[m.jsx(bt,{slot:"prefix",name:"people",className:Wt.actionIcon}),m.jsx(ae,{id:"manageTeam.buttonLabel",defaultMessage:"Team"})]})]})]})]}),_.type==="user"&&M&&m.jsx(qE,{isOpen:l,onClose:()=>r(!1),user:M,socialProfile:_}),_.type==="horse"&&D&&m.jsx(Y1,{isOpen:l,onClose:()=>r(!1),horse:D,socialProfile:_}),_.type==="organization"&&L&&m.jsx(KE,{isOpen:l,onClose:()=>r(!1),organization:L,socialProfile:_})]})}function P0(){const{social_id:t}=Ss(),i=t||"me",l=i==="me",r=lx(),o=De(),u=Vt(),{data:f}=di({enabled:!0}),h=m.jsx("div",{className:tc.headerActions,children:l?m.jsx(Nt,{name:"box-arrow-right",label:o.formatMessage({id:"profile.logout"}),onClick:r,"data-testid":"logout-button"}):m.jsx("div",{onClick:()=>u("/profile/me"),className:tc.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:f?.social_profiles?.avatar_url,name:f?.firstname??"",className:tc.profileAvatar})})});return m.jsxs("div",{className:tc.pageWrapper,children:[m.jsx(fi,{showBackButton:!0,headerActions:h}),m.jsx(eC,{profileId:i})]})}var q0,Pe="colors",Xt="sizes",le="space",tC={gap:le,gridGap:le,columnGap:le,gridColumnGap:le,rowGap:le,gridRowGap:le,inset:le,insetBlock:le,insetBlockEnd:le,insetBlockStart:le,insetInline:le,insetInlineEnd:le,insetInlineStart:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,marginBlock:le,marginBlockEnd:le,marginBlockStart:le,marginInline:le,marginInlineEnd:le,marginInlineStart:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,paddingBlock:le,paddingBlockEnd:le,paddingBlockStart:le,paddingInline:le,paddingInlineEnd:le,paddingInlineStart:le,top:le,right:le,bottom:le,left:le,scrollMargin:le,scrollMarginTop:le,scrollMarginRight:le,scrollMarginBottom:le,scrollMarginLeft:le,scrollMarginX:le,scrollMarginY:le,scrollMarginBlock:le,scrollMarginBlockEnd:le,scrollMarginBlockStart:le,scrollMarginInline:le,scrollMarginInlineEnd:le,scrollMarginInlineStart:le,scrollPadding:le,scrollPaddingTop:le,scrollPaddingRight:le,scrollPaddingBottom:le,scrollPaddingLeft:le,scrollPaddingX:le,scrollPaddingY:le,scrollPaddingBlock:le,scrollPaddingBlockEnd:le,scrollPaddingBlockStart:le,scrollPaddingInline:le,scrollPaddingInlineEnd:le,scrollPaddingInlineStart:le,fontSize:"fontSizes",background:Pe,backgroundColor:Pe,backgroundImage:Pe,borderImage:Pe,border:Pe,borderBlock:Pe,borderBlockEnd:Pe,borderBlockStart:Pe,borderBottom:Pe,borderBottomColor:Pe,borderColor:Pe,borderInline:Pe,borderInlineEnd:Pe,borderInlineStart:Pe,borderLeft:Pe,borderLeftColor:Pe,borderRight:Pe,borderRightColor:Pe,borderTop:Pe,borderTopColor:Pe,caretColor:Pe,color:Pe,columnRuleColor:Pe,fill:Pe,outline:Pe,outlineColor:Pe,stroke:Pe,textDecorationColor:Pe,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Xt,minBlockSize:Xt,maxBlockSize:Xt,inlineSize:Xt,minInlineSize:Xt,maxInlineSize:Xt,width:Xt,minWidth:Xt,maxWidth:Xt,height:Xt,minHeight:Xt,maxHeight:Xt,flexBasis:Xt,gridTemplateColumns:Xt,gridTemplateRows:Xt,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},aC=(t,i)=>typeof i=="function"?{"()":Function.prototype.toString.call(i)}:i,Os=()=>{const t=Object.create(null);return(i,l,...r)=>{const o=(u=>JSON.stringify(u,aC))(i);return o in t?t[o]:t[o]=l(i,...r)}},uc=Symbol.for("sxs.internal"),Dh=(t,i)=>Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)),V0=t=>{for(const i in t)return!0;return!1},{hasOwnProperty:iC}=Object.prototype,th=t=>t.includes("-")?t:t.replace(/[A-Z]/g,(i=>"-"+i.toLowerCase())),nC=/\s+(?![^()]*\))/,Ul=t=>i=>t(...typeof i=="string"?String(i).split(nC):[i]),F0={appearance:t=>({WebkitAppearance:t,appearance:t}),backfaceVisibility:t=>({WebkitBackfaceVisibility:t,backfaceVisibility:t}),backdropFilter:t=>({WebkitBackdropFilter:t,backdropFilter:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),boxDecorationBreak:t=>({WebkitBoxDecorationBreak:t,boxDecorationBreak:t}),clipPath:t=>({WebkitClipPath:t,clipPath:t}),content:t=>({content:t.includes('"')||t.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(t)?t:`"${t}"`}),hyphens:t=>({WebkitHyphens:t,hyphens:t}),maskImage:t=>({WebkitMaskImage:t,maskImage:t}),maskSize:t=>({WebkitMaskSize:t,maskSize:t}),tabSize:t=>({MozTabSize:t,tabSize:t}),textSizeAdjust:t=>({WebkitTextSizeAdjust:t,textSizeAdjust:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),marginBlock:Ul(((t,i)=>({marginBlockStart:t,marginBlockEnd:i||t}))),marginInline:Ul(((t,i)=>({marginInlineStart:t,marginInlineEnd:i||t}))),maxSize:Ul(((t,i)=>({maxBlockSize:t,maxInlineSize:i||t}))),minSize:Ul(((t,i)=>({minBlockSize:t,minInlineSize:i||t}))),paddingBlock:Ul(((t,i)=>({paddingBlockStart:t,paddingBlockEnd:i||t}))),paddingInline:Ul(((t,i)=>({paddingInlineStart:t,paddingInlineEnd:i||t})))},_f=/([\d.]+)([^]*)/,lC=(t,i)=>t.length?t.reduce(((l,r)=>(l.push(...i.map((o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o))),l)),[]):i,rC=(t,i)=>t in sC&&typeof i=="string"?i.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((l,r,o,u)=>r+(o==="stretch"?`-moz-available${u};${th(t)}:${r}-webkit-fill-available`:`-moz-fit-content${u};${th(t)}:${r}fit-content`)+u)):String(i),sC={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Li=t=>t?t+"-":"",X1=(t,i,l)=>t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((r,o,u,f,h)=>f=="$"==!!u?r:(o||f=="--"?"calc(":"")+"var(--"+(f==="$"?Li(i)+(h.includes("$")?"":Li(l))+h.replace(/\$/g,"-"):h)+")"+(o||f=="--"?"*"+(o||"")+(u||"1")+")":""))),oC=/\s*,\s*(?![^()]*\))/,cC=Object.prototype.toString,Fl=(t,i,l,r,o)=>{let u,f,h;const g=(p,b,y)=>{let w,_;const S=A=>{for(w in A){const D=w.charCodeAt(0)===64,H=D&&Array.isArray(A[w])?A[w]:[A[w]];for(_ of H){const L=/[A-Z]/.test(T=w)?T:T.replace(/-[^]/g,(W=>W[1].toUpperCase())),O=typeof _=="object"&&_&&_.toString===cC&&(!r.utils[L]||!b.length);if(L in r.utils&&!O){const W=r.utils[L];if(W!==f){f=W,S(W(_)),f=null;continue}}else if(L in F0){const W=F0[L];if(W!==h){h=W,S(W(_)),h=null;continue}}if(D&&(M=w.slice(1)in r.media?"@media "+r.media[w.slice(1)]:w,w=M.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((W,Q,X,P,F,ee)=>{const ie=_f.test(Q),Z=.0625*(ie?-1:1),[re,te]=ie?[P,Q]:[Q,P];return"("+(X[0]==="="?"":X[0]===">"===ie?"max-":"min-")+re+":"+(X[0]!=="="&&X.length===1?te.replace(_f,((U,K,J)=>Number(K)+Z*(X===">"?1:-1)+J)):te)+(F?") and ("+(F[0]===">"?"min-":"max-")+re+":"+(F.length===1?ee.replace(_f,((U,K,J)=>Number(K)+Z*(F===">"?-1:1)+J)):ee):"")+")"}))),O){const W=D?y.concat(w):[...y],Q=D?[...b]:lC(b,w.split(oC));u!==void 0&&o(G0(...u)),u=void 0,g(_,Q,W)}else u===void 0&&(u=[[],b,y]),w=D||w.charCodeAt(0)!==36?w:`--${Li(r.prefix)}${w.slice(1).replace(/\$/g,"-")}`,_=O?_:typeof _=="number"?_&&L in uC?String(_)+"px":String(_):X1(rC(L,_??""),r.prefix,r.themeMap[L]),u[0].push(`${D?`${w} `:`${th(w)}:`}${_}`)}}var M,T};S(p),u!==void 0&&o(G0(...u)),u=void 0};g(t,i,l)},G0=(t,i,l)=>`${l.map((r=>`${r}{`)).join("")}${i.length?`${i.join(",")}{`:""}${t.join(";")}${i.length?"}":""}${Array(l.length?l.length+1:0).join("}")}`,uC={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},Y0=t=>String.fromCharCode(t+(t>25?39:97)),Xn=t=>(i=>{let l,r="";for(l=Math.abs(i);l>52;l=l/52|0)r=Y0(l%52)+r;return Y0(l%52)+r})(((i,l)=>{let r=l.length;for(;r;)i=33*i^l.charCodeAt(--r);return i})(5381,JSON.stringify(t))>>>0),ms=["themed","global","styled","onevar","resonevar","allvar","inline"],dC=t=>{if(t.href&&!t.href.startsWith(location.origin))return!1;try{return!!t.cssRules}catch{return!1}},fC=t=>{let i;const l=()=>{const{cssRules:o}=i.sheet;return[].map.call(o,((u,f)=>{const{cssText:h}=u;let g="";if(h.startsWith("--sxs"))return"";if(o[f-1]&&(g=o[f-1].cssText).startsWith("--sxs")){if(!u.cssRules.length)return"";for(const p in i.rules)if(i.rules[p].group===u)return`--sxs{--sxs:${[...i.rules[p].cache].join(" ")}}${h}`;return u.cssRules.length?`${g}${h}`:""}return h})).join("")},r=()=>{if(i){const{rules:h,sheet:g}=i;if(!g.deleteRule){for(;Object(Object(g.cssRules)[0]).type===3;)g.cssRules.splice(0,1);g.cssRules=[]}for(const p in h)delete h[p]}const o=Object(t).styleSheets||[];for(const h of o)if(dC(h)){for(let g=0,p=h.cssRules;p[g];++g){const b=Object(p[g]);if(b.type!==1)continue;const y=Object(p[g+1]);if(y.type!==4)continue;++g;const{cssText:w}=b;if(!w.startsWith("--sxs"))continue;const _=w.slice(14,-3).trim().split(/\s+/),S=ms[_[0]];S&&(i||(i={sheet:h,reset:r,rules:{},toString:l}),i.rules[S]={group:y,index:g,cache:new Set(_)})}if(i)break}if(!i){const h=(g,p)=>({type:p,cssRules:[],insertRule(b,y){this.cssRules.splice(y,0,h(b,{import:3,undefined:1}[(b.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return g==="@media{}"?`@media{${[].map.call(this.cssRules,(b=>b.cssText)).join("")}}`:g}});i={sheet:t?(t.head||t).appendChild(document.createElement("style")).sheet:h("","text/css"),rules:{},reset:r,toString:l}}const{sheet:u,rules:f}=i;for(let h=ms.length-1;h>=0;--h){const g=ms[h];if(!f[g]){const p=ms[h+1],b=f[p]?f[p].index:u.cssRules.length;u.insertRule("@media{}",b),u.insertRule(`--sxs{--sxs:${h}}`,b),f[g]={group:u.cssRules[b+1],index:b,cache:new Set([h])}}hC(f[g])}};return r(),i},hC=t=>{const i=t.group;let l=i.cssRules.length;t.apply=r=>{try{i.insertRule(r,l),++l}catch{}}},us=Symbol(),pC=Os(),mC=(t,i)=>pC(t,(()=>(...l)=>{let r={type:null,composers:new Set};for(const o of l)if(o!=null)if(o[uc]){r.type==null&&(r.type=o[uc].type);for(const u of o[uc].composers)r.composers.add(u)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(gC(o,t));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),vC(t,r,i)})),gC=({variants:t,compoundVariants:i,defaultVariants:l,...r},o)=>{const u=`${Li(o.prefix)}c-${Xn(r)}`,f=[],h=[],g=Object.create(null),p=[];for(const w in l)g[w]=String(l[w]);if(typeof t=="object"&&t)for(const w in t){b=g,y=w,iC.call(b,y)||(g[w]="undefined");const _=t[w];for(const S in _){const A={[w]:String(S)};String(S)==="undefined"&&p.push(w);const M=_[S],T=[A,M,!V0(M)];f.push(T)}}var b,y;if(typeof i=="object"&&i)for(const w of i){let{css:_,...S}=w;_=typeof _=="object"&&_||{};for(const M in S)S[M]=String(S[M]);const A=[S,_,!V0(_)];h.push(A)}return[u,r,f,h,g,p]},vC=(t,i,l)=>{const[r,o,u,f]=bC(i.composers),h=typeof i.type=="function"||i.type.$$typeof?(y=>{function w(){for(let _=0;_<w[us].length;_++){const[S,A]=w[us][_];y.rules[S].apply(A)}return w[us]=[],null}return w[us]=[],w.rules={},ms.forEach((_=>w.rules[_]={apply:S=>w[us].push([_,S])})),w})(l):null,g=(h||l).rules,p=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,b=y=>{y=typeof y=="object"&&y||yC;const{css:w,..._}=y,S={};for(const T in u)if(delete _[T],T in y){let D=y[T];typeof D=="object"&&D?S[T]={"@initial":u[T],...D}:(D=String(D),S[T]=D!=="undefined"||f.has(T)?D:u[T])}else S[T]=u[T];const A=new Set([...o]);for(const[T,D,H,L]of i.composers){l.rules.styled.cache.has(T)||(l.rules.styled.cache.add(T),Fl(D,[`.${T}`],[],t,(Q=>{g.styled.apply(Q)})));const O=X0(H,S,t.media),W=X0(L,S,t.media,!0);for(const Q of O)if(Q!==void 0)for(const[X,P,F]of Q){const ee=`${T}-${Xn(P)}-${X}`;A.add(ee);const ie=(F?l.rules.resonevar:l.rules.onevar).cache,Z=F?g.resonevar:g.onevar;ie.has(ee)||(ie.add(ee),Fl(P,[`.${ee}`],[],t,(re=>{Z.apply(re)})))}for(const Q of W)if(Q!==void 0)for(const[X,P]of Q){const F=`${T}-${Xn(P)}-${X}`;A.add(F),l.rules.allvar.cache.has(F)||(l.rules.allvar.cache.add(F),Fl(P,[`.${F}`],[],t,(ee=>{g.allvar.apply(ee)})))}}if(typeof w=="object"&&w){const T=`${r}-i${Xn(w)}-css`;A.add(T),l.rules.inline.cache.has(T)||(l.rules.inline.cache.add(T),Fl(w,[`.${T}`],[],t,(D=>{g.inline.apply(D)})))}for(const T of String(y.className||"").trim().split(/\s+/))T&&A.add(T);const M=_.className=[...A].join(" ");return{type:i.type,className:M,selector:p,props:_,toString:()=>M,deferredInjector:h}};return Dh(b,{className:r,selector:p,[uc]:i,toString:()=>(l.rules.styled.cache.has(r)||b(),r)})},bC=t=>{let i="";const l=[],r={},o=[];for(const[u,,,,f,h]of t){i===""&&(i=u),l.push(u),o.push(...h);for(const g in f){const p=f[g];(r[g]===void 0||p!=="undefined"||h.includes(p))&&(r[g]=p)}}return[i,l,r,new Set(o)]},X0=(t,i,l,r)=>{const o=[];e:for(let[u,f,h]of t){if(h)continue;let g,p=0,b=!1;for(g in u){const y=u[g];let w=i[g];if(w!==y){if(typeof w!="object"||!w)continue e;{let _,S,A=0;for(const M in w){if(y===String(w[M])){if(M!=="@initial"){const T=M.slice(1);(S=S||[]).push(T in l?l[T]:M.replace(/^@media ?/,"")),b=!0}p+=A,_=!0}++A}if(S&&S.length&&(f={["@media "+S.join(", ")]:f}),!_)continue e}}}(o[p]=o[p]||[]).push([r?"cv":`${g}-${u[g]}`,f,b])}return o},yC={},_C=Os(),xC=(t,i)=>_C(t,(()=>(...l)=>{const r=()=>{for(let o of l){o=typeof o=="object"&&o||{};let u=Xn(o);if(!i.rules.global.cache.has(u)){if(i.rules.global.cache.add(u),"@import"in o){let f=[].indexOf.call(i.sheet.cssRules,i.rules.themed.group)-1;for(let h of[].concat(o["@import"]))h=h.includes('"')||h.includes("'")?h:`"${h}"`,i.sheet.insertRule(`@import ${h};`,f++);delete o["@import"]}Fl(o,[],[],t,(f=>{i.rules.global.apply(f)}))}}return""};return Dh(r,{toString:r})})),wC=Os(),SC=(t,i)=>wC(t,(()=>l=>{const r=`${Li(t.prefix)}k-${Xn(l)}`,o=()=>{if(!i.rules.global.cache.has(r)){i.rules.global.cache.add(r);const u=[];Fl(l,[],[],t,(h=>u.push(h)));const f=`@keyframes ${r}{${u.join("")}}`;i.rules.global.apply(f)}return r};return Dh(o,{get name(){return o()},toString:o})})),EC=class{constructor(i,l,r,o){this.token=i==null?"":String(i),this.value=l==null?"":String(l),this.scale=r==null?"":String(r),this.prefix=o==null?"":String(o)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Li(this.prefix)+Li(this.scale)+this.token}toString(){return this.computedValue}},CC=Os(),TC=(t,i)=>CC(t,(()=>(l,r)=>{r=typeof l=="object"&&l||Object(r);const o=`.${l=(l=typeof l=="string"?l:"")||`${Li(t.prefix)}t-${Xn(r)}`}`,u={},f=[];for(const g in r){u[g]={};for(const p in r[g]){const b=`--${Li(t.prefix)}${g}-${p}`,y=X1(String(r[g][p]),t.prefix,g);u[g][p]=new EC(p,y,g,t.prefix),f.push(`${b}:${y}`)}}const h=()=>{if(f.length&&!i.rules.themed.cache.has(l)){i.rules.themed.cache.add(l);const g=`${r===t.theme?":root,":""}.${l}{${f.join(";")}}`;i.rules.themed.apply(g)}return l};return{...u,get className(){return h()},selector:o,toString:h}})),AC=Os(),Q1=t=>{let i=!1;const l=AC(t,(r=>{i=!0;const o="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",u=typeof r.media=="object"&&r.media||{},f=typeof r.root=="object"?r.root||null:globalThis.document||null,h=typeof r.theme=="object"&&r.theme||{},g={prefix:o,media:u,theme:h,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...tC},utils:typeof r.utils=="object"&&r.utils||{}},p=fC(f),b={css:mC(g,p),globalCss:xC(g,p),keyframes:SC(g,p),createTheme:TC(g,p),reset(){p.reset(),b.theme.toString()},theme:{},sheet:p,config:g,prefix:o,getCssText:p.toString,toString:p.toString};return String(b.theme=b.createTheme(h)),b}));return i||l.reset(),l},W1=()=>q0||(q0=Q1()),MC=(...t)=>W1().createTheme(...t),ji=(...t)=>W1().css(...t),Z1={default:{colors:{brand:"hsl(153 60.0% 53.0%)",brandAccent:"hsl(154 54.8% 45.1%)",brandButtonText:"white",defaultButtonBackground:"white",defaultButtonBackgroundHover:"#eaeaea",defaultButtonBorder:"lightgray",defaultButtonText:"gray",dividerBackground:"#eaeaea",inputBackground:"transparent",inputBorder:"lightgray",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"black",inputLabelText:"gray",inputPlaceholder:"darkgray",messageText:"#2b805a",messageBackground:"#e7fcf1",messageBorder:"#d0f3e1",messageTextDanger:"#ff6369",messageBackgroundDanger:"#fff8f8",messageBorderDanger:"#822025",anchorTextColor:"gray",anchorTextHoverColor:"darkgray"},space:{spaceSmall:"4px",spaceMedium:"8px",spaceLarge:"16px",labelBottomMargin:"8px",anchorBottomMargin:"4px",emailInputSpacing:"4px",socialAuthSpacing:"4px",buttonPadding:"10px 15px",inputPadding:"10px 15px"},fontSizes:{baseBodySize:"13px",baseInputSize:"14px",baseLabelSize:"14px",baseButtonSize:"14px"},fonts:{bodyFontFamily:"ui-sans-serif, sans-serif",buttonFontFamily:"ui-sans-serif, sans-serif",inputFontFamily:"ui-sans-serif, sans-serif",labelFontFamily:"ui-sans-serif, sans-serif"},borderWidths:{buttonBorderWidth:"1px",inputBorderWidth:"1px"},radii:{borderRadiusButton:"4px",buttonBorderRadius:"4px",inputBorderRadius:"4px"}},dark:{colors:{brandButtonText:"white",defaultButtonBackground:"#2e2e2e",defaultButtonBackgroundHover:"#3e3e3e",defaultButtonBorder:"#3e3e3e",defaultButtonText:"white",dividerBackground:"#2e2e2e",inputBackground:"#1e1e1e",inputBorder:"#3e3e3e",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"white",inputPlaceholder:"darkgray",messageText:"#85e0b7",messageBackground:"#072719",messageBorder:"#2b805a",messageBackgroundDanger:"#1f1315"}}},dt={SIGN_IN:"sign_in",SIGN_UP:"sign_up",FORGOTTEN_PASSWORD:"forgotten_password",MAGIC_LINK:"magic_link",UPDATE_PASSWORD:"update_password",VERIFY_OTP:"verify_otp"},NC="supabase-auth-ui",$C={ROOT:"root",SIGN_IN:dt.SIGN_IN,SIGN_UP:dt.SIGN_UP,FORGOTTEN_PASSWORD:dt.FORGOTTEN_PASSWORD,MAGIC_LINK:dt.MAGIC_LINK,UPDATE_PASSWORD:dt.UPDATE_PASSWORD,anchor:"ui-anchor",button:"ui-button",container:"ui-container",divider:"ui-divider",input:"ui-input",label:"ui-label",loader:"ui-loader",message:"ui-message"};function el(t,i,l){var r,o;const u=[],f=$C[t];return u.push(l?.prependedClassName?l?.prependedClassName+"_"+f:NC+"_"+f),(r=l?.className)!=null&&r[t]&&u.push((o=l?.className)==null?void 0:o[t]),(l?.extend===void 0||l?.extend===!0)&&u.push(i),u}function ah(t,i){let l;if(t&&i&&typeof t=="object"&&typeof i=="object"){if(Array.isArray(i))for(l=0;l<i.length;l++)t[l]=ah(t[l],i[l]);else for(l in i)t[l]=ah(t[l],i[l]);return t}return i}function xf(t,...i){let l=i.length;for(let r=0;r<l;r++)t=ah(t,i[r]);return t}function OC(t,i){return t.replace(/{{(\w+)}}/g,(l,r)=>i.hasOwnProperty(r)?i[r]:l)}var kC={sign_up:{email_label:"Email address",password_label:"Create a Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign up",loading_button_label:"Signing up ...",social_provider_text:"Sign in with {{provider}}",link_text:"Don't have an account? Sign up",confirmation_text:"Check your email for the confirmation link"},sign_in:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign in",loading_button_label:"Signing in ...",social_provider_text:"Sign in with {{provider}}",link_text:"Already have an account? Sign in"},magic_link:{email_input_label:"Email address",email_input_placeholder:"Your email address",button_label:"Send Magic Link",loading_button_label:"Sending Magic Link ...",link_text:"Send a magic link email",confirmation_text:"Check your email for the magic link"},forgotten_password:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",button_label:"Send reset password instructions",loading_button_label:"Sending reset instructions ...",link_text:"Forgot your password?",confirmation_text:"Check your email for the password reset link"},update_password:{password_label:"New password",password_input_placeholder:"Your new password",button_label:"Update password",loading_button_label:"Updating password ...",confirmation_text:"Your password has been updated"},verify_otp:{email_input_label:"Email address",email_input_placeholder:"Your email address",phone_input_label:"Phone number",phone_input_placeholder:"Your phone number",token_input_label:"Token",token_input_placeholder:"Your Otp token",button_label:"Verify token",loading_button_label:"Signing in ..."}};const RC=ji({fontFamily:"$bodyFontFamily",fontSize:"$baseBodySize",marginBottom:"$anchorBottomMargin",color:"$anchorTextColor",display:"block",textAlign:"center",textDecoration:"underline","&:hover":{color:"$anchorTextHoverColor"}}),Yn=({children:t,appearance:i,...l})=>{var r;const o=el("anchor",RC(),i);return R.createElement("a",{...l,style:(r=i?.style)==null?void 0:r.anchor,className:o.join(" ")},t)},zC=ji({fontFamily:"$buttonFontFamily",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",borderRadius:"$borderRadiusButton",fontSize:"$baseButtonSize",padding:"$buttonPadding",cursor:"pointer",borderWidth:"$buttonBorderWidth",borderStyle:"solid",width:"100%",transitionProperty:"background-color",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms","&:disabled":{opacity:.7,cursor:"unset"},variants:{color:{default:{backgroundColor:"$defaultButtonBackground",color:"$defaultButtonText",borderColor:"$defaultButtonBorder","&:hover:not(:disabled)":{backgroundColor:"$defaultButtonBackgroundHover"}},primary:{backgroundColor:"$brand",color:"$brandButtonText",borderColor:"$brandAccent","&:hover:not(:disabled)":{backgroundColor:"$brandAccent"}}}}}),nr=({children:t,color:i="default",appearance:l,icon:r,loading:o=!1,...u})=>{var f;const h=el("button",zC({color:i}),l);return R.createElement("button",{...u,style:(f=l?.style)==null?void 0:f.button,className:h.join(" "),disabled:o},r,t)},DC=ji({display:"flex",gap:"4px",variants:{direction:{horizontal:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(48px, 1fr))"},vertical:{flexDirection:"column",margin:"8px 0"}},gap:{small:{gap:"4px"},medium:{gap:"8px"},large:{gap:"16px"}}}}),si=({children:t,appearance:i,...l})=>{var r;const o=el("container",DC({direction:l.direction,gap:l.gap}),i);return R.createElement("div",{...l,style:(r=i?.style)==null?void 0:r.container,className:o.join(" ")},t)},LC=ji({background:"$dividerBackground",display:"block",margin:"16px 0",height:"1px",width:"100%"}),jC=({children:t,appearance:i,...l})=>{var r;const o=el("divider",LC(),i);return R.createElement("div",{...l,style:(r=i?.style)==null?void 0:r.divider,className:o.join(" ")})},BC=ji({fontFamily:"$inputFontFamily",background:"$inputBackground",borderRadius:"$inputBorderRadius",padding:"$inputPadding",cursor:"text",borderWidth:"$inputBorderWidth",borderColor:"$inputBorder",borderStyle:"solid",fontSize:"$baseInputSize",width:"100%",color:"$inputText",boxSizing:"border-box","&:hover":{borderColor:"$inputBorderHover",outline:"none"},"&:focus":{borderColor:"$inputBorderFocus",outline:"none"},"&::placeholder":{color:"$inputPlaceholder",letterSpacing:"initial"},transitionProperty:"background-color, border",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms",variants:{type:{default:{letterSpacing:"0px"},password:{letterSpacing:"0px"}}}}),hn=({children:t,appearance:i,...l})=>{var r;const o=el("input",BC({type:l.type==="password"?"password":"default"}),i);return R.createElement("input",{...l,style:(r=i?.style)==null?void 0:r.input,className:o.join(" ")},t)},HC=ji({fontFamily:"$labelFontFamily",fontSize:"$baseLabelSize",marginBottom:"$labelBottomMargin",color:"$inputLabelText",display:"block"}),pn=({children:t,appearance:i,...l})=>{var r;const o=el("label",HC(),i);return R.createElement("label",{...l,style:(r=i?.style)==null?void 0:r.label,className:o.join(" ")},t)},UC=ji({fontFamily:"$bodyFontFamily",fontSize:"$baseInputSize",marginBottom:"$labelBottomMargin",display:"block",textAlign:"center",borderRadius:"0.375rem",padding:"1.5rem 1rem",lineHeight:"1rem",color:"$messageText",backgroundColor:"$messageBackground",border:"1px solid $messageBorder",variants:{color:{danger:{color:"$messageTextDanger",backgroundColor:"$messageBackgroundDanger",border:"1px solid $messageBorderDanger"}}}}),ui=({children:t,appearance:i,...l})=>{var r;const o=el("message",UC({color:l.color}),i);return R.createElement("span",{...l,style:(r=i?.style)==null?void 0:r.message,className:o.join(" ")},t)};function K1({setAuthView:t=()=>{},supabaseClient:i,redirectTo:l,i18n:r,appearance:o,showLinks:u=!1}){var f;const[h,g]=k.useState(""),[p,b]=k.useState(""),[y,w]=k.useState(""),[_,S]=k.useState(!1),A=async T=>{var D,H;if(T.preventDefault(),b(""),w(""),S(!0),h.length===0){b((D=r?.magic_link)==null?void 0:D.empty_email_address),S(!1);return}const{error:L}=await i.auth.signInWithOtp({email:h,options:{emailRedirectTo:l}});L?b(L.message):w((H=r?.magic_link)==null?void 0:H.confirmation_text),S(!1)},M=r?.magic_link;return R.createElement("form",{id:"auth-magic-link",onSubmit:A},R.createElement(si,{gap:"large",direction:"vertical",appearance:o},R.createElement("div",null,R.createElement(pn,{htmlFor:"email",appearance:o},M?.email_input_label),R.createElement(hn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:M?.email_input_placeholder,onChange:T=>{b&&b(""),g(T.target.value)},appearance:o})),R.createElement(nr,{color:"primary",type:"submit",loading:_,appearance:o},_?M?.loading_button_label:M?.button_label),u&&R.createElement(Yn,{href:"#auth-sign-in",onClick:T=>{T.preventDefault(),t(dt.SIGN_IN)},appearance:o},(f=r?.sign_in)==null?void 0:f.link_text),y&&R.createElement(ui,{appearance:o},y),p&&R.createElement(ui,{color:"danger",appearance:o},p)))}const jt=ji({width:"21px",height:"21px"}),IC=({provider:t})=>t=="google"?PC():t=="facebook"?qC():t=="twitter"?VC():t=="apple"?FC():t=="github"?GC():t=="gitlab"?YC():t=="bitbucket"?XC():t=="discord"?QC():t=="azure"?WC():t=="keycloak"?ZC():t=="linkedin"?KC():t=="notion"?JC():t=="slack"?e7():t=="spotify"?t7():t=="twitch"?a7():t=="workos"?i7():t=="kakao"?n7():null,PC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),R.createElement("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),R.createElement("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),R.createElement("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})),qC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"}),R.createElement("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})),VC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#03A9F4",d:"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"})),FC=()=>R.createElement("svg",{className:jt(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"21px",height:"21px"}," ",R.createElement("path",{d:"M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z"})),GC=()=>R.createElement("svg",{className:jt(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"21px",height:"21px"}," ",R.createElement("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})),YC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#e53935",d:"M24 43L16 20 32 20z"}),R.createElement("path",{fill:"#ff7043",d:"M24 43L42 20 32 20z"}),R.createElement("path",{fill:"#e53935",d:"M37 5L42 20 32 20z"}),R.createElement("path",{fill:"#ffa726",d:"M24 43L42 20 45 28z"}),R.createElement("path",{fill:"#ff7043",d:"M24 43L6 20 16 20z"}),R.createElement("path",{fill:"#e53935",d:"M11 5L6 20 16 20z"}),R.createElement("path",{fill:"#ffa726",d:"M24 43L6 20 3 28z"})),XC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 62.42 62.42"},R.createElement("defs",null,R.createElement("linearGradient",{id:"New_Gradient_Swatch_1",x1:"64.01",y1:"30.27",x2:"32.99",y2:"54.48",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0.18",stopColor:"#0052cc"}),R.createElement("stop",{offset:"1",stopColor:"#2684ff"}))),R.createElement("title",null,"Bitbucket-blue"),R.createElement("g",{id:"Layer_2","data-name":"Layer 2"},R.createElement("g",{id:"Blue",transform:"translate(0 -3.13)"},R.createElement("path",{d:"M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z",fill:"#2684ff"}),R.createElement("path",{d:"M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z",fill:"url(#New_Gradient_Swatch_1)"})))),QC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#536dfe",d:"M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"})),WC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6a",x1:"-1254.397",x2:"-1261.911",y1:"877.268",y2:"899.466",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopColor:"#114a8b"}),R.createElement("stop",{offset:"1",stopColor:"#0669bc"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6a)",d:"M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"}),R.createElement("path",{fill:"#0078d4",d:"M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"}),R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6b",x1:"-1252.05",x2:"-1253.788",y1:"887.612",y2:"888.2",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopOpacity:".3"}),R.createElement("stop",{offset:".071",stopOpacity:".2"}),R.createElement("stop",{offset:".321",stopOpacity:".1"}),R.createElement("stop",{offset:".623",stopOpacity:".05"}),R.createElement("stop",{offset:"1",stopOpacity:"0"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6b)",d:"M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"}),R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6c",x1:"-1252.952",x2:"-1244.704",y1:"876.6",y2:"898.575",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopColor:"#3ccbf4"}),R.createElement("stop",{offset:"1",stopColor:"#2892df"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6c)",d:"M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"})),ZC=()=>R.createElement("svg",{className:jt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",fill:"#008AAA"})),KC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#0288D1",d:"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"}),R.createElement("path",{fill:"#FFF",d:"M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"})),JC=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px",fillRule:"evenodd",clipRule:"evenodd"},R.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",clipRule:"evenodd"}),R.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",clipRule:"evenodd"}),R.createElement("path",{fill:"#424242",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",clipRule:"evenodd"})),e7=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#33d375",d:"M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"}),R.createElement("path",{fill:"#33d375",d:"M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"}),R.createElement("path",{fill:"#40c4ff",d:"M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"}),R.createElement("path",{fill:"#40c4ff",d:"M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"}),R.createElement("path",{fill:"#e91e63",d:"M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"}),R.createElement("path",{fill:"#e91e63",d:"M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"}),R.createElement("path",{fill:"#ffc107",d:"M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"}),R.createElement("path",{fill:"#ffc107",d:"M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"})),t7=()=>R.createElement("svg",{className:jt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",fill:"#1ED760"})),a7=()=>R.createElement("svg",{className:jt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"white"}),R.createElement("path",{d:"M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"#9146FF"}),R.createElement("path",{d:"M368 120H336V216H368V120Z",fill:"#9146FF"}),R.createElement("path",{d:"M280 120H248V216H280V120Z",fill:"#9146FF"})),i7=()=>R.createElement("svg",{className:jt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",fill:"#6363F1"}),R.createElement("path",{d:"M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",fill:"#6363F1"})),n7=()=>R.createElement("svg",{className:jt(),xmlns:"http://www.w3.org/2000/svg",width:"2500",height:"2500",viewBox:"0 0 256 256"},R.createElement("path",{fill:"#FFE812",d:"M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"}),R.createElement("path",{d:"M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"}),R.createElement("path",{fill:"#FFE812",d:"M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"}));function l7({supabaseClient:t,socialLayout:i="vertical",providers:l=["github","google","azure"],providerScopes:r,queryParams:o,redirectTo:u,onlyThirdPartyProviders:f=!0,view:h="sign_in",i18n:g,appearance:p}){const[b,y]=k.useState(!1),[w,_]=k.useState(""),S=i==="vertical",A=h==="magic_link"?"sign_in":h,M=async D=>{y(!0);const{error:H}=await t.auth.signInWithOAuth({provider:D,options:{redirectTo:u,scopes:r?.[D],queryParams:o}});H&&_(H.message),y(!1)};function T(D){const H=D.toLowerCase();return D.charAt(0).toUpperCase()+H.slice(1)}return R.createElement(R.Fragment,null,l&&l.length>0&&R.createElement(R.Fragment,null,R.createElement(si,{gap:"large",direction:"vertical",appearance:p},R.createElement(si,{direction:S?"vertical":"horizontal",gap:S?"small":"medium",appearance:p},l.map(D=>{var H;return R.createElement(nr,{key:D,color:"default",loading:b,onClick:()=>M(D),appearance:p},R.createElement(IC,{provider:D}),S&&OC((H=g?.[A])==null?void 0:H.social_provider_text,{provider:T(D)}))}))),!f&&R.createElement(jC,{appearance:p})))}function Q0({authView:t="sign_in",defaultEmail:i="",defaultPassword:l="",setAuthView:r=()=>{},setDefaultEmail:o=S=>{},setDefaultPassword:u=S=>{},supabaseClient:f,showLinks:h=!1,redirectTo:g,additionalData:p,magicLink:b,i18n:y,appearance:w,children:_}){var S,A,M,T;const D=k.useRef(!0),[H,L]=k.useState(i),[O,W]=k.useState(l),[Q,X]=k.useState(""),[P,F]=k.useState(!1),[ee,ie]=k.useState("");k.useEffect(()=>(D.current=!0,L(i),W(l),()=>{D.current=!1}),[t]);const Z=async U=>{var K;switch(U.preventDefault(),X(""),F(!0),t){case"sign_in":const{error:J}=await f.auth.signInWithPassword({email:H,password:O});J&&X(J.message);break;case"sign_up":let oe={emailRedirectTo:g};p&&(oe.data=p);const{data:{user:xe,session:st},error:Ae}=await f.auth.signUp({email:H,password:O,options:oe});Ae?X(Ae.message):xe&&!st&&ie((K=y?.sign_up)==null?void 0:K.confirmation_text);break}D.current&&F(!1)},re=U=>{o(H),u(O),r(U)},te=y?.[t];return R.createElement("form",{id:t==="sign_in"?"auth-sign-in":"auth-sign-up",onSubmit:Z,autoComplete:"on",style:{width:"100%"}},R.createElement(si,{direction:"vertical",gap:"large",appearance:w},R.createElement(si,{direction:"vertical",gap:"large",appearance:w},R.createElement("div",null,R.createElement(pn,{htmlFor:"email",appearance:w},te?.email_label),R.createElement(hn,{id:"email",type:"email",name:"email",placeholder:te?.email_input_placeholder,defaultValue:H,onChange:U=>L(U.target.value),autoComplete:"email",appearance:w})),R.createElement("div",null,R.createElement(pn,{htmlFor:"password",appearance:w},te?.password_label),R.createElement(hn,{id:"password",type:"password",name:"password",placeholder:te?.password_input_placeholder,defaultValue:O,onChange:U=>W(U.target.value),autoComplete:t==="sign_in"?"current-password":"new-password",appearance:w})),_),R.createElement(nr,{type:"submit",color:"primary",loading:P,appearance:w},P?te?.loading_button_label:te?.button_label),h&&R.createElement(si,{direction:"vertical",gap:"small",appearance:w},t===dt.SIGN_IN&&b&&R.createElement(Yn,{href:"#auth-magic-link",onClick:U=>{U.preventDefault(),r(dt.MAGIC_LINK)},appearance:w},(S=y?.magic_link)==null?void 0:S.link_text),t===dt.SIGN_IN&&R.createElement(Yn,{href:"#auth-forgot-password",onClick:U=>{U.preventDefault(),r(dt.FORGOTTEN_PASSWORD)},appearance:w},(A=y?.forgotten_password)==null?void 0:A.link_text),t===dt.SIGN_IN?R.createElement(Yn,{href:"#auth-sign-up",onClick:U=>{U.preventDefault(),re(dt.SIGN_UP)},appearance:w},(M=y?.sign_up)==null?void 0:M.link_text):R.createElement(Yn,{href:"#auth-sign-in",onClick:U=>{U.preventDefault(),re(dt.SIGN_IN)},appearance:w},(T=y?.sign_in)==null?void 0:T.link_text))),ee&&R.createElement(ui,{appearance:w},ee),Q&&R.createElement(ui,{color:"danger",appearance:w},Q))}function J1({setAuthView:t=()=>{},supabaseClient:i,redirectTo:l,i18n:r,appearance:o,showLinks:u=!1}){var f;const[h,g]=k.useState(""),[p,b]=k.useState(""),[y,w]=k.useState(""),[_,S]=k.useState(!1),A=async T=>{var D;T.preventDefault(),b(""),w(""),S(!0);const{error:H}=await i.auth.resetPasswordForEmail(h,{redirectTo:l});H?b(H.message):w((D=r?.forgotten_password)==null?void 0:D.confirmation_text),S(!1)},M=r?.forgotten_password;return R.createElement("form",{id:"auth-forgot-password",onSubmit:A},R.createElement(si,{direction:"vertical",gap:"large",appearance:o},R.createElement(si,{gap:"large",direction:"vertical",appearance:o},R.createElement("div",null,R.createElement(pn,{htmlFor:"email",appearance:o},M?.email_label),R.createElement(hn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:M?.email_input_placeholder,onChange:T=>g(T.target.value),appearance:o})),R.createElement(nr,{type:"submit",color:"primary",loading:_,appearance:o},_?M?.loading_button_label:M?.button_label),u&&R.createElement(Yn,{href:"#auth-sign-in",onClick:T=>{T.preventDefault(),t(dt.SIGN_IN)},appearance:o},(f=r?.sign_in)==null?void 0:f.link_text),y&&R.createElement(ui,{appearance:o},y),p&&R.createElement(ui,{color:"danger",appearance:o},p))))}function ey({supabaseClient:t,i18n:i,appearance:l}){const[r,o]=k.useState(""),[u,f]=k.useState(""),[h,g]=k.useState(""),[p,b]=k.useState(!1),y=async _=>{var S;_.preventDefault(),f(""),g(""),b(!0);const{error:A}=await t.auth.updateUser({password:r});A?f(A.message):g((S=i?.update_password)==null?void 0:S.confirmation_text),b(!1)},w=i?.update_password;return R.createElement("form",{id:"auth-update-password",onSubmit:y},R.createElement(si,{gap:"large",direction:"vertical",appearance:l},R.createElement("div",null,R.createElement(pn,{htmlFor:"password",appearance:l},w?.password_label),R.createElement(hn,{id:"password",name:"password",placeholder:w?.password_input_placeholder,type:"password",autoFocus:!0,onChange:_=>o(_.target.value),appearance:l})),R.createElement(nr,{type:"submit",color:"primary",loading:p,appearance:l},p?w?.loading_button_label:w?.button_label),h&&R.createElement(ui,{appearance:l},h),u&&R.createElement(ui,{color:"danger",appearance:l},u)))}function r7({setAuthView:t=()=>{},supabaseClient:i,otpType:l="email",i18n:r,appearance:o,showLinks:u=!1}){var f;const[h,g]=k.useState(""),[p,b]=k.useState(""),[y,w]=k.useState(""),[_,S]=k.useState(""),[A,M]=k.useState(""),[T,D]=k.useState(!1),H=async O=>{O.preventDefault(),S(""),M(""),D(!0);let W={email:h,token:y,type:l};["sms","phone_change"].includes(l)&&(W={phone:p,token:y,type:l});const{error:Q}=await i.auth.verifyOtp(W);Q&&S(Q.message),D(!1)},L=r?.verify_otp;return R.createElement("form",{id:"auth-magic-link",onSubmit:H},R.createElement(si,{gap:"large",direction:"vertical",appearance:o},["sms","phone_change"].includes(l)?R.createElement("div",null,R.createElement(pn,{htmlFor:"phone",appearance:o},L?.phone_input_label),R.createElement(hn,{id:"phone",name:"phone",type:"text",autoFocus:!0,placeholder:L?.phone_input_placeholder,onChange:O=>b(O.target.value),appearance:o})):R.createElement("div",null,R.createElement(pn,{htmlFor:"email",appearance:o},L?.email_input_label),R.createElement(hn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:L?.email_input_placeholder,onChange:O=>g(O.target.value),appearance:o})),R.createElement("div",null,R.createElement(pn,{htmlFor:"token",appearance:o},L?.token_input_label),R.createElement(hn,{id:"token",name:"token",type:"text",placeholder:L?.token_input_placeholder,onChange:O=>w(O.target.value),appearance:o})),R.createElement(nr,{color:"primary",type:"submit",loading:T,appearance:o},T?L?.loading_button_label:L?.button_label),u&&R.createElement(Yn,{href:"#auth-sign-in",onClick:O=>{O.preventDefault(),t(dt.SIGN_IN)},appearance:o},(f=r?.sign_in)==null?void 0:f.link_text),A&&R.createElement(ui,{appearance:o},A),_&&R.createElement(ui,{color:"danger",appearance:o},_)))}const ty=k.createContext({user:null,session:null}),s7=t=>{const{supabaseClient:i}=t,[l,r]=k.useState(null),[o,u]=k.useState(l?.user??null);k.useEffect(()=>{(async()=>{var g;const{data:p}=await i.auth.getSession();r(p.session),u(((g=p.session)==null?void 0:g.user)??null)})();const{data:h}=i.auth.onAuthStateChange(async(g,p)=>{r(p),u(p?.user??null)});return()=>{h?.subscription.unsubscribe()}},[]);const f={session:l,user:o};return R.createElement(ty.Provider,{value:f,...t})},o7=()=>{const t=k.useContext(ty);if(t===void 0)throw new Error("useUser must be used within a UserContextProvider.");return t};function tl({supabaseClient:t,socialLayout:i="vertical",providers:l,providerScopes:r,queryParams:o,view:u="sign_in",redirectTo:f,onlyThirdPartyProviders:h=!1,magicLink:g=!1,showLinks:p=!0,appearance:b,theme:y="default",localization:w={variables:{}},otpType:_="email",additionalData:S,children:A}){const M=xf(kC,w.variables??{}),[T,D]=k.useState(u),[H,L]=k.useState(""),[O,W]=k.useState(""),Q=T==="sign_in"||T==="sign_up"||T==="magic_link";k.useEffect(()=>{var F,ee;Q1({theme:xf(((F=b?.theme)==null?void 0:F.default)??{},((ee=b?.variables)==null?void 0:ee.default)??{})})},[b]);const X=({children:F})=>{var ee;return R.createElement("div",{className:y!=="default"?MC(xf(b?.theme[y],((ee=b?.variables)==null?void 0:ee[y])??{})):""},Q&&R.createElement(l7,{appearance:b,supabaseClient:t,providers:l,providerScopes:r,queryParams:o,socialLayout:i,redirectTo:f,onlyThirdPartyProviders:h,i18n:M,view:T}),!h&&F)};k.useEffect(()=>{const{data:F}=t.auth.onAuthStateChange(ee=>{ee==="PASSWORD_RECOVERY"?D("update_password"):ee==="USER_UPDATED"&&D("sign_in")});return D(u),()=>F.subscription.unsubscribe()},[u]);const P={supabaseClient:t,setAuthView:D,defaultEmail:H,defaultPassword:O,setDefaultEmail:L,setDefaultPassword:W,redirectTo:f,magicLink:g,showLinks:p,i18n:M,appearance:b};switch(T){case dt.SIGN_IN:return R.createElement(X,null,R.createElement(Q0,{...P,authView:"sign_in"}));case dt.SIGN_UP:return R.createElement(X,null,R.createElement(Q0,{appearance:b,supabaseClient:t,authView:"sign_up",setAuthView:D,defaultEmail:H,defaultPassword:O,setDefaultEmail:L,setDefaultPassword:W,redirectTo:f,magicLink:g,showLinks:p,i18n:M,additionalData:S,children:A}));case dt.FORGOTTEN_PASSWORD:return R.createElement(X,null,R.createElement(J1,{appearance:b,supabaseClient:t,setAuthView:D,redirectTo:f,showLinks:p,i18n:M}));case dt.MAGIC_LINK:return R.createElement(X,null,R.createElement(K1,{appearance:b,supabaseClient:t,setAuthView:D,redirectTo:f,showLinks:p,i18n:M}));case dt.UPDATE_PASSWORD:return R.createElement(ey,{appearance:b,supabaseClient:t,i18n:M});case dt.VERIFY_OTP:return R.createElement(r7,{appearance:b,supabaseClient:t,otpType:_,i18n:M});default:return null}}tl.ForgottenPassword=J1;tl.UpdatePassword=ey;tl.MagicLink=K1;tl.UserContextProvider=s7;tl.useUser=o7;ji({borderRadius:"12px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:"360px",padding:"28px 32px"});const c7=rx("SocialLogin",{web:()=>Pt(()=>import("./web-C10UDV0D.js"),__vite__mapDeps([7,1])).then(t=>new t.SocialLoginWeb)}),u7=async()=>{if(zi.isNativePlatform())try{const i=(await c7.login({provider:"apple",options:{}})).result;if(i?.idToken){const{data:l,error:r}=await la.auth.signInWithIdToken({provider:"apple",token:i.idToken});if(r)throw r;return l}else throw new Error("Native Apple Sign-In did not return an ID token.")}catch(t){throw console.error("Native Apple Sign-In failed:",t),t}else return la.auth.signInWithOAuth({provider:"apple"})},d7="_container_1rhlz_1",W0={container:d7,"apple-button":"_apple-button_1rhlz_9"};function f7(){const t=De(),[i,l]=k.useState(!1);k.useEffect(()=>{(async()=>{if(zi.isNativePlatform()){const f=await zi.getPlatform();l(f==="ios")}else l(!0)})()},[]),k.useEffect(()=>{if(window.location.hash&&window.location.hash.includes("access_token=")){const u=new URLSearchParams(window.location.hash.substring(1)),f=u.get("access_token"),h=u.get("refresh_token");f&&h&&la.auth.setSession({access_token:f,refresh_token:h})}},[]);const r=async()=>{try{await u7()}catch(u){console.error("Apple login failed",u)}},o={sign_in:{email_label:t.formatMessage({id:"auth.emailLabel"}),password_label:t.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:t.formatMessage({id:"auth.passwordPlaceholder"}),button_label:t.formatMessage({id:"auth.signInButton"}),social_provider_text:t.formatMessage({id:"auth.signInWithProvider"}),link_text:t.formatMessage({id:"auth.forgotPassword"})},forgotten_password:{email_label:t.formatMessage({id:"auth.emailLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),button_label:t.formatMessage({id:"auth.sendResetInstructions"}),link_text:t.formatMessage({id:"auth.rememberedPassword"})}};return m.jsxs("div",{className:W0.container,children:[i&&m.jsxs(ke,{variant:"default",size:"large",onClick:r,className:W0["apple-button"],children:[m.jsx(bt,{slot:"prefix",name:"apple"}),t.formatMessage({id:"auth.signInWithProviderCustom"},{provider:"Apple"})]}),m.jsx(tl,{supabaseClient:la,appearance:{theme:Z1,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname,view:"sign_in",localization:{variables:o},showLinks:!1})]})}const h7="_pageWrapper_vj5zy_1",p7="_pageContent_vj5zy_12",m7="_legalLinks_vj5zy_22",wf={pageWrapper:h7,pageContent:p7,legalLinks:m7};function Z0(){return m.jsx("div",{className:wf.pageWrapper,children:m.jsxs("div",{className:wf.pageContent,children:[m.jsx(fi,{}),m.jsx(f7,{}),m.jsxs("div",{className:wf.legalLinks,children:[m.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),m.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const g7="_container_1r3fc_1",ds={container:g7};function v7(){const t=De(),[i]=zx(),l=Vt(),[r,o]=k.useState(!1),[u,f]=k.useState(null),h={sign_up:{email_label:t.formatMessage({id:"auth.emailLabel"}),password_label:t.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:t.formatMessage({id:"auth.passwordPlaceholder"}),button_label:t.formatMessage({id:"auth.signUpButton"}),social_provider_text:t.formatMessage({id:"auth.signUpWithProvider"}),link_text:t.formatMessage({id:"auth.alreadyHaveAccount"})}},g=i.get("token"),p=k.useRef(g),b=k.useRef(!1);k.useEffect(()=>{const A=async T=>{if(b.current)return;b.current=!0,o(!0),f(null);const D=p.current;if(!D){console.error("Invite token is missing after sign-in."),o(!1),b.current=!1;return}try{const{error:H}=await la.functions.invoke("complete-invite",{body:{token:D,newAuthId:T.user.id}});if(H)throw H;l("/invite-success")}catch(H){console.error("Failed to complete the invite process:",H),f(H instanceof Error?H.message:"An unexpected error occurred"),o(!1),b.current=!1}},{data:{subscription:M}}=la.auth.onAuthStateChange((T,D)=>{(T==="SIGNED_IN"||T==="INITIAL_SESSION")&&D&&A(D)});if(la.auth.getSession().then(({data:{session:T}})=>{T&&A(T)}),window.location.hash&&window.location.hash.includes("access_token=")){const T=new URLSearchParams(window.location.hash.substring(1)),D=T.get("access_token"),H=T.get("refresh_token");D&&H&&la.auth.setSession({access_token:D,refresh_token:H})}return()=>M.unsubscribe()},[l]);const{data:y,isLoading:w,isError:_,error:S}=sx({token:g});return g?w||r?m.jsx("div",{className:ds.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.checkingToken"})})}):_?m.jsx("div",{className:ds.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.errorCheckingToken"},{message:S?.message})})}):u?m.jsx("div",{className:ds.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.error"},{message:u})})}):m.jsx("div",{className:ds.container,children:y?.status==="valid"?m.jsx(tl,{supabaseClient:la,appearance:{theme:Z1,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google","apple"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname+window.location.search,view:"sign_up",localization:{variables:h},showLinks:!1}):y?.status==="used"?m.jsx("div",{children:m.jsx("p",{children:t.formatMessage({id:"invite.tokenUsed"})})}):m.jsx("div",{children:m.jsx("p",{children:t.formatMessage({id:"invite.invalidToken"})})})}):m.jsx("div",{className:ds.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.noToken"})})})}const b7="_pageWrapper_1smi3_1",y7="_pageContent_1smi3_12",_7="_legalLinks_1smi3_21",Sf={pageWrapper:b7,pageContent:y7,legalLinks:_7};function ay(){return m.jsx("div",{className:Sf.pageWrapper,children:m.jsxs("div",{className:Sf.pageContent,children:[m.jsx(fi,{}),m.jsx(v7,{}),m.jsxs("div",{className:Sf.legalLinks,children:[m.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),m.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const x7="_pageWrapper_1smi3_1",w7="_pageContent_1smi3_12",K0={pageWrapper:x7,pageContent:w7};function iy(){return m.jsxs("div",{className:K0.pageWrapper,children:[m.jsx(fi,{}),m.jsxs("div",{className:K0.pageContent,children:[m.jsx("h1",{children:m.jsx(ae,{id:"invite.success.title"})}),m.jsx("p",{children:m.jsx(ae,{id:"invite.success.message"})}),m.jsx("p",{children:m.jsx(ae,{id:"invite.success.instructions"})}),m.jsx(ke,{variant:"primary",href:"/",children:m.jsx(ae,{id:"common.continue"})})]})]})}var S7=yt`
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
`,E7=0,Ha=class extends rt{constructor(){super(...arguments),this.localize=new ja(this),this.attrId=++E7,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,Se`
      <div
        part="base"
        class=${ft({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?Se`
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
    `}};Ha.styles=[$t,S7];Ha.dependencies={"sl-icon-button":wt};C([We(".tab")],Ha.prototype,"tab",2);C([B({reflect:!0})],Ha.prototype,"panel",2);C([B({type:Boolean,reflect:!0})],Ha.prototype,"active",2);C([B({type:Boolean,reflect:!0})],Ha.prototype,"closable",2);C([B({type:Boolean,reflect:!0})],Ha.prototype,"disabled",2);C([B({type:Number,reflect:!0})],Ha.prototype,"tabIndex",2);C([Ve("active")],Ha.prototype,"handleActiveChange",1);C([Ve("disabled")],Ha.prototype,"handleDisabledChange",1);var C7="sl-tab";Ha.define("sl-tab");var T7=Jt({tagName:C7,elementClass:Ha,react:qt,events:{onSlClose:"sl-close"},displayName:"SlTab"}),J0=T7,A7=yt`
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
`,M7=yt`
  :host {
    display: contents;
  }
`,jc=class extends rt{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const i=t.assignedElements({flatten:!0});this.observedElements.forEach(l=>this.resizeObserver.unobserve(l)),this.observedElements=[],i.forEach(l=>{this.resizeObserver.observe(l),this.observedElements.push(l)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return Se` <slot @slotchange=${this.handleSlotChange}></slot> `}};jc.styles=[$t,M7];C([B({type:Boolean,reflect:!0})],jc.prototype,"disabled",2);C([Ve("disabled",{waitUntilFirstUpdate:!0})],jc.prototype,"handleDisabledChange",1);var kt=class extends rt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ja(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(i=>{const l=i.filter(({target:r})=>{if(r===this)return!0;if(r.closest("sl-tab-group")!==this)return!1;const o=r.tagName.toLowerCase();return o==="sl-tab"||o==="sl-tab-panel"});if(l.length!==0){if(l.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),l.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(l.some(r=>r.attributeName==="active")){const o=l.filter(u=>u.attributeName==="active"&&u.target.tagName.toLowerCase()==="sl-tab").map(u=>u.target).find(u=>u.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((l,r)=>{var o;l[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),r.unobserve(l[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,i;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((i=this.resizeObserver)==null||i.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const l=t.target.closest("sl-tab");l?.closest("sl-tab-group")===this&&l!==null&&this.setActiveTab(l,{scrollBehavior:"smooth"})}handleKeyDown(t){const l=t.target.closest("sl-tab");if(l?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&l!==null&&(this.setActiveTab(l,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(h=>h.matches(":focus")),u=this.localize.dir()==="rtl";let f=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")f=this.focusableTabs[0];else if(t.key==="End")f=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(u?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const h=this.tabs.findIndex(g=>g===o);f=this.findNextFocusableTab(h,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(u?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const h=this.tabs.findIndex(g=>g===o);f=this.findNextFocusableTab(h,"forward")}if(!f)return;f.tabIndex=0,f.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(f,{scrollBehavior:"smooth"}):this.tabs.forEach(h=>{h.tabIndex=h===f?0:-1}),["top","bottom"].includes(this.placement)&&Wf(f,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,i){if(i=bn({emitEvents:!0,scrollBehavior:"auto"},i),t!==this.activeTab&&!t.disabled){const l=this.activeTab;this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var o;return r.active=r.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Wf(this.activeTab,this.nav,"horizontal",i.scrollBehavior),i.emitEvents&&(l&&this.emit("sl-tab-hide",{detail:{name:l.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const i=this.panels.find(l=>l.name===t.panel);i&&(t.setAttribute("aria-controls",i.getAttribute("id")),i.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const i=t.clientWidth,l=t.clientHeight,r=this.localize.dir()==="rtl",o=this.getAllTabs(),f=o.slice(0,o.indexOf(t)).reduce((h,g)=>({left:h.left+g.clientWidth,top:h.top+g.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${i}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*f.left}px`:`${f.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${l}px`,this.indicator.style.translate=`0 ${f.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,i){let l=null;const r=i==="forward"?1:-1;let o=t+r;for(;t<this.tabs.length;){if(l=this.tabs[o]||null,l===null){i==="forward"?l=this.focusableTabs[0]:l=this.focusableTabs[this.focusableTabs.length-1];break}if(!l.disabled)break;o+=r}return l}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const i=this.tabs.find(l=>l.panel===t);i&&this.setActiveTab(i,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return Se`
      <div
        part="base"
        class=${ft({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?Se`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${ft({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?Se`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${ft({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};kt.styles=[$t,A7];kt.dependencies={"sl-icon-button":wt,"sl-resize-observer":jc};C([We(".tab-group")],kt.prototype,"tabGroup",2);C([We(".tab-group__body")],kt.prototype,"body",2);C([We(".tab-group__nav")],kt.prototype,"nav",2);C([We(".tab-group__indicator")],kt.prototype,"indicator",2);C([ht()],kt.prototype,"hasScrollControls",2);C([ht()],kt.prototype,"shouldHideScrollStartButton",2);C([ht()],kt.prototype,"shouldHideScrollEndButton",2);C([B()],kt.prototype,"placement",2);C([B()],kt.prototype,"activation",2);C([B({attribute:"no-scroll-controls",type:Boolean})],kt.prototype,"noScrollControls",2);C([B({attribute:"fixed-scroll-controls",type:Boolean})],kt.prototype,"fixedScrollControls",2);C([Qb({passive:!0})],kt.prototype,"updateScrollButtons",1);C([Ve("noScrollControls",{waitUntilFirstUpdate:!0})],kt.prototype,"updateScrollControls",1);C([Ve("placement",{waitUntilFirstUpdate:!0})],kt.prototype,"syncIndicator",1);var N7="sl-tab-group";kt.define("sl-tab-group");var $7=Jt({tagName:N7,elementClass:kt,react:qt,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),O7=$7,k7=(t,i)=>{let l=0;return function(...r){window.clearTimeout(l),l=window.setTimeout(()=>{t.call(this,...r)},i)}},eb=(t,i,l)=>{const r=t[i];t[i]=function(...o){r.call(this,...o),l.call(this,r,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const i=new Set,l=new WeakMap,r=u=>{for(const f of u.changedTouches)i.add(f.identifier)},o=u=>{for(const f of u.changedTouches)i.delete(f.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),eb(EventTarget.prototype,"addEventListener",function(u,f){if(f!=="scrollend")return;const h=k7(()=>{i.size?h():this.dispatchEvent(new Event("scrollend"))},100);u.call(this,"scroll",h,{passive:!0}),l.set(this,h)}),eb(EventTarget.prototype,"removeEventListener",function(u,f){if(f!=="scrollend")return;const h=l.get(this);h&&u.call(this,"scroll",h,{passive:!0})})}})();const R7="_shell_fdhcs_1",z7="_content_fdhcs_12",D7="_footer_fdhcs_17",L7="_tabContent_fdhcs_47",fs={shell:R7,content:z7,footer:D7,tabContent:L7};function j7({children:t}){const i=Vt(),l=xc(),r=k.useRef(null);k.useEffect(()=>{r.current&&r.current.show(l.pathname)},[l.pathname]);const o=u=>{i(u.detail.name)};return m.jsxs("div",{className:fs.shell,children:[m.jsx("main",{className:fs.content,children:t}),m.jsx("footer",{className:fs.footer,children:m.jsxs(O7,{ref:r,placement:"bottom",onSlTabShow:o,children:[m.jsx(J0,{slot:"nav",panel:"/stable",active:l.pathname==="/stable",onClick:()=>l.pathname!=="/stable"&&i("/stable"),role:"tab",children:m.jsx("div",{className:fs.tabContent,children:m.jsx(bt,{src:"/assets/stables.svg"})})}),m.jsx(J0,{slot:"nav",panel:"/horse",active:l.pathname==="/horse",onClick:()=>l.pathname!=="/horse"&&i("/horse"),role:"tab",children:m.jsx("div",{className:fs.tabContent,children:m.jsx(bt,{src:"/assets/horses.svg"})})})]})})]})}const _c={"auth.login.title":"Login","auth.signup.title":"Sign up","roster.header.date":"Date","roster.emptySlot":"Tap to assign","roster.edit.drawerLabel":"Edit Roster for {slotName}","roster.edit.assignedHeader":"Assigned:","roster.edit.unassignedHeader":"Available to Add","roster.edit.selectMemberPlaceholder":"Select stable buddy","roster.edit.emptyState":"Nobody assigned.","roster.shareWeekLabel":"Share week","shell.tab.roster":"Roster","shell.tab.profile":"Profile","shell.tab.users":"Friends","profile.header.title":"Profile","profile.logout":"Logout","profile.info":"Info","share.rosterTitle":"Stable Roster","share.rosterText":"Check out this week's roster!","common.save":"Save","common.cancel":"Cancel","common.remove":"Remove","roster.loadPrevious":"Load previous weeks","roster.loadNext":"Load next weeks","roster.weekOf":"Week of {date}","roster.previousWeek":"Previous week","roster.nextWeek":"Next week","roster.selfAssignment.title":"Update Shift","roster.confirmAddSelf":"Do you want to add yourself to this shift?","roster.confirmRemoveSelf":"Do you want to REMOVE yourself from this shift?","auth.emailLabel":"Email address","auth.passwordLabel":"Password","auth.emailPlaceholder":"Your email address","auth.passwordPlaceholder":"Your password","auth.signInButton":"Sign in","auth.signInWithProvider":"Sign in with '{{provider}}'","auth.signInWithProviderCustom":"Sign in with {provider}","auth.signUpButton":"Sign up","auth.signUpWithProvider":"Sign up with '{{provider}}'","auth.alreadyHaveAccount":"Already have an account? Sign in","auth.forgotPassword":"Forgot your password?","auth.sendResetInstructions":"Send reset instructions","auth.rememberedPassword":"Remember your password? Sign in","manageUsers.you":"You","manageUsers.inviteUser":"Invite user","manageUsers.loading":"Loading users...","manageUsers.error":"Error loading users: {message}","manageUsers.removeUser":"Remove user","manageUsers.removeConfirmation":"Are you sure you want to remove {username} from this organization?","manageHorses.yours":"Yours","manageUsers.editUser":"Edit Stable buddy","manageHorses.editHorse":"Edit horse","manageHorses.assignOwner":"Assign Owner","manageHorses.selectOwner":"Select Owner","manageHorses.loading":"Loading horses...","manageHorses.error":"Error loading horses: {message}","manageHorses.removeHorse":"Remove horse","manageHorses.removeConfirmation":"Are you sure you want to remove {horseName} It will completely erase everything about this horse from the system!?","manageHorses.addHorse":"Add Horse","manageHorses.noHorsesFound":"No horses found that are boarded at this location","manageUsers.addUser":"Add Stable Buddy","users.firstNameLabel":"First Name","users.lastNameLabel":"Last Name","horses.nameLabel":"Name","users.fullNameLabel":"Full Name","horses.officialNameLabel":"Official Name","horses.ownerLabel":"Owner","horses.chipNumberLabel":"Transponder (chip) Number","horses.uelnLabel":"Life Number (UELN)","users.languageLabel":"Language","users.nicknameLabel":"Nickname","users.roleLabel":"Role","users.isRosterableLabel":"Can be assigned to roster","organization.role.owner":"Stable owner","organization.role.admin":"Stable admin","organization.role.member":"Stable buddy","common.language.dutch":"Dutch","common.language.english":"English","horses.noMembersFound":"No stable buddies found in this stable","common.close":"Close","invite.checkingToken":"Checking invite token...","invite.noToken":"No invite token found in the URL.","invite.invalidToken":"The invite token is invalid or has expired.","invite.tokenUsed":"This invite token has already been used.","invite.errorCheckingToken":"An error occurred while checking the invite token: {message}","invite.goToLogin":"Go to Login","invite.share.title":"Invite to Is My Horse","invite.share.text":"You've been invited to join our stable on Is My Horse. Sign up here:","invite.share.error":"Could not create invite link. Please try again.","invite.success.title":"Signup Successful!","invite.success.message":"Your account has been successfully created! From now on you can log in with the account you just created.","invite.success.instructions":"Click the button below to go to the start page of the app","invite.success.login":"Log in","dashboard.roster.title":"Rosters","dashboard.roster.description":"Rosters for e.g. stable duty","shell.tab.dashboard":"Dashboard","dashboard.members.title":"Stable buddies","dashboard.members.description":"People who are connected to the stable","dashboard.horses.title":"Horses","dashboard.horses.description":"Horses boarded here","dashboard.horses.count":"({count})","dashboard.facilities.title":"Facilities","dashboard.facilities.description":"to reserve things like an arena","navigation.back":"Back","dashboard.myHorses.title":"My Horses","dashboard.myHorses.description":"My own horses","dashboard.relatedHorses.title":"From Stable Buddies","dashboard.relatedHorses.description":"Horses of others at the stable","dashboard.following.title":"Following","dashboard.following.description":"Other horses I follow","invite.noProfile.title":"Account Not Fully Activated","invite.noProfile.message":"This is an invite-only beta. Your account must be linked to an invitation to proceed. If you have an invite link, please use it to sign up.","common.continue":"Continue","Initial ownership set by stable admin.":"This horse has been created by the stable owner and assigned to you.","dashboard.myHorses.acceptOwnershipQuestion":"Is {horseName} indeed your horse?","common.yes":"Yes","common.no":"No","ownershipTransfer.status.pending":"pending","ownershipTransfer.status.accepted":"accepted","ownershipTransfer.status.rejected":"rejected","ownershipTransfer.status.cancelled":"cancelled","validation.required":"This field is required.","validation.uelnInvalid":"UELN must be exactly 15 characters long.","validation.chipOrUelnRequired":"Please provide either a Chip Number or a UELN.","horses.scanBarcode":"Scan Barcode","validation.emailInvalid":"Please enter a valid email address.","validation.ageMinimum":"User must be at least 13 years old.","gender.other":"Other / Prefer not to say","gender.male":"Male","gender.female":"Female","users.genderLabel":"Gender","horses.dateOfBirthLabel":"Date of Birth","horses.genderLabel":"Gender","gender.stallion":"Stallion","gender.mare":"Mare","gender.gelding":"Gelding","horses.countryOfBirthLabel":"Country of Birth","horses.passportNumberLabel":"Passport Number","horses.colorLabel":"Color","horses.breedStudbookLabel":"Breed/Studbook","horses.markingsLabel":"Markings","horses.chipLocationLabel":"Transponder Location","users.dateOfBirthLabel":"Date of Birth","users.cityLabel":"City","users.countryLabel":"Country","profile.notFound":"Profile not found.","profile.NoDisplayName":"No profile name","organization.cocLabel":"Chamber of Commerce","common.notSet":"not set","profile.privacyNotification":"Only you and the stable admin of {organizationName} ({adminName}) can see this information.","profile.stable.member":"Stable buddy at {organizationName} (as {nickName})","profile.stable.admin":"Admin at {organizationName} (as {nickName})","profile.stable.owner":"Owner at {organizationName} (as {nickName})","profile.organization.location":"Stable in {city}","profile.privacyNotification.organization":"Only visible to you.","profile.privacyNotification.user":"Only you and the admins of the stables you are a member of can see this information.","profile.edit.title":"Edit Profile Name","profile.edit.nameLabel":"Display Name","profile.edit.info":"Edit Profile","profile.postUpdate":"Post","profile.follow":"Follow","profile.unfollow":"Unfollow","profile.followers":"{count} followers","user.edit.title":"Edit Profile","user.edit.success":"Profile updated successfully.","horse.edit.title":"Edit Horse Info","horse.edit.success":"Horse updated successfully.","organization.edit.title":"Edit Organization","organization.nameLabel":"Name","organization.cityLabel":"City","avatar.editor.title":"Edit Profile Picture","avatar.editor.zoom":"Zoom","manageTeam.title":"Manage Team","manageTeam.stableOwner":"Stable Owner","manageTeam.team":"Team","manageTeam.organizationTeam":"Team {organizationName}","manageTeam.followers":"Followers","manageTeam.noTeam":"No team members yet.","manageTeam.noFollowers":"No followers found.","manageTeam.demoteTitle":"Remove from Team?","manageTeam.demoteWarning":"Are you sure you want to remove this user from the team? They will lose access to restricted posts.","roles.owner":"Owner","roles.co_owner":"Co-owner","roles.rider":"Rider/Leaser","roles.groom":"Groom","roles.instructor":"Instructor","roles.medical":"Vet/Medical","roles.farrier":"Farrier","roles.stable_owner":"Stable Owner","roles.stable_groom":"Stable Groom","roles.follower":"Follower (Remove from team)","roles.follower_only":"Follower","manageTeam.buttonLabel":"Team"},B7=Object.freeze(Object.defineProperty({__proto__:null,default:_c},Symbol.toStringTag,{value:"Module"})),H7="_panel_1nlou_1",U7="_panelContent_1nlou_17",I7="_icon_1nlou_23",P7="_content_1nlou_31",q7="_textContent_1nlou_40",V7="_quickAction_1nlou_56",F7="_chevron_1nlou_65",G7="_lime_1nlou_73",Y7="_sky_1nlou_76",X7="_rose_1nlou_79",Q7="_brown_1nlou_82",un={panel:H7,panelContent:U7,icon:I7,content:P7,textContent:q7,quickAction:V7,chevron:F7,lime:G7,sky:Y7,rose:X7,brown:Q7};function al({icon:t,title:i,description:l,link:r,variant:o="lime",quickAction:u}){const f=r?"a":"div",h=g=>{g.stopPropagation()};return m.jsxs(f,{href:r,className:`${un.panel} ${un[o]}`,onClick:g=>!r&&g.preventDefault(),children:[m.jsxs("div",{className:un.panelContent,children:[m.jsx("div",{className:un.icon,children:t}),m.jsx("div",{className:un.content,children:m.jsxs("div",{className:un.textContent,children:[m.jsx("strong",{children:i}),l&&m.jsx("span",{children:l})]})}),r&&m.jsx("div",{className:un.chevron,children:m.jsx(bt,{name:"chevron-right"})})]}),u&&m.jsx("div",{className:un.quickAction,onClick:h,children:u})]})}const W7="_rosterLinks_1um2j_1",Z7="_rosterLink_1um2j_1",tb={rosterLinks:W7,rosterLink:Z7};function K7({organization_id:t}){const i=De(),{data:l}=ox({organizationId:t});return m.jsx(al,{variant:"sky",icon:m.jsx(bt,{name:"calendar"}),title:i.formatMessage({id:"dashboard.roster.title"}),description:i.formatMessage({id:"dashboard.roster.description"}),quickAction:l&&m.jsx("div",{className:tb.rosterLinks,children:l.map(r=>m.jsxs(kx,{to:`/stable/${t}/roster/${r.id}`,className:tb.rosterLink,children:[m.jsx(bt,{name:"calendar-date"}),m.jsx("span",{children:r.name})]},r.id))})})}const J7="_quickAction_kr3qy_1",e8="_avatarStack_kr3qy_7",ab={quickAction:J7,avatarStack:e8};function t8({organization_id:t}){const i=De(),{data:l}=ih({organizationId:t,enabled:!!t}),r=l?m.jsxs("div",{className:ab.quickAction,children:[m.jsx("div",{className:ab.avatarStack,children:l.slice(0,8).map(o=>{const u=[o.user_profiles?.firstname,o.user_profiles?.lastname].filter(Boolean).join(" ")||o.nickname||"";return m.jsx(vt,{image:o.user_profiles?.social_profiles?.avatar_url,name:u},o.id)})}),m.jsxs("span",{children:["(",l.length,")"]})]}):null;return m.jsx(al,{variant:"rose",icon:m.jsx(bt,{name:"people"}),title:i.formatMessage({id:"dashboard.members.title"}),description:i.formatMessage({id:"dashboard.members.description"}),link:`/stable/${t}/members`,quickAction:r})}const a8="_quickAction_1euwo_1",i8="_avatarStack_1euwo_7",ib={quickAction:a8,avatarStack:i8},{useOrganizationHorses:n8}=await Pt(async()=>{const{useOrganizationHorses:t}=await import("./index-DX412MtT.js").then(i=>i.aS);return{useOrganizationHorses:t}},[]);function l8({organization_id:t}){const i=De(),{data:l}=n8({organizationId:t,enabled:!!t}),r=l?m.jsxs("div",{className:ib.quickAction,children:[m.jsx("div",{className:ib.avatarStack,children:l.slice(0,8).map(o=>m.jsx(vt,{image:o.social_profiles?.avatar_url,name:o.name},o.id))}),m.jsxs("span",{children:["(",l.length,")"]})]}):null;return m.jsx(al,{variant:"brown",icon:m.jsx(bt,{src:"assets/stables.svg"}),title:i.formatMessage({id:"dashboard.horses.title"}),link:`/stable/${t}/horses`,description:i.formatMessage({id:"dashboard.horses.description"}),quickAction:r})}function r8(){const t=De();return m.jsx(al,{variant:"lime",icon:m.jsx(bt,{name:"bookmark-plus"}),title:t.formatMessage({id:"dashboard.facilities.title"}),description:t.formatMessage({id:"dashboard.facilities.description"})})}const s8="_pageWrapper_1ek55_1",o8="_pageContent_1ek55_10",c8="_profileAction_1ek55_19",u8="_profileAvatar_1ek55_25",ac={pageWrapper:s8,pageContent:o8,profileAction:c8,profileAvatar:u8};function d8(){const t=Vt(),{data:i,isLoading:l}=vb({enabled:!0}),{data:r}=di({enabled:!0});return m.jsxs("div",{className:ac.pageWrapper,children:[m.jsx(fi,{headerActions:m.jsx("div",{onClick:()=>t("/profile/me"),className:ac.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:r?.social_profiles?.avatar_url,name:r?.firstname??"",className:ac.profileAvatar})})}),m.jsxs("div",{className:ac.pageContent,children:[l&&m.jsx("div",{children:"Loading..."}),i&&m.jsxs(m.Fragment,{children:[m.jsx(K7,{organization_id:i.id}),m.jsx(t8,{organization_id:i.id}),m.jsx(l8,{organization_id:i.id}),m.jsx(r8,{})]})]})]})}const f8="_horseList_12cxl_1",h8="_horseEntry_12cxl_8",p8="_horseItem_12cxl_18",m8="_horseInfo_12cxl_24",g8="_horseName_12cxl_30",v8="_officialName_12cxl_34",b8="_buttonGroup_12cxl_40",y8="_pendingActions_12cxl_46",_8="_divider_12cxl_52",x8="_notes_12cxl_58",w8="_question_12cxl_64",S8="_acceptButton_12cxl_68",E8="_rejectButton_12cxl_73",C8="_teamButton_12cxl_78",na={horseList:f8,horseEntry:h8,horseItem:p8,horseInfo:m8,horseName:g8,officialName:v8,buttonGroup:b8,pendingActions:y8,divider:_8,notes:x8,question:w8,acceptButton:S8,rejectButton:E8,teamButton:C8},{useCurrentUserProfile:T8,useUserHorses:A8,usePendingHorseOwnershipTransfers:M8,useUpdateHorseOwnershipTransfer:N8}=await Pt(async()=>{const{useCurrentUserProfile:t,useUserHorses:i,usePendingHorseOwnershipTransfers:l,useUpdateHorseOwnershipTransfer:r}=await import("./index-DX412MtT.js").then(o=>o.aS);return{useCurrentUserProfile:t,useUserHorses:i,usePendingHorseOwnershipTransfers:l,useUpdateHorseOwnershipTransfer:r}},[]);function $8(){const t=De(),i=Vt(),{data:l}=T8({enabled:!0}),r=N8(),{data:o}=A8({userId:l?.id,enabled:!!l?.id}),{data:u}=M8({userId:l?.id,enabled:!!l?.id}),f=new Set(u?.map(_=>_.horse_id)),h=o?.filter(_=>!f.has(_.id))||[],g=_=>u?.find(S=>S.horse_id===_),p=(_,S)=>{l?.id&&r.mutate({transferId:_,status:S})},b=_=>r.isPending&&r.variables?.transferId===_,y=[...h,...u?.map(_=>_.horses).filter(Boolean)||[]],w=y.length>0?m.jsx("div",{className:na.horseList,children:y.map(_=>{if(!_)return null;const S=g(_.id),A=!!S,M=S?.notes;return m.jsxs("div",{className:na.horseEntry,children:[m.jsxs("div",{className:na.horseItem,onClick:()=>i(`/profile/${_.social_profile_id}`),role:"button",tabIndex:0,onKeyDown:T=>{(T.key==="Enter"||T.key===" ")&&i(`/profile/${_.social_profile_id}`)},children:[m.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:m.jsx(vt,{image:_.social_profiles?.avatar_url,name:_.name})}),m.jsxs("div",{className:na.horseInfo,children:[m.jsx("span",{className:na.horseName,children:_.name}),_.official_name&&m.jsx("span",{className:na.officialName,children:_.official_name})]}),m.jsx(bt,{name:"chevron-right"})]}),m.jsx("hr",{className:na.divider}),A?m.jsxs("div",{className:na.pendingActions,children:[M&&m.jsx("p",{className:na.notes,children:m.jsx(ae,{id:M,defaultMessage:M})}),m.jsx("p",{className:na.question,children:m.jsx(ae,{id:"dashboard.myHorses.acceptOwnershipQuestion",values:{horseName:_.name}})}),m.jsxs("div",{className:na.buttonGroup,children:[m.jsxs(ke,{size:"small",className:na.acceptButton,onClick:()=>p(S.id,"accepted"),loading:b(S.id),disabled:b(S.id),children:[m.jsx(bt,{slot:"prefix",name:"check-lg"}),m.jsx(ae,{id:"common.yes",defaultMessage:"Yes"})]}),m.jsxs(ke,{size:"small",className:na.rejectButton,onClick:()=>p(S.id,"rejected"),loading:b(S.id),disabled:b(S.id),children:[m.jsx(bt,{slot:"prefix",name:"x-lg"}),m.jsx(ae,{id:"common.no",defaultMessage:"No"})]})]})]}):m.jsxs(ke,{size:"small",className:na.teamButton,onClick:T=>{T.stopPropagation(),i(`/horse/${_.id}/team`)},children:[m.jsx(bt,{slot:"prefix",name:"people"}),m.jsx(ae,{id:"manageTeam.buttonLabel",defaultMessage:"Team"})]})]},_.id)})}):null;return m.jsx(al,{variant:"brown",icon:m.jsx(bt,{src:"assets/horses.svg"}),title:t.formatMessage({id:"dashboard.myHorses.title"}),description:t.formatMessage({id:"dashboard.myHorses.description"}),quickAction:w})}function O8(){const t=De();return m.jsx(al,{variant:"rose",icon:m.jsx(bt,{name:"people"}),title:t.formatMessage({id:"dashboard.relatedHorses.title"}),description:t.formatMessage({id:"dashboard.relatedHorses.description"})})}function k8(){const t=De();return m.jsx(al,{variant:"lime",icon:m.jsx(bt,{name:"eye"}),title:t.formatMessage({id:"dashboard.following.title"}),description:t.formatMessage({id:"dashboard.following.description"})})}const R8="_pageWrapper_1sr2a_1",z8="_pageContent_1sr2a_10",D8="_profileAction_1sr2a_19",L8="_profileAvatar_1sr2a_25",ic={pageWrapper:R8,pageContent:z8,profileAction:D8,profileAvatar:L8};function j8(){const t=Vt(),{data:i}=di({enabled:!0});return m.jsxs("div",{className:ic.pageWrapper,children:[m.jsx(fi,{headerActions:m.jsx("div",{onClick:()=>t("/profile/me"),className:ic.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:i?.social_profiles?.avatar_url,name:i?.firstname??"",className:ic.profileAvatar})})}),m.jsxs("div",{className:ic.pageContent,children:[m.jsx($8,{}),m.jsx(O8,{}),m.jsx(k8,{})]})]})}var B8=yt`
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
`,Bt=class extends rt{constructor(){super(...arguments),this.formControlController=new Es(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,i)=>t.checked=i}),this.hasSlotController=new Kn(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),i=this.helpText?!0:!!t;return Se`
      <div
        class=${ft({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":i})}
      >
        <label
          part="base"
          class=${ft({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${be(this.value)}
            .checked=${zh(this.checked)}
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
    `}};Bt.styles=[$t,$c,B8];C([We('input[type="checkbox"]')],Bt.prototype,"input",2);C([ht()],Bt.prototype,"hasFocus",2);C([B()],Bt.prototype,"title",2);C([B()],Bt.prototype,"name",2);C([B()],Bt.prototype,"value",2);C([B({reflect:!0})],Bt.prototype,"size",2);C([B({type:Boolean,reflect:!0})],Bt.prototype,"disabled",2);C([B({type:Boolean,reflect:!0})],Bt.prototype,"checked",2);C([Rh("checked")],Bt.prototype,"defaultChecked",2);C([B({reflect:!0})],Bt.prototype,"form",2);C([B({type:Boolean,reflect:!0})],Bt.prototype,"required",2);C([B({attribute:"help-text"})],Bt.prototype,"helpText",2);C([Ve("checked",{waitUntilFirstUpdate:!0})],Bt.prototype,"handleCheckedChange",1);C([Ve("disabled",{waitUntilFirstUpdate:!0})],Bt.prototype,"handleDisabledChange",1);var H8="sl-switch";Bt.define("sl-switch");var U8=Jt({tagName:H8,elementClass:Bt,react:qt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"}),ny=U8;const I8="_container_1vojo_1",P8="_userListItem_1vojo_14",q8="_clickable_1vojo_25",V8="_userInfo_1vojo_34",F8="_nameContainer_1vojo_40",G8="_nickname_1vojo_45",Y8="_fullName_1vojo_49",X8="_youIndicator_1vojo_55",Q8="_iconGroup_1vojo_62",W8="_removeButton_1vojo_68",Z8="_editForm_1vojo_72",K8="_switchRow_1vojo_79",J8="_switchLabel_1vojo_85",Qt={container:I8,"user-list":"_user-list_1vojo_5",userListItem:P8,clickable:q8,userInfo:V8,nameContainer:F8,nickname:G8,fullName:Y8,youIndicator:X8,iconGroup:Q8,removeButton:W8,editForm:Z8,switchRow:K8,switchLabel:J8};function eT({organizationId:t}){const{data:i}=di({enabled:!0}),{formatMessage:l}=De(),{data:r}=nh({organizationId:t,enabled:!!t}),o=Vt(),[u,f]=k.useState(!1),[h,g]=k.useState(null),[p,b]=k.useState(""),[y,w]=k.useState("member"),[_,S]=k.useState(!1),A=cx(),M=ux(),{data:T,isLoading:D,isError:H,error:L}=ih({organizationId:t,enabled:!!t}),O=k.useMemo(()=>(T??[]).slice().sort((Z,re)=>(Z.nickname??"").localeCompare(re.nickname??"")),[T]),W=k.useCallback(async Z=>{const re=l({id:"manageUsers.removeConfirmation",defaultMessage:"Are you sure you want to remove {username} from this organization?"},{username:Z.user_profiles?.firstname||Z.nickname||"this user"});window.confirm(re)&&await A.mutateAsync({organizationId:t??"",userProfileId:Z.user_profile_id})},[l,t,A]),Q=Z=>{g(Z),b(Z.nickname??""),w(Z.role),S(Z.is_rosterable??!1),f(!0)},X=()=>{f(!1),g(null)},P=async()=>{if(h)try{await M.mutateAsync({organizationId:t??"",userProfileId:h.user_profile_id,nickname:p,role:y,is_rosterable:_}),X()}catch(Z){console.error("Failed to update user:",Z)}},F=[{value:"admin",labelId:"organization.role.admin"},{value:"member",labelId:"organization.role.member"}],ee=l({id:"manageUsers.inviteUser",defaultMessage:"Invite user"}),ie=({user:Z})=>{const{formatMessage:re}=De(),{mutate:te,isPending:U}=dx({mutationFn:()=>fx(Z.user_profile_id),onSuccess:async K=>{const J=re({id:"invite.share.title",defaultMessage:"Invite to Is My Horse"}),oe=re({id:"invite.share.text",defaultMessage:"You've been invited to join our stable on Is My Horse. Sign up here:"});await z4(`/invite?token=${K}`,J,oe,ee)},onError:K=>{console.error("Failed to generate invite link:",K);let oe=K?.context?.error?.message;oe||(K instanceof Error||typeof K=="object"&&K!==null&&"message"in K)&&(oe=K.message),alert(re({id:"invite.share.error",defaultMessage:"Could not create invite link. Please try again."})+`

Details: ${oe}`)}});return U?m.jsx(G1,{style:{fontSize:"1rem"}}):m.jsx(Nt,{label:ee,name:"envelope",onClick:()=>te()})};return m.jsxs("div",{className:Qt.container,children:[m.jsx("ul",{className:Qt["user-list"],children:O.map(Z=>m.jsxs("li",{className:`${Qt.userListItem} ${Z.user_profiles?.social_profile_id?Qt.clickable:""}`,onClick:()=>{Z.user_profiles?.social_profile_id&&o(`/profile/${Z.user_profiles?.social_profile_id}`)},children:[m.jsxs("div",{className:Qt.userInfo,children:[m.jsx(vt,{image:Z.user_profiles?.social_profiles?.avatar_url,name:Z.nickname??"",className:Qt.avatar}),m.jsxs("div",{className:Qt.nameContainer,children:[m.jsxs("span",{className:Qt.nickname,children:[Z.nickname,Z.user_profiles?.auth_user_id===i?.auth_user_id&&m.jsxs("span",{className:Qt.youIndicator,children:[" ","(",m.jsx(ae,{id:"manageUsers.you",defaultMessage:"You"}),")"]})]}),m.jsxs("span",{className:Qt.fullName,children:[Z.user_profiles?.firstname," ",Z.user_profiles?.lastname]})]})]}),m.jsxs("div",{className:Qt.iconGroup,onClick:re=>re.stopPropagation(),children:[(r==="admin"||r==="owner")&&m.jsx(Nt,{label:l({id:"manageUsers.editUser"}),name:"pencil",onClick:()=>Q(Z)}),(r==="admin"||r==="owner")&&Z.user_profiles?.auth_user_id!==i?.auth_user_id&&m.jsxs(m.Fragment,{children:[!Z.user_profiles?.auth_user_id&&m.jsx(ie,{user:Z}),m.jsx(Nt,{className:Qt.removeButton,label:l({id:"manageUsers.removeUser",defaultMessage:"Remove user"}),name:"trash",onClick:()=>W(Z)})]})]})]},Z.id))}),D&&m.jsx("p",{children:m.jsx(ae,{id:"manageUsers.loading",defaultMessage:"Loading users..."})}),H&&m.jsx("p",{children:m.jsx(ae,{id:"manageUsers.error",defaultMessage:"Error loading users: {message}",values:{message:L?.message}})}),m.jsxs(Ns,{label:l({id:"manageUsers.editUser"}),open:u,onSlAfterHide:X,children:[m.jsxs("div",{className:Qt.editForm,children:[m.jsx(Ce,{label:l({id:"users.fullNameLabel"}),value:`${h?.user_profiles?.firstname??""} ${h?.user_profiles?.lastname??""}`,disabled:!0}),m.jsx(Ce,{label:l({id:"users.nicknameLabel"}),value:p,onSlInput:Z=>b(Z.target.value)}),h?.role==="owner"?m.jsx(Ce,{label:l({id:"users.roleLabel"}),value:l({id:"organization.role.owner"}),disabled:!0}):m.jsx(Kt,{label:l({id:"users.roleLabel"}),value:y,onSlAfterHide:Z=>{Z.stopPropagation()},onSlChange:Z=>w(Z.target.value),children:F.map(Z=>m.jsx(Le,{value:Z.value,children:l({id:Z.labelId})},Z.value))}),m.jsxs("div",{className:Qt.switchRow,children:[m.jsx("span",{className:Qt.switchLabel,children:l({id:"users.isRosterableLabel"})}),m.jsx(ny,{checked:_,onSlChange:Z=>S(Z.target.checked)})]})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:P,loading:M.isPending,children:m.jsx(ae,{id:"common.save"})}),m.jsx(ke,{slot:"footer",onClick:X,children:m.jsx(ae,{id:"common.cancel"})})]})]})}const tT="_addUserDrawer_4mi60_1",aT="_formContent_4mi60_33",nb={addUserDrawer:tT,formContent:aT},{useAddUserToStable:iT,useUserOrganization:nT}=await Pt(async()=>{const{useAddUserToStable:t,useUserOrganization:i}=await import("./index-DX412MtT.js").then(l=>l.aS);return{useAddUserToStable:t,useUserOrganization:i}},[]);function lT({isOpen:t,onClose:i,onSaveSuccess:l}){const r=De(),{data:o}=nT({enabled:t}),u=iT(),[f,h]=k.useState(""),[g,p]=k.useState(""),[b,y]=k.useState(""),[w,_]=k.useState("member"),[S,A]=k.useState(!1),[M,T]=k.useState({}),D=[{value:"admin",labelId:"organization.role.admin"},{value:"member",labelId:"organization.role.member"}];k.useEffect(()=>{t||H()},[t]);const H=()=>{h(""),p(""),y(""),_("member"),A(!1),T({})},L=()=>{H(),i()},O=()=>{const Q={},X=r.formatMessage({id:"validation.required"});return f.trim()||(Q.firstname=X),g.trim()||(Q.lastname=X),w||(Q.role=X),T(Q),Object.keys(Q).length===0},W=async()=>{if(!(!O()||!o?.id))try{await u.mutateAsync({organization_id:o.id,firstname:f,lastname:g,nickname:b||f,role:w,is_rosterable:S,locale:r.locale}),l?.(),i()}catch(Q){console.error("Failed to add user:",Q)}};return m.jsxs(hi,{label:r.formatMessage({id:"manageUsers.addUser"}),placement:"end",open:t,onSlAfterHide:L,className:nb.addUserDrawer,children:[m.jsxs("div",{className:nb.formContent,children:[m.jsx(Ce,{"data-testid":"firstname-input",label:r.formatMessage({id:"users.firstNameLabel"}),value:f,onSlInput:Q=>h(Q.target.value),required:!0,helpText:M.firstname}),m.jsx(Ce,{"data-testid":"lastname-input",label:r.formatMessage({id:"users.lastNameLabel"}),value:g,onSlInput:Q=>p(Q.target.value),required:!0,helpText:M.lastname}),m.jsx(Ce,{"data-testid":"nickname-input",label:r.formatMessage({id:"users.nicknameLabel"}),value:b,onSlInput:Q=>y(Q.target.value)}),m.jsx(Kt,{"data-testid":"role-select",label:r.formatMessage({id:"users.roleLabel"}),value:w,onSlChange:Q=>_(Q.target.value),onSlAfterHide:Q=>{Q.stopPropagation()},required:!0,helpText:M.role,children:D.map(Q=>m.jsx(Le,{value:Q.value,children:r.formatMessage({id:Q.labelId})},Q.value))}),m.jsx(ny,{"data-testid":"rosterable-switch",checked:S,onSlChange:Q=>A(Q.target.checked),children:r.formatMessage({id:"users.isRosterableLabel"})})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:W,loading:u.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:L,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const rT="_pageWrapper_1ufe2_1",sT="_pageContent_1ufe2_11",oT="_drawer_1ufe2_20",cT="_profileAction_1ufe2_33",uT="_profileAvatar_1ufe2_39",dT="_headerActions_1ufe2_43",Il={pageWrapper:rT,pageContent:sT,drawer:oT,profileAction:cT,profileAvatar:uT,headerActions:dT};function fT(){const t=De(),{organization_id:i}=Ss(),{data:l}=nh({organizationId:i,enabled:!0}),{data:r}=di({enabled:!0}),o=Vt(),u=k.useRef(null),[f,h]=k.useState(!1),g=()=>{h(!0)};return m.jsx(hi,{label:t.formatMessage({id:"shell.tab.users"}),placement:"end",open:!0,ref:u,className:Il.drawer,children:m.jsxs("div",{className:Il.pageWrapper,children:[m.jsx(lT,{isOpen:f,onClose:()=>{u.current?.modal.deactivateExternal(),h(!1)},onSaveSuccess:()=>console.log("User added successfully!")}),m.jsx(fi,{showBackButton:!0,headerActions:l==="admin"||l==="owner"?m.jsxs("div",{className:Il.headerActions,children:[m.jsx(Nt,{"data-testid":"add-user-button",label:t.formatMessage({id:"manageUsers.addUser"}),onClick:()=>{u.current?.modal.activateExternal(),g()},name:"plus"}),m.jsx("div",{onClick:()=>o("/profile/me"),className:Il.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:r?.social_profiles?.avatar_url,name:r?.firstname??"",className:Il.profileAvatar})})]}):null}),m.jsx("div",{className:Il.pageContent,children:m.jsx(eT,{organizationId:i})})]})})}const hT="_container_1qk1o_1",pT="_clickable_1qk1o_25",mT="_horseInfo_1qk1o_34",gT="_nameContainer_1qk1o_40",vT="_horseName_1qk1o_45",bT="_officialName_1qk1o_49",yT="_divider_1qk1o_55",_T="_ownerInfo_1qk1o_61",xT="_ownerLabel_1qk1o_68",wT="_status_1qk1o_72",ST="_ownerSelect_1qk1o_85",Lt={container:hT,"horse-list":"_horse-list_1qk1o_5","horse-list-item":"_horse-list-item_1qk1o_14",clickable:pT,horseInfo:mT,nameContainer:gT,horseName:vT,officialName:bT,divider:yT,ownerInfo:_T,ownerLabel:xT,status:wT,"icon-group":"_icon-group_1qk1o_77",ownerSelect:ST},{useOrganizationHorses:ET,useCurrentUserProfile:CT,useDeleteHorse:TT,useOrganizationMembers:AT,useOrganizationHorseTransfers:MT,useCurrentUserOrganizationRole:NT,useInitiateOwnershipTransfer:$T}=await Pt(async()=>{const{useOrganizationHorses:t,useCurrentUserProfile:i,useDeleteHorse:l,useOrganizationMembers:r,useOrganizationHorseTransfers:o,useCurrentUserOrganizationRole:u,useInitiateOwnershipTransfer:f}=await import("./index-DX412MtT.js").then(h=>h.aS);return{useOrganizationHorses:t,useCurrentUserProfile:i,useDeleteHorse:l,useOrganizationMembers:r,useOrganizationHorseTransfers:o,useCurrentUserOrganizationRole:u,useInitiateOwnershipTransfer:f}},[]);function OT({organizationId:t}){const{formatMessage:i}=De(),l=Vt(),{data:r}=CT({enabled:!0}),o=TT(),u=$T(),{data:f}=NT({organizationId:t,enabled:!!t}),[h,g]=k.useState(null),[p,b]=k.useState(null),[y,w]=k.useState(""),{data:_}=AT({organizationId:t,enabled:!!t}),{data:S}=MT({organizationId:t,enabled:!!t}),{data:A,isLoading:M,isError:T,error:D}=ET({organizationId:t,enabled:!!t}),H=k.useMemo(()=>(A??[]).slice().sort((X,P)=>X.name.localeCompare(P.name)),[A]),L=k.useMemo(()=>_?new Map(_.map(X=>[X.user_profile_id,X])):new Map,[_]),O=k.useMemo(()=>S?new Map(S.map(X=>[X.horse_id,X])):new Map,[S]),W=k.useCallback(async X=>{const P=i({id:"manageHorses.removeConfirmation",defaultMessage:"Are you sure you want to remove {horseName}?"},{horseName:X.name});window.confirm(P)&&await o.mutateAsync({horseId:X.id,organizationId:t??""})},[i,t,o]),Q=k.useCallback(async()=>{if(!(!p||!y||!t))try{await u.mutateAsync({horseId:p.id,toOwnerId:y,organizationId:t,notes:"Initial ownership set by stable admin.",forceOwnership:!0}),b(null),w("")}catch(X){console.error("Failed to initiate transfer",X)}},[p,y,t,u]);return m.jsxs("div",{className:Lt.container,children:[m.jsx("ul",{className:Lt["horse-list"],children:H.map(X=>{const P=X.owner_id?L.get(X.owner_id):void 0,F=O.get(X.id),ee=X.owner_id===r?.id;return m.jsxs("li",{className:`${Lt["horse-list-item"]} ${X.social_profile_id?Lt.clickable:""}`,onClick:()=>{X.social_profile_id&&l(`/profile/${X.social_profile_id}`)},children:[m.jsxs("div",{className:Lt.horseInfo,children:[m.jsx(vt,{image:X.social_profiles?.avatar_url,name:X.name,className:Lt.avatar}),m.jsxs("div",{className:Lt.nameContainer,children:[m.jsx("span",{className:Lt.horseName,children:X.name}),X.official_name&&m.jsx("span",{className:Lt.officialName,children:X.official_name})]})]}),m.jsx("hr",{className:Lt.divider}),m.jsxs("div",{className:Lt.ownerInfo,children:[m.jsxs("span",{className:Lt.ownerLabel,children:[m.jsx(ae,{id:"horses.ownerLabel",defaultMessage:"Owner"}),":"]}),ee?m.jsx("span",{className:Lt.ownerName,children:m.jsx(ae,{id:"manageHorses.yours",defaultMessage:"Yours"})}):m.jsxs("span",{className:Lt.ownerName,children:[P?.user_profiles?.firstname," ",P?.user_profiles?.lastname]}),F?.status&&m.jsxs("span",{className:Lt.status,children:["(",m.jsx(ae,{id:`ownershipTransfer.status.${F.status}`,defaultMessage:F.status}),")"]})]}),m.jsx("span",{className:Lt["icon-group"],onClick:ie=>ie.stopPropagation(),children:(f==="admin"||f==="owner")&&m.jsxs(m.Fragment,{children:[!X.owner_id&&m.jsx(Nt,{label:i({id:"manageHorses.assignOwner",defaultMessage:"Assign Owner"}),name:"person-plus",onClick:()=>b(X)}),m.jsx(Nt,{label:i({id:"manageHorses.editHorse",defaultMessage:"Edit horse"}),name:"pencil",onClick:()=>g(X)}),m.jsx(Nt,{label:i({id:"manageHorses.removeHorse",defaultMessage:"Remove horse"}),name:"trash",style:{color:"red"},onClick:()=>W(X)})]})})]},X.id)})}),M&&m.jsx("p",{children:m.jsx(ae,{id:"manageHorses.loading",defaultMessage:"Loading horses..."})}),T&&m.jsx("p",{children:m.jsx(ae,{id:"manageHorses.error",defaultMessage:"Error loading horses: {message}",values:{message:D?.message}})}),!M&&!T&&H.length===0&&m.jsx("p",{children:m.jsx(ae,{id:"manageHorses.noHorsesFound",defaultMessage:"No horses found that are boarded at this location"})}),h&&m.jsx(Y1,{isOpen:!!h,onClose:()=>g(null),horse:h,socialProfile:h.social_profiles??void 0}),m.jsxs(Ns,{label:i({id:"manageHorses.assignOwner",defaultMessage:"Assign Owner"}),open:!!p,onSlAfterHide:()=>{b(null),w("")},children:[m.jsx(Kt,{label:i({id:"manageHorses.selectOwner",defaultMessage:"Select Owner"}),value:y,onSlChange:X=>w(X.target.value),hoist:!0,placement:"top",onSlAfterHide:X=>X.stopPropagation(),className:Lt.ownerSelect,children:_?.map(X=>m.jsxs(Le,{value:X.user_profile_id,children:[X.user_profiles?.firstname," ",X.user_profiles?.lastname]},X.user_profile_id))}),m.jsxs("div",{slot:"footer",children:[m.jsx(ke,{variant:"neutral",onClick:()=>b(null),children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(ke,{variant:"primary",onClick:Q,disabled:!y||u.isPending,loading:u.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})})]})]})]})}const kT="_addUserDrawer_m3y6b_1",RT="_formContent_m3y6b_32",zT="_inputWithIcon_m3y6b_45",DT="_countrySelect_m3y6b_57",hs={addUserDrawer:kT,formContent:RT,inputWithIcon:zT,countrySelect:DT};function LT({isOpen:t,onClose:i,onSaveSuccess:l}){const r=De(),{data:o}=vb({enabled:t}),{data:u}=ih({organizationId:o?.id,enabled:!!o?.id&&t}),f=hx(),[h,g]=k.useState(""),[p,b]=k.useState(""),[y,w]=k.useState(""),[_,S]=k.useState(""),[A,M]=k.useState(void 0),[T,D]=k.useState(null),[H,L]=k.useState(""),[O,W]=k.useState(""),[Q,X]=k.useState(""),[P,F]=k.useState(""),[ee,ie]=k.useState(""),[Z,re]=k.useState(""),[te,U]=k.useState({});k.useEffect(()=>{t||K()},[t]);const K=()=>{g(""),b(""),w(""),S(""),M(void 0),D(null),L(""),W(""),X(""),F(""),ie(""),re(""),U({})},J=()=>{K(),i()},oe=()=>{const ne={};return h.trim()||(ne.name=r.formatMessage({id:"validation.required"})),A||(ne.ownerId=r.formatMessage({id:"validation.required"})),!y.trim()&&!_.trim()&&(ne.chipOrUeln=r.formatMessage({id:"validation.chipOrUelnRequired"})),_.trim()&&_.trim().length!==15&&(ne.ueln=r.formatMessage({id:"validation.uelnInvalid"})),U(ne),Object.keys(ne).length===0},xe=async()=>{if(!(!oe()||!o?.id||!A))try{await f.mutateAsync({name:h,boarded_at_org_id:o.id,owner_id:A,official_name:p||void 0,chip_number:y||void 0,ueln:_||void 0,date_of_birth:T?za(T,"yyyy-MM-dd"):void 0,gender:H||void 0,color:O||void 0,breed_studbook:Q||void 0,country_of_birth:P||void 0,markings:ee||void 0,chip_location:Z||void 0}),l?.(),i()}catch(ne){console.error("Failed to add horse:",ne)}},st=async ne=>{const{scanBarcode:pe}=await Pt(async()=>{const{scanBarcode:de}=await import("./index-D7RX2YAu.js");return{scanBarcode:de}},__vite__mapDeps([6,1])),Xe=await pe();Xe&&(ne==="chipNumber"?w(Xe):ne==="ueln"&&S(Xe))},Ae=ne=>{const pe=ne.locale.substring(0,2),Xe=Sc.slice().sort((de,ot)=>{const Je=de.name[pe]??de.name.en,me=ot.name[pe]??ot.name.en;return Je.localeCompare(me,pe)});if(pe==="nl"){const de=Xe.find(me=>me.code==="NL"),ot=Xe.find(me=>me.code==="BE"),Je=Xe.filter(me=>me.code!=="NL"&&me.code!=="BE");return m.jsxs(R.Fragment,{children:[[de,ot].map(me=>m.jsx(Le,{value:me.code,children:me.name[pe]??me.name.en},me.code)),m.jsx(Lc,{}),Je.map(me=>m.jsx(Le,{value:me.code,children:me.name[pe]??me.name.en},me.code))]})}return Xe.map(de=>m.jsx(Le,{value:de.code,children:de.name[pe]??de.name.en},de.code))};return m.jsxs(hi,{label:r.formatMessage({id:"manageHorses.addHorse"}),placement:"end",open:t,onSlAfterHide:i,className:hs.addUserDrawer,children:[m.jsxs("div",{className:hs.formContent,children:[m.jsx(Ce,{"data-testid":"horse-name-input",label:r.formatMessage({id:"horses.nameLabel"}),value:h,onSlInput:ne=>g(ne.target.value),required:!0,helpText:te.name}),m.jsx(Ce,{"data-testid":"horse-official-name-input",label:r.formatMessage({id:"horses.officialNameLabel"}),value:p,required:!0,onSlInput:ne=>b(ne.target.value)}),m.jsx(Kt,{"data-testid":"horse-owner-select",label:r.formatMessage({id:"horses.ownerLabel"}),value:A??"",onSlChange:ne=>{M(ne.target.value)},onSlAfterHide:ne=>{ne.stopPropagation()},helpText:te.ownerId,children:u&&u.length>0?u.map(ne=>m.jsxs(Le,{value:ne.user_profile_id,children:[ne.user_profiles?.firstname," ",ne.user_profiles?.lastname]},ne.user_profile_id)):m.jsx(Le,{value:"",disabled:!0,children:m.jsx(ae,{id:"horses.noMembersFound",defaultMessage:"No members found in this stable"})})}),m.jsxs("div",{className:hs.inputWithIcon,children:[m.jsx(Ce,{"data-testid":"horse-chip-number-input",label:r.formatMessage({id:"horses.chipNumberLabel"}),value:y,onSlInput:ne=>w(ne.target.value),helpText:te.chipOrUeln}),m.jsx(Nt,{"data-testid":"chip-scan-button",name:"qr-code",label:r.formatMessage({id:"horses.scanBarcode"}),onClick:()=>st("chipNumber")})]}),m.jsx(Ce,{label:r.formatMessage({id:"horses.chipLocationLabel"}),value:Z,onSlInput:ne=>re(ne.target.value)}),m.jsxs("div",{className:hs.inputWithIcon,children:[m.jsx(Ce,{"data-testid":"horse-ueln-input",label:r.formatMessage({id:"horses.uelnLabel"}),value:_,onSlInput:ne=>S(ne.target.value),helpText:te.ueln||te.chipOrUeln}),m.jsx(Nt,{"data-testid":"ueln-scan-button",name:"qr-code",label:r.formatMessage({id:"horses.scanBarcode"}),onClick:()=>st("ueln")})]}),m.jsx(Ce,{label:r.formatMessage({id:"horses.dateOfBirthLabel"}),type:"date",max:new Date().toISOString().split("T")[0],value:T?za(T,"yyyy-MM-dd"):"",onSlChange:ne=>D(ne.target.valueAsDate)}),m.jsxs(Kt,{label:r.formatMessage({id:"horses.genderLabel"}),value:H,onSlChange:ne=>L(ne.target.value),onSlAfterHide:ne=>{ne.stopPropagation()},children:[m.jsx(Le,{value:"Stallion",children:r.formatMessage({id:"gender.stallion"})}),m.jsx(Le,{value:"Mare",children:r.formatMessage({id:"gender.mare"})}),m.jsx(Le,{value:"Gelding",children:r.formatMessage({id:"gender.gelding"})})]}),m.jsx(Kt,{label:r.formatMessage({id:"horses.countryOfBirthLabel"}),className:hs.countrySelect,value:P,onSlChange:ne=>F(ne.target.value),onSlAfterHide:ne=>{ne.stopPropagation()},hoist:!0,children:Ae(r)}),m.jsx(Ce,{label:r.formatMessage({id:"horses.colorLabel"}),value:O,onSlInput:ne=>W(ne.target.value)}),m.jsx(Ce,{label:r.formatMessage({id:"horses.breedStudbookLabel"}),value:Q,onSlInput:ne=>X(ne.target.value)}),m.jsx(Ce,{label:r.formatMessage({id:"horses.markingsLabel"}),value:ee,onSlInput:ne=>ie(ne.target.value)})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:xe,disabled:f.isPending,loading:f.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:J,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const jT="_pageWrapper_pqnt6_1",BT="_pageContent_pqnt6_10",HT="_drawer_pqnt6_19",UT="_profileAction_pqnt6_32",IT="_profileAvatar_pqnt6_38",PT="_headerActions_pqnt6_42",Pl={pageWrapper:jT,pageContent:BT,drawer:HT,profileAction:UT,profileAvatar:IT,headerActions:PT};function qT(){const t=De(),i=px(),l=Vt(),{organization_id:r}=Ss(),{data:o}=nh({organizationId:r,enabled:!!r}),{data:u}=di({enabled:!0}),f=k.useRef(null),[h,g]=k.useState(!1),p=()=>{g(!0)};return m.jsx(hi,{label:t.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),placement:"end",open:!0,ref:f,className:Pl.drawer,children:m.jsxs("div",{className:Pl.pageWrapper,children:[m.jsx(LT,{isOpen:h,onClose:()=>{f.current?.modal.deactivateExternal(),g(!1)},onSaveSuccess:()=>{i.invalidateQueries({queryKey:["horses",r]})}}),m.jsx(fi,{showBackButton:!0,headerActions:o==="admin"||o==="owner"?m.jsxs("div",{className:Pl.headerActions,children:[m.jsx(Nt,{"data-testid":"add-horse-button",label:t.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),onClick:()=>{f.current?.modal.activateExternal(),p()},name:"plus"}),m.jsx("div",{onClick:()=>l("/profile/me"),className:Pl.profileAction,role:"button",tabIndex:0,children:m.jsx(vt,{image:u?.social_profiles?.avatar_url,name:u?.firstname??"",className:Pl.profileAvatar})})]}):null}),m.jsx("div",{className:Pl.pageContent,children:m.jsx(OT,{organizationId:r})})]})})}const VT="_container_6at2x_1",FT="_section_6at2x_8",GT="_sectionTitle_6at2x_14",YT="_list_6at2x_23",XT="_memberItem_6at2x_32",QT="_memberInfo_6at2x_43",WT="_memberName_6at2x_51",ZT="_avatar_6at2x_58",KT="_roleSelect_6at2x_63",JT="_immutableRole_6at2x_68",eA="_emptyState_6at2x_75",tA="_subSectionTitle_6at2x_82",aA="_pill_6at2x_92",iA="_pillOwner_6at2x_102",nA="_pillGroom_6at2x_106",lA="_pillAvatar_6at2x_110",rA="_pillName_6at2x_115",sA="_grid_6at2x_125",oA="_clickable_6at2x_131",ve={container:VT,section:FT,sectionTitle:GT,list:YT,memberItem:XT,memberInfo:QT,memberName:WT,avatar:ZT,roleSelect:KT,immutableRole:JT,emptyState:eA,subSectionTitle:tA,pill:aA,pillOwner:iA,pillGroom:nA,pillAvatar:lA,pillName:rA,grid:sA,clickable:oA};function cA({horseId:t}){const{formatMessage:i}=De(),l=Vt(),[r,o]=k.useState(null),{data:u}=mb({horseId:t,enabled:!!t}),{data:f}=mx({horseId:t,enabled:!!t}),{data:h}=gx({horseId:t,enabled:!!t}),{data:g}=vx({organizationId:u?.boarded_at_org_id??void 0,enabled:!!u?.boarded_at_org_id}),p=g?.user_profiles,{data:b}=gb({organizationId:u?.boarded_at_org_id??void 0,enabled:!!u?.boarded_at_org_id}),y=bx(),w=k.useMemo(()=>(f??[]).find(L=>L.role==="owner"),[f]),_=k.useMemo(()=>(f??[]).filter(L=>L.role==="stable_groom"),[f]),S=k.useMemo(()=>(f??[]).filter(L=>L.role!=="owner"&&L.role!=="stable_groom"),[f]),A=k.useMemo(()=>new Set((f??[]).filter(L=>L.role!=="stable_groom").map(L=>L.user_profile_id)),[f]),M=k.useMemo(()=>(h??[]).filter(L=>L.user_profiles?.id&&!A.has(L.user_profiles.id)),[h,A]),T=k.useMemo(()=>[{value:"co_owner",label:i({id:"roles.co_owner",defaultMessage:"Co-owner"})},{value:"rider",label:i({id:"roles.rider",defaultMessage:"Rider/Leaser"})},{value:"groom",label:i({id:"roles.groom",defaultMessage:"Groom"})},{value:"instructor",label:i({id:"roles.instructor",defaultMessage:"Instructor"})},{value:"medical",label:i({id:"roles.medical",defaultMessage:"Vet/Medical"})},{value:"farrier",label:i({id:"roles.farrier",defaultMessage:"Farrier"})}],[i]),D=(L,O)=>{O==="follower"?o({userId:L,role:O}):y.mutate({horseId:t,userId:L,role:O})},H=()=>{r&&t&&y.mutate({horseId:t,userId:r.userId,role:"follower"}),o(null)};return m.jsxs("div",{className:ve.container,children:[m.jsxs("section",{className:ve.section,children:[m.jsx("h3",{className:ve.sectionTitle,children:m.jsx(ae,{id:"manageTeam.team",defaultMessage:"Team"})}),m.jsxs("ul",{className:ve.list,children:[w&&m.jsxs("li",{className:ve.memberItem,children:[m.jsxs("div",{className:`${ve.memberInfo} ${ve.clickable}`,onClick:()=>{w.user_profiles?.social_profile_id&&l(`/profile/${w.user_profiles.social_profile_id}`)},children:[m.jsx(vt,{image:w.user_profiles?.social_profiles?.avatar_url,name:w.user_profiles?.firstname??"",className:ve.avatar}),m.jsxs("span",{className:ve.memberName,children:[w.user_profiles?.firstname," ",w.user_profiles?.lastname]})]}),m.jsx("span",{className:ve.immutableRole,children:m.jsx(ae,{id:"roles.owner",defaultMessage:"Owner"})})]},`owner-${w.user_profile_id}`),S.map(L=>m.jsxs("li",{className:ve.memberItem,children:[m.jsxs("div",{className:`${ve.memberInfo} ${ve.clickable}`,onClick:()=>{L.user_profiles?.social_profile_id&&l(`/profile/${L.user_profiles.social_profile_id}`)},children:[m.jsx(vt,{image:L.user_profiles?.social_profiles?.avatar_url,name:L.user_profiles?.firstname??"",className:ve.avatar}),m.jsxs("span",{className:ve.memberName,children:[L.user_profiles?.firstname," ",L.user_profiles?.lastname]})]}),m.jsxs(Kt,{className:ve.roleSelect,value:L.role,hoist:!0,onSlChange:O=>D(L.user_profile_id,O.target.value),children:[T.map(O=>m.jsx(Le,{value:O.value,children:O.label},O.value)),m.jsx(Le,{value:"follower",children:m.jsx(ae,{id:"roles.follower",defaultMessage:"Follower (Remove from team)"})})]})]},L.user_profile_id)),S.length===0&&!w&&m.jsx("p",{className:ve.emptyState,children:m.jsx(ae,{id:"manageTeam.noTeam",defaultMessage:"No team members yet."})})]})]}),(p||_.length>0)&&m.jsxs("section",{className:ve.section,children:[m.jsx("h3",{className:ve.sectionTitle,children:m.jsx(ae,{id:"manageTeam.organizationTeam",defaultMessage:"Team {organizationName}",values:{organizationName:b?.name??"Stable"}})}),p&&m.jsxs("div",{children:[m.jsx("h4",{className:ve.subSectionTitle,children:m.jsx(ae,{id:"manageTeam.stableOwner",defaultMessage:"Stable Owner"})}),m.jsxs("div",{className:`${ve.pill} ${ve.pillOwner} ${ve.clickable}`,onClick:()=>{p?.social_profile_id&&l(`/profile/${p.social_profile_id}`)},children:[m.jsx(vt,{image:p.social_profiles?.avatar_url,name:p.firstname??"",className:ve.pillAvatar}),m.jsxs("span",{className:ve.pillName,children:[p.firstname," ",p.lastname]})]})]}),_.length>0&&m.jsxs("div",{children:[m.jsxs("h4",{className:ve.subSectionTitle,children:[m.jsx(ae,{id:"roles.stable_groom",defaultMessage:"Stable Groom"}),"s"]}),m.jsx("div",{className:ve.grid,children:_.map(L=>m.jsxs("div",{className:`${ve.pill} ${ve.pillGroom} ${ve.clickable}`,onClick:()=>{L.user_profiles?.social_profile_id&&l(`/profile/${L.user_profiles.social_profile_id}`)},children:[m.jsx(vt,{image:L.user_profiles?.social_profiles?.avatar_url,name:L.user_profiles?.firstname??"",className:ve.pillAvatar}),m.jsxs("span",{className:ve.pillName,children:[L.user_profiles?.firstname," ",L.user_profiles?.lastname?.charAt(0),"."]})]},L.user_profile_id))})]})]}),m.jsxs("section",{className:ve.section,children:[m.jsx("h3",{className:ve.sectionTitle,children:m.jsx(ae,{id:"manageTeam.followers",defaultMessage:"Followers"})}),m.jsxs("ul",{className:ve.list,children:[M.map(L=>m.jsxs("li",{className:ve.memberItem,children:[m.jsxs("div",{className:`${ve.memberInfo} ${ve.clickable}`,onClick:()=>{L.user_profiles?.social_profile_id&&l(`/profile/${L.user_profiles.social_profile_id}`)},children:[m.jsx(vt,{image:L.user_profiles?.social_profiles?.avatar_url,name:L.user_profiles?.firstname??"",className:ve.avatar}),m.jsxs("span",{className:ve.memberName,children:[L.user_profiles?.firstname," ",L.user_profiles?.lastname]})]}),m.jsxs(Kt,{className:ve.roleSelect,value:"follower",hoist:!0,onSlChange:O=>D(L.user_profiles?.id??"",O.target.value),children:[m.jsx(Le,{value:"follower",children:m.jsx(ae,{id:"roles.follower_only",defaultMessage:"Follower"})}),T.map(O=>m.jsx(Le,{value:O.value,children:O.label},O.value))]})]},L.follower_profile_id)),M.length===0&&m.jsx("p",{className:ve.emptyState,children:m.jsx(ae,{id:"manageTeam.noFollowers",defaultMessage:"No followers found."})})]})]}),m.jsxs(Ns,{label:i({id:"manageTeam.demoteTitle",defaultMessage:"Remove from Team?"}),open:!!r,onSlAfterHide:()=>o(null),children:[m.jsx("p",{children:m.jsx(ae,{id:"manageTeam.demoteWarning",defaultMessage:"Are you sure you want to remove this user from the team? They will lose access to restricted posts."})}),m.jsxs("div",{slot:"footer",children:[m.jsx(ke,{variant:"neutral",onClick:()=>o(null),children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(ke,{variant:"danger",onClick:H,children:m.jsx(ae,{id:"common.remove",defaultMessage:"Remove"})})]})]})]})}const uA="_pageWrapper_1kjk1_1",dA="_pageContent_1kjk1_10",fA="_drawer_1kjk1_19",Ef={pageWrapper:uA,pageContent:dA,drawer:fA};function hA(){const t=De(),{horseId:i}=Ss(),l=k.useRef(null);return m.jsx(hi,{label:t.formatMessage({id:"manageTeam.title",defaultMessage:"Manage Team"}),placement:"end",open:!0,ref:l,className:Ef.drawer,children:m.jsxs("div",{className:Ef.pageWrapper,children:[m.jsx(fi,{showBackButton:!0}),m.jsx("div",{className:Ef.pageContent,children:m.jsx(cA,{horseId:i})})]})})}const pA=new RS;function mA({children:t}){return fb()?t:m.jsx(fc,{to:"/login",replace:!0})}function gA(){return m.jsx(j7,{children:m.jsxs(Mf,{children:[m.jsx(At,{path:"/stable",element:m.jsx(d8,{})}),m.jsx(At,{path:"/stable/:organization_id/roster/:roster_id",element:m.jsx(mE,{})}),m.jsx(At,{path:"/stable/:organization_id/members",element:m.jsx(fT,{})}),m.jsx(At,{path:"/stable/:organization_id/horses",element:m.jsx(qT,{})}),m.jsx(At,{path:"/horse",element:m.jsx(j8,{})}),m.jsx(At,{path:"/horse/:horseId/team",element:m.jsx(hA,{})}),m.jsx(At,{path:"/profile/me",element:m.jsx(P0,{})}),m.jsx(At,{path:"/profile/:social_id",element:m.jsx(P0,{})}),m.jsx(At,{path:"/invite",element:m.jsx(ay,{})}),m.jsx(At,{path:"/invite-success",element:m.jsx(iy,{})}),m.jsx(At,{path:"/",element:m.jsx(fc,{to:"/stable",replace:!0})})]})})}function vA({handleContinue:t}){const[i]=k.useState("en"),[l,r]=k.useState(_c);return k.useEffect(()=>{Pt(()=>import("./nl-vMmT-oRI.js"),[]).then(o=>{r(o.default)}).catch(()=>{})},[]),m.jsx(C1,{locale:i,messages:l,wrapRichTextChunksInFragment:!0,children:m.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[m.jsx("h1",{children:m.jsx(ae,{id:"invite.noProfile.title"})}),m.jsxs("p",{children:[m.jsx(ae,{id:"invite.noProfile.message"})," "]}),m.jsx(ke,{variant:"primary",onClick:t,children:m.jsx(ae,{id:"common.continue"})})]})})}function bA(){const[t,i]=k.useState(null),[l,r]=k.useState(!0),[o,u]=k.useState("en"),[f,h]=k.useState(_c),g=xc();k.useEffect(()=>{la.auth.getSession().then(({data:{session:S}})=>{i(S),r(!1)});const{data:{subscription:_}}=la.auth.onAuthStateChange((S,A)=>{i(A),r(!1)});return()=>_.unsubscribe()},[]);const{data:p,isLoading:b,isSuccess:y}=di({enabled:!!t});if(k.useEffect(()=>{const S=p?.locale||"nl";S!==o&&jw(Object.assign({"../translations/en.json":()=>Pt(()=>Promise.resolve().then(()=>B7),void 0),"../translations/nl.json":()=>Pt(()=>import("./nl-vMmT-oRI.js"),[])}),`../translations/${S}.json`,3).then(A=>{u(S),h(A.default)}).catch(()=>{u("en"),h(_c)})},[p,o]),l||t&&b)return null;const w=g.pathname.startsWith("/invite");return t&&y&&!p&&!w?m.jsx(vA,{handleContinue:()=>void la.auth.signOut()}):!l&&!t&&g.pathname==="/"&&!zi.isNativePlatform()?(window.location.replace("/home.html"),null):m.jsx(_x.Provider,{value:t,children:m.jsx(C1,{locale:o,messages:f,wrapRichTextChunksInFragment:!0,children:t?m.jsxs(Mf,{children:[m.jsx(At,{path:"/login",element:m.jsx(fc,{to:"/stable",replace:!0})}),m.jsx(At,{path:"/*",element:m.jsx(mA,{children:m.jsx(gA,{})})})]}):m.jsxs(Mf,{children:[m.jsx(At,{path:"/login",element:m.jsx(Z0,{})}),m.jsx(At,{path:"/invite",element:m.jsx(ay,{})}),m.jsx(At,{path:"/invite-success",element:m.jsx(iy,{})}),zi.isNativePlatform()&&m.jsx(At,{path:"/",element:m.jsx(fc,{to:"/login",replace:!0})}),m.jsx(At,{path:"*",element:m.jsx(Z0,{})})]})})})}function yA(){return m.jsx(yx,{client:pA,children:m.jsx(bA,{})})}kf("/");Lw();const _A=Hx.createRoot(document.getElementById("root"));_A.render(m.jsx(k.StrictMode,{children:m.jsx(Nx,{children:m.jsx(yA,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{console.log("SW registered: ",t)}).catch(t=>{console.log("SW registration failed: ",t)})});export{lw as H,z4 as a,wA as c,SA as f,ow as g,nw as h,D4 as p,EA as r,R4 as s};

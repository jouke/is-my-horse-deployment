const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pwa-action-sheet.entry-BPOBzlQt.js","assets/index-Pvm2jerx.js","assets/pwa-camera-modal.entry-L9uESi9t.js","assets/pwa-toast.entry-Cvjp0ron.js","assets/pwa-camera-modal-instance.entry-BXuY8P7w.js","assets/pwa-camera.entry-UpWAP86Z.js","assets/index-Dnn9eo0H.js","assets/web-_MyvMxwe.js"])))=>i.map(i=>d[i]);
import{r as sb,g as k,h as N_,R as Ft,l as $_,i as O_,u as wc,j as qt,N as k_,s as R_,k as D_,m as z_,n as _v,_ as Mt,o as L_,p as j_,q as B_,S as ob,M as H_,t as ga,v as xv,w as Ln,x as cb,Q as U_,y as wv,z as I_,A as Sv,B as Ev,F as P_,G as Cv,I as Tv,J as V_,K as de,L as ja,O as Wl,P as rn,T as m,U as Zi,V as Ql,X as F_,Y as Cf,Z as ub,$ as db,a0 as Tf,a1 as Av,e as _t,a2 as q_,a3 as G_,a4 as Y_,a5 as X_,a6 as W_,a7 as R,a8 as fb,a9 as hb,aa as za,ab as pb,ac as hn,ad as Q_,ae as Z_,af as Af,ag as Es,ah as K_,ai as Sc,aj as Ec,ak as J_,al as mb,am as gb,an as ex,ao as tx,ap as ax,aq as nx,ar as vb,as as bb,at as ix,au as lx,av as rx,aw as ra,ax as sx,ay as ox,az as cx,aA as ux,aB as nh,aC as yb,aD as ih,aE as dx,aF as fx,aG as hx,aH as px,aI as mx,aJ as gx,aK as vx,aL as bx,aM as yx,aN as _x,aO as xx,aP as wx,aQ as Mf,aR as At,aS as hc}from"./index-Pvm2jerx.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function l(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=l(o);fetch(o.href,u)}})();var Xd={exports:{}},Vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function Sx(){if(Mv)return Vt;Mv=1;var t=sb();function n(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(n(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,p,b){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:g,containerInfo:p,implementation:b}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Vt.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return u(g,p,null,b)},Vt.flushSync=function(g){var p=f.T,b=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=p,r.p=b,r.d.f()}},Vt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},Vt.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Vt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,_=h(b,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:w,fetchPriority:y}):b==="script"&&r.d.X(g,{crossOrigin:_,integrity:w,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Vt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=h(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},Vt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,_=h(b,p.crossOrigin);r.d.L(g,b,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Vt.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=h(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},Vt.requestFormReset=function(g){r.d.r(g)},Vt.unstable_batchedUpdates=function(g,p){return g(p)},Vt.useFormState=function(g,p,b){return f.H.useFormState(g,p,b)},Vt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Vt.version="19.0.0",Vt}var Nv;function _b(){if(Nv)return Xd.exports;Nv=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Xd.exports=Sx(),Xd.exports}_b();/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nf(){return Nf=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r])}return t},Nf.apply(this,arguments)}function Ex(t,n){if(t==null)return{};var l={},r=Object.keys(t),o,u;for(u=0;u<r.length;u++)o=r[u],!(n.indexOf(o)>=0)&&(l[o]=t[o]);return l}function Cx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Tx(t,n){return t.button===0&&(!n||n==="_self")&&!Cx(t)}function $f(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((n,l)=>{let r=t[l];return n.concat(Array.isArray(r)?r.map(o=>[l,o]):[[l,r]])},[]))}function Ax(t,n){let l=$f(t);return n&&n.forEach((r,o)=>{l.has(o)||n.getAll(o).forEach(u=>{l.append(o,u)})}),l}const Mx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nx="6";try{window.__reactRouterVersion=Nx}catch{}const $x="startTransition",$v=Ft[$x];function Ox(t){let{basename:n,children:l,future:r,window:o}=t,u=k.useRef();u.current==null&&(u.current=N_({window:o,v5Compat:!0}));let f=u.current,[h,g]=k.useState({action:f.action,location:f.location}),{v7_startTransition:p}=r||{},b=k.useCallback(_=>{p&&$v?$v(()=>g(_)):g(_)},[g,p]);return k.useLayoutEffect(()=>f.listen(b),[f,b]),k.useEffect(()=>$_(r),[r]),k.createElement(O_,{basename:n,children:l,location:h.location,navigationType:h.action,navigator:f,future:r})}const kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dx=k.forwardRef(function(n,l){let{onClick:r,relative:o,reloadDocument:u,replace:f,state:h,target:g,to:p,preventScrollReset:b,viewTransition:_}=n,w=Ex(n,Mx),{basename:y}=k.useContext(k_),S,A=!1;if(typeof p=="string"&&Rx.test(p)&&(S=p,kx))try{let U=new URL(window.location.href),j=p.startsWith("//")?new URL(U.protocol+p):new URL(p),$=R_(j.pathname,y);j.origin===U.origin&&$!=null?p=$+j.search+j.hash:A=!0}catch{}let M=D_(p,{relative:o}),C=zx(p,{replace:f,state:h,target:g,preventScrollReset:b,relative:o,viewTransition:_});function D(U){r&&r(U),U.defaultPrevented||C(U)}return k.createElement("a",Nf({},w,{href:S||M,onClick:A||u?r:D,ref:l,target:g}))});var Ov;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ov||(Ov={}));var kv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kv||(kv={}));function zx(t,n){let{target:l,replace:r,state:o,preventScrollReset:u,relative:f,viewTransition:h}=n===void 0?{}:n,g=qt(),p=wc(),b=z_(t,{relative:f});return k.useCallback(_=>{if(Tx(_,l)){_.preventDefault();let w=r!==void 0?r:_v(p)===_v(b);g(t,{replace:w,state:o,preventScrollReset:u,relative:f,viewTransition:h})}},[p,g,b,r,o,l,t,u,f,h])}function Lx(t){let n=k.useRef($f(t)),l=k.useRef(!1),r=wc(),o=k.useMemo(()=>Ax(r.search,l.current?null:n.current),[r.search]),u=qt(),f=k.useCallback((h,g)=>{const p=$f(typeof h=="function"?h(o):h);l.current=!0,u("?"+p,g)},[u,o]);return[o,f]}var Wd={exports:{}},ns={},Qd={exports:{}},Zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function jx(){return Rv||(Rv=1,(function(t){function n(I,Z){var ee=I.length;I.push(Z);e:for(;0<ee;){var ce=ee-1>>>1,_e=I[ce];if(0<o(_e,Z))I[ce]=Z,I[ee]=_e,ee=ce;else break e}}function l(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var Z=I[0],ee=I.pop();if(ee!==Z){I[0]=ee;e:for(var ce=0,_e=I.length,ot=_e>>>1;ce<ot;){var Te=2*(ce+1)-1,wt=I[Te],K=Te+1,Le=I[K];if(0>o(wt,ee))K<_e&&0>o(Le,wt)?(I[ce]=Le,I[K]=ee,ce=K):(I[ce]=wt,I[Te]=ee,ce=Te);else if(K<_e&&0>o(Le,ee))I[ce]=Le,I[K]=ee,ce=K;else break e}}return Z}function o(I,Z){var ee=I.sortIndex-Z.sortIndex;return ee!==0?ee:I.id-Z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();t.unstable_now=function(){return f.now()-h}}var g=[],p=[],b=1,_=null,w=3,y=!1,S=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var Z=l(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=I)r(p),Z.sortIndex=Z.expirationTime,n(g,Z);else break;Z=l(p)}}function j(I){if(A=!1,U(I),!S)if(l(g)!==null)S=!0,le();else{var Z=l(p);Z!==null&&te(j,Z.startTime-I)}}var $=!1,W=-1,X=5,oe=-1;function L(){return!(t.unstable_now()-oe<X)}function q(){if($){var I=t.unstable_now();oe=I;var Z=!0;try{e:{S=!1,A&&(A=!1,C(W),W=-1),y=!0;var ee=w;try{t:{for(U(I),_=l(g);_!==null&&!(_.expirationTime>I&&L());){var ce=_.callback;if(typeof ce=="function"){_.callback=null,w=_.priorityLevel;var _e=ce(_.expirationTime<=I);if(I=t.unstable_now(),typeof _e=="function"){_.callback=_e,U(I),Z=!0;break t}_===l(g)&&r(g),U(I)}else r(g);_=l(g)}if(_!==null)Z=!0;else{var ot=l(p);ot!==null&&te(j,ot.startTime-I),Z=!1}}break e}finally{_=null,w=ee,y=!1}Z=void 0}}finally{Z?J():$=!1}}}var J;if(typeof D=="function")J=function(){D(q)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,Q=ne.port2;ne.port1.onmessage=q,J=function(){Q.postMessage(null)}}else J=function(){M(q,0)};function le(){$||($=!0,J())}function te(I,Z){W=M(function(){I(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){S||y||(S=!0,le())},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return l(g)},t.unstable_next=function(I){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var ee=w;w=Z;try{return I()}finally{w=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ee=w;w=I;try{return Z()}finally{w=ee}},t.unstable_scheduleCallback=function(I,Z,ee){var ce=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ce+ee:ce):ee=ce,I){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ee+_e,I={id:b++,callback:Z,priorityLevel:I,startTime:ee,expirationTime:_e,sortIndex:-1},ee>ce?(I.sortIndex=ee,n(p,I),l(g)===null&&I===l(p)&&(A?(C(W),W=-1):A=!0,te(j,ee-ce))):(I.sortIndex=_e,n(g,I),S||y||(S=!0,le())),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var Z=w;return function(){var ee=w;w=Z;try{return I.apply(this,arguments)}finally{w=ee}}}})(Zd)),Zd}var Dv;function Bx(){return Dv||(Dv=1,Qd.exports=jx()),Qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function Hx(){if(zv)return ns;zv=1;var t=Bx(),n=sb(),l=_b();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),y=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),j=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case h:return"Portal";case b:return"Profiler";case p:return"StrictMode";case A:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case w:return(e._context.displayName||"Context")+".Consumer";case S:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return a=e.displayName||null,a!==null?a:oe(e.type)||"Memo";case D:a=e._payload,e=e._init;try{return oe(e(a))}catch{}}return null}var L=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=Object.assign,J,ne;function Q(e){if(J===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);J=a&&a[1]||"",ne=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+J+e+ne}var le=!1;function te(e,a){if(!e||le)return"";le=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(V){var P=V}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(V){P=V}e.call(Y.prototype)}}else{try{throw Error()}catch(V){P=V}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(V){if(V&&P&&typeof V.stack=="string")return[V.stack,P.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),v=d[0],x=d[1];if(v&&x){var E=v.split(`
`),O=x.split(`
`);for(c=s=0;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;for(;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;if(s===E.length||c===O.length)for(s=E.length-1,c=O.length-1;1<=s&&0<=c&&E[s]!==O[c];)c--;for(;1<=s&&0<=c;s--,c--)if(E[s]!==O[c]){if(s!==1||c!==1)do if(s--,c--,0>c||E[s]!==O[c]){var F=`
`+E[s].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=s&&0<=c);break}}}finally{le=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Q(i):""}function I(e){switch(e.tag){case 26:case 27:case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function Z(e){try{var a="";do a+=I(e),e=e.return;while(e);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function ee(e){var a=e,i=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(i=a.return),e=a.return;while(e)}return a.tag===3?i:null}function ce(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function _e(e){if(ee(e)!==e)throw Error(r(188))}function ot(e){var a=e.alternate;if(!a){if(a=ee(e),a===null)throw Error(r(188));return a!==e?null:e}for(var i=e,s=a;;){var c=i.return;if(c===null)break;var d=c.alternate;if(d===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===i)return _e(c),e;if(d===s)return _e(c),a;d=d.sibling}throw Error(r(188))}if(i.return!==s.return)i=c,s=d;else{for(var v=!1,x=c.child;x;){if(x===i){v=!0,i=c,s=d;break}if(x===s){v=!0,s=c,i=d;break}x=x.sibling}if(!v){for(x=d.child;x;){if(x===i){v=!0,i=d,s=c;break}if(x===s){v=!0,s=d,i=c;break}x=x.sibling}if(!v)throw Error(r(189))}}if(i.alternate!==s)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:a}function Te(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=Te(e),a!==null)return a;e=e.sibling}return null}var wt=Array.isArray,K=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Le={pending:!1,data:null,method:null,action:null},Dt=[],re=-1;function Be(e){return{current:e}}function Ne(e){0>re||(e.current=Dt[re],Dt[re]=null,re--)}function fe(e,a){re++,Dt[re]=e.current,e.current=a}var Yt=Be(null),vn=Be(null),Fe=Be(null),Rs=Be(null);function Ds(e,a){switch(fe(Fe,a),fe(vn,e),fe(Yt,null),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?Wg(a):0;break;default:if(e=e===8?a.parentNode:a,a=e.tagName,e=e.namespaceURI)e=Wg(e),a=Qg(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}Ne(Yt),fe(Yt,a)}function rl(){Ne(Yt),Ne(vn),Ne(Fe)}function Hc(e){e.memoizedState!==null&&fe(Rs,e);var a=Yt.current,i=Qg(a,e.type);a!==i&&(fe(vn,e),fe(Yt,i))}function zs(e){vn.current===e&&(Ne(Yt),Ne(vn)),Rs.current===e&&(Ne(Rs),Kr._currentValue=Le)}var Uc=Object.prototype.hasOwnProperty,Ic=t.unstable_scheduleCallback,Pc=t.unstable_cancelCallback,sy=t.unstable_shouldYield,oy=t.unstable_requestPaint,Za=t.unstable_now,cy=t.unstable_getCurrentPriorityLevel,Bh=t.unstable_ImmediatePriority,Hh=t.unstable_UserBlockingPriority,Ls=t.unstable_NormalPriority,uy=t.unstable_LowPriority,Uh=t.unstable_IdlePriority,dy=t.log,fy=t.unstable_setDisableYieldValue,sr=null,oa=null;function hy(e){if(oa&&typeof oa.onCommitFiberRoot=="function")try{oa.onCommitFiberRoot(sr,e,void 0,(e.current.flags&128)===128)}catch{}}function In(e){if(typeof dy=="function"&&fy(e),oa&&typeof oa.setStrictMode=="function")try{oa.setStrictMode(sr,e)}catch{}}var ca=Math.clz32?Math.clz32:gy,py=Math.log,my=Math.LN2;function gy(e){return e>>>=0,e===0?32:31-(py(e)/my|0)|0}var js=128,Bs=4194304;function Si(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hs(e,a){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,d=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var x=i&134217727;return x!==0?(i=x&~c,i!==0?s=Si(i):(d&=x,d!==0?s=Si(d):e||(v=x&~v,v!==0&&(s=Si(v))))):(x=i&~c,x!==0?s=Si(x):d!==0?s=Si(d):e||(v=i&~v,v!==0&&(s=Si(v)))),s===0?0:a!==0&&a!==s&&(a&c)===0&&(c=s&-s,v=a&-a,c>=v||c===32&&(v&4194176)!==0)?a:s}function or(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function vy(e,a){switch(e){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ih(){var e=js;return js<<=1,(js&4194176)===0&&(js=128),e}function Ph(){var e=Bs;return Bs<<=1,(Bs&62914560)===0&&(Bs=4194304),e}function Vc(e){for(var a=[],i=0;31>i;i++)a.push(e);return a}function cr(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function by(e,a,i,s,c,d){var v=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var x=e.entanglements,E=e.expirationTimes,O=e.hiddenUpdates;for(i=v&~i;0<i;){var F=31-ca(i),Y=1<<F;x[F]=0,E[F]=-1;var P=O[F];if(P!==null)for(O[F]=null,F=0;F<P.length;F++){var V=P[F];V!==null&&(V.lane&=-536870913)}i&=~Y}s!==0&&Vh(e,s,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~a))}function Vh(e,a,i){e.pendingLanes|=a,e.suspendedLanes&=~a;var s=31-ca(a);e.entangledLanes|=a,e.entanglements[s]=e.entanglements[s]|1073741824|i&4194218}function Fh(e,a){var i=e.entangledLanes|=a;for(e=e.entanglements;i;){var s=31-ca(i),c=1<<s;c&a|e[s]&a&&(e[s]|=a),i&=~c}}function qh(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gh(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:pv(e.type))}function yy(e,a){var i=K.p;try{return K.p=e,a()}finally{K.p=i}}var Pn=Math.random().toString(36).slice(2),It="__reactFiber$"+Pn,aa="__reactProps$"+Pn,sl="__reactContainer$"+Pn,Fc="__reactEvents$"+Pn,_y="__reactListeners$"+Pn,xy="__reactHandles$"+Pn,Yh="__reactResources$"+Pn,ur="__reactMarker$"+Pn;function qc(e){delete e[It],delete e[aa],delete e[Fc],delete e[_y],delete e[xy]}function Ei(e){var a=e[It];if(a)return a;for(var i=e.parentNode;i;){if(a=i[sl]||i[It]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(e=Jg(e);e!==null;){if(i=e[It])return i;e=Jg(e)}return a}e=i,i=e.parentNode}return null}function ol(e){if(e=e[It]||e[sl]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function dr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function cl(e){var a=e[Yh];return a||(a=e[Yh]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function St(e){e[ur]=!0}var Xh=new Set,Wh={};function Ci(e,a){ul(e,a),ul(e+"Capture",a)}function ul(e,a){for(Wh[e]=a,e=0;e<a.length;e++)Xh.add(a[e])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qh={},Zh={};function Sy(e){return Uc.call(Zh,e)?!0:Uc.call(Qh,e)?!1:wy.test(e)?Zh[e]=!0:(Qh[e]=!0,!1)}function Us(e,a,i){if(Sy(a))if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+i)}}function Is(e,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+i)}}function yn(e,a,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(a,i,""+s)}}function _a(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kh(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ey(e){var a=Kh(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),s=""+e[a];if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return c.call(this)},set:function(v){s=""+v,d.call(this,v)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ps(e){e._valueTracker||(e._valueTracker=Ey(e))}function Jh(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var i=a.getValue(),s="";return e&&(s=Kh(e)?e.checked?"true":"false":e.value),e=s,e!==i?(a.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cy=/[\n"\\]/g;function xa(e){return e.replace(Cy,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Gc(e,a,i,s,c,d,v,x){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),a!=null?v==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+_a(a)):e.value!==""+_a(a)&&(e.value=""+_a(a)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),a!=null?Yc(e,v,_a(a)):i!=null?Yc(e,v,_a(i)):s!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+_a(x):e.removeAttribute("name")}function ep(e,a,i,s,c,d,v,x){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),a!=null||i!=null){if(!(d!=="submit"&&d!=="reset"||a!=null))return;i=i!=null?""+_a(i):"",a=a!=null?""+_a(a):i,x||a===e.value||(e.value=a),e.defaultValue=a}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=x?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Yc(e,a,i){a==="number"&&Vs(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function dl(e,a,i,s){if(e=e.options,a){a={};for(var c=0;c<i.length;c++)a["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=a.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&s&&(e[i].defaultSelected=!0)}else{for(i=""+_a(i),a=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}a!==null||e[c].disabled||(a=e[c])}a!==null&&(a.selected=!0)}}function tp(e,a,i){if(a!=null&&(a=""+_a(a),a!==e.value&&(e.value=a),i==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=i!=null?""+_a(i):""}function ap(e,a,i,s){if(a==null){if(s!=null){if(i!=null)throw Error(r(92));if(wt(s)){if(1<s.length)throw Error(r(93));s=s[0]}i=s}i==null&&(i=""),a=i}i=_a(a),e.defaultValue=i,s=e.textContent,s===i&&s!==""&&s!==null&&(e.value=s)}function fl(e,a){if(a){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=a;return}}e.textContent=a}var Ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function np(e,a,i){var s=a.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":s?e.setProperty(a,i):typeof i!="number"||i===0||Ty.has(a)?a==="float"?e.cssFloat=i:e[a]=(""+i).trim():e[a]=i+"px"}function ip(e,a,i){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in a)s=a[c],a.hasOwnProperty(c)&&i[c]!==s&&np(e,c,s)}else for(var d in a)a.hasOwnProperty(d)&&np(e,d,a[d])}function Xc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ay=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),My=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fs(e){return My.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Wc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,pl=null;function lp(e){var a=ol(e);if(a&&(e=a.stateNode)){var i=e[aa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Gc(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),a=i.name,i.type==="radio"&&a!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+xa(""+a)+'"][type="radio"]'),a=0;a<i.length;a++){var s=i[a];if(s!==e&&s.form===e.form){var c=s[aa]||null;if(!c)throw Error(r(90));Gc(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(a=0;a<i.length;a++)s=i[a],s.form===e.form&&Jh(s)}break e;case"textarea":tp(e,i.value,i.defaultValue);break e;case"select":a=i.value,a!=null&&dl(e,!!i.multiple,a,!1)}}}var Zc=!1;function rp(e,a,i){if(Zc)return e(a,i);Zc=!0;try{var s=e(a);return s}finally{if(Zc=!1,(hl!==null||pl!==null)&&(Mo(),hl&&(a=hl,e=pl,pl=hl=null,lp(a),e)))for(a=0;a<e.length;a++)lp(e[a])}}function fr(e,a){var i=e.stateNode;if(i===null)return null;var s=i[aa]||null;if(s===null)return null;i=s[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,a,typeof i));return i}var Kc=!1;if(bn)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Kc=!1}var Vn=null,Jc=null,qs=null;function sp(){if(qs)return qs;var e,a=Jc,i=a.length,s,c="value"in Vn?Vn.value:Vn.textContent,d=c.length;for(e=0;e<i&&a[e]===c[e];e++);var v=i-e;for(s=1;s<=v&&a[i-s]===c[d-s];s++);return qs=c.slice(e,1<s?1-s:void 0)}function Gs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Ys(){return!0}function op(){return!1}function na(e){function a(i,s,c,d,v){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(i=e[x],this[x]=i?i(d):d[x]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ys:op,this.isPropagationStopped=op,this}return q(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),a}var Ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=na(Ti),pr=q({},Ti,{view:0,detail:0}),Ny=na(pr),eu,tu,mr,Ws=q({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(eu=e.screenX-mr.screenX,tu=e.screenY-mr.screenY):tu=eu=0,mr=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),cp=na(Ws),$y=q({},Ws,{dataTransfer:0}),Oy=na($y),ky=q({},pr,{relatedTarget:0}),au=na(ky),Ry=q({},Ti,{animationName:0,elapsedTime:0,pseudoElement:0}),Dy=na(Ry),zy=q({},Ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ly=na(zy),jy=q({},Ti,{data:0}),up=na(jy),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iy(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Uy[e])?!!a[e]:!1}function nu(){return Iy}var Py=q({},pr,{key:function(e){if(e.key){var a=By[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vy=na(Py),Fy=q({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=na(Fy),qy=q({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Gy=na(qy),Yy=q({},Ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=na(Yy),Wy=q({},Ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qy=na(Wy),Zy=q({},Ti,{newState:0,oldState:0}),Ky=na(Zy),Jy=[9,13,27,32],iu=bn&&"CompositionEvent"in window,gr=null;bn&&"documentMode"in document&&(gr=document.documentMode);var e2=bn&&"TextEvent"in window&&!gr,fp=bn&&(!iu||gr&&8<gr&&11>=gr),hp=" ",pp=!1;function mp(e,a){switch(e){case"keyup":return Jy.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ml=!1;function t2(e,a){switch(e){case"compositionend":return gp(a);case"keypress":return a.which!==32?null:(pp=!0,hp);case"textInput":return e=a.data,e===hp&&pp?null:e;default:return null}}function a2(e,a){if(ml)return e==="compositionend"||!iu&&mp(e,a)?(e=sp(),qs=Jc=Vn=null,ml=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return fp&&a.locale!=="ko"?null:a.data;default:return null}}var n2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!n2[e.type]:a==="textarea"}function bp(e,a,i,s){hl?pl?pl.push(s):pl=[s]:hl=s,a=Ro(a,"onChange"),0<a.length&&(i=new Xs("onChange","change",null,i,s),e.push({event:i,listeners:a}))}var vr=null,br=null;function i2(e){Fg(e,0)}function Qs(e){var a=dr(e);if(Jh(a))return e}function yp(e,a){if(e==="change")return a}var _p=!1;if(bn){var lu;if(bn){var ru="oninput"in document;if(!ru){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),ru=typeof xp.oninput=="function"}lu=ru}else lu=!1;_p=lu&&(!document.documentMode||9<document.documentMode)}function wp(){vr&&(vr.detachEvent("onpropertychange",Sp),br=vr=null)}function Sp(e){if(e.propertyName==="value"&&Qs(br)){var a=[];bp(a,br,e,Qc(e)),rp(i2,a)}}function l2(e,a,i){e==="focusin"?(wp(),vr=a,br=i,vr.attachEvent("onpropertychange",Sp)):e==="focusout"&&wp()}function r2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qs(br)}function s2(e,a){if(e==="click")return Qs(a)}function o2(e,a){if(e==="input"||e==="change")return Qs(a)}function c2(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ua=typeof Object.is=="function"?Object.is:c2;function yr(e,a){if(ua(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var i=Object.keys(e),s=Object.keys(a);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!Uc.call(a,c)||!ua(e[c],a[c]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cp(e,a){var i=Ep(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=a&&s>=a)return{node:i,offset:a-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ep(i)}}function Tp(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Tp(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Vs(e.document);a instanceof e.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)e=a.contentWindow;else break;a=Vs(e.document)}return a}function su(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function u2(e,a){var i=Ap(a);a=e.focusedElem;var s=e.selectionRange;if(i!==a&&a&&a.ownerDocument&&Tp(a.ownerDocument.documentElement,a)){if(s!==null&&su(a)){if(e=s.start,i=s.end,i===void 0&&(i=e),"selectionStart"in a)a.selectionStart=e,a.selectionEnd=Math.min(i,a.value.length);else if(i=(e=a.ownerDocument||document)&&e.defaultView||window,i.getSelection){i=i.getSelection();var c=a.textContent.length,d=Math.min(s.start,c);s=s.end===void 0?d:Math.min(s.end,c),!i.extend&&d>s&&(c=s,s=d,d=c),c=Cp(a,d);var v=Cp(a,s);c&&v&&(i.rangeCount!==1||i.anchorNode!==c.node||i.anchorOffset!==c.offset||i.focusNode!==v.node||i.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),i.removeAllRanges(),d>s?(i.addRange(e),i.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),i.addRange(e)))}}for(e=[],i=a;i=i.parentNode;)i.nodeType===1&&e.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<e.length;a++)i=e[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var d2=bn&&"documentMode"in document&&11>=document.documentMode,gl=null,ou=null,_r=null,cu=!1;function Mp(e,a,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;cu||gl==null||gl!==Vs(s)||(s=gl,"selectionStart"in s&&su(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),_r&&yr(_r,s)||(_r=s,s=Ro(ou,"onSelect"),0<s.length&&(a=new Xs("onSelect","select",null,a,i),e.push({event:a,listeners:s}),a.target=gl)))}function Ai(e,a){var i={};return i[e.toLowerCase()]=a.toLowerCase(),i["Webkit"+e]="webkit"+a,i["Moz"+e]="moz"+a,i}var vl={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionrun:Ai("Transition","TransitionRun"),transitionstart:Ai("Transition","TransitionStart"),transitioncancel:Ai("Transition","TransitionCancel"),transitionend:Ai("Transition","TransitionEnd")},uu={},Np={};bn&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete vl.animationend.animation,delete vl.animationiteration.animation,delete vl.animationstart.animation),"TransitionEvent"in window||delete vl.transitionend.transition);function Mi(e){if(uu[e])return uu[e];if(!vl[e])return e;var a=vl[e],i;for(i in a)if(a.hasOwnProperty(i)&&i in Np)return uu[e]=a[i];return e}var $p=Mi("animationend"),Op=Mi("animationiteration"),kp=Mi("animationstart"),f2=Mi("transitionrun"),h2=Mi("transitionstart"),p2=Mi("transitioncancel"),Rp=Mi("transitionend"),Dp=new Map,zp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ia(e,a){Dp.set(e,a),Ci(a,[e])}var wa=[],bl=0,du=0;function Zs(){for(var e=bl,a=du=bl=0;a<e;){var i=wa[a];wa[a++]=null;var s=wa[a];wa[a++]=null;var c=wa[a];wa[a++]=null;var d=wa[a];if(wa[a++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}d!==0&&Lp(i,c,d)}}function Ks(e,a,i,s){wa[bl++]=e,wa[bl++]=a,wa[bl++]=i,wa[bl++]=s,du|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function fu(e,a,i,s){return Ks(e,a,i,s),Js(e)}function Fn(e,a){return Ks(e,null,null,a),Js(e)}function Lp(e,a,i){e.lanes|=i;var s=e.alternate;s!==null&&(s.lanes|=i);for(var c=!1,d=e.return;d!==null;)d.childLanes|=i,s=d.alternate,s!==null&&(s.childLanes|=i),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;c&&a!==null&&e.tag===3&&(d=e.stateNode,c=31-ca(i),d=d.hiddenUpdates,e=d[c],e===null?d[c]=[a]:e.push(a),a.lane=i|536870912)}function Js(e){if(50<qr)throw qr=0,bd=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var yl={},jp=new WeakMap;function Sa(e,a){if(typeof e=="object"&&e!==null){var i=jp.get(e);return i!==void 0?i:(a={value:e,source:a,stack:Z(a)},jp.set(e,a),a)}return{value:e,source:a,stack:Z(a)}}var _l=[],xl=0,eo=null,to=0,Ea=[],Ca=0,Ni=null,_n=1,xn="";function $i(e,a){_l[xl++]=to,_l[xl++]=eo,eo=e,to=a}function Bp(e,a,i){Ea[Ca++]=_n,Ea[Ca++]=xn,Ea[Ca++]=Ni,Ni=e;var s=_n;e=xn;var c=32-ca(s)-1;s&=~(1<<c),i+=1;var d=32-ca(a)+c;if(30<d){var v=c-c%5;d=(s&(1<<v)-1).toString(32),s>>=v,c-=v,_n=1<<32-ca(a)+c|i<<c|s,xn=d+e}else _n=1<<d|i<<c|s,xn=e}function hu(e){e.return!==null&&($i(e,1),Bp(e,1,0))}function pu(e){for(;e===eo;)eo=_l[--xl],_l[xl]=null,to=_l[--xl],_l[xl]=null;for(;e===Ni;)Ni=Ea[--Ca],Ea[Ca]=null,xn=Ea[--Ca],Ea[Ca]=null,_n=Ea[--Ca],Ea[Ca]=null}var Xt=null,zt=null,Re=!1,Pa=null,Ka=!1,mu=Error(r(519));function Oi(e){var a=Error(r(418,""));throw Sr(Sa(a,e)),mu}function Hp(e){var a=e.stateNode,i=e.type,s=e.memoizedProps;switch(a[It]=e,a[aa]=s,i){case"dialog":Ae("cancel",a),Ae("close",a);break;case"iframe":case"object":case"embed":Ae("load",a);break;case"video":case"audio":for(i=0;i<Yr.length;i++)Ae(Yr[i],a);break;case"source":Ae("error",a);break;case"img":case"image":case"link":Ae("error",a),Ae("load",a);break;case"details":Ae("toggle",a);break;case"input":Ae("invalid",a),ep(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ps(a);break;case"select":Ae("invalid",a);break;case"textarea":Ae("invalid",a),ap(a,s.value,s.defaultValue,s.children),Ps(a)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||a.textContent===""+i||s.suppressHydrationWarning===!0||Xg(a.textContent,i)?(s.popover!=null&&(Ae("beforetoggle",a),Ae("toggle",a)),s.onScroll!=null&&Ae("scroll",a),s.onScrollEnd!=null&&Ae("scrollend",a),s.onClick!=null&&(a.onclick=Do),a=!0):a=!1,a||Oi(e)}function Up(e){for(Xt=e.return;Xt;)switch(Xt.tag){case 3:case 27:Ka=!0;return;case 5:case 13:Ka=!1;return;default:Xt=Xt.return}}function xr(e){if(e!==Xt)return!1;if(!Re)return Up(e),Re=!0,!1;var a=!1,i;if((i=e.tag!==3&&e.tag!==27)&&((i=e.tag===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||zd(e.type,e.memoizedProps)),i=!i),i&&(a=!0),a&&zt&&Oi(e),Up(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(i=e.data,i==="/$"){if(a===0){zt=Fa(e.nextSibling);break e}a--}else i!=="$"&&i!=="$!"&&i!=="$?"||a++;e=e.nextSibling}zt=null}}else zt=Xt?Fa(e.stateNode.nextSibling):null;return!0}function wr(){zt=Xt=null,Re=!1}function Sr(e){Pa===null?Pa=[e]:Pa.push(e)}var Er=Error(r(460)),Ip=Error(r(474)),gu={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ao(){}function Vp(e,a,i){switch(i=e[i],i===void 0?e.push(a):i!==a&&(a.then(ao,ao),a=i),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,e===Er?Error(r(483)):e;default:if(typeof a.status=="string")a.then(ao,ao);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(s){if(a.status==="pending"){var c=a;c.status="fulfilled",c.value=s}},function(s){if(a.status==="pending"){var c=a;c.status="rejected",c.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,e===Er?Error(r(483)):e}throw Cr=a,Er}}var Cr=null;function Fp(){if(Cr===null)throw Error(r(459));var e=Cr;return Cr=null,e}var wl=null,Tr=0;function no(e){var a=Tr;return Tr+=1,wl===null&&(wl=[]),Vp(wl,e,a)}function Ar(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function io(e,a){throw a.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function qp(e){var a=e._init;return a(e._payload)}function Gp(e){function a(z,N){if(e){var B=z.deletions;B===null?(z.deletions=[N],z.flags|=16):B.push(N)}}function i(z,N){if(!e)return null;for(;N!==null;)a(z,N),N=N.sibling;return null}function s(z){for(var N=new Map;z!==null;)z.key!==null?N.set(z.key,z):N.set(z.index,z),z=z.sibling;return N}function c(z,N){return z=ai(z,N),z.index=0,z.sibling=null,z}function d(z,N,B){return z.index=B,e?(B=z.alternate,B!==null?(B=B.index,B<N?(z.flags|=33554434,N):B):(z.flags|=33554434,N)):(z.flags|=1048576,N)}function v(z){return e&&z.alternate===null&&(z.flags|=33554434),z}function x(z,N,B,G){return N===null||N.tag!==6?(N=ud(B,z.mode,G),N.return=z,N):(N=c(N,B),N.return=z,N)}function E(z,N,B,G){var se=B.type;return se===g?F(z,N,B.props.children,G,B.key):N!==null&&(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===D&&qp(se)===N.type)?(N=c(N,B.props),Ar(N,B),N.return=z,N):(N=So(B.type,B.key,B.props,null,z.mode,G),Ar(N,B),N.return=z,N)}function O(z,N,B,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==B.containerInfo||N.stateNode.implementation!==B.implementation?(N=dd(B,z.mode,G),N.return=z,N):(N=c(N,B.children||[]),N.return=z,N)}function F(z,N,B,G,se){return N===null||N.tag!==7?(N=Ii(B,z.mode,G,se),N.return=z,N):(N=c(N,B),N.return=z,N)}function Y(z,N,B){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=ud(""+N,z.mode,B),N.return=z,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case f:return B=So(N.type,N.key,N.props,null,z.mode,B),Ar(B,N),B.return=z,B;case h:return N=dd(N,z.mode,B),N.return=z,N;case D:var G=N._init;return N=G(N._payload),Y(z,N,B)}if(wt(N)||W(N))return N=Ii(N,z.mode,B,null),N.return=z,N;if(typeof N.then=="function")return Y(z,no(N),B);if(N.$$typeof===y)return Y(z,_o(z,N),B);io(z,N)}return null}function P(z,N,B,G){var se=N!==null?N.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return se!==null?null:x(z,N,""+B,G);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case f:return B.key===se?E(z,N,B,G):null;case h:return B.key===se?O(z,N,B,G):null;case D:return se=B._init,B=se(B._payload),P(z,N,B,G)}if(wt(B)||W(B))return se!==null?null:F(z,N,B,G,null);if(typeof B.then=="function")return P(z,N,no(B),G);if(B.$$typeof===y)return P(z,N,_o(z,B),G);io(z,B)}return null}function V(z,N,B,G,se){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(B)||null,x(N,z,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return z=z.get(G.key===null?B:G.key)||null,E(N,z,G,se);case h:return z=z.get(G.key===null?B:G.key)||null,O(N,z,G,se);case D:var xe=G._init;return G=xe(G._payload),V(z,N,B,G,se)}if(wt(G)||W(G))return z=z.get(B)||null,F(N,z,G,se,null);if(typeof G.then=="function")return V(z,N,B,no(G),se);if(G.$$typeof===y)return V(z,N,B,_o(N,G),se);io(N,G)}return null}function ue(z,N,B,G){for(var se=null,xe=null,he=N,pe=N=0,Tt=null;he!==null&&pe<B.length;pe++){he.index>pe?(Tt=he,he=null):Tt=he.sibling;var De=P(z,he,B[pe],G);if(De===null){he===null&&(he=Tt);break}e&&he&&De.alternate===null&&a(z,he),N=d(De,N,pe),xe===null?se=De:xe.sibling=De,xe=De,he=Tt}if(pe===B.length)return i(z,he),Re&&$i(z,pe),se;if(he===null){for(;pe<B.length;pe++)he=Y(z,B[pe],G),he!==null&&(N=d(he,N,pe),xe===null?se=he:xe.sibling=he,xe=he);return Re&&$i(z,pe),se}for(he=s(he);pe<B.length;pe++)Tt=V(he,z,pe,B[pe],G),Tt!==null&&(e&&Tt.alternate!==null&&he.delete(Tt.key===null?pe:Tt.key),N=d(Tt,N,pe),xe===null?se=Tt:xe.sibling=Tt,xe=Tt);return e&&he.forEach(function(ci){return a(z,ci)}),Re&&$i(z,pe),se}function me(z,N,B,G){if(B==null)throw Error(r(151));for(var se=null,xe=null,he=N,pe=N=0,Tt=null,De=B.next();he!==null&&!De.done;pe++,De=B.next()){he.index>pe?(Tt=he,he=null):Tt=he.sibling;var ci=P(z,he,De.value,G);if(ci===null){he===null&&(he=Tt);break}e&&he&&ci.alternate===null&&a(z,he),N=d(ci,N,pe),xe===null?se=ci:xe.sibling=ci,xe=ci,he=Tt}if(De.done)return i(z,he),Re&&$i(z,pe),se;if(he===null){for(;!De.done;pe++,De=B.next())De=Y(z,De.value,G),De!==null&&(N=d(De,N,pe),xe===null?se=De:xe.sibling=De,xe=De);return Re&&$i(z,pe),se}for(he=s(he);!De.done;pe++,De=B.next())De=V(he,z,pe,De.value,G),De!==null&&(e&&De.alternate!==null&&he.delete(De.key===null?pe:De.key),N=d(De,N,pe),xe===null?se=De:xe.sibling=De,xe=De);return e&&he.forEach(function(M_){return a(z,M_)}),Re&&$i(z,pe),se}function nt(z,N,B,G){if(typeof B=="object"&&B!==null&&B.type===g&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case f:e:{for(var se=B.key;N!==null;){if(N.key===se){if(se=B.type,se===g){if(N.tag===7){i(z,N.sibling),G=c(N,B.props.children),G.return=z,z=G;break e}}else if(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===D&&qp(se)===N.type){i(z,N.sibling),G=c(N,B.props),Ar(G,B),G.return=z,z=G;break e}i(z,N);break}else a(z,N);N=N.sibling}B.type===g?(G=Ii(B.props.children,z.mode,G,B.key),G.return=z,z=G):(G=So(B.type,B.key,B.props,null,z.mode,G),Ar(G,B),G.return=z,z=G)}return v(z);case h:e:{for(se=B.key;N!==null;){if(N.key===se)if(N.tag===4&&N.stateNode.containerInfo===B.containerInfo&&N.stateNode.implementation===B.implementation){i(z,N.sibling),G=c(N,B.children||[]),G.return=z,z=G;break e}else{i(z,N);break}else a(z,N);N=N.sibling}G=dd(B,z.mode,G),G.return=z,z=G}return v(z);case D:return se=B._init,B=se(B._payload),nt(z,N,B,G)}if(wt(B))return ue(z,N,B,G);if(W(B)){if(se=W(B),typeof se!="function")throw Error(r(150));return B=se.call(B),me(z,N,B,G)}if(typeof B.then=="function")return nt(z,N,no(B),G);if(B.$$typeof===y)return nt(z,N,_o(z,B),G);io(z,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,N!==null&&N.tag===6?(i(z,N.sibling),G=c(N,B),G.return=z,z=G):(i(z,N),G=ud(B,z.mode,G),G.return=z,z=G),v(z)):i(z,N)}return function(z,N,B,G){try{Tr=0;var se=nt(z,N,B,G);return wl=null,se}catch(he){if(he===Er)throw he;var xe=Na(29,he,null,z.mode);return xe.lanes=G,xe.return=z,xe}finally{}}}var ki=Gp(!0),Yp=Gp(!1),Sl=Be(null),lo=Be(0);function Xp(e,a){e=kn,fe(lo,e),fe(Sl,a),kn=e|a.baseLanes}function vu(){fe(lo,kn),fe(Sl,Sl.current)}function bu(){kn=lo.current,Ne(Sl),Ne(lo)}var Ta=Be(null),Ja=null;function qn(e){var a=e.alternate;fe(bt,bt.current&1),fe(Ta,e),Ja===null&&(a===null||Sl.current!==null||a.memoizedState!==null)&&(Ja=e)}function Wp(e){if(e.tag===22){if(fe(bt,bt.current),fe(Ta,e),Ja===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(Ja=e)}}else Gn()}function Gn(){fe(bt,bt.current),fe(Ta,Ta.current)}function wn(e){Ne(Ta),Ja===e&&(Ja=null),Ne(bt)}var bt=Be(0);function ro(e){for(var a=e;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var m2=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(i,s){e.push(s)}};this.abort=function(){a.aborted=!0,e.forEach(function(i){return i()})}},g2=t.unstable_scheduleCallback,v2=t.unstable_NormalPriority,yt={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new m2,data:new Map,refCount:0}}function Mr(e){e.refCount--,e.refCount===0&&g2(v2,function(){e.controller.abort()})}var Nr=null,_u=0,El=0,Cl=null;function b2(e,a){if(Nr===null){var i=Nr=[];_u=0,El=Td(),Cl={status:"pending",value:void 0,then:function(s){i.push(s)}}}return _u++,a.then(Qp,Qp),a}function Qp(){if(--_u===0&&Nr!==null){Cl!==null&&(Cl.status="fulfilled");var e=Nr;Nr=null,El=0,Cl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function y2(e,a){var i=[],s={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return e.then(function(){s.status="fulfilled",s.value=a;for(var c=0;c<i.length;c++)(0,i[c])(a)},function(c){for(s.status="rejected",s.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),s}var Zp=L.S;L.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&b2(e,a),Zp!==null&&Zp(e,a)};var Ri=Be(null);function xu(){var e=Ri.current;return e!==null?e:Ye.pooledCache}function so(e,a){a===null?fe(Ri,Ri.current):fe(Ri,a.pool)}function Kp(){var e=xu();return e===null?null:{parent:yt._currentValue,pool:e}}var Yn=0,ye=null,Ie=null,ht=null,oo=!1,Tl=!1,Di=!1,co=0,$r=0,Al=null,_2=0;function ct(){throw Error(r(321))}function wu(e,a){if(a===null)return!1;for(var i=0;i<a.length&&i<e.length;i++)if(!ua(e[i],a[i]))return!1;return!0}function Su(e,a,i,s,c,d){return Yn=d,ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,L.H=e===null||e.memoizedState===null?zi:Xn,Di=!1,d=i(s,c),Di=!1,Tl&&(d=em(a,i,s,c)),Jp(e),d}function Jp(e){L.H=en;var a=Ie!==null&&Ie.next!==null;if(Yn=0,ht=Ie=ye=null,oo=!1,$r=0,Al=null,a)throw Error(r(300));e===null||Et||(e=e.dependencies,e!==null&&yo(e)&&(Et=!0))}function em(e,a,i,s){ye=e;var c=0;do{if(Tl&&(Al=null),$r=0,Tl=!1,25<=c)throw Error(r(301));if(c+=1,ht=Ie=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=Li,d=a(i,s)}while(Tl);return d}function x2(){var e=L.H,a=e.useState()[0];return a=typeof a.then=="function"?Or(a):a,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ye.flags|=1024),a}function Eu(){var e=co!==0;return co=0,e}function Cu(e,a,i){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~i}function Tu(e){if(oo){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}oo=!1}Yn=0,ht=Ie=ye=null,Tl=!1,$r=co=0,Al=null}function ia(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?ye.memoizedState=ht=e:ht=ht.next=e,ht}function pt(){if(Ie===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var a=ht===null?ye.memoizedState:ht.next;if(a!==null)ht=a,Ie=e;else{if(e===null)throw ye.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ht===null?ye.memoizedState=ht=e:ht=ht.next=e}return ht}var uo;uo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Or(e){var a=$r;return $r+=1,Al===null&&(Al=[]),e=Vp(Al,e,a),a=ye,(ht===null?a.memoizedState:ht.next)===null&&(a=a.alternate,L.H=a===null||a.memoizedState===null?zi:Xn),e}function fo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Or(e);if(e.$$typeof===y)return Pt(e)}throw Error(r(438,String(e)))}function Au(e){var a=null,i=ye.updateQueue;if(i!==null&&(a=i.memoCache),a==null){var s=ye.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(c){return c.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),i===null&&(i=uo(),ye.updateQueue=i),i.memoCache=a,i=a.data[a.index],i===void 0)for(i=a.data[a.index]=Array(e),s=0;s<e;s++)i[s]=j;return a.index++,i}function Sn(e,a){return typeof a=="function"?a(e):a}function ho(e){var a=pt();return Mu(a,Ie,e)}function Mu(e,a,i){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=i;var c=e.baseQueue,d=s.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}a.baseQueue=c=d,s.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{a=c.next;var x=v=null,E=null,O=a,F=!1;do{var Y=O.lane&-536870913;if(Y!==O.lane?($e&Y)===Y:(Yn&Y)===Y){var P=O.revertLane;if(P===0)E!==null&&(E=E.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Y===El&&(F=!0);else if((Yn&P)===P){O=O.next,P===El&&(F=!0);continue}else Y={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(x=E=Y,v=d):E=E.next=Y,ye.lanes|=P,ni|=P;Y=O.action,Di&&i(d,Y),d=O.hasEagerState?O.eagerState:i(d,Y)}else P={lane:Y,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(x=E=P,v=d):E=E.next=P,ye.lanes|=Y,ni|=Y;O=O.next}while(O!==null&&O!==a);if(E===null?v=d:E.next=x,!ua(d,e.memoizedState)&&(Et=!0,F&&(i=Cl,i!==null)))throw i;e.memoizedState=d,e.baseState=v,e.baseQueue=E,s.lastRenderedState=d}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Nu(e){var a=pt(),i=a.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var s=i.dispatch,c=i.pending,d=a.memoizedState;if(c!==null){i.pending=null;var v=c=c.next;do d=e(d,v.action),v=v.next;while(v!==c);ua(d,a.memoizedState)||(Et=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),i.lastRenderedState=d}return[d,s]}function tm(e,a,i){var s=ye,c=pt(),d=Re;if(d){if(i===void 0)throw Error(r(407));i=i()}else i=a();var v=!ua((Ie||c).memoizedState,i);if(v&&(c.memoizedState=i,Et=!0),c=c.queue,ku(im.bind(null,s,c,e),[e]),c.getSnapshot!==a||v||ht!==null&&ht.memoizedState.tag&1){if(s.flags|=2048,Ml(9,nm.bind(null,s,c,i,a),{destroy:void 0},null),Ye===null)throw Error(r(349));d||(Yn&60)!==0||am(s,a,i)}return i}function am(e,a,i){e.flags|=16384,e={getSnapshot:a,value:i},a=ye.updateQueue,a===null?(a=uo(),ye.updateQueue=a,a.stores=[e]):(i=a.stores,i===null?a.stores=[e]:i.push(e))}function nm(e,a,i,s){a.value=i,a.getSnapshot=s,lm(a)&&rm(e)}function im(e,a,i){return i(function(){lm(a)&&rm(e)})}function lm(e){var a=e.getSnapshot;e=e.value;try{var i=a();return!ua(e,i)}catch{return!0}}function rm(e){var a=Fn(e,2);a!==null&&Wt(a,e,2)}function $u(e){var a=ia();if(typeof e=="function"){var i=e;if(e=i(),Di){In(!0);try{i()}finally{In(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},a}function sm(e,a,i,s){return e.baseState=i,Mu(e,Ie,typeof s=="function"?s:Sn)}function w2(e,a,i,s,c){if(go(e))throw Error(r(485));if(e=a.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};L.T!==null?i(!0):d.isTransition=!1,s(d),i=a.pending,i===null?(d.next=a.pending=d,om(a,d)):(d.next=i.next,a.pending=i.next=d)}}function om(e,a){var i=a.action,s=a.payload,c=e.state;if(a.isTransition){var d=L.T,v={};L.T=v;try{var x=i(c,s),E=L.S;E!==null&&E(v,x),cm(e,a,x)}catch(O){Ou(e,a,O)}finally{L.T=d}}else try{d=i(c,s),cm(e,a,d)}catch(O){Ou(e,a,O)}}function cm(e,a,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){um(e,a,s)},function(s){return Ou(e,a,s)}):um(e,a,i)}function um(e,a,i){a.status="fulfilled",a.value=i,dm(a),e.state=i,a=e.pending,a!==null&&(i=a.next,i===a?e.pending=null:(i=i.next,a.next=i,om(e,i)))}function Ou(e,a,i){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=i,dm(a),a=a.next;while(a!==s)}e.action=null}function dm(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function fm(e,a){return a}function hm(e,a){if(Re){var i=Ye.formState;if(i!==null){e:{var s=ye;if(Re){if(zt){t:{for(var c=zt,d=Ka;c.nodeType!==8;){if(!d){c=null;break t}if(c=Fa(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){zt=Fa(c.nextSibling),s=c.data==="F!";break e}}Oi(s)}s=!1}s&&(a=i[0])}}return i=ia(),i.memoizedState=i.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fm,lastRenderedState:a},i.queue=s,i=Om.bind(null,ye,s),s.dispatch=i,s=$u(!1),d=ju.bind(null,ye,!1,s.queue),s=ia(),c={state:a,dispatch:null,action:e,pending:null},s.queue=c,i=w2.bind(null,ye,c,d,i),c.dispatch=i,s.memoizedState=e,[a,i,!1]}function pm(e){var a=pt();return mm(a,Ie,e)}function mm(e,a,i){a=Mu(e,a,fm)[0],e=ho(Sn)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Or(a):a;var s=pt(),c=s.queue,d=c.dispatch;return i!==s.memoizedState&&(ye.flags|=2048,Ml(9,S2.bind(null,c,i),{destroy:void 0},null)),[a,d,e]}function S2(e,a){e.action=a}function gm(e){var a=pt(),i=Ie;if(i!==null)return mm(a,i,e);pt(),a=a.memoizedState,i=pt();var s=i.queue.dispatch;return i.memoizedState=e,[a,s,!1]}function Ml(e,a,i,s){return e={tag:e,create:a,inst:i,deps:s,next:null},a=ye.updateQueue,a===null&&(a=uo(),ye.updateQueue=a),i=a.lastEffect,i===null?a.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,a.lastEffect=e),e}function vm(){return pt().memoizedState}function po(e,a,i,s){var c=ia();ye.flags|=e,c.memoizedState=Ml(1|a,i,{destroy:void 0},s===void 0?null:s)}function mo(e,a,i,s){var c=pt();s=s===void 0?null:s;var d=c.memoizedState.inst;Ie!==null&&s!==null&&wu(s,Ie.memoizedState.deps)?c.memoizedState=Ml(a,i,d,s):(ye.flags|=e,c.memoizedState=Ml(1|a,i,d,s))}function bm(e,a){po(8390656,8,e,a)}function ku(e,a){mo(2048,8,e,a)}function ym(e,a){return mo(4,2,e,a)}function _m(e,a){return mo(4,4,e,a)}function xm(e,a){if(typeof a=="function"){e=e();var i=a(e);return function(){typeof i=="function"?i():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function wm(e,a,i){i=i!=null?i.concat([e]):null,mo(4,4,xm.bind(null,a,e),i)}function Ru(){}function Sm(e,a){var i=pt();a=a===void 0?null:a;var s=i.memoizedState;return a!==null&&wu(a,s[1])?s[0]:(i.memoizedState=[e,a],e)}function Em(e,a){var i=pt();a=a===void 0?null:a;var s=i.memoizedState;if(a!==null&&wu(a,s[1]))return s[0];if(s=e(),Di){In(!0);try{e()}finally{In(!1)}}return i.memoizedState=[s,a],s}function Du(e,a,i){return i===void 0||(Yn&1073741824)!==0?e.memoizedState=a:(e.memoizedState=i,e=Tg(),ye.lanes|=e,ni|=e,i)}function Cm(e,a,i,s){return ua(i,a)?i:Sl.current!==null?(e=Du(e,i,s),ua(e,a)||(Et=!0),e):(Yn&42)===0?(Et=!0,e.memoizedState=i):(e=Tg(),ye.lanes|=e,ni|=e,a)}function Tm(e,a,i,s,c){var d=K.p;K.p=d!==0&&8>d?d:8;var v=L.T,x={};L.T=x,ju(e,!1,a,i);try{var E=c(),O=L.S;if(O!==null&&O(x,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=y2(E,s);kr(e,a,F,pa(e))}else kr(e,a,s,pa(e))}catch(Y){kr(e,a,{then:function(){},status:"rejected",reason:Y},pa())}finally{K.p=d,L.T=v}}function E2(){}function zu(e,a,i,s){if(e.tag!==5)throw Error(r(476));var c=Am(e).queue;Tm(e,c,a,Le,i===null?E2:function(){return Mm(e),i(s)})}function Am(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Le,baseState:Le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:Le},next:null};var i={};return a.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:i},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Mm(e){var a=Am(e).next.queue;kr(e,a,{},pa())}function Lu(){return Pt(Kr)}function Nm(){return pt().memoizedState}function $m(){return pt().memoizedState}function C2(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var i=pa();e=Zn(i);var s=Kn(a,e,i);s!==null&&(Wt(s,a,i),zr(s,a,i)),a={cache:yu()},e.payload=a;return}a=a.return}}function T2(e,a,i){var s=pa();i={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},go(e)?km(a,i):(i=fu(e,a,i,s),i!==null&&(Wt(i,e,s),Rm(i,a,s)))}function Om(e,a,i){var s=pa();kr(e,a,i,s)}function kr(e,a,i,s){var c={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(go(e))km(a,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var v=a.lastRenderedState,x=d(v,i);if(c.hasEagerState=!0,c.eagerState=x,ua(x,v))return Ks(e,a,c,0),Ye===null&&Zs(),!1}catch{}finally{}if(i=fu(e,a,c,s),i!==null)return Wt(i,e,s),Rm(i,a,s),!0}return!1}function ju(e,a,i,s){if(s={lane:2,revertLane:Td(),action:s,hasEagerState:!1,eagerState:null,next:null},go(e)){if(a)throw Error(r(479))}else a=fu(e,i,s,2),a!==null&&Wt(a,e,2)}function go(e){var a=e.alternate;return e===ye||a!==null&&a===ye}function km(e,a){Tl=oo=!0;var i=e.pending;i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a}function Rm(e,a,i){if((i&4194176)!==0){var s=a.lanes;s&=e.pendingLanes,i|=s,a.lanes=i,Fh(e,i)}}var en={readContext:Pt,use:fo,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct};en.useCacheRefresh=ct,en.useMemoCache=ct,en.useHostTransitionStatus=ct,en.useFormState=ct,en.useActionState=ct,en.useOptimistic=ct;var zi={readContext:Pt,use:fo,useCallback:function(e,a){return ia().memoizedState=[e,a===void 0?null:a],e},useContext:Pt,useEffect:bm,useImperativeHandle:function(e,a,i){i=i!=null?i.concat([e]):null,po(4194308,4,xm.bind(null,a,e),i)},useLayoutEffect:function(e,a){return po(4194308,4,e,a)},useInsertionEffect:function(e,a){po(4,2,e,a)},useMemo:function(e,a){var i=ia();a=a===void 0?null:a;var s=e();if(Di){In(!0);try{e()}finally{In(!1)}}return i.memoizedState=[s,a],s},useReducer:function(e,a,i){var s=ia();if(i!==void 0){var c=i(a);if(Di){In(!0);try{i(a)}finally{In(!1)}}}else c=a;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=T2.bind(null,ye,e),[s.memoizedState,e]},useRef:function(e){var a=ia();return e={current:e},a.memoizedState=e},useState:function(e){e=$u(e);var a=e.queue,i=Om.bind(null,ye,a);return a.dispatch=i,[e.memoizedState,i]},useDebugValue:Ru,useDeferredValue:function(e,a){var i=ia();return Du(i,e,a)},useTransition:function(){var e=$u(!1);return e=Tm.bind(null,ye,e.queue,!0,!1),ia().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,i){var s=ye,c=ia();if(Re){if(i===void 0)throw Error(r(407));i=i()}else{if(i=a(),Ye===null)throw Error(r(349));($e&60)!==0||am(s,a,i)}c.memoizedState=i;var d={value:i,getSnapshot:a};return c.queue=d,bm(im.bind(null,s,d,e),[e]),s.flags|=2048,Ml(9,nm.bind(null,s,d,i,a),{destroy:void 0},null),i},useId:function(){var e=ia(),a=Ye.identifierPrefix;if(Re){var i=xn,s=_n;i=(s&~(1<<32-ca(s)-1)).toString(32)+i,a=":"+a+"R"+i,i=co++,0<i&&(a+="H"+i.toString(32)),a+=":"}else i=_2++,a=":"+a+"r"+i.toString(32)+":";return e.memoizedState=a},useCacheRefresh:function(){return ia().memoizedState=C2.bind(null,ye)}};zi.useMemoCache=Au,zi.useHostTransitionStatus=Lu,zi.useFormState=hm,zi.useActionState=hm,zi.useOptimistic=function(e){var a=ia();a.memoizedState=a.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=i,a=ju.bind(null,ye,!0,i),i.dispatch=a,[e,a]};var Xn={readContext:Pt,use:fo,useCallback:Sm,useContext:Pt,useEffect:ku,useImperativeHandle:wm,useInsertionEffect:ym,useLayoutEffect:_m,useMemo:Em,useReducer:ho,useRef:vm,useState:function(){return ho(Sn)},useDebugValue:Ru,useDeferredValue:function(e,a){var i=pt();return Cm(i,Ie.memoizedState,e,a)},useTransition:function(){var e=ho(Sn)[0],a=pt().memoizedState;return[typeof e=="boolean"?e:Or(e),a]},useSyncExternalStore:tm,useId:Nm};Xn.useCacheRefresh=$m,Xn.useMemoCache=Au,Xn.useHostTransitionStatus=Lu,Xn.useFormState=pm,Xn.useActionState=pm,Xn.useOptimistic=function(e,a){var i=pt();return sm(i,Ie,e,a)};var Li={readContext:Pt,use:fo,useCallback:Sm,useContext:Pt,useEffect:ku,useImperativeHandle:wm,useInsertionEffect:ym,useLayoutEffect:_m,useMemo:Em,useReducer:Nu,useRef:vm,useState:function(){return Nu(Sn)},useDebugValue:Ru,useDeferredValue:function(e,a){var i=pt();return Ie===null?Du(i,e,a):Cm(i,Ie.memoizedState,e,a)},useTransition:function(){var e=Nu(Sn)[0],a=pt().memoizedState;return[typeof e=="boolean"?e:Or(e),a]},useSyncExternalStore:tm,useId:Nm};Li.useCacheRefresh=$m,Li.useMemoCache=Au,Li.useHostTransitionStatus=Lu,Li.useFormState=gm,Li.useActionState=gm,Li.useOptimistic=function(e,a){var i=pt();return Ie!==null?sm(i,Ie,e,a):(i.baseState=e,[e,i.queue.dispatch])};function Bu(e,a,i,s){a=e.memoizedState,i=i(s,a),i=i==null?a:q({},a,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Hu={isMounted:function(e){return(e=e._reactInternals)?ee(e)===e:!1},enqueueSetState:function(e,a,i){e=e._reactInternals;var s=pa(),c=Zn(s);c.payload=a,i!=null&&(c.callback=i),a=Kn(e,c,s),a!==null&&(Wt(a,e,s),zr(a,e,s))},enqueueReplaceState:function(e,a,i){e=e._reactInternals;var s=pa(),c=Zn(s);c.tag=1,c.payload=a,i!=null&&(c.callback=i),a=Kn(e,c,s),a!==null&&(Wt(a,e,s),zr(a,e,s))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var i=pa(),s=Zn(i);s.tag=2,a!=null&&(s.callback=a),a=Kn(e,s,i),a!==null&&(Wt(a,e,i),zr(a,e,i))}};function Dm(e,a,i,s,c,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,v):a.prototype&&a.prototype.isPureReactComponent?!yr(i,s)||!yr(c,d):!0}function zm(e,a,i,s){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,s),a.state!==e&&Hu.enqueueReplaceState(a,a.state,null)}function ji(e,a){var i=a;if("ref"in a){i={};for(var s in a)s!=="ref"&&(i[s]=a[s])}if(e=e.defaultProps){i===a&&(i=q({},i));for(var c in e)i[c]===void 0&&(i[c]=e[c])}return i}var vo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lm(e){vo(e)}function jm(e){console.error(e)}function Bm(e){vo(e)}function bo(e,a){try{var i=e.onUncaughtError;i(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function Hm(e,a,i){try{var s=e.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Uu(e,a,i){return i=Zn(i),i.tag=3,i.payload={element:null},i.callback=function(){bo(e,a)},i}function Um(e){return e=Zn(e),e.tag=3,e}function Im(e,a,i,s){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;e.payload=function(){return c(d)},e.callback=function(){Hm(a,i,s)}}var v=i.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Hm(a,i,s),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function A2(e,a,i,s,c){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=i.alternate,a!==null&&Dr(a,i,c,!0),i=Ta.current,i!==null){switch(i.tag){case 13:return Ja===null?xd():i.alternate===null&&at===0&&(at=3),i.flags&=-257,i.flags|=65536,i.lanes=c,s===gu?i.flags|=16384:(a=i.updateQueue,a===null?i.updateQueue=new Set([s]):a.add(s),Sd(e,s,c)),!1;case 22:return i.flags|=65536,s===gu?i.flags|=16384:(a=i.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=a):(i=a.retryQueue,i===null?a.retryQueue=new Set([s]):i.add(s)),Sd(e,s,c)),!1}throw Error(r(435,i.tag))}return Sd(e,s,c),xd(),!1}if(Re)return a=Ta.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=c,s!==mu&&(e=Error(r(422),{cause:s}),Sr(Sa(e,i)))):(s!==mu&&(a=Error(r(423),{cause:s}),Sr(Sa(a,i))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Sa(s,i),c=Uu(e.stateNode,s,c),td(e,c),at!==4&&(at=2)),!1;var d=Error(r(520),{cause:s});if(d=Sa(d,i),Vr===null?Vr=[d]:Vr.push(d),at!==4&&(at=2),a===null)return!0;s=Sa(s,i),i=a;do{switch(i.tag){case 3:return i.flags|=65536,e=c&-c,i.lanes|=e,e=Uu(i.stateNode,s,e),td(i,e),!1;case 1:if(a=i.type,d=i.stateNode,(i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ii===null||!ii.has(d))))return i.flags|=65536,c&=-c,i.lanes|=c,c=Um(c),Im(c,e,i,s),td(i,c),!1}i=i.return}while(i!==null);return!1}var Pm=Error(r(461)),Et=!1;function Lt(e,a,i,s){a.child=e===null?Yp(a,null,i,s):ki(a,e.child,i,s)}function Vm(e,a,i,s,c){i=i.render;var d=a.ref;if("ref"in s){var v={};for(var x in s)x!=="ref"&&(v[x]=s[x])}else v=s;return Hi(a),s=Su(e,a,i,v,d,c),x=Eu(),e!==null&&!Et?(Cu(e,a,c),En(e,a,c)):(Re&&x&&hu(a),a.flags|=1,Lt(e,a,s,c),a.child)}function Fm(e,a,i,s,c){if(e===null){var d=i.type;return typeof d=="function"&&!cd(d)&&d.defaultProps===void 0&&i.compare===null?(a.tag=15,a.type=d,qm(e,a,d,s,c)):(e=So(i.type,null,s,a,a.mode,c),e.ref=a.ref,e.return=a,a.child=e)}if(d=e.child,!Wu(e,c)){var v=d.memoizedProps;if(i=i.compare,i=i!==null?i:yr,i(v,s)&&e.ref===a.ref)return En(e,a,c)}return a.flags|=1,e=ai(d,s),e.ref=a.ref,e.return=a,a.child=e}function qm(e,a,i,s,c){if(e!==null){var d=e.memoizedProps;if(yr(d,s)&&e.ref===a.ref)if(Et=!1,a.pendingProps=s=d,Wu(e,c))(e.flags&131072)!==0&&(Et=!0);else return a.lanes=e.lanes,En(e,a,c)}return Iu(e,a,i,s,c)}function Gm(e,a,i){var s=a.pendingProps,c=s.children,d=(a.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(Rr(e,a),s.mode==="hidden"||d){if((a.flags&128)!==0){if(s=v!==null?v.baseLanes|i:i,e!==null){for(c=a.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;a.childLanes=d&~s}else a.childLanes=0,a.child=null;return Ym(e,a,s,i)}if((i&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&so(a,v!==null?v.cachePool:null),v!==null?Xp(a,v):vu(),Wp(a);else return a.lanes=a.childLanes=536870912,Ym(e,a,v!==null?v.baseLanes|i:i,i)}else v!==null?(so(a,v.cachePool),Xp(a,v),Gn(),a.memoizedState=null):(e!==null&&so(a,null),vu(),Gn());return Lt(e,a,c,i),a.child}function Ym(e,a,i,s){var c=xu();return c=c===null?null:{parent:yt._currentValue,pool:c},a.memoizedState={baseLanes:i,cachePool:c},e!==null&&so(a,null),vu(),Wp(a),e!==null&&Dr(e,a,s,!0),null}function Rr(e,a){var i=a.ref;if(i===null)e!==null&&e.ref!==null&&(a.flags|=2097664);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(e===null||e.ref!==i)&&(a.flags|=2097664)}}function Iu(e,a,i,s,c){return Hi(a),i=Su(e,a,i,s,void 0,c),s=Eu(),e!==null&&!Et?(Cu(e,a,c),En(e,a,c)):(Re&&s&&hu(a),a.flags|=1,Lt(e,a,i,c),a.child)}function Xm(e,a,i,s,c,d){return Hi(a),a.updateQueue=null,i=em(a,s,i,c),Jp(e),s=Eu(),e!==null&&!Et?(Cu(e,a,d),En(e,a,d)):(Re&&s&&hu(a),a.flags|=1,Lt(e,a,i,d),a.child)}function Wm(e,a,i,s,c){if(Hi(a),a.stateNode===null){var d=yl,v=i.contextType;typeof v=="object"&&v!==null&&(d=Pt(v)),d=new i(s,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Hu,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=s,d.state=a.memoizedState,d.refs={},Ju(a),v=i.contextType,d.context=typeof v=="object"&&v!==null?Pt(v):yl,d.state=a.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Bu(a,i,v,s),d.state=a.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Hu.enqueueReplaceState(d,d.state,null),jr(a,s,d,c),Lr(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(e===null){d=a.stateNode;var x=a.memoizedProps,E=ji(i,x);d.props=E;var O=d.context,F=i.contextType;v=yl,typeof F=="object"&&F!==null&&(v=Pt(F));var Y=i.getDerivedStateFromProps;F=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",x=a.pendingProps!==x,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x||O!==v)&&zm(a,d,s,v),Qn=!1;var P=a.memoizedState;d.state=P,jr(a,s,d,c),Lr(),O=a.memoizedState,x||P!==O||Qn?(typeof Y=="function"&&(Bu(a,i,Y,s),O=a.memoizedState),(E=Qn||Dm(a,i,E,s,P,O,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=O),d.props=s,d.state=O,d.context=v,s=E):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{d=a.stateNode,ed(e,a),v=a.memoizedProps,F=ji(i,v),d.props=F,Y=a.pendingProps,P=d.context,O=i.contextType,E=yl,typeof O=="object"&&O!==null&&(E=Pt(O)),x=i.getDerivedStateFromProps,(O=typeof x=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||P!==E)&&zm(a,d,s,E),Qn=!1,P=a.memoizedState,d.state=P,jr(a,s,d,c),Lr();var V=a.memoizedState;v!==Y||P!==V||Qn||e!==null&&e.dependencies!==null&&yo(e.dependencies)?(typeof x=="function"&&(Bu(a,i,x,s),V=a.memoizedState),(F=Qn||Dm(a,i,F,s,P,V,E)||e!==null&&e.dependencies!==null&&yo(e.dependencies))?(O||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,V,E),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,V,E)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=V),d.props=s,d.state=V,d.context=E,s=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),s=!1)}return d=s,Rr(e,a),s=(a.flags&128)!==0,d||s?(d=a.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,e!==null&&s?(a.child=ki(a,e.child,null,c),a.child=ki(a,null,i,c)):Lt(e,a,i,c),a.memoizedState=d.state,e=a.child):e=En(e,a,c),e}function Qm(e,a,i,s){return wr(),a.flags|=256,Lt(e,a,i,s),a.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Vu(e){return{baseLanes:e,cachePool:Kp()}}function Fu(e,a,i){return e=e!==null?e.childLanes&~i:0,a&&(e|=$a),e}function Zm(e,a,i){var s=a.pendingProps,c=!1,d=(a.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(bt.current&2)!==0),v&&(c=!0,a.flags&=-129),v=(a.flags&32)!==0,a.flags&=-33,e===null){if(Re){if(c?qn(a):Gn(),Re){var x=zt,E;if(E=x){e:{for(E=x,x=Ka;E.nodeType!==8;){if(!x){x=null;break e}if(E=Fa(E.nextSibling),E===null){x=null;break e}}x=E}x!==null?(a.memoizedState={dehydrated:x,treeContext:Ni!==null?{id:_n,overflow:xn}:null,retryLane:536870912},E=Na(18,null,null,0),E.stateNode=x,E.return=a,a.child=E,Xt=a,zt=null,E=!0):E=!1}E||Oi(a)}if(x=a.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return x.data==="$!"?a.lanes=16:a.lanes=536870912,null;wn(a)}return x=s.children,s=s.fallback,c?(Gn(),c=a.mode,x=Gu({mode:"hidden",children:x},c),s=Ii(s,c,i,null),x.return=a,s.return=a,x.sibling=s,a.child=x,c=a.child,c.memoizedState=Vu(i),c.childLanes=Fu(e,v,i),a.memoizedState=Pu,s):(qn(a),qu(a,x))}if(E=e.memoizedState,E!==null&&(x=E.dehydrated,x!==null)){if(d)a.flags&256?(qn(a),a.flags&=-257,a=Yu(e,a,i)):a.memoizedState!==null?(Gn(),a.child=e.child,a.flags|=128,a=null):(Gn(),c=s.fallback,x=a.mode,s=Gu({mode:"visible",children:s.children},x),c=Ii(c,x,i,null),c.flags|=2,s.return=a,c.return=a,s.sibling=c,a.child=s,ki(a,e.child,null,i),s=a.child,s.memoizedState=Vu(i),s.childLanes=Fu(e,v,i),a.memoizedState=Pu,a=c);else if(qn(a),x.data==="$!"){if(v=x.nextSibling&&x.nextSibling.dataset,v)var O=v.dgst;v=O,s=Error(r(419)),s.stack="",s.digest=v,Sr({value:s,source:null,stack:null}),a=Yu(e,a,i)}else if(Et||Dr(e,a,i,!1),v=(i&e.childLanes)!==0,Et||v){if(v=Ye,v!==null){if(s=i&-i,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(v.suspendedLanes|i))!==0?0:s,s!==0&&s!==E.retryLane)throw E.retryLane=s,Fn(e,s),Wt(v,e,s),Pm}x.data==="$?"||xd(),a=Yu(e,a,i)}else x.data==="$?"?(a.flags|=128,a.child=e.child,a=P2.bind(null,e),x._reactRetry=a,a=null):(e=E.treeContext,zt=Fa(x.nextSibling),Xt=a,Re=!0,Pa=null,Ka=!1,e!==null&&(Ea[Ca++]=_n,Ea[Ca++]=xn,Ea[Ca++]=Ni,_n=e.id,xn=e.overflow,Ni=a),a=qu(a,s.children),a.flags|=4096);return a}return c?(Gn(),c=s.fallback,x=a.mode,E=e.child,O=E.sibling,s=ai(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&31457280,O!==null?c=ai(O,c):(c=Ii(c,x,i,null),c.flags|=2),c.return=a,s.return=a,s.sibling=c,a.child=s,s=c,c=a.child,x=e.child.memoizedState,x===null?x=Vu(i):(E=x.cachePool,E!==null?(O=yt._currentValue,E=E.parent!==O?{parent:O,pool:O}:E):E=Kp(),x={baseLanes:x.baseLanes|i,cachePool:E}),c.memoizedState=x,c.childLanes=Fu(e,v,i),a.memoizedState=Pu,s):(qn(a),i=e.child,e=i.sibling,i=ai(i,{mode:"visible",children:s.children}),i.return=a,i.sibling=null,e!==null&&(v=a.deletions,v===null?(a.deletions=[e],a.flags|=16):v.push(e)),a.child=i,a.memoizedState=null,i)}function qu(e,a){return a=Gu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Gu(e,a){return Sg(e,a,0,null)}function Yu(e,a,i){return ki(a,e.child,null,i),e=qu(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Km(e,a,i){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a),Zu(e.return,a,i)}function Xu(e,a,i,s,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=i,d.tailMode=c)}function Jm(e,a,i){var s=a.pendingProps,c=s.revealOrder,d=s.tail;if(Lt(e,a,s.children,i),s=bt.current,(s&2)!==0)s=s&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Km(e,i,a);else if(e.tag===19)Km(e,i,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(fe(bt,s),c){case"forwards":for(i=a.child,c=null;i!==null;)e=i.alternate,e!==null&&ro(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=a.child,a.child=null):(c=i.sibling,i.sibling=null),Xu(a,!1,c,i,d);break;case"backwards":for(i=null,c=a.child,a.child=null;c!==null;){if(e=c.alternate,e!==null&&ro(e)===null){a.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Xu(a,!0,i,null,d);break;case"together":Xu(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function En(e,a,i){if(e!==null&&(a.dependencies=e.dependencies),ni|=a.lanes,(i&a.childLanes)===0)if(e!==null){if(Dr(e,a,i,!1),(i&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,i=ai(e,e.pendingProps),a.child=i,i.return=a;e.sibling!==null;)e=e.sibling,i=i.sibling=ai(e,e.pendingProps),i.return=a;i.sibling=null}return a.child}function Wu(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&yo(e)))}function M2(e,a,i){switch(a.tag){case 3:Ds(a,a.stateNode.containerInfo),Wn(a,yt,e.memoizedState.cache),wr();break;case 27:case 5:Hc(a);break;case 4:Ds(a,a.stateNode.containerInfo);break;case 10:Wn(a,a.type,a.memoizedProps.value);break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(qn(a),a.flags|=128,null):(i&a.child.childLanes)!==0?Zm(e,a,i):(qn(a),e=En(e,a,i),e!==null?e.sibling:null);qn(a);break;case 19:var c=(e.flags&128)!==0;if(s=(i&a.childLanes)!==0,s||(Dr(e,a,i,!1),s=(i&a.childLanes)!==0),c){if(s)return Jm(e,a,i);a.flags|=128}if(c=a.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),fe(bt,bt.current),s)break;return null;case 22:case 23:return a.lanes=0,Gm(e,a,i);case 24:Wn(a,yt,e.memoizedState.cache)}return En(e,a,i)}function eg(e,a,i){if(e!==null)if(e.memoizedProps!==a.pendingProps)Et=!0;else{if(!Wu(e,i)&&(a.flags&128)===0)return Et=!1,M2(e,a,i);Et=(e.flags&131072)!==0}else Et=!1,Re&&(a.flags&1048576)!==0&&Bp(a,to,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var s=a.elementType,c=s._init;if(s=c(s._payload),a.type=s,typeof s=="function")cd(s)?(e=ji(s,e),a.tag=1,a=Wm(null,a,s,e,i)):(a.tag=0,a=Iu(null,a,s,e,i));else{if(s!=null){if(c=s.$$typeof,c===S){a.tag=11,a=Vm(null,a,s,e,i);break e}else if(c===C){a.tag=14,a=Fm(null,a,s,e,i);break e}}throw a=oe(s)||s,Error(r(306,a,""))}}return a;case 0:return Iu(e,a,a.type,a.pendingProps,i);case 1:return s=a.type,c=ji(s,a.pendingProps),Wm(e,a,s,c,i);case 3:e:{if(Ds(a,a.stateNode.containerInfo),e===null)throw Error(r(387));var d=a.pendingProps;c=a.memoizedState,s=c.element,ed(e,a),jr(a,d,null,i);var v=a.memoizedState;if(d=v.cache,Wn(a,yt,d),d!==c.cache&&Ku(a,[yt],i,!0),Lr(),d=v.element,c.isDehydrated)if(c={element:d,isDehydrated:!1,cache:v.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=Qm(e,a,d,i);break e}else if(d!==s){s=Sa(Error(r(424)),a),Sr(s),a=Qm(e,a,d,i);break e}else for(zt=Fa(a.stateNode.containerInfo.firstChild),Xt=a,Re=!0,Pa=null,Ka=!0,i=Yp(a,null,d,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(wr(),d===s){a=En(e,a,i);break e}Lt(e,a,d,i)}a=a.child}return a;case 26:return Rr(e,a),e===null?(i=nv(a.type,null,a.pendingProps,null))?a.memoizedState=i:Re||(i=a.type,e=a.pendingProps,s=zo(Fe.current).createElement(i),s[It]=a,s[aa]=e,jt(s,i,e),St(s),a.stateNode=s):a.memoizedState=nv(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Hc(a),e===null&&Re&&(s=a.stateNode=ev(a.type,a.pendingProps,Fe.current),Xt=a,Ka=!0,zt=Fa(s.firstChild)),s=a.pendingProps.children,e!==null||Re?Lt(e,a,s,i):a.child=ki(a,null,s,i),Rr(e,a),a.child;case 5:return e===null&&Re&&((c=s=zt)&&(s=i_(s,a.type,a.pendingProps,Ka),s!==null?(a.stateNode=s,Xt=a,zt=Fa(s.firstChild),Ka=!1,c=!0):c=!1),c||Oi(a)),Hc(a),c=a.type,d=a.pendingProps,v=e!==null?e.memoizedProps:null,s=d.children,zd(c,d)?s=null:v!==null&&zd(c,v)&&(a.flags|=32),a.memoizedState!==null&&(c=Su(e,a,x2,null,null,i),Kr._currentValue=c),Rr(e,a),Lt(e,a,s,i),a.child;case 6:return e===null&&Re&&((e=i=zt)&&(i=l_(i,a.pendingProps,Ka),i!==null?(a.stateNode=i,Xt=a,zt=null,e=!0):e=!1),e||Oi(a)),null;case 13:return Zm(e,a,i);case 4:return Ds(a,a.stateNode.containerInfo),s=a.pendingProps,e===null?a.child=ki(a,null,s,i):Lt(e,a,s,i),a.child;case 11:return Vm(e,a,a.type,a.pendingProps,i);case 7:return Lt(e,a,a.pendingProps,i),a.child;case 8:return Lt(e,a,a.pendingProps.children,i),a.child;case 12:return Lt(e,a,a.pendingProps.children,i),a.child;case 10:return s=a.pendingProps,Wn(a,a.type,s.value),Lt(e,a,s.children,i),a.child;case 9:return c=a.type._context,s=a.pendingProps.children,Hi(a),c=Pt(c),s=s(c),a.flags|=1,Lt(e,a,s,i),a.child;case 14:return Fm(e,a,a.type,a.pendingProps,i);case 15:return qm(e,a,a.type,a.pendingProps,i);case 19:return Jm(e,a,i);case 22:return Gm(e,a,i);case 24:return Hi(a),s=Pt(yt),e===null?(c=xu(),c===null&&(c=Ye,d=yu(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=i),c=d),a.memoizedState={parent:s,cache:c},Ju(a),Wn(a,yt,c)):((e.lanes&i)!==0&&(ed(e,a),jr(a,null,null,i),Lr()),c=e.memoizedState,d=a.memoizedState,c.parent!==s?(c={parent:s,cache:s},a.memoizedState=c,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=c),Wn(a,yt,s)):(s=d.cache,Wn(a,yt,s),s!==c.cache&&Ku(a,[yt],i,!0))),Lt(e,a,a.pendingProps.children,i),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}var Qu=Be(null),Bi=null,Cn=null;function Wn(e,a,i){fe(Qu,a._currentValue),a._currentValue=i}function Tn(e){e._currentValue=Qu.current,Ne(Qu)}function Zu(e,a,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),e===i)break;e=e.return}}function Ku(e,a,i,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;e:for(;d!==null;){var x=d;d=c;for(var E=0;E<a.length;E++)if(x.context===a[E]){d.lanes|=i,x=d.alternate,x!==null&&(x.lanes|=i),Zu(d.return,i,e),s||(v=null);break e}d=x.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=i,d=v.alternate,d!==null&&(d.lanes|=i),Zu(v,i,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Dr(e,a,i,s){e=null;for(var c=a,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var x=c.type;ua(c.pendingProps.value,v.value)||(e!==null?e.push(x):e=[x])}}else if(c===Rs.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Kr):e=[Kr])}c=c.return}e!==null&&Ku(a,e,i,s),a.flags|=262144}function yo(e){for(e=e.firstContext;e!==null;){if(!ua(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hi(e){Bi=e,Cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pt(e){return tg(Bi,e)}function _o(e,a){return Bi===null&&Hi(e),tg(e,a)}function tg(e,a){var i=a._currentValue;if(a={context:a,memoizedValue:i,next:null},Cn===null){if(e===null)throw Error(r(308));Cn=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Cn=Cn.next=a;return i}var Qn=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ed(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,a,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(et&2)!==0){var c=s.pending;return c===null?a.next=a:(a.next=c.next,c.next=a),s.pending=a,a=Js(e),Lp(e,null,i),a}return Ks(e,s,a,i),Js(e)}function zr(e,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194176)!==0)){var s=a.lanes;s&=e.pendingLanes,i|=s,a.lanes=i,Fh(e,i)}}function td(e,a){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var v={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,i=i.next}while(i!==null);d===null?c=d=a:d=d.next=a}else c=d=a;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=a:e.next=a,i.lastBaseUpdate=a}var ad=!1;function Lr(){if(ad){var e=Cl;if(e!==null)throw e}}function jr(e,a,i,s){ad=!1;var c=e.updateQueue;Qn=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var E=x,O=E.next;E.next=null,v===null?d=O:v.next=O,v=E;var F=e.alternate;F!==null&&(F=F.updateQueue,x=F.lastBaseUpdate,x!==v&&(x===null?F.firstBaseUpdate=O:x.next=O,F.lastBaseUpdate=E))}if(d!==null){var Y=c.baseState;v=0,F=O=E=null,x=d;do{var P=x.lane&-536870913,V=P!==x.lane;if(V?($e&P)===P:(s&P)===P){P!==0&&P===El&&(ad=!0),F!==null&&(F=F.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ue=e,me=x;P=a;var nt=i;switch(me.tag){case 1:if(ue=me.payload,typeof ue=="function"){Y=ue.call(nt,Y,P);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=me.payload,P=typeof ue=="function"?ue.call(nt,Y,P):ue,P==null)break e;Y=q({},Y,P);break e;case 2:Qn=!0}}P=x.callback,P!==null&&(e.flags|=64,V&&(e.flags|=8192),V=c.callbacks,V===null?c.callbacks=[P]:V.push(P))}else V={lane:P,tag:x.tag,payload:x.payload,callback:x.callback,next:null},F===null?(O=F=V,E=Y):F=F.next=V,v|=P;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;V=x,x=V.next,V.next=null,c.lastBaseUpdate=V,c.shared.pending=null}}while(!0);F===null&&(E=Y),c.baseState=E,c.firstBaseUpdate=O,c.lastBaseUpdate=F,d===null&&(c.shared.lanes=0),ni|=v,e.lanes=v,e.memoizedState=Y}}function ag(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function ng(e,a){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)ag(i[e],a)}function Br(e,a){try{var i=a.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&e)===e){s=void 0;var d=i.create,v=i.inst;s=d(),v.destroy=s}i=i.next}while(i!==c)}}catch(x){qe(a,a.return,x)}}function Jn(e,a,i){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var d=c.next;s=d;do{if((s.tag&e)===e){var v=s.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,c=a;var E=i;try{x()}catch(O){qe(c,E,O)}}}s=s.next}while(s!==d)}}catch(O){qe(a,a.return,O)}}function ig(e){var a=e.updateQueue;if(a!==null){var i=e.stateNode;try{ng(a,i)}catch(s){qe(e,e.return,s)}}}function lg(e,a,i){i.props=ji(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(s){qe(e,a,s)}}function Ui(e,a){try{var i=e.ref;if(i!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof i=="function"?e.refCleanup=i(c):i.current=c}}catch(d){qe(e,a,d)}}function da(e,a){var i=e.ref,s=e.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(c){qe(e,a,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){qe(e,a,c)}else i.current=null}function rg(e){var a=e.type,i=e.memoizedProps,s=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(c){qe(e,e.return,c)}}function sg(e,a,i){try{var s=e.stateNode;J2(s,e.type,i,a),s[aa]=a}catch(c){qe(e,e.return,c)}}function og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,a,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?i.nodeType===8?i.parentNode.insertBefore(e,a):i.insertBefore(e,a):(i.nodeType===8?(a=i.parentNode,a.insertBefore(e,i)):(a=i,a.appendChild(e)),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=Do));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(id(e,a,i),e=e.sibling;e!==null;)id(e,a,i),e=e.sibling}function xo(e,a,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?i.insertBefore(e,a):i.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(xo(e,a,i),e=e.sibling;e!==null;)xo(e,a,i),e=e.sibling}var An=!1,tt=!1,ld=!1,cg=typeof WeakSet=="function"?WeakSet:Set,Ct=null,ug=!1;function N2(e,a){if(e=e.containerInfo,Rd=Io,e=Ap(e),su(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var v=0,x=-1,E=-1,O=0,F=0,Y=e,P=null;t:for(;;){for(var V;Y!==i||c!==0&&Y.nodeType!==3||(x=v+c),Y!==d||s!==0&&Y.nodeType!==3||(E=v+s),Y.nodeType===3&&(v+=Y.nodeValue.length),(V=Y.firstChild)!==null;)P=Y,Y=V;for(;;){if(Y===e)break t;if(P===i&&++O===c&&(x=v),P===d&&++F===s&&(E=v),(V=Y.nextSibling)!==null)break;Y=P,P=Y.parentNode}Y=V}i=x===-1||E===-1?null:{start:x,end:E}}else i=null}i=i||{start:0,end:0}}else i=null;for(Dd={focusedElem:e,selectionRange:i},Io=!1,Ct=a;Ct!==null;)if(a=Ct,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ct=e;else for(;Ct!==null;){switch(a=Ct,d=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,i=a,c=d.memoizedProps,d=d.memoizedState,s=i.stateNode;try{var ue=ji(i.type,c,i.elementType===i.type);e=s.getSnapshotBeforeUpdate(ue,d),s.__reactInternalSnapshotBeforeUpdate=e}catch(me){qe(i,i.return,me)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,i=e.nodeType,i===9)Bd(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,Ct=e;break}Ct=a.return}return ue=ug,ug=!1,ue}function dg(e,a,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Nn(e,i),s&4&&Br(5,i);break;case 1:if(Nn(e,i),s&4)if(e=i.stateNode,a===null)try{e.componentDidMount()}catch(x){qe(i,i.return,x)}else{var c=ji(i.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(c,a,e.__reactInternalSnapshotBeforeUpdate)}catch(x){qe(i,i.return,x)}}s&64&&ig(i),s&512&&Ui(i,i.return);break;case 3:if(Nn(e,i),s&64&&(s=i.updateQueue,s!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{ng(s,e)}catch(x){qe(i,i.return,x)}}break;case 26:Nn(e,i),s&512&&Ui(i,i.return);break;case 27:case 5:Nn(e,i),a===null&&s&4&&rg(i),s&512&&Ui(i,i.return);break;case 12:Nn(e,i);break;case 13:Nn(e,i),s&4&&pg(e,i);break;case 22:if(c=i.memoizedState!==null||An,!c){a=a!==null&&a.memoizedState!==null||tt;var d=An,v=tt;An=c,(tt=a)&&!v?ei(e,i,(i.subtreeFlags&8772)!==0):Nn(e,i),An=d,tt=v}s&512&&(i.memoizedProps.mode==="manual"?Ui(i,i.return):da(i,i.return));break;default:Nn(e,i)}}function fg(e){var a=e.alternate;a!==null&&(e.alternate=null,fg(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&qc(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mt=null,fa=!1;function Mn(e,a,i){for(i=i.child;i!==null;)hg(e,a,i),i=i.sibling}function hg(e,a,i){if(oa&&typeof oa.onCommitFiberUnmount=="function")try{oa.onCommitFiberUnmount(sr,i)}catch{}switch(i.tag){case 26:tt||da(i,a),Mn(e,a,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:tt||da(i,a);var s=mt,c=fa;for(mt=i.stateNode,Mn(e,a,i),i=i.stateNode,a=i.attributes;a.length;)i.removeAttributeNode(a[0]);qc(i),mt=s,fa=c;break;case 5:tt||da(i,a);case 6:c=mt;var d=fa;if(mt=null,Mn(e,a,i),mt=c,fa=d,mt!==null)if(fa)try{e=mt,s=i.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(v){qe(i,a,v)}else try{mt.removeChild(i.stateNode)}catch(v){qe(i,a,v)}break;case 18:mt!==null&&(fa?(a=mt,i=i.stateNode,a.nodeType===8?jd(a.parentNode,i):a.nodeType===1&&jd(a,i),as(a)):jd(mt,i.stateNode));break;case 4:s=mt,c=fa,mt=i.stateNode.containerInfo,fa=!0,Mn(e,a,i),mt=s,fa=c;break;case 0:case 11:case 14:case 15:tt||Jn(2,i,a),tt||Jn(4,i,a),Mn(e,a,i);break;case 1:tt||(da(i,a),s=i.stateNode,typeof s.componentWillUnmount=="function"&&lg(i,a,s)),Mn(e,a,i);break;case 21:Mn(e,a,i);break;case 22:tt||da(i,a),tt=(s=tt)||i.memoizedState!==null,Mn(e,a,i),tt=s;break;default:Mn(e,a,i)}}function pg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{as(e)}catch(i){qe(a,a.return,i)}}function $2(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new cg),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new cg),a;default:throw Error(r(435,e.tag))}}function rd(e,a){var i=$2(e);a.forEach(function(s){var c=V2.bind(null,e,s);i.has(s)||(i.add(s),s.then(c,c))})}function Aa(e,a){var i=a.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s],d=e,v=a,x=v;e:for(;x!==null;){switch(x.tag){case 27:case 5:mt=x.stateNode,fa=!1;break e;case 3:mt=x.stateNode.containerInfo,fa=!0;break e;case 4:mt=x.stateNode.containerInfo,fa=!0;break e}x=x.return}if(mt===null)throw Error(r(160));hg(d,v,c),mt=null,fa=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)mg(a,e),a=a.sibling}var Va=null;function mg(e,a){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Aa(a,e),Ma(e),s&4&&(Jn(3,e,e.return),Br(3,e),Jn(5,e,e.return));break;case 1:Aa(a,e),Ma(e),s&512&&(tt||i===null||da(i,i.return)),s&64&&An&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var c=Va;if(Aa(a,e),Ma(e),s&512&&(tt||i===null||da(i,i.return)),s&4){var d=i!==null?i.memoizedState:null;if(s=e.memoizedState,i===null)if(s===null)if(e.stateNode===null){e:{s=e.type,i=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ur]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(s),c.head.insertBefore(d,c.querySelector("head > title"))),jt(d,s,i),d[It]=e,St(d),s=d;break e;case"link":var v=rv("link","href",c).get(s+(i.href||""));if(v){for(var x=0;x<v.length;x++)if(d=v[x],d.getAttribute("href")===(i.href==null?null:i.href)&&d.getAttribute("rel")===(i.rel==null?null:i.rel)&&d.getAttribute("title")===(i.title==null?null:i.title)&&d.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){v.splice(x,1);break t}}d=c.createElement(s),jt(d,s,i),c.head.appendChild(d);break;case"meta":if(v=rv("meta","content",c).get(s+(i.content||""))){for(x=0;x<v.length;x++)if(d=v[x],d.getAttribute("content")===(i.content==null?null:""+i.content)&&d.getAttribute("name")===(i.name==null?null:i.name)&&d.getAttribute("property")===(i.property==null?null:i.property)&&d.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&d.getAttribute("charset")===(i.charSet==null?null:i.charSet)){v.splice(x,1);break t}}d=c.createElement(s),jt(d,s,i),c.head.appendChild(d);break;default:throw Error(r(468,s))}d[It]=e,St(d),s=d}e.stateNode=s}else sv(c,e.type,e.stateNode);else e.stateNode=lv(c,s,e.memoizedProps);else d!==s?(d===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):d.count--,s===null?sv(c,e.type,e.stateNode):lv(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&sg(e,e.memoizedProps,i.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){c=e.stateNode,d=e.memoizedProps;try{for(var E=c.firstChild;E;){var O=E.nextSibling,F=E.nodeName;E[ur]||F==="HEAD"||F==="BODY"||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||c.removeChild(E),E=O}for(var Y=e.type,P=c.attributes;P.length;)c.removeAttributeNode(P[0]);jt(c,Y,d),c[It]=e,c[aa]=d}catch(ue){qe(e,e.return,ue)}}case 5:if(Aa(a,e),Ma(e),s&512&&(tt||i===null||da(i,i.return)),e.flags&32){c=e.stateNode;try{fl(c,"")}catch(ue){qe(e,e.return,ue)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,sg(e,c,i!==null?i.memoizedProps:c)),s&1024&&(ld=!0);break;case 6:if(Aa(a,e),Ma(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,i=e.stateNode;try{i.nodeValue=s}catch(ue){qe(e,e.return,ue)}}break;case 3:if(Bo=null,c=Va,Va=Lo(a.containerInfo),Aa(a,e),Va=c,Ma(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{as(a.containerInfo)}catch(ue){qe(e,e.return,ue)}ld&&(ld=!1,gg(e));break;case 4:s=Va,Va=Lo(e.stateNode.containerInfo),Aa(a,e),Ma(e),Va=s;break;case 12:Aa(a,e),Ma(e);break;case 13:Aa(a,e),Ma(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(md=Za()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,rd(e,s)));break;case 22:if(s&512&&(tt||i===null||da(i,i.return)),E=e.memoizedState!==null,O=i!==null&&i.memoizedState!==null,F=An,Y=tt,An=F||E,tt=Y||O,Aa(a,e),tt=Y,An=F,Ma(e),a=e.stateNode,a._current=e,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,s&8192&&(a._visibility=E?a._visibility&-2:a._visibility|1,E&&(a=An||tt,i===null||O||a||Nl(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(i=null,a=e;;){if(a.tag===5||a.tag===26||a.tag===27){if(i===null){O=i=a;try{if(c=O.stateNode,E)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=O.stateNode,x=O.memoizedProps.style;var V=x!=null&&x.hasOwnProperty("display")?x.display:null;v.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(ue){qe(O,O.return,ue)}}}else if(a.tag===6){if(i===null){O=a;try{O.stateNode.nodeValue=E?"":O.memoizedProps}catch(ue){qe(O,O.return,ue)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;i===a&&(i=null),a=a.return}i===a&&(i=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=e.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,rd(e,i))));break;case 19:Aa(a,e),Ma(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,rd(e,s)));break;case 21:break;default:Aa(a,e),Ma(e)}}function Ma(e){var a=e.flags;if(a&2){try{if(e.tag!==27){e:{for(var i=e.return;i!==null;){if(og(i)){var s=i;break e}i=i.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,d=nd(e);xo(e,d,c);break;case 5:var v=s.stateNode;s.flags&32&&(fl(v,""),s.flags&=-33);var x=nd(e);xo(e,x,v);break;case 3:case 4:var E=s.stateNode.containerInfo,O=nd(e);id(e,O,E);break;default:throw Error(r(161))}}}catch(F){qe(e,e.return,F)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;gg(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Nn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)dg(e,a.alternate,a),a=a.sibling}function Nl(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Jn(4,a,a.return),Nl(a);break;case 1:da(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&lg(a,a.return,i),Nl(a);break;case 26:case 27:case 5:da(a,a.return),Nl(a);break;case 22:da(a,a.return),a.memoizedState===null&&Nl(a);break;default:Nl(a)}e=e.sibling}}function ei(e,a,i){for(i=i&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,c=e,d=a,v=d.flags;switch(d.tag){case 0:case 11:case 15:ei(c,d,i),Br(4,d);break;case 1:if(ei(c,d,i),s=d,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(O){qe(s,s.return,O)}if(s=d,c=s.updateQueue,c!==null){var x=s.stateNode;try{var E=c.shared.hiddenCallbacks;if(E!==null)for(c.shared.hiddenCallbacks=null,c=0;c<E.length;c++)ag(E[c],x)}catch(O){qe(s,s.return,O)}}i&&v&64&&ig(d),Ui(d,d.return);break;case 26:case 27:case 5:ei(c,d,i),i&&s===null&&v&4&&rg(d),Ui(d,d.return);break;case 12:ei(c,d,i);break;case 13:ei(c,d,i),i&&v&4&&pg(c,d);break;case 22:d.memoizedState===null&&ei(c,d,i),Ui(d,d.return);break;default:ei(c,d,i)}a=a.sibling}}function sd(e,a){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Mr(i))}function od(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Mr(e))}function ti(e,a,i,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)vg(e,a,i,s),a=a.sibling}function vg(e,a,i,s){var c=a.flags;switch(a.tag){case 0:case 11:case 15:ti(e,a,i,s),c&2048&&Br(9,a);break;case 3:ti(e,a,i,s),c&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Mr(e)));break;case 12:if(c&2048){ti(e,a,i,s),e=a.stateNode;try{var d=a.memoizedProps,v=d.id,x=d.onPostCommit;typeof x=="function"&&x(v,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){qe(a,a.return,E)}}else ti(e,a,i,s);break;case 23:break;case 22:d=a.stateNode,a.memoizedState!==null?d._visibility&4?ti(e,a,i,s):Hr(e,a):d._visibility&4?ti(e,a,i,s):(d._visibility|=4,$l(e,a,i,s,(a.subtreeFlags&10256)!==0)),c&2048&&sd(a.alternate,a);break;case 24:ti(e,a,i,s),c&2048&&od(a.alternate,a);break;default:ti(e,a,i,s)}}function $l(e,a,i,s,c){for(c=c&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var d=e,v=a,x=i,E=s,O=v.flags;switch(v.tag){case 0:case 11:case 15:$l(d,v,x,E,c),Br(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&4?$l(d,v,x,E,c):Hr(d,v):(F._visibility|=4,$l(d,v,x,E,c)),c&&O&2048&&sd(v.alternate,v);break;case 24:$l(d,v,x,E,c),c&&O&2048&&od(v.alternate,v);break;default:$l(d,v,x,E,c)}a=a.sibling}}function Hr(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var i=e,s=a,c=s.flags;switch(s.tag){case 22:Hr(i,s),c&2048&&sd(s.alternate,s);break;case 24:Hr(i,s),c&2048&&od(s.alternate,s);break;default:Hr(i,s)}a=a.sibling}}var Ur=8192;function Ol(e){if(e.subtreeFlags&Ur)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 26:Ol(e),e.flags&Ur&&e.memoizedState!==null&&b_(Va,e.memoizedState,e.memoizedProps);break;case 5:Ol(e);break;case 3:case 4:var a=Va;Va=Lo(e.stateNode.containerInfo),Ol(e),Va=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ur,Ur=16777216,Ol(e),Ur=a):Ol(e));break;default:Ol(e)}}function yg(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Ir(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var s=a[i];Ct=s,xg(s,e)}yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_g(e),e=e.sibling}function _g(e){switch(e.tag){case 0:case 11:case 15:Ir(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:Ir(e);break;case 12:Ir(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&4&&(e.return===null||e.return.tag!==13)?(a._visibility&=-5,wo(e)):Ir(e);break;default:Ir(e)}}function wo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var s=a[i];Ct=s,xg(s,e)}yg(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Jn(8,a,a.return),wo(a);break;case 22:i=a.stateNode,i._visibility&4&&(i._visibility&=-5,wo(a));break;default:wo(a)}e=e.sibling}}function xg(e,a){for(;Ct!==null;){var i=Ct;switch(i.tag){case 0:case 11:case 15:Jn(8,i,a);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Mr(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Ct=s;else e:for(i=e;Ct!==null;){s=Ct;var c=s.sibling,d=s.return;if(fg(s),s===i){Ct=null;break e}if(c!==null){c.return=d,Ct=c;break e}Ct=d}}}function O2(e,a,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Na(e,a,i,s){return new O2(e,a,i,s)}function cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ai(e,a){var i=e.alternate;return i===null?(i=Na(e.tag,a,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=a,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&31457280,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,a=e.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function wg(e,a){e.flags&=31457282;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,a=i.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function So(e,a,i,s,c,d){var v=0;if(s=e,typeof e=="function")cd(e)&&(v=1);else if(typeof e=="string")v=g_(e,i,Yt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return Ii(i.children,c,d,a);case p:v=8,c|=24;break;case b:return e=Na(12,i,a,c|2),e.elementType=b,e.lanes=d,e;case A:return e=Na(13,i,a,c),e.elementType=A,e.lanes=d,e;case M:return e=Na(19,i,a,c),e.elementType=M,e.lanes=d,e;case U:return Sg(i,c,d,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case y:v=10;break e;case w:v=9;break e;case S:v=11;break e;case C:v=14;break e;case D:v=16,s=null;break e}v=29,i=Error(r(130,e===null?"null":typeof e,"")),s=null}return a=Na(v,i,a,c),a.elementType=e,a.type=s,a.lanes=d,a}function Ii(e,a,i,s){return e=Na(7,e,s,a),e.lanes=i,e}function Sg(e,a,i,s){e=Na(22,e,s,a),e.elementType=U,e.lanes=i;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=c._current;if(d===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var v=Fn(d,2);v!==null&&(c._pendingVisibility|=2,Wt(v,d,2))}},attach:function(){var d=c._current;if(d===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var v=Fn(d,2);v!==null&&(c._pendingVisibility&=-3,Wt(v,d,2))}}};return e.stateNode=c,e}function ud(e,a,i){return e=Na(6,e,null,a),e.lanes=i,e}function dd(e,a,i){return a=Na(4,e.children!==null?e.children:[],e.key,a),a.lanes=i,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function $n(e){e.flags|=4}function Eg(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ov(a)){if(a=Ta.current,a!==null&&(($e&4194176)===$e?Ja!==null:($e&62914560)!==$e&&($e&536870912)===0||a!==Ja))throw Cr=gu,Ip;e.flags|=8192}}function Eo(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Ph():536870912,e.lanes|=a,Rl|=a)}function Pr(e,a){if(!Re)switch(e.tailMode){case"hidden":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Je(e){var a=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(a)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=i,a}function k2(e,a,i){var s=a.pendingProps;switch(pu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(a),null;case 1:return Je(a),null;case 3:return i=a.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Tn(yt),rl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(xr(a)?$n(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Pa!==null&&(yd(Pa),Pa=null))),Je(a),null;case 26:return i=a.memoizedState,e===null?($n(a),i!==null?(Je(a),Eg(a,i)):(Je(a),a.flags&=-16777217)):i?i!==e.memoizedState?($n(a),Je(a),Eg(a,i)):(Je(a),a.flags&=-16777217):(e.memoizedProps!==s&&$n(a),Je(a),a.flags&=-16777217),null;case 27:zs(a),i=Fe.current;var c=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(!s){if(a.stateNode===null)throw Error(r(166));return Je(a),null}e=Yt.current,xr(a)?Hp(a):(e=ev(c,s,i),a.stateNode=e,$n(a))}return Je(a),null;case 5:if(zs(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(!s){if(a.stateNode===null)throw Error(r(166));return Je(a),null}if(e=Yt.current,xr(a))Hp(a);else{switch(c=zo(Fe.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(i,{is:s.is}):c.createElement(i)}}e[It]=a,e[aa]=s;e:for(c=a.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break e;for(;c.sibling===null;){if(c.return===null||c.return===a)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}a.stateNode=e;e:switch(jt(e,i,s),i){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&$n(a)}}return Je(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(r(166));if(e=Fe.current,xr(a)){if(e=a.stateNode,i=a.memoizedProps,s=null,c=Xt,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[It]=a,e=!!(e.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||Xg(e.nodeValue,i)),e||Oi(a)}else e=zo(e).createTextNode(s),e[It]=a,a.stateNode=e}return Je(a),null;case 13:if(s=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=xr(a),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=a.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[It]=a}else wr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Je(a),c=!1}else Pa!==null&&(yd(Pa),Pa=null),c=!0;if(!c)return a.flags&256?(wn(a),a):(wn(a),null)}if(wn(a),(a.flags&128)!==0)return a.lanes=i,a;if(i=s!==null,e=e!==null&&e.memoizedState!==null,i){s=a.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==c&&(s.flags|=2048)}return i!==e&&i&&(a.child.flags|=8192),Eo(a,a.updateQueue),Je(a),null;case 4:return rl(),e===null&&$d(a.stateNode.containerInfo),Je(a),null;case 10:return Tn(a.type),Je(a),null;case 19:if(Ne(bt),c=a.memoizedState,c===null)return Je(a),null;if(s=(a.flags&128)!==0,d=c.rendering,d===null)if(s)Pr(c,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=ro(e),d!==null){for(a.flags|=128,Pr(c,!1),e=d.updateQueue,a.updateQueue=e,Eo(a,e),a.subtreeFlags=0,e=i,i=a.child;i!==null;)wg(i,e),i=i.sibling;return fe(bt,bt.current&1|2),a.child}e=e.sibling}c.tail!==null&&Za()>Co&&(a.flags|=128,s=!0,Pr(c,!1),a.lanes=4194304)}else{if(!s)if(e=ro(d),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,Eo(a,e),Pr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Re)return Je(a),null}else 2*Za()-c.renderingStartTime>Co&&i!==536870912&&(a.flags|=128,s=!0,Pr(c,!1),a.lanes=4194304);c.isBackwards?(d.sibling=a.child,a.child=d):(e=c.last,e!==null?e.sibling=d:a.child=d,c.last=d)}return c.tail!==null?(a=c.tail,c.rendering=a,c.tail=a.sibling,c.renderingStartTime=Za(),a.sibling=null,e=bt.current,fe(bt,s?e&1|2:e&1),a):(Je(a),null);case 22:case 23:return wn(a),bu(),s=a.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(i&536870912)!==0&&(a.flags&128)===0&&(Je(a),a.subtreeFlags&6&&(a.flags|=8192)):Je(a),i=a.updateQueue,i!==null&&Eo(a,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048),e!==null&&Ne(Ri),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),Tn(yt),Je(a),null;case 25:return null}throw Error(r(156,a.tag))}function R2(e,a){switch(pu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Tn(yt),rl(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return zs(a),null;case 13:if(wn(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));wr()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Ne(bt),null;case 4:return rl(),null;case 10:return Tn(a.type),null;case 22:case 23:return wn(a),bu(),e!==null&&Ne(Ri),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Tn(yt),null;case 25:return null;default:return null}}function Cg(e,a){switch(pu(a),a.tag){case 3:Tn(yt),rl();break;case 26:case 27:case 5:zs(a);break;case 4:rl();break;case 13:wn(a);break;case 19:Ne(bt);break;case 10:Tn(a.type);break;case 22:case 23:wn(a),bu(),e!==null&&Ne(Ri);break;case 24:Tn(yt)}}var D2={getCacheForType:function(e){var a=Pt(yt),i=a.data.get(e);return i===void 0&&(i=e(),a.data.set(e,i)),i}},z2=typeof WeakMap=="function"?WeakMap:Map,et=0,Ye=null,Se=null,$e=0,Xe=0,ha=null,On=!1,kl=!1,fd=!1,kn=0,at=0,ni=0,Pi=0,hd=0,$a=0,Rl=0,Vr=null,tn=null,pd=!1,md=0,Co=1/0,To=null,ii=null,Ao=!1,Vi=null,Fr=0,gd=0,vd=null,qr=0,bd=null;function pa(){if((et&2)!==0&&$e!==0)return $e&-$e;if(L.T!==null){var e=El;return e!==0?e:Td()}return Gh()}function Tg(){$a===0&&($a=($e&536870912)===0||Re?Ih():536870912);var e=Ta.current;return e!==null&&(e.flags|=32),$a}function Wt(e,a,i){(e===Ye&&Xe===2||e.cancelPendingCommit!==null)&&(Dl(e,0),Rn(e,$e,$a,!1)),cr(e,i),((et&2)===0||e!==Ye)&&(e===Ye&&((et&2)===0&&(Pi|=i),at===4&&Rn(e,$e,$a,!1)),an(e))}function Ag(e,a,i){if((et&6)!==0)throw Error(r(327));var s=!i&&(a&60)===0&&(a&e.expiredLanes)===0||or(e,a),c=s?B2(e,a):wd(e,a,!0),d=s;do{if(c===0){kl&&!s&&Rn(e,a,0,!1);break}else if(c===6)Rn(e,a,0,!On);else{if(i=e.current.alternate,d&&!L2(i)){c=wd(e,a,!1),d=!1;continue}if(c===2){if(d=a,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){a=v;e:{var x=e;c=Vr;var E=x.current.memoizedState.isDehydrated;if(E&&(Dl(x,v).flags|=256),v=wd(x,v,!1),v!==2){if(fd&&!E){x.errorRecoveryDisabledLanes|=d,Pi|=d,c=4;break e}d=tn,tn=c,d!==null&&yd(d)}c=v}if(d=!1,c!==2)continue}}if(c===1){Dl(e,0),Rn(e,a,0,!0);break}e:{switch(s=e,c){case 0:case 1:throw Error(r(345));case 4:if((a&4194176)===a){Rn(s,a,$a,!On);break e}break;case 2:tn=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=i,s.finishedLanes=a,(a&62914560)===a&&(d=md+300-Za(),10<d)){if(Rn(s,a,$a,!On),Hs(s,0)!==0)break e;s.timeoutHandle=Zg(Mg.bind(null,s,i,tn,To,pd,a,$a,Pi,Rl,On,2,-0,0),d);break e}Mg(s,i,tn,To,pd,a,$a,Pi,Rl,On,0,-0,0)}}break}while(!0);an(e)}function yd(e){tn===null?tn=e:tn.push.apply(tn,e)}function Mg(e,a,i,s,c,d,v,x,E,O,F,Y,P){var V=a.subtreeFlags;if((V&8192||(V&16785408)===16785408)&&(Zr={stylesheets:null,count:0,unsuspend:v_},bg(a),a=y_(),a!==null)){e.cancelPendingCommit=a(zg.bind(null,e,i,s,c,v,x,E,1,Y,P)),Rn(e,d,v,!O);return}zg(e,i,s,c,v,x,E,F,Y,P)}function L2(e){for(var a=e;;){var i=a.tag;if((i===0||i===11||i===15)&&a.flags&16384&&(i=a.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var c=i[s],d=c.getSnapshot;c=c.value;try{if(!ua(d(),c))return!1}catch{return!1}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Rn(e,a,i,s){a&=~hd,a&=~Pi,e.suspendedLanes|=a,e.pingedLanes&=~a,s&&(e.warmLanes|=a),s=e.expirationTimes;for(var c=a;0<c;){var d=31-ca(c),v=1<<d;s[d]=-1,c&=~v}i!==0&&Vh(e,i,a)}function Mo(){return(et&6)===0?(Gr(0),!1):!0}function _d(){if(Se!==null){if(Xe===0)var e=Se.return;else e=Se,Cn=Bi=null,Tu(e),wl=null,Tr=0,e=Se;for(;e!==null;)Cg(e.alternate,e),e=e.return;Se=null}}function Dl(e,a){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,t_(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),_d(),Ye=e,Se=i=ai(e.current,null),$e=a,Xe=0,ha=null,On=!1,kl=or(e,a),fd=!1,Rl=$a=hd=Pi=ni=at=0,tn=Vr=null,pd=!1,(a&8)!==0&&(a|=a&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=a;0<s;){var c=31-ca(s),d=1<<c;a|=e[c],s&=~d}return kn=a,Zs(),i}function Ng(e,a){ye=null,L.H=en,a===Er?(a=Fp(),Xe=3):a===Ip?(a=Fp(),Xe=4):Xe=a===Pm?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ha=a,Se===null&&(at=1,bo(e,Sa(a,e.current)))}function $g(){var e=L.H;return L.H=en,e===null?en:e}function Og(){var e=L.A;return L.A=D2,e}function xd(){at=4,On||($e&4194176)!==$e&&Ta.current!==null||(kl=!0),(ni&134217727)===0&&(Pi&134217727)===0||Ye===null||Rn(Ye,$e,$a,!1)}function wd(e,a,i){var s=et;et|=2;var c=$g(),d=Og();(Ye!==e||$e!==a)&&(To=null,Dl(e,a)),a=!1;var v=at;e:do try{if(Xe!==0&&Se!==null){var x=Se,E=ha;switch(Xe){case 8:_d(),v=6;break e;case 3:case 2:case 6:Ta.current===null&&(a=!0);var O=Xe;if(Xe=0,ha=null,zl(e,x,E,O),i&&kl){v=0;break e}break;default:O=Xe,Xe=0,ha=null,zl(e,x,E,O)}}j2(),v=at;break}catch(F){Ng(e,F)}while(!0);return a&&e.shellSuspendCounter++,Cn=Bi=null,et=s,L.H=c,L.A=d,Se===null&&(Ye=null,$e=0,Zs()),v}function j2(){for(;Se!==null;)kg(Se)}function B2(e,a){var i=et;et|=2;var s=$g(),c=Og();Ye!==e||$e!==a?(To=null,Co=Za()+500,Dl(e,a)):kl=or(e,a);e:do try{if(Xe!==0&&Se!==null){a=Se;var d=ha;t:switch(Xe){case 1:Xe=0,ha=null,zl(e,a,d,1);break;case 2:if(Pp(d)){Xe=0,ha=null,Rg(a);break}a=function(){Xe===2&&Ye===e&&(Xe=7),an(e)},d.then(a,a);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:Pp(d)?(Xe=0,ha=null,Rg(a)):(Xe=0,ha=null,zl(e,a,d,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var x=Se;if(!v||ov(v)){Xe=0,ha=null;var E=x.sibling;if(E!==null)Se=E;else{var O=x.return;O!==null?(Se=O,No(O)):Se=null}break t}}Xe=0,ha=null,zl(e,a,d,5);break;case 6:Xe=0,ha=null,zl(e,a,d,6);break;case 8:_d(),at=6;break e;default:throw Error(r(462))}}H2();break}catch(F){Ng(e,F)}while(!0);return Cn=Bi=null,L.H=s,L.A=c,et=i,Se!==null?0:(Ye=null,$e=0,Zs(),at)}function H2(){for(;Se!==null&&!sy();)kg(Se)}function kg(e){var a=eg(e.alternate,e,kn);e.memoizedProps=e.pendingProps,a===null?No(e):Se=a}function Rg(e){var a=e,i=a.alternate;switch(a.tag){case 15:case 0:a=Xm(i,a,a.pendingProps,a.type,void 0,$e);break;case 11:a=Xm(i,a,a.pendingProps,a.type.render,a.ref,$e);break;case 5:Tu(a);default:Cg(i,a),a=Se=wg(a,kn),a=eg(i,a,kn)}e.memoizedProps=e.pendingProps,a===null?No(e):Se=a}function zl(e,a,i,s){Cn=Bi=null,Tu(a),wl=null,Tr=0;var c=a.return;try{if(A2(e,c,a,i,$e)){at=1,bo(e,Sa(i,e.current)),Se=null;return}}catch(d){if(c!==null)throw Se=c,d;at=1,bo(e,Sa(i,e.current)),Se=null;return}a.flags&32768?(Re||s===1?e=!0:kl||($e&536870912)!==0?e=!1:(On=e=!0,(s===2||s===3||s===6)&&(s=Ta.current,s!==null&&s.tag===13&&(s.flags|=16384))),Dg(a,e)):No(a)}function No(e){var a=e;do{if((a.flags&32768)!==0){Dg(a,On);return}e=a.return;var i=k2(a.alternate,a,kn);if(i!==null){Se=i;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=e}while(a!==null);at===0&&(at=5)}function Dg(e,a){do{var i=R2(e.alternate,e);if(i!==null){i.flags&=32767,Se=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!a&&(e=e.sibling,e!==null)){Se=e;return}Se=e=i}while(e!==null);at=6,Se=null}function zg(e,a,i,s,c,d,v,x,E,O){var F=L.T,Y=K.p;try{K.p=2,L.T=null,U2(e,a,i,s,Y,c,d,v,x,E,O)}finally{L.T=F,K.p=Y}}function U2(e,a,i,s,c,d,v,x){do Ll();while(Vi!==null);if((et&6)!==0)throw Error(r(327));var E=e.finishedWork;if(s=e.finishedLanes,E===null)return null;if(e.finishedWork=null,e.finishedLanes=0,E===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var O=E.lanes|E.childLanes;if(O|=du,by(e,s,O,d,v,x),e===Ye&&(Se=Ye=null,$e=0),(E.subtreeFlags&10256)===0&&(E.flags&10256)===0||Ao||(Ao=!0,gd=O,vd=i,F2(Ls,function(){return Ll(),null})),i=(E.flags&15990)!==0,(E.subtreeFlags&15990)!==0||i?(i=L.T,L.T=null,d=K.p,K.p=2,v=et,et|=4,N2(e,E),mg(E,e),u2(Dd,e.containerInfo),Io=!!Rd,Dd=Rd=null,e.current=E,dg(e,E.alternate,E),oy(),et=v,K.p=d,L.T=i):e.current=E,Ao?(Ao=!1,Vi=e,Fr=s):Lg(e,O),O=e.pendingLanes,O===0&&(ii=null),hy(E.stateNode),an(e),a!==null)for(c=e.onRecoverableError,E=0;E<a.length;E++)O=a[E],c(O.value,{componentStack:O.stack});return(Fr&3)!==0&&Ll(),O=e.pendingLanes,(s&4194218)!==0&&(O&42)!==0?e===bd?qr++:(qr=0,bd=e):qr=0,Gr(0),null}function Lg(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Mr(a)))}function Ll(){if(Vi!==null){var e=Vi,a=gd;gd=0;var i=qh(Fr),s=L.T,c=K.p;try{if(K.p=32>i?32:i,L.T=null,Vi===null)var d=!1;else{i=vd,vd=null;var v=Vi,x=Fr;if(Vi=null,Fr=0,(et&6)!==0)throw Error(r(331));var E=et;if(et|=4,_g(v.current),vg(v,v.current,x,i),et=E,Gr(0,!1),oa&&typeof oa.onPostCommitFiberRoot=="function")try{oa.onPostCommitFiberRoot(sr,v)}catch{}d=!0}return d}finally{K.p=c,L.T=s,Lg(e,a)}}return!1}function jg(e,a,i){a=Sa(i,a),a=Uu(e.stateNode,a,2),e=Kn(e,a,2),e!==null&&(cr(e,2),an(e))}function qe(e,a,i){if(e.tag===3)jg(e,e,i);else for(;a!==null;){if(a.tag===3){jg(a,e,i);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ii===null||!ii.has(s))){e=Sa(i,e),i=Um(2),s=Kn(a,i,2),s!==null&&(Im(i,s,a,e),cr(s,2),an(s));break}}a=a.return}}function Sd(e,a,i){var s=e.pingCache;if(s===null){s=e.pingCache=new z2;var c=new Set;s.set(a,c)}else c=s.get(a),c===void 0&&(c=new Set,s.set(a,c));c.has(i)||(fd=!0,c.add(i),e=I2.bind(null,e,a,i),a.then(e,e))}function I2(e,a,i){var s=e.pingCache;s!==null&&s.delete(a),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ye===e&&($e&i)===i&&(at===4||at===3&&($e&62914560)===$e&&300>Za()-md?(et&2)===0&&Dl(e,0):hd|=i,Rl===$e&&(Rl=0)),an(e)}function Bg(e,a){a===0&&(a=Ph()),e=Fn(e,a),e!==null&&(cr(e,a),an(e))}function P2(e){var a=e.memoizedState,i=0;a!==null&&(i=a.retryLane),Bg(e,i)}function V2(e,a){var i=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(a),Bg(e,i)}function F2(e,a){return Ic(e,a)}var $o=null,jl=null,Ed=!1,Oo=!1,Cd=!1,Fi=0;function an(e){e!==jl&&e.next===null&&(jl===null?$o=jl=e:jl=jl.next=e),Oo=!0,Ed||(Ed=!0,G2(q2))}function Gr(e,a){if(!Cd&&Oo){Cd=!0;do for(var i=!1,s=$o;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var d=0;else{var v=s.suspendedLanes,x=s.pingedLanes;d=(1<<31-ca(42|e)+1)-1,d&=c&~(v&~x),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(i=!0,Ig(s,d))}else d=$e,d=Hs(s,s===Ye?d:0),(d&3)===0||or(s,d)||(i=!0,Ig(s,d));s=s.next}while(i);Cd=!1}}function q2(){Oo=Ed=!1;var e=0;Fi!==0&&(e_()&&(e=Fi),Fi=0);for(var a=Za(),i=null,s=$o;s!==null;){var c=s.next,d=Hg(s,a);d===0?(s.next=null,i===null?$o=c:i.next=c,c===null&&(jl=i)):(i=s,(e!==0||(d&3)!==0)&&(Oo=!0)),s=c}Gr(e)}function Hg(e,a){for(var i=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-ca(d),x=1<<v,E=c[v];E===-1?((x&i)===0||(x&s)!==0)&&(c[v]=vy(x,a)):E<=a&&(e.expiredLanes|=x),d&=~x}if(a=Ye,i=$e,i=Hs(e,e===a?i:0),s=e.callbackNode,i===0||e===a&&Xe===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Pc(s),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||or(e,i)){if(a=i&-i,a===e.callbackPriority)return a;switch(s!==null&&Pc(s),qh(i)){case 2:case 8:i=Hh;break;case 32:i=Ls;break;case 268435456:i=Uh;break;default:i=Ls}return s=Ug.bind(null,e),i=Ic(i,s),e.callbackPriority=a,e.callbackNode=i,a}return s!==null&&s!==null&&Pc(s),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,a){var i=e.callbackNode;if(Ll()&&e.callbackNode!==i)return null;var s=$e;return s=Hs(e,e===Ye?s:0),s===0?null:(Ag(e,s,a),Hg(e,Za()),e.callbackNode!=null&&e.callbackNode===i?Ug.bind(null,e):null)}function Ig(e,a){if(Ll())return null;Ag(e,a,!0)}function G2(e){a_(function(){(et&6)!==0?Ic(Bh,e):e()})}function Td(){return Fi===0&&(Fi=Ih()),Fi}function Pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fs(""+e)}function Vg(e,a){var i=a.ownerDocument.createElement("input");return i.name=a.name,i.value=a.value,e.id&&i.setAttribute("form",e.id),a.parentNode.insertBefore(i,a),e=new FormData(e),i.parentNode.removeChild(i),e}function Y2(e,a,i,s,c){if(a==="submit"&&i&&i.stateNode===c){var d=Pg((c[aa]||null).action),v=s.submitter;v&&(a=(a=v[aa]||null)?Pg(a.formAction):v.getAttribute("formAction"),a!==null&&(d=a,v=null));var x=new Xs("action","action",null,s,c);e.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Fi!==0){var E=v?Vg(c,v):new FormData(c);zu(i,{pending:!0,data:E,method:c.method,action:d},null,E)}}else typeof d=="function"&&(x.preventDefault(),E=v?Vg(c,v):new FormData(c),zu(i,{pending:!0,data:E,method:c.method,action:d},d,E))},currentTarget:c}]})}}for(var Ad=0;Ad<zp.length;Ad++){var Md=zp[Ad],X2=Md.toLowerCase(),W2=Md[0].toUpperCase()+Md.slice(1);Ia(X2,"on"+W2)}Ia($p,"onAnimationEnd"),Ia(Op,"onAnimationIteration"),Ia(kp,"onAnimationStart"),Ia("dblclick","onDoubleClick"),Ia("focusin","onFocus"),Ia("focusout","onBlur"),Ia(f2,"onTransitionRun"),Ia(h2,"onTransitionStart"),Ia(p2,"onTransitionCancel"),Ia(Rp,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yr));function Fg(e,a){a=(a&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],c=s.event;s=s.listeners;e:{var d=void 0;if(a)for(var v=s.length-1;0<=v;v--){var x=s[v],E=x.instance,O=x.currentTarget;if(x=x.listener,E!==d&&c.isPropagationStopped())break e;d=x,c.currentTarget=O;try{d(c)}catch(F){vo(F)}c.currentTarget=null,d=E}else for(v=0;v<s.length;v++){if(x=s[v],E=x.instance,O=x.currentTarget,x=x.listener,E!==d&&c.isPropagationStopped())break e;d=x,c.currentTarget=O;try{d(c)}catch(F){vo(F)}c.currentTarget=null,d=E}}}}function Ae(e,a){var i=a[Fc];i===void 0&&(i=a[Fc]=new Set);var s=e+"__bubble";i.has(s)||(qg(a,e,2,!1),i.add(s))}function Nd(e,a,i){var s=0;a&&(s|=4),qg(i,e,s,a)}var ko="_reactListening"+Math.random().toString(36).slice(2);function $d(e){if(!e[ko]){e[ko]=!0,Xh.forEach(function(i){i!=="selectionchange"&&(Q2.has(i)||Nd(i,!1,e),Nd(i,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ko]||(a[ko]=!0,Nd("selectionchange",!1,a))}}function qg(e,a,i,s){switch(pv(a)){case 2:var c=w_;break;case 8:c=S_;break;default:c=Vd}i=c.bind(null,a,i,e),c=void 0,!Kc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(a,i,{capture:!0,passive:c}):e.addEventListener(a,i,!0):c!==void 0?e.addEventListener(a,i,{passive:c}):e.addEventListener(a,i,!1)}function Od(e,a,i,s,c){var d=s;if((a&1)===0&&(a&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var x=s.stateNode.containerInfo;if(x===c||x.nodeType===8&&x.parentNode===c)break;if(v===4)for(v=s.return;v!==null;){var E=v.tag;if((E===3||E===4)&&(E=v.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;v=v.return}for(;x!==null;){if(v=Ei(x),v===null)return;if(E=v.tag,E===5||E===6||E===26||E===27){s=d=v;continue e}x=x.parentNode}}s=s.return}rp(function(){var O=d,F=Qc(i),Y=[];e:{var P=Dp.get(e);if(P!==void 0){var V=Xs,ue=e;switch(e){case"keypress":if(Gs(i)===0)break e;case"keydown":case"keyup":V=Vy;break;case"focusin":ue="focus",V=au;break;case"focusout":ue="blur",V=au;break;case"beforeblur":case"afterblur":V=au;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Gy;break;case $p:case Op:case kp:V=Dy;break;case Rp:V=Xy;break;case"scroll":case"scrollend":V=Ny;break;case"wheel":V=Qy;break;case"copy":case"cut":case"paste":V=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=dp;break;case"toggle":case"beforetoggle":V=Ky}var me=(a&4)!==0,nt=!me&&(e==="scroll"||e==="scrollend"),z=me?P!==null?P+"Capture":null:P;me=[];for(var N=O,B;N!==null;){var G=N;if(B=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||B===null||z===null||(G=fr(N,z),G!=null&&me.push(Xr(N,G,B))),nt)break;N=N.return}0<me.length&&(P=new V(P,ue,null,i,F),Y.push({event:P,listeners:me}))}}if((a&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",P&&i!==Wc&&(ue=i.relatedTarget||i.fromElement)&&(Ei(ue)||ue[sl]))break e;if((V||P)&&(P=F.window===F?F:(P=F.ownerDocument)?P.defaultView||P.parentWindow:window,V?(ue=i.relatedTarget||i.toElement,V=O,ue=ue?Ei(ue):null,ue!==null&&(nt=ee(ue),me=ue.tag,ue!==nt||me!==5&&me!==27&&me!==6)&&(ue=null)):(V=null,ue=O),V!==ue)){if(me=cp,G="onMouseLeave",z="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(me=dp,G="onPointerLeave",z="onPointerEnter",N="pointer"),nt=V==null?P:dr(V),B=ue==null?P:dr(ue),P=new me(G,N+"leave",V,i,F),P.target=nt,P.relatedTarget=B,G=null,Ei(F)===O&&(me=new me(z,N+"enter",ue,i,F),me.target=B,me.relatedTarget=nt,G=me),nt=G,V&&ue)t:{for(me=V,z=ue,N=0,B=me;B;B=Bl(B))N++;for(B=0,G=z;G;G=Bl(G))B++;for(;0<N-B;)me=Bl(me),N--;for(;0<B-N;)z=Bl(z),B--;for(;N--;){if(me===z||z!==null&&me===z.alternate)break t;me=Bl(me),z=Bl(z)}me=null}else me=null;V!==null&&Gg(Y,P,V,me,!1),ue!==null&&nt!==null&&Gg(Y,nt,ue,me,!0)}}e:{if(P=O?dr(O):window,V=P.nodeName&&P.nodeName.toLowerCase(),V==="select"||V==="input"&&P.type==="file")var se=yp;else if(vp(P))if(_p)se=o2;else{se=r2;var xe=l2}else V=P.nodeName,!V||V.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?O&&Xc(O.elementType)&&(se=yp):se=s2;if(se&&(se=se(e,O))){bp(Y,se,i,F);break e}xe&&xe(e,P,O),e==="focusout"&&O&&P.type==="number"&&O.memoizedProps.value!=null&&Yc(P,"number",P.value)}switch(xe=O?dr(O):window,e){case"focusin":(vp(xe)||xe.contentEditable==="true")&&(gl=xe,ou=O,_r=null);break;case"focusout":_r=ou=gl=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Mp(Y,i,F);break;case"selectionchange":if(d2)break;case"keydown":case"keyup":Mp(Y,i,F)}var he;if(iu)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else ml?mp(e,i)&&(pe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(pe="onCompositionStart");pe&&(fp&&i.locale!=="ko"&&(ml||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&ml&&(he=sp()):(Vn=F,Jc="value"in Vn?Vn.value:Vn.textContent,ml=!0)),xe=Ro(O,pe),0<xe.length&&(pe=new up(pe,e,null,i,F),Y.push({event:pe,listeners:xe}),he?pe.data=he:(he=gp(i),he!==null&&(pe.data=he)))),(he=e2?t2(e,i):a2(e,i))&&(pe=Ro(O,"onBeforeInput"),0<pe.length&&(xe=new up("onBeforeInput","beforeinput",null,i,F),Y.push({event:xe,listeners:pe}),xe.data=he)),Y2(Y,e,O,i,F)}Fg(Y,a)})}function Xr(e,a,i){return{instance:e,listener:a,currentTarget:i}}function Ro(e,a){for(var i=a+"Capture",s=[];e!==null;){var c=e,d=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=fr(e,i),c!=null&&s.unshift(Xr(e,c,d)),c=fr(e,a),c!=null&&s.push(Xr(e,c,d))),e=e.return}return s}function Bl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gg(e,a,i,s,c){for(var d=a._reactName,v=[];i!==null&&i!==s;){var x=i,E=x.alternate,O=x.stateNode;if(x=x.tag,E!==null&&E===s)break;x!==5&&x!==26&&x!==27||O===null||(E=O,c?(O=fr(i,d),O!=null&&v.unshift(Xr(i,O,E))):c||(O=fr(i,d),O!=null&&v.push(Xr(i,O,E)))),i=i.return}v.length!==0&&e.push({event:a,listeners:v})}var Z2=/\r\n?/g,K2=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(Z2,`
`).replace(K2,"")}function Xg(e,a){return a=Yg(a),Yg(e)===a}function Do(){}function Pe(e,a,i,s,c,d){switch(i){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||fl(e,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&fl(e,""+s);break;case"className":Is(e,"class",s);break;case"tabIndex":Is(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Is(e,i,s);break;case"style":ip(e,s,d);break;case"data":if(a!=="object"){Is(e,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||i!=="href")){e.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=Fs(""+s),e.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(i==="formAction"?(a!=="input"&&Pe(e,a,"name",c.name,c,null),Pe(e,a,"formEncType",c.formEncType,c,null),Pe(e,a,"formMethod",c.formMethod,c,null),Pe(e,a,"formTarget",c.formTarget,c,null)):(Pe(e,a,"encType",c.encType,c,null),Pe(e,a,"method",c.method,c,null),Pe(e,a,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=Fs(""+s),e.setAttribute(i,s);break;case"onClick":s!=null&&(e.onclick=Do);break;case"onScroll":s!=null&&Ae("scroll",e);break;case"onScrollEnd":s!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}i=Fs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""+s):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":s===!0?e.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,s):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(i,s):e.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(i):e.setAttribute(i,s);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),Us(e,"popover",s);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Us(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Ay.get(i)||i,Us(e,i,s))}}function kd(e,a,i,s,c,d){switch(i){case"style":ip(e,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"children":typeof s=="string"?fl(e,s):(typeof s=="number"||typeof s=="bigint")&&fl(e,""+s);break;case"onScroll":s!=null&&Ae("scroll",e);break;case"onScrollEnd":s!=null&&Ae("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Do);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wh.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),a=i.slice(2,c?i.length-7:void 0),d=e[aa]||null,d=d!=null?d[i]:null,typeof d=="function"&&e.removeEventListener(a,d,c),typeof s=="function")){typeof d!="function"&&d!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(a,s,c);break e}i in e?e[i]=s:s===!0?e.setAttribute(i,""):Us(e,i,s)}}}function jt(e,a,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var s=!1,c=!1,d;for(d in i)if(i.hasOwnProperty(d)){var v=i[d];if(v!=null)switch(d){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Pe(e,a,d,v,i,null)}}c&&Pe(e,a,"srcSet",i.srcSet,i,null),s&&Pe(e,a,"src",i.src,i,null);return;case"input":Ae("invalid",e);var x=d=v=c=null,E=null,O=null;for(s in i)if(i.hasOwnProperty(s)){var F=i[s];if(F!=null)switch(s){case"name":c=F;break;case"type":v=F;break;case"checked":E=F;break;case"defaultChecked":O=F;break;case"value":d=F;break;case"defaultValue":x=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,a));break;default:Pe(e,a,s,F,i,null)}}ep(e,d,x,E,O,v,c,!1),Ps(e);return;case"select":Ae("invalid",e),s=v=d=null;for(c in i)if(i.hasOwnProperty(c)&&(x=i[c],x!=null))switch(c){case"value":d=x;break;case"defaultValue":v=x;break;case"multiple":s=x;default:Pe(e,a,c,x,i,null)}a=d,i=v,e.multiple=!!s,a!=null?dl(e,!!s,a,!1):i!=null&&dl(e,!!s,i,!0);return;case"textarea":Ae("invalid",e),d=c=s=null;for(v in i)if(i.hasOwnProperty(v)&&(x=i[v],x!=null))switch(v){case"value":s=x;break;case"defaultValue":c=x;break;case"children":d=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(91));break;default:Pe(e,a,v,x,i,null)}ap(e,s,c,d),Ps(e);return;case"option":for(E in i)if(i.hasOwnProperty(E)&&(s=i[E],s!=null))switch(E){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(e,a,E,s,i,null)}return;case"dialog":Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(s=0;s<Yr.length;s++)Ae(Yr[s],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in i)if(i.hasOwnProperty(O)&&(s=i[O],s!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Pe(e,a,O,s,i,null)}return;default:if(Xc(a)){for(F in i)i.hasOwnProperty(F)&&(s=i[F],s!==void 0&&kd(e,a,F,s,i,void 0));return}}for(x in i)i.hasOwnProperty(x)&&(s=i[x],s!=null&&Pe(e,a,x,s,i,null))}function J2(e,a,i,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,x=null,E=null,O=null,F=null;for(V in i){var Y=i[V];if(i.hasOwnProperty(V)&&Y!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":E=Y;default:s.hasOwnProperty(V)||Pe(e,a,V,null,s,Y)}}for(var P in s){var V=s[P];if(Y=i[P],s.hasOwnProperty(P)&&(V!=null||Y!=null))switch(P){case"type":d=V;break;case"name":c=V;break;case"checked":O=V;break;case"defaultChecked":F=V;break;case"value":v=V;break;case"defaultValue":x=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(r(137,a));break;default:V!==Y&&Pe(e,a,P,V,s,Y)}}Gc(e,v,x,E,O,F,d,c);return;case"select":V=v=x=P=null;for(d in i)if(E=i[d],i.hasOwnProperty(d)&&E!=null)switch(d){case"value":break;case"multiple":V=E;default:s.hasOwnProperty(d)||Pe(e,a,d,null,s,E)}for(c in s)if(d=s[c],E=i[c],s.hasOwnProperty(c)&&(d!=null||E!=null))switch(c){case"value":P=d;break;case"defaultValue":x=d;break;case"multiple":v=d;default:d!==E&&Pe(e,a,c,d,s,E)}a=x,i=v,s=V,P!=null?dl(e,!!i,P,!1):!!s!=!!i&&(a!=null?dl(e,!!i,a,!0):dl(e,!!i,i?[]:"",!1));return;case"textarea":V=P=null;for(x in i)if(c=i[x],i.hasOwnProperty(x)&&c!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Pe(e,a,x,null,s,c)}for(v in s)if(c=s[v],d=i[v],s.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":P=c;break;case"defaultValue":V=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Pe(e,a,v,c,s,d)}tp(e,P,V);return;case"option":for(var ue in i)if(P=i[ue],i.hasOwnProperty(ue)&&P!=null&&!s.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Pe(e,a,ue,null,s,P)}for(E in s)if(P=s[E],V=i[E],s.hasOwnProperty(E)&&P!==V&&(P!=null||V!=null))switch(E){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Pe(e,a,E,P,s,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in i)P=i[me],i.hasOwnProperty(me)&&P!=null&&!s.hasOwnProperty(me)&&Pe(e,a,me,null,s,P);for(O in s)if(P=s[O],V=i[O],s.hasOwnProperty(O)&&P!==V&&(P!=null||V!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(r(137,a));break;default:Pe(e,a,O,P,s,V)}return;default:if(Xc(a)){for(var nt in i)P=i[nt],i.hasOwnProperty(nt)&&P!==void 0&&!s.hasOwnProperty(nt)&&kd(e,a,nt,void 0,s,P);for(F in s)P=s[F],V=i[F],!s.hasOwnProperty(F)||P===V||P===void 0&&V===void 0||kd(e,a,F,P,s,V);return}}for(var z in i)P=i[z],i.hasOwnProperty(z)&&P!=null&&!s.hasOwnProperty(z)&&Pe(e,a,z,null,s,P);for(Y in s)P=s[Y],V=i[Y],!s.hasOwnProperty(Y)||P===V||P==null&&V==null||Pe(e,a,Y,P,s,V)}var Rd=null,Dd=null;function zo(e){return e.nodeType===9?e:e.ownerDocument}function Wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function zd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ld=null;function e_(){var e=window.event;return e&&e.type==="popstate"?e===Ld?!1:(Ld=e,!0):(Ld=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,t_=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,a_=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(e){return Kg.resolve(null).then(e).catch(n_)}:Zg;function n_(e){setTimeout(function(){throw e})}function jd(e,a){var i=a,s=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(s===0){e.removeChild(c),as(a);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=c}while(i);as(a)}function Bd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var i=a;switch(a=a.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Bd(i),qc(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function i_(e,a,i,s){for(;e.nodeType===1;){var c=i;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ur])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Fa(e.nextSibling),e===null)break}return null}function l_(e,a,i){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Fa(e.nextSibling),e===null))return null;return e}function Fa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}function Jg(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(a===0)return e;a--}else i==="/$"&&a++}e=e.previousSibling}return null}function ev(e,a,i){switch(a=zo(i),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var Oa=new Map,tv=new Set;function Lo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Dn=K.d;K.d={f:r_,r:s_,D:o_,C:c_,L:u_,m:d_,X:h_,S:f_,M:p_};function r_(){var e=Dn.f(),a=Mo();return e||a}function s_(e){var a=ol(e);a!==null&&a.tag===5&&a.type==="form"?Mm(a):Dn.r(e)}var Hl=typeof document>"u"?null:document;function av(e,a,i){var s=Hl;if(s&&typeof a=="string"&&a){var c=xa(a);c='link[rel="'+e+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),tv.has(c)||(tv.add(c),e={rel:e,crossOrigin:i,href:a},s.querySelector(c)===null&&(a=s.createElement("link"),jt(a,"link",e),St(a),s.head.appendChild(a)))}}function o_(e){Dn.D(e),av("dns-prefetch",e,null)}function c_(e,a){Dn.C(e,a),av("preconnect",e,a)}function u_(e,a,i){Dn.L(e,a,i);var s=Hl;if(s&&e&&a){var c='link[rel="preload"][as="'+xa(a)+'"]';a==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+xa(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+xa(i.imageSizes)+'"]')):c+='[href="'+xa(e)+'"]';var d=c;switch(a){case"style":d=Ul(e);break;case"script":d=Il(e)}Oa.has(d)||(e=q({rel:"preload",href:a==="image"&&i&&i.imageSrcSet?void 0:e,as:a},i),Oa.set(d,e),s.querySelector(c)!==null||a==="style"&&s.querySelector(Wr(d))||a==="script"&&s.querySelector(Qr(d))||(a=s.createElement("link"),jt(a,"link",e),St(a),s.head.appendChild(a)))}}function d_(e,a){Dn.m(e,a);var i=Hl;if(i&&e){var s=a&&typeof a.as=="string"?a.as:"script",c='link[rel="modulepreload"][as="'+xa(s)+'"][href="'+xa(e)+'"]',d=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Il(e)}if(!Oa.has(d)&&(e=q({rel:"modulepreload",href:e},a),Oa.set(d,e),i.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Qr(d)))return}s=i.createElement("link"),jt(s,"link",e),St(s),i.head.appendChild(s)}}}function f_(e,a,i){Dn.S(e,a,i);var s=Hl;if(s&&e){var c=cl(s).hoistableStyles,d=Ul(e);a=a||"default";var v=c.get(d);if(!v){var x={loading:0,preload:null};if(v=s.querySelector(Wr(d)))x.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":a},i),(i=Oa.get(d))&&Hd(e,i);var E=v=s.createElement("link");St(E),jt(E,"link",e),E._p=new Promise(function(O,F){E.onload=O,E.onerror=F}),E.addEventListener("load",function(){x.loading|=1}),E.addEventListener("error",function(){x.loading|=2}),x.loading|=4,jo(v,a,s)}v={type:"stylesheet",instance:v,count:1,state:x},c.set(d,v)}}}function h_(e,a){Dn.X(e,a);var i=Hl;if(i&&e){var s=cl(i).hoistableScripts,c=Il(e),d=s.get(c);d||(d=i.querySelector(Qr(c)),d||(e=q({src:e,async:!0},a),(a=Oa.get(c))&&Ud(e,a),d=i.createElement("script"),St(d),jt(d,"link",e),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function p_(e,a){Dn.M(e,a);var i=Hl;if(i&&e){var s=cl(i).hoistableScripts,c=Il(e),d=s.get(c);d||(d=i.querySelector(Qr(c)),d||(e=q({src:e,async:!0,type:"module"},a),(a=Oa.get(c))&&Ud(e,a),d=i.createElement("script"),St(d),jt(d,"link",e),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function nv(e,a,i,s){var c=(c=Fe.current)?Lo(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(a=Ul(i.href),i=cl(c).hoistableStyles,s=i.get(a),s||(s={type:"style",instance:null,count:0,state:null},i.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ul(i.href);var d=cl(c).hoistableStyles,v=d.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=c.querySelector(Wr(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Oa.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Oa.set(e,i),d||m_(c,e,i,v.state))),a&&s===null)throw Error(r(528,""));return v}if(a&&s!==null)throw Error(r(529,""));return null;case"script":return a=i.async,i=i.src,typeof i=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Il(i),i=cl(c).hoistableScripts,s=i.get(a),s||(s={type:"script",instance:null,count:0,state:null},i.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ul(e){return'href="'+xa(e)+'"'}function Wr(e){return'link[rel="stylesheet"]['+e+"]"}function iv(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function m_(e,a,i,s){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=e.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),jt(a,"link",i),St(a),e.head.appendChild(a))}function Il(e){return'[src="'+xa(e)+'"]'}function Qr(e){return"script[async]"+e}function lv(e,a,i){if(a.count++,a.instance===null)switch(a.type){case"style":var s=e.querySelector('style[data-href~="'+xa(i.href)+'"]');if(s)return a.instance=s,St(s),s;var c=q({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),St(s),jt(s,"style",c),jo(s,i.precedence,e),a.instance=s;case"stylesheet":c=Ul(i.href);var d=e.querySelector(Wr(c));if(d)return a.state.loading|=4,a.instance=d,St(d),d;s=iv(i),(c=Oa.get(c))&&Hd(s,c),d=(e.ownerDocument||e).createElement("link"),St(d);var v=d;return v._p=new Promise(function(x,E){v.onload=x,v.onerror=E}),jt(d,"link",s),a.state.loading|=4,jo(d,i.precedence,e),a.instance=d;case"script":return d=Il(i.src),(c=e.querySelector(Qr(d)))?(a.instance=c,St(c),c):(s=i,(c=Oa.get(d))&&(s=q({},i),Ud(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),St(c),jt(c,"link",s),e.head.appendChild(c),a.instance=c);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,jo(s,i.precedence,e));return a.instance}function jo(e,a,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,d=c,v=0;v<s.length;v++){var x=s[v];if(x.dataset.precedence===a)d=x;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(a=i.nodeType===9?i.head:i,a.insertBefore(e,a.firstChild))}function Hd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Ud(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Bo=null;function rv(e,a,i){if(Bo===null){var s=new Map,c=Bo=new Map;c.set(i,s)}else c=Bo,s=c.get(i),s||(s=new Map,c.set(i,s));if(s.has(e))return s;for(s.set(e,null),i=i.getElementsByTagName(e),c=0;c<i.length;c++){var d=i[c];if(!(d[ur]||d[It]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(a)||"";v=e+v;var x=s.get(v);x?x.push(d):s.set(v,[d])}}return s}function sv(e,a,i){e=e.ownerDocument||e,e.head.insertBefore(i,a==="title"?e.querySelector("head > title"):null)}function g_(e,a,i){if(i===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ov(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Zr=null;function v_(){}function b_(e,a,i){if(Zr===null)throw Error(r(475));var s=Zr;if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ul(i.href),d=e.querySelector(Wr(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Ho.bind(s),e.then(s,s)),a.state.loading|=4,a.instance=d,St(d);return}d=e.ownerDocument||e,i=iv(i),(c=Oa.get(c))&&Hd(i,c),d=d.createElement("link"),St(d);var v=d;v._p=new Promise(function(x,E){v.onload=x,v.onerror=E}),jt(d,"link",i),a.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(s.count++,a=Ho.bind(s),e.addEventListener("load",a),e.addEventListener("error",a))}}function y_(){if(Zr===null)throw Error(r(475));var e=Zr;return e.stylesheets&&e.count===0&&Id(e,e.stylesheets),0<e.count?function(a){var i=setTimeout(function(){if(e.stylesheets&&Id(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i)}}:null}function Ho(){if(this.count--,this.count===0){if(this.stylesheets)Id(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uo=null;function Id(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uo=new Map,a.forEach(__,e),Uo=null,Ho.call(e))}function __(e,a){if(!(a.state.loading&4)){var i=Uo.get(e);if(i)var s=i.get(null);else{i=new Map,Uo.set(e,i);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(i.set(v.dataset.precedence,v),s=v)}s&&i.set(null,s)}c=a.instance,v=c.getAttribute("data-precedence"),d=i.get(v)||s,d===s&&i.set(null,c),i.set(v,c),this.count++,s=Ho.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),a.state.loading|=4}}var Kr={$$typeof:y,Provider:null,Consumer:null,_currentValue:Le,_currentValue2:Le,_threadCount:0};function x_(e,a,i,s,c,d,v,x){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.hiddenUpdates=Vc(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function cv(e,a,i,s,c,d,v,x,E,O,F,Y){return e=new x_(e,a,i,v,x,E,O,Y),a=1,d===!0&&(a|=24),d=Na(3,null,null,a),e.current=d,d.stateNode=e,a=yu(),a.refCount++,e.pooledCache=a,a.refCount++,d.memoizedState={element:s,isDehydrated:i,cache:a},Ju(d),e}function uv(e){return e?(e=yl,e):yl}function dv(e,a,i,s,c,d){c=uv(c),s.context===null?s.context=c:s.pendingContext=c,s=Zn(a),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Kn(e,s,a),i!==null&&(Wt(i,e,a),zr(i,e,a))}function fv(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<a?i:a}}function Pd(e,a){fv(e,a),(e=e.alternate)&&fv(e,a)}function hv(e){if(e.tag===13){var a=Fn(e,67108864);a!==null&&Wt(a,e,67108864),Pd(e,67108864)}}var Io=!0;function w_(e,a,i,s){var c=L.T;L.T=null;var d=K.p;try{K.p=2,Vd(e,a,i,s)}finally{K.p=d,L.T=c}}function S_(e,a,i,s){var c=L.T;L.T=null;var d=K.p;try{K.p=8,Vd(e,a,i,s)}finally{K.p=d,L.T=c}}function Vd(e,a,i,s){if(Io){var c=Fd(s);if(c===null)Od(e,a,s,Po,i),mv(e,s);else if(C_(c,e,a,i,s))s.stopPropagation();else if(mv(e,s),a&4&&-1<E_.indexOf(e)){for(;c!==null;){var d=ol(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Si(d.pendingLanes);if(v!==0){var x=d;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var E=1<<31-ca(v);x.entanglements[1]|=E,v&=~E}an(d),(et&6)===0&&(Co=Za()+500,Gr(0))}}break;case 13:x=Fn(d,2),x!==null&&Wt(x,d,2),Mo(),Pd(d,2)}if(d=Fd(s),d===null&&Od(e,a,s,Po,i),d===c)break;c=d}c!==null&&s.stopPropagation()}else Od(e,a,s,null,i)}}function Fd(e){return e=Qc(e),qd(e)}var Po=null;function qd(e){if(Po=null,e=Ei(e),e!==null){var a=ee(e);if(a===null)e=null;else{var i=a.tag;if(i===13){if(e=ce(a),e!==null)return e;e=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Po=e,null}function pv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cy()){case Bh:return 2;case Hh:return 8;case Ls:case uy:return 32;case Uh:return 268435456;default:return 32}default:return 32}}var Gd=!1,li=null,ri=null,si=null,Jr=new Map,es=new Map,oi=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mv(e,a){switch(e){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":Jr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(a.pointerId)}}function ts(e,a,i,s,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:a,domEventName:i,eventSystemFlags:s,nativeEvent:d,targetContainers:[c]},a!==null&&(a=ol(a),a!==null&&hv(a)),e):(e.eventSystemFlags|=s,a=e.targetContainers,c!==null&&a.indexOf(c)===-1&&a.push(c),e)}function C_(e,a,i,s,c){switch(a){case"focusin":return li=ts(li,e,a,i,s,c),!0;case"dragenter":return ri=ts(ri,e,a,i,s,c),!0;case"mouseover":return si=ts(si,e,a,i,s,c),!0;case"pointerover":var d=c.pointerId;return Jr.set(d,ts(Jr.get(d)||null,e,a,i,s,c)),!0;case"gotpointercapture":return d=c.pointerId,es.set(d,ts(es.get(d)||null,e,a,i,s,c)),!0}return!1}function gv(e){var a=Ei(e.target);if(a!==null){var i=ee(a);if(i!==null){if(a=i.tag,a===13){if(a=ce(i),a!==null){e.blockedOn=a,yy(e.priority,function(){if(i.tag===13){var s=pa(),c=Fn(i,s);c!==null&&Wt(c,i,s),Pd(i,s)}});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var i=Fd(e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Wc=s,i.target.dispatchEvent(s),Wc=null}else return a=ol(i),a!==null&&hv(a),e.blockedOn=i,!1;a.shift()}return!0}function vv(e,a,i){Vo(e)&&i.delete(a)}function T_(){Gd=!1,li!==null&&Vo(li)&&(li=null),ri!==null&&Vo(ri)&&(ri=null),si!==null&&Vo(si)&&(si=null),Jr.forEach(vv),es.forEach(vv)}function Fo(e,a){e.blockedOn===a&&(e.blockedOn=null,Gd||(Gd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,T_)))}var qo=null;function bv(e){qo!==e&&(qo=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){qo===e&&(qo=null);for(var a=0;a<e.length;a+=3){var i=e[a],s=e[a+1],c=e[a+2];if(typeof s!="function"){if(qd(s||i)===null)continue;break}var d=ol(i);d!==null&&(e.splice(a,3),a-=3,zu(d,{pending:!0,data:c,method:i.method,action:s},s,c))}}))}function as(e){function a(E){return Fo(E,e)}li!==null&&Fo(li,e),ri!==null&&Fo(ri,e),si!==null&&Fo(si,e),Jr.forEach(a),es.forEach(a);for(var i=0;i<oi.length;i++){var s=oi[i];s.blockedOn===e&&(s.blockedOn=null)}for(;0<oi.length&&(i=oi[0],i.blockedOn===null);)gv(i),i.blockedOn===null&&oi.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var c=i[s],d=i[s+1],v=c[aa]||null;if(typeof d=="function")v||bv(i);else if(v){var x=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[aa]||null)x=v.formAction;else if(qd(c)!==null)continue}else x=v.action;typeof x=="function"?i[s+1]=x:(i.splice(s,3),s-=3),bv(i)}}}function Yd(e){this._internalRoot=e}Go.prototype.render=Yd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var i=a.current,s=pa();dv(i,s,e,a,null,null)},Go.prototype.unmount=Yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;e.tag===0&&Ll(),dv(e.current,2,null,e,null,null),Mo(),a[sl]=null}};function Go(e){this._internalRoot=e}Go.prototype.unstable_scheduleHydration=function(e){if(e){var a=Gh();e={blockedOn:null,target:e,priority:a};for(var i=0;i<oi.length&&a!==0&&a<oi[i].priority;i++);oi.splice(i,0,e),i===0&&gv(e)}};var yv=n.version;if(yv!=="19.0.0")throw Error(r(527,yv,"19.0.0"));K.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ot(a),e=e!==null?Te(e):null,e=e===null?null:e.stateNode,e};var A_={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:L,findFiberByHostInstance:Ei,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{sr=Yo.inject(A_),oa=Yo}catch{}}return ns.createRoot=function(e,a){if(!o(e))throw Error(r(299));var i=!1,s="",c=Lm,d=jm,v=Bm,x=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks)),a=cv(e,1,!1,null,null,i,s,c,d,v,x,null),e[sl]=a.current,$d(e.nodeType===8?e.parentNode:e),new Yd(a)},ns.hydrateRoot=function(e,a,i){if(!o(e))throw Error(r(299));var s=!1,c="",d=Lm,v=jm,x=Bm,E=null,O=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(v=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks),i.formState!==void 0&&(O=i.formState)),a=cv(e,1,!0,a,i??null,s,c,d,v,x,E,O),a.context=uv(null),i=a.current,s=pa(),c=Zn(s),c.callback=null,Kn(i,c,s),a.current.lanes=s,cr(a,s),an(a),e[sl]=a.current,$d(e),new Go(a)},ns.version="19.0.0",ns}var Lv;function Ux(){if(Lv)return Wd.exports;Lv=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Wd.exports=Hx(),Wd.exports}var Ix=Ux(),Of="";function kf(t){Of=t}function Px(t=""){if(!Of){const n=[...document.getElementsByTagName("script")],l=n.find(r=>r.hasAttribute("data-shoelace"));if(l)kf(l.getAttribute("data-shoelace"));else{const r=n.find(u=>/shoelace(\.min)?\.js($|\?)/.test(u.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(u.src));let o="";r&&(o=r.getAttribute("src")),kf(o.split("/").slice(0,-1).join("/"))}}return Of.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var xb=Object.defineProperty,Vx=Object.defineProperties,Fx=Object.getOwnPropertyDescriptor,qx=Object.getOwnPropertyDescriptors,jv=Object.getOwnPropertySymbols,Gx=Object.prototype.hasOwnProperty,Yx=Object.prototype.propertyIsEnumerable,Kd=(t,n)=>(n=Symbol[t])?n:Symbol.for("Symbol."+t),lh=t=>{throw TypeError(t)},Bv=(t,n,l)=>n in t?xb(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,_i=(t,n)=>{for(var l in n||(n={}))Gx.call(n,l)&&Bv(t,l,n[l]);if(jv)for(var l of jv(n))Yx.call(n,l)&&Bv(t,l,n[l]);return t},Cc=(t,n)=>Vx(t,qx(n)),T=(t,n,l,r)=>{for(var o=r>1?void 0:r?Fx(n,l):n,u=t.length-1,f;u>=0;u--)(f=t[u])&&(o=(r?f(n,l,o):f(o))||o);return r&&o&&xb(n,l,o),o},wb=(t,n,l)=>n.has(t)||lh("Cannot "+l),Xx=(t,n,l)=>(wb(t,n,"read from private field"),n.get(t)),Wx=(t,n,l)=>n.has(t)?lh("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,l),Qx=(t,n,l,r)=>(wb(t,n,"write to private field"),n.set(t,l),l),Zx=function(t,n){this[0]=t,this[1]=n},Kx=t=>{var n=t[Kd("asyncIterator")],l=!1,r,o={};return n==null?(n=t[Kd("iterator")](),r=u=>o[u]=f=>n[u](f)):(n=n.call(t),r=u=>o[u]=f=>{if(l){if(l=!1,u==="throw")throw f;return f}return l=!0,{done:!1,value:new Zx(new Promise(h=>{var g=n[u](f);g instanceof Object||lh("Object expected"),h(g)}),1)}}),o[Kd("iterator")]=()=>o,r("next"),"throw"in n?r("throw"):o.throw=u=>{throw u},"return"in n&&r("return"),o},Jx=(function(){var t=function(n,l){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(r[u]=o[u])},t(n,l)};return function(n,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");t(n,l);function r(){this.constructor=n}n.prototype=l===null?Object.create(l):(r.prototype=l.prototype,new r)}})(),Sb=function(t,n,l,r){function o(u){return u instanceof l?u:new l((function(f){f(u)}))}return new(l||(l=Promise))((function(u,f){function h(b){try{p(r.next(b))}catch(_){f(_)}}function g(b){try{p(r.throw(b))}catch(_){f(_)}}function p(b){b.done?u(b.value):o(b.value).then(h,g)}p((r=r.apply(t,n||[])).next())}))},Eb=function(t,n){var l={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},r,o,u,f;return f={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function h(p){return function(b){return g([p,b])}}function g(p){if(r)throw new TypeError("Generator is already executing.");for(;f&&(f=0,p[0]&&(l=0)),l;)try{if(r=1,o&&(u=p[0]&2?o.return:p[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,p[1])).done)return u;switch(o=0,u&&(p=[p[0]&2,u.value]),p[0]){case 0:case 1:u=p;break;case 4:return l.label++,{value:p[1],done:!1};case 5:l.label++,o=p[1],p=[0];continue;case 7:p=l.ops.pop(),l.trys.pop();continue;default:if(u=l.trys,!(u=u.length>0&&u[u.length-1])&&(p[0]===6||p[0]===2)){l=0;continue}if(p[0]===3&&(!u||p[1]>u[0]&&p[1]<u[3])){l.label=p[1];break}if(p[0]===6&&l.label<u[1]){l.label=u[1],u=p;break}if(u&&l.label<u[2]){l.label=u[2],l.ops.push(p);break}u[2]&&l.ops.pop(),l.trys.pop();continue}p=n.call(t,l)}catch(b){p=[6,b],o=0}finally{r=u=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},Hv=function(t,n,l){if(l||arguments.length===2)for(var r=0,o=n.length,u;r<o;r++)(u||!(r in n))&&(u||(u=Array.prototype.slice.call(n,0,r)),u[r]=n[r]);return t.concat(u||Array.prototype.slice.call(n))},ew="ionicpwaelements",lc,Cb,ma=!1,Rf=!1,Bn=function(t,n){return function(){}},tw=function(t,n){return function(){}},aw="{visibility:hidden}.hydrated{visibility:inherit}",Uv={},nw="http://www.w3.org/2000/svg",iw="http://www.w3.org/1999/xhtml",lw=function(t){return t!=null},rh=function(t){return t=typeof t,t==="object"||t==="function"};function Tb(t){var n,l,r;return(r=(l=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||l===void 0?void 0:l.getAttribute("content"))!==null&&r!==void 0?r:void 0}var rw=function(t,n){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=null,u=!1,f=!1,h=[],g=function(_){for(var w=0;w<_.length;w++)o=_[w],Array.isArray(o)?g(o):o!=null&&typeof o!="boolean"&&((u=typeof t!="function"&&!rh(o))&&(o=String(o)),u&&f?h[h.length-1].$text$+=o:h.push(u?Df(null,o):o),f=u)};if(g(l),n){var p=n.className||n.class;p&&(n.class=typeof p!="object"?p:Object.keys(p).filter((function(_){return p[_]})).join(" "))}var b=Df(t,null);return b.$attrs$=n,h.length>0&&(b.$children$=h),b},Df=function(t,n){var l={$flags$:0,$tag$:t,$text$:n,$elm$:null,$children$:null};return l.$attrs$=null,l},sw={},ow=function(t){return t&&t.$tag$===sw},cw=function(t,n){return t!=null&&!rh(t)?n&4?t==="false"?!1:t===""||!!t:n&2?parseFloat(t):n&1?String(t):t:t},uw=function(t){return xi(t).$hostElement$},RA=function(t,n,l){var r=uw(t);return{emit:function(o){return Ab(r,n,{bubbles:!0,composed:!0,cancelable:!0,detail:o})}}},Ab=function(t,n,l){var r=Nt.ce(n,l);return t.dispatchEvent(r),r},Iv=new WeakMap,dw=function(t,n,l){var r=pc.get(t);Dw&&l?(r=r||new CSSStyleSheet,typeof r=="string"?r=n:r.replaceSync(n)):r=n,pc.set(t,r)},fw=function(t,n,l,r){var o,u=Mb(n),f=pc.get(u);if(t=t.nodeType===11?t:Ga,f)if(typeof f=="string"){t=t.head||t;var h=Iv.get(t),g=void 0;if(h||Iv.set(t,h=new Set),!h.has(u)){{g=Ga.createElement("style"),g.innerHTML=f;var p=(o=Nt.$nonce$)!==null&&o!==void 0?o:Tb(Ga);p!=null&&g.setAttribute("nonce",p),t.insertBefore(g,t.querySelector("link"))}h&&h.add(u)}}else t.adoptedStyleSheets.includes(f)||(t.adoptedStyleSheets=Hv(Hv([],t.adoptedStyleSheets,!0),[f],!1));return u},hw=function(t){var n=t.$cmpMeta$,l=t.$hostElement$,r=n.$flags$,o=Bn("attachStyles",n.$tagName$),u=fw(l.shadowRoot?l.shadowRoot:l.getRootNode(),n);r&10&&(l["s-sc"]=u,l.classList.add(u+"-h")),o()},Mb=function(t,n){return"sc-"+t.$tagName$},Pv=function(t,n,l,r,o,u){if(l!==r){var f=Fv(t,n),h=n.toLowerCase();if(n==="class"){var g=t.classList,p=Vv(l),b=Vv(r);g.remove.apply(g,p.filter((function(S){return S&&!b.includes(S)}))),g.add.apply(g,b.filter((function(S){return S&&!p.includes(S)})))}else if(n==="style"){for(var _ in l)(!r||r[_]==null)&&(_.includes("-")?t.style.removeProperty(_):t.style[_]="");for(var _ in r)(!l||r[_]!==l[_])&&(_.includes("-")?t.style.setProperty(_,r[_]):t.style[_]=r[_])}else if(n==="ref")r&&r(t);else if(!f&&n[0]==="o"&&n[1]==="n")n[2]==="-"?n=n.slice(3):Fv(Ac,h)?n=h.slice(2):n=h[2]+n.slice(3),l&&Nt.rel(t,n,l,!1),r&&Nt.ael(t,n,r,!1);else{var w=rh(r);if((f||w&&r!==null)&&!o)try{if(t.tagName.includes("-"))t[n]=r;else{var y=r??"";n==="list"?f=!1:(l==null||t[n]!=y)&&(t[n]=y)}}catch{}r==null||r===!1?(r!==!1||t.getAttribute(n)==="")&&t.removeAttribute(n):(!f||u&4||o)&&!w&&(r=r===!0?"":r,t.setAttribute(n,r))}}},pw=/\s/,Vv=function(t){return t?t.split(pw):[]},Nb=function(t,n,l,r){var o=n.$elm$.nodeType===11&&n.$elm$.host?n.$elm$.host:n.$elm$,u=t&&t.$attrs$||Uv,f=n.$attrs$||Uv;for(r in u)r in f||Pv(o,r,u[r],void 0,l,n.$flags$);for(r in f)Pv(o,r,u[r],f[r],l,n.$flags$)},sh=function(t,n,l,r){var o=n.$children$[l],u=0,f,h;if(o.$text$!==null)f=o.$elm$=Ga.createTextNode(o.$text$);else{if(ma||(ma=o.$tag$==="svg"),f=o.$elm$=Ga.createElementNS(ma?nw:iw,o.$tag$),ma&&o.$tag$==="foreignObject"&&(ma=!1),Nb(null,o,ma),lw(lc)&&f["s-si"]!==lc&&f.classList.add(f["s-si"]=lc),o.$children$)for(u=0;u<o.$children$.length;++u)h=sh(t,o,u),h&&f.appendChild(h);o.$tag$==="svg"?ma=!1:f.tagName==="foreignObject"&&(ma=!0)}return f},$b=function(t,n,l,r,o,u){var f=t,h;for(f.shadowRoot&&f.tagName===Cb&&(f=f.shadowRoot);o<=u;++o)r[o]&&(h=sh(null,l,o),h&&(r[o].$elm$=h,f.insertBefore(h,n)))},Ob=function(t,n,l){for(var r=n;r<=l;++r){var o=t[r];if(o){var u=o.$elm$;kb(o),u&&u.remove()}}},mw=function(t,n,l,r){for(var o=0,u=0,f=n.length-1,h=n[0],g=n[f],p=r.length-1,b=r[0],_=r[p],w;o<=f&&u<=p;)h==null?h=n[++o]:g==null?g=n[--f]:b==null?b=r[++u]:_==null?_=r[--p]:Xo(h,b)?(ms(h,b),h=n[++o],b=r[++u]):Xo(g,_)?(ms(g,_),g=n[--f],_=r[--p]):Xo(h,_)?(ms(h,_),t.insertBefore(h.$elm$,g.$elm$.nextSibling),h=n[++o],_=r[--p]):Xo(g,b)?(ms(g,b),t.insertBefore(g.$elm$,h.$elm$),g=n[--f],b=r[++u]):(w=sh(n&&n[u],l,u),b=r[++u],w&&h.$elm$.parentNode.insertBefore(w,h.$elm$));o>f?$b(t,r[p+1]==null?null:r[p+1].$elm$,l,r,u,p):u>p&&Ob(n,o,f)},Xo=function(t,n){return t.$tag$===n.$tag$},ms=function(t,n){var l=n.$elm$=t.$elm$,r=t.$children$,o=n.$children$,u=n.$tag$,f=n.$text$;f===null?(ma=u==="svg"?!0:u==="foreignObject"?!1:ma,Nb(t,n,ma),r!==null&&o!==null?mw(l,r,n,o):o!==null?(t.$text$!==null&&(l.textContent=""),$b(l,null,n,o,0,o.length-1)):r!==null&&Ob(r,0,r.length-1),ma&&u==="svg"&&(ma=!1)):t.$text$!==f&&(l.data=f)},kb=function(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(kb)},gw=function(t,n){var l=t.$hostElement$,r=t.$vnode$||Df(null,null),o=ow(n)?n:rw(null,null,n);Cb=l.tagName,o.$tag$=null,o.$flags$|=4,t.$vnode$=o,o.$elm$=r.$elm$=l.shadowRoot||l,lc=l["s-sc"],ms(r,o)},Rb=function(t,n){n&&!t.$onRenderResolve$&&n["s-p"]&&n["s-p"].push(new Promise((function(l){return t.$onRenderResolve$=l})))},Tc=function(t,n){if(t.$flags$|=16,t.$flags$&4){t.$flags$|=512;return}Rb(t,t.$ancestorComponent$);var l=function(){return vw(t,n)};return Lw(l)},vw=function(t,n){var l=Bn("scheduleUpdate",t.$cmpMeta$.$tagName$),r=t.$lazyInstance$,o;return n&&(t.$flags$|=256,t.$queuedListeners$&&(t.$queuedListeners$.map((function(u){var f=u[0],h=u[1];return oh(r,f,h)})),t.$queuedListeners$=void 0)),l(),bw(o,(function(){return _w(t,r,n)}))},bw=function(t,n){return yw(t)?t.then(n):n()},yw=function(t){return t instanceof Promise||t&&t.then&&typeof t.then=="function"},_w=function(t,n,l){return Sb(void 0,void 0,void 0,(function(){var r,o,u,f,h,g,p;return Eb(this,(function(b){return o=t.$hostElement$,u=Bn("update",t.$cmpMeta$.$tagName$),f=o["s-rc"],l&&hw(t),h=Bn("render",t.$cmpMeta$.$tagName$),xw(t,n),f&&(f.map((function(_){return _()})),o["s-rc"]=void 0),h(),u(),g=(r=o["s-p"])!==null&&r!==void 0?r:[],p=function(){return ww(t)},g.length===0?p():(Promise.all(g).then(p),t.$flags$|=4,g.length=0),[2]}))}))},xw=function(t,n,l){try{n=n.render(),t.$flags$&=-17,t.$flags$|=2,gw(t,n)}catch(r){qa(r,t.$hostElement$)}return null},ww=function(t){t.$cmpMeta$.$tagName$;var n=t.$hostElement$,l=Bn(),r=t.$lazyInstance$,o=t.$ancestorComponent$;t.$flags$&64?l():(t.$flags$|=64,zb(n),oh(r,"componentDidLoad"),l(),t.$onReadyResolve$(n),o||Db()),t.$onInstanceResolve$(n),t.$onRenderResolve$&&(t.$onRenderResolve$(),t.$onRenderResolve$=void 0),t.$flags$&512&&uh((function(){return Tc(t,!1)})),t.$flags$&=-517},DA=function(t){{var n=xi(t),l=n.$hostElement$.isConnected;return l&&(n.$flags$&18)===2&&Tc(n,!1),l}},Db=function(t){zb(Ga.documentElement),uh((function(){return Ab(Ac,"appload",{detail:{namespace:ew}})}))},oh=function(t,n,l){if(t&&t[n])try{return t[n](l)}catch(r){qa(r)}},zb=function(t){return t.classList.add("hydrated")},Sw=function(t,n){return xi(t).$instanceValues$.get(n)},Ew=function(t,n,l,r){var o=xi(t),u=o.$instanceValues$.get(n),f=o.$flags$,h=o.$lazyInstance$;l=cw(l,r.$members$[n][0]);var g=Number.isNaN(u)&&Number.isNaN(l),p=l!==u&&!g;(!(f&8)||u===void 0)&&p&&(o.$instanceValues$.set(n,l),h&&(f&18)===2&&Tc(o,!1))},Lb=function(t,n,l){if(n.$members$){var r=Object.entries(n.$members$),o=t.prototype;if(r.map((function(f){var h=f[0],g=f[1][0];g&31||l&2&&g&32?Object.defineProperty(o,h,{get:function(){return Sw(this,h)},set:function(p){Ew(this,h,p,n)},configurable:!0,enumerable:!0}):l&1&&g&64&&Object.defineProperty(o,h,{value:function(){for(var p=[],b=0;b<arguments.length;b++)p[b]=arguments[b];var _=xi(this);return _.$onInstancePromise$.then((function(){var w;return(w=_.$lazyInstance$)[h].apply(w,p)}))}})})),l&1){var u=new Map;o.attributeChangedCallback=function(f,h,g){var p=this;Nt.jmp((function(){var b=u.get(f);if(p.hasOwnProperty(b))g=p[b],delete p[b];else if(o.hasOwnProperty(b)&&typeof p[b]=="number"&&p[b]==g)return;p[b]=g===null&&typeof p[b]=="boolean"?!1:g}))},t.observedAttributes=r.filter((function(f){f[0];var h=f[1];return h[0]&15})).map((function(f){var h=f[0],g=f[1],p=g[1]||h;return u.set(p,h),p}))}}return t},Cw=function(t,n,l,r,o){return Sb(void 0,void 0,void 0,(function(){var u,f,h,g,p,b,_;return Eb(this,(function(w){switch(w.label){case 0:return(n.$flags$&32)!==0?[3,3]:(n.$flags$|=32,o=Rw(l),o.then?(u=tw(),[4,o]):[3,2]);case 1:o=w.sent(),u(),w.label=2;case 2:o.isProxied||(Lb(o,l,2),o.isProxied=!0),f=Bn("createInstance",l.$tagName$),n.$flags$|=8;try{new o(n)}catch(y){qa(y)}n.$flags$&=-9,f(),o.style&&(h=o.style,g=Mb(l),pc.has(g)||(p=Bn("registerStyles",l.$tagName$),dw(g,h,!!(l.$flags$&1)),p())),w.label=3;case 3:return b=n.$ancestorComponent$,_=function(){return Tc(n,!0)},b&&b["s-rc"]?b["s-rc"].push(_):_(),[2]}}))}))},Tw=function(t){if((Nt.$flags$&1)===0){var n=xi(t),l=n.$cmpMeta$,r=Bn("connectedCallback",l.$tagName$);if(n.$flags$&1)jb(t,n,l.$listeners$);else{n.$flags$|=1;for(var o=t;o=o.parentNode||o.host;)if(o["s-p"]){Rb(n,n.$ancestorComponent$=o);break}l.$members$&&Object.entries(l.$members$).map((function(u){var f=u[0],h=u[1][0];if(h&31&&t.hasOwnProperty(f)){var g=t[f];delete t[f],t[f]=g}})),Cw(t,n,l)}r()}},Aw=function(t){if((Nt.$flags$&1)===0){var n=xi(t),l=n.$lazyInstance$;n.$rmListeners$&&(n.$rmListeners$.map((function(r){return r()})),n.$rmListeners$=void 0),oh(l,"disconnectedCallback")}},Mw=function(t,n){n===void 0&&(n={});var l,r=Bn(),o=[],u=n.exclude||[],f=Ac.customElements,h=Ga.head,g=h.querySelector("meta[charset]"),p=Ga.createElement("style"),b=[],_,w=!0;Object.assign(Nt,n),Nt.$resourcesUrl$=new URL(n.resourcesUrl||"./",Ga.baseURI).href,t.map((function(S){S[1].map((function(A){var M={$flags$:A[0],$tagName$:A[1],$members$:A[2],$listeners$:A[3]};M.$members$=A[2],M.$listeners$=A[3];var C=M.$tagName$,D=(function(U){Jx(j,U);function j($){var W=U.call(this,$)||this;return $=W,kw($,M),M.$flags$&1&&$.attachShadow({mode:"open"}),W}return j.prototype.connectedCallback=function(){var $=this;_&&(clearTimeout(_),_=null),w?b.push(this):Nt.jmp((function(){return Tw($)}))},j.prototype.disconnectedCallback=function(){var $=this;Nt.jmp((function(){return Aw($)}))},j.prototype.componentOnReady=function(){return xi(this).$onReadyPromise$},j})(HTMLElement);M.$lazyBundleId$=S[0],!u.includes(C)&&!f.get(C)&&(o.push(C),f.define(C,Lb(D,M,1)))}))}));{p.innerHTML=o+aw,p.setAttribute("data-styles","");var y=(l=Nt.$nonce$)!==null&&l!==void 0?l:Tb(Ga);y!=null&&p.setAttribute("nonce",y),h.insertBefore(p,g?g.nextSibling:h.firstChild)}w=!1,b.length?b.map((function(S){return S.connectedCallback()})):Nt.jmp((function(){return _=setTimeout(Db,30)})),r()},jb=function(t,n,l,r){l&&l.map((function(o){var u=o[0],f=o[1],h=o[2],g=$w(t,u),p=Nw(n,h),b=Ow(u);Nt.ael(g,f,p,b),(n.$rmListeners$=n.$rmListeners$||[]).push((function(){return Nt.rel(g,f,p,b)}))}))},Nw=function(t,n){return function(l){try{t.$flags$&256?t.$lazyInstance$[n](l):(t.$queuedListeners$=t.$queuedListeners$||[]).push([n,l])}catch(r){qa(r)}}},$w=function(t,n){return n&16?Ga.body:t},Ow=function(t){return(t&2)!==0},ch=new WeakMap,xi=function(t){return ch.get(t)},zA=function(t,n){return ch.set(n.$lazyInstance$=t,n)},kw=function(t,n){var l={$flags$:0,$hostElement$:t,$cmpMeta$:n,$instanceValues$:new Map};return l.$onInstancePromise$=new Promise((function(r){return l.$onInstanceResolve$=r})),l.$onReadyPromise$=new Promise((function(r){return l.$onReadyResolve$=r})),t["s-p"]=[],t["s-rc"]=[],jb(t,l,n.$listeners$),ch.set(t,l)},Fv=function(t,n){return n in t},qa=function(t,n){return(0,console.error)(t,n)},Jd=new Map,Rw=function(t,n,l){var r=t.$tagName$.replace(/-/g,"_"),o=t.$lazyBundleId$,u=Jd.get(o);if(u)return u[r];{var f=function(h){return Jd.set(o,h),h[r]};switch(o){case"pwa-action-sheet":return Mt(()=>import("./pwa-action-sheet.entry-BPOBzlQt.js"),__vite__mapDeps([0,1])).then(f,qa);case"pwa-camera-modal":return Mt(()=>import("./pwa-camera-modal.entry-L9uESi9t.js"),__vite__mapDeps([2,1])).then(f,qa);case"pwa-toast":return Mt(()=>import("./pwa-toast.entry-Cvjp0ron.js"),__vite__mapDeps([3,1])).then(f,qa);case"pwa-camera-modal-instance":return Mt(()=>import("./pwa-camera-modal-instance.entry-BXuY8P7w.js"),__vite__mapDeps([4,1])).then(f,qa);case"pwa-camera":return Mt(()=>import("./pwa-camera.entry-UpWAP86Z.js"),__vite__mapDeps([5,1])).then(f,qa)}}return Mt(()=>import("./".concat(o,".entry.js").concat("")),[]).then((function(h){return Jd.set(o,h),h[r]}),qa)},pc=new Map,Ac=typeof window<"u"?window:{},Ga=Ac.document||{head:{}},Nt={$flags$:0,$resourcesUrl$:"",jmp:function(t){return t()},raf:function(t){return requestAnimationFrame(t)},ael:function(t,n,l,r){return t.addEventListener(n,l,r)},rel:function(t,n,l,r){return t.removeEventListener(n,l,r)},ce:function(t,n){return new CustomEvent(t,n)}},Bb=function(t){return Promise.resolve(t)},Dw=(function(){try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),qv=[],Hb=[],zw=function(t,n){return function(l){t.push(l),Rf||(Rf=!0,Nt.$flags$&4?uh(zf):Nt.raf(zf))}},Gv=function(t){for(var n=0;n<t.length;n++)try{t[n](performance.now())}catch(l){qa(l)}t.length=0},zf=function(){Gv(qv),Gv(Hb),(Rf=qv.length>0)&&Nt.raf(zf)},uh=function(t){return Bb().then(t)},Lw=zw(Hb),jw=function(){return Bb()},Bw=function(t,n){return typeof window>"u"?Promise.resolve():jw().then((function(){return Mw([["pwa-camera-modal",[[1,"pwa-camera-modal",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],present:[64],dismiss:[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{header:[1],cancelable:[4],options:[16],open:[32]}]]],["pwa-toast",[[1,"pwa-toast",{message:[1],duration:[2],closing:[32]}]]],["pwa-camera",[[1,"pwa-camera",{facingMode:[1,"facing-mode"],handlePhoto:[16],hidePicker:[4,"hide-picker"],handleNoDeviceError:[16],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"],photo:[32],photoSrc:[32],showShutterOverlay:[32],flashIndex:[32],hasCamera:[32],rotation:[32],deviceError:[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"]},[[16,"keyup","handleBackdropKeyUp"]]]]]],n)}))};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();const Hw=(t,n,l)=>{const r=t[n];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+n+(n.split("/").length!==l?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rc=globalThis,dh=rc.ShadowRoot&&(rc.ShadyCSS===void 0||rc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fh=Symbol(),Yv=new WeakMap;let Ub=class{constructor(n,l,r){if(this._$cssResult$=!0,r!==fh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=l}get styleSheet(){let n=this.o;const l=this.t;if(dh&&n===void 0){const r=l!==void 0&&l.length===1;r&&(n=Yv.get(l)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),r&&Yv.set(l,n))}return n}toString(){return this.cssText}};const Uw=t=>new Ub(typeof t=="string"?t:t+"",void 0,fh),vt=(t,...n)=>{const l=t.length===1?t[0]:n.reduce(((r,o,u)=>r+(f=>{if(f._$cssResult$===!0)return f.cssText;if(typeof f=="number")return f;throw Error("Value passed to 'css' function must be a 'css' function result: "+f+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[u+1]),t[0]);return new Ub(l,t,fh)},Iw=(t,n)=>{if(dh)t.adoptedStyleSheets=n.map((l=>l instanceof CSSStyleSheet?l:l.styleSheet));else for(const l of n){const r=document.createElement("style"),o=rc.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=l.cssText,t.appendChild(r)}},Xv=dh?t=>t:t=>t instanceof CSSStyleSheet?(n=>{let l="";for(const r of n.cssRules)l+=r.cssText;return Uw(l)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pw,defineProperty:Vw,getOwnPropertyDescriptor:Fw,getOwnPropertyNames:qw,getOwnPropertySymbols:Gw,getPrototypeOf:Yw}=Object,Mc=globalThis,Wv=Mc.trustedTypes,Xw=Wv?Wv.emptyScript:"",Ww=Mc.reactiveElementPolyfillSupport,vs=(t,n)=>t,Zl={toAttribute(t,n){switch(n){case Boolean:t=t?Xw:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,n){let l=t;switch(n){case Boolean:l=t!==null;break;case Number:l=t===null?null:Number(t);break;case Object:case Array:try{l=JSON.parse(t)}catch{l=null}}return l}},hh=(t,n)=>!Pw(t,n),Qv={attribute:!0,type:String,converter:Zl,reflect:!1,useDefault:!1,hasChanged:hh};Symbol.metadata??=Symbol("metadata"),Mc.litPropertyMetadata??=new WeakMap;let ql=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,l=Qv){if(l.state&&(l.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((l=Object.create(l)).wrapped=!0),this.elementProperties.set(n,l),!l.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(n,r,l);o!==void 0&&Vw(this.prototype,n,o)}}static getPropertyDescriptor(n,l,r){const{get:o,set:u}=Fw(this.prototype,n)??{get(){return this[l]},set(f){this[l]=f}};return{get:o,set(f){const h=o?.call(this);u?.call(this,f),this.requestUpdate(n,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??Qv}static _$Ei(){if(this.hasOwnProperty(vs("elementProperties")))return;const n=Yw(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(vs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vs("properties"))){const l=this.properties,r=[...qw(l),...Gw(l)];for(const o of r)this.createProperty(o,l[o])}const n=this[Symbol.metadata];if(n!==null){const l=litPropertyMetadata.get(n);if(l!==void 0)for(const[r,o]of l)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[l,r]of this.elementProperties){const o=this._$Eu(l,r);o!==void 0&&this._$Eh.set(o,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const l=[];if(Array.isArray(n)){const r=new Set(n.flat(1/0).reverse());for(const o of r)l.unshift(Xv(o))}else n!==void 0&&l.push(Xv(n));return l}static _$Eu(n,l){const r=l.attribute;return r===!1?void 0:typeof r=="string"?r:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((n=>n(this)))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){const n=new Map,l=this.constructor.elementProperties;for(const r of l.keys())this.hasOwnProperty(r)&&(n.set(r,this[r]),delete this[r]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Iw(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((n=>n.hostConnected?.()))}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach((n=>n.hostDisconnected?.()))}attributeChangedCallback(n,l,r){this._$AK(n,r)}_$ET(n,l){const r=this.constructor.elementProperties.get(n),o=this.constructor._$Eu(n,r);if(o!==void 0&&r.reflect===!0){const u=(r.converter?.toAttribute!==void 0?r.converter:Zl).toAttribute(l,r.type);this._$Em=n,u==null?this.removeAttribute(o):this.setAttribute(o,u),this._$Em=null}}_$AK(n,l){const r=this.constructor,o=r._$Eh.get(n);if(o!==void 0&&this._$Em!==o){const u=r.getPropertyOptions(o),f=typeof u.converter=="function"?{fromAttribute:u.converter}:u.converter?.fromAttribute!==void 0?u.converter:Zl;this._$Em=o;const h=f.fromAttribute(l,u.type);this[o]=h??this._$Ej?.get(o)??h,this._$Em=null}}requestUpdate(n,l,r){if(n!==void 0){const o=this.constructor,u=this[n];if(r??=o.getPropertyOptions(n),!((r.hasChanged??hh)(u,l)||r.useDefault&&r.reflect&&u===this._$Ej?.get(n)&&!this.hasAttribute(o._$Eu(n,r))))return;this.C(n,l,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,l,{useDefault:r,reflect:o,wrapped:u},f){r&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,f??l??this[n]),u!==!0||f!==void 0)||(this._$AL.has(n)||(this.hasUpdated||r||(l=void 0),this._$AL.set(n,l)),o===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,u]of this._$Ep)this[o]=u;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,u]of r){const{wrapped:f}=u,h=this[o];f!==!0||this._$AL.has(o)||h===void 0||this.C(o,void 0,u,h)}}let n=!1;const l=this._$AL;try{n=this.shouldUpdate(l),n?(this.willUpdate(l),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(l)):this._$EM()}catch(r){throw n=!1,this._$EM(),r}n&&this._$AE(l)}willUpdate(n){}_$AE(n){this._$EO?.forEach((l=>l.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach((l=>this._$ET(l,this[l]))),this._$EM()}updated(n){}firstUpdated(n){}};ql.elementStyles=[],ql.shadowRootOptions={mode:"open"},ql[vs("elementProperties")]=new Map,ql[vs("finalized")]=new Map,Ww?.({ReactiveElement:ql}),(Mc.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ph=globalThis,mc=ph.trustedTypes,Zv=mc?mc.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ib="$lit$",pi=`lit$${Math.random().toFixed(9).slice(2)}$`,Pb="?"+pi,Qw=`<${Pb}>`,Ki=document,xs=()=>Ki.createComment(""),ws=t=>t===null||typeof t!="object"&&typeof t!="function",mh=Array.isArray,Zw=t=>mh(t)||typeof t?.[Symbol.iterator]=="function",ef=`[ 	
\f\r]`,is=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kv=/-->/g,Jv=/>/g,qi=RegExp(`>|${ef}(?:([^\\s"'>=/]+)(${ef}*=${ef}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),e0=/'/g,t0=/"/g,Vb=/^(?:script|style|textarea|title)$/i,Kw=t=>(n,...l)=>({_$litType$:t,strings:n,values:l}),we=Kw(1),La=Symbol.for("lit-noChange"),lt=Symbol.for("lit-nothing"),a0=new WeakMap,Xi=Ki.createTreeWalker(Ki,129);function Fb(t,n){if(!mh(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zv!==void 0?Zv.createHTML(n):n}const Jw=(t,n)=>{const l=t.length-1,r=[];let o,u=n===2?"<svg>":n===3?"<math>":"",f=is;for(let h=0;h<l;h++){const g=t[h];let p,b,_=-1,w=0;for(;w<g.length&&(f.lastIndex=w,b=f.exec(g),b!==null);)w=f.lastIndex,f===is?b[1]==="!--"?f=Kv:b[1]!==void 0?f=Jv:b[2]!==void 0?(Vb.test(b[2])&&(o=RegExp("</"+b[2],"g")),f=qi):b[3]!==void 0&&(f=qi):f===qi?b[0]===">"?(f=o??is,_=-1):b[1]===void 0?_=-2:(_=f.lastIndex-b[2].length,p=b[1],f=b[3]===void 0?qi:b[3]==='"'?t0:e0):f===t0||f===e0?f=qi:f===Kv||f===Jv?f=is:(f=qi,o=void 0);const y=f===qi&&t[h+1].startsWith("/>")?" ":"";u+=f===is?g+Qw:_>=0?(r.push(p),g.slice(0,_)+Ib+g.slice(_)+pi+y):g+pi+(_===-2?h:y)}return[Fb(t,u+(t[l]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),r]};let Lf=class qb{constructor({strings:n,_$litType$:l},r){let o;this.parts=[];let u=0,f=0;const h=n.length-1,g=this.parts,[p,b]=Jw(n,l);if(this.el=qb.createElement(p,r),Xi.currentNode=this.el.content,l===2||l===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(o=Xi.nextNode())!==null&&g.length<h;){if(o.nodeType===1){if(o.hasAttributes())for(const _ of o.getAttributeNames())if(_.endsWith(Ib)){const w=b[f++],y=o.getAttribute(_).split(pi),S=/([.?@])?(.*)/.exec(w);g.push({type:1,index:u,name:S[2],strings:y,ctor:S[1]==="."?tS:S[1]==="?"?aS:S[1]==="@"?nS:Nc}),o.removeAttribute(_)}else _.startsWith(pi)&&(g.push({type:6,index:u}),o.removeAttribute(_));if(Vb.test(o.tagName)){const _=o.textContent.split(pi),w=_.length-1;if(w>0){o.textContent=mc?mc.emptyScript:"";for(let y=0;y<w;y++)o.append(_[y],xs()),Xi.nextNode(),g.push({type:2,index:++u});o.append(_[w],xs())}}}else if(o.nodeType===8)if(o.data===Pb)g.push({type:2,index:u});else{let _=-1;for(;(_=o.data.indexOf(pi,_+1))!==-1;)g.push({type:7,index:u}),_+=pi.length-1}u++}}static createElement(n,l){const r=Ki.createElement("template");return r.innerHTML=n,r}};function Kl(t,n,l=t,r){if(n===La)return n;let o=r!==void 0?l._$Co?.[r]:l._$Cl;const u=ws(n)?void 0:n._$litDirective$;return o?.constructor!==u&&(o?._$AO?.(!1),u===void 0?o=void 0:(o=new u(t),o._$AT(t,l,r)),r!==void 0?(l._$Co??=[])[r]=o:l._$Cl=o),o!==void 0&&(n=Kl(t,o._$AS(t,n.values),o,r)),n}let eS=class{constructor(n,l){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:l},parts:r}=this._$AD,o=(n?.creationScope??Ki).importNode(l,!0);Xi.currentNode=o;let u=Xi.nextNode(),f=0,h=0,g=r[0];for(;g!==void 0;){if(f===g.index){let p;g.type===2?p=new gh(u,u.nextSibling,this,n):g.type===1?p=new g.ctor(u,g.name,g.strings,this,n):g.type===6&&(p=new iS(u,this,n)),this._$AV.push(p),g=r[++h]}f!==g?.index&&(u=Xi.nextNode(),f++)}return Xi.currentNode=Ki,o}p(n){let l=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(n,r,l),l+=r.strings.length-2):r._$AI(n[l])),l++}},gh=class Gb{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,l,r,o){this.type=2,this._$AH=lt,this._$AN=void 0,this._$AA=n,this._$AB=l,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&n?.nodeType===11&&(n=l.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,l=this){n=Kl(this,n,l),ws(n)?n===lt||n==null||n===""?(this._$AH!==lt&&this._$AR(),this._$AH=lt):n!==this._$AH&&n!==La&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):Zw(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==lt&&ws(this._$AH)?this._$AA.nextSibling.data=n:this.T(Ki.createTextNode(n)),this._$AH=n}$(n){const{values:l,_$litType$:r}=n,o=typeof r=="number"?this._$AC(n):(r.el===void 0&&(r.el=Lf.createElement(Fb(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(l);else{const u=new eS(o,this),f=u.u(this.options);u.p(l),this.T(f),this._$AH=u}}_$AC(n){let l=a0.get(n.strings);return l===void 0&&a0.set(n.strings,l=new Lf(n)),l}k(n){mh(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let r,o=0;for(const u of n)o===l.length?l.push(r=new Gb(this.O(xs()),this.O(xs()),this,this.options)):r=l[o],r._$AI(u),o++;o<l.length&&(this._$AR(r&&r._$AB.nextSibling,o),l.length=o)}_$AR(n=this._$AA.nextSibling,l){for(this._$AP?.(!1,!0,l);n!==this._$AB;){const r=n.nextSibling;n.remove(),n=r}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},Nc=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,l,r,o,u){this.type=1,this._$AH=lt,this._$AN=void 0,this.element=n,this.name=l,this._$AM=o,this.options=u,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=lt}_$AI(n,l=this,r,o){const u=this.strings;let f=!1;if(u===void 0)n=Kl(this,n,l,0),f=!ws(n)||n!==this._$AH&&n!==La,f&&(this._$AH=n);else{const h=n;let g,p;for(n=u[0],g=0;g<u.length-1;g++)p=Kl(this,h[r+g],l,g),p===La&&(p=this._$AH[g]),f||=!ws(p)||p!==this._$AH[g],p===lt?n=lt:n!==lt&&(n+=(p??"")+u[g+1]),this._$AH[g]=p}f&&!o&&this.j(n)}j(n){n===lt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},tS=class extends Nc{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===lt?void 0:n}},aS=class extends Nc{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==lt)}},nS=class extends Nc{constructor(n,l,r,o,u){super(n,l,r,o,u),this.type=5}_$AI(n,l=this){if((n=Kl(this,n,l,0)??lt)===La)return;const r=this._$AH,o=n===lt&&r!==lt||n.capture!==r.capture||n.once!==r.once||n.passive!==r.passive,u=n!==lt&&(r===lt||o);o&&this.element.removeEventListener(this.name,this,r),u&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},iS=class{constructor(n,l,r){this.element=n,this.type=6,this._$AN=void 0,this._$AM=l,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(n){Kl(this,n)}};const lS=ph.litHtmlPolyfillSupport;lS?.(Lf,gh),(ph.litHtmlVersions??=[]).push("3.3.1");const rS=(t,n,l)=>{const r=l?.renderBefore??n;let o=r._$litPart$;if(o===void 0){const u=l?.renderBefore??null;r._$litPart$=o=new gh(n.insertBefore(xs(),u),u,void 0,l??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vh=globalThis;let bs=class extends ql{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){const l=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=rS(l,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return La}};bs._$litElement$=!0,bs.finalized=!0,vh.litElementHydrateSupport?.({LitElement:bs});const sS=vh.litElementPolyfillSupport;sS?.({LitElement:bs});(vh.litElementVersions??=[]).push("4.2.1");var oS=vt`
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
`;const jf=new Set,Gl=new Map;let Yi,bh="ltr",yh="en";const Yb=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Yb){const t=new MutationObserver(Wb);bh=document.documentElement.dir||"ltr",yh=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Xb(...t){t.map(n=>{const l=n.$code.toLowerCase();Gl.has(l)?Gl.set(l,Object.assign(Object.assign({},Gl.get(l)),n)):Gl.set(l,n),Yi||(Yi=n)}),Wb()}function Wb(){Yb&&(bh=document.documentElement.dir||"ltr",yh=document.documentElement.lang||navigator.language),[...jf.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let cS=class{constructor(n){this.host=n,this.host.addController(this)}hostConnected(){jf.add(this.host)}hostDisconnected(){jf.delete(this.host)}dir(){return`${this.host.dir||bh}`.toLowerCase()}lang(){return`${this.host.lang||yh}`.toLowerCase()}getTranslationData(n){var l,r;const o=new Intl.Locale(n.replace(/_/g,"-")),u=o?.language.toLowerCase(),f=(r=(l=o?.region)===null||l===void 0?void 0:l.toLowerCase())!==null&&r!==void 0?r:"",h=Gl.get(`${u}-${f}`),g=Gl.get(u);return{locale:o,language:u,region:f,primary:h,secondary:g}}exists(n,l){var r;const{primary:o,secondary:u}=this.getTranslationData((r=l.lang)!==null&&r!==void 0?r:this.lang());return l=Object.assign({includeFallback:!1},l),!!(o&&o[n]||u&&u[n]||l.includeFallback&&Yi&&Yi[n])}term(n,...l){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let u;if(r&&r[n])u=r[n];else if(o&&o[n])u=o[n];else if(Yi&&Yi[n])u=Yi[n];else return console.error(`No translation found for: ${String(n)}`),String(n);return typeof u=="function"?u(...l):u}date(n,l){return n=new Date(n),new Intl.DateTimeFormat(this.lang(),l).format(n)}number(n,l){return n=Number(n),isNaN(n)?"":new Intl.NumberFormat(this.lang(),l).format(n)}relativeTime(n,l,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(n,l)}};var Qb={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,n)=>`Go to slide ${t} of ${n}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Xb(Qb);var uS=Qb,Ba=class extends cS{};Xb(uS);var Ot=vt`
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
 */const dS={attribute:!0,type:String,converter:Zl,reflect:!1,hasChanged:hh},fS=(t=dS,n,l)=>{const{kind:r,metadata:o}=l;let u=globalThis.litPropertyMetadata.get(o);if(u===void 0&&globalThis.litPropertyMetadata.set(o,u=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),u.set(l.name,t),r==="accessor"){const{name:f}=l;return{set(h){const g=n.get.call(this);n.set.call(this,h),this.requestUpdate(f,g,t)},init(h){return h!==void 0&&this.C(f,void 0,t,h),h}}}if(r==="setter"){const{name:f}=l;return function(h){const g=this[f];n.call(this,h),this.requestUpdate(f,g,t)}}throw Error("Unsupported decorator location: "+r)};function H(t){return(n,l)=>typeof l=="object"?fS(t,n,l):((r,o,u)=>{const f=o.hasOwnProperty(u);return o.constructor.createProperty(u,r),f?Object.getOwnPropertyDescriptor(o,u):void 0})(t,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return H({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zb(t){return(n,l)=>{const r=typeof n=="function"?n:n[l];Object.assign(r,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hS=(t,n,l)=>(l.configurable=!0,l.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(t,n,l),l);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ze(t,n){return(l,r,o)=>{const u=f=>f.renderRoot?.querySelector(t)??null;return hS(l,r,{get(){return u(this)}})}}var sc,st=class extends bs{constructor(){super(),Wx(this,sc,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,n])=>{this.constructor.define(t,n)})}emit(t,n){const l=new CustomEvent(t,_i({bubbles:!0,cancelable:!1,composed:!0,detail:{}},n));return this.dispatchEvent(l),l}static define(t,n=this,l={}){const r=customElements.get(t);if(!r){try{customElements.define(t,n,l)}catch{customElements.define(t,class extends n{},l)}return}let o=" (unknown version)",u=o;"version"in n&&n.version&&(o=" v"+n.version),"version"in r&&r.version&&(u=" v"+r.version),!(o&&u&&o===u)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${u} has already been registered.`)}attributeChangedCallback(t,n,l){Xx(this,sc)||(this.constructor.elementProperties.forEach((r,o)=>{r.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),Qx(this,sc,!0)),super.attributeChangedCallback(t,n,l)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((n,l)=>{t.has(l)&&this[l]==null&&(this[l]=n)})}};sc=new WeakMap;st.version="2.20.1";st.dependencies={};T([H()],st.prototype,"dir",2);T([H()],st.prototype,"lang",2);var $c=class extends st{constructor(){super(...arguments),this.localize=new Ba(this)}render(){return we`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};$c.styles=[Ot,oS];var ls=new WeakMap,rs=new WeakMap,ss=new WeakMap,tf=new WeakSet,Wo=new WeakMap,Cs=class{constructor(t,n){this.handleFormData=l=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),u=this.options.value(this.host),f=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!f&&typeof o=="string"&&o.length>0&&typeof u<"u"&&(Array.isArray(u)?u.forEach(h=>{l.formData.append(o,h.toString())}):l.formData.append(o,u.toString()))},this.handleFormSubmit=l=>{var r;const o=this.options.disabled(this.host),u=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=ls.get(this.form))==null||r.forEach(f=>{this.setUserInteracted(f,!0)})),this.form&&!this.form.noValidate&&!o&&!u(this.host)&&(l.preventDefault(),l.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Wo.set(this.host,[])},this.handleInteraction=l=>{const r=Wo.get(this.host);r.includes(l.type)||r.push(l.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const l=this.form.querySelectorAll("*");for(const r of l)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const l=this.form.querySelectorAll("*");for(const r of l)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=_i({form:l=>{const r=l.form;if(r){const u=l.getRootNode().querySelector(`#${r}`);if(u)return u}return l.closest("form")},name:l=>l.name,value:l=>l.value,defaultValue:l=>l.defaultValue,disabled:l=>{var r;return(r=l.disabled)!=null?r:!1},reportValidity:l=>typeof l.reportValidity=="function"?l.reportValidity():!0,checkValidity:l=>typeof l.checkValidity=="function"?l.checkValidity():!0,setValue:(l,r)=>l.value=r,assumeInteractionOn:["sl-input"]},n)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Wo.set(this.host,[]),this.options.assumeInteractionOn.forEach(n=>{this.host.addEventListener(n,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Wo.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ls.has(this.form)?ls.get(this.form).add(this.host):ls.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),rs.has(this.form)||(rs.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ss.has(this.form)||(ss.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=ls.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),rs.has(this.form)&&(this.form.reportValidity=rs.get(this.form),rs.delete(this.form)),ss.has(this.form)&&(this.form.checkValidity=ss.get(this.form),ss.delete(this.form)),this.form=void 0))}setUserInteracted(t,n){n?tf.add(t):tf.delete(t),t.requestUpdate()}doAction(t,n){if(this.form){const l=document.createElement("button");l.type=t,l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.clipPath="inset(50%)",l.style.overflow="hidden",l.style.whiteSpace="nowrap",n&&(l.name=n.name,l.value=n.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{n.hasAttribute(r)&&l.setAttribute(r,n.getAttribute(r))})),this.form.append(l),l.click(),l.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const n=this.host,l=!!tf.has(n),r=!!n.required;n.toggleAttribute("data-required",r),n.toggleAttribute("data-optional",!r),n.toggleAttribute("data-invalid",!t),n.toggleAttribute("data-valid",t),n.toggleAttribute("data-user-invalid",!t&&l),n.toggleAttribute("data-user-valid",t&&l)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const n=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||n.preventDefault(),this.host.dispatchEvent(n)||t?.preventDefault()}},_h=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Cc(_i({},_h),{valid:!1,valueMissing:!0}));Object.freeze(Cc(_i({},_h),{valid:!1,customError:!0}));var pS=vt`
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
`,tl=class{constructor(t,...n){this.slotNames=[],this.handleSlotChange=l=>{const r=l.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=n}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const n=t;if(n.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!n.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},mS={name:"default",resolver:t=>Px(`assets/icons/${t}.svg`)},gS=mS,n0={caret:`
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
  `},vS={name:"system",resolver:t=>t in n0?`data:image/svg+xml,${encodeURIComponent(n0[t])}`:""},bS=vS,yS=[gS,bS],Bf=[];function _S(t){Bf.push(t)}function xS(t){Bf=Bf.filter(n=>n!==t)}function i0(t){return yS.find(n=>n.name===t)}var wS=vt`
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
`;function Ge(t,n){const l=_i({waitUntilFirstUpdate:!1},n);return(r,o)=>{const{update:u}=r,f=Array.isArray(t)?t:[t];r.update=function(h){f.forEach(g=>{const p=g;if(h.has(p)){const b=h.get(p),_=this[p];b!==_&&(!l.waitUntilFirstUpdate||this.hasUpdated)&&this[o](b,_)}}),u.call(this,h)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const SS=(t,n)=>t?._$litType$!==void 0,ES=t=>t.strings===void 0,CS={},TS=(t,n=CS)=>t._$AH=n;var os=Symbol(),Qo=Symbol(),af,nf=new Map,Gt=class extends st{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,n){var l;let r;if(n?.spriteSheet)return this.svg=we`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?os:Qo}catch{return Qo}try{const o=document.createElement("div");o.innerHTML=await r.text();const u=o.firstElementChild;if(((l=u?.tagName)==null?void 0:l.toLowerCase())!=="svg")return os;af||(af=new DOMParser);const h=af.parseFromString(u.outerHTML,"text/html").body.querySelector("svg");return h?(h.part.add("svg"),document.adoptNode(h)):os}catch{return os}}connectedCallback(){super.connectedCallback(),_S(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),xS(this)}getIconSource(){const t=i0(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:n,fromLibrary:l}=this.getIconSource(),r=l?i0(this.library):void 0;if(!n){this.svg=null;return}let o=nf.get(n);if(o||(o=this.resolveIcon(n,r),nf.set(n,o)),!this.initialRender)return;const u=await o;if(u===Qo&&nf.delete(n),n===this.getIconSource().url){if(SS(u)){if(this.svg=u,r){await this.updateComplete;const f=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&f&&r.mutator(f)}return}switch(u){case Qo:case os:this.svg=null,this.emit("sl-error");break;default:this.svg=u.cloneNode(!0),(t=r?.mutator)==null||t.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Gt.styles=[Ot,wS];T([ft()],Gt.prototype,"svg",2);T([H({reflect:!0})],Gt.prototype,"name",2);T([H()],Gt.prototype,"src",2);T([H()],Gt.prototype,"label",2);T([H({reflect:!0})],Gt.prototype,"library",2);T([Ge("label")],Gt.prototype,"handleLabelChange",1);T([Ge(["name","src","library"])],Gt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},xh=t=>(...n)=>({_$litDirective$:t,values:n});let wh=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,l,r){this._$Ct=n,this._$AM=l,this._$Ci=r}_$AS(n,l){return this.update(n,l)}update(n,l){return this.render(...l)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=xh(class extends wh{constructor(t){if(super(t),t.type!==hi.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((n=>t[n])).join(" ")+" "}update(t,[n]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in n)n[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(n)}const l=t.element.classList;for(const r of this.st)r in n||(l.remove(r),this.st.delete(r));for(const r in n){const o=!!n[r];o===this.st.has(r)||this.nt?.has(r)||(o?(l.add(r),this.st.add(r)):(l.remove(r),this.st.delete(r)))}return La}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kb=Symbol.for(""),AS=t=>{if(t?.r===Kb)return t?._$litStatic$},gc=(t,...n)=>({_$litStatic$:n.reduce(((l,r,o)=>l+(u=>{if(u._$litStatic$!==void 0)return u._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${u}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[o+1]),t[0]),r:Kb}),l0=new Map,MS=t=>(n,...l)=>{const r=l.length;let o,u;const f=[],h=[];let g,p=0,b=!1;for(;p<r;){for(g=n[p];p<r&&(u=l[p],(o=AS(u))!==void 0);)g+=o+n[++p],b=!0;p!==r&&h.push(u),f.push(g),p++}if(p===r&&f.push(n[r]),b){const _=f.join("$$lit$$");(n=l0.get(_))===void 0&&(f.raw=f,l0.set(_,n=f)),l=h}return t(n,...l)},oc=MS(we);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=t=>t??lt;var Ue=class extends st{constructor(){super(...arguments),this.formControlController=new Cs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new tl(this,"[default]","prefix","suffix"),this.localize=new Ba(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:_h}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),n=t?gc`a`:gc`button`;return oc`
      <${n}
        part="base"
        class=${dt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?oc` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?oc`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${n}>
    `}};Ue.styles=[Ot,pS];Ue.dependencies={"sl-icon":Gt,"sl-spinner":$c};T([Ze(".button")],Ue.prototype,"button",2);T([ft()],Ue.prototype,"hasFocus",2);T([ft()],Ue.prototype,"invalid",2);T([H()],Ue.prototype,"title",2);T([H({reflect:!0})],Ue.prototype,"variant",2);T([H({reflect:!0})],Ue.prototype,"size",2);T([H({type:Boolean,reflect:!0})],Ue.prototype,"caret",2);T([H({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);T([H({type:Boolean,reflect:!0})],Ue.prototype,"loading",2);T([H({type:Boolean,reflect:!0})],Ue.prototype,"outline",2);T([H({type:Boolean,reflect:!0})],Ue.prototype,"pill",2);T([H({type:Boolean,reflect:!0})],Ue.prototype,"circle",2);T([H()],Ue.prototype,"type",2);T([H()],Ue.prototype,"name",2);T([H()],Ue.prototype,"value",2);T([H()],Ue.prototype,"href",2);T([H()],Ue.prototype,"target",2);T([H()],Ue.prototype,"rel",2);T([H()],Ue.prototype,"download",2);T([H()],Ue.prototype,"form",2);T([H({attribute:"formaction"})],Ue.prototype,"formAction",2);T([H({attribute:"formenctype"})],Ue.prototype,"formEnctype",2);T([H({attribute:"formmethod"})],Ue.prototype,"formMethod",2);T([H({attribute:"formnovalidate",type:Boolean})],Ue.prototype,"formNoValidate",2);T([H({attribute:"formtarget"})],Ue.prototype,"formTarget",2);T([Ge("disabled",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleDisabledChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const NS=new Set(["children","localName","ref","style","className"]),r0=new WeakMap,s0=(t,n,l,r,o)=>{const u=o?.[n];u===void 0?(t[n]=l,l==null&&n in HTMLElement.prototype&&t.removeAttribute(n)):l!==r&&((f,h,g)=>{let p=r0.get(f);p===void 0&&r0.set(f,p=new Map);let b=p.get(h);g!==void 0?b===void 0?(p.set(h,b={handleEvent:g}),f.addEventListener(h,b)):b.handleEvent=g:b!==void 0&&(p.delete(h),f.removeEventListener(h,b))})(t,u,l)},ta=({react:t,tagName:n,elementClass:l,events:r,displayName:o})=>{const u=new Set(Object.keys(r??{})),f=t.forwardRef(((h,g)=>{const p=t.useRef(new Map),b=t.useRef(null),_={},w={};for(const[y,S]of Object.entries(h))NS.has(y)?_[y==="className"?"class":y]=S:u.has(y)||y in l.prototype?w[y]=S:_[y]=S;return t.useLayoutEffect((()=>{if(b.current===null)return;const y=new Map;for(const S in w)s0(b.current,S,h[S],p.current.get(S),r),p.current.delete(S),y.set(S,h[S]);for(const[S,A]of p.current)s0(b.current,S,void 0,A,r);p.current=y})),t.useLayoutEffect((()=>{b.current?.removeAttribute("defer-hydration")}),[]),_.suppressHydrationWarning=!0,t.createElement(n,{..._,ref:t.useCallback((y=>{b.current=y,typeof g=="function"?g(y):g!==null&&(g.current=y)}),[g])})}));return f.displayName=o??l.name,f};var $S="sl-button";Ue.define("sl-button");var OS=ta({tagName:$S,elementClass:Ue,react:Ft,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),ke=OS;function o0(t){return{onFetch:(n,l)=>{const r=n.options,o=n.fetchOptions?.meta?.fetchMore?.direction,u=n.state.data?.pages||[],f=n.state.data?.pageParams||[];let h={pages:[],pageParams:[]},g=0;const p=async()=>{let b=!1;const _=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(n.signal.aborted?b=!0:n.signal.addEventListener("abort",()=>{b=!0}),n.signal)})},w=L_(n.options,n.fetchOptions),y=async(S,A,M)=>{if(b)return Promise.reject();if(A==null&&S.pages.length)return Promise.resolve(S);const D=(()=>{const W={client:n.client,queryKey:n.queryKey,pageParam:A,direction:M?"backward":"forward",meta:n.options.meta};return _(W),W})(),U=await w(D),{maxPages:j}=n.options,$=M?j_:B_;return{pages:$(S.pages,U,j),pageParams:$(S.pageParams,A,j)}};if(o&&u.length){const S=o==="backward",A=S?kS:c0,M={pages:u,pageParams:f},C=A(r,M);h=await y(M,C,S)}else{const S=t??u.length;do{const A=g===0?f[0]??r.initialPageParam:c0(r,h);if(g>0&&A==null)break;h=await y(h,A),g++}while(g<S)}return h};n.options.persister?n.fetchFn=()=>n.options.persister?.(p,{client:n.client,queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},l):n.fetchFn=p}}}function c0(t,{pages:n,pageParams:l}){const r=n.length-1;return n.length>0?t.getNextPageParam(n[r],n,l[r],l):void 0}function kS(t,{pages:n,pageParams:l}){return n.length>0?t.getPreviousPageParam?.(n[0],n,l[0],l):void 0}var RS=class extends ob{constructor(t={}){super(),this.config=t,this.#e=new Set,this.#t=new Map,this.#a=0}#e;#t;#a;build(t,n,l){const r=new H_({client:t,mutationCache:this,mutationId:++this.#a,options:t.defaultMutationOptions(n),state:l});return this.add(r),r}add(t){this.#e.add(t);const n=Zo(t);if(typeof n=="string"){const l=this.#t.get(n);l?l.push(t):this.#t.set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#e.delete(t)){const n=Zo(t);if(typeof n=="string"){const l=this.#t.get(n);if(l)if(l.length>1){const r=l.indexOf(t);r!==-1&&l.splice(r,1)}else l[0]===t&&this.#t.delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Zo(t);if(typeof n=="string"){const r=this.#t.get(n)?.find(o=>o.state.status==="pending");return!r||r===t}else return!0}runNext(t){const n=Zo(t);return typeof n=="string"?this.#t.get(n)?.find(r=>r!==t&&r.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){ga.batch(()=>{this.#e.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(t){const n={exact:!0,...t};return this.getAll().find(l=>xv(n,l))}findAll(t={}){return this.getAll().filter(n=>xv(t,n))}notify(t){ga.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return ga.batch(()=>Promise.all(t.map(n=>n.continue().catch(Ln))))}};function Zo(t){return t.options.scope?.id}var DS=class extends ob{constructor(t={}){super(),this.config=t,this.#e=new Map}#e;build(t,n,l){const r=n.queryKey,o=n.queryHash??cb(r,n);let u=this.get(o);return u||(u=new U_({client:t,queryKey:r,queryHash:o,options:t.defaultQueryOptions(n),state:l,defaultOptions:t.getQueryDefaults(r)}),this.add(u)),u}add(t){this.#e.has(t.queryHash)||(this.#e.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=this.#e.get(t.queryHash);n&&(t.destroy(),n===t&&this.#e.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ga.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#e.get(t)}getAll(){return[...this.#e.values()]}find(t){const n={exact:!0,...t};return this.getAll().find(l=>wv(n,l))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(l=>wv(t,l)):n}notify(t){ga.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){ga.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ga.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},zS=class{#e;#t;#a;#i;#l;#n;#r;#s;constructor(t={}){this.#e=t.queryCache||new DS,this.#t=t.mutationCache||new RS,this.#a=t.defaultOptions||{},this.#i=new Map,this.#l=new Map,this.#n=0}mount(){this.#n++,this.#n===1&&(this.#r=I_.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=Sv.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#n--,this.#n===0&&(this.#r?.(),this.#r=void 0,this.#s?.(),this.#s=void 0)}isFetching(t){return this.#e.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#t.findAll({...t,status:"pending"}).length}getQueryData(t){const n=this.defaultQueryOptions({queryKey:t});return this.#e.get(n.queryHash)?.state.data}ensureQueryData(t){const n=this.defaultQueryOptions(t),l=this.#e.build(this,n),r=l.state.data;return r===void 0?this.fetchQuery(t):(t.revalidateIfStale&&l.isStaleByTime(Ev(n.staleTime,l))&&this.prefetchQuery(n),Promise.resolve(r))}getQueriesData(t){return this.#e.findAll(t).map(({queryKey:n,state:l})=>{const r=l.data;return[n,r]})}setQueryData(t,n,l){const r=this.defaultQueryOptions({queryKey:t}),u=this.#e.get(r.queryHash)?.state.data,f=P_(n,u);if(f!==void 0)return this.#e.build(this,r).setData(f,{...l,manual:!0})}setQueriesData(t,n,l){return ga.batch(()=>this.#e.findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,n,l)]))}getQueryState(t){const n=this.defaultQueryOptions({queryKey:t});return this.#e.get(n.queryHash)?.state}removeQueries(t){const n=this.#e;ga.batch(()=>{n.findAll(t).forEach(l=>{n.remove(l)})})}resetQueries(t,n){const l=this.#e;return ga.batch(()=>(l.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...t},n)))}cancelQueries(t,n={}){const l={revert:!0,...n},r=ga.batch(()=>this.#e.findAll(t).map(o=>o.cancel(l)));return Promise.all(r).then(Ln).catch(Ln)}invalidateQueries(t,n={}){return ga.batch(()=>(this.#e.findAll(t).forEach(l=>{l.invalidate()}),t?.refetchType==="none"?Promise.resolve():this.refetchQueries({...t,type:t?.refetchType??t?.type??"active"},n)))}refetchQueries(t,n={}){const l={...n,cancelRefetch:n.cancelRefetch??!0},r=ga.batch(()=>this.#e.findAll(t).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let u=o.fetch(void 0,l);return l.throwOnError||(u=u.catch(Ln)),o.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(r).then(Ln)}fetchQuery(t){const n=this.defaultQueryOptions(t);n.retry===void 0&&(n.retry=!1);const l=this.#e.build(this,n);return l.isStaleByTime(Ev(n.staleTime,l))?l.fetch(n):Promise.resolve(l.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Ln).catch(Ln)}fetchInfiniteQuery(t){return t.behavior=o0(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Ln).catch(Ln)}ensureInfiniteQueryData(t){return t.behavior=o0(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Sv.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(t){this.#a=t}setQueryDefaults(t,n){this.#i.set(Cv(t),{queryKey:t,defaultOptions:n})}getQueryDefaults(t){const n=[...this.#i.values()],l={};return n.forEach(r=>{Tv(t,r.queryKey)&&Object.assign(l,r.defaultOptions)}),l}setMutationDefaults(t,n){this.#l.set(Cv(t),{mutationKey:t,defaultOptions:n})}getMutationDefaults(t){const n=[...this.#l.values()],l={};return n.forEach(r=>{Tv(t,r.mutationKey)&&Object.assign(l,r.defaultOptions)}),l}defaultQueryOptions(t){if(t._defaulted)return t;const n={...this.#a.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return n.queryHash||(n.queryHash=cb(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===V_&&(n.enabled=!1),n}defaultMutationOptions(t){return t?._defaulted?t:{...this.#a.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}};function nn(t,n){var l=n&&n.cache?n.cache:PS,r=n&&n.serializer?n.serializer:US,o=n&&n.strategy?n.strategy:BS;return o(t,{cache:l,serializer:r})}function LS(t){return t==null||typeof t=="number"||typeof t=="boolean"}function jS(t,n,l,r){var o=LS(r)?r:l(r),u=n.get(o);return typeof u>"u"&&(u=t.call(this,r),n.set(o,u)),u}function Jb(t,n,l){var r=Array.prototype.slice.call(arguments,3),o=l(r),u=n.get(o);return typeof u>"u"&&(u=t.apply(this,r),n.set(o,u)),u}function e1(t,n,l,r,o){return l.bind(n,t,r,o)}function BS(t,n){var l=t.length===1?jS:Jb;return e1(t,this,l,n.cache.create(),n.serializer)}function HS(t,n){return e1(t,this,Jb,n.cache.create(),n.serializer)}var US=function(){return JSON.stringify(arguments)},IS=(function(){function t(){this.cache=Object.create(null)}return t.prototype.get=function(n){return this.cache[n]},t.prototype.set=function(n,l){this.cache[n]=l},t})(),PS={create:function(){return new IS}},ln={variadic:HS},Me;(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Me||(Me={}));var Qe;(function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"})(Qe||(Qe={}));var Jl;(function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"})(Jl||(Jl={}));function u0(t){return t.type===Qe.literal}function VS(t){return t.type===Qe.argument}function t1(t){return t.type===Qe.number}function a1(t){return t.type===Qe.date}function n1(t){return t.type===Qe.time}function i1(t){return t.type===Qe.select}function l1(t){return t.type===Qe.plural}function FS(t){return t.type===Qe.pound}function r1(t){return t.type===Qe.tag}function s1(t){return!!(t&&typeof t=="object"&&t.type===Jl.number)}function Hf(t){return!!(t&&typeof t=="object"&&t.type===Jl.dateTime)}var o1=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,qS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function GS(t){var n={};return t.replace(qS,function(l){var r=l.length;switch(l[0]){case"G":n.era=r===4?"long":r===5?"narrow":"short";break;case"y":n.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][r-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][r-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][r-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][r-1];break;case"s":n.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var YS=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function XS(t){if(t.length===0)throw new Error("Number skeleton cannot be empty");for(var n=t.split(YS).filter(function(w){return w.length>0}),l=[],r=0,o=n;r<o.length;r++){var u=o[r],f=u.split("/");if(f.length===0)throw new Error("Invalid number skeleton");for(var h=f[0],g=f.slice(1),p=0,b=g;p<b.length;p++){var _=b[p];if(_.length===0)throw new Error("Invalid number skeleton")}l.push({stem:h,options:g})}return l}function WS(t){return t.replace(/^(.*?)-/,"")}var d0=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,c1=/^(@+)?(\+|#+)?[rs]?$/g,QS=/(\*)(0+)|(#+)(0+)|(0+)/g,u1=/^(0+)$/;function f0(t){var n={};return t[t.length-1]==="r"?n.roundingPriority="morePrecision":t[t.length-1]==="s"&&(n.roundingPriority="lessPrecision"),t.replace(c1,function(l,r,o){return typeof o!="string"?(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length):o==="+"?n.minimumSignificantDigits=r.length:r[0]==="#"?n.maximumSignificantDigits=r.length:(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length+(typeof o=="string"?o.length:0)),""}),n}function d1(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function ZS(t){var n;if(t[0]==="E"&&t[1]==="E"?(n={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(n={notation:"scientific"},t=t.slice(1)),n){var l=t.slice(0,2);if(l==="+!"?(n.signDisplay="always",t=t.slice(2)):l==="+?"&&(n.signDisplay="exceptZero",t=t.slice(2)),!u1.test(t))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=t.length}return n}function h0(t){var n={},l=d1(t);return l||n}function KS(t){for(var n={},l=0,r=t;l<r.length;l++){var o=r[l];switch(o.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=o.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=WS(o.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=de(de(de({},n),{notation:"scientific"}),o.options.reduce(function(g,p){return de(de({},g),h0(p))},{}));continue;case"engineering":n=de(de(de({},n),{notation:"engineering"}),o.options.reduce(function(g,p){return de(de({},g),h0(p))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(o.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace(QS,function(g,p,b,_,w,y){if(p)n.minimumIntegerDigits=b.length;else{if(_&&w)throw new Error("We currently do not support maximum integer digits");if(y)throw new Error("We currently do not support exact integer digits")}return""});continue}if(u1.test(o.stem)){n.minimumIntegerDigits=o.stem.length;continue}if(d0.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(d0,function(g,p,b,_,w,y){return b==="*"?n.minimumFractionDigits=p.length:_&&_[0]==="#"?n.maximumFractionDigits=_.length:w&&y?(n.minimumFractionDigits=w.length,n.maximumFractionDigits=w.length+y.length):(n.minimumFractionDigits=p.length,n.maximumFractionDigits=p.length),""});var u=o.options[0];u==="w"?n=de(de({},n),{trailingZeroDisplay:"stripIfInteger"}):u&&(n=de(de({},n),f0(u)));continue}if(c1.test(o.stem)){n=de(de({},n),f0(o.stem));continue}var f=d1(o.stem);f&&(n=de(de({},n),f));var h=ZS(o.stem);h&&(n=de(de({},n),h))}return n}var Ko={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function JS(t,n){for(var l="",r=0;r<t.length;r++){var o=t.charAt(r);if(o==="j"){for(var u=0;r+1<t.length&&t.charAt(r+1)===o;)u++,r++;var f=1+(u&1),h=u<2?1:3+(u>>1),g="a",p=e3(n);for((p=="H"||p=="k")&&(h=0);h-- >0;)l+=g;for(;f-- >0;)l=p+l}else o==="J"?l+="H":l+=o}return l}function e3(t){var n=t.hourCycle;if(n===void 0&&t.hourCycles&&t.hourCycles.length&&(n=t.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var l=t.language,r;l!=="root"&&(r=t.maximize().region);var o=Ko[r||""]||Ko[l||""]||Ko["".concat(l,"-001")]||Ko["001"];return o[0]}var lf,t3=new RegExp("^".concat(o1.source,"*")),a3=new RegExp("".concat(o1.source,"*$"));function Oe(t,n){return{start:t,end:n}}var n3=!!String.prototype.startsWith&&"_a".startsWith("a",1),i3=!!String.fromCodePoint,l3=!!Object.fromEntries,r3=!!String.prototype.codePointAt,s3=!!String.prototype.trimStart,o3=!!String.prototype.trimEnd,c3=!!Number.isSafeInteger,u3=c3?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},Uf=!0;try{var d3=h1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Uf=((lf=d3.exec("a"))===null||lf===void 0?void 0:lf[0])==="a"}catch{Uf=!1}var p0=n3?function(n,l,r){return n.startsWith(l,r)}:function(n,l,r){return n.slice(r,r+l.length)===l},If=i3?String.fromCodePoint:function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];for(var r="",o=n.length,u=0,f;o>u;){if(f=n[u++],f>1114111)throw RangeError(f+" is not a valid code point");r+=f<65536?String.fromCharCode(f):String.fromCharCode(((f-=65536)>>10)+55296,f%1024+56320)}return r},m0=l3?Object.fromEntries:function(n){for(var l={},r=0,o=n;r<o.length;r++){var u=o[r],f=u[0],h=u[1];l[f]=h}return l},f1=r3?function(n,l){return n.codePointAt(l)}:function(n,l){var r=n.length;if(!(l<0||l>=r)){var o=n.charCodeAt(l),u;return o<55296||o>56319||l+1===r||(u=n.charCodeAt(l+1))<56320||u>57343?o:(o-55296<<10)+(u-56320)+65536}},f3=s3?function(n){return n.trimStart()}:function(n){return n.replace(t3,"")},h3=o3?function(n){return n.trimEnd()}:function(n){return n.replace(a3,"")};function h1(t,n){return new RegExp(t,n)}var Pf;if(Uf){var g0=h1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Pf=function(n,l){var r;g0.lastIndex=l;var o=g0.exec(n);return(r=o[1])!==null&&r!==void 0?r:""}}else Pf=function(n,l){for(var r=[];;){var o=f1(n,l);if(o===void 0||p1(o)||v3(o))break;r.push(o),l+=o>=65536?2:1}return If.apply(void 0,r)};var p3=(function(){function t(n,l){l===void 0&&(l={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!l.ignoreTag,this.locale=l.locale,this.requiresOtherClause=!!l.requiresOtherClause,this.shouldParseSkeletons=!!l.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(n,l,r){for(var o=[];!this.isEOF();){var u=this.char();if(u===123){var f=this.parseArgument(n,r);if(f.err)return f;o.push(f.val)}else{if(u===125&&n>0)break;if(u===35&&(l==="plural"||l==="selectordinal")){var h=this.clonePosition();this.bump(),o.push({type:Qe.pound,location:Oe(h,this.clonePosition())})}else if(u===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(Me.UNMATCHED_CLOSING_TAG,Oe(this.clonePosition(),this.clonePosition()))}else if(u===60&&!this.ignoreTag&&Vf(this.peek()||0)){var f=this.parseTag(n,l);if(f.err)return f;o.push(f.val)}else{var f=this.parseLiteral(n,l);if(f.err)return f;o.push(f.val)}}}return{val:o,err:null}},t.prototype.parseTag=function(n,l){var r=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Qe.literal,value:"<".concat(o,"/>"),location:Oe(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var u=this.parseMessage(n+1,l,!0);if(u.err)return u;var f=u.val,h=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Vf(this.char()))return this.error(Me.INVALID_TAG,Oe(h,this.clonePosition()));var g=this.clonePosition(),p=this.parseTagName();return o!==p?this.error(Me.UNMATCHED_CLOSING_TAG,Oe(g,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Qe.tag,value:o,children:f,location:Oe(r,this.clonePosition())},err:null}:this.error(Me.INVALID_TAG,Oe(h,this.clonePosition())))}else return this.error(Me.UNCLOSED_TAG,Oe(r,this.clonePosition()))}else return this.error(Me.INVALID_TAG,Oe(r,this.clonePosition()))},t.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&g3(this.char());)this.bump();return this.message.slice(n,this.offset())},t.prototype.parseLiteral=function(n,l){for(var r=this.clonePosition(),o="";;){var u=this.tryParseQuote(l);if(u){o+=u;continue}var f=this.tryParseUnquoted(n,l);if(f){o+=f;continue}var h=this.tryParseLeftAngleBracket();if(h){o+=h;continue}break}var g=Oe(r,this.clonePosition());return{val:{type:Qe.literal,value:o,location:g},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!m3(this.peek()||0))?(this.bump(),"<"):null},t.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var l=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)l.push(39),this.bump();else{this.bump();break}else l.push(r);this.bump()}return If.apply(void 0,l)},t.prototype.tryParseUnquoted=function(n,l){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(l==="plural"||l==="selectordinal")||r===125&&n>0?null:(this.bump(),If(r))},t.prototype.parseArgument=function(n,l){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Me.EMPTY_ARGUMENT,Oe(r,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error(Me.MALFORMED_ARGUMENT,Oe(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Qe.argument,value:o,location:Oe(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(r,this.clonePosition())):this.parseArgumentOptions(n,l,o,r);default:return this.error(Me.MALFORMED_ARGUMENT,Oe(r,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),l=this.offset(),r=Pf(this.message,l),o=l+r.length;this.bumpTo(o);var u=this.clonePosition(),f=Oe(n,u);return{value:r,location:f}},t.prototype.parseArgumentOptions=function(n,l,r,o){var u,f=this.clonePosition(),h=this.parseIdentifierIfPossible().value,g=this.clonePosition();switch(h){case"":return this.error(Me.EXPECT_ARGUMENT_TYPE,Oe(f,g));case"number":case"date":case"time":{this.bumpSpace();var p=null;if(this.bumpIf(",")){this.bumpSpace();var b=this.clonePosition(),_=this.parseSimpleArgStyleIfPossible();if(_.err)return _;var w=h3(_.val);if(w.length===0)return this.error(Me.EXPECT_ARGUMENT_STYLE,Oe(this.clonePosition(),this.clonePosition()));var y=Oe(b,this.clonePosition());p={style:w,styleLocation:y}}var S=this.tryParseArgumentClose(o);if(S.err)return S;var A=Oe(o,this.clonePosition());if(p&&p0(p?.style,"::",0)){var M=f3(p.style.slice(2));if(h==="number"){var _=this.parseNumberSkeletonFromString(M,p.styleLocation);return _.err?_:{val:{type:Qe.number,value:r,location:A,style:_.val},err:null}}else{if(M.length===0)return this.error(Me.EXPECT_DATE_TIME_SKELETON,A);var C=M;this.locale&&(C=JS(M,this.locale));var w={type:Jl.dateTime,pattern:C,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?GS(C):{}},D=h==="date"?Qe.date:Qe.time;return{val:{type:D,value:r,location:A,style:w},err:null}}}return{val:{type:h==="number"?Qe.number:h==="date"?Qe.date:Qe.time,value:r,location:A,style:(u=p?.style)!==null&&u!==void 0?u:null},err:null}}case"plural":case"selectordinal":case"select":{var U=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Me.EXPECT_SELECT_ARGUMENT_OPTIONS,Oe(U,de({},U)));this.bumpSpace();var j=this.parseIdentifierIfPossible(),$=0;if(h!=="select"&&j.value==="offset"){if(!this.bumpIf(":"))return this.error(Me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Oe(this.clonePosition(),this.clonePosition()));this.bumpSpace();var _=this.tryParseDecimalInteger(Me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Me.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(_.err)return _;this.bumpSpace(),j=this.parseIdentifierIfPossible(),$=_.val}var W=this.tryParsePluralOrSelectOptions(n,h,l,j);if(W.err)return W;var S=this.tryParseArgumentClose(o);if(S.err)return S;var X=Oe(o,this.clonePosition());return h==="select"?{val:{type:Qe.select,value:r,options:m0(W.val),location:X},err:null}:{val:{type:Qe.plural,value:r,options:m0(W.val),offset:$,pluralType:h==="plural"?"cardinal":"ordinal",location:X},err:null}}default:return this.error(Me.INVALID_ARGUMENT_TYPE,Oe(f,g))}},t.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(Me.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,l=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Me.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Oe(o,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(l.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(l.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(n,l){var r=[];try{r=XS(n)}catch{return this.error(Me.INVALID_NUMBER_SKELETON,l)}return{val:{type:Jl.number,tokens:r,location:l,parsedOptions:this.shouldParseSkeletons?KS(r):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(n,l,r,o){for(var u,f=!1,h=[],g=new Set,p=o.value,b=o.location;;){if(p.length===0){var _=this.clonePosition();if(l!=="select"&&this.bumpIf("=")){var w=this.tryParseDecimalInteger(Me.EXPECT_PLURAL_ARGUMENT_SELECTOR,Me.INVALID_PLURAL_ARGUMENT_SELECTOR);if(w.err)return w;b=Oe(_,this.clonePosition()),p=this.message.slice(_.offset,this.offset())}else break}if(g.has(p))return this.error(l==="select"?Me.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Me.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,b);p==="other"&&(f=!0),this.bumpSpace();var y=this.clonePosition();if(!this.bumpIf("{"))return this.error(l==="select"?Me.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Me.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Oe(this.clonePosition(),this.clonePosition()));var S=this.parseMessage(n+1,l,r);if(S.err)return S;var A=this.tryParseArgumentClose(y);if(A.err)return A;h.push([p,{value:S.val,location:Oe(y,this.clonePosition())}]),g.add(p),this.bumpSpace(),u=this.parseIdentifierIfPossible(),p=u.value,b=u.location}return h.length===0?this.error(l==="select"?Me.EXPECT_SELECT_ARGUMENT_SELECTOR:Me.EXPECT_PLURAL_ARGUMENT_SELECTOR,Oe(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!f?this.error(Me.MISSING_OTHER_CLAUSE,Oe(this.clonePosition(),this.clonePosition())):{val:h,err:null}},t.prototype.tryParseDecimalInteger=function(n,l){var r=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var u=!1,f=0;!this.isEOF();){var h=this.char();if(h>=48&&h<=57)u=!0,f=f*10+(h-48),this.bump();else break}var g=Oe(o,this.clonePosition());return u?(f*=r,u3(f)?{val:f,err:null}:this.error(l,g)):this.error(n,g)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var l=f1(this.message,n);if(l===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return l},t.prototype.error=function(n,l){return{val:null,err:{kind:n,message:this.message,location:l}}},t.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},t.prototype.bumpIf=function(n){if(p0(this.message,n,this.offset())){for(var l=0;l<n.length;l++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(n){var l=this.offset(),r=this.message.indexOf(n,l);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var l=this.offset();if(l===n)break;if(l>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&p1(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),l=this.offset(),r=this.message.charCodeAt(l+(n>=65536?2:1));return r??null},t})();function Vf(t){return t>=97&&t<=122||t>=65&&t<=90}function m3(t){return Vf(t)||t===47}function g3(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function p1(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function v3(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function Ff(t){t.forEach(function(n){if(delete n.location,i1(n)||l1(n))for(var l in n.options)delete n.options[l].location,Ff(n.options[l].value);else t1(n)&&s1(n.style)||(a1(n)||n1(n))&&Hf(n.style)?delete n.style.location:r1(n)&&Ff(n.children)})}function b3(t,n){n===void 0&&(n={}),n=de({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var l=new p3(t,n).parse();if(l.err){var r=SyntaxError(Me[l.err.kind]);throw r.location=l.err.location,r.originalMessage=l.err.message,r}return n?.captureLocation||Ff(l.val),l.val}var un;(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(un||(un={}));var wi=(function(t){ja(n,t);function n(l,r,o){var u=t.call(this,l)||this;return u.code=r,u.originalMessage=o,u}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n})(Error),v0=(function(t){ja(n,t);function n(l,r,o,u){return t.call(this,'Invalid values for "'.concat(l,'": "').concat(r,'". Options are "').concat(Object.keys(o).join('", "'),'"'),un.INVALID_VALUE,u)||this}return n})(wi),y3=(function(t){ja(n,t);function n(l,r,o){return t.call(this,'Value for "'.concat(l,'" must be of type ').concat(r),un.INVALID_VALUE,o)||this}return n})(wi),_3=(function(t){ja(n,t);function n(l,r){return t.call(this,'The intl string context variable "'.concat(l,'" was not provided to the string "').concat(r,'"'),un.MISSING_VALUE,r)||this}return n})(wi),Jt;(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(Jt||(Jt={}));function x3(t){return t.length<2?t:t.reduce(function(n,l){var r=n[n.length-1];return!r||r.type!==Jt.literal||l.type!==Jt.literal?n.push(l):r.value+=l.value,n},[])}function m1(t){return typeof t=="function"}function cc(t,n,l,r,o,u,f){if(t.length===1&&u0(t[0]))return[{type:Jt.literal,value:t[0].value}];for(var h=[],g=0,p=t;g<p.length;g++){var b=p[g];if(u0(b)){h.push({type:Jt.literal,value:b.value});continue}if(FS(b)){typeof u=="number"&&h.push({type:Jt.literal,value:l.getNumberFormat(n).format(u)});continue}var _=b.value;if(!(o&&_ in o))throw new _3(_,f);var w=o[_];if(VS(b)){(!w||typeof w=="string"||typeof w=="number")&&(w=typeof w=="string"||typeof w=="number"?String(w):""),h.push({type:typeof w=="string"?Jt.literal:Jt.object,value:w});continue}if(a1(b)){var y=typeof b.style=="string"?r.date[b.style]:Hf(b.style)?b.style.parsedOptions:void 0;h.push({type:Jt.literal,value:l.getDateTimeFormat(n,y).format(w)});continue}if(n1(b)){var y=typeof b.style=="string"?r.time[b.style]:Hf(b.style)?b.style.parsedOptions:r.time.medium;h.push({type:Jt.literal,value:l.getDateTimeFormat(n,y).format(w)});continue}if(t1(b)){var y=typeof b.style=="string"?r.number[b.style]:s1(b.style)?b.style.parsedOptions:void 0;y&&y.scale&&(w=w*(y.scale||1)),h.push({type:Jt.literal,value:l.getNumberFormat(n,y).format(w)});continue}if(r1(b)){var S=b.children,A=b.value,M=o[A];if(!m1(M))throw new y3(A,"function",f);var C=cc(S,n,l,r,o,u),D=M(C.map(function($){return $.value}));Array.isArray(D)||(D=[D]),h.push.apply(h,D.map(function($){return{type:typeof $=="string"?Jt.literal:Jt.object,value:$}}))}if(i1(b)){var U=b.options[w]||b.options.other;if(!U)throw new v0(b.value,w,Object.keys(b.options),f);h.push.apply(h,cc(U.value,n,l,r,o));continue}if(l1(b)){var U=b.options["=".concat(w)];if(!U){if(!Intl.PluralRules)throw new wi(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,un.MISSING_INTL_API,f);var j=l.getPluralRules(n,{type:b.pluralType}).select(w-(b.offset||0));U=b.options[j]||b.options.other}if(!U)throw new v0(b.value,w,Object.keys(b.options),f);h.push.apply(h,cc(U.value,n,l,r,o,w-(b.offset||0)));continue}}return x3(h)}function w3(t,n){return n?de(de(de({},t||{}),n||{}),Object.keys(t).reduce(function(l,r){return l[r]=de(de({},t[r]),n[r]||{}),l},{})):t}function S3(t,n){return n?Object.keys(t).reduce(function(l,r){return l[r]=w3(t[r],n[r]),l},de({},t)):t}function rf(t){return{create:function(){return{get:function(n){return t[n]},set:function(n,l){t[n]=l}}}}}function E3(t){return t===void 0&&(t={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:nn(function(){for(var n,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((n=Intl.NumberFormat).bind.apply(n,rn([void 0],l,!1)))},{cache:rf(t.number),strategy:ln.variadic}),getDateTimeFormat:nn(function(){for(var n,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((n=Intl.DateTimeFormat).bind.apply(n,rn([void 0],l,!1)))},{cache:rf(t.dateTime),strategy:ln.variadic}),getPluralRules:nn(function(){for(var n,l=[],r=0;r<arguments.length;r++)l[r]=arguments[r];return new((n=Intl.PluralRules).bind.apply(n,rn([void 0],l,!1)))},{cache:rf(t.pluralRules),strategy:ln.variadic})}}var g1=(function(){function t(n,l,r,o){l===void 0&&(l=t.defaultLocale);var u=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(g){var p=u.formatToParts(g);if(p.length===1)return p[0].value;var b=p.reduce(function(_,w){return!_.length||w.type!==Jt.literal||typeof _[_.length-1]!="string"?_.push(w.value):_[_.length-1]+=w.value,_},[]);return b.length<=1?b[0]||"":b},this.formatToParts=function(g){return cc(u.ast,u.locales,u.formatters,u.formats,g,void 0,u.message)},this.resolvedOptions=function(){var g;return{locale:((g=u.resolvedLocale)===null||g===void 0?void 0:g.toString())||Intl.NumberFormat.supportedLocalesOf(u.locales)[0]}},this.getAst=function(){return u.ast},this.locales=l,this.resolvedLocale=t.resolveLocale(l),typeof n=="string"){if(this.message=n,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var f=o||{};f.formatters;var h=Wl(f,["formatters"]);this.ast=t.__parse(n,de(de({},h),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=S3(t.formats,r),this.formatters=o&&o.formatters||E3(this.formatterCache)}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var l=Intl.NumberFormat.supportedLocalesOf(n);return l.length>0?new Intl.Locale(l[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},t.__parse=b3,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t})(),Ji;(function(t){t.FORMAT_ERROR="FORMAT_ERROR",t.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",t.INVALID_CONFIG="INVALID_CONFIG",t.MISSING_DATA="MISSING_DATA",t.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Ji||(Ji={}));var Ts=(function(t){ja(n,t);function n(l,r,o){var u=this,f=o?o instanceof Error?o:new Error(String(o)):void 0;return u=t.call(this,"[@formatjs/intl Error ".concat(l,"] ").concat(r,`
`).concat(f?`
`.concat(f.message,`
`).concat(f.stack):""))||this,u.code=l,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(u,n),u}return n})(Error),C3=(function(t){ja(n,t);function n(l,r){return t.call(this,Ji.UNSUPPORTED_FORMATTER,l,r)||this}return n})(Ts),T3=(function(t){ja(n,t);function n(l,r){return t.call(this,Ji.INVALID_CONFIG,l,r)||this}return n})(Ts),b0=(function(t){ja(n,t);function n(l,r){return t.call(this,Ji.MISSING_DATA,l,r)||this}return n})(Ts),Ha=(function(t){ja(n,t);function n(l,r,o){var u=t.call(this,Ji.FORMAT_ERROR,"".concat(l,`
Locale: `).concat(r,`
`),o)||this;return u.locale=r,u}return n})(Ts),sf=(function(t){ja(n,t);function n(l,r,o,u){var f=t.call(this,"".concat(l,`
MessageID: `).concat(o?.id,`
Default Message: `).concat(o?.defaultMessage,`
Description: `).concat(o?.description,`
`),r,u)||this;return f.descriptor=o,f.locale=r,f}return n})(Ha),A3=(function(t){ja(n,t);function n(l,r){var o=t.call(this,Ji.MISSING_TRANSLATION,'Missing message: "'.concat(l.id,'" for locale "').concat(r,'", using ').concat(l.defaultMessage?"default message (".concat(typeof l.defaultMessage=="string"?l.defaultMessage:l.defaultMessage.map(function(u){var f;return(f=u.value)!==null&&f!==void 0?f:JSON.stringify(u)}).join(),")"):"id"," as fallback."))||this;return o.descriptor=l,o}return n})(Ts);function M3(t,n,l){if(l===void 0&&(l=Error),!t)throw new l(n)}function ar(t,n,l){return l===void 0&&(l={}),n.reduce(function(r,o){return o in t?r[o]=t[o]:o in l&&(r[o]=l[o]),r},{})}var N3=function(t){},$3=function(t){},v1={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:N3,onWarn:$3};function b1(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Gi(t){return{create:function(){return{get:function(n){return t[n]},set:function(n,l){t[n]=l}}}}}function O3(t){t===void 0&&(t=b1());var n=Intl.RelativeTimeFormat,l=Intl.ListFormat,r=Intl.DisplayNames,o=nn(function(){for(var h,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((h=Intl.DateTimeFormat).bind.apply(h,rn([void 0],g,!1)))},{cache:Gi(t.dateTime),strategy:ln.variadic}),u=nn(function(){for(var h,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((h=Intl.NumberFormat).bind.apply(h,rn([void 0],g,!1)))},{cache:Gi(t.number),strategy:ln.variadic}),f=nn(function(){for(var h,g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];return new((h=Intl.PluralRules).bind.apply(h,rn([void 0],g,!1)))},{cache:Gi(t.pluralRules),strategy:ln.variadic});return{getDateTimeFormat:o,getNumberFormat:u,getMessageFormat:nn(function(h,g,p,b){return new g1(h,g,p,de({formatters:{getNumberFormat:u,getDateTimeFormat:o,getPluralRules:f}},b||{}))},{cache:Gi(t.message),strategy:ln.variadic}),getRelativeTimeFormat:nn(function(){for(var h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new(n.bind.apply(n,rn([void 0],h,!1)))},{cache:Gi(t.relativeTime),strategy:ln.variadic}),getPluralRules:f,getListFormat:nn(function(){for(var h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new(l.bind.apply(l,rn([void 0],h,!1)))},{cache:Gi(t.list),strategy:ln.variadic}),getDisplayNames:nn(function(){for(var h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new(r.bind.apply(r,rn([void 0],h,!1)))},{cache:Gi(t.displayNames),strategy:ln.variadic})}}function Sh(t,n,l,r){var o=t&&t[n],u;if(o&&(u=o[l]),u)return u;r(new C3("No ".concat(n," format named: ").concat(l)))}function Jo(t,n){return Object.keys(t).reduce(function(l,r){return l[r]=de({timeZone:n},t[r]),l},{})}function y0(t,n){var l=Object.keys(de(de({},t),n));return l.reduce(function(r,o){return r[o]=de(de({},t[o]||{}),n[o]||{}),r},{})}function _0(t,n){if(!n)return t;var l=g1.formats;return de(de(de({},l),t),{date:y0(Jo(l.date,n),Jo(t.date||{},n)),time:y0(Jo(l.time,n),Jo(t.time||{},n))})}var qf=function(t,n,l,r,o){var u=t.locale,f=t.formats,h=t.messages,g=t.defaultLocale,p=t.defaultFormats,b=t.fallbackOnEmptyString,_=t.onError,w=t.timeZone,y=t.defaultRichTextElements;l===void 0&&(l={id:""});var S=l.id,A=l.defaultMessage;M3(!!S,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var M=String(S),C=h&&Object.prototype.hasOwnProperty.call(h,M)&&h[M];if(Array.isArray(C)&&C.length===1&&C[0].type===Qe.literal)return C[0].value;if(!r&&C&&typeof C=="string"&&!y)return C.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=de(de({},y),r||{}),f=_0(f,w),p=_0(p,w),!C){if(b===!1&&C==="")return C;if((!A||u&&u.toLowerCase()!==g.toLowerCase())&&_(new A3(l,u)),A)try{var D=n.getMessageFormat(A,g,p,o);return D.format(r)}catch(U){return _(new sf('Error formatting default message for: "'.concat(M,'", rendering default message verbatim'),u,l,U)),typeof A=="string"?A:M}return M}try{var D=n.getMessageFormat(C,u,f,de({formatters:n},o||{}));return D.format(r)}catch(U){_(new sf('Error formatting message: "'.concat(M,'", using ').concat(A?"default message":"id"," as fallback."),u,l,U))}if(A)try{var D=n.getMessageFormat(A,g,p,o);return D.format(r)}catch(U){_(new sf('Error formatting the default message for: "'.concat(M,'", rendering message verbatim'),u,l,U))}return typeof C=="string"?C:typeof A=="string"?A:M},k3=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function As(t,n,l,r){var o=t.locale,u=t.formats,f=t.onError,h=t.timeZone;r===void 0&&(r={});var g=r.format,p=de(de({},h&&{timeZone:h}),g&&Sh(u,n,g,f)),b=ar(r,k3,p);return n==="time"&&!b.hour&&!b.minute&&!b.second&&!b.timeStyle&&!b.dateStyle&&(b=de(de({},b),{hour:"numeric",minute:"numeric"})),l(o,b)}function R3(t,n){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=u===void 0?{}:u,h=typeof o=="string"?new Date(o||0):o;try{return As(t,"date",n,f).format(h)}catch(g){t.onError(new Ha("Error formatting date.",t.locale,g))}return String(h)}function D3(t,n){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=u===void 0?{}:u,h=typeof o=="string"?new Date(o||0):o;try{return As(t,"time",n,f).format(h)}catch(g){t.onError(new Ha("Error formatting time.",t.locale,g))}return String(h)}function z3(t,n){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=l[2],h=f===void 0?{}:f,g=typeof o=="string"?new Date(o||0):o,p=typeof u=="string"?new Date(u||0):u;try{return As(t,"dateTimeRange",n,h).formatRange(g,p)}catch(b){t.onError(new Ha("Error formatting date time range.",t.locale,b))}return String(g)}function L3(t,n){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=u===void 0?{}:u,h=typeof o=="string"?new Date(o||0):o;try{return As(t,"date",n,f).formatToParts(h)}catch(g){t.onError(new Ha("Error formatting date.",t.locale,g))}return[]}function j3(t,n){for(var l=[],r=2;r<arguments.length;r++)l[r-2]=arguments[r];var o=l[0],u=l[1],f=u===void 0?{}:u,h=typeof o=="string"?new Date(o||0):o;try{return As(t,"time",n,f).formatToParts(h)}catch(g){t.onError(new Ha("Error formatting time.",t.locale,g))}return[]}var B3=["style","type","fallback","languageDisplay"];function H3(t,n,l,r){var o=t.locale,u=t.onError,f=Intl.DisplayNames;f||u(new wi(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,un.MISSING_INTL_API));var h=ar(r,B3);try{return n(o,h).of(l)}catch(g){u(new Ha("Error formatting display name.",o,g))}}var U3=["type","style"],x0=Date.now();function I3(t){return"".concat(x0,"_").concat(t,"_").concat(x0)}function P3(t,n,l,r){r===void 0&&(r={});var o=y1(t,n,l,r).reduce(function(u,f){var h=f.value;return typeof h!="string"?u.push(h):typeof u[u.length-1]=="string"?u[u.length-1]+=h:u.push(h),u},[]);return o.length===1?o[0]:o.length===0?"":o}function y1(t,n,l,r){var o=t.locale,u=t.onError;r===void 0&&(r={});var f=Intl.ListFormat;f||u(new wi(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,un.MISSING_INTL_API));var h=ar(r,U3);try{var g={},p=Array.from(l).map(function(b,_){if(typeof b=="object"&&b!==null){var w=I3(_);return g[w]=b,w}return String(b)});return n(o,h).formatToParts(p).map(function(b){return b.type==="literal"?b:de(de({},b),{value:g[b.value]||b.value})})}catch(b){u(new Ha("Error formatting list.",o,b))}return l}var V3=["type"];function F3(t,n,l,r){var o=t.locale,u=t.onError;r===void 0&&(r={}),Intl.PluralRules||u(new wi(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,un.MISSING_INTL_API));var f=ar(r,V3);try{return n(o,f).select(l)}catch(h){u(new Ha("Error formatting plural.",o,h))}return"other"}var q3=["numeric","style"];function G3(t,n,l){var r=t.locale,o=t.formats,u=t.onError;l===void 0&&(l={});var f=l.format,h=!!f&&Sh(o,"relative",f,u)||{},g=ar(l,q3,h);return n(r,g)}function Y3(t,n,l,r,o){o===void 0&&(o={}),r||(r="second");var u=Intl.RelativeTimeFormat;u||t.onError(new wi(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,un.MISSING_INTL_API));try{return G3(t,n,o).format(l,r)}catch(f){t.onError(new Ha("Error formatting relative time.",t.locale,f))}return String(l)}var X3=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function _1(t,n,l){var r=t.locale,o=t.formats,u=t.onError;l===void 0&&(l={});var f=l.format,h=f&&Sh(o,"number",f,u)||{},g=ar(l,X3,h);return n(r,g)}function W3(t,n,l,r){r===void 0&&(r={});try{return _1(t,n,r).format(l)}catch(o){t.onError(new Ha("Error formatting number.",t.locale,o))}return String(l)}function Q3(t,n,l,r){r===void 0&&(r={});try{return _1(t,n,r).formatToParts(l)}catch(o){t.onError(new Ha("Error formatting number.",t.locale,o))}return[]}function Z3(t){var n=t?t[Object.keys(t)[0]]:void 0;return typeof n=="string"}function K3(t){t.onWarn&&t.defaultRichTextElements&&Z3(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function J3(t,n){var l=O3(n),r=de(de({},v1),t),o=r.locale,u=r.defaultLocale,f=r.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&f?f(new b0('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&f&&f(new b0('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(f&&f(new T3('"locale" was not configured, using "'.concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),K3(r),de(de({},r),{formatters:l,formatNumber:W3.bind(null,r,l.getNumberFormat),formatNumberToParts:Q3.bind(null,r,l.getNumberFormat),formatRelativeTime:Y3.bind(null,r,l.getRelativeTimeFormat),formatDate:R3.bind(null,r,l.getDateTimeFormat),formatDateToParts:L3.bind(null,r,l.getDateTimeFormat),formatTime:D3.bind(null,r,l.getDateTimeFormat),formatDateTimeRange:z3.bind(null,r,l.getDateTimeFormat),formatTimeToParts:j3.bind(null,r,l.getDateTimeFormat),formatPlural:F3.bind(null,r,l.getPluralRules),formatMessage:qf.bind(null,r,l),$t:qf.bind(null,r,l),formatList:P3.bind(null,r,l.getListFormat),formatListToParts:y1.bind(null,r,l.getListFormat),formatDisplayName:H3.bind(null,r,l.getDisplayNames)})}function e4(t,n,l){if(l===void 0&&(l=Error),!t)throw new l(n)}function x1(t){e4(t,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var w1=de(de({},v1),{textComponent:k.Fragment}),t4=function(t,n){return k.isValidElement(t)?k.cloneElement(t,{key:n}):t},S1=function(t){var n;return(n=k.Children.map(t,t4))!==null&&n!==void 0?n:[]};function a4(t){return function(n){return t(S1(n))}}function Gf(t,n){if(t===n)return!0;if(!t||!n)return!1;var l=Object.keys(t),r=Object.keys(n),o=l.length;if(r.length!==o)return!1;for(var u=0;u<o;u++){var f=l[u];if(t[f]!==n[f]||!Object.prototype.hasOwnProperty.call(n,f))return!1}return!0}var of={exports:{}},He={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function n4(){if(w0)return He;w0=1;var t=typeof Symbol=="function"&&Symbol.for,n=t?Symbol.for("react.element"):60103,l=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,h=t?Symbol.for("react.context"):60110,g=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,b=t?Symbol.for("react.forward_ref"):60112,_=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,S=t?Symbol.for("react.lazy"):60116,A=t?Symbol.for("react.block"):60121,M=t?Symbol.for("react.fundamental"):60117,C=t?Symbol.for("react.responder"):60118,D=t?Symbol.for("react.scope"):60119;function U($){if(typeof $=="object"&&$!==null){var W=$.$$typeof;switch(W){case n:switch($=$.type,$){case g:case p:case r:case u:case o:case _:return $;default:switch($=$&&$.$$typeof,$){case h:case b:case S:case y:case f:return $;default:return W}}case l:return W}}}function j($){return U($)===p}return He.AsyncMode=g,He.ConcurrentMode=p,He.ContextConsumer=h,He.ContextProvider=f,He.Element=n,He.ForwardRef=b,He.Fragment=r,He.Lazy=S,He.Memo=y,He.Portal=l,He.Profiler=u,He.StrictMode=o,He.Suspense=_,He.isAsyncMode=function($){return j($)||U($)===g},He.isConcurrentMode=j,He.isContextConsumer=function($){return U($)===h},He.isContextProvider=function($){return U($)===f},He.isElement=function($){return typeof $=="object"&&$!==null&&$.$$typeof===n},He.isForwardRef=function($){return U($)===b},He.isFragment=function($){return U($)===r},He.isLazy=function($){return U($)===S},He.isMemo=function($){return U($)===y},He.isPortal=function($){return U($)===l},He.isProfiler=function($){return U($)===u},He.isStrictMode=function($){return U($)===o},He.isSuspense=function($){return U($)===_},He.isValidElementType=function($){return typeof $=="string"||typeof $=="function"||$===r||$===p||$===u||$===o||$===_||$===w||typeof $=="object"&&$!==null&&($.$$typeof===S||$.$$typeof===y||$.$$typeof===f||$.$$typeof===h||$.$$typeof===b||$.$$typeof===M||$.$$typeof===C||$.$$typeof===D||$.$$typeof===A)},He.typeOf=U,He}var S0;function i4(){return S0||(S0=1,of.exports=n4()),of.exports}var cf,E0;function l4(){if(E0)return cf;E0=1;var t=i4(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[t.ForwardRef]=r,u[t.Memo]=o;function f(S){return t.isMemo(S)?o:u[S.$$typeof]||n}var h=Object.defineProperty,g=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,w=Object.prototype;function y(S,A,M){if(typeof A!="string"){if(w){var C=_(A);C&&C!==w&&y(S,C,M)}var D=g(A);p&&(D=D.concat(p(A)));for(var U=f(S),j=f(A),$=0;$<D.length;++$){var W=D[$];if(!l[W]&&!(M&&M[W])&&!(j&&j[W])&&!(U&&U[W])){var X=b(A,W);try{h(S,W,X)}catch{}}}}return S}return cf=y,cf}l4();var Eh=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=k.createContext(null)):k.createContext(null);Eh.Consumer;var r4=Eh.Provider,s4=r4,o4=Eh;function ze(){var t=k.useContext(o4);return x1(t),t}var Yf;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(Yf||(Yf={}));var Xf;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(Xf||(Xf={}));function E1(t){var n=function(l){var r=ze(),o=l.value,u=l.children,f=Wl(l,["value","children"]),h=typeof o=="string"?new Date(o||0):o,g=t==="formatDate"?r.formatDateToParts(h,f):r.formatTimeToParts(h,f);return u(g)};return n.displayName=Xf[t],n}function Ms(t){var n=function(l){var r=ze(),o=l.value,u=l.children,f=Wl(l,["value","children"]),h=r[t](o,f);if(typeof u=="function")return u(h);var g=r.textComponent||k.Fragment;return k.createElement(g,null,h)};return n.displayName=Yf[t],n}function C1(t){return t&&Object.keys(t).reduce(function(n,l){var r=t[l];return n[l]=m1(r)?a4(r):r,n},{})}var C0=function(t,n,l,r){for(var o=[],u=4;u<arguments.length;u++)o[u-4]=arguments[u];var f=C1(r),h=qf.apply(void 0,rn([t,n,l,f],o,!1));return Array.isArray(h)?S1(h):h},T0=function(t,n){var l=t.defaultRichTextElements,r=Wl(t,["defaultRichTextElements"]),o=C1(l),u=J3(de(de(de({},w1),r),{defaultRichTextElements:o}),n),f={locale:u.locale,timeZone:u.timeZone,fallbackOnEmptyString:u.fallbackOnEmptyString,formats:u.formats,defaultLocale:u.defaultLocale,defaultFormats:u.defaultFormats,messages:u.messages,onError:u.onError,defaultRichTextElements:o};return de(de({},u),{formatMessage:C0.bind(null,f,u.formatters),$t:C0.bind(null,f,u.formatters)})};function c4(t,n){var l=t.values,r=Wl(t,["values"]),o=n.values,u=Wl(n,["values"]);return Gf(o,l)&&Gf(r,u)}function T1(t){var n=ze(),l=n.formatMessage,r=n.textComponent,o=r===void 0?k.Fragment:r,u=t.id,f=t.description,h=t.defaultMessage,g=t.values,p=t.children,b=t.tagName,_=b===void 0?o:b,w=t.ignoreTag,y={id:u,description:f,defaultMessage:h},S=l(y,g,{ignoreTag:w});return typeof p=="function"?p(Array.isArray(S)?S:[S]):_?k.createElement(_,null,S):k.createElement(k.Fragment,null,S)}T1.displayName="FormattedMessage";var ae=k.memo(T1,c4);ae.displayName="MemoizedFormattedMessage";function uf(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var A1=(function(t){ja(n,t);function n(){var l=t!==null&&t.apply(this,arguments)||this;return l.cache=b1(),l.state={cache:l.cache,intl:T0(uf(l.props),l.cache),prevConfig:uf(l.props)},l}return n.getDerivedStateFromProps=function(l,r){var o=r.prevConfig,u=r.cache,f=uf(l);return Gf(o,f)?null:{intl:T0(f,u),prevConfig:f}},n.prototype.render=function(){return x1(this.state.intl),k.createElement(s4,{value:this.state.intl},this.props.children)},n.displayName="IntlProvider",n.defaultProps=w1,n})(k.PureComponent);Ms("formatDate");Ms("formatTime");Ms("formatNumber");Ms("formatList");Ms("formatDisplayName");E1("formatDate");E1("formatTime");var u4=vt`
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
`,xt=class extends st{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,n=t?gc`a`:gc`button`;return oc`
      <${n}
        part="base"
        class=${dt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
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
      </${n}>
    `}};xt.styles=[Ot,u4];xt.dependencies={"sl-icon":Gt};T([Ze(".icon-button")],xt.prototype,"button",2);T([ft()],xt.prototype,"hasFocus",2);T([H()],xt.prototype,"name",2);T([H()],xt.prototype,"library",2);T([H()],xt.prototype,"src",2);T([H()],xt.prototype,"href",2);T([H()],xt.prototype,"target",2);T([H()],xt.prototype,"download",2);T([H()],xt.prototype,"label",2);T([H({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);var d4="sl-icon-button";xt.define("sl-icon-button");var f4=ta({tagName:d4,elementClass:xt,react:Ft,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),$t=f4;const h4="_header_c0rsb_1",p4="_logo_c0rsb_30",df={header:h4,logo:p4};function pn({headerActions:t,showBackButton:n=!1,onBack:l}){const r=ze(),o=qt(),u=()=>{l?l():o(-1)};return m.jsxs("header",{className:df.header,children:[n?m.jsx($t,{name:"chevron-left",label:r.formatMessage({id:"navigation.back"}),onClick:u}):m.jsx("div",{"data-testid":"header-logo",className:df.logo}),m.jsx("div",{className:df.actions,children:t})]})}function Ch(t,n,l){const r=Zi(t,l?.in);return isNaN(n)?Ql(t,NaN):(n&&r.setDate(r.getDate()+n),r)}function m4(t,n,l){const r=Zi(t,l?.in);if(isNaN(n))return Ql(t,NaN);const o=r.getDate(),u=Ql(t,r.getTime());u.setMonth(r.getMonth()+n+1,0);const f=u.getDate();return o>=f?u:(r.setFullYear(u.getFullYear(),u.getMonth(),o),r)}function Th(t,n,l){return Ch(t,n*7,l)}function g4(t,n,l){return m4(t,n*12,l)}function v4(t){return Ql(t,Date.now())}function M1(t,n,l){const[r,o]=F_(l?.in,t,n);return+Cf(r)==+Cf(o)}function uc(t,n){return+Zi(t)<+Zi(n)}function b4(t){return+Zi(t)>Date.now()}function y4(t,n){return M1(Ql(t,t),v4(t))}function Ah(t,n){const l=()=>Ql(n?.in,NaN),o=S4(t);let u;if(o.date){const p=E4(o.date,2);u=C4(p.restDateString,p.year)}if(!u||isNaN(+u))return l();const f=+u;let h=0,g;if(o.time&&(h=T4(o.time),isNaN(h)))return l();if(o.timezone){if(g=A4(o.timezone),isNaN(g))return l()}else{const p=new Date(f+h),b=Zi(0,n?.in);return b.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),b.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),b}return Zi(f+h+g,n?.in)}const ec={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},_4=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,x4=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,w4=/^([+-])(\d{2})(?::?(\d{2}))?$/;function S4(t){const n={},l=t.split(ec.dateTimeDelimiter);let r;if(l.length>2)return n;if(/:/.test(l[0])?r=l[0]:(n.date=l[0],r=l[1],ec.timeZoneDelimiter.test(n.date)&&(n.date=t.split(ec.timeZoneDelimiter)[0],r=t.substr(n.date.length,t.length))),r){const o=ec.timezone.exec(r);o?(n.time=r.replace(o[1],""),n.timezone=o[1]):n.time=r}return n}function E4(t,n){const l=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),r=t.match(l);if(!r)return{year:NaN,restDateString:""};const o=r[1]?parseInt(r[1]):null,u=r[2]?parseInt(r[2]):null;return{year:u===null?o:u*100,restDateString:t.slice((r[1]||r[2]).length)}}function C4(t,n){if(n===null)return new Date(NaN);const l=t.match(_4);if(!l)return new Date(NaN);const r=!!l[4],o=cs(l[1]),u=cs(l[2])-1,f=cs(l[3]),h=cs(l[4]),g=cs(l[5])-1;if(r)return k4(n,h,g)?M4(n,h,g):new Date(NaN);{const p=new Date(0);return!$4(n,u,f)||!O4(n,o)?new Date(NaN):(p.setUTCFullYear(n,u,Math.max(o,f)),p)}}function cs(t){return t?parseInt(t):1}function T4(t){const n=t.match(x4);if(!n)return NaN;const l=ff(n[1]),r=ff(n[2]),o=ff(n[3]);return R4(l,r,o)?l*ub+r*db+o*1e3:NaN}function ff(t){return t&&parseFloat(t.replace(",","."))||0}function A4(t){if(t==="Z")return 0;const n=t.match(w4);if(!n)return 0;const l=n[1]==="+"?-1:1,r=parseInt(n[2]),o=n[3]&&parseInt(n[3])||0;return D4(r,o)?l*(r*ub+o*db):NaN}function M4(t,n,l){const r=new Date(0);r.setUTCFullYear(t,0,4);const o=r.getUTCDay()||7,u=(n-1)*7+l+1-o;return r.setUTCDate(r.getUTCDate()+u),r}const N4=[31,null,31,30,31,30,31,31,30,31,30,31];function N1(t){return t%400===0||t%4===0&&t%100!==0}function $4(t,n,l){return n>=0&&n<=11&&l>=1&&l<=(N4[n]||(N1(t)?29:28))}function O4(t,n){return n>=1&&n<=(N1(t)?366:365)}function k4(t,n,l){return n>=1&&n<=53&&l>=0&&l<=6}function R4(t,n,l){return t===24?n===0&&l===0:l>=0&&l<60&&n>=0&&n<60&&t>=0&&t<25}function D4(t,n){return n>=0&&n<=59}function z4(t,n,l){return Th(t,-1,l)}function A0(t,n,l){return g4(t,-13,l)}const L4=Av.default||Av;async function j4(t,n,l){const{value:r}=await Tf.canShare();if(!r){console.warn("Sharing is not available on this device.");return}const o=document.getElementById(t);if(!o){console.error(`Element with ID "${t}" not found.`);return}const u=o.querySelector(".hide-for-sharing");u&&(u.style.visibility="hidden");const f=document.createElement("div");f.style.position="absolute",f.style.left="-9999px",f.style.top="0",f.style.overflow="visible",f.style.height="auto",f.style.width="auto",f.style.maxHeight="none",f.style.maxWidth="none";const h=o.cloneNode(!0);h.style.width="auto",h.style.height="auto",h.style.maxHeight="none",h.style.overflow="visible";const g=h.querySelector(".weekGroup");g&&(g.style.overflow="visible",g.style.height="auto",g.style.width="auto",g.style.maxHeight="none",g.style.maxWidth="none"),f.appendChild(h),document.body.appendChild(f);try{const b=(await L4(f,{useCORS:!0,scale:2})).toDataURL("image/png");if(_t.isNativePlatform()){const _=await q_.writeFile({path:`share-${Date.now()}.png`,data:b,directory:G_.Cache});await Tf.share({title:n,text:l,files:[_.uri]})}else{const _=await(await fetch(b)).blob(),w=new File([_],"roster.png",{type:"image/png"}),y={title:n,text:l,files:[w]};if(navigator.canShare&&navigator.canShare(y))await navigator.share(y);else{const S=document.createElement("a");S.href=b,S.download=`roster-${Date.now()}.png`,document.body.appendChild(S),S.click(),document.body.removeChild(S)}}}catch(p){console.error("Could not share image:",p)}finally{u&&(u.style.visibility="visible"),document.body.removeChild(f)}}async function B4(t,n,l,r){const o=_t.isNativePlatform()?"https://ismyhorse.com":window.location.origin;await Tf.share({title:n,text:l,url:`${o}${t}`,dialogTitle:r})}const H4=async()=>{if(_t.isNativePlatform())try{return(await Y_.getPhoto({quality:90,allowEditing:!1,resultType:W_.DataUrl,source:X_.Prompt})).dataUrl??null}catch{return null}return new Promise(t=>{const n=document.createElement("input");n.type="file",n.accept="image/*",n.style.display="none";const l=()=>{document.body.contains(n)&&document.body.removeChild(n)};n.onchange=()=>{const r=n.files?.[0];if(r){const o=new FileReader;o.onload=u=>{t(u.target?.result),l()},o.onerror=()=>{t(null),l()},o.readAsDataURL(r)}else t(null),l()},n.oncancel=()=>{t(null),l()},document.body.appendChild(n),n.click()})};var U4=vt`
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
`;function*Mh(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Kx(Mh(t.shadowRoot.activeElement))))}function I4(){return[...Mh()].pop()}var M0=new WeakMap;function $1(t){let n=M0.get(t);return n||(n=window.getComputedStyle(t,null),M0.set(t,n)),n}function P4(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const n=$1(t);return n.visibility!=="hidden"&&n.display!=="none"}function V4(t){const n=$1(t),{overflowY:l,overflowX:r}=n;return l==="scroll"||r==="scroll"?!0:l!=="auto"||r!=="auto"?!1:t.scrollHeight>t.clientHeight&&l==="auto"||t.scrollWidth>t.clientWidth&&r==="auto"}function F4(t){const n=t.tagName.toLowerCase(),l=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(l)||l<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(n==="input"&&t.getAttribute("type")==="radio"){const u=t.getRootNode(),f=`input[type='radio'][name="${t.getAttribute("name")}"]`,h=u.querySelector(`${f}:checked`);return h?h===t:u.querySelector(f)===t}return P4(t)?(n==="audio"||n==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(n)?!0:V4(t):!1}function q4(t,n){var l;return((l=t.getRootNode({composed:!0}))==null?void 0:l.host)!==n}function N0(t){const n=new WeakMap,l=[];function r(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||n.has(o))return;n.set(o,!0),!l.includes(o)&&F4(o)&&l.push(o),o instanceof HTMLSlotElement&&q4(o,t)&&o.assignedElements({flatten:!0}).forEach(u=>{r(u)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&r(o.shadowRoot)}for(const u of o.children)r(u)}return r(t),l.sort((o,u)=>{const f=Number(o.getAttribute("tabindex"))||0;return(Number(u.getAttribute("tabindex"))||0)-f})}var us=[],O1=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=n=>{var l;if(n.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=I4();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;n.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=N0(this.element);let u=o.findIndex(h=>h===r);this.previousFocus=this.currentFocus;const f=this.tabDirection==="forward"?1:-1;for(;;){u+f>=o.length?u=0:u+f<0?u=o.length-1:u+=f,this.previousFocus=this.currentFocus;const h=o[u];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||h&&this.possiblyHasTabbableChildren(h))return;n.preventDefault(),this.currentFocus=h,(l=this.currentFocus)==null||l.focus({preventScroll:!1});const g=[...Mh()];if(g.includes(this.currentFocus)||!g.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){us.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){us=us.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return us[us.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=N0(this.element);if(!this.element.matches(":focus-within")){const n=t[0],l=t[t.length-1],r=this.tabDirection==="forward"?n:l;typeof r?.focus=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function G4(t,n){return{top:Math.round(t.getBoundingClientRect().top-n.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-n.getBoundingClientRect().left)}}var Wf=new Set;function Y4(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function X4(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function ys(t){if(Wf.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const n=Y4()+X4();let l=getComputedStyle(document.documentElement).scrollbarGutter;(!l||l==="auto")&&(l="stable"),n<2&&(l=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",l),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${n}px`)}}function _s(t){Wf.delete(t),Wf.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Qf(t,n,l="vertical",r="smooth"){const o=G4(t,n),u=o.top+n.scrollTop,f=o.left+n.scrollLeft,h=n.scrollLeft,g=n.scrollLeft+n.offsetWidth,p=n.scrollTop,b=n.scrollTop+n.offsetHeight;(l==="horizontal"||l==="both")&&(f<h?n.scrollTo({left:f,behavior:r}):f+t.clientWidth>g&&n.scrollTo({left:f-n.offsetWidth+t.clientWidth,behavior:r})),(l==="vertical"||l==="both")&&(u<p?n.scrollTo({top:u,behavior:r}):u+t.clientHeight>b&&n.scrollTo({top:u-n.offsetHeight+t.clientHeight,behavior:r}))}var k1=t=>{var n;const{activeElement:l}=document;l&&t.contains(l)&&((n=document.activeElement)==null||n.blur())},R1=new Map,W4=new WeakMap;function Q4(t){return t??{keyframes:[],options:{duration:0}}}function $0(t,n){return n.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function kt(t,n){R1.set(t,Q4(n))}function Ra(t,n,l){const r=W4.get(t);if(r?.[n])return $0(r[n],l.dir);const o=R1.get(n);return o?$0(o,l.dir):{keyframes:[],options:{duration:0}}}function er(t,n){return new Promise(l=>{function r(o){o.target===t&&(t.removeEventListener(n,r),l())}t.addEventListener(n,r)})}function Da(t,n,l){return new Promise(r=>{if(l?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(n,Cc(_i({},l),{duration:Z4()?0:l.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function Z4(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function sn(t){return Promise.all(t.getAnimations().map(n=>new Promise(l=>{n.cancel(),requestAnimationFrame(l)})))}function O0(t){return t.charAt(0).toUpperCase()+t.slice(1)}var sa=class extends st{constructor(){super(...arguments),this.hasSlotController=new tl(this,"footer"),this.localize=new Ba(this),this.modal=new O1(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ys(this)))}disconnectedCallback(){super.disconnectedCallback(),_s(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const l=Ra(this,"drawer.denyClose",{dir:this.localize.dir()});Da(this.panel,l.keyframes,l.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ys(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([sn(this.drawer),sn(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const n=Ra(this,`drawer.show${O0(this.placement)}`,{dir:this.localize.dir()}),l=Ra(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Da(this.panel,n.keyframes,n.options),Da(this.overlay,l.keyframes,l.options)]),this.emit("sl-after-show")}else{k1(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),_s(this)),await Promise.all([sn(this.drawer),sn(this.overlay)]);const t=Ra(this,`drawer.hide${O0(this.placement)}`,{dir:this.localize.dir()}),n=Ra(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Da(this.overlay,n.keyframes,n.options).then(()=>{this.overlay.hidden=!0}),Da(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const l=this.originalTrigger;typeof l?.focus=="function"&&setTimeout(()=>l.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ys(this)),this.open&&this.contained&&(this.modal.deactivate(),_s(this))}async show(){if(!this.open)return this.open=!0,er(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"sl-after-hide")}render(){return we`
      <div
        part="base"
        class=${dt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":we`
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
    `}};sa.styles=[Ot,U4];sa.dependencies={"sl-icon-button":xt};T([Ze(".drawer")],sa.prototype,"drawer",2);T([Ze(".drawer__panel")],sa.prototype,"panel",2);T([Ze(".drawer__overlay")],sa.prototype,"overlay",2);T([H({type:Boolean,reflect:!0})],sa.prototype,"open",2);T([H({reflect:!0})],sa.prototype,"label",2);T([H({reflect:!0})],sa.prototype,"placement",2);T([H({type:Boolean,reflect:!0})],sa.prototype,"contained",2);T([H({attribute:"no-header",type:Boolean,reflect:!0})],sa.prototype,"noHeader",2);T([Ge("open",{waitUntilFirstUpdate:!0})],sa.prototype,"handleOpenChange",1);T([Ge("contained",{waitUntilFirstUpdate:!0})],sa.prototype,"handleNoModalChange",1);kt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});kt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});kt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});kt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});kt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});kt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});kt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});kt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});kt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});kt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});kt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var K4="sl-drawer";sa.define("sl-drawer");var J4=ta({tagName:K4,elementClass:sa,react:Ft,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"}),mn=J4,e5=vt`
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
`,al=class extends st{constructor(){super(...arguments),this.localize=new Ba(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return we`
      <span
        part="base"
        class=${dt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?we`
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
    `}};al.styles=[Ot,e5];al.dependencies={"sl-icon-button":xt};T([H({reflect:!0})],al.prototype,"variant",2);T([H({reflect:!0})],al.prototype,"size",2);T([H({type:Boolean,reflect:!0})],al.prototype,"pill",2);T([H({type:Boolean})],al.prototype,"removable",2);var t5=vt`
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
`,Oc=vt`
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
`,a5=vt`
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
`;const vi=Math.min,va=Math.max,vc=Math.round,tc=Math.floor,on=t=>({x:t,y:t}),n5={left:"right",right:"left",bottom:"top",top:"bottom"},i5={start:"end",end:"start"};function Zf(t,n,l){return va(t,vi(n,l))}function nr(t,n){return typeof t=="function"?t(n):t}function bi(t){return t.split("-")[0]}function ir(t){return t.split("-")[1]}function D1(t){return t==="x"?"y":"x"}function Nh(t){return t==="y"?"height":"width"}const l5=new Set(["top","bottom"]);function jn(t){return l5.has(bi(t))?"y":"x"}function $h(t){return D1(jn(t))}function r5(t,n,l){l===void 0&&(l=!1);const r=ir(t),o=$h(t),u=Nh(o);let f=o==="x"?r===(l?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[u]>n.floating[u]&&(f=bc(f)),[f,bc(f)]}function s5(t){const n=bc(t);return[Kf(t),n,Kf(n)]}function Kf(t){return t.replace(/start|end/g,n=>i5[n])}const k0=["left","right"],R0=["right","left"],o5=["top","bottom"],c5=["bottom","top"];function u5(t,n,l){switch(t){case"top":case"bottom":return l?n?R0:k0:n?k0:R0;case"left":case"right":return n?o5:c5;default:return[]}}function d5(t,n,l,r){const o=ir(t);let u=u5(bi(t),l==="start",r);return o&&(u=u.map(f=>f+"-"+o),n&&(u=u.concat(u.map(Kf)))),u}function bc(t){return t.replace(/left|right|bottom|top/g,n=>n5[n])}function f5(t){return{top:0,right:0,bottom:0,left:0,...t}}function z1(t){return typeof t!="number"?f5(t):{top:t,right:t,bottom:t,left:t}}function yc(t){const{x:n,y:l,width:r,height:o}=t;return{width:r,height:o,top:l,left:n,right:n+r,bottom:l+o,x:n,y:l}}function D0(t,n,l){let{reference:r,floating:o}=t;const u=jn(n),f=$h(n),h=Nh(f),g=bi(n),p=u==="y",b=r.x+r.width/2-o.width/2,_=r.y+r.height/2-o.height/2,w=r[h]/2-o[h]/2;let y;switch(g){case"top":y={x:b,y:r.y-o.height};break;case"bottom":y={x:b,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:_};break;case"left":y={x:r.x-o.width,y:_};break;default:y={x:r.x,y:r.y}}switch(ir(n)){case"start":y[f]-=w*(l&&p?-1:1);break;case"end":y[f]+=w*(l&&p?-1:1);break}return y}const h5=async(t,n,l)=>{const{placement:r="bottom",strategy:o="absolute",middleware:u=[],platform:f}=l,h=u.filter(Boolean),g=await(f.isRTL==null?void 0:f.isRTL(n));let p=await f.getElementRects({reference:t,floating:n,strategy:o}),{x:b,y:_}=D0(p,r,g),w=r,y={},S=0;for(let A=0;A<h.length;A++){const{name:M,fn:C}=h[A],{x:D,y:U,data:j,reset:$}=await C({x:b,y:_,initialPlacement:r,placement:w,strategy:o,middlewareData:y,rects:p,platform:f,elements:{reference:t,floating:n}});b=D??b,_=U??_,y={...y,[M]:{...y[M],...j}},$&&S<=50&&(S++,typeof $=="object"&&($.placement&&(w=$.placement),$.rects&&(p=$.rects===!0?await f.getElementRects({reference:t,floating:n,strategy:o}):$.rects),{x:b,y:_}=D0(p,w,g)),A=-1)}return{x:b,y:_,placement:w,strategy:o,middlewareData:y}};async function Oh(t,n){var l;n===void 0&&(n={});const{x:r,y:o,platform:u,rects:f,elements:h,strategy:g}=t,{boundary:p="clippingAncestors",rootBoundary:b="viewport",elementContext:_="floating",altBoundary:w=!1,padding:y=0}=nr(n,t),S=z1(y),M=h[w?_==="floating"?"reference":"floating":_],C=yc(await u.getClippingRect({element:(l=await(u.isElement==null?void 0:u.isElement(M)))==null||l?M:M.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(h.floating)),boundary:p,rootBoundary:b,strategy:g})),D=_==="floating"?{x:r,y:o,width:f.floating.width,height:f.floating.height}:f.reference,U=await(u.getOffsetParent==null?void 0:u.getOffsetParent(h.floating)),j=await(u.isElement==null?void 0:u.isElement(U))?await(u.getScale==null?void 0:u.getScale(U))||{x:1,y:1}:{x:1,y:1},$=yc(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:D,offsetParent:U,strategy:g}):D);return{top:(C.top-$.top+S.top)/j.y,bottom:($.bottom-C.bottom+S.bottom)/j.y,left:(C.left-$.left+S.left)/j.x,right:($.right-C.right+S.right)/j.x}}const p5=t=>({name:"arrow",options:t,async fn(n){const{x:l,y:r,placement:o,rects:u,platform:f,elements:h,middlewareData:g}=n,{element:p,padding:b=0}=nr(t,n)||{};if(p==null)return{};const _=z1(b),w={x:l,y:r},y=$h(o),S=Nh(y),A=await f.getDimensions(p),M=y==="y",C=M?"top":"left",D=M?"bottom":"right",U=M?"clientHeight":"clientWidth",j=u.reference[S]+u.reference[y]-w[y]-u.floating[S],$=w[y]-u.reference[y],W=await(f.getOffsetParent==null?void 0:f.getOffsetParent(p));let X=W?W[U]:0;(!X||!await(f.isElement==null?void 0:f.isElement(W)))&&(X=h.floating[U]||u.floating[S]);const oe=j/2-$/2,L=X/2-A[S]/2-1,q=vi(_[C],L),J=vi(_[D],L),ne=q,Q=X-A[S]-J,le=X/2-A[S]/2+oe,te=Zf(ne,le,Q),I=!g.arrow&&ir(o)!=null&&le!==te&&u.reference[S]/2-(le<ne?q:J)-A[S]/2<0,Z=I?le<ne?le-ne:le-Q:0;return{[y]:w[y]+Z,data:{[y]:te,centerOffset:le-te-Z,...I&&{alignmentOffset:Z}},reset:I}}}),m5=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var l,r;const{placement:o,middlewareData:u,rects:f,initialPlacement:h,platform:g,elements:p}=n,{mainAxis:b=!0,crossAxis:_=!0,fallbackPlacements:w,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:A=!0,...M}=nr(t,n);if((l=u.arrow)!=null&&l.alignmentOffset)return{};const C=bi(o),D=jn(h),U=bi(h)===h,j=await(g.isRTL==null?void 0:g.isRTL(p.floating)),$=w||(U||!A?[bc(h)]:s5(h)),W=S!=="none";!w&&W&&$.push(...d5(h,A,S,j));const X=[h,...$],oe=await Oh(n,M),L=[];let q=((r=u.flip)==null?void 0:r.overflows)||[];if(b&&L.push(oe[C]),_){const le=r5(o,f,j);L.push(oe[le[0]],oe[le[1]])}if(q=[...q,{placement:o,overflows:L}],!L.every(le=>le<=0)){var J,ne;const le=(((J=u.flip)==null?void 0:J.index)||0)+1,te=X[le];if(te&&(!(_==="alignment"?D!==jn(te):!1)||q.every(ee=>jn(ee.placement)===D?ee.overflows[0]>0:!0)))return{data:{index:le,overflows:q},reset:{placement:te}};let I=(ne=q.filter(Z=>Z.overflows[0]<=0).sort((Z,ee)=>Z.overflows[1]-ee.overflows[1])[0])==null?void 0:ne.placement;if(!I)switch(y){case"bestFit":{var Q;const Z=(Q=q.filter(ee=>{if(W){const ce=jn(ee.placement);return ce===D||ce==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(ce=>ce>0).reduce((ce,_e)=>ce+_e,0)]).sort((ee,ce)=>ee[1]-ce[1])[0])==null?void 0:Q[0];Z&&(I=Z);break}case"initialPlacement":I=h;break}if(o!==I)return{reset:{placement:I}}}return{}}}},g5=new Set(["left","top"]);async function v5(t,n){const{placement:l,platform:r,elements:o}=t,u=await(r.isRTL==null?void 0:r.isRTL(o.floating)),f=bi(l),h=ir(l),g=jn(l)==="y",p=g5.has(f)?-1:1,b=u&&g?-1:1,_=nr(n,t);let{mainAxis:w,crossAxis:y,alignmentAxis:S}=typeof _=="number"?{mainAxis:_,crossAxis:0,alignmentAxis:null}:{mainAxis:_.mainAxis||0,crossAxis:_.crossAxis||0,alignmentAxis:_.alignmentAxis};return h&&typeof S=="number"&&(y=h==="end"?S*-1:S),g?{x:y*b,y:w*p}:{x:w*p,y:y*b}}const b5=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var l,r;const{x:o,y:u,placement:f,middlewareData:h}=n,g=await v5(n,t);return f===((l=h.offset)==null?void 0:l.placement)&&(r=h.arrow)!=null&&r.alignmentOffset?{}:{x:o+g.x,y:u+g.y,data:{...g,placement:f}}}}},y5=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:l,y:r,placement:o}=n,{mainAxis:u=!0,crossAxis:f=!1,limiter:h={fn:M=>{let{x:C,y:D}=M;return{x:C,y:D}}},...g}=nr(t,n),p={x:l,y:r},b=await Oh(n,g),_=jn(bi(o)),w=D1(_);let y=p[w],S=p[_];if(u){const M=w==="y"?"top":"left",C=w==="y"?"bottom":"right",D=y+b[M],U=y-b[C];y=Zf(D,y,U)}if(f){const M=_==="y"?"top":"left",C=_==="y"?"bottom":"right",D=S+b[M],U=S-b[C];S=Zf(D,S,U)}const A=h.fn({...n,[w]:y,[_]:S});return{...A,data:{x:A.x-l,y:A.y-r,enabled:{[w]:u,[_]:f}}}}}},_5=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(n){var l,r;const{placement:o,rects:u,platform:f,elements:h}=n,{apply:g=()=>{},...p}=nr(t,n),b=await Oh(n,p),_=bi(o),w=ir(o),y=jn(o)==="y",{width:S,height:A}=u.floating;let M,C;_==="top"||_==="bottom"?(M=_,C=w===(await(f.isRTL==null?void 0:f.isRTL(h.floating))?"start":"end")?"left":"right"):(C=_,M=w==="end"?"top":"bottom");const D=A-b.top-b.bottom,U=S-b.left-b.right,j=vi(A-b[M],D),$=vi(S-b[C],U),W=!n.middlewareData.shift;let X=j,oe=$;if((l=n.middlewareData.shift)!=null&&l.enabled.x&&(oe=U),(r=n.middlewareData.shift)!=null&&r.enabled.y&&(X=D),W&&!w){const q=va(b.left,0),J=va(b.right,0),ne=va(b.top,0),Q=va(b.bottom,0);y?oe=S-2*(q!==0||J!==0?q+J:va(b.left,b.right)):X=A-2*(ne!==0||Q!==0?ne+Q:va(b.top,b.bottom))}await g({...n,availableWidth:oe,availableHeight:X});const L=await f.getDimensions(h.floating);return S!==L.width||A!==L.height?{reset:{rects:!0}}:{}}}};function kc(){return typeof window<"u"}function lr(t){return L1(t)?(t.nodeName||"").toLowerCase():"#document"}function ba(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function gn(t){var n;return(n=(L1(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function L1(t){return kc()?t instanceof Node||t instanceof ba(t).Node:!1}function Ya(t){return kc()?t instanceof Element||t instanceof ba(t).Element:!1}function dn(t){return kc()?t instanceof HTMLElement||t instanceof ba(t).HTMLElement:!1}function z0(t){return!kc()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ba(t).ShadowRoot}const x5=new Set(["inline","contents"]);function Ns(t){const{overflow:n,overflowX:l,overflowY:r,display:o}=Xa(t);return/auto|scroll|overlay|hidden|clip/.test(n+r+l)&&!x5.has(o)}const w5=new Set(["table","td","th"]);function S5(t){return w5.has(lr(t))}const E5=[":popover-open",":modal"];function Rc(t){return E5.some(n=>{try{return t.matches(n)}catch{return!1}})}const C5=["transform","translate","scale","rotate","perspective"],T5=["transform","translate","scale","rotate","perspective","filter"],A5=["paint","layout","strict","content"];function Dc(t){const n=kh(),l=Ya(t)?Xa(t):t;return C5.some(r=>l[r]?l[r]!=="none":!1)||(l.containerType?l.containerType!=="normal":!1)||!n&&(l.backdropFilter?l.backdropFilter!=="none":!1)||!n&&(l.filter?l.filter!=="none":!1)||T5.some(r=>(l.willChange||"").includes(r))||A5.some(r=>(l.contain||"").includes(r))}function M5(t){let n=yi(t);for(;dn(n)&&!tr(n);){if(Dc(n))return n;if(Rc(n))return null;n=yi(n)}return null}function kh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const N5=new Set(["html","body","#document"]);function tr(t){return N5.has(lr(t))}function Xa(t){return ba(t).getComputedStyle(t)}function zc(t){return Ya(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function yi(t){if(lr(t)==="html")return t;const n=t.assignedSlot||t.parentNode||z0(t)&&t.host||gn(t);return z0(n)?n.host:n}function j1(t){const n=yi(t);return tr(n)?t.ownerDocument?t.ownerDocument.body:t.body:dn(n)&&Ns(n)?n:j1(n)}function Ss(t,n,l){var r;n===void 0&&(n=[]),l===void 0&&(l=!0);const o=j1(t),u=o===((r=t.ownerDocument)==null?void 0:r.body),f=ba(o);if(u){const h=Jf(f);return n.concat(f,f.visualViewport||[],Ns(o)?o:[],h&&l?Ss(h):[])}return n.concat(o,Ss(o,[],l))}function Jf(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function B1(t){const n=Xa(t);let l=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const o=dn(t),u=o?t.offsetWidth:l,f=o?t.offsetHeight:r,h=vc(l)!==u||vc(r)!==f;return h&&(l=u,r=f),{width:l,height:r,$:h}}function Rh(t){return Ya(t)?t:t.contextElement}function Xl(t){const n=Rh(t);if(!dn(n))return on(1);const l=n.getBoundingClientRect(),{width:r,height:o,$:u}=B1(n);let f=(u?vc(l.width):l.width)/r,h=(u?vc(l.height):l.height)/o;return(!f||!Number.isFinite(f))&&(f=1),(!h||!Number.isFinite(h))&&(h=1),{x:f,y:h}}const $5=on(0);function H1(t){const n=ba(t);return!kh()||!n.visualViewport?$5:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function O5(t,n,l){return n===void 0&&(n=!1),!l||n&&l!==ba(t)?!1:n}function el(t,n,l,r){n===void 0&&(n=!1),l===void 0&&(l=!1);const o=t.getBoundingClientRect(),u=Rh(t);let f=on(1);n&&(r?Ya(r)&&(f=Xl(r)):f=Xl(t));const h=O5(u,l,r)?H1(u):on(0);let g=(o.left+h.x)/f.x,p=(o.top+h.y)/f.y,b=o.width/f.x,_=o.height/f.y;if(u){const w=ba(u),y=r&&Ya(r)?ba(r):r;let S=w,A=Jf(S);for(;A&&r&&y!==S;){const M=Xl(A),C=A.getBoundingClientRect(),D=Xa(A),U=C.left+(A.clientLeft+parseFloat(D.paddingLeft))*M.x,j=C.top+(A.clientTop+parseFloat(D.paddingTop))*M.y;g*=M.x,p*=M.y,b*=M.x,_*=M.y,g+=U,p+=j,S=ba(A),A=Jf(S)}}return yc({width:b,height:_,x:g,y:p})}function Lc(t,n){const l=zc(t).scrollLeft;return n?n.left+l:el(gn(t)).left+l}function U1(t,n){const l=t.getBoundingClientRect(),r=l.left+n.scrollLeft-Lc(t,l),o=l.top+n.scrollTop;return{x:r,y:o}}function k5(t){let{elements:n,rect:l,offsetParent:r,strategy:o}=t;const u=o==="fixed",f=gn(r),h=n?Rc(n.floating):!1;if(r===f||h&&u)return l;let g={scrollLeft:0,scrollTop:0},p=on(1);const b=on(0),_=dn(r);if((_||!_&&!u)&&((lr(r)!=="body"||Ns(f))&&(g=zc(r)),dn(r))){const y=el(r);p=Xl(r),b.x=y.x+r.clientLeft,b.y=y.y+r.clientTop}const w=f&&!_&&!u?U1(f,g):on(0);return{width:l.width*p.x,height:l.height*p.y,x:l.x*p.x-g.scrollLeft*p.x+b.x+w.x,y:l.y*p.y-g.scrollTop*p.y+b.y+w.y}}function R5(t){return Array.from(t.getClientRects())}function D5(t){const n=gn(t),l=zc(t),r=t.ownerDocument.body,o=va(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),u=va(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let f=-l.scrollLeft+Lc(t);const h=-l.scrollTop;return Xa(r).direction==="rtl"&&(f+=va(n.clientWidth,r.clientWidth)-o),{width:o,height:u,x:f,y:h}}const L0=25;function z5(t,n){const l=ba(t),r=gn(t),o=l.visualViewport;let u=r.clientWidth,f=r.clientHeight,h=0,g=0;if(o){u=o.width,f=o.height;const b=kh();(!b||b&&n==="fixed")&&(h=o.offsetLeft,g=o.offsetTop)}const p=Lc(r);if(p<=0){const b=r.ownerDocument,_=b.body,w=getComputedStyle(_),y=b.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,S=Math.abs(r.clientWidth-_.clientWidth-y);S<=L0&&(u-=S)}else p<=L0&&(u+=p);return{width:u,height:f,x:h,y:g}}const L5=new Set(["absolute","fixed"]);function j5(t,n){const l=el(t,!0,n==="fixed"),r=l.top+t.clientTop,o=l.left+t.clientLeft,u=dn(t)?Xl(t):on(1),f=t.clientWidth*u.x,h=t.clientHeight*u.y,g=o*u.x,p=r*u.y;return{width:f,height:h,x:g,y:p}}function j0(t,n,l){let r;if(n==="viewport")r=z5(t,l);else if(n==="document")r=D5(gn(t));else if(Ya(n))r=j5(n,l);else{const o=H1(t);r={x:n.x-o.x,y:n.y-o.y,width:n.width,height:n.height}}return yc(r)}function I1(t,n){const l=yi(t);return l===n||!Ya(l)||tr(l)?!1:Xa(l).position==="fixed"||I1(l,n)}function B5(t,n){const l=n.get(t);if(l)return l;let r=Ss(t,[],!1).filter(h=>Ya(h)&&lr(h)!=="body"),o=null;const u=Xa(t).position==="fixed";let f=u?yi(t):t;for(;Ya(f)&&!tr(f);){const h=Xa(f),g=Dc(f);!g&&h.position==="fixed"&&(o=null),(u?!g&&!o:!g&&h.position==="static"&&!!o&&L5.has(o.position)||Ns(f)&&!g&&I1(t,f))?r=r.filter(b=>b!==f):o=h,f=yi(f)}return n.set(t,r),r}function H5(t){let{element:n,boundary:l,rootBoundary:r,strategy:o}=t;const f=[...l==="clippingAncestors"?Rc(n)?[]:B5(n,this._c):[].concat(l),r],h=f[0],g=f.reduce((p,b)=>{const _=j0(n,b,o);return p.top=va(_.top,p.top),p.right=vi(_.right,p.right),p.bottom=vi(_.bottom,p.bottom),p.left=va(_.left,p.left),p},j0(n,h,o));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function U5(t){const{width:n,height:l}=B1(t);return{width:n,height:l}}function I5(t,n,l){const r=dn(n),o=gn(n),u=l==="fixed",f=el(t,!0,u,n);let h={scrollLeft:0,scrollTop:0};const g=on(0);function p(){g.x=Lc(o)}if(r||!r&&!u)if((lr(n)!=="body"||Ns(o))&&(h=zc(n)),r){const y=el(n,!0,u,n);g.x=y.x+n.clientLeft,g.y=y.y+n.clientTop}else o&&p();u&&!r&&o&&p();const b=o&&!r&&!u?U1(o,h):on(0),_=f.left+h.scrollLeft-g.x-b.x,w=f.top+h.scrollTop-g.y-b.y;return{x:_,y:w,width:f.width,height:f.height}}function hf(t){return Xa(t).position==="static"}function B0(t,n){if(!dn(t)||Xa(t).position==="fixed")return null;if(n)return n(t);let l=t.offsetParent;return gn(t)===l&&(l=l.ownerDocument.body),l}function P1(t,n){const l=ba(t);if(Rc(t))return l;if(!dn(t)){let o=yi(t);for(;o&&!tr(o);){if(Ya(o)&&!hf(o))return o;o=yi(o)}return l}let r=B0(t,n);for(;r&&S5(r)&&hf(r);)r=B0(r,n);return r&&tr(r)&&hf(r)&&!Dc(r)?l:r||M5(t)||l}const P5=async function(t){const n=this.getOffsetParent||P1,l=this.getDimensions,r=await l(t.floating);return{reference:I5(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function V5(t){return Xa(t).direction==="rtl"}const dc={convertOffsetParentRelativeRectToViewportRelativeRect:k5,getDocumentElement:gn,getClippingRect:H5,getOffsetParent:P1,getElementRects:P5,getClientRects:R5,getDimensions:U5,getScale:Xl,isElement:Ya,isRTL:V5};function V1(t,n){return t.x===n.x&&t.y===n.y&&t.width===n.width&&t.height===n.height}function F5(t,n){let l=null,r;const o=gn(t);function u(){var h;clearTimeout(r),(h=l)==null||h.disconnect(),l=null}function f(h,g){h===void 0&&(h=!1),g===void 0&&(g=1),u();const p=t.getBoundingClientRect(),{left:b,top:_,width:w,height:y}=p;if(h||n(),!w||!y)return;const S=tc(_),A=tc(o.clientWidth-(b+w)),M=tc(o.clientHeight-(_+y)),C=tc(b),U={rootMargin:-S+"px "+-A+"px "+-M+"px "+-C+"px",threshold:va(0,vi(1,g))||1};let j=!0;function $(W){const X=W[0].intersectionRatio;if(X!==g){if(!j)return f();X?f(!1,X):r=setTimeout(()=>{f(!1,1e-7)},1e3)}X===1&&!V1(p,t.getBoundingClientRect())&&f(),j=!1}try{l=new IntersectionObserver($,{...U,root:o.ownerDocument})}catch{l=new IntersectionObserver($,U)}l.observe(t)}return f(!0),u}function q5(t,n,l,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:u=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:g=!1}=r,p=Rh(t),b=o||u?[...p?Ss(p):[],...Ss(n)]:[];b.forEach(C=>{o&&C.addEventListener("scroll",l,{passive:!0}),u&&C.addEventListener("resize",l)});const _=p&&h?F5(p,l):null;let w=-1,y=null;f&&(y=new ResizeObserver(C=>{let[D]=C;D&&D.target===p&&y&&(y.unobserve(n),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var U;(U=y)==null||U.observe(n)})),l()}),p&&!g&&y.observe(p),y.observe(n));let S,A=g?el(t):null;g&&M();function M(){const C=el(t);A&&!V1(A,C)&&l(),A=C,S=requestAnimationFrame(M)}return l(),()=>{var C;b.forEach(D=>{o&&D.removeEventListener("scroll",l),u&&D.removeEventListener("resize",l)}),_?.(),(C=y)==null||C.disconnect(),y=null,g&&cancelAnimationFrame(S)}}const G5=b5,Y5=y5,X5=m5,H0=_5,W5=p5,Q5=(t,n,l)=>{const r=new Map,o={platform:dc,...l},u={...o.platform,_c:r};return h5(t,n,{...o,platform:u})};function Z5(t){return K5(t)}function pf(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function K5(t){for(let n=t;n;n=pf(n))if(n instanceof Element&&getComputedStyle(n).display==="none")return null;for(let n=pf(t);n;n=pf(n)){if(!(n instanceof Element))continue;const l=getComputedStyle(n);if(l.display!=="contents"&&(l.position!=="static"||Dc(l)||n.tagName==="BODY"))return n}return null}function J5(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var We=class extends st{constructor(){super(...arguments),this.localize=new Ba(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),n=this.popup.getBoundingClientRect(),l=this.placement.includes("top")||this.placement.includes("bottom");let r=0,o=0,u=0,f=0,h=0,g=0,p=0,b=0;l?t.top<n.top?(r=t.left,o=t.bottom,u=t.right,f=t.bottom,h=n.left,g=n.top,p=n.right,b=n.top):(r=n.left,o=n.bottom,u=n.right,f=n.bottom,h=t.left,g=t.top,p=t.right,b=t.top):t.left<n.left?(r=t.right,o=t.top,u=n.left,f=n.top,h=t.right,g=t.bottom,p=n.left,b=n.bottom):(r=n.right,o=n.top,u=t.left,f=t.top,h=n.right,g=n.bottom,p=t.left,b=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${u}px`),this.style.setProperty("--hover-bridge-top-right-y",`${f}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${b}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||J5(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=q5(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[G5({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(H0({apply:({rects:l})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${l.reference.width}px`:"",this.popup.style.height=o?`${l.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(X5({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Y5({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(H0({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:l,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${l}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(W5({element:this.arrowEl,padding:this.arrowPadding}));const n=this.strategy==="absolute"?l=>dc.getOffsetParent(l,Z5):dc.getOffsetParent;Q5(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Cc(_i({},dc),{getOffsetParent:n})}).then(({x:l,y:r,middlewareData:o,placement:u})=>{const f=this.localize.dir()==="rtl",h={top:"bottom",right:"left",bottom:"top",left:"right"}[u.split("-")[0]];if(this.setAttribute("data-current-placement",u),Object.assign(this.popup.style,{left:`${l}px`,top:`${r}px`}),this.arrow){const g=o.arrow.x,p=o.arrow.y;let b="",_="",w="",y="";if(this.arrowPlacement==="start"){const S=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",_=f?S:"",y=f?"":S}else if(this.arrowPlacement==="end"){const S=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";_=f?"":S,y=f?S:"",w=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(y=typeof g=="number"?"calc(50% - var(--arrow-size-diagonal))":"",b=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(y=typeof g=="number"?`${g}px`:"",b=typeof p=="number"?`${p}px`:"");Object.assign(this.arrowEl.style,{top:b,right:_,bottom:w,left:y,[h]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return we`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${dt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${dt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?we`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};We.styles=[Ot,a5];T([Ze(".popup")],We.prototype,"popup",2);T([Ze(".popup__arrow")],We.prototype,"arrowEl",2);T([H()],We.prototype,"anchor",2);T([H({type:Boolean,reflect:!0})],We.prototype,"active",2);T([H({reflect:!0})],We.prototype,"placement",2);T([H({reflect:!0})],We.prototype,"strategy",2);T([H({type:Number})],We.prototype,"distance",2);T([H({type:Number})],We.prototype,"skidding",2);T([H({type:Boolean})],We.prototype,"arrow",2);T([H({attribute:"arrow-placement"})],We.prototype,"arrowPlacement",2);T([H({attribute:"arrow-padding",type:Number})],We.prototype,"arrowPadding",2);T([H({type:Boolean})],We.prototype,"flip",2);T([H({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(n=>n.trim()).filter(n=>n!==""),toAttribute:t=>t.join(" ")}})],We.prototype,"flipFallbackPlacements",2);T([H({attribute:"flip-fallback-strategy"})],We.prototype,"flipFallbackStrategy",2);T([H({type:Object})],We.prototype,"flipBoundary",2);T([H({attribute:"flip-padding",type:Number})],We.prototype,"flipPadding",2);T([H({type:Boolean})],We.prototype,"shift",2);T([H({type:Object})],We.prototype,"shiftBoundary",2);T([H({attribute:"shift-padding",type:Number})],We.prototype,"shiftPadding",2);T([H({attribute:"auto-size"})],We.prototype,"autoSize",2);T([H()],We.prototype,"sync",2);T([H({type:Object})],We.prototype,"autoSizeBoundary",2);T([H({attribute:"auto-size-padding",type:Number})],We.prototype,"autoSizePadding",2);T([H({attribute:"hover-bridge",type:Boolean})],We.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eh=class extends wh{constructor(n){if(super(n),this.it=lt,n.type!==hi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(n){if(n===lt||n==null)return this._t=void 0,this.it=n;if(n===La)return n;if(typeof n!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(n===this.it)return this._t;this.it=n;const l=[n];return l.raw=l,this._t={_$litType$:this.constructor.resultType,strings:l,values:[]}}};eh.directiveName="unsafeHTML",eh.resultType=1;const e6=xh(eh);var Ce=class extends st{constructor(){super(...arguments),this.formControlController=new Cs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new tl(this,"help-text","label"),this.localize=new Ba(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>we`
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
        @sl-remove=${n=>this.handleTagRemove(n,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const n=t.composedPath();this&&!n.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const n=t.target,l=n.closest(".select__clear")!==null,r=n.closest("sl-icon-button")!==null;if(!(l||r)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),u=o.indexOf(this.currentOption);let f=Math.max(0,u);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(f=u+1,f>o.length-1&&(f=0)):t.key==="ArrowUp"?(f=u-1,f<0&&(f=o.length-1)):t.key==="Home"?f=0:t.key==="End"&&(f=o.length-1),this.setCurrentOption(o[f])}if(t.key&&t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const u of o)if(u.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(u);break}}}},this.handleDocumentMouseDown=t=>{const n=t.composedPath();this&&!n.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const l=t.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||l||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const l=t.target.closest("sl-option"),r=this.value;l&&!l.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(l):this.setSelectedOptions(l),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),n=this.valueHasChanged?this.value:this.defaultValue,l=Array.isArray(n)?n:[n],r=[];t.forEach(o=>r.push(o.value)),this.setSelectedOptions(t.filter(o=>l.includes(o.value)))}handleTagRemove(t,n){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(l=>{l.current=!1,l.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const n=this.getAllOptions(),l=Array.isArray(t)?t:[t];n.forEach(r=>r.selected=!1),l.length&&l.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(t,n){n===!0||n===!1?t.selected=n:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,n,l;const r=this.getAllOptions();this.selectedOptions=r.filter(u=>u.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(u=>u.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const u=this.selectedOptions[0];this.value=(t=u?.value)!=null?t:"",this.displayLabel=(l=(n=u?.getTextLabel)==null?void 0:n.call(u))!=null?l:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,n)=>{if(n<this.maxOptionsVisible||this.maxOptionsVisible<=0){const l=this.getTag(t,n);return we`<div @sl-remove=${r=>this.handleTagRemove(r,t)}>
          ${typeof l=="string"?e6(l):l}
        </div>`}else if(n===this.maxOptionsVisible)return we`<sl-tag size=${this.size}>+${this.selectedOptions.length-n}</sl-tag>`;return we``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,n,l){if(super.attributeChangedCallback(t,n,l),t==="value"){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}}handleValueChange(){if(!this.valueHasChanged){const l=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=l}const t=this.getAllOptions(),n=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(l=>n.includes(l.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await sn(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:n}=Ra(this,"select.show",{dir:this.localize.dir()});await Da(this.popup.popup,t,n),this.currentOption&&Qf(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await sn(this);const{keyframes:t,options:n}=Ra(this,"select.hide",{dir:this.localize.dir()});await Da(this.popup.popup,t,n),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,er(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,er(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!n,o=this.clearable&&!this.disabled&&this.value.length>0,u=this.placeholder&&this.value&&this.value.length<=0;return we`
      <div
        part="form-control"
        class=${dt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":r})}
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
            class=${dt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":u,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?we`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?we`
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
    `}};Ce.styles=[Ot,Oc,t5];Ce.dependencies={"sl-icon":Gt,"sl-popup":We,"sl-tag":al};T([Ze(".select")],Ce.prototype,"popup",2);T([Ze(".select__combobox")],Ce.prototype,"combobox",2);T([Ze(".select__display-input")],Ce.prototype,"displayInput",2);T([Ze(".select__value-input")],Ce.prototype,"valueInput",2);T([Ze(".select__listbox")],Ce.prototype,"listbox",2);T([ft()],Ce.prototype,"hasFocus",2);T([ft()],Ce.prototype,"displayLabel",2);T([ft()],Ce.prototype,"currentOption",2);T([ft()],Ce.prototype,"selectedOptions",2);T([ft()],Ce.prototype,"valueHasChanged",2);T([H()],Ce.prototype,"name",2);T([ft()],Ce.prototype,"value",1);T([H({attribute:"value"})],Ce.prototype,"defaultValue",2);T([H({reflect:!0})],Ce.prototype,"size",2);T([H()],Ce.prototype,"placeholder",2);T([H({type:Boolean,reflect:!0})],Ce.prototype,"multiple",2);T([H({attribute:"max-options-visible",type:Number})],Ce.prototype,"maxOptionsVisible",2);T([H({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);T([H({type:Boolean})],Ce.prototype,"clearable",2);T([H({type:Boolean,reflect:!0})],Ce.prototype,"open",2);T([H({type:Boolean})],Ce.prototype,"hoist",2);T([H({type:Boolean,reflect:!0})],Ce.prototype,"filled",2);T([H({type:Boolean,reflect:!0})],Ce.prototype,"pill",2);T([H()],Ce.prototype,"label",2);T([H({reflect:!0})],Ce.prototype,"placement",2);T([H({attribute:"help-text"})],Ce.prototype,"helpText",2);T([H({reflect:!0})],Ce.prototype,"form",2);T([H({type:Boolean,reflect:!0})],Ce.prototype,"required",2);T([H()],Ce.prototype,"getTag",2);T([Ge("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);T([Ge(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Ce.prototype,"handleValueChange",1);T([Ge("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);kt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});kt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var t6="sl-select";Ce.define("sl-select");var a6=ta({tagName:t6,elementClass:Ce,react:Ft,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),ea=a6,n6=vt`
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
`,ya=class extends st{constructor(){super(...arguments),this.localize=new Ba(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let n="";return[...t].forEach(l=>{l.nodeType===Node.ELEMENT_NODE&&(l.hasAttribute("slot")||(n+=l.textContent)),l.nodeType===Node.TEXT_NODE&&(n+=l.textContent)}),n.trim()}render(){return we`
      <div
        part="base"
        class=${dt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ya.styles=[Ot,n6];ya.dependencies={"sl-icon":Gt};T([Ze(".option__label")],ya.prototype,"defaultSlot",2);T([ft()],ya.prototype,"current",2);T([ft()],ya.prototype,"selected",2);T([ft()],ya.prototype,"hasHover",2);T([H({reflect:!0})],ya.prototype,"value",2);T([H({type:Boolean,reflect:!0})],ya.prototype,"disabled",2);T([Ge("disabled")],ya.prototype,"handleDisabledChange",1);T([Ge("selected")],ya.prototype,"handleSelectedChange",1);T([Ge("value")],ya.prototype,"handleValueChange",1);var i6="sl-option";ya.define("sl-option");var l6=ta({tagName:i6,elementClass:ya,react:Ft,events:{},displayName:"SlOption"}),je=l6,r6=vt`
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
`,Wa=class extends st{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=we`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let n=we``;return this.initials?n=we`<div part="initials" class="avatar__initials">${this.initials}</div>`:n=we`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,we`
      <div
        part="base"
        class=${dt({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:n}
      </div>
    `}};Wa.styles=[Ot,r6];Wa.dependencies={"sl-icon":Gt};T([ft()],Wa.prototype,"hasError",2);T([H()],Wa.prototype,"image",2);T([H()],Wa.prototype,"label",2);T([H()],Wa.prototype,"initials",2);T([H()],Wa.prototype,"loading",2);T([H({reflect:!0})],Wa.prototype,"shape",2);T([Ge("image")],Wa.prototype,"handleImageChange",1);var s6="sl-avatar";Wa.define("sl-avatar");var o6=ta({tagName:s6,elementClass:Wa,react:Ft,events:{onSlError:"sl-error"},displayName:"SlAvatar"}),c6=o6;const u6="_avatar_744bf_1",d6={avatar:u6};function gt({image:t,name:n="",shape:l="circle",className:r,style:o}){const u=k.useMemo(()=>{if(!n)return"";const f=n.trim().split(/\s+/);return f.length===0?"":f.length===1?f[0].charAt(0).toUpperCase():(f[0].charAt(0)+f[f.length-1].charAt(0)).toUpperCase()},[n]);return m.jsx(c6,{image:t??void 0,label:n,initials:u,shape:l,className:`${d6.avatar} ${r||""}`,style:o})}var f6=Object.defineProperty,h6=Object.defineProperties,p6=Object.getOwnPropertyDescriptors,_c=Object.getOwnPropertySymbols,F1=Object.prototype.hasOwnProperty,q1=Object.prototype.propertyIsEnumerable,U0=(t,n,l)=>n in t?f6(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,ui=(t,n)=>{for(var l in n||(n={}))F1.call(n,l)&&U0(t,l,n[l]);if(_c)for(var l of _c(n))q1.call(n,l)&&U0(t,l,n[l]);return t},mf=(t,n)=>h6(t,p6(n)),m6=(t,n)=>{var l={};for(var r in t)F1.call(t,r)&&n.indexOf(r)<0&&(l[r]=t[r]);if(t!=null&&_c)for(var r of _c(t))n.indexOf(r)<0&&q1.call(t,r)&&(l[r]=t[r]);return l},g6=(t,n,l)=>new Promise((r,o)=>{var u=g=>{try{h(l.next(g))}catch(p){o(p)}},f=g=>{try{h(l.throw(g))}catch(p){o(p)}},h=g=>g.done?r(g.value):Promise.resolve(g.value).then(u,f);h((l=l.apply(t,n)).next())}),v6=t=>{const n=/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;return!!t.match(n)},G1=(t,n)=>new Promise((l,r)=>{const o=new Image;o.onload=()=>l(o),o.onerror=r,!v6(t)&&n&&(o.crossOrigin=n),o.src=t}),b6=t=>new Promise((n,l)=>{const r=new FileReader;r.onload=o=>{var u;try{if(!((u=o?.target)!=null&&u.result))throw new Error("No image data");const f=G1(o.target.result);n(f)}catch(f){l(f)}},r.readAsDataURL(t)}),y6=()=>{let t=!1;try{const n=Object.defineProperty({},"passive",{get:function(){t=!0}}),l=()=>{};window.addEventListener("test",l,n),window.removeEventListener("test",l,n)}catch{t=!1}return t},I0=typeof window<"u"&&typeof navigator<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),_6=typeof File<"u",P0=(t,n,l,r,o,u)=>{if(u===0)t.rect(n,l,r,o);else{const f=r-u,h=o-u;t.translate(n,l),t.arc(u,u,u,Math.PI,Math.PI*1.5),t.lineTo(f,0),t.arc(f,u,u,Math.PI*1.5,Math.PI*2),t.lineTo(r,h),t.arc(f,h,u,Math.PI*2,Math.PI*.5),t.lineTo(u,o),t.arc(u,h,u,Math.PI*.5,Math.PI),t.closePath(),t.translate(-n,-l)}},x6=(t,n,l,r,o,u)=>{t.fillStyle=u;const f=r/3,h=o/3;t.fillRect(n,l,1,o),t.fillRect(f+n,l,1,o),t.fillRect(f*2+n,l,1,o),t.fillRect(f*3+n,l,1,o),t.fillRect(f*4+n,l,1,o),t.fillRect(n,l,r,1),t.fillRect(n,h+l,r,1),t.fillRect(n,h*2+l,r,1),t.fillRect(n,h*3+l,r,1),t.fillRect(n,h*4+l,r,1)},gf={x:.5,y:.5},Y1=class extends R.Component{constructor(){super(...arguments),this.canvas=R.createRef(),this.pixelRatio=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,this.state={drag:!1,my:void 0,mx:void 0,image:gf},this.handleImageReady=n=>{var l,r;const o=mf(ui({},this.getInitialSize(n.width,n.height)),{resource:n,x:.5,y:.5});this.setState({drag:!1,image:o},this.props.onImageReady),(r=(l=this.props).onLoadSuccess)==null||r.call(l,o)},this.clearImage=()=>{const n=this.getCanvas();this.getContext().clearRect(0,0,n.width,n.height),this.setState({image:gf})},this.handleMouseDown=n=>{n.preventDefault(),this.setState({drag:!0,mx:void 0,my:void 0})},this.handleTouchStart=n=>{this.setState({drag:!0,mx:void 0,my:void 0})},this.handleMouseUp=()=>{var n,l;this.state.drag&&(this.setState({drag:!1}),(l=(n=this.props).onMouseUp)==null||l.call(n))},this.handleMouseMove=n=>{var l,r,o,u;if(!this.state.drag)return;n.preventDefault();const f="targetTouches"in n?n.targetTouches[0].pageX:n.clientX,h="targetTouches"in n?n.targetTouches[0].pageY:n.clientY;this.setState({mx:f,my:h});let g=this.props.rotate;if(g%=360,g=g<0?g+360:g,this.state.mx&&this.state.my&&this.state.image.width&&this.state.image.height){const p=this.state.mx-f,b=this.state.my-h,_=this.state.image.width*this.props.scale,w=this.state.image.height*this.props.scale;let{x:y,y:S}=this.getCroppingRect();y*=_,S*=w;const A=X=>X*(Math.PI/180),M=Math.cos(A(g)),C=Math.sin(A(g)),D=y+p*M+b*C,U=S+-p*C+b*M,j=1/this.props.scale*this.getXScale(),$=1/this.props.scale*this.getYScale(),W={x:D/_+j/2,y:U/w+$/2};(r=(l=this.props).onPositionChange)==null||r.call(l,W),this.setState({image:ui(ui({},this.state.image),W)})}(u=(o=this.props).onMouseMove)==null||u.call(o,n)}}componentDidMount(){this.props.disableHiDPIScaling&&(this.pixelRatio=1);const n=this.getContext();this.props.image&&this.loadImage(this.props.image),this.paint(n);const l=y6()?{passive:!1}:!1;document.addEventListener("mousemove",this.handleMouseMove,l),document.addEventListener("mouseup",this.handleMouseUp,l),I0&&(document.addEventListener("touchmove",this.handleMouseMove,l),document.addEventListener("touchend",this.handleMouseUp,l))}componentDidUpdate(n,l){var r,o;this.props.image&&(this.props.image!==n.image||this.props.width!==n.width||this.props.height!==n.height||this.props.backgroundColor!==n.backgroundColor)?this.loadImage(this.props.image):!this.props.image&&l.image!==gf&&this.clearImage();const u=this.getContext();u.clearRect(0,0,this.getCanvas().width,this.getCanvas().height),this.paint(u),this.paintImage(u,this.state.image,this.props.border),(n.image!==this.props.image||n.width!==this.props.width||n.height!==this.props.height||n.position!==this.props.position||n.scale!==this.props.scale||n.rotate!==this.props.rotate||l.my!==this.state.my||l.mx!==this.state.mx||l.image.x!==this.state.image.x||l.image.y!==this.state.image.y)&&((o=(r=this.props).onImageChange)==null||o.call(r))}getCanvas(){if(!this.canvas.current)throw new Error("No canvas found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return this.canvas.current}getContext(){const n=this.getCanvas().getContext("2d");if(!n)throw new Error("No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return n}componentWillUnmount(){document.removeEventListener("mousemove",this.handleMouseMove,!1),document.removeEventListener("mouseup",this.handleMouseUp,!1),I0&&(document.removeEventListener("touchmove",this.handleMouseMove,!1),document.removeEventListener("touchend",this.handleMouseUp,!1))}isVertical(){return!this.props.disableCanvasRotation&&this.props.rotate%180!==0}getBorders(n=this.props.border){return Array.isArray(n)?n:[n,n]}getDimensions(){const{width:n,height:l,rotate:r,border:o}=this.props,u={width:0,height:0},[f,h]=this.getBorders(o);return this.isVertical()?(u.width=l,u.height=n):(u.width=n,u.height=l),u.width+=f*2,u.height+=h*2,{canvas:u,rotate:r,width:n,height:l,border:o}}getImage(){const n=this.getCroppingRect(),l=this.state.image;if(!l.resource)throw new Error("No image resource available, please report this to: https://github.com/mosch/react-avatar-editor/issues");n.x*=l.resource.width,n.y*=l.resource.height,n.width*=l.resource.width,n.height*=l.resource.height;const r=document.createElement("canvas");this.isVertical()?(r.width=n.height,r.height=n.width):(r.width=n.width,r.height=n.height);const o=r.getContext("2d");if(!o)throw new Error("No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return o.translate(r.width/2,r.height/2),o.rotate(this.props.rotate*Math.PI/180),o.translate(-(r.width/2),-(r.height/2)),this.isVertical()&&o.translate((r.width-r.height)/2,(r.height-r.width)/2),this.props.backgroundColor&&(o.fillStyle=this.props.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(l.resource,-n.x,-n.y),r}getImageScaledToCanvas(){const{width:n,height:l}=this.getDimensions(),r=document.createElement("canvas");return this.isVertical()?(r.width=l,r.height=n):(r.width=n,r.height=l),this.paintImage(r.getContext("2d"),this.state.image,0,1),r}getXScale(){if(!this.state.image.width||!this.state.image.height)throw new Error("Image dimension is unknown.");const n=this.props.width/this.props.height,l=this.state.image.width/this.state.image.height;return Math.min(1,n/l)}getYScale(){if(!this.state.image.width||!this.state.image.height)throw new Error("Image dimension is unknown.");const n=this.props.height/this.props.width,l=this.state.image.height/this.state.image.width;return Math.min(1,n/l)}getCroppingRect(){const n=this.props.position||{x:this.state.image.x,y:this.state.image.y},l=1/this.props.scale*this.getXScale(),r=1/this.props.scale*this.getYScale(),o={x:n.x-l/2,y:n.y-r/2,width:l,height:r};let u=0,f=1-o.width,h=0,g=1-o.height;return(this.props.disableBoundaryChecks||l>1||r>1)&&(u=-o.width,f=1,h=-o.height,g=1),mf(ui({},o),{x:Math.max(u,Math.min(o.x,f)),y:Math.max(h,Math.min(o.y,g))})}loadImage(n){return g6(this,null,function*(){var l,r,o,u;if(_6&&n instanceof File)try{const f=yield b6(n);this.handleImageReady(f)}catch{(r=(l=this.props).onLoadFailure)==null||r.call(l)}else if(typeof n=="string")try{const f=yield G1(n,this.props.crossOrigin);this.handleImageReady(f)}catch{(u=(o=this.props).onLoadFailure)==null||u.call(o)}})}getInitialSize(n,l){let r,o;const u=this.getDimensions(),f=u.height/u.width,h=l/n;return f>h?(r=u.height,o=Math.round(n*(r/l))):(o=u.width,r=Math.round(l*(o/n))),{height:r,width:o}}paintImage(n,l,r,o=this.pixelRatio){if(!l.resource)return;const u=this.calculatePosition(l,r);n.save(),n.translate(n.canvas.width/2,n.canvas.height/2),n.rotate(this.props.rotate*Math.PI/180),n.translate(-(n.canvas.width/2),-(n.canvas.height/2)),this.isVertical()&&n.translate((n.canvas.width-n.canvas.height)/2,(n.canvas.height-n.canvas.width)/2),n.scale(o,o),n.globalCompositeOperation="destination-over",n.drawImage(l.resource,u.x,u.y,u.width,u.height),this.props.backgroundColor&&(n.fillStyle=this.props.backgroundColor,n.fillRect(0,0,n.canvas.width,n.canvas.height)),n.restore()}calculatePosition(n=this.state.image,l){const[r,o]=this.getBorders(l);if(!n.width||!n.height)throw new Error("Image dimension is unknown.");const u=this.getCroppingRect(),f=n.width*this.props.scale,h=n.height*this.props.scale;let g=-u.x*f,p=-u.y*h;return this.isVertical()?(g+=o,p+=r):(g+=r,p+=o),{x:g,y:p,height:h,width:f}}paint(n){n.save(),n.scale(this.pixelRatio,this.pixelRatio),n.translate(0,0),n.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";let l=this.props.borderRadius;const r=this.getDimensions(),[o,u]=this.getBorders(r.border),f=r.canvas.height,h=r.canvas.width;l=Math.max(l,0),l=Math.min(l,h/2-o,f/2-u),n.beginPath(),P0(n,o,u,h-o*2,f-u*2,l),n.rect(h,0,-h,f),n.fill("evenodd"),this.props.borderColor&&(n.strokeStyle="rgba("+this.props.borderColor.slice(0,4).join(",")+")",n.lineWidth=1,n.beginPath(),P0(n,o+.5,u+.5,h-o*2-1,f-u*2-1,l),n.stroke()),this.props.showGrid&&x6(n,o,u,h-o*2,f-u*2,this.props.gridColor),n.restore()}render(){const n=this.props,{scale:l,rotate:r,image:o,border:u,borderRadius:f,width:h,height:g,position:p,color:b,backgroundColor:_,style:w,crossOrigin:y,onLoadFailure:S,onLoadSuccess:A,onImageReady:M,onImageChange:C,onMouseUp:D,onMouseMove:U,onPositionChange:j,disableBoundaryChecks:$,disableHiDPIScaling:W,disableCanvasRotation:X,showGrid:oe,gridColor:L,borderColor:q}=n,J=m6(n,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation","showGrid","gridColor","borderColor"]),ne=this.getDimensions(),Q={width:ne.canvas.width,height:ne.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},le={width:ne.canvas.width*this.pixelRatio,height:ne.canvas.height*this.pixelRatio,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,style:ui(ui({},Q),w)};return R.createElement("canvas",mf(ui(ui({},le),J),{ref:this.canvas}))}};Y1.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],showGrid:!1,gridColor:"#666",disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0};var w6=Y1,S6=vt`
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
`,Qa=class extends st{constructor(){super(...arguments),this.hasSlotController=new tl(this,"footer"),this.localize=new Ba(this),this.modal=new O1(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ys(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),_s(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const l=Ra(this,"dialog.denyClose",{dir:this.localize.dir()});Da(this.panel,l.keyframes,l.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ys(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([sn(this.dialog),sn(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const n=Ra(this,"dialog.show",{dir:this.localize.dir()}),l=Ra(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Da(this.panel,n.keyframes,n.options),Da(this.overlay,l.keyframes,l.options)]),this.emit("sl-after-show")}else{k1(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([sn(this.dialog),sn(this.overlay)]);const t=Ra(this,"dialog.hide",{dir:this.localize.dir()}),n=Ra(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Da(this.overlay,n.keyframes,n.options).then(()=>{this.overlay.hidden=!0}),Da(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,_s(this);const l=this.originalTrigger;typeof l?.focus=="function"&&setTimeout(()=>l.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,er(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"sl-after-hide")}render(){return we`
      <div
        part="base"
        class=${dt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":we`
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
    `}};Qa.styles=[Ot,S6];Qa.dependencies={"sl-icon-button":xt};T([Ze(".dialog")],Qa.prototype,"dialog",2);T([Ze(".dialog__panel")],Qa.prototype,"panel",2);T([Ze(".dialog__overlay")],Qa.prototype,"overlay",2);T([H({type:Boolean,reflect:!0})],Qa.prototype,"open",2);T([H({reflect:!0})],Qa.prototype,"label",2);T([H({attribute:"no-header",type:Boolean,reflect:!0})],Qa.prototype,"noHeader",2);T([Ge("open",{waitUntilFirstUpdate:!0})],Qa.prototype,"handleOpenChange",1);kt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});kt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});kt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});kt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});kt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var E6="sl-dialog";Qa.define("sl-dialog");var C6=ta({tagName:E6,elementClass:Qa,react:Ft,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),$s=C6,T6=vt`
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
`,Dh=(t="value")=>(n,l)=>{const r=n.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(u,f,h){var g;const p=r.getPropertyOptions(t),b=typeof p.attribute=="string"?p.attribute:t;if(u===b){const _=p.converter||Zl,y=(typeof _=="function"?_:(g=_?.fromAttribute)!=null?g:Zl.fromAttribute)(h,p.type);this[t]!==y&&(this[l]=y)}o.call(this,u,f,h)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zh=xh(class extends wh{constructor(t){if(super(t),t.type!==hi.PROPERTY&&t.type!==hi.ATTRIBUTE&&t.type!==hi.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ES(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[n]){if(n===La||n===lt)return n;const l=t.element,r=t.name;if(t.type===hi.PROPERTY){if(n===l[r])return La}else if(t.type===hi.BOOLEAN_ATTRIBUTE){if(!!n===l.hasAttribute(r))return La}else if(t.type===hi.ATTRIBUTE&&l.getAttribute(r)===n+"")return La;return TS(t),n}});var Ke=class extends st{constructor(){super(...arguments),this.formControlController=new Cs(this),this.hasSlotController=new tl(this,"help-text","label"),this.localize=new Ba(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const n=this.input.offsetWidth,l=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",u=n*t;if(o){const f=`${n-u}px + ${t} * ${r}`;this.output.style.translate=`calc((${f} - ${l/2}px - ${r} / 2))`}else{const f=`${u}px - ${t} * ${r}`;this.output.style.translate=`calc(${f} - ${l/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!n;return we`
      <div
        part="form-control"
        class=${dt({"form-control":!0,"form-control--medium":!0,"form-control--has-label":l,"form-control--has-help-text":r})}
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
            class=${dt({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              .value=${zh(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?we`
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
    `}};Ke.styles=[Ot,Oc,T6];T([Ze(".range__control")],Ke.prototype,"input",2);T([Ze(".range__tooltip")],Ke.prototype,"output",2);T([ft()],Ke.prototype,"hasFocus",2);T([ft()],Ke.prototype,"hasTooltip",2);T([H()],Ke.prototype,"title",2);T([H()],Ke.prototype,"name",2);T([H({type:Number})],Ke.prototype,"value",2);T([H()],Ke.prototype,"label",2);T([H({attribute:"help-text"})],Ke.prototype,"helpText",2);T([H({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);T([H({type:Number})],Ke.prototype,"min",2);T([H({type:Number})],Ke.prototype,"max",2);T([H({type:Number})],Ke.prototype,"step",2);T([H()],Ke.prototype,"tooltip",2);T([H({attribute:!1})],Ke.prototype,"tooltipFormatter",2);T([H({reflect:!0})],Ke.prototype,"form",2);T([Dh()],Ke.prototype,"defaultValue",2);T([Zb({passive:!0})],Ke.prototype,"handleThumbDragStart",1);T([Ge("value",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleValueChange",1);T([Ge("disabled",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleDisabledChange",1);T([Ge("hasTooltip",{waitUntilFirstUpdate:!0})],Ke.prototype,"syncRange",1);var A6="sl-range";Ke.define("sl-range");var M6=ta({tagName:A6,elementClass:Ke,react:Ft,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"}),N6=M6;function $6({image:t,open:n,onSave:l,onCancel:r}){const o=ze(),u=k.useRef(null),[f,h]=k.useState(1),g=()=>{u.current&&u.current.getImageScaledToCanvas().toBlob(b=>{b&&l(b)})};return m.jsxs($s,{label:o.formatMessage({id:"avatar.editor.title",defaultMessage:"Edit Profile Picture"}),open:n,onSlRequestClose:p=>{(p.detail.source==="overlay"||p.detail.source==="close-button")&&r()},children:[m.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[m.jsx(w6,{ref:u,image:t,width:250,height:250,border:25,borderRadius:125,color:[0,0,0,.6],scale:f,rotate:0}),m.jsx(N6,{min:1,max:3,step:.01,value:f,onSlInput:p=>{const b=p.target;h(b.value)},label:o.formatMessage({id:"avatar.editor.zoom",defaultMessage:"Zoom"}),style:{width:"100%",maxWidth:"300px"}})]}),m.jsxs("div",{slot:"footer",children:[m.jsx(ke,{onClick:r,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(ke,{variant:"primary",onClick:g,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})})]})]})}var O6="sl-icon";Gt.define("sl-icon");var k6=ta({tagName:O6,elementClass:Gt,react:Ft,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),rt=k6;const R6="_pickerContainer_1qpfx_1",D6="_avatar_1qpfx_6",z6="_cameraButton_1qpfx_12",vf={pickerContainer:R6,avatar:D6,cameraButton:z6};function L6({currentImage:t,name:n,onSave:l,loading:r=!1,className:o,style:u}){const[f,h]=k.useState(!1),[g,p]=k.useState(null),b=async()=>{const y=await H4();y&&(p(y),h(!0))},_=y=>{h(!1),l(y),p(null)},w=()=>{h(!1),p(null)};return m.jsxs("div",{className:`${vf.pickerContainer} ${o||""}`,style:u,children:[m.jsx(gt,{image:t,name:n,shape:"circle",className:vf.avatar}),m.jsx(ke,{circle:!0,size:"small",onClick:b,loading:r,className:vf.cameraButton,children:m.jsx(rt,{name:"camera"})}),g&&m.jsx($6,{image:g,open:f,onSave:_,onCancel:w})]})}const j6="_drawer_16mna_2",B6="_container_16mna_13",H6="_selectSection_16mna_18",U6="_listSection_16mna_22",I6="_listHeader_16mna_26",P6="_memberItem_16mna_35",V6="_memberSelect_16mna_51",F6="_optionContent_16mna_57",q6="_optionAvatar_16mna_63",G6="_memberName_16mna_67",Y6="_emptyState_16mna_72",X6="_footerActions_16mna_78",ka={drawer:j6,container:B6,selectSection:H6,listSection:U6,listHeader:I6,memberItem:P6,memberSelect:V6,optionContent:F6,optionAvatar:q6,memberName:G6,emptyState:Y6,footerActions:X6};function W6({roster:t,slot:n,allMembers:l,onClose:r,onSave:o}){const u=ze(),[f,h]=k.useState(n.assigned_member_ids||[]),g=l.filter(C=>f.includes(C.id)),p=l.filter(C=>!f.includes(C.id)&&C.is_rosterable),b=C=>{h(f.filter(D=>D!==C))},_=C=>{h([...f,C])},w=C=>{const D=C.target.value;D&&(_(D),C.target.value="")},y=()=>{o(n.id,f)},S=C=>{C.stopPropagation()},A=C=>{C.stopPropagation(),r()};let M="Edit Roster Slot";if(t&&n.slot_index!==null&&n.slot_index!==void 0){const C=t.slot_definitions[n.slot_index];C&&(M=u.formatMessage({id:"roster.edit.drawerLabel"},{slotName:C.name}))}return m.jsxs(mn,{label:M,placement:"bottom",open:!0,onSlAfterHide:A,onSlRequestClose:S,className:ka.drawer,children:[m.jsxs("div",{className:ka.container,children:[m.jsx("div",{className:ka.selectSection,children:m.jsx(ea,{placeholder:u.formatMessage({id:"roster.edit.selectMemberPlaceholder"}),value:"",onSlChange:w,onSlAfterHide:C=>{C.stopPropagation()},hoist:!0,placement:"top",className:ka.memberSelect,children:p.map(C=>m.jsx(je,{value:C.id,children:m.jsxs("div",{className:ka.optionContent,children:[m.jsx(gt,{name:C.name,image:C.avatar_url,className:ka.optionAvatar}),m.jsx("span",{children:C.name})]})},C.id))})}),m.jsxs("div",{className:ka.listSection,children:[m.jsx("h3",{className:ka.listHeader,children:m.jsx(ae,{id:"roster.edit.assignedHeader"})}),g.length>0?g.map(C=>m.jsxs("div",{className:ka.memberItem,children:[m.jsx(gt,{name:C.name,image:C.avatar_url}),m.jsx("span",{className:ka.memberName,children:C.name}),m.jsx($t,{name:"x-circle-fill",label:u.formatMessage({id:"common.remove"}),onClick:()=>b(C.id)})]},C.id)):m.jsx("p",{className:ka.emptyState,children:m.jsx(ae,{id:"roster.edit.emptyState"})})]})]}),m.jsxs("div",{slot:"footer",className:ka.footerActions,children:[m.jsx(ke,{onClick:A,children:m.jsx(ae,{id:"common.cancel"})}),m.jsx(ke,{variant:"primary",onClick:y,children:m.jsx(ae,{id:"common.save"})})]})]})}const Q6="_featureContainer_157fu_2",Z6="_weekGroup_157fu_11",K6="_rosterGrid_157fu_22",J6="_weekHeader_157fu_32",eE="_dateCell_157fu_47",tE="_headerSlot_157fu_68",aE="_rosterSlot_157fu_77",nE="_rosterSlotReadOnly_157fu_89",iE="_emptySlot_157fu_100",lE="_green_157fu_101",rE="_orange_157fu_102",sE="_red_157fu_103",oE="_urgent_157fu_128",cE="_headerNavigation_157fu_165",uE="_headerTitle_157fu_173",dE="_navButton_157fu_189",fE="_dialogFooter_157fu_193",it={featureContainer:Q6,weekGroup:Z6,rosterGrid:K6,weekHeader:J6,dateCell:eE,headerSlot:tE,rosterSlot:aE,rosterSlotReadOnly:nE,emptySlot:iE,green:lE,orange:rE,red:sE,urgent:oE,headerNavigation:cE,headerTitle:uE,navButton:dE,dialogFooter:fE};function hE({roster:t,rosterSlots:n,members:l,onSlotClick:r,startDate:o}){const u=ze(),h=`week-${k.useMemo(()=>{const y=fb(o),S=hb(o);return`${y}${String(S).padStart(2,"0")}`},[o])}`,g=k.useMemo(()=>Array.from({length:7}).map((y,S)=>Ch(o,S)),[o]),p=k.useMemo(()=>{const y=new Map,S=za(g[0],"yyyy-MM-dd"),A=za(g[6],"yyyy-MM-dd");return n.forEach(M=>{if(!M.date||M.slot_index===null)return;const C=za(Ah(M.date),"yyyy-MM-dd");C<S||C>A||(y.has(C)||y.set(C,new Map),y.get(C)?.set(M.slot_index,M))}),y},[n,g]),b=(y,S)=>{const A=r?it.rosterSlot:it.rosterSlotReadOnly,M=y?.assigned_member_ids?.length??0;return M===0?`${A} ${it.emptySlot}`:S.min_occupancy===0?`${A} ${it.green}`:M>=S.min_occupancy?`${A} ${it.green}`:M===S.min_occupancy-1?`${A} ${it.orange}`:M<=S.min_occupancy-2?`${A} ${it.red}`:A},_=y=>{y&&r&&r(y.id)},w=(y,S)=>{if(!y||!y.assigned_member_ids||y.assigned_member_ids.length===0){const M=Th(new Date,1),C=(b4(S)||y4(S))&&uc(S,M);return m.jsx("span",{className:`${it.emptySlot} ${C?it.urgent:""}`,children:m.jsx(ae,{id:"roster.emptySlot"})})}const A=y.assigned_member_ids.map(M=>l.find(C=>C.id===M)?.name).filter(M=>!!M);return u.formatList(A,{type:"unit"})};return t?m.jsxs("div",{id:h,className:it.weekGroup,style:{"--roster-slot-count":t.slot_definitions.length},children:[m.jsxs("div",{className:`${it.rosterGrid} ${it.weekHeader}`,children:[m.jsx("div",{className:it.dateCell}),t.slot_definitions.map(y=>m.jsx("div",{className:it.headerSlot,children:y.name},y.name))]}),g.map(y=>{const S=za(y,"yyyy-MM-dd"),A=p.get(S);return m.jsxs("div",{className:it.rosterGrid,children:[m.jsxs("div",{className:it.dateCell,children:[m.jsx("strong",{children:u.formatDate(y,{weekday:"short"})}),m.jsx("span",{children:u.formatDate(y,{month:"short",day:"numeric"})})]}),t.slot_definitions.map((M,C)=>{const D=A?.get(C);return m.jsx("div",{className:b(D,M),onClick:r?()=>_(D):void 0,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyDown:U=>r&&U.key==="Enter"&&_(D),children:w(D,y)},C)})]},S)})]}):null}const V0=(t,n)=>{const l=typeof t=="string"?Ah(t):t;return`${za(l,"yyyy-MM-dd")}-${n}`};function pE({rosterId:t,currentWeekStart:n,onWeekChange:l}){const r=ze(),o=pb(),{data:u}=hn({enabled:!!o}),{data:f,isLoading:h}=Q_({enabled:!!o}),{mutate:g}=Z_(),{members:p,rosterSlots:b,roster:_,capabilities:w}=f||{},[y,S]=k.useState(null),[A,M]=k.useState(null),C=()=>{l(z4(n))},D=()=>{l(Th(n,1))},U=k.useMemo(()=>{if(!_?.slot_definitions)return[];const L=new Map;(b||[]).forEach(J=>{J.date&&typeof J.slot_index=="number"&&L.set(V0(J.date,J.slot_index),J)});const q=[];for(let J=0;J<7;J++){const ne=Ch(n,J);_.slot_definitions.forEach((Q,le)=>{const te=V0(ne,le),I=L.get(te);I?q.push(I):q.push({id:te,roster_id:_.id,date:ne.toISOString(),slot_index:le,assigned_member_ids:[],created_at:new Date().toISOString()})})}return q},[b,_,n]),j=(L,q)=>{const J=U.find(ne=>ne.id===L);J&&g({slot:J,newMemberIds:q}),S(null)},$=L=>{const q=U.find(Q=>Q.id===L);if(!q||!q.date)return;const J=new Date,ne=Af(J,{weekStartsOn:1});if(!uc(n,ne)){if(w?.can_admin_roster){S(L);return}if(w?.can_edit_roster){const Q=Ah(q.date),le=Cf(J);if(uc(Q,le)||M1(Q,le))return;M(q)}}},W=()=>{if(!A||!u)return;const L=A.assigned_member_ids||[],q=u.id,J=L.includes(q);let ne;J?ne=L.filter(Q=>Q!==q):ne=[...L,q],g({slot:A,newMemberIds:ne}),M(null)},X=k.useMemo(()=>{const q=Af(new Date,{weekStartsOn:1});return uc(n,q)},[n]),oe=U.find(L=>L.id===y);return h?m.jsx("div",{children:"Loading..."}):m.jsxs("div",{className:it.featureContainer,children:[m.jsxs("div",{className:it.headerNavigation,children:[m.jsx($t,{name:"chevron-left",label:r.formatMessage({id:"roster.previousWeek"}),onClick:C,className:it.navButton}),m.jsxs("div",{className:it.headerTitle,children:[m.jsx("h2",{children:_?.name}),m.jsx("p",{children:m.jsx(ae,{id:"roster.weekOf",values:{date:r.formatDate(n,{month:"long",day:"numeric"})}})})]}),m.jsx($t,{name:"chevron-right",label:r.formatMessage({id:"roster.nextWeek"}),onClick:D,className:it.navButton})]}),m.jsx(hE,{roster:_,rosterSlots:U,members:p||[],onSlotClick:!X&&(w?.can_edit_roster||w?.can_admin_roster)?$:void 0,startDate:n}),oe&&m.jsx(W6,{slot:oe,roster:_,allMembers:p||[],onClose:()=>S(null),onSave:j}),m.jsxs($s,{label:r.formatMessage({id:"roster.selfAssignment.title"}),open:!!A,onSlAfterHide:L=>{L.stopPropagation(),M(null)},children:[A&&u&&m.jsx("p",{children:A.assigned_member_ids?.includes(u.id)?r.formatMessage({id:"roster.confirmRemoveSelf"}):r.formatMessage({id:"roster.confirmAddSelf"})}),m.jsxs("div",{slot:"footer",className:it.dialogFooter,children:[m.jsx(ke,{slot:"footer",onClick:()=>M(null),children:m.jsx(ae,{id:"common.no"})}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:W,children:m.jsx(ae,{id:"common.yes"})})]})]})]})}const mE="_pageWrapper_1fy59_1",gE="_pageContent_1fy59_10",vE="_drawer_1fy59_20",bE="_profileAction_1fy59_32",yE="_profileAvatar_1fy59_38",ds={pageWrapper:mE,pageContent:gE,drawer:vE,profileAction:bE,profileAvatar:yE};function _E(){const t=ze(),n=qt(),{data:l}=hn({enabled:!0}),{roster_id:r}=Es(),o=()=>{n(-1)},[u,f]=k.useState(()=>Af(new Date,{weekStartsOn:1})),h=()=>{const p=fb(u),b=hb(u),w=`week-${`${p}${String(b).padStart(2,"0")}`}`,y=t.formatMessage({id:"share.rosterTitle"}),S=t.formatMessage({id:"share.rosterText"});j4(w,y,S)},g=_t.getPlatform()==="ios"?"box-arrow-up":"share";return m.jsx(mn,{label:t.formatMessage({id:"shell.tab.roster"}),placement:"end",open:!0,onSlAfterHide:o,className:ds.drawer,children:m.jsxs("div",{className:ds.pageWrapper,children:[m.jsx(pn,{showBackButton:!0,headerActions:m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--sl-spacing-small)"},children:[m.jsx($t,{name:g,label:t.formatMessage({id:"roster.shareWeekLabel"}),onClick:h}),m.jsx("div",{onClick:()=>n("/profile/me"),className:ds.profileAction,role:"button",tabIndex:0,children:m.jsx(gt,{image:l?.social_profiles?.avatar_url,name:l?.firstname??"",className:ds.profileAvatar})})]})}),m.jsx("div",{className:ds.pageContent,children:m.jsx(pE,{rosterId:r,currentWeekStart:u,onWeekChange:f})})]})})}const xE="_pageWrapper_1ndxt_1",wE="_profileAction_1ndxt_31",SE="_profileAvatar_1ndxt_37",EE="_headerActions_1ndxt_41",ac={pageWrapper:xE,profileAction:wE,profileAvatar:SE,headerActions:EE};var CE="sl-spinner";$c.define("sl-spinner");var TE=ta({tagName:CE,elementClass:$c,react:Ft,events:{},displayName:"SlSpinner"}),X1=TE;const AE="_profilePage_1a2jo_1",ME="_cover_1a2jo_7",NE="_header_1a2jo_19",$E="_avatar_1a2jo_35",OE="_stableInfo_1a2jo_43",kE="_name_1a2jo_53",RE="_followerCount_1a2jo_59",DE="_followButton_1a2jo_65",zE="_metaInfo_1a2jo_70",LE="_actionButtons_1a2jo_79",jE="_actionIcon_1a2jo_86",BE="_actionIconPlus_1a2jo_90",Kt={profilePage:AE,cover:ME,header:NE,avatar:$E,stableInfo:OE,name:kE,followerCount:RE,followButton:DE,metaInfo:zE,actionButtons:LE,actionIcon:jE,actionIconPlus:BE};var HE=vt`
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
`,be=class extends st{constructor(){super(...arguments),this.formControlController=new Cs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new tl(this,"help-text","label"),this.localize=new Ba(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const n=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!n&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,n,l="none"){this.input.setSelectionRange(t,n,l)}setRangeText(t,n,l,r="preserve"){const o=n??this.input.selectionStart,u=l??this.input.selectionEnd;this.input.setRangeText(t,o,u,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,r=this.helpText?!0:!!n,u=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return we`
      <div
        part="form-control"
        class=${dt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":r})}
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
            class=${dt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${zh(this.value)}
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

            ${u?we`
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
            ${this.passwordToggle&&!this.disabled?we`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?we`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:we`
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
    `}};be.styles=[Ot,Oc,HE];be.dependencies={"sl-icon":Gt};T([Ze(".input__control")],be.prototype,"input",2);T([ft()],be.prototype,"hasFocus",2);T([H()],be.prototype,"title",2);T([H({reflect:!0})],be.prototype,"type",2);T([H()],be.prototype,"name",2);T([H()],be.prototype,"value",2);T([Dh()],be.prototype,"defaultValue",2);T([H({reflect:!0})],be.prototype,"size",2);T([H({type:Boolean,reflect:!0})],be.prototype,"filled",2);T([H({type:Boolean,reflect:!0})],be.prototype,"pill",2);T([H()],be.prototype,"label",2);T([H({attribute:"help-text"})],be.prototype,"helpText",2);T([H({type:Boolean})],be.prototype,"clearable",2);T([H({type:Boolean,reflect:!0})],be.prototype,"disabled",2);T([H()],be.prototype,"placeholder",2);T([H({type:Boolean,reflect:!0})],be.prototype,"readonly",2);T([H({attribute:"password-toggle",type:Boolean})],be.prototype,"passwordToggle",2);T([H({attribute:"password-visible",type:Boolean})],be.prototype,"passwordVisible",2);T([H({attribute:"no-spin-buttons",type:Boolean})],be.prototype,"noSpinButtons",2);T([H({reflect:!0})],be.prototype,"form",2);T([H({type:Boolean,reflect:!0})],be.prototype,"required",2);T([H()],be.prototype,"pattern",2);T([H({type:Number})],be.prototype,"minlength",2);T([H({type:Number})],be.prototype,"maxlength",2);T([H()],be.prototype,"min",2);T([H()],be.prototype,"max",2);T([H()],be.prototype,"step",2);T([H()],be.prototype,"autocapitalize",2);T([H()],be.prototype,"autocorrect",2);T([H()],be.prototype,"autocomplete",2);T([H({type:Boolean})],be.prototype,"autofocus",2);T([H()],be.prototype,"enterkeyhint",2);T([H({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],be.prototype,"spellcheck",2);T([H()],be.prototype,"inputmode",2);T([Ge("disabled",{waitUntilFirstUpdate:!0})],be.prototype,"handleDisabledChange",1);T([Ge("step",{waitUntilFirstUpdate:!0})],be.prototype,"handleStepChange",1);T([Ge("value",{waitUntilFirstUpdate:!0})],be.prototype,"handleValueChange",1);var UE="sl-input";be.define("sl-input");var IE=ta({tagName:UE,elementClass:be,react:Ft,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),Ee=IE,PE=vt`
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
`,Os=class extends st{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Os.styles=[Ot,PE];T([H({type:Boolean,reflect:!0})],Os.prototype,"vertical",2);T([Ge("vertical")],Os.prototype,"handleVerticalChange",1);var VE="sl-divider";Os.define("sl-divider");var FE=ta({tagName:VE,elementClass:Os,react:Ft,events:{},displayName:"SlDivider"}),jc=FE;const qE="_editUserDrawer_dn68d_1",GE="_formContent_dn68d_33",YE="_countrySelect_dn68d_45",bf={editUserDrawer:qE,formContent:GE,countrySelect:YE};function XE({isOpen:t,onClose:n,user:l,socialProfile:r}){const o=ze(),u=K_(),f=Sc(),[h,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(""),[A,M]=k.useState(null),[C,D]=k.useState(""),[U,j]=k.useState(""),[$,W]=k.useState(""),[X,oe]=k.useState(""),[L,q]=k.useState({}),J=[{value:"M",labelId:"gender.male"},{value:"F",labelId:"gender.female"},{value:"X",labelId:"gender.other"}];k.useEffect(()=>{t&&l&&(g(r?.display_name||""),b(l.firstname||""),w(l.lastname||""),S(l.email||""),M(l.date_of_birth?new Date(l.date_of_birth):null),D(l.city||""),j(l.country||""),W(l.gender||""),oe(l.locale||"en"),q({}))},[t,l,r]);const ne=()=>{n()},Q=()=>{const I={},Z=o.formatMessage({id:"validation.required"});if(r&&!h.trim()&&(I.displayName=Z),p.trim()||(I.firstname=Z),_.trim()||(I.lastname=Z),y&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)&&(I.email=o.formatMessage({id:"validation.emailInvalid"})),A){const ee=A0(new Date);A>ee&&(I.dateOfBirth=o.formatMessage({id:"validation.ageMinimum"}))}return q(I),Object.keys(I).length===0},le=async()=>{if(Q())try{r&&h!==r.display_name&&await f.mutateAsync({socialProfileId:r.id,displayName:h}),await u.mutateAsync({userId:l.id,updates:{firstname:p,lastname:_,email:y||void 0,date_of_birth:A?za(A,"yyyy-MM-dd"):void 0,gender:$||void 0,city:C||void 0,country:U||void 0,locale:X}}),n()}catch(I){console.error("Failed to update user:",I)}},te=I=>{const Z=I.locale.substring(0,2),ee=Ec.slice().sort((ce,_e)=>{const ot=ce.name[Z]??ce.name.en,Te=_e.name[Z]??_e.name.en;return ot.localeCompare(Te,Z)});if(Z==="nl"){const ce=ee.find(Te=>Te.code==="NL"),_e=ee.find(Te=>Te.code==="BE"),ot=ee.filter(Te=>Te.code!=="NL"&&Te.code!=="BE");return m.jsxs(R.Fragment,{children:[[ce,_e].map(Te=>m.jsx(je,{value:Te.code,children:Te.name[Z]??Te.name.en},Te.code)),m.jsx(jc,{}),ot.map(Te=>m.jsx(je,{value:Te.code,children:Te.name[Z]??Te.name.en},Te.code))]})}return ee.map(ce=>m.jsx(je,{value:ce.code,children:ce.name[Z]??ce.name.en},ce.code))};return m.jsxs(mn,{label:o.formatMessage({id:"user.edit.title"}),placement:"end",open:t,onSlAfterHide:ne,className:bf.editUserDrawer,children:[m.jsxs("div",{className:bf.formContent,children:[r&&m.jsx(Ee,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:h,onSlInput:I=>g(I.target.value),helpText:L.displayName,required:!0}),m.jsxs(ea,{"data-testid":"language-select",label:o.formatMessage({id:"users.languageLabel"}),value:X,onSlChange:I=>oe(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},children:[m.jsx(je,{value:"en",children:o.formatMessage({id:"common.language.english"})}),m.jsx(je,{value:"nl",children:o.formatMessage({id:"common.language.dutch"})})]}),m.jsx(Ee,{"data-testid":"firstname-input",label:o.formatMessage({id:"users.firstNameLabel"}),value:p,onSlInput:I=>b(I.target.value),required:!0,helpText:L.firstname}),m.jsx(Ee,{"data-testid":"lastname-input",label:o.formatMessage({id:"users.lastNameLabel"}),value:_,onSlInput:I=>w(I.target.value),required:!0,helpText:L.lastname}),m.jsx(Ee,{"data-testid":"email-input",label:o.formatMessage({id:"auth.emailLabel"}),value:y,onSlInput:I=>S(I.target.value),helpText:L.email}),m.jsx(Ee,{"data-testid":"dob-input",label:o.formatMessage({id:"users.dateOfBirthLabel"}),type:"date",max:za(A0(new Date),"yyyy-MM-dd"),value:A?za(A,"yyyy-MM-dd"):"",onSlChange:I=>M(I.target.valueAsDate),helpText:L.dateOfBirth}),m.jsx(ea,{"data-testid":"gender-select",label:o.formatMessage({id:"users.genderLabel"}),value:$,onSlChange:I=>W(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},children:J.map(I=>m.jsx(je,{value:I.value,children:o.formatMessage({id:I.labelId})},I.value))}),m.jsx(Ee,{"data-testid":"city-input",label:o.formatMessage({id:"users.cityLabel"}),value:C,onSlInput:I=>D(I.target.value)}),m.jsx(ea,{"data-testid":"country-select",className:bf.countrySelect,label:o.formatMessage({id:"users.countryLabel"}),value:U,onSlChange:I=>j(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},hoist:!0,children:te(o)})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:le,loading:u.isPending||f.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:ne,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const WE="_editHorseDrawer_h0uut_1",QE="_formContent_h0uut_33",ZE="_inputWithIcon_h0uut_46",KE="_countrySelect_h0uut_58",JE="_readOnlyInput_h0uut_62",eC="_dobRow_h0uut_68",tC="_dobInput_h0uut_75",aC="_ageDisplay_h0uut_79",zn={editHorseDrawer:WE,formContent:QE,inputWithIcon:ZE,countrySelect:KE,readOnlyInput:JE,dobRow:eC,dobInput:tC,ageDisplay:aC};function Lh(t,n="en"){const l=typeof t=="string"?new Date(t):t,r=new Date;let o=r.getFullYear()-l.getFullYear(),u=r.getMonth()-l.getMonth();r.getDate()<l.getDate()&&u--,u<0&&(o--,u+=12);const h={en:{year:"year",years:"years",month:"month",months:"months"},nl:{year:"jaar",years:"jaar",month:"maand",months:"maanden"}}[n],g=o===1?h.year:h.years,p=u===1?h.month:h.months;return`${o} ${g} (${u} ${p})`}function W1({isOpen:t,onClose:n,horse:l,socialProfile:r}){const o=ze(),u=J_(),{data:f}=mb({socialId:l.social_profile_id,enabled:t&&!!l.social_profile_id}),h=f??r,g=Sc(),{data:p}=gb({profileId:h?.id,enabled:!!h?.id&&t}),b=p?.can_admin_social_profile??!1,[_,w]=k.useState(""),[y,S]=k.useState(""),[A,M]=k.useState(""),[C,D]=k.useState(""),[U,j]=k.useState(""),[$,W]=k.useState(null),[X,oe]=k.useState(""),[L,q]=k.useState(""),[J,ne]=k.useState(""),[Q,le]=k.useState(""),[te,I]=k.useState(""),[Z,ee]=k.useState(""),[ce,_e]=k.useState({});k.useEffect(()=>{t&&l&&(w(h?.display_name||""),S(l.name||""),M(l.official_name||""),D(l.chip_number||""),j(l.ueln||""),W(l.date_of_birth?new Date(l.date_of_birth):null),oe(l.gender||""),q(l.color||""),ne(l.breed_studbook||""),le(l.country_of_birth||""),I(l.markings||""),ee(l.chip_location||""),_e({}))},[t,l,h]);const ot=()=>{n()},Te=()=>{const re={};return h&&!_.trim()&&(re.displayName=o.formatMessage({id:"validation.required"})),y.trim()||(re.name=o.formatMessage({id:"validation.required"})),!C.trim()&&!U.trim()&&(re.chipOrUeln=o.formatMessage({id:"validation.chipOrUelnRequired"})),U.trim()&&U.trim().length!==15&&(re.ueln=o.formatMessage({id:"validation.uelnInvalid"})),_e(re),Object.keys(re).length===0},wt=async()=>{if(Te())try{h&&h.id&&_!==h.display_name&&await g.mutateAsync({socialProfileId:h.id,displayName:_}),await u.mutateAsync({horseId:l.id,updates:{name:y,official_name:A||void 0,chip_number:C||void 0,ueln:U||void 0,date_of_birth:$?za($,"yyyy-MM-dd"):void 0,gender:X||void 0,color:L||void 0,breed_studbook:J||void 0,country_of_birth:Q||void 0,markings:te||void 0,chip_location:Z||void 0}}),n()}catch(re){console.error("Failed to update horse:",re)}},K=async re=>{const{scanBarcode:Be}=await Mt(async()=>{const{scanBarcode:fe}=await import("./index-Dnn9eo0H.js");return{scanBarcode:fe}},__vite__mapDeps([6,1])),Ne=await Be();Ne&&(re==="chipNumber"?D(Ne):re==="ueln"&&j(Ne))},Le=async re=>{if(_t.isNativePlatform()){re.preventDefault();const{pickDate:Be}=await Mt(async()=>{const{pickDate:fe}=await import("./index-Dnn9eo0H.js");return{pickDate:fe}},__vite__mapDeps([6,1])),Ne=await Be({mode:"date",value:$?$.toISOString():void 0,max:new Date().toISOString()});Ne&&W(new Date(Ne))}},Dt=re=>{const Be=re.locale.substring(0,2),Ne=Ec.slice().sort((fe,Yt)=>{const vn=fe.name[Be]??fe.name.en,Fe=Yt.name[Be]??Yt.name.en;return vn.localeCompare(Fe,Be)});if(Be==="nl"){const fe=Ne.find(Fe=>Fe.code==="NL"),Yt=Ne.find(Fe=>Fe.code==="BE"),vn=Ne.filter(Fe=>Fe.code!=="NL"&&Fe.code!=="BE");return m.jsxs(R.Fragment,{children:[[fe,Yt].map(Fe=>m.jsx(je,{value:Fe.code,children:Fe.name[Be]??Fe.name.en},Fe.code)),m.jsx(jc,{}),vn.map(Fe=>m.jsx(je,{value:Fe.code,children:Fe.name[Be]??Fe.name.en},Fe.code))]})}return Ne.map(fe=>m.jsx(je,{value:fe.code,children:fe.name[Be]??fe.name.en},fe.code))};return m.jsxs(mn,{label:o.formatMessage({id:"horse.edit.title"}),placement:"end",open:t,onSlAfterHide:n,className:zn.editHorseDrawer,children:[m.jsxs("div",{className:zn.formContent,children:[h&&m.jsx(Ee,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:_,onSlInput:re=>w(re.target.value),helpText:ce.displayName,required:!0,readonly:!b,className:b?void 0:zn.readOnlyInput}),m.jsx(Ee,{"data-testid":"horse-official-name-input",label:o.formatMessage({id:"horses.officialNameLabel"}),value:A,required:!0,onSlInput:re=>{const Be=re.target.value;(!y||y===A)&&S(Be),M(Be)}}),m.jsx(Ee,{"data-testid":"horse-name-input",label:o.formatMessage({id:"horses.nameLabel"}),value:y,onSlInput:re=>S(re.target.value),required:!0,helpText:ce.name}),m.jsxs("div",{className:zn.inputWithIcon,children:[m.jsx(Ee,{"data-testid":"horse-chip-number-input",label:o.formatMessage({id:"horses.chipNumberLabel"}),value:C,onSlInput:re=>D(re.target.value),helpText:ce.chipOrUeln}),m.jsx($t,{"data-testid":"chip-scan-button",name:"qr-code",label:o.formatMessage({id:"horses.scanBarcode"}),onClick:()=>K("chipNumber")})]}),m.jsx(Ee,{label:o.formatMessage({id:"horses.chipLocationLabel"}),value:Z,onSlInput:re=>ee(re.target.value)}),m.jsxs("div",{className:zn.inputWithIcon,children:[m.jsx(Ee,{"data-testid":"horse-ueln-input",label:o.formatMessage({id:"horses.uelnLabel"}),value:U,onSlInput:re=>j(re.target.value),helpText:ce.ueln||ce.chipOrUeln}),m.jsx($t,{"data-testid":"ueln-scan-button",name:"qr-code",label:o.formatMessage({id:"horses.scanBarcode"}),onClick:()=>K("ueln")})]}),m.jsxs("div",{className:zn.dobRow,children:[m.jsx(Ee,{className:zn.dobInput,label:o.formatMessage({id:"horses.dateOfBirthLabel"}),type:_t.isNativePlatform()?"text":"date",max:new Date().toISOString().split("T")[0],value:$?_t.isNativePlatform()?o.formatDate($):za($,"yyyy-MM-dd"):"",readonly:_t.isNativePlatform(),onClick:Le,onSlChange:re=>W(re.target.valueAsDate),children:_t.isNativePlatform()&&m.jsx(rt,{name:"calendar",slot:"suffix"})}),$&&m.jsx("span",{className:zn.ageDisplay,children:Lh($,o.locale.startsWith("nl")?"nl":"en")})]}),m.jsxs(ea,{label:o.formatMessage({id:"horses.genderLabel"}),value:X,onSlChange:re=>oe(re.target.value),onSlAfterHide:re=>{re.stopPropagation()},children:[m.jsx(je,{value:"Stallion",children:o.formatMessage({id:"gender.stallion"})}),m.jsx(je,{value:"Mare",children:o.formatMessage({id:"gender.mare"})}),m.jsx(je,{value:"Gelding",children:o.formatMessage({id:"gender.gelding"})})]}),m.jsx(ea,{label:o.formatMessage({id:"horses.countryOfBirthLabel"}),className:zn.countrySelect,value:Q,onSlChange:re=>le(re.target.value),onSlAfterHide:re=>{re.stopPropagation()},hoist:!0,children:Dt(o)}),m.jsx(Ee,{label:o.formatMessage({id:"horses.colorLabel"}),value:L,onSlInput:re=>q(re.target.value)}),m.jsx(Ee,{label:o.formatMessage({id:"horses.breedStudbookLabel"}),value:J,onSlInput:re=>ne(re.target.value)}),m.jsx(Ee,{label:o.formatMessage({id:"horses.markingsLabel"}),value:te,onSlInput:re=>I(re.target.value)})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:wt,disabled:u.isPending||g.isPending,loading:u.isPending||g.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:ot,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const nC="_editOrganizationDrawer_2n73i_1",iC="_formContent_2n73i_33",lC="_countrySelect_2n73i_45",yf={editOrganizationDrawer:nC,formContent:iC,countrySelect:lC};function rC({isOpen:t,onClose:n,organization:l,socialProfile:r}){const o=ze(),u=ex(),f=Sc(),[h,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(""),[A,M]=k.useState(""),[C,D]=k.useState(""),[U,j]=k.useState({});k.useEffect(()=>{t&&l&&(g(r?.display_name||""),b(l.name||""),w(l.email||""),S(l.chamber_of_commerce_registration||""),M(l.city||""),D(l.country||""),j({}))},[t,l,r]);const $=()=>{n()},W=()=>{const L={},q=o.formatMessage({id:"validation.required"});return r&&!h.trim()&&(L.displayName=q),p.trim()||(L.name=q),_&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_)&&(L.email=o.formatMessage({id:"validation.emailInvalid"})),j(L),Object.keys(L).length===0},X=async()=>{if(W())try{r&&h!==r.display_name&&await f.mutateAsync({socialProfileId:r.id,displayName:h}),await u.mutateAsync({organizationId:l.id,updates:{name:p,email:_||void 0,chamber_of_commerce_registration:y||void 0,city:A||void 0,country:C||void 0}}),n()}catch(L){console.error("Failed to update organization:",L)}},oe=L=>{const q=L.locale.substring(0,2),J=Ec.slice().sort((ne,Q)=>{const le=ne.name[q]??ne.name.en,te=Q.name[q]??Q.name.en;return le.localeCompare(te,q)});if(q==="nl"){const ne=J.find(te=>te.code==="NL"),Q=J.find(te=>te.code==="BE"),le=J.filter(te=>te.code!=="NL"&&te.code!=="BE");return m.jsxs(R.Fragment,{children:[[ne,Q].map(te=>m.jsx(je,{value:te.code,children:te.name[q]??te.name.en},te.code)),m.jsx(jc,{}),le.map(te=>m.jsx(je,{value:te.code,children:te.name[q]??te.name.en},te.code))]})}return J.map(ne=>m.jsx(je,{value:ne.code,children:ne.name[q]??ne.name.en},ne.code))};return m.jsxs(mn,{label:o.formatMessage({id:"organization.edit.title"}),placement:"end",open:t,onSlAfterHide:$,className:yf.editOrganizationDrawer,children:[m.jsxs("div",{className:yf.formContent,children:[r&&m.jsx(Ee,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:h,onSlInput:L=>g(L.target.value),helpText:U.displayName,required:!0}),m.jsx(Ee,{"data-testid":"name-input",label:o.formatMessage({id:"organization.nameLabel"}),value:p,onSlInput:L=>b(L.target.value),required:!0,helpText:U.name}),m.jsx(Ee,{"data-testid":"email-input",label:o.formatMessage({id:"auth.emailLabel"}),value:_,onSlInput:L=>w(L.target.value),helpText:U.email}),m.jsx(Ee,{"data-testid":"coc-input",label:o.formatMessage({id:"organization.cocLabel"}),value:y,onSlInput:L=>S(L.target.value)}),m.jsx(Ee,{"data-testid":"city-input",label:o.formatMessage({id:"organization.cityLabel"}),value:A,onSlInput:L=>M(L.target.value)}),m.jsx(ea,{"data-testid":"country-select",className:yf.countrySelect,label:o.formatMessage({id:"users.countryLabel"}),value:C,onSlChange:L=>D(L.target.value),onSlAfterHide:L=>{L.stopPropagation()},hoist:!0,children:oe(o)})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:X,loading:u.isPending||f.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:$,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}function sC({socialProfileType:t,userMemberships:n,horseDetails:l,orgDetails:r}){const o=[];return t==="user"&&n?n.forEach(u=>o.push(m.jsx("p",{className:Kt.stableRole,children:m.jsx(ae,{id:`profile.stable.${u.role}`,values:{organizationName:u.organizations?.name,nickName:u.nickname}})},u.id))):t==="horse"&&l?.official_name?o.push(m.jsx("p",{children:l.official_name},"official-name")):t==="organization"&&r?.city&&o.push(m.jsx("p",{children:m.jsx(ae,{id:"profile.organization.location",values:{city:r.city}})},"org-location")),m.jsx("div",{className:Kt.stableInfo,children:o})}function oC({profileId:t}){const n=qt(),[l,r]=k.useState(!1),[o,u]=k.useState(!1),f=Sc(),h=tx(),g=ax(),{data:p,isLoading:b}=hn({enabled:!0}),_=t==="me"||t===p?.social_profile_id,w=_?p?.social_profile_id:t,{data:y,isLoading:S}=mb({socialId:w,enabled:!!w}),{data:A}=gb({profileId:y?.id,enabled:!!y?.id}),{data:M,isLoading:C}=nx({userId:y?.entity_id,enabled:y?.type==="user"}),{data:D,isLoading:U}=vb({horseId:y?.entity_id,enabled:y?.type==="horse"}),{data:j,isLoading:$}=bb({organizationId:y?.entity_id,enabled:y?.type==="organization"}),{data:W}=ix({userId:M?.id,enabled:y?.type==="user"&&!!M}),{data:X,isLoading:oe}=lx({followerId:p?.social_profile_id,targetId:y?.id,enabled:!!p?.social_profile_id&&!!y?.id&&!_}),{data:L}=rx({targetId:y?.id,enabled:!!y?.id}),q=A?.can_edit_profile??!1,J=A?.can_post_social??!1,ne=A?.can_admin_team??!1,Q=A?.can_admin_social_profile??!1,le=y?.type==="horse"||y?.type==="organization",te=y?.type==="horse"?D?.owner_id===p?.id:q,I=!_&&le&&!te,Z=()=>{r(!0)},ee=()=>{!p?.social_profile_id||!y?.id||(X?g.mutate({followerId:p.social_profile_id,targetId:y.id}):h.mutate({followerId:p.social_profile_id,targetId:y.id}))},ce=async Te=>{if(y){u(!0);try{const wt=`${y.id}/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`,{error:K}=await ra.storage.from("avatars").upload(wt,Te,{cacheControl:"3600",upsert:!1});if(K)throw K;const{data:{publicUrl:Le}}=ra.storage.from("avatars").getPublicUrl(wt);f.mutate({socialProfileId:y.id,avatarUrl:Le})}catch(wt){console.error("Avatar upload failed:",wt)}finally{u(!1)}}},_e=ze();if(b||S||C||U||$)return m.jsx(X1,{});if(!y)return m.jsx("div",{children:_e.formatMessage({id:"profile.notFound"})});const ot=y?.display_name||_e.formatMessage({id:"profile.NoDisplayName"});return m.jsxs("div",{className:Kt.profilePage,children:[m.jsx("div",{className:Kt.cover}),m.jsxs("div",{className:Kt.header,children:[Q?m.jsx(L6,{currentImage:y.avatar_url,name:ot,onSave:ce,loading:o,className:Kt.avatar}):m.jsx(gt,{image:y.avatar_url,name:ot,className:Kt.avatar}),m.jsxs("h2",{className:Kt.name,"data-testid":"profile-name",children:[ot,I&&p&&m.jsx(ke,{className:Kt.followButton,variant:X?"default":"primary",size:"small",onClick:ee,loading:h.isPending||g.isPending||oe,"data-testid":"follow-button",children:m.jsx(ae,{id:X?"profile.unfollow":"profile.follow"})})]}),m.jsx(sC,{socialProfileType:y.type,userMemberships:W,horseDetails:D,orgDetails:j}),m.jsxs("div",{className:Kt.metaInfo,children:[le&&m.jsx("span",{className:Kt.followerCount,children:m.jsx(ae,{id:"profile.followers",values:{count:L||0}})}),m.jsxs("div",{className:Kt.actionButtons,children:[q&&m.jsxs(ke,{variant:"primary",size:"small",onClick:Z,"data-testid":"edit-info-button",children:[m.jsx(rt,{slot:"prefix",name:"pencil",className:Kt.actionIcon}),m.jsx(ae,{id:"profile.edit.info"})]}),J&&m.jsxs(ke,{variant:"primary",size:"small","data-testid":"post-update-button",children:[m.jsx(rt,{slot:"prefix",name:"plus",className:Kt.actionIconPlus}),m.jsx(ae,{id:"profile.postUpdate"})]}),ne&&y.type==="horse"&&m.jsxs(ke,{variant:"primary",size:"small",onClick:()=>n(`/horse/${y.entity_id}/team`),children:[m.jsx(rt,{slot:"prefix",name:"people",className:Kt.actionIcon}),m.jsx(ae,{id:"manageTeam.buttonLabel",defaultMessage:"Team"})]})]})]})]}),y.type==="user"&&M&&m.jsx(XE,{isOpen:l,onClose:()=>r(!1),user:M,socialProfile:y}),y.type==="horse"&&D&&m.jsx(W1,{isOpen:l,onClose:()=>r(!1),horse:D,socialProfile:y}),y.type==="organization"&&j&&m.jsx(rC,{isOpen:l,onClose:()=>r(!1),organization:j,socialProfile:y})]})}function F0(){const{social_id:t}=Es(),n=t||"me",l=n==="me",r=sx(),o=ze(),u=qt(),{data:f}=hn({enabled:!0}),h=m.jsx("div",{className:ac.headerActions,children:l?m.jsx($t,{name:"box-arrow-right",label:o.formatMessage({id:"profile.logout"}),onClick:r,"data-testid":"logout-button"}):m.jsx("div",{onClick:()=>u("/profile/me"),className:ac.profileAction,role:"button",tabIndex:0,children:m.jsx(gt,{image:f?.social_profiles?.avatar_url,name:f?.firstname??"",className:ac.profileAvatar})})});return m.jsxs("div",{className:ac.pageWrapper,children:[m.jsx(pn,{showBackButton:!0,headerActions:h}),m.jsx(oC,{profileId:n})]})}var q0,Ve="colors",Qt="sizes",ie="space",cC={gap:ie,gridGap:ie,columnGap:ie,gridColumnGap:ie,rowGap:ie,gridRowGap:ie,inset:ie,insetBlock:ie,insetBlockEnd:ie,insetBlockStart:ie,insetInline:ie,insetInlineEnd:ie,insetInlineStart:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,marginBlock:ie,marginBlockEnd:ie,marginBlockStart:ie,marginInline:ie,marginInlineEnd:ie,marginInlineStart:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,paddingBlock:ie,paddingBlockEnd:ie,paddingBlockStart:ie,paddingInline:ie,paddingInlineEnd:ie,paddingInlineStart:ie,top:ie,right:ie,bottom:ie,left:ie,scrollMargin:ie,scrollMarginTop:ie,scrollMarginRight:ie,scrollMarginBottom:ie,scrollMarginLeft:ie,scrollMarginX:ie,scrollMarginY:ie,scrollMarginBlock:ie,scrollMarginBlockEnd:ie,scrollMarginBlockStart:ie,scrollMarginInline:ie,scrollMarginInlineEnd:ie,scrollMarginInlineStart:ie,scrollPadding:ie,scrollPaddingTop:ie,scrollPaddingRight:ie,scrollPaddingBottom:ie,scrollPaddingLeft:ie,scrollPaddingX:ie,scrollPaddingY:ie,scrollPaddingBlock:ie,scrollPaddingBlockEnd:ie,scrollPaddingBlockStart:ie,scrollPaddingInline:ie,scrollPaddingInlineEnd:ie,scrollPaddingInlineStart:ie,fontSize:"fontSizes",background:Ve,backgroundColor:Ve,backgroundImage:Ve,borderImage:Ve,border:Ve,borderBlock:Ve,borderBlockEnd:Ve,borderBlockStart:Ve,borderBottom:Ve,borderBottomColor:Ve,borderColor:Ve,borderInline:Ve,borderInlineEnd:Ve,borderInlineStart:Ve,borderLeft:Ve,borderLeftColor:Ve,borderRight:Ve,borderRightColor:Ve,borderTop:Ve,borderTopColor:Ve,caretColor:Ve,color:Ve,columnRuleColor:Ve,fill:Ve,outline:Ve,outlineColor:Ve,stroke:Ve,textDecorationColor:Ve,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Qt,minBlockSize:Qt,maxBlockSize:Qt,inlineSize:Qt,minInlineSize:Qt,maxInlineSize:Qt,width:Qt,minWidth:Qt,maxWidth:Qt,height:Qt,minHeight:Qt,maxHeight:Qt,flexBasis:Qt,gridTemplateColumns:Qt,gridTemplateRows:Qt,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},uC=(t,n)=>typeof n=="function"?{"()":Function.prototype.toString.call(n)}:n,ks=()=>{const t=Object.create(null);return(n,l,...r)=>{const o=(u=>JSON.stringify(u,uC))(n);return o in t?t[o]:t[o]=l(n,...r)}},fc=Symbol.for("sxs.internal"),jh=(t,n)=>Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)),G0=t=>{for(const n in t)return!0;return!1},{hasOwnProperty:dC}=Object.prototype,th=t=>t.includes("-")?t:t.replace(/[A-Z]/g,(n=>"-"+n.toLowerCase())),fC=/\s+(?![^()]*\))/,Pl=t=>n=>t(...typeof n=="string"?String(n).split(fC):[n]),Y0={appearance:t=>({WebkitAppearance:t,appearance:t}),backfaceVisibility:t=>({WebkitBackfaceVisibility:t,backfaceVisibility:t}),backdropFilter:t=>({WebkitBackdropFilter:t,backdropFilter:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),boxDecorationBreak:t=>({WebkitBoxDecorationBreak:t,boxDecorationBreak:t}),clipPath:t=>({WebkitClipPath:t,clipPath:t}),content:t=>({content:t.includes('"')||t.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(t)?t:`"${t}"`}),hyphens:t=>({WebkitHyphens:t,hyphens:t}),maskImage:t=>({WebkitMaskImage:t,maskImage:t}),maskSize:t=>({WebkitMaskSize:t,maskSize:t}),tabSize:t=>({MozTabSize:t,tabSize:t}),textSizeAdjust:t=>({WebkitTextSizeAdjust:t,textSizeAdjust:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),marginBlock:Pl(((t,n)=>({marginBlockStart:t,marginBlockEnd:n||t}))),marginInline:Pl(((t,n)=>({marginInlineStart:t,marginInlineEnd:n||t}))),maxSize:Pl(((t,n)=>({maxBlockSize:t,maxInlineSize:n||t}))),minSize:Pl(((t,n)=>({minBlockSize:t,minInlineSize:n||t}))),paddingBlock:Pl(((t,n)=>({paddingBlockStart:t,paddingBlockEnd:n||t}))),paddingInline:Pl(((t,n)=>({paddingInlineStart:t,paddingInlineEnd:n||t})))},_f=/([\d.]+)([^]*)/,hC=(t,n)=>t.length?t.reduce(((l,r)=>(l.push(...n.map((o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o))),l)),[]):n,pC=(t,n)=>t in mC&&typeof n=="string"?n.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((l,r,o,u)=>r+(o==="stretch"?`-moz-available${u};${th(t)}:${r}-webkit-fill-available`:`-moz-fit-content${u};${th(t)}:${r}fit-content`)+u)):String(n),mC={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Hn=t=>t?t+"-":"",Q1=(t,n,l)=>t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((r,o,u,f,h)=>f=="$"==!!u?r:(o||f=="--"?"calc(":"")+"var(--"+(f==="$"?Hn(n)+(h.includes("$")?"":Hn(l))+h.replace(/\$/g,"-"):h)+")"+(o||f=="--"?"*"+(o||"")+(u||"1")+")":""))),gC=/\s*,\s*(?![^()]*\))/,vC=Object.prototype.toString,Yl=(t,n,l,r,o)=>{let u,f,h;const g=(p,b,_)=>{let w,y;const S=A=>{for(w in A){const D=w.charCodeAt(0)===64,U=D&&Array.isArray(A[w])?A[w]:[A[w]];for(y of U){const j=/[A-Z]/.test(C=w)?C:C.replace(/-[^]/g,(W=>W[1].toUpperCase())),$=typeof y=="object"&&y&&y.toString===vC&&(!r.utils[j]||!b.length);if(j in r.utils&&!$){const W=r.utils[j];if(W!==f){f=W,S(W(y)),f=null;continue}}else if(j in Y0){const W=Y0[j];if(W!==h){h=W,S(W(y)),h=null;continue}}if(D&&(M=w.slice(1)in r.media?"@media "+r.media[w.slice(1)]:w,w=M.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((W,X,oe,L,q,J)=>{const ne=_f.test(X),Q=.0625*(ne?-1:1),[le,te]=ne?[L,X]:[X,L];return"("+(oe[0]==="="?"":oe[0]===">"===ne?"max-":"min-")+le+":"+(oe[0]!=="="&&oe.length===1?te.replace(_f,((I,Z,ee)=>Number(Z)+Q*(oe===">"?1:-1)+ee)):te)+(q?") and ("+(q[0]===">"?"min-":"max-")+le+":"+(q.length===1?J.replace(_f,((I,Z,ee)=>Number(Z)+Q*(q===">"?-1:1)+ee)):J):"")+")"}))),$){const W=D?_.concat(w):[..._],X=D?[...b]:hC(b,w.split(gC));u!==void 0&&o(X0(...u)),u=void 0,g(y,X,W)}else u===void 0&&(u=[[],b,_]),w=D||w.charCodeAt(0)!==36?w:`--${Hn(r.prefix)}${w.slice(1).replace(/\$/g,"-")}`,y=$?y:typeof y=="number"?y&&j in bC?String(y)+"px":String(y):Q1(pC(j,y??""),r.prefix,r.themeMap[j]),u[0].push(`${D?`${w} `:`${th(w)}:`}${y}`)}}var M,C};S(p),u!==void 0&&o(X0(...u)),u=void 0};g(t,n,l)},X0=(t,n,l)=>`${l.map((r=>`${r}{`)).join("")}${n.length?`${n.join(",")}{`:""}${t.join(";")}${n.length?"}":""}${Array(l.length?l.length+1:0).join("}")}`,bC={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},W0=t=>String.fromCharCode(t+(t>25?39:97)),Qi=t=>(n=>{let l,r="";for(l=Math.abs(n);l>52;l=l/52|0)r=W0(l%52)+r;return W0(l%52)+r})(((n,l)=>{let r=l.length;for(;r;)n=33*n^l.charCodeAt(--r);return n})(5381,JSON.stringify(t))>>>0),gs=["themed","global","styled","onevar","resonevar","allvar","inline"],yC=t=>{if(t.href&&!t.href.startsWith(location.origin))return!1;try{return!!t.cssRules}catch{return!1}},_C=t=>{let n;const l=()=>{const{cssRules:o}=n.sheet;return[].map.call(o,((u,f)=>{const{cssText:h}=u;let g="";if(h.startsWith("--sxs"))return"";if(o[f-1]&&(g=o[f-1].cssText).startsWith("--sxs")){if(!u.cssRules.length)return"";for(const p in n.rules)if(n.rules[p].group===u)return`--sxs{--sxs:${[...n.rules[p].cache].join(" ")}}${h}`;return u.cssRules.length?`${g}${h}`:""}return h})).join("")},r=()=>{if(n){const{rules:h,sheet:g}=n;if(!g.deleteRule){for(;Object(Object(g.cssRules)[0]).type===3;)g.cssRules.splice(0,1);g.cssRules=[]}for(const p in h)delete h[p]}const o=Object(t).styleSheets||[];for(const h of o)if(yC(h)){for(let g=0,p=h.cssRules;p[g];++g){const b=Object(p[g]);if(b.type!==1)continue;const _=Object(p[g+1]);if(_.type!==4)continue;++g;const{cssText:w}=b;if(!w.startsWith("--sxs"))continue;const y=w.slice(14,-3).trim().split(/\s+/),S=gs[y[0]];S&&(n||(n={sheet:h,reset:r,rules:{},toString:l}),n.rules[S]={group:_,index:g,cache:new Set(y)})}if(n)break}if(!n){const h=(g,p)=>({type:p,cssRules:[],insertRule(b,_){this.cssRules.splice(_,0,h(b,{import:3,undefined:1}[(b.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return g==="@media{}"?`@media{${[].map.call(this.cssRules,(b=>b.cssText)).join("")}}`:g}});n={sheet:t?(t.head||t).appendChild(document.createElement("style")).sheet:h("","text/css"),rules:{},reset:r,toString:l}}const{sheet:u,rules:f}=n;for(let h=gs.length-1;h>=0;--h){const g=gs[h];if(!f[g]){const p=gs[h+1],b=f[p]?f[p].index:u.cssRules.length;u.insertRule("@media{}",b),u.insertRule(`--sxs{--sxs:${h}}`,b),f[g]={group:u.cssRules[b+1],index:b,cache:new Set([h])}}xC(f[g])}};return r(),n},xC=t=>{const n=t.group;let l=n.cssRules.length;t.apply=r=>{try{n.insertRule(r,l),++l}catch{}}},fs=Symbol(),wC=ks(),SC=(t,n)=>wC(t,(()=>(...l)=>{let r={type:null,composers:new Set};for(const o of l)if(o!=null)if(o[fc]){r.type==null&&(r.type=o[fc].type);for(const u of o[fc].composers)r.composers.add(u)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(EC(o,t));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),CC(t,r,n)})),EC=({variants:t,compoundVariants:n,defaultVariants:l,...r},o)=>{const u=`${Hn(o.prefix)}c-${Qi(r)}`,f=[],h=[],g=Object.create(null),p=[];for(const w in l)g[w]=String(l[w]);if(typeof t=="object"&&t)for(const w in t){b=g,_=w,dC.call(b,_)||(g[w]="undefined");const y=t[w];for(const S in y){const A={[w]:String(S)};String(S)==="undefined"&&p.push(w);const M=y[S],C=[A,M,!G0(M)];f.push(C)}}var b,_;if(typeof n=="object"&&n)for(const w of n){let{css:y,...S}=w;y=typeof y=="object"&&y||{};for(const M in S)S[M]=String(S[M]);const A=[S,y,!G0(y)];h.push(A)}return[u,r,f,h,g,p]},CC=(t,n,l)=>{const[r,o,u,f]=TC(n.composers),h=typeof n.type=="function"||n.type.$$typeof?(_=>{function w(){for(let y=0;y<w[fs].length;y++){const[S,A]=w[fs][y];_.rules[S].apply(A)}return w[fs]=[],null}return w[fs]=[],w.rules={},gs.forEach((y=>w.rules[y]={apply:S=>w[fs].push([y,S])})),w})(l):null,g=(h||l).rules,p=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,b=_=>{_=typeof _=="object"&&_||AC;const{css:w,...y}=_,S={};for(const C in u)if(delete y[C],C in _){let D=_[C];typeof D=="object"&&D?S[C]={"@initial":u[C],...D}:(D=String(D),S[C]=D!=="undefined"||f.has(C)?D:u[C])}else S[C]=u[C];const A=new Set([...o]);for(const[C,D,U,j]of n.composers){l.rules.styled.cache.has(C)||(l.rules.styled.cache.add(C),Yl(D,[`.${C}`],[],t,(X=>{g.styled.apply(X)})));const $=Q0(U,S,t.media),W=Q0(j,S,t.media,!0);for(const X of $)if(X!==void 0)for(const[oe,L,q]of X){const J=`${C}-${Qi(L)}-${oe}`;A.add(J);const ne=(q?l.rules.resonevar:l.rules.onevar).cache,Q=q?g.resonevar:g.onevar;ne.has(J)||(ne.add(J),Yl(L,[`.${J}`],[],t,(le=>{Q.apply(le)})))}for(const X of W)if(X!==void 0)for(const[oe,L]of X){const q=`${C}-${Qi(L)}-${oe}`;A.add(q),l.rules.allvar.cache.has(q)||(l.rules.allvar.cache.add(q),Yl(L,[`.${q}`],[],t,(J=>{g.allvar.apply(J)})))}}if(typeof w=="object"&&w){const C=`${r}-i${Qi(w)}-css`;A.add(C),l.rules.inline.cache.has(C)||(l.rules.inline.cache.add(C),Yl(w,[`.${C}`],[],t,(D=>{g.inline.apply(D)})))}for(const C of String(_.className||"").trim().split(/\s+/))C&&A.add(C);const M=y.className=[...A].join(" ");return{type:n.type,className:M,selector:p,props:y,toString:()=>M,deferredInjector:h}};return jh(b,{className:r,selector:p,[fc]:n,toString:()=>(l.rules.styled.cache.has(r)||b(),r)})},TC=t=>{let n="";const l=[],r={},o=[];for(const[u,,,,f,h]of t){n===""&&(n=u),l.push(u),o.push(...h);for(const g in f){const p=f[g];(r[g]===void 0||p!=="undefined"||h.includes(p))&&(r[g]=p)}}return[n,l,r,new Set(o)]},Q0=(t,n,l,r)=>{const o=[];e:for(let[u,f,h]of t){if(h)continue;let g,p=0,b=!1;for(g in u){const _=u[g];let w=n[g];if(w!==_){if(typeof w!="object"||!w)continue e;{let y,S,A=0;for(const M in w){if(_===String(w[M])){if(M!=="@initial"){const C=M.slice(1);(S=S||[]).push(C in l?l[C]:M.replace(/^@media ?/,"")),b=!0}p+=A,y=!0}++A}if(S&&S.length&&(f={["@media "+S.join(", ")]:f}),!y)continue e}}}(o[p]=o[p]||[]).push([r?"cv":`${g}-${u[g]}`,f,b])}return o},AC={},MC=ks(),NC=(t,n)=>MC(t,(()=>(...l)=>{const r=()=>{for(let o of l){o=typeof o=="object"&&o||{};let u=Qi(o);if(!n.rules.global.cache.has(u)){if(n.rules.global.cache.add(u),"@import"in o){let f=[].indexOf.call(n.sheet.cssRules,n.rules.themed.group)-1;for(let h of[].concat(o["@import"]))h=h.includes('"')||h.includes("'")?h:`"${h}"`,n.sheet.insertRule(`@import ${h};`,f++);delete o["@import"]}Yl(o,[],[],t,(f=>{n.rules.global.apply(f)}))}}return""};return jh(r,{toString:r})})),$C=ks(),OC=(t,n)=>$C(t,(()=>l=>{const r=`${Hn(t.prefix)}k-${Qi(l)}`,o=()=>{if(!n.rules.global.cache.has(r)){n.rules.global.cache.add(r);const u=[];Yl(l,[],[],t,(h=>u.push(h)));const f=`@keyframes ${r}{${u.join("")}}`;n.rules.global.apply(f)}return r};return jh(o,{get name(){return o()},toString:o})})),kC=class{constructor(n,l,r,o){this.token=n==null?"":String(n),this.value=l==null?"":String(l),this.scale=r==null?"":String(r),this.prefix=o==null?"":String(o)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Hn(this.prefix)+Hn(this.scale)+this.token}toString(){return this.computedValue}},RC=ks(),DC=(t,n)=>RC(t,(()=>(l,r)=>{r=typeof l=="object"&&l||Object(r);const o=`.${l=(l=typeof l=="string"?l:"")||`${Hn(t.prefix)}t-${Qi(r)}`}`,u={},f=[];for(const g in r){u[g]={};for(const p in r[g]){const b=`--${Hn(t.prefix)}${g}-${p}`,_=Q1(String(r[g][p]),t.prefix,g);u[g][p]=new kC(p,_,g,t.prefix),f.push(`${b}:${_}`)}}const h=()=>{if(f.length&&!n.rules.themed.cache.has(l)){n.rules.themed.cache.add(l);const g=`${r===t.theme?":root,":""}.${l}{${f.join(";")}}`;n.rules.themed.apply(g)}return l};return{...u,get className(){return h()},selector:o,toString:h}})),zC=ks(),Z1=t=>{let n=!1;const l=zC(t,(r=>{n=!0;const o="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",u=typeof r.media=="object"&&r.media||{},f=typeof r.root=="object"?r.root||null:globalThis.document||null,h=typeof r.theme=="object"&&r.theme||{},g={prefix:o,media:u,theme:h,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...cC},utils:typeof r.utils=="object"&&r.utils||{}},p=_C(f),b={css:SC(g,p),globalCss:NC(g,p),keyframes:OC(g,p),createTheme:DC(g,p),reset(){p.reset(),b.theme.toString()},theme:{},sheet:p,config:g,prefix:o,getCssText:p.toString,toString:p.toString};return String(b.theme=b.createTheme(h)),b}));return n||l.reset(),l},K1=()=>q0||(q0=Z1()),LC=(...t)=>K1().createTheme(...t),Un=(...t)=>K1().css(...t),J1={default:{colors:{brand:"hsl(153 60.0% 53.0%)",brandAccent:"hsl(154 54.8% 45.1%)",brandButtonText:"white",defaultButtonBackground:"white",defaultButtonBackgroundHover:"#eaeaea",defaultButtonBorder:"lightgray",defaultButtonText:"gray",dividerBackground:"#eaeaea",inputBackground:"transparent",inputBorder:"lightgray",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"black",inputLabelText:"gray",inputPlaceholder:"darkgray",messageText:"#2b805a",messageBackground:"#e7fcf1",messageBorder:"#d0f3e1",messageTextDanger:"#ff6369",messageBackgroundDanger:"#fff8f8",messageBorderDanger:"#822025",anchorTextColor:"gray",anchorTextHoverColor:"darkgray"},space:{spaceSmall:"4px",spaceMedium:"8px",spaceLarge:"16px",labelBottomMargin:"8px",anchorBottomMargin:"4px",emailInputSpacing:"4px",socialAuthSpacing:"4px",buttonPadding:"10px 15px",inputPadding:"10px 15px"},fontSizes:{baseBodySize:"13px",baseInputSize:"14px",baseLabelSize:"14px",baseButtonSize:"14px"},fonts:{bodyFontFamily:"ui-sans-serif, sans-serif",buttonFontFamily:"ui-sans-serif, sans-serif",inputFontFamily:"ui-sans-serif, sans-serif",labelFontFamily:"ui-sans-serif, sans-serif"},borderWidths:{buttonBorderWidth:"1px",inputBorderWidth:"1px"},radii:{borderRadiusButton:"4px",buttonBorderRadius:"4px",inputBorderRadius:"4px"}},dark:{colors:{brandButtonText:"white",defaultButtonBackground:"#2e2e2e",defaultButtonBackgroundHover:"#3e3e3e",defaultButtonBorder:"#3e3e3e",defaultButtonText:"white",dividerBackground:"#2e2e2e",inputBackground:"#1e1e1e",inputBorder:"#3e3e3e",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"white",inputPlaceholder:"darkgray",messageText:"#85e0b7",messageBackground:"#072719",messageBorder:"#2b805a",messageBackgroundDanger:"#1f1315"}}},ut={SIGN_IN:"sign_in",SIGN_UP:"sign_up",FORGOTTEN_PASSWORD:"forgotten_password",MAGIC_LINK:"magic_link",UPDATE_PASSWORD:"update_password",VERIFY_OTP:"verify_otp"},jC="supabase-auth-ui",BC={ROOT:"root",SIGN_IN:ut.SIGN_IN,SIGN_UP:ut.SIGN_UP,FORGOTTEN_PASSWORD:ut.FORGOTTEN_PASSWORD,MAGIC_LINK:ut.MAGIC_LINK,UPDATE_PASSWORD:ut.UPDATE_PASSWORD,anchor:"ui-anchor",button:"ui-button",container:"ui-container",divider:"ui-divider",input:"ui-input",label:"ui-label",loader:"ui-loader",message:"ui-message"};function nl(t,n,l){var r,o;const u=[],f=BC[t];return u.push(l?.prependedClassName?l?.prependedClassName+"_"+f:jC+"_"+f),(r=l?.className)!=null&&r[t]&&u.push((o=l?.className)==null?void 0:o[t]),(l?.extend===void 0||l?.extend===!0)&&u.push(n),u}function ah(t,n){let l;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(Array.isArray(n))for(l=0;l<n.length;l++)t[l]=ah(t[l],n[l]);else for(l in n)t[l]=ah(t[l],n[l]);return t}return n}function xf(t,...n){let l=n.length;for(let r=0;r<l;r++)t=ah(t,n[r]);return t}function HC(t,n){return t.replace(/{{(\w+)}}/g,(l,r)=>n.hasOwnProperty(r)?n[r]:l)}var UC={sign_up:{email_label:"Email address",password_label:"Create a Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign up",loading_button_label:"Signing up ...",social_provider_text:"Sign in with {{provider}}",link_text:"Don't have an account? Sign up",confirmation_text:"Check your email for the confirmation link"},sign_in:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign in",loading_button_label:"Signing in ...",social_provider_text:"Sign in with {{provider}}",link_text:"Already have an account? Sign in"},magic_link:{email_input_label:"Email address",email_input_placeholder:"Your email address",button_label:"Send Magic Link",loading_button_label:"Sending Magic Link ...",link_text:"Send a magic link email",confirmation_text:"Check your email for the magic link"},forgotten_password:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",button_label:"Send reset password instructions",loading_button_label:"Sending reset instructions ...",link_text:"Forgot your password?",confirmation_text:"Check your email for the password reset link"},update_password:{password_label:"New password",password_input_placeholder:"Your new password",button_label:"Update password",loading_button_label:"Updating password ...",confirmation_text:"Your password has been updated"},verify_otp:{email_input_label:"Email address",email_input_placeholder:"Your email address",phone_input_label:"Phone number",phone_input_placeholder:"Your phone number",token_input_label:"Token",token_input_placeholder:"Your Otp token",button_label:"Verify token",loading_button_label:"Signing in ..."}};const IC=Un({fontFamily:"$bodyFontFamily",fontSize:"$baseBodySize",marginBottom:"$anchorBottomMargin",color:"$anchorTextColor",display:"block",textAlign:"center",textDecoration:"underline","&:hover":{color:"$anchorTextHoverColor"}}),Wi=({children:t,appearance:n,...l})=>{var r;const o=nl("anchor",IC(),n);return R.createElement("a",{...l,style:(r=n?.style)==null?void 0:r.anchor,className:o.join(" ")},t)},PC=Un({fontFamily:"$buttonFontFamily",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",borderRadius:"$borderRadiusButton",fontSize:"$baseButtonSize",padding:"$buttonPadding",cursor:"pointer",borderWidth:"$buttonBorderWidth",borderStyle:"solid",width:"100%",transitionProperty:"background-color",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms","&:disabled":{opacity:.7,cursor:"unset"},variants:{color:{default:{backgroundColor:"$defaultButtonBackground",color:"$defaultButtonText",borderColor:"$defaultButtonBorder","&:hover:not(:disabled)":{backgroundColor:"$defaultButtonBackgroundHover"}},primary:{backgroundColor:"$brand",color:"$brandButtonText",borderColor:"$brandAccent","&:hover:not(:disabled)":{backgroundColor:"$brandAccent"}}}}}),rr=({children:t,color:n="default",appearance:l,icon:r,loading:o=!1,...u})=>{var f;const h=nl("button",PC({color:n}),l);return R.createElement("button",{...u,style:(f=l?.style)==null?void 0:f.button,className:h.join(" "),disabled:o},r,t)},VC=Un({display:"flex",gap:"4px",variants:{direction:{horizontal:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(48px, 1fr))"},vertical:{flexDirection:"column",margin:"8px 0"}},gap:{small:{gap:"4px"},medium:{gap:"8px"},large:{gap:"16px"}}}}),cn=({children:t,appearance:n,...l})=>{var r;const o=nl("container",VC({direction:l.direction,gap:l.gap}),n);return R.createElement("div",{...l,style:(r=n?.style)==null?void 0:r.container,className:o.join(" ")},t)},FC=Un({background:"$dividerBackground",display:"block",margin:"16px 0",height:"1px",width:"100%"}),qC=({children:t,appearance:n,...l})=>{var r;const o=nl("divider",FC(),n);return R.createElement("div",{...l,style:(r=n?.style)==null?void 0:r.divider,className:o.join(" ")})},GC=Un({fontFamily:"$inputFontFamily",background:"$inputBackground",borderRadius:"$inputBorderRadius",padding:"$inputPadding",cursor:"text",borderWidth:"$inputBorderWidth",borderColor:"$inputBorder",borderStyle:"solid",fontSize:"$baseInputSize",width:"100%",color:"$inputText",boxSizing:"border-box","&:hover":{borderColor:"$inputBorderHover",outline:"none"},"&:focus":{borderColor:"$inputBorderFocus",outline:"none"},"&::placeholder":{color:"$inputPlaceholder",letterSpacing:"initial"},transitionProperty:"background-color, border",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms",variants:{type:{default:{letterSpacing:"0px"},password:{letterSpacing:"0px"}}}}),mi=({children:t,appearance:n,...l})=>{var r;const o=nl("input",GC({type:l.type==="password"?"password":"default"}),n);return R.createElement("input",{...l,style:(r=n?.style)==null?void 0:r.input,className:o.join(" ")},t)},YC=Un({fontFamily:"$labelFontFamily",fontSize:"$baseLabelSize",marginBottom:"$labelBottomMargin",color:"$inputLabelText",display:"block"}),gi=({children:t,appearance:n,...l})=>{var r;const o=nl("label",YC(),n);return R.createElement("label",{...l,style:(r=n?.style)==null?void 0:r.label,className:o.join(" ")},t)},XC=Un({fontFamily:"$bodyFontFamily",fontSize:"$baseInputSize",marginBottom:"$labelBottomMargin",display:"block",textAlign:"center",borderRadius:"0.375rem",padding:"1.5rem 1rem",lineHeight:"1rem",color:"$messageText",backgroundColor:"$messageBackground",border:"1px solid $messageBorder",variants:{color:{danger:{color:"$messageTextDanger",backgroundColor:"$messageBackgroundDanger",border:"1px solid $messageBorderDanger"}}}}),fn=({children:t,appearance:n,...l})=>{var r;const o=nl("message",XC({color:l.color}),n);return R.createElement("span",{...l,style:(r=n?.style)==null?void 0:r.message,className:o.join(" ")},t)};function ey({setAuthView:t=()=>{},supabaseClient:n,redirectTo:l,i18n:r,appearance:o,showLinks:u=!1}){var f;const[h,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(!1),A=async C=>{var D,U;if(C.preventDefault(),b(""),w(""),S(!0),h.length===0){b((D=r?.magic_link)==null?void 0:D.empty_email_address),S(!1);return}const{error:j}=await n.auth.signInWithOtp({email:h,options:{emailRedirectTo:l}});j?b(j.message):w((U=r?.magic_link)==null?void 0:U.confirmation_text),S(!1)},M=r?.magic_link;return R.createElement("form",{id:"auth-magic-link",onSubmit:A},R.createElement(cn,{gap:"large",direction:"vertical",appearance:o},R.createElement("div",null,R.createElement(gi,{htmlFor:"email",appearance:o},M?.email_input_label),R.createElement(mi,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:M?.email_input_placeholder,onChange:C=>{b&&b(""),g(C.target.value)},appearance:o})),R.createElement(rr,{color:"primary",type:"submit",loading:y,appearance:o},y?M?.loading_button_label:M?.button_label),u&&R.createElement(Wi,{href:"#auth-sign-in",onClick:C=>{C.preventDefault(),t(ut.SIGN_IN)},appearance:o},(f=r?.sign_in)==null?void 0:f.link_text),_&&R.createElement(fn,{appearance:o},_),p&&R.createElement(fn,{color:"danger",appearance:o},p)))}const Ht=Un({width:"21px",height:"21px"}),WC=({provider:t})=>t=="google"?QC():t=="facebook"?ZC():t=="twitter"?KC():t=="apple"?JC():t=="github"?e7():t=="gitlab"?t7():t=="bitbucket"?a7():t=="discord"?n7():t=="azure"?i7():t=="keycloak"?l7():t=="linkedin"?r7():t=="notion"?s7():t=="slack"?o7():t=="spotify"?c7():t=="twitch"?u7():t=="workos"?d7():t=="kakao"?f7():null,QC=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),R.createElement("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),R.createElement("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),R.createElement("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})),ZC=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"}),R.createElement("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})),KC=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#03A9F4",d:"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"})),JC=()=>R.createElement("svg",{className:Ht(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"21px",height:"21px"}," ",R.createElement("path",{d:"M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z"})),e7=()=>R.createElement("svg",{className:Ht(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"21px",height:"21px"}," ",R.createElement("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})),t7=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#e53935",d:"M24 43L16 20 32 20z"}),R.createElement("path",{fill:"#ff7043",d:"M24 43L42 20 32 20z"}),R.createElement("path",{fill:"#e53935",d:"M37 5L42 20 32 20z"}),R.createElement("path",{fill:"#ffa726",d:"M24 43L42 20 45 28z"}),R.createElement("path",{fill:"#ff7043",d:"M24 43L6 20 16 20z"}),R.createElement("path",{fill:"#e53935",d:"M11 5L6 20 16 20z"}),R.createElement("path",{fill:"#ffa726",d:"M24 43L6 20 3 28z"})),a7=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 62.42 62.42"},R.createElement("defs",null,R.createElement("linearGradient",{id:"New_Gradient_Swatch_1",x1:"64.01",y1:"30.27",x2:"32.99",y2:"54.48",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0.18",stopColor:"#0052cc"}),R.createElement("stop",{offset:"1",stopColor:"#2684ff"}))),R.createElement("title",null,"Bitbucket-blue"),R.createElement("g",{id:"Layer_2","data-name":"Layer 2"},R.createElement("g",{id:"Blue",transform:"translate(0 -3.13)"},R.createElement("path",{d:"M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z",fill:"#2684ff"}),R.createElement("path",{d:"M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z",fill:"url(#New_Gradient_Swatch_1)"})))),n7=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#536dfe",d:"M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"})),i7=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6a",x1:"-1254.397",x2:"-1261.911",y1:"877.268",y2:"899.466",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopColor:"#114a8b"}),R.createElement("stop",{offset:"1",stopColor:"#0669bc"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6a)",d:"M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"}),R.createElement("path",{fill:"#0078d4",d:"M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"}),R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6b",x1:"-1252.05",x2:"-1253.788",y1:"887.612",y2:"888.2",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopOpacity:".3"}),R.createElement("stop",{offset:".071",stopOpacity:".2"}),R.createElement("stop",{offset:".321",stopOpacity:".1"}),R.createElement("stop",{offset:".623",stopOpacity:".05"}),R.createElement("stop",{offset:"1",stopOpacity:"0"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6b)",d:"M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"}),R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6c",x1:"-1252.952",x2:"-1244.704",y1:"876.6",y2:"898.575",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopColor:"#3ccbf4"}),R.createElement("stop",{offset:"1",stopColor:"#2892df"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6c)",d:"M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"})),l7=()=>R.createElement("svg",{className:Ht(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",fill:"#008AAA"})),r7=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#0288D1",d:"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"}),R.createElement("path",{fill:"#FFF",d:"M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"})),s7=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px",fillRule:"evenodd",clipRule:"evenodd"},R.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",clipRule:"evenodd"}),R.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",clipRule:"evenodd"}),R.createElement("path",{fill:"#424242",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",clipRule:"evenodd"})),o7=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#33d375",d:"M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"}),R.createElement("path",{fill:"#33d375",d:"M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"}),R.createElement("path",{fill:"#40c4ff",d:"M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"}),R.createElement("path",{fill:"#40c4ff",d:"M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"}),R.createElement("path",{fill:"#e91e63",d:"M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"}),R.createElement("path",{fill:"#e91e63",d:"M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"}),R.createElement("path",{fill:"#ffc107",d:"M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"}),R.createElement("path",{fill:"#ffc107",d:"M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"})),c7=()=>R.createElement("svg",{className:Ht(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",fill:"#1ED760"})),u7=()=>R.createElement("svg",{className:Ht(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"white"}),R.createElement("path",{d:"M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"#9146FF"}),R.createElement("path",{d:"M368 120H336V216H368V120Z",fill:"#9146FF"}),R.createElement("path",{d:"M280 120H248V216H280V120Z",fill:"#9146FF"})),d7=()=>R.createElement("svg",{className:Ht(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",fill:"#6363F1"}),R.createElement("path",{d:"M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",fill:"#6363F1"})),f7=()=>R.createElement("svg",{className:Ht(),xmlns:"http://www.w3.org/2000/svg",width:"2500",height:"2500",viewBox:"0 0 256 256"},R.createElement("path",{fill:"#FFE812",d:"M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"}),R.createElement("path",{d:"M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"}),R.createElement("path",{fill:"#FFE812",d:"M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"}));function h7({supabaseClient:t,socialLayout:n="vertical",providers:l=["github","google","azure"],providerScopes:r,queryParams:o,redirectTo:u,onlyThirdPartyProviders:f=!0,view:h="sign_in",i18n:g,appearance:p}){const[b,_]=k.useState(!1),[w,y]=k.useState(""),S=n==="vertical",A=h==="magic_link"?"sign_in":h,M=async D=>{_(!0);const{error:U}=await t.auth.signInWithOAuth({provider:D,options:{redirectTo:u,scopes:r?.[D],queryParams:o}});U&&y(U.message),_(!1)};function C(D){const U=D.toLowerCase();return D.charAt(0).toUpperCase()+U.slice(1)}return R.createElement(R.Fragment,null,l&&l.length>0&&R.createElement(R.Fragment,null,R.createElement(cn,{gap:"large",direction:"vertical",appearance:p},R.createElement(cn,{direction:S?"vertical":"horizontal",gap:S?"small":"medium",appearance:p},l.map(D=>{var U;return R.createElement(rr,{key:D,color:"default",loading:b,onClick:()=>M(D),appearance:p},R.createElement(WC,{provider:D}),S&&HC((U=g?.[A])==null?void 0:U.social_provider_text,{provider:C(D)}))}))),!f&&R.createElement(qC,{appearance:p})))}function Z0({authView:t="sign_in",defaultEmail:n="",defaultPassword:l="",setAuthView:r=()=>{},setDefaultEmail:o=S=>{},setDefaultPassword:u=S=>{},supabaseClient:f,showLinks:h=!1,redirectTo:g,additionalData:p,magicLink:b,i18n:_,appearance:w,children:y}){var S,A,M,C;const D=k.useRef(!0),[U,j]=k.useState(n),[$,W]=k.useState(l),[X,oe]=k.useState(""),[L,q]=k.useState(!1),[J,ne]=k.useState("");k.useEffect(()=>(D.current=!0,j(n),W(l),()=>{D.current=!1}),[t]);const Q=async I=>{var Z;switch(I.preventDefault(),oe(""),q(!0),t){case"sign_in":const{error:ee}=await f.auth.signInWithPassword({email:U,password:$});ee&&oe(ee.message);break;case"sign_up":let ce={emailRedirectTo:g};p&&(ce.data=p);const{data:{user:_e,session:ot},error:Te}=await f.auth.signUp({email:U,password:$,options:ce});Te?oe(Te.message):_e&&!ot&&ne((Z=_?.sign_up)==null?void 0:Z.confirmation_text);break}D.current&&q(!1)},le=I=>{o(U),u($),r(I)},te=_?.[t];return R.createElement("form",{id:t==="sign_in"?"auth-sign-in":"auth-sign-up",onSubmit:Q,autoComplete:"on",style:{width:"100%"}},R.createElement(cn,{direction:"vertical",gap:"large",appearance:w},R.createElement(cn,{direction:"vertical",gap:"large",appearance:w},R.createElement("div",null,R.createElement(gi,{htmlFor:"email",appearance:w},te?.email_label),R.createElement(mi,{id:"email",type:"email",name:"email",placeholder:te?.email_input_placeholder,defaultValue:U,onChange:I=>j(I.target.value),autoComplete:"email",appearance:w})),R.createElement("div",null,R.createElement(gi,{htmlFor:"password",appearance:w},te?.password_label),R.createElement(mi,{id:"password",type:"password",name:"password",placeholder:te?.password_input_placeholder,defaultValue:$,onChange:I=>W(I.target.value),autoComplete:t==="sign_in"?"current-password":"new-password",appearance:w})),y),R.createElement(rr,{type:"submit",color:"primary",loading:L,appearance:w},L?te?.loading_button_label:te?.button_label),h&&R.createElement(cn,{direction:"vertical",gap:"small",appearance:w},t===ut.SIGN_IN&&b&&R.createElement(Wi,{href:"#auth-magic-link",onClick:I=>{I.preventDefault(),r(ut.MAGIC_LINK)},appearance:w},(S=_?.magic_link)==null?void 0:S.link_text),t===ut.SIGN_IN&&R.createElement(Wi,{href:"#auth-forgot-password",onClick:I=>{I.preventDefault(),r(ut.FORGOTTEN_PASSWORD)},appearance:w},(A=_?.forgotten_password)==null?void 0:A.link_text),t===ut.SIGN_IN?R.createElement(Wi,{href:"#auth-sign-up",onClick:I=>{I.preventDefault(),le(ut.SIGN_UP)},appearance:w},(M=_?.sign_up)==null?void 0:M.link_text):R.createElement(Wi,{href:"#auth-sign-in",onClick:I=>{I.preventDefault(),le(ut.SIGN_IN)},appearance:w},(C=_?.sign_in)==null?void 0:C.link_text))),J&&R.createElement(fn,{appearance:w},J),X&&R.createElement(fn,{color:"danger",appearance:w},X))}function ty({setAuthView:t=()=>{},supabaseClient:n,redirectTo:l,i18n:r,appearance:o,showLinks:u=!1}){var f;const[h,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(!1),A=async C=>{var D;C.preventDefault(),b(""),w(""),S(!0);const{error:U}=await n.auth.resetPasswordForEmail(h,{redirectTo:l});U?b(U.message):w((D=r?.forgotten_password)==null?void 0:D.confirmation_text),S(!1)},M=r?.forgotten_password;return R.createElement("form",{id:"auth-forgot-password",onSubmit:A},R.createElement(cn,{direction:"vertical",gap:"large",appearance:o},R.createElement(cn,{gap:"large",direction:"vertical",appearance:o},R.createElement("div",null,R.createElement(gi,{htmlFor:"email",appearance:o},M?.email_label),R.createElement(mi,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:M?.email_input_placeholder,onChange:C=>g(C.target.value),appearance:o})),R.createElement(rr,{type:"submit",color:"primary",loading:y,appearance:o},y?M?.loading_button_label:M?.button_label),u&&R.createElement(Wi,{href:"#auth-sign-in",onClick:C=>{C.preventDefault(),t(ut.SIGN_IN)},appearance:o},(f=r?.sign_in)==null?void 0:f.link_text),_&&R.createElement(fn,{appearance:o},_),p&&R.createElement(fn,{color:"danger",appearance:o},p))))}function ay({supabaseClient:t,i18n:n,appearance:l}){const[r,o]=k.useState(""),[u,f]=k.useState(""),[h,g]=k.useState(""),[p,b]=k.useState(!1),_=async y=>{var S;y.preventDefault(),f(""),g(""),b(!0);const{error:A}=await t.auth.updateUser({password:r});A?f(A.message):g((S=n?.update_password)==null?void 0:S.confirmation_text),b(!1)},w=n?.update_password;return R.createElement("form",{id:"auth-update-password",onSubmit:_},R.createElement(cn,{gap:"large",direction:"vertical",appearance:l},R.createElement("div",null,R.createElement(gi,{htmlFor:"password",appearance:l},w?.password_label),R.createElement(mi,{id:"password",name:"password",placeholder:w?.password_input_placeholder,type:"password",autoFocus:!0,onChange:y=>o(y.target.value),appearance:l})),R.createElement(rr,{type:"submit",color:"primary",loading:p,appearance:l},p?w?.loading_button_label:w?.button_label),h&&R.createElement(fn,{appearance:l},h),u&&R.createElement(fn,{color:"danger",appearance:l},u)))}function p7({setAuthView:t=()=>{},supabaseClient:n,otpType:l="email",i18n:r,appearance:o,showLinks:u=!1}){var f;const[h,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(""),[A,M]=k.useState(""),[C,D]=k.useState(!1),U=async $=>{$.preventDefault(),S(""),M(""),D(!0);let W={email:h,token:_,type:l};["sms","phone_change"].includes(l)&&(W={phone:p,token:_,type:l});const{error:X}=await n.auth.verifyOtp(W);X&&S(X.message),D(!1)},j=r?.verify_otp;return R.createElement("form",{id:"auth-magic-link",onSubmit:U},R.createElement(cn,{gap:"large",direction:"vertical",appearance:o},["sms","phone_change"].includes(l)?R.createElement("div",null,R.createElement(gi,{htmlFor:"phone",appearance:o},j?.phone_input_label),R.createElement(mi,{id:"phone",name:"phone",type:"text",autoFocus:!0,placeholder:j?.phone_input_placeholder,onChange:$=>b($.target.value),appearance:o})):R.createElement("div",null,R.createElement(gi,{htmlFor:"email",appearance:o},j?.email_input_label),R.createElement(mi,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:j?.email_input_placeholder,onChange:$=>g($.target.value),appearance:o})),R.createElement("div",null,R.createElement(gi,{htmlFor:"token",appearance:o},j?.token_input_label),R.createElement(mi,{id:"token",name:"token",type:"text",placeholder:j?.token_input_placeholder,onChange:$=>w($.target.value),appearance:o})),R.createElement(rr,{color:"primary",type:"submit",loading:C,appearance:o},C?j?.loading_button_label:j?.button_label),u&&R.createElement(Wi,{href:"#auth-sign-in",onClick:$=>{$.preventDefault(),t(ut.SIGN_IN)},appearance:o},(f=r?.sign_in)==null?void 0:f.link_text),A&&R.createElement(fn,{appearance:o},A),y&&R.createElement(fn,{color:"danger",appearance:o},y)))}const ny=k.createContext({user:null,session:null}),m7=t=>{const{supabaseClient:n}=t,[l,r]=k.useState(null),[o,u]=k.useState(l?.user??null);k.useEffect(()=>{(async()=>{var g;const{data:p}=await n.auth.getSession();r(p.session),u(((g=p.session)==null?void 0:g.user)??null)})();const{data:h}=n.auth.onAuthStateChange(async(g,p)=>{r(p),u(p?.user??null)});return()=>{h?.subscription.unsubscribe()}},[]);const f={session:l,user:o};return R.createElement(ny.Provider,{value:f,...t})},g7=()=>{const t=k.useContext(ny);if(t===void 0)throw new Error("useUser must be used within a UserContextProvider.");return t};function il({supabaseClient:t,socialLayout:n="vertical",providers:l,providerScopes:r,queryParams:o,view:u="sign_in",redirectTo:f,onlyThirdPartyProviders:h=!1,magicLink:g=!1,showLinks:p=!0,appearance:b,theme:_="default",localization:w={variables:{}},otpType:y="email",additionalData:S,children:A}){const M=xf(UC,w.variables??{}),[C,D]=k.useState(u),[U,j]=k.useState(""),[$,W]=k.useState(""),X=C==="sign_in"||C==="sign_up"||C==="magic_link";k.useEffect(()=>{var q,J;Z1({theme:xf(((q=b?.theme)==null?void 0:q.default)??{},((J=b?.variables)==null?void 0:J.default)??{})})},[b]);const oe=({children:q})=>{var J;return R.createElement("div",{className:_!=="default"?LC(xf(b?.theme[_],((J=b?.variables)==null?void 0:J[_])??{})):""},X&&R.createElement(h7,{appearance:b,supabaseClient:t,providers:l,providerScopes:r,queryParams:o,socialLayout:n,redirectTo:f,onlyThirdPartyProviders:h,i18n:M,view:C}),!h&&q)};k.useEffect(()=>{const{data:q}=t.auth.onAuthStateChange(J=>{J==="PASSWORD_RECOVERY"?D("update_password"):J==="USER_UPDATED"&&D("sign_in")});return D(u),()=>q.subscription.unsubscribe()},[u]);const L={supabaseClient:t,setAuthView:D,defaultEmail:U,defaultPassword:$,setDefaultEmail:j,setDefaultPassword:W,redirectTo:f,magicLink:g,showLinks:p,i18n:M,appearance:b};switch(C){case ut.SIGN_IN:return R.createElement(oe,null,R.createElement(Z0,{...L,authView:"sign_in"}));case ut.SIGN_UP:return R.createElement(oe,null,R.createElement(Z0,{appearance:b,supabaseClient:t,authView:"sign_up",setAuthView:D,defaultEmail:U,defaultPassword:$,setDefaultEmail:j,setDefaultPassword:W,redirectTo:f,magicLink:g,showLinks:p,i18n:M,additionalData:S,children:A}));case ut.FORGOTTEN_PASSWORD:return R.createElement(oe,null,R.createElement(ty,{appearance:b,supabaseClient:t,setAuthView:D,redirectTo:f,showLinks:p,i18n:M}));case ut.MAGIC_LINK:return R.createElement(oe,null,R.createElement(ey,{appearance:b,supabaseClient:t,setAuthView:D,redirectTo:f,showLinks:p,i18n:M}));case ut.UPDATE_PASSWORD:return R.createElement(ay,{appearance:b,supabaseClient:t,i18n:M});case ut.VERIFY_OTP:return R.createElement(p7,{appearance:b,supabaseClient:t,otpType:y,i18n:M});default:return null}}il.ForgottenPassword=ty;il.UpdatePassword=ay;il.MagicLink=ey;il.UserContextProvider=m7;il.useUser=g7;Un({borderRadius:"12px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:"360px",padding:"28px 32px"});const v7=ox("SocialLogin",{web:()=>Mt(()=>import("./web-_MyvMxwe.js"),__vite__mapDeps([7,1])).then(t=>new t.SocialLoginWeb)}),b7=async()=>{if(_t.isNativePlatform())try{const n=(await v7.login({provider:"apple",options:{}})).result;if(n?.idToken){const{data:l,error:r}=await ra.auth.signInWithIdToken({provider:"apple",token:n.idToken});if(r)throw r;return l}else throw new Error("Native Apple Sign-In did not return an ID token.")}catch(t){throw console.error("Native Apple Sign-In failed:",t),t}else return ra.auth.signInWithOAuth({provider:"apple"})},y7="_container_1rhlz_1",K0={container:y7,"apple-button":"_apple-button_1rhlz_9"};function _7(){const t=ze(),[n,l]=k.useState(!1);k.useEffect(()=>{(async()=>{if(_t.isNativePlatform()){const f=await _t.getPlatform();l(f==="ios")}else l(!0)})()},[]),k.useEffect(()=>{if(window.location.hash&&window.location.hash.includes("access_token=")){const u=new URLSearchParams(window.location.hash.substring(1)),f=u.get("access_token"),h=u.get("refresh_token");f&&h&&ra.auth.setSession({access_token:f,refresh_token:h})}},[]);const r=async()=>{try{await b7()}catch(u){console.error("Apple login failed",u)}},o={sign_in:{email_label:t.formatMessage({id:"auth.emailLabel"}),password_label:t.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:t.formatMessage({id:"auth.passwordPlaceholder"}),button_label:t.formatMessage({id:"auth.signInButton"}),social_provider_text:t.formatMessage({id:"auth.signInWithProvider"}),link_text:t.formatMessage({id:"auth.forgotPassword"})},forgotten_password:{email_label:t.formatMessage({id:"auth.emailLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),button_label:t.formatMessage({id:"auth.sendResetInstructions"}),link_text:t.formatMessage({id:"auth.rememberedPassword"})}};return m.jsxs("div",{className:K0.container,children:[n&&m.jsxs(ke,{variant:"default",size:"large",onClick:r,className:K0["apple-button"],children:[m.jsx(rt,{slot:"prefix",name:"apple"}),t.formatMessage({id:"auth.signInWithProviderCustom"},{provider:"Apple"})]}),m.jsx(il,{supabaseClient:ra,appearance:{theme:J1,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname,view:"sign_in",localization:{variables:o},showLinks:!1})]})}const x7="_pageWrapper_vj5zy_1",w7="_pageContent_vj5zy_12",S7="_legalLinks_vj5zy_22",wf={pageWrapper:x7,pageContent:w7,legalLinks:S7};function J0(){return m.jsx("div",{className:wf.pageWrapper,children:m.jsxs("div",{className:wf.pageContent,children:[m.jsx(pn,{}),m.jsx(_7,{}),m.jsxs("div",{className:wf.legalLinks,children:[m.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),m.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const E7="_container_1r3fc_1",hs={container:E7};function C7(){const t=ze(),[n]=Lx(),l=qt(),[r,o]=k.useState(!1),[u,f]=k.useState(null),h={sign_up:{email_label:t.formatMessage({id:"auth.emailLabel"}),password_label:t.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:t.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:t.formatMessage({id:"auth.passwordPlaceholder"}),button_label:t.formatMessage({id:"auth.signUpButton"}),social_provider_text:t.formatMessage({id:"auth.signUpWithProvider"}),link_text:t.formatMessage({id:"auth.alreadyHaveAccount"})}},g=n.get("token"),p=k.useRef(g),b=k.useRef(!1);k.useEffect(()=>{const A=async C=>{if(b.current)return;b.current=!0,o(!0),f(null);const D=p.current;if(!D){console.error("Invite token is missing after sign-in."),o(!1),b.current=!1;return}try{const{error:U}=await ra.functions.invoke("complete-invite",{body:{token:D,newAuthId:C.user.id}});if(U)throw U;l("/invite-success")}catch(U){console.error("Failed to complete the invite process:",U),f(U instanceof Error?U.message:"An unexpected error occurred"),o(!1),b.current=!1}},{data:{subscription:M}}=ra.auth.onAuthStateChange((C,D)=>{(C==="SIGNED_IN"||C==="INITIAL_SESSION")&&D&&A(D)});if(ra.auth.getSession().then(({data:{session:C}})=>{C&&A(C)}),window.location.hash&&window.location.hash.includes("access_token=")){const C=new URLSearchParams(window.location.hash.substring(1)),D=C.get("access_token"),U=C.get("refresh_token");D&&U&&ra.auth.setSession({access_token:D,refresh_token:U})}return()=>M.unsubscribe()},[l]);const{data:_,isLoading:w,isError:y,error:S}=cx({token:g});return g?w||r?m.jsx("div",{className:hs.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.checkingToken"})})}):y?m.jsx("div",{className:hs.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.errorCheckingToken"},{message:S?.message})})}):u?m.jsx("div",{className:hs.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.error"},{message:u})})}):m.jsx("div",{className:hs.container,children:_?.status==="valid"?m.jsx(il,{supabaseClient:ra,appearance:{theme:J1,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google","apple"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname+window.location.search,view:"sign_up",localization:{variables:h},showLinks:!1}):_?.status==="used"?m.jsx("div",{children:m.jsx("p",{children:t.formatMessage({id:"invite.tokenUsed"})})}):m.jsx("div",{children:m.jsx("p",{children:t.formatMessage({id:"invite.invalidToken"})})})}):m.jsx("div",{className:hs.container,children:m.jsx("p",{children:t.formatMessage({id:"invite.noToken"})})})}const T7="_pageWrapper_1smi3_1",A7="_pageContent_1smi3_12",M7="_legalLinks_1smi3_21",Sf={pageWrapper:T7,pageContent:A7,legalLinks:M7};function iy(){return m.jsx("div",{className:Sf.pageWrapper,children:m.jsxs("div",{className:Sf.pageContent,children:[m.jsx(pn,{}),m.jsx(C7,{}),m.jsxs("div",{className:Sf.legalLinks,children:[m.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),m.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const N7="_pageWrapper_1smi3_1",$7="_pageContent_1smi3_12",eb={pageWrapper:N7,pageContent:$7};function ly(){return m.jsxs("div",{className:eb.pageWrapper,children:[m.jsx(pn,{}),m.jsxs("div",{className:eb.pageContent,children:[m.jsx("h1",{children:m.jsx(ae,{id:"invite.success.title"})}),m.jsx("p",{children:m.jsx(ae,{id:"invite.success.message"})}),m.jsx("p",{children:m.jsx(ae,{id:"invite.success.instructions"})}),m.jsx(ke,{variant:"primary",href:"/",children:m.jsx(ae,{id:"common.continue"})})]})]})}var O7=vt`
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
`,k7=0,Ua=class extends st{constructor(){super(...arguments),this.localize=new Ba(this),this.attrId=++k7,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,we`
      <div
        part="base"
        class=${dt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?we`
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
    `}};Ua.styles=[Ot,O7];Ua.dependencies={"sl-icon-button":xt};T([Ze(".tab")],Ua.prototype,"tab",2);T([H({reflect:!0})],Ua.prototype,"panel",2);T([H({type:Boolean,reflect:!0})],Ua.prototype,"active",2);T([H({type:Boolean,reflect:!0})],Ua.prototype,"closable",2);T([H({type:Boolean,reflect:!0})],Ua.prototype,"disabled",2);T([H({type:Number,reflect:!0})],Ua.prototype,"tabIndex",2);T([Ge("active")],Ua.prototype,"handleActiveChange",1);T([Ge("disabled")],Ua.prototype,"handleDisabledChange",1);var R7="sl-tab";Ua.define("sl-tab");var D7=ta({tagName:R7,elementClass:Ua,react:Ft,events:{onSlClose:"sl-close"},displayName:"SlTab"}),tb=D7,z7=vt`
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
`,L7=vt`
  :host {
    display: contents;
  }
`,Bc=class extends st{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const n=t.assignedElements({flatten:!0});this.observedElements.forEach(l=>this.resizeObserver.unobserve(l)),this.observedElements=[],n.forEach(l=>{this.resizeObserver.observe(l),this.observedElements.push(l)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return we` <slot @slotchange=${this.handleSlotChange}></slot> `}};Bc.styles=[Ot,L7];T([H({type:Boolean,reflect:!0})],Bc.prototype,"disabled",2);T([Ge("disabled",{waitUntilFirstUpdate:!0})],Bc.prototype,"handleDisabledChange",1);var Rt=class extends st{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Ba(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(n=>{const l=n.filter(({target:r})=>{if(r===this)return!0;if(r.closest("sl-tab-group")!==this)return!1;const o=r.tagName.toLowerCase();return o==="sl-tab"||o==="sl-tab-panel"});if(l.length!==0){if(l.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),l.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(l.some(r=>r.attributeName==="active")){const o=l.filter(u=>u.attributeName==="active"&&u.target.tagName.toLowerCase()==="sl-tab").map(u=>u.target).find(u=>u.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((l,r)=>{var o;l[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),r.unobserve(l[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,n;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((n=this.resizeObserver)==null||n.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const l=t.target.closest("sl-tab");l?.closest("sl-tab-group")===this&&l!==null&&this.setActiveTab(l,{scrollBehavior:"smooth"})}handleKeyDown(t){const l=t.target.closest("sl-tab");if(l?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&l!==null&&(this.setActiveTab(l,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(h=>h.matches(":focus")),u=this.localize.dir()==="rtl";let f=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")f=this.focusableTabs[0];else if(t.key==="End")f=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(u?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const h=this.tabs.findIndex(g=>g===o);f=this.findNextFocusableTab(h,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(u?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const h=this.tabs.findIndex(g=>g===o);f=this.findNextFocusableTab(h,"forward")}if(!f)return;f.tabIndex=0,f.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(f,{scrollBehavior:"smooth"}):this.tabs.forEach(h=>{h.tabIndex=h===f?0:-1}),["top","bottom"].includes(this.placement)&&Qf(f,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,n){if(n=_i({emitEvents:!0,scrollBehavior:"auto"},n),t!==this.activeTab&&!t.disabled){const l=this.activeTab;this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var o;return r.active=r.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Qf(this.activeTab,this.nav,"horizontal",n.scrollBehavior),n.emitEvents&&(l&&this.emit("sl-tab-hide",{detail:{name:l.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const n=this.panels.find(l=>l.name===t.panel);n&&(t.setAttribute("aria-controls",n.getAttribute("id")),n.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const n=t.clientWidth,l=t.clientHeight,r=this.localize.dir()==="rtl",o=this.getAllTabs(),f=o.slice(0,o.indexOf(t)).reduce((h,g)=>({left:h.left+g.clientWidth,top:h.top+g.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${n}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*f.left}px`:`${f.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${l}px`,this.indicator.style.translate=`0 ${f.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,n){let l=null;const r=n==="forward"?1:-1;let o=t+r;for(;t<this.tabs.length;){if(l=this.tabs[o]||null,l===null){n==="forward"?l=this.focusableTabs[0]:l=this.focusableTabs[this.focusableTabs.length-1];break}if(!l.disabled)break;o+=r}return l}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const n=this.tabs.find(l=>l.panel===t);n&&this.setActiveTab(n,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return we`
      <div
        part="base"
        class=${dt({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?we`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${dt({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?we`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${dt({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Rt.styles=[Ot,z7];Rt.dependencies={"sl-icon-button":xt,"sl-resize-observer":Bc};T([Ze(".tab-group")],Rt.prototype,"tabGroup",2);T([Ze(".tab-group__body")],Rt.prototype,"body",2);T([Ze(".tab-group__nav")],Rt.prototype,"nav",2);T([Ze(".tab-group__indicator")],Rt.prototype,"indicator",2);T([ft()],Rt.prototype,"hasScrollControls",2);T([ft()],Rt.prototype,"shouldHideScrollStartButton",2);T([ft()],Rt.prototype,"shouldHideScrollEndButton",2);T([H()],Rt.prototype,"placement",2);T([H()],Rt.prototype,"activation",2);T([H({attribute:"no-scroll-controls",type:Boolean})],Rt.prototype,"noScrollControls",2);T([H({attribute:"fixed-scroll-controls",type:Boolean})],Rt.prototype,"fixedScrollControls",2);T([Zb({passive:!0})],Rt.prototype,"updateScrollButtons",1);T([Ge("noScrollControls",{waitUntilFirstUpdate:!0})],Rt.prototype,"updateScrollControls",1);T([Ge("placement",{waitUntilFirstUpdate:!0})],Rt.prototype,"syncIndicator",1);var j7="sl-tab-group";Rt.define("sl-tab-group");var B7=ta({tagName:j7,elementClass:Rt,react:Ft,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),H7=B7,U7=(t,n)=>{let l=0;return function(...r){window.clearTimeout(l),l=window.setTimeout(()=>{t.call(this,...r)},n)}},ab=(t,n,l)=>{const r=t[n];t[n]=function(...o){r.call(this,...o),l.call(this,r,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const n=new Set,l=new WeakMap,r=u=>{for(const f of u.changedTouches)n.add(f.identifier)},o=u=>{for(const f of u.changedTouches)n.delete(f.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),ab(EventTarget.prototype,"addEventListener",function(u,f){if(f!=="scrollend")return;const h=U7(()=>{n.size?h():this.dispatchEvent(new Event("scrollend"))},100);u.call(this,"scroll",h,{passive:!0}),l.set(this,h)}),ab(EventTarget.prototype,"removeEventListener",function(u,f){if(f!=="scrollend")return;const h=l.get(this);h&&u.call(this,"scroll",h,{passive:!0})})}})();const I7="_shell_fdhcs_1",P7="_content_fdhcs_12",V7="_footer_fdhcs_17",F7="_tabContent_fdhcs_47",ps={shell:I7,content:P7,footer:V7,tabContent:F7};function q7({children:t}){const n=qt(),l=wc(),r=k.useRef(null);k.useEffect(()=>{r.current&&r.current.show(l.pathname)},[l.pathname]);const o=u=>{n(u.detail.name)};return m.jsxs("div",{className:ps.shell,children:[m.jsx("main",{className:ps.content,children:t}),m.jsx("footer",{className:ps.footer,children:m.jsxs(H7,{ref:r,placement:"bottom",onSlTabShow:o,children:[m.jsx(tb,{slot:"nav",panel:"/stable",active:l.pathname==="/stable",onClick:()=>l.pathname!=="/stable"&&n("/stable"),role:"tab",children:m.jsx("div",{className:ps.tabContent,children:m.jsx(rt,{src:"/assets/stables.svg"})})}),m.jsx(tb,{slot:"nav",panel:"/horse",active:l.pathname==="/horse",onClick:()=>l.pathname!=="/horse"&&n("/horse"),role:"tab",children:m.jsx("div",{className:ps.tabContent,children:m.jsx(rt,{src:"/assets/horses.svg"})})})]})})]})}const xc={"auth.login.title":"Login","auth.signup.title":"Sign up","roster.header.date":"Date","roster.emptySlot":"Tap to assign","roster.edit.drawerLabel":"Edit Roster for {slotName}","roster.edit.assignedHeader":"Assigned:","roster.edit.unassignedHeader":"Available to Add","roster.edit.selectMemberPlaceholder":"Select stable buddy","roster.edit.emptyState":"Nobody assigned.","roster.shareWeekLabel":"Share week","shell.tab.roster":"Roster","shell.tab.profile":"Profile","shell.tab.users":"Friends","profile.header.title":"Profile","profile.logout":"Logout","profile.info":"Info","share.rosterTitle":"Stable Roster","share.rosterText":"Check out this week's roster!","common.save":"Save","common.cancel":"Cancel","common.remove":"Remove","roster.loadPrevious":"Load previous weeks","roster.loadNext":"Load next weeks","roster.weekOf":"Week of {date}","roster.previousWeek":"Previous week","roster.nextWeek":"Next week","roster.selfAssignment.title":"Update Shift","roster.confirmAddSelf":"Do you want to add yourself to this shift?","roster.confirmRemoveSelf":"Do you want to REMOVE yourself from this shift?","auth.emailLabel":"Email address","auth.passwordLabel":"Password","auth.emailPlaceholder":"Your email address","auth.passwordPlaceholder":"Your password","auth.signInButton":"Sign in","auth.signInWithProvider":"Sign in with '{{provider}}'","auth.signInWithProviderCustom":"Sign in with {provider}","auth.signUpButton":"Sign up","auth.signUpWithProvider":"Sign up with '{{provider}}'","auth.alreadyHaveAccount":"Already have an account? Sign in","auth.forgotPassword":"Forgot your password?","auth.sendResetInstructions":"Send reset instructions","auth.rememberedPassword":"Remember your password? Sign in","manageUsers.you":"You","manageUsers.inviteUser":"Invite user","manageUsers.loading":"Loading users...","manageUsers.error":"Error loading users: {message}","manageUsers.removeUser":"Remove user","manageUsers.removeConfirmation":"Are you sure you want to remove {username} from this organization?","manageHorses.yours":"Yours","manageUsers.editUser":"Edit Stable buddy","manageHorses.editHorse":"Edit horse","manageHorses.assignOwner":"Assign Owner","manageHorses.selectOwner":"Select Owner","manageHorses.loading":"Loading horses...","manageHorses.error":"Error loading horses: {message}","manageHorses.removeHorse":"Remove horse","manageHorses.removeConfirmation":"Are you sure you want to remove {horseName} It will completely erase everything about this horse from the system!?","manageHorses.addHorse":"Add Horse","manageHorses.noHorsesFound":"No horses found that are boarded at this location","manageUsers.addUser":"Add Stable Buddy","users.firstNameLabel":"First Name","users.lastNameLabel":"Last Name","horses.nameLabel":"Name","users.fullNameLabel":"Full Name","horses.officialNameLabel":"Official Name","horses.ownerLabel":"Owner","horses.chipNumberLabel":"Transponder (chip) Number","horses.uelnLabel":"Life Number (UELN)","users.languageLabel":"Language","users.nicknameLabel":"Nickname","users.roleLabel":"Role","users.isRosterableLabel":"Can be assigned to roster","organization.role.owner":"Stable owner","organization.role.admin":"Stable admin","organization.role.member":"Stable buddy","common.language.dutch":"Dutch","common.language.english":"English","horses.noMembersFound":"No stable buddies found in this stable","common.close":"Close","invite.checkingToken":"Checking invite token...","invite.noToken":"No invite token found in the URL.","invite.invalidToken":"The invite token is invalid or has expired.","invite.tokenUsed":"This invite token has already been used.","invite.errorCheckingToken":"An error occurred while checking the invite token: {message}","invite.goToLogin":"Go to Login","invite.share.title":"Invite to Is My Horse","invite.share.text":"You've been invited to join our stable on Is My Horse. Sign up here:","invite.share.error":"Could not create invite link. Please try again.","invite.success.title":"Signup Successful!","invite.success.message":"Your account has been successfully created! From now on you can log in with the account you just created.","invite.success.instructions":"Click the button below to go to the start page of the app","invite.success.login":"Log in","dashboard.roster.title":"Rosters","dashboard.roster.description":"Rosters for e.g. stable duty","shell.tab.dashboard":"Dashboard","dashboard.members.title":"Stable buddies","dashboard.members.description":"People who are connected to the stable","dashboard.horses.title":"Horses","dashboard.horses.description":"Horses boarded here","dashboard.horses.count":"({count})","dashboard.facilities.title":"Facilities","dashboard.facilities.description":"to reserve things like an arena","navigation.back":"Back","dashboard.myHorses.title":"My Horses","dashboard.myHorses.description":"My own horses","dashboard.relatedHorses.title":"From Stable Buddies","dashboard.relatedHorses.description":"Horses of others at the stable","dashboard.following.title":"Following","dashboard.following.description":"Other horses I follow","invite.noProfile.title":"Account Not Fully Activated","invite.noProfile.message":"This is an invite-only beta. Your account must be linked to an invitation to proceed. If you have an invite link, please use it to sign up.","common.continue":"Continue","Initial ownership set by stable admin.":"This horse has been created by the stable owner and assigned to you.","dashboard.myHorses.acceptOwnershipQuestion":"Is {horseName} indeed your horse?","common.yes":"Yes","common.no":"No","ownershipTransfer.status.pending":"pending","ownershipTransfer.status.accepted":"accepted","ownershipTransfer.status.rejected":"rejected","ownershipTransfer.status.cancelled":"cancelled","validation.required":"This field is required.","validation.uelnInvalid":"UELN must be exactly 15 characters long.","validation.chipOrUelnRequired":"Please provide either a Chip Number or a UELN.","horses.scanBarcode":"Scan Barcode","validation.emailInvalid":"Please enter a valid email address.","validation.ageMinimum":"User must be at least 13 years old.","gender.other":"Other / Prefer not to say","gender.male":"Male","gender.female":"Female","users.genderLabel":"Gender","horses.dateOfBirthLabel":"Date of Birth","horses.genderLabel":"Gender","gender.stallion":"Stallion","gender.mare":"Mare","gender.gelding":"Gelding","horses.countryOfBirthLabel":"Country of Birth","horses.passportNumberLabel":"Passport Number","horses.colorLabel":"Color","horses.breedStudbookLabel":"Breed/Studbook","horses.markingsLabel":"Markings","horses.chipLocationLabel":"Transponder Location","users.dateOfBirthLabel":"Date of Birth","users.cityLabel":"City","users.countryLabel":"Country","profile.notFound":"Profile not found.","profile.NoDisplayName":"No profile name","organization.cocLabel":"Chamber of Commerce","common.notSet":"not set","profile.privacyNotification":"Only you and the stable admin of {organizationName} ({adminName}) can see this information.","profile.stable.member":"Stable buddy at {organizationName} (as {nickName})","profile.stable.admin":"Admin at {organizationName} (as {nickName})","profile.stable.owner":"Owner of {organizationName} (as {nickName})","profile.organization.location":"Stable in {city}","profile.privacyNotification.organization":"Only visible to you.","profile.privacyNotification.user":"Only you and the admins of the stables you are a member of can see this information.","profile.edit.title":"Edit Profile Name","profile.edit.nameLabel":"Profile Name","profile.edit.info":"Edit Profile","profile.postUpdate":"Post","profile.follow":"Follow","profile.unfollow":"Unfollow","profile.followers":"{count} followers","user.edit.title":"Edit Profile","user.edit.success":"Profile updated successfully.","horse.edit.title":"Edit Horse Info","horse.edit.success":"Horse updated successfully.","organization.edit.title":"Edit Organization","organization.nameLabel":"Name","organization.cityLabel":"City","avatar.editor.title":"Edit Profile Picture","avatar.editor.zoom":"Zoom","manageTeam.title":"Manage Team","manageTeam.stableOwner":"Stable Owner","manageTeam.team":"Team","manageTeam.organizationTeam":"Team {organizationName}","manageTeam.followers":"Followers","manageTeam.noTeam":"No team members yet.","manageTeam.noFollowers":"No followers found.","manageTeam.demoteTitle":"Remove from Team?","manageTeam.demoteWarning":"Are you sure you want to remove this user from the team? They will lose access to restricted posts.","roles.owner":"Owner","roles.co_owner":"Co-owner","roles.rider":"Rider/Leaser","roles.groom":"Groom","roles.instructor":"Instructor","roles.medical":"Vet/Medical","roles.farrier":"Farrier","roles.stable_owner":"Stable Owner","roles.stable_groom":"Stable Groom","roles.follower":"Follower (Remove from team)","roles.follower_only":"Follower","manageTeam.buttonLabel":"Team"},G7=Object.freeze(Object.defineProperty({__proto__:null,default:xc},Symbol.toStringTag,{value:"Module"})),Y7="_panel_1nlou_1",X7="_panelContent_1nlou_17",W7="_icon_1nlou_23",Q7="_content_1nlou_31",Z7="_textContent_1nlou_40",K7="_quickAction_1nlou_56",J7="_chevron_1nlou_65",e8="_lime_1nlou_73",t8="_sky_1nlou_76",a8="_rose_1nlou_79",n8="_brown_1nlou_82",di={panel:Y7,panelContent:X7,icon:W7,content:Q7,textContent:Z7,quickAction:K7,chevron:J7,lime:e8,sky:t8,rose:a8,brown:n8};function ll({icon:t,title:n,description:l,link:r,variant:o="lime",quickAction:u}){const f=r?"a":"div",h=g=>{g.stopPropagation()};return m.jsxs(f,{href:r,className:`${di.panel} ${di[o]}`,onClick:g=>!r&&g.preventDefault(),children:[m.jsxs("div",{className:di.panelContent,children:[m.jsx("div",{className:di.icon,children:t}),m.jsx("div",{className:di.content,children:m.jsxs("div",{className:di.textContent,children:[m.jsx("strong",{children:n}),l&&m.jsx("span",{children:l})]})}),r&&m.jsx("div",{className:di.chevron,children:m.jsx(rt,{name:"chevron-right"})})]}),u&&m.jsx("div",{className:di.quickAction,onClick:h,children:u})]})}const i8="_rosterLinks_1um2j_1",l8="_rosterLink_1um2j_1",nb={rosterLinks:i8,rosterLink:l8};function r8({organization_id:t}){const n=ze(),{data:l}=ux({organizationId:t});return m.jsx(ll,{variant:"sky",icon:m.jsx(rt,{name:"calendar"}),title:n.formatMessage({id:"dashboard.roster.title"}),description:n.formatMessage({id:"dashboard.roster.description"}),quickAction:l&&m.jsx("div",{className:nb.rosterLinks,children:l.map(r=>m.jsxs(Dx,{to:`/stable/${t}/roster/${r.id}`,className:nb.rosterLink,children:[m.jsx(rt,{name:"calendar-date"}),m.jsx("span",{children:r.name})]},r.id))})})}const s8="_quickAction_kr3qy_1",o8="_avatarStack_kr3qy_7",ib={quickAction:s8,avatarStack:o8};function c8({organization_id:t}){const n=ze(),{data:l}=nh({organizationId:t,enabled:!!t}),r=l?m.jsxs("div",{className:ib.quickAction,children:[m.jsx("div",{className:ib.avatarStack,children:l.slice(0,8).map(o=>{const u=[o.user_profiles?.firstname,o.user_profiles?.lastname].filter(Boolean).join(" ")||o.nickname||"";return m.jsx(gt,{image:o.user_profiles?.social_profiles?.avatar_url,name:u},o.id)})}),m.jsxs("span",{children:["(",l.length,")"]})]}):null;return m.jsx(ll,{variant:"rose",icon:m.jsx(rt,{name:"people"}),title:n.formatMessage({id:"dashboard.members.title"}),description:n.formatMessage({id:"dashboard.members.description"}),link:`/stable/${t}/members`,quickAction:r})}const u8="_quickAction_1euwo_1",d8="_avatarStack_1euwo_7",lb={quickAction:u8,avatarStack:d8},{useOrganizationHorses:f8}=await Mt(async()=>{const{useOrganizationHorses:t}=await import("./index-Pvm2jerx.js").then(n=>n.aT);return{useOrganizationHorses:t}},[]);function h8({organization_id:t}){const n=ze(),{data:l}=f8({organizationId:t,enabled:!!t}),r=l?m.jsxs("div",{className:lb.quickAction,children:[m.jsx("div",{className:lb.avatarStack,children:l.slice(0,8).map(o=>m.jsx(gt,{image:o.social_profiles?.avatar_url,name:o.name},o.id))}),m.jsxs("span",{children:["(",l.length,")"]})]}):null;return m.jsx(ll,{variant:"brown",icon:m.jsx(rt,{src:"assets/stables.svg"}),title:n.formatMessage({id:"dashboard.horses.title"}),link:`/stable/${t}/horses`,description:n.formatMessage({id:"dashboard.horses.description"}),quickAction:r})}function p8(){const t=ze();return m.jsx(ll,{variant:"lime",icon:m.jsx(rt,{name:"bookmark-plus"}),title:t.formatMessage({id:"dashboard.facilities.title"}),description:t.formatMessage({id:"dashboard.facilities.description"})})}const m8="_pageWrapper_1ek55_1",g8="_pageContent_1ek55_10",v8="_profileAction_1ek55_19",b8="_profileAvatar_1ek55_25",nc={pageWrapper:m8,pageContent:g8,profileAction:v8,profileAvatar:b8};function y8(){const t=qt(),{data:n,isLoading:l}=yb({enabled:!0}),{data:r}=hn({enabled:!0});return m.jsxs("div",{className:nc.pageWrapper,children:[m.jsx(pn,{headerActions:m.jsx("div",{onClick:()=>t("/profile/me"),className:nc.profileAction,role:"button",tabIndex:0,children:m.jsx(gt,{image:r?.social_profiles?.avatar_url,name:r?.firstname??"",className:nc.profileAvatar})})}),m.jsxs("div",{className:nc.pageContent,children:[l&&m.jsx("div",{children:"Loading..."}),n&&m.jsxs(m.Fragment,{children:[m.jsx(r8,{organization_id:n.id}),m.jsx(c8,{organization_id:n.id}),m.jsx(h8,{organization_id:n.id}),m.jsx(p8,{})]})]})]})}const _8="_horseList_12cxl_1",x8="_horseEntry_12cxl_8",w8="_horseItem_12cxl_18",S8="_horseInfo_12cxl_24",E8="_horseName_12cxl_30",C8="_officialName_12cxl_34",T8="_buttonGroup_12cxl_40",A8="_pendingActions_12cxl_46",M8="_divider_12cxl_52",N8="_notes_12cxl_58",$8="_question_12cxl_64",O8="_acceptButton_12cxl_68",k8="_rejectButton_12cxl_73",R8="_teamButton_12cxl_78",la={horseList:_8,horseEntry:x8,horseItem:w8,horseInfo:S8,horseName:E8,officialName:C8,buttonGroup:T8,pendingActions:A8,divider:M8,notes:N8,question:$8,acceptButton:O8,rejectButton:k8,teamButton:R8},{useCurrentUserProfile:D8,useUserHorses:z8,usePendingHorseOwnershipTransfers:L8,useUpdateHorseOwnershipTransfer:j8}=await Mt(async()=>{const{useCurrentUserProfile:t,useUserHorses:n,usePendingHorseOwnershipTransfers:l,useUpdateHorseOwnershipTransfer:r}=await import("./index-Pvm2jerx.js").then(o=>o.aT);return{useCurrentUserProfile:t,useUserHorses:n,usePendingHorseOwnershipTransfers:l,useUpdateHorseOwnershipTransfer:r}},[]);function B8(){const t=ze(),n=qt(),{data:l}=D8({enabled:!0}),r=j8(),{data:o}=z8({userId:l?.id,enabled:!!l?.id}),{data:u}=L8({userId:l?.id,enabled:!!l?.id}),f=new Set(u?.map(y=>y.horse_id)),h=o?.filter(y=>!f.has(y.id))||[],g=y=>u?.find(S=>S.horse_id===y),p=(y,S)=>{l?.id&&r.mutate({transferId:y,status:S})},b=y=>r.isPending&&r.variables?.transferId===y,_=[...h,...u?.map(y=>y.horses).filter(Boolean)||[]],w=_.length>0?m.jsx("div",{className:la.horseList,children:_.map(y=>{if(!y)return null;const S=g(y.id),A=!!S,M=S?.notes;return m.jsxs("div",{className:la.horseEntry,children:[m.jsxs("div",{className:la.horseItem,onClick:()=>n(`/profile/${y.social_profile_id}`),role:"button",tabIndex:0,onKeyDown:C=>{(C.key==="Enter"||C.key===" ")&&n(`/profile/${y.social_profile_id}`)},children:[m.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:m.jsx(gt,{image:y.social_profiles?.avatar_url,name:y.name})}),m.jsxs("div",{className:la.horseInfo,children:[m.jsx("span",{className:la.horseName,children:y.name}),y.official_name&&m.jsx("span",{className:la.officialName,children:y.official_name})]}),m.jsx(rt,{name:"chevron-right"})]}),m.jsx("hr",{className:la.divider}),A?m.jsxs("div",{className:la.pendingActions,children:[M&&m.jsx("p",{className:la.notes,children:m.jsx(ae,{id:M,defaultMessage:M})}),m.jsx("p",{className:la.question,children:m.jsx(ae,{id:"dashboard.myHorses.acceptOwnershipQuestion",values:{horseName:y.name}})}),m.jsxs("div",{className:la.buttonGroup,children:[m.jsxs(ke,{size:"small",className:la.acceptButton,onClick:()=>p(S.id,"accepted"),loading:b(S.id),disabled:b(S.id),children:[m.jsx(rt,{slot:"prefix",name:"check-lg"}),m.jsx(ae,{id:"common.yes",defaultMessage:"Yes"})]}),m.jsxs(ke,{size:"small",className:la.rejectButton,onClick:()=>p(S.id,"rejected"),loading:b(S.id),disabled:b(S.id),children:[m.jsx(rt,{slot:"prefix",name:"x-lg"}),m.jsx(ae,{id:"common.no",defaultMessage:"No"})]})]})]}):m.jsxs(ke,{size:"small",className:la.teamButton,onClick:C=>{C.stopPropagation(),n(`/horse/${y.id}/team`)},children:[m.jsx(rt,{slot:"prefix",name:"people"}),m.jsx(ae,{id:"manageTeam.buttonLabel",defaultMessage:"Team"})]})]},y.id)})}):null;return m.jsx(ll,{variant:"brown",icon:m.jsx(rt,{src:"assets/horses.svg"}),title:t.formatMessage({id:"dashboard.myHorses.title"}),description:t.formatMessage({id:"dashboard.myHorses.description"}),quickAction:w})}function H8(){const t=ze();return m.jsx(ll,{variant:"rose",icon:m.jsx(rt,{name:"people"}),title:t.formatMessage({id:"dashboard.relatedHorses.title"}),description:t.formatMessage({id:"dashboard.relatedHorses.description"})})}function U8(){const t=ze();return m.jsx(ll,{variant:"lime",icon:m.jsx(rt,{name:"eye"}),title:t.formatMessage({id:"dashboard.following.title"}),description:t.formatMessage({id:"dashboard.following.description"})})}const I8="_pageWrapper_1sr2a_1",P8="_pageContent_1sr2a_10",V8="_profileAction_1sr2a_19",F8="_profileAvatar_1sr2a_25",ic={pageWrapper:I8,pageContent:P8,profileAction:V8,profileAvatar:F8};function q8(){const t=qt(),{data:n}=hn({enabled:!0});return m.jsxs("div",{className:ic.pageWrapper,children:[m.jsx(pn,{headerActions:m.jsx("div",{onClick:()=>t("/profile/me"),className:ic.profileAction,role:"button",tabIndex:0,children:m.jsx(gt,{image:n?.social_profiles?.avatar_url,name:n?.firstname??"",className:ic.profileAvatar})})}),m.jsxs("div",{className:ic.pageContent,children:[m.jsx(B8,{}),m.jsx(H8,{}),m.jsx(U8,{})]})]})}var G8=vt`
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
`,Ut=class extends st{constructor(){super(...arguments),this.formControlController=new Cs(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,n)=>t.checked=n}),this.hasSlotController=new tl(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),n=this.helpText?!0:!!t;return we`
      <div
        class=${dt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":n})}
      >
        <label
          part="base"
          class=${dt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ve(this.value)}
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
          aria-hidden=${n?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ut.styles=[Ot,Oc,G8];T([Ze('input[type="checkbox"]')],Ut.prototype,"input",2);T([ft()],Ut.prototype,"hasFocus",2);T([H()],Ut.prototype,"title",2);T([H()],Ut.prototype,"name",2);T([H()],Ut.prototype,"value",2);T([H({reflect:!0})],Ut.prototype,"size",2);T([H({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);T([H({type:Boolean,reflect:!0})],Ut.prototype,"checked",2);T([Dh("checked")],Ut.prototype,"defaultChecked",2);T([H({reflect:!0})],Ut.prototype,"form",2);T([H({type:Boolean,reflect:!0})],Ut.prototype,"required",2);T([H({attribute:"help-text"})],Ut.prototype,"helpText",2);T([Ge("checked",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleCheckedChange",1);T([Ge("disabled",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleDisabledChange",1);var Y8="sl-switch";Ut.define("sl-switch");var X8=ta({tagName:Y8,elementClass:Ut,react:Ft,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"}),ry=X8;const W8="_container_1vojo_1",Q8="_userListItem_1vojo_14",Z8="_clickable_1vojo_25",K8="_userInfo_1vojo_34",J8="_nameContainer_1vojo_40",eT="_nickname_1vojo_45",tT="_fullName_1vojo_49",aT="_youIndicator_1vojo_55",nT="_iconGroup_1vojo_62",iT="_removeButton_1vojo_68",lT="_editForm_1vojo_72",rT="_switchRow_1vojo_79",sT="_switchLabel_1vojo_85",Zt={container:W8,"user-list":"_user-list_1vojo_5",userListItem:Q8,clickable:Z8,userInfo:K8,nameContainer:J8,nickname:eT,fullName:tT,youIndicator:aT,iconGroup:nT,removeButton:iT,editForm:lT,switchRow:rT,switchLabel:sT};function oT({organizationId:t}){const{data:n}=hn({enabled:!0}),{formatMessage:l}=ze(),{data:r}=ih({organizationId:t,enabled:!!t}),o=qt(),[u,f]=k.useState(!1),[h,g]=k.useState(null),[p,b]=k.useState(""),[_,w]=k.useState("member"),[y,S]=k.useState(!1),A=dx(),M=fx(),{data:C,isLoading:D,isError:U,error:j}=nh({organizationId:t,enabled:!!t}),$=k.useMemo(()=>(C??[]).slice().sort((Q,le)=>(Q.nickname??"").localeCompare(le.nickname??"")),[C]),W=k.useCallback(async Q=>{const le=l({id:"manageUsers.removeConfirmation",defaultMessage:"Are you sure you want to remove {username} from this organization?"},{username:Q.user_profiles?.firstname||Q.nickname||"this user"});window.confirm(le)&&await A.mutateAsync({organizationId:t??"",userProfileId:Q.user_profile_id})},[l,t,A]),X=Q=>{g(Q),b(Q.nickname??""),w(Q.role),S(Q.is_rosterable??!1),f(!0)},oe=()=>{f(!1),g(null)},L=async()=>{if(h)try{await M.mutateAsync({organizationId:t??"",userProfileId:h.user_profile_id,nickname:p,role:_,is_rosterable:y}),oe()}catch(Q){console.error("Failed to update user:",Q)}},q=[{value:"admin",labelId:"organization.role.admin"},{value:"member",labelId:"organization.role.member"}],J=l({id:"manageUsers.inviteUser",defaultMessage:"Invite user"}),ne=({user:Q})=>{const{formatMessage:le}=ze(),{mutate:te,isPending:I}=hx({mutationFn:()=>px(Q.user_profile_id),onSuccess:async Z=>{const ee=le({id:"invite.share.title",defaultMessage:"Invite to Is My Horse"}),ce=le({id:"invite.share.text",defaultMessage:"You've been invited to join our stable on Is My Horse. Sign up here:"});await B4(`/invite?token=${Z}`,ee,ce,J)},onError:Z=>{console.error("Failed to generate invite link:",Z);let ce=Z?.context?.error?.message;ce||(Z instanceof Error||typeof Z=="object"&&Z!==null&&"message"in Z)&&(ce=Z.message),alert(le({id:"invite.share.error",defaultMessage:"Could not create invite link. Please try again."})+`

Details: ${ce}`)}});return I?m.jsx(X1,{style:{fontSize:"1rem"}}):m.jsx($t,{label:J,name:"envelope",onClick:()=>te()})};return m.jsxs("div",{className:Zt.container,children:[m.jsx("ul",{className:Zt["user-list"],children:$.map(Q=>m.jsxs("li",{className:`${Zt.userListItem} ${Q.user_profiles?.social_profile_id?Zt.clickable:""}`,onClick:()=>{Q.user_profiles?.social_profile_id&&o(`/profile/${Q.user_profiles?.social_profile_id}`)},children:[m.jsxs("div",{className:Zt.userInfo,children:[m.jsx(gt,{image:Q.user_profiles?.social_profiles?.avatar_url,name:Q.nickname??"",className:Zt.avatar}),m.jsxs("div",{className:Zt.nameContainer,children:[m.jsxs("span",{className:Zt.nickname,children:[Q.nickname,Q.user_profiles?.auth_user_id===n?.auth_user_id&&m.jsxs("span",{className:Zt.youIndicator,children:[" ","(",m.jsx(ae,{id:"manageUsers.you",defaultMessage:"You"}),")"]})]}),m.jsxs("span",{className:Zt.fullName,children:[Q.user_profiles?.firstname," ",Q.user_profiles?.lastname]})]})]}),m.jsxs("div",{className:Zt.iconGroup,onClick:le=>le.stopPropagation(),children:[(r==="admin"||r==="owner")&&m.jsx($t,{label:l({id:"manageUsers.editUser"}),name:"pencil",onClick:()=>X(Q)}),(r==="admin"||r==="owner")&&Q.user_profiles?.auth_user_id!==n?.auth_user_id&&m.jsxs(m.Fragment,{children:[!Q.user_profiles?.auth_user_id&&m.jsx(ne,{user:Q}),m.jsx($t,{className:Zt.removeButton,label:l({id:"manageUsers.removeUser",defaultMessage:"Remove user"}),name:"trash",onClick:()=>W(Q)})]})]})]},Q.id))}),D&&m.jsx("p",{children:m.jsx(ae,{id:"manageUsers.loading",defaultMessage:"Loading users..."})}),U&&m.jsx("p",{children:m.jsx(ae,{id:"manageUsers.error",defaultMessage:"Error loading users: {message}",values:{message:j?.message}})}),m.jsxs($s,{label:l({id:"manageUsers.editUser"}),open:u,onSlAfterHide:oe,children:[m.jsxs("div",{className:Zt.editForm,children:[m.jsx(Ee,{label:l({id:"users.fullNameLabel"}),value:`${h?.user_profiles?.firstname??""} ${h?.user_profiles?.lastname??""}`,disabled:!0}),m.jsx(Ee,{label:l({id:"users.nicknameLabel"}),value:p,onSlInput:Q=>b(Q.target.value)}),h?.role==="owner"?m.jsx(Ee,{label:l({id:"users.roleLabel"}),value:l({id:"organization.role.owner"}),disabled:!0}):m.jsx(ea,{label:l({id:"users.roleLabel"}),value:_,onSlAfterHide:Q=>{Q.stopPropagation()},onSlChange:Q=>w(Q.target.value),children:q.map(Q=>m.jsx(je,{value:Q.value,children:l({id:Q.labelId})},Q.value))}),m.jsxs("div",{className:Zt.switchRow,children:[m.jsx("span",{className:Zt.switchLabel,children:l({id:"users.isRosterableLabel"})}),m.jsx(ry,{checked:y,onSlChange:Q=>S(Q.target.checked)})]})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:L,loading:M.isPending,children:m.jsx(ae,{id:"common.save"})}),m.jsx(ke,{slot:"footer",onClick:oe,children:m.jsx(ae,{id:"common.cancel"})})]})]})}const cT="_addUserDrawer_4mi60_1",uT="_formContent_4mi60_33",rb={addUserDrawer:cT,formContent:uT},{useAddUserToStable:dT,useUserOrganization:fT}=await Mt(async()=>{const{useAddUserToStable:t,useUserOrganization:n}=await import("./index-Pvm2jerx.js").then(l=>l.aT);return{useAddUserToStable:t,useUserOrganization:n}},[]);function hT({isOpen:t,onClose:n,onSaveSuccess:l}){const r=ze(),{data:o}=fT({enabled:t}),u=dT(),[f,h]=k.useState(""),[g,p]=k.useState(""),[b,_]=k.useState(""),[w,y]=k.useState("member"),[S,A]=k.useState(!1),[M,C]=k.useState({}),D=[{value:"admin",labelId:"organization.role.admin"},{value:"member",labelId:"organization.role.member"}];k.useEffect(()=>{t||U()},[t]);const U=()=>{h(""),p(""),_(""),y("member"),A(!1),C({})},j=()=>{U(),n()},$=()=>{const X={},oe=r.formatMessage({id:"validation.required"});return f.trim()||(X.firstname=oe),g.trim()||(X.lastname=oe),w||(X.role=oe),C(X),Object.keys(X).length===0},W=async()=>{if(!(!$()||!o?.id))try{await u.mutateAsync({organization_id:o.id,firstname:f,lastname:g,nickname:b||f,role:w,is_rosterable:S,locale:r.locale}),l?.(),n()}catch(X){console.error("Failed to add user:",X)}};return m.jsxs(mn,{label:r.formatMessage({id:"manageUsers.addUser"}),placement:"end",open:t,onSlAfterHide:j,className:rb.addUserDrawer,children:[m.jsxs("div",{className:rb.formContent,children:[m.jsx(Ee,{"data-testid":"firstname-input",label:r.formatMessage({id:"users.firstNameLabel"}),value:f,onSlInput:X=>h(X.target.value),required:!0,helpText:M.firstname}),m.jsx(Ee,{"data-testid":"lastname-input",label:r.formatMessage({id:"users.lastNameLabel"}),value:g,onSlInput:X=>p(X.target.value),required:!0,helpText:M.lastname}),m.jsx(Ee,{"data-testid":"nickname-input",label:r.formatMessage({id:"users.nicknameLabel"}),value:b,onSlInput:X=>_(X.target.value)}),m.jsx(ea,{"data-testid":"role-select",label:r.formatMessage({id:"users.roleLabel"}),value:w,onSlChange:X=>y(X.target.value),onSlAfterHide:X=>{X.stopPropagation()},required:!0,helpText:M.role,children:D.map(X=>m.jsx(je,{value:X.value,children:r.formatMessage({id:X.labelId})},X.value))}),m.jsx(ry,{"data-testid":"rosterable-switch",checked:S,onSlChange:X=>A(X.target.checked),children:r.formatMessage({id:"users.isRosterableLabel"})})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:W,loading:u.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:j,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const pT="_pageWrapper_1ufe2_1",mT="_pageContent_1ufe2_11",gT="_drawer_1ufe2_20",vT="_profileAction_1ufe2_33",bT="_profileAvatar_1ufe2_39",yT="_headerActions_1ufe2_43",Vl={pageWrapper:pT,pageContent:mT,drawer:gT,profileAction:vT,profileAvatar:bT,headerActions:yT};function _T(){const t=ze(),{organization_id:n}=Es(),{data:l}=ih({organizationId:n,enabled:!0}),{data:r}=hn({enabled:!0}),o=qt(),u=k.useRef(null),[f,h]=k.useState(!1),g=()=>{h(!0)};return m.jsx(mn,{label:t.formatMessage({id:"shell.tab.users"}),placement:"end",open:!0,ref:u,className:Vl.drawer,children:m.jsxs("div",{className:Vl.pageWrapper,children:[m.jsx(hT,{isOpen:f,onClose:()=>{u.current?.modal.deactivateExternal(),h(!1)},onSaveSuccess:()=>console.log("User added successfully!")}),m.jsx(pn,{showBackButton:!0,headerActions:l==="admin"||l==="owner"?m.jsxs("div",{className:Vl.headerActions,children:[m.jsx($t,{"data-testid":"add-user-button",label:t.formatMessage({id:"manageUsers.addUser"}),onClick:()=>{u.current?.modal.activateExternal(),g()},name:"plus"}),m.jsx("div",{onClick:()=>o("/profile/me"),className:Vl.profileAction,role:"button",tabIndex:0,children:m.jsx(gt,{image:r?.social_profiles?.avatar_url,name:r?.firstname??"",className:Vl.profileAvatar})})]}):null}),m.jsx("div",{className:Vl.pageContent,children:m.jsx(oT,{organizationId:n})})]})})}const xT="_container_1cmcv_1",wT="_clickable_1cmcv_25",ST="_horseInfo_1cmcv_34",ET="_nameContainer_1cmcv_40",CT="_horseName_1cmcv_45",TT="_age_1cmcv_49",AT="_divider_1cmcv_55",MT="_ownerInfo_1cmcv_61",NT="_ownerLabel_1cmcv_68",$T="_status_1cmcv_72",OT="_ownerSelect_1cmcv_85",Bt={container:xT,"horse-list":"_horse-list_1cmcv_5","horse-list-item":"_horse-list-item_1cmcv_14",clickable:wT,horseInfo:ST,nameContainer:ET,horseName:CT,age:TT,divider:AT,ownerInfo:MT,ownerLabel:NT,status:$T,"icon-group":"_icon-group_1cmcv_77",ownerSelect:OT},{useOrganizationHorses:kT,useCurrentUserProfile:RT,useDeleteHorse:DT,useOrganizationMembers:zT,useOrganizationHorseTransfers:LT,useCurrentUserOrganizationRole:jT,useInitiateOwnershipTransfer:BT}=await Mt(async()=>{const{useOrganizationHorses:t,useCurrentUserProfile:n,useDeleteHorse:l,useOrganizationMembers:r,useOrganizationHorseTransfers:o,useCurrentUserOrganizationRole:u,useInitiateOwnershipTransfer:f}=await import("./index-Pvm2jerx.js").then(h=>h.aT);return{useOrganizationHorses:t,useCurrentUserProfile:n,useDeleteHorse:l,useOrganizationMembers:r,useOrganizationHorseTransfers:o,useCurrentUserOrganizationRole:u,useInitiateOwnershipTransfer:f}},[]);function HT({organizationId:t}){const{formatMessage:n,locale:l}=ze(),r=qt(),{data:o}=RT({enabled:!0}),u=DT(),f=BT(),{data:h}=jT({organizationId:t,enabled:!!t}),[g,p]=k.useState(null),[b,_]=k.useState(null),[w,y]=k.useState(""),{data:S}=zT({organizationId:t,enabled:!!t}),{data:A}=LT({organizationId:t,enabled:!!t}),{data:M,isLoading:C,isError:D,error:U}=kT({organizationId:t,enabled:!!t}),j=k.useMemo(()=>(M??[]).slice().sort((L,q)=>L.name.localeCompare(q.name)),[M]),$=k.useMemo(()=>S?new Map(S.map(L=>[L.user_profile_id,L])):new Map,[S]),W=k.useMemo(()=>A?new Map(A.map(L=>[L.horse_id,L])):new Map,[A]),X=k.useCallback(async L=>{const q=n({id:"manageHorses.removeConfirmation",defaultMessage:"Are you sure you want to remove {horseName}?"},{horseName:L.name});window.confirm(q)&&await u.mutateAsync({horseId:L.id,organizationId:t??""})},[n,t,u]),oe=k.useCallback(async()=>{if(!(!b||!w||!t))try{await f.mutateAsync({horseId:b.id,toOwnerId:w,organizationId:t,notes:"Initial ownership set by stable admin.",forceOwnership:!0}),_(null),y("")}catch(L){console.error("Failed to initiate transfer",L)}},[b,w,t,f]);return m.jsxs("div",{className:Bt.container,children:[m.jsx("ul",{className:Bt["horse-list"],children:j.map(L=>{const q=L.owner_id?$.get(L.owner_id):void 0,J=W.get(L.id),ne=L.owner_id===o?.id;return m.jsxs("li",{className:`${Bt["horse-list-item"]} ${L.social_profile_id?Bt.clickable:""}`,onClick:()=>{L.social_profile_id&&r(`/profile/${L.social_profile_id}`)},children:[m.jsxs("div",{className:Bt.horseInfo,children:[m.jsx(gt,{image:L.social_profiles?.avatar_url,name:L.name,className:Bt.avatar}),m.jsxs("div",{className:Bt.nameContainer,children:[m.jsx("span",{className:Bt.horseName,children:L.name}),L.date_of_birth&&m.jsx("span",{className:Bt.age,children:Lh(L.date_of_birth,l.startsWith("nl")?"nl":"en")})]})]}),m.jsx("hr",{className:Bt.divider}),m.jsxs("div",{className:Bt.ownerInfo,children:[m.jsxs("span",{className:Bt.ownerLabel,children:[m.jsx(ae,{id:"horses.ownerLabel",defaultMessage:"Owner"}),":"]}),ne?m.jsx("span",{className:Bt.ownerName,children:m.jsx(ae,{id:"manageHorses.yours",defaultMessage:"Yours"})}):m.jsxs("span",{className:Bt.ownerName,children:[q?.user_profiles?.firstname," ",q?.user_profiles?.lastname]}),J?.status&&m.jsxs("span",{className:Bt.status,children:["(",m.jsx(ae,{id:`ownershipTransfer.status.${J.status}`,defaultMessage:J.status}),")"]})]}),m.jsx("span",{className:Bt["icon-group"],onClick:Q=>Q.stopPropagation(),children:(h==="admin"||h==="owner")&&m.jsxs(m.Fragment,{children:[!L.owner_id&&m.jsx($t,{label:n({id:"manageHorses.assignOwner",defaultMessage:"Assign Owner"}),name:"person-plus",onClick:()=>_(L)}),m.jsx($t,{label:n({id:"manageHorses.editHorse",defaultMessage:"Edit horse"}),name:"pencil",onClick:()=>p(L)}),m.jsx($t,{label:n({id:"manageHorses.removeHorse",defaultMessage:"Remove horse"}),name:"trash",style:{color:"red"},onClick:()=>X(L)})]})})]},L.id)})}),C&&m.jsx("p",{children:m.jsx(ae,{id:"manageHorses.loading",defaultMessage:"Loading horses..."})}),D&&m.jsx("p",{children:m.jsx(ae,{id:"manageHorses.error",defaultMessage:"Error loading horses: {message}",values:{message:U?.message}})}),!C&&!D&&j.length===0&&m.jsx("p",{children:m.jsx(ae,{id:"manageHorses.noHorsesFound",defaultMessage:"No horses found that are boarded at this location"})}),g&&m.jsx(W1,{isOpen:!!g,onClose:()=>p(null),horse:g,socialProfile:g.social_profiles??void 0}),m.jsxs($s,{label:n({id:"manageHorses.assignOwner",defaultMessage:"Assign Owner"}),open:!!b,onSlAfterHide:()=>{_(null),y("")},children:[m.jsx(ea,{label:n({id:"manageHorses.selectOwner",defaultMessage:"Select Owner"}),value:w,onSlChange:L=>y(L.target.value),hoist:!0,placement:"top",onSlAfterHide:L=>L.stopPropagation(),className:Bt.ownerSelect,children:S?.map(L=>m.jsxs(je,{value:L.user_profile_id,children:[L.user_profiles?.firstname," ",L.user_profiles?.lastname]},L.user_profile_id))}),m.jsxs("div",{slot:"footer",children:[m.jsx(ke,{variant:"neutral",onClick:()=>_(null),children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(ke,{variant:"primary",onClick:oe,disabled:!w||f.isPending,loading:f.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})})]})]})]})}const UT="_addUserDrawer_anohp_1",IT="_formContent_anohp_32",PT="_inputWithIcon_anohp_45",VT="_countrySelect_anohp_57",FT="_dobRow_anohp_61",qT="_dobInput_anohp_68",GT="_ageDisplay_anohp_72",fi={addUserDrawer:UT,formContent:IT,inputWithIcon:PT,countrySelect:VT,dobRow:FT,dobInput:qT,ageDisplay:GT};function YT({isOpen:t,onClose:n,onSaveSuccess:l}){const r=ze(),{data:o}=yb({enabled:t}),{data:u}=nh({organizationId:o?.id,enabled:!!o?.id&&t}),f=mx(),[h,g]=k.useState(""),[p,b]=k.useState(""),[_,w]=k.useState(""),[y,S]=k.useState(""),[A,M]=k.useState(void 0),[C,D]=k.useState(null),[U,j]=k.useState(""),[$,W]=k.useState(""),[X,oe]=k.useState(""),[L,q]=k.useState(""),[J,ne]=k.useState(""),[Q,le]=k.useState(""),[te,I]=k.useState({});k.useEffect(()=>{t||Z()},[t]);const Z=()=>{g(""),b(""),w(""),S(""),M(void 0),D(null),j(""),W(""),oe(""),q(""),ne(""),le(""),I({})},ee=()=>{Z(),n()},ce=()=>{const K={};return h.trim()||(K.name=r.formatMessage({id:"validation.required"})),A||(K.ownerId=r.formatMessage({id:"validation.required"})),!_.trim()&&!y.trim()&&(K.chipOrUeln=r.formatMessage({id:"validation.chipOrUelnRequired"})),y.trim()&&y.trim().length!==15&&(K.ueln=r.formatMessage({id:"validation.uelnInvalid"})),I(K),Object.keys(K).length===0},_e=async()=>{if(!(!ce()||!o?.id||!A))try{await f.mutateAsync({name:h,boarded_at_org_id:o.id,owner_id:A,official_name:p||void 0,chip_number:_||void 0,ueln:y||void 0,date_of_birth:C?za(C,"yyyy-MM-dd"):void 0,gender:U||void 0,color:$||void 0,breed_studbook:X||void 0,country_of_birth:L||void 0,markings:J||void 0,chip_location:Q||void 0}),l?.(),n()}catch(K){console.error("Failed to add horse:",K)}},ot=async K=>{const{scanBarcode:Le}=await Mt(async()=>{const{scanBarcode:re}=await import("./index-Dnn9eo0H.js");return{scanBarcode:re}},__vite__mapDeps([6,1])),Dt=await Le();Dt&&(K==="chipNumber"?w(Dt):K==="ueln"&&S(Dt))},Te=async K=>{if(_t.isNativePlatform()){K.preventDefault();const{pickDate:Le}=await Mt(async()=>{const{pickDate:re}=await import("./index-Dnn9eo0H.js");return{pickDate:re}},__vite__mapDeps([6,1])),Dt=await Le({mode:"date",value:C?C.toISOString():void 0,max:new Date().toISOString()});Dt&&D(new Date(Dt))}},wt=K=>{const Le=K.locale.substring(0,2),Dt=Ec.slice().sort((re,Be)=>{const Ne=re.name[Le]??re.name.en,fe=Be.name[Le]??Be.name.en;return Ne.localeCompare(fe,Le)});if(Le==="nl"){const re=Dt.find(fe=>fe.code==="NL"),Be=Dt.find(fe=>fe.code==="BE"),Ne=Dt.filter(fe=>fe.code!=="NL"&&fe.code!=="BE");return m.jsxs(R.Fragment,{children:[[re,Be].map(fe=>m.jsx(je,{value:fe.code,children:fe.name[Le]??fe.name.en},fe.code)),m.jsx(jc,{}),Ne.map(fe=>m.jsx(je,{value:fe.code,children:fe.name[Le]??fe.name.en},fe.code))]})}return Dt.map(re=>m.jsx(je,{value:re.code,children:re.name[Le]??re.name.en},re.code))};return m.jsxs(mn,{label:r.formatMessage({id:"manageHorses.addHorse"}),placement:"end",open:t,onSlAfterHide:n,className:fi.addUserDrawer,children:[m.jsxs("div",{className:fi.formContent,children:[m.jsx(Ee,{"data-testid":"horse-official-name-input",label:r.formatMessage({id:"horses.officialNameLabel"}),value:p,required:!0,onSlInput:K=>{const Le=K.target.value;(!h||h===p)&&g(Le),b(Le)}}),m.jsx(Ee,{"data-testid":"horse-name-input",label:r.formatMessage({id:"horses.nameLabel"}),value:h,onSlInput:K=>g(K.target.value),required:!0,helpText:te.name}),m.jsx(ea,{"data-testid":"horse-owner-select",label:r.formatMessage({id:"horses.ownerLabel"}),value:A??"",onSlChange:K=>{M(K.target.value)},onSlAfterHide:K=>{K.stopPropagation()},helpText:te.ownerId,children:u&&u.length>0?u.map(K=>m.jsxs(je,{value:K.user_profile_id,children:[K.user_profiles?.firstname," ",K.user_profiles?.lastname]},K.user_profile_id)):m.jsx(je,{value:"",disabled:!0,children:m.jsx(ae,{id:"horses.noMembersFound",defaultMessage:"No members found in this stable"})})}),m.jsxs("div",{className:fi.inputWithIcon,children:[m.jsx(Ee,{"data-testid":"horse-chip-number-input",label:r.formatMessage({id:"horses.chipNumberLabel"}),value:_,onSlInput:K=>w(K.target.value),helpText:te.chipOrUeln}),m.jsx($t,{"data-testid":"chip-scan-button",name:"qr-code",label:r.formatMessage({id:"horses.scanBarcode"}),onClick:()=>ot("chipNumber")})]}),m.jsx(Ee,{label:r.formatMessage({id:"horses.chipLocationLabel"}),value:Q,onSlInput:K=>le(K.target.value)}),m.jsxs("div",{className:fi.inputWithIcon,children:[m.jsx(Ee,{"data-testid":"horse-ueln-input",label:r.formatMessage({id:"horses.uelnLabel"}),value:y,onSlInput:K=>S(K.target.value),helpText:te.ueln||te.chipOrUeln}),m.jsx($t,{"data-testid":"ueln-scan-button",name:"qr-code",label:r.formatMessage({id:"horses.scanBarcode"}),onClick:()=>ot("ueln")})]}),m.jsxs("div",{className:fi.dobRow,children:[m.jsx(Ee,{className:fi.dobInput,label:r.formatMessage({id:"horses.dateOfBirthLabel"}),type:_t.isNativePlatform()?"text":"date",max:new Date().toISOString().split("T")[0],value:C?_t.isNativePlatform()?r.formatDate(C):za(C,"yyyy-MM-dd"):"",readonly:_t.isNativePlatform(),onClick:Te,onSlChange:K=>D(K.target.valueAsDate),children:_t.isNativePlatform()&&m.jsx(rt,{name:"calendar",slot:"suffix"})}),C&&m.jsx("span",{className:fi.ageDisplay,children:Lh(C,r.locale.startsWith("nl")?"nl":"en")})]}),m.jsxs(ea,{label:r.formatMessage({id:"horses.genderLabel"}),value:U,onSlChange:K=>j(K.target.value),onSlAfterHide:K=>{K.stopPropagation()},children:[m.jsx(je,{value:"Stallion",children:r.formatMessage({id:"gender.stallion"})}),m.jsx(je,{value:"Mare",children:r.formatMessage({id:"gender.mare"})}),m.jsx(je,{value:"Gelding",children:r.formatMessage({id:"gender.gelding"})})]}),m.jsx(ea,{label:r.formatMessage({id:"horses.countryOfBirthLabel"}),className:fi.countrySelect,value:L,onSlChange:K=>q(K.target.value),onSlAfterHide:K=>{K.stopPropagation()},hoist:!0,children:wt(r)}),m.jsx(Ee,{label:r.formatMessage({id:"horses.colorLabel"}),value:$,onSlInput:K=>W(K.target.value)}),m.jsx(Ee,{label:r.formatMessage({id:"horses.breedStudbookLabel"}),value:X,onSlInput:K=>oe(K.target.value)}),m.jsx(Ee,{label:r.formatMessage({id:"horses.markingsLabel"}),value:J,onSlInput:K=>ne(K.target.value)})]}),m.jsx(ke,{slot:"footer",variant:"primary",onClick:_e,disabled:f.isPending,loading:f.isPending,children:m.jsx(ae,{id:"common.save",defaultMessage:"Save"})}),m.jsx(ke,{slot:"footer",variant:"neutral",onClick:ee,children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const XT="_pageWrapper_pqnt6_1",WT="_pageContent_pqnt6_10",QT="_drawer_pqnt6_19",ZT="_profileAction_pqnt6_32",KT="_profileAvatar_pqnt6_38",JT="_headerActions_pqnt6_42",Fl={pageWrapper:XT,pageContent:WT,drawer:QT,profileAction:ZT,profileAvatar:KT,headerActions:JT};function eA(){const t=ze(),n=gx(),l=qt(),{organization_id:r}=Es(),{data:o}=ih({organizationId:r,enabled:!!r}),{data:u}=hn({enabled:!0}),f=k.useRef(null),[h,g]=k.useState(!1),p=()=>{g(!0)};return m.jsx(mn,{label:t.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),placement:"end",open:!0,ref:f,className:Fl.drawer,children:m.jsxs("div",{className:Fl.pageWrapper,children:[m.jsx(YT,{isOpen:h,onClose:()=>{f.current?.modal.deactivateExternal(),g(!1)},onSaveSuccess:()=>{n.invalidateQueries({queryKey:["horses",r]})}}),m.jsx(pn,{showBackButton:!0,headerActions:o==="admin"||o==="owner"?m.jsxs("div",{className:Fl.headerActions,children:[m.jsx($t,{"data-testid":"add-horse-button",label:t.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),onClick:()=>{f.current?.modal.activateExternal(),p()},name:"plus"}),m.jsx("div",{onClick:()=>l("/profile/me"),className:Fl.profileAction,role:"button",tabIndex:0,children:m.jsx(gt,{image:u?.social_profiles?.avatar_url,name:u?.firstname??"",className:Fl.profileAvatar})})]}):null}),m.jsx("div",{className:Fl.pageContent,children:m.jsx(HT,{organizationId:r})})]})})}const tA="_container_6at2x_1",aA="_section_6at2x_8",nA="_sectionTitle_6at2x_14",iA="_list_6at2x_23",lA="_memberItem_6at2x_32",rA="_memberInfo_6at2x_43",sA="_memberName_6at2x_51",oA="_avatar_6at2x_58",cA="_roleSelect_6at2x_63",uA="_immutableRole_6at2x_68",dA="_emptyState_6at2x_75",fA="_subSectionTitle_6at2x_82",hA="_pill_6at2x_92",pA="_pillOwner_6at2x_102",mA="_pillGroom_6at2x_106",gA="_pillAvatar_6at2x_110",vA="_pillName_6at2x_115",bA="_grid_6at2x_125",yA="_clickable_6at2x_131",ge={container:tA,section:aA,sectionTitle:nA,list:iA,memberItem:lA,memberInfo:rA,memberName:sA,avatar:oA,roleSelect:cA,immutableRole:uA,emptyState:dA,subSectionTitle:fA,pill:hA,pillOwner:pA,pillGroom:mA,pillAvatar:gA,pillName:vA,grid:bA,clickable:yA};function _A({horseId:t}){const{formatMessage:n}=ze(),l=qt(),[r,o]=k.useState(null),{data:u}=vb({horseId:t,enabled:!!t}),{data:f}=vx({horseId:t,enabled:!!t}),{data:h}=bx({horseId:t,enabled:!!t}),{data:g}=yx({organizationId:u?.boarded_at_org_id??void 0,enabled:!!u?.boarded_at_org_id}),p=g?.user_profiles,{data:b}=bb({organizationId:u?.boarded_at_org_id??void 0,enabled:!!u?.boarded_at_org_id}),_=_x(),w=k.useMemo(()=>(f??[]).find(j=>j.role==="owner"),[f]),y=k.useMemo(()=>(f??[]).filter(j=>j.role==="stable_groom"),[f]),S=k.useMemo(()=>(f??[]).filter(j=>j.role!=="owner"&&j.role!=="stable_groom"),[f]),A=k.useMemo(()=>new Set((f??[]).filter(j=>j.role!=="stable_groom").map(j=>j.user_profile_id)),[f]),M=k.useMemo(()=>(h??[]).filter(j=>j.user_profiles?.id&&!A.has(j.user_profiles.id)),[h,A]),C=k.useMemo(()=>[{value:"co_owner",label:n({id:"roles.co_owner",defaultMessage:"Co-owner"})},{value:"rider",label:n({id:"roles.rider",defaultMessage:"Rider/Leaser"})},{value:"groom",label:n({id:"roles.groom",defaultMessage:"Groom"})},{value:"instructor",label:n({id:"roles.instructor",defaultMessage:"Instructor"})},{value:"medical",label:n({id:"roles.medical",defaultMessage:"Vet/Medical"})},{value:"farrier",label:n({id:"roles.farrier",defaultMessage:"Farrier"})}],[n]),D=(j,$)=>{$==="follower"?o({userId:j,role:$}):_.mutate({horseId:t,userId:j,role:$})},U=()=>{r&&t&&_.mutate({horseId:t,userId:r.userId,role:"follower"}),o(null)};return m.jsxs("div",{className:ge.container,children:[m.jsxs("section",{className:ge.section,children:[m.jsx("h3",{className:ge.sectionTitle,children:m.jsx(ae,{id:"manageTeam.team",defaultMessage:"Team"})}),m.jsxs("ul",{className:ge.list,children:[w&&m.jsxs("li",{className:ge.memberItem,children:[m.jsxs("div",{className:`${ge.memberInfo} ${ge.clickable}`,onClick:()=>{w.user_profiles?.social_profile_id&&l(`/profile/${w.user_profiles.social_profile_id}`)},children:[m.jsx(gt,{image:w.user_profiles?.social_profiles?.avatar_url,name:w.user_profiles?.firstname??"",className:ge.avatar}),m.jsxs("span",{className:ge.memberName,children:[w.user_profiles?.firstname," ",w.user_profiles?.lastname]})]}),m.jsx("span",{className:ge.immutableRole,children:m.jsx(ae,{id:"roles.owner",defaultMessage:"Owner"})})]},`owner-${w.user_profile_id}`),S.map(j=>m.jsxs("li",{className:ge.memberItem,children:[m.jsxs("div",{className:`${ge.memberInfo} ${ge.clickable}`,onClick:()=>{j.user_profiles?.social_profile_id&&l(`/profile/${j.user_profiles.social_profile_id}`)},children:[m.jsx(gt,{image:j.user_profiles?.social_profiles?.avatar_url,name:j.user_profiles?.firstname??"",className:ge.avatar}),m.jsxs("span",{className:ge.memberName,children:[j.user_profiles?.firstname," ",j.user_profiles?.lastname]})]}),m.jsxs(ea,{className:ge.roleSelect,value:j.role,hoist:!0,onSlChange:$=>D(j.user_profile_id,$.target.value),children:[C.map($=>m.jsx(je,{value:$.value,children:$.label},$.value)),m.jsx(je,{value:"follower",children:m.jsx(ae,{id:"roles.follower",defaultMessage:"Follower (Remove from team)"})})]})]},j.user_profile_id)),S.length===0&&!w&&m.jsx("p",{className:ge.emptyState,children:m.jsx(ae,{id:"manageTeam.noTeam",defaultMessage:"No team members yet."})})]})]}),(p||y.length>0)&&m.jsxs("section",{className:ge.section,children:[m.jsx("h3",{className:ge.sectionTitle,children:m.jsx(ae,{id:"manageTeam.organizationTeam",defaultMessage:"Team {organizationName}",values:{organizationName:b?.name??"Stable"}})}),p&&m.jsxs("div",{children:[m.jsx("h4",{className:ge.subSectionTitle,children:m.jsx(ae,{id:"manageTeam.stableOwner",defaultMessage:"Stable Owner"})}),m.jsxs("div",{className:`${ge.pill} ${ge.pillOwner} ${ge.clickable}`,onClick:()=>{p?.social_profile_id&&l(`/profile/${p.social_profile_id}`)},children:[m.jsx(gt,{image:p.social_profiles?.avatar_url,name:p.firstname??"",className:ge.pillAvatar}),m.jsxs("span",{className:ge.pillName,children:[p.firstname," ",p.lastname]})]})]}),y.length>0&&m.jsxs("div",{children:[m.jsxs("h4",{className:ge.subSectionTitle,children:[m.jsx(ae,{id:"roles.stable_groom",defaultMessage:"Stable Groom"}),"s"]}),m.jsx("div",{className:ge.grid,children:y.map(j=>m.jsxs("div",{className:`${ge.pill} ${ge.pillGroom} ${ge.clickable}`,onClick:()=>{j.user_profiles?.social_profile_id&&l(`/profile/${j.user_profiles.social_profile_id}`)},children:[m.jsx(gt,{image:j.user_profiles?.social_profiles?.avatar_url,name:j.user_profiles?.firstname??"",className:ge.pillAvatar}),m.jsxs("span",{className:ge.pillName,children:[j.user_profiles?.firstname," ",j.user_profiles?.lastname?.charAt(0),"."]})]},j.user_profile_id))})]})]}),m.jsxs("section",{className:ge.section,children:[m.jsx("h3",{className:ge.sectionTitle,children:m.jsx(ae,{id:"manageTeam.followers",defaultMessage:"Followers"})}),m.jsxs("ul",{className:ge.list,children:[M.map(j=>m.jsxs("li",{className:ge.memberItem,children:[m.jsxs("div",{className:`${ge.memberInfo} ${ge.clickable}`,onClick:()=>{j.user_profiles?.social_profile_id&&l(`/profile/${j.user_profiles.social_profile_id}`)},children:[m.jsx(gt,{image:j.user_profiles?.social_profiles?.avatar_url,name:j.user_profiles?.firstname??"",className:ge.avatar}),m.jsxs("span",{className:ge.memberName,children:[j.user_profiles?.firstname," ",j.user_profiles?.lastname]})]}),m.jsxs(ea,{className:ge.roleSelect,value:"follower",hoist:!0,onSlChange:$=>D(j.user_profiles?.id??"",$.target.value),children:[m.jsx(je,{value:"follower",children:m.jsx(ae,{id:"roles.follower_only",defaultMessage:"Follower"})}),C.map($=>m.jsx(je,{value:$.value,children:$.label},$.value))]})]},j.follower_profile_id)),M.length===0&&m.jsx("p",{className:ge.emptyState,children:m.jsx(ae,{id:"manageTeam.noFollowers",defaultMessage:"No followers found."})})]})]}),m.jsxs($s,{label:n({id:"manageTeam.demoteTitle",defaultMessage:"Remove from Team?"}),open:!!r,onSlAfterHide:()=>o(null),children:[m.jsx("p",{children:m.jsx(ae,{id:"manageTeam.demoteWarning",defaultMessage:"Are you sure you want to remove this user from the team? They will lose access to restricted posts."})}),m.jsxs("div",{slot:"footer",children:[m.jsx(ke,{variant:"neutral",onClick:()=>o(null),children:m.jsx(ae,{id:"common.cancel",defaultMessage:"Cancel"})}),m.jsx(ke,{variant:"danger",onClick:U,children:m.jsx(ae,{id:"common.remove",defaultMessage:"Remove"})})]})]})]})}const xA="_pageWrapper_1kjk1_1",wA="_pageContent_1kjk1_10",SA="_drawer_1kjk1_19",Ef={pageWrapper:xA,pageContent:wA,drawer:SA};function EA(){const t=ze(),{horseId:n}=Es(),l=k.useRef(null);return m.jsx(mn,{label:t.formatMessage({id:"manageTeam.title",defaultMessage:"Manage Team"}),placement:"end",open:!0,ref:l,className:Ef.drawer,children:m.jsxs("div",{className:Ef.pageWrapper,children:[m.jsx(pn,{showBackButton:!0}),m.jsx("div",{className:Ef.pageContent,children:m.jsx(_A,{horseId:n})})]})})}const CA=new zS;function TA({children:t}){return pb()?t:m.jsx(hc,{to:"/login",replace:!0})}function AA(){return m.jsx(q7,{children:m.jsxs(Mf,{children:[m.jsx(At,{path:"/stable",element:m.jsx(y8,{})}),m.jsx(At,{path:"/stable/:organization_id/roster/:roster_id",element:m.jsx(_E,{})}),m.jsx(At,{path:"/stable/:organization_id/members",element:m.jsx(_T,{})}),m.jsx(At,{path:"/stable/:organization_id/horses",element:m.jsx(eA,{})}),m.jsx(At,{path:"/horse",element:m.jsx(q8,{})}),m.jsx(At,{path:"/horse/:horseId/team",element:m.jsx(EA,{})}),m.jsx(At,{path:"/profile/me",element:m.jsx(F0,{})}),m.jsx(At,{path:"/profile/:social_id",element:m.jsx(F0,{})}),m.jsx(At,{path:"/invite",element:m.jsx(iy,{})}),m.jsx(At,{path:"/invite-success",element:m.jsx(ly,{})}),m.jsx(At,{path:"/",element:m.jsx(hc,{to:"/stable",replace:!0})})]})})}function MA({handleContinue:t}){const[n]=k.useState("en"),[l,r]=k.useState(xc);return k.useEffect(()=>{Mt(()=>import("./nl-C5DKBTmS.js"),[]).then(o=>{r(o.default)}).catch(()=>{})},[]),m.jsx(A1,{locale:n,messages:l,wrapRichTextChunksInFragment:!0,children:m.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[m.jsx("h1",{children:m.jsx(ae,{id:"invite.noProfile.title"})}),m.jsxs("p",{children:[m.jsx(ae,{id:"invite.noProfile.message"})," "]}),m.jsx(ke,{variant:"primary",onClick:t,children:m.jsx(ae,{id:"common.continue"})})]})})}function NA(){const[t,n]=k.useState(null),[l,r]=k.useState(!0),[o,u]=k.useState("en"),[f,h]=k.useState(xc),g=wc();k.useEffect(()=>{ra.auth.getSession().then(({data:{session:S}})=>{n(S),r(!1)});const{data:{subscription:y}}=ra.auth.onAuthStateChange((S,A)=>{n(A),r(!1)});return()=>y.unsubscribe()},[]);const{data:p,isLoading:b,isSuccess:_}=hn({enabled:!!t});if(k.useEffect(()=>{const S=p?.locale||"nl";S!==o&&Hw(Object.assign({"../translations/en.json":()=>Mt(()=>Promise.resolve().then(()=>G7),void 0),"../translations/nl.json":()=>Mt(()=>import("./nl-C5DKBTmS.js"),[])}),`../translations/${S}.json`,3).then(A=>{u(S),h(A.default)}).catch(()=>{u("en"),h(xc)})},[p,o]),l||t&&b)return null;const w=g.pathname.startsWith("/invite");return t&&_&&!p&&!w?m.jsx(MA,{handleContinue:()=>void ra.auth.signOut()}):!l&&!t&&g.pathname==="/"&&!_t.isNativePlatform()?(window.location.replace("/home.html"),null):m.jsx(wx.Provider,{value:t,children:m.jsx(A1,{locale:o,messages:f,wrapRichTextChunksInFragment:!0,children:t?m.jsxs(Mf,{children:[m.jsx(At,{path:"/login",element:m.jsx(hc,{to:"/stable",replace:!0})}),m.jsx(At,{path:"/*",element:m.jsx(TA,{children:m.jsx(AA,{})})})]}):m.jsxs(Mf,{children:[m.jsx(At,{path:"/login",element:m.jsx(J0,{})}),m.jsx(At,{path:"/invite",element:m.jsx(iy,{})}),m.jsx(At,{path:"/invite-success",element:m.jsx(ly,{})}),_t.isNativePlatform()&&m.jsx(At,{path:"/",element:m.jsx(hc,{to:"/login",replace:!0})}),m.jsx(At,{path:"*",element:m.jsx(J0,{})})]})})})}function $A(){return m.jsx(xx,{client:CA,children:m.jsx(NA,{})})}kf("/");Bw();const OA=Ix.createRoot(document.getElementById("root"));OA.render(m.jsx(k.StrictMode,{children:m.jsx(Ox,{children:m.jsx($A,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{console.log("SW registered: ",t)}).catch(t=>{console.log("SW registration failed: ",t)})});export{sw as H,B4 as a,RA as c,DA as f,uw as g,rw as h,H4 as p,zA as r,j4 as s};

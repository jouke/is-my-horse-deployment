const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pwa-action-sheet.entry-DR2Itamm.js","assets/index-CarnrZAn.js","assets/pwa-camera-modal.entry-VHX_mzU0.js","assets/pwa-toast.entry-D2vQHu42.js","assets/pwa-camera-modal-instance.entry-XoR__PZQ.js","assets/pwa-camera.entry-DjouJPNq.js","assets/index-R38vV1rT.js","assets/web-BTNtCrd6.js"])))=>i.map(i=>d[i]);
import{r as O0,g as M,h as ux,R as rt,l as dx,i as hx,u as Fc,j as At,N as fx,s as px,k as mx,m as gx,n as Wv,_ as ea,S as j0,M as vx,o as Ma,p as Xv,q as Yi,t as R0,Q as bx,v as Qv,w as yx,x as Zv,y as Kv,z as _x,A as Jv,B as eb,F as tb,G as xx,I as he,J as Wa,K as hs,L as _i,O as f,P as pl,T as fs,U as wx,V as Zh,X as L0,Y as D0,Z as Kh,$ as ab,e as kt,a0 as Sx,a1 as Cx,a2 as Ex,a3 as Ax,a4 as Tx,a5 as L,a6 as z0,a7 as B0,a8 as Ga,a9 as H0,aa as da,ab as Nx,ac as Mx,ad as Jh,ae as Fr,af as $f,ag as kx,ah as Gc,ai as Yc,aj as $x,ak as Of,al as U0,am as Ox,an as jx,ao as Rx,ap as Lx,aq as Dx,ar as zx,as as I0,at as P0,au as V0,av as Bx,aw as Hx,ax as Ux,ay as ma,az as Ix,aA as Px,aB as Vx,aC as qx,aD as jf,aE as Fx,aF as q0,aG as Gx,aH as Yx,aI as Wx,aJ as Xx,aK as Qx,aL as Zx,aM as F0,aN as Kx,aO as G0,aP as Rf,aQ as Jx,aR as ew,aS as tw,aT as aw,aU as iw,aV as nw,aW as lw,aX as sw,aY as rw,aZ as ow,a_ as cw,a$ as ef,b0 as Bt,b1 as Lc}from"./index-CarnrZAn.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function l(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=l(o);fetch(o.href,u)}})();var _h={exports:{}},Jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib;function uw(){if(ib)return Jt;ib=1;var e=O0();function i(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,m,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:g,containerInfo:m,implementation:v}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Jt.createPortal=function(g,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return u(g,m,null,v)},Jt.flushSync=function(g){var m=d.T,v=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=m,s.p=v,s.d.f()}},Jt.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Jt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Jt.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var v=m.as,y=p(v,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:w}):v==="script"&&s.d.X(g,{crossOrigin:y,integrity:_,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Jt.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Jt.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,y=p(v,m.crossOrigin);s.d.L(g,v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Jt.preloadModule=function(g,m){if(typeof g=="string")if(m){var v=p(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Jt.requestFormReset=function(g){s.d.r(g)},Jt.unstable_batchedUpdates=function(g,m){return g(m)},Jt.useFormState=function(g,m,v){return d.H.useFormState(g,m,v)},Jt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Jt.version="19.0.0",Jt}var nb;function Y0(){if(nb)return _h.exports;nb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),_h.exports=uw(),_h.exports}Y0();/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tf(){return tf=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e},tf.apply(this,arguments)}function dw(e,i){if(e==null)return{};var l={},s=Object.keys(e),o,u;for(u=0;u<s.length;u++)o=s[u],!(i.indexOf(o)>=0)&&(l[o]=e[o]);return l}function hw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fw(e,i){return e.button===0&&(!i||i==="_self")&&!hw(e)}function af(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((i,l)=>{let s=e[l];return i.concat(Array.isArray(s)?s.map(o=>[l,o]):[[l,s]])},[]))}function pw(e,i){let l=af(e);return i&&i.forEach((s,o)=>{l.has(o)||i.getAll(o).forEach(u=>{l.append(o,u)})}),l}const mw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gw="6";try{window.__reactRouterVersion=gw}catch{}const vw="startTransition",lb=rt[vw];function bw(e){let{basename:i,children:l,future:s,window:o}=e,u=M.useRef();u.current==null&&(u.current=ux({window:o,v5Compat:!0}));let d=u.current,[p,g]=M.useState({action:d.action,location:d.location}),{v7_startTransition:m}=s||{},v=M.useCallback(y=>{m&&lb?lb(()=>g(y)):g(y)},[g,m]);return M.useLayoutEffect(()=>d.listen(v),[d,v]),M.useEffect(()=>dx(s),[s]),M.createElement(hx,{basename:i,children:l,location:p.location,navigationType:p.action,navigator:d,future:s})}const yw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xw=M.forwardRef(function(i,l){let{onClick:s,relative:o,reloadDocument:u,replace:d,state:p,target:g,to:m,preventScrollReset:v,viewTransition:y}=i,_=dw(i,mw),{basename:w}=M.useContext(fx),C,N=!1;if(typeof m=="string"&&_w.test(m)&&(C=m,yw))try{let B=new URL(window.location.href),z=m.startsWith("//")?new URL(B.protocol+m):new URL(m),k=px(z.pathname,w);z.origin===B.origin&&k!=null?m=k+z.search+z.hash:N=!0}catch{}let E=mx(m,{relative:o}),T=ww(m,{replace:d,state:p,target:g,preventScrollReset:v,relative:o,viewTransition:y});function R(B){s&&s(B),B.defaultPrevented||T(B)}return M.createElement("a",tf({},_,{href:C||E,onClick:N||u?s:R,ref:l,target:g}))});var sb;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sb||(sb={}));var rb;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rb||(rb={}));function ww(e,i){let{target:l,replace:s,state:o,preventScrollReset:u,relative:d,viewTransition:p}=i===void 0?{}:i,g=At(),m=Fc(),v=gx(e,{relative:d});return M.useCallback(y=>{if(fw(y,l)){y.preventDefault();let _=s!==void 0?s:Wv(m)===Wv(v);g(e,{replace:_,state:o,preventScrollReset:u,relative:d,viewTransition:p})}},[m,g,v,s,o,l,e,u,d,p])}function Sw(e){let i=M.useRef(af(e)),l=M.useRef(!1),s=Fc(),o=M.useMemo(()=>pw(s.search,l.current?null:i.current),[s.search]),u=At(),d=M.useCallback((p,g)=>{const m=af(typeof p=="function"?p(o):p);l.current=!0,u("?"+m,g)},[u,o]);return[o,d]}var xh={exports:{}},xr={},wh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ob;function Cw(){return ob||(ob=1,(function(e){function i(I,Z){var J=I.length;I.push(Z);e:for(;0<J;){var se=J-1>>>1,Se=I[se];if(0<o(Se,Z))I[se]=Z,I[J]=Se,J=se;else break e}}function l(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var Z=I[0],J=I.pop();if(J!==Z){I[0]=J;e:for(var se=0,Se=I.length,Tt=Se>>>1;se<Tt;){var Ee=2*(se+1)-1,Qt=I[Ee],K=Ee+1,Ie=I[K];if(0>o(Qt,J))K<Se&&0>o(Ie,Qt)?(I[se]=Ie,I[K]=J,se=K):(I[se]=Qt,I[Ee]=J,se=Ee);else if(K<Se&&0>o(Ie,J))I[se]=Ie,I[K]=J,se=K;else break e}}return Z}function o(I,Z){var J=I.sortIndex-Z.sortIndex;return J!==0?J:I.id-Z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var g=[],m=[],v=1,y=null,_=3,w=!1,C=!1,N=!1,E=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function B(I){for(var Z=l(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=I)s(m),Z.sortIndex=Z.expirationTime,i(g,Z);else break;Z=l(m)}}function z(I){if(N=!1,B(I),!C)if(l(g)!==null)C=!0,ne();else{var Z=l(m);Z!==null&&ie(z,Z.startTime-I)}}var k=!1,q=-1,X=5,ce=-1;function U(){return!(e.unstable_now()-ce<X)}function G(){if(k){var I=e.unstable_now();ce=I;var Z=!0;try{e:{C=!1,N&&(N=!1,T(q),q=-1),w=!0;var J=_;try{t:{for(B(I),y=l(g);y!==null&&!(y.expirationTime>I&&U());){var se=y.callback;if(typeof se=="function"){y.callback=null,_=y.priorityLevel;var Se=se(y.expirationTime<=I);if(I=e.unstable_now(),typeof Se=="function"){y.callback=Se,B(I),Z=!0;break t}y===l(g)&&s(g),B(I)}else s(g);y=l(g)}if(y!==null)Z=!0;else{var Tt=l(m);Tt!==null&&ie(z,Tt.startTime-I),Z=!1}}break e}finally{y=null,_=J,w=!1}Z=void 0}}finally{Z?te():k=!1}}}var te;if(typeof R=="function")te=function(){R(G)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Q=ae.port2;ae.port1.onmessage=G,te=function(){Q.postMessage(null)}}else te=function(){E(G,0)};function ne(){k||(k=!0,te())}function ie(I,Z){q=E(function(){I(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){C||w||(C=!0,ne())},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return l(g)},e.unstable_next=function(I){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var J=_;_=Z;try{return I()}finally{_=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=_;_=I;try{return Z()}finally{_=J}},e.unstable_scheduleCallback=function(I,Z,J){var se=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,I={id:v++,callback:Z,priorityLevel:I,startTime:J,expirationTime:Se,sortIndex:-1},J>se?(I.sortIndex=J,i(m,I),l(g)===null&&I===l(m)&&(N?(T(q),q=-1):N=!0,ie(z,J-se))):(I.sortIndex=Se,i(g,I),C||w||(C=!0,ne())),I},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(I){var Z=_;return function(){var J=_;_=Z;try{return I.apply(this,arguments)}finally{_=J}}}})(Sh)),Sh}var cb;function Ew(){return cb||(cb=1,wh.exports=Cw()),wh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ub;function Aw(){if(ub)return xr;ub=1;var e=Ew(),i=O0(),l=Y0();function s(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),_=Symbol.for("react.consumer"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),z=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var X=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===X?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case g:return"Fragment";case p:return"Portal";case v:return"Profiler";case m:return"StrictMode";case N:return"Suspense";case E:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w:return(t.displayName||"Context")+".Provider";case _:return(t._context.displayName||"Context")+".Consumer";case C:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case T:return a=t.displayName||null,a!==null?a:ce(t.type)||"Memo";case R:a=t._payload,t=t._init;try{return ce(t(a))}catch{}}return null}var U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=Object.assign,te,ae;function Q(t){if(te===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);te=a&&a[1]||"",ae=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+t+ae}var ne=!1;function ie(t,a){if(!t||ne)return"";ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(a){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(V){var P=V}Reflect.construct(t,[],W)}else{try{W.call()}catch(V){P=V}t.call(W.prototype)}}else{try{throw Error()}catch(V){P=V}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(V){if(V&&P&&typeof V.stack=="string")return[V.stack,P.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),b=h[0],x=h[1];if(b&&x){var A=b.split(`
`),j=x.split(`
`);for(c=r=0;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(r===A.length||c===j.length)for(r=A.length-1,c=j.length-1;1<=r&&0<=c&&A[r]!==j[c];)c--;for(;1<=r&&0<=c;r--,c--)if(A[r]!==j[c]){if(r!==1||c!==1)do if(r--,c--,0>c||A[r]!==j[c]){var F=`
`+A[r].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=r&&0<=c);break}}}finally{ne=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Q(n):""}function I(t){switch(t.tag){case 26:case 27:case 5:return Q(t.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 15:return t=ie(t.type,!1),t;case 11:return t=ie(t.type.render,!1),t;case 1:return t=ie(t.type,!0),t;default:return""}}function Z(t){try{var a="";do a+=I(t),t=t.return;while(t);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function J(t){var a=t,n=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(n=a.return),t=a.return;while(t)}return a.tag===3?n:null}function se(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Se(t){if(J(t)!==t)throw Error(s(188))}function Tt(t){var a=t.alternate;if(!a){if(a=J(t),a===null)throw Error(s(188));return a!==t?null:t}for(var n=t,r=a;;){var c=n.return;if(c===null)break;var h=c.alternate;if(h===null){if(r=c.return,r!==null){n=r;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===n)return Se(c),t;if(h===r)return Se(c),a;h=h.sibling}throw Error(s(188))}if(n.return!==r.return)n=c,r=h;else{for(var b=!1,x=c.child;x;){if(x===n){b=!0,n=c,r=h;break}if(x===r){b=!0,r=c,n=h;break}x=x.sibling}if(!b){for(x=h.child;x;){if(x===n){b=!0,n=h,r=c;break}if(x===r){b=!0,r=h,n=c;break}x=x.sibling}if(!b)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:a}function Ee(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=Ee(t),a!==null)return a;t=t.sibling}return null}var Qt=Array.isArray,K=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ie={pending:!1,data:null,method:null,action:null},bt=[],le=-1;function ze(t){return{current:t}}function Te(t){0>le||(t.current=bt[le],bt[le]=null,le--)}function ue(t,a){le++,bt[le]=t.current,t.current=a}var yt=ze(null),na=ze(null),ge=ze(null),Ja=ze(null);function zn(t,a){switch(ue(ge,a),ue(na,t),ue(yt,null),t=a.nodeType,t){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?Sv(a):0;break;default:if(t=t===8?a.parentNode:a,a=t.tagName,t=t.namespaceURI)t=Sv(t),a=Cv(t,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}Te(yt),ue(yt,a)}function en(){Te(yt),Te(na),Te(ge)}function du(t){t.memoizedState!==null&&ue(Ja,t);var a=yt.current,n=Cv(a,t.type);a!==n&&(ue(na,t),ue(yt,n))}function io(t){na.current===t&&(Te(yt),Te(na)),Ja.current===t&&(Te(Ja),gr._currentValue=Ie)}var hu=Object.prototype.hasOwnProperty,fu=e.unstable_scheduleCallback,pu=e.unstable_cancelCallback,P1=e.unstable_shouldYield,V1=e.unstable_requestPaint,hi=e.unstable_now,q1=e.unstable_getCurrentPriorityLevel,hp=e.unstable_ImmediatePriority,fp=e.unstable_UserBlockingPriority,no=e.unstable_NormalPriority,F1=e.unstable_LowPriority,pp=e.unstable_IdlePriority,G1=e.log,Y1=e.unstable_setDisableYieldValue,Es=null,ya=null;function W1(t){if(ya&&typeof ya.onCommitFiberRoot=="function")try{ya.onCommitFiberRoot(Es,t,void 0,(t.current.flags&128)===128)}catch{}}function tn(t){if(typeof G1=="function"&&Y1(t),ya&&typeof ya.setStrictMode=="function")try{ya.setStrictMode(Es,t)}catch{}}var _a=Math.clz32?Math.clz32:Z1,X1=Math.log,Q1=Math.LN2;function Z1(t){return t>>>=0,t===0?32:31-(X1(t)/Q1|0)|0}var lo=128,so=4194304;function Bn(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ro(t,a){var n=t.pendingLanes;if(n===0)return 0;var r=0,c=t.suspendedLanes,h=t.pingedLanes,b=t.warmLanes;t=t.finishedLanes!==0;var x=n&134217727;return x!==0?(n=x&~c,n!==0?r=Bn(n):(h&=x,h!==0?r=Bn(h):t||(b=x&~b,b!==0&&(r=Bn(b))))):(x=n&~c,x!==0?r=Bn(x):h!==0?r=Bn(h):t||(b=n&~b,b!==0&&(r=Bn(b)))),r===0?0:a!==0&&a!==r&&(a&c)===0&&(c=r&-r,b=a&-a,c>=b||c===32&&(b&4194176)!==0)?a:r}function As(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function K1(t,a){switch(t){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mp(){var t=lo;return lo<<=1,(lo&4194176)===0&&(lo=128),t}function gp(){var t=so;return so<<=1,(so&62914560)===0&&(so=4194304),t}function mu(t){for(var a=[],n=0;31>n;n++)a.push(t);return a}function Ts(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function J1(t,a,n,r,c,h){var b=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var x=t.entanglements,A=t.expirationTimes,j=t.hiddenUpdates;for(n=b&~n;0<n;){var F=31-_a(n),W=1<<F;x[F]=0,A[F]=-1;var P=j[F];if(P!==null)for(j[F]=null,F=0;F<P.length;F++){var V=P[F];V!==null&&(V.lane&=-536870913)}n&=~W}r!==0&&vp(t,r,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~a))}function vp(t,a,n){t.pendingLanes|=a,t.suspendedLanes&=~a;var r=31-_a(a);t.entangledLanes|=a,t.entanglements[r]=t.entanglements[r]|1073741824|n&4194218}function bp(t,a){var n=t.entangledLanes|=a;for(t=t.entanglements;n;){var r=31-_a(n),c=1<<r;c&a|t[r]&a&&(t[r]|=a),n&=~c}}function yp(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _p(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Pv(t.type))}function e_(t,a){var n=K.p;try{return K.p=t,a()}finally{K.p=n}}var an=Math.random().toString(36).slice(2),Zt="__reactFiber$"+an,ha="__reactProps$"+an,xl="__reactContainer$"+an,gu="__reactEvents$"+an,t_="__reactListeners$"+an,a_="__reactHandles$"+an,xp="__reactResources$"+an,Ns="__reactMarker$"+an;function vu(t){delete t[Zt],delete t[ha],delete t[gu],delete t[t_],delete t[a_]}function Hn(t){var a=t[Zt];if(a)return a;for(var n=t.parentNode;n;){if(a=n[xl]||n[Zt]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(t=Tv(t);t!==null;){if(n=t[Zt])return n;t=Tv(t)}return a}t=n,n=t.parentNode}return null}function wl(t){if(t=t[Zt]||t[xl]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function Ms(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(s(33))}function Sl(t){var a=t[xp];return a||(a=t[xp]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function jt(t){t[Ns]=!0}var wp=new Set,Sp={};function Un(t,a){Cl(t,a),Cl(t+"Capture",a)}function Cl(t,a){for(Sp[t]=a,t=0;t<a.length;t++)wp.add(a[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),i_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cp={},Ep={};function n_(t){return hu.call(Ep,t)?!0:hu.call(Cp,t)?!1:i_.test(t)?Ep[t]=!0:(Cp[t]=!0,!1)}function oo(t,a,n){if(n_(a))if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var r=a.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+n)}}function co(t,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+n)}}function ki(t,a,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(a,n,""+r)}}function ja(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ap(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function l_(t){var a=Ap(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),r=""+t[a];if(!t.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var c=n.get,h=n.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return c.call(this)},set:function(b){r=""+b,h.call(this,b)}}),Object.defineProperty(t,a,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function uo(t){t._valueTracker||(t._valueTracker=l_(t))}function Tp(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var n=a.getValue(),r="";return t&&(r=Ap(t)?t.checked?"true":"false":t.value),t=r,t!==n?(a.setValue(t),!0):!1}function ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var s_=/[\n"\\]/g;function Ra(t){return t.replace(s_,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function bu(t,a,n,r,c,h,b,x){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),a!=null?b==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ja(a)):t.value!==""+ja(a)&&(t.value=""+ja(a)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),a!=null?yu(t,b,ja(a)):n!=null?yu(t,b,ja(n)):r!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.name=""+ja(x):t.removeAttribute("name")}function Np(t,a,n,r,c,h,b,x){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),a!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||a!=null))return;n=n!=null?""+ja(n):"",a=a!=null?""+ja(a):n,x||a===t.value||(t.value=a),t.defaultValue=a}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=x?t.checked:!!r,t.defaultChecked=!!r,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function yu(t,a,n){a==="number"&&ho(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function El(t,a,n,r){if(t=t.options,a){a={};for(var c=0;c<n.length;c++)a["$"+n[c]]=!0;for(n=0;n<t.length;n++)c=a.hasOwnProperty("$"+t[n].value),t[n].selected!==c&&(t[n].selected=c),c&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ja(n),a=null,c=0;c<t.length;c++){if(t[c].value===n){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}a!==null||t[c].disabled||(a=t[c])}a!==null&&(a.selected=!0)}}function Mp(t,a,n){if(a!=null&&(a=""+ja(a),a!==t.value&&(t.value=a),n==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=n!=null?""+ja(n):""}function kp(t,a,n,r){if(a==null){if(r!=null){if(n!=null)throw Error(s(92));if(Qt(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),a=n}n=ja(a),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r)}function Al(t,a){if(a){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=a;return}}t.textContent=a}var r_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $p(t,a,n){var r=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":r?t.setProperty(a,n):typeof n!="number"||n===0||r_.has(a)?a==="float"?t.cssFloat=n:t[a]=(""+n).trim():t[a]=n+"px"}function Op(t,a,n){if(a!=null&&typeof a!="object")throw Error(s(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||a!=null&&a.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in a)r=a[c],a.hasOwnProperty(c)&&n[c]!==r&&$p(t,c,r)}else for(var h in a)a.hasOwnProperty(h)&&$p(t,h,a[h])}function _u(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fo(t){return c_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var xu=null;function wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tl=null,Nl=null;function jp(t){var a=wl(t);if(a&&(t=a.stateNode)){var n=t[ha]||null;e:switch(t=a.stateNode,a.type){case"input":if(bu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ra(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var r=n[a];if(r!==t&&r.form===t.form){var c=r[ha]||null;if(!c)throw Error(s(90));bu(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(a=0;a<n.length;a++)r=n[a],r.form===t.form&&Tp(r)}break e;case"textarea":Mp(t,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&El(t,!!n.multiple,a,!1)}}}var Su=!1;function Rp(t,a,n){if(Su)return t(a,n);Su=!0;try{var r=t(a);return r}finally{if(Su=!1,(Tl!==null||Nl!==null)&&(Qo(),Tl&&(a=Tl,t=Nl,Nl=Tl=null,jp(a),t)))for(a=0;a<t.length;a++)jp(t[a])}}function ks(t,a){var n=t.stateNode;if(n===null)return null;var r=n[ha]||null;if(r===null)return null;n=r[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,a,typeof n));return n}var Cu=!1;if(Mi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Cu=!1}var nn=null,Eu=null,po=null;function Lp(){if(po)return po;var t,a=Eu,n=a.length,r,c="value"in nn?nn.value:nn.textContent,h=c.length;for(t=0;t<n&&a[t]===c[t];t++);var b=n-t;for(r=1;r<=b&&a[n-r]===c[h-r];r++);return po=c.slice(t,1<r?1-r:void 0)}function mo(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function Dp(){return!1}function fa(t){function a(n,r,c,h,b){this._reactName=n,this._targetInst=c,this.type=r,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(n=t[x],this[x]=n?n(h):h[x]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?go:Dp,this.isPropagationStopped=Dp,this}return G(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),a}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vo=fa(In),Os=G({},In,{view:0,detail:0}),u_=fa(Os),Au,Tu,js,bo=G({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(Au=t.screenX-js.screenX,Tu=t.screenY-js.screenY):Tu=Au=0,js=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),zp=fa(bo),d_=G({},bo,{dataTransfer:0}),h_=fa(d_),f_=G({},Os,{relatedTarget:0}),Nu=fa(f_),p_=G({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=fa(p_),g_=G({},In,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v_=fa(g_),b_=G({},In,{data:0}),Bp=fa(b_),y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},__={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w_(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=x_[t])?!!a[t]:!1}function Mu(){return w_}var S_=G({},Os,{key:function(t){if(t.key){var a=y_[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?__[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C_=fa(S_),E_=G({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=fa(E_),A_=G({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),T_=fa(A_),N_=G({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),M_=fa(N_),k_=G({},bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=fa(k_),O_=G({},In,{newState:0,oldState:0}),j_=fa(O_),R_=[9,13,27,32],ku=Mi&&"CompositionEvent"in window,Rs=null;Mi&&"documentMode"in document&&(Rs=document.documentMode);var L_=Mi&&"TextEvent"in window&&!Rs,Up=Mi&&(!ku||Rs&&8<Rs&&11>=Rs),Ip=" ",Pp=!1;function Vp(t,a){switch(t){case"keyup":return R_.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ml=!1;function D_(t,a){switch(t){case"compositionend":return qp(a);case"keypress":return a.which!==32?null:(Pp=!0,Ip);case"textInput":return t=a.data,t===Ip&&Pp?null:t;default:return null}}function z_(t,a){if(Ml)return t==="compositionend"||!ku&&Vp(t,a)?(t=Lp(),po=Eu=nn=null,Ml=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Up&&a.locale!=="ko"?null:a.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!B_[t.type]:a==="textarea"}function Gp(t,a,n,r){Tl?Nl?Nl.push(r):Nl=[r]:Tl=r,a=tc(a,"onChange"),0<a.length&&(n=new vo("onChange","change",null,n,r),t.push({event:n,listeners:a}))}var Ls=null,Ds=null;function H_(t){bv(t,0)}function yo(t){var a=Ms(t);if(Tp(a))return t}function Yp(t,a){if(t==="change")return a}var Wp=!1;if(Mi){var $u;if(Mi){var Ou="oninput"in document;if(!Ou){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ou=typeof Xp.oninput=="function"}$u=Ou}else $u=!1;Wp=$u&&(!document.documentMode||9<document.documentMode)}function Qp(){Ls&&(Ls.detachEvent("onpropertychange",Zp),Ds=Ls=null)}function Zp(t){if(t.propertyName==="value"&&yo(Ds)){var a=[];Gp(a,Ds,t,wu(t)),Rp(H_,a)}}function U_(t,a,n){t==="focusin"?(Qp(),Ls=a,Ds=n,Ls.attachEvent("onpropertychange",Zp)):t==="focusout"&&Qp()}function I_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yo(Ds)}function P_(t,a){if(t==="click")return yo(a)}function V_(t,a){if(t==="input"||t==="change")return yo(a)}function q_(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var xa=typeof Object.is=="function"?Object.is:q_;function zs(t,a){if(xa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var n=Object.keys(t),r=Object.keys(a);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var c=n[r];if(!hu.call(a,c)||!xa(t[c],a[c]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,a){var n=Kp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=a&&r>=a)return{node:n,offset:a-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kp(n)}}function em(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?em(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function tm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=ho(t.document);a instanceof t.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)t=a.contentWindow;else break;a=ho(t.document)}return a}function ju(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}function F_(t,a){var n=tm(a);a=t.focusedElem;var r=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&em(a.ownerDocument.documentElement,a)){if(r!==null&&ju(a)){if(t=r.start,n=r.end,n===void 0&&(n=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(n,a.value.length);else if(n=(t=a.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var c=a.textContent.length,h=Math.min(r.start,c);r=r.end===void 0?h:Math.min(r.end,c),!n.extend&&h>r&&(c=r,r=h,h=c),c=Jp(a,h);var b=Jp(a,r);c&&b&&(n.rangeCount!==1||n.anchorNode!==c.node||n.anchorOffset!==c.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),n.removeAllRanges(),h>r?(n.addRange(t),n.extend(b.node,b.offset)):(t.setEnd(b.node,b.offset),n.addRange(t)))}}for(t=[],n=a;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)n=t[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var G_=Mi&&"documentMode"in document&&11>=document.documentMode,kl=null,Ru=null,Bs=null,Lu=!1;function am(t,a,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||kl==null||kl!==ho(r)||(r=kl,"selectionStart"in r&&ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bs&&zs(Bs,r)||(Bs=r,r=tc(Ru,"onSelect"),0<r.length&&(a=new vo("onSelect","select",null,a,n),t.push({event:a,listeners:r}),a.target=kl)))}function Pn(t,a){var n={};return n[t.toLowerCase()]=a.toLowerCase(),n["Webkit"+t]="webkit"+a,n["Moz"+t]="moz"+a,n}var $l={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionrun:Pn("Transition","TransitionRun"),transitionstart:Pn("Transition","TransitionStart"),transitioncancel:Pn("Transition","TransitionCancel"),transitionend:Pn("Transition","TransitionEnd")},Du={},im={};Mi&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete $l.animationend.animation,delete $l.animationiteration.animation,delete $l.animationstart.animation),"TransitionEvent"in window||delete $l.transitionend.transition);function Vn(t){if(Du[t])return Du[t];if(!$l[t])return t;var a=$l[t],n;for(n in a)if(a.hasOwnProperty(n)&&n in im)return Du[t]=a[n];return t}var nm=Vn("animationend"),lm=Vn("animationiteration"),sm=Vn("animationstart"),Y_=Vn("transitionrun"),W_=Vn("transitionstart"),X_=Vn("transitioncancel"),rm=Vn("transitionend"),om=new Map,cm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ei(t,a){om.set(t,a),Un(a,[t])}var La=[],Ol=0,zu=0;function _o(){for(var t=Ol,a=zu=Ol=0;a<t;){var n=La[a];La[a++]=null;var r=La[a];La[a++]=null;var c=La[a];La[a++]=null;var h=La[a];if(La[a++]=null,r!==null&&c!==null){var b=r.pending;b===null?c.next=c:(c.next=b.next,b.next=c),r.pending=c}h!==0&&um(n,c,h)}}function xo(t,a,n,r){La[Ol++]=t,La[Ol++]=a,La[Ol++]=n,La[Ol++]=r,zu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Bu(t,a,n,r){return xo(t,a,n,r),wo(t)}function ln(t,a){return xo(t,null,null,a),wo(t)}function um(t,a,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var c=!1,h=t.return;h!==null;)h.childLanes|=n,r=h.alternate,r!==null&&(r.childLanes|=n),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;c&&a!==null&&t.tag===3&&(h=t.stateNode,c=31-_a(n),h=h.hiddenUpdates,t=h[c],t===null?h[c]=[a]:t.push(a),a.lane=n|536870912)}function wo(t){if(50<cr)throw cr=0,qd=null,Error(s(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var jl={},dm=new WeakMap;function Da(t,a){if(typeof t=="object"&&t!==null){var n=dm.get(t);return n!==void 0?n:(a={value:t,source:a,stack:Z(a)},dm.set(t,a),a)}return{value:t,source:a,stack:Z(a)}}var Rl=[],Ll=0,So=null,Co=0,za=[],Ba=0,qn=null,$i=1,Oi="";function Fn(t,a){Rl[Ll++]=Co,Rl[Ll++]=So,So=t,Co=a}function hm(t,a,n){za[Ba++]=$i,za[Ba++]=Oi,za[Ba++]=qn,qn=t;var r=$i;t=Oi;var c=32-_a(r)-1;r&=~(1<<c),n+=1;var h=32-_a(a)+c;if(30<h){var b=c-c%5;h=(r&(1<<b)-1).toString(32),r>>=b,c-=b,$i=1<<32-_a(a)+c|n<<c|r,Oi=h+t}else $i=1<<h|n<<c|r,Oi=t}function Hu(t){t.return!==null&&(Fn(t,1),hm(t,1,0))}function Uu(t){for(;t===So;)So=Rl[--Ll],Rl[Ll]=null,Co=Rl[--Ll],Rl[Ll]=null;for(;t===qn;)qn=za[--Ba],za[Ba]=null,Oi=za[--Ba],za[Ba]=null,$i=za[--Ba],za[Ba]=null}var la=null,Vt=null,Be=!1,ti=null,fi=!1,Iu=Error(s(519));function Gn(t){var a=Error(s(418,""));throw Is(Da(a,t)),Iu}function fm(t){var a=t.stateNode,n=t.type,r=t.memoizedProps;switch(a[Zt]=t,a[ha]=r,n){case"dialog":ke("cancel",a),ke("close",a);break;case"iframe":case"object":case"embed":ke("load",a);break;case"video":case"audio":for(n=0;n<dr.length;n++)ke(dr[n],a);break;case"source":ke("error",a);break;case"img":case"image":case"link":ke("error",a),ke("load",a);break;case"details":ke("toggle",a);break;case"input":ke("invalid",a),Np(a,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),uo(a);break;case"select":ke("invalid",a);break;case"textarea":ke("invalid",a),kp(a,r.value,r.defaultValue,r.children),uo(a)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||r.suppressHydrationWarning===!0||wv(a.textContent,n)?(r.popover!=null&&(ke("beforetoggle",a),ke("toggle",a)),r.onScroll!=null&&ke("scroll",a),r.onScrollEnd!=null&&ke("scrollend",a),r.onClick!=null&&(a.onclick=ac),a=!0):a=!1,a||Gn(t)}function pm(t){for(la=t.return;la;)switch(la.tag){case 3:case 27:fi=!0;return;case 5:case 13:fi=!1;return;default:la=la.return}}function Hs(t){if(t!==la)return!1;if(!Be)return pm(t),Be=!0,!1;var a=!1,n;if((n=t.tag!==3&&t.tag!==27)&&((n=t.tag===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||rh(t.type,t.memoizedProps)),n=!n),n&&(a=!0),a&&Vt&&Gn(t),pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(a===0){Vt=ii(t.nextSibling);break e}a--}else n!=="$"&&n!=="$!"&&n!=="$?"||a++;t=t.nextSibling}Vt=null}}else Vt=la?ii(t.stateNode.nextSibling):null;return!0}function Us(){Vt=la=null,Be=!1}function Is(t){ti===null?ti=[t]:ti.push(t)}var Ps=Error(s(460)),mm=Error(s(474)),Pu={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Eo(){}function vm(t,a,n){switch(n=t[n],n===void 0?t.push(a):n!==a&&(a.then(Eo,Eo),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,t===Ps?Error(s(483)):t;default:if(typeof a.status=="string")a.then(Eo,Eo);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=a,t.status="pending",t.then(function(r){if(a.status==="pending"){var c=a;c.status="fulfilled",c.value=r}},function(r){if(a.status==="pending"){var c=a;c.status="rejected",c.reason=r}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,t===Ps?Error(s(483)):t}throw Vs=a,Ps}}var Vs=null;function bm(){if(Vs===null)throw Error(s(459));var t=Vs;return Vs=null,t}var Dl=null,qs=0;function Ao(t){var a=qs;return qs+=1,Dl===null&&(Dl=[]),vm(Dl,t,a)}function Fs(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function To(t,a){throw a.$$typeof===u?Error(s(525)):(t=Object.prototype.toString.call(a),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function ym(t){var a=t._init;return a(t._payload)}function _m(t){function a(D,O){if(t){var H=D.deletions;H===null?(D.deletions=[O],D.flags|=16):H.push(O)}}function n(D,O){if(!t)return null;for(;O!==null;)a(D,O),O=O.sibling;return null}function r(D){for(var O=new Map;D!==null;)D.key!==null?O.set(D.key,D):O.set(D.index,D),D=D.sibling;return O}function c(D,O){return D=vn(D,O),D.index=0,D.sibling=null,D}function h(D,O,H){return D.index=H,t?(H=D.alternate,H!==null?(H=H.index,H<O?(D.flags|=33554434,O):H):(D.flags|=33554434,O)):(D.flags|=1048576,O)}function b(D){return t&&D.alternate===null&&(D.flags|=33554434),D}function x(D,O,H,Y){return O===null||O.tag!==6?(O=Dd(H,D.mode,Y),O.return=D,O):(O=c(O,H),O.return=D,O)}function A(D,O,H,Y){var oe=H.type;return oe===g?F(D,O,H.props.children,Y,H.key):O!==null&&(O.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===R&&ym(oe)===O.type)?(O=c(O,H.props),Fs(O,H),O.return=D,O):(O=Fo(H.type,H.key,H.props,null,D.mode,Y),Fs(O,H),O.return=D,O)}function j(D,O,H,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==H.containerInfo||O.stateNode.implementation!==H.implementation?(O=zd(H,D.mode,Y),O.return=D,O):(O=c(O,H.children||[]),O.return=D,O)}function F(D,O,H,Y,oe){return O===null||O.tag!==7?(O=al(H,D.mode,Y,oe),O.return=D,O):(O=c(O,H),O.return=D,O)}function W(D,O,H){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Dd(""+O,D.mode,H),O.return=D,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case d:return H=Fo(O.type,O.key,O.props,null,D.mode,H),Fs(H,O),H.return=D,H;case p:return O=zd(O,D.mode,H),O.return=D,O;case R:var Y=O._init;return O=Y(O._payload),W(D,O,H)}if(Qt(O)||q(O))return O=al(O,D.mode,H,null),O.return=D,O;if(typeof O.then=="function")return W(D,Ao(O),H);if(O.$$typeof===w)return W(D,Po(D,O),H);To(D,O)}return null}function P(D,O,H,Y){var oe=O!==null?O.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return oe!==null?null:x(D,O,""+H,Y);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case d:return H.key===oe?A(D,O,H,Y):null;case p:return H.key===oe?j(D,O,H,Y):null;case R:return oe=H._init,H=oe(H._payload),P(D,O,H,Y)}if(Qt(H)||q(H))return oe!==null?null:F(D,O,H,Y,null);if(typeof H.then=="function")return P(D,O,Ao(H),Y);if(H.$$typeof===w)return P(D,O,Po(D,H),Y);To(D,H)}return null}function V(D,O,H,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return D=D.get(H)||null,x(O,D,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case d:return D=D.get(Y.key===null?H:Y.key)||null,A(O,D,Y,oe);case p:return D=D.get(Y.key===null?H:Y.key)||null,j(O,D,Y,oe);case R:var Ce=Y._init;return Y=Ce(Y._payload),V(D,O,H,Y,oe)}if(Qt(Y)||q(Y))return D=D.get(H)||null,F(O,D,Y,oe,null);if(typeof Y.then=="function")return V(D,O,H,Ao(Y),oe);if(Y.$$typeof===w)return V(D,O,H,Po(O,Y),oe);To(O,Y)}return null}function de(D,O,H,Y){for(var oe=null,Ce=null,fe=O,me=O=0,Dt=null;fe!==null&&me<H.length;me++){fe.index>me?(Dt=fe,fe=null):Dt=fe.sibling;var He=P(D,fe,H[me],Y);if(He===null){fe===null&&(fe=Dt);break}t&&fe&&He.alternate===null&&a(D,fe),O=h(He,O,me),Ce===null?oe=He:Ce.sibling=He,Ce=He,fe=Dt}if(me===H.length)return n(D,fe),Be&&Fn(D,me),oe;if(fe===null){for(;me<H.length;me++)fe=W(D,H[me],Y),fe!==null&&(O=h(fe,O,me),Ce===null?oe=fe:Ce.sibling=fe,Ce=fe);return Be&&Fn(D,me),oe}for(fe=r(fe);me<H.length;me++)Dt=V(fe,D,me,H[me],Y),Dt!==null&&(t&&Dt.alternate!==null&&fe.delete(Dt.key===null?me:Dt.key),O=h(Dt,O,me),Ce===null?oe=Dt:Ce.sibling=Dt,Ce=Dt);return t&&fe.forEach(function(Cn){return a(D,Cn)}),Be&&Fn(D,me),oe}function ve(D,O,H,Y){if(H==null)throw Error(s(151));for(var oe=null,Ce=null,fe=O,me=O=0,Dt=null,He=H.next();fe!==null&&!He.done;me++,He=H.next()){fe.index>me?(Dt=fe,fe=null):Dt=fe.sibling;var Cn=P(D,fe,He.value,Y);if(Cn===null){fe===null&&(fe=Dt);break}t&&fe&&Cn.alternate===null&&a(D,fe),O=h(Cn,O,me),Ce===null?oe=Cn:Ce.sibling=Cn,Ce=Cn,fe=Dt}if(He.done)return n(D,fe),Be&&Fn(D,me),oe;if(fe===null){for(;!He.done;me++,He=H.next())He=W(D,He.value,Y),He!==null&&(O=h(He,O,me),Ce===null?oe=He:Ce.sibling=He,Ce=He);return Be&&Fn(D,me),oe}for(fe=r(fe);!He.done;me++,He=H.next())He=V(fe,D,me,He.value,Y),He!==null&&(t&&He.alternate!==null&&fe.delete(He.key===null?me:He.key),O=h(He,O,me),Ce===null?oe=He:Ce.sibling=He,Ce=He);return t&&fe.forEach(function(cx){return a(D,cx)}),Be&&Fn(D,me),oe}function mt(D,O,H,Y){if(typeof H=="object"&&H!==null&&H.type===g&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case d:e:{for(var oe=H.key;O!==null;){if(O.key===oe){if(oe=H.type,oe===g){if(O.tag===7){n(D,O.sibling),Y=c(O,H.props.children),Y.return=D,D=Y;break e}}else if(O.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===R&&ym(oe)===O.type){n(D,O.sibling),Y=c(O,H.props),Fs(Y,H),Y.return=D,D=Y;break e}n(D,O);break}else a(D,O);O=O.sibling}H.type===g?(Y=al(H.props.children,D.mode,Y,H.key),Y.return=D,D=Y):(Y=Fo(H.type,H.key,H.props,null,D.mode,Y),Fs(Y,H),Y.return=D,D=Y)}return b(D);case p:e:{for(oe=H.key;O!==null;){if(O.key===oe)if(O.tag===4&&O.stateNode.containerInfo===H.containerInfo&&O.stateNode.implementation===H.implementation){n(D,O.sibling),Y=c(O,H.children||[]),Y.return=D,D=Y;break e}else{n(D,O);break}else a(D,O);O=O.sibling}Y=zd(H,D.mode,Y),Y.return=D,D=Y}return b(D);case R:return oe=H._init,H=oe(H._payload),mt(D,O,H,Y)}if(Qt(H))return de(D,O,H,Y);if(q(H)){if(oe=q(H),typeof oe!="function")throw Error(s(150));return H=oe.call(H),ve(D,O,H,Y)}if(typeof H.then=="function")return mt(D,O,Ao(H),Y);if(H.$$typeof===w)return mt(D,O,Po(D,H),Y);To(D,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,O!==null&&O.tag===6?(n(D,O.sibling),Y=c(O,H),Y.return=D,D=Y):(n(D,O),Y=Dd(H,D.mode,Y),Y.return=D,D=Y),b(D)):n(D,O)}return function(D,O,H,Y){try{qs=0;var oe=mt(D,O,H,Y);return Dl=null,oe}catch(fe){if(fe===Ps)throw fe;var Ce=Pa(29,fe,null,D.mode);return Ce.lanes=Y,Ce.return=D,Ce}finally{}}}var Yn=_m(!0),xm=_m(!1),zl=ze(null),No=ze(0);function wm(t,a){t=Vi,ue(No,t),ue(zl,a),Vi=t|a.baseLanes}function Vu(){ue(No,Vi),ue(zl,zl.current)}function qu(){Vi=No.current,Te(zl),Te(No)}var Ha=ze(null),pi=null;function sn(t){var a=t.alternate;ue(Nt,Nt.current&1),ue(Ha,t),pi===null&&(a===null||zl.current!==null||a.memoizedState!==null)&&(pi=t)}function Sm(t){if(t.tag===22){if(ue(Nt,Nt.current),ue(Ha,t),pi===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(pi=t)}}else rn()}function rn(){ue(Nt,Nt.current),ue(Ha,Ha.current)}function ji(t){Te(Ha),pi===t&&(pi=null),Te(Nt)}var Nt=ze(0);function Mo(t){for(var a=t;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Q_=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){a.aborted=!0,t.forEach(function(n){return n()})}},Z_=e.unstable_scheduleCallback,K_=e.unstable_NormalPriority,Mt={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new Q_,data:new Map,refCount:0}}function Gs(t){t.refCount--,t.refCount===0&&Z_(K_,function(){t.controller.abort()})}var Ys=null,Gu=0,Bl=0,Hl=null;function J_(t,a){if(Ys===null){var n=Ys=[];Gu=0,Bl=Kd(),Hl={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Gu++,a.then(Cm,Cm),a}function Cm(){if(--Gu===0&&Ys!==null){Hl!==null&&(Hl.status="fulfilled");var t=Ys;Ys=null,Bl=0,Hl=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function e2(t,a){var n=[],r={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return t.then(function(){r.status="fulfilled",r.value=a;for(var c=0;c<n.length;c++)(0,n[c])(a)},function(c){for(r.status="rejected",r.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),r}var Em=U.S;U.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&J_(t,a),Em!==null&&Em(t,a)};var Wn=ze(null);function Yu(){var t=Wn.current;return t!==null?t:nt.pooledCache}function ko(t,a){a===null?ue(Wn,Wn.current):ue(Wn,a.pool)}function Am(){var t=Yu();return t===null?null:{parent:Mt._currentValue,pool:t}}var on=0,we=null,Ye=null,St=null,$o=!1,Ul=!1,Xn=!1,Oo=0,Ws=0,Il=null,t2=0;function _t(){throw Error(s(321))}function Wu(t,a){if(a===null)return!1;for(var n=0;n<a.length&&n<t.length;n++)if(!xa(t[n],a[n]))return!1;return!0}function Xu(t,a,n,r,c,h){return on=h,we=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,U.H=t===null||t.memoizedState===null?Qn:cn,Xn=!1,h=n(r,c),Xn=!1,Ul&&(h=Nm(a,n,r,c)),Tm(t),h}function Tm(t){U.H=mi;var a=Ye!==null&&Ye.next!==null;if(on=0,St=Ye=we=null,$o=!1,Ws=0,Il=null,a)throw Error(s(300));t===null||Rt||(t=t.dependencies,t!==null&&Io(t)&&(Rt=!0))}function Nm(t,a,n,r){we=t;var c=0;do{if(Ul&&(Il=null),Ws=0,Ul=!1,25<=c)throw Error(s(301));if(c+=1,St=Ye=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}U.H=Zn,h=a(n,r)}while(Ul);return h}function a2(){var t=U.H,a=t.useState()[0];return a=typeof a.then=="function"?Xs(a):a,t=t.useState()[0],(Ye!==null?Ye.memoizedState:null)!==t&&(we.flags|=1024),a}function Qu(){var t=Oo!==0;return Oo=0,t}function Zu(t,a,n){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~n}function Ku(t){if($o){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}$o=!1}on=0,St=Ye=we=null,Ul=!1,Ws=Oo=0,Il=null}function pa(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?we.memoizedState=St=t:St=St.next=t,St}function Ct(){if(Ye===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var a=St===null?we.memoizedState:St.next;if(a!==null)St=a,Ye=t;else{if(t===null)throw we.alternate===null?Error(s(467)):Error(s(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},St===null?we.memoizedState=St=t:St=St.next=t}return St}var jo;jo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Xs(t){var a=Ws;return Ws+=1,Il===null&&(Il=[]),t=vm(Il,t,a),a=we,(St===null?a.memoizedState:St.next)===null&&(a=a.alternate,U.H=a===null||a.memoizedState===null?Qn:cn),t}function Ro(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xs(t);if(t.$$typeof===w)return Kt(t)}throw Error(s(438,String(t)))}function Ju(t){var a=null,n=we.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var r=we.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(a={data:r.data.map(function(c){return c.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=jo(),we.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(t),r=0;r<t;r++)n[r]=z;return a.index++,n}function Ri(t,a){return typeof a=="function"?a(t):a}function Lo(t){var a=Ct();return ed(a,Ye,t)}function ed(t,a,n){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var c=t.baseQueue,h=r.pending;if(h!==null){if(c!==null){var b=c.next;c.next=h.next,h.next=b}a.baseQueue=c=h,r.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{a=c.next;var x=b=null,A=null,j=a,F=!1;do{var W=j.lane&-536870913;if(W!==j.lane?(Le&W)===W:(on&W)===W){var P=j.revertLane;if(P===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),W===Bl&&(F=!0);else if((on&P)===P){j=j.next,P===Bl&&(F=!0);continue}else W={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},A===null?(x=A=W,b=h):A=A.next=W,we.lanes|=P,bn|=P;W=j.action,Xn&&n(h,W),h=j.hasEagerState?j.eagerState:n(h,W)}else P={lane:W,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},A===null?(x=A=P,b=h):A=A.next=P,we.lanes|=W,bn|=W;j=j.next}while(j!==null&&j!==a);if(A===null?b=h:A.next=x,!xa(h,t.memoizedState)&&(Rt=!0,F&&(n=Hl,n!==null)))throw n;t.memoizedState=h,t.baseState=b,t.baseQueue=A,r.lastRenderedState=h}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function td(t){var a=Ct(),n=a.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var r=n.dispatch,c=n.pending,h=a.memoizedState;if(c!==null){n.pending=null;var b=c=c.next;do h=t(h,b.action),b=b.next;while(b!==c);xa(h,a.memoizedState)||(Rt=!0),a.memoizedState=h,a.baseQueue===null&&(a.baseState=h),n.lastRenderedState=h}return[h,r]}function Mm(t,a,n){var r=we,c=Ct(),h=Be;if(h){if(n===void 0)throw Error(s(407));n=n()}else n=a();var b=!xa((Ye||c).memoizedState,n);if(b&&(c.memoizedState=n,Rt=!0),c=c.queue,nd(Om.bind(null,r,c,t),[t]),c.getSnapshot!==a||b||St!==null&&St.memoizedState.tag&1){if(r.flags|=2048,Pl(9,$m.bind(null,r,c,n,a),{destroy:void 0},null),nt===null)throw Error(s(349));h||(on&60)!==0||km(r,a,n)}return n}function km(t,a,n){t.flags|=16384,t={getSnapshot:a,value:n},a=we.updateQueue,a===null?(a=jo(),we.updateQueue=a,a.stores=[t]):(n=a.stores,n===null?a.stores=[t]:n.push(t))}function $m(t,a,n,r){a.value=n,a.getSnapshot=r,jm(a)&&Rm(t)}function Om(t,a,n){return n(function(){jm(a)&&Rm(t)})}function jm(t){var a=t.getSnapshot;t=t.value;try{var n=a();return!xa(t,n)}catch{return!0}}function Rm(t){var a=ln(t,2);a!==null&&sa(a,t,2)}function ad(t){var a=pa();if(typeof t=="function"){var n=t;if(t=n(),Xn){tn(!0);try{n()}finally{tn(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:t},a}function Lm(t,a,n,r){return t.baseState=n,ed(t,Ye,typeof r=="function"?r:Ri)}function i2(t,a,n,r,c){if(Bo(t))throw Error(s(485));if(t=a.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};U.T!==null?n(!0):h.isTransition=!1,r(h),n=a.pending,n===null?(h.next=a.pending=h,Dm(a,h)):(h.next=n.next,a.pending=n.next=h)}}function Dm(t,a){var n=a.action,r=a.payload,c=t.state;if(a.isTransition){var h=U.T,b={};U.T=b;try{var x=n(c,r),A=U.S;A!==null&&A(b,x),zm(t,a,x)}catch(j){id(t,a,j)}finally{U.T=h}}else try{h=n(c,r),zm(t,a,h)}catch(j){id(t,a,j)}}function zm(t,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Bm(t,a,r)},function(r){return id(t,a,r)}):Bm(t,a,n)}function Bm(t,a,n){a.status="fulfilled",a.value=n,Hm(a),t.state=n,a=t.pending,a!==null&&(n=a.next,n===a?t.pending=null:(n=n.next,a.next=n,Dm(t,n)))}function id(t,a,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do a.status="rejected",a.reason=n,Hm(a),a=a.next;while(a!==r)}t.action=null}function Hm(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Um(t,a){return a}function Im(t,a){if(Be){var n=nt.formState;if(n!==null){e:{var r=we;if(Be){if(Vt){t:{for(var c=Vt,h=fi;c.nodeType!==8;){if(!h){c=null;break t}if(c=ii(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Vt=ii(c.nextSibling),r=c.data==="F!";break e}}Gn(r)}r=!1}r&&(a=n[0])}}return n=pa(),n.memoizedState=n.baseState=a,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:a},n.queue=r,n=lg.bind(null,we,r),r.dispatch=n,r=ad(!1),h=cd.bind(null,we,!1,r.queue),r=pa(),c={state:a,dispatch:null,action:t,pending:null},r.queue=c,n=i2.bind(null,we,c,h,n),c.dispatch=n,r.memoizedState=t,[a,n,!1]}function Pm(t){var a=Ct();return Vm(a,Ye,t)}function Vm(t,a,n){a=ed(t,a,Um)[0],t=Lo(Ri)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Xs(a):a;var r=Ct(),c=r.queue,h=c.dispatch;return n!==r.memoizedState&&(we.flags|=2048,Pl(9,n2.bind(null,c,n),{destroy:void 0},null)),[a,h,t]}function n2(t,a){t.action=a}function qm(t){var a=Ct(),n=Ye;if(n!==null)return Vm(a,n,t);Ct(),a=a.memoizedState,n=Ct();var r=n.queue.dispatch;return n.memoizedState=t,[a,r,!1]}function Pl(t,a,n,r){return t={tag:t,create:a,inst:n,deps:r,next:null},a=we.updateQueue,a===null&&(a=jo(),we.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,a.lastEffect=t),t}function Fm(){return Ct().memoizedState}function Do(t,a,n,r){var c=pa();we.flags|=t,c.memoizedState=Pl(1|a,n,{destroy:void 0},r===void 0?null:r)}function zo(t,a,n,r){var c=Ct();r=r===void 0?null:r;var h=c.memoizedState.inst;Ye!==null&&r!==null&&Wu(r,Ye.memoizedState.deps)?c.memoizedState=Pl(a,n,h,r):(we.flags|=t,c.memoizedState=Pl(1|a,n,h,r))}function Gm(t,a){Do(8390656,8,t,a)}function nd(t,a){zo(2048,8,t,a)}function Ym(t,a){return zo(4,2,t,a)}function Wm(t,a){return zo(4,4,t,a)}function Xm(t,a){if(typeof a=="function"){t=t();var n=a(t);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Qm(t,a,n){n=n!=null?n.concat([t]):null,zo(4,4,Xm.bind(null,a,t),n)}function ld(){}function Zm(t,a){var n=Ct();a=a===void 0?null:a;var r=n.memoizedState;return a!==null&&Wu(a,r[1])?r[0]:(n.memoizedState=[t,a],t)}function Km(t,a){var n=Ct();a=a===void 0?null:a;var r=n.memoizedState;if(a!==null&&Wu(a,r[1]))return r[0];if(r=t(),Xn){tn(!0);try{t()}finally{tn(!1)}}return n.memoizedState=[r,a],r}function sd(t,a,n){return n===void 0||(on&1073741824)!==0?t.memoizedState=a:(t.memoizedState=n,t=ev(),we.lanes|=t,bn|=t,n)}function Jm(t,a,n,r){return xa(n,a)?n:zl.current!==null?(t=sd(t,n,r),xa(t,a)||(Rt=!0),t):(on&42)===0?(Rt=!0,t.memoizedState=n):(t=ev(),we.lanes|=t,bn|=t,a)}function eg(t,a,n,r,c){var h=K.p;K.p=h!==0&&8>h?h:8;var b=U.T,x={};U.T=x,cd(t,!1,a,n);try{var A=c(),j=U.S;if(j!==null&&j(x,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=e2(A,r);Qs(t,a,F,Ea(t))}else Qs(t,a,r,Ea(t))}catch(W){Qs(t,a,{then:function(){},status:"rejected",reason:W},Ea())}finally{K.p=h,U.T=b}}function l2(){}function rd(t,a,n,r){if(t.tag!==5)throw Error(s(476));var c=tg(t).queue;eg(t,c,a,Ie,n===null?l2:function(){return ag(t),n(r)})}function tg(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Ie,baseState:Ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:Ie},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:n},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function ag(t){var a=tg(t).next.queue;Qs(t,a,{},Ea())}function od(){return Kt(gr)}function ig(){return Ct().memoizedState}function ng(){return Ct().memoizedState}function s2(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var n=Ea();t=hn(n);var r=fn(a,t,n);r!==null&&(sa(r,a,n),Js(r,a,n)),a={cache:Fu()},t.payload=a;return}a=a.return}}function r2(t,a,n){var r=Ea();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bo(t)?sg(a,n):(n=Bu(t,a,n,r),n!==null&&(sa(n,t,r),rg(n,a,r)))}function lg(t,a,n){var r=Ea();Qs(t,a,n,r)}function Qs(t,a,n,r){var c={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bo(t))sg(a,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=a.lastRenderedReducer,h!==null))try{var b=a.lastRenderedState,x=h(b,n);if(c.hasEagerState=!0,c.eagerState=x,xa(x,b))return xo(t,a,c,0),nt===null&&_o(),!1}catch{}finally{}if(n=Bu(t,a,c,r),n!==null)return sa(n,t,r),rg(n,a,r),!0}return!1}function cd(t,a,n,r){if(r={lane:2,revertLane:Kd(),action:r,hasEagerState:!1,eagerState:null,next:null},Bo(t)){if(a)throw Error(s(479))}else a=Bu(t,n,r,2),a!==null&&sa(a,t,2)}function Bo(t){var a=t.alternate;return t===we||a!==null&&a===we}function sg(t,a){Ul=$o=!0;var n=t.pending;n===null?a.next=a:(a.next=n.next,n.next=a),t.pending=a}function rg(t,a,n){if((n&4194176)!==0){var r=a.lanes;r&=t.pendingLanes,n|=r,a.lanes=n,bp(t,n)}}var mi={readContext:Kt,use:Ro,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t};mi.useCacheRefresh=_t,mi.useMemoCache=_t,mi.useHostTransitionStatus=_t,mi.useFormState=_t,mi.useActionState=_t,mi.useOptimistic=_t;var Qn={readContext:Kt,use:Ro,useCallback:function(t,a){return pa().memoizedState=[t,a===void 0?null:a],t},useContext:Kt,useEffect:Gm,useImperativeHandle:function(t,a,n){n=n!=null?n.concat([t]):null,Do(4194308,4,Xm.bind(null,a,t),n)},useLayoutEffect:function(t,a){return Do(4194308,4,t,a)},useInsertionEffect:function(t,a){Do(4,2,t,a)},useMemo:function(t,a){var n=pa();a=a===void 0?null:a;var r=t();if(Xn){tn(!0);try{t()}finally{tn(!1)}}return n.memoizedState=[r,a],r},useReducer:function(t,a,n){var r=pa();if(n!==void 0){var c=n(a);if(Xn){tn(!0);try{n(a)}finally{tn(!1)}}}else c=a;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=r2.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var a=pa();return t={current:t},a.memoizedState=t},useState:function(t){t=ad(t);var a=t.queue,n=lg.bind(null,we,a);return a.dispatch=n,[t.memoizedState,n]},useDebugValue:ld,useDeferredValue:function(t,a){var n=pa();return sd(n,t,a)},useTransition:function(){var t=ad(!1);return t=eg.bind(null,we,t.queue,!0,!1),pa().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,n){var r=we,c=pa();if(Be){if(n===void 0)throw Error(s(407));n=n()}else{if(n=a(),nt===null)throw Error(s(349));(Le&60)!==0||km(r,a,n)}c.memoizedState=n;var h={value:n,getSnapshot:a};return c.queue=h,Gm(Om.bind(null,r,h,t),[t]),r.flags|=2048,Pl(9,$m.bind(null,r,h,n,a),{destroy:void 0},null),n},useId:function(){var t=pa(),a=nt.identifierPrefix;if(Be){var n=Oi,r=$i;n=(r&~(1<<32-_a(r)-1)).toString(32)+n,a=":"+a+"R"+n,n=Oo++,0<n&&(a+="H"+n.toString(32)),a+=":"}else n=t2++,a=":"+a+"r"+n.toString(32)+":";return t.memoizedState=a},useCacheRefresh:function(){return pa().memoizedState=s2.bind(null,we)}};Qn.useMemoCache=Ju,Qn.useHostTransitionStatus=od,Qn.useFormState=Im,Qn.useActionState=Im,Qn.useOptimistic=function(t){var a=pa();a.memoizedState=a.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=cd.bind(null,we,!0,n),n.dispatch=a,[t,a]};var cn={readContext:Kt,use:Ro,useCallback:Zm,useContext:Kt,useEffect:nd,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Wm,useMemo:Km,useReducer:Lo,useRef:Fm,useState:function(){return Lo(Ri)},useDebugValue:ld,useDeferredValue:function(t,a){var n=Ct();return Jm(n,Ye.memoizedState,t,a)},useTransition:function(){var t=Lo(Ri)[0],a=Ct().memoizedState;return[typeof t=="boolean"?t:Xs(t),a]},useSyncExternalStore:Mm,useId:ig};cn.useCacheRefresh=ng,cn.useMemoCache=Ju,cn.useHostTransitionStatus=od,cn.useFormState=Pm,cn.useActionState=Pm,cn.useOptimistic=function(t,a){var n=Ct();return Lm(n,Ye,t,a)};var Zn={readContext:Kt,use:Ro,useCallback:Zm,useContext:Kt,useEffect:nd,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Wm,useMemo:Km,useReducer:td,useRef:Fm,useState:function(){return td(Ri)},useDebugValue:ld,useDeferredValue:function(t,a){var n=Ct();return Ye===null?sd(n,t,a):Jm(n,Ye.memoizedState,t,a)},useTransition:function(){var t=td(Ri)[0],a=Ct().memoizedState;return[typeof t=="boolean"?t:Xs(t),a]},useSyncExternalStore:Mm,useId:ig};Zn.useCacheRefresh=ng,Zn.useMemoCache=Ju,Zn.useHostTransitionStatus=od,Zn.useFormState=qm,Zn.useActionState=qm,Zn.useOptimistic=function(t,a){var n=Ct();return Ye!==null?Lm(n,Ye,t,a):(n.baseState=t,[t,n.queue.dispatch])};function ud(t,a,n,r){a=t.memoizedState,n=n(r,a),n=n==null?a:G({},a,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dd={isMounted:function(t){return(t=t._reactInternals)?J(t)===t:!1},enqueueSetState:function(t,a,n){t=t._reactInternals;var r=Ea(),c=hn(r);c.payload=a,n!=null&&(c.callback=n),a=fn(t,c,r),a!==null&&(sa(a,t,r),Js(a,t,r))},enqueueReplaceState:function(t,a,n){t=t._reactInternals;var r=Ea(),c=hn(r);c.tag=1,c.payload=a,n!=null&&(c.callback=n),a=fn(t,c,r),a!==null&&(sa(a,t,r),Js(a,t,r))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var n=Ea(),r=hn(n);r.tag=2,a!=null&&(r.callback=a),a=fn(t,r,n),a!==null&&(sa(a,t,n),Js(a,t,n))}};function og(t,a,n,r,c,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,h,b):a.prototype&&a.prototype.isPureReactComponent?!zs(n,r)||!zs(c,h):!0}function cg(t,a,n,r){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,r),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,r),a.state!==t&&dd.enqueueReplaceState(a,a.state,null)}function Kn(t,a){var n=a;if("ref"in a){n={};for(var r in a)r!=="ref"&&(n[r]=a[r])}if(t=t.defaultProps){n===a&&(n=G({},n));for(var c in t)n[c]===void 0&&(n[c]=t[c])}return n}var Ho=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ug(t){Ho(t)}function dg(t){console.error(t)}function hg(t){Ho(t)}function Uo(t,a){try{var n=t.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(r){setTimeout(function(){throw r})}}function fg(t,a,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function hd(t,a,n){return n=hn(n),n.tag=3,n.payload={element:null},n.callback=function(){Uo(t,a)},n}function pg(t){return t=hn(t),t.tag=3,t}function mg(t,a,n,r){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;t.payload=function(){return c(h)},t.callback=function(){fg(a,n,r)}}var b=n.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){fg(a,n,r),typeof c!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var x=r.stack;this.componentDidCatch(r.value,{componentStack:x!==null?x:""})})}function o2(t,a,n,r,c){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(a=n.alternate,a!==null&&Ks(a,n,c,!0),n=Ha.current,n!==null){switch(n.tag){case 13:return pi===null?Yd():n.alternate===null&&pt===0&&(pt=3),n.flags&=-257,n.flags|=65536,n.lanes=c,r===Pu?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([r]):a.add(r),Xd(t,r,c)),!1;case 22:return n.flags|=65536,r===Pu?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([r]):n.add(r)),Xd(t,r,c)),!1}throw Error(s(435,n.tag))}return Xd(t,r,c),Yd(),!1}if(Be)return a=Ha.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=c,r!==Iu&&(t=Error(s(422),{cause:r}),Is(Da(t,n)))):(r!==Iu&&(a=Error(s(423),{cause:r}),Is(Da(a,n))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=Da(r,n),c=hd(t.stateNode,r,c),Td(t,c),pt!==4&&(pt=2)),!1;var h=Error(s(520),{cause:r});if(h=Da(h,n),rr===null?rr=[h]:rr.push(h),pt!==4&&(pt=2),a===null)return!0;r=Da(r,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,t=c&-c,n.lanes|=t,t=hd(n.stateNode,r,t),Td(n,t),!1;case 1:if(a=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yn===null||!yn.has(h))))return n.flags|=65536,c&=-c,n.lanes|=c,c=pg(c),mg(c,t,n,r),Td(n,c),!1}n=n.return}while(n!==null);return!1}var gg=Error(s(461)),Rt=!1;function qt(t,a,n,r){a.child=t===null?xm(a,null,n,r):Yn(a,t.child,n,r)}function vg(t,a,n,r,c){n=n.render;var h=a.ref;if("ref"in r){var b={};for(var x in r)x!=="ref"&&(b[x]=r[x])}else b=r;return el(a),r=Xu(t,a,n,b,h,c),x=Qu(),t!==null&&!Rt?(Zu(t,a,c),Li(t,a,c)):(Be&&x&&Hu(a),a.flags|=1,qt(t,a,r,c),a.child)}function bg(t,a,n,r,c){if(t===null){var h=n.type;return typeof h=="function"&&!Ld(h)&&h.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=h,yg(t,a,h,r,c)):(t=Fo(n.type,null,r,a,a.mode,c),t.ref=a.ref,t.return=a,a.child=t)}if(h=t.child,!xd(t,c)){var b=h.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(b,r)&&t.ref===a.ref)return Li(t,a,c)}return a.flags|=1,t=vn(h,r),t.ref=a.ref,t.return=a,a.child=t}function yg(t,a,n,r,c){if(t!==null){var h=t.memoizedProps;if(zs(h,r)&&t.ref===a.ref)if(Rt=!1,a.pendingProps=r=h,xd(t,c))(t.flags&131072)!==0&&(Rt=!0);else return a.lanes=t.lanes,Li(t,a,c)}return fd(t,a,n,r,c)}function _g(t,a,n){var r=a.pendingProps,c=r.children,h=(a.stateNode._pendingVisibility&2)!==0,b=t!==null?t.memoizedState:null;if(Zs(t,a),r.mode==="hidden"||h){if((a.flags&128)!==0){if(r=b!==null?b.baseLanes|n:n,t!==null){for(c=a.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;a.childLanes=h&~r}else a.childLanes=0,a.child=null;return xg(t,a,r,n)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&ko(a,b!==null?b.cachePool:null),b!==null?wm(a,b):Vu(),Sm(a);else return a.lanes=a.childLanes=536870912,xg(t,a,b!==null?b.baseLanes|n:n,n)}else b!==null?(ko(a,b.cachePool),wm(a,b),rn(),a.memoizedState=null):(t!==null&&ko(a,null),Vu(),rn());return qt(t,a,c,n),a.child}function xg(t,a,n,r){var c=Yu();return c=c===null?null:{parent:Mt._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},t!==null&&ko(a,null),Vu(),Sm(a),t!==null&&Ks(t,a,r,!0),null}function Zs(t,a){var n=a.ref;if(n===null)t!==null&&t.ref!==null&&(a.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(a.flags|=2097664)}}function fd(t,a,n,r,c){return el(a),n=Xu(t,a,n,r,void 0,c),r=Qu(),t!==null&&!Rt?(Zu(t,a,c),Li(t,a,c)):(Be&&r&&Hu(a),a.flags|=1,qt(t,a,n,c),a.child)}function wg(t,a,n,r,c,h){return el(a),a.updateQueue=null,n=Nm(a,r,n,c),Tm(t),r=Qu(),t!==null&&!Rt?(Zu(t,a,h),Li(t,a,h)):(Be&&r&&Hu(a),a.flags|=1,qt(t,a,n,h),a.child)}function Sg(t,a,n,r,c){if(el(a),a.stateNode===null){var h=jl,b=n.contextType;typeof b=="object"&&b!==null&&(h=Kt(b)),h=new n(r,h),a.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=dd,a.stateNode=h,h._reactInternals=a,h=a.stateNode,h.props=r,h.state=a.memoizedState,h.refs={},Ed(a),b=n.contextType,h.context=typeof b=="object"&&b!==null?Kt(b):jl,h.state=a.memoizedState,b=n.getDerivedStateFromProps,typeof b=="function"&&(ud(a,n,b,r),h.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&dd.enqueueReplaceState(h,h.state,null),tr(a,r,h,c),er(),h.state=a.memoizedState),typeof h.componentDidMount=="function"&&(a.flags|=4194308),r=!0}else if(t===null){h=a.stateNode;var x=a.memoizedProps,A=Kn(n,x);h.props=A;var j=h.context,F=n.contextType;b=jl,typeof F=="object"&&F!==null&&(b=Kt(F));var W=n.getDerivedStateFromProps;F=typeof W=="function"||typeof h.getSnapshotBeforeUpdate=="function",x=a.pendingProps!==x,F||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x||j!==b)&&cg(a,h,r,b),dn=!1;var P=a.memoizedState;h.state=P,tr(a,r,h,c),er(),j=a.memoizedState,x||P!==j||dn?(typeof W=="function"&&(ud(a,n,W,r),j=a.memoizedState),(A=dn||og(a,n,A,r,P,j,b))?(F||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(a.flags|=4194308)):(typeof h.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=r,a.memoizedState=j),h.props=r,h.state=j,h.context=b,r=A):(typeof h.componentDidMount=="function"&&(a.flags|=4194308),r=!1)}else{h=a.stateNode,Ad(t,a),b=a.memoizedProps,F=Kn(n,b),h.props=F,W=a.pendingProps,P=h.context,j=n.contextType,A=jl,typeof j=="object"&&j!==null&&(A=Kt(j)),x=n.getDerivedStateFromProps,(j=typeof x=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==W||P!==A)&&cg(a,h,r,A),dn=!1,P=a.memoizedState,h.state=P,tr(a,r,h,c),er();var V=a.memoizedState;b!==W||P!==V||dn||t!==null&&t.dependencies!==null&&Io(t.dependencies)?(typeof x=="function"&&(ud(a,n,x,r),V=a.memoizedState),(F=dn||og(a,n,F,r,P,V,A)||t!==null&&t.dependencies!==null&&Io(t.dependencies))?(j||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,V,A),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,V,A)),typeof h.componentDidUpdate=="function"&&(a.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&P===t.memoizedState||(a.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&P===t.memoizedState||(a.flags|=1024),a.memoizedProps=r,a.memoizedState=V),h.props=r,h.state=V,h.context=A,r=F):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&P===t.memoizedState||(a.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&P===t.memoizedState||(a.flags|=1024),r=!1)}return h=r,Zs(t,a),r=(a.flags&128)!==0,h||r?(h=a.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:h.render(),a.flags|=1,t!==null&&r?(a.child=Yn(a,t.child,null,c),a.child=Yn(a,null,n,c)):qt(t,a,n,c),a.memoizedState=h.state,t=a.child):t=Li(t,a,c),t}function Cg(t,a,n,r){return Us(),a.flags|=256,qt(t,a,n,r),a.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(t){return{baseLanes:t,cachePool:Am()}}function gd(t,a,n){return t=t!==null?t.childLanes&~n:0,a&&(t|=Va),t}function Eg(t,a,n){var r=a.pendingProps,c=!1,h=(a.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(Nt.current&2)!==0),b&&(c=!0,a.flags&=-129),b=(a.flags&32)!==0,a.flags&=-33,t===null){if(Be){if(c?sn(a):rn(),Be){var x=Vt,A;if(A=x){e:{for(A=x,x=fi;A.nodeType!==8;){if(!x){x=null;break e}if(A=ii(A.nextSibling),A===null){x=null;break e}}x=A}x!==null?(a.memoizedState={dehydrated:x,treeContext:qn!==null?{id:$i,overflow:Oi}:null,retryLane:536870912},A=Pa(18,null,null,0),A.stateNode=x,A.return=a,a.child=A,la=a,Vt=null,A=!0):A=!1}A||Gn(a)}if(x=a.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return x.data==="$!"?a.lanes=16:a.lanes=536870912,null;ji(a)}return x=r.children,r=r.fallback,c?(rn(),c=a.mode,x=bd({mode:"hidden",children:x},c),r=al(r,c,n,null),x.return=a,r.return=a,x.sibling=r,a.child=x,c=a.child,c.memoizedState=md(n),c.childLanes=gd(t,b,n),a.memoizedState=pd,r):(sn(a),vd(a,x))}if(A=t.memoizedState,A!==null&&(x=A.dehydrated,x!==null)){if(h)a.flags&256?(sn(a),a.flags&=-257,a=yd(t,a,n)):a.memoizedState!==null?(rn(),a.child=t.child,a.flags|=128,a=null):(rn(),c=r.fallback,x=a.mode,r=bd({mode:"visible",children:r.children},x),c=al(c,x,n,null),c.flags|=2,r.return=a,c.return=a,r.sibling=c,a.child=r,Yn(a,t.child,null,n),r=a.child,r.memoizedState=md(n),r.childLanes=gd(t,b,n),a.memoizedState=pd,a=c);else if(sn(a),x.data==="$!"){if(b=x.nextSibling&&x.nextSibling.dataset,b)var j=b.dgst;b=j,r=Error(s(419)),r.stack="",r.digest=b,Is({value:r,source:null,stack:null}),a=yd(t,a,n)}else if(Rt||Ks(t,a,n,!1),b=(n&t.childLanes)!==0,Rt||b){if(b=nt,b!==null){if(r=n&-n,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(b.suspendedLanes|n))!==0?0:r,r!==0&&r!==A.retryLane)throw A.retryLane=r,ln(t,r),sa(b,t,r),gg}x.data==="$?"||Yd(),a=yd(t,a,n)}else x.data==="$?"?(a.flags|=128,a.child=t.child,a=S2.bind(null,t),x._reactRetry=a,a=null):(t=A.treeContext,Vt=ii(x.nextSibling),la=a,Be=!0,ti=null,fi=!1,t!==null&&(za[Ba++]=$i,za[Ba++]=Oi,za[Ba++]=qn,$i=t.id,Oi=t.overflow,qn=a),a=vd(a,r.children),a.flags|=4096);return a}return c?(rn(),c=r.fallback,x=a.mode,A=t.child,j=A.sibling,r=vn(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&31457280,j!==null?c=vn(j,c):(c=al(c,x,n,null),c.flags|=2),c.return=a,r.return=a,r.sibling=c,a.child=r,r=c,c=a.child,x=t.child.memoizedState,x===null?x=md(n):(A=x.cachePool,A!==null?(j=Mt._currentValue,A=A.parent!==j?{parent:j,pool:j}:A):A=Am(),x={baseLanes:x.baseLanes|n,cachePool:A}),c.memoizedState=x,c.childLanes=gd(t,b,n),a.memoizedState=pd,r):(sn(a),n=t.child,t=n.sibling,n=vn(n,{mode:"visible",children:r.children}),n.return=a,n.sibling=null,t!==null&&(b=a.deletions,b===null?(a.deletions=[t],a.flags|=16):b.push(t)),a.child=n,a.memoizedState=null,n)}function vd(t,a){return a=bd({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function bd(t,a){return Zg(t,a,0,null)}function yd(t,a,n){return Yn(a,t.child,null,n),t=vd(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Ag(t,a,n){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a),Sd(t.return,a,n)}function _d(t,a,n,r,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:c}:(h.isBackwards=a,h.rendering=null,h.renderingStartTime=0,h.last=r,h.tail=n,h.tailMode=c)}function Tg(t,a,n){var r=a.pendingProps,c=r.revealOrder,h=r.tail;if(qt(t,a,r.children,n),r=Nt.current,(r&2)!==0)r=r&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,n,a);else if(t.tag===19)Ag(t,n,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(ue(Nt,r),c){case"forwards":for(n=a.child,c=null;n!==null;)t=n.alternate,t!==null&&Mo(t)===null&&(c=n),n=n.sibling;n=c,n===null?(c=a.child,a.child=null):(c=n.sibling,n.sibling=null),_d(a,!1,c,n,h);break;case"backwards":for(n=null,c=a.child,a.child=null;c!==null;){if(t=c.alternate,t!==null&&Mo(t)===null){a.child=c;break}t=c.sibling,c.sibling=n,n=c,c=t}_d(a,!0,n,null,h);break;case"together":_d(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Li(t,a,n){if(t!==null&&(a.dependencies=t.dependencies),bn|=a.lanes,(n&a.childLanes)===0)if(t!==null){if(Ks(t,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(s(153));if(a.child!==null){for(t=a.child,n=vn(t,t.pendingProps),a.child=n,n.return=a;t.sibling!==null;)t=t.sibling,n=n.sibling=vn(t,t.pendingProps),n.return=a;n.sibling=null}return a.child}function xd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Io(t)))}function c2(t,a,n){switch(a.tag){case 3:zn(a,a.stateNode.containerInfo),un(a,Mt,t.memoizedState.cache),Us();break;case 27:case 5:du(a);break;case 4:zn(a,a.stateNode.containerInfo);break;case 10:un(a,a.type,a.memoizedProps.value);break;case 13:var r=a.memoizedState;if(r!==null)return r.dehydrated!==null?(sn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?Eg(t,a,n):(sn(a),t=Li(t,a,n),t!==null?t.sibling:null);sn(a);break;case 19:var c=(t.flags&128)!==0;if(r=(n&a.childLanes)!==0,r||(Ks(t,a,n,!1),r=(n&a.childLanes)!==0),c){if(r)return Tg(t,a,n);a.flags|=128}if(c=a.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ue(Nt,Nt.current),r)break;return null;case 22:case 23:return a.lanes=0,_g(t,a,n);case 24:un(a,Mt,t.memoizedState.cache)}return Li(t,a,n)}function Ng(t,a,n){if(t!==null)if(t.memoizedProps!==a.pendingProps)Rt=!0;else{if(!xd(t,n)&&(a.flags&128)===0)return Rt=!1,c2(t,a,n);Rt=(t.flags&131072)!==0}else Rt=!1,Be&&(a.flags&1048576)!==0&&hm(a,Co,a.index);switch(a.lanes=0,a.tag){case 16:e:{t=a.pendingProps;var r=a.elementType,c=r._init;if(r=c(r._payload),a.type=r,typeof r=="function")Ld(r)?(t=Kn(r,t),a.tag=1,a=Sg(null,a,r,t,n)):(a.tag=0,a=fd(null,a,r,t,n));else{if(r!=null){if(c=r.$$typeof,c===C){a.tag=11,a=vg(null,a,r,t,n);break e}else if(c===T){a.tag=14,a=bg(null,a,r,t,n);break e}}throw a=ce(r)||r,Error(s(306,a,""))}}return a;case 0:return fd(t,a,a.type,a.pendingProps,n);case 1:return r=a.type,c=Kn(r,a.pendingProps),Sg(t,a,r,c,n);case 3:e:{if(zn(a,a.stateNode.containerInfo),t===null)throw Error(s(387));var h=a.pendingProps;c=a.memoizedState,r=c.element,Ad(t,a),tr(a,h,null,n);var b=a.memoizedState;if(h=b.cache,un(a,Mt,h),h!==c.cache&&Cd(a,[Mt],n,!0),er(),h=b.element,c.isDehydrated)if(c={element:h,isDehydrated:!1,cache:b.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=Cg(t,a,h,n);break e}else if(h!==r){r=Da(Error(s(424)),a),Is(r),a=Cg(t,a,h,n);break e}else for(Vt=ii(a.stateNode.containerInfo.firstChild),la=a,Be=!0,ti=null,fi=!0,n=xm(a,null,h,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),h===r){a=Li(t,a,n);break e}qt(t,a,h,n)}a=a.child}return a;case 26:return Zs(t,a),t===null?(n=$v(a.type,null,a.pendingProps,null))?a.memoizedState=n:Be||(n=a.type,t=a.pendingProps,r=ic(ge.current).createElement(n),r[Zt]=a,r[ha]=t,Ft(r,n,t),jt(r),a.stateNode=r):a.memoizedState=$v(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return du(a),t===null&&Be&&(r=a.stateNode=Nv(a.type,a.pendingProps,ge.current),la=a,fi=!0,Vt=ii(r.firstChild)),r=a.pendingProps.children,t!==null||Be?qt(t,a,r,n):a.child=Yn(a,null,r,n),Zs(t,a),a.child;case 5:return t===null&&Be&&((c=r=Vt)&&(r=H2(r,a.type,a.pendingProps,fi),r!==null?(a.stateNode=r,la=a,Vt=ii(r.firstChild),fi=!1,c=!0):c=!1),c||Gn(a)),du(a),c=a.type,h=a.pendingProps,b=t!==null?t.memoizedProps:null,r=h.children,rh(c,h)?r=null:b!==null&&rh(c,b)&&(a.flags|=32),a.memoizedState!==null&&(c=Xu(t,a,a2,null,null,n),gr._currentValue=c),Zs(t,a),qt(t,a,r,n),a.child;case 6:return t===null&&Be&&((t=n=Vt)&&(n=U2(n,a.pendingProps,fi),n!==null?(a.stateNode=n,la=a,Vt=null,t=!0):t=!1),t||Gn(a)),null;case 13:return Eg(t,a,n);case 4:return zn(a,a.stateNode.containerInfo),r=a.pendingProps,t===null?a.child=Yn(a,null,r,n):qt(t,a,r,n),a.child;case 11:return vg(t,a,a.type,a.pendingProps,n);case 7:return qt(t,a,a.pendingProps,n),a.child;case 8:return qt(t,a,a.pendingProps.children,n),a.child;case 12:return qt(t,a,a.pendingProps.children,n),a.child;case 10:return r=a.pendingProps,un(a,a.type,r.value),qt(t,a,r.children,n),a.child;case 9:return c=a.type._context,r=a.pendingProps.children,el(a),c=Kt(c),r=r(c),a.flags|=1,qt(t,a,r,n),a.child;case 14:return bg(t,a,a.type,a.pendingProps,n);case 15:return yg(t,a,a.type,a.pendingProps,n);case 19:return Tg(t,a,n);case 22:return _g(t,a,n);case 24:return el(a),r=Kt(Mt),t===null?(c=Yu(),c===null&&(c=nt,h=Fu(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=n),c=h),a.memoizedState={parent:r,cache:c},Ed(a),un(a,Mt,c)):((t.lanes&n)!==0&&(Ad(t,a),tr(a,null,null,n),er()),c=t.memoizedState,h=a.memoizedState,c.parent!==r?(c={parent:r,cache:r},a.memoizedState=c,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=c),un(a,Mt,r)):(r=h.cache,un(a,Mt,r),r!==c.cache&&Cd(a,[Mt],n,!0))),qt(t,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}var wd=ze(null),Jn=null,Di=null;function un(t,a,n){ue(wd,a._currentValue),a._currentValue=n}function zi(t){t._currentValue=wd.current,Te(wd)}function Sd(t,a,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,r!==null&&(r.childLanes|=a)):r!==null&&(r.childLanes&a)!==a&&(r.childLanes|=a),t===n)break;t=t.return}}function Cd(t,a,n,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var b=c.child;h=h.firstContext;e:for(;h!==null;){var x=h;h=c;for(var A=0;A<a.length;A++)if(x.context===a[A]){h.lanes|=n,x=h.alternate,x!==null&&(x.lanes|=n),Sd(h.return,n,t),r||(b=null);break e}h=x.next}}else if(c.tag===18){if(b=c.return,b===null)throw Error(s(341));b.lanes|=n,h=b.alternate,h!==null&&(h.lanes|=n),Sd(b,n,t),b=null}else b=c.child;if(b!==null)b.return=c;else for(b=c;b!==null;){if(b===t){b=null;break}if(c=b.sibling,c!==null){c.return=b.return,b=c;break}b=b.return}c=b}}function Ks(t,a,n,r){t=null;for(var c=a,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var b=c.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var x=c.type;xa(c.pendingProps.value,b.value)||(t!==null?t.push(x):t=[x])}}else if(c===Ja.current){if(b=c.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(gr):t=[gr])}c=c.return}t!==null&&Cd(a,t,n,r),a.flags|=262144}function Io(t){for(t=t.firstContext;t!==null;){if(!xa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function el(t){Jn=t,Di=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kt(t){return Mg(Jn,t)}function Po(t,a){return Jn===null&&el(t),Mg(t,a)}function Mg(t,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Di===null){if(t===null)throw Error(s(308));Di=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Di=Di.next=a;return n}var dn=!1;function Ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ad(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function hn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fn(t,a,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ht&2)!==0){var c=r.pending;return c===null?a.next=a:(a.next=c.next,c.next=a),r.pending=a,a=wo(t),um(t,null,n),a}return xo(t,r,a,n),wo(t)}function Js(t,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194176)!==0)){var r=a.lanes;r&=t.pendingLanes,n|=r,a.lanes=n,bp(t,n)}}function Td(t,a){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var c=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var b={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?c=h=b:h=h.next=b,n=n.next}while(n!==null);h===null?c=h=a:h=h.next=a}else c=h=a;n={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=a:t.next=a,n.lastBaseUpdate=a}var Nd=!1;function er(){if(Nd){var t=Hl;if(t!==null)throw t}}function tr(t,a,n,r){Nd=!1;var c=t.updateQueue;dn=!1;var h=c.firstBaseUpdate,b=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var A=x,j=A.next;A.next=null,b===null?h=j:b.next=j,b=A;var F=t.alternate;F!==null&&(F=F.updateQueue,x=F.lastBaseUpdate,x!==b&&(x===null?F.firstBaseUpdate=j:x.next=j,F.lastBaseUpdate=A))}if(h!==null){var W=c.baseState;b=0,F=j=A=null,x=h;do{var P=x.lane&-536870913,V=P!==x.lane;if(V?(Le&P)===P:(r&P)===P){P!==0&&P===Bl&&(Nd=!0),F!==null&&(F=F.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var de=t,ve=x;P=a;var mt=n;switch(ve.tag){case 1:if(de=ve.payload,typeof de=="function"){W=de.call(mt,W,P);break e}W=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=ve.payload,P=typeof de=="function"?de.call(mt,W,P):de,P==null)break e;W=G({},W,P);break e;case 2:dn=!0}}P=x.callback,P!==null&&(t.flags|=64,V&&(t.flags|=8192),V=c.callbacks,V===null?c.callbacks=[P]:V.push(P))}else V={lane:P,tag:x.tag,payload:x.payload,callback:x.callback,next:null},F===null?(j=F=V,A=W):F=F.next=V,b|=P;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;V=x,x=V.next,V.next=null,c.lastBaseUpdate=V,c.shared.pending=null}}while(!0);F===null&&(A=W),c.baseState=A,c.firstBaseUpdate=j,c.lastBaseUpdate=F,h===null&&(c.shared.lanes=0),bn|=b,t.lanes=b,t.memoizedState=W}}function kg(t,a){if(typeof t!="function")throw Error(s(191,t));t.call(a)}function $g(t,a){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)kg(n[t],a)}function ar(t,a){try{var n=a.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var c=r.next;n=c;do{if((n.tag&t)===t){r=void 0;var h=n.create,b=n.inst;r=h(),b.destroy=r}n=n.next}while(n!==c)}}catch(x){et(a,a.return,x)}}function pn(t,a,n){try{var r=a.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&t)===t){var b=r.inst,x=b.destroy;if(x!==void 0){b.destroy=void 0,c=a;var A=n;try{x()}catch(j){et(c,A,j)}}}r=r.next}while(r!==h)}}catch(j){et(a,a.return,j)}}function Og(t){var a=t.updateQueue;if(a!==null){var n=t.stateNode;try{$g(a,n)}catch(r){et(t,t.return,r)}}}function jg(t,a,n){n.props=Kn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){et(t,a,r)}}function tl(t,a){try{var n=t.ref;if(n!==null){var r=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=r;break;default:c=r}typeof n=="function"?t.refCleanup=n(c):n.current=c}}catch(h){et(t,a,h)}}function wa(t,a){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(c){et(t,a,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){et(t,a,c)}else n.current=null}function Rg(t){var a=t.type,n=t.memoizedProps,r=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(c){et(t,t.return,c)}}function Lg(t,a,n){try{var r=t.stateNode;R2(r,t.type,n,a),r[ha]=a}catch(c){et(t,t.return,c)}}function Dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Md(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,a,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,a?n.nodeType===8?n.parentNode.insertBefore(t,a):n.insertBefore(t,a):(n.nodeType===8?(a=n.parentNode,a.insertBefore(t,n)):(a=n,a.appendChild(t)),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=ac));else if(r!==4&&r!==27&&(t=t.child,t!==null))for(kd(t,a,n),t=t.sibling;t!==null;)kd(t,a,n),t=t.sibling}function Vo(t,a,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,a?n.insertBefore(t,a):n.appendChild(t);else if(r!==4&&r!==27&&(t=t.child,t!==null))for(Vo(t,a,n),t=t.sibling;t!==null;)Vo(t,a,n),t=t.sibling}var Bi=!1,ft=!1,$d=!1,zg=typeof WeakSet=="function"?WeakSet:Set,Lt=null,Bg=!1;function u2(t,a){if(t=t.containerInfo,lh=cc,t=tm(t),ju(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var c=r.anchorOffset,h=r.focusNode;r=r.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var b=0,x=-1,A=-1,j=0,F=0,W=t,P=null;t:for(;;){for(var V;W!==n||c!==0&&W.nodeType!==3||(x=b+c),W!==h||r!==0&&W.nodeType!==3||(A=b+r),W.nodeType===3&&(b+=W.nodeValue.length),(V=W.firstChild)!==null;)P=W,W=V;for(;;){if(W===t)break t;if(P===n&&++j===c&&(x=b),P===h&&++F===r&&(A=b),(V=W.nextSibling)!==null)break;W=P,P=W.parentNode}W=V}n=x===-1||A===-1?null:{start:x,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(sh={focusedElem:t,selectionRange:n},cc=!1,Lt=a;Lt!==null;)if(a=Lt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Lt=t;else for(;Lt!==null;){switch(a=Lt,h=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,n=a,c=h.memoizedProps,h=h.memoizedState,r=n.stateNode;try{var de=Kn(n.type,c,n.elementType===n.type);t=r.getSnapshotBeforeUpdate(de,h),r.__reactInternalSnapshotBeforeUpdate=t}catch(ve){et(n,n.return,ve)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,n=t.nodeType,n===9)uh(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":uh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=a.sibling,t!==null){t.return=a.return,Lt=t;break}Lt=a.return}return de=Bg,Bg=!1,de}function Hg(t,a,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n),r&4&&ar(5,n);break;case 1:if(Ui(t,n),r&4)if(t=n.stateNode,a===null)try{t.componentDidMount()}catch(x){et(n,n.return,x)}else{var c=Kn(n.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(c,a,t.__reactInternalSnapshotBeforeUpdate)}catch(x){et(n,n.return,x)}}r&64&&Og(n),r&512&&tl(n,n.return);break;case 3:if(Ui(t,n),r&64&&(r=n.updateQueue,r!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$g(r,t)}catch(x){et(n,n.return,x)}}break;case 26:Ui(t,n),r&512&&tl(n,n.return);break;case 27:case 5:Ui(t,n),a===null&&r&4&&Rg(n),r&512&&tl(n,n.return);break;case 12:Ui(t,n);break;case 13:Ui(t,n),r&4&&Pg(t,n);break;case 22:if(c=n.memoizedState!==null||Bi,!c){a=a!==null&&a.memoizedState!==null||ft;var h=Bi,b=ft;Bi=c,(ft=a)&&!b?mn(t,n,(n.subtreeFlags&8772)!==0):Ui(t,n),Bi=h,ft=b}r&512&&(n.memoizedProps.mode==="manual"?tl(n,n.return):wa(n,n.return));break;default:Ui(t,n)}}function Ug(t){var a=t.alternate;a!==null&&(t.alternate=null,Ug(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&vu(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Et=null,Sa=!1;function Hi(t,a,n){for(n=n.child;n!==null;)Ig(t,a,n),n=n.sibling}function Ig(t,a,n){if(ya&&typeof ya.onCommitFiberUnmount=="function")try{ya.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 26:ft||wa(n,a),Hi(t,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ft||wa(n,a);var r=Et,c=Sa;for(Et=n.stateNode,Hi(t,a,n),n=n.stateNode,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);vu(n),Et=r,Sa=c;break;case 5:ft||wa(n,a);case 6:c=Et;var h=Sa;if(Et=null,Hi(t,a,n),Et=c,Sa=h,Et!==null)if(Sa)try{t=Et,r=n.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)}catch(b){et(n,a,b)}else try{Et.removeChild(n.stateNode)}catch(b){et(n,a,b)}break;case 18:Et!==null&&(Sa?(a=Et,n=n.stateNode,a.nodeType===8?ch(a.parentNode,n):a.nodeType===1&&ch(a,n),_r(a)):ch(Et,n.stateNode));break;case 4:r=Et,c=Sa,Et=n.stateNode.containerInfo,Sa=!0,Hi(t,a,n),Et=r,Sa=c;break;case 0:case 11:case 14:case 15:ft||pn(2,n,a),ft||pn(4,n,a),Hi(t,a,n);break;case 1:ft||(wa(n,a),r=n.stateNode,typeof r.componentWillUnmount=="function"&&jg(n,a,r)),Hi(t,a,n);break;case 21:Hi(t,a,n);break;case 22:ft||wa(n,a),ft=(r=ft)||n.memoizedState!==null,Hi(t,a,n),ft=r;break;default:Hi(t,a,n)}}function Pg(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_r(t)}catch(n){et(a,a.return,n)}}function d2(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new zg),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new zg),a;default:throw Error(s(435,t.tag))}}function Od(t,a){var n=d2(t);a.forEach(function(r){var c=C2.bind(null,t,r);n.has(r)||(n.add(r),r.then(c,c))})}function Ua(t,a){var n=a.deletions;if(n!==null)for(var r=0;r<n.length;r++){var c=n[r],h=t,b=a,x=b;e:for(;x!==null;){switch(x.tag){case 27:case 5:Et=x.stateNode,Sa=!1;break e;case 3:Et=x.stateNode.containerInfo,Sa=!0;break e;case 4:Et=x.stateNode.containerInfo,Sa=!0;break e}x=x.return}if(Et===null)throw Error(s(160));Ig(h,b,c),Et=null,Sa=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Vg(a,t),a=a.sibling}var ai=null;function Vg(t,a){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ua(a,t),Ia(t),r&4&&(pn(3,t,t.return),ar(3,t),pn(5,t,t.return));break;case 1:Ua(a,t),Ia(t),r&512&&(ft||n===null||wa(n,n.return)),r&64&&Bi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var c=ai;if(Ua(a,t),Ia(t),r&512&&(ft||n===null||wa(n,n.return)),r&4){var h=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){e:{r=t.type,n=t.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Ns]||h[Zt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(r),c.head.insertBefore(h,c.querySelector("head > title"))),Ft(h,r,n),h[Zt]=t,jt(h),r=h;break e;case"link":var b=Rv("link","href",c).get(r+(n.href||""));if(b){for(var x=0;x<b.length;x++)if(h=b[x],h.getAttribute("href")===(n.href==null?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){b.splice(x,1);break t}}h=c.createElement(r),Ft(h,r,n),c.head.appendChild(h);break;case"meta":if(b=Rv("meta","content",c).get(r+(n.content||""))){for(x=0;x<b.length;x++)if(h=b[x],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){b.splice(x,1);break t}}h=c.createElement(r),Ft(h,r,n),c.head.appendChild(h);break;default:throw Error(s(468,r))}h[Zt]=t,jt(h),r=h}t.stateNode=r}else Lv(c,t.type,t.stateNode);else t.stateNode=jv(c,r,t.memoizedProps);else h!==r?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,r===null?Lv(c,t.type,t.stateNode):jv(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Lg(t,t.memoizedProps,n.memoizedProps)}break;case 27:if(r&4&&t.alternate===null){c=t.stateNode,h=t.memoizedProps;try{for(var A=c.firstChild;A;){var j=A.nextSibling,F=A.nodeName;A[Ns]||F==="HEAD"||F==="BODY"||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&A.rel.toLowerCase()==="stylesheet"||c.removeChild(A),A=j}for(var W=t.type,P=c.attributes;P.length;)c.removeAttributeNode(P[0]);Ft(c,W,h),c[Zt]=t,c[ha]=h}catch(de){et(t,t.return,de)}}case 5:if(Ua(a,t),Ia(t),r&512&&(ft||n===null||wa(n,n.return)),t.flags&32){c=t.stateNode;try{Al(c,"")}catch(de){et(t,t.return,de)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,Lg(t,c,n!==null?n.memoizedProps:c)),r&1024&&($d=!0);break;case 6:if(Ua(a,t),Ia(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(de){et(t,t.return,de)}}break;case 3:if(sc=null,c=ai,ai=nc(a.containerInfo),Ua(a,t),ai=c,Ia(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_r(a.containerInfo)}catch(de){et(t,t.return,de)}$d&&($d=!1,qg(t));break;case 4:r=ai,ai=nc(t.stateNode.containerInfo),Ua(a,t),Ia(t),ai=r;break;case 12:Ua(a,t),Ia(t);break;case 13:Ua(a,t),Ia(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Id=hi()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Od(t,r)));break;case 22:if(r&512&&(ft||n===null||wa(n,n.return)),A=t.memoizedState!==null,j=n!==null&&n.memoizedState!==null,F=Bi,W=ft,Bi=F||A,ft=W||j,Ua(a,t),ft=W,Bi=F,Ia(t),a=t.stateNode,a._current=t,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,r&8192&&(a._visibility=A?a._visibility&-2:a._visibility|1,A&&(a=Bi||ft,n===null||j||a||Vl(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(n=null,a=t;;){if(a.tag===5||a.tag===26||a.tag===27){if(n===null){j=n=a;try{if(c=j.stateNode,A)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=j.stateNode,x=j.memoizedProps.style;var V=x!=null&&x.hasOwnProperty("display")?x.display:null;b.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(de){et(j,j.return,de)}}}else if(a.tag===6){if(n===null){j=a;try{j.stateNode.nodeValue=A?"":j.memoizedProps}catch(de){et(j,j.return,de)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Od(t,n))));break;case 19:Ua(a,t),Ia(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Od(t,r)));break;case 21:break;default:Ua(a,t),Ia(t)}}function Ia(t){var a=t.flags;if(a&2){try{if(t.tag!==27){e:{for(var n=t.return;n!==null;){if(Dg(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 27:var c=r.stateNode,h=Md(t);Vo(t,h,c);break;case 5:var b=r.stateNode;r.flags&32&&(Al(b,""),r.flags&=-33);var x=Md(t);Vo(t,x,b);break;case 3:case 4:var A=r.stateNode.containerInfo,j=Md(t);kd(t,j,A);break;default:throw Error(s(161))}}}catch(F){et(t,t.return,F)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;qg(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Ui(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Hg(t,a.alternate,a),a=a.sibling}function Vl(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:pn(4,a,a.return),Vl(a);break;case 1:wa(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&jg(a,a.return,n),Vl(a);break;case 26:case 27:case 5:wa(a,a.return),Vl(a);break;case 22:wa(a,a.return),a.memoizedState===null&&Vl(a);break;default:Vl(a)}t=t.sibling}}function mn(t,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var r=a.alternate,c=t,h=a,b=h.flags;switch(h.tag){case 0:case 11:case 15:mn(c,h,n),ar(4,h);break;case 1:if(mn(c,h,n),r=h,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(j){et(r,r.return,j)}if(r=h,c=r.updateQueue,c!==null){var x=r.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)kg(A[c],x)}catch(j){et(r,r.return,j)}}n&&b&64&&Og(h),tl(h,h.return);break;case 26:case 27:case 5:mn(c,h,n),n&&r===null&&b&4&&Rg(h),tl(h,h.return);break;case 12:mn(c,h,n);break;case 13:mn(c,h,n),n&&b&4&&Pg(c,h);break;case 22:h.memoizedState===null&&mn(c,h,n),tl(h,h.return);break;default:mn(c,h,n)}a=a.sibling}}function jd(t,a){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Gs(n))}function Rd(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Gs(t))}function gn(t,a,n,r){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Fg(t,a,n,r),a=a.sibling}function Fg(t,a,n,r){var c=a.flags;switch(a.tag){case 0:case 11:case 15:gn(t,a,n,r),c&2048&&ar(9,a);break;case 3:gn(t,a,n,r),c&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Gs(t)));break;case 12:if(c&2048){gn(t,a,n,r),t=a.stateNode;try{var h=a.memoizedProps,b=h.id,x=h.onPostCommit;typeof x=="function"&&x(b,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){et(a,a.return,A)}}else gn(t,a,n,r);break;case 23:break;case 22:h=a.stateNode,a.memoizedState!==null?h._visibility&4?gn(t,a,n,r):ir(t,a):h._visibility&4?gn(t,a,n,r):(h._visibility|=4,ql(t,a,n,r,(a.subtreeFlags&10256)!==0)),c&2048&&jd(a.alternate,a);break;case 24:gn(t,a,n,r),c&2048&&Rd(a.alternate,a);break;default:gn(t,a,n,r)}}function ql(t,a,n,r,c){for(c=c&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var h=t,b=a,x=n,A=r,j=b.flags;switch(b.tag){case 0:case 11:case 15:ql(h,b,x,A,c),ar(8,b);break;case 23:break;case 22:var F=b.stateNode;b.memoizedState!==null?F._visibility&4?ql(h,b,x,A,c):ir(h,b):(F._visibility|=4,ql(h,b,x,A,c)),c&&j&2048&&jd(b.alternate,b);break;case 24:ql(h,b,x,A,c),c&&j&2048&&Rd(b.alternate,b);break;default:ql(h,b,x,A,c)}a=a.sibling}}function ir(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=t,r=a,c=r.flags;switch(r.tag){case 22:ir(n,r),c&2048&&jd(r.alternate,r);break;case 24:ir(n,r),c&2048&&Rd(r.alternate,r);break;default:ir(n,r)}a=a.sibling}}var nr=8192;function Fl(t){if(t.subtreeFlags&nr)for(t=t.child;t!==null;)Gg(t),t=t.sibling}function Gg(t){switch(t.tag){case 26:Fl(t),t.flags&nr&&t.memoizedState!==null&&J2(ai,t.memoizedState,t.memoizedProps);break;case 5:Fl(t);break;case 3:case 4:var a=ai;ai=nc(t.stateNode.containerInfo),Fl(t),ai=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=nr,nr=16777216,Fl(t),nr=a):Fl(t));break;default:Fl(t)}}function Yg(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function lr(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var r=a[n];Lt=r,Xg(r,t)}Yg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wg(t),t=t.sibling}function Wg(t){switch(t.tag){case 0:case 11:case 15:lr(t),t.flags&2048&&pn(9,t,t.return);break;case 3:lr(t);break;case 12:lr(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&4&&(t.return===null||t.return.tag!==13)?(a._visibility&=-5,qo(t)):lr(t);break;default:lr(t)}}function qo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var r=a[n];Lt=r,Xg(r,t)}Yg(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:pn(8,a,a.return),qo(a);break;case 22:n=a.stateNode,n._visibility&4&&(n._visibility&=-5,qo(a));break;default:qo(a)}t=t.sibling}}function Xg(t,a){for(;Lt!==null;){var n=Lt;switch(n.tag){case 0:case 11:case 15:pn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Gs(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Lt=r;else e:for(n=t;Lt!==null;){r=Lt;var c=r.sibling,h=r.return;if(Ug(r),r===n){Lt=null;break e}if(c!==null){c.return=h,Lt=c;break e}Lt=h}}}function h2(t,a,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pa(t,a,n,r){return new h2(t,a,n,r)}function Ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vn(t,a){var n=t.alternate;return n===null?(n=Pa(t.tag,a,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=a,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&31457280,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,a=t.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Qg(t,a){t.flags&=31457282;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,a=n.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Fo(t,a,n,r,c,h){var b=0;if(r=t,typeof t=="function")Ld(t)&&(b=1);else if(typeof t=="string")b=Z2(t,n,yt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case g:return al(n.children,c,h,a);case m:b=8,c|=24;break;case v:return t=Pa(12,n,a,c|2),t.elementType=v,t.lanes=h,t;case N:return t=Pa(13,n,a,c),t.elementType=N,t.lanes=h,t;case E:return t=Pa(19,n,a,c),t.elementType=E,t.lanes=h,t;case B:return Zg(n,c,h,a);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case w:b=10;break e;case _:b=9;break e;case C:b=11;break e;case T:b=14;break e;case R:b=16,r=null;break e}b=29,n=Error(s(130,t===null?"null":typeof t,"")),r=null}return a=Pa(b,n,a,c),a.elementType=t,a.type=r,a.lanes=h,a}function al(t,a,n,r){return t=Pa(7,t,r,a),t.lanes=n,t}function Zg(t,a,n,r){t=Pa(22,t,r,a),t.elementType=B,t.lanes=n;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=c._current;if(h===null)throw Error(s(456));if((c._pendingVisibility&2)===0){var b=ln(h,2);b!==null&&(c._pendingVisibility|=2,sa(b,h,2))}},attach:function(){var h=c._current;if(h===null)throw Error(s(456));if((c._pendingVisibility&2)!==0){var b=ln(h,2);b!==null&&(c._pendingVisibility&=-3,sa(b,h,2))}}};return t.stateNode=c,t}function Dd(t,a,n){return t=Pa(6,t,null,a),t.lanes=n,t}function zd(t,a,n){return a=Pa(4,t.children!==null?t.children:[],t.key,a),a.lanes=n,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}function Ii(t){t.flags|=4}function Kg(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Dv(a)){if(a=Ha.current,a!==null&&((Le&4194176)===Le?pi!==null:(Le&62914560)!==Le&&(Le&536870912)===0||a!==pi))throw Vs=Pu,mm;t.flags|=8192}}function Go(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?gp():536870912,t.lanes|=a,Yl|=a)}function sr(t,a){if(!Be)switch(t.tailMode){case"hidden":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var a=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(a)for(var c=t.child;c!==null;)n|=c.lanes|c.childLanes,r|=c.subtreeFlags&31457280,r|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)n|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=n,a}function f2(t,a,n){var r=a.pendingProps;switch(Uu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(a),null;case 1:return dt(a),null;case 3:return n=a.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),zi(Mt),en(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Hs(a)?Ii(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ti!==null&&(Fd(ti),ti=null))),dt(a),null;case 26:return n=a.memoizedState,t===null?(Ii(a),n!==null?(dt(a),Kg(a,n)):(dt(a),a.flags&=-16777217)):n?n!==t.memoizedState?(Ii(a),dt(a),Kg(a,n)):(dt(a),a.flags&=-16777217):(t.memoizedProps!==r&&Ii(a),dt(a),a.flags&=-16777217),null;case 27:io(a),n=ge.current;var c=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==r&&Ii(a);else{if(!r){if(a.stateNode===null)throw Error(s(166));return dt(a),null}t=yt.current,Hs(a)?fm(a):(t=Nv(c,r,n),a.stateNode=t,Ii(a))}return dt(a),null;case 5:if(io(a),n=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==r&&Ii(a);else{if(!r){if(a.stateNode===null)throw Error(s(166));return dt(a),null}if(t=yt.current,Hs(a))fm(a);else{switch(c=ic(ge.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?c.createElement(n,{is:r.is}):c.createElement(n)}}t[Zt]=a,t[ha]=r;e:for(c=a.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break e;for(;c.sibling===null;){if(c.return===null||c.return===a)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}a.stateNode=t;e:switch(Ft(t,n,r),n){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ii(a)}}return dt(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==r&&Ii(a);else{if(typeof r!="string"&&a.stateNode===null)throw Error(s(166));if(t=ge.current,Hs(a)){if(t=a.stateNode,n=a.memoizedProps,r=null,c=la,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Zt]=a,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||wv(t.nodeValue,n)),t||Gn(a)}else t=ic(t).createTextNode(r),t[Zt]=a,a.stateNode=t}return dt(a),null;case 13:if(r=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Hs(a),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=a.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Zt]=a}else Us(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;dt(a),c=!1}else ti!==null&&(Fd(ti),ti=null),c=!0;if(!c)return a.flags&256?(ji(a),a):(ji(a),null)}if(ji(a),(a.flags&128)!==0)return a.lanes=n,a;if(n=r!==null,t=t!==null&&t.memoizedState!==null,n){r=a.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var h=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==c&&(r.flags|=2048)}return n!==t&&n&&(a.child.flags|=8192),Go(a,a.updateQueue),dt(a),null;case 4:return en(),t===null&&ah(a.stateNode.containerInfo),dt(a),null;case 10:return zi(a.type),dt(a),null;case 19:if(Te(Nt),c=a.memoizedState,c===null)return dt(a),null;if(r=(a.flags&128)!==0,h=c.rendering,h===null)if(r)sr(c,!1);else{if(pt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(h=Mo(t),h!==null){for(a.flags|=128,sr(c,!1),t=h.updateQueue,a.updateQueue=t,Go(a,t),a.subtreeFlags=0,t=n,n=a.child;n!==null;)Qg(n,t),n=n.sibling;return ue(Nt,Nt.current&1|2),a.child}t=t.sibling}c.tail!==null&&hi()>Yo&&(a.flags|=128,r=!0,sr(c,!1),a.lanes=4194304)}else{if(!r)if(t=Mo(h),t!==null){if(a.flags|=128,r=!0,t=t.updateQueue,a.updateQueue=t,Go(a,t),sr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Be)return dt(a),null}else 2*hi()-c.renderingStartTime>Yo&&n!==536870912&&(a.flags|=128,r=!0,sr(c,!1),a.lanes=4194304);c.isBackwards?(h.sibling=a.child,a.child=h):(t=c.last,t!==null?t.sibling=h:a.child=h,c.last=h)}return c.tail!==null?(a=c.tail,c.rendering=a,c.tail=a.sibling,c.renderingStartTime=hi(),a.sibling=null,t=Nt.current,ue(Nt,r?t&1|2:t&1),a):(dt(a),null);case 22:case 23:return ji(a),qu(),r=a.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(a.flags|=8192):r&&(a.flags|=8192),r?(n&536870912)!==0&&(a.flags&128)===0&&(dt(a),a.subtreeFlags&6&&(a.flags|=8192)):dt(a),n=a.updateQueue,n!==null&&Go(a,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==n&&(a.flags|=2048),t!==null&&Te(Wn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),zi(Mt),dt(a),null;case 25:return null}throw Error(s(156,a.tag))}function p2(t,a){switch(Uu(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return zi(Mt),en(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return io(a),null;case 13:if(ji(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Us()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Te(Nt),null;case 4:return en(),null;case 10:return zi(a.type),null;case 22:case 23:return ji(a),qu(),t!==null&&Te(Wn),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return zi(Mt),null;case 25:return null;default:return null}}function Jg(t,a){switch(Uu(a),a.tag){case 3:zi(Mt),en();break;case 26:case 27:case 5:io(a);break;case 4:en();break;case 13:ji(a);break;case 19:Te(Nt);break;case 10:zi(a.type);break;case 22:case 23:ji(a),qu(),t!==null&&Te(Wn);break;case 24:zi(Mt)}}var m2={getCacheForType:function(t){var a=Kt(Mt),n=a.data.get(t);return n===void 0&&(n=t(),a.data.set(t,n)),n}},g2=typeof WeakMap=="function"?WeakMap:Map,ht=0,nt=null,Ae=null,Le=0,lt=0,Ca=null,Pi=!1,Gl=!1,Bd=!1,Vi=0,pt=0,bn=0,il=0,Hd=0,Va=0,Yl=0,rr=null,gi=null,Ud=!1,Id=0,Yo=1/0,Wo=null,yn=null,Xo=!1,nl=null,or=0,Pd=0,Vd=null,cr=0,qd=null;function Ea(){if((ht&2)!==0&&Le!==0)return Le&-Le;if(U.T!==null){var t=Bl;return t!==0?t:Kd()}return _p()}function ev(){Va===0&&(Va=(Le&536870912)===0||Be?mp():536870912);var t=Ha.current;return t!==null&&(t.flags|=32),Va}function sa(t,a,n){(t===nt&&lt===2||t.cancelPendingCommit!==null)&&(Wl(t,0),qi(t,Le,Va,!1)),Ts(t,n),((ht&2)===0||t!==nt)&&(t===nt&&((ht&2)===0&&(il|=n),pt===4&&qi(t,Le,Va,!1)),vi(t))}function tv(t,a,n){if((ht&6)!==0)throw Error(s(327));var r=!n&&(a&60)===0&&(a&t.expiredLanes)===0||As(t,a),c=r?y2(t,a):Wd(t,a,!0),h=r;do{if(c===0){Gl&&!r&&qi(t,a,0,!1);break}else if(c===6)qi(t,a,0,!Pi);else{if(n=t.current.alternate,h&&!v2(n)){c=Wd(t,a,!1),h=!1;continue}if(c===2){if(h=a,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){a=b;e:{var x=t;c=rr;var A=x.current.memoizedState.isDehydrated;if(A&&(Wl(x,b).flags|=256),b=Wd(x,b,!1),b!==2){if(Bd&&!A){x.errorRecoveryDisabledLanes|=h,il|=h,c=4;break e}h=gi,gi=c,h!==null&&Fd(h)}c=b}if(h=!1,c!==2)continue}}if(c===1){Wl(t,0),qi(t,a,0,!0);break}e:{switch(r=t,c){case 0:case 1:throw Error(s(345));case 4:if((a&4194176)===a){qi(r,a,Va,!Pi);break e}break;case 2:gi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=n,r.finishedLanes=a,(a&62914560)===a&&(h=Id+300-hi(),10<h)){if(qi(r,a,Va,!Pi),ro(r,0)!==0)break e;r.timeoutHandle=Ev(av.bind(null,r,n,gi,Wo,Ud,a,Va,il,Yl,Pi,2,-0,0),h);break e}av(r,n,gi,Wo,Ud,a,Va,il,Yl,Pi,0,-0,0)}}break}while(!0);vi(t)}function Fd(t){gi===null?gi=t:gi.push.apply(gi,t)}function av(t,a,n,r,c,h,b,x,A,j,F,W,P){var V=a.subtreeFlags;if((V&8192||(V&16785408)===16785408)&&(mr={stylesheets:null,count:0,unsuspend:K2},Gg(a),a=ex(),a!==null)){t.cancelPendingCommit=a(cv.bind(null,t,n,r,c,b,x,A,1,W,P)),qi(t,h,b,!j);return}cv(t,n,r,c,b,x,A,F,W,P)}function v2(t){for(var a=t;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var c=n[r],h=c.getSnapshot;c=c.value;try{if(!xa(h(),c))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function qi(t,a,n,r){a&=~Hd,a&=~il,t.suspendedLanes|=a,t.pingedLanes&=~a,r&&(t.warmLanes|=a),r=t.expirationTimes;for(var c=a;0<c;){var h=31-_a(c),b=1<<h;r[h]=-1,c&=~b}n!==0&&vp(t,n,a)}function Qo(){return(ht&6)===0?(ur(0),!1):!0}function Gd(){if(Ae!==null){if(lt===0)var t=Ae.return;else t=Ae,Di=Jn=null,Ku(t),Dl=null,qs=0,t=Ae;for(;t!==null;)Jg(t.alternate,t),t=t.return;Ae=null}}function Wl(t,a){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,D2(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Gd(),nt=t,Ae=n=vn(t.current,null),Le=a,lt=0,Ca=null,Pi=!1,Gl=As(t,a),Bd=!1,Yl=Va=Hd=il=bn=pt=0,gi=rr=null,Ud=!1,(a&8)!==0&&(a|=a&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=a;0<r;){var c=31-_a(r),h=1<<c;a|=t[c],r&=~h}return Vi=a,_o(),n}function iv(t,a){we=null,U.H=mi,a===Ps?(a=bm(),lt=3):a===mm?(a=bm(),lt=4):lt=a===gg?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ca=a,Ae===null&&(pt=1,Uo(t,Da(a,t.current)))}function nv(){var t=U.H;return U.H=mi,t===null?mi:t}function lv(){var t=U.A;return U.A=m2,t}function Yd(){pt=4,Pi||(Le&4194176)!==Le&&Ha.current!==null||(Gl=!0),(bn&134217727)===0&&(il&134217727)===0||nt===null||qi(nt,Le,Va,!1)}function Wd(t,a,n){var r=ht;ht|=2;var c=nv(),h=lv();(nt!==t||Le!==a)&&(Wo=null,Wl(t,a)),a=!1;var b=pt;e:do try{if(lt!==0&&Ae!==null){var x=Ae,A=Ca;switch(lt){case 8:Gd(),b=6;break e;case 3:case 2:case 6:Ha.current===null&&(a=!0);var j=lt;if(lt=0,Ca=null,Xl(t,x,A,j),n&&Gl){b=0;break e}break;default:j=lt,lt=0,Ca=null,Xl(t,x,A,j)}}b2(),b=pt;break}catch(F){iv(t,F)}while(!0);return a&&t.shellSuspendCounter++,Di=Jn=null,ht=r,U.H=c,U.A=h,Ae===null&&(nt=null,Le=0,_o()),b}function b2(){for(;Ae!==null;)sv(Ae)}function y2(t,a){var n=ht;ht|=2;var r=nv(),c=lv();nt!==t||Le!==a?(Wo=null,Yo=hi()+500,Wl(t,a)):Gl=As(t,a);e:do try{if(lt!==0&&Ae!==null){a=Ae;var h=Ca;t:switch(lt){case 1:lt=0,Ca=null,Xl(t,a,h,1);break;case 2:if(gm(h)){lt=0,Ca=null,rv(a);break}a=function(){lt===2&&nt===t&&(lt=7),vi(t)},h.then(a,a);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:gm(h)?(lt=0,Ca=null,rv(a)):(lt=0,Ca=null,Xl(t,a,h,7));break;case 5:var b=null;switch(Ae.tag){case 26:b=Ae.memoizedState;case 5:case 27:var x=Ae;if(!b||Dv(b)){lt=0,Ca=null;var A=x.sibling;if(A!==null)Ae=A;else{var j=x.return;j!==null?(Ae=j,Zo(j)):Ae=null}break t}}lt=0,Ca=null,Xl(t,a,h,5);break;case 6:lt=0,Ca=null,Xl(t,a,h,6);break;case 8:Gd(),pt=6;break e;default:throw Error(s(462))}}_2();break}catch(F){iv(t,F)}while(!0);return Di=Jn=null,U.H=r,U.A=c,ht=n,Ae!==null?0:(nt=null,Le=0,_o(),pt)}function _2(){for(;Ae!==null&&!P1();)sv(Ae)}function sv(t){var a=Ng(t.alternate,t,Vi);t.memoizedProps=t.pendingProps,a===null?Zo(t):Ae=a}function rv(t){var a=t,n=a.alternate;switch(a.tag){case 15:case 0:a=wg(n,a,a.pendingProps,a.type,void 0,Le);break;case 11:a=wg(n,a,a.pendingProps,a.type.render,a.ref,Le);break;case 5:Ku(a);default:Jg(n,a),a=Ae=Qg(a,Vi),a=Ng(n,a,Vi)}t.memoizedProps=t.pendingProps,a===null?Zo(t):Ae=a}function Xl(t,a,n,r){Di=Jn=null,Ku(a),Dl=null,qs=0;var c=a.return;try{if(o2(t,c,a,n,Le)){pt=1,Uo(t,Da(n,t.current)),Ae=null;return}}catch(h){if(c!==null)throw Ae=c,h;pt=1,Uo(t,Da(n,t.current)),Ae=null;return}a.flags&32768?(Be||r===1?t=!0:Gl||(Le&536870912)!==0?t=!1:(Pi=t=!0,(r===2||r===3||r===6)&&(r=Ha.current,r!==null&&r.tag===13&&(r.flags|=16384))),ov(a,t)):Zo(a)}function Zo(t){var a=t;do{if((a.flags&32768)!==0){ov(a,Pi);return}t=a.return;var n=f2(a.alternate,a,Vi);if(n!==null){Ae=n;return}if(a=a.sibling,a!==null){Ae=a;return}Ae=a=t}while(a!==null);pt===0&&(pt=5)}function ov(t,a){do{var n=p2(t.alternate,t);if(n!==null){n.flags&=32767,Ae=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(t=t.sibling,t!==null)){Ae=t;return}Ae=t=n}while(t!==null);pt=6,Ae=null}function cv(t,a,n,r,c,h,b,x,A,j){var F=U.T,W=K.p;try{K.p=2,U.T=null,x2(t,a,n,r,W,c,h,b,x,A,j)}finally{U.T=F,K.p=W}}function x2(t,a,n,r,c,h,b,x){do Ql();while(nl!==null);if((ht&6)!==0)throw Error(s(327));var A=t.finishedWork;if(r=t.finishedLanes,A===null)return null;if(t.finishedWork=null,t.finishedLanes=0,A===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var j=A.lanes|A.childLanes;if(j|=zu,J1(t,r,j,h,b,x),t===nt&&(Ae=nt=null,Le=0),(A.subtreeFlags&10256)===0&&(A.flags&10256)===0||Xo||(Xo=!0,Pd=j,Vd=n,E2(no,function(){return Ql(),null})),n=(A.flags&15990)!==0,(A.subtreeFlags&15990)!==0||n?(n=U.T,U.T=null,h=K.p,K.p=2,b=ht,ht|=4,u2(t,A),Vg(A,t),F_(sh,t.containerInfo),cc=!!lh,sh=lh=null,t.current=A,Hg(t,A.alternate,A),V1(),ht=b,K.p=h,U.T=n):t.current=A,Xo?(Xo=!1,nl=t,or=r):uv(t,j),j=t.pendingLanes,j===0&&(yn=null),W1(A.stateNode),vi(t),a!==null)for(c=t.onRecoverableError,A=0;A<a.length;A++)j=a[A],c(j.value,{componentStack:j.stack});return(or&3)!==0&&Ql(),j=t.pendingLanes,(r&4194218)!==0&&(j&42)!==0?t===qd?cr++:(cr=0,qd=t):cr=0,ur(0),null}function uv(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Gs(a)))}function Ql(){if(nl!==null){var t=nl,a=Pd;Pd=0;var n=yp(or),r=U.T,c=K.p;try{if(K.p=32>n?32:n,U.T=null,nl===null)var h=!1;else{n=Vd,Vd=null;var b=nl,x=or;if(nl=null,or=0,(ht&6)!==0)throw Error(s(331));var A=ht;if(ht|=4,Wg(b.current),Fg(b,b.current,x,n),ht=A,ur(0,!1),ya&&typeof ya.onPostCommitFiberRoot=="function")try{ya.onPostCommitFiberRoot(Es,b)}catch{}h=!0}return h}finally{K.p=c,U.T=r,uv(t,a)}}return!1}function dv(t,a,n){a=Da(n,a),a=hd(t.stateNode,a,2),t=fn(t,a,2),t!==null&&(Ts(t,2),vi(t))}function et(t,a,n){if(t.tag===3)dv(t,t,n);else for(;a!==null;){if(a.tag===3){dv(a,t,n);break}else if(a.tag===1){var r=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){t=Da(n,t),n=pg(2),r=fn(a,n,2),r!==null&&(mg(n,r,a,t),Ts(r,2),vi(r));break}}a=a.return}}function Xd(t,a,n){var r=t.pingCache;if(r===null){r=t.pingCache=new g2;var c=new Set;r.set(a,c)}else c=r.get(a),c===void 0&&(c=new Set,r.set(a,c));c.has(n)||(Bd=!0,c.add(n),t=w2.bind(null,t,a,n),a.then(t,t))}function w2(t,a,n){var r=t.pingCache;r!==null&&r.delete(a),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,nt===t&&(Le&n)===n&&(pt===4||pt===3&&(Le&62914560)===Le&&300>hi()-Id?(ht&2)===0&&Wl(t,0):Hd|=n,Yl===Le&&(Yl=0)),vi(t)}function hv(t,a){a===0&&(a=gp()),t=ln(t,a),t!==null&&(Ts(t,a),vi(t))}function S2(t){var a=t.memoizedState,n=0;a!==null&&(n=a.retryLane),hv(t,n)}function C2(t,a){var n=0;switch(t.tag){case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(n=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(a),hv(t,n)}function E2(t,a){return fu(t,a)}var Ko=null,Zl=null,Qd=!1,Jo=!1,Zd=!1,ll=0;function vi(t){t!==Zl&&t.next===null&&(Zl===null?Ko=Zl=t:Zl=Zl.next=t),Jo=!0,Qd||(Qd=!0,T2(A2))}function ur(t,a){if(!Zd&&Jo){Zd=!0;do for(var n=!1,r=Ko;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var h=0;else{var b=r.suspendedLanes,x=r.pingedLanes;h=(1<<31-_a(42|t)+1)-1,h&=c&~(b&~x),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(n=!0,mv(r,h))}else h=Le,h=ro(r,r===nt?h:0),(h&3)===0||As(r,h)||(n=!0,mv(r,h));r=r.next}while(n);Zd=!1}}function A2(){Jo=Qd=!1;var t=0;ll!==0&&(L2()&&(t=ll),ll=0);for(var a=hi(),n=null,r=Ko;r!==null;){var c=r.next,h=fv(r,a);h===0?(r.next=null,n===null?Ko=c:n.next=c,c===null&&(Zl=n)):(n=r,(t!==0||(h&3)!==0)&&(Jo=!0)),r=c}ur(t)}function fv(t,a){for(var n=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-_a(h),x=1<<b,A=c[b];A===-1?((x&n)===0||(x&r)!==0)&&(c[b]=K1(x,a)):A<=a&&(t.expiredLanes|=x),h&=~x}if(a=nt,n=Le,n=ro(t,t===a?n:0),r=t.callbackNode,n===0||t===a&&lt===2||t.cancelPendingCommit!==null)return r!==null&&r!==null&&pu(r),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||As(t,n)){if(a=n&-n,a===t.callbackPriority)return a;switch(r!==null&&pu(r),yp(n)){case 2:case 8:n=fp;break;case 32:n=no;break;case 268435456:n=pp;break;default:n=no}return r=pv.bind(null,t),n=fu(n,r),t.callbackPriority=a,t.callbackNode=n,a}return r!==null&&r!==null&&pu(r),t.callbackPriority=2,t.callbackNode=null,2}function pv(t,a){var n=t.callbackNode;if(Ql()&&t.callbackNode!==n)return null;var r=Le;return r=ro(t,t===nt?r:0),r===0?null:(tv(t,r,a),fv(t,hi()),t.callbackNode!=null&&t.callbackNode===n?pv.bind(null,t):null)}function mv(t,a){if(Ql())return null;tv(t,a,!0)}function T2(t){z2(function(){(ht&6)!==0?fu(hp,t):t()})}function Kd(){return ll===0&&(ll=mp()),ll}function gv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fo(""+t)}function vv(t,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,t.id&&n.setAttribute("form",t.id),a.parentNode.insertBefore(n,a),t=new FormData(t),n.parentNode.removeChild(n),t}function N2(t,a,n,r,c){if(a==="submit"&&n&&n.stateNode===c){var h=gv((c[ha]||null).action),b=r.submitter;b&&(a=(a=b[ha]||null)?gv(a.formAction):b.getAttribute("formAction"),a!==null&&(h=a,b=null));var x=new vo("action","action",null,r,c);t.push({event:x,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ll!==0){var A=b?vv(c,b):new FormData(c);rd(n,{pending:!0,data:A,method:c.method,action:h},null,A)}}else typeof h=="function"&&(x.preventDefault(),A=b?vv(c,b):new FormData(c),rd(n,{pending:!0,data:A,method:c.method,action:h},h,A))},currentTarget:c}]})}}for(var Jd=0;Jd<cm.length;Jd++){var eh=cm[Jd],M2=eh.toLowerCase(),k2=eh[0].toUpperCase()+eh.slice(1);ei(M2,"on"+k2)}ei(nm,"onAnimationEnd"),ei(lm,"onAnimationIteration"),ei(sm,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Y_,"onTransitionRun"),ei(W_,"onTransitionStart"),ei(X_,"onTransitionCancel"),ei(rm,"onTransitionEnd"),Cl("onMouseEnter",["mouseout","mouseover"]),Cl("onMouseLeave",["mouseout","mouseover"]),Cl("onPointerEnter",["pointerout","pointerover"]),Cl("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dr));function bv(t,a){a=(a&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],c=r.event;r=r.listeners;e:{var h=void 0;if(a)for(var b=r.length-1;0<=b;b--){var x=r[b],A=x.instance,j=x.currentTarget;if(x=x.listener,A!==h&&c.isPropagationStopped())break e;h=x,c.currentTarget=j;try{h(c)}catch(F){Ho(F)}c.currentTarget=null,h=A}else for(b=0;b<r.length;b++){if(x=r[b],A=x.instance,j=x.currentTarget,x=x.listener,A!==h&&c.isPropagationStopped())break e;h=x,c.currentTarget=j;try{h(c)}catch(F){Ho(F)}c.currentTarget=null,h=A}}}}function ke(t,a){var n=a[gu];n===void 0&&(n=a[gu]=new Set);var r=t+"__bubble";n.has(r)||(yv(a,t,2,!1),n.add(r))}function th(t,a,n){var r=0;a&&(r|=4),yv(n,t,r,a)}var ec="_reactListening"+Math.random().toString(36).slice(2);function ah(t){if(!t[ec]){t[ec]=!0,wp.forEach(function(n){n!=="selectionchange"&&($2.has(n)||th(n,!1,t),th(n,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[ec]||(a[ec]=!0,th("selectionchange",!1,a))}}function yv(t,a,n,r){switch(Pv(a)){case 2:var c=ix;break;case 8:c=nx;break;default:c=mh}n=c.bind(null,a,n,t),c=void 0,!Cu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(a,n,{capture:!0,passive:c}):t.addEventListener(a,n,!0):c!==void 0?t.addEventListener(a,n,{passive:c}):t.addEventListener(a,n,!1)}function ih(t,a,n,r,c){var h=r;if((a&1)===0&&(a&2)===0&&r!==null)e:for(;;){if(r===null)return;var b=r.tag;if(b===3||b===4){var x=r.stateNode.containerInfo;if(x===c||x.nodeType===8&&x.parentNode===c)break;if(b===4)for(b=r.return;b!==null;){var A=b.tag;if((A===3||A===4)&&(A=b.stateNode.containerInfo,A===c||A.nodeType===8&&A.parentNode===c))return;b=b.return}for(;x!==null;){if(b=Hn(x),b===null)return;if(A=b.tag,A===5||A===6||A===26||A===27){r=h=b;continue e}x=x.parentNode}}r=r.return}Rp(function(){var j=h,F=wu(n),W=[];e:{var P=om.get(t);if(P!==void 0){var V=vo,de=t;switch(t){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":V=C_;break;case"focusin":de="focus",V=Nu;break;case"focusout":de="blur",V=Nu;break;case"beforeblur":case"afterblur":V=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=h_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=T_;break;case nm:case lm:case sm:V=m_;break;case rm:V=M_;break;case"scroll":case"scrollend":V=u_;break;case"wheel":V=$_;break;case"copy":case"cut":case"paste":V=v_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Hp;break;case"toggle":case"beforetoggle":V=j_}var ve=(a&4)!==0,mt=!ve&&(t==="scroll"||t==="scrollend"),D=ve?P!==null?P+"Capture":null:P;ve=[];for(var O=j,H;O!==null;){var Y=O;if(H=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||H===null||D===null||(Y=ks(O,D),Y!=null&&ve.push(hr(O,Y,H))),mt)break;O=O.return}0<ve.length&&(P=new V(P,de,null,n,F),W.push({event:P,listeners:ve}))}}if((a&7)===0){e:{if(P=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",P&&n!==xu&&(de=n.relatedTarget||n.fromElement)&&(Hn(de)||de[xl]))break e;if((V||P)&&(P=F.window===F?F:(P=F.ownerDocument)?P.defaultView||P.parentWindow:window,V?(de=n.relatedTarget||n.toElement,V=j,de=de?Hn(de):null,de!==null&&(mt=J(de),ve=de.tag,de!==mt||ve!==5&&ve!==27&&ve!==6)&&(de=null)):(V=null,de=j),V!==de)){if(ve=zp,Y="onMouseLeave",D="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(ve=Hp,Y="onPointerLeave",D="onPointerEnter",O="pointer"),mt=V==null?P:Ms(V),H=de==null?P:Ms(de),P=new ve(Y,O+"leave",V,n,F),P.target=mt,P.relatedTarget=H,Y=null,Hn(F)===j&&(ve=new ve(D,O+"enter",de,n,F),ve.target=H,ve.relatedTarget=mt,Y=ve),mt=Y,V&&de)t:{for(ve=V,D=de,O=0,H=ve;H;H=Kl(H))O++;for(H=0,Y=D;Y;Y=Kl(Y))H++;for(;0<O-H;)ve=Kl(ve),O--;for(;0<H-O;)D=Kl(D),H--;for(;O--;){if(ve===D||D!==null&&ve===D.alternate)break t;ve=Kl(ve),D=Kl(D)}ve=null}else ve=null;V!==null&&_v(W,P,V,ve,!1),de!==null&&mt!==null&&_v(W,mt,de,ve,!0)}}e:{if(P=j?Ms(j):window,V=P.nodeName&&P.nodeName.toLowerCase(),V==="select"||V==="input"&&P.type==="file")var oe=Yp;else if(Fp(P))if(Wp)oe=V_;else{oe=I_;var Ce=U_}else V=P.nodeName,!V||V.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?j&&_u(j.elementType)&&(oe=Yp):oe=P_;if(oe&&(oe=oe(t,j))){Gp(W,oe,n,F);break e}Ce&&Ce(t,P,j),t==="focusout"&&j&&P.type==="number"&&j.memoizedProps.value!=null&&yu(P,"number",P.value)}switch(Ce=j?Ms(j):window,t){case"focusin":(Fp(Ce)||Ce.contentEditable==="true")&&(kl=Ce,Ru=j,Bs=null);break;case"focusout":Bs=Ru=kl=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,am(W,n,F);break;case"selectionchange":if(G_)break;case"keydown":case"keyup":am(W,n,F)}var fe;if(ku)e:{switch(t){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Ml?Vp(t,n)&&(me="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(Up&&n.locale!=="ko"&&(Ml||me!=="onCompositionStart"?me==="onCompositionEnd"&&Ml&&(fe=Lp()):(nn=F,Eu="value"in nn?nn.value:nn.textContent,Ml=!0)),Ce=tc(j,me),0<Ce.length&&(me=new Bp(me,t,null,n,F),W.push({event:me,listeners:Ce}),fe?me.data=fe:(fe=qp(n),fe!==null&&(me.data=fe)))),(fe=L_?D_(t,n):z_(t,n))&&(me=tc(j,"onBeforeInput"),0<me.length&&(Ce=new Bp("onBeforeInput","beforeinput",null,n,F),W.push({event:Ce,listeners:me}),Ce.data=fe)),N2(W,t,j,n,F)}bv(W,a)})}function hr(t,a,n){return{instance:t,listener:a,currentTarget:n}}function tc(t,a){for(var n=a+"Capture",r=[];t!==null;){var c=t,h=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=ks(t,n),c!=null&&r.unshift(hr(t,c,h)),c=ks(t,a),c!=null&&r.push(hr(t,c,h))),t=t.return}return r}function Kl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _v(t,a,n,r,c){for(var h=a._reactName,b=[];n!==null&&n!==r;){var x=n,A=x.alternate,j=x.stateNode;if(x=x.tag,A!==null&&A===r)break;x!==5&&x!==26&&x!==27||j===null||(A=j,c?(j=ks(n,h),j!=null&&b.unshift(hr(n,j,A))):c||(j=ks(n,h),j!=null&&b.push(hr(n,j,A)))),n=n.return}b.length!==0&&t.push({event:a,listeners:b})}var O2=/\r\n?/g,j2=/\u0000|\uFFFD/g;function xv(t){return(typeof t=="string"?t:""+t).replace(O2,`
`).replace(j2,"")}function wv(t,a){return a=xv(a),xv(t)===a}function ac(){}function We(t,a,n,r,c,h){switch(n){case"children":typeof r=="string"?a==="body"||a==="textarea"&&r===""||Al(t,r):(typeof r=="number"||typeof r=="bigint")&&a!=="body"&&Al(t,""+r);break;case"className":co(t,"class",r);break;case"tabIndex":co(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":co(t,n,r);break;case"style":Op(t,r,h);break;case"data":if(a!=="object"){co(t,"data",r);break}case"src":case"href":if(r===""&&(a!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=fo(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(a!=="input"&&We(t,a,"name",c.name,c,null),We(t,a,"formEncType",c.formEncType,c,null),We(t,a,"formMethod",c.formMethod,c,null),We(t,a,"formTarget",c.formTarget,c,null)):(We(t,a,"encType",c.encType,c,null),We(t,a,"method",c.method,c,null),We(t,a,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=fo(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=ac);break;case"onScroll":r!=null&&ke("scroll",t);break;case"onScrollEnd":r!=null&&ke("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=fo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":ke("beforetoggle",t),ke("toggle",t),oo(t,"popover",r);break;case"xlinkActuate":ki(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ki(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ki(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ki(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ki(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ki(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ki(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ki(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ki(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":oo(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=o_.get(n)||n,oo(t,n,r))}}function nh(t,a,n,r,c,h){switch(n){case"style":Op(t,r,h);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof r=="string"?Al(t,r):(typeof r=="number"||typeof r=="bigint")&&Al(t,""+r);break;case"onScroll":r!=null&&ke("scroll",t);break;case"onScrollEnd":r!=null&&ke("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ac);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sp.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),a=n.slice(2,c?n.length-7:void 0),h=t[ha]||null,h=h!=null?h[n]:null,typeof h=="function"&&t.removeEventListener(a,h,c),typeof r=="function")){typeof h!="function"&&h!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(a,r,c);break e}n in t?t[n]=r:r===!0?t.setAttribute(n,""):oo(t,n,r)}}}function Ft(t,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",t),ke("load",t);var r=!1,c=!1,h;for(h in n)if(n.hasOwnProperty(h)){var b=n[h];if(b!=null)switch(h){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:We(t,a,h,b,n,null)}}c&&We(t,a,"srcSet",n.srcSet,n,null),r&&We(t,a,"src",n.src,n,null);return;case"input":ke("invalid",t);var x=h=b=c=null,A=null,j=null;for(r in n)if(n.hasOwnProperty(r)){var F=n[r];if(F!=null)switch(r){case"name":c=F;break;case"type":b=F;break;case"checked":A=F;break;case"defaultChecked":j=F;break;case"value":h=F;break;case"defaultValue":x=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,a));break;default:We(t,a,r,F,n,null)}}Np(t,h,x,A,j,b,c,!1),uo(t);return;case"select":ke("invalid",t),r=b=h=null;for(c in n)if(n.hasOwnProperty(c)&&(x=n[c],x!=null))switch(c){case"value":h=x;break;case"defaultValue":b=x;break;case"multiple":r=x;default:We(t,a,c,x,n,null)}a=h,n=b,t.multiple=!!r,a!=null?El(t,!!r,a,!1):n!=null&&El(t,!!r,n,!0);return;case"textarea":ke("invalid",t),h=c=r=null;for(b in n)if(n.hasOwnProperty(b)&&(x=n[b],x!=null))switch(b){case"value":r=x;break;case"defaultValue":c=x;break;case"children":h=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(91));break;default:We(t,a,b,x,n,null)}kp(t,r,c,h),uo(t);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(r=n[A],r!=null))switch(A){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:We(t,a,A,r,n,null)}return;case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":ke("load",t);break;case"video":case"audio":for(r=0;r<dr.length;r++)ke(dr[r],t);break;case"image":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"embed":case"source":case"link":ke("error",t),ke("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in n)if(n.hasOwnProperty(j)&&(r=n[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:We(t,a,j,r,n,null)}return;default:if(_u(a)){for(F in n)n.hasOwnProperty(F)&&(r=n[F],r!==void 0&&nh(t,a,F,r,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(r=n[x],r!=null&&We(t,a,x,r,n,null))}function R2(t,a,n,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,b=null,x=null,A=null,j=null,F=null;for(V in n){var W=n[V];if(n.hasOwnProperty(V)&&W!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":A=W;default:r.hasOwnProperty(V)||We(t,a,V,null,r,W)}}for(var P in r){var V=r[P];if(W=n[P],r.hasOwnProperty(P)&&(V!=null||W!=null))switch(P){case"type":h=V;break;case"name":c=V;break;case"checked":j=V;break;case"defaultChecked":F=V;break;case"value":b=V;break;case"defaultValue":x=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,a));break;default:V!==W&&We(t,a,P,V,r,W)}}bu(t,b,x,A,j,F,h,c);return;case"select":V=b=x=P=null;for(h in n)if(A=n[h],n.hasOwnProperty(h)&&A!=null)switch(h){case"value":break;case"multiple":V=A;default:r.hasOwnProperty(h)||We(t,a,h,null,r,A)}for(c in r)if(h=r[c],A=n[c],r.hasOwnProperty(c)&&(h!=null||A!=null))switch(c){case"value":P=h;break;case"defaultValue":x=h;break;case"multiple":b=h;default:h!==A&&We(t,a,c,h,r,A)}a=x,n=b,r=V,P!=null?El(t,!!n,P,!1):!!r!=!!n&&(a!=null?El(t,!!n,a,!0):El(t,!!n,n?[]:"",!1));return;case"textarea":V=P=null;for(x in n)if(c=n[x],n.hasOwnProperty(x)&&c!=null&&!r.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:We(t,a,x,null,r,c)}for(b in r)if(c=r[b],h=n[b],r.hasOwnProperty(b)&&(c!=null||h!=null))switch(b){case"value":P=c;break;case"defaultValue":V=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&We(t,a,b,c,r,h)}Mp(t,P,V);return;case"option":for(var de in n)if(P=n[de],n.hasOwnProperty(de)&&P!=null&&!r.hasOwnProperty(de))switch(de){case"selected":t.selected=!1;break;default:We(t,a,de,null,r,P)}for(A in r)if(P=r[A],V=n[A],r.hasOwnProperty(A)&&P!==V&&(P!=null||V!=null))switch(A){case"selected":t.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:We(t,a,A,P,r,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in n)P=n[ve],n.hasOwnProperty(ve)&&P!=null&&!r.hasOwnProperty(ve)&&We(t,a,ve,null,r,P);for(j in r)if(P=r[j],V=n[j],r.hasOwnProperty(j)&&P!==V&&(P!=null||V!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,a));break;default:We(t,a,j,P,r,V)}return;default:if(_u(a)){for(var mt in n)P=n[mt],n.hasOwnProperty(mt)&&P!==void 0&&!r.hasOwnProperty(mt)&&nh(t,a,mt,void 0,r,P);for(F in r)P=r[F],V=n[F],!r.hasOwnProperty(F)||P===V||P===void 0&&V===void 0||nh(t,a,F,P,r,V);return}}for(var D in n)P=n[D],n.hasOwnProperty(D)&&P!=null&&!r.hasOwnProperty(D)&&We(t,a,D,null,r,P);for(W in r)P=r[W],V=n[W],!r.hasOwnProperty(W)||P===V||P==null&&V==null||We(t,a,W,P,r,V)}var lh=null,sh=null;function ic(t){return t.nodeType===9?t:t.ownerDocument}function Sv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cv(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function rh(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var oh=null;function L2(){var t=window.event;return t&&t.type==="popstate"?t===oh?!1:(oh=t,!0):(oh=null,!1)}var Ev=typeof setTimeout=="function"?setTimeout:void 0,D2=typeof clearTimeout=="function"?clearTimeout:void 0,Av=typeof Promise=="function"?Promise:void 0,z2=typeof queueMicrotask=="function"?queueMicrotask:typeof Av<"u"?function(t){return Av.resolve(null).then(t).catch(B2)}:Ev;function B2(t){setTimeout(function(){throw t})}function ch(t,a){var n=a,r=0;do{var c=n.nextSibling;if(t.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(r===0){t.removeChild(c),_r(a);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=c}while(n);_r(a)}function uh(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":uh(n),vu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function H2(t,a,n,r){for(;t.nodeType===1;){var c=n;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ns])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=ii(t.nextSibling),t===null)break}return null}function U2(t,a,n){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ii(t.nextSibling),t===null))return null;return t}function ii(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}function Tv(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(a===0)return t;a--}else n==="/$"&&a++}t=t.previousSibling}return null}function Nv(t,a,n){switch(a=ic(n),t){case"html":if(t=a.documentElement,!t)throw Error(s(452));return t;case"head":if(t=a.head,!t)throw Error(s(453));return t;case"body":if(t=a.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var qa=new Map,Mv=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Fi=K.d;K.d={f:I2,r:P2,D:V2,C:q2,L:F2,m:G2,X:W2,S:Y2,M:X2};function I2(){var t=Fi.f(),a=Qo();return t||a}function P2(t){var a=wl(t);a!==null&&a.tag===5&&a.type==="form"?ag(a):Fi.r(t)}var Jl=typeof document>"u"?null:document;function kv(t,a,n){var r=Jl;if(r&&typeof a=="string"&&a){var c=Ra(a);c='link[rel="'+t+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),Mv.has(c)||(Mv.add(c),t={rel:t,crossOrigin:n,href:a},r.querySelector(c)===null&&(a=r.createElement("link"),Ft(a,"link",t),jt(a),r.head.appendChild(a)))}}function V2(t){Fi.D(t),kv("dns-prefetch",t,null)}function q2(t,a){Fi.C(t,a),kv("preconnect",t,a)}function F2(t,a,n){Fi.L(t,a,n);var r=Jl;if(r&&t&&a){var c='link[rel="preload"][as="'+Ra(a)+'"]';a==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Ra(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Ra(n.imageSizes)+'"]')):c+='[href="'+Ra(t)+'"]';var h=c;switch(a){case"style":h=es(t);break;case"script":h=ts(t)}qa.has(h)||(t=G({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:t,as:a},n),qa.set(h,t),r.querySelector(c)!==null||a==="style"&&r.querySelector(fr(h))||a==="script"&&r.querySelector(pr(h))||(a=r.createElement("link"),Ft(a,"link",t),jt(a),r.head.appendChild(a)))}}function G2(t,a){Fi.m(t,a);var n=Jl;if(n&&t){var r=a&&typeof a.as=="string"?a.as:"script",c='link[rel="modulepreload"][as="'+Ra(r)+'"][href="'+Ra(t)+'"]',h=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ts(t)}if(!qa.has(h)&&(t=G({rel:"modulepreload",href:t},a),qa.set(h,t),n.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(pr(h)))return}r=n.createElement("link"),Ft(r,"link",t),jt(r),n.head.appendChild(r)}}}function Y2(t,a,n){Fi.S(t,a,n);var r=Jl;if(r&&t){var c=Sl(r).hoistableStyles,h=es(t);a=a||"default";var b=c.get(h);if(!b){var x={loading:0,preload:null};if(b=r.querySelector(fr(h)))x.loading=5;else{t=G({rel:"stylesheet",href:t,"data-precedence":a},n),(n=qa.get(h))&&dh(t,n);var A=b=r.createElement("link");jt(A),Ft(A,"link",t),A._p=new Promise(function(j,F){A.onload=j,A.onerror=F}),A.addEventListener("load",function(){x.loading|=1}),A.addEventListener("error",function(){x.loading|=2}),x.loading|=4,lc(b,a,r)}b={type:"stylesheet",instance:b,count:1,state:x},c.set(h,b)}}}function W2(t,a){Fi.X(t,a);var n=Jl;if(n&&t){var r=Sl(n).hoistableScripts,c=ts(t),h=r.get(c);h||(h=n.querySelector(pr(c)),h||(t=G({src:t,async:!0},a),(a=qa.get(c))&&hh(t,a),h=n.createElement("script"),jt(h),Ft(h,"link",t),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function X2(t,a){Fi.M(t,a);var n=Jl;if(n&&t){var r=Sl(n).hoistableScripts,c=ts(t),h=r.get(c);h||(h=n.querySelector(pr(c)),h||(t=G({src:t,async:!0,type:"module"},a),(a=qa.get(c))&&hh(t,a),h=n.createElement("script"),jt(h),Ft(h,"link",t),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function $v(t,a,n,r){var c=(c=ge.current)?nc(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=es(n.href),n=Sl(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=es(n.href);var h=Sl(c).hoistableStyles,b=h.get(t);if(b||(c=c.ownerDocument||c,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=c.querySelector(fr(t)))&&!h._p&&(b.instance=h,b.state.loading=5),qa.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qa.set(t,n),h||Q2(c,t,n,b.state))),a&&r===null)throw Error(s(528,""));return b}if(a&&r!==null)throw Error(s(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ts(n),n=Sl(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function es(t){return'href="'+Ra(t)+'"'}function fr(t){return'link[rel="stylesheet"]['+t+"]"}function Ov(t){return G({},t,{"data-precedence":t.precedence,precedence:null})}function Q2(t,a,n,r){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?r.loading=1:(a=t.createElement("link"),r.preload=a,a.addEventListener("load",function(){return r.loading|=1}),a.addEventListener("error",function(){return r.loading|=2}),Ft(a,"link",n),jt(a),t.head.appendChild(a))}function ts(t){return'[src="'+Ra(t)+'"]'}function pr(t){return"script[async]"+t}function jv(t,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var r=t.querySelector('style[data-href~="'+Ra(n.href)+'"]');if(r)return a.instance=r,jt(r),r;var c=G({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),jt(r),Ft(r,"style",c),lc(r,n.precedence,t),a.instance=r;case"stylesheet":c=es(n.href);var h=t.querySelector(fr(c));if(h)return a.state.loading|=4,a.instance=h,jt(h),h;r=Ov(n),(c=qa.get(c))&&dh(r,c),h=(t.ownerDocument||t).createElement("link"),jt(h);var b=h;return b._p=new Promise(function(x,A){b.onload=x,b.onerror=A}),Ft(h,"link",r),a.state.loading|=4,lc(h,n.precedence,t),a.instance=h;case"script":return h=ts(n.src),(c=t.querySelector(pr(h)))?(a.instance=c,jt(c),c):(r=n,(c=qa.get(h))&&(r=G({},n),hh(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),jt(c),Ft(c,"link",r),t.head.appendChild(c),a.instance=c);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(r=a.instance,a.state.loading|=4,lc(r,n.precedence,t));return a.instance}function lc(t,a,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,h=c,b=0;b<r.length;b++){var x=r[b];if(x.dataset.precedence===a)h=x;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(t,a.firstChild))}function dh(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function hh(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var sc=null;function Rv(t,a,n){if(sc===null){var r=new Map,c=sc=new Map;c.set(n,r)}else c=sc,r=c.get(n),r||(r=new Map,c.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),c=0;c<n.length;c++){var h=n[c];if(!(h[Ns]||h[Zt]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(a)||"";b=t+b;var x=r.get(b);x?x.push(h):r.set(b,[h])}}return r}function Lv(t,a,n){t=t.ownerDocument||t,t.head.insertBefore(n,a==="title"?t.querySelector("head > title"):null)}function Z2(t,a,n){if(n===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Dv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var mr=null;function K2(){}function J2(t,a,n){if(mr===null)throw Error(s(475));var r=mr;if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=es(n.href),h=t.querySelector(fr(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=rc.bind(r),t.then(r,r)),a.state.loading|=4,a.instance=h,jt(h);return}h=t.ownerDocument||t,n=Ov(n),(c=qa.get(c))&&dh(n,c),h=h.createElement("link"),jt(h);var b=h;b._p=new Promise(function(x,A){b.onload=x,b.onerror=A}),Ft(h,"link",n),a.instance=h}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(r.count++,a=rc.bind(r),t.addEventListener("load",a),t.addEventListener("error",a))}}function ex(){if(mr===null)throw Error(s(475));var t=mr;return t.stylesheets&&t.count===0&&fh(t,t.stylesheets),0<t.count?function(a){var n=setTimeout(function(){if(t.stylesheets&&fh(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n)}}:null}function rc(){if(this.count--,this.count===0){if(this.stylesheets)fh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var oc=null;function fh(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,a.forEach(tx,t),oc=null,rc.call(t))}function tx(t,a){if(!(a.state.loading&4)){var n=oc.get(t);if(n)var r=n.get(null);else{n=new Map,oc.set(t,n);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var b=c[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(n.set(b.dataset.precedence,b),r=b)}r&&n.set(null,r)}c=a.instance,b=c.getAttribute("data-precedence"),h=n.get(b)||r,h===r&&n.set(null,c),n.set(b,c),this.count++,r=rc.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),a.state.loading|=4}}var gr={$$typeof:w,Provider:null,Consumer:null,_currentValue:Ie,_currentValue2:Ie,_threadCount:0};function ax(t,a,n,r,c,h,b,x){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.hiddenUpdates=mu(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function zv(t,a,n,r,c,h,b,x,A,j,F,W){return t=new ax(t,a,n,b,x,A,j,W),a=1,h===!0&&(a|=24),h=Pa(3,null,null,a),t.current=h,h.stateNode=t,a=Fu(),a.refCount++,t.pooledCache=a,a.refCount++,h.memoizedState={element:r,isDehydrated:n,cache:a},Ed(h),t}function Bv(t){return t?(t=jl,t):jl}function Hv(t,a,n,r,c,h){c=Bv(c),r.context===null?r.context=c:r.pendingContext=c,r=hn(a),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=fn(t,r,a),n!==null&&(sa(n,t,a),Js(n,t,a))}function Uv(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<a?n:a}}function ph(t,a){Uv(t,a),(t=t.alternate)&&Uv(t,a)}function Iv(t){if(t.tag===13){var a=ln(t,67108864);a!==null&&sa(a,t,67108864),ph(t,67108864)}}var cc=!0;function ix(t,a,n,r){var c=U.T;U.T=null;var h=K.p;try{K.p=2,mh(t,a,n,r)}finally{K.p=h,U.T=c}}function nx(t,a,n,r){var c=U.T;U.T=null;var h=K.p;try{K.p=8,mh(t,a,n,r)}finally{K.p=h,U.T=c}}function mh(t,a,n,r){if(cc){var c=gh(r);if(c===null)ih(t,a,r,uc,n),Vv(t,r);else if(sx(c,t,a,n,r))r.stopPropagation();else if(Vv(t,r),a&4&&-1<lx.indexOf(t)){for(;c!==null;){var h=wl(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Bn(h.pendingLanes);if(b!==0){var x=h;for(x.pendingLanes|=2,x.entangledLanes|=2;b;){var A=1<<31-_a(b);x.entanglements[1]|=A,b&=~A}vi(h),(ht&6)===0&&(Yo=hi()+500,ur(0))}}break;case 13:x=ln(h,2),x!==null&&sa(x,h,2),Qo(),ph(h,2)}if(h=gh(r),h===null&&ih(t,a,r,uc,n),h===c)break;c=h}c!==null&&r.stopPropagation()}else ih(t,a,r,null,n)}}function gh(t){return t=wu(t),vh(t)}var uc=null;function vh(t){if(uc=null,t=Hn(t),t!==null){var a=J(t);if(a===null)t=null;else{var n=a.tag;if(n===13){if(t=se(a),t!==null)return t;t=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return uc=t,null}function Pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q1()){case hp:return 2;case fp:return 8;case no:case F1:return 32;case pp:return 268435456;default:return 32}default:return 32}}var bh=!1,_n=null,xn=null,wn=null,vr=new Map,br=new Map,Sn=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vv(t,a){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":vr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(a.pointerId)}}function yr(t,a,n,r,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:a,domEventName:n,eventSystemFlags:r,nativeEvent:h,targetContainers:[c]},a!==null&&(a=wl(a),a!==null&&Iv(a)),t):(t.eventSystemFlags|=r,a=t.targetContainers,c!==null&&a.indexOf(c)===-1&&a.push(c),t)}function sx(t,a,n,r,c){switch(a){case"focusin":return _n=yr(_n,t,a,n,r,c),!0;case"dragenter":return xn=yr(xn,t,a,n,r,c),!0;case"mouseover":return wn=yr(wn,t,a,n,r,c),!0;case"pointerover":var h=c.pointerId;return vr.set(h,yr(vr.get(h)||null,t,a,n,r,c)),!0;case"gotpointercapture":return h=c.pointerId,br.set(h,yr(br.get(h)||null,t,a,n,r,c)),!0}return!1}function qv(t){var a=Hn(t.target);if(a!==null){var n=J(a);if(n!==null){if(a=n.tag,a===13){if(a=se(n),a!==null){t.blockedOn=a,e_(t.priority,function(){if(n.tag===13){var r=Ea(),c=ln(n,r);c!==null&&sa(c,n,r),ph(n,r)}});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var n=gh(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xu=r,n.target.dispatchEvent(r),xu=null}else return a=wl(n),a!==null&&Iv(a),t.blockedOn=n,!1;a.shift()}return!0}function Fv(t,a,n){dc(t)&&n.delete(a)}function rx(){bh=!1,_n!==null&&dc(_n)&&(_n=null),xn!==null&&dc(xn)&&(xn=null),wn!==null&&dc(wn)&&(wn=null),vr.forEach(Fv),br.forEach(Fv)}function hc(t,a){t.blockedOn===a&&(t.blockedOn=null,bh||(bh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rx)))}var fc=null;function Gv(t){fc!==t&&(fc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){fc===t&&(fc=null);for(var a=0;a<t.length;a+=3){var n=t[a],r=t[a+1],c=t[a+2];if(typeof r!="function"){if(vh(r||n)===null)continue;break}var h=wl(n);h!==null&&(t.splice(a,3),a-=3,rd(h,{pending:!0,data:c,method:n.method,action:r},r,c))}}))}function _r(t){function a(A){return hc(A,t)}_n!==null&&hc(_n,t),xn!==null&&hc(xn,t),wn!==null&&hc(wn,t),vr.forEach(a),br.forEach(a);for(var n=0;n<Sn.length;n++){var r=Sn[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)qv(n),n.blockedOn===null&&Sn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var c=n[r],h=n[r+1],b=c[ha]||null;if(typeof h=="function")b||Gv(n);else if(b){var x=null;if(h&&h.hasAttribute("formAction")){if(c=h,b=h[ha]||null)x=b.formAction;else if(vh(c)!==null)continue}else x=b.action;typeof x=="function"?n[r+1]=x:(n.splice(r,3),r-=3),Gv(n)}}}function yh(t){this._internalRoot=t}pc.prototype.render=yh.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(s(409));var n=a.current,r=Ea();Hv(n,r,t,a,null,null)},pc.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;t.tag===0&&Ql(),Hv(t.current,2,null,t,null,null),Qo(),a[xl]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var a=_p();t={blockedOn:null,target:t,priority:a};for(var n=0;n<Sn.length&&a!==0&&a<Sn[n].priority;n++);Sn.splice(n,0,t),n===0&&qv(t)}};var Yv=i.version;if(Yv!=="19.0.0")throw Error(s(527,Yv,"19.0.0"));K.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=Tt(a),t=t!==null?Ee(t):null,t=t===null?null:t.stateNode,t};var ox={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:U,findFiberByHostInstance:Hn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Es=mc.inject(ox),ya=mc}catch{}}return xr.createRoot=function(t,a){if(!o(t))throw Error(s(299));var n=!1,r="",c=ug,h=dg,b=hg,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks)),a=zv(t,1,!1,null,null,n,r,c,h,b,x,null),t[xl]=a.current,ah(t.nodeType===8?t.parentNode:t),new yh(a)},xr.hydrateRoot=function(t,a,n){if(!o(t))throw Error(s(299));var r=!1,c="",h=ug,b=dg,x=hg,A=null,j=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(b=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks),n.formState!==void 0&&(j=n.formState)),a=zv(t,1,!0,a,n??null,r,c,h,b,x,A,j),a.context=Bv(null),n=a.current,r=Ea(),c=hn(r),c.callback=null,fn(n,c,r),a.current.lanes=r,Ts(a,r),vi(a),t[xl]=a.current,ah(t),new pc(a)},xr.version="19.0.0",xr}var db;function Tw(){if(db)return xh.exports;db=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),xh.exports=Aw(),xh.exports}var Nw=Tw(),nf="";function lf(e){nf=e}function Mw(e=""){if(!nf){const i=[...document.getElementsByTagName("script")],l=i.find(s=>s.hasAttribute("data-shoelace"));if(l)lf(l.getAttribute("data-shoelace"));else{const s=i.find(u=>/shoelace(\.min)?\.js($|\?)/.test(u.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(u.src));let o="";s&&(o=s.getAttribute("src")),lf(o.split("/").slice(0,-1).join("/"))}}return nf.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var W0=Object.defineProperty,kw=Object.defineProperties,$w=Object.getOwnPropertyDescriptor,Ow=Object.getOwnPropertyDescriptors,hb=Object.getOwnPropertySymbols,jw=Object.prototype.hasOwnProperty,Rw=Object.prototype.propertyIsEnumerable,Ch=(e,i)=>(i=Symbol[e])?i:Symbol.for("Symbol."+e),Lf=e=>{throw TypeError(e)},fb=(e,i,l)=>i in e?W0(e,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[i]=l,Ki=(e,i)=>{for(var l in i||(i={}))jw.call(i,l)&&fb(e,l,i[l]);if(hb)for(var l of hb(i))Rw.call(i,l)&&fb(e,l,i[l]);return e},Gr=(e,i)=>kw(e,Ow(i)),S=(e,i,l,s)=>{for(var o=s>1?void 0:s?$w(i,l):i,u=e.length-1,d;u>=0;u--)(d=e[u])&&(o=(s?d(i,l,o):d(o))||o);return s&&o&&W0(i,l,o),o},X0=(e,i,l)=>i.has(e)||Lf("Cannot "+l),Lw=(e,i,l)=>(X0(e,i,"read from private field"),i.get(e)),Dw=(e,i,l)=>i.has(e)?Lf("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,l),zw=(e,i,l,s)=>(X0(e,i,"write to private field"),i.set(e,l),l),Bw=function(e,i){this[0]=e,this[1]=i},Hw=e=>{var i=e[Ch("asyncIterator")],l=!1,s,o={};return i==null?(i=e[Ch("iterator")](),s=u=>o[u]=d=>i[u](d)):(i=i.call(e),s=u=>o[u]=d=>{if(l){if(l=!1,u==="throw")throw d;return d}return l=!0,{done:!1,value:new Bw(new Promise(p=>{var g=i[u](d);g instanceof Object||Lf("Object expected"),p(g)}),1)}}),o[Ch("iterator")]=()=>o,s("next"),"throw"in i?s("throw"):o.throw=u=>{throw u},"return"in i&&s("return"),o},Uw=(function(){var e=function(i,l){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(s[u]=o[u])},e(i,l)};return function(i,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");e(i,l);function s(){this.constructor=i}i.prototype=l===null?Object.create(l):(s.prototype=l.prototype,new s)}})(),Q0=function(e,i,l,s){function o(u){return u instanceof l?u:new l((function(d){d(u)}))}return new(l||(l=Promise))((function(u,d){function p(v){try{m(s.next(v))}catch(y){d(y)}}function g(v){try{m(s.throw(v))}catch(y){d(y)}}function m(v){v.done?u(v.value):o(v.value).then(p,g)}m((s=s.apply(e,i||[])).next())}))},Z0=function(e,i){var l={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},s,o,u,d;return d={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function p(m){return function(v){return g([m,v])}}function g(m){if(s)throw new TypeError("Generator is already executing.");for(;d&&(d=0,m[0]&&(l=0)),l;)try{if(s=1,o&&(u=m[0]&2?o.return:m[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,m[1])).done)return u;switch(o=0,u&&(m=[m[0]&2,u.value]),m[0]){case 0:case 1:u=m;break;case 4:return l.label++,{value:m[1],done:!1};case 5:l.label++,o=m[1],m=[0];continue;case 7:m=l.ops.pop(),l.trys.pop();continue;default:if(u=l.trys,!(u=u.length>0&&u[u.length-1])&&(m[0]===6||m[0]===2)){l=0;continue}if(m[0]===3&&(!u||m[1]>u[0]&&m[1]<u[3])){l.label=m[1];break}if(m[0]===6&&l.label<u[1]){l.label=u[1],u=m;break}if(u&&l.label<u[2]){l.label=u[2],l.ops.push(m);break}u[2]&&l.ops.pop(),l.trys.pop();continue}m=i.call(e,l)}catch(v){m=[6,v],o=0}finally{s=u=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}},pb=function(e,i,l){if(l||arguments.length===2)for(var s=0,o=i.length,u;s<o;s++)(u||!(s in i))&&(u||(u=Array.prototype.slice.call(i,0,s)),u[s]=i[s]);return e.concat(u||Array.prototype.slice.call(i))},Iw="ionicpwaelements",Tc,K0,Na=!1,sf=!1,Qi=function(e,i){return function(){}},Pw=function(e,i){return function(){}},Vw="{visibility:hidden}.hydrated{visibility:inherit}",mb={},qw="http://www.w3.org/2000/svg",Fw="http://www.w3.org/1999/xhtml",Gw=function(e){return e!=null},Df=function(e){return e=typeof e,e==="object"||e==="function"};function J0(e){var i,l,s;return(s=(l=(i=e.head)===null||i===void 0?void 0:i.querySelector('meta[name="csp-nonce"]'))===null||l===void 0?void 0:l.getAttribute("content"))!==null&&s!==void 0?s:void 0}var Yw=function(e,i){for(var l=[],s=2;s<arguments.length;s++)l[s-2]=arguments[s];var o=null,u=!1,d=!1,p=[],g=function(y){for(var _=0;_<y.length;_++)o=y[_],Array.isArray(o)?g(o):o!=null&&typeof o!="boolean"&&((u=typeof e!="function"&&!Df(o))&&(o=String(o)),u&&d?p[p.length-1].$text$+=o:p.push(u?rf(null,o):o),d=u)};if(g(l),i){var m=i.className||i.class;m&&(i.class=typeof m!="object"?m:Object.keys(m).filter((function(y){return m[y]})).join(" "))}var v=rf(e,null);return v.$attrs$=i,p.length>0&&(v.$children$=p),v},rf=function(e,i){var l={$flags$:0,$tag$:e,$text$:i,$elm$:null,$children$:null};return l.$attrs$=null,l},Ww={},Xw=function(e){return e&&e.$tag$===Ww},Qw=function(e,i){return e!=null&&!Df(e)?i&4?e==="false"?!1:e===""||!!e:i&2?parseFloat(e):i&1?String(e):e:e},Zw=function(e){return Rn(e).$hostElement$},XM=function(e,i,l){var s=Zw(e);return{emit:function(o){return ey(s,i,{bubbles:!0,composed:!0,cancelable:!0,detail:o})}}},ey=function(e,i,l){var s=Ht.ce(i,l);return e.dispatchEvent(s),s},gb=new WeakMap,Kw=function(e,i,l){var s=Dc.get(e);xS&&l?(s=s||new CSSStyleSheet,typeof s=="string"?s=i:s.replaceSync(i)):s=i,Dc.set(e,s)},Jw=function(e,i,l,s){var o,u=ty(i),d=Dc.get(u);if(e=e.nodeType===11?e:li,d)if(typeof d=="string"){e=e.head||e;var p=gb.get(e),g=void 0;if(p||gb.set(e,p=new Set),!p.has(u)){{g=li.createElement("style"),g.innerHTML=d;var m=(o=Ht.$nonce$)!==null&&o!==void 0?o:J0(li);m!=null&&g.setAttribute("nonce",m),e.insertBefore(g,e.querySelector("link"))}p&&p.add(u)}}else e.adoptedStyleSheets.includes(d)||(e.adoptedStyleSheets=pb(pb([],e.adoptedStyleSheets,!0),[d],!1));return u},eS=function(e){var i=e.$cmpMeta$,l=e.$hostElement$,s=i.$flags$,o=Qi("attachStyles",i.$tagName$),u=Jw(l.shadowRoot?l.shadowRoot:l.getRootNode(),i);s&10&&(l["s-sc"]=u,l.classList.add(u+"-h")),o()},ty=function(e,i){return"sc-"+e.$tagName$},vb=function(e,i,l,s,o,u){if(l!==s){var d=yb(e,i),p=i.toLowerCase();if(i==="class"){var g=e.classList,m=bb(l),v=bb(s);g.remove.apply(g,m.filter((function(C){return C&&!v.includes(C)}))),g.add.apply(g,v.filter((function(C){return C&&!m.includes(C)})))}else if(i==="style"){for(var y in l)(!s||s[y]==null)&&(y.includes("-")?e.style.removeProperty(y):e.style[y]="");for(var y in s)(!l||s[y]!==l[y])&&(y.includes("-")?e.style.setProperty(y,s[y]):e.style[y]=s[y])}else if(i==="ref")s&&s(e);else if(!d&&i[0]==="o"&&i[1]==="n")i[2]==="-"?i=i.slice(3):yb(Xc,p)?i=p.slice(2):i=p[2]+i.slice(3),l&&Ht.rel(e,i,l,!1),s&&Ht.ael(e,i,s,!1);else{var _=Df(s);if((d||_&&s!==null)&&!o)try{if(e.tagName.includes("-"))e[i]=s;else{var w=s??"";i==="list"?d=!1:(l==null||e[i]!=w)&&(e[i]=w)}}catch{}s==null||s===!1?(s!==!1||e.getAttribute(i)==="")&&e.removeAttribute(i):(!d||u&4||o)&&!_&&(s=s===!0?"":s,e.setAttribute(i,s))}}},tS=/\s/,bb=function(e){return e?e.split(tS):[]},ay=function(e,i,l,s){var o=i.$elm$.nodeType===11&&i.$elm$.host?i.$elm$.host:i.$elm$,u=e&&e.$attrs$||mb,d=i.$attrs$||mb;for(s in u)s in d||vb(o,s,u[s],void 0,l,i.$flags$);for(s in d)vb(o,s,u[s],d[s],l,i.$flags$)},zf=function(e,i,l,s){var o=i.$children$[l],u=0,d,p;if(o.$text$!==null)d=o.$elm$=li.createTextNode(o.$text$);else{if(Na||(Na=o.$tag$==="svg"),d=o.$elm$=li.createElementNS(Na?qw:Fw,o.$tag$),Na&&o.$tag$==="foreignObject"&&(Na=!1),ay(null,o,Na),Gw(Tc)&&d["s-si"]!==Tc&&d.classList.add(d["s-si"]=Tc),o.$children$)for(u=0;u<o.$children$.length;++u)p=zf(e,o,u),p&&d.appendChild(p);o.$tag$==="svg"?Na=!1:d.tagName==="foreignObject"&&(Na=!0)}return d},iy=function(e,i,l,s,o,u){var d=e,p;for(d.shadowRoot&&d.tagName===K0&&(d=d.shadowRoot);o<=u;++o)s[o]&&(p=zf(null,l,o),p&&(s[o].$elm$=p,d.insertBefore(p,i)))},ny=function(e,i,l){for(var s=i;s<=l;++s){var o=e[s];if(o){var u=o.$elm$;ly(o),u&&u.remove()}}},aS=function(e,i,l,s){for(var o=0,u=0,d=i.length-1,p=i[0],g=i[d],m=s.length-1,v=s[0],y=s[m],_;o<=d&&u<=m;)p==null?p=i[++o]:g==null?g=i[--d]:v==null?v=s[++u]:y==null?y=s[--m]:gc(p,v)?(Rr(p,v),p=i[++o],v=s[++u]):gc(g,y)?(Rr(g,y),g=i[--d],y=s[--m]):gc(p,y)?(Rr(p,y),e.insertBefore(p.$elm$,g.$elm$.nextSibling),p=i[++o],y=s[--m]):gc(g,v)?(Rr(g,v),e.insertBefore(g.$elm$,p.$elm$),g=i[--d],v=s[++u]):(_=zf(i&&i[u],l,u),v=s[++u],_&&p.$elm$.parentNode.insertBefore(_,p.$elm$));o>d?iy(e,s[m+1]==null?null:s[m+1].$elm$,l,s,u,m):u>m&&ny(i,o,d)},gc=function(e,i){return e.$tag$===i.$tag$},Rr=function(e,i){var l=i.$elm$=e.$elm$,s=e.$children$,o=i.$children$,u=i.$tag$,d=i.$text$;d===null?(Na=u==="svg"?!0:u==="foreignObject"?!1:Na,ay(e,i,Na),s!==null&&o!==null?aS(l,s,i,o):o!==null?(e.$text$!==null&&(l.textContent=""),iy(l,null,i,o,0,o.length-1)):s!==null&&ny(s,0,s.length-1),Na&&u==="svg"&&(Na=!1)):e.$text$!==d&&(l.data=d)},ly=function(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(ly)},iS=function(e,i){var l=e.$hostElement$,s=e.$vnode$||rf(null,null),o=Xw(i)?i:Yw(null,null,i);K0=l.tagName,o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=s.$elm$=l.shadowRoot||l,Tc=l["s-sc"],Rr(s,o)},sy=function(e,i){i&&!e.$onRenderResolve$&&i["s-p"]&&i["s-p"].push(new Promise((function(l){return e.$onRenderResolve$=l})))},Wc=function(e,i){if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}sy(e,e.$ancestorComponent$);var l=function(){return nS(e,i)};return SS(l)},nS=function(e,i){var l=Qi("scheduleUpdate",e.$cmpMeta$.$tagName$),s=e.$lazyInstance$,o;return i&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(u){var d=u[0],p=u[1];return Bf(s,d,p)})),e.$queuedListeners$=void 0)),l(),lS(o,(function(){return rS(e,s,i)}))},lS=function(e,i){return sS(e)?e.then(i):i()},sS=function(e){return e instanceof Promise||e&&e.then&&typeof e.then=="function"},rS=function(e,i,l){return Q0(void 0,void 0,void 0,(function(){var s,o,u,d,p,g,m;return Z0(this,(function(v){return o=e.$hostElement$,u=Qi("update",e.$cmpMeta$.$tagName$),d=o["s-rc"],l&&eS(e),p=Qi("render",e.$cmpMeta$.$tagName$),oS(e,i),d&&(d.map((function(y){return y()})),o["s-rc"]=void 0),p(),u(),g=(s=o["s-p"])!==null&&s!==void 0?s:[],m=function(){return cS(e)},g.length===0?m():(Promise.all(g).then(m),e.$flags$|=4,g.length=0),[2]}))}))},oS=function(e,i,l){try{i=i.render(),e.$flags$&=-17,e.$flags$|=2,iS(e,i)}catch(s){ni(s,e.$hostElement$)}return null},cS=function(e){e.$cmpMeta$.$tagName$;var i=e.$hostElement$,l=Qi(),s=e.$lazyInstance$,o=e.$ancestorComponent$;e.$flags$&64?l():(e.$flags$|=64,oy(i),Bf(s,"componentDidLoad"),l(),e.$onReadyResolve$(i),o||ry()),e.$onInstanceResolve$(i),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&Uf((function(){return Wc(e,!1)})),e.$flags$&=-517},QM=function(e){{var i=Rn(e),l=i.$hostElement$.isConnected;return l&&(i.$flags$&18)===2&&Wc(i,!1),l}},ry=function(e){oy(li.documentElement),Uf((function(){return ey(Xc,"appload",{detail:{namespace:Iw}})}))},Bf=function(e,i,l){if(e&&e[i])try{return e[i](l)}catch(s){ni(s)}},oy=function(e){return e.classList.add("hydrated")},uS=function(e,i){return Rn(e).$instanceValues$.get(i)},dS=function(e,i,l,s){var o=Rn(e),u=o.$instanceValues$.get(i),d=o.$flags$,p=o.$lazyInstance$;l=Qw(l,s.$members$[i][0]);var g=Number.isNaN(u)&&Number.isNaN(l),m=l!==u&&!g;(!(d&8)||u===void 0)&&m&&(o.$instanceValues$.set(i,l),p&&(d&18)===2&&Wc(o,!1))},cy=function(e,i,l){if(i.$members$){var s=Object.entries(i.$members$),o=e.prototype;if(s.map((function(d){var p=d[0],g=d[1][0];g&31||l&2&&g&32?Object.defineProperty(o,p,{get:function(){return uS(this,p)},set:function(m){dS(this,p,m,i)},configurable:!0,enumerable:!0}):l&1&&g&64&&Object.defineProperty(o,p,{value:function(){for(var m=[],v=0;v<arguments.length;v++)m[v]=arguments[v];var y=Rn(this);return y.$onInstancePromise$.then((function(){var _;return(_=y.$lazyInstance$)[p].apply(_,m)}))}})})),l&1){var u=new Map;o.attributeChangedCallback=function(d,p,g){var m=this;Ht.jmp((function(){var v=u.get(d);if(m.hasOwnProperty(v))g=m[v],delete m[v];else if(o.hasOwnProperty(v)&&typeof m[v]=="number"&&m[v]==g)return;m[v]=g===null&&typeof m[v]=="boolean"?!1:g}))},e.observedAttributes=s.filter((function(d){d[0];var p=d[1];return p[0]&15})).map((function(d){var p=d[0],g=d[1],m=g[1]||p;return u.set(m,p),m}))}}return e},hS=function(e,i,l,s,o){return Q0(void 0,void 0,void 0,(function(){var u,d,p,g,m,v,y;return Z0(this,(function(_){switch(_.label){case 0:return(i.$flags$&32)!==0?[3,3]:(i.$flags$|=32,o=_S(l),o.then?(u=Pw(),[4,o]):[3,2]);case 1:o=_.sent(),u(),_.label=2;case 2:o.isProxied||(cy(o,l,2),o.isProxied=!0),d=Qi("createInstance",l.$tagName$),i.$flags$|=8;try{new o(i)}catch(w){ni(w)}i.$flags$&=-9,d(),o.style&&(p=o.style,g=ty(l),Dc.has(g)||(m=Qi("registerStyles",l.$tagName$),Kw(g,p,!!(l.$flags$&1)),m())),_.label=3;case 3:return v=i.$ancestorComponent$,y=function(){return Wc(i,!0)},v&&v["s-rc"]?v["s-rc"].push(y):y(),[2]}}))}))},fS=function(e){if((Ht.$flags$&1)===0){var i=Rn(e),l=i.$cmpMeta$,s=Qi("connectedCallback",l.$tagName$);if(i.$flags$&1)uy(e,i,l.$listeners$);else{i.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){sy(i,i.$ancestorComponent$=o);break}l.$members$&&Object.entries(l.$members$).map((function(u){var d=u[0],p=u[1][0];if(p&31&&e.hasOwnProperty(d)){var g=e[d];delete e[d],e[d]=g}})),hS(e,i,l)}s()}},pS=function(e){if((Ht.$flags$&1)===0){var i=Rn(e),l=i.$lazyInstance$;i.$rmListeners$&&(i.$rmListeners$.map((function(s){return s()})),i.$rmListeners$=void 0),Bf(l,"disconnectedCallback")}},mS=function(e,i){i===void 0&&(i={});var l,s=Qi(),o=[],u=i.exclude||[],d=Xc.customElements,p=li.head,g=p.querySelector("meta[charset]"),m=li.createElement("style"),v=[],y,_=!0;Object.assign(Ht,i),Ht.$resourcesUrl$=new URL(i.resourcesUrl||"./",li.baseURI).href,e.map((function(C){C[1].map((function(N){var E={$flags$:N[0],$tagName$:N[1],$members$:N[2],$listeners$:N[3]};E.$members$=N[2],E.$listeners$=N[3];var T=E.$tagName$,R=(function(B){Uw(z,B);function z(k){var q=B.call(this,k)||this;return k=q,yS(k,E),E.$flags$&1&&k.attachShadow({mode:"open"}),q}return z.prototype.connectedCallback=function(){var k=this;y&&(clearTimeout(y),y=null),_?v.push(this):Ht.jmp((function(){return fS(k)}))},z.prototype.disconnectedCallback=function(){var k=this;Ht.jmp((function(){return pS(k)}))},z.prototype.componentOnReady=function(){return Rn(this).$onReadyPromise$},z})(HTMLElement);E.$lazyBundleId$=C[0],!u.includes(T)&&!d.get(T)&&(o.push(T),d.define(T,cy(R,E,1)))}))}));{m.innerHTML=o+Vw,m.setAttribute("data-styles","");var w=(l=Ht.$nonce$)!==null&&l!==void 0?l:J0(li);w!=null&&m.setAttribute("nonce",w),p.insertBefore(m,g?g.nextSibling:p.firstChild)}_=!1,v.length?v.map((function(C){return C.connectedCallback()})):Ht.jmp((function(){return y=setTimeout(ry,30)})),s()},uy=function(e,i,l,s){l&&l.map((function(o){var u=o[0],d=o[1],p=o[2],g=vS(e,u),m=gS(i,p),v=bS(u);Ht.ael(g,d,m,v),(i.$rmListeners$=i.$rmListeners$||[]).push((function(){return Ht.rel(g,d,m,v)}))}))},gS=function(e,i){return function(l){try{e.$flags$&256?e.$lazyInstance$[i](l):(e.$queuedListeners$=e.$queuedListeners$||[]).push([i,l])}catch(s){ni(s)}}},vS=function(e,i){return i&16?li.body:e},bS=function(e){return(e&2)!==0},Hf=new WeakMap,Rn=function(e){return Hf.get(e)},ZM=function(e,i){return Hf.set(i.$lazyInstance$=e,i)},yS=function(e,i){var l={$flags$:0,$hostElement$:e,$cmpMeta$:i,$instanceValues$:new Map};return l.$onInstancePromise$=new Promise((function(s){return l.$onInstanceResolve$=s})),l.$onReadyPromise$=new Promise((function(s){return l.$onReadyResolve$=s})),e["s-p"]=[],e["s-rc"]=[],uy(e,l,i.$listeners$),Hf.set(e,l)},yb=function(e,i){return i in e},ni=function(e,i){return(0,console.error)(e,i)},Eh=new Map,_S=function(e,i,l){var s=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$,u=Eh.get(o);if(u)return u[s];{var d=function(p){return Eh.set(o,p),p[s]};switch(o){case"pwa-action-sheet":return ea(()=>import("./pwa-action-sheet.entry-DR2Itamm.js"),__vite__mapDeps([0,1])).then(d,ni);case"pwa-camera-modal":return ea(()=>import("./pwa-camera-modal.entry-VHX_mzU0.js"),__vite__mapDeps([2,1])).then(d,ni);case"pwa-toast":return ea(()=>import("./pwa-toast.entry-D2vQHu42.js"),__vite__mapDeps([3,1])).then(d,ni);case"pwa-camera-modal-instance":return ea(()=>import("./pwa-camera-modal-instance.entry-XoR__PZQ.js"),__vite__mapDeps([4,1])).then(d,ni);case"pwa-camera":return ea(()=>import("./pwa-camera.entry-DjouJPNq.js"),__vite__mapDeps([5,1])).then(d,ni)}}return ea(()=>import("./".concat(o,".entry.js").concat("")),[]).then((function(p){return Eh.set(o,p),p[s]}),ni)},Dc=new Map,Xc=typeof window<"u"?window:{},li=Xc.document||{head:{}},Ht={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,i,l,s){return e.addEventListener(i,l,s)},rel:function(e,i,l,s){return e.removeEventListener(i,l,s)},ce:function(e,i){return new CustomEvent(e,i)}},dy=function(e){return Promise.resolve(e)},xS=(function(){try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),_b=[],hy=[],wS=function(e,i){return function(l){e.push(l),sf||(sf=!0,Ht.$flags$&4?Uf(of):Ht.raf(of))}},xb=function(e){for(var i=0;i<e.length;i++)try{e[i](performance.now())}catch(l){ni(l)}e.length=0},of=function(){xb(_b),xb(hy),(sf=_b.length>0)&&Ht.raf(of)},Uf=function(e){return dy().then(e)},SS=wS(hy),CS=function(){return dy()},ES=function(e,i){return typeof window>"u"?Promise.resolve():CS().then((function(){return mS([["pwa-camera-modal",[[1,"pwa-camera-modal",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],present:[64],dismiss:[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{header:[1],cancelable:[4],options:[16],open:[32]}]]],["pwa-toast",[[1,"pwa-toast",{message:[1],duration:[2],closing:[32]}]]],["pwa-camera",[[1,"pwa-camera",{facingMode:[1,"facing-mode"],handlePhoto:[16],hidePicker:[4,"hide-picker"],handleNoDeviceError:[16],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"],photo:[32],photoSrc:[32],showShutterOverlay:[32],flashIndex:[32],hasCamera:[32],rotation:[32],deviceError:[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"]},[[16,"keyup","handleBackdropKeyUp"]]]]]],i)}))};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();const AS=(e,i,l)=>{const s=e[i];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((o,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+i+(i.split("/").length!==l?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nc=globalThis,If=Nc.ShadowRoot&&(Nc.ShadyCSS===void 0||Nc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pf=Symbol(),wb=new WeakMap;let fy=class{constructor(i,l,s){if(this._$cssResult$=!0,s!==Pf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=l}get styleSheet(){let i=this.o;const l=this.t;if(If&&i===void 0){const s=l!==void 0&&l.length===1;s&&(i=wb.get(l)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),s&&wb.set(l,i))}return i}toString(){return this.cssText}};const TS=e=>new fy(typeof e=="string"?e:e+"",void 0,Pf),Ge=(e,...i)=>{const l=e.length===1?e[0]:i.reduce(((s,o,u)=>s+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[u+1]),e[0]);return new fy(l,e,Pf)},NS=(e,i)=>{if(If)e.adoptedStyleSheets=i.map((l=>l instanceof CSSStyleSheet?l:l.styleSheet));else for(const l of i){const s=document.createElement("style"),o=Nc.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=l.cssText,e.appendChild(s)}},Sb=If?e=>e:e=>e instanceof CSSStyleSheet?(i=>{let l="";for(const s of i.cssRules)l+=s.cssText;return TS(l)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:MS,defineProperty:kS,getOwnPropertyDescriptor:$S,getOwnPropertyNames:OS,getOwnPropertySymbols:jS,getPrototypeOf:RS}=Object,Qc=globalThis,Cb=Qc.trustedTypes,LS=Cb?Cb.emptyScript:"",DS=Qc.reactiveElementPolyfillSupport,Dr=(e,i)=>e,ps={toAttribute(e,i){switch(i){case Boolean:e=e?LS:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,i){let l=e;switch(i){case Boolean:l=e!==null;break;case Number:l=e===null?null:Number(e);break;case Object:case Array:try{l=JSON.parse(e)}catch{l=null}}return l}},Vf=(e,i)=>!MS(e,i),Eb={attribute:!0,type:String,converter:ps,reflect:!1,useDefault:!1,hasChanged:Vf};Symbol.metadata??=Symbol("metadata"),Qc.litPropertyMetadata??=new WeakMap;let rs=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,l=Eb){if(l.state&&(l.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((l=Object.create(l)).wrapped=!0),this.elementProperties.set(i,l),!l.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(i,s,l);o!==void 0&&kS(this.prototype,i,o)}}static getPropertyDescriptor(i,l,s){const{get:o,set:u}=$S(this.prototype,i)??{get(){return this[l]},set(d){this[l]=d}};return{get:o,set(d){const p=o?.call(this);u?.call(this,d),this.requestUpdate(i,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Eb}static _$Ei(){if(this.hasOwnProperty(Dr("elementProperties")))return;const i=RS(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Dr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dr("properties"))){const l=this.properties,s=[...OS(l),...jS(l)];for(const o of s)this.createProperty(o,l[o])}const i=this[Symbol.metadata];if(i!==null){const l=litPropertyMetadata.get(i);if(l!==void 0)for(const[s,o]of l)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[l,s]of this.elementProperties){const o=this._$Eu(l,s);o!==void 0&&this._$Eh.set(o,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const l=[];if(Array.isArray(i)){const s=new Set(i.flat(1/0).reverse());for(const o of s)l.unshift(Sb(o))}else i!==void 0&&l.push(Sb(i));return l}static _$Eu(i,l){const s=l.attribute;return s===!1?void 0:typeof s=="string"?s:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((i=>i(this)))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){const i=new Map,l=this.constructor.elementProperties;for(const s of l.keys())this.hasOwnProperty(s)&&(i.set(s,this[s]),delete this[s]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return NS(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((i=>i.hostConnected?.()))}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach((i=>i.hostDisconnected?.()))}attributeChangedCallback(i,l,s){this._$AK(i,s)}_$ET(i,l){const s=this.constructor.elementProperties.get(i),o=this.constructor._$Eu(i,s);if(o!==void 0&&s.reflect===!0){const u=(s.converter?.toAttribute!==void 0?s.converter:ps).toAttribute(l,s.type);this._$Em=i,u==null?this.removeAttribute(o):this.setAttribute(o,u),this._$Em=null}}_$AK(i,l){const s=this.constructor,o=s._$Eh.get(i);if(o!==void 0&&this._$Em!==o){const u=s.getPropertyOptions(o),d=typeof u.converter=="function"?{fromAttribute:u.converter}:u.converter?.fromAttribute!==void 0?u.converter:ps;this._$Em=o;const p=d.fromAttribute(l,u.type);this[o]=p??this._$Ej?.get(o)??p,this._$Em=null}}requestUpdate(i,l,s){if(i!==void 0){const o=this.constructor,u=this[i];if(s??=o.getPropertyOptions(i),!((s.hasChanged??Vf)(u,l)||s.useDefault&&s.reflect&&u===this._$Ej?.get(i)&&!this.hasAttribute(o._$Eu(i,s))))return;this.C(i,l,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,l,{useDefault:s,reflect:o,wrapped:u},d){s&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,d??l??this[i]),u!==!0||d!==void 0)||(this._$AL.has(i)||(this.hasUpdated||s||(l=void 0),this._$AL.set(i,l)),o===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,u]of this._$Ep)this[o]=u;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,u]of s){const{wrapped:d}=u,p=this[o];d!==!0||this._$AL.has(o)||p===void 0||this.C(o,void 0,u,p)}}let i=!1;const l=this._$AL;try{i=this.shouldUpdate(l),i?(this.willUpdate(l),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(l)):this._$EM()}catch(s){throw i=!1,this._$EM(),s}i&&this._$AE(l)}willUpdate(i){}_$AE(i){this._$EO?.forEach((l=>l.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach((l=>this._$ET(l,this[l]))),this._$EM()}updated(i){}firstUpdated(i){}};rs.elementStyles=[],rs.shadowRootOptions={mode:"open"},rs[Dr("elementProperties")]=new Map,rs[Dr("finalized")]=new Map,DS?.({ReactiveElement:rs}),(Qc.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qf=globalThis,zc=qf.trustedTypes,Ab=zc?zc.createPolicy("lit-html",{createHTML:e=>e}):void 0,py="$lit$",Nn=`lit$${Math.random().toFixed(9).slice(2)}$`,my="?"+Nn,zS=`<${my}>`,ml=document,Pr=()=>ml.createComment(""),Vr=e=>e===null||typeof e!="object"&&typeof e!="function",Ff=Array.isArray,BS=e=>Ff(e)||typeof e?.[Symbol.iterator]=="function",Ah=`[ 	
\f\r]`,wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tb=/-->/g,Nb=/>/g,sl=RegExp(`>|${Ah}(?:([^\\s"'>=/]+)(${Ah}*=${Ah}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mb=/'/g,kb=/"/g,gy=/^(?:script|style|textarea|title)$/i,HS=e=>(i,...l)=>({_$litType$:e,strings:i,values:l}),pe=HS(1),Ya=Symbol.for("lit-noChange"),ot=Symbol.for("lit-nothing"),$b=new WeakMap,dl=ml.createTreeWalker(ml,129);function vy(e,i){if(!Ff(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ab!==void 0?Ab.createHTML(i):i}const US=(e,i)=>{const l=e.length-1,s=[];let o,u=i===2?"<svg>":i===3?"<math>":"",d=wr;for(let p=0;p<l;p++){const g=e[p];let m,v,y=-1,_=0;for(;_<g.length&&(d.lastIndex=_,v=d.exec(g),v!==null);)_=d.lastIndex,d===wr?v[1]==="!--"?d=Tb:v[1]!==void 0?d=Nb:v[2]!==void 0?(gy.test(v[2])&&(o=RegExp("</"+v[2],"g")),d=sl):v[3]!==void 0&&(d=sl):d===sl?v[0]===">"?(d=o??wr,y=-1):v[1]===void 0?y=-2:(y=d.lastIndex-v[2].length,m=v[1],d=v[3]===void 0?sl:v[3]==='"'?kb:Mb):d===kb||d===Mb?d=sl:d===Tb||d===Nb?d=wr:(d=sl,o=void 0);const w=d===sl&&e[p+1].startsWith("/>")?" ":"";u+=d===wr?g+zS:y>=0?(s.push(m),g.slice(0,y)+py+g.slice(y)+Nn+w):g+Nn+(y===-2?p:w)}return[vy(e,u+(e[l]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),s]};let cf=class by{constructor({strings:i,_$litType$:l},s){let o;this.parts=[];let u=0,d=0;const p=i.length-1,g=this.parts,[m,v]=US(i,l);if(this.el=by.createElement(m,s),dl.currentNode=this.el.content,l===2||l===3){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(o=dl.nextNode())!==null&&g.length<p;){if(o.nodeType===1){if(o.hasAttributes())for(const y of o.getAttributeNames())if(y.endsWith(py)){const _=v[d++],w=o.getAttribute(y).split(Nn),C=/([.?@])?(.*)/.exec(_);g.push({type:1,index:u,name:C[2],strings:w,ctor:C[1]==="."?PS:C[1]==="?"?VS:C[1]==="@"?qS:Zc}),o.removeAttribute(y)}else y.startsWith(Nn)&&(g.push({type:6,index:u}),o.removeAttribute(y));if(gy.test(o.tagName)){const y=o.textContent.split(Nn),_=y.length-1;if(_>0){o.textContent=zc?zc.emptyScript:"";for(let w=0;w<_;w++)o.append(y[w],Pr()),dl.nextNode(),g.push({type:2,index:++u});o.append(y[_],Pr())}}}else if(o.nodeType===8)if(o.data===my)g.push({type:2,index:u});else{let y=-1;for(;(y=o.data.indexOf(Nn,y+1))!==-1;)g.push({type:7,index:u}),y+=Nn.length-1}u++}}static createElement(i,l){const s=ml.createElement("template");return s.innerHTML=i,s}};function ms(e,i,l=e,s){if(i===Ya)return i;let o=s!==void 0?l._$Co?.[s]:l._$Cl;const u=Vr(i)?void 0:i._$litDirective$;return o?.constructor!==u&&(o?._$AO?.(!1),u===void 0?o=void 0:(o=new u(e),o._$AT(e,l,s)),s!==void 0?(l._$Co??=[])[s]=o:l._$Cl=o),o!==void 0&&(i=ms(e,o._$AS(e,i.values),o,s)),i}let IS=class{constructor(i,l){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:l},parts:s}=this._$AD,o=(i?.creationScope??ml).importNode(l,!0);dl.currentNode=o;let u=dl.nextNode(),d=0,p=0,g=s[0];for(;g!==void 0;){if(d===g.index){let m;g.type===2?m=new Gf(u,u.nextSibling,this,i):g.type===1?m=new g.ctor(u,g.name,g.strings,this,i):g.type===6&&(m=new FS(u,this,i)),this._$AV.push(m),g=s[++p]}d!==g?.index&&(u=dl.nextNode(),d++)}return dl.currentNode=ml,o}p(i){let l=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(i,s,l),l+=s.strings.length-2):s._$AI(i[l])),l++}},Gf=class yy{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,l,s,o){this.type=2,this._$AH=ot,this._$AN=void 0,this._$AA=i,this._$AB=l,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&i?.nodeType===11&&(i=l.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,l=this){i=ms(this,i,l),Vr(i)?i===ot||i==null||i===""?(this._$AH!==ot&&this._$AR(),this._$AH=ot):i!==this._$AH&&i!==Ya&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):BS(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==ot&&Vr(this._$AH)?this._$AA.nextSibling.data=i:this.T(ml.createTextNode(i)),this._$AH=i}$(i){const{values:l,_$litType$:s}=i,o=typeof s=="number"?this._$AC(i):(s.el===void 0&&(s.el=cf.createElement(vy(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(l);else{const u=new IS(o,this),d=u.u(this.options);u.p(l),this.T(d),this._$AH=u}}_$AC(i){let l=$b.get(i.strings);return l===void 0&&$b.set(i.strings,l=new cf(i)),l}k(i){Ff(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let s,o=0;for(const u of i)o===l.length?l.push(s=new yy(this.O(Pr()),this.O(Pr()),this,this.options)):s=l[o],s._$AI(u),o++;o<l.length&&(this._$AR(s&&s._$AB.nextSibling,o),l.length=o)}_$AR(i=this._$AA.nextSibling,l){for(this._$AP?.(!1,!0,l);i!==this._$AB;){const s=i.nextSibling;i.remove(),i=s}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},Zc=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,l,s,o,u){this.type=1,this._$AH=ot,this._$AN=void 0,this.element=i,this.name=l,this._$AM=o,this.options=u,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ot}_$AI(i,l=this,s,o){const u=this.strings;let d=!1;if(u===void 0)i=ms(this,i,l,0),d=!Vr(i)||i!==this._$AH&&i!==Ya,d&&(this._$AH=i);else{const p=i;let g,m;for(i=u[0],g=0;g<u.length-1;g++)m=ms(this,p[s+g],l,g),m===Ya&&(m=this._$AH[g]),d||=!Vr(m)||m!==this._$AH[g],m===ot?i=ot:i!==ot&&(i+=(m??"")+u[g+1]),this._$AH[g]=m}d&&!o&&this.j(i)}j(i){i===ot?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},PS=class extends Zc{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===ot?void 0:i}},VS=class extends Zc{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==ot)}},qS=class extends Zc{constructor(i,l,s,o,u){super(i,l,s,o,u),this.type=5}_$AI(i,l=this){if((i=ms(this,i,l,0)??ot)===Ya)return;const s=this._$AH,o=i===ot&&s!==ot||i.capture!==s.capture||i.once!==s.once||i.passive!==s.passive,u=i!==ot&&(s===ot||o);o&&this.element.removeEventListener(this.name,this,s),u&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},FS=class{constructor(i,l,s){this.element=i,this.type=6,this._$AN=void 0,this._$AM=l,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(i){ms(this,i)}};const GS=qf.litHtmlPolyfillSupport;GS?.(cf,Gf),(qf.litHtmlVersions??=[]).push("3.3.1");const YS=(e,i,l)=>{const s=l?.renderBefore??i;let o=s._$litPart$;if(o===void 0){const u=l?.renderBefore??null;s._$litPart$=o=new Gf(i.insertBefore(Pr(),u),u,void 0,l??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yf=globalThis;let zr=class extends rs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){const l=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=YS(l,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ya}};zr._$litElement$=!0,zr.finalized=!0,Yf.litElementHydrateSupport?.({LitElement:zr});const WS=Yf.litElementPolyfillSupport;WS?.({LitElement:zr});(Yf.litElementVersions??=[]).push("4.2.1");var XS=Ge`
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
`;const uf=new Set,os=new Map;let ul,Wf="ltr",Xf="en";const _y=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(_y){const e=new MutationObserver(wy);Wf=document.documentElement.dir||"ltr",Xf=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function xy(...e){e.map(i=>{const l=i.$code.toLowerCase();os.has(l)?os.set(l,Object.assign(Object.assign({},os.get(l)),i)):os.set(l,i),ul||(ul=i)}),wy()}function wy(){_y&&(Wf=document.documentElement.dir||"ltr",Xf=document.documentElement.lang||navigator.language),[...uf.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let QS=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){uf.add(this.host)}hostDisconnected(){uf.delete(this.host)}dir(){return`${this.host.dir||Wf}`.toLowerCase()}lang(){return`${this.host.lang||Xf}`.toLowerCase()}getTranslationData(i){var l,s;const o=new Intl.Locale(i.replace(/_/g,"-")),u=o?.language.toLowerCase(),d=(s=(l=o?.region)===null||l===void 0?void 0:l.toLowerCase())!==null&&s!==void 0?s:"",p=os.get(`${u}-${d}`),g=os.get(u);return{locale:o,language:u,region:d,primary:p,secondary:g}}exists(i,l){var s;const{primary:o,secondary:u}=this.getTranslationData((s=l.lang)!==null&&s!==void 0?s:this.lang());return l=Object.assign({includeFallback:!1},l),!!(o&&o[i]||u&&u[i]||l.includeFallback&&ul&&ul[i])}term(i,...l){const{primary:s,secondary:o}=this.getTranslationData(this.lang());let u;if(s&&s[i])u=s[i];else if(o&&o[i])u=o[i];else if(ul&&ul[i])u=ul[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof u=="function"?u(...l):u}date(i,l){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),l).format(i)}number(i,l){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),l).format(i)}relativeTime(i,l,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(i,l)}};var Sy={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,i)=>`Go to slide ${e} of ${i}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};xy(Sy);var ZS=Sy,ia=class extends QS{};xy(ZS);var it=Ge`
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
 */const KS={attribute:!0,type:String,converter:ps,reflect:!1,hasChanged:Vf},JS=(e=KS,i,l)=>{const{kind:s,metadata:o}=l;let u=globalThis.litPropertyMetadata.get(o);if(u===void 0&&globalThis.litPropertyMetadata.set(o,u=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),u.set(l.name,e),s==="accessor"){const{name:d}=l;return{set(p){const g=i.get.call(this);i.set.call(this,p),this.requestUpdate(d,g,e)},init(p){return p!==void 0&&this.C(d,void 0,e,p),p}}}if(s==="setter"){const{name:d}=l;return function(p){const g=this[d];i.call(this,p),this.requestUpdate(d,g,e)}}throw Error("Unsupported decorator location: "+s)};function $(e){return(i,l)=>typeof l=="object"?JS(e,i,l):((s,o,u)=>{const d=o.hasOwnProperty(u);return o.constructor.createProperty(u,s),d?Object.getOwnPropertyDescriptor(o,u):void 0})(e,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ke(e){return $({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Cy(e){return(i,l)=>{const s=typeof i=="function"?i:i[l];Object.assign(s,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e3=(e,i,l)=>(l.configurable=!0,l.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(e,i,l),l);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xe(e,i){return(l,s,o)=>{const u=d=>d.renderRoot?.querySelector(e)??null;return e3(l,s,{get(){return u(this)}})}}var Mc,Ue=class extends zr{constructor(){super(),Dw(this,Mc,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,i])=>{this.constructor.define(e,i)})}emit(e,i){const l=new CustomEvent(e,Ki({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(l),l}static define(e,i=this,l={}){const s=customElements.get(e);if(!s){try{customElements.define(e,i,l)}catch{customElements.define(e,class extends i{},l)}return}let o=" (unknown version)",u=o;"version"in i&&i.version&&(o=" v"+i.version),"version"in s&&s.version&&(u=" v"+s.version),!(o&&u&&o===u)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${u} has already been registered.`)}attributeChangedCallback(e,i,l){Lw(this,Mc)||(this.constructor.elementProperties.forEach((s,o)=>{s.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),zw(this,Mc,!0)),super.attributeChangedCallback(e,i,l)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((i,l)=>{e.has(l)&&this[l]==null&&(this[l]=i)})}};Mc=new WeakMap;Ue.version="2.20.1";Ue.dependencies={};S([$()],Ue.prototype,"dir",2);S([$()],Ue.prototype,"lang",2);var Yr=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this)}render(){return pe`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Yr.styles=[it,XS];var Sr=new WeakMap,Cr=new WeakMap,Er=new WeakMap,Th=new WeakSet,vc=new WeakMap,bs=class{constructor(e,i){this.handleFormData=l=>{const s=this.options.disabled(this.host),o=this.options.name(this.host),u=this.options.value(this.host),d=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!d&&typeof o=="string"&&o.length>0&&typeof u<"u"&&(Array.isArray(u)?u.forEach(p=>{l.formData.append(o,p.toString())}):l.formData.append(o,u.toString()))},this.handleFormSubmit=l=>{var s;const o=this.options.disabled(this.host),u=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=Sr.get(this.form))==null||s.forEach(d=>{this.setUserInteracted(d,!0)})),this.form&&!this.form.noValidate&&!o&&!u(this.host)&&(l.preventDefault(),l.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),vc.set(this.host,[])},this.handleInteraction=l=>{const s=vc.get(this.host);s.includes(l.type)||s.push(l.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const l=this.form.querySelectorAll("*");for(const s of l)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const l=this.form.querySelectorAll("*");for(const s of l)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Ki({form:l=>{const s=l.form;if(s){const u=l.getRootNode().querySelector(`#${s}`);if(u)return u}return l.closest("form")},name:l=>l.name,value:l=>l.value,defaultValue:l=>l.defaultValue,disabled:l=>{var s;return(s=l.disabled)!=null?s:!1},reportValidity:l=>typeof l.reportValidity=="function"?l.reportValidity():!0,checkValidity:l=>typeof l.checkValidity=="function"?l.checkValidity():!0,setValue:(l,s)=>l.value=s,assumeInteractionOn:["sl-input"]},i)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),vc.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),vc.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Sr.has(this.form)?Sr.get(this.form).add(this.host):Sr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Cr.has(this.form)||(Cr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Er.has(this.form)||(Er.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Sr.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Cr.has(this.form)&&(this.form.reportValidity=Cr.get(this.form),Cr.delete(this.form)),Er.has(this.form)&&(this.form.checkValidity=Er.get(this.form),Er.delete(this.form)),this.form=void 0))}setUserInteracted(e,i){i?Th.add(e):Th.delete(e),e.requestUpdate()}doAction(e,i){if(this.form){const l=document.createElement("button");l.type=e,l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.clipPath="inset(50%)",l.style.overflow="hidden",l.style.whiteSpace="nowrap",i&&(l.name=i.name,l.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{i.hasAttribute(s)&&l.setAttribute(s,i.getAttribute(s))})),this.form.append(l),l.click(),l.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const i=this.host,l=!!Th.has(i),s=!!i.required;i.toggleAttribute("data-required",s),i.toggleAttribute("data-optional",!s),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&l),i.toggleAttribute("data-user-valid",e&&l)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const i=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||i.preventDefault(),this.host.dispatchEvent(i)||e?.preventDefault()}},Kc=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),t3=Object.freeze(Gr(Ki({},Kc),{valid:!1,valueMissing:!0})),a3=Object.freeze(Gr(Ki({},Kc),{valid:!1,customError:!0})),Ey=Ge`
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
`,oi=class{constructor(e,...i){this.slotNames=[],this.handleSlotChange=l=>{const s=l.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=i}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const i=e;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function i3(e){if(!e)return"";const i=e.assignedNodes({flatten:!0});let l="";return[...i].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(l+=s.textContent)}),l}var n3={name:"default",resolver:e=>Mw(`assets/icons/${e}.svg`)},l3=n3,Ob={caret:`
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
  `},s3={name:"system",resolver:e=>e in Ob?`data:image/svg+xml,${encodeURIComponent(Ob[e])}`:""},r3=s3,o3=[l3,r3],df=[];function c3(e){df.push(e)}function u3(e){df=df.filter(i=>i!==e)}function jb(e){return o3.find(i=>i.name===e)}var d3=Ge`
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
`;function Re(e,i){const l=Ki({waitUntilFirstUpdate:!1},i);return(s,o)=>{const{update:u}=s,d=Array.isArray(e)?e:[e];s.update=function(p){d.forEach(g=>{const m=g;if(p.has(m)){const v=p.get(m),y=this[m];v!==y&&(!l.waitUntilFirstUpdate||this.hasUpdated)&&this[o](v,y)}}),u.call(this,p)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h3=(e,i)=>e?._$litType$!==void 0,Ay=e=>e.strings===void 0,f3={},p3=(e,i=f3)=>e._$AH=i;var Ar=Symbol(),bc=Symbol(),Nh,Mh=new Map,Ut=class extends Ue{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,i){var l;let s;if(i?.spriteSheet)return this.svg=pe`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?Ar:bc}catch{return bc}try{const o=document.createElement("div");o.innerHTML=await s.text();const u=o.firstElementChild;if(((l=u?.tagName)==null?void 0:l.toLowerCase())!=="svg")return Ar;Nh||(Nh=new DOMParser);const p=Nh.parseFromString(u.outerHTML,"text/html").body.querySelector("svg");return p?(p.part.add("svg"),document.adoptNode(p)):Ar}catch{return Ar}}connectedCallback(){super.connectedCallback(),c3(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),u3(this)}getIconSource(){const e=jb(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:i,fromLibrary:l}=this.getIconSource(),s=l?jb(this.library):void 0;if(!i){this.svg=null;return}let o=Mh.get(i);if(o||(o=this.resolveIcon(i,s),Mh.set(i,o)),!this.initialRender)return;const u=await o;if(u===bc&&Mh.delete(i),i===this.getIconSource().url){if(h3(u)){if(this.svg=u,s){await this.updateComplete;const d=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&d&&s.mutator(d)}return}switch(u){case bc:case Ar:this.svg=null,this.emit("sl-error");break;default:this.svg=u.cloneNode(!0),(e=s?.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Ut.styles=[it,d3];S([Ke()],Ut.prototype,"svg",2);S([$({reflect:!0})],Ut.prototype,"name",2);S([$()],Ut.prototype,"src",2);S([$()],Ut.prototype,"label",2);S([$({reflect:!0})],Ut.prototype,"library",2);S([Re("label")],Ut.prototype,"handleLabelChange",1);S([Re(["name","src","library"])],Ut.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Jc=e=>(...i)=>({_$litDirective$:e,values:i});let eu=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,l,s){this._$Ct=i,this._$AM=l,this._$Ci=s}_$AS(i,l){return this.update(i,l)}update(i,l){return this.render(...l)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=Jc(class extends eu{constructor(e){if(super(e),e.type!==Wi.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((i=>e[i])).join(" ")+" "}update(e,[i]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((s=>s!==""))));for(const s in i)i[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(i)}const l=e.element.classList;for(const s of this.st)s in i||(l.remove(s),this.st.delete(s));for(const s in i){const o=!!i[s];o===this.st.has(s)||this.nt?.has(s)||(o?(l.add(s),this.st.add(s)):(l.remove(s),this.st.delete(s)))}return Ya}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ty=Symbol.for(""),m3=e=>{if(e?.r===Ty)return e?._$litStatic$},Bc=(e,...i)=>({_$litStatic$:i.reduce(((l,s,o)=>l+(u=>{if(u._$litStatic$!==void 0)return u._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${u}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[o+1]),e[0]),r:Ty}),Rb=new Map,g3=e=>(i,...l)=>{const s=l.length;let o,u;const d=[],p=[];let g,m=0,v=!1;for(;m<s;){for(g=i[m];m<s&&(u=l[m],(o=m3(u))!==void 0);)g+=o+i[++m],v=!0;m!==s&&p.push(u),d.push(g),m++}if(m===s&&d.push(i[s]),v){const y=d.join("$$lit$$");(i=Rb.get(y))===void 0&&(d.raw=d,Rb.set(y,i=d)),l=p}return e(i,...l)},Br=g3(pe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=e=>e??ot;var Fe=class extends Ue{constructor(){super(...arguments),this.formControlController=new bs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new oi(this,"[default]","prefix","suffix"),this.localize=new ia(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Kc}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),i=e?Bc`a`:Bc`button`;return Br`
      <${i}
        part="base"
        class=${Ze({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${be(e?void 0:this.disabled)}
        type=${be(e?void 0:this.type)}
        title=${this.title}
        name=${be(e?void 0:this.name)}
        value=${be(e?void 0:this.value)}
        href=${be(e&&!this.disabled?this.href:void 0)}
        target=${be(e?this.target:void 0)}
        download=${be(e?this.download:void 0)}
        rel=${be(e?this.rel:void 0)}
        role=${be(e?void 0:"button")}
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
        ${this.caret?Br` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Br`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${i}>
    `}};Fe.styles=[it,Ey];Fe.dependencies={"sl-icon":Ut,"sl-spinner":Yr};S([xe(".button")],Fe.prototype,"button",2);S([Ke()],Fe.prototype,"hasFocus",2);S([Ke()],Fe.prototype,"invalid",2);S([$()],Fe.prototype,"title",2);S([$({reflect:!0})],Fe.prototype,"variant",2);S([$({reflect:!0})],Fe.prototype,"size",2);S([$({type:Boolean,reflect:!0})],Fe.prototype,"caret",2);S([$({type:Boolean,reflect:!0})],Fe.prototype,"disabled",2);S([$({type:Boolean,reflect:!0})],Fe.prototype,"loading",2);S([$({type:Boolean,reflect:!0})],Fe.prototype,"outline",2);S([$({type:Boolean,reflect:!0})],Fe.prototype,"pill",2);S([$({type:Boolean,reflect:!0})],Fe.prototype,"circle",2);S([$()],Fe.prototype,"type",2);S([$()],Fe.prototype,"name",2);S([$()],Fe.prototype,"value",2);S([$()],Fe.prototype,"href",2);S([$()],Fe.prototype,"target",2);S([$()],Fe.prototype,"rel",2);S([$()],Fe.prototype,"download",2);S([$()],Fe.prototype,"form",2);S([$({attribute:"formaction"})],Fe.prototype,"formAction",2);S([$({attribute:"formenctype"})],Fe.prototype,"formEnctype",2);S([$({attribute:"formmethod"})],Fe.prototype,"formMethod",2);S([$({attribute:"formnovalidate",type:Boolean})],Fe.prototype,"formNoValidate",2);S([$({attribute:"formtarget"})],Fe.prototype,"formTarget",2);S([Re("disabled",{waitUntilFirstUpdate:!0})],Fe.prototype,"handleDisabledChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v3=new Set(["children","localName","ref","style","className"]),Lb=new WeakMap,Db=(e,i,l,s,o)=>{const u=o?.[i];u===void 0?(e[i]=l,l==null&&i in HTMLElement.prototype&&e.removeAttribute(i)):l!==s&&((d,p,g)=>{let m=Lb.get(d);m===void 0&&Lb.set(d,m=new Map);let v=m.get(p);g!==void 0?v===void 0?(m.set(p,v={handleEvent:g}),d.addEventListener(p,v)):v.handleEvent=g:v!==void 0&&(m.delete(p),d.removeEventListener(p,v))})(e,u,l)},ct=({react:e,tagName:i,elementClass:l,events:s,displayName:o})=>{const u=new Set(Object.keys(s??{})),d=e.forwardRef(((p,g)=>{const m=e.useRef(new Map),v=e.useRef(null),y={},_={};for(const[w,C]of Object.entries(p))v3.has(w)?y[w==="className"?"class":w]=C:u.has(w)||w in l.prototype?_[w]=C:y[w]=C;return e.useLayoutEffect((()=>{if(v.current===null)return;const w=new Map;for(const C in _)Db(v.current,C,p[C],m.current.get(C),s),m.current.delete(C),w.set(C,p[C]);for(const[C,N]of m.current)Db(v.current,C,void 0,N,s);m.current=w})),e.useLayoutEffect((()=>{v.current?.removeAttribute("defer-hydration")}),[]),y.suppressHydrationWarning=!0,e.createElement(i,{...y,ref:e.useCallback((w=>{v.current=w,typeof g=="function"?g(w):g!==null&&(g.current=w)}),[g])})}));return d.displayName=o??l.name,d};var b3="sl-button";Fe.define("sl-button");var y3=ct({tagName:b3,elementClass:Fe,react:rt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Oe=y3,_3=class extends j0{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#a=0}#e;#t;#a;build(e,i,l){const s=new vx({client:e,mutationCache:this,mutationId:++this.#a,options:e.defaultMutationOptions(i),state:l});return this.add(s),s}add(e){this.#e.add(e);const i=yc(e);if(typeof i=="string"){const l=this.#t.get(i);l?l.push(e):this.#t.set(i,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const i=yc(e);if(typeof i=="string"){const l=this.#t.get(i);if(l)if(l.length>1){const s=l.indexOf(e);s!==-1&&l.splice(s,1)}else l[0]===e&&this.#t.delete(i)}}this.notify({type:"removed",mutation:e})}canRun(e){const i=yc(e);if(typeof i=="string"){const s=this.#t.get(i)?.find(o=>o.state.status==="pending");return!s||s===e}else return!0}runNext(e){const i=yc(e);return typeof i=="string"?this.#t.get(i)?.find(s=>s!==e&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Ma.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const i={exact:!0,...e};return this.getAll().find(l=>Xv(i,l))}findAll(e={}){return this.getAll().filter(i=>Xv(e,i))}notify(e){Ma.batch(()=>{this.listeners.forEach(i=>{i(e)})})}resumePausedMutations(){const e=this.getAll().filter(i=>i.state.isPaused);return Ma.batch(()=>Promise.all(e.map(i=>i.continue().catch(Yi))))}};function yc(e){return e.options.scope?.id}var x3=class extends j0{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,i,l){const s=i.queryKey,o=i.queryHash??R0(s,i);let u=this.get(o);return u||(u=new bx({client:e,queryKey:s,queryHash:o,options:e.defaultQueryOptions(i),state:l,defaultOptions:e.getQueryDefaults(s)}),this.add(u)),u}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const i=this.#e.get(e.queryHash);i&&(e.destroy(),i===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Ma.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const i={exact:!0,...e};return this.getAll().find(l=>Qv(i,l))}findAll(e={}){const i=this.getAll();return Object.keys(e).length>0?i.filter(l=>Qv(e,l)):i}notify(e){Ma.batch(()=>{this.listeners.forEach(i=>{i(e)})})}onFocus(){Ma.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Ma.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},w3=class{#e;#t;#a;#n;#l;#i;#s;#r;constructor(e={}){this.#e=e.queryCache||new x3,this.#t=e.mutationCache||new _3,this.#a=e.defaultOptions||{},this.#n=new Map,this.#l=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#s=yx.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#r=Zv.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#s?.(),this.#s=void 0,this.#r?.(),this.#r=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const i=this.defaultQueryOptions({queryKey:e});return this.#e.get(i.queryHash)?.state.data}ensureQueryData(e){const i=this.defaultQueryOptions(e),l=this.#e.build(this,i),s=l.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&l.isStaleByTime(Kv(i.staleTime,l))&&this.prefetchQuery(i),Promise.resolve(s))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:i,state:l})=>{const s=l.data;return[i,s]})}setQueryData(e,i,l){const s=this.defaultQueryOptions({queryKey:e}),u=this.#e.get(s.queryHash)?.state.data,d=_x(i,u);if(d!==void 0)return this.#e.build(this,s).setData(d,{...l,manual:!0})}setQueriesData(e,i,l){return Ma.batch(()=>this.#e.findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,i,l)]))}getQueryState(e){const i=this.defaultQueryOptions({queryKey:e});return this.#e.get(i.queryHash)?.state}removeQueries(e){const i=this.#e;Ma.batch(()=>{i.findAll(e).forEach(l=>{i.remove(l)})})}resetQueries(e,i){const l=this.#e;return Ma.batch(()=>(l.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},i)))}cancelQueries(e,i={}){const l={revert:!0,...i},s=Ma.batch(()=>this.#e.findAll(e).map(o=>o.cancel(l)));return Promise.all(s).then(Yi).catch(Yi)}invalidateQueries(e,i={}){return Ma.batch(()=>(this.#e.findAll(e).forEach(l=>{l.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},i)))}refetchQueries(e,i={}){const l={...i,cancelRefetch:i.cancelRefetch??!0},s=Ma.batch(()=>this.#e.findAll(e).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let u=o.fetch(void 0,l);return l.throwOnError||(u=u.catch(Yi)),o.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(s).then(Yi)}fetchQuery(e){const i=this.defaultQueryOptions(e);i.retry===void 0&&(i.retry=!1);const l=this.#e.build(this,i);return l.isStaleByTime(Kv(i.staleTime,l))?l.fetch(i):Promise.resolve(l.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Yi).catch(Yi)}fetchInfiniteQuery(e){return e.behavior=Jv(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Yi).catch(Yi)}ensureInfiniteQueryData(e){return e.behavior=Jv(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Zv.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(e){this.#a=e}setQueryDefaults(e,i){this.#n.set(eb(e),{queryKey:e,defaultOptions:i})}getQueryDefaults(e){const i=[...this.#n.values()],l={};return i.forEach(s=>{tb(e,s.queryKey)&&Object.assign(l,s.defaultOptions)}),l}setMutationDefaults(e,i){this.#l.set(eb(e),{mutationKey:e,defaultOptions:i})}getMutationDefaults(e){const i=[...this.#l.values()],l={};return i.forEach(s=>{tb(e,s.mutationKey)&&Object.assign(l,s.defaultOptions)}),l}defaultQueryOptions(e){if(e._defaulted)return e;const i={...this.#a.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return i.queryHash||(i.queryHash=R0(i.queryKey,i)),i.refetchOnReconnect===void 0&&(i.refetchOnReconnect=i.networkMode!=="always"),i.throwOnError===void 0&&(i.throwOnError=!!i.suspense),!i.networkMode&&i.persister&&(i.networkMode="offlineFirst"),i.queryFn===xx&&(i.enabled=!1),i}defaultMutationOptions(e){return e?._defaulted?e:{...this.#a.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}};function bi(e,i){var l=i&&i.cache?i.cache:M3,s=i&&i.serializer?i.serializer:T3,o=i&&i.strategy?i.strategy:E3;return o(e,{cache:l,serializer:s})}function S3(e){return e==null||typeof e=="number"||typeof e=="boolean"}function C3(e,i,l,s){var o=S3(s)?s:l(s),u=i.get(o);return typeof u>"u"&&(u=e.call(this,s),i.set(o,u)),u}function Ny(e,i,l){var s=Array.prototype.slice.call(arguments,3),o=l(s),u=i.get(o);return typeof u>"u"&&(u=e.apply(this,s),i.set(o,u)),u}function My(e,i,l,s,o){return l.bind(i,e,s,o)}function E3(e,i){var l=e.length===1?C3:Ny;return My(e,this,l,i.cache.create(),i.serializer)}function A3(e,i){return My(e,this,Ny,i.cache.create(),i.serializer)}var T3=function(){return JSON.stringify(arguments)},N3=(function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,l){this.cache[i]=l},e})(),M3={create:function(){return new N3}},yi={variadic:A3},$e;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})($e||($e={}));var st;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(st||(st={}));var gs;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(gs||(gs={}));function zb(e){return e.type===st.literal}function k3(e){return e.type===st.argument}function ky(e){return e.type===st.number}function $y(e){return e.type===st.date}function Oy(e){return e.type===st.time}function jy(e){return e.type===st.select}function Ry(e){return e.type===st.plural}function $3(e){return e.type===st.pound}function Ly(e){return e.type===st.tag}function Dy(e){return!!(e&&typeof e=="object"&&e.type===gs.number)}function hf(e){return!!(e&&typeof e=="object"&&e.type===gs.dateTime)}var zy=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,O3=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function j3(e){var i={};return e.replace(O3,function(l){var s=l.length;switch(l[0]){case"G":i.era=s===4?"long":s===5?"narrow":"short";break;case"y":i.year=s===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][s-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][s-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=s===4?"long":s===5?"narrow":"short";break;case"e":if(s<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][s-4];break;case"c":if(s<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][s-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][s-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][s-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][s-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][s-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][s-1];break;case"s":i.second=["numeric","2-digit"][s-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=s<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var R3=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function L3(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(R3).filter(function(_){return _.length>0}),l=[],s=0,o=i;s<o.length;s++){var u=o[s],d=u.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var p=d[0],g=d.slice(1),m=0,v=g;m<v.length;m++){var y=v[m];if(y.length===0)throw new Error("Invalid number skeleton")}l.push({stem:p,options:g})}return l}function D3(e){return e.replace(/^(.*?)-/,"")}var Bb=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,By=/^(@+)?(\+|#+)?[rs]?$/g,z3=/(\*)(0+)|(#+)(0+)|(0+)/g,Hy=/^(0+)$/;function Hb(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(By,function(l,s,o){return typeof o!="string"?(i.minimumSignificantDigits=s.length,i.maximumSignificantDigits=s.length):o==="+"?i.minimumSignificantDigits=s.length:s[0]==="#"?i.maximumSignificantDigits=s.length:(i.minimumSignificantDigits=s.length,i.maximumSignificantDigits=s.length+(typeof o=="string"?o.length:0)),""}),i}function Uy(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function B3(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var l=e.slice(0,2);if(l==="+!"?(i.signDisplay="always",e=e.slice(2)):l==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Hy.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Ub(e){var i={},l=Uy(e);return l||i}function H3(e){for(var i={},l=0,s=e;l<s.length;l++){var o=s[l];switch(o.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=o.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=D3(o.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=he(he(he({},i),{notation:"scientific"}),o.options.reduce(function(g,m){return he(he({},g),Ub(m))},{}));continue;case"engineering":i=he(he(he({},i),{notation:"engineering"}),o.options.reduce(function(g,m){return he(he({},g),Ub(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(o.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace(z3,function(g,m,v,y,_,w){if(m)i.minimumIntegerDigits=v.length;else{if(y&&_)throw new Error("We currently do not support maximum integer digits");if(w)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Hy.test(o.stem)){i.minimumIntegerDigits=o.stem.length;continue}if(Bb.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(Bb,function(g,m,v,y,_,w){return v==="*"?i.minimumFractionDigits=m.length:y&&y[0]==="#"?i.maximumFractionDigits=y.length:_&&w?(i.minimumFractionDigits=_.length,i.maximumFractionDigits=_.length+w.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var u=o.options[0];u==="w"?i=he(he({},i),{trailingZeroDisplay:"stripIfInteger"}):u&&(i=he(he({},i),Hb(u)));continue}if(By.test(o.stem)){i=he(he({},i),Hb(o.stem));continue}var d=Uy(o.stem);d&&(i=he(he({},i),d));var p=B3(o.stem);p&&(i=he(he({},i),p))}return i}var _c={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function U3(e,i){for(var l="",s=0;s<e.length;s++){var o=e.charAt(s);if(o==="j"){for(var u=0;s+1<e.length&&e.charAt(s+1)===o;)u++,s++;var d=1+(u&1),p=u<2?1:3+(u>>1),g="a",m=I3(i);for((m=="H"||m=="k")&&(p=0);p-- >0;)l+=g;for(;d-- >0;)l=m+l}else o==="J"?l+="H":l+=o}return l}function I3(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var l=e.language,s;l!=="root"&&(s=e.maximize().region);var o=_c[s||""]||_c[l||""]||_c["".concat(l,"-001")]||_c["001"];return o[0]}var kh,P3=new RegExp("^".concat(zy.source,"*")),V3=new RegExp("".concat(zy.source,"*$"));function De(e,i){return{start:e,end:i}}var q3=!!String.prototype.startsWith&&"_a".startsWith("a",1),F3=!!String.fromCodePoint,G3=!!Object.fromEntries,Y3=!!String.prototype.codePointAt,W3=!!String.prototype.trimStart,X3=!!String.prototype.trimEnd,Q3=!!Number.isSafeInteger,Z3=Q3?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ff=!0;try{var K3=Py("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ff=((kh=K3.exec("a"))===null||kh===void 0?void 0:kh[0])==="a"}catch{ff=!1}var Ib=q3?function(i,l,s){return i.startsWith(l,s)}:function(i,l,s){return i.slice(s,s+l.length)===l},pf=F3?String.fromCodePoint:function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];for(var s="",o=i.length,u=0,d;o>u;){if(d=i[u++],d>1114111)throw RangeError(d+" is not a valid code point");s+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return s},Pb=G3?Object.fromEntries:function(i){for(var l={},s=0,o=i;s<o.length;s++){var u=o[s],d=u[0],p=u[1];l[d]=p}return l},Iy=Y3?function(i,l){return i.codePointAt(l)}:function(i,l){var s=i.length;if(!(l<0||l>=s)){var o=i.charCodeAt(l),u;return o<55296||o>56319||l+1===s||(u=i.charCodeAt(l+1))<56320||u>57343?o:(o-55296<<10)+(u-56320)+65536}},J3=W3?function(i){return i.trimStart()}:function(i){return i.replace(P3,"")},e4=X3?function(i){return i.trimEnd()}:function(i){return i.replace(V3,"")};function Py(e,i){return new RegExp(e,i)}var mf;if(ff){var Vb=Py("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");mf=function(i,l){var s;Vb.lastIndex=l;var o=Vb.exec(i);return(s=o[1])!==null&&s!==void 0?s:""}}else mf=function(i,l){for(var s=[];;){var o=Iy(i,l);if(o===void 0||Vy(o)||n4(o))break;s.push(o),l+=o>=65536?2:1}return pf.apply(void 0,s)};var t4=(function(){function e(i,l){l===void 0&&(l={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!l.ignoreTag,this.locale=l.locale,this.requiresOtherClause=!!l.requiresOtherClause,this.shouldParseSkeletons=!!l.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,l,s){for(var o=[];!this.isEOF();){var u=this.char();if(u===123){var d=this.parseArgument(i,s);if(d.err)return d;o.push(d.val)}else{if(u===125&&i>0)break;if(u===35&&(l==="plural"||l==="selectordinal")){var p=this.clonePosition();this.bump(),o.push({type:st.pound,location:De(p,this.clonePosition())})}else if(u===60&&!this.ignoreTag&&this.peek()===47){if(s)break;return this.error($e.UNMATCHED_CLOSING_TAG,De(this.clonePosition(),this.clonePosition()))}else if(u===60&&!this.ignoreTag&&gf(this.peek()||0)){var d=this.parseTag(i,l);if(d.err)return d;o.push(d.val)}else{var d=this.parseLiteral(i,l);if(d.err)return d;o.push(d.val)}}}return{val:o,err:null}},e.prototype.parseTag=function(i,l){var s=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:st.literal,value:"<".concat(o,"/>"),location:De(s,this.clonePosition())},err:null};if(this.bumpIf(">")){var u=this.parseMessage(i+1,l,!0);if(u.err)return u;var d=u.val,p=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!gf(this.char()))return this.error($e.INVALID_TAG,De(p,this.clonePosition()));var g=this.clonePosition(),m=this.parseTagName();return o!==m?this.error($e.UNMATCHED_CLOSING_TAG,De(g,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:st.tag,value:o,children:d,location:De(s,this.clonePosition())},err:null}:this.error($e.INVALID_TAG,De(p,this.clonePosition())))}else return this.error($e.UNCLOSED_TAG,De(s,this.clonePosition()))}else return this.error($e.INVALID_TAG,De(s,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&i4(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,l){for(var s=this.clonePosition(),o="";;){var u=this.tryParseQuote(l);if(u){o+=u;continue}var d=this.tryParseUnquoted(i,l);if(d){o+=d;continue}var p=this.tryParseLeftAngleBracket();if(p){o+=p;continue}break}var g=De(s,this.clonePosition());return{val:{type:st.literal,value:o,location:g},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!a4(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var l=[this.char()];for(this.bump();!this.isEOF();){var s=this.char();if(s===39)if(this.peek()===39)l.push(39),this.bump();else{this.bump();break}else l.push(s);this.bump()}return pf.apply(void 0,l)},e.prototype.tryParseUnquoted=function(i,l){if(this.isEOF())return null;var s=this.char();return s===60||s===123||s===35&&(l==="plural"||l==="selectordinal")||s===125&&i>0?null:(this.bump(),pf(s))},e.prototype.parseArgument=function(i,l){var s=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,De(s,this.clonePosition()));if(this.char()===125)return this.bump(),this.error($e.EMPTY_ARGUMENT,De(s,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error($e.MALFORMED_ARGUMENT,De(s,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,De(s,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:st.argument,value:o,location:De(s,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,De(s,this.clonePosition())):this.parseArgumentOptions(i,l,o,s);default:return this.error($e.MALFORMED_ARGUMENT,De(s,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),l=this.offset(),s=mf(this.message,l),o=l+s.length;this.bumpTo(o);var u=this.clonePosition(),d=De(i,u);return{value:s,location:d}},e.prototype.parseArgumentOptions=function(i,l,s,o){var u,d=this.clonePosition(),p=this.parseIdentifierIfPossible().value,g=this.clonePosition();switch(p){case"":return this.error($e.EXPECT_ARGUMENT_TYPE,De(d,g));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var v=this.clonePosition(),y=this.parseSimpleArgStyleIfPossible();if(y.err)return y;var _=e4(y.val);if(_.length===0)return this.error($e.EXPECT_ARGUMENT_STYLE,De(this.clonePosition(),this.clonePosition()));var w=De(v,this.clonePosition());m={style:_,styleLocation:w}}var C=this.tryParseArgumentClose(o);if(C.err)return C;var N=De(o,this.clonePosition());if(m&&Ib(m?.style,"::",0)){var E=J3(m.style.slice(2));if(p==="number"){var y=this.parseNumberSkeletonFromString(E,m.styleLocation);return y.err?y:{val:{type:st.number,value:s,location:N,style:y.val},err:null}}else{if(E.length===0)return this.error($e.EXPECT_DATE_TIME_SKELETON,N);var T=E;this.locale&&(T=U3(E,this.locale));var _={type:gs.dateTime,pattern:T,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?j3(T):{}},R=p==="date"?st.date:st.time;return{val:{type:R,value:s,location:N,style:_},err:null}}}return{val:{type:p==="number"?st.number:p==="date"?st.date:st.time,value:s,location:N,style:(u=m?.style)!==null&&u!==void 0?u:null},err:null}}case"plural":case"selectordinal":case"select":{var B=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error($e.EXPECT_SELECT_ARGUMENT_OPTIONS,De(B,he({},B)));this.bumpSpace();var z=this.parseIdentifierIfPossible(),k=0;if(p!=="select"&&z.value==="offset"){if(!this.bumpIf(":"))return this.error($e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,De(this.clonePosition(),this.clonePosition()));this.bumpSpace();var y=this.tryParseDecimalInteger($e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,$e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(y.err)return y;this.bumpSpace(),z=this.parseIdentifierIfPossible(),k=y.val}var q=this.tryParsePluralOrSelectOptions(i,p,l,z);if(q.err)return q;var C=this.tryParseArgumentClose(o);if(C.err)return C;var X=De(o,this.clonePosition());return p==="select"?{val:{type:st.select,value:s,options:Pb(q.val),location:X},err:null}:{val:{type:st.plural,value:s,options:Pb(q.val),offset:k,pluralType:p==="plural"?"cardinal":"ordinal",location:X},err:null}}default:return this.error($e.INVALID_ARGUMENT_TYPE,De(d,g))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE,De(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,l=this.clonePosition();!this.isEOF();){var s=this.char();switch(s){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error($e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,De(o,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(l.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(l.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,l){var s=[];try{s=L3(i)}catch{return this.error($e.INVALID_NUMBER_SKELETON,l)}return{val:{type:gs.number,tokens:s,location:l,parsedOptions:this.shouldParseSkeletons?H3(s):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,l,s,o){for(var u,d=!1,p=[],g=new Set,m=o.value,v=o.location;;){if(m.length===0){var y=this.clonePosition();if(l!=="select"&&this.bumpIf("=")){var _=this.tryParseDecimalInteger($e.EXPECT_PLURAL_ARGUMENT_SELECTOR,$e.INVALID_PLURAL_ARGUMENT_SELECTOR);if(_.err)return _;v=De(y,this.clonePosition()),m=this.message.slice(y.offset,this.offset())}else break}if(g.has(m))return this.error(l==="select"?$e.DUPLICATE_SELECT_ARGUMENT_SELECTOR:$e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,v);m==="other"&&(d=!0),this.bumpSpace();var w=this.clonePosition();if(!this.bumpIf("{"))return this.error(l==="select"?$e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:$e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,De(this.clonePosition(),this.clonePosition()));var C=this.parseMessage(i+1,l,s);if(C.err)return C;var N=this.tryParseArgumentClose(w);if(N.err)return N;p.push([m,{value:C.val,location:De(w,this.clonePosition())}]),g.add(m),this.bumpSpace(),u=this.parseIdentifierIfPossible(),m=u.value,v=u.location}return p.length===0?this.error(l==="select"?$e.EXPECT_SELECT_ARGUMENT_SELECTOR:$e.EXPECT_PLURAL_ARGUMENT_SELECTOR,De(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error($e.MISSING_OTHER_CLAUSE,De(this.clonePosition(),this.clonePosition())):{val:p,err:null}},e.prototype.tryParseDecimalInteger=function(i,l){var s=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(s=-1);for(var u=!1,d=0;!this.isEOF();){var p=this.char();if(p>=48&&p<=57)u=!0,d=d*10+(p-48),this.bump();else break}var g=De(o,this.clonePosition());return u?(d*=s,Z3(d)?{val:d,err:null}:this.error(l,g)):this.error(i,g)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var l=Iy(this.message,i);if(l===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return l},e.prototype.error=function(i,l){return{val:null,err:{kind:i,message:this.message,location:l}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Ib(this.message,i,this.offset())){for(var l=0;l<i.length;l++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var l=this.offset(),s=this.message.indexOf(i,l);return s>=0?(this.bumpTo(s),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var l=this.offset();if(l===i)break;if(l>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Vy(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),l=this.offset(),s=this.message.charCodeAt(l+(i>=65536?2:1));return s??null},e})();function gf(e){return e>=97&&e<=122||e>=65&&e<=90}function a4(e){return gf(e)||e===47}function i4(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Vy(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function n4(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function vf(e){e.forEach(function(i){if(delete i.location,jy(i)||Ry(i))for(var l in i.options)delete i.options[l].location,vf(i.options[l].value);else ky(i)&&Dy(i.style)||($y(i)||Oy(i))&&hf(i.style)?delete i.style.location:Ly(i)&&vf(i.children)})}function l4(e,i){i===void 0&&(i={}),i=he({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var l=new t4(e,i).parse();if(l.err){var s=SyntaxError($e[l.err.kind]);throw s.location=l.err.location,s.originalMessage=l.err.message,s}return i?.captureLocation||vf(l.val),l.val}var Si;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Si||(Si={}));var Ln=(function(e){Wa(i,e);function i(l,s,o){var u=e.call(this,l)||this;return u.code=s,u.originalMessage=o,u}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i})(Error),qb=(function(e){Wa(i,e);function i(l,s,o,u){return e.call(this,'Invalid values for "'.concat(l,'": "').concat(s,'". Options are "').concat(Object.keys(o).join('", "'),'"'),Si.INVALID_VALUE,u)||this}return i})(Ln),s4=(function(e){Wa(i,e);function i(l,s,o){return e.call(this,'Value for "'.concat(l,'" must be of type ').concat(s),Si.INVALID_VALUE,o)||this}return i})(Ln),r4=(function(e){Wa(i,e);function i(l,s){return e.call(this,'The intl string context variable "'.concat(l,'" was not provided to the string "').concat(s,'"'),Si.MISSING_VALUE,s)||this}return i})(Ln),ca;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(ca||(ca={}));function o4(e){return e.length<2?e:e.reduce(function(i,l){var s=i[i.length-1];return!s||s.type!==ca.literal||l.type!==ca.literal?i.push(l):s.value+=l.value,i},[])}function qy(e){return typeof e=="function"}function kc(e,i,l,s,o,u,d){if(e.length===1&&zb(e[0]))return[{type:ca.literal,value:e[0].value}];for(var p=[],g=0,m=e;g<m.length;g++){var v=m[g];if(zb(v)){p.push({type:ca.literal,value:v.value});continue}if($3(v)){typeof u=="number"&&p.push({type:ca.literal,value:l.getNumberFormat(i).format(u)});continue}var y=v.value;if(!(o&&y in o))throw new r4(y,d);var _=o[y];if(k3(v)){(!_||typeof _=="string"||typeof _=="number")&&(_=typeof _=="string"||typeof _=="number"?String(_):""),p.push({type:typeof _=="string"?ca.literal:ca.object,value:_});continue}if($y(v)){var w=typeof v.style=="string"?s.date[v.style]:hf(v.style)?v.style.parsedOptions:void 0;p.push({type:ca.literal,value:l.getDateTimeFormat(i,w).format(_)});continue}if(Oy(v)){var w=typeof v.style=="string"?s.time[v.style]:hf(v.style)?v.style.parsedOptions:s.time.medium;p.push({type:ca.literal,value:l.getDateTimeFormat(i,w).format(_)});continue}if(ky(v)){var w=typeof v.style=="string"?s.number[v.style]:Dy(v.style)?v.style.parsedOptions:void 0;w&&w.scale&&(_=_*(w.scale||1)),p.push({type:ca.literal,value:l.getNumberFormat(i,w).format(_)});continue}if(Ly(v)){var C=v.children,N=v.value,E=o[N];if(!qy(E))throw new s4(N,"function",d);var T=kc(C,i,l,s,o,u),R=E(T.map(function(k){return k.value}));Array.isArray(R)||(R=[R]),p.push.apply(p,R.map(function(k){return{type:typeof k=="string"?ca.literal:ca.object,value:k}}))}if(jy(v)){var B=v.options[_]||v.options.other;if(!B)throw new qb(v.value,_,Object.keys(v.options),d);p.push.apply(p,kc(B.value,i,l,s,o));continue}if(Ry(v)){var B=v.options["=".concat(_)];if(!B){if(!Intl.PluralRules)throw new Ln(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Si.MISSING_INTL_API,d);var z=l.getPluralRules(i,{type:v.pluralType}).select(_-(v.offset||0));B=v.options[z]||v.options.other}if(!B)throw new qb(v.value,_,Object.keys(v.options),d);p.push.apply(p,kc(B.value,i,l,s,o,_-(v.offset||0)));continue}}return o4(p)}function c4(e,i){return i?he(he(he({},e||{}),i||{}),Object.keys(e).reduce(function(l,s){return l[s]=he(he({},e[s]),i[s]||{}),l},{})):e}function u4(e,i){return i?Object.keys(e).reduce(function(l,s){return l[s]=c4(e[s],i[s]),l},he({},e)):e}function $h(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,l){e[i]=l}}}}}function d4(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:bi(function(){for(var i,l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return new((i=Intl.NumberFormat).bind.apply(i,_i([void 0],l,!1)))},{cache:$h(e.number),strategy:yi.variadic}),getDateTimeFormat:bi(function(){for(var i,l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return new((i=Intl.DateTimeFormat).bind.apply(i,_i([void 0],l,!1)))},{cache:$h(e.dateTime),strategy:yi.variadic}),getPluralRules:bi(function(){for(var i,l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return new((i=Intl.PluralRules).bind.apply(i,_i([void 0],l,!1)))},{cache:$h(e.pluralRules),strategy:yi.variadic})}}var Fy=(function(){function e(i,l,s,o){l===void 0&&(l=e.defaultLocale);var u=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(g){var m=u.formatToParts(g);if(m.length===1)return m[0].value;var v=m.reduce(function(y,_){return!y.length||_.type!==ca.literal||typeof y[y.length-1]!="string"?y.push(_.value):y[y.length-1]+=_.value,y},[]);return v.length<=1?v[0]||"":v},this.formatToParts=function(g){return kc(u.ast,u.locales,u.formatters,u.formats,g,void 0,u.message)},this.resolvedOptions=function(){var g;return{locale:((g=u.resolvedLocale)===null||g===void 0?void 0:g.toString())||Intl.NumberFormat.supportedLocalesOf(u.locales)[0]}},this.getAst=function(){return u.ast},this.locales=l,this.resolvedLocale=e.resolveLocale(l),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=o||{};d.formatters;var p=hs(d,["formatters"]);this.ast=e.__parse(i,he(he({},p),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=u4(e.formats,s),this.formatters=o&&o.formatters||d4(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var l=Intl.NumberFormat.supportedLocalesOf(i);return l.length>0?new Intl.Locale(l[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=l4,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e})(),gl;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(gl||(gl={}));var Wr=(function(e){Wa(i,e);function i(l,s,o){var u=this,d=o?o instanceof Error?o:new Error(String(o)):void 0;return u=e.call(this,"[@formatjs/intl Error ".concat(l,"] ").concat(s,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,u.code=l,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(u,i),u}return i})(Error),h4=(function(e){Wa(i,e);function i(l,s){return e.call(this,gl.UNSUPPORTED_FORMATTER,l,s)||this}return i})(Wr),f4=(function(e){Wa(i,e);function i(l,s){return e.call(this,gl.INVALID_CONFIG,l,s)||this}return i})(Wr),Fb=(function(e){Wa(i,e);function i(l,s){return e.call(this,gl.MISSING_DATA,l,s)||this}return i})(Wr),Xa=(function(e){Wa(i,e);function i(l,s,o){var u=e.call(this,gl.FORMAT_ERROR,"".concat(l,`
Locale: `).concat(s,`
`),o)||this;return u.locale=s,u}return i})(Wr),Oh=(function(e){Wa(i,e);function i(l,s,o,u){var d=e.call(this,"".concat(l,`
MessageID: `).concat(o?.id,`
Default Message: `).concat(o?.defaultMessage,`
Description: `).concat(o?.description,`
`),s,u)||this;return d.descriptor=o,d.locale=s,d}return i})(Xa),p4=(function(e){Wa(i,e);function i(l,s){var o=e.call(this,gl.MISSING_TRANSLATION,'Missing message: "'.concat(l.id,'" for locale "').concat(s,'", using ').concat(l.defaultMessage?"default message (".concat(typeof l.defaultMessage=="string"?l.defaultMessage:l.defaultMessage.map(function(u){var d;return(d=u.value)!==null&&d!==void 0?d:JSON.stringify(u)}).join(),")"):"id"," as fallback."))||this;return o.descriptor=l,o}return i})(Wr);function m4(e,i,l){if(l===void 0&&(l=Error),!e)throw new l(i)}function ys(e,i,l){return l===void 0&&(l={}),i.reduce(function(s,o){return o in e?s[o]=e[o]:o in l&&(s[o]=l[o]),s},{})}var g4=function(e){},v4=function(e){},Gy={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:g4,onWarn:v4};function Yy(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function rl(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,l){e[i]=l}}}}}function b4(e){e===void 0&&(e=Yy());var i=Intl.RelativeTimeFormat,l=Intl.ListFormat,s=Intl.DisplayNames,o=bi(function(){for(var p,g=[],m=0;m<arguments.length;m++)g[m]=arguments[m];return new((p=Intl.DateTimeFormat).bind.apply(p,_i([void 0],g,!1)))},{cache:rl(e.dateTime),strategy:yi.variadic}),u=bi(function(){for(var p,g=[],m=0;m<arguments.length;m++)g[m]=arguments[m];return new((p=Intl.NumberFormat).bind.apply(p,_i([void 0],g,!1)))},{cache:rl(e.number),strategy:yi.variadic}),d=bi(function(){for(var p,g=[],m=0;m<arguments.length;m++)g[m]=arguments[m];return new((p=Intl.PluralRules).bind.apply(p,_i([void 0],g,!1)))},{cache:rl(e.pluralRules),strategy:yi.variadic});return{getDateTimeFormat:o,getNumberFormat:u,getMessageFormat:bi(function(p,g,m,v){return new Fy(p,g,m,he({formatters:{getNumberFormat:u,getDateTimeFormat:o,getPluralRules:d}},v||{}))},{cache:rl(e.message),strategy:yi.variadic}),getRelativeTimeFormat:bi(function(){for(var p=[],g=0;g<arguments.length;g++)p[g]=arguments[g];return new(i.bind.apply(i,_i([void 0],p,!1)))},{cache:rl(e.relativeTime),strategy:yi.variadic}),getPluralRules:d,getListFormat:bi(function(){for(var p=[],g=0;g<arguments.length;g++)p[g]=arguments[g];return new(l.bind.apply(l,_i([void 0],p,!1)))},{cache:rl(e.list),strategy:yi.variadic}),getDisplayNames:bi(function(){for(var p=[],g=0;g<arguments.length;g++)p[g]=arguments[g];return new(s.bind.apply(s,_i([void 0],p,!1)))},{cache:rl(e.displayNames),strategy:yi.variadic})}}function Qf(e,i,l,s){var o=e&&e[i],u;if(o&&(u=o[l]),u)return u;s(new h4("No ".concat(i," format named: ").concat(l)))}function xc(e,i){return Object.keys(e).reduce(function(l,s){return l[s]=he({timeZone:i},e[s]),l},{})}function Gb(e,i){var l=Object.keys(he(he({},e),i));return l.reduce(function(s,o){return s[o]=he(he({},e[o]||{}),i[o]||{}),s},{})}function Yb(e,i){if(!i)return e;var l=Fy.formats;return he(he(he({},l),e),{date:Gb(xc(l.date,i),xc(e.date||{},i)),time:Gb(xc(l.time,i),xc(e.time||{},i))})}var bf=function(e,i,l,s,o){var u=e.locale,d=e.formats,p=e.messages,g=e.defaultLocale,m=e.defaultFormats,v=e.fallbackOnEmptyString,y=e.onError,_=e.timeZone,w=e.defaultRichTextElements;l===void 0&&(l={id:""});var C=l.id,N=l.defaultMessage;m4(!!C,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var E=String(C),T=p&&Object.prototype.hasOwnProperty.call(p,E)&&p[E];if(Array.isArray(T)&&T.length===1&&T[0].type===st.literal)return T[0].value;if(!s&&T&&typeof T=="string"&&!w)return T.replace(/'\{(.*?)\}'/gi,"{$1}");if(s=he(he({},w),s||{}),d=Yb(d,_),m=Yb(m,_),!T){if(v===!1&&T==="")return T;if((!N||u&&u.toLowerCase()!==g.toLowerCase())&&y(new p4(l,u)),N)try{var R=i.getMessageFormat(N,g,m,o);return R.format(s)}catch(B){return y(new Oh('Error formatting default message for: "'.concat(E,'", rendering default message verbatim'),u,l,B)),typeof N=="string"?N:E}return E}try{var R=i.getMessageFormat(T,u,d,he({formatters:i},o||{}));return R.format(s)}catch(B){y(new Oh('Error formatting message: "'.concat(E,'", using ').concat(N?"default message":"id"," as fallback."),u,l,B))}if(N)try{var R=i.getMessageFormat(N,g,m,o);return R.format(s)}catch(B){y(new Oh('Error formatting the default message for: "'.concat(E,'", rendering message verbatim'),u,l,B))}return typeof T=="string"?T:typeof N=="string"?N:E},y4=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Xr(e,i,l,s){var o=e.locale,u=e.formats,d=e.onError,p=e.timeZone;s===void 0&&(s={});var g=s.format,m=he(he({},p&&{timeZone:p}),g&&Qf(u,i,g,d)),v=ys(s,y4,m);return i==="time"&&!v.hour&&!v.minute&&!v.second&&!v.timeStyle&&!v.dateStyle&&(v=he(he({},v),{hour:"numeric",minute:"numeric"})),l(o,v)}function _4(e,i){for(var l=[],s=2;s<arguments.length;s++)l[s-2]=arguments[s];var o=l[0],u=l[1],d=u===void 0?{}:u,p=typeof o=="string"?new Date(o||0):o;try{return Xr(e,"date",i,d).format(p)}catch(g){e.onError(new Xa("Error formatting date.",e.locale,g))}return String(p)}function x4(e,i){for(var l=[],s=2;s<arguments.length;s++)l[s-2]=arguments[s];var o=l[0],u=l[1],d=u===void 0?{}:u,p=typeof o=="string"?new Date(o||0):o;try{return Xr(e,"time",i,d).format(p)}catch(g){e.onError(new Xa("Error formatting time.",e.locale,g))}return String(p)}function w4(e,i){for(var l=[],s=2;s<arguments.length;s++)l[s-2]=arguments[s];var o=l[0],u=l[1],d=l[2],p=d===void 0?{}:d,g=typeof o=="string"?new Date(o||0):o,m=typeof u=="string"?new Date(u||0):u;try{return Xr(e,"dateTimeRange",i,p).formatRange(g,m)}catch(v){e.onError(new Xa("Error formatting date time range.",e.locale,v))}return String(g)}function S4(e,i){for(var l=[],s=2;s<arguments.length;s++)l[s-2]=arguments[s];var o=l[0],u=l[1],d=u===void 0?{}:u,p=typeof o=="string"?new Date(o||0):o;try{return Xr(e,"date",i,d).formatToParts(p)}catch(g){e.onError(new Xa("Error formatting date.",e.locale,g))}return[]}function C4(e,i){for(var l=[],s=2;s<arguments.length;s++)l[s-2]=arguments[s];var o=l[0],u=l[1],d=u===void 0?{}:u,p=typeof o=="string"?new Date(o||0):o;try{return Xr(e,"time",i,d).formatToParts(p)}catch(g){e.onError(new Xa("Error formatting time.",e.locale,g))}return[]}var E4=["style","type","fallback","languageDisplay"];function A4(e,i,l,s){var o=e.locale,u=e.onError,d=Intl.DisplayNames;d||u(new Ln(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Si.MISSING_INTL_API));var p=ys(s,E4);try{return i(o,p).of(l)}catch(g){u(new Xa("Error formatting display name.",o,g))}}var T4=["type","style"],Wb=Date.now();function N4(e){return"".concat(Wb,"_").concat(e,"_").concat(Wb)}function M4(e,i,l,s){s===void 0&&(s={});var o=Wy(e,i,l,s).reduce(function(u,d){var p=d.value;return typeof p!="string"?u.push(p):typeof u[u.length-1]=="string"?u[u.length-1]+=p:u.push(p),u},[]);return o.length===1?o[0]:o.length===0?"":o}function Wy(e,i,l,s){var o=e.locale,u=e.onError;s===void 0&&(s={});var d=Intl.ListFormat;d||u(new Ln(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Si.MISSING_INTL_API));var p=ys(s,T4);try{var g={},m=Array.from(l).map(function(v,y){if(typeof v=="object"&&v!==null){var _=N4(y);return g[_]=v,_}return String(v)});return i(o,p).formatToParts(m).map(function(v){return v.type==="literal"?v:he(he({},v),{value:g[v.value]||v.value})})}catch(v){u(new Xa("Error formatting list.",o,v))}return l}var k4=["type"];function $4(e,i,l,s){var o=e.locale,u=e.onError;s===void 0&&(s={}),Intl.PluralRules||u(new Ln(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Si.MISSING_INTL_API));var d=ys(s,k4);try{return i(o,d).select(l)}catch(p){u(new Xa("Error formatting plural.",o,p))}return"other"}var O4=["numeric","style"];function j4(e,i,l){var s=e.locale,o=e.formats,u=e.onError;l===void 0&&(l={});var d=l.format,p=!!d&&Qf(o,"relative",d,u)||{},g=ys(l,O4,p);return i(s,g)}function R4(e,i,l,s,o){o===void 0&&(o={}),s||(s="second");var u=Intl.RelativeTimeFormat;u||e.onError(new Ln(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Si.MISSING_INTL_API));try{return j4(e,i,o).format(l,s)}catch(d){e.onError(new Xa("Error formatting relative time.",e.locale,d))}return String(l)}var L4=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Xy(e,i,l){var s=e.locale,o=e.formats,u=e.onError;l===void 0&&(l={});var d=l.format,p=d&&Qf(o,"number",d,u)||{},g=ys(l,L4,p);return i(s,g)}function D4(e,i,l,s){s===void 0&&(s={});try{return Xy(e,i,s).format(l)}catch(o){e.onError(new Xa("Error formatting number.",e.locale,o))}return String(l)}function z4(e,i,l,s){s===void 0&&(s={});try{return Xy(e,i,s).formatToParts(l)}catch(o){e.onError(new Xa("Error formatting number.",e.locale,o))}return[]}function B4(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function H4(e){e.onWarn&&e.defaultRichTextElements&&B4(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function U4(e,i){var l=b4(i),s=he(he({},Gy),e),o=s.locale,u=s.defaultLocale,d=s.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&d?d(new Fb('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&d&&d(new Fb('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new f4('"locale" was not configured, using "'.concat(u,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),s.locale=s.defaultLocale||"en"),H4(s),he(he({},s),{formatters:l,formatNumber:D4.bind(null,s,l.getNumberFormat),formatNumberToParts:z4.bind(null,s,l.getNumberFormat),formatRelativeTime:R4.bind(null,s,l.getRelativeTimeFormat),formatDate:_4.bind(null,s,l.getDateTimeFormat),formatDateToParts:S4.bind(null,s,l.getDateTimeFormat),formatTime:x4.bind(null,s,l.getDateTimeFormat),formatDateTimeRange:w4.bind(null,s,l.getDateTimeFormat),formatTimeToParts:C4.bind(null,s,l.getDateTimeFormat),formatPlural:$4.bind(null,s,l.getPluralRules),formatMessage:bf.bind(null,s,l),$t:bf.bind(null,s,l),formatList:M4.bind(null,s,l.getListFormat),formatListToParts:Wy.bind(null,s,l.getListFormat),formatDisplayName:A4.bind(null,s,l.getDisplayNames)})}function I4(e,i,l){if(l===void 0&&(l=Error),!e)throw new l(i)}function Qy(e){I4(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Zy=he(he({},Gy),{textComponent:M.Fragment}),P4=function(e,i){return M.isValidElement(e)?M.cloneElement(e,{key:i}):e},Ky=function(e){var i;return(i=M.Children.map(e,P4))!==null&&i!==void 0?i:[]};function V4(e){return function(i){return e(Ky(i))}}function yf(e,i){if(e===i)return!0;if(!e||!i)return!1;var l=Object.keys(e),s=Object.keys(i),o=l.length;if(s.length!==o)return!1;for(var u=0;u<o;u++){var d=l[u];if(e[d]!==i[d]||!Object.prototype.hasOwnProperty.call(i,d))return!1}return!0}var jh={exports:{}},Ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xb;function q4(){if(Xb)return Ve;Xb=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,l=e?Symbol.for("react.portal"):60106,s=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,u=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,g=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,v=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,w=e?Symbol.for("react.memo"):60115,C=e?Symbol.for("react.lazy"):60116,N=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,T=e?Symbol.for("react.responder"):60118,R=e?Symbol.for("react.scope"):60119;function B(k){if(typeof k=="object"&&k!==null){var q=k.$$typeof;switch(q){case i:switch(k=k.type,k){case g:case m:case s:case u:case o:case y:return k;default:switch(k=k&&k.$$typeof,k){case p:case v:case C:case w:case d:return k;default:return q}}case l:return q}}}function z(k){return B(k)===m}return Ve.AsyncMode=g,Ve.ConcurrentMode=m,Ve.ContextConsumer=p,Ve.ContextProvider=d,Ve.Element=i,Ve.ForwardRef=v,Ve.Fragment=s,Ve.Lazy=C,Ve.Memo=w,Ve.Portal=l,Ve.Profiler=u,Ve.StrictMode=o,Ve.Suspense=y,Ve.isAsyncMode=function(k){return z(k)||B(k)===g},Ve.isConcurrentMode=z,Ve.isContextConsumer=function(k){return B(k)===p},Ve.isContextProvider=function(k){return B(k)===d},Ve.isElement=function(k){return typeof k=="object"&&k!==null&&k.$$typeof===i},Ve.isForwardRef=function(k){return B(k)===v},Ve.isFragment=function(k){return B(k)===s},Ve.isLazy=function(k){return B(k)===C},Ve.isMemo=function(k){return B(k)===w},Ve.isPortal=function(k){return B(k)===l},Ve.isProfiler=function(k){return B(k)===u},Ve.isStrictMode=function(k){return B(k)===o},Ve.isSuspense=function(k){return B(k)===y},Ve.isValidElementType=function(k){return typeof k=="string"||typeof k=="function"||k===s||k===m||k===u||k===o||k===y||k===_||typeof k=="object"&&k!==null&&(k.$$typeof===C||k.$$typeof===w||k.$$typeof===d||k.$$typeof===p||k.$$typeof===v||k.$$typeof===E||k.$$typeof===T||k.$$typeof===R||k.$$typeof===N)},Ve.typeOf=B,Ve}var Qb;function F4(){return Qb||(Qb=1,jh.exports=q4()),jh.exports}var Rh,Zb;function G4(){if(Zb)return Rh;Zb=1;var e=F4(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[e.ForwardRef]=s,u[e.Memo]=o;function d(C){return e.isMemo(C)?o:u[C.$$typeof]||i}var p=Object.defineProperty,g=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,_=Object.prototype;function w(C,N,E){if(typeof N!="string"){if(_){var T=y(N);T&&T!==_&&w(C,T,E)}var R=g(N);m&&(R=R.concat(m(N)));for(var B=d(C),z=d(N),k=0;k<R.length;++k){var q=R[k];if(!l[q]&&!(E&&E[q])&&!(z&&z[q])&&!(B&&B[q])){var X=v(N,q);try{p(C,q,X)}catch{}}}}return C}return Rh=w,Rh}G4();var Zf=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=M.createContext(null)):M.createContext(null);Zf.Consumer;var Y4=Zf.Provider,W4=Y4,X4=Zf;function je(){var e=M.useContext(X4);return Qy(e),e}var _f;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(_f||(_f={}));var xf;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(xf||(xf={}));function Jy(e){var i=function(l){var s=je(),o=l.value,u=l.children,d=hs(l,["value","children"]),p=typeof o=="string"?new Date(o||0):o,g=e==="formatDate"?s.formatDateToParts(p,d):s.formatTimeToParts(p,d);return u(g)};return i.displayName=xf[e],i}function Qr(e){var i=function(l){var s=je(),o=l.value,u=l.children,d=hs(l,["value","children"]),p=s[e](o,d);if(typeof u=="function")return u(p);var g=s.textComponent||M.Fragment;return M.createElement(g,null,p)};return i.displayName=_f[e],i}function e1(e){return e&&Object.keys(e).reduce(function(i,l){var s=e[l];return i[l]=qy(s)?V4(s):s,i},{})}var Kb=function(e,i,l,s){for(var o=[],u=4;u<arguments.length;u++)o[u-4]=arguments[u];var d=e1(s),p=bf.apply(void 0,_i([e,i,l,d],o,!1));return Array.isArray(p)?Ky(p):p},Jb=function(e,i){var l=e.defaultRichTextElements,s=hs(e,["defaultRichTextElements"]),o=e1(l),u=U4(he(he(he({},Zy),s),{defaultRichTextElements:o}),i),d={locale:u.locale,timeZone:u.timeZone,fallbackOnEmptyString:u.fallbackOnEmptyString,formats:u.formats,defaultLocale:u.defaultLocale,defaultFormats:u.defaultFormats,messages:u.messages,onError:u.onError,defaultRichTextElements:o};return he(he({},u),{formatMessage:Kb.bind(null,d,u.formatters),$t:Kb.bind(null,d,u.formatters)})};function Q4(e,i){var l=e.values,s=hs(e,["values"]),o=i.values,u=hs(i,["values"]);return yf(o,l)&&yf(s,u)}function t1(e){var i=je(),l=i.formatMessage,s=i.textComponent,o=s===void 0?M.Fragment:s,u=e.id,d=e.description,p=e.defaultMessage,g=e.values,m=e.children,v=e.tagName,y=v===void 0?o:v,_=e.ignoreTag,w={id:u,description:d,defaultMessage:p},C=l(w,g,{ignoreTag:_});return typeof m=="function"?m(Array.isArray(C)?C:[C]):y?M.createElement(y,null,C):M.createElement(M.Fragment,null,C)}t1.displayName="FormattedMessage";var ee=M.memo(t1,Q4);ee.displayName="MemoizedFormattedMessage";function Lh(e){return{locale:e.locale,timeZone:e.timeZone,fallbackOnEmptyString:e.fallbackOnEmptyString,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,onWarn:e.onWarn,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}var a1=(function(e){Wa(i,e);function i(){var l=e!==null&&e.apply(this,arguments)||this;return l.cache=Yy(),l.state={cache:l.cache,intl:Jb(Lh(l.props),l.cache),prevConfig:Lh(l.props)},l}return i.getDerivedStateFromProps=function(l,s){var o=s.prevConfig,u=s.cache,d=Lh(l);return yf(o,d)?null:{intl:Jb(d,u),prevConfig:d}},i.prototype.render=function(){return Qy(this.state.intl),M.createElement(W4,{value:this.state.intl},this.props.children)},i.displayName="IntlProvider",i.defaultProps=Zy,i})(M.PureComponent);Qr("formatDate");Qr("formatTime");Qr("formatNumber");Qr("formatList");Qr("formatDisplayName");Jy("formatDate");Jy("formatTime");var Z4=Ge`
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
`,Ot=class extends Ue{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,i=e?Bc`a`:Bc`button`;return Br`
      <${i}
        part="base"
        class=${Ze({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${be(e?void 0:this.disabled)}
        type=${be(e?void 0:"button")}
        href=${be(e?this.href:void 0)}
        target=${be(e?this.target:void 0)}
        download=${be(e?this.download:void 0)}
        rel=${be(e&&this.target?"noreferrer noopener":void 0)}
        role=${be(e?void 0:"button")}
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
    `}};Ot.styles=[it,Z4];Ot.dependencies={"sl-icon":Ut};S([xe(".icon-button")],Ot.prototype,"button",2);S([Ke()],Ot.prototype,"hasFocus",2);S([$()],Ot.prototype,"name",2);S([$()],Ot.prototype,"library",2);S([$()],Ot.prototype,"src",2);S([$()],Ot.prototype,"href",2);S([$()],Ot.prototype,"target",2);S([$()],Ot.prototype,"download",2);S([$()],Ot.prototype,"label",2);S([$({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);var K4="sl-icon-button";Ot.define("sl-icon-button");var J4=ct({tagName:K4,elementClass:Ot,react:rt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),$t=J4;const eC="_header_c0rsb_1",tC="_logo_c0rsb_30",Dh={header:eC,logo:tC};function Ti({headerActions:e,showBackButton:i=!1,onBack:l}){const s=je(),o=At(),u=()=>{l?l():o(-1)};return f.jsxs("header",{className:Dh.header,children:[i?f.jsx($t,{name:"chevron-left",label:s.formatMessage({id:"navigation.back"}),onClick:u}):f.jsx("div",{"data-testid":"header-logo",className:Dh.logo}),f.jsx("div",{className:Dh.actions,children:e})]})}function Kf(e,i,l){const s=pl(e,l?.in);return isNaN(i)?fs(e,NaN):(i&&s.setDate(s.getDate()+i),s)}function aC(e,i,l){const s=pl(e,l?.in);if(isNaN(i))return fs(e,NaN);const o=s.getDate(),u=fs(e,s.getTime());u.setMonth(s.getMonth()+i+1,0);const d=u.getDate();return o>=d?u:(s.setFullYear(u.getFullYear(),u.getMonth(),o),s)}function Jf(e,i,l){return Kf(e,i*7,l)}function iC(e,i,l){return aC(e,i*12,l)}function nC(e){return fs(e,Date.now())}function i1(e,i,l){const[s,o]=wx(l?.in,e,i);return+Zh(s)==+Zh(o)}function $c(e,i){return+pl(e)<+pl(i)}function lC(e){return+pl(e)>Date.now()}function sC(e,i){return i1(fs(e,e),nC(e))}function ep(e,i){const l=()=>fs(i?.in,NaN),o=uC(e);let u;if(o.date){const m=dC(o.date,2);u=hC(m.restDateString,m.year)}if(!u||isNaN(+u))return l();const d=+u;let p=0,g;if(o.time&&(p=fC(o.time),isNaN(p)))return l();if(o.timezone){if(g=pC(o.timezone),isNaN(g))return l()}else{const m=new Date(d+p),v=pl(0,i?.in);return v.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),v.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),v}return pl(d+p+g,i?.in)}const wc={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},rC=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,oC=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,cC=/^([+-])(\d{2})(?::?(\d{2}))?$/;function uC(e){const i={},l=e.split(wc.dateTimeDelimiter);let s;if(l.length>2)return i;if(/:/.test(l[0])?s=l[0]:(i.date=l[0],s=l[1],wc.timeZoneDelimiter.test(i.date)&&(i.date=e.split(wc.timeZoneDelimiter)[0],s=e.substr(i.date.length,e.length))),s){const o=wc.timezone.exec(s);o?(i.time=s.replace(o[1],""),i.timezone=o[1]):i.time=s}return i}function dC(e,i){const l=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+i)+"})|(\\d{2}|[+-]\\d{"+(2+i)+"})$)"),s=e.match(l);if(!s)return{year:NaN,restDateString:""};const o=s[1]?parseInt(s[1]):null,u=s[2]?parseInt(s[2]):null;return{year:u===null?o:u*100,restDateString:e.slice((s[1]||s[2]).length)}}function hC(e,i){if(i===null)return new Date(NaN);const l=e.match(rC);if(!l)return new Date(NaN);const s=!!l[4],o=Tr(l[1]),u=Tr(l[2])-1,d=Tr(l[3]),p=Tr(l[4]),g=Tr(l[5])-1;if(s)return yC(i,p,g)?mC(i,p,g):new Date(NaN);{const m=new Date(0);return!vC(i,u,d)||!bC(i,o)?new Date(NaN):(m.setUTCFullYear(i,u,Math.max(o,d)),m)}}function Tr(e){return e?parseInt(e):1}function fC(e){const i=e.match(oC);if(!i)return NaN;const l=zh(i[1]),s=zh(i[2]),o=zh(i[3]);return _C(l,s,o)?l*L0+s*D0+o*1e3:NaN}function zh(e){return e&&parseFloat(e.replace(",","."))||0}function pC(e){if(e==="Z")return 0;const i=e.match(cC);if(!i)return 0;const l=i[1]==="+"?-1:1,s=parseInt(i[2]),o=i[3]&&parseInt(i[3])||0;return xC(s,o)?l*(s*L0+o*D0):NaN}function mC(e,i,l){const s=new Date(0);s.setUTCFullYear(e,0,4);const o=s.getUTCDay()||7,u=(i-1)*7+l+1-o;return s.setUTCDate(s.getUTCDate()+u),s}const gC=[31,null,31,30,31,30,31,31,30,31,30,31];function n1(e){return e%400===0||e%4===0&&e%100!==0}function vC(e,i,l){return i>=0&&i<=11&&l>=1&&l<=(gC[i]||(n1(e)?29:28))}function bC(e,i){return i>=1&&i<=(n1(e)?366:365)}function yC(e,i,l){return i>=1&&i<=53&&l>=0&&l<=6}function _C(e,i,l){return e===24?i===0&&l===0:l>=0&&l<60&&i>=0&&i<60&&e>=0&&e<25}function xC(e,i){return i>=0&&i<=59}function wC(e,i,l){return Jf(e,-1,l)}function e0(e,i,l){return iC(e,-13,l)}const SC=ab.default||ab;async function CC(e,i,l){const{value:s}=await Kh.canShare();if(!s){console.warn("Sharing is not available on this device.");return}const o=document.getElementById(e);if(!o){console.error(`Element with ID "${e}" not found.`);return}const u=o.querySelector(".hide-for-sharing");u&&(u.style.visibility="hidden");const d=document.createElement("div");d.style.position="absolute",d.style.left="-9999px",d.style.top="0",d.style.overflow="visible",d.style.height="auto",d.style.width="auto",d.style.maxHeight="none",d.style.maxWidth="none";const p=o.cloneNode(!0);p.style.width="auto",p.style.height="auto",p.style.maxHeight="none",p.style.overflow="visible";const g=p.querySelector(".weekGroup");g&&(g.style.overflow="visible",g.style.height="auto",g.style.width="auto",g.style.maxHeight="none",g.style.maxWidth="none"),d.appendChild(p),document.body.appendChild(d);try{const v=(await SC(d,{useCORS:!0,scale:2})).toDataURL("image/png");if(kt.isNativePlatform()){const y=await Sx.writeFile({path:`share-${Date.now()}.png`,data:v,directory:Cx.Cache});await Kh.share({title:i,text:l,files:[y.uri]})}else{const y=await(await fetch(v)).blob(),_=new File([y],"roster.png",{type:"image/png"}),w={title:i,text:l,files:[_]};if(navigator.canShare&&navigator.canShare(w))await navigator.share(w);else{const C=document.createElement("a");C.href=v,C.download=`roster-${Date.now()}.png`,document.body.appendChild(C),C.click(),document.body.removeChild(C)}}}catch(m){console.error("Could not share image:",m)}finally{u&&(u.style.visibility="visible"),document.body.removeChild(d)}}async function EC(e,i,l,s){const o=kt.isNativePlatform()?"https://ismyhorse.com":window.location.origin;await Kh.share({title:i,text:l,url:`${o}${e}`,dialogTitle:s})}const AC=async()=>{if(kt.isNativePlatform())try{return(await Ex.getPhoto({quality:90,allowEditing:!1,resultType:Tx.DataUrl,source:Ax.Prompt})).dataUrl??null}catch{return null}return new Promise(e=>{const i=document.createElement("input");i.type="file",i.accept="image/*",i.style.display="none";const l=()=>{document.body.contains(i)&&document.body.removeChild(i)};i.onchange=()=>{const s=i.files?.[0];if(s){const o=new FileReader;o.onload=u=>{e(u.target?.result),l()},o.onerror=()=>{e(null),l()},o.readAsDataURL(s)}else e(null),l()},i.oncancel=()=>{e(null),l()},document.body.appendChild(i),i.click()})};var TC=Ge`
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
`;function*tp(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Hw(tp(e.shadowRoot.activeElement))))}function l1(){return[...tp()].pop()}var t0=new WeakMap;function s1(e){let i=t0.get(e);return i||(i=window.getComputedStyle(e,null),t0.set(e,i)),i}function NC(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const i=s1(e);return i.visibility!=="hidden"&&i.display!=="none"}function MC(e){const i=s1(e),{overflowY:l,overflowX:s}=i;return l==="scroll"||s==="scroll"?!0:l!=="auto"||s!=="auto"?!1:e.scrollHeight>e.clientHeight&&l==="auto"||e.scrollWidth>e.clientWidth&&s==="auto"}function kC(e){const i=e.tagName.toLowerCase(),l=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(l)||l<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(i==="input"&&e.getAttribute("type")==="radio"){const u=e.getRootNode(),d=`input[type='radio'][name="${e.getAttribute("name")}"]`,p=u.querySelector(`${d}:checked`);return p?p===e:u.querySelector(d)===e}return NC(e)?(i==="audio"||i==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(i)?!0:MC(e):!1}function $C(e){var i,l;const s=wf(e),o=(i=s[0])!=null?i:null,u=(l=s[s.length-1])!=null?l:null;return{start:o,end:u}}function OC(e,i){var l;return((l=e.getRootNode({composed:!0}))==null?void 0:l.host)!==i}function wf(e){const i=new WeakMap,l=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||i.has(o))return;i.set(o,!0),!l.includes(o)&&kC(o)&&l.push(o),o instanceof HTMLSlotElement&&OC(o,e)&&o.assignedElements({flatten:!0}).forEach(u=>{s(u)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const u of o.children)s(u)}return s(e),l.sort((o,u)=>{const d=Number(o.getAttribute("tabindex"))||0;return(Number(u.getAttribute("tabindex"))||0)-d})}var Nr=[],r1=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{var l;if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=l1();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=wf(this.element);let u=o.findIndex(p=>p===s);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){u+d>=o.length?u=0:u+d<0?u=o.length-1:u+=d,this.previousFocus=this.currentFocus;const p=o[u];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||p&&this.possiblyHasTabbableChildren(p))return;i.preventDefault(),this.currentFocus=p,(l=this.currentFocus)==null||l.focus({preventScroll:!1});const g=[...tp()];if(g.includes(this.currentFocus)||!g.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Nr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Nr=Nr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Nr[Nr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=wf(this.element);if(!this.element.matches(":focus-within")){const i=e[0],l=e[e.length-1],s=this.tabDirection==="forward"?i:l;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function jC(e,i){return{top:Math.round(e.getBoundingClientRect().top-i.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-i.getBoundingClientRect().left)}}var Sf=new Set;function RC(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function LC(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Hr(e){if(Sf.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const i=RC()+LC();let l=getComputedStyle(document.documentElement).scrollbarGutter;(!l||l==="auto")&&(l="stable"),i<2&&(l=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",l),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${i}px`)}}function Ur(e){Sf.delete(e),Sf.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Cf(e,i,l="vertical",s="smooth"){const o=jC(e,i),u=o.top+i.scrollTop,d=o.left+i.scrollLeft,p=i.scrollLeft,g=i.scrollLeft+i.offsetWidth,m=i.scrollTop,v=i.scrollTop+i.offsetHeight;(l==="horizontal"||l==="both")&&(d<p?i.scrollTo({left:d,behavior:s}):d+e.clientWidth>g&&i.scrollTo({left:d-i.offsetWidth+e.clientWidth,behavior:s})),(l==="vertical"||l==="both")&&(u<m?i.scrollTo({top:u,behavior:s}):u+e.clientHeight>v&&i.scrollTo({top:u-i.offsetHeight+e.clientHeight,behavior:s}))}var o1=e=>{var i;const{activeElement:l}=document;l&&e.contains(l)&&((i=document.activeElement)==null||i.blur())},c1=new Map,DC=new WeakMap;function zC(e){return e??{keyframes:[],options:{duration:0}}}function a0(e,i){return i.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function vt(e,i){c1.set(e,zC(i))}function ta(e,i,l){const s=DC.get(e);if(s?.[i])return a0(s[i],l.dir);const o=c1.get(i);return o?a0(o,l.dir):{keyframes:[],options:{duration:0}}}function Ci(e,i){return new Promise(l=>{function s(o){o.target===e&&(e.removeEventListener(i,s),l())}e.addEventListener(i,s)})}function aa(e,i,l){return new Promise(s=>{if(l?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(i,Gr(Ki({},l),{duration:BC()?0:l.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function BC(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ga(e){return Promise.all(e.getAnimations().map(i=>new Promise(l=>{i.cancel(),requestAnimationFrame(l)})))}function i0(e,i){return e.map(l=>Gr(Ki({},l),{height:l.height==="auto"?`${i}px`:l.height}))}function n0(e){return e.charAt(0).toUpperCase()+e.slice(1)}var va=class extends Ue{constructor(){super(...arguments),this.hasSlotController=new oi(this,"footer"),this.localize=new ia(this),this.modal=new r1(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Hr(this)))}disconnectedCallback(){super.disconnectedCallback(),Ur(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const l=ta(this,"drawer.denyClose",{dir:this.localize.dir()});aa(this.panel,l.keyframes,l.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Hr(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ga(this.drawer),ga(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const i=ta(this,`drawer.show${n0(this.placement)}`,{dir:this.localize.dir()}),l=ta(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([aa(this.panel,i.keyframes,i.options),aa(this.overlay,l.keyframes,l.options)]),this.emit("sl-after-show")}else{o1(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ur(this)),await Promise.all([ga(this.drawer),ga(this.overlay)]);const e=ta(this,`drawer.hide${n0(this.placement)}`,{dir:this.localize.dir()}),i=ta(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([aa(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),aa(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const l=this.originalTrigger;typeof l?.focus=="function"&&setTimeout(()=>l.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Hr(this)),this.open&&this.contained&&(this.modal.deactivate(),Ur(this))}async show(){if(!this.open)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ci(this,"sl-after-hide")}render(){return pe`
      <div
        part="base"
        class=${Ze({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":pe`
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
    `}};va.styles=[it,TC];va.dependencies={"sl-icon-button":Ot};S([xe(".drawer")],va.prototype,"drawer",2);S([xe(".drawer__panel")],va.prototype,"panel",2);S([xe(".drawer__overlay")],va.prototype,"overlay",2);S([$({type:Boolean,reflect:!0})],va.prototype,"open",2);S([$({reflect:!0})],va.prototype,"label",2);S([$({reflect:!0})],va.prototype,"placement",2);S([$({type:Boolean,reflect:!0})],va.prototype,"contained",2);S([$({attribute:"no-header",type:Boolean,reflect:!0})],va.prototype,"noHeader",2);S([Re("open",{waitUntilFirstUpdate:!0})],va.prototype,"handleOpenChange",1);S([Re("contained",{waitUntilFirstUpdate:!0})],va.prototype,"handleNoModalChange",1);vt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});vt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});vt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});vt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});vt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});vt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});vt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});vt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});vt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});vt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});vt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var HC="sl-drawer";va.define("sl-drawer");var UC=ct({tagName:HC,elementClass:va,react:rt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"}),ci=UC,IC=Ge`
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
`,bl=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return pe`
      <span
        part="base"
        class=${Ze({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?pe`
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
    `}};bl.styles=[it,IC];bl.dependencies={"sl-icon-button":Ot};S([$({reflect:!0})],bl.prototype,"variant",2);S([$({reflect:!0})],bl.prototype,"size",2);S([$({type:Boolean,reflect:!0})],bl.prototype,"pill",2);S([$({type:Boolean})],bl.prototype,"removable",2);var PC=Ge`
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
`,Zr=Ge`
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
`,VC=Ge`
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
`;const $n=Math.min,ka=Math.max,Hc=Math.round,Sc=Math.floor,xi=e=>({x:e,y:e}),qC={left:"right",right:"left",bottom:"top",top:"bottom"},FC={start:"end",end:"start"};function Ef(e,i,l){return ka(e,$n(i,l))}function _s(e,i){return typeof e=="function"?e(i):e}function On(e){return e.split("-")[0]}function xs(e){return e.split("-")[1]}function u1(e){return e==="x"?"y":"x"}function ap(e){return e==="y"?"height":"width"}const GC=new Set(["top","bottom"]);function Xi(e){return GC.has(On(e))?"y":"x"}function ip(e){return u1(Xi(e))}function YC(e,i,l){l===void 0&&(l=!1);const s=xs(e),o=ip(e),u=ap(o);let d=o==="x"?s===(l?"end":"start")?"right":"left":s==="start"?"bottom":"top";return i.reference[u]>i.floating[u]&&(d=Uc(d)),[d,Uc(d)]}function WC(e){const i=Uc(e);return[Af(e),i,Af(i)]}function Af(e){return e.replace(/start|end/g,i=>FC[i])}const l0=["left","right"],s0=["right","left"],XC=["top","bottom"],QC=["bottom","top"];function ZC(e,i,l){switch(e){case"top":case"bottom":return l?i?s0:l0:i?l0:s0;case"left":case"right":return i?XC:QC;default:return[]}}function KC(e,i,l,s){const o=xs(e);let u=ZC(On(e),l==="start",s);return o&&(u=u.map(d=>d+"-"+o),i&&(u=u.concat(u.map(Af)))),u}function Uc(e){return e.replace(/left|right|bottom|top/g,i=>qC[i])}function JC(e){return{top:0,right:0,bottom:0,left:0,...e}}function d1(e){return typeof e!="number"?JC(e):{top:e,right:e,bottom:e,left:e}}function Ic(e){const{x:i,y:l,width:s,height:o}=e;return{width:s,height:o,top:l,left:i,right:i+s,bottom:l+o,x:i,y:l}}function r0(e,i,l){let{reference:s,floating:o}=e;const u=Xi(i),d=ip(i),p=ap(d),g=On(i),m=u==="y",v=s.x+s.width/2-o.width/2,y=s.y+s.height/2-o.height/2,_=s[p]/2-o[p]/2;let w;switch(g){case"top":w={x:v,y:s.y-o.height};break;case"bottom":w={x:v,y:s.y+s.height};break;case"right":w={x:s.x+s.width,y};break;case"left":w={x:s.x-o.width,y};break;default:w={x:s.x,y:s.y}}switch(xs(i)){case"start":w[d]-=_*(l&&m?-1:1);break;case"end":w[d]+=_*(l&&m?-1:1);break}return w}const eE=async(e,i,l)=>{const{placement:s="bottom",strategy:o="absolute",middleware:u=[],platform:d}=l,p=u.filter(Boolean),g=await(d.isRTL==null?void 0:d.isRTL(i));let m=await d.getElementRects({reference:e,floating:i,strategy:o}),{x:v,y}=r0(m,s,g),_=s,w={},C=0;for(let N=0;N<p.length;N++){const{name:E,fn:T}=p[N],{x:R,y:B,data:z,reset:k}=await T({x:v,y,initialPlacement:s,placement:_,strategy:o,middlewareData:w,rects:m,platform:d,elements:{reference:e,floating:i}});v=R??v,y=B??y,w={...w,[E]:{...w[E],...z}},k&&C<=50&&(C++,typeof k=="object"&&(k.placement&&(_=k.placement),k.rects&&(m=k.rects===!0?await d.getElementRects({reference:e,floating:i,strategy:o}):k.rects),{x:v,y}=r0(m,_,g)),N=-1)}return{x:v,y,placement:_,strategy:o,middlewareData:w}};async function np(e,i){var l;i===void 0&&(i={});const{x:s,y:o,platform:u,rects:d,elements:p,strategy:g}=e,{boundary:m="clippingAncestors",rootBoundary:v="viewport",elementContext:y="floating",altBoundary:_=!1,padding:w=0}=_s(i,e),C=d1(w),E=p[_?y==="floating"?"reference":"floating":y],T=Ic(await u.getClippingRect({element:(l=await(u.isElement==null?void 0:u.isElement(E)))==null||l?E:E.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(p.floating)),boundary:m,rootBoundary:v,strategy:g})),R=y==="floating"?{x:s,y:o,width:d.floating.width,height:d.floating.height}:d.reference,B=await(u.getOffsetParent==null?void 0:u.getOffsetParent(p.floating)),z=await(u.isElement==null?void 0:u.isElement(B))?await(u.getScale==null?void 0:u.getScale(B))||{x:1,y:1}:{x:1,y:1},k=Ic(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:R,offsetParent:B,strategy:g}):R);return{top:(T.top-k.top+C.top)/z.y,bottom:(k.bottom-T.bottom+C.bottom)/z.y,left:(T.left-k.left+C.left)/z.x,right:(k.right-T.right+C.right)/z.x}}const tE=e=>({name:"arrow",options:e,async fn(i){const{x:l,y:s,placement:o,rects:u,platform:d,elements:p,middlewareData:g}=i,{element:m,padding:v=0}=_s(e,i)||{};if(m==null)return{};const y=d1(v),_={x:l,y:s},w=ip(o),C=ap(w),N=await d.getDimensions(m),E=w==="y",T=E?"top":"left",R=E?"bottom":"right",B=E?"clientHeight":"clientWidth",z=u.reference[C]+u.reference[w]-_[w]-u.floating[C],k=_[w]-u.reference[w],q=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m));let X=q?q[B]:0;(!X||!await(d.isElement==null?void 0:d.isElement(q)))&&(X=p.floating[B]||u.floating[C]);const ce=z/2-k/2,U=X/2-N[C]/2-1,G=$n(y[T],U),te=$n(y[R],U),ae=G,Q=X-N[C]-te,ne=X/2-N[C]/2+ce,ie=Ef(ae,ne,Q),I=!g.arrow&&xs(o)!=null&&ne!==ie&&u.reference[C]/2-(ne<ae?G:te)-N[C]/2<0,Z=I?ne<ae?ne-ae:ne-Q:0;return{[w]:_[w]+Z,data:{[w]:ie,centerOffset:ne-ie-Z,...I&&{alignmentOffset:Z}},reset:I}}}),aE=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var l,s;const{placement:o,middlewareData:u,rects:d,initialPlacement:p,platform:g,elements:m}=i,{mainAxis:v=!0,crossAxis:y=!0,fallbackPlacements:_,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:N=!0,...E}=_s(e,i);if((l=u.arrow)!=null&&l.alignmentOffset)return{};const T=On(o),R=Xi(p),B=On(p)===p,z=await(g.isRTL==null?void 0:g.isRTL(m.floating)),k=_||(B||!N?[Uc(p)]:WC(p)),q=C!=="none";!_&&q&&k.push(...KC(p,N,C,z));const X=[p,...k],ce=await np(i,E),U=[];let G=((s=u.flip)==null?void 0:s.overflows)||[];if(v&&U.push(ce[T]),y){const ne=YC(o,d,z);U.push(ce[ne[0]],ce[ne[1]])}if(G=[...G,{placement:o,overflows:U}],!U.every(ne=>ne<=0)){var te,ae;const ne=(((te=u.flip)==null?void 0:te.index)||0)+1,ie=X[ne];if(ie&&(!(y==="alignment"?R!==Xi(ie):!1)||G.every(J=>Xi(J.placement)===R?J.overflows[0]>0:!0)))return{data:{index:ne,overflows:G},reset:{placement:ie}};let I=(ae=G.filter(Z=>Z.overflows[0]<=0).sort((Z,J)=>Z.overflows[1]-J.overflows[1])[0])==null?void 0:ae.placement;if(!I)switch(w){case"bestFit":{var Q;const Z=(Q=G.filter(J=>{if(q){const se=Xi(J.placement);return se===R||se==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(se=>se>0).reduce((se,Se)=>se+Se,0)]).sort((J,se)=>J[1]-se[1])[0])==null?void 0:Q[0];Z&&(I=Z);break}case"initialPlacement":I=p;break}if(o!==I)return{reset:{placement:I}}}return{}}}},iE=new Set(["left","top"]);async function nE(e,i){const{placement:l,platform:s,elements:o}=e,u=await(s.isRTL==null?void 0:s.isRTL(o.floating)),d=On(l),p=xs(l),g=Xi(l)==="y",m=iE.has(d)?-1:1,v=u&&g?-1:1,y=_s(i,e);let{mainAxis:_,crossAxis:w,alignmentAxis:C}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return p&&typeof C=="number"&&(w=p==="end"?C*-1:C),g?{x:w*v,y:_*m}:{x:_*m,y:w*v}}const lE=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var l,s;const{x:o,y:u,placement:d,middlewareData:p}=i,g=await nE(i,e);return d===((l=p.offset)==null?void 0:l.placement)&&(s=p.arrow)!=null&&s.alignmentOffset?{}:{x:o+g.x,y:u+g.y,data:{...g,placement:d}}}}},sE=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:l,y:s,placement:o}=i,{mainAxis:u=!0,crossAxis:d=!1,limiter:p={fn:E=>{let{x:T,y:R}=E;return{x:T,y:R}}},...g}=_s(e,i),m={x:l,y:s},v=await np(i,g),y=Xi(On(o)),_=u1(y);let w=m[_],C=m[y];if(u){const E=_==="y"?"top":"left",T=_==="y"?"bottom":"right",R=w+v[E],B=w-v[T];w=Ef(R,w,B)}if(d){const E=y==="y"?"top":"left",T=y==="y"?"bottom":"right",R=C+v[E],B=C-v[T];C=Ef(R,C,B)}const N=p.fn({...i,[_]:w,[y]:C});return{...N,data:{x:N.x-l,y:N.y-s,enabled:{[_]:u,[y]:d}}}}}},rE=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(i){var l,s;const{placement:o,rects:u,platform:d,elements:p}=i,{apply:g=()=>{},...m}=_s(e,i),v=await np(i,m),y=On(o),_=xs(o),w=Xi(o)==="y",{width:C,height:N}=u.floating;let E,T;y==="top"||y==="bottom"?(E=y,T=_===(await(d.isRTL==null?void 0:d.isRTL(p.floating))?"start":"end")?"left":"right"):(T=y,E=_==="end"?"top":"bottom");const R=N-v.top-v.bottom,B=C-v.left-v.right,z=$n(N-v[E],R),k=$n(C-v[T],B),q=!i.middlewareData.shift;let X=z,ce=k;if((l=i.middlewareData.shift)!=null&&l.enabled.x&&(ce=B),(s=i.middlewareData.shift)!=null&&s.enabled.y&&(X=R),q&&!_){const G=ka(v.left,0),te=ka(v.right,0),ae=ka(v.top,0),Q=ka(v.bottom,0);w?ce=C-2*(G!==0||te!==0?G+te:ka(v.left,v.right)):X=N-2*(ae!==0||Q!==0?ae+Q:ka(v.top,v.bottom))}await g({...i,availableWidth:ce,availableHeight:X});const U=await d.getDimensions(p.floating);return C!==U.width||N!==U.height?{reset:{rects:!0}}:{}}}};function tu(){return typeof window<"u"}function ws(e){return h1(e)?(e.nodeName||"").toLowerCase():"#document"}function $a(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Ni(e){var i;return(i=(h1(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function h1(e){return tu()?e instanceof Node||e instanceof $a(e).Node:!1}function si(e){return tu()?e instanceof Element||e instanceof $a(e).Element:!1}function Ei(e){return tu()?e instanceof HTMLElement||e instanceof $a(e).HTMLElement:!1}function o0(e){return!tu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $a(e).ShadowRoot}const oE=new Set(["inline","contents"]);function Kr(e){const{overflow:i,overflowX:l,overflowY:s,display:o}=ri(e);return/auto|scroll|overlay|hidden|clip/.test(i+s+l)&&!oE.has(o)}const cE=new Set(["table","td","th"]);function uE(e){return cE.has(ws(e))}const dE=[":popover-open",":modal"];function au(e){return dE.some(i=>{try{return e.matches(i)}catch{return!1}})}const hE=["transform","translate","scale","rotate","perspective"],fE=["transform","translate","scale","rotate","perspective","filter"],pE=["paint","layout","strict","content"];function iu(e){const i=lp(),l=si(e)?ri(e):e;return hE.some(s=>l[s]?l[s]!=="none":!1)||(l.containerType?l.containerType!=="normal":!1)||!i&&(l.backdropFilter?l.backdropFilter!=="none":!1)||!i&&(l.filter?l.filter!=="none":!1)||fE.some(s=>(l.willChange||"").includes(s))||pE.some(s=>(l.contain||"").includes(s))}function mE(e){let i=jn(e);for(;Ei(i)&&!vs(i);){if(iu(i))return i;if(au(i))return null;i=jn(i)}return null}function lp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const gE=new Set(["html","body","#document"]);function vs(e){return gE.has(ws(e))}function ri(e){return $a(e).getComputedStyle(e)}function nu(e){return si(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function jn(e){if(ws(e)==="html")return e;const i=e.assignedSlot||e.parentNode||o0(e)&&e.host||Ni(e);return o0(i)?i.host:i}function f1(e){const i=jn(e);return vs(i)?e.ownerDocument?e.ownerDocument.body:e.body:Ei(i)&&Kr(i)?i:f1(i)}function qr(e,i,l){var s;i===void 0&&(i=[]),l===void 0&&(l=!0);const o=f1(e),u=o===((s=e.ownerDocument)==null?void 0:s.body),d=$a(o);if(u){const p=Tf(d);return i.concat(d,d.visualViewport||[],Kr(o)?o:[],p&&l?qr(p):[])}return i.concat(o,qr(o,[],l))}function Tf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function p1(e){const i=ri(e);let l=parseFloat(i.width)||0,s=parseFloat(i.height)||0;const o=Ei(e),u=o?e.offsetWidth:l,d=o?e.offsetHeight:s,p=Hc(l)!==u||Hc(s)!==d;return p&&(l=u,s=d),{width:l,height:s,$:p}}function sp(e){return si(e)?e:e.contextElement}function us(e){const i=sp(e);if(!Ei(i))return xi(1);const l=i.getBoundingClientRect(),{width:s,height:o,$:u}=p1(i);let d=(u?Hc(l.width):l.width)/s,p=(u?Hc(l.height):l.height)/o;return(!d||!Number.isFinite(d))&&(d=1),(!p||!Number.isFinite(p))&&(p=1),{x:d,y:p}}const vE=xi(0);function m1(e){const i=$a(e);return!lp()||!i.visualViewport?vE:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function bE(e,i,l){return i===void 0&&(i=!1),!l||i&&l!==$a(e)?!1:i}function vl(e,i,l,s){i===void 0&&(i=!1),l===void 0&&(l=!1);const o=e.getBoundingClientRect(),u=sp(e);let d=xi(1);i&&(s?si(s)&&(d=us(s)):d=us(e));const p=bE(u,l,s)?m1(u):xi(0);let g=(o.left+p.x)/d.x,m=(o.top+p.y)/d.y,v=o.width/d.x,y=o.height/d.y;if(u){const _=$a(u),w=s&&si(s)?$a(s):s;let C=_,N=Tf(C);for(;N&&s&&w!==C;){const E=us(N),T=N.getBoundingClientRect(),R=ri(N),B=T.left+(N.clientLeft+parseFloat(R.paddingLeft))*E.x,z=T.top+(N.clientTop+parseFloat(R.paddingTop))*E.y;g*=E.x,m*=E.y,v*=E.x,y*=E.y,g+=B,m+=z,C=$a(N),N=Tf(C)}}return Ic({width:v,height:y,x:g,y:m})}function lu(e,i){const l=nu(e).scrollLeft;return i?i.left+l:vl(Ni(e)).left+l}function g1(e,i){const l=e.getBoundingClientRect(),s=l.left+i.scrollLeft-lu(e,l),o=l.top+i.scrollTop;return{x:s,y:o}}function yE(e){let{elements:i,rect:l,offsetParent:s,strategy:o}=e;const u=o==="fixed",d=Ni(s),p=i?au(i.floating):!1;if(s===d||p&&u)return l;let g={scrollLeft:0,scrollTop:0},m=xi(1);const v=xi(0),y=Ei(s);if((y||!y&&!u)&&((ws(s)!=="body"||Kr(d))&&(g=nu(s)),Ei(s))){const w=vl(s);m=us(s),v.x=w.x+s.clientLeft,v.y=w.y+s.clientTop}const _=d&&!y&&!u?g1(d,g):xi(0);return{width:l.width*m.x,height:l.height*m.y,x:l.x*m.x-g.scrollLeft*m.x+v.x+_.x,y:l.y*m.y-g.scrollTop*m.y+v.y+_.y}}function _E(e){return Array.from(e.getClientRects())}function xE(e){const i=Ni(e),l=nu(e),s=e.ownerDocument.body,o=ka(i.scrollWidth,i.clientWidth,s.scrollWidth,s.clientWidth),u=ka(i.scrollHeight,i.clientHeight,s.scrollHeight,s.clientHeight);let d=-l.scrollLeft+lu(e);const p=-l.scrollTop;return ri(s).direction==="rtl"&&(d+=ka(i.clientWidth,s.clientWidth)-o),{width:o,height:u,x:d,y:p}}const c0=25;function wE(e,i){const l=$a(e),s=Ni(e),o=l.visualViewport;let u=s.clientWidth,d=s.clientHeight,p=0,g=0;if(o){u=o.width,d=o.height;const v=lp();(!v||v&&i==="fixed")&&(p=o.offsetLeft,g=o.offsetTop)}const m=lu(s);if(m<=0){const v=s.ownerDocument,y=v.body,_=getComputedStyle(y),w=v.compatMode==="CSS1Compat"&&parseFloat(_.marginLeft)+parseFloat(_.marginRight)||0,C=Math.abs(s.clientWidth-y.clientWidth-w);C<=c0&&(u-=C)}else m<=c0&&(u+=m);return{width:u,height:d,x:p,y:g}}const SE=new Set(["absolute","fixed"]);function CE(e,i){const l=vl(e,!0,i==="fixed"),s=l.top+e.clientTop,o=l.left+e.clientLeft,u=Ei(e)?us(e):xi(1),d=e.clientWidth*u.x,p=e.clientHeight*u.y,g=o*u.x,m=s*u.y;return{width:d,height:p,x:g,y:m}}function u0(e,i,l){let s;if(i==="viewport")s=wE(e,l);else if(i==="document")s=xE(Ni(e));else if(si(i))s=CE(i,l);else{const o=m1(e);s={x:i.x-o.x,y:i.y-o.y,width:i.width,height:i.height}}return Ic(s)}function v1(e,i){const l=jn(e);return l===i||!si(l)||vs(l)?!1:ri(l).position==="fixed"||v1(l,i)}function EE(e,i){const l=i.get(e);if(l)return l;let s=qr(e,[],!1).filter(p=>si(p)&&ws(p)!=="body"),o=null;const u=ri(e).position==="fixed";let d=u?jn(e):e;for(;si(d)&&!vs(d);){const p=ri(d),g=iu(d);!g&&p.position==="fixed"&&(o=null),(u?!g&&!o:!g&&p.position==="static"&&!!o&&SE.has(o.position)||Kr(d)&&!g&&v1(e,d))?s=s.filter(v=>v!==d):o=p,d=jn(d)}return i.set(e,s),s}function AE(e){let{element:i,boundary:l,rootBoundary:s,strategy:o}=e;const d=[...l==="clippingAncestors"?au(i)?[]:EE(i,this._c):[].concat(l),s],p=d[0],g=d.reduce((m,v)=>{const y=u0(i,v,o);return m.top=ka(y.top,m.top),m.right=$n(y.right,m.right),m.bottom=$n(y.bottom,m.bottom),m.left=ka(y.left,m.left),m},u0(i,p,o));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function TE(e){const{width:i,height:l}=p1(e);return{width:i,height:l}}function NE(e,i,l){const s=Ei(i),o=Ni(i),u=l==="fixed",d=vl(e,!0,u,i);let p={scrollLeft:0,scrollTop:0};const g=xi(0);function m(){g.x=lu(o)}if(s||!s&&!u)if((ws(i)!=="body"||Kr(o))&&(p=nu(i)),s){const w=vl(i,!0,u,i);g.x=w.x+i.clientLeft,g.y=w.y+i.clientTop}else o&&m();u&&!s&&o&&m();const v=o&&!s&&!u?g1(o,p):xi(0),y=d.left+p.scrollLeft-g.x-v.x,_=d.top+p.scrollTop-g.y-v.y;return{x:y,y:_,width:d.width,height:d.height}}function Bh(e){return ri(e).position==="static"}function d0(e,i){if(!Ei(e)||ri(e).position==="fixed")return null;if(i)return i(e);let l=e.offsetParent;return Ni(e)===l&&(l=l.ownerDocument.body),l}function b1(e,i){const l=$a(e);if(au(e))return l;if(!Ei(e)){let o=jn(e);for(;o&&!vs(o);){if(si(o)&&!Bh(o))return o;o=jn(o)}return l}let s=d0(e,i);for(;s&&uE(s)&&Bh(s);)s=d0(s,i);return s&&vs(s)&&Bh(s)&&!iu(s)?l:s||mE(e)||l}const ME=async function(e){const i=this.getOffsetParent||b1,l=this.getDimensions,s=await l(e.floating);return{reference:NE(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function kE(e){return ri(e).direction==="rtl"}const Oc={convertOffsetParentRelativeRectToViewportRelativeRect:yE,getDocumentElement:Ni,getClippingRect:AE,getOffsetParent:b1,getElementRects:ME,getClientRects:_E,getDimensions:TE,getScale:us,isElement:si,isRTL:kE};function y1(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function $E(e,i){let l=null,s;const o=Ni(e);function u(){var p;clearTimeout(s),(p=l)==null||p.disconnect(),l=null}function d(p,g){p===void 0&&(p=!1),g===void 0&&(g=1),u();const m=e.getBoundingClientRect(),{left:v,top:y,width:_,height:w}=m;if(p||i(),!_||!w)return;const C=Sc(y),N=Sc(o.clientWidth-(v+_)),E=Sc(o.clientHeight-(y+w)),T=Sc(v),B={rootMargin:-C+"px "+-N+"px "+-E+"px "+-T+"px",threshold:ka(0,$n(1,g))||1};let z=!0;function k(q){const X=q[0].intersectionRatio;if(X!==g){if(!z)return d();X?d(!1,X):s=setTimeout(()=>{d(!1,1e-7)},1e3)}X===1&&!y1(m,e.getBoundingClientRect())&&d(),z=!1}try{l=new IntersectionObserver(k,{...B,root:o.ownerDocument})}catch{l=new IntersectionObserver(k,B)}l.observe(e)}return d(!0),u}function OE(e,i,l,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:u=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:g=!1}=s,m=sp(e),v=o||u?[...m?qr(m):[],...qr(i)]:[];v.forEach(T=>{o&&T.addEventListener("scroll",l,{passive:!0}),u&&T.addEventListener("resize",l)});const y=m&&p?$E(m,l):null;let _=-1,w=null;d&&(w=new ResizeObserver(T=>{let[R]=T;R&&R.target===m&&w&&(w.unobserve(i),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var B;(B=w)==null||B.observe(i)})),l()}),m&&!g&&w.observe(m),w.observe(i));let C,N=g?vl(e):null;g&&E();function E(){const T=vl(e);N&&!y1(N,T)&&l(),N=T,C=requestAnimationFrame(E)}return l(),()=>{var T;v.forEach(R=>{o&&R.removeEventListener("scroll",l),u&&R.removeEventListener("resize",l)}),y?.(),(T=w)==null||T.disconnect(),w=null,g&&cancelAnimationFrame(C)}}const jE=lE,RE=sE,LE=aE,h0=rE,DE=tE,zE=(e,i,l)=>{const s=new Map,o={platform:Oc,...l},u={...o.platform,_c:s};return eE(e,i,{...o,platform:u})};function BE(e){return HE(e)}function Hh(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function HE(e){for(let i=e;i;i=Hh(i))if(i instanceof Element&&getComputedStyle(i).display==="none")return null;for(let i=Hh(e);i;i=Hh(i)){if(!(i instanceof Element))continue;const l=getComputedStyle(i);if(l.display!=="contents"&&(l.position!=="static"||iu(l)||i.tagName==="BODY"))return i}return null}function UE(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var Je=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),l=this.placement.includes("top")||this.placement.includes("bottom");let s=0,o=0,u=0,d=0,p=0,g=0,m=0,v=0;l?e.top<i.top?(s=e.left,o=e.bottom,u=e.right,d=e.bottom,p=i.left,g=i.top,m=i.right,v=i.top):(s=i.left,o=i.bottom,u=i.right,d=i.bottom,p=e.left,g=e.top,m=e.right,v=e.top):e.left<i.left?(s=e.right,o=e.top,u=i.left,d=i.top,p=e.right,g=e.bottom,m=i.left,v=i.bottom):(s=i.right,o=i.top,u=e.left,d=e.top,p=i.right,g=i.bottom,m=e.left,v=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${u}px`),this.style.setProperty("--hover-bridge-top-right-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${m}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${v}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||UE(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=OE(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[jE({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(h0({apply:({rects:l})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${l.reference.width}px`:"",this.popup.style.height=o?`${l.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(LE({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(RE({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(h0({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:l,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${l}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(DE({element:this.arrowEl,padding:this.arrowPadding}));const i=this.strategy==="absolute"?l=>Oc.getOffsetParent(l,BE):Oc.getOffsetParent;zE(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Gr(Ki({},Oc),{getOffsetParent:i})}).then(({x:l,y:s,middlewareData:o,placement:u})=>{const d=this.localize.dir()==="rtl",p={top:"bottom",right:"left",bottom:"top",left:"right"}[u.split("-")[0]];if(this.setAttribute("data-current-placement",u),Object.assign(this.popup.style,{left:`${l}px`,top:`${s}px`}),this.arrow){const g=o.arrow.x,m=o.arrow.y;let v="",y="",_="",w="";if(this.arrowPlacement==="start"){const C=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";v=typeof m=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",y=d?C:"",w=d?"":C}else if(this.arrowPlacement==="end"){const C=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";y=d?"":C,w=d?C:"",_=typeof m=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(w=typeof g=="number"?"calc(50% - var(--arrow-size-diagonal))":"",v=typeof m=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(w=typeof g=="number"?`${g}px`:"",v=typeof m=="number"?`${m}px`:"");Object.assign(this.arrowEl.style,{top:v,right:y,bottom:_,left:w,[p]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return pe`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ze({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Ze({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?pe`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Je.styles=[it,VC];S([xe(".popup")],Je.prototype,"popup",2);S([xe(".popup__arrow")],Je.prototype,"arrowEl",2);S([$()],Je.prototype,"anchor",2);S([$({type:Boolean,reflect:!0})],Je.prototype,"active",2);S([$({reflect:!0})],Je.prototype,"placement",2);S([$({reflect:!0})],Je.prototype,"strategy",2);S([$({type:Number})],Je.prototype,"distance",2);S([$({type:Number})],Je.prototype,"skidding",2);S([$({type:Boolean})],Je.prototype,"arrow",2);S([$({attribute:"arrow-placement"})],Je.prototype,"arrowPlacement",2);S([$({attribute:"arrow-padding",type:Number})],Je.prototype,"arrowPadding",2);S([$({type:Boolean})],Je.prototype,"flip",2);S([$({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(i=>i.trim()).filter(i=>i!==""),toAttribute:e=>e.join(" ")}})],Je.prototype,"flipFallbackPlacements",2);S([$({attribute:"flip-fallback-strategy"})],Je.prototype,"flipFallbackStrategy",2);S([$({type:Object})],Je.prototype,"flipBoundary",2);S([$({attribute:"flip-padding",type:Number})],Je.prototype,"flipPadding",2);S([$({type:Boolean})],Je.prototype,"shift",2);S([$({type:Object})],Je.prototype,"shiftBoundary",2);S([$({attribute:"shift-padding",type:Number})],Je.prototype,"shiftPadding",2);S([$({attribute:"auto-size"})],Je.prototype,"autoSize",2);S([$()],Je.prototype,"sync",2);S([$({type:Object})],Je.prototype,"autoSizeBoundary",2);S([$({attribute:"auto-size-padding",type:Number})],Je.prototype,"autoSizePadding",2);S([$({attribute:"hover-bridge",type:Boolean})],Je.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nf=class extends eu{constructor(i){if(super(i),this.it=ot,i.type!==Wi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===ot||i==null)return this._t=void 0,this.it=i;if(i===Ya)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const l=[i];return l.raw=l,this._t={_$litType$:this.constructor.resultType,strings:l,values:[]}}};Nf.directiveName="unsafeHTML",Nf.resultType=1;const IE=Jc(Nf);var Me=class extends Ue{constructor(){super(...arguments),this.formControlController=new bs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new oi(this,"help-text","label"),this.localize=new ia(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>pe`
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
        @sl-remove=${i=>this.handleTagRemove(i,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const i=e.composedPath();this&&!i.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const i=e.target,l=i.closest(".select__clear")!==null,s=i.closest("sl-icon-button")!==null;if(!(l||s)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),u=o.indexOf(this.currentOption);let d=Math.max(0,u);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(d=u+1,d>o.length-1&&(d=0)):e.key==="ArrowUp"?(d=u-1,d<0&&(d=o.length-1)):e.key==="Home"?d=0:e.key==="End"&&(d=o.length-1),this.setCurrentOption(o[d])}if(e.key&&e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const u of o)if(u.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(u);break}}}},this.handleDocumentMouseDown=e=>{const i=e.composedPath();this&&!i.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const l=e.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||l||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const l=e.target.closest("sl-option"),s=this.value;l&&!l.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(l):this.setSelectedOptions(l),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),i=this.valueHasChanged?this.value:this.defaultValue,l=Array.isArray(i)?i:[i],s=[];e.forEach(o=>s.push(o.value)),this.setSelectedOptions(e.filter(o=>l.includes(o.value)))}handleTagRemove(e,i){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(l=>{l.current=!1,l.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const i=this.getAllOptions(),l=Array.isArray(e)?e:[e];i.forEach(s=>s.selected=!1),l.length&&l.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(e,i){i===!0||i===!1?e.selected=i:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,i,l;const s=this.getAllOptions();this.selectedOptions=s.filter(u=>u.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(u=>u.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const u=this.selectedOptions[0];this.value=(e=u?.value)!=null?e:"",this.displayLabel=(l=(i=u?.getTextLabel)==null?void 0:i.call(u))!=null?l:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,i)=>{if(i<this.maxOptionsVisible||this.maxOptionsVisible<=0){const l=this.getTag(e,i);return pe`<div @sl-remove=${s=>this.handleTagRemove(s,e)}>
          ${typeof l=="string"?IE(l):l}
        </div>`}else if(i===this.maxOptionsVisible)return pe`<sl-tag size=${this.size}>+${this.selectedOptions.length-i}</sl-tag>`;return pe``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,i,l){if(super.attributeChangedCallback(e,i,l),e==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const l=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=l}const e=this.getAllOptions(),i=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(l=>i.includes(l.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ga(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:i}=ta(this,"select.show",{dir:this.localize.dir()});await aa(this.popup.popup,e,i),this.currentOption&&Cf(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ga(this);const{keyframes:e,options:i}=ta(this,"select.hide",{dir:this.localize.dir()});await aa(this.popup.popup,e,i),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ci(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!e,s=this.helpText?!0:!!i,o=this.clearable&&!this.disabled&&this.value.length>0,u=this.placeholder&&this.value&&this.value.length<=0;return pe`
      <div
        part="form-control"
        class=${Ze({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":s})}
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
            class=${Ze({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":u,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?pe`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?pe`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Me.styles=[it,Zr,PC];Me.dependencies={"sl-icon":Ut,"sl-popup":Je,"sl-tag":bl};S([xe(".select")],Me.prototype,"popup",2);S([xe(".select__combobox")],Me.prototype,"combobox",2);S([xe(".select__display-input")],Me.prototype,"displayInput",2);S([xe(".select__value-input")],Me.prototype,"valueInput",2);S([xe(".select__listbox")],Me.prototype,"listbox",2);S([Ke()],Me.prototype,"hasFocus",2);S([Ke()],Me.prototype,"displayLabel",2);S([Ke()],Me.prototype,"currentOption",2);S([Ke()],Me.prototype,"selectedOptions",2);S([Ke()],Me.prototype,"valueHasChanged",2);S([$()],Me.prototype,"name",2);S([Ke()],Me.prototype,"value",1);S([$({attribute:"value"})],Me.prototype,"defaultValue",2);S([$({reflect:!0})],Me.prototype,"size",2);S([$()],Me.prototype,"placeholder",2);S([$({type:Boolean,reflect:!0})],Me.prototype,"multiple",2);S([$({attribute:"max-options-visible",type:Number})],Me.prototype,"maxOptionsVisible",2);S([$({type:Boolean,reflect:!0})],Me.prototype,"disabled",2);S([$({type:Boolean})],Me.prototype,"clearable",2);S([$({type:Boolean,reflect:!0})],Me.prototype,"open",2);S([$({type:Boolean})],Me.prototype,"hoist",2);S([$({type:Boolean,reflect:!0})],Me.prototype,"filled",2);S([$({type:Boolean,reflect:!0})],Me.prototype,"pill",2);S([$()],Me.prototype,"label",2);S([$({reflect:!0})],Me.prototype,"placement",2);S([$({attribute:"help-text"})],Me.prototype,"helpText",2);S([$({reflect:!0})],Me.prototype,"form",2);S([$({type:Boolean,reflect:!0})],Me.prototype,"required",2);S([$()],Me.prototype,"getTag",2);S([Re("disabled",{waitUntilFirstUpdate:!0})],Me.prototype,"handleDisabledChange",1);S([Re(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Me.prototype,"handleValueChange",1);S([Re("open",{waitUntilFirstUpdate:!0})],Me.prototype,"handleOpenChange",1);vt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});vt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var PE="sl-select";Me.define("sl-select");var VE=ct({tagName:PE,elementClass:Me,react:rt,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),ua=VE,qE=Ge`
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
`,Oa=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let i="";return[...e].forEach(l=>{l.nodeType===Node.ELEMENT_NODE&&(l.hasAttribute("slot")||(i+=l.textContent)),l.nodeType===Node.TEXT_NODE&&(i+=l.textContent)}),i.trim()}render(){return pe`
      <div
        part="base"
        class=${Ze({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Oa.styles=[it,qE];Oa.dependencies={"sl-icon":Ut};S([xe(".option__label")],Oa.prototype,"defaultSlot",2);S([Ke()],Oa.prototype,"current",2);S([Ke()],Oa.prototype,"selected",2);S([Ke()],Oa.prototype,"hasHover",2);S([$({reflect:!0})],Oa.prototype,"value",2);S([$({type:Boolean,reflect:!0})],Oa.prototype,"disabled",2);S([Re("disabled")],Oa.prototype,"handleDisabledChange",1);S([Re("selected")],Oa.prototype,"handleSelectedChange",1);S([Re("value")],Oa.prototype,"handleValueChange",1);var FE="sl-option";Oa.define("sl-option");var GE=ct({tagName:FE,elementClass:Oa,react:rt,events:{},displayName:"SlOption"}),Pe=GE,YE=Ge`
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
`,ui=class extends Ue{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=pe`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let i=pe``;return this.initials?i=pe`<div part="initials" class="avatar__initials">${this.initials}</div>`:i=pe`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,pe`
      <div
        part="base"
        class=${Ze({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:i}
      </div>
    `}};ui.styles=[it,YE];ui.dependencies={"sl-icon":Ut};S([Ke()],ui.prototype,"hasError",2);S([$()],ui.prototype,"image",2);S([$()],ui.prototype,"label",2);S([$()],ui.prototype,"initials",2);S([$()],ui.prototype,"loading",2);S([$({reflect:!0})],ui.prototype,"shape",2);S([Re("image")],ui.prototype,"handleImageChange",1);var WE="sl-avatar";ui.define("sl-avatar");var XE=ct({tagName:WE,elementClass:ui,react:rt,events:{onSlError:"sl-error"},displayName:"SlAvatar"}),QE=XE;const ZE="_avatar_744bf_1",KE={avatar:ZE};function qe({image:e,name:i="",shape:l="circle",className:s,style:o}){const u=M.useMemo(()=>{if(!i)return"";const d=i.trim().split(/\s+/);return d.length===0?"":d.length===1?d[0].charAt(0).toUpperCase():(d[0].charAt(0)+d[d.length-1].charAt(0)).toUpperCase()},[i]);return f.jsx(QE,{image:e??void 0,label:i,initials:u,shape:l,className:`${KE.avatar} ${s||""}`,style:o})}var JE=Object.defineProperty,e5=Object.defineProperties,t5=Object.getOwnPropertyDescriptors,Pc=Object.getOwnPropertySymbols,_1=Object.prototype.hasOwnProperty,x1=Object.prototype.propertyIsEnumerable,f0=(e,i,l)=>i in e?JE(e,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[i]=l,En=(e,i)=>{for(var l in i||(i={}))_1.call(i,l)&&f0(e,l,i[l]);if(Pc)for(var l of Pc(i))x1.call(i,l)&&f0(e,l,i[l]);return e},Uh=(e,i)=>e5(e,t5(i)),a5=(e,i)=>{var l={};for(var s in e)_1.call(e,s)&&i.indexOf(s)<0&&(l[s]=e[s]);if(e!=null&&Pc)for(var s of Pc(e))i.indexOf(s)<0&&x1.call(e,s)&&(l[s]=e[s]);return l},i5=(e,i,l)=>new Promise((s,o)=>{var u=g=>{try{p(l.next(g))}catch(m){o(m)}},d=g=>{try{p(l.throw(g))}catch(m){o(m)}},p=g=>g.done?s(g.value):Promise.resolve(g.value).then(u,d);p((l=l.apply(e,i)).next())}),n5=e=>{const i=/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;return!!e.match(i)},w1=(e,i)=>new Promise((l,s)=>{const o=new Image;o.onload=()=>l(o),o.onerror=s,!n5(e)&&i&&(o.crossOrigin=i),o.src=e}),l5=e=>new Promise((i,l)=>{const s=new FileReader;s.onload=o=>{var u;try{if(!((u=o?.target)!=null&&u.result))throw new Error("No image data");const d=w1(o.target.result);i(d)}catch(d){l(d)}},s.readAsDataURL(e)}),s5=()=>{let e=!1;try{const i=Object.defineProperty({},"passive",{get:function(){e=!0}}),l=()=>{};window.addEventListener("test",l,i),window.removeEventListener("test",l,i)}catch{e=!1}return e},p0=typeof window<"u"&&typeof navigator<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),r5=typeof File<"u",m0=(e,i,l,s,o,u)=>{if(u===0)e.rect(i,l,s,o);else{const d=s-u,p=o-u;e.translate(i,l),e.arc(u,u,u,Math.PI,Math.PI*1.5),e.lineTo(d,0),e.arc(d,u,u,Math.PI*1.5,Math.PI*2),e.lineTo(s,p),e.arc(d,p,u,Math.PI*2,Math.PI*.5),e.lineTo(u,o),e.arc(u,p,u,Math.PI*.5,Math.PI),e.closePath(),e.translate(-i,-l)}},o5=(e,i,l,s,o,u)=>{e.fillStyle=u;const d=s/3,p=o/3;e.fillRect(i,l,1,o),e.fillRect(d+i,l,1,o),e.fillRect(d*2+i,l,1,o),e.fillRect(d*3+i,l,1,o),e.fillRect(d*4+i,l,1,o),e.fillRect(i,l,s,1),e.fillRect(i,p+l,s,1),e.fillRect(i,p*2+l,s,1),e.fillRect(i,p*3+l,s,1),e.fillRect(i,p*4+l,s,1)},Ih={x:.5,y:.5},S1=class extends L.Component{constructor(){super(...arguments),this.canvas=L.createRef(),this.pixelRatio=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,this.state={drag:!1,my:void 0,mx:void 0,image:Ih},this.handleImageReady=i=>{var l,s;const o=Uh(En({},this.getInitialSize(i.width,i.height)),{resource:i,x:.5,y:.5});this.setState({drag:!1,image:o},this.props.onImageReady),(s=(l=this.props).onLoadSuccess)==null||s.call(l,o)},this.clearImage=()=>{const i=this.getCanvas();this.getContext().clearRect(0,0,i.width,i.height),this.setState({image:Ih})},this.handleMouseDown=i=>{i.preventDefault(),this.setState({drag:!0,mx:void 0,my:void 0})},this.handleTouchStart=i=>{this.setState({drag:!0,mx:void 0,my:void 0})},this.handleMouseUp=()=>{var i,l;this.state.drag&&(this.setState({drag:!1}),(l=(i=this.props).onMouseUp)==null||l.call(i))},this.handleMouseMove=i=>{var l,s,o,u;if(!this.state.drag)return;i.preventDefault();const d="targetTouches"in i?i.targetTouches[0].pageX:i.clientX,p="targetTouches"in i?i.targetTouches[0].pageY:i.clientY;this.setState({mx:d,my:p});let g=this.props.rotate;if(g%=360,g=g<0?g+360:g,this.state.mx&&this.state.my&&this.state.image.width&&this.state.image.height){const m=this.state.mx-d,v=this.state.my-p,y=this.state.image.width*this.props.scale,_=this.state.image.height*this.props.scale;let{x:w,y:C}=this.getCroppingRect();w*=y,C*=_;const N=X=>X*(Math.PI/180),E=Math.cos(N(g)),T=Math.sin(N(g)),R=w+m*E+v*T,B=C+-m*T+v*E,z=1/this.props.scale*this.getXScale(),k=1/this.props.scale*this.getYScale(),q={x:R/y+z/2,y:B/_+k/2};(s=(l=this.props).onPositionChange)==null||s.call(l,q),this.setState({image:En(En({},this.state.image),q)})}(u=(o=this.props).onMouseMove)==null||u.call(o,i)}}componentDidMount(){this.props.disableHiDPIScaling&&(this.pixelRatio=1);const i=this.getContext();this.props.image&&this.loadImage(this.props.image),this.paint(i);const l=s5()?{passive:!1}:!1;document.addEventListener("mousemove",this.handleMouseMove,l),document.addEventListener("mouseup",this.handleMouseUp,l),p0&&(document.addEventListener("touchmove",this.handleMouseMove,l),document.addEventListener("touchend",this.handleMouseUp,l))}componentDidUpdate(i,l){var s,o;this.props.image&&(this.props.image!==i.image||this.props.width!==i.width||this.props.height!==i.height||this.props.backgroundColor!==i.backgroundColor)?this.loadImage(this.props.image):!this.props.image&&l.image!==Ih&&this.clearImage();const u=this.getContext();u.clearRect(0,0,this.getCanvas().width,this.getCanvas().height),this.paint(u),this.paintImage(u,this.state.image,this.props.border),(i.image!==this.props.image||i.width!==this.props.width||i.height!==this.props.height||i.position!==this.props.position||i.scale!==this.props.scale||i.rotate!==this.props.rotate||l.my!==this.state.my||l.mx!==this.state.mx||l.image.x!==this.state.image.x||l.image.y!==this.state.image.y)&&((o=(s=this.props).onImageChange)==null||o.call(s))}getCanvas(){if(!this.canvas.current)throw new Error("No canvas found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return this.canvas.current}getContext(){const i=this.getCanvas().getContext("2d");if(!i)throw new Error("No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return i}componentWillUnmount(){document.removeEventListener("mousemove",this.handleMouseMove,!1),document.removeEventListener("mouseup",this.handleMouseUp,!1),p0&&(document.removeEventListener("touchmove",this.handleMouseMove,!1),document.removeEventListener("touchend",this.handleMouseUp,!1))}isVertical(){return!this.props.disableCanvasRotation&&this.props.rotate%180!==0}getBorders(i=this.props.border){return Array.isArray(i)?i:[i,i]}getDimensions(){const{width:i,height:l,rotate:s,border:o}=this.props,u={width:0,height:0},[d,p]=this.getBorders(o);return this.isVertical()?(u.width=l,u.height=i):(u.width=i,u.height=l),u.width+=d*2,u.height+=p*2,{canvas:u,rotate:s,width:i,height:l,border:o}}getImage(){const i=this.getCroppingRect(),l=this.state.image;if(!l.resource)throw new Error("No image resource available, please report this to: https://github.com/mosch/react-avatar-editor/issues");i.x*=l.resource.width,i.y*=l.resource.height,i.width*=l.resource.width,i.height*=l.resource.height;const s=document.createElement("canvas");this.isVertical()?(s.width=i.height,s.height=i.width):(s.width=i.width,s.height=i.height);const o=s.getContext("2d");if(!o)throw new Error("No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues");return o.translate(s.width/2,s.height/2),o.rotate(this.props.rotate*Math.PI/180),o.translate(-(s.width/2),-(s.height/2)),this.isVertical()&&o.translate((s.width-s.height)/2,(s.height-s.width)/2),this.props.backgroundColor&&(o.fillStyle=this.props.backgroundColor,o.fillRect(0,0,s.width,s.height)),o.drawImage(l.resource,-i.x,-i.y),s}getImageScaledToCanvas(){const{width:i,height:l}=this.getDimensions(),s=document.createElement("canvas");return this.isVertical()?(s.width=l,s.height=i):(s.width=i,s.height=l),this.paintImage(s.getContext("2d"),this.state.image,0,1),s}getXScale(){if(!this.state.image.width||!this.state.image.height)throw new Error("Image dimension is unknown.");const i=this.props.width/this.props.height,l=this.state.image.width/this.state.image.height;return Math.min(1,i/l)}getYScale(){if(!this.state.image.width||!this.state.image.height)throw new Error("Image dimension is unknown.");const i=this.props.height/this.props.width,l=this.state.image.height/this.state.image.width;return Math.min(1,i/l)}getCroppingRect(){const i=this.props.position||{x:this.state.image.x,y:this.state.image.y},l=1/this.props.scale*this.getXScale(),s=1/this.props.scale*this.getYScale(),o={x:i.x-l/2,y:i.y-s/2,width:l,height:s};let u=0,d=1-o.width,p=0,g=1-o.height;return(this.props.disableBoundaryChecks||l>1||s>1)&&(u=-o.width,d=1,p=-o.height,g=1),Uh(En({},o),{x:Math.max(u,Math.min(o.x,d)),y:Math.max(p,Math.min(o.y,g))})}loadImage(i){return i5(this,null,function*(){var l,s,o,u;if(r5&&i instanceof File)try{const d=yield l5(i);this.handleImageReady(d)}catch{(s=(l=this.props).onLoadFailure)==null||s.call(l)}else if(typeof i=="string")try{const d=yield w1(i,this.props.crossOrigin);this.handleImageReady(d)}catch{(u=(o=this.props).onLoadFailure)==null||u.call(o)}})}getInitialSize(i,l){let s,o;const u=this.getDimensions(),d=u.height/u.width,p=l/i;return d>p?(s=u.height,o=Math.round(i*(s/l))):(o=u.width,s=Math.round(l*(o/i))),{height:s,width:o}}paintImage(i,l,s,o=this.pixelRatio){if(!l.resource)return;const u=this.calculatePosition(l,s);i.save(),i.translate(i.canvas.width/2,i.canvas.height/2),i.rotate(this.props.rotate*Math.PI/180),i.translate(-(i.canvas.width/2),-(i.canvas.height/2)),this.isVertical()&&i.translate((i.canvas.width-i.canvas.height)/2,(i.canvas.height-i.canvas.width)/2),i.scale(o,o),i.globalCompositeOperation="destination-over",i.drawImage(l.resource,u.x,u.y,u.width,u.height),this.props.backgroundColor&&(i.fillStyle=this.props.backgroundColor,i.fillRect(0,0,i.canvas.width,i.canvas.height)),i.restore()}calculatePosition(i=this.state.image,l){const[s,o]=this.getBorders(l);if(!i.width||!i.height)throw new Error("Image dimension is unknown.");const u=this.getCroppingRect(),d=i.width*this.props.scale,p=i.height*this.props.scale;let g=-u.x*d,m=-u.y*p;return this.isVertical()?(g+=o,m+=s):(g+=s,m+=o),{x:g,y:m,height:p,width:d}}paint(i){i.save(),i.scale(this.pixelRatio,this.pixelRatio),i.translate(0,0),i.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";let l=this.props.borderRadius;const s=this.getDimensions(),[o,u]=this.getBorders(s.border),d=s.canvas.height,p=s.canvas.width;l=Math.max(l,0),l=Math.min(l,p/2-o,d/2-u),i.beginPath(),m0(i,o,u,p-o*2,d-u*2,l),i.rect(p,0,-p,d),i.fill("evenodd"),this.props.borderColor&&(i.strokeStyle="rgba("+this.props.borderColor.slice(0,4).join(",")+")",i.lineWidth=1,i.beginPath(),m0(i,o+.5,u+.5,p-o*2-1,d-u*2-1,l),i.stroke()),this.props.showGrid&&o5(i,o,u,p-o*2,d-u*2,this.props.gridColor),i.restore()}render(){const i=this.props,{scale:l,rotate:s,image:o,border:u,borderRadius:d,width:p,height:g,position:m,color:v,backgroundColor:y,style:_,crossOrigin:w,onLoadFailure:C,onLoadSuccess:N,onImageReady:E,onImageChange:T,onMouseUp:R,onMouseMove:B,onPositionChange:z,disableBoundaryChecks:k,disableHiDPIScaling:q,disableCanvasRotation:X,showGrid:ce,gridColor:U,borderColor:G}=i,te=a5(i,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation","showGrid","gridColor","borderColor"]),ae=this.getDimensions(),Q={width:ae.canvas.width,height:ae.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},ne={width:ae.canvas.width*this.pixelRatio,height:ae.canvas.height*this.pixelRatio,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,style:En(En({},Q),_)};return L.createElement("canvas",Uh(En(En({},ne),te),{ref:this.canvas}))}};S1.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],showGrid:!1,gridColor:"#666",disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0};var c5=S1,u5=Ge`
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
`,di=class extends Ue{constructor(){super(...arguments),this.hasSlotController=new oi(this,"footer"),this.localize=new ia(this),this.modal=new r1(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Hr(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ur(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const l=ta(this,"dialog.denyClose",{dir:this.localize.dir()});aa(this.panel,l.keyframes,l.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Hr(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ga(this.dialog),ga(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const i=ta(this,"dialog.show",{dir:this.localize.dir()}),l=ta(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([aa(this.panel,i.keyframes,i.options),aa(this.overlay,l.keyframes,l.options)]),this.emit("sl-after-show")}else{o1(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ga(this.dialog),ga(this.overlay)]);const e=ta(this,"dialog.hide",{dir:this.localize.dir()}),i=ta(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([aa(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),aa(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ur(this);const l=this.originalTrigger;typeof l?.focus=="function"&&setTimeout(()=>l.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ci(this,"sl-after-hide")}render(){return pe`
      <div
        part="base"
        class=${Ze({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":pe`
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
    `}};di.styles=[it,u5];di.dependencies={"sl-icon-button":Ot};S([xe(".dialog")],di.prototype,"dialog",2);S([xe(".dialog__panel")],di.prototype,"panel",2);S([xe(".dialog__overlay")],di.prototype,"overlay",2);S([$({type:Boolean,reflect:!0})],di.prototype,"open",2);S([$({reflect:!0})],di.prototype,"label",2);S([$({attribute:"no-header",type:Boolean,reflect:!0})],di.prototype,"noHeader",2);S([Re("open",{waitUntilFirstUpdate:!0})],di.prototype,"handleOpenChange",1);vt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});vt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});vt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});vt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});vt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var d5="sl-dialog";di.define("sl-dialog");var h5=ct({tagName:d5,elementClass:di,react:rt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),Jr=h5,f5=Ge`
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
`,rp=(e="value")=>(i,l)=>{const s=i.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(u,d,p){var g;const m=s.getPropertyOptions(e),v=typeof m.attribute=="string"?m.attribute:e;if(u===v){const y=m.converter||ps,w=(typeof y=="function"?y:(g=y?.fromAttribute)!=null?g:ps.fromAttribute)(p,m.type);this[e]!==w&&(this[l]=w)}o.call(this,u,d,p)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const op=Jc(class extends eu{constructor(e){if(super(e),e.type!==Wi.PROPERTY&&e.type!==Wi.ATTRIBUTE&&e.type!==Wi.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ay(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[i]){if(i===Ya||i===ot)return i;const l=e.element,s=e.name;if(e.type===Wi.PROPERTY){if(i===l[s])return Ya}else if(e.type===Wi.BOOLEAN_ATTRIBUTE){if(!!i===l.hasAttribute(s))return Ya}else if(e.type===Wi.ATTRIBUTE&&l.getAttribute(s)===i+"")return Ya;return p3(e),i}});var ut=class extends Ue{constructor(){super(...arguments),this.formControlController=new bs(this),this.hasSlotController=new oi(this,"help-text","label"),this.localize=new ia(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const i=this.input.offsetWidth,l=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",u=i*e;if(o){const d=`${i-u}px + ${e} * ${s}`;this.output.style.translate=`calc((${d} - ${l/2}px - ${s} / 2))`}else{const d=`${u}px - ${e} * ${s}`;this.output.style.translate=`calc(${d} - ${l/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!e,s=this.helpText?!0:!!i;return pe`
      <div
        part="form-control"
        class=${Ze({"form-control":!0,"form-control--medium":!0,"form-control--has-label":l,"form-control--has-help-text":s})}
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
            class=${Ze({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              .value=${op(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?pe`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ut.styles=[it,Zr,f5];S([xe(".range__control")],ut.prototype,"input",2);S([xe(".range__tooltip")],ut.prototype,"output",2);S([Ke()],ut.prototype,"hasFocus",2);S([Ke()],ut.prototype,"hasTooltip",2);S([$()],ut.prototype,"title",2);S([$()],ut.prototype,"name",2);S([$({type:Number})],ut.prototype,"value",2);S([$()],ut.prototype,"label",2);S([$({attribute:"help-text"})],ut.prototype,"helpText",2);S([$({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);S([$({type:Number})],ut.prototype,"min",2);S([$({type:Number})],ut.prototype,"max",2);S([$({type:Number})],ut.prototype,"step",2);S([$()],ut.prototype,"tooltip",2);S([$({attribute:!1})],ut.prototype,"tooltipFormatter",2);S([$({reflect:!0})],ut.prototype,"form",2);S([rp()],ut.prototype,"defaultValue",2);S([Cy({passive:!0})],ut.prototype,"handleThumbDragStart",1);S([Re("value",{waitUntilFirstUpdate:!0})],ut.prototype,"handleValueChange",1);S([Re("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);S([Re("hasTooltip",{waitUntilFirstUpdate:!0})],ut.prototype,"syncRange",1);var p5="sl-range";ut.define("sl-range");var m5=ct({tagName:p5,elementClass:ut,react:rt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"}),g5=m5;function v5({image:e,open:i,onSave:l,onCancel:s}){const o=je(),u=M.useRef(null),[d,p]=M.useState(1),g=()=>{u.current&&u.current.getImageScaledToCanvas().toBlob(v=>{v&&l(v)})};return f.jsxs(Jr,{label:o.formatMessage({id:"avatar.editor.title",defaultMessage:"Edit Profile Picture"}),open:i,onSlRequestClose:m=>{(m.detail.source==="overlay"||m.detail.source==="close-button")&&s()},children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[f.jsx(c5,{ref:u,image:e,width:250,height:250,border:25,borderRadius:125,color:[0,0,0,.6],scale:d,rotate:0}),f.jsx(g5,{min:1,max:3,step:.01,value:d,onSlInput:m=>{const v=m.target;p(v.value)},label:o.formatMessage({id:"avatar.editor.zoom",defaultMessage:"Zoom"}),style:{width:"100%",maxWidth:"300px"}})]}),f.jsxs("div",{slot:"footer",children:[f.jsx(Oe,{onClick:s,children:f.jsx(ee,{id:"common.cancel",defaultMessage:"Cancel"})}),f.jsx(Oe,{variant:"primary",onClick:g,children:f.jsx(ee,{id:"common.save",defaultMessage:"Save"})})]})]})}var b5="sl-icon";Ut.define("sl-icon");var y5=ct({tagName:b5,elementClass:Ut,react:rt,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),Qe=y5;const _5="_pickerContainer_1qpfx_1",x5="_avatar_1qpfx_6",w5="_cameraButton_1qpfx_12",Ph={pickerContainer:_5,avatar:x5,cameraButton:w5};function S5({currentImage:e,name:i,onSave:l,loading:s=!1,className:o,style:u}){const[d,p]=M.useState(!1),[g,m]=M.useState(null),v=async()=>{const w=await AC();w&&(m(w),p(!0))},y=w=>{p(!1),l(w),m(null)},_=()=>{p(!1),m(null)};return f.jsxs("div",{className:`${Ph.pickerContainer} ${o||""}`,style:u,children:[f.jsx(qe,{image:e,name:i,shape:"circle",className:Ph.avatar}),f.jsx(Oe,{circle:!0,size:"small",onClick:v,loading:s,className:Ph.cameraButton,children:f.jsx(Qe,{name:"camera"})}),g&&f.jsx(v5,{image:g,open:d,onSave:y,onCancel:_})]})}const C5="_drawer_16mna_2",E5="_container_16mna_13",A5="_selectSection_16mna_18",T5="_listSection_16mna_22",N5="_listHeader_16mna_26",M5="_memberItem_16mna_35",k5="_memberSelect_16mna_51",$5="_optionContent_16mna_57",O5="_optionAvatar_16mna_63",j5="_memberName_16mna_67",R5="_emptyState_16mna_72",L5="_footerActions_16mna_78",Fa={drawer:C5,container:E5,selectSection:A5,listSection:T5,listHeader:N5,memberItem:M5,memberSelect:k5,optionContent:$5,optionAvatar:O5,memberName:j5,emptyState:R5,footerActions:L5};function D5({roster:e,slot:i,allMembers:l,onClose:s,onSave:o}){const u=je(),[d,p]=M.useState(i.assigned_member_ids||[]),g=l.filter(T=>d.includes(T.id)),m=l.filter(T=>!d.includes(T.id)&&T.is_rosterable),v=T=>{p(d.filter(R=>R!==T))},y=T=>{p([...d,T])},_=T=>{const R=T.target.value;R&&(y(R),T.target.value="")},w=()=>{o(i.id,d)},C=T=>{T.stopPropagation()},N=T=>{T.stopPropagation(),s()};let E="Edit Roster Slot";if(e&&i.slot_index!==null&&i.slot_index!==void 0){const T=e.slot_definitions[i.slot_index];T&&(E=u.formatMessage({id:"roster.edit.drawerLabel"},{slotName:T.name}))}return f.jsxs(ci,{label:E,placement:"bottom",open:!0,onSlAfterHide:N,onSlRequestClose:C,className:Fa.drawer,children:[f.jsxs("div",{className:Fa.container,children:[f.jsx("div",{className:Fa.selectSection,children:f.jsx(ua,{placeholder:u.formatMessage({id:"roster.edit.selectMemberPlaceholder"}),value:"",onSlChange:_,onSlAfterHide:T=>{T.stopPropagation()},hoist:!0,placement:"top",className:Fa.memberSelect,children:m.map(T=>f.jsx(Pe,{value:T.id,children:f.jsxs("div",{className:Fa.optionContent,children:[f.jsx(qe,{name:T.name,image:T.avatar_url,className:Fa.optionAvatar}),f.jsx("span",{children:T.name})]})},T.id))})}),f.jsxs("div",{className:Fa.listSection,children:[f.jsx("h3",{className:Fa.listHeader,children:f.jsx(ee,{id:"roster.edit.assignedHeader"})}),g.length>0?g.map(T=>f.jsxs("div",{className:Fa.memberItem,children:[f.jsx(qe,{name:T.name,image:T.avatar_url}),f.jsx("span",{className:Fa.memberName,children:T.name}),f.jsx($t,{name:"x-circle-fill",label:u.formatMessage({id:"common.remove"}),onClick:()=>v(T.id)})]},T.id)):f.jsx("p",{className:Fa.emptyState,children:f.jsx(ee,{id:"roster.edit.emptyState"})})]})]}),f.jsxs("div",{slot:"footer",className:Fa.footerActions,children:[f.jsx(Oe,{onClick:N,children:f.jsx(ee,{id:"common.cancel"})}),f.jsx(Oe,{variant:"primary",onClick:w,children:f.jsx(ee,{id:"common.save"})})]})]})}const z5="_featureContainer_157fu_2",B5="_weekGroup_157fu_11",H5="_rosterGrid_157fu_22",U5="_weekHeader_157fu_32",I5="_dateCell_157fu_47",P5="_headerSlot_157fu_68",V5="_rosterSlot_157fu_77",q5="_rosterSlotReadOnly_157fu_89",F5="_emptySlot_157fu_100",G5="_green_157fu_101",Y5="_orange_157fu_102",W5="_red_157fu_103",X5="_urgent_157fu_128",Q5="_headerNavigation_157fu_165",Z5="_headerTitle_157fu_173",K5="_navButton_157fu_189",J5="_dialogFooter_157fu_193",gt={featureContainer:z5,weekGroup:B5,rosterGrid:H5,weekHeader:U5,dateCell:I5,headerSlot:P5,rosterSlot:V5,rosterSlotReadOnly:q5,emptySlot:F5,green:G5,orange:Y5,red:W5,urgent:X5,headerNavigation:Q5,headerTitle:Z5,navButton:K5,dialogFooter:J5};function e6({roster:e,rosterSlots:i,members:l,onSlotClick:s,startDate:o}){const u=je(),p=`week-${M.useMemo(()=>{const w=z0(o),C=B0(o);return`${w}${String(C).padStart(2,"0")}`},[o])}`,g=M.useMemo(()=>Array.from({length:7}).map((w,C)=>Kf(o,C)),[o]),m=M.useMemo(()=>{const w=new Map,C=Ga(g[0],"yyyy-MM-dd"),N=Ga(g[6],"yyyy-MM-dd");return i.forEach(E=>{if(!E.date||E.slot_index===null)return;const T=Ga(ep(E.date),"yyyy-MM-dd");T<C||T>N||(w.has(T)||w.set(T,new Map),w.get(T)?.set(E.slot_index,E))}),w},[i,g]),v=(w,C)=>{const N=s?gt.rosterSlot:gt.rosterSlotReadOnly,E=w?.assigned_member_ids?.length??0;return E===0?`${N} ${gt.emptySlot}`:C.min_occupancy===0?`${N} ${gt.green}`:E>=C.min_occupancy?`${N} ${gt.green}`:E===C.min_occupancy-1?`${N} ${gt.orange}`:E<=C.min_occupancy-2?`${N} ${gt.red}`:N},y=w=>{w&&s&&s(w.id)},_=(w,C)=>{if(!w||!w.assigned_member_ids||w.assigned_member_ids.length===0){const E=Jf(new Date,1),T=(lC(C)||sC(C))&&$c(C,E);return f.jsx("span",{className:`${gt.emptySlot} ${T?gt.urgent:""}`,children:f.jsx(ee,{id:"roster.emptySlot"})})}const N=w.assigned_member_ids.map(E=>l.find(T=>T.id===E)?.name).filter(E=>!!E);return u.formatList(N,{type:"unit"})};return e?f.jsxs("div",{id:p,className:gt.weekGroup,style:{"--roster-slot-count":e.slot_definitions.length},children:[f.jsxs("div",{className:`${gt.rosterGrid} ${gt.weekHeader}`,children:[f.jsx("div",{className:gt.dateCell}),e.slot_definitions.map(w=>f.jsx("div",{className:gt.headerSlot,children:w.name},w.name))]}),g.map(w=>{const C=Ga(w,"yyyy-MM-dd"),N=m.get(C);return f.jsxs("div",{className:gt.rosterGrid,children:[f.jsxs("div",{className:gt.dateCell,children:[f.jsx("strong",{children:u.formatDate(w,{weekday:"short"})}),f.jsx("span",{children:u.formatDate(w,{month:"short",day:"numeric"})})]}),e.slot_definitions.map((E,T)=>{const R=N?.get(T);return f.jsx("div",{className:v(R,E),onClick:s?()=>y(R):void 0,role:s?"button":void 0,tabIndex:s?0:void 0,onKeyDown:B=>s&&B.key==="Enter"&&y(R),children:_(R,w)},T)})]},C)})]}):null}const g0=(e,i)=>{const l=typeof e=="string"?ep(e):e;return`${Ga(l,"yyyy-MM-dd")}-${i}`};function t6({rosterId:e,organizationId:i,currentWeekStart:l,onWeekChange:s}){const o=je(),u=H0(),{data:d}=da({enabled:!!u}),{data:p,isLoading:g}=Nx({organizationId:i,rosterId:e,enabled:!!u}),{mutate:m}=Mx(),{members:v,rosterSlots:y,roster:_,capabilities:w}=p||{},[C,N]=M.useState(null),[E,T]=M.useState(null),R=()=>{s(wC(l))},B=()=>{s(Jf(l,1))},z=M.useMemo(()=>{if(!_?.slot_definitions)return[];const G=new Map;(y||[]).forEach(ae=>{ae.date&&typeof ae.slot_index=="number"&&G.set(g0(ae.date,ae.slot_index),ae)});const te=[];for(let ae=0;ae<7;ae++){const Q=Kf(l,ae);_.slot_definitions.forEach((ne,ie)=>{const I=g0(Q,ie),Z=G.get(I);Z?te.push(Z):te.push({id:I,roster_id:_.id,date:Q.toISOString(),slot_index:ie,assigned_member_ids:[],created_at:new Date().toISOString()})})}return te},[y,_,l]),k=(G,te)=>{const ae=z.find(Q=>Q.id===G);ae&&m({slot:ae,newMemberIds:te}),N(null)},q=G=>{const te=z.find(ne=>ne.id===G);if(!te||!te.date)return;const ae=new Date,Q=Jh(ae,{weekStartsOn:1});if(!$c(l,Q)){if(w?.can_admin_roster){N(G);return}if(w?.can_edit_roster){const ne=ep(te.date),ie=Zh(ae);if($c(ne,ie)||i1(ne,ie))return;T(te)}}},X=()=>{if(!E||!d)return;const G=E.assigned_member_ids||[],te=d.id,ae=G.includes(te);let Q;ae?Q=G.filter(ne=>ne!==te):Q=[...G,te],m({slot:E,newMemberIds:Q}),T(null)},ce=M.useMemo(()=>{const te=Jh(new Date,{weekStartsOn:1});return $c(l,te)},[l]),U=z.find(G=>G.id===C);return g?f.jsx("div",{children:"Loading..."}):f.jsxs("div",{className:gt.featureContainer,children:[f.jsxs("div",{className:gt.headerNavigation,children:[f.jsx($t,{name:"chevron-left",label:o.formatMessage({id:"roster.previousWeek"}),onClick:R,className:gt.navButton}),f.jsxs("div",{className:gt.headerTitle,children:[f.jsx("h2",{children:_?.name}),f.jsx("p",{children:f.jsx(ee,{id:"roster.weekOf",values:{date:o.formatDate(l,{month:"long",day:"numeric"})}})})]}),f.jsx($t,{name:"chevron-right",label:o.formatMessage({id:"roster.nextWeek"}),onClick:B,className:gt.navButton})]}),f.jsx(e6,{roster:_,rosterSlots:z,members:v||[],onSlotClick:!ce&&(w?.can_edit_roster||w?.can_admin_roster)?q:void 0,startDate:l}),U&&f.jsx(D5,{slot:U,roster:_,allMembers:v||[],onClose:()=>N(null),onSave:k}),f.jsxs(Jr,{label:o.formatMessage({id:"roster.selfAssignment.title"}),open:!!E,onSlAfterHide:G=>{G.stopPropagation(),T(null)},children:[E&&d&&f.jsx("p",{children:E.assigned_member_ids?.includes(d.id)?o.formatMessage({id:"roster.confirmRemoveSelf"}):o.formatMessage({id:"roster.confirmAddSelf"})}),f.jsxs("div",{slot:"footer",className:gt.dialogFooter,children:[f.jsx(Oe,{slot:"footer",onClick:()=>T(null),children:f.jsx(ee,{id:"common.no"})}),f.jsx(Oe,{slot:"footer",variant:"primary",onClick:X,children:f.jsx(ee,{id:"common.yes"})})]})]})]})}const a6="_pageWrapper_1fy59_1",i6="_pageContent_1fy59_10",n6="_drawer_1fy59_20",l6="_profileAction_1fy59_32",s6="_profileAvatar_1fy59_38",Mr={pageWrapper:a6,pageContent:i6,drawer:n6,profileAction:l6,profileAvatar:s6};function r6(){const e=je(),i=At(),{data:l}=da({enabled:!0}),{roster_id:s,organization_id:o}=Fr(),u=()=>{i(-1)},[d,p]=M.useState(()=>Jh(new Date,{weekStartsOn:1})),g=()=>{const v=z0(d),y=B0(d),w=`week-${`${v}${String(y).padStart(2,"0")}`}`,C=e.formatMessage({id:"share.rosterTitle"}),N=e.formatMessage({id:"share.rosterText"});CC(w,C,N)},m=kt.getPlatform()==="ios"?"box-arrow-up":"share";return f.jsx(ci,{label:e.formatMessage({id:"shell.tab.roster"}),placement:"end",open:!0,onSlAfterHide:u,className:Mr.drawer,children:f.jsxs("div",{className:Mr.pageWrapper,children:[f.jsx(Ti,{showBackButton:!0,headerActions:f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--sl-spacing-small)"},children:[f.jsx($t,{name:m,label:e.formatMessage({id:"roster.shareWeekLabel"}),onClick:g}),f.jsx("div",{onClick:()=>i("/profile/me"),className:Mr.profileAction,role:"button",tabIndex:0,children:f.jsx(qe,{image:l?.social_profiles?.avatar_url,name:l?.firstname??"",className:Mr.profileAvatar})})]})}),f.jsx("div",{className:Mr.pageContent,children:f.jsx(t6,{rosterId:s,organizationId:o,currentWeekStart:d,onWeekChange:p})})]})})}const o6="_pageWrapper_1ndxt_1",c6="_profileAction_1ndxt_31",u6="_profileAvatar_1ndxt_37",d6="_headerActions_1ndxt_41",Cc={pageWrapper:o6,profileAction:c6,profileAvatar:u6,headerActions:d6};var h6="sl-spinner";Yr.define("sl-spinner");var f6=ct({tagName:h6,elementClass:Yr,react:rt,events:{},displayName:"SlSpinner"}),ds=f6,p6=Ge`
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
`,Qa=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const i of e)i.type==="attributes"&&i.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ga(this.body);const{keyframes:i,options:l}=ta(this,"details.show",{dir:this.localize.dir()});await aa(this.body,i0(i,this.body.scrollHeight),l),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ga(this.body);const{keyframes:i,options:l}=ta(this,"details.hide",{dir:this.localize.dir()});await aa(this.body,i0(i,this.body.scrollHeight),l),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ci(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return pe`
      <details
        part="base"
        class=${Ze({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Qa.styles=[it,p6];Qa.dependencies={"sl-icon":Ut};S([xe(".details")],Qa.prototype,"details",2);S([xe(".details__header")],Qa.prototype,"header",2);S([xe(".details__body")],Qa.prototype,"body",2);S([xe(".details__expand-icon-slot")],Qa.prototype,"expandIconSlot",2);S([$({type:Boolean,reflect:!0})],Qa.prototype,"open",2);S([$()],Qa.prototype,"summary",2);S([$({type:Boolean,reflect:!0})],Qa.prototype,"disabled",2);S([Re("open",{waitUntilFirstUpdate:!0})],Qa.prototype,"handleOpenChange",1);vt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});vt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var m6="sl-details";Qa.define("sl-details");var g6=ct({tagName:m6,elementClass:Qa,react:rt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"}),v6=g6;const b6="_profilePage_19g3p_1",y6="_cover_19g3p_7",_6="_header_19g3p_19",x6="_headerEnd_19g3p_29",w6="_avatar_19g3p_36",S6="_profileInfo_19g3p_44",C6="_stableInfo_19g3p_53",E6="_name_19g3p_63",A6="_followerCount_19g3p_76",T6="_followButton_19g3p_82",N6="_metaInfo_19g3p_86",M6="_detailsPanel_19g3p_95",k6="_actionButtons_19g3p_105",$6="_actionIcon_19g3p_113",O6="_actionIconPlus_19g3p_117",j6="_postsSection_19g3p_121",R6="_postsSeparator_19g3p_127",L6="_postsHeading_19g3p_134",D6="_postsList_19g3p_141",z6="_emptyState_19g3p_148",B6="_emptyStateHint_19g3p_155",H6="_endOfPosts_19g3p_161",U6="_deletePostButton_19g3p_169",I6="_loadingMore_19g3p_177",at={profilePage:b6,cover:y6,header:_6,headerEnd:x6,avatar:w6,profileInfo:S6,stableInfo:C6,name:E6,followerCount:A6,followButton:T6,metaInfo:N6,detailsPanel:M6,actionButtons:k6,actionIcon:$6,actionIconPlus:O6,postsSection:j6,postsSeparator:R6,postsHeading:L6,postsList:D6,emptyState:z6,emptyStateHint:B6,endOfPosts:H6,deletePostButton:U6,loadingMore:I6},P6="_infoGrid_1andj_1",V6="_infoCell_1andj_7",q6="_cellLabel_1andj_15",F6="_cellValue_1andj_23",jc={infoGrid:P6,infoCell:V6,cellLabel:q6,cellValue:F6};function cp({label:e,value:i}){return i?f.jsxs("div",{className:jc.infoCell,children:[f.jsx("strong",{className:jc.cellLabel,children:e}),f.jsx("div",{className:jc.cellValue,children:i})]}):null}function G6({user:e}){const i=je(),l=M.useMemo(()=>{const s={M:"gender.male",F:"gender.female",X:"gender.other"},o=[{id:"users.firstNameLabel",value:e.firstname},{id:"users.lastNameLabel",value:e.lastname},{id:"users.cityLabel",value:e.city},{id:"users.countryLabel",value:$f(e.country,i.locale)},{id:"users.genderLabel",value:e.gender&&s[e.gender]?i.formatMessage({id:s[e.gender]}):e.gender},{id:"users.dateOfBirthLabel",value:e.date_of_birth?i.formatDate(e.date_of_birth,{year:"numeric",month:"long",day:"numeric"}):null}];return e.email&&o.push({id:"auth.emailLabel",value:e.email}),o},[e,i.locale]);return f.jsx("div",{className:jc.infoGrid,children:l.map(s=>f.jsx(cp,{label:i.formatMessage({id:s.id}),value:s.value},s.id))})}const Y6="_infoGrid_tlonv_1",W6={infoGrid:Y6};function su(e,i="en"){const l=typeof e=="string"?new Date(e):e,s=new Date;let o=s.getFullYear()-l.getFullYear(),u=s.getMonth()-l.getMonth();s.getDate()<l.getDate()&&u--,u<0&&(o--,u+=12);const p={en:{year:"year",years:"years",month:"month",months:"months"},nl:{year:"jaar",years:"jaar",month:"maand",months:"maanden"}}[i],g=o===1?p.year:p.years,m=u===1?p.month:p.months;return`${o} ${g} (${u} ${m})`}function X6({horse:e}){const i=je(),l=M.useMemo(()=>[{id:"horses.officialNameLabel",value:e.official_name},{id:"horses.ageLabel",value:e.date_of_birth?su(e.date_of_birth,i.locale.startsWith("nl")?"nl":"en"):null},{id:"horses.genderLabel",value:e.gender?i.formatMessage({id:`gender.${e.gender.toLowerCase()}`,defaultMessage:e.gender}):null},{id:"horses.colorLabel",value:e.color},{id:"horses.breedStudbookLabel",value:e.breed_studbook},{id:"horses.countryOfBirthLabel",value:$f(e.country_of_birth,i.locale)},{id:"horses.chipNumberLabel",value:e.chip_number},{id:"horses.uelnLabel",value:e.ueln},{id:"horses.passportNumberLabel",value:e.passport_number}].filter(s=>s.value),[e,i]);return f.jsx("div",{className:W6.infoGrid,children:l.map(s=>f.jsx(cp,{label:i.formatMessage({id:s.id}),value:s.value},s.id))})}const Q6="_infoGrid_tlonv_1",Z6={infoGrid:Q6};function K6({organization:e}){const i=je(),l=M.useMemo(()=>[{id:"auth.emailLabel",value:e.email},{id:"organization.cityLabel",value:e.city},{id:"users.countryLabel",value:$f(e.country,i.locale)},{id:"organization.cocLabel",value:e.chamber_of_commerce_registration}].filter(s=>s.value),[e,i.locale]);return f.jsx("div",{className:Z6.infoGrid,children:l.map(s=>f.jsx(cp,{label:i.formatMessage({id:s.id}),value:s.value},s.id))})}var J6=Ge`
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
`,_e=class extends Ue{constructor(){super(...arguments),this.formControlController=new bs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new oi(this,"help-text","label"),this.localize=new ia(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const i=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!i&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,i,l="none"){this.input.setSelectionRange(e,i,l)}setRangeText(e,i,l,s="preserve"){const o=i??this.input.selectionStart,u=l??this.input.selectionEnd;this.input.setRangeText(e,o,u,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!e,s=this.helpText?!0:!!i,u=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return pe`
      <div
        part="form-control"
        class=${Ze({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":s})}
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
            class=${Ze({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${op(this.value)}
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

            ${u?pe`
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
            ${this.passwordToggle&&!this.disabled?pe`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?pe`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:pe`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};_e.styles=[it,Zr,J6];_e.dependencies={"sl-icon":Ut};S([xe(".input__control")],_e.prototype,"input",2);S([Ke()],_e.prototype,"hasFocus",2);S([$()],_e.prototype,"title",2);S([$({reflect:!0})],_e.prototype,"type",2);S([$()],_e.prototype,"name",2);S([$()],_e.prototype,"value",2);S([rp()],_e.prototype,"defaultValue",2);S([$({reflect:!0})],_e.prototype,"size",2);S([$({type:Boolean,reflect:!0})],_e.prototype,"filled",2);S([$({type:Boolean,reflect:!0})],_e.prototype,"pill",2);S([$()],_e.prototype,"label",2);S([$({attribute:"help-text"})],_e.prototype,"helpText",2);S([$({type:Boolean})],_e.prototype,"clearable",2);S([$({type:Boolean,reflect:!0})],_e.prototype,"disabled",2);S([$()],_e.prototype,"placeholder",2);S([$({type:Boolean,reflect:!0})],_e.prototype,"readonly",2);S([$({attribute:"password-toggle",type:Boolean})],_e.prototype,"passwordToggle",2);S([$({attribute:"password-visible",type:Boolean})],_e.prototype,"passwordVisible",2);S([$({attribute:"no-spin-buttons",type:Boolean})],_e.prototype,"noSpinButtons",2);S([$({reflect:!0})],_e.prototype,"form",2);S([$({type:Boolean,reflect:!0})],_e.prototype,"required",2);S([$()],_e.prototype,"pattern",2);S([$({type:Number})],_e.prototype,"minlength",2);S([$({type:Number})],_e.prototype,"maxlength",2);S([$()],_e.prototype,"min",2);S([$()],_e.prototype,"max",2);S([$()],_e.prototype,"step",2);S([$()],_e.prototype,"autocapitalize",2);S([$()],_e.prototype,"autocorrect",2);S([$()],_e.prototype,"autocomplete",2);S([$({type:Boolean})],_e.prototype,"autofocus",2);S([$()],_e.prototype,"enterkeyhint",2);S([$({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],_e.prototype,"spellcheck",2);S([$()],_e.prototype,"inputmode",2);S([Re("disabled",{waitUntilFirstUpdate:!0})],_e.prototype,"handleDisabledChange",1);S([Re("step",{waitUntilFirstUpdate:!0})],_e.prototype,"handleStepChange",1);S([Re("value",{waitUntilFirstUpdate:!0})],_e.prototype,"handleValueChange",1);var eA="sl-input";_e.define("sl-input");var tA=ct({tagName:eA,elementClass:_e,react:rt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),Ne=tA,aA=Ge`
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
`,eo=class extends Ue{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};eo.styles=[it,aA];S([$({type:Boolean,reflect:!0})],eo.prototype,"vertical",2);S([Re("vertical")],eo.prototype,"handleVerticalChange",1);var iA="sl-divider";eo.define("sl-divider");var nA=ct({tagName:iA,elementClass:eo,react:rt,events:{},displayName:"SlDivider"}),ru=nA;const lA="_editUserDrawer_dn68d_1",sA="_formContent_dn68d_33",rA="_countrySelect_dn68d_45",Vh={editUserDrawer:lA,formContent:sA,countrySelect:rA};function oA({isOpen:e,onClose:i,user:l,socialProfile:s}){const o=je(),u=kx(),d=Gc(),[p,g]=M.useState(""),[m,v]=M.useState(""),[y,_]=M.useState(""),[w,C]=M.useState(""),[N,E]=M.useState(null),[T,R]=M.useState(""),[B,z]=M.useState(""),[k,q]=M.useState(""),[X,ce]=M.useState(""),[U,G]=M.useState({}),te=[{value:"M",labelId:"gender.male"},{value:"F",labelId:"gender.female"},{value:"X",labelId:"gender.other"}];M.useEffect(()=>{e&&l&&(g(s?.display_name||""),v(l.firstname||""),_(l.lastname||""),C(l.email||""),E(l.date_of_birth?new Date(l.date_of_birth):null),R(l.city||""),z(l.country||""),q(l.gender||""),ce(l.locale||"en"),G({}))},[e,l,s]);const ae=()=>{i()},Q=()=>{const I={},Z=o.formatMessage({id:"validation.required"});if(s&&!p.trim()&&(I.displayName=Z),m.trim()||(I.firstname=Z),y.trim()||(I.lastname=Z),w&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)&&(I.email=o.formatMessage({id:"validation.emailInvalid"})),N){const J=e0(new Date);N>J&&(I.dateOfBirth=o.formatMessage({id:"validation.ageMinimum"}))}return G(I),Object.keys(I).length===0},ne=async()=>{if(Q())try{s&&p!==s.display_name&&await d.mutateAsync({socialProfileId:s.id,displayName:p}),await u.mutateAsync({userId:l.id,updates:{firstname:m,lastname:y,email:w||void 0,date_of_birth:N?Ga(N,"yyyy-MM-dd"):void 0,gender:k||void 0,city:T||void 0,country:B||void 0,locale:X}}),i()}catch(I){console.error("Failed to update user:",I)}},ie=I=>{const Z=I.locale.substring(0,2),J=Yc.slice().sort((se,Se)=>{const Tt=se.name[Z]??se.name.en,Ee=Se.name[Z]??Se.name.en;return Tt.localeCompare(Ee,Z)});if(Z==="nl"){const se=J.find(Ee=>Ee.code==="NL"),Se=J.find(Ee=>Ee.code==="BE"),Tt=J.filter(Ee=>Ee.code!=="NL"&&Ee.code!=="BE");return f.jsxs(L.Fragment,{children:[[se,Se].map(Ee=>f.jsx(Pe,{value:Ee.code,children:Ee.name[Z]??Ee.name.en},Ee.code)),f.jsx(ru,{}),Tt.map(Ee=>f.jsx(Pe,{value:Ee.code,children:Ee.name[Z]??Ee.name.en},Ee.code))]})}return J.map(se=>f.jsx(Pe,{value:se.code,children:se.name[Z]??se.name.en},se.code))};return f.jsxs(ci,{label:o.formatMessage({id:"user.edit.title"}),placement:"end",open:e,onSlAfterHide:ae,className:Vh.editUserDrawer,children:[f.jsxs("div",{className:Vh.formContent,children:[s&&f.jsx(Ne,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:p,onSlInput:I=>g(I.target.value),helpText:U.displayName,required:!0}),f.jsxs(ua,{"data-testid":"language-select",label:o.formatMessage({id:"users.languageLabel"}),value:X,onSlChange:I=>ce(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},children:[f.jsx(Pe,{value:"en",children:o.formatMessage({id:"common.language.english"})}),f.jsx(Pe,{value:"nl",children:o.formatMessage({id:"common.language.dutch"})})]}),f.jsx(Ne,{"data-testid":"firstname-input",label:o.formatMessage({id:"users.firstNameLabel"}),value:m,onSlInput:I=>v(I.target.value),required:!0,helpText:U.firstname}),f.jsx(Ne,{"data-testid":"lastname-input",label:o.formatMessage({id:"users.lastNameLabel"}),value:y,onSlInput:I=>_(I.target.value),required:!0,helpText:U.lastname}),f.jsx(Ne,{"data-testid":"email-input",label:o.formatMessage({id:"auth.emailLabel"}),value:w,onSlInput:I=>C(I.target.value),helpText:U.email}),f.jsx(Ne,{"data-testid":"dob-input",label:o.formatMessage({id:"users.dateOfBirthLabel"}),type:"date",max:Ga(e0(new Date),"yyyy-MM-dd"),value:N?Ga(N,"yyyy-MM-dd"):"",onSlChange:I=>E(I.target.valueAsDate),helpText:U.dateOfBirth}),f.jsx(ua,{"data-testid":"gender-select",label:o.formatMessage({id:"users.genderLabel"}),value:k,onSlChange:I=>q(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},children:te.map(I=>f.jsx(Pe,{value:I.value,children:o.formatMessage({id:I.labelId})},I.value))}),f.jsx(Ne,{"data-testid":"city-input",label:o.formatMessage({id:"users.cityLabel"}),value:T,onSlInput:I=>R(I.target.value)}),f.jsx(ua,{"data-testid":"country-select",className:Vh.countrySelect,label:o.formatMessage({id:"users.countryLabel"}),value:B,onSlChange:I=>z(I.target.value),onSlAfterHide:I=>{I.stopPropagation()},hoist:!0,children:ie(o)})]}),f.jsx(Oe,{slot:"footer",variant:"primary",onClick:ne,loading:u.isPending||d.isPending,children:f.jsx(ee,{id:"common.save",defaultMessage:"Save"})}),f.jsx(Oe,{slot:"footer",variant:"neutral",onClick:ae,children:f.jsx(ee,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const cA="_editHorseDrawer_h0uut_1",uA="_formContent_h0uut_33",dA="_inputWithIcon_h0uut_46",hA="_countrySelect_h0uut_58",fA="_readOnlyInput_h0uut_62",pA="_dobRow_h0uut_68",mA="_dobInput_h0uut_75",gA="_ageDisplay_h0uut_79",Gi={editHorseDrawer:cA,formContent:uA,inputWithIcon:dA,countrySelect:hA,readOnlyInput:fA,dobRow:pA,dobInput:mA,ageDisplay:gA};function C1({isOpen:e,onClose:i,horse:l,socialProfile:s}){const o=je(),u=$x(),{data:d}=Of({socialId:l.social_profile_id,enabled:e&&!!l.social_profile_id}),p=d??s,g=Gc(),{data:m}=U0({profileId:p?.id,enabled:!!p?.id&&e}),v=m?.can_admin_social_profile??!1,[y,_]=M.useState(""),[w,C]=M.useState(""),[N,E]=M.useState(""),[T,R]=M.useState(""),[B,z]=M.useState(""),[k,q]=M.useState(null),[X,ce]=M.useState(""),[U,G]=M.useState(""),[te,ae]=M.useState(""),[Q,ne]=M.useState(""),[ie,I]=M.useState(""),[Z,J]=M.useState(""),[se,Se]=M.useState({});M.useEffect(()=>{e&&l&&(_(p?.display_name||""),C(l.name||""),E(l.official_name||""),R(l.chip_number||""),z(l.ueln||""),q(l.date_of_birth?new Date(l.date_of_birth):null),ce(l.gender||""),G(l.color||""),ae(l.breed_studbook||""),ne(l.country_of_birth||""),I(l.markings||""),J(l.chip_location||""),Se({}))},[e,l,p]);const Tt=()=>{i()},Ee=()=>{const le={};return p&&!y.trim()&&(le.displayName=o.formatMessage({id:"validation.required"})),w.trim()||(le.name=o.formatMessage({id:"validation.required"})),!T.trim()&&!B.trim()&&(le.chipOrUeln=o.formatMessage({id:"validation.chipOrUelnRequired"})),B.trim()&&B.trim().length!==15&&(le.ueln=o.formatMessage({id:"validation.uelnInvalid"})),Se(le),Object.keys(le).length===0},Qt=async()=>{if(Ee())try{p&&p.id&&y!==p.display_name&&await g.mutateAsync({socialProfileId:p.id,displayName:y}),await u.mutateAsync({horseId:l.id,updates:{name:w,official_name:N||void 0,chip_number:T||void 0,ueln:B||void 0,date_of_birth:k?Ga(k,"yyyy-MM-dd"):void 0,gender:X||void 0,color:U||void 0,breed_studbook:te||void 0,country_of_birth:Q||void 0,markings:ie||void 0,chip_location:Z||void 0}}),i()}catch(le){console.error("Failed to update horse:",le)}},K=async le=>{const{scanBarcode:ze}=await ea(async()=>{const{scanBarcode:ue}=await import("./index-R38vV1rT.js");return{scanBarcode:ue}},__vite__mapDeps([6,1])),Te=await ze();Te&&(le==="chipNumber"?R(Te):le==="ueln"&&z(Te))},Ie=async le=>{if(kt.isNativePlatform()){le.preventDefault();const{pickDate:ze}=await ea(async()=>{const{pickDate:ue}=await import("./index-R38vV1rT.js");return{pickDate:ue}},__vite__mapDeps([6,1])),Te=await ze({mode:"date",value:k?k.toISOString():void 0,max:new Date().toISOString()});Te&&q(new Date(Te))}},bt=le=>{const ze=le.locale.substring(0,2),Te=Yc.slice().sort((ue,yt)=>{const na=ue.name[ze]??ue.name.en,ge=yt.name[ze]??yt.name.en;return na.localeCompare(ge,ze)});if(ze==="nl"){const ue=Te.find(ge=>ge.code==="NL"),yt=Te.find(ge=>ge.code==="BE"),na=Te.filter(ge=>ge.code!=="NL"&&ge.code!=="BE");return f.jsxs(L.Fragment,{children:[[ue,yt].map(ge=>f.jsx(Pe,{value:ge.code,children:ge.name[ze]??ge.name.en},ge.code)),f.jsx(ru,{}),na.map(ge=>f.jsx(Pe,{value:ge.code,children:ge.name[ze]??ge.name.en},ge.code))]})}return Te.map(ue=>f.jsx(Pe,{value:ue.code,children:ue.name[ze]??ue.name.en},ue.code))};return f.jsxs(ci,{label:o.formatMessage({id:"horse.edit.title"}),placement:"end",open:e,onSlAfterHide:i,className:Gi.editHorseDrawer,children:[f.jsxs("div",{className:Gi.formContent,children:[p&&f.jsx(Ne,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:y,onSlInput:le=>_(le.target.value),helpText:se.displayName,required:!0,readonly:!v,className:v?void 0:Gi.readOnlyInput}),f.jsx(Ne,{"data-testid":"horse-official-name-input",label:o.formatMessage({id:"horses.officialNameLabel"}),value:N,required:!0,onSlInput:le=>{const ze=le.target.value;(!w||w===N)&&C(ze),E(ze)}}),f.jsx(Ne,{"data-testid":"horse-name-input",label:o.formatMessage({id:"horses.nameLabel"}),value:w,onSlInput:le=>C(le.target.value),required:!0,helpText:se.name}),f.jsxs("div",{className:Gi.inputWithIcon,children:[f.jsx(Ne,{"data-testid":"horse-chip-number-input",label:o.formatMessage({id:"horses.chipNumberLabel"}),value:T,onSlInput:le=>R(le.target.value),helpText:se.chipOrUeln}),f.jsx($t,{"data-testid":"chip-scan-button",name:"qr-code",label:o.formatMessage({id:"horses.scanBarcode"}),onClick:()=>K("chipNumber")})]}),f.jsx(Ne,{label:o.formatMessage({id:"horses.chipLocationLabel"}),value:Z,onSlInput:le=>J(le.target.value)}),f.jsxs("div",{className:Gi.inputWithIcon,children:[f.jsx(Ne,{"data-testid":"horse-ueln-input",label:o.formatMessage({id:"horses.uelnLabel"}),value:B,onSlInput:le=>z(le.target.value),helpText:se.ueln||se.chipOrUeln}),f.jsx($t,{"data-testid":"ueln-scan-button",name:"qr-code",label:o.formatMessage({id:"horses.scanBarcode"}),onClick:()=>K("ueln")})]}),f.jsxs("div",{className:Gi.dobRow,children:[f.jsx(Ne,{className:Gi.dobInput,label:o.formatMessage({id:"horses.dateOfBirthLabel"}),type:kt.isNativePlatform()?"text":"date",max:new Date().toISOString().split("T")[0],value:k?kt.isNativePlatform()?o.formatDate(k):Ga(k,"yyyy-MM-dd"):"",readonly:kt.isNativePlatform(),onClick:Ie,onSlChange:le=>q(le.target.valueAsDate),children:kt.isNativePlatform()&&f.jsx(Qe,{name:"calendar",slot:"suffix"})}),k&&f.jsx("span",{className:Gi.ageDisplay,children:su(k,o.locale.startsWith("nl")?"nl":"en")})]}),f.jsxs(ua,{label:o.formatMessage({id:"horses.genderLabel"}),value:X,onSlChange:le=>ce(le.target.value),onSlAfterHide:le=>{le.stopPropagation()},children:[f.jsx(Pe,{value:"Stallion",children:o.formatMessage({id:"gender.stallion"})}),f.jsx(Pe,{value:"Mare",children:o.formatMessage({id:"gender.mare"})}),f.jsx(Pe,{value:"Gelding",children:o.formatMessage({id:"gender.gelding"})})]}),f.jsx(ua,{label:o.formatMessage({id:"horses.countryOfBirthLabel"}),className:Gi.countrySelect,value:Q,onSlChange:le=>ne(le.target.value),onSlAfterHide:le=>{le.stopPropagation()},hoist:!0,children:bt(o)}),f.jsx(Ne,{label:o.formatMessage({id:"horses.colorLabel"}),value:U,onSlInput:le=>G(le.target.value)}),f.jsx(Ne,{label:o.formatMessage({id:"horses.breedStudbookLabel"}),value:te,onSlInput:le=>ae(le.target.value)}),f.jsx(Ne,{label:o.formatMessage({id:"horses.markingsLabel"}),value:ie,onSlInput:le=>I(le.target.value)})]}),f.jsx(Oe,{slot:"footer",variant:"primary",onClick:Qt,disabled:u.isPending||g.isPending,loading:u.isPending||g.isPending,children:f.jsx(ee,{id:"common.save",defaultMessage:"Save"})}),f.jsx(Oe,{slot:"footer",variant:"neutral",onClick:Tt,children:f.jsx(ee,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const vA="_editOrganizationDrawer_2n73i_1",bA="_formContent_2n73i_33",yA="_countrySelect_2n73i_45",qh={editOrganizationDrawer:vA,formContent:bA,countrySelect:yA};function _A({isOpen:e,onClose:i,organization:l,socialProfile:s}){const o=je(),u=Ox(),d=Gc(),[p,g]=M.useState(""),[m,v]=M.useState(""),[y,_]=M.useState(""),[w,C]=M.useState(""),[N,E]=M.useState(""),[T,R]=M.useState(""),[B,z]=M.useState({});M.useEffect(()=>{e&&l&&(g(s?.display_name||""),v(l.name||""),_(l.email||""),C(l.chamber_of_commerce_registration||""),E(l.city||""),R(l.country||""),z({}))},[e,l,s]);const k=()=>{i()},q=()=>{const U={},G=o.formatMessage({id:"validation.required"});return s&&!p.trim()&&(U.displayName=G),m.trim()||(U.name=G),y&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)&&(U.email=o.formatMessage({id:"validation.emailInvalid"})),z(U),Object.keys(U).length===0},X=async()=>{if(q())try{s&&p!==s.display_name&&await d.mutateAsync({socialProfileId:s.id,displayName:p}),await u.mutateAsync({organizationId:l.id,updates:{name:m,email:y||void 0,chamber_of_commerce_registration:w||void 0,city:N||void 0,country:T||void 0}}),i()}catch(U){console.error("Failed to update organization:",U)}},ce=U=>{const G=U.locale.substring(0,2),te=Yc.slice().sort((ae,Q)=>{const ne=ae.name[G]??ae.name.en,ie=Q.name[G]??Q.name.en;return ne.localeCompare(ie,G)});if(G==="nl"){const ae=te.find(ie=>ie.code==="NL"),Q=te.find(ie=>ie.code==="BE"),ne=te.filter(ie=>ie.code!=="NL"&&ie.code!=="BE");return f.jsxs(L.Fragment,{children:[[ae,Q].map(ie=>f.jsx(Pe,{value:ie.code,children:ie.name[G]??ie.name.en},ie.code)),f.jsx(ru,{}),ne.map(ie=>f.jsx(Pe,{value:ie.code,children:ie.name[G]??ie.name.en},ie.code))]})}return te.map(ae=>f.jsx(Pe,{value:ae.code,children:ae.name[G]??ae.name.en},ae.code))};return f.jsxs(ci,{label:o.formatMessage({id:"organization.edit.title"}),placement:"end",open:e,onSlAfterHide:k,className:qh.editOrganizationDrawer,children:[f.jsxs("div",{className:qh.formContent,children:[s&&f.jsx(Ne,{"data-testid":"display-name-input",label:o.formatMessage({id:"profile.edit.nameLabel"}),value:p,onSlInput:U=>g(U.target.value),helpText:B.displayName,required:!0}),f.jsx(Ne,{"data-testid":"name-input",label:o.formatMessage({id:"organization.nameLabel"}),value:m,onSlInput:U=>v(U.target.value),required:!0,helpText:B.name}),f.jsx(Ne,{"data-testid":"email-input",label:o.formatMessage({id:"auth.emailLabel"}),value:y,onSlInput:U=>_(U.target.value),helpText:B.email}),f.jsx(Ne,{"data-testid":"coc-input",label:o.formatMessage({id:"organization.cocLabel"}),value:w,onSlInput:U=>C(U.target.value)}),f.jsx(Ne,{"data-testid":"city-input",label:o.formatMessage({id:"organization.cityLabel"}),value:N,onSlInput:U=>E(U.target.value)}),f.jsx(ua,{"data-testid":"country-select",className:qh.countrySelect,label:o.formatMessage({id:"users.countryLabel"}),value:T,onSlChange:U=>R(U.target.value),onSlAfterHide:U=>{U.stopPropagation()},hoist:!0,children:ce(o)})]}),f.jsx(Oe,{slot:"footer",variant:"primary",onClick:X,loading:u.isPending||d.isPending,children:f.jsx(ee,{id:"common.save",defaultMessage:"Save"})}),f.jsx(Oe,{slot:"footer",variant:"neutral",onClick:k,children:f.jsx(ee,{id:"common.cancel",defaultMessage:"Cancel"})})]})}var xA=Ge`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,wA=Ge`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,to=class extends Ue{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const i=kr(e.target);i?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const i=kr(e.target);i?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const i=kr(e.target);i?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const i=kr(e.target);i?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(i=>{const l=e.indexOf(i),s=kr(i);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",l===0),s.toggleAttribute("data-sl-button-group__button--inner",l>0&&l<e.length-1),s.toggleAttribute("data-sl-button-group__button--last",l===e.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return pe`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};to.styles=[it,wA];S([xe("slot")],to.prototype,"defaultSlot",2);S([Ke()],to.prototype,"disableRole",2);S([$()],to.prototype,"label",2);function kr(e){var i;const l="sl-button, sl-radio-button";return(i=e.closest(l))!=null?i:e.querySelector(l)}var It=class extends Ue{constructor(){super(...arguments),this.formControlController=new bs(this),this.hasSlotController=new oi(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?a3:e?t3:Kc}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const i=e.target.closest("sl-radio, sl-radio-button"),l=this.getAllRadios(),s=this.value;!i||i.disabled||(this.value=i.value,l.forEach(o=>o.checked=o===i),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var i;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const l=this.getAllRadios().filter(p=>!p.disabled),s=(i=l.find(p=>p.checked))!=null?i:l[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,u=this.value;let d=l.indexOf(s)+o;d<0&&(d=l.length-1),d>l.length-1&&(d=0),this.getAllRadios().forEach(p=>{p.checked=!1,this.hasButtonGroup||p.setAttribute("tabindex","-1")}),this.value=l[d].value,l[d].checked=!0,this.hasButtonGroup?l[d].shadowRoot.querySelector("button").focus():(l[d].setAttribute("tabindex","0"),l[d].focus()),this.value!==u&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,i;const l=this.getAllRadios();if(await Promise.all(l.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=l.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),l.length>0&&!l.some(s=>s.checked))if(this.hasButtonGroup){const s=(e=l[0].shadowRoot)==null?void 0:e.querySelector("button");s&&s.setAttribute("tabindex","0")}else l[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(i=this.shadowRoot)==null?void 0:i.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(i=>i.checked=i.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,i=this.customValidityMessage!=="";return e||i?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const i=this.getAllRadios(),l=i.find(u=>u.checked),s=i.find(u=>!u.disabled),o=l||s;o&&o.focus(e)}render(){const e=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),l=this.label?!0:!!e,s=this.helpText?!0:!!i,o=pe`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return pe`
      <fieldset
        part="form-control"
        class=${Ze({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":l,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${l?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?pe`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};It.styles=[it,Zr,xA];It.dependencies={"sl-button-group":to};S([xe("slot:not([name])")],It.prototype,"defaultSlot",2);S([xe(".radio-group__validation-input")],It.prototype,"validationInput",2);S([Ke()],It.prototype,"hasButtonGroup",2);S([Ke()],It.prototype,"errorMessage",2);S([Ke()],It.prototype,"defaultValue",2);S([$()],It.prototype,"label",2);S([$({attribute:"help-text"})],It.prototype,"helpText",2);S([$()],It.prototype,"name",2);S([$({reflect:!0})],It.prototype,"value",2);S([$({reflect:!0})],It.prototype,"size",2);S([$({reflect:!0})],It.prototype,"form",2);S([$({type:Boolean,reflect:!0})],It.prototype,"required",2);S([Re("size",{waitUntilFirstUpdate:!0})],It.prototype,"handleSizeChange",1);S([Re("value")],It.prototype,"handleValueChange",1);var SA="sl-radio-group";It.define("sl-radio-group");var CA=ct({tagName:SA,elementClass:It,react:rt,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"}),EA=CA,AA=Ge`
  ${Ey}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Za=class extends Ue{constructor(){super(...arguments),this.hasSlotController=new oi(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Br`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Ze({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${be(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Za.styles=[it,AA];S([xe(".button")],Za.prototype,"input",2);S([xe(".hidden-input")],Za.prototype,"hiddenInput",2);S([Ke()],Za.prototype,"hasFocus",2);S([$({type:Boolean,reflect:!0})],Za.prototype,"checked",2);S([$()],Za.prototype,"value",2);S([$({type:Boolean,reflect:!0})],Za.prototype,"disabled",2);S([$({reflect:!0})],Za.prototype,"size",2);S([$({type:Boolean,reflect:!0})],Za.prototype,"pill",2);S([Re("disabled",{waitUntilFirstUpdate:!0})],Za.prototype,"handleDisabledChange",1);var TA="sl-radio-button";Za.define("sl-radio-button");var NA=ct({tagName:TA,elementClass:Za,react:rt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"}),v0=NA,MA=Ge`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Yt=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var i;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((i=document.activeElement)==null?void 0:i.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const l=(s,o)=>{if(!s)return null;const u=s.closest(o);if(u)return u;const d=s.getRootNode();return d instanceof ShadowRoot?l(d.host,o):null};setTimeout(()=>{var s;const o=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?l1():document.activeElement;(!this.containingElement||l(o,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const i=e.composedPath();this.containingElement&&!i.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const i=e.target;!this.stayOpenOnSelect&&i.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const i=this.getMenu();if(i){const l=i.getAllItems(),s=l[0],o=l[l.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),l.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(i.setCurrentItem(s),s.focus()),(e.key==="ArrowUp"||e.key==="End")&&(i.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const i=this.trigger.assignedElements({flatten:!0}).find(s=>$C(s).start);let l;if(i){switch(i.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":l=i.button;break;default:l=i}l.setAttribute("aria-haspopup","true"),l.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ci(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ga(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:i}=ta(this,"dropdown.show",{dir:this.localize.dir()});await aa(this.popup.popup,e,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ga(this);const{keyframes:e,options:i}=ta(this,"dropdown.hide",{dir:this.localize.dir()});await aa(this.popup.popup,e,i),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return pe`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${be(this.sync?this.sync:void 0)}
        class=${Ze({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Yt.styles=[it,MA];Yt.dependencies={"sl-popup":Je};S([xe(".dropdown")],Yt.prototype,"popup",2);S([xe(".dropdown__trigger")],Yt.prototype,"trigger",2);S([xe(".dropdown__panel")],Yt.prototype,"panel",2);S([$({type:Boolean,reflect:!0})],Yt.prototype,"open",2);S([$({reflect:!0})],Yt.prototype,"placement",2);S([$({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);S([$({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Yt.prototype,"stayOpenOnSelect",2);S([$({attribute:!1})],Yt.prototype,"containingElement",2);S([$({type:Number})],Yt.prototype,"distance",2);S([$({type:Number})],Yt.prototype,"skidding",2);S([$({type:Boolean})],Yt.prototype,"hoist",2);S([$({reflect:!0})],Yt.prototype,"sync",2);S([Re("open",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleOpenChange",1);vt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});vt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var kA="sl-dropdown";Yt.define("sl-dropdown");var $A=ct({tagName:kA,elementClass:Yt,react:rt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"}),E1=$A,OA=Ge`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,ou=class extends Ue{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const i=["menuitem","menuitemcheckbox"],l=e.composedPath(),s=l.find(p=>{var g;return i.includes(((g=p?.getAttribute)==null?void 0:g.call(p,"role"))||"")});if(!s||l.find(p=>{var g;return((g=p?.getAttribute)==null?void 0:g.call(p,"role"))==="menu"})!==this)return;const d=s;d.type==="checkbox"&&(d.checked=!d.checked),this.emit("sl-select",{detail:{item:d}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const i=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),i?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const i=this.getAllItems(),l=this.getCurrentItem();let s=l?i.indexOf(l):0;i.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?s++:e.key==="ArrowUp"?s--:e.key==="Home"?s=0:e.key==="End"&&(s=i.length-1),s<0&&(s=i.length-1),s>i.length-1&&(s=0),this.setCurrentItem(i[s]),i[s].focus())}}handleMouseDown(e){const i=e.target;this.isMenuItem(i)&&this.setCurrentItem(i)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var i;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((i=e.getAttribute("role"))!=null?i:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(l=>{l.setAttribute("tabindex",l===e?"0":"-1")})}render(){return pe`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ou.styles=[it,OA];S([xe("slot")],ou.prototype,"defaultSlot",2);var jA="sl-menu";ou.define("sl-menu");var RA=ct({tagName:jA,elementClass:ou,react:rt,events:{onSlSelect:"sl-select"},displayName:"SlMenu"}),A1=RA,LA=Ge`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ir=(e,i)=>{const l=e._$AN;if(l===void 0)return!1;for(const s of l)s._$AO?.(i,!1),Ir(s,i);return!0},Vc=e=>{let i,l;do{if((i=e._$AM)===void 0)break;l=i._$AN,l.delete(e),e=i}while(l?.size===0)},T1=e=>{for(let i;i=e._$AM;e=i){let l=i._$AN;if(l===void 0)i._$AN=l=new Set;else if(l.has(e))break;l.add(e),BA(i)}};function DA(e){this._$AN!==void 0?(Vc(this),this._$AM=e,T1(this)):this._$AM=e}function zA(e,i=!1,l=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(i)if(Array.isArray(s))for(let u=l;u<s.length;u++)Ir(s[u],!1),Vc(s[u]);else s!=null&&(Ir(s,!1),Vc(s));else Ir(this,e)}const BA=e=>{e.type==Wi.CHILD&&(e._$AP??=zA,e._$AQ??=DA)};let HA=class extends eu{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,l,s){super._$AT(i,l,s),T1(this),this.isConnected=i._$AU}_$AO(i,l=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),l&&(Ir(this,i),Vc(this))}setValue(i){if(Ay(this._$Ct))this._$Ct._$AI(i,this);else{const l=[...this._$Ct._$AH];l[this._$Ci]=i,this._$Ct._$AI(l,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const UA=()=>new IA;let IA=class{};const Fh=new WeakMap,PA=Jc(class extends HA{render(e){return ot}update(e,[i]){const l=i!==this.G;return l&&this.G!==void 0&&this.rt(void 0),(l||this.lt!==this.ct)&&(this.G=i,this.ht=e.options?.host,this.rt(this.ct=e.element)),ot}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const i=this.ht??globalThis;let l=Fh.get(i);l===void 0&&(l=new WeakMap,Fh.set(i,l)),l.get(this.G)!==void 0&&this.G.call(this.ht,void 0),l.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Fh.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var VA=class{constructor(e,i){this.popupRef=UA(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=l=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${l.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${l.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=l=>{switch(l.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":l.target!==this.host&&(l.preventDefault(),l.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(l);break}},this.handleClick=l=>{var s;l.target===this.host?(l.preventDefault(),l.stopPropagation()):l.target instanceof Element&&(l.target.tagName==="sl-menu-item"||(s=l.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=l=>{l.relatedTarget&&l.relatedTarget instanceof Element&&this.host.contains(l.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=l=>{l.stopPropagation()},this.handlePopupReposition=()=>{const l=this.host.renderRoot.querySelector("slot[name='submenu']"),s=l?.assignedElements({flatten:!0}).filter(m=>m.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:u,top:d,width:p,height:g}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?u+p:u}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${d}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?u+p:u}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${d+g}px`)},(this.host=e).addController(this),this.hasSlotController=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const i=this.host.renderRoot.querySelector("slot[name='submenu']");if(!i){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let l=null;for(const s of i.assignedElements())if(l=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),l.length!==0)break;if(!(!l||l.length===0)){l[0].setAttribute("tabindex","0");for(let s=1;s!==l.length;++s)l[s].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?l[0]instanceof HTMLElement&&l[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{l[0]instanceof HTMLElement&&l[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const i=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,u)=>{var d;const p=(d=i.get(u))!=null?d:new CSSUnitValue(0,"px"),m=(p instanceof CSSUnitValue?p:new CSSUnitValue(0,"px")).to("px");return o-m.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?pe`
      <sl-popup
        ${PA(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:pe` <slot name="submenu" hidden></slot> `}},ba=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new oi(this,"submenu"),this.submenuController=new VA(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return i3(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",i=this.submenuController.isExpanded();return pe`
      <div
        id="anchor"
        part="base"
        class=${Ze({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":i})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!i}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?pe` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ba.styles=[it,LA];ba.dependencies={"sl-icon":Ut,"sl-popup":Je,"sl-spinner":Yr};S([xe("slot:not([name])")],ba.prototype,"defaultSlot",2);S([xe(".menu-item")],ba.prototype,"menuItem",2);S([$()],ba.prototype,"type",2);S([$({type:Boolean,reflect:!0})],ba.prototype,"checked",2);S([$()],ba.prototype,"value",2);S([$({type:Boolean,reflect:!0})],ba.prototype,"loading",2);S([$({type:Boolean,reflect:!0})],ba.prototype,"disabled",2);S([Re("checked")],ba.prototype,"handleCheckedChange",1);S([Re("disabled")],ba.prototype,"handleDisabledChange",1);S([Re("type")],ba.prototype,"handleTypeChange",1);var qA="sl-menu-item";ba.define("sl-menu-item");var FA=ct({tagName:qA,elementClass:ba,react:rt,events:{},displayName:"SlMenuItem"}),N1=FA;const GA="_drawer_qj6iq_1",YA="_subHeader_qj6iq_26",WA="_rowLabel_qj6iq_38",XA="_categoryPill_qj6iq_43",QA="_separator_qj6iq_54",ZA="_privacyGroup_qj6iq_61",KA="_headerContent_qj6iq_104",JA="_avatar_qj6iq_110",eT="_headerText_qj6iq_114",tT="_targetName_qj6iq_120",aT="_targetSelector_qj6iq_126",iT="_chevron_qj6iq_141",nT="_secondaryAuthor_qj6iq_146",lT="_bodyContent_qj6iq_156",sT="_textarea_qj6iq_165",rT="_uploadButton_qj6iq_179",oT="_mediaPreview_qj6iq_191",cT="_previewImage_qj6iq_204",uT="_removeMediaButton_qj6iq_211",dT="_footer_qj6iq_217",hT="_footerLeft_qj6iq_224",fT="_footerRight_qj6iq_224",pT="_menuAvatar_qj6iq_231",mT="_menuItemContent_qj6iq_235",tt={drawer:GA,subHeader:YA,rowLabel:WA,categoryPill:XA,separator:QA,privacyGroup:ZA,headerContent:KA,avatar:JA,headerText:eT,targetName:tT,targetSelector:aT,chevron:iT,secondaryAuthor:nT,bodyContent:lT,textarea:sT,uploadButton:rT,mediaPreview:oT,previewImage:cT,removeMediaButton:uT,footer:dT,footerLeft:hT,footerRight:fT,menuAvatar:pT,menuItemContent:mT};function M1({isOpen:e,targets:i,onSuccess:l,onCancel:s}){const[o,u]=M.useState(""),[d,p]=M.useState(null),[g,m]=M.useState(null),[v,y]=M.useState("public"),[_,w]=M.useState(null),C=jx(),N=je(),E=i.find(q=>q.id===_)||i[0],{data:T}=da({enabled:e}),{data:R}=Of({socialId:T?.social_profile_id,enabled:!!T?.social_profile_id&&e}),B=R&&E&&R.id!==E.id&&E.type==="horse";M.useEffect(()=>{if(!d){m(null);return}const q=URL.createObjectURL(d);return m(q),()=>URL.revokeObjectURL(q)},[d]),M.useEffect(()=>{e&&(u(""),p(null),y("public"),i.length>0&&w(i[0].id))},[e]);const z=async()=>{if(!(!o&&!d||!E))try{await C.mutateAsync({targetProfileId:E.id,content:o,media:d,privacyLevel:v}),u(""),p(null),l?.()}catch(q){console.error("Failed to create post:",q)}},k=B?`… ${N.formatMessage({id:"composer.placeholder.withAuthor",defaultMessage:"share what we did together!"})}`:N.formatMessage({id:"composer.placeholder",defaultMessage:"What's happening?"});return f.jsxs(ci,{open:e,placement:"bottom",className:tt.drawer,onSlAfterHide:q=>{q.target===q.currentTarget&&s?.()},children:[f.jsxs("div",{slot:"label",className:tt.headerContent,children:[f.jsx(qe,{image:E?.avatarUrl,name:E?.name||"",className:tt.avatar}),f.jsxs("div",{className:tt.headerText,children:[i.length>1?f.jsxs(E1,{children:[f.jsxs("div",{slot:"trigger",className:tt.targetSelector,children:[f.jsx("span",{className:tt.targetName,children:E?.name}),f.jsx(Qe,{name:"chevron-down",className:tt.chevron})]}),f.jsx(A1,{children:i.map(q=>f.jsx(N1,{value:q.id,type:"checkbox",checked:q.id===E?.id,onClick:()=>w(q.id),className:tt.menuItem,children:f.jsxs("div",{className:tt.menuItemContent,children:[f.jsx(qe,{image:q.avatarUrl,name:q.name,className:tt.menuAvatar}),f.jsx("span",{children:q.name})]})},q.id))})]}):f.jsx("span",{className:tt.targetName,children:E?.name}),B&&f.jsx("span",{className:tt.secondaryAuthor,children:f.jsx(ee,{id:"post.wasWith",defaultMessage:"was with {name}",values:{name:R.display_name}})})]})]}),f.jsxs("div",{className:tt.subHeader,children:[f.jsx("span",{className:tt.rowLabel,children:f.jsx(ee,{id:"composer.category.label",defaultMessage:"Category:"})}),f.jsx("span",{className:tt.categoryPill,children:f.jsx(ee,{id:"category.social",defaultMessage:"Social"})}),f.jsx("div",{className:tt.separator}),f.jsx("span",{className:tt.rowLabel,children:f.jsx(ee,{id:"composer.privacy.label",defaultMessage:"Visibility:"})}),f.jsxs(EA,{value:v,onSlInput:q=>y(q.target.value),className:tt.privacyGroup,children:[f.jsx(v0,{value:"public",pill:!0,size:"small",children:f.jsx(ee,{id:"composer.privacy.public",defaultMessage:"Public"})}),f.jsx(v0,{value:"followers",pill:!0,size:"small",children:f.jsx(ee,{id:"composer.privacy.followers",defaultMessage:"Followers"})})]})]}),f.jsxs("div",{className:tt.bodyContent,children:[f.jsx("textarea",{placeholder:k,value:o,onChange:q=>u(q.target.value),className:tt.textarea,"data-testid":"composer-textarea"}),g&&f.jsxs("div",{className:tt.mediaPreview,children:[f.jsx("img",{src:g,alt:N.formatMessage({id:"composer.mediaPreviewAlt",defaultMessage:"Media preview"}),className:tt.previewImage}),f.jsx(Oe,{variant:"primary",size:"small",circle:!0,className:tt.removeMediaButton,onClick:()=>p(null),children:f.jsx(Qe,{name:"x"})})]})]}),f.jsxs("div",{slot:"footer",className:tt.footer,children:[f.jsx("div",{className:tt.footerLeft,children:f.jsxs("label",{className:tt.uploadButton,title:N.formatMessage({id:"composer.uploadMedia",defaultMessage:"Upload media"}),children:[f.jsx("input",{type:"file",accept:"image/*,video/*",onChange:q=>q.target.files&&p(q.target.files[0]),hidden:!0}),f.jsx(Qe,{name:"image",style:{fontSize:"1.5rem"}})]})}),f.jsxs("div",{className:tt.footerRight,children:[f.jsx(Oe,{variant:"text",onClick:s,children:f.jsx(ee,{id:"common.cancel"})}),f.jsx(Oe,{variant:"primary",onClick:z,loading:C.isPending,disabled:!o&&!d,children:f.jsx(ee,{id:"composer.post",defaultMessage:"Post"})})]})]})]})}var gT=Ge`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,up=class extends Ue{constructor(){super(...arguments),this.hasSlotController=new oi(this,"footer","header","image")}render(){return pe`
      <div
        part="base"
        class=${Ze({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};up.styles=[it,gT];var vT="sl-card";up.define("sl-card");var bT=ct({tagName:vT,elementClass:up,react:rt,events:{},displayName:"SlCard"}),yT=bT,_T=Ge`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Ss=class extends Ue{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return pe`
      <span
        part="base"
        class=${Ze({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ss.styles=[it,_T];S([$({reflect:!0})],Ss.prototype,"variant",2);S([$({type:Boolean,reflect:!0})],Ss.prototype,"pill",2);S([$({type:Boolean,reflect:!0})],Ss.prototype,"pulse",2);var xT="sl-badge";Ss.define("sl-badge");var wT=ct({tagName:xT,elementClass:Ss,react:rt,events:{},displayName:"SlBadge"}),ST=wT,CT=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Dn=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,i=new Date(this.date);if(isNaN(i.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const l=i.getTime()-e.getTime(),{unit:s,value:o}=CT.find(u=>Math.abs(l)<u.max);if(this.isoTime=i.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(l/o),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let u;s==="minute"?u=Ec("second"):s==="hour"?u=Ec("minute"):s==="day"?u=Ec("hour"):u=Ec("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),u)}return pe` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};S([Ke()],Dn.prototype,"isoTime",2);S([Ke()],Dn.prototype,"relativeTime",2);S([$()],Dn.prototype,"date",2);S([$()],Dn.prototype,"format",2);S([$()],Dn.prototype,"numeric",2);S([$({type:Boolean})],Dn.prototype,"sync",2);function Ec(e){const l={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return l-Date.now()%l}var ET="sl-relative-time";Dn.define("sl-relative-time");var AT=ct({tagName:ET,elementClass:Dn,react:rt,events:{},displayName:"SlRelativeTime"}),TT=AT;const NT="_card_b4xpi_1",MT="_categorySocial_b4xpi_12",kT="_header_b4xpi_31",$T="_avatar_b4xpi_37",OT="_headerText_b4xpi_41",jT="_authorName_b4xpi_48",RT="_meta_b4xpi_54",LT="_secondaryAuthor_b4xpi_62",DT="_dot_b4xpi_68",zT="_privacyIcon_b4xpi_73",BT="_content_b4xpi_77",HT="_text_b4xpi_81",UT="_mediaGrid_b4xpi_88",IT="_mediaImage_b4xpi_97",PT="_topRightActions_b4xpi_105",VT="_categoryPill_b4xpi_114",qT="_categorySocialPill_b4xpi_124",FT="_clickable_b4xpi_130",GT="_authorLink_b4xpi_134",xt={card:NT,categorySocial:MT,header:kT,avatar:$T,headerText:OT,authorName:jT,meta:RT,secondaryAuthor:LT,dot:DT,privacyIcon:zT,content:BT,text:HT,mediaGrid:UT,mediaImage:IT,topRightActions:PT,categoryPill:VT,categorySocialPill:qT,clickable:FT,authorLink:GT};function k1({post:e,onAvatarClick:i,onAuthorClick:l,topRightMenu:s}){const o=je(),u=p=>{switch(p){case"followers":return"people";case"restricted":return"lock";case"private":return"eye-slash";default:return"globe"}},d=p=>{switch(p){case"social":return xt.categorySocial;default:return""}};return f.jsxs(yT,{className:`${xt.card} ${d(e.category)}`,children:[f.jsxs("div",{slot:"header",className:xt.header,children:[i?f.jsx("div",{onClick:i,className:xt.clickable,children:f.jsx(qe,{image:e.target.avatarUrl,name:e.target.name,className:xt.avatar})}):f.jsx(qe,{image:e.target.avatarUrl,name:e.target.name,className:xt.avatar}),f.jsxs("div",{className:xt.headerText,children:[f.jsx("span",{className:`${xt.authorName} ${i?xt.clickable:""}`,onClick:i,children:e.target.name}),e.author.id!==e.target.id&&f.jsx("span",{className:xt.secondaryAuthor,children:f.jsx(ee,{id:"post.wasWith",defaultMessage:"was with {name}",values:{name:l?f.jsx("span",{className:xt.authorLink,onClick:l,children:e.author.name},"author"):e.author.name}})}),f.jsxs("div",{className:xt.meta,children:[f.jsx(TT,{date:new Date(e.createdAt),lang:o.locale}),f.jsx("span",{className:xt.dot,children:"•"}),f.jsx(Qe,{name:u(e.privacyLevel),className:xt.privacyIcon})]})]}),f.jsxs("div",{className:xt.topRightActions,children:[e.category==="social"&&f.jsx(ST,{pill:!0,className:`${xt.categoryPill} ${xt.categorySocialPill}`,children:f.jsx(ee,{id:"category.social",defaultMessage:"Social"})}),s]})]}),f.jsxs("div",{className:xt.content,children:[e.content&&f.jsx("p",{className:xt.text,children:e.content}),e.mediaUrls&&e.mediaUrls.length>0&&f.jsx("div",{className:xt.mediaGrid,children:e.mediaUrls.map((p,g)=>f.jsx("img",{src:p,alt:"Post media",className:xt.mediaImage,loading:"lazy"},g))})]})]})}function YT({socialProfileType:e,userMemberships:i,horseDetails:l,orgDetails:s}){const o=[];return e==="user"&&i?i.forEach(u=>o.push(f.jsx("p",{className:at.stableRole,children:f.jsx(ee,{id:`profile.stable.${u.role}`,values:{organizationName:u.organizations?.name,nickName:u.nickname}})},u.id))):e==="horse"&&l?.official_name?o.push(f.jsx("p",{children:l.official_name},"official-name")):e==="organization"&&s?.city&&o.push(f.jsx("p",{children:f.jsx(ee,{id:s.type==="stable"||!s.type?"profile.organization.location":"profile.organization.location.other",values:{city:s.city}})},"org-location")),f.jsx("div",{className:at.stableInfo,children:o})}function WT({profileId:e}){const i=At(),[l,s]=M.useState(!1),[o,u]=M.useState(!1),[d,p]=M.useState(!1),g=Gc(),m=Rx(),v=Lx(),y=Dx(),{data:_,isLoading:w}=da({enabled:!0}),C=e==="me"||e===_?.social_profile_id,N=C?_?.social_profile_id:e,{data:E,isLoading:T}=Of({socialId:N,enabled:!!N}),{data:R}=U0({profileId:E?.id,enabled:!!E?.id}),{data:B,isLoading:z}=zx({userId:E?.entity_id,enabled:E?.type==="user"}),{data:k,isLoading:q}=I0({horseId:E?.entity_id,enabled:E?.type==="horse"}),{data:X,isLoading:ce}=P0({organizationId:E?.entity_id,enabled:E?.type==="organization"}),{data:U}=V0({userId:B?.id,enabled:E?.type==="user"&&!!B}),{data:G,isLoading:te}=Bx({followerId:_?.social_profile_id,targetId:E?.id,enabled:!!_?.social_profile_id&&!!E?.id&&!C}),{data:ae}=Hx({targetId:E?.id,enabled:!!E?.id}),{data:Q,isLoading:ne,fetchNextPage:ie,hasNextPage:I,isFetchingNextPage:Z}=Ux({targetProfileId:E?.id,enabled:!!E?.id&&E.type!=="user"}),J=Q?.pages.flat()||[],se=R?.can_edit_profile??!1,Se=R?.can_post_social??!1,Tt=R?.can_admin_team??!1,Ee=R?.can_admin_social_profile??!1,Qt=E?.type==="horse"||E?.type==="organization",K=E?.type==="horse"?k?.owner_id===_?.id:se,Ie=!C&&Qt&&!K&&!Ee,bt=M.useRef(null);M.useEffect(()=>{const ge=new IntersectionObserver(Ja=>{Ja[0].isIntersecting&&I&&!Z&&ie()},{threshold:.1});return bt.current&&ge.observe(bt.current),()=>ge.disconnect()},[I,Z,ie]);const le=()=>{s(!0)},ze=()=>{!_?.social_profile_id||!E?.id||(G?v.mutate({followerId:_.social_profile_id,targetId:E.id}):m.mutate({followerId:_.social_profile_id,targetId:E.id}))},Te=ge=>{window.confirm(yt.formatMessage({id:"post.deleteConfirmation",defaultMessage:"Are you sure you want to delete this post? This cannot be undone."}))&&y.mutate({postId:ge})},ue=async ge=>{if(E){p(!0);try{const Ja=`${E.id}/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`,{error:zn}=await ma.storage.from("avatars").upload(Ja,ge,{cacheControl:"3600",upsert:!1});if(zn)throw zn;const{data:{publicUrl:en}}=ma.storage.from("avatars").getPublicUrl(Ja);g.mutate({socialProfileId:E.id,avatarUrl:en})}catch(Ja){console.error("Avatar upload failed:",Ja)}finally{p(!1)}}},yt=je();if(w||T||z||q||ce)return f.jsx(ds,{});if(!E)return f.jsx("div",{children:yt.formatMessage({id:"profile.notFound"})});const na=E?.display_name||yt.formatMessage({id:"profile.NoDisplayName"});return f.jsxs("div",{className:at.profilePage,children:[f.jsx("div",{className:at.cover}),f.jsx("div",{className:at.header,children:Ee?f.jsx(S5,{currentImage:E.avatar_url,name:na,onSave:ue,loading:d,className:at.avatar}):f.jsx(qe,{image:E.avatar_url,name:na,className:at.avatar})}),f.jsxs("div",{className:at.profileInfo,children:[f.jsxs("h2",{className:at.name,"data-testid":"profile-name",children:[f.jsx("span",{children:na}),f.jsx("div",{className:at.headerEnd,children:Ie&&_&&f.jsx(Oe,{className:at.followButton,variant:G?"default":"primary",size:"small",onClick:ze,loading:m.isPending||v.isPending||te,"data-testid":"follow-button",children:f.jsx(ee,{id:G?"profile.unfollow":"profile.follow"})})})]}),f.jsx(YT,{socialProfileType:E.type,userMemberships:U,horseDetails:k,orgDetails:X}),f.jsx("div",{className:at.metaInfo,children:Qt&&f.jsx("span",{className:at.followerCount,children:f.jsx(ee,{id:"profile.followers",values:{count:ae||0}})})})]}),se&&f.jsxs(v6,{summary:yt.formatMessage({id:"profile.info",defaultMessage:"Info"}),open:!1,className:at.detailsPanel,"data-testid":"profile-details-panel",children:[f.jsx(Qe,{slot:"expand-icon",name:"chevron-up"}),E.type==="user"&&B&&f.jsx(G6,{user:B}),E.type==="horse"&&k&&f.jsx(X6,{horse:k}),E.type==="organization"&&X&&f.jsx(K6,{organization:X})]}),f.jsxs("div",{className:at.actionButtons,children:[se&&f.jsxs(Oe,{variant:"primary",size:"small",onClick:le,"data-testid":"edit-info-button",children:[f.jsx(Qe,{slot:"prefix",name:"pencil",className:at.actionIcon}),f.jsx(ee,{id:"profile.edit.info"})]}),Se&&f.jsxs(Oe,{variant:"primary",size:"small",onClick:()=>u(!0),"data-testid":"post-update-button",children:[f.jsx(Qe,{slot:"prefix",name:"plus",className:at.actionIconPlus}),f.jsx(ee,{id:"profile.postUpdate"})]}),Tt&&E.type==="horse"&&f.jsxs(Oe,{variant:"primary",size:"small",onClick:()=>i(`/horse/${E.entity_id}/team`),children:[f.jsx(Qe,{slot:"prefix",name:"people",className:at.actionIcon}),f.jsx(ee,{id:"manageTeam.buttonLabel",defaultMessage:"My hoomans"})]})]}),E.type!=="user"&&f.jsxs("div",{className:at.postsSection,children:[f.jsx("div",{className:at.postsSeparator}),f.jsx("h3",{className:at.postsHeading,children:f.jsx(ee,{id:"profile.posts",defaultMessage:"Posts"})}),f.jsxs("div",{className:at.postsList,children:[ne&&f.jsx(ds,{}),!ne&&J?.length===0&&f.jsxs("div",{className:at.emptyState,children:[f.jsx("p",{children:f.jsx(ee,{id:"profile.posts.empty",defaultMessage:"Nothing has been posted yet."})}),Se&&f.jsx("p",{className:at.emptyStateHint,children:f.jsx(ee,{id:"profile.posts.emptyHint",defaultMessage:"Use the '+ Post' button above to start sharing!"})})]}),J?.map(ge=>f.jsx(k1,{post:{id:ge.id,content:ge.content||"",mediaUrls:ge.mediaUrls,createdAt:ge.created_at||new Date().toISOString(),privacyLevel:ge.privacy_level,category:ge.category,author:{id:ge.author.id,name:ge.author.display_name||"Unknown",avatarUrl:ge.author.avatar_url},target:{id:E.id,name:na,avatarUrl:E.avatar_url}},onAuthorClick:()=>i(`/profile/${ge.author.id}`),topRightMenu:Ee||_?.social_profile_id===ge.author.id?f.jsx($t,{name:"trash",label:yt.formatMessage({id:"common.delete",defaultMessage:"Delete"}),className:at.deletePostButton,onClick:()=>Te(ge.id)}):void 0},ge.id)),!ne&&J.length>0&&!I&&f.jsx("div",{className:at.endOfPosts,children:f.jsx(ee,{id:"profile.posts.end",defaultMessage:"That's all for now."})})]}),f.jsx("div",{ref:bt,className:at.loadingMore,children:Z&&f.jsx(ds,{})})]}),E.type==="user"&&B&&f.jsx(oA,{isOpen:l,onClose:()=>s(!1),user:B,socialProfile:E}),E.type==="horse"&&k&&f.jsx(C1,{isOpen:l,onClose:()=>s(!1),horse:k,socialProfile:E}),E.type==="organization"&&X&&f.jsx(_A,{isOpen:l,onClose:()=>s(!1),organization:X,socialProfile:E}),f.jsx(M1,{isOpen:o,targets:[{id:E.id,name:na,avatarUrl:E.avatar_url,type:E.type}],onSuccess:()=>u(!1),onCancel:()=>u(!1)})]})}function b0(){const{social_id:e}=Fr(),i=e||"me",l=i==="me",s=Ix(),o=je(),u=At(),{data:d}=da({enabled:!0}),p=f.jsx("div",{className:Cc.headerActions,children:l?f.jsx($t,{name:"box-arrow-right",label:o.formatMessage({id:"profile.logout"}),onClick:s,"data-testid":"logout-button"}):f.jsx("div",{onClick:()=>u("/profile/me"),className:Cc.profileAction,role:"button",tabIndex:0,children:f.jsx(qe,{image:d?.social_profiles?.avatar_url,name:d?.firstname??"",className:Cc.profileAvatar})})});return f.jsxs("div",{className:Cc.pageWrapper,children:[f.jsx(Ti,{showBackButton:!0,headerActions:p}),f.jsx(WT,{profileId:i})]})}var y0,Xe="colors",ra="sizes",re="space",XT={gap:re,gridGap:re,columnGap:re,gridColumnGap:re,rowGap:re,gridRowGap:re,inset:re,insetBlock:re,insetBlockEnd:re,insetBlockStart:re,insetInline:re,insetInlineEnd:re,insetInlineStart:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,marginBlock:re,marginBlockEnd:re,marginBlockStart:re,marginInline:re,marginInlineEnd:re,marginInlineStart:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,paddingBlock:re,paddingBlockEnd:re,paddingBlockStart:re,paddingInline:re,paddingInlineEnd:re,paddingInlineStart:re,top:re,right:re,bottom:re,left:re,scrollMargin:re,scrollMarginTop:re,scrollMarginRight:re,scrollMarginBottom:re,scrollMarginLeft:re,scrollMarginX:re,scrollMarginY:re,scrollMarginBlock:re,scrollMarginBlockEnd:re,scrollMarginBlockStart:re,scrollMarginInline:re,scrollMarginInlineEnd:re,scrollMarginInlineStart:re,scrollPadding:re,scrollPaddingTop:re,scrollPaddingRight:re,scrollPaddingBottom:re,scrollPaddingLeft:re,scrollPaddingX:re,scrollPaddingY:re,scrollPaddingBlock:re,scrollPaddingBlockEnd:re,scrollPaddingBlockStart:re,scrollPaddingInline:re,scrollPaddingInlineEnd:re,scrollPaddingInlineStart:re,fontSize:"fontSizes",background:Xe,backgroundColor:Xe,backgroundImage:Xe,borderImage:Xe,border:Xe,borderBlock:Xe,borderBlockEnd:Xe,borderBlockStart:Xe,borderBottom:Xe,borderBottomColor:Xe,borderColor:Xe,borderInline:Xe,borderInlineEnd:Xe,borderInlineStart:Xe,borderLeft:Xe,borderLeftColor:Xe,borderRight:Xe,borderRightColor:Xe,borderTop:Xe,borderTopColor:Xe,caretColor:Xe,color:Xe,columnRuleColor:Xe,fill:Xe,outline:Xe,outlineColor:Xe,stroke:Xe,textDecorationColor:Xe,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:ra,minBlockSize:ra,maxBlockSize:ra,inlineSize:ra,minInlineSize:ra,maxInlineSize:ra,width:ra,minWidth:ra,maxWidth:ra,height:ra,minHeight:ra,maxHeight:ra,flexBasis:ra,gridTemplateColumns:ra,gridTemplateRows:ra,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},QT=(e,i)=>typeof i=="function"?{"()":Function.prototype.toString.call(i)}:i,ao=()=>{const e=Object.create(null);return(i,l,...s)=>{const o=(u=>JSON.stringify(u,QT))(i);return o in e?e[o]:e[o]=l(i,...s)}},Rc=Symbol.for("sxs.internal"),dp=(e,i)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)),_0=e=>{for(const i in e)return!0;return!1},{hasOwnProperty:ZT}=Object.prototype,Mf=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(i=>"-"+i.toLowerCase())),KT=/\s+(?![^()]*\))/,as=e=>i=>e(...typeof i=="string"?String(i).split(KT):[i]),x0={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:as(((e,i)=>({marginBlockStart:e,marginBlockEnd:i||e}))),marginInline:as(((e,i)=>({marginInlineStart:e,marginInlineEnd:i||e}))),maxSize:as(((e,i)=>({maxBlockSize:e,maxInlineSize:i||e}))),minSize:as(((e,i)=>({minBlockSize:e,minInlineSize:i||e}))),paddingBlock:as(((e,i)=>({paddingBlockStart:e,paddingBlockEnd:i||e}))),paddingInline:as(((e,i)=>({paddingInlineStart:e,paddingInlineEnd:i||e})))},Gh=/([\d.]+)([^]*)/,JT=(e,i)=>e.length?e.reduce(((l,s)=>(l.push(...i.map((o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(s)&&/&.*&/.test(o)?`:is(${s})`:s):s+" "+o))),l)),[]):i,e7=(e,i)=>e in t7&&typeof i=="string"?i.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((l,s,o,u)=>s+(o==="stretch"?`-moz-available${u};${Mf(e)}:${s}-webkit-fill-available`:`-moz-fit-content${u};${Mf(e)}:${s}fit-content`)+u)):String(i),t7={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Zi=e=>e?e+"-":"",$1=(e,i,l)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((s,o,u,d,p)=>d=="$"==!!u?s:(o||d=="--"?"calc(":"")+"var(--"+(d==="$"?Zi(i)+(p.includes("$")?"":Zi(l))+p.replace(/\$/g,"-"):p)+")"+(o||d=="--"?"*"+(o||"")+(u||"1")+")":""))),a7=/\s*,\s*(?![^()]*\))/,i7=Object.prototype.toString,cs=(e,i,l,s,o)=>{let u,d,p;const g=(m,v,y)=>{let _,w;const C=N=>{for(_ in N){const R=_.charCodeAt(0)===64,B=R&&Array.isArray(N[_])?N[_]:[N[_]];for(w of B){const z=/[A-Z]/.test(T=_)?T:T.replace(/-[^]/g,(q=>q[1].toUpperCase())),k=typeof w=="object"&&w&&w.toString===i7&&(!s.utils[z]||!v.length);if(z in s.utils&&!k){const q=s.utils[z];if(q!==d){d=q,C(q(w)),d=null;continue}}else if(z in x0){const q=x0[z];if(q!==p){p=q,C(q(w)),p=null;continue}}if(R&&(E=_.slice(1)in s.media?"@media "+s.media[_.slice(1)]:_,_=E.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((q,X,ce,U,G,te)=>{const ae=Gh.test(X),Q=.0625*(ae?-1:1),[ne,ie]=ae?[U,X]:[X,U];return"("+(ce[0]==="="?"":ce[0]===">"===ae?"max-":"min-")+ne+":"+(ce[0]!=="="&&ce.length===1?ie.replace(Gh,((I,Z,J)=>Number(Z)+Q*(ce===">"?1:-1)+J)):ie)+(G?") and ("+(G[0]===">"?"min-":"max-")+ne+":"+(G.length===1?te.replace(Gh,((I,Z,J)=>Number(Z)+Q*(G===">"?-1:1)+J)):te):"")+")"}))),k){const q=R?y.concat(_):[...y],X=R?[...v]:JT(v,_.split(a7));u!==void 0&&o(w0(...u)),u=void 0,g(w,X,q)}else u===void 0&&(u=[[],v,y]),_=R||_.charCodeAt(0)!==36?_:`--${Zi(s.prefix)}${_.slice(1).replace(/\$/g,"-")}`,w=k?w:typeof w=="number"?w&&z in n7?String(w)+"px":String(w):$1(e7(z,w??""),s.prefix,s.themeMap[z]),u[0].push(`${R?`${_} `:`${Mf(_)}:`}${w}`)}}var E,T};C(m),u!==void 0&&o(w0(...u)),u=void 0};g(e,i,l)},w0=(e,i,l)=>`${l.map((s=>`${s}{`)).join("")}${i.length?`${i.join(",")}{`:""}${e.join(";")}${i.length?"}":""}${Array(l.length?l.length+1:0).join("}")}`,n7={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},S0=e=>String.fromCharCode(e+(e>25?39:97)),fl=e=>(i=>{let l,s="";for(l=Math.abs(i);l>52;l=l/52|0)s=S0(l%52)+s;return S0(l%52)+s})(((i,l)=>{let s=l.length;for(;s;)i=33*i^l.charCodeAt(--s);return i})(5381,JSON.stringify(e))>>>0),Lr=["themed","global","styled","onevar","resonevar","allvar","inline"],l7=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},s7=e=>{let i;const l=()=>{const{cssRules:o}=i.sheet;return[].map.call(o,((u,d)=>{const{cssText:p}=u;let g="";if(p.startsWith("--sxs"))return"";if(o[d-1]&&(g=o[d-1].cssText).startsWith("--sxs")){if(!u.cssRules.length)return"";for(const m in i.rules)if(i.rules[m].group===u)return`--sxs{--sxs:${[...i.rules[m].cache].join(" ")}}${p}`;return u.cssRules.length?`${g}${p}`:""}return p})).join("")},s=()=>{if(i){const{rules:p,sheet:g}=i;if(!g.deleteRule){for(;Object(Object(g.cssRules)[0]).type===3;)g.cssRules.splice(0,1);g.cssRules=[]}for(const m in p)delete p[m]}const o=Object(e).styleSheets||[];for(const p of o)if(l7(p)){for(let g=0,m=p.cssRules;m[g];++g){const v=Object(m[g]);if(v.type!==1)continue;const y=Object(m[g+1]);if(y.type!==4)continue;++g;const{cssText:_}=v;if(!_.startsWith("--sxs"))continue;const w=_.slice(14,-3).trim().split(/\s+/),C=Lr[w[0]];C&&(i||(i={sheet:p,reset:s,rules:{},toString:l}),i.rules[C]={group:y,index:g,cache:new Set(w)})}if(i)break}if(!i){const p=(g,m)=>({type:m,cssRules:[],insertRule(v,y){this.cssRules.splice(y,0,p(v,{import:3,undefined:1}[(v.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return g==="@media{}"?`@media{${[].map.call(this.cssRules,(v=>v.cssText)).join("")}}`:g}});i={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:p("","text/css"),rules:{},reset:s,toString:l}}const{sheet:u,rules:d}=i;for(let p=Lr.length-1;p>=0;--p){const g=Lr[p];if(!d[g]){const m=Lr[p+1],v=d[m]?d[m].index:u.cssRules.length;u.insertRule("@media{}",v),u.insertRule(`--sxs{--sxs:${p}}`,v),d[g]={group:u.cssRules[v+1],index:v,cache:new Set([p])}}r7(d[g])}};return s(),i},r7=e=>{const i=e.group;let l=i.cssRules.length;e.apply=s=>{try{i.insertRule(s,l),++l}catch{}}},$r=Symbol(),o7=ao(),c7=(e,i)=>o7(e,(()=>(...l)=>{let s={type:null,composers:new Set};for(const o of l)if(o!=null)if(o[Rc]){s.type==null&&(s.type=o[Rc].type);for(const u of o[Rc].composers)s.composers.add(u)}else o.constructor!==Object||o.$$typeof?s.type==null&&(s.type=o):s.composers.add(u7(o,e));return s.type==null&&(s.type="span"),s.composers.size||s.composers.add(["PJLV",{},[],[],{},[]]),d7(e,s,i)})),u7=({variants:e,compoundVariants:i,defaultVariants:l,...s},o)=>{const u=`${Zi(o.prefix)}c-${fl(s)}`,d=[],p=[],g=Object.create(null),m=[];for(const _ in l)g[_]=String(l[_]);if(typeof e=="object"&&e)for(const _ in e){v=g,y=_,ZT.call(v,y)||(g[_]="undefined");const w=e[_];for(const C in w){const N={[_]:String(C)};String(C)==="undefined"&&m.push(_);const E=w[C],T=[N,E,!_0(E)];d.push(T)}}var v,y;if(typeof i=="object"&&i)for(const _ of i){let{css:w,...C}=_;w=typeof w=="object"&&w||{};for(const E in C)C[E]=String(C[E]);const N=[C,w,!_0(w)];p.push(N)}return[u,s,d,p,g,m]},d7=(e,i,l)=>{const[s,o,u,d]=h7(i.composers),p=typeof i.type=="function"||i.type.$$typeof?(y=>{function _(){for(let w=0;w<_[$r].length;w++){const[C,N]=_[$r][w];y.rules[C].apply(N)}return _[$r]=[],null}return _[$r]=[],_.rules={},Lr.forEach((w=>_.rules[w]={apply:C=>_[$r].push([w,C])})),_})(l):null,g=(p||l).rules,m=`.${s}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,v=y=>{y=typeof y=="object"&&y||f7;const{css:_,...w}=y,C={};for(const T in u)if(delete w[T],T in y){let R=y[T];typeof R=="object"&&R?C[T]={"@initial":u[T],...R}:(R=String(R),C[T]=R!=="undefined"||d.has(T)?R:u[T])}else C[T]=u[T];const N=new Set([...o]);for(const[T,R,B,z]of i.composers){l.rules.styled.cache.has(T)||(l.rules.styled.cache.add(T),cs(R,[`.${T}`],[],e,(X=>{g.styled.apply(X)})));const k=C0(B,C,e.media),q=C0(z,C,e.media,!0);for(const X of k)if(X!==void 0)for(const[ce,U,G]of X){const te=`${T}-${fl(U)}-${ce}`;N.add(te);const ae=(G?l.rules.resonevar:l.rules.onevar).cache,Q=G?g.resonevar:g.onevar;ae.has(te)||(ae.add(te),cs(U,[`.${te}`],[],e,(ne=>{Q.apply(ne)})))}for(const X of q)if(X!==void 0)for(const[ce,U]of X){const G=`${T}-${fl(U)}-${ce}`;N.add(G),l.rules.allvar.cache.has(G)||(l.rules.allvar.cache.add(G),cs(U,[`.${G}`],[],e,(te=>{g.allvar.apply(te)})))}}if(typeof _=="object"&&_){const T=`${s}-i${fl(_)}-css`;N.add(T),l.rules.inline.cache.has(T)||(l.rules.inline.cache.add(T),cs(_,[`.${T}`],[],e,(R=>{g.inline.apply(R)})))}for(const T of String(y.className||"").trim().split(/\s+/))T&&N.add(T);const E=w.className=[...N].join(" ");return{type:i.type,className:E,selector:m,props:w,toString:()=>E,deferredInjector:p}};return dp(v,{className:s,selector:m,[Rc]:i,toString:()=>(l.rules.styled.cache.has(s)||v(),s)})},h7=e=>{let i="";const l=[],s={},o=[];for(const[u,,,,d,p]of e){i===""&&(i=u),l.push(u),o.push(...p);for(const g in d){const m=d[g];(s[g]===void 0||m!=="undefined"||p.includes(m))&&(s[g]=m)}}return[i,l,s,new Set(o)]},C0=(e,i,l,s)=>{const o=[];e:for(let[u,d,p]of e){if(p)continue;let g,m=0,v=!1;for(g in u){const y=u[g];let _=i[g];if(_!==y){if(typeof _!="object"||!_)continue e;{let w,C,N=0;for(const E in _){if(y===String(_[E])){if(E!=="@initial"){const T=E.slice(1);(C=C||[]).push(T in l?l[T]:E.replace(/^@media ?/,"")),v=!0}m+=N,w=!0}++N}if(C&&C.length&&(d={["@media "+C.join(", ")]:d}),!w)continue e}}}(o[m]=o[m]||[]).push([s?"cv":`${g}-${u[g]}`,d,v])}return o},f7={},p7=ao(),m7=(e,i)=>p7(e,(()=>(...l)=>{const s=()=>{for(let o of l){o=typeof o=="object"&&o||{};let u=fl(o);if(!i.rules.global.cache.has(u)){if(i.rules.global.cache.add(u),"@import"in o){let d=[].indexOf.call(i.sheet.cssRules,i.rules.themed.group)-1;for(let p of[].concat(o["@import"]))p=p.includes('"')||p.includes("'")?p:`"${p}"`,i.sheet.insertRule(`@import ${p};`,d++);delete o["@import"]}cs(o,[],[],e,(d=>{i.rules.global.apply(d)}))}}return""};return dp(s,{toString:s})})),g7=ao(),v7=(e,i)=>g7(e,(()=>l=>{const s=`${Zi(e.prefix)}k-${fl(l)}`,o=()=>{if(!i.rules.global.cache.has(s)){i.rules.global.cache.add(s);const u=[];cs(l,[],[],e,(p=>u.push(p)));const d=`@keyframes ${s}{${u.join("")}}`;i.rules.global.apply(d)}return s};return dp(o,{get name(){return o()},toString:o})})),b7=class{constructor(i,l,s,o){this.token=i==null?"":String(i),this.value=l==null?"":String(l),this.scale=s==null?"":String(s),this.prefix=o==null?"":String(o)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Zi(this.prefix)+Zi(this.scale)+this.token}toString(){return this.computedValue}},y7=ao(),_7=(e,i)=>y7(e,(()=>(l,s)=>{s=typeof l=="object"&&l||Object(s);const o=`.${l=(l=typeof l=="string"?l:"")||`${Zi(e.prefix)}t-${fl(s)}`}`,u={},d=[];for(const g in s){u[g]={};for(const m in s[g]){const v=`--${Zi(e.prefix)}${g}-${m}`,y=$1(String(s[g][m]),e.prefix,g);u[g][m]=new b7(m,y,g,e.prefix),d.push(`${v}:${y}`)}}const p=()=>{if(d.length&&!i.rules.themed.cache.has(l)){i.rules.themed.cache.add(l);const g=`${s===e.theme?":root,":""}.${l}{${d.join(";")}}`;i.rules.themed.apply(g)}return l};return{...u,get className(){return p()},selector:o,toString:p}})),x7=ao(),O1=e=>{let i=!1;const l=x7(e,(s=>{i=!0;const o="prefix"in(s=typeof s=="object"&&s||{})?String(s.prefix):"",u=typeof s.media=="object"&&s.media||{},d=typeof s.root=="object"?s.root||null:globalThis.document||null,p=typeof s.theme=="object"&&s.theme||{},g={prefix:o,media:u,theme:p,themeMap:typeof s.themeMap=="object"&&s.themeMap||{...XT},utils:typeof s.utils=="object"&&s.utils||{}},m=s7(d),v={css:c7(g,m),globalCss:m7(g,m),keyframes:v7(g,m),createTheme:_7(g,m),reset(){m.reset(),v.theme.toString()},theme:{},sheet:m,config:g,prefix:o,getCssText:m.toString,toString:m.toString};return String(v.theme=v.createTheme(p)),v}));return i||l.reset(),l},j1=()=>y0||(y0=O1()),w7=(...e)=>j1().createTheme(...e),Ji=(...e)=>j1().css(...e),R1={default:{colors:{brand:"hsl(153 60.0% 53.0%)",brandAccent:"hsl(154 54.8% 45.1%)",brandButtonText:"white",defaultButtonBackground:"white",defaultButtonBackgroundHover:"#eaeaea",defaultButtonBorder:"lightgray",defaultButtonText:"gray",dividerBackground:"#eaeaea",inputBackground:"transparent",inputBorder:"lightgray",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"black",inputLabelText:"gray",inputPlaceholder:"darkgray",messageText:"#2b805a",messageBackground:"#e7fcf1",messageBorder:"#d0f3e1",messageTextDanger:"#ff6369",messageBackgroundDanger:"#fff8f8",messageBorderDanger:"#822025",anchorTextColor:"gray",anchorTextHoverColor:"darkgray"},space:{spaceSmall:"4px",spaceMedium:"8px",spaceLarge:"16px",labelBottomMargin:"8px",anchorBottomMargin:"4px",emailInputSpacing:"4px",socialAuthSpacing:"4px",buttonPadding:"10px 15px",inputPadding:"10px 15px"},fontSizes:{baseBodySize:"13px",baseInputSize:"14px",baseLabelSize:"14px",baseButtonSize:"14px"},fonts:{bodyFontFamily:"ui-sans-serif, sans-serif",buttonFontFamily:"ui-sans-serif, sans-serif",inputFontFamily:"ui-sans-serif, sans-serif",labelFontFamily:"ui-sans-serif, sans-serif"},borderWidths:{buttonBorderWidth:"1px",inputBorderWidth:"1px"},radii:{borderRadiusButton:"4px",buttonBorderRadius:"4px",inputBorderRadius:"4px"}},dark:{colors:{brandButtonText:"white",defaultButtonBackground:"#2e2e2e",defaultButtonBackgroundHover:"#3e3e3e",defaultButtonBorder:"#3e3e3e",defaultButtonText:"white",dividerBackground:"#2e2e2e",inputBackground:"#1e1e1e",inputBorder:"#3e3e3e",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"white",inputPlaceholder:"darkgray",messageText:"#85e0b7",messageBackground:"#072719",messageBorder:"#2b805a",messageBackgroundDanger:"#1f1315"}}},wt={SIGN_IN:"sign_in",SIGN_UP:"sign_up",FORGOTTEN_PASSWORD:"forgotten_password",MAGIC_LINK:"magic_link",UPDATE_PASSWORD:"update_password",VERIFY_OTP:"verify_otp"},S7="supabase-auth-ui",C7={ROOT:"root",SIGN_IN:wt.SIGN_IN,SIGN_UP:wt.SIGN_UP,FORGOTTEN_PASSWORD:wt.FORGOTTEN_PASSWORD,MAGIC_LINK:wt.MAGIC_LINK,UPDATE_PASSWORD:wt.UPDATE_PASSWORD,anchor:"ui-anchor",button:"ui-button",container:"ui-container",divider:"ui-divider",input:"ui-input",label:"ui-label",loader:"ui-loader",message:"ui-message"};function yl(e,i,l){var s,o;const u=[],d=C7[e];return u.push(l?.prependedClassName?l?.prependedClassName+"_"+d:S7+"_"+d),(s=l?.className)!=null&&s[e]&&u.push((o=l?.className)==null?void 0:o[e]),(l?.extend===void 0||l?.extend===!0)&&u.push(i),u}function kf(e,i){let l;if(e&&i&&typeof e=="object"&&typeof i=="object"){if(Array.isArray(i))for(l=0;l<i.length;l++)e[l]=kf(e[l],i[l]);else for(l in i)e[l]=kf(e[l],i[l]);return e}return i}function Yh(e,...i){let l=i.length;for(let s=0;s<l;s++)e=kf(e,i[s]);return e}function E7(e,i){return e.replace(/{{(\w+)}}/g,(l,s)=>i.hasOwnProperty(s)?i[s]:l)}var A7={sign_up:{email_label:"Email address",password_label:"Create a Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign up",loading_button_label:"Signing up ...",social_provider_text:"Sign in with {{provider}}",link_text:"Don't have an account? Sign up",confirmation_text:"Check your email for the confirmation link"},sign_in:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign in",loading_button_label:"Signing in ...",social_provider_text:"Sign in with {{provider}}",link_text:"Already have an account? Sign in"},magic_link:{email_input_label:"Email address",email_input_placeholder:"Your email address",button_label:"Send Magic Link",loading_button_label:"Sending Magic Link ...",link_text:"Send a magic link email",confirmation_text:"Check your email for the magic link"},forgotten_password:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",button_label:"Send reset password instructions",loading_button_label:"Sending reset instructions ...",link_text:"Forgot your password?",confirmation_text:"Check your email for the password reset link"},update_password:{password_label:"New password",password_input_placeholder:"Your new password",button_label:"Update password",loading_button_label:"Updating password ...",confirmation_text:"Your password has been updated"},verify_otp:{email_input_label:"Email address",email_input_placeholder:"Your email address",phone_input_label:"Phone number",phone_input_placeholder:"Your phone number",token_input_label:"Token",token_input_placeholder:"Your Otp token",button_label:"Verify token",loading_button_label:"Signing in ..."}};const T7=Ji({fontFamily:"$bodyFontFamily",fontSize:"$baseBodySize",marginBottom:"$anchorBottomMargin",color:"$anchorTextColor",display:"block",textAlign:"center",textDecoration:"underline","&:hover":{color:"$anchorTextHoverColor"}}),hl=({children:e,appearance:i,...l})=>{var s;const o=yl("anchor",T7(),i);return L.createElement("a",{...l,style:(s=i?.style)==null?void 0:s.anchor,className:o.join(" ")},e)},N7=Ji({fontFamily:"$buttonFontFamily",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",borderRadius:"$borderRadiusButton",fontSize:"$baseButtonSize",padding:"$buttonPadding",cursor:"pointer",borderWidth:"$buttonBorderWidth",borderStyle:"solid",width:"100%",transitionProperty:"background-color",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms","&:disabled":{opacity:.7,cursor:"unset"},variants:{color:{default:{backgroundColor:"$defaultButtonBackground",color:"$defaultButtonText",borderColor:"$defaultButtonBorder","&:hover:not(:disabled)":{backgroundColor:"$defaultButtonBackgroundHover"}},primary:{backgroundColor:"$brand",color:"$brandButtonText",borderColor:"$brandAccent","&:hover:not(:disabled)":{backgroundColor:"$brandAccent"}}}}}),Cs=({children:e,color:i="default",appearance:l,icon:s,loading:o=!1,...u})=>{var d;const p=yl("button",N7({color:i}),l);return L.createElement("button",{...u,style:(d=l?.style)==null?void 0:d.button,className:p.join(" "),disabled:o},s,e)},M7=Ji({display:"flex",gap:"4px",variants:{direction:{horizontal:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(48px, 1fr))"},vertical:{flexDirection:"column",margin:"8px 0"}},gap:{small:{gap:"4px"},medium:{gap:"8px"},large:{gap:"16px"}}}}),wi=({children:e,appearance:i,...l})=>{var s;const o=yl("container",M7({direction:l.direction,gap:l.gap}),i);return L.createElement("div",{...l,style:(s=i?.style)==null?void 0:s.container,className:o.join(" ")},e)},k7=Ji({background:"$dividerBackground",display:"block",margin:"16px 0",height:"1px",width:"100%"}),$7=({children:e,appearance:i,...l})=>{var s;const o=yl("divider",k7(),i);return L.createElement("div",{...l,style:(s=i?.style)==null?void 0:s.divider,className:o.join(" ")})},O7=Ji({fontFamily:"$inputFontFamily",background:"$inputBackground",borderRadius:"$inputBorderRadius",padding:"$inputPadding",cursor:"text",borderWidth:"$inputBorderWidth",borderColor:"$inputBorder",borderStyle:"solid",fontSize:"$baseInputSize",width:"100%",color:"$inputText",boxSizing:"border-box","&:hover":{borderColor:"$inputBorderHover",outline:"none"},"&:focus":{borderColor:"$inputBorderFocus",outline:"none"},"&::placeholder":{color:"$inputPlaceholder",letterSpacing:"initial"},transitionProperty:"background-color, border",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms",variants:{type:{default:{letterSpacing:"0px"},password:{letterSpacing:"0px"}}}}),Mn=({children:e,appearance:i,...l})=>{var s;const o=yl("input",O7({type:l.type==="password"?"password":"default"}),i);return L.createElement("input",{...l,style:(s=i?.style)==null?void 0:s.input,className:o.join(" ")},e)},j7=Ji({fontFamily:"$labelFontFamily",fontSize:"$baseLabelSize",marginBottom:"$labelBottomMargin",color:"$inputLabelText",display:"block"}),kn=({children:e,appearance:i,...l})=>{var s;const o=yl("label",j7(),i);return L.createElement("label",{...l,style:(s=i?.style)==null?void 0:s.label,className:o.join(" ")},e)},R7=Ji({fontFamily:"$bodyFontFamily",fontSize:"$baseInputSize",marginBottom:"$labelBottomMargin",display:"block",textAlign:"center",borderRadius:"0.375rem",padding:"1.5rem 1rem",lineHeight:"1rem",color:"$messageText",backgroundColor:"$messageBackground",border:"1px solid $messageBorder",variants:{color:{danger:{color:"$messageTextDanger",backgroundColor:"$messageBackgroundDanger",border:"1px solid $messageBorderDanger"}}}}),Ai=({children:e,appearance:i,...l})=>{var s;const o=yl("message",R7({color:l.color}),i);return L.createElement("span",{...l,style:(s=i?.style)==null?void 0:s.message,className:o.join(" ")},e)};function L1({setAuthView:e=()=>{},supabaseClient:i,redirectTo:l,i18n:s,appearance:o,showLinks:u=!1}){var d;const[p,g]=M.useState(""),[m,v]=M.useState(""),[y,_]=M.useState(""),[w,C]=M.useState(!1),N=async T=>{var R,B;if(T.preventDefault(),v(""),_(""),C(!0),p.length===0){v((R=s?.magic_link)==null?void 0:R.empty_email_address),C(!1);return}const{error:z}=await i.auth.signInWithOtp({email:p,options:{emailRedirectTo:l}});z?v(z.message):_((B=s?.magic_link)==null?void 0:B.confirmation_text),C(!1)},E=s?.magic_link;return L.createElement("form",{id:"auth-magic-link",onSubmit:N},L.createElement(wi,{gap:"large",direction:"vertical",appearance:o},L.createElement("div",null,L.createElement(kn,{htmlFor:"email",appearance:o},E?.email_input_label),L.createElement(Mn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:E?.email_input_placeholder,onChange:T=>{v&&v(""),g(T.target.value)},appearance:o})),L.createElement(Cs,{color:"primary",type:"submit",loading:w,appearance:o},w?E?.loading_button_label:E?.button_label),u&&L.createElement(hl,{href:"#auth-sign-in",onClick:T=>{T.preventDefault(),e(wt.SIGN_IN)},appearance:o},(d=s?.sign_in)==null?void 0:d.link_text),y&&L.createElement(Ai,{appearance:o},y),m&&L.createElement(Ai,{color:"danger",appearance:o},m)))}const Wt=Ji({width:"21px",height:"21px"}),L7=({provider:e})=>e=="google"?D7():e=="facebook"?z7():e=="twitter"?B7():e=="apple"?H7():e=="github"?U7():e=="gitlab"?I7():e=="bitbucket"?P7():e=="discord"?V7():e=="azure"?q7():e=="keycloak"?F7():e=="linkedin"?G7():e=="notion"?Y7():e=="slack"?W7():e=="spotify"?X7():e=="twitch"?Q7():e=="workos"?Z7():e=="kakao"?K7():null,D7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},L.createElement("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),L.createElement("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),L.createElement("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),L.createElement("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})),z7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},L.createElement("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"}),L.createElement("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})),B7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},L.createElement("path",{fill:"#03A9F4",d:"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"})),H7=()=>L.createElement("svg",{className:Wt(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"21px",height:"21px"}," ",L.createElement("path",{d:"M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z"})),U7=()=>L.createElement("svg",{className:Wt(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"21px",height:"21px"}," ",L.createElement("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})),I7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},L.createElement("path",{fill:"#e53935",d:"M24 43L16 20 32 20z"}),L.createElement("path",{fill:"#ff7043",d:"M24 43L42 20 32 20z"}),L.createElement("path",{fill:"#e53935",d:"M37 5L42 20 32 20z"}),L.createElement("path",{fill:"#ffa726",d:"M24 43L42 20 45 28z"}),L.createElement("path",{fill:"#ff7043",d:"M24 43L6 20 16 20z"}),L.createElement("path",{fill:"#e53935",d:"M11 5L6 20 16 20z"}),L.createElement("path",{fill:"#ffa726",d:"M24 43L6 20 3 28z"})),P7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 62.42 62.42"},L.createElement("defs",null,L.createElement("linearGradient",{id:"New_Gradient_Swatch_1",x1:"64.01",y1:"30.27",x2:"32.99",y2:"54.48",gradientUnits:"userSpaceOnUse"},L.createElement("stop",{offset:"0.18",stopColor:"#0052cc"}),L.createElement("stop",{offset:"1",stopColor:"#2684ff"}))),L.createElement("title",null,"Bitbucket-blue"),L.createElement("g",{id:"Layer_2","data-name":"Layer 2"},L.createElement("g",{id:"Blue",transform:"translate(0 -3.13)"},L.createElement("path",{d:"M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z",fill:"#2684ff"}),L.createElement("path",{d:"M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z",fill:"url(#New_Gradient_Swatch_1)"})))),V7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},L.createElement("path",{fill:"#536dfe",d:"M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"})),q7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},L.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6a",x1:"-1254.397",x2:"-1261.911",y1:"877.268",y2:"899.466",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},L.createElement("stop",{offset:"0",stopColor:"#114a8b"}),L.createElement("stop",{offset:"1",stopColor:"#0669bc"})),L.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6a)",d:"M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"}),L.createElement("path",{fill:"#0078d4",d:"M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"}),L.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6b",x1:"-1252.05",x2:"-1253.788",y1:"887.612",y2:"888.2",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},L.createElement("stop",{offset:"0",stopOpacity:".3"}),L.createElement("stop",{offset:".071",stopOpacity:".2"}),L.createElement("stop",{offset:".321",stopOpacity:".1"}),L.createElement("stop",{offset:".623",stopOpacity:".05"}),L.createElement("stop",{offset:"1",stopOpacity:"0"})),L.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6b)",d:"M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"}),L.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6c",x1:"-1252.952",x2:"-1244.704",y1:"876.6",y2:"898.575",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},L.createElement("stop",{offset:"0",stopColor:"#3ccbf4"}),L.createElement("stop",{offset:"1",stopColor:"#2892df"})),L.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6c)",d:"M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"})),F7=()=>L.createElement("svg",{className:Wt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",fill:"#008AAA"})),G7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},L.createElement("path",{fill:"#0288D1",d:"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"}),L.createElement("path",{fill:"#FFF",d:"M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"})),Y7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px",fillRule:"evenodd",clipRule:"evenodd"},L.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",clipRule:"evenodd"}),L.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",clipRule:"evenodd"}),L.createElement("path",{fill:"#424242",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",clipRule:"evenodd"})),W7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},L.createElement("path",{fill:"#33d375",d:"M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"}),L.createElement("path",{fill:"#33d375",d:"M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"}),L.createElement("path",{fill:"#40c4ff",d:"M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"}),L.createElement("path",{fill:"#40c4ff",d:"M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"}),L.createElement("path",{fill:"#e91e63",d:"M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"}),L.createElement("path",{fill:"#e91e63",d:"M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"}),L.createElement("path",{fill:"#ffc107",d:"M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"}),L.createElement("path",{fill:"#ffc107",d:"M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"})),X7=()=>L.createElement("svg",{className:Wt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",fill:"#1ED760"})),Q7=()=>L.createElement("svg",{className:Wt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"white"}),L.createElement("path",{d:"M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"#9146FF"}),L.createElement("path",{d:"M368 120H336V216H368V120Z",fill:"#9146FF"}),L.createElement("path",{d:"M280 120H248V216H280V120Z",fill:"#9146FF"})),Z7=()=>L.createElement("svg",{className:Wt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",fill:"#6363F1"}),L.createElement("path",{d:"M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",fill:"#6363F1"})),K7=()=>L.createElement("svg",{className:Wt(),xmlns:"http://www.w3.org/2000/svg",width:"2500",height:"2500",viewBox:"0 0 256 256"},L.createElement("path",{fill:"#FFE812",d:"M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"}),L.createElement("path",{d:"M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"}),L.createElement("path",{fill:"#FFE812",d:"M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"}));function J7({supabaseClient:e,socialLayout:i="vertical",providers:l=["github","google","azure"],providerScopes:s,queryParams:o,redirectTo:u,onlyThirdPartyProviders:d=!0,view:p="sign_in",i18n:g,appearance:m}){const[v,y]=M.useState(!1),[_,w]=M.useState(""),C=i==="vertical",N=p==="magic_link"?"sign_in":p,E=async R=>{y(!0);const{error:B}=await e.auth.signInWithOAuth({provider:R,options:{redirectTo:u,scopes:s?.[R],queryParams:o}});B&&w(B.message),y(!1)};function T(R){const B=R.toLowerCase();return R.charAt(0).toUpperCase()+B.slice(1)}return L.createElement(L.Fragment,null,l&&l.length>0&&L.createElement(L.Fragment,null,L.createElement(wi,{gap:"large",direction:"vertical",appearance:m},L.createElement(wi,{direction:C?"vertical":"horizontal",gap:C?"small":"medium",appearance:m},l.map(R=>{var B;return L.createElement(Cs,{key:R,color:"default",loading:v,onClick:()=>E(R),appearance:m},L.createElement(L7,{provider:R}),C&&E7((B=g?.[N])==null?void 0:B.social_provider_text,{provider:T(R)}))}))),!d&&L.createElement($7,{appearance:m})))}function E0({authView:e="sign_in",defaultEmail:i="",defaultPassword:l="",setAuthView:s=()=>{},setDefaultEmail:o=C=>{},setDefaultPassword:u=C=>{},supabaseClient:d,showLinks:p=!1,redirectTo:g,additionalData:m,magicLink:v,i18n:y,appearance:_,children:w}){var C,N,E,T;const R=M.useRef(!0),[B,z]=M.useState(i),[k,q]=M.useState(l),[X,ce]=M.useState(""),[U,G]=M.useState(!1),[te,ae]=M.useState("");M.useEffect(()=>(R.current=!0,z(i),q(l),()=>{R.current=!1}),[e]);const Q=async I=>{var Z;switch(I.preventDefault(),ce(""),G(!0),e){case"sign_in":const{error:J}=await d.auth.signInWithPassword({email:B,password:k});J&&ce(J.message);break;case"sign_up":let se={emailRedirectTo:g};m&&(se.data=m);const{data:{user:Se,session:Tt},error:Ee}=await d.auth.signUp({email:B,password:k,options:se});Ee?ce(Ee.message):Se&&!Tt&&ae((Z=y?.sign_up)==null?void 0:Z.confirmation_text);break}R.current&&G(!1)},ne=I=>{o(B),u(k),s(I)},ie=y?.[e];return L.createElement("form",{id:e==="sign_in"?"auth-sign-in":"auth-sign-up",onSubmit:Q,autoComplete:"on",style:{width:"100%"}},L.createElement(wi,{direction:"vertical",gap:"large",appearance:_},L.createElement(wi,{direction:"vertical",gap:"large",appearance:_},L.createElement("div",null,L.createElement(kn,{htmlFor:"email",appearance:_},ie?.email_label),L.createElement(Mn,{id:"email",type:"email",name:"email",placeholder:ie?.email_input_placeholder,defaultValue:B,onChange:I=>z(I.target.value),autoComplete:"email",appearance:_})),L.createElement("div",null,L.createElement(kn,{htmlFor:"password",appearance:_},ie?.password_label),L.createElement(Mn,{id:"password",type:"password",name:"password",placeholder:ie?.password_input_placeholder,defaultValue:k,onChange:I=>q(I.target.value),autoComplete:e==="sign_in"?"current-password":"new-password",appearance:_})),w),L.createElement(Cs,{type:"submit",color:"primary",loading:U,appearance:_},U?ie?.loading_button_label:ie?.button_label),p&&L.createElement(wi,{direction:"vertical",gap:"small",appearance:_},e===wt.SIGN_IN&&v&&L.createElement(hl,{href:"#auth-magic-link",onClick:I=>{I.preventDefault(),s(wt.MAGIC_LINK)},appearance:_},(C=y?.magic_link)==null?void 0:C.link_text),e===wt.SIGN_IN&&L.createElement(hl,{href:"#auth-forgot-password",onClick:I=>{I.preventDefault(),s(wt.FORGOTTEN_PASSWORD)},appearance:_},(N=y?.forgotten_password)==null?void 0:N.link_text),e===wt.SIGN_IN?L.createElement(hl,{href:"#auth-sign-up",onClick:I=>{I.preventDefault(),ne(wt.SIGN_UP)},appearance:_},(E=y?.sign_up)==null?void 0:E.link_text):L.createElement(hl,{href:"#auth-sign-in",onClick:I=>{I.preventDefault(),ne(wt.SIGN_IN)},appearance:_},(T=y?.sign_in)==null?void 0:T.link_text))),te&&L.createElement(Ai,{appearance:_},te),X&&L.createElement(Ai,{color:"danger",appearance:_},X))}function D1({setAuthView:e=()=>{},supabaseClient:i,redirectTo:l,i18n:s,appearance:o,showLinks:u=!1}){var d;const[p,g]=M.useState(""),[m,v]=M.useState(""),[y,_]=M.useState(""),[w,C]=M.useState(!1),N=async T=>{var R;T.preventDefault(),v(""),_(""),C(!0);const{error:B}=await i.auth.resetPasswordForEmail(p,{redirectTo:l});B?v(B.message):_((R=s?.forgotten_password)==null?void 0:R.confirmation_text),C(!1)},E=s?.forgotten_password;return L.createElement("form",{id:"auth-forgot-password",onSubmit:N},L.createElement(wi,{direction:"vertical",gap:"large",appearance:o},L.createElement(wi,{gap:"large",direction:"vertical",appearance:o},L.createElement("div",null,L.createElement(kn,{htmlFor:"email",appearance:o},E?.email_label),L.createElement(Mn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:E?.email_input_placeholder,onChange:T=>g(T.target.value),appearance:o})),L.createElement(Cs,{type:"submit",color:"primary",loading:w,appearance:o},w?E?.loading_button_label:E?.button_label),u&&L.createElement(hl,{href:"#auth-sign-in",onClick:T=>{T.preventDefault(),e(wt.SIGN_IN)},appearance:o},(d=s?.sign_in)==null?void 0:d.link_text),y&&L.createElement(Ai,{appearance:o},y),m&&L.createElement(Ai,{color:"danger",appearance:o},m))))}function z1({supabaseClient:e,i18n:i,appearance:l}){const[s,o]=M.useState(""),[u,d]=M.useState(""),[p,g]=M.useState(""),[m,v]=M.useState(!1),y=async w=>{var C;w.preventDefault(),d(""),g(""),v(!0);const{error:N}=await e.auth.updateUser({password:s});N?d(N.message):g((C=i?.update_password)==null?void 0:C.confirmation_text),v(!1)},_=i?.update_password;return L.createElement("form",{id:"auth-update-password",onSubmit:y},L.createElement(wi,{gap:"large",direction:"vertical",appearance:l},L.createElement("div",null,L.createElement(kn,{htmlFor:"password",appearance:l},_?.password_label),L.createElement(Mn,{id:"password",name:"password",placeholder:_?.password_input_placeholder,type:"password",autoFocus:!0,onChange:w=>o(w.target.value),appearance:l})),L.createElement(Cs,{type:"submit",color:"primary",loading:m,appearance:l},m?_?.loading_button_label:_?.button_label),p&&L.createElement(Ai,{appearance:l},p),u&&L.createElement(Ai,{color:"danger",appearance:l},u)))}function e8({setAuthView:e=()=>{},supabaseClient:i,otpType:l="email",i18n:s,appearance:o,showLinks:u=!1}){var d;const[p,g]=M.useState(""),[m,v]=M.useState(""),[y,_]=M.useState(""),[w,C]=M.useState(""),[N,E]=M.useState(""),[T,R]=M.useState(!1),B=async k=>{k.preventDefault(),C(""),E(""),R(!0);let q={email:p,token:y,type:l};["sms","phone_change"].includes(l)&&(q={phone:m,token:y,type:l});const{error:X}=await i.auth.verifyOtp(q);X&&C(X.message),R(!1)},z=s?.verify_otp;return L.createElement("form",{id:"auth-magic-link",onSubmit:B},L.createElement(wi,{gap:"large",direction:"vertical",appearance:o},["sms","phone_change"].includes(l)?L.createElement("div",null,L.createElement(kn,{htmlFor:"phone",appearance:o},z?.phone_input_label),L.createElement(Mn,{id:"phone",name:"phone",type:"text",autoFocus:!0,placeholder:z?.phone_input_placeholder,onChange:k=>v(k.target.value),appearance:o})):L.createElement("div",null,L.createElement(kn,{htmlFor:"email",appearance:o},z?.email_input_label),L.createElement(Mn,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:z?.email_input_placeholder,onChange:k=>g(k.target.value),appearance:o})),L.createElement("div",null,L.createElement(kn,{htmlFor:"token",appearance:o},z?.token_input_label),L.createElement(Mn,{id:"token",name:"token",type:"text",placeholder:z?.token_input_placeholder,onChange:k=>_(k.target.value),appearance:o})),L.createElement(Cs,{color:"primary",type:"submit",loading:T,appearance:o},T?z?.loading_button_label:z?.button_label),u&&L.createElement(hl,{href:"#auth-sign-in",onClick:k=>{k.preventDefault(),e(wt.SIGN_IN)},appearance:o},(d=s?.sign_in)==null?void 0:d.link_text),N&&L.createElement(Ai,{appearance:o},N),w&&L.createElement(Ai,{color:"danger",appearance:o},w)))}const B1=M.createContext({user:null,session:null}),t8=e=>{const{supabaseClient:i}=e,[l,s]=M.useState(null),[o,u]=M.useState(l?.user??null);M.useEffect(()=>{(async()=>{var g;const{data:m}=await i.auth.getSession();s(m.session),u(((g=m.session)==null?void 0:g.user)??null)})();const{data:p}=i.auth.onAuthStateChange(async(g,m)=>{s(m),u(m?.user??null)});return()=>{p?.subscription.unsubscribe()}},[]);const d={session:l,user:o};return L.createElement(B1.Provider,{value:d,...e})},a8=()=>{const e=M.useContext(B1);if(e===void 0)throw new Error("useUser must be used within a UserContextProvider.");return e};function _l({supabaseClient:e,socialLayout:i="vertical",providers:l,providerScopes:s,queryParams:o,view:u="sign_in",redirectTo:d,onlyThirdPartyProviders:p=!1,magicLink:g=!1,showLinks:m=!0,appearance:v,theme:y="default",localization:_={variables:{}},otpType:w="email",additionalData:C,children:N}){const E=Yh(A7,_.variables??{}),[T,R]=M.useState(u),[B,z]=M.useState(""),[k,q]=M.useState(""),X=T==="sign_in"||T==="sign_up"||T==="magic_link";M.useEffect(()=>{var G,te;O1({theme:Yh(((G=v?.theme)==null?void 0:G.default)??{},((te=v?.variables)==null?void 0:te.default)??{})})},[v]);const ce=({children:G})=>{var te;return L.createElement("div",{className:y!=="default"?w7(Yh(v?.theme[y],((te=v?.variables)==null?void 0:te[y])??{})):""},X&&L.createElement(J7,{appearance:v,supabaseClient:e,providers:l,providerScopes:s,queryParams:o,socialLayout:i,redirectTo:d,onlyThirdPartyProviders:p,i18n:E,view:T}),!p&&G)};M.useEffect(()=>{const{data:G}=e.auth.onAuthStateChange(te=>{te==="PASSWORD_RECOVERY"?R("update_password"):te==="USER_UPDATED"&&R("sign_in")});return R(u),()=>G.subscription.unsubscribe()},[u]);const U={supabaseClient:e,setAuthView:R,defaultEmail:B,defaultPassword:k,setDefaultEmail:z,setDefaultPassword:q,redirectTo:d,magicLink:g,showLinks:m,i18n:E,appearance:v};switch(T){case wt.SIGN_IN:return L.createElement(ce,null,L.createElement(E0,{...U,authView:"sign_in"}));case wt.SIGN_UP:return L.createElement(ce,null,L.createElement(E0,{appearance:v,supabaseClient:e,authView:"sign_up",setAuthView:R,defaultEmail:B,defaultPassword:k,setDefaultEmail:z,setDefaultPassword:q,redirectTo:d,magicLink:g,showLinks:m,i18n:E,additionalData:C,children:N}));case wt.FORGOTTEN_PASSWORD:return L.createElement(ce,null,L.createElement(D1,{appearance:v,supabaseClient:e,setAuthView:R,redirectTo:d,showLinks:m,i18n:E}));case wt.MAGIC_LINK:return L.createElement(ce,null,L.createElement(L1,{appearance:v,supabaseClient:e,setAuthView:R,redirectTo:d,showLinks:m,i18n:E}));case wt.UPDATE_PASSWORD:return L.createElement(z1,{appearance:v,supabaseClient:e,i18n:E});case wt.VERIFY_OTP:return L.createElement(e8,{appearance:v,supabaseClient:e,otpType:w,i18n:E});default:return null}}_l.ForgottenPassword=D1;_l.UpdatePassword=z1;_l.MagicLink=L1;_l.UserContextProvider=t8;_l.useUser=a8;Ji({borderRadius:"12px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:"360px",padding:"28px 32px"});const i8=Px("SocialLogin",{web:()=>ea(()=>import("./web-BTNtCrd6.js"),__vite__mapDeps([7,1])).then(e=>new e.SocialLoginWeb)}),n8=async()=>{if(kt.isNativePlatform())try{const i=(await i8.login({provider:"apple",options:{}})).result;if(i?.idToken){const{data:l,error:s}=await ma.auth.signInWithIdToken({provider:"apple",token:i.idToken});if(s)throw s;return l}else throw new Error("Native Apple Sign-In did not return an ID token.")}catch(e){throw console.error("Native Apple Sign-In failed:",e),e}else return ma.auth.signInWithOAuth({provider:"apple"})},l8="_container_1rhlz_1",A0={container:l8,"apple-button":"_apple-button_1rhlz_9"};function s8(){const e=je(),[i,l]=M.useState(!1);M.useEffect(()=>{(async()=>{if(kt.isNativePlatform()){const d=await kt.getPlatform();l(d==="ios")}else l(!0)})()},[]),M.useEffect(()=>{if(window.location.hash&&window.location.hash.includes("access_token=")){const u=new URLSearchParams(window.location.hash.substring(1)),d=u.get("access_token"),p=u.get("refresh_token");d&&p&&ma.auth.setSession({access_token:d,refresh_token:p})}},[]);const s=async()=>{try{await n8()}catch(u){console.error("Apple login failed",u)}},o={sign_in:{email_label:e.formatMessage({id:"auth.emailLabel"}),password_label:e.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:e.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:e.formatMessage({id:"auth.passwordPlaceholder"}),button_label:e.formatMessage({id:"auth.signInButton"}),social_provider_text:e.formatMessage({id:"auth.signInWithProvider"}),link_text:e.formatMessage({id:"auth.forgotPassword"})},forgotten_password:{email_label:e.formatMessage({id:"auth.emailLabel"}),email_input_placeholder:e.formatMessage({id:"auth.emailPlaceholder"}),button_label:e.formatMessage({id:"auth.sendResetInstructions"}),link_text:e.formatMessage({id:"auth.rememberedPassword"})}};return f.jsxs("div",{className:A0.container,children:[i&&f.jsxs(Oe,{variant:"default",size:"large",onClick:s,className:A0["apple-button"],children:[f.jsx(Qe,{slot:"prefix",name:"apple"}),e.formatMessage({id:"auth.signInWithProviderCustom"},{provider:"Apple"})]}),f.jsx(_l,{supabaseClient:ma,appearance:{theme:R1,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname,view:"sign_in",localization:{variables:o},showLinks:!1})]})}const r8="_pageWrapper_vj5zy_1",o8="_pageContent_vj5zy_12",c8="_legalLinks_vj5zy_22",Wh={pageWrapper:r8,pageContent:o8,legalLinks:c8};function T0(){return f.jsx("div",{className:Wh.pageWrapper,children:f.jsxs("div",{className:Wh.pageContent,children:[f.jsx(Ti,{}),f.jsx(s8,{}),f.jsxs("div",{className:Wh.legalLinks,children:[f.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),f.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const u8="_container_1r3fc_1",Or={container:u8};function d8(){const e=je(),[i]=Sw(),l=At(),[s,o]=M.useState(!1),[u,d]=M.useState(null),p={sign_up:{email_label:e.formatMessage({id:"auth.emailLabel"}),password_label:e.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:e.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:e.formatMessage({id:"auth.passwordPlaceholder"}),button_label:e.formatMessage({id:"auth.signUpButton"}),social_provider_text:e.formatMessage({id:"auth.signUpWithProvider"}),link_text:e.formatMessage({id:"auth.alreadyHaveAccount"})}},g=i.get("token"),m=M.useRef(g),v=M.useRef(!1);M.useEffect(()=>{const N=async T=>{if(v.current)return;v.current=!0,o(!0),d(null);const R=m.current;if(!R){console.error("Invite token is missing after sign-in."),o(!1),v.current=!1;return}try{const{error:B}=await ma.functions.invoke("complete-invite",{body:{token:R,newAuthId:T.user.id}});if(B)throw B;l("/invite-success")}catch(B){console.error("Failed to complete the invite process:",B),d(B instanceof Error?B.message:"An unexpected error occurred"),o(!1),v.current=!1}},{data:{subscription:E}}=ma.auth.onAuthStateChange((T,R)=>{(T==="SIGNED_IN"||T==="INITIAL_SESSION")&&R&&N(R)});if(ma.auth.getSession().then(({data:{session:T}})=>{T&&N(T)}),window.location.hash&&window.location.hash.includes("access_token=")){const T=new URLSearchParams(window.location.hash.substring(1)),R=T.get("access_token"),B=T.get("refresh_token");R&&B&&ma.auth.setSession({access_token:R,refresh_token:B})}return()=>E.unsubscribe()},[l]);const{data:y,isLoading:_,isError:w,error:C}=Vx({token:g});return g?_||s?f.jsx("div",{className:Or.container,children:f.jsx("p",{children:e.formatMessage({id:"invite.checkingToken"})})}):w?f.jsx("div",{className:Or.container,children:f.jsx("p",{children:e.formatMessage({id:"invite.errorCheckingToken"},{message:C?.message})})}):u?f.jsx("div",{className:Or.container,children:f.jsx("p",{children:e.formatMessage({id:"invite.error"},{message:u})})}):f.jsx("div",{className:Or.container,children:y?.status==="valid"?f.jsx(_l,{supabaseClient:ma,appearance:{theme:R1,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google","apple"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname+window.location.search,view:"sign_up",localization:{variables:p},showLinks:!1}):y?.status==="used"?f.jsx("div",{children:f.jsx("p",{children:e.formatMessage({id:"invite.tokenUsed"})})}):f.jsx("div",{children:f.jsx("p",{children:e.formatMessage({id:"invite.invalidToken"})})})}):f.jsx("div",{className:Or.container,children:f.jsx("p",{children:e.formatMessage({id:"invite.noToken"})})})}const h8="_pageWrapper_1smi3_1",f8="_pageContent_1smi3_12",p8="_legalLinks_1smi3_21",Xh={pageWrapper:h8,pageContent:f8,legalLinks:p8};function H1(){return f.jsx("div",{className:Xh.pageWrapper,children:f.jsxs("div",{className:Xh.pageContent,children:[f.jsx(Ti,{}),f.jsx(d8,{}),f.jsxs("div",{className:Xh.legalLinks,children:[f.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),f.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const m8="_pageWrapper_1smi3_1",g8="_pageContent_1smi3_12",N0={pageWrapper:m8,pageContent:g8};function U1(){return f.jsxs("div",{className:N0.pageWrapper,children:[f.jsx(Ti,{}),f.jsxs("div",{className:N0.pageContent,children:[f.jsx("h1",{children:f.jsx(ee,{id:"invite.success.title"})}),f.jsx("p",{children:f.jsx(ee,{id:"invite.success.message"})}),f.jsx("p",{children:f.jsx(ee,{id:"invite.success.instructions"})}),f.jsx(Oe,{variant:"primary",href:"/",children:f.jsx(ee,{id:"common.continue"})})]})]})}var v8=Ge`
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
`,b8=0,Ka=class extends Ue{constructor(){super(...arguments),this.localize=new ia(this),this.attrId=++b8,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,pe`
      <div
        part="base"
        class=${Ze({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?pe`
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
    `}};Ka.styles=[it,v8];Ka.dependencies={"sl-icon-button":Ot};S([xe(".tab")],Ka.prototype,"tab",2);S([$({reflect:!0})],Ka.prototype,"panel",2);S([$({type:Boolean,reflect:!0})],Ka.prototype,"active",2);S([$({type:Boolean,reflect:!0})],Ka.prototype,"closable",2);S([$({type:Boolean,reflect:!0})],Ka.prototype,"disabled",2);S([$({type:Number,reflect:!0})],Ka.prototype,"tabIndex",2);S([Re("active")],Ka.prototype,"handleActiveChange",1);S([Re("disabled")],Ka.prototype,"handleDisabledChange",1);var y8="sl-tab";Ka.define("sl-tab");var _8=ct({tagName:y8,elementClass:Ka,react:rt,events:{onSlClose:"sl-close"},displayName:"SlTab"}),M0=_8,x8=Ge`
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
`,w8=Ge`
  :host {
    display: contents;
  }
`,cu=class extends Ue{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const i=e.assignedElements({flatten:!0});this.observedElements.forEach(l=>this.resizeObserver.unobserve(l)),this.observedElements=[],i.forEach(l=>{this.resizeObserver.observe(l),this.observedElements.push(l)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return pe` <slot @slotchange=${this.handleSlotChange}></slot> `}};cu.styles=[it,w8];S([$({type:Boolean,reflect:!0})],cu.prototype,"disabled",2);S([Re("disabled",{waitUntilFirstUpdate:!0})],cu.prototype,"handleDisabledChange",1);var Pt=class extends Ue{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ia(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(i=>{const l=i.filter(({target:s})=>{if(s===this)return!0;if(s.closest("sl-tab-group")!==this)return!1;const o=s.tagName.toLowerCase();return o==="sl-tab"||o==="sl-tab-panel"});if(l.length!==0){if(l.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),l.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(l.some(s=>s.attributeName==="active")){const o=l.filter(u=>u.attributeName==="active"&&u.target.tagName.toLowerCase()==="sl-tab").map(u=>u.target).find(u=>u.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((l,s)=>{var o;l[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),s.unobserve(l[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,i;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((i=this.resizeObserver)==null||i.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const l=e.target.closest("sl-tab");l?.closest("sl-tab-group")===this&&l!==null&&this.setActiveTab(l,{scrollBehavior:"smooth"})}handleKeyDown(e){const l=e.target.closest("sl-tab");if(l?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&l!==null&&(this.setActiveTab(l,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(p=>p.matches(":focus")),u=this.localize.dir()==="rtl";let d=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(e.key==="Home")d=this.focusableTabs[0];else if(e.key==="End")d=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(u?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const p=this.tabs.findIndex(g=>g===o);d=this.findNextFocusableTab(p,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(u?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const p=this.tabs.findIndex(g=>g===o);d=this.findNextFocusableTab(p,"forward")}if(!d)return;d.tabIndex=0,d.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(d,{scrollBehavior:"smooth"}):this.tabs.forEach(p=>{p.tabIndex=p===d?0:-1}),["top","bottom"].includes(this.placement)&&Cf(d,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,i){if(i=Ki({emitEvents:!0,scrollBehavior:"auto"},i),e!==this.activeTab&&!e.disabled){const l=this.activeTab;this.activeTab=e,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var o;return s.active=s.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Cf(this.activeTab,this.nav,"horizontal",i.scrollBehavior),i.emitEvents&&(l&&this.emit("sl-tab-hide",{detail:{name:l.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const i=this.panels.find(l=>l.name===e.panel);i&&(e.setAttribute("aria-controls",i.getAttribute("id")),i.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const i=e.clientWidth,l=e.clientHeight,s=this.localize.dir()==="rtl",o=this.getAllTabs(),d=o.slice(0,o.indexOf(e)).reduce((p,g)=>({left:p.left+g.clientWidth,top:p.top+g.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${i}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*d.left}px`:`${d.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${l}px`,this.indicator.style.translate=`0 ${d.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,i){let l=null;const s=i==="forward"?1:-1;let o=e+s;for(;e<this.tabs.length;){if(l=this.tabs[o]||null,l===null){i==="forward"?l=this.focusableTabs[0]:l=this.focusableTabs[this.focusableTabs.length-1];break}if(!l.disabled)break;o+=s}return l}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const i=this.tabs.find(l=>l.panel===e);i&&this.setActiveTab(i,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return pe`
      <div
        part="base"
        class=${Ze({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?pe`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Ze({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
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

          ${this.hasScrollControls?pe`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Ze({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
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
    `}};Pt.styles=[it,x8];Pt.dependencies={"sl-icon-button":Ot,"sl-resize-observer":cu};S([xe(".tab-group")],Pt.prototype,"tabGroup",2);S([xe(".tab-group__body")],Pt.prototype,"body",2);S([xe(".tab-group__nav")],Pt.prototype,"nav",2);S([xe(".tab-group__indicator")],Pt.prototype,"indicator",2);S([Ke()],Pt.prototype,"hasScrollControls",2);S([Ke()],Pt.prototype,"shouldHideScrollStartButton",2);S([Ke()],Pt.prototype,"shouldHideScrollEndButton",2);S([$()],Pt.prototype,"placement",2);S([$()],Pt.prototype,"activation",2);S([$({attribute:"no-scroll-controls",type:Boolean})],Pt.prototype,"noScrollControls",2);S([$({attribute:"fixed-scroll-controls",type:Boolean})],Pt.prototype,"fixedScrollControls",2);S([Cy({passive:!0})],Pt.prototype,"updateScrollButtons",1);S([Re("noScrollControls",{waitUntilFirstUpdate:!0})],Pt.prototype,"updateScrollControls",1);S([Re("placement",{waitUntilFirstUpdate:!0})],Pt.prototype,"syncIndicator",1);var S8="sl-tab-group";Pt.define("sl-tab-group");var C8=ct({tagName:S8,elementClass:Pt,react:rt,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),E8=C8,A8=(e,i)=>{let l=0;return function(...s){window.clearTimeout(l),l=window.setTimeout(()=>{e.call(this,...s)},i)}},k0=(e,i,l)=>{const s=e[i];e[i]=function(...o){s.call(this,...o),l.call(this,s,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const i=new Set,l=new WeakMap,s=u=>{for(const d of u.changedTouches)i.add(d.identifier)},o=u=>{for(const d of u.changedTouches)i.delete(d.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),k0(EventTarget.prototype,"addEventListener",function(u,d){if(d!=="scrollend")return;const p=A8(()=>{i.size?p():this.dispatchEvent(new Event("scrollend"))},100);u.call(this,"scroll",p,{passive:!0}),l.set(this,p)}),k0(EventTarget.prototype,"removeEventListener",function(u,d){if(d!=="scrollend")return;const p=l.get(this);p&&u.call(this,"scroll",p,{passive:!0})})}})();const T8="_shell_fdhcs_1",N8="_content_fdhcs_12",M8="_footer_fdhcs_17",k8="_tabContent_fdhcs_47",jr={shell:T8,content:N8,footer:M8,tabContent:k8};function $8({children:e}){const i=At(),l=Fc(),s=M.useRef(null);M.useEffect(()=>{s.current&&s.current.show(l.pathname)},[l.pathname]);const o=u=>{i(u.detail.name)};return f.jsxs("div",{className:jr.shell,children:[f.jsx("main",{className:jr.content,children:e}),f.jsx("footer",{className:jr.footer,children:f.jsxs(E8,{ref:s,placement:"bottom",onSlTabShow:o,children:[f.jsx(M0,{slot:"nav",panel:"/social/dashboard",active:l.pathname==="/social/dashboard",onClick:()=>l.pathname!=="/social/dashboard"&&i("/social/dashboard"),role:"tab",children:f.jsx("div",{className:jr.tabContent,children:f.jsx(Qe,{src:"/assets/stables.svg"})})}),f.jsx(M0,{slot:"nav",panel:"/social/feed",active:l.pathname==="/social/feed",onClick:()=>l.pathname!=="/social/feed"&&i("/social/feed"),role:"tab",children:f.jsx("div",{className:jr.tabContent,children:f.jsx(Qe,{src:"/assets/horses.svg"})})})]})})]})}const qc={"auth.login.title":"Login","auth.signup.title":"Sign up","roster.header.date":"Date","roster.emptySlot":"Tap to assign","roster.edit.drawerLabel":"Edit Roster for {slotName}","roster.edit.assignedHeader":"Assigned:","roster.edit.unassignedHeader":"Available to Add","roster.edit.selectMemberPlaceholder":"Select stable buddy","roster.edit.emptyState":"Nobody assigned.","roster.shareWeekLabel":"Share week","shell.tab.roster":"Roster","shell.tab.profile":"Profile","shell.tab.users":"Friends","profile.header.title":"Profile","profile.logout":"Logout","profile.info":"Info","share.rosterTitle":"Stable Roster","share.rosterText":"Check out this week's roster!","common.save":"Save","common.cancel":"Cancel","common.remove":"Remove","roster.loadPrevious":"Load previous weeks","roster.loadNext":"Load next weeks","roster.weekOf":"Week of {date}","roster.previousWeek":"Previous week","roster.nextWeek":"Next week","roster.selfAssignment.title":"Update Shift","roster.confirmAddSelf":"Do you want to add yourself to this shift?","roster.confirmRemoveSelf":"Do you want to REMOVE yourself from this shift?","auth.emailLabel":"Email address","auth.passwordLabel":"Password","auth.emailPlaceholder":"Your email address","auth.passwordPlaceholder":"Your password","auth.signInButton":"Sign in","auth.signInWithProvider":"Sign in with '{{provider}}'","auth.signInWithProviderCustom":"Sign in with {provider}","auth.signUpButton":"Sign up","auth.signUpWithProvider":"Sign up with '{{provider}}'","auth.alreadyHaveAccount":"Already have an account? Sign in","auth.forgotPassword":"Forgot your password?","auth.sendResetInstructions":"Send reset instructions","auth.rememberedPassword":"Remember your password? Sign in","manageUsers.you":"You","manageUsers.inviteUser":"Invite user","manageUsers.loading":"Loading users...","manageUsers.error":"Error loading users: {message}","manageUsers.removeUser":"Remove user","manageUsers.removeConfirmation":"Are you sure you want to remove {username} from this organization?","manageHorses.yours":"Yours","manageUsers.editUser":"Edit Stable buddy","manageHorses.editHorse":"Edit horse","manageHorses.assignOwner":"Assign Owner","manageHorses.selectOwner":"Select Owner","manageHorses.loading":"Loading horses...","manageHorses.error":"Error loading horses: {message}","manageHorses.removeHorse":"Remove horse","manageHorses.removeConfirmation":"Are you sure you want to remove {horseName} It will completely erase everything about this horse from the system!?","manageHorses.addHorse":"Add Horse","manageHorses.noHorsesFound":"No horses found that are boarded at this location","manageUsers.addUser":"Add Stable Buddy","users.firstNameLabel":"First Name","users.lastNameLabel":"Last Name","horses.nameLabel":"Name","users.fullNameLabel":"Full Name","horses.officialNameLabel":"Official Name","horses.ownerLabel":"Owner","horses.chipNumberLabel":"Transponder (chip) Number","horses.uelnLabel":"Life Number (UELN)","users.languageLabel":"Language","users.nicknameLabel":"Nickname","users.roleLabel":"Role","users.isRosterableLabel":"Can be assigned to roster","organization.role.owner":"Owner","organization.role.admin":"Stable admin","organization.role.member":"Stable buddy","common.language.dutch":"Dutch","common.language.english":"English","horses.noMembersFound":"No stable buddies found in this stable","common.close":"Close","invite.checkingToken":"Checking invite token...","invite.noToken":"No invite token found in the URL.","invite.invalidToken":"The invite token is invalid or has expired.","invite.tokenUsed":"This invite token has already been used.","invite.errorCheckingToken":"An error occurred while checking the invite token: {message}","invite.goToLogin":"Go to Login","invite.share.title":"Invite to Is My Horse","invite.share.text":"You've been invited to join our stable on Is My Horse. Sign up here:","invite.share.error":"Could not create invite link. Please try again.","invite.success.title":"Signup Successful!","invite.success.message":"Your account has been successfully created! From now on you can log in with the account you just created.","invite.success.instructions":"Click the button below to go to the start page of the app","invite.success.login":"Log in","dashboard.roster.title":"Rosters","dashboard.roster.description":"Rosters for e.g. stable duty","shell.tab.dashboard":"Dashboard","dashboard.members.title":"Stable buddies","dashboard.members.description":"People who are connected to the stable","dashboard.members.title.other":"Team members","dashboard.horses.title":"Horses","dashboard.horses.description":"Horses boarded here","dashboard.horses.count":"({count})","dashboard.facilities.title":"Facilities","dashboard.facilities.description":"to reserve things like an arena","navigation.back":"Back","dashboard.myHorses.title":"My Horses","dashboard.myHorses.description":"My own horses","dashboard.myStables.roleDescription.owner":"You are the {role} ({nickname})","dashboard.myStables.roleDescription.other":"You are a {role} ({nickname})","dashboard.relatedHorses.title":"That I work with","dashboard.relatedHorses.description":"Horses owned by others that I work with","dashboard.relatedHorses.roleLabel":"My role","dashboard.following.title":"Following","dashboard.following.description":"Other horses I follow","invite.noProfile.title":"Account Not Fully Activated","invite.noProfile.message":"This is an invite-only beta. Your account must be linked to an invitation to proceed. If you have an invite link, please use it to sign up.","common.continue":"Continue","Initial ownership set by stable admin.":"This horse has been created by the stable owner and assigned to you.","dashboard.myHorses.acceptOwnershipQuestion":"Is {horseName} indeed your horse?","common.yes":"Yes","common.no":"No","ownershipTransfer.status.pending":"pending","ownershipTransfer.status.accepted":"accepted","ownershipTransfer.status.rejected":"rejected","ownershipTransfer.status.cancelled":"cancelled","validation.required":"This field is required.","validation.uelnInvalid":"UELN must be exactly 15 characters long.","validation.chipOrUelnRequired":"Please provide either a Chip Number or a UELN.","horses.scanBarcode":"Scan Barcode","validation.emailInvalid":"Please enter a valid email address.","validation.ageMinimum":"User must be at least 13 years old.","gender.other":"Other / Prefer not to say","gender.male":"Male","gender.female":"Female","users.genderLabel":"Gender","horses.dateOfBirthLabel":"Date of Birth","horses.ageLabel":"Age","horses.genderLabel":"Gender","gender.stallion":"Stallion","gender.mare":"Mare","gender.gelding":"Gelding","horses.countryOfBirthLabel":"Country of Birth","horses.passportNumberLabel":"Passport Number","horses.colorLabel":"Color","horses.breedStudbookLabel":"Breed/Studbook","horses.markingsLabel":"Markings","horses.chipLocationLabel":"Transponder Location","users.dateOfBirthLabel":"Date of Birth","users.cityLabel":"City","users.countryLabel":"Country","profile.notFound":"Profile not found.","profile.NoDisplayName":"No profile name","organization.cocLabel":"Chamber of Commerce","common.notSet":"not set","profile.privacyNotification":"Only you and the stable admin of {organizationName} ({adminName}) can see this information.","profile.stable.member":"Stable buddy at {organizationName} (as {nickName})","profile.stable.admin":"Admin at {organizationName} (as {nickName})","profile.stable.owner":"Owner of {organizationName} (as {nickName})","profile.organization.location":"Stable in {city}","profile.organization.location.other":"Organization in {city}","profile.privacyNotification.organization":"Only visible to you.","profile.privacyNotification.user":"Only you and the admins of the stables you are a member of can see this information.","profile.edit.title":"Edit Profile Name","profile.edit.nameLabel":"Profile Name","profile.edit.info":"Profile","profile.postUpdate":"Post","profile.follow":"Follow","profile.unfollow":"Unfollow","profile.followers":"{count} followers","profile.posts":"Posts","profile.posts.empty":"Nothing has been posted yet.","profile.posts.end":"That's all for now.","profile.posts.emptyHint":"Use the '+ Post' button above to start sharing!","user.edit.title":"Edit Profile","user.edit.success":"Profile updated successfully.","horse.edit.title":"Edit Horse Info","horse.edit.success":"Horse updated successfully.","organization.edit.title":"Edit Organization","organization.nameLabel":"Name","organization.cityLabel":"City","avatar.editor.title":"Edit Profile Picture","avatar.editor.zoom":"Zoom","manageTeam.title":"Manage my Hoomans","manageTeam.stableOwner":"Stable Owner","manageTeam.team":"My hoomans","manageTeam.organizationTeam":"Hoomans from {organizationName}","manageTeam.followers":"Followers","manageTeam.noTeam":"No hoomans added yet.","manageTeam.noFollowers":"No followers found.","manageTeam.demoteTitle":"Remove from my hoomans?","manageTeam.demoteWarning":"Are you sure you want to remove this user from my hoomans? They will lose access to restricted posts.","roles.owner":"Owner","roles.co_owner":"Co-owner","roles.rider":"Rider/Leaser","roles.groom":"Groom","roles.instructor":"Instructor","roles.medical":"Vet/Medical","roles.farrier":"Farrier","roles.stable_owner":"Stable Owner","roles.stable_groom":"Stable Groom","roles.follower":"Follower","roles.follower_only":"Follower","manageTeam.buttonLabel":"My hoomans","composer.placeholder":"What's happening?","composer.post":"Post","composer.title":"Create Post","composer.uploadMedia":"Upload media","composer.privacy.label":"Visibility:","composer.privacy.public":"Public","composer.privacy.followers":"Followers","composer.mediaPreviewAlt":"Media preview","composer.category.social":"Category: Social","composer.category.label":"Category:","category.social":"Social","post.wasWith":"was with {name}","post.withAuthorShort":"... {name}","composer.placeholder.withAuthor":"share what we did together!","common.delete":"Delete","post.deleteConfirmation":"Are you sure you want to delete this post? This cannot be undone.","profile.role.mine":"Mine","profile.role.myRole":"My role: {role}","post.placeholder":"What's happening?","feed.empty":"No posts yet. Follow some horses or stables to see their updates here!","feed.end":"You're all caught up!"},O8=Object.freeze(Object.defineProperty({__proto__:null,default:qc},Symbol.toStringTag,{value:"Module"})),j8="_panel_1flzp_1",R8="_panelContent_1flzp_17",L8="_icon_1flzp_23",D8="_content_1flzp_31",z8="_textContent_1flzp_40",B8="_quickAction_1flzp_56",H8="_chevron_1flzp_65",U8="_lime_1flzp_73",I8="_sky_1flzp_76",P8="_rose_1flzp_79",V8="_brown_1flzp_82",q8="_amber_1flzp_85",An={panel:j8,panelContent:R8,icon:L8,content:D8,textContent:z8,quickAction:B8,chevron:H8,lime:U8,sky:I8,rose:P8,brown:V8,amber:q8};function uu({icon:e,title:i,description:l,link:s,variant:o="lime",quickAction:u,onClick:d}){const p=s?"a":"div",g=m=>{m.stopPropagation()};return f.jsxs(p,{href:s,className:`${An.panel} ${An[o]}`,onClick:m=>{s&&(m.metaKey||m.ctrlKey||m.shiftKey||m.altKey)||(d?(m.preventDefault(),d()):s||m.preventDefault())},children:[f.jsxs("div",{className:An.panelContent,children:[f.jsx("div",{className:An.icon,children:e}),f.jsx("div",{className:An.content,children:f.jsxs("div",{className:An.textContent,children:[f.jsx("strong",{children:i}),l&&f.jsx("div",{children:l})]})}),(s||d)&&f.jsx("div",{className:An.chevron,children:f.jsx(Qe,{name:"chevron-right"})})]}),u&&f.jsx("div",{className:An.quickAction,onClick:g,children:u})]})}const F8="_grid_7ksj6_1",G8="_rosterLinks_7ksj6_7",Y8="_quickActionButton_7ksj6_14",W8="_avatarStack_7ksj6_40",X8="_stackedAvatar_7ksj6_49",Q8="_moreIndicator_7ksj6_64",Z8="_iconContainer_7ksj6_78",K8="_chevron_7ksj6_89",J8="_roleDescription_7ksj6_95",zt={grid:F8,rosterLinks:G8,quickActionButton:Y8,avatarStack:W8,stackedAvatar:X8,moreIndicator:Q8,iconContainer:Z8,chevron:K8,roleDescription:J8};function e9({membership:e}){const i=je(),l=At(),{data:s}=qx({organizationId:e.organizations?.id,enabled:!!e.organizations?.id}),{data:o}=jf({organizationId:e.organizations?.id,enabled:!!e.organizations?.id}),{data:u}=Fx({organizationId:e.organizations?.id,enabled:!!e.organizations?.id}),{data:d}=q0({organizationId:e.organizations?.id,enabled:!!e.organizations?.id}),p=`/profile/${e.organizations?.social_profile_id}`,g=s&&s.length>0,m=o&&o.length>0,v=u&&u.length>0,y=d?.user_profiles?[d.user_profiles.firstname,d.user_profiles.lastname].filter(Boolean).join(" "):d?.nickname;return f.jsx(uu,{variant:e.organizations?.type==="stable"||!e.organizations?.type?"lime":"amber",icon:f.jsx(qe,{name:e.organizations?.name||"",image:e.organizations?.social_profiles?.avatar_url}),title:e.organizations?.name||"",description:f.jsxs(f.Fragment,{children:[y&&e.role!=="owner"&&f.jsxs("div",{style:{fontStyle:"italic",marginBottom:"0.5rem"},children:[i.formatMessage({id:"roles.owner"}),": ",y]}),f.jsx("div",{className:zt.roleDescription,children:i.formatMessage({id:e.role==="owner"?"dashboard.myStables.roleDescription.owner":"dashboard.myStables.roleDescription.other"},{role:i.formatMessage({id:`organization.role.${e.role}`}),nickname:e.nickname})})]}),onClick:()=>l(p),quickAction:(g||m||v)&&f.jsxs("div",{className:zt.rosterLinks,children:[g&&s.map(_=>f.jsxs(xw,{to:`/stable/${e.organizations?.id}/roster/${_.id}`,className:zt.quickActionButton,children:[f.jsx("div",{className:zt.iconContainer,children:f.jsx(Qe,{name:"calendar-date"})}),f.jsx("span",{children:_.name}),f.jsx(Qe,{name:"chevron-right",className:zt.chevron})]},_.id)),m&&f.jsxs("div",{className:zt.quickActionButton,onClick:_=>{_.preventDefault(),_.stopPropagation(),l(`/stable/${e.organizations?.id}/members`)},role:"button",tabIndex:0,children:[f.jsxs("div",{className:zt.avatarStack,children:[o.slice(0,5).map(_=>f.jsx(qe,{name:_.nickname||_.user_profiles?.firstname||"",image:_.user_profiles?.social_profiles?.avatar_url,className:zt.stackedAvatar},_.id)),o.length>5&&f.jsx("div",{className:`${zt.stackedAvatar} ${zt.moreIndicator}`,children:"..."})]}),f.jsx("span",{children:i.formatMessage({id:e.organizations?.type==="stable"||!e.organizations?.type?"dashboard.members.title":"dashboard.members.title.other"})}),f.jsx(Qe,{name:"chevron-right",className:zt.chevron})]}),v&&f.jsxs("div",{className:zt.quickActionButton,onClick:_=>{_.preventDefault(),_.stopPropagation(),l(`/stable/${e.organizations?.id}/horses`)},role:"button",tabIndex:0,children:[f.jsxs("div",{className:zt.avatarStack,children:[u.slice(0,5).map(_=>f.jsx(qe,{name:_.name,image:_.social_profiles?.avatar_url,className:zt.stackedAvatar},_.id)),u.length>5&&f.jsx("div",{className:`${zt.stackedAvatar} ${zt.moreIndicator}`,children:"..."})]}),f.jsx("span",{children:i.formatMessage({id:"dashboard.horses.title"})}),f.jsx(Qe,{name:"chevron-right",className:zt.chevron})]})]})})}function t9(){const{data:e}=da({enabled:!0}),{data:i}=V0({userId:e?.id,enabled:!!e?.id});return!i||i.length===0?null:f.jsx("div",{className:zt.grid,children:i.map(l=>f.jsx(e9,{membership:l},l.id))})}const a9="_horseList_kbyhb_1",i9="_horseEntry_kbyhb_8",n9="_horseItem_kbyhb_28",l9="_horseInfo_kbyhb_36",s9="_horseName_kbyhb_42",r9="_officialName_kbyhb_47",o9="_buttonGroup_kbyhb_53",c9="_pendingActions_kbyhb_59",u9="_divider_kbyhb_65",d9="_notes_kbyhb_72",h9="_question_kbyhb_78",f9="_acceptButton_kbyhb_82",p9="_rejectButton_kbyhb_87",Aa={horseList:a9,horseEntry:i9,horseItem:n9,horseInfo:l9,horseName:s9,officialName:r9,buttonGroup:o9,pendingActions:c9,divider:u9,notes:d9,question:h9,acceptButton:f9,rejectButton:p9};function m9(){const e=je(),i=At(),{data:l}=da({enabled:!0}),s=Gx(),{data:o}=Yx({userId:l?.id,enabled:!!l?.id}),{data:u}=Wx({userId:l?.id,enabled:!!l?.id}),{data:d}=Xx({userId:l?.id,enabled:!!l?.id}),p=new Set(d?.map(N=>N.horse_id)),g=o?.filter(N=>!p.has(N.id))||[],m=N=>d?.find(E=>E.horse_id===N),v=(N,E)=>{l?.id&&s.mutate({transferId:N,status:E})},y=N=>s.isPending&&s.variables?.transferId===N,_=[...g,...u||[],...d?.map(N=>N.horses).filter(Boolean)||[]],w=Array.from(new Map(_.filter(N=>!!N).map(N=>[N.id,N])).values());if(w.length===0)return null;const C=w.length>0?f.jsx("div",{className:Aa.horseList,children:w.map(N=>{if(!N)return null;const E=m(N.id),T=!!E,R=E?.notes;return f.jsxs("div",{className:Aa.horseEntry,children:[f.jsxs("div",{className:Aa.horseItem,onClick:()=>i(`/profile/${N.social_profile_id}`),role:"button",tabIndex:0,onKeyDown:B=>{(B.key==="Enter"||B.key===" ")&&i(`/profile/${N.social_profile_id}`)},children:[f.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:f.jsx(qe,{image:N.social_profiles?.avatar_url,name:N.name})}),f.jsxs("div",{className:Aa.horseInfo,children:[f.jsx("span",{className:Aa.horseName,children:N.name}),N.official_name&&f.jsx("span",{className:Aa.officialName,children:N.official_name})]}),f.jsx(Qe,{name:"chevron-right"})]}),T&&f.jsxs(f.Fragment,{children:[f.jsx("hr",{className:Aa.divider}),f.jsxs("div",{className:Aa.pendingActions,children:[R&&f.jsx("p",{className:Aa.notes,children:f.jsx(ee,{id:R,defaultMessage:R})}),f.jsx("p",{className:Aa.question,children:f.jsx(ee,{id:"dashboard.myHorses.acceptOwnershipQuestion",values:{horseName:N.name}})}),f.jsxs("div",{className:Aa.buttonGroup,children:[f.jsxs(Oe,{size:"small",className:Aa.acceptButton,onClick:()=>v(E.id,"accepted"),loading:y(E.id),disabled:y(E.id),children:[f.jsx(Qe,{slot:"prefix",name:"check-lg"}),f.jsx(ee,{id:"common.yes",defaultMessage:"Yes"})]}),f.jsxs(Oe,{size:"small",className:Aa.rejectButton,onClick:()=>v(E.id,"rejected"),loading:y(E.id),disabled:y(E.id),children:[f.jsx(Qe,{slot:"prefix",name:"x-lg"}),f.jsx(ee,{id:"common.no",defaultMessage:"No"})]})]})]})]})]},N.id)})}):null;return f.jsx(uu,{variant:"brown",icon:f.jsx(Qe,{src:"assets/horses.svg"}),title:e.formatMessage({id:"dashboard.myHorses.title"}),description:e.formatMessage({id:"dashboard.myHorses.description"}),quickAction:C})}const g9="_horseList_mr2ng_1",v9="_horseEntry_mr2ng_8",b9="_horseItem_mr2ng_27",y9="_horseInfo_mr2ng_35",_9="_horseName_mr2ng_41",x9="_officialName_mr2ng_46",is={horseList:g9,horseEntry:v9,horseItem:b9,horseInfo:y9,horseName:_9,officialName:x9};function w9(){const e=je(),i=At(),{data:l}=da({enabled:!0}),{data:s}=Qx({userId:l?.id,enabled:!!l?.id});if(!s||s.length===0)return null;const o=s&&s.length>0?f.jsx("div",{className:is.horseList,children:s.map(u=>f.jsx("div",{className:is.horseEntry,children:f.jsxs("div",{className:is.horseItem,onClick:()=>i(`/profile/${u.social_profile_id}`),role:"button",tabIndex:0,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&i(`/profile/${u.social_profile_id}`)},children:[f.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:f.jsx(qe,{image:u.social_profiles?.avatar_url,name:u.name})}),f.jsxs("div",{className:is.horseInfo,children:[f.jsx("span",{className:is.horseName,children:u.name}),f.jsxs("span",{className:is.officialName,children:[f.jsxs("strong",{children:[e.formatMessage({id:"dashboard.relatedHorses.roleLabel"}),": "]}),u.roles.map(d=>e.formatMessage({id:`roles.${d}`})).join(", ")]})]}),f.jsx(Qe,{name:"chevron-right"})]})},u.id))}):null;return f.jsx(uu,{variant:"rose",icon:f.jsx(Qe,{name:"people"}),title:e.formatMessage({id:"dashboard.relatedHorses.title"}),description:e.formatMessage({id:"dashboard.relatedHorses.description"}),quickAction:o})}const S9="_horseList_17e6v_1",C9="_horseEntry_17e6v_8",E9="_horseItem_17e6v_27",A9="_horseInfo_17e6v_35",T9="_horseName_17e6v_41",N9="_officialName_17e6v_46",ns={horseList:S9,horseEntry:C9,horseItem:E9,horseInfo:A9,horseName:T9,officialName:N9};function M9(){const e=je(),i=At(),{data:l}=da({enabled:!0}),{data:s}=Zx({socialProfileId:l?.social_profile_id,userId:l?.id,enabled:!!l?.social_profile_id});if(!s||s.length===0)return null;const o=s&&s.length>0?f.jsx("div",{className:ns.horseList,children:s.map(u=>f.jsx("div",{className:ns.horseEntry,children:f.jsxs("div",{className:ns.horseItem,onClick:()=>i(`/profile/${u.social_profile_id}`),role:"button",tabIndex:0,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&i(`/profile/${u.social_profile_id}`)},children:[f.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:f.jsx(qe,{image:u.social_profiles?.avatar_url,name:u.name})}),f.jsxs("div",{className:ns.horseInfo,children:[f.jsx("span",{className:ns.horseName,children:u.name}),f.jsxs("span",{className:ns.officialName,children:[f.jsxs("strong",{children:[e.formatMessage({id:"horses.ownerLabel"}),": "]}),u.owner?`${u.owner.firstname} ${u.owner.lastname}`:"-"]})]}),f.jsx(Qe,{name:"chevron-right"})]})},u.id))}):null;return f.jsx(uu,{variant:"sky",icon:f.jsx(Qe,{name:"eye"}),title:e.formatMessage({id:"dashboard.following.title"}),description:e.formatMessage({id:"dashboard.following.description"}),quickAction:o})}const k9="_pageWrapper_he591_1",$9="_pageContent_he591_9",O9="_profileAction_he591_18",j9="_profileAvatar_he591_24",Ac={pageWrapper:k9,pageContent:$9,profileAction:O9,profileAvatar:j9};function R9(){const e=At(),{isLoading:i}=F0({enabled:!0}),{data:l}=da({enabled:!0});return f.jsxs("div",{className:Ac.pageWrapper,children:[f.jsx(Ti,{headerActions:f.jsx("div",{onClick:()=>e("/profile/me"),className:Ac.profileAction,role:"button",tabIndex:0,children:f.jsx(qe,{image:l?.social_profiles?.avatar_url,name:l?.firstname??"",className:Ac.profileAvatar})})}),f.jsxs("div",{className:Ac.pageContent,children:[i&&f.jsx("div",{children:"Loading..."}),f.jsx(t9,{}),f.jsx(m9,{}),f.jsx(w9,{}),f.jsx(M9,{})]})]})}const L9="_pageWrapper_zl49c_1",D9="_pageContent_zl49c_9",z9="_profileAction_zl49c_18",B9="_profileAvatar_zl49c_24",H9="_feedContainer_zl49c_28",U9="_postContainer_zl49c_32",I9="_refreshIndicator_zl49c_37",ol={pageWrapper:L9,pageContent:D9,profileAction:z9,profileAvatar:B9,feedContainer:H9,postContainer:U9,refreshIndicator:I9},P9="_container_eur88_1",V9="_trigger_eur88_10",q9="_triggerAvatar_eur88_24",F9="_chevron_eur88_28",G9="_fakeInput_eur88_33",Y9="_menuItem_eur88_49",W9="_menuItemContent_eur88_53",X9="_menuAvatar_eur88_59",Q9="_menuText_eur88_63",Z9="_menuName_eur88_69",K9="_menuRole_eur88_74",Ta={container:P9,trigger:V9,triggerAvatar:q9,chevron:F9,fakeInput:G9,menuItem:Y9,menuItemContent:W9,menuAvatar:X9,menuText:Q9,menuName:Z9,menuRole:K9};function J9(){const e=je(),{data:i}=Kx({enabled:!0}),[l,s]=M.useState(!1),[o,u]=M.useState(null),d=M.useMemo(()=>!i||i.length===0?null:i.find(v=>v.id===o)||i[0],[i,o]),p=M.useMemo(()=>!i||!d?[]:[...i].sort((y,_)=>y.id===d.id?-1:_.id===d.id?1:0).map(y=>({id:y.id,name:y.display_name,avatarUrl:y.avatar_url,type:y.type})),[i,d]);if(!d)return null;const g=i&&i.length>1,m=v=>{if(v.type==="organization")return e.formatMessage({id:`organization.role.${v.user_role}`,defaultMessage:v.user_role});if(v.type==="horse"){if(["owner","co_owner"].includes(v.user_role))return e.formatMessage({id:"profile.role.mine",defaultMessage:"Mine"});const y=e.formatMessage({id:`roles.${v.user_role}`,defaultMessage:v.user_role});return e.formatMessage({id:"profile.role.myRole",defaultMessage:`My role: ${y}`},{role:y})}return""};return f.jsxs("div",{className:Ta.container,children:[g?f.jsxs(E1,{children:[f.jsxs("div",{slot:"trigger",className:Ta.trigger,children:[f.jsx(qe,{image:d.avatar_url,name:d.display_name,className:Ta.triggerAvatar}),f.jsx(Qe,{name:"chevron-down",className:Ta.chevron})]}),f.jsx(A1,{children:i?.map(v=>f.jsx(N1,{value:v.id,className:Ta.menuItem,onClick:()=>u(v.id),children:f.jsxs("div",{className:Ta.menuItemContent,children:[f.jsx(qe,{image:v.avatar_url,name:v.display_name,className:Ta.menuAvatar}),f.jsxs("div",{className:Ta.menuText,children:[f.jsx("span",{className:Ta.menuName,children:v.display_name}),f.jsx("span",{className:Ta.menuRole,children:m(v)})]})]})},v.id))})]}):f.jsx("div",{className:Ta.trigger,children:f.jsx(qe,{image:d.avatar_url,name:d.display_name,className:Ta.triggerAvatar})}),f.jsx("div",{className:Ta.fakeInput,onClick:()=>s(!0),role:"button",tabIndex:0,onKeyDown:v=>{(v.key==="Enter"||v.key===" ")&&s(!0)},children:e.formatMessage({id:"post.placeholder",defaultMessage:"What's happening?"})}),f.jsx(M1,{isOpen:l,targets:p,onSuccess:()=>s(!1),onCancel:()=>s(!1)})]})}const eN="_feedContainer_grh13_1",tN="_postWrapper_grh13_10",aN="_loadingContainer_grh13_14",iN="_emptyContainer_grh13_15",nN="_spinner_grh13_23",lN="_endOfFeed_grh13_28",cl={feedContainer:eN,postWrapper:tN,loadingContainer:aN,emptyContainer:iN,spinner:nN,endOfFeed:lN};function sN({feed:e,isLoading:i,hasMore:l}={}){const s=At(),{data:o,isLoading:u,hasNextPage:d}=G0({enabled:e===void 0}),p=e??o?.pages.flat()??[],g=i??u,m=e!==void 0?!l:!d;return g?f.jsx("div",{className:cl.loadingContainer,children:f.jsx(ds,{className:cl.spinner})}):!p||p.length===0?f.jsx("div",{className:cl.emptyContainer,children:f.jsx("p",{className:cl.emptyText,children:f.jsx(ee,{id:"feed.empty",defaultMessage:"No posts yet. Follow some horses or stables to see their updates here!"})})}):f.jsxs("div",{className:cl.feedContainer,children:[p.map(v=>f.jsx("div",{className:cl.postWrapper,children:f.jsx(k1,{post:{id:v.id,content:v.content,mediaUrls:v.mediaUrls,createdAt:v.created_at,privacyLevel:v.privacy_level,category:v.category,author:{id:v.author_id,name:v.author_display_name,avatarUrl:v.author_avatar_url},target:{id:v.target_id,name:v.target_display_name,avatarUrl:v.target_avatar_url}},onAuthorClick:()=>s(`/profile/${v.author_id}`),onAvatarClick:()=>s(`/profile/${v.target_id}`)})},v.id)),m&&f.jsx("div",{className:cl.endOfFeed,children:f.jsx(ee,{id:"feed.end",defaultMessage:"You're all caught up!"})})]})}function rN(){const e=At(),{data:i}=da({enabled:!0}),{data:l,isLoading:s,refetch:o,isRefetching:u,fetchNextPage:d,hasNextPage:p,isFetchingNextPage:g}=G0({enabled:!0}),m=l?.pages.flat()||[],[v,y]=M.useState(0),[_,w]=M.useState(!1),C=M.useRef(0),N=M.useRef(null),E=z=>{N.current?.scrollTop===0&&(C.current=z.touches[0].clientY,w(!0))},T=z=>{if(!_)return;const q=z.touches[0].clientY-C.current;q>0&&N.current?.scrollTop===0?y(Math.min(q*.4,120)):(y(0),w(!1))},R=async()=>{w(!1),v>60?(y(60),await o()):y(0)};M.useEffect(()=>{!u&&!_&&y(0)},[u,_]);const B=z=>{const{scrollTop:k,scrollHeight:q,clientHeight:X}=z.currentTarget;q-k-X<300&&p&&!g&&d()};return f.jsxs("div",{className:ol.pageWrapper,children:[f.jsx(Ti,{headerActions:f.jsx("div",{onClick:()=>e("/profile/me"),className:ol.profileAction,role:"button",tabIndex:0,children:f.jsx(qe,{image:i?.social_profiles?.avatar_url,name:i?.firstname??"",className:ol.profileAvatar})})}),f.jsxs("div",{className:ol.pageContent,ref:N,onTouchStart:E,onTouchMove:T,onTouchEnd:R,onScroll:B,children:[f.jsx("div",{className:ol.refreshIndicator,style:{height:u?60:v,opacity:v>0||u?1:0},children:f.jsx(ds,{})}),f.jsx("div",{className:ol.postContainer,children:f.jsx(J9,{})}),f.jsx("div",{className:ol.feedContainer,children:f.jsx(sN,{feed:m,isLoading:s,hasMore:p})})]})]})}var oN=Ge`
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
`,Xt=class extends Ue{constructor(){super(...arguments),this.formControlController=new bs(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,i)=>e.checked=i}),this.hasSlotController=new oi(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),i=this.helpText?!0:!!e;return pe`
      <div
        class=${Ze({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":i})}
      >
        <label
          part="base"
          class=${Ze({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${be(this.value)}
            .checked=${op(this.checked)}
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
    `}};Xt.styles=[it,Zr,oN];S([xe('input[type="checkbox"]')],Xt.prototype,"input",2);S([Ke()],Xt.prototype,"hasFocus",2);S([$()],Xt.prototype,"title",2);S([$()],Xt.prototype,"name",2);S([$()],Xt.prototype,"value",2);S([$({reflect:!0})],Xt.prototype,"size",2);S([$({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);S([$({type:Boolean,reflect:!0})],Xt.prototype,"checked",2);S([rp("checked")],Xt.prototype,"defaultChecked",2);S([$({reflect:!0})],Xt.prototype,"form",2);S([$({type:Boolean,reflect:!0})],Xt.prototype,"required",2);S([$({attribute:"help-text"})],Xt.prototype,"helpText",2);S([Re("checked",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleCheckedChange",1);S([Re("disabled",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleDisabledChange",1);var cN="sl-switch";Xt.define("sl-switch");var uN=ct({tagName:cN,elementClass:Xt,react:rt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"}),I1=uN;const dN="_container_1vojo_1",hN="_userListItem_1vojo_14",fN="_clickable_1vojo_25",pN="_userInfo_1vojo_34",mN="_nameContainer_1vojo_40",gN="_nickname_1vojo_45",vN="_fullName_1vojo_49",bN="_youIndicator_1vojo_55",yN="_iconGroup_1vojo_62",_N="_removeButton_1vojo_68",xN="_editForm_1vojo_72",wN="_switchRow_1vojo_79",SN="_switchLabel_1vojo_85",oa={container:dN,"user-list":"_user-list_1vojo_5",userListItem:hN,clickable:fN,userInfo:pN,nameContainer:mN,nickname:gN,fullName:vN,youIndicator:bN,iconGroup:yN,removeButton:_N,editForm:xN,switchRow:wN,switchLabel:SN};function CN({organizationId:e}){const{data:i}=da({enabled:!0}),{formatMessage:l}=je(),{data:s}=Rf({organizationId:e,enabled:!!e}),o=At(),[u,d]=M.useState(!1),[p,g]=M.useState(null),[m,v]=M.useState(""),[y,_]=M.useState("member"),[w,C]=M.useState(!1),N=Jx(),E=ew(),{data:T,isLoading:R,isError:B,error:z}=jf({organizationId:e,enabled:!!e}),k=M.useMemo(()=>(T??[]).slice().sort((Q,ne)=>(Q.nickname??"").localeCompare(ne.nickname??"")),[T]),q=M.useCallback(async Q=>{const ne=l({id:"manageUsers.removeConfirmation",defaultMessage:"Are you sure you want to remove {username} from this organization?"},{username:Q.user_profiles?.firstname||Q.nickname||"this user"});window.confirm(ne)&&await N.mutateAsync({organizationId:e??"",userProfileId:Q.user_profile_id})},[l,e,N]),X=Q=>{g(Q),v(Q.nickname??""),_(Q.role),C(Q.is_rosterable??!1),d(!0)},ce=()=>{d(!1),g(null)},U=async()=>{if(p)try{await E.mutateAsync({organizationId:e??"",userProfileId:p.user_profile_id,nickname:m,role:y,is_rosterable:w}),ce()}catch(Q){console.error("Failed to update user:",Q)}},G=[{value:"admin",labelId:"organization.role.admin"},{value:"member",labelId:"organization.role.member"}],te=l({id:"manageUsers.inviteUser",defaultMessage:"Invite user"}),ae=({user:Q})=>{const{formatMessage:ne}=je(),{mutate:ie,isPending:I}=tw({mutationFn:()=>aw(Q.user_profile_id),onSuccess:async Z=>{const J=ne({id:"invite.share.title",defaultMessage:"Invite to Is My Horse"}),se=ne({id:"invite.share.text",defaultMessage:"You've been invited to join our stable on Is My Horse. Sign up here:"});await EC(`/invite?token=${Z}`,J,se,te)},onError:Z=>{console.error("Failed to generate invite link:",Z);let se=Z?.context?.error?.message;se||(Z instanceof Error||typeof Z=="object"&&Z!==null&&"message"in Z)&&(se=Z.message),alert(ne({id:"invite.share.error",defaultMessage:"Could not create invite link. Please try again."})+`

Details: ${se}`)}});return I?f.jsx(ds,{style:{fontSize:"1rem"}}):f.jsx($t,{label:te,name:"envelope",onClick:()=>ie()})};return f.jsxs("div",{className:oa.container,children:[f.jsx("ul",{className:oa["user-list"],children:k.map(Q=>f.jsxs("li",{className:`${oa.userListItem} ${Q.user_profiles?.social_profile_id?oa.clickable:""}`,onClick:()=>{Q.user_profiles?.social_profile_id&&o(`/profile/${Q.user_profiles?.social_profile_id}`)},children:[f.jsxs("div",{className:oa.userInfo,children:[f.jsx(qe,{image:Q.user_profiles?.social_profiles?.avatar_url,name:Q.nickname??"",className:oa.avatar}),f.jsxs("div",{className:oa.nameContainer,children:[f.jsxs("span",{className:oa.nickname,children:[Q.nickname,Q.user_profiles?.auth_user_id===i?.auth_user_id&&f.jsxs("span",{className:oa.youIndicator,children:[" ","(",f.jsx(ee,{id:"manageUsers.you",defaultMessage:"You"}),")"]})]}),f.jsxs("span",{className:oa.fullName,children:[Q.user_profiles?.firstname," ",Q.user_profiles?.lastname]})]})]}),f.jsxs("div",{className:oa.iconGroup,onClick:ne=>ne.stopPropagation(),children:[(s==="admin"||s==="owner")&&f.jsx($t,{label:l({id:"manageUsers.editUser"}),name:"pencil",onClick:()=>X(Q)}),(s==="admin"||s==="owner")&&Q.user_profiles?.auth_user_id!==i?.auth_user_id&&f.jsxs(f.Fragment,{children:[!Q.user_profiles?.auth_user_id&&f.jsx(ae,{user:Q}),f.jsx($t,{className:oa.removeButton,label:l({id:"manageUsers.removeUser",defaultMessage:"Remove user"}),name:"trash",onClick:()=>q(Q)})]})]})]},Q.id))}),R&&f.jsx("p",{children:f.jsx(ee,{id:"manageUsers.loading",defaultMessage:"Loading users..."})}),B&&f.jsx("p",{children:f.jsx(ee,{id:"manageUsers.error",defaultMessage:"Error loading users: {message}",values:{message:z?.message}})}),f.jsxs(Jr,{label:l({id:"manageUsers.editUser"}),open:u,onSlAfterHide:ce,children:[f.jsxs("div",{className:oa.editForm,children:[f.jsx(Ne,{label:l({id:"users.fullNameLabel"}),value:`${p?.user_profiles?.firstname??""} ${p?.user_profiles?.lastname??""}`,disabled:!0}),f.jsx(Ne,{label:l({id:"users.nicknameLabel"}),value:m,onSlInput:Q=>v(Q.target.value)}),p?.role==="owner"?f.jsx(Ne,{label:l({id:"users.roleLabel"}),value:l({id:"organization.role.owner"}),disabled:!0}):f.jsx(ua,{label:l({id:"users.roleLabel"}),value:y,onSlAfterHide:Q=>{Q.stopPropagation()},onSlChange:Q=>_(Q.target.value),children:G.map(Q=>f.jsx(Pe,{value:Q.value,children:l({id:Q.labelId})},Q.value))}),f.jsxs("div",{className:oa.switchRow,children:[f.jsx("span",{className:oa.switchLabel,children:l({id:"users.isRosterableLabel"})}),f.jsx(I1,{checked:w,onSlChange:Q=>C(Q.target.checked)})]})]}),f.jsx(Oe,{slot:"footer",variant:"primary",onClick:U,loading:E.isPending,children:f.jsx(ee,{id:"common.save"})}),f.jsx(Oe,{slot:"footer",onClick:ce,children:f.jsx(ee,{id:"common.cancel"})})]})]})}const EN="_addUserDrawer_4mi60_1",AN="_formContent_4mi60_33",$0={addUserDrawer:EN,formContent:AN},{useAddUserToStable:TN,useUserOrganization:NN}=await ea(async()=>{const{useAddUserToStable:e,useUserOrganization:i}=await import("./index-CarnrZAn.js").then(l=>l.b2);return{useAddUserToStable:e,useUserOrganization:i}},[]);function MN({isOpen:e,onClose:i,onSaveSuccess:l}){const s=je(),{data:o}=NN({enabled:e}),u=TN(),[d,p]=M.useState(""),[g,m]=M.useState(""),[v,y]=M.useState(""),[_,w]=M.useState("member"),[C,N]=M.useState(!1),[E,T]=M.useState({}),R=[{value:"admin",labelId:"organization.role.admin"},{value:"member",labelId:"organization.role.member"}];M.useEffect(()=>{e||B()},[e]);const B=()=>{p(""),m(""),y(""),w("member"),N(!1),T({})},z=()=>{B(),i()},k=()=>{const X={},ce=s.formatMessage({id:"validation.required"});return d.trim()||(X.firstname=ce),g.trim()||(X.lastname=ce),_||(X.role=ce),T(X),Object.keys(X).length===0},q=async()=>{if(!(!k()||!o?.id))try{await u.mutateAsync({organization_id:o.id,firstname:d,lastname:g,nickname:v||d,role:_,is_rosterable:C,locale:s.locale}),l?.(),i()}catch(X){console.error("Failed to add user:",X)}};return f.jsxs(ci,{label:s.formatMessage({id:"manageUsers.addUser"}),placement:"end",open:e,onSlAfterHide:z,className:$0.addUserDrawer,children:[f.jsxs("div",{className:$0.formContent,children:[f.jsx(Ne,{"data-testid":"firstname-input",label:s.formatMessage({id:"users.firstNameLabel"}),value:d,onSlInput:X=>p(X.target.value),required:!0,helpText:E.firstname}),f.jsx(Ne,{"data-testid":"lastname-input",label:s.formatMessage({id:"users.lastNameLabel"}),value:g,onSlInput:X=>m(X.target.value),required:!0,helpText:E.lastname}),f.jsx(Ne,{"data-testid":"nickname-input",label:s.formatMessage({id:"users.nicknameLabel"}),value:v,onSlInput:X=>y(X.target.value)}),f.jsx(ua,{"data-testid":"role-select",label:s.formatMessage({id:"users.roleLabel"}),value:_,onSlChange:X=>w(X.target.value),onSlAfterHide:X=>{X.stopPropagation()},required:!0,helpText:E.role,children:R.map(X=>f.jsx(Pe,{value:X.value,children:s.formatMessage({id:X.labelId})},X.value))}),f.jsx(I1,{"data-testid":"rosterable-switch",checked:C,onSlChange:X=>N(X.target.checked),children:s.formatMessage({id:"users.isRosterableLabel"})})]}),f.jsx(Oe,{slot:"footer",variant:"primary",onClick:q,loading:u.isPending,children:f.jsx(ee,{id:"common.save",defaultMessage:"Save"})}),f.jsx(Oe,{slot:"footer",variant:"neutral",onClick:z,children:f.jsx(ee,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const kN="_pageWrapper_1ufe2_1",$N="_pageContent_1ufe2_11",ON="_drawer_1ufe2_20",jN="_profileAction_1ufe2_33",RN="_profileAvatar_1ufe2_39",LN="_headerActions_1ufe2_43",ls={pageWrapper:kN,pageContent:$N,drawer:ON,profileAction:jN,profileAvatar:RN,headerActions:LN};function DN(){const e=je(),{organization_id:i}=Fr(),{data:l}=Rf({organizationId:i,enabled:!0}),{data:s}=da({enabled:!0}),o=At(),u=M.useRef(null),[d,p]=M.useState(!1),g=()=>{p(!0)};return f.jsx(ci,{label:e.formatMessage({id:"shell.tab.users"}),placement:"end",open:!0,ref:u,className:ls.drawer,children:f.jsxs("div",{className:ls.pageWrapper,children:[f.jsx(MN,{isOpen:d,onClose:()=>{u.current?.modal.deactivateExternal(),p(!1)},onSaveSuccess:()=>console.log("User added successfully!")}),f.jsx(Ti,{showBackButton:!0,headerActions:l==="admin"||l==="owner"?f.jsxs("div",{className:ls.headerActions,children:[f.jsx($t,{"data-testid":"add-user-button",label:e.formatMessage({id:"manageUsers.addUser"}),onClick:()=>{u.current?.modal.activateExternal(),g()},name:"plus"}),f.jsx("div",{onClick:()=>o("/profile/me"),className:ls.profileAction,role:"button",tabIndex:0,children:f.jsx(qe,{image:s?.social_profiles?.avatar_url,name:s?.firstname??"",className:ls.profileAvatar})})]}):null}),f.jsx("div",{className:ls.pageContent,children:f.jsx(CN,{organizationId:i})})]})})}const zN="_container_1cmcv_1",BN="_clickable_1cmcv_25",HN="_horseInfo_1cmcv_34",UN="_nameContainer_1cmcv_40",IN="_horseName_1cmcv_45",PN="_age_1cmcv_49",VN="_divider_1cmcv_55",qN="_ownerInfo_1cmcv_61",FN="_ownerLabel_1cmcv_68",GN="_status_1cmcv_72",YN="_ownerSelect_1cmcv_85",Gt={container:zN,"horse-list":"_horse-list_1cmcv_5","horse-list-item":"_horse-list-item_1cmcv_14",clickable:BN,horseInfo:HN,nameContainer:UN,horseName:IN,age:PN,divider:VN,ownerInfo:qN,ownerLabel:FN,status:GN,"icon-group":"_icon-group_1cmcv_77",ownerSelect:YN},{useOrganizationHorses:WN,useCurrentUserProfile:XN,useDeleteHorse:QN,useOrganizationMembers:ZN,useOrganizationHorseTransfers:KN,useCurrentUserOrganizationRole:JN,useInitiateOwnershipTransfer:eM}=await ea(async()=>{const{useOrganizationHorses:e,useCurrentUserProfile:i,useDeleteHorse:l,useOrganizationMembers:s,useOrganizationHorseTransfers:o,useCurrentUserOrganizationRole:u,useInitiateOwnershipTransfer:d}=await import("./index-CarnrZAn.js").then(p=>p.b2);return{useOrganizationHorses:e,useCurrentUserProfile:i,useDeleteHorse:l,useOrganizationMembers:s,useOrganizationHorseTransfers:o,useCurrentUserOrganizationRole:u,useInitiateOwnershipTransfer:d}},[]);function tM({organizationId:e}){const{formatMessage:i,locale:l}=je(),s=At(),{data:o}=XN({enabled:!0}),u=QN(),d=eM(),{data:p}=JN({organizationId:e,enabled:!!e}),[g,m]=M.useState(null),[v,y]=M.useState(null),[_,w]=M.useState(""),{data:C}=ZN({organizationId:e,enabled:!!e}),{data:N}=KN({organizationId:e,enabled:!!e}),{data:E,isLoading:T,isError:R,error:B}=WN({organizationId:e,enabled:!!e}),z=M.useMemo(()=>(E??[]).slice().sort((U,G)=>U.name.localeCompare(G.name)),[E]),k=M.useMemo(()=>C?new Map(C.map(U=>[U.user_profile_id,U])):new Map,[C]),q=M.useMemo(()=>N?new Map(N.map(U=>[U.horse_id,U])):new Map,[N]),X=M.useCallback(async U=>{const G=i({id:"manageHorses.removeConfirmation",defaultMessage:"Are you sure you want to remove {horseName}?"},{horseName:U.name});window.confirm(G)&&await u.mutateAsync({horseId:U.id,organizationId:e??""})},[i,e,u]),ce=M.useCallback(async()=>{if(!(!v||!_||!e))try{await d.mutateAsync({horseId:v.id,toOwnerId:_,organizationId:e,notes:"Initial ownership set by stable admin.",forceOwnership:!0}),y(null),w("")}catch(U){console.error("Failed to initiate transfer",U)}},[v,_,e,d]);return f.jsxs("div",{className:Gt.container,children:[f.jsx("ul",{className:Gt["horse-list"],children:z.map(U=>{const G=U.owner_id?k.get(U.owner_id):void 0,te=q.get(U.id),ae=U.owner_id===o?.id;return f.jsxs("li",{className:`${Gt["horse-list-item"]} ${U.social_profile_id?Gt.clickable:""}`,onClick:()=>{U.social_profile_id&&s(`/profile/${U.social_profile_id}`)},children:[f.jsxs("div",{className:Gt.horseInfo,children:[f.jsx(qe,{image:U.social_profiles?.avatar_url,name:U.name,className:Gt.avatar}),f.jsxs("div",{className:Gt.nameContainer,children:[f.jsx("span",{className:Gt.horseName,children:U.name}),U.date_of_birth&&f.jsx("span",{className:Gt.age,children:su(U.date_of_birth,l.startsWith("nl")?"nl":"en")})]})]}),f.jsx("hr",{className:Gt.divider}),f.jsxs("div",{className:Gt.ownerInfo,children:[f.jsxs("span",{className:Gt.ownerLabel,children:[f.jsx(ee,{id:"horses.ownerLabel",defaultMessage:"Owner"}),":"]}),ae?f.jsx("span",{className:Gt.ownerName,children:f.jsx(ee,{id:"manageHorses.yours",defaultMessage:"Yours"})}):f.jsxs("span",{className:Gt.ownerName,children:[G?.user_profiles?.firstname," ",G?.user_profiles?.lastname]}),te?.status&&f.jsxs("span",{className:Gt.status,children:["(",f.jsx(ee,{id:`ownershipTransfer.status.${te.status}`,defaultMessage:te.status}),")"]})]}),f.jsx("span",{className:Gt["icon-group"],onClick:Q=>Q.stopPropagation(),children:(p==="admin"||p==="owner")&&f.jsxs(f.Fragment,{children:[!U.owner_id&&f.jsx($t,{label:i({id:"manageHorses.assignOwner",defaultMessage:"Assign Owner"}),name:"person-plus",onClick:()=>y(U)}),f.jsx($t,{label:i({id:"manageHorses.editHorse",defaultMessage:"Edit horse"}),name:"pencil",onClick:()=>m(U)}),f.jsx($t,{label:i({id:"manageHorses.removeHorse",defaultMessage:"Remove horse"}),name:"trash",style:{color:"red"},onClick:()=>X(U)})]})})]},U.id)})}),T&&f.jsx("p",{children:f.jsx(ee,{id:"manageHorses.loading",defaultMessage:"Loading horses..."})}),R&&f.jsx("p",{children:f.jsx(ee,{id:"manageHorses.error",defaultMessage:"Error loading horses: {message}",values:{message:B?.message}})}),!T&&!R&&z.length===0&&f.jsx("p",{children:f.jsx(ee,{id:"manageHorses.noHorsesFound",defaultMessage:"No horses found that are boarded at this location"})}),g&&f.jsx(C1,{isOpen:!!g,onClose:()=>m(null),horse:g,socialProfile:g.social_profiles??void 0}),f.jsxs(Jr,{label:i({id:"manageHorses.assignOwner",defaultMessage:"Assign Owner"}),open:!!v,onSlAfterHide:()=>{y(null),w("")},children:[f.jsx(ua,{label:i({id:"manageHorses.selectOwner",defaultMessage:"Select Owner"}),value:_,onSlChange:U=>w(U.target.value),hoist:!0,placement:"top",onSlAfterHide:U=>U.stopPropagation(),className:Gt.ownerSelect,children:C?.map(U=>f.jsxs(Pe,{value:U.user_profile_id,children:[U.user_profiles?.firstname," ",U.user_profiles?.lastname]},U.user_profile_id))}),f.jsxs("div",{slot:"footer",children:[f.jsx(Oe,{variant:"neutral",onClick:()=>y(null),children:f.jsx(ee,{id:"common.cancel",defaultMessage:"Cancel"})}),f.jsx(Oe,{variant:"primary",onClick:ce,disabled:!_||d.isPending,loading:d.isPending,children:f.jsx(ee,{id:"common.save",defaultMessage:"Save"})})]})]})]})}const aM="_addUserDrawer_anohp_1",iM="_formContent_anohp_32",nM="_inputWithIcon_anohp_45",lM="_countrySelect_anohp_57",sM="_dobRow_anohp_61",rM="_dobInput_anohp_68",oM="_ageDisplay_anohp_72",Tn={addUserDrawer:aM,formContent:iM,inputWithIcon:nM,countrySelect:lM,dobRow:sM,dobInput:rM,ageDisplay:oM};function cM({isOpen:e,onClose:i,onSaveSuccess:l}){const s=je(),{data:o}=F0({enabled:e}),{data:u}=jf({organizationId:o?.id,enabled:!!o?.id&&e}),d=iw(),[p,g]=M.useState(""),[m,v]=M.useState(""),[y,_]=M.useState(""),[w,C]=M.useState(""),[N,E]=M.useState(void 0),[T,R]=M.useState(null),[B,z]=M.useState(""),[k,q]=M.useState(""),[X,ce]=M.useState(""),[U,G]=M.useState(""),[te,ae]=M.useState(""),[Q,ne]=M.useState(""),[ie,I]=M.useState({});M.useEffect(()=>{e||Z()},[e]);const Z=()=>{g(""),v(""),_(""),C(""),E(void 0),R(null),z(""),q(""),ce(""),G(""),ae(""),ne(""),I({})},J=()=>{Z(),i()},se=()=>{const K={};return p.trim()||(K.name=s.formatMessage({id:"validation.required"})),N||(K.ownerId=s.formatMessage({id:"validation.required"})),!y.trim()&&!w.trim()&&(K.chipOrUeln=s.formatMessage({id:"validation.chipOrUelnRequired"})),w.trim()&&w.trim().length!==15&&(K.ueln=s.formatMessage({id:"validation.uelnInvalid"})),I(K),Object.keys(K).length===0},Se=async()=>{if(!(!se()||!o?.id||!N))try{await d.mutateAsync({name:p,boarded_at_org_id:o.id,owner_id:N,official_name:m||void 0,chip_number:y||void 0,ueln:w||void 0,date_of_birth:T?Ga(T,"yyyy-MM-dd"):void 0,gender:B||void 0,color:k||void 0,breed_studbook:X||void 0,country_of_birth:U||void 0,markings:te||void 0,chip_location:Q||void 0}),l?.(),i()}catch(K){console.error("Failed to add horse:",K)}},Tt=async K=>{const{scanBarcode:Ie}=await ea(async()=>{const{scanBarcode:le}=await import("./index-R38vV1rT.js");return{scanBarcode:le}},__vite__mapDeps([6,1])),bt=await Ie();bt&&(K==="chipNumber"?_(bt):K==="ueln"&&C(bt))},Ee=async K=>{if(kt.isNativePlatform()){K.preventDefault();const{pickDate:Ie}=await ea(async()=>{const{pickDate:le}=await import("./index-R38vV1rT.js");return{pickDate:le}},__vite__mapDeps([6,1])),bt=await Ie({mode:"date",value:T?T.toISOString():void 0,max:new Date().toISOString()});bt&&R(new Date(bt))}},Qt=K=>{const Ie=K.locale.substring(0,2),bt=Yc.slice().sort((le,ze)=>{const Te=le.name[Ie]??le.name.en,ue=ze.name[Ie]??ze.name.en;return Te.localeCompare(ue,Ie)});if(Ie==="nl"){const le=bt.find(ue=>ue.code==="NL"),ze=bt.find(ue=>ue.code==="BE"),Te=bt.filter(ue=>ue.code!=="NL"&&ue.code!=="BE");return f.jsxs(L.Fragment,{children:[[le,ze].map(ue=>f.jsx(Pe,{value:ue.code,children:ue.name[Ie]??ue.name.en},ue.code)),f.jsx(ru,{}),Te.map(ue=>f.jsx(Pe,{value:ue.code,children:ue.name[Ie]??ue.name.en},ue.code))]})}return bt.map(le=>f.jsx(Pe,{value:le.code,children:le.name[Ie]??le.name.en},le.code))};return f.jsxs(ci,{label:s.formatMessage({id:"manageHorses.addHorse"}),placement:"end",open:e,onSlAfterHide:i,className:Tn.addUserDrawer,children:[f.jsxs("div",{className:Tn.formContent,children:[f.jsx(Ne,{"data-testid":"horse-official-name-input",label:s.formatMessage({id:"horses.officialNameLabel"}),value:m,required:!0,onSlInput:K=>{const Ie=K.target.value;(!p||p===m)&&g(Ie),v(Ie)}}),f.jsx(Ne,{"data-testid":"horse-name-input",label:s.formatMessage({id:"horses.nameLabel"}),value:p,onSlInput:K=>g(K.target.value),required:!0,helpText:ie.name}),f.jsx(ua,{"data-testid":"horse-owner-select",label:s.formatMessage({id:"horses.ownerLabel"}),value:N??"",onSlChange:K=>{E(K.target.value)},onSlAfterHide:K=>{K.stopPropagation()},helpText:ie.ownerId,children:u&&u.length>0?u.map(K=>f.jsxs(Pe,{value:K.user_profile_id,children:[K.user_profiles?.firstname," ",K.user_profiles?.lastname]},K.user_profile_id)):f.jsx(Pe,{value:"",disabled:!0,children:f.jsx(ee,{id:"horses.noMembersFound",defaultMessage:"No members found in this stable"})})}),f.jsxs("div",{className:Tn.inputWithIcon,children:[f.jsx(Ne,{"data-testid":"horse-chip-number-input",label:s.formatMessage({id:"horses.chipNumberLabel"}),value:y,onSlInput:K=>_(K.target.value),helpText:ie.chipOrUeln}),f.jsx($t,{"data-testid":"chip-scan-button",name:"qr-code",label:s.formatMessage({id:"horses.scanBarcode"}),onClick:()=>Tt("chipNumber")})]}),f.jsx(Ne,{label:s.formatMessage({id:"horses.chipLocationLabel"}),value:Q,onSlInput:K=>ne(K.target.value)}),f.jsxs("div",{className:Tn.inputWithIcon,children:[f.jsx(Ne,{"data-testid":"horse-ueln-input",label:s.formatMessage({id:"horses.uelnLabel"}),value:w,onSlInput:K=>C(K.target.value),helpText:ie.ueln||ie.chipOrUeln}),f.jsx($t,{"data-testid":"ueln-scan-button",name:"qr-code",label:s.formatMessage({id:"horses.scanBarcode"}),onClick:()=>Tt("ueln")})]}),f.jsxs("div",{className:Tn.dobRow,children:[f.jsx(Ne,{className:Tn.dobInput,label:s.formatMessage({id:"horses.dateOfBirthLabel"}),type:kt.isNativePlatform()?"text":"date",max:new Date().toISOString().split("T")[0],value:T?kt.isNativePlatform()?s.formatDate(T):Ga(T,"yyyy-MM-dd"):"",readonly:kt.isNativePlatform(),onClick:Ee,onSlChange:K=>R(K.target.valueAsDate),children:kt.isNativePlatform()&&f.jsx(Qe,{name:"calendar",slot:"suffix"})}),T&&f.jsx("span",{className:Tn.ageDisplay,children:su(T,s.locale.startsWith("nl")?"nl":"en")})]}),f.jsxs(ua,{label:s.formatMessage({id:"horses.genderLabel"}),value:B,onSlChange:K=>z(K.target.value),onSlAfterHide:K=>{K.stopPropagation()},children:[f.jsx(Pe,{value:"Stallion",children:s.formatMessage({id:"gender.stallion"})}),f.jsx(Pe,{value:"Mare",children:s.formatMessage({id:"gender.mare"})}),f.jsx(Pe,{value:"Gelding",children:s.formatMessage({id:"gender.gelding"})})]}),f.jsx(ua,{label:s.formatMessage({id:"horses.countryOfBirthLabel"}),className:Tn.countrySelect,value:U,onSlChange:K=>G(K.target.value),onSlAfterHide:K=>{K.stopPropagation()},hoist:!0,children:Qt(s)}),f.jsx(Ne,{label:s.formatMessage({id:"horses.colorLabel"}),value:k,onSlInput:K=>q(K.target.value)}),f.jsx(Ne,{label:s.formatMessage({id:"horses.breedStudbookLabel"}),value:X,onSlInput:K=>ce(K.target.value)}),f.jsx(Ne,{label:s.formatMessage({id:"horses.markingsLabel"}),value:te,onSlInput:K=>ae(K.target.value)})]}),f.jsx(Oe,{slot:"footer",variant:"primary",onClick:Se,disabled:d.isPending,loading:d.isPending,children:f.jsx(ee,{id:"common.save",defaultMessage:"Save"})}),f.jsx(Oe,{slot:"footer",variant:"neutral",onClick:J,children:f.jsx(ee,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const uM="_pageWrapper_pqnt6_1",dM="_pageContent_pqnt6_10",hM="_drawer_pqnt6_19",fM="_profileAction_pqnt6_32",pM="_profileAvatar_pqnt6_38",mM="_headerActions_pqnt6_42",ss={pageWrapper:uM,pageContent:dM,drawer:hM,profileAction:fM,profileAvatar:pM,headerActions:mM};function gM(){const e=je(),i=nw(),l=At(),{organization_id:s}=Fr(),{data:o}=Rf({organizationId:s,enabled:!!s}),{data:u}=da({enabled:!0}),d=M.useRef(null),[p,g]=M.useState(!1),m=()=>{g(!0)};return f.jsx(ci,{label:e.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),placement:"end",open:!0,ref:d,className:ss.drawer,children:f.jsxs("div",{className:ss.pageWrapper,children:[f.jsx(cM,{isOpen:p,onClose:()=>{d.current?.modal.deactivateExternal(),g(!1)},onSaveSuccess:()=>{i.invalidateQueries({queryKey:["horses",s]})}}),f.jsx(Ti,{showBackButton:!0,headerActions:o==="admin"||o==="owner"?f.jsxs("div",{className:ss.headerActions,children:[f.jsx($t,{"data-testid":"add-horse-button",label:e.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),onClick:()=>{d.current?.modal.activateExternal(),m()},name:"plus"}),f.jsx("div",{onClick:()=>l("/profile/me"),className:ss.profileAction,role:"button",tabIndex:0,children:f.jsx(qe,{image:u?.social_profiles?.avatar_url,name:u?.firstname??"",className:ss.profileAvatar})})]}):null}),f.jsx("div",{className:ss.pageContent,children:f.jsx(tM,{organizationId:s})})]})})}const vM="_container_6at2x_1",bM="_section_6at2x_8",yM="_sectionTitle_6at2x_14",_M="_list_6at2x_23",xM="_memberItem_6at2x_32",wM="_memberInfo_6at2x_43",SM="_memberName_6at2x_51",CM="_avatar_6at2x_58",EM="_roleSelect_6at2x_63",AM="_immutableRole_6at2x_68",TM="_emptyState_6at2x_75",NM="_subSectionTitle_6at2x_82",MM="_pill_6at2x_92",kM="_pillOwner_6at2x_102",$M="_pillGroom_6at2x_106",OM="_pillAvatar_6at2x_110",jM="_pillName_6at2x_115",RM="_grid_6at2x_125",LM="_clickable_6at2x_131",ye={container:vM,section:bM,sectionTitle:yM,list:_M,memberItem:xM,memberInfo:wM,memberName:SM,avatar:CM,roleSelect:EM,immutableRole:AM,emptyState:TM,subSectionTitle:NM,pill:MM,pillOwner:kM,pillGroom:$M,pillAvatar:OM,pillName:jM,grid:RM,clickable:LM};function DM({horseId:e}){const{formatMessage:i}=je(),l=At(),[s,o]=M.useState(null),{data:u}=I0({horseId:e,enabled:!!e}),{data:d}=lw({horseId:e,enabled:!!e}),{data:p}=sw({horseId:e,enabled:!!e}),{data:g}=q0({organizationId:u?.boarded_at_org_id??void 0,enabled:!!u?.boarded_at_org_id}),m=g?.user_profiles,{data:v}=P0({organizationId:u?.boarded_at_org_id??void 0,enabled:!!u?.boarded_at_org_id}),y=rw(),_=M.useMemo(()=>(d??[]).find(z=>z.role==="owner"),[d]),w=M.useMemo(()=>(d??[]).filter(z=>z.role==="stable_groom"),[d]),C=M.useMemo(()=>(d??[]).filter(z=>z.role!=="owner"&&z.role!=="stable_groom"),[d]),N=M.useMemo(()=>new Set((d??[]).filter(z=>z.role!=="stable_groom").map(z=>z.user_profile_id)),[d]),E=M.useMemo(()=>(p??[]).filter(z=>z.user_profiles?.id&&!N.has(z.user_profiles.id)),[p,N]),T=M.useMemo(()=>[{value:"co_owner",label:i({id:"roles.co_owner",defaultMessage:"Co-owner"})},{value:"rider",label:i({id:"roles.rider",defaultMessage:"Rider/Leaser"})},{value:"groom",label:i({id:"roles.groom",defaultMessage:"Groom"})},{value:"instructor",label:i({id:"roles.instructor",defaultMessage:"Instructor"})},{value:"medical",label:i({id:"roles.medical",defaultMessage:"Vet/Medical"})},{value:"farrier",label:i({id:"roles.farrier",defaultMessage:"Farrier"})}],[i]),R=(z,k)=>{k==="follower"?o({userId:z,role:k}):y.mutate({horseId:e,userId:z,role:k})},B=()=>{s&&e&&y.mutate({horseId:e,userId:s.userId,role:"follower"}),o(null)};return f.jsxs("div",{className:ye.container,children:[f.jsxs("section",{className:ye.section,children:[f.jsx("h3",{className:ye.sectionTitle,children:f.jsx(ee,{id:"manageTeam.team",defaultMessage:"My hoomans"})}),f.jsxs("ul",{className:ye.list,children:[_&&f.jsxs("li",{className:ye.memberItem,children:[f.jsxs("div",{className:`${ye.memberInfo} ${ye.clickable}`,onClick:()=>{_.user_profiles?.social_profile_id&&l(`/profile/${_.user_profiles.social_profile_id}`)},children:[f.jsx(qe,{image:_.user_profiles?.social_profiles?.avatar_url,name:_.user_profiles?.firstname??"",className:ye.avatar}),f.jsxs("span",{className:ye.memberName,children:[_.user_profiles?.firstname," ",_.user_profiles?.lastname]})]}),f.jsx("span",{className:ye.immutableRole,children:f.jsx(ee,{id:"roles.owner",defaultMessage:"Owner"})})]},`owner-${_.user_profile_id}`),C.map(z=>f.jsxs("li",{className:ye.memberItem,children:[f.jsxs("div",{className:`${ye.memberInfo} ${ye.clickable}`,onClick:()=>{z.user_profiles?.social_profile_id&&l(`/profile/${z.user_profiles.social_profile_id}`)},children:[f.jsx(qe,{image:z.user_profiles?.social_profiles?.avatar_url,name:z.user_profiles?.firstname??"",className:ye.avatar}),f.jsxs("span",{className:ye.memberName,children:[z.user_profiles?.firstname," ",z.user_profiles?.lastname]})]}),f.jsxs(ua,{className:ye.roleSelect,value:z.role,hoist:!0,onSlChange:k=>R(z.user_profile_id,k.target.value),children:[T.map(k=>f.jsx(Pe,{value:k.value,children:k.label},k.value)),f.jsx(Pe,{value:"follower",children:f.jsx(ee,{id:"roles.follower",defaultMessage:"Follower (Remove from team)"})})]})]},z.user_profile_id)),C.length===0&&!_&&f.jsx("p",{className:ye.emptyState,children:f.jsx(ee,{id:"manageTeam.noTeam",defaultMessage:"No team members yet."})})]})]}),(m||w.length>0)&&f.jsxs("section",{className:ye.section,children:[f.jsx("h3",{className:ye.sectionTitle,children:f.jsx(ee,{id:"manageTeam.organizationTeam",defaultMessage:"Hoomans {organizationName}",values:{organizationName:v?.name??"Stable"}})}),m&&f.jsxs("div",{children:[f.jsx("h4",{className:ye.subSectionTitle,children:f.jsx(ee,{id:"manageTeam.stableOwner",defaultMessage:"Stable Owner"})}),f.jsxs("div",{className:`${ye.pill} ${ye.pillOwner} ${ye.clickable}`,onClick:()=>{m?.social_profile_id&&l(`/profile/${m.social_profile_id}`)},children:[f.jsx(qe,{image:m.social_profiles?.avatar_url,name:m.firstname??"",className:ye.pillAvatar}),f.jsxs("span",{className:ye.pillName,children:[m.firstname," ",m.lastname]})]})]}),w.length>0&&f.jsxs("div",{children:[f.jsxs("h4",{className:ye.subSectionTitle,children:[f.jsx(ee,{id:"roles.stable_groom",defaultMessage:"Stable Groom"}),"s"]}),f.jsx("div",{className:ye.grid,children:w.map(z=>f.jsxs("div",{className:`${ye.pill} ${ye.pillGroom} ${ye.clickable}`,onClick:()=>{z.user_profiles?.social_profile_id&&l(`/profile/${z.user_profiles.social_profile_id}`)},children:[f.jsx(qe,{image:z.user_profiles?.social_profiles?.avatar_url,name:z.user_profiles?.firstname??"",className:ye.pillAvatar}),f.jsxs("span",{className:ye.pillName,children:[z.user_profiles?.firstname," ",z.user_profiles?.lastname?.charAt(0),"."]})]},z.user_profile_id))})]})]}),f.jsxs("section",{className:ye.section,children:[f.jsx("h3",{className:ye.sectionTitle,children:f.jsx(ee,{id:"manageTeam.followers",defaultMessage:"Followers"})}),f.jsxs("ul",{className:ye.list,children:[E.map(z=>f.jsxs("li",{className:ye.memberItem,children:[f.jsxs("div",{className:`${ye.memberInfo} ${ye.clickable}`,onClick:()=>{z.user_profiles?.social_profile_id&&l(`/profile/${z.user_profiles.social_profile_id}`)},children:[f.jsx(qe,{image:z.user_profiles?.social_profiles?.avatar_url,name:z.user_profiles?.firstname??"",className:ye.avatar}),f.jsxs("span",{className:ye.memberName,children:[z.user_profiles?.firstname," ",z.user_profiles?.lastname]})]}),f.jsxs(ua,{className:ye.roleSelect,value:"follower",hoist:!0,onSlChange:k=>R(z.user_profiles?.id??"",k.target.value),children:[f.jsx(Pe,{value:"follower",children:f.jsx(ee,{id:"roles.follower_only",defaultMessage:"Follower"})}),T.map(k=>f.jsx(Pe,{value:k.value,children:k.label},k.value))]})]},z.follower_profile_id)),E.length===0&&f.jsx("p",{className:ye.emptyState,children:f.jsx(ee,{id:"manageTeam.noFollowers",defaultMessage:"No followers found."})})]})]}),f.jsxs(Jr,{label:i({id:"manageTeam.demoteTitle",defaultMessage:"Remove from Team?"}),open:!!s,onSlAfterHide:()=>o(null),children:[f.jsx("p",{children:f.jsx(ee,{id:"manageTeam.demoteWarning",defaultMessage:"Are you sure you want to remove this user from the team? They will lose access to restricted posts."})}),f.jsxs("div",{slot:"footer",children:[f.jsx(Oe,{variant:"neutral",onClick:()=>o(null),children:f.jsx(ee,{id:"common.cancel",defaultMessage:"Cancel"})}),f.jsx(Oe,{variant:"danger",onClick:B,children:f.jsx(ee,{id:"common.remove",defaultMessage:"Remove"})})]})]})]})}const zM="_pageWrapper_qolqd_1",BM="_pageContent_qolqd_10",HM="_drawer_qolqd_19",Qh={pageWrapper:zM,pageContent:BM,drawer:HM};function UM(){const e=je(),{horseId:i}=Fr(),l=M.useRef(null);return f.jsx(ci,{label:e.formatMessage({id:"manageTeam.title",defaultMessage:"Manage Team"}),placement:"end",open:!0,ref:l,className:Qh.drawer,children:f.jsxs("div",{className:Qh.pageWrapper,children:[f.jsx(Ti,{showBackButton:!0}),f.jsx("div",{className:Qh.pageContent,children:f.jsx(DM,{horseId:i})})]})})}const IM=new w3;function PM({children:e}){return H0()?e:f.jsx(Lc,{to:"/login",replace:!0})}function VM(){return f.jsx($8,{children:f.jsxs(ef,{children:[f.jsx(Bt,{path:"/social/dashboard",element:f.jsx(R9,{})}),f.jsx(Bt,{path:"/stable/:organization_id/roster/:roster_id",element:f.jsx(r6,{})}),f.jsx(Bt,{path:"/stable/:organization_id/members",element:f.jsx(DN,{})}),f.jsx(Bt,{path:"/stable/:organization_id/horses",element:f.jsx(gM,{})}),f.jsx(Bt,{path:"/social/feed",element:f.jsx(rN,{})}),f.jsx(Bt,{path:"/horse/:horseId/team",element:f.jsx(UM,{})}),f.jsx(Bt,{path:"/profile/me",element:f.jsx(b0,{})}),f.jsx(Bt,{path:"/profile/:social_id",element:f.jsx(b0,{})}),f.jsx(Bt,{path:"/invite",element:f.jsx(H1,{})}),f.jsx(Bt,{path:"/invite-success",element:f.jsx(U1,{})}),f.jsx(Bt,{path:"/",element:f.jsx(Lc,{to:"/social/dashboard",replace:!0})})]})})}function qM({handleContinue:e}){const[i]=M.useState("en"),[l,s]=M.useState(qc);return M.useEffect(()=>{ea(()=>import("./nl-BTBovshB.js"),[]).then(o=>{s(o.default)}).catch(()=>{})},[]),f.jsx(a1,{locale:i,messages:l,wrapRichTextChunksInFragment:!0,children:f.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[f.jsx("h1",{children:f.jsx(ee,{id:"invite.noProfile.title"})}),f.jsxs("p",{children:[f.jsx(ee,{id:"invite.noProfile.message"})," "]}),f.jsx(Oe,{variant:"primary",onClick:e,children:f.jsx(ee,{id:"common.continue"})})]})})}function FM(){const[e,i]=M.useState(null),[l,s]=M.useState(!0),[o,u]=M.useState("en"),[d,p]=M.useState(qc),g=Fc();M.useEffect(()=>{ma.auth.getSession().then(({data:{session:C}})=>{i(C),s(!1)});const{data:{subscription:w}}=ma.auth.onAuthStateChange((C,N)=>{i(N),s(!1)});return()=>w.unsubscribe()},[]);const{data:m,isLoading:v,isSuccess:y}=da({enabled:!!e});if(M.useEffect(()=>{const C=m?.locale||"nl";C!==o&&AS(Object.assign({"../translations/en.json":()=>ea(()=>Promise.resolve().then(()=>O8),void 0),"../translations/nl.json":()=>ea(()=>import("./nl-BTBovshB.js"),[])}),`../translations/${C}.json`,3).then(N=>{u(C),p(N.default)}).catch(()=>{u("en"),p(qc)})},[m,o]),l||e&&v)return null;const _=g.pathname.startsWith("/invite");return e&&y&&!m&&!_?f.jsx(qM,{handleContinue:()=>void ma.auth.signOut()}):!l&&!e&&g.pathname==="/"&&!kt.isNativePlatform()?(window.location.replace("/home.html"),null):f.jsx(cw.Provider,{value:e,children:f.jsx(a1,{locale:o,messages:d,wrapRichTextChunksInFragment:!0,children:e?f.jsxs(ef,{children:[f.jsx(Bt,{path:"/login",element:f.jsx(Lc,{to:"/social/dashboard",replace:!0})}),f.jsx(Bt,{path:"/*",element:f.jsx(PM,{children:f.jsx(VM,{})})})]}):f.jsxs(ef,{children:[f.jsx(Bt,{path:"/login",element:f.jsx(T0,{})}),f.jsx(Bt,{path:"/invite",element:f.jsx(H1,{})}),f.jsx(Bt,{path:"/invite-success",element:f.jsx(U1,{})}),kt.isNativePlatform()&&f.jsx(Bt,{path:"/",element:f.jsx(Lc,{to:"/login",replace:!0})}),f.jsx(Bt,{path:"*",element:f.jsx(T0,{})})]})})})}function GM(){return f.jsx(ow,{client:IM,children:f.jsx(FM,{})})}lf("/");ES();const YM=Nw.createRoot(document.getElementById("root"));YM.render(f.jsx(M.StrictMode,{children:f.jsx(bw,{children:f.jsx(GM,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("SW registered: ",e)}).catch(e=>{console.log("SW registration failed: ",e)})});export{Ww as H,EC as a,XM as c,QM as f,Zw as g,Yw as h,AC as p,ZM as r,CC as s};

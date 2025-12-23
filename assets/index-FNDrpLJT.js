const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pwa-action-sheet.entry-DyENhTAF.js","assets/index-BJBUXxrc.js","assets/pwa-camera-modal.entry-MeuIzwuJ.js","assets/pwa-toast.entry-qF6BljSL.js","assets/pwa-camera-modal-instance.entry-CVByFRpD.js","assets/pwa-camera.entry-C_qXWkfp.js","assets/web-J7tvJO-D.js","assets/index-DeJbj_xb.js"])))=>i.map(i=>d[i]);
import{r as v1,f as I,g as Dx,R as ue,l as Lx,h as Rx,u as wu,i as Ba,N as Bx,s as Hx,j as Ux,k as jx,m as xb,_ as la,n as Ix,o as Vx,p as Px,S as y1,M as Fx,q as Oa,t as wb,v as as,w as _1,Q as qx,x as Sb,y as Gx,z as Cb,A as kb,B as Yx,D as Eb,F as $b,G as Xx,I as ce,J as ti,K as Mn,L as Mi,O as x,P as uu,T as du,U as Wx,V as Qx,X as x1,Y as w1,Z as Ar,$ as Ef,a0 as Ab,a1 as Zx,a2 as Kx,a3 as np,a4 as op,a5 as bl,a6 as Su,a7 as Er,a8 as Jx,a9 as ew,aa as tw,ab as aw,ac as iw,ad as Cu,ae as sw,af as rw,ag as nw,ah as Tb,ai as zb,aj as ow,ak as lw,al as R,am as cw,an as ei,ao as uw,ap as dw,aq as lp,ar as hw,as as fw,at as pw,au as mw,av as gw,aw as bw,ax as vw,ay as yw,az as $f,aA as Ft,aB as hu}from"./index-BJBUXxrc.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(l){if(l.ep)return;l.ep=!0;const c=s(l);fetch(l.href,c)}})();var Yh={exports:{}},Jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function _w(){if(Mb)return Jt;Mb=1;var e=v1();function a(f){var p="https://react.dev/errors/"+f;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+f+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var n={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(f,p,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:f,containerInfo:p,implementation:b}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(f,p){if(f==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,Jt.createPortal=function(f,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return c(f,p,null,b)},Jt.flushSync=function(f){var p=d.T,b=n.p;try{if(d.T=null,n.p=2,f)return f()}finally{d.T=p,n.p=b,n.d.f()}},Jt.preconnect=function(f,p){typeof f=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,n.d.C(f,p))},Jt.prefetchDNS=function(f){typeof f=="string"&&n.d.D(f)},Jt.preinit=function(f,p){if(typeof f=="string"&&p&&typeof p.as=="string"){var b=p.as,v=m(b,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?n.d.S(f,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):b==="script"&&n.d.X(f,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Jt.preinitModule=function(f,p){if(typeof f=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=m(p.as,p.crossOrigin);n.d.M(f,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&n.d.M(f)},Jt.preload=function(f,p){if(typeof f=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,v=m(b,p.crossOrigin);n.d.L(f,b,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Jt.preloadModule=function(f,p){if(typeof f=="string")if(p){var b=m(p.as,p.crossOrigin);n.d.m(f,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else n.d.m(f)},Jt.requestFormReset=function(f){n.d.r(f)},Jt.unstable_batchedUpdates=function(f,p){return f(p)},Jt.useFormState=function(f,p,b){return d.H.useFormState(f,p,b)},Jt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Jt.version="19.0.0",Jt}var Nb;function S1(){if(Nb)return Yh.exports;Nb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Yh.exports=_w(),Yh.exports}S1();/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Af(){return Af=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},Af.apply(this,arguments)}function xw(e,a){if(e==null)return{};var s={},n=Object.keys(e),l,c;for(c=0;c<n.length;c++)l=n[c],!(a.indexOf(l)>=0)&&(s[l]=e[l]);return s}function ww(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sw(e,a){return e.button===0&&(!a||a==="_self")&&!ww(e)}function Tf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,s)=>{let n=e[s];return a.concat(Array.isArray(n)?n.map(l=>[s,l]):[[s,n]])},[]))}function Cw(e,a){let s=Tf(e);return a&&a.forEach((n,l)=>{s.has(l)||a.getAll(l).forEach(c=>{s.append(l,c)})}),s}const kw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ew="6";try{window.__reactRouterVersion=Ew}catch{}const $w="startTransition",Ob=ue[$w];function Aw(e){let{basename:a,children:s,future:n,window:l}=e,c=I.useRef();c.current==null&&(c.current=Dx({window:l,v5Compat:!0}));let d=c.current,[m,f]=I.useState({action:d.action,location:d.location}),{v7_startTransition:p}=n||{},b=I.useCallback(v=>{p&&Ob?Ob(()=>f(v)):f(v)},[f,p]);return I.useLayoutEffect(()=>d.listen(b),[d,b]),I.useEffect(()=>Lx(n),[n]),I.createElement(Rx,{basename:a,children:s,location:m.location,navigationType:m.action,navigator:d,future:n})}const Tw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mw=I.forwardRef(function(a,s){let{onClick:n,relative:l,reloadDocument:c,replace:d,state:m,target:f,to:p,preventScrollReset:b,viewTransition:v}=a,_=xw(a,kw),{basename:S}=I.useContext(Bx),w,E=!1;if(typeof p=="string"&&zw.test(p)&&(w=p,Tw))try{let D=new URL(window.location.href),M=p.startsWith("//")?new URL(D.protocol+p):new URL(p),A=Hx(M.pathname,S);M.origin===D.origin&&A!=null?p=A+M.search+M.hash:E=!0}catch{}let z=Ux(p,{relative:l}),N=Nw(p,{replace:d,state:m,target:f,preventScrollReset:b,relative:l,viewTransition:v});function T(D){n&&n(D),D.defaultPrevented||N(D)}return I.createElement("a",Af({},_,{href:w||z,onClick:E||c?n:T,ref:s,target:f}))});var Db;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Db||(Db={}));var Lb;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lb||(Lb={}));function Nw(e,a){let{target:s,replace:n,state:l,preventScrollReset:c,relative:d,viewTransition:m}=a===void 0?{}:a,f=Ba(),p=wu(),b=jx(e,{relative:d});return I.useCallback(v=>{if(Sw(v,s)){v.preventDefault();let _=n!==void 0?n:xb(p)===xb(b);f(e,{replace:_,state:l,preventScrollReset:c,relative:d,viewTransition:m})}},[p,f,b,n,l,s,e,c,d,m])}function Ow(e){let a=I.useRef(Tf(e)),s=I.useRef(!1),n=wu(),l=I.useMemo(()=>Cw(n.search,s.current?null:a.current),[n.search]),c=Ba(),d=I.useCallback((m,f)=>{const p=Tf(typeof m=="function"?m(l):m);s.current=!0,c("?"+p,f)},[c,l]);return[l,d]}var Xh={exports:{}},Go={},Wh={exports:{}},Qh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rb;function Dw(){return Rb||(Rb=1,(function(e){function a(X,Y){var ee=X.length;X.push(Y);e:for(;0<ee;){var ve=ee-1>>>1,Ae=X[ve];if(0<l(Ae,Y))X[ve]=Y,X[ee]=Ae,ee=ve;else break e}}function s(X){return X.length===0?null:X[0]}function n(X){if(X.length===0)return null;var Y=X[0],ee=X.pop();if(ee!==Y){X[0]=ee;e:for(var ve=0,Ae=X.length,aa=Ae>>>1;ve<aa;){var Wt=2*(ve+1)-1,He=X[Wt],Ne=Wt+1,se=X[Ne];if(0>l(He,ee))Ne<Ae&&0>l(se,He)?(X[ve]=se,X[Ne]=ee,ve=Ne):(X[ve]=He,X[Wt]=ee,ve=Wt);else if(Ne<Ae&&0>l(se,ee))X[ve]=se,X[Ne]=ee,ve=Ne;else break e}}return Y}function l(X,Y){var ee=X.sortIndex-Y.sortIndex;return ee!==0?ee:X.id-Y.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();e.unstable_now=function(){return d.now()-m}}var f=[],p=[],b=1,v=null,_=3,S=!1,w=!1,E=!1,z=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function D(X){for(var Y=s(p);Y!==null;){if(Y.callback===null)n(p);else if(Y.startTime<=X)n(p),Y.sortIndex=Y.expirationTime,a(f,Y);else break;Y=s(p)}}function M(X){if(E=!1,D(X),!w)if(s(f)!==null)w=!0,_e();else{var Y=s(p);Y!==null&&xe(M,Y.startTime-X)}}var A=!1,H=-1,K=5,Z=-1;function V(){return!(e.unstable_now()-Z<K)}function P(){if(A){var X=e.unstable_now();Z=X;var Y=!0;try{e:{w=!1,E&&(E=!1,N(H),H=-1),S=!0;var ee=_;try{t:{for(D(X),v=s(f);v!==null&&!(v.expirationTime>X&&V());){var ve=v.callback;if(typeof ve=="function"){v.callback=null,_=v.priorityLevel;var Ae=ve(v.expirationTime<=X);if(X=e.unstable_now(),typeof Ae=="function"){v.callback=Ae,D(X),Y=!0;break t}v===s(f)&&n(f),D(X)}else n(f);v=s(f)}if(v!==null)Y=!0;else{var aa=s(p);aa!==null&&xe(M,aa.startTime-X),Y=!1}}break e}finally{v=null,_=ee,S=!1}Y=void 0}}finally{Y?ae():A=!1}}}var ae;if(typeof T=="function")ae=function(){T(P)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,ke=ye.port2;ye.port1.onmessage=P,ae=function(){ke.postMessage(null)}}else ae=function(){z(P,0)};function _e(){A||(A=!0,ae())}function xe(X,Y){H=z(function(){X(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(X){X.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,_e())},e.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<X?Math.floor(1e3/X):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return s(f)},e.unstable_next=function(X){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var ee=_;_=Y;try{return X()}finally{_=ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(X,Y){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ee=_;_=X;try{return Y()}finally{_=ee}},e.unstable_scheduleCallback=function(X,Y,ee){var ve=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ve+ee:ve):ee=ve,X){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=ee+Ae,X={id:b++,callback:Y,priorityLevel:X,startTime:ee,expirationTime:Ae,sortIndex:-1},ee>ve?(X.sortIndex=ee,a(p,X),s(f)===null&&X===s(p)&&(E?(N(H),H=-1):E=!0,xe(M,ee-ve))):(X.sortIndex=Ae,a(f,X),w||S||(w=!0,_e())),X},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(X){var Y=_;return function(){var ee=_;_=Y;try{return X.apply(this,arguments)}finally{_=ee}}}})(Qh)),Qh}var Bb;function Lw(){return Bb||(Bb=1,Wh.exports=Dw()),Wh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hb;function Rw(){if(Hb)return Go;Hb=1;var e=Lw(),a=v1(),s=S1();function n(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var c=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),_=Symbol.for("react.consumer"),S=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),M=Symbol.for("react.memo_cache_sentinel"),A=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=A&&t[A]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function Z(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case f:return"Fragment";case m:return"Portal";case b:return"Profiler";case p:return"StrictMode";case E:return"Suspense";case z:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S:return(t.displayName||"Context")+".Provider";case _:return(t._context.displayName||"Context")+".Consumer";case w:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return i=t.displayName||null,i!==null?i:Z(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return Z(t(i))}catch{}}return null}var V=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=Object.assign,ae,ye;function ke(t){if(ae===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);ae=i&&i[1]||"",ye=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+t+ye}var _e=!1;function xe(t,i){if(!t||_e)return"";_e=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(F){var j=F}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(F){j=F}t.call(Q.prototype)}}else{try{throw Error()}catch(F){j=F}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(F){if(F&&j&&typeof F.stack=="string")return[F.stack,j.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],k=h[1];if(y&&k){var $=y.split(`
`),L=k.split(`
`);for(u=o=0;o<$.length&&!$[o].includes("DetermineComponentFrameRoot");)o++;for(;u<L.length&&!L[u].includes("DetermineComponentFrameRoot");)u++;if(o===$.length||u===L.length)for(o=$.length-1,u=L.length-1;1<=o&&0<=u&&$[o]!==L[u];)u--;for(;1<=o&&0<=u;o--,u--)if($[o]!==L[u]){if(o!==1||u!==1)do if(o--,u--,0>u||$[o]!==L[u]){var q=`
`+$[o].replace(" at new "," at ");return t.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",t.displayName)),q}while(1<=o&&0<=u);break}}}finally{_e=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?ke(r):""}function X(t){switch(t.tag){case 26:case 27:case 5:return ke(t.type);case 16:return ke("Lazy");case 13:return ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return t=xe(t.type,!1),t;case 11:return t=xe(t.type.render,!1),t;case 1:return t=xe(t.type,!0),t;default:return""}}function Y(t){try{var i="";do i+=X(t),t=t.return;while(t);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function ee(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function ve(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ae(t){if(ee(t)!==t)throw Error(n(188))}function aa(t){var i=t.alternate;if(!i){if(i=ee(t),i===null)throw Error(n(188));return i!==t?null:t}for(var r=t,o=i;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return Ae(u),t;if(h===o)return Ae(u),i;h=h.sibling}throw Error(n(188))}if(r.return!==o.return)r=u,o=h;else{for(var y=!1,k=u.child;k;){if(k===r){y=!0,r=u,o=h;break}if(k===o){y=!0,o=u,r=h;break}k=k.sibling}if(!y){for(k=h.child;k;){if(k===r){y=!0,r=h,o=u;break}if(k===o){y=!0,o=h,r=u;break}k=k.sibling}if(!y)throw Error(n(189))}}if(r.alternate!==o)throw Error(n(190))}if(r.tag!==3)throw Error(n(188));return r.stateNode.current===r?t:i}function Wt(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=Wt(t),i!==null)return i;t=t.sibling}return null}var He=Array.isArray,Ne=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ya=[],Qt=-1;function ut(t){return{current:t}}function nt(t){0>Qt||(t.current=ya[Qt],ya[Qt]=null,Qt--)}function Xe(t,i){Qt++,ya[Qt]=t.current,t.current=i}var Ye=ut(null),Xn=ut(null),hs=ut(null),Tl=ut(null);function zl(t,i){switch(Xe(hs,i),Xe(Xn,t),Xe(Ye,null),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?Qg(i):0;break;default:if(t=t===8?i.parentNode:i,i=t.tagName,t=t.namespaceURI)t=Qg(t),i=Zg(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}nt(Ye),Xe(Ye,i)}function jr(){nt(Ye),nt(Xn),nt(hs)}function Hu(t){t.memoizedState!==null&&Xe(Tl,t);var i=Ye.current,r=Zg(i,t.type);i!==r&&(Xe(Xn,t),Xe(Ye,r))}function Ml(t){Xn.current===t&&(nt(Ye),nt(Xn)),Tl.current===t&&(nt(Tl),Io._currentValue=se)}var Uu=Object.prototype.hasOwnProperty,ju=e.unstable_scheduleCallback,Iu=e.unstable_cancelCallback,h2=e.unstable_shouldYield,f2=e.unstable_requestPaint,Si=e.unstable_now,p2=e.unstable_getCurrentPriorityLevel,Up=e.unstable_ImmediatePriority,jp=e.unstable_UserBlockingPriority,Nl=e.unstable_NormalPriority,m2=e.unstable_LowPriority,Ip=e.unstable_IdlePriority,g2=e.log,b2=e.unstable_setDisableYieldValue,Wn=null,_a=null;function v2(t){if(_a&&typeof _a.onCommitFiberRoot=="function")try{_a.onCommitFiberRoot(Wn,t,void 0,(t.current.flags&128)===128)}catch{}}function fs(t){if(typeof g2=="function"&&b2(t),_a&&typeof _a.setStrictMode=="function")try{_a.setStrictMode(Wn,t)}catch{}}var xa=Math.clz32?Math.clz32:x2,y2=Math.log,_2=Math.LN2;function x2(t){return t>>>=0,t===0?32:31-(y2(t)/_2|0)|0}var Ol=128,Dl=4194304;function Zs(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ll(t,i){var r=t.pendingLanes;if(r===0)return 0;var o=0,u=t.suspendedLanes,h=t.pingedLanes,y=t.warmLanes;t=t.finishedLanes!==0;var k=r&134217727;return k!==0?(r=k&~u,r!==0?o=Zs(r):(h&=k,h!==0?o=Zs(h):t||(y=k&~y,y!==0&&(o=Zs(y))))):(k=r&~u,k!==0?o=Zs(k):h!==0?o=Zs(h):t||(y=r&~y,y!==0&&(o=Zs(y)))),o===0?0:i!==0&&i!==o&&(i&u)===0&&(u=o&-o,y=i&-i,u>=y||u===32&&(y&4194176)!==0)?i:o}function Qn(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function w2(t,i){switch(t){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(){var t=Ol;return Ol<<=1,(Ol&4194176)===0&&(Ol=128),t}function Pp(){var t=Dl;return Dl<<=1,(Dl&62914560)===0&&(Dl=4194304),t}function Vu(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Zn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function S2(t,i,r,o,u,h){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var k=t.entanglements,$=t.expirationTimes,L=t.hiddenUpdates;for(r=y&~r;0<r;){var q=31-xa(r),Q=1<<q;k[q]=0,$[q]=-1;var j=L[q];if(j!==null)for(L[q]=null,q=0;q<j.length;q++){var F=j[q];F!==null&&(F.lane&=-536870913)}r&=~Q}o!==0&&Fp(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~i))}function Fp(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-xa(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194218}function qp(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var o=31-xa(r),u=1<<o;u&i|t[o]&i&&(t[o]|=i),r&=~u}}function Gp(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yp(){var t=Ne.p;return t!==0?t:(t=window.event,t===void 0?32:mb(t.type))}function C2(t,i){var r=Ne.p;try{return Ne.p=t,i()}finally{Ne.p=r}}var ps=Math.random().toString(36).slice(2),Zt="__reactFiber$"+ps,da="__reactProps$"+ps,Ir="__reactContainer$"+ps,Pu="__reactEvents$"+ps,k2="__reactListeners$"+ps,E2="__reactHandles$"+ps,Xp="__reactResources$"+ps,Kn="__reactMarker$"+ps;function Fu(t){delete t[Zt],delete t[da],delete t[Pu],delete t[k2],delete t[E2]}function Ks(t){var i=t[Zt];if(i)return i;for(var r=t.parentNode;r;){if(i=r[Ir]||r[Zt]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=eb(t);t!==null;){if(r=t[Zt])return r;t=eb(t)}return i}t=r,r=t.parentNode}return null}function Vr(t){if(t=t[Zt]||t[Ir]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Jn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(n(33))}function Pr(t){var i=t[Xp];return i||(i=t[Xp]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ot(t){t[Kn]=!0}var Wp=new Set,Qp={};function Js(t,i){Fr(t,i),Fr(t+"Capture",i)}function Fr(t,i){for(Qp[t]=i,t=0;t<i.length;t++)Wp.add(i[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zp={},Kp={};function A2(t){return Uu.call(Kp,t)?!0:Uu.call(Zp,t)?!1:$2.test(t)?Kp[t]=!0:(Zp[t]=!0,!1)}function Rl(t,i,r){if(A2(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Bl(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function ji(t,i,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+o)}}function ja(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jp(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function T2(t){var i=Jp(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),o=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,h=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(y){o=""+y,h.call(this,y)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Hl(t){t._valueTracker||(t._valueTracker=T2(t))}function em(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return t&&(o=Jp(t)?t.checked?"true":"false":t.value),t=o,t!==r?(i.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var z2=/[\n"\\]/g;function Ia(t){return t.replace(z2,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function qu(t,i,r,o,u,h,y,k){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ja(i)):t.value!==""+ja(i)&&(t.value=""+ja(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?Gu(t,y,ja(i)):r!=null?Gu(t,y,ja(r)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?t.name=""+ja(k):t.removeAttribute("name")}function tm(t,i,r,o,u,h,y,k){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||i!=null))return;r=r!=null?""+ja(r):"",i=i!=null?""+ja(i):r,k||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=k?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function Gu(t,i,r){i==="number"&&Ul(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function qr(t,i,r,o){if(t=t.options,i){i={};for(var u=0;u<r.length;u++)i["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=i.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+ja(r),i=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function am(t,i,r){if(i!=null&&(i=""+ja(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+ja(r):""}function im(t,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(n(92));if(He(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=ja(i),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function Gr(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var M2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sm(t,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,r):typeof r!="number"||r===0||M2.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function rm(t,i,r){if(i!=null&&typeof i!="object")throw Error(n(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&r[u]!==o&&sm(t,u,o)}else for(var h in i)i.hasOwnProperty(h)&&sm(t,h,i[h])}function Yu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(t){return O2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Xu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,Xr=null;function nm(t){var i=Vr(t);if(i&&(t=i.stateNode)){var r=t[da]||null;e:switch(t=i.stateNode,i.type){case"input":if(qu(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ia(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==t&&o.form===t.form){var u=o[da]||null;if(!u)throw Error(n(90));qu(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===t.form&&em(o)}break e;case"textarea":am(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&qr(t,!!r.multiple,i,!1)}}}var Qu=!1;function om(t,i,r){if(Qu)return t(i,r);Qu=!0;try{var o=t(i);return o}finally{if(Qu=!1,(Yr!==null||Xr!==null)&&(Sc(),Yr&&(i=Yr,t=Xr,Xr=Yr=null,nm(i),t)))for(i=0;i<t.length;i++)nm(t[i])}}function eo(t,i){var r=t.stateNode;if(r===null)return null;var o=r[da]||null;if(o===null)return null;r=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(n(231,i,typeof r));return r}var Zu=!1;if(Ui)try{var to={};Object.defineProperty(to,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Zu=!1}var ms=null,Ku=null,Il=null;function lm(){if(Il)return Il;var t,i=Ku,r=i.length,o,u="value"in ms?ms.value:ms.textContent,h=u.length;for(t=0;t<r&&i[t]===u[t];t++);var y=r-t;for(o=1;o<=y&&i[r-o]===u[h-o];o++);return Il=u.slice(t,1<o?1-o:void 0)}function Vl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function cm(){return!1}function ha(t){function i(r,o,u,h,y){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(r=t[k],this[k]=r?r(h):h[k]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Pl:cm,this.isPropagationStopped=cm,this}return P(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=ha(er),ao=P({},er,{view:0,detail:0}),D2=ha(ao),Ju,ed,io,ql=P({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Ju=t.screenX-io.screenX,ed=t.screenY-io.screenY):ed=Ju=0,io=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:ed}}),um=ha(ql),L2=P({},ql,{dataTransfer:0}),R2=ha(L2),B2=P({},ao,{relatedTarget:0}),td=ha(B2),H2=P({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),U2=ha(H2),j2=P({},er,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I2=ha(j2),V2=P({},er,{data:0}),dm=ha(V2),P2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G2(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=q2[t])?!!i[t]:!1}function ad(){return G2}var Y2=P({},ao,{key:function(t){if(t.key){var i=P2[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X2=ha(Y2),W2=P({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=ha(W2),Q2=P({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),Z2=ha(Q2),K2=P({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),J2=ha(K2),e_=P({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t_=ha(e_),a_=P({},er,{newState:0,oldState:0}),i_=ha(a_),s_=[9,13,27,32],id=Ui&&"CompositionEvent"in window,so=null;Ui&&"documentMode"in document&&(so=document.documentMode);var r_=Ui&&"TextEvent"in window&&!so,fm=Ui&&(!id||so&&8<so&&11>=so),pm=" ",mm=!1;function gm(t,i){switch(t){case"keyup":return s_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function n_(t,i){switch(t){case"compositionend":return bm(i);case"keypress":return i.which!==32?null:(mm=!0,pm);case"textInput":return t=i.data,t===pm&&mm?null:t;default:return null}}function o_(t,i){if(Wr)return t==="compositionend"||!id&&gm(t,i)?(t=lm(),Il=Ku=ms=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return fm&&i.locale!=="ko"?null:i.data;default:return null}}var l_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!l_[t.type]:i==="textarea"}function ym(t,i,r,o){Yr?Xr?Xr.push(o):Xr=[o]:Yr=o,i=Ac(i,"onChange"),0<i.length&&(r=new Fl("onChange","change",null,r,o),t.push({event:r,listeners:i}))}var ro=null,no=null;function c_(t){qg(t,0)}function Gl(t){var i=Jn(t);if(em(i))return t}function _m(t,i){if(t==="change")return i}var xm=!1;if(Ui){var sd;if(Ui){var rd="oninput"in document;if(!rd){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),rd=typeof wm.oninput=="function"}sd=rd}else sd=!1;xm=sd&&(!document.documentMode||9<document.documentMode)}function Sm(){ro&&(ro.detachEvent("onpropertychange",Cm),no=ro=null)}function Cm(t){if(t.propertyName==="value"&&Gl(no)){var i=[];ym(i,no,t,Wu(t)),om(c_,i)}}function u_(t,i,r){t==="focusin"?(Sm(),ro=i,no=r,ro.attachEvent("onpropertychange",Cm)):t==="focusout"&&Sm()}function d_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(no)}function h_(t,i){if(t==="click")return Gl(i)}function f_(t,i){if(t==="input"||t==="change")return Gl(i)}function p_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var wa=typeof Object.is=="function"?Object.is:p_;function oo(t,i){if(wa(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Uu.call(i,u)||!wa(t[u],i[u]))return!1}return!0}function km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Em(t,i){var r=km(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=i&&o>=i)return{node:r,offset:i-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=km(r)}}function $m(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?$m(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Am(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Ul(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Ul(t.document)}return i}function nd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function m_(t,i){var r=Am(i);i=t.focusedElem;var o=t.selectionRange;if(r!==i&&i&&i.ownerDocument&&$m(i.ownerDocument.documentElement,i)){if(o!==null&&nd(i)){if(t=o.start,r=o.end,r===void 0&&(r=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(r,i.value.length);else if(r=(t=i.ownerDocument||document)&&t.defaultView||window,r.getSelection){r=r.getSelection();var u=i.textContent.length,h=Math.min(o.start,u);o=o.end===void 0?h:Math.min(o.end,u),!r.extend&&h>o&&(u=o,o=h,h=u),u=Em(i,h);var y=Em(i,o);u&&y&&(r.rangeCount!==1||r.anchorNode!==u.node||r.anchorOffset!==u.offset||r.focusNode!==y.node||r.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),r.removeAllRanges(),h>o?(r.addRange(t),r.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),r.addRange(t)))}}for(t=[],r=i;r=r.parentNode;)r.nodeType===1&&t.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)r=t[i],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var g_=Ui&&"documentMode"in document&&11>=document.documentMode,Qr=null,od=null,lo=null,ld=!1;function Tm(t,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ld||Qr==null||Qr!==Ul(o)||(o=Qr,"selectionStart"in o&&nd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=Ac(od,"onSelect"),0<o.length&&(i=new Fl("onSelect","select",null,i,r),t.push({event:i,listeners:o}),i.target=Qr)))}function tr(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Zr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},cd={},zm={};Ui&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function ar(t){if(cd[t])return cd[t];if(!Zr[t])return t;var i=Zr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in zm)return cd[t]=i[r];return t}var Mm=ar("animationend"),Nm=ar("animationiteration"),Om=ar("animationstart"),b_=ar("transitionrun"),v_=ar("transitionstart"),y_=ar("transitioncancel"),Dm=ar("transitionend"),Lm=new Map,Rm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ci(t,i){Lm.set(t,i),Js(i,[t])}var Va=[],Kr=0,ud=0;function Yl(){for(var t=Kr,i=ud=Kr=0;i<t;){var r=Va[i];Va[i++]=null;var o=Va[i];Va[i++]=null;var u=Va[i];Va[i++]=null;var h=Va[i];if(Va[i++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&Bm(r,u,h)}}function Xl(t,i,r,o){Va[Kr++]=t,Va[Kr++]=i,Va[Kr++]=r,Va[Kr++]=o,ud|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function dd(t,i,r,o){return Xl(t,i,r,o),Wl(t)}function gs(t,i){return Xl(t,null,null,i),Wl(t)}function Bm(t,i,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;u&&i!==null&&t.tag===3&&(h=t.stateNode,u=31-xa(r),h=h.hiddenUpdates,t=h[u],t===null?h[u]=[i]:t.push(i),i.lane=r|536870912)}function Wl(t){if(50<Do)throw Do=0,bh=null,Error(n(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Jr={},Hm=new WeakMap;function Pa(t,i){if(typeof t=="object"&&t!==null){var r=Hm.get(t);return r!==void 0?r:(i={value:t,source:i,stack:Y(i)},Hm.set(t,i),i)}return{value:t,source:i,stack:Y(i)}}var en=[],tn=0,Ql=null,Zl=0,Fa=[],qa=0,ir=null,Ii=1,Vi="";function sr(t,i){en[tn++]=Zl,en[tn++]=Ql,Ql=t,Zl=i}function Um(t,i,r){Fa[qa++]=Ii,Fa[qa++]=Vi,Fa[qa++]=ir,ir=t;var o=Ii;t=Vi;var u=32-xa(o)-1;o&=~(1<<u),r+=1;var h=32-xa(i)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ii=1<<32-xa(i)+u|r<<u|o,Vi=h+t}else Ii=1<<h|r<<u|o,Vi=t}function hd(t){t.return!==null&&(sr(t,1),Um(t,1,0))}function fd(t){for(;t===Ql;)Ql=en[--tn],en[tn]=null,Zl=en[--tn],en[tn]=null;for(;t===ir;)ir=Fa[--qa],Fa[qa]=null,Vi=Fa[--qa],Fa[qa]=null,Ii=Fa[--qa],Fa[qa]=null}var ia=null,It=null,Ue=!1,ui=null,Ci=!1,pd=Error(n(519));function rr(t){var i=Error(n(418,""));throw ho(Pa(i,t)),pd}function jm(t){var i=t.stateNode,r=t.type,o=t.memoizedProps;switch(i[Zt]=t,i[da]=o,r){case"dialog":Oe("cancel",i),Oe("close",i);break;case"iframe":case"object":case"embed":Oe("load",i);break;case"video":case"audio":for(r=0;r<Ro.length;r++)Oe(Ro[r],i);break;case"source":Oe("error",i);break;case"img":case"image":case"link":Oe("error",i),Oe("load",i);break;case"details":Oe("toggle",i);break;case"input":Oe("invalid",i),tm(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Hl(i);break;case"select":Oe("invalid",i);break;case"textarea":Oe("invalid",i),im(i,o.value,o.defaultValue,o.children),Hl(i)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||Wg(i.textContent,r)?(o.popover!=null&&(Oe("beforetoggle",i),Oe("toggle",i)),o.onScroll!=null&&Oe("scroll",i),o.onScrollEnd!=null&&Oe("scrollend",i),o.onClick!=null&&(i.onclick=Tc),i=!0):i=!1,i||rr(t)}function Im(t){for(ia=t.return;ia;)switch(ia.tag){case 3:case 27:Ci=!0;return;case 5:case 13:Ci=!1;return;default:ia=ia.return}}function co(t){if(t!==ia)return!1;if(!Ue)return Im(t),Ue=!0,!1;var i=!1,r;if((r=t.tag!==3&&t.tag!==27)&&((r=t.tag===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Dh(t.type,t.memoizedProps)),r=!r),r&&(i=!0),i&&It&&rr(t),Im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(i===0){It=hi(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;t=t.nextSibling}It=null}}else It=ia?hi(t.stateNode.nextSibling):null;return!0}function uo(){It=ia=null,Ue=!1}function ho(t){ui===null?ui=[t]:ui.push(t)}var fo=Error(n(460)),Vm=Error(n(474)),md={then:function(){}};function Pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kl(){}function Fm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(Kl,Kl),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===fo?Error(n(483)):t;default:if(typeof i.status=="string")i.then(Kl,Kl);else{if(t=et,t!==null&&100<t.shellSuspendCounter)throw Error(n(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===fo?Error(n(483)):t}throw po=i,fo}}var po=null;function qm(){if(po===null)throw Error(n(459));var t=po;return po=null,t}var an=null,mo=0;function Jl(t){var i=mo;return mo+=1,an===null&&(an=[]),Fm(an,t,i)}function go(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ec(t,i){throw i.$$typeof===c?Error(n(525)):(t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Gm(t){var i=t._init;return i(t._payload)}function Ym(t){function i(B,O){if(t){var U=B.deletions;U===null?(B.deletions=[O],B.flags|=16):U.push(O)}}function r(B,O){if(!t)return null;for(;O!==null;)i(B,O),O=O.sibling;return null}function o(B){for(var O=new Map;B!==null;)B.key!==null?O.set(B.key,B):O.set(B.index,B),B=B.sibling;return O}function u(B,O){return B=As(B,O),B.index=0,B.sibling=null,B}function h(B,O,U){return B.index=U,t?(U=B.alternate,U!==null?(U=U.index,U<O?(B.flags|=33554434,O):U):(B.flags|=33554434,O)):(B.flags|=1048576,O)}function y(B){return t&&B.alternate===null&&(B.flags|=33554434),B}function k(B,O,U,G){return O===null||O.tag!==6?(O=ch(U,B.mode,G),O.return=B,O):(O=u(O,U),O.return=B,O)}function $(B,O,U,G){var re=U.type;return re===f?q(B,O,U.props.children,G,U.key):O!==null&&(O.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===T&&Gm(re)===O.type)?(O=u(O,U.props),go(O,U),O.return=B,O):(O=vc(U.type,U.key,U.props,null,B.mode,G),go(O,U),O.return=B,O)}function L(B,O,U,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=uh(U,B.mode,G),O.return=B,O):(O=u(O,U.children||[]),O.return=B,O)}function q(B,O,U,G,re){return O===null||O.tag!==7?(O=mr(U,B.mode,G,re),O.return=B,O):(O=u(O,U),O.return=B,O)}function Q(B,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=ch(""+O,B.mode,U),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case d:return U=vc(O.type,O.key,O.props,null,B.mode,U),go(U,O),U.return=B,U;case m:return O=uh(O,B.mode,U),O.return=B,O;case T:var G=O._init;return O=G(O._payload),Q(B,O,U)}if(He(O)||H(O))return O=mr(O,B.mode,U,null),O.return=B,O;if(typeof O.then=="function")return Q(B,Jl(O),U);if(O.$$typeof===S)return Q(B,mc(B,O),U);ec(B,O)}return null}function j(B,O,U,G){var re=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return re!==null?null:k(B,O,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case d:return U.key===re?$(B,O,U,G):null;case m:return U.key===re?L(B,O,U,G):null;case T:return re=U._init,U=re(U._payload),j(B,O,U,G)}if(He(U)||H(U))return re!==null?null:q(B,O,U,G,null);if(typeof U.then=="function")return j(B,O,Jl(U),G);if(U.$$typeof===S)return j(B,O,mc(B,U),G);ec(B,U)}return null}function F(B,O,U,G,re){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return B=B.get(U)||null,k(O,B,""+G,re);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case d:return B=B.get(G.key===null?U:G.key)||null,$(O,B,G,re);case m:return B=B.get(G.key===null?U:G.key)||null,L(O,B,G,re);case T:var Ee=G._init;return G=Ee(G._payload),F(B,O,U,G,re)}if(He(G)||H(G))return B=B.get(U)||null,q(O,B,G,re,null);if(typeof G.then=="function")return F(B,O,U,Jl(G),re);if(G.$$typeof===S)return F(B,O,U,mc(O,G),re);ec(O,G)}return null}function le(B,O,U,G){for(var re=null,Ee=null,he=O,be=O=0,Rt=null;he!==null&&be<U.length;be++){he.index>be?(Rt=he,he=null):Rt=he.sibling;var je=j(B,he,U[be],G);if(je===null){he===null&&(he=Rt);break}t&&he&&je.alternate===null&&i(B,he),O=h(je,O,be),Ee===null?re=je:Ee.sibling=je,Ee=je,he=Rt}if(be===U.length)return r(B,he),Ue&&sr(B,be),re;if(he===null){for(;be<U.length;be++)he=Q(B,U[be],G),he!==null&&(O=h(he,O,be),Ee===null?re=he:Ee.sibling=he,Ee=he);return Ue&&sr(B,be),re}for(he=o(he);be<U.length;be++)Rt=F(he,B,be,U[be],G),Rt!==null&&(t&&Rt.alternate!==null&&he.delete(Rt.key===null?be:Rt.key),O=h(Rt,O,be),Ee===null?re=Rt:Ee.sibling=Rt,Ee=Rt);return t&&he.forEach(function(Ls){return i(B,Ls)}),Ue&&sr(B,be),re}function we(B,O,U,G){if(U==null)throw Error(n(151));for(var re=null,Ee=null,he=O,be=O=0,Rt=null,je=U.next();he!==null&&!je.done;be++,je=U.next()){he.index>be?(Rt=he,he=null):Rt=he.sibling;var Ls=j(B,he,je.value,G);if(Ls===null){he===null&&(he=Rt);break}t&&he&&Ls.alternate===null&&i(B,he),O=h(Ls,O,be),Ee===null?re=Ls:Ee.sibling=Ls,Ee=Ls,he=Rt}if(je.done)return r(B,he),Ue&&sr(B,be),re;if(he===null){for(;!je.done;be++,je=U.next())je=Q(B,je.value,G),je!==null&&(O=h(je,O,be),Ee===null?re=je:Ee.sibling=je,Ee=je);return Ue&&sr(B,be),re}for(he=o(he);!je.done;be++,je=U.next())je=F(he,B,be,je.value,G),je!==null&&(t&&je.alternate!==null&&he.delete(je.key===null?be:je.key),O=h(je,O,be),Ee===null?re=je:Ee.sibling=je,Ee=je);return t&&he.forEach(function(Ox){return i(B,Ox)}),Ue&&sr(B,be),re}function ft(B,O,U,G){if(typeof U=="object"&&U!==null&&U.type===f&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case d:e:{for(var re=U.key;O!==null;){if(O.key===re){if(re=U.type,re===f){if(O.tag===7){r(B,O.sibling),G=u(O,U.props.children),G.return=B,B=G;break e}}else if(O.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===T&&Gm(re)===O.type){r(B,O.sibling),G=u(O,U.props),go(G,U),G.return=B,B=G;break e}r(B,O);break}else i(B,O);O=O.sibling}U.type===f?(G=mr(U.props.children,B.mode,G,U.key),G.return=B,B=G):(G=vc(U.type,U.key,U.props,null,B.mode,G),go(G,U),G.return=B,B=G)}return y(B);case m:e:{for(re=U.key;O!==null;){if(O.key===re)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){r(B,O.sibling),G=u(O,U.children||[]),G.return=B,B=G;break e}else{r(B,O);break}else i(B,O);O=O.sibling}G=uh(U,B.mode,G),G.return=B,B=G}return y(B);case T:return re=U._init,U=re(U._payload),ft(B,O,U,G)}if(He(U))return le(B,O,U,G);if(H(U)){if(re=H(U),typeof re!="function")throw Error(n(150));return U=re.call(U),we(B,O,U,G)}if(typeof U.then=="function")return ft(B,O,Jl(U),G);if(U.$$typeof===S)return ft(B,O,mc(B,U),G);ec(B,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(r(B,O.sibling),G=u(O,U),G.return=B,B=G):(r(B,O),G=ch(U,B.mode,G),G.return=B,B=G),y(B)):r(B,O)}return function(B,O,U,G){try{mo=0;var re=ft(B,O,U,G);return an=null,re}catch(he){if(he===fo)throw he;var Ee=Wa(29,he,null,B.mode);return Ee.lanes=G,Ee.return=B,Ee}finally{}}}var nr=Ym(!0),Xm=Ym(!1),sn=ut(null),tc=ut(0);function Wm(t,i){t=Ji,Xe(tc,t),Xe(sn,i),Ji=t|i.baseLanes}function gd(){Xe(tc,Ji),Xe(sn,sn.current)}function bd(){Ji=tc.current,nt(sn),nt(tc)}var Ga=ut(null),ki=null;function bs(t){var i=t.alternate;Xe(At,At.current&1),Xe(Ga,t),ki===null&&(i===null||sn.current!==null||i.memoizedState!==null)&&(ki=t)}function Qm(t){if(t.tag===22){if(Xe(At,At.current),Xe(Ga,t),ki===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(ki=t)}}else vs()}function vs(){Xe(At,At.current),Xe(Ga,Ga.current)}function Pi(t){nt(Ga),ki===t&&(ki=null),nt(At)}var At=ut(0);function ac(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var __=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},x_=e.unstable_scheduleCallback,w_=e.unstable_NormalPriority,Tt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vd(){return{controller:new __,data:new Map,refCount:0}}function bo(t){t.refCount--,t.refCount===0&&x_(w_,function(){t.controller.abort()})}var vo=null,yd=0,rn=0,nn=null;function S_(t,i){if(vo===null){var r=vo=[];yd=0,rn=kh(),nn={status:"pending",value:void 0,then:function(o){r.push(o)}}}return yd++,i.then(Zm,Zm),i}function Zm(){if(--yd===0&&vo!==null){nn!==null&&(nn.status="fulfilled");var t=vo;vo=null,rn=0,nn=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function C_(t,i){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<r.length;u++)(0,r[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Km=V.S;V.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&S_(t,i),Km!==null&&Km(t,i)};var or=ut(null);function _d(){var t=or.current;return t!==null?t:et.pooledCache}function ic(t,i){i===null?Xe(or,or.current):Xe(or,i.pool)}function Jm(){var t=_d();return t===null?null:{parent:Tt._currentValue,pool:t}}var ys=0,Ce=null,We=null,xt=null,sc=!1,on=!1,lr=!1,rc=0,yo=0,ln=null,k_=0;function vt(){throw Error(n(321))}function xd(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!wa(t[r],i[r]))return!1;return!0}function wd(t,i,r,o,u,h){return ys=h,Ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,V.H=t===null||t.memoizedState===null?cr:_s,lr=!1,h=r(o,u),lr=!1,on&&(h=t0(i,r,o,u)),e0(t),h}function e0(t){V.H=Ei;var i=We!==null&&We.next!==null;if(ys=0,xt=We=Ce=null,sc=!1,yo=0,ln=null,i)throw Error(n(300));t===null||Dt||(t=t.dependencies,t!==null&&pc(t)&&(Dt=!0))}function t0(t,i,r,o){Ce=t;var u=0;do{if(on&&(ln=null),yo=0,on=!1,25<=u)throw Error(n(301));if(u+=1,xt=We=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}V.H=ur,h=i(r,o)}while(on);return h}function E_(){var t=V.H,i=t.useState()[0];return i=typeof i.then=="function"?_o(i):i,t=t.useState()[0],(We!==null?We.memoizedState:null)!==t&&(Ce.flags|=1024),i}function Sd(){var t=rc!==0;return rc=0,t}function Cd(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function kd(t){if(sc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}sc=!1}ys=0,xt=We=Ce=null,on=!1,yo=rc=0,ln=null}function fa(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Ce.memoizedState=xt=t:xt=xt.next=t,xt}function wt(){if(We===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var i=xt===null?Ce.memoizedState:xt.next;if(i!==null)xt=i,We=t;else{if(t===null)throw Ce.alternate===null?Error(n(467)):Error(n(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},xt===null?Ce.memoizedState=xt=t:xt=xt.next=t}return xt}var nc;nc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function _o(t){var i=yo;return yo+=1,ln===null&&(ln=[]),t=Fm(ln,t,i),i=Ce,(xt===null?i.memoizedState:xt.next)===null&&(i=i.alternate,V.H=i===null||i.memoizedState===null?cr:_s),t}function oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===S)return Kt(t)}throw Error(n(438,String(t)))}function Ed(t){var i=null,r=Ce.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=Ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=nc(),Ce.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),o=0;o<t;o++)r[o]=M;return i.index++,r}function Fi(t,i){return typeof i=="function"?i(t):i}function lc(t){var i=wt();return $d(i,We,t)}function $d(t,i,r){var o=t.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=r;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}i.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{i=u.next;var k=y=null,$=null,L=i,q=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Le&Q)===Q:(ys&Q)===Q){var j=L.revertLane;if(j===0)$!==null&&($=$.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===rn&&(q=!0);else if((ys&j)===j){L=L.next,j===rn&&(q=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},$===null?(k=$=Q,y=h):$=$.next=Q,Ce.lanes|=j,Ts|=j;Q=L.action,lr&&r(h,Q),h=L.hasEagerState?L.eagerState:r(h,Q)}else j={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},$===null?(k=$=j,y=h):$=$.next=j,Ce.lanes|=Q,Ts|=Q;L=L.next}while(L!==null&&L!==i);if($===null?y=h:$.next=k,!wa(h,t.memoizedState)&&(Dt=!0,q&&(r=nn,r!==null)))throw r;t.memoizedState=h,t.baseState=y,t.baseQueue=$,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ad(t){var i=wt(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,h=i.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);wa(h,i.memoizedState)||(Dt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,o]}function a0(t,i,r){var o=Ce,u=wt(),h=Ue;if(h){if(r===void 0)throw Error(n(407));r=r()}else r=i();var y=!wa((We||u).memoizedState,r);if(y&&(u.memoizedState=r,Dt=!0),u=u.queue,Md(r0.bind(null,o,u,t),[t]),u.getSnapshot!==i||y||xt!==null&&xt.memoizedState.tag&1){if(o.flags|=2048,cn(9,s0.bind(null,o,u,r,i),{destroy:void 0},null),et===null)throw Error(n(349));h||(ys&60)!==0||i0(o,i,r)}return r}function i0(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=Ce.updateQueue,i===null?(i=nc(),Ce.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function s0(t,i,r,o){i.value=r,i.getSnapshot=o,n0(i)&&o0(t)}function r0(t,i,r){return r(function(){n0(i)&&o0(t)})}function n0(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!wa(t,r)}catch{return!0}}function o0(t){var i=gs(t,2);i!==null&&sa(i,t,2)}function Td(t){var i=fa();if(typeof t=="function"){var r=t;if(t=r(),lr){fs(!0);try{r()}finally{fs(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},i}function l0(t,i,r,o){return t.baseState=r,$d(t,We,typeof o=="function"?o:Fi)}function $_(t,i,r,o,u){if(dc(t))throw Error(n(485));if(t=i.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};V.T!==null?r(!0):h.isTransition=!1,o(h),r=i.pending,r===null?(h.next=i.pending=h,c0(i,h)):(h.next=r.next,i.pending=r.next=h)}}function c0(t,i){var r=i.action,o=i.payload,u=t.state;if(i.isTransition){var h=V.T,y={};V.T=y;try{var k=r(u,o),$=V.S;$!==null&&$(y,k),u0(t,i,k)}catch(L){zd(t,i,L)}finally{V.T=h}}else try{h=r(u,o),u0(t,i,h)}catch(L){zd(t,i,L)}}function u0(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){d0(t,i,o)},function(o){return zd(t,i,o)}):d0(t,i,r)}function d0(t,i,r){i.status="fulfilled",i.value=r,h0(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,c0(t,r)))}function zd(t,i,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,h0(i),i=i.next;while(i!==o)}t.action=null}function h0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function f0(t,i){return i}function p0(t,i){if(Ue){var r=et.formState;if(r!==null){e:{var o=Ce;if(Ue){if(It){t:{for(var u=It,h=Ci;u.nodeType!==8;){if(!h){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){It=hi(u.nextSibling),o=u.data==="F!";break e}}rr(o)}o=!1}o&&(i=r[0])}}return r=fa(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:f0,lastRenderedState:i},r.queue=o,r=N0.bind(null,Ce,o),o.dispatch=r,o=Td(!1),h=Rd.bind(null,Ce,!1,o.queue),o=fa(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,r=$_.bind(null,Ce,u,h,r),u.dispatch=r,o.memoizedState=t,[i,r,!1]}function m0(t){var i=wt();return g0(i,We,t)}function g0(t,i,r){i=$d(t,i,f0)[0],t=lc(Fi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?_o(i):i;var o=wt(),u=o.queue,h=u.dispatch;return r!==o.memoizedState&&(Ce.flags|=2048,cn(9,A_.bind(null,u,r),{destroy:void 0},null)),[i,h,t]}function A_(t,i){t.action=i}function b0(t){var i=wt(),r=We;if(r!==null)return g0(i,r,t);wt(),i=i.memoizedState,r=wt();var o=r.queue.dispatch;return r.memoizedState=t,[i,o,!1]}function cn(t,i,r,o){return t={tag:t,create:i,inst:r,deps:o,next:null},i=Ce.updateQueue,i===null&&(i=nc(),Ce.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,i.lastEffect=t),t}function v0(){return wt().memoizedState}function cc(t,i,r,o){var u=fa();Ce.flags|=t,u.memoizedState=cn(1|i,r,{destroy:void 0},o===void 0?null:o)}function uc(t,i,r,o){var u=wt();o=o===void 0?null:o;var h=u.memoizedState.inst;We!==null&&o!==null&&xd(o,We.memoizedState.deps)?u.memoizedState=cn(i,r,h,o):(Ce.flags|=t,u.memoizedState=cn(1|i,r,h,o))}function y0(t,i){cc(8390656,8,t,i)}function Md(t,i){uc(2048,8,t,i)}function _0(t,i){return uc(4,2,t,i)}function x0(t,i){return uc(4,4,t,i)}function w0(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function S0(t,i,r){r=r!=null?r.concat([t]):null,uc(4,4,w0.bind(null,i,t),r)}function Nd(){}function C0(t,i){var r=wt();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&xd(i,o[1])?o[0]:(r.memoizedState=[t,i],t)}function k0(t,i){var r=wt();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&xd(i,o[1]))return o[0];if(o=t(),lr){fs(!0);try{t()}finally{fs(!1)}}return r.memoizedState=[o,i],o}function Od(t,i,r){return r===void 0||(ys&1073741824)!==0?t.memoizedState=i:(t.memoizedState=r,t=$g(),Ce.lanes|=t,Ts|=t,r)}function E0(t,i,r,o){return wa(r,i)?r:sn.current!==null?(t=Od(t,r,o),wa(t,i)||(Dt=!0),t):(ys&42)===0?(Dt=!0,t.memoizedState=r):(t=$g(),Ce.lanes|=t,Ts|=t,i)}function $0(t,i,r,o,u){var h=Ne.p;Ne.p=h!==0&&8>h?h:8;var y=V.T,k={};V.T=k,Rd(t,!1,i,r);try{var $=u(),L=V.S;if(L!==null&&L(k,$),$!==null&&typeof $=="object"&&typeof $.then=="function"){var q=C_($,o);xo(t,i,q,Ea(t))}else xo(t,i,o,Ea(t))}catch(Q){xo(t,i,{then:function(){},status:"rejected",reason:Q},Ea())}finally{Ne.p=h,V.T=y}}function T_(){}function Dd(t,i,r,o){if(t.tag!==5)throw Error(n(476));var u=A0(t).queue;$0(t,u,i,se,r===null?T_:function(){return T0(t),r(o)})}function A0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:se},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function T0(t){var i=A0(t).next.queue;xo(t,i,{},Ea())}function Ld(){return Kt(Io)}function z0(){return wt().memoizedState}function M0(){return wt().memoizedState}function z_(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ea();t=Ss(r);var o=Cs(i,t,r);o!==null&&(sa(o,i,r),Co(o,i,r)),i={cache:vd()},t.payload=i;return}i=i.return}}function M_(t,i,r){var o=Ea();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},dc(t)?O0(i,r):(r=dd(t,i,r,o),r!==null&&(sa(r,t,o),D0(r,i,o)))}function N0(t,i,r){var o=Ea();xo(t,i,r,o)}function xo(t,i,r,o){var u={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(dc(t))O0(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var y=i.lastRenderedState,k=h(y,r);if(u.hasEagerState=!0,u.eagerState=k,wa(k,y))return Xl(t,i,u,0),et===null&&Yl(),!1}catch{}finally{}if(r=dd(t,i,u,o),r!==null)return sa(r,t,o),D0(r,i,o),!0}return!1}function Rd(t,i,r,o){if(o={lane:2,revertLane:kh(),action:o,hasEagerState:!1,eagerState:null,next:null},dc(t)){if(i)throw Error(n(479))}else i=dd(t,r,o,2),i!==null&&sa(i,t,2)}function dc(t){var i=t.alternate;return t===Ce||i!==null&&i===Ce}function O0(t,i){on=sc=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function D0(t,i,r){if((r&4194176)!==0){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,qp(t,r)}}var Ei={readContext:Kt,use:oc,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useLayoutEffect:vt,useInsertionEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useSyncExternalStore:vt,useId:vt};Ei.useCacheRefresh=vt,Ei.useMemoCache=vt,Ei.useHostTransitionStatus=vt,Ei.useFormState=vt,Ei.useActionState=vt,Ei.useOptimistic=vt;var cr={readContext:Kt,use:oc,useCallback:function(t,i){return fa().memoizedState=[t,i===void 0?null:i],t},useContext:Kt,useEffect:y0,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,cc(4194308,4,w0.bind(null,i,t),r)},useLayoutEffect:function(t,i){return cc(4194308,4,t,i)},useInsertionEffect:function(t,i){cc(4,2,t,i)},useMemo:function(t,i){var r=fa();i=i===void 0?null:i;var o=t();if(lr){fs(!0);try{t()}finally{fs(!1)}}return r.memoizedState=[o,i],o},useReducer:function(t,i,r){var o=fa();if(r!==void 0){var u=r(i);if(lr){fs(!0);try{r(i)}finally{fs(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=M_.bind(null,Ce,t),[o.memoizedState,t]},useRef:function(t){var i=fa();return t={current:t},i.memoizedState=t},useState:function(t){t=Td(t);var i=t.queue,r=N0.bind(null,Ce,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Nd,useDeferredValue:function(t,i){var r=fa();return Od(r,t,i)},useTransition:function(){var t=Td(!1);return t=$0.bind(null,Ce,t.queue,!0,!1),fa().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var o=Ce,u=fa();if(Ue){if(r===void 0)throw Error(n(407));r=r()}else{if(r=i(),et===null)throw Error(n(349));(Le&60)!==0||i0(o,i,r)}u.memoizedState=r;var h={value:r,getSnapshot:i};return u.queue=h,y0(r0.bind(null,o,h,t),[t]),o.flags|=2048,cn(9,s0.bind(null,o,h,r,i),{destroy:void 0},null),r},useId:function(){var t=fa(),i=et.identifierPrefix;if(Ue){var r=Vi,o=Ii;r=(o&~(1<<32-xa(o)-1)).toString(32)+r,i=":"+i+"R"+r,r=rc++,0<r&&(i+="H"+r.toString(32)),i+=":"}else r=k_++,i=":"+i+"r"+r.toString(32)+":";return t.memoizedState=i},useCacheRefresh:function(){return fa().memoizedState=z_.bind(null,Ce)}};cr.useMemoCache=Ed,cr.useHostTransitionStatus=Ld,cr.useFormState=p0,cr.useActionState=p0,cr.useOptimistic=function(t){var i=fa();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Rd.bind(null,Ce,!0,r),r.dispatch=i,[t,i]};var _s={readContext:Kt,use:oc,useCallback:C0,useContext:Kt,useEffect:Md,useImperativeHandle:S0,useInsertionEffect:_0,useLayoutEffect:x0,useMemo:k0,useReducer:lc,useRef:v0,useState:function(){return lc(Fi)},useDebugValue:Nd,useDeferredValue:function(t,i){var r=wt();return E0(r,We.memoizedState,t,i)},useTransition:function(){var t=lc(Fi)[0],i=wt().memoizedState;return[typeof t=="boolean"?t:_o(t),i]},useSyncExternalStore:a0,useId:z0};_s.useCacheRefresh=M0,_s.useMemoCache=Ed,_s.useHostTransitionStatus=Ld,_s.useFormState=m0,_s.useActionState=m0,_s.useOptimistic=function(t,i){var r=wt();return l0(r,We,t,i)};var ur={readContext:Kt,use:oc,useCallback:C0,useContext:Kt,useEffect:Md,useImperativeHandle:S0,useInsertionEffect:_0,useLayoutEffect:x0,useMemo:k0,useReducer:Ad,useRef:v0,useState:function(){return Ad(Fi)},useDebugValue:Nd,useDeferredValue:function(t,i){var r=wt();return We===null?Od(r,t,i):E0(r,We.memoizedState,t,i)},useTransition:function(){var t=Ad(Fi)[0],i=wt().memoizedState;return[typeof t=="boolean"?t:_o(t),i]},useSyncExternalStore:a0,useId:z0};ur.useCacheRefresh=M0,ur.useMemoCache=Ed,ur.useHostTransitionStatus=Ld,ur.useFormState=b0,ur.useActionState=b0,ur.useOptimistic=function(t,i){var r=wt();return We!==null?l0(r,We,t,i):(r.baseState=t,[t,r.queue.dispatch])};function Bd(t,i,r,o){i=t.memoizedState,r=r(o,i),r=r==null?i:P({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Hd={isMounted:function(t){return(t=t._reactInternals)?ee(t)===t:!1},enqueueSetState:function(t,i,r){t=t._reactInternals;var o=Ea(),u=Ss(o);u.payload=i,r!=null&&(u.callback=r),i=Cs(t,u,o),i!==null&&(sa(i,t,o),Co(i,t,o))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var o=Ea(),u=Ss(o);u.tag=1,u.payload=i,r!=null&&(u.callback=r),i=Cs(t,u,o),i!==null&&(sa(i,t,o),Co(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=Ea(),o=Ss(r);o.tag=2,i!=null&&(o.callback=i),i=Cs(t,o,r),i!==null&&(sa(i,t,r),Co(i,t,r))}};function L0(t,i,r,o,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,y):i.prototype&&i.prototype.isPureReactComponent?!oo(r,o)||!oo(u,h):!0}function R0(t,i,r,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==t&&Hd.enqueueReplaceState(i,i.state,null)}function dr(t,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(t=t.defaultProps){r===i&&(r=P({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function B0(t){hc(t)}function H0(t){console.error(t)}function U0(t){hc(t)}function fc(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function j0(t,i,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ud(t,i,r){return r=Ss(r),r.tag=3,r.payload={element:null},r.callback=function(){fc(t,i)},r}function I0(t){return t=Ss(t),t.tag=3,t}function V0(t,i,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){j0(i,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){j0(i,r,o),typeof u!="function"&&(zs===null?zs=new Set([this]):zs.add(this));var k=o.stack;this.componentDidCatch(o.value,{componentStack:k!==null?k:""})})}function N_(t,i,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&So(i,r,u,!0),r=Ga.current,r!==null){switch(r.tag){case 13:return ki===null?_h():r.alternate===null&&ht===0&&(ht=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===md?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),wh(t,o,u)),!1;case 22:return r.flags|=65536,o===md?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),wh(t,o,u)),!1}throw Error(n(435,r.tag))}return wh(t,o,u),_h(),!1}if(Ue)return i=Ga.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==pd&&(t=Error(n(422),{cause:o}),ho(Pa(t,r)))):(o!==pd&&(i=Error(n(423),{cause:o}),ho(Pa(i,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Pa(o,r),u=Ud(t.stateNode,o,u),eh(t,u),ht!==4&&(ht=2)),!1;var h=Error(n(520),{cause:o});if(h=Pa(h,r),No===null?No=[h]:No.push(h),ht!==4&&(ht=2),i===null)return!0;o=Pa(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Ud(r.stateNode,o,t),eh(r,t),!1;case 1:if(i=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(zs===null||!zs.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=I0(u),V0(u,t,r,o),eh(r,u),!1}r=r.return}while(r!==null);return!1}var P0=Error(n(461)),Dt=!1;function Vt(t,i,r,o){i.child=t===null?Xm(i,null,r,o):nr(i,t.child,r,o)}function F0(t,i,r,o,u){r=r.render;var h=i.ref;if("ref"in o){var y={};for(var k in o)k!=="ref"&&(y[k]=o[k])}else y=o;return fr(i),o=wd(t,i,r,y,h,u),k=Sd(),t!==null&&!Dt?(Cd(t,i,u),qi(t,i,u)):(Ue&&k&&hd(i),i.flags|=1,Vt(t,i,o,u),i.child)}function q0(t,i,r,o,u){if(t===null){var h=r.type;return typeof h=="function"&&!lh(h)&&h.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=h,G0(t,i,h,o,u)):(t=vc(r.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Xd(t,u)){var y=h.memoizedProps;if(r=r.compare,r=r!==null?r:oo,r(y,o)&&t.ref===i.ref)return qi(t,i,u)}return i.flags|=1,t=As(h,o),t.ref=i.ref,t.return=i,i.child=t}function G0(t,i,r,o,u){if(t!==null){var h=t.memoizedProps;if(oo(h,o)&&t.ref===i.ref)if(Dt=!1,i.pendingProps=o=h,Xd(t,u))(t.flags&131072)!==0&&(Dt=!0);else return i.lanes=t.lanes,qi(t,i,u)}return jd(t,i,r,o,u)}function Y0(t,i,r){var o=i.pendingProps,u=o.children,h=(i.stateNode._pendingVisibility&2)!==0,y=t!==null?t.memoizedState:null;if(wo(t,i),o.mode==="hidden"||h){if((i.flags&128)!==0){if(o=y!==null?y.baseLanes|r:r,t!==null){for(u=i.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;i.childLanes=h&~o}else i.childLanes=0,i.child=null;return X0(t,i,o,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(i,y!==null?y.cachePool:null),y!==null?Wm(i,y):gd(),Qm(i);else return i.lanes=i.childLanes=536870912,X0(t,i,y!==null?y.baseLanes|r:r,r)}else y!==null?(ic(i,y.cachePool),Wm(i,y),vs(),i.memoizedState=null):(t!==null&&ic(i,null),gd(),vs());return Vt(t,i,u,r),i.child}function X0(t,i,r,o){var u=_d();return u=u===null?null:{parent:Tt._currentValue,pool:u},i.memoizedState={baseLanes:r,cachePool:u},t!==null&&ic(i,null),gd(),Qm(i),t!==null&&So(t,i,o,!0),null}function wo(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(n(284));(t===null||t.ref!==r)&&(i.flags|=2097664)}}function jd(t,i,r,o,u){return fr(i),r=wd(t,i,r,o,void 0,u),o=Sd(),t!==null&&!Dt?(Cd(t,i,u),qi(t,i,u)):(Ue&&o&&hd(i),i.flags|=1,Vt(t,i,r,u),i.child)}function W0(t,i,r,o,u,h){return fr(i),i.updateQueue=null,r=t0(i,o,r,u),e0(t),o=Sd(),t!==null&&!Dt?(Cd(t,i,h),qi(t,i,h)):(Ue&&o&&hd(i),i.flags|=1,Vt(t,i,r,h),i.child)}function Q0(t,i,r,o,u){if(fr(i),i.stateNode===null){var h=Jr,y=r.contextType;typeof y=="object"&&y!==null&&(h=Kt(y)),h=new r(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Hd,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},Kd(i),y=r.contextType,h.context=typeof y=="object"&&y!==null?Kt(y):Jr,h.state=i.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Bd(i,r,y,o),h.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Hd.enqueueReplaceState(h,h.state,null),Eo(i,o,h,u),ko(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){h=i.stateNode;var k=i.memoizedProps,$=dr(r,k);h.props=$;var L=h.context,q=r.contextType;y=Jr,typeof q=="object"&&q!==null&&(y=Kt(q));var Q=r.getDerivedStateFromProps;q=typeof Q=="function"||typeof h.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,q||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(k||L!==y)&&R0(i,h,o,y),ws=!1;var j=i.memoizedState;h.state=j,Eo(i,o,h,u),ko(),L=i.memoizedState,k||j!==L||ws?(typeof Q=="function"&&(Bd(i,r,Q,o),L=i.memoizedState),($=ws||L0(i,r,$,o,j,L,y))?(q||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=L),h.props=o,h.state=L,h.context=y,o=$):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,Jd(t,i),y=i.memoizedProps,q=dr(r,y),h.props=q,Q=i.pendingProps,j=h.context,L=r.contextType,$=Jr,typeof L=="object"&&L!==null&&($=Kt(L)),k=r.getDerivedStateFromProps,(L=typeof k=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==Q||j!==$)&&R0(i,h,o,$),ws=!1,j=i.memoizedState,h.state=j,Eo(i,o,h,u),ko();var F=i.memoizedState;y!==Q||j!==F||ws||t!==null&&t.dependencies!==null&&pc(t.dependencies)?(typeof k=="function"&&(Bd(i,r,k,o),F=i.memoizedState),(q=ws||L0(i,r,q,o,j,F,$)||t!==null&&t.dependencies!==null&&pc(t.dependencies))?(L||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,F,$),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,F,$)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=F),h.props=o,h.state=F,h.context=$,o=q):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),o=!1)}return h=o,wo(t,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&o?(i.child=nr(i,t.child,null,u),i.child=nr(i,null,r,u)):Vt(t,i,r,u),i.memoizedState=h.state,t=i.child):t=qi(t,i,u),t}function Z0(t,i,r,o){return uo(),i.flags|=256,Vt(t,i,r,o),i.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Vd(t){return{baseLanes:t,cachePool:Jm()}}function Pd(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=Qa),t}function K0(t,i,r){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(At.current&2)!==0),y&&(u=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ue){if(u?bs(i):vs(),Ue){var k=It,$;if($=k){e:{for($=k,k=Ci;$.nodeType!==8;){if(!k){k=null;break e}if($=hi($.nextSibling),$===null){k=null;break e}}k=$}k!==null?(i.memoizedState={dehydrated:k,treeContext:ir!==null?{id:Ii,overflow:Vi}:null,retryLane:536870912},$=Wa(18,null,null,0),$.stateNode=k,$.return=i,i.child=$,ia=i,It=null,$=!0):$=!1}$||rr(i)}if(k=i.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return k.data==="$!"?i.lanes=16:i.lanes=536870912,null;Pi(i)}return k=o.children,o=o.fallback,u?(vs(),u=i.mode,k=qd({mode:"hidden",children:k},u),o=mr(o,u,r,null),k.return=i,o.return=i,k.sibling=o,i.child=k,u=i.child,u.memoizedState=Vd(r),u.childLanes=Pd(t,y,r),i.memoizedState=Id,o):(bs(i),Fd(i,k))}if($=t.memoizedState,$!==null&&(k=$.dehydrated,k!==null)){if(h)i.flags&256?(bs(i),i.flags&=-257,i=Gd(t,i,r)):i.memoizedState!==null?(vs(),i.child=t.child,i.flags|=128,i=null):(vs(),u=o.fallback,k=i.mode,o=qd({mode:"visible",children:o.children},k),u=mr(u,k,r,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,nr(i,t.child,null,r),o=i.child,o.memoizedState=Vd(r),o.childLanes=Pd(t,y,r),i.memoizedState=Id,i=u);else if(bs(i),k.data==="$!"){if(y=k.nextSibling&&k.nextSibling.dataset,y)var L=y.dgst;y=L,o=Error(n(419)),o.stack="",o.digest=y,ho({value:o,source:null,stack:null}),i=Gd(t,i,r)}else if(Dt||So(t,i,r,!1),y=(r&t.childLanes)!==0,Dt||y){if(y=et,y!==null){if(o=r&-r,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(y.suspendedLanes|r))!==0?0:o,o!==0&&o!==$.retryLane)throw $.retryLane=o,gs(t,o),sa(y,t,o),P0}k.data==="$?"||_h(),i=Gd(t,i,r)}else k.data==="$?"?(i.flags|=128,i.child=t.child,i=Y_.bind(null,t),k._reactRetry=i,i=null):(t=$.treeContext,It=hi(k.nextSibling),ia=i,Ue=!0,ui=null,Ci=!1,t!==null&&(Fa[qa++]=Ii,Fa[qa++]=Vi,Fa[qa++]=ir,Ii=t.id,Vi=t.overflow,ir=i),i=Fd(i,o.children),i.flags|=4096);return i}return u?(vs(),u=o.fallback,k=i.mode,$=t.child,L=$.sibling,o=As($,{mode:"hidden",children:o.children}),o.subtreeFlags=$.subtreeFlags&31457280,L!==null?u=As(L,u):(u=mr(u,k,r,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,k=t.child.memoizedState,k===null?k=Vd(r):($=k.cachePool,$!==null?(L=Tt._currentValue,$=$.parent!==L?{parent:L,pool:L}:$):$=Jm(),k={baseLanes:k.baseLanes|r,cachePool:$}),u.memoizedState=k,u.childLanes=Pd(t,y,r),i.memoizedState=Id,o):(bs(i),r=t.child,t=r.sibling,r=As(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=r,i.memoizedState=null,r)}function Fd(t,i){return i=qd({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function qd(t,i){return Cg(t,i,0,null)}function Gd(t,i,r){return nr(i,t.child,null,r),t=Fd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function J0(t,i,r){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),Qd(t.return,i,r)}function Yd(t,i,r,o,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=r,h.tailMode=u)}function eg(t,i,r){var o=i.pendingProps,u=o.revealOrder,h=o.tail;if(Vt(t,i,o.children,r),o=At.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&J0(t,r,i);else if(t.tag===19)J0(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Xe(At,o),u){case"forwards":for(r=i.child,u=null;r!==null;)t=r.alternate,t!==null&&ac(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=i.child,i.child=null):(u=r.sibling,r.sibling=null),Yd(i,!1,u,r,h);break;case"backwards":for(r=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&ac(t)===null){i.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Yd(i,!0,r,null,h);break;case"together":Yd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qi(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Ts|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(So(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,r=As(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=As(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Xd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&pc(t)))}function O_(t,i,r){switch(i.tag){case 3:zl(i,i.stateNode.containerInfo),xs(i,Tt,t.memoizedState.cache),uo();break;case 27:case 5:Hu(i);break;case 4:zl(i,i.stateNode.containerInfo);break;case 10:xs(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(bs(i),i.flags|=128,null):(r&i.child.childLanes)!==0?K0(t,i,r):(bs(i),t=qi(t,i,r),t!==null?t.sibling:null);bs(i);break;case 19:var u=(t.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(So(t,i,r,!1),o=(r&i.childLanes)!==0),u){if(o)return eg(t,i,r);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Xe(At,At.current),o)break;return null;case 22:case 23:return i.lanes=0,Y0(t,i,r);case 24:xs(i,Tt,t.memoizedState.cache)}return qi(t,i,r)}function tg(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)Dt=!0;else{if(!Xd(t,r)&&(i.flags&128)===0)return Dt=!1,O_(t,i,r);Dt=(t.flags&131072)!==0}else Dt=!1,Ue&&(i.flags&1048576)!==0&&Um(i,Zl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")lh(o)?(t=dr(o,t),i.tag=1,i=Q0(null,i,o,t,r)):(i.tag=0,i=jd(null,i,o,t,r));else{if(o!=null){if(u=o.$$typeof,u===w){i.tag=11,i=F0(null,i,o,t,r);break e}else if(u===N){i.tag=14,i=q0(null,i,o,t,r);break e}}throw i=Z(o)||o,Error(n(306,i,""))}}return i;case 0:return jd(t,i,i.type,i.pendingProps,r);case 1:return o=i.type,u=dr(o,i.pendingProps),Q0(t,i,o,u,r);case 3:e:{if(zl(i,i.stateNode.containerInfo),t===null)throw Error(n(387));var h=i.pendingProps;u=i.memoizedState,o=u.element,Jd(t,i),Eo(i,h,null,r);var y=i.memoizedState;if(h=y.cache,xs(i,Tt,h),h!==u.cache&&Zd(i,[Tt],r,!0),ko(),h=y.element,u.isDehydrated)if(u={element:h,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=u,i.memoizedState=u,i.flags&256){i=Z0(t,i,h,r);break e}else if(h!==o){o=Pa(Error(n(424)),i),ho(o),i=Z0(t,i,h,r);break e}else for(It=hi(i.stateNode.containerInfo.firstChild),ia=i,Ue=!0,ui=null,Ci=!0,r=Xm(i,null,h,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(uo(),h===o){i=qi(t,i,r);break e}Vt(t,i,h,r)}i=i.child}return i;case 26:return wo(t,i),t===null?(r=sb(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ue||(r=i.type,t=i.pendingProps,o=zc(hs.current).createElement(r),o[Zt]=i,o[da]=t,Pt(o,r,t),Ot(o),i.stateNode=o):i.memoizedState=sb(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Hu(i),t===null&&Ue&&(o=i.stateNode=tb(i.type,i.pendingProps,hs.current),ia=i,Ci=!0,It=hi(o.firstChild)),o=i.pendingProps.children,t!==null||Ue?Vt(t,i,o,r):i.child=nr(i,null,o,r),wo(t,i),i.child;case 5:return t===null&&Ue&&((u=o=It)&&(o=cx(o,i.type,i.pendingProps,Ci),o!==null?(i.stateNode=o,ia=i,It=hi(o.firstChild),Ci=!1,u=!0):u=!1),u||rr(i)),Hu(i),u=i.type,h=i.pendingProps,y=t!==null?t.memoizedProps:null,o=h.children,Dh(u,h)?o=null:y!==null&&Dh(u,y)&&(i.flags|=32),i.memoizedState!==null&&(u=wd(t,i,E_,null,null,r),Io._currentValue=u),wo(t,i),Vt(t,i,o,r),i.child;case 6:return t===null&&Ue&&((t=r=It)&&(r=ux(r,i.pendingProps,Ci),r!==null?(i.stateNode=r,ia=i,It=null,t=!0):t=!1),t||rr(i)),null;case 13:return K0(t,i,r);case 4:return zl(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=nr(i,null,o,r):Vt(t,i,o,r),i.child;case 11:return F0(t,i,i.type,i.pendingProps,r);case 7:return Vt(t,i,i.pendingProps,r),i.child;case 8:return Vt(t,i,i.pendingProps.children,r),i.child;case 12:return Vt(t,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,xs(i,i.type,o.value),Vt(t,i,o.children,r),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,fr(i),u=Kt(u),o=o(u),i.flags|=1,Vt(t,i,o,r),i.child;case 14:return q0(t,i,i.type,i.pendingProps,r);case 15:return G0(t,i,i.type,i.pendingProps,r);case 19:return eg(t,i,r);case 22:return Y0(t,i,r);case 24:return fr(i),o=Kt(Tt),t===null?(u=_d(),u===null&&(u=et,h=vd(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),i.memoizedState={parent:o,cache:u},Kd(i),xs(i,Tt,u)):((t.lanes&r)!==0&&(Jd(t,i),Eo(i,null,null,r),ko()),u=t.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),xs(i,Tt,o)):(o=h.cache,xs(i,Tt,o),o!==u.cache&&Zd(i,[Tt],r,!0))),Vt(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(n(156,i.tag))}var Wd=ut(null),hr=null,Gi=null;function xs(t,i,r){Xe(Wd,i._currentValue),i._currentValue=r}function Yi(t){t._currentValue=Wd.current,nt(Wd)}function Qd(t,i,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===r)break;t=t.return}}function Zd(t,i,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var k=h;h=u;for(var $=0;$<i.length;$++)if(k.context===i[$]){h.lanes|=r,k=h.alternate,k!==null&&(k.lanes|=r),Qd(h.return,r,t),o||(y=null);break e}h=k.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(n(341));y.lanes|=r,h=y.alternate,h!==null&&(h.lanes|=r),Qd(y,r,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function So(t,i,r,o){t=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(n(387));if(y=y.memoizedProps,y!==null){var k=u.type;wa(u.pendingProps.value,y.value)||(t!==null?t.push(k):t=[k])}}else if(u===Tl.current){if(y=u.alternate,y===null)throw Error(n(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}u=u.return}t!==null&&Zd(i,t,r,o),i.flags|=262144}function pc(t){for(t=t.firstContext;t!==null;){if(!wa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){hr=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kt(t){return ag(hr,t)}function mc(t,i){return hr===null&&fr(t),ag(t,i)}function ag(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Gi===null){if(t===null)throw Error(n(308));Gi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Gi=Gi.next=i;return r}var ws=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ss(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Cs(t,i,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(lt&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Wl(t),Bm(t,null,r),i}return Xl(t,o,i,r),Wl(t)}function Co(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194176)!==0)){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,qp(t,r)}}function eh(t,i){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,r=r.next}while(r!==null);h===null?u=h=i:h=h.next=i}else u=h=i;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var th=!1;function ko(){if(th){var t=nn;if(t!==null)throw t}}function Eo(t,i,r,o){th=!1;var u=t.updateQueue;ws=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,k=u.shared.pending;if(k!==null){u.shared.pending=null;var $=k,L=$.next;$.next=null,y===null?h=L:y.next=L,y=$;var q=t.alternate;q!==null&&(q=q.updateQueue,k=q.lastBaseUpdate,k!==y&&(k===null?q.firstBaseUpdate=L:k.next=L,q.lastBaseUpdate=$))}if(h!==null){var Q=u.baseState;y=0,q=L=$=null,k=h;do{var j=k.lane&-536870913,F=j!==k.lane;if(F?(Le&j)===j:(o&j)===j){j!==0&&j===rn&&(th=!0),q!==null&&(q=q.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var le=t,we=k;j=i;var ft=r;switch(we.tag){case 1:if(le=we.payload,typeof le=="function"){Q=le.call(ft,Q,j);break e}Q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=we.payload,j=typeof le=="function"?le.call(ft,Q,j):le,j==null)break e;Q=P({},Q,j);break e;case 2:ws=!0}}j=k.callback,j!==null&&(t.flags|=64,F&&(t.flags|=8192),F=u.callbacks,F===null?u.callbacks=[j]:F.push(j))}else F={lane:j,tag:k.tag,payload:k.payload,callback:k.callback,next:null},q===null?(L=q=F,$=Q):q=q.next=F,y|=j;if(k=k.next,k===null){if(k=u.shared.pending,k===null)break;F=k,k=F.next,F.next=null,u.lastBaseUpdate=F,u.shared.pending=null}}while(!0);q===null&&($=Q),u.baseState=$,u.firstBaseUpdate=L,u.lastBaseUpdate=q,h===null&&(u.shared.lanes=0),Ts|=y,t.lanes=y,t.memoizedState=Q}}function ig(t,i){if(typeof t!="function")throw Error(n(191,t));t.call(i)}function sg(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)ig(r[t],i)}function $o(t,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var h=r.create,y=r.inst;o=h(),y.destroy=o}r=r.next}while(r!==u)}}catch(k){Je(i,i.return,k)}}function ks(t,i,r){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var y=o.inst,k=y.destroy;if(k!==void 0){y.destroy=void 0,u=i;var $=r;try{k()}catch(L){Je(u,$,L)}}}o=o.next}while(o!==h)}}catch(L){Je(i,i.return,L)}}function rg(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{sg(i,r)}catch(o){Je(t,t.return,o)}}}function ng(t,i,r){r.props=dr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Je(t,i,o)}}function pr(t,i){try{var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 26:case 27:case 5:var u=o;break;default:u=o}typeof r=="function"?t.refCleanup=r(u):r.current=u}}catch(h){Je(t,i,h)}}function Sa(t,i){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Je(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Je(t,i,u)}else r.current=null}function og(t){var i=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Je(t,t.return,u)}}function lg(t,i,r){try{var o=t.stateNode;sx(o,t.type,r,i),o[da]=i}catch(u){Je(t,t.return,u)}}function cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function ah(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?r.nodeType===8?r.parentNode.insertBefore(t,i):r.insertBefore(t,i):(r.nodeType===8?(i=r.parentNode,i.insertBefore(t,r)):(i=r,i.appendChild(t)),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Tc));else if(o!==4&&o!==27&&(t=t.child,t!==null))for(ih(t,i,r),t=t.sibling;t!==null;)ih(t,i,r),t=t.sibling}function gc(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(o!==4&&o!==27&&(t=t.child,t!==null))for(gc(t,i,r),t=t.sibling;t!==null;)gc(t,i,r),t=t.sibling}var Xi=!1,dt=!1,sh=!1,ug=typeof WeakSet=="function"?WeakSet:Set,Lt=null,dg=!1;function D_(t,i){if(t=t.containerInfo,Nh=Rc,t=Am(t),nd(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var y=0,k=-1,$=-1,L=0,q=0,Q=t,j=null;t:for(;;){for(var F;Q!==r||u!==0&&Q.nodeType!==3||(k=y+u),Q!==h||o!==0&&Q.nodeType!==3||($=y+o),Q.nodeType===3&&(y+=Q.nodeValue.length),(F=Q.firstChild)!==null;)j=Q,Q=F;for(;;){if(Q===t)break t;if(j===r&&++L===u&&(k=y),j===h&&++q===o&&($=y),(F=Q.nextSibling)!==null)break;Q=j,j=Q.parentNode}Q=F}r=k===-1||$===-1?null:{start:k,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oh={focusedElem:t,selectionRange:r},Rc=!1,Lt=i;Lt!==null;)if(i=Lt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Lt=t;else for(;Lt!==null;){switch(i=Lt,h=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=i,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var le=dr(r.type,u,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(le,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(we){Je(r,r.return,we)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Bh(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(n(163))}if(t=i.sibling,t!==null){t.return=i.return,Lt=t;break}Lt=i.return}return le=dg,dg=!1,le}function hg(t,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Qi(t,r),o&4&&$o(5,r);break;case 1:if(Qi(t,r),o&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(k){Je(r,r.return,k)}else{var u=dr(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(k){Je(r,r.return,k)}}o&64&&rg(r),o&512&&pr(r,r.return);break;case 3:if(Qi(t,r),o&64&&(o=r.updateQueue,o!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{sg(o,t)}catch(k){Je(r,r.return,k)}}break;case 26:Qi(t,r),o&512&&pr(r,r.return);break;case 27:case 5:Qi(t,r),i===null&&o&4&&og(r),o&512&&pr(r,r.return);break;case 12:Qi(t,r);break;case 13:Qi(t,r),o&4&&mg(t,r);break;case 22:if(u=r.memoizedState!==null||Xi,!u){i=i!==null&&i.memoizedState!==null||dt;var h=Xi,y=dt;Xi=u,(dt=i)&&!y?Es(t,r,(r.subtreeFlags&8772)!==0):Qi(t,r),Xi=h,dt=y}o&512&&(r.memoizedProps.mode==="manual"?pr(r,r.return):Sa(r,r.return));break;default:Qi(t,r)}}function fg(t){var i=t.alternate;i!==null&&(t.alternate=null,fg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Fu(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var St=null,Ca=!1;function Wi(t,i,r){for(r=r.child;r!==null;)pg(t,i,r),r=r.sibling}function pg(t,i,r){if(_a&&typeof _a.onCommitFiberUnmount=="function")try{_a.onCommitFiberUnmount(Wn,r)}catch{}switch(r.tag){case 26:dt||Sa(r,i),Wi(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:dt||Sa(r,i);var o=St,u=Ca;for(St=r.stateNode,Wi(t,i,r),r=r.stateNode,i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Fu(r),St=o,Ca=u;break;case 5:dt||Sa(r,i);case 6:u=St;var h=Ca;if(St=null,Wi(t,i,r),St=u,Ca=h,St!==null)if(Ca)try{t=St,o=r.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)}catch(y){Je(r,i,y)}else try{St.removeChild(r.stateNode)}catch(y){Je(r,i,y)}break;case 18:St!==null&&(Ca?(i=St,r=r.stateNode,i.nodeType===8?Rh(i.parentNode,r):i.nodeType===1&&Rh(i,r),qo(i)):Rh(St,r.stateNode));break;case 4:o=St,u=Ca,St=r.stateNode.containerInfo,Ca=!0,Wi(t,i,r),St=o,Ca=u;break;case 0:case 11:case 14:case 15:dt||ks(2,r,i),dt||ks(4,r,i),Wi(t,i,r);break;case 1:dt||(Sa(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&ng(r,i,o)),Wi(t,i,r);break;case 21:Wi(t,i,r);break;case 22:dt||Sa(r,i),dt=(o=dt)||r.memoizedState!==null,Wi(t,i,r),dt=o;break;default:Wi(t,i,r)}}function mg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qo(t)}catch(r){Je(i,i.return,r)}}function L_(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ug),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ug),i;default:throw Error(n(435,t.tag))}}function rh(t,i){var r=L_(t);i.forEach(function(o){var u=X_.bind(null,t,o);r.has(o)||(r.add(o),o.then(u,u))})}function Ya(t,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=t,y=i,k=y;e:for(;k!==null;){switch(k.tag){case 27:case 5:St=k.stateNode,Ca=!1;break e;case 3:St=k.stateNode.containerInfo,Ca=!0;break e;case 4:St=k.stateNode.containerInfo,Ca=!0;break e}k=k.return}if(St===null)throw Error(n(160));pg(h,y,u),St=null,Ca=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)gg(i,t),i=i.sibling}var di=null;function gg(t,i){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ya(i,t),Xa(t),o&4&&(ks(3,t,t.return),$o(3,t),ks(5,t,t.return));break;case 1:Ya(i,t),Xa(t),o&512&&(dt||r===null||Sa(r,r.return)),o&64&&Xi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=di;if(Ya(i,t),Xa(t),o&512&&(dt||r===null||Sa(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Kn]||h[Zt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Pt(h,o,r),h[Zt]=t,Ot(h),o=h;break e;case"link":var y=ob("link","href",u).get(o+(r.href||""));if(y){for(var k=0;k<y.length;k++)if(h=y[k],h.getAttribute("href")===(r.href==null?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(k,1);break t}}h=u.createElement(o),Pt(h,o,r),u.head.appendChild(h);break;case"meta":if(y=ob("meta","content",u).get(o+(r.content||""))){for(k=0;k<y.length;k++)if(h=y[k],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(k,1);break t}}h=u.createElement(o),Pt(h,o,r),u.head.appendChild(h);break;default:throw Error(n(468,o))}h[Zt]=t,Ot(h),o=h}t.stateNode=o}else lb(u,t.type,t.stateNode);else t.stateNode=nb(u,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?lb(u,t.type,t.stateNode):nb(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&lg(t,t.memoizedProps,r.memoizedProps)}break;case 27:if(o&4&&t.alternate===null){u=t.stateNode,h=t.memoizedProps;try{for(var $=u.firstChild;$;){var L=$.nextSibling,q=$.nodeName;$[Kn]||q==="HEAD"||q==="BODY"||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&$.rel.toLowerCase()==="stylesheet"||u.removeChild($),$=L}for(var Q=t.type,j=u.attributes;j.length;)u.removeAttributeNode(j[0]);Pt(u,Q,h),u[Zt]=t,u[da]=h}catch(le){Je(t,t.return,le)}}case 5:if(Ya(i,t),Xa(t),o&512&&(dt||r===null||Sa(r,r.return)),t.flags&32){u=t.stateNode;try{Gr(u,"")}catch(le){Je(t,t.return,le)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,lg(t,u,r!==null?r.memoizedProps:u)),o&1024&&(sh=!0);break;case 6:if(Ya(i,t),Xa(t),o&4){if(t.stateNode===null)throw Error(n(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(le){Je(t,t.return,le)}}break;case 3:if(Oc=null,u=di,di=Mc(i.containerInfo),Ya(i,t),di=u,Xa(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{qo(i.containerInfo)}catch(le){Je(t,t.return,le)}sh&&(sh=!1,bg(t));break;case 4:o=di,di=Mc(t.stateNode.containerInfo),Ya(i,t),Xa(t),di=o;break;case 12:Ya(i,t),Xa(t);break;case 13:Ya(i,t),Xa(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ph=Si()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,rh(t,o)));break;case 22:if(o&512&&(dt||r===null||Sa(r,r.return)),$=t.memoizedState!==null,L=r!==null&&r.memoizedState!==null,q=Xi,Q=dt,Xi=q||$,dt=Q||L,Ya(i,t),dt=Q,Xi=q,Xa(t),i=t.stateNode,i._current=t,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,o&8192&&(i._visibility=$?i._visibility&-2:i._visibility|1,$&&(i=Xi||dt,r===null||L||i||un(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(r=null,i=t;;){if(i.tag===5||i.tag===26||i.tag===27){if(r===null){L=r=i;try{if(u=L.stateNode,$)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=L.stateNode,k=L.memoizedProps.style;var F=k!=null&&k.hasOwnProperty("display")?k.display:null;y.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(le){Je(L,L.return,le)}}}else if(i.tag===6){if(r===null){L=i;try{L.stateNode.nodeValue=$?"":L.memoizedProps}catch(le){Je(L,L.return,le)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,rh(t,r))));break;case 19:Ya(i,t),Xa(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,rh(t,o)));break;case 21:break;default:Ya(i,t),Xa(t)}}function Xa(t){var i=t.flags;if(i&2){try{if(t.tag!==27){e:{for(var r=t.return;r!==null;){if(cg(r)){var o=r;break e}r=r.return}throw Error(n(160))}switch(o.tag){case 27:var u=o.stateNode,h=ah(t);gc(t,h,u);break;case 5:var y=o.stateNode;o.flags&32&&(Gr(y,""),o.flags&=-33);var k=ah(t);gc(t,k,y);break;case 3:case 4:var $=o.stateNode.containerInfo,L=ah(t);ih(t,L,$);break;default:throw Error(n(161))}}}catch(q){Je(t,t.return,q)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function bg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;bg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Qi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)hg(t,i.alternate,i),i=i.sibling}function un(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ks(4,i,i.return),un(i);break;case 1:Sa(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&ng(i,i.return,r),un(i);break;case 26:case 27:case 5:Sa(i,i.return),un(i);break;case 22:Sa(i,i.return),i.memoizedState===null&&un(i);break;default:un(i)}t=t.sibling}}function Es(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,h=i,y=h.flags;switch(h.tag){case 0:case 11:case 15:Es(u,h,r),$o(4,h);break;case 1:if(Es(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(L){Je(o,o.return,L)}if(o=h,u=o.updateQueue,u!==null){var k=o.stateNode;try{var $=u.shared.hiddenCallbacks;if($!==null)for(u.shared.hiddenCallbacks=null,u=0;u<$.length;u++)ig($[u],k)}catch(L){Je(o,o.return,L)}}r&&y&64&&rg(h),pr(h,h.return);break;case 26:case 27:case 5:Es(u,h,r),r&&o===null&&y&4&&og(h),pr(h,h.return);break;case 12:Es(u,h,r);break;case 13:Es(u,h,r),r&&y&4&&mg(u,h);break;case 22:h.memoizedState===null&&Es(u,h,r),pr(h,h.return);break;default:Es(u,h,r)}i=i.sibling}}function nh(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&bo(r))}function oh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&bo(t))}function $s(t,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)vg(t,i,r,o),i=i.sibling}function vg(t,i,r,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:$s(t,i,r,o),u&2048&&$o(9,i);break;case 3:$s(t,i,r,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&bo(t)));break;case 12:if(u&2048){$s(t,i,r,o),t=i.stateNode;try{var h=i.memoizedProps,y=h.id,k=h.onPostCommit;typeof k=="function"&&k(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch($){Je(i,i.return,$)}}else $s(t,i,r,o);break;case 23:break;case 22:h=i.stateNode,i.memoizedState!==null?h._visibility&4?$s(t,i,r,o):Ao(t,i):h._visibility&4?$s(t,i,r,o):(h._visibility|=4,dn(t,i,r,o,(i.subtreeFlags&10256)!==0)),u&2048&&nh(i.alternate,i);break;case 24:$s(t,i,r,o),u&2048&&oh(i.alternate,i);break;default:$s(t,i,r,o)}}function dn(t,i,r,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var h=t,y=i,k=r,$=o,L=y.flags;switch(y.tag){case 0:case 11:case 15:dn(h,y,k,$,u),$o(8,y);break;case 23:break;case 22:var q=y.stateNode;y.memoizedState!==null?q._visibility&4?dn(h,y,k,$,u):Ao(h,y):(q._visibility|=4,dn(h,y,k,$,u)),u&&L&2048&&nh(y.alternate,y);break;case 24:dn(h,y,k,$,u),u&&L&2048&&oh(y.alternate,y);break;default:dn(h,y,k,$,u)}i=i.sibling}}function Ao(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,o=i,u=o.flags;switch(o.tag){case 22:Ao(r,o),u&2048&&nh(o.alternate,o);break;case 24:Ao(r,o),u&2048&&oh(o.alternate,o);break;default:Ao(r,o)}i=i.sibling}}var To=8192;function hn(t){if(t.subtreeFlags&To)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 26:hn(t),t.flags&To&&t.memoizedState!==null&&Sx(di,t.memoizedState,t.memoizedProps);break;case 5:hn(t);break;case 3:case 4:var i=di;di=Mc(t.stateNode.containerInfo),hn(t),di=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=To,To=16777216,hn(t),To=i):hn(t));break;default:hn(t)}}function _g(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function zo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];Lt=o,wg(o,t)}_g(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xg(t),t=t.sibling}function xg(t){switch(t.tag){case 0:case 11:case 15:zo(t),t.flags&2048&&ks(9,t,t.return);break;case 3:zo(t);break;case 12:zo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&4&&(t.return===null||t.return.tag!==13)?(i._visibility&=-5,bc(t)):zo(t);break;default:zo(t)}}function bc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];Lt=o,wg(o,t)}_g(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ks(8,i,i.return),bc(i);break;case 22:r=i.stateNode,r._visibility&4&&(r._visibility&=-5,bc(i));break;default:bc(i)}t=t.sibling}}function wg(t,i){for(;Lt!==null;){var r=Lt;switch(r.tag){case 0:case 11:case 15:ks(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Lt=o;else e:for(r=t;Lt!==null;){o=Lt;var u=o.sibling,h=o.return;if(fg(o),o===r){Lt=null;break e}if(u!==null){u.return=h,Lt=u;break e}Lt=h}}}function R_(t,i,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wa(t,i,r,o){return new R_(t,i,r,o)}function lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function As(t,i){var r=t.alternate;return r===null?(r=Wa(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&31457280,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Sg(t,i){t.flags&=31457282;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function vc(t,i,r,o,u,h){var y=0;if(o=t,typeof t=="function")lh(t)&&(y=1);else if(typeof t=="string")y=xx(t,r,Ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case f:return mr(r.children,u,h,i);case p:y=8,u|=24;break;case b:return t=Wa(12,r,i,u|2),t.elementType=b,t.lanes=h,t;case E:return t=Wa(13,r,i,u),t.elementType=E,t.lanes=h,t;case z:return t=Wa(19,r,i,u),t.elementType=z,t.lanes=h,t;case D:return Cg(r,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case S:y=10;break e;case _:y=9;break e;case w:y=11;break e;case N:y=14;break e;case T:y=16,o=null;break e}y=29,r=Error(n(130,t===null?"null":typeof t,"")),o=null}return i=Wa(y,r,i,u),i.elementType=t,i.type=o,i.lanes=h,i}function mr(t,i,r,o){return t=Wa(7,t,o,i),t.lanes=r,t}function Cg(t,i,r,o){t=Wa(22,t,o,i),t.elementType=D,t.lanes=r;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=u._current;if(h===null)throw Error(n(456));if((u._pendingVisibility&2)===0){var y=gs(h,2);y!==null&&(u._pendingVisibility|=2,sa(y,h,2))}},attach:function(){var h=u._current;if(h===null)throw Error(n(456));if((u._pendingVisibility&2)!==0){var y=gs(h,2);y!==null&&(u._pendingVisibility&=-3,sa(y,h,2))}}};return t.stateNode=u,t}function ch(t,i,r){return t=Wa(6,t,null,i),t.lanes=r,t}function uh(t,i,r){return i=Wa(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Zi(t){t.flags|=4}function kg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!cb(i)){if(i=Ga.current,i!==null&&((Le&4194176)===Le?ki!==null:(Le&62914560)!==Le&&(Le&536870912)===0||i!==ki))throw po=md,Vm;t.flags|=8192}}function yc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Pp():536870912,t.lanes|=i,pn|=i)}function Mo(t,i){if(!Ue)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ot(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(i)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&31457280,o|=u.flags&31457280,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,i}function B_(t,i,r){var o=i.pendingProps;switch(fd(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(i),null;case 1:return ot(i),null;case 3:return r=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Yi(Tt),jr(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(co(i)?Zi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(vh(ui),ui=null))),ot(i),null;case 26:return r=i.memoizedState,t===null?(Zi(i),r!==null?(ot(i),kg(i,r)):(ot(i),i.flags&=-16777217)):r?r!==t.memoizedState?(Zi(i),ot(i),kg(i,r)):(ot(i),i.flags&=-16777217):(t.memoizedProps!==o&&Zi(i),ot(i),i.flags&=-16777217),null;case 27:Ml(i),r=hs.current;var u=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(!o){if(i.stateNode===null)throw Error(n(166));return ot(i),null}t=Ye.current,co(i)?jm(i):(t=tb(u,o,r),i.stateNode=t,Zi(i))}return ot(i),null;case 5:if(Ml(i),r=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(!o){if(i.stateNode===null)throw Error(n(166));return ot(i),null}if(t=Ye.current,co(i))jm(i);else{switch(u=zc(hs.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(r,{is:o.is}):u.createElement(r)}}t[Zt]=i,t[da]=o;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=t;e:switch(Pt(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Zi(i)}}return ot(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(n(166));if(t=hs.current,co(i)){if(t=i.stateNode,r=i.memoizedProps,o=null,u=ia,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Zt]=i,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Wg(t.nodeValue,r)),t||rr(i)}else t=zc(t).createTextNode(o),t[Zt]=i,i.stateNode=t}return ot(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=co(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(n(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(n(317));u[Zt]=i}else uo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ot(i),u=!1}else ui!==null&&(vh(ui),ui=null),u=!0;if(!u)return i.flags&256?(Pi(i),i):(Pi(i),null)}if(Pi(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return r!==t&&r&&(i.child.flags|=8192),yc(i,i.updateQueue),ot(i),null;case 4:return jr(),t===null&&Th(i.stateNode.containerInfo),ot(i),null;case 10:return Yi(i.type),ot(i),null;case 19:if(nt(At),u=i.memoizedState,u===null)return ot(i),null;if(o=(i.flags&128)!==0,h=u.rendering,h===null)if(o)Mo(u,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=ac(t),h!==null){for(i.flags|=128,Mo(u,!1),t=h.updateQueue,i.updateQueue=t,yc(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Sg(r,t),r=r.sibling;return Xe(At,At.current&1|2),i.child}t=t.sibling}u.tail!==null&&Si()>_c&&(i.flags|=128,o=!0,Mo(u,!1),i.lanes=4194304)}else{if(!o)if(t=ac(h),t!==null){if(i.flags|=128,o=!0,t=t.updateQueue,i.updateQueue=t,yc(i,t),Mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Ue)return ot(i),null}else 2*Si()-u.renderingStartTime>_c&&r!==536870912&&(i.flags|=128,o=!0,Mo(u,!1),i.lanes=4194304);u.isBackwards?(h.sibling=i.child,i.child=h):(t=u.last,t!==null?t.sibling=h:i.child=h,u.last=h)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Si(),i.sibling=null,t=At.current,Xe(At,o?t&1|2:t&1),i):(ot(i),null);case 22:case 23:return Pi(i),bd(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(ot(i),i.subtreeFlags&6&&(i.flags|=8192)):ot(i),r=i.updateQueue,r!==null&&yc(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),t!==null&&nt(or),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Yi(Tt),ot(i),null;case 25:return null}throw Error(n(156,i.tag))}function H_(t,i){switch(fd(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Yi(Tt),jr(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ml(i),null;case 13:if(Pi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));uo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return nt(At),null;case 4:return jr(),null;case 10:return Yi(i.type),null;case 22:case 23:return Pi(i),bd(),t!==null&&nt(or),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Yi(Tt),null;case 25:return null;default:return null}}function Eg(t,i){switch(fd(i),i.tag){case 3:Yi(Tt),jr();break;case 26:case 27:case 5:Ml(i);break;case 4:jr();break;case 13:Pi(i);break;case 19:nt(At);break;case 10:Yi(i.type);break;case 22:case 23:Pi(i),bd(),t!==null&&nt(or);break;case 24:Yi(Tt)}}var U_={getCacheForType:function(t){var i=Kt(Tt),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r}},j_=typeof WeakMap=="function"?WeakMap:Map,lt=0,et=null,Te=null,Le=0,tt=0,ka=null,Ki=!1,fn=!1,dh=!1,Ji=0,ht=0,Ts=0,gr=0,hh=0,Qa=0,pn=0,No=null,$i=null,fh=!1,ph=0,_c=1/0,xc=null,zs=null,wc=!1,br=null,Oo=0,mh=0,gh=null,Do=0,bh=null;function Ea(){if((lt&2)!==0&&Le!==0)return Le&-Le;if(V.T!==null){var t=rn;return t!==0?t:kh()}return Yp()}function $g(){Qa===0&&(Qa=(Le&536870912)===0||Ue?Vp():536870912);var t=Ga.current;return t!==null&&(t.flags|=32),Qa}function sa(t,i,r){(t===et&&tt===2||t.cancelPendingCommit!==null)&&(mn(t,0),es(t,Le,Qa,!1)),Zn(t,r),((lt&2)===0||t!==et)&&(t===et&&((lt&2)===0&&(gr|=r),ht===4&&es(t,Le,Qa,!1)),Ai(t))}function Ag(t,i,r){if((lt&6)!==0)throw Error(n(327));var o=!r&&(i&60)===0&&(i&t.expiredLanes)===0||Qn(t,i),u=o?P_(t,i):xh(t,i,!0),h=o;do{if(u===0){fn&&!o&&es(t,i,0,!1);break}else if(u===6)es(t,i,0,!Ki);else{if(r=t.current.alternate,h&&!I_(r)){u=xh(t,i,!1),h=!1;continue}if(u===2){if(h=i,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var k=t;u=No;var $=k.current.memoizedState.isDehydrated;if($&&(mn(k,y).flags|=256),y=xh(k,y,!1),y!==2){if(dh&&!$){k.errorRecoveryDisabledLanes|=h,gr|=h,u=4;break e}h=$i,$i=u,h!==null&&vh(h)}u=y}if(h=!1,u!==2)continue}}if(u===1){mn(t,0),es(t,i,0,!0);break}e:{switch(o=t,u){case 0:case 1:throw Error(n(345));case 4:if((i&4194176)===i){es(o,i,Qa,!Ki);break e}break;case 2:$i=null;break;case 3:case 5:break;default:throw Error(n(329))}if(o.finishedWork=r,o.finishedLanes=i,(i&62914560)===i&&(h=ph+300-Si(),10<h)){if(es(o,i,Qa,!Ki),Ll(o,0)!==0)break e;o.timeoutHandle=Kg(Tg.bind(null,o,r,$i,xc,fh,i,Qa,gr,pn,Ki,2,-0,0),h);break e}Tg(o,r,$i,xc,fh,i,Qa,gr,pn,Ki,0,-0,0)}}break}while(!0);Ai(t)}function vh(t){$i===null?$i=t:$i.push.apply($i,t)}function Tg(t,i,r,o,u,h,y,k,$,L,q,Q,j){var F=i.subtreeFlags;if((F&8192||(F&16785408)===16785408)&&(jo={stylesheets:null,count:0,unsuspend:wx},yg(i),i=Cx(),i!==null)){t.cancelPendingCommit=i(Rg.bind(null,t,r,o,u,y,k,$,1,Q,j)),es(t,h,y,!L);return}Rg(t,r,o,u,y,k,$,q,Q,j)}function I_(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!wa(h(),u))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function es(t,i,r,o){i&=~hh,i&=~gr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var h=31-xa(u),y=1<<h;o[h]=-1,u&=~y}r!==0&&Fp(t,r,i)}function Sc(){return(lt&6)===0?(Lo(0),!1):!0}function yh(){if(Te!==null){if(tt===0)var t=Te.return;else t=Te,Gi=hr=null,kd(t),an=null,mo=0,t=Te;for(;t!==null;)Eg(t.alternate,t),t=t.return;Te=null}}function mn(t,i){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,nx(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),yh(),et=t,Te=r=As(t.current,null),Le=i,tt=0,ka=null,Ki=!1,fn=Qn(t,i),dh=!1,pn=Qa=hh=gr=Ts=ht=0,$i=No=null,fh=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-xa(o),h=1<<u;i|=t[u],o&=~h}return Ji=i,Yl(),r}function zg(t,i){Ce=null,V.H=Ei,i===fo?(i=qm(),tt=3):i===Vm?(i=qm(),tt=4):tt=i===P0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ka=i,Te===null&&(ht=1,fc(t,Pa(i,t.current)))}function Mg(){var t=V.H;return V.H=Ei,t===null?Ei:t}function Ng(){var t=V.A;return V.A=U_,t}function _h(){ht=4,Ki||(Le&4194176)!==Le&&Ga.current!==null||(fn=!0),(Ts&134217727)===0&&(gr&134217727)===0||et===null||es(et,Le,Qa,!1)}function xh(t,i,r){var o=lt;lt|=2;var u=Mg(),h=Ng();(et!==t||Le!==i)&&(xc=null,mn(t,i)),i=!1;var y=ht;e:do try{if(tt!==0&&Te!==null){var k=Te,$=ka;switch(tt){case 8:yh(),y=6;break e;case 3:case 2:case 6:Ga.current===null&&(i=!0);var L=tt;if(tt=0,ka=null,gn(t,k,$,L),r&&fn){y=0;break e}break;default:L=tt,tt=0,ka=null,gn(t,k,$,L)}}V_(),y=ht;break}catch(q){zg(t,q)}while(!0);return i&&t.shellSuspendCounter++,Gi=hr=null,lt=o,V.H=u,V.A=h,Te===null&&(et=null,Le=0,Yl()),y}function V_(){for(;Te!==null;)Og(Te)}function P_(t,i){var r=lt;lt|=2;var o=Mg(),u=Ng();et!==t||Le!==i?(xc=null,_c=Si()+500,mn(t,i)):fn=Qn(t,i);e:do try{if(tt!==0&&Te!==null){i=Te;var h=ka;t:switch(tt){case 1:tt=0,ka=null,gn(t,i,h,1);break;case 2:if(Pm(h)){tt=0,ka=null,Dg(i);break}i=function(){tt===2&&et===t&&(tt=7),Ai(t)},h.then(i,i);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:Pm(h)?(tt=0,ka=null,Dg(i)):(tt=0,ka=null,gn(t,i,h,7));break;case 5:var y=null;switch(Te.tag){case 26:y=Te.memoizedState;case 5:case 27:var k=Te;if(!y||cb(y)){tt=0,ka=null;var $=k.sibling;if($!==null)Te=$;else{var L=k.return;L!==null?(Te=L,Cc(L)):Te=null}break t}}tt=0,ka=null,gn(t,i,h,5);break;case 6:tt=0,ka=null,gn(t,i,h,6);break;case 8:yh(),ht=6;break e;default:throw Error(n(462))}}F_();break}catch(q){zg(t,q)}while(!0);return Gi=hr=null,V.H=o,V.A=u,lt=r,Te!==null?0:(et=null,Le=0,Yl(),ht)}function F_(){for(;Te!==null&&!h2();)Og(Te)}function Og(t){var i=tg(t.alternate,t,Ji);t.memoizedProps=t.pendingProps,i===null?Cc(t):Te=i}function Dg(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=W0(r,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=W0(r,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:kd(i);default:Eg(r,i),i=Te=Sg(i,Ji),i=tg(r,i,Ji)}t.memoizedProps=t.pendingProps,i===null?Cc(t):Te=i}function gn(t,i,r,o){Gi=hr=null,kd(i),an=null,mo=0;var u=i.return;try{if(N_(t,u,i,r,Le)){ht=1,fc(t,Pa(r,t.current)),Te=null;return}}catch(h){if(u!==null)throw Te=u,h;ht=1,fc(t,Pa(r,t.current)),Te=null;return}i.flags&32768?(Ue||o===1?t=!0:fn||(Le&536870912)!==0?t=!1:(Ki=t=!0,(o===2||o===3||o===6)&&(o=Ga.current,o!==null&&o.tag===13&&(o.flags|=16384))),Lg(i,t)):Cc(i)}function Cc(t){var i=t;do{if((i.flags&32768)!==0){Lg(i,Ki);return}t=i.return;var r=B_(i.alternate,i,Ji);if(r!==null){Te=r;return}if(i=i.sibling,i!==null){Te=i;return}Te=i=t}while(i!==null);ht===0&&(ht=5)}function Lg(t,i){do{var r=H_(t.alternate,t);if(r!==null){r.flags&=32767,Te=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){Te=t;return}Te=t=r}while(t!==null);ht=6,Te=null}function Rg(t,i,r,o,u,h,y,k,$,L){var q=V.T,Q=Ne.p;try{Ne.p=2,V.T=null,q_(t,i,r,o,Q,u,h,y,k,$,L)}finally{V.T=q,Ne.p=Q}}function q_(t,i,r,o,u,h,y,k){do bn();while(br!==null);if((lt&6)!==0)throw Error(n(327));var $=t.finishedWork;if(o=t.finishedLanes,$===null)return null;if(t.finishedWork=null,t.finishedLanes=0,$===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var L=$.lanes|$.childLanes;if(L|=ud,S2(t,o,L,h,y,k),t===et&&(Te=et=null,Le=0),($.subtreeFlags&10256)===0&&($.flags&10256)===0||wc||(wc=!0,mh=L,gh=r,W_(Nl,function(){return bn(),null})),r=($.flags&15990)!==0,($.subtreeFlags&15990)!==0||r?(r=V.T,V.T=null,h=Ne.p,Ne.p=2,y=lt,lt|=4,D_(t,$),gg($,t),m_(Oh,t.containerInfo),Rc=!!Nh,Oh=Nh=null,t.current=$,hg(t,$.alternate,$),f2(),lt=y,Ne.p=h,V.T=r):t.current=$,wc?(wc=!1,br=t,Oo=o):Bg(t,L),L=t.pendingLanes,L===0&&(zs=null),v2($.stateNode),Ai(t),i!==null)for(u=t.onRecoverableError,$=0;$<i.length;$++)L=i[$],u(L.value,{componentStack:L.stack});return(Oo&3)!==0&&bn(),L=t.pendingLanes,(o&4194218)!==0&&(L&42)!==0?t===bh?Do++:(Do=0,bh=t):Do=0,Lo(0),null}function Bg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,bo(i)))}function bn(){if(br!==null){var t=br,i=mh;mh=0;var r=Gp(Oo),o=V.T,u=Ne.p;try{if(Ne.p=32>r?32:r,V.T=null,br===null)var h=!1;else{r=gh,gh=null;var y=br,k=Oo;if(br=null,Oo=0,(lt&6)!==0)throw Error(n(331));var $=lt;if(lt|=4,xg(y.current),vg(y,y.current,k,r),lt=$,Lo(0,!1),_a&&typeof _a.onPostCommitFiberRoot=="function")try{_a.onPostCommitFiberRoot(Wn,y)}catch{}h=!0}return h}finally{Ne.p=u,V.T=o,Bg(t,i)}}return!1}function Hg(t,i,r){i=Pa(r,i),i=Ud(t.stateNode,i,2),t=Cs(t,i,2),t!==null&&(Zn(t,2),Ai(t))}function Je(t,i,r){if(t.tag===3)Hg(t,t,r);else for(;i!==null;){if(i.tag===3){Hg(i,t,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(zs===null||!zs.has(o))){t=Pa(r,t),r=I0(2),o=Cs(i,r,2),o!==null&&(V0(r,o,i,t),Zn(o,2),Ai(o));break}}i=i.return}}function wh(t,i,r){var o=t.pingCache;if(o===null){o=t.pingCache=new j_;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(r)||(dh=!0,u.add(r),t=G_.bind(null,t,i,r),i.then(t,t))}function G_(t,i,r){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,et===t&&(Le&r)===r&&(ht===4||ht===3&&(Le&62914560)===Le&&300>Si()-ph?(lt&2)===0&&mn(t,0):hh|=r,pn===Le&&(pn=0)),Ai(t)}function Ug(t,i){i===0&&(i=Pp()),t=gs(t,i),t!==null&&(Zn(t,i),Ai(t))}function Y_(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Ug(t,r)}function X_(t,i){var r=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(n(314))}o!==null&&o.delete(i),Ug(t,r)}function W_(t,i){return ju(t,i)}var kc=null,vn=null,Sh=!1,Ec=!1,Ch=!1,vr=0;function Ai(t){t!==vn&&t.next===null&&(vn===null?kc=vn=t:vn=vn.next=t),Ec=!0,Sh||(Sh=!0,Z_(Q_))}function Lo(t,i){if(!Ch&&Ec){Ch=!0;do for(var r=!1,o=kc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,k=o.pingedLanes;h=(1<<31-xa(42|t)+1)-1,h&=u&~(y&~k),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(r=!0,Vg(o,h))}else h=Le,h=Ll(o,o===et?h:0),(h&3)===0||Qn(o,h)||(r=!0,Vg(o,h));o=o.next}while(r);Ch=!1}}function Q_(){Ec=Sh=!1;var t=0;vr!==0&&(rx()&&(t=vr),vr=0);for(var i=Si(),r=null,o=kc;o!==null;){var u=o.next,h=jg(o,i);h===0?(o.next=null,r===null?kc=u:r.next=u,u===null&&(vn=r)):(r=o,(t!==0||(h&3)!==0)&&(Ec=!0)),o=u}Lo(t)}function jg(t,i){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-xa(h),k=1<<y,$=u[y];$===-1?((k&r)===0||(k&o)!==0)&&(u[y]=w2(k,i)):$<=i&&(t.expiredLanes|=k),h&=~k}if(i=et,r=Le,r=Ll(t,t===i?r:0),o=t.callbackNode,r===0||t===i&&tt===2||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Iu(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Qn(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(o!==null&&Iu(o),Gp(r)){case 2:case 8:r=jp;break;case 32:r=Nl;break;case 268435456:r=Ip;break;default:r=Nl}return o=Ig.bind(null,t),r=ju(r,o),t.callbackPriority=i,t.callbackNode=r,i}return o!==null&&o!==null&&Iu(o),t.callbackPriority=2,t.callbackNode=null,2}function Ig(t,i){var r=t.callbackNode;if(bn()&&t.callbackNode!==r)return null;var o=Le;return o=Ll(t,t===et?o:0),o===0?null:(Ag(t,o,i),jg(t,Si()),t.callbackNode!=null&&t.callbackNode===r?Ig.bind(null,t):null)}function Vg(t,i){if(bn())return null;Ag(t,i,!0)}function Z_(t){ox(function(){(lt&6)!==0?ju(Up,t):t()})}function kh(){return vr===0&&(vr=Vp()),vr}function Pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jl(""+t)}function Fg(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function K_(t,i,r,o,u){if(i==="submit"&&r&&r.stateNode===u){var h=Pg((u[da]||null).action),y=o.submitter;y&&(i=(i=y[da]||null)?Pg(i.formAction):y.getAttribute("formAction"),i!==null&&(h=i,y=null));var k=new Fl("action","action",null,o,u);t.push({event:k,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(vr!==0){var $=y?Fg(u,y):new FormData(u);Dd(r,{pending:!0,data:$,method:u.method,action:h},null,$)}}else typeof h=="function"&&(k.preventDefault(),$=y?Fg(u,y):new FormData(u),Dd(r,{pending:!0,data:$,method:u.method,action:h},h,$))},currentTarget:u}]})}}for(var Eh=0;Eh<Rm.length;Eh++){var $h=Rm[Eh],J_=$h.toLowerCase(),ex=$h[0].toUpperCase()+$h.slice(1);ci(J_,"on"+ex)}ci(Mm,"onAnimationEnd"),ci(Nm,"onAnimationIteration"),ci(Om,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(b_,"onTransitionRun"),ci(v_,"onTransitionStart"),ci(y_,"onTransitionCancel"),ci(Dm,"onTransitionEnd"),Fr("onMouseEnter",["mouseout","mouseover"]),Fr("onMouseLeave",["mouseout","mouseover"]),Fr("onPointerEnter",["pointerout","pointerover"]),Fr("onPointerLeave",["pointerout","pointerover"]),Js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Js("onBeforeInput",["compositionend","keypress","textInput","paste"]),Js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function qg(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var h=void 0;if(i)for(var y=o.length-1;0<=y;y--){var k=o[y],$=k.instance,L=k.currentTarget;if(k=k.listener,$!==h&&u.isPropagationStopped())break e;h=k,u.currentTarget=L;try{h(u)}catch(q){hc(q)}u.currentTarget=null,h=$}else for(y=0;y<o.length;y++){if(k=o[y],$=k.instance,L=k.currentTarget,k=k.listener,$!==h&&u.isPropagationStopped())break e;h=k,u.currentTarget=L;try{h(u)}catch(q){hc(q)}u.currentTarget=null,h=$}}}}function Oe(t,i){var r=i[Pu];r===void 0&&(r=i[Pu]=new Set);var o=t+"__bubble";r.has(o)||(Gg(i,t,2,!1),r.add(o))}function Ah(t,i,r){var o=0;i&&(o|=4),Gg(r,t,o,i)}var $c="_reactListening"+Math.random().toString(36).slice(2);function Th(t){if(!t[$c]){t[$c]=!0,Wp.forEach(function(r){r!=="selectionchange"&&(tx.has(r)||Ah(r,!1,t),Ah(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[$c]||(i[$c]=!0,Ah("selectionchange",!1,i))}}function Gg(t,i,r,o){switch(mb(i)){case 2:var u=$x;break;case 8:u=Ax;break;default:u=Vh}r=u.bind(null,i,r,t),u=void 0,!Zu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,r,{capture:!0,passive:u}):t.addEventListener(i,r,!0):u!==void 0?t.addEventListener(i,r,{passive:u}):t.addEventListener(i,r,!1)}function zh(t,i,r,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var k=o.stateNode.containerInfo;if(k===u||k.nodeType===8&&k.parentNode===u)break;if(y===4)for(y=o.return;y!==null;){var $=y.tag;if(($===3||$===4)&&($=y.stateNode.containerInfo,$===u||$.nodeType===8&&$.parentNode===u))return;y=y.return}for(;k!==null;){if(y=Ks(k),y===null)return;if($=y.tag,$===5||$===6||$===26||$===27){o=h=y;continue e}k=k.parentNode}}o=o.return}om(function(){var L=h,q=Wu(r),Q=[];e:{var j=Lm.get(t);if(j!==void 0){var F=Fl,le=t;switch(t){case"keypress":if(Vl(r)===0)break e;case"keydown":case"keyup":F=X2;break;case"focusin":le="focus",F=td;break;case"focusout":le="blur",F=td;break;case"beforeblur":case"afterblur":F=td;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=R2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Z2;break;case Mm:case Nm:case Om:F=U2;break;case Dm:F=J2;break;case"scroll":case"scrollend":F=D2;break;case"wheel":F=t_;break;case"copy":case"cut":case"paste":F=I2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=hm;break;case"toggle":case"beforetoggle":F=i_}var we=(i&4)!==0,ft=!we&&(t==="scroll"||t==="scrollend"),B=we?j!==null?j+"Capture":null:j;we=[];for(var O=L,U;O!==null;){var G=O;if(U=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||U===null||B===null||(G=eo(O,B),G!=null&&we.push(Bo(O,G,U))),ft)break;O=O.return}0<we.length&&(j=new F(j,le,null,r,q),Q.push({event:j,listeners:we}))}}if((i&7)===0){e:{if(j=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",j&&r!==Xu&&(le=r.relatedTarget||r.fromElement)&&(Ks(le)||le[Ir]))break e;if((F||j)&&(j=q.window===q?q:(j=q.ownerDocument)?j.defaultView||j.parentWindow:window,F?(le=r.relatedTarget||r.toElement,F=L,le=le?Ks(le):null,le!==null&&(ft=ee(le),we=le.tag,le!==ft||we!==5&&we!==27&&we!==6)&&(le=null)):(F=null,le=L),F!==le)){if(we=um,G="onMouseLeave",B="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(we=hm,G="onPointerLeave",B="onPointerEnter",O="pointer"),ft=F==null?j:Jn(F),U=le==null?j:Jn(le),j=new we(G,O+"leave",F,r,q),j.target=ft,j.relatedTarget=U,G=null,Ks(q)===L&&(we=new we(B,O+"enter",le,r,q),we.target=U,we.relatedTarget=ft,G=we),ft=G,F&&le)t:{for(we=F,B=le,O=0,U=we;U;U=yn(U))O++;for(U=0,G=B;G;G=yn(G))U++;for(;0<O-U;)we=yn(we),O--;for(;0<U-O;)B=yn(B),U--;for(;O--;){if(we===B||B!==null&&we===B.alternate)break t;we=yn(we),B=yn(B)}we=null}else we=null;F!==null&&Yg(Q,j,F,we,!1),le!==null&&ft!==null&&Yg(Q,ft,le,we,!0)}}e:{if(j=L?Jn(L):window,F=j.nodeName&&j.nodeName.toLowerCase(),F==="select"||F==="input"&&j.type==="file")var re=_m;else if(vm(j))if(xm)re=f_;else{re=d_;var Ee=u_}else F=j.nodeName,!F||F.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?L&&Yu(L.elementType)&&(re=_m):re=h_;if(re&&(re=re(t,L))){ym(Q,re,r,q);break e}Ee&&Ee(t,j,L),t==="focusout"&&L&&j.type==="number"&&L.memoizedProps.value!=null&&Gu(j,"number",j.value)}switch(Ee=L?Jn(L):window,t){case"focusin":(vm(Ee)||Ee.contentEditable==="true")&&(Qr=Ee,od=L,lo=null);break;case"focusout":lo=od=Qr=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,Tm(Q,r,q);break;case"selectionchange":if(g_)break;case"keydown":case"keyup":Tm(Q,r,q)}var he;if(id)e:{switch(t){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Wr?gm(t,r)&&(be="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(be="onCompositionStart");be&&(fm&&r.locale!=="ko"&&(Wr||be!=="onCompositionStart"?be==="onCompositionEnd"&&Wr&&(he=lm()):(ms=q,Ku="value"in ms?ms.value:ms.textContent,Wr=!0)),Ee=Ac(L,be),0<Ee.length&&(be=new dm(be,t,null,r,q),Q.push({event:be,listeners:Ee}),he?be.data=he:(he=bm(r),he!==null&&(be.data=he)))),(he=r_?n_(t,r):o_(t,r))&&(be=Ac(L,"onBeforeInput"),0<be.length&&(Ee=new dm("onBeforeInput","beforeinput",null,r,q),Q.push({event:Ee,listeners:be}),Ee.data=he)),K_(Q,t,L,r,q)}qg(Q,i)})}function Bo(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Ac(t,i){for(var r=i+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=eo(t,r),u!=null&&o.unshift(Bo(t,u,h)),u=eo(t,i),u!=null&&o.push(Bo(t,u,h))),t=t.return}return o}function yn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yg(t,i,r,o,u){for(var h=i._reactName,y=[];r!==null&&r!==o;){var k=r,$=k.alternate,L=k.stateNode;if(k=k.tag,$!==null&&$===o)break;k!==5&&k!==26&&k!==27||L===null||($=L,u?(L=eo(r,h),L!=null&&y.unshift(Bo(r,L,$))):u||(L=eo(r,h),L!=null&&y.push(Bo(r,L,$)))),r=r.return}y.length!==0&&t.push({event:i,listeners:y})}var ax=/\r\n?/g,ix=/\u0000|\uFFFD/g;function Xg(t){return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(ix,"")}function Wg(t,i){return i=Xg(i),Xg(t)===i}function Tc(){}function Qe(t,i,r,o,u,h){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Gr(t,""+o);break;case"className":Bl(t,"class",o);break;case"tabIndex":Bl(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bl(t,r,o);break;case"style":rm(t,o,h);break;case"data":if(i!=="object"){Bl(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=jl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(i!=="input"&&Qe(t,i,"name",u.name,u,null),Qe(t,i,"formEncType",u.formEncType,u,null),Qe(t,i,"formMethod",u.formMethod,u,null),Qe(t,i,"formTarget",u.formTarget,u,null)):(Qe(t,i,"encType",u.encType,u,null),Qe(t,i,"method",u.method,u,null),Qe(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=jl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Tc);break;case"onScroll":o!=null&&Oe("scroll",t);break;case"onScrollEnd":o!=null&&Oe("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(n(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(n(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=jl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Oe("beforetoggle",t),Oe("toggle",t),Rl(t,"popover",o);break;case"xlinkActuate":ji(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ji(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ji(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ji(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ji(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ji(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ji(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ji(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ji(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Rl(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=N2.get(r)||r,Rl(t,r,o))}}function Mh(t,i,r,o,u,h){switch(r){case"style":rm(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(n(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(n(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&Gr(t,""+o);break;case"onScroll":o!=null&&Oe("scroll",t);break;case"onScrollEnd":o!=null&&Oe("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qp.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),i=r.slice(2,u?r.length-7:void 0),h=t[da]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Rl(t,r,o)}}}function Pt(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",t),Oe("load",t);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var y=r[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,i));default:Qe(t,i,h,y,r,null)}}u&&Qe(t,i,"srcSet",r.srcSet,r,null),o&&Qe(t,i,"src",r.src,r,null);return;case"input":Oe("invalid",t);var k=h=y=u=null,$=null,L=null;for(o in r)if(r.hasOwnProperty(o)){var q=r[o];if(q!=null)switch(o){case"name":u=q;break;case"type":y=q;break;case"checked":$=q;break;case"defaultChecked":L=q;break;case"value":h=q;break;case"defaultValue":k=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(n(137,i));break;default:Qe(t,i,o,q,r,null)}}tm(t,h,k,$,L,y,u,!1),Hl(t);return;case"select":Oe("invalid",t),o=y=h=null;for(u in r)if(r.hasOwnProperty(u)&&(k=r[u],k!=null))switch(u){case"value":h=k;break;case"defaultValue":y=k;break;case"multiple":o=k;default:Qe(t,i,u,k,r,null)}i=h,r=y,t.multiple=!!o,i!=null?qr(t,!!o,i,!1):r!=null&&qr(t,!!o,r,!0);return;case"textarea":Oe("invalid",t),h=u=o=null;for(y in r)if(r.hasOwnProperty(y)&&(k=r[y],k!=null))switch(y){case"value":o=k;break;case"defaultValue":u=k;break;case"children":h=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(n(91));break;default:Qe(t,i,y,k,r,null)}im(t,o,u,h),Hl(t);return;case"option":for($ in r)if(r.hasOwnProperty($)&&(o=r[$],o!=null))switch($){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qe(t,i,$,o,r,null)}return;case"dialog":Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":Oe("load",t);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Oe(Ro[o],t);break;case"image":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"embed":case"source":case"link":Oe("error",t),Oe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in r)if(r.hasOwnProperty(L)&&(o=r[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,i));default:Qe(t,i,L,o,r,null)}return;default:if(Yu(i)){for(q in r)r.hasOwnProperty(q)&&(o=r[q],o!==void 0&&Mh(t,i,q,o,r,void 0));return}}for(k in r)r.hasOwnProperty(k)&&(o=r[k],o!=null&&Qe(t,i,k,o,r,null))}function sx(t,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,k=null,$=null,L=null,q=null;for(F in r){var Q=r[F];if(r.hasOwnProperty(F)&&Q!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":$=Q;default:o.hasOwnProperty(F)||Qe(t,i,F,null,o,Q)}}for(var j in o){var F=o[j];if(Q=r[j],o.hasOwnProperty(j)&&(F!=null||Q!=null))switch(j){case"type":h=F;break;case"name":u=F;break;case"checked":L=F;break;case"defaultChecked":q=F;break;case"value":y=F;break;case"defaultValue":k=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(n(137,i));break;default:F!==Q&&Qe(t,i,j,F,o,Q)}}qu(t,y,k,$,L,q,h,u);return;case"select":F=y=k=j=null;for(h in r)if($=r[h],r.hasOwnProperty(h)&&$!=null)switch(h){case"value":break;case"multiple":F=$;default:o.hasOwnProperty(h)||Qe(t,i,h,null,o,$)}for(u in o)if(h=o[u],$=r[u],o.hasOwnProperty(u)&&(h!=null||$!=null))switch(u){case"value":j=h;break;case"defaultValue":k=h;break;case"multiple":y=h;default:h!==$&&Qe(t,i,u,h,o,$)}i=k,r=y,o=F,j!=null?qr(t,!!r,j,!1):!!o!=!!r&&(i!=null?qr(t,!!r,i,!0):qr(t,!!r,r?[]:"",!1));return;case"textarea":F=j=null;for(k in r)if(u=r[k],r.hasOwnProperty(k)&&u!=null&&!o.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:Qe(t,i,k,null,o,u)}for(y in o)if(u=o[y],h=r[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":j=u;break;case"defaultValue":F=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(n(91));break;default:u!==h&&Qe(t,i,y,u,o,h)}am(t,j,F);return;case"option":for(var le in r)if(j=r[le],r.hasOwnProperty(le)&&j!=null&&!o.hasOwnProperty(le))switch(le){case"selected":t.selected=!1;break;default:Qe(t,i,le,null,o,j)}for($ in o)if(j=o[$],F=r[$],o.hasOwnProperty($)&&j!==F&&(j!=null||F!=null))switch($){case"selected":t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Qe(t,i,$,j,o,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in r)j=r[we],r.hasOwnProperty(we)&&j!=null&&!o.hasOwnProperty(we)&&Qe(t,i,we,null,o,j);for(L in o)if(j=o[L],F=r[L],o.hasOwnProperty(L)&&j!==F&&(j!=null||F!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(n(137,i));break;default:Qe(t,i,L,j,o,F)}return;default:if(Yu(i)){for(var ft in r)j=r[ft],r.hasOwnProperty(ft)&&j!==void 0&&!o.hasOwnProperty(ft)&&Mh(t,i,ft,void 0,o,j);for(q in o)j=o[q],F=r[q],!o.hasOwnProperty(q)||j===F||j===void 0&&F===void 0||Mh(t,i,q,j,o,F);return}}for(var B in r)j=r[B],r.hasOwnProperty(B)&&j!=null&&!o.hasOwnProperty(B)&&Qe(t,i,B,null,o,j);for(Q in o)j=o[Q],F=r[Q],!o.hasOwnProperty(Q)||j===F||j==null&&F==null||Qe(t,i,Q,j,o,F)}var Nh=null,Oh=null;function zc(t){return t.nodeType===9?t:t.ownerDocument}function Qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Dh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lh=null;function rx(){var t=window.event;return t&&t.type==="popstate"?t===Lh?!1:(Lh=t,!0):(Lh=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,nx=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(t){return Jg.resolve(null).then(t).catch(lx)}:Kg;function lx(t){setTimeout(function(){throw t})}function Rh(t,i){var r=i,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(o===0){t.removeChild(u),qo(i);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=u}while(r);qo(i)}function Bh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Bh(r),Fu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function cx(t,i,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Kn])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function ux(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=hi(t.nextSibling),t===null))return null;return t}function hi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}function eb(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}function tb(t,i,r){switch(i=zc(r),t){case"html":if(t=i.documentElement,!t)throw Error(n(452));return t;case"head":if(t=i.head,!t)throw Error(n(453));return t;case"body":if(t=i.body,!t)throw Error(n(454));return t;default:throw Error(n(451))}}var Za=new Map,ab=new Set;function Mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ts=Ne.d;Ne.d={f:dx,r:hx,D:fx,C:px,L:mx,m:gx,X:vx,S:bx,M:yx};function dx(){var t=ts.f(),i=Sc();return t||i}function hx(t){var i=Vr(t);i!==null&&i.tag===5&&i.type==="form"?T0(i):ts.r(t)}var _n=typeof document>"u"?null:document;function ib(t,i,r){var o=_n;if(o&&typeof i=="string"&&i){var u=Ia(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),ab.has(u)||(ab.add(u),t={rel:t,crossOrigin:r,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Pt(i,"link",t),Ot(i),o.head.appendChild(i)))}}function fx(t){ts.D(t),ib("dns-prefetch",t,null)}function px(t,i){ts.C(t,i),ib("preconnect",t,i)}function mx(t,i,r){ts.L(t,i,r);var o=_n;if(o&&t&&i){var u='link[rel="preload"][as="'+Ia(i)+'"]';i==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Ia(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Ia(r.imageSizes)+'"]')):u+='[href="'+Ia(t)+'"]';var h=u;switch(i){case"style":h=xn(t);break;case"script":h=wn(t)}Za.has(h)||(t=P({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),Za.set(h,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(Ho(h))||i==="script"&&o.querySelector(Uo(h))||(i=o.createElement("link"),Pt(i,"link",t),Ot(i),o.head.appendChild(i)))}}function gx(t,i){ts.m(t,i);var r=_n;if(r&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Ia(o)+'"][href="'+Ia(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=wn(t)}if(!Za.has(h)&&(t=P({rel:"modulepreload",href:t},i),Za.set(h,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Uo(h)))return}o=r.createElement("link"),Pt(o,"link",t),Ot(o),r.head.appendChild(o)}}}function bx(t,i,r){ts.S(t,i,r);var o=_n;if(o&&t){var u=Pr(o).hoistableStyles,h=xn(t);i=i||"default";var y=u.get(h);if(!y){var k={loading:0,preload:null};if(y=o.querySelector(Ho(h)))k.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":i},r),(r=Za.get(h))&&Hh(t,r);var $=y=o.createElement("link");Ot($),Pt($,"link",t),$._p=new Promise(function(L,q){$.onload=L,$.onerror=q}),$.addEventListener("load",function(){k.loading|=1}),$.addEventListener("error",function(){k.loading|=2}),k.loading|=4,Nc(y,i,o)}y={type:"stylesheet",instance:y,count:1,state:k},u.set(h,y)}}}function vx(t,i){ts.X(t,i);var r=_n;if(r&&t){var o=Pr(r).hoistableScripts,u=wn(t),h=o.get(u);h||(h=r.querySelector(Uo(u)),h||(t=P({src:t,async:!0},i),(i=Za.get(u))&&Uh(t,i),h=r.createElement("script"),Ot(h),Pt(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function yx(t,i){ts.M(t,i);var r=_n;if(r&&t){var o=Pr(r).hoistableScripts,u=wn(t),h=o.get(u);h||(h=r.querySelector(Uo(u)),h||(t=P({src:t,async:!0,type:"module"},i),(i=Za.get(u))&&Uh(t,i),h=r.createElement("script"),Ot(h),Pt(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function sb(t,i,r,o){var u=(u=hs.current)?Mc(u):null;if(!u)throw Error(n(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=xn(r.href),r=Pr(u).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=xn(r.href);var h=Pr(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(Ho(t)))&&!h._p&&(y.instance=h,y.state.loading=5),Za.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Za.set(t,r),h||_x(u,t,r,y.state))),i&&o===null)throw Error(n(528,""));return y}if(i&&o!==null)throw Error(n(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=wn(r),r=Pr(u).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,t))}}function xn(t){return'href="'+Ia(t)+'"'}function Ho(t){return'link[rel="stylesheet"]['+t+"]"}function rb(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function _x(t,i,r,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Pt(i,"link",r),Ot(i),t.head.appendChild(i))}function wn(t){return'[src="'+Ia(t)+'"]'}function Uo(t){return"script[async]"+t}function nb(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+Ia(r.href)+'"]');if(o)return i.instance=o,Ot(o),o;var u=P({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ot(o),Pt(o,"style",u),Nc(o,r.precedence,t),i.instance=o;case"stylesheet":u=xn(r.href);var h=t.querySelector(Ho(u));if(h)return i.state.loading|=4,i.instance=h,Ot(h),h;o=rb(r),(u=Za.get(u))&&Hh(o,u),h=(t.ownerDocument||t).createElement("link"),Ot(h);var y=h;return y._p=new Promise(function(k,$){y.onload=k,y.onerror=$}),Pt(h,"link",o),i.state.loading|=4,Nc(h,r.precedence,t),i.instance=h;case"script":return h=wn(r.src),(u=t.querySelector(Uo(h)))?(i.instance=u,Ot(u),u):(o=r,(u=Za.get(h))&&(o=P({},r),Uh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ot(u),Pt(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(n(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Nc(o,r.precedence,t));return i.instance}function Nc(t,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var k=o[y];if(k.dataset.precedence===i)h=k;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Hh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Uh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Oc=null;function ob(t,i,r){if(Oc===null){var o=new Map,u=Oc=new Map;u.set(r,o)}else u=Oc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var h=r[u];if(!(h[Kn]||h[Zt]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(i)||"";y=t+y;var k=o.get(y);k?k.push(h):o.set(y,[h])}}return o}function lb(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function xx(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function cb(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var jo=null;function wx(){}function Sx(t,i,r){if(jo===null)throw Error(n(475));var o=jo;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=xn(r.href),h=t.querySelector(Ho(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Dc.bind(o),t.then(o,o)),i.state.loading|=4,i.instance=h,Ot(h);return}h=t.ownerDocument||t,r=rb(r),(u=Za.get(u))&&Hh(r,u),h=h.createElement("link"),Ot(h);var y=h;y._p=new Promise(function(k,$){y.onload=k,y.onerror=$}),Pt(h,"link",r),i.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Dc.bind(o),t.addEventListener("load",i),t.addEventListener("error",i))}}function Cx(){if(jo===null)throw Error(n(475));var t=jo;return t.stylesheets&&t.count===0&&jh(t,t.stylesheets),0<t.count?function(i){var r=setTimeout(function(){if(t.stylesheets&&jh(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r)}}:null}function Dc(){if(this.count--,this.count===0){if(this.stylesheets)jh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lc=null;function jh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lc=new Map,i.forEach(kx,t),Lc=null,Dc.call(t))}function kx(t,i){if(!(i.state.loading&4)){var r=Lc.get(t);if(r)var o=r.get(null);else{r=new Map,Lc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}u=i.instance,y=u.getAttribute("data-precedence"),h=r.get(y)||o,h===o&&r.set(null,u),r.set(y,u),this.count++,o=Dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var Io={$$typeof:S,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Ex(t,i,r,o,u,h,y,k){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.hiddenUpdates=Vu(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function ub(t,i,r,o,u,h,y,k,$,L,q,Q){return t=new Ex(t,i,r,y,k,$,L,Q),i=1,h===!0&&(i|=24),h=Wa(3,null,null,i),t.current=h,h.stateNode=t,i=vd(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:i},Kd(h),t}function db(t){return t?(t=Jr,t):Jr}function hb(t,i,r,o,u,h){u=db(u),o.context===null?o.context=u:o.pendingContext=u,o=Ss(i),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Cs(t,o,i),r!==null&&(sa(r,t,i),Co(r,t,i))}function fb(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Ih(t,i){fb(t,i),(t=t.alternate)&&fb(t,i)}function pb(t){if(t.tag===13){var i=gs(t,67108864);i!==null&&sa(i,t,67108864),Ih(t,67108864)}}var Rc=!0;function $x(t,i,r,o){var u=V.T;V.T=null;var h=Ne.p;try{Ne.p=2,Vh(t,i,r,o)}finally{Ne.p=h,V.T=u}}function Ax(t,i,r,o){var u=V.T;V.T=null;var h=Ne.p;try{Ne.p=8,Vh(t,i,r,o)}finally{Ne.p=h,V.T=u}}function Vh(t,i,r,o){if(Rc){var u=Ph(o);if(u===null)zh(t,i,o,Bc,r),gb(t,o);else if(zx(u,t,i,r,o))o.stopPropagation();else if(gb(t,o),i&4&&-1<Tx.indexOf(t)){for(;u!==null;){var h=Vr(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Zs(h.pendingLanes);if(y!==0){var k=h;for(k.pendingLanes|=2,k.entangledLanes|=2;y;){var $=1<<31-xa(y);k.entanglements[1]|=$,y&=~$}Ai(h),(lt&6)===0&&(_c=Si()+500,Lo(0))}}break;case 13:k=gs(h,2),k!==null&&sa(k,h,2),Sc(),Ih(h,2)}if(h=Ph(o),h===null&&zh(t,i,o,Bc,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else zh(t,i,o,null,r)}}function Ph(t){return t=Wu(t),Fh(t)}var Bc=null;function Fh(t){if(Bc=null,t=Ks(t),t!==null){var i=ee(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=ve(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Bc=t,null}function mb(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p2()){case Up:return 2;case jp:return 8;case Nl:case m2:return 32;case Ip:return 268435456;default:return 32}default:return 32}}var qh=!1,Ms=null,Ns=null,Os=null,Vo=new Map,Po=new Map,Ds=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gb(t,i){switch(t){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Ns=null;break;case"mouseover":case"mouseout":Os=null;break;case"pointerover":case"pointerout":Vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(i.pointerId)}}function Fo(t,i,r,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=Vr(i),i!==null&&pb(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function zx(t,i,r,o,u){switch(i){case"focusin":return Ms=Fo(Ms,t,i,r,o,u),!0;case"dragenter":return Ns=Fo(Ns,t,i,r,o,u),!0;case"mouseover":return Os=Fo(Os,t,i,r,o,u),!0;case"pointerover":var h=u.pointerId;return Vo.set(h,Fo(Vo.get(h)||null,t,i,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Po.set(h,Fo(Po.get(h)||null,t,i,r,o,u)),!0}return!1}function bb(t){var i=Ks(t.target);if(i!==null){var r=ee(i);if(r!==null){if(i=r.tag,i===13){if(i=ve(r),i!==null){t.blockedOn=i,C2(t.priority,function(){if(r.tag===13){var o=Ea(),u=gs(r,o);u!==null&&sa(u,r,o),Ih(r,o)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Ph(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Xu=o,r.target.dispatchEvent(o),Xu=null}else return i=Vr(r),i!==null&&pb(i),t.blockedOn=r,!1;i.shift()}return!0}function vb(t,i,r){Hc(t)&&r.delete(i)}function Mx(){qh=!1,Ms!==null&&Hc(Ms)&&(Ms=null),Ns!==null&&Hc(Ns)&&(Ns=null),Os!==null&&Hc(Os)&&(Os=null),Vo.forEach(vb),Po.forEach(vb)}function Uc(t,i){t.blockedOn===i&&(t.blockedOn=null,qh||(qh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mx)))}var jc=null;function yb(t){jc!==t&&(jc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){jc===t&&(jc=null);for(var i=0;i<t.length;i+=3){var r=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(Fh(o||r)===null)continue;break}var h=Vr(r);h!==null&&(t.splice(i,3),i-=3,Dd(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function qo(t){function i($){return Uc($,t)}Ms!==null&&Uc(Ms,t),Ns!==null&&Uc(Ns,t),Os!==null&&Uc(Os,t),Vo.forEach(i),Po.forEach(i);for(var r=0;r<Ds.length;r++){var o=Ds[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ds.length&&(r=Ds[0],r.blockedOn===null);)bb(r),r.blockedOn===null&&Ds.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],y=u[da]||null;if(typeof h=="function")y||yb(r);else if(y){var k=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[da]||null)k=y.formAction;else if(Fh(u)!==null)continue}else k=y.action;typeof k=="function"?r[o+1]=k:(r.splice(o,3),o-=3),yb(r)}}}function Gh(t){this._internalRoot=t}Ic.prototype.render=Gh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));var r=i.current,o=Ea();hb(r,o,t,i,null,null)},Ic.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;t.tag===0&&bn(),hb(t.current,2,null,t,null,null),Sc(),i[Ir]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var i=Yp();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Ds.length&&i!==0&&i<Ds[r].priority;r++);Ds.splice(r,0,t),r===0&&bb(t)}};var _b=a.version;if(_b!=="19.0.0")throw Error(n(527,_b,"19.0.0"));Ne.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=aa(i),t=t!==null?Wt(t):null,t=t===null?null:t.stateNode,t};var Nx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:V,findFiberByHostInstance:Ks,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{Wn=Vc.inject(Nx),_a=Vc}catch{}}return Go.createRoot=function(t,i){if(!l(t))throw Error(n(299));var r=!1,o="",u=B0,h=H0,y=U0,k=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(k=i.unstable_transitionCallbacks)),i=ub(t,1,!1,null,null,r,o,u,h,y,k,null),t[Ir]=i.current,Th(t.nodeType===8?t.parentNode:t),new Gh(i)},Go.hydrateRoot=function(t,i,r){if(!l(t))throw Error(n(299));var o=!1,u="",h=B0,y=H0,k=U0,$=null,L=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(k=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&($=r.unstable_transitionCallbacks),r.formState!==void 0&&(L=r.formState)),i=ub(t,1,!0,i,r??null,o,u,h,y,k,$,L),i.context=db(null),r=i.current,o=Ea(),u=Ss(o),u.callback=null,Cs(r,u,o),i.current.lanes=o,Zn(i,o),Ai(i),t[Ir]=i.current,Th(t),new Ic(i)},Go.version="19.0.0",Go}var Ub;function Bw(){if(Ub)return Xh.exports;Ub=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Xh.exports=Rw(),Xh.exports}var Hw=Bw(),zf="";function Mf(e){zf=e}function Uw(e=""){if(!zf){const a=[...document.getElementsByTagName("script")],s=a.find(n=>n.hasAttribute("data-shoelace"));if(s)Mf(s.getAttribute("data-shoelace"));else{const n=a.find(c=>/shoelace(\.min)?\.js($|\?)/.test(c.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(c.src));let l="";n&&(l=n.getAttribute("src")),Mf(l.split("/").slice(0,-1).join("/"))}}return zf.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var C1=Object.defineProperty,jw=Object.defineProperties,Iw=Object.getOwnPropertyDescriptor,Vw=Object.getOwnPropertyDescriptors,jb=Object.getOwnPropertySymbols,Pw=Object.prototype.hasOwnProperty,Fw=Object.prototype.propertyIsEnumerable,Zh=(e,a)=>(a=Symbol[e])?a:Symbol.for("Symbol."+e),cp=e=>{throw TypeError(e)},Ib=(e,a,s)=>a in e?C1(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,ns=(e,a)=>{for(var s in a||(a={}))Pw.call(a,s)&&Ib(e,s,a[s]);if(jb)for(var s of jb(a))Fw.call(a,s)&&Ib(e,s,a[s]);return e},vl=(e,a)=>jw(e,Vw(a)),g=(e,a,s,n)=>{for(var l=n>1?void 0:n?Iw(a,s):a,c=e.length-1,d;c>=0;c--)(d=e[c])&&(l=(n?d(a,s,l):d(l))||l);return n&&l&&C1(a,s,l),l},k1=(e,a,s)=>a.has(e)||cp("Cannot "+s),qw=(e,a,s)=>(k1(e,a,"read from private field"),a.get(e)),Gw=(e,a,s)=>a.has(e)?cp("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,s),Yw=(e,a,s,n)=>(k1(e,a,"write to private field"),a.set(e,s),s),Xw=function(e,a){this[0]=e,this[1]=a},Ww=e=>{var a=e[Zh("asyncIterator")],s=!1,n,l={};return a==null?(a=e[Zh("iterator")](),n=c=>l[c]=d=>a[c](d)):(a=a.call(e),n=c=>l[c]=d=>{if(s){if(s=!1,c==="throw")throw d;return d}return s=!0,{done:!1,value:new Xw(new Promise(m=>{var f=a[c](d);f instanceof Object||cp("Object expected"),m(f)}),1)}}),l[Zh("iterator")]=()=>l,n("next"),"throw"in a?n("throw"):l.throw=c=>{throw c},"return"in a&&n("return"),l},Qw=(function(){var e=function(a,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(n[c]=l[c])},e(a,s)};return function(a,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");e(a,s);function n(){this.constructor=a}a.prototype=s===null?Object.create(s):(n.prototype=s.prototype,new n)}})(),E1=function(e,a,s,n){function l(c){return c instanceof s?c:new s((function(d){d(c)}))}return new(s||(s=Promise))((function(c,d){function m(b){try{p(n.next(b))}catch(v){d(v)}}function f(b){try{p(n.throw(b))}catch(v){d(v)}}function p(b){b.done?c(b.value):l(b.value).then(m,f)}p((n=n.apply(e,a||[])).next())}))},$1=function(e,a){var s={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},n,l,c,d;return d={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function m(p){return function(b){return f([p,b])}}function f(p){if(n)throw new TypeError("Generator is already executing.");for(;d&&(d=0,p[0]&&(s=0)),s;)try{if(n=1,l&&(c=p[0]&2?l.return:p[0]?l.throw||((c=l.return)&&c.call(l),0):l.next)&&!(c=c.call(l,p[1])).done)return c;switch(l=0,c&&(p=[p[0]&2,c.value]),p[0]){case 0:case 1:c=p;break;case 4:return s.label++,{value:p[1],done:!1};case 5:s.label++,l=p[1],p=[0];continue;case 7:p=s.ops.pop(),s.trys.pop();continue;default:if(c=s.trys,!(c=c.length>0&&c[c.length-1])&&(p[0]===6||p[0]===2)){s=0;continue}if(p[0]===3&&(!c||p[1]>c[0]&&p[1]<c[3])){s.label=p[1];break}if(p[0]===6&&s.label<c[1]){s.label=c[1],c=p;break}if(c&&s.label<c[2]){s.label=c[2],s.ops.push(p);break}c[2]&&s.ops.pop(),s.trys.pop();continue}p=a.call(e,s)}catch(b){p=[6,b],l=0}finally{n=c=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},Vb=function(e,a,s){if(s||arguments.length===2)for(var n=0,l=a.length,c;n<l;n++)(c||!(n in a))&&(c||(c=Array.prototype.slice.call(a,0,n)),c[n]=a[n]);return e.concat(c||Array.prototype.slice.call(a))},Zw="ionicpwaelements",tu,A1,Ma=!1,Nf=!1,ss=function(e,a){return function(){}},Kw=function(e,a){return function(){}},Jw="{visibility:hidden}.hydrated{visibility:inherit}",Pb={},e3="http://www.w3.org/2000/svg",t3="http://www.w3.org/1999/xhtml",a3=function(e){return e!=null},up=function(e){return e=typeof e,e==="object"||e==="function"};function T1(e){var a,s,n;return(n=(s=(a=e.head)===null||a===void 0?void 0:a.querySelector('meta[name="csp-nonce"]'))===null||s===void 0?void 0:s.getAttribute("content"))!==null&&n!==void 0?n:void 0}var i3=function(e,a){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];var l=null,c=!1,d=!1,m=[],f=function(v){for(var _=0;_<v.length;_++)l=v[_],Array.isArray(l)?f(l):l!=null&&typeof l!="boolean"&&((c=typeof e!="function"&&!up(l))&&(l=String(l)),c&&d?m[m.length-1].$text$+=l:m.push(c?Of(null,l):l),d=c)};if(f(s),a){var p=a.className||a.class;p&&(a.class=typeof p!="object"?p:Object.keys(p).filter((function(v){return p[v]})).join(" "))}var b=Of(e,null);return b.$attrs$=a,m.length>0&&(b.$children$=m),b},Of=function(e,a){var s={$flags$:0,$tag$:e,$text$:a,$elm$:null,$children$:null};return s.$attrs$=null,s},s3={},r3=function(e){return e&&e.$tag$===s3},n3=function(e,a){return e!=null&&!up(e)?a&4?e==="false"?!1:e===""||!!e:a&2?parseFloat(e):a&1?String(e):e:e},o3=function(e){return qs(e).$hostElement$},YT=function(e,a,s){var n=o3(e);return{emit:function(l){return z1(n,a,{bubbles:!0,composed:!0,cancelable:!0,detail:l})}}},z1=function(e,a,s){var n=Bt.ce(a,s);return e.dispatchEvent(n),n},Fb=new WeakMap,l3=function(e,a,s){var n=fu.get(e);M3&&s?(n=n||new CSSStyleSheet,typeof n=="string"?n=a:n.replaceSync(a)):n=a,fu.set(e,n)},c3=function(e,a,s,n){var l,c=M1(a),d=fu.get(c);if(e=e.nodeType===11?e:mi,d)if(typeof d=="string"){e=e.head||e;var m=Fb.get(e),f=void 0;if(m||Fb.set(e,m=new Set),!m.has(c)){{f=mi.createElement("style"),f.innerHTML=d;var p=(l=Bt.$nonce$)!==null&&l!==void 0?l:T1(mi);p!=null&&f.setAttribute("nonce",p),e.insertBefore(f,e.querySelector("link"))}m&&m.add(c)}}else e.adoptedStyleSheets.includes(d)||(e.adoptedStyleSheets=Vb(Vb([],e.adoptedStyleSheets,!0),[d],!1));return c},u3=function(e){var a=e.$cmpMeta$,s=e.$hostElement$,n=a.$flags$,l=ss("attachStyles",a.$tagName$),c=c3(s.shadowRoot?s.shadowRoot:s.getRootNode(),a);n&10&&(s["s-sc"]=c,s.classList.add(c+"-h")),l()},M1=function(e,a){return"sc-"+e.$tagName$},qb=function(e,a,s,n,l,c){if(s!==n){var d=Yb(e,a),m=a.toLowerCase();if(a==="class"){var f=e.classList,p=Gb(s),b=Gb(n);f.remove.apply(f,p.filter((function(w){return w&&!b.includes(w)}))),f.add.apply(f,b.filter((function(w){return w&&!p.includes(w)})))}else if(a==="style"){for(var v in s)(!n||n[v]==null)&&(v.includes("-")?e.style.removeProperty(v):e.style[v]="");for(var v in n)(!s||n[v]!==s[v])&&(v.includes("-")?e.style.setProperty(v,n[v]):e.style[v]=n[v])}else if(a==="ref")n&&n(e);else if(!d&&a[0]==="o"&&a[1]==="n")a[2]==="-"?a=a.slice(3):Yb(Eu,m)?a=m.slice(2):a=m[2]+a.slice(3),s&&Bt.rel(e,a,s,!1),n&&Bt.ael(e,a,n,!1);else{var _=up(n);if((d||_&&n!==null)&&!l)try{if(e.tagName.includes("-"))e[a]=n;else{var S=n??"";a==="list"?d=!1:(s==null||e[a]!=S)&&(e[a]=S)}}catch{}n==null||n===!1?(n!==!1||e.getAttribute(a)==="")&&e.removeAttribute(a):(!d||c&4||l)&&!_&&(n=n===!0?"":n,e.setAttribute(a,n))}}},d3=/\s/,Gb=function(e){return e?e.split(d3):[]},N1=function(e,a,s,n){var l=a.$elm$.nodeType===11&&a.$elm$.host?a.$elm$.host:a.$elm$,c=e&&e.$attrs$||Pb,d=a.$attrs$||Pb;for(n in c)n in d||qb(l,n,c[n],void 0,s,a.$flags$);for(n in d)qb(l,n,c[n],d[n],s,a.$flags$)},dp=function(e,a,s,n){var l=a.$children$[s],c=0,d,m;if(l.$text$!==null)d=l.$elm$=mi.createTextNode(l.$text$);else{if(Ma||(Ma=l.$tag$==="svg"),d=l.$elm$=mi.createElementNS(Ma?e3:t3,l.$tag$),Ma&&l.$tag$==="foreignObject"&&(Ma=!1),N1(null,l,Ma),a3(tu)&&d["s-si"]!==tu&&d.classList.add(d["s-si"]=tu),l.$children$)for(c=0;c<l.$children$.length;++c)m=dp(e,l,c),m&&d.appendChild(m);l.$tag$==="svg"?Ma=!1:d.tagName==="foreignObject"&&(Ma=!0)}return d},O1=function(e,a,s,n,l,c){var d=e,m;for(d.shadowRoot&&d.tagName===A1&&(d=d.shadowRoot);l<=c;++l)n[l]&&(m=dp(null,s,l),m&&(n[l].$elm$=m,d.insertBefore(m,a)))},D1=function(e,a,s){for(var n=a;n<=s;++n){var l=e[n];if(l){var c=l.$elm$;L1(l),c&&c.remove()}}},h3=function(e,a,s,n){for(var l=0,c=0,d=a.length-1,m=a[0],f=a[d],p=n.length-1,b=n[0],v=n[p],_;l<=d&&c<=p;)m==null?m=a[++l]:f==null?f=a[--d]:b==null?b=n[++c]:v==null?v=n[--p]:Pc(m,b)?(sl(m,b),m=a[++l],b=n[++c]):Pc(f,v)?(sl(f,v),f=a[--d],v=n[--p]):Pc(m,v)?(sl(m,v),e.insertBefore(m.$elm$,f.$elm$.nextSibling),m=a[++l],v=n[--p]):Pc(f,b)?(sl(f,b),e.insertBefore(f.$elm$,m.$elm$),f=a[--d],b=n[++c]):(_=dp(a&&a[c],s,c),b=n[++c],_&&m.$elm$.parentNode.insertBefore(_,m.$elm$));l>d?O1(e,n[p+1]==null?null:n[p+1].$elm$,s,n,c,p):c>p&&D1(a,l,d)},Pc=function(e,a){return e.$tag$===a.$tag$},sl=function(e,a){var s=a.$elm$=e.$elm$,n=e.$children$,l=a.$children$,c=a.$tag$,d=a.$text$;d===null?(Ma=c==="svg"?!0:c==="foreignObject"?!1:Ma,N1(e,a,Ma),n!==null&&l!==null?h3(s,n,a,l):l!==null?(e.$text$!==null&&(s.textContent=""),O1(s,null,a,l,0,l.length-1)):n!==null&&D1(n,0,n.length-1),Ma&&c==="svg"&&(Ma=!1)):e.$text$!==d&&(s.data=d)},L1=function(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(L1)},f3=function(e,a){var s=e.$hostElement$,n=e.$vnode$||Of(null,null),l=r3(a)?a:i3(null,null,a);A1=s.tagName,l.$tag$=null,l.$flags$|=4,e.$vnode$=l,l.$elm$=n.$elm$=s.shadowRoot||s,tu=s["s-sc"],sl(n,l)},R1=function(e,a){a&&!e.$onRenderResolve$&&a["s-p"]&&a["s-p"].push(new Promise((function(s){return e.$onRenderResolve$=s})))},ku=function(e,a){if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}R1(e,e.$ancestorComponent$);var s=function(){return p3(e,a)};return O3(s)},p3=function(e,a){var s=ss("scheduleUpdate",e.$cmpMeta$.$tagName$),n=e.$lazyInstance$,l;return a&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(c){var d=c[0],m=c[1];return hp(n,d,m)})),e.$queuedListeners$=void 0)),s(),m3(l,(function(){return b3(e,n,a)}))},m3=function(e,a){return g3(e)?e.then(a):a()},g3=function(e){return e instanceof Promise||e&&e.then&&typeof e.then=="function"},b3=function(e,a,s){return E1(void 0,void 0,void 0,(function(){var n,l,c,d,m,f,p;return $1(this,(function(b){return l=e.$hostElement$,c=ss("update",e.$cmpMeta$.$tagName$),d=l["s-rc"],s&&u3(e),m=ss("render",e.$cmpMeta$.$tagName$),v3(e,a),d&&(d.map((function(v){return v()})),l["s-rc"]=void 0),m(),c(),f=(n=l["s-p"])!==null&&n!==void 0?n:[],p=function(){return y3(e)},f.length===0?p():(Promise.all(f).then(p),e.$flags$|=4,f.length=0),[2]}))}))},v3=function(e,a,s){try{a=a.render(),e.$flags$&=-17,e.$flags$|=2,f3(e,a)}catch(n){pi(n,e.$hostElement$)}return null},y3=function(e){e.$cmpMeta$.$tagName$;var a=e.$hostElement$,s=ss(),n=e.$lazyInstance$,l=e.$ancestorComponent$;e.$flags$&64?s():(e.$flags$|=64,H1(a),hp(n,"componentDidLoad"),s(),e.$onReadyResolve$(a),l||B1()),e.$onInstanceResolve$(a),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&pp((function(){return ku(e,!1)})),e.$flags$&=-517},XT=function(e){{var a=qs(e),s=a.$hostElement$.isConnected;return s&&(a.$flags$&18)===2&&ku(a,!1),s}},B1=function(e){H1(mi.documentElement),pp((function(){return z1(Eu,"appload",{detail:{namespace:Zw}})}))},hp=function(e,a,s){if(e&&e[a])try{return e[a](s)}catch(n){pi(n)}},H1=function(e){return e.classList.add("hydrated")},_3=function(e,a){return qs(e).$instanceValues$.get(a)},x3=function(e,a,s,n){var l=qs(e),c=l.$instanceValues$.get(a),d=l.$flags$,m=l.$lazyInstance$;s=n3(s,n.$members$[a][0]);var f=Number.isNaN(c)&&Number.isNaN(s),p=s!==c&&!f;(!(d&8)||c===void 0)&&p&&(l.$instanceValues$.set(a,s),m&&(d&18)===2&&ku(l,!1))},U1=function(e,a,s){if(a.$members$){var n=Object.entries(a.$members$),l=e.prototype;if(n.map((function(d){var m=d[0],f=d[1][0];f&31||s&2&&f&32?Object.defineProperty(l,m,{get:function(){return _3(this,m)},set:function(p){x3(this,m,p,a)},configurable:!0,enumerable:!0}):s&1&&f&64&&Object.defineProperty(l,m,{value:function(){for(var p=[],b=0;b<arguments.length;b++)p[b]=arguments[b];var v=qs(this);return v.$onInstancePromise$.then((function(){var _;return(_=v.$lazyInstance$)[m].apply(_,p)}))}})})),s&1){var c=new Map;l.attributeChangedCallback=function(d,m,f){var p=this;Bt.jmp((function(){var b=c.get(d);if(p.hasOwnProperty(b))f=p[b],delete p[b];else if(l.hasOwnProperty(b)&&typeof p[b]=="number"&&p[b]==f)return;p[b]=f===null&&typeof p[b]=="boolean"?!1:f}))},e.observedAttributes=n.filter((function(d){d[0];var m=d[1];return m[0]&15})).map((function(d){var m=d[0],f=d[1],p=f[1]||m;return c.set(p,m),p}))}}return e},w3=function(e,a,s,n,l){return E1(void 0,void 0,void 0,(function(){var c,d,m,f,p,b,v;return $1(this,(function(_){switch(_.label){case 0:return(a.$flags$&32)!==0?[3,3]:(a.$flags$|=32,l=z3(s),l.then?(c=Kw(),[4,l]):[3,2]);case 1:l=_.sent(),c(),_.label=2;case 2:l.isProxied||(U1(l,s,2),l.isProxied=!0),d=ss("createInstance",s.$tagName$),a.$flags$|=8;try{new l(a)}catch(S){pi(S)}a.$flags$&=-9,d(),l.style&&(m=l.style,f=M1(s),fu.has(f)||(p=ss("registerStyles",s.$tagName$),l3(f,m,!!(s.$flags$&1)),p())),_.label=3;case 3:return b=a.$ancestorComponent$,v=function(){return ku(a,!0)},b&&b["s-rc"]?b["s-rc"].push(v):v(),[2]}}))}))},S3=function(e){if((Bt.$flags$&1)===0){var a=qs(e),s=a.$cmpMeta$,n=ss("connectedCallback",s.$tagName$);if(a.$flags$&1)j1(e,a,s.$listeners$);else{a.$flags$|=1;for(var l=e;l=l.parentNode||l.host;)if(l["s-p"]){R1(a,a.$ancestorComponent$=l);break}s.$members$&&Object.entries(s.$members$).map((function(c){var d=c[0],m=c[1][0];if(m&31&&e.hasOwnProperty(d)){var f=e[d];delete e[d],e[d]=f}})),w3(e,a,s)}n()}},C3=function(e){if((Bt.$flags$&1)===0){var a=qs(e),s=a.$lazyInstance$;a.$rmListeners$&&(a.$rmListeners$.map((function(n){return n()})),a.$rmListeners$=void 0),hp(s,"disconnectedCallback")}},k3=function(e,a){a===void 0&&(a={});var s,n=ss(),l=[],c=a.exclude||[],d=Eu.customElements,m=mi.head,f=m.querySelector("meta[charset]"),p=mi.createElement("style"),b=[],v,_=!0;Object.assign(Bt,a),Bt.$resourcesUrl$=new URL(a.resourcesUrl||"./",mi.baseURI).href,e.map((function(w){w[1].map((function(E){var z={$flags$:E[0],$tagName$:E[1],$members$:E[2],$listeners$:E[3]};z.$members$=E[2],z.$listeners$=E[3];var N=z.$tagName$,T=(function(D){Qw(M,D);function M(A){var H=D.call(this,A)||this;return A=H,T3(A,z),z.$flags$&1&&A.attachShadow({mode:"open"}),H}return M.prototype.connectedCallback=function(){var A=this;v&&(clearTimeout(v),v=null),_?b.push(this):Bt.jmp((function(){return S3(A)}))},M.prototype.disconnectedCallback=function(){var A=this;Bt.jmp((function(){return C3(A)}))},M.prototype.componentOnReady=function(){return qs(this).$onReadyPromise$},M})(HTMLElement);z.$lazyBundleId$=w[0],!c.includes(N)&&!d.get(N)&&(l.push(N),d.define(N,U1(T,z,1)))}))}));{p.innerHTML=l+Jw,p.setAttribute("data-styles","");var S=(s=Bt.$nonce$)!==null&&s!==void 0?s:T1(mi);S!=null&&p.setAttribute("nonce",S),m.insertBefore(p,f?f.nextSibling:m.firstChild)}_=!1,b.length?b.map((function(w){return w.connectedCallback()})):Bt.jmp((function(){return v=setTimeout(B1,30)})),n()},j1=function(e,a,s,n){s&&s.map((function(l){var c=l[0],d=l[1],m=l[2],f=$3(e,c),p=E3(a,m),b=A3(c);Bt.ael(f,d,p,b),(a.$rmListeners$=a.$rmListeners$||[]).push((function(){return Bt.rel(f,d,p,b)}))}))},E3=function(e,a){return function(s){try{e.$flags$&256?e.$lazyInstance$[a](s):(e.$queuedListeners$=e.$queuedListeners$||[]).push([a,s])}catch(n){pi(n)}}},$3=function(e,a){return a&16?mi.body:e},A3=function(e){return(e&2)!==0},fp=new WeakMap,qs=function(e){return fp.get(e)},WT=function(e,a){return fp.set(a.$lazyInstance$=e,a)},T3=function(e,a){var s={$flags$:0,$hostElement$:e,$cmpMeta$:a,$instanceValues$:new Map};return s.$onInstancePromise$=new Promise((function(n){return s.$onInstanceResolve$=n})),s.$onReadyPromise$=new Promise((function(n){return s.$onReadyResolve$=n})),e["s-p"]=[],e["s-rc"]=[],j1(e,s,a.$listeners$),fp.set(e,s)},Yb=function(e,a){return a in e},pi=function(e,a){return(0,console.error)(e,a)},Kh=new Map,z3=function(e,a,s){var n=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$,c=Kh.get(l);if(c)return c[n];{var d=function(m){return Kh.set(l,m),m[n]};switch(l){case"pwa-action-sheet":return la(()=>import("./pwa-action-sheet.entry-DyENhTAF.js"),__vite__mapDeps([0,1])).then(d,pi);case"pwa-camera-modal":return la(()=>import("./pwa-camera-modal.entry-MeuIzwuJ.js"),__vite__mapDeps([2,1])).then(d,pi);case"pwa-toast":return la(()=>import("./pwa-toast.entry-qF6BljSL.js"),__vite__mapDeps([3,1])).then(d,pi);case"pwa-camera-modal-instance":return la(()=>import("./pwa-camera-modal-instance.entry-CVByFRpD.js"),__vite__mapDeps([4,1])).then(d,pi);case"pwa-camera":return la(()=>import("./pwa-camera.entry-C_qXWkfp.js"),__vite__mapDeps([5,1])).then(d,pi)}}return la(()=>import("./".concat(l,".entry.js").concat("")),[]).then((function(m){return Kh.set(l,m),m[n]}),pi)},fu=new Map,Eu=typeof window<"u"?window:{},mi=Eu.document||{head:{}},Bt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,a,s,n){return e.addEventListener(a,s,n)},rel:function(e,a,s,n){return e.removeEventListener(a,s,n)},ce:function(e,a){return new CustomEvent(e,a)}},I1=function(e){return Promise.resolve(e)},M3=(function(){try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),Xb=[],V1=[],N3=function(e,a){return function(s){e.push(s),Nf||(Nf=!0,Bt.$flags$&4?pp(Df):Bt.raf(Df))}},Wb=function(e){for(var a=0;a<e.length;a++)try{e[a](performance.now())}catch(s){pi(s)}e.length=0},Df=function(){Wb(Xb),Wb(V1),(Nf=Xb.length>0)&&Bt.raf(Df)},pp=function(e){return I1().then(e)},O3=N3(V1),D3=function(){return I1()},L3=function(e,a){return typeof window>"u"?Promise.resolve():D3().then((function(){return k3([["pwa-camera-modal",[[1,"pwa-camera-modal",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],present:[64],dismiss:[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{header:[1],cancelable:[4],options:[16],open:[32]}]]],["pwa-toast",[[1,"pwa-toast",{message:[1],duration:[2],closing:[32]}]]],["pwa-camera",[[1,"pwa-camera",{facingMode:[1,"facing-mode"],handlePhoto:[16],hidePicker:[4,"hide-picker"],handleNoDeviceError:[16],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"],photo:[32],photoSrc:[32],showShutterOverlay:[32],flashIndex:[32],hasCamera:[32],rotation:[32],deviceError:[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"]},[[16,"keyup","handleBackdropKeyUp"]]]]]],a)}))};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();const R3=(e,a,s)=>{const n=e[a];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((l,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+a+(a.split("/").length!==s?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const au=globalThis,mp=au.ShadowRoot&&(au.ShadyCSS===void 0||au.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gp=Symbol(),Qb=new WeakMap;let P1=class{constructor(a,s,n){if(this._$cssResult$=!0,n!==gp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=s}get styleSheet(){let a=this.o;const s=this.t;if(mp&&a===void 0){const n=s!==void 0&&s.length===1;n&&(a=Qb.get(s)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),n&&Qb.set(s,a))}return a}toString(){return this.cssText}};const B3=e=>new P1(typeof e=="string"?e:e+"",void 0,gp),fe=(e,...a)=>{const s=e.length===1?e[0]:a.reduce(((n,l,c)=>n+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+e[c+1]),e[0]);return new P1(s,e,gp)},H3=(e,a)=>{if(mp)e.adoptedStyleSheets=a.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet));else for(const s of a){const n=document.createElement("style"),l=au.litNonce;l!==void 0&&n.setAttribute("nonce",l),n.textContent=s.cssText,e.appendChild(n)}},Zb=mp?e=>e:e=>e instanceof CSSStyleSheet?(a=>{let s="";for(const n of a.cssRules)s+=n.cssText;return B3(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:U3,defineProperty:j3,getOwnPropertyDescriptor:I3,getOwnPropertyNames:V3,getOwnPropertySymbols:P3,getPrototypeOf:F3}=Object,$u=globalThis,Kb=$u.trustedTypes,q3=Kb?Kb.emptyScript:"",G3=$u.reactiveElementPolyfillSupport,ol=(e,a)=>e,Nn={toAttribute(e,a){switch(a){case Boolean:e=e?q3:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,a){let s=e;switch(a){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},bp=(e,a)=>!U3(e,a),Jb={attribute:!0,type:String,converter:Nn,reflect:!1,useDefault:!1,hasChanged:bp};Symbol.metadata??=Symbol("metadata"),$u.litPropertyMetadata??=new WeakMap;let kn=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,s=Jb){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(a,s),!s.noAccessor){const n=Symbol(),l=this.getPropertyDescriptor(a,n,s);l!==void 0&&j3(this.prototype,a,l)}}static getPropertyDescriptor(a,s,n){const{get:l,set:c}=I3(this.prototype,a)??{get(){return this[s]},set(d){this[s]=d}};return{get:l,set(d){const m=l?.call(this);c?.call(this,d),this.requestUpdate(a,m,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Jb}static _$Ei(){if(this.hasOwnProperty(ol("elementProperties")))return;const a=F3(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(ol("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ol("properties"))){const s=this.properties,n=[...V3(s),...P3(s)];for(const l of n)this.createProperty(l,s[l])}const a=this[Symbol.metadata];if(a!==null){const s=litPropertyMetadata.get(a);if(s!==void 0)for(const[n,l]of s)this.elementProperties.set(n,l)}this._$Eh=new Map;for(const[s,n]of this.elementProperties){const l=this._$Eu(s,n);l!==void 0&&this._$Eh.set(l,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const s=[];if(Array.isArray(a)){const n=new Set(a.flat(1/0).reverse());for(const l of n)s.unshift(Zb(l))}else a!==void 0&&s.push(Zb(a));return s}static _$Eu(a,s){const n=s.attribute;return n===!1?void 0:typeof n=="string"?n:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((a=>this.enableUpdating=a)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((a=>a(this)))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){const a=new Map,s=this.constructor.elementProperties;for(const n of s.keys())this.hasOwnProperty(n)&&(a.set(n,this[n]),delete this[n]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return H3(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((a=>a.hostConnected?.()))}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach((a=>a.hostDisconnected?.()))}attributeChangedCallback(a,s,n){this._$AK(a,n)}_$ET(a,s){const n=this.constructor.elementProperties.get(a),l=this.constructor._$Eu(a,n);if(l!==void 0&&n.reflect===!0){const c=(n.converter?.toAttribute!==void 0?n.converter:Nn).toAttribute(s,n.type);this._$Em=a,c==null?this.removeAttribute(l):this.setAttribute(l,c),this._$Em=null}}_$AK(a,s){const n=this.constructor,l=n._$Eh.get(a);if(l!==void 0&&this._$Em!==l){const c=n.getPropertyOptions(l),d=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:Nn;this._$Em=l;const m=d.fromAttribute(s,c.type);this[l]=m??this._$Ej?.get(l)??m,this._$Em=null}}requestUpdate(a,s,n){if(a!==void 0){const l=this.constructor,c=this[a];if(n??=l.getPropertyOptions(a),!((n.hasChanged??bp)(c,s)||n.useDefault&&n.reflect&&c===this._$Ej?.get(a)&&!this.hasAttribute(l._$Eu(a,n))))return;this.C(a,s,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,s,{useDefault:n,reflect:l,wrapped:c},d){n&&!(this._$Ej??=new Map).has(a)&&(this._$Ej.set(a,d??s??this[a]),c!==!0||d!==void 0)||(this._$AL.has(a)||(this.hasUpdated||n||(s=void 0),this._$AL.set(a,s)),l===!0&&this._$Em!==a&&(this._$Eq??=new Set).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[l,c]of this._$Ep)this[l]=c;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[l,c]of n){const{wrapped:d}=c,m=this[l];d!==!0||this._$AL.has(l)||m===void 0||this.C(l,void 0,c,m)}}let a=!1;const s=this._$AL;try{a=this.shouldUpdate(s),a?(this.willUpdate(s),this._$EO?.forEach((n=>n.hostUpdate?.())),this.update(s)):this._$EM()}catch(n){throw a=!1,this._$EM(),n}a&&this._$AE(s)}willUpdate(a){}_$AE(a){this._$EO?.forEach((s=>s.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&=this._$Eq.forEach((s=>this._$ET(s,this[s]))),this._$EM()}updated(a){}firstUpdated(a){}};kn.elementStyles=[],kn.shadowRootOptions={mode:"open"},kn[ol("elementProperties")]=new Map,kn[ol("finalized")]=new Map,G3?.({ReactiveElement:kn}),($u.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vp=globalThis,pu=vp.trustedTypes,ev=pu?pu.createPolicy("lit-html",{createHTML:e=>e}):void 0,F1="$lit$",Bs=`lit$${Math.random().toFixed(9).slice(2)}$`,q1="?"+Bs,Y3=`<${q1}>`,Tr=document,pl=()=>Tr.createComment(""),ml=e=>e===null||typeof e!="object"&&typeof e!="function",yp=Array.isArray,X3=e=>yp(e)||typeof e?.[Symbol.iterator]=="function",Jh=`[ 	
\f\r]`,Yo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tv=/-->/g,av=/>/g,yr=RegExp(`>|${Jh}(?:([^\\s"'>=/]+)(${Jh}*=${Jh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),iv=/'/g,sv=/"/g,G1=/^(?:script|style|textarea|title)$/i,W3=e=>(a,...s)=>({_$litType$:e,strings:a,values:s}),W=W3(1),La=Symbol.for("lit-noChange"),it=Symbol.for("lit-nothing"),rv=new WeakMap,Sr=Tr.createTreeWalker(Tr,129);function Y1(e,a){if(!yp(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ev!==void 0?ev.createHTML(a):a}const Q3=(e,a)=>{const s=e.length-1,n=[];let l,c=a===2?"<svg>":a===3?"<math>":"",d=Yo;for(let m=0;m<s;m++){const f=e[m];let p,b,v=-1,_=0;for(;_<f.length&&(d.lastIndex=_,b=d.exec(f),b!==null);)_=d.lastIndex,d===Yo?b[1]==="!--"?d=tv:b[1]!==void 0?d=av:b[2]!==void 0?(G1.test(b[2])&&(l=RegExp("</"+b[2],"g")),d=yr):b[3]!==void 0&&(d=yr):d===yr?b[0]===">"?(d=l??Yo,v=-1):b[1]===void 0?v=-2:(v=d.lastIndex-b[2].length,p=b[1],d=b[3]===void 0?yr:b[3]==='"'?sv:iv):d===sv||d===iv?d=yr:d===tv||d===av?d=Yo:(d=yr,l=void 0);const S=d===yr&&e[m+1].startsWith("/>")?" ":"";c+=d===Yo?f+Y3:v>=0?(n.push(p),f.slice(0,v)+F1+f.slice(v)+Bs+S):f+Bs+(v===-2?m:S)}return[Y1(e,c+(e[s]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),n]};let Lf=class X1{constructor({strings:a,_$litType$:s},n){let l;this.parts=[];let c=0,d=0;const m=a.length-1,f=this.parts,[p,b]=Q3(a,s);if(this.el=X1.createElement(p,n),Sr.currentNode=this.el.content,s===2||s===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(l=Sr.nextNode())!==null&&f.length<m;){if(l.nodeType===1){if(l.hasAttributes())for(const v of l.getAttributeNames())if(v.endsWith(F1)){const _=b[d++],S=l.getAttribute(v).split(Bs),w=/([.?@])?(.*)/.exec(_);f.push({type:1,index:c,name:w[2],strings:S,ctor:w[1]==="."?K3:w[1]==="?"?J3:w[1]==="@"?eS:Au}),l.removeAttribute(v)}else v.startsWith(Bs)&&(f.push({type:6,index:c}),l.removeAttribute(v));if(G1.test(l.tagName)){const v=l.textContent.split(Bs),_=v.length-1;if(_>0){l.textContent=pu?pu.emptyScript:"";for(let S=0;S<_;S++)l.append(v[S],pl()),Sr.nextNode(),f.push({type:2,index:++c});l.append(v[_],pl())}}}else if(l.nodeType===8)if(l.data===q1)f.push({type:2,index:c});else{let v=-1;for(;(v=l.data.indexOf(Bs,v+1))!==-1;)f.push({type:7,index:c}),v+=Bs.length-1}c++}}static createElement(a,s){const n=Tr.createElement("template");return n.innerHTML=a,n}};function On(e,a,s=e,n){if(a===La)return a;let l=n!==void 0?s._$Co?.[n]:s._$Cl;const c=ml(a)?void 0:a._$litDirective$;return l?.constructor!==c&&(l?._$AO?.(!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,s,n)),n!==void 0?(s._$Co??=[])[n]=l:s._$Cl=l),l!==void 0&&(a=On(e,l._$AS(e,a.values),l,n)),a}let Z3=class{constructor(a,s){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:s},parts:n}=this._$AD,l=(a?.creationScope??Tr).importNode(s,!0);Sr.currentNode=l;let c=Sr.nextNode(),d=0,m=0,f=n[0];for(;f!==void 0;){if(d===f.index){let p;f.type===2?p=new _p(c,c.nextSibling,this,a):f.type===1?p=new f.ctor(c,f.name,f.strings,this,a):f.type===6&&(p=new tS(c,this,a)),this._$AV.push(p),f=n[++m]}d!==f?.index&&(c=Sr.nextNode(),d++)}return Sr.currentNode=Tr,l}p(a){let s=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(a,n,s),s+=n.strings.length-2):n._$AI(a[s])),s++}},_p=class W1{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,s,n,l){this.type=2,this._$AH=it,this._$AN=void 0,this._$AA=a,this._$AB=s,this._$AM=n,this.options=l,this._$Cv=l?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&a?.nodeType===11&&(a=s.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,s=this){a=On(this,a,s),ml(a)?a===it||a==null||a===""?(this._$AH!==it&&this._$AR(),this._$AH=it):a!==this._$AH&&a!==La&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):X3(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==it&&ml(this._$AH)?this._$AA.nextSibling.data=a:this.T(Tr.createTextNode(a)),this._$AH=a}$(a){const{values:s,_$litType$:n}=a,l=typeof n=="number"?this._$AC(a):(n.el===void 0&&(n.el=Lf.createElement(Y1(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===l)this._$AH.p(s);else{const c=new Z3(l,this),d=c.u(this.options);c.p(s),this.T(d),this._$AH=c}}_$AC(a){let s=rv.get(a.strings);return s===void 0&&rv.set(a.strings,s=new Lf(a)),s}k(a){yp(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let n,l=0;for(const c of a)l===s.length?s.push(n=new W1(this.O(pl()),this.O(pl()),this,this.options)):n=s[l],n._$AI(c),l++;l<s.length&&(this._$AR(n&&n._$AB.nextSibling,l),s.length=l)}_$AR(a=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);a!==this._$AB;){const n=a.nextSibling;a.remove(),a=n}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}},Au=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,s,n,l,c){this.type=1,this._$AH=it,this._$AN=void 0,this.element=a,this.name=s,this._$AM=l,this.options=c,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=it}_$AI(a,s=this,n,l){const c=this.strings;let d=!1;if(c===void 0)a=On(this,a,s,0),d=!ml(a)||a!==this._$AH&&a!==La,d&&(this._$AH=a);else{const m=a;let f,p;for(a=c[0],f=0;f<c.length-1;f++)p=On(this,m[n+f],s,f),p===La&&(p=this._$AH[f]),d||=!ml(p)||p!==this._$AH[f],p===it?a=it:a!==it&&(a+=(p??"")+c[f+1]),this._$AH[f]=p}d&&!l&&this.j(a)}j(a){a===it?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}},K3=class extends Au{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===it?void 0:a}},J3=class extends Au{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==it)}},eS=class extends Au{constructor(a,s,n,l,c){super(a,s,n,l,c),this.type=5}_$AI(a,s=this){if((a=On(this,a,s,0)??it)===La)return;const n=this._$AH,l=a===it&&n!==it||a.capture!==n.capture||a.once!==n.once||a.passive!==n.passive,c=a!==it&&(n===it||l);l&&this.element.removeEventListener(this.name,this,n),c&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}},tS=class{constructor(a,s,n){this.element=a,this.type=6,this._$AN=void 0,this._$AM=s,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(a){On(this,a)}};const aS=vp.litHtmlPolyfillSupport;aS?.(Lf,_p),(vp.litHtmlVersions??=[]).push("3.3.1");const iS=(e,a,s)=>{const n=s?.renderBefore??a;let l=n._$litPart$;if(l===void 0){const c=s?.renderBefore??null;n._$litPart$=l=new _p(a.insertBefore(pl(),c),c,void 0,s??{})}return l._$AI(e),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xp=globalThis;let ll=class extends kn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=iS(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return La}};ll._$litElement$=!0,ll.finalized=!0,xp.litElementHydrateSupport?.({LitElement:ll});const sS=xp.litElementPolyfillSupport;sS?.({LitElement:ll});(xp.litElementVersions??=[]).push("4.2.1");var rS=fe`
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
`;const Rf=new Set,En=new Map;let wr,wp="ltr",Sp="en";const Q1=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Q1){const e=new MutationObserver(K1);wp=document.documentElement.dir||"ltr",Sp=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Z1(...e){e.map(a=>{const s=a.$code.toLowerCase();En.has(s)?En.set(s,Object.assign(Object.assign({},En.get(s)),a)):En.set(s,a),wr||(wr=a)}),K1()}function K1(){Q1&&(wp=document.documentElement.dir||"ltr",Sp=document.documentElement.lang||navigator.language),[...Rf.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let nS=class{constructor(a){this.host=a,this.host.addController(this)}hostConnected(){Rf.add(this.host)}hostDisconnected(){Rf.delete(this.host)}dir(){return`${this.host.dir||wp}`.toLowerCase()}lang(){return`${this.host.lang||Sp}`.toLowerCase()}getTranslationData(a){var s,n;const l=new Intl.Locale(a.replace(/_/g,"-")),c=l?.language.toLowerCase(),d=(n=(s=l?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&n!==void 0?n:"",m=En.get(`${c}-${d}`),f=En.get(c);return{locale:l,language:c,region:d,primary:m,secondary:f}}exists(a,s){var n;const{primary:l,secondary:c}=this.getTranslationData((n=s.lang)!==null&&n!==void 0?n:this.lang());return s=Object.assign({includeFallback:!1},s),!!(l&&l[a]||c&&c[a]||s.includeFallback&&wr&&wr[a])}term(a,...s){const{primary:n,secondary:l}=this.getTranslationData(this.lang());let c;if(n&&n[a])c=n[a];else if(l&&l[a])c=l[a];else if(wr&&wr[a])c=wr[a];else return console.error(`No translation found for: ${String(a)}`),String(a);return typeof c=="function"?c(...s):c}date(a,s){return a=new Date(a),new Intl.DateTimeFormat(this.lang(),s).format(a)}number(a,s){return a=Number(a),isNaN(a)?"":new Intl.NumberFormat(this.lang(),s).format(a)}relativeTime(a,s,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(a,s)}};var J1={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,a)=>`Go to slide ${e} of ${a}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Z1(J1);var oS=J1,Ie=class extends nS{};Z1(oS);var ge=fe`
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
 */const lS={attribute:!0,type:String,converter:Nn,reflect:!1,hasChanged:bp},cS=(e=lS,a,s)=>{const{kind:n,metadata:l}=s;let c=globalThis.litPropertyMetadata.get(l);if(c===void 0&&globalThis.litPropertyMetadata.set(l,c=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),c.set(s.name,e),n==="accessor"){const{name:d}=s;return{set(m){const f=a.get.call(this);a.set.call(this,m),this.requestUpdate(d,f,e)},init(m){return m!==void 0&&this.C(d,void 0,e,m),m}}}if(n==="setter"){const{name:d}=s;return function(m){const f=this[d];a.call(this,m),this.requestUpdate(d,f,e)}}throw Error("Unsupported decorator location: "+n)};function C(e){return(a,s)=>typeof s=="object"?cS(e,a,s):((n,l,c)=>{const d=l.hasOwnProperty(c);return l.constructor.createProperty(c,n),d?Object.getOwnPropertyDescriptor(l,c):void 0})(e,a,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return C({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yl(e){return(a,s)=>{const n=typeof a=="function"?a:a[s];Object.assign(n,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ey=(e,a,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof a!="object"&&Object.defineProperty(e,a,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function te(e,a){return(s,n,l)=>{const c=d=>d.renderRoot?.querySelector(e)??null;return ey(s,n,{get(){return c(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function uS(e){return(a,s)=>ey(a,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var iu,oe=class extends ll{constructor(){super(),Gw(this,iu,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,a])=>{this.constructor.define(e,a)})}emit(e,a){const s=new CustomEvent(e,ns({bubbles:!0,cancelable:!1,composed:!0,detail:{}},a));return this.dispatchEvent(s),s}static define(e,a=this,s={}){const n=customElements.get(e);if(!n){try{customElements.define(e,a,s)}catch{customElements.define(e,class extends a{},s)}return}let l=" (unknown version)",c=l;"version"in a&&a.version&&(l=" v"+a.version),"version"in n&&n.version&&(c=" v"+n.version),!(l&&c&&l===c)&&console.warn(`Attempted to register <${e}>${l}, but <${e}>${c} has already been registered.`)}attributeChangedCallback(e,a,s){qw(this,iu)||(this.constructor.elementProperties.forEach((n,l)=>{n.reflect&&this[l]!=null&&this.initialReflectedProperties.set(l,this[l])}),Yw(this,iu,!0)),super.attributeChangedCallback(e,a,s)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((a,s)=>{e.has(s)&&this[s]==null&&(this[s]=a)})}};iu=new WeakMap;oe.version="2.20.1";oe.dependencies={};g([C()],oe.prototype,"dir",2);g([C()],oe.prototype,"lang",2);var Rn=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this)}render(){return W`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Rn.styles=[ge,rS];var Xo=new WeakMap,Wo=new WeakMap,Qo=new WeakMap,ef=new WeakSet,Fc=new WeakMap,os=class{constructor(e,a){this.handleFormData=s=>{const n=this.options.disabled(this.host),l=this.options.name(this.host),c=this.options.value(this.host),d=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!n&&!d&&typeof l=="string"&&l.length>0&&typeof c<"u"&&(Array.isArray(c)?c.forEach(m=>{s.formData.append(l,m.toString())}):s.formData.append(l,c.toString()))},this.handleFormSubmit=s=>{var n;const l=this.options.disabled(this.host),c=this.options.reportValidity;this.form&&!this.form.noValidate&&((n=Xo.get(this.form))==null||n.forEach(d=>{this.setUserInteracted(d,!0)})),this.form&&!this.form.noValidate&&!l&&!c(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Fc.set(this.host,[])},this.handleInteraction=s=>{const n=Fc.get(this.host);n.includes(s.type)||n.push(s.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const n of s)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const n of s)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=ns({form:s=>{const n=s.form;if(n){const c=s.getRootNode().querySelector(`#${n}`);if(c)return c}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var n;return(n=s.disabled)!=null?n:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,n)=>s.value=n,assumeInteractionOn:["sl-input"]},a)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Fc.set(this.host,[]),this.options.assumeInteractionOn.forEach(a=>{this.host.addEventListener(a,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Fc.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Xo.has(this.form)?Xo.get(this.form).add(this.host):Xo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Wo.has(this.form)||(Wo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Qo.has(this.form)||(Qo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Xo.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Wo.has(this.form)&&(this.form.reportValidity=Wo.get(this.form),Wo.delete(this.form)),Qo.has(this.form)&&(this.form.checkValidity=Qo.get(this.form),Qo.delete(this.form)),this.form=void 0))}setUserInteracted(e,a){a?ef.add(e):ef.delete(e),e.requestUpdate()}doAction(e,a){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",a&&(s.name=a.name,s.value=a.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{a.hasAttribute(n)&&s.setAttribute(n,a.getAttribute(n))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const a=this.host,s=!!ef.has(a),n=!!a.required;a.toggleAttribute("data-required",n),a.toggleAttribute("data-optional",!n),a.toggleAttribute("data-invalid",!e),a.toggleAttribute("data-valid",e),a.toggleAttribute("data-user-invalid",!e&&s),a.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const a=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||a.preventDefault(),this.host.dispatchEvent(a)||e?.preventDefault()}},Tu=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),dS=Object.freeze(vl(ns({},Tu),{valid:!1,valueMissing:!0})),hS=Object.freeze(vl(ns({},Tu),{valid:!1,customError:!0})),ty=fe`
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
`,ua=class{constructor(e,...a){this.slotNames=[],this.handleSlotChange=s=>{const n=s.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=a}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const a=e;if(a.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!a.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function fS(e){if(!e)return"";const a=e.assignedNodes({flatten:!0});let s="";return[...a].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(s+=n.textContent)}),s}var pS={name:"default",resolver:e=>Uw(`assets/icons/${e}.svg`)},mS=pS,nv={caret:`
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
  `},gS={name:"system",resolver:e=>e in nv?`data:image/svg+xml,${encodeURIComponent(nv[e])}`:""},bS=gS,vS=[mS,bS],Bf=[];function yS(e){Bf.push(e)}function _S(e){Bf=Bf.filter(a=>a!==e)}function ov(e){return vS.find(a=>a.name===e)}var xS=fe`
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
`;function J(e,a){const s=ns({waitUntilFirstUpdate:!1},a);return(n,l)=>{const{update:c}=n,d=Array.isArray(e)?e:[e];n.update=function(m){d.forEach(f=>{const p=f;if(m.has(p)){const b=m.get(p),v=this[p];b!==v&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[l](b,v)}}),c.call(this,m)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wS=(e,a)=>e?._$litType$!==void 0,ay=e=>e.strings===void 0,SS={},CS=(e,a=SS)=>e._$AH=a;var Zo=Symbol(),qc=Symbol(),tf,af=new Map,Ke=class extends oe{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,a){var s;let n;if(a?.spriteSheet)return this.svg=W`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?Zo:qc}catch{return qc}try{const l=document.createElement("div");l.innerHTML=await n.text();const c=l.firstElementChild;if(((s=c?.tagName)==null?void 0:s.toLowerCase())!=="svg")return Zo;tf||(tf=new DOMParser);const m=tf.parseFromString(c.outerHTML,"text/html").body.querySelector("svg");return m?(m.part.add("svg"),document.adoptNode(m)):Zo}catch{return Zo}}connectedCallback(){super.connectedCallback(),yS(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),_S(this)}getIconSource(){const e=ov(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:a,fromLibrary:s}=this.getIconSource(),n=s?ov(this.library):void 0;if(!a){this.svg=null;return}let l=af.get(a);if(l||(l=this.resolveIcon(a,n),af.set(a,l)),!this.initialRender)return;const c=await l;if(c===qc&&af.delete(a),a===this.getIconSource().url){if(wS(c)){if(this.svg=c,n){await this.updateComplete;const d=this.shadowRoot.querySelector("[part='svg']");typeof n.mutator=="function"&&d&&n.mutator(d)}return}switch(c){case qc:case Zo:this.svg=null,this.emit("sl-error");break;default:this.svg=c.cloneNode(!0),(e=n?.mutator)==null||e.call(n,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Ke.styles=[ge,xS];g([pe()],Ke.prototype,"svg",2);g([C({reflect:!0})],Ke.prototype,"name",2);g([C()],Ke.prototype,"src",2);g([C()],Ke.prototype,"label",2);g([C({reflect:!0})],Ke.prototype,"library",2);g([J("label")],Ke.prototype,"handleLabelChange",1);g([J(["name","src","library"])],Ke.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},_l=e=>(...a)=>({_$litDirective$:e,values:a});let xl=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,s,n){this._$Ct=a,this._$AM=s,this._$Ci=n}_$AS(a,s){return this.update(a,s)}update(a,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=_l(class extends xl{constructor(e){if(super(e),e.type!==Ni.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((a=>e[a])).join(" ")+" "}update(e,[a]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((n=>n!==""))));for(const n in a)a[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(a)}const s=e.element.classList;for(const n of this.st)n in a||(s.remove(n),this.st.delete(n));for(const n in a){const l=!!a[n];l===this.st.has(n)||this.nt?.has(n)||(l?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return La}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const iy=Symbol.for(""),kS=e=>{if(e?.r===iy)return e?._$litStatic$},mu=(e,...a)=>({_$litStatic$:a.reduce(((s,n,l)=>s+(c=>{if(c._$litStatic$!==void 0)return c._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${c}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[l+1]),e[0]),r:iy}),lv=new Map,ES=e=>(a,...s)=>{const n=s.length;let l,c;const d=[],m=[];let f,p=0,b=!1;for(;p<n;){for(f=a[p];p<n&&(c=s[p],(l=kS(c))!==void 0);)f+=l+a[++p],b=!0;p!==n&&m.push(c),d.push(f),p++}if(p===n&&d.push(a[n]),b){const v=d.join("$$lit$$");(a=lv.get(v))===void 0&&(d.raw=d,lv.set(v,a=d)),s=m}return e(a,...s)},cl=ES(W);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=e=>e??it;var Pe=class extends oe{constructor(){super(...arguments),this.formControlController=new os(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ua(this,"[default]","prefix","suffix"),this.localize=new Ie(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Tu}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),a=e?mu`a`:mu`button`;return cl`
      <${a}
        part="base"
        class=${me({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${ne(e?void 0:this.disabled)}
        type=${ne(e?void 0:this.type)}
        title=${this.title}
        name=${ne(e?void 0:this.name)}
        value=${ne(e?void 0:this.value)}
        href=${ne(e&&!this.disabled?this.href:void 0)}
        target=${ne(e?this.target:void 0)}
        download=${ne(e?this.download:void 0)}
        rel=${ne(e?this.rel:void 0)}
        role=${ne(e?void 0:"button")}
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
        ${this.caret?cl` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?cl`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${a}>
    `}};Pe.styles=[ge,ty];Pe.dependencies={"sl-icon":Ke,"sl-spinner":Rn};g([te(".button")],Pe.prototype,"button",2);g([pe()],Pe.prototype,"hasFocus",2);g([pe()],Pe.prototype,"invalid",2);g([C()],Pe.prototype,"title",2);g([C({reflect:!0})],Pe.prototype,"variant",2);g([C({reflect:!0})],Pe.prototype,"size",2);g([C({type:Boolean,reflect:!0})],Pe.prototype,"caret",2);g([C({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2);g([C({type:Boolean,reflect:!0})],Pe.prototype,"loading",2);g([C({type:Boolean,reflect:!0})],Pe.prototype,"outline",2);g([C({type:Boolean,reflect:!0})],Pe.prototype,"pill",2);g([C({type:Boolean,reflect:!0})],Pe.prototype,"circle",2);g([C()],Pe.prototype,"type",2);g([C()],Pe.prototype,"name",2);g([C()],Pe.prototype,"value",2);g([C()],Pe.prototype,"href",2);g([C()],Pe.prototype,"target",2);g([C()],Pe.prototype,"rel",2);g([C()],Pe.prototype,"download",2);g([C()],Pe.prototype,"form",2);g([C({attribute:"formaction"})],Pe.prototype,"formAction",2);g([C({attribute:"formenctype"})],Pe.prototype,"formEnctype",2);g([C({attribute:"formmethod"})],Pe.prototype,"formMethod",2);g([C({attribute:"formnovalidate",type:Boolean})],Pe.prototype,"formNoValidate",2);g([C({attribute:"formtarget"})],Pe.prototype,"formTarget",2);g([J("disabled",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleDisabledChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $S=new Set(["children","localName","ref","style","className"]),cv=new WeakMap,uv=(e,a,s,n,l)=>{const c=l?.[a];c===void 0?(e[a]=s,s==null&&a in HTMLElement.prototype&&e.removeAttribute(a)):s!==n&&((d,m,f)=>{let p=cv.get(d);p===void 0&&cv.set(d,p=new Map);let b=p.get(m);f!==void 0?b===void 0?(p.set(m,b={handleEvent:f}),d.addEventListener(m,b)):b.handleEvent=f:b!==void 0&&(p.delete(m),d.removeEventListener(m,b))})(e,c,s)},de=({react:e,tagName:a,elementClass:s,events:n,displayName:l})=>{const c=new Set(Object.keys(n??{})),d=e.forwardRef(((m,f)=>{const p=e.useRef(new Map),b=e.useRef(null),v={},_={};for(const[S,w]of Object.entries(m))$S.has(S)?v[S==="className"?"class":S]=w:c.has(S)||S in s.prototype?_[S]=w:v[S]=w;return e.useLayoutEffect((()=>{if(b.current===null)return;const S=new Map;for(const w in _)uv(b.current,w,m[w],p.current.get(w),n),p.current.delete(w),S.set(w,m[w]);for(const[w,E]of p.current)uv(b.current,w,void 0,E,n);p.current=S})),e.useLayoutEffect((()=>{b.current?.removeAttribute("defer-hydration")}),[]),v.suppressHydrationWarning=!0,e.createElement(a,{...v,ref:e.useCallback((S=>{b.current=S,typeof f=="function"?f(S):f!==null&&(f.current=S)}),[f])})}));return d.displayName=l??s.name,d};var AS="sl-button";Pe.define("sl-button");var TS=de({tagName:AS,elementClass:Pe,react:ue,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),gi=TS;function dv(e){return{onFetch:(a,s)=>{const n=a.options,l=a.fetchOptions?.meta?.fetchMore?.direction,c=a.state.data?.pages||[],d=a.state.data?.pageParams||[];let m={pages:[],pageParams:[]},f=0;const p=async()=>{let b=!1;const v=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(a.signal.aborted?b=!0:a.signal.addEventListener("abort",()=>{b=!0}),a.signal)})},_=Ix(a.options,a.fetchOptions),S=async(w,E,z)=>{if(b)return Promise.reject();if(E==null&&w.pages.length)return Promise.resolve(w);const T=(()=>{const H={client:a.client,queryKey:a.queryKey,pageParam:E,direction:z?"backward":"forward",meta:a.options.meta};return v(H),H})(),D=await _(T),{maxPages:M}=a.options,A=z?Vx:Px;return{pages:A(w.pages,D,M),pageParams:A(w.pageParams,E,M)}};if(l&&c.length){const w=l==="backward",E=w?zS:hv,z={pages:c,pageParams:d},N=E(n,z);m=await S(z,N,w)}else{const w=e??c.length;do{const E=f===0?d[0]??n.initialPageParam:hv(n,m);if(f>0&&E==null)break;m=await S(m,E),f++}while(f<w)}return m};a.options.persister?a.fetchFn=()=>a.options.persister?.(p,{client:a.client,queryKey:a.queryKey,meta:a.options.meta,signal:a.signal},s):a.fetchFn=p}}}function hv(e,{pages:a,pageParams:s}){const n=a.length-1;return a.length>0?e.getNextPageParam(a[n],a,s[n],s):void 0}function zS(e,{pages:a,pageParams:s}){return a.length>0?e.getPreviousPageParam?.(a[0],a,s[0],s):void 0}var MS=class extends y1{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#a=0}#e;#t;#a;build(e,a,s){const n=new Fx({client:e,mutationCache:this,mutationId:++this.#a,options:e.defaultMutationOptions(a),state:s});return this.add(n),n}add(e){this.#e.add(e);const a=Gc(e);if(typeof a=="string"){const s=this.#t.get(a);s?s.push(e):this.#t.set(a,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const a=Gc(e);if(typeof a=="string"){const s=this.#t.get(a);if(s)if(s.length>1){const n=s.indexOf(e);n!==-1&&s.splice(n,1)}else s[0]===e&&this.#t.delete(a)}}this.notify({type:"removed",mutation:e})}canRun(e){const a=Gc(e);if(typeof a=="string"){const n=this.#t.get(a)?.find(l=>l.state.status==="pending");return!n||n===e}else return!0}runNext(e){const a=Gc(e);return typeof a=="string"?this.#t.get(a)?.find(n=>n!==e&&n.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Oa.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const a={exact:!0,...e};return this.getAll().find(s=>wb(a,s))}findAll(e={}){return this.getAll().filter(a=>wb(e,a))}notify(e){Oa.batch(()=>{this.listeners.forEach(a=>{a(e)})})}resumePausedMutations(){const e=this.getAll().filter(a=>a.state.isPaused);return Oa.batch(()=>Promise.all(e.map(a=>a.continue().catch(as))))}};function Gc(e){return e.options.scope?.id}var NS=class extends y1{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,a,s){const n=a.queryKey,l=a.queryHash??_1(n,a);let c=this.get(l);return c||(c=new qx({client:e,queryKey:n,queryHash:l,options:e.defaultQueryOptions(a),state:s,defaultOptions:e.getQueryDefaults(n)}),this.add(c)),c}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const a=this.#e.get(e.queryHash);a&&(e.destroy(),a===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Oa.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const a={exact:!0,...e};return this.getAll().find(s=>Sb(a,s))}findAll(e={}){const a=this.getAll();return Object.keys(e).length>0?a.filter(s=>Sb(e,s)):a}notify(e){Oa.batch(()=>{this.listeners.forEach(a=>{a(e)})})}onFocus(){Oa.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Oa.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},OS=class{#e;#t;#a;#s;#r;#i;#n;#o;constructor(e={}){this.#e=e.queryCache||new NS,this.#t=e.mutationCache||new MS,this.#a=e.defaultOptions||{},this.#s=new Map,this.#r=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#n=Gx.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#o=Cb.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#n?.(),this.#n=void 0,this.#o?.(),this.#o=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const a=this.defaultQueryOptions({queryKey:e});return this.#e.get(a.queryHash)?.state.data}ensureQueryData(e){const a=this.defaultQueryOptions(e),s=this.#e.build(this,a),n=s.state.data;return n===void 0?this.fetchQuery(e):(e.revalidateIfStale&&s.isStaleByTime(kb(a.staleTime,s))&&this.prefetchQuery(a),Promise.resolve(n))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:a,state:s})=>{const n=s.data;return[a,n]})}setQueryData(e,a,s){const n=this.defaultQueryOptions({queryKey:e}),c=this.#e.get(n.queryHash)?.state.data,d=Yx(a,c);if(d!==void 0)return this.#e.build(this,n).setData(d,{...s,manual:!0})}setQueriesData(e,a,s){return Oa.batch(()=>this.#e.findAll(e).map(({queryKey:n})=>[n,this.setQueryData(n,a,s)]))}getQueryState(e){const a=this.defaultQueryOptions({queryKey:e});return this.#e.get(a.queryHash)?.state}removeQueries(e){const a=this.#e;Oa.batch(()=>{a.findAll(e).forEach(s=>{a.remove(s)})})}resetQueries(e,a){const s=this.#e;return Oa.batch(()=>(s.findAll(e).forEach(n=>{n.reset()}),this.refetchQueries({type:"active",...e},a)))}cancelQueries(e,a={}){const s={revert:!0,...a},n=Oa.batch(()=>this.#e.findAll(e).map(l=>l.cancel(s)));return Promise.all(n).then(as).catch(as)}invalidateQueries(e,a={}){return Oa.batch(()=>(this.#e.findAll(e).forEach(s=>{s.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},a)))}refetchQueries(e,a={}){const s={...a,cancelRefetch:a.cancelRefetch??!0},n=Oa.batch(()=>this.#e.findAll(e).filter(l=>!l.isDisabled()&&!l.isStatic()).map(l=>{let c=l.fetch(void 0,s);return s.throwOnError||(c=c.catch(as)),l.state.fetchStatus==="paused"?Promise.resolve():c}));return Promise.all(n).then(as)}fetchQuery(e){const a=this.defaultQueryOptions(e);a.retry===void 0&&(a.retry=!1);const s=this.#e.build(this,a);return s.isStaleByTime(kb(a.staleTime,s))?s.fetch(a):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(as).catch(as)}fetchInfiniteQuery(e){return e.behavior=dv(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(as).catch(as)}ensureInfiniteQueryData(e){return e.behavior=dv(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Cb.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(e){this.#a=e}setQueryDefaults(e,a){this.#s.set(Eb(e),{queryKey:e,defaultOptions:a})}getQueryDefaults(e){const a=[...this.#s.values()],s={};return a.forEach(n=>{$b(e,n.queryKey)&&Object.assign(s,n.defaultOptions)}),s}setMutationDefaults(e,a){this.#r.set(Eb(e),{mutationKey:e,defaultOptions:a})}getMutationDefaults(e){const a=[...this.#r.values()],s={};return a.forEach(n=>{$b(e,n.mutationKey)&&Object.assign(s,n.defaultOptions)}),s}defaultQueryOptions(e){if(e._defaulted)return e;const a={...this.#a.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return a.queryHash||(a.queryHash=_1(a.queryKey,a)),a.refetchOnReconnect===void 0&&(a.refetchOnReconnect=a.networkMode!=="always"),a.throwOnError===void 0&&(a.throwOnError=!!a.suspense),!a.networkMode&&a.persister&&(a.networkMode="offlineFirst"),a.queryFn===Xx&&(a.enabled=!1),a}defaultMutationOptions(e){return e?._defaulted?e:{...this.#a.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}};function Ti(e,a){var s=a&&a.cache?a.cache:jS,n=a&&a.serializer?a.serializer:HS,l=a&&a.strategy?a.strategy:RS;return l(e,{cache:s,serializer:n})}function DS(e){return e==null||typeof e=="number"||typeof e=="boolean"}function LS(e,a,s,n){var l=DS(n)?n:s(n),c=a.get(l);return typeof c>"u"&&(c=e.call(this,n),a.set(l,c)),c}function sy(e,a,s){var n=Array.prototype.slice.call(arguments,3),l=s(n),c=a.get(l);return typeof c>"u"&&(c=e.apply(this,n),a.set(l,c)),c}function ry(e,a,s,n,l){return s.bind(a,e,n,l)}function RS(e,a){var s=e.length===1?LS:sy;return ry(e,this,s,a.cache.create(),a.serializer)}function BS(e,a){return ry(e,this,sy,a.cache.create(),a.serializer)}var HS=function(){return JSON.stringify(arguments)},US=(function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(a){return this.cache[a]},e.prototype.set=function(a,s){this.cache[a]=s},e})(),jS={create:function(){return new US}},zi={variadic:BS},De;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(De||(De={}));var at;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(at||(at={}));var Dn;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Dn||(Dn={}));function fv(e){return e.type===at.literal}function IS(e){return e.type===at.argument}function ny(e){return e.type===at.number}function oy(e){return e.type===at.date}function ly(e){return e.type===at.time}function cy(e){return e.type===at.select}function uy(e){return e.type===at.plural}function VS(e){return e.type===at.pound}function dy(e){return e.type===at.tag}function hy(e){return!!(e&&typeof e=="object"&&e.type===Dn.number)}function Hf(e){return!!(e&&typeof e=="object"&&e.type===Dn.dateTime)}var fy=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,PS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function FS(e){var a={};return e.replace(PS,function(s){var n=s.length;switch(s[0]){case"G":a.era=n===4?"long":n===5?"narrow":"short";break;case"y":a.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":a.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":a.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":a.weekday=n===4?"long":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");a.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");a.weekday=["short","long","narrow","short"][n-4];break;case"a":a.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":a.hourCycle="h12",a.hour=["numeric","2-digit"][n-1];break;case"H":a.hourCycle="h23",a.hour=["numeric","2-digit"][n-1];break;case"K":a.hourCycle="h11",a.hour=["numeric","2-digit"][n-1];break;case"k":a.hourCycle="h24",a.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":a.minute=["numeric","2-digit"][n-1];break;case"s":a.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":a.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),a}var qS=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function GS(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var a=e.split(qS).filter(function(_){return _.length>0}),s=[],n=0,l=a;n<l.length;n++){var c=l[n],d=c.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var m=d[0],f=d.slice(1),p=0,b=f;p<b.length;p++){var v=b[p];if(v.length===0)throw new Error("Invalid number skeleton")}s.push({stem:m,options:f})}return s}function YS(e){return e.replace(/^(.*?)-/,"")}var pv=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,py=/^(@+)?(\+|#+)?[rs]?$/g,XS=/(\*)(0+)|(#+)(0+)|(0+)/g,my=/^(0+)$/;function mv(e){var a={};return e[e.length-1]==="r"?a.roundingPriority="morePrecision":e[e.length-1]==="s"&&(a.roundingPriority="lessPrecision"),e.replace(py,function(s,n,l){return typeof l!="string"?(a.minimumSignificantDigits=n.length,a.maximumSignificantDigits=n.length):l==="+"?a.minimumSignificantDigits=n.length:n[0]==="#"?a.maximumSignificantDigits=n.length:(a.minimumSignificantDigits=n.length,a.maximumSignificantDigits=n.length+(typeof l=="string"?l.length:0)),""}),a}function gy(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function WS(e){var a;if(e[0]==="E"&&e[1]==="E"?(a={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(a={notation:"scientific"},e=e.slice(1)),a){var s=e.slice(0,2);if(s==="+!"?(a.signDisplay="always",e=e.slice(2)):s==="+?"&&(a.signDisplay="exceptZero",e=e.slice(2)),!my.test(e))throw new Error("Malformed concise eng/scientific notation");a.minimumIntegerDigits=e.length}return a}function gv(e){var a={},s=gy(e);return s||a}function QS(e){for(var a={},s=0,n=e;s<n.length;s++){var l=n[s];switch(l.stem){case"percent":case"%":a.style="percent";continue;case"%x100":a.style="percent",a.scale=100;continue;case"currency":a.style="currency",a.currency=l.options[0];continue;case"group-off":case",_":a.useGrouping=!1;continue;case"precision-integer":case".":a.maximumFractionDigits=0;continue;case"measure-unit":case"unit":a.style="unit",a.unit=YS(l.options[0]);continue;case"compact-short":case"K":a.notation="compact",a.compactDisplay="short";continue;case"compact-long":case"KK":a.notation="compact",a.compactDisplay="long";continue;case"scientific":a=ce(ce(ce({},a),{notation:"scientific"}),l.options.reduce(function(f,p){return ce(ce({},f),gv(p))},{}));continue;case"engineering":a=ce(ce(ce({},a),{notation:"engineering"}),l.options.reduce(function(f,p){return ce(ce({},f),gv(p))},{}));continue;case"notation-simple":a.notation="standard";continue;case"unit-width-narrow":a.currencyDisplay="narrowSymbol",a.unitDisplay="narrow";continue;case"unit-width-short":a.currencyDisplay="code",a.unitDisplay="short";continue;case"unit-width-full-name":a.currencyDisplay="name",a.unitDisplay="long";continue;case"unit-width-iso-code":a.currencyDisplay="symbol";continue;case"scale":a.scale=parseFloat(l.options[0]);continue;case"rounding-mode-floor":a.roundingMode="floor";continue;case"rounding-mode-ceiling":a.roundingMode="ceil";continue;case"rounding-mode-down":a.roundingMode="trunc";continue;case"rounding-mode-up":a.roundingMode="expand";continue;case"rounding-mode-half-even":a.roundingMode="halfEven";continue;case"rounding-mode-half-down":a.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":a.roundingMode="halfExpand";continue;case"integer-width":if(l.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");l.options[0].replace(XS,function(f,p,b,v,_,S){if(p)a.minimumIntegerDigits=b.length;else{if(v&&_)throw new Error("We currently do not support maximum integer digits");if(S)throw new Error("We currently do not support exact integer digits")}return""});continue}if(my.test(l.stem)){a.minimumIntegerDigits=l.stem.length;continue}if(pv.test(l.stem)){if(l.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");l.stem.replace(pv,function(f,p,b,v,_,S){return b==="*"?a.minimumFractionDigits=p.length:v&&v[0]==="#"?a.maximumFractionDigits=v.length:_&&S?(a.minimumFractionDigits=_.length,a.maximumFractionDigits=_.length+S.length):(a.minimumFractionDigits=p.length,a.maximumFractionDigits=p.length),""});var c=l.options[0];c==="w"?a=ce(ce({},a),{trailingZeroDisplay:"stripIfInteger"}):c&&(a=ce(ce({},a),mv(c)));continue}if(py.test(l.stem)){a=ce(ce({},a),mv(l.stem));continue}var d=gy(l.stem);d&&(a=ce(ce({},a),d));var m=WS(l.stem);m&&(a=ce(ce({},a),m))}return a}var Yc={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function ZS(e,a){for(var s="",n=0;n<e.length;n++){var l=e.charAt(n);if(l==="j"){for(var c=0;n+1<e.length&&e.charAt(n+1)===l;)c++,n++;var d=1+(c&1),m=c<2?1:3+(c>>1),f="a",p=KS(a);for((p=="H"||p=="k")&&(m=0);m-- >0;)s+=f;for(;d-- >0;)s=p+s}else l==="J"?s+="H":s+=l}return s}function KS(e){var a=e.hourCycle;if(a===void 0&&e.hourCycles&&e.hourCycles.length&&(a=e.hourCycles[0]),a)switch(a){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var s=e.language,n;s!=="root"&&(n=e.maximize().region);var l=Yc[n||""]||Yc[s||""]||Yc["".concat(s,"-001")]||Yc["001"];return l[0]}var sf,JS=new RegExp("^".concat(fy.source,"*")),e5=new RegExp("".concat(fy.source,"*$"));function Re(e,a){return{start:e,end:a}}var t5=!!String.prototype.startsWith&&"_a".startsWith("a",1),a5=!!String.fromCodePoint,i5=!!Object.fromEntries,s5=!!String.prototype.codePointAt,r5=!!String.prototype.trimStart,n5=!!String.prototype.trimEnd,o5=!!Number.isSafeInteger,l5=o5?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Uf=!0;try{var c5=vy("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Uf=((sf=c5.exec("a"))===null||sf===void 0?void 0:sf[0])==="a"}catch{Uf=!1}var bv=t5?function(a,s,n){return a.startsWith(s,n)}:function(a,s,n){return a.slice(n,n+s.length)===s},jf=a5?String.fromCodePoint:function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];for(var n="",l=a.length,c=0,d;l>c;){if(d=a[c++],d>1114111)throw RangeError(d+" is not a valid code point");n+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return n},vv=i5?Object.fromEntries:function(a){for(var s={},n=0,l=a;n<l.length;n++){var c=l[n],d=c[0],m=c[1];s[d]=m}return s},by=s5?function(a,s){return a.codePointAt(s)}:function(a,s){var n=a.length;if(!(s<0||s>=n)){var l=a.charCodeAt(s),c;return l<55296||l>56319||s+1===n||(c=a.charCodeAt(s+1))<56320||c>57343?l:(l-55296<<10)+(c-56320)+65536}},u5=r5?function(a){return a.trimStart()}:function(a){return a.replace(JS,"")},d5=n5?function(a){return a.trimEnd()}:function(a){return a.replace(e5,"")};function vy(e,a){return new RegExp(e,a)}var If;if(Uf){var yv=vy("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");If=function(a,s){var n;yv.lastIndex=s;var l=yv.exec(a);return(n=l[1])!==null&&n!==void 0?n:""}}else If=function(a,s){for(var n=[];;){var l=by(a,s);if(l===void 0||yy(l)||m5(l))break;n.push(l),s+=l>=65536?2:1}return jf.apply(void 0,n)};var h5=(function(){function e(a,s){s===void 0&&(s={}),this.message=a,this.position={offset:0,line:1,column:1},this.ignoreTag=!!s.ignoreTag,this.locale=s.locale,this.requiresOtherClause=!!s.requiresOtherClause,this.shouldParseSkeletons=!!s.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(a,s,n){for(var l=[];!this.isEOF();){var c=this.char();if(c===123){var d=this.parseArgument(a,n);if(d.err)return d;l.push(d.val)}else{if(c===125&&a>0)break;if(c===35&&(s==="plural"||s==="selectordinal")){var m=this.clonePosition();this.bump(),l.push({type:at.pound,location:Re(m,this.clonePosition())})}else if(c===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(De.UNMATCHED_CLOSING_TAG,Re(this.clonePosition(),this.clonePosition()))}else if(c===60&&!this.ignoreTag&&Vf(this.peek()||0)){var d=this.parseTag(a,s);if(d.err)return d;l.push(d.val)}else{var d=this.parseLiteral(a,s);if(d.err)return d;l.push(d.val)}}}return{val:l,err:null}},e.prototype.parseTag=function(a,s){var n=this.clonePosition();this.bump();var l=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:at.literal,value:"<".concat(l,"/>"),location:Re(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var c=this.parseMessage(a+1,s,!0);if(c.err)return c;var d=c.val,m=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Vf(this.char()))return this.error(De.INVALID_TAG,Re(m,this.clonePosition()));var f=this.clonePosition(),p=this.parseTagName();return l!==p?this.error(De.UNMATCHED_CLOSING_TAG,Re(f,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:at.tag,value:l,children:d,location:Re(n,this.clonePosition())},err:null}:this.error(De.INVALID_TAG,Re(m,this.clonePosition())))}else return this.error(De.UNCLOSED_TAG,Re(n,this.clonePosition()))}else return this.error(De.INVALID_TAG,Re(n,this.clonePosition()))},e.prototype.parseTagName=function(){var a=this.offset();for(this.bump();!this.isEOF()&&p5(this.char());)this.bump();return this.message.slice(a,this.offset())},e.prototype.parseLiteral=function(a,s){for(var n=this.clonePosition(),l="";;){var c=this.tryParseQuote(s);if(c){l+=c;continue}var d=this.tryParseUnquoted(a,s);if(d){l+=d;continue}var m=this.tryParseLeftAngleBracket();if(m){l+=m;continue}break}var f=Re(n,this.clonePosition());return{val:{type:at.literal,value:l,location:f},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!f5(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(a){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(a==="plural"||a==="selectordinal")break;return null;default:return null}this.bump();var s=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)s.push(39),this.bump();else{this.bump();break}else s.push(n);this.bump()}return jf.apply(void 0,s)},e.prototype.tryParseUnquoted=function(a,s){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(s==="plural"||s==="selectordinal")||n===125&&a>0?null:(this.bump(),jf(n))},e.prototype.parseArgument=function(a,s){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(De.EXPECT_ARGUMENT_CLOSING_BRACE,Re(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(De.EMPTY_ARGUMENT,Re(n,this.clonePosition()));var l=this.parseIdentifierIfPossible().value;if(!l)return this.error(De.MALFORMED_ARGUMENT,Re(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(De.EXPECT_ARGUMENT_CLOSING_BRACE,Re(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:at.argument,value:l,location:Re(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(De.EXPECT_ARGUMENT_CLOSING_BRACE,Re(n,this.clonePosition())):this.parseArgumentOptions(a,s,l,n);default:return this.error(De.MALFORMED_ARGUMENT,Re(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var a=this.clonePosition(),s=this.offset(),n=If(this.message,s),l=s+n.length;this.bumpTo(l);var c=this.clonePosition(),d=Re(a,c);return{value:n,location:d}},e.prototype.parseArgumentOptions=function(a,s,n,l){var c,d=this.clonePosition(),m=this.parseIdentifierIfPossible().value,f=this.clonePosition();switch(m){case"":return this.error(De.EXPECT_ARGUMENT_TYPE,Re(d,f));case"number":case"date":case"time":{this.bumpSpace();var p=null;if(this.bumpIf(",")){this.bumpSpace();var b=this.clonePosition(),v=this.parseSimpleArgStyleIfPossible();if(v.err)return v;var _=d5(v.val);if(_.length===0)return this.error(De.EXPECT_ARGUMENT_STYLE,Re(this.clonePosition(),this.clonePosition()));var S=Re(b,this.clonePosition());p={style:_,styleLocation:S}}var w=this.tryParseArgumentClose(l);if(w.err)return w;var E=Re(l,this.clonePosition());if(p&&bv(p?.style,"::",0)){var z=u5(p.style.slice(2));if(m==="number"){var v=this.parseNumberSkeletonFromString(z,p.styleLocation);return v.err?v:{val:{type:at.number,value:n,location:E,style:v.val},err:null}}else{if(z.length===0)return this.error(De.EXPECT_DATE_TIME_SKELETON,E);var N=z;this.locale&&(N=ZS(z,this.locale));var _={type:Dn.dateTime,pattern:N,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?FS(N):{}},T=m==="date"?at.date:at.time;return{val:{type:T,value:n,location:E,style:_},err:null}}}return{val:{type:m==="number"?at.number:m==="date"?at.date:at.time,value:n,location:E,style:(c=p?.style)!==null&&c!==void 0?c:null},err:null}}case"plural":case"selectordinal":case"select":{var D=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(De.EXPECT_SELECT_ARGUMENT_OPTIONS,Re(D,ce({},D)));this.bumpSpace();var M=this.parseIdentifierIfPossible(),A=0;if(m!=="select"&&M.value==="offset"){if(!this.bumpIf(":"))return this.error(De.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var v=this.tryParseDecimalInteger(De.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,De.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(v.err)return v;this.bumpSpace(),M=this.parseIdentifierIfPossible(),A=v.val}var H=this.tryParsePluralOrSelectOptions(a,m,s,M);if(H.err)return H;var w=this.tryParseArgumentClose(l);if(w.err)return w;var K=Re(l,this.clonePosition());return m==="select"?{val:{type:at.select,value:n,options:vv(H.val),location:K},err:null}:{val:{type:at.plural,value:n,options:vv(H.val),offset:A,pluralType:m==="plural"?"cardinal":"ordinal",location:K},err:null}}default:return this.error(De.INVALID_ARGUMENT_TYPE,Re(d,f))}},e.prototype.tryParseArgumentClose=function(a){return this.isEOF()||this.char()!==125?this.error(De.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var a=0,s=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var l=this.clonePosition();if(!this.bumpUntil("'"))return this.error(De.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Re(l,this.clonePosition()));this.bump();break}case 123:{a+=1,this.bump();break}case 125:{if(a>0)a-=1;else return{val:this.message.slice(s.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(s.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(a,s){var n=[];try{n=GS(a)}catch{return this.error(De.INVALID_NUMBER_SKELETON,s)}return{val:{type:Dn.number,tokens:n,location:s,parsedOptions:this.shouldParseSkeletons?QS(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(a,s,n,l){for(var c,d=!1,m=[],f=new Set,p=l.value,b=l.location;;){if(p.length===0){var v=this.clonePosition();if(s!=="select"&&this.bumpIf("=")){var _=this.tryParseDecimalInteger(De.EXPECT_PLURAL_ARGUMENT_SELECTOR,De.INVALID_PLURAL_ARGUMENT_SELECTOR);if(_.err)return _;b=Re(v,this.clonePosition()),p=this.message.slice(v.offset,this.offset())}else break}if(f.has(p))return this.error(s==="select"?De.DUPLICATE_SELECT_ARGUMENT_SELECTOR:De.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,b);p==="other"&&(d=!0),this.bumpSpace();var S=this.clonePosition();if(!this.bumpIf("{"))return this.error(s==="select"?De.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:De.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Re(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(a+1,s,n);if(w.err)return w;var E=this.tryParseArgumentClose(S);if(E.err)return E;m.push([p,{value:w.val,location:Re(S,this.clonePosition())}]),f.add(p),this.bumpSpace(),c=this.parseIdentifierIfPossible(),p=c.value,b=c.location}return m.length===0?this.error(s==="select"?De.EXPECT_SELECT_ARGUMENT_SELECTOR:De.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(De.MISSING_OTHER_CLAUSE,Re(this.clonePosition(),this.clonePosition())):{val:m,err:null}},e.prototype.tryParseDecimalInteger=function(a,s){var n=1,l=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var c=!1,d=0;!this.isEOF();){var m=this.char();if(m>=48&&m<=57)c=!0,d=d*10+(m-48),this.bump();else break}var f=Re(l,this.clonePosition());return c?(d*=n,l5(d)?{val:d,err:null}:this.error(s,f)):this.error(a,f)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var a=this.position.offset;if(a>=this.message.length)throw Error("out of bound");var s=by(this.message,a);if(s===void 0)throw Error("Offset ".concat(a," is at invalid UTF-16 code unit boundary"));return s},e.prototype.error=function(a,s){return{val:null,err:{kind:a,message:this.message,location:s}}},e.prototype.bump=function(){if(!this.isEOF()){var a=this.char();a===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=a<65536?1:2)}},e.prototype.bumpIf=function(a){if(bv(this.message,a,this.offset())){for(var s=0;s<a.length;s++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(a){var s=this.offset(),n=this.message.indexOf(a,s);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(a){if(this.offset()>a)throw Error("targetOffset ".concat(a," must be greater than or equal to the current offset ").concat(this.offset()));for(a=Math.min(a,this.message.length);;){var s=this.offset();if(s===a)break;if(s>a)throw Error("targetOffset ".concat(a," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&yy(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var a=this.char(),s=this.offset(),n=this.message.charCodeAt(s+(a>=65536?2:1));return n??null},e})();function Vf(e){return e>=97&&e<=122||e>=65&&e<=90}function f5(e){return Vf(e)||e===47}function p5(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function yy(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function m5(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Pf(e){e.forEach(function(a){if(delete a.location,cy(a)||uy(a))for(var s in a.options)delete a.options[s].location,Pf(a.options[s].value);else ny(a)&&hy(a.style)||(oy(a)||ly(a))&&Hf(a.style)?delete a.style.location:dy(a)&&Pf(a.children)})}function g5(e,a){a===void 0&&(a={}),a=ce({shouldParseSkeletons:!0,requiresOtherClause:!0},a);var s=new h5(e,a).parse();if(s.err){var n=SyntaxError(De[s.err.kind]);throw n.location=s.err.location,n.originalMessage=s.err.message,n}return a?.captureLocation||Pf(s.val),s.val}var Li;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Li||(Li={}));var Gs=(function(e){ti(a,e);function a(s,n,l){var c=e.call(this,s)||this;return c.code=n,c.originalMessage=l,c}return a.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},a})(Error),_v=(function(e){ti(a,e);function a(s,n,l,c){return e.call(this,'Invalid values for "'.concat(s,'": "').concat(n,'". Options are "').concat(Object.keys(l).join('", "'),'"'),Li.INVALID_VALUE,c)||this}return a})(Gs),b5=(function(e){ti(a,e);function a(s,n,l){return e.call(this,'Value for "'.concat(s,'" must be of type ').concat(n),Li.INVALID_VALUE,l)||this}return a})(Gs),v5=(function(e){ti(a,e);function a(s,n){return e.call(this,'The intl string context variable "'.concat(s,'" was not provided to the string "').concat(n,'"'),Li.MISSING_VALUE,n)||this}return a})(Gs),oa;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(oa||(oa={}));function y5(e){return e.length<2?e:e.reduce(function(a,s){var n=a[a.length-1];return!n||n.type!==oa.literal||s.type!==oa.literal?a.push(s):n.value+=s.value,a},[])}function _y(e){return typeof e=="function"}function su(e,a,s,n,l,c,d){if(e.length===1&&fv(e[0]))return[{type:oa.literal,value:e[0].value}];for(var m=[],f=0,p=e;f<p.length;f++){var b=p[f];if(fv(b)){m.push({type:oa.literal,value:b.value});continue}if(VS(b)){typeof c=="number"&&m.push({type:oa.literal,value:s.getNumberFormat(a).format(c)});continue}var v=b.value;if(!(l&&v in l))throw new v5(v,d);var _=l[v];if(IS(b)){(!_||typeof _=="string"||typeof _=="number")&&(_=typeof _=="string"||typeof _=="number"?String(_):""),m.push({type:typeof _=="string"?oa.literal:oa.object,value:_});continue}if(oy(b)){var S=typeof b.style=="string"?n.date[b.style]:Hf(b.style)?b.style.parsedOptions:void 0;m.push({type:oa.literal,value:s.getDateTimeFormat(a,S).format(_)});continue}if(ly(b)){var S=typeof b.style=="string"?n.time[b.style]:Hf(b.style)?b.style.parsedOptions:n.time.medium;m.push({type:oa.literal,value:s.getDateTimeFormat(a,S).format(_)});continue}if(ny(b)){var S=typeof b.style=="string"?n.number[b.style]:hy(b.style)?b.style.parsedOptions:void 0;S&&S.scale&&(_=_*(S.scale||1)),m.push({type:oa.literal,value:s.getNumberFormat(a,S).format(_)});continue}if(dy(b)){var w=b.children,E=b.value,z=l[E];if(!_y(z))throw new b5(E,"function",d);var N=su(w,a,s,n,l,c),T=z(N.map(function(A){return A.value}));Array.isArray(T)||(T=[T]),m.push.apply(m,T.map(function(A){return{type:typeof A=="string"?oa.literal:oa.object,value:A}}))}if(cy(b)){var D=b.options[_]||b.options.other;if(!D)throw new _v(b.value,_,Object.keys(b.options),d);m.push.apply(m,su(D.value,a,s,n,l));continue}if(uy(b)){var D=b.options["=".concat(_)];if(!D){if(!Intl.PluralRules)throw new Gs(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Li.MISSING_INTL_API,d);var M=s.getPluralRules(a,{type:b.pluralType}).select(_-(b.offset||0));D=b.options[M]||b.options.other}if(!D)throw new _v(b.value,_,Object.keys(b.options),d);m.push.apply(m,su(D.value,a,s,n,l,_-(b.offset||0)));continue}}return y5(m)}function _5(e,a){return a?ce(ce(ce({},e||{}),a||{}),Object.keys(e).reduce(function(s,n){return s[n]=ce(ce({},e[n]),a[n]||{}),s},{})):e}function x5(e,a){return a?Object.keys(e).reduce(function(s,n){return s[n]=_5(e[n],a[n]),s},ce({},e)):e}function rf(e){return{create:function(){return{get:function(a){return e[a]},set:function(a,s){e[a]=s}}}}}function w5(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ti(function(){for(var a,s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];return new((a=Intl.NumberFormat).bind.apply(a,Mi([void 0],s,!1)))},{cache:rf(e.number),strategy:zi.variadic}),getDateTimeFormat:Ti(function(){for(var a,s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];return new((a=Intl.DateTimeFormat).bind.apply(a,Mi([void 0],s,!1)))},{cache:rf(e.dateTime),strategy:zi.variadic}),getPluralRules:Ti(function(){for(var a,s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];return new((a=Intl.PluralRules).bind.apply(a,Mi([void 0],s,!1)))},{cache:rf(e.pluralRules),strategy:zi.variadic})}}var xy=(function(){function e(a,s,n,l){s===void 0&&(s=e.defaultLocale);var c=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(f){var p=c.formatToParts(f);if(p.length===1)return p[0].value;var b=p.reduce(function(v,_){return!v.length||_.type!==oa.literal||typeof v[v.length-1]!="string"?v.push(_.value):v[v.length-1]+=_.value,v},[]);return b.length<=1?b[0]||"":b},this.formatToParts=function(f){return su(c.ast,c.locales,c.formatters,c.formats,f,void 0,c.message)},this.resolvedOptions=function(){var f;return{locale:((f=c.resolvedLocale)===null||f===void 0?void 0:f.toString())||Intl.NumberFormat.supportedLocalesOf(c.locales)[0]}},this.getAst=function(){return c.ast},this.locales=s,this.resolvedLocale=e.resolveLocale(s),typeof a=="string"){if(this.message=a,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=l||{};d.formatters;var m=Mn(d,["formatters"]);this.ast=e.__parse(a,ce(ce({},m),{locale:this.resolvedLocale}))}else this.ast=a;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=x5(e.formats,n),this.formatters=l&&l.formatters||w5(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(a){if(!(typeof Intl.Locale>"u")){var s=Intl.NumberFormat.supportedLocalesOf(a);return s.length>0?new Intl.Locale(s[0]):new Intl.Locale(typeof a=="string"?a:a[0])}},e.__parse=g5,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e})(),zr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(zr||(zr={}));var wl=(function(e){ti(a,e);function a(s,n,l){var c=this,d=l?l instanceof Error?l:new Error(String(l)):void 0;return c=e.call(this,"[@formatjs/intl Error ".concat(s,"] ").concat(n,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,c.code=s,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(c,a),c}return a})(Error),S5=(function(e){ti(a,e);function a(s,n){return e.call(this,zr.UNSUPPORTED_FORMATTER,s,n)||this}return a})(wl),C5=(function(e){ti(a,e);function a(s,n){return e.call(this,zr.INVALID_CONFIG,s,n)||this}return a})(wl),xv=(function(e){ti(a,e);function a(s,n){return e.call(this,zr.MISSING_DATA,s,n)||this}return a})(wl),ai=(function(e){ti(a,e);function a(s,n,l){var c=e.call(this,zr.FORMAT_ERROR,"".concat(s,`
Locale: `).concat(n,`
`),l)||this;return c.locale=n,c}return a})(wl),nf=(function(e){ti(a,e);function a(s,n,l,c){var d=e.call(this,"".concat(s,`
MessageID: `).concat(l?.id,`
Default Message: `).concat(l?.defaultMessage,`
Description: `).concat(l?.description,`
`),n,c)||this;return d.descriptor=l,d.locale=n,d}return a})(ai),k5=(function(e){ti(a,e);function a(s,n){var l=e.call(this,zr.MISSING_TRANSLATION,'Missing message: "'.concat(s.id,'" for locale "').concat(n,'", using ').concat(s.defaultMessage?"default message (".concat(typeof s.defaultMessage=="string"?s.defaultMessage:s.defaultMessage.map(function(c){var d;return(d=c.value)!==null&&d!==void 0?d:JSON.stringify(c)}).join(),")"):"id"," as fallback."))||this;return l.descriptor=s,l}return a})(wl);function E5(e,a,s){if(s===void 0&&(s=Error),!e)throw new s(a)}function Bn(e,a,s){return s===void 0&&(s={}),a.reduce(function(n,l){return l in e?n[l]=e[l]:l in s&&(n[l]=s[l]),n},{})}var $5=function(e){},A5=function(e){},wy={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:$5,onWarn:A5};function Sy(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function _r(e){return{create:function(){return{get:function(a){return e[a]},set:function(a,s){e[a]=s}}}}}function T5(e){e===void 0&&(e=Sy());var a=Intl.RelativeTimeFormat,s=Intl.ListFormat,n=Intl.DisplayNames,l=Ti(function(){for(var m,f=[],p=0;p<arguments.length;p++)f[p]=arguments[p];return new((m=Intl.DateTimeFormat).bind.apply(m,Mi([void 0],f,!1)))},{cache:_r(e.dateTime),strategy:zi.variadic}),c=Ti(function(){for(var m,f=[],p=0;p<arguments.length;p++)f[p]=arguments[p];return new((m=Intl.NumberFormat).bind.apply(m,Mi([void 0],f,!1)))},{cache:_r(e.number),strategy:zi.variadic}),d=Ti(function(){for(var m,f=[],p=0;p<arguments.length;p++)f[p]=arguments[p];return new((m=Intl.PluralRules).bind.apply(m,Mi([void 0],f,!1)))},{cache:_r(e.pluralRules),strategy:zi.variadic});return{getDateTimeFormat:l,getNumberFormat:c,getMessageFormat:Ti(function(m,f,p,b){return new xy(m,f,p,ce({formatters:{getNumberFormat:c,getDateTimeFormat:l,getPluralRules:d}},b||{}))},{cache:_r(e.message),strategy:zi.variadic}),getRelativeTimeFormat:Ti(function(){for(var m=[],f=0;f<arguments.length;f++)m[f]=arguments[f];return new(a.bind.apply(a,Mi([void 0],m,!1)))},{cache:_r(e.relativeTime),strategy:zi.variadic}),getPluralRules:d,getListFormat:Ti(function(){for(var m=[],f=0;f<arguments.length;f++)m[f]=arguments[f];return new(s.bind.apply(s,Mi([void 0],m,!1)))},{cache:_r(e.list),strategy:zi.variadic}),getDisplayNames:Ti(function(){for(var m=[],f=0;f<arguments.length;f++)m[f]=arguments[f];return new(n.bind.apply(n,Mi([void 0],m,!1)))},{cache:_r(e.displayNames),strategy:zi.variadic})}}function Cp(e,a,s,n){var l=e&&e[a],c;if(l&&(c=l[s]),c)return c;n(new S5("No ".concat(a," format named: ").concat(s)))}function Xc(e,a){return Object.keys(e).reduce(function(s,n){return s[n]=ce({timeZone:a},e[n]),s},{})}function wv(e,a){var s=Object.keys(ce(ce({},e),a));return s.reduce(function(n,l){return n[l]=ce(ce({},e[l]||{}),a[l]||{}),n},{})}function Sv(e,a){if(!a)return e;var s=xy.formats;return ce(ce(ce({},s),e),{date:wv(Xc(s.date,a),Xc(e.date||{},a)),time:wv(Xc(s.time,a),Xc(e.time||{},a))})}var Ff=function(e,a,s,n,l){var c=e.locale,d=e.formats,m=e.messages,f=e.defaultLocale,p=e.defaultFormats,b=e.fallbackOnEmptyString,v=e.onError,_=e.timeZone,S=e.defaultRichTextElements;s===void 0&&(s={id:""});var w=s.id,E=s.defaultMessage;E5(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var z=String(w),N=m&&Object.prototype.hasOwnProperty.call(m,z)&&m[z];if(Array.isArray(N)&&N.length===1&&N[0].type===at.literal)return N[0].value;if(!n&&N&&typeof N=="string"&&!S)return N.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=ce(ce({},S),n||{}),d=Sv(d,_),p=Sv(p,_),!N){if(b===!1&&N==="")return N;if((!E||c&&c.toLowerCase()!==f.toLowerCase())&&v(new k5(s,c)),E)try{var T=a.getMessageFormat(E,f,p,l);return T.format(n)}catch(D){return v(new nf('Error formatting default message for: "'.concat(z,'", rendering default message verbatim'),c,s,D)),typeof E=="string"?E:z}return z}try{var T=a.getMessageFormat(N,c,d,ce({formatters:a},l||{}));return T.format(n)}catch(D){v(new nf('Error formatting message: "'.concat(z,'", using ').concat(E?"default message":"id"," as fallback."),c,s,D))}if(E)try{var T=a.getMessageFormat(E,f,p,l);return T.format(n)}catch(D){v(new nf('Error formatting the default message for: "'.concat(z,'", rendering message verbatim'),c,s,D))}return typeof N=="string"?N:typeof E=="string"?E:z},z5=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Sl(e,a,s,n){var l=e.locale,c=e.formats,d=e.onError,m=e.timeZone;n===void 0&&(n={});var f=n.format,p=ce(ce({},m&&{timeZone:m}),f&&Cp(c,a,f,d)),b=Bn(n,z5,p);return a==="time"&&!b.hour&&!b.minute&&!b.second&&!b.timeStyle&&!b.dateStyle&&(b=ce(ce({},b),{hour:"numeric",minute:"numeric"})),s(l,b)}function M5(e,a){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];var l=s[0],c=s[1],d=c===void 0?{}:c,m=typeof l=="string"?new Date(l||0):l;try{return Sl(e,"date",a,d).format(m)}catch(f){e.onError(new ai("Error formatting date.",e.locale,f))}return String(m)}function N5(e,a){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];var l=s[0],c=s[1],d=c===void 0?{}:c,m=typeof l=="string"?new Date(l||0):l;try{return Sl(e,"time",a,d).format(m)}catch(f){e.onError(new ai("Error formatting time.",e.locale,f))}return String(m)}function O5(e,a){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];var l=s[0],c=s[1],d=s[2],m=d===void 0?{}:d,f=typeof l=="string"?new Date(l||0):l,p=typeof c=="string"?new Date(c||0):c;try{return Sl(e,"dateTimeRange",a,m).formatRange(f,p)}catch(b){e.onError(new ai("Error formatting date time range.",e.locale,b))}return String(f)}function D5(e,a){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];var l=s[0],c=s[1],d=c===void 0?{}:c,m=typeof l=="string"?new Date(l||0):l;try{return Sl(e,"date",a,d).formatToParts(m)}catch(f){e.onError(new ai("Error formatting date.",e.locale,f))}return[]}function L5(e,a){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];var l=s[0],c=s[1],d=c===void 0?{}:c,m=typeof l=="string"?new Date(l||0):l;try{return Sl(e,"time",a,d).formatToParts(m)}catch(f){e.onError(new ai("Error formatting time.",e.locale,f))}return[]}var R5=["style","type","fallback","languageDisplay"];function B5(e,a,s,n){var l=e.locale,c=e.onError,d=Intl.DisplayNames;d||c(new Gs(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Li.MISSING_INTL_API));var m=Bn(n,R5);try{return a(l,m).of(s)}catch(f){c(new ai("Error formatting display name.",l,f))}}var H5=["type","style"],Cv=Date.now();function U5(e){return"".concat(Cv,"_").concat(e,"_").concat(Cv)}function j5(e,a,s,n){n===void 0&&(n={});var l=Cy(e,a,s,n).reduce(function(c,d){var m=d.value;return typeof m!="string"?c.push(m):typeof c[c.length-1]=="string"?c[c.length-1]+=m:c.push(m),c},[]);return l.length===1?l[0]:l.length===0?"":l}function Cy(e,a,s,n){var l=e.locale,c=e.onError;n===void 0&&(n={});var d=Intl.ListFormat;d||c(new Gs(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Li.MISSING_INTL_API));var m=Bn(n,H5);try{var f={},p=Array.from(s).map(function(b,v){if(typeof b=="object"&&b!==null){var _=U5(v);return f[_]=b,_}return String(b)});return a(l,m).formatToParts(p).map(function(b){return b.type==="literal"?b:ce(ce({},b),{value:f[b.value]||b.value})})}catch(b){c(new ai("Error formatting list.",l,b))}return s}var I5=["type"];function V5(e,a,s,n){var l=e.locale,c=e.onError;n===void 0&&(n={}),Intl.PluralRules||c(new Gs(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Li.MISSING_INTL_API));var d=Bn(n,I5);try{return a(l,d).select(s)}catch(m){c(new ai("Error formatting plural.",l,m))}return"other"}var P5=["numeric","style"];function F5(e,a,s){var n=e.locale,l=e.formats,c=e.onError;s===void 0&&(s={});var d=s.format,m=!!d&&Cp(l,"relative",d,c)||{},f=Bn(s,P5,m);return a(n,f)}function q5(e,a,s,n,l){l===void 0&&(l={}),n||(n="second");var c=Intl.RelativeTimeFormat;c||e.onError(new Gs(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Li.MISSING_INTL_API));try{return F5(e,a,l).format(s,n)}catch(d){e.onError(new ai("Error formatting relative time.",e.locale,d))}return String(s)}var G5=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function ky(e,a,s){var n=e.locale,l=e.formats,c=e.onError;s===void 0&&(s={});var d=s.format,m=d&&Cp(l,"number",d,c)||{},f=Bn(s,G5,m);return a(n,f)}function Y5(e,a,s,n){n===void 0&&(n={});try{return ky(e,a,n).format(s)}catch(l){e.onError(new ai("Error formatting number.",e.locale,l))}return String(s)}function X5(e,a,s,n){n===void 0&&(n={});try{return ky(e,a,n).formatToParts(s)}catch(l){e.onError(new ai("Error formatting number.",e.locale,l))}return[]}function W5(e){var a=e?e[Object.keys(e)[0]]:void 0;return typeof a=="string"}function Q5(e){e.onWarn&&e.defaultRichTextElements&&W5(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Z5(e,a){var s=T5(a),n=ce(ce({},wy),e),l=n.locale,c=n.defaultLocale,d=n.onError;return l?!Intl.NumberFormat.supportedLocalesOf(l).length&&d?d(new xv('Missing locale data for locale: "'.concat(l,'" in Intl.NumberFormat. Using default locale: "').concat(c,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(l).length&&d&&d(new xv('Missing locale data for locale: "'.concat(l,'" in Intl.DateTimeFormat. Using default locale: "').concat(c,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new C5('"locale" was not configured, using "'.concat(c,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),n.locale=n.defaultLocale||"en"),Q5(n),ce(ce({},n),{formatters:s,formatNumber:Y5.bind(null,n,s.getNumberFormat),formatNumberToParts:X5.bind(null,n,s.getNumberFormat),formatRelativeTime:q5.bind(null,n,s.getRelativeTimeFormat),formatDate:M5.bind(null,n,s.getDateTimeFormat),formatDateToParts:D5.bind(null,n,s.getDateTimeFormat),formatTime:N5.bind(null,n,s.getDateTimeFormat),formatDateTimeRange:O5.bind(null,n,s.getDateTimeFormat),formatTimeToParts:L5.bind(null,n,s.getDateTimeFormat),formatPlural:V5.bind(null,n,s.getPluralRules),formatMessage:Ff.bind(null,n,s),$t:Ff.bind(null,n,s),formatList:j5.bind(null,n,s.getListFormat),formatListToParts:Cy.bind(null,n,s.getListFormat),formatDisplayName:B5.bind(null,n,s.getDisplayNames)})}function K5(e,a,s){if(s===void 0&&(s=Error),!e)throw new s(a)}function Ey(e){K5(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var $y=ce(ce({},wy),{textComponent:I.Fragment}),J5=function(e,a){return I.isValidElement(e)?I.cloneElement(e,{key:a}):e},Ay=function(e){var a;return(a=I.Children.map(e,J5))!==null&&a!==void 0?a:[]};function e4(e){return function(a){return e(Ay(a))}}function qf(e,a){if(e===a)return!0;if(!e||!a)return!1;var s=Object.keys(e),n=Object.keys(a),l=s.length;if(n.length!==l)return!1;for(var c=0;c<l;c++){var d=s[c];if(e[d]!==a[d]||!Object.prototype.hasOwnProperty.call(a,d))return!1}return!0}var of={exports:{}},qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function t4(){if(kv)return qe;kv=1;var e=typeof Symbol=="function"&&Symbol.for,a=e?Symbol.for("react.element"):60103,s=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,l=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,m=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,b=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,z=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function D(A){if(typeof A=="object"&&A!==null){var H=A.$$typeof;switch(H){case a:switch(A=A.type,A){case f:case p:case n:case c:case l:case v:return A;default:switch(A=A&&A.$$typeof,A){case m:case b:case w:case S:case d:return A;default:return H}}case s:return H}}}function M(A){return D(A)===p}return qe.AsyncMode=f,qe.ConcurrentMode=p,qe.ContextConsumer=m,qe.ContextProvider=d,qe.Element=a,qe.ForwardRef=b,qe.Fragment=n,qe.Lazy=w,qe.Memo=S,qe.Portal=s,qe.Profiler=c,qe.StrictMode=l,qe.Suspense=v,qe.isAsyncMode=function(A){return M(A)||D(A)===f},qe.isConcurrentMode=M,qe.isContextConsumer=function(A){return D(A)===m},qe.isContextProvider=function(A){return D(A)===d},qe.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===a},qe.isForwardRef=function(A){return D(A)===b},qe.isFragment=function(A){return D(A)===n},qe.isLazy=function(A){return D(A)===w},qe.isMemo=function(A){return D(A)===S},qe.isPortal=function(A){return D(A)===s},qe.isProfiler=function(A){return D(A)===c},qe.isStrictMode=function(A){return D(A)===l},qe.isSuspense=function(A){return D(A)===v},qe.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===n||A===p||A===c||A===l||A===v||A===_||typeof A=="object"&&A!==null&&(A.$$typeof===w||A.$$typeof===S||A.$$typeof===d||A.$$typeof===m||A.$$typeof===b||A.$$typeof===z||A.$$typeof===N||A.$$typeof===T||A.$$typeof===E)},qe.typeOf=D,qe}var Ev;function a4(){return Ev||(Ev=1,of.exports=t4()),of.exports}var lf,$v;function i4(){if($v)return lf;$v=1;var e=a4(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[e.ForwardRef]=n,c[e.Memo]=l;function d(w){return e.isMemo(w)?l:c[w.$$typeof]||a}var m=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,_=Object.prototype;function S(w,E,z){if(typeof E!="string"){if(_){var N=v(E);N&&N!==_&&S(w,N,z)}var T=f(E);p&&(T=T.concat(p(E)));for(var D=d(w),M=d(E),A=0;A<T.length;++A){var H=T[A];if(!s[H]&&!(z&&z[H])&&!(M&&M[H])&&!(D&&D[H])){var K=b(E,H);try{m(w,H,K)}catch{}}}}return w}return lf=S,lf}i4();var kp=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=I.createContext(null)):I.createContext(null);kp.Consumer;var s4=kp.Provider,r4=s4,n4=kp;function Ve(){var e=I.useContext(n4);return Ey(e),e}var Gf;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Gf||(Gf={}));var Yf;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Yf||(Yf={}));function Ty(e){var a=function(s){var n=Ve(),l=s.value,c=s.children,d=Mn(s,["value","children"]),m=typeof l=="string"?new Date(l||0):l,f=e==="formatDate"?n.formatDateToParts(m,d):n.formatTimeToParts(m,d);return c(f)};return a.displayName=Yf[e],a}function Cl(e){var a=function(s){var n=Ve(),l=s.value,c=s.children,d=Mn(s,["value","children"]),m=n[e](l,d);if(typeof c=="function")return c(m);var f=n.textComponent||I.Fragment;return I.createElement(f,null,m)};return a.displayName=Gf[e],a}function zy(e){return e&&Object.keys(e).reduce(function(a,s){var n=e[s];return a[s]=_y(n)?e4(n):n,a},{})}var Av=function(e,a,s,n){for(var l=[],c=4;c<arguments.length;c++)l[c-4]=arguments[c];var d=zy(n),m=Ff.apply(void 0,Mi([e,a,s,d],l,!1));return Array.isArray(m)?Ay(m):m},Tv=function(e,a){var s=e.defaultRichTextElements,n=Mn(e,["defaultRichTextElements"]),l=zy(s),c=Z5(ce(ce(ce({},$y),n),{defaultRichTextElements:l}),a),d={locale:c.locale,timeZone:c.timeZone,fallbackOnEmptyString:c.fallbackOnEmptyString,formats:c.formats,defaultLocale:c.defaultLocale,defaultFormats:c.defaultFormats,messages:c.messages,onError:c.onError,defaultRichTextElements:l};return ce(ce({},c),{formatMessage:Av.bind(null,d,c.formatters),$t:Av.bind(null,d,c.formatters)})};function o4(e,a){var s=e.values,n=Mn(e,["values"]),l=a.values,c=Mn(a,["values"]);return qf(l,s)&&qf(n,c)}function My(e){var a=Ve(),s=a.formatMessage,n=a.textComponent,l=n===void 0?I.Fragment:n,c=e.id,d=e.description,m=e.defaultMessage,f=e.values,p=e.children,b=e.tagName,v=b===void 0?l:b,_=e.ignoreTag,S={id:c,description:d,defaultMessage:m},w=s(S,f,{ignoreTag:_});return typeof p=="function"?p(Array.isArray(w)?w:[w]):v?I.createElement(v,null,w):I.createElement(I.Fragment,null,w)}My.displayName="FormattedMessage";var $e=I.memo(My,o4);$e.displayName="MemoizedFormattedMessage";function cf(e){return{locale:e.locale,timeZone:e.timeZone,fallbackOnEmptyString:e.fallbackOnEmptyString,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,onWarn:e.onWarn,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}var Ny=(function(e){ti(a,e);function a(){var s=e!==null&&e.apply(this,arguments)||this;return s.cache=Sy(),s.state={cache:s.cache,intl:Tv(cf(s.props),s.cache),prevConfig:cf(s.props)},s}return a.getDerivedStateFromProps=function(s,n){var l=n.prevConfig,c=n.cache,d=cf(s);return qf(l,d)?null:{intl:Tv(d,c),prevConfig:d}},a.prototype.render=function(){return Ey(this.state.intl),I.createElement(r4,{value:this.state.intl},this.props.children)},a.displayName="IntlProvider",a.defaultProps=$y,a})(I.PureComponent);Cl("formatDate");Cl("formatTime");Cl("formatNumber");Cl("formatList");Cl("formatDisplayName");Ty("formatDate");Ty("formatTime");var l4=fe`
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
`,Et=class extends oe{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,a=e?mu`a`:mu`button`;return cl`
      <${a}
        part="base"
        class=${me({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${ne(e?void 0:this.disabled)}
        type=${ne(e?void 0:"button")}
        href=${ne(e?this.href:void 0)}
        target=${ne(e?this.target:void 0)}
        download=${ne(e?this.download:void 0)}
        rel=${ne(e&&this.target?"noreferrer noopener":void 0)}
        role=${ne(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${ne(this.name)}
          library=${ne(this.library)}
          src=${ne(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${a}>
    `}};Et.styles=[ge,l4];Et.dependencies={"sl-icon":Ke};g([te(".icon-button")],Et.prototype,"button",2);g([pe()],Et.prototype,"hasFocus",2);g([C()],Et.prototype,"name",2);g([C()],Et.prototype,"library",2);g([C()],Et.prototype,"src",2);g([C()],Et.prototype,"href",2);g([C()],Et.prototype,"target",2);g([C()],Et.prototype,"download",2);g([C()],Et.prototype,"label",2);g([C({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);var c4="sl-icon-button";Et.define("sl-icon-button");var u4=de({tagName:c4,elementClass:Et,react:ue,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),_t=u4;const d4="_header_1p7bs_1",h4="_logo_1p7bs_29",uf={header:d4,logo:h4};function ls({headerActions:e,showBackButton:a=!1,onBack:s}){const n=Ve(),l=Ba(),c=()=>{s?s():l(-1)};return x.jsxs("header",{className:uf.header,children:[a?x.jsx(_t,{name:"chevron-left",label:n.formatMessage({id:"navigation.back"}),onClick:c}):x.jsx("div",{"data-testid":"header-logo",className:uf.logo}),x.jsx("div",{className:uf.actions,children:e})]})}function ru(e,a,s){const n=uu(e,s?.in);return isNaN(a)?du(e,NaN):(a&&n.setDate(n.getDate()+a),n)}function f4(e,a,s){const n=uu(e,s?.in);if(isNaN(a))return du(e,NaN);const l=n.getDate(),c=du(e,n.getTime());c.setMonth(n.getMonth()+a+1,0);const d=c.getDate();return l>=d?c:(n.setFullYear(c.getFullYear(),c.getMonth(),l),n)}function p4(e,a,s){return ru(e,a*7,s)}function m4(e,a,s){return f4(e,a*12,s)}function g4(e,a,s){const[n,l]=Wx(s?.in,e,a),c=zv(n,l),d=Math.abs(Qx(n,l));n.setDate(n.getDate()-c*d);const m=+(zv(n,l)===-c),f=c*(d-m);return f===0?0:f}function zv(e,a){const s=e.getFullYear()-a.getFullYear()||e.getMonth()-a.getMonth()||e.getDate()-a.getDate()||e.getHours()-a.getHours()||e.getMinutes()-a.getMinutes()||e.getSeconds()-a.getSeconds()||e.getMilliseconds()-a.getMilliseconds();return s<0?-1:s>0?1:s}function nu(e,a){const s=()=>du(a?.in,NaN),l=_4(e);let c;if(l.date){const p=x4(l.date,2);c=w4(p.restDateString,p.year)}if(!c||isNaN(+c))return s();const d=+c;let m=0,f;if(l.time&&(m=S4(l.time),isNaN(m)))return s();if(l.timezone){if(f=C4(l.timezone),isNaN(f))return s()}else{const p=new Date(d+m),b=uu(0,a?.in);return b.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),b.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),b}return uu(d+m+f,a?.in)}const Wc={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},b4=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,v4=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,y4=/^([+-])(\d{2})(?::?(\d{2}))?$/;function _4(e){const a={},s=e.split(Wc.dateTimeDelimiter);let n;if(s.length>2)return a;if(/:/.test(s[0])?n=s[0]:(a.date=s[0],n=s[1],Wc.timeZoneDelimiter.test(a.date)&&(a.date=e.split(Wc.timeZoneDelimiter)[0],n=e.substr(a.date.length,e.length))),n){const l=Wc.timezone.exec(n);l?(a.time=n.replace(l[1],""),a.timezone=l[1]):a.time=n}return a}function x4(e,a){const s=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+a)+"})|(\\d{2}|[+-]\\d{"+(2+a)+"})$)"),n=e.match(s);if(!n)return{year:NaN,restDateString:""};const l=n[1]?parseInt(n[1]):null,c=n[2]?parseInt(n[2]):null;return{year:c===null?l:c*100,restDateString:e.slice((n[1]||n[2]).length)}}function w4(e,a){if(a===null)return new Date(NaN);const s=e.match(b4);if(!s)return new Date(NaN);const n=!!s[4],l=Ko(s[1]),c=Ko(s[2])-1,d=Ko(s[3]),m=Ko(s[4]),f=Ko(s[5])-1;if(n)return T4(a,m,f)?k4(a,m,f):new Date(NaN);{const p=new Date(0);return!$4(a,c,d)||!A4(a,l)?new Date(NaN):(p.setUTCFullYear(a,c,Math.max(l,d)),p)}}function Ko(e){return e?parseInt(e):1}function S4(e){const a=e.match(v4);if(!a)return NaN;const s=df(a[1]),n=df(a[2]),l=df(a[3]);return z4(s,n,l)?s*x1+n*w1+l*1e3:NaN}function df(e){return e&&parseFloat(e.replace(",","."))||0}function C4(e){if(e==="Z")return 0;const a=e.match(y4);if(!a)return 0;const s=a[1]==="+"?-1:1,n=parseInt(a[2]),l=a[3]&&parseInt(a[3])||0;return M4(n,l)?s*(n*x1+l*w1):NaN}function k4(e,a,s){const n=new Date(0);n.setUTCFullYear(e,0,4);const l=n.getUTCDay()||7,c=(a-1)*7+s+1-l;return n.setUTCDate(n.getUTCDate()+c),n}const E4=[31,null,31,30,31,30,31,31,30,31,30,31];function Oy(e){return e%400===0||e%4===0&&e%100!==0}function $4(e,a,s){return a>=0&&a<=11&&s>=1&&s<=(E4[a]||(Oy(e)?29:28))}function A4(e,a){return a>=1&&a<=(Oy(e)?366:365)}function T4(e,a,s){return a>=1&&a<=53&&s>=0&&s<=6}function z4(e,a,s){return e===24?a===0&&s===0:s>=0&&s<60&&a>=0&&a<60&&e>=0&&e<25}function M4(e,a){return a>=0&&a<=59}function N4(e,a,s){return p4(e,-4,s)}function Mv(e,a,s){return m4(e,-13,s)}const O4=Ab.default||Ab;async function D4(e,a,s){const{value:n}=await Ef.canShare();if(!n){console.warn("Sharing is not available on this device.");return}const l=document.getElementById(e);if(!l){console.error(`Element with ID "${e}" not found.`);return}const c=l.querySelector(".hide-for-sharing");c&&(c.style.visibility="hidden");const d=document.createElement("div");d.style.position="absolute",d.style.left="-9999px",d.style.top="0",d.style.overflow="visible",d.style.height="auto",d.style.width="auto",d.style.maxHeight="none",d.style.maxWidth="none";const m=l.cloneNode(!0);m.style.width="auto",m.style.height="auto",m.style.maxHeight="none",m.style.overflow="visible";const f=m.querySelector(".weekGroup");f&&(f.style.overflow="visible",f.style.height="auto",f.style.width="auto",f.style.maxHeight="none",f.style.maxWidth="none"),d.appendChild(m),document.body.appendChild(d);try{const b=(await O4(d,{useCORS:!0,scale:2})).toDataURL("image/png");if(Ar.isNativePlatform()){const v=await Zx.writeFile({path:`share-${Date.now()}.png`,data:b,directory:Kx.Cache});await Ef.share({title:a,text:s,files:[v.uri]})}else{const v=await(await fetch(b)).blob(),_=new File([v],"roster.png",{type:"image/png"}),S={title:a,text:s,files:[_]};if(navigator.canShare&&navigator.canShare(S))await navigator.share(S);else{const w=document.createElement("a");w.href=b,w.download=`roster-${Date.now()}.png`,document.body.appendChild(w),w.click(),document.body.removeChild(w)}}}catch(p){console.error("Could not share image:",p)}finally{c&&(c.style.visibility="visible"),document.body.removeChild(d)}}async function L4(e,a,s,n){const l=Ar.isNativePlatform()?"https://ismyhorse.com":window.location.origin;await Ef.share({title:a,text:s,url:`${l}${e}`,dialogTitle:n})}var R4=fe`
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
`;function*Ep(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Ww(Ep(e.shadowRoot.activeElement))))}function Dy(){return[...Ep()].pop()}var Nv=new WeakMap;function Ly(e){let a=Nv.get(e);return a||(a=window.getComputedStyle(e,null),Nv.set(e,a)),a}function B4(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const a=Ly(e);return a.visibility!=="hidden"&&a.display!=="none"}function H4(e){const a=Ly(e),{overflowY:s,overflowX:n}=a;return s==="scroll"||n==="scroll"?!0:s!=="auto"||n!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&n==="auto"}function U4(e){const a=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(a==="input"&&e.getAttribute("type")==="radio"){const c=e.getRootNode(),d=`input[type='radio'][name="${e.getAttribute("name")}"]`,m=c.querySelector(`${d}:checked`);return m?m===e:c.querySelector(d)===e}return B4(e)?(a==="audio"||a==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(a)?!0:H4(e):!1}function j4(e){var a,s;const n=Xf(e),l=(a=n[0])!=null?a:null,c=(s=n[n.length-1])!=null?s:null;return{start:l,end:c}}function I4(e,a){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==a}function Xf(e){const a=new WeakMap,s=[];function n(l){if(l instanceof Element){if(l.hasAttribute("inert")||l.closest("[inert]")||a.has(l))return;a.set(l,!0),!s.includes(l)&&U4(l)&&s.push(l),l instanceof HTMLSlotElement&&I4(l,e)&&l.assignedElements({flatten:!0}).forEach(c=>{n(c)}),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&n(l.shadowRoot)}for(const c of l.children)n(c)}return n(e),s.sort((l,c)=>{const d=Number(l.getAttribute("tabindex"))||0;return(Number(c.getAttribute("tabindex"))||0)-d})}var Jo=[],Ry=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=a=>{var s;if(a.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const n=Dy();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;a.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const l=Xf(this.element);let c=l.findIndex(m=>m===n);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){c+d>=l.length?c=0:c+d<0?c=l.length-1:c+=d,this.previousFocus=this.currentFocus;const m=l[c];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||m&&this.possiblyHasTabbableChildren(m))return;a.preventDefault(),this.currentFocus=m,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const f=[...Ep()];if(f.includes(this.currentFocus)||!f.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Jo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Jo=Jo.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Jo[Jo.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Xf(this.element);if(!this.element.matches(":focus-within")){const a=e[0],s=e[e.length-1],n=this.tabDirection==="forward"?a:s;typeof n?.focus=="function"&&(this.currentFocus=n,n.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function V4(e,a){return{top:Math.round(e.getBoundingClientRect().top-a.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-a.getBoundingClientRect().left)}}var Wf=new Set;function P4(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function F4(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function ul(e){if(Wf.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const a=P4()+F4();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),a<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${a}px`)}}function dl(e){Wf.delete(e),Wf.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Qf(e,a,s="vertical",n="smooth"){const l=V4(e,a),c=l.top+a.scrollTop,d=l.left+a.scrollLeft,m=a.scrollLeft,f=a.scrollLeft+a.offsetWidth,p=a.scrollTop,b=a.scrollTop+a.offsetHeight;(s==="horizontal"||s==="both")&&(d<m?a.scrollTo({left:d,behavior:n}):d+e.clientWidth>f&&a.scrollTo({left:d-a.offsetWidth+e.clientWidth,behavior:n})),(s==="vertical"||s==="both")&&(c<p?a.scrollTo({top:c,behavior:n}):c+e.clientHeight>b&&a.scrollTo({top:c-a.offsetHeight+e.clientHeight,behavior:n}))}var $p=e=>{var a;const{activeElement:s}=document;s&&e.contains(s)&&((a=document.activeElement)==null||a.blur())},By=new Map,q4=new WeakMap;function G4(e){return e??{keyframes:[],options:{duration:0}}}function Ov(e,a){return a.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ge(e,a){By.set(e,G4(a))}function st(e,a,s){const n=q4.get(e);if(n?.[a])return Ov(n[a],s.dir);const l=By.get(a);return l?Ov(l,s.dir):{keyframes:[],options:{duration:0}}}function ca(e,a){return new Promise(s=>{function n(l){l.target===e&&(e.removeEventListener(a,n),s())}e.addEventListener(a,n)})}function gt(e,a,s){return new Promise(n=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const l=e.animate(a,vl(ns({},s),{duration:Zf()?0:s.duration}));l.addEventListener("cancel",n,{once:!0}),l.addEventListener("finish",n,{once:!0})})}function Dv(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Zf(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kt(e){return Promise.all(e.getAnimations().map(a=>new Promise(s=>{a.cancel(),requestAnimationFrame(s)})))}function gu(e,a){return e.map(s=>vl(ns({},s),{height:s.height==="auto"?`${a}px`:s.height}))}function Lv(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ma=class extends oe{constructor(){super(...arguments),this.hasSlotController=new ua(this,"footer"),this.localize=new Ie(this),this.modal=new Ry(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ul(this)))}disconnectedCallback(){super.disconnectedCallback(),dl(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=st(this,"drawer.denyClose",{dir:this.localize.dir()});gt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ul(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([kt(this.drawer),kt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const a=st(this,`drawer.show${Lv(this.placement)}`,{dir:this.localize.dir()}),s=st(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([gt(this.panel,a.keyframes,a.options),gt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{$p(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),dl(this)),await Promise.all([kt(this.drawer),kt(this.overlay)]);const e=st(this,`drawer.hide${Lv(this.placement)}`,{dir:this.localize.dir()}),a=st(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([gt(this.overlay,a.keyframes,a.options).then(()=>{this.overlay.hidden=!0}),gt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ul(this)),this.open&&this.contained&&(this.modal.deactivate(),dl(this))}async show(){if(!this.open)return this.open=!0,ca(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ca(this,"sl-after-hide")}render(){return W`
      <div
        part="base"
        class=${me({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ne(this.noHeader?this.label:void 0)}
          aria-labelledby=${ne(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":W`
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
    `}};ma.styles=[ge,R4];ma.dependencies={"sl-icon-button":Et};g([te(".drawer")],ma.prototype,"drawer",2);g([te(".drawer__panel")],ma.prototype,"panel",2);g([te(".drawer__overlay")],ma.prototype,"overlay",2);g([C({type:Boolean,reflect:!0})],ma.prototype,"open",2);g([C({reflect:!0})],ma.prototype,"label",2);g([C({reflect:!0})],ma.prototype,"placement",2);g([C({type:Boolean,reflect:!0})],ma.prototype,"contained",2);g([C({attribute:"no-header",type:Boolean,reflect:!0})],ma.prototype,"noHeader",2);g([J("open",{waitUntilFirstUpdate:!0})],ma.prototype,"handleOpenChange",1);g([J("contained",{waitUntilFirstUpdate:!0})],ma.prototype,"handleNoModalChange",1);Ge("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ge("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Ge("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ge("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Ge("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ge("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Ge("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ge("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Ge("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Ge("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ge("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Y4="sl-drawer";ma.define("sl-drawer");var X4=de({tagName:Y4,elementClass:ma,react:ue,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"}),Hn=X4,W4=fe`
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
`,yi=class extends oe{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=W`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let a=W``;return this.initials?a=W`<div part="initials" class="avatar__initials">${this.initials}</div>`:a=W`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,W`
      <div
        part="base"
        class=${me({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:a}
      </div>
    `}};yi.styles=[ge,W4];yi.dependencies={"sl-icon":Ke};g([pe()],yi.prototype,"hasError",2);g([C()],yi.prototype,"image",2);g([C()],yi.prototype,"label",2);g([C()],yi.prototype,"initials",2);g([C()],yi.prototype,"loading",2);g([C({reflect:!0})],yi.prototype,"shape",2);g([J("image")],yi.prototype,"handleImageChange",1);var Q4="sl-avatar";yi.define("sl-avatar");var Z4=de({tagName:Q4,elementClass:yi,react:ue,events:{onSlError:"sl-error"},displayName:"SlAvatar"}),Is=Z4,K4=fe`
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
`,kl=class extends oe{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};kl.styles=[ge,K4];g([C({type:Boolean,reflect:!0})],kl.prototype,"vertical",2);g([J("vertical")],kl.prototype,"handleVerticalChange",1);var J4="sl-divider";kl.define("sl-divider");var e6=de({tagName:J4,elementClass:kl,react:ue,events:{},displayName:"SlDivider"}),Ap=e6;const t6="_drawer_49pal_2",a6="_container_49pal_10",i6="_listSection_49pal_15",s6="_listHeader_49pal_19",r6="_memberItem_49pal_28",n6="_clickable_49pal_44",o6="_memberName_49pal_54",l6="_emptyState_49pal_59",c6="_footerActions_49pal_65",$a={drawer:t6,container:a6,listSection:i6,listHeader:s6,memberItem:r6,clickable:n6,memberName:o6,emptyState:l6,footerActions:c6};function u6({roster:e,slot:a,allMembers:s,onClose:n,onSave:l}){const c=Ve(),d=np(),{data:m}=op({enabled:!!d?.user.id}),{data:f}=bl({organizationId:m?.id,enabled:!!d?.user.id}),{data:p}=Su({enabled:!!d?.user.id}),b=f==="owner"||f==="admin",v=p?.id,[_,S]=I.useState(a.assigned_member_ids||[]),w=s.filter(H=>H.id&&_.includes(H.id)),E=b?s.filter(H=>!H.id||!_.includes(H.id)):s.filter(H=>H.id===v&&!_.includes(v)),z=H=>{H&&(!b&&H!==v||S(_.filter(K=>K!==H)))},N=H=>{H&&(!b&&H!==v||S([..._,H]))},T=()=>{l(a.id,_)},D=H=>{H.stopPropagation()},M=H=>{H.stopPropagation(),n()};let A="Edit Roster Slot";if(e&&a.slot_index!==null&&a.slot_index!==void 0){const H=e.slot_definitions[a.slot_index];H&&(A=c.formatMessage({id:"roster.edit.drawerLabel"},{slotName:H.name}))}return x.jsxs(Hn,{label:A,placement:"bottom",open:!0,onSlAfterHide:M,onSlRequestClose:D,className:$a.drawer,children:[x.jsxs("div",{className:$a.container,children:[x.jsxs("div",{className:$a.listSection,children:[x.jsx("h3",{className:$a.listHeader,children:x.jsx($e,{id:"roster.edit.assignedHeader"})}),w.length>0?w.map(H=>x.jsxs("div",{className:$a.memberItem,children:[x.jsx(Is,{initials:H.name.substring(0,2),label:H.name}),x.jsx("span",{className:$a.memberName,children:H.name}),(b||H.id===v)&&x.jsx(_t,{name:"x-circle-fill",label:c.formatMessage({id:"common.remove"}),onClick:()=>z(H.id)})]},H.id)):x.jsx("p",{className:$a.emptyState,children:x.jsx($e,{id:"roster.edit.emptyState"})})]}),x.jsx(Ap,{}),x.jsxs("div",{className:$a.listSection,children:[x.jsx("h3",{className:$a.listHeader,children:x.jsx($e,{id:"roster.edit.unassignedHeader"})}),E.map(H=>x.jsxs("div",{className:`${$a.memberItem} ${$a.clickable}`,onClick:()=>N(H.id),tabIndex:0,role:"button",children:[x.jsx(Is,{initials:H.name.substring(0,2),label:H.name}),x.jsx("span",{className:$a.memberName,children:H.name})]},H.id))]})]}),x.jsxs("div",{slot:"footer",className:$a.footerActions,children:[x.jsx(gi,{onClick:M,children:x.jsx($e,{id:"common.cancel"})}),x.jsx(gi,{variant:"primary",onClick:T,children:x.jsx($e,{id:"common.save"})})]})]})}const d6="_featureContainer_j03no_2",h6="_weekGroup_j03no_11",f6="_rosterGrid_j03no_21",p6="_weekHeader_j03no_31",m6="_shareIcon_j03no_41",g6="_dateCell_j03no_46",b6="_headerSlot_j03no_67",v6="_rosterSlot_j03no_76",y6="_emptySlot_j03no_88",_6="_green_j03no_89",x6="_orange_j03no_90",w6="_red_j03no_91",S6="_loadMoreContainer_j03no_117",C6="_visible_j03no_130",k6="_hidden_j03no_133",mt={featureContainer:d6,weekGroup:h6,rosterGrid:f6,weekHeader:p6,shareIcon:m6,dateCell:g6,headerSlot:b6,rosterSlot:v6,emptySlot:y6,green:_6,orange:x6,red:w6,loadMoreContainer:S6,visible:C6,hidden:k6};function E6({roster:e,rosterSlots:a,members:s,onSlotClick:n}){const l=Ve(),c=I.useMemo(()=>{const _=new Map;return a.forEach(S=>{if(!S.date||S.slot_index===null)return;const w=Er(nu(S.date),"yyyy-MM-dd");_.has(w)||_.set(w,new Map),_.get(w)?.set(S.slot_index,S)}),_},[a]),d=I.useMemo(()=>Array.from(c.keys()).sort().reduce((S,w)=>{const E=nu(w),z=Jx(E),N=ew(E),T=`${z}${String(N).padStart(2,"0")}`;return S[T]||(S[T]=[]),S[T].push(w),S},{}),[c]),m=(_,S)=>{const w=mt.rosterSlot,E=_?.assigned_member_ids?.length??0;return E===0?`${w} ${mt.emptySlot}`:S.min_occupancy===0?`${w} ${mt.green}`:E>=S.min_occupancy?`${w} ${mt.green}`:E===S.min_occupancy-1?`${w} ${mt.orange}`:E<=S.min_occupancy-2?`${w} ${mt.red}`:w},f=_=>{_&&n(_.id)},p=_=>{if(!_||!_.assigned_member_ids||_.assigned_member_ids.length===0)return x.jsx("span",{className:mt.emptySlot,children:x.jsx($e,{id:"roster.emptySlot"})});const S=_.assigned_member_ids.map(w=>s.find(E=>E.id===w)?.name).filter(w=>!!w);return l.formatList(S,{type:"unit"})},b=_=>{const S=l.formatMessage({id:"share.rosterTitle"}),w=l.formatMessage({id:"share.rosterText"});D4(_,S,w)};if(!e)return null;const v=`20% repeat(${e.slot_definitions.length}, 1fr)`;return x.jsx("div",{children:Object.keys(d).sort((_,S)=>Number(_)-Number(S)).map(_=>{const S=d[_],w=`week-${_}`,E=`${mt.weekGroup}`;return x.jsxs("div",{id:w,className:E,children:[x.jsxs("div",{className:`${mt.rosterGrid} ${mt.weekHeader}`,style:{gridTemplateColumns:v},children:[x.jsx("div",{className:mt.dateCell,children:x.jsx(_t,{name:"share",label:l.formatMessage({id:"roster.shareWeekLabel"}),className:`${mt.shareIcon} hide-for-sharing`,onClick:()=>b(w)})}),e.slot_definitions.map(z=>x.jsx("div",{className:mt.headerSlot,children:z.name},z.name))]}),S.map(z=>{const N=c.get(z),T=nu(z);return x.jsxs("div",{className:mt.rosterGrid,style:{gridTemplateColumns:v},children:[x.jsxs("div",{className:mt.dateCell,children:[x.jsx("strong",{children:l.formatDate(T,{weekday:"short"})}),x.jsx("span",{children:l.formatDate(T,{month:"short",day:"numeric"})})]}),e.slot_definitions.map((D,M)=>{const A=N?.get(M);return x.jsx("div",{className:m(A,D),onClick:()=>f(A),role:"button",tabIndex:0,onKeyDown:H=>H.key==="Enter"&&f(A),children:p(A)},M)})]},z)})]},_)})})}const Rv=(e,a)=>{const s=typeof e=="string"?nu(e):e;return`${Er(s,"yyyy-MM-dd")}-${a}`};function $6({rosterId:e}){const a=Ve(),s=np(),{data:n,isLoading:l}=tw({enabled:!!s}),{mutate:c}=aw(),{members:d,rosterSlots:m,roster:f}=n||{},p=I.useRef(null),b=I.useRef({shouldAdjust:!1,scrollHeight:0}),[v,_]=I.useState(()=>{const Z=iw(new Date,{weekStartsOn:1});return{start:Z,end:ru(Z,34)}}),[S,w]=I.useState(!0),[E,z]=I.useState(!1),[N,T]=I.useState(null),D=()=>{p.current&&(b.current={shouldAdjust:!0,scrollHeight:p.current.scrollHeight}),_(Z=>({...Z,start:N4(Z.start)}))},M=()=>{_(Z=>({...Z,end:ru(Z.end,28)}))},A=I.useMemo(()=>{if(!f?.slot_definitions)return[];const Z=new Map;(m||[]).forEach(ae=>{ae.date&&typeof ae.slot_index=="number"&&Z.set(Rv(ae.date,ae.slot_index),ae)});const V=[],P=g4(v.end,v.start)+1;for(let ae=0;ae<P;ae++){const ye=ru(v.start,ae);f.slot_definitions.forEach((ke,_e)=>{const xe=Rv(ye,_e),X=Z.get(xe);X?V.push(X):V.push({id:xe,roster_id:f.id,date:ye.toISOString(),slot_index:_e,assigned_member_ids:[],created_at:new Date().toISOString()})})}return V},[m,f,v]);I.useLayoutEffect(()=>{const Z=()=>{const P=p.current;P&&(w(P.scrollTop<100),z(P.scrollHeight-P.scrollTop-P.clientHeight<100))},V=p.current;return V?.addEventListener("scroll",Z),Z(),()=>V?.removeEventListener("scroll",Z)},[]),I.useLayoutEffect(()=>{if(p.current&&b.current.shouldAdjust){const V=p.current.scrollHeight-b.current.scrollHeight;p.current.scrollTop+=V,b.current.shouldAdjust=!1}},[A]);const H=(Z,V)=>{const P=A.find(ae=>ae.id===Z);P&&c({slot:P,newMemberIds:V}),T(null)},K=A.find(Z=>Z.id===N);return l?x.jsx("div",{children:"Loading..."}):x.jsxs("div",{className:mt.featureContainer,ref:p,children:[x.jsx("div",{className:`${mt.loadMoreContainer} ${S?mt.visible:mt.hidden}`,children:x.jsx(_t,{name:"arrow-up-circle",label:a.formatMessage({id:"roster.loadPrevious"}),onClick:D})}),x.jsx(E6,{roster:f,rosterSlots:A,members:d||[],onSlotClick:T}),x.jsx("div",{className:`${mt.loadMoreContainer} ${E?mt.visible:mt.hidden}`,children:x.jsx(_t,{name:"arrow-down-circle",label:a.formatMessage({id:"roster.loadNext"}),onClick:M})}),K&&x.jsx(u6,{slot:K,roster:f,allMembers:d||[],onClose:()=>T(null),onSave:H})]})}const A6="_pageWrapper_1rpk9_1",T6="_pageContent_1rpk9_10",z6="_drawer_1rpk9_20",hf={pageWrapper:A6,pageContent:T6,drawer:z6};function M6(){const e=Ve(),a=Ba(),{roster_id:s}=Cu(),n=()=>{a(-1)};return x.jsx(Hn,{label:e.formatMessage({id:"shell.tab.roster"}),placement:"end",open:!0,onSlAfterHide:n,className:hf.drawer,children:x.jsxs("div",{className:hf.pageWrapper,children:[x.jsx(ls,{showBackButton:!0,headerActions:x.jsx(_t,{label:e.formatMessage({id:"shell.tab.profile"}),onClick:()=>a("/profile/me"),name:"person-circle"})}),x.jsx("div",{className:hf.pageContent,children:x.jsx($6,{rosterId:s})})]})})}const N6="_pageWrapper_1jngq_1",O6={pageWrapper:N6};var D6="sl-icon";Ke.define("sl-icon");var L6=de({tagName:D6,elementClass:Ke,react:ue,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),ta=L6,R6="sl-spinner";Rn.define("sl-spinner");var B6=de({tagName:R6,elementClass:Rn,react:ue,events:{},displayName:"SlSpinner"}),Hy=B6;const H6="_profilePage_1u3wj_1",U6="_cover_1u3wj_6",j6="_header_1u3wj_18",I6="_avatar_1u3wj_32",V6="_stableInfo_1u3wj_38",P6="_infoPanel_1u3wj_44",F6="_infoPanelHeader_1u3wj_52",q6="_privacyNotification_1u3wj_60",Ja={profilePage:H6,cover:U6,header:j6,avatar:I6,stableInfo:V6,infoPanel:P6,infoPanelHeader:F6,privacyNotification:q6},G6="_infoGrid_rqzcx_1",Y6="_infoCell_rqzcx_9",X6="_cellLabel_rqzcx_21",W6="_cellValue_rqzcx_29",Q6="_notSet_rqzcx_41",rl={infoGrid:G6,infoCell:Y6,cellLabel:X6,cellValue:W6,notSet:Q6};function Tp({label:e,value:a}){const s=Ve(),n=x.jsx("span",{className:rl.notSet,children:s.formatMessage({id:"common.notSet"})});return x.jsxs("div",{className:rl.infoCell,children:[x.jsx("strong",{className:rl.cellLabel,children:e}),x.jsx("div",{className:rl.cellValue,children:a||n})]})}function Z6({user:e}){const a=Ve(),s=I.useMemo(()=>{const n=[{id:"users.firstNameLabel",value:e.firstname},{id:"users.lastNameLabel",value:e.lastname},{id:"users.cityLabel",value:e.city},{id:"users.countryLabel",value:e.country},{id:"users.genderLabel",value:e.gender},{id:"users.dateOfBirthLabel",value:e.date_of_birth}];return e.email&&n.push({id:"auth.emailLabel",value:e.email}),n},[e]);return x.jsx("div",{className:rl.infoGrid,children:s.map(n=>x.jsx(Tp,{label:a.formatMessage({id:n.id}),value:n.value},n.id))})}const K6="_infoGrid_tlonv_1",J6={infoGrid:K6};function eC({horse:e}){const a=Ve(),s=I.useMemo(()=>[{id:"horses.officialNameLabel",value:e.official_name},{id:"horses.dateOfBirthLabel",value:e.date_of_birth},{id:"horses.genderLabel",value:e.gender},{id:"horses.colorLabel",value:e.color},{id:"horses.breedStudbookLabel",value:e.breed_studbook},{id:"horses.countryOfBirthLabel",value:e.country_of_birth},{id:"horses.chipNumberLabel",value:e.chip_number},{id:"horses.uelnLabel",value:e.ueln},{id:"horses.passportNumberLabel",value:e.passport_number}].filter(n=>n.value),[e]);return x.jsx("div",{className:J6.infoGrid,children:s.map(n=>x.jsx(Tp,{label:a.formatMessage({id:n.id}),value:n.value},n.id))})}const tC="_infoGrid_tlonv_1",aC={infoGrid:tC};function iC({organization:e}){const a=Ve(),s=I.useMemo(()=>[{id:"auth.emailLabel",value:e.email},{id:"users.cityLabel",value:e.city},{id:"users.countryLabel",value:e.country},{id:"organization.cocLabel",value:e.chamber_of_commerce_registration}].filter(n=>n.value),[e]);return x.jsx("div",{className:aC.infoGrid,children:s.map(n=>x.jsx(Tp,{label:a.formatMessage({id:n.id}),value:n.value},n.id))})}function sC({socialProfileType:e,userMemberships:a,horseDetails:s,orgDetails:n}){const l=[];return e==="user"&&a?a.forEach(c=>l.push(x.jsx("p",{className:Ja.stableRole,children:x.jsx($e,{id:`profile.stable.${c.role}`,values:{organizationName:c.organizations?.name,nickName:c.nickname}})},c.id))):e==="horse"&&s?.official_name?l.push(x.jsx("p",{children:s.official_name},"official-name")):e==="organization"&&n?.city&&l.push(x.jsx("p",{children:x.jsx($e,{id:"profile.organization.location",values:{city:n.city}})},"org-location")),x.jsx("div",{className:Ja.stableInfo,children:l})}function rC({profileId:e}){const{data:a,isLoading:s}=Su({enabled:!0}),n=e==="me"||e===a?.social_profile_id,l=n?a?.social_profile_id:e,{data:c,isLoading:d}=sw({socialId:l,enabled:!!l}),{data:m,isLoading:f}=rw({userId:c?.entity_id,enabled:c?.type==="user"}),{data:p,isLoading:b}=nw({horseId:c?.entity_id,enabled:c?.type==="horse"}),{data:v,isLoading:_}=Tb({organizationId:c?.entity_id,enabled:c?.type==="organization"}),{data:S}=Tb({organizationId:p?.boarded_at_org_id??void 0,enabled:c?.type==="horse"&&!!p?.boarded_at_org_id}),{data:w}=zb({userId:m?.id,enabled:c?.type==="user"&&!!m}),{data:E}=zb({userId:a?.id,enabled:!n}),{data:z}=bl({organizationId:c?.type==="horse"?p?.boarded_at_org_id??void 0:c?.type==="organization"?v?.id:void 0,enabled:!!(p?.boarded_at_org_id||v?.id)}),{data:N}=ow({organizationId:p?.boarded_at_org_id||void 0,enabled:!!p?.boarded_at_org_id}),T=I.useMemo(()=>{if(n)return!0;if(!c||!a)return!1;switch(c.type){case"user":{if(!E||!w)return!1;const K=E.filter(Z=>Z.role==="admin"||Z.role==="owner").map(Z=>Z.organizations?.id);return w.some(Z=>K.includes(Z.organizations?.id))}case"horse":return p?.owner_id===a.id?!0:z==="admin"||z==="owner";case"organization":return z==="admin"||z==="owner";default:return!1}},[n,c,a,E,w,p,z]),D=Ve();if(s||d||f||b||_)return x.jsx(Hy,{});if(!c)return x.jsx("div",{children:D.formatMessage({id:"profile.notFound"})});const M=c?.display_name||D.formatMessage({id:"profile.NoDisplayName"}),A=M.split(" "),H=A.length>1?`${A[0][0]}${A[A.length-1][0]}`:`${A[0]?.[0]??""}`;return x.jsxs("div",{className:Ja.profilePage,children:[x.jsx("div",{className:Ja.cover}),x.jsxs("div",{className:Ja.header,children:[x.jsx(Is,{image:c.avatar_url??void 0,initials:H,className:Ja.avatar}),x.jsx("h2",{className:Ja.name,"data-testid":"profile-name",children:M}),x.jsx(sC,{socialProfileType:c.type,userMemberships:w,horseDetails:p,orgDetails:v})]}),T&&x.jsxs("div",{className:Ja.infoPanel,children:[x.jsxs("h3",{className:Ja.infoPanelHeader,children:[x.jsx(ta,{name:"lock-fill"}),x.jsx($e,{id:"profile.info"})]}),c.type==="organization"&&x.jsx("p",{className:Ja.privacyNotification,children:x.jsx($e,{id:"profile.privacyNotification.organization"})}),c.type==="user"&&x.jsx("p",{className:Ja.privacyNotification,children:x.jsx($e,{id:"profile.privacyNotification.user"})}),c.type==="horse"&&x.jsx("p",{className:Ja.privacyNotification,children:x.jsx($e,{id:"profile.privacyNotification",values:{organizationName:S?.name,adminName:N?.user_profiles?.firstname}})}),c.type==="user"&&m&&x.jsx(Z6,{user:m}),c.type==="horse"&&p&&x.jsx(eC,{horse:p}),c.type==="organization"&&v&&x.jsx(iC,{organization:v})]})]})}function Bv(){const{social_id:e}=Cu(),a=e||"me",s=a==="me",n=lw(),l=Ve(),c=s?x.jsx(_t,{name:"box-arrow-right",label:l.formatMessage({id:"profile.logout"}),onClick:n,"data-testid":"logout-button"}):void 0;return x.jsxs("div",{className:O6.pageWrapper,children:[x.jsx(ls,{showBackButton:!0,headerActions:c}),x.jsx(rC,{profileId:a})]})}var Hv,Ze="colors",ra="sizes",ie="space",nC={gap:ie,gridGap:ie,columnGap:ie,gridColumnGap:ie,rowGap:ie,gridRowGap:ie,inset:ie,insetBlock:ie,insetBlockEnd:ie,insetBlockStart:ie,insetInline:ie,insetInlineEnd:ie,insetInlineStart:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,marginBlock:ie,marginBlockEnd:ie,marginBlockStart:ie,marginInline:ie,marginInlineEnd:ie,marginInlineStart:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,paddingBlock:ie,paddingBlockEnd:ie,paddingBlockStart:ie,paddingInline:ie,paddingInlineEnd:ie,paddingInlineStart:ie,top:ie,right:ie,bottom:ie,left:ie,scrollMargin:ie,scrollMarginTop:ie,scrollMarginRight:ie,scrollMarginBottom:ie,scrollMarginLeft:ie,scrollMarginX:ie,scrollMarginY:ie,scrollMarginBlock:ie,scrollMarginBlockEnd:ie,scrollMarginBlockStart:ie,scrollMarginInline:ie,scrollMarginInlineEnd:ie,scrollMarginInlineStart:ie,scrollPadding:ie,scrollPaddingTop:ie,scrollPaddingRight:ie,scrollPaddingBottom:ie,scrollPaddingLeft:ie,scrollPaddingX:ie,scrollPaddingY:ie,scrollPaddingBlock:ie,scrollPaddingBlockEnd:ie,scrollPaddingBlockStart:ie,scrollPaddingInline:ie,scrollPaddingInlineEnd:ie,scrollPaddingInlineStart:ie,fontSize:"fontSizes",background:Ze,backgroundColor:Ze,backgroundImage:Ze,borderImage:Ze,border:Ze,borderBlock:Ze,borderBlockEnd:Ze,borderBlockStart:Ze,borderBottom:Ze,borderBottomColor:Ze,borderColor:Ze,borderInline:Ze,borderInlineEnd:Ze,borderInlineStart:Ze,borderLeft:Ze,borderLeftColor:Ze,borderRight:Ze,borderRightColor:Ze,borderTop:Ze,borderTopColor:Ze,caretColor:Ze,color:Ze,columnRuleColor:Ze,fill:Ze,outline:Ze,outlineColor:Ze,stroke:Ze,textDecorationColor:Ze,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:ra,minBlockSize:ra,maxBlockSize:ra,inlineSize:ra,minInlineSize:ra,maxInlineSize:ra,width:ra,minWidth:ra,maxWidth:ra,height:ra,minHeight:ra,maxHeight:ra,flexBasis:ra,gridTemplateColumns:ra,gridTemplateRows:ra,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},oC=(e,a)=>typeof a=="function"?{"()":Function.prototype.toString.call(a)}:a,El=()=>{const e=Object.create(null);return(a,s,...n)=>{const l=(c=>JSON.stringify(c,oC))(a);return l in e?e[l]:e[l]=s(a,...n)}},ou=Symbol.for("sxs.internal"),zp=(e,a)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)),Uv=e=>{for(const a in e)return!0;return!1},{hasOwnProperty:lC}=Object.prototype,Kf=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(a=>"-"+a.toLowerCase())),cC=/\s+(?![^()]*\))/,Sn=e=>a=>e(...typeof a=="string"?String(a).split(cC):[a]),jv={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:Sn(((e,a)=>({marginBlockStart:e,marginBlockEnd:a||e}))),marginInline:Sn(((e,a)=>({marginInlineStart:e,marginInlineEnd:a||e}))),maxSize:Sn(((e,a)=>({maxBlockSize:e,maxInlineSize:a||e}))),minSize:Sn(((e,a)=>({minBlockSize:e,minInlineSize:a||e}))),paddingBlock:Sn(((e,a)=>({paddingBlockStart:e,paddingBlockEnd:a||e}))),paddingInline:Sn(((e,a)=>({paddingInlineStart:e,paddingInlineEnd:a||e})))},ff=/([\d.]+)([^]*)/,uC=(e,a)=>e.length?e.reduce(((s,n)=>(s.push(...a.map((l=>l.includes("&")?l.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(l)?`:is(${n})`:n):n+" "+l))),s)),[]):a,dC=(e,a)=>e in hC&&typeof a=="string"?a.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((s,n,l,c)=>n+(l==="stretch"?`-moz-available${c};${Kf(e)}:${n}-webkit-fill-available`:`-moz-fit-content${c};${Kf(e)}:${n}fit-content`)+c)):String(a),hC={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},rs=e=>e?e+"-":"",Uy=(e,a,s)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((n,l,c,d,m)=>d=="$"==!!c?n:(l||d=="--"?"calc(":"")+"var(--"+(d==="$"?rs(a)+(m.includes("$")?"":rs(s))+m.replace(/\$/g,"-"):m)+")"+(l||d=="--"?"*"+(l||"")+(c||"1")+")":""))),fC=/\s*,\s*(?![^()]*\))/,pC=Object.prototype.toString,$n=(e,a,s,n,l)=>{let c,d,m;const f=(p,b,v)=>{let _,S;const w=E=>{for(_ in E){const T=_.charCodeAt(0)===64,D=T&&Array.isArray(E[_])?E[_]:[E[_]];for(S of D){const M=/[A-Z]/.test(N=_)?N:N.replace(/-[^]/g,(H=>H[1].toUpperCase())),A=typeof S=="object"&&S&&S.toString===pC&&(!n.utils[M]||!b.length);if(M in n.utils&&!A){const H=n.utils[M];if(H!==d){d=H,w(H(S)),d=null;continue}}else if(M in jv){const H=jv[M];if(H!==m){m=H,w(H(S)),m=null;continue}}if(T&&(z=_.slice(1)in n.media?"@media "+n.media[_.slice(1)]:_,_=z.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((H,K,Z,V,P,ae)=>{const ye=ff.test(K),ke=.0625*(ye?-1:1),[_e,xe]=ye?[V,K]:[K,V];return"("+(Z[0]==="="?"":Z[0]===">"===ye?"max-":"min-")+_e+":"+(Z[0]!=="="&&Z.length===1?xe.replace(ff,((X,Y,ee)=>Number(Y)+ke*(Z===">"?1:-1)+ee)):xe)+(P?") and ("+(P[0]===">"?"min-":"max-")+_e+":"+(P.length===1?ae.replace(ff,((X,Y,ee)=>Number(Y)+ke*(P===">"?-1:1)+ee)):ae):"")+")"}))),A){const H=T?v.concat(_):[...v],K=T?[...b]:uC(b,_.split(fC));c!==void 0&&l(Iv(...c)),c=void 0,f(S,K,H)}else c===void 0&&(c=[[],b,v]),_=T||_.charCodeAt(0)!==36?_:`--${rs(n.prefix)}${_.slice(1).replace(/\$/g,"-")}`,S=A?S:typeof S=="number"?S&&M in mC?String(S)+"px":String(S):Uy(dC(M,S??""),n.prefix,n.themeMap[M]),c[0].push(`${T?`${_} `:`${Kf(_)}:`}${S}`)}}var z,N};w(p),c!==void 0&&l(Iv(...c)),c=void 0};f(e,a,s)},Iv=(e,a,s)=>`${s.map((n=>`${n}{`)).join("")}${a.length?`${a.join(",")}{`:""}${e.join(";")}${a.length?"}":""}${Array(s.length?s.length+1:0).join("}")}`,mC={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},Vv=e=>String.fromCharCode(e+(e>25?39:97)),$r=e=>(a=>{let s,n="";for(s=Math.abs(a);s>52;s=s/52|0)n=Vv(s%52)+n;return Vv(s%52)+n})(((a,s)=>{let n=s.length;for(;n;)a=33*a^s.charCodeAt(--n);return a})(5381,JSON.stringify(e))>>>0),nl=["themed","global","styled","onevar","resonevar","allvar","inline"],gC=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},bC=e=>{let a;const s=()=>{const{cssRules:l}=a.sheet;return[].map.call(l,((c,d)=>{const{cssText:m}=c;let f="";if(m.startsWith("--sxs"))return"";if(l[d-1]&&(f=l[d-1].cssText).startsWith("--sxs")){if(!c.cssRules.length)return"";for(const p in a.rules)if(a.rules[p].group===c)return`--sxs{--sxs:${[...a.rules[p].cache].join(" ")}}${m}`;return c.cssRules.length?`${f}${m}`:""}return m})).join("")},n=()=>{if(a){const{rules:m,sheet:f}=a;if(!f.deleteRule){for(;Object(Object(f.cssRules)[0]).type===3;)f.cssRules.splice(0,1);f.cssRules=[]}for(const p in m)delete m[p]}const l=Object(e).styleSheets||[];for(const m of l)if(gC(m)){for(let f=0,p=m.cssRules;p[f];++f){const b=Object(p[f]);if(b.type!==1)continue;const v=Object(p[f+1]);if(v.type!==4)continue;++f;const{cssText:_}=b;if(!_.startsWith("--sxs"))continue;const S=_.slice(14,-3).trim().split(/\s+/),w=nl[S[0]];w&&(a||(a={sheet:m,reset:n,rules:{},toString:s}),a.rules[w]={group:v,index:f,cache:new Set(S)})}if(a)break}if(!a){const m=(f,p)=>({type:p,cssRules:[],insertRule(b,v){this.cssRules.splice(v,0,m(b,{import:3,undefined:1}[(b.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return f==="@media{}"?`@media{${[].map.call(this.cssRules,(b=>b.cssText)).join("")}}`:f}});a={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:m("","text/css"),rules:{},reset:n,toString:s}}const{sheet:c,rules:d}=a;for(let m=nl.length-1;m>=0;--m){const f=nl[m];if(!d[f]){const p=nl[m+1],b=d[p]?d[p].index:c.cssRules.length;c.insertRule("@media{}",b),c.insertRule(`--sxs{--sxs:${m}}`,b),d[f]={group:c.cssRules[b+1],index:b,cache:new Set([m])}}vC(d[f])}};return n(),a},vC=e=>{const a=e.group;let s=a.cssRules.length;e.apply=n=>{try{a.insertRule(n,s),++s}catch{}}},el=Symbol(),yC=El(),_C=(e,a)=>yC(e,(()=>(...s)=>{let n={type:null,composers:new Set};for(const l of s)if(l!=null)if(l[ou]){n.type==null&&(n.type=l[ou].type);for(const c of l[ou].composers)n.composers.add(c)}else l.constructor!==Object||l.$$typeof?n.type==null&&(n.type=l):n.composers.add(xC(l,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),wC(e,n,a)})),xC=({variants:e,compoundVariants:a,defaultVariants:s,...n},l)=>{const c=`${rs(l.prefix)}c-${$r(n)}`,d=[],m=[],f=Object.create(null),p=[];for(const _ in s)f[_]=String(s[_]);if(typeof e=="object"&&e)for(const _ in e){b=f,v=_,lC.call(b,v)||(f[_]="undefined");const S=e[_];for(const w in S){const E={[_]:String(w)};String(w)==="undefined"&&p.push(_);const z=S[w],N=[E,z,!Uv(z)];d.push(N)}}var b,v;if(typeof a=="object"&&a)for(const _ of a){let{css:S,...w}=_;S=typeof S=="object"&&S||{};for(const z in w)w[z]=String(w[z]);const E=[w,S,!Uv(S)];m.push(E)}return[c,n,d,m,f,p]},wC=(e,a,s)=>{const[n,l,c,d]=SC(a.composers),m=typeof a.type=="function"||a.type.$$typeof?(v=>{function _(){for(let S=0;S<_[el].length;S++){const[w,E]=_[el][S];v.rules[w].apply(E)}return _[el]=[],null}return _[el]=[],_.rules={},nl.forEach((S=>_.rules[S]={apply:w=>_[el].push([S,w])})),_})(s):null,f=(m||s).rules,p=`.${n}${l.length>1?`:where(.${l.slice(1).join(".")})`:""}`,b=v=>{v=typeof v=="object"&&v||CC;const{css:_,...S}=v,w={};for(const N in c)if(delete S[N],N in v){let T=v[N];typeof T=="object"&&T?w[N]={"@initial":c[N],...T}:(T=String(T),w[N]=T!=="undefined"||d.has(N)?T:c[N])}else w[N]=c[N];const E=new Set([...l]);for(const[N,T,D,M]of a.composers){s.rules.styled.cache.has(N)||(s.rules.styled.cache.add(N),$n(T,[`.${N}`],[],e,(K=>{f.styled.apply(K)})));const A=Pv(D,w,e.media),H=Pv(M,w,e.media,!0);for(const K of A)if(K!==void 0)for(const[Z,V,P]of K){const ae=`${N}-${$r(V)}-${Z}`;E.add(ae);const ye=(P?s.rules.resonevar:s.rules.onevar).cache,ke=P?f.resonevar:f.onevar;ye.has(ae)||(ye.add(ae),$n(V,[`.${ae}`],[],e,(_e=>{ke.apply(_e)})))}for(const K of H)if(K!==void 0)for(const[Z,V]of K){const P=`${N}-${$r(V)}-${Z}`;E.add(P),s.rules.allvar.cache.has(P)||(s.rules.allvar.cache.add(P),$n(V,[`.${P}`],[],e,(ae=>{f.allvar.apply(ae)})))}}if(typeof _=="object"&&_){const N=`${n}-i${$r(_)}-css`;E.add(N),s.rules.inline.cache.has(N)||(s.rules.inline.cache.add(N),$n(_,[`.${N}`],[],e,(T=>{f.inline.apply(T)})))}for(const N of String(v.className||"").trim().split(/\s+/))N&&E.add(N);const z=S.className=[...E].join(" ");return{type:a.type,className:z,selector:p,props:S,toString:()=>z,deferredInjector:m}};return zp(b,{className:n,selector:p,[ou]:a,toString:()=>(s.rules.styled.cache.has(n)||b(),n)})},SC=e=>{let a="";const s=[],n={},l=[];for(const[c,,,,d,m]of e){a===""&&(a=c),s.push(c),l.push(...m);for(const f in d){const p=d[f];(n[f]===void 0||p!=="undefined"||m.includes(p))&&(n[f]=p)}}return[a,s,n,new Set(l)]},Pv=(e,a,s,n)=>{const l=[];e:for(let[c,d,m]of e){if(m)continue;let f,p=0,b=!1;for(f in c){const v=c[f];let _=a[f];if(_!==v){if(typeof _!="object"||!_)continue e;{let S,w,E=0;for(const z in _){if(v===String(_[z])){if(z!=="@initial"){const N=z.slice(1);(w=w||[]).push(N in s?s[N]:z.replace(/^@media ?/,"")),b=!0}p+=E,S=!0}++E}if(w&&w.length&&(d={["@media "+w.join(", ")]:d}),!S)continue e}}}(l[p]=l[p]||[]).push([n?"cv":`${f}-${c[f]}`,d,b])}return l},CC={},kC=El(),EC=(e,a)=>kC(e,(()=>(...s)=>{const n=()=>{for(let l of s){l=typeof l=="object"&&l||{};let c=$r(l);if(!a.rules.global.cache.has(c)){if(a.rules.global.cache.add(c),"@import"in l){let d=[].indexOf.call(a.sheet.cssRules,a.rules.themed.group)-1;for(let m of[].concat(l["@import"]))m=m.includes('"')||m.includes("'")?m:`"${m}"`,a.sheet.insertRule(`@import ${m};`,d++);delete l["@import"]}$n(l,[],[],e,(d=>{a.rules.global.apply(d)}))}}return""};return zp(n,{toString:n})})),$C=El(),AC=(e,a)=>$C(e,(()=>s=>{const n=`${rs(e.prefix)}k-${$r(s)}`,l=()=>{if(!a.rules.global.cache.has(n)){a.rules.global.cache.add(n);const c=[];$n(s,[],[],e,(m=>c.push(m)));const d=`@keyframes ${n}{${c.join("")}}`;a.rules.global.apply(d)}return n};return zp(l,{get name(){return l()},toString:l})})),TC=class{constructor(a,s,n,l){this.token=a==null?"":String(a),this.value=s==null?"":String(s),this.scale=n==null?"":String(n),this.prefix=l==null?"":String(l)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+rs(this.prefix)+rs(this.scale)+this.token}toString(){return this.computedValue}},zC=El(),MC=(e,a)=>zC(e,(()=>(s,n)=>{n=typeof s=="object"&&s||Object(n);const l=`.${s=(s=typeof s=="string"?s:"")||`${rs(e.prefix)}t-${$r(n)}`}`,c={},d=[];for(const f in n){c[f]={};for(const p in n[f]){const b=`--${rs(e.prefix)}${f}-${p}`,v=Uy(String(n[f][p]),e.prefix,f);c[f][p]=new TC(p,v,f,e.prefix),d.push(`${b}:${v}`)}}const m=()=>{if(d.length&&!a.rules.themed.cache.has(s)){a.rules.themed.cache.add(s);const f=`${n===e.theme?":root,":""}.${s}{${d.join(";")}}`;a.rules.themed.apply(f)}return s};return{...c,get className(){return m()},selector:l,toString:m}})),NC=El(),jy=e=>{let a=!1;const s=NC(e,(n=>{a=!0;const l="prefix"in(n=typeof n=="object"&&n||{})?String(n.prefix):"",c=typeof n.media=="object"&&n.media||{},d=typeof n.root=="object"?n.root||null:globalThis.document||null,m=typeof n.theme=="object"&&n.theme||{},f={prefix:l,media:c,theme:m,themeMap:typeof n.themeMap=="object"&&n.themeMap||{...nC},utils:typeof n.utils=="object"&&n.utils||{}},p=bC(d),b={css:_C(f,p),globalCss:EC(f,p),keyframes:AC(f,p),createTheme:MC(f,p),reset(){p.reset(),b.theme.toString()},theme:{},sheet:p,config:f,prefix:l,getCssText:p.toString,toString:p.toString};return String(b.theme=b.createTheme(m)),b}));return a||s.reset(),s},Iy=()=>Hv||(Hv=jy()),OC=(...e)=>Iy().createTheme(...e),cs=(...e)=>Iy().css(...e),Vy={default:{colors:{brand:"hsl(153 60.0% 53.0%)",brandAccent:"hsl(154 54.8% 45.1%)",brandButtonText:"white",defaultButtonBackground:"white",defaultButtonBackgroundHover:"#eaeaea",defaultButtonBorder:"lightgray",defaultButtonText:"gray",dividerBackground:"#eaeaea",inputBackground:"transparent",inputBorder:"lightgray",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"black",inputLabelText:"gray",inputPlaceholder:"darkgray",messageText:"#2b805a",messageBackground:"#e7fcf1",messageBorder:"#d0f3e1",messageTextDanger:"#ff6369",messageBackgroundDanger:"#fff8f8",messageBorderDanger:"#822025",anchorTextColor:"gray",anchorTextHoverColor:"darkgray"},space:{spaceSmall:"4px",spaceMedium:"8px",spaceLarge:"16px",labelBottomMargin:"8px",anchorBottomMargin:"4px",emailInputSpacing:"4px",socialAuthSpacing:"4px",buttonPadding:"10px 15px",inputPadding:"10px 15px"},fontSizes:{baseBodySize:"13px",baseInputSize:"14px",baseLabelSize:"14px",baseButtonSize:"14px"},fonts:{bodyFontFamily:"ui-sans-serif, sans-serif",buttonFontFamily:"ui-sans-serif, sans-serif",inputFontFamily:"ui-sans-serif, sans-serif",labelFontFamily:"ui-sans-serif, sans-serif"},borderWidths:{buttonBorderWidth:"1px",inputBorderWidth:"1px"},radii:{borderRadiusButton:"4px",buttonBorderRadius:"4px",inputBorderRadius:"4px"}},dark:{colors:{brandButtonText:"white",defaultButtonBackground:"#2e2e2e",defaultButtonBackgroundHover:"#3e3e3e",defaultButtonBorder:"#3e3e3e",defaultButtonText:"white",dividerBackground:"#2e2e2e",inputBackground:"#1e1e1e",inputBorder:"#3e3e3e",inputBorderHover:"gray",inputBorderFocus:"gray",inputText:"white",inputPlaceholder:"darkgray",messageText:"#85e0b7",messageBackground:"#072719",messageBorder:"#2b805a",messageBackgroundDanger:"#1f1315"}}},yt={SIGN_IN:"sign_in",SIGN_UP:"sign_up",FORGOTTEN_PASSWORD:"forgotten_password",MAGIC_LINK:"magic_link",UPDATE_PASSWORD:"update_password",VERIFY_OTP:"verify_otp"},DC="supabase-auth-ui",LC={ROOT:"root",SIGN_IN:yt.SIGN_IN,SIGN_UP:yt.SIGN_UP,FORGOTTEN_PASSWORD:yt.FORGOTTEN_PASSWORD,MAGIC_LINK:yt.MAGIC_LINK,UPDATE_PASSWORD:yt.UPDATE_PASSWORD,anchor:"ui-anchor",button:"ui-button",container:"ui-container",divider:"ui-divider",input:"ui-input",label:"ui-label",loader:"ui-loader",message:"ui-message"};function Or(e,a,s){var n,l;const c=[],d=LC[e];return c.push(s?.prependedClassName?s?.prependedClassName+"_"+d:DC+"_"+d),(n=s?.className)!=null&&n[e]&&c.push((l=s?.className)==null?void 0:l[e]),(s?.extend===void 0||s?.extend===!0)&&c.push(a),c}function Jf(e,a){let s;if(e&&a&&typeof e=="object"&&typeof a=="object"){if(Array.isArray(a))for(s=0;s<a.length;s++)e[s]=Jf(e[s],a[s]);else for(s in a)e[s]=Jf(e[s],a[s]);return e}return a}function pf(e,...a){let s=a.length;for(let n=0;n<s;n++)e=Jf(e,a[n]);return e}function RC(e,a){return e.replace(/{{(\w+)}}/g,(s,n)=>a.hasOwnProperty(n)?a[n]:s)}var BC={sign_up:{email_label:"Email address",password_label:"Create a Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign up",loading_button_label:"Signing up ...",social_provider_text:"Sign in with {{provider}}",link_text:"Don't have an account? Sign up",confirmation_text:"Check your email for the confirmation link"},sign_in:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",password_input_placeholder:"Your password",button_label:"Sign in",loading_button_label:"Signing in ...",social_provider_text:"Sign in with {{provider}}",link_text:"Already have an account? Sign in"},magic_link:{email_input_label:"Email address",email_input_placeholder:"Your email address",button_label:"Send Magic Link",loading_button_label:"Sending Magic Link ...",link_text:"Send a magic link email",confirmation_text:"Check your email for the magic link"},forgotten_password:{email_label:"Email address",password_label:"Your Password",email_input_placeholder:"Your email address",button_label:"Send reset password instructions",loading_button_label:"Sending reset instructions ...",link_text:"Forgot your password?",confirmation_text:"Check your email for the password reset link"},update_password:{password_label:"New password",password_input_placeholder:"Your new password",button_label:"Update password",loading_button_label:"Updating password ...",confirmation_text:"Your password has been updated"},verify_otp:{email_input_label:"Email address",email_input_placeholder:"Your email address",phone_input_label:"Phone number",phone_input_placeholder:"Your phone number",token_input_label:"Token",token_input_placeholder:"Your Otp token",button_label:"Verify token",loading_button_label:"Signing in ..."}};const HC=cs({fontFamily:"$bodyFontFamily",fontSize:"$baseBodySize",marginBottom:"$anchorBottomMargin",color:"$anchorTextColor",display:"block",textAlign:"center",textDecoration:"underline","&:hover":{color:"$anchorTextHoverColor"}}),Cr=({children:e,appearance:a,...s})=>{var n;const l=Or("anchor",HC(),a);return R.createElement("a",{...s,style:(n=a?.style)==null?void 0:n.anchor,className:l.join(" ")},e)},UC=cs({fontFamily:"$buttonFontFamily",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",borderRadius:"$borderRadiusButton",fontSize:"$baseButtonSize",padding:"$buttonPadding",cursor:"pointer",borderWidth:"$buttonBorderWidth",borderStyle:"solid",width:"100%",transitionProperty:"background-color",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms","&:disabled":{opacity:.7,cursor:"unset"},variants:{color:{default:{backgroundColor:"$defaultButtonBackground",color:"$defaultButtonText",borderColor:"$defaultButtonBorder","&:hover:not(:disabled)":{backgroundColor:"$defaultButtonBackgroundHover"}},primary:{backgroundColor:"$brand",color:"$brandButtonText",borderColor:"$brandAccent","&:hover:not(:disabled)":{backgroundColor:"$brandAccent"}}}}}),Un=({children:e,color:a="default",appearance:s,icon:n,loading:l=!1,...c})=>{var d;const m=Or("button",UC({color:a}),s);return R.createElement("button",{...c,style:(d=s?.style)==null?void 0:d.button,className:m.join(" "),disabled:l},n,e)},jC=cs({display:"flex",gap:"4px",variants:{direction:{horizontal:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(48px, 1fr))"},vertical:{flexDirection:"column",margin:"8px 0"}},gap:{small:{gap:"4px"},medium:{gap:"8px"},large:{gap:"16px"}}}}),Oi=({children:e,appearance:a,...s})=>{var n;const l=Or("container",jC({direction:s.direction,gap:s.gap}),a);return R.createElement("div",{...s,style:(n=a?.style)==null?void 0:n.container,className:l.join(" ")},e)},IC=cs({background:"$dividerBackground",display:"block",margin:"16px 0",height:"1px",width:"100%"}),VC=({children:e,appearance:a,...s})=>{var n;const l=Or("divider",IC(),a);return R.createElement("div",{...s,style:(n=a?.style)==null?void 0:n.divider,className:l.join(" ")})},PC=cs({fontFamily:"$inputFontFamily",background:"$inputBackground",borderRadius:"$inputBorderRadius",padding:"$inputPadding",cursor:"text",borderWidth:"$inputBorderWidth",borderColor:"$inputBorder",borderStyle:"solid",fontSize:"$baseInputSize",width:"100%",color:"$inputText",boxSizing:"border-box","&:hover":{borderColor:"$inputBorderHover",outline:"none"},"&:focus":{borderColor:"$inputBorderFocus",outline:"none"},"&::placeholder":{color:"$inputPlaceholder",letterSpacing:"initial"},transitionProperty:"background-color, border",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"100ms",variants:{type:{default:{letterSpacing:"0px"},password:{letterSpacing:"0px"}}}}),Us=({children:e,appearance:a,...s})=>{var n;const l=Or("input",PC({type:s.type==="password"?"password":"default"}),a);return R.createElement("input",{...s,style:(n=a?.style)==null?void 0:n.input,className:l.join(" ")},e)},FC=cs({fontFamily:"$labelFontFamily",fontSize:"$baseLabelSize",marginBottom:"$labelBottomMargin",color:"$inputLabelText",display:"block"}),js=({children:e,appearance:a,...s})=>{var n;const l=Or("label",FC(),a);return R.createElement("label",{...s,style:(n=a?.style)==null?void 0:n.label,className:l.join(" ")},e)},qC=cs({fontFamily:"$bodyFontFamily",fontSize:"$baseInputSize",marginBottom:"$labelBottomMargin",display:"block",textAlign:"center",borderRadius:"0.375rem",padding:"1.5rem 1rem",lineHeight:"1rem",color:"$messageText",backgroundColor:"$messageBackground",border:"1px solid $messageBorder",variants:{color:{danger:{color:"$messageTextDanger",backgroundColor:"$messageBackgroundDanger",border:"1px solid $messageBorderDanger"}}}}),Ri=({children:e,appearance:a,...s})=>{var n;const l=Or("message",qC({color:s.color}),a);return R.createElement("span",{...s,style:(n=a?.style)==null?void 0:n.message,className:l.join(" ")},e)};function Py({setAuthView:e=()=>{},supabaseClient:a,redirectTo:s,i18n:n,appearance:l,showLinks:c=!1}){var d;const[m,f]=I.useState(""),[p,b]=I.useState(""),[v,_]=I.useState(""),[S,w]=I.useState(!1),E=async N=>{var T,D;if(N.preventDefault(),b(""),_(""),w(!0),m.length===0){b((T=n?.magic_link)==null?void 0:T.empty_email_address),w(!1);return}const{error:M}=await a.auth.signInWithOtp({email:m,options:{emailRedirectTo:s}});M?b(M.message):_((D=n?.magic_link)==null?void 0:D.confirmation_text),w(!1)},z=n?.magic_link;return R.createElement("form",{id:"auth-magic-link",onSubmit:E},R.createElement(Oi,{gap:"large",direction:"vertical",appearance:l},R.createElement("div",null,R.createElement(js,{htmlFor:"email",appearance:l},z?.email_input_label),R.createElement(Us,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:z?.email_input_placeholder,onChange:N=>{b&&b(""),f(N.target.value)},appearance:l})),R.createElement(Un,{color:"primary",type:"submit",loading:S,appearance:l},S?z?.loading_button_label:z?.button_label),c&&R.createElement(Cr,{href:"#auth-sign-in",onClick:N=>{N.preventDefault(),e(yt.SIGN_IN)},appearance:l},(d=n?.sign_in)==null?void 0:d.link_text),v&&R.createElement(Ri,{appearance:l},v),p&&R.createElement(Ri,{color:"danger",appearance:l},p)))}const Gt=cs({width:"21px",height:"21px"}),GC=({provider:e})=>e=="google"?YC():e=="facebook"?XC():e=="twitter"?WC():e=="apple"?QC():e=="github"?ZC():e=="gitlab"?KC():e=="bitbucket"?JC():e=="discord"?ek():e=="azure"?tk():e=="keycloak"?ak():e=="linkedin"?ik():e=="notion"?sk():e=="slack"?rk():e=="spotify"?nk():e=="twitch"?ok():e=="workos"?lk():e=="kakao"?ck():null,YC=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),R.createElement("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),R.createElement("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),R.createElement("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})),XC=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"}),R.createElement("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})),WC=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#03A9F4",d:"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"})),QC=()=>R.createElement("svg",{className:Gt(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"21px",height:"21px"}," ",R.createElement("path",{d:"M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z"})),ZC=()=>R.createElement("svg",{className:Gt(),fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"21px",height:"21px"}," ",R.createElement("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})),KC=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#e53935",d:"M24 43L16 20 32 20z"}),R.createElement("path",{fill:"#ff7043",d:"M24 43L42 20 32 20z"}),R.createElement("path",{fill:"#e53935",d:"M37 5L42 20 32 20z"}),R.createElement("path",{fill:"#ffa726",d:"M24 43L42 20 45 28z"}),R.createElement("path",{fill:"#ff7043",d:"M24 43L6 20 16 20z"}),R.createElement("path",{fill:"#e53935",d:"M11 5L6 20 16 20z"}),R.createElement("path",{fill:"#ffa726",d:"M24 43L6 20 3 28z"})),JC=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 62.42 62.42"},R.createElement("defs",null,R.createElement("linearGradient",{id:"New_Gradient_Swatch_1",x1:"64.01",y1:"30.27",x2:"32.99",y2:"54.48",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0.18",stopColor:"#0052cc"}),R.createElement("stop",{offset:"1",stopColor:"#2684ff"}))),R.createElement("title",null,"Bitbucket-blue"),R.createElement("g",{id:"Layer_2","data-name":"Layer 2"},R.createElement("g",{id:"Blue",transform:"translate(0 -3.13)"},R.createElement("path",{d:"M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z",fill:"#2684ff"}),R.createElement("path",{d:"M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z",fill:"url(#New_Gradient_Swatch_1)"})))),ek=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#536dfe",d:"M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"})),tk=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6a",x1:"-1254.397",x2:"-1261.911",y1:"877.268",y2:"899.466",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopColor:"#114a8b"}),R.createElement("stop",{offset:"1",stopColor:"#0669bc"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6a)",d:"M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"}),R.createElement("path",{fill:"#0078d4",d:"M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"}),R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6b",x1:"-1252.05",x2:"-1253.788",y1:"887.612",y2:"888.2",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopOpacity:".3"}),R.createElement("stop",{offset:".071",stopOpacity:".2"}),R.createElement("stop",{offset:".321",stopOpacity:".1"}),R.createElement("stop",{offset:".623",stopOpacity:".05"}),R.createElement("stop",{offset:"1",stopOpacity:"0"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6b)",d:"M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"}),R.createElement("linearGradient",{id:"k8yl7~hDat~FaoWq8WjN6c",x1:"-1252.952",x2:"-1244.704",y1:"876.6",y2:"898.575",gradientTransform:"translate(1981.75 -1362.063) scale(1.5625)",gradientUnits:"userSpaceOnUse"},R.createElement("stop",{offset:"0",stopColor:"#3ccbf4"}),R.createElement("stop",{offset:"1",stopColor:"#2892df"})),R.createElement("path",{fill:"url(#k8yl7~hDat~FaoWq8WjN6c)",d:"M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"})),ak=()=>R.createElement("svg",{className:Gt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",fill:"#008AAA"})),ik=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#0288D1",d:"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"}),R.createElement("path",{fill:"#FFF",d:"M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"})),sk=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px",fillRule:"evenodd",clipRule:"evenodd"},R.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",clipRule:"evenodd"}),R.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",clipRule:"evenodd"}),R.createElement("path",{fill:"#424242",fillRule:"evenodd",d:"M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",clipRule:"evenodd"})),rk=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"21px",height:"21px"},R.createElement("path",{fill:"#33d375",d:"M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"}),R.createElement("path",{fill:"#33d375",d:"M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"}),R.createElement("path",{fill:"#40c4ff",d:"M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"}),R.createElement("path",{fill:"#40c4ff",d:"M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"}),R.createElement("path",{fill:"#e91e63",d:"M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"}),R.createElement("path",{fill:"#e91e63",d:"M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"}),R.createElement("path",{fill:"#ffc107",d:"M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"}),R.createElement("path",{fill:"#ffc107",d:"M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"})),nk=()=>R.createElement("svg",{className:Gt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",fill:"#1ED760"})),ok=()=>R.createElement("svg",{className:Gt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"white"}),R.createElement("path",{d:"M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",fill:"#9146FF"}),R.createElement("path",{d:"M368 120H336V216H368V120Z",fill:"#9146FF"}),R.createElement("path",{d:"M280 120H248V216H280V120Z",fill:"#9146FF"})),lk=()=>R.createElement("svg",{className:Gt(),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:"M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",fill:"#6363F1"}),R.createElement("path",{d:"M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",fill:"#6363F1"})),ck=()=>R.createElement("svg",{className:Gt(),xmlns:"http://www.w3.org/2000/svg",width:"2500",height:"2500",viewBox:"0 0 256 256"},R.createElement("path",{fill:"#FFE812",d:"M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"}),R.createElement("path",{d:"M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"}),R.createElement("path",{fill:"#FFE812",d:"M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"}));function uk({supabaseClient:e,socialLayout:a="vertical",providers:s=["github","google","azure"],providerScopes:n,queryParams:l,redirectTo:c,onlyThirdPartyProviders:d=!0,view:m="sign_in",i18n:f,appearance:p}){const[b,v]=I.useState(!1),[_,S]=I.useState(""),w=a==="vertical",E=m==="magic_link"?"sign_in":m,z=async T=>{v(!0);const{error:D}=await e.auth.signInWithOAuth({provider:T,options:{redirectTo:c,scopes:n?.[T],queryParams:l}});D&&S(D.message),v(!1)};function N(T){const D=T.toLowerCase();return T.charAt(0).toUpperCase()+D.slice(1)}return R.createElement(R.Fragment,null,s&&s.length>0&&R.createElement(R.Fragment,null,R.createElement(Oi,{gap:"large",direction:"vertical",appearance:p},R.createElement(Oi,{direction:w?"vertical":"horizontal",gap:w?"small":"medium",appearance:p},s.map(T=>{var D;return R.createElement(Un,{key:T,color:"default",loading:b,onClick:()=>z(T),appearance:p},R.createElement(GC,{provider:T}),w&&RC((D=f?.[E])==null?void 0:D.social_provider_text,{provider:N(T)}))}))),!d&&R.createElement(VC,{appearance:p})))}function Fv({authView:e="sign_in",defaultEmail:a="",defaultPassword:s="",setAuthView:n=()=>{},setDefaultEmail:l=w=>{},setDefaultPassword:c=w=>{},supabaseClient:d,showLinks:m=!1,redirectTo:f,additionalData:p,magicLink:b,i18n:v,appearance:_,children:S}){var w,E,z,N;const T=I.useRef(!0),[D,M]=I.useState(a),[A,H]=I.useState(s),[K,Z]=I.useState(""),[V,P]=I.useState(!1),[ae,ye]=I.useState("");I.useEffect(()=>(T.current=!0,M(a),H(s),()=>{T.current=!1}),[e]);const ke=async X=>{var Y;switch(X.preventDefault(),Z(""),P(!0),e){case"sign_in":const{error:ee}=await d.auth.signInWithPassword({email:D,password:A});ee&&Z(ee.message);break;case"sign_up":let ve={emailRedirectTo:f};p&&(ve.data=p);const{data:{user:Ae,session:aa},error:Wt}=await d.auth.signUp({email:D,password:A,options:ve});Wt?Z(Wt.message):Ae&&!aa&&ye((Y=v?.sign_up)==null?void 0:Y.confirmation_text);break}T.current&&P(!1)},_e=X=>{l(D),c(A),n(X)},xe=v?.[e];return R.createElement("form",{id:e==="sign_in"?"auth-sign-in":"auth-sign-up",onSubmit:ke,autoComplete:"on",style:{width:"100%"}},R.createElement(Oi,{direction:"vertical",gap:"large",appearance:_},R.createElement(Oi,{direction:"vertical",gap:"large",appearance:_},R.createElement("div",null,R.createElement(js,{htmlFor:"email",appearance:_},xe?.email_label),R.createElement(Us,{id:"email",type:"email",name:"email",placeholder:xe?.email_input_placeholder,defaultValue:D,onChange:X=>M(X.target.value),autoComplete:"email",appearance:_})),R.createElement("div",null,R.createElement(js,{htmlFor:"password",appearance:_},xe?.password_label),R.createElement(Us,{id:"password",type:"password",name:"password",placeholder:xe?.password_input_placeholder,defaultValue:A,onChange:X=>H(X.target.value),autoComplete:e==="sign_in"?"current-password":"new-password",appearance:_})),S),R.createElement(Un,{type:"submit",color:"primary",loading:V,appearance:_},V?xe?.loading_button_label:xe?.button_label),m&&R.createElement(Oi,{direction:"vertical",gap:"small",appearance:_},e===yt.SIGN_IN&&b&&R.createElement(Cr,{href:"#auth-magic-link",onClick:X=>{X.preventDefault(),n(yt.MAGIC_LINK)},appearance:_},(w=v?.magic_link)==null?void 0:w.link_text),e===yt.SIGN_IN&&R.createElement(Cr,{href:"#auth-forgot-password",onClick:X=>{X.preventDefault(),n(yt.FORGOTTEN_PASSWORD)},appearance:_},(E=v?.forgotten_password)==null?void 0:E.link_text),e===yt.SIGN_IN?R.createElement(Cr,{href:"#auth-sign-up",onClick:X=>{X.preventDefault(),_e(yt.SIGN_UP)},appearance:_},(z=v?.sign_up)==null?void 0:z.link_text):R.createElement(Cr,{href:"#auth-sign-in",onClick:X=>{X.preventDefault(),_e(yt.SIGN_IN)},appearance:_},(N=v?.sign_in)==null?void 0:N.link_text))),ae&&R.createElement(Ri,{appearance:_},ae),K&&R.createElement(Ri,{color:"danger",appearance:_},K))}function Fy({setAuthView:e=()=>{},supabaseClient:a,redirectTo:s,i18n:n,appearance:l,showLinks:c=!1}){var d;const[m,f]=I.useState(""),[p,b]=I.useState(""),[v,_]=I.useState(""),[S,w]=I.useState(!1),E=async N=>{var T;N.preventDefault(),b(""),_(""),w(!0);const{error:D}=await a.auth.resetPasswordForEmail(m,{redirectTo:s});D?b(D.message):_((T=n?.forgotten_password)==null?void 0:T.confirmation_text),w(!1)},z=n?.forgotten_password;return R.createElement("form",{id:"auth-forgot-password",onSubmit:E},R.createElement(Oi,{direction:"vertical",gap:"large",appearance:l},R.createElement(Oi,{gap:"large",direction:"vertical",appearance:l},R.createElement("div",null,R.createElement(js,{htmlFor:"email",appearance:l},z?.email_label),R.createElement(Us,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:z?.email_input_placeholder,onChange:N=>f(N.target.value),appearance:l})),R.createElement(Un,{type:"submit",color:"primary",loading:S,appearance:l},S?z?.loading_button_label:z?.button_label),c&&R.createElement(Cr,{href:"#auth-sign-in",onClick:N=>{N.preventDefault(),e(yt.SIGN_IN)},appearance:l},(d=n?.sign_in)==null?void 0:d.link_text),v&&R.createElement(Ri,{appearance:l},v),p&&R.createElement(Ri,{color:"danger",appearance:l},p))))}function qy({supabaseClient:e,i18n:a,appearance:s}){const[n,l]=I.useState(""),[c,d]=I.useState(""),[m,f]=I.useState(""),[p,b]=I.useState(!1),v=async S=>{var w;S.preventDefault(),d(""),f(""),b(!0);const{error:E}=await e.auth.updateUser({password:n});E?d(E.message):f((w=a?.update_password)==null?void 0:w.confirmation_text),b(!1)},_=a?.update_password;return R.createElement("form",{id:"auth-update-password",onSubmit:v},R.createElement(Oi,{gap:"large",direction:"vertical",appearance:s},R.createElement("div",null,R.createElement(js,{htmlFor:"password",appearance:s},_?.password_label),R.createElement(Us,{id:"password",name:"password",placeholder:_?.password_input_placeholder,type:"password",autoFocus:!0,onChange:S=>l(S.target.value),appearance:s})),R.createElement(Un,{type:"submit",color:"primary",loading:p,appearance:s},p?_?.loading_button_label:_?.button_label),m&&R.createElement(Ri,{appearance:s},m),c&&R.createElement(Ri,{color:"danger",appearance:s},c)))}function dk({setAuthView:e=()=>{},supabaseClient:a,otpType:s="email",i18n:n,appearance:l,showLinks:c=!1}){var d;const[m,f]=I.useState(""),[p,b]=I.useState(""),[v,_]=I.useState(""),[S,w]=I.useState(""),[E,z]=I.useState(""),[N,T]=I.useState(!1),D=async A=>{A.preventDefault(),w(""),z(""),T(!0);let H={email:m,token:v,type:s};["sms","phone_change"].includes(s)&&(H={phone:p,token:v,type:s});const{error:K}=await a.auth.verifyOtp(H);K&&w(K.message),T(!1)},M=n?.verify_otp;return R.createElement("form",{id:"auth-magic-link",onSubmit:D},R.createElement(Oi,{gap:"large",direction:"vertical",appearance:l},["sms","phone_change"].includes(s)?R.createElement("div",null,R.createElement(js,{htmlFor:"phone",appearance:l},M?.phone_input_label),R.createElement(Us,{id:"phone",name:"phone",type:"text",autoFocus:!0,placeholder:M?.phone_input_placeholder,onChange:A=>b(A.target.value),appearance:l})):R.createElement("div",null,R.createElement(js,{htmlFor:"email",appearance:l},M?.email_input_label),R.createElement(Us,{id:"email",name:"email",type:"email",autoFocus:!0,placeholder:M?.email_input_placeholder,onChange:A=>f(A.target.value),appearance:l})),R.createElement("div",null,R.createElement(js,{htmlFor:"token",appearance:l},M?.token_input_label),R.createElement(Us,{id:"token",name:"token",type:"text",placeholder:M?.token_input_placeholder,onChange:A=>_(A.target.value),appearance:l})),R.createElement(Un,{color:"primary",type:"submit",loading:N,appearance:l},N?M?.loading_button_label:M?.button_label),c&&R.createElement(Cr,{href:"#auth-sign-in",onClick:A=>{A.preventDefault(),e(yt.SIGN_IN)},appearance:l},(d=n?.sign_in)==null?void 0:d.link_text),E&&R.createElement(Ri,{appearance:l},E),S&&R.createElement(Ri,{color:"danger",appearance:l},S)))}const Gy=I.createContext({user:null,session:null}),hk=e=>{const{supabaseClient:a}=e,[s,n]=I.useState(null),[l,c]=I.useState(s?.user??null);I.useEffect(()=>{(async()=>{var f;const{data:p}=await a.auth.getSession();n(p.session),c(((f=p.session)==null?void 0:f.user)??null)})();const{data:m}=a.auth.onAuthStateChange(async(f,p)=>{n(p),c(p?.user??null)});return()=>{m?.subscription.unsubscribe()}},[]);const d={session:s,user:l};return R.createElement(Gy.Provider,{value:d,...e})},fk=()=>{const e=I.useContext(Gy);if(e===void 0)throw new Error("useUser must be used within a UserContextProvider.");return e};function Dr({supabaseClient:e,socialLayout:a="vertical",providers:s,providerScopes:n,queryParams:l,view:c="sign_in",redirectTo:d,onlyThirdPartyProviders:m=!1,magicLink:f=!1,showLinks:p=!0,appearance:b,theme:v="default",localization:_={variables:{}},otpType:S="email",additionalData:w,children:E}){const z=pf(BC,_.variables??{}),[N,T]=I.useState(c),[D,M]=I.useState(""),[A,H]=I.useState(""),K=N==="sign_in"||N==="sign_up"||N==="magic_link";I.useEffect(()=>{var P,ae;jy({theme:pf(((P=b?.theme)==null?void 0:P.default)??{},((ae=b?.variables)==null?void 0:ae.default)??{})})},[b]);const Z=({children:P})=>{var ae;return R.createElement("div",{className:v!=="default"?OC(pf(b?.theme[v],((ae=b?.variables)==null?void 0:ae[v])??{})):""},K&&R.createElement(uk,{appearance:b,supabaseClient:e,providers:s,providerScopes:n,queryParams:l,socialLayout:a,redirectTo:d,onlyThirdPartyProviders:m,i18n:z,view:N}),!m&&P)};I.useEffect(()=>{const{data:P}=e.auth.onAuthStateChange(ae=>{ae==="PASSWORD_RECOVERY"?T("update_password"):ae==="USER_UPDATED"&&T("sign_in")});return T(c),()=>P.subscription.unsubscribe()},[c]);const V={supabaseClient:e,setAuthView:T,defaultEmail:D,defaultPassword:A,setDefaultEmail:M,setDefaultPassword:H,redirectTo:d,magicLink:f,showLinks:p,i18n:z,appearance:b};switch(N){case yt.SIGN_IN:return R.createElement(Z,null,R.createElement(Fv,{...V,authView:"sign_in"}));case yt.SIGN_UP:return R.createElement(Z,null,R.createElement(Fv,{appearance:b,supabaseClient:e,authView:"sign_up",setAuthView:T,defaultEmail:D,defaultPassword:A,setDefaultEmail:M,setDefaultPassword:H,redirectTo:d,magicLink:f,showLinks:p,i18n:z,additionalData:w,children:E}));case yt.FORGOTTEN_PASSWORD:return R.createElement(Z,null,R.createElement(Fy,{appearance:b,supabaseClient:e,setAuthView:T,redirectTo:d,showLinks:p,i18n:z}));case yt.MAGIC_LINK:return R.createElement(Z,null,R.createElement(Py,{appearance:b,supabaseClient:e,setAuthView:T,redirectTo:d,showLinks:p,i18n:z}));case yt.UPDATE_PASSWORD:return R.createElement(qy,{appearance:b,supabaseClient:e,i18n:z});case yt.VERIFY_OTP:return R.createElement(dk,{appearance:b,supabaseClient:e,otpType:S,i18n:z});default:return null}}Dr.ForgottenPassword=Fy;Dr.UpdatePassword=qy;Dr.MagicLink=Py;Dr.UserContextProvider=hk;Dr.useUser=fk;cs({borderRadius:"12px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:"360px",padding:"28px 32px"});const pk=cw("SocialLogin",{web:()=>la(()=>import("./web-J7tvJO-D.js"),__vite__mapDeps([6,1])).then(e=>new e.SocialLoginWeb)}),mk=async()=>{if(Ar.isNativePlatform())try{const a=(await pk.login({provider:"apple",options:{}})).result;if(a?.idToken){const{data:s,error:n}=await ei.auth.signInWithIdToken({provider:"apple",token:a.idToken});if(n)throw n;return s}else throw new Error("Native Apple Sign-In did not return an ID token.")}catch(e){throw console.error("Native Apple Sign-In failed:",e),e}else return ei.auth.signInWithOAuth({provider:"apple"})},gk="_container_1rhlz_1",qv={container:gk,"apple-button":"_apple-button_1rhlz_9"};function bk(){const e=Ve(),[a,s]=I.useState(!1);I.useEffect(()=>{(async()=>{if(Ar.isNativePlatform()){const d=await Ar.getPlatform();s(d==="ios")}else s(!0)})()},[]),I.useEffect(()=>{if(window.location.hash&&window.location.hash.includes("access_token=")){const c=new URLSearchParams(window.location.hash.substring(1)),d=c.get("access_token"),m=c.get("refresh_token");d&&m&&ei.auth.setSession({access_token:d,refresh_token:m})}},[]);const n=async()=>{try{await mk()}catch(c){console.error("Apple login failed",c)}},l={sign_in:{email_label:e.formatMessage({id:"auth.emailLabel"}),password_label:e.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:e.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:e.formatMessage({id:"auth.passwordPlaceholder"}),button_label:e.formatMessage({id:"auth.signInButton"}),social_provider_text:e.formatMessage({id:"auth.signInWithProvider"}),link_text:e.formatMessage({id:"auth.forgotPassword"})},forgotten_password:{email_label:e.formatMessage({id:"auth.emailLabel"}),email_input_placeholder:e.formatMessage({id:"auth.emailPlaceholder"}),button_label:e.formatMessage({id:"auth.sendResetInstructions"}),link_text:e.formatMessage({id:"auth.rememberedPassword"})}};return x.jsxs("div",{className:qv.container,children:[a&&x.jsxs(gi,{variant:"default",size:"large",onClick:n,className:qv["apple-button"],children:[x.jsx(ta,{slot:"prefix",name:"apple"}),e.formatMessage({id:"auth.signInWithProviderCustom"},{provider:"Apple"})]}),x.jsx(Dr,{supabaseClient:ei,appearance:{theme:Vy,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname,view:"sign_in",localization:{variables:l},showLinks:!1})]})}const vk="_pageWrapper_vj5zy_1",yk="_pageContent_vj5zy_12",_k="_legalLinks_vj5zy_22",mf={pageWrapper:vk,pageContent:yk,legalLinks:_k};function Gv(){return x.jsx("div",{className:mf.pageWrapper,children:x.jsxs("div",{className:mf.pageContent,children:[x.jsx(ls,{}),x.jsx(bk,{}),x.jsxs("div",{className:mf.legalLinks,children:[x.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),x.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const xk="_container_1r3fc_1",tl={container:xk};function wk(){const e=Ve(),[a]=Ow(),s=Ba(),[n,l]=I.useState(!1),[c,d]=I.useState(null),m={sign_up:{email_label:e.formatMessage({id:"auth.emailLabel"}),password_label:e.formatMessage({id:"auth.passwordLabel"}),email_input_placeholder:e.formatMessage({id:"auth.emailPlaceholder"}),password_input_placeholder:e.formatMessage({id:"auth.passwordPlaceholder"}),button_label:e.formatMessage({id:"auth.signUpButton"}),social_provider_text:e.formatMessage({id:"auth.signUpWithProvider"}),link_text:e.formatMessage({id:"auth.alreadyHaveAccount"})}},f=a.get("token"),p=I.useRef(f),b=I.useRef(!1);I.useEffect(()=>{const E=async N=>{if(b.current)return;b.current=!0,l(!0),d(null);const T=p.current;if(!T){console.error("Invite token is missing after sign-in."),l(!1),b.current=!1;return}try{const{error:D}=await ei.functions.invoke("complete-invite",{body:{token:T,newAuthId:N.user.id}});if(D)throw D;s("/invite-success")}catch(D){console.error("Failed to complete the invite process:",D),d(D instanceof Error?D.message:"An unexpected error occurred"),l(!1),b.current=!1}},{data:{subscription:z}}=ei.auth.onAuthStateChange((N,T)=>{(N==="SIGNED_IN"||N==="INITIAL_SESSION")&&T&&E(T)});if(ei.auth.getSession().then(({data:{session:N}})=>{N&&E(N)}),window.location.hash&&window.location.hash.includes("access_token=")){const N=new URLSearchParams(window.location.hash.substring(1)),T=N.get("access_token"),D=N.get("refresh_token");T&&D&&ei.auth.setSession({access_token:T,refresh_token:D})}return()=>z.unsubscribe()},[s]);const{data:v,isLoading:_,isError:S,error:w}=uw({token:f});return f?_||n?x.jsx("div",{className:tl.container,children:x.jsx("p",{children:e.formatMessage({id:"invite.checkingToken"})})}):S?x.jsx("div",{className:tl.container,children:x.jsx("p",{children:e.formatMessage({id:"invite.errorCheckingToken"},{message:w?.message})})}):c?x.jsx("div",{className:tl.container,children:x.jsx("p",{children:e.formatMessage({id:"invite.error"},{message:c})})}):x.jsx("div",{className:tl.container,children:v?.status==="valid"?x.jsx(Dr,{supabaseClient:ei,appearance:{theme:Vy,variables:{default:{colors:{inputBackground:"var(--sl-color-neutral-0)",brand:"var(--sl-color-primary-500)",brandAccent:"var(--sl-color-primary-700)"}}}},providers:["google","apple"],queryParams:{access_type:"offline"},redirectTo:window.location.origin+window.location.pathname+window.location.search,view:"sign_up",localization:{variables:m},showLinks:!1}):v?.status==="used"?x.jsx("div",{children:x.jsx("p",{children:e.formatMessage({id:"invite.tokenUsed"})})}):x.jsx("div",{children:x.jsx("p",{children:e.formatMessage({id:"invite.invalidToken"})})})}):x.jsx("div",{className:tl.container,children:x.jsx("p",{children:e.formatMessage({id:"invite.noToken"})})})}const Sk="_pageWrapper_1smi3_1",Ck="_pageContent_1smi3_12",kk="_legalLinks_1smi3_21",gf={pageWrapper:Sk,pageContent:Ck,legalLinks:kk};function Yy(){return x.jsx("div",{className:gf.pageWrapper,children:x.jsxs("div",{className:gf.pageContent,children:[x.jsx(ls,{}),x.jsx(wk,{}),x.jsxs("div",{className:gf.legalLinks,children:[x.jsx("a",{href:"/terms-of-service.html",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"}),x.jsx("a",{href:"/privacy-policy.html",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]})})}const Ek="_pageWrapper_1smi3_1",$k="_pageContent_1smi3_12",Yv={pageWrapper:Ek,pageContent:$k};function Xy(){return x.jsxs("div",{className:Yv.pageWrapper,children:[x.jsx(ls,{}),x.jsxs("div",{className:Yv.pageContent,children:[x.jsx("h1",{children:x.jsx($e,{id:"invite.success.title"})}),x.jsx("p",{children:x.jsx($e,{id:"invite.success.message"})}),x.jsx("p",{children:x.jsx($e,{id:"invite.success.instructions"})}),x.jsx(gi,{variant:"primary",href:"/",children:x.jsx($e,{id:"common.continue"})})]})]})}var Ak=fe`
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
`,Tk=0,ii=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.attrId=++Tk,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,W`
      <div
        part="base"
        class=${me({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?W`
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
    `}};ii.styles=[ge,Ak];ii.dependencies={"sl-icon-button":Et};g([te(".tab")],ii.prototype,"tab",2);g([C({reflect:!0})],ii.prototype,"panel",2);g([C({type:Boolean,reflect:!0})],ii.prototype,"active",2);g([C({type:Boolean,reflect:!0})],ii.prototype,"closable",2);g([C({type:Boolean,reflect:!0})],ii.prototype,"disabled",2);g([C({type:Number,reflect:!0})],ii.prototype,"tabIndex",2);g([J("active")],ii.prototype,"handleActiveChange",1);g([J("disabled")],ii.prototype,"handleDisabledChange",1);var zk="sl-tab";ii.define("sl-tab");var Mk=de({tagName:zk,elementClass:ii,react:ue,events:{onSlClose:"sl-close"},displayName:"SlTab"}),Xv=Mk,Nk=fe`
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
`,Ok=fe`
  :host {
    display: contents;
  }
`,jn=class extends oe{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const a=e.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],a.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return W` <slot @slotchange=${this.handleSlotChange}></slot> `}};jn.styles=[ge,Ok];g([C({type:Boolean,reflect:!0})],jn.prototype,"disabled",2);g([J("disabled",{waitUntilFirstUpdate:!0})],jn.prototype,"handleDisabledChange",1);var Ht=class extends oe{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Ie(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(a=>{const s=a.filter(({target:n})=>{if(n===this)return!0;if(n.closest("sl-tab-group")!==this)return!1;const l=n.tagName.toLowerCase();return l==="sl-tab"||l==="sl-tab-panel"});if(s.length!==0){if(s.some(n=>!["aria-labelledby","aria-controls"].includes(n.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(n=>n.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(n=>n.attributeName==="active")){const l=s.filter(c=>c.attributeName==="active"&&c.target.tagName.toLowerCase()==="sl-tab").map(c=>c.target).find(c=>c.active);l&&this.setActiveTab(l)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((s,n)=>{var l;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((l=this.getActiveTab())!=null?l:this.tabs[0],{emitEvents:!1}),n.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,a;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((a=this.resizeObserver)==null||a.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const s=e.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(e){const s=e.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const l=this.tabs.find(m=>m.matches(":focus")),c=this.localize.dir()==="rtl";let d=null;if(l?.tagName.toLowerCase()==="sl-tab"){if(e.key==="Home")d=this.focusableTabs[0];else if(e.key==="End")d=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(c?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const m=this.tabs.findIndex(f=>f===l);d=this.findNextFocusableTab(m,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(c?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const m=this.tabs.findIndex(f=>f===l);d=this.findNextFocusableTab(m,"forward")}if(!d)return;d.tabIndex=0,d.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(d,{scrollBehavior:"smooth"}):this.tabs.forEach(m=>{m.tabIndex=m===d?0:-1}),["top","bottom"].includes(this.placement)&&Qf(d,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,a){if(a=ns({emitEvents:!0,scrollBehavior:"auto"},a),e!==this.activeTab&&!e.disabled){const s=this.activeTab;this.activeTab=e,this.tabs.forEach(n=>{n.active=n===this.activeTab,n.tabIndex=n===this.activeTab?0:-1}),this.panels.forEach(n=>{var l;return n.active=n.name===((l=this.activeTab)==null?void 0:l.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Qf(this.activeTab,this.nav,"horizontal",a.scrollBehavior),a.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const a=this.panels.find(s=>s.name===e.panel);a&&(e.setAttribute("aria-controls",a.getAttribute("id")),a.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const a=e.clientWidth,s=e.clientHeight,n=this.localize.dir()==="rtl",l=this.getAllTabs(),d=l.slice(0,l.indexOf(e)).reduce((m,f)=>({left:m.left+f.clientWidth,top:m.top+f.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${a}px`,this.indicator.style.height="auto",this.indicator.style.translate=n?`${-1*d.left}px`:`${d.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${d.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,a){let s=null;const n=a==="forward"?1:-1;let l=e+n;for(;e<this.tabs.length;){if(s=this.tabs[l]||null,s===null){a==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;l+=n}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const a=this.tabs.find(s=>s.panel===e);a&&this.setActiveTab(a,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return W`
      <div
        part="base"
        class=${me({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?W`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${me({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?W`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${me({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Ht.styles=[ge,Nk];Ht.dependencies={"sl-icon-button":Et,"sl-resize-observer":jn};g([te(".tab-group")],Ht.prototype,"tabGroup",2);g([te(".tab-group__body")],Ht.prototype,"body",2);g([te(".tab-group__nav")],Ht.prototype,"nav",2);g([te(".tab-group__indicator")],Ht.prototype,"indicator",2);g([pe()],Ht.prototype,"hasScrollControls",2);g([pe()],Ht.prototype,"shouldHideScrollStartButton",2);g([pe()],Ht.prototype,"shouldHideScrollEndButton",2);g([C()],Ht.prototype,"placement",2);g([C()],Ht.prototype,"activation",2);g([C({attribute:"no-scroll-controls",type:Boolean})],Ht.prototype,"noScrollControls",2);g([C({attribute:"fixed-scroll-controls",type:Boolean})],Ht.prototype,"fixedScrollControls",2);g([yl({passive:!0})],Ht.prototype,"updateScrollButtons",1);g([J("noScrollControls",{waitUntilFirstUpdate:!0})],Ht.prototype,"updateScrollControls",1);g([J("placement",{waitUntilFirstUpdate:!0})],Ht.prototype,"syncIndicator",1);var Dk="sl-tab-group";Ht.define("sl-tab-group");var Lk=de({tagName:Dk,elementClass:Ht,react:ue,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),Rk=Lk,Bk=(e,a)=>{let s=0;return function(...n){window.clearTimeout(s),s=window.setTimeout(()=>{e.call(this,...n)},a)}},Wv=(e,a,s)=>{const n=e[a];e[a]=function(...l){n.call(this,...l),s.call(this,n,...l)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const a=new Set,s=new WeakMap,n=c=>{for(const d of c.changedTouches)a.add(d.identifier)},l=c=>{for(const d of c.changedTouches)a.delete(d.identifier)};document.addEventListener("touchstart",n,!0),document.addEventListener("touchend",l,!0),document.addEventListener("touchcancel",l,!0),Wv(EventTarget.prototype,"addEventListener",function(c,d){if(d!=="scrollend")return;const m=Bk(()=>{a.size?m():this.dispatchEvent(new Event("scrollend"))},100);c.call(this,"scroll",m,{passive:!0}),s.set(this,m)}),Wv(EventTarget.prototype,"removeEventListener",function(c,d){if(d!=="scrollend")return;const m=s.get(this);m&&c.call(this,"scroll",m,{passive:!0})})}})();const Hk="_shell_fdhcs_1",Uk="_content_fdhcs_12",jk="_footer_fdhcs_17",Ik="_tabContent_fdhcs_47",al={shell:Hk,content:Uk,footer:jk,tabContent:Ik};function Vk({children:e}){const a=Ba(),s=wu(),n=I.useRef(null);I.useEffect(()=>{n.current&&n.current.show(s.pathname)},[s.pathname]);const l=c=>{a(c.detail.name)};return x.jsxs("div",{className:al.shell,children:[x.jsx("main",{className:al.content,children:e}),x.jsx("footer",{className:al.footer,children:x.jsxs(Rk,{ref:n,placement:"bottom",onSlTabShow:l,children:[x.jsx(Xv,{slot:"nav",panel:"/stable",active:s.pathname==="/stable",onClick:()=>s.pathname!=="/stable"&&a("/stable"),role:"tab",children:x.jsx("div",{className:al.tabContent,children:x.jsx(ta,{src:"/assets/stables.svg"})})}),x.jsx(Xv,{slot:"nav",panel:"/horse",active:s.pathname==="/horse",onClick:()=>s.pathname!=="/horse"&&a("/horse"),role:"tab",children:x.jsx("div",{className:al.tabContent,children:x.jsx(ta,{src:"/assets/horses.svg"})})})]})})]})}const bu={"auth.login.title":"Login","auth.signup.title":"Sign up","roster.header.date":"Date","roster.emptySlot":"Tap to assign","roster.edit.drawerLabel":"Edit Roster for {slotName}","roster.edit.assignedHeader":"Assigned:","roster.edit.unassignedHeader":"Available to Add","roster.edit.emptyState":"No members assigned.","roster.shareWeekLabel":"Share week","shell.tab.roster":"Roster","shell.tab.profile":"Profile","shell.tab.users":"Friends","profile.header.title":"Profile","profile.logout":"Logout","profile.info":"Info","share.rosterTitle":"Stable Roster","share.rosterText":"Check out this week's roster!","common.save":"Save","common.cancel":"Cancel","common.remove":"Remove","roster.loadPrevious":"Load previous weeks","roster.loadNext":"Load next weeks","auth.emailLabel":"Email address","auth.passwordLabel":"Password","auth.emailPlaceholder":"Your email address","auth.passwordPlaceholder":"Your password","auth.signInButton":"Sign in","auth.signInWithProvider":"Sign in with '{{provider}}'","auth.signInWithProviderCustom":"Sign in with {provider}","auth.signUpButton":"Sign up","auth.signUpWithProvider":"Sign up with '{{provider}}'","auth.alreadyHaveAccount":"Already have an account? Sign in","auth.forgotPassword":"Forgot your password?","auth.sendResetInstructions":"Send reset instructions","auth.rememberedPassword":"Remember your password? Sign in","manageUsers.you":"You","manageUsers.inviteUser":"Invite user","manageUsers.loading":"Loading users...","manageUsers.error":"Error loading users: {message}","manageUsers.removeUser":"Remove user","manageUsers.removeConfirmation":"Are you sure you want to remove {username} from this organization?","manageHorses.yours":"Yours","manageHorses.loading":"Loading horses...","manageHorses.error":"Error loading horses: {message}","manageHorses.removeHorse":"Remove horse","manageHorses.removeConfirmation":"Are you sure you want to remove {horseName} It will completely erase everything about this horse from the system!?","manageHorses.addHorse":"Add Horse","manageHorses.noHorsesFound":"No horses found that are boarded at this location","manageUsers.addUser":"Add user","users.firstNameLabel":"First Name","users.lastNameLabel":"Last Name","horses.nameLabel":"Name","horses.officialNameLabel":"Official Name","horses.ownerLabel":"Owner","horses.chipNumberLabel":"Transponder (chip) Number","horses.uelnLabel":"Life Number (UELN)","users.languageLabel":"Language","users.nicknameLabel":"Nickname","users.roleLabel":"Role","organization.role.owner":"Stable owner","organization.role.member":"Stable buddy","common.language.dutch":"Dutch","common.language.english":"English","horses.noMembersFound":"No members found in this stable","common.close":"Close","invite.checkingToken":"Checking invite token...","invite.noToken":"No invite token found in the URL.","invite.invalidToken":"The invite token is invalid or has expired.","invite.tokenUsed":"This invite token has already been used.","invite.errorCheckingToken":"An error occurred while checking the invite token: {message}","invite.goToLogin":"Go to Login","invite.share.title":"Invite to Is My Horse","invite.share.text":"You've been invited to join our stable on Is My Horse. Sign up here:","invite.share.error":"Could not create invite link. Please try again.","invite.success.title":"Signup Successful!","invite.success.message":"Your account has been successfully created! From now on you can log in with the account you just created.","invite.success.instructions":"Click the button below to go to the start page of the app","invite.success.login":"Log in","dashboard.roster.title":"Rosters","dashboard.roster.description":"Rosters for e.g. stable duty","shell.tab.dashboard":"Dashboard","dashboard.members.title":"Stable buddies","dashboard.members.description":"People who are connected to the stable","dashboard.horses.title":"Horses","dashboard.horses.description":"Horses stabled here","dashboard.horses.count":"({count})","dashboard.facilities.title":"Facilities","dashboard.facilities.description":"to reserve things like an arena","navigation.back":"Back","dashboard.myHorses.title":"My Horses","dashboard.myHorses.description":"My own horses","dashboard.relatedHorses.title":"From Stable Buddies","dashboard.relatedHorses.description":"Horses of others at the stable","dashboard.following.title":"Following","dashboard.following.description":"Other horses I follow","invite.noProfile.title":"Account Not Fully Activated","invite.noProfile.message":"This is an invite-only beta. Your account must be linked to an invitation to proceed. If you have an invite link, please use it to sign up.","common.continue":"Continue","Initial ownership set by stable admin.":"This horse has been created by the stable owner and assigned to you.","dashboard.myHorses.acceptOwnershipQuestion":"Is {horseName} indeed your horse?","common.yes":"Yes","common.no":"No","ownershipTransfer.status.pending":"pending","ownershipTransfer.status.accepted":"accepted","ownershipTransfer.status.rejected":"rejected","ownershipTransfer.status.cancelled":"cancelled","validation.required":"This field is required.","validation.uelnInvalid":"UELN must be exactly 15 characters long.","validation.chipOrUelnRequired":"Please provide either a Chip Number or a UELN.","horses.scanBarcode":"Scan Barcode","validation.emailInvalid":"Please enter a valid email address.","validation.ageMinimum":"User must be at least 13 years old.","gender.other":"Other / Prefer not to say","gender.male":"Male","gender.female":"Female","users.genderLabel":"Gender","horses.dateOfBirthLabel":"Date of Birth","horses.genderLabel":"Gender","gender.stallion":"Stallion","gender.mare":"Mare","gender.gelding":"Gelding","horses.countryOfBirthLabel":"Country of Birth","horses.passportNumberLabel":"Passport Number","horses.colorLabel":"Color","horses.breedStudbookLabel":"Breed/Studbook","horses.markingsLabel":"Markings","horses.chipLocationLabel":"Transponder Location","users.dateOfBirthLabel":"Date of Birth","users.cityLabel":"City","users.countryLabel":"Country","profile.notFound":"Profile not found.","profile.NoDisplayName":"No profile name","organization.cocLabel":"Chamber of Commerce","common.notSet":"not set","profile.privacyNotification":"Only you and the stable admin of {organizationName} ({adminName}) can see this information.","profile.stable.member":"Stable buddy at {organizationName} (as {nickName})","profile.stable.admin":"Admin at {organizationName} (as {nickName})","profile.stable.owner":"Owner at {organizationName} (as {nickName})","profile.organization.location":"Stable in {city}","profile.privacyNotification.organization":"Only visible to you.","profile.privacyNotification.user":"Only you and the admins of the stables you are a member of can see this information."},Pk=Object.freeze(Object.defineProperty({__proto__:null,default:bu},Symbol.toStringTag,{value:"Module"})),Fk="_panel_1nlou_1",qk="_panelContent_1nlou_17",Gk="_icon_1nlou_23",Yk="_content_1nlou_31",Xk="_textContent_1nlou_40",Wk="_quickAction_1nlou_56",Qk="_chevron_1nlou_65",Zk="_lime_1nlou_73",Kk="_sky_1nlou_76",Jk="_rose_1nlou_79",eE="_brown_1nlou_82",Rs={panel:Fk,panelContent:qk,icon:Gk,content:Yk,textContent:Xk,quickAction:Wk,chevron:Qk,lime:Zk,sky:Kk,rose:Jk,brown:eE};function Lr({icon:e,title:a,description:s,link:n,variant:l="lime",quickAction:c}){const d=n?"a":"div",m=f=>{f.stopPropagation()};return x.jsxs(d,{href:n,className:`${Rs.panel} ${Rs[l]}`,onClick:f=>!n&&f.preventDefault(),children:[x.jsxs("div",{className:Rs.panelContent,children:[x.jsx("div",{className:Rs.icon,children:e}),x.jsx("div",{className:Rs.content,children:x.jsxs("div",{className:Rs.textContent,children:[x.jsx("strong",{children:a}),s&&x.jsx("span",{children:s})]})}),n&&x.jsx("div",{className:Rs.chevron,children:x.jsx(ta,{name:"chevron-right"})})]}),c&&x.jsx("div",{className:Rs.quickAction,onClick:m,children:c})]})}const tE="_rosterLinks_1um2j_1",aE="_rosterLink_1um2j_1",Qv={rosterLinks:tE,rosterLink:aE};function iE({organization_id:e}){const a=Ve(),{data:s}=dw({organizationId:e});return x.jsx(Lr,{variant:"sky",icon:x.jsx(ta,{name:"calendar"}),title:a.formatMessage({id:"dashboard.roster.title"}),description:a.formatMessage({id:"dashboard.roster.description"}),quickAction:s&&x.jsx("div",{className:Qv.rosterLinks,children:s.map(n=>x.jsxs(Mw,{to:`/stable/${e}/roster/${n.id}`,className:Qv.rosterLink,children:[x.jsx(ta,{name:"calendar-date"}),x.jsx("span",{children:n.name})]},n.id))})})}const sE="_quickAction_kr3qy_1",rE="_avatarStack_kr3qy_7",Zv={quickAction:sE,avatarStack:rE};function nE({organization_id:e}){const a=Ve(),{data:s}=lp({organizationId:e,enabled:!!e}),n=(c,d)=>{const m=c?c.charAt(0).toUpperCase():"",f=d?d.charAt(0).toUpperCase():"";return`${m}${f}`},l=s?x.jsxs("div",{className:Zv.quickAction,children:[x.jsx("div",{className:Zv.avatarStack,children:s.slice(0,8).map(c=>x.jsx(Is,{initials:n(c.user_profiles?.firstname,c.user_profiles?.lastname)},c.id))}),x.jsxs("span",{children:["(",s.length,")"]})]}):null;return x.jsx(Lr,{variant:"rose",icon:x.jsx(ta,{name:"people"}),title:a.formatMessage({id:"dashboard.members.title"}),description:a.formatMessage({id:"dashboard.members.description"}),link:`/stable/${e}/members`,quickAction:l})}const oE="_quickAction_1euwo_1",lE="_avatarStack_1euwo_7",Kv={quickAction:oE,avatarStack:lE},{useOrganizationHorses:cE}=await la(async()=>{const{useOrganizationHorses:e}=await import("./index-BJBUXxrc.js").then(a=>a.aC);return{useOrganizationHorses:e}},[]),uE=e=>e?e.split(" ").map(a=>a.charAt(0).toUpperCase()).join(""):"";function dE({organization_id:e}){const a=Ve(),{data:s}=cE({organizationId:e,enabled:!!e}),n=s?x.jsxs("div",{className:Kv.quickAction,children:[x.jsx("div",{className:Kv.avatarStack,children:s.slice(0,8).map(l=>x.jsx(Is,{initials:uE(l.name)},l.id))}),x.jsxs("span",{children:["(",s.length,")"]})]}):null;return x.jsx(Lr,{variant:"brown",icon:x.jsx(ta,{src:"assets/stables.svg"}),title:a.formatMessage({id:"dashboard.horses.title"}),link:`/stable/${e}/horses`,description:a.formatMessage({id:"dashboard.horses.description"}),quickAction:n})}function hE(){const e=Ve();return x.jsx(Lr,{variant:"lime",icon:x.jsx(ta,{name:"bookmark-plus"}),title:e.formatMessage({id:"dashboard.facilities.title"}),description:e.formatMessage({id:"dashboard.facilities.description"})})}const fE="_pageWrapper_1yu7k_1",pE="_pageContent_1yu7k_10",Jv={pageWrapper:fE,pageContent:pE};function mE(){const e=Ve(),a=Ba(),{data:s,isLoading:n}=op({enabled:!0});return x.jsxs("div",{className:Jv.pageWrapper,children:[x.jsx(ls,{headerActions:x.jsx(_t,{label:e.formatMessage({id:"shell.tab.profile"}),onClick:()=>a("/profile/me"),name:"person-circle"})}),x.jsxs("div",{className:Jv.pageContent,children:[n&&x.jsx("div",{children:"Loading..."}),s&&x.jsxs(x.Fragment,{children:[x.jsx(iE,{organization_id:s.id}),x.jsx(nE,{organization_id:s.id}),x.jsx(dE,{organization_id:s.id}),x.jsx(hE,{})]})]})]})}const gE="_horseList_1g9ew_1",bE="_horseEntry_1g9ew_8",vE="_horseItem_1g9ew_18",yE="_horseInfo_1g9ew_24",_E="_horseName_1g9ew_30",xE="_officialName_1g9ew_34",wE="_buttonGroup_1g9ew_40",SE="_pendingActions_1g9ew_46",CE="_divider_1g9ew_53",kE="_notes_1g9ew_59",EE="_question_1g9ew_65",$E="_acceptButton_1g9ew_69",AE="_rejectButton_1g9ew_74",Aa={horseList:gE,horseEntry:bE,horseItem:vE,horseInfo:yE,horseName:_E,officialName:xE,buttonGroup:wE,pendingActions:SE,divider:CE,notes:kE,question:EE,acceptButton:$E,rejectButton:AE},{useCurrentUserProfile:TE,useUserHorses:zE,usePendingHorseOwnershipTransfers:ME,useUpdateHorseOwnershipTransfer:NE}=await la(async()=>{const{useCurrentUserProfile:e,useUserHorses:a,usePendingHorseOwnershipTransfers:s,useUpdateHorseOwnershipTransfer:n}=await import("./index-BJBUXxrc.js").then(l=>l.aC);return{useCurrentUserProfile:e,useUserHorses:a,usePendingHorseOwnershipTransfers:s,useUpdateHorseOwnershipTransfer:n}},[]),OE=e=>e?e.split(" ").map(a=>a.charAt(0).toUpperCase()).join(""):"";function DE(){const e=Ve(),a=Ba(),{data:s}=TE({enabled:!0}),n=NE(),{data:l}=zE({userId:s?.id,enabled:!!s?.id}),{data:c}=ME({userId:s?.id,enabled:!!s?.id}),d=new Set(c?.map(S=>S.horse_id)),m=l?.filter(S=>!d.has(S.id))||[],f=S=>c?.find(w=>w.horse_id===S),p=(S,w)=>{s?.id&&n.mutate({transferId:S,status:w})},b=S=>n.isPending&&n.variables?.transferId===S,v=[...m,...c?.map(S=>S.horses).filter(Boolean)||[]],_=v.length>0?x.jsx("div",{className:Aa.horseList,children:v.map(S=>{if(!S)return null;const w=f(S.id),E=!!w,z=w?.notes;return x.jsxs("div",{className:Aa.horseEntry,children:[x.jsxs("div",{className:Aa.horseItem,onClick:()=>a(`/profile/${S.social_profile_id}`),role:"button",tabIndex:0,onKeyDown:N=>{(N.key==="Enter"||N.key===" ")&&a(`/profile/${S.social_profile_id}`)},children:[x.jsx(Is,{initials:OE(S.name)}),x.jsxs("div",{className:Aa.horseInfo,children:[x.jsx("span",{className:Aa.horseName,children:S.name}),S.official_name&&x.jsx("span",{className:Aa.officialName,children:S.official_name})]}),x.jsx(ta,{name:"chevron-right"})]}),E&&x.jsxs("div",{className:Aa.pendingActions,children:[x.jsx("hr",{className:Aa.divider}),z&&x.jsx("p",{className:Aa.notes,children:x.jsx($e,{id:z,defaultMessage:z})}),x.jsx("p",{className:Aa.question,children:x.jsx($e,{id:"dashboard.myHorses.acceptOwnershipQuestion",values:{horseName:S.name}})}),x.jsxs("div",{className:Aa.buttonGroup,children:[x.jsxs(gi,{size:"small",className:Aa.acceptButton,onClick:()=>p(w.id,"accepted"),loading:b(w.id),disabled:b(w.id),children:[x.jsx(ta,{slot:"prefix",name:"check-lg"}),x.jsx($e,{id:"common.yes",defaultMessage:"Yes"})]}),x.jsxs(gi,{size:"small",className:Aa.rejectButton,onClick:()=>p(w.id,"rejected"),loading:b(w.id),disabled:b(w.id),children:[x.jsx(ta,{slot:"prefix",name:"x-lg"}),x.jsx($e,{id:"common.no",defaultMessage:"No"})]})]})]})]},S.id)})}):null;return x.jsx(Lr,{variant:"brown",icon:x.jsx(ta,{src:"assets/horses.svg"}),title:e.formatMessage({id:"dashboard.myHorses.title"}),description:e.formatMessage({id:"dashboard.myHorses.description"}),quickAction:_})}function LE(){const e=Ve();return x.jsx(Lr,{variant:"rose",icon:x.jsx(ta,{name:"people"}),title:e.formatMessage({id:"dashboard.relatedHorses.title"}),description:e.formatMessage({id:"dashboard.relatedHorses.description"})})}function RE(){const e=Ve();return x.jsx(Lr,{variant:"lime",icon:x.jsx(ta,{name:"eye"}),title:e.formatMessage({id:"dashboard.following.title"}),description:e.formatMessage({id:"dashboard.following.description"})})}const BE="_pageWrapper_1c8rk_1",HE="_pageContent_1c8rk_10",e1={pageWrapper:BE,pageContent:HE};function UE(){const e=Ba();return x.jsxs("div",{className:e1.pageWrapper,children:[x.jsx(ls,{headerActions:x.jsx(_t,{label:"Profile",name:"person-circle",onClick:()=>e("/profile/me")})}),x.jsxs("div",{className:e1.pageContent,children:[x.jsx(DE,{}),x.jsx(LE,{}),x.jsx(RE,{})]})]})}var jE=fe`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,zu=class extends oe{render(){return W` <slot></slot> `}};zu.styles=[ge,jE];var IE="sl-visually-hidden";zu.define("sl-visually-hidden");de({tagName:IE,elementClass:zu,react:ue,events:{},displayName:"SlVisuallyHidden"});var VE=fe`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,PE=0,In=class extends oe{constructor(){super(...arguments),this.attrId=++PE,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return W`
      <slot
        part="base"
        class=${me({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};In.styles=[ge,VE];g([C({reflect:!0})],In.prototype,"name",2);g([C({type:Boolean,reflect:!0})],In.prototype,"active",2);g([J("active")],In.prototype,"handleActiveChange",1);var FE="sl-tab-panel";In.define("sl-tab-panel");de({tagName:FE,elementClass:In,react:ue,events:{},displayName:"SlTabPanel"});var qE=fe`
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
`,us=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return W`
      <span
        part="base"
        class=${me({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?W`
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
    `}};us.styles=[ge,qE];us.dependencies={"sl-icon-button":Et};g([C({reflect:!0})],us.prototype,"variant",2);g([C({reflect:!0})],us.prototype,"size",2);g([C({type:Boolean,reflect:!0})],us.prototype,"pill",2);g([C({type:Boolean})],us.prototype,"removable",2);var GE="sl-tag";us.define("sl-tag");de({tagName:GE,elementClass:us,react:ue,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var YE=fe`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Vn=(e="value")=>(a,s)=>{const n=a.constructor,l=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(c,d,m){var f;const p=n.getPropertyOptions(e),b=typeof p.attribute=="string"?p.attribute:e;if(c===b){const v=p.converter||Nn,S=(typeof v=="function"?v:(f=v?.fromAttribute)!=null?f:Nn.fromAttribute)(m,p.type);this[e]!==S&&(this[s]=S)}l.call(this,c,d,m)}},Rr=fe`
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
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=_l(class extends xl{constructor(e){if(super(e),e.type!==Ni.PROPERTY&&e.type!==Ni.ATTRIBUTE&&e.type!==Ni.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ay(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[a]){if(a===La||a===it)return a;const s=e.element,n=e.name;if(e.type===Ni.PROPERTY){if(a===s[n])return La}else if(e.type===Ni.BOOLEAN_ATTRIBUTE){if(!!a===s.hasAttribute(n))return La}else if(e.type===Ni.ATTRIBUTE&&s.getAttribute(n)===a+"")return La;return CS(e),a}});var Be=class extends oe{constructor(){super(...arguments),this.formControlController=new os(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ua(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,a,s="none"){this.input.setSelectionRange(e,a,s)}setRangeText(e,a,s,n="preserve"){const l=a??this.input.selectionStart,c=s??this.input.selectionEnd;this.input.setRangeText(e,l,c,n),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),a=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,n=this.helpText?!0:!!a;return W`
      <div
        part="form-control"
        class=${me({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${me({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${ne(this.name)}
              .value=${Mr(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ne(this.placeholder)}
              rows=${ne(this.rows)}
              minlength=${ne(this.minlength)}
              maxlength=${ne(this.maxlength)}
              autocapitalize=${ne(this.autocapitalize)}
              autocorrect=${ne(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${ne(this.spellcheck)}
              enterkeyhint=${ne(this.enterkeyhint)}
              inputmode=${ne(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Be.styles=[ge,Rr,YE];g([te(".textarea__control")],Be.prototype,"input",2);g([te(".textarea__size-adjuster")],Be.prototype,"sizeAdjuster",2);g([pe()],Be.prototype,"hasFocus",2);g([C()],Be.prototype,"title",2);g([C()],Be.prototype,"name",2);g([C()],Be.prototype,"value",2);g([C({reflect:!0})],Be.prototype,"size",2);g([C({type:Boolean,reflect:!0})],Be.prototype,"filled",2);g([C()],Be.prototype,"label",2);g([C({attribute:"help-text"})],Be.prototype,"helpText",2);g([C()],Be.prototype,"placeholder",2);g([C({type:Number})],Be.prototype,"rows",2);g([C()],Be.prototype,"resize",2);g([C({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);g([C({type:Boolean,reflect:!0})],Be.prototype,"readonly",2);g([C({reflect:!0})],Be.prototype,"form",2);g([C({type:Boolean,reflect:!0})],Be.prototype,"required",2);g([C({type:Number})],Be.prototype,"minlength",2);g([C({type:Number})],Be.prototype,"maxlength",2);g([C()],Be.prototype,"autocapitalize",2);g([C()],Be.prototype,"autocorrect",2);g([C()],Be.prototype,"autocomplete",2);g([C({type:Boolean})],Be.prototype,"autofocus",2);g([C()],Be.prototype,"enterkeyhint",2);g([C({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Be.prototype,"spellcheck",2);g([C()],Be.prototype,"inputmode",2);g([Vn()],Be.prototype,"defaultValue",2);g([J("disabled",{waitUntilFirstUpdate:!0})],Be.prototype,"handleDisabledChange",1);g([J("rows",{waitUntilFirstUpdate:!0})],Be.prototype,"handleRowsChange",1);g([J("value",{waitUntilFirstUpdate:!0})],Be.prototype,"handleValueChange",1);var XE="sl-textarea";Be.define("sl-textarea");de({tagName:XE,elementClass:Be,react:ue,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var WE=fe`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,QE=fe`
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
`;const Vs=Math.min,Da=Math.max,vu=Math.round,Qc=Math.floor,Di=e=>({x:e,y:e}),ZE={left:"right",right:"left",bottom:"top",top:"bottom"},KE={start:"end",end:"start"};function ep(e,a,s){return Da(e,Vs(a,s))}function Pn(e,a){return typeof e=="function"?e(a):e}function Ps(e){return e.split("-")[0]}function Fn(e){return e.split("-")[1]}function Wy(e){return e==="x"?"y":"x"}function Mp(e){return e==="y"?"height":"width"}const JE=new Set(["top","bottom"]);function is(e){return JE.has(Ps(e))?"y":"x"}function Np(e){return Wy(is(e))}function e7(e,a,s){s===void 0&&(s=!1);const n=Fn(e),l=Np(e),c=Mp(l);let d=l==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return a.reference[c]>a.floating[c]&&(d=yu(d)),[d,yu(d)]}function t7(e){const a=yu(e);return[tp(e),a,tp(a)]}function tp(e){return e.replace(/start|end/g,a=>KE[a])}const t1=["left","right"],a1=["right","left"],a7=["top","bottom"],i7=["bottom","top"];function s7(e,a,s){switch(e){case"top":case"bottom":return s?a?a1:t1:a?t1:a1;case"left":case"right":return a?a7:i7;default:return[]}}function r7(e,a,s,n){const l=Fn(e);let c=s7(Ps(e),s==="start",n);return l&&(c=c.map(d=>d+"-"+l),a&&(c=c.concat(c.map(tp)))),c}function yu(e){return e.replace(/left|right|bottom|top/g,a=>ZE[a])}function n7(e){return{top:0,right:0,bottom:0,left:0,...e}}function Qy(e){return typeof e!="number"?n7(e):{top:e,right:e,bottom:e,left:e}}function _u(e){const{x:a,y:s,width:n,height:l}=e;return{width:n,height:l,top:s,left:a,right:a+n,bottom:s+l,x:a,y:s}}function i1(e,a,s){let{reference:n,floating:l}=e;const c=is(a),d=Np(a),m=Mp(d),f=Ps(a),p=c==="y",b=n.x+n.width/2-l.width/2,v=n.y+n.height/2-l.height/2,_=n[m]/2-l[m]/2;let S;switch(f){case"top":S={x:b,y:n.y-l.height};break;case"bottom":S={x:b,y:n.y+n.height};break;case"right":S={x:n.x+n.width,y:v};break;case"left":S={x:n.x-l.width,y:v};break;default:S={x:n.x,y:n.y}}switch(Fn(a)){case"start":S[d]-=_*(s&&p?-1:1);break;case"end":S[d]+=_*(s&&p?-1:1);break}return S}const o7=async(e,a,s)=>{const{placement:n="bottom",strategy:l="absolute",middleware:c=[],platform:d}=s,m=c.filter(Boolean),f=await(d.isRTL==null?void 0:d.isRTL(a));let p=await d.getElementRects({reference:e,floating:a,strategy:l}),{x:b,y:v}=i1(p,n,f),_=n,S={},w=0;for(let E=0;E<m.length;E++){const{name:z,fn:N}=m[E],{x:T,y:D,data:M,reset:A}=await N({x:b,y:v,initialPlacement:n,placement:_,strategy:l,middlewareData:S,rects:p,platform:d,elements:{reference:e,floating:a}});b=T??b,v=D??v,S={...S,[z]:{...S[z],...M}},A&&w<=50&&(w++,typeof A=="object"&&(A.placement&&(_=A.placement),A.rects&&(p=A.rects===!0?await d.getElementRects({reference:e,floating:a,strategy:l}):A.rects),{x:b,y:v}=i1(p,_,f)),E=-1)}return{x:b,y:v,placement:_,strategy:l,middlewareData:S}};async function Op(e,a){var s;a===void 0&&(a={});const{x:n,y:l,platform:c,rects:d,elements:m,strategy:f}=e,{boundary:p="clippingAncestors",rootBoundary:b="viewport",elementContext:v="floating",altBoundary:_=!1,padding:S=0}=Pn(a,e),w=Qy(S),z=m[_?v==="floating"?"reference":"floating":v],N=_u(await c.getClippingRect({element:(s=await(c.isElement==null?void 0:c.isElement(z)))==null||s?z:z.contextElement||await(c.getDocumentElement==null?void 0:c.getDocumentElement(m.floating)),boundary:p,rootBoundary:b,strategy:f})),T=v==="floating"?{x:n,y:l,width:d.floating.width,height:d.floating.height}:d.reference,D=await(c.getOffsetParent==null?void 0:c.getOffsetParent(m.floating)),M=await(c.isElement==null?void 0:c.isElement(D))?await(c.getScale==null?void 0:c.getScale(D))||{x:1,y:1}:{x:1,y:1},A=_u(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:T,offsetParent:D,strategy:f}):T);return{top:(N.top-A.top+w.top)/M.y,bottom:(A.bottom-N.bottom+w.bottom)/M.y,left:(N.left-A.left+w.left)/M.x,right:(A.right-N.right+w.right)/M.x}}const l7=e=>({name:"arrow",options:e,async fn(a){const{x:s,y:n,placement:l,rects:c,platform:d,elements:m,middlewareData:f}=a,{element:p,padding:b=0}=Pn(e,a)||{};if(p==null)return{};const v=Qy(b),_={x:s,y:n},S=Np(l),w=Mp(S),E=await d.getDimensions(p),z=S==="y",N=z?"top":"left",T=z?"bottom":"right",D=z?"clientHeight":"clientWidth",M=c.reference[w]+c.reference[S]-_[S]-c.floating[w],A=_[S]-c.reference[S],H=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p));let K=H?H[D]:0;(!K||!await(d.isElement==null?void 0:d.isElement(H)))&&(K=m.floating[D]||c.floating[w]);const Z=M/2-A/2,V=K/2-E[w]/2-1,P=Vs(v[N],V),ae=Vs(v[T],V),ye=P,ke=K-E[w]-ae,_e=K/2-E[w]/2+Z,xe=ep(ye,_e,ke),X=!f.arrow&&Fn(l)!=null&&_e!==xe&&c.reference[w]/2-(_e<ye?P:ae)-E[w]/2<0,Y=X?_e<ye?_e-ye:_e-ke:0;return{[S]:_[S]+Y,data:{[S]:xe,centerOffset:_e-xe-Y,...X&&{alignmentOffset:Y}},reset:X}}}),c7=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(a){var s,n;const{placement:l,middlewareData:c,rects:d,initialPlacement:m,platform:f,elements:p}=a,{mainAxis:b=!0,crossAxis:v=!0,fallbackPlacements:_,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:E=!0,...z}=Pn(e,a);if((s=c.arrow)!=null&&s.alignmentOffset)return{};const N=Ps(l),T=is(m),D=Ps(m)===m,M=await(f.isRTL==null?void 0:f.isRTL(p.floating)),A=_||(D||!E?[yu(m)]:t7(m)),H=w!=="none";!_&&H&&A.push(...r7(m,E,w,M));const K=[m,...A],Z=await Op(a,z),V=[];let P=((n=c.flip)==null?void 0:n.overflows)||[];if(b&&V.push(Z[N]),v){const _e=e7(l,d,M);V.push(Z[_e[0]],Z[_e[1]])}if(P=[...P,{placement:l,overflows:V}],!V.every(_e=>_e<=0)){var ae,ye;const _e=(((ae=c.flip)==null?void 0:ae.index)||0)+1,xe=K[_e];if(xe&&(!(v==="alignment"?T!==is(xe):!1)||P.every(ee=>is(ee.placement)===T?ee.overflows[0]>0:!0)))return{data:{index:_e,overflows:P},reset:{placement:xe}};let X=(ye=P.filter(Y=>Y.overflows[0]<=0).sort((Y,ee)=>Y.overflows[1]-ee.overflows[1])[0])==null?void 0:ye.placement;if(!X)switch(S){case"bestFit":{var ke;const Y=(ke=P.filter(ee=>{if(H){const ve=is(ee.placement);return ve===T||ve==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(ve=>ve>0).reduce((ve,Ae)=>ve+Ae,0)]).sort((ee,ve)=>ee[1]-ve[1])[0])==null?void 0:ke[0];Y&&(X=Y);break}case"initialPlacement":X=m;break}if(l!==X)return{reset:{placement:X}}}return{}}}},u7=new Set(["left","top"]);async function d7(e,a){const{placement:s,platform:n,elements:l}=e,c=await(n.isRTL==null?void 0:n.isRTL(l.floating)),d=Ps(s),m=Fn(s),f=is(s)==="y",p=u7.has(d)?-1:1,b=c&&f?-1:1,v=Pn(a,e);let{mainAxis:_,crossAxis:S,alignmentAxis:w}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return m&&typeof w=="number"&&(S=m==="end"?w*-1:w),f?{x:S*b,y:_*p}:{x:_*p,y:S*b}}const h7=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(a){var s,n;const{x:l,y:c,placement:d,middlewareData:m}=a,f=await d7(a,e);return d===((s=m.offset)==null?void 0:s.placement)&&(n=m.arrow)!=null&&n.alignmentOffset?{}:{x:l+f.x,y:c+f.y,data:{...f,placement:d}}}}},f7=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(a){const{x:s,y:n,placement:l}=a,{mainAxis:c=!0,crossAxis:d=!1,limiter:m={fn:z=>{let{x:N,y:T}=z;return{x:N,y:T}}},...f}=Pn(e,a),p={x:s,y:n},b=await Op(a,f),v=is(Ps(l)),_=Wy(v);let S=p[_],w=p[v];if(c){const z=_==="y"?"top":"left",N=_==="y"?"bottom":"right",T=S+b[z],D=S-b[N];S=ep(T,S,D)}if(d){const z=v==="y"?"top":"left",N=v==="y"?"bottom":"right",T=w+b[z],D=w-b[N];w=ep(T,w,D)}const E=m.fn({...a,[_]:S,[v]:w});return{...E,data:{x:E.x-s,y:E.y-n,enabled:{[_]:c,[v]:d}}}}}},p7=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(a){var s,n;const{placement:l,rects:c,platform:d,elements:m}=a,{apply:f=()=>{},...p}=Pn(e,a),b=await Op(a,p),v=Ps(l),_=Fn(l),S=is(l)==="y",{width:w,height:E}=c.floating;let z,N;v==="top"||v==="bottom"?(z=v,N=_===(await(d.isRTL==null?void 0:d.isRTL(m.floating))?"start":"end")?"left":"right"):(N=v,z=_==="end"?"top":"bottom");const T=E-b.top-b.bottom,D=w-b.left-b.right,M=Vs(E-b[z],T),A=Vs(w-b[N],D),H=!a.middlewareData.shift;let K=M,Z=A;if((s=a.middlewareData.shift)!=null&&s.enabled.x&&(Z=D),(n=a.middlewareData.shift)!=null&&n.enabled.y&&(K=T),H&&!_){const P=Da(b.left,0),ae=Da(b.right,0),ye=Da(b.top,0),ke=Da(b.bottom,0);S?Z=w-2*(P!==0||ae!==0?P+ae:Da(b.left,b.right)):K=E-2*(ye!==0||ke!==0?ye+ke:Da(b.top,b.bottom))}await f({...a,availableWidth:Z,availableHeight:K});const V=await d.getDimensions(m.floating);return w!==V.width||E!==V.height?{reset:{rects:!0}}:{}}}};function Mu(){return typeof window<"u"}function qn(e){return Zy(e)?(e.nodeName||"").toLowerCase():"#document"}function Ra(e){var a;return(e==null||(a=e.ownerDocument)==null?void 0:a.defaultView)||window}function Hi(e){var a;return(a=(Zy(e)?e.ownerDocument:e.document)||window.document)==null?void 0:a.documentElement}function Zy(e){return Mu()?e instanceof Node||e instanceof Ra(e).Node:!1}function bi(e){return Mu()?e instanceof Element||e instanceof Ra(e).Element:!1}function Bi(e){return Mu()?e instanceof HTMLElement||e instanceof Ra(e).HTMLElement:!1}function s1(e){return!Mu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ra(e).ShadowRoot}const m7=new Set(["inline","contents"]);function $l(e){const{overflow:a,overflowX:s,overflowY:n,display:l}=vi(e);return/auto|scroll|overlay|hidden|clip/.test(a+n+s)&&!m7.has(l)}const g7=new Set(["table","td","th"]);function b7(e){return g7.has(qn(e))}const v7=[":popover-open",":modal"];function Nu(e){return v7.some(a=>{try{return e.matches(a)}catch{return!1}})}const y7=["transform","translate","scale","rotate","perspective"],_7=["transform","translate","scale","rotate","perspective","filter"],x7=["paint","layout","strict","content"];function Ou(e){const a=Dp(),s=bi(e)?vi(e):e;return y7.some(n=>s[n]?s[n]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!a&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!a&&(s.filter?s.filter!=="none":!1)||_7.some(n=>(s.willChange||"").includes(n))||x7.some(n=>(s.contain||"").includes(n))}function w7(e){let a=Fs(e);for(;Bi(a)&&!Ln(a);){if(Ou(a))return a;if(Nu(a))return null;a=Fs(a)}return null}function Dp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const S7=new Set(["html","body","#document"]);function Ln(e){return S7.has(qn(e))}function vi(e){return Ra(e).getComputedStyle(e)}function Du(e){return bi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Fs(e){if(qn(e)==="html")return e;const a=e.assignedSlot||e.parentNode||s1(e)&&e.host||Hi(e);return s1(a)?a.host:a}function Ky(e){const a=Fs(e);return Ln(a)?e.ownerDocument?e.ownerDocument.body:e.body:Bi(a)&&$l(a)?a:Ky(a)}function gl(e,a,s){var n;a===void 0&&(a=[]),s===void 0&&(s=!0);const l=Ky(e),c=l===((n=e.ownerDocument)==null?void 0:n.body),d=Ra(l);if(c){const m=ap(d);return a.concat(d,d.visualViewport||[],$l(l)?l:[],m&&s?gl(m):[])}return a.concat(l,gl(l,[],s))}function ap(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Jy(e){const a=vi(e);let s=parseFloat(a.width)||0,n=parseFloat(a.height)||0;const l=Bi(e),c=l?e.offsetWidth:s,d=l?e.offsetHeight:n,m=vu(s)!==c||vu(n)!==d;return m&&(s=c,n=d),{width:s,height:n,$:m}}function Lp(e){return bi(e)?e:e.contextElement}function An(e){const a=Lp(e);if(!Bi(a))return Di(1);const s=a.getBoundingClientRect(),{width:n,height:l,$:c}=Jy(a);let d=(c?vu(s.width):s.width)/n,m=(c?vu(s.height):s.height)/l;return(!d||!Number.isFinite(d))&&(d=1),(!m||!Number.isFinite(m))&&(m=1),{x:d,y:m}}const C7=Di(0);function e2(e){const a=Ra(e);return!Dp()||!a.visualViewport?C7:{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}}function k7(e,a,s){return a===void 0&&(a=!1),!s||a&&s!==Ra(e)?!1:a}function Nr(e,a,s,n){a===void 0&&(a=!1),s===void 0&&(s=!1);const l=e.getBoundingClientRect(),c=Lp(e);let d=Di(1);a&&(n?bi(n)&&(d=An(n)):d=An(e));const m=k7(c,s,n)?e2(c):Di(0);let f=(l.left+m.x)/d.x,p=(l.top+m.y)/d.y,b=l.width/d.x,v=l.height/d.y;if(c){const _=Ra(c),S=n&&bi(n)?Ra(n):n;let w=_,E=ap(w);for(;E&&n&&S!==w;){const z=An(E),N=E.getBoundingClientRect(),T=vi(E),D=N.left+(E.clientLeft+parseFloat(T.paddingLeft))*z.x,M=N.top+(E.clientTop+parseFloat(T.paddingTop))*z.y;f*=z.x,p*=z.y,b*=z.x,v*=z.y,f+=D,p+=M,w=Ra(E),E=ap(w)}}return _u({width:b,height:v,x:f,y:p})}function Lu(e,a){const s=Du(e).scrollLeft;return a?a.left+s:Nr(Hi(e)).left+s}function t2(e,a){const s=e.getBoundingClientRect(),n=s.left+a.scrollLeft-Lu(e,s),l=s.top+a.scrollTop;return{x:n,y:l}}function E7(e){let{elements:a,rect:s,offsetParent:n,strategy:l}=e;const c=l==="fixed",d=Hi(n),m=a?Nu(a.floating):!1;if(n===d||m&&c)return s;let f={scrollLeft:0,scrollTop:0},p=Di(1);const b=Di(0),v=Bi(n);if((v||!v&&!c)&&((qn(n)!=="body"||$l(d))&&(f=Du(n)),Bi(n))){const S=Nr(n);p=An(n),b.x=S.x+n.clientLeft,b.y=S.y+n.clientTop}const _=d&&!v&&!c?t2(d,f):Di(0);return{width:s.width*p.x,height:s.height*p.y,x:s.x*p.x-f.scrollLeft*p.x+b.x+_.x,y:s.y*p.y-f.scrollTop*p.y+b.y+_.y}}function $7(e){return Array.from(e.getClientRects())}function A7(e){const a=Hi(e),s=Du(e),n=e.ownerDocument.body,l=Da(a.scrollWidth,a.clientWidth,n.scrollWidth,n.clientWidth),c=Da(a.scrollHeight,a.clientHeight,n.scrollHeight,n.clientHeight);let d=-s.scrollLeft+Lu(e);const m=-s.scrollTop;return vi(n).direction==="rtl"&&(d+=Da(a.clientWidth,n.clientWidth)-l),{width:l,height:c,x:d,y:m}}const r1=25;function T7(e,a){const s=Ra(e),n=Hi(e),l=s.visualViewport;let c=n.clientWidth,d=n.clientHeight,m=0,f=0;if(l){c=l.width,d=l.height;const b=Dp();(!b||b&&a==="fixed")&&(m=l.offsetLeft,f=l.offsetTop)}const p=Lu(n);if(p<=0){const b=n.ownerDocument,v=b.body,_=getComputedStyle(v),S=b.compatMode==="CSS1Compat"&&parseFloat(_.marginLeft)+parseFloat(_.marginRight)||0,w=Math.abs(n.clientWidth-v.clientWidth-S);w<=r1&&(c-=w)}else p<=r1&&(c+=p);return{width:c,height:d,x:m,y:f}}const z7=new Set(["absolute","fixed"]);function M7(e,a){const s=Nr(e,!0,a==="fixed"),n=s.top+e.clientTop,l=s.left+e.clientLeft,c=Bi(e)?An(e):Di(1),d=e.clientWidth*c.x,m=e.clientHeight*c.y,f=l*c.x,p=n*c.y;return{width:d,height:m,x:f,y:p}}function n1(e,a,s){let n;if(a==="viewport")n=T7(e,s);else if(a==="document")n=A7(Hi(e));else if(bi(a))n=M7(a,s);else{const l=e2(e);n={x:a.x-l.x,y:a.y-l.y,width:a.width,height:a.height}}return _u(n)}function a2(e,a){const s=Fs(e);return s===a||!bi(s)||Ln(s)?!1:vi(s).position==="fixed"||a2(s,a)}function N7(e,a){const s=a.get(e);if(s)return s;let n=gl(e,[],!1).filter(m=>bi(m)&&qn(m)!=="body"),l=null;const c=vi(e).position==="fixed";let d=c?Fs(e):e;for(;bi(d)&&!Ln(d);){const m=vi(d),f=Ou(d);!f&&m.position==="fixed"&&(l=null),(c?!f&&!l:!f&&m.position==="static"&&!!l&&z7.has(l.position)||$l(d)&&!f&&a2(e,d))?n=n.filter(b=>b!==d):l=m,d=Fs(d)}return a.set(e,n),n}function O7(e){let{element:a,boundary:s,rootBoundary:n,strategy:l}=e;const d=[...s==="clippingAncestors"?Nu(a)?[]:N7(a,this._c):[].concat(s),n],m=d[0],f=d.reduce((p,b)=>{const v=n1(a,b,l);return p.top=Da(v.top,p.top),p.right=Vs(v.right,p.right),p.bottom=Vs(v.bottom,p.bottom),p.left=Da(v.left,p.left),p},n1(a,m,l));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function D7(e){const{width:a,height:s}=Jy(e);return{width:a,height:s}}function L7(e,a,s){const n=Bi(a),l=Hi(a),c=s==="fixed",d=Nr(e,!0,c,a);let m={scrollLeft:0,scrollTop:0};const f=Di(0);function p(){f.x=Lu(l)}if(n||!n&&!c)if((qn(a)!=="body"||$l(l))&&(m=Du(a)),n){const S=Nr(a,!0,c,a);f.x=S.x+a.clientLeft,f.y=S.y+a.clientTop}else l&&p();c&&!n&&l&&p();const b=l&&!n&&!c?t2(l,m):Di(0),v=d.left+m.scrollLeft-f.x-b.x,_=d.top+m.scrollTop-f.y-b.y;return{x:v,y:_,width:d.width,height:d.height}}function bf(e){return vi(e).position==="static"}function o1(e,a){if(!Bi(e)||vi(e).position==="fixed")return null;if(a)return a(e);let s=e.offsetParent;return Hi(e)===s&&(s=s.ownerDocument.body),s}function i2(e,a){const s=Ra(e);if(Nu(e))return s;if(!Bi(e)){let l=Fs(e);for(;l&&!Ln(l);){if(bi(l)&&!bf(l))return l;l=Fs(l)}return s}let n=o1(e,a);for(;n&&b7(n)&&bf(n);)n=o1(n,a);return n&&Ln(n)&&bf(n)&&!Ou(n)?s:n||w7(e)||s}const R7=async function(e){const a=this.getOffsetParent||i2,s=this.getDimensions,n=await s(e.floating);return{reference:L7(e.reference,await a(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function B7(e){return vi(e).direction==="rtl"}const lu={convertOffsetParentRelativeRectToViewportRelativeRect:E7,getDocumentElement:Hi,getClippingRect:O7,getOffsetParent:i2,getElementRects:R7,getClientRects:$7,getDimensions:D7,getScale:An,isElement:bi,isRTL:B7};function s2(e,a){return e.x===a.x&&e.y===a.y&&e.width===a.width&&e.height===a.height}function H7(e,a){let s=null,n;const l=Hi(e);function c(){var m;clearTimeout(n),(m=s)==null||m.disconnect(),s=null}function d(m,f){m===void 0&&(m=!1),f===void 0&&(f=1),c();const p=e.getBoundingClientRect(),{left:b,top:v,width:_,height:S}=p;if(m||a(),!_||!S)return;const w=Qc(v),E=Qc(l.clientWidth-(b+_)),z=Qc(l.clientHeight-(v+S)),N=Qc(b),D={rootMargin:-w+"px "+-E+"px "+-z+"px "+-N+"px",threshold:Da(0,Vs(1,f))||1};let M=!0;function A(H){const K=H[0].intersectionRatio;if(K!==f){if(!M)return d();K?d(!1,K):n=setTimeout(()=>{d(!1,1e-7)},1e3)}K===1&&!s2(p,e.getBoundingClientRect())&&d(),M=!1}try{s=new IntersectionObserver(A,{...D,root:l.ownerDocument})}catch{s=new IntersectionObserver(A,D)}s.observe(e)}return d(!0),c}function U7(e,a,s,n){n===void 0&&(n={});const{ancestorScroll:l=!0,ancestorResize:c=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:f=!1}=n,p=Lp(e),b=l||c?[...p?gl(p):[],...gl(a)]:[];b.forEach(N=>{l&&N.addEventListener("scroll",s,{passive:!0}),c&&N.addEventListener("resize",s)});const v=p&&m?H7(p,s):null;let _=-1,S=null;d&&(S=new ResizeObserver(N=>{let[T]=N;T&&T.target===p&&S&&(S.unobserve(a),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var D;(D=S)==null||D.observe(a)})),s()}),p&&!f&&S.observe(p),S.observe(a));let w,E=f?Nr(e):null;f&&z();function z(){const N=Nr(e);E&&!s2(E,N)&&s(),E=N,w=requestAnimationFrame(z)}return s(),()=>{var N;b.forEach(T=>{l&&T.removeEventListener("scroll",s),c&&T.removeEventListener("resize",s)}),v?.(),(N=S)==null||N.disconnect(),S=null,f&&cancelAnimationFrame(w)}}const j7=h7,I7=f7,V7=c7,l1=p7,P7=l7,F7=(e,a,s)=>{const n=new Map,l={platform:lu,...s},c={...l.platform,_c:n};return o7(e,a,{...l,platform:c})};function q7(e){return G7(e)}function vf(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function G7(e){for(let a=e;a;a=vf(a))if(a instanceof Element&&getComputedStyle(a).display==="none")return null;for(let a=vf(e);a;a=vf(a)){if(!(a instanceof Element))continue;const s=getComputedStyle(a);if(s.display!=="contents"&&(s.position!=="static"||Ou(s)||a.tagName==="BODY"))return a}return null}function Y7(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var Fe=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),a=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let n=0,l=0,c=0,d=0,m=0,f=0,p=0,b=0;s?e.top<a.top?(n=e.left,l=e.bottom,c=e.right,d=e.bottom,m=a.left,f=a.top,p=a.right,b=a.top):(n=a.left,l=a.bottom,c=a.right,d=a.bottom,m=e.left,f=e.top,p=e.right,b=e.top):e.left<a.left?(n=e.right,l=e.top,c=a.left,d=a.top,m=e.right,f=e.bottom,p=a.left,b=a.bottom):(n=a.right,l=a.top,c=e.left,d=e.top,m=a.right,f=a.bottom,p=e.left,b=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${l}px`),this.style.setProperty("--hover-bridge-top-right-x",`${c}px`),this.style.setProperty("--hover-bridge-top-right-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${m}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${f}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${b}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Y7(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=U7(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[j7({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(l1({apply:({rects:s})=>{const n=this.sync==="width"||this.sync==="both",l=this.sync==="height"||this.sync==="both";this.popup.style.width=n?`${s.reference.width}px`:"",this.popup.style.height=l?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(V7({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(I7({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(l1({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:n})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${n}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(P7({element:this.arrowEl,padding:this.arrowPadding}));const a=this.strategy==="absolute"?s=>lu.getOffsetParent(s,q7):lu.getOffsetParent;F7(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:vl(ns({},lu),{getOffsetParent:a})}).then(({x:s,y:n,middlewareData:l,placement:c})=>{const d=this.localize.dir()==="rtl",m={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];if(this.setAttribute("data-current-placement",c),Object.assign(this.popup.style,{left:`${s}px`,top:`${n}px`}),this.arrow){const f=l.arrow.x,p=l.arrow.y;let b="",v="",_="",S="";if(this.arrowPlacement==="start"){const w=typeof f=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",v=d?w:"",S=d?"":w}else if(this.arrowPlacement==="end"){const w=typeof f=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";v=d?"":w,S=d?w:"",_=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(S=typeof f=="number"?"calc(50% - var(--arrow-size-diagonal))":"",b=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(S=typeof f=="number"?`${f}px`:"",b=typeof p=="number"?`${p}px`:"");Object.assign(this.arrowEl.style,{top:b,right:v,bottom:_,left:S,[m]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return W`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${me({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${me({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?W`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Fe.styles=[ge,QE];g([te(".popup")],Fe.prototype,"popup",2);g([te(".popup__arrow")],Fe.prototype,"arrowEl",2);g([C()],Fe.prototype,"anchor",2);g([C({type:Boolean,reflect:!0})],Fe.prototype,"active",2);g([C({reflect:!0})],Fe.prototype,"placement",2);g([C({reflect:!0})],Fe.prototype,"strategy",2);g([C({type:Number})],Fe.prototype,"distance",2);g([C({type:Number})],Fe.prototype,"skidding",2);g([C({type:Boolean})],Fe.prototype,"arrow",2);g([C({attribute:"arrow-placement"})],Fe.prototype,"arrowPlacement",2);g([C({attribute:"arrow-padding",type:Number})],Fe.prototype,"arrowPadding",2);g([C({type:Boolean})],Fe.prototype,"flip",2);g([C({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(a=>a.trim()).filter(a=>a!==""),toAttribute:e=>e.join(" ")}})],Fe.prototype,"flipFallbackPlacements",2);g([C({attribute:"flip-fallback-strategy"})],Fe.prototype,"flipFallbackStrategy",2);g([C({type:Object})],Fe.prototype,"flipBoundary",2);g([C({attribute:"flip-padding",type:Number})],Fe.prototype,"flipPadding",2);g([C({type:Boolean})],Fe.prototype,"shift",2);g([C({type:Object})],Fe.prototype,"shiftBoundary",2);g([C({attribute:"shift-padding",type:Number})],Fe.prototype,"shiftPadding",2);g([C({attribute:"auto-size"})],Fe.prototype,"autoSize",2);g([C()],Fe.prototype,"sync",2);g([C({type:Object})],Fe.prototype,"autoSizeBoundary",2);g([C({attribute:"auto-size-padding",type:Number})],Fe.prototype,"autoSizePadding",2);g([C({attribute:"hover-bridge",type:Boolean})],Fe.prototype,"hoverBridge",2);var zt=class extends oe{constructor(){super(),this.localize=new Ie(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Dv(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Dv(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,a;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await kt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:n}=st(this,"tooltip.show",{dir:this.localize.dir()});await gt(this.popup.popup,s,n),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(a=this.closeWatcher)==null||a.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await kt(this.body);const{keyframes:s,options:n}=st(this,"tooltip.hide",{dir:this.localize.dir()});await gt(this.popup.popup,s,n),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ca(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ca(this,"sl-after-hide")}render(){return W`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${me({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};zt.styles=[ge,WE];zt.dependencies={"sl-popup":Fe};g([te("slot:not([name])")],zt.prototype,"defaultSlot",2);g([te(".tooltip__body")],zt.prototype,"body",2);g([te("sl-popup")],zt.prototype,"popup",2);g([C()],zt.prototype,"content",2);g([C()],zt.prototype,"placement",2);g([C({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);g([C({type:Number})],zt.prototype,"distance",2);g([C({type:Boolean,reflect:!0})],zt.prototype,"open",2);g([C({type:Number})],zt.prototype,"skidding",2);g([C()],zt.prototype,"trigger",2);g([C({type:Boolean})],zt.prototype,"hoist",2);g([J("open",{waitUntilFirstUpdate:!0})],zt.prototype,"handleOpenChange",1);g([J(["content","distance","hoist","placement","skidding"])],zt.prototype,"handleOptionsChange",1);g([J("disabled")],zt.prototype,"handleDisabledChange",1);Ge("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ge("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var X7="sl-tooltip";zt.define("sl-tooltip");de({tagName:X7,elementClass:zt,react:ue,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var W7=fe`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Q7=fe`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,$t=class extends oe{constructor(){super(...arguments),this.formControlController=new os(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,a)=>e.checked=a}),this.hasSlotController=new ua(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),a=this.helpText?!0:!!e;return W`
      <div
        class=${me({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":a})}
      >
        <label
          part="base"
          class=${me({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ne(this.value)}
            .indeterminate=${Mr(this.indeterminate)}
            .checked=${Mr(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?W`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?W`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${a?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$t.styles=[ge,Rr,Q7];$t.dependencies={"sl-icon":Ke};g([te('input[type="checkbox"]')],$t.prototype,"input",2);g([pe()],$t.prototype,"hasFocus",2);g([C()],$t.prototype,"title",2);g([C()],$t.prototype,"name",2);g([C()],$t.prototype,"value",2);g([C({reflect:!0})],$t.prototype,"size",2);g([C({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);g([C({type:Boolean,reflect:!0})],$t.prototype,"checked",2);g([C({type:Boolean,reflect:!0})],$t.prototype,"indeterminate",2);g([Vn("checked")],$t.prototype,"defaultChecked",2);g([C({reflect:!0})],$t.prototype,"form",2);g([C({type:Boolean,reflect:!0})],$t.prototype,"required",2);g([C({attribute:"help-text"})],$t.prototype,"helpText",2);g([J("disabled",{waitUntilFirstUpdate:!0})],$t.prototype,"handleDisabledChange",1);g([J(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],$t.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c1(e,a,s){return e?a(e):s?.(e)}var bt=class ip extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(a){return a instanceof Element&&a.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await kt(this.childrenContainer);const{keyframes:a,options:s}=st(this,"tree-item.collapse",{dir:this.localize.dir()});await gt(this.childrenContainer,gu(a,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const a=this.parentElement;return!!a&&ip.isTreeItem(a)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(a){a.has("selected")&&!a.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await kt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:a,options:s}=st(this,"tree-item.expand",{dir:this.localize.dir()});await gt(this.childrenContainer,gu(a,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:a=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>ip.isTreeItem(s)&&(a||!s.disabled)):[]}render(){const a=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return W`
      <div
        part="base"
        class="${me({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${me({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${c1(this.loading,()=>W` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${a?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${a?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${c1(this.selectable,()=>W`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Mr(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};bt.styles=[ge,W7];bt.dependencies={"sl-checkbox":$t,"sl-icon":Ke,"sl-spinner":Rn};g([pe()],bt.prototype,"indeterminate",2);g([pe()],bt.prototype,"isLeaf",2);g([pe()],bt.prototype,"loading",2);g([pe()],bt.prototype,"selectable",2);g([C({type:Boolean,reflect:!0})],bt.prototype,"expanded",2);g([C({type:Boolean,reflect:!0})],bt.prototype,"selected",2);g([C({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);g([C({type:Boolean,reflect:!0})],bt.prototype,"lazy",2);g([te("slot:not([name])")],bt.prototype,"defaultSlot",2);g([te("slot[name=children]")],bt.prototype,"childrenSlot",2);g([te(".tree-item__item")],bt.prototype,"itemElement",2);g([te(".tree-item__children")],bt.prototype,"childrenContainer",2);g([te(".tree-item__expand-button slot")],bt.prototype,"expandButtonSlot",2);g([J("loading",{waitUntilFirstUpdate:!0})],bt.prototype,"handleLoadingChange",1);g([J("disabled")],bt.prototype,"handleDisabledChange",1);g([J("selected")],bt.prototype,"handleSelectedChange",1);g([J("expanded",{waitUntilFirstUpdate:!0})],bt.prototype,"handleExpandedChange",1);g([J("expanded",{waitUntilFirstUpdate:!0})],bt.prototype,"handleExpandAnimation",1);g([J("lazy",{waitUntilFirstUpdate:!0})],bt.prototype,"handleLazyChange",1);var Tn=bt;Ge("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Ge("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var Z7="sl-tree-item";Tn.define("sl-tree-item");de({tagName:Z7,elementClass:Tn,react:ue,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var K7=fe`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Ct(e,a,s){const n=l=>Object.is(l,-0)?0:l;return e<a?n(a):e>s?n(s):n(e)}function u1(e,a=!1){function s(c){const d=c.getChildrenItems({includeDisabled:!1});if(d.length){const m=d.every(p=>p.selected),f=d.every(p=>!p.selected&&!p.indeterminate);c.selected=m,c.indeterminate=!m&&!f}}function n(c){const d=c.parentElement;Tn.isTreeItem(d)&&(s(d),n(d))}function l(c){for(const d of c.getChildrenItems())d.selected=a?c.selected||d.selected:!d.disabled&&c.selected,l(d);a&&s(c)}l(e),n(e)}var Ys=class extends oe{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Ie(this),this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(a=>!!this.querySelector(`[slot="${a}-icon"]`)).forEach(a=>{const s=e.querySelector(`[slot="${a}-icon"]`),n=this.getExpandButtonIcon(a);n&&(s===null?e.append(n):s.hasAttribute("data-default")&&s.replaceWith(n))})},this.handleTreeChanged=e=>{for(const a of e){const s=[...a.addedNodes].filter(Tn.isTreeItem),n=[...a.removedNodes].filter(Tn.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const a=e.relatedTarget;(!a||!this.contains(a))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const a=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Tn.isTreeItem(a)&&!a.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=a,this.tabIndex=-1,a.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){const s=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const n=s.cloneNode(!0);return[n,...n.querySelectorAll("[id]")].forEach(l=>l.removeAttribute("id")),n.setAttribute("data-default",""),n.slot=`${e}-icon`,n}return null}selectItem(e){const a=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),u1(e);else if(this.selection==="single"||e.isLeaf){const n=this.getAllTreeItems();for(const l of n)l.selected=l===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const s=this.selectedItems;(a.length!==s.length||s.some(n=>!a.includes(n)))&&Promise.all(s.map(n=>n.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(l=>{var c;return["input","textarea"].includes((c=l?.tagName)==null?void 0:c.toLowerCase())}))return;const a=this.getFocusableItems(),s=this.localize.dir()==="ltr",n=this.localize.dir()==="rtl";if(a.length>0){e.preventDefault();const l=a.findIndex(f=>f.matches(":focus")),c=a[l],d=f=>{const p=a[Ct(f,0,a.length-1)];this.focusItem(p)},m=f=>{c.expanded=f};e.key==="ArrowDown"?d(l+1):e.key==="ArrowUp"?d(l-1):s&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft"?!c||c.disabled||c.expanded||c.isLeaf&&!c.lazy?d(l+1):m(!0):s&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight"?!c||c.disabled||c.isLeaf||!c.expanded?d(l-1):m(!1):e.key==="Home"?d(0):e.key==="End"?d(a.length-1):(e.key==="Enter"||e.key===" ")&&(c.disabled||this.selectItem(c))}}handleClick(e){const a=e.target,s=a.closest("sl-tree-item"),n=e.composedPath().some(l=>{var c;return(c=l?.classList)==null?void 0:c.contains("tree-item__expand-button")});!s||s.disabled||a!==this.clickTarget||(n?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",a=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const s of a)s.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>u1(s,!0)))}get selectedItems(){const e=this.getAllTreeItems(),a=s=>s.selected;return e.filter(a)}getFocusableItems(){const e=this.getAllTreeItems(),a=new Set;return e.filter(s=>{var n;if(s.disabled)return!1;const l=(n=s.parentElement)==null?void 0:n.closest("[role=treeitem]");return l&&(!l.expanded||l.loading||a.has(l))&&a.add(s),!a.has(s)})}render(){return W`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ys.styles=[ge,K7];g([te("slot:not([name])")],Ys.prototype,"defaultSlot",2);g([te("slot[name=expand-icon]")],Ys.prototype,"expandedIconSlot",2);g([te("slot[name=collapse-icon]")],Ys.prototype,"collapsedIconSlot",2);g([C()],Ys.prototype,"selection",2);g([J("selection")],Ys.prototype,"handleSelectionChange",1);var J7="sl-tree";Ys.define("sl-tree");de({tagName:J7,elementClass:Ys,react:ue,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var e8=fe`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r2="important",t8=" !"+r2,pa=_l(class extends xl{constructor(e){if(super(e),e.type!==Ni.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((a,s)=>{const n=e[s];return n==null?a:a+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[a]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(a)),this.render(a);for(const n of this.ft)a[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in a){const l=a[n];if(l!=null){this.ft.add(n);const c=typeof l=="string"&&l.endsWith(t8);n.includes("-")||c?s.setProperty(n,c?l.slice(0,-11):l,c?r2:""):s[n]=l}}return La}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let sp=class extends xl{constructor(a){if(super(a),this.it=it,a.type!==Ni.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(a){if(a===it||a==null)return this._t=void 0,this.it=a;if(a===La)return a;if(typeof a!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(a===this.it)return this._t;this.it=a;const s=[a];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};sp.directiveName="unsafeHTML",sp.resultType=1;const cu=_l(sp);var Yt=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const a=this.localize.dir()==="rtl",{left:s,right:n,width:l}=this.rating.getBoundingClientRect(),c=a?this.roundToPrecision((n-e)/l*this.max,this.precision):this.roundToPrecision((e-s)/l*this.max,this.precision);return Ct(c,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const a=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",n=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||a&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"){const l=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-l),e.preventDefault()}if(e.key==="ArrowUp"||a&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"){const l=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+l),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==n&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,a=.5){const s=1/a;return Math.ceil(e*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",a=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,W`
      <div
        part="base"
        class=${me({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${a.map(n=>s>n&&s<n+1?W`
                <span
                  class=${me({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===n+1})}
                  role="presentation"
                >
                  <div
                    style=${pa({clipPath:e?`inset(0 ${(s-n)*100}% 0 0)`:`inset(0 0 0 ${(s-n)*100}%)`})}
                  >
                    ${cu(this.getSymbol(n+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${pa({clipPath:e?`inset(0 0 0 ${100-(s-n)*100}%)`:`inset(0 ${100-(s-n)*100}% 0 0)`})}
                  >
                    ${cu(this.getSymbol(n+1))}
                  </div>
                </span>
              `:W`
              <span
                class=${me({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===n+1,"rating__symbol--active":s>=n+1})}
                role="presentation"
              >
                ${cu(this.getSymbol(n+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Yt.styles=[ge,e8];Yt.dependencies={"sl-icon":Ke};g([te(".rating")],Yt.prototype,"rating",2);g([pe()],Yt.prototype,"hoverValue",2);g([pe()],Yt.prototype,"isHovering",2);g([C()],Yt.prototype,"label",2);g([C({type:Number})],Yt.prototype,"value",2);g([C({type:Number})],Yt.prototype,"max",2);g([C({type:Number})],Yt.prototype,"precision",2);g([C({type:Boolean,reflect:!0})],Yt.prototype,"readonly",2);g([C({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);g([C()],Yt.prototype,"getSymbol",2);g([yl({passive:!0})],Yt.prototype,"handleTouchMove",1);g([J("hoverValue")],Yt.prototype,"handleHoverValueChange",1);g([J("isHovering")],Yt.prototype,"handleIsHoveringChange",1);var a8="sl-rating";Yt.define("sl-rating");de({tagName:a8,elementClass:Yt,react:ue,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var i8=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Xs=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,a=new Date(this.date);if(isNaN(a.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=a.getTime()-e.getTime(),{unit:n,value:l}=i8.find(c=>Math.abs(s)<c.max);if(this.isoTime=a.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/l),n,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let c;n==="minute"?c=Zc("second"):n==="hour"?c=Zc("minute"):n==="day"?c=Zc("hour"):c=Zc("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),c)}return W` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};g([pe()],Xs.prototype,"isoTime",2);g([pe()],Xs.prototype,"relativeTime",2);g([C()],Xs.prototype,"date",2);g([C()],Xs.prototype,"format",2);g([C()],Xs.prototype,"numeric",2);g([C({type:Boolean})],Xs.prototype,"sync",2);function Zc(e){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return s-Date.now()%s}var s8="sl-relative-time";Xs.define("sl-relative-time");de({tagName:s8,elementClass:Xs,react:ue,events:{},displayName:"SlRelativeTime"});var r8="sl-resize-observer";jn.define("sl-resize-observer");de({tagName:r8,elementClass:jn,react:ue,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var n8=fe`
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
`,ze=class extends oe{constructor(){super(...arguments),this.formControlController=new os(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ua(this,"help-text","label"),this.localize=new Ie(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>W`
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
        @sl-remove=${a=>this.handleTagRemove(a,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const a=e.composedPath();this&&!a.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const a=e.target,s=a.closest(".select__clear")!==null,n=a.closest("sl-icon-button")!==null;if(!(s||n)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const l=this.getAllOptions(),c=l.indexOf(this.currentOption);let d=Math.max(0,c);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(d=c+1,d>l.length-1&&(d=0)):e.key==="ArrowUp"?(d=c-1,d<0&&(d=l.length-1)):e.key==="Home"?d=0:e.key==="End"&&(d=l.length-1),this.setCurrentOption(l[d])}if(e.key&&e.key.length===1||e.key==="Backspace"){const l=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const c of l)if(c.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(c);break}}}},this.handleDocumentMouseDown=e=>{const a=e.composedPath();this&&!a.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(n=>n instanceof Element&&n.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),n=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),a=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(a)?a:[a],n=[];e.forEach(l=>n.push(l.value)),this.setSelectedOptions(e.filter(l=>s.includes(l.value)))}handleTagRemove(e,a){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(a,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const a=this.getAllOptions(),s=Array.isArray(e)?e:[e];a.forEach(n=>n.selected=!1),s.length&&s.forEach(n=>n.selected=!0),this.selectionChanged()}toggleOptionSelection(e,a){a===!0||a===!1?e.selected=a:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,a,s;const n=this.getAllOptions();this.selectedOptions=n.filter(c=>c.selected);const l=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(c=>c.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const c=this.selectedOptions[0];this.value=(e=c?.value)!=null?e:"",this.displayLabel=(s=(a=c?.getTextLabel)==null?void 0:a.call(c))!=null?s:""}this.valueHasChanged=l,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,a)=>{if(a<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,a);return W`<div @sl-remove=${n=>this.handleTagRemove(n,e)}>
          ${typeof s=="string"?cu(s):s}
        </div>`}else if(a===this.maxOptionsVisible)return W`<sl-tag size=${this.size}>+${this.selectedOptions.length-a}</sl-tag>`;return W``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,a,s){if(super.attributeChangedCallback(e,a,s),e==="value"){const n=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=n}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const e=this.getAllOptions(),a=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>a.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await kt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:a}=st(this,"select.show",{dir:this.localize.dir()});await gt(this.popup.popup,e,a),this.currentOption&&Qf(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await kt(this);const{keyframes:e,options:a}=st(this,"select.hide",{dir:this.localize.dir()});await gt(this.popup.popup,e,a),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ca(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ca(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),a=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,n=this.helpText?!0:!!a,l=this.clearable&&!this.disabled&&this.value.length>0,c=this.placeholder&&this.value&&this.value.length<=0;return W`
      <div
        part="form-control"
        class=${me({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":n})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${me({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":c,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?W`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${l?W`
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
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ze.styles=[ge,Rr,n8];ze.dependencies={"sl-icon":Ke,"sl-popup":Fe,"sl-tag":us};g([te(".select")],ze.prototype,"popup",2);g([te(".select__combobox")],ze.prototype,"combobox",2);g([te(".select__display-input")],ze.prototype,"displayInput",2);g([te(".select__value-input")],ze.prototype,"valueInput",2);g([te(".select__listbox")],ze.prototype,"listbox",2);g([pe()],ze.prototype,"hasFocus",2);g([pe()],ze.prototype,"displayLabel",2);g([pe()],ze.prototype,"currentOption",2);g([pe()],ze.prototype,"selectedOptions",2);g([pe()],ze.prototype,"valueHasChanged",2);g([C()],ze.prototype,"name",2);g([pe()],ze.prototype,"value",1);g([C({attribute:"value"})],ze.prototype,"defaultValue",2);g([C({reflect:!0})],ze.prototype,"size",2);g([C()],ze.prototype,"placeholder",2);g([C({type:Boolean,reflect:!0})],ze.prototype,"multiple",2);g([C({attribute:"max-options-visible",type:Number})],ze.prototype,"maxOptionsVisible",2);g([C({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);g([C({type:Boolean})],ze.prototype,"clearable",2);g([C({type:Boolean,reflect:!0})],ze.prototype,"open",2);g([C({type:Boolean})],ze.prototype,"hoist",2);g([C({type:Boolean,reflect:!0})],ze.prototype,"filled",2);g([C({type:Boolean,reflect:!0})],ze.prototype,"pill",2);g([C()],ze.prototype,"label",2);g([C({reflect:!0})],ze.prototype,"placement",2);g([C({attribute:"help-text"})],ze.prototype,"helpText",2);g([C({reflect:!0})],ze.prototype,"form",2);g([C({type:Boolean,reflect:!0})],ze.prototype,"required",2);g([C()],ze.prototype,"getTag",2);g([J("disabled",{waitUntilFirstUpdate:!0})],ze.prototype,"handleDisabledChange",1);g([J(["defaultValue","value"],{waitUntilFirstUpdate:!0})],ze.prototype,"handleValueChange",1);g([J("open",{waitUntilFirstUpdate:!0})],ze.prototype,"handleOpenChange",1);Ge("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ge("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var o8="sl-select";ze.define("sl-select");var l8=de({tagName:o8,elementClass:ze,react:ue,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),zn=l8,c8=fe`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Ru=class extends oe{constructor(){super(...arguments),this.effect="none"}render(){return W`
      <div
        part="base"
        class=${me({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ru.styles=[ge,c8];g([C()],Ru.prototype,"effect",2);var u8="sl-skeleton";Ru.define("sl-skeleton");de({tagName:u8,elementClass:Ru,react:ue,events:{},displayName:"SlSkeleton"});var d8=fe`
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
`,Xt=class extends oe{constructor(){super(...arguments),this.formControlController=new os(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,a)=>e.checked=a}),this.hasSlotController=new ua(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),a=this.helpText?!0:!!e;return W`
      <div
        class=${me({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":a})}
      >
        <label
          part="base"
          class=${me({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ne(this.value)}
            .checked=${Mr(this.checked)}
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
          aria-hidden=${a?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Xt.styles=[ge,Rr,d8];g([te('input[type="checkbox"]')],Xt.prototype,"input",2);g([pe()],Xt.prototype,"hasFocus",2);g([C()],Xt.prototype,"title",2);g([C()],Xt.prototype,"name",2);g([C()],Xt.prototype,"value",2);g([C({reflect:!0})],Xt.prototype,"size",2);g([C({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);g([C({type:Boolean,reflect:!0})],Xt.prototype,"checked",2);g([Vn("checked")],Xt.prototype,"defaultChecked",2);g([C({reflect:!0})],Xt.prototype,"form",2);g([C({type:Boolean,reflect:!0})],Xt.prototype,"required",2);g([C({attribute:"help-text"})],Xt.prototype,"helpText",2);g([J("checked",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleCheckedChange",1);g([J("disabled",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleDisabledChange",1);var h8="sl-switch";Xt.define("sl-switch");de({tagName:h8,elementClass:Xt,react:ue,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var f8=fe`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function hl(e,a){function s(l){const c=e.getBoundingClientRect(),d=e.ownerDocument.defaultView,m=c.left+d.scrollX,f=c.top+d.scrollY,p=l.pageX-m,b=l.pageY-f;a?.onMove&&a.onMove(p,b)}function n(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",n),a?.onStop&&a.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",n),a?.initialEvent instanceof PointerEvent&&s(a.initialEvent)}var d1=()=>null,ga=class extends oe{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Ie(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=d1,this.snapThreshold=12}toSnapFunction(e){const a=e.split(" ");return({pos:s,size:n,snapThreshold:l,isRtl:c,vertical:d})=>{let m=s,f=Number.POSITIVE_INFINITY;return a.forEach(p=>{let b;if(p.startsWith("repeat(")){const _=e.substring(7,e.length-1),S=_.endsWith("%"),w=Number.parseFloat(_),E=S?n*(w/100):w;b=Math.round((c&&!d?n-s:s)/E)*E}else p.endsWith("%")?b=n*(Number.parseFloat(p)/100):b=Number.parseFloat(p);c&&!d&&(b=n-b);const v=Math.abs(s-b);v<=l&&v<f&&(m=b,f=v)}),m}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=d1}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:a}=this.getBoundingClientRect();this.size=this.vertical?a:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const a=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),hl(this,{onMove:(s,n)=>{var l;let c=this.vertical?n:s;this.primary==="end"&&(c=this.size-c),c=(l=this.snapFunction({pos:c,size:this.size,snapThreshold:this.snapThreshold,isRtl:a,vertical:this.vertical}))!=null?l:c,this.position=Ct(this.pixelsToPercentage(c),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let a=this.position;const s=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(a-=s),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(a+=s),e.key==="Home"&&(a=this.primary==="end"?100:0),e.key==="End"&&(a=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)a=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const n=this.position;a=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=n})}this.position=Ct(a,0,100)}}handleResize(e){const{width:a,height:s}=e[0].contentRect;this.size=this.vertical?s:a,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",a=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",n=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,l="auto";return this.primary==="end"?s&&!this.vertical?this.style[e]=`${n} var(--divider-width) ${l}`:this.style[e]=`${l} var(--divider-width) ${n}`:s&&!this.vertical?this.style[e]=`${l} var(--divider-width) ${n}`:this.style[e]=`${n} var(--divider-width) ${l}`,this.style[a]="",W`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${ne(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ga.styles=[ge,f8];g([te(".divider")],ga.prototype,"divider",2);g([C({type:Number,reflect:!0})],ga.prototype,"position",2);g([C({attribute:"position-in-pixels",type:Number})],ga.prototype,"positionInPixels",2);g([C({type:Boolean,reflect:!0})],ga.prototype,"vertical",2);g([C({type:Boolean,reflect:!0})],ga.prototype,"disabled",2);g([C()],ga.prototype,"primary",2);g([C({reflect:!0})],ga.prototype,"snap",1);g([C({type:Number,attribute:"snap-threshold"})],ga.prototype,"snapThreshold",2);g([J("position")],ga.prototype,"handlePositionChange",1);g([J("positionInPixels")],ga.prototype,"handlePositionInPixelsChange",1);g([J("vertical")],ga.prototype,"handleVerticalChange",1);var p8="sl-split-panel";ga.define("sl-split-panel");de({tagName:p8,elementClass:ga,react:ue,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var m8=fe`
  :host {
    display: contents;
  }
`,_i=class extends oe{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,a=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:a,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return W` <slot></slot> `}};_i.styles=[ge,m8];g([C({reflect:!0})],_i.prototype,"attr",2);g([C({attribute:"attr-old-value",type:Boolean,reflect:!0})],_i.prototype,"attrOldValue",2);g([C({attribute:"char-data",type:Boolean,reflect:!0})],_i.prototype,"charData",2);g([C({attribute:"char-data-old-value",type:Boolean,reflect:!0})],_i.prototype,"charDataOldValue",2);g([C({attribute:"child-list",type:Boolean,reflect:!0})],_i.prototype,"childList",2);g([C({type:Boolean,reflect:!0})],_i.prototype,"disabled",2);g([J("disabled")],_i.prototype,"handleDisabledChange",1);g([J("attr",{waitUntilFirstUpdate:!0}),J("attr-old-value",{waitUntilFirstUpdate:!0}),J("char-data",{waitUntilFirstUpdate:!0}),J("char-data-old-value",{waitUntilFirstUpdate:!0}),J("childList",{waitUntilFirstUpdate:!0})],_i.prototype,"handleChange",1);var g8="sl-mutation-observer";_i.define("sl-mutation-observer");de({tagName:g8,elementClass:_i,react:ue,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var b8=fe`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Gn=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return W`
      <div
        part="base"
        class=${me({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${ne(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${pa({width:`${this.value}%`})}>
          ${this.indeterminate?"":W` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Gn.styles=[ge,b8];g([C({type:Number,reflect:!0})],Gn.prototype,"value",2);g([C({type:Boolean,reflect:!0})],Gn.prototype,"indeterminate",2);g([C()],Gn.prototype,"label",2);var v8="sl-progress-bar";Gn.define("sl-progress-bar");de({tagName:v8,elementClass:Gn,react:ue,events:{},displayName:"SlProgressBar"});var y8=fe`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Br=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const a=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*a,n=s-this.value/100*s;this.indicatorOffset=`${n}px`}}render(){return W`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Br.styles=[ge,y8];g([te(".progress-ring__indicator")],Br.prototype,"indicator",2);g([pe()],Br.prototype,"indicatorOffset",2);g([C({type:Number,reflect:!0})],Br.prototype,"value",2);g([C()],Br.prototype,"label",2);var _8="sl-progress-ring";Br.define("sl-progress-ring");de({tagName:_8,elementClass:Br,react:ue,events:{},displayName:"SlProgressRing"});var x8=fe`
  :host {
    display: inline-block;
  }
`;let n2=null;class o2{}o2.render=function(e,a){n2(e,a)};self.QrCreator=o2;(function(e){function a(m,f,p,b){var v={},_=e(p,f);_.u(m),_.J(),b=b||0;var S=_.h(),w=_.h()+2*b;return v.text=m,v.level=f,v.version=p,v.O=w,v.a=function(E,z){return E-=b,z-=b,0>E||E>=S||0>z||z>=S?!1:_.a(E,z)},v}function s(m,f,p,b,v,_,S,w,E,z){function N(T,D,M,A,H,K,Z){T?(m.lineTo(D+K,M+Z),m.arcTo(D,M,A,H,_)):m.lineTo(D,M)}S?m.moveTo(f+_,p):m.moveTo(f,p),N(w,b,p,b,v,-_,0),N(E,b,v,f,v,0,-_),N(z,f,v,f,p,_,0),N(S,f,p,b,p,0,_)}function n(m,f,p,b,v,_,S,w,E,z){function N(T,D,M,A){m.moveTo(T+M,D),m.lineTo(T,D),m.lineTo(T,D+A),m.arcTo(T,D,T+M,D,_)}S&&N(f,p,_,_),w&&N(b,p,-_,_),E&&N(b,v,-_,-_),z&&N(f,v,_,-_)}function l(m,f){var p=f.fill;if(typeof p=="string")m.fillStyle=p;else{var b=p.type,v=p.colorStops;if(p=p.position.map(S=>Math.round(S*f.size)),b==="linear-gradient")var _=m.createLinearGradient.apply(m,p);else if(b==="radial-gradient")_=m.createRadialGradient.apply(m,p);else throw Error("Unsupported fill");v.forEach(([S,w])=>{_.addColorStop(S,w)}),m.fillStyle=_}}function c(m,f){e:{var p=f.text,b=f.v,v=f.N,_=f.K,S=f.P;for(v=Math.max(1,v||1),_=Math.min(40,_||40);v<=_;v+=1)try{var w=a(p,b,v,S);break e}catch{}w=void 0}if(!w)return null;for(p=m.getContext("2d"),f.background&&(p.fillStyle=f.background,p.fillRect(f.left,f.top,f.size,f.size)),b=w.O,_=f.size/b,p.beginPath(),S=0;S<b;S+=1)for(v=0;v<b;v+=1){var E=p,z=f.left+v*_,N=f.top+S*_,T=S,D=v,M=w.a,A=z+_,H=N+_,K=T-1,Z=T+1,V=D-1,P=D+1,ae=Math.floor(Math.min(.5,Math.max(0,f.R))*_),ye=M(T,D),ke=M(K,V),_e=M(K,D);K=M(K,P);var xe=M(T,P);P=M(Z,P),D=M(Z,D),Z=M(Z,V),T=M(T,V),z=Math.round(z),N=Math.round(N),A=Math.round(A),H=Math.round(H),ye?s(E,z,N,A,H,ae,!_e&&!T,!_e&&!xe,!D&&!xe,!D&&!T):n(E,z,N,A,H,ae,_e&&T&&ke,_e&&xe&&K,D&&xe&&P,D&&T&&Z)}return l(p,f),p.fill(),m}var d={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};n2=function(m,f){var p={};Object.assign(p,d,m),p.N=p.minVersion,p.K=p.maxVersion,p.v=p.ecLevel,p.left=p.left,p.top=p.top,p.size=p.size,p.fill=p.fill,p.background=p.background,p.text=p.text,p.R=p.radius,p.P=p.quiet,f instanceof HTMLCanvasElement?((f.width!==p.size||f.height!==p.size)&&(f.width=p.size,f.height=p.size),f.getContext("2d").clearRect(0,0,f.width,f.height),c(f,p)):(m=document.createElement("canvas"),m.width=p.size,m.height=p.size,p=c(m,p),f.appendChild(p))}})((function(){function e(f){var p=s.s(f);return{S:function(){return 4},b:function(){return p.length},write:function(b){for(var v=0;v<p.length;v+=1)b.put(p[v],8)}}}function a(){var f=[],p=0,b={B:function(){return f},c:function(v){return(f[Math.floor(v/8)]>>>7-v%8&1)==1},put:function(v,_){for(var S=0;S<_;S+=1)b.m((v>>>_-S-1&1)==1)},f:function(){return p},m:function(v){var _=Math.floor(p/8);f.length<=_&&f.push(0),v&&(f[_]|=128>>>p%8),p+=1}};return b}function s(f,p){function b(T,D){for(var M=-1;7>=M;M+=1)if(!(-1>=T+M||w<=T+M))for(var A=-1;7>=A;A+=1)-1>=D+A||w<=D+A||(S[T+M][D+A]=0<=M&&6>=M&&(A==0||A==6)||0<=A&&6>=A&&(M==0||M==6)||2<=M&&4>=M&&2<=A&&4>=A)}function v(T,D){for(var M=w=4*f+17,A=Array(M),H=0;H<M;H+=1){A[H]=Array(M);for(var K=0;K<M;K+=1)A[H][K]=null}for(S=A,b(0,0),b(w-7,0),b(0,w-7),M=c.G(f),A=0;A<M.length;A+=1)for(H=0;H<M.length;H+=1){K=M[A];var Z=M[H];if(S[K][Z]==null)for(var V=-2;2>=V;V+=1)for(var P=-2;2>=P;P+=1)S[K+V][Z+P]=V==-2||V==2||P==-2||P==2||V==0&&P==0}for(M=8;M<w-8;M+=1)S[M][6]==null&&(S[M][6]=M%2==0);for(M=8;M<w-8;M+=1)S[6][M]==null&&(S[6][M]=M%2==0);for(M=c.w(_<<3|D),A=0;15>A;A+=1)H=!T&&(M>>A&1)==1,S[6>A?A:8>A?A+1:w-15+A][8]=H,S[8][8>A?w-A-1:9>A?15-A:14-A]=H;if(S[w-8][8]=!T,7<=f){for(M=c.A(f),A=0;18>A;A+=1)H=!T&&(M>>A&1)==1,S[Math.floor(A/3)][A%3+w-8-3]=H;for(A=0;18>A;A+=1)H=!T&&(M>>A&1)==1,S[A%3+w-8-3][Math.floor(A/3)]=H}if(E==null){for(T=m.I(f,_),M=a(),A=0;A<z.length;A+=1)H=z[A],M.put(4,4),M.put(H.b(),c.f(4,f)),H.write(M);for(A=H=0;A<T.length;A+=1)H+=T[A].j;if(M.f()>8*H)throw Error("code length overflow. ("+M.f()+">"+8*H+")");for(M.f()+4<=8*H&&M.put(0,4);M.f()%8!=0;)M.m(!1);for(;!(M.f()>=8*H)&&(M.put(236,8),!(M.f()>=8*H));)M.put(17,8);var ae=0;for(H=A=0,K=Array(T.length),Z=Array(T.length),V=0;V<T.length;V+=1){var ye=T[V].j,ke=T[V].o-ye;for(A=Math.max(A,ye),H=Math.max(H,ke),K[V]=Array(ye),P=0;P<K[V].length;P+=1)K[V][P]=255&M.B()[P+ae];for(ae+=ye,P=c.C(ke),ye=n(K[V],P.b()-1).l(P),Z[V]=Array(P.b()-1),P=0;P<Z[V].length;P+=1)ke=P+ye.b()-Z[V].length,Z[V][P]=0<=ke?ye.c(ke):0}for(P=M=0;P<T.length;P+=1)M+=T[P].o;for(M=Array(M),P=ae=0;P<A;P+=1)for(V=0;V<T.length;V+=1)P<K[V].length&&(M[ae]=K[V][P],ae+=1);for(P=0;P<H;P+=1)for(V=0;V<T.length;V+=1)P<Z[V].length&&(M[ae]=Z[V][P],ae+=1);E=M}for(T=E,M=-1,A=w-1,H=7,K=0,D=c.F(D),Z=w-1;0<Z;Z-=2)for(Z==6&&--Z;;){for(V=0;2>V;V+=1)S[A][Z-V]==null&&(P=!1,K<T.length&&(P=(T[K]>>>H&1)==1),D(A,Z-V)&&(P=!P),S[A][Z-V]=P,--H,H==-1&&(K+=1,H=7));if(A+=M,0>A||w<=A){A-=M,M=-M;break}}}var _=l[p],S=null,w=0,E=null,z=[],N={u:function(T){T=e(T),z.push(T),E=null},a:function(T,D){if(0>T||w<=T||0>D||w<=D)throw Error(T+","+D);return S[T][D]},h:function(){return w},J:function(){for(var T=0,D=0,M=0;8>M;M+=1){v(!0,M);var A=c.D(N);(M==0||T>A)&&(T=A,D=M)}v(!1,D)}};return N}function n(f,p){if(typeof f.length>"u")throw Error(f.length+"/"+p);var b=(function(){for(var _=0;_<f.length&&f[_]==0;)_+=1;for(var S=Array(f.length-_+p),w=0;w<f.length-_;w+=1)S[w]=f[w+_];return S})(),v={c:function(_){return b[_]},b:function(){return b.length},multiply:function(_){for(var S=Array(v.b()+_.b()-1),w=0;w<v.b();w+=1)for(var E=0;E<_.b();E+=1)S[w+E]^=d.i(d.g(v.c(w))+d.g(_.c(E)));return n(S,0)},l:function(_){if(0>v.b()-_.b())return v;for(var S=d.g(v.c(0))-d.g(_.c(0)),w=Array(v.b()),E=0;E<v.b();E+=1)w[E]=v.c(E);for(E=0;E<_.b();E+=1)w[E]^=d.i(d.g(_.c(E))+S);return n(w,0).l(_)}};return v}s.s=function(f){for(var p=[],b=0;b<f.length;b++){var v=f.charCodeAt(b);128>v?p.push(v):2048>v?p.push(192|v>>6,128|v&63):55296>v||57344<=v?p.push(224|v>>12,128|v>>6&63,128|v&63):(b++,v=65536+((v&1023)<<10|f.charCodeAt(b)&1023),p.push(240|v>>18,128|v>>12&63,128|v>>6&63,128|v&63))}return p};var l={L:1,M:0,Q:3,H:2},c=(function(){function f(v){for(var _=0;v!=0;)_+=1,v>>>=1;return _}var p=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],b={w:function(v){for(var _=v<<10;0<=f(_)-f(1335);)_^=1335<<f(_)-f(1335);return(v<<10|_)^21522},A:function(v){for(var _=v<<12;0<=f(_)-f(7973);)_^=7973<<f(_)-f(7973);return v<<12|_},G:function(v){return p[v-1]},F:function(v){switch(v){case 0:return function(_,S){return(_+S)%2==0};case 1:return function(_){return _%2==0};case 2:return function(_,S){return S%3==0};case 3:return function(_,S){return(_+S)%3==0};case 4:return function(_,S){return(Math.floor(_/2)+Math.floor(S/3))%2==0};case 5:return function(_,S){return _*S%2+_*S%3==0};case 6:return function(_,S){return(_*S%2+_*S%3)%2==0};case 7:return function(_,S){return(_*S%3+(_+S)%2)%2==0};default:throw Error("bad maskPattern:"+v)}},C:function(v){for(var _=n([1],0),S=0;S<v;S+=1)_=_.multiply(n([1,d.i(S)],0));return _},f:function(v,_){if(v!=4||1>_||40<_)throw Error("mode: "+v+"; type: "+_);return 10>_?8:16},D:function(v){for(var _=v.h(),S=0,w=0;w<_;w+=1)for(var E=0;E<_;E+=1){for(var z=0,N=v.a(w,E),T=-1;1>=T;T+=1)if(!(0>w+T||_<=w+T))for(var D=-1;1>=D;D+=1)0>E+D||_<=E+D||(T!=0||D!=0)&&N==v.a(w+T,E+D)&&(z+=1);5<z&&(S+=3+z-5)}for(w=0;w<_-1;w+=1)for(E=0;E<_-1;E+=1)z=0,v.a(w,E)&&(z+=1),v.a(w+1,E)&&(z+=1),v.a(w,E+1)&&(z+=1),v.a(w+1,E+1)&&(z+=1),(z==0||z==4)&&(S+=3);for(w=0;w<_;w+=1)for(E=0;E<_-6;E+=1)v.a(w,E)&&!v.a(w,E+1)&&v.a(w,E+2)&&v.a(w,E+3)&&v.a(w,E+4)&&!v.a(w,E+5)&&v.a(w,E+6)&&(S+=40);for(E=0;E<_;E+=1)for(w=0;w<_-6;w+=1)v.a(w,E)&&!v.a(w+1,E)&&v.a(w+2,E)&&v.a(w+3,E)&&v.a(w+4,E)&&!v.a(w+5,E)&&v.a(w+6,E)&&(S+=40);for(E=z=0;E<_;E+=1)for(w=0;w<_;w+=1)v.a(w,E)&&(z+=1);return S+=Math.abs(100*z/_/_-50)/5*10}};return b})(),d=(function(){for(var f=Array(256),p=Array(256),b=0;8>b;b+=1)f[b]=1<<b;for(b=8;256>b;b+=1)f[b]=f[b-4]^f[b-5]^f[b-6]^f[b-8];for(b=0;255>b;b+=1)p[f[b]]=b;return{g:function(v){if(1>v)throw Error("glog("+v+")");return p[v]},i:function(v){for(;0>v;)v+=255;for(;256<=v;)v-=255;return f[v]}}})(),m=(function(){function f(v,_){switch(_){case l.L:return p[4*(v-1)];case l.M:return p[4*(v-1)+1];case l.Q:return p[4*(v-1)+2];case l.H:return p[4*(v-1)+3]}}var p=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],b={I:function(v,_){var S=f(v,_);if(typeof S>"u")throw Error("bad rs block @ typeNumber:"+v+"/errorCorrectLevel:"+_);v=S.length/3,_=[];for(var w=0;w<v;w+=1)for(var E=S[3*w],z=S[3*w+1],N=S[3*w+2],T=0;T<E;T+=1){var D=N,M={};M.o=z,M.j=D,_.push(M)}return _}};return b})();return s})());const w8=QrCreator;var si=class extends oe{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&w8.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return W`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${pa({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};si.styles=[ge,x8];g([te("canvas")],si.prototype,"canvas",2);g([C()],si.prototype,"value",2);g([C()],si.prototype,"label",2);g([C({type:Number})],si.prototype,"size",2);g([C()],si.prototype,"fill",2);g([C()],si.prototype,"background",2);g([C({type:Number})],si.prototype,"radius",2);g([C({attribute:"error-correction"})],si.prototype,"errorCorrection",2);g([J(["background","errorCorrection","fill","radius","size","value"])],si.prototype,"generate",1);var S8="sl-qr-code";si.define("sl-qr-code");de({tagName:S8,elementClass:si,react:ue,events:{},displayName:"SlQrCode"});var C8=fe`
  ${ty}

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
`,ri=class extends oe{constructor(){super(...arguments),this.hasSlotController=new ua(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return cl`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${me({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${ne(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ri.styles=[ge,C8];g([te(".button")],ri.prototype,"input",2);g([te(".hidden-input")],ri.prototype,"hiddenInput",2);g([pe()],ri.prototype,"hasFocus",2);g([C({type:Boolean,reflect:!0})],ri.prototype,"checked",2);g([C()],ri.prototype,"value",2);g([C({type:Boolean,reflect:!0})],ri.prototype,"disabled",2);g([C({reflect:!0})],ri.prototype,"size",2);g([C({type:Boolean,reflect:!0})],ri.prototype,"pill",2);g([J("disabled",{waitUntilFirstUpdate:!0})],ri.prototype,"handleDisabledChange",1);var k8="sl-radio-button";ri.define("sl-radio-button");de({tagName:k8,elementClass:ri,react:ue,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var E8=fe`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,xi=class extends oe{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return W`
      <span
        part="base"
        class=${me({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?W` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};xi.styles=[ge,E8];xi.dependencies={"sl-icon":Ke};g([pe()],xi.prototype,"checked",2);g([pe()],xi.prototype,"hasFocus",2);g([C()],xi.prototype,"value",2);g([C({reflect:!0})],xi.prototype,"size",2);g([C({type:Boolean,reflect:!0})],xi.prototype,"disabled",2);g([J("checked")],xi.prototype,"handleCheckedChange",1);g([J("disabled",{waitUntilFirstUpdate:!0})],xi.prototype,"handleDisabledChange",1);var $8="sl-radio";xi.define("sl-radio");de({tagName:$8,elementClass:xi,react:ue,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var A8=fe`
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
`,rt=class extends oe{constructor(){super(...arguments),this.formControlController=new os(this),this.hasSlotController=new ua(this,"help-text","label"),this.localize=new Ie(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const a=this.input.offsetWidth,s=this.output.offsetWidth,n=getComputedStyle(this.input).getPropertyValue("--thumb-size"),l=this.localize.dir()==="rtl",c=a*e;if(l){const d=`${a-c}px + ${e} * ${n}`;this.output.style.translate=`calc((${d} - ${s/2}px - ${n} / 2))`}else{const d=`${c}px - ${e} * ${n}`;this.output.style.translate=`calc(${d} - ${s/2}px + ${n} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),a=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,n=this.helpText?!0:!!a;return W`
      <div
        part="form-control"
        class=${me({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${me({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${ne(this.name)}
              ?disabled=${this.disabled}
              min=${ne(this.min)}
              max=${ne(this.max)}
              step=${ne(this.step)}
              .value=${Mr(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?W`
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
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};rt.styles=[ge,Rr,A8];g([te(".range__control")],rt.prototype,"input",2);g([te(".range__tooltip")],rt.prototype,"output",2);g([pe()],rt.prototype,"hasFocus",2);g([pe()],rt.prototype,"hasTooltip",2);g([C()],rt.prototype,"title",2);g([C()],rt.prototype,"name",2);g([C({type:Number})],rt.prototype,"value",2);g([C()],rt.prototype,"label",2);g([C({attribute:"help-text"})],rt.prototype,"helpText",2);g([C({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);g([C({type:Number})],rt.prototype,"min",2);g([C({type:Number})],rt.prototype,"max",2);g([C({type:Number})],rt.prototype,"step",2);g([C()],rt.prototype,"tooltip",2);g([C({attribute:!1})],rt.prototype,"tooltipFormatter",2);g([C({reflect:!0})],rt.prototype,"form",2);g([Vn()],rt.prototype,"defaultValue",2);g([yl({passive:!0})],rt.prototype,"handleThumbDragStart",1);g([J("value",{waitUntilFirstUpdate:!0})],rt.prototype,"handleValueChange",1);g([J("disabled",{waitUntilFirstUpdate:!0})],rt.prototype,"handleDisabledChange",1);g([J("hasTooltip",{waitUntilFirstUpdate:!0})],rt.prototype,"syncRange",1);var T8="sl-range";rt.define("sl-range");de({tagName:T8,elementClass:rt,react:ue,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var z8=fe`
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
`,M8=fe`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ws=class extends oe{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const a=il(e.target);a?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const a=il(e.target);a?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const a=il(e.target);a?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const a=il(e.target);a?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(a=>{const s=e.indexOf(a),n=il(a);n&&(n.toggleAttribute("data-sl-button-group__button",!0),n.toggleAttribute("data-sl-button-group__button--first",s===0),n.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<e.length-1),n.toggleAttribute("data-sl-button-group__button--last",s===e.length-1),n.toggleAttribute("data-sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return W`
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
    `}};Ws.styles=[ge,M8];g([te("slot")],Ws.prototype,"defaultSlot",2);g([pe()],Ws.prototype,"disableRole",2);g([C()],Ws.prototype,"label",2);function il(e){var a;const s="sl-button, sl-radio-button";return(a=e.closest(s))!=null?a:e.querySelector(s)}var Ut=class extends oe{constructor(){super(...arguments),this.formControlController=new os(this),this.hasSlotController=new ua(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?hS:e?dS:Tu}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const a=e.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),n=this.value;!a||a.disabled||(this.value=a.value,s.forEach(l=>l.checked=l===a),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var a;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const s=this.getAllRadios().filter(m=>!m.disabled),n=(a=s.find(m=>m.checked))!=null?a:s[0],l=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,c=this.value;let d=s.indexOf(n)+l;d<0&&(d=s.length-1),d>s.length-1&&(d=0),this.getAllRadios().forEach(m=>{m.checked=!1,this.hasButtonGroup||m.setAttribute("tabindex","-1")}),this.value=s[d].value,s[d].checked=!0,this.hasButtonGroup?s[d].shadowRoot.querySelector("button").focus():(s[d].setAttribute("tabindex","0"),s[d].focus()),this.value!==c&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,a;const s=this.getAllRadios();if(await Promise.all(s.map(async n=>{await n.updateComplete,n.checked=n.value===this.value,n.size=this.size})),this.hasButtonGroup=s.some(n=>n.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(n=>n.checked))if(this.hasButtonGroup){const n=(e=s[0].shadowRoot)==null?void 0:e.querySelector("button");n&&n.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const n=(a=this.shadowRoot)==null?void 0:a.querySelector("sl-button-group");n&&(n.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(a=>a.checked=a.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,a=this.customValidityMessage!=="";return e||a?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const a=this.getAllRadios(),s=a.find(c=>c.checked),n=a.find(c=>!c.disabled),l=s||n;l&&l.focus(e)}render(){const e=this.hasSlotController.test("label"),a=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,n=this.helpText?!0:!!a,l=W`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return W`
      <fieldset
        part="form-control"
        class=${me({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
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

          ${this.hasButtonGroup?W`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${l}
                </sl-button-group>
              `:l}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Ut.styles=[ge,Rr,z8];Ut.dependencies={"sl-button-group":Ws};g([te("slot:not([name])")],Ut.prototype,"defaultSlot",2);g([te(".radio-group__validation-input")],Ut.prototype,"validationInput",2);g([pe()],Ut.prototype,"hasButtonGroup",2);g([pe()],Ut.prototype,"errorMessage",2);g([pe()],Ut.prototype,"defaultValue",2);g([C()],Ut.prototype,"label",2);g([C({attribute:"help-text"})],Ut.prototype,"helpText",2);g([C()],Ut.prototype,"name",2);g([C({reflect:!0})],Ut.prototype,"value",2);g([C({reflect:!0})],Ut.prototype,"size",2);g([C({reflect:!0})],Ut.prototype,"form",2);g([C({type:Boolean,reflect:!0})],Ut.prototype,"required",2);g([J("size",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleSizeChange",1);g([J("value")],Ut.prototype,"handleValueChange",1);var N8="sl-radio-group";Ut.define("sl-radio-group");de({tagName:N8,elementClass:Ut,react:ue,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var O8=fe`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Qs=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.position=50}handleDrag(e){const{width:a}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";e.preventDefault(),hl(this.base,{onMove:n=>{this.position=parseFloat(Ct(n/a*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const a=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const n=e.shiftKey?10:1;let l=this.position;e.preventDefault(),(a&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight")&&(l-=n),(a&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft")&&(l+=n),e.key==="Home"&&(l=0),e.key==="End"&&(l=100),l=Ct(l,0,100),this.position=l}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return W`
      <div
        part="base"
        id="image-comparer"
        class=${me({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${pa({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${pa({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Qs.styles=[ge,O8];Qs.scopedElement={"sl-icon":Ke};g([te(".image-comparer")],Qs.prototype,"base",2);g([te(".image-comparer__handle")],Qs.prototype,"handle",2);g([C({type:Number,reflect:!0})],Qs.prototype,"position",2);g([J("position",{waitUntilFirstUpdate:!0})],Qs.prototype,"handlePositionChange",1);var D8="sl-image-comparer";Qs.define("sl-image-comparer");de({tagName:D8,elementClass:Qs,react:ue,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var L8=fe`
  :host {
    display: block;
  }
`,yf=new Map;function R8(e,a="cors"){const s=yf.get(e);if(s!==void 0)return Promise.resolve(s);const n=fetch(e,{mode:a}).then(async l=>{const c={ok:l.ok,status:l.status,html:await l.text()};return yf.set(e,c),c});return yf.set(e,n),n}var Hr=class extends oe{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const a=document.createElement("script");[...e.attributes].forEach(s=>a.setAttribute(s.name,s.value)),a.textContent=e.textContent,e.parentNode.replaceChild(a,e)}async handleSrcChange(){try{const e=this.src,a=await R8(e,this.mode);if(e!==this.src)return;if(!a.ok){this.emit("sl-error",{detail:{status:a.status}});return}this.innerHTML=a.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return W`<slot></slot>`}};Hr.styles=[ge,L8];g([C()],Hr.prototype,"src",2);g([C()],Hr.prototype,"mode",2);g([C({attribute:"allow-scripts",type:Boolean})],Hr.prototype,"allowScripts",2);g([J("src")],Hr.prototype,"handleSrcChange",1);var B8="sl-include";Hr.define("sl-include");de({tagName:B8,elementClass:Hr,react:ue,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var H8=fe`
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
`,Bu=class extends oe{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const a=["menuitem","menuitemcheckbox"],s=e.composedPath(),n=s.find(m=>{var f;return a.includes(((f=m?.getAttribute)==null?void 0:f.call(m,"role"))||"")});if(!n||s.find(m=>{var f;return((f=m?.getAttribute)==null?void 0:f.call(m,"role"))==="menu"})!==this)return;const d=n;d.type==="checkbox"&&(d.checked=!d.checked),this.emit("sl-select",{detail:{item:d}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const a=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),a?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const a=this.getAllItems(),s=this.getCurrentItem();let n=s?a.indexOf(s):0;a.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?n++:e.key==="ArrowUp"?n--:e.key==="Home"?n=0:e.key==="End"&&(n=a.length-1),n<0&&(n=a.length-1),n>a.length-1&&(n=0),this.setCurrentItem(a[n]),a[n].focus())}}handleMouseDown(e){const a=e.target;this.isMenuItem(a)&&this.setCurrentItem(a)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var a;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((a=e.getAttribute("role"))!=null?a:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return W`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Bu.styles=[ge,H8];g([te("slot")],Bu.prototype,"defaultSlot",2);var U8="sl-menu";Bu.define("sl-menu");de({tagName:U8,elementClass:Bu,react:ue,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var j8=fe`
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
`,Se=class extends oe{constructor(){super(...arguments),this.formControlController=new os(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ua(this,"help-text","label"),this.localize=new Ie(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const a=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!a&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,a,s="none"){this.input.setSelectionRange(e,a,s)}setRangeText(e,a,s,n="preserve"){const l=a??this.input.selectionStart,c=s??this.input.selectionEnd;this.input.setRangeText(e,l,c,n),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),a=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,n=this.helpText?!0:!!a,c=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return W`
      <div
        part="form-control"
        class=${me({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${me({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${ne(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ne(this.placeholder)}
              minlength=${ne(this.minlength)}
              maxlength=${ne(this.maxlength)}
              min=${ne(this.min)}
              max=${ne(this.max)}
              step=${ne(this.step)}
              .value=${Mr(this.value)}
              autocapitalize=${ne(this.autocapitalize)}
              autocomplete=${ne(this.autocomplete)}
              autocorrect=${ne(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ne(this.pattern)}
              enterkeyhint=${ne(this.enterkeyhint)}
              inputmode=${ne(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${c?W`
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
            ${this.passwordToggle&&!this.disabled?W`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?W`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:W`
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
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Se.styles=[ge,Rr,j8];Se.dependencies={"sl-icon":Ke};g([te(".input__control")],Se.prototype,"input",2);g([pe()],Se.prototype,"hasFocus",2);g([C()],Se.prototype,"title",2);g([C({reflect:!0})],Se.prototype,"type",2);g([C()],Se.prototype,"name",2);g([C()],Se.prototype,"value",2);g([Vn()],Se.prototype,"defaultValue",2);g([C({reflect:!0})],Se.prototype,"size",2);g([C({type:Boolean,reflect:!0})],Se.prototype,"filled",2);g([C({type:Boolean,reflect:!0})],Se.prototype,"pill",2);g([C()],Se.prototype,"label",2);g([C({attribute:"help-text"})],Se.prototype,"helpText",2);g([C({type:Boolean})],Se.prototype,"clearable",2);g([C({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);g([C()],Se.prototype,"placeholder",2);g([C({type:Boolean,reflect:!0})],Se.prototype,"readonly",2);g([C({attribute:"password-toggle",type:Boolean})],Se.prototype,"passwordToggle",2);g([C({attribute:"password-visible",type:Boolean})],Se.prototype,"passwordVisible",2);g([C({attribute:"no-spin-buttons",type:Boolean})],Se.prototype,"noSpinButtons",2);g([C({reflect:!0})],Se.prototype,"form",2);g([C({type:Boolean,reflect:!0})],Se.prototype,"required",2);g([C()],Se.prototype,"pattern",2);g([C({type:Number})],Se.prototype,"minlength",2);g([C({type:Number})],Se.prototype,"maxlength",2);g([C()],Se.prototype,"min",2);g([C()],Se.prototype,"max",2);g([C()],Se.prototype,"step",2);g([C()],Se.prototype,"autocapitalize",2);g([C()],Se.prototype,"autocorrect",2);g([C()],Se.prototype,"autocomplete",2);g([C({type:Boolean})],Se.prototype,"autofocus",2);g([C()],Se.prototype,"enterkeyhint",2);g([C({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Se.prototype,"spellcheck",2);g([C()],Se.prototype,"inputmode",2);g([J("disabled",{waitUntilFirstUpdate:!0})],Se.prototype,"handleDisabledChange",1);g([J("step",{waitUntilFirstUpdate:!0})],Se.prototype,"handleStepChange",1);g([J("value",{waitUntilFirstUpdate:!0})],Se.prototype,"handleValueChange",1);var I8="sl-input";Se.define("sl-input");var V8=de({tagName:I8,elementClass:Se,react:ue,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),ea=V8,P8=fe`
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
 */const fl=(e,a)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(a,!1),fl(n,a);return!0},xu=e=>{let a,s;do{if((a=e._$AM)===void 0)break;s=a._$AN,s.delete(e),e=a}while(s?.size===0)},l2=e=>{for(let a;a=e._$AM;e=a){let s=a._$AN;if(s===void 0)a._$AN=s=new Set;else if(s.has(e))break;s.add(e),G8(a)}};function F8(e){this._$AN!==void 0?(xu(this),this._$AM=e,l2(this)):this._$AM=e}function q8(e,a=!1,s=0){const n=this._$AH,l=this._$AN;if(l!==void 0&&l.size!==0)if(a)if(Array.isArray(n))for(let c=s;c<n.length;c++)fl(n[c],!1),xu(n[c]);else n!=null&&(fl(n,!1),xu(n));else fl(this,e)}const G8=e=>{e.type==Ni.CHILD&&(e._$AP??=q8,e._$AQ??=F8)};class Y8 extends xl{constructor(){super(...arguments),this._$AN=void 0}_$AT(a,s,n){super._$AT(a,s,n),l2(this),this.isConnected=a._$AU}_$AO(a,s=!0){a!==this.isConnected&&(this.isConnected=a,a?this.reconnected?.():this.disconnected?.()),s&&(fl(this,a),xu(this))}setValue(a){if(ay(this._$Ct))this._$Ct._$AI(a,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=a,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X8=()=>new W8;class W8{}const _f=new WeakMap,Q8=_l(class extends Y8{render(e){return it}update(e,[a]){const s=a!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=a,this.ht=e.options?.host,this.rt(this.ct=e.element)),it}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const a=this.ht??globalThis;let s=_f.get(a);s===void 0&&(s=new WeakMap,_f.set(a,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?_f.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Z8=class{constructor(e,a){this.popupRef=X8(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var n;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(n=s.target.role)!=null&&n.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),n=s?.assignedElements({flatten:!0}).filter(p=>p.localName==="sl-menu")[0],l=getComputedStyle(this.host).direction==="rtl";if(!n)return;const{left:c,top:d,width:m,height:f}=n.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${l?c+m:c}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${d}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${l?c+m:c}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${d+f}px`)},(this.host=e).addController(this),this.hasSlotController=a}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const a=this.host.renderRoot.querySelector("slot[name='submenu']");if(!a){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const n of a.assignedElements())if(s=n.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let n=1;n!==s.length;++n)s[n].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const a=this.host.parentElement.computedStyleMap(),n=["padding-top","border-top-width","margin-top"].reduce((l,c)=>{var d;const m=(d=a.get(c))!=null?d:new CSSUnitValue(0,"px"),p=(m instanceof CSSUnitValue?m:new CSSUnitValue(0,"px")).to("px");return l-p.value},0);this.skidding=n}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?W`
      <sl-popup
        ${Q8(this.popupRef)}
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
    `:W` <slot name="submenu" hidden></slot> `}},ba=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new ua(this,"submenu"),this.submenuController=new Z8(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return fS(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",a=this.submenuController.isExpanded();return W`
      <div
        id="anchor"
        part="base"
        class=${me({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":a})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!a}"
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
        ${this.loading?W` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ba.styles=[ge,P8];ba.dependencies={"sl-icon":Ke,"sl-popup":Fe,"sl-spinner":Rn};g([te("slot:not([name])")],ba.prototype,"defaultSlot",2);g([te(".menu-item")],ba.prototype,"menuItem",2);g([C()],ba.prototype,"type",2);g([C({type:Boolean,reflect:!0})],ba.prototype,"checked",2);g([C()],ba.prototype,"value",2);g([C({type:Boolean,reflect:!0})],ba.prototype,"loading",2);g([C({type:Boolean,reflect:!0})],ba.prototype,"disabled",2);g([J("checked")],ba.prototype,"handleCheckedChange",1);g([J("disabled")],ba.prototype,"handleDisabledChange",1);g([J("type")],ba.prototype,"handleTypeChange",1);var K8="sl-menu-item";ba.define("sl-menu-item");de({tagName:K8,elementClass:ba,react:ue,events:{},displayName:"SlMenuItem"});var J8=fe`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Rp=class extends oe{render(){return W` <slot part="base" class="menu-label"></slot> `}};Rp.styles=[ge,J8];var e9="sl-menu-label";Rp.define("sl-menu-label");de({tagName:e9,elementClass:Rp,react:ue,events:{},displayName:"SlMenuLabel"});var t9=fe`
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
`,Ha=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let a="";return[...e].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(a+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(a+=s.textContent)}),a.trim()}render(){return W`
      <div
        part="base"
        class=${me({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ha.styles=[ge,t9];Ha.dependencies={"sl-icon":Ke};g([te(".option__label")],Ha.prototype,"defaultSlot",2);g([pe()],Ha.prototype,"current",2);g([pe()],Ha.prototype,"selected",2);g([pe()],Ha.prototype,"hasHover",2);g([C({reflect:!0})],Ha.prototype,"value",2);g([C({type:Boolean,reflect:!0})],Ha.prototype,"disabled",2);g([J("disabled")],Ha.prototype,"handleDisabledChange",1);g([J("selected")],Ha.prototype,"handleSelectedChange",1);g([J("value")],Ha.prototype,"handleValueChange",1);var a9="sl-option";Ha.define("sl-option");var i9=de({tagName:a9,elementClass:Ha,react:ue,events:{},displayName:"SlOption"}),Na=i9,s9="sl-popup";Fe.define("sl-popup");de({tagName:s9,elementClass:Fe,react:ue,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var r9=fe`
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
`,jt=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var a;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((a=document.activeElement)==null?void 0:a.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(n,l)=>{if(!n)return null;const c=n.closest(l);if(c)return c;const d=n.getRootNode();return d instanceof ShadowRoot?s(d.host,l):null};setTimeout(()=>{var n;const l=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?Dy():document.activeElement;(!this.containingElement||s(l,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const a=e.composedPath();this.containingElement&&!a.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const a=e.target;!this.stayOpenOnSelect&&a.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const a=this.getMenu();if(a){const s=a.getAllItems(),n=s[0],l=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(a.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(a.setCurrentItem(l),l.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const a=this.trigger.assignedElements({flatten:!0}).find(n=>j4(n).start);let s;if(a){switch(a.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=a.button;break;default:s=a}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ca(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ca(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await kt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:a}=st(this,"dropdown.show",{dir:this.localize.dir()});await gt(this.popup.popup,e,a),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await kt(this);const{keyframes:e,options:a}=st(this,"dropdown.hide",{dir:this.localize.dir()});await gt(this.popup.popup,e,a),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return W`
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
        sync=${ne(this.sync?this.sync:void 0)}
        class=${me({dropdown:!0,"dropdown--open":this.open})}
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
    `}};jt.styles=[ge,r9];jt.dependencies={"sl-popup":Fe};g([te(".dropdown")],jt.prototype,"popup",2);g([te(".dropdown__trigger")],jt.prototype,"trigger",2);g([te(".dropdown__panel")],jt.prototype,"panel",2);g([C({type:Boolean,reflect:!0})],jt.prototype,"open",2);g([C({reflect:!0})],jt.prototype,"placement",2);g([C({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);g([C({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],jt.prototype,"stayOpenOnSelect",2);g([C({attribute:!1})],jt.prototype,"containingElement",2);g([C({type:Number})],jt.prototype,"distance",2);g([C({type:Number})],jt.prototype,"skidding",2);g([C({type:Boolean})],jt.prototype,"hoist",2);g([C({reflect:!0})],jt.prototype,"sync",2);g([J("open",{waitUntilFirstUpdate:!0})],jt.prototype,"handleOpenChange",1);Ge("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ge("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var n9="sl-dropdown";jt.define("sl-dropdown");de({tagName:n9,elementClass:jt,react:ue,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var va=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),a=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return W`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:a})}
      </time>
    `}};g([C()],va.prototype,"date",2);g([C()],va.prototype,"weekday",2);g([C()],va.prototype,"era",2);g([C()],va.prototype,"year",2);g([C()],va.prototype,"month",2);g([C()],va.prototype,"day",2);g([C()],va.prototype,"hour",2);g([C()],va.prototype,"minute",2);g([C()],va.prototype,"second",2);g([C({attribute:"time-zone-name"})],va.prototype,"timeZoneName",2);g([C({attribute:"time-zone"})],va.prototype,"timeZone",2);g([C({attribute:"hour-format"})],va.prototype,"hourFormat",2);var o9="sl-format-date";va.define("sl-format-date");de({tagName:o9,elementClass:va,react:ue,events:{},displayName:"SlFormatDate"});var Al=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],a=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?e:a,n=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),l=s[n]+this.unit,c=parseFloat((this.value/Math.pow(1e3,n)).toPrecision(3));return this.localize.number(c,{style:"unit",unit:l,unitDisplay:this.display})}};g([C({type:Number})],Al.prototype,"value",2);g([C()],Al.prototype,"unit",2);g([C()],Al.prototype,"display",2);var l9="sl-format-bytes";Al.define("sl-format-bytes");de({tagName:l9,elementClass:Al,react:ue,events:{},displayName:"SlFormatBytes"});var ni=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};g([C({type:Number})],ni.prototype,"value",2);g([C()],ni.prototype,"type",2);g([C({attribute:"no-grouping",type:Boolean})],ni.prototype,"noGrouping",2);g([C()],ni.prototype,"currency",2);g([C({attribute:"currency-display"})],ni.prototype,"currencyDisplay",2);g([C({attribute:"minimum-integer-digits",type:Number})],ni.prototype,"minimumIntegerDigits",2);g([C({attribute:"minimum-fraction-digits",type:Number})],ni.prototype,"minimumFractionDigits",2);g([C({attribute:"maximum-fraction-digits",type:Number})],ni.prototype,"maximumFractionDigits",2);g([C({attribute:"minimum-significant-digits",type:Number})],ni.prototype,"minimumSignificantDigits",2);g([C({attribute:"maximum-significant-digits",type:Number})],ni.prototype,"maximumSignificantDigits",2);var c9="sl-format-number";ni.define("sl-format-number");de({tagName:c9,elementClass:ni,react:ue,events:{},displayName:"SlFormatNumber"});var u9="sl-button-group";Ws.define("sl-button-group");de({tagName:u9,elementClass:Ws,react:ue,events:{},displayName:"SlButtonGroup"});var d9=class{constructor(e,a){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=a}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},h9=fe`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*f9(e,a){if(e!==void 0){let s=0;for(const n of e)yield a(n,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*p9(e,a,s=1){const n=a===void 0?0:e;a??=e;for(let l=n;s>0?l<a:a<l;l+=s)yield l}var ct=class extends oe{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new d9(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new Ie(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const a=e.scrollLeft,s=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const n=e.scrollLeft,l=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:a,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(a!==n||s!==l)&&(e.scrollTo({left:n,top:l,behavior:Zf()?"auto":"smooth"}),await ca(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(s=>[...s.addedNodes,...s.removedNodes].some(n=>this.isCarouselItem(n)&&!n.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:a,slidesPerMove:s,loop:n}=this,l=n?e/s:(e-a)/s+1;return Math.ceil(l)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(a=>this.isCarouselItem(a)&&(!e||!a.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const a=Math.abs(this.dragStartPosition[0]-e.clientX),s=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(a*a+s*s)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const a=e.target,s=this.localize.dir()==="rtl",n=a.closest('[part~="pagination-item"]')!==null,l=e.key==="ArrowDown"||!s&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft",c=e.key==="ArrowUp"||!s&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight";e.preventDefault(),c&&this.previous(),l&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),n&&this.updateComplete.then(()=>{var d;const m=(d=this.shadowRoot)==null?void 0:d.querySelector('[part~="pagination-item--active"]');m&&m.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(a=>{e.disconnect();for(const m of a){const f=m.target;f.toggleAttribute("inert",!m.isIntersecting),f.classList.toggle("--in-view",m.isIntersecting),f.setAttribute("aria-hidden",m.isIntersecting?"false":"true")}const s=a.find(m=>m.isIntersecting);if(!s)return;const n=this.getSlides({excludeClones:!1}),l=this.getSlides().length,c=n.indexOf(s.target),d=this.loop?c-this.slidesPerPage:c;if(this.activeSlide=(Math.ceil(d/this.slidesPerMove)*this.slidesPerMove+l)%l,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const m=Number(s.target.getAttribute("data-clone"));this.goToSlide(m,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(a=>{e.observe(a)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,a)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("role","group"),e.setAttribute("aria-label",this.localize.term("slideNum",a+1)),this.pagination&&(e.setAttribute("id",`slide-${a+1}`),e.setAttribute("role","tabpanel"),e.removeAttribute("aria-label"),e.setAttribute("aria-labelledby",`tab-${a+1}`)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),a=this.slidesPerPage,s=e.slice(-a),n=e.slice(0,a);s.reverse().forEach((l,c)=>{const d=l.cloneNode(!0);d.setAttribute("data-clone",String(e.length-c-1)),this.prepend(d)}),n.forEach((l,c)=>{const d=l.cloneNode(!0);d.setAttribute("data-clone",String(c)),this.append(d)})}handleSlideChange(){const e=this.getSlides();e.forEach((a,s)=>{a.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),a=this.slidesPerMove;e.forEach((s,n)=>{(n+a)%a===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,a="smooth"){const{slidesPerPage:s,loop:n}=this,l=this.getSlides(),c=this.getSlides({excludeClones:!1});if(!l.length)return;const d=n?(e+l.length)%l.length:Ct(e,0,l.length-s);this.activeSlide=d;const m=this.localize.dir()==="rtl",f=Ct(e+(n?s:0)+(m?s-1:0),0,c.length-1),p=c[f];this.scrollToSlide(p,Zf()?"auto":a)}scrollToSlide(e,a="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,n=s.getBoundingClientRect(),l=e.getBoundingClientRect(),c=l.left-n.left,d=l.top-n.top;c||d?(this.pendingSlideChange=!0,s.scrollTo({left:c+s.scrollLeft,top:d+s.scrollTop,behavior:a})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:a}=this,s=this.getPageCount(),n=this.getCurrentPage(),l=this.canScrollPrev(),c=this.canScrollNext(),d=this.localize.dir()==="ltr";return W`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${me({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${a?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?W`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${me({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!l})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${l?"false":"true"}"
                  @click=${l?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${d?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${me({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!c})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${c?"false":"true"}"
                  @click=${c?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${d?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?W`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${f9(p9(s),m=>{const f=m===n;return W`
                    <button
                      part="pagination-item ${f?"pagination-item--active":""}"
                      class="${me({"carousel__pagination-item":!0,"carousel__pagination-item--active":f})}"
                      role="tab"
                      id="tab-${m+1}"
                      aria-controls="slide-${m+1}"
                      aria-selected="${f?"true":"false"}"
                      aria-label="${f?this.localize.term("slideNum",m+1):this.localize.term("goToSlide",m+1,s)}"
                      tabindex=${f?"0":"-1"}
                      @click=${()=>this.goToSlide(m*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ct.styles=[ge,h9];ct.dependencies={"sl-icon":Ke};g([C({type:Boolean,reflect:!0})],ct.prototype,"loop",2);g([C({type:Boolean,reflect:!0})],ct.prototype,"navigation",2);g([C({type:Boolean,reflect:!0})],ct.prototype,"pagination",2);g([C({type:Boolean,reflect:!0})],ct.prototype,"autoplay",2);g([C({type:Number,attribute:"autoplay-interval"})],ct.prototype,"autoplayInterval",2);g([C({type:Number,attribute:"slides-per-page"})],ct.prototype,"slidesPerPage",2);g([C({type:Number,attribute:"slides-per-move"})],ct.prototype,"slidesPerMove",2);g([C()],ct.prototype,"orientation",2);g([C({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ct.prototype,"mouseDragging",2);g([te(".carousel__slides")],ct.prototype,"scrollContainer",2);g([te(".carousel__pagination")],ct.prototype,"paginationContainer",2);g([pe()],ct.prototype,"activeSlide",2);g([pe()],ct.prototype,"scrolling",2);g([pe()],ct.prototype,"dragging",2);g([yl({passive:!0})],ct.prototype,"handleScroll",1);g([J("loop",{waitUntilFirstUpdate:!0}),J("slidesPerPage",{waitUntilFirstUpdate:!0})],ct.prototype,"initializeSlides",1);g([J("activeSlide")],ct.prototype,"handleSlideChange",1);g([J("slidesPerMove")],ct.prototype,"updateSlidesSnap",1);g([J("autoplay")],ct.prototype,"handleAutoplayChange",1);var m9="sl-carousel";ct.define("sl-carousel");de({tagName:m9,elementClass:ct,react:ue,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var g9=fe`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Bp=class extends oe{connectedCallback(){super.connectedCallback()}render(){return W` <slot></slot> `}};Bp.styles=[ge,g9];var b9="sl-carousel-item";Bp.define("sl-carousel-item");de({tagName:b9,elementClass:Bp,react:ue,events:{},displayName:"SlCarouselItem"});var v9="sl-checkbox";$t.define("sl-checkbox");de({tagName:v9,elementClass:$t,react:ue,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var y9=fe`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function qt(e,a){_9(e)&&(e="100%");const s=x9(e);return e=a===360?e:Math.min(a,Math.max(0,parseFloat(e))),s&&(e=parseInt(String(e*a),10)/100),Math.abs(e-a)<1e-6?1:(a===360?e=(e<0?e%a+a:e%a)/parseFloat(String(a)):e=e%a/parseFloat(String(a)),e)}function Kc(e){return Math.min(1,Math.max(0,e))}function _9(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function x9(e){return typeof e=="string"&&e.indexOf("%")!==-1}function c2(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Jc(e){return Number(e)<=1?`${Number(e)*100}%`:e}function kr(e){return e.length===1?"0"+e:String(e)}function w9(e,a,s){return{r:qt(e,255)*255,g:qt(a,255)*255,b:qt(s,255)*255}}function h1(e,a,s){e=qt(e,255),a=qt(a,255),s=qt(s,255);const n=Math.max(e,a,s),l=Math.min(e,a,s);let c=0,d=0;const m=(n+l)/2;if(n===l)d=0,c=0;else{const f=n-l;switch(d=m>.5?f/(2-n-l):f/(n+l),n){case e:c=(a-s)/f+(a<s?6:0);break;case a:c=(s-e)/f+2;break;case s:c=(e-a)/f+4;break}c/=6}return{h:c,s:d,l:m}}function xf(e,a,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(a-e)*(6*s):s<1/2?a:s<2/3?e+(a-e)*(2/3-s)*6:e}function S9(e,a,s){let n,l,c;if(e=qt(e,360),a=qt(a,100),s=qt(s,100),a===0)l=s,c=s,n=s;else{const d=s<.5?s*(1+a):s+a-s*a,m=2*s-d;n=xf(m,d,e+1/3),l=xf(m,d,e),c=xf(m,d,e-1/3)}return{r:n*255,g:l*255,b:c*255}}function f1(e,a,s){e=qt(e,255),a=qt(a,255),s=qt(s,255);const n=Math.max(e,a,s),l=Math.min(e,a,s);let c=0;const d=n,m=n-l,f=n===0?0:m/n;if(n===l)c=0;else{switch(n){case e:c=(a-s)/m+(a<s?6:0);break;case a:c=(s-e)/m+2;break;case s:c=(e-a)/m+4;break}c/=6}return{h:c,s:f,v:d}}function C9(e,a,s){e=qt(e,360)*6,a=qt(a,100),s=qt(s,100);const n=Math.floor(e),l=e-n,c=s*(1-a),d=s*(1-l*a),m=s*(1-(1-l)*a),f=n%6,p=[s,d,c,c,m,s][f],b=[m,s,s,d,c,c][f],v=[c,c,m,s,s,d][f];return{r:p*255,g:b*255,b:v*255}}function p1(e,a,s,n){const l=[kr(Math.round(e).toString(16)),kr(Math.round(a).toString(16)),kr(Math.round(s).toString(16))];return n&&l[0].startsWith(l[0].charAt(1))&&l[1].startsWith(l[1].charAt(1))&&l[2].startsWith(l[2].charAt(1))?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function k9(e,a,s,n,l){const c=[kr(Math.round(e).toString(16)),kr(Math.round(a).toString(16)),kr(Math.round(s).toString(16)),kr($9(n))];return l&&c[0].startsWith(c[0].charAt(1))&&c[1].startsWith(c[1].charAt(1))&&c[2].startsWith(c[2].charAt(1))&&c[3].startsWith(c[3].charAt(1))?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}function E9(e,a,s,n){const l=e/100,c=a/100,d=s/100,m=n/100,f=255*(1-l)*(1-m),p=255*(1-c)*(1-m),b=255*(1-d)*(1-m);return{r:f,g:p,b}}function m1(e,a,s){let n=1-e/255,l=1-a/255,c=1-s/255,d=Math.min(n,l,c);return d===1?(n=0,l=0,c=0):(n=(n-d)/(1-d)*100,l=(l-d)/(1-d)*100,c=(c-d)/(1-d)*100),d*=100,{c:Math.round(n),m:Math.round(l),y:Math.round(c),k:Math.round(d)}}function $9(e){return Math.round(parseFloat(e)*255).toString(16)}function g1(e){return za(e)/255}function za(e){return parseInt(e,16)}function A9(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const rp={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function T9(e){let a={r:0,g:0,b:0},s=1,n=null,l=null,c=null,d=!1,m=!1;return typeof e=="string"&&(e=N9(e)),typeof e=="object"&&(Ta(e.r)&&Ta(e.g)&&Ta(e.b)?(a=w9(e.r,e.g,e.b),d=!0,m=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Ta(e.h)&&Ta(e.s)&&Ta(e.v)?(n=Jc(e.s),l=Jc(e.v),a=C9(e.h,n,l),d=!0,m="hsv"):Ta(e.h)&&Ta(e.s)&&Ta(e.l)?(n=Jc(e.s),c=Jc(e.l),a=S9(e.h,n,c),d=!0,m="hsl"):Ta(e.c)&&Ta(e.m)&&Ta(e.y)&&Ta(e.k)&&(a=E9(e.c,e.m,e.y,e.k),d=!0,m="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(s=e.a)),s=c2(s),{ok:d,format:e.format||m,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:s}}const z9="[-\\+]?\\d+%?",M9="[-\\+]?\\d*\\.\\d+%?",Hs="(?:"+M9+")|(?:"+z9+")",wf="[\\s|\\(]+("+Hs+")[,|\\s]+("+Hs+")[,|\\s]+("+Hs+")\\s*\\)?",eu="[\\s|\\(]+("+Hs+")[,|\\s]+("+Hs+")[,|\\s]+("+Hs+")[,|\\s]+("+Hs+")\\s*\\)?",Ka={CSS_UNIT:new RegExp(Hs),rgb:new RegExp("rgb"+wf),rgba:new RegExp("rgba"+eu),hsl:new RegExp("hsl"+wf),hsla:new RegExp("hsla"+eu),hsv:new RegExp("hsv"+wf),hsva:new RegExp("hsva"+eu),cmyk:new RegExp("cmyk"+eu),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function N9(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let a=!1;if(rp[e])e=rp[e],a=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=Ka.rgb.exec(e);return s?{r:s[1],g:s[2],b:s[3]}:(s=Ka.rgba.exec(e),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=Ka.hsl.exec(e),s?{h:s[1],s:s[2],l:s[3]}:(s=Ka.hsla.exec(e),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=Ka.hsv.exec(e),s?{h:s[1],s:s[2],v:s[3]}:(s=Ka.hsva.exec(e),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=Ka.cmyk.exec(e),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=Ka.hex8.exec(e),s?{r:za(s[1]),g:za(s[2]),b:za(s[3]),a:g1(s[4]),format:a?"name":"hex8"}:(s=Ka.hex6.exec(e),s?{r:za(s[1]),g:za(s[2]),b:za(s[3]),format:a?"name":"hex"}:(s=Ka.hex4.exec(e),s?{r:za(s[1]+s[1]),g:za(s[2]+s[2]),b:za(s[3]+s[3]),a:g1(s[4]+s[4]),format:a?"name":"hex8"}:(s=Ka.hex3.exec(e),s?{r:za(s[1]+s[1]),g:za(s[2]+s[2]),b:za(s[3]+s[3]),format:a?"name":"hex"}:!1))))))))))}function Ta(e){return typeof e=="number"?!Number.isNaN(e):Ka.CSS_UNIT.test(e)}class pt{constructor(a="",s={}){if(a instanceof pt)return a;typeof a=="number"&&(a=A9(a)),this.originalInput=a;const n=T9(a);this.originalInput=a,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??n.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const a=this.toRgb();return(a.r*299+a.g*587+a.b*114)/1e3}getLuminance(){const a=this.toRgb();let s,n,l;const c=a.r/255,d=a.g/255,m=a.b/255;return c<=.03928?s=c/12.92:s=Math.pow((c+.055)/1.055,2.4),d<=.03928?n=d/12.92:n=Math.pow((d+.055)/1.055,2.4),m<=.03928?l=m/12.92:l=Math.pow((m+.055)/1.055,2.4),.2126*s+.7152*n+.0722*l}getAlpha(){return this.a}setAlpha(a){return this.a=c2(a),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:a}=this.toHsl();return a===0}toHsv(){const a=f1(this.r,this.g,this.b);return{h:a.h*360,s:a.s,v:a.v,a:this.a}}toHsvString(){const a=f1(this.r,this.g,this.b),s=Math.round(a.h*360),n=Math.round(a.s*100),l=Math.round(a.v*100);return this.a===1?`hsv(${s}, ${n}%, ${l}%)`:`hsva(${s}, ${n}%, ${l}%, ${this.roundA})`}toHsl(){const a=h1(this.r,this.g,this.b);return{h:a.h*360,s:a.s,l:a.l,a:this.a}}toHslString(){const a=h1(this.r,this.g,this.b),s=Math.round(a.h*360),n=Math.round(a.s*100),l=Math.round(a.l*100);return this.a===1?`hsl(${s}, ${n}%, ${l}%)`:`hsla(${s}, ${n}%, ${l}%, ${this.roundA})`}toHex(a=!1){return p1(this.r,this.g,this.b,a)}toHexString(a=!1){return"#"+this.toHex(a)}toHex8(a=!1){return k9(this.r,this.g,this.b,this.a,a)}toHex8String(a=!1){return"#"+this.toHex8(a)}toHexShortString(a=!1){return this.a===1?this.toHexString(a):this.toHex8String(a)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const a=Math.round(this.r),s=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${a}, ${s}, ${n})`:`rgba(${a}, ${s}, ${n}, ${this.roundA})`}toPercentageRgb(){const a=s=>`${Math.round(qt(s,255)*100)}%`;return{r:a(this.r),g:a(this.g),b:a(this.b),a:this.a}}toPercentageRgbString(){const a=s=>Math.round(qt(s,255)*100);return this.a===1?`rgb(${a(this.r)}%, ${a(this.g)}%, ${a(this.b)}%)`:`rgba(${a(this.r)}%, ${a(this.g)}%, ${a(this.b)}%, ${this.roundA})`}toCmyk(){return{...m1(this.r,this.g,this.b)}}toCmykString(){const{c:a,m:s,y:n,k:l}=m1(this.r,this.g,this.b);return`cmyk(${a}, ${s}, ${n}, ${l})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const a="#"+p1(this.r,this.g,this.b,!1);for(const[s,n]of Object.entries(rp))if(a===n)return s;return!1}toString(a){const s=!!a;a=a??this.format;let n=!1;const l=this.a<1&&this.a>=0;return!s&&l&&(a.startsWith("hex")||a==="name")?a==="name"&&this.a===0?this.toName():this.toRgbString():(a==="rgb"&&(n=this.toRgbString()),a==="prgb"&&(n=this.toPercentageRgbString()),(a==="hex"||a==="hex6")&&(n=this.toHexString()),a==="hex3"&&(n=this.toHexString(!0)),a==="hex4"&&(n=this.toHex8String(!0)),a==="hex8"&&(n=this.toHex8String()),a==="name"&&(n=this.toName()),a==="hsl"&&(n=this.toHslString()),a==="hsv"&&(n=this.toHsvString()),a==="cmyk"&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new pt(this.toString())}lighten(a=10){const s=this.toHsl();return s.l+=a/100,s.l=Kc(s.l),new pt(s)}brighten(a=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(a/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(a/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(a/100)))),new pt(s)}darken(a=10){const s=this.toHsl();return s.l-=a/100,s.l=Kc(s.l),new pt(s)}tint(a=10){return this.mix("white",a)}shade(a=10){return this.mix("black",a)}desaturate(a=10){const s=this.toHsl();return s.s-=a/100,s.s=Kc(s.s),new pt(s)}saturate(a=10){const s=this.toHsl();return s.s+=a/100,s.s=Kc(s.s),new pt(s)}greyscale(){return this.desaturate(100)}spin(a){const s=this.toHsl(),n=(s.h+a)%360;return s.h=n<0?360+n:n,new pt(s)}mix(a,s=50){const n=this.toRgb(),l=new pt(a).toRgb(),c=s/100,d={r:(l.r-n.r)*c+n.r,g:(l.g-n.g)*c+n.g,b:(l.b-n.b)*c+n.b,a:(l.a-n.a)*c+n.a};return new pt(d)}analogous(a=6,s=30){const n=this.toHsl(),l=360/s,c=[this];for(n.h=(n.h-(l*a>>1)+720)%360;--a;)n.h=(n.h+l)%360,c.push(new pt(n));return c}complement(){const a=this.toHsl();return a.h=(a.h+180)%360,new pt(a)}monochromatic(a=6){const s=this.toHsv(),{h:n}=s,{s:l}=s;let{v:c}=s;const d=[],m=1/a;for(;a--;)d.push(new pt({h:n,s:l,v:c})),c=(c+m)%1;return d}splitcomplement(){const a=this.toHsl(),{h:s}=a;return[this,new pt({h:(s+72)%360,s:a.s,l:a.l}),new pt({h:(s+216)%360,s:a.s,l:a.l})]}onBackground(a){const s=this.toRgb(),n=new pt(a).toRgb(),l=s.a+n.a*(1-s.a);return new pt({r:(s.r*s.a+n.r*n.a*(1-s.a))/l,g:(s.g*s.a+n.g*n.a*(1-s.a))/l,b:(s.b*s.a+n.b*n.a*(1-s.a))/l,a:l})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(a){const s=this.toHsl(),{h:n}=s,l=[this],c=360/a;for(let d=1;d<a;d++)l.push(new pt({h:(n+d*c)%360,s:s.s,l:s.l}));return l}equals(a){const s=new pt(a);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var b1="EyeDropper"in window,Me=class extends oe{constructor(){super(),this.formControlController=new os(this),this.isSafeValue=!1,this.localize=new Ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],a=(e.indexOf(this.format)+1)%e.length;this.format=e[a],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const a=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=a.querySelector(".color-picker__slider-handle"),{width:n}=a.getBoundingClientRect();let l=this.value,c=this.value;s.focus(),e.preventDefault(),hl(a,{onMove:d=>{this.alpha=Ct(d/n*100,0,100),this.syncValues(),this.value!==c&&(c=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==l&&(l=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const a=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=a.querySelector(".color-picker__slider-handle"),{width:n}=a.getBoundingClientRect();let l=this.value,c=this.value;s.focus(),e.preventDefault(),hl(a,{onMove:d=>{this.hue=Ct(d/n*360,0,360),this.syncValues(),this.value!==c&&(c=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==l&&(l=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const a=this.shadowRoot.querySelector(".color-picker__grid"),s=a.querySelector(".color-picker__grid-handle"),{width:n,height:l}=a.getBoundingClientRect();let c=this.value,d=this.value;s.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,hl(a,{onMove:(m,f)=>{this.saturation=Ct(m/n*100,0,100),this.brightness=Ct(100-f/l*100,0,100),this.syncValues(),this.value!==d&&(d=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==c&&(c=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const a=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ct(this.alpha-a,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ct(this.alpha+a,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const a=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ct(this.hue-a,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ct(this.hue+a,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const a=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ct(this.saturation-a,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ct(this.saturation+a,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ct(this.brightness+a,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ct(this.brightness-a,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const a=e.target,s=this.value;e.stopPropagation(),this.input.value?(this.setColor(a.value),a.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const a=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const a=new pt(e);if(!a.isValid)return null;const s=a.toHsl(),n={h:s.h,s:s.s*100,l:s.l*100,a:s.a},l=a.toRgb(),c=a.toHexString(),d=a.toHex8String(),m=a.toHsv(),f={h:m.h,s:m.s*100,v:m.v*100,a:m.a};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},hsv:{h:f.h,s:f.s,v:f.v,string:this.setLetterCase(`hsv(${Math.round(f.h)}, ${Math.round(f.s)}%, ${Math.round(f.v)}%)`)},hsva:{h:f.h,s:f.s,v:f.v,a:f.a,string:this.setLetterCase(`hsva(${Math.round(f.h)}, ${Math.round(f.s)}%, ${Math.round(f.v)}%, ${f.a.toFixed(2).toString()})`)},rgb:{r:l.r,g:l.g,b:l.b,string:this.setLetterCase(`rgb(${Math.round(l.r)}, ${Math.round(l.g)}, ${Math.round(l.b)})`)},rgba:{r:l.r,g:l.g,b:l.b,a:l.a,string:this.setLetterCase(`rgba(${Math.round(l.r)}, ${Math.round(l.g)}, ${Math.round(l.b)}, ${l.a.toFixed(2).toString()})`)},hex:this.setLetterCase(c),hexa:this.setLetterCase(d)}}setColor(e){const a=this.parseColor(e);return a===null?!1:(this.hue=a.hsva.h,this.saturation=a.hsva.s,this.brightness=a.hsva.v,this.alpha=this.opacity?a.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!b1)return;new EyeDropper().open().then(a=>{const s=this.value;this.setColor(a.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const a=this.value;this.disabled||(this.setColor(e),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,a,s,n=100){const l=new pt(`hsva(${e}, ${a}%, ${s}%, ${n/100})`);return l.isValid?l.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,a){if(this.isEmpty=!a,a||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(a);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const a=this.inline?this.base:this.trigger;this.hasFocus&&(a.focus({preventScroll:!0}),a.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const a=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(a===null)return"";switch(e){case"hex":return a.hex;case"hexa":return a.hexa;case"rgb":return a.rgb.string;case"rgba":return a.rgba.string;case"hsl":return a.hsl.string;case"hsla":return a.hsla.string;case"hsv":return a.hsv.string;case"hsva":return a.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,a=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(l=>l.trim()!==""),n=W`
      <div
        part="base"
        class=${me({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?W`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${pa({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${me({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${pa({top:`${a}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${ne(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${pa({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${ne(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?W`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${pa({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${pa({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${ne(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${pa({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":W`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${b1?W`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${s.length>0?W`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(l=>{const c=this.parseColor(l);return c?W`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${ne(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${l}
                      @click=${()=>this.selectSwatch(l)}
                      @keydown=${d=>!this.disabled&&d.key==="Enter"&&this.setColor(c.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${pa({backgroundColor:c.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${l}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?n:W`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${me({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${pa({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${n}
      </sl-dropdown>
    `}};Me.styles=[ge,y9];Me.dependencies={"sl-button-group":Ws,"sl-button":Pe,"sl-dropdown":jt,"sl-icon":Ke,"sl-input":Se,"sl-visually-hidden":zu};g([te('[part~="base"]')],Me.prototype,"base",2);g([te('[part~="input"]')],Me.prototype,"input",2);g([te(".color-dropdown")],Me.prototype,"dropdown",2);g([te('[part~="preview"]')],Me.prototype,"previewButton",2);g([te('[part~="trigger"]')],Me.prototype,"trigger",2);g([pe()],Me.prototype,"hasFocus",2);g([pe()],Me.prototype,"isDraggingGridHandle",2);g([pe()],Me.prototype,"isEmpty",2);g([pe()],Me.prototype,"inputValue",2);g([pe()],Me.prototype,"hue",2);g([pe()],Me.prototype,"saturation",2);g([pe()],Me.prototype,"brightness",2);g([pe()],Me.prototype,"alpha",2);g([C()],Me.prototype,"value",2);g([Vn()],Me.prototype,"defaultValue",2);g([C()],Me.prototype,"label",2);g([C()],Me.prototype,"format",2);g([C({type:Boolean,reflect:!0})],Me.prototype,"inline",2);g([C({reflect:!0})],Me.prototype,"size",2);g([C({attribute:"no-format-toggle",type:Boolean})],Me.prototype,"noFormatToggle",2);g([C()],Me.prototype,"name",2);g([C({type:Boolean,reflect:!0})],Me.prototype,"disabled",2);g([C({type:Boolean})],Me.prototype,"hoist",2);g([C({type:Boolean})],Me.prototype,"opacity",2);g([C({type:Boolean})],Me.prototype,"uppercase",2);g([C()],Me.prototype,"swatches",2);g([C({reflect:!0})],Me.prototype,"form",2);g([C({type:Boolean,reflect:!0})],Me.prototype,"required",2);g([yl({passive:!1})],Me.prototype,"handleTouchMove",1);g([J("format",{waitUntilFirstUpdate:!0})],Me.prototype,"handleFormatChange",1);g([J("opacity",{waitUntilFirstUpdate:!0})],Me.prototype,"handleOpacityChange",1);g([J("value")],Me.prototype,"handleValueChange",1);var O9="sl-color-picker";Me.define("sl-color-picker");de({tagName:O9,elementClass:Me,react:ue,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var D9=fe`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
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
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Mt=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const a=this.getRootNode(),s=this.from.includes("."),n=this.from.includes("[")&&this.from.includes("]");let l=this.from,c="";s?[l,c]=this.from.trim().split("."):n&&([l,c]=this.from.trim().replace(/\]$/,"").split("["));const d="getElementById"in a?a.getElementById(l):null;d?n?e=d.getAttribute(c)||"":s?e=d[c]||"":e=d.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const a=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),n=this.errorLabel||this.localize.term("error"),l=e==="success"?this.successIcon:this.errorIcon,c=st(this,"copy.in",{dir:"ltr"}),d=st(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?s:n,await this.copyIcon.animate(d.keyframes,d.options).finished,this.copyIcon.hidden=!0,this.status=e,l.hidden=!1,await l.animate(c.keyframes,c.options).finished,setTimeout(async()=>{await l.animate(d.keyframes,d.options).finished,l.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(c.keyframes,c.options).finished,this.tooltip.content=a,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return W`
      <sl-tooltip
        class=${me({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Mt.styles=[ge,D9];Mt.dependencies={"sl-icon":Ke,"sl-tooltip":zt};g([te('slot[name="copy-icon"]')],Mt.prototype,"copyIcon",2);g([te('slot[name="success-icon"]')],Mt.prototype,"successIcon",2);g([te('slot[name="error-icon"]')],Mt.prototype,"errorIcon",2);g([te("sl-tooltip")],Mt.prototype,"tooltip",2);g([pe()],Mt.prototype,"isCopying",2);g([pe()],Mt.prototype,"status",2);g([C()],Mt.prototype,"value",2);g([C()],Mt.prototype,"from",2);g([C({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);g([C({attribute:"copy-label"})],Mt.prototype,"copyLabel",2);g([C({attribute:"success-label"})],Mt.prototype,"successLabel",2);g([C({attribute:"error-label"})],Mt.prototype,"errorLabel",2);g([C({attribute:"feedback-duration",type:Number})],Mt.prototype,"feedbackDuration",2);g([C({attribute:"tooltip-placement"})],Mt.prototype,"tooltipPlacement",2);g([C({type:Boolean})],Mt.prototype,"hoist",2);Ge("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Ge("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var L9="sl-copy-button";Mt.define("sl-copy-button");de({tagName:L9,elementClass:Mt,react:ue,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var R9=fe`
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
`,oi=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const a of e)a.type==="attributes"&&a.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await kt(this.body);const{keyframes:a,options:s}=st(this,"details.show",{dir:this.localize.dir()});await gt(this.body,gu(a,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await kt(this.body);const{keyframes:a,options:s}=st(this,"details.hide",{dir:this.localize.dir()});await gt(this.body,gu(a,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ca(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ca(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return W`
      <details
        part="base"
        class=${me({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
    `}};oi.styles=[ge,R9];oi.dependencies={"sl-icon":Ke};g([te(".details")],oi.prototype,"details",2);g([te(".details__header")],oi.prototype,"header",2);g([te(".details__body")],oi.prototype,"body",2);g([te(".details__expand-icon-slot")],oi.prototype,"expandIconSlot",2);g([C({type:Boolean,reflect:!0})],oi.prototype,"open",2);g([C()],oi.prototype,"summary",2);g([C({type:Boolean,reflect:!0})],oi.prototype,"disabled",2);g([J("open",{waitUntilFirstUpdate:!0})],oi.prototype,"handleOpenChange",1);Ge("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Ge("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var B9="sl-details";oi.define("sl-details");de({tagName:B9,elementClass:oi,react:ue,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var H9=fe`
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
`,wi=class extends oe{constructor(){super(...arguments),this.hasSlotController=new ua(this,"footer"),this.localize=new Ie(this),this.modal=new Ry(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ul(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),dl(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=st(this,"dialog.denyClose",{dir:this.localize.dir()});gt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ul(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([kt(this.dialog),kt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const a=st(this,"dialog.show",{dir:this.localize.dir()}),s=st(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([gt(this.panel,a.keyframes,a.options),gt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{$p(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([kt(this.dialog),kt(this.overlay)]);const e=st(this,"dialog.hide",{dir:this.localize.dir()}),a=st(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([gt(this.overlay,a.keyframes,a.options).then(()=>{this.overlay.hidden=!0}),gt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,dl(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ca(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ca(this,"sl-after-hide")}render(){return W`
      <div
        part="base"
        class=${me({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ne(this.noHeader?this.label:void 0)}
          aria-labelledby=${ne(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":W`
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
    `}};wi.styles=[ge,H9];wi.dependencies={"sl-icon-button":Et};g([te(".dialog")],wi.prototype,"dialog",2);g([te(".dialog__panel")],wi.prototype,"panel",2);g([te(".dialog__overlay")],wi.prototype,"overlay",2);g([C({type:Boolean,reflect:!0})],wi.prototype,"open",2);g([C({reflect:!0})],wi.prototype,"label",2);g([C({attribute:"no-header",type:Boolean,reflect:!0})],wi.prototype,"noHeader",2);g([J("open",{waitUntilFirstUpdate:!0})],wi.prototype,"handleOpenChange",1);Ge("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ge("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ge("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Ge("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ge("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var U9="sl-dialog";wi.define("sl-dialog");de({tagName:U9,elementClass:wi,react:ue,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"});var j9=fe`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,li=class extends oe{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:a,height:s}=this.animatedImage;e.width=a,e.height=s,e.getContext("2d").drawImage(this.animatedImage,0,0,a,s),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return W`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?W`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};li.styles=[ge,j9];li.dependencies={"sl-icon":Ke};g([te(".animated-image__animated")],li.prototype,"animatedImage",2);g([pe()],li.prototype,"frozenFrame",2);g([pe()],li.prototype,"isLoaded",2);g([C()],li.prototype,"src",2);g([C()],li.prototype,"alt",2);g([C({type:Boolean,reflect:!0})],li.prototype,"play",2);g([J("play",{waitUntilFirstUpdate:!0})],li.prototype,"handlePlayChange",1);g([J("src")],li.prototype,"handleSrcChange",1);var I9="sl-animated-image";li.define("sl-animated-image");de({tagName:I9,elementClass:li,react:ue,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});const V9=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],P9=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],F9=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],q9=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],G9=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Y9=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],X9=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],W9=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Q9=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Z9=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],K9=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],J9=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],e$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],t$=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],a$=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],i$=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],s$=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],r$=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],n$=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],o$=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],l$=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],c$=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],u$=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],d$=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],h$=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],f$=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],p$=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],m$=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],g$=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],b$=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],v$=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],y$=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],_$=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],x$=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],w$=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],S$=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],C$=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],k$=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],E$=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$$=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],A$=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],T$=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],z$=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],M$=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],N$=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],O$=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],D$=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],L$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],R$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],B$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],H$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],U$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],j$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],I$=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],V$=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],P$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],F$=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],q$=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],G$=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Y$=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],X$=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],W$=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Q$=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Z$=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],K$=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],J$=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],eA=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],tA=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],aA=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],iA=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],sA=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],nA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],oA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],lA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],cA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],uA=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],dA=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],hA=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],fA=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],pA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],mA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],gA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],bA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],vA=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],yA=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],_A=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],wA=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],SA=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],CA=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],kA=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],EA=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],$A=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],AA=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],TA=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],zA=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],MA=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],u2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},NA=Object.freeze(Object.defineProperty({__proto__:null,backInDown:t$,backInLeft:a$,backInRight:i$,backInUp:s$,backOutDown:r$,backOutLeft:n$,backOutRight:o$,backOutUp:l$,bounce:V9,bounceIn:c$,bounceInDown:u$,bounceInLeft:d$,bounceInRight:h$,bounceInUp:f$,bounceOut:p$,bounceOutDown:m$,bounceOutLeft:g$,bounceOutRight:b$,bounceOutUp:v$,easings:u2,fadeIn:y$,fadeInBottomLeft:_$,fadeInBottomRight:x$,fadeInDown:w$,fadeInDownBig:S$,fadeInLeft:C$,fadeInLeftBig:k$,fadeInRight:E$,fadeInRightBig:$$,fadeInTopLeft:A$,fadeInTopRight:T$,fadeInUp:z$,fadeInUpBig:M$,fadeOut:N$,fadeOutBottomLeft:O$,fadeOutBottomRight:D$,fadeOutDown:L$,fadeOutDownBig:R$,fadeOutLeft:B$,fadeOutLeftBig:H$,fadeOutRight:U$,fadeOutRightBig:j$,fadeOutTopLeft:I$,fadeOutTopRight:V$,fadeOutUp:P$,fadeOutUpBig:F$,flash:P9,flip:q$,flipInX:G$,flipInY:Y$,flipOutX:X$,flipOutY:W$,headShake:F9,heartBeat:q9,hinge:vA,jackInTheBox:yA,jello:G9,lightSpeedInLeft:Q$,lightSpeedInRight:Z$,lightSpeedOutLeft:K$,lightSpeedOutRight:J$,pulse:Y9,rollIn:_A,rollOut:xA,rotateIn:eA,rotateInDownLeft:tA,rotateInDownRight:aA,rotateInUpLeft:iA,rotateInUpRight:sA,rotateOut:rA,rotateOutDownLeft:nA,rotateOutDownRight:oA,rotateOutUpLeft:lA,rotateOutUpRight:cA,rubberBand:X9,shake:W9,shakeX:Q9,shakeY:Z9,slideInDown:uA,slideInLeft:dA,slideInRight:hA,slideInUp:fA,slideOutDown:pA,slideOutLeft:mA,slideOutRight:gA,slideOutUp:bA,swing:K9,tada:J9,wobble:e$,zoomIn:wA,zoomInDown:SA,zoomInLeft:CA,zoomInRight:kA,zoomInUp:EA,zoomOut:$A,zoomOutDown:AA,zoomOutLeft:TA,zoomOutRight:zA,zoomOutUp:MA},Symbol.toStringTag,{value:"Module"}));var OA=fe`
  :host {
    display: contents;
  }
`,Nt=class extends oe{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,a;return(a=(e=this.animation)==null?void 0:e.currentTime)!=null?a:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,a;const s=(e=u2[this.easing])!=null?e:this.easing,n=(a=this.keyframes)!=null?a:NA[this.name],c=(await this.defaultSlot).assignedElements()[0];return!c||!n?!1:(this.destroyAnimation(),this.animation=c.animate(n,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return W` <slot @slotchange=${this.handleSlotChange}></slot> `}};Nt.styles=[ge,OA];g([uS("slot")],Nt.prototype,"defaultSlot",2);g([C()],Nt.prototype,"name",2);g([C({type:Boolean,reflect:!0})],Nt.prototype,"play",2);g([C({type:Number})],Nt.prototype,"delay",2);g([C()],Nt.prototype,"direction",2);g([C({type:Number})],Nt.prototype,"duration",2);g([C()],Nt.prototype,"easing",2);g([C({attribute:"end-delay",type:Number})],Nt.prototype,"endDelay",2);g([C()],Nt.prototype,"fill",2);g([C({type:Number})],Nt.prototype,"iterations",2);g([C({attribute:"iteration-start",type:Number})],Nt.prototype,"iterationStart",2);g([C({attribute:!1})],Nt.prototype,"keyframes",2);g([C({attribute:"playback-rate",type:Number})],Nt.prototype,"playbackRate",2);g([J(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Nt.prototype,"handleAnimationChange",1);g([J("play")],Nt.prototype,"handlePlayChange",1);g([J("playbackRate")],Nt.prototype,"handlePlaybackRateChange",1);var DA="sl-animation";Nt.define("sl-animation");de({tagName:DA,elementClass:Nt,react:ue,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var LA=fe`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ur=class extends oe{constructor(){super(...arguments),this.localize=new Ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const a=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[a,...a.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),a.setAttribute("data-default",""),a.slot="separator",a}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(a=>a.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((a,s)=>{const n=a.querySelector('[slot="separator"]');n===null?a.append(this.getSeparator()):n.hasAttribute("data-default")&&n.replaceWith(this.getSeparator()),s===e.length-1?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),W`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ur.styles=[ge,LA];Ur.dependencies={"sl-icon":Ke};g([te("slot")],Ur.prototype,"defaultSlot",2);g([te('slot[name="separator"]')],Ur.prototype,"separatorSlot",2);g([C()],Ur.prototype,"label",2);var RA="sl-breadcrumb";Ur.define("sl-breadcrumb");de({tagName:RA,elementClass:Ur,react:ue,events:{},displayName:"SlBreadcrumb"});var BA=fe`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,ds=class extends oe{constructor(){super(...arguments),this.hasSlotController=new ua(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(a=>a.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return W`
      <div
        part="base"
        class=${me({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?W`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${ne(this.target?this.target:void 0)}"
                rel=${ne(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?W`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?W`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};ds.styles=[ge,BA];g([te("slot:not([name])")],ds.prototype,"defaultSlot",2);g([pe()],ds.prototype,"renderType",2);g([C()],ds.prototype,"href",2);g([C()],ds.prototype,"target",2);g([C()],ds.prototype,"rel",2);g([J("href",{waitUntilFirstUpdate:!0})],ds.prototype,"hrefChanged",1);var HA="sl-breadcrumb-item";ds.define("sl-breadcrumb-item");de({tagName:HA,elementClass:ds,react:ue,events:{},displayName:"SlBreadcrumbItem"});var UA=fe`
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
`,Yn=class extends oe{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return W`
      <span
        part="base"
        class=${me({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Yn.styles=[ge,UA];g([C({reflect:!0})],Yn.prototype,"variant",2);g([C({type:Boolean,reflect:!0})],Yn.prototype,"pill",2);g([C({type:Boolean,reflect:!0})],Yn.prototype,"pulse",2);var jA="sl-badge";Yn.define("sl-badge");de({tagName:jA,elementClass:Yn,react:ue,events:{},displayName:"SlBadge"});var IA=fe`
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
`,Hp=class extends oe{constructor(){super(...arguments),this.hasSlotController=new ua(this,"footer","header","image")}render(){return W`
      <div
        part="base"
        class=${me({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Hp.styles=[ge,IA];var VA="sl-card";Hp.define("sl-card");de({tagName:VA,elementClass:Hp,react:ue,events:{},displayName:"SlCard"});var PA=fe`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Ua=class xr extends oe{constructor(){super(...arguments),this.hasSlotController=new ua(this,"icon","suffix"),this.localize=new Ie(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var a;(a=this.countdownAnimation)==null||a.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var a;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(a=this.countdownAnimation)==null||a.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:a}=this,s="100%",n="0";this.countdownAnimation=a.animate([{width:s},{width:n}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await kt(this.base),this.base.hidden=!1;const{keyframes:a,options:s}=st(this,"alert.show",{dir:this.localize.dir()});await gt(this.base,a,s),this.emit("sl-after-show")}else{$p(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await kt(this.base);const{keyframes:a,options:s}=st(this,"alert.hide",{dir:this.localize.dir()});await gt(this.base,a,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ca(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ca(this,"sl-after-hide")}async toast(){return new Promise(a=>{this.handleCountdownChange(),xr.toastStack.parentElement===null&&document.body.append(xr.toastStack),xr.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{xr.toastStack.removeChild(this),a(),xr.toastStack.querySelector("sl-alert")===null&&xr.toastStack.remove()},{once:!0})})}render(){return W`
      <div
        part="base"
        class=${me({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?W`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?W`
              <div
                class=${me({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Ua.styles=[ge,PA];Ua.dependencies={"sl-icon-button":Et};g([te('[part~="base"]')],Ua.prototype,"base",2);g([te(".alert__countdown-elapsed")],Ua.prototype,"countdownElement",2);g([C({type:Boolean,reflect:!0})],Ua.prototype,"open",2);g([C({type:Boolean,reflect:!0})],Ua.prototype,"closable",2);g([C({reflect:!0})],Ua.prototype,"variant",2);g([C({type:Number})],Ua.prototype,"duration",2);g([C({type:String,reflect:!0})],Ua.prototype,"countdown",2);g([pe()],Ua.prototype,"remainingTime",2);g([J("open",{waitUntilFirstUpdate:!0})],Ua.prototype,"handleOpenChange",1);g([J("duration")],Ua.prototype,"handleDurationChange",1);var d2=Ua;Ge("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ge("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var FA="sl-alert";d2.define("sl-alert");de({tagName:FA,elementClass:d2,react:ue,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"});const qA="_container_buum9_1",GA="_userListItem_buum9_14",YA="_userInfo_buum9_25",XA="_nameContainer_buum9_31",WA="_nickname_buum9_36",QA="_fullName_buum9_40",ZA="_youIndicator_buum9_46",KA="_iconGroup_buum9_53",JA="_removeButton_buum9_59",fi={container:qA,"user-list":"_user-list_buum9_5",userListItem:GA,userInfo:YA,nameContainer:XA,nickname:WA,fullName:QA,youIndicator:ZA,iconGroup:KA,removeButton:JA},eT=e=>e?e.split(" ").map(a=>a.charAt(0).toUpperCase()).join(""):"";function tT({organizationId:e}){const{data:a}=Su({enabled:!0}),{formatMessage:s}=Ve(),{data:n}=bl({organizationId:e,enabled:!!e}),l=Ba(),c=hw(),{data:d,isLoading:m,isError:f,error:p}=lp({organizationId:e,enabled:!!e}),b=I.useMemo(()=>(d??[]).slice().sort((w,E)=>(w.nickname??"").localeCompare(E.nickname??"")),[d]),v=I.useCallback(async w=>{const E=s({id:"manageUsers.removeConfirmation",defaultMessage:"Are you sure you want to remove {username} from this organization?"},{username:w.user_profiles?.firstname||w.nickname||"this user"});window.confirm(E)&&await c.mutateAsync({organizationId:e??"",userProfileId:w.user_profile_id})},[s,e,c]),_=s({id:"manageUsers.inviteUser",defaultMessage:"Invite user"}),S=({user:w})=>{const{formatMessage:E}=Ve(),{mutate:z,isPending:N}=fw({mutationFn:()=>pw(w.user_profile_id),onSuccess:async T=>{const D=E({id:"invite.share.title",defaultMessage:"Invite to Is My Horse"}),M=E({id:"invite.share.text",defaultMessage:"You've been invited to join our stable on Is My Horse. Sign up here:"});await L4(`/invite?token=${T}`,D,M,_)},onError:T=>{console.error("Failed to generate invite link:",T);let M=T?.context?.error?.message;M||(T instanceof Error||typeof T=="object"&&T!==null&&"message"in T)&&(M=T.message),alert(E({id:"invite.share.error",defaultMessage:"Could not create invite link. Please try again."})+`

Details: ${M}`)}});return N?x.jsx(Hy,{style:{fontSize:"1rem"}}):x.jsx(_t,{label:_,name:"envelope",onClick:()=>z()})};return x.jsxs("div",{className:fi.container,children:[x.jsx("ul",{className:fi["user-list"],children:b.map(w=>x.jsxs("li",{className:fi.userListItem,children:[x.jsxs("div",{className:fi.userInfo,children:[x.jsx(Is,{initials:eT(w.nickname),className:fi.avatar}),x.jsxs("div",{className:fi.nameContainer,children:[x.jsxs("span",{className:fi.nickname,children:[w.nickname,w.user_profiles?.auth_user_id===a?.auth_user_id&&x.jsxs("span",{className:fi.youIndicator,children:[" ","(",x.jsx($e,{id:"manageUsers.you",defaultMessage:"You"}),")"]})]}),x.jsxs("span",{className:fi.fullName,children:[w.user_profiles?.firstname," ",w.user_profiles?.lastname]})]})]}),x.jsxs("div",{className:fi.iconGroup,children:[w.user_profiles?.social_profile_id&&x.jsx(_t,{label:s({id:"profile.header.title"}),name:"person-badge",onClick:()=>l(`/profile/${w.user_profiles?.social_profile_id}`)}),(n==="admin"||n==="owner")&&w.user_profiles?.auth_user_id!==a?.auth_user_id&&x.jsxs(x.Fragment,{children:[!w.user_profiles?.auth_user_id&&x.jsx(S,{user:w}),x.jsx(_t,{className:fi.removeButton,label:s({id:"manageUsers.removeUser",defaultMessage:"Remove user"}),name:"trash",onClick:()=>v(w)})]})]})]},w.id))}),m&&x.jsx("p",{children:x.jsx($e,{id:"manageUsers.loading",defaultMessage:"Loading users..."})}),f&&x.jsx("p",{children:x.jsx($e,{id:"manageUsers.error",defaultMessage:"Error loading users: {message}",values:{message:p?.message}})})]})}const aT="_addUserDrawer_uc8mi_1",iT="_formContent_uc8mi_33",sT="_countrySelect_uc8mi_45",Sf={addUserDrawer:aT,formContent:iT,countrySelect:sT},{useAddUserToStable:rT,useUserOrganization:nT,countries:oT}=await la(async()=>{const{useAddUserToStable:e,useUserOrganization:a,countries:s}=await import("./index-BJBUXxrc.js").then(n=>n.aC);return{useAddUserToStable:e,useUserOrganization:a,countries:s}},[]);function lT({isOpen:e,onClose:a,onSaveSuccess:s}){const n=Ve(),{data:l}=nT({enabled:e}),c=rT(),[d,m]=I.useState(""),[f,p]=I.useState(""),[b,v]=I.useState(""),[_,S]=I.useState(""),[w,E]=I.useState(null),[z,N]=I.useState(""),[T,D]=I.useState(""),[M,A]=I.useState("member"),[H,K]=I.useState(""),[Z,V]=I.useState({}),P=[{value:"owner",labelId:"organization.role.owner"},{value:"member",labelId:"organization.role.member"}],ae=[{value:"M",labelId:"gender.male"},{value:"F",labelId:"gender.female"},{value:"X",labelId:"gender.other"}];I.useEffect(()=>{e||ye()},[e]);const ye=()=>{m(""),p(""),v(""),S(""),E(null),N(""),D(""),A("member"),K(""),V({})},ke=()=>{ye(),a()},_e=()=>{const Y={},ee=n.formatMessage({id:"validation.required"});if(d.trim()||(Y.firstname=ee),f.trim()||(Y.lastname=ee),M||(Y.role=ee),_&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_)&&(Y.email=n.formatMessage({id:"validation.emailInvalid"})),w){const ve=Mv(new Date);w>ve&&(Y.dateOfBirth=n.formatMessage({id:"validation.ageMinimum"}))}return V(Y),Object.keys(Y).length===0},xe=async()=>{if(!(!_e()||!l?.id))try{await c.mutateAsync({organization_id:l.id,firstname:d,lastname:f,nickname:b||d,role:M,locale:n.locale,email:_||void 0,date_of_birth:w?Er(w,"yyyy-MM-dd"):void 0,gender:H||void 0,city:z||void 0,country:T||void 0}),s?.(),a()}catch(Y){console.error("Failed to add user:",Y)}},X=Y=>{const ee=Y.locale.substring(0,2),ve=oT.slice().sort((Ae,aa)=>{const Wt=Ae.name[ee]??Ae.name.en,He=aa.name[ee]??aa.name.en;return Wt.localeCompare(He,ee)});if(ee==="nl"){const Ae=ve.find(He=>He.code==="NL"),aa=ve.find(He=>He.code==="BE"),Wt=ve.filter(He=>He.code!=="NL"&&He.code!=="BE");return x.jsxs(R.Fragment,{children:[[Ae,aa].map(He=>x.jsx(Na,{value:He.code,children:He.name[ee]??He.name.en},He.code)),x.jsx(Ap,{}),Wt.map(He=>x.jsx(Na,{value:He.code,children:He.name[ee]??He.name.en},He.code))]})}return ve.map(Ae=>x.jsx(Na,{value:Ae.code,children:Ae.name[ee]??Ae.name.en},Ae.code))};return x.jsxs(Hn,{label:n.formatMessage({id:"manageUsers.addUser"}),placement:"end",open:e,onSlAfterHide:ke,className:Sf.addUserDrawer,children:[x.jsxs("div",{className:Sf.formContent,children:[x.jsx(ea,{"data-testid":"firstname-input",label:n.formatMessage({id:"users.firstNameLabel"}),value:d,onSlInput:Y=>m(Y.target.value),required:!0,helpText:Z.firstname}),x.jsx(ea,{"data-testid":"lastname-input",label:n.formatMessage({id:"users.lastNameLabel"}),value:f,onSlInput:Y=>p(Y.target.value),required:!0,helpText:Z.lastname}),x.jsx(ea,{"data-testid":"nickname-input",label:n.formatMessage({id:"users.nicknameLabel"}),value:b,onSlInput:Y=>v(Y.target.value)}),x.jsx(ea,{"data-testid":"email-input",label:n.formatMessage({id:"auth.emailLabel"}),value:_,onSlInput:Y=>S(Y.target.value),helpText:Z.email}),x.jsx(ea,{"data-testid":"dob-input",label:n.formatMessage({id:"users.dateOfBirthLabel"}),type:"date",max:Er(Mv(new Date),"yyyy-MM-dd"),value:w?Er(w,"yyyy-MM-dd"):"",onSlChange:Y=>E(Y.target.valueAsDate),helpText:Z.dateOfBirth}),x.jsx(zn,{"data-testid":"gender-select",label:n.formatMessage({id:"users.genderLabel"}),value:H,onSlChange:Y=>K(Y.target.value),onSlAfterHide:Y=>{Y.stopPropagation()},children:ae.map(Y=>x.jsx(Na,{value:Y.value,children:n.formatMessage({id:Y.labelId})},Y.value))}),x.jsx(ea,{"data-testid":"city-input",label:n.formatMessage({id:"users.cityLabel"}),value:z,onSlInput:Y=>N(Y.target.value)}),x.jsx(zn,{"data-testid":"country-select",className:Sf.countrySelect,label:n.formatMessage({id:"users.countryLabel"}),value:T,onSlChange:Y=>D(Y.target.value),onSlAfterHide:Y=>{Y.stopPropagation()},hoist:!0,children:X(n)}),x.jsx(zn,{"data-testid":"role-select",label:n.formatMessage({id:"users.roleLabel"}),value:M,onSlChange:Y=>A(Y.target.value),onSlAfterHide:Y=>{Y.stopPropagation()},required:!0,helpText:Z.role,children:P.map(Y=>x.jsx(Na,{value:Y.value,children:n.formatMessage({id:Y.labelId})},Y.value))})]}),x.jsx(gi,{slot:"footer",variant:"primary",onClick:xe,loading:c.isPending,children:x.jsx($e,{id:"common.save",defaultMessage:"Save"})}),x.jsx(gi,{slot:"footer",variant:"neutral",onClick:ke,children:x.jsx($e,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const cT="_pageWrapper_1rzoy_1",uT="_pageContent_1rzoy_11",dT="_drawer_1rzoy_20",Cf={pageWrapper:cT,pageContent:uT,drawer:dT};function hT(){const e=Ve(),{organization_id:a}=Cu(),{data:s}=bl({organizationId:a,enabled:!0}),n=Ba(),l=I.useRef(null),[c,d]=I.useState(!1),m=()=>{d(!0)};return x.jsx(Hn,{label:e.formatMessage({id:"shell.tab.users"}),placement:"end",open:!0,ref:l,className:Cf.drawer,children:x.jsxs("div",{className:Cf.pageWrapper,children:[x.jsx(lT,{isOpen:c,onClose:()=>{l.current?.modal.deactivateExternal(),d(!1)},onSaveSuccess:()=>console.log("User added successfully!")}),x.jsx(ls,{showBackButton:!0,headerActions:s==="admin"||s==="owner"?x.jsxs(x.Fragment,{children:[x.jsx(_t,{"data-testid":"add-user-button",label:e.formatMessage({id:"manageUsers.addUser"}),onClick:()=>{l.current?.modal.activateExternal(),m()},name:"plus"}),x.jsx(_t,{label:e.formatMessage({id:"shell.tab.profile"}),onClick:()=>{l.current?.modal.activateExternal(),n("/profile/me")},name:"person-circle"})]}):null}),x.jsx("div",{className:Cf.pageContent,children:x.jsx(tT,{organizationId:a})})]})})}const fT="_container_1063e_1",pT="_horseInfo_1063e_25",mT="_nameContainer_1063e_31",gT="_horseName_1063e_36",bT="_officialName_1063e_40",vT="_divider_1063e_46",yT="_ownerInfo_1063e_52",_T="_ownerLabel_1063e_59",xT="_status_1063e_63",na={container:fT,"horse-list":"_horse-list_1063e_5","horse-list-item":"_horse-list-item_1063e_14",horseInfo:pT,nameContainer:mT,horseName:gT,officialName:bT,divider:vT,ownerInfo:yT,ownerLabel:_T,status:xT,"icon-group":"_icon-group_1063e_68"},{useOrganizationHorses:wT,useCurrentUserProfile:ST,useDeleteHorse:CT,useOrganizationMembers:kT,useOrganizationHorseTransfers:ET,useCurrentUserOrganizationRole:$T}=await la(async()=>{const{useOrganizationHorses:e,useCurrentUserProfile:a,useDeleteHorse:s,useOrganizationMembers:n,useOrganizationHorseTransfers:l,useCurrentUserOrganizationRole:c}=await import("./index-BJBUXxrc.js").then(d=>d.aC);return{useOrganizationHorses:e,useCurrentUserProfile:a,useDeleteHorse:s,useOrganizationMembers:n,useOrganizationHorseTransfers:l,useCurrentUserOrganizationRole:c}},[]),AT=e=>e?e.split(" ").map(a=>a.charAt(0).toUpperCase()).join(""):"";function TT({organizationId:e}){const{formatMessage:a}=Ve(),s=Ba(),{data:n}=ST({enabled:!0}),l=CT(),{data:c}=$T({organizationId:e,enabled:!!e}),{data:d}=kT({organizationId:e,enabled:!!e}),{data:m}=ET({organizationId:e,enabled:!!e}),{data:f,isLoading:p,isError:b,error:v}=wT({organizationId:e,enabled:!!e}),_=I.useMemo(()=>(f??[]).slice().sort((z,N)=>z.name.localeCompare(N.name)),[f]),S=I.useMemo(()=>d?new Map(d.map(z=>[z.user_profile_id,z])):new Map,[d]),w=I.useMemo(()=>m?new Map(m.map(z=>[z.horse_id,z])):new Map,[m]),E=I.useCallback(async z=>{const N=a({id:"manageHorses.removeConfirmation",defaultMessage:"Are you sure you want to remove {horseName}?"},{horseName:z.name});window.confirm(N)&&await l.mutateAsync({horseId:z.id,organizationId:e??""})},[a,e,l]);return x.jsxs("div",{className:na.container,children:[x.jsx("ul",{className:na["horse-list"],children:_.map(z=>{const N=z.owner_id?S.get(z.owner_id):void 0,T=w.get(z.id),D=z.owner_id===n?.id;return x.jsxs("li",{className:na["horse-list-item"],children:[x.jsxs("div",{className:na.horseInfo,children:[x.jsx(Is,{initials:AT(z.name),className:na.avatar}),x.jsxs("div",{className:na.nameContainer,children:[x.jsx("span",{className:na.horseName,children:z.name}),z.official_name&&x.jsx("span",{className:na.officialName,children:z.official_name})]})]}),x.jsx("hr",{className:na.divider}),x.jsxs("div",{className:na.ownerInfo,children:[x.jsxs("span",{className:na.ownerLabel,children:[x.jsx($e,{id:"horses.ownerLabel",defaultMessage:"Owner"}),":"]}),D?x.jsx("span",{className:na.ownerName,children:x.jsx($e,{id:"manageHorses.yours",defaultMessage:"Yours"})}):x.jsxs("span",{className:na.ownerName,children:[N?.user_profiles?.firstname," ",N?.user_profiles?.lastname]}),T?.status&&x.jsxs("span",{className:na.status,children:["(",x.jsx($e,{id:`ownershipTransfer.status.${T.status}`,defaultMessage:T.status}),")"]})]}),x.jsxs("span",{className:na["icon-group"],children:[z.social_profile_id&&x.jsx(_t,{label:a({id:"profile.header.title"}),name:"person-badge",onClick:()=>s(`/profile/${z.social_profile_id}`)}),(c==="admin"||c==="owner")&&x.jsx(_t,{label:a({id:"manageHorses.removeHorse",defaultMessage:"Remove horse"}),name:"trash",style:{color:"red"},onClick:()=>E(z)})]})]},z.id)})}),p&&x.jsx("p",{children:x.jsx($e,{id:"manageHorses.loading",defaultMessage:"Loading horses..."})}),b&&x.jsx("p",{children:x.jsx($e,{id:"manageHorses.error",defaultMessage:"Error loading horses: {message}",values:{message:v?.message}})}),!p&&!b&&_.length===0&&x.jsx("p",{children:x.jsx($e,{id:"manageHorses.noHorsesFound",defaultMessage:"No horses found that are boarded at this location"})})]})}const zT="_addUserDrawer_u5dxd_1",MT="_formContent_u5dxd_32",NT="_inputWithIcon_u5dxd_45",OT="_countrySelect_u5dxd_57",Cn={addUserDrawer:zT,formContent:MT,inputWithIcon:NT,countrySelect:OT};function DT({isOpen:e,onClose:a,onSaveSuccess:s}){const n=Ve(),{data:l}=op({enabled:e}),{data:c}=lp({organizationId:l?.id,enabled:!!l?.id&&e}),d=mw(),[m,f]=I.useState(""),[p,b]=I.useState(""),[v,_]=I.useState(""),[S,w]=I.useState(""),[E,z]=I.useState(""),[N,T]=I.useState(void 0),[D,M]=I.useState(null),[A,H]=I.useState(""),[K,Z]=I.useState(""),[V,P]=I.useState(""),[ae,ye]=I.useState(""),[ke,_e]=I.useState(""),[xe,X]=I.useState(""),[Y,ee]=I.useState({});I.useEffect(()=>{e||ve()},[e]);const ve=()=>{f(""),b(""),_(""),w(""),z(""),T(void 0),M(null),H(""),Z(""),P(""),ye(""),_e(""),X(""),ee({})},Ae=()=>{ve(),a()},aa=()=>{const se={};return m.trim()||(se.name=n.formatMessage({id:"validation.required"})),N||(se.ownerId=n.formatMessage({id:"validation.required"})),!v.trim()&&!S.trim()&&(se.chipOrUeln=n.formatMessage({id:"validation.chipOrUelnRequired"})),S.trim()&&S.trim().length!==15&&(se.ueln=n.formatMessage({id:"validation.uelnInvalid"})),ee(se),Object.keys(se).length===0},Wt=async()=>{if(!(!aa()||!l?.id||!N))try{await d.mutateAsync({name:m,boarded_at_org_id:l.id,owner_id:N,official_name:p||void 0,chip_number:v||void 0,ueln:S||void 0,passport_number:E||void 0,date_of_birth:D?Er(D,"yyyy-MM-dd"):void 0,gender:A||void 0,color:K||void 0,breed_studbook:V||void 0,country_of_birth:ae||void 0,markings:ke||void 0,chip_location:xe||void 0}),s?.(),a()}catch(se){console.error("Failed to add horse:",se)}},He=async se=>{const{scanBarcode:ya}=await la(async()=>{const{scanBarcode:ut}=await import("./index-DeJbj_xb.js");return{scanBarcode:ut}},__vite__mapDeps([7,1])),Qt=await ya();Qt&&(se==="chipNumber"?_(Qt):se==="ueln"?w(Qt):se==="passportNumber"&&z(Qt))},Ne=se=>{const ya=se.locale.substring(0,2),Qt=gw.slice().sort((ut,nt)=>{const Xe=ut.name[ya]??ut.name.en,Ye=nt.name[ya]??nt.name.en;return Xe.localeCompare(Ye,ya)});if(ya==="nl"){const ut=Qt.find(Ye=>Ye.code==="NL"),nt=Qt.find(Ye=>Ye.code==="BE"),Xe=Qt.filter(Ye=>Ye.code!=="NL"&&Ye.code!=="BE");return x.jsxs(R.Fragment,{children:[[ut,nt].map(Ye=>x.jsx(Na,{value:Ye.code,children:Ye.name[ya]??Ye.name.en},Ye.code)),x.jsx(Ap,{}),Xe.map(Ye=>x.jsx(Na,{value:Ye.code,children:Ye.name[ya]??Ye.name.en},Ye.code))]})}return Qt.map(ut=>x.jsx(Na,{value:ut.code,children:ut.name[ya]??ut.name.en},ut.code))};return x.jsxs(Hn,{label:n.formatMessage({id:"manageHorses.addHorse"}),placement:"end",open:e,onSlAfterHide:a,className:Cn.addUserDrawer,children:[x.jsxs("div",{className:Cn.formContent,children:[x.jsx(ea,{"data-testid":"horse-name-input",label:n.formatMessage({id:"horses.nameLabel"}),value:m,onSlInput:se=>f(se.target.value),required:!0,helpText:Y.name}),x.jsx(ea,{"data-testid":"horse-official-name-input",label:n.formatMessage({id:"horses.officialNameLabel"}),value:p,required:!0,onSlInput:se=>b(se.target.value)}),x.jsx(zn,{"data-testid":"horse-owner-select",label:n.formatMessage({id:"horses.ownerLabel"}),value:N??"",onSlChange:se=>{T(se.target.value)},onSlAfterHide:se=>{se.stopPropagation()},helpText:Y.ownerId,children:c&&c.length>0?c.map(se=>x.jsxs(Na,{value:se.user_profile_id,children:[se.user_profiles?.firstname," ",se.user_profiles?.lastname]},se.user_profile_id)):x.jsx(Na,{value:"",disabled:!0,children:x.jsx($e,{id:"horses.noMembersFound",defaultMessage:"No members found in this stable"})})}),x.jsxs("div",{className:Cn.inputWithIcon,children:[x.jsx(ea,{"data-testid":"horse-chip-number-input",label:n.formatMessage({id:"horses.chipNumberLabel"}),value:v,onSlInput:se=>_(se.target.value),helpText:Y.chipOrUeln}),x.jsx(_t,{"data-testid":"chip-scan-button",name:"qr-code",label:n.formatMessage({id:"horses.scanBarcode"}),onClick:()=>He("chipNumber")})]}),x.jsx(ea,{label:n.formatMessage({id:"horses.chipLocationLabel"}),value:xe,onSlInput:se=>X(se.target.value)}),x.jsxs("div",{className:Cn.inputWithIcon,children:[x.jsx(ea,{"data-testid":"horse-ueln-input",label:n.formatMessage({id:"horses.uelnLabel"}),value:S,onSlInput:se=>w(se.target.value),helpText:Y.ueln||Y.chipOrUeln}),x.jsx(_t,{"data-testid":"ueln-scan-button",name:"qr-code",label:n.formatMessage({id:"horses.scanBarcode"}),onClick:()=>He("ueln")})]}),x.jsx(ea,{label:n.formatMessage({id:"horses.dateOfBirthLabel"}),type:"date",max:new Date().toISOString().split("T")[0],value:D?Er(D,"yyyy-MM-dd"):"",onSlChange:se=>M(se.target.valueAsDate)}),x.jsxs(zn,{label:n.formatMessage({id:"horses.genderLabel"}),value:A,onSlChange:se=>H(se.target.value),onSlAfterHide:se=>{se.stopPropagation()},children:[x.jsx(Na,{value:"Stallion",children:n.formatMessage({id:"gender.stallion"})}),x.jsx(Na,{value:"Mare",children:n.formatMessage({id:"gender.mare"})}),x.jsx(Na,{value:"Gelding",children:n.formatMessage({id:"gender.gelding"})})]}),x.jsx(zn,{label:n.formatMessage({id:"horses.countryOfBirthLabel"}),className:Cn.countrySelect,value:ae,onSlChange:se=>ye(se.target.value),onSlAfterHide:se=>{se.stopPropagation()},hoist:!0,children:Ne(n)}),x.jsxs("div",{className:Cn.inputWithIcon,children:[x.jsx(ea,{label:n.formatMessage({id:"horses.passportNumberLabel"}),value:E,onSlInput:se=>z(se.target.value)}),x.jsx(_t,{name:"qr-code",label:n.formatMessage({id:"horses.scanBarcode"}),onClick:()=>He("passportNumber")})]}),x.jsx(ea,{label:n.formatMessage({id:"horses.colorLabel"}),value:K,onSlInput:se=>Z(se.target.value)}),x.jsx(ea,{label:n.formatMessage({id:"horses.breedStudbookLabel"}),value:V,onSlInput:se=>P(se.target.value)}),x.jsx(ea,{label:n.formatMessage({id:"horses.markingsLabel"}),value:ke,onSlInput:se=>_e(se.target.value)})]}),x.jsx(gi,{slot:"footer",variant:"primary",onClick:Wt,disabled:d.isPending,loading:d.isPending,children:x.jsx($e,{id:"common.save",defaultMessage:"Save"})}),x.jsx(gi,{slot:"footer",variant:"neutral",onClick:Ae,children:x.jsx($e,{id:"common.cancel",defaultMessage:"Cancel"})})]})}const LT="_pageWrapper_uajsx_1",RT="_pageContent_uajsx_10",BT="_drawer_uajsx_19",kf={pageWrapper:LT,pageContent:RT,drawer:BT};function HT(){const e=Ve(),a=bw(),s=Ba(),{organization_id:n}=Cu(),{data:l}=bl({organizationId:n,enabled:!!n}),c=I.useRef(null),[d,m]=I.useState(!1),f=()=>{m(!0)};return x.jsx(Hn,{label:e.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),placement:"end",open:!0,ref:c,className:kf.drawer,children:x.jsxs("div",{className:kf.pageWrapper,children:[x.jsx(DT,{isOpen:d,onClose:()=>{c.current?.modal.deactivateExternal(),m(!1)},onSaveSuccess:()=>{a.invalidateQueries({queryKey:["horses",n]})}}),x.jsx(ls,{showBackButton:!0,headerActions:l==="admin"||l==="owner"?x.jsxs(x.Fragment,{children:[x.jsx(_t,{"data-testid":"add-horse-button",label:e.formatMessage({id:"manageHorses.addHorse",defaultMessage:"Add Horse"}),onClick:()=>{c.current?.modal.activateExternal(),f()},name:"plus"}),x.jsx(_t,{label:e.formatMessage({id:"shell.tab.profile",defaultMessage:"Profile"}),onClick:()=>{c.current?.modal.activateExternal(),s("/profile/me")},name:"person-circle"})]}):null}),x.jsx("div",{className:kf.pageContent,children:x.jsx(TT,{organizationId:n})})]})})}const UT=new OS;function jT({children:e}){return np()?e:x.jsx(hu,{to:"/login",replace:!0})}function IT(){return x.jsx(Vk,{children:x.jsxs($f,{children:[x.jsx(Ft,{path:"/stable",element:x.jsx(mE,{})}),x.jsx(Ft,{path:"/stable/:organization_id/roster/:roster_id",element:x.jsx(M6,{})}),x.jsx(Ft,{path:"/stable/:organization_id/members",element:x.jsx(hT,{})}),x.jsx(Ft,{path:"/stable/:organization_id/horses",element:x.jsx(HT,{})}),x.jsx(Ft,{path:"/horse",element:x.jsx(UE,{})}),x.jsx(Ft,{path:"/profile/me",element:x.jsx(Bv,{})}),x.jsx(Ft,{path:"/profile/:social_id",element:x.jsx(Bv,{})}),x.jsx(Ft,{path:"/invite",element:x.jsx(Yy,{})}),x.jsx(Ft,{path:"/invite-success",element:x.jsx(Xy,{})}),x.jsx(Ft,{path:"/",element:x.jsx(hu,{to:"/stable",replace:!0})})]})})}function VT({handleContinue:e}){const[a]=I.useState("en"),[s,n]=I.useState(bu);return I.useEffect(()=>{la(()=>import("./nl-SWoY35AT.js"),[]).then(l=>{n(l.default)}).catch(()=>{})},[]),x.jsx(Ny,{locale:a,messages:s,wrapRichTextChunksInFragment:!0,children:x.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[x.jsx("h1",{children:x.jsx($e,{id:"invite.noProfile.title"})}),x.jsxs("p",{children:[x.jsx($e,{id:"invite.noProfile.message"})," "]}),x.jsx(gi,{variant:"primary",onClick:e,children:x.jsx($e,{id:"common.continue"})})]})})}function PT(){const[e,a]=I.useState(null),[s,n]=I.useState(!0),[l,c]=I.useState("en"),[d,m]=I.useState(bu),f=wu();I.useEffect(()=>{ei.auth.getSession().then(({data:{session:w}})=>{a(w),n(!1)});const{data:{subscription:S}}=ei.auth.onAuthStateChange((w,E)=>{a(E),n(!1)});return()=>S.unsubscribe()},[]);const{data:p,isLoading:b,isSuccess:v}=Su({enabled:!!e});if(I.useEffect(()=>{const w=p?.locale||"nl";w!==l&&R3(Object.assign({"../translations/en.json":()=>la(()=>Promise.resolve().then(()=>Pk),void 0),"../translations/nl.json":()=>la(()=>import("./nl-SWoY35AT.js"),[])}),`../translations/${w}.json`,3).then(E=>{c(w),m(E.default)}).catch(()=>{c("en"),m(bu)})},[p,l]),s||e&&b)return null;const _=f.pathname.startsWith("/invite");return e&&v&&!p&&!_?x.jsx(VT,{handleContinue:()=>void ei.auth.signOut()}):!s&&!e&&f.pathname==="/"&&!Ar.isNativePlatform()?(window.location.replace("/home.html"),null):x.jsx(yw.Provider,{value:e,children:x.jsx(Ny,{locale:l,messages:d,wrapRichTextChunksInFragment:!0,children:e?x.jsxs($f,{children:[x.jsx(Ft,{path:"/login",element:x.jsx(hu,{to:"/stable",replace:!0})}),x.jsx(Ft,{path:"/*",element:x.jsx(jT,{children:x.jsx(IT,{})})})]}):x.jsxs($f,{children:[x.jsx(Ft,{path:"/login",element:x.jsx(Gv,{})}),x.jsx(Ft,{path:"/invite",element:x.jsx(Yy,{})}),x.jsx(Ft,{path:"/invite-success",element:x.jsx(Xy,{})}),Ar.isNativePlatform()&&x.jsx(Ft,{path:"/",element:x.jsx(hu,{to:"/login",replace:!0})}),x.jsx(Ft,{path:"*",element:x.jsx(Gv,{})})]})})})}function FT(){return x.jsx(vw,{client:UT,children:x.jsx(PT,{})})}Mf("/");L3();const qT=Hw.createRoot(document.getElementById("root"));qT.render(x.jsx(I.StrictMode,{children:x.jsx(Aw,{children:x.jsx(FT,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("SW registered: ",e)}).catch(e=>{console.log("SW registration failed: ",e)})});export{s3 as H,L4 as a,YT as c,XT as f,o3 as g,i3 as h,WT as r,D4 as s};
